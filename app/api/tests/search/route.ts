import { NextRequest, NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').toLowerCase();
    const locale = (searchParams.get('locale') as Locale) || 'ko';
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    // 타임아웃 8초
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('API Timeout')), 8000));
    const dbTests: any[] = await Promise.race([getTests(), timeout]) as any[];
    const tests = dbTests.map((db) => convertDBTestToQuizTest(db, locale));

    if (!q) {
      return NextResponse.json({ tests: tests.slice(0, limit) });
    }

    const lower = q.toLowerCase();
    const filtered = tests.filter((t) => {
      const title = (t.title || '').toLowerCase();
      const tags = (t.tags || []).map((x) => (x || '').toLowerCase());
      return title.includes(lower) || tags.some((tag) => tag.includes(lower));
    }).slice(0, limit);

    return NextResponse.json({ tests: filtered });
  } catch (e) {
    console.error('Error in search API:', e);
    return NextResponse.json({ tests: [] }, { status: 200 });
  }
}


