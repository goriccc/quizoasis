'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { DatingQuestion, DatingResult, calculateDatingResult } from '../lib/datingData';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Share2, MessageCircle, Send, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';

interface DatingTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: DatingQuestion[];
  results: DatingResult[];
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

export default function DatingTestClient({ 
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
}: DatingTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<DatingResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<DatingQuestion[]>(questions);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [similarTestsState, setSimilarTestsState] = useState(similarTests);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);

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
            .sort((a, b) => Math.random() - 0.5)
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
  const shuffleQuestions = (questionList: DatingQuestion[]) => {
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
    incrementPlayCount(slug);
    setStarted(true);
  };

  // 답변 처리
  const handleAnswer = (scores: any) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
      setShowLoadingSpinner(true);
    }
  };

  // 결과 계산
  const calculateResult = (finalAnswers: any[]) => {
    const resultType = calculateDatingResult(finalAnswers);
    const datingResult = results.find(r => r.type === resultType);
    
    if (datingResult) {
      setResult(datingResult);
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
  };

  // 결과 공유하기
  const handleShareResult = async () => {
    if (!result) return;
    
    const shareText = `${title}\n\n${t('mbti.shareInviteMessage')}\n\n${window.location.href}`;
    
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

  // 팝업에서 결과 보기
  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
  };

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-full mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '16/9' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_026_dating_style.jpg')}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="px-4">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed text-center whitespace-pre-line">
              {t('mbti.datingTestIntro')}
            </p>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center mb-6">
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
              ) : (
                <div className="flex justify-center">
                  <a 
                    href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" 
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

            <div className="mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.shareWithFriends')}
              </h2>
              <div className="flex justify-center gap-4">
                <button onClick={copyLink} className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <LinkIcon size={20} className="text-gray-600" />
                </button>
                <button onClick={shareToKakao} className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-black" />
                </button>
                <button onClick={shareToTelegram} className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </button>
                <button onClick={shareToTwitter} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Twitter size={20} className="text-white" />
                </button>
                <button onClick={shareToFacebook} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook size={20} className="text-white" />
                </button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🎯 유사한 다른 테스트 추천 톱5
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
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

            {popularTestsState.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🔥 요즘 인기 테스트 추천 톱5
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {popularTestsState.map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
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
      </div>
    );
  }

  // 로딩 스피너
  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">{t('mbti.loadingResults')}</p>
        </div>
      </div>
    );
  }

  // 결과 팝업
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🎉 {t('mbti.testCompleted')}
          </h2>
          
          <div className="mb-6">
            <div className="text-center text-sm text-gray-600 mb-3">
              {t('mbti.recommendedProducts')}
            </div>
            {locale === 'ko' ? (
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
              <div className="flex justify-center">
                <a 
                  href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" 
                  target="_blank"
                  rel="noopener noreferrer"
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
    const resultTraits = result.traits;
    const resultIdealDate = result.idealDate[locale as keyof typeof result.idealDate] || result.idealDate.ko;

    // 궁합 정보 가져오기
    const bestPartners = result.compatibility.best.map(type => 
      results.find(r => r.type === type)
    ).filter(Boolean);
    const goodPartners = result.compatibility.good.map(type => 
      results.find(r => r.type === type)
    ).filter(Boolean);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div>
            <div className="text-center mb-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('mbti.yourResult')}
              </h2>
              <div className="text-7xl mb-4">{result.emoji}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {resultTitle}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {resultDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {t('mbti.characteristics')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {resultTraits.map((trait: any, index: number) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {trait[locale] || trait.ko}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                💝 {t('mbti.idealDate')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {resultIdealDate}
              </p>
            </div>

            {result.compatibility && (
              <>
                {result.compatibility.best && result.compatibility.best.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      💖 {t('mbti.bestCompatibility')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {result.compatibility.best.map(type => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        return (
                          <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 px-4 py-2 rounded-full">
                            <span className="text-2xl">{partner.emoji}</span>
                            <span className="text-sm font-medium text-gray-800">
                              {partner.title[locale as keyof typeof partner.title] || partner.title.ko}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {result.compatibility.good && result.compatibility.good.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      😊 {t('mbti.goodCompatibility')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {result.compatibility.good.map(type => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        return (
                          <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                            <span className="text-2xl">{partner.emoji}</span>
                            <span className="text-sm font-medium text-gray-800">
                              {partner.title[locale as keyof typeof partner.title] || partner.title.ko}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {result.compatibility.careful && result.compatibility.careful.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      ⚠️ {t('mbti.carefulCompatibility')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {result.compatibility.careful.map(type => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        return (
                          <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
                            <span className="text-2xl">{partner.emoji}</span>
                            <span className="text-sm font-medium text-gray-800">
                              {partner.title[locale as keyof typeof partner.title] || partner.title.ko}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {result.compatibility.difficult && result.compatibility.difficult.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      ❌ {t('mbti.difficultCompatibility')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {result.compatibility.difficult.map(type => {
                        const partner = results.find(r => r.type === type);
                        if (!partner) return null;
                        return (
                          <div key={type} className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full">
                            <span className="text-2xl">{partner.emoji}</span>
                            <span className="text-sm font-medium text-gray-800">
                              {partner.title[locale as keyof typeof partner.title] || partner.title.ko}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="mb-6 px-4">
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
              <div className="flex justify-center gap-4">
                <button onClick={copyLink} className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <LinkIcon size={20} className="text-gray-600" />
                </button>
                <button onClick={shareToKakao} className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-black" />
                </button>
                <button onClick={shareToTelegram} className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </button>
                <button onClick={shareToTwitter} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Twitter size={20} className="text-white" />
                </button>
                <button onClick={shareToFacebook} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
  const questionText = question.question[locale as keyof typeof question.question] || question.question.ko;
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

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {t('mbti.shareWithFriends')}
            </h2>
            <div className="flex justify-center gap-4">
              <button onClick={copyLink} className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <LinkIcon size={20} className="text-gray-600" />
              </button>
              <button onClick={shareToKakao} className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-black" />
              </button>
              <button onClick={shareToTelegram} className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Send size={20} className="text-white" />
              </button>
              <button onClick={shareToTwitter} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Twitter size={20} className="text-white" />
              </button>
              <button onClick={shareToFacebook} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Facebook size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

