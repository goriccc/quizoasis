import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export const dynamic = 'force-dynamic';

// 간단한 메모리 캐시 (locale별로 유지)
let cacheByLocale: Record<string, { tests: any[]; time: number }> = {};
const CACHE_DURATION = 60_000; // 60초

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').toLowerCase();
    const locale = (searchParams.get('locale') as Locale) || 'ko';
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    const now = Date.now();
    let tests: any[] | undefined;

    // 캐시 조회
    const cached = cacheByLocale[locale];
    if (cached && now - cached.time < CACHE_DURATION) {
      tests = cached.tests;
    } else {
      // 타임아웃 8초
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('API Timeout')), 8000));
      const dbTests: any[] = await Promise.race([getTests(), timeout]) as any[];
      tests = dbTests.map((db) => convertDBTestToQuizTest(db, locale));
      cacheByLocale[locale] = { tests, time: now };
    }

    if (!q) {
      const res = NextResponse.json({ tests: tests.slice(0, limit) });
      res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
      return res;
    }

    const lower = q.toLowerCase();
    const filtered = tests.filter((t: any) => {
      const title = (t.title || '').toLowerCase();
      const tags = ((t.tags || []) as string[]).map((x: string) => (x || '').toLowerCase());
      return title.includes(lower) || tags.some((tag) => tag.includes(lower));
    }).slice(0, limit);

    const res = NextResponse.json({ tests: filtered });
    res.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
    return res;
  } catch (e) {
    console.error('Error in search API:', e);
    return NextResponse.json({ tests: [] }, { status: 200 });
  }
}


