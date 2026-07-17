'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Phase3FriendSeesMyMbtiQuestion,
  Phase3FriendSeesMyMbtiOption,
  Phase3FriendSeesMyMbtiPayload,
  FriendMbtiResult,
  MbtiCompareResult,
  encodePayload,
  decodePayload,
  isValidSelfMbti,
  calculateFriendMbti,
  compareMbti,
  getLetterDescription,
  getMatchMessage,
  getMismatchAnalysis,
} from '@/lib/phase3FriendSeesMyMbtiData';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount, prefetchStorageImages, extractImageFilenamesFromQuestions } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { trackShareEvent } from '@/lib/analytics/trackShare';

type Phase = 'creatorIntro' | 'creatorDone' | 'friendIntro' | 'friendRun';

interface Props {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3FriendSeesMyMbtiQuestion[];
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

const EI_OPTS = ['E', 'I'] as const;
const SN_OPTS = ['S', 'N'] as const;
const TF_OPTS = ['T', 'F'] as const;
const JP_OPTS = ['J', 'P'] as const;

function Phase3FriendSeesMyMbtiTestClientInner({
  locale,
  slug,
  title,
  description: _description,
  questions,
  thumbnail,
  playCount = 0,
  similarTests = [],
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3FriendSeesMyMbtiTest');
  const tGlobal = useTranslations();
  const tBadges = useTranslations('badges');
  const searchParams = useSearchParams();
  const kRaw = searchParams.get('k');
  const challengePayload = useMemo(
    () => (kRaw ? decodePayload(decodeURIComponent(kRaw)) : null),
    [kRaw]
  );

  const [phase, setPhase] = useState<Phase>(() => (kRaw ? 'friendIntro' : 'creatorIntro'));
  const [friendPayload, setFriendPayload] = useState<Phase3FriendSeesMyMbtiPayload | null>(
    () => challengePayload
  );
  const [payloadError, setPayloadError] = useState(() => Boolean(kRaw) && !challengePayload);
  const [creatorName, setCreatorName] = useState('');
  const [mbtiE, setMbtiE] = useState<'E' | 'I'>('E');
  const [mbtiS, setMbtiS] = useState<'S' | 'N'>('N');
  const [mbtiT, setMbtiT] = useState<'T' | 'F'>('F');
  const [mbtiJ, setMbtiJ] = useState<'J' | 'P'>('P');
  const [shareUrl, setShareUrl] = useState('');

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [friendResult, setFriendResult] = useState<FriendMbtiResult | null>(null);
  const [compareResult, setCompareResult] = useState<MbtiCompareResult | null>(null);

  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3FriendSeesMyMbtiQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Phase3FriendSeesMyMbtiOption[]>>({});

  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [friendReveal, setFriendReveal] = useState(false);
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);

  const selfMbti = `${mbtiE}${mbtiS}${mbtiT}${mbtiJ}`;
  const hostName =
    phase === 'friendIntro' || phase === 'friendRun' || friendReveal || showLoadingSpinner || showResultPopup
      ? friendPayload?.n || t('defaultHostName')
      : creatorName.trim() || t('defaultHostName');

  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    const qk = currentQuestion;
    if (shuffledOptionsMap[qk] || !shuffledQuestions[qk]) return;
    const optionsCopy = [...shuffledQuestions[qk].options];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }
    setShuffledOptionsMap((prev) => ({ ...prev, [qk]: optionsCopy }));
  }, [currentQuestion, started, shuffledQuestions, shuffledOptionsMap]);

  useEffect(() => {
    if (showResultPopup || friendReveal) return;
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          document.querySelectorAll('.adsbygoogle').forEach((el) => {
            const status = (el as HTMLElement).getAttribute('data-adsbygoogle-status');
            if (!status || status === '') {
              safeLoadAdSense();
            }
          });
        }
      } catch {
        /* noop */
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [started, showResultPopup, friendReveal, phase]);

  useEffect(() => {
    if (!showLoadingSpinner || friendReveal) return;
    const timer = setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [showLoadingSpinner, friendReveal]);

  const shuffleQuestions = (list: Phase3FriendSeesMyMbtiQuestion[]) => {
    const withIdx = list.map((q, idx) => ({ q, originalIndex: idx }));
    const shuffled = [...withIdx];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
      questions: shuffled.map((x) => x.q),
      originalIndices: shuffled.map((x) => x.originalIndex),
    };
  };

  const finishCreatorSetup = () => {
    const name = creatorName.trim();
    if (name.length < 1) {
      alert(t('alerts.nameRequired'));
      return;
    }
    if (!isValidSelfMbti(selfMbti)) {
      alert(t('alerts.mbtiRequired'));
      return;
    }
    const payload: Phase3FriendSeesMyMbtiPayload = { n: name, m: selfMbti };
    const encoded = encodePayload(payload);
    const base = typeof window !== 'undefined' ? window.location.origin : '';
    const path = `/${locale}/test/${slug}`;
    const url = `${base}${path}?k=${encodeURIComponent(encoded)}`;
    setShareUrl(url);
    setFriendPayload(payload);
    setPhase('creatorDone');
    setDisplayPlayCount((p) => p + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    window.scrollTo(0, 0);
  };

  const startFriend = () => {
    if (!friendPayload || payloadError) return;
    const { questions: sq, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(sq);
    setOriginalQuestionIndices(originalIndices);
    setAnswers({});
    setCurrentQuestion(0);
    setShuffledOptionsMap({});
    setPhase('friendRun');
    setStarted(true);
    setDisplayPlayCount((p) => p + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    prefetchStorageImages(extractImageFilenamesFromQuestions(questions));
    window.scrollTo(0, 0);
  };

  const handleAnswer = (score: number) => {
    const origQ = originalQuestionIndices[currentQuestion];
    const newAnswers = { ...answers, [origQ]: score };

    if (currentQuestion < shuffledQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion((c) => c + 1);
      window.scrollTo(0, 0);
      return;
    }

    setAnswers(newAnswers);
    if (phase === 'friendRun' && friendPayload) {
      const answersArray = questions.map((_, idx) => newAnswers[idx] ?? 0);
      const mbti = calculateFriendMbti(answersArray);
      const cmp = compareMbti(friendPayload.m, mbti.letters);
      setFriendResult(mbti);
      setCompareResult(cmp);
      setStarted(false);
      setShowLoadingSpinner(true);
    }
  };

  const handleShowFriendResult = () => {
    setShowResultPopup(false);
    setFriendReveal(true);
    window.scrollTo(0, 0);
  };

  const copyText = (text: string, alertKey: 'linkCopied' | 'resultCopied') => {
    navigator.clipboard.writeText(text).then(
      () => alert(t(`alerts.${alertKey}`)),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const siteBase = 'https://myquizoasis.com';

  const shareToKakao = (url: string, desc: string) => {
    if (typeof window === 'undefined' || !(window as any).Kakao?.isInitialized?.()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    try {
      (window as any).Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: desc,
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: url, webUrl: url } }],
      });
    } catch {
      alert(t('alerts.kakaoError'));
    }
  };

  const resetCreator = () => {
    setPhase('creatorIntro');
    setCreatorName('');
    setMbtiE('E');
    setMbtiS('N');
    setMbtiT('F');
    setMbtiJ('P');
    setShareUrl('');
    setStarted(false);
    setAnswers({});
    setShuffledQuestions([]);
    setShuffledOptionsMap({});
    setFriendResult(null);
    setCompareResult(null);
    setHasIncrementedPlayCount(false);
  };

  const getFriendSharePath = () =>
    typeof window !== 'undefined'
      ? `https://myquizoasis.com${window.location.pathname}${window.location.search}`
      : `${siteBase}/${locale}/test/${slug}${kRaw ? `?k=${encodeURIComponent(kRaw)}` : ''}`;

  const friendResultShareLine = () => {
    if (!friendResult || !friendPayload || !compareResult) return '';
    if (compareResult.matchCount === 4) {
      return t('shareMessages.resultMatch');
    }
    return t('shareMessages.resultMismatch', {
      self: friendPayload.m,
      friend: friendResult.display,
    });
  };

  const handleShareResult = async () => {
    if (!friendResult || !friendPayload) return;
    const shareText = `${friendResultShareLine()}\n\n${t('shareMessages.inviteOthers')}\n\n${getFriendSharePath()}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error(error);
        }
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

  const copyLink = () => {
    trackShareEvent('link copy', 'quiz_result', slug);
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(getFriendSharePath()).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const shareToKakaoResult = () => {
    trackShareEvent('kakao', 'quiz_result', slug);
    if (typeof window === 'undefined' || !(window as any).Kakao?.isInitialized?.()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    try {
      (window as any).Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: friendResultShareLine(),
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: {
            mobileWebUrl: getFriendSharePath(),
            webUrl: getFriendSharePath(),
          },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: getFriendSharePath(), webUrl: getFriendSharePath() } }],
      });
    } catch {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegramResult = () => {
    trackShareEvent('telegram', 'quiz_result', slug);
    const url = encodeURIComponent(getFriendSharePath());
    const text = encodeURIComponent(friendResultShareLine());
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChatResult = async () => {
    trackShareEvent('wechat', 'quiz_result', slug);
    const url = getFriendSharePath();
    const shareText = `${friendResultShareLine()}\n\n${url}`;
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

  const shareToWhatsAppResult = () => {
    trackShareEvent('whatsapp', 'quiz_result', slug);
    const url = encodeURIComponent(getFriendSharePath());
    const text = encodeURIComponent(friendResultShareLine());
    window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
  };

  const shareToLineResult = () => {
    trackShareEvent('line', 'quiz_result', slug);
    const url = encodeURIComponent(getFriendSharePath());
    const text = encodeURIComponent(friendResultShareLine());
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const progressShareUrl = () =>
    typeof window !== 'undefined'
      ? `https://myquizoasis.com${window.location.pathname}${window.location.search}`
      : '';

  const shareProgressToKakao = () => {
    trackShareEvent('kakao', 'quiz_ing', slug);
    if (typeof window === 'undefined' || !(window as any).Kakao?.isInitialized?.()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    const u = progressShareUrl();
    try {
      (window as any).Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: t('shareMessages.startKakao'),
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: u, webUrl: u },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: u, webUrl: u } }],
      });
    } catch {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareProgressToTelegram = () => {
    trackShareEvent('telegram', 'quiz_ing', slug);
    const url = encodeURIComponent(progressShareUrl());
    const text = encodeURIComponent(t('shareMessages.startTelegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareProgressToWeChat = async () => {
    trackShareEvent('wechat', 'quiz_ing', slug);
    const u = progressShareUrl();
    const shareText = `${t('shareMessages.startWechat')}\n\n${u}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(u);
      alert(t('alerts.wechatCopy'));
    } catch {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareProgressToWhatsApp = () => {
    trackShareEvent('whatsapp', 'quiz_ing', slug);
    const url = encodeURIComponent(progressShareUrl());
    const text = encodeURIComponent(t('shareMessages.startWhatsapp'));
    window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
  };

  const shareProgressToLine = () => {
    trackShareEvent('line', 'quiz_ing', slug);
    const url = encodeURIComponent(progressShareUrl());
    const text = encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const copyProgressLink = () => {
    trackShareEvent('link copy', 'quiz_ing', slug);
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(progressShareUrl()).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const handleFriendRetake = () => {
    if (!friendPayload) return;
    setFriendReveal(false);
    setFriendResult(null);
    setCompareResult(null);
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setAnswers({});
    setCurrentQuestion(0);
    setShuffledOptionsMap({});
    setHasIncrementedPlayCount(false);
    startFriend();
  };

  const hostSummaryText = useMemo(() => {
    if (!friendPayload || !friendResult || !compareResult) return '';
    return t('hostNotifyBody', {
      name: friendPayload.n,
      self: friendPayload.m,
      friend: friendResult.display,
      match: compareResult.matchCount,
    });
  }, [friendPayload, friendResult, compareResult, t]);

  const selectClass =
    'border border-gray-300 rounded-lg px-3 py-2 text-center font-bold text-lg bg-white min-w-[4.5rem]';

  if (phase === 'creatorIntro' && !kRaw) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4">
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
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('new')}</div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('popular')}</div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('hot')}</div>
            )}
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
          <div className="my-6">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>
          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-3">
            <p className="font-bold text-gray-700">{t('creatorStart.line1')}</p>
            <p>{t('creatorStart.line2')}</p>
            <p>{t('creatorStart.line3')}</p>
            <p className="whitespace-pre-line">{t('creatorStart.line4')}</p>
            <div className="mt-6 pt-5 border-t border-gray-200 text-left max-w-xl mx-auto space-y-2.5 text-sm leading-relaxed">
              <p className="font-bold text-gray-800 text-center sm:text-left">{t('creatorStart.howToTitle')}</p>
              <p>{t('creatorStart.howToStep1')}</p>
              <p>{t('creatorStart.howToStep2')}</p>
              <p>{t('creatorStart.howToStep3')}</p>
              <p>{t('creatorStart.howToStep4')}</p>
            </div>
          </div>
          <label className="block text-center mb-2 font-medium text-gray-700">{t('ui.nameLabel')}</label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            placeholder={t('creatorNamePlaceholder')}
            className="w-full max-w-md mx-auto block border border-gray-300 rounded-lg px-4 py-3 mb-6 text-center"
            maxLength={20}
          />
          <label className="block text-center mb-2 font-medium text-gray-700">{t('ui.selfMbtiLabel')}</label>
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <select className={selectClass} value={mbtiE} onChange={(e) => setMbtiE(e.target.value as 'E' | 'I')} aria-label="E/I">
              {EI_OPTS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <select className={selectClass} value={mbtiS} onChange={(e) => setMbtiS(e.target.value as 'S' | 'N')} aria-label="S/N">
              {SN_OPTS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <select className={selectClass} value={mbtiT} onChange={(e) => setMbtiT(e.target.value as 'T' | 'F')} aria-label="T/F">
              {TF_OPTS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <select className={selectClass} value={mbtiJ} onChange={(e) => setMbtiJ(e.target.value as 'J' | 'P')} aria-label="J/P">
              {JP_OPTS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <p className="text-center text-sm text-gray-500 mb-4">{t('ui.selfMbtiPreview', { mbti: selfMbti })}</p>
          <div className="flex justify-center mb-4">
            <button
              type="button"
              onClick={finishCreatorSetup}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            >
              {t('ui.startTest')}
            </button>
          </div>
          <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
            {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
          </p>
          <div className="max-w-[680px] mx-auto mb-6 flex justify-center">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto w-full"
            />
          </div>
          {similarTestsState.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('ui.similarTests')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {similarTestsState.map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" sizes="400px" />
                      </div>
                      <div className="p-3 font-semibold line-clamp-2">{test.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (phase === 'friendIntro') {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="relative w-full overflow-hidden mb-3 rounded-xl" style={{ aspectRatio: '680/384' }}>
            <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" sizes="100vw" priority />
            {isLatestTest && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('new')}</div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('popular')}</div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">{tBadges('hot')}</div>
            )}
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
          <div className="my-6">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.START_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>
          {payloadError || !friendPayload ? (
            <div className="text-center">
              <p className="text-red-600 mb-4">{t('alerts.invalidLink')}</p>
              <Link href={`/${locale}/test/${slug}`} className="text-blue-600 underline">
                {t('ui.goToTest')}
              </Link>
            </div>
          ) : (
            <>
              <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-3">
                <p className="font-bold text-gray-800 text-lg">{t('friendStart.title', { name: friendPayload.n })}</p>
                <p className="text-gray-700">{t('friendStart.line1')}</p>
                <p>{t('friendStart.line2')}</p>
                <p>{t('friendStart.line3')}</p>
                <p className="whitespace-pre-line">{t('friendStart.line4')}</p>
              </div>
              <div className="flex justify-center mb-8">
                <button
                  type="button"
                  onClick={startFriend}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-full shadow-lg"
                >
                  {t('ui.friendStartCta')}
                </button>
              </div>
              {similarTestsState.length > 0 && (
                <div className="mb-8 pb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 text-left">{t('ui.similarTests')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {similarTestsState.map((testItem) => (
                      <Link key={testItem.id} href={`/${locale}/test/${testItem.slug}`} className="block group">
                        <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                          <div className="relative aspect-video">
                            <Image
                              src={getThumbnailUrl(testItem.thumbnail)}
                              alt={testItem.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-end gap-3">
                              <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                                {testItem.title}
                              </h3>
                              <div className="font-semibold text-gray-800 flex items-center gap-1.5 text-sm flex-shrink-0">
                                <Play size={14} />
                                <span>{formatPlayCount(testItem.playCount, locale as Locale)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  if (phase === 'creatorDone' && shareUrl) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 px-4 py-10">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">{t('creatorDone.title')}</h2>
          <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{t('creatorDone.hint')}</p>
          <p className="text-sm text-violet-700 font-semibold mb-3">
            {t('creatorDone.selfPreview', { name: creatorName.trim(), mbti: selfMbti })}
          </p>
          <textarea readOnly className="w-full border rounded-lg p-3 text-sm mb-4 h-24" value={shareUrl} />
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="bg-gray-800 text-white py-3 rounded-xl font-bold"
              onClick={() => {
                trackShareEvent('link copy', 'quiz_intro', slug);
                copyText(shareUrl, 'linkCopied');
              }}
            >
              {t('ui.copyChallengeLink')}
            </button>
            <button
              type="button"
              className="bg-yellow-400 text-gray-900 py-3 rounded-xl font-bold"
              onClick={() => {
                trackShareEvent('kakao', 'quiz_intro', slug);
                shareToKakao(shareUrl, t('shareMessages.creatorKakao'));
              }}
            >
              {t('ui.kakao')}
            </button>
            <div className="flex justify-center gap-2 py-2">
              <button
                type="button"
                onClick={() => {
                  trackShareEvent('telegram', 'quiz_intro', slug);
                  const url = encodeURIComponent(shareUrl);
                  const text = encodeURIComponent(t('shareMessages.creatorDefault'));
                  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
                }}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
              >
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={() => {
                  trackShareEvent('whatsapp', 'quiz_intro', slug);
                  const url = encodeURIComponent(shareUrl);
                  const text = encodeURIComponent(t('shareMessages.creatorDefault'));
                  window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
                }}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
              >
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={() => {
                  trackShareEvent('line', 'quiz_intro', slug);
                  const url = encodeURIComponent(shareUrl);
                  const text = encodeURIComponent(t('shareMessages.creatorDefault'));
                  window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
                }}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
              >
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
            <button type="button" className="text-gray-500 py-2" onClick={resetCreator}>
              {t('creatorDone.makeAnother')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showLoadingSpinner && friendResult && !friendReveal) {
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
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-violet-500 rounded-full animate-spin" />
          <p className="mt-4 text-lg text-gray-700">{tGlobal('mbti.loadingResults')}</p>
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

  if (showResultPopup && friendResult && !friendReveal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {tGlobal('mbti.testCompleted')}</h2>
          <div className="mb-6 flex justify-center">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleShowFriendResult}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (friendReveal && friendResult && compareResult && friendPayload) {
    const matchMsg = getMatchMessage(compareResult.matchCount, locale);
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-amber-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Layer 1 */}
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <p className="text-sm text-gray-500 mb-2">{t('result.friendSeesTitle', { name: friendPayload.n })}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-violet-700 tracking-wide">
              {friendResult.display}
            </h1>
            <h2 className="text-base font-bold text-gray-800 mb-3 text-left">{t('ui.letterExplainTitle')}</h2>
            <div className="space-y-3 text-left">
              {friendResult.letters.map((letter, idx) => (
                <div key={idx} className="bg-violet-50 rounded-xl p-3">
                  <p className="font-bold text-violet-800 mb-1">{letter}</p>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {getLetterDescription(letter, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5 mb-3">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">{t('ui.compareTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">{t('ui.selfMbtiResultLabel')}</p>
                <p className="text-2xl font-bold text-gray-800 tracking-widest">{friendPayload.m}</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">{t('ui.friendMbtiResultLabel')}</p>
                <p className="text-2xl font-bold text-violet-700 tracking-wide">{friendResult.display}</p>
              </div>
            </div>
            <p className="text-center font-semibold text-gray-800 mb-2">
              {t('ui.matchRate', { count: compareResult.matchCount })}
            </p>
            {compareResult.matches.length > 0 && (
              <p className="text-center text-sm text-green-700 mb-1">
                {t('ui.matchLetters', { letters: compareResult.matches.join(', ') })}
              </p>
            )}
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-3">{matchMsg}</p>
          </div>

          {/* Layer 3 */}
          {compareResult.mismatches.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5 mb-3">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.differenceTitle')}</h2>
              <div className="space-y-4">
                {compareResult.mismatches.map((m) => (
                  <div key={`${m.dim}-${m.self}-${m.friend}`} className="border border-amber-100 bg-amber-50 rounded-xl p-4">
                    <p className="font-bold text-amber-900 mb-2">
                      {t('ui.dimMismatchLabel', { dim: m.dim, self: m.self, friend: m.friend })}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {getMismatchAnalysis(m.dim, m.self, m.friend, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left text-sm">
            <p className="font-bold mb-2">{t('hostNotifyTitle')}</p>
            <p className="whitespace-pre-line mb-3">{hostSummaryText}</p>
            <button
              type="button"
              className="w-full bg-amber-500 text-white py-2 rounded-lg font-bold"
              onClick={() => copyText(hostSummaryText, 'resultCopied')}
            >
              {t('copyHostNotify')}
            </button>
          </div>

          <div className="mt-8 mb-6 px-4">
            <button
              type="button"
              onClick={handleShareResult}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
            >
              {t('ui.shareResult')}
            </button>
          </div>

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
              type="button"
              onClick={handleFriendRetake}
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
            >
              {tGlobal('mbti.retakeTest')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
            >
              {tGlobal('mbti.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button type="button" onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareToKakaoResult} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareToTelegramResult} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareToWeChatResult} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareToLineResult} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareToWhatsAppResult} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((testItem) => (
                  <Link key={testItem.id} href={`/${locale}/test/${testItem.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={getThumbnailUrl(testItem.thumbnail)}
                          alt={testItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                        />
                        {latestTestSlugs.includes(testItem.slug) && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                            {tBadges('new')}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-end gap-3">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                            {testItem.title}
                          </h3>
                          <div className="font-semibold text-gray-800 flex items-center gap-1.5 text-sm flex-shrink-0">
                            <Play size={14} />
                            <span>{formatPlayCount(testItem.playCount, locale as Locale)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {popularTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <div className="mb-6 px-4 w-full">
                <AdSensePlaceholder
                  slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                  style={{ width: '100%', height: '250px' }}
                  className="mx-auto w-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.popularTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {popularTestsState.map((testItem) => (
                  <Link key={testItem.id} href={`/${locale}/test/${testItem.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={getThumbnailUrl(testItem.thumbnail)}
                          alt={testItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-end gap-3">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                            {testItem.title}
                          </h3>
                          <div className="font-semibold text-gray-800 flex items-center gap-1.5 text-sm flex-shrink-0">
                            <Play size={14} />
                            <span>{formatPlayCount(testItem.playCount, locale as Locale)}</span>
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
    );
  }

  if (!started || shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) {
    return null;
  }

  const q = shuffledQuestions[currentQuestion];
  const qText = q.question[locale as keyof typeof q.question] || q.question.ko;
  const opts = shuffledOptionsMap[currentQuestion] || q.options;
  const colors = [
    'from-purple-50 to-purple-100 border-purple-200',
    'from-pink-50 to-pink-100 border-pink-200',
  ];
  const bgColors = ['bg-purple-600', 'bg-pink-600'];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-amber-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-violet-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">{qText}</h2>
        <div className="space-y-3">
          {opts.map((opt, index) => {
            const optionText = opt.text[locale as keyof typeof opt.text] || opt.text.ko;
            const label = String.fromCharCode(65 + index);
            return (
              <button
                key={index}
                type="button"
                onClick={() => handleAnswer(opt.score)}
                className={`w-full bg-gradient-to-r ${colors[index % 2]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl text-left hover:scale-[1.01] transition-transform`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 ${bgColors[index % 2]} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm`}
                  >
                    {label}
                  </div>
                  <span className="text-base leading-snug">{optionText}</span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-8 px-4">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>

        {phase === 'friendRun' && (
          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button type="button" onClick={copyProgressLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareProgressToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareProgressToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareProgressToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareProgressToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareProgressToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Phase3FriendSeesMyMbtiTestClient(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-violet-500 rounded-full animate-spin" />
        </div>
      }
    >
      <Phase3FriendSeesMyMbtiTestClientInner {...props} />
    </Suspense>
  );
}
