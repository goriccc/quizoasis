import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import { getTestBySlug } from '@/lib/supabase';
import { getTestData } from '@/lib/mbtiData';
import { humorCodeQuestions, humorCodeResults } from '@/lib/humorCodeData';
import { trustQuestions, trustResults } from '@/lib/trustData';
import { empathyQuestions, empathyResults } from '@/lib/empathyData';
import { honestyQuestions, honestyResults } from '@/lib/honestyData';
import { careerQuestions, careerResults } from '@/lib/careerData';
import { jobStrengthQuestions, jobStrengthResults } from '@/lib/jobStrengthData';
import { workValuesQuestions, workValuesResults } from '@/lib/workValuesData';
import { entrepreneurSpiritQuestions, entrepreneurSpiritResults } from '@/lib/entrepreneurSpiritData';
import { workLifeBalanceQuestions, workLifeBalanceResults } from '@/lib/workLifeBalanceData';
import { teamPlayerQuestions, teamPlayerResults } from '@/lib/teamPlayerData';
import { challengePotentialQuestions, challengePotentialResults } from '@/lib/challengePotentialData';
import { stressReliefQuestions, stressReliefResults } from '@/lib/stressReliefData';
import { investmentStyleQuestions, investmentStyleResults } from '@/lib/investmentStyleData';
import { timeEfficiencyQuestions, timeEfficiencyResults } from '@/lib/timeEfficiencyData';
import { brainQuestions, brainResults } from '@/lib/brainData';
import { leadershipQuestions, leadershipResults } from '@/lib/leadershipData';
import { obsessionQuestions, obsessionResults } from '@/lib/obsessionData';
import { optimismQuestions, optimismResults } from '@/lib/optimismData';
import { lifePrioritiesQuestions, lifePrioritiesResults } from '@/lib/lifePrioritiesData';
import { adventurerQuestions, adventurerResults } from '@/lib/adventurerData';
import { communicationStyleQuestions, communicationStyleResults } from '@/lib/communicationStyleData';
import { honestyVsRestraintQuestions, honestyVsRestraintResults } from '@/lib/honestyVsRestraintData';
import { independenceQuestions, independenceResults } from '@/lib/independenceData';
import { decisionSpeedQuestions, decisionSpeedResults } from '@/lib/decisionSpeedData';
import { competitivenessQuestions, competitivenessResults } from '@/lib/competitivenessData';
import { plannerVsSpontaneousQuestions, plannerVsSpontaneousResults } from '@/lib/plannerVsSpontaneousData';
import { datingStyleQuestions, datingStyleResults } from '@/lib/datingStyleData';
import { reactionStyleQuestions, reactionStyleResults } from '@/lib/reactionStyleData';
import { jealousyQuestions, jealousyResults } from '@/lib/jealousyData';
import { quickDecisionQuestions, quickDecisionResults } from '@/lib/quickDecisionData';
import { concentrationQuestions, concentrationResults } from '@/lib/concentrationData';
import { mbtiAccurateQuestions, mbtiAccurateResults } from '@/lib/mbtiAccurateData';
import { brainQuizQuestions, brainQuizResults } from '@/lib/brainQuizData';
import { realIQQuestions, realIQResults } from '@/lib/realIQData';
import { mensaExtremeQuestions, mensaExtremeResults } from '@/lib/mensaExtremeData';
import { extremeQuizQuestions, extremeQuizResults } from '@/lib/extremeQuizData';
import { faceReadingResults } from '@/lib/faceReadingData';
import { getThumbnailUrl } from '@/lib/utils';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';

