import { createClient } from '@supabase/supabase-js';
import { cache } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
  global: {
    fetch: (url, options = {}) => {
      return fetch(url, {
        ...options,
        signal: AbortSignal.timeout(8000), // 8초 타임아웃
      });
    },
  },
});

const TEST_LIST_COLUMNS = 'id, slug, title, thumbnail, tags, play_count, created_at, badge_type, category';
const HUMA_QUIZ_COLUMNS = 'id, slug, title, description';

export type HumaQuizRow = {
  id: number;
  slug: string;
  title: Record<string, string> | string;
  description?: Record<string, string> | string | null;
};

/**
 * HUMA 영상 콘텐츠 sync용 퀴즈 목록 (title·description 포함)
 */
export async function getTestsForHumaContent(): Promise<HumaQuizRow[]> {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select(HUMA_QUIZ_COLUMNS)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[huma-quizzes] Error fetching tests:', error);
      return [];
    }

    if (!data || !Array.isArray(data)) {
      return [];
    }

    return data as HumaQuizRow[];
  } catch (error) {
    console.error('[huma-quizzes] Network error fetching tests:', error);
    return [];
  }
}

/**
 * 목록/검색/추천용 테스트 조회
 * 상세 설명 JSON은 제외해서 Supabase Egress를 줄입니다.
 */
export async function getTestsForList() {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select(TEST_LIST_COLUMNS)
      .order('created_at', { ascending: false });

    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error fetching tests for list:', error);
      }
      return getFallbackTests();
    }

    if (!data || !Array.isArray(data)) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Invalid list data format from Supabase');
      }
      return getFallbackTests();
    }

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Network error fetching tests for list:', error);
    }
    return getFallbackTests();
  }
}

/**
 * 테스트 목록 조회 (전체 row — 서버 전용 권장, 클라이언트는 API/훅 사용)
 */
let clientTestsCache: { data: unknown[]; time: number } | null = null;
let clientTestsInflight: Promise<unknown[]> | null = null;
const CLIENT_TESTS_CACHE_MS = 60_000;

async function fetchTestsFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select('*');

    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error fetching tests:', error);
      }
      return getFallbackTests();
    }

    if (!data || !Array.isArray(data)) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Invalid data format from Supabase');
      }
      return getFallbackTests();
    }

    const specificSlugs = ['honest-facial-evaluation', 'face-psych-state', 'face-occupations'];
    const existingSlugs = new Set(data.map((t: { slug?: string }) => t?.slug).filter(Boolean));
    const missingSlugs = specificSlugs.filter((slug) => !existingSlugs.has(slug));

    if (missingSlugs.length > 0) {
      const specificQueries = missingSlugs.map((slug) =>
        supabase.from('tests').select('*').eq('slug', slug).single()
      );

      const specificResults = await Promise.allSettled(specificQueries);

      specificResults.forEach((result) => {
        if (result.status === 'fulfilled') {
          const { data: specificData, error: specificError } = result.value as {
            data?: unknown;
            error?: unknown;
          };
          if (!specificError && specificData) {
            data.push(specificData);
          }
        }
      });
    }

    data.sort((a: { created_at?: string }, b: { created_at?: string }) => {
      const getTime = (test: { created_at?: string }) =>
        test.created_at ? new Date(test.created_at).getTime() : 0;
      return getTime(b) - getTime(a);
    });

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Network error fetching tests:', error);
    }
    return getFallbackTests();
  }
}

export async function getTests() {
  if (typeof window !== 'undefined') {
    const now = Date.now();
    if (clientTestsCache && now - clientTestsCache.time < CLIENT_TESTS_CACHE_MS) {
      return clientTestsCache.data;
    }
    if (!clientTestsInflight) {
      clientTestsInflight = fetchTestsFromSupabase().finally(() => {
        clientTestsInflight = null;
      });
    }
    const data = (await clientTestsInflight) as unknown[];
    clientTestsCache = { data, time: Date.now() };
    return data;
  }

  return fetchTestsFromSupabase();
}

