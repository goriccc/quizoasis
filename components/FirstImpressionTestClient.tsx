'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FirstImpressionQuestion, FirstImpressionResult, calculateFirstImpressionResult } from '@/lib/firstImpressionData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface FirstImpressionTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: FirstImpressionQuestion[];
  results: FirstImpressionResult[];
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

// 궁합 설명 함수
const getCompatibilityDescription = (myType: string, partnerType: string, t: any): string => {
  const key = `${myType}_${partnerType}`;
  return t(`firstImpressionTest.result.compatibility.${key}`) || '';
};

export default function FirstImpressionTestClient({ 
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
}: FirstImpressionTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<FirstImpressionResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<FirstImpressionQuestion[]>(questions);
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
          const currentTest = allTests.find(t => t.slug === slug);
          
          if (!currentTest) {
            const latestTests = allTests
              .filter(t => t.slug !== slug)
              .slice(0, 10)
              .map(t => ({
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
            .filter(t => t.slug !== slug)
            .filter(t => {
              const otherTestTags = typeof t.tags === 'object' && !Array.isArray(t.tags)
                ? t.tags[locale] || t.tags.ko || []
                : t.tags || [];
              
              return Array.isArray(currentTestTags) && Array.isArray(otherTestTags) &&
                currentTestTags.some(tag => otherTestTags.includes(tag));
            })
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5)
            .map(t => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count
            }));

          const similarTestSlugs = new Set(similarTestsList.map(t => t.slug));
          const popularTestsList = allTests
            .filter(t => t.slug !== slug && !similarTestSlugs.has(t.slug))
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
  const shuffleQuestions = (questionList: FirstImpressionQuestion[]) => {
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
      const resultType = calculateFirstImpressionResult(newAnswers);
      const firstImpressionResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (firstImpressionResult) {
        setResult(firstImpressionResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (firstImpressionResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(firstImpressionResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 첫인상 결과:', firstImpressionResult.type, '→ 검색 키워드:', keywords[0]);
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
    const resultType = calculateFirstImpressionResult(finalAnswers);
    const firstImpressionResult = results.find(r => r.type === resultType);
    
    if (firstImpressionResult) {
      setResult(firstImpressionResult);
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
    const shareMessages = {
      ko: `나의 첫인상은 ${resultTitle}! 사람들이 나를 처음 봤을 때 이렇게 느낀대 😊 너는 어떤 첫인상?`,
      en: `My first impression is ${resultTitle}! This is how people feel when they first see me 😊 What's your first impression?`,
      ja: `私の第一印象は${resultTitle}！人々が私を初めて見た時の感じ方 😊 あなたの第一印象は？`,
      'zh-CN': `我的第一印象是${resultTitle}！人们第一次看到我时的感受 😊 你的第一印象是什么？`,
      'zh-TW': `我的第一印象是${resultTitle}！人們第一次看到我時的感受 😊 你的第一印象是什麼？`,
      vi: `Ấn tượng đầu tiên của tôi là ${resultTitle}! Đây là cách mọi người cảm nhận khi lần đầu nhìn thấy tôi 😊 Ấn tượng đầu tiên của bạn là gì?`,
      id: `Kesan pertama saya adalah ${resultTitle}! Ini yang dirasakan orang ketika pertama kali melihat saya 😊 Kesan pertama Anda seperti apa?`
    };
    const shareText = `${shareMessages[locale as keyof typeof shareMessages]}\n\nhttps://myquizoasis.com${window.location.pathname}`;
    
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
          'zh-TW': '結果已複製到剪貼簿！',
          vi: 'Kết quả đã được sao chép vào clipboard!',
          id: 'Hasil telah disalin ke clipboard!'
        };
        alert(copyMessages[locale as keyof typeof copyMessages]);
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        const errorMessages = {
          ko: '공유 기능을 사용할 수 없습니다.',
          en: 'Sharing feature is not available.',
          ja: '共有機能を使用できません。',
          'zh-CN': '无法使用分享功能。',
          'zh-TW': '無法使用分享功能。',
          vi: 'Không thể sử dụng tính năng chia sẻ.',
          id: 'Fitur berbagi tidak tersedia.'
        };
        alert(errorMessages[locale as keyof typeof errorMessages]);
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
    const shareMessages = {
      ko: `나의 첫인상은 ${resultTitle}! 사람들이 나를 처음 봤을 때 이렇게 느낀대 😊 너는 어떤 첫인상?`,
      en: `My first impression is ${resultTitle}! This is how people feel when they first see me 😊 What's your first impression?`,
      ja: `私の第一印象は${resultTitle}！人々が私を初めて見た時の感じ方 😊 あなたの第一印象は？`,
      'zh-CN': `我的第一印象是${resultTitle}！人们第一次看到我时的感受 😊 你的第一印象是什么？`,
      'zh-TW': `我的第一印象是${resultTitle}！人們第一次看到我時的感受 😊 你的第一印象是什麼？`,
      vi: `Ấn tượng đầu tiên của tôi là ${resultTitle}! Đây là cách mọi người cảm nhận khi lần đầu nhìn thấy tôi 😊 Ấn tượng đầu tiên của bạn là gì?`,
      id: `Kesan pertama saya adalah ${resultTitle}! Ini yang dirasakan orang ketika pertama kali melihat saya 😊 Kesan pertama Anda seperti apa?`
    };
    const shareText = result 
      ? `${shareMessages[locale as keyof typeof shareMessages]}\n\n${url}`
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
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const shareMessages = {
      ko: `나의 첫인상은 ${resultTitle}! 사람들이 나를 처음 봤을 때 이렇게 느낀대 😊 너는 어떤 첫인상?`,
      en: `My first impression is ${resultTitle}! This is how people feel when they first see me 😊 What's your first impression?`,
      ja: `私の第一印象は${resultTitle}！人々が私を初めて見た時の感じ方 😊 あなたの第一印象は？`,
      'zh-CN': `我的第一印象是${resultTitle}！人们第一次看到我时的感受 😊 你的第一印象是什么？`,
      'zh-TW': `我的第一印象是${resultTitle}！人們第一次看到我時的感受 😊 你的第一印象是什麼？`,
      vi: `Ấn tượng đầu tiên của tôi là ${resultTitle}! Đây là cách mọi người cảm nhận khi lần đầu nhìn thấy tôi 😊 Ấn tượng đầu tiên của bạn là gì?`,
      id: `Kesan pertama saya adalah ${resultTitle}! Ini yang dirasakan orang ketika pertama kali melihat saya 😊 Kesan pertama Anda seperti apa?`
    };
    const shareText = result 
      ? encodeURIComponent(shareMessages[locale as keyof typeof shareMessages])
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
    const shareMessages = {
      ko: `나의 첫인상은 ${resultTitle}! 사람들이 나를 처음 봤을 때 이렇게 느낀대 😊 너는 어떤 첫인상?`,
      en: `My first impression is ${resultTitle}! This is how people feel when they first see me 😊 What's your first impression?`,
      ja: `私の第一印象は${resultTitle}！人々が私を初めて見た時の感じ方 😊 あなたの第一印象は？`,
      'zh-CN': `我的第一印象是${resultTitle}！人们第一次看到我时的感受 😊 你的第一印象是什么？`,
      'zh-TW': `我的第一印象是${resultTitle}！人們第一次看到我時的感受 😊 你的第一印象是什麼？`,
      vi: `Ấn tượng đầu tiên của tôi là ${resultTitle}! Đây là cách mọi người cảm nhận khi lần đầu nhìn thấy tôi 😊 Ấn tượng đầu tiên của bạn là gì?`,
      id: `Kesan pertama saya adalah ${resultTitle}! Ini yang dirasakan orang ketika pertama kali melihat saya 😊 Kesan pertama Anda seperti apa?`
    };
    const shareDescription = result 
      ? shareMessages[locale as keyof typeof shareMessages]
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
    const shareMessages = {
      ko: `나의 첫인상은 ${resultTitle}! 사람들이 나를 처음 봤을 때 이렇게 느낀대 😊 너는 어떤 첫인상?`,
      en: `My first impression is ${resultTitle}! This is how people feel when they first see me 😊 What's your first impression?`,
      ja: `私の第一印象は${resultTitle}！人々が私を初めて見た時の感じ方 😊 あなたの第一印象は？`,
      'zh-CN': `我的第一印象是${resultTitle}！人们第一次看到我时的感受 😊 你的第一印象是什么？`,
      'zh-TW': `我的第一印象是${resultTitle}！人們第一次看到我時的感受 😊 你的第一印象是什麼？`,
      vi: `Ấn tượng đầu tiên của tôi là ${resultTitle}! Đây là cách mọi người cảm nhận khi lần đầu nhìn thấy tôi 😊 Ấn tượng đầu tiên của bạn là gì?`,
      id: `Kesan pertama saya adalah ${resultTitle}! Ini yang dirasakan orang ketika pertama kali melihat saya 😊 Kesan pertama Anda seperti apa?`
    };
    const shareText = result 
      ? shareMessages[locale as keyof typeof shareMessages]
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
    alert(copyMessages[locale as keyof typeof copyMessages]);
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
              src={getThumbnailUrl(thumbnail || 'test_041_first_impression.jpg')}
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
              {locale === 'ko' && (
                <>
                  <p className="font-bold text-gray-700">사람들이 나를 처음 봤을 때 어떻게 느낄까?</p>
                  <p>어떤 사람은 만나자마자 친근하게 느껴지고,</p>
                  <p>어떤 사람은 첫 만남에 차갑고 도도해 보입니다.</p>
                  <p>어떤 사람은 에너지가 넘치고,</p>
                  <p>어떤 사람은 조용하지만 신비로워 보입니다.</p>
                  <p className="whitespace-pre-line">당신은 다른 사람들에게 어떤 첫인상을 주나요?</p>
                  <p>12개 질문으로 당신의 진짜 첫인상을 확인하고,</p>
                  <p>더 나은 인간관계를 위한 팁을 받아보세요!</p>
                  <p>소요 시간 단 3분! 친구들과 비교해보는 재미도 쏠쏠 😊</p>
                </>
              )}
              {locale === 'en' && (
                <>
                  <p className="font-bold text-gray-700">How do people feel when they first see me?</p>
                  <p>Some people feel friendly right away,</p>
                  <p>Some people seem cold and arrogant at first meeting.</p>
                  <p>Some people are full of energy,</p>
                  <p>Some people are quiet but mysterious.</p>
                  <p className="whitespace-pre-line">What first impression do you give to others?</p>
                  <p>Check your real first impression with 12 questions,</p>
                  <p>and get tips for better relationships!</p>
                  <p>Takes only 3 minutes! It&apos;s also fun to compare with friends 😊</p>
                </>
              )}
              {locale === 'ja' && (
                <>
                  <p className="font-bold text-gray-700">人々が私を初めて見た時、どのように感じるでしょうか？</p>
                  <p>ある人は会った瞬間に親しみやすく感じられ、</p>
                  <p>ある人は初対面で冷たく高慢に見えます。</p>
                  <p>ある人はエネルギーに溢れ、</p>
                  <p>ある人は静かですが神秘的です。</p>
                  <p className="whitespace-pre-line">あなたは他の人にどのような第一印象を与えますか？</p>
                  <p>12の質問であなたの本当の第一印象を確認し、</p>
                  <p>より良い人間関係のためのヒントを受けましょう！</p>
                  <p>所要時間わずか3分！友達と比較するのも楽しいです 😊</p>
                </>
              )}
              {locale === 'zh-CN' && (
                <>
                  <p className="font-bold text-gray-700">人们第一次看到我时会有什么感觉？</p>
                  <p>有些人一见面就感到亲切，</p>
                  <p>有些人在初次见面时显得冷漠高傲。</p>
                  <p>有些人充满活力，</p>
                  <p>有些人安静但神秘。</p>
                  <p className="whitespace-pre-line">你给别人什么样的第一印象？</p>
                  <p>用12个问题检查你的真实第一印象，</p>
                  <p>获得更好人际关系的建议！</p>
                  <p>只需3分钟！和朋友比较也很有趣 😊</p>
                </>
              )}
              {locale === 'zh-TW' && (
                <>
                  <p className="font-bold text-gray-700">人們第一次看到我時會有什麼感覺？</p>
                  <p>有些人一見面就感到親切，</p>
                  <p>有些人在初次見面時顯得冷漠高傲。</p>
                  <p>有些人充滿活力，</p>
                  <p>有些人安靜但神秘。</p>
                  <p className="whitespace-pre-line">你給別人什麼樣的第一印象？</p>
                  <p>用12個問題檢查你的真實第一印象，</p>
                  <p>獲得更好人際關係的建議！</p>
                  <p>只需3分鐘！和朋友比較也很有趣 😊</p>
                </>
              )}
              {locale === 'vi' && (
                <>
                  <p className="font-bold text-gray-700">Mọi người cảm thấy như thế nào khi lần đầu nhìn thấy tôi?</p>
                  <p>Một số người cảm thấy thân thiện ngay lập tức,</p>
                  <p>Một số người có vẻ lạnh lùng và kiêu ngạo trong lần gặp đầu tiên.</p>
                  <p>Một số người tràn đầy năng lượng,</p>
                  <p>Một số người im lặng nhưng bí ẩn.</p>
                  <p className="whitespace-pre-line">Bạn tạo ấn tượng đầu tiên như thế nào với người khác?</p>
                  <p>Kiểm tra ấn tượng đầu tiên thực sự của bạn với 12 câu hỏi,</p>
                  <p>và nhận lời khuyên cho mối quan hệ tốt hơn!</p>
                  <p>Chỉ mất 3 phút! So sánh với bạn bè cũng rất thú vị 😊</p>
                </>
              )}
              {locale === 'id' && (
                <>
                  <p className="font-bold text-gray-700">Bagaimana perasaan orang ketika pertama kali melihat saya?</p>
                  <p>Beberapa orang merasa ramah langsung,</p>
                  <p>Beberapa orang terlihat dingin dan sombong saat pertama bertemu.</p>
                  <p>Beberapa orang penuh energi,</p>
                  <p>Beberapa orang pendiam tapi misterius.</p>
                  <p className="whitespace-pre-line">Kesan pertama seperti apa yang Anda berikan kepada orang lain?</p>
                  <p>Periksa kesan pertama asli Anda dengan 12 pertanyaan,</p>
                  <p>dan dapatkan tips untuk hubungan yang lebih baik!</p>
                  <p>Hanya butuh 3 menit! Membandingkan dengan teman juga menyenangkan 😊</p>
                </>
              )}
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
{locale === 'ko' && '테스트 시작'}
                {locale === 'en' && 'Start Test'}
                {locale === 'ja' && 'テスト開始'}
                {locale === 'zh-CN' && '开始测试'}
                {locale === 'zh-TW' && '開始測試'}
                {locale === 'vi' && 'Bắt đầu'}
                {locale === 'id' && 'Mulai Tes'}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
{locale === 'ko' && `총 ${formatPlayCount(displayPlayCount, locale as Locale)}명이 참여했어요!`}
              {locale === 'en' && `${formatPlayCount(displayPlayCount, locale as Locale)} people participated!`}
              {locale === 'ja' && `${formatPlayCount(displayPlayCount, locale as Locale)}人が参加しました！`}
              {locale === 'zh-CN' && `共有${formatPlayCount(displayPlayCount, locale as Locale)}人参与！`}
              {locale === 'zh-TW' && `共有${formatPlayCount(displayPlayCount, locale as Locale)}人參與！`}
              {locale === 'vi' && `${formatPlayCount(displayPlayCount, locale as Locale)} người đã tham gia!`}
              {locale === 'id' && `${formatPlayCount(displayPlayCount, locale as Locale)} orang berpartisipasi!`}
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
{locale === 'ko' && '친구와 함께 해보기'}
                {locale === 'en' && 'Try with friends'}
                {locale === 'ja' && '友達と一緒にやってみよう'}
                {locale === 'zh-CN' && '和朋友一起试试'}
                {locale === 'zh-TW' && '和朋友一起試試'}
                {locale === 'vi' && 'Thử với bạn bè'}
                {locale === 'id' && 'Coba dengan teman'}
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
{locale === 'ko' && '유사한 다른 테스트'}
                {locale === 'en' && 'Similar Other Tests'}
                {locale === 'ja' && '類似の他のテスト'}
                {locale === 'zh-CN' && '类似的其他测试'}
                {locale === 'zh-TW' && '類似的其他測試'}
                {locale === 'vi' && 'Các bài kiểm tra tương tự khác'}
                {locale === 'id' && 'Tes Serupa Lainnya'}
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
        <div className="mb-8 w-full max-w-[680pxmeasured">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 상단)"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">
            {locale === 'ko' && '결과 분석 중...'}
            {locale === 'en' && 'Analyzing results...'}
            {locale === 'ja' && '結果を分析中...'}
            {locale === 'zh-CN' && '正在分析结果...'}
            {locale === 'zh-TW' && '正在分析結果...'}
            {locale === 'vi' && 'Đang phân tích kết quả...'}
            {locale === 'id' && 'Menganalisis hasil...'}
          </p>
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
{locale === 'ko' && '🎉 테스트 완료!'}
            {locale === 'en' && '🎉 Test Complete!'}
            {locale === 'ja' && '🎉 テスト完了！'}
            {locale === 'zh-CN' && '🎉 测试完成！'}
            {locale === 'zh-TW' && '🎉 測試完成！'}
            {locale === 'vi' && '🎉 Hoàn thành bài kiểm tra!'}
            {locale === 'id' && '🎉 Tes Selesai!'}
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
{locale === 'ko' && '분석 결과 보기'}
            {locale === 'en' && 'View Analysis Results'}
            {locale === 'ja' && '分析結果を見る'}
            {locale === 'zh-CN' && '查看分析结果'}
            {locale === 'zh-TW' && '查看分析結果'}
            {locale === 'vi' && 'Xem kết quả phân tích'}
            {locale === 'id' && 'Lihat Hasil Analisis'}
          </button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    const resultDetailedDescription = result.detailedDescription[locale as keyof typeof result.detailedDescription] || result.detailedDescription.ko;
    const resultPros = result.pros;
    const resultCons = result.cons;
    const resultSuitableJobs = result.suitableJobs;
    const resultAdvice = result.advice[locale as keyof typeof result.advice] || result.advice.ko;
    const resultCompatibleTypes = result.compatibleTypes;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
{locale === 'ko' && '당신의 결과'}
                {locale === 'en' && 'Your Result'}
                {locale === 'ja' && 'あなたの結果'}
                {locale === 'zh-CN' && '你的结果'}
                {locale === 'zh-TW' && '你的結果'}
                {locale === 'vi' && 'Kết quả của bạn'}
                {locale === 'id' && 'Hasil Anda'}
              </h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {resultDescription}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultDetailedDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
{locale === 'ko' && '✅ 장점'}
                  {locale === 'en' && '✅ Strengths'}
                  {locale === 'ja' && '✅ 長所'}
                  {locale === 'zh-CN' && '✅ 优点'}
                  {locale === 'zh-TW' && '✅ 優點'}
                  {locale === 'vi' && '✅ Điểm mạnh'}
                  {locale === 'id' && '✅ Kekuatan'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.map((pro, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {pro[locale as keyof typeof pro] || pro.ko}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
{locale === 'ko' && '⚠️ 단점'}
                  {locale === 'en' && '⚠️ Weaknesses'}
                  {locale === 'ja' && '⚠️ 短所'}
                  {locale === 'zh-CN' && '⚠️ 缺点'}
                  {locale === 'zh-TW' && '⚠️ 缺點'}
                  {locale === 'vi' && '⚠️ Điểm yếu'}
                  {locale === 'id' && '⚠️ Kelemahan'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.map((con, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {con[locale as keyof typeof con] || con.ko}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
{locale === 'ko' && '💼 어울리는 직업'}
                {locale === 'en' && '💼 Suitable Jobs'}
                {locale === 'ja' && '💼 適した職業'}
                {locale === 'zh-CN' && '💼 适合的职业'}
                {locale === 'zh-TW' && '💼 適合的職業'}
                {locale === 'vi' && '💼 Nghề nghiệp phù hợp'}
                {locale === 'id' && '💼 Pekerjaan yang Cocok'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {resultSuitableJobs.map((job, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {job[locale as keyof typeof job] || job.ko}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
{locale === 'ko' && '💡 조언'}
                {locale === 'en' && '💡 Advice'}
                {locale === 'ja' && '💡 アドバイス'}
                {locale === 'zh-CN' && '💡 建议'}
                {locale === 'zh-TW' && '💡 建議'}
                {locale === 'vi' && '💡 Lời khuyên'}
                {locale === 'id' && '💡 Saran'}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
{locale === 'ko' && '💖 궁합 좋은 첫인상'}
                {locale === 'en' && '💖 Compatible First Impressions'}
                {locale === 'ja' && '💖 相性の良い第一印象'}
                {locale === 'zh-CN' && '💖 相配的第一印象'}
                {locale === 'zh-TW' && '💖 相配的第一印象'}
                {locale === 'vi' && '💖 Ấn tượng đầu tiên tương thích'}
                {locale === 'id' && '💖 Kesan Pertama yang Kompatibel'}
              </h3>
              <div className="space-y-2">
                {resultCompatibleTypes.map((compatible, index) => (
                  <div key={index} className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {compatible[locale as keyof typeof compatible] || compatible.ko}
                    </p>
                  </div>
                ))}
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
{locale === 'ko' && '결과 공유하기'}
                {locale === 'en' && 'Share Result'}
                {locale === 'ja' && '結果を共有'}
                {locale === 'zh-CN' && '分享结果'}
                {locale === 'zh-TW' && '分享結果'}
                {locale === 'vi' && 'Chia sẻ kết quả'}
                {locale === 'id' && 'Bagikan Hasil'}
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
{locale === 'ko' && '다시 테스트하기'}
                {locale === 'en' && 'Retake Test'}
                {locale === 'ja' && '再テスト'}
                {locale === 'zh-CN' && '重新测试'}
                {locale === 'zh-TW' && '重新測試'}
                {locale === 'vi' && 'Làm lại bài kiểm tra'}
                {locale === 'id' && 'Ulangi Tes'}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
              >
{locale === 'ko' && '다른 테스트 보기'}
                {locale === 'en' && 'View Other Tests'}
                {locale === 'ja' && '他のテストを見る'}
                {locale === 'zh-CN' && '查看其他测试'}
                {locale === 'zh-TW' && '查看其他測試'}
                {locale === 'vi' && 'Xem bài kiểm tra khác'}
                {locale === 'id' && 'Lihat Tes Lainnya'}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
{locale === 'ko' && '친구와 함께 해보기'}
                {locale === 'en' && 'Try with friends'}
                {locale === 'ja' && '友達と一緒にやってみよう'}
                {locale === 'zh-CN' && '和朋友一起试试'}
                {locale === 'zh-TW' && '和朋友一起試試'}
                {locale === 'vi' && 'Thử với bạn bè'}
                {locale === 'id' && 'Coba dengan teman'}
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
{locale === 'ko' && '🎯 유사한 다른 테스트 추천 톱5'}
                  {locale === 'en' && '🎯 Top 5 Similar Test Recommendations'}
                  {locale === 'ja' && '🎯 類似テストおすすめトップ5'}
                  {locale === 'zh-CN' && '🎯 类似测试推荐前5'}
                  {locale === 'zh-TW' && '🎯 類似測試推薦前5'}
                  {locale === 'vi' && '🎯 Top 5 bài kiểm tra tương tự được đề xuất'}
                  {locale === 'id' && '🎯 Top 5 Rekomendasi Tes Serupa'}
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
{locale === 'ko' && '🔥 요즘 인기 테스트 추천 톱5'}
                  {locale === 'en' && '🔥 Top 5 Popular Test Recommendations'}
                  {locale === 'ja' && '🔥 人気テストおすすめトップ5'}
                  {locale === 'zh-CN' && '🔥 热门测试推荐前5'}
                  {locale === 'zh-TW' && '🔥 熱門測試推薦前5'}
                  {locale === 'vi' && '🔥 Top 5 bài kiểm tra phổ biến được đề xuất'}
                  {locale === 'id' && '🔥 Top 5 Rekomendasi Tes Populer'}
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
  const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
{locale === 'ko' && '진행률'}
              {locale === 'en' && 'Progress'}
              {locale === 'ja' && '進捗'}
              {locale === 'zh-CN' && '进度'}
              {locale === 'zh-TW' && '進度'}
              {locale === 'vi' && 'Tiến độ'}
              {locale === 'id' && 'Kemajuan'}
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
{locale === 'ko' && '친구와 함께 해보기'}
              {locale === 'en' && 'Try with friends'}
              {locale === 'ja' && '友達と一緒にやってみよう'}
              {locale === 'zh-CN' && '和朋友一起试试'}
              {locale === 'zh-TW' && '和朋友一起試試'}
              {locale === 'vi' && 'Thử với bạn bè'}
              {locale === 'id' && 'Coba dengan teman'}
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