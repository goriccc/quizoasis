'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3PersonalityColorTemperatureQuestion,
  Phase3PersonalityColorTemperatureResult,
  calculatePhase3PersonalityColorTemperatureResult,
} from '@/lib/phase3PersonalityColorTemperatureData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount, prefetchStorageImages, extractImageFilenamesFromQuestions } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Phase3PersonalityColorTemperatureTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3PersonalityColorTemperatureQuestion[];
  results: Phase3PersonalityColorTemperatureResult[];
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

const TEMP_MIN = -10;
const TEMP_MAX = 42;

function getTemperatureMarkerPercent(temp: number): number {
  return Math.min(100, Math.max(0, ((temp - TEMP_MIN) / (TEMP_MAX - TEMP_MIN)) * 100));
}

export default function Phase3PersonalityColorTemperatureTestClient({
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
}: Phase3PersonalityColorTemperatureTestClientProps) {
  const t = useTranslations('phase3PersonalityColorTemperatureTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<Phase3PersonalityColorTemperatureResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  useEffect(() => {
    if (showResult) return;

    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          const adElements = document.querySelectorAll('.adsbygoogle');
          adElements.forEach((el) => {
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

  const handleStartTest = () => {
    setDisplayPlayCount((prev) => prev + 1);

    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }

    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      const answersArray = questions.map((_, idx) => newAnswers[idx] ?? 0);
      const resultType = calculatePhase3PersonalityColorTemperatureResult(answersArray);
      const colorResult = results.find((r) => r.type === resultType);
      if (colorResult) {
        setResult(colorResult);
      }
    }
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
  };

  const getResultShareText = () => {
    if (!result) return '';
    return result.shareLine[locale as keyof typeof result.shareLine] || result.shareLine.ko;
  };

  const handleShareResult = async () => {
    if (!result) return;

    const shareText = `${getResultShareText()}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;

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

  const handleCaptureResult = async () => {
    if (!result) return;
    const shareText = `${getResultShareText()}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    try {
      await navigator.clipboard.writeText(shareText);
      alert(t('alerts.resultCopied'));
    } catch {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const shareText = result
      ? encodeURIComponent(getResultShareText())
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const shareText = result
      ? `${getResultShareText()}\n\n${url}`
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
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const shareText = result
      ? encodeURIComponent(getResultShareText())
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

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    const shareDescription = result ? getResultShareText() : t('shareMessages.startKakao');

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
            title: t('ui.goToTest'),
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
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
    const shareText = result
      ? encodeURIComponent(getResultShareText())
      : encodeURIComponent(t('shareMessages.startTelegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${shareText}`, '_blank');
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

  if (showResult && result) {
    const loc = locale as keyof typeof result.title;
    const resultTitleRaw = result.title[loc] || result.title.ko;
    const resultTitle = resultTitleRaw.split(result.emoji).join('').replace(/\s+/g, ' ').trim();
    const resultShortDescription = result.shortDescription[loc] || result.shortDescription.ko;
    const resultLongDescription = result.description[loc] || result.description.ko;
    const resultEmotionTemperature = result.emotionTemperature[loc] || result.emotionTemperature.ko;
    const resultEmotionColor = result.emotionColor[loc] || result.emotionColor.ko;
    const resultEmotionKeywords = result.emotionKeywords[loc] || result.emotionKeywords.ko;
    const resultStrengthAtTemp = result.strengthAtTemp[loc] || result.strengthAtTemp.ko;
    const resultCharmAtTemp = result.charmAtTemp[loc] || result.charmAtTemp.ko;
    const resultComfortableSpace = result.comfortableSpace[loc] || result.comfortableSpace.ko;
    const resultColorCodes = result.colorCodes[loc] || result.colorCodes.ko;
    const resultCertificationPhrase = result.certificationPhrase[loc] || result.certificationPhrase.ko;
    const resultOneLiner = result.oneLiner[loc] || result.oneLiner.ko;
    const markerPercent = getTemperatureMarkerPercent(result.temperatureCelsius);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div
                className="px-4 py-5 md:px-6 md:py-6"
                style={{ backgroundColor: result.accentColor }}
              >
                <h2 className="text-lg font-bold text-white mb-2">{t('ui.resultTitle')}</h2>
                <div className="text-5xl mb-2">{result.emoji}</div>
                <h1 className="text-xl md:text-2xl font-bold text-white mb-2">{resultTitle}</h1>
                <p className="text-sm md:text-base text-white/95 leading-relaxed">{resultShortDescription}</p>
              </div>

              <div className="px-4 py-5 md:px-6">
                <div className="mb-4">
                  <div
                    className="relative w-full h-4 rounded-full overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(to right, #0A2342, #4682B4, #AAF0D1, #9683A3, #FF7F50, #FFD700, #C21A7A)',
                    }}
                  >
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-6 bg-white border-2 border-gray-800 rounded-sm shadow-md"
                      style={{ left: `${markerPercent}%`, transform: 'translate(-50%, -50%)' }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>{t('ui.coolToneLabel')}</span>
                    <span>{t('ui.warmToneLabel')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-center">
                  <p className="text-base font-bold text-gray-800">
                    {t('ui.myEmotionTemperature')}: {resultEmotionTemperature}
                  </p>
                  <p className="text-base font-bold text-gray-800">
                    {t('ui.emotionColor')}: {resultEmotionColor} {result.emoji}
                  </p>
                </div>

                <p className="text-base text-gray-600 leading-relaxed">{resultLongDescription}</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="bg-white rounded-xl shadow-lg p-5">
                <h3 className="text-base font-bold text-gray-800 mb-4 text-left">{t('ui.emotionKeywords')}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {resultEmotionKeywords.split(/[,、，]/).map((part, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {part.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.strengthAtTemp')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{resultStrengthAtTemp}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.charmAtTemp')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{resultCharmAtTemp}</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.comfortableSpace')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{resultComfortableSpace}</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.colorCodes')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{resultColorCodes}</p>
              </div>
            </div>

            {resultCertificationPhrase && (
              <div className="mb-3">
                <div className="bg-white rounded-xl shadow-lg p-4 border-2" style={{ borderColor: result.accentColor }}>
                  <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.certificationPhrase')}</h3>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed">{resultCertificationPhrase}</p>
                </div>
              </div>
            )}

            <div className="mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.oneLiner')}</h3>
                <p className="text-sm text-gray-700 leading-relaxed italic">&ldquo;{resultOneLiner}&rdquo;</p>
              </div>
            </div>

            <div className="mt-6 mb-4 px-4">
              <button
                onClick={handleCaptureResult}
                className="w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-rose-600 hover:to-orange-600 transition-all shadow-md mb-3"
              >
                {t('ui.captureResult')}
              </button>
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
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
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 20vw" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {test.title}
                          </h3>
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
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 20vw" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {test.title}
                          </h3>
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

  const question = questions[currentQuestion];
  if (!question) return null;

  const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const optionStyles = [
    {
      gradient: 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200 hover:border-blue-400',
      badge: 'bg-blue-600',
    },
    {
      gradient: 'from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border-orange-200 hover:border-orange-400',
      badge: 'bg-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-purple-600">
              {currentQuestion + 1} / {questions.length}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center leading-relaxed px-4">
            {questionText}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6 px-4">{t('ui.questionHint')}</p>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 px-2 sm:px-4">
            {question.options.map((option, index) => {
              const optionLabel = option.label[locale as keyof typeof option.label] || option.label.ko;
              const label = String.fromCharCode(65 + index);
              const style = optionStyles[index];
              const imgSrc = getThumbnailUrl(option.image);

              return (
                <button
                  key={`${option.image}-${index}`}
                  type="button"
                  onClick={() => handleAnswer(option.score)}
                  className={`min-w-0 w-full bg-gradient-to-br ${style.gradient} border-2 rounded-xl overflow-hidden transition-all transform hover:scale-[1.02] text-left shadow-sm hover:shadow-md`}
                >
                  <div className="relative w-full aspect-square bg-gray-100">
                    <Image
                      src={imgSrc}
                      alt={optionLabel}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 45vw, 320px"
                      unoptimized
                    />
                    <div
                      className={`absolute top-2 left-2 w-8 h-8 ${style.badge} text-white rounded-full flex items-center justify-center font-bold text-sm shadow`}
                    >
                      {label}
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <p className="text-xs sm:text-sm font-medium text-gray-800 leading-snug line-clamp-4">{optionLabel}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 mb-2 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            {renderShareButtons()}
          </div>

          <div className="mt-6 mb-8 px-4">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
