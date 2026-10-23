'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3LoveIqOption,
  Phase3LoveIqQuestion,
  Phase3LoveIqResult,
  PHASE3_LOVE_IQ_MAX,
  getPhase3LoveIqPercentResult,
  loveIqText,
  phase3LoveIqPercentResults,
} from '@/lib/phase3LoveIqPercentData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Phase3LoveIqPercentTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3LoveIqQuestion[];
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

type RecommendedTest = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  playCount: number;
  badgeType?: 'popular' | 'hot' | null;
};

export default function Phase3LoveIqPercentTestClient({
  locale,
  slug,
  title,
  questions,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Phase3LoveIqPercentTestClientProps) {
  const t = useTranslations('phase3LoveIqPercentTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finalAnswers, setFinalAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [result, setResult] = useState<Phase3LoveIqResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3LoveIqQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Phase3LoveIqOption[]>>({});
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const [answerFeedback, setAnswerFeedback] = useState<{ isCorrect: boolean } | null>(null);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [showResultAd, setShowResultAd] = useState(false);
  const [showPopularAd, setShowPopularAd] = useState(false);
  const resultAdRef = useRef<HTMLDivElement>(null);
  const popularAdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    if (!shuffledOptionsMap[currentQuestion] && shuffledQuestions[currentQuestion]) {
      const optionsCopy = [...shuffledQuestions[currentQuestion].options];
      for (let i = optionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
      }
      setShuffledOptionsMap((prev) => ({ ...prev, [currentQuestion]: optionsCopy }));
    }
  }, [currentQuestion, started, shuffledOptionsMap, shuffledQuestions]);

  useEffect(() => {
    if (showResult) return;
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          document.querySelectorAll('.adsbygoogle').forEach((el) => {
            const status = (el as HTMLElement).getAttribute('data-adsbygoogle-status');
            if (!status || status === '') {
              safeLoadAdSense();
            }
          });
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [started, showResult, showLoadingSpinner, showResultPopup]);

  useEffect(() => {
    if (!showResult) return;
    const targets: Array<{ node: HTMLDivElement; reveal: () => void }> = [];
    if (!showResultAd && resultAdRef.current) {
      targets.push({ node: resultAdRef.current, reveal: () => setShowResultAd(true) });
    }
    if (!showPopularAd && popularAdRef.current) {
      targets.push({ node: popularAdRef.current, reveal: () => setShowPopularAd(true) });
    }
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = targets.find((item) => item.node === entry.target);
          if (!match) return;
          match.reveal();
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '200px 0px' }
    );
    targets.forEach((item) => observer.observe(item.node));
    return () => observer.disconnect();
  }, [showResult, showResultAd, showPopularAd, popularTestsState.length]);

  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  const shuffleQuestions = (questionList: Phase3LoveIqQuestion[]) => {
    const shuffled = questionList.map((q, idx) => ({ question: q, originalIndex: idx }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
      questions: shuffled.map((item) => item.question),
      originalIndices: shuffled.map((item) => item.originalIndex),
    };
  };

  const handleStartTest = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
    setShuffledOptionsMap({});
    setDisplayPlayCount((prev) => prev + 1);

    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }

    setStarted(true);
    window.scrollTo(0, 0);
  };

  const finishTest = (nextAnswers: Record<number, number>) => {
    const answersArray = questions.map((_, idx) => nextAnswers[idx] ?? 0);
    const score = answersArray.reduce((sum, value) => sum + value, 0);
    setFinalAnswers(answersArray);
    setTotalScore(score);
    setResult(getPhase3LoveIqPercentResult(score));
    setShowLoadingSpinner(true);
  };

  const handleOptionSelect = (option: Phase3LoveIqOption, index: number) => {
    if (answerFeedback) return;
    const originalIndex = originalQuestionIndices[currentQuestion];
    const nextAnswers = { ...answers, [originalIndex]: option.isCorrect ? 1 : 0 };
    setAnswers(nextAnswers);
    setPickedIndex(index);
    setAnswerFeedback({ isCorrect: option.isCorrect });
  };

  const handleContinueAfterFeedback = () => {
    const nextAnswers = answers;
    setAnswerFeedback(null);
    setPickedIndex(null);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    finishTest(nextAnswers);
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setFinalAnswers([]);
    setTotalScore(0);
    setResult(null);
    setShowResult(false);
    setShuffledQuestions([]);
    setOriginalQuestionIndices([]);
    setShuffledOptionsMap({});
    setPickedIndex(null);
    setAnswerFeedback(null);
    setShowResultAd(false);
    setShowPopularAd(false);
  };

  const pageUrl = () => `https://myquizoasis.com${window.location.pathname}`;

  const getResultShareLine = () => {
    if (!result) return '';
    return loveIqText(result.shareLine, locale).replace('{score}', String(totalScore));
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${t('shareMessages.default', { type: getResultShareLine() })}\n\n${pageUrl()}`;

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
    const url = encodeURIComponent(pageUrl());
    const shareText = result
      ? encodeURIComponent(t('shareMessages.line', { type: getResultShareLine() }))
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = pageUrl();
    const shareText = result
      ? `${t('shareMessages.wechat', { type: getResultShareLine() })}\n\n${url}`
      : `${t('shareMessages.startWechat')}\n\n${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }
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
    const url = encodeURIComponent(pageUrl());
    const shareText = result
      ? encodeURIComponent(t('shareMessages.whatsapp', { type: getResultShareLine() }))
      : encodeURIComponent(t('shareMessages.startWhatsapp'));
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    if (typeof window === 'undefined') return;

    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }

    const currentUrl = pageUrl();
    const shareDescription = result
      ? t('shareMessages.kakao', { type: getResultShareLine() })
      : t('shareMessages.startKakao');

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: shareDescription,
          imageUrl: getThumbnailUrl(thumbnail || ''),
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
    const url = encodeURIComponent(pageUrl());
    const shareText = result
      ? t('shareMessages.telegram', { type: getResultShareLine() })
      : t('shareMessages.startTelegram');
    window.open(`https://t.me/share/url?url=${url}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(pageUrl());
    alert(t('alerts.linkCopied'));
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const renderShareButtons = () => (
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

  const renderTestBadge = (test: RecommendedTest) => (
    <>
      {latestTestSlugs.includes(test.slug) && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
      )}
      {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{t('ui.popularBadge')}</div>
      )}
      {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
      )}
    </>
  );

  const renderTestCard = (test: RecommendedTest) => (
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
          {renderTestBadge(test)}
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
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{t('ui.popularBadge')}</div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
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
              {t('startMessage.line1') && <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>}
              {t('startMessage.line2') && <p>{t('startMessage.line2')}</p>}
              {t('startMessage.line3') && <p>{t('startMessage.line3')}</p>}
              {t('startMessage.line4') && <p>{t('startMessage.line4')}</p>}
              {t('startMessage.line5') && <p className="whitespace-pre-line">{t('startMessage.line5')}</p>}
              {t('startMessage.note') && <p className="text-sm text-gray-500">{t('startMessage.note')}</p>}
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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

            <div className="mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
              {renderShareButtons()}
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test) => renderTestCard(test))}
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
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-rose-500 rounded-full animate-spin" />
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
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    const resultTitle = loveIqText(result.title, locale);
    const resultQuote = loveIqText(result.quote, locale);
    const resultDescription = loveIqText(result.description, locale);
    const resultKeywords = loveIqText(result.keywords, locale);
    const resultStrengths = loveIqText(result.strengths, locale);
    const resultScoreRange = loveIqText(result.scoreRange, locale);
    const resultGaugeLabel = loveIqText(result.gaugeLabel, locale);
    const resultTips = loveIqText(result.tips, locale).split('\n').filter((line) => line.trim());
    const resultOneLiner = loveIqText(result.oneLiner, locale);
    const gaugeLeft = `${result.gauge}%`;
    const missed = questions
      .map((question, index) => ({ question, index }))
      .filter((item) => (finalAnswers[item.index] ?? 0) === 0);
    const missedTopics = missed.map((item) => loveIqText(item.question.topic, locale)).join(' · ');

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
            <div className="text-6xl mb-3">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{resultTitle}</h1>
            <p className="text-lg font-semibold text-gray-700 mb-3">&ldquo;{resultQuote}&rdquo;</p>
            <p className="text-base text-gray-600 leading-relaxed">{resultDescription}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3 text-left">📊 {t('ui.scoreTitle')}</h3>
            <p className="text-center text-2xl font-bold text-rose-600 mb-1">
              {totalScore}
              <span className="text-base font-semibold text-gray-500"> / {PHASE3_LOVE_IQ_MAX}{t('ui.scoreUnit')}</span>
            </p>
            <p className="text-center text-sm font-semibold text-purple-600 mb-1">{resultGaugeLabel}</p>
            <p className="text-center text-sm text-gray-500 mb-3">{resultScoreRange}</p>
            <div className="relative pt-2 pb-10">
              <div className="relative h-3">
                <div className="h-3 rounded-full bg-gradient-to-r from-rose-200 via-pink-300 to-purple-500" />
                <div
                  className="absolute top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-rose-600 shadow"
                  style={{ left: gaugeLeft }}
                />
              </div>
              <div className="relative mt-2 h-8 text-[10px] sm:text-[11px] text-gray-500">
                {phase3LoveIqPercentResults.map((item) => (
                  <span
                    key={item.type}
                    className={`absolute -translate-x-1/2 text-center leading-tight whitespace-nowrap ${item.type === result.type ? 'font-bold text-rose-600' : ''}`}
                    style={{ left: `${item.gauge}%` }}
                  >
                    {item.emoji}
                    <br />
                    {loveIqText(item.gaugeLabel, locale)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">⭐ {t('ui.keywords')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {resultKeywords.split(/[,、，]/).map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💪 {t('ui.strengths')}</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-center">{resultStrengths}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3 text-left">💡 {t('ui.tips')}</h3>
            <ol className="space-y-2">
              {resultTips.map((tip, index) => (
                <li key={index} className="text-sm text-gray-700 leading-relaxed text-center">
                  {index + 1}. {tip}
                </li>
              ))}
            </ol>
            <p className="text-sm font-semibold text-rose-600 text-center mt-3">{resultOneLiner}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">📝 {t('ui.missed')}</h3>
            {missed.length === 0 ? (
              <p className="text-sm text-gray-700 text-center">{t('ui.allCorrect')}</p>
            ) : (
              <>
                <p className="text-sm font-semibold text-purple-700 text-center mb-3">
                  {t('ui.missedTopics')} {missedTopics}
                </p>
                <div className="space-y-3">
                  {missed.map((item) => (
                    <div key={item.question.id} className="rounded-xl bg-rose-50 px-3 py-3">
                      <p className="text-xs font-bold text-rose-600 mb-1">{loveIqText(item.question.topic, locale)}</p>
                      <p className="text-sm font-semibold text-gray-800 mb-1">{loveIqText(item.question.question, locale)}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{loveIqText(item.question.explanation, locale)}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

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

          <div ref={resultAdRef} className="my-6 px-4" style={{ minHeight: 250 }}>
            {showResultAd && (
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label={t('ui.adsenseTitle')}
              />
            )}
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
              className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all text-center shadow-md"
            >
              {tGlobal('mbti.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
            {renderShareButtons()}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((test) => renderTestCard(test))}
              </div>
            </div>
          )}

          {popularTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <div ref={popularAdRef} className="mb-6 px-4 w-full" style={{ minHeight: 250 }}>
                {showPopularAd && (
                  <AdSensePlaceholder
                    slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                    style={{ width: '100%', height: '250px' }}
                    className="mx-auto w-full"
                    label={t('ui.adsenseTitle')}
                  />
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.popularTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {popularTestsState.map((test) => renderTestCard(test))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) {
    return null;
  }

  const question = shuffledQuestions[currentQuestion];
  const questionText = loveIqText(question.question, locale);
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;
  const optionColors = [
    'from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 border-rose-200 hover:border-rose-400',
    'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
    'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
    'from-fuchsia-50 to-fuchsia-100 hover:from-fuchsia-100 hover:to-fuchsia-200 border-fuchsia-200 hover:border-fuchsia-400',
  ];
  const badgeColors = ['bg-rose-600', 'bg-pink-600', 'bg-purple-600', 'bg-fuchsia-600'];
  const locked = answerFeedback !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-rose-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-rose-500 to-pink-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed px-4">{questionText}</h2>

          <div className="space-y-4 px-4">
            {optionsArray.map((option, index) => {
              const optionText = loveIqText(option.text, locale);
              const isPicked = pickedIndex === index;
              const showCorrect = locked && option.isCorrect;
              const showWrong = locked && isPicked && !option.isCorrect;
              const stateClass = showCorrect
                ? 'border-emerald-500 ring-2 ring-emerald-300'
                : showWrong
                  ? 'border-rose-500 ring-2 ring-rose-300'
                  : '';
              return (
                <button
                  key={`${currentQuestion}-${index}`}
                  type="button"
                  disabled={locked}
                  onClick={() => handleOptionSelect(option, index)}
                  className={`w-full bg-gradient-to-r ${optionColors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all text-left ${stateClass} ${
                    locked ? 'cursor-default' : 'transform hover:scale-102'
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-7 h-7 ${badgeColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-base flex-1">{optionText}</span>
                    {showCorrect && <span className="ml-2 text-emerald-600 font-bold">✓</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {answerFeedback && (
            <div className="mt-6 px-4 space-y-4">
              <div
                className={`rounded-2xl border-2 p-4 ${
                  answerFeedback.isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-300 bg-rose-50'
                }`}
              >
                <p className="font-bold text-gray-900 mb-2">
                  {answerFeedback.isCorrect ? t('ui.feedbackCorrect') : t('ui.feedbackWrong')}
                </p>
                <h3 className="font-bold text-sm text-gray-800 mb-1">{t('ui.explanation')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{loveIqText(question.explanation, locale)}</p>
              </div>
              <button
                type="button"
                onClick={handleContinueAfterFeedback}
                className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-md"
              >
                {currentQuestion < shuffledQuestions.length - 1 ? t('ui.nextQuestion') : t('ui.viewResult')}
              </button>
            </div>
          )}

          <div className="mt-8 px-4">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            {renderShareButtons()}
          </div>
        </div>
      </div>
    </div>
  );
}