function getFallbackTests() {
  return [
    {
      id: 42,
      slug: 'honesty-vs-consideration-test',
      title: {
        ko: '솔직함과 배려 중 무엇을 더 중요하게?',
        en: 'What do you value more: Honesty or Consideration?',
        ja: '正直さと配慮、どちらをより重要にしますか？',
        'zh-CN': '诚实和体贴，你更重视哪个？',
        'zh-TW': '誠實和體貼，你更重視哪個？',
        vi: 'Thành thật và Quan tâm, bạn coi trọng cái nào hơn?',
        id: 'Kejujuran dan Pertimbangan, mana yang lebih Anda hargai?'
      },
      description: {
        ko: '진실을 말할까, 마음을 지킬까?\n솔직하게 말하는 게 진짜 친구지!\n배려 없는 솔직함은 그냥 폭력이야.\n어떤 사람은 진실이 최고라고 생각하고,\n어떤 사람은 마음을 다치지 않게 하는 게 우선입니다.\n당신은 솔직함과 배려 중 무엇을 더 중시하나요?\n소요 시간 단 2분! 빠르게 직관으로 선택하세요 ⚖️',
        en: 'Tell the truth or protect feelings?\nHonest speaking is true friendship!\nHonesty without consideration is just violence.\nSome people think truth is the best,\nSome people prioritize not hurting feelings.\nWhat do you value more: honesty or temperation?\nTakes only 2 minutes! Choose quickly and intuitively ⚖️',
        ja: '真実を話すか、心を守るか？\n正直に話すのが本当の友達！\n配慮のない正直さはただの暴力です。\n真実が最高だと思う人もいれば、\n心を傷つけないことを優先する人もいます。\n正直さと配慮、どちらをより重要にしますか？\n所要時間わずか2分！直感的に素早く選択してください ⚖️',
        'zh-CN': '说真话还是保护感情？\n诚实说话才是真正的朋友！\n没有体贴的诚实就是暴力。\n有人认为真理是最好的，\n有人优先考虑不伤害感情。\n诚实和体贴，你更重视哪个？\n只需2分钟！快速直观地选择 ⚖️',
        'zh-TW': '說真話還是保護感情？\n誠實說話才是真正的朋友！\n沒有體貼的誠實就是暴力。\n有人認為真理是最好的，\n有人優先考慮不傷害感情。\n誠實和體貼，你更重視哪個？\n只需2分鐘！快速直觀地選擇 ⚖️',
        vi: 'Nói sự thật hay bảo vệ cảm xúc?\nNói thành thật mới là bạn thật!\nThành thật không có sự quan tâm chỉ là bạo lực.\nCó người nghĩ sự thật là tốt nhất,\nCó người ưu tiên không làm tổn thương cảm xúc.\nThành thật và Quan tâm, bạn coi trọng cái nào hơn?\nChỉ mất 2 phút! Chọn nhanh và trực quan ⚖️',
        id: 'Berkata jujur atau melindungi perasaan?\nBerbicara jujur adalah persahabatan sejati!\nKejujuran tanpa pertimbangan hanyalah kekerasan.\nBeberapa orang berpikir kebenaran adalah yang terbaik,\nBeberapa orang memprioritaskan tidak menyakiti perasaan.\nKejujuran dan Pertimbangan, mana yang lebih Anda hargai?\nHanya butuh 2 menit! Pilih dengan cepat dan intuitif ⚖️'
      },
      thumbnail: 'test_045_honesty_vs_consideration.jpg',
      play_count: 0,
      type: 'dating',
      category: 'love',
      tags: {
        ko: ['소통', '관계'],
        en: ['Communication', 'Relationships'],
        ja: ['コミュニケーション', '関係'],
        'zh-CN': ['沟通', '关系'],
        'zh-TW': ['溝通', '關係'],
        vi: ['Giao tiếp', 'Mối quan hệ'],
        id: ['Komunikasi', 'Hubungan']
      }
    },
    {
      id: 33,
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
      play_count: 12,
      type: 'dating',
      category: 'love',
      tags: {
        ko: ['연애', '감정', '회복'],
        en: ['Love', 'Emotion', 'Recovery'],
        ja: ['恋愛', '感情', '回復'],
        'zh-CN': ['恋爱', '情感', '恢复'],
        'zh-TW': ['戀愛', '情感', '恢復'],
        vi: ['Tình yêu', 'Cảm xúc', 'Phục hồi'],
        id: ['Cinta', 'Emosi', 'Pemulihan']
      }
    }
  ];
}

