import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'ko',
  // 크롤러/사용자 Accept-Language 기반 재리다이렉트 비활성화 (URL prefix만 신뢰)
  localeDetection: false,
});

export const config = {
  matcher: [
    // 루트: defaultLocale(/ko)로만 리다이렉트
    '/',
    // 이미 로케일 prefix가 있는 경로
    '/(ko|en|ja|zh-CN|zh-TW|id|vi)/:path*',
    // 로케일 없는 페이지 경로만 (api, _next, sitemap/robots 등 정적·시스템 파일 제외)
    '/((?!api|_next|_vercel|feed\\.xml|sitemap\\.xml|sitemap_index\\.xml|robots\\.txt|favicon\\.ico|.*\\..*).*)',
  ],
};
