'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3WorldFlagMasterQuestion,
  Phase3WorldFlagMasterResult,
  Phase3WorldFlagMasterOption,
  calculatePhase3WorldFlagMasterResult,
} from '@/lib/phase3WorldFlagMasterData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, getQuizLandmarkImageUrl, formatPlayCount , prefetchStorageImages, extractImageFilenamesFromQuestions} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

interface Phase3WorldFlagMasterTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3WorldFlagMasterQuestion[];
  results: Phase3WorldFlagMasterResult[];
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

export default function Phase3WorldFlagMasterTestClient({
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
}: Phase3WorldFlagMasterTestClientProps) {
  const t = useTranslations('phase3WorldFlagMasterTest');
  const tGlobal = useTranslations(); // 글로벌 번역 (mbti 등)
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // 원래 질문 인덱스를 키로 사용
  const [result, setResult] = useState<Phase3WorldFlagMasterResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3WorldFlagMasterQuestion[]>([]);
  /** 답 선택 후 정답/해설 확인 단계 */
  const [answerFeedback, setAnswerFeedback] = useState<{ isCorrect: boolean } | null>(null);
  const answersRef = useRef<Record<number, number>>({});
  const [lastCorrectCount, setLastCorrectCount] = useState(0);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]); // 셔플링된 질문의 원래 인덱스 매핑
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, any[]>>({});
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const supabasePreconnectedRef = useRef(false);

  // Supabase Storage origin preconnect (TLS·DNS 절약)
  useEffect(() => {
    if (supabasePreconnectedRef.current || typeof document === 'undefined') return;
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!base) return;
    try {
      const origin = new URL(base).origin;
      supabasePreconnectedRef.current = true;
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = '';
      document.head.appendChild(link);
    } catch {
      /* noop */
    }
  }, []);

  // 답변 순서 섞기 (질문이 바뀔 때마다)
  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    
    const questionKey = currentQuestion;
    if (!shuffledOptionsMap[questionKey] && shuffledQuestions[currentQuestion]) {
      const optionsCopy = [...shuffledQuestions[currentQuestion].options];
      for (let i = optionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
      }
      setShuffledOptionsMap(prev => ({
        ...prev,
        [questionKey]: optionsCopy
      }));
    }
  }, [currentQuestion, started, shuffledOptionsMap, shuffledQuestions]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  /** 현재·다음·다다음 문항 이미지 프리페치(브라우저 캐시 활용) */
  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    const prefetch = (url: string, priority: 'high' | 'low') => {
      const img = new window.Image();
      img.decoding = 'async';
      if ('fetchPriority' in img) {
        (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = priority;
      }
      img.src = url;
    };
    for (let off = 0; off <= 2; off++) {
      const idx = currentQuestion + off;
      if (idx < shuffledQuestions.length) {
        const url = getQuizLandmarkImageUrl(shuffledQuestions[idx].imageFile);
        prefetch(url, off === 0 ? 'high' : 'low');
      }
    }
  }, [started, currentQuestion, shuffledQuestions]);

  // 알리익스프레스 상품 미리 로드 (시작 화면용 - 일반 추천)
  useEffect(() => {
    if (!started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          const keyword = locale === 'ko' ? '세계 지도' : 'world flags geography';
          const products = await searchAliExpressProducts(keyword, 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [locale, started, aliProducts.length]);

  // AdSense 광고 로드
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

  // 알리익스프레스 상품 로드 (결과에 맞춰)
  useEffect(() => {
    if (result && locale !== 'ko') {
      const loadProducts = async () => {
        try {
          const keyword = 'world flags geography';
          const products = await searchAliExpressProducts(keyword, 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [result, locale]);
// 3초 지연 로딩 스피너
  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);
// 질문 섞기 함수
  const shuffleQuestions = (questionList: Phase3WorldFlagMasterQuestion[]) => {
    // 원래 인덱스와 함께 질문을 쌍으로 만들어서 셔플링
    const questionsWithIndices = questionList.map((q, idx) => ({ question: q, originalIndex: idx }));
    const shuffled = [...questionsWithIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
      questions: shuffled.map(item => item.question),
      originalIndices: shuffled.map(item => item.originalIndex)
    };
  };

  // 테스트 시작
  const handleStartTest = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    if (typeof window !== 'undefined') {
      for (let i = 0; i < Math.min(3, shuffled.length); i++) {
        const url = getQuizLandmarkImageUrl(shuffled[i].imageFile);
        const img = new window.Image();
        img.decoding = 'async';
        img.src = url;
      }
    }
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
    setAnswers({});
    answersRef.current = {};
    setDisplayPlayCount(prev => prev + 1);
    
    // 중복 호출 방지
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    
    setAnswerFeedback(null);
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));

    setStarted(true);
    window.scrollTo(0, 0);
  };

  const finishQuizWithAnswers = (finalAnswers: Record<number, number>) => {
    const answersArray = questions.map((_, idx) => finalAnswers[idx] ?? 0);
    const resultType = calculatePhase3WorldFlagMasterResult(answersArray);
    const quizResult = results.find(r => r.type === resultType);
    const correctTotal = answersArray.reduce((s, v) => s + v, 0);
    setLastCorrectCount(correctTotal);

    if (quizResult) {
      setResult(quizResult);
    }

    if (quizResult && locale !== 'ko') {
      const loadStartTime = Date.now();
      searchAliExpressProducts('world flags geography', 4, locale)
        .then(products => {
          const loadTime = Date.now() - loadStartTime;
          console.log(`✅ [완료] 상품 로드 (${loadTime}ms)`);
          setAliProducts(products);
        })
        .catch(error => {
          console.error('❌ 결과 상품 로드 실패:', error);
        });
    }

    setShowLoadingSpinner(true);
  };

  /** 선택 직후: 채점만 하고 해설 단계로 (선택지 셔플 후에도 isCorrect로 채점) */
  const handleOptionSelect = (option: Phase3WorldFlagMasterOption) => {
    if (answerFeedback !== null) return;
    const score = option.isCorrect ? 1 : 0;
    const currentOriginalIndex = originalQuestionIndices[currentQuestion];
    const newAnswers = { ...answers, [currentOriginalIndex]: score };
    setAnswers(newAnswers);
    answersRef.current = newAnswers;
    setAnswerFeedback({ isCorrect: option.isCorrect });
  };

  /** 해설 확인 후 다음 문항 또는 결과 로딩 */
  const handleContinueAfterFeedback = () => {
    const finalAnswers = answersRef.current;
    setAnswerFeedback(null);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuizWithAnswers(finalAnswers);
    }
  };

  // 다시 하기
  const handleRetake = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
    setAnswerFeedback(null);
    answersRef.current = {};
    setLastCorrectCount(0);
  };

  const buildResultShareText = () => {
    if (!result) return '';
    const raw = result.shareLine[locale as keyof typeof result.shareLine] || result.shareLine.ko;
    return raw.replace(/\{count\}/g, String(lastCorrectCount));
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;

    const shareText = `${buildResultShareText()}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;

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

  // 공유 함수들
  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const body = result ? buildResultShareText() : t('shareMessages.startLine');
    const shareText = encodeURIComponent(body);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const shareText = result ? `${buildResultShareText()}\n\n${url}` : `${t('shareMessages.startWechat')}\n\n${url}`;
    
    // Web Share API 사용 (모바일에서 WeChat 포함한 설치된 앱 목록 표시)
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return; // 사용자가 취소
        }
      }
    }
    
    // Fallback: 링크 복사
    try {
      await navigator.clipboard.writeText(url);
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const body = result ? buildResultShareText() : t('shareMessages.startWhatsapp');
    const shareText = encodeURIComponent(body);
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
    
    const shareDescription = result ? buildResultShareText() : t('shareMessages.startKakao');
    
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
    const body = result ? buildResultShareText() : t('shareMessages.startTelegram');
    const text = encodeURIComponent(body);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  // 팝업에서 결과 보기
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  // 시작 화면
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
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>

            {/* AdSense 광고 - 타이틀과 설명 사이 */}
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
                className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('mbti.shareWithFriends')}
              </h2>
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
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {t('ui.similarTests')}
              </h2>
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
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
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
      </div>
    );
  }

  // 로딩 스피너
  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        {/* AdSense 광고 - 로딩 스피너 상단 */}
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

        {/* AdSense 광고 - 로딩 스피너 하단 */}
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

  // 결과 팝업
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

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultShortDescription = result.shortDescription[locale as keyof typeof result.shortDescription] || result.shortDescription.ko;
    const resultLongDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    const resultFlagGrade = result.flagGrade[locale as keyof typeof result.flagGrade] || result.flagGrade.ko;
    const resultScoreRange = result.scoreRange[locale as keyof typeof result.scoreRange] || result.scoreRange.ko;
    const resultStrength = result.strengthZone[locale as keyof typeof result.strengthZone] || result.strengthZone.ko;
    const resultWeak = result.weakZone[locale as keyof typeof result.weakZone] || result.weakZone.ko;
    const resultRetakeTip = result.retakeTip[locale as keyof typeof result.retakeTip] || result.retakeTip.ko;
    const resultCharacteristic = result.characteristic[locale as keyof typeof result.characteristic] || result.characteristic.ko;
    const resultRegret = result.regretPoint[locale as keyof typeof result.regretPoint] || result.regretPoint.ko;
    const resultCertification = result.certificationPhrase[locale as keyof typeof result.certificationPhrase] || result.certificationPhrase.ko;
    const resultOne = result.oneLiner[locale as keyof typeof result.oneLiner] || result.oneLiner.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5 border border-purple-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {tGlobal('mbti.yourResult')}
              </h2>
              <p className="text-sm font-semibold text-fuchsia-600 mb-2">
                {t('ui.scoreSummary', { count: lastCorrectCount })}
              </p>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-3">
                {resultShortDescription}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {resultLongDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-purple-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  📊 {t('ui.flagGrade')}
                </h3>
                <p className="text-lg font-bold text-purple-700 text-center">{resultFlagGrade}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-pink-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🎯 {t('ui.scoreRange')}
                </h3>
                <p className="text-sm font-medium text-gray-800 text-center leading-snug">{resultScoreRange}</p>
              </div>
            </div>

            {(resultStrength || resultWeak) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {resultStrength && (
                  <div className="bg-white rounded-xl shadow-lg p-4 border border-fuchsia-100">
                    <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                      💪 {t('ui.strengthZone')}
                    </h3>
                    <p className="text-sm text-gray-700 text-center">{resultStrength}</p>
                  </div>
                )}
                {resultWeak && (
                  <div className="bg-white rounded-xl shadow-lg p-4 border border-violet-100">
                    <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                      ⚠️ {t('ui.weakZone')}
                    </h3>
                    <p className="text-sm text-gray-700 text-center">{resultWeak}</p>
                  </div>
                )}
              </div>
            )}

            {resultRetakeTip && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-purple-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🔄 {t('ui.retakeTip')}
                </h3>
                <p className="text-sm text-gray-700">{resultRetakeTip}</p>
              </div>
            )}

            {resultCharacteristic && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-pink-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  ⭐ {t('ui.characteristic')}
                </h3>
                <p className="text-sm text-gray-700">{resultCharacteristic}</p>
              </div>
            )}

            {resultRegret && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-fuchsia-100">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  😢 {t('ui.regretPoint')}
                </h3>
                <p className="text-sm text-gray-700">{resultRegret}</p>
              </div>
            )}

            {resultCertification && (
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg p-4 mb-3 border border-purple-200">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🏆 {t('ui.certificationPhrase')}
                </h3>
                <p className="text-sm font-bold text-purple-800 text-center">{resultCertification}</p>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-violet-100">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                💬 {t('ui.oneLiner')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{resultOne}</p>
            </div>

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                {t('ui.shareResult')}
              </button>
            </div>

            {/* AdSense 광고 - 결과와 다시하기 버튼 사이 */}
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
                className="flex-1 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold py-4 px-6 rounded-xl hover:from-amber-600 hover:to-rose-700 transition-all text-center shadow-md"
              >
                {tGlobal('mbti.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('mbti.shareResultWithFriends')}
              </h2>
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
            </div>

            {/* 🎯 유사한 다른 테스트 추천 톱5 */}
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
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
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

            {/* 🔥 요즘 인기 테스트 추천 톱5 */}
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
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                                                  {latestTestSlugs.includes(test.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              NEW
                            </div>
                          )}
                                                  {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              인기
                            </div>
                          )}
                          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              HOT
                            </div>
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
      </div>
    );
  }

  // 질문 화면
  if (shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) {
    return null; // 질문이 준비되지 않았으면 렌더링하지 않음
  }
  
  const question = shuffledQuestions[currentQuestion];
  const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const imageUrl = getQuizLandmarkImageUrl(question.imageFile);

  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;
  const hintOriginalIndex = originalQuestionIndices[currentQuestion];
  const hintSource = questions[hintOriginalIndex];
  const hintExplanation =
    hintSource.correctExplanation[locale as keyof typeof hintSource.correctExplanation] ||
    hintSource.correctExplanation.ko;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-sky-50 to-rose-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {tGlobal('mbti.progress')}
            </span>
            <span className="text-sm font-bold text-rose-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-sky-500 to-rose-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-4 px-4">
            <div className="relative w-full overflow-hidden border border-sky-200 shadow-md bg-slate-100" style={{ aspectRatio: '16/10' }}>
              <Image
                key={imageUrl}
                src={imageUrl}
                alt=""
                fill
                priority={currentQuestion === 0}
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                decoding="async"
              />
            </div>
          </div>

          <div className="mb-6 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center leading-relaxed whitespace-pre-line">
              {questionText}
            </h2>
          </div>

          <div className="space-y-4 px-4">
            {optionsArray.map((option, index) => {
              const optionText = option.text[locale as keyof typeof option.text] || option.text.ko;
              const label = String.fromCharCode(65 + index);
              const colors = [
                'from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 border-amber-300 hover:border-amber-500',
                'from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 border-sky-300 hover:border-sky-500',
                'from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 border-rose-300 hover:border-rose-500',
                'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-300 hover:border-blue-500',
              ];
              const bgColors = ['bg-amber-600', 'bg-sky-600', 'bg-rose-600', 'bg-blue-600'];
              const locked = answerFeedback !== null;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={locked}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full bg-gradient-to-r ${colors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all text-left ${
                    locked ? 'opacity-80 cursor-default' : 'transform hover:scale-102'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-7 h-7 ${bgColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}>
                      {label}
                    </div>
                    <span className="text-base">{optionText}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {answerFeedback && (
            <div className="mt-6 px-4 space-y-4">
              <div
                className={`rounded-2xl border-2 p-4 ${
                  answerFeedback.isCorrect
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-rose-300 bg-rose-50'
                }`}
              >
                <p className="font-bold text-gray-900 mb-2">
                  {answerFeedback.isCorrect ? t('ui.feedbackCorrect') : t('ui.feedbackWrong')}
                </p>
                <h3 className="font-bold text-sm text-gray-800 mb-1">{t('ui.correctExplanationTitle')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{hintExplanation}</p>
              </div>
              <button
                type="button"
                onClick={handleContinueAfterFeedback}
                className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 text-white hover:from-indigo-700 hover:to-sky-700 shadow-md"
              >
                {currentQuestion < shuffledQuestions.length - 1 ? t('ui.nextQuestion') : t('ui.viewResult')}
              </button>
            </div>
          )}

          {/* AdSense 광고 - 테스트 진행 마지막 답변 밑 */}
          <div className="mt-8 px-4">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {tGlobal('mbti.shareWithFriends')}
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}