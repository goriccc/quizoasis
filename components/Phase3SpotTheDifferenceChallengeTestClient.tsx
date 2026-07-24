'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3SpotTheDifferenceRound,
  Phase3SpotTheDifferenceResult,
  calculatePhase3SpotTheDifferenceResult,
  hitTestSpotDifference,
  getSpotDifferenceCountForRound,
  getSpotDifferenceRoundTimeSec,
  SPOT_DIFF_CANVAS_W,
  SPOT_DIFF_CANVAS_H,
  SPOT_DIFF_HALF_W,
  PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT,
} from '@/lib/phase3SpotTheDifferenceChallengeData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  getThumbnailUrl,
  getQuizLandmarkImageUrl,
  formatPlayCount,
  prefetchStorageImages,
} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Props {
  locale: string;
  slug: string;
  title: string;
  description: string;
  rounds: Phase3SpotTheDifferenceRound[];
  results: Phase3SpotTheDifferenceResult[];
  thumbnail?: string;
  playCount?: number;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
}

function locText(obj: Record<string, string>, locale: string): string {
  return obj[locale as keyof typeof obj] || obj.ko;
}

const ROUND_ADVANCE_MS = 800;
const WRONG_FEEDBACK_MS = 800;
const HIT_FX_MS = 650;
const MARKER_SIZE_PX = 52;
const TIMER_TICK_MS = 10;
const TIMER_CS_PER_SEC = 100;

function formatDigitalTimer(centiseconds: number): string {
  const cs = Math.max(0, centiseconds);
  const seconds = Math.floor(cs / TIMER_CS_PER_SEC);
  const frac = cs % TIMER_CS_PER_SEC;
  return `${String(seconds).padStart(2, '0')}.${String(frac).padStart(2, '0')}`;
}

function getRoundTimeCentiseconds(roundIndex: number): number {
  return getSpotDifferenceRoundTimeSec(roundIndex) * TIMER_CS_PER_SEC;
}

interface HitFx {
  key: string;
  x: number;
  y: number;
}

interface FoundMarker {
  x: number;
  y: number;
}

