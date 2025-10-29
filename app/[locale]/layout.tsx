import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 언어별 메타 설명
const getLocalizedMetadata = (locale: string) => {
  const descriptions: Record<string, string> = {
    'ko': 'QuizOasis에서 세상의 모든 심리테스트와 재미있는 퀴즈를 즐겨보세요! 다양한 테스트가 완전 무료로 제공됩니다.',
    'en': 'Enjoy all the psychological tests and fun quizzes in the world at QuizOasis! Various tests are provided completely free.',
    'ja': 'QuizOasisで世界中の心理テストと楽しいクイズをお楽しみください！様々なテストが完全無料で提供されます。',
    'zh-CN': '在QuizOasis享受世界上所有的心理测试和有趣的测验！各种测试完全免费提供。',
    'zh-TW': '在QuizOasis享受世界上所有的心理測試和有趣的測驗！各種測試完全免費提供。',
    'id': 'Nikmati semua tes psikologi dan kuis menarik di dunia di QuizOasis! Berbagai tes disediakan sepenuhnya gratis.',
    'vi': 'Thưởng thức tất cả các bài kiểm tra tâm lý và câu đố vui trên thế giới tại QuizOasis! Nhiều bài kiểm tra được cung cấp hoàn toàn miễn phí.',
  };

  const titles: Record<string, string> = {
    'ko': 'QuizOasis - 심리테스트, 퀴즈, 성격분석',
    'en': 'QuizOasis - Psychological Tests, Quizzes, Personality Analysis',
    'ja': 'QuizOasis - 心理テスト、クイズ、性格分析',
    'zh-CN': 'QuizOasis - 心理测试、测验、性格分析',
    'zh-TW': 'QuizOasis - 心理測試、測驗、性格分析',
    'id': 'QuizOasis - Tes Psikologi, Kuis, Analisis Kepribadian',
    'vi': 'QuizOasis - Kiểm tra Tâm lý, Câu đố, Phân tích Tính cách',
  };

  const keywords: Record<string, string> = {
    'ko': '심리테스트, 퀴즈, MBTI, 성격테스트, 심리분석, 퀴즈오아시스',
    'en': 'psychological test, quiz, MBTI, personality test, psychology, QuizOasis',
    'ja': '心理テスト, クイズ, MBTI, 性格テスト, 心理分析, QuizOasis',
    'zh-CN': '心理测试, 测验, MBTI, 性格测试, 心理分析, QuizOasis',
    'zh-TW': '心理測試, 測驗, MBTI, 性格測試, 心理分析, QuizOasis',
    'id': 'tes psikologi, kuis, MBTI, tes kepribadian, analisis psikologi, QuizOasis',
    'vi': 'kiểm tra tâm lý, câu đố, MBTI, kiểm tra tính cách, phân tích tâm lý, QuizOasis',
  };

  return {
    title: titles[locale] || titles['ko'],
    description: descriptions[locale] || descriptions['ko'],
    keywords: keywords[locale] || keywords['ko'],
  };
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const meta = getLocalizedMetadata(locale);
  const baseUrl = 'https://myquizoasis.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'ko': `${baseUrl}/ko`,
        'en': `${baseUrl}/en`,
        'ja': `${baseUrl}/ja`,
        'zh-CN': `${baseUrl}/zh-CN`,
        'zh-TW': `${baseUrl}/zh-TW`,
        'id': `${baseUrl}/id`,
        'vi': `${baseUrl}/vi`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${baseUrl}/${locale}`,
      siteName: 'QuizOasis',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 지원하지 않는 언어면 404
  if (!locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="min-h-screen main-container">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}


