import type { Metadata } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import './globals.css';
import Analytics from '@/components/Analytics';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'QuizOasis',
  description: '다양한 심리테스트로 당신의 성격, 연애 스타일, 직업 적성을 알아보세요.',
  keywords: '심리테스트, MBTI, 성격테스트, 연애테스트, 심리분석',
  applicationName: 'QuizOasis',
  appleWebApp: {
    title: 'QuizOasis',
  },
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
        <link rel="apple-touch-icon" href="/icon.png" />
        {/* iOS Safari 홈 화면 추가 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* iOS Safari 홈 화면 추가 이름 */}
        <meta name="apple-mobile-web-app-title" content="QuizOasis" />
        {/* Android Chrome 홈 화면 추가 이름 */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="QuizOasis" />
        {/* Google Fonts - Noto Sans 다국어 지원 (안드로이드 갤럭시 최적화) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <body>
        {/* PWA 설치 프롬프트 — React 하이드레이션 전에 beforeinstallprompt 캡처 */}
        <Script id="pwa-install-prompt-capture" strategy="beforeInteractive">
          {`(function(){
            if (window.__pwaInstallPromptCaptureInit) return;
            window.__pwaInstallPromptCaptureInit = true;
            window.__pwaDeferredPrompt = null;
            window.__pwaInstallPromptListeners = window.__pwaInstallPromptListeners || new Set();
            function notify(p) {
              window.__pwaDeferredPrompt = p;
              window.__pwaInstallPromptListeners.forEach(function(fn) { fn(p); });
            }
            window.addEventListener('beforeinstallprompt', function(e) {
              e.preventDefault();
              notify(e);
            });
            window.addEventListener('appinstalled', function() {
              notify(null);
            });
          })();`}
        </Script>
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
      <ServiceWorkerRegistration />
      {children}
      </body>
    </html>
  );
}


