import React, { useEffect, useRef, useState } from 'react';
import { isAdPaused, shouldShowAds } from '@/lib/adTrafficGuard';

// AdSense Configuration
export const ADSENSE_CONFIG = {
  ENABLED: true, // 개발 완료 후 true로 변경
  PUBLISHER_ID: 'ca-pub-3192752766652582',
  SLOTS: {
    START_SCREEN: '5341240098',        // 타이틀-설명 사이
    START_BELOW_TEST_BUTTON: '2271767706', // N_테스트시작 버튼 밑 (구 쿠팡 자리)
    PROGRESS_SCREEN: '1799975556',     // 테스트 진행 마지막 답변 밑
    LOADING_TOP: '2156990784',         // 로딩 스피너 상단
    LOADING_BOTTOM: '2127278616',      // 로딩 스피너 하단
    RESULT_SCREEN: '7700644275',       // 결과-다시하기 사이
    TEST_COMPLETE_POPUP: '6019441026', // N_테스트완료 팝업 (구 쿠팡 자리)
    RESULT_ABOVE_POPULAR_TOP5: '8394322924', // N_테스트결과 요즘인기 섹션타이틀 위
  }
} as const;

// AdSense Placeholder Component Props
export interface AdSensePlaceholderProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
  label?: string;
}

// 공통 AdSense 로드 함수 (중복 로드 방지)
export const loadAdSense = () => {
  if (typeof window === 'undefined' || !ADSENSE_CONFIG.ENABLED || !shouldShowAds()) return;
  
  try {
    // 이미 로드된 AdSense 요소가 있는지 확인
    const existingAds = document.querySelectorAll('.adsbygoogle[data-adsbygoogle-status]');
    if (existingAds.length > 0) {
      // 이미 로드된 요소가 있으면 새로 로드하지 않음
      return;
    }
    
    // AdSense가 이미 초기화되었는지 확인
    if ((window as any).adsbygoogle && (window as any).adsbygoogle.length > 0) {
      return;
    }
    
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  } catch (err) {
    // AdSense 로드 실패 시 조용히 처리
    console.warn('AdSense 로드 실패:', err);
  }
};

// 전역 AdSense 로드 함수 (모든 컴포넌트에서 사용)
export const safeLoadAdSense = () => {
  if (typeof window === 'undefined' || !ADSENSE_CONFIG.ENABLED || !shouldShowAds()) return;
  
  try {
    // 이미 로드된 AdSense 요소가 있는지 확인
    const existingAds = document.querySelectorAll('.adsbygoogle[data-adsbygoogle-status]');
    if (existingAds.length > 0) {
      return;
    }
    
    // AdSense가 이미 초기화되었는지 확인
    if ((window as any).adsbygoogle && (window as any).adsbygoogle.length > 0) {
      return;
    }
    
    // 중복 로드 방지를 위한 플래그 설정
    if ((window as any).adsbygoogleLoading) {
      return;
    }
    
    (window as any).adsbygoogleLoading = true;
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
    
    // 로드 완료 후 플래그 해제
    setTimeout(() => {
      (window as any).adsbygoogleLoading = false;
    }, 1000);
  } catch (err) {
    // AdSense 로드 실패 시 조용히 처리
    console.warn('AdSense 로드 실패:', err);
    (window as any).adsbygoogleLoading = false;
  }
};

