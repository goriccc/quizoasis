'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { TeamPlayerQuestion, TeamPlayerResult, calculateTeamPlayerResult } from '@/lib/teamPlayerData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';

interface TeamPlayerTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: TeamPlayerQuestion[];
  results: TeamPlayerResult[];
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
  const compatibilityMap: Record<string, string> = {
    'Type1_Type2': '완벽한 팀 구성! 리더와 서포터의 조화',
    'Type1_Type4': '방향과 실행의 완벽한 조합',
    'Type1_Type5': '갈등 해소와 리더십의 조화',
    'Type1_Type6': '전략과 실행의 완벽한 조합',
    'Type1_Type1': '리더 둘이면 충돌 위험',
    'Type1_Type3': '리더십과 창의성의 갈등',
    'Type2_Type1': '서포터와 리더의 완벽한 조화',
    'Type2_Type3': '서로 보완하는 팀워크',
    'Type2_Type5': '배려와 중재의 조화',
    'Type2_Type4': '속도 차이로 답답함',
    'Type2_Type6': '감정과 논리의 차이',
    'Type2_Type2': '서포터 둘이면 주도성 부족',
    'Type3_Type4': '아이디어와 실행의 완벽 조합',
    'Type3_Type2': '창의성과 배려의 조화',
    'Type3_Type5': '혁신과 중재의 조화',
    'Type3_Type6': '속도와 방식의 차이',
    'Type3_Type1': '창의성과 리더십의 갈등',
    'Type3_Type3': '창의자 둘이면 방향성 부족',
    'Type4_Type1': '실행과 리더십의 완벽 조합',
    'Type4_Type3': '실행과 창의성의 조화',
    'Type4_Type6': '실행과 분석의 조화',
    'Type4_Type2': '실행 속도 차이',
    'Type4_Type5': '결정 속도 차이',
    'Type4_Type4': '실행자 둘이면 융통성 부족',
    'Type5_Type1': '중재와 리더십의 조화',
    'Type5_Type3': '중재와 창의성의 조화',
    'Type5_Type2': '중재와 배려의 조화',
    'Type5_Type4': '결정 속도 차이',
    'Type5_Type6': '중재와 분석의 조화',
    'Type5_Type5': '중재자 둘이면 우유부단',
    'Type6_Type1': '분석과 리더십의 조화',
    'Type6_Type4': '분석과 실행의 조화',
    'Type6_Type5': '분석과 중재의 조화',
    'Type6_Type3': '분석과 창의성의 차이',
    'Type6_Type2': '논리와 감정의 차이',
    'Type6_Type6': '분석가 둘이면 실행력 부족'
  };
  
  const key = `${myType}_${partnerType}`;
  return compatibilityMap[key] || '팀워크를 통해 서로 보완할 수 있습니다.';
};

