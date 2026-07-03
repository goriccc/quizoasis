'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { QuizTest } from '@/lib/types';
import { formatPlayCount } from '@/lib/utils';
import TestThumbnail from './TestThumbnail';
import { Locale } from '@/i18n';
import { usePrefetchOnVisible } from '@/hooks/usePrefetchOnVisible';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { getLatestTestSlugs } from '@/lib/latestTests';

// 개별 테스트 카드 컴포넌트
function TestCard({ 
  test, 
  index, 
  locale, 
  getSafeTitle,
  latestTestSlugs 
}: { 
  test: QuizTest; 
  index: number; 
  locale: Locale;
  getSafeTitle: (test: QuizTest) => string;
  latestTestSlugs: string[];
}) {
  const href = `/${locale}/test/${test.slug}`;
  const prefetchRef = usePrefetchOnVisible(href, index >= 3); // 처음 3개는 기본 prefetch, 나머지는 뷰포트에 보일 때
  
  // Hydration 오류 방지를 위해 클라이언트에서만 계산
  const [mounted, setMounted] = useState(false);
  const safeTitle = useMemo(() => getSafeTitle(test), [test, getSafeTitle]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      ref={prefetchRef as any}
      href={href}
      className="group"
      prefetch={index < 3}
    >
      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
        {/* 썸네일 */}
        <div className="relative w-full aspect-video">
          <TestThumbnail
            thumbnail={test.thumbnail}
            alt={safeTitle}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 2}
            quality={85}
            suppressHydrationWarning
            loading={index < 2 ? undefined : 'lazy'}
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
            <h3 
              className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1"
              suppressHydrationWarning
            >
              {safeTitle}
            </h3>
            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
              <Play size={14} />
              <span suppressHydrationWarning>{mounted ? formatPlayCount(test.playCount, locale) : '0'}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface CategorySectionProps {
  tests: QuizTest[];
  categoryName: string;
  locale: Locale;
  showHeader?: boolean;
  latestTestSlugs?: string[];
}

export default function CategorySection({
  tests,
  categoryName,
  locale,
  showHeader = true,
  latestTestSlugs: latestTestSlugsProp,
}: CategorySectionProps) {
  const t = useTranslations();
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [latestTestSlugsFetched, setLatestTestSlugsFetched] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 최신 테스트 slug 목록 로드 (prop 미전달 시에만 API 호출)
  useEffect(() => {
    if (latestTestSlugsProp) return;

    const loadLatestSlugs = async () => {
      try {
        const slugs = await getLatestTestSlugs(15);
        setLatestTestSlugsFetched(slugs);
      } catch (error) {
        console.error('Error loading latest test slugs:', error);
      }
    };
    loadLatestSlugs();
  }, [latestTestSlugsProp]);

  const latestTestSlugs = latestTestSlugsProp ?? latestTestSlugsFetched;

  // 안전한 카테고리 이름 가져오기 함수
  const getSafeCategoryName = (category: string, fallbackLocale: string = 'ko') => {
    if (category === 'all') return t('tags.all');
    
    const tagTranslations: Record<string, Record<string, string>> = {
      '소통': {
        ko: '소통',
        en: 'Communication',
        ja: 'コミュニケーション',
        'zh-CN': '沟通',
        'zh-TW': '溝通',
        id: 'Komunikasi',
        vi: 'Giao tiếp'
      },
      '심리': {
        ko: '심리',
        en: 'Psychology',
        ja: '心理学',
        'zh-CN': '心理',
        'zh-TW': '心理',
        id: 'Psikologi',
        vi: 'Tâm lý'
      },
      '관계': {
        ko: '관계',
        en: 'Relationship',
        ja: '関係',
        'zh-CN': '关系',
        'zh-TW': '關係',
        id: 'Hubungan',
        vi: 'Mối quan hệ'
      },
      '우정': {
        ko: '우정',
        en: 'Friendship',
        ja: '友情',
        'zh-CN': '友谊',
        'zh-TW': '友誼',
        id: 'Persahabatan',
        vi: 'Tình bạn'
      },
      '성격': {
        ko: '성격',
        en: 'Personality',
        ja: '性格',
        'zh-CN': '性格',
        'zh-TW': '性格',
        id: 'Kepribadian',
        vi: 'Tính cách'
      }
    };
    
    return tagTranslations[category]?.[currentLocale] || 
           tagTranslations[category]?.[fallbackLocale] || 
           category;
  };

  // 안전한 제목 가져오기 함수
  const getSafeTitle = useCallback((test: QuizTest, fallbackLocale: string = 'ko') => {
    if (typeof test.title === 'string') {
      return test.title;
    }
    const titleObj = test.title as Record<string, string>;
    return titleObj[locale] || titleObj[fallbackLocale] || titleObj.en || 'Test Title';
  }, [locale]);

  return (
    <section className="pt-0 pb-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        {showHeader && (
          <h2 
            className="text-xl font-bold mb-6 text-gray-800"
            suppressHydrationWarning
          >
            {t('sections.category')} : {getSafeCategoryName(categoryName)}
          </h2>
        )}
        
        {/* 반응형 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <TestCard
              key={test.id}
              test={test}
              index={index}
              locale={locale}
              getSafeTitle={getSafeTitle}
              latestTestSlugs={latestTestSlugs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

