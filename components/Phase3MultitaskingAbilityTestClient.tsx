'use client';

import { useState, useEffect, useRef, useCallback, type CSSProperties, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
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
  Phase3MultitaskingAbilityResult,
  calculatePhase3MultitaskingAbilityResult,
  getPhase3MultitaskingAbilityResultByType,
  scoreRound1,
  scoreRound2,
  scoreRound3,
  scoreRound4,
  scoreRound5,
  R2_TIMEOUT_MS,
  R2_ROUND_SEC,
  R3_SHAPE_COUNT,
  R3_SHAPE_TIMEOUT_MS,
  R3_MEMORY_MS,
  R4_COLOR_COUNT,
  R4_MATH_COUNT,
  R4_PATTERN_COUNT,
  R4_TIMEOUT_MS,
  R4_ROUND_SEC,
  R5_TASK_COUNT,
  R5_TIMEOUT_MS,
  R5_ROUND_SEC,
} from '@/lib/phase3MultitaskingAbilityData';

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

type Screen =
  | 'intro'
  | 'countdown'
  | 'playing'
  | 'feedback'
  | 'paused'
  | 'loading'
  | 'popup'
  | 'result';

type RoundNum = 1 | 2 | 3 | 4 | 5;
type ColorKey = 'red' | 'blue' | 'green' | 'yellow';
type ShapeKind = 'circle' | 'triangle' | 'square';

const COLOR_HEX: Record<ColorKey, string> = {
  red: '#EF4444',
  blue: '#3B82F6',
  green: '#22C55E',
  yellow: '#EAB308',
};
const COLOR_KEYS: ColorKey[] = ['red', 'blue', 'green', 'yellow'];
const CORAL = '#FF6B6B';

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function locText(map: Record<string, string>, locale: string): string {
  return map[locale] || map.ko || Object.values(map)[0] || '';
}

