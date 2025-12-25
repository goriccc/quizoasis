'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { LoveObstacleQuestion, LoveObstacleResult, calculateLoveObstacleResult } from '@/lib/loveObstaclesData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';

interface LoveObstaclesTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: LoveObstacleQuestion[];
  results: LoveObstacleResult[];
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
}

export default function LoveObstaclesTestClient({ 
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
  isLatestTest = false
}: LoveObstaclesTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<LoveObstacleResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<LoveObstacleQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, any[]>>({});
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  // 답변 순서 섞기 (질문이 바뀔 때마다)
    const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);

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
    if (!started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          const keyword = locale === 'ko' ? 'trending products' : 'couple gifts';
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


  // 질문 섞기 함수
  const shuffleQuestions = (questionList: LoveObstacleQuestion[]) => {
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
      const resultType = calculateLoveObstacleResult(newAnswers);
      const loveObstacleResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (loveObstacleResult) {
        setResult(loveObstacleResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (loveObstacleResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(loveObstacleResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 연애 장애물 결과:', loveObstacleResult.type, '→ 검색 키워드:', keywords[0]);
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
    const resultType = calculateLoveObstacleResult(finalAnswers);
    const loveObstacleResult = results.find(r => r.type === resultType);
    
    if (loveObstacleResult) {
      setResult(loveObstacleResult);
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
    
    // 다국어 공유 메시지
    const shareMessages = {
      ko: `나의 연애 장애물은 ${resultTitle}! 너는 뭐가 문제야? 같이 해보자 😂💔`,
      en: `My love obstacle is ${resultTitle}! What's your problem? Let's try together 😂💔`,
      ja: `私の恋愛障害は${resultTitle}！あなたの問題は何？一緒にやってみよう 😂💔`,
      'zh-CN': `我的恋爱障碍是${resultTitle}！你的问题是什么？一起试试吧 😂💔`,
      'zh-TW': `我的戀愛障礙是${resultTitle}！你的問題是什麼？一起試試吧 😂💔`,
      vi: `Trở ngại tình yêu của tôi là ${resultTitle}! Vấn đề của bạn là gì? Cùng thử nhé 😂💔`,
      id: `Hambatan cinta saya adalah ${resultTitle}! Apa masalah Anda? Mari coba bersama 😂💔`
    };
    
    const shareText = `${shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
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
        const copyMessages = {
          ko: '결과가 클립보드에 복사되었습니다!',
          en: 'Result copied to clipboard!',
          ja: '結果がクリップボードにコピーされました！',
          'zh-CN': '结果已复制到剪贴板！',
          'zh-TW': '結果已複製到剪貼板！',
          vi: 'Kết quả đã được sao chép vào clipboard!',
          id: 'Hasil telah disalin ke clipboard!'
        };
        alert(copyMessages[locale as keyof typeof copyMessages] || copyMessages.ko);
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        const errorMessages = {
          ko: '공유 기능을 사용할 수 없습니다.',
          en: 'Sharing feature is not available.',
          ja: '共有機能を使用できません。',
          'zh-CN': '无法使用共享功能。',
          'zh-TW': '無法使用共享功能。',
          vi: 'Không thể sử dụng tính năng chia sẻ.',
          id: 'Fitur berbagi tidak tersedia.'
        };
        alert(errorMessages[locale as keyof typeof errorMessages] || errorMessages.ko);
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
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    // 다국어 공유 메시지
    const shareMessages = {
      ko: `나의 연애 장애물은 ${resultTitle}! 너는 뭐가 문제야? 같이 해보자 😂💔`,
      en: `My love obstacle is ${resultTitle}! What's your problem? Let's try together 😂💔`,
      ja: `私の恋愛障害は${resultTitle}！あなたの問題は何？一緒にやってみよう 😂💔`,
      'zh-CN': `我的恋爱障碍是${resultTitle}！你的问题是什么？一起试试吧 😂💔`,
      'zh-TW': `我的戀愛障礙是${resultTitle}！你的問題是什麼？一起試試吧 😂💔`,
      vi: `Trở ngại tình yêu của tôi là ${resultTitle}! Vấn đề của bạn là gì? Cùng thử nhé 😂💔`,
      id: `Hambatan cinta saya adalah ${resultTitle}! Apa masalah Anda? Mari coba bersama 😂💔`
    };
    
    const shareText = result 
      ? `${shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko}\n\n${url}`
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
      const copyMessages = {
        ko: '링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.',
        en: 'Link copied! Paste it in WeChat to share.',
        ja: 'リンクがコピーされました！WeChatで貼り付けて共有してください。',
        'zh-CN': '链接已复制！在微信中粘贴分享。',
        'zh-TW': '連結已複製！在微信中貼上分享。',
        vi: 'Liên kết đã được sao chép! Dán vào WeChat để chia sẻ.',
        id: 'Tautan telah disalin! Tempel di WeChat untuk berbagi.'
      };
      alert(copyMessages[locale as keyof typeof copyMessages] || copyMessages.ko);
    } catch (error) {
      const errorMessages = {
        ko: '공유 기능을 사용할 수 없습니다.',
        en: 'Sharing feature is not available.',
        ja: '共有機能を使用できません。',
        'zh-CN': '无法使用共享功能。',
        'zh-TW': '無法使用共享功能。',
        vi: 'Không thể sử dụng tính năng chia sẻ.',
        id: 'Fitur berbagi tidak tersedia.'
      };
      alert(errorMessages[locale as keyof typeof errorMessages] || errorMessages.ko);
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    // 다국어 공유 메시지
    const shareMessages = {
      ko: `나의 연애 장애물은 ${resultTitle}! 너는 뭐가 문제야? 같이 해보자 😂💔`,
      en: `My love obstacle is ${resultTitle}! What's your problem? Let's try together 😂💔`,
      ja: `私の恋愛障害は${resultTitle}！あなたの問題は何？一緒にやってみよう 😂💔`,
      'zh-CN': `我的恋爱障碍是${resultTitle}！你的问题是什么？一起试试吧 😂💔`,
      'zh-TW': `我的戀愛障礙是${resultTitle}！你的問題是什麼？一起試試吧 😂💔`,
      vi: `Trở ngại tình yêu của tôi là ${resultTitle}! Vấn đề của bạn là gì? Cùng thử nhé 😂💔`,
      id: `Hambatan cinta saya adalah ${resultTitle}! Apa masalah Anda? Mari coba bersama 😂💔`
    };
    
    const shareText = result 
      ? encodeURIComponent(shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko)
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
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    // 다국어 공유 메시지
    const shareMessages = {
      ko: `나의 연애 장애물은 ${resultTitle}! 너는 뭐가 문제야? 같이 해보자 😂💔`,
      en: `My love obstacle is ${resultTitle}! What's your problem? Let's try together 😂💔`,
      ja: `私の恋愛障害は${resultTitle}！あなたの問題は何？一緒にやってみよう 😂💔`,
      'zh-CN': `我的恋爱障碍是${resultTitle}！你的问题是什么？一起试试吧 😂💔`,
      'zh-TW': `我的戀愛障礙是${resultTitle}！你的問題是什麼？一起試試吧 😂💔`,
      vi: `Trở ngại tình yêu của tôi là ${resultTitle}! Vấn đề của bạn là gì? Cùng thử nhé 😂💔`,
      id: `Hambatan cinta saya adalah ${resultTitle}! Apa masalah Anda? Mari coba bersama 😂💔`
    };
    
    const shareDescription = result 
      ? shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko
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
    
    // 다국어 공유 메시지
    const shareMessages = {
      ko: `나의 연애 장애물은 ${resultTitle}! 너는 뭐가 문제야? 같이 해보자 😂💔`,
      en: `My love obstacle is ${resultTitle}! What's your problem? Let's try together 😂💔`,
      ja: `私の恋愛障害は${resultTitle}！あなたの問題は何？一緒にやってみよう 😂💔`,
      'zh-CN': `我的恋爱障碍是${resultTitle}！你的问题是什么？一起试试吧 😂💔`,
      'zh-TW': `我的戀愛障礙是${resultTitle}！你的問題是什麼？一起試試吧 😂💔`,
      vi: `Trở ngại tình yêu của tôi là ${resultTitle}! Vấn đề của bạn là gì? Cùng thử nhé 😂💔`,
      id: `Hambatan cinta saya adalah ${resultTitle}! Apa masalah Anda? Mari coba bersama 😂💔`
    };
    
    const shareText = result 
      ? shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    const copyMessages = {
      ko: '링크가 복사되었습니다!',
      en: 'Link copied!',
      ja: 'リンクがコピーされました！',
      'zh-CN': '链接已复制！',
      'zh-TW': '連結已複製！',
      vi: 'Liên kết đã được sao chép!',
      id: 'Tautan telah disalin!'
    };
    alert(copyMessages[locale as keyof typeof copyMessages] || copyMessages.ko);
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
            src={getThumbnailUrl(thumbnail || 'test_036_love_obstacles.jpg')}
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
            <p className="font-bold text-gray-700">
              {locale === 'ko' && '「왜 자꾸 연애가 안 될까? 진짜 이유를 찾아보세요」'}
              {locale === 'en' && '「Why can\'t I find love? Let\'s find the real reason」'}
              {locale === 'ja' && '「なぜ恋愛がうまくいかないの？本当の理由を見つけましょう」'}
              {locale === 'zh-CN' && '「为什么总是找不到爱情？让我们找到真正的原因」'}
              {locale === 'zh-TW' && '「為什麼總是找不到愛情？讓我們找到真正的原因」'}
              {locale === 'vi' && '「Tại sao tình yêu mãi không thành? Hãy tìm lý do thật sự」'}
              {locale === 'id' && '「Mengapa cinta tidak berhasil? Mari cari tahu alasannya」'}
            </p>
            <p>
              {locale === 'ko' && '만남은 있는데 발전이 안 되나요?'}
              {locale === 'en' && 'Do you meet people but relationships don\'t progress?'}
              {locale === 'ja' && '出会いはあるのに発展しない？'}
              {locale === 'zh-CN' && '有见面但关系没有进展？'}
              {locale === 'zh-TW' && '有見面但關係沒有進展？'}
              {locale === 'vi' && 'Có gặp gỡ nhưng không tiến triển?'}
              {locale === 'id' && 'Ada pertemuan tapi tidak berkembang?'}
            </p>
            <p>
              {locale === 'ko' && '연애는 하는데 오래 못 가나요? 좋아하는 사람 앞에서 어색한가요?'}
              {locale === 'en' && 'Do you date but relationships don\'t last? Do you feel awkward around people you like?'}
              {locale === 'ja' && '恋愛はするけど長続きしない？好きな人の前でぎこちない？'}
              {locale === 'zh-CN' && '有恋爱但关系不持久？在喜欢的人面前感到尴尬？'}
              {locale === 'zh-TW' && '有戀愛但關係不持久？在喜歡的人面前感到尷尬？'}
              {locale === 'vi' && 'Có hẹn hò nhưng không lâu dài? Cảm thấy ngượng ngùng trước người mình thích?'}
              {locale === 'id' && 'Pacaran tapi tidak bertahan lama? Merasa canggung di depan orang yang disukai?'}
            </p>
            <p>
              {locale === 'ko' && '연애가 잘 안 되는 데는 이유가 있습니다.'}
              {locale === 'en' && 'There\'s a reason why love isn\'t working out.'}
              {locale === 'ja' && '恋愛がうまくいかないのには理由があります。'}
              {locale === 'zh-CN' && '爱情不顺利是有原因的。'}
              {locale === 'zh-TW' && '愛情不順利是有原因的。'}
              {locale === 'vi' && 'Tình yêu không thành công có lý do.'}
              {locale === 'id' && 'Ada alasan mengapa cinta tidak berhasil.'}
            </p>
            <p>
              {locale === 'ko' && '과도한 완벽주의 때문일까요? 자존감이 낮아서일까요? 과거의 상처 때문일까요? 이상이 너무 높아서일까요?'}
              {locale === 'en' && 'Is it excessive perfectionism? Low self-esteem? Past wounds? Unrealistic expectations?'}
              {locale === 'ja' && '過度な完璧主義のせい？自尊心が低いから？過去の傷のせい？理想が高すぎるから？'}
              {locale === 'zh-CN' && '是过度完美主义？自尊心低？过去的创伤？期望过高？'}
              {locale === 'zh-TW' && '是過度完美主義？自尊心低？過去的創傷？期望過高？'}
              {locale === 'vi' && 'Có phải do chủ nghĩa hoàn hảo quá mức? Tự ti? Vết thương quá khứ? Kỳ vọng quá cao?'}
              {locale === 'id' && 'Apakah karena perfeksionisme berlebihan? Harga diri rendah? Luka masa lalu? Harapan terlalu tinggi?'}
            </p>
            <p className="whitespace-pre-line">
              {locale === 'ko' && '당신도 모르는 사이 연애를 방해하는 요소를 정확하게 찾아드립니다.'}
              {locale === 'en' && 'We\'ll accurately identify the factors blocking your love life that you might not even realize.'}
              {locale === 'ja' && 'あなたも気づかないうちに恋愛を妨げている要素を正確に見つけます。'}
              {locale === 'zh-CN' && '我们会准确找出你可能没有意识到的阻碍你恋爱的因素。'}
              {locale === 'zh-TW' && '我們會準確找出你可能沒有意識到的阻礙你戀愛的因素。'}
              {locale === 'vi' && 'Chúng tôi sẽ tìm ra chính xác những yếu tố cản trở tình yêu mà bạn có thể không nhận ra.'}
              {locale === 'id' && 'Kami akan menemukan secara akurat faktor-faktor yang menghalangi kehidupan cinta Anda yang mungkin tidak Anda sadari.'}
            </p>
            <p>
              {locale === 'ko' && '문제를 알아야 해결할 수 있습니다 💪'}
              {locale === 'en' && 'You need to know the problem to solve it 💪'}
              {locale === 'ja' && '問題を知らなければ解決できません 💪'}
              {locale === 'zh-CN' && '只有知道问题才能解决问题 💪'}
              {locale === 'zh-TW' && '只有知道問題才能解決問題 💪'}
              {locale === 'vi' && 'Cần biết vấn đề mới giải quyết được 💪'}
              {locale === 'id' && 'Perlu tahu masalahnya untuk bisa menyelesaikannya 💪'}
            </p>
            <p>
              {locale === 'ko' && '소요 시간 단 3분! 솔직하게 답해주세요 ✨'}
              {locale === 'en' && 'Takes only 3 minutes! Please answer honestly ✨'}
              {locale === 'ja' && '所要時間わずか3分！正直に答えてください ✨'}
              {locale === 'zh-CN' && '只需3分钟！请诚实回答 ✨'}
              {locale === 'zh-TW' && '只需3分鐘！請誠實回答 ✨'}
              {locale === 'vi' && 'Chỉ mất 3 phút! Hãy trả lời thành thật ✨'}
              {locale === 'id' && 'Hanya butuh 3 menit! Silakan jawab dengan jujur ✨'}
            </p>
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
                <a 
                  href="https://s.click.aliexpress.com/e/_c3G3nkEv?bz=300*250" 
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
          
          
          
          
          <p className="text-xs text-gray-500 text-center mb-3">
            {t('footer.disclaimer')}
          </p>
          <div className="mb-6">
            <div className="flex justify-center">
              <a 
                href="https://s.click.aliexpress.com/e/_c3G3nkEv?bz=300*250" 
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

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    // 다국어 쉼표 처리: 영어 쉼표+공백, 일본어 쉼표, 중국어 쉼표 모두 지원
    const splitByCommas = (text: string) => {
      // 쉼표 뒤 공백을 포함한 패턴으로 분할
      return text.split(/,\s+|，\s*|、\s*/).map(item => item.trim()).filter(item => item.length > 0);
    };
    
    const resultSymptoms = splitByCommas(result.symptoms[locale as keyof typeof result.symptoms] || result.symptoms.ko);
    const resultPattern = splitByCommas(result.patterns[locale as keyof typeof result.patterns] || result.patterns.ko);
    const resultRootCause = splitByCommas(result.causes[locale as keyof typeof result.causes] || result.causes.ko);
    const resultSolution = splitByCommas(result.solutions[locale as keyof typeof result.solutions] || result.solutions.ko);
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
              <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🔍 {locale === 'ko' && '주요 증상'}
                  {locale === 'en' && 'Main Symptoms'}
                  {locale === 'ja' && '主な症状'}
                  {locale === 'zh-CN' && '主要症状'}
                  {locale === 'zh-TW' && '主要症狀'}
                  {locale === 'vi' && 'Triệu chứng chính'}
                  {locale === 'id' && 'Gejala Utama'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultSymptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🔄 {locale === 'ko' && '연애 패턴'}
                  {locale === 'en' && 'Love Patterns'}
                  {locale === 'ja' && '恋愛パターン'}
                  {locale === 'zh-CN' && '恋爱模式'}
                  {locale === 'zh-TW' && '戀愛模式'}
                  {locale === 'vi' && 'Mẫu tình yêu'}
                  {locale === 'id' && 'Pola Cinta'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPattern.map((pattern, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  🎯 {locale === 'ko' && '근본 원인'}
                  {locale === 'en' && 'Root Causes'}
                  {locale === 'ja' && '根本原因'}
                  {locale === 'zh-CN' && '根本原因'}
                  {locale === 'zh-TW' && '根本原因'}
                  {locale === 'vi' && 'Nguyên nhân gốc'}
                  {locale === 'id' && 'Penyebab Utama'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultRootCause.map((cause, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-yellow-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {cause}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  💡 {locale === 'ko' && '해결 방법'}
                  {locale === 'en' && 'Solutions'}
                  {locale === 'ja' && '解決方法'}
                  {locale === 'zh-CN' && '解决方法'}
                  {locale === 'zh-TW' && '解決方法'}
                  {locale === 'vi' && 'Giải pháp'}
                  {locale === 'id' && 'Solusi'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultSolution.map((solution, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💬 {locale === 'ko' && '조언'}
                {locale === 'en' && 'Advice'}
                {locale === 'ja' && 'アドバイス'}
                {locale === 'zh-CN' && '建议'}
                {locale === 'zh-TW' && '建議'}
                {locale === 'vi' && 'Lời khuyên'}
                {locale === 'id' && 'Saran'}
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