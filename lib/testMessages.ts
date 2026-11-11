/**
 * Split test-scoped next-intl namespaces.
 * Files: messages/{locale}/tests/{messagesFileSlug}.json
 * Shape: { "phase3XxxTest": { ... } }
 *
 * IMPORTANT: Use bundled dynamic imports — fs.readFileSync works in `next dev`
 * but fails on Vercel serverless (JSON files are not on the function filesystem).
 */

import { locales, type Locale } from '@/i18n';

type MessageLoader = () => Promise<{ default?: Record<string, unknown> } | Record<string, unknown>>;

/** Explicit loaders so Next/webpack includes these JSON files in the server bundle. */
const SPLIT_MESSAGE_LOADERS: Record<string, Partial<Record<Locale, MessageLoader>>> = {
  'phase3-jealousy-balance-game': {
    ko: () => import('@/messages/ko/tests/phase3-jealousy-balance-game.json'),
    en: () => import('@/messages/en/tests/phase3-jealousy-balance-game.json'),
    ja: () => import('@/messages/ja/tests/phase3-jealousy-balance-game.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-jealousy-balance-game.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-jealousy-balance-game.json'),
    vi: () => import('@/messages/vi/tests/phase3-jealousy-balance-game.json'),
    id: () => import('@/messages/id/tests/phase3-jealousy-balance-game.json'),
  },
  'phase3-first-date-balance-game': {
    ko: () => import('@/messages/ko/tests/phase3-first-date-balance-game.json'),
    en: () => import('@/messages/en/tests/phase3-first-date-balance-game.json'),
    ja: () => import('@/messages/ja/tests/phase3-first-date-balance-game.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-first-date-balance-game.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-first-date-balance-game.json'),
    vi: () => import('@/messages/vi/tests/phase3-first-date-balance-game.json'),
    id: () => import('@/messages/id/tests/phase3-first-date-balance-game.json'),
  },
  'phase3-couple-trip-balance-game': {
    ko: () => import('@/messages/ko/tests/phase3-couple-trip-balance-game.json'),
    en: () => import('@/messages/en/tests/phase3-couple-trip-balance-game.json'),
    ja: () => import('@/messages/ja/tests/phase3-couple-trip-balance-game.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-couple-trip-balance-game.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-couple-trip-balance-game.json'),
    vi: () => import('@/messages/vi/tests/phase3-couple-trip-balance-game.json'),
    id: () => import('@/messages/id/tests/phase3-couple-trip-balance-game.json'),
  },
  'phase3-alone-even-in-love': {
    ko: () => import('@/messages/ko/tests/phase3-alone-even-in-love.json'),
    en: () => import('@/messages/en/tests/phase3-alone-even-in-love.json'),
    ja: () => import('@/messages/ja/tests/phase3-alone-even-in-love.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-alone-even-in-love.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-alone-even-in-love.json'),
    vi: () => import('@/messages/vi/tests/phase3-alone-even-in-love.json'),
    id: () => import('@/messages/id/tests/phase3-alone-even-in-love.json'),
  },
  'phase3-overgiving-early-love': {
    ko: () => import('@/messages/ko/tests/phase3-overgiving-early-love.json'),
    en: () => import('@/messages/en/tests/phase3-overgiving-early-love.json'),
    ja: () => import('@/messages/ja/tests/phase3-overgiving-early-love.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-overgiving-early-love.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-overgiving-early-love.json'),
    vi: () => import('@/messages/vi/tests/phase3-overgiving-early-love.json'),
    id: () => import('@/messages/id/tests/phase3-overgiving-early-love.json'),
  },
  'phase3-always-the-weaker-in-love': {
    ko: () => import('@/messages/ko/tests/phase3-always-the-weaker-in-love.json'),
    en: () => import('@/messages/en/tests/phase3-always-the-weaker-in-love.json'),
    ja: () => import('@/messages/ja/tests/phase3-always-the-weaker-in-love.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-always-the-weaker-in-love.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-always-the-weaker-in-love.json'),
    vi: () => import('@/messages/vi/tests/phase3-always-the-weaker-in-love.json'),
    id: () => import('@/messages/id/tests/phase3-always-the-weaker-in-love.json'),
  },
  'phase3-contact-obsession-reason': {
    ko: () => import('@/messages/ko/tests/phase3-contact-obsession-reason.json'),
    en: () => import('@/messages/en/tests/phase3-contact-obsession-reason.json'),
    ja: () => import('@/messages/ja/tests/phase3-contact-obsession-reason.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-contact-obsession-reason.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-contact-obsession-reason.json'),
    vi: () => import('@/messages/vi/tests/phase3-contact-obsession-reason.json'),
    id: () => import('@/messages/id/tests/phase3-contact-obsession-reason.json'),
  },
  'phase3-love-eyeing-reason': {
    ko: () => import('@/messages/ko/tests/phase3-love-eyeing-reason.json'),
    en: () => import('@/messages/en/tests/phase3-love-eyeing-reason.json'),
    ja: () => import('@/messages/ja/tests/phase3-love-eyeing-reason.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-love-eyeing-reason.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-love-eyeing-reason.json'),
    vi: () => import('@/messages/vi/tests/phase3-love-eyeing-reason.json'),
    id: () => import('@/messages/id/tests/phase3-love-eyeing-reason.json'),
  },
  'phase3-tongue-tied-crush': {
    ko: () => import('@/messages/ko/tests/phase3-tongue-tied-crush.json'),
    en: () => import('@/messages/en/tests/phase3-tongue-tied-crush.json'),
    ja: () => import('@/messages/ja/tests/phase3-tongue-tied-crush.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-tongue-tied-crush.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-tongue-tied-crush.json'),
    vi: () => import('@/messages/vi/tests/phase3-tongue-tied-crush.json'),
    id: () => import('@/messages/id/tests/phase3-tongue-tied-crush.json'),
  },
  'phase3-empty-even-loved': {
    ko: () => import('@/messages/ko/tests/phase3-empty-even-loved.json'),
    en: () => import('@/messages/en/tests/phase3-empty-even-loved.json'),
    ja: () => import('@/messages/ja/tests/phase3-empty-even-loved.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-empty-even-loved.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-empty-even-loved.json'),
    vi: () => import('@/messages/vi/tests/phase3-empty-even-loved.json'),
    id: () => import('@/messages/id/tests/phase3-empty-even-loved.json'),
  },
  'phase3-fairytale-hero': {
    ko: () => import('@/messages/ko/tests/phase3-fairytale-hero.json'),
    en: () => import('@/messages/en/tests/phase3-fairytale-hero.json'),
    ja: () => import('@/messages/ja/tests/phase3-fairytale-hero.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-fairytale-hero.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-fairytale-hero.json'),
    vi: () => import('@/messages/vi/tests/phase3-fairytale-hero.json'),
    id: () => import('@/messages/id/tests/phase3-fairytale-hero.json'),
  },
  'phase3-situationship-stuck-reason': {
    ko: () => import('@/messages/ko/tests/phase3-situationship-stuck-reason.json'),
    en: () => import('@/messages/en/tests/phase3-situationship-stuck-reason.json'),
    ja: () => import('@/messages/ja/tests/phase3-situationship-stuck-reason.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-situationship-stuck-reason.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-situationship-stuck-reason.json'),
    vi: () => import('@/messages/vi/tests/phase3-situationship-stuck-reason.json'),
    id: () => import('@/messages/id/tests/phase3-situationship-stuck-reason.json'),
  },
  'phase3-hurtful-tone-top3': {
    ko: () => import('@/messages/ko/tests/phase3-hurtful-tone-top3.json'),
    en: () => import('@/messages/en/tests/phase3-hurtful-tone-top3.json'),
    ja: () => import('@/messages/ja/tests/phase3-hurtful-tone-top3.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-hurtful-tone-top3.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-hurtful-tone-top3.json'),
    vi: () => import('@/messages/vi/tests/phase3-hurtful-tone-top3.json'),
    id: () => import('@/messages/id/tests/phase3-hurtful-tone-top3.json'),
  },
  'phase3-anxiety-button-top3': {
    ko: () => import('@/messages/ko/tests/phase3-anxiety-button-top3.json'),
    en: () => import('@/messages/en/tests/phase3-anxiety-button-top3.json'),
    ja: () => import('@/messages/ja/tests/phase3-anxiety-button-top3.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-anxiety-button-top3.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-anxiety-button-top3.json'),
    vi: () => import('@/messages/vi/tests/phase3-anxiety-button-top3.json'),
    id: () => import('@/messages/id/tests/phase3-anxiety-button-top3.json'),
  },
};

