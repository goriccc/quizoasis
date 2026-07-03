'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount , prefetchStorageImages, extractImageFilenamesFromQuestions} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { Phase2ColorSurvivalResult, calculatePhase2ColorSurvivalResult, PHASE2_COLOR_SURVIVAL_RESULTS } from '@/lib/phase2ColorSurvivalData';

interface Phase2ColorSurvivalTestClientProps {
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
const INITIAL_TIME = 10.0;
const MAX_TIME_CAP = 30.0;
const PENALTY_TIME = 3.0;
const TIMER_INTERVAL = 50; // ms

export default function Phase2ColorSurvivalTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2ColorSurvivalTestClientProps) {
  const t = useTranslations('phase2ColorSurvivalTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  
  // Grid State
  const [gridSize, setGridSize] = useState(2);
  const [targetIndex, setTargetIndex] = useState(0);
  const [baseColor, setBaseColor] = useState({ h: 0, s: 0, l: 0 });
  const [diffColor, setDiffColor] = useState({ h: 0, s: 0, l: 0 });
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2ColorSurvivalResult | null>(null);
  
  // Others
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [aliProducts, setAliProducts] = useState<any[]>([]);

  // Generate Colors and Grid based on Level
  const generateLevelData = useCallback((currentLevel: number) => {
    let newGridSize = 2;
    if (currentLevel <= 2) newGridSize = 2;
    else if (currentLevel <= 5) newGridSize = 3;
    else if (currentLevel <= 10) newGridSize = 4;
    else if (currentLevel <= 18) newGridSize = 5;
    else if (currentLevel <= 28) newGridSize = 6;
    else if (currentLevel <= 40) newGridSize = 7;
    else newGridSize = 8; 

    const maxDiff = 15;
    const minDiff = 1.5;
    let diff = Math.max(minDiff, maxDiff - (currentLevel * 0.3));
    
    if (currentLevel > 40) diff = 1.0;

    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 40) + 60; 
    const l = Math.floor(Math.random() * 40) + 30; 

    const lighter = Math.random() > 0.5;
    const lDiff = lighter ? l + diff : l - diff;
    
    setGridSize(newGridSize);
    setBaseColor({ h, s, l });
    setDiffColor({ h, s, l: lDiff });
    setTargetIndex(Math.floor(Math.random() * (newGridSize * newGridSize)));
  }, []);

  // Timer Logic (setInterval based)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - (TIMER_INTERVAL / 1000);
          if (newTime <= 0) {
            setIsPlaying(false);
            setIsGameOver(true);
            return 0;
          }
          return newTime;
        });
      }, TIMER_INTERVAL);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Handle Game Over -> Loading -> Popup -> Result
  useEffect(() => {
    if (isGameOver && !result) {
      // 1. Calculate Result
      const finalResult = calculatePhase2ColorSurvivalResult(level);
      setResult(finalResult);
      
      // 2. Start Loading Sequence
      setShowLoadingSpinner(true);
      
      // Load products for result
      if (locale !== 'ko') {
          const keywords = ['gaming monitors', 'eye care supplements', 'color calibration tools'];
          const keyword = keywords[Math.floor(Math.random() * keywords.length)];
          searchAliExpressProducts(keyword, 4, locale).then(setAliProducts).catch(console.error);
      } else {
           searchAliExpressProducts('trending', 4, locale).then(setAliProducts).catch(console.error);
      }
    }
  }, [isGameOver, level, result, locale]);

  // Loading Timer -> Popup
  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  // Start Game
  const handleStartGame = () => {
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));

    setStarted(true);
    setIsPlaying(true);
    setIsGameOver(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setShowResult(false);
    setLevel(1);
    setScore(0);
    setTimeLeft(INITIAL_TIME);
    setResult(null);
    generateLevelData(1);
    
    // 즉시 맨 위로 스크롤
    window.scrollTo(0, 0);
    
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setDisplayPlayCount(prev => prev + 1);
      setHasIncrementedPlayCount(true);
    }
    
    if (typeof window !== 'undefined') {
        setTimeout(safeLoadAdSense, 100);
    }
  };

  // Cell Click Handler
  const handleCellClick = (index: number) => {
    if (!isPlaying) return;

    if (index === targetIndex) {
      // Correct!
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setScore(prev => prev + 100); 
      
      let bonus = 0;
      if (level <= 10) bonus = 3.0;
      else if (level <= 25) bonus = 2.0;
      else if (level <= 40) bonus = 1.0;
      else bonus = 1.0;

      setTimeLeft(prev => Math.min(MAX_TIME_CAP, prev + bonus));
      generateLevelData(nextLevel);
    } else {
      // Wrong!
      setTimeLeft(prev => Math.max(0, prev - PENALTY_TIME));
      
      const container = document.getElementById('game-grid');
      if (container) {
          container.classList.add('animate-shake');
          setTimeout(() => container.classList.remove('animate-shake'), 300);
      }
    }
  };
  
  // Retake
  const handleRetake = () => {
      setStarted(false);
      setIsPlaying(false);
      setIsGameOver(false);
      setShowResult(false);
      setShowResultPopup(false);
      setResult(null);
      setLevel(1);
      setTimeLeft(INITIAL_TIME);
      window.scrollTo(0, 0);
  };
  
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };
// Social Sharing
  const getShareText = () => {
      if (result) {
          const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
          return t('shareMessages.default', { type: resultTitle });
      }
      return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result ? t('shareMessages.default', { type: resultTitle }) : t('shareMessages.startDefault');
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const fullText = `${shareText}\n\n${url}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: url
        });
      } catch (error) {
        // User cancelled or share failed
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined' || !window.Kakao || !window.Kakao.isInitialized()) {
        alert(t('alerts.kakaoInit'));
        return;
    }
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const description = result ? t('shareMessages.kakao', { type: resultTitle }) : t('shareMessages.startKakao');
    
    window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: title,
            description: description,
            imageUrl: getThumbnailUrl(thumbnail || ''),
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }]
    });
  };

  // Other share functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareToTelegram = () => window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(getShareText())}`, '_blank');
  const shareToWeChat = () => { alert(t('alerts.wechatCopy')); copyLink(); };
  const shareToLine = () => window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(getShareText())}`, '_blank');
  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}%0A%0A${encodeURIComponent(shareUrl)}`, '_blank');

  // Render Grid
  const renderGrid = () => {
    const cells = [];
    const totalCells = gridSize * gridSize;
    
    for (let i = 0; i < totalCells; i++) {
        const isTarget = i === targetIndex;
        const color = isTarget ? diffColor : baseColor;
        const style = {
            backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
        };
        
        cells.push(
            <button
                key={i}
                onClick={() => handleCellClick(i)}
                className="w-full h-full rounded-md shadow-sm transition-transform active:scale-95 duration-75 border border-white/20"
                style={style}
                aria-label={isTarget ? "Target Color" : "Base Color"}
            />
        );
    }
    return cells;
  };

  // --- RENDERING ---

  // 1. Loading Spinner
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

  // 3. Result Screen
  if (showResult && result) {
      // Locale mapping: zh-CN -> zh
      const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
      const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
      const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
      const resultAdvice = result.advice[dataLocale as keyof typeof result.advice] || result.advice.ko;
      const resultSurvivalInstinct = result.survivalInstinct[dataLocale as keyof typeof result.survivalInstinct] || result.survivalInstinct.ko;

      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {tGlobal('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                Level {level} - {resultTitle}
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
                  {popularTestsState.map((test) => (
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
  if (started) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-start justify-start p-4">
            <div id="game-grid" className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 md:p-6 relative mb-8 mx-auto mt-4">
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg px-4 py-2">
                        <span className="text-gray-500 text-xs font-bold">LEVEL</span>
                        <span className="text-2xl font-black text-gray-800">{level}</span>
                    </div>
                    
                    {/* Timer Bar */}
                    <div className="flex-1 mx-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-1 font-bold">
                            <span>TIME</span>
                            <span className={`${timeLeft < 3 ? 'text-red-500 animate-pulse' : 'text-gray-700'}`}>{timeLeft.toFixed(2)}s</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                            <div 
                                className={`h-full rounded-full transition-all duration-100 ease-linear ${timeLeft < 3 ? 'bg-red-500' : 'bg-green-500'}`}
                                style={{ width: `${Math.min(100, (timeLeft / MAX_TIME_CAP) * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Game Grid */}
                <div className="w-full aspect-square bg-gray-100 rounded-xl p-2 gap-2 grid shadow-inner border border-gray-200"
                    style={{ 
                        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`
                    }}
                >
                    {renderGrid()}
                </div>

                <p className="text-gray-500 text-center mt-6 text-sm font-medium">
                    {t('ui.gameInstruction')}
                </p>
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
                <div className="flex justify-center items-center gap-2">
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

  // 5. Intro Screen (Default)
  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
            {/* Thumbnail */}
            <div className="relative w-full aspect-[680/384] mb-3">
                <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" priority />
                {isLatestTest && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>}
                {badgeType === 'popular' && <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>}
                {badgeType === 'hot' && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>}
            </div>

            <div className="px-4">
                <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
                
                {/* AdSense */}
                <div className="my-6">
                    <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
                </div>

                {/* Intro Text */}
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
