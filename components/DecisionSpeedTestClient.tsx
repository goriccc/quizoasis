'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { DecisionSpeedQuestion, DecisionSpeedResult, calculateDecisionSpeedResult } from '@/lib/decisionSpeedData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface DecisionSpeedTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: DecisionSpeedQuestion[];
  results: DecisionSpeedResult[];
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

export default function DecisionSpeedTestClient({ 
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
}: DecisionSpeedTestClientProps) {
  const t = useTranslations('decisionSpeedTest');
  const tGlobal = useTranslations();
  
  // Locale 매핑 함수: zh-CN -> zh, zh-TW -> zhTW
  const mapLocale = (loc: string): string => {
    if (loc === 'zh-CN') return 'zh';
    if (loc === 'zh-TW') return 'zhTW';
    return loc;
  };
  
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<DecisionSpeedResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<DecisionSpeedQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  // 알리익스프레스 상품 미리 로드
  useEffect(() => {
    if (locale !== 'ko' && !started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          // 언어별 키워드 설정
          const keywords: Record<string, string> = {
            'en': 'gifts',
            'ja': '性格テスト',
            'zh-CN': '性格测试',
            'zh-TW': '性格測試',
            'vi': 'kiểm tra tính cách',
            'id': 'gifts'
          };
          
          const keyword = keywords[locale] || 'gifts';
          const products = await searchAliExpressProducts(keyword, 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [locale, started, aliProducts.length]);

  // 유사한 테스트와 인기 테스트 로드
  useEffect(() => {
    if (similarTests.length === 0) {
      const loadTests = async () => {
        try {
          const allTests = await getTests();
          const currentTest = allTests.find((t: any) => t.slug === slug);
          
          if (!currentTest) {
            const latestTests = allTests
              .filter((t: any) => t.slug !== slug)
              .slice(0, 10)
              .map((t: any) => ({
                id: t.id,
                slug: t.slug,
                title: t.title[locale] || t.title.ko,
                thumbnail: t.thumbnail,
                playCount: t.play_count
              }));
            
            setSimilarTestsState(latestTests.slice(0, 5));
            setPopularTestsState(latestTests.slice(5, 10));
            return;
          }

          const currentTestTags = typeof currentTest.tags === 'object' && !Array.isArray(currentTest.tags)
            ? currentTest.tags[locale] || currentTest.tags.ko || []
            : currentTest.tags || [];

          const similarTestsList = allTests
            .filter((t: any) => t.slug !== slug)
            .filter((t: any) => {
              const otherTestTags = typeof t.tags === 'object' && !Array.isArray(t.tags)
                ? t.tags[locale] || t.tags.ko || []
                : t.tags || [];
              
              return Array.isArray(currentTestTags) && Array.isArray(otherTestTags) &&
                currentTestTags.some((tag: string) => otherTestTags.includes(tag));
            })
            .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5)
            .map((t: any) => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count
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

  // 로딩 스피너 처리
  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  // 질문 섞기
  const shuffleQuestions = (questionList: DecisionSpeedQuestion[]) => {
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
    
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    
    setStarted(true);
    window.scrollTo(0, 0);
  };

  // 답변 처리
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      
      // 결과 계산
      const calculatedResult = calculateDecisionSpeedResult(newAnswers);
      setResult(calculatedResult);
    }
    
    window.scrollTo(0, 0);
  };

  // 다시 하기
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
    window.scrollTo(0, 0);
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const mappedLocale = mapLocale(locale);
    const resultTitle = result.title[mappedLocale as keyof typeof result.title] || result.title.ko;
    const shareMessage = t('shareMessages.default', { type: resultTitle });
    const shareText = `${shareMessage}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
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
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const mappedLocale = mapLocale(locale);
    const resultTitle = result ? (result.title[mappedLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result 
      ? t('shareMessages.wechat', { type: resultTitle })
      : title;
    const shareText = `${shareMessage}\n\n${url}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }
      }
    }
    
    try {
      await navigator.clipboard.writeText(url);
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const mappedLocale = mapLocale(locale);
    const resultTitle = result ? (result.title[mappedLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result 
      ? t('shareMessages.whatsapp', { type: resultTitle })
      : title;
    const shareText = encodeURIComponent(shareMessage);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    const mappedLocale = mapLocale(locale);
    const resultTitle = result ? (result.title[mappedLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareDescription = result 
      ? t('shareMessages.kakao', { type: resultTitle })
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
            title: t('ui.testButton'),
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
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const mappedLocale = mapLocale(locale);
    const resultTitle = result ? (result.title[mappedLocale as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result 
      ? t('shareMessages.telegram', { type: resultTitle })
      : title;
    const text = encodeURIComponent(shareMessage);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
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
              src={getThumbnailUrl(thumbnail || 'test_213_decision_speed.jpg')}
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

            <div className="my-6">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역"
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
              <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
              <p>{t('startMessage.line2')}</p>
              <p>{t('startMessage.line3')}</p>
              <p>{t('startMessage.line4')}</p>
              <p>{t('startMessage.line5')}</p>
              <p>{t('startMessage.line6')}</p>
              <p>{t('startMessage.line7')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('ui.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
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
                  {tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
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
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역"
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
            label="AdSense 광고 영역"
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
    const mappedLocale = mapLocale(locale);
    const resultTitle = result.title[mappedLocale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[mappedLocale as keyof typeof result.description] || result.description.ko;
    const resultCharacteristics = result.characteristics[mappedLocale as keyof typeof result.characteristics] || result.characteristics.ko;
    const resultStrengths = result.strengths[mappedLocale as keyof typeof result.strengths] || result.strengths.ko;
    const resultWeaknesses = result.weaknesses[mappedLocale as keyof typeof result.weaknesses] || result.weaknesses.ko;
    const resultAdvice = result.advice[mappedLocale as keyof typeof result.advice] || result.advice.ko;
    const resultSpeed = result.decisionSpeed[mappedLocale as keyof typeof result.decisionSpeed] || result.decisionSpeed.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {tGlobal('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base font-semibold text-gray-700 leading-relaxed mb-3">
                {resultDescription}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                {resultCharacteristics}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {t('result.strengths')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultStrengths.map((strength, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('result.weaknesses')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultWeaknesses.map((weakness, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                📊 {t('result.decisionSpeed')}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                  {resultSpeed}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {t('result.advice')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                {tGlobal('mbti.shareResult')}
              </button>
            </div>

            <div className="my-6 px-4">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역"
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
                  {tGlobal('recommendations.similarTestsTop5') || '🎯 유사한 다른 테스트 추천 톱5'}
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

            {popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {tGlobal('recommendations.popularTestsTop5') || '🔥 요즘 인기 테스트 추천 톱5'}
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

  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const mappedLocale = mapLocale(locale);
  const questionText = question.question[mappedLocale as keyof typeof question.question] || question.question.ko;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {tGlobal('mbti.progress')}
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
            {Object.entries(question.options).map(([key, option], index) => {
              const optionText = option[mappedLocale as keyof typeof option] || option.ko;
              const label = String.fromCharCode(65 + index);
              const colors = [
                'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
                'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
              ];
              const bgColors = ['bg-purple-600', 'bg-pink-600'];

              return (
                <button
                  key={key}
                  onClick={() => handleAnswer(key)}
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

          <div className="mt-8 px-4">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label="AdSense 광고 영역"
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