// AdSense Placeholder Component
export default function AdSensePlaceholder({ 
  slot, 
  style, 
  className = '', 
  label = '광고 영역' 
}: AdSensePlaceholderProps) {
  const adRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [shouldHide, setShouldHide] = useState(false); // 항상 false로 유지하여 항상 보이도록
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [adsAllowed, setAdsAllowed] = useState(true);

  // 클라이언트 마운트 확인
  useEffect(() => {
    setIsMounted(true);
    setAdsAllowed(!isAdPaused());

    const onPause = () => setAdsAllowed(false);
    window.addEventListener('quizoasis:ad-pause', onPause);
    return () => window.removeEventListener('quizoasis:ad-pause', onPause);
  }, []);

  // 광고 요소가 렌더링된 후 개별적으로 초기화
  useEffect(() => {
    if (!ADSENSE_CONFIG.ENABLED || isInitialized || !isMounted || !adsAllowed) return;
    
    const initializeAd = () => {
      // 광고 요소가 DOM에 있는지 확인
      if (!adRef.current || !document.body.contains(adRef.current)) {
        // 아직 DOM에 없으면 재시도
        setTimeout(initializeAd, 100);
        return;
      }
      
      try {
        const adElement = adRef.current;
        const status = adElement.getAttribute('data-adsbygoogle-status');
        
        // 이미 초기화되었으면 스킵
        if (status && status !== '') {
          setIsInitialized(true);
          return;
        }
        
        // AdSense 전역 객체 초기화
        if (typeof window !== 'undefined') {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          
          // AdSense 스크립트가 로드되었는지 확인
          const checkAdSenseScript = () => {
            if (typeof (window as any).adsbygoogle !== 'undefined' && adRef.current) {
              try {
                // 광고 요소가 여전히 DOM에 있는지 다시 확인
                if (document.body.contains(adRef.current)) {
                  (window as any).adsbygoogle.push({});
                  setIsInitialized(true);
                }
              } catch (err) {
                // AdSense 오류는 조용히 무시 (no_div, 403, Failed to load resource 등)
                // 로컬호스트에서 403 오류는 정상이므로 무시
                // 재시도
                setTimeout(checkAdSenseScript, 200);
              }
            } else {
              // 스크립트가 아직 로드되지 않았으면 재시도
              setTimeout(checkAdSenseScript, 200);
            }
          };
          
          // 약간의 지연 후 초기화 (DOM이 완전히 준비될 때까지)
          setTimeout(checkAdSenseScript, 200);
        }
      } catch (err) {
        console.warn('AdSense initialization error:', err);
      }
    };
    
    // 초기화 시작
    initializeAd();
  }, [isInitialized, isMounted, adsAllowed]);

  // 광고 로드 상태 확인 (게재 제한 중일 때 영역 숨기기)
  useEffect(() => {
    if (!ADSENSE_CONFIG.ENABLED || !isMounted || !adsAllowed) return;
    
    let observer: MutationObserver | null = null;
    let interval: NodeJS.Timeout | null = null;
    let rafId: number | null = null;
    
    // ref가 설정될 때까지 대기
    const checkAndSetup = () => {
      if (!adRef.current) {
        // ref가 아직 설정되지 않았으면 다음 프레임에서 다시 시도
        rafId = requestAnimationFrame(checkAndSetup);
        return;
      }
      
      const checkAdStatus = () => {
        if (!adRef.current) return false;
        
        const adElement = adRef.current;
        
        // 광고가 로드되었는지 확인
        const adStatus = adElement.getAttribute('data-adsbygoogle-status');
        const adHeight = adElement.offsetHeight;
        const adWidth = adElement.offsetWidth;
        
        // 광고가 로드되었는지 확인 (status가 'done'이거나 실제 크기가 있어야 함)
        const isLoaded = adStatus === 'done' || (adHeight > 50 && adWidth > 50);
        
        if (isLoaded) {
          // 광고가 로드되었으면 표시
          setIsAdLoaded(true);
          setShouldHide(false);
          return true;
        } else {
          // 광고가 로드되지 않았어도 항상 표시 (영역은 유지)
          setShouldHide(false);
          return false;
        }
      };

      // MutationObserver로 광고 상태 변화 즉시 감지
      observer = new MutationObserver(() => {
        checkAdStatus();
      });

      if (adRef.current) {
        observer.observe(adRef.current, {
          attributes: true,
          attributeFilter: ['data-adsbygoogle-status'],
          childList: true,
          subtree: true
        });
        
        // 초기에는 표시 상태로 시작 (항상 보이도록)
        setShouldHide(false);
        
        // 주기적으로 확인 (광고가 로드되었는지 확인)
        interval = setInterval(() => {
          checkAdStatus();
        }, 1000);
      }
    };
    
    // ref 설정 대기 후 시작
    rafId = requestAnimationFrame(checkAndSetup);
    
    // cleanup 함수
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (observer) {
        observer.disconnect();
      }
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isMounted, adsAllowed]);

  // 클라이언트에서만 렌더링 (hydration 오류 방지)
  if (!isMounted) {
    return (
      <div 
        style={{ 
          minHeight: '250px',
          ...style 
        }}
        className={className}
      />
    );
  }

  if (!adsAllowed) {
    return null;
  }

  if (ADSENSE_CONFIG.ENABLED) {
    // 실제 애드센스 광고
    // 항상 보이도록 설정 (광고가 로드되지 않아도 영역은 유지)
    return (
      <div 
        ref={containerRef}
        style={{ 
          visibility: 'visible',
          height: 'auto',
          minHeight: '250px',
          ...style 
        }}
        className={className}
      >
        <ins
          ref={adRef as any}
          className="adsbygoogle"
          style={{ 
            display: 'block',
            minHeight: '250px',
            width: '100%'
          }}
          data-ad-client={ADSENSE_CONFIG.PUBLISHER_ID}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  } else {
    // 개발용 플레이스홀더 (광고 영역 표시)
    return (
      <div 
        className={`bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-blue-300 flex items-center justify-center ${className}`}
        style={{ 
          minHeight: '250px', 
          width: '100%',
          ...style 
        }}
      >
        <div className="text-center text-blue-600 p-4">
          <div className="text-sm font-medium">📢 {label}</div>
          <div className="text-xs mt-1 text-blue-500">Slot: {slot}</div>
          <div className="text-xs text-blue-400">개발 모드 - 광고 비활성화</div>
        </div>
      </div>
    );
  }
}