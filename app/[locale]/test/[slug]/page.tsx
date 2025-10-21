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
const FriendTestClient = dynamic(() => import('@/components/FriendTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConflictTestClient = dynamic(() => import('@/components/ConflictTestClient'), {
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
const ApologyTestClient = dynamic(() => import('@/components/ApologyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BreakupTestClient = dynamic(() => import('@/components/BreakupTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const JealousyTestClient = dynamic(() => import('@/components/JealousyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FirstImpressionTestClient = dynamic(() => import('@/components/FirstImpressionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EmpathyTestClient = dynamic(() => import('@/components/EmpathyTestClient'), {
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
        text: '애착 스타일 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 애착 스타일 분석'
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
        
        <FriendTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
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
  } else if (slug === 'trustworthiness-level-test') {
    testData = {
      questions: trustQuestions,
      results: trustResults
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
  const TestClient = 
    test.type === 'stress' ? StressTestClient :
    test.type === 'dating' ? (slug === 'catch-lover-signals' ? SignalTestClient : slug === 'attachment-style-test' ? AttachmentTestClient : slug === 'friend-test' ? FriendTestClient : slug === 'conflict-response-test' ? ConflictTestClient : slug === 'love-flavor-test' ? LoveFlavorTestClient : slug === 'ideal-type-test' ? IdealTypeTestClient : slug === 'crush-success-test' ? CrushTestClient : slug === 'flirting-master-vs-beginner' ? FlirtingTestClient : slug === 'ideal-spouse-type' ? SpouseTestClient : slug === 'love-obstacles' ? LoveObstaclesTestClient : slug === 'jealousy-level-test' ? JealousyTestClient : slug === 'humor-code-test' ? HumorCodeTestClient : slug === 'trustworthiness-level-test' ? TrustTestClient : slug === 'empathy-level-test' ? EmpathyTestClient : slug === 'honesty-vs-consideration-test' ? HonestyTestClient : slug === 'future-career-match-test' ? CareerTestClient : slug === 'job-strength-test' ? JobStrengthTestClient : slug === 'work-values-test' ? WorkValuesTestClient : DatingTestClient) :
    MBTITestClient;

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