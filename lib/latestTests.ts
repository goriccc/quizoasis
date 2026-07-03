/**
 * 최신 테스트 slug 목록 (경량 API 우선)
 */
export async function getLatestTestSlugs(count: number = 15): Promise<string[]> {
  const limit = Math.min(count, 30);

  if (typeof window !== 'undefined') {
    try {
      const response = await fetch(`/api/tests/latest-slugs?limit=${limit}`);
      if (response.ok) {
        const data = await response.json();
        return data.slugs || [];
      }
    } catch (error) {
      console.error('Error fetching latest test slugs:', error);
    }
    return [];
  }

  const { getTestsForList } = await import('./supabase');
  const tests = await getTestsForList();
  return (tests || [])
    .slice(0, limit)
    .map((test: { slug?: string }) => test.slug)
    .filter(Boolean) as string[];
}
