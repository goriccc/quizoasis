'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Phase3FriendshipBalanceGameQuestion,
  Phase3FriendshipBalanceGameResult,
  calculatePhase3FriendshipBalanceGameResult,
} from '@/lib/phase3FriendshipBalanceGameData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount , prefetchStorageImages, extractImageFilenamesFromQuestions} from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';

/** 로케일별로 문항 앞의 「라운드 n」접두를 제거한 본문 */
const FRIENDSHIP_BALANCE_ROUND_STRIP: Record<string, RegExp[]> = {
  ko: [/^라운드\s*10\s*\.\s*최후의 라운드\.\s*/, /^라운드\s*\d+\s*\.\s*/],
  en: [/^Round\s*10\s*\.\s*Final round\.\s*/i, /^Round\s*\d+\s*\.\s*/i],
  ja: [/^ラウンド\s*10\s*[．.]\s*最終ラウンド[．.]\s*/, /^ラウンド\s*\d+\s*[．.]\s*/],
  'zh-CN': [/^第\s*10\s*轮[。．]\s*最后一轮[。．]\s*/, /^第\s*\d+\s*轮[。．]\s*/],
  'zh-TW': [/^第\s*10\s*輪[。．]\s*最後一輪[。．]\s*/, /^第\s*\d+\s*輪[。．]\s*/],
  vi: [/^Vòng\s*10\s*[.:]\s*Vòng\s*cuối\s*cùng\s*[.:]\s*/i, /^Vòng\s*\d+\s*[.:]\s*/i],
  id: [/^Ronde\s*10\s*[.:]\s*Ronde\s*terakhir\s*[.:]\s*/i, /^Ronde\s*\d+\s*[.:]\s*/i],
};

function stripFriendshipBalanceRoundPrefix(locale: string, raw: string): { body: string; matched: boolean } {
  const list = FRIENDSHIP_BALANCE_ROUND_STRIP[locale] ?? FRIENDSHIP_BALANCE_ROUND_STRIP.ko;
  let s = raw;
  for (const re of list) {
    const next = s.replace(re, '').trim();
    if (next !== s) {
      return { body: next, matched: true };
    }
  }
  return { body: raw, matched: false };
}

/** 진행 순번으로 라운드 문구 재조합 (10번째 스텝이면서 원래 10번 문항일 때만 「최종」접두) */
function formatFriendshipBalanceRoundQuestionText(
  locale: string,
  displayRound1Based: number,
  rawQuestionText: string,
  originalQuestionId: number
): string {
  const { body, matched } = stripFriendshipBalanceRoundPrefix(locale, rawQuestionText);
  if (!matched) return rawQuestionText;
  const useFinal = displayRound1Based === 12 && originalQuestionId === 12;
  switch (locale) {
    case 'en':
      return useFinal
        ? `Round ${displayRound1Based}. Final round. ${body}`
        : `Round ${displayRound1Based}. ${body}`;
    case 'ja':
      return useFinal
        ? `ラウンド${displayRound1Based}。最終ラウンド。${body}`
        : `ラウンド${displayRound1Based}。${body}`;
    case 'zh-CN':
      return useFinal
        ? `第${displayRound1Based}轮。最后一轮。${body}`
        : `第${displayRound1Based}轮。${body}`;
    case 'zh-TW':
      return useFinal
        ? `第${displayRound1Based}輪。最後一輪。${body}`
        : `第${displayRound1Based}輪。${body}`;
    case 'vi':
      return useFinal
        ? `Vòng ${displayRound1Based}. Vòng cuối cùng. ${body}`
        : `Vòng ${displayRound1Based}. ${body}`;
    case 'id':
      return useFinal
        ? `Ronde ${displayRound1Based}. Ronde terakhir. ${body}`
        : `Ronde ${displayRound1Based}. ${body}`;
    default:
      return useFinal
        ? `라운드 ${displayRound1Based}. 최후의 라운드. ${body}`
        : `라운드 ${displayRound1Based}. ${body}`;
  }
}

/** 콜론 섹션 제목 앞 이모지 제거 (모든 언어 공통) */
function stripSectionHeadingEmoji(heading: string): string {
  return heading.replace(/^[\s\uFE0F\u200D]+/g, '').trim();
}

function isStrengthHeading(heading: string): boolean {
  const h = stripSectionHeadingEmoji(heading);
  return /강점|Strength|強み|优点|優點|优势|優勢|Điểm mạnh|Kelebihan/i.test(h);
}

