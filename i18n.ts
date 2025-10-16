import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 지원하는 언어 목록
export const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'id', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // 지원하지 않는 언어면 404
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ko'; // 기본값
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale,
  };
});


