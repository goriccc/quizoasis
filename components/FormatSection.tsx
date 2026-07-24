'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TEST_FORMAT_GROUPS, TestFormatGroup } from '@/lib/testFormats';

interface FormatSectionProps {
  selectedFormat: TestFormatGroup;
  onFormatSelect: (formatId: TestFormatGroup) => void;
  counts: Record<TestFormatGroup, number>;
}

const FORMAT_ICONS: Record<TestFormatGroup, string> = {
  all: '🏠',
  personality: '💬',
  game: '🎮',
  quiz: '📝',
  face: '🤳',
  checklist: '📊',
};

export default function FormatSection({
  selectedFormat,
  onFormatSelect,
  counts,
}: FormatSectionProps) {
  const t = useTranslations('formats');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center px-1 sm:px-4 py-1.5">
        <div
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto hide-scrollbar cursor-grab select-none touch-scroll items-center w-full"
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {TEST_FORMAT_GROUPS.map((formatId) => {
            const isSelected = selectedFormat === formatId;
            const count = counts[formatId] ?? 0;

            return (
              <button
                key={formatId}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onFormatSelect(formatId);
                }}
                className={`
                  flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold
                  transition-all duration-200 whitespace-nowrap
                  ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}
                  ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                <span className="mr-1">{FORMAT_ICONS[formatId]}</span>
                {t(formatId)}
                {formatId !== 'all' && (
                  <span
                    className={`ml-1 text-xs ${isSelected ? 'text-white/90' : 'text-gray-500'}`}
                  >
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
