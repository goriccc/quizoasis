import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export const dynamic = 'force-dynamic';

// 간단한 메모리 캐시 (locale별로 유지)
let cacheByLocale: Record<string, { tests: any[]; dbTests: any[]; time: number }> = {};
const CACHE_DURATION = 5_000; // 5초로 단축 (프로덕션에서 새 데이터 빠른 반영)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').toLowerCase();
    const locale = (searchParams.get('locale') as Locale) || 'ko';
    const limit = parseInt(searchParams.get('limit') || '50', 10); // 기본값을 50으로 증가
    const noCache = searchParams.get('noCache') === 'true'; // 캐시 무효화 옵션

    const now = Date.now();
    let tests: any[] | undefined;
    let dbTests: any[] | undefined;

    // 캐시 조회 (noCache가 true면 캐시 사용 안함)
    // 프로덕션에서는 캐시 시간을 더 짧게 설정하거나 무시
    const cached = cacheByLocale[locale];
    const isProduction = process.env.NODE_ENV === 'production';
    const shouldUseCache = !noCache && !isProduction && cached && now - cached.time < CACHE_DURATION;
    
    if (shouldUseCache) {
      tests = cached.tests;
      dbTests = cached.dbTests;
    } else {
      // 프로덕션에서는 항상 최신 데이터 가져오기
      try {
        // getTests()는 이미 타임아웃이 설정되어 있으므로 직접 호출
        dbTests = await getTests();
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
    
    const filtered = tests.filter((t: any) => {
      const title = (t.title || '').toLowerCase();
      const tags = ((t.tags || []) as string[]).map((x: string) => (x || '').toLowerCase());
      
      // 1차: 제목이나 변환된 태그에 검색어 포함 확인
      let matches = title.includes(lower) || tags.some((tag) => tag.includes(lower));
      
      // 2차: 매칭되지 않으면 원본 DB 데이터에서 모든 언어의 태그 확인 (slug 기반 매칭)
      if (!matches && t.slug && dbTestsMap.has(t.slug)) {
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
            matches = allTagsLower.some((tag: string) => tag.includes(lower));
          } else if (Array.isArray(dbTest.tags)) {
            // 배열 형식 태그인 경우
            const tagsLower = dbTest.tags.map((tag: string) => (tag || '').toLowerCase());
            matches = tagsLower.some((tag: string) => tag.includes(lower));
          }
        }
      }
      
      return matches;
    }).slice(0, limit);

    // 프로덕션에서는 콘솔 로그 제거 (AdSense 무효 클릭 방지)

    // "얼굴" 태그를 가진 테스트 slug 목록 (디버깅용)
    const faceTaggedSlugs: string[] = [];
    const faceTaggedDetails: Array<{slug: string, tags: any}> = [];
    if (dbTests) {
      dbTests.forEach((db: any) => {
        if (db && db.tags) {
          let hasFaceTag = false;
          let tagDetails: any = null;
          
          if (Array.isArray(db.tags)) {
            hasFaceTag = db.tags.some((tag: string) => 
              tag.toLowerCase().includes('얼굴') || tag.toLowerCase().includes('face')
            );
            tagDetails = db.tags;
          } else if (typeof db.tags === 'object') {
            const koTags = db.tags.ko || [];
            hasFaceTag = koTags.some((tag: string) => 
              tag.toLowerCase().includes('얼굴')
            );
            tagDetails = { ko: koTags, all: db.tags };
          }
          
          if (hasFaceTag && db.slug) {
            faceTaggedSlugs.push(db.slug);
            faceTaggedDetails.push({ slug: db.slug, tags: tagDetails });
          }
          
          // 특정 slug 확인 (새로 추가한 테스트들)
          if (db.slug && ['honest-facial-evaluation', 'face-psych-state', 'face-occupations'].includes(db.slug)) {
            faceTaggedDetails.push({ 
              slug: db.slug, 
              tags: Array.isArray(db.tags) ? db.tags : db.tags.ko || 'no tags' 
            });
          }
        }
      });
    }

    // 디버깅 정보를 응답에 포함 (프로덕션에서도 확인 가능)
    const res = NextResponse.json({ 
      tests: filtered,
      // 디버깅 정보 (프로덕션에서 문제 확인용)
      _debug: {
        totalTests: tests.length,
        totalDbTests: dbTests?.length || 0,
        filteredCount: filtered.length,
        query: q,
        hasDbTests: !!dbTests && dbTests.length > 0,
        faceTaggedCount: faceTaggedSlugs.length,
        faceTaggedSlugs: faceTaggedSlugs,
        filteredSlugs: filtered.map((t: any) => t.slug),
        // 새로 추가한 테스트들 존재 여부 확인
        newTestsCheck: {
          'honest-facial-evaluation': dbTests?.some((t: any) => t.slug === 'honest-facial-evaluation') || false,
          'face-psych-state': dbTests?.some((t: any) => t.slug === 'face-psych-state') || false,
          'face-occupations': dbTests?.some((t: any) => t.slug === 'face-occupations') || false
        },
        faceTaggedDetails: faceTaggedDetails
      }
    });
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


