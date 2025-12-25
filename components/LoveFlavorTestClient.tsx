'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { LoveFlavorQuestion, LoveFlavorResult, calculateLoveFlavorResult } from '@/lib/loveFlavorData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { searchAliExpressProducts, getProductKeywordsForDating } from '@/lib/aliexpress';
import ProductRecommendations from './ProductRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';

interface LoveFlavorTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: LoveFlavorQuestion[];
  results: LoveFlavorResult[];
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

// 호환 텍스트(상세 설명은 다국어 단계에서 추가)
const getCompatibilityDescription = (_myType: string, _partnerType: string): string => {
  return '';
};

export default function LoveFlavorTestClient({ 
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
}: LoveFlavorTestClientProps) {
  const t = useTranslations();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [result, setResult] = useState<LoveFlavorResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<LoveFlavorQuestion[]>(questions);
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
      setShuffledOptionsMap(prev => ({ ...prev, [questionKey]: optionsCopy }));
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

  // 결과에 맞춘 제품 로드
  useEffect(() => {
    if (result && locale !== 'ko') {
      const loadProducts = async () => {
        try {
          const keywords = getProductKeywordsForDating(result.type as any, locale);
          const products = await searchAliExpressProducts(keywords[0], 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [result, locale]);

  // 유사 테스트/인기 테스트 로드
  useEffect(() => {
    if (similarTests.length === 0) {
      const loadTests = async () => {
        try {
          const allTests = await getTests();
          const currentTest = allTests.find((t: any) => t.slug === slug);
          const latestTests = allTests
            .filter((t: any) => t.slug !== slug)
            .slice(0, 10)
            .map((t: any) => ({
              id: t.id,
              slug: t.slug,
              title: t.title[locale] || t.title.ko,
              thumbnail: t.thumbnail,
              playCount: t.play_count,
            }));
          setSimilarTestsState(latestTests.slice(0, 5));
          setPopularTestsState(latestTests.slice(5, 10));
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


  const shuffleQuestions = (questionList: LoveFlavorQuestion[]) => {
    const shuffled = [...questionList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartTest = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setDisplayPlayCount(prev => prev + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    setStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (scores: any) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLoadingSpinner(true);
      const loveResult = calculateLoveFlavorResult(newAnswers);
      if (loveResult) setResult(loveResult);
    }
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setShuffledOptionsMap({});
  };

  // 바이럴 공유 메시지 생성 함수
  const getViralShareMessage = () => {
    if (!result) return title;
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    return t('loveFlavorTest.resultShareMessage', { type: resultTitle });
  };

  const copyLink = () => {
    const shareText = showResult ? getViralShareMessage() : title;
    const shareUrl = `${window.location.origin}/${locale}/test/${slug}`;
    const fullText = showResult ? `${shareText}\n\n${shareUrl}` : shareUrl;
    
    navigator.clipboard.writeText(fullText);
    alert('링크가 복사되었습니다!');
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`${window.location.origin}/${locale}/test/${slug}`);
    const text = encodeURIComponent(title);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };
  
  const shareToTelegram = () => {
    const url = encodeURIComponent(`${window.location.origin}/${locale}/test/${slug}`);
    const text = encodeURIComponent(title);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };
  
  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`${window.location.origin}/${locale}/test/${slug}`);
    const text = encodeURIComponent(title);
    window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
  };
  
  const shareToWeChat = async () => {
    const url = `${window.location.origin}/${locale}/test/${slug}`;
    const shareText = title;
    
    if (navigator.share) {
      try { 
        await navigator.share({ 
          title: shareText, 
          text: shareText,
          url: url 
        }); 
        return; 
      } catch {}
    }
    try { 
      await navigator.clipboard.writeText(`${shareText}\n\n${url}`); 
      alert('링크가 복사되었습니다! WeChat에서 붙여넣기 하세요.'); 
    } catch {}
  };
  
  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }
    const currentUrl = `${window.location.origin}/${locale}/test/${slug}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    const shareTitle = showResult ? title : title;
    const shareDescription = showResult ? getViralShareMessage() : description;
    
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: shareDescription,
          imageUrl: thumbnailUrl,
          link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
        },
        buttons: [{ title: '테스트 하러 가기', link: { mobileWebUrl: currentUrl, webUrl: currentUrl } }],
      });
    } catch (e) {
      alert('카카오톡 공유 중 오류가 발생했습니다.');
    }
  };

  const handleShareResult = () => {
    if (!result) return;

    const shareText = getViralShareMessage();
    const shareUrl = `${window.location.origin}/${locale}/test/${slug}`;

    if (navigator.share) {
      navigator.share({
        title: shareText,
        text: shareText,
        url: shareUrl,
      }).catch(console.error);
    } else {
      // Web Share API를 지원하지 않는 경우 클립보드에 복사
      navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`).then(() => {
        alert('결과가 클립보드에 복사되었습니다!');
      }).catch(console.error);
    }
  };

  // 시작 화면
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || 'test_031_love_flavor.jpg')}
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
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>

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
                  <p className="font-bold text-gray-700">달콤? 새콤? 매콤? 아니면 쌉싸름?</p>
                  <p>사랑에도 맛이 있다면?</p>
                  <p>첫 만남의 설렘은 달콤한 사탕 같고, 작은 다툼은 새콤한 레몬 같고, 뜨거운 열정은 매운 고추 같고, 깊은 이해는 쌉싸름한 커피 같습니다.</p>
                  <p>당신의 연애는 어떤 맛일까요?</p>
                  <p className="whitespace-pre-line">당신만의 사랑 맛을 찾아보세요! 친구, 연인과 함께 비교하면 더 재미있어요 🍭</p>
                  <p>소요 시간 단 3분! 지금 바로 시작해보세요 💕</p>
                </>
              )}
              {locale === 'en' && (
                <>
                  <p className="font-bold text-gray-700">Sweet? Sour? Spicy? Or bitter?</p>
                  <p>What if love has flavors too?</p>
                  <p>The excitement of first meeting is like sweet candy, small arguments are like sour lemon, hot passion is like spicy pepper, and deep understanding is like bitter coffee.</p>
                  <p>What flavor is your love?</p>
                  <p className="whitespace-pre-line">Find your unique love flavor! It&apos;s more fun when you compare with friends and lovers 🍭</p>
                  <p>Only takes 3 minutes! Start now 💕</p>
                </>
              )}
              {locale === 'ja' && (
                <>
                  <p className="font-bold text-gray-700">甘い？酸っぱい？辛い？それとも苦い？</p>
                  <p>恋にも味があるとしたら？</p>
                  <p>初めての出会いのときめきは甘いキャンディのようで、小さな喧嘩は酸っぱいレモンのようで、熱い情熱は辛い胡椒のようで、深い理解は苦いコーヒーのようです。</p>
                  <p>あなたの恋はどんな味でしょうか？</p>
                  <p className="whitespace-pre-line">あなただけの恋の味を見つけてみてください！友達や恋人と比較するともっと楽しいです 🍭</p>
                  <p>所要時間わずか3分！今すぐ始めてみてください 💕</p>
                </>
              )}
              {locale === 'zh-CN' && (
                <>
                  <p className="font-bold text-gray-700">甜？酸？辣？还是苦？</p>
                  <p>如果爱情也有味道呢？</p>
                  <p>初次见面的心动像甜糖，小争吵像酸柠檬，热烈激情像辣胡椒，深刻理解像苦咖啡。</p>
                  <p>你的恋爱是什么味道？</p>
                  <p className="whitespace-pre-line">寻找属于你的爱情味道！和朋友、恋人一起比较更有趣 🍭</p>
                  <p>仅需3分钟！现在就开始吧 💕</p>
                </>
              )}
              {locale === 'zh-TW' && (
                <>
                  <p className="font-bold text-gray-700">甜？酸？辣？還是苦？</p>
                  <p>如果愛情也有味道呢？</p>
                  <p>初次見面的心動像甜糖，小爭吵像酸檸檬，熱烈激情像辣胡椒，深刻理解像苦咖啡。</p>
                  <p>你的戀愛是什麼味道？</p>
                  <p className="whitespace-pre-line">尋找屬於你的愛情味道！和朋友、戀人一起比較更有趣 🍭</p>
                  <p>僅需3分鐘！現在就開始吧 💕</p>
                </>
              )}
              {locale === 'id' && (
                <>
                  <p className="font-bold text-gray-700">Manis? Asam? Pedas? Atau pahit?</p>
                  <p>Bagaimana jika cinta juga memiliki rasa?</p>
                  <p>Kegembiraan pertemuan pertama seperti permen manis, pertengkaran kecil seperti lemon asam, gairah panas seperti cabai pedas, dan pemahaman mendalam seperti kopi pahit.</p>
                  <p>Rasa apa cinta Anda?</p>
                  <p className="whitespace-pre-line">Temukan rasa cinta unik Anda! Lebih menyenangkan jika dibandingkan dengan teman dan kekasih 🍭</p>
                  <p>Hanya butuh 3 menit! Mulai sekarang 💕</p>
                </>
              )}
              {locale === 'vi' && (
                <>
                  <p className="font-bold text-gray-700">Ngọt? Chua? Cay? Hay đắng?</p>
                  <p>Nếu tình yêu cũng có vị thì sao?</p>
                  <p>Sự hồi hộp của lần gặp đầu tiên như kẹo ngọt, những cuộc cãi vã nhỏ như chanh chua, đam mê nồng nàn như ớt cay, và hiểu biết sâu sắc như cà phê đắng.</p>
                  <p>Tình yêu của bạn có vị gì?</p>
                  <p className="whitespace-pre-line">Hãy tìm vị tình yêu độc đáo của bạn! Sẽ thú vị hơn khi so sánh với bạn bè và người yêu 🍭</p>
                  <p>Chỉ mất 3 phút! Bắt đầu ngay bây giờ 💕</p>
                </>
              )}
            </div>

            <div className="flex justify-center mb-4">
              <button onClick={handleStartTest} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                {t('mbti.startTest')}
              </button>
            </div>

            <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
              {t('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, (locale as any)) })}
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
              <h2 className="text-lg font-bold text-gray-800 mb-4">{t('mbti.shareWithFriends')}</h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" /></button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTests') || '유사한 다른 테스트'}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {similarTestsState.map((test: any) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw" />
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
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">{test.title}</h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, (locale as any))}</span>
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
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (로딩 스피너 상단)" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">{t('mbti.loadingResults')}</p>
        </div>
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (로딩 스피너 하단)" />
        </div>
      </div>
    );
  }

  // 결과 팝업
  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {t('mbti.testCompleted')}</h2>
          
          
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
          <button onClick={handleShowResult} className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg">{t('mbti.viewAnalysisResults')}</button>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (showResult && result) {
    const resultTitle = result.title[locale as keyof typeof result.title] || result.title.ko;
    const resultDescription = result.description[locale as keyof typeof result.description] || result.description.ko;
    const resultPros = result.pros;
    const resultCons = result.cons;
    const resultAdvice = result.advice[locale as keyof typeof result.advice] || result.advice.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t('mbti.yourResult')}</h2>
              <div className="text-6xl mb-3">{result.emoji}</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{resultTitle}</h1>
              <p className="text-base text-gray-600 leading-relaxed">{resultDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">✅ {t('mbti.pros')}</h3>
                <div className="flex flex-wrap gap-2">
                  {resultPros.map((pro: any, index: number) => (     
                    <span key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm">{typeof pro === 'string' ? pro : (pro[locale] || pro.ko)}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-base font-bold text-gray-800 mb-3">⚠️ {t('mbti.cons')}</h3>
                <div className="flex flex-wrap gap-2">
                  {resultCons.map((con: any, index: number) => (
                    <span key={index} className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 shadow-sm">{typeof con === 'string' ? con : (con[locale] || con.ko)}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-3">💡 {t('mbti.advice')}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{resultAdvice}</p>
            </div>

            {result.compatibility && (
              <>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {result.compatibility.best && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">💖 {t('conflictTest.result.bestMatch')}</h3>
                      {Array.isArray(result.compatibility.best) && (
                        <div className="space-y-2">
                          {result.compatibility.best.map((type: string) => {
                            const partner = results.find((r: any) => r.type === type);
                            if (!partner) return null;
                            const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                            const compatibilityDesc = getCompatibilityDescription(result.type, type);
                            return (
                              <div key={type} className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-3">
                                <div className="flex items-center gap-2.5 mb-1">
                                  <span className="text-xl">{partner.emoji}</span>
                                  <span className="text-sm font-medium text-gray-800">{partnerTitle}</span>
                                </div>
                                {compatibilityDesc && (<p className="text-xs text-gray-600 ml-8">{compatibilityDesc}</p>)}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {result.compatibility.good && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">😊 {t('conflictTest.result.goodMatch')}</h3>
                      {Array.isArray(result.compatibility.good) && (
                        <div className="space-y-2">
                          {result.compatibility.good.map((type: string) => {
                            const partner = results.find((r: any) => r.type === type);
                            if (!partner) return null;
                            const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                            const compatibilityDesc = getCompatibilityDescription(result.type, type);
                            return (
                              <div key={type} className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3">
                                <div className="flex items-center gap-2.5 mb-1">
                                  <span className="text-xl">{partner.emoji}</span>
                                  <span className="text-sm font-medium text-gray-800">{partnerTitle}</span>
                                </div>
                                {compatibilityDesc && (<p className="text-xs text-gray-600 ml-8">{compatibilityDesc}</p>)}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  {result.compatibility.careful && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">⚠️ {t('conflictTest.result.carefulMatch')}</h3>
                      {Array.isArray(result.compatibility.careful) && (
                        <div className="space-y-2">
                          {result.compatibility.careful.map((type: string) => {
                            const partner = results.find((r: any) => r.type === type);
                            if (!partner) return null;
                            const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                            const compatibilityDesc = getCompatibilityDescription(result.type, type);
                            return (
                              <div key={type} className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3">
                                <div className="flex items-center gap-2.5 mb-1">
                                  <span className="text-xl">{partner.emoji}</span>
                                  <span className="text-sm font-medium text-gray-800">{partnerTitle}</span>
                                </div>
                                {compatibilityDesc && (<p className="text-xs text-gray-600 ml-8">{compatibilityDesc}</p>)}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {result.compatibility.difficult && (
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-3">❌ {t('conflictTest.result.difficultMatch')}</h3>
                      {Array.isArray(result.compatibility.difficult) && (
                        <div className="space-y-2">
                          {result.compatibility.difficult.map(type => {
                            const partner = results.find(r => r.type === type);
                            if (!partner) return null;
                            const partnerTitle = partner.title[locale as keyof typeof partner.title] || partner.title.ko;
                            const compatibilityDesc = getCompatibilityDescription(result.type, type);
                            return (
                              <div key={type} className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-3">
                                <div className="flex items-center gap-2.5 mb-1">
                                  <span className="text-xl">{partner.emoji}</span>
                                  <span className="text-sm font-medium text-gray-800">{partnerTitle}</span>
                                </div>
                                {compatibilityDesc && (<p className="text-xs text-gray-600 ml-8">{compatibilityDesc}</p>)}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* 결과 공유하기 버튼 */}
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

            <div className="mt-8 mb-6 px-4">
              <div className="my-6 px-4">
                <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (결과-다시하기 사이)" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button onClick={handleRetake} className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md">{t('mbti.retakeTest')}</button>
              <Link href={`/${locale}`} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md">{t('mbti.otherTests')}</Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{t('mbti.shareResultWithFriends')}</h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" /></button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTestsTop5') || '🎯 유사한 다른 테스트 추천 톱5'}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw" />
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
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">{test.title}</h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, (locale as any))}</span>
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
            <span className="text-sm font-medium text-gray-600">{t('mbti.progress')}</span>
            <span className="text-sm font-bold text-purple-600">{currentQuestion + 1} / {shuffledQuestions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed px-4">{questionText}</h2>
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
                <button key={index} onClick={() => handleAnswer(option.scores)} className={`w-full bg-gradient-to-r ${colors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-102 text-left`}>
                  <div className="flex items-center">
                    <div className={`w-7 h-7 ${bgColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}>{label}</div>
                    <span className="text-base">{optionText}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 px-4">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (테스트 진행 마지막 답변 밑)" />
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('mbti.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt="링크 복사" width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt="카카오톡" width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt="텔레그램" width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt="위챗" width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt="라인" width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt="왓츠앱" width={46} height={46} className="rounded-lg" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


