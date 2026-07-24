'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3MemoryLimitChallengeQuestion,
  Phase3MemoryLimitChallengeResult,
  Phase3MemoryLimitChallengeOption,
  calculatePhase3MemoryLimitChallengeResult,
  MEMORY_COVER_MS,
  MEMORY_COUNTDOWN_STEP_MS,
  PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT,
} from '@/lib/phase3MemoryLimitChallengeData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  getThumbnailUrl,
  getQuizLandmarkImageUrl,
  formatPlayCount,
  prefetchStorageImages,
  extractImageFilenamesFromQuestions,
} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Phase3MemoryLimitChallengeTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3MemoryLimitChallengeQuestion[];
  results: Phase3MemoryLimitChallengeResult[];
  questionCount: number;
  thumbnail?: string;
  playCount?: number;
  similarTests?: Array<{
    id: number;
    slug: string;
    title: string;
    thumbnail: string;
    playCount: number;
    badgeType?: 'popular' | 'hot' | null;
  }>;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
}

type RoundPhase = 'zoneConfirm' | 'countdown' | 'memorize' | 'cover' | 'question' | 'feedback';
type ZoneType = 'mid' | 'extreme';

function locText(obj: Record<string, string>, locale: string): string {
  return obj[locale as keyof typeof obj] || obj.ko;
}

function stripOptionPrefix(text: string): string {
  return text.replace(/^[A-D]\.\s*/, '');
}

