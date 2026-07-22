import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { generateQuizImage, hasEvoLinkApiKey } from '@/lib/quiz-images/evolink';

export const dynamic = 'force-dynamic';
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  let body: {
    token?: string;
    prompt?: string;
    filename?: string;
    questionNumber?: number;
    choiceId?: string | null;
  } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const auth = await requireAdmin(req, body);
  if (!auth.ok) return auth.response;

  if (!hasEvoLinkApiKey()) {
    return NextResponse.json({ error: 'EVOLINK_API_KEY가 설정되지 않았습니다' }, { status: 503 });
  }

  const prompt = String(body.prompt ?? '').trim();
  const filename = String(body.filename ?? '').trim();
  if (!prompt) return NextResponse.json({ error: 'prompt 필요' }, { status: 400 });
  if (!filename) return NextResponse.json({ error: 'filename 필요' }, { status: 400 });

  try {
    const { taskId, imageUrl } = await generateQuizImage(prompt);
    return NextResponse.json({
      ok: true,
      taskId,
      imageUrl,
      filename,
      questionNumber: body.questionNumber ?? null,
      choiceId: body.choiceId ?? null,
    });
  } catch (err) {
    console.error('[admin-quiz-images/generate]', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }
}