export default function TeamPlayerTestClient({ 
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
}: TeamPlayerTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<TeamPlayerResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<TeamPlayerQuestion[]>(questions);
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
  }, [slug, locale, similarTests.length]);

  // 플레이 카운트 증가
  useEffect(() => {
    if (started && !hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
      setDisplayPlayCount(prev => prev + 1);
    }
  }, [started, slug, hasIncrementedPlayCount]);

  const handleStartTest = () => {
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questionCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문 완료
      setShowLoadingSpinner(true);
      setTimeout(() => {
        const calculatedResult = calculateTeamPlayerResult(newAnswers, results);
        setResult(calculatedResult);
        setShowResultPopup(true);
        setShowLoadingSpinner(false);
      }, 1500);
    }
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShowResultPopup(false);
    setShuffledQuestions([...questions]);
    setShuffledOptionsMap({});
    setHasIncrementedPlayCount(false);
  };

  // 소셜 공유 함수들
  const handleShareResult = () => {
    if (!result) return;
    
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko;
    const shareMessages = {
      ko: `나는 ${resultTitle}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝`,
      en: `I'm a ${resultTitle}! I found out my role in the team! What kind of team player are you? 🤝`,
      ja: `私は${resultTitle}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝`,
      'zh-CN': `我是${resultTitle}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝`,
      'zh-TW': `我是${resultTitle}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝`,
      vi: `Tôi là ${resultTitle}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝`,
      id: `Saya adalah ${resultTitle}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝`
    };
    
    const shareText = shareMessages[locale as keyof typeof shareMessages] || shareMessages.ko;
    const shareUrl = `${window.location.origin}/${locale}/test/${slug}`;
    
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      alert(locale === 'ko' ? '링크가 복사되었습니다!' : 
            locale === 'en' ? 'Link copied!' :
            locale === 'ja' ? 'リンクがコピーされました！' :
            locale === 'zh-CN' ? '链接已复制！' :
            locale === 'zh-TW' ? '連結已複製！' :
            locale === 'vi' ? 'Liên kết đã được sao chép!' :
            'Tautan telah disalin!');
    }
  };

  const shareToKakao = () => {
    const shareUrl = `https://myquizoasis.com${window.location.pathname}`;
    const shareText = result 
      ? (locale === 'ko' ? `나는 ${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝` :
         locale === 'en' ? `I'm a ${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}! I found out my role in the team! What kind of team player are you? 🤝` :
         locale === 'ja' ? `私は${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝` :
         locale === 'zh-CN' ? `我是${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝` :
         locale === 'zh-TW' ? `我是${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝` :
         locale === 'vi' ? `Tôi là ${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝` :
         `Saya adalah ${typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝`)
      : (locale === 'ko' ? `당신은 어떤 팀 플레이어인가요? 팀에서 내 역할을 찾아보자! 🤝` :
         locale === 'en' ? `What kind of team player are you? Let's find your role in the team! 🤝` :
         locale === 'ja' ? `あなたはどんなチームプレイヤーですか？チームでの役割を見つけましょう！ 🤝` :
         locale === 'zh-CN' ? `你是什么样的团队玩家？让我们在团队中找到你的角色！ 🤝` :
         locale === 'zh-TW' ? `你是什麼樣的團隊玩家？讓我們在團隊中找到你的角色！ 🤝` :
         locale === 'vi' ? `Bạn là loại người chơi nhóm nào? Hãy tìm vai trò của bạn trong nhóm! 🤝` :
         `Anda adalah pemain tim seperti apa? Mari temukan peran Anda dalam tim! 🤝`);
    
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareText,
          imageUrl: getThumbnailUrl(thumbnail || 'test_052_team_player.jpg'),
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '테스트 하러 가기',
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      alert('링크가 복사되었습니다!');
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result 
      ? (locale === 'ko' ? `나는 ${resultTitle}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝` :
         locale === 'en' ? `I'm a ${resultTitle}! I found out my role in the team! What kind of team player are you? 🤝` :
         locale === 'ja' ? `私は${resultTitle}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝` :
         locale === 'zh-CN' ? `我是${resultTitle}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝` :
         locale === 'zh-TW' ? `我是${resultTitle}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝` :
         locale === 'vi' ? `Tôi là ${resultTitle}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝` :
         `Saya adalah ${resultTitle}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝`)
      : (locale === 'ko' ? `당신은 어떤 팀 플레이어인가요? 팀에서 내 역할을 찾아보자! 🤝` :
         locale === 'en' ? `What kind of team player are you? Let's find your role in the team! 🤝` :
         locale === 'ja' ? `あなたはどんなチームプレイヤーですか？チームでの役割を見つけましょう！ 🤝` :
         locale === 'zh-CN' ? `你是什么样的团队玩家？让我们在团队中找到你的角色！ 🤝` :
         locale === 'zh-TW' ? `你是什麼樣的團隊玩家？讓我們在團隊中找到你的角色！ 🤝` :
         locale === 'vi' ? `Bạn là loại người chơi nhóm nào? Hãy tìm vai trò của bạn trong nhóm! 🤝` :
         `Anda adalah pemain tim seperti apa? Mari temukan peran Anda dalam tim! 🤝`);
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result 
      ? (locale === 'ko' ? `나는 ${resultTitle}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝\n\n${url}` :
         locale === 'en' ? `I'm a ${resultTitle}! I found out my role in the team! What kind of team player are you? 🤝\n\n${url}` :
         locale === 'ja' ? `私は${resultTitle}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝\n\n${url}` :
         locale === 'zh-CN' ? `我是${resultTitle}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝\n\n${url}` :
         locale === 'zh-TW' ? `我是${resultTitle}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝\n\n${url}` :
         locale === 'vi' ? `Tôi là ${resultTitle}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝\n\n${url}` :
         `Saya adalah ${resultTitle}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝\n\n${url}`)
      : (locale === 'ko' ? `당신은 어떤 팀 플레이어인가요? 팀에서 내 역할을 찾아보자! 🤝\n\n${url}` :
         locale === 'en' ? `What kind of team player are you? Let's find your role in the team! 🤝\n\n${url}` :
         locale === 'ja' ? `あなたはどんなチームプレイヤーですか？チームでの役割を見つけましょう！ 🤝\n\n${url}` :
         locale === 'zh-CN' ? `你是什么样的团队玩家？让我们在团队中找到你的角色！ 🤝\n\n${url}` :
         locale === 'zh-TW' ? `你是什麼樣的團隊玩家？讓我們在團隊中找到你的角色！ 🤝\n\n${url}` :
         locale === 'vi' ? `Bạn là loại người chơi nhóm nào? Hãy tìm vai trò của bạn trong nhóm! 🤝\n\n${url}` :
         `Anda adalah pemain tim seperti apa? Mari temukan peran Anda dalam tim! 🤝\n\n${url}`);
    
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

  const shareToLine = () => {
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result 
      ? (locale === 'ko' ? `나는 ${resultTitle}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝` :
         locale === 'en' ? `I'm a ${resultTitle}! I found out my role in the team! What kind of team player are you? 🤝` :
         locale === 'ja' ? `私は${resultTitle}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝` :
         locale === 'zh-CN' ? `我是${resultTitle}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝` :
         locale === 'zh-TW' ? `我是${resultTitle}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝` :
         locale === 'vi' ? `Tôi là ${resultTitle}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝` :
         `Saya adalah ${resultTitle}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝`)
      : (locale === 'ko' ? `당신은 어떤 팀 플레이어인가요? 팀에서 내 역할을 찾아보자! 🤝` :
         locale === 'en' ? `What kind of team player are you? Let's find your role in the team! 🤝` :
         locale === 'ja' ? `あなたはどんなチームプレイヤーですか？チームでの役割を見つけましょう！ 🤝` :
         locale === 'zh-CN' ? `你是什么样的团队玩家？让我们在团队中找到你的角色！ 🤝` :
         locale === 'zh-TW' ? `你是什麼樣的團隊玩家？讓我們在團隊中找到你的角色！ 🤝` :
         locale === 'vi' ? `Bạn là loại người chơi nhóm nào? Hãy tìm vai trò của bạn trong nhóm! 🤝` :
         `Anda adalah pemain tim seperti apa? Mari temukan peran Anda dalam tim! 🤝`);
    const shareUrl = `https://myquizoasis.com${window.location.pathname}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, '_blank');
  };

  const shareToWhatsApp = () => {
    const resultTitle = result ? (typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko) : '';
    const shareText = result 
      ? (locale === 'ko' ? `나는 ${resultTitle}! 팀에서 내 역할을 알게 됐어! 너는 어떤 팀플레이어? 🤝` :
         locale === 'en' ? `I'm a ${resultTitle}! I found out my role in the team! What kind of team player are you? 🤝` :
         locale === 'ja' ? `私は${resultTitle}！チームでの私の役割が分かった！あなたはどんなチームプレイヤー？ 🤝` :
         locale === 'zh-CN' ? `我是${resultTitle}！我发现了我在团队中的角色！你是什么样的团队玩家？ 🤝` :
         locale === 'zh-TW' ? `我是${resultTitle}！我發現了我在團隊中的角色！你是什麼樣的團隊玩家？ 🤝` :
         locale === 'vi' ? `Tôi là ${resultTitle}! Tôi đã khám phá vai trò của mình trong nhóm! Bạn là loại người chơi nhóm nào? 🤝` :
         `Saya adalah ${resultTitle}! Saya menemukan peran saya dalam tim! Anda adalah pemain tim seperti apa? 🤝`)
      : (locale === 'ko' ? `당신은 어떤 팀 플레이어인가요? 팀에서 내 역할을 찾아보자! 🤝` :
         locale === 'en' ? `What kind of team player are you? Let's find your role in the team! 🤝` :
         locale === 'ja' ? `あなたはどんなチームプレイヤーですか？チームでの役割を見つけましょう！ 🤝` :
         locale === 'zh-CN' ? `你是什么样的团队玩家？让我们在团队中找到你的角色！ 🤝` :
         locale === 'zh-TW' ? `你是什麼樣的團隊玩家？讓我們在團隊中找到你的角色！ 🤝` :
         locale === 'vi' ? `Bạn là loại người chơi nhóm nào? Hãy tìm vai trò của bạn trong nhóm! 🤝` :
         `Anda adalah pemain tim seperti apa? Mari temukan peran Anda dalam tim! 🤝`);
    const shareUrl = `https://myquizoasis.com${window.location.pathname}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
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
              src={getThumbnailUrl(thumbnail || 'test_052_team_player.jpg')}
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
              <p className="font-bold text-gray-700">{t('teamPlayerTest.startMessage.title')}</p>
              <p>{t('teamPlayerTest.startMessage.line1')}</p>
              <p>{t('teamPlayerTest.startMessage.line2')}</p>
              <p>{t('teamPlayerTest.startMessage.line3')}</p>
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
    const resultTitle = typeof result.title === 'string' ? result.title : result.title[locale] || result.title.ko;
    const resultDescription = typeof result.description === 'string' ? result.description : result.description[locale] || result.description.ko;
    const resultPros = result.pros;
    const resultCons = result.cons;
    const resultAdvice = typeof result.advice === 'string' ? result.advice : result.advice[locale] || result.advice.ko;

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
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {resultDescription}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed text-left">
                {result.type === 'Type1' && (
                  locale === 'ko' ? "명확한 방향성과 결단력으로 팀을 이끕니다. 전체를 조망하며 의사결정을 내리고, 책임감이 강해 끝까지 책임집니다. 목표 지향적이며 팀을 동기부여하는 능력이 뛰어납니다. 때로 독단적으로 보일 수 있지만 결과로 증명합니다." :
                  locale === 'en' ? "Leads the team with clear direction and decisiveness. Oversees the whole picture, makes decisions, and has strong responsibility to see things through. Goal-oriented with excellent ability to motivate the team. May seem autocratic at times but proves it with results." :
                  locale === 'ja' ? "明確な方向性と決断力でチームを導きます。全体を見渡して意思決定を行い、責任感が強く最後まで責任を持ちます。目標志向でチームを動機づける能力に優れています。時には独断的に見えることもありますが、結果で証明します。" :
                  locale === 'zh-CN' ? "以明确的方向性和决断力领导团队。纵观全局做出决策，责任感强，坚持到底。目标导向，具有出色的团队激励能力。有时可能显得独断，但用结果证明。" :
                  locale === 'zh-TW' ? "以明確的方向性和決斷力領導團隊。縱觀全局做出決策，責任感強，堅持到底。目標導向，具有出色的團隊激勵能力。有時可能顯得獨斷，但用結果證明。" :
                  locale === 'vi' ? "Dẫn dắt nhóm với định hướng rõ ràng và quyết đoán. Quan sát toàn cảnh, đưa ra quyết định và có trách nhiệm mạnh mẽ để hoàn thành. Định hướng mục tiêu với khả năng động viên nhóm xuất sắc. Đôi khi có thể trông độc đoán nhưng chứng minh bằng kết quả." :
                  "Memimpin tim dengan arah yang jelas dan ketegasan. Mengawasi keseluruhan, membuat keputusan, dan memiliki tanggung jawab yang kuat untuk menyelesaikan. Berorientasi tujuan dengan kemampuan luar biasa untuk memotivasi tim. Terkadang terlihat otoriter tapi membuktikannya dengan hasil."
                )}
                {result.type === 'Type2' && (
                  locale === 'ko' ? "팀원들의 감정과 상태를 세심하게 챙기며 협력을 이끌어냅니다. 갈등을 중재하고 분위기를 부드럽게 만듭니다. 경청 능력이 뛰어나고 누구와도 잘 지냅니다. 눈에 띄지 않지만 없으면 안 되는 팀의 필수 요소입니다." :
                  locale === 'en' ? "Carefully looks after team members' emotions and conditions to foster cooperation. Mediates conflicts and creates a gentle atmosphere. Has excellent listening skills and gets along with everyone. Not noticeable but an essential element of the team." :
                  locale === 'ja' ? "チームメンバーの感情と状態を細心に気遣い、協力を導きます。対立を仲介し、雰囲気を柔らかくします。傾聴能力に優れ、誰とでもうまくやります。目立たないが、チームの必須要素です。" :
                  locale === 'zh-CN' ? "细心照顾团队成员的情感和状态，促进合作。调解冲突，营造温和的氛围。具有出色的倾听能力，与任何人都相处融洽。虽然不显眼，但却是团队不可或缺的要素。" :
                  locale === 'zh-TW' ? "細心照顧團隊成員的情感和狀態，促進合作。調解衝突，營造溫和的氛圍。具有出色的傾聽能力，與任何人都相處融洽。雖然不顯眼，但卻是團隊不可或缺的要素。" :
                  locale === 'vi' ? "Chăm sóc cẩn thận cảm xúc và tình trạng của các thành viên nhóm để thúc đẩy hợp tác. Hòa giải xung đột và tạo ra bầu không khí nhẹ nhàng. Có khả năng lắng nghe xuất sắc và hòa hợp với mọi người. Không nổi bật nhưng là yếu tố thiết yếu của nhóm." :
                  "Memperhatikan dengan cermat emosi dan kondisi anggota tim untuk mendorong kerjasama. Memediasi konflik dan menciptakan suasana yang lembut. Memiliki kemampuan mendengarkan yang luar biasa dan bergaul dengan siapa pun. Tidak mencolok tapi elemen penting tim."
                )}
                {result.type === 'Type3' && (
                  locale === 'ko' ? "기존의 틀을 깨는 참신한 아이디어로 팀에 활력을 줍니다. 문제를 다양한 관점에서 접근하며 창의적 해결책을 제시합니다. 자유로운 분위기에서 최고의 능력을 발휘하지만 실행보다는 기획에 강합니다." :
                  locale === 'en' ? "Brings vitality to the team with fresh ideas that break existing frameworks. Approaches problems from various perspectives and presents creative solutions. Shows best abilities in a free atmosphere but is stronger in planning than execution." :
                  locale === 'ja' ? "既存の枠を破る斬新なアイデアでチームに活力を与えます。問題を多様な視点からアプローチし、創造的な解決策を提示します。自由な雰囲気で最高の能力を発揮しますが、実行より企画に強いです。" :
                  locale === 'zh-CN' ? "用打破现有框架的新鲜想法为团队带来活力。从各种角度处理问题，提出创造性解决方案。在自由氛围中发挥最佳能力，但在策划方面比执行更强。" :
                  locale === 'zh-TW' ? "用打破現有框架的新鮮想法為團隊帶來活力。從各種角度處理問題，提出創造性解決方案。在自由氛圍中發揮最佳能力，但在策劃方面比執行更強。" :
                  locale === 'vi' ? "Mang lại sức sống cho nhóm với những ý tưởng mới mẻ phá vỡ khuôn khổ hiện có. Tiếp cận vấn đề từ nhiều góc độ khác nhau và đưa ra giải pháp sáng tạo. Thể hiện khả năng tốt nhất trong bầu không khí tự do nhưng mạnh về lập kế hoạch hơn thực thi." :
                  "Membawa vitalitas ke tim dengan ide-ide segar yang memecahkan kerangka yang ada. Mendekati masalah dari berbagai perspektif dan menyajikan solusi kreatif. Menunjukkan kemampuan terbaik dalam suasana bebas tapi lebih kuat dalam perencanaan daripada eksekusi."
                )}
                {result.type === 'Type4' && (
                  locale === 'ko' ? "계획을 현실로 만드는 실행 전문가입니다. 꼼꼼하고 책임감 있게 맡은 일을 완수합니다. 실질적이고 현실적인 판단력이 뛰어나며 마감을 놓치지 않습니다. 화려하진 않지만 팀의 든든한 기둥입니다." :
                  locale === 'en' ? "An execution expert who turns plans into reality. Completes assigned tasks meticulously and responsibly. Has excellent practical and realistic judgment and never misses deadlines. Not flashy but a solid pillar of the team." :
                  locale === 'ja' ? "計画を現実にする実行の専門家です。細心で責任感を持って任された仕事を完成させます。実質的で現実的な判断力に優れ、締切を逃しません。華やかではありませんが、チームの堅実な柱です。" :
                  locale === 'zh-CN' ? "将计划变为现实的执行专家。细致负责地完成分配的任务。具有出色的实用和现实判断力，从不错过截止日期。虽然不华丽，但是团队的坚实支柱。" :
                  locale === 'zh-TW' ? "將計劃變為現實的執行專家。細緻負責地完成分配的任務。具有出色的實用和現實判斷力，從不錯過截止日期。雖然不華麗，但是團隊的堅實支柱。" :
                  locale === 'vi' ? "Chuyên gia thực thi biến kế hoạch thành hiện thực. Hoàn thành nhiệm vụ được giao một cách tỉ mỉ và có trách nhiệm. Có khả năng phán đoán thực tế và thực tiễn xuất sắc, không bao giờ bỏ lỡ thời hạn. Không hào nhoáng nhưng là trụ cột vững chắc của nhóm." :
                  "Ahli eksekusi yang mengubah rencana menjadi kenyataan. Menyelesaikan tugas yang diberikan dengan teliti dan bertanggung jawab. Memiliki penilaian praktis dan realistis yang luar biasa dan tidak pernah melewatkan tenggat waktu. Tidak mencolok tapi pilar yang solid dari tim."
                )}
                {result.type === 'Type5' && (
                  locale === 'ko' ? "양쪽 의견을 객관적으로 듣고 최선의 합의점을 찾습니다. 감정적이지 않고 논리적으로 상황을 판단합니다. 팀 내 갈등을 해소하고 분위기를 안정시킵니다. 모두가 만족하는 결론을 이끌어내는 능력이 탁월합니다." :
                  locale === 'en' ? "Objectively listens to both sides and finds the best compromise. Judges situations logically without being emotional. Resolves team conflicts and stabilizes the atmosphere. Has excellent ability to reach conclusions that satisfy everyone." :
                  locale === 'ja' ? "両方の意見を客観的に聞き、最良の合意点を見つけます。感情的にならず論理的に状況を判断します。チーム内の対立を解決し、雰囲気を安定させます。全員が満足する結論を導く能力に優れています。" :
                  locale === 'zh-CN' ? "客观地听取双方意见，找到最佳妥协点。不带感情地逻辑判断情况。解决团队冲突，稳定氛围。具有出色的能力，能得出让所有人都满意的结论。" :
                  locale === 'zh-TW' ? "客觀地聽取雙方意見，找到最佳妥協點。不帶感情地邏輯判斷情況。解決團隊衝突，穩定氛圍。具有出色的能力，能得出讓所有人都滿意的結論。" :
                  locale === 'vi' ? "Lắng nghe khách quan cả hai bên và tìm ra thỏa hiệp tốt nhất. Đánh giá tình huống một cách logic mà không cảm xúc. Giải quyết xung đột trong nhóm và ổn định bầu không khí. Có khả năng xuất sắc để đưa ra kết luận làm hài lòng mọi người." :
                  "Mendengarkan kedua belah pihak secara objektif dan menemukan kompromi terbaik. Menilai situasi secara logis tanpa emosional. Menyelesaikan konflik tim dan menstabilkan suasana. Memiliki kemampuan luar biasa untuk mencapai kesimpulan yang memuaskan semua orang."
                )}
                {result.type === 'Type6' && (
                  locale === 'ko' ? "한 발짝 물러서서 전체를 관찰하고 분석합니다. 데이터와 사실에 기반한 의견을 제시하며 팀의 맹점을 발견합니다. 감정보다는 논리로 판단하고 장기적 관점에서 조언합니다. 조용하지만 깊이 있는 기여를 합니다." :
                  locale === 'en' ? "Steps back to observe and analyze the whole picture. Presents opinions based on data and facts, discovering team blind spots. Judges with logic rather than emotion and advises from a long-term perspective. Makes quiet but deep contributions." :
                  locale === 'ja' ? "一歩下がって全体を観察し分析します。データと事実に基づいた意見を提示し、チームの盲点を発見します。感情より論理で判断し、長期的な視点で助言します。静かですが深い貢献をします。" :
                  locale === 'zh-CN' ? "退后一步观察和分析整体情况。基于数据和事实提出意见，发现团队盲点。用逻辑而非情感判断，从长期角度提供建议。做出安静但有深度的贡献。" :
                  locale === 'zh-TW' ? "退後一步觀察和分析整體情況。基於數據和事實提出意見，發現團隊盲點。用邏輯而非情感判斷，從長期角度提供建議。做出安靜但有深度的貢獻。" :
                  locale === 'vi' ? "Lùi lại một bước để quan sát và phân tích toàn cảnh. Đưa ra ý kiến dựa trên dữ liệu và sự thật, phát hiện điểm mù của nhóm. Phán đoán bằng logic thay vì cảm xúc và tư vấn từ góc độ dài hạn. Đóng góp im lặng nhưng sâu sắc." :
                  "Mundur selangkah untuk mengamati dan menganalisis keseluruhan. Menyajikan pendapat berdasarkan data dan fakta, menemukan titik buta tim. Menilai dengan logika daripada emosi dan menasihati dari perspektif jangka panjang. Memberikan kontribusi yang tenang tapi mendalam."
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ✅ {t('mbti.pros')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.map((pro, index) => {
                    const proText = typeof pro === 'string' ? pro : pro[locale] || pro.ko;
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                      >
                        {proText}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('mbti.cons')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.map((con, index) => {
                    const conText = typeof con === 'string' ? con : con[locale] || con.ko;
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                      >
                        {conText}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💼 {t('teamPlayerTest.result.recommendedRole')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(() => {
                  const roleText = typeof result.recommendedRole === 'string' ? result.recommendedRole : result.recommendedRole[locale] || result.recommendedRole.ko;
                  const roles = roleText.split(/,\s*|，\s*|、\s*/).map(item => item.trim()).filter(item => item.length > 0);
                  return roles.map((role, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                    >
                      {role}
                    </span>
                  ));
                })()}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">
                💡 {t('teamPlayerTest.result.advice')}
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