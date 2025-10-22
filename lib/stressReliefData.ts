export interface StressReliefQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: Record<string, number>;
  }>;
}

export interface StressReliefResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Array<Record<string, string>>;
  cons: Array<Record<string, string>>;
  advice: Record<string, string>;
  recommendedActivities: Record<string, string>;
}

// 질문 데이터
export const stressReliefQuestions: StressReliefQuestion[] = [
  {
    id: 1,
    question: {
      ko: "힘든 회의를 마치고 나왔을 때 가장 먼저 하고 싶은 것은?",
      en: "What do you want to do first after finishing a difficult meeting?",
      ja: "難しい会議を終えた後、最初にしたいことは？",
      "zh-CN": "开完困难的会议后，你最想先做什么？",
      "zh-TW": "開完困難的會議後，你最想先做什麼？",
      vi: "Sau khi kết thúc một cuộc họp khó khăn, bạn muốn làm gì đầu tiên?",
      id: "Setelah menyelesaikan rapat yang sulit, apa yang ingin Anda lakukan pertama kali?"
    },
    options: [
      {
        text: {
          ko: "밖에 나가서 걷거나 운동하기",
          en: "Go outside for a walk or exercise",
          ja: "外に出て歩いたり運動したりする",
          "zh-CN": "出去走走或运动",
          "zh-TW": "出去走走或運動",
          vi: "Đi ra ngoài đi bộ hoặc tập thể dục",
          id: "Keluar untuk berjalan atau berolahraga"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "동료나 친구에게 전화해서 하소연",
          en: "Call a colleague or friend to complain",
          ja: "同僚や友人に電話して愚痴を言う",
          "zh-CN": "给同事或朋友打电话抱怨",
          "zh-TW": "給同事或朋友打電話抱怨",
          vi: "Gọi điện cho đồng nghiệp hoặc bạn bè để than thở",
          id: "Menelepon rekan kerja atau teman untuk mengeluh"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "조용한 곳에서 혼자 있기",
          en: "Be alone in a quiet place",
          ja: "静かな場所で一人でいる",
          "zh-CN": "在安静的地方独处",
          "zh-TW": "在安靜的地方獨處",
          vi: "Ở một mình ở nơi yên tĩnh",
          id: "Sendirian di tempat yang tenang"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "좋아하는 영상이나 게임으로 전환",
          en: "Switch to favorite videos or games",
          ja: "好きな動画やゲームに切り替える",
          "zh-CN": "切换到喜欢的视频或游戏",
          "zh-TW": "切換到喜歡的視頻或遊戲",
          vi: "Chuyển sang video hoặc game yêu thích",
          id: "Beralih ke video atau game favorit"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "퇴근 후 스트레스가 극심할 때?",
      en: "When you're extremely stressed after work?",
      ja: "退勤後にストレスが極度の時は？",
      "zh-CN": "下班后压力极大时？",
      "zh-TW": "下班後壓力極大時？",
      vi: "Khi căng thẳng cực độ sau giờ làm việc?",
      id: "Ketika sangat stres setelah pulang kerja?"
    },
    options: [
      {
        text: {
          ko: "헬스장 가거나 러닝하러 나감",
          en: "Go to the gym or go for a run",
          ja: "ジムに行くかランニングに出かける",
          "zh-CN": "去健身房或跑步",
          "zh-TW": "去健身房或跑步",
          vi: "Đi gym hoặc chạy bộ",
          id: "Pergi ke gym atau lari"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "친구들 만나서 맥주 한잔",
          en: "Meet friends for a beer",
          ja: "友人に会ってビールを一杯",
          "zh-CN": "见朋友喝一杯啤酒",
          "zh-TW": "見朋友喝一杯啤酒",
          vi: "Gặp bạn bè uống bia",
          id: "Bertemu teman minum bir"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "집에서 혼자 조용히 쉼",
          en: "Rest quietly alone at home",
          ja: "家で一人静かに休む",
          "zh-CN": "在家安静地独自休息",
          "zh-TW": "在家安靜地獨自休息",
          vi: "Nghỉ ngơi yên tĩnh một mình ở nhà",
          id: "Beristirahat tenang sendirian di rumah"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "취미 활동에 몰입",
          en: "Immerse in hobby activities",
          ja: "趣味活動に没頭する",
          "zh-CN": "沉浸在爱好活动中",
          "zh-TW": "沉浸在愛好活動中",
          vi: "Đắm chìm trong hoạt động sở thích",
          id: "Terbenam dalam aktivitas hobi"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "주말에 스트레스를 풀고 싶다면?",
      en: "If you want to relieve stress on weekends?",
      ja: "週末にストレスを解消したいなら？",
      "zh-CN": "如果你想在周末缓解压力？",
      "zh-TW": "如果你想在週末緩解壓力？",
      vi: "Nếu bạn muốn giải tỏa căng thẳng vào cuối tuần?",
      id: "Jika Anda ingin menghilangkan stres di akhir pekan?"
    },
    options: [
      {
        text: {
          ko: "등산, 자전거, 수영 등 몸 쓰기",
          en: "Use your body with hiking, cycling, swimming, etc.",
          ja: "登山、サイクリング、水泳など体を使う",
          "zh-CN": "登山、骑自行车、游泳等使用身体",
          "zh-TW": "登山、騎自行車、游泳等使用身體",
          vi: "Sử dụng cơ thể với leo núi, đạp xe, bơi lội",
          id: "Menggunakan tubuh dengan hiking, bersepeda, berenang"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "친구들과 모임이나 외출",
          en: "Meet friends or go out",
          ja: "友人との集まりや外出",
          "zh-CN": "与朋友聚会或外出",
          "zh-TW": "與朋友聚會或外出",
          vi: "Gặp gỡ bạn bè hoặc đi chơi",
          id: "Bertemu teman atau keluar"
        },
        scores: { Type1: 0, Type2: 2, Type3: 0, Type4: 0, Type5: 8, Type6: 0 }
      },
      {
        text: {
          ko: "집에서 느긋하게 휴식",
          en: "Relax leisurely at home",
          ja: "家でゆっくり休む",
          "zh-CN": "在家悠闲地休息",
          "zh-TW": "在家悠閒地休息",
          vi: "Thư giãn thoải mái ở nhà",
          id: "Bersantai di rumah"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "관심 있는 새로운 것 시도",
          en: "Try something new that interests you",
          ja: "興味のある新しいことに挑戦",
          "zh-CN": "尝试感兴趣的新事物",
          "zh-TW": "嘗試感興趣的新事物",
          vi: "Thử những điều mới mẻ mà bạn quan tâm",
          id: "Mencoba hal baru yang menarik"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "야근 후 집에 돌아와서?",
      en: "After coming home from overtime?",
      ja: "残業後家に帰ってから？",
      "zh-CN": "加班后回到家？",
      "zh-TW": "加班後回到家？",
      vi: "Sau khi về nhà từ làm thêm giờ?",
      id: "Setelah pulang dari lembur?"
    },
    options: [
      {
        text: {
          ko: "간단히 스트레칭이라도",
          en: "At least do some simple stretching",
          ja: "簡単なストレッチでも",
          "zh-CN": "至少做一些简单的拉伸",
          "zh-TW": "至少做一些簡單的拉伸",
          vi: "Ít nhất là một số động tác kéo giãn đơn giản",
          id: "Setidaknya melakukan peregangan sederhana"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "가족이나 친구와 통화",
          en: "Call family or friends",
          ja: "家族や友人と通話",
          "zh-CN": "给家人或朋友打电话",
          "zh-TW": "給家人或朋友打電話",
          vi: "Gọi điện cho gia đình hoặc bạn bè",
          id: "Menelepon keluarga atau teman"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "샤워하고 바로 침대",
          en: "Shower and go straight to bed",
          ja: "シャワーを浴びてすぐベッド",
          "zh-CN": "洗澡后直接上床",
          "zh-TW": "洗澡後直接上床",
          vi: "Tắm rửa và đi thẳng lên giường",
          id: "Mandi dan langsung tidur"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "좋아하는 책이나 영상 보기",
          en: "Watch favorite books or videos",
          ja: "好きな本や動画を見る",
          "zh-CN": "看喜欢的书或视频",
          "zh-TW": "看喜歡的書或視頻",
          vi: "Xem sách hoặc video yêu thích",
          id: "Menonton buku atau video favorit"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "스트레스를 가장 잘 푸는 방법은?",
      en: "What's the best way to relieve stress?",
      ja: "ストレスを最もよく解消する方法は？",
      "zh-CN": "缓解压力的最好方法是什么？",
      "zh-TW": "緩解壓力的最好方法是什麼？",
      vi: "Cách tốt nhất để giải tỏa căng thẳng là gì?",
      id: "Cara terbaik untuk menghilangkan stres adalah?"
    },
    options: [
      {
        text: {
          ko: "몸을 움직여 땀 흘리기",
          en: "Move your body and sweat",
          ja: "体を動かして汗をかく",
          "zh-CN": "活动身体出汗",
          "zh-TW": "活動身體出汗",
          vi: "Vận động cơ thể và đổ mồ hôi",
          id: "Menggerakkan tubuh dan berkeringat"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "누군가와 대화하며 풀기",
          en: "Relieve by talking to someone",
          ja: "誰かと話して解消する",
          "zh-CN": "通过与某人交谈来缓解",
          "zh-TW": "通過與某人交談來緩解",
          vi: "Giải tỏa bằng cách nói chuyện với ai đó",
          id: "Menghilangkan dengan berbicara dengan seseorang"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "혼자만의 시간 갖기",
          en: "Have time alone",
          ja: "一人の時間を持つ",
          "zh-CN": "拥有独处时间",
          "zh-TW": "擁有獨處時間",
          vi: "Có thời gian một mình",
          id: "Memiliki waktu sendirian"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "좋아하는 활동에 집중하기",
          en: "Focus on favorite activities",
          ja: "好きな活動に集中する",
          "zh-CN": "专注于喜欢的活动",
          "zh-TW": "專注於喜歡的活動",
          vi: "Tập trung vào các hoạt động yêu thích",
          id: "Fokus pada aktivitas favorit"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "갑자기 반차를 얻었다면?",
      en: "If you suddenly got half a day off?",
      ja: "急に半日休暇をもらったら？",
      "zh-CN": "如果突然得到半天假？",
      "zh-TW": "如果突然得到半天假？",
      vi: "Nếu đột nhiên được nghỉ nửa ngày?",
      id: "Jika tiba-tiba mendapat setengah hari libur?"
    },
    options: [
      {
        text: {
          ko: "평소 못한 운동하러 가기",
          en: "Go exercise that you couldn't usually do",
          ja: "普段できない運動をしに行く",
          "zh-CN": "去做平时不能做的运动",
          "zh-TW": "去做平時不能做的運動",
          vi: "Đi tập thể dục mà bình thường không thể làm",
          id: "Pergi berolahraga yang biasanya tidak bisa dilakukan"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "친구 불러내서 점심 약속",
          en: "Call friends for lunch",
          ja: "友人を呼んでランチの約束",
          "zh-CN": "叫朋友出来吃午饭",
          "zh-TW": "叫朋友出來吃午飯",
          vi: "Gọi bạn bè đi ăn trưa",
          id: "Menelepon teman untuk makan siang"
        },
        scores: { Type1: 0, Type2: 2, Type3: 0, Type4: 0, Type5: 8, Type6: 0 }
      },
      {
        text: {
          ko: "집에서 푹 쉬기",
          en: "Rest well at home",
          ja: "家でゆっくり休む",
          "zh-CN": "在家好好休息",
          "zh-TW": "在家好好休息",
          vi: "Nghỉ ngơi thoải mái ở nhà",
          id: "Beristirahat dengan nyaman di rumah"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "하고 싶었던 것 해보기",
          en: "Try what you wanted to do",
          ja: "やりたかったことをやってみる",
          "zh-CN": "尝试想做的事情",
          "zh-TW": "嘗試想做的事情",
          vi: "Thử những điều bạn muốn làm",
          id: "Mencoba hal yang ingin dilakukan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "직장에서 가장 답답한 순간은?",
      en: "The most frustrating moment at work is?",
      ja: "職場で最もイライラする瞬間は？",
      "zh-CN": "工作中最令人沮丧的时刻是？",
      "zh-TW": "工作中最令人沮喪的時刻是？",
      vi: "Khoảnh khắc bực bội nhất ở nơi làm việc là?",
      id: "Momen paling frustasi di tempat kerja adalah?"
    },
    options: [
      {
        text: {
          ko: "하루 종일 앉아만 있을 때",
          en: "When sitting all day",
          ja: "一日中座っている時",
          "zh-CN": "整天坐着的时候",
          "zh-TW": "整天坐著的時候",
          vi: "Khi ngồi cả ngày",
          id: "Ketika duduk sepanjang hari"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "혼자서 고민할 때",
          en: "When worrying alone",
          ja: "一人で悩んでいる時",
          "zh-CN": "独自烦恼的时候",
          "zh-TW": "獨自煩惱的時候",
          vi: "Khi lo lắng một mình",
          id: "Ketika khawatir sendirian"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "소음과 사람이 많을 때",
          en: "When there's noise and many people",
          ja: "騒音と人が多い時",
          "zh-CN": "噪音和人多的时候",
          "zh-TW": "噪音和人多的時候",
          vi: "Khi có tiếng ồn và nhiều người",
          id: "Ketika ada suara bising dan banyak orang"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "단조롭고 재미없을 때",
          en: "When it's monotonous and boring",
          ja: "単調でつまらない時",
          "zh-CN": "单调无聊的时候",
          "zh-TW": "單調無聊的時候",
          vi: "Khi đơn điệu và nhàm chán",
          id: "Ketika monoton dan membosankan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "출근 전 기분 전환 방법은?",
      en: "How do you change your mood before work?",
      ja: "出勤前の気分転換方法は？",
      "zh-CN": "上班前的心情转换方法是？",
      "zh-TW": "上班前的心情轉換方法是？",
      vi: "Cách thay đổi tâm trạng trước khi đi làm?",
      id: "Cara mengubah suasana hati sebelum bekerja?"
    },
    options: [
      {
        text: {
          ko: "아침 운동이나 산책",
          en: "Morning exercise or walk",
          ja: "朝の運動や散歩",
          "zh-CN": "晨练或散步",
          "zh-TW": "晨練或散步",
          vi: "Tập thể dục buổi sáng hoặc đi bộ",
          id: "Olahraga pagi atau jalan-jalan"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "가족과 대화하며 아침식사",
          en: "Have breakfast while talking with family",
          ja: "家族と話しながら朝食",
          "zh-CN": "与家人交谈吃早餐",
          "zh-TW": "與家人交談吃早餐",
          vi: "Ăn sáng và trò chuyện với gia đình",
          id: "Sarapan sambil berbicara dengan keluarga"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "여유롭게 혼자만의 루틴",
          en: "Leisurely solo routine",
          ja: "ゆっくり一人のルーティン",
          "zh-CN": "悠闲的独处日常",
          "zh-TW": "悠閒的獨處日常",
          vi: "Thói quen một mình thoải mái",
          id: "Rutinitas sendirian yang santai"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "좋아하는 음악이나 팟캐스트",
          en: "Favorite music or podcast",
          ja: "好きな音楽やポッドキャスト",
          "zh-CN": "喜欢的音乐或播客",
          "zh-TW": "喜歡的音樂或播客",
          vi: "Âm nhạc hoặc podcast yêu thích",
          id: "Musik atau podcast favorit"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "회사 회식 후 2차를 제안받는다면?",
      en: "If you're invited to a second round after company dinner?",
      ja: "会社の飲み会後に二次会を提案されたら？",
      "zh-CN": "公司聚餐后被邀请去第二轮？",
      "zh-TW": "公司聚餐後被邀請去第二輪？",
      vi: "Nếu được mời đi vòng 2 sau bữa tiệc công ty?",
      id: "Jika diundang ke ronde kedua setelah makan malam perusahaan?"
    },
    options: [
      {
        text: {
          ko: "\"집 가서 운동해야 해서요\"",
          en: "\"I need to go home and exercise\"",
          ja: "「家に帰って運動しなければならないので」",
          "zh-CN": "\"我需要回家运动\"",
          "zh-TW": "\"我需要回家運動\"",
          vi: "\"Tôi cần về nhà tập thể dục\"",
          id: "\"Saya perlu pulang dan berolahraga\""
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "\"좋아요! 더 놀아요!\"",
          en: "\"Great! Let's have more fun!\"",
          ja: "「いいね！もっと遊ぼう！」",
          "zh-CN": "\"太好了！让我们继续玩！\"",
          "zh-TW": "\"太好了！讓我們繼續玩！\"",
          vi: "\"Tuyệt! Hãy vui vẻ thêm!\"",
          id: "\"Bagus! Mari bersenang-senang lagi!\""
        },
        scores: { Type1: 0, Type2: 2, Type3: 0, Type4: 0, Type5: 8, Type6: 0 }
      },
      {
        text: {
          ko: "\"오늘은 집에서 쉬고 싶어요\"",
          en: "\"I want to rest at home today\"",
          ja: "「今日は家で休みたいです」",
          "zh-CN": "\"今天我想在家休息\"",
          "zh-TW": "\"今天我想在家休息\"",
          vi: "\"Hôm nay tôi muốn nghỉ ngơi ở nhà\"",
          id: "\"Hari ini saya ingin istirahat di rumah\""
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "\"가고 싶었던 곳 있는데 거기 갈까요?\"",
          en: "\"There's a place I wanted to go, shall we go there?\"",
          ja: "「行きたかった場所があるんだけど、そこに行きませんか？」",
          "zh-CN": "\"有个我想去的地方，我们去那里吧？\"",
          "zh-TW": "\"有個我想去的地方，我們去那裡吧？\"",
          vi: "\"Có một nơi tôi muốn đến, chúng ta đi đó nhé?\"",
          id: "\"Ada tempat yang ingin saya kunjungi, kita ke sana yuk?\""
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "번아웃이 올 것 같을 때?",
      en: "When you feel like burnout is coming?",
      ja: "バーンアウトが来そうな時は？",
      "zh-CN": "当你感觉要精疲力尽时？",
      "zh-TW": "當你感覺要精疲力盡時？",
      vi: "Khi bạn cảm thấy sắp bị kiệt sức?",
      id: "Ketika Anda merasa akan mengalami burnout?"
    },
    options: [
      {
        text: {
          ko: "강도 높은 운동으로 발산",
          en: "Release through high-intensity exercise",
          ja: "高強度の運動で発散",
          "zh-CN": "通过高强度运动释放",
          "zh-TW": "通過高強度運動釋放",
          vi: "Giải tỏa bằng tập thể dục cường độ cao",
          id: "Melepaskan melalui olahraga intensitas tinggi"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "주변 사람들에게 도움 요청",
          en: "Ask people around for help",
          ja: "周りの人に助けを求める",
          "zh-CN": "向周围的人求助",
          "zh-TW": "向周圍的人求助",
          vi: "Nhờ sự giúp đỡ từ những người xung quanh",
          id: "Meminta bantuan dari orang-orang di sekitar"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "며칠간 완전히 쉬기",
          en: "Take a complete rest for a few days",
          ja: "数日間完全に休む",
          "zh-CN": "完全休息几天",
          "zh-TW": "完全休息幾天",
          vi: "Nghỉ ngơi hoàn toàn trong vài ngày",
          id: "Beristirahat total selama beberapa hari"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "평소 좋아하는 것에 몰입",
          en: "Immerse in things you usually like",
          ja: "普段好きなことに没頭",
          "zh-CN": "沉浸在平时喜欢的事情中",
          "zh-TW": "沉浸在平時喜歡的事情中",
          vi: "Đắm chìm vào những điều bạn thường thích",
          id: "Terbenam dalam hal-hal yang biasanya Anda sukai"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 휴가 계획은?",
      en: "What's your vacation plan?",
      ja: "あなたの休暇計画は？",
      "zh-CN": "你的假期计划是什么？",
      "zh-TW": "你的假期計劃是什麼？",
      vi: "Kế hoạch nghỉ phép của bạn là gì?",
      id: "Apa rencana liburan Anda?"
    },
    options: [
      {
        text: {
          ko: "액티비티 가득한 여행",
          en: "Travel full of activities",
          ja: "アクティビティ満載の旅行",
          "zh-CN": "充满活动的旅行",
          "zh-TW": "充滿活動的旅行",
          vi: "Du lịch đầy hoạt động",
          id: "Perjalanan penuh aktivitas"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "친구들과 함께 여행",
          en: "Travel with friends",
          ja: "友人と一緒に旅行",
          "zh-CN": "与朋友一起旅行",
          "zh-TW": "與朋友一起旅行",
          vi: "Du lịch với bạn bè",
          id: "Berlibur dengan teman-teman"
        },
        scores: { Type1: 0, Type2: 2, Type3: 0, Type4: 0, Type5: 8, Type6: 0 }
      },
      {
        text: {
          ko: "호텔에서 푹 쉬기",
          en: "Rest well at the hotel",
          ja: "ホテルでゆっくり休む",
          "zh-CN": "在酒店好好休息",
          "zh-TW": "在酒店好好休息",
          vi: "Nghỉ ngơi thoải mái ở khách sạn",
          id: "Beristirahat dengan nyaman di hotel"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 8 }
      },
      {
        text: {
          ko: "새로운 경험과 배움의 여행",
          en: "Travel for new experiences and learning",
          ja: "新しい経験と学びの旅行",
          "zh-CN": "新体验和学习的旅行",
          "zh-TW": "新體驗和學習的旅行",
          vi: "Du lịch để trải nghiệm và học hỏi những điều mới",
          id: "Perjalanan untuk pengalaman dan pembelajaran baru"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이상적인 스트레스 해소법은?",
      en: "What's your ideal stress relief method?",
      ja: "理想的なストレス解消法は？",
      "zh-CN": "理想的压力缓解方法是什么？",
      "zh-TW": "理想的壓力緩解方法是什麼？",
      vi: "Phương pháp lý tưởng để giải tỏa căng thẳng là gì?",
      id: "Metode ideal untuk menghilangkan stres adalah?"
    },
    options: [
      {
        text: {
          ko: "몸을 쓰며 에너지 발산",
          en: "Release energy by using your body",
          ja: "体を使ってエネルギー発散",
          "zh-CN": "通过使用身体释放能量",
          "zh-TW": "通過使用身體釋放能量",
          vi: "Giải phóng năng lượng bằng cách sử dụng cơ thể",
          id: "Melepaskan energi dengan menggunakan tubuh"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "사람들과 함께 즐기기",
          en: "Enjoy with people",
          ja: "人と一緒に楽しむ",
          "zh-CN": "与人们一起享受",
          "zh-TW": "與人們一起享受",
          vi: "Tận hưởng cùng mọi người",
          id: "Bersenang-senang dengan orang lain"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "조용히 혼자 재충전",
          en: "Quietly recharge alone",
          ja: "静かに一人で充電",
          "zh-CN": "安静地独自充电",
          "zh-TW": "安靜地獨自充電",
          vi: "Nạp năng lượng một mình trong yên tĩnh",
          id: "Mengisi ulang sendirian dengan tenang"
        },
        scores: { Type1: 0, Type2: 0, Type3: 8, Type4: 0, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "좋아하는 것에 집중하기",
          en: "Focus on things you like",
          ja: "好きなことに集中する",
          "zh-CN": "专注于喜欢的事情",
          "zh-TW": "專注於喜歡的事情",
          vi: "Tập trung vào những điều bạn thích",
          id: "Fokus pada hal-hal yang Anda sukai"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      }
    ]
  }
];

// 결과 데이터
export const stressReliefResults: StressReliefResult[] = [
  {
    type: "Type1",
    emoji: "💪",
    title: {
      ko: "액티브 운동형",
      en: "Active Exercise Type",
      ja: "アクティブ運動型",
      "zh-CN": "积极运动型",
      "zh-TW": "積極運動型",
      vi: "Kiểu tập thể dục tích cực",
      id: "Tipe Olahraga Aktif"
    },
    shortDescription: {
      ko: "땀으로 날려! 운동으로 스트레스를 이기는 에너지 넘치는 워리어",
      en: "Sweat it out! An energetic warrior who overcomes stress through exercise",
      ja: "汗で流す！運動でストレスを克服するエネルギッシュな戦士",
      "zh-CN": "用汗水冲走！通过运动克服压力的充满活力的战士",
      "zh-TW": "用汗水沖走！通過運動克服壓力的充滿活力的戰士",
      vi: "Đổ mồ hôi! Chiến binh năng động vượt qua căng thẳng bằng tập thể dục",
      id: "Keringat keluar! Prajurit energik yang mengatasi stres melalui olahraga"
    },
    longDescription: {
      ko: "스트레스는 땀과 함께 사라집니다. 운동을 통해 몸과 마음을 동시에 관리하는 능력자입니다. 헬스장, 러닝, 등산 등 활동적인 스트레스 해소법을 선호하며, 운동 후의 상쾌함과 성취감으로 에너지를 충전합니다.",
      en: "Stress disappears with sweat. A capable person who manages both body and mind through exercise. Prefers active stress relief methods like gym, running, hiking, and recharges energy with the freshness and sense of achievement after exercise.",
      ja: "ストレスは汗と一緒に消えます。運動を通じて体と心を同時に管理する能力者です。ジム、ランニング、ハイキングなどのアクティブなストレス解消法を好み、運動後の爽快感と達成感でエネルギーを充電します。",
      "zh-CN": "压力随着汗水消失。通过运动同时管理身体和心灵的能力者。喜欢健身房、跑步、登山等积极的压力缓解方法，通过运动后的清爽感和成就感来充电。",
      "zh-TW": "壓力隨著汗水消失。通過運動同時管理身體和心靈的能力者。喜歡健身房、跑步、登山等積極的壓力緩解方法，通過運動後的清爽感和成就感來充電。",
      vi: "Căng thẳng biến mất cùng với mồ hôi. Người có khả năng quản lý cả cơ thể và tinh thần thông qua tập thể dục. Thích các phương pháp giảm căng thẳng tích cực như phòng gym, chạy bộ, leo núi và nạp năng lượng bằng cảm giác sảng khoái và thành tựu sau tập luyện.",
      id: "Stres hilang bersama keringat. Orang yang mampu mengelola tubuh dan pikiran melalui olahraga. Menyukai metode pereda stres aktif seperti gym, lari, hiking dan mengisi energi dengan kesegaran dan pencapaian setelah berolahraga."
    },
    pros: [
      {
        ko: "건강 증진",
        en: "Health improvement",
        ja: "健康増進",
        "zh-CN": "健康改善",
        "zh-TW": "健康改善",
        vi: "Cải thiện sức khỏe",
        id: "Peningkatan kesehatan"
      },
      {
        ko: "체력 향상",
        en: "Physical strength improvement",
        ja: "体力向上",
        "zh-CN": "体力提升",
        "zh-TW": "體力提升",
        vi: "Cải thiện thể lực",
        id: "Peningkatan kekuatan fisik"
      },
      {
        ko: "긍정적 에너지",
        en: "Positive energy",
        ja: "ポジティブなエネルギー",
        "zh-CN": "积极能量",
        "zh-TW": "積極能量",
        vi: "Năng lượng tích cực",
        id: "Energi positif"
      },
      {
        ko: "지속 효과",
        en: "Long-lasting effect",
        ja: "持続効果",
        "zh-CN": "持续效果",
        "zh-TW": "持續效果",
        vi: "Hiệu quả lâu dài",
        id: "Efek jangka panjang"
      }
    ],
    cons: [
      {
        ko: "시간 필요",
        en: "Time required",
        ja: "時間が必要",
        "zh-CN": "需要时间",
        "zh-TW": "需要時間",
        vi: "Cần thời gian",
        id: "Memerlukan waktu"
      },
      {
        ko: "체력 소모",
        en: "Physical exhaustion",
        ja: "体力消耗",
        "zh-CN": "体力消耗",
        "zh-TW": "體力消耗",
        vi: "Tiêu hao thể lực",
        id: "Kelelahan fisik"
      },
      {
        ko: "부상 위험",
        en: "Injury risk",
        ja: "怪我のリスク",
        "zh-CN": "受伤风险",
        "zh-TW": "受傷風險",
        vi: "Rủi ro chấn thương",
        id: "Risiko cedera"
      }
    ],
    advice: {
      ko: "과도한 운동은 오히려 피로를 줄 수 있어요. 적당한 강도를 유지하세요!",
      en: "Excessive exercise can actually increase fatigue. Maintain moderate intensity!",
      ja: "過度な運動は逆に疲労を増す可能性があります。適度な強度を保ちましょう！",
      "zh-CN": "过度运动反而会增加疲劳。保持适度的强度！",
      "zh-TW": "過度運動反而會增加疲勞。保持適度的強度！",
      vi: "Tập thể dục quá mức có thể làm tăng mệt mỏi. Duy trì cường độ vừa phải!",
      id: "Olahraga berlebihan justru bisa meningkatkan kelelahan. Pertahankan intensitas yang moderat!"
    },
    recommendedActivities: {
      ko: "러닝, 헬스, 수영, 클라이밍, 자전거, 요가",
      en: "Running, gym, swimming, climbing, cycling, yoga",
      ja: "ランニング、ジム、水泳、クライミング、サイクリング、ヨガ",
      "zh-CN": "跑步，健身，游泳，攀岩，骑自行车，瑜伽",
      "zh-TW": "跑步、健身、游泳、攀岩、騎自行車、瑜伽",
      vi: "Chạy bộ, gym, bơi lội, leo núi, đạp xe, yoga",
      id: "Lari, gym, berenang, panjat tebing, bersepeda, yoga"
    }
  },
  {
    type: "Type2",
    emoji: "🗣️",
    title: {
      ko: "소셜 수다형",
      en: "Social Chat Type",
      ja: "ソーシャルおしゃべり型",
      "zh-CN": "社交聊天型",
      "zh-TW": "社交聊天型",
      vi: "Kiểu trò chuyện xã hội",
      id: "Tipe Obrolan Sosial"
    },
    shortDescription: {
      ko: "말로 풀어! 사람들과의 교류로 에너지 충전하는 사교형",
      en: "Talk it out! A social type who recharges energy through interaction with people",
      ja: "話して解決！人との交流でエネルギーを充電する社交型",
      "zh-CN": "说出来！通过与人交流充电的社交型",
      "zh-TW": "說出來！通過與人交流充電的社交型",
      vi: "Nói ra! Kiểu xã hội nạp năng lượng thông qua tương tác với mọi người",
      id: "Bicarakan! Tipe sosial yang mengisi energi melalui interaksi dengan orang"
    },
    longDescription: {
      ko: "스트레스는 대화로 해결됩니다. 사람들과의 소통을 통해 마음의 짐을 덜어내고 에너지를 회복합니다. 친구, 가족, 동료와의 수다, 하소연, 조언 구하기 등 사회적 상호작용을 통한 힐링을 선호합니다.",
      en: "Stress is resolved through conversation. Relieves mental burden and recovers energy through communication with people. Prefers healing through social interactions like chatting, complaining, seeking advice with friends, family, and colleagues.",
      ja: "ストレスは会話で解決されます。人とのコミュニケーションを通じて心の重荷を軽減し、エネルギーを回復します。友人、家族、同僚とのおしゃべり、愚痴、アドバイスを求めるなどの社会的相互作用によるヒーリングを好みます。",
      "zh-CN": "压力通过对话解决。通过与人的沟通减轻心理负担，恢复能量。喜欢通过社交互动进行治愈，如与朋友、家人、同事聊天、抱怨、寻求建议等。",
      "zh-TW": "壓力通過對話解決。通過與人的溝通減輕心理負擔，恢復能量。喜歡通過社交互動進行治癒，如與朋友、家人、同事聊天、抱怨、尋求建議等。",
      vi: "Căng thẳng được giải quyết thông qua trò chuyện. Giảm bớt gánh nặng tinh thần và phục hồi năng lượng thông qua giao tiếp với mọi người. Thích chữa lành thông qua tương tác xã hội như trò chuyện, than phiền, tìm kiếm lời khuyên với bạn bè, gia đình, đồng nghiệp.",
      id: "Stres diselesaikan melalui percakapan. Meringankan beban mental dan memulihkan energi melalui komunikasi dengan orang. Menyukai penyembuhan melalui interaksi sosial seperti mengobrol, mengeluh, mencari nasihat dengan teman, keluarga, rekan kerja."
    },
    pros: [
      {
        ko: "정서적 지지",
        en: "Emotional support",
        ja: "感情的支持",
        "zh-CN": "情感支持",
        "zh-TW": "情感支持",
        vi: "Hỗ trợ tình cảm",
        id: "Dukungan emosional"
      },
      {
        ko: "관계 강화",
        en: "Relationship strengthening",
        ja: "関係強化",
        "zh-CN": "关系强化",
        "zh-TW": "關係強化",
        vi: "Tăng cường mối quan hệ",
        id: "Memperkuat hubungan"
      },
      {
        ko: "즉각적 위로",
        en: "Immediate comfort",
        ja: "即座の慰め",
        "zh-CN": "即时安慰",
        "zh-TW": "即時安慰",
        vi: "An ủi ngay lập tức",
        id: "Kenyamanan langsung"
      },
      {
        ko: "재미",
        en: "Fun",
        ja: "楽しみ",
        "zh-CN": "乐趣",
        "zh-TW": "樂趣",
        vi: "Vui vẻ",
        id: "Kesenangan"
      }
    ],
    cons: [
      {
        ko: "시간과 비용",
        en: "Time and cost",
        ja: "時間と費用",
        "zh-CN": "时间和成本",
        "zh-TW": "時間和成本",
        vi: "Thời gian và chi phí",
        id: "Waktu dan biaya"
      },
      {
        ko: "의존성",
        en: "Dependency",
        ja: "依存性",
        "zh-CN": "依赖性",
        "zh-TW": "依賴性",
        vi: "Sự phụ thuộc",
        id: "Ketergantungan"
      },
      {
        ko: "프라이버시 부족",
        en: "Lack of privacy",
        ja: "プライバシーの不足",
        "zh-CN": "缺乏隐私",
        "zh-TW": "缺乏隱私",
        vi: "Thiếu riêng tư",
        id: "Kurang privasi"
      }
    ],
    advice: {
      ko: "가끔은 혼자만의 시간도 필요해요. 자기 성찰의 시간을 가져보세요!",
      en: "Sometimes you need time alone too. Take time for self-reflection!",
      ja: "時には一人の時間も必要です。自己反省の時間を持ちましょう！",
      "zh-CN": "有时你也需要独处时间。给自己一些自我反思的时间！",
      "zh-TW": "有時你也需要獨處時間。給自己一些自我反思的時間！",
      vi: "Đôi khi bạn cũng cần thời gian một mình. Dành thời gian để tự suy ngẫm!",
      id: "Kadang-kadang Anda juga perlu waktu sendirian. Luangkan waktu untuk introspeksi diri!"
    },
    recommendedActivities: {
      ko: "회식, 카페 모임, 전화 통화, 동호회",
      en: "Company dinners, cafe meetings, phone calls, clubs",
      ja: "飲み会、カフェミーティング、電話、サークル",
      "zh-CN": "聚餐，咖啡聚会，电话，俱乐部",
      "zh-TW": "聚餐、咖啡聚會、電話、俱樂部",
      vi: "Tiệc tùng, gặp gỡ cà phê, gọi điện, câu lạc bộ",
      id: "Makan malam, pertemuan kafe, panggilan telepon, klub"
    }
  },
  {
    type: "Type3",
    emoji: "🧘",
    title: {
      ko: "혼자 힐링형",
      en: "Solo Healing Type",
      ja: "一人ヒーリング型",
      "zh-CN": "独自疗愈型",
      "zh-TW": "獨自療癒型",
      vi: "Kiểu chữa lành một mình",
      id: "Tipe Penyembuhan Sendiri"
    },
    shortDescription: {
      ko: "고요 속에서! 혼자만의 시간으로 재충전하는 평화주의자",
      en: "In silence! A pacifist who recharges through alone time",
      ja: "静寂の中で！一人の時間で充電する平和主義者",
      "zh-CN": "在宁静中！通过独处时间充电的和平主义者",
      "zh-TW": "在寧靜中！通過獨處時間充電的和平主義者",
      vi: "Trong yên tĩnh! Người theo chủ nghĩa hòa bình nạp năng lượng qua thời gian một mình",
      id: "Dalam keheningan! Pasifis yang mengisi energi melalui waktu sendirian"
    },
    longDescription: {
      ko: "스트레스는 고요함 속에서 자연스럽게 사라집니다. 혼자만의 공간과 시간에서 진정한 휴식을 취합니다. 명상, 독서, 음악 감상 등 조용한 활동을 선호하며, 사람보다는 고독을 통해 에너지를 회복하는 내향적 타입입니다.",
      en: "Stress naturally disappears in silence. Takes true rest in one's own space and time. Prefers quiet activities like meditation, reading, music appreciation, and is an introverted type that recovers energy through solitude rather than people.",
      ja: "ストレスは静寂の中で自然に消えます。一人の空間と時間で真の休息を取ります。瞑想、読書、音楽鑑賞などの静かな活動を好み、人よりも孤独を通じてエネルギーを回復する内向的なタイプです。",
      "zh-CN": "压力在宁静中自然消失。在自己的空间和时间中真正休息。喜欢冥想、阅读、音乐欣赏等安静的活动，是通过孤独而非人群恢复能量的内向型。",
      "zh-TW": "壓力在寧靜中自然消失。在自己的空間和時間中真正休息。喜歡冥想、閱讀、音樂欣賞等安靜的活動，是通過孤獨而非人群恢復能量的內向型。",
      vi: "Căng thẳng tự nhiên biến mất trong im lặng. Nghỉ ngơi thực sự trong không gian và thời gian riêng. Thích các hoạt động yên tĩnh như thiền, đọc sách, thưởng thức âm nhạc, và là kiểu hướng nội phục hồi năng lượng thông qua cô đơn thay vì con người.",
      id: "Stres menghilang secara alami dalam keheningan. Beristirahat dengan benar dalam ruang dan waktu sendiri. Menyukai aktivitas tenang seperti meditasi, membaca, menikmati musik, dan merupakan tipe introvert yang memulihkan energi melalui kesendirian daripada orang."
    },
    pros: [
      {
        ko: "깊은 휴식",
        en: "Deep rest",
        ja: "深い休息",
        "zh-CN": "深度休息",
        "zh-TW": "深度休息",
        vi: "Nghỉ ngơi sâu",
        id: "Istirahat mendalam"
      },
      {
        ko: "자기 성찰",
        en: "Self-reflection",
        ja: "自己反省",
        "zh-CN": "自我反思",
        "zh-TW": "自我反思",
        vi: "Tự suy ngẫm",
        id: "Introspeksi diri"
      },
      {
        ko: "비용 없음",
        en: "No cost",
        ja: "費用なし",
        "zh-CN": "无成本",
        "zh-TW": "無成本",
        vi: "Không tốn kém",
        id: "Tanpa biaya"
      },
      {
        ko: "내면 성장",
        en: "Inner growth",
        ja: "内面成長",
        "zh-CN": "内心成长",
        "zh-TW": "內心成長",
        vi: "Phát triển nội tâm",
        id: "Pertumbuhan batin"
      }
    ],
    cons: [
      {
        ko: "고립감",
        en: "Isolation",
        ja: "孤立感",
        "zh-CN": "孤立感",
        "zh-TW": "孤立感",
        vi: "Cảm giác cô lập",
        id: "Perasaan terisolasi"
      },
      {
        ko: "우울 위험",
        en: "Depression risk",
        ja: "うつ病リスク",
        "zh-CN": "抑郁风险",
        "zh-TW": "抑鬱風險",
        vi: "Rủi ro trầm cảm",
        id: "Risiko depresi"
      },
      {
        ko: "문제 회피 가능",
        en: "Possible problem avoidance",
        ja: "問題回避の可能性",
        "zh-CN": "可能回避问题",
        "zh-TW": "可能迴避問題",
        vi: "Có thể tránh né vấn đề",
        id: "Kemungkinan menghindari masalah"
      }
    ],
    advice: {
      ko: "가끔은 사람들과의 교류도 필요해요. 균형을 찾아보세요!",
      en: "Sometimes you need interaction with people too. Find balance!",
      ja: "時には人との交流も必要です。バランスを取りましょう！",
      "zh-CN": "有时你也需要与人交流。找到平衡！",
      "zh-TW": "有時你也需要與人交流。找到平衡！",
      vi: "Đôi khi bạn cũng cần tương tác với mọi người. Tìm sự cân bằng!",
      id: "Kadang-kadang Anda juga perlu berinteraksi dengan orang. Temukan keseimbangan!"
    },
    recommendedActivities: {
      ko: "명상, 독서, 산책, 목욕, 수면, 조용한 카페",
      en: "Meditation, reading, walking, bathing, sleep, quiet cafe",
      ja: "瞑想、読書、散歩、入浴、睡眠、静かなカフェ",
      "zh-CN": "冥想，阅读，散步，沐浴，睡眠，安静的咖啡厅",
      "zh-TW": "冥想、閱讀、散步、沐浴、睡眠、安靜的咖啡廳",
      vi: "Thiền, đọc sách, đi bộ, tắm, ngủ, quán cà phê yên tĩnh",
      id: "Meditasi, membaca, jalan-jalan, mandi, tidur, kafe yang tenang"
    }
  },
  {
    type: "Type4",
    emoji: "🎨",
    title: {
      ko: "취미 몰입형",
      en: "Hobby Immersion Type",
      ja: "趣味没頭型",
      "zh-CN": "爱好沉浸型",
      "zh-TW": "愛好沉浸型",
      vi: "Kiểu đắm chìm sở thích",
      id: "Tipe Terbenam Hobi"
    },
    shortDescription: {
      ko: "열정으로 잊어! 좋아하는 것에 집중하며 스트레스를 잊는 몰입러",
      en: "Forget with passion! An immersion enthusiast who forgets stress by focusing on what they love",
      ja: "情熱で忘れる！好きなことに集中してストレスを忘れる没頭者",
      "zh-CN": "用热情忘记！专注于喜欢的事情忘记压力的沉浸者",
      "zh-TW": "用熱情忘記！專注於喜歡的事情忘記壓力的沉浸者",
      vi: "Quên bằng đam mê! Người đắm chìm quên căng thẳng bằng cách tập trung vào những gì họ yêu thích",
      id: "Lupakan dengan gairah! Penggemar yang melupakan stres dengan fokus pada hal yang disukai"
    },
    longDescription: {
      ko: "스트레스는 열정적인 취미 활동으로 자연스럽게 사라집니다. 좋아하는 일에 몰입할 때 시간이 멈춘 것처럼 느끼며, 완전한 집중 상태에서 진정한 휴식을 얻습니다. 그림, 음악, 게임, 요리 등 개인적인 취미를 통해 에너지를 회복하는 창작형 타입입니다.",
      en: "Stress naturally disappears through passionate hobby activities. When immersed in what they love, time seems to stop, and they find true rest in a state of complete focus. A creative type that recovers energy through personal hobbies like drawing, music, gaming, cooking.",
      ja: "ストレスは情熱的な趣味活動で自然に消えます。好きなことに没頭する時、時間が止まったように感じ、完全な集中状態で真の休息を得ます。絵画、音楽、ゲーム、料理などの個人的な趣味を通じてエネルギーを回復する創作型タイプです。",
      "zh-CN": "压力通过热情的爱好活动自然消失。当沉浸在自己喜欢的事情中时，时间仿佛停止，在完全专注的状态中获得真正的休息。通过绘画、音乐、游戏、烹饪等个人爱好恢复能量的创作型。",
      "zh-TW": "壓力通過熱情的愛好活動自然消失。當沉浸在自己喜歡的事情中時，時間彷彿停止，在完全專注的狀態中獲得真正的休息。通過繪畫、音樂、遊戲、烹飪等個人愛好恢復能量的創作型。",
      vi: "Căng thẳng tự nhiên biến mất thông qua các hoạt động sở thích đam mê. Khi đắm chìm vào những gì họ yêu thích, thời gian dường như dừng lại, và họ tìm thấy sự nghỉ ngơi thực sự trong trạng thái tập trung hoàn toàn. Một kiểu sáng tạo phục hồi năng lượng thông qua sở thích cá nhân như vẽ, âm nhạc, chơi game, nấu ăn.",
      id: "Stres menghilang secara alami melalui aktivitas hobi yang penuh gairah. Ketika tenggelam dalam hal yang disukai, waktu seolah berhenti, dan mereka menemukan istirahat sejati dalam keadaan fokus penuh. Tipe kreatif yang memulihkan energi melalui hobi pribadi seperti menggambar, musik, bermain game, memasak."
    },
    pros: [
      {
        ko: "즐거움",
        en: "Joy",
        ja: "楽しみ",
        "zh-CN": "快乐",
        "zh-TW": "快樂",
        vi: "Niềm vui",
        id: "Kesenangan"
      },
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        "zh-CN": "创造力",
        "zh-TW": "創造力",
        vi: "Sáng tạo",
        id: "Kreativitas"
      },
      {
        ko: "성취감",
        en: "Sense of achievement",
        ja: "達成感",
        "zh-CN": "成就感",
        "zh-TW": "成就感",
        vi: "Cảm giác thành tựu",
        id: "Rasa pencapaian"
      },
      {
        ko: "새로운 기술 습득",
        en: "Learning new skills",
        ja: "新しい技術習得",
        "zh-CN": "学习新技能",
        "zh-TW": "學習新技能",
        vi: "Học kỹ năng mới",
        id: "Mempelajari keterampilan baru"
      }
    ],
    cons: [
      {
        ko: "시간 소모",
        en: "Time consuming",
        ja: "時間消費",
        "zh-CN": "耗时",
        "zh-TW": "耗時",
        vi: "Tốn thời gian",
        id: "Membutuhkan waktu"
      },
      {
        ko: "비용 가능",
        en: "Possible cost",
        ja: "費用の可能性",
        "zh-CN": "可能产生费用",
        "zh-TW": "可能產生費用",
        vi: "Có thể tốn kém",
        id: "Kemungkinan biaya"
      },
      {
        ko: "현실 회피 위험",
        en: "Reality avoidance risk",
        ja: "現実回避リスク",
        "zh-CN": "回避现实风险",
        "zh-TW": "迴避現實風險",
        vi: "Rủi ro tránh né thực tế",
        id: "Risiko menghindari kenyataan"
      }
    ],
    advice: {
      ko: "취미도 좋지만 근본적인 스트레스 원인 해결도 필요해요!",
      en: "Hobbies are good, but you also need to solve the root cause of stress!",
      ja: "趣味もいいですが、根本的なストレス原因の解決も必要です！",
      "zh-CN": "爱好很好，但你也需要解决压力的根本原因！",
      "zh-TW": "愛好很好，但你也需要解決壓力的根本原因！",
      vi: "Sở thích cũng tốt, nhưng bạn cũng cần giải quyết nguyên nhân gốc rễ của căng thẳng!",
      id: "Hobi juga bagus, tapi Anda juga perlu menyelesaikan akar penyebab stres!"
    },
    recommendedActivities: {
      ko: "게임, 악기 연주, 그림, 요리, 독서, 영화",
      en: "Games, playing instruments, drawing, cooking, reading, movies",
      ja: "ゲーム、楽器演奏、絵画、料理、読書、映画",
      "zh-CN": "游戏，演奏乐器，绘画，烹饪，阅读，电影",
      "zh-TW": "遊戲、演奏樂器、繪畫、烹飪、閱讀、電影",
      vi: "Game, chơi nhạc cụ, vẽ, nấu ăn, đọc sách, xem phim",
      id: "Game, bermain alat musik, menggambar, memasak, membaca, film"
    }
  },
  {
    type: "Type5",
    emoji: "🛍️",
    title: {
      ko: "소비 쇼핑형",
      en: "Consumer Shopping Type",
      ja: "消費ショッピング型",
      "zh-CN": "消费购物型",
      "zh-TW": "消費購物型",
      vi: "Kiểu mua sắm tiêu dùng",
      id: "Tipe Belanja Konsumen"
    },
    shortDescription: {
      ko: "사서 풀어! 구매의 즐거움으로 기분 전환하는 쇼퍼홀릭",
      en: "Buy to relieve! A shopaholic who changes mood through the joy of purchasing",
      ja: "買って解消！購入の楽しみで気分転換するショッパーホリック",
      "zh-CN": "买来缓解！通过购买乐趣转换心情的购物狂",
      "zh-TW": "買來緩解！通過購買樂趣轉換心情的購物狂",
      vi: "Mua để giải tỏa! Người nghiện mua sắm thay đổi tâm trạng qua niềm vui mua sắm",
      id: "Beli untuk meredakan! Shopaholic yang mengubah suasana hati melalui kesenangan berbelanja"
    },
    longDescription: {
      ko: "스트레스는 쇼핑의 즐거움으로 즉시 해결됩니다. 새로운 물건을 구매하는 순간의 설렘과 만족감이 모든 걱정을 잊게 만듭니다. 온라인 쇼핑, 오프라인 쇼핑몰, 브랜드 매장 등 다양한 쇼핑 경험을 통해 기분을 전환하고 에너지를 충전하는 소비형 타입입니다.",
      en: "Stress is immediately resolved through the joy of shopping. The excitement and satisfaction of purchasing new items makes you forget all worries. A consumer type that changes mood and recharges energy through various shopping experiences like online shopping, offline malls, brand stores.",
      ja: "ストレスはショッピングの楽しみで即座に解決されます。新しい物を購入する瞬間のドキドキと満足感がすべての心配を忘れさせます。オンラインショッピング、オフラインモール、ブランド店など様々なショッピング体験を通じて気分転換し、エネルギーを充電する消費型タイプです。",
      "zh-CN": "压力通过购物的乐趣立即解决。购买新物品时的兴奋和满足感让你忘记所有烦恼。通过在线购物、线下商场、品牌店等各种购物体验转换心情、充电能量的消费型。",
      "zh-TW": "壓力通過購物的樂趣立即解決。購買新物品時的興奮和滿足感讓你忘記所有煩惱。通過在線購物、線下商場、品牌店等各種購物體驗轉換心情、充電能量的消費型。",
      vi: "Căng thẳng được giải quyết ngay lập tức thông qua niềm vui mua sắm. Sự phấn khích và thỏa mãn khi mua những món đồ mới khiến bạn quên đi mọi lo lắng. Một kiểu tiêu dùng thay đổi tâm trạng và nạp năng lượng thông qua các trải nghiệm mua sắm đa dạng như mua sắm trực tuyến, trung tâm thương mại, cửa hàng thương hiệu.",
      id: "Stres diselesaikan segera melalui kesenangan berbelanja. Kegembiraan dan kepuasan membeli barang baru membuat Anda melupakan semua kekhawatiran. Tipe konsumen yang mengubah suasana hati dan mengisi energi melalui berbagai pengalaman berbelanja seperti belanja online, mal offline, toko merek."
    },
    pros: [
      {
        ko: "즉각적 만족",
        en: "Immediate satisfaction",
        ja: "即座の満足",
        "zh-CN": "即时满足",
        "zh-TW": "即時滿足",
        vi: "Thỏa mãn ngay lập tức",
        id: "Kepuasan langsung"
      },
      {
        ko: "기분 전환",
        en: "Mood change",
        ja: "気分転換",
        "zh-CN": "心情转换",
        "zh-TW": "心情轉換",
        vi: "Thay đổi tâm trạng",
        id: "Perubahan suasana hati"
      },
      {
        ko: "자기 보상",
        en: "Self-reward",
        ja: "自己報酬",
        "zh-CN": "自我奖励",
        "zh-TW": "自我獎勵",
        vi: "Tự thưởng cho bản thân",
        id: "Hadiah diri sendiri"
      },
      {
        ko: "새로운 것",
        en: "Something new",
        ja: "新しいもの",
        "zh-CN": "新东西",
        "zh-TW": "新東西",
        vi: "Điều gì đó mới",
        id: "Sesuatu yang baru"
      }
    ],
    cons: [
      {
        ko: "경제적 부담",
        en: "Economic burden",
        ja: "経済的負担",
        "zh-CN": "经济负担",
        "zh-TW": "經濟負擔",
        vi: "Gánh nặng kinh tế",
        id: "Beban ekonomi"
      },
      {
        ko: "충동 구매",
        en: "Impulse buying",
        ja: "衝動買い",
        "zh-CN": "冲动购买",
        "zh-TW": "衝動購買",
        vi: "Mua sắm bốc đồng",
        id: "Belanja impulsif"
      },
      {
        ko: "일시적 해소",
        en: "Temporary relief",
        ja: "一時的な解消",
        "zh-CN": "暂时缓解",
        "zh-TW": "暫時緩解",
        vi: "Giải tỏa tạm thời",
        id: "Peredaan sementara"
      },
      {
        ko: "후회 가능",
        en: "Possible regret",
        ja: "後悔の可能性",
        "zh-CN": "可能后悔",
        "zh-TW": "可能後悔",
        vi: "Có thể hối hận",
        id: "Kemungkinan penyesalan"
      }
    ],
    advice: {
      ko: "예산을 정해두세요! 작은 소비로도 충분히 기분 전환할 수 있어요.",
      en: "Set a budget! You can change your mood enough with small purchases too.",
      ja: "予算を決めておきましょう！小さな消費でも十分気分転換できます。",
      "zh-CN": "设定预算！小消费也足以转换心情。",
      "zh-TW": "設定預算！小消費也足以轉換心情。",
      vi: "Hãy đặt ngân sách! Bạn cũng có thể thay đổi tâm trạng đủ với những mua sắm nhỏ.",
      id: "Tetapkan anggaran! Anda juga bisa mengubah suasana hati dengan pembelian kecil."
    },
    recommendedActivities: {
      ko: "쇼핑, 맛집 탐방, 작은 사치, 셀프 선물",
      en: "Shopping, restaurant exploration, small luxuries, self-gifts",
      ja: "ショッピング、美味しい店探索、小さな贅沢、セルフギフト",
      "zh-CN": "购物，美食探店，小奢侈，自我礼物",
      "zh-TW": "購物、美食探店、小奢侈、自我禮物",
      vi: "Mua sắm, khám phá nhà hàng ngon, xa xỉ nhỏ, tự thưởng",
      id: "Belanja, eksplorasi restoran enak, kemewahan kecil, hadiah diri"
    }
  },
  {
    type: "Type6",
    emoji: "😴",
    title: {
      ko: "멍때리기형",
      en: "Zoning Out Type",
      ja: "ボーッとする型",
      "zh-CN": "发呆型",
      "zh-TW": "發呆型",
      vi: "Kiểu thả hồn",
      id: "Tipe Melamun"
    },
    shortDescription: {
      ko: "아무것도 안 해! 완전한 휴식으로 회복하는 궁극의 힐러",
      en: "Do nothing! The ultimate healer who recovers through complete rest",
      ja: "何もしない！完全な休息で回復する究極のヒーラー",
      "zh-CN": "什么都不做！通过完全休息恢复的终极治愈者",
      "zh-TW": "什麼都不做！通過完全休息恢復的終極治癒者",
      vi: "Không làm gì cả! Người chữa lành tối thượng phục hồi qua nghỉ ngơi hoàn toàn",
      id: "Tidak melakukan apa-apa! Penyembuh tertinggi yang pulih melalui istirahat total"
    },
    longDescription: {
      ko: "스트레스는 아무것도 하지 않는 것에서 자연스럽게 사라집니다. 완전한 휴식과 멍때리기, 아무 생각 없이 보내는 시간이 최고의 힐링입니다. 침대에서 누워있기, 창밖 바라보기, 아무것도 하지 않는 시간을 통해 에너지를 회복하는 궁극의 휴식형 타입입니다.",
      en: "Stress naturally disappears from doing nothing. Complete rest, zoning out, and time spent without any thoughts is the ultimate healing. The ultimate rest type that recovers energy through lying in bed, looking out the window, and time spent doing nothing.",
      ja: "ストレスは何もしないことから自然に消えます。完全な休息、ボーッとする、何も考えずに過ごす時間が最高のヒーリングです。ベッドで横になる、窓の外を見る、何もしない時間を通じてエネルギーを回復する究極の休息型タイプです。",
      "zh-CN": "压力在什么都不做中自然消失。完全休息、发呆、什么都不想的时间是最好的治愈。通过躺在床上、看窗外、什么都不做的时间恢复能量的终极休息型。",
      "zh-TW": "壓力在什麼都不做中自然消失。完全休息、發呆、什麼都不想的時間是最好的治癒。通過躺在床上、看窗外、什麼都不做的時間恢復能量的終極休息型。",
      vi: "Căng thẳng tự nhiên biến mất từ việc không làm gì cả. Nghỉ ngơi hoàn toàn, thả hồn, và thời gian trôi qua mà không suy nghĩ gì là sự chữa lành tối thượng. Kiểu nghỉ ngơi tối thượng phục hồi năng lượng thông qua việc nằm trên giường, nhìn ra ngoài cửa sổ, và thời gian không làm gì cả.",
      id: "Stres menghilang secara alami dari tidak melakukan apa-apa. Istirahat total, melamun, dan waktu yang dihabiskan tanpa pikiran adalah penyembuhan tertinggi. Tipe istirahat tertinggi yang memulihkan energi melalui berbaring di tempat tidur, melihat ke luar jendela, dan waktu yang dihabiskan tanpa melakukan apa-apa."
    },
    pros: [
      {
        ko: "완전한 휴식",
        en: "Complete rest",
        ja: "完全な休息",
        "zh-CN": "完全休息",
        "zh-TW": "完全休息",
        vi: "Nghỉ ngơi hoàn toàn",
        id: "Istirahat total"
      },
      {
        ko: "에너지 회복",
        en: "Energy recovery",
        ja: "エネルギー回復",
        "zh-CN": "能量恢复",
        "zh-TW": "能量恢復",
        vi: "Phục hồi năng lượng",
        id: "Pemulihan energi"
      },
      {
        ko: "비용 없음",
        en: "No cost",
        ja: "費用なし",
        "zh-CN": "无成本",
        "zh-TW": "無成本",
        vi: "Không tốn kém",
        id: "Tanpa biaya"
      },
      {
        ko: "단순함",
        en: "Simplicity",
        ja: "シンプルさ",
        "zh-CN": "简单",
        "zh-TW": "簡單",
        vi: "Đơn giản",
        id: "Kesederhanaan"
      }
    ],
    cons: [
      {
        ko: "우울감 증가 가능",
        en: "Possible increased depression",
        ja: "うつ病増加の可能性",
        "zh-CN": "可能增加抑郁",
        "zh-TW": "可能增加抑鬱",
        vi: "Có thể tăng trầm cảm",
        id: "Kemungkinan peningkatan depresi"
      },
      {
        ko: "시간 낭비 느낌",
        en: "Feeling of wasting time",
        ja: "時間浪費感",
        "zh-CN": "浪费时间的感觉",
        "zh-TW": "浪費時間的感覺",
        vi: "Cảm giác lãng phí thời gian",
        id: "Perasaan membuang waktu"
      },
      {
        ko: "무기력",
        en: "Lethargy",
        ja: "無気力",
        "zh-CN": "无精打采",
        "zh-TW": "無精打采",
        vi: "Uể oải",
        id: "Lesu"
      }
    ],
    advice: {
      ko: "휴식도 좋지만 너무 오래는 역효과! 적당한 활동도 섞어보세요.",
      en: "Rest is good, but too long has the opposite effect! Try mixing in some moderate activity too.",
      ja: "休息もいいですが、長すぎると逆効果！適度な活動も混ぜてみましょう。",
      "zh-CN": "休息很好，但太久会有反效果！也试试混合一些适度的活动。",
      "zh-TW": "休息很好，但太久會有反效果！也試試混合一些適度的活動。",
      vi: "Nghỉ ngơi cũng tốt, nhưng quá lâu sẽ có tác dụng ngược! Hãy thử kết hợp một số hoạt động vừa phải.",
      id: "Istirahat juga bagus, tapi terlalu lama akan berakibat sebaliknya! Coba campurkan beberapa aktivitas yang moderat juga."
    },
    recommendedActivities: {
      ko: "낮잠, 멍때리기, 침대 눕기, TV 보기",
      en: "Napping, zoning out, lying in bed, watching TV",
      ja: "昼寝、ボーッとする、ベッドで横になる、テレビを見る",
      "zh-CN": "午睡，发呆，躺在床上，看电视",
      "zh-TW": "午睡、發呆、躺在床上、看電視",
      vi: "Ngủ trưa, thả hồn, nằm trên giường, xem TV",
      id: "Tidur siang, melamun, berbaring di tempat tidur, menonton TV"
    }
  }
];

// 결과 계산 함수
export function calculateStressReliefResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    // answer가 객체이고 scores 속성을 가지고 있는 경우 (새로운 형식)
    if (answer.scores) {
      Object.keys(answer.scores).forEach(type => {
        scores[type as keyof typeof scores] += answer.scores[type];
      });
    } else {
      // 기존 형식 호환성 유지
      Object.keys(answer).forEach(type => {
        scores[type as keyof typeof scores] += answer[type];
      });
    }
  });
  
  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.keys(scores).forEach(type => {
    if (scores[type as keyof typeof scores] > maxScore) {
      maxScore = scores[type as keyof typeof scores];
      resultType = type;
    }
  });
  
  return resultType;
}
