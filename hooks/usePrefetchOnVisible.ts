'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 요소가 뷰포트에 보일 때 백그라운드에서 페이지를 prefetch하는 훅
 * PageSpeed Insights 점수에 영향을 주지 않으면서 사용자 경험 개선
 */
export function usePrefetchOnVisible(href: string, enabled: boolean = true) {
  const ref = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  const hasPrefetched = useRef(false);

  useEffect(() => {
    if (!enabled || hasPrefetched.current || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPrefetched.current) {
            // 백그라운드에서 prefetch (idle 시간에 실행)
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                router.prefetch(href);
                hasPrefetched.current = true;
              });
            } else {
              // requestIdleCallback이 없으면 약간의 지연 후 prefetch
              setTimeout(() => {
                router.prefetch(href);
                hasPrefetched.current = true;
              }, 100);
            }
            observer.disconnect();
          }
        });
      },
      {
        // 뷰포트에 200px 전에 미리 prefetch 시작
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [href, enabled, router]);

  return ref;
}

