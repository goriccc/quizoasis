export const PWA_INSTALLED_LS_KEY = 'quizoasis_pwa_installed';

type RelatedApplication = { platform: string; id?: string; url?: string };

type NavigatorWithRelated = Navigator & {
  getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
};

export function detectIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

export function detectAndroid(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
}

export function detectStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(display-mode: standalone)').matches) return true;
  const nav = navigator as Navigator & { standalone?: boolean };
  return nav.standalone === true || document.referrer.includes('android-app://');
}

export function readInstalledFromStorage(): boolean {
  try {
    return localStorage.getItem(PWA_INSTALLED_LS_KEY) === 'true';
  } catch {
    return false;
  }
}

export function markInstalledInStorage(): void {
  try {
    localStorage.setItem(PWA_INSTALLED_LS_KEY, 'true');
  } catch {
    /* ignore */
  }
}

export function clearInstalledInStorage(): void {
  try {
    localStorage.removeItem(PWA_INSTALLED_LS_KEY);
  } catch {
    /* ignore */
  }
}

export function computeIsInstalled(): boolean {
  if (detectStandalone()) return true;
  return readInstalledFromStorage();
}

export async function probeInstalledRelatedApps(): Promise<boolean | null> {
  if (typeof navigator === 'undefined') return null;
  const fn = (navigator as NavigatorWithRelated).getInstalledRelatedApps;
  if (!fn) return null;
  try {
    const apps = await fn.call(navigator);
    return apps.length > 0;
  } catch {
    return null;
  }
}

export async function reconcileInstalledState(): Promise<boolean> {
  if (detectStandalone()) {
    markInstalledInStorage();
    return true;
  }

  const stored = readInstalledFromStorage();
  const related = await probeInstalledRelatedApps();

  if (related === true) {
    if (!stored) markInstalledInStorage();
    return true;
  }

  if (related === false) {
    if (stored) clearInstalledInStorage();
    return false;
  }

  return stored;
}
