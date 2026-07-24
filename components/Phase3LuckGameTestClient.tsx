'use client';

import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import { incrementPlayCount } from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import {
  PHASE3_LUCK_GAME_ROUND_COUNT,
  PHASE3_LUCK_GAME_ROUND_SCORE,
  generatePhase3LuckGameSession,
  calculatePhase3LuckGameResult,
  getPhase3LuckGameResultByType,
  estimateLuckPercentile,
  loadPhase3LuckGameBestScores,
  savePhase3LuckGamePlay,
  resolveCoin100Answer,
  type Phase3LuckGameResult,
  type Phase3LuckSessionRound,
  type Phase3LuckRoundType,
  type Phase3LuckRouletteColor,
  type Phase3LuckCoinSide,
  type Phase3LuckCoin100Choice,
} from '@/lib/phase3LuckGameData';

interface Props {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  playCount?: number;
  isLatestTest?: boolean;
  badgeType?: 'popular' | 'hot' | null;
}

type Screen = 'intro' | 'playing' | 'loading' | 'popup' | 'result';
type RoundPhase = 'pick' | 'animate' | 'feedback';

const ROULETTE_COLORS: Phase3LuckRouletteColor[] = ['red', 'blue', 'green', 'yellow', 'purple'];
const COLOR_CLASS: Record<Phase3LuckRouletteColor, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-400',
  purple: 'bg-purple-500',
};

function locText(obj: Record<string, string>, locale: string): string {
  return obj[locale as keyof typeof obj] || obj.ko;
}

function randomAnimMs(): number {
  return 800 + Math.floor(Math.random() * 701);
}

const SLOT_SPIN_SYMBOLS = ['🍒', '🍋', '7️⃣', '⭐', '🔔'] as const;
const SLOT_PLACEHOLDER: [string, string, string] = ['❓', '❓', '❓'];

function randomSlotSymbol(): string {
  return SLOT_SPIN_SYMBOLS[Math.floor(Math.random() * SLOT_SPIN_SYMBOLS.length)]!;
}

function getAnimMsForRound(type: Phase3LuckRoundType): number {
  if (type === 'slot') return 2800;
  return randomAnimMs();
}

function wrongCoin100Choice(correct: Phase3LuckCoin100Choice): Phase3LuckCoin100Choice {
  const opts: Phase3LuckCoin100Choice[] = ['heads', 'tails', 'tie'].filter((c) => c !== correct) as Phase3LuckCoin100Choice[];
  return opts[Math.floor(Math.random() * opts.length)]!;
}

function pickWrongDoor(winning: 'A' | 'B' | 'C'): 'A' | 'B' | 'C' {
  const opts: Array<'A' | 'B' | 'C'> = ['A', 'B', 'C'].filter((d) => d !== winning) as Array<'A' | 'B' | 'C'>;
  return opts[Math.floor(Math.random() * opts.length)]!;
}

function pickWrongSide(side: Phase3LuckCoinSide): Phase3LuckCoinSide {
  return side === 'heads' ? 'tails' : 'heads';
}

function pickWrongColor(color: Phase3LuckRouletteColor): Phase3LuckRouletteColor {
  return ROULETTE_COLORS.filter((c) => c !== color)[Math.floor(Math.random() * 4)]!;
}

function pickWrongNumber(num: number): number {
  let n = num;
  while (n === num) n = 1 + Math.floor(Math.random() * 10);
  return n;
}

function pickWrongIndex(max: number, correct: number): number {
  let n = correct;
  while (n === correct) n = Math.floor(Math.random() * max);
  return n;
}

