export interface LifePrioritiesQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface LifePrioritiesResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  impression: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  advice: Record<string, string>;
}

export const lifePrioritiesQuestions: LifePrioritiesQuestion[] = [
  {
    id: 1,
    question: {
      ko: "꿈의 직장 제안 vs 연인과의 안정된 관계",
      en: "Dream job offer vs stable relationship with partner",
      ja: "夢の職場提案 vs 恋人との安定した関係",
      'zh-CN': "梦想工作机会 vs 与恋人的稳定关系",
      'zh-TW': "夢想工作機會 vs 與戀人的穩定關係",
      id: "Tawaran pekerjaan impian vs hubungan stabil dengan pasangan",
      vi: "Cơ hội công việc mơ ước vs mối quan hệ ổn định với người yêu"
    },
    options: [
      {
        text: {
          ko: "꿈의 직장, 연인과는 원거리로",
          en: "Dream job, long distance with partner",
          ja: "夢の職場、恋人は遠距離で",
          'zh-CN': "梦想工作，与恋人异地",
          'zh-TW': "夢想工作，與戀人異地",
          id: "Pekerjaan impian, pasangan jarak jauh",
          vi: "Công việc mơ ước, người yêu ở xa"
        },
        scores: { Type1: 8, Type3: 8 }
      },
      {
        text: {
          ko: "연인 곁에 남기, 다른 기회 찾기",
          en: "Stay with partner, look for other opportunities",
          ja: "恋人のそばに残る、他の機会を探す",
          'zh-CN': "留在恋人身边，寻找其他机会",
          'zh-TW': "留在戀人身邊，尋找其他機會",
          id: "Tetap dengan pasangan, cari peluang lain",
          vi: "Ở lại bên người yêu, tìm cơ hội khác"
        },
        scores: { Type2: 2, Type4: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "인생에서 더 필요한 것은?",
      en: "What do you need more in life?",
      ja: "人生でより必要なものは？",
      'zh-CN': "生活中更需要什么？",
      'zh-TW': "生活中更需要什麼？",
      id: "Apa yang lebih Anda butuhkan dalam hidup?",
      vi: "Bạn cần gì hơn trong cuộc sống?"
    },
    options: [
      {
        text: {
          ko: "설렘과 열정",
          en: "Excitement and passion",
          ja: "ワクワクと情熱",
          'zh-CN': "兴奋和激情",
          'zh-TW': "興奮和激情",
          id: "Kegembiraan dan gairah",
          vi: "Hứng thú và đam mê"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "평온과 안정",
          en: "Peace and stability",
          ja: "平穏と安定",
          'zh-CN': "平静和稳定",
          'zh-TW': "平靜和穩定",
          id: "Kedamaian dan stabilitas",
          vi: "Bình yên và ổn định"
        },
        scores: { Type4: 8, Type5: 8 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "선택해야 한다면?",
      en: "If you had to choose?",
      ja: "選ばなければならないなら？",
      'zh-CN': "如果必须选择？",
      'zh-TW': "如果必須選擇？",
      id: "Jika harus memilih?",
      vi: "Nếu phải chọn?"
    },
    options: [
      {
        text: {
          ko: "자유롭게 혼자",
          en: "Free and alone",
          ja: "自由に一人で",
          'zh-CN': "自由地独自一人",
          'zh-TW': "自由地獨自一人",
          id: "Bebas sendirian",
          vi: "Tự do một mình"
        },
        scores: { Type3: 8, Type1: 2 }
      },
      {
        text: {
          ko: "함께하지만 타협",
          en: "Together but with compromise",
          ja: "一緒だが妥協",
          'zh-CN': "在一起但要妥协",
          'zh-TW': "在一起但要妥協",
          id: "Bersama tapi kompromi",
          vi: "Cùng nhau nhưng phải thỏa hiệp"
        },
        scores: { Type2: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "관계에서 더 중요한 것은?",
      en: "What is more important in relationships?",
      ja: "関係でより重要なものは？",
      'zh-CN': "关系中更重要的是什么？",
      'zh-TW': "關係中更重要的是什麼？",
      id: "Apa yang lebih penting dalam hubungan?",
      vi: "Điều gì quan trọng hơn trong mối quan hệ?"
    },
    options: [
      {
        text: {
          ko: "내가 사랑하는 것",
          en: "What I love",
          ja: "私が愛するもの",
          'zh-CN': "我所爱的",
          'zh-TW': "我所愛的",
          id: "Yang saya cintai",
          vi: "Điều tôi yêu thích"
        },
        scores: { Type6: 8, Type5: 2 }
      },
      {
        text: {
          ko: "나를 사랑해주는 것",
          en: "What loves me",
          ja: "私を愛してくれるもの",
          'zh-CN': "爱我的",
          'zh-TW': "愛我的",
          id: "Yang mencintai saya",
          vi: "Điều yêu thương tôi"
        },
        scores: { Type2: 8 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "인생의 우선순위는?",
      en: "What is your life priority?",
      ja: "人生の優先順位は？",
      'zh-CN': "你的人生优先级是什么？",
      'zh-TW': "你的人生優先級是什麼？",
      id: "Apa prioritas hidup Anda?",
      vi: "Ưu tiên trong cuộc sống của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "나의 성장과 발전",
          en: "My growth and development",
          ja: "私の成長と発展",
          'zh-CN': "我的成长和发展",
          'zh-TW': "我的成長和發展",
          id: "Pertumbuhan dan perkembangan saya",
          vi: "Sự phát triển và tiến bộ của tôi"
        },
        scores: { Type1: 8, Type3: 8 }
      },
      {
        text: {
          ko: "소중한 사람들과의 관계",
          en: "Relationships with precious people",
          ja: "大切な人々との関係",
          'zh-CN': "与珍贵的人的关系",
          'zh-TW': "與珍貴的人的關係",
          id: "Hubungan dengan orang-orang berharga",
          vi: "Mối quan hệ với những người quý giá"
        },
        scores: { Type2: 2, Type4: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "주말을 보내는 이상적인 방법은?",
      en: "What is your ideal way to spend weekends?",
      ja: "週末を過ごす理想的な方法は？",
      'zh-CN': "度过周末的理想方式是什么？",
      'zh-TW': "度過週末的理想方式是什麼？",
      id: "Apa cara ideal Anda menghabiskan akhir pekan?",
      vi: "Cách lý tưởng để trải qua cuối tuần của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "새로운 경험과 도전",
          en: "New experiences and challenges",
          ja: "新しい経験と挑戦",
          'zh-CN': "新的体验和挑战",
          'zh-TW': "新的體驗和挑戰",
          id: "Pengalaman dan tantangan baru",
          vi: "Trải nghiệm và thử thách mới"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "편안한 휴식과 충전",
          en: "Comfortable rest and recharge",
          ja: "快適な休息と充電",
          'zh-CN': "舒适的休息和充电",
          'zh-TW': "舒適的休息和充電",
          id: "Istirahat dan pengisian yang nyaman",
          vi: "Nghỉ ngơi thoải mái và nạp năng lượng"
        },
        scores: { Type4: 8, Type5: 8 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "더 가치있다고 생각하는 것은?",
      en: "What do you think is more valuable?",
      ja: "より価値があると思うものは？",
      'zh-CN': "你认为更有价值的是什么？",
      'zh-TW': "你認為更有價值的是什麼？",
      id: "Apa yang menurut Anda lebih berharga?",
      vi: "Bạn nghĩ điều gì có giá trị hơn?"
    },
    options: [
      {
        text: {
          ko: "많은 사람들과 넓은 인연",
          en: "Many people and wide connections",
          ja: "多くの人々との広い縁",
          'zh-CN': "与很多人的广泛人脉",
          'zh-TW': "與很多人的廣泛人脈",
          id: "Banyak orang dan koneksi luas",
          vi: "Nhiều người và mối quan hệ rộng"
        },
        scores: { Type3: 8 }
      },
      {
        text: {
          ko: "소수와의 깊은 관계",
          en: "Deep relationships with a few",
          ja: "少数との深い関係",
          'zh-CN': "与少数人的深厚关系",
          'zh-TW': "與少數人的深厚關係",
          id: "Hubungan mendalam dengan sedikit orang",
          vi: "Mối quan hệ sâu sắc với ít người"
        },
        scores: { Type2: 8 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "갈등 상황에서?",
      en: "In conflict situations?",
      ja: "対立状況では？",
      'zh-CN': "在冲突情况下？",
      'zh-TW': "在衝突情況下？",
      id: "Dalam situasi konflik?",
      vi: "Trong tình huống xung đột?"
    },
    options: [
      {
        text: {
          ko: "내 의견을 관철시키는 것",
          en: "Getting my opinion across",
          ja: "私の意見を通すこと",
          'zh-CN': "坚持我的观点",
          'zh-TW': "堅持我的觀點",
          id: "Menyampaikan pendapat saya",
          vi: "Thể hiện ý kiến của tôi"
        },
        scores: { Type1: 8, Type5: 8 }
      },
      {
        text: {
          ko: "관계를 유지하는 것",
          en: "Maintaining the relationship",
          ja: "関係を維持すること",
          'zh-CN': "维持关系",
          'zh-TW': "維持關係",
          id: "Mempertahankan hubungan",
          vi: "Duy trì mối quan hệ"
        },
        scores: { Type2: 2, Type4: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "돈 vs 시간",
      en: "Money vs Time",
      ja: "お金 vs 時間",
      'zh-CN': "金钱 vs 时间",
      'zh-TW': "金錢 vs 時間",
      id: "Uang vs Waktu",
      vi: "Tiền bạc vs Thời gian"
    },
    options: [
      {
        text: {
          ko: "돈을 더 벌어서 나중에 여유",
          en: "Earn more money for later freedom",
          ja: "もっとお金を稼いで後で余裕を",
          'zh-CN': "赚更多钱以后享受",
          'zh-TW': "賺更多錢以後享受",
          id: "Cari lebih banyak uang untuk kebebasan nanti",
          vi: "Kiếm nhiều tiền hơn để sau này thoải mái"
        },
        scores: { Type1: 8, Type3: 8, Type5: 8 }
      },
      {
        text: {
          ko: "시간 여유를 가지며 지금 즐기기",
          en: "Take time to enjoy now",
          ja: "時間の余裕を持って今を楽しむ",
          'zh-CN': "现在享受时间自由",
          'zh-TW': "現在享受時間自由",
          id: "Nikmati waktu luang sekarang",
          vi: "Tận hưởng thời gian rảnh rỗi ngay bây giờ"
        },
        scores: { Type4: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "인생의 목표는?",
      en: "What is your life goal?",
      ja: "人生の目標は？",
      'zh-CN': "你的人生目标是什么？",
      'zh-TW': "你的人生目標是什麼？",
      id: "Apa tujuan hidup Anda?",
      vi: "Mục tiêu cuộc sống của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "크게 성공하고 인정받기",
          en: "Achieve great success and recognition",
          ja: "大きく成功して認められること",
          'zh-CN': "取得巨大成功并获得认可",
          'zh-TW': "取得巨大成功並獲得認可",
          id: "Mencapai kesuksesan besar dan pengakuan",
          vi: "Đạt được thành công lớn và được công nhận"
        },
        scores: { Type1: 8, Type6: 8 }
      },
      {
        text: {
          ko: "행복하고 만족스럽게 살기",
          en: "Live happily and contentedly",
          ja: "幸せで満足して生きること",
          'zh-CN': "幸福满足地生活",
          'zh-TW': "幸福滿足地生活",
          id: "Hidup bahagia dan puas",
          vi: "Sống hạnh phúc và mãn nguyện"
        },
        scores: { Type4: 8, Type2: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "사랑하는 사람이 힘들어할 때?",
      en: "When someone you love is struggling?",
      ja: "愛する人が苦しんでいるとき？",
      'zh-CN': "当你爱的人遇到困难时？",
      'zh-TW': "當你愛的人遇到困難時？",
      id: "Ketika orang yang Anda cintai sedang berjuang?",
      vi: "Khi người bạn yêu đang gặp khó khăn?"
    },
    options: [
      {
        text: {
          ko: "문제 해결을 도와줌",
          en: "Help solve the problem",
          ja: "問題解決を手伝う",
          'zh-CN': "帮助解决问题",
          'zh-TW': "幫助解決問題",
          id: "Membantu menyelesaikan masalah",
          vi: "Giúp giải quyết vấn đề"
        },
        scores: { Type5: 8, Type1: 2 }
      },
      {
        text: {
          ko: "곁에서 감정적 위로",
          en: "Provide emotional comfort by their side",
          ja: "そばで感情的慰め",
          'zh-CN': "在身边给予情感安慰",
          'zh-TW': "在身邊給予情感安慰",
          id: "Memberikan kenyamanan emosional di samping mereka",
          vi: "An ủi tình cảm bên cạnh họ"
        },
        scores: { Type2: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 인생 철학은?",
      en: "What is your life philosophy?",
      ja: "あなたの人生哲学は？",
      'zh-CN': "你的人生哲学是什么？",
      'zh-TW': "你的人生哲學是什麼？",
      id: "Apa filosofi hidup Anda?",
      vi: "Triết lý cuộc sống của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "후회 없이 도전하며 살기",
          en: "Live without regret, taking challenges",
          ja: "後悔なく挑戦して生きる",
          'zh-CN': "无怨无悔地挑战生活",
          'zh-TW': "無怨無悔地挑戰生活",
          id: "Hidup tanpa penyesalan, mengambil tantangan",
          vi: "Sống không hối tiếc, dám thử thách"
        },
        scores: { Type6: 2, Type3: 2 }
      },
      {
        text: {
          ko: "소중한 것들을 지키며 살기",
          en: "Live protecting precious things",
          ja: "大切なものを守って生きる",
          'zh-CN': "守护珍贵的东西生活",
          'zh-TW': "守護珍貴的東西生活",
          id: "Hidup melindungi hal-hal berharga",
          vi: "Sống bảo vệ những điều quý giá"
        },
        scores: { Type4: 8, Type2: 2 }
      }
    ]
  }
];

export const lifePrioritiesResults: LifePrioritiesResult[] = [
  {
    type: "Type1",
    emoji: "🏆",
    title: {
      ko: "성취 지향형",
      en: "Achievement-Oriented",
      ja: "達成志向型",
      'zh-CN': "成就导向型",
      'zh-TW': "成就導向型",
      id: "Berorientasi Pencapaian",
      vi: "Định Hướng Thành Tích"
    },
    description: {
      ko: "성공이 곧 나! 꿈을 향해 달리는 야심가",
      en: "Success is me! An ambitious person running towards dreams",
      ja: "成功こそ私！夢に向かって走る野心家",
      'zh-CN': "成功就是我！奔向梦想的野心家",
      'zh-TW': "成功就是我！奔向夢想的野心家",
      id: "Kesuksesan adalah saya! Orang ambisius yang berlari menuju mimpi",
      vi: "Thành công chính là tôi! Người đầy tham vọng chạy về phía ước mơ"
    },
    characteristics: {
      ko: "개인의 성장과 성취를 최우선으로 여깁니다. 커리어와 자기계발이 가장 중요하며, 관계보다 목표 달성에 집중합니다. 열정적이고 야심차게 살아가며 성공을 위해서는 희생도 감수합니다. 인정받고 싶고 크게 성공하고 싶은 욕구가 강합니다. 다만 관계나 건강을 소홀히 할 수 있으니 균형이 필요합니다.",
      en: "Prioritizes personal growth and achievement above all. Career and self-development are most important, focusing on goal achievement rather than relationships. Lives passionately and ambitiously, willing to make sacrifices for success. Has a strong desire to be recognized and achieve great success. However, may neglect relationships or health, so balance is needed.",
      ja: "個人の成長と達成を最優先にします。キャリアと自己啓発が最も重要で、関係よりも目標達成に集中します。情熱的で野心的に生き、成功のためには犠牲も受け入れます。認められたい、大きく成功したい欲求が強いです。ただし関係や健康を疎かにする可能性があるのでバランスが必要です。",
      'zh-CN': "将个人成长和成就放在首位。职业和自我发展最重要，专注于目标实现而非关系。充满激情和野心地生活，愿意为成功做出牺牲。有强烈的被认可和取得巨大成功的欲望。但可能会忽视关系或健康，所以需要平衡。",
      'zh-TW': "將個人成長和成就放在首位。職業和自我發展最重要，專注於目標實現而非關係。充滿激情和野心地生活，願意為成功做出犧牲。有強烈的被認可和取得巨大成功的慾望。但可能會忽視關係或健康，所以需要平衡。",
      id: "Mengutamakan pertumbuhan dan pencapaian pribadi di atas segalanya. Karier dan pengembangan diri paling penting, fokus pada pencapaian tujuan daripada hubungan. Hidup dengan penuh semangat dan ambisi, bersedia berkorban untuk kesuksesan. Memiliki keinginan kuat untuk diakui dan mencapai kesuksesan besar. Namun mungkin mengabaikan hubungan atau kesehatan, jadi keseimbangan diperlukan.",
      vi: "Ưu tiên sự phát triển cá nhân và thành tích trên tất cả. Sự nghiệp và phát triển bản thân quan trọng nhất, tập trung vào việc đạt mục tiêu hơn là các mối quan hệ. Sống đầy đam mê và tham vọng, sẵn sàng hy sinh vì thành công. Có mong muốn mạnh mẽ được công nhận và đạt được thành công lớn. Tuy nhiên có thể bỏ bê các mối quan hệ hoặc sức khỏe, nên cần cân bằng."
    },
    impression: {
      ko: "핵심 가치: 성공, 성장, 인정, 목표",
      en: "Core values: Success, growth, recognition, goals",
      ja: "核心価値：成功、成長、承認、目標",
      'zh-CN': "核心价值：成功、成长、认可、目标",
      'zh-TW': "核心價值：成功、成長、認可、目標",
      id: "Nilai inti: Kesuksesan, pertumbuhan, pengakuan, tujuan",
      vi: "Giá trị cốt lõi: Thành công, phát triển, công nhận, mục tiêu"
    },
    pros: {
      ko: "추진력, 열정, 성취욕, 발전",
      en: "Drive, passion, achievement desire, development",
      ja: "推進力、情熱、達成欲、発展",
      'zh-CN': "推动力、激情、成就欲、发展",
      'zh-TW': "推動力、激情、成就慾、發展",
      id: "Dorongan, gairah, keinginan pencapaian, pengembangan",
      vi: "Động lực, đam mê, khát vọng thành tích, phát triển"
    },
    cons: {
      ko: "관계 소홀, 번아웃, 외로움",
      en: "Neglecting relationships, burnout, loneliness",
      ja: "関係軽視、燃え尽き、孤独",
      'zh-CN': "忽视关系、倦怠、孤独",
      'zh-TW': "忽視關係、倦怠、孤獨",
      id: "Mengabaikan hubungan, kelelahan, kesepian",
      vi: "Bỏ bê mối quan hệ, kiệt sức, cô đơn"
    },
    advice: {
      ko: "성공도 중요하지만 과정을 함께할 사람도 필요해요. 때로는 멈춰서 주변을 돌아보세요.",
      en: "Success is important, but you also need people to share the journey with. Sometimes stop and look around.",
      ja: "成功も重要ですが、過程を共にする人も必要です。時には立ち止まって周りを見回してください。",
      'zh-CN': "成功很重要，但你也需要有人一起分享这个过程。有时停下来环顾四周。",
      'zh-TW': "成功很重要，但你也需要有人一起分享這個過程。有時停下來環顧四周。",
      id: "Kesuksesan penting, tapi Anda juga perlu orang untuk berbagi perjalanan. Terkadang berhenti dan lihat sekeliling.",
      vi: "Thành công quan trọng, nhưng bạn cũng cần người để chia sẻ hành trình. Đôi khi hãy dừng lại và nhìn xung quanh."
    }
  },
  {
    type: "Type2",
    emoji: "💕",
    title: {
      ko: "관계 중심형",
      en: "Relationship-Centered",
      ja: "関係中心型",
      'zh-CN': "关系中心型",
      'zh-TW': "關係中心型",
      id: "Berpusat pada Hubungan",
      vi: "Tập Trung Mối Quan Hệ"
    },
    description: {
      ko: "사랑이 전부! 사람을 최우선으로 하는 감성파",
      en: "Love is everything! An emotional person who prioritizes people",
      ja: "愛がすべて！人を最優先にする感情派",
      'zh-CN': "爱就是一切！优先考虑人的感性派",
      'zh-TW': "愛就是一切！優先考慮人的感性派",
      id: "Cinta adalah segalanya! Orang emosional yang memprioritaskan orang",
      vi: "Tình yêu là tất cả! Người cảm xúc ưu tiên con người"
    },
    characteristics: {
      ko: "인간관계를 인생 최고의 가치로 여깁니다. 가족, 연인, 친구와의 유대가 성공보다 중요합니다. 사랑하는 사람들을 위해 자신을 희생할 수 있고, 관계 속에서 행복을 찾습니다. 따뜻하고 헌신적이지만 자신을 잃을 위험도 있습니다. 관계와 자아의 균형이 필요합니다.",
      en: "Values human relationships as the highest value in life. Bonds with family, lovers, and friends are more important than success. Can sacrifice themselves for loved ones and find happiness in relationships. Warm and devoted but at risk of losing themselves. Balance between relationships and self is needed.",
      ja: "人間関係を人生の最高の価値とします。家族、恋人、友人との絆が成功よりも重要です。愛する人のために自分を犠牲にでき、関係の中で幸せを見つけます。温かく献身的ですが、自分を失う危険もあります。関係と自己のバランスが必要です。",
      'zh-CN': "将人际关系视为人生最高价值。与家人、恋人、朋友的纽带比成功更重要。可以为所爱的人牺牲自己，在关系中寻找幸福。温暖而忠诚，但可能失去自我。需要在关系和自我之间保持平衡。",
      'zh-TW': "將人際關係視為人生最高價值。與家人、戀人、朋友的紐帶比成功更重要。可以為所愛的人犧牲自己，在關係中尋找幸福。溫暖而忠誠，但可能失去自我。需要在關係和自我之間保持平衡。",
      id: "Menghargai hubungan manusia sebagai nilai tertinggi dalam hidup. Ikatan dengan keluarga, kekasih, dan teman lebih penting daripada kesuksesan. Dapat mengorbankan diri untuk orang yang dicintai dan menemukan kebahagiaan dalam hubungan. Hangat dan setia tetapi berisiko kehilangan diri. Keseimbangan antara hubungan dan diri diperlukan.",
      vi: "Coi trọng các mối quan hệ con người như giá trị cao nhất trong cuộc sống. Mối liên kết với gia đình, người yêu, bạn bè quan trọng hơn thành công. Có thể hy sinh bản thân vì người yêu thương và tìm thấy hạnh phúc trong các mối quan hệ. Ấm áp và tận tụy nhưng có nguy cơ mất bản thân. Cần cân bằng giữa mối quan hệ và bản thân."
    },
    impression: {
      ko: "핵심 가치: 사랑, 관계, 유대, 헌신",
      en: "Core values: Love, relationships, bonds, devotion",
      ja: "核心価値：愛、関係、絆、献身",
      'zh-CN': "核心价值：爱、关系、纽带、奉献",
      'zh-TW': "核心價值：愛、關係、紐帶、奉獻",
      id: "Nilai inti: Cinta, hubungan, ikatan, pengabdian",
      vi: "Giá trị cốt lõi: Tình yêu, mối quan hệ, liên kết, tận tụy"
    },
    pros: {
      ko: "따뜻함, 헌신, 공감, 유대감",
      en: "Warmth, devotion, empathy, sense of connection",
      ja: "温かさ、献身、共感、絆",
      'zh-CN': "温暖、奉献、共情、纽带感",
      'zh-TW': "溫暖、奉獻、共情、紐帶感",
      id: "Kehangatan, pengabdian, empati, rasa keterhubungan",
      vi: "Sự ấm áp, tận tụy, đồng cảm, cảm giác kết nối"
    },
    cons: {
      ko: "자아 상실, 의존, 희생 과다",
      en: "Loss of self, dependence, excessive sacrifice",
      ja: "自己喪失、依存、過度な犠牲",
      'zh-CN': "失去自我、依赖、过度牺牲",
      'zh-TW': "失去自我、依賴、過度犧牲",
      id: "Kehilangan diri, ketergantungan, pengorbanan berlebihan",
      vi: "Mất bản thân, phụ thuộc, hy sinh quá mức"
    },
    advice: {
      ko: "사랑도 중요하지만 나 자신도 소중해요. 나를 먼저 사랑하는 것이 진짜 사랑입니다.",
      en: "Love is important, but you are also precious. Loving yourself first is true love.",
      ja: "愛も重要ですが、自分自身も大切です。自分をまず愛することが真の愛です。",
      'zh-CN': "爱很重要，但你自己也很珍贵。先爱自己才是真正的爱。",
      'zh-TW': "愛很重要，但你自己也很珍貴。先愛自己才是真正的愛。",
      id: "Cinta penting, tapi Anda juga berharga. Mencintai diri sendiri terlebih dahulu adalah cinta sejati.",
      vi: "Tình yêu quan trọng, nhưng bạn cũng quý giá. Yêu bản thân trước là tình yêu thật sự."
    }
  },
  {
    type: "Type3",
    emoji: "🦅",
    title: {
      ko: "자유 추구형",
      en: "Freedom-Seeking",
      ja: "自由追求型",
      'zh-CN': "自由追求型",
      'zh-TW': "自由追求型",
      id: "Mencari Kebebasan",
      vi: "Theo Đuổi Tự Do"
    },
    description: {
      ko: "자유가 최고! 구속 없이 날아가는 자유로운 영혼",
      en: "Freedom is the best! A free spirit flying without constraints",
      ja: "自由が最高！束縛なく飛ぶ自由な魂",
      'zh-CN': "自由最好！无拘无束飞翔的自由灵魂",
      'zh-TW': "自由最好！無拘無束飛翔的自由靈魂",
      id: "Kebebasan adalah yang terbaik! Jiwa bebas yang terbang tanpa batasan",
      vi: "Tự do là tốt nhất! Tâm hồn tự do bay lượn không ràng buộc"
    },
    characteristics: {
      ko: "자유와 독립을 가장 중요하게 생각합니다. 어디에도 얽매이지 않고 하고 싶은 것을 하며 살고 싶어 합니다. 새로운 경험과 모험을 즐기고 루틴을 싫어합니다. 관계에서도 적당한 거리를 유지하며 자신만의 공간을 중시합니다. 자유롭지만 때로는 외로울 수 있습니다.",
      en: "Values freedom and independence most. Wants to live without being tied down, doing what they want. Enjoys new experiences and adventures, dislikes routines. Maintains appropriate distance in relationships and values their own space. Free but can sometimes be lonely.",
      ja: "自由と独立を最も重要に考えます。どこにも縛られずにしたいことをして生きたいです。新しい経験と冒険を楽しみ、ルーティンを嫌います。関係でも適度な距離を保ち、自分の空間を重視します。自由ですが時々孤独になることがあります。",
      'zh-CN': "最重视自由和独立。希望不受任何束缚，做自己想做的事。享受新体验和冒险，讨厌例行公事。在关系中也保持适当距离，重视自己的空间。自由但有时可能孤独。",
      'zh-TW': "最重視自由和獨立。希望不受任何束縛，做自己想做的事。享受新體驗和冒險，討厭例行公事。在關係中也保持適當距離，重視自己的空間。自由但有時可能孤獨。",
      id: "Menghargai kebebasan dan kemandirian paling tinggi. Ingin hidup tanpa terikat, melakukan apa yang diinginkan. Menikmati pengalaman dan petualangan baru, tidak suka rutinitas. Mempertahankan jarak yang tepat dalam hubungan dan menghargai ruang sendiri. Bebas tapi kadang bisa kesepian.",
      vi: "Coi trọng tự do và độc lập nhất. Muốn sống không bị ràng buộc, làm những gì mình muốn. Thích thú với trải nghiệm và phiêu lưu mới, ghét thói quen. Duy trì khoảng cách phù hợp trong mối quan hệ và coi trọng không gian riêng. Tự do nhưng đôi khi có thể cô đơn."
    },
    impression: {
      ko: "핵심 가치: 자유, 독립, 모험, 자율성",
      en: "Core values: Freedom, independence, adventure, autonomy",
      ja: "核心価値：自由、独立、冒険、自律性",
      'zh-CN': "核心价值：自由、独立、冒险、自主性",
      'zh-TW': "核心價值：自由、獨立、冒險、自主性",
      id: "Nilai inti: Kebebasan, kemandirian, petualangan, otonomi",
      vi: "Giá trị cốt lõi: Tự do, độc lập, phiêu lưu, tự chủ"
    },
    pros: {
      ko: "독립성, 모험심, 창의성, 유연성",
      en: "Independence, adventurous spirit, creativity, flexibility",
      ja: "独立性、冒険心、創造性、柔軟性",
      'zh-CN': "独立性、冒险精神、创造力、灵活性",
      'zh-TW': "獨立性、冒險精神、創造力、靈活性",
      id: "Kemandirian, semangat petualangan, kreativitas, fleksibilitas",
      vi: "Tính độc lập, tinh thần phiêu lưu, sáng tạo, linh hoạt"
    },
    cons: {
      ko: "외로움, 깊은 관계 어려움, 불안정",
      en: "Loneliness, difficulty with deep relationships, instability",
      ja: "孤独、深い関係の困難、不安定",
      'zh-CN': "孤独、难以建立深层关系、不稳定",
      'zh-TW': "孤獨、難以建立深層關係、不穩定",
      id: "Kesepian, kesulitan dengan hubungan mendalam, ketidakstabilan",
      vi: "Cô đơn, khó khăn với mối quan hệ sâu sắc, không ổn định"
    },
    advice: {
      ko: "자유도 좋지만 가끔은 의지할 사람도 필요해요. 자유와 관계는 공존할 수 있습니다.",
      en: "Freedom is good, but sometimes you need people to rely on. Freedom and relationships can coexist.",
      ja: "自由もいいですが、時々頼れる人も必要です。自由と関係は共存できます。",
      'zh-CN': "自由很好，但有时你也需要可以依靠的人。自由和关系可以共存。",
      'zh-TW': "自由很好，但有時你也需要可以依靠的人。自由和關係可以共存。",
      id: "Kebebasan baik, tapi kadang Anda perlu orang untuk diandalkan. Kebebasan dan hubungan bisa hidup berdampingan.",
      vi: "Tự do tốt, nhưng đôi khi bạn cần người để dựa vào. Tự do và mối quan hệ có thể cùng tồn tại."
    }
  },
  {
    type: "Type4",
    emoji: "🏡",
    title: {
      ko: "평온 안정형",
      en: "Peaceful Stability",
      ja: "平穏安定型",
      'zh-CN': "平静稳定型",
      'zh-TW': "平靜穩定型",
      id: "Kedamaian Stabilitas",
      vi: "Bình Yên Ổn Định"
    },
    description: {
      ko: "평화가 최고! 편안하고 안정적인 삶을 원해요",
      en: "Peace is the best! Want a comfortable and stable life",
      ja: "平和が最高！快適で安定した生活を望む",
      'zh-CN': "和平最好！想要舒适稳定的生活",
      'zh-TW': "和平最好！想要舒適穩定的生活",
      id: "Kedamaian adalah yang terbaik! Ingin hidup nyaman dan stabil",
      vi: "Hòa bình là tốt nhất! Muốn cuộc sống thoải mái và ổn định"
    },
    characteristics: {
      ko: "평온하고 안정적인 삶을 추구합니다. 큰 변화나 모험보다는 예측 가능하고 편안한 일상을 좋아합니다. 가족과 함께하는 시간, 익숙한 것들, 변하지 않는 관계를 소중히 여깁니다. 평화롭고 따뜻하지만 때로는 도전이 필요할 수도 있습니다.",
      en: "Pursues peaceful and stable life. Prefers predictable and comfortable daily life over big changes or adventures. Values time with family, familiar things, and unchanging relationships. Peaceful and warm but sometimes may need challenges.",
      ja: "平穏で安定した生活を追求します。大きな変化や冒険よりも予測可能で快適な日常を好みます。家族と過ごす時間、慣れ親しんだもの、変わらない関係を大切にします。平和的で温かいですが、時々挑戦が必要かもしれません。",
      'zh-CN': "追求平静稳定的生活。喜欢可预测和舒适的日常生活，而不是大的变化或冒险。珍惜与家人共度的时光、熟悉的事物、不变的关系。平静温暖，但有时可能需要挑战。",
      'zh-TW': "追求平靜穩定的生活。喜歡可預測和舒適的日常生活，而不是大的變化或冒險。珍惜與家人共度的時光、熟悉的事物、不變的關係。平靜溫暖，但有時可能需要挑戰。",
      id: "Mengejar kehidupan yang damai dan stabil. Lebih suka kehidupan sehari-hari yang dapat diprediksi dan nyaman daripada perubahan besar atau petualangan. Menghargai waktu dengan keluarga, hal-hal yang akrab, dan hubungan yang tidak berubah. Damai dan hangat tapi kadang mungkin perlu tantangan.",
      vi: "Theo đuổi cuộc sống bình yên và ổn định. Thích cuộc sống hàng ngày có thể dự đoán và thoải mái hơn là những thay đổi lớn hay phiêu lưu. Trân trọng thời gian với gia đình, những điều quen thuộc, và các mối quan hệ không đổi. Bình yên và ấm áp nhưng đôi khi có thể cần thử thách."
    },
    impression: {
      ko: "핵심 가치: 평온, 안정, 편안함, 지속성",
      en: "Core values: Peace, stability, comfort, continuity",
      ja: "核心価値：平穏、安定、快適、持続性",
      'zh-CN': "核心价值：平静、稳定、舒适、持续性",
      'zh-TW': "核心價值：平靜、穩定、舒適、持續性",
      id: "Nilai inti: Kedamaian, stabilitas, kenyamanan, kontinuitas",
      vi: "Giá trị cốt lõi: Bình yên, ổn định, thoải mái, liên tục"
    },
    pros: {
      ko: "평화로움, 안정감, 신뢰, 지속성",
      en: "Peacefulness, sense of stability, trust, continuity",
      ja: "平和さ、安定感、信頼、持続性",
      'zh-CN': "平和、稳定感、信任、持续性",
      'zh-TW': "平和、穩定感、信任、持續性",
      id: "Kedamaian, rasa stabilitas, kepercayaan, kontinuitas",
      vi: "Sự bình yên, cảm giác ổn định, tin tưởng, liên tục"
    },
    cons: {
      ko: "변화 두려움, 도전 회피, 성장 정체",
      en: "Fear of change, avoiding challenges, growth stagnation",
      ja: "変化への恐れ、挑戦回避、成長停滞",
      'zh-CN': "害怕变化、回避挑战、成长停滞",
      'zh-TW': "害怕變化、迴避挑戰、成長停滯",
      id: "Takut perubahan, menghindari tantangan, stagnasi pertumbuhan",
      vi: "Sợ thay đổi, tránh thử thách, trì trệ phát triển"
    },
    advice: {
      ko: "안정도 좋지만 가끔은 새로운 도전이 삶을 더 풍요롭게 만들어요!",
      en: "Stability is good, but sometimes new challenges make life more enriching!",
      ja: "安定もいいですが、時々新しい挑戦が人生をより豊かにします！",
      'zh-CN': "稳定很好，但有时新的挑战让生活更丰富！",
      'zh-TW': "穩定很好，但有時新的挑戰讓生活更豐富！",
      id: "Stabilitas baik, tapi kadang tantangan baru membuat hidup lebih kaya!",
      vi: "Ổn định tốt, nhưng đôi khi thử thách mới làm cuộc sống phong phú hơn!"
    }
  },
  {
    type: "Type5",
    emoji: "⚖️",
    title: {
      ko: "이성 균형형",
      en: "Rational Balance",
      ja: "理性バランス型",
      'zh-CN': "理性平衡型",
      'zh-TW': "理性平衡型",
      id: "Keseimbangan Rasional",
      vi: "Cân Bằng Lý Trí"
    },
    description: {
      ko: "논리가 답! 합리적으로 균형잡는 현실주의자",
      en: "Logic is the answer! A realist who balances rationally",
      ja: "論理が答え！合理的にバランスを取る現実主義者",
      'zh-CN': "逻辑就是答案！理性平衡的现实主义者",
      'zh-TW': "邏輯就是答案！理性平衡的現實主義者",
      id: "Logika adalah jawabannya! Realis yang menyeimbangkan secara rasional",
      vi: "Logic là câu trả lời! Người thực tế cân bằng một cách hợp lý"
    },
    characteristics: {
      ko: "이성적이고 균형잡힌 가치관을 가지고 있습니다. 감정보다는 논리로 판단하고, 모든 것의 균형을 추구합니다. 일과 관계, 나와 타인, 현재와 미래를 모두 고려하는 현명한 선택을 합니다. 합리적이고 안정적이지만 때로는 감정 표현이 부족할 수 있습니다.",
      en: "Has rational and balanced values. Judges by logic rather than emotions, pursues balance in everything. Makes wise choices considering work and relationships, self and others, present and future. Rational and stable but sometimes may lack emotional expression.",
      ja: "理性的でバランスの取れた価値観を持っています。感情よりも論理で判断し、すべてのバランスを追求します。仕事と関係、自分と他人、現在と未来をすべて考慮した賢明な選択をします。合理的で安定していますが、時々感情表現が不足することがあります。",
      'zh-CN': "拥有理性和平衡的价值观。用逻辑而非情感判断，追求一切事物的平衡。做出明智的选择，考虑工作和关系、自己和他人、现在和未来。理性稳定，但有时可能缺乏情感表达。",
      'zh-TW': "擁有理性和平衡的價值觀。用邏輯而非情感判斷，追求一切事物的平衡。做出明智的選擇，考慮工作和關係、自己和他人、現在和未來。理性穩定，但有時可能缺乏情感表達。",
      id: "Memiliki nilai-nilai rasional dan seimbang. Menilai dengan logika daripada emosi, mengejar keseimbangan dalam segala hal. Membuat pilihan bijak dengan mempertimbangkan pekerjaan dan hubungan, diri dan orang lain, sekarang dan masa depan. Rasional dan stabil tapi kadang mungkin kurang ekspresi emosional.",
      vi: "Có giá trị quan lý trí và cân bằng. Đánh giá bằng logic hơn là cảm xúc, theo đuổi sự cân bằng trong mọi thứ. Đưa ra lựa chọn khôn ngoan xem xét công việc và mối quan hệ, bản thân và người khác, hiện tại và tương lai. Lý trí và ổn định nhưng đôi khi có thể thiếu biểu cảm cảm xúc."
    },
    impression: {
      ko: "핵심 가치: 균형, 논리, 합리성, 효율",
      en: "Core values: Balance, logic, rationality, efficiency",
      ja: "核心価値：バランス、論理、合理性、効率",
      'zh-CN': "核心价值：平衡、逻辑、理性、效率",
      'zh-TW': "核心價值：平衡、邏輯、理性、效率",
      id: "Nilai inti: Keseimbangan, logika, rasionalitas, efisiensi",
      vi: "Giá trị cốt lõi: Cân bằng, logic, lý trí, hiệu quả"
    },
    pros: {
      ko: "합리성, 균형감, 안정성, 지혜",
      en: "Rationality, sense of balance, stability, wisdom",
      ja: "合理性、バランス感、安定性、知恵",
      'zh-CN': "理性、平衡感、稳定性、智慧",
      'zh-TW': "理性、平衡感、穩定性、智慧",
      id: "Rasionalitas, rasa keseimbangan, stabilitas, kebijaksanaan",
      vi: "Tính lý trí, cảm giác cân bằng, ổn định, khôn ngoan"
    },
    cons: {
      ko: "감정 부족, 재미 없음, 냉정함",
      en: "Lack of emotion, not fun, coldness",
      ja: "感情不足、面白みがない、冷たさ",
      'zh-CN': "缺乏情感、无趣、冷漠",
      'zh-TW': "缺乏情感、無趣、冷漠",
      id: "Kurang emosi, tidak menyenangkan, dingin",
      vi: "Thiếu cảm xúc, không thú vị, lạnh lùng"
    },
    advice: {
      ko: "논리도 중요하지만 가끔은 비합리적인 선택이 인생을 더 풍성하게 만들어요!",
      en: "Logic is important, but sometimes irrational choices make life richer!",
      ja: "論理も重要ですが、時々非合理的な選択が人生をより豊かにします！",
      'zh-CN': "逻辑很重要，但有时非理性的选择让生活更丰富！",
      'zh-TW': "邏輯很重要，但有時非理性的選擇讓生活更豐富！",
      id: "Logika penting, tapi kadang pilihan tidak rasional membuat hidup lebih kaya!",
      vi: "Logic quan trọng, nhưng đôi khi lựa chọn phi lý làm cuộc sống phong phú hơn!"
    }
  },
  {
    type: "Type6",
    emoji: "🔥",
    title: {
      ko: "열정 도전형",
      en: "Passionate Challenge",
      ja: "情熱挑戦型",
      'zh-CN': "激情挑战型",
      'zh-TW': "激情挑戰型",
      id: "Tantangan Bergairah",
      vi: "Thử Thách Đam Mê"
    },
    description: {
      ko: "지금 이 순간! 열정적으로 살아가는 모험가",
      en: "This moment! A passionate adventurer",
      ja: "今この瞬間！情熱的に生きる冒険家",
      'zh-CN': "此时此刻！充满激情生活的冒险家",
      'zh-TW': "此時此刻！充滿激情生活的冒險家",
      id: "Saat ini! Petualang yang hidup dengan penuh gairah",
      vi: "Ngay bây giờ! Nhà thám hiểm sống đầy đam mê"
    },
    characteristics: {
      ko: "열정과 도전을 삶의 원동력으로 삼습니다. 새로운 것에 도전하고, 설레는 경험을 추구하며, 후회 없이 살고 싶어 합니다. 현재를 즐기고 순간을 불태우며 삽니다. 에너지 넘치고 매력적이지만 안정성은 부족할 수 있습니다.",
      en: "Uses passion and challenge as life's driving force. Challenges new things, pursues exciting experiences, wants to live without regret. Enjoys the present and burns each moment. Full of energy and attractive but may lack stability.",
      ja: "情熱と挑戦を人生の原動力とします。新しいことに挑戦し、ワクワクする経験を追求し、後悔なく生きたいです。現在を楽しみ、瞬間を燃やして生きます。エネルギーに溢れ魅力的ですが、安定性は不足するかもしれません。",
      'zh-CN': "将激情和挑战作为生活的动力。挑战新事物，追求令人兴奋的体验，希望无悔地生活。享受现在，燃烧每一刻。充满活力和魅力，但可能缺乏稳定性。",
      'zh-TW': "將激情和挑戰作為生活的動力。挑戰新事物，追求令人興奮的體驗，希望無悔地生活。享受現在，燃燒每一刻。充滿活力和魅力，但可能缺乏穩定性。",
      id: "Menggunakan gairah dan tantangan sebagai kekuatan pendorong hidup. Menantang hal-hal baru, mengejar pengalaman yang menggairahkan, ingin hidup tanpa penyesalan. Menikmati saat ini dan membakar setiap momen. Penuh energi dan menarik tapi mungkin kurang stabilitas.",
      vi: "Sử dụng đam mê và thử thách làm động lực sống. Thử thách những điều mới, theo đuổi trải nghiệm thú vị, muốn sống không hối tiếc. Tận hưởng hiện tại và đốt cháy từng khoảnh khắc. Tràn đầy năng lượng và hấp dẫn nhưng có thể thiếu ổn định."
    },
    impression: {
      ko: "핵심 가치: 열정, 도전, 설렘, 현재",
      en: "Core values: Passion, challenge, excitement, present",
      ja: "核心価値：情熱、挑戦、ワクワク、現在",
      'zh-CN': "核心价值：激情、挑战、兴奋、现在",
      'zh-TW': "核心價值：激情、挑戰、興奮、現在",
      id: "Nilai inti: Gairah, tantangan, kegembiraan, saat ini",
      vi: "Giá trị cốt lõi: Đam mê, thử thách, hứng thú, hiện tại"
    },
    pros: {
      ko: "열정, 에너지, 용기, 재미",
      en: "Passion, energy, courage, fun",
      ja: "情熱、エネルギー、勇気、楽しさ",
      'zh-CN': "激情、能量、勇气、乐趣",
      'zh-TW': "激情、能量、勇氣、樂趣",
      id: "Gairah, energi, keberanian, kesenangan",
      vi: "Đam mê, năng lượng, can đảm, thú vị"
    },
    cons: {
      ko: "불안정, 계획성 부족, 충동적",
      en: "Instability, lack of planning, impulsive",
      ja: "不安定、計画性不足、衝動的",
      'zh-CN': "不稳定、缺乏计划性、冲动",
      'zh-TW': "不穩定、缺乏計劃性、衝動",
      id: "Ketidakstabilan, kurang perencanaan, impulsif",
      vi: "Không ổn định, thiếu kế hoạch, bốc đồng"
    },
    advice: {
      ko: "열정도 좋지만 가끔은 안정도 필요해요. 현재와 미래의 균형을 생각해보세요!",
      en: "Passion is good, but sometimes stability is needed too. Think about the balance between present and future!",
      ja: "情熱もいいですが、時々安定も必要です。現在と未来のバランスを考えてみてください！",
      'zh-CN': "激情很好，但有时也需要稳定。想想现在和未来的平衡！",
      'zh-TW': "激情很好，但有時也需要穩定。想想現在和未來的平衡！",
      id: "Gairah baik, tapi kadang stabilitas juga diperlukan. Pikirkan keseimbangan antara sekarang dan masa depan!",
      vi: "Đam mê tốt, nhưng đôi khi cũng cần ổn định. Hãy nghĩ về sự cân bằng giữa hiện tại và tương lai!"
    }
  }
];

export function calculateLifePrioritiesResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  // 기본 점수 계산
  answers.forEach(answer => {
    if (answer && typeof answer === 'object') {
      Object.keys(answer).forEach(type => {
        if (scores[type as keyof typeof scores] !== undefined) {
          scores[type as keyof typeof scores] += answer[type];
        }
      });
    }
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    lastThreeAnswers.forEach(answer => {
      if (answer && typeof answer === 'object') {
        Object.keys(answer).forEach(type => {
          if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
            lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
          }
        });
      }
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
