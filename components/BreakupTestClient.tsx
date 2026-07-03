'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { BreakupQuestion, BreakupResult, calculateBreakupResult } from '@/lib/breakupData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount , prefetchStorageImages, extractImageFilenamesFromQuestions} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';

interface BreakupTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: BreakupQuestion[];
  results: BreakupResult[];
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

// 궁합 설명 함수
const getCompatibilityDescription = (myType: string, partnerType: string, t: any): string => {
  // 궁합 설명 매핑
  const compatibilityMap: Record<string, string> = {
    'Type1_Type2': '회복 속도 차이로 오해 가능',
    'Type1_Type3': '서로 이성적으로 이해',
    'Type1_Type4': '함께 앞으로 나아감',
    'Type1_Type5': '함께 앞으로 나아가는 긍정 에너지',
    'Type1_Type6': '과거 vs 미래의 극명한 차이',
    'Type2_Type1': '속도 차이로 답답함',
    'Type2_Type2': '서로의 감정을 깊이 이해',
    'Type2_Type3': '이성적 조언으로 도움',
    'Type2_Type4': '감정 vs 회피로 소통 단절',
    'Type2_Type5': '속도와 방향 차이',
    'Type2_Type6': '감정 이해와 공감',
    'Type3_Type1': '이성적 소통',
    'Type3_Type2': '감정 vs 이성',
    'Type3_Type3': '객관적 분석',
    'Type3_Type4': '이성적 소통',
    'Type3_Type5': '함께 배우고 성장',
    'Type3_Type6': '앞 vs 뒤, 방향성 차이',
    'Type4_Type1': '함께 앞으로 나아감',
    'Type4_Type2': '회피 vs 직면',
    'Type4_Type3': '건설적 방향',
    'Type4_Type4': '활동적 에너지',
    'Type4_Type5': '건설적 방향',
    'Type4_Type6': '정반대 방향으로 충돌',
    'Type5_Type1': '긍정 에너지',
    'Type5_Type2': '속도와 방향 차이',
    'Type5_Type3': '함께 배우고 발전',
    'Type5_Type4': '긍정 에너지',
    'Type5_Type5': '성장 지향',
    'Type5_Type6': '앞 vs 뒤, 극명한 대비',
    'Type6_Type1': '모든 앞으로 가는 타입과 충돌',
    'Type6_Type2': '감정 이해와 공감',
    'Type6_Type3': '이성 vs 감정',
    'Type6_Type4': '모든 앞으로 가는 타입과 충돌',
    'Type6_Type5': '모든 앞으로 가는 타입과 충돌',
    'Type6_Type6': '과거에 머무름'
  };
  
  const key = `${myType}_${partnerType}`;
  return compatibilityMap[key] || '궁합 분석';
};

