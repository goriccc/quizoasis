export interface Phase2TeaTherapyQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2TeaTherapyResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  recommendedTeas: Record<string, string>; // 추천 차
  effects: Record<string, string>; // 효능
  teaFoods: Record<string, string>; // 어울리는 티푸드
}

export const phase2TeaTherapyQuestions: Phase2TeaTherapyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "당신이 가장 좋아하는 날씨와 분위기는?",
      en: "What is your favorite weather and atmosphere?",
      ja: "あなたが最も好きな天気と雰囲気は？",
      "zh-CN": "你最喜欢的天气和氛围是什么？",
      "zh-TW": "你最喜歡的天氣和氛圍是什麼？",
      vi: "Thời tiết và không khí bạn yêu thích nhất là gì?",
      id: "Cuaca dan suasana apa yang paling Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "비 온 뒤 맑게 갠 숲속의 상쾌함",
          en: "The freshness of a forest after rain clears up",
          ja: "雨上がりの清々しい森の中",
          "zh-CN": "雨后放晴的森林清新",
          "zh-TW": "雨後放晴的森林清新",
          vi: "Sự tươi mát của rừng sau cơn mưa",
          id: "Kesegaran hutan setelah hujan reda"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "햇살이 따스하게 내리쬐는 오후의 나른함",
          en: "The lazy afternoon with warm sunshine",
          ja: "温かい日差しが降り注ぐ午後ののんびり感",
          "zh-CN": "阳光温暖的慵懒下午",
          "zh-TW": "陽光明媚的慵懶下午",
          vi: "Buổi chiều lười biếng với ánh nắng ấm áp",
          id: "Sore yang malas dengan sinar matahari hangat"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "선선한 바람이 부는 가을 저녁의 센치함",
          en: "The sentimental autumn evening with cool breeze",
          ja: "爽やかな風が吹く秋の夕べのセンチメンタルな雰囲気",
          "zh-CN": "凉风习习的秋夜感伤",
          "zh-TW": "涼風習習的秋夜感傷",
          vi: "Buổi tối mùa thu đầy cảm xúc với gió mát",
          id: "Suasana sentimental sore musim gugur dengan angin sejuk"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "눈이 소복이 쌓인 겨울밤의 고요함",
          en: "The tranquility of a winter night with piled snow",
          ja: "雪が積もった静かな冬の夜",
          "zh-CN": "积雪的冬夜宁静",
          "zh-TW": "積雪的冬夜寧靜",
          vi: "Sự yên tĩnh của đêm đông với tuyết phủ",
          id: "Ketenangan malam musim dingin dengan salju menumpuk"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "복잡한 문제가 생겼을 때 해결 방식은?",
      en: "How do you solve complex problems?",
      ja: "複雑な問題が生じたときの解決方法は？",
      "zh-CN": "遇到复杂问题时如何解决？",
      "zh-TW": "遇到複雜問題時如何解決？",
      vi: "Bạn giải quyết vấn đề phức tạp như thế nào?",
      id: "Bagaimana cara Anda menyelesaikan masalah yang kompleks?"
    },
    options: [
      {
        text: {
          ko: "냉철하게 분석해서 논리적으로 해결책을 찾는다",
          en: "Analyze coolly and find solutions logically",
          ja: "冷静に分析して論理的に解決策を見つける",
          "zh-CN": "冷静分析，逻辑地寻找解决方案",
          "zh-TW": "冷靜分析，邏輯地尋找解決方案",
          vi: "Phân tích lạnh lùng và tìm giải pháp một cách logic",
          id: "Menganalisis dengan dingin dan menemukan solusi secara logis"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "주변 사람들에게 조언을 구하고 대화로 푼다",
          en: "Seek advice from people around and solve through conversation",
          ja: "周りの人に助言を求めて対話で解決する",
          "zh-CN": "向周围的人寻求建议，通过对话解决",
          "zh-TW": "向周圍的人尋求建議，通過對話解決",
          vi: "Tìm lời khuyên từ những người xung quanh và giải quyết qua trò chuyện",
          id: "Meminta saran dari orang sekitar dan menyelesaikan melalui percakapan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "일단 한숨 자거나 쉬면서 머리를 식힌다",
          en: "Take a nap or rest first to clear my mind",
          ja: "まず一休みしたり休んで頭を冷やす",
          "zh-CN": "先小睡或休息一下，让头脑冷静",
          "zh-TW": "先小睡或休息一下，讓頭腦冷靜",
          vi: "Nghỉ ngơi hoặc ngủ một giấc ngắn để làm đầu óc tỉnh táo",
          id: "Istirahat atau tidur sejenak terlebih dahulu untuk menenangkan pikiran"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "직관에 맡기고 내가 하고 싶은 대로 결정한다",
          en: "Leave it to intuition and decide as I want",
          ja: "直感に任せて自分がしたいように決める",
          "zh-CN": "交给直觉，按自己的意愿决定",
          "zh-TW": "交給直覺，按自己的意願決定",
          vi: "Để cho trực giác quyết định và làm theo ý muốn",
          id: "Mempercayakan pada intuisi dan memutuskan sesuai keinginan saya"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "가장 선호하는 향기는?",
      en: "What is your preferred scent?",
      ja: "最も好む香りは？",
      "zh-CN": "你最喜欢的香味是什么？",
      "zh-TW": "你最喜歡的香味是什麼？",
      vi: "Mùi hương bạn ưa thích nhất là gì?",
      id: "Aroma apa yang paling Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "코가 뻥 뚫리는 시원한 민트나 풀 냄새",
          en: "Cool mint or grass scent that clears the nose",
          ja: "鼻がすっきりする爽やかなミントや草の香り",
          "zh-CN": "清爽的薄荷或青草香味，让人鼻子通畅",
          "zh-TW": "清爽的薄荷或青草香味，讓人鼻子通暢",
          vi: "Mùi bạc hà hoặc cỏ mát lạnh làm thông mũi",
          id: "Aroma mint atau rumput yang segar dan melegakan hidung"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "달콤하고 상큼한 과일이나 꽃향기",
          en: "Sweet and fresh fruit or floral scent",
          ja: "甘くて爽やかな果物や花の香り",
          "zh-CN": "甜美清新的水果或花香",
          "zh-TW": "甜美清新的水果或花香",
          vi: "Mùi hoa quả hoặc hoa ngọt ngào và tươi mát",
          id: "Aroma buah atau bunga yang manis dan segar"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "은은하고 그윽한 나무 냄새나 흙 내음",
          en: "Subtle and profound woody or earthy scent",
          ja: "上品で深みのある木の香りや土の香り",
          "zh-CN": "淡雅深沉的木香或泥土香",
          "zh-TW": "淡雅深沉的木香或泥土香",
          vi: "Mùi gỗ hoặc đất tinh tế và sâu lắng",
          id: "Aroma kayu atau tanah yang halus dan mendalam"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "마음이 편안해지는 라벤더나 파우더 향",
          en: "Calming lavender or powder scent",
          ja: "心が落ち着くラベンダーやパウダーの香り",
          "zh-CN": "令人放松的薰衣草或粉香",
          "zh-TW": "令人放鬆的薰衣草或粉香",
          vi: "Mùi oải hương hoặc phấn làm tâm trí thư giãn",
          id: "Aroma lavender atau bedak yang menenangkan"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "주말에 카페에 간다면 주로 하는 일은?",
      en: "What do you usually do when you go to a café on weekends?",
      ja: "週末にカフェに行くなら主に何をしますか？",
      "zh-CN": "周末去咖啡馆时你主要做什么？",
      "zh-TW": "週末去咖啡館時你主要做什麼？",
      vi: "Bạn thường làm gì khi đi cà phê vào cuối tuần?",
      id: "Apa yang biasanya Anda lakukan saat pergi ke kafe di akhir pekan?"
    },
    options: [
      {
        text: {
          ko: "밀린 업무를 처리하거나 자기계발 공부를 한다",
          en: "Handle pending work or study for self-development",
          ja: "溜まった業務を処理したり自己啓発の勉強をする",
          "zh-CN": "处理堆积的工作或进行自我提升学习",
          "zh-TW": "處理堆積的工作或進行自我提升學習",
          vi: "Xử lý công việc tồn đọng hoặc học tập phát triển bản thân",
          id: "Menangani pekerjaan yang tertunda atau belajar pengembangan diri"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "친구와 시간 가는 줄 모르고 수다를 떤다",
          en: "Chat with friends without noticing time passing",
          ja: "友達と時間が経つのも忘れておしゃべりをする",
          "zh-CN": "和朋友聊天，忘记时间流逝",
          "zh-TW": "和朋友聊天，忘記時間流逝",
          vi: "Trò chuyện với bạn bè mà không để ý thời gian trôi qua",
          id: "Mengobrol dengan teman tanpa menyadari waktu berlalu"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "창밖을 멍하니 바라보며 사색에 잠긴다",
          en: "Gaze out the window blankly and fall into contemplation",
          ja: "窓の外をぼんやり見つめて思索にふける",
          "zh-CN": "茫然地望着窗外，陷入沉思",
          "zh-TW": "茫然地望著窗外，陷入沉思",
          vi: "Nhìn ra cửa sổ một cách vô định và chìm vào suy tư",
          id: "Memandang keluar jendela dengan kosong dan tenggelam dalam kontemplasi"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "읽고 싶었던 책을 읽거나 다이어리를 쓴다",
          en: "Read a book I wanted to read or write in a diary",
          ja: "読みたかった本を読んだり日記を書く",
          "zh-CN": "读想读的书或写日记",
          "zh-TW": "讀想讀的書或寫日記",
          vi: "Đọc cuốn sách muốn đọc hoặc viết nhật ký",
          id: "Membaca buku yang ingin dibaca atau menulis buku harian"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신의 업무/공부 스타일은?",
      en: "What is your work/study style?",
      ja: "あなたの仕事・勉強スタイルは？",
      "zh-CN": "你的工作/学习风格是什么？",
      "zh-TW": "你的工作/學習風格是什麼？",
      vi: "Phong cách làm việc/học tập của bạn là gì?",
      id: "Apa gaya kerja/belajar Anda?"
    },
    options: [
      {
        text: {
          ko: "빠르고 정확하게! 효율성을 최우선으로 한다",
          en: "Fast and accurate! Prioritize efficiency",
          ja: "速く正確に！効率を最優先にする",
          "zh-CN": "快速准确！优先考虑效率",
          "zh-TW": "快速準確！優先考慮效率",
          vi: "Nhanh và chính xác! Ưu tiên hiệu quả",
          id: "Cepat dan akurat! Memprioritaskan efisiensi"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "팀원들과 협력하며 으쌰으쌰 하는 분위기를 만든다",
          en: "Collaborate with team members and create a cheering atmosphere",
          ja: "チームメンバーと協力して盛り上げる雰囲気を作る",
          "zh-CN": "与团队成员合作，营造加油打气的氛围",
          "zh-TW": "與團隊成員合作，營造加油打氣的氛圍",
          vi: "Hợp tác với các thành viên nhóm và tạo không khí cổ vũ",
          id: "Berkolaborasi dengan anggota tim dan menciptakan suasana yang semangat"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "나만의 속도로 꼼꼼하고 차분하게 진행한다",
          en: "Proceed carefully and calmly at my own pace",
          ja: "自分のペースで丁寧に冷静に進める",
          "zh-CN": "以自己的节奏仔细冷静地进行",
          "zh-TW": "以自己的節奏仔細冷靜地進行",
          vi: "Tiến hành cẩn thận và bình tĩnh theo nhịp độ của riêng mình",
          id: "Melanjutkan dengan hati-hati dan tenang sesuai kecepatan sendiri"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "번뜩이는 아이디어로 창의적인 결과물을 만든다",
          en: "Create creative results with brilliant ideas",
          ja: "ひらめくアイデアで創造的な結果を作る",
          "zh-CN": "用灵光一闪的想法创造创意成果",
          "zh-TW": "用靈光一閃的想法創造創意成果",
          vi: "Tạo ra kết quả sáng tạo với những ý tưởng xuất sắc",
          id: "Menciptakan hasil kreatif dengan ide-ide cemerlang"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구가 고민 상담을 해올 때 당신의 반응은?",
      en: "How do you react when a friend comes to you for advice?",
      ja: "友達が相談してきたときのあなたの反応は？",
      "zh-CN": "朋友向你咨询烦恼时你的反应是什么？",
      "zh-TW": "朋友向你諮詢煩惱時你的反應是什麼？",
      vi: "Bạn phản ứng thế nào khi bạn bè đến tư vấn?",
      id: "Bagaimana reaksi Anda ketika teman datang untuk konsultasi?"
    },
    options: [
      {
        text: {
          ko: "\"그래서 결론이 뭐야?\" 현실적인 해결책을 준다",
          en: "\"So what's the conclusion?\" Give practical solutions",
          ja: "「だから結論は何？」現実的な解決策を与える",
          "zh-CN": "\"那么结论是什么？\"提供实际的解决方案",
          "zh-TW": "\"那麼結論是什麼？\"提供實際的解決方案",
          vi: "\"Vậy kết luận là gì?\" Đưa ra giải pháp thực tế",
          id: "\"Jadi kesimpulannya apa?\" Memberikan solusi praktis"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"헐 진짜? 너무 속상했겠다!\" 폭풍 리액션과 공감",
          en: "\"Oh really? That must have been so upsetting!\" Storm reaction and empathy",
          ja: "「えっ本当？すごく辛かっただろう！」嵐のような反応と共感",
          "zh-CN": "\"哦真的吗？那一定很伤心！\"强烈反应和共情",
          "zh-TW": "\"哦真的嗎？那一定很傷心！\"強烈反應和共情",
          vi: "\"Ồ thật sao? Chắc bạn buồn lắm!\" Phản ứng dữ dội và đồng cảm",
          id: "\"Oh benar? Pasti sangat menyedihkan!\" Reaksi besar dan empati"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"그랬구나...\" 조용히 들어주며 따뜻한 차를 건넨다",
          en: "\"I see...\" Listen quietly and offer warm tea",
          ja: "「そうだったの…」静かに聞いて温かいお茶を差し出す",
          "zh-CN": "\"原来如此...\"安静地倾听并递上热茶",
          "zh-TW": "\"原來如此...\"安靜地傾聽並遞上熱茶",
          vi: "\"Ra là thế...\" Lắng nghe yên lặng và mời trà ấm",
          id: "\"Begitu rupanya...\" Mendengarkan dengan tenang dan menawarkan teh hangat"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"나라면 이렇게 할 것 같아.\" 내 경험을 이야기해 준다",
          en: "\"If it were me, I would do this.\" Share my experience",
          ja: "「私ならこうすると思う」自分の経験を話してあげる",
          "zh-CN": "\"如果是我，我会这样做。\"分享我的经验",
          "zh-TW": "\"如果是我，我會這樣做。\"分享我的經驗",
          vi: "\"Nếu là tôi, tôi sẽ làm thế này.\" Chia sẻ kinh nghiệm của mình",
          id: "\"Kalau saya, saya akan melakukan ini.\" Berbagi pengalaman saya"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "스트레스를 푸는 나만의 방법은?",
      en: "What is your way to relieve stress?",
      ja: "ストレスを解消するあなたなりの方法は？",
      "zh-CN": "你缓解压力的方法是什么？",
      "zh-TW": "你緩解壓力的方法是什麼？",
      vi: "Cách bạn giải tỏa căng thẳng là gì?",
      id: "Apa cara Anda untuk menghilangkan stres?"
    },
    options: [
      {
        text: {
          ko: "땀 흘리는 운동이나 매운 음식 먹기",
          en: "Exercise that makes me sweat or eat spicy food",
          ja: "汗をかく運動や辛いものを食べる",
          "zh-CN": "做流汗的运动或吃辛辣食物",
          "zh-TW": "做流汗的運動或吃辛辣食物",
          vi: "Tập thể dục ra mồ hôi hoặc ăn đồ cay",
          id: "Berolahraga sampai berkeringat atau makan makanan pedas"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "맛집 탐방이나 쇼핑하러 가기",
          en: "Explore good restaurants or go shopping",
          ja: "美味しい店巡りやショッピングに行く",
          "zh-CN": "探索美食店或去购物",
          "zh-TW": "探索美食店或去購物",
          vi: "Khám phá nhà hàng ngon hoặc đi mua sắm",
          id: "Menjelajahi restoran enak atau pergi berbelanja"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "따뜻한 물에 목욕하거나 숙면 취하기",
          en: "Take a warm bath or get a good night's sleep",
          ja: "温かいお風呂に入るかしっかり眠る",
          "zh-CN": "洗热水澡或好好睡一觉",
          "zh-TW": "洗熱水澡或好好睡一覺",
          vi: "Tắm nước ấm hoặc ngủ ngon giấc",
          id: "Mandi air hangat atau tidur nyenyak"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "좋아하는 영화를 보거나 음악 감상하기",
          en: "Watch my favorite movie or listen to music",
          ja: "好きな映画を見たり音楽を楽しむ",
          "zh-CN": "看喜欢的电影或听音乐",
          "zh-TW": "看喜歡的電影或聽音樂",
          vi: "Xem phim yêu thích hoặc nghe nhạc",
          id: "Menonton film favorit atau mendengarkan musik"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 이상적인 휴식은?",
      en: "What is your ideal rest?",
      ja: "あなたが考える理想的な休息は？",
      "zh-CN": "你认为理想的休息是什么？",
      "zh-TW": "你認為理想的休息是什麼？",
      vi: "Nghỉ ngơi lý tưởng của bạn là gì?",
      id: "Apa istirahat ideal menurut Anda?"
    },
    options: [
      {
        text: {
          ko: "새로운 에너지를 충전하는 활기찬 활동",
          en: "Vigorous activities that recharge new energy",
          ja: "新しいエネルギーを充電する活気のある活動",
          "zh-CN": "充满活力的活动，重新充电新能量",
          "zh-TW": "充滿活力的活動，重新充電新能量",
          vi: "Hoạt động sôi động giúp nạp năng lượng mới",
          id: "Aktivitas yang penuh semangat untuk mengisi ulang energi baru"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "사랑하는 사람들과 함께 웃고 떠드는 시간",
          en: "Time to laugh and chat with loved ones",
          ja: "愛する人たちと一緒に笑っておしゃべりする時間",
          "zh-CN": "与爱的人一起笑和聊天的时光",
          "zh-TW": "與愛的人一起笑和聊天的時光",
          vi: "Thời gian cười đùa và trò chuyện với người thân yêu",
          id: "Waktu tertawa dan mengobrol bersama orang-orang tercinta"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "아무것도 안 하고 격렬하게 쉬는 시간",
          en: "Time to rest intensely without doing anything",
          ja: "何もしないで激しく休む時間",
          "zh-CN": "什么都不做，激烈休息的时间",
          "zh-TW": "什麼都不做，激烈休息的時間",
          vi: "Thời gian nghỉ ngơi mãnh liệt mà không làm gì cả",
          id: "Waktu untuk beristirahat dengan intens tanpa melakukan apa pun"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "방해받지 않고 온전히 나에게 집중하는 시간",
          en: "Time to focus entirely on myself without disturbance",
          ja: "邪魔されずに完全に自分に集中する時間",
          "zh-CN": "不受干扰，完全专注于自己的时间",
          "zh-TW": "不受干擾，完全專注於自己的時間",
          vi: "Thời gian tập trung hoàn toàn vào bản thân mà không bị quấy rầy",
          id: "Waktu untuk fokus sepenuhnya pada diri sendiri tanpa gangguan"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "누군가에게 듣고 싶은 칭찬은?",
      en: "What compliment would you want to hear?",
      ja: "誰かから聞きたい褒め言葉は？",
      "zh-CN": "你想听到的赞美是什么？",
      "zh-TW": "你想聽到的讚美是什麼？",
      vi: "Lời khen bạn muốn nghe là gì?",
      id: "Pujian apa yang ingin Anda dengar?"
    },
    options: [
      {
        text: {
          ko: "\"너 진짜 똑똑하다. 일 처리 확실해\"",
          en: "\"You're really smart. You handle things reliably\"",
          ja: "「あなた本当に頭がいい。仕事の処理が確実だね」",
          "zh-CN": "\"你真聪明。处理事情很可靠\"",
          "zh-TW": "\"你真聰明。處理事情很可靠\"",
          vi: "\"Bạn thật thông minh. Xử lý công việc rất đáng tin cậy\"",
          id: "\"Anda benar-benar pintar. Anda menangani hal-hal dengan andal\""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"너랑 있으면 기분이 좋아져. 비타민 같아\"",
          en: "\"I feel good when I'm with you. You're like a vitamin\"",
          ja: "「あなたといると気分が良くなる。ビタミンのようだ」",
          "zh-CN": "\"和你在一起心情会变好。你像维生素一样\"",
          "zh-TW": "\"和你在一起心情會變好。你像維生素一樣\"",
          vi: "\"Ở bên bạn tôi cảm thấy tốt. Bạn như vitamin vậy\"",
          id: "\"Saya merasa baik ketika bersama Anda. Anda seperti vitamin\""
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "\"너는 참 마음이 따뜻하고 편안해\"",
          en: "\"You have such a warm and comfortable heart\"",
          ja: "「あなたは本当に心が温かくて心地よい」",
          "zh-CN": "\"你的心真温暖舒适\"",
          "zh-TW": "\"你的心真溫暖舒適\"",
          vi: "\"Bạn có trái tim ấm áp và thoải mái\"",
          id: "\"Anda memiliki hati yang hangat dan nyaman\""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"너는 분위기가 있어. 매력적이야\"",
          en: "\"You have atmosphere. You're charming\"",
          ja: "「あなたは雰囲気がある。魅力的だ」",
          "zh-CN": "\"你很有氛围感。你很有魅力\"",
          "zh-TW": "\"你很有氛圍感。你很有魅力\"",
          vi: "\"Bạn có không khí. Bạn rất quyến rũ\"",
          id: "\"Anda memiliki suasana. Anda menarik\""
        },
        types: ["Type2"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "오늘 점심, 디저트를 고른다면?",
      en: "If you were to choose dessert for lunch today?",
      ja: "今日の昼食、デザートを選ぶなら？",
      "zh-CN": "如果今天午餐选择甜点？",
      "zh-TW": "如果今天午餐選擇甜點？",
      vi: "Nếu bạn chọn món tráng miệng cho bữa trưa hôm nay?",
      id: "Jika Anda memilih makanan penutup untuk makan siang hari ini?"
    },
    options: [
      {
        text: {
          ko: "깔끔한 아이스 셔벗이나 젤라또",
          en: "Clean ice sherbet or gelato",
          ja: "さっぱりしたアイスシャーベットやジェラート",
          "zh-CN": "清爽的冰沙或意式冰淇淋",
          "zh-TW": "清爽的冰沙或義式冰淇淋",
          vi: "Sherbet đá hoặc gelato sạch sẽ",
          id: "Sherbet es yang bersih atau gelato"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "화려한 과일 타르트나 마카롱",
          en: "Colorful fruit tart or macaron",
          ja: "華やかなフルーツタルトやマカロン",
          "zh-CN": "华丽的水果挞或马卡龙",
          "zh-TW": "華麗的水果塔或馬卡龍",
          vi: "Tart trái cây sặc sỡ hoặc macaron",
          id: "Tart buah yang indah atau macaron"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "부드러운 치즈 케이크나 푸딩",
          en: "Soft cheesecake or pudding",
          ja: "柔らかいチーズケーキやプリン",
          "zh-CN": "柔软的芝士蛋糕或布丁",
          "zh-TW": "柔軟的芝士蛋糕或布丁",
          vi: "Bánh phô mai mềm hoặc pudding",
          id: "Cheesecake lembut atau puding"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "담백한 스콘이나 휘낭시에",
          en: "Plain scone or financier",
          ja: "あっさりしたスコーンやフィナンシェ",
          "zh-CN": "清淡的司康饼或费南雪",
          "zh-TW": "清淡的司康餅或費南雪",
          vi: "Bánh scone nhẹ hoặc financier",
          id: "Scone polos atau financier"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "낯선 모임에 갔을 때 당신의 모습은?",
      en: "What are you like when you go to a new gathering?",
      ja: "初めての集まりに行ったときのあなたの様子は？",
      "zh-CN": "去陌生聚会时你的样子是什么？",
      "zh-TW": "去陌生聚會時你的樣子是什麼？",
      vi: "Bạn như thế nào khi tham gia một buổi họp mặt lạ?",
      id: "Seperti apa Anda ketika pergi ke pertemuan yang tidak dikenal?"
    },
    options: [
      {
        text: {
          ko: "필요한 대화만 핵심적으로 나누고 관찰한다",
          en: "Exchange only essential conversations and observe",
          ja: "必要な会話だけを核心的に交わして観察する",
          "zh-CN": "只进行必要的核心对话并观察",
          "zh-TW": "只進行必要的核心對話並觀察",
          vi: "Chỉ trao đổi những cuộc trò chuyện cần thiết và quan sát",
          id: "Hanya bertukar percakapan penting dan mengamati"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "먼저 말을 걸며 분위기를 주도한다",
          en: "Initiate conversation first and lead the atmosphere",
          ja: "最初に話しかけて雰囲気をリードする",
          "zh-CN": "先开口说话，主导氛围",
          "zh-TW": "先開口說話，主導氛圍",
          vi: "Chủ động bắt chuyện trước và dẫn dắt không khí",
          id: "Memulai percakapan terlebih dahulu dan memimpin suasana"
        },
        types: ["Type2", "Type5"]
      },
      {
        text: {
          ko: "구석 자리에 앉아 조용히 상황을 지켜본다",
          en: "Sit in a corner and quietly observe the situation",
          ja: "隅の席に座って静かに状況を見守る",
          "zh-CN": "坐在角落，安静地观察情况",
          "zh-TW": "坐在角落，安靜地觀察情況",
          vi: "Ngồi ở góc và yên lặng quan sát tình huống",
          id: "Duduk di sudut dan dengan tenang mengamati situasi"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "마음에 드는 사람하고만 깊은 대화를 나눈다",
          en: "Have deep conversations only with people I like",
          ja: "気に入った人とだけ深い会話をする",
          "zh-CN": "只和喜欢的人进行深入对话",
          "zh-TW": "只和喜歡的人進行深入對話",
          vi: "Chỉ trò chuyện sâu sắc với những người mình thích",
          id: "Hanya melakukan percakapan mendalam dengan orang yang saya sukai"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 성격을 색깔로 비유한다면?",
      en: "If you were to compare your personality to a color?",
      ja: "あなたの性格を色で例えるなら？",
      "zh-CN": "如果要用颜色比喻你的性格？",
      "zh-TW": "如果要用顏色比喻你的性格？",
      vi: "Nếu bạn so sánh tính cách của mình với màu sắc?",
      id: "Jika Anda membandingkan kepribadian Anda dengan warna?"
    },
    options: [
      {
        text: {
          ko: "쿨하고 청량한 블루/민트",
          en: "Cool and refreshing blue/mint",
          ja: "クールで爽やかなブルー/ミント",
          "zh-CN": "凉爽清新的蓝色/薄荷色",
          "zh-TW": "涼爽清新的藍色/薄荷色",
          vi: "Màu xanh dương/xanh bạc hà mát mẻ và sảng khoái",
          id: "Biru/mint yang sejuk dan menyegarkan"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "밝고 에너지 넘치는 레드/오렌지",
          en: "Bright and energetic red/orange",
          ja: "明るくエネルギッシュなレッド/オレンジ",
          "zh-CN": "明亮充满活力的红色/橙色",
          "zh-TW": "明亮充滿活力的紅色/橙色",
          vi: "Màu đỏ/cam sáng và tràn đầy năng lượng",
          id: "Merah/oranye yang cerah dan penuh energi"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "부드럽고 온화한 베이지/핑크",
          en: "Soft and gentle beige/pink",
          ja: "柔らかく穏やかなベージュ/ピンク",
          "zh-CN": "柔和温和的米色/粉色",
          "zh-TW": "柔和溫和的米色/粉色",
          vi: "Màu be/hồng mềm mại và dịu dàng",
          id: "Beige/pink yang lembut dan hangat"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "차분하고 깊이 있는 그린/브라운",
          en: "Calm and deep green/brown",
          ja: "落ち着いていて深みのあるグリーン/ブラウン",
          "zh-CN": "沉稳深邃的绿色/棕色",
          "zh-TW": "沉穩深邃的綠色/棕色",
          vi: "Màu xanh lá/nâu trầm lặng và sâu sắc",
          id: "Hijau/cokelat yang tenang dan dalam"
        },
        types: ["Type4"]
      }
    ]
  }
];

export const phase2TeaTherapyResults: Phase2TeaTherapyResult[] = [
  {
    type: "Type1",
    emoji: "🌿",
    title: {
      ko: "맑은 정신, 페퍼민트 & 레몬그라스",
      en: "Clear Mind, Peppermint & Lemongrass",
      ja: "清々しい精神、ペパーミント＆レモングラス",
      "zh-CN": "清醒精神，薄荷 & 柠檬草",
      "zh-TW": "清醒精神，薄荷 & 檸檬草",
      vi: "Tâm trí trong sáng, Bạc hà & Sả",
      id: "Pikiran Jernih, Peppermint & Serai"
    },
    shortDescription: {
      ko: "\"답답한 건 질색! 쿨하고 이성적인 해결사\"",
      en: "\"Can't stand stuffiness! Cool and rational problem solver\"",
      ja: "「息苦しいのは大嫌い！クールで理性的な問題解決者」",
      "zh-CN": "\"无法忍受憋闷！冷静理性的问题解决者\"",
      "zh-TW": "\"無法忍受憋悶！冷靜理性的問題解決者\"",
      vi: "\"Không chịu được sự ngột ngạt! Người giải quyết vấn đề lạnh lùng và lý trí\"",
      id: "\"Tidak tahan kekesalan! Pemecah masalah yang keren dan rasional\""
    },
    description: {
      ko: "당신은 군더더기 없는 깔끔함과 효율성을 추구합니다. 감정에 휘둘리기보다 이성적으로 판단하며, 복잡한 상황을 명쾌하게 정리하는 능력이 있습니다. 답답한 속을 뻥 뚫어주는 청량한 차가 필요합니다.",
      en: "You pursue neatness and efficiency without any frills. You judge rationally rather than being swayed by emotions, and you have the ability to organize complex situations clearly. You need a refreshing tea that clears your stuffy chest.",
      ja: "あなたは余計なものを排した清潔さと効率性を追求します。感情に流されるよりも理性的に判断し、複雑な状況を明快に整理する能力があります。息苦しい胸をすっきりさせてくれる爽やかなお茶が必要です。",
      "zh-CN": "你追求没有多余的整洁和效率。相比被情绪左右，你更倾向于理性判断，并且有将复杂情况清晰地整理出来的能力。你需要一杯清爽的茶来疏通憋闷的胸口。",
      "zh-TW": "你追求沒有多餘的整潔和效率。相比被情緒左右，你更傾向於理性判斷，並且有將複雜情況清晰地整理出來的能力。你需要一杯清爽的茶來疏通憋悶的胸口。",
      vi: "Bạn theo đuổi sự gọn gàng và hiệu quả không thừa thãi. Bạn phán đoán một cách lý trí thay vì bị cảm xúc chi phối, và bạn có khả năng tổ chức các tình huống phức tạp một cách rõ ràng. Bạn cần một loại trà thanh mát giúp thông thoáng lồng ngực ngột ngạt.",
      id: "Anda mengejar kerapian dan efisiensi tanpa embel-embel. Anda menilai secara rasional daripada terbawa emosi, dan Anda memiliki kemampuan untuk mengatur situasi kompleks dengan jelas. Anda membutuhkan teh yang menyegarkan yang membersihkan dada yang sesak."
    },
    recommendedTeas: {
      ko: "페퍼민트, 레몬그라스, 탄산수 냉침차",
      en: "Peppermint, lemongrass, carbonated cold brew tea",
      ja: "ペパーミント、レモングラス、炭酸水冷浸茶",
      "zh-CN": "薄荷、柠檬草、碳酸水冷泡茶",
      "zh-TW": "薄荷、檸檬草、碳酸水冷泡茶",
      vi: "Bạc hà, sả, trà lạnh ngâm nước có ga",
      id: "Peppermint, serai, teh seduh dingin berkarbonasi"
    },
    effects: {
      ko: "머리를 맑게 하고 집중력을 높여주며 소화를 돕습니다.",
      en: "Clears the mind, improves concentration, and aids digestion.",
      ja: "頭をすっきりさせ、集中力を高め、消化を助けます。",
      "zh-CN": "提神醒脑，提高注意力，助消化。",
      "zh-TW": "提神醒腦，提高注意力，助消化。",
      vi: "Làm tỉnh táo đầu óc, tăng khả năng tập trung và hỗ trợ tiêu hóa.",
      id: "Menjernihkan pikiran, meningkatkan konsentrasi, dan membantu pencernaan."
    },
    teaFoods: {
      ko: "다크 초콜릿, 민트 사탕",
      en: "Dark chocolate, mint candy",
      ja: "ダークチョコレート、ミントキャンディ",
      "zh-CN": "黑巧克力、薄荷糖",
      "zh-TW": "黑巧克力、薄荷糖",
      vi: "Sô cô la đen, kẹo bạc hà",
      id: "Cokelat hitam, permen mint"
    }
  },
  {
    type: "Type2",
    emoji: "☕",
    title: {
      ko: "사교계의 여왕, 얼그레이 & 홍차",
      en: "Queen of Social Circles, Earl Grey & Black Tea",
      ja: "社交界の女王、アールグレイ＆紅茶",
      "zh-CN": "社交界的女王，伯爵茶 & 红茶",
      "zh-TW": "社交界的女王，伯爵茶 & 紅茶",
      vi: "Nữ hoàng xã giao, Earl Grey & Trà đen",
      id: "Ratu Lingkaran Sosial, Earl Grey & Teh Hitam"
    },
    shortDescription: {
      ko: "\"우아한 분위기, 함께할 때 빛나는 에너지\"",
      en: "\"Elegant atmosphere, radiant energy when together\"",
      ja: "「優雅な雰囲気、一緒にいるとき輝くエネルギー」",
      "zh-CN": "\"优雅的氛围，在一起时闪耀的能量\"",
      "zh-TW": "\"優雅的氛圍，在一起時閃耀的能量\"",
      vi: "\"Không khí thanh lịch, năng lượng tỏa sáng khi cùng nhau\"",
      id: "\"Suasana elegan, energi bercahaya ketika bersama\""
    },
    description: {
      ko: "당신은 사람들과 어울리는 것을 좋아하고 세련된 취향을 가졌습니다. 적당한 격식을 갖추면서도 대화를 즐겁게 이끌어가는 매력이 있습니다. 화려한 향과 깊은 풍미가 있는 홍차 계열이 당신을 더욱 빛내줍니다.",
      en: "You like being around people and have refined tastes. You have the charm to lead conversations enjoyably while maintaining proper decorum. Black tea varieties with rich aromas and deep flavors will make you shine even more.",
      ja: "あなたは人と付き合うことを好み、洗練された趣味を持っています。適度な礼儀を保ちながらも会話を楽しくリードする魅力があります。華やかな香りと深い風味のある紅茶系があなたをさらに輝かせます。",
      "zh-CN": "你喜欢与人交往，拥有精致的品味。你在保持适当礼节的同时，也有让对话变得有趣的魅力。带有华丽香气和浓郁风味的红茶系列会让你更加闪耀。",
      "zh-TW": "你喜歡與人交往，擁有精緻的品味。你在保持適當禮節的同時，也有讓對話變得有趣的魅力。帶有華麗香氣和濃郁風味的紅茶系列會讓你更加閃耀。",
      vi: "Bạn thích giao tiếp với mọi người và có gu tinh tế. Bạn có sức hút khiến cuộc trò chuyện trở nên thú vị trong khi vẫn giữ được phép tắc thích hợp. Dòng trà đen với hương thơm phong phú và vị đậm đà sẽ làm bạn tỏa sáng hơn nữa.",
      id: "Anda suka bergaul dengan orang dan memiliki selera yang halus. Anda memiliki pesona untuk memimpin percakapan dengan menyenangkan sambil menjaga kesopanan yang tepat. Varietas teh hitam dengan aroma kaya dan rasa mendalam akan membuat Anda bersinar lebih terang."
    },
    recommendedTeas: {
      ko: "얼그레이, 다즐링, 밀크티",
      en: "Earl Grey, Darjeeling, milk tea",
      ja: "アールグレイ、ダージリン、ミルクティー",
      "zh-CN": "伯爵茶、大吉岭茶、奶茶",
      "zh-TW": "伯爵茶、大吉嶺茶、奶茶",
      vi: "Earl Grey, Darjeeling, trà sữa",
      id: "Earl Grey, Darjeeling, teh susu"
    },
    effects: {
      ko: "적당한 카페인으로 에너지를 주고 기분 전환을 돕습니다.",
      en: "Provides energy with moderate caffeine and helps change mood.",
      ja: "適度なカフェインでエネルギーを与え、気分転換を助けます。",
      "zh-CN": "适量的咖啡因提供能量，有助于转换心情。",
      "zh-TW": "適量的咖啡因提供能量，有助於轉換心情。",
      vi: "Cung cấp năng lượng với lượng caffeine vừa phải và giúp thay đổi tâm trạng.",
      id: "Memberikan energi dengan kafein sedang dan membantu mengubah suasana hati."
    },
    teaFoods: {
      ko: "마카롱, 스콘, 케이크",
      en: "Macaron, scone, cake",
      ja: "マカロン、スコーン、ケーキ",
      "zh-CN": "马卡龙、司康饼、蛋糕",
      "zh-TW": "馬卡龍、司康餅、蛋糕",
      vi: "Macaron, scone, bánh ngọt",
      id: "Macaron, scone, kue"
    }
  },
  {
    type: "Type3",
    emoji: "🌼",
    title: {
      ko: "포근한 위로, 캐모마일 & 라벤더",
      en: "Warm Comfort, Chamomile & Lavender",
      ja: "温かな慰め、カモミール＆ラベンダー",
      "zh-CN": "温暖安慰，洋甘菊 & 薰衣草",
      "zh-TW": "溫暖安慰，洋甘菊 & 薰衣草",
      vi: "Sự an ủi ấm áp, Hoa cúc & Oải hương",
      id: "Kenyamanan Hangat, Chamomile & Lavender"
    },
    shortDescription: {
      ko: "\"섬세한 감수성, 마음을 어루만지는 힐러\"",
      en: "\"Delicate sensitivity, a healer who soothes the heart\"",
      ja: "「繊細な感性、心を撫でるヒーラー」",
      "zh-CN": "\"细腻的感性，抚慰心灵的治愈者\"",
      "zh-TW": "\"細膩的感性，撫慰心靈的治癒者\"",
      vi: "\"Cảm tính tinh tế, người chữa lành xoa dịu trái tim\"",
      id: "\"Kepekaan halus, penyembuh yang menenangkan hati\""
    },
    description: {
      ko: "당신은 마음이 여리고 따뜻하며, 타인의 감정에 깊이 공감합니다. 스트레스를 받으면 몸과 마음이 쉽게 긴장하기 때문에, 무엇보다 이완과 휴식이 필요합니다. 카페인이 없고 부드러운 허브티가 제격입니다.",
      en: "You have a tender and warm heart, and you deeply empathize with others' emotions. When you're stressed, your body and mind easily tense up, so relaxation and rest are most important. Caffeine-free and gentle herbal teas are perfect for you.",
      ja: "あなたは心が優しく温かく、他人の感情に深く共感します。ストレスを受けると体と心が簡単に緊張するため、何よりもリラックスと休息が必要です。カフェインのない柔らかいハーブティーが最適です。",
      "zh-CN": "你心地温柔温暖，对他人的情感有深深的共情。当你承受压力时，身心容易紧张，因此最重要的是放松和休息。不含咖啡因的温和花草茶最适合你。",
      "zh-TW": "你心地溫柔溫暖，對他人的情感有深深的共情。當你承受壓力時，身心容易緊張，因此最重要的是放鬆和休息。不含咖啡因的溫和花草茶最適合你。",
      vi: "Bạn có trái tim dịu dàng và ấm áp, và bạn đồng cảm sâu sắc với cảm xúc của người khác. Khi bạn căng thẳng, cơ thể và tâm trí dễ dàng căng thẳng, vì vậy thư giãn và nghỉ ngơi là quan trọng nhất. Các loại trà thảo mộc nhẹ nhàng không chứa caffeine rất phù hợp với bạn.",
      id: "Anda memiliki hati yang lembut dan hangat, dan Anda sangat berempati dengan emosi orang lain. Saat Anda stres, tubuh dan pikiran mudah tegang, jadi relaksasi dan istirahat adalah yang paling penting. Teh herbal lembut tanpa kafein sangat cocok untuk Anda."
    },
    recommendedTeas: {
      ko: "캐모마일, 라벤더, 루이보스",
      en: "Chamomile, lavender, rooibos",
      ja: "カモミール、ラベンダー、ルイボス",
      "zh-CN": "洋甘菊、薰衣草、路易波士茶",
      "zh-TW": "洋甘菊、薰衣草、路易波士茶",
      vi: "Hoa cúc, oải hương, rooibos",
      id: "Chamomile, lavender, rooibos"
    },
    effects: {
      ko: "신경을 안정시키고 불면증을 완화하며 숙면을 돕습니다.",
      en: "Calms nerves, relieves insomnia, and helps with sound sleep.",
      ja: "神経を安定させ、不眠症を緩和し、快眠を助けます。",
      "zh-CN": "安定神经，缓解失眠，有助于深度睡眠。",
      "zh-TW": "安定神經，緩解失眠，有助於深度睡眠。",
      vi: "Làm dịu thần kinh, giảm chứng mất ngủ và giúp ngủ ngon.",
      id: "Menenangkan saraf, meredakan insomnia, dan membantu tidur nyenyak."
    },
    teaFoods: {
      ko: "따뜻한 쿠키, 카스텔라",
      en: "Warm cookies, castella",
      ja: "温かいクッキー、カステラ",
      "zh-CN": "温热的饼干、长崎蛋糕",
      "zh-TW": "溫熱的餅乾、長崎蛋糕",
      vi: "Bánh quy ấm, castella",
      id: "Kue hangat, castella"
    }
  },
  {
    type: "Type4",
    emoji: "🍵",
    title: {
      ko: "고고한 선비, 녹차 & 말차",
      en: "Noble Scholar, Green Tea & Matcha",
      ja: "高貴な学者、緑茶＆抹茶",
      "zh-CN": "高雅的学者，绿茶 & 抹茶",
      "zh-TW": "高雅的學者，綠茶 & 抹茶",
      vi: "Học giả cao quý, Trà xanh & Matcha",
      id: "Sarjana Mulia, Teh Hijau & Matcha"
    },
    shortDescription: {
      ko: "\"차분한 내면, 흔들리지 않는 깊이\"",
      en: "\"Calm inner self, unshakable depth\"",
      ja: "「落ち着いた内面、揺らがない深さ」",
      "zh-CN": "\"平静的内心，不可撼动的深度\"",
      "zh-TW": "\"平靜的內心，不可撼動的深度\"",
      vi: "\"Nội tâm bình tĩnh, chiều sâu không lay chuyển\"",
      id: "\"Batin yang tenang, kedalaman yang tak tergoyahkan\""
    },
    description: {
      ko: "당신은 겉으로는 조용해 보이지만 내면이 단단하고 깊이가 있는 사람입니다. 혼자만의 사색을 즐기며, 변하지 않는 가치를 중요하게 생각합니다. 은은하고 쌉싸름한 맛 뒤에 오는 감칠맛을 즐길 줄 아는 어른스러운 취향입니다.",
      en: "You appear quiet on the outside, but you are a person with a solid inner self and depth. You enjoy your own contemplation and value unchanging principles. You have a mature taste that knows how to appreciate the subtle, slightly bitter flavor followed by a delightful aftertaste.",
      ja: "あなたは外見は静かですが、内面が強固で深さのある人です。一人の思索を楽しみ、変わらない価値を大切にします。上品で少し苦い味の後に来る旨みを楽しむことができる大人の趣味です。",
      "zh-CN": "你外表看起来安静，但你是一个内心坚实而有深度的人。你享受独自思考，重视不变的价值观。你拥有成熟的品味，懂得欣赏淡雅而略带苦涩的味道，以及随之而来的美妙余味。",
      "zh-TW": "你外表看起來安靜，但你是一個內心堅實而有深度的人。你享受獨自思考，重視不變的價值觀。你擁有成熟的品味，懂得欣賞淡雅而略帶苦澀的味道，以及隨之而來的美妙餘味。",
      vi: "Bạn trông có vẻ im lặng bên ngoài, nhưng bạn là người có nội tâm vững chắc và sâu sắc. Bạn thích sự suy tư riêng tư và coi trọng những giá trị không thay đổi. Bạn có gu trưởng thành, biết cách thưởng thức vị tinh tế, hơi đắng và hậu vị thú vị sau đó.",
      id: "Anda terlihat tenang di luar, tetapi Anda adalah orang dengan batin yang solid dan dalam. Anda menikmati kontemplasi sendiri dan menghargai nilai-nilai yang tidak berubah. Anda memiliki selera dewasa yang tahu cara menghargai rasa halus dan agak pahit yang diikuti oleh aftertaste yang menyenangkan."
    },
    recommendedTeas: {
      ko: "세작(녹차), 말차, 우롱차",
      en: "Sejak (green tea), matcha, oolong tea",
      ja: "細雀（緑茶）、抹茶、ウーロン茶",
      "zh-CN": "细雀（绿茶）、抹茶、乌龙茶",
      "zh-TW": "細雀（綠茶）、抹茶、烏龍茶",
      vi: "Sejak (trà xanh), matcha, trà ô long",
      id: "Sejak (teh hijau), matcha, teh oolong"
    },
    effects: {
      ko: "항산화 작용이 뛰어나고 마음을 차분하게 가라앉힙니다.",
      en: "Excellent antioxidant effects and calms the mind.",
      ja: "優れた抗酸化作用があり、心を落ち着かせます。",
      "zh-CN": "优秀的抗氧化作用，让心情平静。",
      "zh-TW": "優秀的抗氧化物作用，讓心情平靜。",
      vi: "Tác dụng chống oxy hóa tuyệt vời và làm tâm trí bình tĩnh.",
      id: "Efek antioksidan yang sangat baik dan menenangkan pikiran."
    },
    teaFoods: {
      ko: "양갱, 화과자, 떡",
      en: "Yokan, wagashi, rice cake",
      ja: "羊羹、和菓子、餅",
      "zh-CN": "羊羹、和果子、年糕",
      "zh-TW": "羊羹、和果子、年糕",
      vi: "Yokan, wagashi, bánh gạo",
      id: "Yokan, wagashi, kue beras"
    }
  },
  {
    type: "Type5",
    emoji: "🍒",
    title: {
      ko: "상큼발랄 비타민, 히비스커스 & 과일차",
      en: "Fresh and Lively Vitamin, Hibiscus & Fruit Tea",
      ja: "さわやかで活気のあるビタミン、ハイビスカス＆フルーツティー",
      "zh-CN": "清爽活泼的维生素，木槿 & 水果茶",
      "zh-TW": "清爽活潑的維生素，木槿 & 水果茶",
      vi: "Vitamin tươi mát và sống động, Dâm bụt & Trà trái cây",
      id: "Vitamin Segar dan Lincah, Kembang Sepatu & Teh Buah"
    },
    shortDescription: {
      ko: "\"통통 튀는 매력, 지루할 틈 없는 크리에이터\"",
      en: "\"Bouncy charm, a creator with no room for boredom\"",
      ja: "「弾ける魅力、退屈する暇のないクリエイター」",
      "zh-CN": "\"活泼的魅力，没有时间无聊的创造者\"",
      "zh-TW": "\"活潑的魅力，沒有時間無聊的創造者\"",
      vi: "\"Sức hút bừng bừng, một người sáng tạo không có chỗ cho sự nhàm chán\"",
      id: "\"Pesona yang lincah, kreator yang tidak punya waktu untuk bosan\""
    },
    description: {
      ko: "당신은 호기심이 많고 개성이 뚜렷하며, 반복되는 지루한 일상을 싫어합니다. 시각적인 아름다움과 새콤달콤한 맛을 동시에 즐길 수 있는 차가 어울립니다. 당신의 에너지를 충전해 줄 붉은빛의 차를 추천합니다.",
      en: "You are very curious, have a distinct personality, and dislike repetitive, boring daily routines. Tea that allows you to enjoy both visual beauty and sweet-and-sour flavors suits you. I recommend red-colored tea that will recharge your energy.",
      ja: "あなたは好奇心旺盛で個性がはっきりしており、繰り返される退屈な日常を嫌います。視覚的な美しさと甘酸っぱい味を同時に楽しめるお茶が似合います。あなたのエネルギーを充電してくれる赤い色のお茶をおすすめします。",
      "zh-CN": "你充满好奇心，个性鲜明，讨厌重复无聊的日常生活。能同时享受视觉美感和酸甜味道的茶很适合你。我推荐能为你充电能量的红色茶。",
      "zh-TW": "你充滿好奇心，個性鮮明，討厭重複無聊的日常生活。能同時享受視覺美感和酸甜味道的茶很適合你。我推薦能為你充電能量的紅色茶。",
      vi: "Bạn rất tò mò, có cá tính rõ ràng và không thích những thói quen hàng ngày lặp đi lặp lại và nhàm chán. Trà cho phép bạn thưởng thức cả vẻ đẹp thị giác và vị chua ngọt rất phù hợp với bạn. Tôi khuyên bạn nên dùng trà màu đỏ sẽ nạp lại năng lượng cho bạn.",
      id: "Anda sangat penasaran, memiliki kepribadian yang berbeda, dan tidak suka rutinitas sehari-hari yang berulang dan membosankan. Teh yang memungkinkan Anda menikmati keindahan visual dan rasa manis-asam sekaligus cocok untuk Anda. Saya merekomendasikan teh berwarna merah yang akan mengisi ulang energi Anda."
    },
    recommendedTeas: {
      ko: "히비스커스, 유자차, 베리류 블렌딩 티",
      en: "Hibiscus, yuja tea, berry blend tea",
      ja: "ハイビスカス、柚子茶、ベリー類ブレンドティー",
      "zh-CN": "木槿、柚子茶、浆果混合茶",
      "zh-TW": "木槿、柚子茶、漿果混合茶",
      vi: "Dâm bụt, trà yuja, trà hỗn hợp quả mọng",
      id: "Kembang sepatu, teh yuja, teh campuran berry"
    },
    effects: {
      ko: "비타민C가 풍부해 피로 회복과 피부 미용에 좋습니다.",
      en: "Rich in vitamin C, good for fatigue recovery and skin beauty.",
      ja: "ビタミンCが豊富で、疲労回復と肌の美容に良いです。",
      "zh-CN": "富含维生素C，有助于恢复疲劳和美容护肤。",
      "zh-TW": "富含維生素C，有助於恢復疲勞和美容護膚。",
      vi: "Giàu vitamin C, tốt cho việc phục hồi mệt mỏi và làm đẹp da.",
      id: "Kaya akan vitamin C, baik untuk pemulihan kelelahan dan kecantikan kulit."
    },
    teaFoods: {
      ko: "과일 타르트, 상큼한 젤리",
      en: "Fruit tart, fresh jelly",
      ja: "フルーツタルト、さわやかなゼリー",
      "zh-CN": "水果挞、清爽果冻",
      "zh-TW": "水果塔、清爽果凍",
      vi: "Tart trái cây, thạch tươi mát",
      id: "Tart buah, jelly segar"
    }
  }
];

export function calculatePhase2TeaTherapyResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type3"; // Default value (highest priority)
  const priority = ["Type3", "Type2", "Type4", "Type5", "Type1"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
