'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Image from 'next/image';
import {
  BeforeInstallPromptEvent,
  getPwaDeferredPrompt,
  initPwaInstallPromptCapture,
  subscribePwaDeferredPrompt,
  triggerPwaInstall,
} from '@/lib/pwaInstallPrompt';
import {
  computeIsInstalled,
  detectAndroid,
  detectIOS,
  detectStandalone,
  markInstalledInStorage,
  reconcileInstalledState,
} from '@/lib/pwa/pwa-detect';

const SNOOZE_KEY = 'install-prompt-dont-show-7d';
const SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;

function isMobileDevice(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function isSnoozed(): boolean {
  const stored = localStorage.getItem(SNOOZE_KEY);
  if (!stored) return false;

  const timestamp = parseInt(stored, 10);
  if (Number.isNaN(timestamp)) {
    localStorage.removeItem(SNOOZE_KEY);
    return false;
  }

  if (Date.now() - timestamp < SNOOZE_MS) {
    return true;
  }

  localStorage.removeItem(SNOOZE_KEY);
  return false;
}

export default function InstallPrompt() {
  const t = useTranslations('installPrompt');
  const [showPrompt, setShowPrompt] = useState(false);
  const [dontShowFor7d, setDontShowFor7d] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installHint, setInstallHint] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileDevice() || detectStandalone() || isSnoozed()) {
      return;
    }

    setIsIos(detectIOS());
    setIsAndroid(detectAndroid());
    initPwaInstallPromptCapture();

    const existingPrompt = getPwaDeferredPrompt();
    if (existingPrompt) {
      setDeferredPrompt(existingPrompt);
    }

    const unsubscribe = subscribePwaDeferredPrompt(setDeferredPrompt);

    const timer = window.setTimeout(() => {
      if (!computeIsInstalled()) {
        setShowPrompt(true);
      }
    }, 60_000);

    return () => {
      window.clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  const handleInstall = async () => {
    setInstallHint(null);

    const installed = await reconcileInstalledState();
    if (installed) {
      setInstallHint(t('alreadyInstalled'));
      return;
    }

    const prompt = getPwaDeferredPrompt() ?? deferredPrompt;

    if (prompt && !isInstalling) {
      setIsInstalling(true);
      try {
        const outcome = await triggerPwaInstall(prompt);
        setDeferredPrompt(null);

        if (outcome === 'accepted') {
          markInstalledInStorage();
          setShowPrompt(false);
          return;
        }

        if (outcome === 'dismissed') {
          setInstallHint(t('installManualHint'));
        }
      } finally {
        setIsInstalling(false);
      }
      return;
    }

    setInstallHint(t('installManualHint'));
  };

  const handleClose = () => {
    setShowPrompt(false);
    if (dontShowFor7d) {
      localStorage.setItem(SNOOZE_KEY, Date.now().toString());
    }
  };

  if (!showPrompt) return null;

  const canNativeInstall = Boolean(getPwaDeferredPrompt() ?? deferredPrompt);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl animate-slide-up mx-4">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t('close')}
        >
          <X size={24} />
        </button>

        <div className="p-6 pt-6">
          <div className="flex justify-center mb-1">
            <Image src="/logo.svg" alt="QuizOasis" width={180} height={72} priority />
          </div>

          <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{t('title')}</h3>

          <p className="text-gray-600 text-center mb-6 text-sm whitespace-pre-line">{t('description')}</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-700 space-y-2 overflow-hidden">
              {isAndroid ? (
                <>
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>{t('androidStep1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: t('androidStep2') }} />
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>{t('androidStep3')}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span className="min-w-0 flex-1">
                      {t('step1').split('[ICON]')[0]}
                      <Image
                        src="/iphone_shere.png"
                        alt="iOS Share Icon"
                        width={16}
                        height={16}
                        className="inline align-middle mx-0.5"
                        style={{ verticalAlign: 'middle' }}
                      />
                      {t('step1').split('[ICON]')[1] || ' 클릭'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: t('step2') }} />
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>{t('step3')}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {installHint && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4 text-center">
              {installHint}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm mb-4">
            <input
              type="checkbox"
              id="dont-show-7d"
              checked={dontShowFor7d}
              onChange={(e) => setDontShowFor7d(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="dont-show-7d" className="text-gray-700 cursor-pointer">
              {t('dontShow7d')}
            </label>
          </div>

          {isAndroid && (
            <button
              type="button"
              onClick={() => void handleInstall()}
              disabled={isInstalling}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isInstalling ? t('installing') : canNativeInstall ? t('installButton') : t('installButtonManual')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