export default function BreakupTestClient({ 
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
}: BreakupTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<BreakupResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<BreakupQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
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
  const shuffleQuestions = (questionList: BreakupQuestion[]) => {
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
    
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));

    
    setStarted(true);
    window.scrollTo(0, 0);
  };

  // 답변 처리
  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      
      // 결과 계산
      const breakupResult = calculateBreakupResult(newAnswers);
      
      // 결과 설정
      if (breakupResult) {
        setResult(breakupResult);
      }
      
      // 결과에 맞는 상품 백그라운드 로드 (로딩 시간 동안)
      if (breakupResult && locale !== 'ko') {
        const keywords = getProductKeywordsForDating(breakupResult.type, locale);
        const loadStartTime = Date.now();
        console.log('🔮 [시작] 이별 결과:', breakupResult.type, '→ 검색 키워드:', keywords[0]);
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
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setShuffledOptionsMap({});
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko;
    
    const shareMessages = {
      ko: `나는 ${resultTitle}! 이별 후 나의 회복 스타일을 알아봤어. 너는 어떤 타입? 💙`,
      en: `I am ${resultTitle}! I found out my recovery style after a breakup. What type are you? 💙`,
      ja: `私は${resultTitle}！別れ後の回復スタイルが分かった。あなたはどのタイプ？ 💙`,
      'zh-CN': `我是${resultTitle}！我发现了分手后的恢复风格。你是什么类型？ 💙`,
      'zh-TW': `我是${resultTitle}！我發現了分手後的恢復風格。你是什麼類型？ 💙`,
      vi: `Tôi là ${resultTitle}! Tôi đã tìm ra phong cách phục hồi sau chia tay. Bạn thuộc loại nào? 💙`,
      id: `Saya adalah ${resultTitle}! Saya menemukan gaya pemulihan setelah putus cinta. Anda tipe apa? 💙`
    };
    
    const alertMessages = {
      ko: {
        copySuccess: '결과가 클립보드에 복사되었습니다!',
        shareError: '공유 기능을 사용할 수 없습니다.'
      },
      en: {
        copySuccess: 'Result copied to clipboard!',
        shareError: 'Sharing feature is not available.'
      },
      ja: {
        copySuccess: '結果がクリップボードにコピーされました！',
        shareError: '共有機能を使用できません。'
      },
      'zh-CN': {
        copySuccess: '结果已复制到剪贴板！',
        shareError: '无法使用分享功能。'
      },
      'zh-TW': {
        copySuccess: '結果已複製到剪貼板！',
        shareError: '無法使用分享功能。'
      },
      vi: {
        copySuccess: 'Kết quả đã được sao chép vào clipboard!',
        shareError: 'Không thể sử dụng tính năng chia sẻ.'
      },
      id: {
        copySuccess: 'Hasil disalin ke clipboard!',
        shareError: 'Fitur berbagi tidak tersedia.'
      }
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
        alert(alertMessages[locale as keyof typeof alertMessages]?.copySuccess || alertMessages.ko.copySuccess);
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert(alertMessages[locale as keyof typeof alertMessages]?.shareError || alertMessages.ko.shareError);
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
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나는 ${resultTitle}! 이별 후 나의 회복 스타일을 알아봤어. 너는 어떤 타입? 💙`,
      en: `I am ${resultTitle}! I found out my recovery style after a breakup. What type are you? 💙`,
      ja: `私は${resultTitle}！別れ後の回復スタイルが分かった。あなたはどのタイプ？ 💙`,
      'zh-CN': `我是${resultTitle}！我发现了分手后的恢复风格。你是什么类型？ 💙`,
      'zh-TW': `我是${resultTitle}！我發現了分手後的恢復風格。你是什麼類型？ 💙`,
      vi: `Tôi là ${resultTitle}! Tôi đã tìm ra phong cách phục hồi sau chia tay. Bạn thuộc loại nào? 💙`,
      id: `Saya adalah ${resultTitle}! Saya menemukan gaya pemulihan setelah putus cinta. Anda tipe apa? 💙`
    };
    
    const alertMessages = {
      ko: {
        linkCopied: '링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.',
        shareError: '공유 기능을 사용할 수 없습니다.'
      },
      en: {
        linkCopied: 'Link copied! Paste it in WeChat to share.',
        shareError: 'Sharing feature is not available.'
      },
      ja: {
        linkCopied: 'リンクがコピーされました！WeChatに貼り付けて共有してください。',
        shareError: '共有機能を使用できません。'
      },
      'zh-CN': {
        linkCopied: '链接已复制！请在微信中粘贴分享。',
        shareError: '无法使用分享功能。'
      },
      'zh-TW': {
        linkCopied: '連結已複製！請在微信中貼上分享。',
        shareError: '無法使用分享功能。'
      },
      vi: {
        linkCopied: 'Liên kết đã được sao chép! Dán vào WeChat để chia sẻ.',
        shareError: 'Không thể sử dụng tính năng chia sẻ.'
      },
      id: {
        linkCopied: 'Tautan disalin! Tempel di WeChat untuk berbagi.',
        shareError: 'Fitur berbagi tidak tersedia.'
      }
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
      alert(alertMessages[locale as keyof typeof alertMessages]?.linkCopied || alertMessages.ko.linkCopied);
    } catch (error) {
      alert(alertMessages[locale as keyof typeof alertMessages]?.shareError || alertMessages.ko.shareError);
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나는 ${resultTitle}! 이별 후 나의 회복 스타일을 알아봤어. 너는 어떤 타입? 💙`,
      en: `I am ${resultTitle}! I found out my recovery style after a breakup. What type are you? 💙`,
      ja: `私は${resultTitle}！別れ後の回復スタイルが分かった。あなたはどのタイプ？ 💙`,
      'zh-CN': `我是${resultTitle}！我发现了分手后的恢复风格。你是什么类型？ 💙`,
      'zh-TW': `我是${resultTitle}！我發現了分手後的恢復風格。你是什麼類型？ 💙`,
      vi: `Tôi là ${resultTitle}! Tôi đã tìm ra phong cách phục hồi sau chia tay. Bạn thuộc loại nào? 💙`,
      id: `Saya adalah ${resultTitle}! Saya menemukan gaya pemulihan setelah putus cinta. Anda tipe apa? 💙`
    };
    
    const shareText = result 
      ? encodeURIComponent(shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko)
      : encodeURIComponent(title);
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    const alertMessages = {
      ko: {
        initializing: '카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.',
        shareError: '카카오톡 공유 중 오류가 발생했습니다.',
        testButton: '테스트 하러 가기'
      },
      en: {
        initializing: 'Initializing KakaoTalk sharing feature. Please try again in a moment.',
        shareError: 'An error occurred while sharing on KakaoTalk.',
        testButton: 'Take the Test'
      },
      ja: {
        initializing: 'KakaoTalk共有機能を初期化中です。しばらくしてから再試行してください。',
        shareError: 'KakaoTalk共有中にエラーが発生しました。',
        testButton: 'テストを受ける'
      },
      'zh-CN': {
        initializing: '正在初始化KakaoTalk分享功能。请稍后再试。',
        shareError: 'KakaoTalk分享时发生错误。',
        testButton: '开始测试'
      },
      'zh-TW': {
        initializing: '正在初始化KakaoTalk分享功能。請稍後再試。',
        shareError: 'KakaoTalk分享時發生錯誤。',
        testButton: '開始測試'
      },
      vi: {
        initializing: 'Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.',
        shareError: 'Đã xảy ra lỗi khi chia sẻ trên KakaoTalk.',
        testButton: 'Làm bài kiểm tra'
      },
      id: {
        initializing: 'Menginisialisasi fitur berbagi KakaoTalk. Silakan coba lagi nanti.',
        shareError: 'Terjadi kesalahan saat berbagi di KakaoTalk.',
        testButton: 'Ikuti Tes'
      }
    };
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(alertMessages[locale as keyof typeof alertMessages]?.initializing || alertMessages.ko.initializing);
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나는 ${resultTitle}! 이별 후 나의 회복 스타일을 알아봤어. 너는 어떤 타입? 💙`,
      en: `I am ${resultTitle}! I found out my recovery style after a breakup. What type are you? 💙`,
      ja: `私は${resultTitle}！別れ後の回復スタイルが分かった。あなたはどのタイプ？ 💙`,
      'zh-CN': `我是${resultTitle}！我发现了分手后的恢复风格。你是什么类型？ 💙`,
      'zh-TW': `我是${resultTitle}！我發現了分手後的恢復風格。你是什麼類型？ 💙`,
      vi: `Tôi là ${resultTitle}! Tôi đã tìm ra phong cách phục hồi sau chia tay. Bạn thuộc loại nào? 💙`,
      id: `Saya adalah ${resultTitle}! Saya menemukan gaya pemulihan setelah putus cinta. Anda tipe apa? 💙`
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
            title: alertMessages[locale as keyof typeof alertMessages]?.testButton || alertMessages.ko.testButton,
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error('카카오톡 공유 오류:', error);
      alert(alertMessages[locale as keyof typeof alertMessages]?.shareError || alertMessages.ko.shareError);
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    
    const shareMessages = {
      ko: `나는 ${resultTitle}! 이별 후 나의 회복 스타일을 알아봤어. 너는 어떤 타입? 💙`,
      en: `I am ${resultTitle}! I found out my recovery style after a breakup. What type are you? 💙`,
      ja: `私は${resultTitle}！別れ後の回復スタイルが分かった。あなたはどのタイプ？ 💙`,
      'zh-CN': `我是${resultTitle}！我发现了分手后的恢复风格。你是什么类型？ 💙`,
      'zh-TW': `我是${resultTitle}！我發現了分手後的恢復風格。你是什麼類型？ 💙`,
      vi: `Tôi là ${resultTitle}! Tôi đã tìm ra phong cách phục hồi sau chia tay. Bạn thuộc loại nào? 💙`,
      id: `Saya adalah ${resultTitle}! Saya menemukan gaya pemulihan setelah putus cinta. Anda tipe apa? 💙`
    };
    
    const shareText = result 
      ? shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko
      : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    const alertMessages = {
      ko: '링크가 복사되었습니다!',
      en: 'Link copied!',
      ja: 'リンクがコピーされました！',
      'zh-CN': '链接已复制！',
      'zh-TW': '連結已複製！',
      vi: 'Liên kết đã được sao chép!',
      id: 'Tautan disalin!'
    };
    
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(alertMessages[locale as keyof typeof alertMessages] || alertMessages.ko);
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
              src={getThumbnailUrl(thumbnail || 'test_040_breakup_coping.jpg')}
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
                  <p className="font-bold text-gray-700">&ldquo;이별 후, 당신의 진짜 회복 스타일은?&rdquo;</p>
                  <p>어떤 사람은 금방 털고 일어나고,</p>
                  <p>어떤 사람은 오랜 시간 아파합니다.</p>
                  <p>어떤 사람은 바쁘게 움직이며 잊으려 하고,</p>
                  <p>어떤 사람은 이별을 성장의 기회로 삼습니다.</p>
                  <p className="whitespace-pre-line">당신은 이별 후 어떻게 대처하나요?</p>
                  <p>12개 질문으로 당신의 이별 대처 스타일을 확인하고,</p>
                  <p>더 건강한 회복을 위한 조언을 받아보세요!</p>
                  <p>소요 시간 단 3분! 혼자서도, 친구와도 함께 해보세요 💙</p>
                </>
              )}
              {locale === 'en' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;What is your real recovery style after a breakup?&rdquo;</p>
                  <p>Some people bounce back quickly,</p>
                  <p>Some people hurt for a long time.</p>
                  <p>Some people stay busy to forget,</p>
                  <p>Some people see breakups as growth opportunities.</p>
                  <p className="whitespace-pre-line">How do you cope after a breakup?</p>
                  <p>Check your breakup coping style with 12 questions,</p>
                  <p>and get advice for healthier recovery!</p>
                  <p>Takes only 3 minutes! Try alone or with friends 💙</p>
                </>
              )}
              {locale === 'ja' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;別れ後、あなたの本当の回復スタイルは？&rdquo;</p>
                  <p>すぐに立ち直る人もいれば、</p>
                  <p>長い間傷つく人もいます。</p>
                  <p>忘れようと忙しく動く人もいれば、</p>
                  <p>別れを成長の機会とする人もいます。</p>
                  <p className="whitespace-pre-line">別れの後、どう対処しますか？</p>
                  <p>12の質問であなたの別れ対処スタイルを確認し、</p>
                  <p>より健康的な回復のためのアドバイスを受けましょう！</p>
                  <p>所要時間わずか3分！一人でも、友達と一緒でも楽しめます 💙</p>
                </>
              )}
              {locale === 'zh-CN' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;分手后，你真正的恢复风格是什么？&rdquo;</p>
                  <p>有人很快振作，</p>
                  <p>有人痛苦很久。</p>
                  <p>有人忙碌忘记，</p>
                  <p>有人把分手当作成长机会。</p>
                  <p className="whitespace-pre-line">分手后你如何应对？</p>
                  <p>用12个问题检查你的分手应对风格，</p>
                  <p>获得更健康恢复的建议！</p>
                  <p>只需3分钟！独自或与朋友一起尝试 💙</p>
                </>
              )}
              {locale === 'zh-TW' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;分手後，你真正的恢復風格是什麼？&rdquo;</p>
                  <p>有人很快振作，</p>
                  <p>有人痛苦很久。</p>
                  <p>有人忙碌忘記，</p>
                  <p>有人把分手當作成長機會。</p>
                  <p className="whitespace-pre-line">分手後你如何應對？</p>
                  <p>用12個問題檢查你的分手應對風格，</p>
                  <p>獲得更健康恢復的建議！</p>
                  <p>只需3分鐘！獨自或與朋友一起嘗試 💙</p>
                </>
              )}
              {locale === 'vi' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;Sau chia tay, phong cách phục hồi thực sự của bạn là gì?&rdquo;</p>
                  <p>Có người nhanh chóng vượt qua,</p>
                  <p>Có người đau khổ lâu dài.</p>
                  <p>Có người bận rộn để quên,</p>
                  <p>Có người coi chia tay là cơ hội phát triển.</p>
                  <p className="whitespace-pre-line">Bạn đối phó như thế nào sau chia tay?</p>
                  <p>Kiểm tra phong cách đối phó với chia tay của bạn bằng 12 câu hỏi,</p>
                  <p>và nhận lời khuyên để phục hồi lành mạnh hơn!</p>
                  <p>Chỉ mất 3 phút! Thử một mình hoặc với bạn bè 💙</p>
                </>
              )}
              {locale === 'id' && (
                <>
                  <p className="font-bold text-gray-700">&ldquo;Setelah putus cinta, apa gaya pemulihan sejati Anda?&rdquo;</p>
                  <p>Ada yang cepat bangkit,</p>
                  <p>Ada yang sakit lama.</p>
                  <p>Ada yang sibuk untuk melupakan,</p>
                  <p>Ada yang melihat putus cinta sebagai kesempatan tumbuh.</p>
                  <p className="whitespace-pre-line">Bagaimana Anda menghadapi setelah putus cinta?</p>
                  <p>Periksa gaya menghadapi putus cinta Anda dengan 12 pertanyaan,</p>
                  <p>dan dapatkan saran untuk pemulihan yang lebih sehat!</p>
                  <p>Hanya butuh 3 menit! Coba sendiri atau dengan teman 💙</p>
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

  // 다국어 쉼표 분리 함수 (규칙 35)
  const splitByCommas = (text: string) => {
    // 쉼표 뒤 공백을 포함한 패턴으로 분할
    return text.split(/,\s+|，\s*|、\s*/).map((item: string) => item.trim()).filter((item: string) => item.length > 0);
  };

  // 결과 화면
  if (showResult && result) {
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = typeof result.description === 'string' ? result.description : result.description[locale as keyof typeof result.description] || result.description.ko;
    
    // 다국어 쉼표 분리 적용
    const resultCharacteristics = typeof result.characteristics === 'string' 
      ? splitByCommas(result.characteristics) 
      : splitByCommas(result.characteristics[locale as keyof typeof result.characteristics] || result.characteristics.ko);
    const resultPros = typeof result.pros === 'string' 
      ? splitByCommas(result.pros) 
      : splitByCommas(result.pros[locale as keyof typeof result.pros] || result.pros.ko);
    const resultCons = typeof result.cons === 'string' 
      ? splitByCommas(result.cons) 
      : splitByCommas(result.cons[locale as keyof typeof result.cons] || result.cons.ko);
    const resultAdvice = typeof result.advice === 'string' ? result.advice : result.advice[locale as keyof typeof result.advice] || result.advice.ko;

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

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                🎯 {locale === 'ko' && '특징'}
                {locale === 'en' && 'Characteristics'}
                {locale === 'ja' && '特徴'}
                {locale === 'zh-CN' && '特征'}
                {locale === 'zh-TW' && '特徵'}
                {locale === 'vi' && 'Đặc điểm'}
                {locale === 'id' && 'Karakteristik'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {resultCharacteristics.map((characteristic, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {characteristic}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {locale === 'ko' && '장점'}
                  {locale === 'en' && 'Pros'}
                  {locale === 'ja' && '長所'}
                  {locale === 'zh-CN' && '优点'}
                  {locale === 'zh-TW' && '優點'}
                  {locale === 'vi' && 'Ưu điểm'}
                  {locale === 'id' && 'Kelebihan'}
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
                  ⚠️ {locale === 'ko' && '단점'}
                  {locale === 'en' && 'Cons'}
                  {locale === 'ja' && '短所'}
                  {locale === 'zh-CN' && '缺点'}
                  {locale === 'zh-TW' && '缺點'}
                  {locale === 'vi' && 'Nhược điểm'}
                  {locale === 'id' && 'Kekurangan'}
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
                💡 {locale === 'ko' && '조언'}
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

  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const questionText = typeof question.question === 'string' ? question.question : question.question[locale as keyof typeof question.question] || question.question.ko;
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
              const optionText = typeof option.text === 'string' ? option.text : option.text[locale as keyof typeof option.text] || option.text.ko;
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
                  onClick={() => handleAnswer(index)}
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