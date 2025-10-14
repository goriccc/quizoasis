'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TagsSectionProps {
  tags: { id: string; name: string }[];
  selectedTag: string;
  onTagSelect: (tagId: string) => void;
}

export default function TagsSection({ tags, selectedTag, onTagSelect }: TagsSectionProps) {
  const t = useTranslations('tags');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [lastMoveX, setLastMoveX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastMoveTime(Date.now());
    setLastMoveX(e.pageX - scrollRef.current.offsetLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 마우스는 원래 고정 감도
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // 터치 이벤트 핸들러 (가속 스크롤 적용)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastMoveTime(Date.now());
    setLastMoveX(e.touches[0].pageX - scrollRef.current.offsetLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    // e.preventDefault() 제거 - 브라우저 기본 터치 스크롤 허용
    // 브라우저의 기본 터치 스크롤이 가장 자연스러움
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky z-40 mt-2" style={{ height: '48px', top: '64px' }}>
      <div className="max-w-7xl mx-auto h-full flex items-center px-1 sm:px-4">
        <div
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto hide-scrollbar cursor-grab select-none touch-scroll items-center w-full"
          style={{ scrollBehavior: 'smooth', paddingLeft: '0px', paddingRight: '0px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {tags.map((tag) => {
            const isAll = tag.id === 'all';
            const tagLabel = isAll ? t('all') : `#${tag.name}`;
            const isSelected = selectedTag === tag.id;

            return (
                  <button
                    key={tag.id}
                    onClick={(e) => {
                      e.preventDefault();
                      onTagSelect(tag.id);
                    }}
                    className={`
                      flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium
                      transition-all duration-200
                      ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}
                      ${
                        isSelected
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '32px',
                      lineHeight: '1'
                    }}
                  >
                {tagLabel}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

