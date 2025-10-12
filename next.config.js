const createNextIntlPlugin = require('next-intl/plugin');
const { execSync } = require('child_process');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// Git commit hash 가져오기
function getGitHash() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (error) {
    return 'dev';
  }
}

// Build 시간 가져오기
function getBuildTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day}.${hours}${minutes}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
  env: {
    NEXT_PUBLIC_GIT_HASH: getGitHash(),
    NEXT_PUBLIC_BUILD_TIME: getBuildTime(),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60, // 이미지 캐시 TTL 설정
  },
  // 폰트 최적화
  optimizeFonts: true,
  // 압축 활성화
  compress: true,
  // Production 성능 최적화
  swcMinify: true,
};

module.exports = withNextIntl(nextConfig);

