// 나의 인생 우선순위 찾기 테스트 데이터

export interface LifePrioritiesQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: { type1: number; type2: number; type3: number; type4: number; type5: number; type6: number; };
  }>;
}

export interface LifePrioritiesResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  coreValues: Record<string, string>;
  strengths: Array<Record<string, string>>;
  weaknesses: Array<Record<string, string>>;
  advice: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
  };
}

// 12개 질문
export const lifePrioritiesQuestions: LifePrioritiesQuestion[] = [
  {
    id: 1,
    question: {
      ko: "인생에서 가장 후회하고 싶지 않은 것은?",
      en: "What do you most regret not having done in life?",
      ja: "人生で最も後悔したくないことは？",
      "zh-CN": "人生中最不想后悔的事是什么？",
      "zh-TW": "人生中最不想後悔的事是什麼？",
      id: "Apa yang paling tidak ingin kamu sesali dalam hidup?",
      vi: "Điều gì bạn không muốn hối tiếc nhất trong cuộc sống?"
    },
    options: [
      {
        text: {
          ko: "가족과 소중한 사람들에게 소홀했던 것",
          en: "Neglecting family and loved ones",
          ja: "家族や大切な人を疎かにしたこと",
          "zh-CN": "忽视家人和重要的人",
          "zh-TW": "忽視家人和重要的人",
          id: "Mengabaikan keluarga dan orang terkasih",
          vi: "Bỏ bê gia đình và người thân"
        },
        scores: { type1: 8, type2: 0, type3: 0, type4: 0, type5: 2, type6: 0 }
      },
      {
        text: {
          ko: "내 꿈과 목표를 이루지 못한 것",
          en: "Not achieving my dreams and goals",
          ja: "自分の夢と目標を達成できなかったこと",
          "zh-CN": "没有实现梦想和目标",
          "zh-TW": "沒有實現夢想和目標",
          id: "Tidak mencapai impian dan tujuan",
          vi: "Không đạt được ước mơ và mục tiêu"
        },
        scores: { type1: 0, type2: 8, type3: 0, type4: 0, type5: 0, type6: 2 }
      },
      {
        text: {
          ko: "하고 싶은 것을 하지 못하고 참기만 한 것",
          en: "Not doing what I wanted and just enduring",
          ja: "やりたいことをせず我慢ばかりしたこと",
          "zh-CN": "没做想做的事，只是一味忍耐",
          "zh-TW": "沒做想做的事，只是一味忍耐",
          id: "Tidak melakukan yang diinginkan dan hanya menahan",
          vi: "Không làm những gì muốn và chỉ chịu đựng"
        },
        scores: { type1: 0, type2: 0, type3: 8, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "불행하고 즐겁지 않게 산 것",
          en: "Living unhappily and without joy",
          ja: "不幸で楽しくない人生を送ったこと",
          "zh-CN": "过着不快乐的生活",
          "zh-TW": "過著不快樂的生活",
          id: "Hidup dengan tidak bahagia dan tanpa sukacita",
          vi: "Sống không hạnh phúc và không vui vẻ"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "인생의 마지막 순간, 무엇을 떠올리고 싶나요?",
      en: "What do you want to remember in your final moments?",
      ja: "人生の最後の瞬間、何を思い出したいですか？",
      "zh-CN": "人生的最后时刻，你想回忆什么？",
      "zh-TW": "人生的最後時刻，你想回憶什麼？",
      id: "Di saat-saat terakhir hidup, apa yang ingin kamu ingat?",
      vi: "Trong những khoảnh khắc cuối cùng của cuộc đời, bạn muốn nhớ đến điều gì?"
    },
    options: [
      {
        text: {
          ko: "사랑했던 사람들과의 따뜻한 추억",
          en: "Warm memories with loved ones",
          ja: "愛した人たちとの温かい思い出",
          "zh-CN": "与所爱之人的温暖回忆",
          "zh-TW": "與所愛之人的溫暖回憶",
          id: "Kenangan hangat dengan orang terkasih",
          vi: "Những kỷ niệm ấm áp với người thân yêu"
        },
        scores: { type1: 8, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "내가 이룬 성취와 남긴 업적",
          en: "My achievements and legacy",
          ja: "成し遂げた成果と残した功績",
          "zh-CN": "我取得的成就和留下的业绩",
          "zh-TW": "我取得的成就和留下的業績",
          id: "Pencapaian dan warisan saya",
          vi: "Những thành tựu và di sản tôi để lại"
        },
        scores: { type1: 0, type2: 8, type3: 0, type4: 0, type5: 0, type6: 2 }
      },
      {
        text: {
          ko: "자유롭게 원하는 대로 살았던 순간들",
          en: "Moments I lived freely as I wanted",
          ja: "自由に望む通りに生きた瞬間",
          "zh-CN": "自由自在地生活的瞬间",
          "zh-TW": "自由自在地生活的瞬間",
          id: "Momen-momen hidup bebas sesuai keinginan",
          vi: "Những khoảnh khắc sống tự do theo ý muốn"
        },
        scores: { type1: 0, type2: 0, type3: 8, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "행복했던 일상의 작은 기쁨들",
          en: "Small joys of everyday happiness",
          ja: "幸せだった日常の小さな喜び",
          "zh-CN": "日常中幸福的小快乐",
          "zh-TW": "日常中幸福的小快樂",
          id: "Kesenangan kecil dari kebahagiaan sehari-hari",
          vi: "Những niềm vui nhỏ trong cuộc sống hạnh phúc hàng ngày"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "갑자기 10억이 생긴다면?",
      en: "If you suddenly had 1 billion won?",
      ja: "突然10億円が生まれたら？",
      "zh-CN": "如果突然有10亿韩元？",
      "zh-TW": "如果突然有10億韓元？",
      id: "Jika tiba-tiba punya 1 miliar won?",
      vi: "Nếu đột nhiên có 1 tỷ won?"
    },
    options: [
      {
        text: {
          ko: "가족과 사랑하는 사람들과 함께 쓸 것",
          en: "Spend it with family and loved ones",
          ja: "家族と愛する人と一緒に使う",
          "zh-CN": "和家人爱人一起用",
          "zh-TW": "和家人愛人一起用",
          id: "Menghabiskannya dengan keluarga dan orang terkasih",
          vi: "Dùng với gia đình và người thân yêu"
        },
        scores: { type1: 8, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "더 큰 성공을 위한 투자와 도전",
          en: "Invest and challenge for greater success",
          ja: "より大きな成功のための投資と挑戦",
          "zh-CN": "为更大成功投资和挑战",
          "zh-TW": "為更大成功投資和挑戰",
          id: "Berinvestasi dan menantang untuk kesuksesan yang lebih besar",
          vi: "Đầu tư và thử thách để thành công lớn hơn"
        },
        scores: { type1: 0, type2: 8, type3: 0, type4: 0, type5: 0, type6: 2 }
      },
      {
        text: {
          ko: "회사 그만두고 하고 싶은 거 다 하기",
          en: "Quit work and do everything I want",
          ja: "会社を辞めてやりたいことを全部やる",
          "zh-CN": "辞职做所有想做的事",
          "zh-TW": "辭職做所有想做的事",
          id: "Berhenti kerja dan melakukan semua yang diinginkan",
          vi: "Nghỉ việc và làm tất cả những gì muốn"
        },
        scores: { type1: 0, type2: 0, type3: 8, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "여유롭게 행복한 삶 즐기기",
          en: "Enjoy a relaxed and happy life",
          ja: "ゆったりと幸せな人生を楽しむ",
          "zh-CN": "悠闲地享受幸福生活",
          "zh-TW": "悠閒地享受幸福生活",
          id: "Menikmati hidup santai dan bahagia",
          vi: "Tận hưởng cuộc sống thoải mái và hạnh phúc"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "직장을 선택할 때 가장 중요한 기준은?",
      en: "What's most important when choosing a job?",
      ja: "職場を選ぶ際に最も重要な基準は？",
      "zh-CN": "选择工作时最重要的标准是什么？",
      "zh-TW": "選擇工作時最重要的標準是什麼？",
      id: "Apa yang paling penting saat memilih pekerjaan?",
      vi: "Điều gì quan trọng nhất khi chọn công việc?"
    },
    options: [
      {
        text: {
          ko: "가족과 함께할 시간이 충분한지",
          en: "Enough time with family",
          ja: "家族と過ごす時間が十分か",
          "zh-CN": "是否有足够时间陪伴家人",
          "zh-TW": "是否有足夠時間陪伴家人",
          id: "Waktu yang cukup bersama keluarga",
          vi: "Có đủ thời gian với gia đình"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "성장 가능성과 성취감이 있는지",
          en: "Growth potential and sense of achievement",
          ja: "成長の可能性と達成感があるか",
          "zh-CN": "是否有成长可能性和成就感",
          "zh-TW": "是否有成長可能性和成就感",
          id: "Potensi pertumbuhan dan rasa pencapaian",
          vi: "Tiềm năng phát triển và cảm giác thành tựu"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 2, type6: 0 }
      },
      {
        text: {
          ko: "자유롭고 제약이 적은지",
          en: "Freedom and few restrictions",
          ja: "自由で制約が少ないか",
          "zh-CN": "是否自由且限制少",
          "zh-TW": "是否自由且限制少",
          id: "Kebebasan dan sedikit pembatasan",
          vi: "Tự do và ít hạn chế"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "즐겁고 스트레스 없는지",
          en: "Enjoyable and stress-free",
          ja: "楽しくストレスのないか",
          "zh-CN": "是否愉快且无压力",
          "zh-TW": "是否愉快且無壓力",
          id: "Menyenangkan dan bebas stres",
          vi: "Vui vẻ và không căng thẳng"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 3, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구가 전혀 다른 길을 가라고 조언한다면?",
      en: "If a friend advises you to take a completely different path?",
      ja: "友達が全く違う道を進むよう勧めたら？",
      "zh-CN": "如果朋友建议你走完全不同的路？",
      "zh-TW": "如果朋友建議你走完全不同的路？",
      id: "Jika teman menyarankan jalan yang sama sekali berbeda?",
      vi: "Nếu bạn bè khuyên bạn đi con đường hoàn toàn khác?"
    },
    options: [
      {
        text: {
          ko: "가까운 사람들의 의견이 중요함",
          en: "Opinions of close people matter",
          ja: "身近な人の意見が重要",
          "zh-CN": "亲近的人的意见很重要",
          "zh-TW": "親近的人的意見很重要",
          id: "Pendapat orang terdekat penting",
          vi: "Ý kiến của người thân quan trọng"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "내 목표에 맞는지가 중요함",
          en: "Whether it matches my goals matters",
          ja: "自分の目標に合っているかが重要",
          "zh-CN": "是否符合我的目标很重要",
          "zh-TW": "是否符合我的目標很重要",
          id: "Apakah sesuai dengan tujuan saya",
          vi: "Việc phù hợp với mục tiêu của tôi quan trọng"
        },
        scores: { type1: 0, type2: 2, type3: 0, type4: 0, type5: 8, type6: 2 }
      },
      {
        text: {
          ko: "내가 원하는 게 뭔지가 중요함",
          en: "What I want matters",
          ja: "自分が望むことが何かが重要",
          "zh-CN": "我想要什么很重要",
          "zh-TW": "我想要什麼很重要",
          id: "Apa yang saya inginkan penting",
          vi: "Điều tôi muốn quan trọng"
        },
        scores: { type1: 0, type2: 0, type3: 2, type4: 0, type5: 2, type6: 0 }
      },
      {
        text: {
          ko: "내가 행복할지가 중요함",
          en: "Whether I'll be happy matters",
          ja: "自分が幸せになれるかが重要",
          "zh-CN": "我是否会快乐很重要",
          "zh-TW": "我是否會快樂很重要",
          id: "Apakah saya akan bahagia penting",
          vi: "Việc tôi có hạnh phúc hay không quan trọng"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 0, type6: 8 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "80세가 된 당신, 어떤 삶이었기를 바라나요?",
      en: "What kind of life do you want at 80?",
      ja: "80歳になったあなた、どんな人生だったら良いですか？",
      "zh-CN": "80岁的你，希望过什么样的生活？",
      "zh-TW": "80歲的你，希望過什麼樣的生活？",
      id: "Pada usia 80, kehidupan seperti apa yang Anda inginkan?",
      vi: "Ở tuổi 80, bạn muốn có cuộc sống như thế nào?"
    },
    options: [
      {
        text: {
          ko: "사랑받고 사랑했던 삶",
          en: "A life loved and loving",
          ja: "愛され愛した人生",
          "zh-CN": "被爱并爱过的生活",
          "zh-TW": "被愛並愛過的生活",
          id: "Hidup dicintai dan mencintai",
          vi: "Cuộc sống được yêu và đã yêu"
        },
        scores: { type1: 8, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "성공하고 인정받았던 삶",
          en: "A successful and recognized life",
          ja: "成功し認められた人生",
          "zh-CN": "成功且被认可的生活",
          "zh-TW": "成功且被認可的生活",
          id: "Hidup sukses dan diakui",
          vi: "Cuộc sống thành công và được công nhận"
        },
        scores: { type1: 0, type2: 8, type3: 0, type4: 0, type5: 0, type6: 2 }
      },
      {
        text: {
          ko: "자유롭고 제약 없었던 삶",
          en: "A free and unrestricted life",
          ja: "自由で制約のない人生",
          "zh-CN": "自由且无限制的生活",
          "zh-TW": "自由且無限制的生活",
          id: "Hidup bebas dan tanpa pembatasan",
          vi: "Cuộc sống tự do và không bị hạn chế"
        },
        scores: { type1: 0, type2: 0, type3: 8, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "평온하고 행복했던 삶",
          en: "A peaceful and happy life",
          ja: "平穏で幸せだった人生",
          "zh-CN": "平静且幸福的生活",
          "zh-TW": "平靜且幸福的生活",
          id: "Hidup damai dan bahagia",
          vi: "Cuộc sống bình yên và hạnh phúc"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "힘든 결정을 내려야 할 때, 무엇을 가장 먼저 생각하나요?",
      en: "When making difficult decisions, what do you think about first?",
      ja: "難しい決断を下すとき、まず何を考えますか？",
      "zh-CN": "做艰难决定时，你首先考虑什么？",
      "zh-TW": "做艱難決定時，你首先考慮什麼？",
      id: "Saat membuat keputusan sulit, apa yang pertama Anda pikirkan?",
      vi: "Khi đưa ra quyết định khó khăn, bạn nghĩ đến điều gì đầu tiên?"
    },
    options: [
      {
        text: {
          ko: "주변 사람들에게 미치는 영향",
          en: "Impact on people around me",
          ja: "周りの人への影響",
          "zh-CN": "对周围人的影响",
          "zh-TW": "對周圍人的影響",
          id: "Dampak pada orang sekitar",
          vi: "Ảnh hưởng đến những người xung quanh"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "내 미래 목표에 도움이 되는지",
          en: "Whether it helps my future goals",
          ja: "自分の将来の目標に役立つか",
          "zh-CN": "是否有助于我未来的目标",
          "zh-TW": "是否有助於我未來的目標",
          id: "Apakah membantu tujuan masa depan saya",
          vi: "Có giúp ích cho mục tiêu tương lai của tôi không"
        },
        scores: { type1: 0, type2: 2, type3: 0, type4: 0, type5: 8, type6: 2 }
      },
      {
        text: {
          ko: "내가 진짜 원하는 게 뭔지",
          en: "What I really want",
          ja: "自分が本当に望むことは何か",
          "zh-CN": "我真正想要什么",
          "zh-TW": "我真正想要什麼",
          id: "Apa yang benar-benar saya inginkan",
          vi: "Điều tôi thực sự muốn"
        },
        scores: { type1: 0, type2: 0, type3: 2, type4: 0, type5: 2, type6: 0 }
      },
      {
        text: {
          ko: "어떤 선택이 더 편안하고 행복한지",
          en: "Which choice is more comfortable and happy",
          ja: "どの選択がより快適で幸せか",
          "zh-CN": "哪个选择更舒适快乐",
          "zh-TW": "哪個選擇更舒適快樂",
          id: "Pilihan mana yang lebih nyaman dan bahagia",
          vi: "Lựa chọn nào thoải mái và hạnh phúc hơn"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 0, type6: 8 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "1년의 안식년이 주어진다면?",
      en: "If given a year-long sabbatical?",
      ja: "1年間のサバティカルが与えられたら？",
      "zh-CN": "如果给一年休假？",
      "zh-TW": "如果給一年休假？",
      id: "Jika diberi sabatikal selama setahun?",
      vi: "Nếu được cho nghỉ phép một năm?"
    },
    options: [
      {
        text: {
          ko: "가족, 친구들과 깊은 시간 보내기",
          en: "Spend deep time with family and friends",
          ja: "家族、友人と深い時間を過ごす",
          "zh-CN": "与家人朋友共度深度时光",
          "zh-TW": "與家人朋友共度深度時光",
          id: "Menghabiskan waktu yang dalam dengan keluarga dan teman",
          vi: "Dành thời gian sâu sắc với gia đình và bạn bè"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "자기계발과 새로운 도전",
          en: "Self-development and new challenges",
          ja: "自己啓発と新しい挑戦",
          "zh-CN": "自我提升和新挑战",
          "zh-TW": "自我提升和新挑戰",
          id: "Pengembangan diri dan tantangan baru",
          vi: "Phát triển bản thân và thử thách mới"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 2, type6: 2 }
      },
      {
        text: {
          ko: "세계여행이나 버킷리스트 실현",
          en: "World travel or fulfilling bucket list",
          ja: "世界旅行やバケットリスト実現",
          "zh-CN": "世界旅行或实现愿望清单",
          "zh-TW": "世界旅行或實現願望清單",
          id: "Perjalanan dunia atau mewujudkan daftar keinginan",
          vi: "Du lịch thế giới hoặc thực hiện danh sách mong muốn"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "쉬면서 여유롭게 즐기기",
          en: "Rest and enjoy leisurely",
          ja: "休みながらゆったり楽しむ",
          "zh-CN": "休息并悠闲享受",
          "zh-TW": "休息並悠閒享受",
          id: "Beristirahat dan menikmati dengan santai",
          vi: "Nghỉ ngơi và tận hưởng nhàn nhã"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 3, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "당신에게 성공이란?",
      en: "What is success to you?",
      ja: "あなたにとって成功とは？",
      "zh-CN": "对你来说成功是什么？",
      "zh-TW": "對你來說成功是什麼？",
      id: "Apa itu kesuksesan bagimu?",
      vi: "Thành công đối với bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "사랑하는 사람들과 좋은 관계 유지",
          en: "Maintaining good relationships with loved ones",
          ja: "愛する人との良い関係を維持すること",
          "zh-CN": "与所爱的人保持良好关系",
          "zh-TW": "與所愛的人保持良好關係",
          id: "Mempertahankan hubungan baik dengan orang terkasih",
          vi: "Duy trì mối quan hệ tốt với người thân yêu"
        },
        scores: { type1: 8, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "목표 달성과 사회적 인정",
          en: "Achieving goals and social recognition",
          ja: "目標達成と社会的承認",
          "zh-CN": "实现目标和社会认可",
          "zh-TW": "實現目標和社會認可",
          id: "Mencapai tujuan dan pengakuan sosial",
          vi: "Đạt được mục tiêu và sự công nhận xã hội"
        },
        scores: { type1: 0, type2: 8, type3: 0, type4: 0, type5: 0, type6: 2 }
      },
      {
        text: {
          ko: "원하는 대로 살 수 있는 자유",
          en: "Freedom to live as I want",
          ja: "望む通りに生きられる自由",
          "zh-CN": "按自己意愿生活的自由",
          "zh-TW": "按自己意願生活的自由",
          id: "Kebebasan untuk hidup sesuai keinginan",
          vi: "Tự do sống theo ý muốn"
        },
        scores: { type1: 0, type2: 0, type3: 8, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "매일 행복하고 만족스러운 삶",
          en: "Happy and satisfying life every day",
          ja: "毎日幸せで満足できる人生",
          "zh-CN": "每天快乐且满足的生活",
          "zh-TW": "每天快樂且滿足的生活",
          id: "Hidup bahagia dan memuaskan setiap hari",
          vi: "Cuộc sống hạnh phúc và thỏa mãn mỗi ngày"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 0, type6: 0 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "지금 당장 무엇이 채워지면 만족할까요?",
      en: "What would satisfy you right now?",
      ja: "今すぐ何が満たされれば満足しますか？",
      "zh-CN": "现在立即什么会让你满足？",
      "zh-TW": "現在立即什麼會讓你滿足？",
      id: "Apa yang akan memuaskanmu sekarang?",
      vi: "Điều gì sẽ làm bạn thỏa mãn ngay bây giờ?"
    },
    options: [
      {
        text: {
          ko: "더 깊고 진실한 관계",
          en: "Deeper and truer relationships",
          ja: "より深く真実な関係",
          "zh-CN": "更深层和真实的关系",
          "zh-TW": "更深層和真實的關係",
          id: "Hubungan yang lebih dalam dan benar",
          vi: "Mối quan hệ sâu sắc và chân thật hơn"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "더 큰 성취와 발전",
          en: "Greater achievements and growth",
          ja: "より大きな成果と発展",
          "zh-CN": "更大的成就和发展",
          "zh-TW": "更大的成就和發展",
          id: "Pencapaian dan pertumbuhan yang lebih besar",
          vi: "Thành tựu và phát triển lớn hơn"
        },
        scores: { type1: 0, type2: 2, type3: 0, type4: 0, type5: 8, type6: 2 }
      },
      {
        text: {
          ko: "더 많은 자유와 선택권",
          en: "More freedom and choices",
          ja: "より多くの自由と選択権",
          "zh-CN": "更多自由和选择权",
          "zh-TW": "更多自由和選擇權",
          id: "Lebih banyak kebebasan dan pilihan",
          vi: "Nhiều tự do và lựa chọn hơn"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "더 많은 평온과 즐거움",
          en: "More peace and joy",
          ja: "より多くの平穏と喜び",
          "zh-CN": "更多平静和快乐",
          "zh-TW": "更多平靜和快樂",
          id: "Lebih banyak kedamaian dan kegembiraan",
          vi: "Nhiều bình yên và niềm vui hơn"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 0, type6: 8 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 장례식에서 사람들이 뭐라고 말하길 바라나요?",
      en: "What do you want people to say at your funeral?",
      ja: "あなたの葬儀で人々に何と言ってほしいですか？",
      "zh-CN": "你希望人们在你的葬礼上说什么？",
      "zh-TW": "你希望人們在你的葬禮上說什麼？",
      id: "Apa yang ingin orang katakan di pemakamanmu?",
      vi: "Bạn muốn mọi người nói gì tại đám tang của bạn?"
    },
    options: [
      {
        text: {
          ko: "\"정말 사랑이 많은 사람이었어\"",
          en: "\"A truly loving person\"",
          ja: "「本当に愛にあふれた人だった」",
          "zh-CN": "「真是个充满爱的人」",
          "zh-TW": "「真是個充滿愛的人」",
          id: "\"Orang yang benar-benar penuh cinta\"",
          vi: "\"Người thực sự đầy tình yêu\""
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "\"훌륭한 업적을 남긴 사람이었어\"",
          en: "\"Left great achievements\"",
          ja: "「素晴らしい功績を残した人だった」",
          "zh-CN": "「留下了杰出成就的人」",
          "zh-TW": "「留下了傑出成就的人」",
          id: "\"Meninggalkan pencapaian besar\"",
          vi: "\"Để lại thành tựu vĩ đại\""
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 8, type6: 2 }
      },
      {
        text: {
          ko: "\"자기 인생을 멋지게 산 사람이었어\"",
          en: "\"Lived life magnificently\"",
          ja: "「自分の人生を素晴らしく生きた人だった」",
          "zh-CN": "「精彩地过完自己人生的人」",
          "zh-TW": "「精彩地過完自己人生的人」",
          id: "\"Hidup dengan luar biasa\"",
          vi: "\"Đã sống cuộc đời tuyệt vời\""
        },
        scores: { type1: 0, type2: 0, type3: 2, type4: 0, type5: 2, type6: 0 }
      },
      {
        text: {
          ko: "\"항상 행복해 보이던 사람이었어\"",
          en: "\"Always seemed happy\"",
          ja: "「いつも幸せそうに見えた人だった」",
          "zh-CN": "「总是看起来很幸福的人」",
          "zh-TW": "「總是很幸福的樣子的人」",
          id: "\"Selalu terlihat bahagia\"",
          vi: "\"Luôn có vẻ hạnh phúc\""
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 0, type6: 8 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "인생에서 절대 포기하고 싶지 않은 것은?",
      en: "What you absolutely don't want to give up in life?",
      ja: "人生で絶対に諦めたくないことは？",
      "zh-CN": "生活中你绝对不想放弃的是什么？",
      "zh-TW": "生活中你絕對不想放棄的是什麼？",
      id: "Apa yang sama sekali tidak ingin kamu lepaskan dalam hidup?",
      vi: "Điều gì bạn hoàn toàn không muốn từ bỏ trong cuộc sống?"
    },
    options: [
      {
        text: {
          ko: "소중한 관계와 유대감",
          en: "Precious relationships and bonds",
          ja: "大切な関係と絆",
          "zh-CN": "珍贵的关系和纽带",
          "zh-TW": "珍貴的關係和紐帶",
          id: "Hubungan dan ikatan yang berharga",
          vi: "Mối quan hệ và sợi dây liên kết quý giá"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "나의 꿈과 성장",
          en: "My dreams and growth",
          ja: "自分の夢と成長",
          "zh-CN": "我的梦想和成长",
          "zh-TW": "我的夢想和成長",
          id: "Impian dan pertumbuhan saya",
          vi: "Ước mơ và sự phát triển của tôi"
        },
        scores: { type1: 0, type2: 2, type3: 0, type4: 0, type5: 8, type6: 2 }
      },
      {
        text: {
          ko: "나의 자유와 독립성",
          en: "My freedom and independence",
          ja: "自分の自由と独立性",
          "zh-CN": "我的自由和独立",
          "zh-TW": "我的自由和獨立",
          id: "Kebebasan dan kemandirian saya",
          vi: "Tự do và độc lập của tôi"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 }
      },
      {
        text: {
          ko: "나의 평화와 행복",
          en: "My peace and happiness",
          ja: "自分の平和と幸せ",
          "zh-CN": "我的平静和幸福",
          "zh-TW": "我的平靜和幸福",
          id: "Kedamaian dan kebahagiaan saya",
          vi: "Sự bình yên và hạnh phúc của tôi"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 0, type6: 8 }
      }
    ]
  }
];

// 6가지 결과
export const lifePrioritiesResults: LifePrioritiesResult[] = [
  {
    type: 'type1',
    emoji: '💕',
    title: {
      ko: '관계 중심형',
      en: 'Relationship-Focused',
      ja: '関係中心型',
      "zh-CN": '关系中心型',
      "zh-TW": '關係中心型',
      id: 'Fokus Hubungan',
      vi: 'Trọng tâm Mối quan hệ'
    },
    description: {
      ko: '"사랑이 전부! 사람이 최고의 가치"\n인생에서 가장 중요한 것은 사람입니다. 가족, 연인, 친구와의 관계가 성공이나 돈보다 우선입니다. 혼자 성공하는 것보다 함께 행복한 것을 선택합니다. 사랑하고 사랑받는 것이 인생의 목표이며, 관계 속에서 의미를 찾습니다. 따뜻하고 헌신적이지만 때로는 자신을 잃을 수 있으니 균형이 필요합니다.',
      en: '"Love is everything! People are the greatest value"\nThe most important thing in life is people. Relationships with family, lovers, and friends take priority over success or money. You choose happiness together over achieving alone. Loving and being loved is the goal of life, and you find meaning in relationships. Warm and devoted, but may lose yourself sometimes, so balance is needed.',
      ja: '「愛がすべて！人が最高の価値」\n人生で最も重要なのは人です。家族、恋人、友人との関係が成功やお金より優先されます。一人で成功するより一緒に幸せになることを選びます。愛し愛されることが人生の目標であり、関係の中で意味を見出します。温かく献身的ですが、時には自分を見失うこともあるのでバランスが必要です。',
      "zh-CN": '"爱是一切！人是最高价值"\n生活中最重要的是人。与家人、恋人、朋友的关系优先于成功或金钱。比起独自成功，你选择一起幸福。爱与被爱是人生目标，你在关系中寻找意义。温暖且奉献，但有时可能迷失自我，所以需要平衡。',
      "zh-TW": '"愛是一切！人是最高價值"\n生活中最重要的是人。與家人、戀人、朋友的關係優先於成功或金錢。比起獨自成功，你選擇一起幸福。愛與被愛是人生目標，你在關係中尋找意義。溫暖且奉獻，但有時可能迷失自我，所以需要平衡。',
      id: '"Cinta adalah segalanya! Orang adalah nilai terbesar"\nYang paling penting dalam hidup adalah orang. Hubungan dengan keluarga, kekasih, dan teman lebih diutamakan daripada kesuksesan atau uang. Kamu memilih kebahagiaan bersama daripada mencapai sendiri. Mencintai dan dicintai adalah tujuan hidup, dan kamu menemukan makna dalam hubungan. Hangat dan setia, tapi kadang kehilangan diri sendiri, jadi keseimbangan diperlukan.',
      vi: '"Tình yêu là tất cả! Con người là giá trị lớn nhất"\nĐiều quan trọng nhất trong cuộc sống là con người. Mối quan hệ với gia đình, người yêu và bạn bè được ưu tiên hơn thành công hay tiền bạc. Bạn chọn hạnh phúc cùng nhau thay vì đạt được một mình. Yêu và được yêu là mục tiêu cuộc sống, và bạn tìm thấy ý nghĩa trong các mối quan hệ. Ấm áp và tận tụy, nhưng đôi khi có thể mất đi bản thân, nên cần cân bằng.'
    },
    coreValues: {
      ko: '사랑, 가족, 우정, 유대감',
      en: 'Love, family, friendship, bonds',
      ja: '愛、家族、友情、絆',
      "zh-CN": '爱、家庭、友谊、纽带',
      "zh-TW": '愛、家庭、友誼、紐帶',
      id: 'Cinta, keluarga, persahabatan, ikatan',
      vi: 'Tình yêu, gia đình, tình bạn, sợi dây liên kết'
    },
    strengths: [
      { ko: '따뜻함', en: 'Warmth', ja: '温かさ', "zh-CN": '温暖', "zh-TW": '溫暖', id: 'Kehangatan', vi: 'Ấm áp' },
      { ko: '헌신', en: 'Devotion', ja: '献身', "zh-CN": '奉献', "zh-TW": '奉獻', id: 'Pengabdian', vi: 'Tận tụy' },
      { ko: '공감', en: 'Empathy', ja: '共感', "zh-CN": '共情', "zh-TW": '共情', id: 'Empati', vi: 'Đồng cảm' },
      { ko: '관계 능력', en: 'Relationship skills', ja: '関係能力', "zh-CN": '关系能力', "zh-TW": '關係能力', id: 'Keterampilan hubungan', vi: 'Kỹ năng quan hệ' }
    ],
    weaknesses: [
      { ko: '자아 상실 위험', en: 'Risk of losing self', ja: '自己喪失のリスク', "zh-CN": '自我迷失风险', "zh-TW": '自我迷失風險', id: 'Risiko kehilangan diri', vi: 'Nguy cơ mất bản thân' },
      { ko: '의존성', en: 'Dependency', ja: '依存性', "zh-CN": '依赖性', "zh-TW": '依賴性', id: 'Ketergantungan', vi: 'Sự phụ thuộc' },
      { ko: '이별 힘듦', en: 'Difficult separation', ja: '別れが辛い', "zh-CN": '离别痛苦', "zh-TW": '離別痛苦', id: 'Perpisahan sulit', vi: 'Chia ly khó khăn' }
    ],
    advice: {
      ko: '사람도 중요하지만 나 자신도 소중해요. 건강한 관계는 독립적인 두 사람이 만듭니다.',
      en: 'People are important, but you are precious too. Healthy relationships are built by two independent people.',
      ja: '人も大切ですが、自分自身も大切です。健全な関係は独立した二人が作ります。',
      "zh-CN": '人固然重要，但你自己也很珍贵。健康的关系是由两个独立的人建立的。',
      "zh-TW": '人固然重要，但你自己也很珍貴。健康的關係是由兩個獨立的人建立的。',
      id: 'Orang penting, tapi kamu juga berharga. Hubungan sehat dibangun oleh dua orang yang mandiri.',
      vi: 'Con người quan trọng, nhưng bạn cũng quý giá. Mối quan hệ lành mạnh được xây dựng bởi hai người độc lập.'
    },
    compatibility: {
      best: ['type1'],
      good: ['type4'],
      careful: ['type2', 'type3']
    }
  },
  {
    type: 'type2',
    emoji: '🏆',
    title: {
      ko: '성취 지향형',
      en: 'Achievement-Oriented',
      ja: '達成志向型',
      "zh-CN": '成就导向型',
      "zh-TW": '成就導向型',
      id: 'Berorientasi Pencapaian',
      vi: 'Định hướng Thành tựu'
    },
    description: {
      ko: '"성공이 목표! 끊임없이 성장하는 야심가"\n인생에서 가장 중요한 것은 성취와 성장입니다. 목표를 이루고, 인정받고, 발전하는 것이 최우선입니다. 현재의 편안함보다 미래의 성공을 선택하고, 도전을 즐깁니다. 야망이 크고 추진력이 강하지만, 관계나 행복을 소홀히 할 수 있습니다. 성공과 삶의 균형이 필요합니다.',
      en: '"Success is the goal! An ambitious person who constantly grows"\nThe most important thing in life is achievement and growth. Achieving goals, being recognized, and developing are top priorities. You choose future success over current comfort and enjoy challenges. Great ambition and strong drive, but may neglect relationships or happiness. Balance between success and life is needed.',
      ja: '「成功が目標！絶えず成長する野心家」\n人生で最も重要なのは達成と成長です。目標を達成し、認められ、発展することが最優先です。現在の安らかさより未来の成功を選び、挑戦を楽しみます。野心が大きく推進力が強いですが、関係や幸せを疎かにすることがあります。成功と人生のバランスが必要です。',
      "zh-CN": '"成功是目标！不断成长的野心家"\n生活中最重要的是成就和成长。实现目标、获得认可、发展是首要任务。你选择未来的成功而不是当下的舒适，享受挑战。雄心壮志且推动力强，但可能忽视关系或幸福。需要平衡成功与生活。',
      "zh-TW": '"成功是目標！不斷成長的野心家"\n生活中最重要的是成就和成長。實現目標、獲得認可、發展是首要任務。你選擇未來的成功而不是當下的舒適，享受挑戰。雄心壯志且推動力強，但可能忽視關係或幸福。需要平衡成功與生活。',
      id: '"Kesuksesan adalah tujuan! Orang ambisius yang terus tumbuh"\nYang paling penting dalam hidup adalah pencapaian dan pertumbuhan. Mencapai tujuan, diakui, dan berkembang adalah prioritas utama. Kamu memilih kesuksesan masa depan daripada kenyamanan saat ini dan menikmati tantangan. Ambisi besar dan dorongan kuat, tapi mungkin mengabaikan hubungan atau kebahagiaan. Keseimbangan antara kesuksesan dan hidup diperlukan.',
      vi: '"Thành công là mục tiêu! Người đầy tham vọng không ngừng phát triển"\nĐiều quan trọng nhất trong cuộc sống là thành tựu và phát triển. Đạt được mục tiêu, được công nhận và phát triển là ưu tiên hàng đầu. Bạn chọn thành công tương lai thay vì sự thoải mái hiện tại và tận hưởng thử thách. Tham vọng lớn và động lực mạnh mẽ, nhưng có thể bỏ bê các mối quan hệ hoặc hạnh phúc. Cần cân bằng giữa thành công và cuộc sống.'
    },
    coreValues: {
      ko: '성공, 성장, 목표, 인정',
      en: 'Success, growth, goals, recognition',
      ja: '成功、成長、目標、承認',
      "zh-CN": '成功、成长、目标、认可',
      "zh-TW": '成功、成長、目標、認可',
      id: 'Kesuksesan, pertumbuhan, tujuan, pengakuan',
      vi: 'Thành công, phát triển, mục tiêu, công nhận'
    },
    strengths: [
      { ko: '추진력', en: 'Drive', ja: '推進力', "zh-CN": '推动力', "zh-TW": '推動力', id: 'Dorongan', vi: 'Động lực' },
      { ko: '성취욕', en: 'Achievement desire', ja: '達成欲', "zh-CN": '成就欲', "zh-TW": '成就欲', id: 'Keinginan pencapaian', vi: 'Khát vọng thành tựu' },
      { ko: '발전', en: 'Progress', ja: '発展', "zh-CN": '发展', "zh-TW": '發展', id: 'Kemajuan', vi: 'Tiến bộ' },
      { ko: '리더십', en: 'Leadership', ja: 'リーダーシップ', "zh-CN": '领导力', "zh-TW": '領導力', id: 'Kepemimpinan', vi: 'Khả năng lãnh đạo' }
    ],
    weaknesses: [
      { ko: '관계 소홀', en: 'Neglecting relationships', ja: '関係疎か', "zh-CN": '忽视关系', "zh-TW": '忽視關係', id: 'Mengabaikan hubungan', vi: 'Bỏ bê mối quan hệ' },
      { ko: '번아웃', en: 'Burnout', ja: '燃え尽き', "zh-CN": '倦怠', "zh-TW": '倦怠', id: 'Kelelahan', vi: 'Kiệt sức' },
      { ko: '워커홀릭', en: 'Workaholic', ja: 'ワーカホリック', "zh-CN": '工作狂', "zh-TW": '工作狂', id: 'Workaholic', vi: 'Nghiện công việc' }
    ],
    advice: {
      ko: '정상에 올라도 혼자면 외로워요. 과정을 함께할 사람들도 소중히 하세요.',
      en: 'Even at the top, you\'ll be lonely alone. Cherish the people who walk the journey with you.',
      ja: '頂上に立っても一人なら寂しいです。過程を共にする人も大切にしてください。',
      "zh-CN": '即使站在顶峰，独自一人也会孤独。珍惜与你同行的人。',
      "zh-TW": '即使站在頂峰，獨自一人也會孤獨。珍惜與你同行的人。',
      id: 'Bahkan di puncak, kamu akan kesepian sendirian. Hargai orang-orang yang berjalan bersama kamu.',
      vi: 'Ngay cả ở đỉnh cao, bạn sẽ cô đơn một mình. Trân trọng những người đi cùng bạn trên hành trình.'
    },
    compatibility: {
      best: ['type2'],
      good: ['type5'],
      careful: ['type1', 'type4']
    }
  },
  {
    type: 'type3',
    emoji: '🦅',
    title: {
      ko: '자유 추구형',
      en: 'Freedom-Seeking',
      ja: '自由追求型',
      "zh-CN": '自由追求型',
      "zh-TW": '自由追求型',
      id: 'Mencari Kebebasan',
      vi: 'Theo đuổi Tự do'
    },
    description: {
      ko: '"자유가 최고! 내 삶은 내가 결정해"\n인생에서 가장 중요한 것은 자유와 독립입니다. 누구에게도 얽매이지 않고, 하고 싶은 대로 사는 것이 목표입니다. 안정보다 모험을, 타협보다 자기 길을 선택합니다. 독립적이고 용감하지만 때로는 외롭고 불안정할 수 있습니다. 자유와 책임의 균형이 필요합니다.',
      en: '"Freedom is the best! I decide my own life"\nThe most important thing in life is freedom and independence. Living as you want without being bound to anyone is the goal. You choose adventure over stability, your own path over compromise. Independent and brave, but can be lonely and unstable sometimes. Balance between freedom and responsibility is needed.',
      ja: '「自由が最高！自分の人生は自分が決める」\n人生で最も重要なのは自由と独立です。誰にも束縛されず、やりたいように生きることが目標です。安定より冒険を、妥協より自分の道を選びます。独立的で勇敢ですが、時には孤独で不安定になることがあります。自由と責任のバランスが必要です。',
      "zh-CN": '"自由最好！我决定自己的生活"\n生活中最重要的是自由和独立。目标是活出自己想要的样子，不被任何人束缚。你选择冒险而非稳定，走自己的路而非妥协。独立且勇敢，但有时可能孤独不稳定。需要平衡自由与责任。',
      "zh-TW": '"自由最好！我決定自己的生活"\n生活中最重要的是自由和獨立。目標是活出自己想要的樣子，不被任何人束縛。你選擇冒險而非穩定，走自己的路而非妥協。獨立且勇敢，但有時可能孤獨不穩定。需要平衡自由與責任。',
      id: '"Kebebasan adalah yang terbaik! Saya putuskan hidup saya sendiri"\nYang paling penting dalam hidup adalah kebebasan dan kemandirian. Hidup sesuai keinginan tanpa terikat siapa pun adalah tujuan. Kamu memilih petualangan daripada stabilitas, jalan sendiri daripada kompromi. Mandiri dan berani, tapi bisa kesepian dan tidak stabil kadang-kadang. Keseimbangan antara kebebasan dan tanggung jawab diperlukan.',
      vi: '"Tự do là nhất! Tôi quyết định cuộc sống của mình"\nĐiều quan trọng nhất trong cuộc sống là tự do và độc lập. Sống theo ý muốn mà không bị ràng buộc bởi ai là mục tiêu. Bạn chọn phiêu lưu thay vì ổn định, con đường của mình thay vì thỏa hiệp. Độc lập và dũng cảm, nhưng đôi khi có thể cô đơn và không ổn định. Cần cân bằng giữa tự do và trách nhiệm.'
    },
    coreValues: {
      ko: '자유, 독립, 모험, 자율성',
      en: 'Freedom, independence, adventure, autonomy',
      ja: '自由、独立、冒険、自律性',
      "zh-CN": '自由、独立、冒险、自主',
      "zh-TW": '自由、獨立、冒險、自主',
      id: 'Kebebasan, kemandirian, petualangan, otonomi',
      vi: 'Tự do, độc lập, phiêu lưu, tự chủ'
    },
    strengths: [
      { ko: '독립성', en: 'Independence', ja: '独立性', "zh-CN": '独立性', "zh-TW": '獨立性', id: 'Kemandirian', vi: 'Độc lập' },
      { ko: '용기', en: 'Courage', ja: '勇気', "zh-CN": '勇气', "zh-TW": '勇氣', id: 'Keberanian', vi: 'Can đảm' },
      { ko: '창의성', en: 'Creativity', ja: '創造性', "zh-CN": '创造性', "zh-TW": '創造性', id: 'Kreativitas', vi: 'Sáng tạo' },
      { ko: '모험심', en: 'Adventurous spirit', ja: '冒険心', "zh-CN": '冒险精神', "zh-TW": '冒險精神', id: 'Semangat petualangan', vi: 'Tinh thần phiêu lưu' }
    ],
    weaknesses: [
      { ko: '외로움', en: 'Loneliness', ja: '孤独', "zh-CN": '孤独', "zh-TW": '孤獨', id: 'Kesepian', vi: 'Cô đơn' },
      { ko: '불안정', en: 'Instability', ja: '不安定', "zh-CN": '不稳定', "zh-TW": '不穩定', id: 'Ketidakstabilan', vi: 'Không ổn định' },
      { ko: '깊은 관계 어려움', en: 'Difficulty with deep relationships', ja: '深い関係の困難', "zh-CN": '深入关系困难', "zh-TW": '深入關係困難', id: 'Kesulitan dengan hubungan mendalam', vi: 'Khó khăn với mối quan hệ sâu sắc' }
    ],
    advice: {
      ko: '완전한 자유는 외로울 수 있어요. 가끔은 의지할 사람도 필요합니다.',
      en: 'Complete freedom can be lonely. Sometimes you need someone to lean on.',
      ja: '完全な自由は孤独になることがあります。時には頼れる人も必要です。',
      "zh-CN": '完全的自由可能会孤独。有时你需要一个可以依靠的人。',
      "zh-TW": '完全的自由可能會孤獨。有時你需要一個可以依靠的人。',
      id: 'Kebebasan penuh bisa kesepian. Kadang-kadang kamu perlu seseorang untuk diandalkan.',
      vi: 'Tự do hoàn toàn có thể cô đơn. Đôi khi bạn cần ai đó để dựa vào.'
    },
    compatibility: {
      best: ['type3'],
      good: ['type5'],
      careful: ['type1', 'type4']
    }
  },
  {
    type: 'type4',
    emoji: '🏡',
    title: {
      ko: '평화 안정형',
      en: 'Peace and Stability',
      ja: '平和安定型',
      "zh-CN": '和平稳定型',
      "zh-TW": '和平穩定型',
      id: 'Perdamaian dan Stabilitas',
      vi: 'Hòa bình và Ổn định'
    },
    description: {
      ko: '평온이 최고! 편안하고 행복한 일상\n인생에서 가장 중요한 것은 평화와 안정입니다. 큰 성공보다 매일의 행복, 변화보다 편안한 일상을 선택합니다. 스트레스 없이 평온하게 사는 것이 목표이며, 익숙하고 안정적인 것을 좋아합니다. 평화롭고 만족스럽지만 때로는 성장이 정체될 수 있습니다.',
      en: 'Peace is the best! Comfortable and happy daily life\nThe most important thing in life is peace and stability. You choose daily happiness over great success, comfortable routine over change. Living peacefully without stress is the goal, and you like familiar and stable things. Peaceful and satisfying, but growth may stagnate sometimes.',
      ja: '平穏が最高！快適で幸せな日常\n人生で最も重要なのは平和と安定です。大きな成功より毎日の幸せ、変化より快適な日常を選びます。ストレスなく平穏に生きることが目標であり、慣れ親しんだ安定したものを好みます。平和的で満足していますが、時には成長が停滞することがあります。',
      "zh-CN": '平静最好！舒适快乐的日常生活\n生活中最重要的是和平与稳定。你选择日常幸福而非巨大成功，舒适常规而非变化。目标是平静无压力地生活，喜欢熟悉和稳定的东西。平静且满足，但成长有时可能停滞。',
      "zh-TW": '平靜最好！舒適快樂的日常生活\n生活中最重要的是和平與穩定。你選擇日常幸福而非巨大成功，舒適常規而非變化。目標是平靜無壓力地生活，喜歡熟悉和穩定的東西。平靜且滿足，但成長有時可能停滯。',
      id: 'Kedamaian adalah yang terbaik! Kehidupan sehari-hari yang nyaman dan bahagia\nYang paling penting dalam hidup adalah perdamaian dan stabilitas. Kamu memilih kebahagiaan sehari-hari daripada kesuksesan besar, rutinitas nyaman daripada perubahan. Hidup damai tanpa stres adalah tujuan, dan kamu menyukai hal-hal yang akrab dan stabil. Damai dan memuaskan, tapi pertumbuhan mungkin stagnan kadang-kadang.',
      vi: 'Hòa bình là nhất! Cuộc sống hàng ngày thoải mái và hạnh phúc\nĐiều quan trọng nhất trong cuộc sống là hòa bình và ổn định. Bạn chọn hạnh phúc hàng ngày thay vì thành công lớn, thói quen thoải mái thay vì thay đổi. Sống bình yên không căng thẳng là mục tiêu, và bạn thích những điều quen thuộc và ổn định. Bình yên và thỏa mãn, nhưng sự phát triển có thể bị trì trệ đôi khi.'
    },
    coreValues: {
      ko: '평화, 안정, 행복, 편안함',
      en: 'Peace, stability, happiness, comfort',
      ja: '平和、安定、幸せ、快適',
      "zh-CN": '和平、稳定、幸福、舒适',
      "zh-TW": '和平、穩定、幸福、舒適',
      id: 'Kedamaian, stabilitas, kebahagiaan, kenyamanan',
      vi: 'Hòa bình, ổn định, hạnh phúc, thoải mái'
    },
    strengths: [
      { ko: '평온함', en: 'Serenity', ja: '平穏', "zh-CN": '平静', "zh-TW": '平靜', id: 'Ketenangan', vi: 'Thanh thản' },
      { ko: '만족', en: 'Satisfaction', ja: '満足', "zh-CN": '满足', "zh-TW": '滿足', id: 'Kepuasan', vi: 'Thỏa mãn' },
      { ko: '감사', en: 'Gratitude', ja: '感謝', "zh-CN": '感恩', "zh-TW": '感恩', id: 'Rasa syukur', vi: 'Biết ơn' },
      { ko: '안정성', en: 'Stability', ja: '安定性', "zh-CN": '稳定性', "zh-TW": '穩定性', id: 'Stabilitas', vi: 'Ổn định' }
    ],
    weaknesses: [
      { ko: '도전 회피', en: 'Avoiding challenges', ja: '挑戦回避', "zh-CN": '回避挑战', "zh-TW": '迴避挑戰', id: 'Menghindari tantangan', vi: 'Tránh thử thách' },
      { ko: '성장 정체', en: 'Stagnation', ja: '成長停滞', "zh-CN": '成长停滞', "zh-TW": '成長停滯', id: 'Stagnasi', vi: 'Trì trệ' },
      { ko: '변화 두려움', en: 'Fear of change', ja: '変化への恐れ', "zh-CN": '恐惧变化', "zh-TW": '恐懼變化', id: 'Takut akan perubahan', vi: 'Sợ thay đổi' }
    ],
    advice: {
      ko: '안정도 좋지만 가끔은 새로운 도전이 삶을 더 풍요롭게 만들어요!',
      en: 'Stability is good, but sometimes new challenges enrich life!',
      ja: '安定も良いですが、時には新しい挑戦が人生をより豊かにします！',
      "zh-CN": '稳定很好，但有时新的挑战会让生活更丰富！',
      "zh-TW": '穩定很好，但有時新的挑戰會讓生活更豐富！',
      id: 'Stabilitas baik, tapi kadang-kadang tantangan baru memperkaya hidup!',
      vi: 'Ổn định tốt, nhưng đôi khi những thử thách mới làm phong phú cuộc sống!'
    },
    compatibility: {
      best: ['type4'],
      good: ['type1'],
      careful: ['type2', 'type3']
    }
  },
  {
    type: 'type5',
    emoji: '⚖️',
    title: {
      ko: '현명한 균형형',
      en: 'Wise Balance',
      ja: '賢明な均衡型',
      "zh-CN": '明智平衡型',
      "zh-TW": '明智平衡型',
      id: 'Keseimbangan Bijak',
      vi: 'Cân bằng Khôn ngoan'
    },
    description: {
      ko: '"모두 중요해! 균형잡힌 삶을 추구"\n인생의 모든 영역이 중요하다고 생각합니다. 관계도, 성공도, 자유도, 행복도 모두 필요합니다. 어느 하나에 치우치지 않고 균형을 추구하며, 상황에 따라 우선순위를 조절합니다. 지혜롭고 성숙하지만 때로는 우유부단하거나 명확한 방향성이 부족할 수 있습니다.',
      en: '"Everything matters! Pursuing a balanced life"\nYou think all areas of life are important. Relationships, success, freedom, happiness - all are needed. You pursue balance without leaning toward any one, adjusting priorities according to the situation. Wise and mature, but can be indecisive or lack clear direction sometimes.',
      ja: '「すべてが重要！バランスの取れた人生を追求」\n人生のすべての領域が重要だと考えます。関係も成功も自由も幸せもすべて必要です。どれか一つに偏らずバランスを追求し、状況に応じて優先順位を調整します。賢明で成熟していますが、時には優柔不断だったり明確な方向性が欠けていることがあります。',
      "zh-CN": '"一切都重要！追求平衡的生活"\n你认为生活的所有领域都很重要。关系、成功、自由、幸福——都需要。你追求平衡而不偏向任何一方，根据情况调整优先级。明智且成熟，但有时可能优柔寡断或缺乏明确方向。',
      "zh-TW": '"一切都重要！追求平衡的生活"\n你認為生活的所有領域都很重要。關係、成功、自由、幸福——都需要。你追求平衡而不偏向任何一方，根據情況調整優先級。明智且成熟，但有時可能優柔寡斷或缺乏明確方向。',
      id: '"Semuanya penting! Mengejar kehidupan seimbang"\nKamu menganggap semua area kehidupan penting. Hubungan, kesuksesan, kebebasan, kebahagiaan - semuanya diperlukan. Kamu mengejar keseimbangan tanpa condong ke satu pun, menyesuaikan prioritas sesuai situasi. Bijak dan dewasa, tapi bisa ragu-ragu atau kurang arah jelas kadang-kadang.',
      vi: '"Mọi thứ đều quan trọng! Theo đuổi cuộc sống cân bằng"\nBạn nghĩ tất cả các lĩnh vực của cuộc sống đều quan trọng. Mối quan hệ, thành công, tự do, hạnh phúc - tất cả đều cần. Bạn theo đuổi sự cân bằng mà không nghiêng về bất kỳ điều gì, điều chỉnh ưu tiên theo tình huống. Khôn ngoan và trưởng thành, nhưng đôi khi có thể do dự hoặc thiếu hướng đi rõ ràng.'
    },
    coreValues: {
      ko: '균형, 조화, 지혜, 유연성',
      en: 'Balance, harmony, wisdom, flexibility',
      ja: '均衡、調和、知恵、柔軟性',
      "zh-CN": '平衡、和谐、智慧、灵活性',
      "zh-TW": '平衡、和諧、智慧、靈活性',
      id: 'Keseimbangan, harmoni, kebijaksanaan, fleksibilitas',
      vi: 'Cân bằng, hài hòa, trí tuệ, linh hoạt'
    },
    strengths: [
      { ko: '지혜', en: 'Wisdom', ja: '知恵', "zh-CN": '智慧', "zh-TW": '智慧', id: 'Kebijaksanaan', vi: 'Trí tuệ' },
      { ko: '균형감', en: 'Sense of balance', ja: 'バランス感', "zh-CN": '平衡感', "zh-TW": '平衡感', id: 'Rasa keseimbangan', vi: 'Cảm giác cân bằng' },
      { ko: '적응력', en: 'Adaptability', ja: '適応力', "zh-CN": '适应力', "zh-TW": '適應力', id: 'Kemampuan beradaptasi', vi: 'Khả năng thích ứng' },
      { ko: '성숙함', en: 'Maturity', ja: '成熟', "zh-CN": '成熟', "zh-TW": '成熟', id: 'Kedewasaan', vi: 'Trưởng thành' }
    ],
    weaknesses: [
      { ko: '우유부단', en: 'Indecisiveness', ja: '優柔不断', "zh-CN": '优柔寡断', "zh-TW": '優柔寡斷', id: 'Keraguan', vi: 'Do dự' },
      { ko: '방향성 부족', en: 'Lack of direction', ja: '方向性の欠如', "zh-CN": '缺乏方向', "zh-TW": '缺乏方向', id: 'Kurang arah', vi: 'Thiếu hướng đi' },
      { ko: '깊이 부족', en: 'Lack of depth', ja: '深さの欠如', "zh-CN": '缺乏深度', "zh-TW": '缺乏深度', id: 'Kurang kedalaman', vi: 'Thiếu chiều sâu' }
    ],
    advice: {
      ko: '균형도 좋지만 가끔은 한 가지에 집중하는 열정도 필요해요!',
      en: 'Balance is good, but sometimes you need passion focused on one thing!',
      ja: 'バランスも良いですが、時には一つのことに集中する情熱も必要です！',
      "zh-CN": '平衡很好，但有时你也需要对一件事的专注热情！',
      "zh-TW": '平衡很好，但有時你也需要對一件事的專注熱情！',
      id: 'Keseimbangan baik, tapi kadang-kadang kamu perlu gairah yang fokus pada satu hal!',
      vi: 'Cân bằng tốt, nhưng đôi khi bạn cần đam mê tập trung vào một điều!'
    },
    compatibility: {
      best: ['type5'],
      good: ['type1', 'type2', 'type3', 'type4'],
      careful: []
    }
  },
  {
    type: 'type6',
    emoji: '🌱',
    title: {
      ko: '자기실현형',
      en: 'Self-Actualization',
      ja: '自己実現型',
      "zh-CN": '自我实现型',
      "zh-TW": '自我實現型',
      id: 'Aktualisasi Diri',
      vi: 'Tự hoàn thiện'
    },
    description: {
      ko: '"성장이 목표! 더 나은 나를 향해"\n인생에서 가장 중요한 것은 자기 성장과 실현입니다. 더 나은 사람이 되고, 배우고, 발전하는 것이 목표입니다. 물질적 성공보다 내면의 성장, 외부 인정보다 자기 만족을 추구합니다. 성숙하고 깊이 있지만 때로는 자신에게 너무 엄격할 수 있습니다.',
      en: '"Growth is the goal! Toward a better me"\nThe most important thing in life is self-growth and actualization. Becoming a better person, learning, and developing is the goal. You pursue inner growth over material success, self-satisfaction over external recognition. Mature and deep, but can be too strict with yourself sometimes.',
      ja: '「成長が目標！より良い自分へ」\n人生で最も重要なのは自己成長と実現です。より良い人になり、学び、発展することが目標です。物質的成功より内面の成長、外部の承認より自己満足を追求します。成熟していて深みがありますが、時には自分に対して厳しすぎることがあります。',
      "zh-CN": '"成长是目标！向更好的自己"\n生活中最重要的是自我成长和实现。目标是成为更好的人、学习和发展。你追求内在成长而非物质成功，自我满足而非外部认可。成熟且有深度，但有时可能对自己过于严格。',
      "zh-TW": '"成長是目標！向更好的自己"\n生活中最重要的是自我成長和實現。目標是成為更好的人、學習和發展。你追求內在成長而非物質成功，自我滿足而非外部認可。成熟且有深度，但有時可能對自己過於嚴格。',
      id: '"Pertumbuhan adalah tujuan! Menuju diri yang lebih baik"\nYang paling penting dalam hidup adalah pertumbuhan diri dan aktualisasi. Menjadi orang yang lebih baik, belajar, dan berkembang adalah tujuan. Kamu mengejar pertumbuhan batin daripada kesuksesan materi, kepuasan diri daripada pengakuan eksternal. Dewasa dan mendalam, tapi bisa terlalu ketat pada diri sendiri kadang-kadang.',
      vi: '"Phát triển là mục tiêu! Hướng tới bản thân tốt hơn"\nĐiều quan trọng nhất trong cuộc sống là sự phát triển bản thân và tự hoàn thiện. Trở thành người tốt hơn, học hỏi và phát triển là mục tiêu. Bạn theo đuổi sự phát triển nội tâm thay vì thành công vật chất, sự thỏa mãn bản thân thay vì sự công nhận bên ngoài. Trưởng thành và sâu sắc, nhưng đôi khi có thể quá nghiêm khắc với chính mình.'
    },
    coreValues: {
      ko: '성장, 배움, 자아실현, 의미',
      en: 'Growth, learning, self-actualization, meaning',
      ja: '成長、学び、自己実現、意味',
      "zh-CN": '成长、学习、自我实现、意义',
      "zh-TW": '成長、學習、自我實現、意義',
      id: 'Pertumbuhan, pembelajaran, aktualisasi diri, makna',
      vi: 'Phát triển, học hỏi, tự hoàn thiện, ý nghĩa'
    },
    strengths: [
      { ko: '성찰', en: 'Reflection', ja: '省察', "zh-CN": '反思', "zh-TW": '反思', id: 'Refleksi', vi: 'Suy ngẫm' },
      { ko: '성장', en: 'Growth', ja: '成長', "zh-CN": '成长', "zh-TW": '成長', id: 'Pertumbuhan', vi: 'Phát triển' },
      { ko: '지혜', en: 'Wisdom', ja: '知恵', "zh-CN": '智慧', "zh-TW": '智慧', id: 'Kebijaksanaan', vi: 'Trí tuệ' },
      { ko: '깊이', en: 'Depth', ja: '深さ', "zh-CN": '深度', "zh-TW": '深度', id: 'Kedalaman', vi: 'Chiều sâu' }
    ],
    weaknesses: [
      { ko: '자기비판', en: 'Self-criticism', ja: '自己批判', "zh-CN": '自我批评', "zh-TW": '自我批評', id: 'Kritik diri', vi: 'Tự phê bình' },
      { ko: '완벽주의', en: 'Perfectionism', ja: '完璧主義', "zh-CN": '完美主义', "zh-TW": '完美主義', id: 'Perfeksionisme', vi: 'Chủ nghĩa hoàn hảo' },
      { ko: '현재 즐기지 못함', en: 'Difficulty enjoying present', ja: '現在を楽しめない', "zh-CN": '难以享受当下', "zh-TW": '難以享受當下', id: 'Kesulitan menikmati saat ini', vi: 'Khó tận hưởng hiện tại' }
    ],
    advice: {
      ko: '성장도 중요하지만 지금의 당신도 충분히 괜찮아요!',
      en: 'Growth is important, but who you are now is enough!',
      ja: '成長も重要ですが、今のあなたも十分に素晴らしいです！',
      "zh-CN": '成长很重要，但现在的你也足够好了！',
      "zh-TW": '成長很重要，但現在的你 also足夠好了！',
      id: 'Pertumbuhan penting, tapi siapa kamu sekarang sudah cukup!',
      vi: 'Phát triển quan trọng, nhưng con người bạn hiện tại đã đủ tốt!'
    },
    compatibility: {
      best: ['type6'],
      good: ['type2', 'type5'],
      careful: ['type4']
    }
  }
];

// 점수 계산 함수
export function calculateLifePrioritiesResult(answers: Array<{ type1: number; type2: number; type3: number; type4: number; type5: number; type6: number; }>): string {
  const totalScores = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0,
    type6: 0
  };

  answers.forEach(answer => {
    totalScores.type1 += answer.type1;
    totalScores.type2 += answer.type2;
    totalScores.type3 += answer.type3;
    totalScores.type4 += answer.type4;
    totalScores.type5 += answer.type5;
    totalScores.type6 += answer.type6;
  });

  let maxScore = 0;
  let resultType = 'type1';

  Object.entries(totalScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 Q10-Q12의 선택을 우선 반영
  const tieTypes: string[] = [];
  Object.entries(totalScores).forEach(([type, score]) => {
    if (score === maxScore) {
      tieTypes.push(type);
    }
  });

  if (tieTypes.length > 1) {
    const lastThreeScores = {
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0,
      type5: 0,
      type6: 0
    };

    for (let i = 9; i < 12 && i < answers.length; i++) {
      lastThreeScores.type1 += answers[i].type1;
      lastThreeScores.type2 += answers[i].type2;
      lastThreeScores.type3 += answers[i].type3;
      lastThreeScores.type4 += answers[i].type4;
      lastThreeScores.type5 += answers[i].type5;
      lastThreeScores.type6 += answers[i].type6;
    }

    let maxLastScore = 0;
    tieTypes.forEach(type => {
      if (lastThreeScores[type as keyof typeof lastThreeScores] > maxLastScore) {
        maxLastScore = lastThreeScores[type as keyof typeof lastThreeScores];
        resultType = type;
      }
    });
  }

  return resultType;
}

