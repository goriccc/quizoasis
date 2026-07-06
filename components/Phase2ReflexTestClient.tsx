'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { getLatestTestSlugs } from '@/lib/latestTests';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import { Phase2ReflexResult, calculatePhase2ReflexResult } from '@/lib/phase2ReflexTestData';

interface Phase2ReflexTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
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

// Game Constants
const TOTAL_ROUNDS = 5;
const MIN_DELAY = 2000; // 2 seconds
const MAX_DELAY = 5000; // 5 seconds

type GameState = 'intro' | 'waiting' | 'ready' | 'now' | 'finished';

export default function Phase2ReflexTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2ReflexTestClientProps) {
  const t = useTranslations('phase2ReflexTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [gameState, setGameState] = useState<GameState>('intro');
  const [round, setRound] = useState(1);
  const [records, setRecords] = useState<number[]>([]);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [showTooSoon, setShowTooSoon] = useState(false);

  // Result State
  const [result, setResult] = useState<Phase2ReflexResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  
  // Data State
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  // Refs
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Initialize
  useEffect(() => {
    incrementPlayCount(slug).catch(console.error);
    setDisplayPlayCount(prev => prev + 1);
  }, [slug]);
// AdSense & AliExpress
  useEffect(() => {
    if (showResult || showLoadingSpinner || showResultPopup) {
      setTimeout(() => {
        try {
          safeLoadAdSense();
        } catch (err) { console.error(err); }
      }, 100);
    }
  }, [showResult, showLoadingSpinner, showResultPopup]);

  useEffect(() => {
    if (result && locale !== 'ko') {
      const loadProducts = async () => {
        try {
          const keywords = getProductKeywordsForDating('tech', locale);
          const products = await searchAliExpressProducts(keywords[0], 4, locale);
          setAliProducts(products);
        } catch (error) { console.error(error); }
      };
      loadProducts();
    }
  }, [result, locale]);


  // Game Logic Functions
  const startRound = useCallback(() => {
    setGameState('waiting');
    setCurrentResult(null);
    setShowTooSoon(false);
    
    // Set random delay before turning green
    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
    
    const id = setTimeout(() => {
      setGameState('now');
      setStartTime(Date.now());
    }, delay);
    
    setTimeoutId(id);
  }, []);

  const handleStartGame = () => {
    setGameState('waiting');
    setRound(1);
    setRecords([]);
    startRound();
    
    // 즉시 맨 위로 스크롤
    window.scrollTo(0, 0);
  };

  const handleScreenClick = () => {
    if (gameState === 'waiting') {
      // Too soon!
      if (timeoutId) clearTimeout(timeoutId);
      setShowTooSoon(true);
      setGameState('ready'); // Use 'ready' state to show "Too Soon" message and retry button/click
      return;
    }

    if (gameState === 'now') {
      // Success
      const endTime = Date.now();
      const diff = endTime - startTime;
      const newRecords = [...records, diff];
      setRecords(newRecords);
      setCurrentResult(diff);
      setGameState('ready'); // Show result of this round

      if (newRecords.length >= TOTAL_ROUNDS) {
        // Game Over logic
        setTimeout(() => {
            finishGame(newRecords);
        }, 1000); // Slight delay to see the last result
      } else {
        // Next round logic handled by user clicking again or timeout? 
        // Let's make user click to proceed or auto proceed. 
        // User requested "Click screen -> Show ms". 
        // To continue, user clicks again.
      }
    } else if (gameState === 'ready') {
       // Proceed to next round or retry current round
       if (showTooSoon) {
           startRound();
       } else if (records.length < TOTAL_ROUNDS) {
           setRound(prev => prev + 1);
           startRound();
       }
    }
  };

  const finishGame = (finalRecords: number[]) => {
    setGameState('finished');
    
    const sum = finalRecords.reduce((a, b) => a + b, 0);
    const avg = Math.round(sum / finalRecords.length);
    const finalResult = calculatePhase2ReflexResult(avg);
    setResult(finalResult);

    // Flow: Loading -> Popup -> Result
    setShowLoadingSpinner(true);
    setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
    }, 2500);
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setShowResult(false);
    setResult(null);
    setGameState('intro');
    setRound(1);
    setRecords([]);
  };

  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const avg = Math.round(records.reduce((a, b) => a + b, 0) / records.length);

    // Using t() for sharing messages as requested
    // Format: "내 반응속도는 평균 [기록]ms! 등급은 [Type명] ⚡ 너 나 이길 수 있음?"
    const shareText = t('shareMessages.default', { record: avg, type: resultTitle });
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert(t('alerts.linkCopied'));
    }).catch(() => {
      alert(t('alerts.shareFailed'));
    });
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '';
      if (kakaoKey) {
        window.Kakao.init(kakaoKey);
      }
    }
    
    const resultTitle = result 
        ? (result.title[locale as keyof typeof result.title] || result.title.ko)
        : title;
    
    const avg = records.length > 0 ? Math.round(records.reduce((a, b) => a + b, 0) / records.length) : 0;
    
    // Result share or Start share
    const description = result 
      ? t('shareMessages.kakao', { record: avg, type: resultTitle })
      : t('shareMessages.startKakao');

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: thumbnail ? getThumbnailUrl(thumbnail) : 'https://quizoasis.com/default-thumbnail.jpg',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }]
    });
  };

  // Other social shares
  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(started, showResult), slug);
    const resultTitle = result 
      ? (result.title[locale as keyof typeof result.title] || result.title.ko)
      : title;
    const avg = records.length > 0 ? Math.round(records.reduce((a, b) => a + b, 0) / records.length) : 0;
    const text = result 
      ? t('shareMessages.telegram', { record: avg, type: resultTitle })
      : t('shareMessages.startTelegram');
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`, '_blank');
  };
  
  const shareToWeChat = () => { 
    alert(t('alerts.wechatCopy')); 
    copyLink(); 
  };
  
  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const resultTitle = result 
      ? (result.title[locale as keyof typeof result.title] || result.title.ko)
      : title;
    const avg = records.length > 0 ? Math.round(records.reduce((a, b) => a + b, 0) / records.length) : 0;
    const text = result 
      ? t('shareMessages.line', { record: avg, type: resultTitle })
      : t('shareMessages.startLine');
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`, '_blank');
  };
  
  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const resultTitle = result 
      ? (result.title[locale as keyof typeof result.title] || result.title.ko)
      : title;
    const avg = records.length > 0 ? Math.round(records.reduce((a, b) => a + b, 0) / records.length) : 0;
    const text = result 
      ? t('shareMessages.whatsapp', { record: avg, type: resultTitle })
      : t('shareMessages.startWhatsapp');
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + window.location.href)}`, '_blank');
  };


  // Render Logic
  
  // 1. Loading Screen
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

  // 2. Result Popup
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {tGlobal('mbti.testCompleted')}</h2>
          <div className="mb-6 flex justify-center">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto w-full"
            />
          </div>
          <button onClick={handleShowResult} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-blue-600 hover:to-cyan-600 shadow-lg transition-all">
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  // 3. Result Screen
  if (showResult && result) {
      const dataLocale = locale === 'zh-CN' ? 'zh' : locale; // Fallback for zh-CN
      const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
      const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
      const resultAdvice = result.advice[dataLocale as keyof typeof result.advice] || result.advice.ko;
      const resultSurvivalInstinct = result.survivalInstinct[dataLocale as keyof typeof result.survivalInstinct] || result.survivalInstinct.ko;
      
      const averageMs = Math.round(records.reduce((a, b) => a + b, 0) / records.length);

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {tGlobal('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
              <p className="text-4xl font-black text-purple-600 mb-2">{averageMs}ms</p>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {resultDescription}
              </p>
            </div>
            
            <div className="space-y-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  {t('ui.survivalInstinct')}
                </h3>
                <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                  {resultSurvivalInstinct}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  {t('ui.recommendation')}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {resultAdvice.split(/[,、，]/).map((advice, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {advice.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <Share2 size={20} />
                {t('ui.shareResult')}
              </button>
            </div>

            {/* AdSense */}
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
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('mbti.shareResultWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" /></button>
              </div>
            </div>

            {/* Recommendations */}
            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('recommendations.similarTestsTop5')}
                </h2>
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
                          />
                          {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
                          )}
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
            
            {/* Popular Tests */}
            {popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <div className="mb-6 px-4 w-full">
                  <AdSensePlaceholder
                    slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                    style={{ width: '100%', height: '250px' }}
                    className="mx-auto w-full"
                  />
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('recommendations.popularTestsTop5')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {popularTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={test.title}
                            fill
                            className="object-cover"
                          />
                          {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
                          )}
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
      );
  }

  // 4. Game Screen
  if (gameState !== 'intro' && gameState !== 'finished') {
      let bgColor = 'bg-blue-500';
      let text = '';
      let subText = '';

      if (gameState === 'waiting') {
          bgColor = 'bg-red-500';
          text = t('game.wait');
          subText = t('game.waitDesc');
      } else if (gameState === 'ready' && showTooSoon) {
          bgColor = 'bg-blue-500';
          text = t('game.tooSoon');
          subText = t('game.clickToRetry');
      } else if (gameState === 'now') {
          bgColor = 'bg-green-500';
          text = t('game.click');
          subText = '';
      } else if (gameState === 'ready' && !showTooSoon) {
          bgColor = 'bg-blue-500';
          text = `${currentResult}ms`;
          subText = t('game.clickToContinue');
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-start justify-start p-4">
            {/* Game Area - 가로너비 기준 1:1 비율 */}
            <div 
              ref={gameAreaRef}
              onClick={handleScreenClick}
              className={`w-full max-w-lg aspect-square ${bgColor} rounded-2xl shadow-xl p-4 md:p-6 relative mb-8 mx-auto mt-4 cursor-pointer select-none touch-manipulation transition-colors duration-200 flex flex-col items-center justify-center`}
            >
                {/* Round Indicator */}
                <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-10">
                     {Array.from({length: TOTAL_ROUNDS}).map((_, i) => (
                         <div key={i} className={`w-3 h-3 rounded-full ${i < records.length ? 'bg-white' : 'bg-white/30'}`} />
                     ))}
                </div>

                <div className="text-white text-center p-4">
                    {gameState === 'ready' && !showTooSoon && (
                         <div className="text-6xl mb-4">⏱️</div>
                    )}
                    {gameState === 'ready' && showTooSoon && (
                         <div className="text-6xl mb-4">⚠️</div>
                    )}
                    {gameState === 'waiting' && (
                         <div className="text-6xl mb-4">✋</div>
                    )}
                     {gameState === 'now' && (
                         <div className="text-6xl mb-4">⚡</div>
                    )}

                    <h1 className="text-5xl font-black mb-4 uppercase tracking-wider">{text}</h1>
                    <p className="text-xl opacity-90">{subText}</p>
                </div>
            </div>
            
            {/* AdSense below game */}
            <div className="w-full max-w-lg mb-8 mx-auto">
                <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} style={{ width: '100%', height: '100px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
            </div>
            
            {/* Share & Friends (Bottom) */}
            <div className="w-full max-w-lg text-center mx-auto">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  {tGlobal('mbti.shareWithFriends')}
                </h2>
                <div className="flex justify-center gap-2">
                  <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" /></button>
                  <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" /></button>
                  <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" /></button>
                  <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" /></button>
                  <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" /></button>
                  <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" /></button>
                </div>
            </div>
        </div>
      );
  }

  // 5. Intro Screen
  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[680/384] mb-3">
                <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" priority />
                {isLatestTest && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>}
                {badgeType === 'popular' && <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>}
                {badgeType === 'hot' && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>}
            </div>

            <div className="px-4">
                <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
                
                <div className="my-6">
                    <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
                </div>

                <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
                    <p className="font-bold text-gray-800 text-lg">{t('startMessage.line1')}</p>
                    <p>{t('startMessage.line2')}</p>
                    <p className="text-red-500 font-semibold">{t('startMessage.line3')}</p>
                    <p>{t('startMessage.line4')}</p>
                    <p className="text-gray-500 mt-4">{t('startMessage.line5')}</p>
                </div>

                <div className="flex justify-center mb-6">
                    <button onClick={handleStartGame} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse">
                        {tGlobal('mbti.startTest')}
                    </button>
                </div>
                
                <p className="text-sm font-bold text-center mb-6 text-blue-500">
                   {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
                </p>

                {/* Sharing Buttons */}
                <div className="mb-8 text-center">
                    <div className="max-w-[680px] mx-auto mb-4">

                      <div className="flex justify-center">

                        <AdSensePlaceholder
                          slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
                          style={{ width: '100%', height: '250px' }}
                          className="mx-auto w-full"
                        />
                      </div>

                    </div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
                    <div className="flex justify-center gap-2">
                         <button onClick={copyLink} className="w-10 h-10"><Image src="/icons/link.jpeg" alt="link" width={40} height={40} className="rounded-lg" /></button>
                         <button onClick={shareToKakao} className="w-10 h-10"><Image src="/icons/kakao.jpeg" alt="kakao" width={40} height={40} className="rounded-lg" /></button>
                         <button onClick={shareToTelegram} className="w-10 h-10"><Image src="/icons/telegram.jpeg" alt="telegram" width={40} height={40} className="rounded-lg" /></button>
                         <button onClick={shareToWeChat} className="w-10 h-10"><Image src="/icons/wechat.jpeg" alt="wechat" width={40} height={40} className="rounded-lg" /></button>
                         <button onClick={shareToLine} className="w-10 h-10"><Image src="/icons/line.jpeg" alt="line" width={40} height={40} className="rounded-lg" /></button>
                         <button onClick={shareToWhatsApp} className="w-10 h-10"><Image src="/icons/whatsapp.jpeg" alt="whatsapp" width={40} height={40} className="rounded-lg" /></button>
                    </div>
                </div>

                {/* Similar Tests */}
                {similarTestsState.length > 0 && (
                    <div className="mb-8 pb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {similarTestsState.map((test) => (
                                <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                                    <div className="bg-white rounded-lg shadow overflow-hidden">
                                        <div className="relative aspect-video">
                                            <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                                            {latestTestSlugs.includes(test.slug) && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>}
                                            {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>}
                                            {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>}
                                        </div>
                                        <div className="p-3">
                                            <h3 className="font-semibold text-gray-800 line-clamp-1">{test.title}</h3>
                                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1"><Play size={12} /> {formatPlayCount(test.playCount, locale as Locale)}</div>
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

