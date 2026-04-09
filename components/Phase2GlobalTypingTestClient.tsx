'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import CoupangAffiliateIframe from '@/components/CoupangAffiliateIframe';
import { Play, Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { 
  Phase2GlobalTypingResult, 
  calculatePhase2GlobalTypingResult, 
  PHASE2_GLOBAL_TYPING_ROUNDS,
  countCharacters 
} from '@/lib/phase2GlobalTypingData';

interface Phase2GlobalTypingTestClientProps {
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

interface RoundResult {
  round: number;
  sentence: string;
  userInput: string;
  startTime: number;
  endTime: number;
  timeSeconds: number;
  characterCount: number;
  cpm: number;
  errorCount: number;
}

export default function Phase2GlobalTypingTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2GlobalTypingTestClientProps) {
  const t = useTranslations('phase2GlobalTypingTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [started, setStarted] = useState(false);
  const [currentRound, setCurrentRound] = useState(0); // 0-4 (5 rounds)
  const [userInput, setUserInput] = useState('');
  const [roundResults, setRoundResults] = useState<RoundResult[]>([]);
  const [roundStartTime, setRoundStartTime] = useState<number | null>(null);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2GlobalTypingResult | null>(null);
  const [averageCPM, setAverageCPM] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  
  // Others
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Get current round sentence
  const getCurrentSentence = (): string => {
    if (currentRound < 0 || currentRound >= PHASE2_GLOBAL_TYPING_ROUNDS.length) return '';
    const roundData = PHASE2_GLOBAL_TYPING_ROUNDS[currentRound];
    // Data uses 'zh' for simplified Chinese, 'zh-TW' for traditional
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale === 'zh-TW' ? 'zh-TW' : locale;
    return roundData.sentence[dataLocale as keyof typeof roundData.sentence] || roundData.sentence.ko;
  };

  // Start new round
  const startRound = useCallback(() => {
    setUserInput('');
    setIsRoundComplete(false);
    setRoundStartTime(Date.now());
    // Focus input after a short delay
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setUserInput(newInput);
    
    const currentSentence = getCurrentSentence();
    
    // Check if round is complete
    if (newInput === currentSentence) {
      completeRound();
    }
  };

  // Complete current round
  const completeRound = () => {
    if (!roundStartTime) return;
    
    const currentSentence = getCurrentSentence();
    const endTime = Date.now();
    const timeSeconds = (endTime - roundStartTime) / 1000;
    // For character counting, zh-CN should be treated as zh (CJK)
    const countLocale = locale === 'zh-CN' ? 'zh' : locale;
    const characterCount = countCharacters(currentSentence, countLocale);
    const cpm = timeSeconds > 0 ? Math.round((characterCount / timeSeconds) * 60) : 0;
    
    // Debug logging for character count
    console.log(`📊 Round ${currentRound + 1} - Character count:`, {
      sentence: currentSentence.substring(0, 20) + '...',
      locale,
      countLocale,
      characterCount,
      textLength: currentSentence.length,
      timeSeconds: timeSeconds.toFixed(2),
      cpm
    });
    
    // Calculate error count (simple comparison)
    let errorCount = 0;
    const minLength = Math.min(userInput.length, currentSentence.length);
    for (let i = 0; i < minLength; i++) {
      if (userInput[i] !== currentSentence[i]) {
        errorCount++;
      }
    }
    errorCount += Math.abs(userInput.length - currentSentence.length);
    
    const roundResult: RoundResult = {
      round: currentRound + 1,
      sentence: currentSentence,
      userInput,
      startTime: roundStartTime,
      endTime,
      timeSeconds,
      characterCount,
      cpm,
      errorCount
    };
    
    const newRoundResults = [...roundResults, roundResult];
    setRoundResults(newRoundResults);
    setIsRoundComplete(true);
    
    // Move to next round after short delay
    setTimeout(() => {
      if (currentRound < PHASE2_GLOBAL_TYPING_ROUNDS.length - 1) {
        setCurrentRound(prev => prev + 1);
      } else {
        // All rounds complete - calculate with all results
        finishTestWithResults(newRoundResults);
      }
    }, 500);
  };

  // Finish test and calculate result
  const finishTestWithResults = (allResults: RoundResult[]) => {
    // Calculate average CPM
    const totalCPM = allResults.reduce((sum, r) => sum + r.cpm, 0);
    const avgCPM = allResults.length > 0 ? Math.round(totalCPM / allResults.length) : 0;
    
    // Apply error penalty (오타 개수 × 5타 차감)
    const totalErrorPenalty = allResults.reduce((sum, r) => sum + r.errorCount, 0) * 5;
    const finalCPM = Math.max(0, avgCPM - totalErrorPenalty);
    
    setAverageCPM(finalCPM);
    setTotalErrors(allResults.reduce((sum, r) => sum + r.errorCount, 0));
    
    // Calculate result
    const finalResult = calculatePhase2GlobalTypingResult(finalCPM, locale);
    setResult(finalResult);
    
    // Start loading sequence
    setShowLoadingSpinner(true);
    
    // Load products for result
    if (locale !== 'ko') {
      const keywords = ['keyboard', 'typing tools', 'gaming accessories'];
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      searchAliExpressProducts(keyword, 4, locale).then(setAliProducts).catch(console.error);
    } else {
      searchAliExpressProducts('trending', 4, locale).then(setAliProducts).catch(console.error);
    }
  };

  // Start new round when currentRound changes
  useEffect(() => {
    if (started && currentRound >= 0 && currentRound < PHASE2_GLOBAL_TYPING_ROUNDS.length) {
      startRound();
    }
  }, [started, currentRound, startRound]);

  // Note: Test completion is handled in completeRound() via finishTestWithResults()

  // Loading Timer -> Popup
  useEffect(() => {
    if (showLoadingSpinner && result) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner, result]);

  // Start Game
  const handleStartGame = () => {
    setStarted(true);
    setCurrentRound(0);
    setUserInput('');
    setRoundResults([]);
    setRoundStartTime(null);
    setIsRoundComplete(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setShowResult(false);
    setResult(null);
    setAverageCPM(0);
    setTotalErrors(0);
    
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

  // Retake
  const handleRetake = () => {
    setStarted(false);
    setCurrentRound(0);
    setUserInput('');
    setRoundResults([]);
    setRoundStartTime(null);
    setIsRoundComplete(false);
    setShowResult(false);
    setShowResultPopup(false);
    setResult(null);
    setAverageCPM(0);
    setTotalErrors(0);
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
        let currentTest = allTests.find((t: any) => t.slug === slug);
        
        // If current test not found in DB, use fallback tags
        let currentTestTags: string[] = [];
        if (currentTest) {
          currentTestTags = typeof currentTest.tags === 'object' 
            ? (Array.isArray(currentTest.tags) ? currentTest.tags : (currentTest.tags[locale] || currentTest.tags.ko || []))
            : [];
        } else {
          // Fallback: Use default tags for phase2_global_typing_test
          // Tags: ['챌린지', '게임'] for ko, ['Challenge', 'Game'] for others
          if (slug === 'phase2_global_typing_test') {
            currentTestTags = locale === 'ko' 
              ? ['챌린지', '게임']
              : locale === 'en' 
                ? ['Challenge', 'Game']
                : locale === 'ja'
                  ? ['チャレンジ', 'ゲーム']
                  : locale === 'zh-CN'
                    ? ['挑战', '游戏']
                    : locale === 'zh-TW'
                      ? ['挑戰', '遊戲']
                      : locale === 'vi'
                        ? ['Thử thách', 'Trò chơi']
                        : ['Tantangan', 'Game'];
          }
        }

        // Debug logging
        console.log('🔍 Phase2GlobalTypingTest - Loading similar tests:', {
          slug,
          currentTestFound: !!currentTest,
          currentTestTags,
          allTestsCount: allTests.length,
          allTestSlugs: allTests.slice(0, 10).map((t: any) => t.slug) // First 10 for debugging
        });

        const similarTestsList = allTests
          .filter((t: any) => t.slug !== slug)
          .filter((t: any) => {
             const otherTestTags = typeof t.tags === 'object' 
              ? (Array.isArray(t.tags) ? t.tags : (t.tags[locale] || t.tags.ko || []))
              : [];
             const hasMatchingTag = Array.isArray(currentTestTags) && Array.isArray(otherTestTags) &&
                    currentTestTags.some((tag: string) => otherTestTags.includes(tag));
             
             if (hasMatchingTag) {
               console.log('✅ Similar test found:', t.slug, 'tags:', otherTestTags);
             }
             
             return hasMatchingTag;
          })
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5)
          .map((t: any) => ({
            id: t.id,
            slug: t.slug,
            title: typeof t.title === 'object' ? (t.title[locale] || t.title.ko) : t.title,
            thumbnail: t.thumbnail,
            playCount: t.play_count,
            badgeType: t.badge_type || null
          }));
          
        console.log('📊 Similar tests list:', similarTestsList.length, similarTestsList.map(t => t.slug));
          
        const similarTestSlugs = new Set(similarTestsList.map((t: any) => t.slug));
        
        const popularTestsList = allTests
          .filter((t: any) => t.slug !== slug && !similarTestSlugs.has(t.slug))
          .sort((a: any, b: any) => b.play_count - a.play_count)
          .slice(0, 5)
          .map((t: any) => ({
            id: t.id,
            slug: t.slug,
            title: typeof t.title === 'object' ? (t.title[locale] || t.title.ko) : t.title,
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
      const dataLocale = locale === 'zh-CN' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
      const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
      return t('shareMessages.default', { 
        language: locale.toUpperCase(), 
        cpm: averageCPM.toString(), 
        type: resultTitle 
      });
    }
    return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const dataLocale = locale === 'zh-CN' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result ? t('shareMessages.default', { 
      language: locale.toUpperCase(), 
      cpm: averageCPM.toString(), 
      type: resultTitle 
    }) : t('shareMessages.startDefault');
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
    const dataLocale = locale === 'zh-CN' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const description = result ? t('shareMessages.kakao', { 
      language: locale.toUpperCase(), 
      cpm: averageCPM.toString(), 
      type: resultTitle 
    }) : t('shareMessages.startKakao');
    
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

  // 3. Result Screen
  if (showResult && result) {
    const dataLocale = locale === 'zh-CN' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
    const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
    const resultCharacteristics = result.characteristics[dataLocale as keyof typeof result.characteristics] || result.characteristics.ko;
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
              <h3 className="text-base font-bold text-gray-800 mb-2">
                ⌨️ {t('ui.averageCPM')}
              </h3>
              <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                {averageCPM} {t('ui.cpm')}
              </p>
              {totalErrors > 0 && (
                <p className="text-sm text-gray-500 text-center mt-2">
                  {t('ui.errorPenalty')}: -{totalErrors * 5} {t('ui.cpm')}
                </p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2">
                📊 {t('ui.characteristics')}
              </h3>
              <p className="text-base text-gray-700 text-center">
                {resultCharacteristics}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2">
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

  // 4. Game Screen (Typing Screen)
  if (started && currentRound >= 0 && currentRound < PHASE2_GLOBAL_TYPING_ROUNDS.length) {
    const currentSentence = getCurrentSentence();
    const progress = ((currentRound + 1) / PHASE2_GLOBAL_TYPING_ROUNDS.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-start justify-start p-4">
        <div className="w-full max-w-2xl mx-auto mt-4">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t('ui.round')} {currentRound + 1} / {PHASE2_GLOBAL_TYPING_ROUNDS.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Target Sentence */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              {t('ui.typeSentence')}
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-4 border-2 border-gray-200">
              <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed font-medium">
                {currentSentence}
              </p>
            </div>

            {/* Input Area */}
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder={t('ui.startTyping')}
                className="w-full px-4 py-4 text-lg md:text-xl border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                autoFocus
                disabled={isRoundComplete}
              />
              {isRoundComplete && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-20 rounded-xl">
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{t('ui.progress')}</span>
                <span>{userInput.length} / {currentSentence.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-150"
                  style={{ width: `${Math.min(100, (userInput.length / currentSentence.length) * 100)}%` }}
                />
              </div>
            </div>

            {/* Current Round Stats */}
            {roundResults.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  {roundResults.map((r, idx) => (
                    <div key={idx} className="bg-purple-50 rounded-lg p-2">
                      <div className="font-bold text-purple-600">R{r.round}</div>
                      <div className="text-gray-600">{r.cpm} CPM</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AdSense */}
          <div className="w-full max-w-[680px] mx-auto mb-8">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} 
              style={{ width: '100%', height: '100px' }} 
              className="mx-auto" 
              label={t('ui.adsenseTitle')} 
            />
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
            <p>{t('startMessage.line3')}</p>
            <p className="text-gray-500">{t('startMessage.line4')}</p>
          </div>

          <div className="flex justify-center mb-6">
            <button 
              onClick={handleStartGame} 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse"
            >
              {t('startMessage.startButton')}
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
          {(similarTestsState.length > 0 || popularTestsState.length > 0) && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {(similarTestsState.length > 0 ? similarTestsState : popularTestsState.slice(0, 5)).map((test) => (
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

