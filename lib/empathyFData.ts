export interface EmpathyFQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1
  }[];
}

export interface EmpathyFResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>; // "5%", "20%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const empathyFQuestions: EmpathyFQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 \"나 오늘 너무 힘들었어...\"라고 한다면?",
      en: "What if a friend says \"I had such a hard day today...\"?",
      ja: "友達が「今日すごく大変だった...」と言ったら？",
      'zh-CN': "如果朋友说\"我今天太难了...\"？",
      'zh-TW': "如果朋友說「我今天太難了...」？",
      vi: "Bạn sẽ làm gì nếu bạn bè nói \"Hôm nay mình rất khó khăn...\"?",
      id: "Apa yang akan Anda lakukan jika teman mengatakan \"Hari ini sangat sulit...\"?"
    },
    options: [
      {
        text: {
          ko: "왜? 누가 괴롭혔어? 무슨 일인데?",
          en: "Why? Who bothered you? What happened?",
          ja: "どうして？誰が困らせたの？何があったの？",
          'zh-CN': "为什么？谁欺负你了？发生什么事了？",
          'zh-TW': "為什麼？誰欺負你了？發生什麼事了？",
          vi: "Sao vậy? Ai làm phiền bạn? Chuyện gì đã xảy ra?",
          id: "Kenapa? Siapa yang mengganggu? Apa yang terjadi?"
        },
        score: 0 // A = T (이성적)
      },
      {
        text: {
          ko: "고생했어 ㅠㅠ 맛있는 거 먹으러 갈까?",
          en: "You worked hard... Want to go get something delicious?",
          ja: "お疲れ様...美味しいもの食べに行かない？",
          'zh-CN': "辛苦了...要去吃点好吃的吗？",
          'zh-TW': "辛苦了...要去吃點好吃的嗎？",
          vi: "Bạn đã vất vả rồi... Muốn đi ăn gì ngon không?",
          id: "Kamu sudah bekerja keras... Mau pergi makan sesuatu yang enak?"
        },
        score: 1 // B = F (감성적)
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "슬픈 영화를 볼 때 당신의 모습은?",
      en: "What are you like when watching a sad movie?",
      ja: "悲しい映画を見るとき、あなたの様子は？",
      'zh-CN': "看悲伤电影时你的样子是？",
      'zh-TW': "看悲傷電影時你的樣子是？",
      vi: "Bạn như thế nào khi xem phim buồn?",
      id: "Bagaimana Anda saat menonton film sedih?"
    },
    options: [
      {
        text: {
          ko: "'저 상황에서 저러는 게 말이 돼?' 개연성을 따진다.",
          en: "'Does that make sense in that situation?' I question the plausibility.",
          ja: "「あの状況でそんなことする？？」可能性を考える。",
          'zh-CN': "「那种情况下那样做说得通吗？」我会质疑合理性。",
          'zh-TW': "「那種情況下那樣做說得通嗎？」我會質疑合理性。",
          vi: "'Điều đó có hợp lý trong tình huống đó không?' Tôi đặt câu hỏi về tính hợp lý.",
          id: "'Apakah itu masuk akal dalam situasi itu?' Saya mempertanyakan kemungkinannya."
        },
        score: 0
      },
      {
        text: {
          ko: "주인공이 울기도 전에 이미 눈물이 그렁그렁하다.",
          en: "My eyes are already teary before the protagonist even cries.",
          ja: "主人公が泣く前からもう目がうるうるしている。",
          'zh-CN': "主角还没哭，我的眼睛就已经湿润了。",
          'zh-TW': "主角還沒哭，我的眼睛就已經濕潤了。",
          vi: "Mắt tôi đã ướt nhẹp trước khi nhân vật chính khóc.",
          id: "Mata saya sudah berkaca-kaca sebelum protagonis bahkan menangis."
        },
        score: 1
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 차 사고가 났다고 전화가 왔다.",
      en: "A friend calls saying they had a car accident.",
      ja: "友達から交通事故に遭ったと電話が来た。",
      'zh-CN': "朋友打电话说发生了车祸。",
      'zh-TW': "朋友打電話說發生了車禍。",
      vi: "Bạn bè gọi điện nói họ bị tai nạn xe hơi.",
      id: "Teman menelepon mengatakan mereka mengalami kecelakaan mobil."
    },
    options: [
      {
        text: {
          ko: "보험사는 불렀어? 다친 데는 없고?",
          en: "Did you call the insurance company? Are you hurt?",
          ja: "保険会社には連絡した？怪我はない？",
          'zh-CN': "你给保险公司打电话了吗？受伤了吗？",
          'zh-TW': "你給保險公司打電話了嗎？受傷了嗎？",
          vi: "Bạn đã gọi công ty bảo hiểm chưa? Có bị thương không?",
          id: "Apakah Anda sudah menghubungi perusahaan asuransi? Apakah Anda terluka?"
        },
        score: 0
      },
      {
        text: {
          ko: "헐 어떡해! 많이 놀랐지? 몸은 괜찮아?",
          en: "Oh no! You must have been so shocked! Are you okay?",
          ja: "えー！すごく驚いたでしょ？体は大丈夫？",
          'zh-CN': "天哪！你一定很震惊吧！身体还好吗？",
          'zh-TW': "天哪！你一定很震驚吧！身體還好嗎？",
          vi: "Ôi không! Bạn chắc rất sốc! Cơ thể ổn chứ?",
          id: "Oh tidak! Kamu pasti sangat terkejut! Apakah kamu baik-baik saja?"
        },
        score: 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "누군가 나에게 고민 상담을 요청한다면?",
      en: "What if someone asks me for advice about their worries?",
      ja: "誰かが私に悩み相談を求めてきたら？",
      'zh-CN': "如果有人向我寻求烦恼咨询？",
      'zh-TW': "如果有人向我尋求煩惱諮詢？",
      vi: "Nếu ai đó yêu cầu tôi tư vấn về nỗi lo lắng của họ?",
      id: "Bagaimana jika seseorang meminta saya untuk konsultasi tentang kekhawatiran mereka?"
    },
    options: [
      {
        text: {
          ko: "현실적인 해결책을 제시해 주는 게 진정한 도움이라고 생각한다.",
          en: "I think providing practical solutions is true help.",
          ja: "現実的な解決策を提示することが本当の助けだと思う。",
          'zh-CN': "我认为提供现实的解决方案才是真正的帮助。",
          'zh-TW': "我認為提供現實的解決方案才是真正的幫助。",
          vi: "Tôi nghĩ đưa ra giải pháp thực tế mới là sự giúp đỡ thực sự.",
          id: "Saya pikir memberikan solusi praktis adalah bantuan yang sebenarnya."
        },
        score: 0
      },
      {
        text: {
          ko: "일단 끝까지 들어주고 맞장구쳐주는 게 중요하다고 생각한다.",
          en: "I think it's important to listen to the end and respond empathetically.",
          ja: "まず最後まで聞いて、相槌を打つのが大切だと思う。",
          'zh-CN': "我认为先听完并给予回应很重要。",
          'zh-TW': "我認為先聽完並給予回應很重要。",
          vi: "Tôi nghĩ điều quan trọng là lắng nghe đến cuối và phản hồi đồng cảm.",
          id: "Saya pikir penting untuk mendengarkan sampai akhir dan merespons dengan empati."
        },
        score: 1
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구가 시험에 떨어져서 우울해한다.",
      en: "A friend is depressed because they failed an exam.",
      ja: "友達が試験に落ちて落ち込んでいる。",
      'zh-CN': "朋友因为考试失败而沮丧。",
      'zh-TW': "朋友因為考試失敗而沮喪。",
      vi: "Bạn bè buồn vì thi trượt.",
      id: "Teman depresi karena gagal ujian."
    },
    options: [
      {
        text: {
          ko: "다음 시험 언제야? 이번엔 뭐가 문제였어?",
          en: "When is the next exam? What was the problem this time?",
          ja: "次の試験はいつ？今回は何が問題だった？",
          'zh-CN': "下次考试是什么时候？这次有什么问题？",
          'zh-TW': "下次考試是什麼時候？這次有什麼問題？",
          vi: "Kỳ thi tiếp theo là khi nào? Lần này có vấn đề gì?",
          id: "Kapan ujian berikutnya? Apa masalahnya kali ini?"
        },
        score: 0
      },
      {
        text: {
          ko: "진짜 아쉽다... 너 열심히 했는데 내가 다 속상해.",
          en: "That's really disappointing... You worked so hard, I'm sad too.",
          ja: "本当に残念...あなた一生懸命やったのに、私も悲しい。",
          'zh-CN': "真可惜...你那么努力，我也很难过。",
          'zh-TW': "真可惜...你那麼努力，我也很難過。",
          vi: "Thật đáng tiếc... Bạn đã cố gắng rất nhiều, tôi cũng buồn.",
          id: "Sangat mengecewakan... Kamu sudah bekerja keras, saya juga sedih."
        },
        score: 1
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "\"나 배 아파\"라는 연인의 말에 당신의 대답은?",
      en: "What is your response when your partner says \"My stomach hurts\"?",
      ja: "恋人が「お腹が痛い」と言ったとき、あなたの返事は？",
      'zh-CN': "当恋人说\"我肚子疼\"时，你的回答是？",
      'zh-TW': "當戀人說「我肚子疼」時，你的回答是？",
      vi: "Phản ứng của bạn khi người yêu nói \"Bụng mình đau\" là gì?",
      id: "Apa respons Anda ketika pasangan mengatakan \"Perutku sakit\"?"
    },
    options: [
      {
        text: {
          ko: "병원 가봐. 아니면 약 사다 줄까?",
          en: "Go to the hospital. Or should I get you some medicine?",
          ja: "病院に行って。それとも薬を買ってこようか？",
          'zh-CN': "去医院看看。或者我给你买点药？",
          'zh-TW': "去醫院看看。或者我給你買點藥？",
          vi: "Đi bệnh viện đi. Hoặc để mình mua thuốc cho bạn?",
          id: "Pergi ke rumah sakit. Atau saya belikan obat?"
        },
        score: 0
      },
      {
        text: {
          ko: "많이 아파? 배 문질러 줄게 ㅠㅠ",
          en: "Does it hurt a lot? I'll rub your stomach for you.",
          ja: "すごく痛い？お腹をさすってあげる。",
          'zh-CN': "很疼吗？我给你揉揉肚子。",
          'zh-TW': "很疼嗎？我給你揉揉肚子。",
          vi: "Đau nhiều không? Để mình xoa bụng cho bạn.",
          id: "Sakit sekali? Saya akan menggosok perutmu."
        },
        score: 1
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "멍 때릴 때 주로 하는 생각은?",
      en: "What do you usually think about when spacing out?",
      ja: "ぼーっとしているとき、主に何を考える？",
      'zh-CN': "发呆时你主要想什么？",
      'zh-TW': "發呆時你主要想什麼？",
      vi: "Bạn thường nghĩ gì khi đang mơ màng?",
      id: "Apa yang biasanya Anda pikirkan saat melamun?"
    },
    options: [
      {
        text: {
          ko: "'오늘 저녁 뭐 먹지? 내일 일정 체크해야지.'",
          en: "'What should I eat for dinner? I need to check tomorrow's schedule.'",
          ja: "「今日の夕食何食べよう？明日の予定チェックしなきゃ。」",
          'zh-CN': "「今晚吃什么？我得检查明天的日程。」",
          'zh-TW': "「今晚吃什麼？我得檢查明天的日程。」",
          vi: "'Tối nay ăn gì nhỉ? Phải kiểm tra lịch ngày mai.'",
          id: "'Makan malam apa hari ini? Saya perlu mengecek jadwal besok.'"
        },
        score: 0
      },
      {
        text: {
          ko: "'만약에 내가 투명 인간이 된다면...'",
          en: "'What if I became invisible...'",
          ja: "「もし私が透明人間になったら...」",
          'zh-CN': "「如果我变成透明人...」",
          'zh-TW': "「如果我變成透明人...」",
          vi: "'Nếu mình trở thành người tàng hình...'",
          id: "'Bagaimana jika saya menjadi manusia tak terlihat...'"
        },
        score: 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "친구가 새로 산 옷이 별로일 때 솔직한 반응은?",
      en: "What is your honest reaction when a friend's newly bought clothes aren't great?",
      ja: "友達が新しく買った服がイマイチなとき、正直な反応は？",
      'zh-CN': "当朋友新买的衣服不怎么样时，你的真实反应是？",
      'zh-TW': "當朋友新買的衣服不怎麼樣時，你的真實反應是？",
      vi: "Phản ứng thật lòng của bạn khi quần áo mới mua của bạn bè không đẹp là gì?",
      id: "Apa reaksi jujur Anda ketika pakaian baru yang dibeli teman tidak bagus?"
    },
    options: [
      {
        text: {
          ko: "음, 핏이 좀 애매한데? 환불 안 돼?",
          en: "Hmm, the fit is a bit off? Can't you return it?",
          ja: "うーん、フィット感が微妙じゃない？返品できない？",
          'zh-CN': "嗯，版型有点奇怪？不能退货吗？",
          'zh-TW': "嗯，版型有點奇怪？不能退貨嗎？",
          vi: "Hmm, vừa vặn hơi kỳ? Không thể trả lại được sao?",
          id: "Hmm, potongannya agak aneh? Tidak bisa dikembalikan?"
        },
        score: 0
      },
      {
        text: {
          ko: "오~ 색깔 특이하다! 잘 어울려!",
          en: "Oh~ The color is unique! It looks good on you!",
          ja: "おー！色が独特だね！よく似合ってる！",
          'zh-CN': "哦~颜色很特别！很适合你！",
          'zh-TW': "哦~顏色很特別！很適合你！",
          vi: "Ồ~ Màu sắc độc đáo! Rất hợp với bạn!",
          id: "Oh~ Warnanya unik! Cocok sekali!"
        },
        score: 1
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "화났을 때 나는?",
      en: "What am I like when I'm angry?",
      ja: "怒ったとき、私は？",
      'zh-CN': "生气时我是？",
      'zh-TW': "生氣時我是？",
      vi: "Tôi như thế nào khi tức giận?",
      id: "Bagaimana saya saat marah?"
    },
    options: [
      {
        text: {
          ko: "논리적으로 조목조목 따져서 잘잘못을 가린다.",
          en: "I logically go through each point to determine right and wrong.",
          ja: "論理的に一つ一つ追及して、正誤を判断する。",
          'zh-CN': "我会逻辑地逐条追究，判断对错。",
          'zh-TW': "我會邏輯地逐條追究，判斷對錯。",
          vi: "Tôi phân tích từng điểm một cách logic để xác định đúng sai.",
          id: "Saya secara logis memeriksa setiap poin untuk menentukan benar dan salah."
        },
        score: 0
      },
      {
        text: {
          ko: "억울하고 분해서 눈물부터 차오른다.",
          en: "I feel wronged and angry, so tears well up first.",
          ja: "悔しくて怒りで、まず涙が溢れる。",
          'zh-CN': "我感到委屈和愤怒，眼泪先涌上来。",
          'zh-TW': "我感到委屈和憤怒，眼淚先湧上來。",
          vi: "Tôi cảm thấy oan ức và tức giận, nước mắt trào ra trước.",
          id: "Saya merasa tidak adil dan marah, jadi air mata mengalir terlebih dahulu."
        },
        score: 1
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "누군가 우는 모습을 보면?",
      en: "What happens when you see someone crying?",
      ja: "誰かが泣いている姿を見ると？",
      'zh-CN': "看到有人哭时？",
      'zh-TW': "看到有人哭時？",
      vi: "Bạn như thế nào khi thấy ai đó khóc?",
      id: "Apa yang terjadi ketika Anda melihat seseorang menangis?"
    },
    options: [
      {
        text: {
          ko: "'왜 울지? 당황스럽네...' 어떻게 대처할지 모른다.",
          en: "'Why are they crying? This is awkward...' I don't know how to handle it.",
          ja: "「なぜ泣いてるの？困るな...」どう対処していいかわからない。",
          'zh-CN': "「为什么哭？这很尴尬...」我不知道如何处理。",
          'zh-TW': "「為什麼哭？這很尷尬...」我不知道如何處理。",
          vi: "'Sao họ lại khóc? Khó xử quá...' Tôi không biết phải xử lý thế nào.",
          id: "'Kenapa mereka menangis? Ini canggung...' Saya tidak tahu bagaimana menanganinya."
        },
        score: 0
      },
      {
        text: {
          ko: "나도 모르게 코끝이 찡해지며 같이 울컥한다.",
          en: "Without realizing it, my nose tingles and I start to cry too.",
          ja: "気づいたら鼻がツンとして、一緒に泣きそうになる。",
          'zh-CN': "不知不觉，我的鼻子一酸，也跟着想哭。",
          'zh-TW': "不知不覺，我的鼻子一酸，也跟著想哭。",
          vi: "Không biết tại sao, mũi tôi cay cay và tôi cũng muốn khóc theo.",
          id: "Tanpa disadari, hidung saya kesemutan dan saya juga mulai menangis."
        },
        score: 1
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "선물 받은 물건이 마음에 안 들 때?",
      en: "What do you do when you receive a gift you don't like?",
      ja: "もらったプレゼントが気に入らないとき？",
      'zh-CN': "收到不喜欢的礼物时？",
      'zh-TW': "收到不喜歡的禮物時？",
      vi: "Bạn làm gì khi nhận được món quà không thích?",
      id: "Apa yang Anda lakukan ketika menerima hadiah yang tidak Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "\"고마워! (근데 영수증 있어?)\" 실용적인 게 최고다.",
          en: "\"Thanks! (But do you have the receipt?)\" Practicality is best.",
          ja: "「ありがとう！（でもレシートある？）」実用的なのが最高だ。",
          'zh-CN': "「谢谢！（不过有收据吗？）」实用性最好。",
          'zh-TW': "「謝謝！（不過有收據嗎？）」實用性最好。",
          vi: "\"Cảm ơn! (Nhưng có hóa đơn không?)\" Tính thực dụng là tốt nhất.",
          id: "\"Terima kasih! (Tapi ada struknya?)\" Praktis adalah yang terbaik."
        },
        score: 0
      },
      {
        text: {
          ko: "\"와 진짜 감동이야!\" 내 취향은 아니지만 마음이 고맙다.",
          en: "\"Wow, I'm really touched!\" It's not my style, but I'm grateful for the thought.",
          ja: "「わあ、本当に感動した！」好みじゃないけど、気持ちが嬉しい。",
          'zh-CN': "「哇，真的很感动！」不是我的风格，但很感谢这份心意。",
          'zh-TW': "「哇，真的很感動！」不是我的風格，但很感謝這份心意。",
          vi: "\"Ồ thật cảm động!\" Không phải sở thích của tôi nhưng tôi biết ơn tấm lòng.",
          id: "\"Wah, saya benar-benar tersentuh!\" Bukan selera saya, tapi saya bersyukur atas pikirannya."
        },
        score: 1
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 '공감'이란?",
      en: "What does 'empathy' mean to you?",
      ja: "あなたにとって「共感」とは？",
      'zh-CN': "对你来说'共情'是什么？",
      'zh-TW': "對你來說「共情」是什麼？",
      vi: "'Đồng cảm' đối với bạn là gì?",
      id: "Apa arti 'empati' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "이해가 되어야 할 수 있는 것.",
          en: "Something that requires understanding first.",
          ja: "理解ができて初めてできるもの。",
          'zh-CN': "需要先理解才能做到的事。",
          'zh-TW': "需要先理解才能做到的事。",
          vi: "Điều gì đó cần hiểu trước mới có thể làm được.",
          id: "Sesuatu yang memerlukan pemahaman terlebih dahulu."
        },
        score: 0
      },
      {
        text: {
          ko: "자연스럽게 느껴지는 것.",
          en: "Something that comes naturally.",
          ja: "自然に感じられるもの。",
          'zh-CN': "自然而然就能感受到的东西。",
          'zh-TW': "自然而然就能感受到的東西。",
          vi: "Điều gì đó đến một cách tự nhiên.",
          id: "Sesuatu yang datang secara alami."
        },
        score: 1
      }
    ]
  }
];

export const empathyFResults: EmpathyFResult[] = [
  {
    type: "Type1",
    emoji: "🌵",
    title: {
      ko: "감정의 불모지, 사막의 선인장",
      en: "Emotional Wasteland, Desert Cactus",
      ja: "感情の不毛地、砂漠のサボテン",
      'zh-CN': "情感的荒原，沙漠中的仙人掌",
      'zh-TW': "情感的荒原，沙漠中的仙人掌",
      vi: "Vùng đất cằn cỗi của cảm xúc, xương rồng sa mạc",
      id: "Gurun Emosi, Kaktus Gurun"
    },
    shortDescription: {
      ko: "\"공감이요? 먹는 건가요?\"",
      en: "\"Empathy? Is that something you eat?\"",
      ja: "「共感？食べるもの？」",
      'zh-CN': "「共情？能吃吗？」",
      'zh-TW': "「共情？能吃嗎？」",
      vi: "\"Đồng cảm? Cái đó có ăn được không?\"",
      id: "\"Empati? Apakah itu sesuatu yang bisa dimakan?\""
    },
    description: {
      ko: "당신은 감정 기복이 거의 없고 매사 이성적인 편입니다. 친구의 고민을 들어줄 때도 '해결책'을 주는 것이 진정한 배려라고 생각합니다. 가끔 \"로봇 같다\", \"냉정하다\"는 소리를 듣지만, 위기 상황에서는 누구보다 침착하게 문제를 해결하는 능력자입니다.",
      en: "You have almost no emotional fluctuations and are rational in everything. When listening to a friend's worries, you think providing 'solutions' is true care. You sometimes hear that you're 'like a robot' or 'cold', but in crisis situations, you're the one who solves problems most calmly.",
      ja: "あなたは感情の起伏がほとんどなく、何事も理性的です。友達の悩みを聞くときも「解決策」を提示することが本当の思いやりだと考えています。「ロボットみたい」「冷たい」と言われることもありますが、危機的状況では誰よりも冷静に問題を解決する能力者です。",
      'zh-CN': "你几乎没有情绪波动，凡事都很理性。在倾听朋友的烦恼时，你认为提供'解决方案'才是真正的关怀。虽然有时会听到'像机器人'、'冷漠'的评价，但在危机情况下，你是最能冷静解决问题的人。",
      'zh-TW': "你幾乎沒有情緒波動，凡事都很理性。在傾聽朋友的煩惱時，你認為提供「解決方案」才是真正的關懷。雖然有時會聽到「像機器人」、「冷漠」的評價，但在危機情況下，你是最能冷靜解決問題的人。",
      vi: "Bạn hầu như không có biến động cảm xúc và luôn lý trí trong mọi việc. Khi lắng nghe nỗi lo của bạn bè, bạn nghĩ đưa ra 'giải pháp' mới là sự quan tâm thực sự. Đôi khi bạn nghe mình 'giống robot' hoặc 'lạnh lùng', nhưng trong tình huống khủng hoảng, bạn là người giải quyết vấn đề bình tĩnh nhất.",
      id: "Anda hampir tidak memiliki fluktuasi emosional dan rasional dalam segala hal. Saat mendengarkan kekhawatiran teman, Anda berpikir memberikan 'solusi' adalah perhatian yang sebenarnya. Anda kadang mendengar bahwa Anda 'seperti robot' atau 'dingin', tetapi dalam situasi krisis, Anda adalah yang paling tenang menyelesaikan masalah."
    },
    empathyLevel: {
      ko: "5%",
      en: "5%",
      ja: "5%",
      'zh-CN': "5%",
      'zh-TW': "5%",
      vi: "5%",
      id: "5%"
    },
    characteristics: {
      ko: "영혼 없는 리액션, 팩트 폭격기",
      en: "Soulless reactions, Fact bomber",
      ja: "魂のないリアクション、ファクト爆撃機",
      'zh-CN': "没有灵魂的反应，事实轰炸机",
      'zh-TW': "沒有靈魂的反應，事實轟炸機",
      vi: "Phản ứng vô hồn, Máy ném sự thật",
      id: "Reaksi tanpa jiwa, Pengebom fakta"
    },
    goodMatch: {
      ko: "Type 2 (서툰 뚝딱이)",
      en: "Type 2 (Clumsy Robot)",
      ja: "Type 2 (不器用なロボット)",
      'zh-CN': "Type 2 (笨拙的机器人)",
      'zh-TW': "Type 2 (笨拙的機器人)",
      vi: "Type 2 (Robot vụng về)",
      id: "Type 2 (Robot Canggung)"
    },
    badMatch: {
      ko: "Type 6 (인간 수도꼭지)",
      en: "Type 6 (Human Faucet)",
      ja: "Type 6 (人間の蛇口)",
      'zh-CN': "Type 6 (人类水龙头)",
      'zh-TW': "Type 6 (人類水龍頭)",
      vi: "Type 6 (Vòi nước người)",
      id: "Type 6 (Keran Manusia)"
    }
  },
  {
    type: "Type2",
    emoji: "🤖",
    title: {
      ko: "입력 오류난 AI, 고장 난 뚝딱이",
      en: "AI with Input Error, Broken Robot",
      ja: "入力エラーのAI、故障したロボット",
      'zh-CN': "输入错误的AI，故障的机器人",
      'zh-TW': "輸入錯誤的AI，故障的機器人",
      vi: "AI lỗi đầu vào, Robot hỏng",
      id: "AI dengan Kesalahan Input, Robot Rusak"
    },
    shortDescription: {
      ko: "\"위로는 해주고 싶은데... 어떻게 하지?\"",
      en: "\"I want to comfort them... but how?\"",
      ja: "「慰めたいけど...どうすればいい？」",
      'zh-CN': "「想安慰他们...但怎么做？」",
      'zh-TW': "「想安慰他們...但怎麼做？」",
      vi: "\"Muốn an ủi họ... nhưng làm sao?\"",
      id: "\"Saya ingin menghibur mereka... tapi bagaimana?\""
    },
    description: {
      ko: "당신은 마음속으로는 친구를 걱정하지만, 표현하는 방법이 서툴러서 뚝딱거립니다. \"힘내\"라는 말 이상의 위로를 건네기 어려워하며, 어색한 분위기를 못 견뎌 합니다. 하지만 행동으로 챙겨주는 츤데레 같은 매력이 있습니다.",
      en: "You worry about your friend deep down, but you're clumsy at expressing it, so you fumble. You find it hard to offer comfort beyond saying 'cheer up', and you can't stand awkward atmospheres. But you have a tsundere-like charm of taking care of others through actions.",
      ja: "あなたは心の中では友達を心配していますが、表現方法が下手で、もたついてしまいます。「頑張って」という言葉以上の慰めを伝えるのが難しく、気まずい雰囲気に耐えられません。しかし、行動で気遣ってくれるツンデレのような魅力があります。",
      'zh-CN': "你内心深处担心朋友，但不擅长表达，所以会手忙脚乱。很难说出比'加油'更进一步的安慰，也无法忍受尴尬的气氛。但你有像傲娇一样通过行动照顾别人的魅力。",
      'zh-TW': "你內心深處擔心朋友，但不擅長表達，所以會手忙腳亂。很難說出比「加油」更進一步的安慰，也無法忍受尷尬的氣氛。但你有像傲嬌一樣通過行動照顧別人的魅力。",
      vi: "Bạn lo lắng cho bạn bè trong lòng nhưng vụng về trong cách thể hiện nên lúng túng. Bạn khó đưa ra lời an ủi hơn câu 'cố lên' và không chịu được không khí khó xử. Nhưng bạn có sức hút kiểu tsundere khi chăm sóc người khác bằng hành động.",
      id: "Anda mengkhawatirkan teman di dalam hati, tetapi canggung dalam mengekspresikannya, jadi Anda bingung. Sulit untuk memberikan kenyamanan di luar kata 'semangat', dan Anda tidak tahan dengan suasana canggung. Tetapi Anda memiliki pesona seperti tsundere yang merawat orang lain melalui tindakan."
    },
    empathyLevel: {
      ko: "20%",
      en: "20%",
      ja: "20%",
      'zh-CN': "20%",
      'zh-TW': "20%",
      vi: "20%",
      id: "20%"
    },
    characteristics: {
      ko: "어색한 위로, 말보다 행동파",
      en: "Awkward comfort, Action over words",
      ja: "気まずい慰め、言葉より行動派",
      'zh-CN': "尴尬的安慰，行动派胜过言语",
      'zh-TW': "尷尬的安慰，行動派勝過言語",
      vi: "An ủi vụng về, Hành động hơn lời nói",
      id: "Kenyamanan canggung, Tindakan lebih dari kata-kata"
    },
    goodMatch: {
      ko: "Type 1 (사막의 선인장)",
      en: "Type 1 (Desert Cactus)",
      ja: "Type 1 (砂漠のサボテン)",
      'zh-CN': "Type 1 (沙漠仙人掌)",
      'zh-TW': "Type 1 (沙漠仙人掌)",
      vi: "Type 1 (Xương rồng sa mạc)",
      id: "Type 1 (Kaktus Gurun)"
    },
    badMatch: {
      ko: "Type 5 (솜사탕)",
      en: "Type 5 (Cotton Candy)",
      ja: "Type 5 (綿飴)",
      'zh-CN': "Type 5 (棉花糖)",
      'zh-TW': "Type 5 (棉花糖)",
      vi: "Type 5 (Kẹo bông)",
      id: "Type 5 (Permen Kapas)"
    }
  },
  {
    type: "Type3",
    emoji: "🌓",
    title: {
      ko: "선택적 공감러, 반반 무 많이",
      en: "Selective Empathizer, Half and Half",
      ja: "選択的共感者、半々",
      'zh-CN': "选择性共情者，半半",
      'zh-TW': "選擇性共情者，半半",
      vi: "Người đồng cảm có chọn lọc, Nửa nửa",
      id: "Empatis Selektif, Setengah-setengah"
    },
    shortDescription: {
      ko: "\"이해는 되는데, 공감은 글쎄?\"",
      en: "\"I understand, but empathy? Hmm...\"",
      ja: "「理解はできるけど、共感はどうかな？」",
      'zh-CN': "「理解是理解，但共情嘛...」",
      'zh-TW': "「理解是理解，但共情嘛...」",
      vi: "\"Hiểu thì hiểu, nhưng đồng cảm thì...\"",
      id: "\"Saya mengerti, tapi empati? Hmm...\""
    },
    description: {
      ko: "당신은 상황에 따라 T와 F를 오가는 하이브리드형입니다. 내가 겪어본 일이나 관심 있는 분야에는 폭풍 공감하지만, 이해가 안 되는 상황에서는 칼같이 선을 긋습니다. 사회생활에 최적화된 리액션을 장착하고 있습니다.",
      en: "You're a hybrid type that switches between T and F depending on the situation. You empathize intensely with things you've experienced or are interested in, but you draw a clear line when you can't understand the situation. You're equipped with reactions optimized for social life.",
      ja: "あなたは状況に応じてTとFを行き来するハイブリッド型です。自分が経験したことや興味のある分野には大いに共感しますが、理解できない状況ではきっぱりと線を引きます。社会生活に最適化されたリアクションを装備しています。",
      'zh-CN': "你是根据情况在T和F之间切换的混合型。对于你经历过或感兴趣的领域，你会强烈共情，但对于无法理解的情况，你会明确划清界限。你拥有为社交生活优化的反应。",
      'zh-TW': "你是根據情況在T和F之間切換的混合型。對於你經歷過或感興趣的領域，你會強烈共情，但對於無法理解的情況，你會明確劃清界線。你擁有為社交生活優化的反應。",
      vi: "Bạn là kiểu lai chuyển đổi giữa T và F tùy tình huống. Bạn đồng cảm mãnh liệt với những gì đã trải qua hoặc quan tâm, nhưng vạch ranh giới rõ ràng khi không hiểu tình huống. Bạn được trang bị phản ứng tối ưu cho đời sống xã hội.",
      id: "Anda adalah tipe hibrida yang beralih antara T dan F tergantung situasi. Anda sangat berempati dengan hal-hal yang pernah Anda alami atau minati, tetapi Anda menarik garis tegas ketika tidak dapat memahami situasinya. Anda dilengkapi dengan reaksi yang dioptimalkan untuk kehidupan sosial."
    },
    empathyLevel: {
      ko: "40%",
      en: "40%",
      ja: "40%",
      'zh-CN': "40%",
      'zh-TW': "40%",
      vi: "40%",
      id: "40%"
    },
    characteristics: {
      ko: "영혼 있는 척 가능, 사회성 만렙",
      en: "Can fake having a soul, Max social skills",
      ja: "魂があるふり可能、社会性マックス",
      'zh-CN': "可以假装有灵魂，社交技能满级",
      'zh-TW': "可以假裝有靈魂，社交技能滿級",
      vi: "Có thể giả vờ có linh hồn, Kỹ năng xã hội tối đa",
      id: "Bisa berpura-pura punya jiwa, Keterampilan sosial maksimal"
    },
    goodMatch: {
      ko: "Type 4 (따뜻한 핫팩)",
      en: "Type 4 (Warm Hot Pack)",
      ja: "Type 4 (温かいホッカイロ)",
      'zh-CN': "Type 4 (温暖的热敷包)",
      'zh-TW': "Type 4 (溫暖的熱敷包)",
      vi: "Type 4 (Túi sưởi ấm)",
      id: "Type 4 (Bantalan Hangat)"
    },
    badMatch: {
      ko: "없음 (두루두루 잘 지냄)",
      en: "None (Gets along with everyone)",
      ja: "なし（みんなと仲良くやっている）",
      'zh-CN': "无（和谁都处得来）",
      'zh-TW': "無（和誰都處得來）",
      vi: "Không có (Hòa hợp với mọi người)",
      id: "Tidak ada (Bergaul dengan semua orang)"
    }
  },
  {
    type: "Type4",
    emoji: "🔥",
    title: {
      ko: "온기 가득, 주머니 속 핫팩",
      en: "Full of Warmth, Hot Pack in Pocket",
      ja: "温かさ満載、ポケットの中のホッカイロ",
      'zh-CN': "充满温暖，口袋里的热敷包",
      'zh-TW': "充滿溫暖，口袋裡的熱敷包",
      vi: "Ấm áp đầy đủ, Túi sưởi trong túi",
      id: "Penuh Kehangatan, Bantalan Hangat di Saku"
    },
    shortDescription: {
      ko: "\"그랬구나... 진짜 힘들었겠다.\"",
      en: "\"I see... That must have been really hard.\"",
      ja: "「そうだったのか...本当に大変だったね。」",
      'zh-CN': "「原来如此...一定很难受吧。」",
      'zh-TW': "「原來如此...一定很難受吧。」",
      vi: "\"Ra vậy... Chắc là rất khó khăn.\"",
      id: "\"Begitu ya... Pasti sangat sulit.\""
    },
    description: {
      ko: "당신은 타인의 감정을 잘 읽고 적절하게 반응해 주는 따뜻한 사람입니다. 친구의 이야기를 진심으로 들어주며, 과하지도 부족하지도 않은 위로를 건넵니다. 주변 사람들에게 \"너랑 얘기하면 마음이 편해\"라는 말을 자주 듣습니다.",
      en: "You're a warm person who reads others' emotions well and responds appropriately. You listen to your friends' stories sincerely and offer comfort that's neither excessive nor insufficient. People around you often say 'I feel at ease when I talk to you'.",
      ja: "あなたは他人の感情をよく読み取り、適切に反応してくれる温かい人です。友達の話を心から聞いて、過不足のない慰めをかけます。周りの人から「あなたと話すと心が楽になる」という言葉をよく聞きます。",
      'zh-CN': "你是一个温暖的人，善于读懂他人的情绪并适当回应。你真诚地倾听朋友的故事，给予既不过度也不不足的安慰。周围的人经常对你说'和你聊天心情会变好'。",
      'zh-TW': "你是一個溫暖的人，善於讀懂他人的情緒並適當回應。你真誠地傾聽朋友的故事，給予既不過度也不不足的安慰。周圍的人經常對你說「和你聊天心情會變好」。",
      vi: "Bạn là người ấm áp, đọc tốt cảm xúc người khác và phản ứng phù hợp. Bạn lắng nghe câu chuyện của bạn bè một cách chân thành và đưa ra sự an ủi vừa phải. Mọi người xung quanh thường nói 'Nói chuyện với bạn tôi cảm thấy thoải mái'.",
      id: "Anda adalah orang yang hangat yang membaca emosi orang lain dengan baik dan merespons dengan tepat. Anda mendengarkan cerita teman dengan tulus dan menawarkan kenyamanan yang tidak berlebihan atau kurang. Orang di sekitar Anda sering mengatakan 'Saya merasa tenang saat berbicara dengan Anda'."
    },
    empathyLevel: {
      ko: "60%",
      en: "60%",
      ja: "60%",
      'zh-CN': "60%",
      'zh-TW': "60%",
      vi: "60%",
      id: "60%"
    },
    characteristics: {
      ko: "프로 리스너, 편안한 대화",
      en: "Pro listener, Comfortable conversation",
      ja: "プロリスナー、心地よい会話",
      'zh-CN': "专业倾听者，舒适的对话",
      'zh-TW': "專業傾聽者，舒適的對話",
      vi: "Người nghe chuyên nghiệp, Cuộc trò chuyện thoải mái",
      id: "Pendengar profesional, Percakapan nyaman"
    },
    goodMatch: {
      ko: "Type 3 (선택적 공감러)",
      en: "Type 3 (Selective Empathizer)",
      ja: "Type 3 (選択的共感者)",
      'zh-CN': "Type 3 (选择性共情者)",
      'zh-TW': "Type 3 (選擇性共情者)",
      vi: "Type 3 (Người đồng cảm có chọn lọc)",
      id: "Type 3 (Empatis Selektif)"
    },
    badMatch: {
      ko: "Type 1 (사막의 선인장)",
      en: "Type 1 (Desert Cactus)",
      ja: "Type 1 (砂漠のサボテン)",
      'zh-CN': "Type 1 (沙漠仙人掌)",
      'zh-TW': "Type 1 (沙漠仙人掌)",
      vi: "Type 1 (Xương rồng sa mạc)",
      id: "Type 1 (Kaktus Gurun)"
    }
  },
  {
    type: "Type5",
    emoji: "☁️",
    title: {
      ko: "몽글몽글 감성, 달콤한 솜사탕",
      en: "Soft and Fluffy Emotion, Sweet Cotton Candy",
      ja: "ふわふわ感情、甘い綿飴",
      'zh-CN': "软绵绵的情感，甜蜜的棉花糖",
      'zh-TW': "軟綿綿的情感，甜蜜的棉花糖",
      vi: "Cảm xúc mềm mại, Kẹo bông ngọt ngào",
      id: "Emosi Lembut, Permen Kapas Manis"
    },
    shortDescription: {
      ko: "\"너의 기분이 곧 나의 기분이야\"",
      en: "\"Your mood is my mood\"",
      ja: "「あなたの気分が私の気分」",
      'zh-CN': "「你的心情就是我的心情」",
      'zh-TW': "「你的心情就是我的心情」",
      vi: "\"Tâm trạng của bạn là tâm trạng của tôi\"",
      id: "\"Perasaanmu adalah perasaanku\""
    },
    description: {
      ko: "당신은 감수성이 풍부하고 마음이 여린 사람입니다. 친구가 기뻐하면 더 기뻐하고, 슬퍼하면 더 슬퍼합니다. 사소한 말 한마디에도 감동받고, 반대로 상처도 잘 받습니다. 세상을 아름답고 따뜻하게 바라보는 순수한 영혼입니다.",
      en: "You're a person with rich sensitivity and a tender heart. When a friend is happy, you're even happier; when they're sad, you're even sadder. You're moved by even a small word, and conversely, you get hurt easily. You're a pure soul who sees the world as beautiful and warm.",
      ja: "あなたは感受性が豊かで心が優しい人です。友達が喜べばもっと喜び、悲しめばもっと悲しみます。些細な一言にも感動し、逆に傷つきやすいです。世界を美しく温かく見る純粋な魂です。",
      'zh-CN': "你是一个敏感丰富、心地柔软的人。朋友高兴时你更高兴，朋友悲伤时你更悲伤。一句小话就能让你感动，反过来也容易受伤。你是一个用美丽和温暖看待世界的纯真灵魂。",
      'zh-TW': "你是一個敏感豐富、心地柔軟的人。朋友高興時你更高興，朋友悲傷時你更悲傷。一句小話就能讓你感動，反過來也容易受傷。你是一個用美麗和溫暖看待世界的純真靈魂。",
      vi: "Bạn là người nhạy cảm phong phú và có trái tim mềm yếu. Khi bạn bè vui, bạn vui hơn; khi họ buồn, bạn buồn hơn. Bạn cảm động bởi cả một lời nói nhỏ, và ngược lại, bạn dễ bị tổn thương. Bạn là một tâm hồn thuần khiết nhìn thế giới đẹp đẽ và ấm áp.",
      id: "Anda adalah orang dengan kepekaan yang kaya dan hati yang lembut. Ketika teman bahagia, Anda lebih bahagia; ketika mereka sedih, Anda lebih sedih. Anda tersentuh oleh bahkan kata kecil, dan sebaliknya, Anda mudah terluka. Anda adalah jiwa murni yang melihat dunia sebagai indah dan hangat."
    },
    empathyLevel: {
      ko: "80%",
      en: "80%",
      ja: "80%",
      'zh-CN': "80%",
      'zh-TW': "80%",
      vi: "80%",
      id: "80%"
    },
    characteristics: {
      ko: "리액션 부자, 쿠크다스 멘탈",
      en: "Rich in reactions, Cookie stick mentality",
      ja: "リアクション豊富、クッキー棒メンタル",
      'zh-CN': "反应丰富，饼干棒心态",
      'zh-TW': "反應豐富，餅乾棒心態",
      vi: "Phản ứng phong phú, Tâm lý dễ vỡ",
      id: "Kaya reaksi, Mentalitas stik kue"
    },
    goodMatch: {
      ko: "Type 6 (인간 수도꼭지)",
      en: "Type 6 (Human Faucet)",
      ja: "Type 6 (人間の蛇口)",
      'zh-CN': "Type 6 (人类水龙头)",
      'zh-TW': "Type 6 (人類水龍頭)",
      vi: "Type 6 (Vòi nước người)",
      id: "Type 6 (Keran Manusia)"
    },
    badMatch: {
      ko: "Type 2 (고장 난 뚝딱이)",
      en: "Type 2 (Broken Robot)",
      ja: "Type 2 (故障したロボット)",
      'zh-CN': "Type 2 (故障的机器人)",
      'zh-TW': "Type 2 (故障的機器人)",
      vi: "Type 2 (Robot hỏng)",
      id: "Type 2 (Robot Rusak)"
    }
  },
  {
    type: "Type6",
    emoji: "😭",
    title: {
      ko: "1리터의 눈물, 인간 수도꼭지",
      en: "1 Liter of Tears, Human Faucet",
      ja: "1リットルの涙、人間の蛇口",
      'zh-CN': "1升的眼泪，人类水龙头",
      'zh-TW': "1升的眼淚，人類水龍頭",
      vi: "1 lít nước mắt, Vòi nước người",
      id: "1 Liter Air Mata, Keran Manusia"
    },
    shortDescription: {
      ko: "\"세상의 모든 슬픔을 내가 다 안고 갈게\"",
      en: "\"I'll carry all the sadness in the world\"",
      ja: "「世界のすべての悲しみを私が背負う」",
      'zh-CN': "「我会承担世界上所有的悲伤」",
      'zh-TW': "「我會承擔世界上所有的悲傷」",
      vi: "\"Tôi sẽ gánh tất cả nỗi buồn trên thế giới\"",
      id: "\"Saya akan memikul semua kesedihan di dunia\""
    },
    description: {
      ko: "당신은 공감 능력이 너무 뛰어나서 탈인 유형입니다. 드라마를 보거나 슬픈 뉴스를 보면 하루 종일 우울해질 정도로 감정 이입이 심합니다. 친구가 울면 이유도 묻지 않고 따라 울어버리는, 진정한 파워 F입니다.",
      en: "You're a type where your empathy ability is so outstanding it's excessive. When you watch dramas or sad news, you get so emotionally invested that you can be depressed all day. When a friend cries, you cry along without even asking why - you're a true Power F.",
      ja: "あなたは共感能力が優れすぎて異常なタイプです。ドラマを見たり悲しいニュースを見ると、一日中落ち込むほど感情移入が激しいです。友達が泣くと理由も聞かずに一緒に泣いてしまう、真のパワーFです。",
      'zh-CN': "你的共情能力过于出色，已经到了过度的程度。看电视剧或悲伤新闻时，你会过度投入情感，以至于一整天都感到沮丧。朋友哭时，你甚至不问原因就跟着哭——你是真正的力量F。",
      'zh-TW': "你的共情能力過於出色，已經到了過度的程度。看電視劇或悲傷新聞時，你會過度投入情感，以至於一整天都感到沮喪。朋友哭時，你甚至不問原因就跟著哭——你是真正的力量F。",
      vi: "Bạn là kiểu người có khả năng đồng cảm xuất sắc đến mức quá mức. Khi xem phim truyền hình hoặc tin tức buồn, bạn nhập tâm cảm xúc đến mức có thể buồn cả ngày. Khi bạn bè khóc, bạn khóc theo mà không cần hỏi lý do - bạn là Power F thực sự.",
      id: "Anda adalah tipe di mana kemampuan empati Anda sangat luar biasa sehingga berlebihan. Saat menonton drama atau berita sedih, Anda begitu terlibat secara emosional sehingga bisa depresi sepanjang hari. Ketika teman menangis, Anda menangis bersama tanpa bertanya mengapa - Anda adalah Power F sejati."
    },
    empathyLevel: {
      ko: "99.9%",
      en: "99.9%",
      ja: "99.9%",
      'zh-CN': "99.9%",
      'zh-TW': "99.9%",
      vi: "99.9%",
      id: "99.9%"
    },
    characteristics: {
      ko: "휴지 필수, 눈물 버튼 고장 남",
      en: "Tissues essential, Tears button broken",
      ja: "ティッシュ必須、涙ボタン故障中",
      'zh-CN': "纸巾必备，眼泪按钮故障",
      'zh-TW': "紙巾必備，眼淚按鈕故障",
      vi: "Khăn giấy bắt buộc, Nút nước mắt hỏng",
      id: "Tisu wajib, Tombol air mata rusak"
    },
    goodMatch: {
      ko: "Type 5 (솜사탕)",
      en: "Type 5 (Cotton Candy)",
      ja: "Type 5 (綿飴)",
      'zh-CN': "Type 5 (棉花糖)",
      'zh-TW': "Type 5 (棉花糖)",
      vi: "Type 5 (Kẹo bông)",
      id: "Type 5 (Permen Kapas)"
    },
    badMatch: {
      ko: "Type 1 (사막의 선인장)",
      en: "Type 1 (Desert Cactus)",
      ja: "Type 1 (砂漠のサボテン)",
      'zh-CN': "Type 1 (沙漠仙人掌)",
      'zh-TW': "Type 1 (沙漠仙人掌)",
      vi: "Type 1 (Xương rồng sa mạc)",
      id: "Type 1 (Kaktus Gurun)"
    }
  }
];

export function calculateEmpathyFResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 1) {
    return "Type1";
  } else if (totalScore >= 2 && totalScore <= 3) {
    return "Type2";
  } else if (totalScore >= 4 && totalScore <= 6) {
    return "Type3";
  } else if (totalScore >= 7 && totalScore <= 9) {
    return "Type4";
  } else if (totalScore >= 10 && totalScore <= 11) {
    return "Type5";
  } else {
    return "Type6";
  }
}


