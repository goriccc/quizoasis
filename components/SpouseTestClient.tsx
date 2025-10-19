'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { SpouseQuestion, SpouseResult, calculateSpouseResult, spouseResults } from '@/lib/spouseData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface SpouseTestClientProps {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  questions: SpouseQuestion[];
  results: SpouseResult[];
  questionCount: number;
  thumbnail?: string;
  playCount?: number;
  similarTests?: Array<{
    id: number;
    slug: string;
    title: string;
    thumbnail: string;
    playCount: number;
  }>;
}

export default function SpouseTestClient({ 
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
}: SpouseTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<SpouseResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<SpouseQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, any[]>>({});
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  // 답변 순서 섞기 (질문이 바뀔 때마다)
  useEffect(() => {
    if (!started) return;
    
    const questionKey = currentQuestion;
    if (!shuffledOptionsMap[questionKey]) {
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

  // 알리익스프레스 상품 미리 로드 (시작 화면용 - 일반 추천)
  useEffect(() => {
    if (locale !== 'ko' && !started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          const products = await searchAliExpressProducts('couple gifts', 4, locale);
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
              try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
              } catch (err) {
                if (!(err as Error).message.includes('already have ads')) {
                  console.error('AdSense error:', err);
                }
              }
            }
          });
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [started, showResult, showLoadingSpinner, showResultPopup]);

  // 알리익스프레스 상품 로드 (결과에 맞춰)
  useEffect(() => {
    if (result && locale !== 'ko') {
      const loadProducts = async () => {
        try {
          const keywords = getProductKeywordsForDating(result.type, locale);
          const products = await searchAliExpressProducts(keywords[0], 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [result, locale]);

  // 유사한 테스트와 인기 테스트 로드
  useEffect(() => {
    if (similarTests.length === 0) {
      const loadTests = async () => {
        try {
          const tests = await getTests();
          const filteredTests = tests.filter(test => test.slug !== slug);
          
          const similarTestsList = filteredTests
            .filter(test => test.category === 'love' || test.type === 'dating')
            .slice(0, 5)
            .map(t => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count
            }));

          const popularTestsList = filteredTests
            .sort((a, b) => b.play_count - a.play_count)
            .slice(0, 5)
            .map(t => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count
            }));

          setSimilarTestsState(similarTestsList);
          setPopularTestsState(popularTestsList);
        } catch (error) {
          console.error('테스트 로드 실패:', error);
        }
      };

      loadTests();
    }
  }, [slug, locale, similarTests]);

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
  const shuffleQuestions = (questionList: SpouseQuestion[]) => {
    const shuffled = [...questionList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

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
      const resultType = calculateSpouseResult(newAnswers);
      const spouseResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (spouseResult) {
        setResult(spouseResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (spouseResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(spouseResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 배우자 결과:', spouseResult.type, '→ 검색 키워드:', keywords[0]);
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

  // 결과 계산
  const calculateResult = (finalAnswers: any[]) => {
    const resultType = calculateSpouseResult(finalAnswers);
    const spouseResult = results.find(r => r.type === resultType);
    
    if (spouseResult) {
      setResult(spouseResult);
    }
  };

  // 다시 테스트하기
  const handleRetake = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setHasIncrementedPlayCount(false);
    setShuffledOptionsMap({});
  };

  // 결과 공유하기
  const handleShareResult = () => {
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! What's your ideal spouse type? Let's test together 💍` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの理想の配偶者タイプは？一緒にテストしましょう 💍` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的理想配偶类型是什么？一起来测试吧 💍` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的理想配偶類型是什麼？一起來測試吧 💍` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa tipe pasangan ideal Anda? Mari test bersama 💍` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Kiểu người bạn đời lý tưởng của bạn là gì? Hãy test cùng nhau 💍` :
        t('spouseTest.resultShareMessage', { type: resultTitle })
      : title;
    
    return shareText;
  };

  // 소셜 공유 함수들
  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareDescription = result 
      ? t('spouseTest.resultShareMessage', { type: resultTitle })
      : description;
    
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
            title: '테스트 하러 가기',
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error('카카오톡 공유 오류:', error);
      alert('카카오톡 공유 중 오류가 발생했습니다.');
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? t('spouseTest.resultShareMessage', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? `${t('spouseTest.resultShareMessage', { type: resultTitle })}\n\n${url}`
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
      alert('링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.');
    } catch (error) {
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareText = result 
      ? encodeURIComponent(t('spouseTest.resultShareMessage', { type: resultTitle }))
      : encodeURIComponent(title);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert('링크가 복사되었습니다!');
  };

  // 결과 팝업 닫기
  const handleCloseResultPopup = () => {
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
              src={getThumbnailUrl(thumbnail || 'test_035_ideal_spouse_type.jpg')}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
              priority
            />
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
                label="AdSense 광고 영역 (타이틀-설명 사이)"
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
              <p className="font-bold text-gray-700">{t('spouseTest.startMessage.title')}</p>
              <p>{t('spouseTest.startMessage.line1')}</p>
              <p>{t('spouseTest.startMessage.line2')}</p>
              <p>{t('spouseTest.startMessage.line3')}</p>
              <p>{t('spouseTest.startMessage.line4')}</p>
              <p>{t('spouseTest.startMessage.line5')}</p>
              <p>{t('spouseTest.startMessage.line6')}</p>
              <p>{t('spouseTest.startMessage.line7')}</p>
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
              {t('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale) })}
            </p>

            <div className="max-w-[680px] mx-auto mb-6">
              {locale === 'ko' ? (
                <iframe 
                  src="https://ads-partners.coupang.com/widgets.html?id=925074&template=carousel&trackingCode=AF6775264&subId=&width=680&height=140&tsource=" 
                  width="680" 
                  height="140" 
                  frameBorder="0" 
                  scrolling="no" 
                  referrerPolicy="unsafe-url"
                  className="w-full"
                />
              ) : aliProducts.length > 0 ? (
                <ProductRecommendations 
                  products={aliProducts}
                  title={locale === 'ja' ? '関連商品' :
                         locale === 'zh-CN' ? '相关产品' :
                         locale === 'zh-TW' ? '相關產品' :
                         locale === 'vi' ? 'Sản phẩm liên quan' :
                         locale === 'id' ? 'Produk terkait' :
                         'Related Products'}
                  locale={locale}
                />
              ) : (
                <div className="flex justify-center">
                  <a 
                    href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" 
                    target="_parent"
                  >
                    <Image 
                      width={300} 
                      height={250} 
                      src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                      alt="AliExpress"
                      style={{ maxWidth: '300px', height: 'auto' }}
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" />
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
            label="AdSense 광고 영역 (로딩 스피너 상단)"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">{t('mbti.loadingResults')}</p>
        </div>

        {/* AdSense 광고 - 로딩 스피너 하단 */}
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
            {locale === 'ko' ? (
              <div>
                <p className="text-xs text-gray-500 text-center mb-3">
                  쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다
                </p>
                <div className="flex justify-center">
                <iframe 
                  src="https://ads-partners.coupang.com/widgets.html?id=923499&template=carousel&trackingCode=AF6775264&subId=&width=300&height=250&tsource=" 
                  width="300" 
                  height="250" 
                  frameBorder="0" 
                  scrolling="no" 
                  referrerPolicy="unsafe-url"
                  className="rounded-lg"
                />
                </div>
              </div>
            ) : aliProducts.length > 0 ? (
              <div className="max-w-sm mx-auto">
                <ProductRecommendations 
                  products={aliProducts.slice(0, 3)}
                  title=""
                  locale={locale}
                />
              </div>
            ) : (
              <div className="flex justify-center">
                <a 
                  href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" 
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
            )}
          </div>

          <button
            onClick={handleCloseResultPopup}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
            {t('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    
    // 다국어 쉼표 처리: 영어 쉼표+공백, 일본어 쉼표, 중국어 쉼표 모두 지원
    const splitByCommas = (text: string) => {
      // 쉼표 뒤 공백을 포함한 패턴으로 분할
      return text.split(/,\s+|，\s*|、\s*/).map(item => item.trim()).filter(item => item.length > 0);
    };
    
    const resultCharacteristics = splitByCommas(result.characteristics[locale as keyof typeof result.characteristics] || result.characteristics.ko);
    const resultIdealJob = splitByCommas(result.idealJob[locale as keyof typeof result.idealJob] || result.idealJob.ko);
    const resultMarriageLife = splitByCommas(result.marriageLife[locale as keyof typeof result.marriageLife] || result.marriageLife.ko);
    const resultCaution = splitByCommas(result.caution[locale as keyof typeof result.caution] || result.caution.ko);

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
              <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
              <p className="text-base text-gray-600 leading-relaxed mt-4">
                {result.type === 'Type1' && (locale === 'ko' ? 
                  "당신에게는 안정적이고 신뢰할 수 있는 배우자가 잘 맞습니다. 계획적이고 책임감 있는 성격으로 가정을 든든하게 지켜줄 수 있는 사람입니다. 경제적 안정을 중시하며 미래를 계획적으로 준비하는 것을 좋아합니다. 이런 성향은 평생을 함께할 동반자에게 큰 안정감을 줄 것입니다." :
                  locale === 'en' ? "You need a stable and reliable spouse. Someone with a planned and responsible personality who can firmly protect the family. They value economic stability and like to prepare for the future systematically. This tendency will give great stability to a lifelong companion." :
                  locale === 'ja' ? "あなたには安定していて信頼できる配偶者がよく合います。計画的で責任感のある性格で、家庭をしっかりと守ってくれる人です。経済的安定を重視し、未来を計画的に準備することを好みます。この傾向は生涯を共にするパートナーに大きな安定感を与えるでしょう。" :
                  locale === 'zh-CN' ? "你需要一个稳定可靠的配偶。一个有计划和负责任的性格，能够坚定地保护家庭的人。他们重视经济稳定，喜欢系统地规划未来。这种倾向会给终身伴侣带来很大的稳定感。" :
                  locale === 'zh-TW' ? "你需要一個穩定可靠的配偶。一個有計劃和負責任的性格，能夠堅定地保護家庭的人。他們重視經濟穩定，喜歡系統地規劃未來。這種傾向會給終身伴侶帶來很大的穩定感。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang stabil dan dapat dipercaya. Seseorang dengan kepribadian yang terencana dan bertanggung jawab yang dapat melindungi keluarga dengan kuat. Mereka menghargai stabilitas ekonomi dan suka mempersiapkan masa depan secara sistematis. Kecenderungan ini akan memberikan stabilitas besar kepada pendamping seumur hidup." :
                  "Bạn cần một người bạn đời ổn định và đáng tin cậy. Một người có tính cách có kế hoạch và có trách nhiệm, có thể bảo vệ gia đình một cách vững chắc. Họ coi trọng sự ổn định kinh tế và thích chuẩn bị cho tương lai một cách có hệ thống. Xu hướng này sẽ mang lại sự ổn định lớn cho người bạn đời suốt đời."
                )}
                {result.type === 'Type2' && (locale === 'ko' ? 
                  "당신에게는 열정적이고 활기찬 배우자가 잘 맞습니다. 매일이 설레고 새로운 경험을 추구하는 파트너를 원합니다. 여행, 액티비티, 문화 활동 등 다양한 경험을 함께 나누며 추억을 만드는 사람이 이상적입니다." :
                  locale === 'en' ? "You need a passionate and energetic spouse. You want a partner who is excited every day and pursues new experiences. Someone who shares various experiences like travel, activities, and cultural activities to create memories together is ideal." :
                  locale === 'ja' ? "あなたには情熱的で活気のある配偶者がよく合います。毎日がドキドキして新しい経験を追求するパートナーを求めています。旅行、アクティビティ、文化活動など様々な経験を共有し、思い出を作る人が理想的です。" :
                  locale === 'zh-CN' ? "你需要一个热情充满活力的配偶。你希望一个每天都令人兴奋并追求新体验的伴侣。一个分享旅行、活动、文化活动等各种体验并共同创造回忆的人是理想的。" :
                  locale === 'zh-TW' ? "你需要一個熱情充滿活力的配偶。你希望一個每天都令人興奮並追求新體驗的伴侶。一個分享旅行、活動、文化活動等各種體驗並共同創造回憶的人是理想的。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang penuh gairah dan energik. Anda menginginkan pasangan yang bersemangat setiap hari dan mengejar pengalaman baru. Seseorang yang berbagi berbagai pengalaman seperti perjalanan, aktivitas, dan kegiatan budaya untuk menciptakan kenangan bersama adalah ideal." :
                  "Bạn cần một người bạn đời đầy đam mê và năng động. Bạn muốn một người bạn đời thú vị mỗi ngày và theo đuổi những trải nghiệm mới. Một người chia sẻ các trải nghiệm đa dạng như du lịch, hoạt động và hoạt động văn hóa để tạo ra kỷ niệm cùng nhau là lý tưởng."
                )}
                {result.type === 'Type3' && (locale === 'ko' ? 
                  "당신에게는 지적이고 사려 깊은 배우자가 잘 맞습니다. 깊이 있는 대화와 정신적 교감을 중시하는 파트너를 원합니다. 책, 예술, 문화 활동 등을 통해 함께 성장하고 지적 자극을 주는 사람이 이상적입니다." :
                  locale === 'en' ? "You need an intellectual and thoughtful spouse. You want a partner who values deep conversations and spiritual connection. Someone who grows together through books, art, cultural activities and provides intellectual stimulation is ideal." :
                  locale === 'ja' ? "あなたには知的で思慮深い配偶者がよく合います。深い対話と精神的な交流を重視するパートナーを求めています。本、芸術、文化活動などを通じて一緒に成長し、知的刺激を与える人が理想的です。" :
                  locale === 'zh-CN' ? "你需要一个智慧深思的配偶。你希望一个重视深度对话和精神交流的伴侣。一个通过书籍、艺术、文化活动等共同成长并提供智力刺激的人是理想的。" :
                  locale === 'zh-TW' ? "你需要一個智慧深思的配偶。你希望一個重視深度對話和精神交流的伴侶。一個通過書籍、藝術、文化活動等共同成長並提供智力刺激的人是理想的。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang intelektual dan bijaksana. Anda menginginkan pasangan yang menghargai percakapan mendalam dan koneksi spiritual. Seseorang yang tumbuh bersama melalui buku, seni, kegiatan budaya dan memberikan stimulasi intelektual adalah ideal." :
                  "Bạn cần một người bạn đời trí tuệ và sâu sắc. Bạn muốn một người bạn đời coi trọng những cuộc trò chuyện sâu sắc và kết nối tinh thần. Một người cùng phát triển thông qua sách, nghệ thuật, hoạt động văn hóa và mang lại sự kích thích trí tuệ là lý tưởng."
                )}
                {result.type === 'Type4' && (locale === 'ko' ? 
                  "당신에게는 독립적이고 자유로운 배우자가 잘 맞습니다. 서로의 개성과 자유를 존중하는 파트너를 원합니다. 각자의 공간과 시간을 가지면서도 서로를 이해하고 지지하는 사람이 이상적입니다." :
                  locale === 'en' ? "You need an independent and free spouse. You want a partner who respects each other's individuality and freedom. Someone who has their own space and time while understanding and supporting each other is ideal." :
                  locale === 'ja' ? "あなたには独立していて自由な配偶者がよく合います。お互いの個性と自由を尊重するパートナーを求めています。それぞれの空間と時間を持ちながらも、お互いを理解し支える人が理想的です。" :
                  locale === 'zh-CN' ? "你需要一个独立自由的配偶。你希望一个尊重彼此个性和自由的伴侣。一个拥有自己的空间和时间，同时理解和支持彼此的人是理想的。" :
                  locale === 'zh-TW' ? "你需要一個獨立自由的配偶。你希望一個尊重彼此個性和自由的伴侶。一個擁有自己的空間和時間，同時理解和支持彼此的人是理想的。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang mandiri dan bebas. Anda menginginkan pasangan yang menghormati individualitas dan kebebasan masing-masing. Seseorang yang memiliki ruang dan waktu sendiri sambil saling memahami dan mendukung adalah ideal." :
                  "Bạn cần một người bạn đời độc lập và tự do. Bạn muốn một người bạn đời tôn trọng cá tính và tự do của nhau. Một người có không gian và thời gian riêng trong khi hiểu và hỗ trợ lẫn nhau là lý tưởng."
                )}
                {result.type === 'Type5' && (locale === 'ko' ? 
                  "당신에게는 가정적이고 따뜻한 배우자가 잘 맞습니다. 집에서 함께하는 시간을 소중히 여기고 가족을 최우선으로 하는 파트너를 원합니다. 요리, 육아, 집 꾸미기 등 일상의 행복을 함께 만드는 사람이 이상적입니다." :
                  locale === 'en' ? "You need a family-oriented and warm spouse. You want a partner who values time spent together at home and prioritizes family. Someone who creates daily happiness together through cooking, parenting, home decoration, etc. is ideal." :
                  locale === 'ja' ? "あなたには家庭的で温かい配偶者がよく合います。家で一緒に過ごす時間を大切にし、家族を最優先にするパートナーを求めています。料理、育児、家の装飾など、日常の幸せを一緒に作る人が理想的です。" :
                  locale === 'zh-CN' ? "你需要一个家庭导向温暖的配偶。你希望一个珍惜在家共度时光并优先考虑家庭的伴侣。一个通过烹饪、育儿、家居装饰等共同创造日常幸福的人是理想的。" :
                  locale === 'zh-TW' ? "你需要一個家庭導向溫暖的配偶。你希望一個珍惜在家共度時光並優先考慮家庭的伴侶。一個通過烹飪、育兒、家居裝飾等共同創造日常幸福的人是理想的。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang berorientasi keluarga dan hangat. Anda menginginkan pasangan yang menghargai waktu yang dihabiskan bersama di rumah dan memprioritaskan keluarga. Seseorang yang menciptakan kebahagiaan sehari-hari bersama melalui memasak, mengasuh anak, dekorasi rumah, dll. adalah ideal." :
                  "Bạn cần một người bạn đời hướng gia đình và ấm áp. Bạn muốn một người bạn đời coi trọng thời gian ở nhà và ưu tiên gia đình. Một người tạo ra hạnh phúc hàng ngày cùng nhau thông qua nấu ăn, nuôi dạy con, trang trí nhà cửa, v.v. là lý tưởng."
                )}
                {result.type === 'Type6' && (locale === 'ko' ? 
                  "당신에게는 성장 지향적이고 야심찬 배우자가 잘 맞습니다. 서로의 목표를 응원하고 함께 발전하는 파트너를 원합니다. 경력, 취미, 개인 발전 등 모든 영역에서 서로를 격려하고 성장시키는 사람이 이상적입니다." :
                  locale === 'en' ? "You need a growth-oriented and ambitious spouse. You want a partner who supports each other's goals and develops together. Someone who encourages and helps each other grow in all areas like career, hobbies, personal development, etc. is ideal." :
                  locale === 'ja' ? "あなたには成長志向で野心的な配偶者がよく合います。お互いの目標を応援し、一緒に発展するパートナーを求めています。キャリア、趣味、個人の発展など、すべての分野でお互いを励まし成長させる人が理想的です。" :
                  locale === 'zh-CN' ? "你需要一个成长导向有野心的配偶。你希望一个支持彼此目标并共同发展的伴侣。一个在职业、爱好、个人发展等所有领域相互鼓励和成长的人是理想的。" :
                  locale === 'zh-TW' ? "你需要一個成長導向有野心的配偶。你希望一個支持彼此目標並共同發展的伴侶。一個在職業、愛好、個人發展等所有領域相互鼓勵和成長的人是理想的。" :
                  locale === 'id' ? "Anda membutuhkan pasangan yang berorientasi pertumbuhan dan ambisius. Anda menginginkan pasangan yang mendukung tujuan masing-masing dan berkembang bersama. Seseorang yang saling mendorong dan membantu tumbuh di semua bidang seperti karier, hobi, pengembangan pribadi, dll. adalah ideal." :
                  "Bạn cần một người bạn đời hướng phát triển và đầy tham vọng. Bạn muốn một người bạn đời hỗ trợ mục tiêu của nhau và phát triển cùng nhau. Một người khuyến khích và giúp nhau phát triển trong tất cả các lĩnh vực như sự nghiệp, sở thích, phát triển cá nhân, v.v. là lý tưởng."
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🎯 {t('mbti.characteristics')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCharacteristics.map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-pink-100 to-rose-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  💼 {t('mbti.idealJob')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultIdealJob.map((job, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-cyan-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🏠 {t('mbti.marriageLife')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultMarriageLife.map((life, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {life}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('mbti.caution')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCaution.map((caution, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {caution}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 궁합 분석 */}
            {result.compatibility && (
              <div className="mb-3">
                <div className="grid grid-cols-2 gap-3">
                  {result.compatibility.best && result.compatibility.best.length > 0 && (
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border-l-4 border-red-400">
                      <div className="space-y-1">
                        {result.compatibility.best.map(type => {
                          const partner = spouseResults.find(r => r.type === type);
                          if (!partner) return null;
                          const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                          return (
                            <div key={type}>
                              <div className="text-base font-bold text-gray-800 mb-1">
                                💖 {locale === 'ko' ? '최고 궁합' : locale === 'en' ? 'Best Match' : locale === 'ja' ? '最高の相性' : locale === 'zh-CN' ? '最佳匹配' : locale === 'zh-TW' ? '最佳匹配' : locale === 'id' ? 'Kecocokan Terbaik' : 'Kết hợp tốt nhất'}: {partnerTitle}
                              </div>
                              <div className="text-sm text-gray-700">
                                {locale === 'ko' ? '깊이 있는 완벽한 소울메이트' : 
                                 locale === 'en' ? 'Perfect soulmate with deep connection' :
                                 locale === 'ja' ? '深い完璧なソウルメイト' :
                                 locale === 'zh-CN' ? '深度完美的灵魂伴侣' :
                                 locale === 'zh-TW' ? '深度完美的靈魂伴侶' :
                                 locale === 'id' ? 'Soulmate sempurna dengan koneksi mendalam' :
                                 'Người bạn đời hoàn hảo với kết nối sâu sắc'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {result.compatibility.good && result.compatibility.good.length > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-l-4 border-blue-400">
                      <div className="space-y-1">
                        {result.compatibility.good.map(type => {
                          const partner = spouseResults.find(r => r.type === type);
                          if (!partner) return null;
                          const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                          return (
                            <div key={type}>
                              <div className="text-base font-bold text-gray-800 mb-1">
                                😊 {locale === 'ko' ? '좋은 궁합' : locale === 'en' ? 'Good Match' : locale === 'ja' ? '良い相性' : locale === 'zh-CN' ? '良好匹配' : locale === 'zh-TW' ? '良好匹配' : locale === 'id' ? 'Kecocokan Baik' : 'Kết hợp tốt'}: {partnerTitle}
                              </div>
                              <div className="text-sm text-gray-700">
                                {locale === 'ko' ? '성숙하고 안정적' : 
                                 locale === 'en' ? 'Mature and stable' :
                                 locale === 'ja' ? '成熟して安定' :
                                 locale === 'zh-CN' ? '成熟稳定' :
                                 locale === 'zh-TW' ? '成熟穩定' :
                                 locale === 'id' ? 'Matang dan stabil' :
                                 'Trưởng thành và ổn định'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {result.compatibility.careful && result.compatibility.careful.length > 0 && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-400">
                      <div className="space-y-1">
                        {result.compatibility.careful.map(type => {
                          const partner = spouseResults.find(r => r.type === type);
                          if (!partner) return null;
                          const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                          return (
                            <div key={type}>
                              <div className="text-base font-bold text-gray-800 mb-1">
                                ⚠️ {locale === 'ko' ? '주의 필요' : locale === 'en' ? 'Need Caution' : locale === 'ja' ? '注意必要' : locale === 'zh-CN' ? '需要注意' : locale === 'zh-TW' ? '需要注意' : locale === 'id' ? 'Perlu Hati-hati' : 'Cần thận trọng'}: {partnerTitle}
                              </div>
                              <div className="text-sm text-gray-700">
                                {locale === 'ko' ? '이성 vs 감성 균형 필요' : 
                                 locale === 'en' ? 'Need balance between reason and emotion' :
                                 locale === 'ja' ? '理性vs感情のバランスが必要' :
                                 locale === 'zh-CN' ? '需要理性与情感的平衡' :
                                 locale === 'zh-TW' ? '需要理性與情感的平衡' :
                                 locale === 'id' ? 'Perlu keseimbangan antara logika dan emosi' :
                                 'Cần cân bằng giữa lý trí và cảm xúc'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {result.compatibility.difficult && result.compatibility.difficult.length > 0 && (
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border-l-4 border-gray-400">
                      <div className="space-y-1">
                        {result.compatibility.difficult.map(type => {
                          const partner = spouseResults.find(r => r.type === type);
                          if (!partner) return null;
                          const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                          return (
                            <div key={type}>
                              <div className="text-base font-bold text-gray-800 mb-1">
                                ❌ {locale === 'ko' ? '어려운 궁합' : locale === 'en' ? 'Difficult Match' : locale === 'ja' ? '難しい相性' : locale === 'zh-CN' ? '困难匹配' : locale === 'zh-TW' ? '困難匹配' : locale === 'id' ? 'Kecocokan Sulit' : 'Kết hợp khó'}: {partnerTitle}
                              </div>
                              <div className="text-sm text-gray-700">
                                {locale === 'ko' ? '지적 vs 실용 온도차' : 
                                 locale === 'en' ? 'Intellectual vs practical temperature difference' :
                                 locale === 'ja' ? '知的vs実用的温度差' :
                                 locale === 'zh-CN' ? '智慧与实用的温差' :
                                 locale === 'zh-TW' ? '智慧與實用的溫差' :
                                 locale === 'id' ? 'Perbedaan suhu intelektual vs praktis' :
                                 'Sự khác biệt nhiệt độ giữa trí tuệ và thực tế'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

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
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" />
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

  // 진행 화면
  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;

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
                <Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}