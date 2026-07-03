'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  Phase3TeamWorkChemistryQuestion,
  Phase3TeamWorkChemistryResult,
  calculatePhase3TeamWorkChemistryResult,
  getRoleKeyFromResultType,
  phase3TeamWorkChemistryQuestions,
  encodeTeamPayload,
  decodeTeamPayload,
  buildTeamChemistryReport,
  type TeamChemistryReport,
  TEAM_ROLE_EMOJI,
  TeamMemberPayload,
  type TeamRoleKey,
  ROLE_ORDER,
} from '@/lib/phase3TeamWorkChemistryData';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';

interface Props {
  locale: string;
  slug: string;
  title: string;
  description: string;
  questions: Phase3TeamWorkChemistryQuestion[];
  results: Phase3TeamWorkChemistryResult[];
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

function barString(filled: number): string {
  const f = Math.max(0, Math.min(6, filled));
  return `${'■'.repeat(f)}${'□'.repeat(6 - f)}`;
}

function Phase3TeamWorkChemistryTestClientInner(props: Props) {
  const {
    locale,
    slug,
    title,
    questions,
    results,
    thumbnail,
    playCount = 0,
    similarTests = [],
    isLatestTest = false,
    badgeType = null,
  } = props;

  const t = useTranslations('phase3TeamWorkChemistryTest');
  const tGlobal = useTranslations();
  const tBadges = useTranslations('badges');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const teamRaw = searchParams.get('team');
  const initialTeam = useMemo(() => {
    if (!teamRaw) return null;
    try {
      return decodeTeamPayload(decodeURIComponent(teamRaw));
    } catch {
      return null;
    }
  }, [teamRaw]);

  const [nickname, setNickname] = useState('');
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<Phase3TeamWorkChemistryResult | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Phase3TeamWorkChemistryQuestion[]>([]);
  const [originalQuestionIndices, setOriginalQuestionIndices] = useState<number[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Record<string, string>[]>>({});
  const [optionIndexMapping, setOptionIndexMapping] = useState<Record<number, Record<number, number>>>({});
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });
  const [hasIncrementedPlayCount, setHasIncrementedPlayCount] = useState(false);
  useEffect(() => {
    if (!started || shuffledQuestions.length === 0) return;
    const qk = currentQuestion;
    if (shuffledOptionsMap[qk] || !shuffledQuestions[qk]) return;

    const q = shuffledQuestions[qk];
    const optionsWithIndices = q.options.map((opt, idx) => ({ opt, originalIndex: idx }));
    for (let i = optionsWithIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
    }
    const shuffled = optionsWithIndices.map((x) => x.opt);
    const mapping: Record<number, number> = {};
    optionsWithIndices.forEach((item, newIdx) => {
      mapping[newIdx] = item.originalIndex;
    });
    setShuffledOptionsMap((prev) => ({ ...prev, [qk]: shuffled }));
    setOptionIndexMapping((prev) => ({ ...prev, [qk]: mapping }));
  }, [currentQuestion, started, shuffledQuestions, shuffledOptionsMap]);

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
      } catch {
        /* noop */
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [started, showResult, showLoadingSpinner, showResultPopup]);

  useEffect(() => {
    if (!showLoadingSpinner) return;
    const timer = setTimeout(() => {
      setShowLoadingSpinner(false);
      setShowResultPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoadingSpinner]);

  const shuffleQuestions = (list: Phase3TeamWorkChemistryQuestion[]) => {
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

  const handleStart = () => {
    const { questions: sq, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(sq);
    setOriginalQuestionIndices(originalIndices);
    setAnswers({});
    setCurrentQuestion(0);
    setShuffledOptionsMap({});
    setOptionIndexMapping({});
    setStarted(true);
    setDisplayPlayCount((p) => p + 1);
    if (!hasIncrementedPlayCount) {
      incrementPlayCount(slug);
      setHasIncrementedPlayCount(true);
    }
    window.scrollTo(0, 0);
  };

  const handleAnswer = (displayOptionIndex: number) => {
    const origQ = originalQuestionIndices[currentQuestion];
    const map = optionIndexMapping[currentQuestion];
    if (!map) return;
    const scoreVal = map[displayOptionIndex];
    const newAnswers = { ...answers, [origQ]: scoreVal };

    if (currentQuestion < shuffledQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion((c) => c + 1);
      window.scrollTo(0, 0);
      return;
    }

    setAnswers(newAnswers);
    const arr = questions.map((_, idx) => newAnswers[idx] ?? 0);
    const sum = arr.reduce((a, b) => a + b, 0);
    const type = calculatePhase3TeamWorkChemistryResult(sum);
    const found = results.find((r) => r.type === type) || null;
    setTotalScore(sum);
    setResult(found);
    setStarted(false);
    setShowLoadingSpinner(true);
  };

  const mergedTeamForReport = useMemo(() => {
    if (!result) return null;
    const name = nickname.trim() || t('defaultNickname');
    const r = getRoleKeyFromResultType(result.type);
    const base: TeamMemberPayload[] = initialTeam?.m ? [...initialTeam.m] : [];
    base.push({ n: name, r });
    return base;
  }, [result, nickname, initialTeam, t]);

  const teamReport = useMemo(() => {
    if (!mergedTeamForReport?.length) return null;
    return buildTeamChemistryReport(mergedTeamForReport);
  }, [mergedTeamForReport]);

  /** 링크(?team=)로 들어온 경우, 테스트 전 현재 포함된 팀원만으로 분석 미리보기 */
  const teamLinkPreviewReport = useMemo(() => {
    if (!initialTeam?.m?.length) return null;
    return buildTeamChemistryReport(initialTeam.m);
  }, [initialTeam]);

  const buildTeamShareUrl = () => {
    if (!result || !mergedTeamForReport) return '';
    const enc = encodeURIComponent(encodeTeamPayload({ m: mergedTeamForReport }));
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://myquizoasis.com';
    return `${origin}${pathname}?team=${enc}`;
  };

  const copyTeamLink = () => {
    const u = buildTeamShareUrl();
    if (!u) return;
    navigator.clipboard.writeText(u).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const buildResultShareLine = () => {
    if (!result) return '';
    const rt = result.title[locale as keyof typeof result.title] || result.title.ko;
    return t('shareMessages.resultLine', { type: rt });
  };

  const getResultShareUrl = () =>
    buildTeamShareUrl() ||
    (typeof window !== 'undefined' ? `https://myquizoasis.com${window.location.pathname}${window.location.search}` : '');

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${buildResultShareLine()}\n\n${getResultShareUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') console.error(error);
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

  const shareToKakaoGeneric = (desc: string, url: string) => {
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

  const copyResultLink = () => {
    const u = getResultShareUrl();
    if (!u) return;
    navigator.clipboard.writeText(u).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const shareResultToKakao = () => shareToKakaoGeneric(buildResultShareLine(), getResultShareUrl());

  const shareResultToTelegram = () => {
    const url = encodeURIComponent(getResultShareUrl());
    const text = encodeURIComponent(buildResultShareLine());
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareResultToWeChat = async () => {
    const u = getResultShareUrl();
    const shareText = `${buildResultShareLine()}\n\n${u}`;
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

  const shareResultToWhatsApp = () => {
    const url = encodeURIComponent(getResultShareUrl());
    const body = encodeURIComponent(buildResultShareLine());
    window.open(`https://wa.me/?text=${body}%0A%0A${url}`, '_blank');
  };

  const shareResultToLine = () => {
    const url = encodeURIComponent(getResultShareUrl());
    const text = encodeURIComponent(buildResultShareLine());
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  /** 시작 화면: 현재 페이지 전체 URL (쿼리 포함 시 팀 링크 유지) */
  const getStartPageUrl = () => (typeof window !== 'undefined' ? window.location.href : '');

  const copyStartPageLink = () => {
    const u = getStartPageUrl();
    if (!u) return;
    navigator.clipboard.writeText(u).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const shareStartToKakao = () => shareToKakaoGeneric(t('shareMessages.startKakao'), getStartPageUrl());

  const shareStartToTelegram = () => {
    const url = encodeURIComponent(getStartPageUrl());
    const text = encodeURIComponent(t('shareMessages.startTelegram'));
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareStartToWeChat = async () => {
    const u = getStartPageUrl();
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

  const shareStartToWhatsApp = () => {
    const url = encodeURIComponent(getStartPageUrl());
    const text = encodeURIComponent(t('shareMessages.startWhatsapp'));
    window.open(`https://wa.me/?text=${text}%0A%0A${url}`, '_blank');
  };

  const shareStartToLine = () => {
    const url = encodeURIComponent(getStartPageUrl());
    const text = encodeURIComponent(t('shareMessages.startLine'));
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const handleRetake = () => {
    const { questions: sq, originalIndices } = shuffleQuestions(questions);
    setShuffledQuestions(sq);
    setOriginalQuestionIndices(originalIndices);
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
    setShowResultPopup(false);
    setShowLoadingSpinner(false);
    setShuffledOptionsMap({});
    setOptionIndexMapping({});
    setHasIncrementedPlayCount(false);
  };

  const loc = locale as keyof Phase3TeamWorkChemistryResult['title'];

  const roleLabel = (role: TeamRoleKey) =>
    (
      {
        visionary: t('roleLabels.visionary'),
        executor: t('roleLabels.executor'),
        coordinator: t('roleLabels.coordinator'),
        analyst: t('roleLabels.analyst'),
        creator: t('roleLabels.creator'),
        supporter: t('roleLabels.supporter'),
      } as const
    )[role];

  const renderTeamChemistryReportBlock = (report: TeamChemistryReport, members: TeamMemberPayload[]) => {
    const renderRoleListForMembers = () =>
      ROLE_ORDER.map((role) => {
        const names = members.filter((m) => m.r === role).map((m) => m.n);
        return (
          <div key={role} className="flex flex-wrap gap-1 text-sm text-gray-800">
            <span>
              {TEAM_ROLE_EMOJI[role]} {roleLabel(role)}:
            </span>
            <span className="font-medium">{names.length ? names.join(', ') : t('teamAnalysis.none')}</span>
          </div>
        );
      });

    const gradeBase = `report.grade.${report.gradeBlockKey}`;
    const tr = t as (key: string) => string;
    const gradeCaution = tr(`${gradeBase}.caution`);

    return (
      <div className="rounded-2xl border-2 border-amber-200 bg-white p-5 mb-6 shadow-inner">
        <h3 className="text-lg font-bold text-center text-gray-900 mb-4">{t('teamAnalysis.title')}</h3>
        <p className="text-center text-2xl font-black text-rose-600 mb-4">
          {t('teamAnalysis.gradeLabel', { grade: report.grade })}
        </p>

        <div className="space-y-2 mb-4">{renderRoleListForMembers()}</div>

        <div className="mb-4">
          <h4 className="font-bold text-gray-800 mb-2">{t('teamAnalysis.barsTitle')}</h4>
          <div className="space-y-1 font-mono text-sm">
            {report.bars.map((b) => (
              <div key={b.role} className="flex justify-between gap-2 text-gray-800">
                <span>
                  {TEAM_ROLE_EMOJI[b.role]} {roleLabel(b.role)}
                </span>
                <span>{barString(b.filled)}</span>
              </div>
            ))}
          </div>
        </div>

        {report.synergyKeys.length > 0 && (
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">{t('teamAnalysis.synergyTitle')}</h4>
            {report.synergyKeys.map((key) => (
              <div key={key} className="mb-3 rounded-lg bg-violet-50 p-3 text-sm">
                <p className="font-bold text-violet-900 mb-1">{tr(`report.synergy.${key}.title`)}</p>
                <p className="whitespace-pre-line text-gray-800">{tr(`report.synergy.${key}.body`)}</p>
              </div>
            ))}
          </div>
        )}

        {report.missingKeys.length > 0 && (
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">{t('teamAnalysis.missingTitle')}</h4>
            {report.missingKeys.map((role) => (
              <div key={role} className="mb-3 rounded-lg border border-amber-200 bg-amber-50/80 p-3 text-sm">
                <p className="font-bold text-amber-900 mb-1">{tr(`report.missing.${role}.title`)}</p>
                <p className="text-gray-800 mb-2">{tr(`report.missing.${role}.body`)}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t('teamAnalysis.prescription')}</span> {tr(`report.missing.${role}.prescription`)}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="rounded-xl bg-gradient-to-r from-slate-50 to-sky-50 p-4 text-sm border border-sky-100">
          <p className="font-bold text-gray-900 mb-1">{tr(`${gradeBase}.title`)}</p>
          <p className="text-gray-800 whitespace-pre-line mb-2">{tr(`${gradeBase}.body`)}</p>
          {gradeCaution && String(gradeCaution).trim() !== '' && (
            <p className="text-gray-700 border-t border-sky-100 pt-2 mt-2">
              <span className="font-semibold">{t('teamAnalysis.caution')}</span> {gradeCaution}
            </p>
          )}
        </div>
      </div>
    );
  };

  const handleShowResultFromPopup = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  if (!started && !showResult && !showLoadingSpinner && !showResultPopup) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full overflow-hidden mb-3 rounded-xl" style={{ aspectRatio: '680/384' }}>
            <Image
              src={getThumbnailUrl(thumbnail || '')}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            {isLatestTest && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                {tBadges('new')}
              </div>
            )}
            {badgeType === 'popular' && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                {tBadges('popular')}
              </div>
            )}
            {badgeType === 'hot' && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                {tBadges('hot')}
              </div>
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

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/80 p-4 mb-6 text-sm text-indigo-900 leading-relaxed">
            <p className="font-bold mb-2">{t('leaderShare.title')}</p>
            <p className="whitespace-pre-line">{t('leaderShare.body')}</p>
            <p className="mt-4 text-xs text-indigo-800/90 border-t border-indigo-200/80 pt-3">{t('leaderShare.shareHint')}</p>
          </div>

          {initialTeam && initialTeam.m.length > 0 && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 mb-4 text-sm text-emerald-900">
              {t('teamLinkBanner', { count: initialTeam.m.length })}
            </div>
          )}

          {teamLinkPreviewReport && initialTeam && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">{t('teamPreview.title')}</h2>
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed px-1">{t('teamPreview.description')}</p>
              {renderTeamChemistryReportBlock(teamLinkPreviewReport, initialTeam.m)}
            </div>
          )}

          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-3">
            <p className="font-bold text-gray-800">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p>{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="whitespace-pre-line">{t('startMessage.line5')}</p>
          </div>

          <label className="block text-center mb-2 font-medium text-gray-700">{t('nicknameLabel')}</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder={t('nicknamePlaceholder')}
            className="w-full max-w-md mx-auto block border border-gray-300 rounded-lg px-4 py-3 mb-6 text-center"
            maxLength={24}
          />

          <div className="flex justify-center mb-4">
            <button
              type="button"
              onClick={handleStart}
              className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            >
              {tGlobal('mbti.startTest')}
            </button>
          </div>

          <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>
            {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
          </p>

          <div className="max-w-[680px] mx-auto mb-6">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto w-full"
            />
          </div>

          <div className="mb-8 text-center px-2">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={copyStartPageLink}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.linkCopy')}
              >
                <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareStartToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform" aria-label={t('ui.kakao')}>
                <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareStartToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform" aria-label={t('ui.telegram')}>
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareStartToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform" aria-label={t('ui.wechat')}>
                <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareStartToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform" aria-label={t('ui.line')}>
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
              <button type="button" onClick={shareStartToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform" aria-label={t('ui.whatsapp')}>
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
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

  if (showLoadingSpinner && result) {
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
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
        <p className="mt-4 text-lg text-gray-700">{tGlobal('mbti.loadingResults')}</p>
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

  if (showResultPopup && result && teamReport) {
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
                label={t('ui.adsenseTitle')}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleShowResultFromPopup}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg"
          >
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (showResult && result && teamReport) {
    const rt = result.title[loc] || result.title.ko;
    const tag = result.tagline[loc] || result.tagline.ko;
    const desc = result.description[loc] || result.description.ko;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-sky-50 to-rose-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5 border border-amber-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{tGlobal('mbti.yourResult')}</h2>
              <p className="text-sm font-semibold text-rose-600 mb-2">
                {t('ui.scoreLine', { score: totalScore })}
              </p>
              <div className="text-5xl mb-2">{result.emoji}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{rt}</h3>
              <p className="text-base font-semibold text-gray-700 mb-3">{tag}</p>
              <p className="text-sm text-gray-600 leading-relaxed text-left whitespace-pre-line">{desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-sky-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  🏷️ {t('ui.keywords')}
                </h4>
                <p className="text-sm text-gray-700">{result.keywords[loc] || result.keywords.ko}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-rose-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  🎭 {t('ui.naturalRoles')}
                </h4>
                <p className="text-sm text-gray-700">{result.naturalRoles[loc] || result.naturalRoles.ko}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  💪 {t('ui.strength')}
                </h4>
                <p className="text-sm text-gray-700">{result.strength[loc] || result.strength.ko}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-blue-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  ⚠️ {t('ui.watchOut')}
                </h4>
                <p className="text-sm text-gray-700">{result.watchOut[loc] || result.watchOut.ko}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-emerald-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  ✨ {t('ui.bestMatch')}
                </h4>
                <p className="text-sm text-gray-700">{result.bestMatch[loc] || result.bestMatch.ko}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 border border-violet-100">
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  ⚡ {t('ui.conflictMatch')}
                </h4>
                <p className="text-sm text-gray-700">{result.conflictMatch[loc] || result.conflictMatch.ko}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 mb-3 border border-amber-100">
              <h4 className="font-bold text-gray-800 mb-2">💬 {t('ui.shareOneLiner')}</h4>
              <p className="text-sm text-gray-800">{result.shareOneLiner[loc] || result.shareOneLiner.ko}</p>
            </div>

            {renderTeamChemistryReportBlock(teamReport, mergedTeamForReport!)}

          <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 mb-6 text-sm">
            <p className="font-bold text-sky-950 mb-2">🔗 {t('teamLink.title')}</p>
            <p className="text-sky-950/90 mb-3">{t('teamLink.hint')}</p>
            <button
              type="button"
              onClick={() => {
                copyTeamLink();
                try {
                  router.replace(`${pathname}?team=${encodeURIComponent(encodeTeamPayload({ m: mergedTeamForReport! }))}`);
                } catch {
                  /* noop */
                }
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold py-3 rounded-xl mb-2 shadow-md hover:from-amber-600 hover:to-rose-700 transition-all"
            >
              {t('teamLink.copy')}
            </button>
            <textarea readOnly className="w-full text-xs border border-sky-200 rounded-lg p-2 h-20 bg-white" value={buildTeamShareUrl()} />
          </div>

            <div className="mt-8 mb-6 px-4">
              <button
                type="button"
                onClick={handleShareResult}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
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
                onClick={handleRetake}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
              >
                {tGlobal('mbti.retakeTest')}
              </button>
              <Link
                href={`/${locale}`}
                className="flex-1 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold py-4 px-6 rounded-xl hover:from-amber-600 hover:to-rose-700 transition-all text-center shadow-md"
              >
                {tGlobal('mbti.otherTests')}
              </Link>
            </div>

            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                📣 {tGlobal('mbti.shareResultWithFriends')}
              </h2>
              <div className="flex justify-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={copyResultLink}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.linkCopy')}
                >
                  <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
                </button>
                <button
                  type="button"
                  onClick={shareResultToKakao}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.kakao')}
                >
                  <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
                </button>
                <button
                  type="button"
                  onClick={shareResultToTelegram}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.telegram')}
                >
                  <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
                </button>
                <button
                  type="button"
                  onClick={shareResultToWeChat}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.wechat')}
                >
                  <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
                </button>
                <button
                  type="button"
                  onClick={shareResultToLine}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.line')}
                >
                  <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
                </button>
                <button
                  type="button"
                  onClick={shareResultToWhatsApp}
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                  aria-label={t('ui.whatsapp')}
                >
                  <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
                </button>
              </div>
            </div>

            {similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🎯 {t('recommendations.similarTestsTop5')}
                </h2>
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
                          {!latestTestSlugs.includes(testItem.slug) && testItem.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              {tBadges('popular')}
                            </div>
                          )}
                          {!latestTestSlugs.includes(testItem.slug) && testItem.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              {tBadges('hot')}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {testItem.title}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
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
                    label={t('ui.adsenseTitle')}
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  🔥 {t('recommendations.popularTestsTop5')}
                </h2>
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
                          {latestTestSlugs.includes(testItem.slug) && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              {tBadges('new')}
                            </div>
                          )}
                          {!latestTestSlugs.includes(testItem.slug) && testItem.badgeType === 'popular' && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              {tBadges('popular')}
                            </div>
                          )}
                          {!latestTestSlugs.includes(testItem.slug) && testItem.badgeType === 'hot' && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                              {tBadges('hot')}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                              {testItem.title}
                            </h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
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
      </div>
    );
  }

  if (!started || shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestion]) {
    return null;
  }

  const q = shuffledQuestions[currentQuestion];
  const qText = q.question[loc] || q.question.ko;
  const opts = shuffledOptionsMap[currentQuestion] || q.options;
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-sky-50 to-rose-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">{tGlobal('mbti.progress')}</span>
            <span className="text-sm font-bold text-rose-600">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-sky-500 to-rose-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-6 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center leading-relaxed whitespace-pre-line">
              {qText}
            </h2>
          </div>

          <div className="space-y-4 px-4">
            {opts.map((opt, index) => {
              const optionText = opt[loc] || opt.ko;
              const label = String.fromCharCode(65 + index);
              const optColors = [
                'from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 border-amber-300 hover:border-amber-500',
                'from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 border-sky-300 hover:border-sky-500',
                'from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 border-rose-300 hover:border-rose-500',
                'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-300 hover:border-blue-500',
              ];
              const bgColors = ['bg-amber-600', 'bg-sky-600', 'bg-rose-600', 'bg-blue-600'];
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={`w-full bg-gradient-to-r ${optColors[index]} border-2 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-102 text-left`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-7 h-7 ${bgColors[index]} text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm`}
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

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={copyStartPageLink}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.linkCopy')}
              >
                <Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={shareStartToKakao}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.kakao')}
              >
                <Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={shareStartToTelegram}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.telegram')}
              >
                <Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={shareStartToWeChat}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.wechat')}
              >
                <Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={shareStartToLine}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.line')}
              >
                <Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" />
              </button>
              <button
                type="button"
                onClick={shareStartToWhatsApp}
                className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"
                aria-label={t('ui.whatsapp')}
              >
                <Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Phase3TeamWorkChemistryTestClient(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      }
    >
      <Phase3TeamWorkChemistryTestClientInner {...props} />
    </Suspense>
  );
}
