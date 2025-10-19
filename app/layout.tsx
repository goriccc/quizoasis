import type { Metadata } from 'next';
import Script from 'next/script';
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
    <>
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
    </>
  );
}


