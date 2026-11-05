/**
 * Runtime test registry — slug → lazy loaders.
 * New tests MUST register here instead of growing page.tsx branches.
 * Legacy page.tsx branches remain as fallback until migrated.
 */

import type { ComponentType } from 'react';
import type { TestFormat } from './testFormats';

export type LocaleTextMap = Record<string, string> | Record<string, string[]>;

export type RuntimeTestMeta = {
  title: Record<string, string>;
  description: Record<string, string>;
  tags: Record<string, string[]>;
  thumbnail: string;
  type?: string;
  category?: string;
  format?: TestFormat;
};

export type RuntimeBalancePayload = {
  questions: unknown[];
  results: unknown[];
  meta: RuntimeTestMeta;
  /** next-intl namespace for this test (e.g. phase3FirstDateBalanceGameTest) */
  messagesNamespace: string;
  /** optional split messages path under messages/{locale}/tests/ */
  messagesFileSlug: string;
};

export type RuntimeTestEntry = {
  slug: string;
  format: TestFormat;
  /** Prefer SSR for start-screen LCP (balance / text tests). Keep false for camera/game loops. */
  ssr: boolean;
  loadMeta: () => Promise<RuntimeTestMeta>;
  loadBalancePayload?: () => Promise<RuntimeBalancePayload>;
  loadClient: () => Promise<{ default: ComponentType<any> }>;
};

function balanceMetaFrom(
  meta: {
    title: Record<string, string>;
    description: Record<string, string>;
    tags: Record<string, string[]>;
  },
  thumbnail: string,
): RuntimeTestMeta {
  return {
    title: meta.title,
    description: meta.description,
    tags: meta.tags,
    thumbnail,
    type: 'psychology',
    category: 'personality',
    format: 'game',
  };
}

export const TEST_RUNTIME_REGISTRY: Record<string, RuntimeTestEntry> = {
  'phase3-jealousy-balance-game': {
    slug: 'phase3-jealousy-balance-game',
    format: 'game',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_JEALOUSY_BALANCE_META } = await import('./phase3JealousyBalanceGameData');
      return balanceMetaFrom(PHASE3_JEALOUSY_BALANCE_META, 'p3_test_balance_game_jealousy.webp');
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3JealousyBalanceGameData');
      return {
        questions: mod.phase3JealousyBalanceGameQuestions,
        results: mod.phase3JealousyBalanceGameResults,
        meta: balanceMetaFrom(mod.PHASE3_JEALOUSY_BALANCE_META, 'p3_test_balance_game_jealousy.webp'),
        messagesNamespace: 'phase3JealousyBalanceGameTest',
        messagesFileSlug: 'phase3-jealousy-balance-game',
      };
    },
    loadClient: () => import('@/components/Phase3JealousyBalanceGameTestClient'),
  },
  'phase3-first-date-balance-game': {
    slug: 'phase3-first-date-balance-game',
    format: 'game',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_FIRST_DATE_BALANCE_META } = await import('./phase3FirstDateBalanceGameData');
      return balanceMetaFrom(PHASE3_FIRST_DATE_BALANCE_META, 'p3_test_balance_game_first_date.webp');
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3FirstDateBalanceGameData');
      return {
        questions: mod.phase3FirstDateBalanceGameQuestions,
        results: mod.phase3FirstDateBalanceGameResults,
        meta: balanceMetaFrom(mod.PHASE3_FIRST_DATE_BALANCE_META, 'p3_test_balance_game_first_date.webp'),
        messagesNamespace: 'phase3FirstDateBalanceGameTest',
        messagesFileSlug: 'phase3-first-date-balance-game',
      };
    },
    loadClient: () => import('@/components/Phase3FirstDateBalanceGameTestClient'),
  },
  'phase3-couple-trip-balance-game': {
    slug: 'phase3-couple-trip-balance-game',
    format: 'game',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_COUPLE_TRIP_BALANCE_META } = await import('./phase3CoupleTripBalanceGameData');
      return balanceMetaFrom(PHASE3_COUPLE_TRIP_BALANCE_META, 'p3_test_balance_game_couple_trip.webp');
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3CoupleTripBalanceGameData');
      return {
        questions: mod.phase3CoupleTripBalanceGameQuestions,
        results: mod.phase3CoupleTripBalanceGameResults,
        meta: balanceMetaFrom(mod.PHASE3_COUPLE_TRIP_BALANCE_META, 'p3_test_balance_game_couple_trip.webp'),
        messagesNamespace: 'phase3CoupleTripBalanceGameTest',
        messagesFileSlug: 'phase3-couple-trip-balance-game',
      };
    },
    loadClient: () => import('@/components/Phase3CoupleTripBalanceGameTestClient'),
  },
};

export function getRuntimeTestEntry(slug: string): RuntimeTestEntry | undefined {
  return TEST_RUNTIME_REGISTRY[slug];
}

export function listRuntimeRegistrySlugs(): string[] {
  return Object.keys(TEST_RUNTIME_REGISTRY);
}
