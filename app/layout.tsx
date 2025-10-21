import type { Metadata } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import './globals.css';

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=block&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%20%21%22%23%24%25%26%27%28%29%2A%2B%2C%2D%2E%2F%3A%3B%3C%3D%3E%3F%40%5B%5C%5D%5E%5F%60%7B%7C%7D%7E" 
          rel="stylesheet" 
        />
        {/* 안드로이드 갤럭시 전용 폰트 최적화 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Noto Sans KR';
              src: url('https://fonts.gstatic.com/s/notosanskr/v36/PbykFmXiEBPT4ITbgNA5Cgm20xz64px_1hVWr0wuPNGmlQNMEfD4.woff2') format('woff2');
              font-display: block;
              font-weight: 300 700;
            }
            @font-face {
              font-family: 'Noto Sans';
              src: url('https://fonts.gstatic.com/s/notosans/v36/o-0IIpQlx3QUlC5A4PNb4j5Ba_2c7A.woff2') format('woff2');
              font-display: block;
              font-weight: 300 700;
            }
            /* 안드로이드 갤럭시 강제 폰트 적용 */
            @media screen and (-webkit-min-device-pixel-ratio: 0) {
              body, * {
                font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
              }
            }
          `
        }} />
        {/* 안드로이드 갤럭시 폰트 로딩 강제 스크립트 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // 안드로이드 갤럭시 폰트 로딩 강제 적용
            (function() {
              const isAndroid = navigator.userAgent.includes('Android') || navigator.userAgent.includes('Samsung');
              const fontFamily = "'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
              
              function forceFonts() {
                // 모든 요소에 폰트 강제 적용
                const allElements = document.querySelectorAll('*');
                allElements.forEach(function(element) {
                  element.style.fontFamily = fontFamily;
                  element.style.fontDisplay = 'block';
                  element.style.textRendering = 'optimizeLegibility';
                  element.style.webkitFontSmoothing = 'antialiased';
                  element.style.mozOsxFontSmoothing = 'grayscale';
                });
                
                // body에도 적용
                document.body.style.fontFamily = fontFamily;
                document.body.style.fontDisplay = 'block';
                document.body.style.textRendering = 'optimizeLegibility';
                document.body.style.webkitFontSmoothing = 'antialiased';
                document.body.style.mozOsxFontSmoothing = 'grayscale';
              }
              
              if (isAndroid) {
                // 즉시 적용
                forceFonts();
                
                // DOM 로딩 후 적용
                document.addEventListener('DOMContentLoaded', forceFonts);
                
                // 폰트 로딩 완료 후 적용
                if (document.fonts && document.fonts.ready) {
                  document.fonts.ready.then(forceFonts);
                }
                
                // 페이지 로딩 완료 후 적용
                window.addEventListener('load', forceFonts);
                
                // 주기적으로 폰트 강제 적용 (안드로이드 특화)
                setInterval(forceFonts, 1000);
              }
            })();
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
      
      {children}
      </body>
    </html>
  );
}


