'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2 } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount , prefetchStorageImages, extractImageFilenamesFromQuestions} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { Phase2ColorBlindResult, calculatePhase2ColorBlindResult, COLOR_BLIND_QUESTIONS } from '@/lib/phase2ColorBlindTestData';
import { generateIshiharaImage, getIshiharaConfig } from '@/lib/ishiharaImageGenerator';

interface Phase2ColorBlindTestClientProps {
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

export default function Phase2ColorBlindTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null
}: Phase2ColorBlindTestClientProps) {
  const t = useTranslations('phase2ColorBlindTest');
  const tGlobal = useTranslations();
  
  // Test State
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: number]: string }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [imageDataUrls, setImageDataUrls] = useState<{ [questionId: number]: string }>({});
  const canvasRefs = useRef<{ [questionId: number]: HTMLCanvasElement | null }>({});
  
  // Result Flow State
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Phase2ColorBlindResult | null>(null);
  
  // Others
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [aliProducts, setAliProducts] = useState<any[]>([]);

  // Generate Ishihara images when component mounts or question changes
  useEffect(() => {
    const generateImages = () => {
      const newDataUrls: { [questionId: number]: string } = {};
      
      COLOR_BLIND_QUESTIONS.forEach((question) => {
        try {
          const canvas = document.createElement('canvas');
          const config = getIshiharaConfig(question.id);
          
          // 첫 번째 문제 디버깅
          if (question.id === 1) {
            console.log('Generating image for question 1:', config);
          }
          
          generateIshiharaImage(canvas, config);
          const dataUrl = canvas.toDataURL('image/png');
          
          if (dataUrl && dataUrl !== 'data:,') {
            newDataUrls[question.id] = dataUrl;
            canvasRefs.current[question.id] = canvas;
            
            // 첫 번째 문제 디버깅
            if (question.id === 1) {
              console.log('Successfully generated image for question 1, dataUrl length:', dataUrl.length);
            }
          } else {
            console.error(`Failed to generate image for question ${question.id}: dataUrl is empty or invalid`);
            // 재시도
            setTimeout(() => {
              const retryCanvas = document.createElement('canvas');
              generateIshiharaImage(retryCanvas, config);
              const retryDataUrl = retryCanvas.toDataURL('image/png');
              if (retryDataUrl && retryDataUrl !== 'data:,') {
                setImageDataUrls(prev => ({ ...prev, [question.id]: retryDataUrl }));
                canvasRefs.current[question.id] = retryCanvas;
              }
            }, 100);
          }
        } catch (error) {
          console.error(`Error generating image for question ${question.id}:`, error);
        }
      });
      
      if (Object.keys(newDataUrls).length > 0) {
        setImageDataUrls(newDataUrls);
      }
    };

    // 컴포넌트 마운트 시 또는 started가 true일 때 이미지 생성
    if (typeof window !== 'undefined') {
      generateImages();
    }
  }, [started]);

  // Handle Test Completion -> Loading -> Popup -> Result
  useEffect(() => {
    if (currentQuestionIndex >= COLOR_BLIND_QUESTIONS.length && !result) {
      // Calculate Result
      const finalResult = calculatePhase2ColorBlindResult(answers);
      setResult(finalResult);
      
      // Start Loading Sequence
      setShowLoadingSpinner(true);
      
      // Load products for result
      if (locale !== 'ko') {
        const keywords = ['eye care', 'color vision test', 'health supplements'];
        const keyword = keywords[Math.floor(Math.random() * keywords.length)];
        searchAliExpressProducts(keyword, 4, locale).then(setAliProducts).catch(console.error);
      } else {
        searchAliExpressProducts('trending', 4, locale).then(setAliProducts).catch(console.error);
      }
    }
  }, [currentQuestionIndex, answers, result, locale]);

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

  // Start Test
  const handleStartTest = () => {
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));

    setStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedAnswer('');
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setShowResult(false);
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
  };

  // Handle Answer Selection - 자동으로 다음 질문으로 이동
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    // 현재 질문에 답변 저장
    const currentQuestion = COLOR_BLIND_QUESTIONS[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    
    // 약간의 딜레이 후 자동으로 다음 질문으로 이동 (선택 효과 표시를 위해)
    setTimeout(() => {
      if (currentQuestionIndex < COLOR_BLIND_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer('');
        // 다음 질문으로 스크롤
        window.scrollTo(0, 0);
      } else {
        // Last question, will trigger result calculation
        setCurrentQuestionIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      }
    }, 300); // 300ms 딜레이로 선택 효과 표시
  };

  // Retake
  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedAnswer('');
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
      return t('shareMessages.default', { type: resultTitle });
    }
    return t('shareMessages.startDefault');
  };
  
  const handleShareResult = async () => {
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
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
    const dataLocale = locale === 'zh-CN' ? 'zh' : locale;
    const resultTitle = result ? (result.title[dataLocale as keyof typeof result.title] || result.title.ko) : '';
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
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                📊 {t('ui.characteristics')}
              </h3>
              <p className="text-lg text-gray-700 text-center">
                {resultCharacteristics}
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

  // 4. Test Screen (Question Screen)
  if (started && currentQuestionIndex < COLOR_BLIND_QUESTIONS.length) {
    const currentQuestion = COLOR_BLIND_QUESTIONS[currentQuestionIndex];
    
    // Common answer options (based on typical Ishihara test)
    // 모든 질문의 정답과 오답 후보들을 포함
    const answerOptions = ['12', '21', '26', '29', '35', '42', '45', '57', '73', '74', '8', '2', '5', '6', '7', '16', '70', 'nothing'];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-start justify-start p-4">
        <div className="w-full max-w-2xl mx-auto mt-4">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t('ui.question')} {currentQuestionIndex + 1} / {COLOR_BLIND_QUESTIONS.length}</span>
              <span>{Math.round(((currentQuestionIndex + 1) / COLOR_BLIND_QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / COLOR_BLIND_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Image */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center bg-gray-50">
              {imageDataUrls[currentQuestion.id] ? (
                <Image
                  src={imageDataUrls[currentQuestion.id]}
                  alt={`Question ${currentQuestionIndex + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain rounded-lg"
                  unoptimized
                  onError={(e) => {
                    console.error('Image load error for question', currentQuestion.id);
                    // 이미지 생성 재시도
                    const canvas = document.createElement('canvas');
                    const config = getIshiharaConfig(currentQuestion.id);
                    generateIshiharaImage(canvas, config);
                    const dataUrl = canvas.toDataURL('image/png');
                    if (dataUrl && dataUrl !== 'data:,') {
                      setImageDataUrls(prev => ({ ...prev, [currentQuestion.id]: dataUrl }));
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-gray-400">이미지 생성 중...</div>
                </div>
              )}
            </div>
          </div>

          {/* Answer Selection */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              {t('ui.selectAnswer')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {answerOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className={`py-4 px-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAnswer === option
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {option === 'nothing' ? t('ui.nothing') : option}
                </button>
              ))}
            </div>
          </div>

          {/* AdSense & Social Share */}
          <div className="mt-8 w-full max-w-[680px] mx-auto">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="mt-8 mb-8 text-center w-full">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {tGlobal('mbti.shareResultWithFriends')}
            </h2>
            <div className="flex justify-center gap-2 items-center">
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
    );
  }

  // 5. Start Screen (Intro)
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[680/384] mb-3">
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
          {!isLatestTest && badgeType === 'popular' && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">인기</div>
          )}
          {!isLatestTest && badgeType === 'hot' && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
          )}
        </div>

        <div className="px-4">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
          
          {/* AdSense */}
          <div className="my-6">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          {/* Intro Text */}
          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
            <p className="font-bold text-gray-800 text-lg">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p>{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line5')}</p>
            <p className="text-gray-500">{t('startMessage.line6')}</p>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleStartTest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse"
            >
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