// 동적 import로 JavaScript 번들 크기 최적화 (모바일 성능 향상)
const MBTITestClient = dynamic(() => import('@/components/MBTITestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const StressTestClient = dynamic(() => import('@/components/StressTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DatingTestClient = dynamic(() => import('@/components/DatingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SignalTestClient = dynamic(() => import('@/components/SignalTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const AttachmentTestClient = dynamic(() => import('@/components/AttachmentTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ReactionStyleTestClient = dynamic(() => import('@/components/ReactionStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const JealousyTestClient = dynamic(() => import('@/components/JealousyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const QuickDecisionTestClient = dynamic(() => import('@/components/QuickDecisionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FriendTestClient = dynamic(() => import('@/components/FriendTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConflictTestClient = dynamic(() => import('@/components/ConflictTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EmpathyTestClient = dynamic(() => import('@/components/EmpathyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LoveFlavorTestClient = dynamic(() => import('@/components/LoveFlavorTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const IdealTypeTestClient = dynamic(() => import('@/components/IdealTypeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CrushTestClient = dynamic(() => import('@/components/CrushTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FlirtingTestClient = dynamic(() => import('@/components/FlirtingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SpouseTestClient = dynamic(() => import('@/components/SpouseTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LoveObstaclesTestClient = dynamic(() => import('@/components/LoveObstaclesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HumorCodeTestClient = dynamic(() => import('@/components/HumorCodeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TrustTestClient = dynamic(() => import('@/components/TrustTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LifePrioritiesTestClient = dynamic(() => import('@/components/LifePrioritiesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ApologyTestClient = dynamic(() => import('@/components/ApologyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BreakupTestClient = dynamic(() => import('@/components/BreakupTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FirstImpressionTestClient = dynamic(() => import('@/components/FirstImpressionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HonestyTestClient = dynamic(() => import('@/components/HonestyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CareerTestClient = dynamic(() => import('@/components/CareerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const JobStrengthTestClient = dynamic(() => import('@/components/JobStrengthTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const WorkValuesTestClient = dynamic(() => import('@/components/WorkValuesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EntrepreneurSpiritTestClient = dynamic(() => import('@/components/EntrepreneurSpiritTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const WorkLifeBalanceTestClient = dynamic(() => import('@/components/WorkLifeBalanceTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LeadershipTestClient = dynamic(() => import('@/components/LeadershipTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ObsessionTestClient = dynamic(() => import('@/components/ObsessionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TeamPlayerTestClient = dynamic(() => import('@/components/TeamPlayerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ChallengePotentialTestClient = dynamic(() => import('@/components/ChallengePotentialTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const StressReliefTestClient = dynamic(() => import('@/components/StressReliefTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const InvestmentStyleTestClient = dynamic(() => import('@/components/InvestmentStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TimeEfficiencyTestClient = dynamic(() => import('@/components/TimeEfficiencyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BrainTestClient = dynamic(() => import('@/components/BrainTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const OptimismTestClient = dynamic(() => import('@/components/OptimismTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const AdventurerTestClient = dynamic(() => import('@/components/AdventurerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CommunicationStyleTestClient = dynamic(() => import('@/components/CommunicationStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HonestyVsRestraintTestClient = dynamic(() => import('@/components/HonestyVsRestraintTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const IndependenceTestClient = dynamic(() => import('@/components/IndependenceTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DecisionSpeedTestClient = dynamic(() => import('@/components/DecisionSpeedTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CompetitivenessTestClient = dynamic(() => import('@/components/CompetitivenessTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const PlannerVsSpontaneousTestClient = dynamic(() => import('@/components/PlannerVsSpontaneousTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DatingStyleTestClient = dynamic(() => import('@/components/DatingStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConcentrationTestClient = dynamic(() => import('@/components/ConcentrationTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const MBTIAccurateTestClient = dynamic(() => import('@/components/MBTIAccurateTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BrainQuizTestClient = dynamic(() => import('@/components/BrainQuizTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const RealIQTestClient = dynamic(() => import('@/components/RealIQTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const MensaExtremeTestClient = dynamic(() => import('@/components/MensaExtremeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const ExtremeQuizTestClient = dynamic(() => import('@/components/ExtremeQuizTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const FaceReadingTestClient = dynamic(() => import('@/components/FaceReadingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const FaceLoveFortuneTestClient = dynamic(() => import('@/components/FaceLoveFortuneTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FaceFortuneTestClient = dynamic(() => import('@/components/FaceFortuneTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FaceReincarnationTestClient = dynamic(() => import('@/components/FaceReincarnationTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

// Dynamic rendering: 항상 최신 데이터 (play_count 실시간 업데이트)
export const revalidate = 0;

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

  // 썸네일을 절대 URL로 변환 (공유 앱용 원본 URL 사용)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const thumbnailUrl = `${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${test.thumbnail}?v=${Date.now()}`;
  

  const baseUrl = 'https://myquizoasis.com';
  const canonicalUrl = `${baseUrl}/${locale}/test/${slug}`;

  return {
    title: title,
    description: description,
    keywords: Array.isArray(tags) ? tags.join(', ') : '',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ko': `${baseUrl}/ko/test/${slug}`,
        'en': `${baseUrl}/en/test/${slug}`,
        'ja': `${baseUrl}/ja/test/${slug}`,
        'zh-CN': `${baseUrl}/zh-CN/test/${slug}`,
        'zh-TW': `${baseUrl}/zh-TW/test/${slug}`,
        'id': `${baseUrl}/id/test/${slug}`,
        'vi': `${baseUrl}/vi/test/${slug}`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        }
      ],
      type: 'website',
      url: canonicalUrl,
      siteName: 'QuizOasis',
      locale: locale,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [thumbnailUrl],
      site: '@QuizOasis',
      creator: '@QuizOasis',
    },
    other: {
      'og:image': thumbnailUrl,
      'og:image:url': thumbnailUrl,
      'og:image:secure_url': thumbnailUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/jpeg',
      'og:image:alt': title,
      'twitter:image:src': thumbnailUrl,
      'twitter:image:alt': title,
      'og:site_name': 'QuizOasis',
      'og:url': canonicalUrl,
      'og:type': 'website',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'QuizOasis',
      'application-name': 'QuizOasis',
      'msapplication-TileColor': '#6366f1',
      'msapplication-TileImage': `${baseUrl}/favicon-192x192.png`,
      'theme-color': '#6366f1',
    },
  };
}

export default async function TestPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  // Force dynamic rendering - 항상 최신 데이터
  headers();

  // 애착 스타일 테스트의 경우 Supabase에서 시도
  if (slug === 'attachment-style-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'attachment-style-test',
      title: {
        ko: '어떤 애착 스타일을 가지고 있나요?',
        en: 'What attachment style do you have?',
        ja: 'どの愛着スタイルを持っていますか？',
        'zh-CN': '你有什么依恋风格？',
        'zh-TW': '你有什麼依戀風格？',
        vi: 'Bạn có phong cách gắn bó nào?',
        id: 'Gaya kelekatan apa yang Anda miliki?'
      },
      description: {
        ko: '당신의 사랑 방식, 어린 시절부터 결정됐다? 심리학의 애착 이론으로 나의 애착 스타일을 알아보세요.',
        en: 'Your way of loving, determined from childhood? Discover your attachment style through psychological attachment theory.',
        ja: 'あなたの愛し方、幼い頃から決まっている？心理学の愛着理論で私の愛着スタイルを調べてみましょう。',
        'zh-CN': '你的爱情方式，从童年就决定了？通过心理学的依恋理论了解你的依恋风格。',
        'zh-TW': '你的愛情方式，從童年就決定了？通過心理學的依戀理論了解你的依戀風格。',
        vi: 'Cách yêu của bạn, được quyết định từ thời thơ ấu? Khám phá phong cách gắn bó của bạn thông qua lý thuyết gắn bó tâm lý học.',
        id: 'Cara mencintai Anda, ditentukan sejak masa kanak-kanak? Temukan gaya kelekatan Anda melalui teori kelekatan psikologi.'
      },
      thumbnail: 'test_028_attachment_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['심리', '관계'],
        en: ['Psychology', 'Relationships'],
        ja: ['心理学', '関계'],
        'zh-CN': ['心理学', '关系'],
        'zh-TW': ['心理學', '關係'],
        vi: ['Tâm lý học', 'Mối quan hệ'],
        id: ['Psikologi', 'Hubungan']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }
  }

  // 친구 테스트의 경우 Supabase에서 시도
  if (slug === 'friend-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'friend-test',
      title: {
        ko: '친구들에게 나는 어떤 친구일까?',
        en: 'What kind of friend am I to my friends?',
        ja: '友達にとって私はどんな友達？',
        'zh-CN': '在朋友眼中我是什么样的朋友？',
        'zh-TW': '在朋友眼中我是什麼樣的朋友？',
        vi: 'Tôi là kiểu bạn bè gì đối với bạn bè?',
        id: 'Saya teman seperti apa bagi teman-teman saya?'
      },
      description: {
        ko: '내가 생각하는 나 vs 친구들이 보는 나. 친구가 힘들 때, 나는 어떤 역할을 할까? 친구들은 나를 어떻게 기억할까?',
        en: 'Me as I think vs me as my friends see me. What role do I play when friends are having a hard time? How do friends remember me?',
        ja: '私が思う私 vs 友達が見る私。友達が困っている時、私はどんな役割をする？友達は私をどう覚えている？',
        'zh-CN': '我想象中的我 vs 朋友眼中的我。朋友困难时，我扮演什么角色？朋友怎么记住我？',
        'zh-TW': '我想像中的我 vs 朋友眼中的我。朋友困難時，我扮演什麼角色？朋友怎麼記住我？',
        vi: 'Tôi như tôi nghĩ vs tôi như bạn bè nhìn thấy. Khi bạn bè gặp khó khăn, tôi đóng vai trò gì? Bạn bè nhớ tôi như thế nào?',
        id: 'Saya seperti yang saya pikir vs saya seperti yang dilihat teman-teman. Peran apa yang saya mainkan ketika teman-teman mengalami kesulitan? Bagaimana teman-teman mengingat saya?'
      },
      thumbnail: 'test_029_what_kind_of_friend.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['우정', '관계', '성격'],
        en: ['Friendship', 'Relationships', 'Personality'],
        ja: ['友情', '関係', '性格'],
        'zh-CN': ['友谊', '关系', '性格'],
        'zh-TW': ['友誼', '關係', '性格'],
        vi: ['Tình bạn', 'Mối quan hệ', 'Tính cách'],
        id: ['Persahabatan', 'Hubungan', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }
  }


  // 시간 효율성 테스트의 경우 Supabase에서 시도
  if (slug === 'time-efficiency-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'time-efficiency-test',
      title: {
        ko: '당신은 시간을 얼마나 효율적으로 활용하나요?',
        en: 'How efficiently do you use your time?',
        ja: 'あなたは時間をどのくらい効率的に活用していますか？',
        'zh-CN': '你如何高效地利用时间？',
        'zh-TW': '你如何高效地利用時間？',
        vi: 'Bạn sử dụng thời gian hiệu quả đến mức nào?',
        id: 'Seberapa efisien Anda menggunakan waktu?'
      },
      description: {
        ko: '하루 24시간, 당신은 얼마나 효율적으로 사용하고 있나요? 누구에게나 공평하게 주어지는 24시간, 어떤 사람은 모든 것을 해내고, 어떤 사람은 시간이 부족하다고 말합니다.',
        en: '24 hours a day, how efficiently are you using them? 24 hours given equally to everyone, some people accomplish everything, some people say they don\'t have enough time.',
        ja: '一日24時間、あなたはどのくらい効率的に使っていますか？誰にでも平等に与えられる24時間、ある人はすべてを成し遂げ、ある人は時間が不足していると言います。',
        'zh-CN': '一天24小时，你如何高效地使用它们？每个人都被平等地给予24小时，有些人完成所有事情，有些人说时间不够。',
        'zh-TW': '一天24小時，你如何高效地使用它們？每個人都被平等地給予24小時，有些人完成所有事情，有些人說時間不夠。',
        vi: '24 giờ một ngày, bạn sử dụng chúng hiệu quả đến mức nào? 24 giờ được trao cho mọi người một cách bình đẳng, một số người hoàn thành mọi thứ, một số người nói rằng họ không có đủ thời gian.',
        id: '24 jam sehari, seberapa efisien Anda menggunakannya? 24 jam yang diberikan secara adil kepada semua orang, beberapa orang menyelesaikan segalanya, beberapa orang mengatakan mereka tidak punya cukup waktu.'
      },
      thumbnail: 'test_079_time_efficiency.jpg',
      type: 'career',
      play_count: 0,
      tags: {
        ko: ['성향'],
        en: ['Tendency'],
        ja: ['傾向'],
        'zh-CN': ['倾向'],
        'zh-TW': ['傾向'],
        vi: ['Xu hướng'],
        id: ['Kecenderungan']
      }
    };

    const testData = {
      questions: timeEfficiencyQuestions,
      results: timeEfficiencyResults
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const thumbnailUrl = `${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${test.thumbnail}`;
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      image: thumbnailUrl,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'QuizOasis',
        url: 'https://quizoasis-coral.vercel.app',
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quizoasis-coral.vercel.app/logo.png',
        },
      },
      inLanguage: locale,
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/PlayAction',
        userInteractionCount: test.play_count || 0,
      },
      numberOfQuestions: testData.questions.length,
      educationalLevel: 'General',
      typicalAgeRange: '13-99',
      keywords: typeof test.tags === 'object' && !Array.isArray(test.tags)
        ? (test.tags[locale] || test.tags.ko || []).join(', ')
        : Array.isArray(test.tags) ? test.tags.join(', ') : '',
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: test.category || 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <TimeEfficiencyTestClient
          locale={locale as Locale}
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
      </>
    );
  }

  if (slug === 'apology-style-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'apology-style-test',
      title: {
        ko: '당신은 어떤 방식으로 사과하는 사람인가요?',
        en: 'What is your way of apologizing?',
        ja: 'あなたはどのように謝る人ですか？',
        'zh-CN': '你是如何道歉的人？',
        'zh-TW': '你是如何道歉的人？',
        vi: 'Bạn là người xin lỗi như thế nào?',
        id: 'Bagaimana cara Anda meminta maaf?'
      },
      description: {
        ko: '미안해? 내 잘못이 아닌데? 아니면 행동으로 보여줄게?\n사과하는 방식은 사람마다 다릅니다.\n미안해를 즉시 말하는 사람, 하지만 그건...이라며 변명하는 사람, 말없이 행동으로 보여주는 사람, 시간이 필요한 사람.\n당신은 어떤 방식으로 사과하나요?\n사과 스타일은 관계의 질을 결정합니다. 잘못된 사과는 관계를 더 악화시키고, 진심 어린 사과는 관계를 더 돈독하게 만듭니다.\n소요 시간 단 3분! 솔직하게 답해주세요 💬',
        en: 'Sorry? It\'s not my fault? Or show it with actions?\nThe way of apologizing is different for each person.\nPeople who immediately say sorry, people who make excuses saying \"but that\'s...\", people who show with actions without words, people who need time.\nWhat is your way of apologizing?\nApology style determines the quality of relationships. Wrong apologies worsen relationships, while sincere apologies strengthen them.\nTakes only 3 minutes! Please answer honestly 💬',
        ja: 'ごめん？私のせいじゃない？それとも行動で示す？\n謝り方は人それぞれ違います。\nすぐに「ごめん」と言う人、「でもそれは...」と弁解する人、言葉なしで行動で示す人、時間が必要な人。\nあなたはどのように謝りますか？\n謝り方のスタイルは関係の質を決定します。間違った謝りは関係を悪化させ、心からの謝りは関係をより強固にします。\n所要時間わずか3分！正直に答えてください 💬',
        'zh-CN': '对不起？不是我的错？还是用行动表示？\n道歉方式因人而异。\n立即说对不起的人，说「但是那是...」辩解的人，用行动不说话的人，需要时间的人。\n你是如何道歉的？\n道歉风格决定关系质量。错误的道歉会恶化关系，真诚的道歉会加强关系。\n只需3分钟！请诚实回答 💬',
        'zh-TW': '對不起？不是我的錯？還是用行動表示？\n道歉方式因人而異。\n立即說對不起的人，說「但是那是...」辯解的人，用行動不說話的人，需要時間的人。\n你是如何道歉的？\n道歉風格決定關係質量。錯誤的道歉會惡化關係，真誠的道歉會加強關係。\n只需3分鐘！請誠實回答 💬',
        vi: 'Xin lỗi? Không phải lỗi của tôi? Hay thể hiện bằng hành động?\nCách xin lỗi của mỗi người khác nhau.\nNgười nói xin lỗi ngay lập tức, người biện hộ nói \"nhưng đó là...\", người thể hiện bằng hành động không lời, người cần thời gian.\nBạn xin lỗi như thế nào?\nPhong cách xin lỗi quyết định chất lượng mối quan hệ. Lời xin lỗi sai làm xấu mối quan hệ, lời xin lỗi chân thành làm mối quan hệ bền chặt hơn.\nChỉ mất 3 phút! Hãy trả lời thành thật 💬',
        id: 'Maaf? Bukan salah saya? Atau tunjukkan dengan tindakan?\nCara meminta maaf berbeda untuk setiap orang.\nOrang yang langsung bilang maaf, orang yang beralasan bilang \"tapi itu...\", orang yang tunjukkan dengan tindakan tanpa kata, orang yang butuh waktu.\nBagaimana cara Anda meminta maaf?\nGaya meminta maaf menentukan kualitas hubungan. Permintaan maaf yang salah memperburuk hubungan, sementara permintaan maaf yang tulus memperkuat hubungan.\nHanya butuh 3 menit! Silakan jawab dengan jujur 💬'
      },
      thumbnail: 'test_039_apology_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['소통', '관계', '성격'],
        en: ['Communication', 'Relationships', 'Personality'],
        ja: ['コミュニケーション', '関係', '性格'],
        'zh-CN': ['沟通', '关系', '性格'],
        'zh-TW': ['溝通', '關係', '性格'],
        vi: ['Giao tiếp', 'Mối quan hệ', 'Tính cách'],
        id: ['Komunikasi', 'Hubungan', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '사과 스타일 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 사과 스타일 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ApologyTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
        />
      </>
    );
  }

  if (slug === 'breakup-coping-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'breakup-coping-test',
      title: {
        ko: '당신은 이별에 어떻게 대처하나요?',
        en: 'How do you cope with breakups?',
        ja: '別れにどう対処しますか？',
        'zh-CN': '你如何应对分手？',
        'zh-TW': '你如何應對分手？',
        vi: 'Bạn đối phó với chia tay như thế nào?',
        id: 'Bagaimana Anda menghadapi putus cinta?'
      },
      description: {
        ko: '이별 후, 당신의 진짜 회복 스타일은?\n어떤 사람은 금방 털고 일어나고,\n어떤 사람은 오랜 시간 아파합니다.\n어떤 사람은 바쁘게 움직이며 잊으려 하고,\n어떤 사람은 이별을 성장의 기회로 삼습니다.\n당신은 이별 후 어떻게 대처하나요?\n12개 질문으로 당신의 이별 대처 스타일을 확인하고,\n더 건강한 회복을 위한 조언을 받아보세요!\n소요 시간 단 3분! 혼자서도, 친구와도 함께 해보세요 💙',
        en: 'What is your real recovery style after a breakup?\nSome people bounce back quickly,\nSome people hurt for a long time.\nSome people stay busy to forget,\nSome people see breakups as growth opportunities.\nHow do you cope after a breakup?\nCheck your breakup coping style with 12 questions,\nand get advice for healthier recovery!\nTakes only 3 minutes! Try alone or with friends 💙',
        ja: '別れ後、あなたの本当の回復スタイルは？\nすぐに立ち直る人もいれば、\n長い間傷つく人もいます。\n忘れようと忙しく動く人もいれば、\n別れを成長の機会とする人もいます。\n別れの後、どう対処しますか？\n12の質問であなたの別れ対処スタイルを確認し、\nより健康的な回復のためのアドバイスを受けましょう！\n所要時間わずか3分！一人でも、友達と一緒でも楽しめます 💙',
        'zh-CN': '分手后，你真正的恢复风格是什么？\n有人很快振作，\n有人痛苦很久。\n有人忙碌忘记，\n有人把分手当作成长机会。\n分手后你如何应对？\n用12个问题检查你的分手应对风格，\n获得更健康恢复的建议！\n只需3分钟！独自或与朋友一起尝试 💙',
        'zh-TW': '分手後，你真正的恢復風格是什麼？\n有人很快振作，\n有人痛苦很久。\n有人忙碌忘記，\n有人把分手當作成長機會。\n分手後你如何應對？\n用12個問題檢查你的分手應對風格，\n獲得更健康恢復的建議！\n只需3分鐘！獨自或與朋友一起嘗試 💙',
        vi: 'Sau chia tay, phong cách phục hồi thực sự của bạn là gì?\nCó người nhanh chóng vượt qua,\nCó người đau khổ lâu dài.\nCó người bận rộn để quên,\nCó người coi chia tay là cơ hội phát triển.\nBạn đối phó như thế nào sau chia tay?\nKiểm tra phong cách đối phó với chia tay của bạn bằng 12 câu hỏi,\nvà nhận lời khuyên để phục hồi lành mạnh hơn!\nChỉ mất 3 phút! Thử một mình hoặc với bạn bè 💙',
        id: 'Setelah putus cinta, apa gaya pemulihan sejati Anda?\nAda yang cepat bangkit,\nAda yang sakit lama.\nAda yang sibuk untuk melupakan,\nAda yang melihat putus cinta sebagai kesempatan tumbuh.\nBagaimana Anda menghadapi setelah putus cinta?\nPeriksa gaya menghadapi putus cinta Anda dengan 12 pertanyaan,\ndan dapatkan saran untuk pemulihan yang lebih sehat!\nHanya butuh 3 menit! Coba sendiri atau dengan teman 💙'
      },
      thumbnail: 'test_040_breakup_coping.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['연애', '감정', '회복'],
        en: ['Love', 'Emotion', 'Recovery'],
        ja: ['恋愛', '感情', '回復'],
        'zh-CN': ['恋爱', '情感', '恢复'],
        'zh-TW': ['戀愛', '情感', '恢復'],
        vi: ['Tình yêu', 'Cảm xúc', 'Phục hồi'],
        id: ['Cinta', 'Emosi', 'Pemulihan']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      numberOfQuestions: testData.questions.length,
      question: testData.questions.map((q: any, index: number) => ({
        '@type': 'Question',
        text: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: '이별 대처 스타일 분석'
        }
      })),
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <BreakupTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
        />
      </>
    );
  }

  if (slug === 'jealousy-level-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'jealousy-level-test',
      title: {
        ko: '당신은 얼마나 질투심이 많은가요?',
        en: 'How jealous are you?',
        ja: 'あなたはどのくらい嫉妬深いですか？',
        'zh-CN': '你有多嫉妒？',
        'zh-TW': '你有多嫉妒？',
        vi: 'Bạn ghen tuông đến mức nào?',
        id: 'Seberapa cemburu Anda?'
      },
      description: {
        ko: '쿨하다 vs 집착한다? 당신의 질투 지수는?\n연인이 이성 친구와 연락하면? 「괜찮아」 쿨하게 넘기나요? 「누구야?」 물어보나요?\nSNS에 이성이 좋아요 누르면? 신경 안 쓰나요? 은근히 신경 쓰이나요?\n질투는 사랑의 표현? 아니면 불신의 신호?\n적당한 질투는 애교지만, 과한 질투는 관계를 망칩니다.\n친구, 연인과 비교하면 더 재미있어요 😂\n소요 시간 단 3분! 솔직하게 답해주세요 💚',
        en: 'Cool vs Obsessed? What\'s your jealousy level?\nWhen your partner contacts opposite-sex friends? Do you say 「It\'s okay」 coolly? Or ask 「Who is it?」\nWhen opposite-sex people like your partner\'s SNS? Do you not care? Or do you secretly care?\nIs jealousy an expression of love? Or a signal of distrust?\nModerate jealousy is cute, but excessive jealousy ruins relationships.\nIt\'s more fun to compare with friends and partners 😂\nTakes only 3 minutes! Please answer honestly 💚',
        ja: 'クール vs 執着？あなたの嫉妬レベルは？\n恋人が異性の友達と連絡すると？「大丈夫」とクールに流す？それとも「誰？」と聞く？\nSNSで異性がいいねを押すと？気にしない？それとも密かに気になる？\n嫉妬は愛の表現？それとも不信の信号？\n適度な嫉妬は可愛いけど、過度な嫉妬は関係を壊します。\n友達、恋人と比較するともっと面白いです 😂\n所要時間わずか3分！正直に答えてください 💚',
        'zh-CN': '酷 vs 执着？你的嫉妒水平是什么？\n当你的伴侣联系异性朋友时？你会说「没关系」酷酷地过去？还是问「是谁？」\n当异性给你的伴侣的SNS点赞时？你不在乎？还是暗中在意？\n嫉妒是爱的表达？还是不信任的信号？\n适度的嫉妒是可爱的，但过度的嫉妒会破坏关系。\n和朋友、伴侣比较会更有趣 😂\n只需3分钟！请诚实回答 💚',
        'zh-TW': '酷 vs 執著？你的嫉妒水平是什麼？\n當你的伴侶聯繫異性朋友時？你會說「沒關係」酷酷地過去？還是問「是誰？」\n當異性給你的伴侶的SNS點讚時？你不在乎？還是暗中在意？\n嫉妒是愛的表達？還是不信任的信號？\n適度的嫉妒是可愛的，但過度的嫉妒會破壞關係。\n和朋友、伴侶比較會更有趣 😂\n只需3分鐘！請誠實回答 💚',
        vi: 'Mát mẻ vs Ám ảnh? Mức độ ghen tuông của bạn là gì?\nKhi người yêu liên lạc với bạn khác giới? Bạn nói 「Không sao」 một cách mát mẻ? Hay hỏi 「Ai vậy?」\nKhi người khác giới thích SNS của người yêu? Bạn không quan tâm? Hay bí mật quan tâm?\nGhen tuông là biểu hiện của tình yêu? Hay tín hiệu của sự không tin tưởng?\nGhen tuông vừa phải thì dễ thương, nhưng ghen tuông quá toute sẽ phá hủy mối quan hệ.\nSo sánh với bạn bè, người yêu sẽ thú vị hơn 😂\nChỉ mất 3 phút! Hãy trả lời thành thật 💚',
        id: 'Keren vs Obsesi? Berapa level cemburu Anda?\nKetika pasangan Anda menghubungi teman lawan jenis? Apakah Anda bilang 「Tidak apa-apa」 dengan keren? Atau bertanya 「Siapa itu?」\nKetika orang lawan jenis menyukai SNS pasangan Anda? Apakah Anda tidak peduli? Atau diam-diam peduli?\nCemburu adalah ekspresi cinta? Atau sinyal ketidakpercayaan?\nCemburu yang wajar itu lucu, tapi cemburu berlebihan merusak hubungan.\nLebih seru kalau dibandingkan dengan teman dan pasangan 😂\nHanya butuh 3 menit! Silakan jawab dengan jujur 💚'
      },
      thumbnail: 'test_038_jealousy_level.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['감정', '연애', '성격'],
        en: ['Emotion', 'Love', 'Personality'],
        ja: ['感情', '恋愛', '性格'],
        'zh-CN': ['情感', '恋爱', '性格'],
        'zh-TW': ['情感', '戀愛', '性格'],
        vi: ['Cảm xúc', 'Tình yêu', 'Tính cách'],
        id: ['Emosi', 'Cinta', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '질투심 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 질투심 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <JealousyTestClient
          locale={locale as Locale}
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
      </>
    );
  }

  if (slug === 'first-impression-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'first-impression-test',
      title: {
        ko: '당신의 첫인상은?',
        en: 'What is your first impression?',
        ja: 'あなたの第一印象は？',
        'zh-CN': '你的第一印象是什么？',
        'zh-TW': '你的第一印象是什麼？',
        vi: 'Ấn tượng đầu tiên của bạn là gì?',
        id: 'Kesan pertama Anda adalah?'
      },
      description: {
        ko: '사람들이 나를 처음 봤을 때 어떻게 느낄까?\n어떤 사람은 만나자마자 친근하게 느껴지고,\n어떤 사람은 첫 만남에 차갑고 도도해 보입니다.\n어떤 사람은 에너지가 넘치고,\n어떤 사람은 조용하지만 신비로워 보입니다.\n당신은 다른 사람들에게 어떤 첫인상을 주나요?\n12개 질문으로 당신의 진짜 첫인상을 확인하고,\n더 나은 인간관계를 위한 팁을 받아보세요!\n소요 시간 단 3분! 친구들과 비교해보는 재미도 쏠쏠 😊',
        en: 'How do people feel when they first see me?\nSome people feel friendly right away,\nSome people seem cold and arrogant at first meeting.\nSome people are full of energy,\nSome people are quiet but mysterious.\nWhat first impression do you give to others?\nCheck your real first impression with 12 questions,\nand get tips for better relationships!\nTakes only 3 minutes! It\'s also fun to compare with friends 😊',
        ja: '人々が私を初めて見た時、どのように感じるでしょうか？\nある人は会った瞬間に親しみやすく感じられ、\nある人は初対面で冷たく高慢に見えます。\nある人はエネルギーに溢れ、\nある人は静かですが神秘的です。\nあなたは他の人にどのような第一印象を与えますか？\n12の質問であなたの本当の第一印象を確認し、\nより良い人間関係のためのヒントを受けましょう！\n所要時間わずか3分！友達と比較するのも楽しいです 😊',
        'zh-CN': '人们第一次看到我时会有什么感觉？\n有些人一见面就感到亲切，\n有些人在初次见面时显得冷漠高傲。\n有些人充满活力，\n有些人安静但神秘。\n你给别人什么样的第一印象？\n用12个问题检查你的真实第一印象，\n获得更好人际关系的建议！\n只需3分钟！和朋友比较也很有趣 😊',
        'zh-TW': '人們第一次看到我時會有什麼感覺？\n有些人一見面就感到親切，\n有些人在初次見面時顯得冷漠高傲。\n有些人充滿活力，\n有些人安靜但神秘。\n你給別人什麼樣的第一印象？\n用12個問題檢查你的真實第一印象，\n獲得更好人際關係的建議！\n只需3分鐘！和朋友比較也很有趣 😊',
        vi: 'Mọi người cảm thấy như thế nào khi lần đầu nhìn thấy tôi?\nMột số người cảm thấy thân thiện ngay lập tức,\nMột số người có vẻ lạnh lùng và kiêu ngạo trong lần gặp đầu tiên.\nMột số người tràn đầy năng lượng,\nMột số người im lặng nhưng bí ẩn.\nBạn tạo ấn tượng đầu tiên như thế nào với người khác?\nKiểm tra ấn tượng đầu tiên thực sự của bạn với 12 câu hỏi,\nvà nhận lời khuyên cho mối quan hệ tốt hơn!\nChỉ mất 3 phút! So sánh với bạn bè cũng rất thú vị 😊',
        id: 'Bagaimana perasaan orang ketika pertama kali melihat saya?\nBeberapa orang merasa ramah langsung,\nBeberapa orang terlihat dingin dan sombong saat pertama bertemu.\nBeberapa orang penuh energi,\nBeberapa orang pendiam tapi misterius.\nKesan pertama seperti apa yang Anda berikan kepada orang lain?\nPeriksa kesan pertama asli Anda dengan 12 pertanyaan,\ndan dapatkan tips untuk hubungan yang lebih baik!\nHanya butuh 3 menit! Membandingkan dengan teman juga menyenangkan 😊'
      },
      thumbnail: 'test_041_first_impression.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['관계', '인상', '사회성'],
        en: ['Relationships', 'Impression', 'Social'],
        ja: ['関係', '印象', '社会性'],
        'zh-CN': ['关系', '印象', '社交'],
        'zh-TW': ['關係', '印象', '社交'],
        vi: ['Mối quan hệ', 'Ấn tượng', 'Xã hội'],
        id: ['Hubungan', 'Kesan', 'Sosial']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '첫인상 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 첫인상 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <FirstImpressionTestClient
          locale={locale as Locale}
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
      </>
    );
  }

  // 워라밸 테스트의 경우 Supabase에서 시도
  if (slug === 'work-life-balance-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'work-life-balance-test',
      title: {
        ko: '당신의 이상적인 워라밸은?',
        en: 'What is your ideal work-life balance?',
        ja: 'あなたの理想的なワークライフバランスは？',
        'zh-CN': '你理想的工作生活平衡是什么？',
        'zh-TW': '你理想的工作生活平衡是什麼？',
        vi: 'Cân bằng công việc-cuộc sống lý tưởng của bạn là gì?',
        id: 'Apa keseimbangan kerja-hidup ideal Anda?'
      },
      description: {
        ko: '일이 우선? 삶이 우선? 당신의 진짜 가치관을 발견하세요!',
        en: 'Work first? Life first? Discover your true values!',
        ja: '仕事優先？人生優先？あなたの本当の価値観を発見してください！',
        'zh-CN': '工作优先？生活优先？发现你真正的价值观！',
        'zh-TW': '工作優先？生活優先？發現你真正的價值觀！',
        vi: 'Công việc trước? Cuộc sống trước? Khám phá giá trị thực sự của bạn!',
        id: 'Kerja dulu? Hidup dulu? Temukan nilai-nilai sejati Anda!'
      },
      thumbnail: 'test_051_work_life_balance.jpg',
      play_count: 0
    };

    return (
      <>
        <WorkLifeBalanceTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={workLifeBalanceQuestions}
          results={workLifeBalanceResults}
          questionCount={workLifeBalanceQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 리더십 스타일 테스트의 경우 Supabase에서 시도
  if (slug === 'leadership-style-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'leadership-style-test',
      title: {
        ko: '당신은 어떤 리더인가요?',
        en: 'What kind of leader are you?',
        ja: 'あなたはどんなリーダーですか？',
        'zh-CN': '你是什么样的领导者？',
        'zh-TW': '你是什麼樣的領導者？',
        vi: 'Bạn là loại lãnh đạo nào?',
        id: 'Jenis pemimpin apa Anda?'
      },
      description: {
        ko: '리더십 심화 진단! 당신만의 리더십 스타일은?',
        en: 'In-depth leadership diagnosis! What is your leadership style?',
        ja: 'リーダーシップ深層診断！あなただけのリーダーシップスタイルは？',
        'zh-CN': '深度领导力诊断！你的领导风格是什么？',
        'zh-TW': '深度領導力診斷！你的領導風格是什麼？',
        vi: 'Chẩn đoán lãnh đạo sâu sắc! Phong cách lãnh đạo của bạn là gì?',
        id: 'Diagnosis kepemimpinan mendalam! Apa gaya kepemimpinan Anda?'
      },
      thumbnail: 'test_202_leadership_style.jpg',
      play_count: 0
    };

    return (
      <>
        <LeadershipTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={leadershipQuestions}
          results={leadershipResults}
          questionCount={leadershipQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 강박 테스트의 경우 Supabase에서 시도
  if (slug === 'obsession-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'obsession-test',
      title: {
        ko: '나는 강박 스타일까? vs 건강한 스타일까?',
        en: 'Am I obsessed? vs healthy style?',
        ja: '私は強迫スタイルか？VS健康的なスタイルか？',
        'zh-CN': '我是强迫型还是健康型？',
        'zh-TW': '我是強迫型還是健康型？',
        vi: 'Tôi là phong cách ám ảnh hay phong cách khỏe mạnh?',
        id: 'Apakah saya gaya obsesif? VS gaya sehat?'
      },
      description: {
        ko: '완벽함을 추구하는 것? 아니면 강박일까?',
        en: 'Pursuing perfection? Or obsession?',
        ja: '完璧を追求すること？それとも強迫的？',
        'zh-CN': '追求完美？还是强迫症？',
        'zh-TW': '追求完美？還是強迫症？',
        vi: 'Theo đuổi sự hoàn hảo? Hay ám ảnh?',
        id: 'Mengejar kesempurnaan? Atau obsesi?'
      },
      thumbnail: 'test_203_obsession_vs_healthy.jpg',
      play_count: 0
    };

    return (
      <>
        <ObsessionTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={obsessionQuestions}
          results={obsessionResults}
          questionCount={obsessionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 팀 플레이어 테스트의 경우 Supabase에서 시도
  if (slug === 'team-player-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'team-player-test',
      title: {
        ko: '당신은 어떤 팀 플레이어인가요?',
        en: 'What kind of team player are you?',
        ja: 'あなたはどんなチームプレイヤーですか？',
        'zh-CN': '你是什么样的团队玩家？',
        'zh-TW': '你是什麼樣的團隊玩家？',
        vi: 'Bạn là loại người chơi nhóm nào?',
        id: 'Anda adalah pemain tim seperti apa?'
      },
      description: {
        ko: '혼자서는 빠르지만, 함께하면 더 멀리 갑니다!',
        en: 'Alone we can do so little; together we can do so much!',
        ja: '一人では速いが、一緒ならもっと遠くまで行ける！',
        'zh-CN': '一个人走得快，但一起走得更远！',
        'zh-TW': '一個人走得快，但一起走得更遠！',
        vi: 'Một mình thì nhanh, nhưng cùng nhau thì đi xa hơn！',
        id: 'Sendirian cepat, tapi bersama-sama lebih jauh！'
      },
      thumbnail: 'test_052_team_player.jpg',
      play_count: 0
    };

    return (
      <>
        <TeamPlayerTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={teamPlayerQuestions}
          results={teamPlayerResults}
          questionCount={teamPlayerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 도전 잠재력 테스트의 경우 Supabase에서 시도
  if (slug === 'challenge-potential-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'challenge-potential-test',
      title: {
        ko: '당신의 도전의식 잠재력은?',
        en: 'What is your challenge potential?',
        ja: 'あなたの挑戦意識の潜在力は？',
        'zh-CN': '你的挑战意识潜力是什么？',
        'zh-TW': '你的挑戰意識潛力是什麼？',
        vi: 'Tiềm năng thử thách của bạn là gì?',
        id: 'Apa potensi tantangan Anda?'
      },
      description: {
        ko: '당신 안에 잠들어 있는 도전 정신을 깨워보세요!',
        en: 'Awaken the spirit of challenge sleeping within you!',
        ja: 'あなたの中に眠っている挑戦精神を目覚めさせてください！',
        'zh-CN': '唤醒沉睡在你内心的挑战精神！',
        'zh-TW': '喚醒沉睡在你內心的挑戰精神！',
        vi: 'Đánh thức tinh thần thử thách đang ngủ trong bạn!',
        id: 'Bangunkan semangat tantangan yang tertidur dalam diri Anda!'
      },
      thumbnail: 'test_053_challenge_potential.jpg',
      play_count: 0
    };

    return (
      <>
        <ChallengePotentialTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={challengePotentialQuestions}
          results={challengePotentialResults}
          questionCount={challengePotentialQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 낙관 vs 비관 테스트
  if (slug === 'optimism-pessimism-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'optimism-pessimism-test',
      title: {
        ko: '나는 낙관주의일까? vs 비관주의일까?',
        en: 'Am I an Optimist or Pessimist?',
        ja: '私は楽観主義者か悲観主義者か？',
        'zh-CN': '我是乐观主义者还是悲观主义者？',
        'zh-TW': '我是樂觀主義者還是悲觀主義者？',
        vi: 'Tôi là người lạc quan hay bi quan?',
        id: 'Apakah saya optimis atau pesimis?'
      },
      description: {
        ko: '컵에 물이 반? 반이나 있다 vs 반밖에 없다',
        en: 'Cup half full or half empty?',
        ja: 'コップに水が半分？半分もある vs 半分しかない',
        'zh-CN': '杯子半满还是半空？',
        'zh-TW': '杯子半滿還是半空？',
        vi: 'Cốc nước đầy một nửa hay còn một nửa?',
        id: 'Cangkir setengah penuh atau setengah kosong?'
      },
      thumbnail: 'test_204_optimism_vs_pessimism.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <OptimismTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={optimismQuestions}
          results={optimismResults}
          questionCount={optimismQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 나의 인생 우선순위 찾기 테스트
  if (slug === 'life-priorities') {
    const test = await getTestBySlug(slug) || {
      slug: 'life-priorities',
      title: {
        ko: '나의 인생 우선순위 찾기',
        en: 'Find My Life Priorities',
        ja: '私の人生の優先順位を見つける',
        'zh-CN': '找到我的人生优先级',
        'zh-TW': '找到我的人生優先級',
        vi: 'Tìm Thứ tự Ưu tiên Cuộc sống của Tôi',
        id: 'Temukan Prioritas Hidup Saya'
      },
      description: {
        ko: '당신 인생에서 정말 중요한 것은 무엇인가요?',
        en: 'What is truly important in your life?',
        ja: 'あなたの人生で本当に重要なことは何ですか？',
        'zh-CN': '生活中真正重要的是什么？',
        'zh-TW': '生活中真正重要的是什麼？',
        vi: 'Điều gì thực sự quan trọng trong cuộc sống của bạn?',
        id: 'Apa yang benar-benar penting dalam hidup Anda?'
      },
      thumbnail: 'test_205_life_priorities.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['자기이해'],
        en: ['Self-understanding'],
        ja: ['自己理解'],
        'zh-CN': ['自我理解'],
        'zh-TW': ['自我理解'],
        vi: ['Tự hiểu'],
        id: ['Pemahaman diri']
      }
    };

    return (
      <>
        <LifePrioritiesTestClient
          locale={locale as "ko" | "en" | "ja" | "zh-CN" | "zh-TW" | "id" | "vi"}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={lifePrioritiesQuestions}
          results={lifePrioritiesResults}
          questionCount={lifePrioritiesQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 모험가 vs 신중파 테스트
  if (slug === 'adventurer-vs-cautious') {
    const test = await getTestBySlug(slug) || {
      slug: 'adventurer-vs-cautious',
      title: {
        ko: '나는 모험가? vs 신중파?',
        en: 'Am I an Adventurer or Cautious?',
        ja: '私は冒険家か慎重派か？',
        'zh-CN': '我是冒险家还是谨慎派？',
        'zh-TW': '我是冒險家還是謹慎派？',
        vi: 'Tôi là Nhà Thám Hiểm hay Người Thận Trọng?',
        id: 'Apakah saya Petualang atau Hati-hati?'
      },
      description: {
        ko: '일단 해보기 vs 생각부터 하기',
        en: 'Try it vs Think first',
        ja: 'とりあえずやってみる vs 考えることから始める',
        'zh-CN': '先试试 vs 先思考',
        'zh-TW': '先試試 vs 先思考',
        vi: 'Thử đã vs Nghĩ trước',
        id: 'Coba dulu vs Pikir dulu'
      },
      thumbnail: 'test_206_adventurer_vs_cautious.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '선택', '라이프스타일'],
        en: ['Personality', 'Choice', 'Lifestyle'],
        ja: ['性格', '選択', 'ライフスタイル'],
        'zh-CN': ['性格', '选择', '生活方式'],
        'zh-TW': ['性格', '選擇', '生活方式'],
        vi: ['Tính cách', 'Lựa chọn', 'Lối sống'],
        id: ['Kepribadian', 'Pilihan', 'Gaya hidup']
      }
    };

    return (
      <>
        <AdventurerTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={adventurerQuestions}
          results={adventurerResults}
          questionCount={adventurerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 소통 스타일 테스트
  if (slug === 'communication-style-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'communication-style-test',
      title: {
        ko: '당신의 소통 스타일은?',
        en: 'What is your communication style?',
        ja: 'あなたのコミュニケーションスタイルは？',
        'zh-CN': '你的沟通风格是什么？',
        'zh-TW': '你的溝通風格是什麼？',
        vi: 'Phong cách giao tiếp của bạn là gì?',
        id: 'Apa gaya komunikasi Anda?'
      },
      description: {
        ko: '직설적 vs 간접적 vs 감성적 vs 논리적',
        en: 'Direct vs Indirect vs Emotional vs Logical',
        ja: '直接的 vs 間接的 vs 感情的 vs 論理的',
        'zh-CN': '直接 vs 间接 vs 感性 vs 逻辑',
        'zh-TW': '直接 vs 間接 vs 感性 vs 邏輯',
        vi: 'Trực tiếp vs Gián tiếp vs Cảm xúc vs Logic',
        id: 'Langsung vs Tidak langsung vs Emosional vs Logis'
      },
      thumbnail: 'test_207_communication_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['소통', '관계', '성격'],
        en: ['Communication', 'Relationships', 'Personality'],
        ja: ['コミュニケーション', '関係', '性格'],
        'zh-CN': ['沟通', '关系', '性格'],
        'zh-TW': ['溝通', '關係', '性格'],
        vi: ['Giao tiếp', 'Mối quan hệ', 'Tính cách'],
        id: ['Komunikasi', 'Hubungan', 'Kepribadian']
      }
    };

    return (
      <>
        <CommunicationStyleTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={communicationStyleQuestions}
          results={communicationStyleResults}
          questionCount={communicationStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 솔직 vs 절제 테스트
  if (slug === 'honesty-vs-restraint-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'honesty-vs-restraint-test',
      title: {
        ko: '난 솔직 스타일? vs 절제 스타일?',
        en: 'Am I Honest or Restrained?',
        ja: '私は正直スタイル？VS自制スタイル？',
        'zh-CN': '我是诚实风格还是节制风格？',
        'zh-TW': '我是誠實風格還是節制風格？',
        vi: 'Tôi là phong cách thành thật hay tự chế?',
        id: 'Apakah saya gaya jujur atau menahan diri?'
      },
      description: {
        ko: '감정 그대로 표현? 아니면 한 번 걸러서?',
        en: 'Express emotions as they are? Or filter first?',
        ja: '感情そのまま表現？それとも一度フィルターして？',
        'zh-CN': '如实表达情感？还是先过滤？',
        'zh-TW': '如實表達情感？還是先過濾？',
        vi: 'Thể hiện cảm xúc như vốn có? Hay lọc trước?',
        id: 'Ekspresikan emosi apa adanya? Atau filter dulu?'
      },
      thumbnail: 'test_208_honesty_vs_restraint.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['감정', '성격'],
        en: ['Emotion', 'Personality'],
        ja: ['感情', '性格'],
        'zh-CN': ['情感', '性格'],
        'zh-TW': ['情感', '性格'],
        vi: ['Cảm xúc', 'Tính cách'],
        id: ['Emosi', 'Kepribadian']
      }
    };

    return (
      <>
        <HonestyVsRestraintTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={honestyVsRestraintQuestions}
          results={honestyVsRestraintResults}
          questionCount={honestyVsRestraintQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 독립 vs 의존 테스트
  if (slug === 'independence-vs-dependence-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'independence-vs-dependence-test',
      title: {
        ko: '난 독립적 스타일? vs 의존적 스타일?',
        en: 'Am I Independent or Dependent?',
        ja: '私は独立スタイル？VS依存スタイル？',
        'zh-CN': '我是独立风格还是依赖风格？',
        'zh-TW': '我是獨立風格還是依賴風格？',
        vi: 'Tôi là phong cách độc lập hay phụ thuộc?',
        id: 'Apakah saya gaya mandiri atau bergantung?'
      },
      description: {
        ko: '혼자서도 괜찮아 vs 누군가 필요해',
        en: 'Okay alone vs Need someone',
        ja: '一人でも大丈夫 vs 誰かが必要',
        'zh-CN': '独自也可以 vs 需要有人',
        'zh-TW': '獨自也可以 vs 需要有人',
        vi: 'Ổn một mình vs Cần ai đó',
        id: 'Baik-baik saja sendirian vs Perlu seseorang'
      },
      thumbnail: 'test_209_independence_vs_dependence.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '자기이해'],
        en: ['Personality', 'Self-understanding'],
        ja: ['性格', '自己理解'],
        'zh-CN': ['性格', '自我理解'],
        'zh-TW': ['性格', '自我理解'],
        vi: ['Tính cách', 'Tự hiểu'],
        id: ['Kepribadian', 'Pemahaman diri']
      }
    };

    return (
      <>
        <IndependenceTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={independenceQuestions}
          results={independenceResults}
          questionCount={independenceQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 의사결정 속도 테스트
  if (slug === 'decision-speed-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'decision-speed-test',
      title: {
        ko: '당신의 의사결정 속도는?',
        en: 'What is your decision-making speed?',
        ja: 'あなたの意思決定の速度は？',
        'zh-CN': '你的决策速度是什么？',
        'zh-TW': '你的決策速度是什麼？',
        vi: 'Tốc độ ra quyết định của bạn là gì?',
        id: 'Berapa kecepatan pengambilan keputusan Anda?'
      },
      description: {
        ko: '즉시 결정? 천천히 고민? 당신의 결정 속도는?',
        en: 'Decide immediately? Think slowly? What is your decision speed?',
        ja: 'すぐに決める？ゆっくり悩む？あなたの決定速度は？',
        'zh-CN': '立即决定？慢慢思考？你的决策速度是什么？',
        'zh-TW': '立即決定？慢慢思考？你的決策速度是什麼？',
        vi: 'Quyết định ngay lập tức? Suy nghĩ chậm? Tốc độ quyết định của bạn là gì?',
        id: 'Putuskan segera? Berpikir perlahan? Berapa kecepatan keputusan Anda?'
      },
      thumbnail: 'test_213_decision_speed.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <DecisionSpeedTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={decisionSpeedQuestions}
          results={decisionSpeedResults}
          questionCount={decisionSpeedQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 승부욕 강도 테스트
  if (slug === 'competitiveness-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'competitiveness-test',
      title: {
        ko: '나의 승부욕 강도는 몇일까?',
        en: 'How strong is my competitiveness?',
        ja: '私の勝負欲の強さは？',
        'zh-CN': '我的竞争心有多强？',
        'zh-TW': '我的競爭心有多強？',
        vi: 'Tính cạnh tranh của tôi mạnh đến mức nào?',
        id: 'Seberapa kuat kompetitif saya?'
      },
      description: {
        ko: '이기고 싶다 vs 즐기면 돼! 당신의 승부욕은?',
        en: 'Want to win vs Just enjoy! What is your competitiveness?',
        ja: '勝ちたい vs 楽しめばいい！あなたの勝負欲は？',
        'zh-CN': '想赢 vs 享受就好！你的竞争心是什么？',
        'zh-TW': '想贏 vs 享受就好！你的競爭心是什麼？',
        vi: 'Muốn thắng vs Chỉ cần tận hưởng! Tính cạnh tranh của bạn là gì?',
        id: 'Ingin menang vs Nikmati saja! Apa kompetitif Anda?'
      },
      thumbnail: 'test_215_competitiveness.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '자기이해'],
        en: ['Personality', 'Self-understanding'],
        ja: ['性格', '自己理解'],
        'zh-CN': ['性格', '自我理解'],
        'zh-TW': ['性格', '自我理解'],
        vi: ['Tính cách', 'Tự hiểu'],
        id: ['Kepribadian', 'Pemahaman diri']
      }
    };

    return (
      <>
        <CompetitivenessTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={competitivenessQuestions}
          results={competitivenessResults}
          questionCount={competitivenessQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 반응 스타일 테스트
  if (slug === 'reaction-style-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'reaction-style-test',
      title: {
        ko: '당신은 어떻게 반응할까요?',
        en: 'How do you react?',
        ja: 'あなたはどう反応しますか？',
        'zh-CN': '你会如何反应？',
        'zh-TW': '你會如何反应？',
        vi: 'Bạn phản ứng như thế nào?',
        id: 'Bagaimana Anda bereaksi?'
      },
      description: {
        ko: '당신의 진짜 반응은? 상황에 따른 반응 스타일을 분석해보세요!',
        en: 'What is your real reaction? Analyze your reaction style to different situations!',
        ja: 'あなたの本当の反応は？様々な状況での反応スタイルを分析してみてください！',
        'zh-CN': '你的真实反应是什么？分析你在不同情况下的反应风格！',
        'zh-TW': '你的真實反應是什麼？分析你在不同情況下的反應風格！',
        vi: 'Phản ứng thực sự của bạn là gì? Hãy phân tích phong cách phản ứng của bạn trong các tình huống khác nhau!',
        id: 'Apa reaksi asli Anda? Analisis gaya reaksi Anda dalam situasi yang berbeda!'
      },
      thumbnail: 'test_225_reaction_style.jpg',
      type: 'personality',
      category: 'psychology',
      tags: {
        ko: ['성격', '심리'],
        en: ['Personality', 'Psychology'],
        ja: ['性格', '心理'],
        'zh-CN': ['性格', '心理'],
        'zh-TW': ['性格', '心理'],
        vi: ['Tính cách', 'Tâm lý'],
        id: ['Kepribadian', 'Psikologi']
      },
      play_count: 0
    };

    return (
      <ReactionStyleTestClient
        locale={locale as Locale}
        slug={slug}
        title={test.title[locale] || test.title.ko}
        description={test.description?.[locale] || test.description?.ko || ''}
        questions={reactionStyleQuestions}
        results={reactionStyleResults}
        questionCount={reactionStyleQuestions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 질투심 테스트
  if (slug === 'jealousy-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'jealousy-test',
      title: {
        ko: '당신은 얼마나 질투심이 많은가요?',
        en: 'How jealous are you?',
        ja: 'あなたはどのくらい嫉妬深いですか？',
        'zh-CN': '你有多嫉妒？',
        'zh-TW': '你有多嫉妒？',
        vi: 'Bạn ghen tuông đến mức nào?',
        id: 'Seberapa cemburu Anda?'
      },
      description: {
        ko: '사랑과 질투는 한 끗 차이! 당신의 질투 지수는?\n연인이 다른 이성과 대화하는 걸 보면? 과거 연애 이야기가 나오면? SNS에 이성 친구가 댓글을 달면?\n질투는 자연스러운 감정이지만, 너무 강하면 관계를 해칠 수 있습니다.\n당신의 질투심은 건강한 수준일까요? 아니면 조절이 필요할까요?\n단 3분이면 당신의 질투 수준을 알 수 있습니다!',
        en: 'Love and jealousy are just one step apart! What\'s your jealousy index?\nWhen you see your partner talking to someone of the opposite sex? When past relationship stories come up? When opposite-sex friends comment on SNS?\nJealousy is a natural emotion, but if it\'s too strong, it can harm relationships.\nIs your jealousy at a healthy level? Or does it need to be controlled?\nJust 3 minutes to know your jealousy level!',
        ja: '愛と嫉妬は紙一重！あなたの嫉妬指数は？\n恋人が異性と話しているのを見ると？過去の恋愛話が出ると？SNSに異性の友達がコメントすると？\n嫉妬は自然な感情ですが、強すぎると関係を害することがあります。\nあなたの嫉妬心は健康的なレベルですか？それともコントロールが必要ですか？\nたった3分であなたの嫉妬レベルがわかります！',
        'zh-CN': '爱与嫉妒只有一步之遥！你的嫉妒指数是多少？\n当你看到恋人与异性交谈时？当过去的恋爱故事出现时？当异性朋友在SNS上评论时？\n嫉妒是自然的情感，但如果太强烈，可能会伤害关系。\n你的嫉妒心是健康水平吗？还是需要控制？\n只需3分钟就能知道你的嫉妒水平！',
        'zh-TW': '愛與嫉妒只有一步之遙！你的嫉妒指數是多少？\n當你看到戀人與異性交談時？當過去的戀愛故事出現時？當異性朋友在SNS上評論時？\n嫉妒是自然的情感，但如果太強烈，可能會傷害關係。\n你的嫉妒心是健康水平嗎？還是需要控制？\n只需3分鐘就能知道你的嫉妒水平！',
        vi: 'Tình yêu và ghen tuông chỉ cách nhau một bước! Chỉ số ghen tuông của bạn là gì?\nKhi thấy người yêu nói chuyện với người khác giới? Khi câu chuyện tình cũ xuất hiện? Khi bạn khác giới bình luận trên SNS?\nGhen tuông là cảm xúc tự nhiên, nhưng nếu quá mạnh có thể làm tổn hại mối quan hệ.\nSự ghen tuông của bạn ở mức độ lành mạnh? Hay cần được kiểm soát?\nChỉ 3 phút để biết mức độ ghen tuông của bạn!',
        id: 'Cinta dan kecemburuan hanya terpisah satu langkah! Berapa indeks kecemburuan Anda?\nKetika melihat pasangan berbicara dengan lawan jenis? Ketika cerita hubungan masa lalu muncul? Ketika teman lawan jenis berkomentar di SNS?\nKecemburuan adalah emosi alami, tapi jika terlalu kuat bisa merusak hubungan.\nApakah kecemburuan Anda pada tingkat sehat? Atau perlu dikontrol?\nHanya 3 menit untuk mengetahui tingkat kecemburuan Anda!'
      },
      thumbnail: 'test_233_jealousy_level.jpg',
      type: 'dating',
      category: 'personality',
      tags: {
        ko: ['연애', '성격'],
        en: ['Dating', 'Personality'],
        ja: ['恋愛', '性格'],
        'zh-CN': ['恋爱', '性格'],
        'zh-TW': ['戀愛', '性格'],
        vi: ['Hẹn hò', 'Tính cách'],
        id: ['Pacaran', 'Kepribadian']
      },
      play_count: 0
    };

    return (
      <JealousyTestClient
        locale={locale as Locale}
        slug={slug}
        title={test.title[locale] || test.title.ko}
        description={test.description?.[locale] || test.description?.ko || ''}
        questions={jealousyQuestions}
        results={jealousyResults}
        questionCount={jealousyQuestions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 집중력 테스트
  if (slug === 'concentration-level-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'concentration-level-test',
      title: {
        ko: '당신의 집중력 레벨은?',
        en: 'What is your concentration level?',
        ja: 'あなたの集中力レベルは？',
        'zh-CN': '你的专注力水平是什么？',
        'zh-TW': '你的專注力水平是什麼？',
        vi: 'Mức độ tập trung của bạn là gì?',
        id: 'Berapa level konsentrasi Anda?'
      },
      description: {
        ko: '당신의 집중력, 과연 얼마나 강력한가요?\n스마트폰 알림, 주변 소음, 끊임없는 유혹... 현대인의 집중력은 금붕어보다 짧다는 말도 있습니다.\n한 가지 일에 얼마나 오래 집중할 수 있나요? 외부 방해에 얼마나 강한가요? 몰입의 경지에 도달한 적이 있나요?\n단 3분이면 당신의 집중력 유형을 발견할 수 있습니다!',
        en: 'How powerful is your concentration?\nSmartphone notifications, ambient noise, endless temptations... Modern people\'s concentration is said to be shorter than a goldfish.\nHow long can you focus on one thing? How strong are you against external distractions? Have you ever reached a state of immersion?\nJust 3 minutes to discover your concentration type!',
        ja: 'あなたの集中力、いったいどのくらい強力ですか？\nスマートフォンの通知、周囲の騒音、絶え間ない誘惑...現代人の集中力は金魚より短いと言われています。\n一つのことにどのくらい長く集中できますか？外部の妨害にどのくらい強いですか？没入の境地に達したことはありますか？\nたった3分であなたの集中力タイプを発見できます！',
        'zh-CN': '你的专注力有多强大？\n智能手机通知、周围噪音、无尽的诱惑...现代人的专注力据说比金鱼还短。\n你能在一件事上专注多久？对外部干扰有多强？你是否达到过沉浸状态？\n只需3分钟就能发现你的专注力类型！',
        'zh-TW': '你的專注力有多強大？\n智能手機通知、周圍噪音、無盡的誘惑...現代人的專注力據說比金魚還短。\n你能在一件事上專注多久？對外部干擾有多強？你是否達到過沉浸狀態？\n只需3分鐘就能發現你的專注力類型！',
        vi: 'Sức mạnh tập trung của bạn như thế nào?\nThông báo điện thoại, tiếng ồn xung quanh, những cám dỗ bất tận... Người ta nói rằng khả năng tập trung của con người hiện đại ngắn hơn cả cá vàng.\nBạn có thể tập trung vào một việc bao lâu? Bạn mạnh mẽ đến mức nào trước những phiền nhiễu bên ngoài? Bạn đã từng đạt đến trạng thái nhập tâm chưa?\nChỉ 3 phút để khám phá loại tập trung của bạn!',
        id: 'Seberapa kuat konsentrasi Anda?\nNotifikasi smartphone, kebisingan sekitar, godaan tak berujung... Konsentrasi manusia modern dikatakan lebih pendek dari ikan mas.\nBerapa lama Anda bisa fokus pada satu hal? Seberapa kuat Anda melawan gangguan eksternal? Pernahkah Anda mencapai keadaan imersi?\nHanya 3 menit untuk menemukan tipe konsentrasi Anda!'
      },
      thumbnail: 'test_078_concentration.jpg',
      type: 'brain',
      category: 'psychology',
      tags: {
        ko: ['두뇌', '집중력'],
        en: ['Brain', 'Concentration'],
        ja: ['脳', '集中力'],
        'zh-CN': ['大脑', '专注力'],
        'zh-TW': ['大腦', '專注力'],
        vi: ['Não bộ', 'Tập trung'],
        id: ['Otak', 'Konsentrasi']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '집중력 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 집중력 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <ConcentrationTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={concentrationQuestions}
          results={concentrationResults}
          questionCount={concentrationQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // MBTI 정확한 테스트
  if (slug === 'mbti-accurate-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'mbti-accurate-test',
      title: {
        ko: '궁극의 진짜 정확한 MBTI!',
        en: 'Ultimate Accurate MBTI!',
        ja: '究極の本当に正確なMBTI！',
        'zh-CN': '终极真正准确的MBTI！',
        'zh-TW': '終極真正準確的MBTI！',
        vi: 'MBTI chính xác tối thượng!',
        id: 'MBTI Akurat Terbaik!'
      },
      description: {
        ko: '정확한 MBTI 측정! 당신의 진짜 성격 유형은?\n\n외향형? 내향형? 감각형? 직관형? 사고형? 감정형? 판단형? 인식형?\n\n간단한 테스트가 아닌, 정확도를 높인 32개 질문으로 당신의 진짜 MBTI를 찾아드립니다.\n\n16가지 성격 유형 중 당신은 어디에 속할까요?\n\n실제 상황 기반의 질문으로 85% 이상의 정확도를 자랑합니다!\n\n소요 시간 약 15분! 솔직하게 답변해주세요 🎯',
        en: 'Accurate MBTI measurement! What is your real personality type?\n\nExtrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nNot a simple test, but 32 questions with increased accuracy to find your real MBTI.\n\nWhich of the 16 personality types do you belong to?\n\nBased on real situations, it boasts over 85% accuracy!\n\nTakes about 15 minutes! Please answer honestly 🎯',
        ja: '正確なMBTI測定！あなたの本当の性格タイプは？\n\n外向型？内向型？感覚型？直感型？思考型？感情型？判断型？知覚型？\n\n簡単なテストではなく、精度を高めた32の質問であなたの本当のMBTIを見つけます。\n\n16の性格タイプのうち、あなたはどこに属するでしょうか？\n\n実際の状況に基づく質問で85%以上の精度を誇ります！\n\n所要時間約15分！正直に答えてください 🎯',
        'zh-CN': '准确的MBTI测量！你真正的性格类型是什么？\n\n外向？内向？感觉？直觉？思考？情感？判断？感知？\n\n不是简单的测试，而是通过32个提高准确性的问题来找到你真正的MBTI。\n\n在16种性格类型中，你属于哪一种？\n\n基于真实情况的问题，准确率超过85%！\n\n大约需要15分钟！请诚实回答 🎯',
        'zh-TW': '準確的MBTI測量！你真正的性格類型是什麼？\n\n外向？內向？感覺？直覺？思考？情感？判斷？感知？\n\n不是簡單的測試，而是通過32個提高準確性的問題來找到你真正的MBTI。\n\n在16種性格類型中，你屬於哪一種？\n\n基於真實情況的問題，準確率超過85%！\n\n大約需要15分鐘！請誠實回答 🎯',
        vi: 'Đo lường MBTI chính xác! Kiểu tính cách thực sự của bạn là gì?\n\nHướng ngoại? Hướng nội? Cảm giác? Trực giác? Suy nghĩ? Cảm xúc? Phán đoán? Nhận thức?\n\nKhông phải bài kiểm tra đơn giản, mà là 32 câu hỏi với độ chính xác cao để tìm ra MBTI thực sự của bạn.\n\nTrong 16 kiểu tính cách, bạn thuộc loại nào?\n\nDựa trên tình huống thực tế, nó tự hào có độ chính xác hơn 85%!\n\nMất khoảng 15 phút! Hãy trả lời thành thật 🎯',
        id: 'Pengukuran MBTI yang akurat! Apa tipe kepribadian asli Anda?\n\nEkstrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nBukan tes sederhana, tetapi 32 pertanyaan dengan akurasi tinggi untuk menemukan MBTI asli Anda.\n\nDari 16 tipe kepribadian, Anda termasuk yang mana?\n\nBerdasarkan situasi nyata, ia bangga memiliki akurasi lebih dari 85%!\n\nMemakan waktu sekitar 15 menit! Jawablah dengan jujur 🎯'
      },
      thumbnail: 'test_001_mbti_accurate.jpg',
      type: 'personality',
      category: 'personality',
      tags: {
        ko: ['성격', 'MBTI', '심리'],
        en: ['Personality', 'MBTI', 'Psychology'],
        ja: ['性格', 'MBTI', '心理'],
        'zh-CN': ['性格', 'MBTI', '心理'],
        'zh-TW': ['性格', 'MBTI', '心理'],
        vi: ['Tính cách', 'MBTI', 'Tâm lý'],
        id: ['Kepribadian', 'MBTI', 'Psikologi']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      image: thumbnailUrl,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quizoasis-coral.vercel.app/favicon.ico'
        }
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      mainEntity: {
        '@type': 'Question',
        name: title,
        text: description,
        answerCount: mbtiAccurateQuestions.length
      }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'ko' ? '홈' : 
                locale === 'en' ? 'Home' :
                locale === 'ja' ? 'ホーム' :
                locale === 'zh-CN' ? '首页' :
                locale === 'zh-TW' ? '首頁' :
                locale === 'vi' ? 'Trang chủ' :
                locale === 'id' ? 'Beranda' : 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: locale === 'ko' ? '테스트' : 
                locale === 'en' ? 'Tests' :
                locale === 'ja' ? 'テスト' :
                locale === 'zh-CN' ? '测试' :
                locale === 'zh-TW' ? '測試' :
                locale === 'vi' ? 'Kiểm tra' :
                locale === 'id' ? 'Tes' : 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}/test`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: canonicalUrl
        }
      ]
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <MBTIAccurateTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={mbtiAccurateQuestions}
          results={mbtiAccurateResults}
          questionCount={mbtiAccurateQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // 실제 IQ 테스트
  if (slug === 'real-iq') {
    const test = await getTestBySlug(slug) || {
      slug: 'real-iq',
      title: {
        ko: '당신의 실제 IQ는?',
        en: 'What is your real IQ?',
        ja: 'あなたの実際のIQは？',
        'zh-CN': '你的实际IQ是多少？',
        'zh-TW': '你的實際IQ是多少？',
        vi: 'IQ thực tế của bạn là bao nhiêu?',
        id: 'Berapa IQ asli Anda?'
      },
      description: {
        ko: '진짜 IQ를 측정합니다!\n\n당신의 지능 지수는 몇일까요?\n\n멘사 수준의 천재? 평균? 우수?\n\n당신의 정확한 IQ를 지금 바로 확인하세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n집중하세요! 신중하게 답변하세요!\n단 5분이면 당신의 실제 IQ를 알 수 있습니다!',
        en: 'Measure your real IQ!\n\nWhat is your intelligence quotient?\n\nMensa-level genius? Average? Excellent?\n\nFind out your exact IQ right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But I recommend trying without hints)\n\nFocus! Answer carefully!\nYou can find out your real IQ in just 5 minutes!',
        ja: 'あなたの実際のIQを測定します！\n\nあなたの知能指数はいくつでしょうか？\n\nメンサレベルの天才？平均？優秀？\n\nあなたの正確なIQを今すぐ確認してください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\n集中してください！慎重に答えてください！\nたった5分で、あなたの実際のIQがわかります！',
        'zh-CN': '测量你的实际IQ！\n\n你的智商是多少？\n\n门萨级别的天才？平均？优秀？\n\n现在就来找出你的确切IQ！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我建议尽量不用提示来解答）\n\n集中注意力！仔细回答！\n只需5分钟，你就能知道自己的实际IQ！',
        'zh-TW': '測量你的實際IQ！\n\n你的智商是多少？\n\n門薩級別的天才？平均？優秀？\n\n現在就來找出你的確切IQ！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我建議盡量不用提示來解答）\n\n集中注意力！仔細回答！\n只需5分鐘，你就能知道自己的實際IQ！',
        vi: 'Đo IQ thực tế của bạn!\n\nChỉ số thông minh của bạn là bao nhiêu?\n\nThiên tài cấp Mensa? Trung bình? Xuất sắc?\n\nHãy tìm hiểu IQ chính xác của bạn ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nTập trung! Trả lời cẩn thận!\nChỉ trong 5 phút, bạn có thể biết IQ thực tế của mình!',
        id: 'Ukur IQ asli Anda!\n\nBerapa indeks kecerdasan Anda?\n\nJenius level Mensa? Rata-rata? Unggul?\n\nTemukan IQ tepat Anda sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi saya sarankan mencoba tanpa petunjuk)\n\nFokus! Jawab dengan hati-hati!\nHanya dalam 5 menit, Anda bisa mengetahui IQ asli Anda!'
      },
      thumbnail: 'test_101_real_iq.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['brain', 'quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['não bộ', 'câu đố', 'IQ'],
        id: ['otak', 'kuis', 'IQ']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <RealIQTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={realIQQuestions}
        results={realIQResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 초고난도 퀴즈 테스트
  if (slug === 'extreme-quiz') {
    const test = await getTestBySlug(slug) || {
      slug: 'extreme-quiz',
      title: {
        ko: '3%만 풀 수 있는 초고난도 퀴즈',
        en: 'Extreme Difficulty Quiz Only 3% Can Solve',
        ja: '3%しか解けない超難問クイズ',
        'zh-CN': '只有3%能解决的超高难度测验',
        'zh-TW': '只有3%能解決的超高難度測驗',
        vi: 'Câu đố siêu khó chỉ 3% có thể giải được',
        id: 'Kuis Kesulitan Ekstrem Hanya 3% yang Bisa Menyelesaikan'
      },
      description: {
        ko: '당신은 상위 3%에 속할 수 있을까? 지금 도전하세요!\n\n⚠️ 경고: 이 테스트는 매우 어렵습니다 ⚠️\n\n멘사 회원도 어려워하는 초고난도 문제!\n97%의 사람들이 절반도 못 맞힙니다.\n천재들만이 도달할 수 있는 영역!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n집중하세요! 포기하지 마세요!\n친구들과 점수를 겨뤄보세요!',
        en: 'Extreme difficulty quiz that only the top 3% of humanity can solve!\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 97% of people can\'t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 10 minutes, you can know your true ability!',
        ja: '人類上位3%しか解けない超難問クイズ！\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n97%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった10分で、あなたの本当の実力を知ることができます！',
        'zh-CN': '只有人类前3%能解决的超高难度测验！\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由97%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需10分钟，你就能知道自己的真正实力！',
        'zh-TW': '只有人類前3%能解決的超高難度測驗！\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由97%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需10分鐘，你就能知道自己的真正實力！',
        vi: 'Câu đố siêu khó chỉ có top 3% nhân loại mới giải được!\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 97% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 10 phút, bạn có thể biết khả năng thực sự của mình!',
        id: 'Kuis kesulitan ekstrem yang hanya bisa diselesaikan oleh top 3% umat manusia!\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 97% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 10 menit, Anda bisa mengetahui kemampuan sejati Anda!'
      },
      thumbnail: 'test_102_extreme_quiz.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ', '초고난도'],
        en: ['brain', 'quiz', 'IQ', 'extreme'],
        ja: ['脳', 'クイズ', 'IQ', '超難問'],
        'zh-CN': ['大脑', '测验', 'IQ', '超高难度'],
        'zh-TW': ['大腦', '測驗', 'IQ', '超高難度'],
        vi: ['não bộ', 'câu đố', 'IQ', 'siêu khó'],
        id: ['otak', 'kuis', 'IQ', 'ekstrem']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <ExtremeQuizTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={extremeQuizQuestions}
        results={extremeQuizResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 멘사 극한 도전 퀴즈 테스트
  if (slug === 'mensa-extreme') {
    const test = await getTestBySlug(slug) || {
      slug: 'mensa-extreme',
      title: {
        ko: 'IQ 148 이상만 맞히는 문제',
        en: 'Problems Only IQ 148+ Can Solve',
        ja: 'IQ 148以上のみ解ける問題',
        'zh-CN': '只有IQ 148以上才能解决的问题',
        'zh-TW': '只有IQ 148以上才能解決的問題',
        vi: 'Chỉ có IQ 148+ mới giải được',
        id: 'Hanya IQ 148+ yang bisa menyelesaikan'
      },
      description: {
        ko: '멘사 회원도 어려워하는 극한의 도전! IQ 148 이상, 인구의 상위 0.1%만이 도달하는 영역의 문제들입니다.\n\n수학, 논리, 추론, 패턴 인식... 모든 영역의 극한을 시험합니다.\n\n99.9%의 사람들이 절반도 못 맞히는 문제들로 구성되어 있습니다.\n\n당신은 진정한 천재인가요? 지금 바로 확인해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 12분이면 당신의 진짜 지능을 알 수 있습니다!',
        en: 'Extreme challenge that even Mensa members find difficult! IQ 148+, only the top 0.1% of the population reaches this level.\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 99.9% of people can\'t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 12 minutes, you can know your true intelligence!',
        ja: 'メンサ会員も困難に感じる極限の挑戦！IQ 148以上、人口の上位0.1%のみが到達する領域の問題です。\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n99.9%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった12分で、あなたの本当の知能がわかります！',
        'zh-CN': '连门萨会员都觉得困难的极限挑战！IQ 148以上，只有人口前0.1%能达到的领域的问题。\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由99.9%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需12分钟，你就能知道自己的真实智力！',
        'zh-TW': '連門薩會員都覺得困難的極限挑戰！IQ 148以上，只有人口前0.1%能達到的領域的問題。\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由99.9%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需12分鐘，你就能知道自己的真實智力！',
        vi: 'Thử thách cực hạn mà ngay cả thành viên Mensa cũng thấy khó! IQ 148+, chỉ có 0.1% dân số đạt được mức này.\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 99.9% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 12 phút, bạn có thể biết trí thông minh thực sự của mình!',
        id: 'Tantangan ekstrem yang bahkan anggota Mensa pun merasa sulit! IQ 148+, hanya 0.1% populasi yang mencapai level ini.\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 99.9% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 12 menit, Anda bisa mengetahui kecerdasan sejati Anda!'
      },
      thumbnail: 'test_103_mensa_extreme.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['brain', 'quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['não bộ', 'câu đố', 'IQ'],
        id: ['otak', 'kuis', 'IQ']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <MensaExtremeTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={mensaExtremeQuestions}
        results={mensaExtremeResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 관상 보기 테스트
  if (slug === 'face-reading') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-reading',
      title: {
        ko: '관상 보기',
        en: 'Face Reading',
        ja: '観相診断',
        'zh-CN': '面相测试',
        'zh-TW': '面相測試',
        vi: 'Xem tướng',
        id: 'Baca Wajah'
      },
      description: {
        ko: '당신의 얼굴에 숨겨진 운명을 읽어드립니다\n\n얼굴은 거짓말을 하지 않습니다. 이마, 눈, 코, 입, 턱... 얼굴의 각 부위는 당신의 성격과 운명을 말해줍니다.\n\n천 년 동안 이어져 온 관상학의 지혜로 당신의 운명을 분석합니다.\n\n재물운은? 연애운은? 성공운은?\n\n지금 바로 당신의 얼굴이 말하는 진실을 확인하세요!',
        en: 'Read the destiny hidden in your face\n\nFaces don\'t lie. Forehead, eyes, nose, mouth, chin... Each part of your face tells your personality and destiny.\n\nAnalyze your destiny with the wisdom of physiognomy that has been passed down for a thousand years.\n\nWealth fortune? Love fortune? Success fortune?\n\nFind out the truth your face tells right now!',
        ja: 'あなたの顔に隠された運命を読み取ります\n\n顔は嘘をつきません。額、目、鼻、口、顎...顔の各部分があなたの性格と運命を語ります。\n\n千年間続いてきた観相学の知恵であなたの運命を分析します。\n\n財運は？恋愛運は？成功運は？\n\n今すぐあなたの顔が語る真実を確認してください！',
        'zh-CN': '解读你脸上隐藏的命运\n\n脸不会说谎。额头、眼睛、鼻子、嘴巴、下巴...脸的每个部位都诉说着你的性格和命运。\n\n用千年传承的面相学智慧分析你的命运。\n\n财运如何？恋爱运如何？成功运如何？\n\n现在就来确认你的脸诉说的真相吧！',
        'zh-TW': '解讀你臉上隱藏的命運\n\n臉不會說謊。額頭、眼睛、鼻子、嘴巴、下巴...臉的每個部位都訴說著你的性格和命運。\n\n用千年傳承的面相學智慧分析你的命運。\n\n財運如何？戀愛運如何？成功運如何？\n\n現在就來確認你的臉訴說的真相吧！',
        vi: 'Đọc vận mệnh ẩn giấu trên khuôn mặt bạn\n\nKhuôn mặt không nói dối. Trán, mắt, mũi, miệng, cằm... Mỗi bộ phận trên khuôn mặt đều nói lên tính cách và vận mệnh của bạn.\n\nPhân tích vận mệnh của bạn bằng trí tuệ tướng học đã được truyền lại qua hàng nghìn năm.\n\nVận tài lộc? Vận tình duyên? Vận thành công?\n\nHãy tìm hiểu sự thật mà khuôn mặt bạn nói ngay bây giờ!',
        id: 'Baca takdir tersembunyi di wajah Anda\n\nWajah tidak berbohong. Dahi, mata, hidung, mulut, dagu... Setiap bagian wajah menceritakan kepribadian dan takdir Anda.\n\nAnalisis takdir Anda dengan kebijaksanaan fisiognomi yang telah diturunkan selama ribuan tahun.\n\nKeberuntungan kekayaan? Keberuntungan cinta? Keberuntungan sukses?\n\nTemukan kebenaran yang diceritakan wajah Anda sekarang juga!'
      },
      thumbnail: 'I_offe_ palm_reading_services.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceReadingTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 올해 나의 연애운 테스트
  if (slug === 'face-love-fortune') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-love-fortune',
      title: {
        ko: '얼굴로 보는 올해 나의 연애운',
        en: 'My Love Fortune This Year by Face Reading',
        ja: '顔で見る今年の私の恋愛運',
        'zh-CN': '从面相看今年的恋爱运',
        'zh-TW': '從面相看今年的戀愛運',
        vi: 'Vận Tình Duyên Năm Nay Qua Khuôn Mặt',
        id: 'Nasib Cinta Tahun Ini Melalui Wajah'
      },
      description: {
        ko: '올해 당신에게 사랑은 찾아올까요?\n\n짝사랑? 썸? 연애? 결혼?\n당신의 얼굴에서 올해 연애운을 읽어드립니다.\n\n언제 어디서 인연을 만날까요?\n그 사람은 어떤 스타일일까요?\n주의해야 할 시기는?\n당신의 올해 연애운을 정확하게 예측합니다!',
        en: 'Will love find you this year?\n\nCrush? Flirting? Dating? Marriage?\nWe read your love fortune this year from your face.\n\nWhen and where will you meet your destiny?\nWhat style will that person be?\nWhat period should you be careful?\nWe accurately predict your love fortune this year!',
        ja: '今年あなたに愛は訪れるでしょうか？\n\n片思い？未完成？恋愛？結婚？\nあなたの顔から今年の恋愛運を読み取ります。\n\nいつどこで縁に出会うでしょうか？\nその人はどんなスタイルでしょうか？\n注意すべき時期は？\nあなたの今年の恋愛運を正確に予測します！',
        'zh-CN': '今年爱情会找到你吗？\n\n暗恋？暧昧？恋爱？结婚？\n从你的面相读取今年的恋爱运。\n\n何时何地会相遇？\n那个人会是什么风格？\n需要注意的时期是？\n准确预测你今年的恋爱运！',
        'zh-TW': '今年愛情會找到你嗎？\n\n暗戀？曖昧？戀愛？結婚？\n從你的面相讀取今年的戀愛運。\n\n何時何地會相遇？\n那個人會是什麼風格？\n需要注意的時期是？\n準確預測你今年的戀愛運！',
        vi: 'Tình yêu có tìm đến bạn trong năm nay không?\n\nTình đơn phương? Quan hệ mơ hồ? Hẹn hò? Kết hôn?\nChúng tôi đọc vận tình duyên năm nay từ khuôn mặt bạn.\n\nKhi nào và ở đâu bạn sẽ gặp định mệnh?\nNgười đó sẽ là kiểu người như thế nào?\nThời kỳ nào cần cẩn thận?\nChúng tôi dự đoán chính xác vận tình duyên năm nay của bạn!',
        id: 'Akankah cinta menemukan Anda tahun ini?\n\nCinta sepihak? Hubungan samar? Berkencan? Menikah?\nKami membaca nasib cinta tahun ini dari wajah Anda.\n\nKapan dan di mana Anda akan bertemu takdir?\nSeperti apa gaya orang itu?\nPeriode apa yang harus Anda waspadai?\nKami memprediksi dengan akurat nasib cinta Anda tahun ini!'
      },
      thumbnail: 'Face_Love_Fortune.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴', '연애'],
        en: ['face', 'love'],
        ja: ['顔', '恋愛'],
        'zh-CN': ['面相', '恋爱'],
        'zh-TW': ['面相', '戀愛'],
        vi: ['khuôn mặt', 'tình yêu'],
        id: ['wajah', 'cinta']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceLoveFortuneTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 올해 나의 운세 테스트
  if (slug === 'face-fortune') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-fortune',
      title: {
        ko: '얼굴로 보는 올해 나의 운세',
        en: 'My Fortune This Year by Face Reading',
        ja: '顔で見る今年の私の運勢',
        'zh-CN': '从面相看今年的运势',
        'zh-TW': '從面相看今年的運勢',
        vi: 'Vận May Năm Nay Qua Khuôn Mặt',
        id: 'Nasib Tahun Ini Melalui Wajah'
      },
      description: {
        ko: '올해 당신의 운명은 어떻게 펼쳐질까요?\n\n재물운, 건강운, 연애운, 사업운, 학업운... 올해 당신에게 찾아올 모든 운을 분석합니다.\n\n어느 달이 가장 좋을까요? 조심해야 할 시기는? 기회는 언제 올까요?\n\n당신의 얼굴에서 올해 운세를 정확하게 읽어드립니다!',
        en: 'How will your destiny unfold this year?\n\nWealth fortune, health fortune, love fortune, business fortune, study fortune... We analyze all the fortunes that will come to you this year.\n\nWhich month will be the best? What period should you be careful? When will opportunities come?\n\nWe accurately read your fortune this year from your face!',
        ja: '今年あなたの運命はどのように展開するでしょうか？\n\n財運、健康運、恋愛運、事業運、学業運...今年あなたに訪れるすべての運を分析します。\n\nどの月が最も良いでしょうか？注意すべき時期は？機会はいつ来るでしょうか？\n\nあなたの顔から今年の運勢を正確に読み取ります！',
        'zh-CN': '今年你的命运将如何展开？\n\n财运、健康运、恋爱运、事业运、学业运...我们分析今年将来到你身边的所有运势。\n\n哪个月最好？需要注意的时期是？机会何时来？\n\n从你的面相准确读取今年的运势！',
        'zh-TW': '今年你的命運將如何展開？\n\n財運、健康運、戀愛運、事業運、學業運...我們分析今年將來到你身邊的所有運勢。\n\n哪個月最好？需要注意的時期是？機會何時來？\n\n從你的面相準確讀取今年的運勢！',
        vi: 'Số phận của bạn sẽ diễn ra như thế nào trong năm nay?\n\nVận tài chính, vận sức khỏe, vận tình yêu, vận kinh doanh, vận học tập... Chúng tôi phân tích tất cả các vận may sẽ đến với bạn trong năm nay.\n\nTháng nào sẽ tốt nhất? Thời kỳ nào cần cẩn thận? Khi nào cơ hội sẽ đến?\n\nChúng tôi đọc chính xác vận may năm nay từ khuôn mặt bạn!',
        id: 'Bagaimana nasib Anda akan terungkap tahun ini?\n\nKeberuntungan kekayaan, kesehatan, cinta, bisnis, studi... Kami menganalisis semua keberuntungan yang akan datang kepada Anda tahun ini.\n\nBulan mana yang paling baik? Periode apa yang harus diwaspadai? Kapan peluang akan datang?\n\nKami membaca dengan akurat nasib tahun ini dari wajah Anda!'
      },
      thumbnail: 'Face_Fortune_Telling.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceFortuneTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 나의 전생 테스트
  if (slug === 'face-reincarnation') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-reincarnation',
      title: {
        ko: '얼굴로 보는 나의 전생',
        en: 'My Previous Life by Face Reading',
        ja: '顔で見る私の前世',
        'zh-CN': '从面相看我的前世',
        'zh-TW': '從面相看我的前世',
        vi: 'Tiền Kiếp Của Tôi Qua Khuôn Mặt',
        id: 'Kehidupan Masa Lalu Saya Melalui Wajah'
      },
      description: {
        ko: '당신은 전생에 누구였을까요?\n\n왕족? 전사? 예술가? 승려?\n당신의 얼굴에는 전생의 흔적이 남아있습니다.\n\n어느 시대를 살았을까요?\n어떤 삶을 살았을까요?\n왜 지금 이 모습으로 태어났을까요?\n이번 생은 몇 번째 생일까요?\n신비로운 전생 분석으로 당신의 영혼의 여정을 따라가 봅니다!',
        en: 'Who were you in your previous life?\n\nRoyalty? Warrior? Artist? Monk?\nYour face carries traces of your past life.\n\nWhich era did you live in?\nWhat kind of life did you lead?\nWhy were you born in this form?\nHow many times have you been reincarnated?\nFollow your soul\'s journey through mysterious past life analysis!',
        ja: 'あなたは前世で誰でしたか？\n\n王族？戦士？芸術家？僧侶？\nあなたの顔には前世の痕跡が残っています。\n\nどの時代を生きましたか？\nどんな人生を送りましたか？\nなぜ今この姿で生まれたのでしょうか？\n今回の人生は何回目の生ですか？\n神秘的な前世分析であなたの魂の旅を辿ります！',
        'zh-CN': '你的前世是谁？\n\n王族？战士？艺术家？僧侣？\n你的脸上留有前世的痕迹。\n\n你生活在哪个时代？\n你过着怎样的生活？\n为什么以现在的形态出生？\n这是第几世？\n通过神秘的前世分析，追溯你灵魂的旅程！',
        'zh-TW': '你的前世是誰？\n\n王族？戰士？藝術家？僧侶？\n你的臉上留有前世的痕跡。\n\n你生活在哪個時代？\n你過著怎樣的生活？\n為什麼以現在的形態出生？\n這是第幾世？\n通過神秘的前世分析，追溯你靈魂的旅程！',
        vi: 'Bạn là ai trong kiếp trước?\n\nHoàng tộc? Chiến binh? Nghệ sĩ? Tu sĩ?\nKhuôn mặt bạn mang dấu vết của kiếp trước.\n\nBạn sống ở thời đại nào?\nBạn đã sống cuộc đời như thế nào?\nTại sao bạn được sinh ra trong hình dạng này?\nĐây là kiếp thứ mấy của bạn?\nTheo dõi hành trình linh hồn của bạn qua phân tích kiếp trước thần bí!',
        id: 'Siapakah Anda dalam kehidupan sebelumnya?\n\nBangsawan? Prajurit? Seniman? Biksu?\nWajah Anda membawa jejak kehidupan masa lalu Anda.\n\nDi era mana Anda hidup?\nKehidupan seperti apa yang Anda jalani?\nMengapa Anda dilahirkan dalam bentuk ini?\nBerapa kali Anda telah bereinkarnasi?\nIkuti perjalanan jiwa Anda melalui analisis kehidupan masa lalu yang misterius!'
      },
      thumbnail: 'Face_Reincarnation.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceReincarnationTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 두뇌 퀴즈 테스트
  if (slug === 'brain-quiz-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'brain-quiz-test',
      title: {
        ko: '당신의 두뇌를 깨워줄 두뇌 자극 퀴즈!',
        en: 'Brain Stimulating Quiz to Wake Up Your Mind!',
        ja: 'あなたの脳を覚醒させる脳刺激クイズ！',
        'zh-CN': '唤醒你大脑的脑力刺激测验！',
        'zh-TW': '喚醒你大腦的腦力刺激測驗！',
        vi: 'Câu đố kích thích não bộ để đánh thức tâm trí bạn!',
        id: 'Kuis Stimulasi Otak untuk Membangunkan Pikiran Anda!'
      },
      description: {
        ko: '당신의 두뇌, 얼마나 깨어있나요? 지금 바로 테스트!\n\n논리력? 계산력? 언어 감각? 공간 지각? 당신의 두뇌는 어떤 영역이 가장 발달했을까요?\n\n친구들과 함께 도전하고 점수를 비교해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 5분이면 당신의 점수와 두뇌 유형을 알 수 있습니다!',
        en: 'How awake is your brain? Test it right now!\n\nLogic? Calculation? Language sense? Spatial perception? Which area of your brain is most developed?\n\nChallenge with friends and compare scores!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 5 minutes, you can know your score and brain type!',
        ja: 'あなたの脳はどのくらい覚醒していますか？今すぐテスト！\n\n論理力？計算力？言語感覚？空間知覚？あなたの脳のどの領域が最も発達しているでしょうか？\n\n友達と一緒に挑戦してスコアを比較してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった5分で、あなたのスコアと脳タイプがわかります！',
        'zh-CN': '你的大脑有多清醒？现在就来测试！\n\n逻辑力？计算力？语言感觉？空间知觉？你的大脑哪个领域最发达？\n\n和朋友一起挑战，比较分数！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需5分钟，你就能知道自己的分数和大脑类型！',
        'zh-TW': '你的大腦有多清醒？現在就來測試！\n\n邏輯力？計算力？語言感覺？空間知覺？你的大腦哪個領域最發達？\n\n和朋友一起挑戰，比較分數！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需5分鐘，你就能知道自己的分數和大腦類型！',
        vi: 'Bộ não của bạn có tỉnh táo đến mức nào? Hãy kiểm tra ngay bây giờ!\n\nLogic? Tính toán? Cảm giác ngôn ngữ? Nhận thức không gian? Lĩnh vực nào của não bộ bạn phát triển nhất?\n\nThử thách cùng bạn bè và so sánh điểm số!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 5 phút, bạn có thể biết điểm số và loại não bộ của mình!',
        id: 'Seberapa sadar otak Anda? Uji sekarang juga!\n\nLogika? Perhitungan? Rasa bahasa? Persepsi spasial? Area otak mana yang paling berkembang?\n\nTantang bersama teman dan bandingkan skor!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 5 menit, Anda bisa mengetahui skor dan tipe otak Anda!'
      },
      thumbnail: 'test_066_brain_quiz.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['Brain', 'Quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['Não bộ', 'Câu đố', 'IQ'],
        id: ['Otak', 'Kuis', 'IQ']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    return (
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Quiz',
              name: title,
              description: description,
              image: thumbnailUrl,
              url: canonicalUrl,
              author: {
                '@type': 'Organization',
                name: 'QuizOasis'
              },
              publisher: {
                '@type': 'Organization',
                name: 'QuizOasis',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://quizoasis-coral.vercel.app/logo.png'
                }
              },
              datePublished: '2024-01-01',
              dateModified: new Date().toISOString(),
              mainEntity: {
                '@type': 'Question',
                name: title,
                text: description
              }
            })
          }}
        />
        <BrainQuizTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={brainQuizQuestions}
          results={brainQuizResults}
          questionCount={brainQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </div>
    );
  }

  // 찰나의 순간 의사결정 테스트
  if (slug === 'quick-decision-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'quick-decision-test',
      title: {
        ko: '찰나의 순간, 당신의 의사 결정은?',
        en: 'In a split second, what is your decision?',
        ja: '刹那の瞬間、あなたの意思決定は？',
        'zh-CN': '刹那的瞬间，你的决定是什么？',
        'zh-TW': '剎那的瞬間，你的決定是什麼？',
        vi: 'Trong khoảnh khắc, quyết định của bạn là gì?',
        id: 'Dalam sekejap, apa keputusan Anda?'
      },
      description: {
        ko: '1초의 판단이 모든 것을 바꿉니다! 당신의 순발력은?\n갑작스러운 위기 상황, 예상치 못한 선택의 순간, 빠른 결정이 필요한 찰나...\n어떤 사람은 즉시 반응하고, 어떤 사람은 신중하게 고민하며, 어떤 사람은 얼어붙습니다.\n긴급 상황에서 당신은 어떻게 반응하나요? 빠른 판단력이 필요한 순간, 당신의 선택은?\n단 3분이면 당신의 의사결정 스타일과 순발력 수준을 발견할 수 있습니다!',
        en: 'A 1-second judgment changes everything! What is your quickness?\nSudden crisis situations, unexpected moments of choice, moments when quick decisions are needed...\nSome people react immediately, some think carefully, and some freeze.\nHow do you react in emergency situations? In moments when quick judgment is needed, what is your choice?\nJust 3 minutes to discover your decision-making style and quickness level!',
        ja: '1秒の判断がすべてを変えます！あなたの瞬発力は？\n突然の危機状況、予期しない選択の瞬間、迅速な決定が必要な刹那...\nある人は即座に反応し、ある人は慎重に悩み、ある人は凍りつきます。\n緊急事態であなたはどう反応しますか？迅速な判断力が必要な瞬間、あなたの選択は？\nたった3分であなたの意思決定スタイルと瞬発力レベルを発見できます！',
        'zh-CN': '1秒的判断改变一切！你的敏捷度如何？\n突然的危机情况、意想不到的选择时刻、需要快速决定的瞬间...\n有些人立即反应，有些人仔细思考，有些人冻结。\n在紧急情况下你如何反应？在需要快速判断的时刻，你的选择是什么？\n只需3分钟就能发现你的决策风格和敏捷度水平！',
        'zh-TW': '1秒的判斷改變一切！你的敏捷度如何？\n突然的危機情況、意想不到的選擇時刻、需要快速決定的瞬間...\n有些人立即反應，有些人仔細思考，有些人凍結。\n在緊急情況下你如何反應？在需要快速判斷的時刻，你的選擇是什麼？\n只需3分鐘就能發現你的決策風格和敏捷度水平！',
        vi: 'Một phán đoán 1 giây thay đổi mọi thứ! Sự nhanh nhẹn của bạn như thế nào?\nTình huống khủng hoảng đột ngột, khoảnh khắc lựa chọn bất ngờ, khoảnh khắc cần quyết định nhanh...\nMột số người phản ứng ngay lập tức, một số người suy nghĩ cẩn thận, và một số người đóng băng.\nBạn phản ứng như thế nào trong tình huống khẩn cấp? Trong những khoảnh khắc cần phán đoán nhanh, lựa chọn của bạn là gì?\nChỉ 3 phút để khám phá phong cách ra quyết định và mức độ nhanh nhẹn của bạn!',
        id: 'Penilaian 1 detik mengubah segalanya! Seberapa cepat Anda?\nSituasi krisis tiba-tiba, momen pilihan yang tak terduga, momen ketika keputusan cepat diperlukan...\nBeberapa orang bereaksi segera, beberapa berpikir hati-hati, dan beberapa membeku.\nBagaimana Anda bereaksi dalam situasi darurat? Dalam momen ketika penilaian cepat diperlukan, apa pilihan Anda?\nHanya 3 menit untuk menemukan gaya pengambilan keputusan dan tingkat kecepatan Anda!'
      },
      thumbnail: 'test_076_quick_decision.jpg',
      type: 'brain',
      play_count: 0,
      tags: {
        ko: ['두뇌', '의사결정'],
        en: ['Brain', 'Decision Making'],
        ja: ['脳', '意思決定'],
        'zh-CN': ['大脑', '决策'],
        'zh-TW': ['大腦', '決策'],
        vi: ['Não bộ', 'Ra quyết định'],
        id: ['Otak', 'Pengambilan Keputusan']
      }
    };

    return (
      <>
        <QuickDecisionTestClient
          locale={locale as Locale}
          slug={slug}
          title={test.title[locale] || test.title.ko}
          description={test.description?.[locale] || test.description?.ko || ''}
          questions={quickDecisionQuestions}
          results={quickDecisionResults}
          questionCount={quickDecisionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // 데이트 스타일 테스트
  if (slug === 'my-dating-style') {
    const test = await getTestBySlug(slug) || {
      slug: 'my-dating-style',
      title: {
        ko: '나에게 맞는 데이트 스타일은?',
        en: 'What is your dating style?',
        ja: 'あなたのデートスタイルは？',
        'zh-CN': '你的约会风格是什么？',
        'zh-TW': '你的約會風格是什麼？',
        vi: 'Phong cách hẹn hò của bạn là gì?',
        id: 'Apa gaya kencan Anda?'
      },
      description: {
        ko: '연애 상세 분석! 당신만의 데이트 스타일은? 완벽하게 준비된 데이트를 선호하나요? 즉흥적이고 자유로운 시간을 좋아하나요?',
        en: 'Detailed dating analysis! What is your dating style? Do you prefer perfectly prepared dates? Do you like spontaneous and free time?',
        ja: 'デート詳細分析！あなただけのデートスタイルは？完璧に準備されたデートを好みますか？即興的で自由な時間が好きですか？',
        'zh-CN': '详细约会分析！你的约会风格是什么？你喜欢完全准备好的约会吗？你喜欢自发自由的时间吗？',
        'zh-TW': '詳細約會分析！你的約會風格是什麼？你喜歡完全準備好的約會嗎？你喜歡自發自由的時間嗎？',
        vi: 'Phân tích chi tiết hẹn hò! Phong cách hẹn hò của bạn là gì? Bạn có thích những cuộc hẹn được chuẩn bị hoàn hảo không? Bạn có thích thời gian tự phát và tự do không?',
        id: 'Analisis kencan detail! Apa gaya kencan Anda? Apakah Anda lebih suka kencan yang disiapkan dengan sempurna? Apakah Anda suka waktu spontan dan bebas?'
      },
      thumbnail: 'test_221_dating_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['연애', '관계'],
        en: ['Love', 'Relationships'],
        ja: ['恋愛', '関係'],
        'zh-CN': ['恋爱', '关系'],
        'zh-TW': ['戀愛', '關係'],
        vi: ['Tình yêu', 'Mối quan hệ'],
        id: ['Cinta', 'Hubungan']
      }
    };

    return (
      <>
        <DatingStyleTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={datingStyleQuestions}
          results={datingStyleResults}
          questionCount={datingStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 계획형 vs 즉흥형 테스트
  if (slug === 'planner-vs-spontaneous-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'planner-vs-spontaneous-test',
      title: {
        ko: '나는 계획형일까? vs 즉흥형일까?',
        en: 'Am I a Planner or Spontaneous?',
        ja: '私は計画型か即興型か？',
        'zh-CN': '我是计划型还是即兴型？',
        'zh-TW': '我是計劃型還是即興型？',
        vi: 'Tôi là người lập kế hoạch hay tùy hứng?',
        id: 'Apakah saya Perencana atau Spontan?'
      },
      description: {
        ko: '미리 계획? 그때그때 결정? 당신의 스타일은?',
        en: 'Plan ahead? Decide on the spot? What is your style?',
        ja: '事前に計画？その時その時で決める？あなたのスタイルは？',
        'zh-CN': '提前计划？当场决定？你的风格是什么？',
        'zh-TW': '提前計劃？當場決定？你的風格是什麼？',
        vi: 'Lên kế hoạch trước? Quyết định tại chỗ? Phong cách của bạn là gì?',
        id: 'Rencanakan sebelumnya? Putuskan di tempat? Apa gaya Anda?'
      },
      thumbnail: 'test_219_planner_vs_spontaneous.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <PlannerVsSpontaneousTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={plannerVsSpontaneousQuestions}
          results={plannerVsSpontaneousResults}
          questionCount={plannerVsSpontaneousQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 반응 스타일 테스트
  if (slug === 'reaction-style-test') {
    const test = await getTestBySlug(slug) || {
      slug: 'reaction-style-test',
      title: {
        ko: '당신은 어떻게 반응할까요?',
        en: 'How do you react?',
        ja: 'あなたはどう反応しますか？',
        'zh-CN': '你会如何反应？',
        'zh-TW': '你會如何反應？',
        vi: 'Bạn phản ứng như thế nào?',
        id: 'Bagaimana Anda bereaksi?'
      },
      description: {
        ko: '반응 스타일 분석! 당신의 진짜 반응은?',
        en: 'Reaction style analysis! What is your real reaction?',
        ja: '反応スタイル分析！あなたの本当の反応は？',
        'zh-CN': '反应风格分析！你的真实反应是什么？',
        'zh-TW': '反應風格分析！你的真實反應是什麼？',
        vi: 'Phân tích phong cách phản ứng! Phản ứng thực sự của bạn là gì?',
        id: 'Analisis gaya reaksi! Apa reaksi asli Anda?'
      },
      thumbnail: 'test_225_reaction_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '심리'],
        en: ['Personality', 'Psychology'],
        ja: ['性格', '心理学'],
        'zh-CN': ['性格', '心理学'],
        'zh-TW': ['性格', '心理學'],
        vi: ['Tính cách', 'Tâm lý'],
        id: ['Kepribadian', 'Psikologi']
      }
    };

    return (
      <>
        <ReactionStyleTestClient
          locale={locale as Locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={reactionStyleQuestions}
          results={reactionStyleResults}
          questionCount={reactionStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 창업가 기질 테스트의 경우 Supabase에서 시도
  if (slug === 'entrepreneur-spirit-test') {
    const supabaseTest = await getTestBySlug(slug);
    
    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'entrepreneur-spirit-test',
      title: {
        ko: '당신에게 숨겨진 창업가 기질은?',
        en: 'What is your hidden entrepreneurial spirit?',
        ja: 'あなたに隠された起業家気質は？',
        'zh-CN': '你隐藏的企业家精神是什么？',
        'zh-TW': '你隱藏的企業家精神是什麼？',
        vi: 'Tinh thần khởi nghiệp ẩn giấu của bạn là gì?',
        id: 'Apa semangat kewirausahaan tersembunyi Anda?'
      },
      description: {
        ko: '당신 안에 숨어있는 CEO의 DNA를 발견하세요!',
        en: 'Discover the CEO DNA hidden within you!',
        ja: 'あなたの中に隠れているCEOのDNAを発見してください！',
        'zh-CN': '发现隐藏在你体内的CEO DNA！',
        'zh-TW': '發現隱藏在你體內的CEO DNA！',
        vi: 'Khám phá DNA CEO ẩn giấu trong bạn!',
        id: 'Temukan DNA CEO yang tersembunyi dalam diri Anda!'
      },
      thumbnail: 'test_050_entrepreneur_spirit.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['직업'],
        en: ['Career'],
        ja: ['職業'],
        'zh-CN': ['职业'],
        'zh-TW': ['職業'],
        vi: ['Nghề nghiệp'],
        id: ['Karier']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '창업가 기질 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 창업가 기질 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        
        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <EntrepreneurSpiritTestClient
          locale={locale as Locale}
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
      </>
    );
  }

  // Supabase에서 테스트 메타데이터만 가져오기 (빠른 로딩)
  const test = await getTestBySlug(slug);
  if (!test) {
    notFound();
  }

  // 로컬에서 테스트 데이터 가져오기
  let testData;
  if (slug === 'humor-code-test') {
    testData = {
      questions: humorCodeQuestions,
      results: humorCodeResults
    };
  } else if (slug === 'trustworthiness-test') {
    testData = {
      questions: trustQuestions,
      results: trustResults
    };
  } else if (slug === 'life-priorities-test') {
    testData = {
      questions: lifePrioritiesQuestions,
      results: lifePrioritiesResults
    };
  } else if (slug === 'empathy-level-test') {
    testData = {
      questions: empathyQuestions,
      results: empathyResults
    };
  } else if (slug === 'honesty-vs-consideration-test') {
    testData = {
      questions: honestyQuestions,
      results: honestyResults
    };
  } else if (slug === 'future-career-match-test') {
    testData = {
      questions: careerQuestions,
      results: careerResults
    };
  } else if (slug === 'job-strength-test') {
    testData = {
      questions: jobStrengthQuestions,
      results: jobStrengthResults
    };
  } else if (slug === 'work-values-test') {
    testData = {
      questions: workValuesQuestions,
      results: workValuesResults
    };
  } else if (slug === 'stress-relief-test') {
    testData = {
      questions: stressReliefQuestions,
      results: stressReliefResults
    };
  } else if (slug === 'investment-style-test') {
    testData = {
      questions: investmentStyleQuestions,
      results: investmentStyleResults
    };
  } else if (slug === 'time-efficiency-test') {
    testData = {
      questions: timeEfficiencyQuestions,
      results: timeEfficiencyResults
    };
  } else if (slug === 'left-right-brain-test') {
    testData = {
      questions: brainQuestions,
      results: brainResults
    };
  } else if (slug === 'concentration-level-test') {
    testData = {
      questions: concentrationQuestions,
      results: concentrationResults
    };
  } else if (slug === 'extreme-quiz') {
    testData = {
      questions: extremeQuizQuestions,
      results: extremeQuizResults
    };
  } else if (slug === 'mensa-extreme') {
    testData = {
      questions: mensaExtremeQuestions,
      results: mensaExtremeResults
    };
  } else {
    testData = getTestData(slug);
  }
  
  if (!testData) {
    notFound();
  }

  const title = test.title[locale] || test.title.ko || '';
  const description = test.description?.[locale] || test.description?.ko || '';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const thumbnailUrl = `${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${test.thumbnail}`;

  // JSON-LD Schema for SEO - Quiz
  const jsonLdQuiz = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: title,
    description: description,
    image: thumbnailUrl,
    url: `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'QuizOasis',
      url: 'https://quizoasis-coral.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'QuizOasis',
      logo: {
        '@type': 'ImageObject',
        url: 'https://quizoasis-coral.vercel.app/logo.png',
      },
    },
    inLanguage: locale,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/PlayAction',
      userInteractionCount: test.play_count || 0,
    },
    numberOfQuestions: testData.questions.length,
    educationalLevel: 'General',
    typicalAgeRange: '13-99',
    keywords: typeof test.tags === 'object' && !Array.isArray(test.tags)
      ? (test.tags[locale] || test.tags.ko || []).join(', ')
      : Array.isArray(test.tags) ? test.tags.join(', ') : '',
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://quizoasis-coral.vercel.app/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: test.category || 'Tests',
        item: `https://quizoasis-coral.vercel.app/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
      },
    ],
  };

  // 테스트 타입에 따라 다른 클라이언트 컴포넌트 렌더링
  let TestClient;
  
  if (slug === 'leadership-style-test') {
    TestClient = LeadershipTestClient;
  } else if (slug === 'obsession-test') {
    TestClient = ObsessionTestClient;
  } else if (slug === 'left-right-brain-test') {
    TestClient = BrainTestClient;
  } else if (slug === 'time-efficiency-test') {
    TestClient = TimeEfficiencyTestClient;
  } else if (test.type === 'stress') {
    TestClient = StressTestClient;
  } else if (test.type === 'dating') {
    if (slug === 'catch-lover-signals') TestClient = SignalTestClient;
    else if (slug === 'attachment-style-test') TestClient = AttachmentTestClient;
    else if (slug === 'friend-test') TestClient = FriendTestClient;
    else if (slug === 'conflict-response-test') TestClient = ConflictTestClient;
    else if (slug === 'love-flavor-test') TestClient = LoveFlavorTestClient;
    else if (slug === 'ideal-type-test') TestClient = IdealTypeTestClient;
    else if (slug === 'crush-success-test') TestClient = CrushTestClient;
    else if (slug === 'flirting-master-vs-beginner') TestClient = FlirtingTestClient;
    else if (slug === 'ideal-spouse-type') TestClient = SpouseTestClient;
    else if (slug === 'love-obstacles') TestClient = LoveObstaclesTestClient;
    else if (slug === 'jealousy-level-test') TestClient = JealousyTestClient;
    else if (slug === 'humor-code-test') TestClient = HumorCodeTestClient;
    else if (slug === 'trustworthiness-test') TestClient = TrustTestClient;
    else if (slug === 'life-priorities-test') TestClient = LifePrioritiesTestClient;
    else if (slug === 'empathy-level-test') TestClient = EmpathyTestClient;
    else if (slug === 'honesty-vs-consideration-test') TestClient = HonestyTestClient;
    else if (slug === 'my-dating-style') TestClient = DatingStyleTestClient;
    else if (slug === 'reaction-style-test') TestClient = ReactionStyleTestClient;
    else if (slug === 'future-career-match-test') TestClient = CareerTestClient;
    else if (slug === 'job-strength-test') TestClient = JobStrengthTestClient;
    else if (slug === 'work-values-test') TestClient = WorkValuesTestClient;
    else if (slug === 'stress-relief-test') TestClient = StressReliefTestClient;
    else if (slug === 'entrepreneur-spirit-test') TestClient = EntrepreneurSpiritTestClient;
    else TestClient = DatingTestClient;
  } else if (test.type === 'career') {
    if (slug === 'future-career-match-test') TestClient = CareerTestClient;
    else if (slug === 'job-strength-test') TestClient = JobStrengthTestClient;
    else if (slug === 'work-values-test') TestClient = WorkValuesTestClient;
    else if (slug === 'stress-relief-test') TestClient = StressReliefTestClient;
    else if (slug === 'investment-style-test') TestClient = InvestmentStyleTestClient;
    else if (slug === 'entrepreneur-spirit-test') TestClient = EntrepreneurSpiritTestClient;
    else TestClient = CareerTestClient;
  } else if (test.type === 'brain') {
    if (slug === 'left-right-brain-test') TestClient = BrainTestClient;
    else if (slug === 'concentration-level-test') TestClient = ConcentrationTestClient;
    else TestClient = BrainTestClient;
  } else {
    TestClient = MBTITestClient;
  }

  // 디버깅을 위한 콘솔 로그
  console.log('Test routing debug:', {
    slug,
    testType: test.type,
    testClient: TestClient.name,
    isBrainTest: TestClient === BrainTestClient
  });

  return (
    <>
      {/* JSON-LD Schema - Quiz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
      />
      
      {/* JSON-LD Schema - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <TestClient
        locale={locale as Locale}
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
    </>
  );
}