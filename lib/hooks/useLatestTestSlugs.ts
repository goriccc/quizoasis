'use client';

import { useEffect, useState } from 'react';

export function useLatestTestSlugs(limit = 15): string[] {
  const [latestTestSlugs, setLatestTestSlugs] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch(`/api/tests/latest-slugs?limit=${limit}`);
        if (!response.ok) return;
        const data = await response.json();
        if (!cancelled) {
          setLatestTestSlugs(data.slugs || []);
        }
      } catch (error) {
        console.error('Error loading latest test slugs:', error);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return latestTestSlugs;
}
