export interface MBTIAccurateQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface MBTIAccurateResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  careers: Record<string, string>[];
  dating: Record<string, string>[];
  celebrities: Record<string, string>[];
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const mbtiAccurateQuestions: MBTIAccurateQuestion[] = [
  {
    id: 1,
    question: {
      ko: "주말에 친구들이 갑자기 모임을 제안합니다. 당신은?",
      en: "Friends suddenly suggest a gathering on the weekend. You?",
      ja: "週末に友達が急に集まりを提案します。あなたは？",
      'zh-CN': "朋友们突然建议周末聚会。你？",
      'zh-TW': "朋友們突然建議週末聚會。你？",
      id: "Teman tiba-tiba menyarankan kumpul-kumpul di akhir pekan. Anda?",
      vi: "Bạn bè đột nhiên đề xuất tụ tập vào cuối tuần. Bạn?"
    },
    options: [
      {
        text: {
          ko: "\"좋아! 어디서 만나?\" 즉시 나갈 준비",
          en: "\"Great! Where should we meet?\" Ready to go immediately",
          ja: "「いいね！どこで会う？」すぐに出かける準備",
          'zh-CN': "「好啊！在哪里见面？」立即准备出门",
          'zh-TW': "「好啊！在哪裡見面？」立即準備出門",
          id: "\"Bagus! Di mana kita bertemu?\" Siap pergi segera",
          vi: "\"Tuyệt! Gặp ở đâu?\" Sẵn sàng đi ngay"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "\"오! 좋은데, 몇 명이야?\" 상황 보고 결정",
          en: "\"Oh! Good, how many people?\" Check the situation and decide",
          ja: "「おお！いいね、何人？」状況を見て決める",
          'zh-CN': "「哦！不错，有多少人？」看情况决定",
          'zh-TW': "「哦！不錯，有多少人？」看情況決定",
          id: "\"Oh! Bagus, berapa orang?\" Lihat situasi dan putuskan",
          vi: "\"Ồ! Tốt, có bao nhiêu người?\" Xem tình hình rồi quyết định"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "\"음... 오늘은 좀 쉬고 싶은데\" 고민됨",
          en: "\"Hmm... I want to rest today\" Hesitant",
          ja: "「うーん...今日は少し休みたい」迷う",
          'zh-CN': "「嗯...今天想休息一下」犹豫",
          'zh-TW': "「嗯...今天想休息一下」猶豫",
          id: "\"Hmm... Hari ini aku ingin istirahat\" Ragu-ragu",
          vi: "\"Hmm... Hôm nay tôi muốn nghỉ ngơi\" Do dự"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "\"미안, 오늘은 집에서 쉴래\" 정중히 거절",
          en: "\"Sorry, I want to rest at home today\" Politely decline",
          ja: "「ごめん、今日は家で休む」丁寧に断る",
          'zh-CN': "「抱歉，今天想在家休息」礼貌拒绝",
          'zh-TW': "「抱歉，今天想在家休息」禮貌拒絕",
          id: "\"Maaf, hari ini aku ingin istirahat di rumah\" Menolak dengan sopan",
          vi: "\"Xin lỗi, hôm nay tôi muốn nghỉ ở nhà\" Từ chối lịch sự"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "긴 하루를 보낸 후, 재충전하는 방법은?",
      en: "After a long day, how do you recharge?",
      ja: "長い一日の後、充電する方法は？",
      'zh-CN': "度过漫长的一天后，你如何充电？",
      'zh-TW': "度過漫長的一天後，你如何充電？",
      id: "Setelah hari yang panjang, bagaimana cara mengisi ulang?",
      vi: "Sau một ngày dài, bạn nạp năng lượng bằng cách nào?"
    },
    options: [
      {
        text: {
          ko: "친구들 만나서 수다 떨기",
          en: "Meet friends and chat",
          ja: "友達に会っておしゃべり",
          'zh-CN': "见朋友聊天",
          'zh-TW': "見朋友聊天",
          id: "Bertemu teman dan mengobrol",
          vi: "Gặp bạn bè trò chuyện"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "가벼운 모임이나 외출",
          en: "Light gathering or going out",
          ja: "軽い集まりや外出",
          'zh-CN': "轻松的聚会或外出",
          'zh-TW': "輕鬆的聚會或外出",
          id: "Kumpul-kumpul ringan atau keluar",
          vi: "Tụ tập nhẹ nhàng hoặc ra ngoài"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "혼자 조용히 취미 생활",
          en: "Quiet hobby time alone",
          ja: "一人で静かに趣味の時間",
          'zh-CN': "独自安静地享受爱好",
          'zh-TW': "獨自安靜地享受愛好",
          id: "Hobi tenang sendirian",
          vi: "Thời gian sở thích yên tĩnh một mình"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "완전히 혼자만의 시간 보내기",
          en: "Completely alone time",
          ja: "完全に一人の時間を過ごす",
          'zh-CN': "完全独处的时间",
          'zh-TW': "完全獨處的時間",
          id: "Waktu benar-benar sendirian",
          vi: "Thời gian hoàn toàn một mình"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "처음 보는 사람들과 있을 때?",
      en: "When you're with people you don't know?",
      ja: "初めて会う人たちといる時は？",
      'zh-CN': "和不认识的人在一起时？",
      'zh-TW': "和不認識的人在一起時？",
      id: "Ketika bersama orang yang tidak dikenal?",
      vi: "Khi ở cùng những người không quen biết?"
    },
    options: [
      {
        text: {
          ko: "먼저 말 걸고 분위기 주도",
          en: "Start conversations and lead the atmosphere",
          ja: "先に話しかけて雰囲気をリード",
          'zh-CN': "主动搭话并主导氛围",
          'zh-TW': "主動搭話並主導氛圍",
          id: "Memulai percakapan dan memimpin suasana",
          vi: "Bắt đầu trò chuyện và dẫn dắt không khí"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "대화에 적극 참여하는 편",
          en: "Actively participate in conversations",
          ja: "会話に積極的に参加する方",
          'zh-CN': "积极参与对话",
          'zh-TW': "積極參與對話",
          id: "Aktif berpartisipasi dalam percakapan",
          vi: "Tích cực tham gia trò chuyện"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "말 걸어오면 대화하는 정도",
          en: "Talk when spoken to",
          ja: "話しかけられたら話す程度",
          'zh-CN': "被搭话时才对话",
          'zh-TW': "被搭話時才對話",
          id: "Bicara ketika diajak bicara",
          vi: "Nói chuyện khi được hỏi"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "조용히 관찰하며 필요할 때만 발언",
          en: "Quietly observe and speak only when necessary",
          ja: "静かに観察し、必要な時だけ発言",
          'zh-CN': "安静观察，只在必要时发言",
          'zh-TW': "安靜觀察，只在必要時發言",
          id: "Diam-diam mengamati dan bicara hanya saat perlu",
          vi: "Quan sát yên lặng và chỉ nói khi cần thiết"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "파티나 모임에 참석하면?",
      en: "When you attend a party or gathering?",
      ja: "パーティーや集まりに参加すると？",
      'zh-CN': "参加聚会或聚会时？",
      'zh-TW': "參加聚會或聚會時？",
      id: "Ketika menghadiri pesta atau pertemuan?",
      vi: "Khi tham dự bữa tiệc hoặc cuộc họp mặt?"
    },
    options: [
      {
        text: {
          ko: "새로운 사람들과 적극적으로 교류",
          en: "Actively interact with new people",
          ja: "新しい人たちと積極的に交流",
          'zh-CN': "积极与新朋友交流",
          'zh-TW': "積極與新朋友交流",
          id: "Aktif berinteraksi dengan orang baru",
          vi: "Tích cực giao lưu với người mới"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "아는 사람 위주로 즐겁게 대화",
          en: "Enjoy conversations mainly with people you know",
          ja: "知っている人中心に楽しく会話",
          'zh-CN': "主要与认识的人愉快对话",
          'zh-TW': "主要與認識的人愉快對話",
          id: "Menikmati percakapan terutama dengan orang yang dikenal",
          vi: "Thích trò chuyện chủ yếu với người quen"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "소수와 깊은 대화 나누기",
          en: "Have deep conversations with a few people",
          ja: "少数の人と深い会話を交わす",
          'zh-CN': "与少数人进行深度对话",
          'zh-TW': "與少數人進行深度對話",
          id: "Berbicara mendalam dengan beberapa orang",
          vi: "Trò chuyện sâu sắc với một vài người"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "조용히 관찰하며 일찍 떠남",
          en: "Quietly observe and leave early",
          ja: "静かに観察して早めに帰る",
          'zh-CN': "安静观察并早退",
          'zh-TW': "安靜觀察並早退",
          id: "Diam-diam mengamati dan pulang lebih awal",
          vi: "Quan sát yên lặng và về sớm"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "하루 종일 사람들과 함께 있었다면?",
      en: "If you spent the whole day with people?",
      ja: "一日中人と一緒にいたら？",
      'zh-CN': "如果一整天都和人们在一起？",
      'zh-TW': "如果一整天都和人們在一起？",
      id: "Jika seharian bersama orang-orang?",
      vi: "Nếu cả ngày ở cùng mọi người?"
    },
    options: [
      {
        text: {
          ko: "더 만나도 좋음, 에너지 충만",
          en: "Would love to meet more, full of energy",
          ja: "もっと会いたい、エネルギー満タン",
          'zh-CN': "还想见更多人，精力充沛",
          'zh-TW': "還想見更多人，精力充沛",
          id: "Ingin bertemu lebih banyak, penuh energi",
          vi: "Muốn gặp thêm nhiều người, tràn đầy năng lượng"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "즐거웠지만 슬슬 피곤함",
          en: "It was fun but getting tired",
          ja: "楽しかったけど少し疲れてきた",
          'zh-CN': "很有趣但开始累了",
          'zh-TW': "很有趣但開始累了",
          id: "Menyenangkan tapi mulai lelah",
          vi: "Vui vẻ nhưng bắt đầu mệt mỏi"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "좀 지쳤고 혼자 있고 싶음",
          en: "A bit tired and want to be alone",
          ja: "少し疲れて一人でいたい",
          'zh-CN': "有点累，想独处",
          'zh-TW': "有點累，想獨處",
          id: "Agak lelah dan ingin sendirian",
          vi: "Hơi mệt và muốn ở một mình"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "완전히 탈진, 충전 필요",
          en: "Completely exhausted, need to recharge",
          ja: "完全に疲れ果て、充電が必要",
          'zh-CN': "完全精疲力尽，需要充电",
          'zh-TW': "完全精疲力盡，需要充電",
          id: "Benar-benar kelelahan, perlu mengisi ulang",
          vi: "Hoàn toàn kiệt sức, cần nạp năng lượng"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "전화 통화에 대한 당신의 태도는?",
      en: "Your attitude towards phone calls?",
      ja: "電話での会話に対するあなたの態度は？",
      'zh-CN': "你对电话通话的态度是？",
      'zh-TW': "你對電話通話的態度是？",
      id: "Sikap Anda terhadap panggilan telepon?",
      vi: "Thái độ của bạn đối với cuộc gọi điện thoại?"
    },
    options: [
      {
        text: {
          ko: "전화로 긴 대화하는 게 편함",
          en: "Comfortable with long phone conversations",
          ja: "電話で長い会話をするのが楽",
          'zh-CN': "喜欢长时间电话聊天",
          'zh-TW': "喜歡長時間電話聊天",
          id: "Nyaman dengan percakapan telepon yang panjang",
          vi: "Thoải mái với cuộc trò chuyện điện thoại dài"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "전화 통화도 괜찮은 편",
          en: "Phone calls are okay",
          ja: "電話もまあまあ",
          'zh-CN': "电话通话还可以",
          'zh-TW': "電話通話還可以",
          id: "Panggilan telepon juga oke",
          vi: "Cuộc gọi điện thoại cũng ổn"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "문자가 더 편하지만 전화도 할 수 있음",
          en: "Text is more comfortable but can make calls",
          ja: "メッセージの方が楽だけど電話もできる",
          'zh-CN': "短信更舒服但也能打电话",
          'zh-TW': "簡訊更舒服但也能打電話",
          id: "Pesan lebih nyaman tapi bisa juga telepon",
          vi: "Tin nhắn thoải mái hơn nhưng cũng có thể gọi điện"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "가능하면 문자나 메시지 선호",
          en: "Prefer text or messages when possible",
          ja: "可能な限りメッセージを好む",
          'zh-CN': "尽可能喜欢短信或消息",
          'zh-TW': "盡可能喜歡簡訊或訊息",
          id: "Lebih suka pesan jika memungkinkan",
          vi: "Thích tin nhắn khi có thể"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "혼자 식사하는 것에 대해?",
      en: "About eating alone?",
      ja: "一人で食事することについて？",
      'zh-CN': "关于独自用餐？",
      'zh-TW': "關於獨自用餐？",
      id: "Tentang makan sendirian?",
      vi: "Về việc ăn một mình?"
    },
    options: [
      {
        text: {
          ko: "불편하고 누군가와 함께 하고 싶음",
          en: "Uncomfortable and want to be with someone",
          ja: "不快で誰かと一緒にいたい",
          'zh-CN': "不舒服，想和别人一起",
          'zh-TW': "不舒服，想和別人一起",
          id: "Tidak nyaman dan ingin bersama orang lain",
          vi: "Không thoải mái và muốn ở cùng ai đó"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "같이 먹는 게 좋지만 혼자도 괜찮음",
          en: "Better with others but alone is okay",
          ja: "一緒の方がいいけど一人でも大丈夫",
          'zh-CN': "和别人一起更好但独自也可以",
          'zh-TW': "和別人一起更好但獨自也可以",
          id: "Lebih baik bersama orang lain tapi sendirian juga oke",
          vi: "Tốt hơn khi cùng người khác nhưng một mình cũng ổn"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "혼자 먹는 게 편하지만 같이도 가능",
          en: "Alone is comfortable but together is possible",
          ja: "一人で食べるのが楽だけど一緒も可能",
          'zh-CN': "独自用餐更舒服但一起也可以",
          'zh-TW': "獨自用餐更舒服但一起也可以",
          id: "Sendirian lebih nyaman tapi bersama juga bisa",
          vi: "Một mình thoải mái hơn nhưng cùng nhau cũng được"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "혼자 먹는 게 훨씬 편하고 좋음",
          en: "Eating alone is much more comfortable and good",
          ja: "一人で食べる方がずっと楽で良い",
          'zh-CN': "独自用餐更舒服更好",
          'zh-TW': "獨自用餐更舒服更好",
          id: "Makan sendirian jauh lebih nyaman dan baik",
          vi: "Ăn một mình thoải mái và tốt hơn nhiều"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "주말에 아무 계획 없이 혼자라면?",
      en: "If you're alone on the weekend with no plans?",
      ja: "週末に予定もなく一人だったら？",
      'zh-CN': "如果周末独自一人没有计划？",
      'zh-TW': "如果週末獨自一人沒有計劃？",
      id: "Jika sendirian di akhir pekan tanpa rencana?",
      vi: "Nếu cuối tuần một mình không có kế hoạch?"
    },
    options: [
      {
        text: {
          ko: "답답함, 누군가 만나고 싶음",
          en: "Feel suffocated, want to meet someone",
          ja: "息苦しい、誰かに会いたい",
          'zh-CN': "感到窒息，想见某人",
          'zh-TW': "感到窒息，想見某人",
          id: "Merasa sesak, ingin bertemu seseorang",
          vi: "Cảm thấy ngột ngạt, muốn gặp ai đó"
        },
        scores: { E: 3 }
      },
      {
        text: {
          ko: "누군가 연락 오면 만날 준비",
          en: "Ready to meet if someone contacts",
          ja: "誰かが連絡してきたら会う準備",
          'zh-CN': "如果有人联系就准备见面",
          'zh-TW': "如果有人聯繫就準備見面",
          id: "Siap bertemu jika ada yang menghubungi",
          vi: "Sẵn sàng gặp nếu ai đó liên lạc"
        },
        scores: { E: 1 }
      },
      {
        text: {
          ko: "좋음, 혼자 시간 즐김",
          en: "Good, enjoy alone time",
          ja: "いい、一人の時間を楽しむ",
          'zh-CN': "很好，享受独处时间",
          'zh-TW': "很好，享受獨處時間",
          id: "Bagus, menikmati waktu sendirian",
          vi: "Tốt, thích thời gian một mình"
        },
        scores: { I: 1 }
      },
      {
        text: {
          ko: "완벽함, 꿈의 주말",
          en: "Perfect, dream weekend",
          ja: "完璧、夢の週末",
          'zh-CN': "完美，梦想的周末",
          'zh-TW': "完美，夢想的週末",
          id: "Sempurna, akhir pekan impian",
          vi: "Hoàn hảo, cuối tuần trong mơ"
        },
        scores: { I: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "새로운 프로젝트를 시작할 때, 당신의 접근 방식은?",
      en: "When starting a new project, your approach is?",
      ja: "新しいプロジェクトを始める時、あなたのアプローチは？",
      'zh-CN': "开始新项目时，你的方法是？",
      'zh-TW': "開始新項目時，你的方法是？",
      id: "Saat memulai proyek baru, pendekatan Anda?",
      vi: "Khi bắt đầu dự án mới, cách tiếp cận của bạn?"
    },
    options: [
      {
        text: {
          ko: "구체적인 데이터와 사실부터 수집",
          en: "Start by collecting specific data and facts",
          ja: "具体的なデータと事実から収集",
          'zh-CN': "从收集具体数据和事实开始",
          'zh-TW': "從收集具體數據和事實開始",
          id: "Mulai dengan mengumpulkan data dan fakta spesifik",
          vi: "Bắt đầu bằng việc thu thập dữ liệu và sự kiện cụ thể"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "전체적인 틀을 보되, 세부사항도 확인",
          en: "See the big picture but also check details",
          ja: "全体的な枠組みを見るが、詳細も確認",
          'zh-CN': "看整体框架但也检查细节",
          'zh-TW': "看整體框架但也檢查細節",
          id: "Lihat gambaran besar tapi juga periksa detail",
          vi: "Nhìn tổng thể nhưng cũng kiểm tra chi tiết"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "큰 그림과 가능성을 먼저 생각",
          en: "Think about the big picture and possibilities first",
          ja: "大きな絵と可能性をまず考える",
          'zh-CN': "先考虑大局和可能性",
          'zh-TW': "先考慮大局和可能性",
          id: "Pikirkan gambaran besar dan kemungkinan dulu",
          vi: "Nghĩ về bức tranh lớn và khả năng trước"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "미래 비전과 혁신적 아이디어 중심",
          en: "Focus on future vision and innovative ideas",
          ja: "未来のビジョンと革新的アイデア中心",
          'zh-CN': "专注于未来愿景和创新想法",
          'zh-TW': "專注於未來願景和創新想法",
          id: "Fokus pada visi masa depan dan ide inovatif",
          vi: "Tập trung vào tầm nhìn tương lai và ý tưởng đổi mới"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "여행을 계획할 때, 당신의 스타일은?",
      en: "When planning a trip, your style is?",
      ja: "旅行を計画する時、あなたのスタイルは？",
      'zh-CN': "计划旅行时，你的风格是？",
      'zh-TW': "計劃旅行時，你的風格是？",
      id: "Saat merencanakan perjalanan, gaya Anda?",
      vi: "Khi lên kế hoạch du lịch, phong cách của bạn?"
    },
    options: [
      {
        text: {
          ko: "현재 인기 있는 명소와 맛집 위주",
          en: "Focus on currently popular attractions and restaurants",
          ja: "現在人気の名所とレストラン中心",
          'zh-CN': "专注于当前热门景点和餐厅",
          'zh-TW': "專注於當前熱門景點和餐廳",
          id: "Fokus pada tempat wisata dan restoran populer saat ini",
          vi: "Tập trung vào các điểm tham quan và nhà hàng nổi tiếng hiện tại"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "검증된 장소 중심으로 계획",
          en: "Plan around verified places",
          ja: "検証された場所中心に計画",
          'zh-CN': "围绕验证过的地方计划",
          'zh-TW': "圍繞驗證過的地方計劃",
          id: "Rencanakan di sekitar tempat yang sudah terverifikasi",
          vi: "Lên kế hoạch xung quanh những nơi đã được xác minh"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "숨겨진 장소와 새로운 경험 탐색",
          en: "Explore hidden places and new experiences",
          ja: "隠れた場所と新しい体験を探検",
          'zh-CN': "探索隐藏的地方和新体验",
          'zh-TW': "探索隱藏的地方和新體驗",
          id: "Jelajahi tempat tersembunyi dan pengalaman baru",
          vi: "Khám phá những nơi ẩn và trải nghiệm mới"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "모험적이고 독특한 여행 루트",
          en: "Adventurous and unique travel routes",
          ja: "冒険的でユニークな旅行ルート",
          'zh-CN': "冒险和独特的旅行路线",
          'zh-TW': "冒險和獨特的旅行路線",
          id: "Rute perjalanan petualangan dan unik",
          vi: "Tuyến đường du lịch phiêu lưu và độc đáo"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "정보를 받아들일 때, 더 신뢰하는 것은?",
      en: "When receiving information, what do you trust more?",
      ja: "情報を受け取る時、より信頼するのは？",
      'zh-CN': "接收信息时，你更信任什么？",
      'zh-TW': "接收資訊時，你更信任什麼？",
      id: "Saat menerima informasi, apa yang lebih Anda percayai?",
      vi: "Khi tiếp nhận thông tin, bạn tin tưởng điều gì hơn?"
    },
    options: [
      {
        text: {
          ko: "직접 보고 경험한 구체적 사실",
          en: "Specific facts you've seen and experienced directly",
          ja: "直接見て経験した具体的な事実",
          'zh-CN': "你直接看到和经历的具体事实",
          'zh-TW': "你直接看到和經歷的具體事實",
          id: "Fakta spesifik yang Anda lihat dan alami langsung",
          vi: "Những sự kiện cụ thể bạn đã thấy và trải nghiệm trực tiếp"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "검증된 데이터와 실제 사례",
          en: "Verified data and real cases",
          ja: "検証されたデータと実際の事例",
          'zh-CN': "验证过的数据和实际案例",
          'zh-TW': "驗證過的數據和實際案例",
          id: "Data terverifikasi dan kasus nyata",
          vi: "Dữ liệu đã được xác minh và trường hợp thực tế"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "패턴과 숨겨진 의미",
          en: "Patterns and hidden meanings",
          ja: "パターンと隠された意味",
          'zh-CN': "模式和隐藏的含义",
          'zh-TW': "模式和隱藏的含義",
          id: "Pola dan makna tersembunyi",
          vi: "Các mẫu và ý nghĩa ẩn"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "직관과 가능성, 미래 전망",
          en: "Intuition and possibilities, future prospects",
          ja: "直感と可能性、未来の展望",
          'zh-CN': "直觉和可能性，未来前景",
          'zh-TW': "直覺和可能性，未來前景",
          id: "Intuisi dan kemungkinan, prospek masa depan",
          vi: "Trực giác và khả năng, triển vọng tương lai"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "책을 읽거나 영화를 볼 때?",
      en: "When reading books or watching movies?",
      ja: "本を読んだり映画を見る時は？",
      'zh-CN': "读书或看电影时？",
      'zh-TW': "讀書或看電影時？",
      id: "Saat membaca buku atau menonton film?",
      vi: "Khi đọc sách hoặc xem phim?"
    },
    options: [
      {
        text: {
          ko: "구체적인 스토리와 디테일에 집중",
          en: "Focus on specific stories and details",
          ja: "具体的なストーリーとディテールに集中",
          'zh-CN': "专注于具体的故事和细节",
          'zh-TW': "專注於具體的故事和細節",
          id: "Fokus pada cerita spesifik dan detail",
          vi: "Tập trung vào câu chuyện cụ thể và chi tiết"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "현실적인 내용이 더 몰입됨",
          en: "More immersed in realistic content",
          ja: "現実的な内容により没入する",
          'zh-CN': "更沉浸于现实内容",
          'zh-TW': "更沉浸於現實內容",
          id: "Lebih terbenam dalam konten realistis",
          vi: "Bị cuốn hút hơn bởi nội dung thực tế"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "상징과 은유를 찾으며 감상",
          en: "Appreciate by finding symbols and metaphors",
          ja: "象徴と隠喩を探しながら鑑賞",
          'zh-CN': "通过寻找象征和隐喻来欣赏",
          'zh-TW': "通過尋找象徵和隱喻來欣賞",
          id: "Menghargai dengan mencari simbol dan metafora",
          vi: "Thưởng thức bằng cách tìm kiếm biểu tượng và ẩn dụ"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "숨은 의미와 메시지 해석",
          en: "Interpret hidden meanings and messages",
          ja: "隠された意味とメッセージを解釈",
          'zh-CN': "解读隐藏的含义和信息",
          'zh-TW': "解讀隱藏的含義和資訊",
          id: "Menafsirkan makna tersembunyi dan pesan",
          vi: "Giải thích ý nghĩa ẩn và thông điệp"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 13,
    question: {
      ko: "과거, 현재, 미래 중 가장 관심 가는 시간은?",
      en: "Which time period interests you most: past, present, or future?",
      ja: "過去、現在、未来の中で最も関心がある時間は？",
      'zh-CN': "过去、现在、未来中你最关心哪个时期？",
      'zh-TW': "過去、現在、未來中你最關心哪個時期？",
      id: "Masa mana yang paling menarik: masa lalu, sekarang, atau masa depan?",
      vi: "Thời gian nào bạn quan tâm nhất: quá khứ, hiện tại, hay tương lai?"
    },
    options: [
      {
        text: {
          ko: "과거의 경험과 교훈",
          en: "Past experiences and lessons",
          ja: "過去の経験と教訓",
          'zh-CN': "过去的经验和教训",
          'zh-TW': "過去的經驗和教訓",
          id: "Pengalaman masa lalu dan pelajaran",
          vi: "Kinh nghiệm quá khứ và bài học"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "현재 일어나는 일들",
          en: "Things happening now",
          ja: "現在起こっていること",
          'zh-CN': "现在正在发生的事情",
          'zh-TW': "現在正在發生的事情",
          id: "Hal-hal yang terjadi sekarang",
          vi: "Những điều đang xảy ra hiện tại"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "미래의 가능성",
          en: "Future possibilities",
          ja: "未来の可能性",
          'zh-CN': "未来的可能性",
          'zh-TW': "未來的可能性",
          id: "Kemungkinan masa depan",
          vi: "Khả năng tương lai"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "아직 오지 않은 미래, 꿈",
          en: "The future that hasn't come yet, dreams",
          ja: "まだ来ていない未来、夢",
          'zh-CN': "尚未到来的未来，梦想",
          'zh-TW': "尚未到來的未來，夢想",
          id: "Masa depan yang belum datang, mimpi",
          vi: "Tương lai chưa đến, những giấc mơ"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 14,
    question: {
      ko: "대화할 때 당신은?",
      en: "When having conversations, you?",
      ja: "会話する時、あなたは？",
      'zh-CN': "对话时，你？",
      'zh-TW': "對話時，你？",
      id: "Saat bercakap-cakap, Anda?",
      vi: "Khi trò chuyện, bạn?"
    },
    options: [
      {
        text: {
          ko: "구체적인 사실과 세부사항 중심",
          en: "Focus on specific facts and details",
          ja: "具体的な事実と詳細中心",
          'zh-CN': "专注于具体事实和细节",
          'zh-TW': "專注於具體事實和細節",
          id: "Fokus pada fakta spesifik dan detail",
          vi: "Tập trung vào sự kiện cụ thể và chi tiết"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "현실적이고 실용적인 내용 선호",
          en: "Prefer realistic and practical content",
          ja: "現実的で実用的な内容を好む",
          'zh-CN': "偏好现实和实用的内容",
          'zh-TW': "偏好現實和實用的內容",
          id: "Lebih suka konten realistis dan praktis",
          vi: "Thích nội dung thực tế và thực dụng"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "추상적이고 개념적인 대화 즐김",
          en: "Enjoy abstract and conceptual conversations",
          ja: "抽象的で概念的な会話を楽しむ",
          'zh-CN': "享受抽象和概念性的对话",
          'zh-TW': "享受抽象和概念性的對話",
          id: "Menikmati percakapan abstrak dan konseptual",
          vi: "Thích những cuộc trò chuyện trừu tượng và khái niệm"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "철학적이고 상상력 있는 주제 좋아함",
          en: "Like philosophical and imaginative topics",
          ja: "哲学的で想像力豊かな話題が好き",
          'zh-CN': "喜欢哲学性和富有想象力的主题",
          'zh-TW': "喜歡哲學性和富有想像力的主題",
          id: "Suka topik filosofis dan imajinatif",
          vi: "Thích những chủ đề triết học và giàu trí tưởng tượng"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 15,
    question: {
      ko: "문제 해결 시 선호하는 방법은?",
      en: "What method do you prefer when solving problems?",
      ja: "問題解決時に好む方法は？",
      'zh-CN': "解决问题时你偏好什么方法？",
      'zh-TW': "解決問題時你偏好什麼方法？",
      id: "Metode apa yang Anda sukai saat memecahkan masalah?",
      vi: "Bạn thích phương pháp nào khi giải quyết vấn đề?"
    },
    options: [
      {
        text: {
          ko: "검증된 기존 방법 사용",
          en: "Use verified existing methods",
          ja: "検証された既存の方法を使用",
          'zh-CN': "使用验证过的现有方法",
          'zh-TW': "使用驗證過的現有方法",
          id: "Menggunakan metode yang sudah terverifikasi",
          vi: "Sử dụng các phương pháp đã được xác minh"
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "경험을 바탕으로 실용적 접근",
          en: "Practical approach based on experience",
          ja: "経験に基づく実用的なアプローチ",
          'zh-CN': "基于经验的实用方法",
          'zh-TW': "基於經驗的實用方法",
          id: "Pendekatan praktis berdasarkan pengalaman",
          vi: "Cách tiếp cận thực tế dựa trên kinh nghiệm"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "새로운 관점에서 접근",
          en: "Approach from a new perspective",
          ja: "新しい視点からアプローチ",
          'zh-CN': "从新角度解决问题",
          'zh-TW': "從新角度解決問題",
          id: "Pendekatan dari perspektif baru",
          vi: "Tiếp cận từ góc độ mới"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "완전히 새로운 혁신적 방법 시도",
          en: "Try completely new innovative methods",
          ja: "全く新しい革新的な方法を試す",
          'zh-CN': "尝试全新的创新方法",
          'zh-TW': "嘗試全新的創新方法",
          id: "Mencoba metode inovatif yang benar-benar baru",
          vi: "Thử các phương pháp đổi mới hoàn toàn mới"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 16,
    question: {
      ko: "설명할 때 당신의 스타일은?",
      en: "What is your style when explaining?",
      ja: "説明する時のあなたのスタイルは？",
      'zh-CN': "解释时你的风格是什么？",
      'zh-TW': "解釋時你的風格是什麼？",
      id: "Apa gaya Anda saat menjelaskan?",
      vi: "Phong cách của bạn khi giải thích là gì?"
    },
    options: [
      {
        text: {
          ko: "\"첫째, 둘째, 셋째\" 순서대로 구체적으로",
          en: "Specifically in order: \"First, second, third\"",
          ja: "「第一、第二、第三」順序で具体的に",
          'zh-CN': "按顺序具体说明：\"第一、第二、第三\"",
          'zh-TW': "按順序具體說明：「第一、第二、第三」",
          id: "Secara spesifik berurutan: \"Pertama, kedua, ketiga\"",
          vi: "Cụ thể theo thứ tự: \"Thứ nhất, thứ hai, thứ ba\""
        },
        scores: { S: 3 }
      },
      {
        text: {
          ko: "단계별로 차근차근 설명",
          en: "Explain step by step carefully",
          ja: "段階的に丁寧に説明",
          'zh-CN': "一步一步仔细解释",
          'zh-TW': "一步一步仔細解釋",
          id: "Jelaskan langkah demi langkah dengan hati-hati",
          vi: "Giải thích từng bước một cách cẩn thận"
        },
        scores: { S: 1 }
      },
      {
        text: {
          ko: "전체적인 큰 그림 먼저 제시",
          en: "Present the big picture first",
          ja: "全体的な大きな絵をまず提示",
          'zh-CN': "先展示整体大局",
          'zh-TW': "先展示整體大局",
          id: "Sajikan gambaran besar terlebih dahulu",
          vi: "Trình bày bức tranh lớn trước"
        },
        scores: { N: 1 }
      },
      {
        text: {
          ko: "비유와 은유를 활용한 설명",
          en: "Explanation using analogies and metaphors",
          ja: "比喩と隠喩を活用した説明",
          'zh-CN': "使用类比和隐喻进行解释",
          'zh-TW': "使用類比和隱喻進行解釋",
          id: "Penjelasan menggunakan analogi dan metafora",
          vi: "Giải thích sử dụng phép so sánh và ẩn dụ"
        },
        scores: { N: 3 }
      }
    ]
  },
  {
    id: 17,
    question: {
      ko: "친구가 고민 상담을 요청했습니다. 당신은?",
      en: "A friend asks for advice about their worries. You?",
      ja: "友達が悩み相談を求めました。あなたは？",
      'zh-CN': "朋友请求你为他们的烦恼提供建议。你？",
      'zh-TW': "朋友請求你為他們的煩惱提供建議。你？",
      id: "Teman meminta saran tentang kekhawatiran mereka. Anda?",
      vi: "Bạn bè yêu cầu lời khuyên về những lo lắng của họ. Bạn?"
    },
    options: [
      {
        text: {
          ko: "\"내 생각엔 이렇게 하는 게 나을 것 같아\" 해결책 제시",
          en: "\"I think it would be better to do it this way\" Present solutions",
          ja: "「私の考えでは、こうする方が良いと思う」解決策を提示",
          'zh-CN': "「我认为这样做会更好」提供解决方案",
          'zh-TW': "「我認為這樣做會更好」提供解決方案",
          id: "\"Menurut saya lebih baik melakukan ini\" Berikan solusi",
          vi: "\"Tôi nghĩ làm như vậy sẽ tốt hơn\" Đưa ra giải pháp"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "\"이런 방법도 있고 저런 방법도 있어\" 논리적 분석",
          en: "\"There's this method and that method\" Logical analysis",
          ja: "「こんな方法もあれば、あんな方法もある」論理的分析",
          'zh-CN': "「有这种方法，也有那种方法」逻辑分析",
          'zh-TW': "「有這種方法，也有那種方法」邏輯分析",
          id: "\"Ada metode ini dan metode itu\" Analisis logis",
          vi: "\"Có phương pháp này và phương pháp kia\" Phân tích logic"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "\"많이 힘들었겠다\" 공감하며 위로",
          en: "\"It must have been very difficult\" Empathize and comfort",
          ja: "「とても大変だったでしょう」共感して慰める",
          'zh-CN': "「一定很困难吧」同情并安慰",
          'zh-TW': "「一定很困難吧」同情並安慰",
          id: "\"Pasti sangat sulit\" Berempati dan menghibur",
          vi: "\"Chắc hẳn rất khó khăn\" Đồng cảm và an ủi"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "\"정말 속상했겠다. 내가 옆에 있을게\" 감정적 지지",
          en: "\"You must be really upset. I'll be by your side\" Emotional support",
          ja: "「本当に辛かったでしょう。私がそばにいます」感情的サポート",
          'zh-CN': "「你一定很伤心。我会在你身边」情感支持",
          'zh-TW': "「你一定很傷心。我會在你身邊」情感支持",
          id: "\"Pasti sangat sedih. Aku akan di sampingmu\" Dukungan emosional",
          vi: "\"Chắc hẳn rất buồn. Tôi sẽ ở bên cạnh bạn\" Hỗ trợ tình cảm"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 18,
    question: {
      ko: "팀 프로젝트에서 의견 충돌이 생겼을 때?",
      en: "When there's a conflict of opinions in a team project?",
      ja: "チームプロジェクトで意見の対立が生じた時は？",
      'zh-CN': "团队项目中出现意见冲突时？",
      'zh-TW': "團隊專案中出現意見衝突時？",
      id: "Ketika ada konflik pendapat dalam proyek tim?",
      vi: "Khi có xung đột ý kiến trong dự án nhóm?"
    },
    options: [
      {
        text: {
          ko: "\"효율적인 건 이거잖아\" 객관적 기준 제시",
          en: "\"The efficient one is this\" Present objective criteria",
          ja: "「効率的なのはこれでしょう」客観的基準を提示",
          'zh-CN': "「高效的是这个」提出客观标准",
          'zh-TW': "「高效的是這個」提出客觀標準",
          id: "\"Yang efisien adalah ini\" Berikan kriteria objektif",
          vi: "\"Cái hiệu quả là cái này\" Đưa ra tiêu chí khách quan"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "\"장단점을 따져보자\" 논리적 분석",
          en: "\"Let's weigh the pros and cons\" Logical analysis",
          ja: "「長所と短所を考えてみよう」論理的分析",
          'zh-CN': "「让我们权衡利弊」逻辑分析",
          'zh-TW': "「讓我們權衡利弊」邏輯分析",
          id: "\"Mari kita timbang pro dan kontra\" Analisis logis",
          vi: "「Hãy cân nhắc ưu nhược điểm」Phân tích logic"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "\"다들 어떻게 생각해?\" 의견 수렴",
          en: "\"What does everyone think?\" Gather opinions",
          ja: "「みんなはどう思う？」意見収集",
          'zh-CN': "「大家怎么想？」收集意见",
          'zh-TW': "「大家怎麼想？」收集意見",
          id: "\"Bagaimana menurut kalian?\" Kumpulkan pendapat",
          vi: "「Mọi người nghĩ sao?」Thu thập ý kiến"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "\"모두가 만족할 방법을 찾아보자\" 조화 중시",
          en: "\"Let's find a way that satisfies everyone\" Emphasize harmony",
          ja: "「みんなが満足できる方法を見つけよう」調和重視",
          'zh-CN': "「让我们找到让大家都满意的方法」重视和谐",
          'zh-TW': "「讓我們找到讓大家都滿意的方法」重視和諧",
          id: "\"Mari cari cara yang memuaskan semua orang\" Tekankan harmoni",
          vi: "「Hãy tìm cách làm hài lòng mọi người」Chú trọng hòa hợp"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 19,
    question: {
      ko: "중요한 결정을 내릴 때?",
      en: "When making important decisions?",
      ja: "重要な決定をする時は？",
      'zh-CN': "做重要决定时？",
      'zh-TW': "做重要決定時？",
      id: "Saat membuat keputusan penting?",
      vi: "Khi đưa ra quyết định quan trọng?"
    },
    options: [
      {
        text: {
          ko: "논리와 효율성으로 판단",
          en: "Judge by logic and efficiency",
          ja: "論理と効率性で判断",
          'zh-CN': "用逻辑和效率判断",
          'zh-TW': "用邏輯和效率判斷",
          id: "Menilai berdasarkan logika dan efisiensi",
          vi: "Đánh giá dựa trên logic và hiệu quả"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "합리성을 중시하되 상황 고려",
          en: "Emphasize rationality but consider the situation",
          ja: "合理性を重視するが状況を考慮",
          'zh-CN': "重视合理性但考虑情况",
          'zh-TW': "重視合理性但考慮情況",
          id: "Menekankan rasionalitas tapi pertimbangkan situasi",
          vi: "Chú trọng tính hợp lý nhưng xem xét tình huống"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "관련된 사람들의 감정 고려",
          en: "Consider the emotions of people involved",
          ja: "関係者の感情を考慮",
          'zh-CN': "考虑相关人员的感受",
          'zh-TW': "考慮相關人員的感受",
          id: "Pertimbangkan emosi orang yang terlibat",
          vi: "Xem xét cảm xúc của những người liên quan"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "모두의 감정과 관계를 최우선",
          en: "Prioritize everyone's emotions and relationships",
          ja: "みんなの感情と関係を最優先",
          'zh-CN': "优先考虑每个人的感受和关系",
          'zh-TW': "優先考慮每個人的感受和關係",
          id: "Prioritaskan emosi dan hubungan semua orang",
          vi: "Ưu tiên cảm xúc và mối quan hệ của mọi người"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 20,
    question: {
      ko: "누군가의 실수를 지적해야 할 때?",
      en: "When you need to point out someone's mistake?",
      ja: "誰かの間違いを指摘しなければならない時は？",
      'zh-CN': "当你需要指出某人的错误时？",
      'zh-TW': "當你需要指出某人的錯誤時？",
      id: "Ketika Anda perlu menunjuk kesalahan seseorang?",
      vi: "Khi bạn cần chỉ ra lỗi của ai đó?"
    },
    options: [
      {
        text: {
          ko: "\"이 부분이 잘못됐어\" 직접적으로 지적",
          en: "\"This part is wrong\" Point out directly",
          ja: "「この部分が間違っている」直接的に指摘",
          'zh-CN': "「这部分错了」直接指出",
          'zh-TW': "「這部分錯了」直接指出",
          id: "\"Bagian ini salah\" Tunjuk langsung",
          vi: "「Phần này sai rồi」Chỉ ra trực tiếp"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "\"이렇게 하면 더 좋을 것 같아\" 객관적 제안",
          en: "\"It would be better to do it this way\" Objective suggestion",
          ja: "「こうすればもっと良いと思う」客観的提案",
          'zh-CN': "「这样做会更好」客观建议",
          'zh-TW': "「這樣做會更好」客觀建議",
          id: "\"Akan lebih baik jika dilakukan seperti ini\" Saran objektif",
          vi: "「Làm như vậy sẽ tốt hơn」Đề xuất khách quan"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "\"수고했는데, 이 부분만 고치면 좋겠어\" 배려하며 지적",
          en: "\"You worked hard, but it would be good to fix this part\" Point out considerately",
          ja: "「お疲れ様でしたが、この部分だけ直せば良いと思います」配慮して指摘",
          'zh-CN': "「辛苦了，只要修改这部分就好」体贴地指出",
          'zh-TW': "「辛苦了，只要修改這部分就好」體貼地指出",
          id: "\"Sudah bekerja keras, tapi akan lebih baik jika memperbaiki bagian ini\" Tunjuk dengan pertimbangan",
          vi: "「Đã làm việc chăm chỉ, nhưng sửa phần này sẽ tốt hơn」Chỉ ra một cách chu đáo"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "기분 상할까 봐 조심스럽게 돌려서 표현",
          en: "Express carefully and indirectly for fear of hurting feelings",
          ja: "気分を害するかもしれないので慎重に回りくどく表現",
          'zh-CN': "担心伤害感情，小心委婉地表达",
          'zh-TW': "擔心傷害感情，小心委婉地表達",
          id: "Hati-hati dan tidak langsung karena takut menyakiti perasaan",
          vi: "Cẩn thận và gián tiếp vì sợ làm tổn thương cảm xúc"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 21,
    question: {
      ko: "영화나 드라마를 볼 때?",
      en: "When watching movies or dramas?",
      ja: "映画やドラマを見る時は？",
      'zh-CN': "看电影或电视剧时？",
      'zh-TW': "看電影或電視劇時？",
      id: "Saat menonton film atau drama?",
      vi: "Khi xem phim hoặc phim truyền hình?"
    },
    options: [
      {
        text: {
          ko: "논리적 모순이나 구성 분석",
          en: "Analyze logical contradictions or structure",
          ja: "論理的矛盾や構成を分析",
          'zh-CN': "分析逻辑矛盾或结构",
          'zh-TW': "分析邏輯矛盾或結構",
          id: "Menganalisis kontradiksi logis atau struktur",
          vi: "Phân tích mâu thuẫn logic hoặc cấu trúc"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "스토리 전개의 합리성 확인",
          en: "Check the rationality of story development",
          ja: "ストーリー展開の合理性を確認",
          'zh-CN': "检查故事发展的合理性",
          'zh-TW': "檢查故事發展的合理性",
          id: "Periksa rasionalitas pengembangan cerita",
          vi: "Kiểm tra tính hợp lý của sự phát triển câu chuyện"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "캐릭터의 감정에 몰입",
          en: "Immerse in the characters' emotions",
          ja: "キャラクターの感情に没入",
          'zh-CN': "沉浸在角色的情感中",
          'zh-TW': "沉浸在角色的情感中",
          id: "Terbenam dalam emosi karakter",
          vi: "Đắm chìm trong cảm xúc của nhân vật"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "등장인물에 감정이입하며 울거나 웃음",
          en: "Empathize with characters, cry or laugh",
          ja: "登場人物に感情移入して泣いたり笑ったり",
          'zh-CN': "对角色产生共鸣，哭或笑",
          'zh-TW': "對角色產生共鳴，哭或笑",
          id: "Berempati dengan karakter, menangis atau tertawa",
          vi: "Đồng cảm với nhân vật, khóc hoặc cười"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 22,
    question: {
      ko: "비판을 받았을 때?",
      en: "When you receive criticism?",
      ja: "批判を受けた時は？",
      'zh-CN': "当你受到批评时？",
      'zh-TW': "當你受到批評時？",
      id: "Ketika Anda menerima kritik?",
      vi: "Khi bạn nhận được lời chỉ trích?"
    },
    options: [
      {
        text: {
          ko: "\"어떤 점이 문제인가요?\" 객관적으로 받아들임",
          en: "\"What's the problem?\" Accept objectively",
          ja: "「どの点が問題ですか？」客観的に受け入れる",
          'zh-CN': "「问题在哪里？」客观接受",
          'zh-TW': "「問題在哪裡？」客觀接受",
          id: "\"Apa masalahnya?\" Terima secara objektif",
          vi: "「Vấn đề ở đâu?」Chấp nhận một cách khách quan"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "내용을 분석하고 개선점 찾기",
          en: "Analyze the content and find improvement points",
          ja: "内容を分析して改善点を見つける",
          'zh-CN': "分析内容并找到改进点",
          'zh-TW': "分析內容並找到改進點",
          id: "Analisis konten dan cari poin perbaikan",
          vi: "Phân tích nội dung và tìm điểm cải thiện"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "일단 상처받지만 곧 회복",
          en: "Get hurt at first but recover quickly",
          ja: "一旦傷つくがすぐに回復",
          'zh-CN': "一开始受伤但很快恢复",
          'zh-TW': "一開始受傷但很快恢復",
          id: "Terluka dulu tapi cepat pulih",
          vi: "Bị tổn thương lúc đầu nhưng nhanh chóng hồi phục"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "오래 생각하고 감정적으로 힘듦",
          en: "Think about it for a long time and struggle emotionally",
          ja: "長く考えて感情的につらい",
          'zh-CN': "长时间思考并情感上痛苦",
          'zh-TW': "長時間思考並情感上痛苦",
          id: "Berpikir lama dan kesulitan secara emosional",
          vi: "Suy nghĩ lâu và khó khăn về mặt tình cảm"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 23,
    question: {
      ko: "의견 충돌 시 더 중요하게 생각하는 것은?",
      en: "What do you consider more important during opinion conflicts?",
      ja: "意見の対立時により重要に考えるのは？",
      'zh-CN': "意见冲突时你认为更重要的是什么？",
      'zh-TW': "意見衝突時你認為更重要的是什麼？",
      id: "Apa yang Anda anggap lebih penting saat konflik pendapat?",
      vi: "Bạn coi trọng điều gì hơn khi có xung đột ý kiến?"
    },
    options: [
      {
        text: {
          ko: "누가 논리적으로 맞는가",
          en: "Who is logically correct",
          ja: "誰が論理的に正しいか",
          'zh-CN': "谁在逻辑上是正确的",
          'zh-TW': "誰在邏輯上是正確的",
          id: "Siapa yang benar secara logis",
          vi: "Ai đúng về mặt logic"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "효율적이고 합리적인 결론",
          en: "Efficient and rational conclusion",
          ja: "効率的で合理的な結論",
          'zh-CN': "高效和理性的结论",
          'zh-TW': "高效和理性的結論",
          id: "Kesimpulan yang efisien dan rasional",
          vi: "Kết luận hiệu quả và hợp lý"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "서로의 관계가 상하지 않는 것",
          en: "Not damaging each other's relationship",
          ja: "お互いの関係が傷つかないこと",
          'zh-CN': "不伤害彼此的关系",
          'zh-TW': "不傷害彼此的關係",
          id: "Tidak merusak hubungan satu sama lain",
          vi: "Không làm tổn hại mối quan hệ của nhau"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "모두가 기분 좋은 합의점",
          en: "A consensus that makes everyone feel good",
          ja: "みんなが気分良くいられる合意点",
          'zh-CN': "让每个人都感觉良好的共识",
          'zh-TW': "讓每個人都感覺良好的共識",
          id: "Konsensus yang membuat semua orang merasa nyaman",
          vi: "Sự đồng thuận khiến mọi người cảm thấy tốt"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 24,
    question: {
      ko: "칭찬할 때 당신의 스타일은?",
      en: "What is your style when giving compliments?",
      ja: "褒める時のあなたのスタイルは？",
      'zh-CN': "赞美时你的风格是什么？",
      'zh-TW': "讚美時你的風格是什麼？",
      id: "Apa gaya Anda saat memuji?",
      vi: "Phong cách của bạn khi khen ngợi là gì?"
    },
    options: [
      {
        text: {
          ko: "\"결과가 좋네\" 성과 중심",
          en: "\"The results are good\" Performance-focused",
          ja: "「結果が良いね」成果中心",
          'zh-CN': "「结果很好」以成果为中心",
          'zh-TW': "「結果很好」以成果為中心",
          id: "\"Hasilnya bagus\" Fokus pada kinerja",
          vi: "「Kết quả tốt」Tập trung vào thành tích"
        },
        scores: { T: 3 }
      },
      {
        text: {
          ko: "\"잘했어\" 간결한 칭찬",
          en: "\"Well done\" Concise praise",
          ja: "「よくやった」簡潔な褒め言葉",
          'zh-CN': "「做得好」简洁的赞美",
          'zh-TW': "「做得好」簡潔的讚美",
          id: "\"Bagus\" Pujian singkat",
          vi: "「Làm tốt」Lời khen ngắn gọn"
        },
        scores: { T: 1 }
      },
      {
        text: {
          ko: "\"고생 많았어, 잘했어\" 노력 인정",
          en: "\"You worked hard, well done\" Acknowledge effort",
          ja: "「お疲れ様、よくやった」努力を認める",
          'zh-CN': "「辛苦了，做得好」认可努力",
          'zh-TW': "「辛苦了，做得好」認可努力",
          id: "\"Sudah bekerja keras, bagus\" Akui usaha",
          vi: "「Đã làm việc chăm chỉ, làm tốt」Ghi nhận nỗ lực"
        },
        scores: { F: 1 }
      },
      {
        text: {
          ko: "\"정말 대단해! 얼마나 힘들었을까\" 감정 표현",
          en: "\"You're amazing! How hard it must have been\" Emotional expression",
          ja: "「本当にすごい！どれだけ大変だったでしょう」感情表現",
          'zh-CN': "「真的很棒！一定很辛苦吧」情感表达",
          'zh-TW': "「真的很棒！一定很辛苦吧」情感表達",
          id: "\"Benar-benar hebat! Pasti sangat sulit\" Ekspresi emosional",
          vi: "「Thật tuyệt vời! Chắc hẳn rất khó khăn」Biểu lộ cảm xúc"
        },
        scores: { F: 3 }
      }
    ]
  },
  {
    id: 25,
    question: {
      ko: "일상생활에서 당신은?",
      en: "In daily life, you?",
      ja: "日常生活で、あなたは？",
      'zh-CN': "在日常生活中，你？",
      'zh-TW': "在日常生活中，你？",
      id: "Dalam kehidupan sehari-hari, Anda?",
      vi: "Trong cuộc sống hàng ngày, bạn?"
    },
    options: [
      {
        text: {
          ko: "계획표대로 움직이는 게 편함",
          en: "Comfortable moving according to schedule",
          ja: "計画表通りに動くのが楽",
          'zh-CN': "按计划表行动更舒服",
          'zh-TW': "按計劃表行動更舒服",
          id: "Nyaman bergerak sesuai jadwal",
          vi: "Thoải mái khi hoạt động theo lịch trình"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "대체로 계획적이지만 유연함",
          en: "Generally planned but flexible",
          ja: "大体計画的ながら柔軟",
          'zh-CN': "大体有计划但灵活",
          'zh-TW': "大體有計劃但靈活",
          id: "Umumnya terencana tapi fleksibel",
          vi: "Nhìn chung có kế hoạch nhưng linh hoạt"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "즉흥적이되 필요하면 계획",
          en: "Spontaneous but plan when necessary",
          ja: "即興的だが必要なら計画",
          'zh-CN': "即兴但必要时会计划",
          'zh-TW': "即興但必要時會計劃",
          id: "Spontan tapi merencanakan jika perlu",
          vi: "Tự phát nhưng lên kế hoạch khi cần thiết"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "그때그때 상황에 맞춰 행동",
          en: "Act according to the situation at the time",
          ja: "その時その時の状況に合わせて行動",
          'zh-CN': "根据当时情况行动",
          'zh-TW': "根據當時情況行動",
          id: "Bertindak sesuai situasi saat itu",
          vi: "Hành động theo tình huống lúc đó"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 26,
    question: {
      ko: "업무 마감을 앞두고 있을 때?",
      en: "When facing a work deadline?",
      ja: "業務の締切を控えている時は？",
      'zh-CN': "面对工作截止日期时？",
      'zh-TW': "面對工作截止日期時？",
      id: "Saat menghadapi tenggat waktu kerja?",
      vi: "Khi đối mặt với hạn chót công việc?"
    },
    options: [
      {
        text: {
          ko: "미리미리 끝내놓고 여유",
          en: "Finish early and have time to spare",
          ja: "前もって終わらせて余裕",
          'zh-CN': "提前完成并有余裕",
          'zh-TW': "提前完成並有餘裕",
          id: "Selesaikan lebih awal dan punya waktu luang",
          vi: "Hoàn thành sớm và có thời gian rảnh"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "계획적으로 진행하여 제때 완료",
          en: "Progress systematically and complete on time",
          ja: "計画的に進めて期日通り完了",
          'zh-CN': "系统性地进行并按时完成",
          'zh-TW': "系統性地進行並按時完成",
          id: "Berkembang sistematis dan selesaikan tepat waktu",
          vi: "Tiến hành có hệ thống và hoàn thành đúng hạn"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "마감 며칠 전부터 집중해서 완성",
          en: "Focus and complete a few days before deadline",
          ja: "締切数日前から集中して完成",
          'zh-CN': "截止日期前几天集中完成",
          'zh-TW': "截止日期前幾天集中完成",
          id: "Fokus dan selesaikan beberapa hari sebelum tenggat",
          vi: "Tập trung và hoàn thành vài ngày trước hạn chót"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "마감 직전 압박감으로 몰아서",
          en: "Rush under pressure right before deadline",
          ja: "締切直前のプレッシャーで追い込む",
          'zh-CN': "截止日期前在压力下冲刺",
          'zh-TW': "截止日期前在壓力下衝刺",
          id: "Terburu-buru di bawah tekanan tepat sebelum tenggat",
          vi: "Vội vàng dưới áp lực ngay trước hạn chót"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 27,
    question: {
      ko: "주말 계획에 대한 당신의 태도는?",
      en: "Your attitude towards weekend plans?",
      ja: "週末の計画に対するあなたの態度は？",
      'zh-CN': "你对周末计划的态度是？",
      'zh-TW': "你對週末計劃的態度是？",
      id: "Sikap Anda terhadap rencana akhir pekan?",
      vi: "Thái độ của bạn đối với kế hoạch cuối tuần?"
    },
    options: [
      {
        text: {
          ko: "금요일에 이미 상세히 계획됨",
          en: "Already planned in detail by Friday",
          ja: "金曜日に既に詳細に計画済み",
          'zh-CN': "周五已经详细计划好了",
          'zh-TW': "週五已經詳細計劃好了",
          id: "Sudah direncanakan detail pada hari Jumat",
          vi: "Đã lên kế hoạch chi tiết vào thứ Sáu"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "큰 틀은 정해두는 편",
          en: "Generally set the big picture",
          ja: "大きな枠組みは決めておく方",
          'zh-CN': "大体设定好框架",
          'zh-TW': "大體設定好框架",
          id: "Umumnya menetapkan gambaran besar",
          vi: "Nhìn chung đặt ra bức tranh lớn"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "당일 아침에 정하기도 함",
          en: "Sometimes decide on the morning of",
          ja: "当日の朝に決めることもある",
          'zh-CN': "有时在当天早上决定",
          'zh-TW': "有時在當天早上決定",
          id: "Kadang memutuskan di pagi hari",
          vi: "Đôi khi quyết định vào buổi sáng"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "\"오늘 뭐하지?\" 매번 즉흥적",
          en: "\"What should I do today?\" Always spontaneous",
          ja: "「今日何しよう？」毎回即興的",
          'zh-CN': "「今天做什么？」总是即兴",
          'zh-TW': "「今天做什麼？」總是即興",
          id: "\"Apa yang harus saya lakukan hari ini?\" Selalu spontan",
          vi: "「Hôm nay làm gì?」Luôn tự phát"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 28,
    question: {
      ko: "방 정리 상태는?",
      en: "What is your room organization like?",
      ja: "部屋の整理状態は？",
      'zh-CN': "你的房间整理状态如何？",
      'zh-TW': "你的房間整理狀態如何？",
      id: "Bagaimana kondisi penataan kamar Anda?",
      vi: "Tình trạng sắp xếp phòng của bạn như thế nào?"
    },
    options: [
      {
        text: {
          ko: "항상 깔끔하게 정돈됨",
          en: "Always neat and organized",
          ja: "いつもきれいに整理されている",
          'zh-CN': "总是整洁有序",
          'zh-TW': "總是整潔有序",
          id: "Selalu rapi dan terorganisir",
          vi: "Luôn gọn gàng và có tổ chức"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "대체로 정리된 편",
          en: "Generally organized",
          ja: "大体整理されている方",
          'zh-CN': "大体整理有序",
          'zh-TW': "大體整理有序",
          id: "Umumnya terorganisir",
          vi: "Nhìn chung có tổ chức"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "필요할 때 정리함",
          en: "Organize when needed",
          ja: "必要な時に整理する",
          'zh-CN': "需要时整理",
          'zh-TW': "需要時整理",
          id: "Mengorganisir saat diperlukan",
          vi: "Sắp xếp khi cần thiết"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "자유로운 배치, 나만의 시스템",
          en: "Free arrangement, my own system",
          ja: "自由な配置、自分だけのシステム",
          'zh-CN': "自由摆放，自己的系统",
          'zh-TW': "自由擺放，自己的系統",
          id: "Penataan bebas, sistem sendiri",
          vi: "Sắp xếp tự do, hệ thống riêng"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 29,
    question: {
      ko: "여행 짐을 쌀 때?",
      en: "When packing for a trip?",
      ja: "旅行の荷物を詰める時は？",
      'zh-CN': "收拾旅行行李时？",
      'zh-TW': "收拾旅行行李時？",
      id: "Saat mengemas barang untuk perjalanan?",
      vi: "Khi đóng gói hành lý cho chuyến đi?"
    },
    options: [
      {
        text: {
          ko: "며칠 전부터 리스트 작성하고 체크",
          en: "Make a list days before and check",
          ja: "数日前からリスト作成してチェック",
          'zh-CN': "提前几天列清单并检查",
          'zh-TW': "提前幾天列清單並檢查",
          id: "Buat daftar beberapa hari sebelumnya dan periksa",
          vi: "Lập danh sách vài ngày trước và kiểm tra"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "하루 전에 차근차근 준비",
          en: "Prepare carefully the day before",
          ja: "前日に丁寧に準備",
          'zh-CN': "前一天仔细准备",
          'zh-TW': "前一天仔細準備",
          id: "Persiapkan dengan hati-hati sehari sebelumnya",
          vi: "Chuẩn bị cẩn thận một ngày trước"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "당일 아침에 급하게 챙김",
          en: "Pack hastily on the morning of",
          ja: "当日の朝に急いで詰める",
          'zh-CN': "当天早上匆忙收拾",
          'zh-TW': "當天早上匆忙收拾",
          id: "Kemas terburu-buru di pagi hari",
          vi: "Đóng gói vội vàng vào buổi sáng"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "출발 직전까지 챙기며 자주 빠뜨림",
          en: "Pack until departure and often forget things",
          ja: "出発直前まで詰めてよく忘れ物",
          'zh-CN': "出发前一刻才收拾，经常忘东西",
          'zh-TW': "出發前一刻才收拾，經常忘東西",
          id: "Kemas sampai keberangkatan dan sering lupa barang",
          vi: "Đóng gói đến phút cuối và thường quên đồ"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 30,
    question: {
      ko: "일과 중 갑자기 일정이 변경되면?",
      en: "When your schedule suddenly changes during work?",
      ja: "仕事中に突然スケジュールが変更されると？",
      'zh-CN': "工作中突然改变日程时？",
      'zh-TW': "工作中突然改變日程時？",
      id: "Ketika jadwal tiba-tiba berubah saat bekerja?",
      vi: "Khi lịch trình đột nhiên thay đổi trong công việc?"
    },
    options: [
      {
        text: {
          ko: "당황스럽고 불편함",
          en: "Flustered and uncomfortable",
          ja: "慌てて不快",
          'zh-CN': "慌张和不舒服",
          'zh-TW': "慌張和不舒服",
          id: "Bingung dan tidak nyaman",
          vi: "Bối rối và khó chịu"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "약간 불편하지만 적응",
          en: "A bit uncomfortable but adapt",
          ja: "少し不快だが適応",
          'zh-CN': "有点不舒服但适应",
          'zh-TW': "有點不舒服但適應",
          id: "Agak tidak nyaman tapi menyesuaikan",
          vi: "Hơi khó chịu nhưng thích nghi"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "괜찮음, 상황에 맞춰 조정",
          en: "Fine, adjust to the situation",
          ja: "大丈夫、状況に合わせて調整",
          'zh-CN': "没关系，根据情况调整",
          'zh-TW': "沒關係，根據情況調整",
          id: "Tidak apa-apa, sesuaikan dengan situasi",
          vi: "Ổn, điều chỉnh theo tình huống"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "전혀 문제없음, 오히려 신선함",
          en: "No problem at all, rather refreshing",
          ja: "全く問題なし、むしろ新鮮",
          'zh-CN': "完全没问题，反而很新鲜",
          'zh-TW': "完全沒問題，反而很新鮮",
          id: "Tidak masalah sama sekali, malah menyegarkan",
          vi: "Hoàn toàn không vấn đề gì, thậm chí còn tươi mới"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 31,
    question: {
      ko: "쇼핑할 때 당신의 스타일은?",
      en: "What is your style when shopping?",
      ja: "ショッピングする時のあなたのスタイルは？",
      'zh-CN': "购物时你的风格是什么？",
      'zh-TW': "購物時你的風格是什麼？",
      id: "Apa gaya Anda saat berbelanja?",
      vi: "Phong cách của bạn khi mua sắm là gì?"
    },
    options: [
      {
        text: {
          ko: "필요한 것 리스트 작성 후 계획적으로 구매",
          en: "Make a list of needed items and buy systematically",
          ja: "必要なものリスト作成後計画的に購入",
          'zh-CN': "列出需要的东西后有计划地购买",
          'zh-TW': "列出需要的東西後有計劃地購買",
          id: "Buat daftar barang yang dibutuhkan dan beli secara sistematis",
          vi: "Lập danh sách những thứ cần thiết và mua có hệ thống"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "대체로 필요한 것 위주로 구매",
          en: "Generally buy mainly what's needed",
          ja: "大体必要なもの中心に購入",
          'zh-CN': "大体购买需要的东西",
          'zh-TW': "大體購買需要的東西",
          id: "Umumnya beli terutama yang dibutuhkan",
          vi: "Nhìn chung mua chủ yếu những thứ cần thiết"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "둘러보다 맘에 드는 것 구매",
          en: "Browse and buy what catches your eye",
          ja: "見回して気に入ったものを購入",
          'zh-CN': "浏览并购买喜欢的东西",
          'zh-TW': "瀏覽並購買喜歡的東西",
          id: "Jelajahi dan beli yang menarik perhatian",
          vi: "Dạo xem và mua những thứ thu hút"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "즉흥적으로 이것저것 구경하며 구매",
          en: "Buy spontaneously while browsing various things",
          ja: "即興的にあれこれ見回して購入",
          'zh-CN': "即兴地浏览各种东西并购买",
          'zh-TW': "即興地瀏覽各種東西並購買",
          id: "Beli secara spontan sambil melihat-lihat berbagai hal",
          vi: "Mua tự phát trong khi xem xét nhiều thứ"
        },
        scores: { P: 3 }
      }
    ]
  },
  {
    id: 32,
    question: {
      ko: "일 처리 방식은?",
      en: "What is your way of handling tasks?",
      ja: "仕事の処理方式は？",
      'zh-CN': "你处理工作的方式是？",
      'zh-TW': "你處理工作的方式是？",
      id: "Bagaimana cara Anda menangani tugas?",
      vi: "Cách bạn xử lý công việc là gì?"
    },
    options: [
      {
        text: {
          ko: "순서대로 하나씩 끝내고 다음 진행",
          en: "Finish one by one in order and proceed to next",
          ja: "順番に一つずつ終わらせて次に進む",
          'zh-CN': "按顺序一个一个完成然后进行下一个",
          'zh-TW': "按順序一個一個完成然後進行下一個",
          id: "Selesaikan satu per satu berurutan dan lanjut ke berikutnya",
          vi: "Hoàn thành từng cái một theo thứ tự rồi chuyển sang cái tiếp theo"
        },
        scores: { J: 3 }
      },
      {
        text: {
          ko: "우선순위 정해서 체계적으로",
          en: "Set priorities and work systematically",
          ja: "優先順位を決めて体系的に",
          'zh-CN': "设定优先级并系统性地工作",
          'zh-TW': "設定優先級並系統性地工作",
          id: "Tentukan prioritas dan bekerja secara sistematis",
          vi: "Đặt ưu tiên và làm việc có hệ thống"
        },
        scores: { J: 1 }
      },
      {
        text: {
          ko: "하다가 다른 것도 하면서 진행",
          en: "Work on other things while doing one",
          ja: "やりながら他のこともやりながら進行",
          'zh-CN': "做一件事的同时也做其他事",
          'zh-TW': "做一件事的同時也做其他事",
          id: "Kerjakan hal lain sambil mengerjakan satu hal",
          vi: "Làm việc khác trong khi làm một việc"
        },
        scores: { P: 1 }
      },
      {
        text: {
          ko: "여러 가지 동시에, 끝나는 대로 마무리",
          en: "Multiple things simultaneously, finish as they complete",
          ja: "複数のことを同時に、終わるものから仕上げ",
          'zh-CN': "同时处理多个事情，完成一个就结束一个",
          'zh-TW': "同時處理多個事情，完成一個就結束一個",
          id: "Beberapa hal bersamaan, selesaikan saat selesai",
          vi: "Nhiều việc cùng lúc, hoàn thành khi nào xong"
        },
        scores: { P: 3 }
      }
    ]
  }
];

// MBTI 결과 데이터
export const mbtiAccurateResults: MBTIAccurateResult[] = [
  {
    type: "ESTJ",
    emoji: "👔",
    title: {
      ko: "엄격한 관리자형",
      en: "The Executive",
      ja: "厳格な管理者型",
      'zh-CN': "严格的执行官型",
      'zh-TW': "嚴格的執行官型",
      id: "Tipe Manajer Ketat",
      vi: "Kiểu Quản lý Nghiêm khắc"
    },
    description: {
      ko: "세상은 체계와 질서로 돌아간다",
      en: "The world runs on systems and order",
      ja: "世界はシステムと秩序で動く",
      'zh-CN': "世界靠系统和秩序运转",
      'zh-TW': "世界靠系統和秩序運轉",
      id: "Dunia berjalan dengan sistem dan keteraturan",
      vi: "Thế giới vận hành bằng hệ thống và trật tự"
    },
    longDescription: {
      ko: "현실적이고 실용적입니다. 명확한 계획과 규칙을 중시하며 효율적으로 일을 처리합니다. 리더십이 강하고 책임감 있으며 조직을 잘 이끕니다.",
      en: "Realistic and practical. Values clear plans and rules, handles work efficiently. Strong leadership, responsible, and leads organizations well.",
      ja: "現実的で実用的です。明確な計画と規則を重視し、効率的に仕事を処理します。リーダーシップが強く、責任感があり、組織をよく導きます。",
      'zh-CN': "现实实用。重视明确的计划和规则，高效处理工作。领导力强，有责任感，善于领导组织。",
      'zh-TW': "現實實用。重視明確的計劃和規則，高效處理工作。領導力強，有責任感，善於領導組織。",
      id: "Realistis dan praktis. Menghargai rencana dan aturan yang jelas, menangani pekerjaan dengan efisien. Kepemimpinan kuat, bertanggung jawab, dan memimpin organisasi dengan baik.",
      vi: "Thực tế và thực dụng. Coi trọng kế hoạch và quy tắc rõ ràng, xử lý công việc hiệu quả. Lãnh đạo mạnh mẽ, có trách nhiệm và dẫn dắt tổ chức tốt."
    },
    pros: [
      {
        ko: "체계적이고 조직적",
        en: "Systematic and organized",
        ja: "体系的で組織的",
        'zh-CN': "系统性和组织性",
        'zh-TW': "系統性和組織性",
        id: "Sistematis dan terorganisir",
        vi: "Có hệ thống và tổ chức"
      },
      {
        ko: "강한 책임감",
        en: "Strong sense of responsibility",
        ja: "強い責任感",
        'zh-CN': "强烈的责任感",
        'zh-TW': "強烈的責任感",
        id: "Rasa tanggung jawab yang kuat",
        vi: "Ý thức trách nhiệm mạnh mẽ"
      },
      {
        ko: "뛰어난 리더십",
        en: "Excellent leadership",
        ja: "優れたリーダーシップ",
        'zh-CN': "卓越的领导力",
        'zh-TW': "卓越的領導力",
        id: "Kepemimpinan yang luar biasa",
        vi: "Khả năng lãnh đạo xuất sắc"
      },
      {
        ko: "높은 효율성",
        en: "High efficiency",
        ja: "高い効率性",
        'zh-CN': "高效率",
        'zh-TW': "高效率",
        id: "Efisiensi tinggi",
        vi: "Hiệu quả cao"
      }
    ],
    cons: [
      {
        ko: "융통성 부족",
        en: "Lack of flexibility",
        ja: "柔軟性の欠如",
        'zh-CN': "缺乏灵活性",
        'zh-TW': "缺乏靈活性",
        id: "Kurang fleksibilitas",
        vi: "Thiếu linh hoạt"
      },
      {
        ko: "감정 표현 어려움",
        en: "Difficulty expressing emotions",
        ja: "感情表現の困難",
        'zh-CN': "难以表达情感",
        'zh-TW': "難以表達情感",
        id: "Kesulitan mengekspresikan emosi",
        vi: "Khó khăn trong việc thể hiện cảm xúc"
      }
    ],
    advice: {
      ko: "때로는 다른 사람의 감정을 고려하고, 변화에 더 유연하게 대응해보세요. 완벽함보다는 조화를 추구하는 것이 좋습니다.",
      en: "Sometimes consider others' emotions and be more flexible with change. Pursuing harmony rather than perfection is better.",
      ja: "時には他の人の感情を考慮し、変化により柔軟に対応してみてください。完璧さよりも調和を追求する方が良いです。",
      'zh-CN': "有时考虑他人的情感，对变化更加灵活。追求和谐比追求完美更好。",
      'zh-TW': "有時考慮他人的情感，對變化更加靈活。追求和諧比追求完美更好。",
      id: "Kadang pertimbangkan emosi orang lain dan lebih fleksibel dengan perubahan. Mengejar harmoni daripada kesempurnaan lebih baik.",
      vi: "Đôi khi hãy cân nhắc cảm xúc của người khác và linh hoạt hơn với sự thay đổi. Theo đuổi sự hòa hợp thay vì sự hoàn hảo sẽ tốt hơn."
    },
    careers: [
      { ko: "경영자", en: "Executive", ja: "経営者", 'zh-CN': "高管", 'zh-TW': "高管", id: "Eksekutif", vi: "Giám đốc điều hành" },
      { ko: "관리자", en: "Manager", ja: "管理者", 'zh-CN': "管理者", 'zh-TW': "管理者", id: "Manajer", vi: "Quản lý" },
      { ko: "군인", en: "Military Officer", ja: "軍人", 'zh-CN': "军人", 'zh-TW': "軍人", id: "Tentara", vi: "Quân nhân" },
      { ko: "경찰", en: "Police Officer", ja: "警察", 'zh-CN': "警察", 'zh-TW': "警察", id: "Polisi", vi: "Cảnh sát" },
      { ko: "판사", en: "Judge", ja: "判事", 'zh-CN': "法官", 'zh-TW': "法官", id: "Hakim", vi: "Thẩm phán" }
    ],
    dating: [
      { ko: "안정적이고 헌신적", en: "Stable and devoted", ja: "安定していて献身的", 'zh-CN': "稳定且忠诚", 'zh-TW': "穩定且忠誠", id: "Stabil dan setia", vi: "Ổn định và tận tụy" },
      { ko: "계획적 데이트 선호", en: "Prefers planned dates", ja: "計画的デートを好む", 'zh-CN': "喜欢计划性约会", 'zh-TW': "喜歡計劃性約會", id: "Lebih suka kencan terencana", vi: "Thích hẹn hò có kế hoạch" },
      { ko: "전통적 가치 중시", en: "Values traditional values", ja: "伝統的価値を重視", 'zh-CN': "重视传统价值", 'zh-TW': "重視傳統價值", id: "Menghargai nilai tradisional", vi: "Coi trọng giá trị truyền thống" }
    ],
    celebrities: [
      { ko: "미셸 오바마", en: "Michelle Obama", ja: "ミシェル・オバマ", 'zh-CN': "米歇尔·奥巴马", 'zh-TW': "米歇爾·歐巴馬", id: "Michelle Obama", vi: "Michelle Obama" },
      { ko: "엠마 왓슨", en: "Emma Watson", ja: "エマ・ワトソン", 'zh-CN': "艾玛·沃森", 'zh-TW': "艾瑪·華森", id: "Emma Watson", vi: "Emma Watson" }
    ],
    compatibility: {
      best: ["ISFP", "ISTP"],
      good: ["ESFP", "ESTP", "ISFJ", "ISTJ"],
      careful: ["INFP", "INTP"],
      difficult: ["ENFP", "ENTP"]
    }
  },
  {
    type: "ESTP",
    emoji: "🏃",
    title: {
      ko: "모험을 즐기는 사업가형",
      en: "The Entrepreneur",
      ja: "冒険を楽しむ起業家型",
      'zh-CN': "享受冒险的企业家型",
      'zh-TW': "享受冒險的企業家型",
      id: "Tipe Pengusaha Petualang",
      vi: "Kiểu Doanh nhân Thích phiêu lưu"
    },
    description: {
      ko: "지금 이 순간을 즐겨라",
      en: "Enjoy this moment now",
      ja: "今この瞬間を楽しめ",
      'zh-CN': "享受现在这个时刻",
      'zh-TW': "享受現在這個時刻",
      id: "Nikmati momen ini sekarang",
      vi: "Tận hưởng khoảnh khắc hiện tại"
    },
    longDescription: {
      ko: "활동적이고 즉흥적입니다. 현재에 집중하며 실용적으로 문제를 해결합니다. 위험을 즐기고 에너지가 넘칩니다.",
      en: "Active and spontaneous. Focuses on the present and solves problems practically. Enjoys risks and has overflowing energy.",
      ja: "活動的で即興的です。現在に集中し、実用的に問題を解決します。リスクを楽しみ、エネルギーが溢れています。",
      'zh-CN': "活跃且即兴。专注于现在，实用地解决问题。享受风险，充满活力。",
      'zh-TW': "活躍且即興。專注於現在，實用地解決問題。享受風險，充滿活力。",
      id: "Aktif dan spontan. Fokus pada saat ini dan menyelesaikan masalah secara praktis. Menikmati risiko dan memiliki energi yang melimpah.",
      vi: "Năng động và tự phát. Tập trung vào hiện tại và giải quyết vấn đề một cách thực tế. Thích rủi ro và có năng lượng dồi dào."
    },
    pros: [
      {
        ko: "강한 행동력",
        en: "Strong action power",
        ja: "強い行動力",
        'zh-CN': "强大的行动力",
        'zh-TW': "強大的行動力",
        id: "Kekuatan aksi yang kuat",
        vi: "Sức mạnh hành động mạnh mẽ"
      },
      {
        ko: "뛰어난 현실감각",
        en: "Excellent sense of reality",
        ja: "優れた現実感覚",
        'zh-CN': "出色的现实感",
        'zh-TW': "出色的現實感",
        id: "Rasa realitas yang luar biasa",
        vi: "Cảm giác thực tế xuất sắc"
      },
      {
        ko: "높은 유연성",
        en: "High flexibility",
        ja: "高い柔軟性",
        'zh-CN': "高灵活性",
        'zh-TW': "高靈活性",
        id: "Fleksibilitas tinggi",
        vi: "Tính linh hoạt cao"
      },
      {
        ko: "강한 추진력",
        en: "Strong drive",
        ja: "強い推進力",
        'zh-CN': "强大的推动力",
        'zh-TW': "強大的推動力",
        id: "Dorongan yang kuat",
        vi: "Động lực mạnh mẽ"
      }
    ],
    cons: [
      {
        ko: "계획성 부족",
        en: "Lack of planning",
        ja: "計画性の欠如",
        'zh-CN': "缺乏计划性",
        'zh-TW': "缺乏計劃性",
        id: "Kurang perencanaan",
        vi: "Thiếu tính kế hoạch"
      },
      {
        ko: "장기 목표 설정 어려움",
        en: "Difficulty setting long-term goals",
        ja: "長期目標設定の困難",
        'zh-CN': "难以设定长期目标",
        'zh-TW': "難以設定長期目標",
        id: "Kesulitan menetapkan tujuan jangka panjang",
        vi: "Khó khăn trong việc đặt mục tiêu dài hạn"
      }
    ],
    advice: {
      ko: "장기적인 목표를 설정하고 계획을 세워보세요. 때로는 한 걸음 물러서서 전체적인 그림을 보는 것이 도움이 됩니다.",
      en: "Set long-term goals and make plans. Sometimes stepping back to see the big picture helps.",
      ja: "長期的な目標を設定し、計画を立ててみてください。時には一歩引いて全体像を見ることが役立ちます。",
      'zh-CN': "设定长期目标并制定计划。有时退一步看大局会有所帮助。",
      'zh-TW': "設定長期目標並制定計劃。有時退一步看大局會有所幫助。",
      id: "Tetapkan tujuan jangka panjang dan buat rencana. Terkadang mundur selangkah untuk melihat gambaran besar membantu.",
      vi: "Hãy đặt mục tiêu dài hạn và lập kế hoạch. Đôi khi lùi lại một bước để nhìn toàn cảnh sẽ có ích."
    },
    careers: [
      { ko: "영업", en: "Sales", ja: "営業", 'zh-CN': "销售", 'zh-TW': "銷售", id: "Penjualan", vi: "Bán hàng" },
      { ko: "스포츠", en: "Sports", ja: "スポーツ", 'zh-CN': "体育", 'zh-TW': "體育", id: "Olahraga", vi: "Thể thao" },
      { ko: "응급의료", en: "Emergency Medicine", ja: "救急医療", 'zh-CN': "急救医疗", 'zh-TW': "急救醫療", id: "Kedokteran Darurat", vi: "Y tế khẩn cấp" },
      { ko: "사업가", en: "Entrepreneur", ja: "起業家", 'zh-CN': "企业家", 'zh-TW': "企業家", id: "Pengusaha", vi: "Doanh nhân" },
      { ko: "경찰", en: "Police Officer", ja: "警察", 'zh-CN': "警察", 'zh-TW': "警察", id: "Polisi", vi: "Cảnh sát" }
    ],
    dating: [
      { ko: "열정적이고 재미있음", en: "Passionate and fun", ja: "情熱的で楽しい", 'zh-CN': "热情有趣", 'zh-TW': "熱情有趣", id: "Bersemangat dan menyenangkan", vi: "Nhiệt tình và vui vẻ" },
      { ko: "즉흥적 데이트", en: "Spontaneous dating", ja: "即興的デート", 'zh-CN': "即兴约会", 'zh-TW': "即興約會", id: "Kencan spontan", vi: "Hẹn hò tự phát" },
      { ko: "모험적 관계", en: "Adventurous relationship", ja: "冒険的関係", 'zh-CN': "冒险关系", 'zh-TW': "冒險關係", id: "Hubungan petualangan", vi: "Mối quan hệ phiêu lưu" }
    ],
    celebrities: [
      { ko: "도널드 트럼프", en: "Donald Trump", ja: "ドナルド・トランプ", 'zh-CN': "唐纳德·特朗普", 'zh-TW': "唐納德·川普", id: "Donald Trump", vi: "Donald Trump" },
      { ko: "어니스트 헤밍웨이", en: "Ernest Hemingway", ja: "アーネスト・ヘミングウェイ", 'zh-CN': "欧内斯特·海明威", 'zh-TW': "歐內斯特·海明威", id: "Ernest Hemingway", vi: "Ernest Hemingway" }
    ],
    compatibility: {
      best: ["ISFJ", "ISTJ"],
      good: ["ESFJ", "ESTJ", "ISFP", "ISTP"],
      careful: ["INFJ", "ENFJ"],
      difficult: ["INTJ", "ENTJ"]
    }
  },
  {
    type: "ESFJ",
    emoji: "🤝",
    title: {
      ko: "사교적인 외교관형",
      en: "The Consul",
      ja: "社交的な外交官型",
      'zh-CN': "社交的外交官型",
      'zh-TW': "社交的外交官型",
      id: "Tipe Diplomat Sosial",
      vi: "Kiểu Ngoại giao Xã hội"
    },
    description: {
      ko: "함께하면 더 행복하다",
      en: "Happier together",
      ja: "一緒にいるともっと幸せ",
      'zh-CN': "在一起更快乐",
      'zh-TW': "在一起更快樂",
      id: "Lebih bahagia bersama",
      vi: "Hạnh phúc hơn khi ở cùng nhau"
    },
    longDescription: {
      ko: "따뜻하고 협력적입니다. 다른 사람을 돕는 것을 좋아하고 조화를 중시합니다. 사교적이며 전통과 질서를 존중합니다.",
      en: "Warm and cooperative. Likes helping others and values harmony. Social and respects tradition and order.",
      ja: "温かく協力的です。他人を助けることを好み、調和を重視します。社交的で伝統と秩序を尊重します。",
      'zh-CN': "温暖合作。喜欢帮助他人，重视和谐。社交且尊重传统和秩序。",
      'zh-TW': "溫暖合作。喜歡幫助他人，重視和諧。社交且尊重傳統和秩序。",
      id: "Hangat dan kooperatif. Suka membantu orang lain dan menghargai harmoni. Sosial dan menghormati tradisi dan keteraturan.",
      vi: "Ấm áp và hợp tác. Thích giúp đỡ người khác và coi trọng sự hòa hợp. Xã hội và tôn trọng truyền thống và trật tự."
    },
    pros: [
      { ko: "친절함", en: "Kindness", ja: "親切さ", 'zh-CN': "善良", 'zh-TW': "善良", id: "Kebaikan", vi: "Tốt bụng" },
      { ko: "협력적", en: "Cooperative", ja: "協力的", 'zh-CN': "合作", 'zh-TW': "合作", id: "Kooperatif", vi: "Hợp tác" },
      { ko: "책임감", en: "Responsibility", ja: "責任感", 'zh-CN': "责任感", 'zh-TW': "責任感", id: "Tanggung jawab", vi: "Trách nhiệm" },
      { ko: "배려심", en: "Consideration", ja: "思いやり", 'zh-CN': "体贴", 'zh-TW': "體貼", id: "Pertimbangan", vi: "Chu đáo" }
    ],
    cons: [
      { ko: "비판에 민감", en: "Sensitive to criticism", ja: "批判に敏感", 'zh-CN': "对批评敏感", 'zh-TW': "對批評敏感", id: "Sensitif terhadap kritik", vi: "Nhạy cảm với chỉ trích" },
      { ko: "거절 못함", en: "Can't say no", ja: "断れない", 'zh-CN': "不会拒绝", 'zh-TW': "不會拒絕", id: "Tidak bisa menolak", vi: "Không biết từ chối" }
    ],
    advice: {
      ko: "때로는 자신의 필요를 우선시하고, 건강한 경계를 설정하는 것을 배워보세요.",
      en: "Sometimes prioritize your own needs and learn to set healthy boundaries.",
      ja: "時には自分のニーズを優先し、健康的な境界を設定することを学んでみてください。",
      'zh-CN': "有时优先考虑自己的需求，学会设定健康的界限。",
      'zh-TW': "有時優先考慮自己的需求，學會設定健康的界限。",
      id: "Kadang prioritaskan kebutuhan sendiri dan belajar menetapkan batasan yang sehat.",
      vi: "Đôi khi hãy ưu tiên nhu cầu của bản thân và học cách đặt ranh giới lành mạnh."
    },
    compatibility: {
      best: ["ISFP", "ISTP"],
      good: ["ESFP", "ESTP", "ISFJ", "ISTJ"],
      careful: ["INTP", "ENTP"],
      difficult: ["INTJ", "ENTJ"]
    },
    careers: [
      { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
      { ko: "간호사", en: "Nurse", ja: "看護師", 'zh-CN': "护士", 'zh-TW': "護士", id: "Perawat", vi: "Y tá" },
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "이벤트 기획", en: "Event Planner", ja: "イベント企画", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" },
      { ko: "HR", en: "HR", ja: "人事", 'zh-CN': "人力资源", 'zh-TW': "人力資源", id: "HR", vi: "Nhân sự" }
    ],
    dating: [
      { ko: "헌신적이고 배려 깊음", en: "Devoted and considerate", ja: "献身的で思いやり深い", 'zh-CN': "奉献且体贴", 'zh-TW': "奉獻且體貼", id: "Setia dan penuh pertimbangan", vi: "Tận tụy và chu đáo" },
      { ko: "기념일 중시", en: "Values anniversaries", ja: "記念日を重視", 'zh-CN': "重视纪念日", 'zh-TW': "重視紀念日", id: "Menghargai hari jadi", vi: "Coi trọng ngày kỷ niệm" }
    ],
    celebrities: [
      { ko: "테일러 스위프트", en: "Taylor Swift", ja: "テイラー・スウィフト", 'zh-CN': "泰勒·斯威夫特", 'zh-TW': "泰勒·斯威夫特", id: "Taylor Swift", vi: "Taylor Swift" },
      { ko: "제니퍼 로페즈", en: "Jennifer Lopez", ja: "ジェニファー・ロペス", 'zh-CN': "詹妮弗·洛佩兹", 'zh-TW': "詹妮弗·洛佩兹", id: "Jennifer Lopez", vi: "Jennifer Lopez" }
    ]
  },
  {
    type: "ESFP",
    emoji: "🎭",
    title: {
      ko: "자유로운 연예인형",
      en: "The Entertainer",
      ja: "自由な芸能人型",
      'zh-CN': "自由的艺人型",
      'zh-TW': "自由的藝人型",
      id: "Tipe Penghibur Bebas",
      vi: "Kiểu Nghệ sĩ Tự do"
    },
    description: {
      ko: "인생은 파티다!",
      en: "Life is a party!",
      ja: "人生はパーティー！",
      'zh-CN': "人生就是派对！",
      'zh-TW': "人生就是派對！",
      id: "Hidup adalah pesta!",
      vi: "Cuộc sống là bữa tiệc!"
    },
    longDescription: {
      ko: "사교적이고 즉흥적입니다. 사람들과 어울리는 것을 좋아하고 분위기 메이커입니다. 현재를 즐기며 낙천적입니다.",
      en: "Social and spontaneous. Likes being with people and is a mood maker. Enjoys the present and is optimistic.",
      ja: "社交的で即興的です。人と一緒にいることを好み、ムードメーカーです。現在を楽しみ、楽観的です。",
      'zh-CN': "社交且即兴。喜欢与人相处，是气氛制造者。享受现在，乐观。",
      'zh-TW': "社交且即興。喜歡與人相處，是氣氛製造者。享受現在，樂觀。",
      id: "Sosial dan spontan. Suka bersama orang dan pembuat suasana. Menikmati saat ini dan optimis.",
      vi: "Xã hội và tự phát. Thích ở cùng mọi người và là người tạo không khí. Tận hưởng hiện tại và lạc quan."
    },
    pros: [
      { ko: "친화력", en: "Affability", ja: "親和力", 'zh-CN': "亲和力", 'zh-TW': "親和力", id: "Keramahan", vi: "Thân thiện" },
      { ko: "즉흥성", en: "Spontaneity", ja: "即興性", 'zh-CN': "即兴性", 'zh-TW': "即興性", id: "Spontanitas", vi: "Tự phát" },
      { ko: "긍정적", en: "Positive", ja: "積極的", 'zh-CN': "积极", 'zh-TW': "積極", id: "Positif", vi: "Tích cực" },
      { ko: "재미", en: "Fun", ja: "面白さ", 'zh-CN': "有趣", 'zh-TW': "有趣", id: "Menyenangkan", vi: "Vui vẻ" }
    ],
    cons: [
      { ko: "계획성 부족", en: "Lack of planning", ja: "計画性の欠如", 'zh-CN': "缺乏计划性", 'zh-TW': "缺乏計劃性", id: "Kurang perencanaan", vi: "Thiếu tính kế hoạch" },
      { ko: "집중력 약함", en: "Weak concentration", ja: "集中力が弱い", 'zh-CN': "注意力弱", 'zh-TW': "注意力弱", id: "Konsentrasi lemah", vi: "Khả năng tập trung yếu" }
    ],
    advice: {
      ko: "장기적인 목표를 설정하고 중요한 일에 집중하는 연습을 해보세요.",
      en: "Practice setting long-term goals and focusing on important tasks.",
      ja: "長期的な目標を設定し、重要なことに集中する練習をしてみてください。",
      'zh-CN': "练习设定长期目标并专注于重要任务。",
      'zh-TW': "練習設定長期目標並專注於重要任務。",
      id: "Berlatih menetapkan tujuan jangka panjang dan fokus pada hal penting.",
      vi: "Hãy luyện tập đặt mục tiêu dài hạn và tập trung vào những việc quan trọng."
    },
    compatibility: {
      best: ["ISFJ", "ISTJ"],
      good: ["ESFJ", "ESTJ", "ISFP", "ISTP"],
      careful: ["INTJ", "ENTJ"],
      difficult: ["INFP", "ENFP"]
    },
    careers: [
      { ko: "연예인", en: "Entertainer", ja: "芸能人", 'zh-CN': "艺人", 'zh-TW': "藝人", id: "Penghibur", vi: "Nghệ sĩ" },
      { ko: "이벤트 기획자", en: "Event Planner", ja: "イベントプランナー", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" },
      { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", id: "Desainer", vi: "Nhà thiết kế" },
      { ko: "서비스업", en: "Service Industry", ja: "サービス業", 'zh-CN': "服务业", 'zh-TW': "服務業", id: "Industri Layanan", vi: "Ngành dịch vụ" },
      { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "行銷人員", id: "Pemasar", vi: "Nhà tiếp thị" }
    ],
    dating: [
      { ko: "열정적이고 로맨틱", en: "Passionate and romantic", ja: "情熱的でロマンチック", 'zh-CN': "热情浪漫", 'zh-TW': "熱情浪漫", id: "Penuh gairah dan romantis", vi: "Đam mê và lãng mạn" },
      { ko: "서프라이즈 이벤트 좋아함", en: "Likes surprise events", ja: "サプライズイベントが好き", 'zh-CN': "喜欢惊喜活动", 'zh-TW': "喜歡驚喜活動", id: "Suka acara kejutan", vi: "Thích sự kiện bất ngờ" }
    ],
    celebrities: [
      { ko: "마릴린 먼로", en: "Marilyn Monroe", ja: "マリリン・モンロー", 'zh-CN': "玛丽莲·梦露", 'zh-TW': "瑪麗蓮·夢露", id: "Marilyn Monroe", vi: "Marilyn Monroe" },
      { ko: "엘튼 존", en: "Elton John", ja: "エルトン・ジョン", 'zh-CN': "艾尔顿·约翰", 'zh-TW': "艾爾頓·約翰", id: "Elton John", vi: "Elton John" }
    ]
  },
  // 나머지 12개 MBTI 결과 (간단 버전)
  {
    type: "ENTJ",
    emoji: "👑",
    title: { ko: "대담한 통솔자형", en: "The Commander", ja: "大胆な統率者型", 'zh-CN': "大胆的指挥官型", 'zh-TW': "大膽的指揮官型", id: "Tipe Komandan Berani", vi: "Kiểu Chỉ huy Dũng cảm" },
    description: { ko: "효율적으로, 전략적으로", en: "Efficiently, strategically", ja: "効率的に、戦略的に", 'zh-CN': "高效地，战略性地", 'zh-TW': "高效地，戰略性地", id: "Efisien, strategis", vi: "Hiệu quả, chiến lược" },
    longDescription: { ko: "리더십이 강하고 목표 지향적입니다. 큰 그림을 보며 전략적으로 사고합니다. 결단력 있고 추진력이 뛰어납니다.", en: "Strong leadership and goal-oriented. Thinks strategically with big picture. Decisive and has excellent drive.", ja: "リーダーシップが強く目標志向です。大きな絵を見て戦略的に思考します。決断力があり推進力が優れています。", 'zh-CN': "领导力强，目标导向。战略思维，看大局。果断，推动力强。", 'zh-TW': "領導力強，目標導向。戰略思維，看大局。果斷，推動力強。", id: "Kepemimpinan kuat dan berorientasi tujuan. Berpikir strategis dengan gambaran besar. Tegas dan memiliki dorongan yang luar biasa.", vi: "Lãnh đạo mạnh mẽ và định hướng mục tiêu. Suy nghĩ chiến lược với tầm nhìn lớn. Quyết đoán và có động lực xuất sắc." },
    pros: [{ ko: "리더십", en: "Leadership", ja: "リーダーシップ", 'zh-CN': "领导力", 'zh-TW': "領導力", id: "Kepemimpinan", vi: "Lãnh đạo" }, { ko: "전략적 사고", en: "Strategic thinking", ja: "戦略的思考", 'zh-CN': "战略思维", 'zh-TW': "戰略思維", id: "Pemikiran strategis", vi: "Tư duy chiến lược" }, { ko: "결단력", en: "Decisiveness", ja: "決断力", 'zh-CN': "果断", 'zh-TW': "果斷", id: "Ketegasan", vi: "Quyết đoán" }, { ko: "효율성", en: "Efficiency", ja: "効率性", 'zh-CN': "效率", 'zh-TW': "效率", id: "Efisiensi", vi: "Hiệu quả" }],
    cons: [{ ko: "독단적", en: "Authoritarian", ja: "独断的", 'zh-CN': "独断", 'zh-TW': "獨斷", id: "Otoriter", vi: "Độc đoán" }, { ko: "감정 고려 부족", en: "Lack of emotional consideration", ja: "感情考慮不足", 'zh-CN': "缺乏情感考虑", 'zh-TW': "缺乏情感考慮", id: "Kurang pertimbangan emosional", vi: "Thiếu cân nhắc cảm xúc" }],
    advice: { ko: "다른 사람의 감정을 더 고려하고, 팀원들의 의견을 경청하는 자세를 가져보세요.", en: "Consider others' emotions more and develop a listening attitude toward team members' opinions.", ja: "他の人の感情をもっと考慮し、チームメンバーの意見を傾聴する姿勢を持ってみてください。", 'zh-CN': "更多考虑他人的情感，培养倾听团队成员意见的态度。", 'zh-TW': "更多考慮他人的情感，培養傾聽團隊成員意見的態度。", id: "Pertimbangkan emosi orang lain lebih banyak dan kembangkan sikap mendengarkan pendapat anggota tim.", vi: "Hãy cân nhắc cảm xúc của người khác nhiều hơn và phát triển thái độ lắng nghe ý kiến của thành viên nhóm." },
    compatibility: { best: ["INFP", "INTP"], good: ["ENFP", "ENTP", "ISFP", "ISFJ"], careful: ["ISFP", "ESFP"], difficult: ["ISFJ", "ESFJ"] },
    careers: [
      { ko: "CEO", en: "CEO", ja: "CEO", 'zh-CN': "首席执行官", 'zh-TW': "首席執行官", id: "CEO", vi: "CEO" },
      { ko: "경영자", en: "Manager", ja: "経営者", 'zh-CN': "管理者", 'zh-TW': "管理者", id: "Manajer", vi: "Quản lý" },
      { ko: "변호사", en: "Lawyer", ja: "弁護士", 'zh-CN': "律师", 'zh-TW': "律師", id: "Pengacara", vi: "Luật sư" },
      { ko: "정치인", en: "Politician", ja: "政治家", 'zh-CN': "政治家", 'zh-TW': "政治家", id: "Politisi", vi: "Chính trị gia" },
      { ko: "투자자", en: "Investor", ja: "投資家", 'zh-CN': "投资者", 'zh-TW': "投資者", id: "Investor", vi: "Nhà đầu tư" }
    ],
    dating: [
      { ko: "리더십 있고 결단력 있음", en: "Leadership and decisiveness", ja: "リーダーシップがあり決断力がある", 'zh-CN': "有领导力和决断力", 'zh-TW': "有領導力和決斷力", id: "Kepemimpinan dan ketegasan", vi: "Lãnh đạo và quyết đoán" },
      { ko: "목표 지향적", en: "Goal-oriented", ja: "目標志向", 'zh-CN': "目标导向", 'zh-TW': "目標導向", id: "Berorientasi tujuan", vi: "Định hướng mục tiêu" }
    ],
    celebrities: [
      { ko: "스티브 잡스", en: "Steve Jobs", ja: "スティーブ・ジョブズ", 'zh-CN': "史蒂夫·乔布斯", 'zh-TW': "史蒂夫·喬布斯", id: "Steve Jobs", vi: "Steve Jobs" },
      { ko: "일론 머스크", en: "Elon Musk", ja: "イーロン・マスク", 'zh-CN': "埃隆·马斯克", 'zh-TW': "埃隆·馬斯克", id: "Elon Musk", vi: "Elon Musk" }
    ]
  },
  {
    type: "ENTP",
    emoji: "💡",
    title: { ko: "논쟁을 즐기는 발명가형", en: "The Debater", ja: "議論を楽しむ発明家型", 'zh-CN': "喜欢辩论的发明家型", 'zh-TW': "喜歡辯論的發明家型", id: "Tipe Penemu yang Suka Debat", vi: "Kiểu Nhà phát minh Thích tranh luận" },
    description: { ko: "모든 것에 의문을 가져라", en: "Question everything", ja: "すべてに疑問を持て", 'zh-CN': "质疑一切", 'zh-TW': "質疑一切", id: "Pertanyakan segalanya", vi: "Đặt câu hỏi về mọi thứ" },
    longDescription: { ko: "창의적이고 논리적입니다. 토론을 즐기고 새로운 아이디어를 탐구합니다. 기발하고 도전적이며 틀을 깨는 것을 좋아합니다.", en: "Creative and logical. Enjoys debates and explores new ideas. Ingenious, challenging, and likes breaking conventions.", ja: "創造的で論理的です。議論を楽しみ、新しいアイデアを探求します。独創的で挑戦的、型を破ることを好みます。", 'zh-CN': "创造性且逻辑。喜欢辩论，探索新想法。机智，挑战性，喜欢打破常规。", 'zh-TW': "創造性且邏輯。喜歡辯論，探索新想法。機智，挑戰性，喜歡打破常規。", id: "Kreatif dan logis. Menikmati debat dan mengeksplorasi ide baru. Cerdik, menantang, dan suka memecahkan konvensi.", vi: "Sáng tạo và logic. Thích tranh luận và khám phá ý tưởng mới. Thông minh, thách thức và thích phá vỡ quy ước." },
    pros: [{ ko: "창의성", en: "Creativity", ja: "創造性", 'zh-CN': "创造力", 'zh-TW': "創造力", id: "Kreativitas", vi: "Sáng tạo" }, { ko: "논리력", en: "Logic", ja: "論理力", 'zh-CN': "逻辑力", 'zh-TW': "邏輯力", id: "Logika", vi: "Logic" }, { ko: "유연성", en: "Flexibility", ja: "柔軟性", 'zh-CN': "灵活性", 'zh-TW': "靈活性", id: "Fleksibilitas", vi: "Linh hoạt" }, { ko: "도전정신", en: "Challenge spirit", ja: "挑戦精神", 'zh-CN': "挑战精神", 'zh-TW': "挑戰精神", id: "Semangat tantangan", vi: "Tinh thần thách thức" }],
    cons: [{ ko: "실행력 부족", en: "Lack of execution", ja: "実行力不足", 'zh-CN': "缺乏执行力", 'zh-TW': "缺乏執行力", id: "Kurang eksekusi", vi: "Thiếu khả năng thực hiện" }, { ko: "루틴 싫어함", en: "Dislikes routine", ja: "ルーチンを嫌う", 'zh-CN': "讨厌例行公事", 'zh-TW': "討厭例行公事", id: "Tidak suka rutinitas", vi: "Không thích thói quen" }],
    advice: { ko: "아이디어를 실행으로 옮기는 연습을 하고, 세부사항에도 관심을 기울여보세요.", en: "Practice turning ideas into action and pay attention to details.", ja: "アイデアを実行に移す練習をし、細部にも関心を向けてみてください。", 'zh-CN': "练习将想法转化为行动，关注细节。", 'zh-TW': "練習將想法轉化為行動，關注細節。", id: "Berlatih mengubah ide menjadi aksi dan perhatikan detail.", vi: "Hãy luyện tập biến ý tưởng thành hành động và chú ý đến chi tiết." },
    compatibility: { best: ["INFJ", "INTJ"], good: ["ENFJ", "ENTJ", "INFP", "ISFP"], careful: ["ISFJ", "ESFJ"], difficult: ["ISTJ", "ESTJ"] },
    careers: [
      { ko: "발명가", en: "Inventor", ja: "発明家", 'zh-CN': "发明家", 'zh-TW': "發明家", id: "Penemu", vi: "Nhà phát minh" },
      { ko: "기업가", en: "Entrepreneur", ja: "起業家", 'zh-CN': "企业家", 'zh-TW': "企業家", id: "Pengusaha", vi: "Doanh nhân" },
      { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", id: "Peneliti", vi: "Nhà nghiên cứu" },
      { ko: "저널리스트", en: "Journalist", ja: "ジャーナリスト", 'zh-CN': "记者", 'zh-TW': "記者", id: "Jurnalis", vi: "Nhà báo" },
      { ko: "컨설턴트", en: "Consultant", ja: "コンサルタント", 'zh-CN': "顾问", 'zh-TW': "顧問", id: "Konsultan", vi: "Tư vấn viên" }
    ],
    dating: [
      { ko: "창의적이고 도전적", en: "Creative and challenging", ja: "創造的で挑戦的", 'zh-CN': "创造性且挑战性", 'zh-TW': "創造性且挑戰性", id: "Kreatif dan menantang", vi: "Sáng tạo và thách thức" },
      { ko: "토론을 즐김", en: "Enjoys debates", ja: "議論を楽しむ", 'zh-CN': "喜欢辩论", 'zh-TW': "喜歡辯論", id: "Menikmati debat", vi: "Thích tranh luận" }
    ],
    celebrities: [
      { ko: "토마스 에디슨", en: "Thomas Edison", ja: "トーマス・エジソン", 'zh-CN': "托马斯·爱迪生", 'zh-TW': "托馬斯·愛迪生", id: "Thomas Edison", vi: "Thomas Edison" },
      { ko: "마크 트웨인", en: "Mark Twain", ja: "マーク・トウェイン", 'zh-CN': "马克·吐温", 'zh-TW': "馬克·吐溫", id: "Mark Twain", vi: "Mark Twain" }
    ]
  },
  {
    type: "ENFJ",
    emoji: "🌟",
    title: { ko: "정의로운 사회운동가형", en: "The Protagonist", ja: "正義感のある社会運動家型", 'zh-CN': "正义的社会活动家型", 'zh-TW': "正義的社會活動家型", id: "Tipe Aktivis Sosial yang Adil", vi: "Kiểu Nhà hoạt động xã hội Công bằng" },
    description: { ko: "사람들에게 영감을 주고 싶다", en: "Want to inspire people", ja: "人々にインスピレーションを与えたい", 'zh-CN': "想给人们灵感", 'zh-TW': "想給人們靈感", id: "Ingin menginspirasi orang", vi: "Muốn truyền cảm hứng cho mọi người" },
    longDescription: { ko: "카리스마 있고 공감 능력이 뛰어납니다. 다른 사람의 성장을 돕고 조화를 추구합니다. 이상주의적이며 설득력이 있습니다.", en: "Charismatic with excellent empathy. Helps others grow and pursues harmony. Idealistic and persuasive.", ja: "カリスマがあり共感能力が優れています。他人の成長を助け調和を追求します。理想主義的で説得力があります。", 'zh-CN': "有魅力，共情能力强。帮助他人成长，追求和谐。理想主义，有说服力。", 'zh-TW': "有魅力，共情能力強。幫助他人成長，追求和諧。理想主義，有說服力。", id: "Berkarisma dengan empati yang luar biasa. Membantu orang lain tumbuh dan mengejar harmoni. Idealistis dan persuasif.", vi: "Có sức hút và khả năng đồng cảm xuất sắc. Giúp người khác phát triển và theo đuổi sự hòa hợp. Lý tưởng và thuyết phục." },
    pros: [{ ko: "카리스마", en: "Charisma", ja: "カリスマ", 'zh-CN': "魅力", 'zh-TW': "魅力", id: "Kharisma", vi: "Sức hút" }, { ko: "공감능력", en: "Empathy", ja: "共感能力", 'zh-CN': "共情能力", 'zh-TW': "共情能力", id: "Empati", vi: "Khả năng đồng cảm" }, { ko: "소통력", en: "Communication", ja: "コミュニケーション力", 'zh-CN': "沟通能力", 'zh-TW': "溝通能力", id: "Komunikasi", vi: "Khả năng giao tiếp" }, { ko: "이타심", en: "Altruism", ja: "利他心", 'zh-CN': "利他主义", 'zh-TW': "利他主義", id: "Altruisme", vi: "Chủ nghĩa vị tha" }],
    cons: [{ ko: "자신 돌보기 소홀", en: "Neglects self-care", ja: "自分を大切にしない", 'zh-CN': "忽视自我照顾", 'zh-TW': "忽視自我照顧", id: "Mengabaikan perawatan diri", vi: "Bỏ bê chăm sóc bản thân" }, { ko: "거절 못함", en: "Can't say no", ja: "断れない", 'zh-CN': "不会拒绝", 'zh-TW': "不會拒絕", id: "Tidak bisa menolak", vi: "Không biết từ chối" }],
    advice: { ko: "자신의 필요도 중요하다는 것을 기억하고, 건강한 경계를 설정하는 방법을 배워보세요.", en: "Remember that your own needs are also important and learn to set healthy boundaries.", ja: "自分のニーズも重要であることを覚え、健康的な境界を設定する方法を学んでみてください。", 'zh-CN': "记住自己的需求也很重要，学会设定健康的界限。", 'zh-TW': "記住自己的需求也很重要，學會設定健康的界限。", id: "Ingat bahwa kebutuhan sendiri juga penting dan belajar menetapkan batasan yang sehat.", vi: "Hãy nhớ rằng nhu cầu của bản thân cũng quan trọng và học cách đặt ranh giới lành mạnh." },
    compatibility: { best: ["INFP", "ISFP"], good: ["ENFP", "ENTP", "INFJ", "INTJ"], careful: ["ISTP", "ESTP"], difficult: ["ISTJ", "ESTJ"] },
    careers: [
      { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "HR", en: "HR", ja: "人事", 'zh-CN': "人力资源", 'zh-TW': "人力資源", id: "HR", vi: "Nhân sự" },
      { ko: "사회복지사", en: "Social Worker", ja: "ソーシャルワーカー", 'zh-CN': "社会工作者", 'zh-TW': "社會工作者", id: "Pekerja Sosial", vi: "Công nhân xã hội" },
      { ko: "코치", en: "Coach", ja: "コーチ", 'zh-CN': "教练", 'zh-TW': "教練", id: "Pelatih", vi: "Huấn luyện viên" }
    ],
    dating: [
      { ko: "영감을 주고 동기부여", en: "Inspires and motivates", ja: "インスピレーションを与え動機づけ", 'zh-CN': "给予灵感和激励", 'zh-TW': "給予靈感和激勵", id: "Menginspirasi dan memotivasi", vi: "Truyền cảm hứng và động lực" },
      { ko: "이상주의적", en: "Idealistic", ja: "理想主義的", 'zh-CN': "理想主义", 'zh-TW': "理想主義", id: "Idealistis", vi: "Lý tưởng" }
    ],
    celebrities: [
      { ko: "오프라 윈프리", en: "Oprah Winfrey", ja: "オプラ・ウィンフリー", 'zh-CN': "奥普拉·温弗瑞", 'zh-TW': "奧普拉·溫弗瑞", id: "Oprah Winfrey", vi: "Oprah Winfrey" },
      { ko: "마틴 루터 킹", en: "Martin Luther King", ja: "マーティン・ルーサー・キング", 'zh-CN': "马丁·路德·金", 'zh-TW': "馬丁·路德·金", id: "Martin Luther King", vi: "Martin Luther King" }
    ]
  },
  {
    type: "ENFP",
    emoji: "🦋",
    title: { ko: "재기발랄한 활동가형", en: "The Campaigner", ja: "活発な活動家型", 'zh-CN': "活泼的活动家型", 'zh-TW': "活潑的活動家型", id: "Tipe Aktivis yang Bersemangat", vi: "Kiểu Nhà hoạt động Sôi nổi" },
    description: { ko: "가능성은 무한하다!", en: "Possibilities are infinite!", ja: "可能性は無限大！", 'zh-CN': "可能性是无限的！", 'zh-TW': "可能性是無限的！", id: "Kemungkinan tidak terbatas!", vi: "Khả năng là vô hạn!" },
    longDescription: { ko: "열정적이고 창의적입니다. 사람들과 교류하며 새로운 경험을 추구합니다. 자유로운 영혼이며 긍정적입니다.", en: "Passionate and creative. Interacts with people and pursues new experiences. Free spirit and positive.", ja: "情熱的で創造的です。人と交流し新しい経験を追求します。自由な魂で積極的です。", 'zh-CN': "热情且创造性。与人交流，追求新体验。自由灵魂，积极。", 'zh-TW': "熱情且創造性。與人交流，追求新體驗。自由靈魂，積極。", id: "Bersemangat dan kreatif. Berinteraksi dengan orang dan mengejar pengalaman baru. Jiwa bebas dan positif.", vi: "Nhiệt tình và sáng tạo. Giao lưu với mọi người và theo đuổi trải nghiệm mới. Tâm hồn tự do và tích cực." },
    pros: [{ ko: "열정", en: "Passion", ja: "情熱", 'zh-CN': "热情", 'zh-TW': "熱情", id: "Gairah", vi: "Nhiệt tình" }, { ko: "창의성", en: "Creativity", ja: "創造性", 'zh-CN': "创造力", 'zh-TW': "創造力", id: "Kreativitas", vi: "Sáng tạo" }, { ko: "친화력", en: "Affability", ja: "親和力", 'zh-CN': "亲和力", 'zh-TW': "親和力", id: "Keramahan", vi: "Thân thiện" }, { ko: "낙관적", en: "Optimistic", ja: "楽観的", 'zh-CN': "乐观", 'zh-TW': "樂觀", id: "Optimis", vi: "Lạc quan" }],
    cons: [{ ko: "집중력 부족", en: "Lack of focus", ja: "集中力不足", 'zh-CN': "注意力不足", 'zh-TW': "注意力不足", id: "Kurang fokus", vi: "Thiếu tập trung" }, { ko: "계획성 약함", en: "Weak planning", ja: "計画性が弱い", 'zh-CN': "计划性弱", 'zh-TW': "計劃性弱", id: "Perencanaan lemah", vi: "Tính kế hoạch yếu" }],
    advice: { ko: "장기적인 목표를 설정하고 중요한 일에 집중하는 연습을 해보세요.", en: "Practice setting long-term goals and focusing on important tasks.", ja: "長期的な目標を設定し、重要なことに集中する練習をしてみてください。", 'zh-CN': "练习设定长期目标并专注于重要任务。", 'zh-TW': "練習設定長期目標並專注於重要任務。", id: "Berlatih menetapkan tujuan jangka panjang dan fokus pada hal penting.", vi: "Hãy luyện tập đặt mục tiêu dài hạn và tập trung vào những việc quan trọng." },
    compatibility: { best: ["INFJ", "INTJ"], good: ["ENFJ", "ENTJ", "INFP", "ISFP"], careful: ["ISTJ", "ESTJ"], difficult: ["ISTP", "ESTP"] },
    careers: [
      { ko: "아티스트", en: "Artist", ja: "アーティスト", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
      { ko: "연예인", en: "Entertainer", ja: "芸能人", 'zh-CN': "艺人", 'zh-TW': "藝人", id: "Penghibur", vi: "Nghệ sĩ" },
      { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "行銷人員", id: "Pemasar", vi: "Nhà tiếp thị" },
      { ko: "이벤트 기획자", en: "Event Planner", ja: "イベントプランナー", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" }
    ],
    dating: [
      { ko: "열정적이고 창의적", en: "Passionate and creative", ja: "情熱的で創造的", 'zh-CN': "热情且创造性", 'zh-TW': "熱情且創造性", id: "Bersemangat dan kreatif", vi: "Nhiệt tình và sáng tạo" },
      { ko: "자유로운 영혼", en: "Free spirit", ja: "自由な魂", 'zh-CN': "自由灵魂", 'zh-TW': "自由靈魂", id: "Jiwa bebas", vi: "Tâm hồn tự do" }
    ],
    celebrities: [
      { ko: "로빈 윌리엄스", en: "Robin Williams", ja: "ロビン・ウィリアムズ", 'zh-CN': "罗宾·威廉姆斯", 'zh-TW': "羅賓·威廉姆斯", id: "Robin Williams", vi: "Robin Williams" },
      { ko: "윌 스미스", en: "Will Smith", ja: "ウィル・スミス", 'zh-CN': "威尔·史密斯", 'zh-TW': "威爾·史密斯", id: "Will Smith", vi: "Will Smith" }
    ]
  },
  {
    type: "ISTJ",
    emoji: "📊",
    title: { ko: "세상의 소금형", en: "The Logistician", ja: "世の中の塩型", 'zh-CN': "世界的盐型", 'zh-TW': "世界的鹽型", id: "Tipe Garam Dunia", vi: "Kiểu Muối của Thế giới" },
    description: { ko: "원칙과 책임을 지킨다", en: "Upholds principles and responsibility", ja: "原則と責任を守る", 'zh-CN': "坚持原则和责任", 'zh-TW': "堅持原則和責任", id: "Menegakkan prinsip dan tanggung jawab", vi: "Tuân thủ nguyên tắc và trách nhiệm" },
    longDescription: { ko: "신뢰할 수 있고 책임감이 강합니다. 체계적이며 전통을 존중합니다. 실용적이고 논리적으로 문제를 해결합니다.", en: "Trustworthy and strong sense of responsibility. Systematic and respects tradition. Practical and solves problems logically.", ja: "信頼でき責任感が強いです。体系的で伝統を尊重します。実用的で論理的に問題を解決します。", 'zh-CN': "值得信赖，责任感强。系统性，尊重传统。实用，逻辑解决问题。", 'zh-TW': "值得信賴，責任感強。系統性，尊重傳統。實用，邏輯解決問題。", id: "Dapat dipercaya dan rasa tanggung jawab yang kuat. Sistematis dan menghormati tradisi. Praktis dan menyelesaikan masalah secara logis.", vi: "Đáng tin cậy và có ý thức trách nhiệm mạnh mẽ. Có hệ thống và tôn trọng truyền thống. Thực tế và giải quyết vấn đề một cách logic." },
    pros: [{ ko: "책임감", en: "Responsibility", ja: "責任感", 'zh-CN': "责任感", 'zh-TW': "責任感", id: "Tanggung jawab", vi: "Trách nhiệm" }, { ko: "신뢰성", en: "Reliability", ja: "信頼性", 'zh-CN': "可靠性", 'zh-TW': "可靠性", id: "Keandalan", vi: "Đáng tin cậy" }, { ko: "체계성", en: "Systematic", ja: "体系性", 'zh-CN': "系统性", 'zh-TW': "系統性", id: "Sistematis", vi: "Có hệ thống" }, { ko: "실용성", en: "Practicality", ja: "実用性", 'zh-CN': "实用性", 'zh-TW': "實用性", id: "Praktis", vi: "Thực tế" }],
    cons: [{ ko: "융통성 부족", en: "Lack of flexibility", ja: "柔軟性の欠如", 'zh-CN': "缺乏灵活性", 'zh-TW': "缺乏靈活性", id: "Kurang fleksibilitas", vi: "Thiếu linh hoạt" }, { ko: "변화 적응 어려움", en: "Difficulty adapting to change", ja: "変化適応の困難", 'zh-CN': "难以适应变化", 'zh-TW': "難以適應變化", id: "Kesulitan beradaptasi dengan perubahan", vi: "Khó khăn thích nghi với thay đổi" }],
    advice: { ko: "때로는 새로운 것에 도전하고, 변화를 받아들이는 자세를 가져보세요.", en: "Sometimes challenge yourself with new things and develop an attitude of accepting change.", ja: "時には新しいことに挑戦し、変化を受け入れる姿勢を持ってみてください。", 'zh-CN': "有时挑战新事物，培养接受变化的态度。", 'zh-TW': "有時挑戰新事物，培養接受變化的態度。", id: "Kadang tantang diri dengan hal baru dan kembangkan sikap menerima perubahan.", vi: "Đôi khi hãy thử thách bản thân với những điều mới và phát triển thái độ chấp nhận thay đổi." },
    compatibility: { best: ["ESFP", "ESTP"], good: ["ISFP", "ISTP", "ESFJ", "ESTJ"], careful: ["ENFP", "ENTP"], difficult: ["INFP", "INTP"] },
    careers: [
      { ko: "회계사", en: "Accountant", ja: "会計士", 'zh-CN': "会计师", 'zh-TW': "會計師", id: "Akuntan", vi: "Kế toán" },
      { ko: "공무원", en: "Civil Servant", ja: "公務員", 'zh-CN': "公务员", 'zh-TW': "公務員", id: "Pegawai Negeri", vi: "Công chức" },
      { ko: "법무사", en: "Legal Assistant", ja: "法務士", 'zh-CN': "法务助理", 'zh-TW': "法務助理", id: "Asisten Hukum", vi: "Trợ lý pháp lý" },
      { ko: "의사", en: "Doctor", ja: "医師", 'zh-CN': "医生", 'zh-TW': "醫生", id: "Dokter", vi: "Bác sĩ" },
      { ko: "엔지니어", en: "Engineer", ja: "エンジニア", 'zh-CN': "工程师", 'zh-TW': "工程師", id: "Insinyur", vi: "Kỹ sư" }
    ],
    dating: [
      { ko: "신뢰할 수 있고 책임감 있음", en: "Trustworthy and responsible", ja: "信頼でき責任感がある", 'zh-CN': "值得信赖且有责任感", 'zh-TW': "值得信賴且有責任感", id: "Dapat dipercaya dan bertanggung jawab", vi: "Đáng tin cậy và có trách nhiệm" },
      { ko: "체계적이고 실용적", en: "Systematic and practical", ja: "体系的で実用的", 'zh-CN': "系统性且实用", 'zh-TW': "系統性且實用", id: "Sistematis dan praktis", vi: "Có hệ thống và thực tế" }
    ],
    celebrities: [
      { ko: "워렌 버핏", en: "Warren Buffett", ja: "ウォーレン・バフェット", 'zh-CN': "沃伦·巴菲特", 'zh-TW': "沃倫·巴菲特", id: "Warren Buffett", vi: "Warren Buffett" },
      { ko: "조지 워싱턴", en: "George Washington", ja: "ジョージ・ワシントン", 'zh-CN': "乔治·华盛顿", 'zh-TW': "喬治·華盛頓", id: "George Washington", vi: "George Washington" }
    ]
  },
  {
    type: "ISTP",
    emoji: "🔧",
    title: { ko: "만능 재주꾼형", en: "The Virtuoso", ja: "万能な器用型", 'zh-CN': "万能巧手型", 'zh-TW': "萬能巧手型", id: "Tipe Ahli Serbaguna", vi: "Kiểu Thợ thủ công Đa năng" },
    description: { ko: "직접 해보면 안다", en: "You know by doing it yourself", ja: "直接やってみればわかる", 'zh-CN': "直接做就知道了", 'zh-TW': "直接做就知道了", id: "Anda tahu dengan melakukannya sendiri", vi: "Bạn biết bằng cách tự làm" },
    longDescription: { ko: "실용적이고 논리적입니다. 손재주가 좋고 문제 해결 능력이 뛰어납니다. 독립적이며 자유를 추구합니다.", en: "Practical and logical. Good at handiwork and excellent problem-solving skills. Independent and pursues freedom.", ja: "実用的で論理的です。手先が器用で問題解決能力が優れています。独立的で自由を追求します。", 'zh-CN': "实用且逻辑。手巧，解决问题能力强。独立，追求自由。", 'zh-TW': "實用且邏輯。手巧，解決問題能力強。獨立，追求自由。", id: "Praktis dan logis. Terampil dan kemampuan memecahkan masalah yang luar biasa. Mandiri dan mengejar kebebasan.", vi: "Thực tế và logic. Khéo tay và khả năng giải quyết vấn đề xuất sắc. Độc lập và theo đuổi tự do." },
    pros: [{ ko: "문제해결력", en: "Problem-solving", ja: "問題解決力", 'zh-CN': "解决问题能力", 'zh-TW': "解決問題能力", id: "Pemecahan masalah", vi: "Giải quyết vấn đề" }, { ko: "실용성", en: "Practicality", ja: "実用性", 'zh-CN': "实用性", 'zh-TW': "實用性", id: "Praktis", vi: "Thực tế" }, { ko: "침착함", en: "Calmness", ja: "冷静さ", 'zh-CN': "冷静", 'zh-TW': "冷靜", id: "Ketenangan", vi: "Bình tĩnh" }, { ko: "유연성", en: "Flexibility", ja: "柔軟性", 'zh-CN': "灵活性", 'zh-TW': "靈活性", id: "Fleksibilitas", vi: "Linh hoạt" }],
    cons: [{ ko: "감정 표현 어려움", en: "Difficulty expressing emotions", ja: "感情表現の困難", 'zh-CN': "难以表达情感", 'zh-TW': "難以表達情感", id: "Kesulitan mengekspresikan emosi", vi: "Khó khăn trong việc thể hiện cảm xúc" }, { ko: "계획성 부족", en: "Lack of planning", ja: "計画性の欠如", 'zh-CN': "缺乏计划性", 'zh-TW': "缺乏計劃性", id: "Kurang perencanaan", vi: "Thiếu tính kế hoạch" }],
    advice: { ko: "다른 사람과의 감정적 교류를 늘리고, 장기적인 목표를 설정해보세요.", en: "Increase emotional interaction with others and set long-term goals.", ja: "他の人との感情的交流を増やし、長期的な目標を設定してみてください。", 'zh-CN': "增加与他人的情感交流，设定长期目标。", 'zh-TW': "增加與他人的情感交流，設定長期目標。", id: "Tingkatkan interaksi emosional dengan orang lain dan tetapkan tujuan jangka panjang.", vi: "Hãy tăng cường giao lưu tình cảm với người khác và đặt mục tiêu dài hạn." },
    compatibility: { best: ["ESFJ", "ESTJ"], good: ["ISFJ", "ISTJ", "ESFP", "ESTP"], careful: ["ENFJ", "ENTJ"], difficult: ["INFP", "ENFP"] },
    careers: [
      { ko: "기술자", en: "Technician", ja: "技術者", 'zh-CN': "技术员", 'zh-TW': "技術員", id: "Teknisi", vi: "Kỹ thuật viên" },
      { ko: "엔지니어", en: "Engineer", ja: "エンジニア", 'zh-CN': "工程师", 'zh-TW': "工程師", id: "Insinyur", vi: "Kỹ sư" },
      { ko: "의사", en: "Doctor", ja: "医師", 'zh-CN': "医生", 'zh-TW': "醫生", id: "Dokter", vi: "Bác sĩ" },
      { ko: "파일럿", en: "Pilot", ja: "パイロット", 'zh-CN': "飞行员", 'zh-TW': "飛行員", id: "Pilot", vi: "Phi công" },
      { ko: "요리사", en: "Chef", ja: "シェフ", 'zh-CN': "厨师", 'zh-TW': "廚師", id: "Koki", vi: "Đầu bếp" }
    ],
    dating: [
      { ko: "실용적이고 논리적", en: "Practical and logical", ja: "実用的で論理的", 'zh-CN': "实用且逻辑", 'zh-TW': "實用且邏輯", id: "Praktis dan logis", vi: "Thực tế và logic" },
      { ko: "독립적이고 자유로운", en: "Independent and free", ja: "独立的で自由な", 'zh-CN': "独立且自由", 'zh-TW': "獨立且自由", id: "Mandiri dan bebas", vi: "Độc lập và tự do" }
    ],
    celebrities: [
      { ko: "클린트 이스트우드", en: "Clint Eastwood", ja: "クリント・イーストウッド", 'zh-CN': "克林特·伊斯特伍德", 'zh-TW': "克林特·伊斯特伍德", id: "Clint Eastwood", vi: "Clint Eastwood" },
      { ko: "톰 크루즈", en: "Tom Cruise", ja: "トム・クルーズ", 'zh-CN': "汤姆·克鲁斯", 'zh-TW': "湯姆·克魯斯", id: "Tom Cruise", vi: "Tom Cruise" }
    ]
  },
  {
    type: "ISFJ",
    emoji: "🛡️",
    title: { ko: "용감한 수호자형", en: "The Protector", ja: "勇敢な守護者型", 'zh-CN': "勇敢的守护者型", 'zh-TW': "勇敢的守護者型", id: "Tipe Pelindung Berani", vi: "Kiểu Người bảo vệ Dũng cảm" },
    description: { ko: "사람을 지키는 것이 내 사명", en: "Protecting people is my mission", ja: "人を守ることが私の使命", 'zh-CN': "保护人是我的使命", 'zh-TW': "保護人是我的使命", id: "Melindungi orang adalah misi saya", vi: "Bảo vệ mọi người là sứ mệnh của tôi" },
    longDescription: { ko: "따뜻하고 헌신적입니다. 다른 사람을 돕는 것에 기쁨을 느끼며 책임감이 강합니다. 조용하지만 든든한 지원자입니다.", en: "Warm and devoted. Finds joy in helping others and has strong sense of responsibility. Quiet but reliable supporter.", ja: "温かく献身的です。他人を助けることに喜びを感じ、責任感が強いです。静かですが心強いサポーターです。", 'zh-CN': "温暖且奉献。在帮助他人中找到快乐，责任感强。安静但可靠的支持者。", 'zh-TW': "溫暖且奉獻。在幫助他人中找到快樂，責任感強。安靜但可靠的支持者。", id: "Hangat dan setia. Merasakan sukacita dalam membantu orang lain dan memiliki rasa tanggung jawab yang kuat. Pendukung yang tenang tapi dapat diandalkan.", vi: "Ấm áp và tận tụy. Tìm thấy niềm vui trong việc giúp đỡ người khác và có ý thức trách nhiệm mạnh mẽ. Người hỗ trợ im lặng nhưng đáng tin cậy." },
    pros: [{ ko: "헌신적", en: "Devoted", ja: "献身的", 'zh-CN': "奉献", 'zh-TW': "奉獻", id: "Setia", vi: "Tận tụy" }, { ko: "배려심", en: "Consideration", ja: "思いやり", 'zh-CN': "体贴", 'zh-TW': "體貼", id: "Pertimbangan", vi: "Chu đáo" }, { ko: "책임감", en: "Responsibility", ja: "責任感", 'zh-CN': "责任感", 'zh-TW': "責任感", id: "Tanggung jawab", vi: "Trách nhiệm" }, { ko: "성실함", en: "Sincerity", ja: "誠実さ", 'zh-CN': "诚实", 'zh-TW': "誠實", id: "Ketulusan", vi: "Chân thành" }],
    cons: [{ ko: "거절 못함", en: "Can't say no", ja: "断れない", 'zh-CN': "不会拒绝", 'zh-TW': "不會拒絕", id: "Tidak bisa menolak", vi: "Không biết từ chối" }, { ko: "자신 희생", en: "Self-sacrifice", ja: "自己犠牲", 'zh-CN': "自我牺牲", 'zh-TW': "自我犧牲", id: "Pengorbanan diri", vi: "Hy sinh bản thân" }],
    advice: { ko: "자신의 필요도 중요하다는 것을 기억하고, 건강한 경계를 설정하는 방법을 배워보세요.", en: "Remember that your own needs are also important and learn to set healthy boundaries.", ja: "自分のニーズも重要であることを覚え、健康的な境界を設定する方法を学んでみてください。", 'zh-CN': "记住自己的需求也很重要，学会设定健康的界限。", 'zh-TW': "記住自己的需求也很重要，學會設定健康的界限。", id: "Ingat bahwa kebutuhan sendiri juga penting dan belajar menetapkan batasan yang sehat.", vi: "Hãy nhớ rằng nhu cầu của bản thân cũng quan trọng và học cách đặt ranh giới lành mạnh." },
    compatibility: { best: ["ESFP", "ESTP"], good: ["ISFP", "ISTP", "ESFJ", "ESTJ"], careful: ["ENTP", "ENFP"], difficult: ["INTJ", "ENTJ"] },
    careers: [
      { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
      { ko: "간호사", en: "Nurse", ja: "看護師", 'zh-CN': "护士", 'zh-TW': "護士", id: "Perawat", vi: "Y tá" },
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "이벤트 기획", en: "Event Planner", ja: "イベント企画", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" },
      { ko: "HR", en: "HR", ja: "人事", 'zh-CN': "人力资源", 'zh-TW': "人力資源", id: "HR", vi: "Nhân sự" }
    ],
    dating: [
      { ko: "헌신적이고 배려 깊음", en: "Devoted and considerate", ja: "献身的で思いやり深い", 'zh-CN': "奉献且体贴", 'zh-TW': "奉獻且體貼", id: "Setia dan penuh pertimbangan", vi: "Tận tụy và chu đáo" },
      { ko: "기념일 중시", en: "Values anniversaries", ja: "記念日を重視", 'zh-CN': "重视纪念日", 'zh-TW': "重視紀念日", id: "Menghargai hari jadi", vi: "Coi trọng ngày kỷ niệm" }
    ],
    celebrities: [
      { ko: "테일러 스위프트", en: "Taylor Swift", ja: "テイラー・スウィフト", 'zh-CN': "泰勒·斯威夫特", 'zh-TW': "泰勒·斯威夫特", id: "Taylor Swift", vi: "Taylor Swift" },
      { ko: "제니퍼 로페즈", en: "Jennifer Lopez", ja: "ジェニファー・ロペス", 'zh-CN': "詹妮弗·洛佩兹", 'zh-TW': "詹妮弗·洛佩兹", id: "Jennifer Lopez", vi: "Jennifer Lopez" }
    ]
  },
  {
    type: "ISFP",
    emoji: "🎨",
    title: { ko: "호기심 많은 예술가형", en: "The Adventurer", ja: "好奇心旺盛な芸術家型", 'zh-CN': "好奇心强的艺术家型", 'zh-TW': "好奇心強的藝術家型", id: "Tipe Seniman yang Penasaran", vi: "Kiểu Nghệ sĩ Tò mò" },
    description: { ko: "나만의 방식으로 살아간다", en: "Live in my own way", ja: "自分のやり方で生きる", 'zh-CN': "以自己的方式生活", 'zh-TW': "以自己的方式生活", id: "Hidup dengan cara sendiri", vi: "Sống theo cách riêng của mình" },
    longDescription: { ko: "자유롭고 감성적입니다. 예술적 감각이 뛰어나고 현재를 즐깁니다. 조용하지만 개성이 강합니다.", en: "Free and emotional. Excellent artistic sense and enjoys the present. Quiet but strong personality.", ja: "自由で感情的です。芸術的センスが優れ、現在を楽しみます。静かですが個性が強いです。", 'zh-CN': "自由且感性。艺术感强，享受现在。安静但个性强。", 'zh-TW': "自由且感性。藝術感強，享受現在。安靜但個性強。", id: "Bebas dan emosional. Rasa artistik yang luar biasa dan menikmati saat ini. Tenang tapi kepribadian yang kuat.", vi: "Tự do và cảm xúc. Cảm giác nghệ thuật xuất sắc và tận hưởng hiện tại. Im lặng nhưng có cá tính mạnh mẽ." },
    pros: [{ ko: "예술성", en: "Artistry", ja: "芸術性", 'zh-CN': "艺术性", 'zh-TW': "藝術性", id: "Seni", vi: "Nghệ thuật" }, { ko: "유연성", en: "Flexibility", ja: "柔軟性", 'zh-CN': "灵活性", 'zh-TW': "靈活性", id: "Fleksibilitas", vi: "Linh hoạt" }, { ko: "친절함", en: "Kindness", ja: "親切さ", 'zh-CN': "善良", 'zh-TW': "善良", id: "Kebaikan", vi: "Tốt bụng" }, { ko: "개성", en: "Personality", ja: "個性", 'zh-CN': "个性", 'zh-TW': "個性", id: "Kepribadian", vi: "Cá tính" }],
    cons: [{ ko: "계획성 부족", en: "Lack of planning", ja: "計画性の欠如", 'zh-CN': "缺乏计划性", 'zh-TW': "缺乏計劃性", id: "Kurang perencanaan", vi: "Thiếu tính kế hoạch" }, { ko: "우유부단함", en: "Indecisiveness", ja: "優柔不断", 'zh-CN': "优柔寡断", 'zh-TW': "優柔寡斷", id: "Keragu-raguan", vi: "Do dự" }],
    advice: { ko: "장기적인 목표를 설정하고 결정을 내리는 연습을 해보세요.", en: "Practice setting long-term goals and making decisions.", ja: "長期的な目標を設定し、決定を下す練習をしてみてください。", 'zh-CN': "练习设定长期目标和做决定。", 'zh-TW': "練習設定長期目標和做決定。", id: "Berlatih menetapkan tujuan jangka panjang dan membuat keputusan.", vi: "Hãy luyện tập đặt mục tiêu dài hạn và đưa ra quyết định." },
    compatibility: { best: ["ESTJ", "ESFJ"], good: ["ISTJ", "ISFJ", "ESTP", "ESFP"], careful: ["ENTJ", "ENFJ"], difficult: ["INTJ", "INFJ"] },
    careers: [
      { ko: "아티스트", en: "Artist", ja: "アーティスト", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
      { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", id: "Desainer", vi: "Nhà thiết kế" },
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
      { ko: "음악가", en: "Musician", ja: "音楽家", 'zh-CN': "音乐家", 'zh-TW': "音樂家", id: "Musisi", vi: "Nhạc sĩ" },
      { ko: "사진작가", en: "Photographer", ja: "写真家", 'zh-CN': "摄影师", 'zh-TW': "攝影師", id: "Fotografer", vi: "Nhiếp ảnh gia" }
    ],
    dating: [
      { ko: "자유롭고 감성적", en: "Free and emotional", ja: "自由で感情的", 'zh-CN': "自由且感性", 'zh-TW': "自由且感性", id: "Bebas dan emosional", vi: "Tự do và cảm xúc" },
      { ko: "예술적 감각", en: "Artistic sense", ja: "芸術的センス", 'zh-CN': "艺术感", 'zh-TW': "藝術感", id: "Rasa artistik", vi: "Cảm giác nghệ thuật" }
    ],
    celebrities: [
      { ko: "프리다 칼로", en: "Frida Kahlo", ja: "フリーダ・カーロ", 'zh-CN': "弗里达·卡罗", 'zh-TW': "弗里達·卡羅", id: "Frida Kahlo", vi: "Frida Kahlo" },
      { ko: "밥 딜런", en: "Bob Dylan", ja: "ボブ・ディラン", 'zh-CN': "鲍勃·迪伦", 'zh-TW': "鮑勃·迪倫", id: "Bob Dylan", vi: "Bob Dylan" }
    ]
  },
  {
    type: "INTJ",
    emoji: "🧠",
    title: { ko: "용의주도한 전략가형", en: "The Architect", ja: "用意周到な戦略家型", 'zh-CN': "深谋远虑的战略家型", 'zh-TW': "深謀遠慮的戰略家型", id: "Tipe Strategis yang Cermat", vi: "Kiểu Chiến lược gia Cẩn thận" },
    description: { ko: "모든 것을 완벽하게 계획한다", en: "Plan everything perfectly", ja: "すべてを完璧に計画する", 'zh-CN': "完美计划一切", 'zh-TW': "完美計劃一切", id: "Rencanakan segalanya dengan sempurna", vi: "Lên kế hoạch mọi thứ một cách hoàn hảo" },
    longDescription: { ko: "독립적이고 전략적입니다. 장기적 비전을 가지고 논리적으로 접근합니다. 완벽주의적이며 혁신적입니다.", en: "Independent and strategic. Has long-term vision and approaches logically. Perfectionist and innovative.", ja: "独立的で戦略的です。長期的ビジョンを持ち論理的にアプローチします。完璧主義的で革新的です。", 'zh-CN': "独立且战略。有长期愿景，逻辑方法。完美主义，创新。", 'zh-TW': "獨立且戰略。有長期願景，邏輯方法。完美主義，創新。", id: "Mandiri dan strategis. Memiliki visi jangka panjang dan pendekatan logis. Perfeksionis dan inovatif.", vi: "Độc lập và chiến lược. Có tầm nhìn dài hạn và tiếp cận logic. Chủ nghĩa hoàn hảo và đổi mới." },
    pros: [{ ko: "전략적 사고", en: "Strategic thinking", ja: "戦略的思考", 'zh-CN': "战略思维", 'zh-TW': "戰略思維", id: "Pemikiran strategis", vi: "Tư duy chiến lược" }, { ko: "독립성", en: "Independence", ja: "独立性", 'zh-CN': "独立性", 'zh-TW': "獨立性", id: "Kemandirian", vi: "Độc lập" }, { ko: "통찰력", en: "Insight", ja: "洞察力", 'zh-CN': "洞察力", 'zh-TW': "洞察力", id: "Wawasan", vi: "Sự sáng suốt" }, { ko: "완벽주의", en: "Perfectionism", ja: "完璧主義", 'zh-CN': "完美主义", 'zh-TW': "完美主義", id: "Perfeksionisme", vi: "Chủ nghĩa hoàn hảo" }],
    cons: [{ ko: "감정 표현 어려움", en: "Difficulty expressing emotions", ja: "感情表現の困難", 'zh-CN': "难以表达情感", 'zh-TW': "難以表達情感", id: "Kesulitan mengekspresikan emosi", vi: "Khó khăn trong việc thể hiện cảm xúc" }, { ko: "독단적", en: "Authoritarian", ja: "独断的", 'zh-CN': "独断", 'zh-TW': "獨斷", id: "Otoriter", vi: "Độc đoán" }],
    advice: { ko: "다른 사람의 감정을 더 고려하고, 팀워크의 중요성을 인식해보세요.", en: "Consider others' emotions more and recognize the importance of teamwork.", ja: "他の人の感情をもっと考慮し、チームワークの重要性を認識してみてください。", 'zh-CN': "更多考虑他人的情感，认识团队合作的重要性。", 'zh-TW': "更多考慮他人的情感，認識團隊合作的重要性。", id: "Pertimbangkan emosi orang lain lebih banyak dan kenali pentingnya kerja tim.", vi: "Hãy cân nhắc cảm xúc của người khác nhiều hơn và nhận ra tầm quan trọng của làm việc nhóm." },
    compatibility: { best: ["ENFP", "ENTP"], good: ["INFP", "INTP", "ENFJ", "ENTJ"], careful: ["ESFP", "ESTP"], difficult: ["ISFJ", "ESFJ"] },
    careers: [
      { ko: "과학자", en: "Scientist", ja: "科学者", 'zh-CN': "科学家", 'zh-TW': "科學家", id: "Ilmuwan", vi: "Nhà khoa học" },
      { ko: "엔지니어", en: "Engineer", ja: "エンジニア", 'zh-CN': "工程师", 'zh-TW': "工程師", id: "Insinyur", vi: "Kỹ sư" },
      { ko: "아키텍트", en: "Architect", ja: "建築家", 'zh-CN': "建筑师", 'zh-TW': "建築師", id: "Arsitek", vi: "Kiến trúc sư" },
      { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", id: "Peneliti", vi: "Nhà nghiên cứu" },
      { ko: "전략가", en: "Strategist", ja: "戦略家", 'zh-CN': "战略家", 'zh-TW': "戰略家", id: "Strategis", vi: "Chiến lược gia" }
    ],
    dating: [
      { ko: "독립적이고 전략적", en: "Independent and strategic", ja: "独立的で戦略的", 'zh-CN': "独立且战略", 'zh-TW': "獨立且戰略", id: "Mandiri dan strategis", vi: "Độc lập và chiến lược" },
      { ko: "완벽주의적", en: "Perfectionist", ja: "完璧主義的", 'zh-CN': "完美主义", 'zh-TW': "完美主義", id: "Perfeksionis", vi: "Chủ nghĩa hoàn hảo" }
    ],
    celebrities: [
      { ko: "스티브 잡스", en: "Steve Jobs", ja: "スティーブ・ジョブズ", 'zh-CN': "史蒂夫·乔布斯", 'zh-TW': "史蒂夫·喬布斯", id: "Steve Jobs", vi: "Steve Jobs" },
      { ko: "일론 머스크", en: "Elon Musk", ja: "イーロン・マスク", 'zh-CN': "埃隆·马斯克", 'zh-TW': "埃隆·馬斯克", id: "Elon Musk", vi: "Elon Musk" }
    ]
  },
  {
    type: "INTP",
    emoji: "🤔",
    title: { ko: "논리적인 사색가형", en: "The Thinker", ja: "論理的な思索家型", 'zh-CN': "逻辑的思想家型", 'zh-TW': "邏輯的思想家型", id: "Tipe Pemikir Logis", vi: "Kiểu Nhà tư tưởng Logic" },
    description: { ko: "진리를 탐구한다", en: "Explore truth", ja: "真理を探求する", 'zh-CN': "探索真理", 'zh-TW': "探索真理", id: "Jelajahi kebenaran", vi: "Khám phá chân lý" },
    longDescription: { ko: "분석적이고 객관적입니다. 이론과 논리를 중시하며 지적 호기심이 강합니다. 독립적이고 창의적입니다.", en: "Analytical and objective. Values theory and logic, strong intellectual curiosity. Independent and creative.", ja: "分析的で客観的です。理論と論理を重視し、知的探究心が強いです。独立的で創造的です。", 'zh-CN': "分析且客观。重视理论和逻辑，求知欲强。独立且创造性。", 'zh-TW': "分析且客觀。重視理論和邏輯，求知慾強。獨立且創造性。", id: "Analitis dan objektif. Menghargai teori dan logika, rasa ingin tahu intelektual yang kuat. Mandiri dan kreatif.", vi: "Phân tích và khách quan. Coi trọng lý thuyết và logic, tò mò trí tuệ mạnh mẽ. Độc lập và sáng tạo." },
    pros: [{ ko: "논리력", en: "Logic", ja: "論理力", 'zh-CN': "逻辑力", 'zh-TW': "邏輯力", id: "Logika", vi: "Logic" }, { ko: "분석력", en: "Analytical ability", ja: "分析力", 'zh-CN': "分析能力", 'zh-TW': "分析能力", id: "Kemampuan analitis", vi: "Khả năng phân tích" }, { ko: "창의성", en: "Creativity", ja: "創造性", 'zh-CN': "创造力", 'zh-TW': "創造力", id: "Kreativitas", vi: "Sáng tạo" }, { ko: "객관성", en: "Objectivity", ja: "客観性", 'zh-CN': "客观性", 'zh-TW': "客觀性", id: "Objektivitas", vi: "Khách quan" }],
    cons: [{ ko: "실행력 부족", en: "Lack of execution", ja: "実行力不足", 'zh-CN': "缺乏执行力", 'zh-TW': "缺乏執行力", id: "Kurang eksekusi", vi: "Thiếu khả năng thực hiện" }, { ko: "감정 표현 어려움", en: "Difficulty expressing emotions", ja: "感情表現の困難", 'zh-CN': "难以表达情感", 'zh-TW': "難以表達情感", id: "Kesulitan mengekspresikan emosi", vi: "Khó khăn trong việc thể hiện cảm xúc" }],
    advice: { ko: "이론을 실천으로 옮기는 연습을 하고, 다른 사람과의 감정적 교류를 늘려보세요.", en: "Practice turning theory into practice and increase emotional interaction with others.", ja: "理論を実践に移す練習をし、他の人との感情的交流を増やしてみてください。", 'zh-CN': "练习将理论转化为实践，增加与他人的情感交流。", 'zh-TW': "練習將理論轉化為實踐，增加與他人的情感交流。", id: "Berlatih mengubah teori menjadi praktik dan tingkatkan interaksi emosional dengan orang lain.", vi: "Hãy luyện tập biến lý thuyết thành thực hành và tăng cường giao lưu tình cảm với người khác." },
    compatibility: { best: ["ENTJ", "ESTJ"], good: ["INTJ", "INFJ", "ENTP", "ENFP"], careful: ["ESFJ", "ENFJ"], difficult: ["ISFJ", "ESFJ"] },
    careers: [
      { ko: "과학자", en: "Scientist", ja: "科学者", 'zh-CN': "科学家", 'zh-TW': "科學家", id: "Ilmuwan", vi: "Nhà khoa học" },
      { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", id: "Peneliti", vi: "Nhà nghiên cứu" },
      { ko: "프로그래머", en: "Programmer", ja: "プログラマー", 'zh-CN': "程序员", 'zh-TW': "程序員", id: "Programmer", vi: "Lập trình viên" },
      { ko: "철학자", en: "Philosopher", ja: "哲学者", 'zh-CN': "哲学家", 'zh-TW': "哲學家", id: "Filsuf", vi: "Triết gia" },
      { ko: "수학자", en: "Mathematician", ja: "数学者", 'zh-CN': "数学家", 'zh-TW': "數學家", id: "Matematikawan", vi: "Nhà toán học" }
    ],
    dating: [
      { ko: "분석적이고 논리적", en: "Analytical and logical", ja: "分析的で論理的", 'zh-CN': "分析且逻辑", 'zh-TW': "分析且邏輯", id: "Analitis dan logis", vi: "Phân tích và logic" },
      { ko: "지적 호기심", en: "Intellectual curiosity", ja: "知的探究心", 'zh-CN': "求知欲", 'zh-TW': "求知慾", id: "Rasa ingin tahu intelektual", vi: "Tò mò trí tuệ" }
    ],
    celebrities: [
      { ko: "알베르트 아인슈타인", en: "Albert Einstein", ja: "アルベルト・アインシュタイン", 'zh-CN': "阿尔伯特·爱因斯坦", 'zh-TW': "阿爾伯特·愛因斯坦", id: "Albert Einstein", vi: "Albert Einstein" },
      { ko: "찰스 다윈", en: "Charles Darwin", ja: "チャールズ・ダーウィン", 'zh-CN': "查尔斯·达尔文", 'zh-TW': "查爾斯·達爾文", id: "Charles Darwin", vi: "Charles Darwin" }
    ]
  },
  {
    type: "INFJ",
    emoji: "🌙",
    title: { ko: "선의의 옹호자형", en: "The Advocate", ja: "善意の擁護者型", 'zh-CN': "善意的倡导者型", 'zh-TW': "善意的倡導者型", id: "Tipe Pembela Kebaikan", vi: "Kiểu Người ủng hộ Thiện ý" },
    description: { ko: "세상을 더 나은 곳으로", en: "To a better world", ja: "世界をより良い場所に", 'zh-CN': "让世界更美好", 'zh-TW': "讓世界更美好", id: "Ke dunia yang lebih baik", vi: "Đến một thế giới tốt đẹp hơn" },
    longDescription: { ko: "통찰력 있고 이상주의적입니다. 깊이 있는 관계를 추구하며 타인을 돕고 싶어 합니다. 신비롭고 완벽주의적입니다.", en: "Insightful and idealistic. Pursues deep relationships and wants to help others. Mysterious and perfectionist.", ja: "洞察力があり理想主義的です。深い関係を追求し、他人を助けたいと思います。神秘的で完璧主義的です。", 'zh-CN': "有洞察力且理想主义。追求深度关系，想帮助他人。神秘且完美主义。", 'zh-TW': "有洞察力且理想主義。追求深度關係，想幫助他人。神秘且完美主義。", id: "Berwawasan dan idealistis. Mengejar hubungan yang mendalam dan ingin membantu orang lain. Misterius dan perfeksionis.", vi: "Có sự sáng suốt và lý tưởng. Theo đuổi mối quan hệ sâu sắc và muốn giúp đỡ người khác. Bí ẩn và chủ nghĩa hoàn hảo." },
    pros: [{ ko: "통찰력", en: "Insight", ja: "洞察力", 'zh-CN': "洞察力", 'zh-TW': "洞察力", id: "Wawasan", vi: "Sự sáng suốt" }, { ko: "공감능력", en: "Empathy", ja: "共感能力", 'zh-CN': "共情能力", 'zh-TW': "共情能力", id: "Empati", vi: "Khả năng đồng cảm" }, { ko: "이상주의", en: "Idealism", ja: "理想主義", 'zh-CN': "理想主义", 'zh-TW': "理想主義", id: "Idealisme", vi: "Chủ nghĩa lý tưởng" }, { ko: "헌신적", en: "Devoted", ja: "献身的", 'zh-CN': "奉献", 'zh-TW': "奉獻", id: "Setia", vi: "Tận tụy" }],
    cons: [{ ko: "완벽주의", en: "Perfectionism", ja: "完璧主義", 'zh-CN': "完美主义", 'zh-TW': "完美主義", id: "Perfeksionisme", vi: "Chủ nghĩa hoàn hảo" }, { ko: "번아웃", en: "Burnout", ja: "燃え尽き", 'zh-CN': "倦怠", 'zh-TW': "倦怠", id: "Kelelahan", vi: "Kiệt sức" }],
    advice: { ko: "완벽을 추구하되 자신을 너무 몰아붙이지 말고, 휴식과 자기 돌봄의 시간을 가져보세요.", en: "Pursue perfection but don't push yourself too hard, and take time for rest and self-care.", ja: "完璧を追求するが自分を追い詰めすぎず、休息とセルフケアの時間を持ってみてください。", 'zh-CN': "追求完美但不要过度逼迫自己，花时间休息和自我照顾。", 'zh-TW': "追求完美但不要過度逼迫自己，花時間休息和自我照顧。", id: "Kejar kesempurnaan tapi jangan terlalu memaksa diri, dan luangkan waktu untuk istirahat dan perawatan diri.", vi: "Theo đuổi sự hoàn hảo nhưng đừng quá ép buộc bản thân, và dành thời gian nghỉ ngơi và chăm sóc bản thân." },
    compatibility: { best: ["ENTP", "ENFP"], good: ["INTP", "INFP", "ENTJ", "ENFJ"], careful: ["ESTP", "ESFP"], difficult: ["ISTP", "ESTP"] },
    careers: [
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "심리학자", en: "Psychologist", ja: "心理学者", 'zh-CN': "心理学家", 'zh-TW': "心理學家", id: "Psikolog", vi: "Nhà tâm lý học" },
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
      { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
      { ko: "사회복지사", en: "Social Worker", ja: "ソーシャルワーカー", 'zh-CN': "社会工作者", 'zh-TW': "社會工作者", id: "Pekerja Sosial", vi: "Công nhân xã hội" }
    ],
    dating: [
      { ko: "통찰력 있고 이상주의적", en: "Insightful and idealistic", ja: "洞察力があり理想主義的", 'zh-CN': "有洞察力且理想主义", 'zh-TW': "有洞察力且理想主義", id: "Berwawasan dan idealistis", vi: "Có sự sáng suốt và lý tưởng" },
      { ko: "깊이 있는 관계 추구", en: "Pursues deep relationships", ja: "深い関係を追求", 'zh-CN': "追求深度关系", 'zh-TW': "追求深度關係", id: "Mengejar hubungan yang mendalam", vi: "Theo đuổi mối quan hệ sâu sắc" }
    ],
    celebrities: [
      { ko: "넬슨 만델라", en: "Nelson Mandela", ja: "ネルソン・マンデラ", 'zh-CN': "纳尔逊·曼德拉", 'zh-TW': "納爾遜·曼德拉", id: "Nelson Mandela", vi: "Nelson Mandela" },
      { ko: "마더 테레사", en: "Mother Teresa", ja: "マザー・テレサ", 'zh-CN': "特蕾莎修女", 'zh-TW': "特蕾莎修女", id: "Mother Teresa", vi: "Mother Teresa" }
    ]
  },
  {
    type: "INFP",
    emoji: "🦄",
    title: { ko: "열정적인 중재자형", en: "The Mediator", ja: "情熱的な調停者型", 'zh-CN': "热情的中介者型", 'zh-TW': "熱情的中介者型", id: "Tipe Mediator yang Bersemangat", vi: "Kiểu Người hòa giải Nhiệt tình" },
    description: { ko: "진정한 나를 찾아서", en: "Finding the real me", ja: "本当の自分を見つけて", 'zh-CN': "寻找真正的自己", 'zh-TW': "尋找真正的自己", id: "Menemukan diri yang sebenarnya", vi: "Tìm thấy con người thật của mình" },
    longDescription: { ko: "이상주의적이고 창의적입니다. 가치관이 뚜렷하고 진정성을 추구합니다. 감수성이 풍부하고 상상력이 뛰어납니다.", en: "Idealistic and creative. Clear values and pursues authenticity. Rich sensitivity and excellent imagination.", ja: "理想主義的で創造的です。価値観がはっきりしていて真実性を追求します。感受性が豊かで想像力が優れています。", 'zh-CN': "理想主义且创造性。价值观清晰，追求真实性。感受性丰富，想象力强。", 'zh-TW': "理想主義且創造性。價值觀清晰，追求真實性。感受性豐富，想像力強。", id: "Idealistis dan kreatif. Nilai yang jelas dan mengejar keaslian. Sensitivitas yang kaya dan imajinasi yang luar biasa.", vi: "Lý tưởng và sáng tạo. Giá trị rõ ràng và theo đuổi tính chân thực. Cảm xúc phong phú và trí tưởng tượng xuất sắc." },
    pros: [{ ko: "창의성", en: "Creativity", ja: "創造性", 'zh-CN': "创造力", 'zh-TW': "創造力", id: "Kreativitas", vi: "Sáng tạo" }, { ko: "공감능력", en: "Empathy", ja: "共感能力", 'zh-CN': "共情能力", 'zh-TW': "共情能力", id: "Empati", vi: "Khả năng đồng cảm" }, { ko: "진정성", en: "Authenticity", ja: "真実性", 'zh-CN': "真实性", 'zh-TW': "真實性", id: "Keaslian", vi: "Tính chân thực" }, { ko: "이상주의", en: "Idealism", ja: "理想主義", 'zh-CN': "理想主义", 'zh-TW': "理想主義", id: "Idealisme", vi: "Chủ nghĩa lý tưởng" }],
    cons: [{ ko: "현실감각 부족", en: "Lack of sense of reality", ja: "現実感覚の欠如", 'zh-CN': "缺乏现实感", 'zh-TW': "缺乏現實感", id: "Kurang rasa realitas", vi: "Thiếu cảm giác thực tế" }, { ko: "우유부단함", en: "Indecisiveness", ja: "優柔不断", 'zh-CN': "优柔寡断", 'zh-TW': "優柔寡斷", id: "Keragu-raguan", vi: "Do dự" }],
    advice: { ko: "현실적인 목표를 설정하고 결정을 내리는 연습을 해보세요. 때로는 완벽하지 않아도 괜찮습니다.", en: "Practice setting realistic goals and making decisions. Sometimes it's okay not to be perfect.", ja: "現実的な目標を設定し、決定を下す練習をしてみてください。時には完璧でなくても大丈夫です。", 'zh-CN': "练习设定现实目标并做决定。有时不完美也没关系。", 'zh-TW': "練習設定現實目標並做決定。有時不完美也沒關係。", id: "Berlatih menetapkan tujuan realistis dan membuat keputusan. Terkadang tidak apa-apa tidak sempurna.", vi: "Hãy luyện tập đặt mục tiêu thực tế và đưa ra quyết định. Đôi khi không hoàn hảo cũng không sao." },
    careers: [
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
      { ko: "심리학자", en: "Psychologist", ja: "心理学者", 'zh-CN': "心理学家", 'zh-TW': "心理學家", id: "Psikolog", vi: "Nhà tâm lý học" },
      { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", id: "Desainer", vi: "Nhà thiết kế" }
    ],
    dating: [
      { ko: "로맨틱하고 이상적", en: "Romantic and idealistic", ja: "ロマンチックで理想的", 'zh-CN': "浪漫且理想", 'zh-TW': "浪漫且理想", id: "Romantis dan idealis", vi: "Lãng mạn và lý tưởng" },
      { ko: "영혼의 교감 중시", en: "Values spiritual connection", ja: "魂の交流を重視", 'zh-CN': "重视精神交流", 'zh-TW': "重視精神交流", id: "Menghargai koneksi spiritual", vi: "Coi trọng kết nối tinh thần" },
      { ko: "깊은 감정 교류", en: "Deep emotional exchange", ja: "深い感情交流", 'zh-CN': "深度情感交流", 'zh-TW': "深度情感交流", id: "Pertukaran emosional mendalam", vi: "Trao đổi cảm xúc sâu sắc" }
    ],
    celebrities: [
      { ko: "윌리엄 셰익스피어", en: "William Shakespeare", ja: "ウィリアム・シェイクスピア", 'zh-CN': "威廉·莎士比亚", 'zh-TW': "威廉·莎士比亞", id: "William Shakespeare", vi: "William Shakespeare" },
      { ko: "J.R.R. 톨킨", en: "J.R.R. Tolkien", ja: "J・R・R・トールキン", 'zh-CN': "J·R·R·托尔金", 'zh-TW': "J·R·R·托爾金", id: "J.R.R. Tolkien", vi: "J.R.R. Tolkien" }
    ],
    compatibility: { best: ["ENTJ", "ENFJ"], good: ["INTJ", "INFJ", "ENTP", "ENFP"], careful: ["ESTJ", "ISTJ"], difficult: ["ESTP", "ISTP"] }
  }
];

// MBTI 결과 계산 함수
export function calculateMBTIAccurateResult(answers: number[]): MBTIAccurateResult {
  // 각 차원별 점수 계산
  let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
  
  // 답변에 따라 점수 계산
  answers.forEach((answerIndex, questionIndex) => {
    const question = mbtiAccurateQuestions[questionIndex];
    if (question && question.options[answerIndex]) {
      const scores = question.options[answerIndex].scores;
      
      // 각 차원별 점수 누적
      if (scores.E) E += scores.E;
      if (scores.I) I += scores.I;
      if (scores.S) S += scores.S;
      if (scores.N) N += scores.N;
      if (scores.T) T += scores.T;
      if (scores.F) F += scores.F;
      if (scores.J) J += scores.J;
      if (scores.P) P += scores.P;
    }
  });
  
  // MBTI 유형 결정
  const firstLetter = E > I ? 'E' : 'I';
  const secondLetter = S > N ? 'S' : 'N';
  const thirdLetter = T > F ? 'T' : 'F';
  const fourthLetter = J > P ? 'J' : 'P';
  
  const mbtiType = firstLetter + secondLetter + thirdLetter + fourthLetter;
  
  // 해당 유형의 결과 찾기
  const result = mbtiAccurateResults.find(r => r.type === mbtiType);
  
  if (!result) {
    // 기본값으로 ESTJ 반환 (오류 방지)
    return mbtiAccurateResults[0];
  }
  
  return result;
}

// 추가 데이터 통합 함수
export function getMBTIResultWithAdditionalData(result: MBTIAccurateResult): MBTIAccurateResult {
  // 추가 데이터 임포트
  const additionalData = {
    ESFJ: {
      careers: [
        { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
        { ko: "간호사", en: "Nurse", ja: "看護師", 'zh-CN': "护士", 'zh-TW': "護士", id: "Perawat", vi: "Y tá" },
        { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
        { ko: "이벤트 기획", en: "Event Planner", ja: "イベント企画", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" },
        { ko: "HR", en: "HR Manager", ja: "人事", 'zh-CN': "人力资源", 'zh-TW': "人力資源", id: "HR", vi: "Nhân sự" }
      ],
      dating: [
        { ko: "헌신적이고 배려 깊음", en: "Devoted and caring", ja: "献身的で思いやり深い", 'zh-CN': "忠诚且体贴", 'zh-TW': "忠誠且體貼", id: "Setia dan peduli", vi: "Tận tụy và quan tâm" },
        { ko: "기념일 중시", en: "Values anniversaries", ja: "記念日を重視", 'zh-CN': "重视纪念日", 'zh-TW': "重視紀念日", id: "Menghargai hari jadi", vi: "Coi trọng ngày kỷ niệm" },
        { ko: "전통적 가치 중시", en: "Values traditional values", ja: "伝統的価値を重視", 'zh-CN': "重视传统价值", 'zh-TW': "重視傳統價值", id: "Menghargai nilai tradisional", vi: "Coi trọng giá trị truyền thống" }
      ],
      celebrities: [
        { ko: "테일러 스위프트", en: "Taylor Swift", ja: "テイラー・スウィフト", 'zh-CN': "泰勒·斯威夫特", 'zh-TW': "泰勒·斯威夫特", id: "Taylor Swift", vi: "Taylor Swift" },
        { ko: "제니퍼 로페즈", en: "Jennifer Lopez", ja: "ジェニファー・ロペス", 'zh-CN': "詹妮弗·洛佩兹", 'zh-TW': "珍妮佛·羅培茲", id: "Jennifer Lopez", vi: "Jennifer Lopez" }
      ]
    },
    ESFP: {
      careers: [
        { ko: "연예인", en: "Entertainer", ja: "芸能人", 'zh-CN': "艺人", 'zh-TW': "藝人", id: "Hiburan", vi: "Nghệ sĩ" },
        { ko: "이벤트 기획", en: "Event Planner", ja: "イベント企画", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana Acara", vi: "Người lập kế hoạch sự kiện" },
        { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", id: "Desainer", vi: "Nhà thiết kế" },
        { ko: "서비스업", en: "Service Industry", ja: "サービス業", 'zh-CN': "服务业", 'zh-TW': "服務業", id: "Industri Jasa", vi: "Ngành dịch vụ" },
        { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "營銷人員", id: "Pemasar", vi: "Nhà tiếp thị" }
      ],
      dating: [
        { ko: "열정적이고 로맨틱", en: "Passionate and romantic", ja: "情熱的でロマンチック", 'zh-CN': "热情且浪漫", 'zh-TW': "熱情且浪漫", id: "Bersemangat dan romantis", vi: "Nhiệt tình và lãng mạn" },
        { ko: "깜짝 이벤트 좋아함", en: "Likes surprise events", ja: "サプライズイベントが好き", 'zh-CN': "喜欢惊喜活动", 'zh-TW': "喜歡驚喜活動", id: "Suka acara kejutan", vi: "Thích sự kiện bất ngờ" },
        { ko: "즉흥적 관계", en: "Spontaneous relationship", ja: "即興的関係", 'zh-CN': "即兴关系", 'zh-TW': "即興關係", id: "Hubungan spontan", vi: "Mối quan hệ tự phát" }
      ],
      celebrities: [
        { ko: "마릴린 먼로", en: "Marilyn Monroe", ja: "マリリン・モンロー", 'zh-CN': "玛丽莲·梦露", 'zh-TW': "瑪麗蓮·夢露", id: "Marilyn Monroe", vi: "Marilyn Monroe" },
        { ko: "엘튼 존", en: "Elton John", ja: "エルトン・ジョン", 'zh-CN': "埃尔顿·约翰", 'zh-TW': "艾爾頓·約翰", id: "Elton John", vi: "Elton John" }
      ]
    },
    ENTJ: {
      careers: [
        { ko: "CEO", en: "CEO", ja: "CEO", 'zh-CN': "首席执行官", 'zh-TW': "首席執行官", id: "CEO", vi: "CEO" },
        { ko: "변호사", en: "Lawyer", ja: "弁護士", 'zh-CN': "律师", 'zh-TW': "律師", id: "Pengacara", vi: "Luật sư" },
        { ko: "정치인", en: "Politician", ja: "政治家", 'zh-CN': "政治家", 'zh-TW': "政治家", id: "Politisi", vi: "Chính trị gia" },
        { ko: "전략 기획", en: "Strategic Planner", ja: "戦略企画", 'zh-CN': "战略规划", 'zh-TW': "戰略規劃", id: "Perencana Strategis", vi: "Người lập kế hoạch chiến lược" },
        { ko: "교수", en: "Professor", ja: "教授", 'zh-CN': "教授", 'zh-TW': "教授", id: "Profesor", vi: "Giáo sư" }
      ],
      dating: [
        { ko: "주도적이고 계획적", en: "Proactive and planned", ja: "主導的で計画的", 'zh-CN': "主动且有计划", 'zh-TW': "主動且有計劃", id: "Proaktif dan terencana", vi: "Chủ động và có kế hoạch" },
        { ko: "목표 지향적 관계", en: "Goal-oriented relationship", ja: "目標志向関係", 'zh-CN': "目标导向关系", 'zh-TW': "目標導向關係", id: "Hubungan berorientasi tujuan", vi: "Mối quan hệ hướng mục tiêu" },
        { ko: "리더십 중시", en: "Values leadership", ja: "リーダーシップを重視", 'zh-CN': "重视领导力", 'zh-TW': "重視領導力", id: "Menghargai kepemimpinan", vi: "Coi trọng khả năng lãnh đạo" }
      ],
      celebrities: [
        { ko: "스티브 잡스", en: "Steve Jobs", ja: "スティーブ・ジョブズ", 'zh-CN': "史蒂夫·乔布斯", 'zh-TW': "史蒂夫·喬布斯", id: "Steve Jobs", vi: "Steve Jobs" },
        { ko: "마가렛 대처", en: "Margaret Thatcher", ja: "マーガレット・サッチャー", 'zh-CN': "玛格丽特·撒切尔", 'zh-TW': "瑪格麗特·柴契爾", id: "Margaret Thatcher", vi: "Margaret Thatcher" }
      ]
    },
    ENTP: {
      careers: [
        { ko: "기업가", en: "Entrepreneur", ja: "起業家", 'zh-CN': "企业家", 'zh-TW': "企業家", id: "Pengusaha", vi: "Doanh nhân" },
        { ko: "발명가", en: "Inventor", ja: "発明家", 'zh-CN': "发明家", 'zh-TW': "發明家", id: "Penemu", vi: "Nhà phát minh" },
        { ko: "컨설턴트", en: "Consultant", ja: "コンサルタント", 'zh-CN': "顾问", 'zh-TW': "顧問", id: "Konsultan", vi: "Tư vấn viên" },
        { ko: "변호사", en: "Lawyer", ja: "弁護士", 'zh-CN': "律师", 'zh-TW': "律師", id: "Pengacara", vi: "Luật sư" },
        { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "營銷人員", id: "Pemasar", vi: "Nhà tiếp thị" }
      ],
      dating: [
        { ko: "지적 자극 중시", en: "Values intellectual stimulation", ja: "知的刺激を重視", 'zh-CN': "重视智力刺激", 'zh-TW': "重視智力刺激", id: "Menghargai stimulasi intelektual", vi: "Coi trọng kích thích trí tuệ" },
        { ko: "자유로운 관계 선호", en: "Prefers free relationship", ja: "自由な関係を好む", 'zh-CN': "喜欢自由关系", 'zh-TW': "喜歡自由關係", id: "Lebih suka hubungan bebas", vi: "Thích mối quan hệ tự do" },
        { ko: "토론과 논쟁 즐김", en: "Enjoys debate and argument", ja: "討論と論争を楽しむ", 'zh-CN': "喜欢辩论和争论", 'zh-TW': "喜歡辯論和爭論", id: "Menikmati debat dan argumen", vi: "Thích tranh luận và tranh cãi" }
      ],
      celebrities: [
        { ko: "토마스 에디슨", en: "Thomas Edison", ja: "トーマス・エジソン", 'zh-CN': "托马斯·爱迪生", 'zh-TW': "湯瑪斯·愛迪生", id: "Thomas Edison", vi: "Thomas Edison" },
        { ko: "마크 트웨인", en: "Mark Twain", ja: "マーク・トウェイン", 'zh-CN': "马克·吐温", 'zh-TW': "馬克·吐溫", id: "Mark Twain", vi: "Mark Twain" }
      ]
    },
    ENFJ: {
      careers: [
        { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
        { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
        { ko: "코치", en: "Coach", ja: "コーチ", 'zh-CN': "教练", 'zh-TW': "教練", id: "Pelatih", vi: "Huấn luyện viên" },
        { ko: "정치인", en: "Politician", ja: "政治家", 'zh-CN': "政治家", 'zh-TW': "政治家", id: "Politisi", vi: "Chính trị gia" },
        { ko: "HR", en: "HR Manager", ja: "人事", 'zh-CN': "人力资源", 'zh-TW': "人力資源", id: "HR", vi: "Nhân sự" }
      ],
      dating: [
        { ko: "헌신적이고 이해심 깊음", en: "Devoted and understanding", ja: "献身的で理解力が深い", 'zh-CN': "忠诚且理解力强", 'zh-TW': "忠誠且理解力強", id: "Setia dan pengertian", vi: "Tận tụy và thấu hiểu" },
        { ko: "파트너 성장 지원", en: "Supports partner's growth", ja: "パートナーの成長を支援", 'zh-CN': "支持伴侣成长", 'zh-TW': "支持伴侶成長", id: "Mendukung pertumbuhan pasangan", vi: "Hỗ trợ sự phát triển của đối tác" },
        { ko: "깊은 감정 교류", en: "Deep emotional exchange", ja: "深い感情交流", 'zh-CN': "深度情感交流", 'zh-TW': "深度情感交流", id: "Pertukaran emosional mendalam", vi: "Trao đổi cảm xúc sâu sắc" }
      ],
      celebrities: [
        { ko: "오프라 윈프리", en: "Oprah Winfrey", ja: "オプラ・ウィンフリー", 'zh-CN': "奥普拉·温弗瑞", 'zh-TW': "歐普拉·溫芙蕾", id: "Oprah Winfrey", vi: "Oprah Winfrey" },
        { ko: "버락 오바마", en: "Barack Obama", ja: "バラク・オバマ", 'zh-CN': "巴拉克·奥巴马", 'zh-TW': "巴拉克·歐巴馬", id: "Barack Obama", vi: "Barack Obama" }
      ]
    },
    ENFP: {
      careers: [
        { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
        { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
        { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
        { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "營銷人員", id: "Pemasar", vi: "Nhà tiếp thị" },
        { ko: "방송인", en: "Broadcaster", ja: "放送人", 'zh-CN': "广播员", 'zh-TW': "廣播員", id: "Penyiar", vi: "Phát thanh viên" }
      ],
      dating: [
        { ko: "로맨틱하고 열정적", en: "Romantic and passionate", ja: "ロマンチックで情熱的", 'zh-CN': "浪漫且热情", 'zh-TW': "浪漫且熱情", id: "Romantis dan bersemangat", vi: "Lãng mạn và nhiệt tình" },
        { ko: "깊은 교감 중시", en: "Values deep connection", ja: "深い交流を重視", 'zh-CN': "重视深度交流", 'zh-TW': "重視深度交流", id: "Menghargai koneksi mendalam", vi: "Coi trọng kết nối sâu sắc" },
        { ko: "자유로운 영혼", en: "Free spirit", ja: "自由な魂", 'zh-CN': "自由灵魂", 'zh-TW': "自由靈魂", id: "Jiwa bebas", vi: "Tinh thần tự do" }
      ],
      celebrities: [
        { ko: "로빈 윌리엄스", en: "Robin Williams", ja: "ロビン・ウィリアムズ", 'zh-CN': "罗宾·威廉姆斯", 'zh-TW': "羅賓·威廉斯", id: "Robin Williams", vi: "Robin Williams" },
        { ko: "엘렌 드제너러스", en: "Ellen DeGeneres", ja: "エレン・デジェネレス", 'zh-CN': "艾伦·德杰尼勒斯", 'zh-TW': "艾倫·狄珍妮", id: "Ellen DeGeneres", vi: "Ellen DeGeneres" }
      ]
    },
    ISTJ: {
      careers: [
        { ko: "회계사", en: "Accountant", ja: "会計士", 'zh-CN': "会计师", 'zh-TW': "會計師", id: "Akuntan", vi: "Kế toán" },
        { ko: "공무원", en: "Civil Servant", ja: "公務員", 'zh-CN': "公务员", 'zh-TW': "公務員", id: "Pegawai Negeri", vi: "Công chức" },
        { ko: "의사", en: "Doctor", ja: "医師", 'zh-CN': "医生", 'zh-TW': "醫生", id: "Dokter", vi: "Bác sĩ" },
        { ko: "군인", en: "Military Officer", ja: "軍人", 'zh-CN': "军人", 'zh-TW': "軍人", id: "Tentara", vi: "Quân nhân" },
        { ko: "은행원", en: "Banker", ja: "銀行員", 'zh-CN': "银行员", 'zh-TW': "銀行員", id: "Bankir", vi: "Nhân viên ngân hàng" }
      ],
      dating: [
        { ko: "안정적이고 성실함", en: "Stable and sincere", ja: "安定していて誠実", 'zh-CN': "稳定且诚实", 'zh-TW': "穩定且誠實", id: "Stabil dan tulus", vi: "Ổn định và chân thành" },
        { ko: "전통적 가치 중시", en: "Values traditional values", ja: "伝統的価値を重視", 'zh-CN': "重视传统价值", 'zh-TW': "重視傳統價值", id: "Menghargai nilai tradisional", vi: "Coi trọng giá trị truyền thống" },
        { ko: "계획적 관계", en: "Planned relationship", ja: "計画的関係", 'zh-CN': "有计划的关系", 'zh-TW': "有計劃的關係", id: "Hubungan terencana", vi: "Mối quan hệ có kế hoạch" }
      ],
      celebrities: [
        { ko: "조지 워싱턴", en: "George Washington", ja: "ジョージ・ワシントン", 'zh-CN': "乔治·华盛顿", 'zh-TW': "喬治·華盛頓", id: "George Washington", vi: "George Washington" },
        { ko: "앤절라 메르켈", en: "Angela Merkel", ja: "アンゲラ・メルケル", 'zh-CN': "安格拉·默克尔", 'zh-TW': "安格拉·梅克爾", id: "Angela Merkel", vi: "Angela Merkel" }
      ]
    },
    ISTP: {
      careers: [
        { ko: "엔지니어", en: "Engineer", ja: "エンジニア", 'zh-CN': "工程师", 'zh-TW': "工程師", id: "Insinyur", vi: "Kỹ sư" },
        { ko: "정비사", en: "Mechanic", ja: "整備士", 'zh-CN': "机械师", 'zh-TW': "機械師", id: "Mekanik", vi: "Thợ máy" },
        { ko: "운동선수", en: "Athlete", ja: "運動選手", 'zh-CN': "运动员", 'zh-TW': "運動員", id: "Atlet", vi: "Vận động viên" },
        { ko: "개발자", en: "Developer", ja: "開発者", 'zh-CN': "开发者", 'zh-TW': "開發者", id: "Pengembang", vi: "Nhà phát triển" },
        { ko: "파일럿", en: "Pilot", ja: "パイロット", 'zh-CN': "飞行员", 'zh-TW': "飛行員", id: "Pilot", vi: "Phi công" }
      ],
      dating: [
        { ko: "실용적이고 자유로움", en: "Practical and free", ja: "実用的で自由", 'zh-CN': "实用且自由", 'zh-TW': "實用且自由", id: "Praktis dan bebas", vi: "Thực tế và tự do" },
        { ko: "행동으로 사랑 표현", en: "Expresses love through actions", ja: "行動で愛を表現", 'zh-CN': "通过行动表达爱", 'zh-TW': "通過行動表達愛", id: "Mengekspresikan cinta melalui tindakan", vi: "Thể hiện tình yêu qua hành động" },
        { ko: "독립적 관계", en: "Independent relationship", ja: "独立的関係", 'zh-CN': "独立关系", 'zh-TW': "獨立關係", id: "Hubungan mandiri", vi: "Mối quan hệ độc lập" }
      ],
      celebrities: [
        { ko: "클린트 이스트우드", en: "Clint Eastwood", ja: "クリント・イーストウッド", 'zh-CN': "克林特·伊斯特伍德", 'zh-TW': "克林特·伊斯威特", id: "Clint Eastwood", vi: "Clint Eastwood" },
        { ko: "마이클 조던", en: "Michael Jordan", ja: "マイケル・ジョーダン", 'zh-CN': "迈克尔·乔丹", 'zh-TW': "麥可·喬丹", id: "Michael Jordan", vi: "Michael Jordan" }
      ]
    },
    ISFJ: {
      careers: [
        { ko: "간호사", en: "Nurse", ja: "看護師", 'zh-CN': "护士", 'zh-TW': "護士", id: "Perawat", vi: "Y tá" },
        { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", id: "Guru", vi: "Giáo viên" },
        { ko: "사서", en: "Librarian", ja: "司書", 'zh-CN': "图书管理员", 'zh-TW': "圖書管理員", id: "Pustakawan", vi: "Thủ thư" },
        { ko: "행정직", en: "Administrative", ja: "行政職", 'zh-CN': "行政工作", 'zh-TW': "行政工作", id: "Administratif", vi: "Hành chính" },
        { ko: "사회복지사", en: "Social Worker", ja: "社会福祉士", 'zh-CN': "社会工作者", 'zh-TW': "社會工作者", id: "Pekerja Sosial", vi: "Nhân viên xã hội" }
      ],
      dating: [
        { ko: "헌신적이고 보살핌", en: "Devoted and caring", ja: "献身的で世話好き", 'zh-CN': "忠诚且关怀", 'zh-TW': "忠誠且關懷", id: "Setia dan peduli", vi: "Tận tụy và quan tâm" },
        { ko: "안정적 관계 추구", en: "Seeks stable relationship", ja: "安定した関係を求める", 'zh-CN': "寻求稳定关系", 'zh-TW': "尋求穩定關係", id: "Mencari hubungan stabil", vi: "Tìm kiếm mối quan hệ ổn định" },
        { ko: "전통적 가치 중시", en: "Values traditional values", ja: "伝統的価値を重視", 'zh-CN': "重视传统价值", 'zh-TW': "重視傳統價值", id: "Menghargai nilai tradisional", vi: "Coi trọng giá trị truyền thống" }
      ],
      celebrities: [
        { ko: "마더 테레사", en: "Mother Teresa", ja: "マザー・テレサ", 'zh-CN': "特蕾莎修女", 'zh-TW': "德蕾莎修女", id: "Mother Teresa", vi: "Mẹ Teresa" },
        { ko: "케이트 미들턴", en: "Kate Middleton", ja: "ケイト・ミドルトン", 'zh-CN': "凯特·米德尔顿", 'zh-TW': "凱特·米德爾頓", id: "Kate Middleton", vi: "Kate Middleton" }
      ]
    },
    ISFP: {
      careers: [
        { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
        { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", id: "Desainer", vi: "Nhà thiết kế" },
        { ko: "음악가", en: "Musician", ja: "音楽家", 'zh-CN': "音乐家", 'zh-TW': "音樂家", id: "Musisi", vi: "Nhạc sĩ" },
        { ko: "요리사", en: "Chef", ja: "シェフ", 'zh-CN': "厨师", 'zh-TW': "廚師", id: "Koki", vi: "Đầu bếp" },
        { ko: "사진작가", en: "Photographer", ja: "写真家", 'zh-CN': "摄影师", 'zh-TW': "攝影師", id: "Fotografer", vi: "Nhiếp ảnh gia" }
      ],
      dating: [
        { ko: "로맨틱하고 자유로움", en: "Romantic and free", ja: "ロマンチックで自由", 'zh-CN': "浪漫且自由", 'zh-TW': "浪漫且自由", id: "Romantis dan bebas", vi: "Lãng mạn và tự do" },
        { ko: "감성적 교류 중시", en: "Values emotional exchange", ja: "感情交流を重視", 'zh-CN': "重视情感交流", 'zh-TW': "重視情感交流", id: "Menghargai pertukaran emosional", vi: "Coi trọng trao đổi cảm xúc" },
        { ko: "개성 존중", en: "Respects individuality", ja: "個性を尊重", 'zh-CN': "尊重个性", 'zh-TW': "尊重個性", id: "Menghormati individualitas", vi: "Tôn trọng cá tính" }
      ],
      celebrities: [
        { ko: "마이클 잭슨", en: "Michael Jackson", ja: "マイケル・ジャクソン", 'zh-CN': "迈克尔·杰克逊", 'zh-TW': "麥可·傑克森", id: "Michael Jackson", vi: "Michael Jackson" },
        { ko: "프린스", en: "Prince", ja: "プリンス", 'zh-CN': "王子", 'zh-TW': "王子", id: "Prince", vi: "Prince" }
      ]
    },
    INTJ: {
      careers: [
        { ko: "과학자", en: "Scientist", ja: "科学者", 'zh-CN': "科学家", 'zh-TW': "科學家", id: "Ilmuwan", vi: "Nhà khoa học" },
        { ko: "전략가", en: "Strategist", ja: "戦略家", 'zh-CN': "战略家", 'zh-TW': "戰略家", id: "Strateg", vi: "Nhà chiến lược" },
        { ko: "교수", en: "Professor", ja: "教授", 'zh-CN': "教授", 'zh-TW': "教授", id: "Profesor", vi: "Giáo sư" },
        { ko: "개발자", en: "Developer", ja: "開発者", 'zh-CN': "开发者", 'zh-TW': "開發者", id: "Pengembang", vi: "Nhà phát triển" },
        { ko: "건축가", en: "Architect", ja: "建築家", 'zh-CN': "建筑师", 'zh-TW': "建築師", id: "Arsitek", vi: "Kiến trúc sư" }
      ],
      dating: [
        { ko: "진지하고 헌신적", en: "Serious and devoted", ja: "真剣で献身的", 'zh-CN': "严肃且忠诚", 'zh-TW': "嚴肅且忠誠", id: "Serius dan setia", vi: "Nghiêm túc và tận tụy" },
        { ko: "지적 교류 중시", en: "Values intellectual exchange", ja: "知的交流を重視", 'zh-CN': "重视智力交流", 'zh-TW': "重視智力交流", id: "Menghargai pertukaran intelektual", vi: "Coi trọng trao đổi trí tuệ" },
        { ko: "독립적 관계", en: "Independent relationship", ja: "独立的関係", 'zh-CN': "独立关系", 'zh-TW': "獨立關係", id: "Hubungan mandiri", vi: "Mối quan hệ độc lập" }
      ],
      celebrities: [
        { ko: "일론 머스크", en: "Elon Musk", ja: "イーロン・マスク", 'zh-CN': "埃隆·马斯克", 'zh-TW': "伊隆·馬斯克", id: "Elon Musk", vi: "Elon Musk" },
        { ko: "니콜라 테슬라", en: "Nikola Tesla", ja: "ニコラ・テスラ", 'zh-CN': "尼古拉·特斯拉", 'zh-TW': "尼古拉·特斯拉", id: "Nikola Tesla", vi: "Nikola Tesla" }
      ]
    },
    INTP: {
      careers: [
        { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", id: "Peneliti", vi: "Nhà nghiên cứu" },
        { ko: "철학자", en: "Philosopher", ja: "哲学者", 'zh-CN': "哲学家", 'zh-TW': "哲學家", id: "Filsuf", vi: "Triết gia" },
        { ko: "프로그래머", en: "Programmer", ja: "プログラマー", 'zh-CN': "程序员", 'zh-TW': "程式設計師", id: "Programmer", vi: "Lập trình viên" },
        { ko: "분석가", en: "Analyst", ja: "アナリスト", 'zh-CN': "分析师", 'zh-TW': "分析師", id: "Analis", vi: "Nhà phân tích" },
        { ko: "수학자", en: "Mathematician", ja: "数学者", 'zh-CN': "数学家", 'zh-TW': "數學家", id: "Matematikawan", vi: "Nhà toán học" }
      ],
      dating: [
        { ko: "지적 교류 중시", en: "Values intellectual exchange", ja: "知的交流を重視", 'zh-CN': "重视智力交流", 'zh-TW': "重視智力交流", id: "Menghargai pertukaran intelektual", vi: "Coi trọng trao đổi trí tuệ" },
        { ko: "독립적 관계 선호", en: "Prefers independent relationship", ja: "独立的関係を好む", 'zh-CN': "喜欢独立关系", 'zh-TW': "喜歡獨立關係", id: "Lebih suka hubungan mandiri", vi: "Thích mối quan hệ độc lập" },
        { ko: "논리적 접근", en: "Logical approach", ja: "論理的アプローチ", 'zh-CN': "逻辑方法", 'zh-TW': "邏輯方法", id: "Pendekatan logis", vi: "Phương pháp logic" }
      ],
      celebrities: [
        { ko: "알버트 아인슈타인", en: "Albert Einstein", ja: "アルバート・アインシュタイン", 'zh-CN': "阿尔伯特·爱因斯坦", 'zh-TW': "阿爾伯特·愛因斯坦", id: "Albert Einstein", vi: "Albert Einstein" },
        { ko: "빌 게이츠", en: "Bill Gates", ja: "ビル・ゲイツ", 'zh-CN': "比尔·盖茨", 'zh-TW': "比爾·蓋茲", id: "Bill Gates", vi: "Bill Gates" }
      ]
    },
    INFJ: {
      careers: [
        { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
        { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
        { ko: "심리학자", en: "Psychologist", ja: "心理学者", 'zh-CN': "心理学家", 'zh-TW': "心理學家", id: "Psikolog", vi: "Nhà tâm lý học" },
        { ko: "사회복지사", en: "Social Worker", ja: "社会福祉士", 'zh-CN': "社会工作者", 'zh-TW': "社會工作者", id: "Pekerja Sosial", vi: "Nhân viên xã hội" },
        { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" }
      ],
      dating: [
        { ko: "깊고 의미있는 관계", en: "Deep and meaningful relationship", ja: "深く意味のある関係", 'zh-CN': "深度有意义的关系", 'zh-TW': "深度有意義的關係", id: "Hubungan mendalam dan bermakna", vi: "Mối quan hệ sâu sắc và có ý nghĩa" },
        { ko: "진심 어린 교감", en: "Sincere connection", ja: "真心の交流", 'zh-CN': "真诚的交流", 'zh-TW': "真誠的交流", id: "Koneksi tulus", vi: "Kết nối chân thành" },
        { ko: "영혼의 교감", en: "Spiritual connection", ja: "魂の交流", 'zh-CN': "精神交流", 'zh-TW': "精神交流", id: "Koneksi spiritual", vi: "Kết nối tinh thần" }
      ],
      celebrities: [
        { ko: "마틴 루터 킹", en: "Martin Luther King", ja: "マーティン・ルーサー・キング", 'zh-CN': "马丁·路德·金", 'zh-TW': "馬丁·路德·金", id: "Martin Luther King", vi: "Martin Luther King" },
        { ko: "넬슨 만델라", en: "Nelson Mandela", ja: "ネルソン・マンデラ", 'zh-CN': "纳尔逊·曼德拉", 'zh-TW': "納爾遜·曼德拉", id: "Nelson Mandela", vi: "Nelson Mandela" }
      ]
    }
  };

  // 해당 타입의 추가 데이터가 있으면 통합
  if (additionalData[result.type as keyof typeof additionalData]) {
    const additional = additionalData[result.type as keyof typeof additionalData];
    return {
      ...result,
      careers: additional.careers || result.careers || [],
      dating: additional.dating || result.dating || [],
      celebrities: additional.celebrities || result.celebrities || []
    };
  }

  return result;
}
