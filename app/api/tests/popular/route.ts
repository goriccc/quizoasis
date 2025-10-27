import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

// 동적 라우트로 설정
export const dynamic = 'force-dynamic';

// 간단한 메모리 캐시
let cache: any = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1분

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '5');
    const locale = searchParams.get('locale') as Locale || 'ko';
    const excludeSlug = searchParams.get('excludeSlug');

    // 캐시 확인
    const now = Date.now();
    let dbTests;
    
    if (cache && (now - cacheTime) < CACHE_DURATION) {
      dbTests = cache;
    } else {
      // 타임아웃 설정 (8초)
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('API Timeout')), 8000)
      );

      // Supabase에서 모든 테스트 가져오기
      const fetchTestsPromise = getTests();
      dbTests = await Promise.race([fetchTestsPromise, timeoutPromise]) as any;
      
      // 캐시 업데이트
      cache = dbTests;
      cacheTime = now;
    }
    
    // DB 테스트를 QuizTest 형식으로 변환
    const allTests = dbTests.map((dbTest: any) => 
      convertDBTestToQuizTest(dbTest, locale)
    );

    // 현재 테스트 제외
    let filteredTests = allTests;
    if (excludeSlug) {
      filteredTests = allTests.filter((test: any) => test.slug !== excludeSlug);
    } else {
      // URL에서 현재 테스트 slug를 추출 (Referer 헤더에서)
      const referer = request.headers.get('referer');
      if (referer) {
        const url = new URL(referer);
        const pathParts = url.pathname.split('/');
        const currentSlug = pathParts[pathParts.length - 1];
        if (currentSlug && currentSlug !== 'test') {
          filteredTests = allTests.filter((test: any) => test.slug !== currentSlug);
        }
      }
    }

    // 인기순 정렬 (playCount 기준, 내림차순)
    filteredTests.sort((a: any, b: any) => {
      const aCount = a.playCount || 0;
      const bCount = b.playCount || 0;
      if (aCount !== bCount) {
        return bCount - aCount;
      }
      // playCount가 같으면 최신순
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return a.slug.localeCompare(b.slug);
    });

    // 페이지네이션
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTests = filteredTests.slice(startIndex, endIndex);

    // 총 개수
    const totalCount = filteredTests.length;
    const totalPages = Math.ceil(totalCount / limit);
    const hasMore = page < totalPages;

    const response = NextResponse.json({
      tests: paginatedTests,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasMore
      }
    });

    // 캐시 헤더 설정
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    
    return response;

  } catch (error) {
    console.error('Error fetching popular tests:', error);
    const errorResponse = NextResponse.json(
      { error: 'Failed to fetch popular tests' },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-cache');
    return errorResponse;
  }
}
