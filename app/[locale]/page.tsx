import { Metadata } from 'next';
import { headers } from 'next/headers';
import { getTestsForList } from '@/lib/supabase';
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

// ISR with 60 seconds cache: play_count 빠른 업데이트
export const revalidate = 60;

// metadata는 app/[locale]/layout.tsx에서 처리

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  
  // Force dynamic rendering
  headers();
  
  // FAQ Schema 임시 제거 - 디버깅용
  const faqSchema = null;
  
  try {
    // Supabase에서 테스트 데이터 가져오기
    const dbTests = await getTestsForList();
    console.log('📊 Supabase 테스트 개수:', dbTests.length);
    
    if (dbTests.length > 0) {
      console.log('✅ Supabase 데이터 사용');
      console.log('첫 번째 테스트:', dbTests[0]);
      
      // DB 테스트를 QuizTest 형식으로 변환
      const tests: QuizTest[] = dbTests.map((dbTest: any) => 
        convertDBTestToQuizTest(dbTest, locale as Locale)
      );
      
      // 애착 스타일 테스트가 없으면 더미 데이터에서 추가
      const hasAttachmentTest = tests.some(test => test.slug === 'attachment-style-test');
      if (!hasAttachmentTest) {
        console.log('🔧 애착 스타일 테스트 추가');
        const attachmentTest = dummyTests.find(test => test.slug === 'attachment-style-test');
        if (attachmentTest) {
          tests.unshift(attachmentTest); // 첫 번째에 추가
        }
      }
      
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