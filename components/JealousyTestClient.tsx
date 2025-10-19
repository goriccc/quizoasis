'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { JealousyQuestion, JealousyResult, calculateJealousyResult } from '@/lib/jealousyData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface JealousyTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: JealousyQuestion[];
  results: JealousyResult[];
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
  return t(`jealousyTest.result.compatibility.${key}`) || '';
};

export default function JealousyTestClient({ 
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
}: JealousyTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<JealousyResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<JealousyQuestion[]>(questions);
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
  const shuffleQuestions = (questionList: JealousyQuestion[]) => {
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
      const resultType = calculateJealousyResult(newAnswers);
      const jealousyResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (jealousyResult) {
        setResult(jealousyResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (jealousyResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(jealousyResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 질투심 결과:', jealousyResult.type, '→ 검색 키워드:', keywords[0]);
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
    const resultType = calculateJealousyResult(finalAnswers);
    const jealousyResult = results.find(r => r.type === resultType);
    
    if (jealousyResult) {
      setResult(jealousyResult);
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
    
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko;
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
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
      alert('링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.');
    } catch (error) {
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
    };
    
    const shareText = result 
      ? shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나의 질투 레벨은 ${resultTitle}! 너는 얼마나 질투해? 같이 테스트해보자 😂💚`,
      en: `My jealousy level is ${resultTitle}! How jealous are you? Let's test together 😂💚`,
      ja: `私の嫉妬レベルは${resultTitle}！あなたはどのくらい嫉妬する？一緒にテストしよう 😂💚`,
      'zh-CN': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起测试吧 😂💚`,
      'zh-TW': `我的嫉妒水平是${resultTitle}！你有多嫉妒？一起測試吧 😂💚`,
      vi: `Mức độ ghen tuông của tôi là ${resultTitle}! Bạn ghen tuông đến mức nào? Cùng thử nhé 😂💚`,
      id: `Level cemburu saya adalah ${resultTitle}! Seberapa cemburu Anda? Mari test bersama 😂💚`
    };
    
    const copyMessages = {
      ko: { success: '링크가 복사되었습니다!', error: '링크 복사에 실패했습니다.' },
      en: { success: 'Link copied!', error: 'Failed to copy link.' },
      ja: { success: 'リンクがコピーされました！', error: 'リンクのコピーに失敗しました。' },
      'zh-CN': { success: '链接已复制！', error: '复制链接失败。' },
      'zh-TW': { success: '連結已複製！', error: '複製連結失敗。' },
      vi: { success: 'Đã sao chép liên kết!', error: 'Sao chép liên kết thất bại.' },
      id: { success: 'Tautan berhasil disalin!', error: 'Gagal menyalin tautan.' }
    };
    
    const shareText = result 
      ? `${shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko}\n\n${url}`
      : `${title}\n\n${url}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      alert(copyMessages[locale as keyof typeof copyMessages]?.success || copyMessages.ko.success);
    }).catch(() => {
      alert(copyMessages[locale as keyof typeof copyMessages]?.error || copyMessages.ko.error);
    });
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
              src={getThumbnailUrl(thumbnail || 'test_038_jealousy_level.jpg')}
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
              {typeof description === 'string' ? (
                <div className="whitespace-pre-line">
                  {description.split('\n').map((line, index) => (
                    <p key={index} className={index === 0 ? "font-bold text-gray-700" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="whitespace-pre-line">
                  {(typeof description === 'string' ? description : (description as any)[locale] || (description as any).ko).split('\n').map((line: string, index: number) => (
                    <p key={index} className={index === 0 ? "font-bold text-gray-700" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
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
                {locale === 'vi' && 'Bắt đầu kiểm tra'}
                {locale === 'id' && 'Mulai Tes'}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {locale === 'ko' && `총 ${formatPlayCount(displayPlayCount, locale as Locale)}명이 참여했어요!`}
              {locale === 'en' && `Total ${formatPlayCount(displayPlayCount, locale as Locale)} people participated!`}
              {locale === 'ja' && `合計${formatPlayCount(displayPlayCount, locale as Locale)}人が参加しました！`}
              {locale === 'zh-CN' && `总共${formatPlayCount(displayPlayCount, locale as Locale)}人参与了！`}
              {locale === 'zh-TW' && `總共${formatPlayCount(displayPlayCount, locale as Locale)}人參與了！`}
              {locale === 'vi' && `Tổng cộng ${formatPlayCount(displayPlayCount, locale as Locale)} người đã tham gia!`}
              {locale === 'id' && `Total ${formatPlayCount(displayPlayCount, locale as Locale)} orang berpartisipasi!`}
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
                {locale === 'en' && 'Try with Friends'}
                {locale === 'ja' && '友達と一緒にやってみよう'}
                {locale === 'zh-CN' && '和朋友一起试试'}
                {locale === 'zh-TW' && '和朋友一起試試'}
                {locale === 'vi' && 'Thử cùng bạn bè'}
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
            {locale === 'vi' && '🎉 Hoàn thành kiểm tra!'}
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
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko;
    const resultDescription = typeof result.description === 'string' ? result.description : result.description[locale] || result.description.ko;
    
    // 다국어 쉼표 처리: 영어 쉼표+공백, 일본어 쉼표, 중국어 쉼표 모두 지원
    const splitByCommas = (text: string) => {
      // 쉼표 뒤 공백을 포함한 패턴으로 분할
      return text.split(/,\s+|，\s*|、\s*/).map(item => item.trim()).filter(item => item.length > 0);
    };
    
    const resultCharacteristics = splitByCommas(typeof result.characteristics === 'string' ? result.characteristics : result.characteristics[locale] || result.characteristics.ko);
    const resultPros = splitByCommas(typeof result.pros === 'string' ? result.pros : result.pros[locale] || result.pros.ko);
    const resultCons = splitByCommas(typeof result.cons === 'string' ? result.cons : result.cons[locale] || result.cons.ko);
    const resultAdvice = typeof result.advice === 'string' ? result.advice : result.advice[locale] || result.advice.ko;

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
              <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                {locale === 'ko' && '🎯 특징'}
                {locale === 'en' && '🎯 Characteristics'}
                {locale === 'ja' && '🎯 特徴'}
                {locale === 'zh-CN' && '🎯 特征'}
                {locale === 'zh-TW' && '🎯 特徵'}
                {locale === 'vi' && '🎯 Đặc điểm'}
                {locale === 'id' && '🎯 Karakteristik'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {resultCharacteristics.map((char, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  {locale === 'ko' && '✅ 장점'}
                  {locale === 'en' && '✅ Advantages'}
                  {locale === 'ja' && '✅ 長所'}
                  {locale === 'zh-CN' && '✅ 优点'}
                  {locale === 'zh-TW' && '✅ 優點'}
                  {locale === 'vi' && '✅ Ưu điểm'}
                  {locale === 'id' && '✅ Keunggulan'}
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
                  {locale === 'ko' && '⚠️ 단점'}
                  {locale === 'en' && '⚠️ Disadvantages'}
                  {locale === 'ja' && '⚠️ 短所'}
                  {locale === 'zh-CN' && '⚠️ 缺点'}
                  {locale === 'zh-TW' && '⚠️ 缺點'}
                  {locale === 'vi' && '⚠️ Nhược điểm'}
                  {locale === 'id' && '⚠️ Kekurangan'}
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

            {result.compatibility && (
              <>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {result.compatibility.best && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">
                        {locale === 'ko' && '💖 최고 궁합'}
                        {locale === 'en' && '💖 Best Match'}
                        {locale === 'ja' && '💖 最高の相性'}
                        {locale === 'zh-CN' && '💖 最佳匹配'}
                        {locale === 'zh-TW' && '💖 最佳匹配'}
                        {locale === 'vi' && '💖 Kết hợp tốt nhất'}
                        {locale === 'id' && '💖 Kecocokan Terbaik'}
                      </h3>
                      {typeof result.compatibility.best === 'string' ? (
                        <p className="text-sm text-gray-700">{result.compatibility.best}</p>
                      ) : Array.isArray(result.compatibility.best) ? (
                        result.compatibility.best.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {result.compatibility.best.map(type => {
                              const partner = results.find(r => r.type === type);
                              if (!partner) return null;
                              const partnerTitle = typeof partner.title === 'string' ? partner.title : partner.title[locale] || partner.title.ko;
                              return (
                                <span
                                  key={type}
                                  className="bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-2"
                                >
                                  <span className="text-base">{partner.emoji}</span>
                                  <span>{partnerTitle}</span>
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700">
                            {locale === 'ko' && '없음'}
                            {locale === 'en' && 'None'}
                            {locale === 'ja' && 'なし'}
                            {locale === 'zh-CN' && '无'}
                            {locale === 'zh-TW' && '無'}
                            {locale === 'vi' && 'Không có'}
                            {locale === 'id' && 'Tidak ada'}
                          </p>
                        )
                      ) : (
                        <p className="text-sm text-gray-700">
                          {typeof result.compatibility.best === 'string' 
                            ? result.compatibility.best 
                            : (result.compatibility.best as any)[locale] || (result.compatibility.best as any).ko}
                        </p>
                      )}
                    </div>
                  )}

                  {result.compatibility.good && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">
                        {locale === 'ko' && '😊 좋은 궁합'}
                        {locale === 'en' && '😊 Good Match'}
                        {locale === 'ja' && '😊 良い相性'}
                        {locale === 'zh-CN' && '😊 良好匹配'}
                        {locale === 'zh-TW' && '😊 良好匹配'}
                        {locale === 'vi' && '😊 Kết hợp tốt'}
                        {locale === 'id' && '😊 Kecocokan Baik'}
                      </h3>
                      {typeof result.compatibility.good === 'string' ? (
                        <p className="text-sm text-gray-700">{result.compatibility.good}</p>
                      ) : Array.isArray(result.compatibility.good) ? (
                        result.compatibility.good.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {result.compatibility.good.map(type => {
                              const partner = results.find(r => r.type === type);
                              if (!partner) return null;
                              const partnerTitle = typeof partner.title === 'string' ? partner.title : partner.title[locale] || partner.title.ko;
                              return (
                                <span
                                  key={type}
                                  className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-2"
                                >
                                  <span className="text-base">{partner.emoji}</span>
                                  <span>{partnerTitle}</span>
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700">
                            {locale === 'ko' && '없음'}
                            {locale === 'en' && 'None'}
                            {locale === 'ja' && 'なし'}
                            {locale === 'zh-CN' && '无'}
                            {locale === 'zh-TW' && '無'}
                            {locale === 'vi' && 'Không có'}
                            {locale === 'id' && 'Tidak ada'}
                          </p>
                        )
                      ) : (
                        <p className="text-sm text-gray-700">
                          {typeof result.compatibility.good === 'string' 
                            ? result.compatibility.good 
                            : (result.compatibility.good as any)[locale] || (result.compatibility.good as any).ko}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  {result.compatibility.careful && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">
                        {locale === 'ko' && '⚠️ 주의 필요'}
                        {locale === 'en' && '⚠️ Caution Needed'}
                        {locale === 'ja' && '⚠️ 注意が必要'}
                        {locale === 'zh-CN' && '⚠️ 需要注意'}
                        {locale === 'zh-TW' && '⚠️ 需要注意'}
                        {locale === 'vi' && '⚠️ Cần thận trọng'}
                        {locale === 'id' && '⚠️ Perhatian Diperlukan'}
                      </h3>
                      {typeof result.compatibility.careful === 'string' ? (
                        <p className="text-sm text-gray-700">{result.compatibility.careful}</p>
                      ) : Array.isArray(result.compatibility.careful) ? (
                        result.compatibility.careful.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {result.compatibility.careful.map(type => {
                              const partner = results.find(r => r.type === type);
                              if (!partner) return null;
                              const partnerTitle = typeof partner.title === 'string' ? partner.title : partner.title[locale] || partner.title.ko;
                              return (
                                <span
                                  key={type}
                                  className="bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-2"
                                >
                                  <span className="text-base">{partner.emoji}</span>
                                  <span>{partnerTitle}</span>
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700">
                            {locale === 'ko' && '없음'}
                            {locale === 'en' && 'None'}
                            {locale === 'ja' && 'なし'}
                            {locale === 'zh-CN' && '无'}
                            {locale === 'zh-TW' && '無'}
                            {locale === 'vi' && 'Không có'}
                            {locale === 'id' && 'Tidak ada'}
                          </p>
                        )
                      ) : (
                        <p className="text-sm text-gray-700">
                          {typeof result.compatibility.careful === 'string' 
                            ? result.compatibility.careful 
                            : (result.compatibility.careful as any)[locale] || (result.compatibility.careful as any).ko}
                        </p>
                      )}
                    </div>
                  )}

                  {result.compatibility.difficult && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">
                        {locale === 'ko' && '❌ 어려운 궁합'}
                        {locale === 'en' && '❌ Difficult Match'}
                        {locale === 'ja' && '❌ 難しい相性'}
                        {locale === 'zh-CN' && '❌ 困难匹配'}
                        {locale === 'zh-TW' && '❌ 困難匹配'}
                        {locale === 'vi' && '❌ Kết hợp khó khăn'}
                        {locale === 'id' && '❌ Kecocokan Sulit'}
                      </h3>
                      {typeof result.compatibility.difficult === 'string' ? (
                        <p className="text-sm text-gray-700">{result.compatibility.difficult}</p>
                      ) : Array.isArray(result.compatibility.difficult) ? (
                        result.compatibility.difficult.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {result.compatibility.difficult.map(type => {
                              const partner = results.find(r => r.type === type);
                              if (!partner) return null;
                              const partnerTitle = typeof partner.title === 'string' ? partner.title : partner.title[locale] || partner.title.ko;
                              return (
                                <span
                                  key={type}
                                  className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-2"
                                >
                                  <span className="text-base">{partner.emoji}</span>
                                  <span>{partnerTitle}</span>
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700">
                            {locale === 'ko' && '없음'}
                            {locale === 'en' && 'None'}
                            {locale === 'ja' && 'なし'}
                            {locale === 'zh-CN' && '无'}
                            {locale === 'zh-TW' && '無'}
                            {locale === 'vi' && 'Không có'}
                            {locale === 'id' && 'Tidak ada'}
                          </p>
                        )
                      ) : (
                        <p className="text-sm text-gray-700">
                          {typeof result.compatibility.difficult === 'string' 
                            ? result.compatibility.difficult 
                            : (result.compatibility.difficult as any)[locale] || (result.compatibility.difficult as any).ko}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

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
                {locale === 'en' && 'Try with Friends'}
                {locale === 'ja' && '友達と一緒にやってみよう'}
                {locale === 'zh-CN' && '和朋友一起试试'}
                {locale === 'zh-TW' && '和朋友一起試試'}
                {locale === 'vi' && 'Thử cùng bạn bè'}
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
                  {locale === 'ja' && '🎯 類似の他のテストおすすめトップ5'}
                  {locale === 'zh-CN' && '🎯 类似其他测试推荐前5'}
                  {locale === 'zh-TW' && '🎯 類似其他測試推薦前5'}
                  {locale === 'vi' && '🎯 Top 5 bài kiểm tra tương tự được đề xuất'}
                  {locale === 'id' && '🎯 Rekomendasi Tes Serupa Top 5'}
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
                  {locale === 'zh-CN' && '🔥 热门测试推荐前5名'}
                  {locale === 'zh-TW' && '🔥 熱門測試推薦前5名'}
                  {locale === 'vi' && '🔥 Top 5 Bài Kiểm Tra Phổ Biến'}
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
  const questionText = typeof question.question === 'string' ? question.question : question.question[locale] || question.question.ko;
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
              const optionText = typeof option.text === 'string' ? option.text : option.text[locale] || option.text.ko;
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
              {locale === 'en' && 'Try with Friends'}
              {locale === 'ja' && '友達と一緒にやってみよう'}
              {locale === 'zh-CN' && '和朋友一起试试'}
              {locale === 'zh-TW' && '和朋友一起試試'}
              {locale === 'vi' && 'Thử cùng bạn bè'}
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