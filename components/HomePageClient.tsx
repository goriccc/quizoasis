'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { QuizTest } from '@/lib/types';
import { Locale } from '@/i18n';
import { applyHomeBuildSync } from '@/lib/homeBuildSync';
import {
  formatMatchesGroup,
  isTestFormatGroup,
  TestFormatGroup,
} from '@/lib/testFormats';
import CategorySection from './CategorySection';
import HomeFilterBar from './HomeFilterBar';
import LatestTestsSection from './LatestTestsSection';

interface HomePageClientProps {
  tests: QuizTest[];
  locale: Locale;
}

function parseFormatParam(
  formatParam: string | null,
  tagKey: string | null
): TestFormatGroup {
  if (tagKey === 'face') return 'face';
  if (formatParam && isTestFormatGroup(formatParam)) return formatParam;
  return 'all';
}

export default function HomePageClient({ tests, locale }: HomePageClientProps) {
  const tFormats = useTranslations('formats');
  const tTags = useTranslations('tags');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tagKey = searchParams.get('tagKey');
  const initialTag = searchParams.get('tag') || 'all';
  const initialFormat = parseFormatParam(searchParams.get('format'), tagKey);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [selectedFormat, setSelectedFormat] = useState<TestFormatGroup>(initialFormat);
  const shouldRefreshFromBuild = useRef(false);
  const [shuffleKey, setShuffleKey] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const buildChanged = applyHomeBuildSync();
    if (buildChanged) {
      shouldRefreshFromBuild.current = true;
    }
    return buildChanged ? 1 : 0;
  });

  useEffect(() => {
    if (!shouldRefreshFromBuild.current) return;
    shouldRefreshFromBuild.current = false;
    router.refresh();
  }, [router]);

  const latestTestSlugs = useMemo(
    () => tests.slice(0, 15).map((test) => test.slug),
    [tests]
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 HomePageClient - 전체 테스트 개수:', tests.length);
    }
  }, [tests]);

  useEffect(() => {
    const tag = searchParams.get('tag') || 'all';
    setSelectedTag(tag);
    setSelectedFormat(parseFormatParam(searchParams.get('format'), searchParams.get('tagKey')));
  }, [searchParams]);

  const formatCounts = useMemo(() => {
    const counts: Record<TestFormatGroup, number> = {
      all: tests.length,
      personality: 0,
      game: 0,
      quiz: 0,
      face: 0,
      checklist: 0,
    };
    tests.forEach((test) => {
      if (formatMatchesGroup(test.format, 'personality')) counts.personality += 1;
      if (formatMatchesGroup(test.format, 'game')) counts.game += 1;
      if (formatMatchesGroup(test.format, 'quiz')) counts.quiz += 1;
      if (formatMatchesGroup(test.format, 'face')) counts.face += 1;
      if (formatMatchesGroup(test.format, 'checklist')) counts.checklist += 1;
    });
    return counts;
  }, [tests]);

  const formatScopedTests = useMemo(() => {
    if (selectedFormat === 'all') return tests;
    return tests.filter((test) => formatMatchesGroup(test.format, selectedFormat));
  }, [tests, selectedFormat]);

  const tags = useMemo(() => {
    const allTagsSet = new Set<string>();
    formatScopedTests.forEach((test) => {
      test.tags.forEach((tag) => allTagsSet.add(tag));
    });

    const tagCount = new Map<string, number>();
    formatScopedTests.forEach((test) => {
      test.tags.forEach((tag) => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });

    const tagList = Array.from(allTagsSet)
      .filter((tag) => (tagCount.get(tag) || 0) > 1)
      .map((tag) => ({ id: tag, name: tag }));

    return [{ id: 'all', name: 'all' }, ...tagList];
  }, [formatScopedTests]);

  const pushFilterParams = (format: TestFormatGroup, tagId: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (format === 'all') {
      params.delete('format');
      params.delete('tagKey');
    } else {
      params.set('format', format);
      params.delete('tagKey');
    }
    if (tagId === 'all') {
      params.delete('tag');
    } else {
      params.set('tag', tagId);
    }
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const handleFormatSelect = (formatId: TestFormatGroup) => {
    pushFilterParams(formatId, 'all');
  };

  const handleTagSelect = (tagId: string) => {
    pushFilterParams(selectedFormat, tagId);
  };

  const displayTag = selectedTag;

  const filteredTests = useMemo(() => {
    let filtered = formatScopedTests;
    if (displayTag && displayTag !== 'all') {
      filtered = formatScopedTests.filter((test) => test.tags.includes(displayTag));
    }

    const storageKey = `home_tests_order_${selectedFormat}_${selectedTag}_${tagKey || 'all'}`;
    const savedOrder = typeof window !== 'undefined' ? sessionStorage.getItem(storageKey) : null;

    if (savedOrder && shuffleKey === 0) {
      try {
        const order = JSON.parse(savedOrder);
        const testMap = new Map(filtered.map((test) => [test.id, test]));
        const orderedTests = order
          .map((id: number) => testMap.get(id))
          .filter(Boolean) as QuizTest[];
        const orderedIds = new Set(order);
        const missingTests = filtered.filter((test) => !orderedIds.has(test.id));
        return [...orderedTests, ...missingTests];
      } catch {
        // fall through to shuffle
      }
    }

    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(storageKey, JSON.stringify(shuffled.map((test) => test.id)));
    }

    return shuffled;
  }, [formatScopedTests, selectedTag, selectedFormat, tagKey, displayTag, shuffleKey]);

  const sectionLabel = useMemo(() => {
    const formatLabel =
      selectedFormat === 'all' ? tFormats('all') : tFormats(selectedFormat);
    if (selectedTag !== 'all') {
      const tagTranslations: Record<string, Record<string, string>> = {
        소통: { ko: '소통', en: 'Communication', ja: 'コミュニケーション', 'zh-CN': '沟通', 'zh-TW': '溝通', id: 'Komunikasi', vi: 'Giao tiếp' },
        심리: { ko: '심리', en: 'Psychology', ja: '心理学', 'zh-CN': '心理', 'zh-TW': '心理', id: 'Psikologi', vi: 'Tâm lý' },
        관계: { ko: '관계', en: 'Relationship', ja: '関係', 'zh-CN': '关系', 'zh-TW': '關係', id: 'Hubungan', vi: 'Mối quan hệ' },
        우정: { ko: '우정', en: 'Friendship', ja: '友情', 'zh-CN': '友谊', 'zh-TW': '友誼', id: 'Persahabatan', vi: 'Tình bạn' },
        성격: { ko: '성격', en: 'Personality', ja: '性格', 'zh-CN': '性格', 'zh-TW': '性格', id: 'Kepribadian', vi: 'Tính cách' },
      };
      const tagLabel = tagTranslations[selectedTag]?.[locale] || selectedTag;
      return `${formatLabel} · #${tagLabel}`;
    }
    return formatLabel;
  }, [selectedFormat, selectedTag, locale, tFormats]);

  useEffect(() => {
    const savedScrollPosition =
      typeof window !== 'undefined' ? sessionStorage.getItem('home_scroll_position') : null;

    if (savedScrollPosition) {
      const position = parseInt(savedScrollPosition, 10);
      setTimeout(() => {
        window.scrollTo(0, position);
        sessionStorage.removeItem('home_scroll_position');
      }, 100);
    }

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('home_scroll_position', window.scrollY.toString());
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let isPulling = false;
    let hasTriggered = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      isPulling = window.scrollY === 0;
      hasTriggered = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling) return;
      const pullDistance = e.touches[0].clientY - touchStartY;
      if (pullDistance > 80 && window.scrollY === 0 && !hasTriggered) {
        hasTriggered = true;
      }
    };

    const handleTouchEnd = () => {
      if (isPulling && hasTriggered && window.scrollY === 0) {
        setShuffleKey((prev) => prev + 1);
      }
      isPulling = false;
      hasTriggered = false;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HomeFilterBar
        formats={{
          selectedFormat,
          onFormatSelect: handleFormatSelect,
          counts: formatCounts,
        }}
        tags={{
          tags,
          selectedTag,
          onTagSelect: handleTagSelect,
        }}
      />

      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <div className="pt-2 bg-white">
          <LatestTestsSection
            tests={tests.slice(0, 15)}
            locale={locale}
            shuffleKey={shuffleKey}
            latestTestSlugs={latestTestSlugs}
          />
        </div>

        <div className="pt-8.5 bg-white">
          {filteredTests.length > 0 ? (
            <CategorySection
              tests={filteredTests}
              categoryName={sectionLabel}
              locale={locale}
              latestTestSlugs={latestTestSlugs}
            />
          ) : (
            <div className="py-16 text-center text-gray-500">
              <p className="text-lg mb-4">{tTags('emptyFilter')}</p>
              <button
                type="button"
                onClick={() => pushFilterParams('all', 'all')}
                className="px-4 py-2 rounded-full bg-primary-500 text-white text-sm font-medium"
              >
                {tFormats('showAll')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
