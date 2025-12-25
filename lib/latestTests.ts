import { getTests } from './supabase';

/**
 * 최신 테스트 slug 목록을 가져옵니다 (상위 N개)
 * @param count 가져올 최신 테스트 개수 (기본값: 15)
 * @returns 최신 테스트 slug 배열
 */
export async function getLatestTestSlugs(count: number = 15): Promise<string[]> {
  try {
    const tests = await getTests();
    // getTests()는 이미 created_at 기준 내림차순으로 정렬되어 있음
    const slugs = tests.slice(0, count).map((test: any) => test.slug).filter(Boolean);
    
    // 디버깅 로그
    console.log('📋 최신 테스트 슬러그 목록:', slugs);
    
    return slugs;
  } catch (error) {
    console.error('❌ Error fetching latest test slugs:', error);
    return [];
  }
}

