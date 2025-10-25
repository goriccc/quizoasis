export interface AdventurerQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      adventurer: number;
      cautious: number;
    };
  }[];
}

export interface AdventurerResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  strengths: Record<string, string>[];
  weaknesses: Record<string, string>[];
  score: Record<string, string>;
  advice: Record<string, string>;
  warningTitle: Record<string, string>;
  warningItems: Record<string, string[]>;
}

export const adventurerQuestions: AdventurerQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 식당이 오픈했다는 소식을 들었을 때?",
      en: "When you hear about a new restaurant opening?",
      ja: "新しいレストランがオープンしたというニュースを聞いた時？",
      'zh-CN': "听到新餐厅开业的消息时？",
      'zh-TW': "聽到新餐廳開業的消息時？",
      vi: "Khi nghe tin về nhà hàng mới khai trương?",
      id: "Ketika mendengar berita tentang restoran baru yang dibuka?"
    },
    options: [
      {
        text: {
          ko: "\"오늘 저녁 거기 가볼까?\" 바로 도전",
          en: "\"Should we go there tonight?\" Challenge immediately",
          ja: "「今夜あそこに行ってみようか？」すぐ挑戦",
          'zh-CN': "「今晚去那儿吧？」立即挑战",
          'zh-TW': "「今晚去那兒吧？」立即挑戰",
          vi: "\"Tối nay đến đó ăn nhé?\" Thử ngay",
          id: "\"Haruskah kita pergi ke sana malam ini?\" Tantang segera"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"리뷰 좀 나오면 가봐야지\" 관망",
          en: "\"I'll go after reviews come out\" Watch and wait",
          ja: "「レビューが出たら行こう」見守る",
          'zh-CN': "「等评论出来再去」观望",
          'zh-TW': "「等評論出來再去」觀望",
          vi: "\"Đợi có review rồi mới đi\" Quan sát",
          id: "\"Saya akan pergi setelah ulasan keluar\" Tonton dan tunggu"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 갑자기 \"이번 주말 여행 갈래?\" 하면?",
      en: "When a friend suddenly asks \"Want to go on a trip this weekend?\"",
      ja: "友達が急に「今週末旅行行かない？」と言ったら？",
      'zh-CN': "朋友突然说「这周末去旅行吧？」",
      'zh-TW': "朋友突然說「這週末去旅行吧？」",
      vi: "Khi bạn hỏi đột ngột \"Cuối tuần này đi du lịch không?\"",
      id: "Ketika teman tiba-tiba bertanya \"Ingin pergi liburan akhir pekan ini?\""
    },
    options: [
      {
        text: {
          ko: "\"좋아! 어디든!\" 즉시 결정",
          en: "\"Great! Anywhere!\" Decide immediately",
          ja: "「いいよ！どこでも！」即座に決定",
          'zh-CN': "「好啊！去哪儿都行！」立即决定",
          'zh-TW': "「好啊！去哪兒都行！」立即決定",
          vi: "\"Được! Đâu cũng được!\" Quyết định ngay",
          id: "\"Baik! Ke mana saja!\" Putuskan segera"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"어디? 얼마나? 일정 좀 봐야지\" 확인",
          en: "\"Where? How much? Need to check the schedule\" Confirm",
          ja: "「どこ？いくら？スケジュール見ないと」確認",
          'zh-CN': "「哪里？多少钱？得先看看日程」确认",
          'zh-TW': "「哪裡？多少錢？得先看看日程」確認",
          vi: "\"Ở đâu? Bao nhiêu? Phải xem lịch\" Xác nhận",
          id: "\"Ke mana? Berapa? Perlu periksa jadwal\" Konfirmasi"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "해보고 싶은 취미가 생겼을 때?",
      en: "When you want to try a new hobby?",
      ja: "やってみたい趣味ができた時？",
      'zh-CN': "有了想尝试的爱好时？",
      'zh-TW': "有了想嘗試的愛好時？",
      vi: "Khi có sở thích mới muốn thử?",
      id: "Ketika Anda ingin mencoba hobi baru?"
    },
    options: [
      {
        text: {
          ko: "바로 등록하거나 장비 구매",
          en: "Register immediately or buy equipment",
          ja: "すぐ登録するか装備を購入",
          'zh-CN': "立即报名或购买装备",
          'zh-TW': "立即報名或購買裝備",
          vi: "Đăng ký ngay hoặc mua thiết bị",
          id: "Daftar segera atau beli peralatan"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "일단 정보 찾아보고 고민",
          en: "First search for information and think",
          ja: "まず情報を探して悩む",
          'zh-CN': "先查资料再考虑",
          'zh-TW': "先查資料再考慮",
          vi: "Tìm hiểu thông tin rồi mới suy nghĩ",
          id: "Pertama cari informasi dan pertimbangkan"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "직장에서 새로운 프로젝트 기회가 왔을 때?",
      en: "When a new project opportunity comes at work?",
      ja: "職場で新しいプロジェクトの機会が来た時？",
      'zh-CN': "工作中来新项目机会时？",
      'zh-TW': "工作中來新項目機會時？",
      vi: "Khi có cơ hội dự án mới tại nơi làm việc?",
      id: "Ketika peluang proyek baru datang di tempat kerja?"
    },
    options: [
      {
        text: {
          ko: "\"해보겠습니다!\" 도전적으로",
          en: "\"I'll do it!\" Challenge confidently",
          ja: "「やってみます！」挑戦的に",
          'zh-CN': "「我来做！」挑战性地",
          'zh-TW': "「我來做！」挑戰性地",
          vi: "\"Tôi sẽ làm!\" Chấp nhận thử thách",
          id: "\"Saya akan melakukannya!\" Tantang dengan percaya diri"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"생각해보고 답드려도 될까요?\" 신중하게",
          en: "\"Can I think about it and get back to you?\" Carefully",
          ja: "「考えてからお返事してもいいですか？」慎重に",
          'zh-CN': "「我能考虑一下再回复吗？」谨慎地",
          'zh-TW': "「我能考慮一下再回覆嗎？」謹慎地",
          vi: "\"Để tôi suy nghĩ rồi trả lời sau nhé?\" Thận trọng",
          id: "\"Bisakah saya pertimbangkan dan memberikan jawaban nanti?\" Hati-hati"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "투자나 재테크 기회가 왔을 때?",
      en: "When an investment or financial opportunity comes?",
      ja: "投資や資産運用の機会が来た時？",
      'zh-CN': "有投资或理财机会时？",
      'zh-TW': "有投資或理財機會時？",
      vi: "Khi có cơ hội đầu tư hoặc quản lý tài chính?",
      id: "Ketika peluang investasi atau keuangan datang?"
    },
    options: [
      {
        text: {
          ko: "기회다 싶으면 과감하게 투자",
          en: "Invest boldly if it seems like an opportunity",
          ja: "チャンスだと思ったら大胆に投資",
          'zh-CN': "认为是机会就大胆投资",
          'zh-TW': "認為是機會就大膽投資",
          vi: "Nếu thấy là cơ hội thì đầu tư mạnh",
          id: "Investasi dengan berani jika terlihat seperti peluang"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "충분히 알아보고 안전하게",
          en: "Learn enough and do it safely",
          ja: "十分調べて安全に",
          'zh-CN': "充分了解后再安全进行",
          'zh-TW': "充分了解後再安全進行",
          vi: "Tìm hiểu kỹ rồi làm an toàn",
          id: "Pelajari cukup dan lakukan dengan aman"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "길을 잃었을 때?",
      en: "When you get lost?",
      ja: "道に迷った時？",
      'zh-CN': "迷路时？",
      'zh-TW': "迷路時？",
      vi: "Khi lạc đường?",
      id: "Ketika Anda tersesat?"
    },
    options: [
      {
        text: {
          ko: "일단 직감으로 방향 잡고 걸음",
          en: "Walk in an intuitive direction",
          ja: "とりあえず直感で方向を決めて歩く",
          'zh-CN': "凭直觉选方向走",
          'zh-TW': "憑直覺選方向走",
          vi: "Đi theo hướng theo trực giác",
          id: "Berjalan dengan arah intuitif"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "지도 확인하거나 검색해봄",
          en: "Check a map or search",
          ja: "地図を確認するか検索",
          'zh-CN': "查看地图或搜索",
          'zh-TW': "查看地圖或搜索",
          vi: "Xem bản đồ hoặc tìm kiếm",
          id: "Periksa peta atau cari"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "새로운 사람들과 만남에서?",
      en: "When meeting new people?",
      ja: "新しい人たちとの出会いで？",
      'zh-CN': "结识新朋友时？",
      'zh-TW': "結識新朋友時？",
      vi: "Khi gặp gỡ người mới?",
      id: "Ketika bertemu orang baru?"
    },
    options: [
      {
        text: {
          ko: "먼저 말 걸고 적극적으로",
          en: "Start talking first and actively",
          ja: "まず話しかけて積極的に",
          'zh-CN': "主动先说话",
          'zh-TW': "主動先說話",
          vi: "Chủ động bắt chuyện trước",
          id: "Mulai berbicara terlebih dahulu dan aktif"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "관찰하고 상황 파악 후 행동",
          en: "Observe and understand the situation before acting",
          ja: "観察して状況を把握してから行動",
          'zh-CN': "先观察和了解情况后再行动",
          'zh-TW': "先觀察和了解情況後再行動",
          vi: "Quan sát và nắm tình hình rồi mới hành động",
          id: "Amati dan pahami situasi sebelum bertindak"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "쇼핑할 때 마음에 드는 물건을 봤다면?",
      en: "When you see something you like while shopping?",
      ja: "買い物中に気に入った物を見つけたら？",
      'zh-CN': "购物时看到喜欢的东西？",
      'zh-TW': "購物時看到喜歡的東西？",
      vi: "Khi mua sắm thấy món đồ ưng ý?",
      id: "Ketika Anda melihat sesuatu yang Anda sukai saat berbelanja?"
    },
    options: [
      {
        text: {
          ko: "\"좋은데?\" 바로 구매",
          en: "\"Nice!\" Buy immediately",
          ja: "「いいね！」すぐ購入",
          'zh-CN': "「不错！」立即购买",
          'zh-TW': "「不錯！」立即購買",
          vi: "\"Đẹp nhỉ?\" Mua ngay",
          id: "\"Bagus!\" Beli segera"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"비교해보고...\" 여러 곳 확인",
          en: "\"Let me compare...\" Check several places",
          ja: "「比較して...」いろいろ確認",
          'zh-CN': "「比较一下...」多看几家",
          'zh-TW': "「比較一下...」多看幾家",
          vi: "\"So sánh xem...\" Kiểm tra nhiều nơi",
          id: "\"Bandingkan dulu...\" Periksa beberapa tempat"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "인생의 큰 결정 앞에서?",
      en: "Facing a big life decision?",
      ja: "人生の大きな決断の前に？",
      'zh-CN': "面对人生重大决定时？",
      'zh-TW': "面對人生重大決定時？",
      vi: "Khi đối mặt quyết định lớn trong đời?",
      id: "Menghadapi keputusan besar dalam hidup?"
    },
    options: [
      {
        text: {
          ko: "직감 믿고 빨리 결정",
          en: "Trust intuition and decide quickly",
          ja: "直感を信じて素早く決断",
          'zh-CN': "相信直觉快速决定",
          'zh-TW': "相信直覺快速決定",
          vi: "Tin vào trực giác và quyết định nhanh",
          id: "Percayai intuisi dan putuskan dengan cepat"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "장단점 분석하고 천천히",
          en: "Analyze pros and cons slowly",
          ja: "メリット・デメリットを分析してゆっくり",
          'zh-CN': "分析利弊后慢慢决定",
          'zh-TW': "分析利弊後慢慢決定",
          vi: "Phân tích ưu nhược điểm rồi quyết định từ từ",
          id: "Analisis pro dan kontra perlahan"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "새로운 기술이나 앱을 접했을 때?",
      en: "When you encounter new technology or an app?",
      ja: "新しい技術やアプリに触れた時？",
      'zh-CN': "接触新技术或应用时？",
      'zh-TW': "接觸新技術或應用時？",
      vi: "Khi tiếp xúc công nghệ hoặc ứng dụng mới?",
      id: "Ketika Anda menemukan teknologi atau aplikasi baru?"
    },
    options: [
      {
        text: {
          ko: "바로 다운받아서 써봄",
          en: "Download and try it immediately",
          ja: "すぐダウンロードして使ってみる",
          'zh-CN': "立即下载试用",
          'zh-TW': "立即下載試用",
          vi: "Tải về và dùng thử ngay",
          id: "Unduh dan coba segera"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "후기 보고 필요하면 사용",
          en: "Read reviews and use if needed",
          ja: "レビューを見て必要なら使う",
          'zh-CN': "看评论后按需使用",
          'zh-TW': "看評論後按需使用",
          vi: "Xem review rồi dùng nếu cần",
          id: "Baca ulasan dan gunakan jika diperlukan"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "모임에서 아무도 시도 안 한 것을 해야 할 때?",
      en: "When you need to do something no one has tried at a gathering?",
      ja: "集まりで誰も試したことがないことをしなければならない時？",
      'zh-CN': "聚会上需要做没人试过的事时？",
      'zh-TW': "聚會上需要做沒人試過的事時？",
      vi: "Khi trong buổi gặp mặt phải làm điều chưa ai thử?",
      id: "Ketika Anda perlu melakukan sesuatu yang belum pernah dicoba siapa pun dalam pertemuan?"
    },
    options: [
      {
        text: {
          ko: "\"제가 해볼게요!\" 자원",
          en: "\"I'll try it!\" Volunteer",
          ja: "「私がやってみます！」志願",
          'zh-CN': "「我来试试！」主动",
          'zh-TW': "「我來試試！」主動",
          vi: "\"Để tôi thử!\" Tình nguyện",
          id: "\"Saya akan mencobanya!\" Daftar"
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"다른 분 하시죠...\" 망설임",
          en: "\"Someone else should do it...\" Hesitate",
          ja: "「他の方が…」躊躇",
          'zh-CN': "「其他人来吧...」犹豫",
          'zh-TW': "「其他人來吧...」猶豫",
          vi: "\"Người khác làm đi...\" Ngần ngại",
          id: "\"Orang lain yang melakukannya...\" Ragu"
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 인생 모토에 가까운 것은?",
      en: "What's closer to your life motto?",
      ja: "あなたの人生のモットーに近いのは？",
      'zh-CN': "更接近你的人生格言的是？",
      'zh-TW': "更接近你的人生格言的是？",
      vi: "Điều nào gần với triết lý sống của bạn?",
      id: "Apa yang lebih dekat dengan motto hidup Anda?"
    },
    options: [
      {
        text: {
          ko: "\"후회하더라도 일단 해보자\"",
          en: "\"Let's try it even if we regret it\"",
          ja: "「後悔してもとりあえずやってみよう」",
          'zh-CN': "「即使后悔也要先试试」",
          'zh-TW': "「即使後悔也要先試試」",
          vi: "\"Dù có hối hận cũng cứ thử đã\"",
          id: "\"Mari coba meskipun kita menyesal\""
        },
        scores: { adventurer: 2, cautious: 0 }
      },
      {
        text: {
          ko: "\"신중하게, 실패 없이\"",
          en: "\"Carefully, without failure\"",
          ja: "「慎重に、失敗なく」",
          'zh-CN': "「谨慎地，不要失败」",
          'zh-TW': "「謹慎地，不要失敗」",
          vi: "\"Thận trọng, không được thất bại\"",
          id: "\"Hati-hati, tanpa kegagalan\""
        },
        scores: { adventurer: 0, cautious: 2 }
      }
    ]
  }
];

export const adventurerResults: AdventurerResult[] = [
  {
    type: "Type1",
    emoji: "🚀",
    title: {
      ko: "극한의 모험가",
      en: "Extreme Adventurer",
      ja: "極限の冒険家",
      'zh-CN': "极限冒险家",
      'zh-TW': "極限冒險家",
      vi: "Nhà Thám Hiểm Cực Đoan",
      id: "Petualang Ekstrem"
    },
    shortDescription: {
      ko: "\"생각보다 행동! 일단 저질러!\"",
      en: "\"Action over thought! Just do it!\"",
      ja: "「考えるより行動！とりあえずやってみろ！」",
      'zh-CN': "「行动胜过思考！先做了再说！」",
      'zh-TW': "「行動勝過思考！先做了再說！」",
      vi: "\"Hành động hơn suy nghĩ! Cứ làm đã!\"",
      id: "\"Aksi daripada pemikiran! Lakukan saja!\""
    },
    description: {
      ko: "극도로 모험적인 성향입니다. 생각하기 전에 행동하고, 위험을 즐깁니다. 새로운 것에 대한 두려움이 거의 없고 실패해도 \"경험이다\"라고 생각합니다. 충동적이고 즉흥적이며, 계획 없이 움직입니다. 에너지 넘치고 재미있지만 큰 실패나 위험에 빠질 수 있습니다.",
      en: "You have an extremely adventurous nature. You act before thinking and enjoy risks. You have almost no fear of new things and think of failures as \"experience.\" You're impulsive and spontaneous, moving without plans. Full of energy and fun, but you may face big failures or dangers.",
      ja: "極度に冒険的な傾向です。考える前に行動し、リスクを楽しみます。新しいことへの恐れがほとんどなく、失敗しても「経験だ」と考えます。衝動的で即興的、計画なしで動きます。エネルギーに満ちていて楽しいですが、大きな失敗や危険に陥る可能性があります。",
      'zh-CN': "极度冒险的性格。先行动后思考，享受风险。对新事物几乎没有恐惧，失败也视为&quot;经验&quot;。冲动且即兴，没有计划地行动。充满活力和趣味，但可能遭遇大失败或危险。",
      'zh-TW': "極度冒險的性格。先行動後思考，享受風險。對新事物幾乎沒有恐懼，失敗也視為「經驗」。衝動且即興，沒有計劃地行動。充滿活力和趣味，但可能遭遇大失敗或危險。",
      vi: "Bạn có tính cách phiêu lưu cực độ. Bạn hành động trước khi suy nghĩ và tận hưởng rủi ro. Bạn hầu như không sợ những điều mới và nghĩ thất bại là \"kinh nghiệm.\" Bạn bốc đồng và ngẫu hứng, di chuyển không có kế hoạch. Tràn đầy năng lượng và thú vị, nhưng bạn có thể gặp thất bại lớn hoặc nguy hiểm.",
      id: "Anda memiliki sifat petualang yang ekstrem. Anda bertindak sebelum berpikir dan menikmati risiko. Anda hampir tidak memiliki rasa takut akan hal-hal baru dan menganggap kegagalan sebagai \"pengalaman.\" Anda impulsif dan spontan, bergerak tanpa rencana. Penuh energi dan menyenangkan, tetapi Anda mungkin menghadapi kegagalan besar atau bahaya."
    },
    strengths: [
      {
        ko: "용기",
        en: "Courage",
        ja: "勇気",
        'zh-CN': "勇气",
        'zh-TW': "勇氣",
        vi: "Dũng cảm",
        id: "Keberanian"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        'zh-CN': "推进力",
        'zh-TW': "推進力",
        vi: "Động lực",
        id: "Dorongan"
      },
      {
        ko: "경험 풍부",
        en: "Rich experience",
        ja: "経験豊富",
        'zh-CN': "经验丰富",
        'zh-TW': "經驗豐富",
        vi: "Kinh nghiệm phong phú",
        id: "Pengalaman kaya"
      },
      {
        ko: "재미",
        en: "Fun",
        ja: "面白い",
        'zh-CN': "有趣",
        'zh-TW': "有趣",
        vi: "Thú vị",
        id: "Menyenangkan"
      }
    ],
    weaknesses: [
      {
        ko: "충동적",
        en: "Impulsive",
        ja: "衝動的",
        'zh-CN': "冲动",
        'zh-TW': "衝動",
        vi: "Bốc đồng",
        id: "Impulsif"
      },
      {
        ko: "위험 무시",
        en: "Ignore risks",
        ja: "リスク無視",
        'zh-CN': "忽视风险",
        'zh-TW': "忽視風險",
        vi: "Bỏ qua rủi ro",
        id: "Abaikan risiko"
      },
      {
        ko: "실패 많음",
        en: "Many failures",
        ja: "失敗多い",
        'zh-CN': "失败多",
        'zh-TW': "失敗多",
        vi: "Nhiều thất bại",
        id: "Banyak kegagalan"
      }
    ],
    score: {
      ko: "모험 100% / 신중 0%",
      en: "Adventure 100% / Cautious 0%",
      ja: "冒険100% / 慎重0%",
      'zh-CN': "冒险100% / 谨慎0%",
      'zh-TW': "冒險100% / 謹慎0%",
      vi: "Phiêu lưu 100% / Thận trọng 0%",
      id: "Petualangan 100% / Hati-hati 0%"
    },
    advice: {
      ko: "용기는 좋지만 최소한의 생각은 필요해요. \"일단 해보되, 최악의 경우도 생각하자\"!",
      en: "Courage is good, but you need minimal thinking. \"Let's try it, but also think about the worst case\"!",
      ja: "勇気は良いですが、最低限の考えは必要です。「とりあえずやってみるが、最悪のケースも考えよう」！",
      'zh-CN': "勇气很好，但需要最低限度的思考。「先试试，但也要考虑最坏情况」！",
      'zh-TW': "勇氣很好，但需要最低限度的思考。「先試試，但也要考慮最壞情況」！",
      vi: "Dũng cảm là tốt, nhưng bạn cần suy nghĩ tối thiểu. \"Hãy thử, nhưng cũng nghĩ về trường hợp xấu nhất\"!",
      id: "Keberanian itu baik, tetapi Anda perlu pemikiran minimal. \"Mari coba, tetapi juga pikirkan kasus terburuk\"!"
    },
    warningTitle: {
      ko: "위험 관리법",
      en: "Risk Management",
      ja: "リスク管理法",
      'zh-CN': "风险管理法",
      'zh-TW': "風險管理法",
      vi: "Phương pháp quản lý rủi ro",
      id: "Manajemen Risiko"
    },
    warningItems: {
      ko: ["큰 결정은 하루만 생각하기", "최악의 시나리오 한 번만 상상", "중요한 건 친구 조언 듣기", "감당 가능한 실패인지 확인"],
      en: ["Think about big decisions for just one day", "Imagine worst scenario only once", "Listen to friends' advice for important things", "Check if failure is manageable"],
      ja: ["大きな決断は1日だけ考える", "最悪のシナリオは一度だけ想像", "重要なことは友達のアドバイスを聞く", "耐えられる失敗か確認"],
      'zh-CN': ["大决定只思考一天", "最坏情况只想象一次", "重要的事听朋友建议", "确认失败是否可承受"],
      'zh-TW': ["大決定只思考一天", "最壞情況只想像一次", "重要的事聽朋友建議", "確認失敗是否可承受"],
      vi: ["Chỉ suy nghĩ về quyết định lớn trong một ngày", "Chỉ tưởng tượng kịch bản xấu nhất một lần", "Nghe lời khuyên của bạn bè cho việc quan trọng", "Kiểm tra xem thất bại có thể chịu đựng được không"],
      id: ["Pikirkan keputusan besar hanya satu hari", "Bayangkan skenario terburuk hanya sekali", "Dengarkan saran teman untuk hal penting", "Periksa apakah kegagalan dapat dikelola"]
    }
  },
  {
    type: "Type2",
    emoji: "🎢",
    title: {
      ko: "활발한 모험형",
      en: "Active Adventurer",
      ja: "活発な冒険型",
      'zh-CN': "活跃冒险型",
      'zh-TW': "活躍冒險型",
      vi: "Nhà Thám Hiểm Năng Động",
      id: "Petualang Aktif"
    },
    shortDescription: {
      ko: "\"도전이 즐거워! 생각보다 행동파\"",
      en: "\"Challenges are fun! Action over thought\"",
      ja: "「挑戦が楽しい！考えるより行動派」",
      'zh-CN': "「挑战很有趣！行动派胜过思考」",
      'zh-TW': "「挑戰很有趣！行動派勝過思考」",
      vi: "\" Chấp nhận thử thách rất vui! Hành động hơn suy nghĩ\"",
      id: "\"Tantangan itu menyenangkan! Aksi di atas pemikiran\""
    },
    description: {
      ko: "모험적이지만 최소한의 신중함은 있습니다. 새로운 것을 좋아하고 도전을 즐기지만, 완전히 무모하지는 않습니다. 직감을 믿되 기본 정보는 확인합니다. 실패를 두려워하지 않고 경험을 중시합니다. 균형잡힌 모험가로 가장 이상적인 모험 성향입니다.",
      en: "You're adventurous but have minimal caution. You like new things and enjoy challenges, but you're not completely reckless. You trust intuition but check basic information. You don't fear failure and value experience. You're a balanced adventurer, the most ideal adventurous tendency.",
      ja: "冒険的ですが、最低限の慎重さはあります。新しいことを好きで挑戦を楽しみますが、完全に無謀ではありません。直感を信じますが基本情報は確認します。失敗を恐れず経験を重視します。バランスの取れた冒険家で、最も理想的な冒険傾向です。",
      'zh-CN': "喜欢冒险但也有最低限度的谨慎。喜欢新事物并享受挑战，但并非完全鲁莽。相信直觉但会确认基本信息。不害怕失败并重视经验。是平衡的冒险家，是最理想的冒险倾向。",
      'zh-TW': "喜歡冒險但也有最低限度的謹慎。喜歡新事物並享受挑戰，但並非完全魯莽。相信直覺但會確認基本信息。不害怕失敗並重視經驗。是平衡的冒險家，是最理想的冒險傾向。",
      vi: "Bạn phiêu lưu nhưng có sự thận trọng tối thiểu. Bạn thích những điều mới và tận hưởng thử thách, nhưng không hoàn toàn liều lĩnh. Bạn tin vào trực giác nhưng kiểm tra thông tin cơ bản. Bạn không sợ thất bại và coi trọng kinh nghiệm. Bạn là nhà thám hiểm cân bằng, xu hướng phiêu lưu lý tưởng nhất.",
      id: "Anda petualang tetapi memiliki kehati-hatian minimal. Anda menyukai hal-hal baru dan menikmati tantangan, tetapi tidak sepenuhnya sembrono. Anda percaya pada intuisi tetapi memeriksa informasi dasar. Anda tidak takut kegagalan dan menghargai pengalaman. Anda adalah petualang seimbang, kecenderungan petualang yang paling ideal."
    },
    strengths: [
      {
        ko: "용기",
        en: "Courage",
        ja: "勇気",
        'zh-CN': "勇气",
        'zh-TW': "勇氣",
        vi: "Dũng cảm",
        id: "Keberanian"
      },
      {
        ko: "경험",
        en: "Experience",
        ja: "経験",
        'zh-CN': "经验",
        'zh-TW': "經驗",
        vi: "Kinh nghiệm",
        id: "Pengalaman"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        'zh-CN': "推进力",
        'zh-TW': "推進力",
        vi: "Động lực",
        id: "Dorongan"
      },
      {
        ko: "균형",
        en: "Balance",
        ja: "バランス",
        'zh-CN': "平衡",
        'zh-TW': "平衡",
        vi: "Cân bằng",
        id: "Keseimbangan"
      }
    ],
    weaknesses: [
      {
        ko: "가끔 충동적",
        en: "Sometimes impulsive",
        ja: "時々衝動的",
        'zh-CN': "有时冲动",
        'zh-TW': "有時衝動",
        vi: "Đôi khi bốc đồng",
        id: "Kadang impulsif"
      },
      {
        ko: "위험 과소평가",
        en: "Underestimate risks",
        ja: "リスク過小評価",
        'zh-CN': "低估风险",
        'zh-TW': "低估風險",
        vi: "Đánh giá thấp rủi ro",
        id: "Meremehkan risiko"
      }
    ],
    score: {
      ko: "모험 75% / 신중 25%",
      en: "Adventure 75% / Cautious 25%",
      ja: "冒険75% / 慎重25%",
      'zh-CN': "冒险75% / 谨慎25%",
      'zh-TW': "冒險75% / 謹慎25%",
      vi: "Phiêu lưu 75% / Thận trọng 25%",
      id: "Petualangan 75% / Hati-hati 25%"
    },
    advice: {
      ko: "완벽해요! 도전하되 생각도 하는 당신의 스타일이 최고입니다!",
      en: "Perfect! Your style of challenging while thinking is the best!",
      ja: "完璧です！挑戦しつつ考えるあなたのスタイルが最高です！",
      'zh-CN': "完美！在挑战同时思考的风格最棒！",
      'zh-TW': "完美！在挑戰同時思考的風格最棒！",
      vi: "Hoàn hảo! Phong cách của bạn vừa thử thách vừa suy nghĩ là tuyệt nhất!",
      id: "Sempurna! Gaya Anda menantang sambil berpikir adalah yang terbaik!"
    },
    warningTitle: {
      ko: "현재 유지법",
      en: "Maintenance Method",
      ja: "現在維持法",
      'zh-CN': "当前维持法",
      'zh-TW': "當前維持法",
      vi: "Phương pháp duy trì hiện tại",
      id: "Metode Pemeliharaan"
    },
    warningItems: {
      ko: ["도전 정신 계속 유지", "최소한의 정보 확인 습관", "경험에서 배우기", "안전장치는 마련하기"],
      en: ["Keep challenging spirit", "Habit of checking minimal information", "Learn from experience", "Set up safety measures"],
      ja: ["挑戦精神を維持", "最低限の情報確認の習慣", "経験から学ぶ", "安全装置を設置"],
      'zh-CN': ["保持挑战精神", "确认最低限度信息的习惯", "从经验中学习", "设置安全措施"],
      'zh-TW': ["保持挑戰精神", "確認最低限度信息的習慣", "從經驗中學習", "設置安全措施"],
      vi: ["Duy trì tinh thần thử thách", "Thói quen kiểm tra thông tin tối thiểu", "Học từ kinh nghiệm", "Thiết lập biện pháp an toàn"],
      id: ["Pertahankan semangat menantang", "Kebiasaan memeriksa informasi minimal", "Belajar dari pengalaman", "Siapkan tindakan keselamatan"]
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 중도형",
      en: "Balanced Moderate",
      ja: "バランスの取れた中庸型",
      'zh-CN': "平衡中庸型",
      'zh-TW': "平衡中庸型",
      vi: "Kiểu Trung Dung Cân Bằng",
      id: "Moderat Seimbang"
    },
    shortDescription: {
      ko: "\"때로는 모험, 때로는 신중! 상황 따라\"",
      en: "\"Sometimes adventure, sometimes cautious! Depends on situation\"",
      ja: "「時には冒険、時には慎重！状況次第」",
      'zh-CN': "「有时冒险，有时谨慎！看情况」",
      'zh-TW': "「有時冒險，有時謹慎！看情況」",
      vi: "\"Đôi khi phiêu lưu, đôi khi thận trọng! Tùy tình huống\"",
      id: "\"Kadang petualangan, kadang hati-hati! Tergantung situasi\""
    },
    description: {
      ko: "모험과 신중함의 완벽한 균형을 가졌습니다. 상황에 따라 유연하게 대처하며, 작은 일은 과감하게, 큰 일은 신중하게 접근합니다. 직감과 논리를 모두 활용하고, 위험과 안전 사이에서 적절히 선택합니다. 가장 현명하고 적응력 높은 타입입니다.",
      en: "You have perfect balance between adventure and caution. You deal flexibly according to situations, approaching small things boldly and big things carefully. You use both intuition and logic, choosing appropriately between risk and safety. You're the wisest and most adaptable type.",
      ja: "冒険と慎重さの完璧なバランスを持っています。状況に応じて柔軟に対処し、小さなことは大胆に、大きなことは慎重にアプローチします。直感と論理の両方を活用し、リスクと安全の間で適切に選択します。最も賢明で適応力の高いタイプです。",
      'zh-CN': "在冒险和谨慎之间达到完美平衡。根据情况灵活应对，小事大胆，大事谨慎。同时运用直觉和逻辑，在风险和安全之间适当选择。是最聪明和适应力最强的类型。",
      'zh-TW': "在冒險和謹慎之間達到完美平衡。根據情況靈活應對，小事大膽，大事謹慎。同時運用直覺和邏輯，在風險和安全之間適當選擇。是最聰明和適應力最強的類型。",
      vi: "Bạn có sự cân bằng hoàn hảo giữa phiêu lưu và thận trọng. Bạn xử lý linh hoạt theo tình huống, tiếp cận việc nhỏ một cách táo bạo và việc lớn một cách thận trọng. Bạn sử dụng cả trực giác và logic, chọn lựa phù hợp giữa rủi ro và an toàn. Bạn là kiểu thông minh và thích ứng nhất.",
      id: "Anda memiliki keseimbangan sempurna antara petualangan dan kehati-hatian. Anda menangani secara fleksibel sesuai situasi, mendekati hal-hal kecil dengan berani dan hal-hal besar dengan hati-hati. Anda menggunakan intuisi dan logika, memilih dengan tepat antara risiko dan keselamatan. Anda adalah tipe yang paling bijaksana dan paling mudah beradaptasi."
    },
    strengths: [
      {
        ko: "균형",
        en: "Balance",
        ja: "バランス",
        'zh-CN': "平衡",
        'zh-TW': "平衡",
        vi: "Cân bằng",
        id: "Keseimbangan"
      },
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        vi: "Linh hoạt",
        id: "Fleksibilitas"
      },
      {
        ko: "적응력",
        en: "Adaptability",
        ja: "適応力",
        'zh-CN': "适应力",
        'zh-TW': "適應力",
        vi: "Khả năng thích ứng",
        id: "Kemampuan beradaptasi"
      },
      {
        ko: "지혜",
        en: "Wisdom",
        ja: "知恵",
        'zh-CN': "智慧",
        'zh-TW': "智慧",
        vi: "Trí tuệ",
        id: "Kebijaksanaan"
      }
    ],
    weaknesses: [
      {
        ko: "때로 우유부단",
        en: "Sometimes indecisive",
        ja: "時々優柔不断",
        'zh-CN': "有时优柔寡断",
        'zh-TW': "有時優柔寡斷",
        vi: "Đôi khi do dự",
        id: "Kadang ragu-ragu"
      },
      {
        ko: "방향성 불명확",
        en: "Unclear direction",
        ja: "方向性不明確",
        'zh-CN': "方向性不明确",
        'zh-TW': "方向性不明確",
        vi: "Định hướng không rõ ràng",
        id: "Arah tidak jelas"
      }
    ],
    score: {
      ko: "모험 50% / 신중 50%",
      en: "Adventure 50% / Cautious 50%",
      ja: "冒険50% / 慎重50%",
      'zh-CN': "冒险50% / 谨慎50%",
      'zh-TW': "冒險50% / 謹慎50%",
      vi: "Phiêu lưu 50% / Thận trọng 50%",
      id: "Petualangan 50% / Hati-hati 50%"
    },
    advice: {
      ko: "이상적인 균형이에요! 상황 판단력을 계속 키워가세요!",
      en: "Perfect balance! Keep developing your situational judgment!",
      ja: "理想的なバランスです！状況判断力を継続的に育ててください！",
      'zh-CN': "理想的平衡！继续培养你的情境判断力！",
      'zh-TW': "理想的平衡！繼續培養你的情境判斷力！",
      vi: "Sự cân bằng lý tưởng! Hãy tiếp tục phát triển khả năng phán đoán tình huống!",
      id: "Keseimbangan ideal! Terus kembangkan penilaian situasional Anda!"
    },
    warningTitle: {
      ko: "균형 유지법",
      en: "Balance Maintenance",
      ja: "バランス維持法",
      'zh-CN': "平衡维持法",
      'zh-TW': "平衡維持法",
      vi: "Phương pháp duy trì cân bằng",
      id: "Pemeliharaan Keseimbangan"
    },
    warningItems: {
      ko: ["상황별 기준 정하기", "직관과 논리 모두 활용", "유연성 유지하기", "후회 없는 선택하기"],
      en: ["Set criteria for each situation", "Use both intuition and logic", "Maintain flexibility", "Make regret-free choices"],
      ja: ["状況別基準を設定", "直感と論理の両方を活用", "柔軟性を維持", "後悔のない選択"],
      'zh-CN': ["设定每种情况的标准", "同时运用直觉和逻辑", "保持灵活性", "做出无悔的选择"],
      'zh-TW': ["設定每種情況的標準", "同時運用直覺和邏輯", "保持靈活性", "做出無悔的選擇"],
      vi: ["Đặt tiêu chí cho từng tình huống", "Sử dụng cả trực giác và logic", "Duy trì sự linh hoạt", "Đưa ra lựa chọn không hối tiếc"],
      id: ["Tetapkan kriteria untuk setiap situasi", "Gunakan intuisi dan logika", "Pertahankan fleksibilitas", "Buat pilihan tanpa penyesalan"]
    }
  },
  {
    type: "Type4",
    emoji: "📋",
    title: {
      ko: "신중한 계획형",
      en: "Cautious Planner",
      ja: "慎重な計画型",
      'zh-CN': "谨慎计划型",
      'zh-TW': "謹慎計劃型",
      vi: "Kiểu Lập Kế Hoạch Thận Trọng",
      id: "Perencana Hati-hati"
    },
    shortDescription: {
      ko: "\"생각이 먼저! 준비된 도전\"",
      en: "\"Think first! Prepared challenge\"",
      ja: "「考えるのが先！準備された挑戦」",
      'zh-CN': "「先思考！有准备的挑战」",
      'zh-TW': "「先思考！有準備的挑戰」",
      vi: "\"Suy nghĩ trước! Thử thách có chuẩn bị\"",
      id: "\"Pikirkan dulu! Tantangan yang dipersiapkan\""
    },
    description: {
      ko: "신중하지만 도전을 완전히 포기하지는 않습니다. 새로운 것을 시도하되 충분히 준비하고 계획합니다. 위험을 최소화하려고 노력하고, 정보를 모은 후 결정합니다. 실패를 싫어하고 안전을 선호합니다. 안정적이지만 때로는 기회를 놓칠 수 있습니다.",
      en: "You're cautious but don't completely give up on challenges. You try new things but prepare and plan thoroughly. You try to minimize risks and decide after gathering information. You dislike failure and prefer safety. Stable but sometimes may miss opportunities.",
      ja: "慎重ですが、挑戦を完全に諦めません。新しいことを試しますが、十分に準備して計画します。リスクを最小化しようと努め、情報を集めてから決定します。失敗を嫌い、安全を好みます。安定していますが、時には機会を逃す可能性があります。",
      'zh-CN': "谨慎但不会完全放弃挑战。尝试新事物但会充分准备和计划。努力将风险最小化，收集信息后做决定。讨厌失败，偏好安全。稳定但有时可能错过机会。",
      'zh-TW': "謹慎但不會完全放棄挑戰。嘗試新事物但會充分準備和計劃。努力將風險最小化，收集信息後做決定。討厭失敗，偏好安全。穩定但有時可能錯過機會。",
      vi: "Bạn thận trọng nhưng không hoàn toàn từ bỏ thử thách. Bạn thử những điều mới nhưng chuẩn bị và lập kế hoạch kỹ lưỡng. Bạn cố gắng giảm thiểu rủi ro và quyết định sau khi thu thập thông tin. Bạn không thích thất bại và ưa thích an toàn. Ổn định nhưng đôi khi có thể bỏ lỡ cơ hội.",
      id: "Anda hati-hati tetapi tidak sepenuhnya menyerah pada tantangan. Anda mencoba hal-hal baru tetapi mempersiapkan dan merencanakan dengan matang. Anda mencoba meminimalkan risiko dan memutuskan setelah mengumpulkan informasi. Anda tidak menyukai kegagalan dan lebih suka keselamatan. Stabil tetapi kadang-kadang mungkin melewatkan peluang."
    },
    strengths: [
      {
        ko: "안정성",
        en: "Stability",
        ja: "安定性",
        'zh-CN': "稳定性",
        'zh-TW': "穩定性",
        vi: "Ổn định",
        id: "Stabilitas"
      },
      {
        ko: "준비성",
        en: "Preparation",
        ja: "準備性",
        'zh-CN': "准备性",
        'zh-TW': "準備性",
        vi: "Chuẩn bị",
        id: "Persiapan"
      },
      {
        ko: "실패 적음",
        en: "Few failures",
        ja: "失敗少ない",
        'zh-CN': "失败少",
        'zh-TW': "失敗少",
        vi: "Ít thất bại",
        id: "Sedikit kegagalan"
      }
    ],
    weaknesses: [
      {
        ko: "기회 놓침",
        en: "Missed opportunities",
        ja: "機会逃し",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        vi: "Bỏ lỡ cơ hội",
        id: "Kehilangan peluang"
      },
      {
        ko: "느림",
        en: "Slow",
        ja: "遅い",
        'zh-CN': "慢",
        'zh-TW': "慢",
        vi: "Chậm",
        id: "Lambat"
      },
      {
        ko: "과도한 걱정",
        en: "Excessive worry",
        ja: "過度な心配",
        'zh-CN': "过度担心",
        'zh-TW': "過度擔心",
        vi: "Lo lắng quá mức",
        id: "Kekhawatiran berlebihan"
      }
    ],
    score: {
      ko: "모험 25% / 신중 75%",
      en: "Adventure 25% / Cautious 75%",
      ja: "冒険25% / 慎重75%",
      'zh-CN': "冒险25% / 谨慎75%",
      'zh-TW': "冒險25% / 謹慎75%",
      vi: "Phiêu lưu 25% / Thận trọng 75%",
      id: "Petualangan 25% / Hati-hati 75%"
    },
    advice: {
      ko: "신중함은 좋지만 가끔은 직감도 믿어보세요. 완벽한 타이밍은 없어요!",
      en: "Caution is good, but sometimes trust your intuition too. There's no perfect timing!",
      ja: "慎重さは良いですが、時には直感も信じてください。完璧なタイミングはありません！",
      'zh-CN': "谨慎很好，但有时也要相信直觉。没有完美的时机！",
      'zh-TW': "謹慎很好，但有時也要相信直覺。沒有完美的時機！",
      vi: "Thận trọng là tốt, nhưng đôi khi hãy tin vào trực giác của bạn. Không có thời điểm hoàn hảo!",
      id: "Hati-hati itu baik, tetapi kadang-kadang percayai intuisi Anda juga. Tidak ada waktu yang sempurna!"
    },
    warningTitle: {
      ko: "도전 연습법",
      en: "Challenge Practice",
      ja: "挑戦練習法",
      'zh-CN': "挑战练习法",
      'zh-TW': "挑戰練習法",
      vi: "Phương pháp thực hành thử thách",
      id: "Praktik Tantangan"
    },
    warningItems: {
      ko: ["작은 것부터 즉흥적으로", "\"잘못되면 어쩌지\" 덜 생각하기", "실패도 경험이라 생각", "기회의 창 놓치지 않기"],
      en: ["Start with small things spontaneously", "Think less \"what if it goes wrong\"", "Think of failure as experience", "Don't miss opportunities"],
      ja: ["小さなことから即興的に", "「うまくいかなかったら」あまり考えない", "失敗も経験だと思う", "機会の窓を逃さない"],
      'zh-CN': ["从小事开始即兴行动", "少想「搞砸了怎么办」", "把失败当作经验", "不错过机会"],
      'zh-TW': ["從小事開始即興行動", "少想「搞砸了怎麼辦」", "把失敗當作經驗", "不錯過機會"],
      vi: ["Bắt đầu với những điều nhỏ một cách tự phát", "Ít nghĩ \"nếu sai thì sao\"", "Nghĩ thất bại là kinh nghiệm", "Không bỏ lỡ cơ hội"],
      id: ["Mulai dengan hal-hal kecil secara spontan", "Berpikir lebih sedikit \"bagaimana jika gagal\"", "Anggap kegagalan sebagai pengalaman", "Jangan lewatkan peluang"]
    }
  },
  {
    type: "Type5",
    emoji: "🛡️",
    title: {
      ko: "극도의 신중파",
      en: "Extreme Cautious",
      ja: "極度の慎重派",
      'zh-CN': "极度谨慎派",
      'zh-TW': "極度謹慎派",
      vi: "Người Cực Kỳ Thận Trọng",
      id: "Hati-hati Ekstrem"
    },
    shortDescription: {
      ko: "\"안전이 최우선! 생각하고 또 생각\"",
      en: "\"Safety first! Think and think again\"",
      ja: "「安全が最優先！考えて考えて考え」",
      'zh-CN': "「安全第一！想了又想」",
      'zh-TW': "「安全第一！想了又想」",
      vi: "\"An toàn là ưu tiên! Nghĩ đi nghĩ lại\"",
      id: "\"Keselamatan pertama! Pikir dan pikir lagi\""
    },
    description: {
      ko: "극도로 신중한 성향입니다. 모든 것을 여러 번 생각하고 확인합니다. 위험을 극도로 회피하고 새로운 것을 두려워합니다. 실패가 무섭고 안전과 안정을 최우선으로 합니다. 실수는 적지만 경험도 제한적이고 기회를 많이 놓칩니다.",
      en: "You have an extremely cautious tendency. You think and check everything multiple times. You avoid risks extremely and fear new things. You're afraid of failure and prioritize safety and stability. Few mistakes but limited experience and many missed opportunities.",
      ja: "極度に慎重な傾向です。すべてを何度も考えて確認します。リスクを極度に回避し、新しいことを恐れます。失敗が怖く、安全と安定を最優先にします。ミスは少ないですが、経験も限定的で機会を多く逃します。",
      'zh-CN': "极度谨慎的倾向。反复思考和确认一切。极力回避风险，害怕新事物。害怕失败，优先考虑安全和稳定。失误少但经验有限，错过很多机会。",
      'zh-TW': "極度謹慎的傾向。反覆思考和確認一切。極力迴避風險，害怕新事物。害怕失敗，優先考慮安全和穩定。失誤少但經驗有限，錯過很多機會。",
      vi: "Bạn có xu hướng cực kỳ thận trọng. Bạn suy nghĩ và kiểm tra mọi thứ nhiều lần. Bạn tránh rủi ro cực độ và sợ những điều mới. Bạn sợ thất bại và ưu tiên an toàn và ổn định. Ít sai sót nhưng kinh nghiệm hạn chế và bỏ lỡ nhiều cơ hội.",
      id: "Anda memiliki kecenderungan yang sangat hati-hati. Anda memikirkan dan memeriksa segalanya beberapa kali. Anda menghindari risiko secara ekstrem dan takut akan hal-hal baru. Anda takut gagal dan memprioritaskan keselamatan dan stabilitas. Sedikit kesalahan tetapi pengalaman terbatas dan banyak peluang terlewat."
    },
    strengths: [
      {
        ko: "안전",
        en: "Safety",
        ja: "安全",
        'zh-CN': "安全",
        'zh-TW': "安全",
        vi: "An toàn",
        id: "Keselamatan"
      },
      {
        ko: "실패 거의 없음",
        en: "Almost no failure",
        ja: "失敗ほとんどない",
        'zh-CN': "几乎没有失败",
        'zh-TW': "幾乎沒有失敗",
        vi: "Hầu như không thất bại",
        id: "Hampir tidak ada kegagalan"
      },
      {
        ko: "안정적",
        en: "Stable",
        ja: "安定",
        'zh-CN': "稳定",
        'zh-TW': "穩定",
        vi: "Ổn định",
        id: "Stabil"
      }
    ],
    weaknesses: [
      {
        ko: "기회 상실",
        en: "Lost opportunities",
        ja: "機会喪失",
        'zh-CN': "失去机会",
        'zh-TW': "失去機會",
        vi: "Mất cơ hội",
        id: "Kehilangan peluang"
      },
      {
        ko: "경험 부족",
        en: "Lack of experience",
        ja: "経験不足",
        'zh-CN': "经验不足",
        'zh-TW': "經驗不足",
        vi: "Thiếu kinh nghiệm",
        id: "Kurang pengalaman"
      },
      {
        ko: "성장 제한",
        en: "Limited growth",
        ja: "成長制限",
        'zh-CN': "成长受限",
        'zh-TW': "成長受限",
        vi: "Tăng trưởng hạn chế",
        id: "Pertumbuhan terbatas"
      }
    ],
    score: {
      ko: "모험 0% / 신중 100%",
      en: "Adventure 0% / Cautious 100%",
      ja: "冒険0% / 慎重100%",
      'zh-CN': "冒险0% / 谨慎100%",
      'zh-TW': "冒險0% / 謹慎100%",
      vi: "Phiêu lưu 0% / Thận trọng 100%",
      id: "Petualangan 0% / Hati-hati 100%"
    },
    advice: {
      ko: "안전도 좋지만 인생은 모험이에요. 작은 도전부터 시작해보세요!",
      en: "Safety is good, but life is an adventure. Start with small challenges!",
      ja: "安全も良いですが、人生は冒険です。小さな挑戦から始めてください！",
      'zh-CN': "安全很好，但人生就是冒险。从小挑战开始！",
      'zh-TW': "安全很好，但人生就是冒險。從小挑戰開始！",
      vi: "An toàn là tốt, nhưng cuộc sống là một cuộc phiêu lưu. Hãy bắt đầu với những thử thách nhỏ!",
      id: "Keselamatan itu baik, tetapi hidup adalah petualangan. Mulai dengan tantangan kecil!"
    },
    warningTitle: {
      ko: "변화 시작하기",
      en: "Starting Change",
      ja: "変化を始める",
      'zh-CN': "开始改变",
      'zh-TW': "開始改變",
      vi: "Bắt đầu thay đổi",
      id: "Memulai Perubahan"
    },
    warningItems: {
      ko: ["작은 새로운 시도 (새 메뉴, 새 길)", "\"최악\"이 생각만큼 나쁘지 않음 깨닫기", "후회하는 것과 실패하는 것 비교", "안전지대 조금씩 벗어나기"],
      en: ["Try small new things (new menu, new route)", "Realize 'worst' isn't as bad as you think", "Compare regretting vs failing", "Gradually leave comfort zone"],
      ja: ["小さな新しい試み（新しいメニュー、新しい道）", "「最悪」が思うほど悪くないと気づく", "後悔することと失敗することの比較", "安全地帯を少しずつ離れる"],
      'zh-CN': ["尝试小新事物（新菜单、新路线）", "意识到「最坏」没那么糟", "比较后悔和失败", "逐渐走出舒适区"],
      'zh-TW': ["嘗試小新事物（新菜單、新路線）", "意識到「最壞」沒那麼糟", "比較後悔和失敗", "逐漸走出舒適區"],
      vi: ["Thử những điều mới nhỏ (thực đơn mới, con đường mới)", "Nhận ra 'tệ nhất' không tệ như bạn nghĩ", "So sánh hối tiếc và thất bại", "Dần rời khỏi vùng an toàn"],
      id: ["Coba hal-hal baru kecil (menu baru, rute baru)", "Sadari 'terburuk' tidak seburuk yang Anda pikirkan", "Bandingkan menyesal vs gagal", "Secara bertahap tinggalkan zona nyaman"]
    }
  }
];

export function calculateAdventurerResult(answers: any[]): string {
  let adventurerScore = 0;
  let cautiousScore = 0;
  
  answers.forEach(answer => {
    if (answer.adventurer) adventurerScore += answer.adventurer;
    if (answer.cautious) cautiousScore += answer.cautious;
  });
  
  // 총 24점 만점 (모험 vs 신중)
  // 22-24점 모험: Type 1 (극한의 모험가)
  // 16-20점 모험: Type 2 (활발한 모험형)
  // 10-14점: Type 3 (균형잡힌 중도형)
  // 4-8점 신중: Type 4 (신중한 계획형)
  // 0-2점 신중: Type 5 (극도의 신중파)
  
  if (adventurerScore >= 22) return "Type1";
  if (adventurerScore >= 16) return "Type2";
  if (adventurerScore >= 10) return "Type3";
  if (adventurerScore >= 4) return "Type4";
  return "Type5";
}

