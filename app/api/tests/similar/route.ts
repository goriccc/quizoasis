import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

// 간단한 메모리 캐시
let cache: any = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1분

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tags = searchParams.get('tags')?.split(',') || [];
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const locale = searchParams.get('locale') as Locale || 'ko';
    const excludeSlug = searchParams.get('excludeSlug');
    const category = searchParams.get('category');

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

    // 태그 필터링
    let filteredTests = allTests;
    if (tags.length > 0) {
      filteredTests = allTests.filter((test: any) => 
        test.tags.some((tag: string) => tags.includes(tag))
      );
    }

    // 현재 테스트 제외 (excludeSlug 파라미터가 있거나 category가 있으면 자동 제외)
    if (excludeSlug) {
      filteredTests = filteredTests.filter((test: any) => test.slug !== excludeSlug);
    } else if (category) {
      // category가 있으면 해당 카테고리의 현재 테스트를 자동으로 제외
      // URL에서 현재 테스트 slug를 추출 (Referer 헤더에서)
      const referer = request.headers.get('referer');
      if (referer) {
        const url = new URL(referer);
        const pathParts = url.pathname.split('/');
        const currentSlug = pathParts[pathParts.length - 1];
        if (currentSlug && currentSlug !== 'test') {
          filteredTests = filteredTests.filter((test: any) => test.slug !== currentSlug);
        }
      }
    }

    // 정렬 순서 고정 (created_at 기준, 최신순)
    filteredTests.sort((a: any, b: any) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      // createdAt이 없는 경우 slug 기준으로 정렬
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
    console.error('Error fetching similar tests:', error);
    const errorResponse = NextResponse.json(
      { error: 'Failed to fetch similar tests' },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-cache');
    return errorResponse;
  }
}
