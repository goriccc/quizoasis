import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export const dynamic = 'force-dynamic';

// 간단한 메모리 캐시 (locale별로 유지)
let cacheByLocale: Record<string, { tests: any[]; dbTests: any[]; time: number }> = {};
const CACHE_DURATION = 60_000; // 60초

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
    const cached = cacheByLocale[locale];
    if (!noCache && cached && now - cached.time < CACHE_DURATION) {
      tests = cached.tests;
      dbTests = cached.dbTests;
    } else {
      // 타임아웃 8초
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('API Timeout')), 8000));
      dbTests = await Promise.race([getTests(), timeout]) as any[];
      tests = dbTests.map((db) => convertDBTestToQuizTest(db, locale));
      cacheByLocale[locale] = { tests, dbTests, time: now };
    }

    if (!q) {
      const res = NextResponse.json({ tests: tests.slice(0, limit) });
      res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
      return res;
    }

    const lower = q.toLowerCase();
    const filtered = tests.filter((t: any, index: number) => {
      const title = (t.title || '').toLowerCase();
      const tags = ((t.tags || []) as string[]).map((x: string) => (x || '').toLowerCase());
      
      // 제목이나 태그에 검색어 포함 확인
      let matches = title.includes(lower) || tags.some((tag) => tag.includes(lower));
      
      // 원본 한국어 태그도 확인 (다른 locale에서도 한국어 태그로 검색 가능)
      if (!matches && dbTests && dbTests[index]) {
        const dbTest = dbTests[index];
        if (dbTest.tags && typeof dbTest.tags === 'object' && !Array.isArray(dbTest.tags)) {
          const koTags = dbTest.tags.ko || [];
          const koTagsLower = koTags.map((tag: string) => (tag || '').toLowerCase());
          matches = koTagsLower.some((tag: string) => tag.includes(lower));
        }
      }
      
      return matches;
    }).slice(0, limit);

    const res = NextResponse.json({ tests: filtered });
    res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
    return res;
  } catch (e) {
    console.error('Error in search API:', e);
    return NextResponse.json({ tests: [] }, { status: 200 });
  }
}


