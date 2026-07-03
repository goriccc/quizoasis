'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Camera, Upload, RotateCcw, AlertCircle, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount } from '@/lib/supabase';
import { Locale } from '@/i18n';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';
import ProductRecommendations from '@/components/ProductRecommendations';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import { FaceReincarnationResult, calculateFaceReincarnationResult, FaceReincarnationTestClientProps } from '@/lib/faceReincarnationData';
import { useLatestTestSlugs } from '@/lib/hooks/useLatestTestSlugs';

// MediaPipe will be dynamically imported

export default function FaceReincarnationTestClient({ 
  locale, 
  slug, 
  title, 
  description,
  thumbnail,
  playCount = 0,
  similarTests = []
,
  isLatestTest = false,
  badgeType = null
}: FaceReincarnationTestClientProps) {
  const t = useTranslations('faceReincarnationTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FaceReincarnationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [faceDetected, setFaceDetected] = useState(false);
  const [faceQuality, setFaceQuality] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const [showFaceDetectError, setShowFaceDetectError] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [similarTestsState, setSimilarTestsState] = useState<any[]>([]);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const latestTestSlugs = useLatestTestSlugs();
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // 이미지 품질 산정 유틸리티 (간단한 샤프니스 + 얼굴 박스 비율 기반)
  function clamp(value: number, min: number, max: number): number { return Math.max(min, Math.min(max, value)); }

  function estimateSharpness(ctx: CanvasRenderingContext2D, width: number, height: number): number {
    // 그레이스케일 분산을 간단한 선명도 지표로 사용 (샘플링으로 비용 절감)
    const step = 8; // 샘플 간격
    const w = Math.max(1, Math.floor(width / step));
    const h = Math.max(1, Math.floor(height / step));
    const sampleData = ctx.getImageData(0, 0, width, height).data;
    let sum = 0; let sumSq = 0; let count = 0;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4;
        const r = sampleData[idx];
        const g = sampleData[idx + 1];
        const b = sampleData[idx + 2];
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        sum += gray; sumSq += gray * gray; count += 1;
      }
    }
    if (count === 0) return 0;
    const mean = sum / count;
    const variance = clamp((sumSq / count) - mean * mean, 0, 255 * 255);
    // 0~1 정규화 (경험적 스케일)
    return clamp(variance / (255 * 255 / 6), 0, 1);
  }

  function estimateFaceBoxRatio(landmarks: any[], imgWidth: number, imgHeight: number): number {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    landmarks.forEach((p: any) => {
      const x = p.x ?? p[0];
      const y = p.y ?? p[1];
      if (x < minX) minX = x; if (y < minY) minY = y; if (x > maxX) maxX = x; if (y > maxY) maxY = y;
    });
    // 일부 라이브러리는 정규화 좌표(0~1)를 반환
    const isNormalized = maxX <= 1.2 && maxY <= 1.2;
    const w = (isNormalized ? (maxX - minX) * imgWidth : (maxX - minX));
    const h = (isNormalized ? (maxY - minY) * imgHeight : (maxY - minY));
    const area = Math.max(0, w) * Math.max(0, h);
    const ratio = area / (imgWidth * imgHeight);
    return clamp(ratio * 3, 0, 1); // 얼굴이 화면의 1/3 차지 시 1.0로 근사
  }

  // 모바일 감지
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // MediaPipe will be loaded dynamically when needed

  // 알리익스프레스 상품 미리 로드 (시작 화면용 - 일반 추천)
  useEffect(() => {
    if (!started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          const keyword = locale === 'ko' ? 'trending products' : 'Beauty, Cosmetics, Gift';
          const products = await searchAliExpressProducts(keyword, 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [locale, started, aliProducts.length]);
// 유사한 테스트와 인기 테스트 로드 (결과 화면용)
  useEffect(() => {
    if (showResult) {
      const loadTests = async () => {
        try {
          // 유사한 테스트 로드 (태그 기반) - 얼굴 태그만 사용
          const similarResponse = await fetch(`/api/tests/similar?excludeSlug=${slug}&locale=${locale}&tags=얼굴`);
          if (similarResponse.ok) {
            const similarData = await similarResponse.json();
            setSimilarTestsState(similarData.tests || []);
          }

          // 인기 테스트 로드
          const popularResponse = await fetch(`/api/tests/popular?locale=${locale}`);
          if (popularResponse.ok) {
            const popularData = await popularResponse.json();
            setPopularTestsState(popularData.tests || []);
          }
        } catch (error) {
          console.error('테스트 로드 실패:', error);
        }
      };
      loadTests();
    }
  }, [showResult, slug, locale]);

  // 3초 지연 로딩 스피너
  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  // 테스트 시작
  const handleStartTest = async () => {
    setStarted(true);
    await incrementPlayCount(slug);
    // 진행 화면 맨 처음으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 이미지 소스 선택 (모바일에서만)
  const handleImageSourceSelect = (source: 'camera' | 'gallery') => {
    setShowImageSourceModal(false);
    if (source === 'camera') {
      // 모바일에서는 capture 속성이 있는 input을 클릭하여 네이티브 카메라 앱 열기
      cameraInputRef.current?.click();
    } else {
      fileInputRef.current?.click();
    }
  };

  // 카메라 시작 (전면 우선)
  const startCamera = async () => {
    try {
      let stream: MediaStream | null = null;

      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const front = devices.find(d => d.kind === 'videoinput' && /front|user|앞|전면/i.test(d.label || ''));
        if (front && front.deviceId) {
          try {
            stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: front.deviceId }, width: { ideal: 640 }, height: { ideal: 480 } } });
          } catch {}
        }
      }

      if (!stream) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'user' }, width: { ideal: 640 }, height: { ideal: 480 } } });
        } catch {}
      }

      if (!stream) {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } });
      }
      
      if (stream) {
        // 후면이 선택되었는지 확인 후 재시도 로직
        const picked = stream.getVideoTracks()[0];
        const s = picked.getSettings();
        const lbl = (picked.label || '').toLowerCase();
        const looksBack = /back|rear|environment|world/.test(lbl) || /environment/i.test(String(s.facingMode || ''));

        if (looksBack) {
          picked.stop();
          try {
            // iOS/안드 공통 강제 힌트
            stream = await navigator.mediaDevices.getUserMedia({ video: { advanced: [{ facingMode: 'user' }], width: { ideal: 640 }, height: { ideal: 480 } } });
          } catch {}
        }
      }

      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('카메라 접근 실패:', error);
      setError(t('alerts.cameraError'));
    }
  };

  // 사진 촬영
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        const imageData = canvas.toDataURL('image/jpeg');
        // 먼저 이미지만 표시하고 진행 화면에 머물기
        setCapturedImage(imageData);
        setShowImagePreview(true);
        // 분석은 백그라운드에서 진행
        analyzeFace(imageData);
        
        // 카메라 정지
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      }
    }
  };

  // 파일 선택
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        // 먼저 이미지만 표시하고 진행 화면에 머물기
        setCapturedImage(imageData);
        setShowImagePreview(true);
        // 분석은 백그라운드에서 진행
        analyzeFace(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  // 얼굴 분석
  const analyzeFace = async (imageData: string) => {
    setIsAnalyzing(true);
    setError(null);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      // MediaPipe FaceLandmarker for detailed 468 landmarks analysis
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
        numFaces: 1,
        runningMode: 'IMAGE',
        outputFaceBlendshapes: false,
        outputFacialTransformationMatrixes: false,
        minFaceDetectionConfidence: 0.5,
        minFacePresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      const img = document.createElement('img');
      img.crossOrigin = 'anonymous';
      img.src = imageData;

      await new Promise<void>((res, rej) => {
        img.onload = () => res();
        img.onerror = rej;
      });

      const detectionResult = await landmarker.detect(img as any);
      const landmarks = detectionResult?.faceLandmarks?.[0];

      if (landmarks && landmarks.length > 0) {
        // Success: face detected → 품질 산정
        setFaceDetected(true);

        // 캔버스 픽셀 기반 샤프니스 추정 + 얼굴 박스 비율
        const cnv = canvasRef.current;
        const ctx = cnv?.getContext('2d');
        let quality = 70; // 기본값
        if (cnv && ctx) {
          const sharp = estimateSharpness(ctx, cnv.width, cnv.height); // 0~1
          const boxRatio = estimateFaceBoxRatio(landmarks as any[], cnv.width, cnv.height); // 0~1
          const base = 0.55 * sharp + 0.45 * boxRatio; // 가중 평균
          const jitter = (Math.random() - 0.5) * 6; // ±3 가중치
          quality = clamp(Math.round(20 + base * 75 + jitter), 0, 100);
        }

        setFaceQuality(quality);
        const faceResult = calculateFaceReincarnationResult(true, quality);
        setResult(faceResult);
        setShowLoadingSpinner(true);
      } else {
        // Face not detected
        setFaceDetected(false);
        setFaceQuality(0);
        setShowFaceDetectError(true);
        setIsAnalyzing(false);
      }
    } catch (error) {
      console.error('MediaPipe 분석 오류:', error);
      setFaceDetected(false);
      setFaceQuality(0);
      setShowFaceDetectError(true);
      setIsAnalyzing(false);
    }
  };

  // 결과 보기
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  // 재시도
  const handleRetry = () => {
    setCapturedImage(null);
    setFaceDetected(false);
    setFaceQuality(0);
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setError(null);
    setIsAnalyzing(false);
  };


  // 결과 닫기
  const handleCloseResult = () => {
    setShowResult(false);
  };

  // 소셜 공유 함수들
  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareDescription = result 
      ? t('shareMessages.default', { type: resultTitle })
      : description;
    
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareDescription,
          imageUrl: thumbnailUrl,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        buttons: [
          {
            title: t('ui.startTest'),
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('shareMessages.telegram', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('shareMessages.wechat', { type: resultTitle })
      : title;
    const shareMessage = `${shareText}\n\n${url}`;
    
    try {
      await navigator.clipboard.writeText(shareMessage);
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      console.error('WeChat 공유 실패:', error);
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('shareMessages.line', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://social-plugins.line.me/lineit/page?url=${url}&text=${text}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('shareMessages.whatsapp', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

  // 결과 텍스트들을 useMemo로 캐싱하여 렌더링 시 바뀌지 않도록 함 (Hook은 조건부 반환 전에 호출해야 함)
  const resultData = useMemo(() => {
    if (!result) return null;
    
    const getLocalized = <T extends string | string[]>(
      localized: any,
      koFallback: any
    ): T => {
      const value = localized ?? koFallback;
      // Treat single-item ["Placeholder"] or "Placeholder" as missing and fallback to ko
      const isPlaceholderArray = Array.isArray(value) && value.length === 1 && value[0] === 'Placeholder';
      const isPlaceholderString = typeof value === 'string' && value === 'Placeholder';
      const isPlaceholderArrayWithText = Array.isArray(value) && value.length === 1 && value[0].includes('Placeholder');
      if (isPlaceholderArray || isPlaceholderString || isPlaceholderArrayWithText) {
        return koFallback as T;
      }
      return value as T;
    };

    const resultTitle = getLocalized<string>(result?.title?.[locale as keyof typeof result.title], result?.title?.ko || '');
    const descriptions = getLocalized<string[] | string>(result?.description?.[locale as keyof typeof result.description], result?.description?.ko || []);
    const resultDescription = Array.isArray(descriptions) ? descriptions[Math.floor(Math.random() * descriptions.length)] : descriptions;
    
    // 특징(strengths)과 추천 활동(recommendations)을 10개 중 랜덤하게 3개만 선택
    const allStrengths = getLocalized<string[]>(result?.strengths?.[locale as keyof typeof result.strengths], result?.strengths?.ko || []);
    const allRecommendations = getLocalized<string[]>(result?.recommendations?.[locale as keyof typeof result.recommendations], result?.recommendations?.ko || []);
    
    // 배열을 섞고 앞에서 3개만 선택하는 함수
    const shuffleAndPick = <T,>(array: T[], count: number): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, Math.min(count, shuffled.length));
    };
    
    const resultStrengths = shuffleAndPick(allStrengths, 3);
    const resultRecommendations = shuffleAndPick(allRecommendations, 3);
    const advices = getLocalized<string[] | string>(result?.advice?.[locale as keyof typeof result.advice], result?.advice?.ko || []);
    const resultAdvice = Array.isArray(advices) ? advices[Math.floor(Math.random() * advices.length)] : advices;
    const eraItems = getLocalized<string[] | string>(result?.reincarnation?.era?.[locale as keyof typeof result.reincarnation.era], result?.reincarnation?.era?.ko || []);
    const occupationItems = getLocalized<string[] | string>(result?.reincarnation?.occupation?.[locale as keyof typeof result.reincarnation.occupation], result?.reincarnation?.occupation?.ko || []);
    const reasonItems = getLocalized<string[] | string>(result?.reincarnation?.reason?.[locale as keyof typeof result.reincarnation.reason], result?.reincarnation?.reason?.ko || []);
    const lifeCountItems = getLocalized<string[] | string>(result?.reincarnation?.lifeCount?.[locale as keyof typeof result.reincarnation.lifeCount], result?.reincarnation?.lifeCount?.ko || []);
    const eraItem = Array.isArray(eraItems) ? eraItems[Math.floor(Math.random() * eraItems.length)] : eraItems;
    const occupationItem = Array.isArray(occupationItems) ? occupationItems[Math.floor(Math.random() * occupationItems.length)] : occupationItems;
    const reasonItem = Array.isArray(reasonItems) ? reasonItems[Math.floor(Math.random() * reasonItems.length)] : reasonItems;
    const lifeCountItem = Array.isArray(lifeCountItems) ? lifeCountItems[Math.floor(Math.random() * lifeCountItems.length)] : lifeCountItems;
    
    return {
      resultTitle,
      resultDescription,
      resultStrengths,
      resultRecommendations,
      resultAdvice,
      eraItem,
      occupationItem,
      reasonItem,
      lifeCountItem
    };
  }, [result, locale]);
// 로딩 스피너
  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        {/* AdSense 광고 - 로딩 스피너 상단 */}
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 상단)"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700 flex items-center justify-center">
            {t('ui.analyzing').replace('...', '')}
            <span className="ml-1 inline-flex">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span>
            </span>
          </p>
        </div>

        {/* AdSense 광고 - 로딩 스피너 하단 */}
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 하단)"
          />
        </div>
      </div>
    );
  }

  // 결과 팝업
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 {t('ui.testCompleted')}
          </h2>
          
          
          
          
          <div className="mb-6">

            <div className="flex justify-center">

              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto w-full"
              />
            </div>

          </div>
          
          <button
            onClick={handleShowResult}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
            {t('ui.viewResults')}
          </button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result && resultData) {
    const { resultTitle, resultDescription, resultStrengths, resultRecommendations, resultAdvice, eraItem, occupationItem, reasonItem, lifeCountItem } = resultData;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {t('ui.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{result?.emoji || '🔮'}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {resultDescription}
              </p>
            </div>


            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✨ {t('ui.strengths')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultStrengths.map((strength, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🎯 {t('ui.recommendations')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultRecommendations.map((recommendation, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-cyan-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {recommendation}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 전생 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-left">
                    🕰️ {t('ui.era')}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-left">
                    {eraItem}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-left">
                    👤 {t('ui.occupation')}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-left">
                    {occupationItem}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-left">
                    💭 {t('ui.reason')}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-left">
                    {reasonItem}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-left">
                    🔢 {t('ui.lifeCount')}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-left">
                    {lifeCountItem}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {t('ui.advice')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={() => {
                  const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
                  const shareText = t('shareMessages.default', { type: resultTitle });
                  const url = `https://myquizoasis.com${window.location.pathname}`;
                  const shareMessage = `${shareText}\n\n${url}`;
                  
                  if (navigator.share) {
                    navigator.share({
                      title: resultTitle,
                      text: shareMessage,
                      url: url
                    });
                  } else {
                    navigator.clipboard.writeText(shareMessage);
                    alert(t('alerts.linkCopied'));
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                {t('ui.shareResult')}
              </button>
            </div>

            {/* AdSense 광고 - 결과와 다시하기 버튼 사이 */}
            <div className="my-6 px-4">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (결과-다시하기 사이)"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={handleRetry}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
                {t('ui.retake')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
              >
                {t('ui.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('ui.shareResultWithFriends')}
              </h2>
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
            </div>

            {/* 🎯 유사한 다른 테스트 추천 톱5 */}
            {similarTestsState && similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('ui.similarTests')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 🔥 요즘 인기 테스트 추천 톱5 */}
            {popularTestsState && popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {tGlobal('recommendations.popularTestsTop5')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {popularTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 진행 화면 (얼굴 촬영/업로드)
  if (started && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t('ui.faceReadingTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {t('ui.faceReadingDescription')}
            </p>
          </div>

          {/* 얼굴 촬영/업로드 영역 */}
          <div className="mb-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-purple-300">
                <div className="text-center">
                  {!showImagePreview || !capturedImage ? (
                    <>
                      <div className="mb-6">
                        <Camera className="w-16 h-16 mx-auto text-purple-500" />
                      </div>
                      <div className="mb-6">
                        <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{t('ui.selectPhotoPlaceholder')}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (isMobile) {
                            setShowImageSourceModal(true);
                          } else {
                            fileInputRef.current?.click();
                          }
                        }}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {t('ui.selectPhoto')}
                      </button>
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
                        <Image 
                          src={capturedImage} 
                          alt={t('ui.selectedPhoto')} 
                          width={800}
                          height={600}
                          className="w-full max-w-full h-auto rounded-lg object-contain"
                          style={{ maxHeight: '600px' }}
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* AdSense 광고 - 진행 화면 */}
            <div className="mt-8 mb-6">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (진행 화면)"
              />
            </div>

            {/* 친구와 같이 해보기 */}
            <div className="mt-8 mb-8 text-center">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">
                    {t('ui.shareWithFriends')}
                  </h2>
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
                </div>
                
            {/* 파일 입력 (갤러리용) */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* 카메라 입력 (모바일 카메라 촬영용) */}
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>

        {/* 카메라 비디오 (숨김) */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="hidden"
        />
        <canvas
          ref={canvasRef}
          className="hidden"
        />

        {/* 얼굴 감지 실패 경고 팝업 */}
        {showFaceDetectError && (
          <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4 max-w-md w-full">
              {/* 바운싱 애니메이션이 있는 경고 아이콘 */}
              <div className="flex justify-center mb-6">
                <div className="animate-bounce">
                  <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* 주요 메시지 */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {t('ui.faceNotDetected')}
              </h2>
              
              {/* 보조 메시지 */}
              <p className="text-gray-600 text-center mb-6">
                {t('ui.faceNotDetectedDescription')}
              </p>
              
              {/* 팁 섹션 */}
              <div className="bg-white rounded-xl border-2 border-gray-100 p-4 mb-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  <h3 className="font-bold text-gray-800">{t('ui.tips')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipCenter')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipLighting')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipNoObstruction')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipClear')}
                  </li>
                </ul>
              </div>
              
              {/* 다시 사진 선택하기 버튼 */}
              <button
                onClick={() => {
                  setShowFaceDetectError(false);
                  setCapturedImage(null);
                  setShowImagePreview(false);
                  setError(null);
                  setIsAnalyzing(false);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                {t('ui.selectPhotoAgain')}
              </button>
            </div>
          </div>
        )}

        {/* 이미지 소스 선택 모달 (모바일) */}
        {showImageSourceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {t('ui.selectPhotoMethod')}
              </h3>
              <div className="border-b border-gray-200 mb-6"></div>
              <div className="space-y-4">
                <button
                  onClick={() => handleImageSourceSelect('camera')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  {t('ui.takePhoto')}
                </button>
                <button
                  onClick={() => handleImageSourceSelect('gallery')}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  {t('ui.selectFromGallery')}
                </button>
                <button
                  onClick={() => setShowImageSourceModal(false)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-full transition-all duration-200"
                >
                  {t('ui.cancel')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'Face_Reincarnation.jpg')}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
              priority
            />
            {isLatestTest && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                        NEW
                      </div>
                    )}
                              {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                인기
              </div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                HOT
              </div>
            )}
</div>

          <div className="px-4">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>

            {/* AdSense 광고 - 타이틀과 설명 사이 */}
            <div className="my-6">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (타이틀-설명 사이)"
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
              <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
              <p>{t('startMessage.line2')}</p>
              <p>{t('startMessage.line3')}</p>
              <p>{t('startMessage.line4')}</p>
              <p className="whitespace-pre-line">{t('startMessage.line5')}</p>
              <p>{t('startMessage.line6')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('ui.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {t('ui.totalParticipants', { count: formatPlayCount(playCount, locale as Locale) })}
            </p>

            {/* 상품 추천 */}
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
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('ui.shareWithFriends')}
              </h2>
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
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