/**
 * 특정 테스트 조회 (내부 함수 - 실제 데이터베이스 쿼리)
 */
async function _getTestBySlugInternal(slug: string) {
  try {
    // Promise.race를 사용하여 5초 내에 응답이 없으면 폴백 데이터 반환
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 5000)
    );
    
    const fetchPromise = supabase
      .from('tests')
      .select('*')
      .eq('slug', slug)
      .single();

    const { data, error } = await Promise.race([fetchPromise, timeoutPromise]) as any;

    if (error) {
      console.error('Error fetching test by slug:', error);
      return getFallbackTestBySlug(slug);
    }

    return data;
  } catch (error) {
    console.error('Network error fetching test by slug:', error);
    return getFallbackTestBySlug(slug);
  }
}

/**
 * 특정 테스트 조회 (React cache로 감싸서 같은 요청 내 중복 호출 방지)
 * generateMetadata와 메인 컴포넌트에서 동시에 호출해도 한 번만 쿼리 실행
 */
export const getTestBySlug = cache(_getTestBySlugInternal);

function getFallbackTestBySlug(slug: string) {
  // Supabase 연결 실패 시 더미 데이터 반환
  if (slug === 'honesty-vs-consideration-test') {
    return {
      id: 42,
      slug: 'honesty-vs-consideration-test',
      title: {
        ko: '솔직함과 배려 중 무엇을 더 중요하게?',
        en: 'What do you value more: Honesty or Consideration?',
        ja: '正直さと配慮、どちらをより重要にしますか？',
        'zh-CN': '诚实和体贴，你更重视哪个？',
        'zh-TW': '誠實和體貼，你更重視哪個？',
        vi: 'Thành thật và Quan tâm, bạn coi trọng cái nào hơn?',
        id: 'Kejujuran dan Pertimbangan, mana yang lebih Anda hargai?'
      },
      description: {
        ko: '진실을 말할까, 마음을 지킬까?\n솔직하게 말하는 게 진짜 친구지!\n배려 없는 솔직함은 그냥 폭력이야.\n어떤 사람은 진실이 최고라고 생각하고,\n어떤 사람은 마음을 다치지 않게 하는 게 우선입니다.\n당신은 솔직함과 배려 중 무엇을 더 중시하나요?\n소요 시간 단 2분! 빠르게 직관으로 선택하세요 ⚖️',
        en: 'Tell the truth or protect feelings?\nHonest speaking is true friendship!\nHonesty without consideration is just violence.\nSome people think truth is the best,\nSome people prioritize not hurting feelings.\nWhat do you value more: honesty or consideration?\nTakes only 2 minutes! Choose quickly and intuitively ⚖️',
        ja: '真実を話すか、心を守るか？\n正直に話すのが本当の友達！\n配慮のない正直さはただの暴力です。\n真実が最高だと思う人もいれば、\n心を傷つけないことを優先する人もいます。\n正直さと配慮、どちらをより重要にしますか？\n所要時間わずか2分！直感的に素早く選択してください ⚖️',
        'zh-CN': '说真话还是保护感情？\n诚实说话才是真正的朋友！\n没有体贴的诚实就是暴力。\n有人认为真理是最好的，\n有人优先考虑不伤害感情。\n诚实和体贴，你更重视哪个？\n只需2分钟！快速直观地选择 ⚖️',
        'zh-TW': '說真話還是保護感情？\n誠實說話才是真正的朋友！\n沒有體貼的誠實就是暴力。\n有人認為真理是最好的，\n有人優先考慮不傷害感情。\n誠實和體貼，你更重視哪個？\n只需2分鐘！快速直觀地選擇 ⚖️',
        vi: 'Nói sự thật hay bảo vệ cảm xúc?\nNói thành thật mới là bạn thật!\nThành thật không có sự quan tâm chỉ là bạo lực.\nCó người nghĩ sự thật là tốt nhất,\nCó người ưu tiên không làm tổn thương cảm xúc.\nThành thật và Quan tâm, bạn coi trọng cái nào hơn?\nChỉ mất 2 phút! Chọn nhanh và trực quan ⚖️',
        id: 'Berkata jujur atau melindungi perasaan?\nBerbicara jujur adalah persahabatan sejati!\nKejujuran tanpa pertimbangan hanyalah kekerasan.\nBeberapa orang berpikir kebenaran adalah yang terbaik,\nBeberapa orang memprioritaskan tidak menyakiti perasaan.\nKejujuran dan Pertimbangan, mana yang lebih Anda hargai?\nHanya butuh 2 menit! Pilih dengan cepat dan intuitif ⚖️'
      },
      thumbnail: 'test_045_honesty_vs_consideration.jpg',
      play_count: 0,
      type: 'dating',
      category: 'love',
      tags: {
        ko: ['소통', '관계'],
        en: ['Communication', 'Relationships'],
        ja: ['コミュニケーション', '関係'],
        'zh-CN': ['沟通', '关系'],
        'zh-TW': ['溝通', '關係'],
        vi: ['Giao tiếp', 'Mối quan hệ'],
        id: ['Komunikasi', 'Hubungan']
      }
    };
  }
  
  if (slug === 'breakup-coping-test') {
    return {
      id: 33,
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
      play_count: 12,
      type: 'dating',
      category: 'love',
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
  }
  return null;
}

/**
 * 플레이 횟수 증가
 */
export async function incrementPlayCount(slug: string) {
  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 3000)
    );

    const incrementPromise = fetch('/api/tests/play-count', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    });

    const response = (await Promise.race([incrementPromise, timeoutPromise])) as Response;

    if (!response.ok) {
      console.error('Error incrementing play count:', response.status);
    }
  } catch (error) {
    console.error('Network error incrementing play count:', error);
  }
}

