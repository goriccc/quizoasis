'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { CrushQuestion, CrushResult, calculateCrushResult } from '@/lib/crushData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface CrushTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: CrushQuestion[];
  results: CrushResult[];
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

export default function CrushTestClient({ 
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
}: CrushTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<CrushResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<CrushQuestion[]>(questions);
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
  }, [currentQuestion, started]);

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
  const shuffleQuestions = (questionList: CrushQuestion[]) => {
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
      const resultType = calculateCrushResult(newAnswers);
      const crushResult = results.find(r => r.type === resultType);
      
      // 결과 설정
      if (crushResult) {
        setResult(crushResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (crushResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(crushResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 짝사랑 결과:', crushResult.type, '→ 검색 키워드:', keywords[0]);
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
    
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko;
    const shareText = locale === 'ko' ? 
      `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂\n\n${window.location.href}` :
      locale === 'en' ?
      `My crush success rate is ${resultTitle}! What's yours? Let's try together 💘😂\n\n${window.location.href}` :
      locale === 'ja' ?
      `私の片思い成功率は${resultTitle}！あなたは何％？一緒にやってみよう 💘😂\n\n${window.location.href}` :
      locale === 'zh-CN' ?
      `我的暗恋成功率是${resultTitle}！你的呢？一起来试试吧 💘😂\n\n${window.location.href}` :
      locale === 'zh-TW' ?
      `我的暗戀成功率是${resultTitle}！你的呢？一起來試試吧 💘😂\n\n${window.location.href}` :
      locale === 'id' ?
      `Tingkat keberhasilan cinta sepihak saya adalah ${resultTitle}! Bagaimana dengan Anda? Mari coba bersama 💘😂\n\n${window.location.href}` :
      locale === 'vi' ?
      `Tỷ lệ thành công tình yêu đơn phương của tôi là ${resultTitle}! Bạn thì sao? Hãy thử cùng nhau 💘😂\n\n${window.location.href}` :
      `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂\n\n${window.location.href}`;
    
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
    const url = encodeURIComponent(window.location.href);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = window.location.href;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result ? (
      locale === 'ko' ? 
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂\n\n${url}` :
        locale === 'en' ?
        `My crush success rate is ${resultTitle}! What's yours? Let's try together 💘😂\n\n${url}` :
        locale === 'ja' ?
        `私の片思い成功率は${resultTitle}！あなたは何％？一緒にやってみよう 💘😂\n\n${url}` :
        locale === 'zh-CN' ?
        `我的暗恋成功率是${resultTitle}！你的呢？一起来试试吧 💘😂\n\n${url}` :
        locale === 'zh-TW' ?
        `我的暗戀成功率是${resultTitle}！你的呢？一起來試試吧 💘😂\n\n${url}` :
        locale === 'id' ?
        `Tingkat keberhasilan cinta sepihak saya adalah ${resultTitle}! Bagaimana dengan Anda? Mari coba bersama 💘😂\n\n${url}` :
        locale === 'vi' ?
        `Tỷ lệ thành công tình yêu đơn phương của tôi là ${resultTitle}! Bạn thì sao? Hãy thử cùng nhau 💘😂\n\n${url}` :
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂\n\n${url}`
    ) : `${title}\n\n${url}`;
    
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
    const url = encodeURIComponent(window.location.href);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result ? (
      locale === 'ko' ? 
        encodeURIComponent(`나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂`) :
        locale === 'en' ?
        encodeURIComponent(`My crush success rate is ${resultTitle}! What's yours? Let's try together 💘😂`) :
        locale === 'ja' ?
        encodeURIComponent(`私の片思い成功率は${resultTitle}！あなたは何％？一緒にやってみよう 💘😂`) :
        locale === 'zh-CN' ?
        encodeURIComponent(`我的暗恋成功率是${resultTitle}！你的呢？一起来试试吧 💘😂`) :
        locale === 'zh-TW' ?
        encodeURIComponent(`我的暗戀成功率是${resultTitle}！你的呢？一起來試試吧 💘😂`) :
        locale === 'id' ?
        encodeURIComponent(`Tingkat keberhasilan cinta sepihak saya adalah ${resultTitle}! Bagaimana dengan Anda? Mari coba bersama 💘😂`) :
        locale === 'vi' ?
        encodeURIComponent(`Tỷ lệ thành công tình yêu đơn phương của tôi là ${resultTitle}! Bạn thì sao? Hãy thử cùng nhau 💘😂`) :
        encodeURIComponent(`나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂`)
    ) : encodeURIComponent(title);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const currentUrl = window.location.href;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareDescription = result ? (
      locale === 'ko' ? 
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂` :
        locale === 'en' ?
        `My crush success rate is ${resultTitle}! What's yours? Let's try together 💘😂` :
        locale === 'ja' ?
        `私の片思い成功率は${resultTitle}！あなたは何％？一緒にやってみよう 💘😂` :
        locale === 'zh-CN' ?
        `我的暗恋成功率是${resultTitle}！你的呢？一起来试试吧 💘😂` :
        locale === 'zh-TW' ?
        `我的暗戀成功率是${resultTitle}！你的呢？一起來試試吧 💘😂` :
        locale === 'id' ?
        `Tingkat keberhasilan cinta sepihak saya adalah ${resultTitle}! Bagaimana dengan Anda? Mari coba bersama 💘😂` :
        locale === 'vi' ?
        `Tỷ lệ thành công tình yêu đơn phương của tôi là ${resultTitle}! Bạn thì sao? Hãy thử cùng nhau 💘😂` :
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂`
    ) : description;
    
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
    const url = encodeURIComponent(window.location.href);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result ? (
      locale === 'ko' ? 
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂` :
        locale === 'en' ?
        `My crush success rate is ${resultTitle}! What's yours? Let's try together 💘😂` :
        locale === 'ja' ?
        `私の片思い成功率は${resultTitle}！あなたは何％？一緒にやってみよう 💘😂` :
        locale === 'zh-CN' ?
        `我的暗恋成功率是${resultTitle}！你的呢？一起来试试吧 💘😂` :
        locale === 'zh-TW' ?
        `我的暗戀成功率是${resultTitle}！你的呢？一起來試試吧 💘😂` :
        locale === 'id' ?
        `Tingkat keberhasilan cinta sepihak saya adalah ${resultTitle}! Bagaimana dengan Anda? Mari coba bersama 💘😂` :
        locale === 'vi' ?
        `Tỷ lệ thành công tình yêu đơn phương của tôi là ${resultTitle}! Bạn thì sao? Hãy thử cùng nhau 💘😂` :
        `나의 짝사랑 성공률은 ${resultTitle}! 너는 몇 프로야? 같이 해보자 💘😂`
    ) : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
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
              src={getThumbnailUrl(thumbnail || 'test_033_crush_success_rate.jpg')}
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
              {locale === 'ko' ? (
                <>
                  <p className="font-bold text-gray-700">「10%? 50%? 아니면 90%?」</p>
                  <p>마음속에 숨겨둔 그 사람…</p>
                  <p>과연 성공 가능성은 얼마나 될까요?</p>
                  <p>상대방의 반응, 나의 매력, 타이밍, 노력도...</p>
                  <p>모든 것을 종합해서 성공률을 계산해드립니다!</p>
                  <p className="whitespace-pre-line">「나 가능성 있나?」 궁금했다면? 「고백해도 될까?」 망설였다면?</p>
                  <p>12개 질문으로 당신의 짝사랑 성공률을 정확하게 분석해드려요!</p>
                  <p>친구들과 비교하면 더 재미있습니다 💘</p>
                  <p>소요 시간 단 3분! 용기내서 시작해보세요! 💪</p>
                </>
              ) : locale === 'en' ? (
                <>
                  <p className="font-bold text-gray-700">&quot;10%? 50%? Or 90%?&quot;</p>
                  <p>That person hidden in your heart...</p>
                  <p>How much is the possibility of success?</p>
                  <p>The other person&apos;s reaction, my charm, timing, effort...</p>
                  <p>We calculate the success rate by combining everything!</p>
                  <p className="whitespace-pre-line">If you were curious &quot;Do I have a chance?&quot; If you hesitated &quot;Should I confess?&quot;</p>
                  <p>We accurately analyze your crush success rate with 12 questions!</p>
                  <p>It&apos;s more fun to compare with friends 💘</p>
                  <p>Takes only 3 minutes! Take courage and start! 💪</p>
                </>
              ) : locale === 'ja' ? (
                <>
                  <p className="font-bold text-gray-700">「10%？50%？それとも90%？」</p>
                  <p>心の中に隠したその人…</p>
                  <p>果たして成功の可能性はどのくらいでしょうか？</p>
                  <p>相手の反応、私の魅力、タイミング、努力も...</p>
                  <p>すべてを総合して成功率を計算してくれます！</p>
                  <p className="whitespace-pre-line">「私に可能性ある？」気になったなら？「告白してもいい？」迷ったなら？</p>
                  <p>12個の質問であなたの片思い成功率を正確に分析してくれます！</p>
                  <p>友達と比較するともっと楽しいです💘</p>
                  <p>所要時間わずか3分！勇気を出して始めてみてください！💪</p>
                </>
              ) : locale === 'zh-CN' ? (
                <>
                  <p className="font-bold text-gray-700">「10%？50%？还是90%？」</p>
                  <p>藏在心里的那个人…</p>
                  <p>到底成功的可能性有多大呢？</p>
                  <p>对方的反应、我的魅力、时机、努力...</p>
                  <p>综合一切来计算成功率！</p>
                  <p className="whitespace-pre-line">如果好奇「我有机会吗？」如果犹豫「可以告白吗？」</p>
                  <p>用12个问题准确分析你的暗恋成功率！</p>
                  <p>和朋友比较更有趣💘</p>
                  <p>只需3分钟！鼓起勇气开始吧！💪</p>
                </>
              ) : locale === 'zh-TW' ? (
                <>
                  <p className="font-bold text-gray-700">「10%？50%？還是90%？」</p>
                  <p>藏在心裡的那個人…</p>
                  <p>到底成功的可能性有多大呢？</p>
                  <p>對方的反應、我的魅力、時機、努力...</p>
                  <p>綜合一切來計算成功率！</p>
                  <p className="whitespace-pre-line">如果好奇「我有機會嗎？」如果猶豫「可以告白嗎？」</p>
                  <p>用12個問題準確分析你的暗戀成功率！</p>
                  <p>和朋友比較更有趣💘</p>
                  <p>只需3分鐘！鼓起勇氣開始吧！💪</p>
                </>
              ) : locale === 'id' ? (
                <>
                  <p className="font-bold text-gray-700">「10%? 50%? Atau 90%?」</p>
                  <p>Orang yang tersembunyi di hati…</p>
                  <p>Berapa besar kemungkinan suksesnya?</p>
                  <p>Reaksi lawan, daya tarikku, timing, usaha...</p>
                  <p>Semua digabungkan untuk menghitung tingkat keberhasilan!</p>
                  <p className="whitespace-pre-line">Jika Anda penasaran 「Apakah saya punya kesempatan?」 Jika Anda ragu 「Haruskah saya mengaku?」</p>
                  <p>Kami menganalisis tingkat keberhasilan cinta sepihak Anda dengan 12 pertanyaan!</p>
                  <p>Lebih menyenangkan dibandingkan dengan teman-teman 💘</p>
                  <p>Hanya butuh 3 menit! Beranilah dan mulai! 💪</p>
                </>
              ) : locale === 'vi' ? (
                <>
                  <p className="font-bold text-gray-700">「10%? 50%? Hay 90%?」</p>
                  <p>Người đó ẩn giấu trong lòng…</p>
                  <p>Khả năng thành công thực sự là bao nhiêu?</p>
                  <p>Phản ứng của đối phương, sức hấp dẫn của tôi, thời điểm, nỗ lực...</p>
                  <p>Tất cả được tổng hợp để tính tỷ lệ thành công!</p>
                  <p className="whitespace-pre-line">Nếu bạn tò mò 「Tôi có cơ hội không?」 Nếu bạn do dự 「Có nên tỏ tình không?」</p>
                  <p>Chúng tôi phân tích chính xác tỷ lệ thành công tình yêu đơn phương của bạn với 12 câu hỏi!</p>
                  <p>So sánh với bạn bè sẽ thú vị hơn 💘</p>
                  <p>Chỉ mất 3 phút! Hãy dũng cảm bắt đầu! 💪</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-gray-700">「10%? 50%? 아니면 90%?」</p>
                  <p>마음속에 숨겨둔 그 사람…</p>
                  <p>과연 성공 가능성은 얼마나 될까요?</p>
                  <p>상대방의 반응, 나의 매력, 타이밍, 노력도...</p>
                  <p>모든 것을 종합해서 성공률을 계산해드립니다!</p>
                  <p className="whitespace-pre-line">「나 가능성 있나?」 궁금했다면? 「고백해도 될까?」 망설였다면?</p>
                  <p>12개 질문으로 당신의 짝사랑 성공률을 정확하게 분석해드려요!</p>
                  <p>친구들과 비교하면 더 재미있습니다 💘</p>
                  <p>소요 시간 단 3분! 용기내서 시작해보세요! 💪</p>
                </>
              )}
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
              {t('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as any) })}
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
                              <span>{formatPlayCount(test.playCount, locale as any)}</span>
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
                {typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {typeof result.description === 'string' ? result.description : result.description[locale] || result.description.ko}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                📊 {locale === 'ko' ? '현재 상황' : 
                     locale === 'en' ? 'Current Situation' :
                     locale === 'ja' ? '現在の状況' :
                     locale === 'zh-CN' ? '当前情况' :
                     locale === 'zh-TW' ? '當前情況' :
                     locale === 'id' ? 'Situasi Saat Ini' :
                     locale === 'vi' ? 'Tình Huống Hiện Tại' : '현재 상황'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(typeof result.currentState === 'string' ? result.currentState : result.currentState[locale] || result.currentState.ko).split(', ').map((item, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {locale === 'ko' ? '추천 행동' : 
                     locale === 'en' ? 'Recommended Actions' :
                     locale === 'ja' ? '推奨行動' :
                     locale === 'zh-CN' ? '推荐行动' :
                     locale === 'zh-TW' ? '推薦行動' :
                     locale === 'id' ? 'Tindakan yang Direkomendasikan' :
                     locale === 'vi' ? 'Hành Động Được Khuyến Nghị' : '추천 행동'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(typeof result.recommendation === 'string' ? result.recommendation : result.recommendation[locale] || result.recommendation.ko).split(', ').map((item, index) => (
                  <span
                    key={index}
                    className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                ⚠️ {locale === 'ko' ? '주의 사항' : 
                     locale === 'en' ? 'Precautions' :
                     locale === 'ja' ? '注意事項' :
                     locale === 'zh-CN' ? '注意事项' :
                     locale === 'zh-TW' ? '注意事項' :
                     locale === 'id' ? 'Hal yang Perlu Diperhatikan' :
                     locale === 'vi' ? 'Lưu Ý' : '주의 사항'}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {typeof result.warning === 'string' ? result.warning : result.warning[locale] || result.warning.ko}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💝 {locale === 'ko' ? '조언' : 
                     locale === 'en' ? 'Advice' :
                     locale === 'ja' ? 'アドバイス' :
                     locale === 'zh-CN' ? '建议' :
                     locale === 'zh-TW' ? '建議' :
                     locale === 'id' ? 'Saran' :
                     locale === 'vi' ? 'Lời Khuyên' : '조언'}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {typeof result.advice === 'string' ? result.advice : result.advice[locale] || result.advice.ko}
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
                              <span>{formatPlayCount(test.playCount, locale as any)}</span>
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
                              <span>{formatPlayCount(test.playCount, locale as any)}</span>
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
            {typeof question.question === 'string' ? question.question : question.question[locale] || question.question.ko}
          </h2>

          <div className="space-y-4 px-4">
            {optionsArray.map((option, index) => {
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
                    <span className="text-base">{typeof option.text === 'string' ? option.text : option.text[locale] || option.text.ko}</span>
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
