import { getTests } from '@/lib/supabase';
import { dummyTests } from '@/lib/dummyData';
import HomePageClient from '@/components/HomePageClient';
import { convertDBTestToQuizTest } from '@/lib/utils';
import { DBTest, QuizTest } from '@/lib/types';
import { Locale } from '@/i18n';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: string;
  };
}

// ISR: 10분마다 자동 재생성
export const revalidate = 600;

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  
  try {
    // Supabase에서 테스트 데이터 가져오기
    const dbTests = await getTests();
    console.log('📊 Supabase 테스트 개수:', dbTests.length);
    
    if (dbTests.length > 0) {
      console.log('✅ Supabase 데이터 사용');
      console.log('첫 번째 테스트:', dbTests[0]);
      
      // DB 테스트를 QuizTest 형식으로 변환
      const tests: QuizTest[] = dbTests.map(dbTest => 
        convertDBTestToQuizTest(dbTest, locale as Locale)
      );
      
      return <HomePageClient tests={tests} locale={locale as Locale} />;
    } else {
      console.log('⚠️ Supabase 데이터 없음, 더미 데이터 사용');
      return <HomePageClient tests={dummyTests} locale={locale as Locale} />;
    }
  } catch (error) {
    console.error('❌ Supabase 데이터 로딩 실패:', error);
    console.log('🔄 더미 데이터로 폴백');
    return <HomePageClient tests={dummyTests} locale={locale as Locale} />;
  }
}