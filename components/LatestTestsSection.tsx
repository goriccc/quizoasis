'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { QuizTest } from '@/lib/types';
import { formatPlayCount, getThumbnailUrl } from '@/lib/utils';
import { Locale } from '@/i18n';
import { getLatestTestSlugs } from '@/lib/latestTests';

interface LatestTestsSectionProps {
  tests: QuizTest[];
  locale: Locale;
  shuffleKey: number;
}

export default function LatestTestsSection({ tests, locale, shuffleKey }: LatestTestsSectionProps) {
  const t = useTranslations('sections');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [lastMoveX, setLastMoveX] = useState(0);
  const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);

  // 최신 테스트 slug 목록 로드
  useEffect(() => {
    const loadLatestSlugs = async () => {
      try {
        const slugs = await getLatestTestSlugs(15);
        setLatestTestSlugs(slugs);
      } catch (error) {
        console.error('Error loading latest test slugs:', error);
      }
    };
    loadLatestSlugs();
  }, []);

  // 최신 테스트는 항상 최신순으로 정렬 (sessionStorage 사용 안 함)
  const orderedTests = useMemo(() => {
    // 항상 최신순으로 정렬 (서버에서 이미 정렬되어 있지만, 클라이언트에서도 보장)
    // tests prop은 이미 updated_at 또는 created_at 기준으로 정렬되어 있음
    return [...tests];
  }, [tests]);

  // 스크롤 위치 저장 및 복원 (한 번만 실행)
  const hasRestoredScroll = useRef(false);
  useEffect(() => {
    if (!scrollRef.current || orderedTests.length === 0 || hasRestoredScroll.current) return;

    // 저장된 스크롤 위치 복원
    const savedScrollPosition = typeof window !== 'undefined' 
      ? sessionStorage.getItem('latest_tests_scroll_position') 
      : null;
    
    if (savedScrollPosition) {
      hasRestoredScroll.current = true;
      const position = parseInt(savedScrollPosition, 10);
      // 렌더링 완료 후 즉시 위치로 이동 (애니메이션 없이)
      // requestAnimationFrame을 두 번 사용하여 DOM 업데이트 완료 보장
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            // scrollBehavior를 auto로 임시 변경하여 즉시 이동
            const originalScrollBehavior = scrollRef.current.style.scrollBehavior;
            scrollRef.current.style.scrollBehavior = 'auto';
            scrollRef.current.scrollLeft = position;
            
            // 다음 프레임에서 원래대로 복원
            requestAnimationFrame(() => {
              if (scrollRef.current) {
                scrollRef.current.style.scrollBehavior = originalScrollBehavior || 'smooth';
              }
            });
          }
          // 복원 후 저장된 위치 삭제 (한 번만 복원)
          sessionStorage.removeItem('latest_tests_scroll_position');
        });
      });
    }

    // 스크롤 이벤트로 위치 저장
    const handleScroll = () => {
      if (scrollRef.current && typeof window !== 'undefined') {
        sessionStorage.setItem('latest_tests_scroll_position', scrollRef.current.scrollLeft.toString());
      }
    };

    // 디바운스 적용 (성능 최적화)
    let scrollTimeout: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', debouncedHandleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [orderedTests]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault(); // 기본 드래그 동작 방지
    setIsDragging(true);
    setDragDistance(0); // 드래그 거리 초기화
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastMoveTime(Date.now());
    setLastMoveX(e.pageX - scrollRef.current.offsetLeft);
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // 마우스는 원래 고정 감도
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    // 드래그 거리 계산 (절댓값)
    const distance = Math.abs(x - startX);
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.scrollBehavior = 'smooth';
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsTouchDevice(true);
    setIsDragging(true);
    setDragDistance(0); // 드래그 거리 초기화
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastMoveTime(Date.now());
    setLastMoveX(e.touches[0].pageX - scrollRef.current.offsetLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    // e.preventDefault() 제거 - 브라우저 기본 터치 스크롤 허용
    // 브라우저의 기본 터치 스크롤이 가장 자연스러움
    
    // 드래그 거리만 계산 (클릭 방지용)
    const currentX = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const distance = Math.abs(currentX - startX);
    setDragDistance(distance);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{t('latest')}</h2>
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 cursor-grab select-none drag-scroll-container touch-scroll"
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {orderedTests.map((test, index) => (
              <Link
                key={test.id}
                href={`/${locale}/test/${test.slug}`}
                className="flex-shrink-0 group"
                prefetch={index < 3}
                onClick={(e) => {
                  // 드래그 거리가 5px 이상이면 클릭 막기
                  if (isDragging || dragDistance > 5) {
                    e.preventDefault();
                  }
                }}
                draggable={false}
              >
                <div className="bg-white rounded-lg shadow card-hover w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[435px] overflow-hidden">
                  {/* 썸네일 */}
                  <div className="relative w-full aspect-[435/245]">
                    <Image
                      src={getThumbnailUrl(test.thumbnail)}
                      alt={test.title}
                      fill
                      className="object-cover select-none"
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 435px"
                      draggable={false}
                      priority={index < 2}
                      loading={index < 2 ? undefined : 'lazy'}
                      quality={85}
                    />
                    {/* NEW 뱃지 */}
                    {latestTestSlugs.includes(test.slug) && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                        NEW
                      </div>
                    )}
                    {/* 인기/HOT 뱃지 (NEW 뱃지가 없을 때만) */}
                    {!latestTestSlugs.includes(test.slug) && test.badgeType === 'popular' && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                        인기
                      </div>
                    )}
                    {!latestTestSlugs.includes(test.slug) && test.badgeType === 'hot' && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                        HOT
                      </div>
                    )}
                  </div>
                  
                  {/* 타이틀과 플레이 횟수 */}
                  <div className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                        {test.title}
                      </h3>
                      <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                        <Play size={14} />
                        <span>{formatPlayCount(test.playCount, locale)}</span>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

