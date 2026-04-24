import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function getSupabasePublicObjectUrl(supabaseUrl: string, objectPath: string, search: string) {
  const base = supabaseUrl.replace(/\/+$/, '');
  const path = objectPath.replace(/^\/+/, '');
  return `${base}/storage/v1/object/public/tests-thumbnails/${path}${search || ''}`;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    return new NextResponse('Missing NEXT_PUBLIC_SUPABASE_URL', { status: 500 });
  }

  const { path } = await context.params;
  const joined = (path || []).join('/');
  if (!joined) {
    return new NextResponse('Not found', { status: 404 });
  }

  const url = new URL(_request.url);
  const target = getSupabasePublicObjectUrl(supabaseUrl, joined, url.search);

  const upstream = await fetch(target, {
    // Supabase public bucket should not require cookies/creds.
    method: 'GET',
    redirect: 'follow',
  });

  if (!upstream.ok) {
    return new NextResponse(await upstream.text(), { status: upstream.status });
  }

  const contentType = upstream.headers.get('content-type') || 'application/octet-stream';
  const body = await upstream.arrayBuffer();

  const res = new NextResponse(body, {
    status: 200,
    headers: {
      'content-type': contentType,
      // URL에 v=YYYYMMDD 캐시버스팅이 붙으므로 길게 캐시해도 안전합니다.
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });

  // Forward useful headers when present.
  const contentLength = upstream.headers.get('content-length');
  if (contentLength) res.headers.set('content-length', contentLength);

  return res;
}

