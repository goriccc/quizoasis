'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { QuizTest } from '@/lib/types';
import { Locale } from '@/i18n';
import CategorySection from './CategorySection';
import TagsSection from './TagsSection';
import LatestTestsSection from './LatestTestsSection';

interface HomePageClientProps {
  tests: QuizTest[];
  locale: Locale;
}

export default function HomePageClient({ tests, locale }: HomePageClientProps) {
  const t = useTranslations();
  const [selectedTag, setSelectedTag] = useState('all');

  // 테스트 데이터에서 태그 추출
  const tags = useMemo(() => {
    const allTagsSet = new Set<string>();
    tests.forEach((test) => {
      // 현재 언어의 태그 사용
      test.tags.forEach((tag) => allTagsSet.add(tag));
    });
    
    const tagList = Array.from(allTagsSet).map((tag) => ({
      id: tag,
      name: tag,
    }));
    
    return [{ id: 'all', name: 'all' }, ...tagList];
  }, [tests, locale]);

  const handleTagSelect = (tagId: string) => {
    setSelectedTag(tagId);
  };

  // 선택된 태그에 따라 필터링된 테스트
  const filteredTests = useMemo(() => {
    if (selectedTag === 'all') {
      return tests;
    }
    return tests.filter(test => test.tags.includes(selectedTag));
  }, [tests, selectedTag]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* 태그 섹션 */}
        <TagsSection 
          tags={tags} 
          selectedTag={selectedTag} 
          onTagSelect={handleTagSelect}
        />

        {/* 최신 테스트 섹션 */}
        <div className="pt-8">
          <LatestTestsSection 
            tests={tests}
            locale={locale}
          />
        </div>

        {/* 카테고리 섹션 */}
        <CategorySection 
          tests={filteredTests} 
          categoryName={selectedTag}
          locale={locale}
        />
      </div>
    </div>
  );
}
