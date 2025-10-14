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

  // 선택된 태그에 따라 필터링된 테스트 (랜덤 순서)
  const filteredTests = useMemo(() => {
    let filtered;
    if (selectedTag === 'all') {
      filtered = tests;
    } else {
      filtered = tests.filter(test => test.tags.includes(selectedTag));
    }
    
    // Fisher-Yates 셔플 알고리즘으로 랜덤 순서 생성
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }, [tests, selectedTag]);

  return (
    <div className="min-h-screen bg-white">
      {/* 태그 섹션 - 컨테이너 밖으로 */}
      <TagsSection 
        tags={tags} 
        selectedTag={selectedTag} 
        onTagSelect={handleTagSelect}
      />
      
      <div className="max-w-7xl mx-auto px-1 sm:px-4">

      {/* 최신 테스트 섹션 */}
      <div className="pt-2 bg-white">
        <LatestTestsSection 
          tests={tests}
          locale={locale}
        />
      </div>

      {/* 카테고리 섹션 */}
      <div className="pt-8.5 bg-white">
        <CategorySection 
          tests={filteredTests} 
          categoryName={selectedTag}
          locale={locale}
        />
      </div>
      </div>
    </div>
  );
}
