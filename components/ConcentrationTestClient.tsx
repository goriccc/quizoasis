'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ConcentrationQuestion, ConcentrationResult } from '@/lib/concentrationData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, loadAdSense } from '@/lib/adsense';

interface ConcentrationTestClientProps {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  questions: ConcentrationQuestion[];
  results: ConcentrationResult[];
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

export default function ConcentrationTestClient({ 
  locale, 
  slug, 
  title, 
  description,
  questions,
  results,
  questionCount,
  thumbnail,
  playCount = 0,
  similarTests = []
,
  isLatestTest = false,
  badgeType = null
}: ConcentrationTestClientProps) {
  const t = useTranslations();
  
  // 상태 관리
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<ConcentrationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<ConcentrationQuestion[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, number[]>>({});
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [similarTestsState, setSimilarTestsState] = useState<any[]>([]);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);

  // 질문 섞기 함수
  const shuffleQuestions = (questionList: ConcentrationQuestion[]) => {
    const shuffled = [...questionList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 옵션 섞기 함수
  const shuffleOptions = (options: any[]) => {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 초기화
    const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    
    // 각 질문의 옵션을 셔플링
    const optionsMap: Record<number, number[]> = {};
    shuffled.forEach((question, index) => {
      const optionIndices = Array.from({ length: question.options.length }, (_, i) => i);
      optionsMap[index] = shuffleOptions(optionIndices);
    });
    setShuffledOptionsMap(optionsMap);
  }, [questions]);

  // AliExpress 제품 로드
  useEffect(() => {
    const loadAliProducts = async () => {
      try {
        // 인도네시아어일 때는 영어로 검색
        const searchLocale = locale === 'id' ? 'en' : locale;
        const response = await fetch('/api/aliexpress/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            keyword: 'concentration focus productivity',
            limit: 6,
            locale: searchLocale
          })
        });
        if (response.ok) {
          const data = await response.json();
          setAliProducts(data.products || []);
        }
      } catch (error) {
        console.error('AliExpress 제품 로드 실패:', error);
      }
    };

    if (locale !== 'ko') {
      loadAliProducts();
    }
  }, [locale]);

  // AdSense 광고 로드
  useEffect(() => {
    loadAdSense();
  }, []);

  // 유사한 테스트 로드
  useEffect(() => {
    const loadTests = async () => {
      try {
        const [similarResponse, popularResponse] = await Promise.all([
          fetch('/api/tests/similar?category=brain&limit=4'),
          fetch('/api/tests/popular?limit=5')
        ]);

        if (similarResponse.ok) {
          const similarData = await similarResponse.json();
          // API에서 자동으로 현재 테스트를 제외하므로 추가 필터링 불필요
          setSimilarTestsState(similarData.tests || []);
        }

        if (popularResponse.ok) {
          const popularData = await popularResponse.json();
          // 현재 테스트를 제외하고 필터링
          const filteredPopularTests = (popularData.tests || []).filter((test: any) => test.slug !== slug);
          setPopularTestsState(filteredPopularTests);
        }
      } catch (error) {
        console.error('테스트 로드 실패:', error);
      }
    };

    loadTests();
  }, [slug]);

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
  // 최신 테스트 slug 목록 로드
  useEffect(() => {
    const loadLatestSlugs = async () => {
      try {
        const tests = await getTests();
        const slugs = tests.slice(0, 15).map((t: any) => t.slug).filter(Boolean);
        setLatestTestSlugs(slugs);
      } catch (error) {
        console.error('Error loading latest test slugs:', error);
      }
    };
    loadLatestSlugs();
  }, []);


  // 테스트 시작
  const handleStartTest = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setDisplayPlayCount(prev => prev + 1);
    
    // 중복 호출 방지
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    
    setStarted(true);
    window.scrollTo(0, 0);
  };

  // 답변 처리
  const handleAnswer = (scores: any) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      
      // 결과 계산
      const totalScores: Record<string, number> = {
        Type1: 0,
        Type2: 0,
        Type3: 0,
        Type4: 0,
        Type5: 0,
        Type6: 0,
      };
      
      newAnswers.forEach((answer) => {
        Object.entries(answer).forEach(([type, score]) => {
          totalScores[type] = (totalScores[type] || 0) + (score as number);
        });
      });
      
      // 가장 높은 점수의 타입 찾기
      let maxScore = 0;
      let resultType = 'Type1';
      Object.entries(totalScores).forEach(([type, score]) => {
        if (score > maxScore) {
          maxScore = score;
          resultType = type;
        }
      });
      
      const concentrationResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (concentrationResult) {
        setResult(concentrationResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (concentrationResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(concentrationResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 집중력 결과:', concentrationResult.type, '→ 검색 키워드:', keywords[0]);
        searchAliExpressProducts(keywords[0], 4, locale)
          .then(products => {
            const loadTime = Date.now() - loadStartTime;
            console.log(`✅ [완료] 상품 로드 완료 (${loadTime}ms):`, products.slice(0, 2).map(p => p.product_title));
            setAliProducts(products);
          }).catch(error => {
            console.error('❌ 결과 상품 로드 실패:', error);
          });
      }
    }
  };

  // 다시 하기
  const handleRetake = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const shareText = t('concentrationTest.shareMessages.default', { type: resultTitle }) + `\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
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
        alert(t('concentrationTest.alerts.resultCopied'));
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert(t('concentrationTest.alerts.shareFailed'));
      }
    }
  };

  // 공유 함수들
  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!(window as any).Kakao || !(window as any).Kakao.isInitialized()) {
      alert(t('concentrationTest.alerts.kakaoInit'));
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareDescription = result 
      ? t('concentrationTest.shareMessages.kakao', { type: resultTitle })
      : description;
    
    try {
      (window as any).Kakao.Share.sendDefault({
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
      });
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      alert(t('concentrationTest.alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('concentrationTest.shareMessages.telegram', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('concentrationTest.shareMessages.wechat', { type: resultTitle }) + `\n\n${url}`
      : `${title}\n\n${url}`;
    
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
      alert(t('concentrationTest.alerts.wechatCopy'));
    } catch (error) {
      alert(t('concentrationTest.alerts.shareFailed'));
    }
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('concentrationTest.shareMessages.line', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('concentrationTest.shareMessages.whatsapp', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
  };

  const copyLink = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('concentrationTest.shareMessages.default', { type: resultTitle }) + `\n\n${url}`
      : `${title}\n\n${url}`;
    
    try {
      await navigator.clipboard.writeText(shareText);
      alert(t('concentrationTest.alerts.linkCopied'));
    } catch (error) {
      alert(t('concentrationTest.alerts.shareFailed'));
    }
  };

  // 결과 보기
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
              src={getThumbnailUrl(thumbnail || 'test_078_concentration.jpg')}
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

            <div className="my-6">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (타이틀-설명 사이)"
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-3">
              <p className="font-bold text-gray-700">{t('concentrationTest.startMessage.line1')}</p>
              <p>{t('concentrationTest.startMessage.line2')}</p>
              <p>{t('concentrationTest.startMessage.line3')}</p>
              <p>{t('concentrationTest.startMessage.line4')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {t('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
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
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt={t('concentrationTest.ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt={t('concentrationTest.ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt={t('concentrationTest.ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt={t('concentrationTest.ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt={t('concentrationTest.ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt={t('concentrationTest.ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {t('recommendations.similarTests') || '유사한 다른 테스트'}
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
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 상단)"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">{t('mbti.loadingResults')}</p>
        </div>

        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 하단)"
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
            🎉 {t('mbti.testCompleted')}
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
            {t('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  // 질문 화면
  if (started && !showResult) {
    const question = shuffledQuestions[currentQuestion];
    const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    
    const optionsArray = shuffledOptionsMap[currentQuestion] 
      ? shuffledOptionsMap[currentQuestion].map(index => question.options[index])
      : question.options;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                {t('mbti.progress')}
              </span>
              <span className="text-sm font-bold text-purple-600">
                {currentQuestion + 1} / {shuffledQuestions.length}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed px-4">
              {questionText}
            </h2>

            <div className="space-y-4 px-4">
              {optionsArray.map((option, index) => {
                const optionText = option.text[locale as keyof typeof option.text] || option.text.ko;
                const label = String.fromCharCode(65 + index);
                const colors = [
                  'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
                  'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
                  'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200 hover:border-blue-400',
                  'from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-green-200 hover:border-green-400',
                ];
                const bgColors = ['bg-purple-600', 'bg-pink-600', 'bg-blue-600', 'bg-green-600'];

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.scores)}
                    className={`w-full bg-gradient-to-r ${colors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-102 text-left`}
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

            {/* AdSense 광고 - 테스트 진행 마지막 답변 밑 */}
            <div className="mt-8 px-4">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (테스트 진행 마지막 답변 밑)"
              />
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt={t('concentrationTest.ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt={t('concentrationTest.ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt={t('concentrationTest.ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt={t('concentrationTest.ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt={t('concentrationTest.ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt={t('concentrationTest.ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    const resultLongDescription = result.longDescription[locale as keyof typeof result.longDescription] || result.longDescription.ko;
    const resultPros = result.pros;
    const resultCons = result.cons;
    const resultAdvice = result.advice[locale as keyof typeof result.advice] || result.advice.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {t('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 mb-2">
                {resultDescription}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {resultLongDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {t('mbti.pros')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.length > 0 ? (
                    resultPros.map((pro: any, index: number) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                      >
                        {pro[locale as keyof typeof pro] || pro.ko}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">{t('concentrationTest.ui.noData')}</span>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('mbti.cons')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.length > 0 ? (
                    resultCons.map((con: any, index: number) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                      >
                        {con[locale as keyof typeof con] || con.ko}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">{t('concentrationTest.ui.noData')}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {t('concentrationTest.ui.advice')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            {/* 어울리는 타입과 주의 타입을 1줄에 표시 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* 어울리는 타입 섹션 */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  💚 {t('concentrationTest.ui.compatibleTypes')}
                </h3>
                <div className="space-y-1">
                  {result.compatibility.best.length > 0 || result.compatibility.good.length > 0 ? (
                    <>
                      {result.compatibility.best.map((type: string) => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                        return (
                          <div key={type} className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg px-2 py-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{partner.emoji}</span>
                              <span className="text-xs font-medium text-gray-800">{partnerTitle}</span>
                            </div>
                          </div>
                        );
                      })}
                      {result.compatibility.good.map((type: string) => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                        return (
                          <div key={type} className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg px-2 py-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{partner.emoji}</span>
                              <span className="text-xs font-medium text-gray-800">{partnerTitle}</span>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <span className="text-gray-500 text-sm">{t('concentrationTest.ui.noData')}</span>
                  )}
                </div>
              </div>

              {/* 주의 타입 섹션 */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('concentrationTest.ui.warningTypes')}
                </h3>
                <div className="space-y-1">
                  {result.compatibility.careful.length > 0 || result.compatibility.difficult.length > 0 ? (
                    <>
                      {result.compatibility.careful.map((type: string) => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                        return (
                          <div key={type} className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg px-2 py-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{partner.emoji}</span>
                              <span className="text-xs font-medium text-gray-800">{partnerTitle}</span>
                            </div>
                          </div>
                        );
                      })}
                      {result.compatibility.difficult.map((type: string) => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                        return (
                          <div key={type} className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg px-2 py-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{partner.emoji}</span>
                              <span className="text-xs font-medium text-gray-800">{partnerTitle}</span>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <span className="text-gray-500 text-sm">{t('concentrationTest.ui.noData')}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                {t('mbti.shareResult')}
              </button>
            </div>

            {/* AdSense 광고 - 결과와 다시하기 버튼 사이 */}
            <div className="my-6 px-4">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (결과-다시하기 사이)"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={handleRetake}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
                {t('mbti.retakeTest')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
              >
                {t('mbti.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.shareResultWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt={t('concentrationTest.ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt={t('concentrationTest.ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt={t('concentrationTest.ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt={t('concentrationTest.ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt={t('concentrationTest.ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt={t('concentrationTest.ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>

            {/* 🎯 유사한 다른 테스트 추천 톱5 */}
            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('recommendations.similarTestsTop5') || '🎯 유사한 다른 테스트 추천 톱5'}
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
                  {t('recommendations.popularTestsTop5') || '🔥 요즘 인기 테스트 추천 톱5'}
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

  return null;
}
