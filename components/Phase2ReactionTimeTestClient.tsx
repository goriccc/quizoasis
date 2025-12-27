'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { Phase2ReactionTimeResult, calculatePhase2ReactionTimeResult } from '@/lib/phase2ReactionTimeData';

interface Phase2ReactionTimeTestClientProps {
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

type GameState = 'intro' | 'waiting' | 'ready' | 'clicked' | 'tooSoon' | 'result';

export default function Phase2ReactionTimeTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2ReactionTimeTestClientProps) {
  const t = useTranslations('phase2ReactionTimeTest');
  const tGlobal = useTranslations();
  
  // Game State
  const [gameState, setGameState] = useState<GameState>('intro');
  const [round, setRound] = useState(1);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  
  const [startTime, setStartTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [result, setResult] = useState<Phase2ReactionTimeResult | null>(null);
  
  // Loading & Result States
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);

  // Constants
  const TOTAL_ROUNDS = 5;

  // Start Game
  const handleStartGame = () => {
    setGameState('waiting');
    setRound(1);
    setReactionTimes([]);
    startRound();
  };

  // Start a Round
  const startRound = useCallback(() => {
    setGameState('waiting');
    
    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2000ms ~ 5000ms
    
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
    }, randomDelay);
  }, []);

  // Handle User Click
  const handleGameClick = () => {
    if (gameState === 'waiting') {
      // Too Soon
      if (timerRef.current) clearTimeout(timerRef.current);
      setGameState('tooSoon');
      return;
    }

    if (gameState === 'ready') {
      // Valid Click
      const endTime = Date.now();
      const diff = endTime - startTime;
      
      setCurrentResult(diff);
      setReactionTimes(prev => [...prev, diff]);
      setGameState('clicked');
      return;
    }
    
    if (gameState === 'clicked' || gameState === 'tooSoon') {
        // Proceed
        if (gameState === 'tooSoon') {
            startRound();
        } else {
            if (round < TOTAL_ROUNDS) {
                setRound(prev => prev + 1);
                startRound();
            } else {
                finishGame();
            }
        }
    }
  };

  const finishGame = async () => {
    // Final Calculation
    const average = Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length);
    const finalResult = calculatePhase2ReactionTimeResult(average);
    setResult(finalResult);
    
    // UI Flow: Loading -> Popup -> Result
    setShowLoadingSpinner(true);
    
    try {
        await incrementPlayCount(slug);
        setDisplayPlayCount(prev => prev + 1);
    } catch (error) {
        console.error('Failed to increment play count:', error);
    }

    setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
    }, 2000);
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowFinalResult(true);
    setTimeout(() => {
        safeLoadAdSense();
    }, 100);
  };

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const baseUrl = window.location.origin;
    return `${baseUrl}/${locale}/test/${slug}`;
  };

  const handleShareResult = async () => {
    if (!result) return;
    
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const average = Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length);
    
    const shareData = {
      title: t('ui.title'),
      text: t('shareMessages.default', { type: typeName, record: average }),
      url: getShareUrl(),
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      alert(t('alerts.linkCopied'));
    }).catch(() => {
      alert(t('alerts.shareFailed'));
    });
  };
  
  const shareToKakao = () => {
    const url = getShareUrl();
    const average = result ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('shareMessages.kakao', { type: typeName, record: average })
      : t('shareMessages.startKakao');

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '';
        if (kakaoKey) {
          window.Kakao.init(kakaoKey);
        }
      }
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareText,
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: url, webUrl: url } }],
      });
    } else {
      alert(t('alerts.kakaoInit'));
    }
  };

  const shareToTelegram = () => {
    const url = getShareUrl();
    const average = result ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const text = result 
      ? t('shareMessages.telegram', { type: typeName, record: average })
      : t('shareMessages.startTelegram');
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToWeChat = () => {
    const url = getShareUrl();
    const average = result ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const text = result 
      ? t('shareMessages.wechat', { type: typeName, record: average })
      : t('shareMessages.startWechat');
    copyLink();
    alert(t('alerts.wechatCopy'));
  };

  const shareToLine = () => {
    const url = getShareUrl();
    const average = result ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const text = result 
      ? t('shareMessages.line', { type: typeName, record: average })
      : t('shareMessages.startLine');
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = getShareUrl();
    const average = result ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const typeName = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
    const text = result 
      ? t('shareMessages.whatsapp', { type: typeName, record: average })
      : t('shareMessages.startWhatsapp');
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
  };

  // Render Result Section
  const renderResultSection = () => {
    if (!result) return null;
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    
    const resultTitle = result.title[dataLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[dataLocale as keyof typeof result.description] || result.description.ko;
    const resultSpeed = result.survivalInstinct[dataLocale as keyof typeof result.survivalInstinct] || result.survivalInstinct.ko;
    const resultJob = result.advice[dataLocale as keyof typeof result.advice] || result.advice.ko;
    const average = Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
            <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {average}ms - {resultTitle}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {resultDescription}
            </p>
        </div>
        
        <div className="space-y-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">{t('ui.yourSpeed')}</h3>
                <p className="text-2xl font-bold text-purple-600 text-center" style={{ fontSize: '1.5em' }}>
                    {resultSpeed}
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">{t('ui.recommendedJob')}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {resultJob.split(/[,、，]/).map((job, index) => (
                        <span key={index} className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium">
                            {job.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-8 mb-6 px-4">
             <button onClick={handleShareResult} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3">
                <Share2 size={20} />
                {t('ui.shareResult')}
            </button>
        </div>

        <div className="my-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 px-4 mb-8">
             <button onClick={() => window.location.reload()} className="bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition-all">
                {t('ui.retry')}
            </button>
             <button onClick={() => window.location.href = `/${locale}`} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 font-bold py-3 px-4 rounded-xl hover:from-purple-200 hover:to-pink-200 transition-all">
                {t('ui.otherTests')}
            </button>
        </div>
      </div>
    );
  };

  if (showFinalResult) return <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">{renderResultSection()}</div>;

  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {tGlobal('mbti.testCompleted')}</h2>
          <p className="text-xs text-gray-500 text-center mb-3">{tGlobal('footer.disclaimer')}</p>
          <button onClick={handleShowResult} className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all shadow-lg">
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4"></div>
        <p className="text-xl font-bold text-purple-600 animate-pulse">{tGlobal('mbti.analyzing')}</p>
      </div>
    );
  }

  if (gameState === 'intro') {
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
                    
                    {/* Share Buttons */}
                    <div className="mb-8 text-center">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
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
            </div>
        </div>
    );
  }

  // Game Screen
  return (
    <div 
        className={`min-h-screen flex flex-col items-center justify-center cursor-pointer select-none transition-colors duration-200
            ${gameState === 'waiting' ? 'bg-red-500' : 
              gameState === 'ready' ? 'bg-green-500' : 
              gameState === 'tooSoon' ? 'bg-orange-500' : 'bg-blue-500'}`}
        onMouseDown={handleGameClick}
        onTouchStart={handleGameClick}
    >
        <div className="text-white text-center px-4 w-full max-w-lg">
            {gameState === 'waiting' && (
                <>
                    <div className="text-8xl mb-6">⏳</div>
                    <h2 className="text-4xl font-bold mb-4">{t('ui.wait')}</h2>
                    <p className="text-2xl opacity-90">{t('ui.waitDesc')}</p>
                </>
            )}
            {gameState === 'ready' && (
                <>
                    <div className="text-8xl mb-6">⚡</div>
                    <h2 className="text-6xl font-bold mb-4">{t('ui.clickNow')}</h2>
                    <p className="text-2xl opacity-90">{t('ui.clickNowDesc')}</p>
                </>
            )}
            {gameState === 'clicked' && (
                <>
                    <div className="text-8xl mb-6">⏱️</div>
                    <h2 className="text-6xl font-bold mb-6">{currentResult} ms</h2>
                    <p className="text-3xl font-bold border-2 border-white rounded-full py-3 px-8 inline-block animate-pulse">{t('ui.clickToContinue')}</p>
                    <p className="mt-8 text-xl opacity-80">{t('ui.roundInfo', { current: round, total: TOTAL_ROUNDS })}</p>
                </>
            )}
             {gameState === 'tooSoon' && (
                <>
                    <div className="text-8xl mb-6">⚠️</div>
                    <h2 className="text-4xl font-bold mb-4">{t('ui.tooSoon')}</h2>
                    <p className="text-2xl mb-8">{t('ui.tooSoonDesc')}</p>
                    <p className="text-xl font-bold border-2 border-white rounded-full py-2 px-6 inline-block">{t('ui.clickToRetry')}</p>
                </>
            )}
        </div>
        
        {/* Game Footer (AdSense & Share) */}
        <div className="fixed bottom-0 left-0 w-full bg-white bg-opacity-90 p-4">
             <div className="flex justify-between items-center max-w-4xl mx-auto">
                <span className="text-gray-800 font-bold">{t('ui.shareWithFriends')}</span>
                <div className="flex gap-2">
                    <button onClick={(e) => { e.stopPropagation(); copyLink(); }} className="w-8 h-8"><Image src="/icons/link.jpeg" alt="link" width={32} height={32} className="rounded-lg" /></button>
                    <button onClick={(e) => { e.stopPropagation(); shareToKakao(); }} className="w-8 h-8"><Image src="/icons/kakao.jpeg" alt="kakao" width={32} height={32} className="rounded-lg" /></button>
                    <button onClick={(e) => { e.stopPropagation(); shareToWeChat(); }} className="w-8 h-8"><Image src="/icons/wechat.jpeg" alt="wechat" width={32} height={32} className="rounded-lg" /></button>
                </div>
             </div>
        </div>
    </div>
  );
}

