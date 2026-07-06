const createNextIntlPlugin = require('next-intl/plugin');
const { execSync } = require('child_process');
const withPWAInit = require('@ducanh2912/next-pwa').default;

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'supabase-assets',
          expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 7 },
          networkTimeoutSeconds: 10,
        },
      },
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'next-static-assets',
          expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 24 },
          networkTimeoutSeconds: 8,
        },
      },
    ],
  },
});

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

function getHostname(value) {
  try {
    return value ? new URL(value).hostname : null;
  } catch (error) {
    return null;
  }
}

function getImageRemotePatterns() {
  const hostnames = new Set([
    getHostname(process.env.NEXT_PUBLIC_SUPABASE_URL),
    getHostname(process.env.NEXT_PUBLIC_CDN_BASE_URL),
    'images.unsplash.com',
  ].filter(Boolean));

  return Array.from(hostnames).map((hostname) => ({
    protocol: 'https',
    hostname,
  }));
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
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: getImageRemotePatterns(),
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 폰트 최적화
  optimizeFonts: true,
  // 압축 활성화
  compress: true,
  // Production 성능 최적화
  swcMinify: true,
  // 빌드 시 정적 페이지 생성 최적화
  generateBuildId: async () => {
    return getGitHash();
  },
};

module.exports = withPWA(withNextIntl(nextConfig));

