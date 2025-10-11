import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // 지원하는 언어 목록
  locales: locales,

  // 기본 언어
  defaultLocale: 'ko',

  // 언어 자동 감지
  localeDetection: true,
});

export const config = {
  // 모든 경로에 적용 (api, _next/static 등 제외)
  matcher: ['/', '/(ko|en|ja|zh-CN|zh-TW|id|vi)/:path*'],
};


