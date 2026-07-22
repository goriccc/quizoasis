import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { fetchQuizImagePngBytes } from '@/lib/quiz-images/evolink';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let body: { token?: string; url?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const auth = await requireAdmin(req, body);
  if (!auth.ok) return auth.response;

  const url = String(body.url ?? '').trim();
  if (!/^https?:\/\//i.test(url)) {
    return NextResponse.json({ error: '유효한 url 필요' }, { status: 400 });
  }

  try {
    const data = await fetchQuizImagePngBytes(url);
    return new NextResponse(new Uint8Array(data), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline',
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch (err) {
    console.error('[admin-quiz-images/preview]', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }
}
