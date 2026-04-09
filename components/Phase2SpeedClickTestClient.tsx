'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import CoupangAffiliateIframe from '@/components/CoupangAffiliateIframe';
import { Play, Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests, getLeaderboardTop10, submitLeaderboardScore } from '@/lib/supabase';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { 
  Phase2SpeedClickResult, 
  calculatePhase2SpeedClickResult,
  generateGrid,
  formatTime
} from '@/lib/phase2SpeedClickData';

interface Phase2SpeedClickTestClientProps {
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

interface LeaderboardEntry {
  id: string;
  test_slug: string;
  player_name: string;
  level: number;
  score: number;
  created_at: string;
}

export default function Phase2SpeedClickTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2SpeedClickTestClientProps) {
  const t = useTranslations('phase2SpeedClickTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [started, setStarted] = useState(false);
  const [grid, setGrid] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1); // 다음에 클릭해야 할 숫자 (1~25)
  const [clickedNumbers, setClickedNumbers] = useState<Set<number>>(new Set()); // 이미 클릭한 숫자들
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2SpeedClickResult | null>(null);
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState('');
  
  // Leaderboard
  const [leaderboardTop10, setLeaderboardTop10] = useState<LeaderboardEntry[]>([]);
  
  // Others
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load Leaderboard Top 10
  const loadLeaderboard = useCallback(async () => {
    try {
      const top10 = await getLeaderboardTop10(slug);
      setLeaderboardTop10(top10);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    }
  }, [slug]);

  // Start Game
  const handleStartGame = async () => {
    // Generate new grid
    const newGrid = generateGrid();
    setGrid(newGrid);
    setCurrentNumber(1);
    setClickedNumbers(new Set());
    setStartTime(0);
    setEndTime(0);
    setElapsedTime(0);
    setShowResult(false);
    setShowResultPopup(false);
    setShowNameInput(false);
    setResult(null);
    setPlayerName('');
    
    // Load leaderboard
    await loadLeaderboard();
    
    setStarted(true);
    window.scrollTo(0, 0);
    
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setDisplayPlayCount(prev => prev + 1);
      setHasIncrementedPlayCount(true);
    }
    
    if (typeof window !== 'undefined') {
      setTimeout(safeLoadAdSense, 100);
    }
    
    // Start timer when first number is clicked
    // Timer will start on first click
  };

  // Handle cell click
  const handleCellClick = (number: number) => {
    if (!started) return;
    
    // Start timer on first click
    if (startTime === 0) {
      const now = performance.now() / 1000; // Convert to seconds
      setStartTime(now);
      
      // Start timer interval
      timerIntervalRef.current = setInterval(() => {
        setElapsedTime(prev => {
          const current = performance.now() / 1000;
          return current - now;
        });
      }, 10); // Update every 10ms for smooth display
    }
    
    // Check if correct number
    if (number === currentNumber && !clickedNumbers.has(number)) {
      // Correct!
      const newClicked = new Set(clickedNumbers);
      newClicked.add(number);
      setClickedNumbers(newClicked);
      
      // Move to next number
      if (currentNumber < 25) {
        setCurrentNumber(currentNumber + 1);
      } else {
        // Game complete! (clicked 25)
        const end = performance.now() / 1000;
        setEndTime(end);
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }
        finishGame(end - startTime);
      }
    }
    // Wrong number: no action (just time passes)
  };

  // Finish game
  const finishGame = (finalTime: number) => {
    setElapsedTime(finalTime);
    const finalResult = calculatePhase2SpeedClickResult(finalTime);
    setResult(finalResult);
    
    // Check if score qualifies for leaderboard (lower time is better)
    // Score is stored as time * 100 as integer (lower is better)
    const finalTimeAsInt = Math.round(finalTime * 100);
    const qualifies = leaderboardTop10.length < 10 || 
      finalTimeAsInt < (leaderboardTop10[leaderboardTop10.length - 1]?.score || 99900);
      
    if (qualifies) {
      setShowNameInput(true);
    } else {
      showResultAfterDelay();
    }
  };

  const showResultAfterDelay = () => {
    setShowLoadingSpinner(true);
    if (locale !== 'ko') {
      searchAliExpressProducts('reaction speed games', 4, locale).then(setAliProducts).catch(console.error);
    } else {
      searchAliExpressProducts('trending', 4, locale).then(setAliProducts).catch(console.error);
    }
    
    setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 3000);
  };

  // Submit name and score
  const handleSubmitName = async () => {
    if (!playerName.trim()) {
      alert(t('alerts.nameRequired'));
      return;
    }
    
    // Use elapsedTime from state (set in finishGame) as it's the most accurate
    const finalTime = elapsedTime;
    // Convert time to integer (multiply by 100 to preserve 2 decimal places)
    // Example: 12.34 seconds -> 1234
    const scoreAsInt = Math.round(finalTime * 100);
    
    console.log('[Phase2SpeedClickTest] Submitting score:', {
      slug,
      playerName: playerName.trim(),
      finalTime,
      scoreAsInt,
      elapsedTime
    });
    
    const submitResult = await submitLeaderboardScore(
      slug,
      playerName.trim(),
      1, // level (not used for this test)
      scoreAsInt // score = time * 100 as integer (lower is better)
    );
    
    console.log('[Phase2SpeedClickTest] Submit result:', submitResult);
    
    if (submitResult.success) {
      // Reload leaderboard
      await loadLeaderboard();
    } else {
      console.error('[Phase2SpeedClickTest] Failed to submit score:', submitResult);
    }
    
    setShowNameInput(false);
    showResultAfterDelay();
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  // Retake
  const handleRetake = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    setStarted(false);
    setShowResult(false);
    setShowResultPopup(false);
    setShowNameInput(false);
    setResult(null);
    setGrid([]);
    setCurrentNumber(1);
    setClickedNumbers(new Set());
    setStartTime(0);
    setEndTime(0);
    setElapsedTime(0);
    setPlayerName('');
    window.scrollTo(0, 0);
  };

  const handleShowResult = async () => {
    setShowResultPopup(false);
    setShowResult(true);
    // Reload leaderboard when showing result
    await loadLeaderboard();
    window.scrollTo(0, 0);
  };

  // Load leaderboard when result screen is shown
  useEffect(() => {
    if (showResult) {
      loadLeaderboard();
    }
  }, [showResult, loadLeaderboard]);

  // Load Latest/Popular Tests
  useEffect(() => {
    const loadTests = async () => {
      try {
        const allTests = await getTests();
        
        // Latest Slugs for Badges
        const slugs = allTests.slice(0, 15).map((t: any) => t.slug).filter(Boolean);
        setLatestTestSlugs(slugs);

        // Similar Tests Logic
        const currentTest = allTests.find((t: any) => t.slug === slug);
        const currentTestTags = currentTest && typeof currentTest.tags === 'object' 
          ? (Array.isArray(currentTest.tags) ? currentTest.tags : (currentTest.tags[locale] || currentTest.tags.ko || []))
          : [];

        // Fallback tags if test not found
        const fallbackTags: Record<string, string[]> = {
          ko: ['챌린지', '게임', '순발력', '동체시력'],
          en: ['Challenge', 'Game', 'Reflex', 'Dynamic Vision'],
          ja: ['チャレンジ', 'ゲーム', '反射神経', '動体視力'],
          'zh-CN': ['挑战', '游戏', '反应速度', '动态视力'],
          'zh-TW': ['挑戰', '遊戲', '反應速度', '動態視力'],
          vi: ['Thử thách', 'Trò chơi', 'Phản xạ', 'Thị lực động'],
          id: ['Tantangan', 'Game', 'Refleks', 'Penglihatan Dinamis']
        };
        const tagsToUse = currentTestTags.length > 0 ? currentTestTags : (fallbackTags[locale] || fallbackTags.ko);

        const similarTestsList = allTests
          .filter((t: any) => t.slug !== slug)
          .filter((t: any) => {
             const otherTestTags = typeof t.tags === 'object' 
              ? (Array.isArray(t.tags) ? t.tags : (t.tags[locale] || t.tags.ko || []))
              : [];
             return Array.isArray(tagsToUse) && Array.isArray(otherTestTags) &&
                    tagsToUse.some((tag: string) => otherTestTags.includes(tag));
          })
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5)
          .map((t: any) => ({
            id: t.id,
            slug: t.slug,
            title: t.title[locale] || t.title.ko,
            thumbnail: t.thumbnail,
            playCount: t.play_count,
            badgeType: t.badge_type || null
          }));
          
        const similarTestSlugs = new Set(similarTestsList.map((t: any) => t.slug));
        
        const popularTestsList = allTests
          .filter((t: any) => t.slug !== slug && !similarTestSlugs.has(t.slug))
          .sort((a: any, b: any) => b.play_count - a.play_count)
          .slice(0, 5)
          .map((t: any) => ({
            id: t.id,
            slug: t.slug,
            title: t.title[locale] || t.title.ko,
            thumbnail: t.thumbnail,
            playCount: t.play_count,
            badgeType: t.badge_type || null
          }));

        setSimilarTestsState(similarTestsList);
        setPopularTestsState(popularTestsList);
      } catch (error) {
        console.error('Error loading tests:', error);
      }
    };
    loadTests();
    
    // Initial Ali Products
    if (locale !== 'ko') {
      searchAliExpressProducts('trending gadgets', 4, locale).then(setAliProducts).catch(console.error);
    }
  }, [slug, locale]);

  // Social Sharing
  const getShareText = () => {
    if (result) {
      const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
      const finalTime = endTime > startTime ? endTime - startTime : elapsedTime;
      return t('shareMessages.default', { type: resultTitle, time: formatTime(finalTime) });
    }
    return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const finalTime = endTime > startTime ? endTime - startTime : elapsedTime;
    const shareText = result ? t('shareMessages.default', { type: resultTitle, time: formatTime(finalTime) }) : t('shareMessages.startDefault');
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
    const finalTime = endTime > startTime ? endTime - startTime : elapsedTime;
    const description = result ? t('shareMessages.kakao', { type: resultTitle, time: formatTime(finalTime) }) : t('shareMessages.startKakao');
    
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

  // --- RENDERING ---

  // 1. Name Input Popup
  if (showNameInput) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 {t('ui.newRecord')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('ui.enterName')}
          </p>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value.substring(0, 20))}
            placeholder={t('ui.namePlaceholder')}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg mb-6 focus:outline-none focus:border-purple-500"
            maxLength={20}
            autoFocus
            onKeyPress={(e) => e.key === 'Enter' && handleSubmitName()}
          />
          <button
            onClick={handleSubmitName}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            {t('ui.submit')}
          </button>
        </div>
      </div>
    );
  }

  // 2. Loading Spinner
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

  // 3. Result Popup
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 {tGlobal('mbti.testCompleted')}
          </h2>
          
          <p className="text-xs text-gray-500 text-center mb-3">
            {tGlobal('footer.disclaimer')}
          </p>
          <div className="mb-6">

            <div className="flex justify-center">

              <CoupangAffiliateIframe variant="popup" />

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

  // 4. Result Screen
  if (showResult && result) {
    const dataLocale = locale === 'zh-CN' ? 'zh-CN' : (locale === 'zh-TW' ? 'zh-TW' : locale);
    const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
    const resultPercentile = result.percentile[dataLocale as keyof typeof result.percentile] || result.percentile.ko;
    const resultRecommendation = result.recommendation[dataLocale as keyof typeof result.recommendation] || result.recommendation.ko;
    const finalTime = endTime > startTime ? endTime - startTime : elapsedTime;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {tGlobal('mbti.yourResult')}
            </h2>
            <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              {resultTitle}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
              {resultDescription}
            </p>
          </div>
          
          <div className="space-y-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                ⏱️ {t('ui.clearTime')}
              </h3>
              <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                {formatTime(finalTime)} {t('ui.seconds')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                📊 {t('ui.percentile')}
              </h3>
              <p className="text-base text-gray-700 text-center">
                {resultPercentile}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                ⭐ {t('ui.recommendation')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {resultRecommendation.split(/[,、，]/).map((rec, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {rec.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* World Best Top 10 */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-4 text-left">
              🌍 {t('ui.worldBestTop10')}
            </h3>
            {leaderboardTop10.length > 0 ? (
              <div className="space-y-2">
                {leaderboardTop10.map((entry, index) => (
                  <div key={entry.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${index < 3 ? 'text-yellow-500' : 'text-gray-600'}`}>
                        #{index + 1}
                      </span>
                      <span className="text-gray-800 font-medium">{entry.player_name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-600">{formatTime(entry.score / 100)} {t('ui.seconds')}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {t('ui.noRecordsYet')}
              </div>
            )}
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
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.new')}</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.popular')}</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.hot')}</div>
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
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.new')}</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.popular')}</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.hot')}</div>
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

  // 5. Game Screen
  if (started) {
    const displayTime = startTime > 0 ? elapsedTime : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 md:p-8 relative mb-8">
          {/* Timer */}
          <div className="text-center mb-6">
            <div className="text-4xl font-black text-purple-600 mb-2">
              {formatTime(displayTime)}
            </div>
            <div className="text-sm text-gray-500">{t('ui.currentTime')}</div>
          </div>

          {/* Current Target */}
          <div className="text-center mb-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg py-3">
            <div className="text-sm text-gray-600 mb-1">{t('ui.findNumber')}</div>
            <div className="text-5xl font-black text-purple-600">{currentNumber}</div>
          </div>

          {/* 5x5 Grid */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {grid.map((number, index) => {
              const isClicked = clickedNumbers.has(number);
              const isCurrent = number === currentNumber;
              const isPast = number < currentNumber;
              
              return (
                <button
                  key={index}
                  onClick={() => handleCellClick(number)}
                  disabled={isClicked}
                  className={`
                    aspect-square rounded-lg font-bold text-xl md:text-2xl
                    transition-all duration-200
                    ${isClicked 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50' 
                      : isCurrent
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105 animate-pulse'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:scale-105'
                    }
                  `}
                >
                  {isClicked ? '✓' : number}
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <div className="text-center text-sm text-gray-600">
            {t('ui.progress')}: {clickedNumbers.size} / 25
          </div>
        </div>
        
        {/* AdSense below game */}
        <div className="w-full max-w-lg mb-8">
          <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} style={{ width: '100%', height: '100px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
        </div>
        
        {/* Share & Friends (Bottom) */}
        <div className="w-full max-w-lg text-center">
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

  // 6. Intro Screen (Default)
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Thumbnail */}
        <div className="relative w-full aspect-[680/384] mb-3">
          <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" priority />
          {isLatestTest && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.new')}</div>}
          {badgeType === 'popular' && <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.popular')}</div>}
          {badgeType === 'hot' && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{tGlobal('badges.hot')}</div>}
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
            <p>{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="text-purple-600 font-semibold">{t('startMessage.line5')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line6')}</p>
          </div>

          <div className="flex justify-center mb-6">
            <button onClick={handleStartGame} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse">
              {t('ui.startTest')}
            </button>
          </div>
          
          <p className="text-sm font-bold text-center mb-6 text-blue-500">
            {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
          </p>

          {/* Sharing Buttons */}
          <div className="mb-8 text-center">
            <div className="max-w-[680px] mx-auto mb-4">

              <div className="flex justify-center">

                <CoupangAffiliateIframe variant="start" />

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