export default function Phase3SpotTheDifferenceChallengeTestClient({
  locale,
  slug,
  title,
  description,
  rounds,
  results,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3SpotTheDifferenceChallengeTest');
  const tGlobal = useTranslations();

  const [started, setStarted] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundFoundIds, setRoundFoundIds] = useState<Set<number>>(new Set());
  const [roundFoundMarkers, setRoundFoundMarkers] = useState<FoundMarker[]>([]);
  const [totalFound, setTotalFound] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);
  const [showWrongFeedback, setShowWrongFeedback] = useState(false);
  const [imageShake, setImageShake] = useState(false);
  const [hitFxList, setHitFxList] = useState<HitFx[]>([]);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [roundTimeLeftCs, setRoundTimeLeftCs] = useState(0);

  const [result, setResult] = useState<Phase3SpotTheDifferenceResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastFoundCount, setLastFoundCount] = useState(0);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const supabasePreconnectedRef = useRef(false);

  const totalFoundRef = useRef(0);
  const currentRoundRef = useRef(0);
  const roundFoundIdsRef = useRef<Set<number>>(new Set());
  const roundFoundMarkersRef = useRef<FoundMarker[]>([]);
  const roundCompleteRef = useRef(false);
  const roundTimeLeftCsRef = useRef(0);
  const isTransitioningRoundRef = useRef(false);
  const wrongFeedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hitFxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const plusOneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    totalFoundRef.current = totalFound;
  }, [totalFound]);

  useEffect(() => {
    currentRoundRef.current = currentRound;
  }, [currentRound]);

  useEffect(() => {
    roundCompleteRef.current = roundComplete;
  }, [roundComplete]);

  useEffect(() => {
    roundFoundIdsRef.current = roundFoundIds;
  }, [roundFoundIds]);

  useEffect(() => {
    return () => {
      if (wrongFeedbackTimerRef.current) clearTimeout(wrongFeedbackTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (supabasePreconnectedRef.current || typeof document === 'undefined') return;
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!base) return;
    try {
      const origin = new URL(base).origin;
      supabasePreconnectedRef.current = true;
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = '';
      document.head.appendChild(link);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    if (showResult) return;
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          document.querySelectorAll('.adsbygoogle').forEach((el) => {
            const status = (el as HTMLElement).getAttribute('data-adsbygoogle-status');
            if (!status || status === '') safeLoadAdSense();
          });
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [started, showResult, showLoadingSpinner, showResultPopup, currentRound]);

  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  useEffect(() => {
    if (!started || showLoadingSpinner || showResultPopup || showResult) return;
    for (let off = 0; off <= 2; off++) {
      const idx = currentRound + off;
      if (idx < rounds.length) {
        const url = getQuizLandmarkImageUrl(rounds[idx].imageFile);
        const img = new window.Image();
        img.decoding = 'async';
        if ('fetchPriority' in img) {
          (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = off === 0 ? 'high' : 'low';
        }
        img.src = url;
      }
    }
  }, [started, currentRound, rounds, showLoadingSpinner, showResultPopup, showResult]);

  const finishQuiz = useCallback(
    (finalTotal: number) => {
      const resultType = calculatePhase3SpotTheDifferenceResult(finalTotal);
      const quizResult = results.find((r) => r.type === resultType);
      setLastFoundCount(finalTotal);
      if (quizResult) setResult(quizResult);
      setShowLoadingSpinner(true);
    },
    [results]
  );

  const handleNextRound = useCallback(() => {
    if (isTransitioningRoundRef.current) return;
    isTransitioningRoundRef.current = true;

    setRoundComplete(false);
    roundCompleteRef.current = false;

    if (currentRoundRef.current < PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT - 1) {
      const nextRound = currentRoundRef.current + 1;
      setCurrentRound(nextRound);
      currentRoundRef.current = nextRound;
      const emptyFound = new Set<number>();
      setRoundFoundIds(emptyFound);
      roundFoundIdsRef.current = emptyFound;
      setRoundFoundMarkers([]);
      roundFoundMarkersRef.current = [];
      isTransitioningRoundRef.current = false;
      return;
    }

    finishQuiz(totalFoundRef.current);
    isTransitioningRoundRef.current = false;
  }, [finishQuiz]);

  useEffect(() => {
    if (!started || roundComplete || showLoadingSpinner || showResultPopup || showResult) return;

    const durationCs = getRoundTimeCentiseconds(currentRound);
    const endAt = performance.now() + durationCs * TIMER_TICK_MS;

    setRoundTimeLeftCs(durationCs);
    roundTimeLeftCsRef.current = durationCs;

    let rafId = 0;
    const tick = (now: number) => {
      if (roundCompleteRef.current || isTransitioningRoundRef.current) return;

      const remainingCs = Math.max(0, Math.ceil((endAt - now) / TIMER_TICK_MS));
      if (remainingCs !== roundTimeLeftCsRef.current) {
        roundTimeLeftCsRef.current = remainingCs;
        setRoundTimeLeftCs(remainingCs);
      }

      if (remainingCs <= 0) {
        handleNextRound();
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [
    started,
    currentRound,
    roundComplete,
    showLoadingSpinner,
    showResultPopup,
    showResult,
    handleNextRound,
  ]);

  useEffect(() => {
    if (!roundComplete || !started) return;
    const timer = setTimeout(() => {
      if (roundCompleteRef.current) handleNextRound();
    }, ROUND_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [roundComplete, started, handleNextRound]);

  const handleStartTest = () => {
    setCurrentRound(0);
    currentRoundRef.current = 0;
    const emptyFound = new Set<number>();
    setRoundFoundIds(emptyFound);
    roundFoundIdsRef.current = emptyFound;
    setRoundFoundMarkers([]);
    roundFoundMarkersRef.current = [];
    setTotalFound(0);
    totalFoundRef.current = 0;
    setRoundComplete(false);
    roundCompleteRef.current = false;
    setShowWrongFeedback(false);
    setImageShake(false);
    setHitFxList([]);
    setShowPlusOne(false);
    setRoundTimeLeftCs(getRoundTimeCentiseconds(0));
    roundTimeLeftCsRef.current = getRoundTimeCentiseconds(0);
    isTransitioningRoundRef.current = false;
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setLastFoundCount(0);
    setDisplayPlayCount((prev) => prev + 1);

    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }

    if (typeof window !== 'undefined') {
      for (let i = 0; i < Math.min(3, rounds.length); i++) {
        const url = getQuizLandmarkImageUrl(rounds[i].imageFile);
        const img = new window.Image();
        img.decoding = 'async';
        img.src = url;
      }
    }

    prefetchStorageImages(rounds.map((r) => r.imageFile));
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentRound(0);
    currentRoundRef.current = 0;
    const emptyFound = new Set<number>();
    setRoundFoundIds(emptyFound);
    roundFoundIdsRef.current = emptyFound;
    setRoundFoundMarkers([]);
    roundFoundMarkersRef.current = [];
    setTotalFound(0);
    totalFoundRef.current = 0;
    setRoundComplete(false);
    roundCompleteRef.current = false;
    setShowWrongFeedback(false);
    setImageShake(false);
    setHitFxList([]);
    setShowPlusOne(false);
    setRoundTimeLeftCs(0);
    roundTimeLeftCsRef.current = 0;
    isTransitioningRoundRef.current = false;
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setLastFoundCount(0);
  };

  const handleImagePointer = (clientX: number, clientY: number, target: HTMLDivElement) => {
    if (roundCompleteRef.current) return;

    const round = rounds[currentRoundRef.current];
    if (!round) return;

    const rect = target.getBoundingClientRect();
    const clickX = ((clientX - rect.left) / rect.width) * SPOT_DIFF_CANVAS_W;
    const clickY = ((clientY - rect.top) / rect.height) * SPOT_DIFF_CANVAS_H;

    const hit = hitTestSpotDifference(round.hotspots, roundFoundIdsRef.current, clickX, clickY);

    if (hit !== null) {
      const fxKey = `${Date.now()}-${hit.id}`;
      setHitFxList((prev) => [...prev, { key: fxKey, x: hit.x, y: hit.y }]);
      if (hitFxTimerRef.current) clearTimeout(hitFxTimerRef.current);
      hitFxTimerRef.current = setTimeout(() => {
        setHitFxList((prev) => prev.filter((fx) => fx.key !== fxKey));
        hitFxTimerRef.current = null;
      }, HIT_FX_MS);

      setImageShake(true);
      if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
      shakeTimerRef.current = setTimeout(() => {
        setImageShake(false);
        shakeTimerRef.current = null;
      }, 320);

      setShowPlusOne(true);
      if (plusOneTimerRef.current) clearTimeout(plusOneTimerRef.current);
      plusOneTimerRef.current = setTimeout(() => {
        setShowPlusOne(false);
        plusOneTimerRef.current = null;
      }, 550);

      const nextFound = new Set(roundFoundIdsRef.current);
      nextFound.add(hit.id);
      setRoundFoundIds(nextFound);
      roundFoundIdsRef.current = nextFound;

      const nextMarkers = [...roundFoundMarkersRef.current, { x: hit.x, y: hit.y }];
      setRoundFoundMarkers(nextMarkers);
      roundFoundMarkersRef.current = nextMarkers;

      setTotalFound((prev) => {
        const next = prev + 1;
        totalFoundRef.current = next;
        return next;
      });

      if (nextFound.size >= getSpotDifferenceCountForRound(round)) {
        setRoundComplete(true);
        roundCompleteRef.current = true;
      }
      return;
    }

    setShowWrongFeedback(true);
    if (wrongFeedbackTimerRef.current) clearTimeout(wrongFeedbackTimerRef.current);
    wrongFeedbackTimerRef.current = setTimeout(() => {
      setShowWrongFeedback(false);
      wrongFeedbackTimerRef.current = null;
    }, WRONG_FEEDBACK_MS);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleImagePointer(e.clientX, e.clientY, e.currentTarget);
  };

  const handleImageTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.changedTouches.length === 0) return;
    e.preventDefault();
    const touch = e.changedTouches[0];
    handleImagePointer(touch.clientX, touch.clientY, e.currentTarget);
  };

  const buildResultShareText = () => {
    if (!result) return '';
    const shareLine = locText(result.shareLine, locale);
    return shareLine.replace(/\{count\}/g, String(lastFoundCount));
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${buildResultShareText()}\n\nhttps://myquizoasis.com${window.location.pathname}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Share failed:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('alerts.resultCopied'));
      } catch (error) {
        console.error('Clipboard copy failed:', error);
        alert(t('alerts.shareFailed'));
      }
    }
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const body = result ? buildResultShareText() : t('shareMessages.startLine');
    const shareText = encodeURIComponent(body);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const shareText = result
      ? `${buildResultShareText()}\n\n${url}`
      : `${t('shareMessages.startWechat')}\n\n${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      alert(t('alerts.wechatCopy'));
    } catch {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const body = result ? buildResultShareText() : t('shareMessages.startWhatsapp');
    const shareText = encodeURIComponent(body);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    if (typeof window === 'undefined') return;

    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    const shareDescription = result ? buildResultShareText() : t('shareMessages.startKakao');

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: shareDescription,
          imageUrl: thumbnailUrl,
          link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
        },
        buttons: [
          {
            title: t('ui.goToTest'),
            link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
          },
        ],
      });
    } catch (error) {
      console.error('Kakao share error:', error);
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const body = result ? buildResultShareText() : t('shareMessages.startTelegram');
    const text = encodeURIComponent(body);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const renderShareButtons = () => (
    <div className="mt-8 mb-8 text-center px-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
      <div className="flex justify-center gap-2">
        <button
          onClick={copyLink}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
        </button>
        <button
          onClick={shareToKakao}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
        </button>
        <button
          onClick={shareToTelegram}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
        </button>
        <button
          onClick={shareToWeChat}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
        </button>
        <button
          onClick={shareToLine}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
        </button>
        <button
          onClick={shareToWhatsApp}
          className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
        >
          <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
        </button>
      </div>
    </div>
  );

  const renderSimilarTestBadge = (test: { slug: string; badgeType?: 'popular' | 'hot' | null }) => (
    <>
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
    </>
  );

  const renderFoundMarkers = () =>
    roundFoundMarkers
      .flatMap((m) => [
        { key: `left-${m.x}-${m.y}`, x: m.x, y: m.y },
        { key: `right-${m.x}-${m.y}`, x: m.x + SPOT_DIFF_HALF_W, y: m.y },
      ])
      .map((marker) => (
        <div
          key={marker.key}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${(marker.x / SPOT_DIFF_CANVAS_W) * 100}%`,
            top: `${(marker.y / SPOT_DIFF_CANVAS_H) * 100}%`,
          }}
        >
          <div
            className="rounded-full border-4 border-emerald-500 bg-emerald-400/35 shadow-[0_0_18px_rgba(16,185,129,0.75)] animate-[spotMarkerPop_0.45s_ease-out]"
            style={{ width: MARKER_SIZE_PX, height: MARKER_SIZE_PX }}
          />
        </div>
      ));

  const renderHitBursts = () =>
    hitFxList.flatMap((fx) => [
      { key: `burst-left-${fx.key}`, x: fx.x, y: fx.y },
      { key: `burst-right-${fx.key}`, x: fx.x + SPOT_DIFF_HALF_W, y: fx.y },
    ]).map((burst) => (
      <div
        key={burst.key}
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${(burst.x / SPOT_DIFF_CANVAS_W) * 100}%`,
          top: `${(burst.y / SPOT_DIFF_CANVAS_H) * 100}%`,
        }}
      >
        <div
          className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 opacity-90 animate-[spotHitBurst_0.55s_ease-out_forwards]"
          style={{ width: 40, height: 40 }}
        />
      </div>
    ));

  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || '')}
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
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>

            <div className="my-6">
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label={t('ui.adsenseTitle')}
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
              <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
              <p>{t('startMessage.line2')}</p>
              <p>{t('startMessage.line3')}</p>
              <p>{t('startMessage.line4')}</p>
              <p className="whitespace-pre-line">{t('startMessage.line5')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {tGlobal('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
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

            {renderShareButtons()}

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={test.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                          {renderSimilarTestBadge(test)}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {test.title}
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
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full animate-spin" />
          <p className="mt-4 text-lg text-gray-700">{tGlobal('mbti.loadingResults')}</p>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {tGlobal('mbti.testCompleted')}</h2>
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
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    const resultTitle = locText(result.title, locale);
    const resultShortDescription = locText(result.shortDescription, locale);
    const resultLongDescription = locText(result.description, locale);
    const resultLevel = locText(result.levelLabel, locale);
    const resultCharacteristics = locText(result.characteristics, locale);
    const resultStrength = result.strength ? locText(result.strength, locale) : null;
    const resultWeakness = result.weakness ? locText(result.weakness, locale) : null;
    const resultImprovementTip = result.improvementTip ? locText(result.improvementTip, locale) : null;
    const resultOneLiner = result.oneLiner ? locText(result.oneLiner, locale) : null;
    const resultCertify = result.certify ? locText(result.certify, locale) : null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5 border border-purple-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
              <p className="text-sm font-semibold text-indigo-600 mb-2">
                {t('ui.scoreSummary', { count: lastFoundCount })}
              </p>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{resultTitle}</h1>
              <p className="text-lg font-semibold text-gray-700 mb-3">{resultShortDescription}</p>
              <p className="text-base text-gray-600 leading-relaxed">{resultLongDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-indigo-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">📊 {t('ui.levelLabel')}</h3>
                <p className="text-lg font-bold text-indigo-700 text-center">{resultLevel}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-violet-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">🎯 {t('ui.scoreBandLabel')}</h3>
                <p className="text-sm font-medium text-gray-800 text-center leading-snug">
                  {t('ui.foundCountValue', { count: lastFoundCount })}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-purple-100">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">⭐ {t('ui.characteristicsLabel')}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {resultCharacteristics.split(/[,、，]/).map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    {char.trim()}
                  </span>
                ))}
              </div>
            </div>

            {resultStrength && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-emerald-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💪 {t('ui.strengthLabel')}</h3>
                <p className="text-sm text-gray-700 text-center">{resultStrength}</p>
              </div>
            )}

            {resultWeakness && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-orange-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">⚠️ {t('ui.weaknessLabel')}</h3>
                <p className="text-sm text-gray-700 text-center">{resultWeakness}</p>
              </div>
            )}

            {resultImprovementTip && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-blue-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💡 {t('ui.improvementTip')}</h3>
                <p className="text-sm text-gray-700 text-center">{resultImprovementTip}</p>
              </div>
            )}

            {resultOneLiner && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-violet-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💬 {t('ui.oneLiner')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-center">{resultOneLiner}</p>
              </div>
            )}

            {resultCertify && (
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl shadow-lg p-4 mb-3 border border-amber-300">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">🏆 {t('ui.certifyLabel')}</h3>
                <p className="text-sm font-bold text-amber-900 text-center">{resultCertify}</p>
              </div>
            )}

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                {t('ui.shareResult')}
              </button>
            </div>

            <div className="my-6 px-4">
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label={t('ui.adsenseTitle')}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={handleRetake}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
                {tGlobal('mbti.retakeTest')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-800 transition-all text-center shadow-md"
              >
                {tGlobal('mbti.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
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
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTestsTop5')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={test.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                          {renderSimilarTestBadge(test)}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {test.title}
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

            {popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <div className="mb-6 px-4 w-full">
                  <AdSensePlaceholder
                    slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                    style={{ width: '100%', height: '250px' }}
                    className="mx-auto w-full"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.popularTestsTop5')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {popularTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={test.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                          {renderSimilarTestBadge(test)}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {test.title}
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

  const round = rounds[currentRound];
  if (!round) return null;

  const progress = ((currentRound + 1) / PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT) * 100;
  const imageUrl = getQuizLandmarkImageUrl(round.imageFile);
  const roundTitle = locText(round.roundTitle, locale);
  const instruction = locText(round.instruction, locale);
  const isLastRound = currentRound >= PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT - 1;
  const timerDisplayCs =
    roundTimeLeftCs > 0 ? roundTimeLeftCs : getRoundTimeCentiseconds(currentRound);
  const timerSeconds = Math.floor(timerDisplayCs / TIMER_CS_PER_SEC);
  const timerIsUrgent = timerSeconds <= 10;

    return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
      <style jsx global>{`
        @keyframes spotHitBurst {
          0% { transform: scale(0.2); opacity: 1; }
          70% { transform: scale(1.35); opacity: 0.85; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes spotMarkerPop {
          0% { transform: scale(0.3); opacity: 0.4; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes spotBoardShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
      `}</style>
      {showWrongFeedback && (
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-pulse">
          <span className="text-2xl font-bold text-rose-500 drop-shadow-lg">{t('game.wrongSpot')}</span>
        </div>
      )}

      {showPlusOne && (
        <div className="fixed top-[28%] left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <span className="text-5xl font-black text-emerald-500 drop-shadow-[0_2px_8px_rgba(16,185,129,0.8)] animate-bounce">
            {t('game.hitCorrect')}
          </span>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-indigo-600">
                {t('ui.scoreDisplay', { count: totalFound })}
              </span>
              <span className="text-sm font-bold text-purple-600">
                {currentRound + 1} / {PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 w-full">
            <div
              className="relative z-10 w-full rounded-xl py-4 text-center shadow-lg"
              style={{
                backgroundColor: '#0f172a',
                border: timerIsUrgent ? '3px solid #f87171' : '3px solid #475569',
              }}
              aria-label={t('game.timerDisplay', { seconds: timerSeconds })}
            >
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: '#94a3b8' }}
              >
                {t('game.timerLabel')}
              </p>
              <p
                className="font-mono font-black tabular-nums select-none"
                style={{
                  fontSize: 'clamp(2.75rem, 12vw, 4.5rem)',
                  lineHeight: 1,
                  letterSpacing: '0.06em',
                  color: timerIsUrgent ? '#fca5a5' : '#4ade80',
                  textShadow: timerIsUrgent
                    ? '0 0 18px rgba(248, 113, 113, 0.65)'
                    : '0 0 18px rgba(74, 222, 128, 0.45)',
                }}
              >
                {formatDigitalTimer(timerDisplayCs)}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 px-2 text-center">
          <p className="text-sm font-semibold text-indigo-600 mb-2">{roundTitle}</p>
          <p className="text-base text-gray-700 mb-2">{instruction}</p>
          <p className="text-sm font-bold text-emerald-600">
            {t('game.foundProgress', { found: roundFoundIds.size, total: getSpotDifferenceCountForRound(round) })}
          </p>
        </div>

        <div
          className={`relative w-full border border-indigo-200 shadow-md bg-white overflow-hidden cursor-crosshair touch-manipulation ${
            imageShake ? 'animate-[spotBoardShake_0.32s_ease-in-out]' : ''
          }`}
          style={{ aspectRatio: `${SPOT_DIFF_CANVAS_W}/${SPOT_DIFF_CANVAS_H}` }}
          onClick={handleImageClick}
          onTouchEnd={handleImageTouchEnd}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') e.preventDefault();
          }}
          aria-label={instruction}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain select-none pointer-events-none"
            draggable={false}
            decoding="async"
          />
          <div className="absolute inset-0 pointer-events-none">
            {renderHitBursts()}
            {renderFoundMarkers()}
          </div>
        </div>

        {roundComplete && (
          <div className="mt-6 px-2 space-y-4 text-center">
            <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-4">
              <p className="font-bold text-gray-900">
                {t('game.roundComplete', { total: getSpotDifferenceCountForRound(round) })}
              </p>
            </div>
            <button
              type="button"
              onClick={handleNextRound}
              className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
            >
              {isLastRound ? t('ui.viewResult') : t('ui.nextQuestion')}
            </button>
          </div>
        )}

        <div className="mt-8 px-2">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>

        {renderShareButtons()}
      </div>
    </div>
  );
}
