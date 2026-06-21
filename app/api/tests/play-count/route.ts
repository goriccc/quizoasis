import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const SLUG_PATTERN = /^[a-z0-9-]+$/;

export async function POST(request: NextRequest) {
  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const slug = typeof body?.slug === 'string' ? body.slug.trim() : '';

    if (!slug || !SLUG_PATTERN.test(slug) || slug.length > 100) {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.rpc('increment_play_count', { test_slug: slug });

    if (error) {
      console.error('[play-count] RPC failed:', error);
      return NextResponse.json({ error: 'Failed to increment play count' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[play-count] Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
