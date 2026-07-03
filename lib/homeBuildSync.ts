const BUILD_STORAGE_KEY = 'app_build_id';

export function getAppBuildId(): string {
  return String(
    process.env.NEXT_PUBLIC_GIT_HASH || process.env.NEXT_PUBLIC_BUILD_TIME || 'dev'
  ).trim();
}

/** 홈 화면 sessionStorage (순서·스크롤)만 초기화 */
export function clearHomeSessionState(): void {
  if (typeof window === 'undefined') return;

  sessionStorage.removeItem('home_scroll_position');
  sessionStorage.removeItem('latest_tests_scroll_position');

  const keysToRemove: string[] = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key?.startsWith('home_tests_order_')) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((key) => sessionStorage.removeItem(key));
}

/**
 * 배포(build)가 바뀌었으면 홈 캐시 상태를 지우고 true 반환.
 * 최초 방문(stored 없음)은 ID만 저장하고 false.
 */
export function applyHomeBuildSync(): boolean {
  if (typeof window === 'undefined') return false;

  const current = getAppBuildId();
  const stored = sessionStorage.getItem(BUILD_STORAGE_KEY);

  if (stored === current) {
    return false;
  }

  if (stored !== null) {
    clearHomeSessionState();
  }

  sessionStorage.setItem(BUILD_STORAGE_KEY, current);
  return stored !== null;
}
