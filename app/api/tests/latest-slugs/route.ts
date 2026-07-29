import { NextRequest, NextResponse } from 'next/server';
import { getTestsForList } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '15', 10), 30);

    const dbTests = await getTestsForList();
    const slugs = (dbTests || [])
      .slice(0, limit)
      .map((test: { slug?: string }) => test.slug)
      .filter(Boolean) as string[];

    const response = NextResponse.json({ slugs });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    return response;
  } catch (error) {
    console.error('Error fetching latest test slugs:', error);
    return NextResponse.json({ error: 'Failed to fetch latest slugs' }, { status: 500 });
  }
}
