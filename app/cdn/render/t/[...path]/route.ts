import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function getSupabaseRenderImageUrl(supabaseUrl: string, objectPath: string, search: string) {
  const base = supabaseUrl.replace(/\/+$/, '');
  const path = objectPath.replace(/^\/+/, '');
  return `${base}/storage/v1/render/image/public/tests-thumbnails/${encodeURIComponent(path)}${search || ''}`;
}

export async function GET(
  request: Request,
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

  const url = new URL(request.url);
  const target = getSupabaseRenderImageUrl(supabaseUrl, joined, url.search);

  const upstream = await fetch(target, {
    method: 'GET',
    redirect: 'follow',
    next: { revalidate: 60 * 60 * 24 * 365 },
  });
  if (!upstream.ok) {
    return new NextResponse(await upstream.text(), { status: upstream.status });
  }

  const contentType = upstream.headers.get('content-type') || 'image/jpeg';
  const body = await upstream.arrayBuffer();

  const res = new NextResponse(body, {
    status: 200,
    headers: {
      'content-type': contentType,
      'cache-control': 'public, max-age=31536000, s-maxage=31536000, immutable',
    },
  });

  const contentLength = upstream.headers.get('content-length');
  if (contentLength) res.headers.set('content-length', contentLength);

  return res;
}
