import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { createStoredZip, fetchQuizImagesForZip } from '@/lib/quiz-images/evolink';

export const dynamic = 'force-dynamic';
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  let body: {
    token?: string;
    items?: Array<{ url: string; filename: string }>;
    zipName?: string;
  } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const auth = await requireAdmin(req, body);
  if (!auth.ok) return auth.response;

  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ error: '다운로드할 이미지가 없습니다' }, { status: 400 });
  }

  try {
    const files = await fetchQuizImagesForZip(items);
    if (files.length === 0) {
      return NextResponse.json({ error: '유효한 이미지 URL이 없습니다' }, { status: 400 });
    }
    const zip = createStoredZip(files);
    const zipName = String(body.zipName ?? 'quiz-images.zip').replace(/[^\w.-]/g, '_');
    return new NextResponse(new Uint8Array(zip), {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipName}"`,
      },
    });
  } catch (err) {
    console.error('[admin-quiz-images/zip]', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }
}
