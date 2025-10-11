'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { MBTIQuestion, MBTIResult } from '../lib/mbtiData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';

interface MBTITestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: MBTIQuestion[];
  results: MBTIResult[];
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

export default function MBTITestClient({ 
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
}: MBTITestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<MBTIQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);

  // 유사한 테스트와 인기 테스트 로드 (클라이언트 사이드에서 비동기로)
  useEffect(() => {
    if (similarTests.length === 0) {
      const loadTests = async () => {
        try {
          const allTests = await getTests();
          const currentTest = allTests.find(t => t.slug === slug);
          
          if (!currentTest) {
            // 현재 테스트를 찾을 수 없으면 최신 테스트로 대체
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

          // 현재 테스트의 태그 추출
          const currentTestTags = typeof currentTest.tags === 'object' && !Array.isArray(currentTest.tags)
            ? currentTest.tags[locale] || currentTest.tags.ko || []
            : currentTest.tags || [];

          // 유사한 테스트 찾기 (같은 태그를 가진 테스트들)
          const similarTestsList = allTests
            .filter(t => t.slug !== slug) // 현재 테스트 제외
            .filter(t => {
              const otherTestTags = typeof t.tags === 'object' && !Array.isArray(t.tags)
                ? t.tags[locale] || t.tags.ko || []
                : t.tags || [];
              
              // 공통 태그가 있는지 확인
              return Array.isArray(currentTestTags) && Array.isArray(otherTestTags) &&
                currentTestTags.some(tag => otherTestTags.includes(tag));
            })
            .sort((a, b) => Math.random() - 0.5) // 랜덤 정렬
            .slice(0, 5) // 최대 5개
            .map(t => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count
            }));

          // 인기 테스트 찾기 (유사한 테스트와 중복되지 않는 다른 테스트들)
          const similarTestSlugs = new Set(similarTestsList.map(t => t.slug));
          const popularTestsList = allTests
            .filter(t => t.slug !== slug && !similarTestSlugs.has(t.slug)) // 현재 테스트와 유사한 테스트 제외
            .sort((a, b) => b.play_count - a.play_count) // 플레이 수 기준 정렬
            .slice(0, 5) // 최대 5개
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

  // 3초 지연 로딩 스피너 효과
  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true); // 3초 후 팝업 표시
      }, 3000); // 3초 지연
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  // AdSense 광고 로드
  useEffect(() => {
    // 결과 화면일 때는 광고를 로드하지 않음
    if (showResult) return;
    
    // 광고 로드를 위한 타이머 (DOM이 완전히 렌더링된 후 실행)
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          const adElements = document.querySelectorAll('.adsbygoogle');
          
          // data-adsbygoogle-status가 없는 광고만 로드
          adElements.forEach((el) => {
            const status = (el as HTMLElement).getAttribute('data-adsbygoogle-status');
            if (!status || status === '') {
              try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
              } catch (err) {
                // 이미 로드된 광고는 무시
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




  // 질문 섞기 함수 (전체 10개 완전 랜덤)
  const shuffleQuestions = (questionList: MBTIQuestion[]) => {
    const shuffled = [...questionList];
    
    // Fisher-Yates 알고리즘 (전체 랜덤)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  };

  // 테스트 시작 핸들러
  const handleStartTest = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setDisplayPlayCount(prev => prev + 1); // 플레이 카운트 즉시 증가
    incrementPlayCount(slug); // 서버의 플레이 카운트도 증가
    setStarted(true);
  };

  // 답변 처리
  const handleAnswer = (score: string) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문 완료 - 로딩 스피너 표시 후 결과 계산
      calculateResult(newAnswers);
      setShowLoadingSpinner(true); // 로딩 스피너 표시
    }
  };

  // MBTI 결과 계산
  const calculateResult = (finalAnswers: string[]) => {
    const scores: Record<string, number> = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0,
    };

    finalAnswers.forEach((answer) => {
      if (answer in scores) {
        scores[answer]++;
      }
    });

    const mbtiType = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P');

    const mbtiResult = results.find(r => r.type === mbtiType);
    
    if (mbtiResult) {
      setResult(mbtiResult);
      setShowResult(true);
    }
  };

  // 다시 하기
  const handleRetake = () => {
    setShuffledQuestions(shuffleQuestions(questions)); // 질문 다시 섞기
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  // 공유 함수들
  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    
    // Kakao SDK가 로드되지 않은 경우
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const currentUrl = window.location.href;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
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
    const text = encodeURIComponent(title);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
  };

  // 팝업에서 결과 보기 버튼 클릭
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
  };

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-full mx-auto px-4 py-6">
          {/* 테스트 썸네일 */}
          <div className="relative w-full rounded-xl overflow-hidden mb-6 mx-auto" style={{ maxWidth: '680px', aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'mbti-light.jpg')}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 680px) 100vw, 680px"
              priority
            />
          </div>

          {/* 테스트 제목 */}
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
            {title}
          </h1>

          {/* AdSense 광고 - 타이틀과 설명 사이 */}
          <div className="max-w-[680px] mx-auto mb-4 border-2 border-dashed border-red-500 bg-red-50 p-4 rounded-lg">
            <div className="text-center text-red-600 text-sm mb-2 font-semibold">
              📢 AdSense 광고 영역 (타이틀-설명 사이)
            </div>
            <ins className="adsbygoogle"
              style={{ display: 'block', minHeight: '100px' }}
              data-ad-client="ca-pub-3192752766652582"
              data-ad-slot="9999999999"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>

          {/* 설명 */}
          <p className="text-gray-600 mb-6 leading-relaxed text-center">
            {description}
          </p>

          {/* 시작 버튼 */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleStartTest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {t('mbti.startTest')}
            </button>
          </div>

          {/* 참여자 수 */}
          <p className="text-sm text-gray-600 text-center mb-6">
            {t('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as any) })}
          </p>

          {/* 광고 - 참여자 수와 공유 섹션 사이 */}
          <div className="max-w-[680px] mx-auto mb-6">
              {locale === 'ko' ? (
                // 한국어: 쿠팡 광고
                <iframe 
                  src="https://ads-partners.coupang.com/widgets.html?id=925074&template=carousel&trackingCode=AF6775264&subId=&width=680&height=140&tsource=" 
                  width="680" 
                  height="140" 
                  frameBorder="0" 
                  scrolling="no" 
                  referrerPolicy="unsafe-url"
                  className="w-full"
                />
              ) : (
                // 기타 언어: 알리익스프레스 어필리에이트
                <div className="flex justify-center">
                  <a 
                    href="https://s.click.aliexpress.com/e/_c3qvGy6B?bz=300*250" 
                    target="_parent"
                  >
                    <img 
                      width="300" 
                      height="250" 
                      src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                      alt="AliExpress"
                      style={{ maxWidth: '300px', height: 'auto' }}
                    />
                  </a>
                </div>
              )}
          </div>

          {/* 친구와 같이 해보기 */}
          <div className="mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {t('mbti.shareWithFriends')}
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={copyLink}
                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
              >
                <LinkIcon size={20} className="text-gray-600" />
              </button>
               <button
                 onClick={shareToKakao}
                 className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
               >
                 <MessageCircle size={20} className="text-black" />
               </button>
              <button
                onClick={shareToTelegram}
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <Send size={20} className="text-white" />
              </button>
              <button
                onClick={shareToTwitter}
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              >
                <Twitter size={20} className="text-white" />
              </button>
              <button
                onClick={shareToFacebook}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Facebook size={20} className="text-white" />
              </button>
            </div>
          </div>

                 {/* 유사한 다른 테스트 추천 톱5 */}
          {similarTestsState.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                🎯 유사한 다른 테스트 추천 톱5
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((test) => (
                  <Link
                    key={test.id}
                    href={`/${locale}/test/${test.slug}`}
                    className="block group"
                  >
                    <div className="relative bg-gray-100 rounded-xl aspect-video overflow-hidden mb-3">
                      <Image
                        src={getThumbnailUrl(test.thumbnail)}
                        alt={test.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                        <Play size={12} fill="white" />
                        <span>{formatPlayCount(test.playCount, locale as any)}</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-800 line-clamp-2 text-sm group-hover:text-purple-600 transition-colors">
                      {test.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 인기 테스트 추천 톱5 */}
          {popularTestsState.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                🔥 요즘 인기 테스트 추천 톱5
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {popularTestsState.map((test) => (
                  <Link
                    key={test.id}
                    href={`/${locale}/test/${test.slug}`}
                    className="block group"
                  >
                    <div className="relative bg-gray-100 rounded-xl aspect-video overflow-hidden mb-3">
                      <Image
                        src={getThumbnailUrl(test.thumbnail)}
                        alt={test.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                        <Play size={12} fill="white" />
                        <span>{formatPlayCount(test.playCount, locale as any)}</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-800 line-clamp-2 text-sm group-hover:text-purple-600 transition-colors">
                      {test.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 로딩 스피너 화면
  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        {/* AdSense 광고 - 로딩 스피너 상단 */}
        <div className="mb-8 border-2 border-dashed border-purple-500 bg-purple-50 p-4 rounded-lg w-full max-w-[680px] text-center">
          <div className="text-center text-purple-600 text-sm mb-2 font-semibold">
            📢 AdSense 광고 영역 (로딩 스피너 상단)
          </div>
          <ins className="adsbygoogle"
            style={{ display: 'block', minHeight: '100px' }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot="9999999999"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* 로딩 스피너 */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-700">{t('mbti.loadingResults')}</p>
        </div>

        {/* AdSense 광고 - 로딩 스피너 하단 */}
        <div className="mt-8 border-2 border-dashed border-orange-500 bg-orange-50 p-4 rounded-lg w-full max-w-[680px] text-center">
          <div className="text-center text-orange-600 text-sm mb-2 font-semibold">
            📢 AdSense 광고 영역 (로딩 스피너 하단)
          </div>
          <ins className="adsbygoogle"
            style={{ display: 'block', minHeight: '100px' }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot="9999999999"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // 결과 팝업 화면
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          {/* 팝업 제목 */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🎉 {t('mbti.testCompleted')}
                </h2>
          
          {/* 광고 영역 */}
          <div className="mb-6">
            <div className="text-center text-sm text-gray-600 mb-3">
              {t('mbti.recommendedProducts')}
            </div>
            {locale === 'ko' ? (
              // 한국어: 쿠팡 광고
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
            ) : (
              // 기타 언어: 알리익스프레스 어필리에이트
              <div className="flex justify-center">
                <a 
                  href="https://s.click.aliexpress.com/e/_c3UhUOTh?bz=300*250" 
                  target="_parent"
                >
                  <img 
                    width="300" 
                    height="250" 
                    src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                    alt="AliExpress"
                    className="rounded-lg"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                </a>
              </div>
            )}
          </div>

          {/* 분석 결과 보기 버튼 */}
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
    const resultTitle = result.title[locale] || result.title.ko;
    const resultDescription = result.description[locale] || result.description.ko;
    const resultTraits = result.traits[locale] || result.traits.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('mbti.yourResult')}
              </h2>
              <div className="text-7xl mb-4">{result.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {result.type}
              </h1>
              <p className="text-2xl text-gray-700 font-semibold mb-6">
                {resultTitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.characteristics')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {resultTraits.map((trait: any, index: number) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    #{trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 광고 배너 (한국어 제외) */}
            {locale !== 'ko' && (
              <div className="mb-8 flex justify-center">
                <a 
                  href="https://s.click.aliexpress.com/e/_c3qvGy6B?bz=300*250"
                  target="_parent"
                >
                  <img 
                    width="300" 
                    height="250" 
                    src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg"
                    alt="AliExpress"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                </a>
              </div>
            )}

            {/* AdSense 광고 - 결과와 다시하기 버튼 사이 */}
            <div className="mb-8 border-2 border-dashed border-cyan-500 bg-cyan-50 p-4 rounded-lg">
              <div className="text-center text-cyan-600 text-sm mb-2 font-semibold">
                📢 AdSense 광고 영역 (결과-다시하기 사이)
              </div>
              <ins className="adsbygoogle"
                style={{ display: 'block', minHeight: '100px' }}
                data-ad-client="ca-pub-1234567890123456"
                data-ad-slot="9999999999"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRetake}
                className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all"
              >
                {t('mbti.retakeTest')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center"
              >
                {t('mbti.otherTests')}
              </Link>
            </div>

            {/* 친구와 같이 해보기 - 결과 화면 */}
            <div className="mt-8 mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={copyLink}
                  className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <LinkIcon size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={shareToKakao}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <MessageCircle size={20} className="text-black" />
                </button>
                <button
                  onClick={shareToTelegram}
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <Send size={20} className="text-white" />
                </button>
                <button
                  onClick={shareToTwitter}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
                >
                  <Twitter size={20} className="text-white" />
                </button>
                <button
                  onClick={shareToFacebook}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <Facebook size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 질문 화면
  const question = shuffledQuestions[currentQuestion];
  const questionText = question.question[locale] || question.question.ko;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  // options를 배열로 변환 {A: {...}, B: {...}} → [{...}, {...}]
  const optionsArray = [question.options.A, question.options.B];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* 진행률 바 */}
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

        {/* 질문 카드 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
            {questionText}
          </h2>

          <div className="space-y-4">
            {optionsArray.map((option, index) => {
              const optionText = option.text[locale] || option.text.ko;
              const label = String.fromCharCode(65 + index); // A, B
              const colors = [
                'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200 hover:border-purple-400',
                'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200 hover:border-pink-400',
              ];
              const bgColors = ['bg-purple-600', 'bg-pink-600'];

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className={`w-full bg-gradient-to-r ${colors[index]} border-2 text-gray-800 font-medium py-6 px-6 rounded-xl transition-all transform hover:scale-102 text-left`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 ${bgColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                      {label}
                    </div>
                    <span className="text-lg">{optionText}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* AdSense 광고 - 테스트 진행 마지막 답변 밑 */}
          <div className="mt-8 flex justify-center">
            <div className="border-2 border-dashed border-blue-500 bg-blue-50 p-4 rounded-lg w-full max-w-[680px]">
              <div className="text-center text-blue-600 text-sm mb-2 font-semibold">
                📢 AdSense 광고 영역 (테스트 진행 마지막 답변 밑)
              </div>
              <ins className="adsbygoogle"
                style={{ display: 'block', minHeight: '100px' }}
                data-ad-client="ca-pub-3192752766652582"
                data-ad-slot="9999999999"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          </div>

          {/* 친구와 같이 해보기 - 테스트 진행 중 */}
          <div className="mt-8 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {t('mbti.shareWithFriends')}
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={copyLink}
                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
              >
                <LinkIcon size={20} className="text-gray-600" />
              </button>
              <button
                onClick={shareToKakao}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <MessageCircle size={20} className="text-black" />
              </button>
              <button
                onClick={shareToTelegram}
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <Send size={20} className="text-white" />
              </button>
              <button
                onClick={shareToTwitter}
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              >
                <Twitter size={20} className="text-white" />
              </button>
              <button
                onClick={shareToFacebook}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Facebook size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
