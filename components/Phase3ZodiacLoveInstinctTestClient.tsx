'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import {
  getPhase3ZodiacLoveInstinct,
  phase3ZodiacLoveInstincts,
  zodiacLoveText,
  type Phase3ZodiacLoveInstinct,
} from '@/lib/phase3ZodiacLoveInstinctData';

interface Phase3ZodiacLoveInstinctTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
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

type RecommendedTest = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  playCount: number;
  badgeType?: 'popular' | 'hot' | null;
};

function shuffleZodiacs(list: Phase3ZodiacLoveInstinct[]) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Phase3ZodiacLoveInstinctTestClient({
  locale,
  slug,
  title,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Phase3ZodiacLoveInstinctTestClientProps) {
  const t = useTranslations('phase3ZodiacLoveInstinctTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [selecting, setSelecting] = useState(false);
  const [shuffledSigns, setShuffledSigns] = useState<Phase3ZodiacLoveInstinct[]>([]);
  const [resultId, setResultId] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  const [showResultAd, setShowResultAd] = useState(false);
  const [showPopularAd, setShowPopularAd] = useState(false);
  const resultAdRef = useRef<HTMLDivElement>(null);
  const popularAdRef = useRef<HTMLDivElement>(null);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({
    slug,
    locale,
    similarTags: '연애테스트,별자리',
  });

  useEffect(() => {
    if (showResult) return;
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          document.querySelectorAll('.adsbygoogle').forEach((el) => {
            const status = (el as HTMLElement).getAttribute('data-adsbygoogle-status');
            if (!status || status === '') safeLoadAdSense();
          });
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [started, selecting, showResult, showLoadingSpinner, showResultPopup]);

  useEffect(() => {
    if (!showResult) return;
    const nearView = (node: HTMLDivElement | null) => {
      if (!node) return false;
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewH + 240 && rect.bottom > -80;
    };
    const reveal = () => {
      if (nearView(resultAdRef.current)) setShowResultAd(true);
      if (nearView(popularAdRef.current)) setShowPopularAd(true);
    };
    reveal();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === resultAdRef.current) setShowResultAd(true);
          if (entry.target === popularAdRef.current) setShowPopularAd(true);
        });
      },
      { rootMargin: '240px 0px' }
    );
    if (resultAdRef.current) observer.observe(resultAdRef.current);
    if (popularAdRef.current) observer.observe(popularAdRef.current);
    window.addEventListener('scroll', reveal, true);
    window.addEventListener('resize', reveal);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', reveal, true);
      window.removeEventListener('resize', reveal);
    };
  }, [showResult, popularTestsState.length]);

  useEffect(() => {
    if (!showLoadingSpinner) return;
    const timer = setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, [showLoadingSpinner]);

  const pageUrl = () => `https://myquizoasis.com${window.location.pathname}`;

  const getShareLine = () => {
    if (!resultId) return '';
    return zodiacLoveText(getPhase3ZodiacLoveInstinct(resultId).shareLine, locale);
  };

  const handleStartTest = () => {
    setShuffledSigns(shuffleZodiacs(phase3ZodiacLoveInstincts));
    setDisplayPlayCount((prev) => prev + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    setStarted(true);
    setSelecting(true);
    setResultId(null);
    setShowResult(false);
    window.scrollTo(0, 0);
  };

  const handleSelectSign = (id: number) => {
    setResultId(id);
    setSelecting(false);
    setShowLoadingSpinner(true);
    window.scrollTo(0, 0);
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setStarted(false);
    setSelecting(false);
    setShuffledSigns([]);
    setResultId(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setShowResultAd(false);
    setShowPopularAd(false);
  };

  const downloadCard = async (ratio: '1:1' | '9:16') => {
    if (!resultId) return;
    const card = getPhase3ZodiacLoveInstinct(resultId);
    const width = ratio === '1:1' ? 1080 : 1080;
    const height = ratio === '1:1' ? 1080 : 1920;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#fdf2f8');
    gradient.addColorStop(0.5, '#ede9fe');
    gradient.addColorStop(1, '#e0f2fe');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    const pad = Math.round(width * 0.08);
    const boxH = Math.round(height * 0.62);
    const boxY = Math.round((height - boxH) / 2);
    const radius = 48;
    ctx.beginPath();
    ctx.moveTo(pad + radius, boxY);
    ctx.arcTo(width - pad, boxY, width - pad, boxY + boxH, radius);
    ctx.arcTo(width - pad, boxY + boxH, pad, boxY + boxH, radius);
    ctx.arcTo(pad, boxY + boxH, pad, boxY, radius);
    ctx.arcTo(pad, boxY, width - pad, boxY, radius);
    ctx.closePath();
    ctx.fill();

    const name = zodiacLoveText(card.name, locale);
    const phrase = zodiacLoveText(card.cardPhrase, locale);
    const centerX = width / 2;
    let y = boxY + Math.round(boxH * 0.22);

    ctx.font = `${Math.round(width * 0.16)}px serif`;
    ctx.textAlign = 'center';
    ctx.fillText(card.symbol, centerX, y);
    y += Math.round(width * 0.14);

    ctx.fillStyle = '#1f2937';
    ctx.font = `bold ${Math.round(width * 0.07)}px sans-serif`;
    ctx.fillText(`${card.symbol} ${name}`, centerX, y);
    y += Math.round(width * 0.1);

    ctx.fillStyle = '#7e22ce';
    ctx.font = `bold ${Math.round(width * 0.045)}px sans-serif`;
    const maxWidth = width - pad * 2 - 40;
    const words = phrase.split(' ');
    let line = '';
    const lines: string[] = [];
    words.forEach((word) => {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });
    if (line) lines.push(line);
    if (lines.length === 0) lines.push(phrase);
    lines.forEach((textLine) => {
      ctx.fillText(textLine, centerX, y);
      y += Math.round(width * 0.06);
    });

    ctx.fillStyle = '#9ca3af';
    ctx.font = `${Math.round(width * 0.035)}px sans-serif`;
    ctx.fillText('QuizOasis', centerX, boxY + boxH - Math.round(width * 0.06));

    const link = document.createElement('a');
    link.download = `zodiac-love-${card.id}-${ratio === '1:1' ? 'square' : 'story'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleShareResult = async () => {
    if (!resultId) return;
    const shareText = `${t('shareMessages.default', { type: getShareLine() })}\n\n${pageUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') console.error('공유 실패:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t('alerts.resultCopied'));
      } catch {
        alert(t('alerts.shareFailed'));
      }
    }
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(pageUrl());
    const shareText = resultId
      ? encodeURIComponent(t('shareMessages.line', { type: getShareLine() }))
      : encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${shareText}`, '_blank');
  };

  const shareToWeChat = async () => {
    trackShareEvent('wechat', getShareContentType(started, showResult), slug);
    const url = pageUrl();
    const shareText = resultId
      ? `${t('shareMessages.wechat', { type: getShareLine() })}\n\n${url}`
      : `${t('shareMessages.startWechat')}\n\n${url}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      alert(t('alerts.wechatCopy'));
    } catch {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(started, showResult), slug);
    const url = pageUrl();
    const shareText = resultId
      ? encodeURIComponent(`${t('shareMessages.whatsapp', { type: getShareLine() })}\n\n${url}`)
      : encodeURIComponent(`${t('shareMessages.startWhatsapp')}\n\n${url}`);
    window.open(`https://wa.me/?text=${shareText}`, '_blank');
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(started, showResult), slug);
    const currentUrl = pageUrl();
    const shareDescription = resultId
      ? t('shareMessages.kakao', { type: getShareLine() })
      : t('shareMessages.startKakao');
    if (typeof window === 'undefined' || !(window as any).Kakao) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    const Kakao = (window as any).Kakao;
    if (!Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    try {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: shareDescription,
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: currentUrl, webUrl: currentUrl } }],
      });
    } catch {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(started, showResult), slug);
    const url = encodeURIComponent(pageUrl());
    const shareText = resultId
      ? encodeURIComponent(t('shareMessages.telegram', { type: getShareLine() }))
      : encodeURIComponent(t('shareMessages.startTelegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${shareText}`, '_blank');
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(started, showResult), slug);
    navigator.clipboard.writeText(pageUrl());
    alert(t('alerts.linkCopied'));
  };

  const renderShareButtons = () => (
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
  );

  const renderTestCard = (test: RecommendedTest) => (
    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={getThumbnailUrl(test.thumbnail)}
            alt={test.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
          {latestTestSlugs.includes(test.slug) && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
          )}
          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
              {t('ui.popularBadge')}
            </div>
          )}
          {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-end gap-3">
            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">{test.title}</h3>
            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
              <Play size={14} />
              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  const renderSignGrid = (onPick: (id: number) => void, selectedId?: number | null) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {(shuffledSigns.length ? shuffledSigns : phase3ZodiacLoveInstincts).map((sign) => {
        const selected = selectedId === sign.id;
        return (
          <button
            key={sign.id}
            onClick={() => onPick(sign.id)}
            className={`rounded-xl border-2 p-3 text-left transition-all ${
              selected
                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-md'
                : 'border-purple-100 bg-white hover:border-purple-300 hover:shadow'
            }`}
          >
            <div className="text-2xl mb-1">
              {sign.symbol} {sign.emoji}
            </div>
            <div className="font-bold text-gray-800 text-sm">{zodiacLoveText(sign.name, locale)}</div>
            <div className="text-xs text-gray-500 mt-1">{zodiacLoveText(sign.dateRange, locale)}</div>
          </button>
        );
      })}
    </div>
  );

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
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            {isLatestTest && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                {t('ui.popularBadge')}
              </div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
            )}
          </div>

          <div className="px-4">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>

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
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('ui.startTest')}
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
              <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
              {renderShareButtons()}
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{similarTestsState.map((test) => renderTestCard(test))}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full animate-spin" />
          <p className="mt-4 text-lg text-gray-700">{t('ui.analyzing')}</p>
        </div>
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

  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {t('ui.testCompleted')}</h2>
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
            {t('ui.viewResults')}
          </button>
        </div>
      </div>
    );
  }

  if (selecting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{t('ui.selectTitle')}</h2>
          <p className="text-sm text-gray-600 text-center mb-2">{t('ui.selectGuide')}</p>
          <p className="text-xs text-gray-500 text-center mb-6">{t('ui.boundaryNote')}</p>
          {renderSignGrid(handleSelectSign)}
          <div className="mt-8">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>
        </div>
      </div>
    );
  }

  if (showResult && resultId) {
    const card = getPhase3ZodiacLoveInstinct(resultId);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t('ui.yourResult')}</h2>
            <div className="text-6xl mb-2">{card.symbol}</div>
            <p className="text-4xl mb-2">{card.emoji}</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {zodiacLoveText(card.name, locale)}
            </h1>
            <p className="text-sm text-gray-500 mb-3">{zodiacLoveText(card.dateRange, locale)}</p>
            <p className="text-lg font-semibold text-purple-700 mb-2">
              {zodiacLoveText(card.shortTitle, locale)} {card.symbol}
            </p>
            <p className="text-base text-gray-700 leading-relaxed">{zodiacLoveText(card.instinct, locale)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💕 {t('ui.loveStyle')}</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center">{zodiacLoveText(card.loveStyle, locale)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">✨ {t('ui.charm')}</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center">{zodiacLoveText(card.charm, locale)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">⚠️ {t('ui.caution')}</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center">{zodiacLoveText(card.caution, locale)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">💬 {t('ui.talkTip')}</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center">{zodiacLoveText(card.talkTip, locale)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-left">📝 {t('ui.oneLiner')}</h3>
            <p className="text-sm text-gray-700 leading-relaxed italic text-center">
              &ldquo;{zodiacLoveText(card.oneLiner, locale)}&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-3 text-left">🖼️ {t('ui.cardTitle')}</h3>
            <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-5 text-center mb-3">
              <p className="text-4xl mb-2">{card.symbol}</p>
              <p className="text-lg font-bold text-gray-800 mb-2">
                {card.symbol} {zodiacLoveText(card.name, locale)}
              </p>
              <p className="text-sm text-purple-700 font-semibold">&ldquo;{zodiacLoveText(card.cardPhrase, locale)}&rdquo;</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => downloadCard('1:1')} className="flex-1 bg-rose-500 text-white font-bold py-3 rounded-xl">
                {t('ui.cardSquare')}
              </button>
              <button onClick={() => downloadCard('9:16')} className="flex-1 bg-violet-600 text-white font-bold py-3 rounded-xl">
                {t('ui.cardStory')}
              </button>
            </div>
          </div>

          <div className="mt-8 mb-6 px-4">
            <button
              onClick={handleShareResult}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
            >
              {t('ui.shareResult')}
            </button>
          </div>

          <div ref={resultAdRef} className="my-6 px-4" style={{ minHeight: 250 }}>
            {showResultAd && (
              <AdSensePlaceholder
                slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN}
                style={{ width: '100%', height: '250px' }}
                className="mx-auto"
                label={t('ui.adsenseTitle')}
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 px-4">
            <button
              onClick={handleRetake}
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
            >
              {t('ui.retake')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
            >
              {t('ui.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
            {renderShareButtons()}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{tGlobal('recommendations.similarTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((test) => renderTestCard(test))}
              </div>
            </div>
          )}

          {popularTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <div ref={popularAdRef} className="mb-6 px-4 w-full" style={{ minHeight: 250 }}>
                {showPopularAd && (
                  <AdSensePlaceholder
                    slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                    style={{ width: '100%', height: '250px' }}
                    className="mx-auto w-full"
                    label={t('ui.adsenseTitle')}
                  />
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">{tGlobal('recommendations.popularTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {popularTestsState.map((test) => renderTestCard(test))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
