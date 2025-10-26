import React, { useEffect } from 'react';

// AdSense Configuration
export const ADSENSE_CONFIG = {
  ENABLED: false, // 개발 완료 후 true로 변경
  PUBLISHER_ID: 'ca-pub-3192752766652582',
  SLOTS: {
    START_SCREEN: '5341240098',        // 타이틀-설명 사이
    PROGRESS_SCREEN: '1799975556',     // 테스트 진행 마지막 답변 밑
    LOADING_TOP: '2156990784',         // 로딩 스피너 상단
    LOADING_BOTTOM: '2127278616',      // 로딩 스피너 하단
    RESULT_SCREEN: '7700644275'        // 결과-다시하기 사이
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
  if (typeof window === 'undefined' || !ADSENSE_CONFIG.ENABLED) return;
  
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
  if (typeof window === 'undefined' || !ADSENSE_CONFIG.ENABLED) return;
  
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
  useEffect(() => {
    loadAdSense();
  }, []);

  if (ADSENSE_CONFIG.ENABLED) {
    // 실제 애드센스 광고
    return (
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: 'block', ...style }}
        data-ad-client={ADSENSE_CONFIG.PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
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