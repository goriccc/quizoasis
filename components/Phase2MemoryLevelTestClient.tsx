'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests, getLeaderboardTop10, submitLeaderboardScore } from '@/lib/supabase';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { 
  Phase2MemoryLevelResult, 
  calculatePhase2MemoryLevelResult,
  generateNumber,
  getDisplayTime
} from '@/lib/phase2MemoryLevelData';

interface Phase2MemoryLevelTestClientProps {
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

export default function Phase2MemoryLevelTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2MemoryLevelTestClientProps) {
  const t = useTranslations('phase2MemoryLevelTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(1); // Lv.1 starts with 4 digits
  const [currentNumber, setCurrentNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [lives, setLives] = useState(2); // 2 chances
  const [maxDigits, setMaxDigits] = useState(0); // 최대 성공 자릿수
  const [showNumber, setShowNumber] = useState(false);
  const [showInput, setShowInput] = useState(false);
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2MemoryLevelResult | null>(null);
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
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Calculate current level digits
  const getLevelDigits = (currentLevel: number): number => {
    // Lv.1 = 4 digits, Lv.2 = 5 digits, ..., Lv.12 = 15 digits, etc.
    return currentLevel + 3;
  };

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
    setStarted(true);
    setLevel(1);
    setLives(2);
    setMaxDigits(0);
    setShowResult(false);
    setShowResultPopup(false);
    setShowNameInput(false);
    setResult(null);
    setUserInput('');
    setPlayerName('');
    
    // Load leaderboard
    await loadLeaderboard();
    
    window.scrollTo(0, 0);
    
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setDisplayPlayCount(prev => prev + 1);
      setHasIncrementedPlayCount(true);
    }
    
    if (typeof window !== 'undefined') {
      setTimeout(safeLoadAdSense, 100);
    }
    
    // Start first level
    startLevel();
  };

  // Start a level
  const startLevel = () => {
    const digits = getLevelDigits(level);
    const number = generateNumber(digits);
    setCurrentNumber(number);
    setShowNumber(true);
    setShowInput(false);
    setUserInput('');
    
    // Hide number after display time
    const displayTime = getDisplayTime(digits);
    setTimeout(() => {
      setShowNumber(false);
      setShowInput(true);
      // Focus input after a short delay
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }, displayTime);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    setUserInput(value);
  };

  // Submit answer
  const handleSubmit = () => {
    if (!userInput) return;
    
    if (userInput === currentNumber) {
      // Correct!
      const digits = getLevelDigits(level);
      if (digits > maxDigits) {
        setMaxDigits(digits);
      }
      
      // Next level
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setUserInput('');
      startLevel();
    } else {
      // Wrong!
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives <= 0) {
        // Game Over
        finishGame();
      } else {
        // Retry same level
        setUserInput('');
        startLevel();
      }
    }
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Finish game
  const finishGame = () => {
    setShowInput(false);
    const finalResult = calculatePhase2MemoryLevelResult(maxDigits);
    setResult(finalResult);
    
    // Check if score qualifies for leaderboard
    if (maxDigits > 0) {
      // Compare with current Top 10
      const qualifies = leaderboardTop10.length < 10 || 
        maxDigits > (leaderboardTop10[leaderboardTop10.length - 1]?.score || 0);
      
      if (qualifies) {
        setShowNameInput(true);
      } else {
        showResultAfterDelay();
      }
    } else {
      showResultAfterDelay();
    }
  };

  const showResultAfterDelay = () => {
    setShowLoadingSpinner(true);
    if (locale !== 'ko') {
      searchAliExpressProducts('memory games brain training', 4, locale).then(setAliProducts).catch(console.error);
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
    
    const submitResult = await submitLeaderboardScore(
      slug,
      playerName.trim(),
      level - 1, // Last successful level
      maxDigits // Score = max digits
    );
    
    if (submitResult.success) {
      // Reload leaderboard
      await loadLeaderboard();
    }
    
    setShowNameInput(false);
    showResultAfterDelay();
  };

  // Retake
  const handleRetake = () => {
    setStarted(false);
    setShowResult(false);
    setShowResultPopup(false);
    setShowNameInput(false);
    setResult(null);
    setLevel(1);
    setLives(2);
    setMaxDigits(0);
    setUserInput('');
    setPlayerName('');
    window.scrollTo(0, 0);
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

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
          ko: ['챌린지', '게임', '두뇌', 'IQ'],
          en: ['Challenge', 'Game', 'Brain', 'IQ'],
          ja: ['チャレンジ', 'ゲーム', '脳', 'IQ'],
          'zh-CN': ['挑战', '游戏', '大脑', 'IQ'],
          'zh-TW': ['挑戰', '遊戲', '大腦', 'IQ'],
          vi: ['Thử thách', 'Trò chơi', 'Não', 'IQ'],
          id: ['Tantangan', 'Game', 'Otak', 'IQ']
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
      return t('shareMessages.default', { type: resultTitle, digits: maxDigits });
    }
    return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result ? t('shareMessages.default', { type: resultTitle, digits: maxDigits }) : t('shareMessages.startDefault');
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
    const description = result ? t('shareMessages.kakao', { type: resultTitle, digits: maxDigits }) : t('shareMessages.startKakao');
    
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
              <a 
                href="https://s.click.aliexpress.com/e/_c3G3nkEv?bz=300*250" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  width={300} 
                  height={250} 
                  src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                  alt="AliExpress"
                  className="rounded-lg"
                  style={{ maxWidth: '300px', height: 'auto' }}
                />
              </a>
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
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
    const resultMemoryCapacity = result.memoryCapacity[dataLocale as keyof typeof result.memoryCapacity] || result.memoryCapacity.ko;
    const resultRecommendation = result.recommendation[dataLocale as keyof typeof result.recommendation] || result.recommendation.ko;

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
                🔢 {t('ui.maxDigits')}
              </h3>
              <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                {maxDigits} {t('ui.digits')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                🧠 {t('ui.memoryCapacity')}
              </h3>
              <p className="text-base text-gray-700 text-center">
                {resultMemoryCapacity}
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
          {leaderboardTop10.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-4 text-left">
                🌍 {t('ui.worldBestTop10')}
              </h3>
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
                      <div className="text-sm font-bold text-purple-600">{entry.score} {t('ui.digits')}</div>
                      <div className="text-xs text-gray-500">{t('ui.levelShort')} {entry.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
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
    const currentDigits = getLevelDigits(level);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 md:p-8 relative mb-8">
          {/* Header Info */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center bg-gray-100 rounded-lg px-4 py-2">
              <span className="text-gray-500 text-xs font-bold">{t('ui.level')}</span>
              <span className="text-2xl font-black text-gray-800">{level}</span>
            </div>
            
            <div className="flex flex-col items-center bg-red-100 rounded-lg px-4 py-2">
              <span className="text-gray-500 text-xs font-bold">{t('ui.lives')}</span>
              <span className="text-2xl font-black text-red-600">{lives}</span>
            </div>
            
            <div className="flex flex-col items-center bg-purple-100 rounded-lg px-4 py-2">
              <span className="text-gray-500 text-xs font-bold">{t('ui.max')}</span>
              <span className="text-2xl font-black text-purple-600">{maxDigits || '-'}</span>
            </div>
          </div>

          {/* Number Display */}
          {showNumber && (
            <div className="w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-12 mb-6 text-center">
              <div className="text-7xl md:text-8xl font-black text-white tracking-wider">
                {currentNumber}
              </div>
            </div>
          )}

          {/* Input Area */}
          {showInput && (
            <div className="w-full">
              <p className="text-gray-600 text-center mb-4 text-lg font-medium">
                {t('ui.rememberNumber')}
              </p>
              <div className="flex flex-col gap-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder={t('ui.inputPlaceholder', { digits: currentDigits })}
                  className="w-full px-6 py-4 text-3xl font-bold text-center border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                  maxLength={currentDigits}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!userInput || userInput.length !== currentDigits}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {t('ui.submit')}
                </button>
              </div>
            </div>
          )}
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
            <p className="text-red-500 font-semibold">{t('startMessage.line4')}</p>
            <p>{t('startMessage.line5')}</p>
            <p className="text-purple-600 font-semibold">{t('startMessage.line6')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line7')}</p>
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
                <a
                  href="https://s.click.aliexpress.com/e/_c3G3nkEv?bz=300*250"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                >
                  <Image
                    width={300}
                    height={250}
                    src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                    alt="AliExpress"
                    className="rounded-lg"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                </a>
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

