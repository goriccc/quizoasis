'use client';

import { useEffect, useState } from 'react';

export type RecommendedTest = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  playCount: number;
  badgeType?: 'popular' | 'hot' | null;
};

type UseTestRecommendationsOptions = {
  slug: string;
  locale: string;
  similarTags?: string;
  enabled?: boolean;
};

function mapApiTest(test: Record<string, unknown>): RecommendedTest {
  const title = test.title;
  return {
    id: Number(test.id),
    slug: String(test.slug),
    title: typeof title === 'string' ? title : String(title),
    thumbnail: String(test.thumbnail),
    playCount: Number(test.playCount ?? test.play_count ?? 0),
    badgeType: (test.badgeType ?? test.badge_type ?? null) as RecommendedTest['badgeType'],
  };
}

export function useTestRecommendations({
  slug,
  locale,
  similarTags,
  enabled = true,
}: UseTestRecommendationsOptions) {
  const [similarTestsState, setSimilarTestsState] = useState<RecommendedTest[]>([]);
  const [popularTestsState, setPopularTestsState] = useState<RecommendedTest[]>([]);
  const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;

    async function load() {
      try {
        const similarParams = new URLSearchParams({
          excludeSlug: slug,
          locale,
          limit: '5',
        });
        if (similarTags) {
          similarParams.set('tags', similarTags);
        }

        const [similarRes, popularRes, latestRes] = await Promise.all([
          fetch(`/api/tests/similar?${similarParams.toString()}`),
          fetch(
            `/api/tests/popular?excludeSlug=${encodeURIComponent(slug)}&locale=${encodeURIComponent(locale)}&limit=5`
          ),
          fetch('/api/tests/latest-slugs?limit=15'),
        ]);

        if (cancelled) return;

        if (similarRes.ok) {
          const similarData = await similarRes.json();
          const similarTests = (similarData.tests || []).map(mapApiTest);
          if (similarTests.length > 0) {
            setSimilarTestsState(similarTests);
          }
        }

        if (popularRes.ok) {
          const popularData = await popularRes.json();
          setPopularTestsState((popularData.tests || []).map(mapApiTest));
        }

        if (latestRes.ok) {
          const latestData = await latestRes.json();
          setLatestTestSlugs(latestData.slugs || []);
        }
      } catch (error) {
        console.error('테스트 로드 실패:', error);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [slug, locale, similarTags, enabled]);

  return { similarTestsState, popularTestsState, latestTestSlugs, setSimilarTestsState };
}
