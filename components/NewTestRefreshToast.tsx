'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { RefreshCw, X } from 'lucide-react';

const STORAGE_KEY = 'qo-latest-test-slugs-v1';
const POLL_MS = 30_000;
const INITIAL_DELAY_MS = 5_000;

function readStoredSlugs(): string[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as string[]) : null;
  } catch {
    return null;
  }
}

function writeStoredSlugs(slugs: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // ignore quota / private mode
  }
}

function hasNewSlug(prev: string[], next: string[]): boolean {
  if (next.length === 0) return false;
  if (prev.length === 0) return false;
  const prevSet = new Set(prev);
  return next.some((slug) => !prevSet.has(slug));
}

interface NewTestRefreshToastProps {
  /** Slugs from the current server render — page already shows these tests */
  serverSlugs?: string[];
}

export default function NewTestRefreshToast({ serverSlugs = [] }: NewTestRefreshToastProps) {
  const t = useTranslations('newTestRefreshToast');
  const [visible, setVisible] = useState(false);
  const latestSlugsRef = useRef<string[]>([]);
  const serverSlugsRef = useRef<string[]>(serverSlugs);
  const shownForFingerprintRef = useRef<string | null>(null);

  const persistAndHide = useCallback(() => {
    if (latestSlugsRef.current.length > 0) {
      writeStoredSlugs(latestSlugsRef.current);
    }
    setVisible(false);
  }, []);

  const handleRefresh = useCallback(() => {
    persistAndHide();
    window.location.reload();
  }, [persistAndHide]);

  const handleDismiss = useCallback(() => {
    persistAndHide();
  }, [persistAndHide]);

  useEffect(() => {
    let cancelled = false;
    let intervalId: number | undefined;
    let initialTimer: number | undefined;

    const check = async () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
        return;
      }

      try {
        const response = await fetch(`/api/tests/latest-slugs?limit=15&_=${Date.now()}`, {
          cache: 'no-store',
        });
        if (!response.ok || cancelled) return;

        const data = await response.json();
        const slugs: string[] = Array.isArray(data?.slugs) ? data.slugs.filter(Boolean) : [];
        if (slugs.length === 0 || cancelled) return;

        latestSlugsRef.current = slugs;
        const fingerprint = slugs.join('|');
        const stored = readStoredSlugs();

        // Page was rendered with the latest list — sync storage, no refresh needed
        if (!hasNewSlug(serverSlugsRef.current, slugs)) {
          writeStoredSlugs(slugs);
          return;
        }

        if (!stored) {
          writeStoredSlugs(slugs);
          return;
        }

        if (!hasNewSlug(stored, slugs)) {
          return;
        }

        // Same new set already prompted in this tab session
        if (shownForFingerprintRef.current === fingerprint) {
          return;
        }

        shownForFingerprintRef.current = fingerprint;
        setVisible(true);
      } catch {
        // network errors: silent
      }
    };

    initialTimer = window.setTimeout(() => {
      void check();
      intervalId = window.setInterval(() => {
        void check();
      }, POLL_MS);
    }, INITIAL_DELAY_MS);

    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        void check();
      }
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      cancelled = true;
      if (initialTimer) window.clearTimeout(initialTimer);
      if (intervalId) window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-md animate-slide-up sm:left-auto sm:right-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-white p-4 shadow-xl">
        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          <RefreshCw size={18} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-gray-900">{t('title')}</p>
          <p className="mt-1 text-sm text-gray-600">{t('description')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleRefresh}
              className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              {t('refresh')}
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              {t('dismiss')}
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 rounded-md p-1 text-gray-400 hover:text-gray-600"
          aria-label={t('dismiss')}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
