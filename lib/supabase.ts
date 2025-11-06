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

/**
 * 테스트 목록 조회
 */
export async function getTests() {
  try {
    // Supabase 클라이언트는 이미 8초 타임아웃이 설정되어 있음
    // AbortSignal.timeout으로 자동 처리되므로 Promise.race 불필요
    
    // 전체 테스트 조회 (먼저 실행)
    const { data, error } = await supabase
      .from('tests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error fetching tests:', error);
      }
      return getFallbackTests();
    }

    // 데이터가 없거나 빈 배열인 경우 확인
    if (!data || !Array.isArray(data)) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Invalid data format from Supabase');
      }
      return getFallbackTests();
    }

    // 특정 테스트들이 누락되었는지 확인 (조건부 개별 조회)
    const specificSlugs = ['honest-facial-evaluation', 'face-psych-state', 'face-occupations'];
    const existingSlugs = new Set(data.map((t: any) => t?.slug).filter(Boolean));
    const missingSlugs = specificSlugs.filter(slug => !existingSlugs.has(slug));

    // 누락된 slug가 있을 때만 개별 조회 (병렬 실행으로 최적화)
    if (missingSlugs.length > 0) {
      const specificQueries = missingSlugs.map(slug =>
        supabase
          .from('tests')
          .select('*')
          .eq('slug', slug)
          .single()
      );

      // 병렬 실행으로 성능 최적화 (순차 실행 대비 약 3배 빠름)
      const specificResults = await Promise.allSettled(specificQueries);
      
      specificResults.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const { data: specificData, error: specificError } = result.value as any;
          if (!specificError && specificData) {
            data.push(specificData);
          }
        }
      });
    }

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Network error fetching tests:', error);
    }
    return getFallbackTests();
  }
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
    // Promise.race를 사용하여 3초 내에 응답이 없으면 조용히 무시
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 3000)
    );
    
    const incrementPromise = supabase.rpc('increment_play_count', {
      test_slug: slug,
    });

    const { error } = await Promise.race([incrementPromise, timeoutPromise]) as any;

    if (error) {
      console.error('Error incrementing play count:', error);
    }
  } catch (error) {
    console.error('Network error incrementing play count:', error);
    // Supabase 연결 실패 시 조용히 무시
  }
}