function isOneLinerHeading(heading: string): boolean {
  const h = stripSectionHeadingEmoji(heading);
  return /한\s*줄|One[- ]?liner|One line|一言|一句话|一句話|点评|點評|評価|Một dòng|một câu|Satu baris|kalimat/i.test(h);
}

/** description 본문에서 강점·한 줄 평 섹션 분리 */
function parseFriendshipBalanceDescription(text: string): {
  mainBody: string;
  strengths: string;
  oneLiner: string;
} {
  const segments = text.split(/\n\n+/).filter((s) => s.trim().length > 0);
  const mainParts: string[] = [];
  let strengths = '';
  let oneLiner = '';

  for (const segment of segments) {
    const trimmed = segment.trim();
    const colonIndex = trimmed.indexOf(':');
    const hasLabeledSection = colonIndex > 0 && colonIndex < trimmed.length - 1;
    if (hasLabeledSection) {
      const heading = trimmed.slice(0, colonIndex).trim();
      const body = trimmed.slice(colonIndex + 1).trim();
      if (isStrengthHeading(heading)) {
        strengths = body;
      } else if (isOneLinerHeading(heading)) {
        oneLiner = body;
      } else {
        mainParts.push(trimmed);
      }
    } else {
      mainParts.push(trimmed);
    }
  }

  return {
    mainBody: mainParts.join('\n\n'),
    strengths,
    oneLiner,
  };
}

interface Phase3FriendshipBalanceGameTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3FriendshipBalanceGameQuestion[];
  results: Phase3FriendshipBalanceGameResult[];
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

