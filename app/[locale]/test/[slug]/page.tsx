import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTestBySlug, getTests } from '@/lib/supabase';
import { getTestData } from '@/lib/mbtiData';
import { getThumbnailUrl } from '@/lib/utils';
import MBTITestClient from '@/components/MBTITestClient';
import StressTestClient from '@/components/StressTestClient';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

// ISR: 1시간마다 자동 재생성 (플레이 횟수 업데이트)
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const test = await getTestBySlug(slug);

  if (!test) {
    return {
      title: '심리테스트 | QuizOasis',
      description: '재미있는 심리테스트를 즐겨보세요',
    };
  }

  const title = test.title[locale] || test.title.ko || '심리테스트';
  const description = test.description?.[locale] || test.description?.ko || '';
  
  // 태그가 다국어 객체인 경우 현재 언어의 태그 배열 추출
  const tags = typeof test.tags === 'object' && !Array.isArray(test.tags)
    ? test.tags[locale] || test.tags.ko || []
    : test.tags;

  // 썸네일을 절대 URL로 변환
  const thumbnailUrl = getThumbnailUrl(test.thumbnail);

  return {
    title: title,
    description: description,
    keywords: Array.isArray(tags) ? tags.join(', ') : '',
    openGraph: {
      title: title,
      description: description,
      images: [thumbnailUrl],
      type: 'website',
      url: `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [thumbnailUrl],
    },
  };
}

export default async function TestPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  // Supabase에서 테스트 메타데이터만 가져오기 (빠른 로딩)
  const test = await getTestBySlug(slug);
  if (!test) {
    notFound();
  }

  // 로컬에서 테스트 데이터 가져오기
  const testData = getTestData(slug);
  if (!testData) {
    notFound();
  }

  const title = test.title[locale] || test.title.ko || '';
  const description = test.description?.[locale] || test.description?.ko || '';

  // 테스트 타입에 따라 다른 클라이언트 컴포넌트 렌더링
  const TestClient = test.type === 'stress' ? StressTestClient : MBTITestClient;

  return (
    <TestClient
      locale={locale}
      slug={slug}
      title={title}
      description={description}
      questions={testData.questions}
      results={testData.results}
      questionCount={testData.questions.length}
      thumbnail={test.thumbnail}
      playCount={test.play_count}
      similarTests={[]} // 클라이언트 사이드에서 로드
    />
  );
}