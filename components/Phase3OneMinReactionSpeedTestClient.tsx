'use client';

import { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Play } from 'lucide-react';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { Locale } from '@/i18n';
import {
  incrementPlayCount,
  submitPhase3ReactionSpeedScore,
  getPhase3ReactionSpeedRank,
  getPhase3ReactionSpeedHallOfFame,
  getPhase3ReactionSpeedTodayPlayCount,
  createPhase3ReactionSpeedChallenge,
  getPhase3ReactionSpeedChallenge,
} from '@/lib/supabase';
import { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';
import AdSensePlaceholder, { ADSENSE_CONFIG, safeLoadAdSense } from '@/lib/adsense';
import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';
import {
  Phase3OneMinReactionSpeedResult,
  calculatePhase3OneMinReactionSpeedResult,
  normalizePhase3ReactionSpeedScore,
  getPhase3ReactionSpeedLocaleText,
  getPhase3ReactionSpeedShareMessage,
  getPhase3ReactionSpeedWeekKey,
  generatePhase3ReactionSpeedChallengeCode,
  PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS,
  getNextPhase3ReactionSpeedPhase,
  pickPhase3ReactionSpeedTaskType,
  getPhase3ReactionSpeedSpawnGapMs,
  getPhase3ReactionSpeedTargetWindowMs,
  scorePhase3ReactionSpeedHit,
  loadPhase3ReactionSpeedBestScores,
  savePhase3ReactionSpeedPlay,
  type Phase3ReactionSpeedTaskType,
  type Phase3ReactionSpeedPhase,
} from '@/lib/phase3OneMinReactionSpeedData';

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

type Screen = 'intro' | 'briefing' | 'playing' | 'paused' | 'loading' | 'popup' | 'result';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ActiveTarget {
  id: number;
  type: Phase3ReactionSpeedTaskType;
  spawnedAt: number;
  expiresAt: number;
  x: number;
  y: number;
  color?: 'red' | 'blue';
  direction?: Direction;
  number?: number;
  reverseMode?: boolean;
  position?: Direction;
}

interface FloatText {
  id: number;
  text: string;
  color: string;
}

interface ImpactFx {
  id: number;
  x: number;
  y: number;
  kind: 'hit' | 'miss';
  scoreText: string;
}

interface ChallengeHost {
  code: string;
  host_name: string;
  host_score: number;
  host_normalized: number;
  host_avg_ms: number;
}

const DIR_ARROWS: Record<Direction, string> = {
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
};

function randomDir(): Direction {
  const dirs: Direction[] = ['up', 'down', 'left', 'right'];
  return dirs[Math.floor(Math.random() * 4)];
}

export default function Phase3OneMinReactionSpeedTestClient({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount = 0,
  isLatestTest = false,
  badgeType = null,
}: Props) {
  const t = useTranslations('phase3OneMinReactionSpeedTest');
  const tGlobal = useTranslations();

  const [screen, setScreen] = useState<Screen>('intro');
  const [displayPlayCount, setDisplayPlayCount] = useState(playCount);
  const [hasIncremented, setHasIncremented] = useState(false);
  const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({
    slug,
    locale,
  });

  const [result, setResult] = useState<Phase3OneMinReactionSpeedResult | null>(null);
  const [rawScore, setRawScore] = useState(0);
  const [normalizedScore, setNormalizedScore] = useState(0);
  const [avgMs, setAvgMs] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [missCount, setMissCount] = useState(0);

  const [elapsedMs, setElapsedMs] = useState(0);
  const [scoreLive, setScoreLive] = useState(0);
  const [comboLive, setComboLive] = useState(0);
  const [phase, setPhase] = useState<Phase3ReactionSpeedPhase>('warmup');
  const [target, setTarget] = useState<ActiveTarget | null>(null);
  const [floats, setFloats] = useState<FloatText[]>([]);
  const [banner, setBanner] = useState<string | null>(null);
  const [flashRed, setFlashRed] = useState(false);
  const [flashHit, setFlashHit] = useState(false);
  const [screenShake, setScreenShake] = useState(false);
  const [flashPerfect, setFlashPerfect] = useState(false);
  const [impacts, setImpacts] = useState<ImpactFx[]>([]);
  const [dirBtnFx, setDirBtnFx] = useState<{ dir: Direction; kind: 'hit' | 'miss' } | null>(null);
  const [reverseActive, setReverseActive] = useState(false);
  const [levelUpFlash, setLevelUpFlash] = useState(false);

  const [rankInfo, setRankInfo] = useState<{ rank: number; total: number; percentile: number } | null>(
    null
  );
  const [hallOfFame, setHallOfFame] = useState<
    Array<{ player_name: string; normalized_score: number; avg_ms: number }>
  >([]);
  const [todayChallengers, setTodayChallengers] = useState(0);
  const [bestScores, setBestScores] = useState({ allTimeBest: 0, todayBest: 0, streak: 0 });
  const [isSevenDay, setIsSevenDay] = useState(false);
  const [isHallOfFame, setIsHallOfFame] = useState(false);
  const [challengeCode, setChallengeCode] = useState<string | null>(null);
  const [hostChallenge, setHostChallenge] = useState<ChallengeHost | null>(null);
  const [compareDone, setCompareDone] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const gameStartRef = useRef(0);
  const pausedAccumRef = useRef(0);
  const pauseAtRef = useRef(0);
  const scoreRef = useRef(0);
  const comboRef = useRef(0);
  const maxComboRef = useRef(0);
  const missRef = useRef(0);
  const hitRef = useRef(0);
  const reactionSumRef = useRef(0);
  const reactionNRef = useRef(0);
  const phaseMissRef = useRef({ warmup: 0, accel: 0, extreme: 0 });
  const phaseHitRef = useRef({ warmup: 0, accel: 0, extreme: 0 });
  const reverseUntilRef = useRef(0);
  const lastPhaseRef = useRef<Phase3ReactionSpeedPhase>('warmup');
  const phaseRef = useRef<Phase3ReactionSpeedPhase>('warmup');
  const phaseEndingRef = useRef(false);
  const endPhaseSegmentRef = useRef<() => void>(() => {});
  const lastClickRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const targetIdRef = useRef(0);
  const floatIdRef = useRef(0);
  const impactIdRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const spawnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expireTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishedRef = useRef(false);
  const bannerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const vibrate = (pattern: number | number[] = 30) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(pattern);
    } catch {
      /* ignore */
    }
  };

  const showBanner = (text: string, ms = 900) => {
    setBanner(text);
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    bannerTimerRef.current = setTimeout(() => setBanner(null), ms);
  };

  const pushFloat = (text: string, color: string) => {
    const id = ++floatIdRef.current;
    setFloats((prev) => [...prev.slice(-4), { id, text, color }]);
    setTimeout(() => {
      setFloats((prev) => prev.filter((f) => f.id !== id));
    }, 700);
  };

  const spawnImpact = (x: number, y: number, kind: 'hit' | 'miss', scoreText: string) => {
    const id = ++impactIdRef.current;
    setImpacts((prev) => [...prev.slice(-6), { id, x, y, kind, scoreText }]);
    setTimeout(() => {
      setImpacts((prev) => prev.filter((fx) => fx.id !== id));
    }, 500);
  };

  const triggerHitFeel = (
    isHit: boolean,
    clientX: number,
    clientY: number,
    scoreDelta: number,
    action?: string
  ) => {
    const cx = clientX || window.innerWidth / 2;
    const cy = clientY || window.innerHeight / 2;
    const scoreText = isHit ? `+${scoreDelta}` : `${scoreDelta}`;
    spawnImpact(cx, cy, isHit ? 'hit' : 'miss', scoreText);

    if (action === 'up' || action === 'down' || action === 'left' || action === 'right') {
      setDirBtnFx({ dir: action, kind: isHit ? 'hit' : 'miss' });
      setTimeout(() => setDirBtnFx(null), 320);
    }

    if (isHit) {
      vibrate([8, 24, 8]);
      setFlashHit(true);
      setTimeout(() => setFlashHit(false), 280);
    } else {
      vibrate([45, 35, 45]);
      setFlashRed(true);
      setScreenShake(true);
      setTimeout(() => setFlashRed(false), 280);
      setTimeout(() => setScreenShake(false), 280);
    }
  };

  const clearTimers = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
    if (expireTimerRef.current) clearTimeout(expireTimerRef.current);
  };

  // Load challenge from URL + local bests
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('c');
    if (code) {
      getPhase3ReactionSpeedChallenge(code).then((data) => {
        if (data) {
          setHostChallenge({
            code: data.code,
            host_name: data.host_name,
            host_score: data.host_score,
            host_normalized: data.host_normalized,
            host_avg_ms: data.host_avg_ms,
          });
        }
      });
    }
    setBestScores(loadPhase3ReactionSpeedBestScores());
  }, []);

  useEffect(() => {
    if (screen === 'intro' || screen === 'briefing' || screen === 'result' || screen === 'popup' || screen === 'loading') {
      setTimeout(() => {
        try {
          safeLoadAdSense();
        } catch (err) {
          console.error(err);
        }
      }, 100);
    }
  }, [screen]);

  const finishGame = useCallback(async () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    setTarget(null);

    // 퍼펙트 극한 구간 보너스: 극한에서 1회 이상 정타 + 오클릭 0
    let finalRaw = scoreRef.current;
    if (phaseMissRef.current.extreme === 0 && phaseHitRef.current.extreme > 0) {
      finalRaw += 20;
      scoreRef.current = finalRaw;
    }

    const avg =
      reactionNRef.current > 0 ? Math.round(reactionSumRef.current / reactionNRef.current) : 0;
    const normalized = normalizePhase3ReactionSpeedScore(finalRaw);
    const finalResult = calculatePhase3OneMinReactionSpeedResult(normalized);

    setRawScore(finalRaw);
    setNormalizedScore(normalized);
    setAvgMs(avg);
    setMaxCombo(maxComboRef.current);
    setMissCount(missRef.current);
    setResult(finalResult);
    setScreen('loading');

    const saved = savePhase3ReactionSpeedPlay(normalized);
    setBestScores({
      allTimeBest: saved.allTimeBest,
      todayBest: saved.todayBest,
      streak: saved.streak,
    });
    setIsSevenDay(saved.isSevenDay);

    const weekKey = getPhase3ReactionSpeedWeekKey();
    const suspect = avg > 0 && avg < 80;

    await submitPhase3ReactionSpeedScore({
      playerName: playerName.trim() || t('ui.anonymous'),
      rawScore: finalRaw,
      normalizedScore: normalized,
      avgMs: avg,
      maxCombo: maxComboRef.current,
      missCount: missRef.current,
      weekKey,
      suspect,
    });

    const [rank, hof, todayCount] = await Promise.all([
      getPhase3ReactionSpeedRank(normalized, weekKey),
      getPhase3ReactionSpeedHallOfFame(weekKey),
      getPhase3ReactionSpeedTodayPlayCount(weekKey),
    ]);
    setRankInfo(rank);
    setHallOfFame(hof);
    setTodayChallengers(todayCount);
    setIsHallOfFame(rank.percentile <= 1 || (rank.total > 0 && rank.rank / rank.total <= 0.01));

    if (hostChallenge) setCompareDone(true);

    setTimeout(() => {
      setScreen('popup');
    }, 2200);
  }, [hostChallenge, playerName]);

  const spawnTarget = useCallback(() => {
    if (finishedRef.current || phaseEndingRef.current) return;
    const now = performance.now();
    const elapsed = now - gameStartRef.current - pausedAccumRef.current;
    if (elapsed >= PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS) {
      endPhaseSegmentRef.current();
      return;
    }

    const currentPhase = phaseRef.current;
    const taskType = pickPhase3ReactionSpeedTaskType(currentPhase);
    const windowMs = getPhase3ReactionSpeedTargetWindowMs(currentPhase);
    const id = ++targetIdRef.current;

    const reverseMode = reverseUntilRef.current > now;
    setReverseActive(reverseMode);

    let next: ActiveTarget = {
      id,
      type: taskType,
      spawnedAt: now,
      expiresAt: now + windowMs,
      x: 15 + Math.random() * 70,
      y: 20 + Math.random() * 55,
      reverseMode,
    };

    if (taskType === 'circle') {
      next.color = 'red';
    } else if (taskType === 'color') {
      next.color = Math.random() < 0.55 ? 'red' : 'blue';
    } else if (taskType === 'reverse') {
      // 태스크6: 반전 규칙 — 평소 빨간만 / ⚡반전 시 파란만 (3~5초 지속 후 해제, 갑자기 전환)
      const alreadyReversed = reverseUntilRef.current > now;
      // 반전 중이 아니면 40% 확률로 반전 진입, 반전 중이면 25% 확률로 조기 해제(갑자기 전환)
      if (!alreadyReversed && Math.random() < 0.4) {
        reverseUntilRef.current = now + (3000 + Math.random() * 2000);
        setReverseActive(true);
        showBanner(t('game.ruleReversed'));
        vibrate(80);
      } else if (alreadyReversed && Math.random() < 0.25) {
        reverseUntilRef.current = now;
        setReverseActive(false);
        showBanner(t('game.ruleNormal'));
        vibrate(40);
      }
      const inReverse = reverseUntilRef.current > now;
      next.reverseMode = inReverse;
      setReverseActive(inReverse);
      // 반전 중엔 파란 원 비중↑, 평소엔 빨간 원 비중↑
      next.color = inReverse
        ? Math.random() < 0.65
          ? 'blue'
          : 'red'
        : Math.random() < 0.65
          ? 'red'
          : 'blue';
    } else if (taskType === 'arrow') {
      next.direction = randomDir();
      next.x = 50;
      next.y = 40;
    } else if (taskType === 'oddEven') {
      next.number = 1 + Math.floor(Math.random() * 9);
      next.x = 50;
      next.y = 40;
    } else if (taskType === 'colorDir') {
      // 태스크5: 색상+방향 — 빨간 원이 뜬 방향 버튼 / 파란 원은 무시
      next.color = Math.random() < 0.6 ? 'red' : 'blue';
      next.position = randomDir();
      next.x = next.position === 'left' ? 18 : next.position === 'right' ? 82 : 50;
      next.y = next.position === 'up' ? 18 : next.position === 'down' ? 78 : 45;
    }

    setTarget(next);

    if (expireTimerRef.current) clearTimeout(expireTimerRef.current);
    expireTimerRef.current = setTimeout(() => {
      if (finishedRef.current || phaseEndingRef.current) return;
      setTarget((cur) => {
        if (!cur || cur.id !== id) return cur;
        return null;
      });
      const gap = getPhase3ReactionSpeedSpawnGapMs(currentPhase);
      if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
      spawnTimerRef.current = setTimeout(() => spawnTarget(), gap);
    }, windowMs);
  }, [t]);

  const scheduleNext = useCallback(
    (currentPhase: Phase3ReactionSpeedPhase) => {
      if (finishedRef.current || phaseEndingRef.current) return;
      const gap = getPhase3ReactionSpeedSpawnGapMs(currentPhase);
      if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
      spawnTimerRef.current = setTimeout(() => spawnTarget(), gap);
    },
    [spawnTarget]
  );

  const endPhaseSegment = useCallback(() => {
    if (phaseEndingRef.current || finishedRef.current) return;
    phaseEndingRef.current = true;
    clearTimers();
    setTarget(null);
    setReverseActive(false);
    reverseUntilRef.current = 0;

    const next = getNextPhase3ReactionSpeedPhase(phaseRef.current);
    if (!next) {
      finishGame();
      return;
    }

    phaseRef.current = next;
    setPhase(next);
    comboRef.current = 0;
    setComboLive(0);
    setElapsedMs(0);
    setScreen('briefing');
    window.scrollTo(0, 0);
  }, [finishGame]);

  useEffect(() => {
    endPhaseSegmentRef.current = endPhaseSegment;
  }, [endPhaseSegment]);

  const applyHit = useCallback(
    (
      isHit: boolean,
      reactionMs: number,
      clientX = 0,
      clientY = 0,
      action?: string
    ) => {
      const currentPhase = phaseRef.current;
      const scored = scorePhase3ReactionSpeedHit(
        currentPhase,
        isHit,
        reactionMs,
        comboRef.current
      );

      scoreRef.current = Math.max(0, scoreRef.current + scored.delta);
      setScoreLive(scoreRef.current);
      triggerHitFeel(isHit, clientX, clientY, scored.delta, action);

      if (isHit) {
        comboRef.current += 1;
        hitRef.current += 1;
        phaseHitRef.current[currentPhase] += 1;
        reactionSumRef.current += reactionMs;
        reactionNRef.current += 1;
        if (comboRef.current > maxComboRef.current) maxComboRef.current = comboRef.current;
        setComboLive(comboRef.current);
        setMaxCombo(maxComboRef.current);
        pushFloat(`+${scored.delta}`, '#22c55e');
        if (comboRef.current === 3 || comboRef.current === 5 || comboRef.current === 10) {
          showBanner(t('game.combo', { n: comboRef.current }));
        }
        if (comboRef.current >= 10 && comboRef.current % 10 === 0) {
          setFlashPerfect(true);
          showBanner(t('game.perfectStreak'));
          setTimeout(() => setFlashPerfect(false), 500);
        }
      } else {
        comboRef.current = 0;
        missRef.current += 1;
        phaseMissRef.current[currentPhase] += 1;
        setComboLive(0);
        setMissCount(missRef.current);
        pushFloat(`${scored.delta}`, '#ef4444');
      }
    },
    [t]
  );

  const isCorrectAction = (tgt: ActiveTarget, action: string): boolean => {
    const reverse = performance.now() < reverseUntilRef.current || !!tgt.reverseMode;
    if (tgt.type === 'circle') return action === 'tap';
    if (tgt.type === 'color') {
      if (action !== 'tap') return false;
      return tgt.color === 'red';
    }
    if (tgt.type === 'reverse') {
      // 평소: 빨간 원만 / 반전: 파란 원만 (원 터치)
      if (action !== 'tap') return false;
      if (reverse) return tgt.color === 'blue';
      return tgt.color === 'red';
    }
    if (tgt.type === 'arrow') return action === tgt.direction;
    if (tgt.type === 'oddEven') {
      if (tgt.number == null) return false;
      const odd = tgt.number % 2 === 1;
      return (odd && action === 'left') || (!odd && action === 'right');
    }
    if (tgt.type === 'colorDir') {
      // 파란 원: 무시가 정답 → 어떤 방향 버튼이든 오답
      // 빨간 원: 등장 방향 버튼만 정답 (원 터치는 오답)
      if (action === 'tap') return false;
      if (tgt.color === 'blue') return false;
      return action === tgt.position;
    }
    return false;
  };

  const handleAction = (action: string, clientX = 0, clientY = 0, onTarget = false) => {
    if (screen !== 'playing' || finishedRef.current) return;

    const now = performance.now();
    const last = lastClickRef.current;
    if (
      last &&
      now - last.t < 250 &&
      Math.abs(last.x - clientX) < 8 &&
      Math.abs(last.y - clientY) < 8
    ) {
      return; // bot / accidental double
    }
    lastClickRef.current = { x: clientX, y: clientY, t: now };

    if (!target) {
      // 빈 화면 클릭: 워밍업/가속/극한 모두 오클릭
      const currentPhase = phaseRef.current;
      if (currentPhase === 'warmup' || currentPhase === 'accel' || currentPhase === 'extreme') {
        applyHit(false, 0, clientX, clientY, action);
      }
      return;
    }

    const reactionMs = Math.max(0, Math.round(now - target.spawnedAt));
    let hit = false;

    // colorDir: 파란 원 무시가 정답 → 방향/터치 시 오답, 타임아웃(무반응)은 0점
    if (target.type === 'colorDir' && target.color === 'blue') {
      if (expireTimerRef.current) clearTimeout(expireTimerRef.current);
      applyHit(false, reactionMs, clientX, clientY, action);
      setTarget(null);
      scheduleNext(phaseRef.current);
      return;
    }

    if (target.type === 'circle' || target.type === 'color' || target.type === 'reverse') {
      if (action !== 'tap') return;
      // 원 위에 직접 터치한 경우만 정답 판정 — 빈 화면 클릭은 오클릭
      if (!onTarget) {
        hit = false;
      } else {
        hit = isCorrectAction(target, 'tap');
      }
    } else {
      hit = isCorrectAction(target, action);
    }

    if (expireTimerRef.current) clearTimeout(expireTimerRef.current);
    applyHit(hit, reactionMs, clientX, clientY, action);
    setTarget(null);
    scheduleNext(phaseRef.current);
  };

  const tick = useCallback(() => {
    if (finishedRef.current || phaseEndingRef.current) return;
    const now = performance.now();
    const elapsed = now - gameStartRef.current - pausedAccumRef.current;
    setElapsedMs(Math.min(elapsed, PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS));
    setReverseActive(reverseUntilRef.current > now);

    if (elapsed >= PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS) {
      endPhaseSegmentRef.current();
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const startPhasePlay = useCallback(() => {
    phaseEndingRef.current = false;
    pausedAccumRef.current = 0;
    reverseUntilRef.current = 0;
    setReverseActive(false);
    setTarget(null);
    setFloats([]);
    setElapsedMs(0);
    setFlashRed(false);
    setFlashHit(false);
    setScreenShake(false);
    setFlashPerfect(false);
    setImpacts([]);
    setDirBtnFx(null);
    setBanner(null);
    setScreen('playing');
    window.scrollTo(0, 0);
    gameStartRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    spawnTimerRef.current = setTimeout(() => spawnTarget(), 600);
  }, [tick, spawnTarget]);

  const startGame = () => {
    if (!hasIncremented) {
      incrementPlayCount(slug).catch(console.error);
      setDisplayPlayCount((p) => p + 1);
      setHasIncremented(true);
    }

    finishedRef.current = false;
    phaseEndingRef.current = false;
    scoreRef.current = 0;
    comboRef.current = 0;
    maxComboRef.current = 0;
    missRef.current = 0;
    hitRef.current = 0;
    reactionSumRef.current = 0;
    reactionNRef.current = 0;
    phaseMissRef.current = { warmup: 0, accel: 0, extreme: 0 };
    phaseHitRef.current = { warmup: 0, accel: 0, extreme: 0 };
    reverseUntilRef.current = 0;
    pausedAccumRef.current = 0;
    phaseRef.current = 'warmup';
    lastPhaseRef.current = 'warmup';
    setScoreLive(0);
    setComboLive(0);
    setMissCount(0);
    setMaxCombo(0);
    setElapsedMs(0);
    setPhase('warmup');
    setTarget(null);
    setFloats([]);
    setResult(null);
    setRankInfo(null);
    setCompareDone(false);
    setChallengeCode(null);
    setScreen('briefing');
    window.scrollTo(0, 0);
  };

  // Visibility pause
  useEffect(() => {
    const onVis = () => {
      if (screen !== 'playing' && screen !== 'paused') return;
      if (document.hidden) {
        pauseAtRef.current = performance.now();
        clearTimers();
        setScreen('paused');
      } else if (screen === 'paused' || document.visibilityState === 'visible') {
        if (pauseAtRef.current > 0) {
          pausedAccumRef.current += performance.now() - pauseAtRef.current;
          pauseAtRef.current = 0;
        }
        setScreen('playing');
        rafRef.current = requestAnimationFrame(tick);
        scheduleNext(phaseRef.current);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [screen, tick, scheduleNext]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleShowResult = () => {
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearTimers();
    setScreen('intro');
    setResult(null);
    finishedRef.current = false;
  };

  const handleCreateChallenge = async () => {
    const code = generatePhase3ReactionSpeedChallengeCode();
    const weekKey = getPhase3ReactionSpeedWeekKey();
    const res = await createPhase3ReactionSpeedChallenge({
      code,
      hostName: playerName.trim() || t('ui.anonymous'),
      hostScore: rawScore,
      hostNormalized: normalizedScore,
      hostAvgMs: avgMs,
      weekKey,
    });
    if (res.success) {
      setChallengeCode(code);
      const url = `${window.location.origin}${window.location.pathname}?c=${code}`;
      try {
        await navigator.clipboard.writeText(url);
        alert(t('alerts.challengeLinkCopied'));
      } catch {
        alert(t('alerts.challengeCreated', { code }));
      }
    } else {
      alert(t('alerts.shareFailed'));
    }
  };

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    if (challengeCode) {
      return `${window.location.origin}${window.location.pathname}?c=${challengeCode}`;
    }
    return `${window.location.origin}${window.location.pathname}`;
  };

  const getResultShareText = () => {
    if (!result) return t('shareMessages.startDefault');
    return getPhase3ReactionSpeedShareMessage(result, locale, avgMs);
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
    const description =
      result != null ? getResultShareText() : t('shareMessages.startKakao');
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

  const remainingSec = Math.max(
    0,
    Math.ceil((PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS - elapsedMs) / 1000)
  );
  const progressPct = Math.min(100, (elapsedMs / PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS) * 100);
  const barColor =
    phase === 'warmup' ? 'bg-green-500' : phase === 'accel' ? 'bg-orange-500' : 'bg-red-500';
  const lowTime = remainingSec <= 10;

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

  // —— Loading ——
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
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
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

  // —— Popup ——
  if (screen === 'popup') {
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

  // —— Briefing (구간 설명 → Go) ——
  if (screen === 'briefing') {
    const phaseKey = phase;
    const step =
      phaseKey === 'warmup' ? 1 : phaseKey === 'accel' ? 2 : 3;
    const titleKey =
      phaseKey === 'warmup'
        ? 'briefing.warmupTitle'
        : phaseKey === 'accel'
          ? 'briefing.accelTitle'
          : 'briefing.extremeTitle';
    const ruleKeys =
      phaseKey === 'warmup'
        ? ['briefing.warmupRule1', 'briefing.warmupRule2', 'briefing.warmupRule3', 'briefing.warmupRule4']
        : phaseKey === 'accel'
          ? ['briefing.accelRule1', 'briefing.accelRule2', 'briefing.accelRule3', 'briefing.accelRule4']
          : ['briefing.extremeRule1', 'briefing.extremeRule2', 'briefing.extremeRule3', 'briefing.extremeRule4'];
    const tipKey =
      phaseKey === 'warmup'
        ? 'briefing.warmupTip'
        : phaseKey === 'accel'
          ? 'briefing.accelTip'
          : 'briefing.extremeTip';
    const accent = 'from-purple-600 to-pink-600';

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 text-center">
          <p className="text-sm font-bold text-gray-500 mb-2">
            {t('briefing.step', { current: step, total: 3 })}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{t(titleKey)}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('briefing.duration')}</p>
          <ul className="text-left space-y-2 mb-4 text-sm text-gray-700">
            {ruleKeys.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-purple-700 bg-purple-50 rounded-lg p-3 mb-6 text-left">
            {t(tipKey)}
          </p>
          <p className="text-sm font-semibold text-gray-600 mb-4">
            {t('briefing.currentScore', { score: scoreLive })}
          </p>
          <button
            type="button"
            onClick={startPhasePlay}
            className={`w-full bg-gradient-to-r ${accent} hover:from-purple-700 hover:to-pink-700 text-white font-bold text-2xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all`}
          >
            {t('briefing.go')}
          </button>
        </div>
      </div>
    );
  }

  // —— Paused ——
  if (screen === 'paused') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6">
        <p className="text-2xl font-bold mb-2">{t('game.paused')}</p>
        <p className="text-sm opacity-80">{t('game.pausedHint')}</p>
      </div>
    );
  }

  // —— Playing ——
  if (screen === 'playing') {
    const needsDirPad =
      target &&
      (target.type === 'arrow' || target.type === 'oddEven' || target.type === 'colorDir');

    return (
      <div
        className={`min-h-screen flex flex-col select-none touch-manipulation ${
          reverseActive ? 'bg-slate-900' : 'bg-slate-100'
        } ${flashPerfect ? 'bg-yellow-200' : ''} ${lowTime ? 'animate-pulse' : ''} ${
          screenShake ? 'p3-play-shake' : ''
        } ${flashHit ? 'p3-play-hit-flash' : ''} ${flashRed ? 'p3-play-miss-flash' : ''}`}
      >
        {/* 타격감 이펙트 레이어 */}
        {impacts.map((fx) => (
          <div key={fx.id}>
            {fx.kind === 'hit' ? (
              <>
                <div className="p3-impact-ring" style={{ left: fx.x, top: fx.y }} />
                <div className="p3-impact-ring" style={{ left: fx.x, top: fx.y, animationDelay: '60ms', borderColor: '#4ade80' }} />
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
                <div
                  className="p3-impact-ring"
                  style={{ left: fx.x, top: fx.y, borderColor: '#ef4444' }}
                />
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
              style={{
                left: fx.x,
                top: fx.y,
                color: fx.kind === 'hit' ? '#16a34a' : '#dc2626',
              }}
            >
              {fx.scoreText}
            </div>
          </div>
        ))}

        <div className="w-full h-3 bg-gray-300 relative">
          <div className={`h-full ${barColor} transition-all`} style={{ width: `${progressPct}%` }} />
        </div>
        <div className="flex justify-between items-center px-4 py-2 text-sm font-bold">
          <span className={lowTime ? 'text-red-600' : reverseActive ? 'text-white' : 'text-gray-800'}>
            {Math.floor(remainingSec / 60)}:{String(remainingSec % 60).padStart(2, '0')}
          </span>
          <span className={reverseActive ? 'text-white' : 'text-gray-800'}>
            {t('game.score')}: {scoreLive}
          </span>
          <span className={reverseActive ? 'text-amber-300' : 'text-orange-600'}>
            COMBO ×{comboLive}
          </span>
        </div>
        <div className="text-center text-xs font-semibold mb-1">
          <span
            className={
              phase === 'warmup'
                ? 'text-green-600'
                : phase === 'accel'
                  ? 'text-orange-600'
                  : 'text-red-600'
            }
          >
            {phase === 'warmup'
              ? t('game.phaseWarmup')
              : phase === 'accel'
                ? t('game.phaseAccel')
                : t('game.phaseExtreme')}
          </span>
          {reverseActive && (
            <span className="ml-2 text-yellow-300">{t('game.reverseOn')}</span>
          )}
        </div>
        <p
          className={`text-center text-xs px-4 mb-1 ${
            reverseActive ? 'text-yellow-200' : 'text-gray-600'
          }`}
        >
          {phase === 'warmup'
            ? t('game.hudHintWarmup')
            : phase === 'accel'
              ? t('game.hudHintAccel')
              : t('game.hudHintExtreme')}
        </p>

        {(banner || levelUpFlash) && (
          <div className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none">
            <div className="bg-black/80 text-white font-black px-4 py-2 rounded-full text-lg shadow-lg">
              {banner}
            </div>
          </div>
        )}

        <div className="fixed top-24 right-4 z-40 space-y-1 pointer-events-none">
          {floats.map((f) => (
            <div key={f.id} className="font-black text-xl animate-bounce" style={{ color: f.color }}>
              {f.text}
            </div>
          ))}
        </div>

        <div
          className={`relative flex-1 mx-3 mb-2 rounded-2xl overflow-hidden border-2 ${
            reverseActive ? 'border-blue-400 bg-slate-800' : 'border-gray-300 bg-white'
          } ${lowTime ? 'border-red-500' : ''}`}
          style={{ minHeight: '55vh' }}
          onPointerDown={(e) => {
            if (needsDirPad) {
              // 색+방향: 빨간 원일 때 빈 화면 클릭 = 오클릭 / 파란 원은 무시가 정답
              if (target?.type === 'colorDir' && target.color === 'red') {
                e.preventDefault();
                handleAction('tap', e.clientX, e.clientY, false);
              }
              return;
            }
            e.preventDefault();
            // 원 밖 클릭 — 오클릭 (원 직접 터치만 정답 후보)
            handleAction('tap', e.clientX, e.clientY, false);
          }}
        >
          {target &&
            (target.type === 'circle' || target.type === 'color' || target.type === 'reverse') && (
              <button
                type="button"
                className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${
                  target.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
                } ${reverseActive && target.type === 'reverse' ? 'ring-4 ring-yellow-300' : ''}`}
                style={{ left: `${target.x}%`, top: `${target.y}%` }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAction('tap', e.clientX, e.clientY, true);
                }}
              >
                {(target.type === 'reverse' &&
                  (reverseActive || target.reverseMode)) && (
                  <span className="text-white text-xl drop-shadow">⚡</span>
                )}
              </button>
            )}

          {/* 태스크5: 색+방향 — 원은 시각만, 방향 버튼으로만 입력 */}
          {target?.type === 'colorDir' && (
            <div
              className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center ${
                target.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
              }`}
              style={{ left: `${target.x}%`, top: `${target.y}%` }}
            >
              {target.color === 'blue' && (
                <span className="text-white text-xs font-bold">{t('ui.ignore')}</span>
              )}
            </div>
          )}

          {target?.type === 'arrow' && target.direction && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-7xl font-black text-indigo-600">
                {DIR_ARROWS[target.direction]}
              </span>
            </div>
          )}

          {target?.type === 'oddEven' && target.number != null && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-7xl font-black text-violet-700">{target.number}</span>
            </div>
          )}

          {!target && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              {t('game.waitNext')}
            </div>
          )}
        </div>

        {needsDirPad && (
          <div className="grid grid-cols-3 gap-2 px-6 pb-6 max-w-sm mx-auto w-full">
            <div />
            <button
              type="button"
              className={`bg-indigo-600 text-white font-bold py-4 rounded-xl text-2xl ${
                dirBtnFx?.dir === 'up'
                  ? dirBtnFx.kind === 'hit'
                    ? 'p3-dir-btn-hit'
                    : 'p3-dir-btn-miss'
                  : ''
              }`}
              onPointerDown={(e) => {
                e.preventDefault();
                handleAction('up', e.clientX, e.clientY);
              }}
            >
              ↑
            </button>
            <div />
            <button
              type="button"
              className={`bg-indigo-600 text-white font-bold py-4 rounded-xl text-2xl ${
                dirBtnFx?.dir === 'left'
                  ? dirBtnFx.kind === 'hit'
                    ? 'p3-dir-btn-hit'
                    : 'p3-dir-btn-miss'
                  : ''
              }`}
              onPointerDown={(e) => {
                e.preventDefault();
                handleAction('left', e.clientX, e.clientY);
              }}
            >
              {target?.type === 'oddEven' ? t('ui.left') : '←'}
            </button>
            <button
              type="button"
              className={`bg-indigo-600 text-white font-bold py-4 rounded-xl text-2xl ${
                dirBtnFx?.dir === 'down'
                  ? dirBtnFx.kind === 'hit'
                    ? 'p3-dir-btn-hit'
                    : 'p3-dir-btn-miss'
                  : ''
              }`}
              onPointerDown={(e) => {
                e.preventDefault();
                handleAction('down', e.clientX, e.clientY);
              }}
            >
              ↓
            </button>
            <button
              type="button"
              className={`bg-indigo-600 text-white font-bold py-4 rounded-xl text-2xl ${
                dirBtnFx?.dir === 'right'
                  ? dirBtnFx.kind === 'hit'
                    ? 'p3-dir-btn-hit'
                    : 'p3-dir-btn-miss'
                  : ''
              }`}
              onPointerDown={(e) => {
                e.preventDefault();
                handleAction('right', e.clientX, e.clientY);
              }}
            >
              {target?.type === 'oddEven' ? t('ui.right') : '→'}
            </button>
          </div>
        )}

        <div className="w-full max-w-lg mb-6 mx-auto px-3">
          <AdSensePlaceholder
            slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN}
            style={{ width: '100%', height: '100px' }}
            className="mx-auto"
            label={t('ui.adsenseTitle')}
          />
        </div>
      </div>
    );
  }

  // —— Result ——
  if (screen === 'result' && result) {
    const resultTitle = getPhase3ReactionSpeedLocaleText(result.title, locale);
    const resultDesc = getPhase3ReactionSpeedLocaleText(result.description, locale);
    const oneLiner = getPhase3ReactionSpeedLocaleText(result.oneLiner, locale);
    const retryTip = getPhase3ReactionSpeedLocaleText(result.retryTip, locale);
    const reactionSpeed = getPhase3ReactionSpeedLocaleText(result.reactionSpeed, locale);
    const iWon =
      hostChallenge && compareDone
        ? normalizedScore > hostChallenge.host_normalized
        : null;
    const rematchUrl =
      hostChallenge != null
        ? `${typeof window !== 'undefined' ? window.location.origin : ''}${typeof window !== 'undefined' ? window.location.pathname : ''}?c=${hostChallenge.code}`
        : '';

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{tGlobal('mbti.yourResult')}</h2>
            <div className="text-6xl mb-3 animate-bounce">{result.emoji}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {t('ui.gradeLabel', { grade: result.grade })} {resultTitle}
            </h1>
            {isHallOfFame && (
              <p className="text-amber-600 font-bold mb-2">{t('ui.hallOfFameBadge')}</p>
            )}
            {result.certify && (
              <p className="text-sm font-semibold text-purple-700 mb-2">
                {getPhase3ReactionSpeedLocaleText(result.certify, locale)}
              </p>
            )}
            <p className="text-base text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
              {resultDesc}
            </p>
            <p className="text-sm font-semibold text-gray-800">{oneLiner}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t('ui.normalizedScore')}</span>
              <strong>{normalizedScore}{t('ui.points')}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.rawScore')}</span>
              <strong>{rawScore}{t('ui.points')}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.avgMs')}</span>
              <strong>{avgMs}ms</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.maxCombo')}</span>
              <strong>×{maxCombo}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.missCount')}</span>
              <strong>{missCount}{t('ui.times')}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t('ui.reactionEstimate')}</span>
              <strong className="text-right max-w-[60%]">{reactionSpeed}</strong>
            </div>
            {rankInfo && (
              <>
                <div className="flex justify-between border-t pt-2">
                  <span>{t('ui.overallRank')}</span>
                  <strong>
                    {t('ui.topPercent', { pct: rankInfo.percentile })}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>{t('ui.weeklyRank')}</span>
                  <strong>
                    {t('ui.rankOf', { rank: rankInfo.rank, total: rankInfo.total })}
                  </strong>
                </div>
              </>
            )}
          </div>

          {hostChallenge && compareDone && (
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3 text-center">
              <h3 className="font-bold text-lg mb-2">{t('ui.vsFriend')}</h3>
              <p className="text-xl font-black mb-2">
                {t('ui.vsScore', {
                  me: normalizedScore,
                  friend: hostChallenge.host_normalized,
                })}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                {hostChallenge.host_name} · {hostChallenge.host_avg_ms}ms
              </p>
              {iWon === false && (
                <a
                  href={rematchUrl}
                  className="inline-block bg-red-500 text-white font-bold py-3 px-6 rounded-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRetake();
                    window.history.replaceState({}, '', `?c=${hostChallenge.code}`);
                  }}
                >
                  {t('ui.rematch')}
                </a>
              )}
              {iWon === true && (
                <p className="text-green-600 font-bold">{t('ui.youWin')}</p>
              )}
              {iWon === null && normalizedScore === hostChallenge.host_normalized && (
                <p className="text-amber-600 font-bold">{t('ui.draw')}</p>
              )}
            </div>
          )}

          {hallOfFame.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="font-bold text-base mb-2 text-left">{t('ui.hallOfFame')}</h3>
              <ul className="space-y-1 text-sm">
                {hallOfFame.slice(0, 10).map((row, i) => (
                  <li key={i} className="flex justify-between">
                    <span>
                      {i + 1}. {row.player_name}
                    </span>
                    <span>
                      {row.normalized_score}
                      {t('ui.points')} · {row.avg_ms}ms
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3 text-sm space-y-1">
            <p>
              {t('ui.todayBest')}: {bestScores.todayBest}
              {t('ui.points')} / {t('ui.allTimeBest')}: {bestScores.allTimeBest}
              {t('ui.points')}
            </p>
            <p>
              {t('ui.todayChallengers', { count: todayChallengers })}
            </p>
            {isSevenDay && <p className="text-emerald-700 font-semibold">{t('ui.sevenDayBadge')}</p>}
            <p className="text-gray-600 text-left">{t('ui.retryTip')}: {retryTip}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
            <label className="block text-sm font-semibold mb-1">{t('ui.playerName')}</label>
            <input
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value.slice(0, 20))}
              className="w-full border rounded-lg px-3 py-2 mb-3"
              placeholder={t('ui.playerNamePlaceholder')}
            />
            <button
              onClick={handleCreateChallenge}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-xl mb-2 hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              {t('ui.sendChallenge')}
            </button>
            {challengeCode && (
              <p className="text-center text-sm text-indigo-700">
                {t('ui.challengeCode', { code: challengeCode })}
              </p>
            )}
          </div>

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

          <div className="flex flex-col sm:flex-row gap-4 px-4 mb-8">
            <button
              onClick={handleRetake}
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md"
            >
              {t('ui.retryBest')}
            </button>
            <Link
              href={`/${locale}`}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md"
            >
              {tGlobal('mbti.otherTests')}
            </Link>
          </div>

          <div className="mt-8 mb-8 text-center px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {tGlobal('mbti.shareResultWithFriends')}
            </h2>
            {shareButtons}
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {t('recommendations.similarTestsTop5')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {similarTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={getThumbnailUrl(test.thumbnail)}
                          alt={test.title}
                          fill
                          className="object-cover"
                        />
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
                <AdSensePlaceholder
                  slot={ADSENSE_CONFIG.SLOTS.RESULT_ABOVE_POPULAR_TOP5}
                  style={{ width: '100%', height: '250px' }}
                  className="mx-auto w-full"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {t('recommendations.popularTestsTop5')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {popularTestsState.slice(0, 5).map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={getThumbnailUrl(test.thumbnail)}
                          alt={test.title}
                          fill
                          className="object-cover"
                        />
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

  // —— Intro ——
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[680/384] mb-3">
          <Image
            src={getThumbnailUrl(thumbnail || '')}
            alt={title}
            fill
            className="object-cover"
            priority
          />
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

          {hostChallenge && (
            <div className="mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
              <p className="font-bold text-indigo-800">{t('ui.challengeIncoming')}</p>
              <p className="text-sm text-indigo-700">
                {t('ui.challengeHostScore', {
                  name: hostChallenge.host_name,
                  score: hostChallenge.host_normalized,
                })}
              </p>
            </div>
          )}

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

          <div className="mb-4">
            <input
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value.slice(0, 20))}
              className="w-full max-w-xs mx-auto block border rounded-lg px-3 py-2 text-center"
              placeholder={t('ui.playerNamePlaceholder')}
            />
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all text-lg animate-pulse"
            >
              {t('ui.startChallenge')}
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
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {tGlobal('mbti.shareWithFriends')}
            </h2>
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
                        <Image
                          src={getThumbnailUrl(test.thumbnail)}
                          alt={test.title}
                          fill
                          className="object-cover"
                        />
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