export default function Phase3FriendshipBalanceGameTestClient({ 
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
}: Phase3FriendshipBalanceGameTestClientProps) {
  const t = useTranslations('phase3FriendshipBalanceGameTest');
  const tGlobal = useTranslations(); // 글로벌 번역 (mbti 등)
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // 원래 질문 인덱스를 키로 사용
  const [result, setResult] = useState<Phase3FriendshipBalanceGameResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3FriendshipBalanceGameQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]); // 셔플링된 질문의 원래 인덱스 매핑
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, any[]>>({});
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  // 답변 순서 섞기 (질문이 바뀔 때마다)
  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    
    const questionKey = currentQuestion;
    if (!shuffledOptionsMap[questionKey] && shuffledQuestions[currentQuestion]) {
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
  const shuffleQuestions = (questionList: Phase3FriendshipBalanceGameQuestion[]) => {
    // 원래 인덱스와 함께 질문을 쌍으로 만들어서 셔플링
    const questionsWithIndices = questionList.map((q, idx) => ({ question: q, originalIndex: idx }));
    const shuffled = [...questionsWithIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
      questions: shuffled.map(item => item.question),
      originalIndices: shuffled.map(item => item.originalIndex)
    };
  };

  // 테스트 시작
  const handleStartTest = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
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
  const handleAnswer = (score: number) => {
    // 현재 질문의 원래 인덱스를 찾아서 답변 저장
    const currentOriginalIndex = originalQuestionIndices[currentQuestion];
    const newAnswers = { ...answers, [currentOriginalIndex]: score };
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      
      // 원래 질문 순서대로 점수 배열 재구성 (newAnswers에는 모든 답변이 포함됨)
      const answersArray = questions.map((_, idx) => newAnswers[idx] ?? 0);
      
      // 결과 계산
      const resultType = calculatePhase3FriendshipBalanceGameResult(answersArray);
      const matchResult = results.find(r => r.type === resultType);

      if (matchResult) {
        setResult(matchResult);
      }
    }
  };

  // 다시 하기
  const handleRetake = () => {
    const { questions: shuffled, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(shuffled);
    setOriginalQuestionIndices(originalIndices);
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;

    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const typeLabel = `${result.emoji} ${resultTitle}`;
    const shareText = `${t('shareMessages.default', { type: typeLabel })}\n\n${`https://myquizoasis.com${window.location.pathname}`}`;
    
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
        alert(t('alerts.resultCopied'));
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert(t('alerts.shareFailed'));
      }
    }
  };

  // 공유 함수들
  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const typeLabel = result && resultTitle ? `${result.emoji} ${resultTitle}` : '';
    const shareText = result
      ? encodeURIComponent(t('shareMessages.line', { type: typeLabel }))
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const typeLabel = result && resultTitle ? `${result.emoji} ${resultTitle}` : '';
    const shareText = result
      ? `${t('shareMessages.wechat', { type: typeLabel })}\n\n${url}`
      : `${t('shareMessages.startWechat')}\n\n${url}`;
    
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
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const typeLabel = result && resultTitle ? `${result.emoji} ${resultTitle}` : '';
    const shareText = result
      ? encodeURIComponent(t('shareMessages.whatsapp', { type: typeLabel }))
      : encodeURIComponent(t('shareMessages.startWhatsapp'));
    window.open(`https://wa.me/?text=${shareText}%0A%0A${url}`, '_blank');
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    if (typeof window === 'undefined') return;
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }

    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    // 결과가 있으면 맞춤형 공유 문구 사용
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const typeLabel = result && resultTitle ? `${result.emoji} ${resultTitle}` : '';
    const shareDescription = result
      ? t('shareMessages.kakao', { type: typeLabel })
      : t('shareMessages.startKakao');
    
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
            title: t('ui.goToTest'),
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
    trackShareEvent('telegram', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const resultTitle = result ? (result.title[locale as keyof typeof result.title] || result.title.ko) : '';
    const typeLabel = result && resultTitle ? `${result.emoji} ${resultTitle}` : '';
    const shareText = result
      ? t('shareMessages.telegram', { type: typeLabel })
      : t('shareMessages.startTelegram');
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
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
              src={getThumbnailUrl(thumbnail || '')}
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
                label={t('ui.adsenseTitle')}
              />
            </div>

            <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
              <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
              <p>{t('startMessage.line2')}</p>
              <p>{t('startMessage.line3')}</p>
              <p>{t('startMessage.line4')}</p>
              <p className="whitespace-pre-line">{t('startMessage.line5')}</p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-rose-500 to-violet-500 hover:from-rose-600 hover:to-violet-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {tGlobal('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
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
                {tGlobal('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {t('ui.similarTests')}
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
            label={t('ui.adsenseTitle')}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">{tGlobal('mbti.loadingResults')}</p>
        </div>

        {/* AdSense 광고 - 로딩 스피너 하단 */}
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
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
            🎉 {tGlobal('mbti.testCompleted')}
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
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultShortDescription = result.shortDescription[locale as keyof typeof result.shortDescription] || result.shortDescription.ko;
    const resultLongDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    const { mainBody: resultMainBody, strengths: resultStrengths, oneLiner: resultOneLiner } =
      parseFriendshipBalanceDescription(resultLongDescription);
    const strengthsList = resultStrengths
      ? resultStrengths.split(/(?<=[.!?。！？])\s+/).map((s) => s.trim()).filter(Boolean)
      : [];
    const resultEmpathyLevel = result.empathyLevel[locale as keyof typeof result.empathyLevel] || result.empathyLevel.ko;
    const resultCharacteristics = result.characteristics[locale as keyof typeof result.characteristics] || result.characteristics.ko;
    const resultGoodMatch = result.goodMatch[locale as keyof typeof result.goodMatch] || result.goodMatch.ko;
    const resultBadMatch = result.badMatch[locale as keyof typeof result.badMatch] || result.badMatch.ko;

    const resultCertification =
      result.certificationPhrase[locale as keyof typeof result.certificationPhrase] || result.certificationPhrase.ko;
    const isType6 = result.type === 'Type6';

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-violet-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {tGlobal('mbti.yourResult')}
              </h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-3">
                {resultShortDescription}
              </p>
              <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line text-left">
                {resultMainBody}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  📊 {t('ui.friendshipStyleType')}
                </h3>
                <p className="text-2xl font-bold text-rose-600 text-center" style={{ fontSize: '1.5em' }}>
                  {resultEmpathyLevel}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  ⭐ {t('ui.friendshipKeywords')}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {resultCharacteristics
                    .split(/\s*·\s*/)
                    .map((char) => char.trim())
                    .filter(Boolean)
                    .map((char, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-r from-rose-100 to-violet-100 text-rose-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {resultStrengths && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  💪 {t('ui.typeStrengths')}
                </h3>
                {strengthsList.length > 1 ? (
                  <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside pl-[2ch]">
                    {strengthsList.map((item, idx) => (
                      <li key={idx} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed text-left">
                    {resultStrengths}
                  </p>
                )}
              </div>
            )}

            <div className={`grid gap-3 mb-3 ${resultBadMatch ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  💖 {t('ui.friendSays')}
                </h3>
                <div className="space-y-2">
                  {(() => {
                    // "Type 2 (서툰 뚝딱이)" 형식에서 Type 추출
                    const matchType = resultGoodMatch.match(/Type\s*(\d+)/i);
                    if (matchType) {
                      const typeNumber = matchType[1];
                      const matchTypeKey = `Type${typeNumber}`;
                      const matchResult = results.find(r => r.type === matchTypeKey);
                      if (matchResult) {
                        const matchTitle = matchResult.title[locale as keyof typeof matchResult.title] || matchResult.title.ko;
                        return (
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg px-3 py-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl">{matchResult.emoji}</span>
                              <span className="text-sm font-medium text-gray-800">{matchTitle}</span>
                            </div>
                          </div>
                        );
                      }
                    }
                    return (
                      <p className="text-sm text-gray-700">
                        {resultGoodMatch}
                      </p>
                    );
                  })()}
                </div>
              </div>

{resultBadMatch && (
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  ⚠️ {t('ui.friendshipCautions')}
                </h3>
                <div className="space-y-2">
                  {(() => {
                    // "Type 6 (인간 수도꼭지)" 형식에서 Type 추출
                    const matchType = resultBadMatch.match(/Type\s*(\d+)/i);
                    if (matchType) {
                      const typeNumber = matchType[1];
                      const matchTypeKey = `Type${typeNumber}`;
                      const matchResult = results.find(r => r.type === matchTypeKey);
                      if (matchResult) {
                        const matchTitle = matchResult.title[locale as keyof typeof matchResult.title] || matchResult.title.ko;
                        return (
                          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg px-3 py-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl">{matchResult.emoji}</span>
                              <span className="text-sm font-medium text-gray-800">{matchTitle}</span>
                            </div>
                          </div>
                        );
                      }
                    }
                    return (
                      <p className="text-sm text-gray-700">
                        {resultBadMatch}
                      </p>
                    );
                  })()}
                </div>
              </div>
              )}
            </div>


            {isType6 && resultCertification && (
              <div className="bg-gradient-to-r from-rose-100 to-violet-100 rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🏆 {t('ui.certificationPhrase')}
                </h3>
                <p className="text-sm font-semibold text-rose-800 leading-relaxed text-center">
                  {resultCertification}
                </p>
              </div>
            )}

            {resultOneLiner && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  💬 {t('ui.oneLiner')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left">
                  &ldquo;{resultOneLiner}&rdquo;
                </p>
              </div>
            )}

            <div className="mt-8 mb-6 px-4">
              <button
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-rose-500 to-violet-500 text-white font-bold py-4 px-6 rounded-xl hover:from-rose-600 hover:to-violet-600 transition-all shadow-md flex items-center justify-center gap-3"
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
                label={t('ui.adsenseTitle')}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={handleRetake}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
                {tGlobal('mbti.retakeTest')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-rose-500 to-violet-500 text-white font-bold py-4 px-6 rounded-xl hover:from-rose-600 hover:to-violet-600 transition-all text-center shadow-md"
              >
                {tGlobal('mbti.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {tGlobal('mbti.shareResultWithFriends')}
              </h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>

            {/* 🎯 유사한 다른 테스트 추천 톱5 */}
            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t('recommendations.similarTestsTop5')}
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
                  {t('recommendations.popularTestsTop5')}
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
  if (shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) {
    return null; // 질문이 준비되지 않았으면 렌더링하지 않음
  }
  
  const question = shuffledQuestions[currentQuestion];
  const questionTextRaw = question.question[locale as keyof typeof question.question] || question.question.ko;
  const questionText = formatFriendshipBalanceRoundQuestionText(
    locale,
    currentQuestion + 1,
    questionTextRaw,
    question.id
  );
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  
  const optionsArray = shuffledOptionsMap[currentQuestion] || question.options;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-violet-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {tGlobal('mbti.progress')}
            </span>
            <span className="text-sm font-bold text-rose-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-rose-500 to-violet-500 h-full rounded-full transition-all duration-300 ease-out"
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
                  onClick={() => handleAnswer(option.score)}
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
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {tGlobal('mbti.shareWithFriends')}
            </h2>
            <div className="flex justify-center gap-2">
              <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
              <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}