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

export type RuntimeTop3Payload = {
  questions: unknown[];
  meta: RuntimeTestMeta;
  messagesNamespace: string;
  messagesFileSlug: string;
};

export type RuntimeTestKind = 'balance' | 'top3';

export type RuntimeTestEntry = {
  slug: string;
  format: TestFormat;
  kind?: RuntimeTestKind;
  /** Prefer SSR for start-screen LCP (balance / text tests). Keep false for camera/game loops. */
  ssr: boolean;
  loadMeta: () => Promise<RuntimeTestMeta>;
  loadBalancePayload?: () => Promise<RuntimeBalancePayload>;
  loadTop3Payload?: () => Promise<RuntimeTop3Payload>;
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
  'phase3-anxiety-button-top3': {
    slug: 'phase3-anxiety-button-top3',
    format: 'scenario_4',
    kind: 'top3',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_ANXIETY_BUTTON_TOP3_META } = await import('./phase3AnxietyButtonTop3Data');
      return {
        title: PHASE3_ANXIETY_BUTTON_TOP3_META.title,
        description: PHASE3_ANXIETY_BUTTON_TOP3_META.description,
        tags: PHASE3_ANXIETY_BUTTON_TOP3_META.tags,
        thumbnail: 'p3_test_anxiety_button_top3.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadTop3Payload: async () => {
      const mod = await import('./phase3AnxietyButtonTop3Data');
      return {
        questions: mod.phase3AnxietyButtonTop3Questions,
        meta: {
          title: mod.PHASE3_ANXIETY_BUTTON_TOP3_META.title,
          description: mod.PHASE3_ANXIETY_BUTTON_TOP3_META.description,
          tags: mod.PHASE3_ANXIETY_BUTTON_TOP3_META.tags,
          thumbnail: 'p3_test_anxiety_button_top3.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3AnxietyButtonTop3Test',
        messagesFileSlug: 'phase3-anxiety-button-top3',
      };
    },
    loadClient: () => import('@/components/Phase3AnxietyButtonTop3TestClient'),
  },

  'phase3-hurtful-tone-top3': {
    slug: 'phase3-hurtful-tone-top3',
    format: 'scenario_4',
    kind: 'top3',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_HURTFUL_TONE_TOP3_META } = await import('./phase3HurtfulToneTop3Data');
      return {
        title: PHASE3_HURTFUL_TONE_TOP3_META.title,
        description: PHASE3_HURTFUL_TONE_TOP3_META.description,
        tags: PHASE3_HURTFUL_TONE_TOP3_META.tags,
        thumbnail: 'p3_test_hurtful_tone_top3.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadTop3Payload: async () => {
      const mod = await import('./phase3HurtfulToneTop3Data');
      return {
        questions: mod.phase3HurtfulToneTop3Questions,
        meta: {
          title: mod.PHASE3_HURTFUL_TONE_TOP3_META.title,
          description: mod.PHASE3_HURTFUL_TONE_TOP3_META.description,
          tags: mod.PHASE3_HURTFUL_TONE_TOP3_META.tags,
          thumbnail: 'p3_test_hurtful_tone_top3.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3HurtfulToneTop3Test',
        messagesFileSlug: 'phase3-hurtful-tone-top3',
      };
    },
    loadClient: () => import('@/components/Phase3HurtfulToneTop3TestClient'),
  },

  'phase3-situationship-stuck-reason': {
    slug: 'phase3-situationship-stuck-reason',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_SITUATIONSHIP_STUCK_META } = await import('./phase3SituationshipStuckReasonData');
      return {
        title: PHASE3_SITUATIONSHIP_STUCK_META.title,
        description: PHASE3_SITUATIONSHIP_STUCK_META.description,
        tags: PHASE3_SITUATIONSHIP_STUCK_META.tags,
        thumbnail: 'p3_test_situationship_stuck_reason.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3SituationshipStuckReasonData');
      return {
        questions: mod.phase3SituationshipStuckQuestions,
        results: mod.phase3SituationshipStuckResults,
        meta: {
          title: mod.PHASE3_SITUATIONSHIP_STUCK_META.title,
          description: mod.PHASE3_SITUATIONSHIP_STUCK_META.description,
          tags: mod.PHASE3_SITUATIONSHIP_STUCK_META.tags,
          thumbnail: 'p3_test_situationship_stuck_reason.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3SituationshipStuckReasonTest',
        messagesFileSlug: 'phase3-situationship-stuck-reason',
      };
    },
    loadClient: () => import('@/components/Phase3SituationshipStuckReasonTestClient'),
  },

  'phase3-fairytale-hero': {
    slug: 'phase3-fairytale-hero',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_FAIRYTALE_HERO_META } = await import('./phase3FairytaleHeroData');
      return {
        title: PHASE3_FAIRYTALE_HERO_META.title,
        description: PHASE3_FAIRYTALE_HERO_META.description,
        tags: PHASE3_FAIRYTALE_HERO_META.tags,
        thumbnail: 'p3_test_fairytale_hero.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3FairytaleHeroData');
      return {
        questions: mod.phase3FairytaleHeroQuestions,
        results: mod.phase3FairytaleHeroResults,
        meta: {
          title: mod.PHASE3_FAIRYTALE_HERO_META.title,
          description: mod.PHASE3_FAIRYTALE_HERO_META.description,
          tags: mod.PHASE3_FAIRYTALE_HERO_META.tags,
          thumbnail: 'p3_test_fairytale_hero.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3FairytaleHeroTest',
        messagesFileSlug: 'phase3-fairytale-hero',
      };
    },
    loadClient: () => import('@/components/Phase3FairytaleHeroTestClient'),
  },

  'phase3-empty-even-loved': {
    slug: 'phase3-empty-even-loved',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_EMPTY_EVEN_LOVED_META } = await import('./phase3EmptyEvenLovedData');
      return {
        title: PHASE3_EMPTY_EVEN_LOVED_META.title,
        description: PHASE3_EMPTY_EVEN_LOVED_META.description,
        tags: PHASE3_EMPTY_EVEN_LOVED_META.tags,
        thumbnail: 'p3_test_empty_even_loved.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3EmptyEvenLovedData');
      return {
        questions: mod.phase3EmptyEvenLovedQuestions,
        results: mod.phase3EmptyEvenLovedResults,
        meta: {
          title: mod.PHASE3_EMPTY_EVEN_LOVED_META.title,
          description: mod.PHASE3_EMPTY_EVEN_LOVED_META.description,
          tags: mod.PHASE3_EMPTY_EVEN_LOVED_META.tags,
          thumbnail: 'p3_test_empty_even_loved.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3EmptyEvenLovedTest',
        messagesFileSlug: 'phase3-empty-even-loved',
      };
    },
    loadClient: () => import('@/components/Phase3EmptyEvenLovedTestClient'),
  },

  'phase3-tongue-tied-crush': {
    slug: 'phase3-tongue-tied-crush',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_TONGUE_TIED_CRUSH_META } = await import('./phase3TongueTiedCrushData');
      return {
        title: PHASE3_TONGUE_TIED_CRUSH_META.title,
        description: PHASE3_TONGUE_TIED_CRUSH_META.description,
        tags: PHASE3_TONGUE_TIED_CRUSH_META.tags,
        thumbnail: 'p3_test_tongue_tied_crush.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3TongueTiedCrushData');
      return {
        questions: mod.phase3TongueTiedCrushQuestions,
        results: mod.phase3TongueTiedCrushResults,
        meta: {
          title: mod.PHASE3_TONGUE_TIED_CRUSH_META.title,
          description: mod.PHASE3_TONGUE_TIED_CRUSH_META.description,
          tags: mod.PHASE3_TONGUE_TIED_CRUSH_META.tags,
          thumbnail: 'p3_test_tongue_tied_crush.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3TongueTiedCrushTest',
        messagesFileSlug: 'phase3-tongue-tied-crush',
      };
    },
    loadClient: () => import('@/components/Phase3TongueTiedCrushTestClient'),
  },

  'phase3-alone-even-in-love': {
    slug: 'phase3-alone-even-in-love',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_ALONE_EVEN_IN_LOVE_META } = await import('./phase3AloneEvenInLoveData');
      return {
        title: PHASE3_ALONE_EVEN_IN_LOVE_META.title,
        description: PHASE3_ALONE_EVEN_IN_LOVE_META.description,
        tags: PHASE3_ALONE_EVEN_IN_LOVE_META.tags,
        thumbnail: 'p3_test_alone_even_in_love.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3AloneEvenInLoveData');
      return {
        questions: mod.phase3AloneEvenInLoveQuestions,
        results: mod.phase3AloneEvenInLoveResults,
        meta: {
          title: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.title,
          description: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.description,
          tags: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.tags,
          thumbnail: 'p3_test_alone_even_in_love.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3AloneEvenInLoveTest',
        messagesFileSlug: 'phase3-alone-even-in-love',
      };
    },
    loadClient: () => import('@/components/Phase3AloneEvenInLoveTestClient'),
  },

  'phase3-overgiving-early-love': {
    slug: 'phase3-overgiving-early-love',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_OVERGIVING_EARLY_LOVE_META } = await import('./phase3OvergivingEarlyLoveData');
      return {
        title: PHASE3_OVERGIVING_EARLY_LOVE_META.title,
        description: PHASE3_OVERGIVING_EARLY_LOVE_META.description,
        tags: PHASE3_OVERGIVING_EARLY_LOVE_META.tags,
        thumbnail: 'p3_test_overgiving_early_love.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3OvergivingEarlyLoveData');
      return {
        questions: mod.phase3OvergivingEarlyLoveQuestions,
        results: mod.phase3OvergivingEarlyLoveResults,
        meta: {
          title: mod.PHASE3_OVERGIVING_EARLY_LOVE_META.title,
          description: mod.PHASE3_OVERGIVING_EARLY_LOVE_META.description,
          tags: mod.PHASE3_OVERGIVING_EARLY_LOVE_META.tags,
          thumbnail: 'p3_test_overgiving_early_love.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3OvergivingEarlyLoveTest',
        messagesFileSlug: 'phase3-overgiving-early-love',
      };
    },
    loadClient: () => import('@/components/Phase3OvergivingEarlyLoveTestClient'),
  },

  'phase3-always-the-weaker-in-love': {
    slug: 'phase3-always-the-weaker-in-love',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META } = await import('./phase3AlwaysTheWeakerInLoveData');
      return {
        title: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.title,
        description: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.description,
        tags: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.tags,
        thumbnail: 'p3_test_always_the_weaker_in_love.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3AlwaysTheWeakerInLoveData');
      return {
        questions: mod.phase3AlwaysTheWeakerInLoveQuestions,
        results: mod.phase3AlwaysTheWeakerInLoveResults,
        meta: {
          title: mod.PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.title,
          description: mod.PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.description,
          tags: mod.PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META.tags,
          thumbnail: 'p3_test_always_the_weaker_in_love.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3AlwaysTheWeakerInLoveTest',
        messagesFileSlug: 'phase3-always-the-weaker-in-love',
      };
    },
    loadClient: () => import('@/components/Phase3AlwaysTheWeakerInLoveTestClient'),
  },

  'phase3-contact-obsession-reason': {
    slug: 'phase3-contact-obsession-reason',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_CONTACT_OBSESSION_REASON_META } = await import('./phase3ContactObsessionReasonData');
      return {
        title: PHASE3_CONTACT_OBSESSION_REASON_META.title,
        description: PHASE3_CONTACT_OBSESSION_REASON_META.description,
        tags: PHASE3_CONTACT_OBSESSION_REASON_META.tags,
        thumbnail: 'p3_test_contact_obsession_reason.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3ContactObsessionReasonData');
      return {
        questions: mod.phase3ContactObsessionReasonQuestions,
        results: mod.phase3ContactObsessionReasonResults,
        meta: {
          title: mod.PHASE3_CONTACT_OBSESSION_REASON_META.title,
          description: mod.PHASE3_CONTACT_OBSESSION_REASON_META.description,
          tags: mod.PHASE3_CONTACT_OBSESSION_REASON_META.tags,
          thumbnail: 'p3_test_contact_obsession_reason.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3ContactObsessionReasonTest',
        messagesFileSlug: 'phase3-contact-obsession-reason',
      };
    },
    loadClient: () => import('@/components/Phase3ContactObsessionReasonTestClient'),
  },
};

export function getRuntimeTestEntry(slug: string): RuntimeTestEntry | undefined {
  return TEST_RUNTIME_REGISTRY[slug];
}

export function listRuntimeRegistrySlugs(): string[] {
  return Object.keys(TEST_RUNTIME_REGISTRY);
}
