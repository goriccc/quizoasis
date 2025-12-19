export interface Phase2AreYouTQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // T 성향(이성적/현실적) = +1, F 성향(감정적/공감) = 0
  }[];
}

export interface Phase2AreYouTResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  tLevel: Record<string, string>; // T 지수
  mainLines: Record<string, string>; // 주요 대사
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2AreYouTQuestions: Phase2AreYouTQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 \"나 우울해서 머리 잘랐어\"라고 했다. 당신의 반응은?",
      en: "A friend says \"I got my hair cut because I was depressed.\" Your reaction?",
      ja: "友達が「落ち込んで髪を切った」と言った。あなたの反応は？",
      "zh-CN": "朋友说\"我因为抑郁剪了头发\"。你的反应是？",
      "zh-TW": "朋友說「我因為抑鬱剪了頭髮」。你的反應是？",
      vi: "Bạn bè nói \"Mình cắt tóc vì chán nản.\" Phản ứng của bạn?",
      id: "Teman mengatakan \"Saya potong rambut karena depresi.\" Reaksi Anda?"
    },
    options: [
      {
        text: {
          ko: "\"왜? 무슨 일 있었어? (머리는 어때?)\"",
          en: "\"Why? What happened? (How does your hair look?)\"",
          ja: "「どうして？何があったの？（髪はどう？）」",
          "zh-CN": "\"为什么？发生什么事了？（头发怎么样？）\"",
          "zh-TW": "「為什麼？發生什麼事了？（頭髮怎麼樣？）」",
          vi: "\"Sao vậy? Chuyện gì đã xảy ra? (Tóc trông thế nào?)\"",
          id: "\"Kenapa? Apa yang terjadi? (Bagaimana rambutnya?)\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"얼마 주고 잘랐어? 사진 보여줘\"",
          en: "\"How much did you pay? Show me a photo\"",
          ja: "「いくらで切った？写真見せて」",
          "zh-CN": "\"花了多少钱？给我看看照片\"",
          "zh-TW": "「花了多少錢？給我看看照片」",
          vi: "\"Bạn trả bao nhiêu? Cho mình xem ảnh\"",
          id: "\"Berapa yang dibayar? Tunjukkan foto\""
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 \"나 배 아파서 죽을 것 같아 ㅠㅠ\"라고 카톡을 보냈다.",
      en: "A friend sent a message saying \"My stomach hurts so much I think I'm going to die ㅠㅠ\"",
      ja: "友達が「お腹が痛くて死にそう ㅠㅠ」とメッセージを送ってきた。",
      "zh-CN": "朋友发消息说\"我肚子疼得要死 ㅠㅠ\"",
      "zh-TW": "朋友發訊息說「我肚子疼得要死 ㅠㅠ」",
      vi: "Bạn bè gửi tin nhắn \"Bụng mình đau quá, tưởng chết mất ㅠㅠ\"",
      id: "Teman mengirim pesan \"Perutku sakit sekali sampai seperti mau mati ㅠㅠ\""
    },
    options: [
      {
        text: {
          ko: "\"헐 괜찮아? 약은 먹었어? ㅠㅠ\"",
          en: "\"Oh no, are you okay? Did you take medicine? ㅠㅠ\"",
          ja: "「えー大丈夫？薬は飲んだ？ㅠㅠ」",
          "zh-CN": "\"天哪，你还好吗？吃药了吗？ㅠㅠ\"",
          "zh-TW": "「天哪，你還好嗎？吃藥了嗎？ㅠㅠ」",
          vi: "\"Ồ không, bạn ổn chứ? Đã uống thuốc chưa? ㅠㅠ\"",
          id: "\"Oh tidak, kamu baik-baik saja? Sudah minum obat? ㅠㅠ\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"어제 뭐 먹었는데? 혹시 장염 아니야?\"",
          en: "\"What did you eat yesterday? Could it be enteritis?\"",
          ja: "「昨日何食べた？もしかして腸炎じゃない？」",
          "zh-CN": "\"昨天吃了什么？会不会是肠炎？\"",
          "zh-TW": "「昨天吃了什麼？會不會是腸炎？」",
          vi: "\"Hôm qua bạn ăn gì? Có phải viêm ruột không?\"",
          id: "\"Kemarin makan apa? Mungkin radang usus?\""
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "애인이 \"나 차 사고 났어...\"라고 전화했다. 당신의 첫 마디는?",
      en: "Your partner called saying \"I had a car accident...\" Your first words?",
      ja: "恋人が「交通事故に遭った...」と電話してきた。あなたの最初の言葉は？",
      "zh-CN": "恋人打电话说\"我出车祸了...\"。你的第一句话是？",
      "zh-TW": "戀人打電話說「我出車禍了...」。你的第一句話是？",
      vi: "Người yêu gọi điện nói \"Mình bị tai nạn xe...\" Lời đầu tiên của bạn?",
      id: "Pasangan Anda menelepon mengatakan \"Saya mengalami kecelakaan mobil...\" Kata pertama Anda?"
    },
    options: [
      {
        text: {
          ko: "\"많이 다쳤어? 몸은 괜찮아?\"",
          en: "\"Are you badly hurt? Are you okay?\"",
          ja: "「大怪我した？体は大丈夫？」",
          "zh-CN": "\"伤得严重吗？身体还好吗？\"",
          "zh-TW": "「傷得嚴重嗎？身體還好嗎？」",
          vi: "\"Bạn có bị thương nặng không? Cơ thể ổn chứ?\"",
          id: "\"Apakah kamu terluka parah? Apakah kamu baik-baik saja?\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"보험 불렀어? 과실 비율은 어떻게 된대?\"",
          en: "\"Did you call the insurance? What's the fault ratio?\"",
          ja: "「保険会社には連絡した？過失割合はどうなった？」",
          "zh-CN": "\"给保险公司打电话了吗？责任比例是多少？\"",
          "zh-TW": "「給保險公司打電話了嗎？責任比例是多少？」",
          vi: "\"Bạn đã gọi bảo hiểm chưa? Tỷ lệ lỗi như thế nào?\"",
          id: "\"Apakah kamu sudah menghubungi asuransi? Bagaimana rasio kesalahan?\""
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "슬픈 영화를 볼 때 당신의 모습은?",
      en: "What are you like when watching a sad movie?",
      ja: "悲しい映画を見るとき、あなたの様子は？",
      "zh-CN": "看悲伤电影时你的样子是？",
      "zh-TW": "看悲傷電影時你的樣子是？",
      vi: "Bạn như thế nào khi xem phim buồn?",
      id: "Bagaimana Anda saat menonton film sedih?"
    },
    options: [
      {
        text: {
          ko: "주인공이 울기 시작하면 나도 이미 오열 중이다",
          en: "When the protagonist starts crying, I'm already sobbing",
          ja: "主人公が泣き始めると、私ももう号泣している",
          "zh-CN": "主角一开始哭，我也已经在嚎啕大哭了",
          "zh-TW": "主角一開始哭，我也已經在嚎啕大哭了",
          vi: "Khi nhân vật chính bắt đầu khóc, tôi đã khóc nức nở",
          id: "Ketika protagonis mulai menangis, saya sudah menangis tersedu-sedu"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "'저 상황에서 왜 저러지?' 개연성을 따지거나 덤덤하다",
          en: "'Why would they do that in that situation?' I question the plausibility or stay calm",
          ja: "「あの状況でなぜそうするの？」可能性を問いただすか、冷静",
          "zh-CN": "\"那种情况下为什么会那样？\"我会质疑合理性或保持冷静",
          "zh-TW": "「那種情況下為什麼會那樣？」我會質疑合理性或保持冷靜",
          vi: "'Tại sao họ lại làm vậy trong tình huống đó?' Tôi đặt câu hỏi về tính hợp lý hoặc bình tĩnh",
          id: "'Mengapa mereka melakukan itu dalam situasi itu?' Saya mempertanyakan kemungkinan atau tetap tenang"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "시험에 떨어져서 우울해하는 친구에게 해줄 말은?",
      en: "What would you say to a friend who's depressed about failing an exam?",
      ja: "試験に落ちて落ち込んでいる友達に何と言う？",
      "zh-CN": "你会对因考试失败而沮丧的朋友说什么？",
      "zh-TW": "你會對因考試失敗而沮喪的朋友說什麼？",
      vi: "Bạn sẽ nói gì với bạn bè đang buồn vì thi trượt?",
      id: "Apa yang akan Anda katakan kepada teman yang depresi karena gagal ujian?"
    },
    options: [
      {
        text: {
          ko: "\"진짜 속상하겠다... 술 한잔할까?\"",
          en: "\"That must be really disappointing... Want to grab a drink?\"",
          ja: "「本当に残念だね...一杯飲まない？」",
          "zh-CN": "\"一定很失望吧...去喝一杯？\"",
          "zh-TW": "「一定很失望吧...去喝一杯？」",
          vi: "\"Chắc là thất vọng lắm... Đi uống một ly không?\"",
          id: "\"Pasti sangat mengecewakan... Mau minum?\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"어떤 문제 틀렸는데? 다음엔 이렇게 준비해 봐\"",
          en: "\"Which problems did you get wrong? Try preparing like this next time\"",
          ja: "「どの問題を間違えた？次はこうやって準備してみて」",
          "zh-CN": "\"哪些题做错了？下次这样准备试试\"",
          "zh-TW": "「哪些題做錯了？下次這樣準備試試」",
          vi: "\"Bạn làm sai những câu nào? Lần sau thử chuẩn bị như thế này\"",
          id: "\"Masalah apa yang salah? Coba persiapkan seperti ini lain kali\""
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "누군가 나에게 \"너 진짜 착하다\"라고 칭찬했다.",
      en: "Someone praised me saying \"You're really kind.\"",
      ja: "誰かが私に「あなた本当に優しい」と褒めてくれた。",
      "zh-CN": "有人称赞我说\"你真的很善良\"。",
      "zh-TW": "有人稱讚我說「你真的很善良」。",
      vi: "Ai đó khen tôi \"Bạn thật sự tốt bụng.\"",
      id: "Seseorang memuji saya dengan mengatakan \"Kamu benar-benar baik.\""
    },
    options: [
      {
        text: {
          ko: "기분이 좋아지며 \"고마워! 너도 진짜 착해.\"라고 답한다",
          en: "I feel good and reply \"Thanks! You're really kind too.\"",
          ja: "気分が良くなり「ありがとう！あなたも本当に優しいね。」と答える",
          "zh-CN": "心情变好，回答说\"谢谢！你也很善良。\"",
          "zh-TW": "心情變好，回答說「謝謝！你也很善良。」",
          vi: "Tôi cảm thấy vui và trả lời \"Cảm ơn! Bạn cũng rất tốt bụng.\"",
          id: "Saya merasa senang dan menjawab \"Terima kasih! Kamu juga benar-benar baik.\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "'내가 뭘 해서 착하다고 하는 거지?' 그 이유가 궁금하다",
          en: "'What did I do to be called kind?' I'm curious about the reason",
          ja: "「私が何をして優しいと言われたの？」その理由が気になる",
          "zh-CN": "\"我做了什么被说善良？\"我好奇原因",
          "zh-TW": "「我做了什麼被說善良？」我好奇原因",
          vi: "'Mình đã làm gì để được gọi là tốt bụng?' Tôi tò mò về lý do",
          id: "'Apa yang saya lakukan sehingga disebut baik?' Saya penasaran dengan alasannya"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구와 싸우고 화해할 때 더 중요한 것은?",
      en: "What's more important when fighting and making up with a friend?",
      ja: "友達と喧嘩して仲直りするとき、より重要なのは？",
      "zh-CN": "和朋友吵架后和好时，更重要的是什么？",
      "zh-TW": "和朋友吵架後和好時，更重要的是什麼？",
      vi: "Điều gì quan trọng hơn khi cãi nhau và làm hòa với bạn bè?",
      id: "Apa yang lebih penting saat bertengkar dan berbaikan dengan teman?"
    },
    options: [
      {
        text: {
          ko: "서로의 서운했던 감정을 충분히 털어놓고 이해하는 것",
          en: "Fully expressing and understanding each other's hurt feelings",
          ja: "お互いの残念だった感情を十分に吐き出して理解すること",
          "zh-CN": "充分倾诉和理解彼此受伤的感情",
          "zh-TW": "充分傾訴和理解彼此受傷的感情",
          vi: "Bày tỏ đầy đủ và hiểu cảm xúc tổn thương của nhau",
          id: "Mengekspresikan dan memahami perasaan terluka satu sama lain dengan penuh"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "누가 무엇을 잘못했는지 시시비비를 명확히 가리는 것",
          en: "Clearly determining who did what wrong",
          ja: "誰が何を間違えたか、是非を明確に判断すること",
          "zh-CN": "明确判断谁做错了什么",
          "zh-TW": "明確判斷誰做錯了什麼",
          vi: "Xác định rõ ràng ai đã làm sai điều gì",
          id: "Menentukan dengan jelas siapa yang melakukan kesalahan apa"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "멍 때릴 때 주로 하는 생각은?",
      en: "What do you usually think about when spacing out?",
      ja: "ぼーっとしているとき、主に何を考える？",
      "zh-CN": "发呆时你主要想什么？",
      "zh-TW": "發呆時你主要想什麼？",
      vi: "Bạn thường nghĩ gì khi đang mơ màng?",
      id: "Apa yang biasanya Anda pikirkan saat melamun?"
    },
    options: [
      {
        text: {
          ko: "'만약에 좀비가 나타나면...' 꼬리에 꼬리를 무는 상상",
          en: "'What if zombies appear...' Endless chain of imagination",
          ja: "「もしゾンビが現れたら...」次々と連なる想像",
          "zh-CN": "\"如果僵尸出现...\"一连串的想象",
          "zh-TW": "「如果殭屍出現...」一連串的想像",
          vi: "'Nếu zombie xuất hiện...' Chuỗi tưởng tượng không dứt",
          id: "'Bagaimana jika zombie muncul...' Rantai imajinasi yang tak berujung"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "'오늘 저녁 뭐 먹지? 내일 할 일이 뭐더라.' 현실적인 계획",
          en: "'What should I eat for dinner? What do I need to do tomorrow?' Realistic plans",
          ja: "「今日の夕食何食べよう？明日やること何だっけ。」現実的な計画",
          "zh-CN": "\"今晚吃什么？明天要做什么来着？\"现实的计划",
          "zh-TW": "「今晚吃什麼？明天要做什麼來著？」現實的計劃",
          vi: "'Tối nay ăn gì? Ngày mai cần làm gì nhỉ?' Kế hoạch thực tế",
          id: "'Makan malam apa hari ini? Apa yang perlu dilakukan besok?' Rencana realistis"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "요리하다가 손을 다쳤다. \"아파!\"라고 했을 때 듣고 싶은 말은?",
      en: "I hurt my hand while cooking. When I say \"It hurts!\" what do you want to hear?",
      ja: "料理中に手を怪我した。「痛い！」と言ったとき、聞きたい言葉は？",
      "zh-CN": "做饭时手受伤了。当我说\"好疼！\"时，你想听什么？",
      "zh-TW": "做飯時手受傷了。當我說「好疼！」時，你想聽什麼？",
      vi: "Tôi bị thương tay khi nấu ăn. Khi tôi nói \"Đau quá!\" bạn muốn nghe gì?",
      id: "Saya melukai tangan saat memasak. Ketika saya mengatakan \"Sakit!\" apa yang ingin Anda dengar?"
    },
    options: [
      {
        text: {
          ko: "\"호~ 괜찮아? 많이 아프지? ㅠㅠ\"",
          en: "\"Oh~ Are you okay? Does it hurt a lot? ㅠㅠ\"",
          ja: "「おー大丈夫？すごく痛い？ㅠㅠ」",
          "zh-CN": "\"哦~你还好吗？很疼吗？ㅠㅠ\"",
          "zh-TW": "「哦~你還好嗎？很疼嗎？ㅠㅠ」",
          vi: "\"Ồ~ Bạn ổn chứ? Đau nhiều không? ㅠㅠ\"",
          id: "\"Oh~ Apakah kamu baik-baik saja? Apakah sangat sakit? ㅠㅠ\""
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"어디 봐봐. 밴드랑 연고 가져올게\"",
          en: "\"Let me see. I'll bring bandages and ointment\"",
          ja: "「どこ見せて。絆創膏と軟膏持ってくる」",
          "zh-CN": "\"让我看看。我去拿绷带和药膏\"",
          "zh-TW": "「讓我看看。我去拿繃帶和藥膏」",
          vi: "\"Để mình xem. Mình sẽ lấy băng và thuốc mỡ\"",
          id: "\"Mana, biar saya lihat. Saya akan ambil perban dan salep\""
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "\"나 요즘 너무 힘들어\"라는 친구의 말에 당신의 속마음은?",
      en: "What's your inner thought when a friend says \"I'm having such a hard time lately\"?",
      ja: "友達の「最近すごく大変なんだ」という言葉に、あなたの本心は？",
      "zh-CN": "当朋友说\"我最近太难了\"时，你内心的想法是？",
      "zh-TW": "當朋友說「我最近太難了」時，你內心的想法是？",
      vi: "Suy nghĩ thầm của bạn khi bạn bè nói \"Dạo này mình rất khó khăn\" là gì?",
      id: "Apa pikiran batin Anda ketika teman mengatakan \"Saya sangat kesulitan belakangan ini\"?"
    },
    options: [
      {
        text: {
          ko: "'얼마나 힘들면 말을 꺼냈을까...' 내 마음도 같이 무거워진다",
          en: "'How hard must it be for them to bring this up...' My heart also becomes heavy",
          ja: "「どれだけ大変だったら口にしたんだろう...」私の心も重くなる",
          "zh-CN": "\"得有多难才会说出来...\"我的心也变得沉重",
          "zh-TW": "「得有多難才會說出來...」我的心也變得沉重",
          vi: "'Phải khó khăn đến mức nào họ mới nói ra...' Lòng tôi cũng trở nên nặng nề",
          id: "'Seberapa sulitnya sampai mereka mengatakannya...' Hati saya juga menjadi berat"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "'또 시작이네. 다들 힘들게 사는데 왜 유난이지?' 이해가 안 간다",
          en: "'Here we go again. Everyone has a hard time, why are they making a fuss?' I don't understand",
          ja: "「また始まった。みんな大変に生きてるのに、なぜ大げさなの？」理解できない",
          "zh-CN": "\"又来了。大家都不容易，为什么这么矫情？\"无法理解",
          "zh-TW": "「又來了。大家都不容易，為什麼這麼矯情？」無法理解",
          vi: "'Lại bắt đầu rồi. Ai cũng khó khăn, sao lại làm quá lên?' Tôi không hiểu",
          id: "'Ini dia lagi. Semua orang hidup susah, kenapa berlebihan?' Saya tidak mengerti"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "선물 받은 물건이 마음에 안 들 때 반응은?",
      en: "What's your reaction when you receive a gift you don't like?",
      ja: "もらったプレゼントが気に入らないとき、反応は？",
      "zh-CN": "收到不喜欢的礼物时，你的反应是？",
      "zh-TW": "收到不喜歡的禮物時，你的反應是？",
      vi: "Phản ứng của bạn khi nhận được món quà không thích là gì?",
      id: "Apa reaksi Anda ketika menerima hadiah yang tidak Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "\"와! 진짜 예쁘다! (안 씀)\" 상대가 무안할까 봐 맘에 드는 척한다",
          en: "\"Wow! It's really pretty! (Won't use it)\" I pretend to like it so they won't feel awkward",
          ja: "「わあ！本当にきれい！（使わない）」相手が気まずくなるのを恐れて気に入ったふりをする",
          "zh-CN": "\"哇！真的很漂亮！（不会用）\"我假装喜欢，以免对方尴尬",
          "zh-TW": "「哇！真的很漂亮！（不會用）」我假裝喜歡，以免對方尷尬",
          vi: "\"Ồ! Thật đẹp! (Không dùng)\" Tôi giả vờ thích để họ không bị ngượng",
          id: "\"Wah! Benar-benar cantik! (Tidak akan digunakan)\" Saya berpura-pura menyukainya agar mereka tidak merasa canggung"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "\"고마워. 근데 영수증 있어? 색상 교환하게.\" 실용성을 택한다",
          en: "\"Thanks. But do you have the receipt? I'll exchange it for a different color.\" I choose practicality",
          ja: "「ありがとう。でもレシートある？色交換してもらう。」実用性を選ぶ",
          "zh-CN": "\"谢谢。不过有收据吗？我去换个颜色。\"我选择实用性",
          "zh-TW": "「謝謝。不過有收據嗎？我去換個顏色。」我選擇實用性",
          vi: "\"Cảm ơn. Nhưng có hóa đơn không? Để mình đổi màu.\" Tôi chọn tính thực dụng",
          id: "\"Terima kasih. Tapi ada struknya? Saya akan tukar warnanya.\" Saya memilih kepraktisan"
        },
        score: 1 // T 성향
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 생각하는 최악의 인간상은?",
      en: "What do you think is the worst type of person?",
      ja: "あなたが考える最悪の人間像は？",
      "zh-CN": "你认为最糟糕的人是什么样的？",
      "zh-TW": "你認為最糟糕的人是什麼樣的？",
      vi: "Bạn nghĩ kiểu người tồi tệ nhất là gì?",
      id: "Apa yang Anda pikir adalah tipe orang terburuk?"
    },
    options: [
      {
        text: {
          ko: "앞뒤 다르고 사람 무시하는 인성 파탄자",
          en: "A person with broken character who's two-faced and ignores others",
          ja: "表裏が違い、人を無視する人格破綻者",
          "zh-CN": "表里不一、无视他人的人格败坏者",
          "zh-TW": "表裡不一、無視他人的人格敗壞者",
          vi: "Người có nhân cách hỏng, hai mặt và coi thường người khác",
          id: "Orang dengan karakter rusak yang bermuka dua dan mengabaikan orang lain"
        },
        score: 0 // F 성향
      },
      {
        text: {
          ko: "일 못하고 멍청해서 팀에 민폐 끼치는 무능력자",
          en: "An incompetent person who can't work and is stupid, causing trouble for the team",
          ja: "仕事ができず、バカでチームに迷惑をかける無能者",
          "zh-CN": "不会工作、愚蠢、给团队添麻烦的无能者",
          "zh-TW": "不會工作、愚蠢、給團隊添麻煩的無能者",
          vi: "Người bất tài không làm được việc và ngu ngốc, gây rắc rối cho nhóm",
          id: "Orang yang tidak kompeten yang tidak bisa bekerja dan bodoh, menyebabkan masalah bagi tim"
        },
        score: 1 // T 성향
      }
    ]
  }
];

export const phase2AreYouTResults: Phase2AreYouTResult[] = [
  {
    type: "Type1",
    emoji: "🤖",
    title: {
      ko: "감정 회로 없음, AI 로봇 (극T)",
      en: "No Emotion Circuit, AI Robot (Extreme T)",
      ja: "感情回路なし、AIロボット（極T）",
      "zh-CN": "无情感回路，AI机器人（极T）",
      "zh-TW": "無情感迴路，AI機器人（極T）",
      vi: "Không có mạch cảm xúc, Robot AI (T cực đoan)",
      id: "Tanpa Sirkuit Emosi, Robot AI (T Ekstrem)"
    },
    shortDescription: {
      ko: "\"입력된 명령어: 팩트 폭격\"",
      en: "\"Input command: Fact bombardment\"",
      ja: "「入力されたコマンド：ファクト爆撃」",
      "zh-CN": "\"输入指令：事实轰炸\"",
      "zh-TW": "「輸入指令：事實轟炸」",
      vi: "\"Lệnh đã nhập: Ném bom sự thật\"",
      id: "\"Perintah yang dimasukkan: Pemboman fakta\""
    },
    description: {
      ko: "당신은 감정보다는 효율과 논리가 지배하는 AI입니다. \"공감이 밥 먹여줘?\"라는 마인드로, 쓸데없는 감정 소모를 싫어합니다. 문제 해결 능력은 탑급이지만, 영혼 없는 리액션 때문에 사회성 훈련이 조금 필요할 수 있습니다.",
      en: "You are an AI dominated by efficiency and logic rather than emotions. With a mindset of \"Does empathy feed you?\", you hate unnecessary emotional consumption. Your problem-solving ability is top-tier, but you may need a bit of social training due to soulless reactions.",
      ja: "あなたは感情よりも効率と論理が支配するAIです。「共感が飯を食わせてくれる？」というマインドで、無駄な感情消費を嫌います。問題解決能力はトップクラスですが、魂のないリアクションのために社会性の訓練が少し必要かもしれません。",
      "zh-CN": "你是一个由效率和逻辑而非情感支配的AI。抱着\"共情能当饭吃吗？\"的心态，你讨厌不必要的情绪消耗。你的问题解决能力是顶级的，但由于没有灵魂的反应，你可能需要一些社交训练。",
      "zh-TW": "你是一個由效率和邏輯而非情感支配的AI。抱著「共情能當飯吃嗎？」的心態，你討厭不必要的情緒消耗。你的問題解決能力是頂級的，但由於沒有靈魂的反應，你可能需要一些社交訓練。",
      vi: "Bạn là một AI bị chi phối bởi hiệu quả và logic hơn là cảm xúc. Với tư duy \"Đồng cảm có nuôi sống bạn không?\", bạn ghét việc tiêu hao cảm xúc không cần thiết. Khả năng giải quyết vấn đề của bạn là hàng đầu, nhưng bạn có thể cần một chút rèn luyện xã hội do phản ứng vô hồn.",
      id: "Anda adalah AI yang didominasi oleh efisiensi dan logika daripada emosi. Dengan pola pikir \"Apakah empati memberi makan?\", Anda membenci konsumsi emosional yang tidak perlu. Kemampuan pemecahan masalah Anda adalah tingkat atas, tetapi Anda mungkin perlu sedikit pelatihan sosial karena reaksi tanpa jiwa."
    },
    tLevel: {
      ko: "T 지수: 99%",
      en: "T Index: 99%",
      ja: "T指数：99%",
      "zh-CN": "T指数：99%",
      "zh-TW": "T指數：99%",
      vi: "Chỉ số T: 99%",
      id: "Indeks T: 99%"
    },
    mainLines: {
      ko: "주요 대사: \"그래서 결론이 뭔데?\", \"왜 울어?\"",
      en: "Main lines: \"So what's the conclusion?\", \"Why are you crying?\"",
      ja: "主なセリフ：「だから結論は何？」「なぜ泣いてるの？」",
      "zh-CN": "主要台词：\"所以结论是什么？\"，\"为什么哭？\"",
      "zh-TW": "主要台詞：「所以結論是什麼？」「為什麼哭？」",
      vi: "Câu nói chính: \"Vậy kết luận là gì?\", \"Sao lại khóc?\"",
      id: "Kalimat utama: \"Jadi apa kesimpulannya?\", \"Kenapa menangis?\""
    },
    goodMatch: {
      ko: "Type 4 (리액션 봇)",
      en: "Type 4 (Reaction Bot)",
      ja: "Type 4 (リアクションボット)",
      "zh-CN": "Type 4 (反应机器人)",
      "zh-TW": "Type 4 (反應機器人)",
      vi: "Type 4 (Bot phản ứng)",
      id: "Type 4 (Bot Reaksi)"
    },
    badMatch: {
      ko: "Type 6 (인간 수도꼭지)",
      en: "Type 6 (Human Faucet)",
      ja: "Type 6 (人間の蛇口)",
      "zh-CN": "Type 6 (人类水龙头)",
      "zh-TW": "Type 6 (人類水龍頭)",
      vi: "Type 6 (Vòi nước người)",
      id: "Type 6 (Keran Manusia)"
    }
  },
  {
    type: "Type2",
    emoji: "👁️",
    title: {
      ko: "웃으면서 팩폭, 맑은 눈의 광인 (고T)",
      en: "Smiling Fact Bomber, Clear-Eyed Madman (High T)",
      ja: "笑いながらファクト爆撃、澄んだ目の狂人（高T）",
      "zh-CN": "微笑的事实轰炸者，清澈眼睛的狂人（高T）",
      "zh-TW": "微笑的事實轟炸者，清澈眼睛的狂人（高T）",
      vi: "Kẻ ném bom sự thật với nụ cười, Kẻ điên với đôi mắt trong suốt (T cao)",
      id: "Pengebom Fakta Tersenyum, Orang Gila Bermata Jernih (T Tinggi)"
    },
    shortDescription: {
      ko: "\"악의는 없는데 좀 아파...\"",
      en: "\"No malice, but it hurts a bit...\"",
      ja: "「悪意はないけど、ちょっと痛い...」",
      "zh-CN": "\"没有恶意，但有点疼...\"",
      "zh-TW": "「沒有惡意，但有點疼...」",
      vi: "\"Không có ác ý nhưng hơi đau...\"",
      id: "\"Tidak ada niat jahat, tapi sedikit menyakitkan...\""
    },
    description: {
      ko: "당신은 사회화가 잘 된 T입니다. 겉으로는 웃으며 들어주지만, 머릿속으로는 냉철하게 상황을 분석하고 있습니다. 위로하려고 던진 말이 상대방에게는 비수가 되어 꽂히는 경우가 종종 있습니다. 틀린 말은 안 하는데 묘하게 킹받는 스타일입니다.",
      en: "You're a well-socialized T. On the surface, you smile and listen, but in your head, you're coldly analyzing the situation. Words you throw to comfort often become daggers that pierce the other person. You don't say anything wrong, but you have a strangely infuriating style.",
      ja: "あなたは社会化がよくできたTです。表向きは笑って聞いてくれますが、頭の中では冷静に状況を分析しています。慰めようとして投げた言葉が相手には短剣となって刺さる場合がよくあります。間違ったことは言わないのに、妙にイライラさせるスタイルです。",
      "zh-CN": "你是一个社交良好的T。表面上你微笑着倾听，但在脑海中，你冷静地分析情况。你为了安慰而说的话，往往成为刺向对方的匕首。你没有说错什么，但你的风格让人莫名恼火。",
      "zh-TW": "你是一個社交良好的T。表面上你微笑著傾聽，但在腦海中，你冷靜地分析情況。你為了安慰而說的話，往往成為刺向對方的匕首。你沒有說錯什麼，但你的風格讓人莫名惱火。",
      vi: "Bạn là một T được xã hội hóa tốt. Bề ngoài bạn cười và lắng nghe, nhưng trong đầu bạn đang phân tích tình huống một cách lạnh lùng. Những lời bạn nói để an ủi thường trở thành những lưỡi dao đâm vào người khác. Bạn không nói sai gì, nhưng bạn có phong cách kỳ lạ khiến người ta tức giận.",
      id: "Anda adalah T yang tersosialisasi dengan baik. Di permukaan, Anda tersenyum dan mendengarkan, tetapi di kepala Anda, Anda menganalisis situasi dengan dingin. Kata-kata yang Anda lempar untuk menghibur sering menjadi belati yang menusuk orang lain. Anda tidak mengatakan hal yang salah, tetapi Anda memiliki gaya yang anehnya membuat marah."
    },
    tLevel: {
      ko: "T 지수: 80%",
      en: "T Index: 80%",
      ja: "T指数：80%",
      "zh-CN": "T指数：80%",
      "zh-TW": "T指數：80%",
      vi: "Chỉ số T: 80%",
      id: "Indeks T: 80%"
    },
    mainLines: {
      ko: "주요 대사: \"그건 네가 잘못한 거 같은데?\", \"울면 해결돼?\"",
      en: "Main lines: \"That seems like your fault, doesn't it?\", \"Will crying solve it?\"",
      ja: "主なセリフ：「それはあなたが間違えたみたいだけど？」「泣いたら解決するの？」",
      "zh-CN": "主要台词：\"那好像是你的错吧？\"，\"哭能解决问题吗？\"",
      "zh-TW": "主要台詞：「那好像是你的錯吧？」「哭能解決問題嗎？」",
      vi: "Câu nói chính: \"Có vẻ đó là lỗi của bạn nhỉ?\", \"Khóc có giải quyết được không?\"",
      id: "Kalimat utama: \"Sepertinya itu kesalahanmu, kan?\", \"Apakah menangis akan menyelesaikannya?\""
    },
    goodMatch: {
      ko: "Type 5 (유리 멘탈)",
      en: "Type 5 (Glass Mentality)",
      ja: "Type 5 (ガラスのメンタル)",
      "zh-CN": "Type 5 (玻璃心态)",
      "zh-TW": "Type 5 (玻璃心態)",
      vi: "Type 5 (Tâm lý dễ vỡ)",
      id: "Type 5 (Mentalitas Kaca)"
    },
    badMatch: {
      ko: "Type 6 (인간 수도꼭지)",
      en: "Type 6 (Human Faucet)",
      ja: "Type 6 (人間の蛇口)",
      "zh-CN": "Type 6 (人类水龙头)",
      "zh-TW": "Type 6 (人類水龍頭)",
      vi: "Type 6 (Vòi nước người)",
      id: "Type 6 (Keran Manusia)"
    }
  },
  {
    type: "Type3",
    emoji: "📉",
    title: {
      ko: "선택적 공감, 효율적 위로러 (약T)",
      en: "Selective Empathy, Efficient Comforter (Weak T)",
      ja: "選択的共感、効率的な慰め手（弱T）",
      "zh-CN": "选择性共情，高效安慰者（弱T）",
      "zh-TW": "選擇性共情，高效安慰者（弱T）",
      vi: "Đồng cảm có chọn lọc, Người an ủi hiệu quả (T yếu)",
      id: "Empati Selektif, Penghibur Efisien (T Lemah)"
    },
    shortDescription: {
      ko: "\"내 사람에게만 따뜻한 차도남/차도녀\"",
      en: "\"Warm only to my people, cold man/woman\"",
      ja: "「私の人にだけ温かい冷た男/冷た女」",
      "zh-CN": "\"只对我的人温暖，冷男/冷女\"",
      "zh-TW": "「只對我的人溫暖，冷男/冷女」",
      vi: "\"Chỉ ấm áp với người của mình, người lạnh lùng\"",
      id: "\"Hangat hanya untuk orang saya, pria/wanita dingin\""
    },
    description: {
      ko: "당신은 기본적으로 이성적이지만, 상황에 따라 공감 스위치를 켤 줄 압니다. 관심 없는 사람에게는 칼같이 선을 긋지만, 내 사람에게는 현실적인 조언과 함께 따뜻함을 보여줍니다. 공감과 해결책의 균형을 맞추려고 노력하는 편입니다.",
      en: "You're basically rational, but you know how to turn on the empathy switch depending on the situation. You draw a clear line with people you're not interested in, but you show warmth along with practical advice to your people. You try to balance empathy and solutions.",
      ja: "あなたは基本的に理性的ですが、状況に応じて共感スイッチを入れることができます。興味のない人にはきっぱりと線を引きますが、自分の人には現実的なアドバイスとともに温かさを見せます。共感と解決策のバランスを取ろうと努力するタイプです。",
      "zh-CN": "你基本上是理性的，但你知道如何根据情况打开共情开关。你对不感兴趣的人划清界限，但对你的人，你会表现出温暖并提供实用的建议。你努力平衡共情和解决方案。",
      "zh-TW": "你基本上是理性的，但你知道如何根據情況打開共情開關。你對不感興趣的人劃清界線，但對你的人，你會表現出溫暖並提供實用的建議。你努力平衡共情和解決方案。",
      vi: "Bạn về cơ bản là lý trí, nhưng bạn biết cách bật công tắc đồng cảm tùy tình huống. Bạn vạch ranh giới rõ ràng với người không quan tâm, nhưng bạn thể hiện sự ấm áp cùng lời khuyên thực tế với người của mình. Bạn cố gắng cân bằng giữa đồng cảm và giải pháp.",
      id: "Anda pada dasarnya rasional, tetapi Anda tahu cara menyalakan sakelar empati tergantung situasi. Anda menarik garis tegas dengan orang yang tidak Anda minati, tetapi Anda menunjukkan kehangatan bersama saran praktis kepada orang Anda. Anda mencoba menyeimbangkan empati dan solusi."
    },
    tLevel: {
      ko: "T 지수: 60%",
      en: "T Index: 60%",
      ja: "T指数：60%",
      "zh-CN": "T指数：60%",
      "zh-TW": "T指數：60%",
      vi: "Chỉ số T: 60%",
      id: "Indeks T: 60%"
    },
    mainLines: {
      ko: "주요 대사: \"약은 먹었어? 아프지 마.\"",
      en: "Main lines: \"Did you take medicine? Don't hurt.\"",
      ja: "主なセリフ：「薬は飲んだ？痛くないで。」",
      "zh-CN": "主要台词：\"吃药了吗？别疼。\"",
      "zh-TW": "主要台詞：「吃藥了嗎？別疼。」",
      vi: "Câu nói chính: \"Đã uống thuốc chưa? Đừng đau.\"",
      id: "Kalimat utama: \"Sudah minum obat? Jangan sakit.\""
    },
    goodMatch: {
      ko: "Type 4 (리액션 봇)",
      en: "Type 4 (Reaction Bot)",
      ja: "Type 4 (リアクションボット)",
      "zh-CN": "Type 4 (反应机器人)",
      "zh-TW": "Type 4 (反應機器人)",
      vi: "Type 4 (Bot phản ứng)",
      id: "Type 4 (Bot Reaksi)"
    },
    badMatch: {
      ko: "없음 (두루두루 잘 지냄)",
      en: "None (Gets along with everyone)",
      ja: "なし（みんなと仲良くやっている）",
      "zh-CN": "无（和谁都处得来）",
      "zh-TW": "無（和誰都處得來）",
      vi: "Không có (Hòa hợp với mọi người)",
      id: "Tidak ada (Bergaul dengan semua orang)"
    }
  },
  {
    type: "Type4",
    emoji: "😐",
    title: {
      ko: "리액션 봇, 영혼 없는 공감러 (약F)",
      en: "Reaction Bot, Soulless Empathizer (Weak F)",
      ja: "リアクションボット、魂のない共感者（弱F）",
      "zh-CN": "反应机器人，没有灵魂的共情者（弱F）",
      "zh-TW": "反應機器人，沒有靈魂的共情者（弱F）",
      vi: "Bot phản ứng, Người đồng cảm vô hồn (F yếu)",
      id: "Bot Reaksi, Empatis Tanpa Jiwa (F Lemah)"
    },
    shortDescription: {
      ko: "\"겉은 F, 속은 T?\"",
      en: "\"F on the outside, T on the inside?\"",
      ja: "「表はF、中はT？」",
      "zh-CN": "\"表面是F，内心是T？\"",
      "zh-TW": "「表面是F，內心是T？」",
      vi: "\"Bề ngoài là F, bên trong là T?\"",
      id: "\"F di luar, T di dalam?\""
    },
    description: {
      ko: "당신은 겉으로는 리액션 부자지만, 속으로는 '집에 가고 싶다'고 생각할 때가 많습니다. 분위기를 맞추기 위해 습관적인 공감을 하지만, 깊은 감정 이입까지는 하지 않습니다. 평화주의자라서 웬만하면 맞춰주려고 노력하는 스타일입니다.",
      en: "You're rich in reactions on the outside, but inside you often think 'I want to go home.' You do habitual empathy to match the atmosphere, but you don't go as far as deep emotional investment. You're a pacifist, so you try to go along with things whenever possible.",
      ja: "あなたは表向きはリアクション豊富ですが、内心では「家に帰りたい」と思うことが多いです。雰囲気に合わせるために習慣的な共感をしますが、深い感情移入まではしません。平和主義者なので、できるだけ合わせようとするスタイルです。",
      "zh-CN": "你表面上反应丰富，但内心经常想'我想回家'。你为了配合气氛而习惯性地共情，但不会深入情感投入。你是和平主义者，所以会尽量配合的风格。",
      "zh-TW": "你表面上反應豐富，但內心經常想「我想回家」。你為了配合氣氛而習慣性地共情，但不會深入情感投入。你是和平主義者，所以會盡量配合的風格。",
      vi: "Bạn giàu phản ứng bề ngoài, nhưng bên trong bạn thường nghĩ 'Mình muốn về nhà.' Bạn thực hiện đồng cảm theo thói quen để phù hợp với không khí, nhưng bạn không đi sâu đến mức đầu tư cảm xúc sâu sắc. Bạn là người theo chủ nghĩa hòa bình, nên bạn cố gắng hòa hợp mọi lúc có thể.",
      id: "Anda kaya reaksi di luar, tetapi di dalam Anda sering berpikir 'Saya ingin pulang.' Anda melakukan empati kebiasaan untuk menyesuaikan suasana, tetapi Anda tidak sampai pada investasi emosional yang mendalam. Anda adalah pasifis, jadi Anda mencoba menyesuaikan diri kapan pun memungkinkan."
    },
    tLevel: {
      ko: "F 지수: 60%",
      en: "F Index: 60%",
      ja: "F指数：60%",
      "zh-CN": "F指数：60%",
      "zh-TW": "F指數：60%",
      vi: "Chỉ số F: 60%",
      id: "Indeks F: 60%"
    },
    mainLines: {
      ko: "주요 대사: \"아 진짜? 대박이다~\", \"헐 웬일이야 ㅠㅠ\"",
      en: "Main lines: \"Oh really? That's amazing~\", \"Oh what happened? ㅠㅠ\"",
      ja: "主なセリフ：「ああ本当？すごいね〜」「えー何があったの？ㅠㅠ」",
      "zh-CN": "主要台词：\"哦真的吗？太棒了~\"，\"哦怎么了？ㅠㅠ\"",
      "zh-TW": "主要台詞：「哦真的嗎？太棒了~」「哦怎麼了？ㅠㅠ」",
      vi: "Câu nói chính: \"Ồ thật sao? Tuyệt vời quá~\", \"Ồ chuyện gì vậy? ㅠㅠ\"",
      id: "Kalimat utama: \"Oh benar? Luar biasa~\", \"Oh apa yang terjadi? ㅠㅠ\""
    },
    goodMatch: {
      ko: "Type 3 (효율적 위로러)",
      en: "Type 3 (Efficient Comforter)",
      ja: "Type 3 (効率的な慰め手)",
      "zh-CN": "Type 3 (高效安慰者)",
      "zh-TW": "Type 3 (高效安慰者)",
      vi: "Type 3 (Người an ủi hiệu quả)",
      id: "Type 3 (Penghibur Efisien)"
    },
    badMatch: {
      ko: "Type 1 (AI 로봇)",
      en: "Type 1 (AI Robot)",
      ja: "Type 1 (AIロボット)",
      "zh-CN": "Type 1 (AI机器人)",
      "zh-TW": "Type 1 (AI機器人)",
      vi: "Type 1 (Robot AI)",
      id: "Type 1 (Robot AI)"
    }
  },
  {
    type: "Type5",
    emoji: "🍪",
    title: {
      ko: "걸어 다니는 쿠크다스, 유리 멘탈 (고F)",
      en: "Walking Cookie Stick, Glass Mentality (High F)",
      ja: "歩くクッキー棒、ガラスのメンタル（高F）",
      "zh-CN": "行走的饼干棒，玻璃心态（高F）",
      "zh-TW": "行走的餅乾棒，玻璃心態（高F）",
      vi: "Thanh bánh quy biết đi, Tâm lý dễ vỡ (F cao)",
      id: "Stik Kue Berjalan, Mentalitas Kaca (F Tinggi)"
    },
    shortDescription: {
      ko: "\"바사삭... 오늘도 상처받았어\"",
      en: "\"Crunch... I got hurt again today\"",
      ja: "「バサッ...今日も傷ついた」",
      "zh-CN": "\"咔嚓...今天又受伤了\"",
      "zh-TW": "「咔嚓...今天又受傷了」",
      vi: "\"Răng rắc... Hôm nay lại bị tổn thương\"",
      id: "\"Kresek... Hari ini terluka lagi\""
    },
    description: {
      ko: "당신은 감수성이 풍부하고 타인의 말 한마디에 큰 영향을 받습니다. 친구의 기분이 곧 내 기분이며, 사소한 것에도 의미 부여를 많이 합니다. 눈물이 많고 마음이 여려서 주변 사람들이 지켜주고 싶어 하는 유형입니다.",
      en: "You have rich sensitivity and are greatly affected by others' words. Your friend's mood is immediately your mood, and you assign meaning to trivial things. You cry a lot and have a tender heart, so people around you want to protect you.",
      ja: "あなたは感受性が豊かで、他人の一言に大きな影響を受けます。友達の気分がすぐに自分の気分になり、些細なことにも意味を多く付けます。涙が多く、心が優しいので、周りの人が守ってあげたいと思うタイプです。",
      "zh-CN": "你敏感丰富，深受他人话语影响。朋友的心情就是你的心情，你会给琐事赋予很多意义。你眼泪多、心软，所以周围的人想保护你。",
      "zh-TW": "你敏感豐富，深受他人話語影響。朋友的心情就是你的心情，你會給瑣事賦予很多意義。你眼淚多、心軟，所以周圍的人想保護你。",
      vi: "Bạn có sự nhạy cảm phong phú và bị ảnh hưởng lớn bởi lời nói của người khác. Tâm trạng của bạn bè ngay lập tức là tâm trạng của bạn, và bạn gán ý nghĩa cho những điều tầm thường. Bạn khóc nhiều và có trái tim mềm yếu, nên mọi người xung quanh muốn bảo vệ bạn.",
      id: "Anda memiliki kepekaan yang kaya dan sangat dipengaruhi oleh kata-kata orang lain. Suasana hati teman langsung menjadi suasana hati Anda, dan Anda memberikan makna pada hal-hal sepele. Anda banyak menangis dan memiliki hati yang lembut, jadi orang di sekitar Anda ingin melindungi Anda."
    },
    tLevel: {
      ko: "F 지수: 80%",
      en: "F Index: 80%",
      ja: "F指数：80%",
      "zh-CN": "F指数：80%",
      "zh-TW": "F指數：80%",
      vi: "Chỉ số F: 80%",
      id: "Indeks F: 80%"
    },
    mainLines: {
      ko: "주요 대사: \"나한테 어떻게 그럴 수 있어?\", \"감동이야...\"",
      en: "Main lines: \"How could you do that to me?\", \"I'm so moved...\"",
      ja: "主なセリフ：「私にどうしてそんなことができるの？」「感動だ...」",
      "zh-CN": "主要台词：\"你怎么能这样对我？\"，\"太感动了...\"",
      "zh-TW": "主要台詞：「你怎麼能這樣對我？」「太感動了...」",
      vi: "Câu nói chính: \"Sao bạn có thể làm vậy với mình?\", \"Cảm động quá...\"",
      id: "Kalimat utama: \"Bagaimana kamu bisa melakukan itu padaku?\", \"Saya sangat tersentuh...\""
    },
    goodMatch: {
      ko: "Type 6 (인간 수도꼭지)",
      en: "Type 6 (Human Faucet)",
      ja: "Type 6 (人間の蛇口)",
      "zh-CN": "Type 6 (人类水龙头)",
      "zh-TW": "Type 6 (人類水龍頭)",
      vi: "Type 6 (Vòi nước người)",
      id: "Type 6 (Keran Manusia)"
    },
    badMatch: {
      ko: "Type 2 (맑은 눈의 광인)",
      en: "Type 2 (Clear-Eyed Madman)",
      ja: "Type 2 (澄んだ目の狂人)",
      "zh-CN": "Type 2 (清澈眼睛的狂人)",
      "zh-TW": "Type 2 (清澈眼睛的狂人)",
      vi: "Type 2 (Kẻ điên với đôi mắt trong suốt)",
      id: "Type 2 (Orang Gila Bermata Jernih)"
    }
  },
  {
    type: "Type6",
    emoji: "😭",
    title: {
      ko: "1리터의 눈물, 인간 수도꼭지 (극F)",
      en: "1 Liter of Tears, Human Faucet (Extreme F)",
      ja: "1リットルの涙、人間の蛇口（極F）",
      "zh-CN": "1升的眼泪，人类水龙头（极F）",
      "zh-TW": "1升的眼淚，人類水龍頭（極F）",
      vi: "1 lít nước mắt, Vòi nước người (F cực đoan)",
      id: "1 Liter Air Mata, Keran Manusia (F Ekstrem)"
    },
    shortDescription: {
      ko: "\"세상의 모든 슬픔은 내 친구\"",
      en: "\"All the sadness in the world is my friend\"",
      ja: "「世界のすべての悲しみは私の友達」",
      "zh-CN": "\"世界上所有的悲伤都是我的朋友\"",
      "zh-TW": "「世界上所有的悲傷都是我的朋友」",
      vi: "\"Tất cả nỗi buồn trên thế giới là bạn của tôi\"",
      id: "\"Semua kesedihan di dunia adalah teman saya\""
    },
    description: {
      ko: "당신은 감정이 태풍처럼 몰아치는 스타일입니다. 슬픈 영화 예고편만 봐도 눈물이 고이고, 길가에 핀 꽃만 봐도 벅차오릅니다. 공감 능력이 너무 뛰어나서 때로는 남의 일까지 내 일처럼 끌어안고 힘들어하기도 합니다.",
      en: "You're the type where emotions surge like a typhoon. Just watching a sad movie trailer makes tears well up, and just seeing a flower blooming by the roadside makes you emotional. Your empathy ability is so outstanding that sometimes you embrace others' problems as your own and suffer.",
      ja: "あなたは感情が台風のように押し寄せるタイプです。悲しい映画の予告編を見るだけで涙が溢れ、道端に咲いた花を見るだけで胸が熱くなります。共感能力が優れすぎて、時には他人のことを自分のことのように抱きしめて苦しむこともあります。",
      "zh-CN": "你是情感如台风般汹涌的类型。只看悲伤电影的预告片就会眼泪汪汪，只看路边开的花就会情绪激动。你的共情能力过于出色，有时会把别人的事当作自己的事来承受并痛苦。",
      "zh-TW": "你是情感如颱風般洶湧的類型。只看悲傷電影的預告片就會眼淚汪汪，只看路邊開的花就會情緒激動。你的共情能力過於出色，有時會把別人的事當作自己的事來承受並痛苦。",
      vi: "Bạn là kiểu người mà cảm xúc trào dâng như bão. Chỉ xem trailer phim buồn cũng khiến nước mắt trào ra, chỉ nhìn thấy hoa nở bên đường cũng khiến bạn xúc động. Khả năng đồng cảm của bạn quá xuất sắc đến mức đôi khi bạn ôm lấy vấn đề của người khác như của chính mình và đau khổ.",
      id: "Anda adalah tipe di mana emosi melonjak seperti topan. Hanya menonton trailer film sedih membuat air mata mengalir, dan hanya melihat bunga mekar di pinggir jalan membuat Anda emosional. Kemampuan empati Anda sangat luar biasa sehingga kadang-kadang Anda merangkul masalah orang lain sebagai milik Anda sendiri dan menderita."
    },
    tLevel: {
      ko: "F 지수: 99%",
      en: "F Index: 99%",
      ja: "F指数：99%",
      "zh-CN": "F指数：99%",
      "zh-TW": "F指數：99%",
      vi: "Chỉ số F: 99%",
      id: "Indeks F: 99%"
    },
    mainLines: {
      ko: "주요 대사: (말없이 울고 있다), \"너무 슬퍼 ㅠㅠㅠ\"",
      en: "Main lines: (Crying silently), \"I'm so sad ㅠㅠㅠ\"",
      ja: "主なセリフ：（無言で泣いている）、「すごく悲しい ㅠㅠㅠ」",
      "zh-CN": "主要台词：（无声地哭泣），\"太悲伤了 ㅠㅠㅠ\"",
      "zh-TW": "主要台詞：（無聲地哭泣），「太悲傷了 ㅠㅠㅠ」",
      vi: "Câu nói chính: (Khóc im lặng), \"Buồn quá ㅠㅠㅠ\"",
      id: "Kalimat utama: (Menangis dalam diam), \"Saya sangat sedih ㅠㅠㅠ\""
    },
    goodMatch: {
      ko: "Type 5 (유리 멘탈)",
      en: "Type 5 (Glass Mentality)",
      ja: "Type 5 (ガラスのメンタル)",
      "zh-CN": "Type 5 (玻璃心态)",
      "zh-TW": "Type 5 (玻璃心態)",
      vi: "Type 5 (Tâm lý dễ vỡ)",
      id: "Type 5 (Mentalitas Kaca)"
    },
    badMatch: {
      ko: "Type 1 (AI 로봇)",
      en: "Type 1 (AI Robot)",
      ja: "Type 1 (AIロボット)",
      "zh-CN": "Type 1 (AI机器人)",
      "zh-TW": "Type 1 (AI機器人)",
      vi: "Type 1 (Robot AI)",
      id: "Type 1 (Robot AI)"
    }
  }
];

export function calculatePhase2AreYouTResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  // T 성향 점수에 따라 결과 결정
  // 11~12점: Type 1 (AI 로봇)
  // 9~10점: Type 2 (맑은 눈의 광인)
  // 7~8점: Type 3 (효율적 위로러)
  // 5~6점: Type 4 (리액션 봇)
  // 3~4점: Type 5 (유리 멘탈)
  // 0~2점: Type 6 (인간 수도꼭지)
  
  if (totalScore >= 11 && totalScore <= 12) {
    return "Type1";
  } else if (totalScore >= 9 && totalScore <= 10) {
    return "Type2";
  } else if (totalScore >= 7 && totalScore <= 8) {
    return "Type3";
  } else if (totalScore >= 5 && totalScore <= 6) {
    return "Type4";
  } else if (totalScore >= 3 && totalScore <= 4) {
    return "Type5";
  } else if (totalScore >= 0 && totalScore <= 2) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type6";
  }
}
