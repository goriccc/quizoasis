'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { HonestyQuestion, HonestyResult, calculateHonestyResult } from '@/lib/honestyData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface HonestyTestClientProps {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  questions: HonestyQuestion[];
  results: HonestyResult[];
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

export default function HonestyTestClient({ 
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
}: HonestyTestClientProps) {
  const t = useTranslations();
  
  // 상태 관리
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<HonestyResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<HonestyQuestion[]>([]);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  // 질문 셔플 함수
  const shuffleQuestions = (questions: HonestyQuestion[]): HonestyQuestion[] => {
    return [...questions].sort(() => Math.random() - 0.5);
  };


  // 질문 셔플 초기화
  useEffect(() => {
    if (questions.length > 0) {
      const shuffled = shuffleQuestions(questions);
      setShuffledQuestions(shuffled);
    }
  }, [questions]);


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

  // 유사한 테스트와 인기 테스트 로드
  useEffect(() => {
    const loadTests = async () => {
      try {
        const allTests = await getTests();
        const otherTests = allTests.filter(test => test.slug !== slug);
        
        // 유사한 테스트 (같은 카테고리)
        const similar = otherTests
          .filter(test => test.category === 'love')
          .sort((a, b) => b.playCount - a.playCount)
          .slice(0, 5);
        setSimilarTestsState(similar);
        
        // 인기 테스트
        const popular = otherTests
          .sort((a, b) => b.playCount - a.playCount)
          .slice(0, 5);
        setPopularTestsState(popular);
      } catch (error) {
        console.error('테스트 로드 실패:', error);
      }
    };
    
    loadTests();
  }, [slug]);

  // 테스트 시작
  const handleStartTest = async () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    
    // 테스트 시작 시 화면을 최상단으로 스크롤
    window.scrollTo(0, 0);
    
    // 플레이 카운트 증가
    if (!hasIncrementedPlayCount) {
      try {
        await incrementPlayCount(slug);
        setHasIncrementedPlayCount(true);
        setDisplayPlayCount(prev => prev + 1);
      } catch (error) {
        console.error('플레이 카운트 증가 실패:', error);
      }
    }
  };

  // 답변 선택
  const handleAnswerSelect = (scores: Record<string, number>) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료 - 로딩 스피너 표시
      setShowLoadingSpinner(true);
      
      const resultType = calculateHonestyResult(newAnswers);
      const foundResult = results.find(r => r.type === resultType);
      if (foundResult) {
        setResult(foundResult);
        setShowResult(true);
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
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setHasIncrementedPlayCount(false);
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko) || '';
    const shareText = locale === 'ko' ? 
      `나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'en' ?
      `I'm ${resultTitle}! Honesty vs Consideration, which side are you? ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'ja' ?
      `私は${resultTitle}！正直さ vs 思いやり、あなたはどちら？ ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'zh-CN' ?
      `我是${resultTitle}！诚实 vs 体贴，你是哪一边？ ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'zh-TW' ?
      `我是${resultTitle}！誠實 vs 體貼，你是哪一邊？ ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'id' ?
      `Saya ${resultTitle}! Kejujuran vs Pertimbangan, kamu di sisi mana? ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      locale === 'vi' ?
      `Tôi là ${resultTitle}! Thành thật vs Quan tâm, bạn ở phía nào? ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}` :
      `나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
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
        alert('결과가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert('공유 기능을 사용할 수 없습니다.');
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! Honesty vs Consideration, which side are you? ⚖️\n\n${url}` :
        locale === 'ja' ?
        `私は${resultTitle}！正直さ vs 思いやり、あなたはどちら？ ⚖️\n\n${url}` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！诚实 vs 体贴，你是哪一边？ ⚖️\n\n${url}` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！誠實 vs 體貼，你是哪一邊？ ⚖️\n\n${url}` :
        locale === 'id' ?
        `Saya ${resultTitle}! Kejujuran vs Pertimbangan, kamu di sisi mana? ⚖️\n\n${url}` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Thành thật vs Quan tâm, bạn ở phía nào? ⚖️\n\n${url}` :
        `나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️\n\n${url}`
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

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        encodeURIComponent(`I'm ${resultTitle}! Honesty vs Consideration, which side are you? ⚖️`) :
        locale === 'ja' ?
        encodeURIComponent(`私は${resultTitle}！正直さ vs 思いやり、あなたはどちら？ ⚖️`) :
        locale === 'zh-CN' ?
        encodeURIComponent(`我是${resultTitle}！诚实 vs 体贴，你是哪一边？ ⚖️`) :
        locale === 'zh-TW' ?
        encodeURIComponent(`我是${resultTitle}！誠實 vs 體貼，你是哪一邊？ ⚖️`) :
        locale === 'id' ?
        encodeURIComponent(`Saya ${resultTitle}! Kejujuran vs Pertimbangan, kamu di sisi mana? ⚖️`) :
        locale === 'vi' ?
        encodeURIComponent(`Tôi là ${resultTitle}! Thành thật vs Quan tâm, bạn ở phía nào? ⚖️`) :
        encodeURIComponent(`나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️`)
      : encodeURIComponent(title);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareDescription = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! Honesty vs Consideration, which side are you? ⚖️` :
        locale === 'ja' ?
        `私は${resultTitle}！正直さ vs 思いやり、あなたはどちら？ ⚖️` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！诚实 vs 体贴，你是哪一边？ ⚖️` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！誠實 vs 體貼，你是哪一邊？ ⚖️` :
        locale === 'id' ?
        `Saya ${resultTitle}! Kejujuran vs Pertimbangan, kamu di sisi mana? ⚖️` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Thành thật vs Quan tâm, bạn ở phía nào? ⚖️` :
        `나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️`
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! Honesty vs Consideration, which side are you? ⚖️` :
        locale === 'ja' ?
        `私は${resultTitle}！正直さ vs 思いやり、あなたはどちら？ ⚖️` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！诚实 vs 体贴，你是哪一边？ ⚖️` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！誠實 vs 體貼，你是哪一邊？ ⚖️` :
        locale === 'id' ?
        `Saya ${resultTitle}! Kejujuran vs Pertimbangan, kamu di sisi mana? ⚖️` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Thành thật vs Quan tâm, bạn ở phía nào? ⚖️` :
        `나는 ${resultTitle}! 솔직함 vs 배려, 너는 어느 쪽? ⚖️`
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert('링크가 복사되었습니다!');
  };

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_045_honesty_vs_consideration.jpg')}
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
              <p className="font-bold text-gray-700">{t('honestyTest.startMessage.title')}</p>
              <p>{t('honestyTest.startMessage.line1')}</p>
              <p>{t('honestyTest.startMessage.line2')}</p>
              <p>{t('honestyTest.startMessage.line3')}</p>
              <p>{t('honestyTest.startMessage.line4')}</p>
              <p>{t('honestyTest.startMessage.line5')}</p>
              <p>{t('honestyTest.startMessage.line6')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
{t('honestyTest.ui.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
{t('honestyTest.ui.totalParticipants', { count: formatPlayCount(displayPlayCount, locale) })}
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
  {t('honestyTest.ui.playWithFriends')}
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
  {t('honestyTest.ui.similarTests')}
              </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale)}</span>
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
  if (started && !showResult && shuffledQuestions.length > 0) {
    const question = shuffledQuestions[currentQuestion];
    const questionText = question.question && question.question[locale as keyof typeof question.question] || (question.question && question.question.ko) || '';
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    
    const optionsArray = question.options;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                {t('honestyTest.ui.progress')}
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
                ];
                const bgColors = ['bg-purple-600', 'bg-pink-600'];

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option.scores)}
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
  {t('honestyTest.ui.playWithFriends')}
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
          <p className="mt-4 text-lg text-gray-700">{t('honestyTest.ui.analyzing')}</p>
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
            {t('honestyTest.ui.testCompleted')}
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
            onClick={() => setShowResultPopup(false)}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
{t('honestyTest.ui.viewResults')}
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
    
    const resultPros = splitByCommas(result.pros[locale as keyof typeof result.pros] || result.pros.ko);
    const resultCons = splitByCommas(result.cons[locale as keyof typeof result.cons] || result.cons.ko);
    const resultAdvice = result.advice[locale as keyof typeof result.advice] || result.advice.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
{t('honestyTest.result.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
              {result.longDescription && (
                <p className="text-sm text-gray-700 leading-relaxed mt-3">
                  {result.longDescription[locale as keyof typeof result.longDescription] || result.longDescription.ko}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  {t('honestyTest.result.pros')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.map((pro, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {pro}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  {t('honestyTest.result.cons')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.map((con, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {con}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  {t('honestyTest.result.advice')}
                </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            {/* 관계 궁합 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              {result.compatibility.best[locale as keyof typeof result.compatibility.best]?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-base font-bold text-green-600 mb-3">{t('honestyTest.result.bestMatch')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.best[locale as keyof typeof result.compatibility.best]?.map((type, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.compatibility.good[locale as keyof typeof result.compatibility.good]?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-base font-bold text-blue-600 mb-3">{t('honestyTest.result.goodMatch')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.good[locale as keyof typeof result.compatibility.good]?.map((type, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.compatibility.careful[locale as keyof typeof result.compatibility.careful]?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-base font-bold text-orange-600 mb-3">{t('honestyTest.result.difficultMatch')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.compatibility.careful[locale as keyof typeof result.compatibility.careful]?.map((type, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
  {t('honestyTest.ui.shareResult')}
              </button>
            </div>

            {/* AdSense 광고 - 결과 공유하기 버튼 밑 */}
            <div className="my-6 px-4">
              <AdSensePlaceholder 
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label="AdSense 광고 영역 (결과 공유하기 버튼 밑)"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={handleRetake}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
  {t('honestyTest.ui.retake')}
              </button>
              <Link
                href={`/${locale}/test`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
              >
{t('honestyTest.ui.otherTests')}
              </Link>
            </div>

            {/* 친구와 같이 해보기 */}
            <div className="mt-12 mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
  {t('honestyTest.ui.playWithFriends')}
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

            {/* 유사한 다른 테스트 추천 톱5 */}
            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('honestyTest.ui.similarTestsTop5')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 요즘 인기 테스트 추천 톱5 */}
            {popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('honestyTest.ui.popularTestsTop5')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {popularTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                            alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount || (test as any).play_count || 0, locale)}</span>
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

  return <div>테스트 진행 중...</div>;
}
