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
        {/* Google Fonts - Noto Sans 다국어 지원 (안드로이드 최적화) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%20%21%22%23%24%25%26%27%28%29%2A%2B%2C%2D%2E%2F%3A%3B%3C%3D%3E%3F%40%5B%5C%5D%5E%5F%60%7B%7C%7D%7E" 
          rel="stylesheet" 
        />
        {/* 폰트 로딩 최적화 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Noto Sans Fallback';
              src: local('Roboto'), local('Arial'), local('sans-serif');
              font-display: swap;
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