export default function Phase3LuckGameTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3LuckGameTest');
  const tGlobal = useTranslations();

  const [screen, setScreen] = useState<Screen>('intro');
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncremented, setHasIncremented] = useState(false);
  const { similarTestsState, popularTestsState } = useTestRecommendations({ slug, locale });

  const [session, setSession] = useState<Phase3LuckSessionRound[]>([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [roundPhase, setRoundPhase] = useState<RoundPhase>('pick');
  const [score, setScore] = useState(0);
  const [roundOutcomes, setRoundOutcomes] = useState<boolean[]>([]);
  const [displayPick, setDisplayPick] = useState<unknown>(null);
  const [coinFlipCount, setCoinFlipCount] = useState(0);
  const [slotSpin, setSlotSpin] = useState<[string, string, string] | null>(null);

  const [result, setResult] = useState<Phase3LuckGameResult | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [bestScores, setBestScores] = useState({ todayBest: 0, allTimeBest: 0, attemptsToday: 0 });

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const pushTimer = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const vibrate = (pattern: number | number[] = 30) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(pattern);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    setBestScores(loadPhase3LuckGameBestScores());
    return () => clearTimers();
  }, [clearTimers]);

  useEffect(() => {
    if (screen === 'intro' || screen === 'playing' || screen === 'result' || screen === 'popup' || screen === 'loading') {
      setTimeout(() => {
        try {
          safeLoadAdSense();
        } catch (err) {
          console.error(err);
        }
      }, 100);
    }
  }, [screen]);

  useEffect(() => {
    if (roundPhase !== 'animate') return;
    const round = session[roundIndex];
    if (!round || round.type !== 'coin100') return;

    const target = round.meta.coin100Heads ?? 50;
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCoinFlipCount(Math.min(target, Math.round((step / 12) * target)));
      if (step >= 12) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [roundPhase, roundIndex, session]);

  useEffect(() => {
    if (roundPhase !== 'animate') return;
    const round = session[roundIndex];
    if (!round || round.type !== 'slot') return;

    const final = round.meta.slotSymbols ?? (['7️⃣', '7️⃣', '7️⃣'] as [string, string, string]);
    const locked = [false, false, false];

    setSlotSpin(SLOT_PLACEHOLDER);

    const spinInterval = setInterval(() => {
      setSlotSpin([
        locked[0] ? final[0]! : randomSlotSymbol(),
        locked[1] ? final[1]! : randomSlotSymbol(),
        locked[2] ? final[2]! : randomSlotSymbol(),
      ]);
    }, 80);

    const stopReel0 = setTimeout(() => {
      locked[0] = true;
      setSlotSpin((prev) => [final[0]!, prev?.[1] ?? '❓', prev?.[2] ?? '❓']);
    }, 900);
    const stopReel1 = setTimeout(() => {
      locked[1] = true;
      setSlotSpin((prev) => [final[0]!, final[1]!, prev?.[2] ?? '❓']);
    }, 1300);
    const stopReel2 = setTimeout(() => {
      locked[2] = true;
      setSlotSpin(final);
      clearInterval(spinInterval);
    }, 1700);

    return () => {
      clearInterval(spinInterval);
      clearTimeout(stopReel0);
      clearTimeout(stopReel1);
      clearTimeout(stopReel2);
    };
  }, [roundPhase, roundIndex, session]);

  const resolveDisplayPick = (round: Phase3LuckSessionRound, pick: unknown): unknown => {
    const meta = round.meta;
    switch (round.type) {
      case 'door':
        return round.success ? meta.winningDoor : pickWrongDoor(meta.winningDoor ?? 'A');
      case 'coin':
        return round.success ? meta.coinSide : pickWrongSide(meta.coinSide ?? 'heads');
      case 'card': {
        const wins = meta.cardWinIndices ?? [0, 1];
        return round.success ? wins[0] : pickWrongIndex(5, wins[0] ?? 0);
      }
      case 'box':
        return round.success ? meta.winningBox : pickWrongIndex(4, (meta.winningBox ?? 1) - 1) + 1;
      case 'roulette':
        return round.success ? meta.rouletteColor : pickWrongColor(meta.rouletteColor ?? 'red');
      case 'number':
        return round.success ? meta.luckyNumber : pickWrongNumber(meta.luckyNumber ?? 1);
      case 'gacha':
        return meta.gachaGold;
      case 'slot':
        return meta.slotSymbols;
      case 'clover':
        return round.success ? meta.cloverIndex : pickWrongIndex(6, meta.cloverIndex ?? 0);
      case 'coin100': {
        const correct = resolveCoin100Answer(meta.coin100Heads ?? 50);
        return round.success ? correct : wrongCoin100Choice(correct);
      }
      default:
        return pick;
    }
  };

  const finishGame = useCallback(
    (finalScore: number, outcomes: boolean[]) => {
      const successN = outcomes.filter(Boolean).length;
      const type = calculatePhase3LuckGameResult(finalScore);
      const resultData = getPhase3LuckGameResultByType(type) ?? null;

      setTotalScore(finalScore);
      setSuccessCount(successN);
      setPercentile(estimateLuckPercentile(finalScore));
      setResult(resultData);

      const saved = savePhase3LuckGamePlay(finalScore);
      setBestScores(saved);
      setScreen('loading');

      pushTimer(() => setScreen('popup'), 3000);
    },
    []
  );

  const advanceRound = useCallback(
    (nextIndex: number, nextScore: number, outcomes: boolean[]) => {
      if (nextIndex >= PHASE3_LUCK_GAME_ROUND_COUNT) {
        finishGame(nextScore, outcomes);
        return;
      }
      setRoundIndex(nextIndex);
      setRoundPhase('pick');
      setDisplayPick(null);
      setCoinFlipCount(0);
      setSlotSpin(null);
    },
    [finishGame]
  );

  const handlePick = (pick: unknown) => {
    if (roundPhase !== 'pick') return;
    const round = session[roundIndex];
    if (!round) return;

    setRoundPhase('animate');
    const shown = resolveDisplayPick(round, pick);
    setDisplayPick(shown);

    if (round.type === 'slot') {
      setSlotSpin(SLOT_PLACEHOLDER);
    }

    const animMs = getAnimMsForRound(round.type as Phase3LuckRoundType);
    pushTimer(() => {
      setRoundPhase('feedback');
      if (round.success) vibrate([10, 30, 10]);

      const nextOutcomes = [...roundOutcomes];
      nextOutcomes[roundIndex] = round.success;
      setRoundOutcomes(nextOutcomes);

      const nextScore = round.success ? score + PHASE3_LUCK_GAME_ROUND_SCORE : score;
      if (round.success) setScore(nextScore);

      pushTimer(() => advanceRound(roundIndex + 1, nextScore, nextOutcomes), 1100);
    }, animMs);
  };

  const startGame = () => {
    if (!hasIncremented) {
      incrementPlayCount(slug).catch(console.error);
      setDisplayPlayCount((p) => p + 1);
      setHasIncremented(true);
    }

    clearTimers();
    const newSession = generatePhase3LuckGameSession();
    setSession(newSession);
    setRoundIndex(0);
    setRoundPhase('pick');
    setScore(0);
    setRoundOutcomes([]);
    setDisplayPick(null);
    setResult(null);
    setScreen('playing');
    window.scrollTo(0, 0);
  };

  const handleShowResult = () => {
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearTimers();
    setScreen('intro');
    setResult(null);
  };

  const getShareUrl = () =>
    typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';

  const getResultShareText = () => {
    if (!result) return t('shareMessages.startDefault');
    return locText(result.shareLine, locale);
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${getResultShareText()}\n\n${getShareUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText });
      } catch {
        /* cancel */
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
    trackShareEvent('link copy', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    navigator.clipboard.writeText(getShareUrl()).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    const url = getShareUrl();
    const description = result != null ? getResultShareText() : t('shareMessages.startKakao');
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '';
        if (kakaoKey) window.Kakao.init(kakaoKey);
      }
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl: getThumbnailUrl(thumbnail || ''),
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [{ title: t('ui.goToTest'), link: { mobileWebUrl: url, webUrl: url } }],
      });
    } else {
      alert(t('alerts.kakaoInit'));
    }
  };

  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    const text = result ? getResultShareText() : t('shareMessages.startTelegram');
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const shareToWeChat = () => {
    trackShareEvent('wechat', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    copyLink();
    alert(t('alerts.wechatCopy'));
  };

  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    const text = result ? getResultShareText() : t('shareMessages.startLine');
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    const text = result ? getResultShareText() : t('shareMessages.startWhatsapp');
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + getShareUrl())}`,
      '_blank'
    );
  };

  const shareButtons = (
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

  const roundKey = `r${roundIndex + 1}` as 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6' | 'r7' | 'r8' | 'r9' | 'r10';
  const currentRound = session[roundIndex];

  const renderChoiceButton = (
    content: ReactNode,
    onClick: () => void,
    className = 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-md active:scale-95 transition-transform min-h-[44px] min-w-[44px] px-4 py-3'
  ) => (
    <button type="button" onClick={onClick} disabled={roundPhase !== 'pick'} className={className}>
      {content}
    </button>
  );

  const renderEmojiChoiceButton = (
    emoji: string,
    text: string,
    onClick: () => void,
    className: string,
    emojiClass = 'text-4xl leading-none',
    textClass = 'text-sm sm:text-base font-bold leading-tight text-center'
  ) =>
    renderChoiceButton(
      <>
        <span className={emojiClass} aria-hidden>
          {emoji}
        </span>
        <span className={textClass}>{text}</span>
      </>,
      onClick,
      `${className} flex flex-col items-center justify-center gap-1.5 px-2 py-3 overflow-hidden`
    );

  const renderRoundChoices = (round: Phase3LuckSessionRound) => {
    switch (round.type as Phase3LuckRoundType) {
      case 'door':
        return (
          <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
            {(['A', 'B', 'C'] as const).map((d) =>
              renderEmojiChoiceButton(
                '🚪',
                t(`ui.door${d}`),
                () => handlePick(d),
                'bg-gradient-to-b from-amber-600 to-amber-800 text-white font-bold rounded-xl min-h-[120px] shadow-lg'
              )
            )}
          </div>
        );
      case 'coin':
        return (
          <div className="flex gap-4">
            {renderEmojiChoiceButton('🪙', t('ui.heads'), () => handlePick('heads'), 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-2xl min-h-[100px] min-w-[120px] shadow-lg')}
            {renderEmojiChoiceButton('🪙', t('ui.tails'), () => handlePick('tails'), 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-2xl min-h-[100px] min-w-[120px] shadow-lg')}
          </div>
        );
      case 'card':
        return (
          <div className="grid grid-cols-5 gap-2 w-full max-w-md">
            {[0, 1, 2, 3, 4].map((i) =>
              renderChoiceButton(
                '🃏',
                () => handlePick(i),
                'bg-indigo-600 text-white font-bold rounded-lg min-h-[96px] min-w-[52px] text-6xl shadow-md flex items-center justify-center'
              )
            )}
          </div>
        );
      case 'box':
        return (
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {[1, 2, 3, 4].map((n) =>
              renderEmojiChoiceButton(
                '📦',
                String(n),
                () => handlePick(n),
                'bg-orange-500 text-white font-bold rounded-xl min-h-[100px] shadow-md',
                'text-4xl leading-none',
                'text-lg font-bold leading-tight'
              )
            )}
          </div>
        );
      case 'roulette':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-sm">
            {ROULETTE_COLORS.map((c) =>
              renderChoiceButton(
                t(`ui.color_${c}`),
                () => handlePick(c),
                `${COLOR_CLASS[c]} text-white font-bold rounded-xl min-h-[44px] shadow-md`
              )
            )}
          </div>
        );
      case 'number':
        return (
          <div className="grid grid-cols-5 gap-2 w-full max-w-md">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) =>
              renderChoiceButton(String(n), () => handlePick(n), 'bg-slate-700 text-white font-bold rounded-lg min-h-[44px] min-w-[44px] shadow-md')
            )}
          </div>
        );
      case 'gacha':
        return renderEmojiChoiceButton(
          '🎰',
          t('ui.pullLever'),
          () => handlePick('pull'),
          'w-full max-w-xs bg-yellow-500 text-gray-900 font-black rounded-2xl min-h-[100px] shadow-lg'
        );
      case 'slot':
        return renderEmojiChoiceButton(
          '🎲',
          t('ui.spin'),
          () => handlePick('spin'),
          'w-full max-w-xs bg-red-600 text-white font-black rounded-2xl min-h-[100px] shadow-lg'
        );
      case 'clover':
        return (
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {Array.from({ length: 6 }, (_, i) =>
              renderChoiceButton('🍀', () => handlePick(i), 'bg-emerald-600 text-white font-bold rounded-xl min-h-[88px] text-6xl shadow-md flex items-center justify-center')
            )}
          </div>
        );
      case 'coin100':
        return (
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            {renderEmojiChoiceButton('🪙', t('ui.heads'), () => handlePick('heads'), 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl min-h-[88px] shadow-md flex-1')}
            {renderEmojiChoiceButton('🪙', t('ui.tails'), () => handlePick('tails'), 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl min-h-[88px] shadow-md flex-1')}
            {renderEmojiChoiceButton('⚖️', t('ui.tie'), () => handlePick('tie'), 'bg-gradient-to-r from-slate-500 to-slate-700 text-white font-bold rounded-xl min-h-[88px] shadow-md flex-1')}
          </div>
        );
      default:
        return null;
    }
  };

  const renderRoundAnimation = (round: Phase3LuckSessionRound) => {
    switch (round.type) {
      case 'door':
        return (
          <div className="text-center space-y-3">
            <p className="text-8xl animate-pulse">🚪</p>
            <p className="text-lg font-bold text-amber-800">
              {t('game.openingDoor', { door: String(displayPick ?? '') })}
            </p>
          </div>
        );
      case 'coin':
        return <p className="text-8xl animate-spin">🪙</p>;
      case 'card':
        return <p className="text-8xl animate-bounce">🃏</p>;
      case 'box':
        return (
          <div className="text-center">
            <p className="text-8xl animate-pulse">📦</p>
            <p className="text-2xl font-bold mt-2">{String(displayPick ?? '')}</p>
          </div>
        );
      case 'roulette':
        return (
          <div className={`w-36 h-36 rounded-full ${COLOR_CLASS[(displayPick as Phase3LuckRouletteColor) ?? 'red']} animate-spin shadow-xl border-4 border-white`} />
        );
      case 'number':
        return <p className="text-8xl font-black text-purple-700 animate-pulse">{String(displayPick ?? '')}</p>;
      case 'gacha':
        return (
          <div className="text-center">
            <p className="text-8xl animate-bounce mb-3">🎰</p>
            <p className="text-xl font-bold">{round.meta.gachaGold ? t('game.gachaGold') : t('game.gachaNormal')}</p>
          </div>
        );
      case 'slot':
        return (
          <div className="flex gap-3 text-6xl font-black bg-white rounded-xl px-6 py-4 shadow-inner border-2 border-amber-200">
            {(slotSpin ?? SLOT_PLACEHOLDER).map((s, i) => (
              <span key={i} className="min-w-[1.2em] text-center">
                {s}
              </span>
            ))}
          </div>
        );
      case 'clover':
        return <p className="text-8xl animate-pulse">🍀</p>;
      case 'coin100': {
        const correct = resolveCoin100Answer(round.meta.coin100Heads ?? 50);
        const displayChoice = round.success ? correct : wrongCoin100Choice(correct);
        const displayLabel =
          displayChoice === 'heads'
            ? t('ui.heads')
            : displayChoice === 'tails'
              ? t('ui.tails')
              : t('ui.tie');
        return (
          <div className="text-center space-y-3">
            <p className="text-7xl animate-bounce">🪙×100</p>
            <p className="font-bold text-xl">
              {t('game.coin100Progress', {
                heads: round.meta.coin100Heads ?? coinFlipCount,
                tails: round.meta.coin100Tails ?? 100 - coinFlipCount,
              })}
            </p>
            <p className="text-sm text-gray-600">{t('game.coin100Choice', { choice: displayLabel })}</p>
          </div>
        );
      }
      default:
        return null;
    }
  };

  if (screen === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
          <p className="mt-4 text-lg text-gray-700">{tGlobal('mbti.loadingResults')}</p>
        </div>
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
        </div>
      </div>
    );
  }

  if (screen === 'popup') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {tGlobal('mbti.testCompleted')}</h2>
          <div className="mb-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.TEST_COMPLETE_POPUP} style={{ width: '100%', height: '250px' }} className="mx-auto w-full" />
          </div>
          <button
            onClick={handleShowResult}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg min-h-[44px]"
          >
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'playing' && currentRound) {
    const feedbackSuccess = roundPhase === 'feedback' && currentRound.success;
    const feedbackFail = roundPhase === 'feedback' && !currentRound.success;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
        <div className="shrink-0 px-4 py-3 flex justify-between items-center bg-white/80 shadow-sm">
          <span className="text-sm font-bold text-gray-700">
            {t('game.roundProgress', { current: roundIndex + 1, total: PHASE3_LUCK_GAME_ROUND_COUNT })}
          </span>
          <span className="text-sm font-bold text-purple-700">
            {t('game.score')}: {score}
            {t('ui.points')}
          </span>
        </div>

        <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4">
          <div className="flex-1 flex flex-col items-center justify-center py-6 min-h-[300px]">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-8">
              {t(`rounds.${roundKey}.prompt`)}
            </h2>

            {roundPhase === 'pick' && renderRoundChoices(currentRound)}

            {(roundPhase === 'animate' || (roundPhase === 'feedback' && currentRound.type === 'slot')) && (
              <div className="flex flex-col items-center justify-center min-h-[220px] w-full">
                {renderRoundAnimation(currentRound)}
              </div>
            )}

            {feedbackSuccess && (
              <div className="text-center animate-bounce mt-6">
                <p className="text-7xl mb-3">✅</p>
                <p className="text-xl font-bold text-green-600">{t(`rounds.${roundKey}.success`)}</p>
                <p className="text-base text-green-700 mt-2">+{PHASE3_LUCK_GAME_ROUND_SCORE}{t('ui.points')}</p>
              </div>
            )}

            {feedbackFail && (
              <div className="text-center mt-6">
                <p className="text-7xl mb-3">❌</p>
                <p className="text-xl font-bold text-red-600">{t(`rounds.${roundKey}.fail`)}</p>
              </div>
            )}
          </div>

          <div className="mt-6 w-full">
            <AdSensePlaceholder
              slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
              style={{ width: '100%', height: '250px' }}
              className="mx-auto"
              label={t('ui.adsenseTitle')}
            />
          </div>

          <div className="mt-8 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            {shareButtons}
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'result' && result) {
    const resultTitle = locText(result.title, locale);
    const resultDesc = locText(result.description, locale);
    const oneLiner = locText(result.oneLiner, locale);
    const luckGrade = locText(result.luckGrade, locale);
    const resultProb = locText(result.resultProbability, locale);
    const retryTip = result.retryTip ? locText(result.retryTip, locale) : '';
    const avoidToday = result.avoidToday ? locText(result.avoidToday, locale) : '';
    const canDoToday = result.canDoToday ? locText(result.canDoToday, locale) : '';
    const certify = result.certify ? locText(result.certify, locale) : '';

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
            <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {t('ui.gradeLabel', { grade: result.grade })} {resultTitle}
            </h1>
            {certify && <p className="text-sm font-semibold text-purple-700 mb-2">{certify}</p>}
            <p className="text-base text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{resultDesc}</p>
            <p className="text-sm font-semibold text-gray-800">{oneLiner}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t('ui.totalScore')}</span>
              <strong>
                {totalScore}
                {t('ui.points')}
              </strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.successCount')}</span>
              <strong>
                {successCount}/{PHASE3_LUCK_GAME_ROUND_COUNT}
                {t('ui.rounds')}
              </strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.luckGrade')}</span>
              <strong>{luckGrade}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.resultProbability')}</span>
              <strong>{resultProb}</strong>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>{t('ui.percentileEstimate')}</span>
              <strong>{t('ui.topPercent', { pct: percentile })}</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <h3 className="font-bold text-base mb-3 text-left">{t('ui.roundGridTitle')}</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {roundOutcomes.map((ok, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center rounded-lg py-2 text-sm font-bold min-h-[44px] ${
                    ok ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  <span>{ok ? '✅' : '❌'}</span>
                  <span className="text-[10px] mt-0.5">R{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {(avoidToday || canDoToday || retryTip) && (
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3 text-sm space-y-2 text-left">
              {avoidToday && (
                <p>
                  <span className="font-bold">{t('ui.avoidToday')}: </span>
                  {avoidToday}
                </p>
              )}
              {canDoToday && (
                <p>
                  <span className="font-bold">{t('ui.canDoToday')}: </span>
                  {canDoToday}
                </p>
              )}
              {retryTip && (
                <p>
                  <span className="font-bold">{t('ui.retryTip')}: </span>
                  {retryTip}
                </p>
              )}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3 text-sm space-y-1">
            <p>
              {t('ui.todayBest')}: {bestScores.todayBest}
              {t('ui.points')} / {t('ui.allTimeBest')}: {bestScores.allTimeBest}
              {t('ui.points')}
            </p>
            <p>{t('ui.attemptsToday', { count: bestScores.attemptsToday })}</p>
          </div>

          <div className="mt-8 mb-6 px-4">
            <button
              onClick={handleShareResult}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3 min-h-[44px]"
            >
              <Share2 size={20} />
              {t('ui.shareResult')}
            </button>
          </div>

          <div className="my-6 px-4">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 px-4 mb-8">
            <button
              onClick={handleRetake}
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md min-h-[44px]"
            >
              {t('ui.retryBest')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md min-h-[44px] flex items-center justify-center"
            >
              {tGlobal('mbti.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareResultWithFriends')}</h2>
            {shareButtons}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('recommendations.similarTestsTop5')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {similarTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">{test.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Play size={12} />
                          {formatPlayCount(test.playCount, locale as Locale)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {popularTestsState.length > 0 && (
            <div className="mb-8">
              <div className="mb-6 px-4 w-full">
                <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5} style={{ width: '100%', height: '250px' }} className="mx-auto w-full" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('recommendations.popularTestsTop5')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {popularTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">{test.title}</h3>
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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[680/384] mb-3">
          <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" priority />
          {isLatestTest && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
              NEW
            </div>
          )}
          {badgeType === 'popular' && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
              {tGlobal('badges.popular')}
            </div>
          )}
          {badgeType === 'hot' && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
              HOT
            </div>
          )}
        </div>

        <div className="px-4">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>

          <div className="my-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label={t('ui.adsenseTitle')} />
          </div>

          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
            <p className="font-bold text-gray-800 text-lg">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p className="text-red-500 font-semibold">{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line5')}</p>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse min-h-[44px]"
            >
              {t('ui.startChallenge')}
            </button>
          </div>

          <p className="text-sm font-bold text-center mb-6 text-blue-500">
            {tGlobal('mbti.totalParticipants', { count: formatPlayCount(displayPlayCount, locale as Locale) })}
          </p>

          <div className="mb-8 text-center">
            <div className="max-w-[680px] mx-auto mb-4">
              <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON} style={{ width: '100%', height: '250px' }} className="mx-auto w-full" />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            {shareButtons}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {similarTestsState.map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">{test.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Play size={12} />
                          {formatPlayCount(test.playCount, locale as Locale)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <p className="sr-only">{description}</p>
        </div>
      </div>
    </div>
  );
}