/**
 * Leaderboard - World Best Top 10 조회
 * 낮은 점수가 좋은 테스트 (예: 시간)는 ascending: true, 높은 점수가 좋은 테스트는 ascending: false
 */
export async function getLeaderboardTop10(testSlug: string) {
  try {
    // 낮은 점수가 좋은 테스트 목록 (시간 기반 등)
    const lowerIsBetterTests = ['phase2_speed_click_test'];
    const ascending = lowerIsBetterTests.includes(testSlug);
    
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('test_slug', testSlug)
      .order('score', { ascending })
      .order('level', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Network error fetching leaderboard:', error);
    return [];
  }
}

/**
 * Leaderboard - 점수 기록 (기존보다 좋은 점수면만 기록)
 * 낮은 점수가 좋은 테스트는 낮은 점수일수록, 높은 점수가 좋은 테스트는 높은 점수일수록 기록
 */
export async function submitLeaderboardScore(
  testSlug: string,
  playerName: string,
  level: number,
  score: number
) {
  try {
    // 낮은 점수가 좋은 테스트 목록 (시간 기반 등)
    const lowerIsBetterTests = ['phase2_speed_click_test'];
    const isLowerBetter = lowerIsBetterTests.includes(testSlug);
    
    // 먼저 Top 10을 확인하여 최소 점수 확인
    const top10 = await getLeaderboardTop10(testSlug);
    
    // Top 10이 가득 차 있고, 현재 점수가 10위보다 좋지 않으면 기록하지 않음
    if (top10.length >= 10) {
      const lastScore = top10[top10.length - 1];
      if (isLowerBetter) {
        // 낮은 점수가 좋은 경우: 현재 점수가 마지막 점수보다 높으면 기록하지 않음
        if (score > lastScore.score || (score === lastScore.score && level < lastScore.level)) {
          return { success: false, message: 'Not good enough score' };
        }
      } else {
        // 높은 점수가 좋은 경우: 현재 점수가 마지막 점수보다 낮으면 기록하지 않음
        if (score < lastScore.score || (score === lastScore.score && level < lastScore.level)) {
          return { success: false, message: 'Not high enough score' };
        }
      }
    }

    // 기존보다 좋은 점수면 기록
    const { data, error } = await supabase
      .from('leaderboard')
      .insert({
        test_slug: testSlug,
        player_name: playerName.substring(0, 20), // 최대 20자리
        level: level,
        score: score
      })
      .select()
      .single();

    if (error) {
      console.error('Error submitting leaderboard score:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Network error submitting leaderboard score:', error);
    return { success: false, error };
  }
}