'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { LifePrioritiesQuestion, LifePrioritiesResult, calculateLifePrioritiesResult } from '@/lib/lifePrioritiesData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface LifePrioritiesTestClientProps {
  locale: Locale;
  slug: string;
  title: string | Record<string, string>;
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
    badgeType?: 'popular' | 'hot' | null;
    }>;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
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
,
  isLatestTest = false,
  badgeType = null
}: LifePrioritiesTestClientProps) {
  const t = useTranslations();
  const tGlobal = useTranslations();
  
  // 상태 관리
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<LifePrioritiesResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<LifePrioritiesQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const similarTestsData = useMemo(
    () => [...similarTestsState, ...popularTestsState],
    [similarTestsState, popularTestsState]
  );
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);

  // 질문 셔플 함수
  const shuffleQuestions = (questions: LifePrioritiesQuestion[]): LifePrioritiesQuestion[] => {
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
    if (!started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          // 언어별로 선물 관련 키워드 사용
          const searchKeywords = {
            'en': 'present',
            'ja': 'プレゼント',
            'zh-CN': '礼物',
            'zh-TW': '禮物',
            'id': 'present',  // 인도네시아어는 영어 키워드 사용
            'vi': 'quà tặng'
          };
          const keyword = searchKeywords[locale as keyof typeof searchKeywords] || 'gifts';
          const products = await searchAliExpressProducts(keyword, 4, locale);
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

  // 공유 함수들
  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const shareMessage = t('lifePrioritiesTest.shareMessages.default', { type: resultTitle });
    const shareText = `${shareMessage}\n\n${window.location.href}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: typeof title === 'string' ? title : title[locale] || title.ko,
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // 클립보드에 복사
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('lifePrioritiesTest.alerts.resultCopied'));
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
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
        `I'm ${resultTitle}! What's your life priority? Let's test together 💭` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの人生の優先順位は？一緒にテストしましょう 💭` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的人生优先级是什么？一起来测试吧 💭` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的人生優先級是什麼？一起來測試吧 💭` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa prioritas hidup Anda? Mari tes bersama 💭` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Ưu tiên cuộc sống của bạn là gì? Hãy cùng kiểm tra 💭` :
        `나는 ${resultTitle}! 인생에서 가장 중요한 가치를 찾았어 💭 너는 무엇을 선택할래?`
      : description;
    
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: typeof title === 'string' ? title : title[locale] || title.ko,
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
  
  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! What's your life priority? Let's test together 💭\n\n${url}` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの人生の優先順位は？一緒にテストしましょう 💭\n\n${url}` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的人生优先级是什么？一起来测试吧 💭\n\n${url}` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的人生優先級是什麼？一起來測試吧 💭\n\n${url}` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa prioritas hidup Anda? Mari tes bersama 💭\n\n${url}` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Ưu tiên cuộc sống của bạn là gì? Hãy cùng kiểm tra 💭\n\n${url}` :
        `나는 ${resultTitle}! 인생에서 가장 중요한 가치를 찾았어 💭 너는 무엇을 선택할래?\n\n${url}`
      : `${typeof title === 'string' ? title : title[locale] || title.ko}\n\n${url}`;
    
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
    if (typeof window === 'undefined') return;
    
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! What's your life priority? Let's test together 💭` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの人生の優先順位は？一緒にテストしましょう 💭` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的人生优先级是什么？一起来测试吧 💭` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的人生優先級是什麼？一起來測試吧 💭` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa prioritas hidup Anda? Mari tes bersama 💭` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Ưu tiên cuộc sống của bạn là gì? Hãy cùng kiểm tra 💭` :
        `나는 ${resultTitle}! 인생에서 가장 중요한 가치를 찾았어 💭 너는 무엇을 선택할래?`
      : locale === 'en' ?
        'What do you value more? Find your life priorities!' :
        locale === 'ja' ?
        'あなたは何をより重要に考えますか？人生の優先順位を見つけよう！' :
        locale === 'zh-CN' ?
        '你更重视什么？找到你的人生优先级！' :
        locale === 'zh-TW' ?
        '你更重視什麼？找到你的人生優先級！' :
        locale === 'id' ?
        'Apa yang lebih Anda hargai? Temukan prioritas hidup Anda!' :
        locale === 'vi' ?
        'Bạn coi trọng điều gì hơn? Tìm ưu tiên cuộc sống của bạn!' :
        '당신은 무엇을 더 중요하게 생각하나요? 인생 우선순위를 찾아보세요!';
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareToTelegram = () => {
    if (typeof window === 'undefined') return;
    
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! What's your life priority? Let's test together 💭` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの人生の優先順位は？一緒にテストしましょう 💭` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的人生优先级是什么？一起来测试吧 💭` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的人生優先級是什麼？一起來測試吧 💭` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa prioritas hidup Anda? Mari tes bersama 💭` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Ưu tiên cuộc sống của bạn là gì? Hãy cùng kiểm tra 💭` :
        `나는 ${resultTitle}! 인생에서 가장 중요한 가치를 찾았어 💭 너는 무엇을 선택할래?`
      : locale === 'en' ?
        'What do you value more? Find your life priorities!' :
        locale === 'ja' ?
        'あなたは何をより重要に考えますか？人生の優先順位を見つけよう！' :
        locale === 'zh-CN' ?
        '你更重视什么？找到你的人生优先级！' :
        locale === 'zh-TW' ?
        '你更重視什麼？找到你的人生優先級！' :
        locale === 'id' ?
        'Apa yang lebih Anda hargai? Temukan prioritas hidup Anda!' :
        locale === 'vi' ?
        'Bạn coi trọng điều gì hơn? Tìm ưu tiên cuộc sống của bạn!' :
        '당신은 무엇을 더 중요하게 생각하나요? 인생 우선순위를 찾아보세요!';
    
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
  };

  const shareToLine = () => {
    if (typeof window === 'undefined') return;
    
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko)) : '';
    const shareText = result 
      ? locale === 'en' ?
        `I'm ${resultTitle}! What's your life priority? Let's test together 💭` :
        locale === 'ja' ?
        `私は${resultTitle}！あなたの人生の優先順位は？一緒にテストしましょう 💭` :
        locale === 'zh-CN' ?
        `我是${resultTitle}！你的人生优先级是什么？一起来测试吧 💭` :
        locale === 'zh-TW' ?
        `我是${resultTitle}！你的人生優先級是什麼？一起來測試吧 💭` :
        locale === 'id' ?
        `Saya ${resultTitle}! Apa prioritas hidup Anda? Mari tes bersama 💭` :
        locale === 'vi' ?
        `Tôi là ${resultTitle}! Ưu tiên cuộc sống của bạn là gì? Hãy cùng kiểm tra 💭` :
        `나는 ${resultTitle}! 인생에서 가장 중요한 가치를 찾았어 💭 너는 무엇을 선택할래?`
      : locale === 'en' ?
        'What do you value more? Find your life priorities!' :
        locale === 'ja' ?
        'あなたは何をより重要に考えますか？人生の優先順位を見つけよう！' :
        locale === 'zh-CN' ?
        '你更重视什么？找到你的人生优先级！' :
        locale === 'zh-TW' ?
        '你更重視什麼？找到你的人生優先級！' :
        locale === 'id' ?
        'Apa yang lebih Anda hargai? Temukan prioritas hidup Anda!' :
        locale === 'vi' ?
        'Bạn coi trọng điều gì hơn? Tìm ưu tiên cuộc sống của bạn!' :
        '당신은 무엇을 더 중요하게 생각하나요? 인생 우선순위를 찾아보세요!';
    
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, '_blank');
  };
  
  const handleAnswerSelect = (scores: Record<string, number>) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료 - 로딩 스피너 표시
      setShowLoadingSpinner(true);
      
      const resultType = calculateLifePrioritiesResult(newAnswers);
      const foundResult = results.find(r => r.type === resultType);
      if (foundResult) {
        setResult(foundResult);
        setShowResult(true);
      }
    }
  };

  // 테스트 시작 시 스크롤 맨 위로
  const handleStartTest = async () => {
    setStarted(true);
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

  const copyLink = () => {
    if (typeof window === 'undefined') return;
    
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('링크가 복사되었습니다!');
    }).catch(() => {
      alert('공유 기능을 사용할 수 없습니다.');
    });
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

  // 결과 계산
  useEffect(() => {
    if (answers.length === questions.length && !result) {
      const resultType = calculateLifePrioritiesResult(answers);
      const foundResult = results.find(r => r.type === resultType);
      if (foundResult) {
        setResult(foundResult);
        // 플레이 카운트 증가
        incrementPlayCount(slug);
      }
    }
  }, [answers, questions.length, result, results, slug]);
