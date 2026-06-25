/**
 * AdSense 무효 클릭·연타 완화용 트래픽 가드
 *
 * AdSense iframe은 cross-origin이라 클릭 이벤트를 직접 받을 수 없습니다.
 * 광고 iframe 포커스(blur + activeElement)를 상호작용으로 근사합니다.
 * 짧은 시간(5분) 창에서만 카운트 — 긴 간격의 클릭은 정상으로 간주합니다.
 */

const PAUSE_UNTIL_KEY = 'quizoasis_ad_pause_until';
const INTERACTION_TIMESTAMPS_KEY = 'quizoasis_ad_interaction_times';
const MAX_INTERACTIONS_IN_WINDOW = 5;
const WINDOW_MS = 5 * 60 * 1000;
const PAUSE_DAYS = 7;
const PAUSE_MS = PAUSE_DAYS * 24 * 60 * 60 * 1000;
const INTERACTION_DEBOUNCE_MS = 1500;

let guardInitialized = false;
let lastInteractionAt = 0;

function isAdIframe(element: Element | null): boolean {
  if (!element || element.tagName !== 'IFRAME') return false;
  return Boolean(
    element.closest('ins.adsbygoogle') ||
      element.closest('[data-ad-client]') ||
      element.closest('[data-ad-slot]')
  );
}

export function getAdPauseUntil(): number {
  if (typeof window === 'undefined') return 0;
  const raw = localStorage.getItem(PAUSE_UNTIL_KEY);
  if (!raw) return 0;
  const until = parseInt(raw, 10);
  return Number.isNaN(until) ? 0 : until;
}

export function isAdPaused(): boolean {
  const until = getAdPauseUntil();
  if (until <= 0) return false;
  if (Date.now() < until) return true;
  localStorage.removeItem(PAUSE_UNTIL_KEY);
  localStorage.removeItem(INTERACTION_TIMESTAMPS_KEY);
  return false;
}

export function pauseAds(): void {
  if (typeof window === 'undefined') return;
  const until = Date.now() + PAUSE_MS;
  localStorage.setItem(PAUSE_UNTIL_KEY, String(until));
  localStorage.removeItem(INTERACTION_TIMESTAMPS_KEY);
  window.dispatchEvent(
    new CustomEvent('quizoasis:ad-pause', { detail: { newlyPaused: true } })
  );
}

function getRecentInteractionTimestamps(now: number): number[] {
  const raw = localStorage.getItem(INTERACTION_TIMESTAMPS_KEY);
  let times: number[] = [];
  try {
    const parsed = JSON.parse(raw || '[]');
    times = Array.isArray(parsed) ? parsed : [];
  } catch {
    times = [];
  }
  return times.filter((t) => typeof t === 'number' && now - t <= WINDOW_MS);
}

function saveInteractionTimestamps(times: number[]): void {
  localStorage.setItem(INTERACTION_TIMESTAMPS_KEY, JSON.stringify(times));
}

export function recordAdInteraction(): void {
  if (typeof window === 'undefined' || isAdPaused()) return;

  const now = Date.now();
  if (now - lastInteractionAt < INTERACTION_DEBOUNCE_MS) return;
  lastInteractionAt = now;

  const recent = getRecentInteractionTimestamps(now);
  recent.push(now);
  saveInteractionTimestamps(recent);

  if (recent.length > MAX_INTERACTIONS_IN_WINDOW) {
    pauseAds();
  }
}

function handleWindowBlur(): void {
  window.setTimeout(() => {
    if (isAdPaused()) return;
    if (isAdIframe(document.activeElement)) {
      recordAdInteraction();
    }
  }, 0);
}

function handleVisibilityChange(): void {
  if (document.visibilityState !== 'hidden' || isAdPaused()) return;
  if (isAdIframe(document.activeElement)) {
    recordAdInteraction();
  }
}

/** 페이지당 1회 — 광고 iframe 상호작용 감지 리스너 등록 */
export function initAdTrafficGuard(): void {
  if (typeof window === 'undefined' || guardInitialized) return;
  guardInitialized = true;

  window.addEventListener('blur', handleWindowBlur);
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

export function shouldShowAds(): boolean {
  if (typeof window === 'undefined') return true;
  return !isAdPaused();
}

export const AD_TRAFFIC_GUARD = {
  MAX_INTERACTIONS_IN_WINDOW,
  WINDOW_MINUTES: WINDOW_MS / 60 / 1000,
  PAUSE_DAYS,
} as const;
