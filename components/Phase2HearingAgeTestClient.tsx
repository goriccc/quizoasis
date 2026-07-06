'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, Volume2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import { Phase2HearingAgeResult, calculatePhase2HearingAgeResult, HEARING_TEST_STEPS } from '@/lib/phase2HearingAgeTestData';

interface Phase2HearingAgeTestClientProps {
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

export default function Phase2HearingAgeTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2HearingAgeTestClientProps) {
  const t = useTranslations('phase2HearingAgeTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 = volume check, 1-6 = test steps
  const [lastHeardStep, setLastHeardStep] = useState(0); // Track last step where user heard the sound
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2HearingAgeResult | null>(null);
  
  // Audio State
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  
  // Others
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [aliProducts, setAliProducts] = useState<any[]>([]);

  // Stop audio
  const stopAudio = useCallback(() => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
      } catch (e) {
        // Already stopped
      }
      oscillatorRef.current = null;
    }
    if (gainNodeRef.current) {
      gainNodeRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  // Initialize Audio Context (lazy - will be created on first use)
  useEffect(() => {
    // Don't create AudioContext on mount - wait for user interaction
    // AudioContext will be created via ensureAudioContextReady when needed
    return () => {
      // Cleanup audio on unmount
      stopAudio();
      // Don't close AudioContext - it will be recreated if needed
      // Closing causes issues with React Strict Mode double mounting
    };
  }, [stopAudio]);

  // Ensure AudioContext is ready (resume if needed)
  const ensureAudioContextReady = useCallback(async () => {
    // If no context exists or context is closed, create a new one
    if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
      console.log('Creating new AudioContext...');
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();
      console.log('New AudioContext created, state:', audioContextRef.current.state);
    }
    
    const audioContext = audioContextRef.current;
    
    // Try to resume if suspended
    if (audioContext.state === 'suspended') {
      console.log('AudioContext state: suspended - attempting to resume...');
      try {
        await audioContext.resume();
        console.log('AudioContext resumed, new state:', audioContext.state);
      } catch (error) {
        console.error('Failed to resume AudioContext:', error);
        // Create a new context if resume fails
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
        console.log('Created new AudioContext after resume failure');
      }
    }
    
    return audioContextRef.current;
  }, []);

  // Play frequency tone
  const playFrequency = useCallback(async (frequency: number, duration: number = 2000) => {
    stopAudio(); // Stop any playing audio first
    
    try {
      // Ensure AudioContext is ready
      const audioContext = await ensureAudioContextReady();
      
      console.log(`Attempting to play ${frequency}Hz, AudioContext state:`, audioContext.state);
      
      // Create oscillator and gain node
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      
      // Set volume (0.7 = 70% - 더 크게)
      const startTime = audioContext.currentTime;
      gainNode.gain.setValueAtTime(0.7, startTime);
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Start oscillator
      oscillator.start(startTime);
      
      // Fade out at the end
      const endTime = startTime + duration / 1000;
      gainNode.gain.exponentialRampToValueAtTime(0.01, endTime);
      
      // Stop oscillator
      oscillator.stop(endTime);
      
      // Store references
      oscillatorRef.current = oscillator;
      gainNodeRef.current = gainNode;
      
      setIsPlaying(true);
      
      // Cleanup after duration
      setTimeout(() => {
        setIsPlaying(false);
        // Clean up references
        if (oscillatorRef.current === oscillator) {
          oscillatorRef.current = null;
        }
        if (gainNodeRef.current === gainNode) {
          gainNodeRef.current = null;
        }
      }, duration);
      
      console.log(`✓ Playing ${frequency}Hz for ${duration}ms`);
    } catch (error) {
      console.error('Error playing frequency:', error);
      setIsPlaying(false);
      console.error('오디오 재생 실패. 브라우저의 오디오 설정을 확인하거나 페이지를 새로고침해주세요.');
    }
  }, [ensureAudioContextReady, stopAudio]);

  // Start Game
  const handleStartGame = async () => {
    // Ensure AudioContext is ready BEFORE starting game
    try {
      await ensureAudioContextReady();
      console.log('AudioContext ready for game start');
    } catch (error) {
      console.error('Failed to prepare AudioContext:', error);
    }

    
    setStarted(true);
    setCurrentStep(0); // Start with volume check
    setLastHeardStep(0);
    setIsPlaying(false);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setResult(null);
    
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
    
    // Auto-play volume check sound after a short delay
    // Use user interaction to unlock audio
    setTimeout(async () => {
      const volumeCheckStep = HEARING_TEST_STEPS.find(s => s.step === 0);
      if (volumeCheckStep) {
        await playFrequency(volumeCheckStep.frequency, 3000);
      }
    }, 300);
  };

  // Handle Volume Check
  const handleVolumeCheckConfirm = async () => {
    setLastHeardStep(0); // Mark volume check as heard
    // Move to step 1
    setCurrentStep(1);
    const step1 = HEARING_TEST_STEPS.find(s => s.step === 1);
    if (step1) {
      setTimeout(async () => {
        await playFrequency(step1.frequency, 3000);
      }, 300);
    }
  };

  // Handle Answer (O = can hear, X = cannot hear)
  const handleAnswer = async (canHear: boolean) => {
    stopAudio();
    
    if (canHear) {
      // User can hear this frequency
      setLastHeardStep(currentStep);
      
      // Move to next step
      if (currentStep < 6) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        const nextStepData = HEARING_TEST_STEPS.find(s => s.step === nextStep);
        if (nextStepData) {
          setTimeout(async () => {
            await playFrequency(nextStepData.frequency, 3000);
          }, 500);
        }
      } else {
        // Finished all steps - heard everything (Type6)
        finishTest();
      }
    } else {
      // User cannot hear this frequency - finish test
      finishTest();
    }
  };

  // Replay current frequency
  const handleReplay = async () => {
    const currentStepData = HEARING_TEST_STEPS.find(s => s.step === currentStep);
    if (currentStepData) {
      await playFrequency(currentStepData.frequency, 3000);
    }
  };

  // Finish test and calculate result
  const finishTest = () => {
    const finalResult = calculatePhase2HearingAgeResult(lastHeardStep);
    setResult(finalResult);
    setShowLoadingSpinner(true);
    
    // Load products for result
    if (locale !== 'ko') {
      const keywords = ['hearing aids', 'earphones', 'audio equipment'];
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      searchAliExpressProducts(keyword, 4, locale).then(setAliProducts).catch(console.error);
    } else {
      searchAliExpressProducts('trending', 4, locale).then(setAliProducts).catch(console.error);
    }
  };

  // Handle Game Over -> Loading -> Popup -> Result
  useEffect(() => {
    if (showLoadingSpinner && result) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner, result]);

  // Retake
  const handleRetake = () => {
    stopAudio();
    setStarted(false);
    setCurrentStep(0);
    setLastHeardStep(0);
    setIsPlaying(false);
    setShowResult(false);
    setShowResultPopup(false);
    setResult(null);
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
      const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
      const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
      return t('shareMessages.default', { age: resultTitle });
    }
    return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result ? t('shareMessages.default', { age: resultTitle }) : t('shareMessages.startDefault');
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
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    if (typeof window === 'undefined' || !window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const description = result ? t('shareMessages.kakao', { age: resultTitle }) : t('shareMessages.startKakao');
    
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
  const shareToWeChat = () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug); alert(t('alerts.wechatCopy')); copyLink(); };
  const shareToLine = () => window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(getShareText())}`, '_blank');
  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}%0A%0A${encodeURIComponent(shareUrl)}`, '_blank');

  // Get current step display info
  const getCurrentStepInfo = () => {
    if (currentStep === 0) {
      return {
        frequency: HEARING_TEST_STEPS[0].frequency,
        text: t('game.volumeCheck'),
        description: t('game.volumeCheckDesc')
      };
    }
    const stepData = HEARING_TEST_STEPS.find(s => s.step === currentStep);
    if (stepData) {
      return {
        frequency: stepData.frequency,
        text: t('game.listen', { frequency: stepData.frequency }),
        description: t('game.listenDesc')
      };
    }
    return { frequency: 0, text: '', description: '' };
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
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
    const resultAdvice = result.advice[dataLocale as keyof typeof result.advice] || result.advice.ko;
    const resultHearingAge = result.hearingAge[dataLocale as keyof typeof result.hearingAge] || result.hearingAge.ko;

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
                {t('ui.hearingAge')}
              </h3>
              <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                {resultHearingAge}
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
    const stepInfo = getCurrentStepInfo();
    const stepData = HEARING_TEST_STEPS.find(s => s.step === currentStep);
    const progress = currentStep === 0 ? 0 : ((currentStep - 1) / 6) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-start justify-start p-4">
        {/* Game Area - 가로너비 기준 1:1 비율 */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 md:p-6 relative mb-8 mx-auto mt-4">
          {/* Progress Indicator */}
          {currentStep > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1 font-bold">
                <span>{t('ui.step')} {currentStep} / 6</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full transition-all duration-300 ease-linear bg-green-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Step Indicator Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({length: 7}).map((_, i) => {
              const stepNum = i;
              const isActive = currentStep === stepNum;
              const isCompleted = currentStep > stepNum || (stepNum === 0 && lastHeardStep >= 0);
              return (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? 'bg-blue-500 scale-125' : 
                    isCompleted ? 'bg-green-500' : 
                    'bg-gray-300'
                  }`}
                />
              );
            })}
          </div>

          {/* Audio Display */}
          <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center mb-6">
            {isPlaying ? (
              <>
                <div className="text-6xl mb-4 animate-pulse">🔊</div>
                <div className="w-32 h-32 rounded-full bg-blue-400 animate-ping absolute opacity-20"></div>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🎧</div>
                <button
                  onClick={handleReplay}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
                >
                  <Volume2 size={20} />
                  {t('game.replay')}
                </button>
              </>
            )}
          </div>

          {/* Current Step Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {stepInfo.text}
            </h2>
            {stepData && (
              <p className="text-4xl font-black text-blue-600 mb-2">
                {stepData.frequency}Hz
              </p>
            )}
            <p className="text-gray-600">
              {stepInfo.description}
            </p>
          </div>

          {/* Answer Buttons */}
          {currentStep === 0 ? (
            <button
              onClick={handleVolumeCheckConfirm}
              className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-600 transition-all shadow-md"
            >
              {t('game.confirm')}
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 bg-green-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-600 transition-all shadow-md text-lg"
              >
                {t('game.canHear')} ✓
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 bg-red-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-red-600 transition-all shadow-md text-lg"
              >
                {t('game.cannotHear')} ✗
              </button>
            </div>
          )}
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
            <p>{t('startMessage.line3')}</p>
            <p className="text-blue-500 font-semibold">{t('startMessage.line4')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line5')}</p>
            <p className="font-bold text-gray-800">{t('startMessage.line6')}</p>
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