async function resolveLoader(loader: MessageLoader): Promise<Record<string, unknown>> {
  try {
    const mod = await loader();
    const data = (mod as { default?: Record<string, unknown> }).default ?? (mod as Record<string, unknown>);
    return data && typeof data === 'object' ? data : {};
  } catch {
    return {};
  }
}

export async function loadSplitTestMessages(
  locale: string,
  messagesFileSlug: string,
): Promise<Record<string, unknown>> {
  const loc = (locales.includes(locale as Locale) ? locale : 'ko') as Locale;
  const byLocale = SPLIT_MESSAGE_LOADERS[messagesFileSlug];
  if (!byLocale) {
    console.error(`[testMessages] No split loader for slug: ${messagesFileSlug}`);
    return {};
  }

  const primary = byLocale[loc];
  if (primary) {
    const data = await resolveLoader(primary);
    if (Object.keys(data).length > 0) return data;
  }

  if (loc !== 'ko' && byLocale.ko) {
    return resolveLoader(byLocale.ko);
  }

  return {};
}

export function mergeMessages(
  base: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  return { ...base, ...patch };
}

/** Call from scaffold script / docs — keep loaders in sync when adding registry tests. */
export function listSplitMessageSlugs(): string[] {
  return Object.keys(SPLIT_MESSAGE_LOADERS);
}
