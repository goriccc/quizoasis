import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * 테스트 목록 조회
 */
export async function getTests() {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tests:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Network error fetching tests:', error);
    // Supabase 연결 실패 시 더미 데이터 반환
    return [
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
}

/**
 * 특정 테스트 조회
 */
export async function getTestBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching test by slug:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Network error fetching test by slug:', error);
    // Supabase 연결 실패 시 더미 데이터 반환
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
}

/**
 * 플레이 횟수 증가
 */
export async function incrementPlayCount(slug: string) {
  try {
    const { error } = await supabase.rpc('increment_play_count', {
      test_slug: slug,
    });

    if (error) {
      console.error('Error incrementing play count:', error);
    }
  } catch (error) {
    console.error('Network error incrementing play count:', error);
    // Supabase 연결 실패 시 조용히 무시
  }
}


