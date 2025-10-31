'use client';

import { useState, useMemo, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tagKey = searchParams.get('tagKey');
  const initialTag = searchParams.get('tag') || 'all';
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const displayTag = useMemo(() => {
    if (tagKey === 'face') {
      // 로케일별 "얼굴" 라벨
      const map: Record<string, string> = {
        ko: '얼굴', en: 'Face', ja: '顔', 'zh-CN': '面相', 'zh-TW': '臉', id: 'Wajah', vi: 'Khuôn mặt'
      } as any;
      return map[locale] || '얼굴';
    }
    return selectedTag;
  }, [tagKey, selectedTag, locale]);

  useEffect(() => {
    const tag = searchParams.get('tag') || 'all';
    setSelectedTag(tag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // 테스트 데이터에서 태그 추출
  const tags = useMemo(() => {
    const allTagsSet = new Set<string>();
    tests.forEach((test) => {
      // 현재 언어의 태그 사용
      test.tags.forEach((tag) => allTagsSet.add(tag));
    });
    
    // 각 태그별 테스트 개수 계산
    const tagCount = new Map<string, number>();
    tests.forEach((test) => {
      test.tags.forEach((tag) => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });
    
    // 1개만 검색되는 태그는 제외
    const tagList = Array.from(allTagsSet)
      .filter((tag) => (tagCount.get(tag) || 0) > 1)
      .map((tag) => ({
        id: tag,
        name: tag,
      }));
    
    return [{ id: 'all', name: 'all' }, ...tagList];
  }, [tests]);

  const handleTagSelect = (tagId: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (tagId === 'all') {
      params.delete('tag');
      params.delete('tagKey');
    } else {
      params.set('tag', tagId);
      params.delete('tagKey');
    }
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
  };

  // 선택된 태그에 따라 필터링된 테스트 (랜덤 순서)
  const filteredTests = useMemo(() => {
    let filtered;
    if ((tagKey && tagKey === 'face') || (displayTag && displayTag.length > 0 && selectedTag !== 'all')) {
      if (tagKey === 'face') {
        const aliasSet = new Set(
          ['얼굴','face','顔','面相','臉','脸','wajah','khuôn mặt','khuon mat']
            .map((s) => s.toLowerCase())
        );
        filtered = tests.filter((test) => {
          const tagsLower = (test.tags || []).map((t) => (t || '').toLowerCase());
          const tagMatch = tagsLower.some((t) => aliasSet.has(t));
          const slugLower = (test.slug || '').toLowerCase();
          const slugMatch = slugLower.includes('face');
          return tagMatch || slugMatch;
        });
      } else {
        filtered = tests.filter(test => test.tags.includes(displayTag));
      }
    } else {
      filtered = tests;
    }
    
    // Fisher-Yates 셔플 알고리즘으로 랜덤 순서 생성
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }, [tests, selectedTag, tagKey, displayTag]);

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
          tests={tests.slice(0, 15)}
          locale={locale}
        />
      </div>

      {/* 카테고리 섹션 */}
      <div className="pt-8.5 bg-white">
        <CategorySection 
          tests={filteredTests} 
          categoryName={tagKey === 'face' ? displayTag : selectedTag}
          locale={locale}
        />
      </div>
      </div>
    </div>
  );
}
