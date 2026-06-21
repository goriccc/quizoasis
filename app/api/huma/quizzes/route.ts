import { NextRequest, NextResponse } from 'next/server';
import { getTestsForHumaContent, HumaQuizRow } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

type LocalizedField = Record<string, string> | string | null | undefined;

type HumaQuizPayload = {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: 'active';
};

function pickKoText(field: LocalizedField): string {
  if (!field) return '';
  if (typeof field === 'string') return field.trim();
  return (field.ko || field.en || Object.values(field)[0] || '').trim();
}

function mapRowToHumaQuiz(row: HumaQuizRow): HumaQuizPayload {
  return {
    id: String(row.id),
    slug: row.slug,
    title: pickKoText(row.title),
    description: pickKoText(row.description),
    status: 'active',
  };
}

function isAuthorized(request: NextRequest): boolean {
  const apiKey = process.env.QUIZOASIS_CONTENT_API_KEY?.trim();
  if (!apiKey) {
    return true;
  }

  const bearer = request.headers.get('authorization');
  if (bearer === `Bearer ${apiKey}`) {
    return true;
  }

  const headerKey = request.headers.get('x-api-key');
  return headerKey === apiKey;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const rows = await getTestsForHumaContent();
    const quizzes = rows
      .filter((row) => row.slug && pickKoText(row.title))
      .map(mapRowToHumaQuiz);

    const response = NextResponse.json(quizzes);
    response.headers.set('Cache-Control', 'private, no-store');
    return response;
  } catch (error) {
    console.error('[huma-quizzes] GET failed:', error);
    return NextResponse.json({ error: 'Failed to fetch quizzes' }, { status: 500 });
  }
}
