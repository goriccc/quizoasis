import type { Metadata } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import './globals.css';
import Analytics from '@/components/Analytics';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'QuizOasis - 당신의 마음을 탐험하는 심리테스트의 오아시스',
  description: '다양한 심리테스트로 당신의 성격, 연애 스타일, 직업 적성을 알아보세요.',
  keywords: '심리테스트, MBTI, 성격테스트, 연애테스트, 심리분석',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'QuizOasis',
    description: '당신의 마음을 탐험하는 심리테스트의 오아시스',
    type: 'website',
    url: 'https://myquizoasis.com',
    siteName: 'QuizOasis',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://myquizoasis.com/og-home.png',
        width: 1200,
        height: 630,
        alt: 'QuizOasis',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Google Fonts - Noto Sans 다국어 지원 (안드로이드 갤럭시 최적화) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 폰트 Preload - 안드로이드 최적화 */}
        <link rel="preload" href="https://fonts.gstatic.com/s/notosanskr/v36/PbykFmXiEBPT4ITbgNA5Cgm20xz64px_1hVWr0wuPNGmlQNMEfD4.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/notosans/v36/o-0IIpQlx3QUlC5A4PNb4j5Ba_2c7A.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/notosansjp/v36/0FlxVOGgE2k-fY5eXxQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/notosanssc/v36/0FlxVOGgE2k-fY5eXxQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/notosanstc/v36/0FlxVOGgE2k-fY5eXxQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        {/* 폰트 fallback 최적화 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Noto Sans KR';
              src: url('https://fonts.gstatic.com/s/notosanskr/v36/PbykFmXiEBPT4ITbgNA5Cgm20xz64px_1hVWr0wuPNGmlQNMEfD4.woff2') format('woff2');
              font-display: swap;
              font-weight: 300 700;
            }
            @font-face {
              font-family: 'Noto Sans';
              src: url('https://fonts.gstatic.com/s/notosans/v36/o-0IIpQlx3QUlC5A4PNb4j5Ba_2c7A.woff2') format('woff2');
              font-display: swap;
              font-weight: 300 700;
            }
          `
        }} />
      </Head>
      <body>
        {/* Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3192752766652582"
        crossOrigin="anonymous"
      />
      
      {/* 동적 lang 설정 (클라이언트) */}
      <Script id="set-html-lang" strategy="afterInteractive">
        {`
          (function(){
            try {
              var locales = ['ko','en','ja','zh-CN','zh-TW','id','vi'];
              var seg = (window.location.pathname.split('/')[1] || '').trim();
              var loc = locales.includes(seg) ? seg : 'ko';
              if (document.documentElement.lang !== loc) {
                document.documentElement.lang = loc;
              }
            } catch (e) { /* noop */ }
          })();
        `}
      </Script>
      {/* Face-api.js and TensorFlow.js - Loaded dynamically by specific face tests */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"
        strategy="afterInteractive"
      /> */}
      
      {/* Kakao SDK */}
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="kakao-init" strategy="afterInteractive">
        {`
          function initKakao() {
            if (typeof window !== 'undefined' && window.Kakao) {
              if (!window.Kakao.isInitialized()) {
                try {
                  window.Kakao.init('${process.env.NEXT_PUBLIC_KAKAO_JS_KEY || 'YOUR_KAKAO_JS_KEY'}');
                  console.log('✅ Kakao SDK 초기화 성공:', window.Kakao.isInitialized());
                } catch (error) {
                  console.error('❌ Kakao SDK 초기화 실패:', error);
                }
              } else {
                console.log('✅ Kakao SDK 이미 초기화됨');
              }
            } else {
              console.log('⏳ Kakao SDK 로딩 중... 재시도');
              setTimeout(initKakao, 100);
            }
          }
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initKakao);
          } else {
            initKakao();
          }
        `}
      </Script>
      
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      {children}
      </body>
    </html>
  );
}


