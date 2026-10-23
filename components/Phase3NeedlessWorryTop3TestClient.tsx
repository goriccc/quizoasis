'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3NeedlessWorryQuestion,
  Phase3NeedlessWorryOutcome,
  Phase3NeedlessWorryRanked,
  PHASE3_NEEDLESS_WORRY_MAX,
  calculatePhase3NeedlessWorryTop3,
  worryText,
} from '@/lib/phase3NeedlessWorryTop3Data';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Phase3NeedlessWorryTop3TestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3NeedlessWorryQuestion[];
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

export default function Phase3NeedlessWorryTop3TestClient({
  locale,
  slug,
  title,
  questions,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Phase3NeedlessWorryTop3TestClientProps) {
  const t = useTranslations('phase3NeedlessWorryTop3Test');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [outcome, setOutcome] = useState<Phase3NeedlessWorryOutcome | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3NeedlessWorryQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Phase3NeedlessWorryQuestion['options']>>({});
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

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
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  const shuffleQuestions = (questionList: Phase3NeedlessWorryQuestion[]) => {
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

  const handleAnswer = (category: number) => {
    const originalIndex = originalQuestionIndices[currentQuestion];
    const newAnswers = { ...answers, [originalIndex]: category };
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowLoadingSpinner(true);
    const answersArray = questions.map((_, idx) => newAnswers[idx] ?? 0);
    setOutcome(calculatePhase3NeedlessWorryTop3(answersArray, locale));
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setOutcome(null);
    setShowResult(false);
    setShuffledQuestions([]);
    setOriginalQuestionIndices([]);
    setShuffledOptionsMap({});
  };

  const pageUrl = () => `https://myquizoasis.com${window.location.pathname}`;

  const getResultShareLine = () => outcome?.shareLine ?? '';

  const handleShareResult = async () => {
    if (!outcome) return;
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
    const shareText = outcome
      ? encodeURIComponent(t('shareMessages.line', { type: getResultShareLine() }))
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = pageUrl();
    const shareText = outcome
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
    const shareText = outcome
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
    const shareDescription = outcome
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
    const shareText = outcome
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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

  if (showResult && outcome) {
    const [first, second, third] = outcome.top3;
    const podium = [second, first, third].filter(Boolean) as Phase3NeedlessWorryRanked[];
    const familyTitle = worryText(outcome.family.title, locale);
    const familyDescription = worryText(outcome.family.description, locale);
    const familyPractice = worryText(outcome.family.practice, locale);

    const renderBrief = (item: Phase3NeedlessWorryRanked) => (
      <div className="bg-white rounded-xl shadow-lg p-4 h-full">
        <p className="text-xs font-bold text-gray-400 mb-2">
          {item.rank === 2 ? t('ui.rank2') : t('ui.rank3')}
        </p>
        <p className="text-3xl mb-1">{item.card.emoji}</p>
        <h3 className="text-lg font-bold text-gray-800">{worryText(item.card.name, locale)}</h3>
        <p className="text-sm text-purple-600 font-semibold mb-3">{worryText(item.card.animal, locale)}</p>
        <p className="text-xs font-bold text-gray-500 mb-1 text-left">{t('ui.protects')}</p>
        <p className="text-sm text-gray-700 mb-3">{worryText(item.card.protects, locale)}</p>
        <p className="text-xs font-bold text-gray-500 mb-1 text-left">{t('ui.comfort')}</p>
        <p className="text-sm text-gray-700 italic">&ldquo;{worryText(item.card.comfort, locale)}&rdquo;</p>
      </div>
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold text-gray-800">{tGlobal('mbti.yourResult')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 items-stretch">
            {podium.map((item) => {
              if (item.rank === 1) {
                const note = worryText(item.card.note, locale);
                return (
                  <div key={item.card.id} className="order-1 md:order-2 bg-white rounded-2xl shadow-lg p-4 md:p-5 border-2 border-amber-300">
                    <p className="text-xs font-bold text-amber-600 mb-2">{t('ui.rank1')}</p>
                    <p className="text-5xl mb-2">{item.card.emoji}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">{worryText(item.card.name, locale)}</h1>
                    <p className="text-sm font-semibold text-purple-700 mb-4">
                      {t('ui.animal')} · {worryText(item.card.animal, locale)}
                    </p>
                    <div className="space-y-3 text-left">
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">🛡️ {t('ui.protects')}</p>
                        <p className="text-sm text-gray-700 text-center">{worryText(item.card.protects, locale)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">⭐ {t('ui.strength')}</p>
                        <p className="text-sm text-gray-700 text-center">{worryText(item.card.strength, locale)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">💭 {t('ui.grows')}</p>
                        <p className="text-sm text-gray-700 text-center">{worryText(item.card.grows, locale)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">🍃 {t('ui.letGo')}</p>
                        <p className="text-sm text-gray-700 text-center">{worryText(item.card.letGo, locale)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">💬 {t('ui.comfort')}</p>
                        <p className="text-sm text-gray-700 text-center italic">&ldquo;{worryText(item.card.comfort, locale)}&rdquo;</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">✨ {t('ui.oneLiner')}</p>
                        <p className="text-sm text-gray-700 text-center">{worryText(item.card.oneLiner, locale)}</p>
                      </div>
                      {note && <p className="text-xs text-gray-500 text-center">{note}</p>}
                    </div>
                  </div>
                );
              }
              return (
                <div key={item.card.id} className={item.rank === 2 ? 'order-2 md:order-1' : 'order-3'}>
                  {renderBrief(item)}
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
              {outcome.family.emoji} {t('ui.family')}
            </h3>
            <p className="text-base font-semibold text-gray-800 text-center mb-2">{familyTitle}</p>
            <p className="text-sm text-gray-700 leading-relaxed text-center mb-3">{familyDescription}</p>
            <p className="text-sm font-semibold text-purple-700 text-center">
              {t('ui.practice')} &ldquo;{familyPractice}&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3 text-left">📊 {t('ui.bars')}</h3>
            <div className="space-y-2.5">
              {outcome.ranked.map((item) => (
                <div key={item.card.id} className="flex items-center gap-2">
                  <span className={`w-24 text-sm flex-shrink-0 ${item.rank <= 3 ? 'font-bold text-gray-800' : 'text-gray-500'}`}>
                    {item.card.emoji} {worryText(item.card.name, locale)}
                  </span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(item.score / PHASE3_NEEDLESS_WORRY_MAX) * 100}%`,
                        backgroundColor: item.card.barColor,
                        minWidth: item.score > 0 ? '8px' : '0',
                      }}
                    />
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-gray-700">
                    {item.score}
                    {t('ui.scoreUnit')}
                  </span>
                </div>
              ))}
            </div>
            {outcome.closeFourth && (
              <p className="text-sm text-center text-rose-500 font-semibold mt-3">
                {t('ui.closeFourth', { name: worryText(outcome.closeFourth.card.name, locale) })}
              </p>
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
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
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
              <div className="mb-6 px-4 w-full">
                <AdSensePlaceholder
                  slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                  style={{ width: '100%', height: '250px' }}
                  className="mx-auto w-full"
                />
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
  const questionText = worryText(question.question, locale);
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;
  const optionColors = [
    'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
    'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
    'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200 hover:border-blue-400',
    'from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-green-200 hover:border-green-400',
  ];
  const badgeColors = ['bg-purple-600', 'bg-pink-600', 'bg-blue-600', 'bg-green-600'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-purple-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed px-4">{questionText}</h2>

          <div className="space-y-4 px-4">
            {optionsArray.map((option, index) => {
              const optionText = worryText(option.text, locale);
              return (
                <button
                  key={`${currentQuestion}-${index}`}
                  onClick={() => handleAnswer(option.category)}
                  className={`w-full bg-gradient-to-r ${optionColors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-102 text-left`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-7 h-7 ${badgeColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}
                    >
                      {String.fromCharCode(65 + index)}
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
            {renderShareButtons()}
          </div>
        </div>
      </div>
    </div>
  );
}
