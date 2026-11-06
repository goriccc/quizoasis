import { Suspense } from 'react';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getTestBySlug } from '@/lib/supabase';
import { getRuntimeTestEntry } from '@/lib/testRuntimeRegistry';
import { loadSplitTestMessages, mergeMessages } from '@/lib/testMessages';
import BalanceGameIntroSSR from '@/components/BalanceGameIntroSSR';

type Props = {
  locale: string;
  slug: string;
};

async function Top3ClientIsland({
  locale,
  slug,
  title,
  description,
  thumbnail,
  playCount,
  questions,
  loadClient,
}: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount: number;
  questions: unknown[];
  loadClient: () => Promise<{ default: React.ComponentType<any> }>;
}) {
  const { default: Client } = await loadClient();
  return (
    <Client
      locale={locale}
      slug={slug}
      title={title}
      description={description}
      questions={questions}
      questionCount={questions.length}
      thumbnail={thumbnail}
      playCount={playCount}
    />
  );
}

/** Registry path for TOP3 / scenario_4 style tests (questions only, no results array). */
export default async function RegisteredTop3TestEntry({ locale, slug }: Props) {
  const entry = getRuntimeTestEntry(slug);
  if (!entry?.loadTop3Payload) {
    return null;
  }

  const payload = await entry.loadTop3Payload();
  const dbTest = await getTestBySlug(slug);
  const meta = payload.meta;

  const test = dbTest || {
    slug,
    title: meta.title,
    description: meta.description,
    thumbnail: meta.thumbnail,
    type: meta.type || 'psychology',
    category: meta.category || 'personality',
    play_count: 0,
    tags: meta.tags,
  };

  const title =
    typeof test.title === 'object' ? test.title[locale] || test.title.ko : String(test.title);
  const description =
    typeof test.description === 'object'
      ? test.description[locale] || test.description.ko
      : String(test.description || '');
  const thumbnail =
    typeof test.thumbnail === 'string' ? test.thumbnail : meta.thumbnail;
  const playCount = test.play_count || 0;

  const baseMessages = (await getMessages()) as Record<string, unknown>;
  const split = await loadSplitTestMessages(locale, payload.messagesFileSlug);
  const messages = mergeMessages(baseMessages, split) as AbstractIntlMessages;

  const intro = (
    <BalanceGameIntroSSR
      locale={locale}
      title={title}
      thumbnail={thumbnail}
      messagesNamespace={payload.messagesNamespace}
      messages={messages}
      playCount={playCount}
    />
  );

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Suspense fallback={intro}>
        <Top3ClientIsland
          locale={locale}
          slug={test.slug}
          title={title}
          description={description}
          thumbnail={thumbnail}
          playCount={playCount}
          questions={payload.questions}
          loadClient={entry.loadClient}
        />
      </Suspense>
    </NextIntlClientProvider>
  );
}
