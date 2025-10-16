'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { QuizTest } from '@/lib/types';
import { Locale } from '@/i18n';
import { getThumbnailUrl } from '@/lib/utils';
import { formatPlayCount } from '@/lib/utils';
import { Play } from 'lucide-react';

interface SimilarTestsSectionProps {
  currentTestSlug: string;
  currentTestTags: string[];
  locale: Locale;
}

interface ApiResponse {
  tests: QuizTest[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export default function SimilarTestsSection({ 
  currentTestSlug, 
  currentTestTags, 
  locale 
}: SimilarTestsSectionProps) {
  const t = useTranslations('friendTest');
  const [tests, setTests] = useState<QuizTest[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // 무한 스크롤을 위한 Intersection Observer (임시 비활성화)
  const lastTestElementRef = useCallback((node: HTMLDivElement) => {
    // 무한 스크롤 임시 비활성화
    return;
  }, []);

  // 더 많은 테스트 로드
  const loadMoreTests = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const params = new URLSearchParams({
        tags: currentTestTags.join(','),
        page: (page + 1).toString(),
        limit: '12',
        locale,
        excludeSlug: currentTestSlug
      });

      const response = await fetch(`/api/tests/similar?${params}`);
      const data: ApiResponse = await response.json();

      if (data.tests.length > 0) {
        setTests(prev => [...prev, ...data.tests]);
        setPage(prev => prev + 1);
        setHasMore(data.pagination.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more tests:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // 초기 테스트 로드 (한 번만 로드)
  useEffect(() => {
    const loadInitialTests = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          tags: currentTestTags.join(','),
          page: '1',
          limit: '6', // 6개로 제한
          locale,
          excludeSlug: currentTestSlug
        });

        const response = await fetch(`/api/tests/similar?${params}`);
        const data: ApiResponse = await response.json();

        setTests(data.tests);
        setHasMore(false); // 더 이상 로드하지 않음
        setPage(1);
      } catch (error) {
        console.error('Error loading initial tests:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialTests();
  }, [currentTestSlug, currentTestTags.join(','), locale]);

  // 컴포넌트 언마운트 시 observer 정리
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (tests.length === 0 && !loading) {
    return null;
  }

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          {t('ui.similarTestsStart')}
        </h2>
        
        {/* 테스트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <Link
              key={test.id}
              href={`/${locale}/test/${test.slug}`}
              className="group"
              prefetch={true}
              ref={index === tests.length - 1 ? (lastTestElementRef as any) : null}
            >
              <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                {/* 썸네일 */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={getThumbnailUrl(test.thumbnail)}
                    alt={test.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                  />
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

        {/* 로딩 인디케이터 */}
        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        )}

      </div>
    </section>
  );
}