function shuffleOptions(options: Phase3MemoryLimitChallengeOption[]): Phase3MemoryLimitChallengeOption[] {
  const copy = [...options];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Phase3MemoryLimitChallengeTestClient({
  locale,
  slug,
  title,
  description,
  questions,
  results,
  questionCount,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null,
}: Phase3MemoryLimitChallengeTestClientProps) {
  const t = useTranslations('phase3MemoryLimitChallengeTest');
  const tGlobal = useTranslations();

  const [started, setStarted] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundPhase, setRoundPhase] = useState<RoundPhase>('countdown');
  const [countdownNumber, setCountdownNumber] = useState(3);
  const [zoneType, setZoneType] = useState<ZoneType>('mid');
  const [answers, setAnswers] = useState<number[]>(() => Array(PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT).fill(0));
  const answersRef = useRef<number[]>(Array(PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT).fill(0));
  const [score, setScore] = useState(0);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<
    Record<number, Phase3MemoryLimitChallengeOption[]>
  >({});
  const [answerFeedback, setAnswerFeedback] = useState<{
    isCorrect: boolean;
    correctAnswerText: string;
  } | null>(null);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const [result, setResult] = useState<Phase3MemoryLimitChallengeResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrectCount, setLastCorrectCount] = useState(0);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const supabasePreconnectedRef = useRef(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const currentRoundRef = useRef(0);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const pushTimer = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  }, []);

  useEffect(() => {
    currentRoundRef.current = currentRound;
  }, [currentRound]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

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
  }, [started, showResult, showLoadingSpinner, showResultPopup, roundPhase, currentRound]);

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
      if (idx < questions.length) {
        const url = getQuizLandmarkImageUrl(questions[idx].imageFile);
        const img = new window.Image();
        img.decoding = 'async';
        if ('fetchPriority' in img) {
          (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = off === 0 ? 'high' : 'low';
        }
        img.src = url;
      }
    }
  }, [started, currentRound, questions, showLoadingSpinner, showResultPopup, showResult]);

  const getCorrectAnswerText = useCallback(
    (roundIdx: number, options?: Phase3MemoryLimitChallengeOption[]) => {
      const q = questions[roundIdx];
      const opts = options ?? q.options;
      const correct = opts.find((o) => o.isCorrect);
      if (!correct) return '';
      return stripOptionPrefix(locText(correct.text, locale));
    },
    [questions, locale]
  );

  const startCountdown = useCallback(
    (roundIdx: number) => {
      clearTimers();
      setRoundPhase('countdown');
      setCountdownNumber(3);

      const runStep = (num: number) => {
        setCountdownNumber(num);
        if (num <= 1) {
          pushTimer(() => startMemorize(roundIdx), MEMORY_COUNTDOWN_STEP_MS);
          return;
        }
        pushTimer(() => runStep(num - 1), MEMORY_COUNTDOWN_STEP_MS);
      };

      pushTimer(() => runStep(2), MEMORY_COUNTDOWN_STEP_MS);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [clearTimers, pushTimer]
  );

  const startMemorize = useCallback(
    (roundIdx: number) => {
      setRoundPhase('memorize');
      const exposureMs = questions[roundIdx]?.exposureMs ?? 2000;
      pushTimer(() => {
        setRoundPhase('cover');
        pushTimer(() => {
          const shuffled = shuffleOptions(questions[roundIdx].options);
          setShuffledOptionsMap((prev) => ({ ...prev, [roundIdx]: shuffled }));
          setRoundPhase('question');
          setAnswerFeedback(null);
        }, MEMORY_COVER_MS);
      }, exposureMs);
    },
    [questions, pushTimer]
  );

  const beginRoundFlow = useCallback(
    (roundIdx: number) => {
      clearTimers();
      setAnswerFeedback(null);
      setShowPlusOne(false);

      if (roundIdx === 4) {
        setZoneType('mid');
        setRoundPhase('zoneConfirm');
        pushTimer(() => startCountdown(roundIdx), 2500);
        return;
      }

      if (roundIdx === 8) {
        setZoneType('extreme');
        setRoundPhase('zoneConfirm');
        pushTimer(() => startCountdown(roundIdx), 2500);
        return;
      }

      startCountdown(roundIdx);
    },
    [clearTimers, pushTimer, startCountdown]
  );

  const handleZoneReady = () => {
    clearTimers();
    startCountdown(currentRoundRef.current);
  };

  const handleStartTest = () => {
    const emptyAnswers = Array(PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT).fill(0);
    setAnswers(emptyAnswers);
    answersRef.current = emptyAnswers;
    setScore(0);
    setCurrentRound(0);
    currentRoundRef.current = 0;
    setShuffledOptionsMap({});
    setAnswerFeedback(null);
    setShowPlusOne(false);
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setDisplayPlayCount((prev) => prev + 1);

    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }

    if (typeof window !== 'undefined') {
      for (let i = 0; i < Math.min(3, questions.length); i++) {
        const url = getQuizLandmarkImageUrl(questions[i].imageFile);
        const img = new window.Image();
        img.decoding = 'async';
        img.src = url;
      }
    }

    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));
    setStarted(true);
    window.scrollTo(0, 0);
    beginRoundFlow(0);
  };

  const finishQuizWithAnswers = (finalAnswers: number[]) => {
    const resultType = calculatePhase3MemoryLimitChallengeResult(finalAnswers);
    const quizResult = results.find((r) => r.type === resultType);
    const correctTotal = finalAnswers.reduce((s, v) => s + v, 0);
    setLastCorrectCount(correctTotal);
    if (quizResult) setResult(quizResult);
    setShowLoadingSpinner(true);
  };

  const handleOptionSelect = (option: Phase3MemoryLimitChallengeOption) => {
    if (roundPhase !== 'question' || answerFeedback !== null) return;

    const roundIdx = currentRound;
    const isCorrect = option.isCorrect;
    const scoreVal = isCorrect ? 1 : 0;
    const newAnswers = [...answersRef.current];
    newAnswers[roundIdx] = scoreVal;
    setAnswers(newAnswers);
    answersRef.current = newAnswers;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setShowPlusOne(true);
    }

    const correctAnswerText = getCorrectAnswerText(roundIdx, shuffledOptionsMap[roundIdx]);
    setAnswerFeedback({ isCorrect, correctAnswerText });
    setRoundPhase('feedback');
  };

  const handleContinueAfterFeedback = () => {
    setShowPlusOne(false);
    setAnswerFeedback(null);

    if (currentRound < PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT - 1) {
      const nextRound = currentRound + 1;
      setCurrentRound(nextRound);
      currentRoundRef.current = nextRound;
      beginRoundFlow(nextRound);
    } else {
      finishQuizWithAnswers(answersRef.current);
    }
  };

  const handleRetake = () => {
    clearTimers();
    const emptyAnswers = Array(PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT).fill(0);
    setStarted(false);
    setCurrentRound(0);
    currentRoundRef.current = 0;
    setAnswers(emptyAnswers);
    answersRef.current = emptyAnswers;
    setScore(0);
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setShuffledOptionsMap({});
    setAnswerFeedback(null);
    setShowPlusOne(false);
    setLastCorrectCount(0);
    setRoundPhase('countdown');
    setCountdownNumber(3);
  };

  const buildResultShareText = () => {
    if (!result) return '';
    return locText(result.shareLine, locale);
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${buildResultShareText()}\n\nhttps://myquizoasis.com${window.location.pathname}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('공유 실패:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('alerts.resultCopied'));
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
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
      console.error('카카오톡 공유 오류:', error);
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
                {t('ui.scoreSummary', { count: lastCorrectCount })}
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
                  {t('ui.correctCountValue', { count: lastCorrectCount })}
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

  const question = questions[currentRound];
  if (!question) return null;

  const progress = ((currentRound + 1) / PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT) * 100;
  const imageUrl = getQuizLandmarkImageUrl(question.imageFile);
  const roundTitle = locText(question.roundTitle, locale);
  const questionText = locText(question.question, locale);
  const optionsArray = shuffledOptionsMap[currentRound] || question.options;
  const showQuestionUi = roundPhase === 'question' || roundPhase === 'feedback';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
      {showPlusOne && (
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounce">
          <span className="text-5xl font-black text-emerald-500 drop-shadow-lg">+1</span>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-indigo-600">
                {t('ui.scoreDisplay', { count: score })}
              </span>
              <span className="text-sm font-bold text-purple-600">
                {currentRound + 1} / {PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {roundPhase === 'zoneConfirm' && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {zoneType === 'mid' ? t('game.zoneMid') : t('game.zoneExtreme')}
            </p>
            {zoneType === 'extreme' && (
              <button
                type="button"
                onClick={handleZoneReady}
                className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                {t('game.readyConfirm')}
              </button>
            )}
          </div>
        )}

        {roundPhase === 'countdown' && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <p className="text-xl font-semibold text-gray-700 mb-6">{t('game.getReady')}</p>
            <div className="text-8xl md:text-9xl font-black text-indigo-600 animate-pulse">{countdownNumber}</div>
          </div>
        )}

        {roundPhase === 'memorize' && (
          <div className="relative w-full">
            <div className="w-full border border-indigo-200 shadow-md bg-white overflow-hidden">
              <Image
                key={imageUrl}
                src={imageUrl}
                alt=""
                width={680}
                height={680}
                priority={currentRound === 0}
                fetchPriority="high"
                className="w-full h-auto object-contain pointer-events-none select-none"
                sizes="(max-width: 768px) 100vw, 672px"
                decoding="async"
                draggable={false}
              />
            </div>
            <div className="absolute inset-0 z-10 touch-none" aria-hidden="true" />
            <p className="text-center text-sm text-gray-500 mt-4">{t('game.memorizeHint')}</p>
          </div>
        )}

        {showQuestionUi && (
          <div>
            <div className="mb-4 px-2 text-center">
              <p className="text-sm font-semibold text-indigo-600 mb-2">{roundTitle}</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed whitespace-pre-line">
                {questionText}
              </h2>
            </div>

            <div className="space-y-4 px-2">
              {optionsArray.map((option, index) => {
                const optionText = stripOptionPrefix(locText(option.text, locale));
                const colors = [
                  'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-300 hover:border-purple-500',
                  'from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 border-indigo-300 hover:border-indigo-500',
                  'from-violet-50 to-violet-100 hover:from-violet-100 hover:to-violet-200 border-violet-300 hover:border-violet-500',
                  'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-300 hover:border-blue-500',
                ];
                const locked = roundPhase === 'feedback';

                return (
                  <button
                    key={index}
                    type="button"
                    disabled={locked}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full min-h-[80px] bg-gradient-to-r ${colors[index]} border-2 text-gray-800 font-medium py-4 px-4 rounded-xl transition-all text-left ${
                      locked ? 'opacity-80 cursor-default' : 'transform hover:scale-102'
                    }`}
                  >
                    <span className="text-base">{optionText}</span>
                  </button>
                );
              })}
            </div>

            {answerFeedback && (
              <div className="mt-6 px-2 space-y-4">
                <div
                  className={`rounded-2xl border-2 p-4 ${
                    answerFeedback.isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-300 bg-rose-50'
                  }`}
                >
                  <p className="font-bold text-gray-900 mb-2">
                    {answerFeedback.isCorrect ? t('ui.feedbackCorrect') : t('ui.feedbackWrong')}
                  </p>
                  {!answerFeedback.isCorrect && (
                    <p className="text-sm text-gray-700">
                      {t('game.correctAnswer', { answer: answerFeedback.correctAnswerText })}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleContinueAfterFeedback}
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
                >
                  {currentRound < PHASE3_MEMORY_LIMIT_CHALLENGE_COUNT - 1 ? t('ui.nextQuestion') : t('ui.viewResult')}
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
        )}
      </div>
    </div>
  );
}
