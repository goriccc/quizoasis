import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tags = searchParams.get('tags')?.split(',') || [];
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const locale = searchParams.get('locale') as Locale || 'ko';
    const excludeSlug = searchParams.get('excludeSlug');

    // Supabase에서 모든 테스트 가져오기
    const dbTests = await getTests();
    
    // DB 테스트를 QuizTest 형식으로 변환
    const allTests = dbTests.map(dbTest => 
      convertDBTestToQuizTest(dbTest, locale)
    );

    // 태그 필터링
    let filteredTests = allTests;
    if (tags.length > 0) {
      filteredTests = allTests.filter(test => 
        test.tags.some(tag => tags.includes(tag))
      );
    }

    // 현재 테스트 제외
    if (excludeSlug) {
      filteredTests = filteredTests.filter(test => test.slug !== excludeSlug);
    }

    // 정렬 순서 고정 (created_at 기준, 최신순)
    filteredTests.sort((a, b) => {
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

    return NextResponse.json({
      tests: paginatedTests,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasMore
      }
    });

  } catch (error) {
    console.error('Error fetching similar tests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch similar tests' },
      { status: 500 }
    );
  }
}
