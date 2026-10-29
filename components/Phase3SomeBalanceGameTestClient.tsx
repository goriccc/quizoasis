'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3SomeBalanceGameQuestion,
  Phase3SomeBalanceGameResult,
  calculatePhase3SomeBalanceGameResult,
  someBalanceText,
} from '@/lib/phase3SomeBalanceGameData';
import Link from 'next/link';
import Image from 'next/image';
import { getThumbnailUrl, formatPlayCount, prefetchStorageImages, extractImageFilenamesFromQuestions } from '@/lib/utils';
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
  questions: Phase3SomeBalanceGameQuestion[];
  results: Phase3SomeBalanceGameResult[];
  questionCount: number;
  thumbnail?: string;
  playCount?: number;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
}

export default function Phase3SomeBalanceGameTestClient({
  locale,
  slug,
  title,
  thumbnail,
  playCount = 0,
  questions,
  results,
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3SomeBalanceGameTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<Phase3SomeBalanceGameResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3SomeBalanceGameQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({
    slug,
    locale,
    similarTags: '밸런스게임,썸,연애테스트',
  });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Phase3SomeBalanceGameQuestion['options']>>({});
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    const questionKey = currentQuestion;
    if (!shuffledOptionsMap[questionKey] && shuffledQuestions[currentQuestion]) {
      const optionsCopy = [...shuffledQuestions[currentQuestion].options];
      for (let i = optionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
      }
      setShuffledOptionsMap((prev) => ({ ...prev, [questionKey]: optionsCopy }));
    }
  }, [currentQuestion, started, shuffledOptionsMap, shuffledQuestions]);

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
  }, [started, showResult, showLoadingSpinner, showResultPopup]);

  useEffect(() => {
    if (!showLoadingSpinner) return;
    const timer = setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoadingSpinner]);

  const shuffleQuestions = (questionList: Phase3SomeBalanceGameQuestion[]) => {
    const withIndices = questionList.map((q, idx) => ({ question: q, originalIndex: idx }));
    const shuffled = [...withIndices];
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
    setDisplayPlayCount((prev) => prev + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const finishWithAnswers = (finalAnswers: Record<number, number>) => {
    setShowLoadingSpinner(true);
    const answersArray = questions.map((_, idx) => finalAnswers[idx] ?? 0);
    const resultType = calculatePhase3SomeBalanceGameResult(questions, answersArray);
    const matchResult = results.find((r) => r.type === resultType);
    if (matchResult) setResult(matchResult);
  };

  const handleAnswer = (optionIndexInOriginal: number) => {
    const currentOriginalIndex = originalQuestionIndices[currentQuestion];
    const newAnswers = { ...answers, [currentOriginalIndex]: optionIndexInOriginal };
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo(0, 0);
    } else {
      finishWithAnswers(newAnswers);
    }
  };

  const handleRetake = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
  };

  const shareUrl = () =>
    typeof window !== 'undefined' ? `https://myquizoasis.com${window.location.pathname}` : '';

  const resultShareText = () =>
    result ? someBalanceText(result.shareLine, locale) : '';

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${resultShareText()}\n\n${shareUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') console.error('공유 실패:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('alerts.resultCopied'));
      } catch {
        alert(t('alerts.shareFailed'));
      }
    }
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(shareUrl());
    const shareText = result
      ? encodeURIComponent(resultShareText())
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = shareUrl();
    const shareText = result
      ? `${resultShareText()}\n\n${url}`
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
    const url = encodeURIComponent(shareUrl());
    const shareText = result
      ? encodeURIComponent(resultShareText())
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
    const currentUrl = shareUrl();
    const shareDescription = result ? resultShareText() : t('shareMessages.startKakao');
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
    const url = encodeURIComponent(shareUrl());
    const text = encodeURIComponent(result ? resultShareText() : t('shareMessages.startTelegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(shareUrl());
    alert(t('alerts.linkCopied'));
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const renderShareRow = () => (
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

  const renderTestCards = (tests: typeof similarTestsState) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tests.map((test) => (
        <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
          <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={getThumbnailUrl(test.thumbnail)}
                alt={test.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {latestTestSlugs.includes(test.slug) && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                  NEW
                </div>
              )}
              {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                  {t('ui.popularBadge')}
                </div>
              )}
              {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                  HOT
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 line-clamp-2">{test.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {formatPlayCount(test.playCount, locale as Locale)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
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
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            {isLatestTest && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                NEW
              </div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                {t('ui.popularBadge')}
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
              <p className="whitespace-pre-line">{t('startMessage.line4')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('ui.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
            </p>

            <div className="max-w-[680px] mx-auto mb-6">
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto w-full"
              />
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
              {renderShareRow()}
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                {renderTestCards(similarTestsState)}
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
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 {tGlobal('mbti.testCompleted')}
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
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    const resultTitle = someBalanceText(result.title, locale);
    const shortDescription = someBalanceText(result.shortDescription, locale);
    const quote = someBalanceText(result.quote, locale);
    const description = someBalanceText(result.description, locale);
    const typeLabelText = someBalanceText(result.typeLabel, locale);
    const characteristics = someBalanceText(result.characteristics, locale);
    const livingStyle = someBalanceText(result.livingStyle, locale);
    const strengths = someBalanceText(result.strengths, locale);
    const caution = someBalanceText(result.caution, locale);
    const goodMatch = someBalanceText(result.goodMatch, locale);
    const tips = someBalanceText(result.tips, locale);
    const oneLiner = someBalanceText(result.oneLiner, locale);

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t('ui.yourResult')}</h2>
            <div className="text-6xl mb-3">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{resultTitle}</h1>
            <p className="text-lg font-semibold text-gray-700 mb-3">{shortDescription}</p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">&ldquo;{quote}&rdquo;</p>
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">📊 {t('ui.styleType')}</h3>
              <p className="text-center font-bold text-orange-600">{typeLabelText}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">⭐ {t('ui.keywords')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {characteristics
                  .split(/[·・、，,]/)
                  .map((c) => c.trim())
                  .filter(Boolean)
                  .map((char, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {char}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💬 {t('ui.someStyle')}</h3>
            <p className="text-sm text-gray-700 text-left">{livingStyle}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💪 {t('ui.strengths')}</h3>
            <p className="text-sm text-gray-700 text-left">{strengths}</p>
          </div>

          <div className="grid gap-3 mb-3 grid-cols-1 sm:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2">💖 {t('ui.goodMatch')}</h3>
              <p className="text-sm text-gray-700">{goodMatch}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2">⚠️ {t('ui.caution')}</h3>
              <p className="text-sm text-gray-700">{caution}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">📝 {t('ui.tips')}</h3>
            <ul className="text-sm text-gray-700 leading-relaxed space-y-1 pl-[1ch]">
              {tips
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line, idx) => (
                  <li key={idx}>• {line}</li>
                ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💬 {t('ui.oneLiner')}</h3>
            <p className="text-sm text-gray-700 text-left">&ldquo;{oneLiner}&rdquo;</p>
          </div>

          <div className="mt-8 mb-6">
            <button
              onClick={handleShareResult}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
            >
              {t('ui.shareResult')}
            </button>
          </div>

          <div className="my-6">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleRetake}
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
            >
              {t('ui.retake')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-rose-600 transition-all text-center shadow-md"
            >
              {t('ui.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
            {renderShareRow()}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{tGlobal('recommendations.similarTestsTop5')}</h2>
              {renderTestCards(similarTestsState)}
            </div>
          )}

          {popularTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{tGlobal('recommendations.popularTestsTop5')}</h2>
              {renderTestCards(popularTestsState)}
              <div className="mt-6">
                <AdSensePlaceholder
                  slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                  style={{ width: '100%', height: '250px' }}
                  className="mx-auto"
                  label={t('ui.adsenseTitle')}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) return null;

  const question = shuffledQuestions[currentQuestion];
  const questionText = someBalanceText(question.question, locale);
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-orange-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-rose-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed px-4">
          {t('ui.roundLabel', { n: currentQuestion + 1 })}
          <span className="block mt-2 text-xl md:text-2xl font-bold">{questionText}</span>
        </h2>

        <div className="space-y-4 px-4">
          {optionsArray.map((option, index) => {
            const optionText = someBalanceText(option.text, locale);
            const originalIndex = question.options.findIndex((o) => o === option);
            const label = String.fromCharCode(65 + index);
            const colors = [
              'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
              'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
            ];
            const bgColors = ['bg-purple-600', 'bg-pink-600'];
            return (
              <button
                key={index}
                onClick={() => handleAnswer(originalIndex >= 0 ? originalIndex : index)}
                className={`w-full bg-gradient-to-r ${colors[index % 2]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-102 text-left`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-7 h-7 ${bgColors[index % 2]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}
                  >
                    {label}
                  </div>
                  <span className="text-base">{optionText}</span>
                </div>
              </button>
            );
          })}
        </div>

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
          {renderShareRow()}
        </div>
      </div>
    </div>
  );
}