// 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_240_life_priorities.jpg')}
              alt={typeof title === 'string' ? title : title[locale] || title.ko}
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
              {typeof title === 'string' ? title : title[locale] || title.ko}
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
              <p className="font-bold text-gray-700">「{t('lifePrioritiesTest.startMessage.line1')}」</p>
              <p>{t('lifePrioritiesTest.startMessage.line2')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line3')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line4')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line5')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line6')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line7')}</p>
              <p>{t('lifePrioritiesTest.startMessage.line8')}</p>
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

                  {/* 유사한 다른 테스트 */}
                  {similarTestsData.length > 0 && (
                    <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                        {t('recommendations.similarTests') || '유사한 다른 테스트'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        {similarTestsData.map((test) => (
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

            <div className="flex justify-center">

              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto w-full"
              />
            </div>

          </div>

          <button
            onClick={() => {
              setShowResultPopup(false);
              setShowResult(true);
              window.scrollTo(0, 0);
            }}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
            {t('mbti.viewAnalysisResults')}
          </button>
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

  // 결과 화면
  if (showResult && result) {
    const resultTitle = typeof result.title === 'string' ? result.title : (result.title && result.title[locale as keyof typeof result.title]) || (result.title && result.title.ko) || '';
    const resultDescription = typeof result.description === 'string' ? result.description : (result.description && result.description[locale as keyof typeof result.description]) || (result.description && result.description.ko) || '';
    const resultCharacteristics = typeof result.characteristics === 'string' ? result.characteristics : (result.characteristics && result.characteristics[locale as keyof typeof result.characteristics]) || (result.characteristics && result.characteristics.ko) || '';
    
    // 다국어 쉼표 처리: 영어 쉼표+공백, 일본어 쉼표, 중국어 쉼표 모두 지원
    const splitByCommas = (text: string) => {
      // 쉼표 뒤 공백을 포함한 패턴으로 분할
      return text.split(/,\s+|，\s*|、\s*/).map(item => item.trim()).filter(item => item.length > 0);
    };
    
    const resultImpression = splitByCommas(typeof result.impression === 'string' ? result.impression : (result.impression && result.impression[locale as keyof typeof result.impression]) || (result.impression && result.impression.ko) || '');
    const resultPros = splitByCommas(typeof result.pros === 'string' ? result.pros : (result.pros && result.pros[locale as keyof typeof result.pros]) || (result.pros && result.pros.ko) || '');
    const resultCons = splitByCommas(typeof result.cons === 'string' ? result.cons : (result.cons && result.cons[locale as keyof typeof result.cons]) || (result.cons && result.cons.ko) || '');
    const resultAdvice = typeof result.advice === 'string' ? result.advice : (result.advice && result.advice[locale as keyof typeof result.advice]) || (result.advice && result.advice.ko) || '';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
                {t('lifePrioritiesTest.result.yourResult')}
            </h2>
            <div className="text-6xl mb-3">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {resultCharacteristics}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-base font-bold text-gray-800 mb-3">
                  📊 {t('lifePrioritiesTest.result.coreValues')}
            </h3>
            <div className="flex flex-wrap gap-2">
                  {result.type === 'Type1' ? (locale === 'ko' ? ['성공', '성장', '인정', '목표'] :
                     locale === 'en' ? ['Success', 'Growth', 'Recognition', 'Goals'] :
                     locale === 'ja' ? ['成功', '成長', '承認', '目標'] :
                     locale === 'zh-CN' ? ['成功', '成长', '认可', '目标'] :
                     locale === 'zh-TW' ? ['成功', '成長', '認可', '目標'] :
                     locale === 'id' ? ['Kesuksesan', 'Pertumbuhan', 'Pengakuan', 'Tujuan'] :
                     locale === 'vi' ? ['Thành công', 'Tăng trưởng', 'Công nhận', 'Mục tiêu'] :
                     ['성공', '성장', '인정', '목표']).map((char, index) => (
                <span
                  key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                >
                      {char}
                </span>
                  )) :
                   result.type === 'Type2' ? (locale === 'ko' ? ['사랑', '관계', '유대', '헌신'] :
                     locale === 'en' ? ['Love', 'Relationships', 'Bonds', 'Devotion'] :
                     locale === 'ja' ? ['愛', '関係', '絆', '献身'] :
                     locale === 'zh-CN' ? ['爱', '关系', '纽带', '奉献'] :
                     locale === 'zh-TW' ? ['愛', '關係', '紐帶', '奉獻'] :
                     locale === 'id' ? ['Cinta', 'Hubungan', 'Ikatan', 'Pengabdian'] :
                     locale === 'vi' ? ['Tình yêu', 'Mối quan hệ', 'Liên kết', 'Cống hiến'] :
                     ['사랑', '관계', '유대', '헌신']).map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  )) :
                   result.type === 'Type3' ? (locale === 'ko' ? ['자유', '독립', '모험', '자율성'] :
                     locale === 'en' ? ['Freedom', 'Independence', 'Adventure', 'Autonomy'] :
                     locale === 'ja' ? ['自由', '独立', '冒険', '自律性'] :
                     locale === 'zh-CN' ? ['自由', '独立', '冒险', '自主性'] :
                     locale === 'zh-TW' ? ['自由', '獨立', '冒險', '自主性'] :
                     locale === 'id' ? ['Kebebasan', 'Kemandirian', 'Petualangan', 'Otonomi'] :
                     locale === 'vi' ? ['Tự do', 'Độc lập', 'Phiêu lưu', 'Tự chủ'] :
                     ['자유', '독립', '모험', '자율성']).map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  )) :
                   result.type === 'Type4' ? (locale === 'ko' ? ['평온', '안정', '편안함', '지속성'] :
                     locale === 'en' ? ['Peace', 'Stability', 'Comfort', 'Continuity'] :
                     locale === 'ja' ? ['平穏', '安定', '快適', '持続性'] :
                     locale === 'zh-CN' ? ['平静', '稳定', '舒适', '持续性'] :
                     locale === 'zh-TW' ? ['平靜', '穩定', '舒適', '持續性'] :
                     locale === 'id' ? ['Kedamaian', 'Stabilitas', 'Kenyamanan', 'Kontinuitas'] :
                     locale === 'vi' ? ['Bình yên', 'Ổn định', 'Thoải mái', 'Liên tục'] :
                     ['평온', '안정', '편안함', '지속성']).map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  )) :
                   result.type === 'Type5' ? (locale === 'ko' ? ['균형', '논리', '합리성', '효율'] :
                     locale === 'en' ? ['Balance', 'Logic', 'Rationality', 'Efficiency'] :
                     locale === 'ja' ? ['均衡', '論理', '合理性', '効率'] :
                     locale === 'zh-CN' ? ['平衡', '逻辑', '合理性', '效率'] :
                     locale === 'zh-TW' ? ['平衡', '邏輯', '合理性', '效率'] :
                     locale === 'id' ? ['Keseimbangan', 'Logika', 'Rasionalitas', 'Efisiensi'] :
                     locale === 'vi' ? ['Cân bằng', 'Logic', 'Hợp lý', 'Hiệu quả'] :
                     ['균형', '논리', '합리성', '효율']).map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  )) :
                   result.type === 'Type6' ? (locale === 'ko' ? ['열정', '도전', '설렘', '현재'] :
                     locale === 'en' ? ['Passion', 'Challenge', 'Excitement', 'Present'] :
                     locale === 'ja' ? ['情熱', '挑戦', 'ワクワク', '現在'] :
                     locale === 'zh-CN' ? ['激情', '挑战', '兴奋', '现在'] :
                     locale === 'zh-TW' ? ['激情', '挑戰', '興奮', '現在'] :
                     locale === 'id' ? ['Semangat', 'Tantangan', 'Kegembiraan', 'Saat ini'] :
                     locale === 'vi' ? ['Đam mê', 'Thử thách', 'Hứng thú', 'Hiện tại'] :
                     ['열정', '도전', '설렘', '현재']).map((char, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {char}
                    </span>
                  )) : null}
                </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {locale === 'ko' ? '장점' : 
                       locale === 'en' ? 'Pros' :
                       locale === 'ja' ? '長所' :
                       locale === 'zh-CN' ? '优点' :
                       locale === 'zh-TW' ? '優點' :
                       locale === 'id' ? 'Kelebihan' :
                       locale === 'vi' ? 'Ưu Điểm' : '장점'}
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
                  ⚠️ {locale === 'ko' ? '단점' : 
                       locale === 'en' ? 'Cons' :
                       locale === 'ja' ? '短所' :
                       locale === 'zh-CN' ? '缺点' :
                       locale === 'zh-TW' ? '缺點' :
                       locale === 'id' ? 'Kekurangan' :
                       locale === 'vi' ? 'Nhược Điểm' : '단점'}
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
                💡 {locale === 'ko' ? '조언' : 
                     locale === 'en' ? 'Advice' :
                     locale === 'ja' ? 'アドバイス' :
                     locale === 'zh-CN' ? '建议' :
                     locale === 'zh-TW' ? '建議' :
                     locale === 'id' ? 'Saran' :
                     locale === 'vi' ? 'Lời Khuyên' : '조언'}
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
                {t('mbti.shareResult')}
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
                {t('mbti.retakeTest')}
            </button>
            <Link
                href={`/${locale}/test`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
            >
                {t('mbti.otherTests')}
            </Link>
          </div>

            {/* 친구와 같이 해보기 */}
            <div className="mt-12 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('ui.shareResultWithFriends')}
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
            {similarTestsData.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🎯 {locale === 'ko' ? '유사한 다른 테스트 추천 톱5' : 
                       locale === 'en' ? 'Top 5 Similar Test Recommendations' :
                       locale === 'ja' ? '類似の他のテストおすすめトップ5' :
                       locale === 'zh-CN' ? '相似测试推荐前5' :
                       locale === 'zh-TW' ? '相似測試推薦前5' :
                       locale === 'id' ? 'Rekomendasi 5 Tes Serupa Teratas' :
                       locale === 'vi' ? 'Top 5 Bài Kiểm Tra Tương Tự' : '유사한 다른 테스트 추천 톱5'}
              </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsData.slice(0, 5).map((test) => (
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

          {/* 🔥 요즘 인기 테스트 추천 톱5 */}
            {similarTestsData.length > 5 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🔥 {locale === 'ko' ? '요즘 인기 테스트 추천 톱5' : 
                       locale === 'en' ? 'Top 5 Popular Test Recommendations' :
                       locale === 'ja' ? '人気テストおすすめトップ5' :
                       locale === 'zh-CN' ? '热门测试推荐前5' :
                       locale === 'zh-TW' ? '熱門測試推薦前5' :
                       locale === 'id' ? 'Rekomendasi 5 Tes Populer Teratas' :
                       locale === 'vi' ? 'Top 5 Bài Kiểm Tra Phổ Biến' : '요즘 인기 테스트 추천 톱5'}
              </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsData.slice(5, 10).map((test) => (
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

  return null;
}