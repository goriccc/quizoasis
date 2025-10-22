// 도전 잠재력 테스트 데이터

export interface ChallengePotentialQuestion {
  id: number;
  question: Record<string, string>;
  options: ChallengePotentialOption[];
}

export interface ChallengePotentialOption {
  text: Record<string, string>;
  scores: Record<string, number>;
}

export interface ChallengePotentialResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Array<Record<string, string>>;
  cons: Array<Record<string, string>>;
  advice: Record<string, string>;
  successRate: Record<string, string>;
  recommendedFields: Record<string, string>;
  compatibleTypes: Array<Record<string, string>>;
  carefulTypes: Array<Record<string, string>>;
}

// 질문 데이터 (1-5번)
const challengePotentialQuestionsPart1: ChallengePotentialQuestion[] = [
  {
    id: 1,
    question: {
      ko: "전혀 해본 적 없는 새로운 일을 제안받았을 때?",
      en: "When you're offered something completely new that you've never done before?",
      ja: "全くやったことのない新しいことを提案された時？",
      "zh-CN": "当你被提议做完全没做过的新事情时？",
      "zh-TW": "當你被提議做完全沒做過的新事情時？",
      vi: "Khi bạn được đề xuất làm điều gì đó hoàn toàn mới mà chưa từng làm?",
      id: "Ketika Anda ditawari sesuatu yang benar-benar baru yang belum pernah Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "\"재미있겠는데요!\" 즉시 수락",
          en: "\"Sounds fun!\" Accept immediately",
          ja: "「面白そう！」即座に受諾",
          "zh-CN": "\"听起来有趣！\"立即接受",
          "zh-TW": "\"聽起來有趣！\"立即接受",
          vi: "\"Nghe có vẻ thú vị!\" Chấp nhận ngay lập tức",
          id: "\"Kedengarannya menyenangkan!\" Terima segera"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "\"어떤 일인지 자세히 알려주세요\" 정보 수집 후 결정",
          en: "\"Please tell me more details\" Gather information then decide",
          ja: "「どんな仕事か詳しく教えてください」情報収集後に決定",
          "zh-CN": "\"请告诉我更多详情\"收集信息后决定",
          "zh-TW": "\"請告訴我更多詳情\"收集資訊後決定",
          vi: "\"Hãy cho tôi biết chi tiết hơn\" Thu thập thông tin rồi quyết định",
          id: "\"Tolong beri tahu detailnya\" Kumpulkan informasi lalu putuskan"
        },
        scores: { Type1: 0, Type2: 8, Type3: 0, Type4: 0, Type5: 2, Type6: 0 }
      },
      {
        text: {
          ko: "\"제가 할 수 있을까요?\" 걱정이 앞섬",
          en: "\"Can I really do it?\" Worry comes first",
          ja: "「私にできるでしょうか？」心配が先に立つ",
          "zh-CN": "\"我真的能做到吗？\"担心先来",
          "zh-TW": "\"我真的能做到嗎？\"擔心先來",
          vi: "\"Tôi có thể làm được không?\" Lo lắng đến trước",
          id: "\"Bisakah saya melakukannya?\" Kekhawatiran datang duluan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "\"배울 수 있다면 해보겠습니다\" 성장 기회로 인식",
          en: "\"If I can learn, I'll try it\" See it as growth opportunity",
          ja: "「学べるならやってみます」成長の機会として認識",
          "zh-CN": "\"如果能学到东西，我会尝试\"视为成长机会",
          "zh-TW": "\"如果能學到東西，我會嘗試\"視為成長機會",
          vi: "\"Nếu có thể học được thì tôi sẽ thử\" Coi là cơ hội phát triển",
          id: "\"Jika bisa belajar, saya akan coba\" Lihat sebagai kesempatan berkembang"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "실패에 대한 당신의 생각은?",
      en: "What do you think about failure?",
      ja: "失敗についてあなたの考えは？",
      "zh-CN": "你对失败的看法是？",
      "zh-TW": "你對失敗的看法是？",
      vi: "Bạn nghĩ gì về thất bại?",
      id: "Apa pendapat Anda tentang kegagalan?"
    },
    options: [
      {
        text: {
          ko: "실패도 경험! 다시 도전하면 됨",
          en: "Failure is also experience! Just try again",
          ja: "失敗も経験！また挑戦すればいい",
          "zh-CN": "失败也是经验！再挑战就行",
          "zh-TW": "失敗也是經驗！再挑戰就行",
          vi: "Thất bại cũng là kinh nghiệm! Cứ thử lại",
          id: "Kegagalan juga pengalaman! Coba lagi saja"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "실패 확률을 낮추기 위해 철저히 준비",
          en: "Prepare thoroughly to reduce failure probability",
          ja: "失敗確率を下げるために徹底的に準備",
          "zh-CN": "彻底准备以降低失败概率",
          "zh-TW": "徹底準備以降低失敗概率",
          vi: "Chuẩn bị kỹ lưỡng để giảm xác suất thất bại",
          id: "Persiapkan dengan matang untuk mengurangi kemungkinan gagal"
        },
        scores: { Type1: 0, Type2: 8, Type3: 0, Type4: 0, Type5: 2, Type6: 0 }
      },
      {
        text: {
          ko: "실패는 최대한 피하고 싶음",
          en: "Want to avoid failure as much as possible",
          ja: "失敗は最大限避けたい",
          "zh-CN": "尽可能避免失败",
          "zh-TW": "盡可能避免失敗",
          vi: "Muốn tránh thất bại càng nhiều càng tốt",
          id: "Ingin menghindari kegagalan sebanyak mungkin"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "실패에서 배우는 게 많다고 생각",
          en: "Think there's much to learn from failure",
          ja: "失敗から学ぶことが多いと思う",
          "zh-CN": "认为从失败中学到很多",
          "zh-TW": "認為從失敗中學到很多",
          vi: "Nghĩ rằng có nhiều thứ để học từ thất bại",
          id: "Berpikir ada banyak yang bisa dipelajari dari kegagalan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "편안한 현재 상황 vs 불확실하지만 더 나은 기회, 당신의 선택은?",
      en: "Comfortable current situation vs uncertain but better opportunity, your choice?",
      ja: "快適な現在の状況 vs 不確実だがより良い機会、あなたの選択は？",
      "zh-CN": "舒适的现状 vs 不确定但更好的机会，你的选择是？",
      "zh-TW": "舒適的現狀 vs 不確定但更好的機會，你的選擇是？",
      vi: "Tình huống hiện tại thoải mái vs cơ hội không chắc chắn nhưng tốt hơn, lựa chọn của bạn?",
      id: "Situasi nyaman saat ini vs peluang tidak pasti tapi lebih baik, pilihan Anda?"
    },
    options: [
      {
        text: {
          ko: "당연히 새로운 기회! 후회하기 싫음",
          en: "Of course the new opportunity! Don't want to regret",
          ja: "当然新しい機会！後悔したくない",
          "zh-CN": "当然是新机会！不想后悔",
          "zh-TW": "當然是新機會！不想後悔",
          vi: "Tất nhiên là cơ hội mới! Không muốn hối hận",
          id: "Tentu saja peluang baru! Tidak ingin menyesal"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "성공 가능성을 분석한 후 결정",
          en: "Analyze success probability then decide",
          ja: "成功可能性を分析してから決定",
          "zh-CN": "分析成功可能性后决定",
          "zh-TW": "分析成功可能性後決定",
          vi: "Phân tích khả năng thành công rồi quyết định",
          id: "Analisis kemungkinan sukses lalu putuskan"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 2, Type6: 0 }
      },
      {
        text: {
          ko: "지금이 편안한데 굳이?",
          en: "Current situation is comfortable, why bother?",
          ja: "今が快適なのにわざわざ？",
          "zh-CN": "现在很舒适，何必呢？",
          "zh-TW": "現在很舒適，何必呢？",
          vi: "Hiện tại thoải mái rồi, cần gì phải thay đổi?",
          id: "Sekarang sudah nyaman, kenapa repot?"
        },
        scores: { Type1: 0, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "성장할 수 있다면 도전",
          en: "If I can grow, I'll take the challenge",
          ja: "成長できるなら挑戦",
          "zh-CN": "如果能成长就挑战",
          "zh-TW": "如果能成長就挑戰",
          vi: "Nếu có thể phát triển thì thử thách",
          id: "Jika bisa berkembang, saya akan menantang"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "여행지에서 당신의 스타일은?",
      en: "What's your style when traveling?",
      ja: "旅行先でのあなたのスタイルは？",
      "zh-CN": "旅行时你的风格是？",
      "zh-TW": "旅行時你的風格是？",
      vi: "Phong cách của bạn khi du lịch là gì?",
      id: "Apa gaya Anda saat bepergian?"
    },
    options: [
      {
        text: {
          ko: "계획 없이 즉흥적으로 모험",
          en: "Adventure spontaneously without planning",
          ja: "計画なしで即興的に冒険",
          "zh-CN": "没有计划即兴冒险",
          "zh-TW": "沒有計劃即興冒險",
          vi: "Phiêu lưu ngẫu hứng không có kế hoạch",
          id: "Petualangan spontan tanpa rencana"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "주요 명소는 계획, 나머지는 자유롭게",
          en: "Plan main attractions, be free with the rest",
          ja: "主要な名所は計画、残りは自由に",
          "zh-CN": "主要景点有计划，其余自由",
          "zh-TW": "主要景點有計劃，其餘自由",
          vi: "Lên kế hoạch cho các điểm tham quan chính, tự do với phần còn lại",
          id: "Rencanakan atraksi utama, bebas dengan sisanya"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 2, Type6: 0 }
      },
      {
        text: {
          ko: "안전하고 익숙한 곳 위주",
          en: "Focus on safe and familiar places",
          ja: "安全で馴染みのある場所中心",
          "zh-CN": "专注于安全和熟悉的地方",
          "zh-TW": "專注於安全和熟悉的地方",
          vi: "Tập trung vào những nơi an toàn và quen thuộc",
          id: "Fokus pada tempat aman dan familiar"
        },
        scores: { Type1: 0, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "새로운 문화를 배울 수 있는 곳",
          en: "Places where I can learn new cultures",
          ja: "新しい文化を学べる場所",
          "zh-CN": "能学习新文化的地方",
          "zh-TW": "能學習新文化的地方",
          vi: "Những nơi có thể học văn hóa mới",
          id: "Tempat di mana saya bisa belajar budaya baru"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "새로운 취미를 시작할 때?",
      en: "When starting a new hobby?",
      ja: "新しい趣味を始める時？",
      "zh-CN": "开始新爱好时？",
      "zh-TW": "開始新愛好時？",
      vi: "Khi bắt đầu sở thích mới?",
      id: "Saat memulai hobi baru?"
    },
    options: [
      {
        text: {
          ko: "일단 시작! 부딪히며 배움",
          en: "Just start! Learn by doing",
          ja: "とりあえず始める！ぶつかりながら学ぶ",
          "zh-CN": "先开始！在实践中学习",
          "zh-TW": "先開始！在實踐中學習",
          vi: "Cứ bắt đầu! Học bằng cách làm",
          id: "Langsung mulai! Belajar sambil melakukan"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "후기 찾아보고 계획적으로 시작",
          en: "Look up reviews and start systematically",
          ja: "レビューを調べて計画的に始める",
          "zh-CN": "查看评论后有计划地开始",
          "zh-TW": "查看評論後有計劃地開始",
          vi: "Tìm hiểu đánh giá và bắt đầu có kế hoạch",
          id: "Cari ulasan dan mulai secara sistematis"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 2, Type6: 0 }
      },
      {
        text: {
          ko: "잘할 수 있을지 고민만 함",
          en: "Just worry about whether I can do it well",
          ja: "うまくできるか悩むだけ",
          "zh-CN": "只是担心能否做好",
          "zh-TW": "只是擔心能否做好",
          vi: "Chỉ lo lắng liệu mình có thể làm tốt không",
          id: "Hanya khawatir apakah bisa melakukannya dengan baik"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "배우고 싶은 마음이 생기면 시작",
          en: "Start when I feel like learning",
          ja: "学びたい気持ちが生まれたら始める",
          "zh-CN": "有学习欲望时开始",
          "zh-TW": "有學習慾望時開始",
          vi: "Bắt đầu khi có hứng thú học hỏi",
          id: "Mulai ketika ada keinginan belajar"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  }
];

// 나머지 질문들 import
import { challengePotentialQuestionsPart2 } from './challengePotentialQuestions';
import { challengePotentialResultsPart2 } from './challengePotentialResults';

// 전체 질문 배열
export const challengePotentialQuestions: ChallengePotentialQuestion[] = [
  ...challengePotentialQuestionsPart1,
  ...challengePotentialQuestionsPart2
];

// 결과 데이터
export const challengePotentialResults: ChallengePotentialResult[] = [
  {
    type: "Type1",
    emoji: "🏔️",
    title: {
      ko: "타고난 모험가형",
      en: "Natural Adventurer",
      ja: "生まれながらの冒険家型",
      "zh-CN": "天生的冒险家型",
      "zh-TW": "天生的冒險家型",
      vi: "Kiểu nhà thám hiểm bẩm sinh",
      id: "Tipe Petualang Alami"
    },
    shortDescription: {
      ko: "두려움 없는 도전! 위험을 즐기는 진정한 모험가",
      en: "Fearless challenge! A true adventurer who enjoys risk",
      ja: "恐れない挑戦！リスクを楽しむ真の冒険家",
      "zh-CN": "无畏的挑战！享受风险的真正冒险家",
      "zh-TW": "無畏的挑戰！享受風險的真正冒險家",
      vi: "Thử thách không sợ hãi! Nhà thám hiểm thực sự thích rủi ro",
      id: "Tantangan tanpa rasa takut! Petualang sejati yang menikmati risiko"
    },
    longDescription: {
      ko: "새로운 것에 대한 호기심과 도전 정신이 넘칩니다. 실패를 두려워하지 않고 과감하게 뛰어듭니다. 직관을 믿고 빠르게 행동하며 변화를 즐깁니다. 안정보다는 자극과 모험을 선택하는 타고난 개척자입니다.",
      en: "Curiosity and spirit of challenge for new things overflow. Not afraid of failure and jumps boldly. Trusts intuition and acts quickly, enjoying change. A natural pioneer who chooses stimulation and adventure over stability.",
      ja: "新しいことへの好奇心と挑戦精神が溢れています。失敗を恐れず大胆に飛び込みます。直感を信じて素早く行動し、変化を楽しみます。安定よりも刺激と冒険を選ぶ生まれながらの開拓者です。",
      "zh-CN": "对新鲜事物的好奇心和挑战精神溢满。不惧怕失败，勇敢地跳入。相信直觉，快速行动，享受变化。是选择刺激和冒险而非稳定的天生开拓者。",
      "zh-TW": "對新鮮事物的好奇心和挑戰精神溢滿。不懼怕失敗，勇敢地跳入。相信直覺，快速行動，享受變化。是選擇刺激和冒險而非穩定的天生開拓者。",
      vi: "Tò mò và tinh thần thử thách với những điều mới tràn đầy. Không sợ thất bại và nhảy vào một cách táo bạo. Tin tưởng trực giác và hành động nhanh chóng, thích thay đổi. Là người tiên phong bẩm sinh chọn kích thích và phiêu lưu hơn là ổn định.",
      id: "Rasa ingin tahu dan semangat tantangan untuk hal-hal baru meluap. Tidak takut gagal dan melompat dengan berani. Mempercayai intuisi dan bertindak cepat, menikmati perubahan. Perintis alami yang memilih stimulasi dan petualangan daripada stabilitas."
    },
    pros: [
      { ko: "추진력", en: "Drive", ja: "推進力", "zh-CN": "推动力", "zh-TW": "推動力", vi: "Động lực", id: "Dorongan" },
      { ko: "용기", en: "Courage", ja: "勇気", "zh-CN": "勇气", "zh-TW": "勇氣", vi: "Lòng can đảm", id: "Keberanian" },
      { ko: "적응력", en: "Adaptability", ja: "適応力", "zh-CN": "适应力", "zh-TW": "適應力", vi: "Khả năng thích ứng", id: "Kemampuan beradaptasi" },
      { ko: "경험 풍부", en: "Rich experience", ja: "経験豊富", "zh-CN": "经验丰富", "zh-TW": "經驗豐富", vi: "Kinh nghiệm phong phú", id: "Pengalaman kaya" }
    ],
    cons: [
      { ko: "무모함", en: "Recklessness", ja: "無謀さ", "zh-CN": "鲁莽", "zh-TW": "魯莽", vi: "Liều lĩnh", id: "Kecerobohan" },
      { ko: "계획 부족", en: "Lack of planning", ja: "計画不足", "zh-CN": "缺乏计划", "zh-TW": "缺乏計劃", vi: "Thiếu kế hoạch", id: "Kurang perencanaan" },
      { ko: "안정성 결여", en: "Lack of stability", ja: "安定性の欠如", "zh-CN": "缺乏稳定性", "zh-TW": "缺乏穩定性", vi: "Thiếu ổn định", id: "Kurang stabilitas" }
    ],
    advice: {
      ko: "가끔은 속도를 늦추고 방향을 점검하세요. 용기와 신중함의 균형이 필요합니다!",
      en: "Sometimes slow down and check your direction. You need a balance of courage and caution!",
      ja: "時にはスピードを落として方向を確認してください。勇気と慎重さのバランスが必要です！",
      "zh-CN": "有时放慢速度，检查方向。需要勇气和谨慎的平衡！",
      "zh-TW": "有時放慢速度，檢查方向。需要勇氣和謹慎的平衡！",
      vi: "Thỉnh thoảng hãy chậm lại và kiểm tra hướng đi. Cần sự cân bằng giữa lòng can đảm và thận trọng!",
      id: "Kadang-kadang perlambat dan periksa arah. Anda perlu keseimbangan antara keberanian dan kehati-hatian!"
    },
    successRate: {
      ko: "⭐⭐⭐⭐ (75%)",
      en: "⭐⭐⭐⭐ (75%)",
      ja: "⭐⭐⭐⭐ (75%)",
      "zh-CN": "⭐⭐⭐⭐ (75%)",
      "zh-TW": "⭐⭐⭐⭐ (75%)",
      vi: "⭐⭐⭐⭐ (75%)",
      id: "⭐⭐⭐⭐ (75%)"
    },
    recommendedFields: {
      ko: "스타트업, 해외 진출, 극한 도전, 새로운 분야",
      en: "Startups, overseas expansion, extreme challenges, new fields",
      ja: "スタートアップ、海外進出、極限挑戦、新しい分野",
      "zh-CN": "初创企业、海外发展、极限挑战、新领域",
      "zh-TW": "初創企業、海外發展、極限挑戰、新領域",
      vi: "Khởi nghiệp, mở rộng ra nước ngoài, thử thách cực hạn, lĩnh vực mới",
      id: "Startup, ekspansi luar negeri, tantangan ekstrem, bidang baru"
    },
    compatibleTypes: [
      { ko: "Type2 (전략가) - 모험과 계획의 완벽 조합", en: "Type2 (Strategist) - Perfect combination of adventure and planning", ja: "Type2（戦略家）- 冒険と計画の完璧な組み合わせ", "zh-CN": "Type2（战略家）- 冒险与计划的完美结合", "zh-TW": "Type2（戰略家）- 冒險與計劃的完美結合", vi: "Type2 (Chiến lược gia) - Sự kết hợp hoàn hảo giữa phiêu lưu và kế hoạch", id: "Type2 (Strategis) - Kombinasi sempurna petualangan dan perencanaan" }
    ],
    carefulTypes: [
      { ko: "Type3 (안정형) - 가치관 충돌로 이해 어려움", en: "Type3 (Stable) - Hard to understand due to value conflicts", ja: "Type3（安定型）- 価値観の衝突で理解困難", "zh-CN": "Type3（稳定型）- 价值观冲突难以理解", "zh-TW": "Type3（穩定型）- 價值觀衝突難以理解", vi: "Type3 (Ổn định) - Khó hiểu do xung đột giá trị", id: "Type3 (Stabil) - Sulit dipahami karena konflik nilai" }
    ]
  },
  ...challengePotentialResultsPart2
];

// 결과 계산 함수
export function calculateChallengePotentialResult(answers: any[]): string {
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      scores[type] += answer[type];
    });
  });

  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.keys(scores).forEach(type => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });

  return resultType;
}
