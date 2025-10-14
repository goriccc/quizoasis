import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { signalQuestions, signalResults } from '@/lib/signalData';
import { setRequestLocale } from 'next-intl/server';
import { getTestBySlug } from '@/lib/supabase';

// 동적 import로 JavaScript 번들 크기 최적화
const SignalTestClient = dynamic(() => import('@/components/SignalTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

interface Props {
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: '연인이 보내는 신호를 캐치하세요! | QuizOasis',
  description: '연인의 신호 포착 능력을 테스트해보세요. 12개 질문으로 당신의 신호 감지 능력을 확인하세요!',
  keywords: '연애, 소통, 심리, 신호, 연인, 커플, 궁합',
};

export default async function SignalTestPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  // Supabase에서 테스트 정보 가져오기
  const testData = await getTestBySlug('catch-lover-signals');

  const title = testData?.title?.[locale] || testData?.title?.['ko'] || '연인이 보내는 신호를 캐치하세요!';
  const description = testData?.description?.[locale] || testData?.description?.['ko'] || '연인의 신호 포착 능력을 테스트해보세요.';
  const playCount = testData?.play_count || 0;

  return (
    <SignalTestClient
      locale={locale}
      slug="catch-lover-signals"
      title={title}
      description={description}
      questions={signalQuestions}
      results={signalResults}
      questionCount={signalQuestions.length}
      thumbnail="test_027_reading_signals.jpg"
      playCount={playCount}
      similarTests={[]}
    />
  );
}

