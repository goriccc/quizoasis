'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Play, RotateCcw, Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import { Locale } from '@/i18n';
import {
  averagePhase3FaceMetrics,
  classifyPhase3FaceLoveWeakness,
  faceLoveWeaknessText,
  getPhase3FaceLoveWeakness,
  measurePhase3FaceFrame,
  type Phase3FaceLoveWeaknessResult,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceLoveWeaknessData';
import { useLatestTestSlugs } from '@/lib/hooks/useLatestTestSlugs';
import { incrementPlayCount } from '@/lib/supabase';
import { formatPlayCount, getThumbnailUrl } from '@/lib/utils';

interface Phase3FaceLoveWeaknessTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  playCount?: number;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
}

type FailCode = Phase3FaceQualityCode | 'model';

export default function Phase3FaceLoveWeaknessTestClient({
  locale,
  slug,
  title,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Phase3FaceLoveWeaknessTestClientProps) {
  const t = useTranslations('phase3FaceLoveWeaknessTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase3FaceLoveWeaknessResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [failCode, setFailCode] = useState<FailCode | null>(null);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [similarTestsState, setSimilarTestsState] = useState<any[]>([]);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [includePhoto, setIncludePhoto] = useState(true);
  const [showResultAd, setShowResultAd] = useState(false);
  const [showPopularAd, setShowPopularAd] = useState(false);
  const resultAdRef = useRef<HTMLDivElement>(null);
  const popularAdRef = useRef<HTMLDivElement>(null);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const photoRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const latestTestSlugs = useLatestTestSlugs();

  useEffect(() => {
    const loadSimilar = async () => {
      try {
        const similarResponse = await fetch(`/api/tests/similar?excludeSlug=${slug}&locale=${locale}&tags=${encodeURIComponent('얼굴')}&limit=12`);
        if (similarResponse.ok) {
          const similarData = await similarResponse.json();
          setSimilarTestsState(similarData.tests || []);
        }
      } catch (error) {
        console.error('테스트 로드 실패:', error);
      }
    };
    loadSimilar();
  }, [slug, locale]);

  useEffect(() => {
    if (!showResult) return;
    const loadPopular = async () => {
      try {
        const popularResponse = await fetch(`/api/tests/popular?locale=${locale}`);
        if (popularResponse.ok) {
          const popularData = await popularResponse.json();
          setPopularTestsState(popularData.tests || []);
        }
      } catch (error) {
        console.error('테스트 로드 실패:', error);
      }
    };
    loadPopular();
  }, [showResult, locale]);

  useEffect(() => {
    if (!showLoadingSpinner) return;
    const timer = setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoadingSpinner]);

  useEffect(() => {
    if (!showResult) return;
    const nearView = (node: HTMLDivElement | null) => {
      if (!node) return false;
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewH + 240 && rect.bottom > -80;
    };
    const reveal = () => {
      if (nearView(resultAdRef.current)) setShowResultAd(true);
      if (nearView(popularAdRef.current)) setShowPopularAd(true);
    };
    reveal();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === resultAdRef.current) setShowResultAd(true);
        if (entry.target === popularAdRef.current) setShowPopularAd(true);
      });
    }, { rootMargin: '240px 0px' });
    if (resultAdRef.current) observer.observe(resultAdRef.current);
    if (popularAdRef.current) observer.observe(popularAdRef.current);
    window.addEventListener('scroll', reveal, true);
    window.addEventListener('resize', reveal);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', reveal, true);
      window.removeEventListener('resize', reveal);
    };
  }, [showResult, popularTestsState.length]);

  const shareLine = result ? faceLoveWeaknessText(getPhase3FaceLoveWeakness(result.primaryId).shareLine, locale) : '';

  const pageUrl = () => `https://myquizoasis.com${window.location.pathname}`;

  const shareTextFor = (platform: 'default' | 'kakao' | 'wechat' | 'whatsapp' | 'telegram' | 'line') => {
    if (!result) {
      const startKey = {
        default: 'startDefault',
        kakao: 'startKakao',
        wechat: 'startWechat',
        whatsapp: 'startWhatsapp',
        telegram: 'startTelegram',
        line: 'startLine',
      }[platform];
      return t(`shareMessages.${startKey}`);
    }
    return t(`shareMessages.${platform}`, { type: shareLine });
  };

  const handleStartTest = async () => {
    setStarted(true);
    await incrementPlayCount(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetCapture = () => {
    setPreviewUrl(null);
    setFailCode(null);
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setIncludePhoto(true);
    setShowResultAd(false);
    setShowPopularAd(false);
    photoRef.current = null;
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const analyzeUrls = async (imageUrls: string[]) => {
    setFailCode(null);
    setShowLoadingSpinner(false);
    setPreviewUrl(imageUrls[0] || null);
    photoRef.current = imageUrls[imageUrls.length - 1] || null;
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const vision = await import('@mediapipe/tasks-vision');
      const filesetResolver = await (vision as any).FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );
      const landmarker = await (vision as any).FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
          delegate: 'CPU',
        },
        numFaces: 2,
        runningMode: 'IMAGE',
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: true,
        minFaceDetectionConfidence: 0.5,
        minFacePresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
      const metricsList: Phase3FaceMetrics[] = [];
      try {
        for (const imageUrl of imageUrls) {
          const img = document.createElement('img');
          img.src = imageUrl;
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error('image'));
          });
          const detection = landmarker.detect(img);
          const faces = detection?.faceLandmarks || [];
          const measured = measurePhase3FaceFrame({
            faceCount: faces.length,
            landmarks: faces[0],
            blendshapes: detection?.faceBlendshapes?.[0]?.categories,
            imageWidth: img.naturalWidth || img.width,
            matrix: detection?.facialTransformationMatrixes?.[0]?.data,
          });
          if (!measured.ok) {
            setFailCode(measured.code);
            setPreviewUrl(null);
            return;
          }
          metricsList.push(measured.metrics);
        }
      } finally {
        landmarker.close?.();
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
      const classified = classifyPhase3FaceLoveWeakness(averagePhase3FaceMetrics(metricsList));
      setResult(classified);
      setShowLoadingSpinner(true);
    } catch (error) {
      console.error('얼굴 분석 시작 실패');
      setFailCode('model');
      setPreviewUrl(null);
      photoRef.current = null;
    }
  };

  const handleImageSourceSelect = (source: 'camera' | 'gallery') => {
    setShowImageSourceModal(false);
    if (source === 'camera') {
      if (isMobile) cameraInputRef.current?.click();
      else startFrontCameraAndCapture();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      if (typeof imageData === 'string') analyzeUrls([imageData]);
    };
    reader.readAsDataURL(file);
  };

  const startFrontCameraAndCapture = async () => {
    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
      });
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas || !stream) {
        setFailCode('model');
        return;
      }
      video.srcObject = stream;
      await new Promise((resolve) => {
        video.onloadedmetadata = () => resolve(null);
      });
      await video.play();
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setFailCode('model');
        return;
      }
      const frames: string[] = [];
      for (let i = 0; i < 3; i += 1) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        frames.push(canvas.toDataURL('image/jpeg', 0.85));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        await new Promise((resolve) => setTimeout(resolve, 140));
      }
      await analyzeUrls(frames);
    } catch (error) {
      console.error('카메라 권한 또는 캡처 실패');
      setFailCode('model');
    } finally {
      stream?.getTracks().forEach((track) => track.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
    }
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(pageUrl());
    alert(t('alerts.linkCopied'));
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    const kakao = (window as any).Kakao;
    if (!kakao || !kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    const currentUrl = pageUrl();
    try {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: shareTextFor('kakao'),
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
        },
        buttons: [{ title: t('ui.startTest'), link: { mobileWebUrl: currentUrl, webUrl: currentUrl } }],
      });
    } catch (error) {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(pageUrl());
    const text = encodeURIComponent(shareTextFor('telegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    try {
      await navigator.clipboard.writeText(`${shareTextFor('wechat')}\n\n${pageUrl()}`);
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(pageUrl());
    const text = encodeURIComponent(shareTextFor('line'));
    window.open(`https://social-plugins.line.me/lineit/page?url=${url}&text=${text}`, '_blank');
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(pageUrl());
    const text = encodeURIComponent(shareTextFor('whatsapp'));
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareMessage = `${shareTextFor('default')}\n\n${pageUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareMessage, url: pageUrl() });
      } catch (error) {
        /* 사용자가 공유 창을 닫은 경우 */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareMessage);
      alert(t('alerts.linkCopied'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const downloadCard = async (ratio: '1:1' | '9:16') => {
    if (!result) return;
    const primary = getPhase3FaceLoveWeakness(result.primaryId);
    const width = 1080;
    const height = ratio === '1:1' ? 1080 : 1920;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#fde68a');
    gradient.addColorStop(0.45, '#f9a8d4');
    gradient.addColorStop(1, '#7c3aed');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    const photoOn = includePhoto && !!photoRef.current;
    if (photoOn && photoRef.current) {
      const photo = await loadImage(photoRef.current);
      const size = Math.round(width * 0.38);
      const x = (width - size) / 2;
      const y = ratio === '1:1' ? 90 : 180;
      ctx.save();
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      drawCoverImage(ctx, photo, x, y, size, size);
      ctx.restore();
    }
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    const emojiY = photoOn ? (ratio === '1:1' ? 560 : 780) : ratio === '1:1' ? 300 : 460;
    ctx.font = `${ratio === '1:1' ? 160 : 200}px sans-serif`;
    ctx.fillText(primary.emoji, width / 2, emojiY);
    ctx.font = `bold ${ratio === '1:1' ? 72 : 88}px sans-serif`;
    wrapCanvasText(ctx, faceLoveWeaknessText(primary.name, locale), width / 2, emojiY + (ratio === '1:1' ? 110 : 140), width - 140, ratio === '1:1' ? 84 : 100);
    ctx.font = `${ratio === '1:1' ? 40 : 48}px sans-serif`;
    wrapCanvasText(
      ctx,
      faceLoveWeaknessText(primary.cardPhrase, locale),
      width / 2,
      emojiY + (ratio === '1:1' ? 230 : 300),
      width - 160,
      ratio === '1:1' ? 56 : 68
    );
    ctx.font = 'bold 32px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText('QuizOasis', width / 2, height - 70);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `face-love-weakness-${primary.id}-${ratio === '1:1' ? 'square' : 'story'}.png`;
    link.click();
    ctx.clearRect(0, 0, width, height);
  };

  const shareButtons = (
    <div className="flex justify-center gap-2">
      <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
      </button>
      <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
      </button>
      <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
      </button>
      <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
      </button>
      <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
      </button>
      <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
        <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
      </button>
    </div>
  );

  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700 flex items-center justify-center">
            {t('ui.analyzing').replace(/[.…]+$/, '')}
            <span className="ml-1 inline-flex">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span>
            </span>
          </p>
        </div>
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>
      </div>
    );
  }

  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {t('ui.testCompleted')}</h2>
          <div className="mb-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP} style={{ width: '100%', height: '250px' }} className="mx-auto w-full" />
          </div>
          <button onClick={handleShowResult} className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold">
            {t('ui.viewResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    const primary = getPhase3FaceLoveWeakness(result.primaryId);
    const companion = result.companionId ? getPhase3FaceLoveWeakness(result.companionId) : null;
    const primaryName = faceLoveWeaknessText(primary.name, locale);
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h1 className="text-xl font-bold text-gray-800 mb-3 text-center">{t('ui.yourResult')}</h1>
            <p className="text-[6.75rem] leading-none text-center">{primary.emoji}</p>
            <p className="text-2xl font-bold text-gray-900 mt-3 text-center">{primaryName}</p>
            <p className="text-sm text-gray-700 mt-2 text-center">{faceLoveWeaknessText(primary.aiRead, locale)}</p>
          </div>

          {companion && (
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 text-left">🩹 {t('ui.companion')}</h3>
              <p className="text-6xl leading-none text-center mt-3">{companion.emoji}</p>
              <p className="text-base font-bold text-gray-800 mt-3 text-center">{faceLoveWeaknessText(companion.name, locale)}</p>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg mb-3 overflow-hidden">
            <div className="p-4">
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 px-4 py-4 text-center">
                <p className="text-base font-semibold text-gray-800 leading-relaxed">{faceLoveWeaknessText(primary.quote, locale)}</p>
              </div>
              <div className="mt-3 grid gap-2">
                <div className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                  <p className="text-xs font-bold text-amber-700 mb-1 text-left">🫧 {t('ui.habit')}</p>
                  <p className="text-sm text-gray-800 text-center">{faceLoveWeaknessText(primary.habit, locale)}</p>
                </div>
                <div className="rounded-xl border border-fuchsia-100 bg-fuchsia-50 px-4 py-3">
                  <p className="text-xs font-bold text-fuchsia-700 mb-1 text-left">✨ {t('ui.strength')}</p>
                  <p className="text-sm text-gray-800 text-center">{faceLoveWeaknessText(primary.strength, locale)}</p>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                  <p className="text-xs font-bold text-indigo-700 mb-2 text-left">💡 {t('ui.fixes')}</p>
                  <div className="grid gap-1">
                    {[primary.fix1, primary.fix2, primary.fix3].map((fix) => (
                      <p key={faceLoveWeaknessText(fix, locale)} className="text-sm text-gray-800 text-center">
                        {faceLoveWeaknessText(fix, locale)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-3 px-2">{t('ui.privacy')}</p>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">🖼️ {t('ui.cardTitle')}</h3>
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-3">
              <input type="checkbox" checked={includePhoto} onChange={(event) => setIncludePhoto(event.target.checked)} />
              {t('ui.includePhoto')}
            </label>
            <div className="flex gap-2">
              <button onClick={() => downloadCard('1:1')} className="flex-1 bg-rose-500 text-white font-bold py-3 rounded-xl">
                {t('ui.cardSquare')}
              </button>
              <button onClick={() => downloadCard('9:16')} className="flex-1 bg-violet-600 text-white font-bold py-3 rounded-xl">
                {t('ui.cardStory')}
              </button>
            </div>
          </div>

          <div className="mt-8 mb-6 px-4">
            <button onClick={handleShareResult} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl">
              {t('ui.shareResult')}
            </button>
          </div>
          <div ref={resultAdRef} className="my-6 px-4" style={{ minHeight: 250 }}>
            {showResultAd && (
              <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 px-4">
            <button onClick={resetCapture} className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl">
              {t('ui.retake')}
            </button>
            <Link href={`/${locale}`} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl text-center">
              {t('ui.otherTests')}
            </Link>
          </div>
          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareResultWithFriends')}</h2>
            {shareButtons}
          </div>
          <TestGrid title={t('ui.similarTests')} tests={similarTestsState} locale={locale} latestTestSlugs={latestTestSlugs} popularLabel={t('ui.popularBadge')} />
          {popularTestsState.length > 0 && (
            <div ref={popularAdRef} className="mb-6 px-4" style={{ minHeight: 250 }}>
              {showPopularAd && (
                <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5} style={{ width: '100%', height: '250px' }} className="mx-auto w-full" />
              )}
            </div>
          )}
          <TestGrid title={tGlobal('recommendations.popularTestsTop5')} tests={popularTestsState} locale={locale} latestTestSlugs={latestTestSlugs} popularLabel={t('ui.popularBadge')} />
        </div>
      </div>
    );
  }

  if (started && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-slate-100">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t('ui.captureTitle')}</h1>
            <p className="text-gray-600 leading-relaxed">{t('ui.guide')}</p>
            <p className="text-gray-500 mt-2">{t('ui.guidePrivacy')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-purple-300 mb-6">
            <div className="text-center">
              {!previewUrl ? (
                <>
                  <div className="mb-6 flex justify-center">
                    <div className="w-40 h-52 rounded-[50%] border-4 border-dashed border-purple-300 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-purple-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleImageSourceSelect('camera')}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-full shadow-lg flex items-center justify-center"
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      {t('ui.takePhoto')}
                    </button>
                    <button
                      onClick={() => handleImageSourceSelect('gallery')}
                      className="w-full bg-gray-700 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      {t('ui.selectFromGallery')}
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-6">
                  <p className="mb-4 text-center font-bold text-gray-700 flex items-center justify-center">
                    {t('ui.proceedingWithPhoto')}
                    <span className="ml-1 inline-flex">
                      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span>
                    </span>
                  </p>
                  <div className="flex items-center justify-center relative w-full" style={{ maxHeight: '600px' }}>
                    <Image src={previewUrl} alt={t('ui.selectedPhoto')} width={800} height={600} className="w-full max-w-full h-auto rounded-lg object-contain" style={{ maxHeight: '600px' }} unoptimized />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
          </div>
          <video ref={videoRef} className="hidden" playsInline muted />
          <canvas ref={canvasRef} className="hidden" />
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <input ref={cameraInputRef} type="file" accept="image/*" capture="user" onChange={handleFileSelect} className="hidden" />
          <div className="mt-8 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareWithFriends')}</h2>
            {shareButtons}
          </div>
        </div>
        {showImageSourceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('ui.selectPhotoMethod')}</h3>
              <div className="border-b border-gray-200 mb-6"></div>
              <div className="space-y-4">
                <button onClick={() => handleImageSourceSelect('camera')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 mr-2" />
                  {t('ui.takePhoto')}
                </button>
                <button onClick={() => handleImageSourceSelect('gallery')} className="w-full bg-gray-700 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center">
                  <Upload className="w-5 h-5 mr-2" />
                  {t('ui.selectFromGallery')}
                </button>
                <button onClick={() => setShowImageSourceModal(false)} className="w-full bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-full">
                  {t('ui.cancel')}
                </button>
              </div>
            </div>
          </div>
        )}
        {failCode && (
          <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4 max-w-md w-full">
              <div className="flex justify-center mb-6">
                <div className="animate-bounce">
                  <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('ui.faceNotDetected')}</h2>
              <p className="text-gray-600 text-center mb-6">
                {failCode === 'none' ? t('ui.faceNotDetectedDescription') : t(`ui.fail.${failCode}`)}
              </p>
              <div className="bg-white rounded-xl border-2 border-gray-100 p-4 mb-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  <h3 className="font-bold text-gray-800">{t('ui.tips')}</h3>
                </div>
                <ul className="space-y-2">
                  {[t('ui.tipCenter'), t('ui.tipLighting'), t('ui.tipNoObstruction'), t('ui.tipClear')].map((tip) => (
                    <li key={tip} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setFailCode(null)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                {t('ui.retrySelectPhoto')}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
          <Image
            src={getThumbnailUrl(thumbnail || 'p3_test_face_love_weakness.webp')}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          {isLatestTest && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>}
          {badgeType === 'popular' && <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{t('ui.popularBadge')}</div>}
          {badgeType === 'hot' && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>}
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
          <div className="my-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
          </div>
          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
            <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p>{t('startMessage.line3')}</p>
          </div>
          <div className="flex justify-center mb-4">
            <button onClick={handleStartTest} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg">
              {t('ui.startTest')}
            </button>
          </div>
          <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
            {t('ui.totalParticipants', { count: formatPlayCount(playCount, locale as Locale) })}
          </p>
          <div className="max-w-[680px] mx-auto mb-6">
            <div className="flex justify-center">
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto w-full"
              />
            </div>
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareWithFriends')}</h2>
            {shareButtons}
          </div>
          <TestGrid
            title={t('ui.similarTests')}
            tests={similarTestsState}
            locale={locale}
            latestTestSlugs={latestTestSlugs}
            popularLabel={t('ui.popularBadge')}
            limit={12}
            columns="2"
          />
        </div>
      </div>
    </div>
  );
}

function TestGrid({
  title,
  tests,
  locale,
  latestTestSlugs,
  popularLabel,
  limit = 5,
  columns = '3',
}: {
  title: string;
  tests: any[];
  locale: string;
  latestTestSlugs: string[];
  popularLabel: string;
  limit?: number;
  columns?: '2' | '3';
}) {
  if (!tests.length) return null;
  const gridClass = columns === '2'
    ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
  return (
    <div className="mb-8 pb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className={gridClass}>
        {tests.slice(0, limit).map((test) => {
          const testTitle = typeof test.title === 'string' ? test.title : test.title?.[locale] || test.title?.ko || 'Test';
          return (
            <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={getThumbnailUrl(test.thumbnail)} alt={testTitle} fill className="object-cover" sizes="240px" />
                  {latestTestSlugs.includes(test.slug) && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">NEW</div>
                  )}
                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                    <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">{popularLabel}</div>
                  )}
                </div>
                <div className="p-4 flex items-center gap-3">
                  <h3 className="font-semibold text-gray-800 line-clamp-2 flex-1">{testTitle}</h3>
                  <span className="text-sm flex items-center gap-1 flex-shrink-0">
                    <Play size={14} />
                    {formatPlayCount(test.playCount, locale as Locale)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function drawCoverImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  dx: number,
  dy: number,
  dw: number,
  dh: number
) {
  const scale = Math.max(dw / image.width, dh / image.height);
  const sw = dw / scale;
  const sh = dh / scale;
  const sx = (image.width - sw) / 2;
  const sy = (image.height - sh) / 2;
  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('image'));
    img.src = src;
  });
}

function wrapCanvasText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const tokens = text.split(' ').flatMap((word) => {
    if (ctx.measureText(word).width <= maxWidth) return [word];
    const chars = Array.from(word);
    const parts: string[] = [];
    let part = '';
    chars.forEach((char) => {
      const next = part + char;
      if (ctx.measureText(next).width > maxWidth && part) {
        parts.push(part);
        part = char;
      } else {
        part = next;
      }
    });
    if (part) parts.push(part);
    return parts;
  });
  let line = '';
  let offset = 0;
  tokens.forEach((word, index) => {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, y + offset);
      offset += lineHeight;
      line = word;
    } else {
      line = next;
    }
    if (index === tokens.length - 1) ctx.fillText(line, x, y + offset);
  });
}
