'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { LifePrioritiesQuestion, LifePrioritiesResult, calculateLifePrioritiesResult } from '../lib/lifePrioritiesData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface LifePrioritiesTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: LifePrioritiesQuestion[];
  results: LifePrioritiesResult[];
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

export default function LifePrioritiesTestClient({ 
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
}: LifePrioritiesTestClientProps) {
  // locale 매핑 (데이터 파일의 키와 일치)
  const getLocaleKey = (locale: string): string => {
    return locale;
  };
  
  const localeKey = getLocaleKey(locale);
  
  const t = useTranslations('lifePrioritiesTest');
  const tGlobal = useTranslations();
  
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<LifePrioritiesResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<LifePrioritiesQuestion[]>(questions);
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
      // Fisher-Yates 셔플 알고리즘
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
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense 광고 로드 오류:', error);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentQuestion, showResult]);

  // 유사한 테스트 로드
  useEffect(() => {
    const loadSimilarTests = async () => {
      try {
        const allTests = await getTests();
        const filteredTests = allTests.filter((test: any) => {
          if (test.slug === slug) return false;
          
          // tags가 배열인지 확인하고, 아니면 파싱 시도
          let tagsArray = test.tags;
          if (typeof tagsArray === 'string') {
            try {
              tagsArray = JSON.parse(tagsArray);
            } catch (e) {
              console.warn('Tags 파싱 실패:', test.slug, test.tags);
              return false;
            }
          }
          
          // 배열이 아니면 스킵
          if (!Array.isArray(tagsArray)) {
            return false;
          }
          
          return tagsArray.includes('심리') || tagsArray.includes('관계');
        });
        
        // 플레이 카운트 기준으로 정렬하고 상위 5개 선택
        const sortedTests = filteredTests
          .sort((a: any, b: any) => b.play_count - a.play_count)
          .slice(0, 5);
        
        setSimilarTestsState(sortedTests);
      } catch (error) {
        console.error('유사한 테스트 로드 실패:', error);
      }
    };

    loadSimilarTests();
  }, [slug]);

  // 인기 테스트 로드
  useEffect(() => {
    const loadPopularTests = async () => {
      try {
        const allTests = await getTests();
        const filteredTests = allTests.filter((test: any) => test.slug !== slug);
        
        // 플레이 카운트 기준으로 정렬하고 상위 5개 선택
        const sortedTests = filteredTests
          .sort((a: any, b: any) => b.play_count - a.play_count)
          .slice(0, 5);
        
        setPopularTestsState(sortedTests);
      } catch (error) {
        console.error('인기 테스트 로드 실패:', error);
      }
    };

    loadPopularTests();
  }, [slug]);

  const shuffleQuestions = (questionList: LifePrioritiesQuestion[]) => {
    const shuffled = [...questionList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartTest = async () => {
    setShuffledQuestions(shuffleQuestions(questions));
    
    if (!hasIncrementedPlayCount) {
      try {
        await incrementPlayCount(slug);
        setHasIncrementedPlayCount(true);
        setDisplayPlayCount(prev => prev + 1);
      } catch (error) {
        console.error('플레이 카운트 증가 실패:', error);
      }
    }
    
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (scores: any) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 테스트 완료
      const calculatedResult = calculateLifePrioritiesResult(newAnswers);
      const lifePrioritiesResult = results.find(r => r.type === calculatedResult);
      if (lifePrioritiesResult) {
        setResult(lifePrioritiesResult);
      }
      setShowLoadingSpinner(true);
      
      setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 2000);
    }
    
    window.scrollTo(0, 0);
  };

  const shareToKakao = () => {
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[localeKey as keyof typeof result.title] || result.title.ko) : '';
    const shareDescription = result 
      ? t('shareMessages.kakao', { type: resultTitle })
      : description;
    
    try {
      // @ts-ignore
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareDescription,
          imageUrl: getThumbnailUrl(thumbnail || 'test_205_life_priorities.jpg'),
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        buttons: [
          {
            title: t('ui.startTest'),
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
    const resultTitle = result ? (result.title[localeKey as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result 
      ? t('shareMessages.telegram', { type: resultTitle })
      : description;
    const text = encodeURIComponent(shareMessage);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const handleRetake = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setShuffledOptionsMap({});
    setHasIncrementedPlayCount(false);
    window.scrollTo(0, 0);
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = result.title[localeKey as keyof typeof result.title] || result.title.ko;
    const shareMessage = t('shareMessages.default', { type: resultTitle });
    const shareText = `${shareMessage}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('공유 오류:', error);
          try {
            await navigator.clipboard.writeText(shareText);
            alert(t('alerts.resultCopied'));
          } catch (err) {
            alert(t('alerts.shareFailed'));
          }
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('alerts.resultCopied'));
      } catch (err) {
        alert(t('alerts.shareFailed'));
      }
    }
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[localeKey as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result ? t('shareMessages.line', { type: resultTitle }) : description;
    const text = encodeURIComponent(shareMessage);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[localeKey as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result ? t('shareMessages.wechat', { type: resultTitle }) : description;
    const shareText = `${shareMessage}\n\n${url}`;
    
    // Web Share API 사용 (모바일에서 WeChat 포함한 설치된 앱 목록 표시)
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('공유 오류:', error);
          // Web Share API 실패 시 클립보드에 복사
          navigator.clipboard.writeText(shareText);
          alert(t('alerts.wechatCopy'));
        }
      }
    } else {
      // Web Share API 미지원 시 클립보드에 복사
      navigator.clipboard.writeText(shareText);
      alert(t('alerts.wechatCopy'));
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[localeKey as keyof typeof result.title] || result.title.ko) : '';
    const shareMessage = result ? t('shareMessages.whatsapp', { type: resultTitle }) : description;
    const shareText = encodeURIComponent(shareMessage);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  // 팝업에서 결과 보기
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

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
          <p className="mt-4 text-lg text-gray-700">{t('result.analyzing')}</p>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
🎉 {t('result.completed')}
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
{t('result.showResult')}
          </button>
        </div>
      </div>
    );
  }

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_205_life_priorities.jpg')}
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

            <div className="text-gray-600 mb-6 leading-relaxed text-center whitespace-pre-line">
              <p className="font-bold">{t('startMessage.line1')}</p>
              <p>{t('startMessage.line2')}</p>
              <p>{t('startMessage.line3')}</p>
              <p>{t('startMessage.line4')}</p>
              <p>{t('startMessage.line5')}</p>
              <p>{t('startMessage.line6')}</p>
              <p>{t('startMessage.line7')}</p>
              <p>{t('startMessage.line8')}</p>
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
              총 {formatPlayCount(displayPlayCount, locale as any)}{t('ui.participants')}
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
  {t('ui.shareWithFriends')}
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
              <div className="pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test) => {
                    const testTitle = typeof test.title === 'object' ? (test.title as any)[locale] || (test.title as any).ko : test.title;
                    return (
                      <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                        <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                          <div className="relative aspect-video">
                            <Image
                              src={getThumbnailUrl(test.thumbnail)}
                              alt={testTitle}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-end gap-3">
                              <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                                {testTitle}
                              </h3>
                              <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                                <Play size={14} />
                                <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale as any)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const fullDescription = result.description[localeKey as keyof typeof result.description];
    const shortDescription = fullDescription.split('\n')[0];
    const longDescription = fullDescription.split('\n').slice(1).join('\n');
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* 결과 헤더 */}
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {t('result.yourResult')}
            </h2>
            <div className="text-6xl mb-3">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              {result.title[localeKey as keyof typeof result.title]}
            </h1>
            <p className="text-base font-semibold text-gray-700 leading-relaxed mb-3">
              {shortDescription}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {longDescription}
            </p>
          </div>

          {/* 핵심 가치 */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3">
              💎 {t('result.coreValues')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.coreValues[localeKey as keyof typeof result.coreValues].split(/[,，、]\s*/).map((value, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* 강점과 약점 */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                ✅ {t('result.strengths')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {strength[localeKey as keyof typeof strength] || strength.ko}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                ⚠️ {t('result.weaknesses')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.weaknesses.map((weakness, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {weakness[localeKey as keyof typeof weakness] || weakness.ko}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 조언 */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3">
              💡 {t('result.advice')}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {result.advice[localeKey as keyof typeof result.advice]}
            </p>
          </div>

          {/* 어울리는 타입 */}
          {result.compatibility && (
            <div className="space-y-3 mb-3">
              {result.compatibility.best && result.compatibility.best.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-3">
                    {t('result.bestMatch')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.best.map(type => {
                      const partner = results.find(r => r.type === type);
                      if (!partner) return null;
                      return (
                        <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1 rounded-full">
                          <span className="text-xl">{partner.emoji}</span>
                          <span className="text-sm font-medium text-gray-800">
                            {partner.title[localeKey as keyof typeof partner.title] || partner.title.ko}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {result.compatibility.good && result.compatibility.good.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-3">
                    {t('result.goodMatch')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.good.map(type => {
                      const partner = results.find(r => r.type === type);
                      if (!partner) return null;
                      return (
                        <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full">
                          <span className="text-xl">{partner.emoji}</span>
                          <span className="text-sm font-medium text-gray-800">
                            {partner.title[localeKey as keyof typeof partner.title] || partner.title.ko}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {result.compatibility.careful && result.compatibility.careful.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-3">
                    {t('result.carefulMatch')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.careful.map(type => {
                      const partner = results.find(r => r.type === type);
                      if (!partner) return null;
                      return (
                        <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-full">
                          <span className="text-xl">{partner.emoji}</span>
                          <span className="text-sm font-medium text-gray-800">
                            {partner.title[localeKey as keyof typeof partner.title] || partner.title.ko}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
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
{t('ui.shareResult')}
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
{t('ui.retake')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
            >
{t('ui.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
{t('ui.shareWithFriends')}
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
                {tGlobal('recommendations.similarTestsTop5') || '🎯 유사한 다른 테스트 추천 톱5'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((test) => {
                  const testTitle = typeof test.title === 'object' ? (test.title as any)[locale] || (test.title as any).ko : test.title;
                  return (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={testTitle}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {testTitle}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale as any)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* 🔥 요즘 인기 테스트 추천 톱5 */}
          {popularTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {tGlobal('recommendations.popularTestsTop5') || '🔥 요즘 인기 테스트 추천 톱5'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {popularTestsState.map((test) => {
                  const testTitle = typeof test.title === 'object' ? (test.title as any)[locale] || (test.title as any).ko : test.title;
                  return (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={testTitle}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {testTitle}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale as any)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
{t('ui.progress')}
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
            {question.question[localeKey as keyof typeof question.question] || question.question.ko}
          </h2>

          <div className="space-y-4 px-4">
            {optionsArray.map((option, index) => {
              const optionText = option.text[localeKey as keyof typeof option.text] || option.text.ko;
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
{t('ui.shareWithFriends')}
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
