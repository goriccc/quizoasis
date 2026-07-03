import { NextRequest, NextResponse } from 'next/server';
import { getTestsForList } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

let cache: string[] | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60_000;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '15', 10), 30);

    const now = Date.now();
    let slugs: string[];

    if (cache && now - cacheTime < CACHE_DURATION) {
      slugs = cache;
    } else {
      const dbTests = await getTestsForList();
      slugs = (dbTests || [])
        .slice(0, limit)
        .map((test: { slug?: string }) => test.slug)
        .filter(Boolean) as string[];
      cache = slugs;
      cacheTime = now;
    }

    const response = NextResponse.json({ slugs: slugs.slice(0, limit) });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return response;
  } catch (error) {
    console.error('Error fetching latest test slugs:', error);
    return NextResponse.json({ error: 'Failed to fetch latest slugs' }, { status: 500 });
  }
}
