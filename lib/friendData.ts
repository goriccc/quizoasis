export interface FriendQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
    c: Record<string, string>;
    d: Record<string, string>;
  };
}

export interface FriendResult {
  type: number;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  friendsEvaluation: Record<string, string>;
  advice: Record<string, string>;
  bestMatch: Record<string, string>;
  goodMatch: Record<string, string>;
  carefulMatch: Record<string, string>;
}

export const friendQuestions: FriendQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 \"나 지금 힘들어\"라고 연락하면?",
      en: "When a friend contacts you saying \"I'm having a hard time right now\"?",
      ja: "友達が「今、辛い」と連絡してきたら？",
      zh: "朋友联系你说「我现在很难受」时？",
      zhTW: "朋友聯繫你說「我現在很難受」時？",
      vi: "Khi bạn bè liên lạc nói「Tôi đang khó khăn」?",
      id: "Ketika teman menghubungi mengatakan「Aku sedang sulit」?"
    },
    options: {
      a: {
        ko: "\"무슨 일이야? 자세히 말해봐\" 경청",
        en: "\"What happened? Tell me in detail\" Listen",
        ja: "「何があったの？詳しく話して」傾聴",
        zh: "「怎么了？详细说说」倾听",
        zhTW: "「怎麼了？詳細說說」傾聽",
        vi: "「Chuyện gì vậy? Kể chi tiết đi」Lắng nghe",
        id: "「Ada apa? Ceritakan secara detail」Mendengarkan"
      },
      b: {
        ko: "\"괜찮아질 거야!\" 위로와 응원",
        en: "\"It'll be okay!\" Comfort and support",
        ja: "「大丈夫だよ！」慰めと応援",
        zh: "「会好起来的！」安慰和鼓励",
        zhTW: "「會好起來的！」安慰和鼓勵",
        vi: "「Sẽ ổn thôi!」An ủi và động viên",
        id: "「Akan baik-baik saja!」Menghibur dan mendukung"
      },
      c: {
        ko: "\"만나자! 어디 갈까?\" 기분 전환",
        en: "\"Let's meet! Where should we go?\" Change mood",
        ja: "「会おう！どこ行く？」気分転換",
        zh: "「见面吧！去哪儿？」转换心情",
        zhTW: "「見面吧！去哪兒？」轉換心情",
        vi: "「Gặp nhau đi! Đi đâu?」Chuyển đổi tâm trạng",
        id: "「Kita ketemu! Mau ke mana?」Mengalihkan suasana hati"
      },
      d: {
        ko: "\"이렇게 해봐\" 조언과 해결책",
        en: "\"Try this\" Advice and solutions",
        ja: "「こうしてみて」アドバイスと解決策",
        zh: "「试试这样」建议和解决方案",
        zhTW: "「試試這樣」建議和解決方案",
        vi: "「Thử làm thế này」Lời khuyên và giải pháp",
        id: "「Coba ini」Saran dan solusi"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "친구 모임에서 나의 역할은?",
      en: "What is my role in friend gatherings?",
      ja: "友達の集まりでの私の役割は？",
      zh: "在朋友聚会中我的角色是？",
      zhTW: "在朋友聚會中我的角色是？",
      vi: "Vai trò của tôi trong buổi gặp gỡ bạn bè là?",
      id: "Apa peran saya dalam pertemuan teman?"
    },
    options: {
      a: {
        ko: "조용히 듣고 필요할 때만 말함",
        en: "Listen quietly and speak only when needed",
        ja: "静かに聞いて必要な時だけ話す",
        zh: "安静地听，只在需要时说话",
        zhTW: "安靜地聽，只在需要時說話",
        vi: "Lắng nghe yên lặng và chỉ nói khi cần",
        id: "Mendengarkan dengan tenang dan berbicara hanya saat diperlukan"
      },
      b: {
        ko: "분위기 띄우고 웃김",
        en: "Lighten the mood and make people laugh",
        ja: "雰囲気を盛り上げて笑わせる",
        zh: "活跃气氛，逗大家笑",
        zhTW: "活絡氣氛，逗大家笑",
        vi: "Tạo không khí vui vẻ và làm mọi người cười",
        id: "Membuat suasana ceria dan membuat orang tertawa"
      },
      c: {
        ko: "장소 정하고 예약하는 리더",
        en: "Leader who decides location and makes reservations",
        ja: "場所を決めて予約するリーダー",
        zh: "决定地点并预订的领导者",
        zhTW: "決定地點並預訂的領導者",
        vi: "Người lãnh đạo quyết định địa điểm và đặt chỗ",
        id: "Pemimpin yang menentukan lokasi dan melakukan reservasi"
      },
      d: {
        ko: "모두의 의견 듣고 조율",
        en: "Listen to everyone's opinions and coordinate",
        ja: "みんなの意見を聞いて調整",
        zh: "听取所有人的意见并协调",
        zhTW: "聽取所有人的意見並協調",
        vi: "Lắng nghe ý kiến của mọi người và điều phối",
        id: "Mendengarkan pendapat semua orang dan mengoordinasikan"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "친구가 잘못된 선택을 하려 할 때?",
      en: "When a friend is about to make a wrong choice?",
      ja: "友達が間違った選択をしようとする時？",
      zh: "朋友要做出错误选择时？",
      zhTW: "朋友要做出錯誤選擇時？",
      vi: "Khi bạn bè sắp đưa ra lựa chọn sai?",
      id: "Ketika teman akan membuat pilihan yang salah?"
    },
    options: {
      a: {
        ko: "솔직하게 말림",
        en: "Honestly stop them",
        ja: "正直に止める",
        zh: "坦率地阻止",
        zhTW: "坦率地阻止",
        vi: "Ngăn cản một cách thẳng thắn",
        id: "Menghentikan dengan jujur"
      },
      b: {
        ko: "\"네 선택 응원해\" 지지",
        en: "\"I support your choice\" Support",
        ja: "「君の選択を応援するよ」支持",
        zh: "「我支持你的选择」支持",
        zhTW: "「我支持你的選擇」支持",
        vi: "「Tôi ủng hộ lựa chọn của bạn」Ủng hộ",
        id: "「Aku dukung pilihanmu」Mendukung"
      },
      c: {
        ko: "\"이렇게 하는 게 어때?\" 제안",
        en: "\"How about doing it this way?\" Suggest",
        ja: "「こうするのはどう？」提案",
        zh: "「这样做怎么样？」建议",
        zhTW: "「這樣做怎麼樣？」建議",
        vi: "「Làm như thế này thì sao?」Đề xuất",
        id: "「Bagaimana kalau begini?」Menyarankan"
      },
      d: {
        ko: "스스로 깨닫게 둠",
        en: "Let them realize it themselves",
        ja: "自分で気づかせる",
        zh: "让他们自己意识到",
        zhTW: "讓他們自己意識到",
        vi: "Để họ tự nhận ra",
        id: "Biarkan mereka menyadari sendiri"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "친구 생일에 나는?",
      en: "On a friend's birthday, I?",
      ja: "友達の誕生日に私は？",
      zh: "朋友生日时我？",
      zhTW: "朋友生日時我？",
      vi: "Vào sinh nhật bạn bè, tôi?",
      id: "Di ulang tahun teman, saya?"
    },
    options: {
      a: {
        ko: "마음 담은 편지나 선물",
        en: "Heartfelt letter or gift",
        ja: "心を込めた手紙やプレゼント",
        zh: "用心的信件或礼物",
        zhTW: "用心的信件或禮物",
        vi: "Thư hoặc quà chân thành",
        id: "Surat atau hadiah yang tulus"
      },
      b: {
        ko: "깜짝 파티 준비",
        en: "Prepare a surprise party",
        ja: "サプライズパーティーの準備",
        zh: "准备惊喜派对",
        zhTW: "準備驚喜派對",
        vi: "Chuẩn bị tiệc bất ngờ",
        id: "Menyiapkan pesta kejutan"
      },
      c: {
        ko: "실용적인 선물",
        en: "Practical gift",
        ja: "実用的なプレゼント",
        zh: "实用的礼物",
        zhTW: "實用的禮物",
        vi: "Quà thực tế",
        id: "Hadiah praktis"
      },
      d: {
        ko: "함께 시간 보내기",
        en: "Spend time together",
        ja: "一緒に時間を過ごす",
        zh: "一起度过时光",
        zhTW: "一起度過時光",
        vi: "Dành thời gian bên nhau",
        id: "Menghabiskan waktu bersama"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "친구들 사이 갈등이 생기면?",
      en: "When conflicts arise between friends?",
      ja: "友達同士で対立が生じたら？",
      zh: "朋友之间发生冲突时？",
      zhTW: "朋友之間發生衝突時？",
      vi: "Khi xảy ra xung đột giữa bạn bè?",
      id: "Ketika terjadi konflik antar teman?"
    },
    options: {
      a: {
        ko: "객관적으로 중재",
        en: "Mediate objectively",
        ja: "客観的に仲裁",
        zh: "客观地调解",
        zhTW: "客觀地調解",
        vi: "Hòa giải khách quan",
        id: "Mediasi secara objektif"
      },
      b: {
        ko: "둘 다 위로",
        en: "Comfort both",
        ja: "両方を慰める",
        zh: "安慰双方",
        zhTW: "安慰雙方",
        vi: "An ủi cả hai",
        id: "Menghibur keduanya"
      },
      c: {
        ko: "해결책 제시",
        en: "Suggest solutions",
        ja: "解決策を提示",
        zh: "提出解决方案",
        zhTW: "提出解決方案",
        vi: "Đề xuất giải pháp",
        id: "Menyarankan solusi"
      },
      d: {
        ko: "조용히 지켜봄",
        en: "Watch quietly",
        ja: "静かに見守る",
        zh: "静静观察",
        zhTW: "靜靜觀察",
        vi: "Quan sát lặng lẽ",
        id: "Mengamati dengan tenang"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "새로운 친구가 무리에 들어오면?",
      en: "When a new friend joins the group?",
      ja: "新しい友達がグループに入ってきたら？",
      zh: "新朋友加入群体时？",
      zhTW: "新朋友加入群體時？",
      vi: "Khi một người bạn mới tham gia nhóm?",
      id: "Ketika teman baru bergabung dengan kelompok?"
    },
    options: {
      a: {
        ko: "먼저 말 걸고 환영",
        en: "Approach first and welcome",
        ja: "先に話しかけて歓迎",
        zh: "主动打招呼并欢迎",
        zhTW: "主動打招呼並歡迎",
        vi: "Chủ động chào đón",
        id: "Menyapa terlebih dahulu dan menyambut"
      },
      b: {
        ko: "편하게 해주려 노력",
        en: "Try to make them comfortable",
        ja: "居心地良くしようと努力",
        zh: "努力让他们感到舒适",
        zhTW: "努力讓他們感到舒適",
        vi: "Cố gắng làm họ thoải mái",
        id: "Berusaha membuat mereka nyaman"
      },
      c: {
        ko: "소개시켜주고 분위기 주도",
        en: "Introduce them and lead the atmosphere",
        ja: "紹介して雰囲気をリード",
        zh: "介绍并主导氛围",
        zhTW: "介紹並主導氛圍",
        vi: "Giới thiệu và dẫn dắt không khí",
        id: "Memperkenalkan dan memimpin suasana"
      },
      d: {
        ko: "자연스럽게 대함",
        en: "Treat them naturally",
        ja: "自然に接する",
        zh: "自然相处",
        zhTW: "自然相處",
        vi: "Đối xử tự nhiên",
        id: "Memperlakukan secara alami"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "친구가 성공했다는 소식을 들으면?",
      en: "When you hear news of a friend's success?",
      ja: "友達が成功したというニュースを聞いたら？",
      zh: "听到朋友成功的消息时？",
      zhTW: "聽到朋友成功的消息時？",
      vi: "Khi nghe tin bạn bè thành công?",
      id: "Ketika mendengar kabar kesuksesan teman?"
    },
    options: {
      a: {
        ko: "진심으로 축하하고 응원",
        en: "Sincerely congratulate and support",
        ja: "心から祝福して応援",
        zh: "真诚祝贺并支持",
        zhTW: "真誠祝賀並支持",
        vi: "Chúc mừng và ủng hộ chân thành",
        id: "Mengucapkan selamat dan mendukung dengan tulus"
      },
      b: {
        ko: "기뻐하며 파티 제안",
        en: "Be happy and suggest a party",
        ja: "喜んでパーティーを提案",
        zh: "高兴地提议办派对",
        zhTW: "高興地提議辦派對",
        vi: "Vui mừng và đề xuất tổ chức tiệc",
        id: "Gembira dan mengusulkan pesta"
      },
      c: {
        ko: "\"어떻게 했어?\" 물어봄",
        en: "\"How did you do it?\" Ask",
        ja: "「どうやったの？」聞く",
        zh: "「怎么做到的？」询问",
        zhTW: "「怎麼做到的？」詢問",
        vi: "「Làm thế nào vậy?」Hỏi",
        id: "「Bagaimana caranya?」Bertanya"
      },
      d: {
        ko: "\"축하해\" 간단히",
        en: "\"Congratulations\" Simply",
        ja: "「おめでとう」簡単に",
        zh: "「恭喜」简单地",
        zhTW: "「恭喜」簡單地",
        vi: "「Chúc mừng」Đơn giản",
        id: "「Selamat」Sederhana"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "친구와 약속 시간에?",
      en: "For appointments with friends?",
      ja: "友達との約束の時間に？",
      zh: "与朋友约定时间时？",
      zhTW: "與朋友約定時間時？",
      vi: "Về thời gian hẹn với bạn bè?",
      id: "Untuk waktu janji dengan teman?"
    },
    options: {
      a: {
        ko: "항상 정시 도착",
        en: "Always arrive on time",
        ja: "いつも時間通りに到着",
        zh: "总是准时到达",
        zhTW: "總是準時到達",
        vi: "Luôn đến đúng giờ",
        id: "Selalu tiba tepat waktu"
      },
      b: {
        ko: "5-10분 늦음",
        en: "5-10 minutes late",
        ja: "5-10分遅れる",
        zh: "迟到5-10分钟",
        zhTW: "遲到5-10分鐘",
        vi: "Trễ 5-10 phút",
        id: "Terlambat 5-10 menit"
      },
      c: {
        ko: "일찍 도착",
        en: "Arrive early",
        ja: "早めに到着",
        zh: "提前到达",
        zhTW: "提前到達",
        vi: "Đến sớm",
        id: "Tiba lebih awal"
      },
      d: {
        ko: "시간 잘 지킴",
        en: "Keep time well",
        ja: "時間をよく守る",
        zh: "很守时",
        zhTW: "很守時",
        vi: "Giữ giờ giấc tốt",
        id: "Menjaga waktu dengan baik"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "친구가 나에게 비밀을 털어놓으면?",
      en: "When a friend confides a secret to me?",
      ja: "友達が私に秘密を打ち明けたら？",
      zh: "朋友向我倾诉秘密时？",
      zhTW: "朋友向我傾訴秘密時？",
      vi: "Khi bạn bè chia sẻ bí mật với tôi?",
      id: "Ketika teman menceritakan rahasia kepada saya?"
    },
    options: {
      a: {
        ko: "절대 지킴, 무덤까지",
        en: "Absolutely keep it, to the grave",
        ja: "絶対に守る、墓場まで",
        zh: "绝对保守，至死不渝",
        zhTW: "絕對保守，至死不渝",
        vi: "Giữ bí mật tuyệt đối, đến mộ",
        id: "Menjaga dengan mutlak, sampai mati"
      },
      b: {
        ko: "위로하고 공감",
        en: "Comfort and empathize",
        ja: "慰めて共感",
        zh: "安慰和共鸣",
        zhTW: "安慰和共鳴",
        vi: "An ủi và đồng cảm",
        id: "Menghibur dan berempati"
      },
      c: {
        ko: "조언해줌",
        en: "Give advice",
        ja: "アドバイスする",
        zh: "给予建议",
        zhTW: "給予建議",
        vi: "Đưa ra lời khuyên",
        id: "Memberikan saran"
      },
      d: {
        ko: "들어주고 잊어줌",
        en: "Listen and forget",
        ja: "聞いてあげて忘れる",
        zh: "倾听并忘记",
        zhTW: "傾聽並忘記",
        vi: "Lắng nghe và quên đi",
        id: "Mendengarkan dan melupakan"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "오랜만에 연락 온 친구에게?",
      en: "To a friend who contacted after a long time?",
      ja: "久しぶりに連絡してきた友達に？",
      zh: "久未联系的朋友联系时？",
      zhTW: "久未聯繫的朋友聯繫時？",
      vi: "Đến bạn bè liên lạc sau lâu ngày?",
      id: "Kepada teman yang menghubungi setelah lama?"
    },
    options: {
      a: {
        ko: "\"보고 싶었어!\" 반가워함",
        en: "\"I missed you!\" Be happy",
        ja: "「会いたかったよ！」嬉しがる",
        zh: "「好想你！」很高兴",
        zhTW: "「好想你！」很高興",
        vi: "「Nhớ bạn quá!」Vui mừng",
        id: "「Kangen kamu!」Senang"
      },
      b: {
        ko: "\"잘 지냈어?\" 안부",
        en: "\"How have you been?\" Greet",
        ja: "「元気だった？」挨拶",
        zh: "「最近好吗？」问候",
        zhTW: "「最近好嗎？」問候",
        vi: "「Bạn khỏe không?」Hỏi thăm",
        id: "「Apa kabar?」Menyapa"
      },
      c: {
        ko: "\"언제 만날래?\" 일정 잡기",
        en: "\"When should we meet?\" Schedule",
        ja: "「いつ会う？」予定を立てる",
        zh: "「什么时候见面？」安排日程",
        zhTW: "「什麼時候見面？」安排日程",
        vi: "「Khi nào gặp?」Lên lịch",
        id: "「Kapan kita ketemu?」Membuat jadwal"
      },
      d: {
        ko: "자연스럽게 대화",
        en: "Talk naturally",
        ja: "自然に会話",
        zh: "自然聊天",
        zhTW: "自然聊天",
        vi: "Trò chuyện tự nhiên",
        id: "Berbicara secara alami"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "친구의 부탁을 받으면?",
      en: "When asked a favor by a friend?",
      ja: "友達にお願いされたら？",
      zh: "朋友请求帮忙时？",
      zhTW: "朋友請求幫忙時？",
      vi: "Khi được bạn bè nhờ vả?",
      id: "Ketika diminta tolong oleh teman?"
    },
    options: {
      a: {
        ko: "최선을 다해 도와줌",
        en: "Help with all my best",
        ja: "全力で助ける",
        zh: "尽全力帮助",
        zhTW: "盡全力幫助",
        vi: "Giúp đỡ hết sức",
        id: "Membantu dengan sepenuh hati"
      },
      b: {
        ko: "\"당연하지!\" 바로 수락",
        en: "\"Of course!\" Accept immediately",
        ja: "「当然だよ！」すぐに承諾",
        zh: "「当然！」立即接受",
        zhTW: "「當然！」立即接受",
        vi: "「Dĩ nhiên!」Chấp nhận ngay",
        id: "「Tentu saja!」Menerima segera"
      },
      c: {
        ko: "가능 여부 판단 후 결정",
        en: "Decide after judging feasibility",
        ja: "可能かどうか判断してから決定",
        zh: "判断是否可行后决定",
        zhTW: "判斷是否可行後決定",
        vi: "Quyết định sau khi xem xét khả năng",
        id: "Memutuskan setelah menilai kemungkinan"
      },
      d: {
        ko: "할 수 있으면 도와줌",
        en: "Help if I can",
        ja: "できれば助ける",
        zh: "如果可以就帮忙",
        zhTW: "如果可以就幫忙",
        vi: "Giúp nếu có thể",
        id: "Membantu jika bisa"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "친구들이 나를 부르는 이유는?",
      en: "Why do friends call me?",
      ja: "友達が私を呼ぶ理由は？",
      zh: "朋友叫我的原因是？",
      zhTW: "朋友叫我的原因是？",
      vi: "Tại sao bạn bè gọi tôi?",
      id: "Mengapa teman-teman memanggil saya?"
    },
    options: {
      a: {
        ko: "믿음직하고 의지됨",
        en: "Reliable and dependable",
        ja: "頼りになって信頼できる",
        zh: "可靠且值得依赖",
        zhTW: "可靠且值得依賴",
        vi: "Đáng tin cậy và có thể dựa vào",
        id: "Dapat diandalkan dan dipercaya"
      },
      b: {
        ko: "같이 있으면 재미있음",
        en: "Fun to be with",
        ja: "一緒にいると楽しい",
        zh: "在一起很有趣",
        zhTW: "在一起很有趣",
        vi: "Vui vẻ khi ở bên",
        id: "Menyenangkan untuk bersama"
      },
      c: {
        ko: "문제 해결 잘함",
        en: "Good at problem-solving",
        ja: "問題解決が上手",
        zh: "善于解决问题",
        zhTW: "善於解決問題",
        vi: "Giỏi giải quyết vấn đề",
        id: "Pandai menyelesaikan masalah"
      },
      d: {
        ko: "편하고 부담 없음",
        en: "Comfortable and no burden",
        ja: "楽で負担がない",
        zh: "舒适无负担",
        zhTW: "舒適無負擔",
        vi: "Thoải mái và không gánh nặng",
        id: "Nyaman dan tidak memberatkan"
      }
    }
  }
];

export const friendResults: FriendResult[] = [
  {
    type: 1,
    emoji: "🛡️",
    title: {
      ko: "든든한 지원군",
      en: "Reliable Supporter",
      ja: "頼れるサポーター",
      zh: "可靠的支持者",
      zhTW: "可靠的支持者",
      vi: "Người ủng hộ đáng tin cậy",
      id: "Pendukung yang Dapat Diandalkan"
    },
    description: {
      ko: "친구들의 버팀목이자 응원단장! 어떤 순간에도 곁을 지키는 믿음직한 친구입니다. 진심 어린 위로와 응원으로 친구들에게 힘을 줍니다. \"네가 있어서 다행이야\"라는 말을 자주 듣습니다. 비밀을 절대 지키고, 힘들 때 가장 먼저 떠오르는 사람입니다.",
      en: "The pillar and cheerleader of friends! A reliable friend who stays by your side in any moment. Gives strength to friends with sincere comfort and support. Often hears \"I'm glad you're here.\" Keeps secrets absolutely and is the first person that comes to mind when in difficulty.",
      ja: "友達の支えであり応援団長！どんな瞬間も傍にいる頼もしい友達です。心からの慰めと応援で友達に力を与えます。「あなたがいてよかった」とよく言われます。秘密は絶対に守り、辛い時に一番最初に思い浮かぶ人です。",
      zh: "朋友的支柱和啦啦队长！无论何时都守护在身边的可靠朋友。用真诚的安慰和鼓励给朋友力量。经常听到「有你真好」。绝对保守秘密，困难时第一个想到的人。",
      zhTW: "朋友的支柱和啦啦隊長！無論何時都守護在身邊的可靠朋友。用真誠的安慰和鼓勵給朋友力量。經常聽到「有你真好」。絕對保守秘密，困難時第一個想到的人。",
      vi: "Trụ cột và đội trưởng cổ vũ của bạn bè! Người bạn đáng tin cậy luôn bên cạnh trong mọi khoảnh khắc. Trao sức mạnh cho bạn bè bằng sự an ủi và động viên chân thành. Thường nghe「May mà có bạn」. Giữ bí mật tuyệt đối và là người đầu tiên nghĩ đến khi khó khăn.",
      id: "Pilar dan pemimpin pendukung teman! Teman yang dapat diandalkan yang selalu di sisi Anda dalam setiap momen. Memberikan kekuatan kepada teman dengan kenyamanan dan dukungan yang tulus. Sering mendengar「Untung ada kamu」. Menjaga rahasia dengan mutlak dan orang pertama yang terlintas saat kesulitan."
    },
    pros: {
      ko: "신뢰감, 충성심, 헌신적, 따뜻함",
      en: "Trustworthy, Loyal, Devoted, Warm",
      ja: "信頼感、忠誠心、献身的、温かさ",
      zh: "信赖感、忠诚、奉献、温暖",
      zhTW: "信賴感、忠誠、奉獻、溫暖",
      vi: "Đáng tin cậy, Trung thành, Tận tụy, Ấm áp",
      id: "Dapat dipercaya, Setia, Berbakti, Hangat"
    },
    cons: {
      ko: "자신은 돌보지 않음, 경계 없어 지침",
      en: "Doesn't take care of self, No boundaries and gets tired",
      ja: "自分のケアをしない、境界がなく疲れる",
      zh: "不照顾自己、没有界限而疲惫",
      zhTW: "不照顧自己、沒有界限而疲憊",
      vi: "Không chăm sóc bản thân, Không có ranh giới và mệt mỏi",
      id: "Tidak merawat diri sendiri, Tidak ada batasan dan lelah"
    },
    friendsEvaluation: {
      ko: "힘들 때 제일 먼저 생각나는 친구",
      en: "The first friend that comes to mind when in difficulty",
      ja: "辛い時に一番最初に思い浮かぶ友達",
      zh: "困难时第一个想到的朋友",
      zhTW: "困難時第一個想到的朋友",
      vi: "Người bạn đầu tiên nghĩ đến khi khó khăn",
      id: "Teman pertama yang terlintas saat kesulitan"
    },
    advice: {
      ko: "가끔은 당신도 의지하세요! 주는 것만큼 받는 것도 필요합니다.",
      en: "Sometimes lean on others too! You need to receive as much as you give.",
      ja: "たまにはあなたも頼ってください！与えるだけでなく受け取ることも必要です。",
      zh: "偶尔也要依靠别人！接受和给予一样重要。",
      zhTW: "偶爾也要依靠別人！接受和給予一樣重要。",
      vi: "Thỉnh thoảng hãy dựa vào người khác! Bạn cũng cần nhận lấy nhiều như những gì bạn cho đi.",
      id: "Kadang-kadang bergantung pada orang lain juga! Anda perlu menerima sebanyak yang Anda berikan."
    },
    bestMatch: {
      ko: "평화 동반자 (서로 배려)",
      en: "Peaceful Companion (Mutual Care)",
      ja: "平和な同伴者（お互いへの配慮）",
      zh: "和平伴侣（相互关怀）",
      zhTW: "和平伴侶（相互關懷）",
      vi: "Người đồng hành hòa bình (Quan tâm lẫn nhau)",
      id: "Teman Damai (Saling Peduli)"
    },
    goodMatch: {
      ko: "케어형, 조언형",
      en: "Care Type, Advisor Type",
      ja: "ケア型、アドバイザー型",
      zh: "关怀型、顾问型",
      zhTW: "關懷型、顧問型",
      vi: "Người chăm sóc, Người cố vấn",
      id: "Tipe Perawatan, Tipe Penasihat"
    },
    carefulMatch: {
      ko: "리더형 (주도권 경쟁)",
      en: "Leader Type (Leadership Competition)",
      ja: "リーダー型（主導権競争）",
      zh: "领导型（主导权竞争）",
      zhTW: "領導型（主導權競爭）",
      vi: "Người lãnh đạo (Cạnh tranh quyền lãnh đạo)",
      id: "Tipe Pemimpin (Kompetisi Kepemimpinan)"
    }
  },
  {
    type: 2,
    emoji: "🎉",
    title: {
      ko: "분위기 메이커",
      en: "Mood Maker",
      ja: "ムードメーカー",
      zh: "气氛制造者",
      zhTW: "氣氛製造者",
      vi: "Người tạo không khí",
      id: "Pembuat Suasana"
    },
    description: {
      ko: "어디서든 웃음 터지는 에너지 충전소! 함께 있으면 지루할 틈이 없는 재미 담당입니다. 친구들의 스트레스를 날려버리는 비타민 같은 존재입니다. 모임의 중심에서 분위기를 이끌고, \"너랑 있으면 항상 웃겨\"라는 말을 자주 듣습니다.",
      en: "An energy station where laughter bursts everywhere! The fun person who never lets boredom creep in. A vitamin-like existence that blows away friends' stress. Leads the atmosphere from the center of gatherings and often hears \"It's always fun with you.\"",
      ja: "どこでも笑いが溢れるエネルギーステーション！一緒にいると退屈する暇がない楽しい担当です。友達のストレスを吹き飛ばすビタミンのような存在です。集まりの中心で雰囲気をリードし、「あなたといつも楽しい」とよく言われます。",
      zh: "无处不在的欢笑能量站！在一起永远不会无聊的欢乐担当。像维生素一样吹走朋友压力的存在。在聚会中心引领气氛，经常听到「和你在一起总是很开心」。",
      zhTW: "無處不在的歡笑能量站！在一起永遠不會無聊的歡樂擔當。像維生素一樣吹走朋友壓力的存在。在聚會中心引領氣氛，經常聽到「和你在一起總是很開心」。",
      vi: "Trạm năng lượng nơi tiếng cười bùng nổ khắp nơi! Người phụ trách vui vẻ không bao giờ để sự nhàm chán len lỏi vào. Tồn tại như vitamin thổi bay căng thẳng của bạn bè. Dẫn dắt không khí từ trung tâm các buổi gặp gỡ và thường nghe「Luôn vui khi có bạn」.",
      id: "Stasiun energi di mana tawa meledak di mana-mana! Orang yang menyenangkan yang tidak pernah membiarkan kebosanan masuk. Keberadaan seperti vitamin yang meniupkan stres teman. Memimpin suasana dari pusat pertemuan dan sering mendengar「Selalu menyenangkan dengan kamu」."
    },
    pros: {
      ko: "긍정 에너지, 재미, 활력, 사교성",
      en: "Positive Energy, Fun, Vitality, Sociability",
      ja: "ポジティブエネルギー、楽しさ、活力、社交性",
      zh: "积极能量、乐趣、活力、社交性",
      zhTW: "積極能量、樂趣、活力、社交性",
      vi: "Năng lượng tích cực, Vui vẻ, Sức sống, Xã giao",
      id: "Energi Positif, Kesenangan, Vitalitas, Kemampuan Bersosialisasi"
    },
    cons: {
      ko: "진지한 순간 어려움, 감정 숨김",
      en: "Difficulty in serious moments, Hiding emotions",
      ja: "真面目な瞬間が苦手、感情を隠す",
      zh: "严肃时刻困难、隐藏情感",
      zhTW: "嚴肅時刻困難、隱藏情感",
      vi: "Khó khăn trong những khoảnh khắc nghiêm túc, Giấu cảm xúc",
      id: "Kesulitan di momen serius, Menyembunyikan emosi"
    },
    friendsEvaluation: {
      ko: "우울할 때 보고 싶은 친구",
      en: "Friend you want to see when depressed",
      ja: "落ち込んだ時に会いたい友達",
      zh: "抑郁时想见的朋友",
      zhTW: "憂鬱時想見的朋友",
      vi: "Người bạn muốn gặp khi buồn",
      id: "Teman yang ingin ditemui saat sedih"
    },
    advice: {
      ko: "때로는 진지한 대화도 필요해요! 항상 웃을 필요는 없습니다.",
      en: "Sometimes serious conversations are needed too! You don't always have to laugh.",
      ja: "時には真面目な会話も必要です！いつも笑っている必要はありません。",
      zh: "有时也需要严肃的对话！你不必总是笑。",
      zhTW: "有時也需要嚴肅的對話！你不必總是笑。",
      vi: "Đôi khi cũng cần những cuộc trò chuyện nghiêm túc! Bạn không cần phải cười mọi lúc.",
      id: "Terkadang percakapan serius juga diperlukan! Anda tidak harus selalu tertawa."
    },
    bestMatch: {
      ko: "지원군 (균형 완벽)",
      en: "Supporter (Perfect Balance)",
      ja: "サポーター（完璧なバランス）",
      zh: "支持者（完美平衡）",
      zhTW: "支持者（完美平衡）",
      vi: "Người ủng hộ (Cân bằng hoàn hảo)",
      id: "Pendukung (Keseimbangan Sempurna)"
    },
    goodMatch: {
      ko: "모든 타입",
      en: "All Types",
      ja: "すべてのタイプ",
      zh: "所有类型",
      zhTW: "所有類型",
      vi: "Tất cả các loại",
      id: "Semua Tipe"
    },
    carefulMatch: {
      ko: "조언형 (가벼워 보일 수 있음)",
      en: "Advisor Type (May seem superficial)",
      ja: "アドバイザー型（軽く見えることも）",
      zh: "顾问型（可能显得肤浅）",
      zhTW: "顧問型（可能顯得膚淺）",
      vi: "Người cố vấn (Có thể trông hời hợt)",
      id: "Tipe Penasihat (Mungkin terlihat dangkal)"
    }
  },
  {
    type: 3,
    emoji: "🦉",
    title: {
      ko: "현명한 조언자",
      en: "Wise Advisor",
      ja: "賢明なアドバイザー",
      zh: "明智的顾问",
      zhTW: "明智的顧問",
      vi: "Cố vấn khôn ngoan",
      id: "Penasihat Bijaksana"
    },
    description: {
      ko: "문제 해결 전문가, 친구들의 멘토! 객관적이고 논리적인 조언으로 길을 제시하는 현명한 친구입니다. 친구들이 중요한 결정 앞에서 찾는 사람입니다. 실용적이고 효과적인 해결책을 제시하며, \"네 말이 맞았어\"라는 말을 자주 듣습니다.",
      en: "Problem-solving expert, friends' mentor! A wise friend who shows the way with objective and logical advice. The person friends seek when facing important decisions. Presents practical and effective solutions and often hears \"You were right.\"",
      ja: "問題解決の専門家、友達のメンター！客観的で論理的なアドバイスで道を示す賢い友達です。友達が重要な決定を前にする時に探す人です。実用的で効果的な解決策を提示し、「あなたの言う通りだった」とよく言われます。",
      zh: "解决问题的专家，朋友的导师！用客观和逻辑的建议指引方向的明智朋友。朋友面临重要决定时寻找的人。提出实用有效的解决方案，经常听到「你说得对」。",
      zhTW: "解決問題的專家，朋友的導師！用客觀和邏輯的建議指引方向的明智朋友。朋友面臨重要決定時尋找的人。提出實用有效的解決方案，經常聽到「你說得對」。",
      vi: "Chuyên gia giải quyết vấn đề, cố vấn của bạn bè! Người bạn khôn ngoan chỉ đường với lời khuyên khách quan và logic. Người mà bạn bè tìm đến khi đối mặt với quyết định quan trọng. Đưa ra giải pháp thực tế và hiệu quả, thường nghe「Bạn nói đúng」.",
      id: "Ahli pemecahan masalah, mentor teman! Teman bijaksana yang menunjukkan jalan dengan saran objektif dan logis. Orang yang dicari teman saat menghadapi keputusan penting. Menyajikan solusi praktis dan efektif serta sering mendengar「Kamu benar」."
    },
    pros: {
      ko: "현명함, 객관성, 도움됨, 신뢰감",
      en: "Wise, Objective, Helpful, Trustworthy",
      ja: "賢明、客観性、助けになる、信頼感",
      zh: "明智、客观、有帮助、值得信赖",
      zhTW: "明智、客觀、有幫助、值得信賴",
      vi: "Khôn ngoan, Khách quan, Hữu ích, Đáng tin cậy",
      id: "Bijaksana, Objektif, Membantu, Dapat Dipercaya"
    },
    cons: {
      ko: "감정보다 논리 우선, 차가워 보임",
      en: "Logic over emotion, Seems cold",
      ja: "感情より論理優先、冷たく見える",
      zh: "逻辑优于情感、显得冷漠",
      zhTW: "邏輯優於情感、顯得冷漠",
      vi: "Ưu tiên logic hơn cảm xúc, Có vẻ lạnh lùng",
      id: "Logika di atas emosi, Terlihat dingin"
    },
    friendsEvaluation: {
      ko: "고민 상담 1순위 친구",
      en: "First choice friend for advice",
      ja: "悩み相談1位の友達",
      zh: "咨询烦恼的首选朋友",
      zhTW: "諮詢煩惱的首選朋友",
      vi: "Người bạn ưu tiên số 1 để tham khảo",
      id: "Teman pilihan pertama untuk konsultasi"
    },
    advice: {
      ko: "때로는 조언 대신 그냥 들어주기만 해도 충분합니다!",
      en: "Sometimes just listening is enough instead of giving advice!",
      ja: "時にはアドバイスする代わりに聞いてあげるだけで十分です！",
      zh: "有时只是倾听就足够了，而不是给建议！",
      zhTW: "有時只是傾聽就足夠了，而不是給建議！",
      vi: "Đôi khi chỉ cần lắng nghe là đủ thay vì đưa ra lời khuyên!",
      id: "Terkadang hanya mendengarkan sudah cukup daripada memberi saran!"
    },
    bestMatch: {
      ko: "케어형 (논리+감정 완벽)",
      en: "Care Type (Perfect Logic+Emotion)",
      ja: "ケア型（論理＋感情完璧）",
      zh: "关怀型（逻辑+情感完美）",
      zhTW: "關懷型（邏輯+情感完美）",
      vi: "Người chăm sóc (Logic+Cảm xúc hoàn hảo)",
      id: "Tipe Perawatan (Logika+Emosi Sempurna)"
    },
    goodMatch: {
      ko: "리더형, 지원군",
      en: "Leader Type, Supporter",
      ja: "リーダー型、サポーター",
      zh: "领导型、支持者",
      zhTW: "領導型、支持者",
      vi: "Người lãnh đạo, Người ủng hộ",
      id: "Tipe Pemimpin, Pendukung"
    },
    carefulMatch: {
      ko: "분위기 메이커 (온도차)",
      en: "Mood Maker (Temperature Difference)",
      ja: "ムードメーカー（温度差）",
      zh: "气氛制造者（温差）",
      zhTW: "氣氛製造者（溫差）",
      vi: "Người tạo không khí (Chênh lệch nhiệt độ)",
      id: "Pembuat Suasana (Perbedaan Suhu)"
    }
  },
  {
    type: 4,
    emoji: "💝",
    title: {
      ko: "다정한 케어형",
      en: "Caring Healer",
      ja: "優しいケア型",
      zh: "温柔的关怀型",
      zhTW: "溫柔的關懷型",
      vi: "Người chăm sóc tử tế",
      id: "Penyembuh yang Peduli"
    },
    description: {
      ko: "친구들의 마음을 어루만지는 힐러! 공감과 위로의 달인, 아픈 마음을 감싸주는 따뜻한 친구입니다. 어떤 말보다 따뜻한 포옹으로 위로하고, \"너랑 있으면 마음이 편해\"라는 말을 자주 듣습니다. 친구의 작은 변화도 알아챕니다.",
      en: "A healer who soothes friends' hearts! A master of empathy and comfort, a warm friend who embraces hurt hearts. Comforts with warm hugs more than any words and often hears \"I feel comfortable with you.\" Notices even small changes in friends.",
      ja: "友達の心を癒すヒーラー！共感と慰めの達人、傷ついた心を包む温かい友達です。どんな言葉よりも温かい抱擁で慰め、「あなたといると心が落ち着く」とよく言われます。友達の小さな変化も気づきます。",
      zh: "抚慰朋友心灵的治愈者！共情和安慰的大师，拥抱受伤心灵的温暖朋友。用温暖的拥抱而不是言语来安慰，经常听到「和你在一起心里很舒服」。注意到朋友的小变化。",
      zhTW: "撫慰朋友心靈的治癒者！共情和安慰的大師，擁抱受傷心靈的溫暖朋友。用溫暖的擁抱而不是言語來安慰，經常聽到「和你在一起心裡很舒服」。注意到朋友的小變化。",
      vi: "Người chữa lành làm dịu trái tim bạn bè! Bậc thầy của sự đồng cảm và an ủi, người bạn ấm áp ôm lấy những trái tim bị tổn thương. An ủi bằng cái ôm ấm áp hơn bất kỳ lời nào và thường nghe「Tôi cảm thấy thoải mái khi có bạn」. Nhận ra ngay cả những thay đổi nhỏ ở bạn bè.",
      id: "Penyembuh yang menenangkan hati teman! Ahli empati dan kenyamanan, teman hangat yang memeluk hati yang terluka. Menghibur dengan pelukan hangat lebih dari kata-kata apapun dan sering mendengar「Aku merasa nyaman dengan kamu」. Menyadari bahkan perubahan kecil pada teman."
    },
    pros: {
      ko: "공감 능력, 따뜻함, 세심함, 치유력",
      en: "Empathy, Warmth, Attentiveness, Healing",
      ja: "共感力、温かさ、細やかさ、癒し",
      zh: "共情能力、温暖、细心、治愈力",
      zhTW: "共情能力、溫暖、細心、治癒力",
      vi: "Khả năng đồng cảm, Sự ấm áp, Tỉ mỉ, Chữa lành",
      id: "Empati, Kehangatan, Perhatian, Penyembuhan"
    },
    cons: {
      ko: "감정에 휩쓸림, 경계 설정 어려움",
      en: "Swept by emotions, Difficulty setting boundaries",
      ja: "感情に流される、境界設定が難しい",
      zh: "被情感左右、难以设定界限",
      zhTW: "被情感左右、難以設定界限",
      vi: "Bị cuốn theo cảm xúc, Khó đặt ra ranh giới",
      id: "Terseret emosi, Kesulitan menetapkan batasan"
    },
    friendsEvaluation: {
      ko: "마음 아플 때 생각나는 친구",
      en: "Friend that comes to mind when heart hurts",
      ja: "心が痛い時に思い出す友達",
      zh: "心痛时想起的朋友",
      zhTW: "心痛時想起的朋友",
      vi: "Người bạn nghĩ đến khi đau lòng",
      id: "Teman yang terlintas saat hati sakit"
    },
    advice: {
      ko: "당신의 감정도 중요해요! 친구의 슬픔에 너무 깊이 빠지지 마세요.",
      en: "Your emotions are important too! Don't get too deeply into friends' sadness.",
      ja: "あなたの感情も大切です！友達の悲しみに深く入り込みすぎないでください。",
      zh: "你的情感也很重要！不要太深地陷入朋友的悲伤。",
      zhTW: "你的情感也很重要！不要太深地陷入朋友的悲傷。",
      vi: "Cảm xúc của bạn cũng quan trọng! Đừng đắm chìm quá sâu vào nỗi buồn của bạn bè.",
      id: "Emosi Anda juga penting! Jangan terlalu larut dalam kesedihan teman."
    },
    bestMatch: {
      ko: "조언형 (감정+논리 조화)",
      en: "Advisor Type (Emotion+Logic Harmony)",
      ja: "アドバイザー型（感情＋論理調和）",
      zh: "顾问型（情感+逻辑和谐）",
      zhTW: "顧問型（情感+邏輯和諧）",
      vi: "Người cố vấn (Hòa hợp Cảm xúc+Logic)",
      id: "Tipe Penasihat (Harmoni Emosi+Logika)"
    },
    goodMatch: {
      ko: "지원군, 평화 동반자",
      en: "Supporter, Peaceful Companion",
      ja: "サポーター、平和な同伴者",
      zh: "支持者、和平伴侣",
      zhTW: "支持者、和平伴侶",
      vi: "Người ủng hộ, Người đồng hành hòa bình",
      id: "Pendukung, Teman Damai"
    },
    carefulMatch: {
      ko: "리더형 (주도성 차이)",
      en: "Leader Type (Initiative Difference)",
      ja: "リーダー型（主導性の差）",
      zh: "领导型（主动性差异）",
      zhTW: "領導型（主動性差異）",
      vi: "Người lãnh đạo (Khác biệt về tính chủ động)",
      id: "Tipe Pemimpin (Perbedaan Inisiatif)"
    }
  },
  {
    type: 5,
    emoji: "🎯",
    title: {
      ko: "리더십 주도형",
      en: "Leadership Driver",
      ja: "リーダーシップ主導型",
      zh: "领导型",
      zhTW: "領導型",
      vi: "Người lãnh đạo chủ động",
      id: "Penggerak Kepemimpinan"
    },
    description: {
      ko: "모임을 이끄는 카리스마 리더! 장소를 정하고 예약하며 모임을 주도하는 추진력 있는 친구입니다. 결정력이 빠르고 계획적이며, \"네가 없으면 아무것도 안 돼\"라는 말을 자주 듣습니다. 친구들을 이끌고 새로운 경험을 만듭니다.",
      en: "Charismatic leader who leads gatherings! A friend with drive who decides locations, makes reservations, and leads meetings. Quick decision-maker and planner, often hears \"Nothing works without you.\" Leads friends and creates new experiences.",
      ja: "集まりをリードするカリスマリーダー！場所を決めて予約し、集まりを主導する推進力のある友達です。決断力が早く計画的で、「あなたがいないと何もできない」とよく言われます。友達を導いて新しい経験を作ります。",
      zh: "引领聚会的魅力领袖！决定地点、预订并主导聚会的有推动力的朋友。决策快速且有计划，经常听到「没有你什么都做不成」。带领朋友创造新体验。",
      zhTW: "引領聚會的魅力領袖！決定地點、預訂並主導聚會的有推動力的朋友。決策快速且有計劃，經常聽到「沒有你什麼都做不成」。帶領朋友創造新體驗。",
      vi: "Nhà lãnh đạo quyến rũ dẫn dắt các buổi gặp gỡ! Người bạn có động lực quyết định địa điểm, đặt chỗ và dẫn dắt cuộc họp. Ra quyết định nhanh và có kế hoạch, thường nghe「Không có bạn thì chẳng làm được gì」. Dẫn dắt bạn bè và tạo ra những trải nghiệm mới.",
      id: "Pemimpin karismatik yang memimpin pertemuan! Teman dengan dorongan yang menentukan lokasi, melakukan reservasi, dan memimpin pertemuan. Pembuat keputusan cepat dan perencana, sering mendengar「Tanpa kamu tidak ada yang bisa」. Memimpin teman dan menciptakan pengalaman baru."
    },
    pros: {
      ko: "추진력, 결정력, 계획성, 책임감",
      en: "Drive, Decisiveness, Planning, Responsibility",
      ja: "推進力、決断力、計画性、責任感",
      zh: "推动力、决断力、计划性、责任感",
      zhTW: "推動力、決斷力、計劃性、責任感",
      vi: "Động lực, Quyết đoán, Lập kế hoạch, Trách nhiệm",
      id: "Dorongan, Ketegasan, Perencanaan, Tanggung Jawab"
    },
    cons: {
      ko: "독단적, 부담감, 통제 욕구",
      en: "Authoritarian, Burdensome, Control desire",
      ja: "独断的、負担感、支配欲",
      zh: "独断、负担感、控制欲",
      zhTW: "獨斷、負擔感、控制欲",
      vi: "Độc đoán, Gánh nặng, Mong muốn kiểm soát",
      id: "Otoriter, Memberatkan, Keinginan kontrol"
    },
    friendsEvaluation: {
      ko: "믿고 따라가는 친구",
      en: "Friend to trust and follow",
      ja: "信じてついていく友達",
      zh: "信任并跟随的朋友",
      zhTW: "信任並跟隨的朋友",
      vi: "Người bạn tin tưởng và theo sau",
      id: "Teman untuk dipercaya dan diikuti"
    },
    advice: {
      ko: "가끔은 다른 친구가 주도하게 해보세요! 모든 걸 책임질 필요는 없습니다.",
      en: "Sometimes let other friends lead! You don't have to take responsibility for everything.",
      ja: "たまには他の友達に主導させてみてください！すべてを責任を取る必要はありません。",
      zh: "有时让其他朋友主导吧！你不必对一切负责。",
      zhTW: "有時讓其他朋友主導吧！你不必對一切負責。",
      vi: "Đôi khi hãy để bạn bè khác dẫn dắt! Bạn không cần phải chịu trách nhiệm cho mọi thứ.",
      id: "Terkadang biarkan teman lain memimpin! Anda tidak harus bertanggung jawab atas segalanya."
    },
    bestMatch: {
      ko: "평화 동반자 (균형)",
      en: "Peaceful Companion (Balance)",
      ja: "平和な同伴者（バランス）",
      zh: "和平伴侣（平衡）",
      zhTW: "和平伴侶（平衡）",
      vi: "Người đồng hành hòa bình (Cân bằng)",
      id: "Teman Damai (Keseimbangan)"
    },
    goodMatch: {
      ko: "조언형",
      en: "Advisor Type",
      ja: "アドバイザー型",
      zh: "顾问型",
      zhTW: "顧問型",
      vi: "Người cố vấn",
      id: "Tipe Penasihat"
    },
    carefulMatch: {
      ko: "리더형 (충돌 가능), 지원군 (역할 중복)",
      en: "Leader Type (Possible Conflict), Supporter (Role Overlap)",
      ja: "リーダー型（衝突の可能性）、サポーター（役割重複）",
      zh: "领导型（可能冲突）、支持者（角色重叠）",
      zhTW: "領導型（可能衝突）、支持者（角色重疊）",
      vi: "Người lãnh đạo (Có thể xung đột), Người ủng hộ (Chồng chéo vai trò)",
      id: "Tipe Pemimpin (Kemungkinan Konflik), Pendukung (Tumpang Tindih Peran)"
    }
  },
  {
    type: 6,
    emoji: "🌿",
    title: {
      ko: "평화로운 동반자",
      en: "Peaceful Companion",
      ja: "平和な同伴者",
      zh: "和平的伴侣",
      zhTW: "和平的伴侶",
      vi: "Người đồng hành hòa bình",
      id: "Teman Damai"
    },
    description: {
      ko: "부담 없이 함께하는 편안한 친구! 있어도 없어도 편안한, 자연스러운 관계를 만드는 사람입니다. 조용하지만 확실한 존재감이 있고, \"너랑 있으면 편해\"라는 말을 자주 듣습니다. 과도한 관심이나 간섭 없이 각자의 공간을 존중합니다.",
      en: "A comfortable friend to be with without burden! Someone who creates natural relationships that are comfortable whether present or not. Has a quiet but solid presence and often hears \"I'm comfortable with you.\" Respects each other's space without excessive interest or interference.",
      ja: "負担なく一緒にいられる心地よい友達！いてもいなくても心地よい、自然な関係を作る人です。静かでもしっかりした存在感があり、「あなたといると楽だ」とよく言われます。過度な関心や干渉なくお互いの空間を尊重します。",
      zh: "无负担地在一起的舒适朋友！创造无论在不在都舒适的自然关系的人。有安静但确定的存在感，经常听到「和你在一起很舒服」。不过度关注或干涉，尊重彼此的空间。",
      zhTW: "無負擔地在一起的舒適朋友！創造無論在不在都舒適的自然關係的人。有安靜但確定的存在感，經常聽到「和你在一起很舒服」。不過度關注或干涉，尊重彼此的空間。",
      vi: "Người bạn thoải mái để ở bên mà không gánh nặng! Người tạo ra mối quan hệ tự nhiên thoải mái dù có hay không có mặt. Có sự hiện diện lặng lẽ nhưng chắc chắn và thường nghe「Thoải mái khi có bạn」. Tôn trọng không gian của nhau mà không có sự quan tâm hoặc can thiệp quá mức.",
      id: "Teman yang nyaman untuk bersama tanpa beban! Seseorang yang menciptakan hubungan alami yang nyaman baik ada maupun tidak ada. Memiliki kehadiran yang tenang namun solid dan sering mendengar「Nyaman dengan kamu」. Menghormati ruang masing-masing tanpa perhatian atau campur tangan yang berlebihan."
    },
    pros: {
      ko: "편안함, 무리 없음, 안정감, 존중",
      en: "Comfort, No Pressure, Stability, Respect",
      ja: "心地よさ、無理なし、安定感、尊重",
      zh: "舒适、无压力、稳定感、尊重",
      zhTW: "舒適、無壓力、穩定感、尊重",
      vi: "Thoải mái, Không áp lực, Ổn định, Tôn trọng",
      id: "Kenyamanan, Tanpa Tekanan, Stabilitas, Hormat"
    },
    cons: {
      ko: "적극성 부족, 관심 없어 보임",
      en: "Lack of initiative, Seems uninterested",
      ja: "積極性不足、関心がないように見える",
      zh: "缺乏主动性、看起来不关心",
      zhTW: "缺乏主動性、看起來不關心",
      vi: "Thiếu chủ động, Có vẻ không quan tâm",
      id: "Kurang inisiatif, Terlihat tidak tertarik"
    },
    friendsEvaluation: {
      ko: "함께 있으면 편한 친구",
      en: "Friend who is comfortable to be with",
      ja: "一緒にいると楽な友達",
      zh: "在一起很舒服的朋友",
      zhTW: "在一起很舒服的朋友",
      vi: "Người bạn thoải mái khi ở bên",
      id: "Teman yang nyaman untuk bersama"
    },
    advice: {
      ko: "가끔은 먼저 연락해보세요! 관심이 없는 게 아니라는 걸 표현하는 것도 필요합니다.",
      en: "Sometimes contact first! It's necessary to express that you're not uninterested.",
      ja: "たまには先に連絡してみてください！関心がないわけではないことを表現することも必要です。",
      zh: "有时主动联系吧！表达你不是不关心也是必要的。",
      zhTW: "有時主動聯繫吧！表達你不是不關心也是必要的。",
      vi: "Thỉnh thoảng hãy chủ động liên lạc! Cần phải thể hiện rằng bạn không phải là không quan tâm.",
      id: "Terkadang hubungi terlebih dahulu! Perlu untuk mengekspresikan bahwa Anda tidak tidak tertarik."
    },
    bestMatch: {
      ko: "리더형 (조화 완벽)",
      en: "Leader Type (Perfect Harmony)",
      ja: "リーダー型（完璧な調和）",
      zh: "领导型（完美和谐）",
      zhTW: "領導型（完美和諧）",
      vi: "Người lãnh đạo (Hòa hợp hoàn hảo)",
      id: "Tipe Pemimpin (Harmoni Sempurna)"
    },
    goodMatch: {
      ko: "모든 타입",
      en: "All Types",
      ja: "すべてのタイプ",
      zh: "所有类型",
      zhTW: "所有類型",
      vi: "Tất cả các loại",
      id: "Semua Tipe"
    },
    carefulMatch: {
      ko: "평화 동반자 (둘 다 수동적)",
      en: "Peaceful Companion (Both Passive)",
      ja: "平和な同伴者（両方受動的）",
      zh: "和平伴侣（双方都被动）",
      zhTW: "和平伴侶（雙方都被動）",
      vi: "Người đồng hành hòa bình (Cả hai đều thụ động)",
      id: "Teman Damai (Keduanya Pasif)"
    }
  }
];

export function calculateFriendResult(answers: string[]): FriendResult {
  // 각 타입별 점수 계산
  const scores = {
    1: 0, // 지원군
    2: 0, // 분위기메이커
    3: 0, // 조언형
    4: 0, // 케어형
    5: 0, // 리더형
    6: 0  // 평화동반자
  };

  // 각 질문별 점수 계산
  const questionScores = [
    { a: 4, b: 1, c: 2, d: 3 }, // Q1: A=케어형, B=지원군, C=분위기메이커, D=조언형
    { a: 6, b: 2, c: 5, d: 4 }, // Q2: A=평화동반자, B=분위기메이커, C=리더형, D=케어형
    { a: 3, b: 1, c: 3, d: 6 }, // Q3: A=조언형, B=지원군, C=조언형, D=평화동반자
    { a: 4, b: 2, c: 3, d: 6 }, // Q4: A=케어형, B=분위기메이커, C=조언형, D=평화동반자
    { a: 3, b: 4, c: 3, d: 6 }, // Q5: A=조언형, B=케어형, C=조언형, D=평화동반자
    { a: 2, b: 4, c: 5, d: 6 }, // Q6: A=분위기메이커, B=케어형, C=리더형, D=평화동반자
    { a: 1, b: 2, c: 3, d: 6 }, // Q7: A=지원군, B=분위기메이커, C=조언형, D=평화동반자
    { a: 3, b: 2, c: 1, d: 6 }, // Q8: A=조언형, B=분위기메이커, C=지원군, D=평화동반자
    { a: 1, b: 4, c: 3, d: 6 }, // Q9: A=지원군, B=케어형, C=조언형, D=평화동반자
    { a: 2, b: 4, c: 5, d: 6 }, // Q10: A=분위기메이커, B=케어형, C=리더형, D=평화동반자
    { a: 1, b: 2, c: 3, d: 6 }, // Q11: A=지원군, B=분위기메이커, C=조언형, D=평화동반자
    { a: 1, b: 2, c: 3, d: 6 }  // Q12: A=지원군, B=분위기메이커, C=조언형, D=평화동반자
  ];

  // 답변에 따른 점수 계산
  answers.forEach((answer, index) => {
    if (questionScores[index]) {
      const score = questionScores[index][answer as keyof typeof questionScores[0]];
      scores[score as keyof typeof scores]++;
    }
  });

  // 최고 점수 타입 찾기
  let maxScore = 0;
  let resultType = 1;
  
  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      resultType = parseInt(type);
    }
  }

  // 동점일 경우 Q10-Q12 우선 반영
  if (maxScore === 0 || Object.values(scores).filter(s => s === maxScore).length > 1) {
    const lastAnswers = answers.slice(9, 12); // Q10-Q12
    const lastQuestionScores = [
      { a: 2, b: 4, c: 5, d: 6 }, // Q10
      { a: 1, b: 2, c: 3, d: 6 }, // Q11
      { a: 1, b: 2, c: 3, d: 6 }  // Q12
    ];
    
    const lastScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    lastAnswers.forEach((answer, index) => {
      if (lastQuestionScores[index]) {
        const score = lastQuestionScores[index][answer as keyof typeof lastQuestionScores[0]];
        lastScores[score as keyof typeof lastScores]++;
      }
    });
    
    let maxLastScore = 0;
    for (const [type, score] of Object.entries(lastScores)) {
      if (score > maxLastScore) {
        maxLastScore = score;
        resultType = parseInt(type);
      }
    }
  }

  return friendResults.find(r => r.type === resultType) || friendResults[0];
}
