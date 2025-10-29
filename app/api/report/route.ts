import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, details, email, category, locale } = body || {};
    console.log('[report-api] Received:', { title, details, email, category, locale });
    
    if (!title || !details) {
      console.log('[report-api] Validation failed: missing title or details');
      return NextResponse.json({ error: 'invalid' }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    console.log('[report-api] Supabase config:', { 
      hasUrl: !!url, 
      hasKey: !!key,
      url: url ? url.substring(0, 20) + '...' : 'none'
    });

    if (url && key) {
      const supabase = createClient(url, key);
      const { data, error } = await supabase.from('issue_reports').insert([{ title, details, email, category, locale }]);
      
      if (error) {
        console.error('[report-api] Supabase error:', error);
        return NextResponse.json({ error: 'database_error', message: error.message }, { status: 500 });
      }
      
      console.log('[report-api] Successfully inserted:', data);
    } else {
      console.log('[report-fallback] No Supabase config, logging to console:', { title, details, email, category, locale });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[report-api] Error:', e);
    return NextResponse.json({ error: 'server_error', message: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}


