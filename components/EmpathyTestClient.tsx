'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { EmpathyQuestion, EmpathyResult, calculateEmpathyResult } from '@/lib/empathyData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface EmpathyTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: EmpathyQuestion[];
  results: EmpathyResult[];
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
  const translation = t(`empathyTest.result.compatibility.${key}`);
  
  // 번역이 없으면 기본 설명 반환
  if (!translation || translation === `empathyTest.result.compatibility.${key}`) {
    return '서로 다른 성향을 가진 두 유형입니다.';
  }
  
  return translation;
};

export default function EmpathyTestClient({ 
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
}: EmpathyTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<EmpathyResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<EmpathyQuestion[]>(questions);
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

  // 질문 순서 섞기
  useEffect(() => {
    if (started && questions.length > 0) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled);
    }
  }, [started, questions]);

  // 유사한 테스트 로드
  useEffect(() => {
    const loadSimilarTests = async () => {
      try {
        const tests = await getTests();
        const similarTests = tests.filter((test: any) => 
          test.slug !== slug && 
          test.tags && Array.isArray(test.tags) &&
          test.tags.some((tag: any) => 
            typeof tag === 'string' ? tag.includes('감정') || tag.includes('EQ') || tag.includes('심리') : 
            Object.values(tag).some((value: any) => 
              typeof value === 'string' && (value.includes('감정') || value.includes('EQ') || value.includes('심리'))
            )
          )
        ).slice(0, 5).map((test: any) => ({
          id: test.id,
          slug: test.slug,
          title: test.title[locale] || test.title.ko,
          thumbnail: test.thumbnail,
          playCount: test.play_count
        }));
        setSimilarTestsState(similarTests);
        } catch (error) {
        console.error('유사한 테스트 로드 실패:', error);
        }
      };

    loadSimilarTests();
  }, [started, showResult, slug]);

  // 인기 테스트 로드
  useEffect(() => {
    const loadPopularTests = async () => {
      try {
        const tests = await getTests();
        const popularTests = tests
          .filter((test: any) => test.slug !== slug)
            .sort((a: any, b: any) => b.play_count - a.play_count)
            .slice(0, 5)
          .map((test: any) => ({
            id: test.id,
            slug: test.slug,
            title: test.title[locale] || test.title.ko,
            thumbnail: test.thumbnail,
            playCount: test.play_count
          }));
        setPopularTestsState(popularTests);
        } catch (error) {
        console.error('인기 테스트 로드 실패:', error);
        }
      };

    if (started || showResult) {
      loadPopularTests();
    }
  }, [started, showResult, slug]);

  // 플레이 카운트 증가
  useEffect(() => {
    if (started && !hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
  }, [started, hasIncrementedPlayCount, slug]);
    
  const handleStart = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
    window.scrollTo(0, 0);
  };

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers, { questionId: shuffledQuestions[currentQuestion].id, scores: option.scores }];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      setTimeout(() => {
        const calculatedResult = calculateEmpathyResult(newAnswers);
        setResult(calculatedResult);
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 2000);
    }
  };

  const handleShowResult = () => {
    setShowResultPopup(true);
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShowResultPopup(false);
    setShuffledOptionsMap({});
    setHasIncrementedPlayCount(false);
  };

  // 소셜 공유 함수들
  const handleShareResult = () => {
    if (!result) return;
    
    const resultTitle = (result.title as any)[locale] || (result.title as any).ko;
    const shareMessages = {
      ko: `나의 EQ 레벨은 ${resultTitle}! ${result.level} 받았어 💙 너의 EQ는?`,
      en: `My EQ level is ${resultTitle}! I got ${result.level} 💙 What's your EQ?`,
      ja: `私のEQレベルは${resultTitle}！${result.level}を獲得しました 💙 あなたのEQは？`,
      'zh-CN': `我的EQ水平是${resultTitle}！我获得了${result.level} 💙 你的EQ是多少？`,
      'zh-TW': `我的EQ水平是${resultTitle}！我獲得了${result.level} 💙 你的EQ是多少？`,
      vi: `Cấp độ EQ của tôi là ${resultTitle}! Tôi đã nhận được ${result.level} 💙 EQ của bạn là gì?`,
      id: `Level EQ saya adalah ${resultTitle}! Saya mendapat ${result.level} 💙 Apa EQ Anda?`
    };
    
    const shareText = shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko;
    
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      alert(locale === 'ko' ? '링크가 복사되었습니다!' : 'Link copied!');
    }
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      const initMessage = locale === 'ko' ? '카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.' :
        locale === 'en' ? 'Initializing KakaoTalk sharing feature. Please try again in a moment.' :
        locale === 'ja' ? 'カカオトーク共有機能を初期化中です。しばらくしてから再試行してください。' :
        locale === 'zh-CN' ? '正在初始化KakaoTalk分享功能，请稍后重试。' :
        locale === 'zh-TW' ? '正在初始化KakaoTalk分享功能，請稍後重試。' :
        locale === 'vi' ? 'Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.' :
        'Sedang menginisialisasi fitur berbagi KakaoTalk. Silakan coba lagi nanti.';
      alert(initMessage);
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareDescription = '';
    if (result) {
      shareDescription = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?`;
    } else {
      shareDescription = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙`;
    }
    
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
            title: locale === 'ko' ? '테스트 하러가기' :
              locale === 'en' ? 'Take the Test' :
              locale === 'ja' ? 'テストを受ける' :
              locale === 'zh-CN' ? '开始测试' :
              locale === 'zh-TW' ? '開始測試' :
              locale === 'vi' ? 'Làm bài kiểm tra' :
              'Ikuti Tes',
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      const errorMessage = locale === 'ko' ? '카카오톡 공유 중 오류가 발생했습니다.' :
        locale === 'en' ? 'An error occurred while sharing on KakaoTalk.' :
        locale === 'ja' ? 'カカオトーク共有中にエラーが発生しました。' :
        locale === 'zh-CN' ? 'KakaoTalk分享时发生错误。' :
        locale === 'zh-TW' ? 'KakaoTalk分享時發生錯誤。' :
        locale === 'vi' ? 'Đã xảy ra lỗi khi chia sẻ trên KakaoTalk.' :
        'Terjadi kesalahan saat berbagi di KakaoTalk.';
      alert(errorMessage);
    }
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareText = '';
    if (result) {
      shareText = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?\n\n${url}` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?\n\n${url}` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？\n\n${url}` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？\n\n${url}` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？\n\n${url}` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?\n\n${url}` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?\n\n${url}`;
    } else {
      shareText = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙\n\n${url}` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙\n\n${url}` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙\n\n${url}` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙\n\n${url}` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙\n\n${url}` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙\n\n${url}` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙\n\n${url}`;
    }
    
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
      const copyMessage = locale === 'ko' ? '링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.' :
        locale === 'en' ? 'Link copied! Paste and share in WeChat.' :
        locale === 'ja' ? 'リンクがコピーされました！WeChatで貼り付けて共有してください。' :
        locale === 'zh-CN' ? '链接已复制！请在微信中粘贴分享。' :
        locale === 'zh-TW' ? '連結已複製！請在微信中貼上分享。' :
        locale === 'vi' ? 'Đã sao chép liên kết! Dán và chia sẻ trong WeChat.' :
        'Tautan disalin! Tempel dan bagikan di WeChat.';
      alert(copyMessage);
    } catch (error) {
      const errorMessage = locale === 'ko' ? '공유 기능을 사용할 수 없습니다.' :
        locale === 'en' ? 'Sharing feature is not available.' :
        locale === 'ja' ? '共有機能を使用できません。' :
        locale === 'zh-CN' ? '无法使用分享功能。' :
        locale === 'zh-TW' ? '無法使用分享功能。' :
        locale === 'vi' ? 'Không thể sử dụng tính năng chia sẻ.' :
        'Fitur berbagi tidak tersedia.';
      alert(errorMessage);
    }
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareText = '';
    if (result) {
      shareText = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?`;
    } else {
      shareText = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙`;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}%0A%0A${url}`, '_blank');
  };

  const shareToTelegram = () => {
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareText = '';
    if (result) {
      shareText = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?`;
    } else {
      shareText = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙`;
    }
    
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
  };

  const shareToLine = () => {
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareText = '';
    if (result) {
      shareText = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?`;
    } else {
      shareText = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙`;
    }
    
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, '_blank');
  };

  const copyLink = () => {
    const resultTitle = result ? ((result.title as any)[locale] || (result.title as any).ko) : '';
    const resultLevel = result ? ((result.level as any)[locale] || (result.level as any).ko) : '';
    
    let shareText = '';
    if (result) {
      shareText = locale === 'ko' ? `나의 EQ 레벨은 ${resultTitle}! ${resultLevel} 받았어 💙 너의 EQ는?` :
        locale === 'en' ? `My EQ level is ${resultTitle}! Got ${resultLevel} 💙 What's your EQ?` :
        locale === 'ja' ? `私のEQレベルは${resultTitle}！${resultLevel}を獲得しました 💙 あなたのEQは？` :
        locale === 'zh-CN' ? `我的EQ水平是${resultTitle}！获得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'zh-TW' ? `我的EQ水平是${resultTitle}！獲得了${resultLevel} 💙 你的EQ如何？` :
        locale === 'vi' ? `Cấp độ EQ của tôi là ${resultTitle}! Đạt được ${resultLevel} 💙 EQ của bạn thế nào?` :
        `Level EQ saya adalah ${resultTitle}! Mendapat ${resultLevel} 💙 Bagaimana EQ Anda?`;
    } else {
      shareText = locale === 'ko' ? `당신의 EQ(감성지수) 레벨은? 테스트해보세요! 💙` :
        locale === 'en' ? `What is your EQ (Emotional Intelligence) level? Take the test! 💙` :
        locale === 'ja' ? `あなたのEQ（感情知能）レベルは？テストしてみてください！💙` :
        locale === 'zh-CN' ? `你的EQ（情商）水平如何？来测试一下吧！💙` :
        locale === 'zh-TW' ? `你的EQ（情商）水平如何？來測試一下吧！💙` :
        locale === 'vi' ? `Cấp độ EQ (Trí tuệ cảm xúc) của bạn là gì? Hãy thử nghiệm! 💙` :
        `Apa level EQ (Kecerdasan Emosional) Anda? Coba tesnya! 💙`;
    }
    
    navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
    
    const copyMessage = locale === 'ko' ? '링크가 복사되었습니다!' :
      locale === 'en' ? 'Link copied!' :
      locale === 'ja' ? 'リンクがコピーされました！' :
      locale === 'zh-CN' ? '链接已复制！' :
      locale === 'zh-TW' ? '連結已複製！' :
      locale === 'vi' ? 'Đã sao chép liên kết!' :
      'Tautan disalin!';
    alert(copyMessage);
  };

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_201_empathy_level.jpg')}
              alt={typeof title === 'string' ? title : (title as any)[locale] || (title as any).ko}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </div>

          <div className="px-4">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {typeof title === 'string' ? title : (title as any)[locale] || (title as any).ko}
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
                {locale === 'ko' && '"EQ 전문 측정! 당신의 공감 능력 레벨은?"'}
                {locale === 'en' && '"Professional EQ measurement! What is your empathy ability level?"'}
                {locale === 'ja' && '"EQ専門測定！あなたの共感能力レベルは？"'}
                {locale === 'zh-CN' && '"专业EQ测量！你的共情能力水平如何？"'}
                {locale === 'zh-TW' && '"專業EQ測量！你的共情能力水平如何？"'}
                {locale === 'vi' && '"Đo lường EQ chuyên nghiệp! Cấp độ khả năng đồng cảm của bạn là gì?"'}
                {locale === 'id' && '"Pengukuran EQ profesional! Apa level kemampuan empati Anda?"'}
              </p>
              <p>
                {locale === 'ko' && '타인의 감정을 얼마나 잘 이해하나요?'}
                {locale === 'en' && 'How well do you understand others\' emotions?'}
                {locale === 'ja' && '他人の感情をどれくらい理解できますか？'}
                {locale === 'zh-CN' && '你有多了解他人的情感？'}
                {locale === 'zh-TW' && '你有多了解他人的情感？'}
                {locale === 'vi' && 'Bạn hiểu cảm xúc của người khác đến mức nào?'}
                {locale === 'id' && 'Seberapa baik Anda memahami emosi orang lain?'}
              </p>
              <p>
                {locale === 'ko' && '상대방의 마음을 느낄 수 있나요?'}
                {locale === 'en' && 'Can you feel what others are feeling?'}
                {locale === 'ja' && '相手の気持ちを感じることができますか？'}
                {locale === 'zh-CN' && '你能感受到他人的感受吗？'}
                {locale === 'zh-TW' && '你能感受到他人的感受嗎？'}
                {locale === 'vi' && 'Bạn có thể cảm nhận được cảm xúc của người khác không?'}
                {locale === 'id' && 'Bisakah Anda merasakan apa yang dirasakan orang lain?'}
              </p>
              <p>
                {locale === 'ko' && '다른 사람의 입장에서 생각할 수 있나요?'}
                {locale === 'en' && 'Can you think from others\' perspective?'}
                {locale === 'ja' && '他人の立場で考えることができますか？'}
                {locale === 'zh-CN' && '你能从他人的角度思考吗？'}
                {locale === 'zh-TW' && '你能從他人的角度思考嗎？'}
                {locale === 'vi' && 'Bạn có thể suy nghĩ từ góc độ của người khác không?'}
                {locale === 'id' && 'Bisakah Anda berpikir dari sudut pandang orang lain?'}
              </p>
              <p>
                {locale === 'ko' && '공감 능력은 관계의 핵심이자,'}
                {locale === 'en' && 'Empathy is the core of relationships and'}
                {locale === 'ja' && '共感能力は関係の核心であり、'}
                {locale === 'zh-CN' && '共情能力是关系的核心，'}
                {locale === 'zh-TW' && '共情能力是關係的核心，'}
                {locale === 'vi' && 'Khả năng đồng cảm là cốt lõi của các mối quan hệ và'}
                {locale === 'id' && 'Kemampuan empati adalah inti dari hubungan dan'}
              </p>
              <p>
                {locale === 'ko' && '감성 지능(EQ)의 가장 중요한 요소입니다.'}
                {locale === 'en' && 'the most important element of emotional intelligence (EQ).'}
                {locale === 'ja' && '感情知能(EQ)の最も重要な要素です。'}
                {locale === 'zh-CN' && '也是情商(EQ)最重要的要素。'}
                {locale === 'zh-TW' && '也是情商(EQ)最重要的要素。'}
                {locale === 'vi' && 'là yếu tố quan trọng nhất của trí tuệ cảm xúc (EQ).'}
                {locale === 'id' && 'elemen paling penting dari kecerdasan emosional (EQ).'}
              </p>
              <p>
                {locale === 'ko' && '당신의 공감 능력을 전문적으로 측정해보세요!'}
                {locale === 'en' && 'Test your empathy ability professionally!'}
                {locale === 'ja' && 'あなたの共感能力を専門的に測定してみましょう！'}
                {locale === 'zh-CN' && '专业测试你的共情能力！'}
                {locale === 'zh-TW' && '專業測試你的共情能力！'}
                {locale === 'vi' && 'Hãy kiểm tra khả năng đồng cảm của bạn một cách chuyên nghiệp!'}
                {locale === 'id' && 'Uji kemampuan empati Anda secara profesional!'}
              </p>
              <p>
                {locale === 'ko' && '소요 시간 3분! 솔직하게 답변해주세요 💙'}
                {locale === 'en' && 'Takes 3 minutes! Please answer honestly 💙'}
                {locale === 'ja' && '所要時間3分！正直に答えてください 💙'}
                {locale === 'zh-CN' && '需要3分钟！请诚实回答 💙'}
                {locale === 'zh-TW' && '需要3分鐘！請誠實回答 💙'}
                {locale === 'vi' && 'Mất 3 phút! Hãy trả lời thành thật 💙'}
                {locale === 'id' && 'Memakan waktu 3 menit! Silakan jawab dengan jujur 💙'}
              </p>
            </div>

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


            <div className="flex justify-center mb-4">
              <button
                onClick={handleStart}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {locale === 'ko' && `총 ${formatPlayCount(displayPlayCount, locale as Locale)}명이 참여했어요!`}
              {locale === 'en' && `Total ${formatPlayCount(displayPlayCount, locale as Locale)} people participated!`}
              {locale === 'ja' && `合計${formatPlayCount(displayPlayCount, locale as Locale)}人が参加しました！`}
              {locale === 'zh-CN' && `总计${formatPlayCount(displayPlayCount, locale as Locale)}人参与！`}
              {locale === 'zh-TW' && `總計${formatPlayCount(displayPlayCount, locale as Locale)}人參與！`}
              {locale === 'vi' && `Tổng cộng ${formatPlayCount(displayPlayCount, locale as Locale)} người tham gia!`}
              {locale === 'id' && `Total ${formatPlayCount(displayPlayCount, locale as Locale)} orang berpartisipasi!`}
            </p>

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
                              {typeof test.title === 'string' ? test.title : (test.title as any)[locale] || (test.title as any).ko}
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

  // 결과 화면
  if (showResult && result) {
    const resultTitle = typeof result.title === 'string' 
      ? result.title 
      : (result.title as any)[locale] || (result.title as any).ko;
    const resultDescription = typeof result.description === 'string' 
      ? result.description 
      : (result.description as any)[locale] || (result.description as any).ko;
    const resultLongDescription = typeof result.longDescription === 'string' 
      ? result.longDescription 
      : (result.longDescription as any)[locale] || (result.longDescription as any).ko;
    const resultPros = Array.isArray(result.pros) ? result.pros.map(pro => (pro as any)[locale] || (pro as any).ko) : [];
    const resultCons = Array.isArray(result.cons) ? result.cons.map(con => (con as any)[locale] || (con as any).ko) : [];
    const resultAdvice = typeof result.advice === 'string' 
      ? result.advice 
      : (result.advice as any)[locale] || (result.advice as any).ko;
    const resultRecommendedJobs = typeof result.recommendedJobs === 'string' 
      ? result.recommendedJobs 
      : (result.recommendedJobs as any)[locale] || (result.recommendedJobs as any).ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {t('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{typeof result.emoji === 'string' ? result.emoji : (result.emoji as any)[locale] || (result.emoji as any).ko}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                {resultLongDescription}
              </p>
            </div>

            {/* EQ 레벨 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                📊 {locale === 'ko' && 'EQ 레벨'}
                {locale === 'en' && 'EQ Level'}
                {locale === 'ja' && 'EQレベル'}
                {locale === 'zh-CN' && 'EQ水平'}
                {locale === 'zh-TW' && 'EQ水平'}
                {locale === 'vi' && 'Cấp độ EQ'}
                {locale === 'id' && 'Level EQ'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">{(result.level as any)[locale] || (result.level as any).ko}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {t('mbti.pros')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.length > 0 ? (
                    resultPros.map((pro, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                        {pro}
                    </span>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">데이터가 없습니다.</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('mbti.cons')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.length > 0 ? (
                    resultCons.map((con, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                        {con}
                    </span>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">데이터가 없습니다.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {t('mbti.advice')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resultAdvice}
              </p>
            </div>

            {/* 추천 직업 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                      <h3 className="text-base font-bold text-gray-800 mb-3">
                💼 {locale === 'ko' && '추천 직업'}
                {locale === 'en' && 'Recommended Jobs'}
                {locale === 'ja' && 'おすすめ職業'}
                {locale === 'zh-CN' && '推荐职业'}
                {locale === 'zh-TW' && '推薦職業'}
                {locale === 'vi' && 'Nghề nghiệp được đề xuất'}
                {locale === 'id' && 'Pekerjaan yang Direkomendasikan'}
                      </h3>
              <div className="flex flex-wrap gap-2">
                {resultRecommendedJobs.split(/[,，、]/)
                  .map((job: string) => job.trim())
                  .filter((job: string) => job.length > 0)
                  .map((job: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {job}
                    </span>
                  ))}
                        </div>
                    </div>


            {/* 결과 공유하기 */}
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

            {/* 친구와 함께 해보기 */}
            <div className="text-center mb-12 mt-8">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                          alt={typeof test.title === 'string' ? test.title : (test.title as any)[locale] || (test.title as any).ko}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                            {typeof test.title === 'string' ? test.title : (test.title as any)[locale] || (test.title as any).ko}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {popularTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={getThumbnailUrl(test.thumbnail)}
                          alt={typeof test.title === 'string' ? test.title : (test.title as any)[locale] || (test.title as any).ko}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                            {typeof test.title === 'string' ? test.title : (test.title as any)[locale] || (test.title as any).ko}
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
                  src="https://ads-partners.coupang.com/widgets.html?id=925074&template=carousel&trackingCode=AF6775264&subId=&width=300&height=250&tsource=" 
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
              <ProductRecommendations 
                products={aliProducts.slice(0, 2)}
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
          
          <button
            onClick={() => {
              setShowResultPopup(false);
              setShowResult(true);
            }}
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

  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const questionText = (question.question as any)[locale] || (question.question as any).ko;
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
              const optionText = (option.text as any)[locale] || (option.text as any).ko;
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
                  onClick={() => handleAnswer(option)}
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
          </div>

        {/* AdSense 광고 영역 - 테스트 진행 마지막 답변 밑 */}
        <div className="mt-8 mb-8">
            <AdSensePlaceholder 
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label="AdSense 광고 영역 (테스트 진행 마지막 답변 밑)"
            />
          </div>

        {/* 친구와 같이 해보기 */}
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
      </div>
    </div>
  );
}