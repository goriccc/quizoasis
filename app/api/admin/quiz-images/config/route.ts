import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { hasEvoLinkApiKey, QUIZ_IMAGE_DEFAULTS } from '@/lib/quiz-images/evolink';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  return NextResponse.json({
    configured: hasEvoLinkApiKey(),
    defaults: QUIZ_IMAGE_DEFAULTS,
  });
}
