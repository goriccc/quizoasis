'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { QuizTest } from '@/lib/types';
import { formatPlayCount, getThumbnailUrl } from '@/lib/utils';
import { Locale } from '@/i18n';

interface LatestTestsSectionProps {
  tests: QuizTest[];
  locale: Locale;
}

export default function LatestTestsSection({ tests, locale }: LatestTestsSectionProps) {
  const t = useTranslations('sections');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [lastMoveX, setLastMoveX] = useState(0);

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
    <section className="py-6 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4">
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
          {tests.map((test) => (
              <Link
                key={test.id}
                href={`/${locale}/test/${test.slug}`}
                className="flex-shrink-0 group"
                onClick={(e) => {
                  // 드래그 거리가 5px 이상이면 클릭 막기
                  if (isDragging || dragDistance > 5) {
                    e.preventDefault();
                  }
                }}
                draggable={false}
              >
                <div className="relative rounded-lg overflow-hidden shadow-md card-hover w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[435px]">
                  {/* 썸네일 (카테고리 대비 80% 크기) */}
                  <div className="relative w-full aspect-[435/245]">
                    <Image
                      src={getThumbnailUrl(test.thumbnail)}
                      alt={test.title}
                      fill
                      className="object-cover select-none"
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 435px"
                      draggable={false}
                    />
                  
                  {/* 플레이 횟수 - 우측 하단 */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm">
                    <Play size={14} fill="white" />
                    <span>{formatPlayCount(test.playCount, locale)}</span>
                  </div>
                </div>
              </div>
              
              {/* 타이틀 */}
              <h3 className="mt-2 font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                {test.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

