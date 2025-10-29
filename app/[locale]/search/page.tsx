import { setRequestLocale, getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { getTests } from '@/lib/supabase';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { Locale } from '@/i18n';
import { QuizTest } from '@/lib/types';
import CategorySection from '@/components/CategorySection';

interface Props {
  params: { locale: string };
  searchParams?: { q?: string };
}

export const revalidate = 0;

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = params;
  const q = (searchParams?.q || '').toString().trim();
  setRequestLocale(locale);
  headers();
  const t = await getTranslations('search');

  let tests: QuizTest[] = [];
  try {
    const dbTests = await getTests();
    tests = dbTests.map((db: any) => convertDBTestToQuizTest(db, locale as Locale));
  } catch (e) {
    tests = [];
  }

  const lower = q.toLowerCase();
  const filtered = lower
    ? tests.filter((t) => {
        const title = (t.title || '').toLowerCase();
        const tags = (t.tags || []).map((x) => (x || '').toLowerCase());
        return title.includes(lower) || tags.some((tag) => tag.includes(lower));
      })
    : [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center">{q ? t('resultsFor', { query: q }) : t('empty')}</h1>
        {q && filtered.length > 0 ? (
          <CategorySection tests={filtered} categoryName={q} locale={locale as Locale} showHeader={false} />
        ) : (
          <p className="text-gray-600 text-center">{t('empty')}</p>
        )}
      </div>
    </div>
  );
}