export default function Phase3MultitaskingAbilityTestClient({
  locale,
  slug,
  title,
  description: _description,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3MultitaskingAbilityTest');
  const tGlobal = useTranslations();

  const [screen, setScreen] = useState<Screen>('intro');
  const [round, setRound] = useState<RoundNum>(1);
  const [countdownLabel, setCountdownLabel] = useState('3');
  const [feedbackScore, setFeedbackScore] = useState(0);
  const [feedbackExtra, setFeedbackExtra] = useState('');
  const [roundScores, setRoundScores] = useState<number[]>([0, 0, 0, 0, 0]);
  const [totalScore, setTotalScore] = useState(0);
  const [result, setResult] = useState<Phase3MultitaskingAbilityResult | null>(null);
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({
    slug,
    locale,
  });
  void _description;

  // Round 1
  const [r1Target, setR1Target] = useState<{
    id: number;
    x: number;
    y: number;
    spawnedAt: number;
  } | null>(null);
  const [r1Hits, setR1Hits] = useState(0);
  const [r1Done, setR1Done] = useState(0);
  const r1TimesRef = useRef<number[]>([]);
  const r1BaselineRef = useRef(400);
  const r1IndexRef = useRef(0);
  const r1ActiveIdRef = useRef(0);

  // Round 2
  const [r2Left, setR2Left] = useState<{ color: 'red' | 'blue'; spawnedAt: number; id: number } | null>(
    null
  );
  const [r2Right, setR2Right] = useState<{ n: number; spawnedAt: number; id: number } | null>(null);
  const [r2Hits, setR2Hits] = useState(0);
  const [r2Timer, setR2Timer] = useState(R2_ROUND_SEC);
  const r2TimesRef = useRef<number[]>([]);
  const r2LeftDoneRef = useRef(0);
  const r2RightDoneRef = useRef(0);
  const r2LeftIdRef = useRef(0);
  const r2RightIdRef = useRef(0);
  const r2HitsRef = useRef(0);

  // Round 3
  const [r3Phase, setR3Phase] = useState<'memory' | 'ready' | 'shapes' | 'recall'>('memory');
  const [r3Sequence, setR3Sequence] = useState<ColorKey[]>([]);
  const [r3Recall, setR3Recall] = useState<ColorKey[]>([]);
  const [r3Shape, setR3Shape] = useState<{
    id: number;
    kind: ShapeKind;
    x: number;
    y: number;
    size: number;
    spawnedAt: number;
  } | null>(null);
  const [r3ShapeHits, setR3ShapeHits] = useState(0);
  const r3ShapeTimesRef = useRef<number[]>([]);
  const r3ShapeIndexRef = useRef(0);
  const r3ShapeIdRef = useRef(0);
  const r3ShapeHitsRef = useRef(0);

  // Round 4
  const [r4Color, setR4Color] = useState<{ color: ColorKey; spawnedAt: number; id: number } | null>(
    null
  );
  const [r4Math, setR4Math] = useState<{
    a: number;
    b: number;
    answer: number;
    options: [number, number];
    spawnedAt: number;
    id: number;
  } | null>(null);
  const [r4Pattern, setR4Pattern] = useState<{
    cells: boolean[];
    next: boolean;
    options: [boolean, boolean];
    spawnedAt: number;
    id: number;
  } | null>(null);
  const [r4Hits, setR4Hits] = useState(0);
  const [r4Timer, setR4Timer] = useState(R4_ROUND_SEC);
  const r4HitsRef = useRef(0);
  const r4PerfectRef = useRef(0);
  const r4ZoneSetRef = useRef<Set<string>>(new Set());
  const r4ColorDoneRef = useRef(0);
  const r4MathDoneRef = useRef(0);
  const r4PatternDoneRef = useRef(0);
  const r4ColorIdRef = useRef(0);
  const r4MathIdRef = useRef(0);
  const r4PatternIdRef = useRef(0);

  // Round 5
  const [r5Tasks, setR5Tasks] = useState<
    Array<{
      id: number;
      kind: 'color' | 'odd' | 'circle';
      value?: string | number;
      spawnedAt: number;
      slot: 0 | 1 | 2;
    }>
  >([]);
  const [r5Float, setR5Float] = useState<string | null>(null);
  const [r5ComboText, setR5ComboText] = useState<string | null>(null);
  const [r5Timer, setR5Timer] = useState(R5_ROUND_SEC);
  const [r5Bg, setR5Bg] = useState(0);
  const [r5NetLive, setR5NetLive] = useState(0);
  const r5NetRef = useRef(0);
  const r5ComboBonusRef = useRef(0);
  const r5StreakRef = useRef(0);
  const r5SpawnedRef = useRef(0);
  const r5IdRef = useRef(0);
  const r5TasksRef = useRef(r5Tasks);

  interface ImpactFx {
    id: number;
    x: number;
    y: number;
    kind: 'hit' | 'miss';
    scoreText: string;
  }
  const [impacts, setImpacts] = useState<ImpactFx[]>([]);
  const [flashHit, setFlashHit] = useState(false);
  const [flashMiss, setFlashMiss] = useState(false);
  const [screenShake, setScreenShake] = useState(false);
  const impactIdRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const roundEndedRef = useRef(false);
  const lastActionRef = useRef(0);
  const triggerHitFeelRef = useRef<(
    isHit: boolean,
    clientX?: number,
    clientY?: number,
    scoreText?: string
  ) => void>(() => {});

  const fallbackXY = () => ({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight * 0.45 : 0,
  });

  /** 버튼/타깃 기준 좌표 우선 — pointer 좌표가 빠지면 화면 중앙으로 떨어지는 문제 방지 */
  const hitXY = useCallback((
    e?: React.SyntheticEvent | React.MouseEvent | React.TouchEvent | React.PointerEvent,
    fallbackEl?: HTMLElement | null
  ) => {
    if (e && 'currentTarget' in e && e.currentTarget instanceof HTMLElement) {
      const r = e.currentTarget.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }
    }
    if (fallbackEl) {
      const r = fallbackEl.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }
    }
    if (!e) return fallbackXY();
    if ('changedTouches' in e) {
      const t = (e as React.TouchEvent).changedTouches?.[0];
      if (t) return { x: t.clientX, y: t.clientY };
    }
    const ne = e as {
      clientX?: number;
      clientY?: number;
      nativeEvent?: { clientX?: number; clientY?: number };
    };
    const cx = typeof ne.clientX === 'number' ? ne.clientX : ne.nativeEvent?.clientX;
    const cy = typeof ne.clientY === 'number' ? ne.clientY : ne.nativeEvent?.clientY;
    if (typeof cx === 'number' && typeof cy === 'number') return { x: cx, y: cy };
    return fallbackXY();
  }, []);

  const pointerXY = useCallback(
    (e?: React.SyntheticEvent | React.MouseEvent | React.TouchEvent | React.PointerEvent) =>
      hitXY(e),
    [hitXY]
  );

  /** 터치+클릭 이중 입력 / 연타 방지 */
  const guardAction = () => {
    const now = performance.now();
    if (now - lastActionRef.current < 260) return false;
    lastActionRef.current = now;
    return true;
  };

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const pauseAtRef = useRef(0);
  const wasPlayingRef = useRef(false);
  const roundRef = useRef<RoundNum>(1);
  const screenRef = useRef<Screen>('intro');

  useEffect(() => {
    r5TasksRef.current = r5Tasks;
  }, [r5Tasks]);
  useEffect(() => {
    roundRef.current = round;
  }, [round]);
  useEffect(() => {
    screenRef.current = screen;
  }, [screen]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    timersRef.current = [];
    intervalsRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const scheduleInterval = useCallback((fn: () => void, ms: number) => {
    const id = setInterval(fn, ms);
    intervalsRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    incrementPlayCount(slug).catch(console.error);
    setDisplayPlayCount((p) => p + 1);
  }, [slug]);

  // 진행 중 헤더/푸터·스크롤 고정 (깜박임·출렁임 방지)
  useEffect(() => {
    const lock =
      screen === 'playing' ||
      screen === 'countdown' ||
      screen === 'feedback' ||
      screen === 'paused';
    if (!lock) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.classList.add('p3-reaction-game-active');

    const preventTouchMove = (e: TouchEvent) => {
      const el = e.target as Element | null;
      if (el?.closest?.('[data-p3-mt-overlay]')) return;
      e.preventDefault();
    };
    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;
      body.classList.remove('p3-reaction-game-active');
      document.removeEventListener('touchmove', preventTouchMove);
      window.scrollTo(0, scrollY);
    };
  }, [screen]);

  const vibrate = (pattern: number | number[]) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(pattern);
    } catch {
      /* ignore */
    }
  };

  const spawnImpact = useCallback((x: number, y: number, kind: 'hit' | 'miss', scoreText: string) => {
    const id = ++impactIdRef.current;
    setImpacts((prev) => [...prev.slice(-6), { id, x, y, kind, scoreText }]);
    setTimeout(() => {
      setImpacts((prev) => prev.filter((fx) => fx.id !== id));
    }, 500);
  }, []);

  const triggerHitFeel = useCallback(
    (isHit: boolean, clientX?: number, clientY?: number, scoreText = '') => {
      const cx = clientX ?? window.innerWidth / 2;
      const cy = clientY ?? window.innerHeight * 0.45;
      spawnImpact(cx, cy, isHit ? 'hit' : 'miss', scoreText || (isHit ? '+1' : 'MISS'));
      if (isHit) {
        vibrate([8, 24, 8]);
        setFlashHit(true);
        setTimeout(() => setFlashHit(false), 280);
      } else {
        vibrate([40, 30, 40]);
        setFlashMiss(true);
        setScreenShake(true);
        setTimeout(() => setFlashMiss(false), 280);
        setTimeout(() => setScreenShake(false), 280);
      }
    },
    [spawnImpact]
  );
  triggerHitFeelRef.current = triggerHitFeel;

  useEffect(() => {
    if (screen === 'loading' || screen === 'popup' || screen === 'result') {
      setTimeout(() => {
        try {
          safeLoadAdSense();
        } catch (e) {
          console.error(e);
        }
      }, 100);
    }
  }, [screen]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const finishAll = useCallback(
    (scores: number[]) => {
      const total = scores.reduce((a, b) => a + b, 0);
      setTotalScore(total);
      const type = calculatePhase3MultitaskingAbilityResult(total);
      const res = getPhase3MultitaskingAbilityResultByType(type) || null;
      setResult(res);
      setScreen('loading');
      schedule(() => setScreen('popup'), 2200);
    },
    [schedule]
  );

  const showFeedback = useCallback(
    (r: RoundNum, score: number, extra: string, next: () => void) => {
      setFeedbackScore(Math.round(score * 10) / 10);
      setFeedbackExtra(extra);
      setScreen('feedback');
      schedule(next, 1800);
    },
    [schedule]
  );

  // ---------- Round 1 ----------
  const spawnR1 = useCallback(() => {
    if (roundEndedRef.current || r1IndexRef.current >= 10) return;
    const id = ++r1ActiveIdRef.current;
    const spawnedAt = performance.now();
    // 64px 원이 화면 밖으로 나가지 않도록 여유 확보
    setR1Target({
      id,
      x: rand(6, 72),
      y: rand(18, 68),
      spawnedAt,
    });
    schedule(() => {
      if (roundEndedRef.current) return;
      if (r1ActiveIdRef.current === id) {
        triggerHitFeelRef.current(false, undefined, undefined, 'TIME');
        setR1Target(null);
        r1IndexRef.current += 1;
        setR1Done(r1IndexRef.current);
        if (r1IndexRef.current >= 10) {
          endRound1();
        } else {
          schedule(() => spawnR1(), rand(500, 1500));
        }
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule]);

  const endRound1 = useCallback(() => {
    if (roundEndedRef.current) return;
    roundEndedRef.current = true;
    clearTimers();
    setR1Target(null);
    const times = r1TimesRef.current;
    const hits = times.length;
    const avg = hits ? times.reduce((a, b) => a + b, 0) / hits : 999;
    r1BaselineRef.current = avg;
    const score = scoreRound1(hits, avg);
    setRoundScores((prev) => {
      const next = [...prev];
      next[0] = score;
      return next;
    });
    showFeedback(1, score, t('game.r1Feedback', { ms: Math.round(avg) }), () => {
      setRound(2);
      startCountdown(2);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimers, showFeedback, t]);

  const hitR1 = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      if (roundEndedRef.current || !r1Target) return;
      if (!guardAction()) return;
      const ms = performance.now() - r1Target.spawnedAt;
      const { x, y } = pointerXY(e);
      triggerHitFeel(true, x, y, `+${Math.round(ms)}ms`);
      r1TimesRef.current.push(ms);
      setR1Hits((h) => h + 1);
      r1ActiveIdRef.current += 1;
      setR1Target(null);
      r1IndexRef.current += 1;
      setR1Done(r1IndexRef.current);
      if (r1IndexRef.current >= 10) {
        endRound1();
      } else {
        schedule(() => spawnR1(), rand(500, 1500));
      }
    },
    [r1Target, endRound1, schedule, spawnR1, triggerHitFeel, pointerXY]
  );

  const missR1Bg = (e: React.MouseEvent | React.TouchEvent) => {
    if (roundEndedRef.current || !r1Target) return;
    const target = e.target as HTMLElement;
    if (target.closest('[data-mt-target]')) return;
    if (!guardAction()) return;
    const { x, y } = pointerXY(e);
    triggerHitFeel(false, x, y, 'MISS');
  };

  // ---------- Round 2 ----------
  const endRound2 = useCallback(() => {
    if (roundEndedRef.current) return;
    roundEndedRef.current = true;
    clearTimers();
    setR2Left(null);
    setR2Right(null);
    const times = r2TimesRef.current;
    const avg = times.length ? times.reduce((a, b) => a + b, 0) / times.length : 999;
    const score = scoreRound2(r2HitsRef.current, r1BaselineRef.current, avg);
    setRoundScores((prev) => {
      const next = [...prev];
      next[1] = score;
      return next;
    });
    showFeedback(2, score, '', () => {
      setRound(3);
      startCountdown(3);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimers, showFeedback]);

  const spawnR2Left = useCallback(() => {
    if (roundEndedRef.current || r2LeftDoneRef.current >= 10) return;
    const id = ++r2LeftIdRef.current;
    setR2Left({ color: pick(['red', 'blue']), spawnedAt: performance.now(), id });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR2Left((cur) => {
        if (cur && cur.id === id) {
          const el =
            (typeof document !== 'undefined' &&
              (document.querySelector('[data-r2-btn="red"]') as HTMLElement | null)) ||
            null;
          const { x, y } = hitXY(undefined, el);
          triggerHitFeelRef.current(false, x, y, 'TIME');
          r2LeftDoneRef.current += 1;
          if (r2LeftDoneRef.current + r2RightDoneRef.current >= 20) endRound2();
          else schedule(() => spawnR2Left(), rand(600, 1400));
          return null;
        }
        return cur;
      });
    }, R2_TIMEOUT_MS);
  }, [schedule, endRound2, hitXY]);

  const spawnR2Right = useCallback(() => {
    if (roundEndedRef.current || r2RightDoneRef.current >= 10) return;
    const id = ++r2RightIdRef.current;
    setR2Right({ n: 1 + Math.floor(Math.random() * 9), spawnedAt: performance.now(), id });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR2Right((cur) => {
        if (cur && cur.id === id) {
          const el =
            (typeof document !== 'undefined' &&
              (document.querySelector('[data-r2-btn="odd"]') as HTMLElement | null)) ||
            null;
          const { x, y } = hitXY(undefined, el);
          triggerHitFeelRef.current(false, x, y, 'TIME');
          r2RightDoneRef.current += 1;
          if (r2LeftDoneRef.current + r2RightDoneRef.current >= 20) endRound2();
          else schedule(() => spawnR2Right(), rand(600, 1400));
          return null;
        }
        return cur;
      });
    }, R2_TIMEOUT_MS);
  }, [schedule, endRound2, hitXY]);

  const answerR2Left = (
    color: 'red' | 'blue',
    e?: React.MouseEvent | React.TouchEvent | React.PointerEvent
  ) => {
    if (roundEndedRef.current || !r2Left) return;
    if (!guardAction()) return;
    const ok = r2Left.color === color;
    const { x, y } = hitXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    if (ok) {
      r2TimesRef.current.push(performance.now() - r2Left.spawnedAt);
      r2HitsRef.current += 1;
      setR2Hits(r2HitsRef.current);
    }
    r2LeftIdRef.current += 1;
    r2LeftDoneRef.current += 1;
    setR2Left(null);
    if (r2LeftDoneRef.current + r2RightDoneRef.current >= 20) endRound2();
    else schedule(() => spawnR2Left(), rand(450, 1100));
  };

  const answerR2Right = (
    odd: boolean,
    e?: React.MouseEvent | React.TouchEvent | React.PointerEvent
  ) => {
    if (roundEndedRef.current || !r2Right) return;
    if (!guardAction()) return;
    const isOdd = r2Right.n % 2 === 1;
    const ok = odd === isOdd;
    const { x, y } = hitXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    if (ok) {
      r2TimesRef.current.push(performance.now() - r2Right.spawnedAt);
      r2HitsRef.current += 1;
      setR2Hits(r2HitsRef.current);
    }
    r2RightIdRef.current += 1;
    r2RightDoneRef.current += 1;
    setR2Right(null);
    if (r2LeftDoneRef.current + r2RightDoneRef.current >= 20) endRound2();
    else schedule(() => spawnR2Right(), rand(450, 1100));
  };

  // ---------- Round 3 ----------
  const endRound3 = useCallback(
    (memoryHits: number) => {
      if (roundEndedRef.current) return;
      roundEndedRef.current = true;
      clearTimers();
      setR3Shape(null);
      const times = r3ShapeTimesRef.current;
      const avg = times.length ? times.reduce((a, b) => a + b, 0) / times.length : 999;
      const score = scoreRound3(memoryHits, r3ShapeHitsRef.current, avg);
      setRoundScores((prev) => {
        const next = [...prev];
        next[2] = score;
        return next;
      });
      showFeedback(3, score, '', () => {
        setRound(4);
        startCountdown(4);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [clearTimers, showFeedback]
  );

  const spawnR3Shape = useCallback(() => {
    if (roundEndedRef.current) return;
    if (r3ShapeIndexRef.current >= R3_SHAPE_COUNT) {
      setR3Phase('recall');
      setR3Recall([]);
      return;
    }
    const id = ++r3ShapeIdRef.current;
    setR3Shape({
      id,
      kind: pick(['circle', 'triangle', 'square']),
      x: rand(8, 68),
      y: rand(20, 62),
      size: rand(52, 68),
      spawnedAt: performance.now(),
    });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR3Shape((cur) => {
        if (cur && cur.id === id) {
          triggerHitFeelRef.current(false, undefined, undefined, 'TIME');
          r3ShapeIndexRef.current += 1;
          if (r3ShapeIndexRef.current >= R3_SHAPE_COUNT) {
            setR3Phase('recall');
            setR3Recall([]);
            return null;
          }
          schedule(() => spawnR3Shape(), rand(800, 1500));
          return null;
        }
        return cur;
      });
    }, R3_SHAPE_TIMEOUT_MS);
  }, [schedule]);

  const hitR3Shape = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (roundEndedRef.current || !r3Shape) return;
    if (!guardAction()) return;
    const { x, y } = pointerXY(e);
    triggerHitFeel(true, x, y, '+1');
    r3ShapeTimesRef.current.push(performance.now() - r3Shape.spawnedAt);
    r3ShapeHitsRef.current += 1;
    setR3ShapeHits(r3ShapeHitsRef.current);
    r3ShapeIdRef.current += 1;
    r3ShapeIndexRef.current += 1;
    setR3Shape(null);
    if (r3ShapeIndexRef.current >= R3_SHAPE_COUNT) {
      setR3Phase('recall');
      setR3Recall([]);
    } else {
      schedule(() => spawnR3Shape(), rand(800, 1500));
    }
  };

  const pickRecall = (c: ColorKey, e?: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (roundEndedRef.current || r3Phase !== 'recall') return;
    if (r3Recall.length >= 5) return;
    if (!guardAction()) return;
    const idx = r3Recall.length;
    const ok = r3Sequence[idx] === c;
    const { x, y } = pointerXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    const next = [...r3Recall, c];
    setR3Recall(next);
    if (next.length >= 5) {
      let hits = 0;
      for (let i = 0; i < 5; i++) if (next[i] === r3Sequence[i]) hits++;
      // 마지막 칸이 채워진 게 보이도록 짧게 대기 후 종료
      schedule(() => endRound3(hits), 650);
    }
  };

  const slotCenter = (slot: 0 | 1 | 2) => {
    if (typeof document === 'undefined') {
      return { x: window.innerWidth / 2, y: window.innerHeight * 0.45 };
    }
    const el = document.querySelector(`[data-r5-slot="${slot}"]`) as HTMLElement | null;
    if (!el) return { x: window.innerWidth / 2, y: window.innerHeight * 0.45 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  // ---------- Round 4 ----------
  const markR4Miss = () => {
    r4ZoneSetRef.current.clear();
  };
  const markR4Hit = (zone: string) => {
    r4HitsRef.current += 1;
    setR4Hits(r4HitsRef.current);
    r4ZoneSetRef.current.add(zone);
    if (r4ZoneSetRef.current.size >= 3) {
      r4PerfectRef.current += 1;
      r4ZoneSetRef.current.clear();
    }
  };

  const endRound4 = useCallback(() => {
    if (roundEndedRef.current) return;
    roundEndedRef.current = true;
    clearTimers();
    setR4Color(null);
    setR4Math(null);
    setR4Pattern(null);
    const score = scoreRound4(r4HitsRef.current, r4PerfectRef.current);
    setRoundScores((prev) => {
      const next = [...prev];
      next[3] = score;
      return next;
    });
    showFeedback(4, score, '', () => {
      setRound(5);
      startCountdown(5);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimers, showFeedback]);

  const spawnR4Color = useCallback(() => {
    if (roundEndedRef.current || r4ColorDoneRef.current >= R4_COLOR_COUNT) return;
    const id = ++r4ColorIdRef.current;
    setR4Color({ color: pick(COLOR_KEYS), spawnedAt: performance.now(), id });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR4Color((cur) => {
        if (cur && cur.id === id) {
          triggerHitFeelRef.current(false, undefined, undefined, 'TIME');
          markR4Miss();
          r4ColorDoneRef.current += 1;
          if (
            r4ColorDoneRef.current >= R4_COLOR_COUNT &&
            r4MathDoneRef.current >= R4_MATH_COUNT &&
            r4PatternDoneRef.current >= R4_PATTERN_COUNT
          )
            endRound4();
          else schedule(() => spawnR4Color(), rand(700, 1500));
          return null;
        }
        return cur;
      });
    }, R4_TIMEOUT_MS);
  }, [schedule, endRound4]);

  const spawnR4Math = useCallback(() => {
    if (roundEndedRef.current || r4MathDoneRef.current >= R4_MATH_COUNT) return;
    const a = 1 + Math.floor(Math.random() * 9);
    const b = 1 + Math.floor(Math.random() * 9);
    const answer = a + b;
    let wrong = answer + (Math.random() < 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 3));
    if (wrong === answer || wrong < 0) wrong = answer + 2;
    const options: [number, number] =
      Math.random() < 0.5 ? [answer, wrong] : [wrong, answer];
    const id = ++r4MathIdRef.current;
    setR4Math({ a, b, answer, options, spawnedAt: performance.now(), id });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR4Math((cur) => {
        if (cur && cur.id === id) {
          triggerHitFeelRef.current(false, undefined, undefined, 'TIME');
          markR4Miss();
          r4MathDoneRef.current += 1;
          if (
            r4ColorDoneRef.current >= R4_COLOR_COUNT &&
            r4MathDoneRef.current >= R4_MATH_COUNT &&
            r4PatternDoneRef.current >= R4_PATTERN_COUNT
          )
            endRound4();
          else schedule(() => spawnR4Math(), rand(700, 1500));
          return null;
        }
        return cur;
      });
    }, R4_TIMEOUT_MS);
  }, [schedule, endRound4]);

  const spawnR4Pattern = useCallback(() => {
    if (roundEndedRef.current || r4PatternDoneRef.current >= R4_PATTERN_COUNT) return;
    const start = Math.random() < 0.5;
    const cells = [start, !start, start];
    const next = !start;
    const options: [boolean, boolean] = Math.random() < 0.5 ? [next, start] : [start, next];
    const id = ++r4PatternIdRef.current;
    setR4Pattern({ cells, next, options, spawnedAt: performance.now(), id });
    schedule(() => {
      if (roundEndedRef.current) return;
      setR4Pattern((cur) => {
        if (cur && cur.id === id) {
          triggerHitFeelRef.current(false, undefined, undefined, 'TIME');
          markR4Miss();
          r4PatternDoneRef.current += 1;
          if (
            r4ColorDoneRef.current >= R4_COLOR_COUNT &&
            r4MathDoneRef.current >= R4_MATH_COUNT &&
            r4PatternDoneRef.current >= R4_PATTERN_COUNT
          )
            endRound4();
          else schedule(() => spawnR4Pattern(), rand(700, 1500));
          return null;
        }
        return cur;
      });
    }, R4_TIMEOUT_MS);
  }, [schedule, endRound4]);

  const answerR4Color = (c: ColorKey, e?: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (roundEndedRef.current || !r4Color) return;
    if (!guardAction()) return;
    const ok = r4Color.color === c;
    const { x, y } = hitXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    if (ok) markR4Hit('color');
    else markR4Miss();
    r4ColorIdRef.current += 1;
    r4ColorDoneRef.current += 1;
    setR4Color(null);
    if (
      r4ColorDoneRef.current >= R4_COLOR_COUNT &&
      r4MathDoneRef.current >= R4_MATH_COUNT &&
      r4PatternDoneRef.current >= R4_PATTERN_COUNT
    )
      endRound4();
    else schedule(() => spawnR4Color(), rand(550, 1200));
  };

  const answerR4Math = (n: number, e?: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (roundEndedRef.current || !r4Math) return;
    if (!guardAction()) return;
    const ok = n === r4Math.answer;
    const { x, y } = hitXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    if (ok) markR4Hit('math');
    else markR4Miss();
    r4MathIdRef.current += 1;
    r4MathDoneRef.current += 1;
    setR4Math(null);
    if (
      r4ColorDoneRef.current >= R4_COLOR_COUNT &&
      r4MathDoneRef.current >= R4_MATH_COUNT &&
      r4PatternDoneRef.current >= R4_PATTERN_COUNT
    )
      endRound4();
    else schedule(() => spawnR4Math(), rand(550, 1200));
  };

  const answerR4Pattern = (v: boolean, e?: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (roundEndedRef.current || !r4Pattern) return;
    if (!guardAction()) return;
    const ok = v === r4Pattern.next;
    const { x, y } = hitXY(e);
    triggerHitFeel(ok, x, y, ok ? '+1' : 'MISS');
    if (ok) markR4Hit('pattern');
    else markR4Miss();
    r4PatternIdRef.current += 1;
    r4PatternDoneRef.current += 1;
    setR4Pattern(null);
    if (
      r4ColorDoneRef.current >= R4_COLOR_COUNT &&
      r4MathDoneRef.current >= R4_MATH_COUNT &&
      r4PatternDoneRef.current >= R4_PATTERN_COUNT
    )
      endRound4();
    else schedule(() => spawnR4Pattern(), rand(550, 1200));
  };

  // ---------- Round 5 ----------
  const endRound5 = useCallback(() => {
    if (roundEndedRef.current) return;
    roundEndedRef.current = true;
    clearTimers();
    setR5Tasks([]);
    const score = scoreRound5(r5NetRef.current, r5ComboBonusRef.current);
    setRoundScores((prev) => {
      const next = [...prev];
      next[4] = score;
      const final = next;
      showFeedback(5, score, '', () => finishAll(final));
      return next;
    });
  }, [clearTimers, showFeedback, finishAll]);

  const removeR5 = (id: number, correct: boolean, clientX?: number, clientY?: number) => {
    setR5Tasks((prev) => {
      if (!prev.some((x) => x.id === id)) return prev;
      return prev.filter((x) => x.id !== id);
    });
    if (correct) {
      r5NetRef.current = Math.min(R5_TASK_COUNT, r5NetRef.current + 1);
      setR5NetLive(r5NetRef.current);
      r5StreakRef.current += 1;
      triggerHitFeel(true, clientX, clientY, '+1');
      setR5Float('✓ +1');
      if (r5StreakRef.current === 3) {
        r5ComboBonusRef.current = Math.min(5, r5ComboBonusRef.current + 0.5);
        setR5ComboText('COMBO! ×3');
      } else if (r5StreakRef.current === 5) {
        r5ComboBonusRef.current = Math.min(5, r5ComboBonusRef.current + 1);
        setR5ComboText('COMBO! ×5');
      } else if (r5StreakRef.current > 5 && r5StreakRef.current % 3 === 0) {
        r5ComboBonusRef.current = Math.min(5, r5ComboBonusRef.current + 0.5);
        setR5ComboText(`COMBO! ×${r5StreakRef.current}`);
      }
      schedule(() => setR5Float(null), 500);
      schedule(() => setR5ComboText(null), 800);
    } else {
      r5NetRef.current = Math.max(0, r5NetRef.current - 0.5);
      setR5NetLive(r5NetRef.current);
      r5StreakRef.current = 0;
      triggerHitFeel(false, clientX, clientY, '-0.5');
      setR5Float('✗ -0.5');
      schedule(() => setR5Float(null), 500);
    }
  };

  const spawnR5Batch = useCallback(() => {
    if (roundEndedRef.current || r5SpawnedRef.current >= R5_TASK_COUNT) return;
    const occupied = new Set(r5TasksRef.current.map((t) => t.slot));
    const freeSlots = ([0, 1, 2] as const).filter((s) => !occupied.has(s));
    if (freeSlots.length === 0) {
      schedule(() => spawnR5Batch(), 450);
      return;
    }
    // 동시 출현 비중 상향: 자주 2개, 가끔 3개(슬롯 가득)
    const maxConcurrent = Math.min(3, freeSlots.length);
    let want = 1;
    if (maxConcurrent >= 2 && Math.random() < 0.55) want = 2;
    if (maxConcurrent >= 3 && Math.random() < 0.28) want = 3;
    const count = Math.min(want, maxConcurrent, R5_TASK_COUNT - r5SpawnedRef.current);
    const batch: typeof r5Tasks = [];
    for (let i = 0; i < count; i++) {
      const id = ++r5IdRef.current;
      r5SpawnedRef.current += 1;
      const kind = pick(['color', 'odd', 'circle'] as const);
      const slot = freeSlots[i];
      const item = {
        id,
        kind,
        value:
          kind === 'color'
            ? pick(['red', 'blue'] as const)
            : kind === 'odd'
              ? 1 + Math.floor(Math.random() * 9)
              : undefined,
        spawnedAt: performance.now(),
        slot,
      };
      batch.push(item);
      schedule(() => {
        if (roundEndedRef.current) return;
        setR5Tasks((prev) => {
          if (!prev.some((p) => p.id === id)) return prev;
          const { x, y } = slotCenter(slot);
          triggerHitFeelRef.current(false, x, y, 'TIME');
          r5NetRef.current = Math.max(0, r5NetRef.current - 0.5);
          setR5NetLive(r5NetRef.current);
          r5StreakRef.current = 0;
          setR5Float('✗ -0.5');
          schedule(() => setR5Float(null), 500);
          return prev.filter((p) => p.id !== id);
        });
      }, R5_TIMEOUT_MS);
    }
    setR5Tasks((prev) => [...prev, ...batch]);
    if (r5SpawnedRef.current < R5_TASK_COUNT) {
      schedule(() => spawnR5Batch(), rand(700, 1400));
    } else {
      schedule(() => {
        if (roundEndedRef.current) return;
        if (r5TasksRef.current.length === 0) endRound5();
        else schedule(() => endRound5(), 1400);
      }, R5_TIMEOUT_MS + 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule, endRound5]);

  const answerR5 = (
    id: number,
    payload: string | number | boolean,
    e?: React.MouseEvent | React.TouchEvent | React.PointerEvent
  ) => {
    if (roundEndedRef.current) return;
    if (!guardAction()) return;
    const task = r5Tasks.find((x) => x.id === id);
    if (!task) return;
    let ok = false;
    if (task.kind === 'color') ok = payload === task.value;
    else if (task.kind === 'odd') ok = (Number(task.value) % 2 === 1) === Boolean(payload);
    else if (task.kind === 'circle') ok = payload === true;
    // 버튼/슬롯 위치에서 타격감 (가운데 고정 금지)
    let x: number;
    let y: number;
    if (e && 'currentTarget' in e && e.currentTarget instanceof HTMLElement) {
      const r = e.currentTarget.getBoundingClientRect();
      if (r.width > 0) {
        x = r.left + r.width / 2;
        y = r.top + r.height / 2;
      } else {
        const c = slotCenter(task.slot);
        x = c.x;
        y = c.y;
      }
    } else {
      const c = slotCenter(task.slot);
      x = c.x;
      y = c.y;
    }
    removeR5(id, ok, x, y);
    if (
      r5SpawnedRef.current >= R5_TASK_COUNT &&
      r5TasksRef.current.filter((t) => t.id !== id).length === 0
    ) {
      schedule(() => endRound5(), 400);
    }
  };

  // ---------- Start round engines ----------
  const beginRound = useCallback(
    (r: RoundNum) => {
      clearTimers();
      roundEndedRef.current = false;
      lastActionRef.current = 0;
      setScreen('playing');
      wasPlayingRef.current = true;

      if (r === 1) {
        r1TimesRef.current = [];
        r1IndexRef.current = 0;
        r1ActiveIdRef.current = 0;
        setR1Hits(0);
        setR1Done(0);
        setR1Target(null);
        schedule(() => spawnR1(), 300);
      } else if (r === 2) {
        r2TimesRef.current = [];
        r2LeftDoneRef.current = 0;
        r2RightDoneRef.current = 0;
        r2HitsRef.current = 0;
        setR2Hits(0);
        setR2Timer(R2_ROUND_SEC);
        setR2Left(null);
        setR2Right(null);
        schedule(() => spawnR2Left(), 200);
        schedule(() => spawnR2Right(), 500);
        const start = performance.now();
        scheduleInterval(() => {
          const left = Math.max(0, R2_ROUND_SEC - (performance.now() - start) / 1000);
          setR2Timer(left);
          if (left <= 0) endRound2();
        }, 100);
      } else if (r === 3) {
        const seq: ColorKey[] = Array.from({ length: 5 }, () => pick(COLOR_KEYS));
        setR3Sequence(seq);
        setR3Recall([]);
        setR3Phase('memory');
        setR3Shape(null);
        r3ShapeTimesRef.current = [];
        r3ShapeIndexRef.current = 0;
        r3ShapeHitsRef.current = 0;
        setR3ShapeHits(0);
        schedule(() => {
          setR3Phase('ready');
          schedule(() => {
            setR3Phase('shapes');
            spawnR3Shape();
          }, 500);
        }, R3_MEMORY_MS);
      } else if (r === 4) {
        r4HitsRef.current = 0;
        r4PerfectRef.current = 0;
        r4ZoneSetRef.current.clear();
        r4ColorDoneRef.current = 0;
        r4MathDoneRef.current = 0;
        r4PatternDoneRef.current = 0;
        setR4Hits(0);
        setR4Timer(R4_ROUND_SEC);
        setR4Color(null);
        setR4Math(null);
        setR4Pattern(null);
        schedule(() => spawnR4Color(), 200);
        schedule(() => spawnR4Math(), 600);
        schedule(() => spawnR4Pattern(), 1000);
        const start = performance.now();
        scheduleInterval(() => {
          const left = Math.max(0, R4_ROUND_SEC - (performance.now() - start) / 1000);
          setR4Timer(left);
          if (left <= 0) endRound4();
        }, 100);
      } else if (r === 5) {
        r5NetRef.current = 0;
        r5ComboBonusRef.current = 0;
        r5StreakRef.current = 0;
        r5SpawnedRef.current = 0;
        setR5NetLive(0);
        setR5Tasks([]);
        setR5Float(null);
        setR5ComboText(null);
        setR5Timer(R5_ROUND_SEC);
        setR5Bg(0);
        schedule(() => spawnR5Batch(), 300);
        const start = performance.now();
        scheduleInterval(() => {
          const elapsed = (performance.now() - start) / 1000;
          const left = Math.max(0, R5_ROUND_SEC - elapsed);
          setR5Timer(left);
          setR5Bg(Math.min(1, elapsed / R5_ROUND_SEC));
          if (left <= 0) endRound5();
        }, 100);
      }
    },
    [
      clearTimers,
      schedule,
      scheduleInterval,
      spawnR1,
      spawnR2Left,
      spawnR2Right,
      endRound2,
      spawnR3Shape,
      spawnR4Color,
      spawnR4Math,
      spawnR4Pattern,
      endRound4,
      spawnR5Batch,
      endRound5,
    ]
  );

  const startCountdown = useCallback(
    (r: RoundNum) => {
      clearTimers();
      setRound(r);
      setScreen('countdown');
      const steps = ['3', '2', '1', 'GO!'];
      let i = 0;
      setCountdownLabel(steps[0]);
      const tick = () => {
        i += 1;
        if (i >= steps.length) {
          beginRound(r);
          return;
        }
        setCountdownLabel(steps[i]);
        schedule(tick, 800);
      };
      schedule(tick, 800);
    },
    [clearTimers, schedule, beginRound]
  );

  // visibility만 사용 — mobile blur(주소창 등)로 인한 오탐 일시정지 방지
  useEffect(() => {
    const onVis = () => {
      const s = screenRef.current;
      if (s !== 'playing' && s !== 'paused') return;
      if (document.hidden) {
        pauseAtRef.current = performance.now();
        clearTimers();
        setScreen('paused');
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [clearTimers]);

  const resumeFromPause = () => {
    if (screen !== 'paused') return;
    pauseAtRef.current = 0;
    beginRound(roundRef.current);
  };

  const handleStart = () => {
    setRoundScores([0, 0, 0, 0, 0]);
    setResult(null);
    setTotalScore(0);
    window.scrollTo(0, 0);
    startCountdown(1);
  };

  const handleShowResult = () => {
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearTimers();
    setScreen('intro');
    setResult(null);
    setRound(1);
    setRoundScores([0, 0, 0, 0, 0]);
  };

  const getShareText = (platform: 'default' | 'kakao' | 'wechat' | 'whatsapp' | 'telegram' | 'line') => {
    if (result) {
      const msg = locText(result.shareMessage, locale);
      return msg || t(`shareMessages.${platform}`, { type: locText(result.title, locale) });
    }
    const key =
      platform === 'default'
        ? 'startDefault'
        : (`start${platform.charAt(0).toUpperCase()}${platform.slice(1)}` as
            | 'startKakao'
            | 'startWechat'
            | 'startWhatsapp'
            | 'startTelegram'
            | 'startLine');
    return t(`shareMessages.${key}`);
  };

  const copyLink = () => {
    trackShareEvent('link copy', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    navigator.clipboard.writeText(window.location.href).then(
      () => alert(t('alerts.linkCopied')),
      () => alert(t('alerts.shareFailed'))
    );
  };

  const handleShareResult = async () => {
    if (!result) return;
    const shareText = `${getShareText('default')}\n\n${window.location.href}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url: window.location.href });
      } catch {
        copyLink();
      }
    } else copyLink();
  };

  const shareToKakao = () => {
    trackShareEvent('kakao', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '';
      if (kakaoKey) window.Kakao.init(kakaoKey);
    }
    if (!window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: getShareText('kakao'),
          imageUrl: thumbnail
            ? getThumbnailUrl(thumbnail)
            : 'https://quizoasis.com/default-thumbnail.jpg',
          link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [
          {
            title: t('ui.goToTest'),
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
          },
        ],
      });
    } catch {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    trackShareEvent('telegram', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(getShareText('telegram'))}`,
      '_blank'
    );
  };
  const shareToWeChat = () => {
    trackShareEvent('wechat', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    alert(t('alerts.wechatCopy'));
    copyLink();
  };
  const shareToLine = () => {
    trackShareEvent('line', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(getShareText('line'))}`,
      '_blank'
    );
  };
  const shareToWhatsApp = () => {
    trackShareEvent('whatsapp', getShareContentType(screen !== 'intro', screen === 'result'), slug);
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(getShareText('whatsapp') + ' ' + window.location.href)}`,
      '_blank'
    );
  };

  const liveHits =
    round === 1
      ? r1Hits
      : round === 2
        ? r2Hits
        : round === 3
          ? r3ShapeHits
          : round === 4
            ? r4Hits
            : r5NetLive;

  const liveTimer =
    round === 2 ? r2Timer : round === 4 ? r4Timer : round === 5 ? r5Timer : null;

  const ImpactLayer = () => (
    <>
      {impacts.map((fx) => (
        <div key={fx.id}>
          {fx.kind === 'hit' ? (
            <>
              <div className="p3-impact-ring" style={{ left: fx.x, top: fx.y }} />
              <div
                className="p3-impact-ring"
                style={{ left: fx.x, top: fx.y, animationDelay: '60ms', borderColor: '#4ade80' }}
              />
              <div className="p3-impact-hit" style={{ left: fx.x, top: fx.y }}>
                ✓
              </div>
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i / 6) * Math.PI * 2;
                const dist = 36;
                const style = {
                  left: fx.x,
                  top: fx.y,
                  background: i % 2 === 0 ? '#22c55e' : '#facc15',
                  ['--dx' as string]: `${Math.cos(angle) * dist}px`,
                  ['--dy' as string]: `${Math.sin(angle) * dist}px`,
                } as CSSProperties;
                return <div key={i} className="p3-impact-particle" style={style} />;
              })}
            </>
          ) : (
            <>
              <div className="p3-impact-ring" style={{ left: fx.x, top: fx.y, borderColor: '#ef4444' }} />
              <div className="p3-impact-miss" style={{ left: fx.x, top: fx.y }}>
                ✕
              </div>
              {[0, 1, 2, 3].map((i) => {
                const angle = (i / 4) * Math.PI * 2 + 0.4;
                const dist = 28;
                const style = {
                  left: fx.x,
                  top: fx.y,
                  background: '#ef4444',
                  ['--dx' as string]: `${Math.cos(angle) * dist}px`,
                  ['--dy' as string]: `${Math.sin(angle) * dist}px`,
                } as CSSProperties;
                return <div key={i} className="p3-impact-particle" style={style} />;
              })}
            </>
          )}
          <div
            className="p3-impact-score"
            style={{ left: fx.x, top: fx.y, color: fx.kind === 'hit' ? '#16a34a' : '#dc2626' }}
          >
            {fx.scoreText}
          </div>
        </div>
      ))}
    </>
  );

  const PlayOverlay = ({
    children,
    tone = 'dark',
  }: {
    children: ReactNode;
    tone?: 'dark' | 'light' | 'pressure';
  }) => {
    if (!mounted) return null;
    const bg =
      tone === 'pressure'
        ? {
            background: `linear-gradient(180deg, #0f172a 0%, rgb(${Math.round(
              80 + r5Bg * 100
            )}, ${Math.round(20 + (1 - r5Bg) * 30)}, ${Math.round(30 + (1 - r5Bg) * 40)}) 100%)`,
          }
        : undefined;
    const toneClass =
      tone === 'light'
        ? 'bg-slate-100 text-slate-900'
        : tone === 'pressure'
          ? 'text-white'
          : 'bg-slate-950 text-white';

    return createPortal(
      <div
        data-p3-mt-overlay
        className={`fixed inset-0 z-[200] select-none touch-none overflow-hidden overscroll-none ${toneClass} ${
          flashHit ? 'p3-play-hit-flash' : ''
        } ${flashMiss ? 'p3-play-miss-flash' : ''}`}
        style={{
          width: '100%',
          height: '100dvh',
          maxHeight: '100dvh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...bg,
        }}
      >
        <ImpactLayer />
        <div
          className={`absolute inset-0 flex flex-col pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(0.5rem,env(safe-area-inset-bottom))] pl-[max(0.5rem,env(safe-area-inset-left))] pr-[max(0.5rem,env(safe-area-inset-right))] touch-manipulation ${
            screenShake ? 'p3-play-shake' : ''
          }`}
        >
          {/* HUD */}
          <div className="shrink-0 px-3 pt-2 pb-1">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="text-[11px] font-bold tracking-widest uppercase opacity-70">
                ROUND {round}/5
              </div>
              <div className="text-xs font-semibold opacity-80 truncate max-w-[45%]">
                {t(`game.round${round}Title`)}
              </div>
              {liveTimer !== null ? (
                <div
                  className={`font-black tabular-nums text-lg min-w-[3.5rem] text-right ${
                    liveTimer <= 3 ? 'text-red-400 animate-pulse' : ''
                  }`}
                >
                  {liveTimer.toFixed(1)}s
                </div>
              ) : (
                <div className="font-black tabular-nums text-sm min-w-[3.5rem] text-right opacity-80">
                  HIT {liveHits}
                </div>
              )}
            </div>
            <div className="h-1.5 rounded-full bg-white/15 overflow-hidden flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`h-full flex-1 rounded-full transition-colors ${
                    n < round
                      ? 'bg-emerald-400'
                      : n === round
                        ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]'
                        : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            {liveTimer !== null && (
              <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    liveTimer <= 3 ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-400 to-violet-400'
                  }`}
                  style={{
                    width: `${Math.max(
                      0,
                      (liveTimer /
                        (round === 5 ? R5_ROUND_SEC : round === 4 ? R4_ROUND_SEC : R2_ROUND_SEC)) *
                        100
                    )}%`,
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col min-h-0 px-3 pb-3">{children}</div>
        </div>
      </div>,
      document.body
    );
  };

  // ----- Screens -----
  if (screen === 'loading') {
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

  if (screen === 'popup') {
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
            onClick={handleShowResult}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-purple-700 hover:to-pink-700 shadow-lg transition-all"
          >
            {tGlobal('mbti.viewAnalysisResults')}
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'result' && result) {
    const resultTitle = locText(result.title, locale);
    const resultDesc = locText(result.description, locale);
    const shortDesc = locText(result.shortDescription, locale);
    const keywords = locText(result.keywords, locale);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
            <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
            <p className="text-4xl font-black text-purple-600 mb-2">
              {Math.round(totalScore)}
              {t('ui.points')}
            </p>
            <p className="text-sm text-gray-500 mb-2">{t('ui.gradeLabel', { grade: result.grade })}</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{resultTitle}</h1>
            <p className="text-base text-gray-700 font-medium mb-3">{shortDesc}</p>
            <p className="text-base text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{resultDesc}</p>
            <p className="text-sm text-purple-600 font-semibold">{keywords}</p>
          </div>

          <div className="space-y-3 mb-3">
            {result.sections.map((sec, idx) => {
              const st = locText(sec.title, locale);
              const sc = locText(sec.content, locale);
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{st}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {sc.split(/[,、，·]/).map((part, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {part.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-base font-bold text-gray-800 mb-2 text-left">{t('ui.roundScores')}</h3>
              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                {roundScores.map((s, i) => (
                  <div key={i} className="bg-purple-50 rounded-lg py-2">
                    <div className="text-gray-500">R{i + 1}</div>
                    <div className="font-bold text-purple-600">{Math.round(s * 10) / 10}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mb-2 px-2">{t('ui.toolCta')}</p>

          <div className="mt-8 mb-6 px-4">
            <button
              onClick={handleShareResult}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
            >
              <Share2 size={20} />
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
              onClick={handleRetake}
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
              <h2 className="text-xl font-bold text-gray-800 mb-6">{t('recommendations.similarTestsTop5')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {similarTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-end gap-3">
                          <h3 className="font-semibold text-gray-800 line-clamp-2 flex-1">{test.title}</h3>
                          <div className="flex items-center gap-1.5 text-sm flex-shrink-0">
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
                {popularTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={getThumbnailUrl(test.thumbnail)} alt={test.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-end gap-3">
                          <h3 className="font-semibold text-gray-800 line-clamp-2 flex-1">{test.title}</h3>
                          <div className="flex items-center gap-1.5 text-sm flex-shrink-0">
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
    );
  }

  if (screen === 'paused') {
    return (
      <PlayOverlay tone="dark">
        <div
          className="flex-1 flex flex-col items-center justify-center text-center"
          onClick={resumeFromPause}
          onTouchStart={resumeFromPause}
        >
          <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-4xl mb-5">
            ⏸
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tight">{t('game.paused')}</h1>
          <p className="text-sm text-white/70">{t('game.pausedHint')}</p>
        </div>
      </PlayOverlay>
    );
  }

  if (screen === 'countdown') {
    return (
      <PlayOverlay tone="dark">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-5">
          <p className="text-sm tracking-[0.2em] uppercase text-cyan-300/80 mb-3">
            {t(`game.round${round}Title`)}
          </p>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-md mb-8">
            {t(`game.round${round}HowTo`)}
          </p>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/30 rounded-full scale-150" />
            <h1 className="relative text-[7rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300 animate-pulse">
              {countdownLabel}
            </h1>
          </div>
        </div>
      </PlayOverlay>
    );
  }

  if (screen === 'feedback') {
    return (
      <PlayOverlay tone="dark">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-xs tracking-widest uppercase text-white/50 mb-3">ROUND CLEAR</p>
          <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-300 to-violet-300 text-transparent bg-clip-text">
            {t('game.roundScore', { score: feedbackScore })}
          </h1>
          {feedbackExtra ? <p className="text-lg text-white/80">{feedbackExtra}</p> : null}
        </div>
      </PlayOverlay>
    );
  }

  if (screen === 'playing') {
    return (
      <PlayOverlay tone={round === 5 ? 'pressure' : round === 1 ? 'light' : 'dark'}>
        {round === 1 && (
          <div
            className="flex-1 relative rounded-3xl bg-white shadow-inner border border-slate-200 overflow-hidden"
            onPointerUp={missR1Bg}
          >
            <div className="absolute top-3 inset-x-0 text-center z-10 pointer-events-none">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold">
                {t('game.r1Hint')} · {r1Done}/10 · HIT {r1Hits}
              </span>
            </div>
            {r1Target && (
              <button
                type="button"
                data-mt-target
                aria-label="target"
                className="absolute rounded-full shadow-[0_0_24px_rgba(255,107,107,0.65)] active:scale-90 transition-transform"
                style={{
                  left: `${r1Target.x}%`,
                  top: `${r1Target.y}%`,
                  width: 64,
                  height: 64,
                  backgroundColor: CORAL,
                  boxShadow: '0 0 0 6px rgba(255,107,107,0.25)',
                }}
                onPointerUp={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  hitR1(e);
                }}
              />
            )}
          </div>
        )}

        {round === 2 && (
          <div className="flex-1 flex flex-col min-h-0 gap-2 sm:gap-3">
            <p className="text-center text-xs text-white/60 shrink-0">
              {t('game.r2Hint')} · HIT {r2Hits}/20
            </p>
            <div className="flex flex-1 min-h-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="flex-1 flex items-center justify-center border-r border-white/10 relative">
                <span className="absolute top-2 left-2 text-[10px] font-bold text-white/40">COLOR</span>
                {r2Left && (
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg animate-[pulse_1.5s_ease-in-out_infinite]"
                    style={{ backgroundColor: r2Left.color === 'red' ? '#EF4444' : '#3B82F6' }}
                  />
                )}
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                <span className="absolute top-2 right-2 text-[10px] font-bold text-white/40">NUMBER</span>
                {r2Right && (
                  <span className="text-5xl sm:text-7xl font-black tabular-nums">{r2Right.n}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 shrink-0 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                data-r2-btn="red"
                className="min-h-[48px] py-3 sm:py-4 rounded-2xl bg-red-500 text-white font-black text-xs sm:text-sm shadow-lg active:scale-95 transition-transform touch-manipulation"
                onPointerUp={(e) => {
                  e.preventDefault();
                  answerR2Left('red', e);
                }}
              >
                RED
              </button>
              <button
                type="button"
                data-r2-btn="blue"
                className="min-h-[48px] py-3 sm:py-4 rounded-2xl bg-blue-500 text-white font-black text-xs sm:text-sm shadow-lg active:scale-95 transition-transform touch-manipulation"
                onPointerUp={(e) => {
                  e.preventDefault();
                  answerR2Left('blue', e);
                }}
              >
                BLUE
              </button>
              <button
                type="button"
                data-r2-btn="odd"
                className="min-h-[48px] py-3 sm:py-4 rounded-2xl bg-violet-600 text-white font-black text-xs sm:text-sm shadow-lg active:scale-95 transition-transform touch-manipulation"
                onPointerUp={(e) => {
                  e.preventDefault();
                  answerR2Right(true, e);
                }}
              >
                {t('game.odd')}
              </button>
              <button
                type="button"
                data-r2-btn="even"
                className="min-h-[48px] py-3 sm:py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-xs sm:text-sm shadow-lg active:scale-95 transition-transform touch-manipulation"
                onPointerUp={(e) => {
                  e.preventDefault();
                  answerR2Right(false, e);
                }}
              >
                {t('game.even')}
              </button>
            </div>
          </div>
        )}

        {round === 3 && (
          <div className="flex-1 flex flex-col items-center justify-center min-h-0">
            {r3Phase === 'memory' && (
              <div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
                <p className="text-sm font-bold text-cyan-300 mb-2 tracking-wide">{t('game.remember')}</p>
                <p className="text-xs text-white/55 mb-5 leading-relaxed px-1">{t('game.rememberSub')}</p>
                <div className="flex justify-center gap-2 sm:gap-3">
                  {r3Sequence.map((c, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-lg ring-2 ring-white/20"
                      style={{ backgroundColor: COLOR_HEX[c] }}
                    />
                  ))}
                </div>
              </div>
            )}
            {r3Phase === 'ready' && (
              <div className="px-10 py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 text-2xl font-black shadow-xl">
                {t('game.ready')}
              </div>
            )}
            {r3Phase === 'shapes' && (
              <div className="relative w-full flex-1 min-h-0 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                <p className="absolute top-3 inset-x-0 text-center text-xs text-white/60 z-10 pointer-events-none">
                  {t('game.r3ShapeHint')} · {r3ShapeHits}/{R3_SHAPE_COUNT}
                </p>
                {r3Shape && (
                  <button
                    type="button"
                    data-mt-target
                    className="absolute active:scale-90 transition-transform"
                    style={{
                      left: `${r3Shape.x}%`,
                      top: `${r3Shape.y}%`,
                      width: r3Shape.size,
                      height: r3Shape.size,
                    }}
                    onPointerUp={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      hitR3Shape(e);
                    }}
                  >
                    {r3Shape.kind === 'circle' && (
                      <div className="w-full h-full rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                    )}
                    {r3Shape.kind === 'square' && (
                      <div className="w-full h-full bg-violet-500 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
                    )}
                    {r3Shape.kind === 'triangle' && (
                      <div
                        className="w-0 h-0 mx-auto"
                        style={{
                          borderLeft: `${r3Shape.size / 2}px solid transparent`,
                          borderRight: `${r3Shape.size / 2}px solid transparent`,
                          borderBottom: `${r3Shape.size}px solid #f472b6`,
                        }}
                      />
                    )}
                  </button>
                )}
              </div>
            )}
            {r3Phase === 'recall' && (
              <div className="w-full max-w-md text-center">
                <p className="text-sm font-bold text-cyan-300 mb-1">{t('game.recall')}</p>
                <p className="text-xs text-white/55 mb-4 leading-relaxed px-2">{t('game.recallSub')}</p>
                <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-200 ${
                        r3Recall[i]
                          ? 'border-solid border-white/50 scale-105 shadow-lg'
                          : 'border-dashed border-white/30'
                      }`}
                      style={{ backgroundColor: r3Recall[i] ? COLOR_HEX[r3Recall[i]] : 'transparent' }}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-2 sm:gap-3">
                  {COLOR_KEYS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      disabled={r3Recall.length >= 5}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg ring-2 ring-white/30 active:scale-90 transition-transform touch-manipulation disabled:opacity-40 disabled:pointer-events-none"
                      style={{ backgroundColor: COLOR_HEX[c] }}
                      onPointerUp={(e) => {
                        e.preventDefault();
                        pickRecall(c, e);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {round === 4 && (
          <div className="flex-1 flex flex-col min-h-0 gap-2 overflow-hidden">
            <p className="text-center text-xs text-white/60 shrink-0 px-2">
              {t('game.r4Hint')} · HIT {r4Hits}/{R4_COLOR_COUNT + R4_MATH_COUNT + R4_PATTERN_COUNT}
            </p>
            <div className="flex-1 min-h-0 grid grid-cols-1 gap-2 overflow-y-auto overscroll-contain sm:grid-cols-3 sm:overflow-hidden">
              <div
                className={`flex flex-col rounded-2xl p-2 border min-h-[120px] sm:min-h-0 ${
                  r4Color ? 'border-cyan-400/80 bg-cyan-500/10' : 'border-white/10 bg-white/5 opacity-70'
                }`}
              >
                <p className="text-[10px] text-center font-bold text-white/50 mb-1">{t('game.zoneColor')}</p>
                <div className="flex-1 flex items-center justify-center min-h-[56px]">
                  {r4Color && (
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg"
                      style={{ backgroundColor: COLOR_HEX[r4Color.color] }}
                    />
                  )}
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-2 gap-1">
                  {COLOR_KEYS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      disabled={!r4Color}
                      className="min-h-[44px] h-11 rounded-xl active:scale-95 transition-transform touch-manipulation disabled:opacity-40"
                      style={{ backgroundColor: COLOR_HEX[c] }}
                      onPointerUp={(e) => {
                        e.preventDefault();
                        answerR4Color(c, e);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div
                className={`flex flex-col rounded-2xl p-2 border min-h-[120px] sm:min-h-0 ${
                  r4Math ? 'border-violet-400/80 bg-violet-500/10' : 'border-white/10 bg-white/5 opacity-70'
                }`}
              >
                <p className="text-[10px] text-center font-bold text-white/50 mb-1">{t('game.zoneMath')}</p>
                <div className="flex-1 flex items-center justify-center min-h-[56px]">
                  {r4Math && (
                    <p className="text-lg sm:text-xl font-black tabular-nums">
                      {r4Math.a}+{r4Math.b}?
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {r4Math?.options.map((n) => (
                    <button
                      key={n}
                      type="button"
                      className="min-h-[44px] h-11 rounded-xl bg-white/15 font-black active:scale-95 touch-manipulation"
                      onPointerUp={(e) => {
                        e.preventDefault();
                        answerR4Math(n, e);
                      }}
                    >
                      {n}
                    </button>
                  )) || (
                    <>
                      <div className="h-11" />
                      <div className="h-11" />
                    </>
                  )}
                </div>
              </div>
              <div
                className={`flex flex-col rounded-2xl p-2 border min-h-[120px] sm:min-h-0 ${
                  r4Pattern ? 'border-fuchsia-400/80 bg-fuchsia-500/10' : 'border-white/10 bg-white/5 opacity-70'
                }`}
              >
                <p className="text-[10px] text-center font-bold text-white/50 mb-1">{t('game.zonePattern')}</p>
                <div className="flex-1 flex items-center justify-center gap-1 min-h-[56px]">
                  {r4Pattern?.cells.map((on, i) => (
                    <span
                      key={i}
                      className={`inline-block w-4 h-4 rounded-full ${on ? 'bg-white' : 'bg-white/20 border border-white/40'}`}
                    />
                  ))}
                  {r4Pattern && <span className="text-sm font-bold">?</span>}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {r4Pattern?.options.map((v, i) => (
                    <button
                      key={i}
                      type="button"
                      className="min-h-[44px] h-11 rounded-xl bg-white/15 flex items-center justify-center active:scale-95 touch-manipulation"
                      onPointerUp={(e) => {
                        e.preventDefault();
                        answerR4Pattern(v, e);
                      }}
                    >
                      <span
                        className={`inline-block w-4 h-4 rounded-full ${v ? 'bg-white' : 'border border-white'}`}
                      />
                    </button>
                  )) || (
                    <>
                      <div className="h-11" />
                      <div className="h-11" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {round === 5 && (
          <div className="flex-1 flex flex-col min-h-0 gap-2 relative overflow-hidden">
            <p className="text-center text-xs text-amber-200/80 shrink-0 px-3 leading-snug">{t('game.r5Hint')}</p>
            {r5Float && (
              <p className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-xl font-black text-emerald-300 drop-shadow pointer-events-none">
                {r5Float}
              </p>
            )}
            {r5ComboText && (
              <p className="absolute top-14 left-1/2 -translate-x-1/2 z-30 text-2xl font-black text-amber-300 animate-bounce pointer-events-none">
                {r5ComboText}
              </p>
            )}
            <div className="grid grid-cols-1 gap-2 flex-1 min-h-0 overflow-y-auto overscroll-contain sm:grid-cols-3 sm:overflow-hidden">
              {([0, 1, 2] as const).map((slot) => {
                const task = r5Tasks.find((x) => x.slot === slot);
                return (
                  <div
                    key={slot}
                    data-r5-slot={slot}
                    className={`rounded-3xl border flex flex-col items-center justify-center p-3 min-h-[132px] sm:min-h-0 sm:h-full transition-colors ${
                      task
                        ? 'border-amber-400/70 bg-black/30 shadow-[0_0_24px_rgba(251,191,36,0.15)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {!task && <span className="text-white/20 text-xs font-bold">SLOT {slot + 1}</span>}
                    {task?.kind === 'color' && (
                      <div className="flex flex-col items-center gap-3 w-full max-w-[220px]">
                        <div
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg"
                          style={{ backgroundColor: task.value === 'red' ? '#EF4444' : '#3B82F6' }}
                        />
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <button
                            type="button"
                            className="min-h-[48px] py-3 rounded-xl bg-red-500 text-white font-black active:scale-95 touch-manipulation"
                            onPointerUp={(e) => {
                              e.preventDefault();
                              answerR5(task.id, 'red', e);
                            }}
                          >
                            RED
                          </button>
                          <button
                            type="button"
                            className="min-h-[48px] py-3 rounded-xl bg-blue-500 text-white font-black active:scale-95 touch-manipulation"
                            onPointerUp={(e) => {
                              e.preventDefault();
                              answerR5(task.id, 'blue', e);
                            }}
                          >
                            BLUE
                          </button>
                        </div>
                      </div>
                    )}
                    {task?.kind === 'odd' && (
                      <div className="flex flex-col items-center gap-3 w-full max-w-[220px]">
                        <span className="text-4xl sm:text-5xl font-black tabular-nums">{task.value}</span>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <button
                            type="button"
                            className="min-h-[48px] py-3 rounded-xl bg-violet-600 text-white font-black active:scale-95 touch-manipulation"
                            onPointerUp={(e) => {
                              e.preventDefault();
                              answerR5(task.id, true, e);
                            }}
                          >
                            {t('game.odd')}
                          </button>
                          <button
                            type="button"
                            className="min-h-[48px] py-3 rounded-xl bg-fuchsia-600 text-white font-black active:scale-95 touch-manipulation"
                            onPointerUp={(e) => {
                              e.preventDefault();
                              answerR5(task.id, false, e);
                            }}
                          >
                            {t('game.even')}
                          </button>
                        </div>
                      </div>
                    )}
                    {task?.kind === 'circle' && (
                      <button
                        type="button"
                        data-mt-target
                        className="w-20 h-20 rounded-full shadow-[0_0_28px_rgba(255,107,107,0.55)] active:scale-90 transition-transform touch-manipulation"
                        style={{ backgroundColor: CORAL }}
                        onPointerUp={(e) => {
                          e.preventDefault();
                          answerR5(task.id, true, e);
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlayOverlay>
    );
  }

  // Intro — Phase2Reflex 동일 골격
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[680/384] mb-3">
          <Image src={getThumbnailUrl(thumbnail || '')} alt={title} fill className="object-cover" priority />
          {isLatestTest && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
          )}
          {badgeType === 'popular' && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{t('ui.popularBadge')}</div>
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
            <p className="font-bold text-gray-800 text-lg">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p className="text-red-500 font-semibold">{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="text-gray-500 mt-4">{t('startMessage.line5')}</p>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleStart}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse"
            >
              {tGlobal('mbti.startTest')}
            </button>
          </div>

          <p className="text-sm font-bold text-center mb-6 text-blue-500">
            {tGlobal('mbti.totalParticipants', {
              count: formatPlayCount(displayPlayCount, locale as Locale),
            })}
          </p>

          <div className="mb-8 text-center">
            <div className="max-w-[680px] mx-auto mb-4">
              <div className="flex justify-center">
                <AdSensePlaceholder
                  slot={ADSENSE_CONFIG.SLOTS.START_BELOW_TEST_BUTTON}
                  style={{ width: '100%', height: '250px' }}
                  className="mx-auto w-full"
                />
              </div>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">{tGlobal('mbti.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button onClick={copyLink} className="w-10 h-10">
                <Image src="/icons/link.jpeg" alt="link" width={40} height={40} className="rounded-lg" />
              </button>
              <button onClick={shareToKakao} className="w-10 h-10">
                <Image src="/icons/kakao.jpeg" alt="kakao" width={40} height={40} className="rounded-lg" />
              </button>
              <button onClick={shareToTelegram} className="w-10 h-10">
                <Image src="/icons/telegram.jpeg" alt="telegram" width={40} height={40} className="rounded-lg" />
              </button>
              <button onClick={shareToWeChat} className="w-10 h-10">
                <Image src="/icons/wechat.jpeg" alt="wechat" width={40} height={40} className="rounded-lg" />
              </button>
              <button onClick={shareToLine} className="w-10 h-10">
                <Image src="/icons/line.jpeg" alt="line" width={40} height={40} className="rounded-lg" />
              </button>
              <button onClick={shareToWhatsApp} className="w-10 h-10">
                <Image src="/icons/whatsapp.jpeg" alt="whatsapp" width={40} height={40} className="rounded-lg" />
              </button>
            </div>
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
                        {latestTestSlugs.includes(test.slug) && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">NEW</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">{t('ui.popularBadge')}</div>
                        )}
                        {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">HOT</div>
                        )}
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">{test.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Play size={12} /> {formatPlayCount(test.playCount, locale as Locale)}
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
