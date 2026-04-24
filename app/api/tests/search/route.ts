import { NextRequest, NextResponse } from 'next/server';
import { getTestsForList } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export const dynamic = 'force-dynamic';

// 간단한 메모리 캐시 (locale별로 유지)
let cacheByLocale: Record<string, { tests: any[]; dbTests: any[]; time: number }> = {};
const CACHE_DURATION = 60_000;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').toLowerCase();
    const locale = (searchParams.get('locale') as Locale) || 'ko';
    const limit = parseInt(searchParams.get('limit') || '50', 10); // 기본값을 50으로 증가

    const now = Date.now();
    let tests: any[] | undefined;
    let dbTests: any[] | undefined;

    // 캐시 조회
    const cached = cacheByLocale[locale];
    const shouldUseCache = cached && now - cached.time < CACHE_DURATION;
    
    if (shouldUseCache) {
      tests = cached.tests;
      dbTests = cached.dbTests;
    } else {
      // 프로덕션에서는 항상 최신 데이터 가져오기
      try {
        dbTests = await getTestsForList();
        if (!dbTests || !Array.isArray(dbTests)) {
          dbTests = [];
        }
        tests = dbTests.map((db) => convertDBTestToQuizTest(db, locale));
        
        cacheByLocale[locale] = { tests, dbTests, time: now };
      } catch (error) {
        // 프로덕션에서는 콘솔 로그 제거 (AdSense 무효 클릭 방지)
        if (process.env.NODE_ENV === 'development') {
          console.error('[Search API] Error fetching tests:', error);
        }
        // 에러 발생 시에도 빈 배열 반환하여 검색 실패 명확히 표시
        dbTests = [];
        tests = [];
      }
    }

    if (!q) {
      const res = NextResponse.json({ tests: tests.slice(0, limit) });
      res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
      return res;
    }

    const lower = q.toLowerCase();
    
    // dbTests를 slug를 키로 하는 Map으로 변환 (인덱스 매칭 문제 해결)
    const dbTestsMap = new Map();
    if (dbTests) {
      dbTests.forEach((dbTest: any) => {
        if (dbTest && dbTest.slug) {
          dbTestsMap.set(dbTest.slug, dbTest);
        }
      });
    }
    
    // 검색 결과 페이지와 동일한 단순 로직 사용
    const filtered = tests.filter((t: any) => {
      const title = (t.title || '').toLowerCase();
      const tags = ((t.tags || []) as string[]).map((x: string) => (x || '').toLowerCase());
      
      // 변환된 태그 확인 (검색 결과 페이지와 동일)
      const matchesConverted = title.includes(lower) || tags.some((tag: string) => tag.includes(lower));
      
      if (matchesConverted) {
        return true;
      }
      
      // 추가: 원본 DB의 모든 언어 태그도 확인 (한국어 "얼굴" 검색 시 다른 언어 태그도 매칭)
      if (t.slug && dbTestsMap.has(t.slug)) {
        const dbTest = dbTestsMap.get(t.slug);
        if (dbTest && dbTest.tags) {
          if (typeof dbTest.tags === 'object' && !Array.isArray(dbTest.tags)) {
            // 다국어 태그 객체인 경우 - 모든 언어의 태그 확인
            const allTags: string[] = [];
            Object.values(dbTest.tags).forEach((langTags: any) => {
              if (Array.isArray(langTags)) {
                allTags.push(...langTags);
              }
            });
            const allTagsLower = allTags.map((tag: string) => (tag || '').toLowerCase());
            if (allTagsLower.some((tag: string) => tag.includes(lower))) {
              return true;
            }
          } else if (Array.isArray(dbTest.tags)) {
            // 배열 형식 태그인 경우
            const tagsLower = dbTest.tags.map((tag: string) => (tag || '').toLowerCase());
            if (tagsLower.some((tag: string) => tag.includes(lower))) {
              return true;
            }
          }
        }
      }
      
      return false;
    }).slice(0, limit);

    const res = NextResponse.json({ tests: filtered });
    res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
    return res;
  } catch (e) {
    // 프로덕션에서는 콘솔 로그 제거 (AdSense 무효 클릭 방지)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in search API:', e);
    }
    return NextResponse.json({ tests: [] }, { status: 200 });
  }
}


