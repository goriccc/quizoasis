export type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

type InstallPromptListener = (prompt: BeforeInstallPromptEvent | null) => void;

declare global {
  interface Window {
    __pwaDeferredPrompt?: BeforeInstallPromptEvent | null;
    __pwaInstallPromptListeners?: Set<InstallPromptListener>;
    __pwaInstallPromptCaptureInit?: boolean;
  }
}

export function getPwaDeferredPrompt(): BeforeInstallPromptEvent | null {
  if (typeof window === 'undefined') return null;
  return window.__pwaDeferredPrompt ?? null;
}

function notifyPwaDeferredPrompt(prompt: BeforeInstallPromptEvent | null): void {
  if (typeof window === 'undefined') return;
  window.__pwaDeferredPrompt = prompt;
  window.__pwaInstallPromptListeners?.forEach((listener) => listener(prompt));
}

export function subscribePwaDeferredPrompt(listener: InstallPromptListener): () => void {
  if (typeof window === 'undefined') return () => {};

  window.__pwaInstallPromptListeners ??= new Set();
  window.__pwaInstallPromptListeners.add(listener);

  return () => {
    window.__pwaInstallPromptListeners?.delete(listener);
  };
}

export function initPwaInstallPromptCapture(): void {
  if (typeof window === 'undefined' || window.__pwaInstallPromptCaptureInit) return;

  window.__pwaInstallPromptCaptureInit = true;
  window.__pwaDeferredPrompt = window.__pwaDeferredPrompt ?? null;
  window.__pwaInstallPromptListeners ??= new Set();

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    notifyPwaDeferredPrompt(event as BeforeInstallPromptEvent);
  });

  window.addEventListener('appinstalled', () => {
    notifyPwaDeferredPrompt(null);
  });
}

export async function triggerPwaInstall(
  prompt: BeforeInstallPromptEvent
): Promise<'accepted' | 'dismissed' | 'unavailable'> {
  try {
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    notifyPwaDeferredPrompt(null);
    return outcome;
  } catch {
    notifyPwaDeferredPrompt(null);
    return 'unavailable';
  }
}
