export interface Phase2FactBomberQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1
  }[];
}

export interface Phase2FactBomberResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  factBomberLevel: Record<string, string>; // "1%", "20%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2FactBomberQuestions: Phase2FactBomberQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 \"나 요즘 살찐 것 같아...\"라고 말할 때?",
      en: "When a friend says \"I think I've gained weight lately...\"?",
      ja: "友達が「最近太ったみたい...」と言ったとき？",
      'zh-CN': "当朋友说\"我最近好像胖了...\"时？",
      'zh-TW': "當朋友說「我最近好像胖了...」時？",
      vi: "Khi bạn bè nói \"Mình nghĩ gần đây mình béo lên...\"?",
      id: "Ketika teman mengatakan \"Sepertinya saya bertambah berat akhir-akhir ini...\"?"
    },
    options: [
      {
        text: {
          ko: "\"에이 아니야~ 보기 딱 좋아! 스트레스 받지 마\"",
          en: "\"No way~ You look great! Don't stress about it\"",
          ja: "「そんなことないよ～ちょうどいいよ！気にしないで」",
          'zh-CN': "\"不会啊~看起来正好！别太在意\"",
          'zh-TW': "「不會啊～看起來正好！別太在意」",
          vi: "\"Không phải đâu~ Trông vừa đẹp! Đừng căng thẳng\"",
          id: "\"Enggak kok~ Kelihatannya pas! Jangan stres\""
        },
        score: 0 // A (감성적)
      },
      {
        text: {
          ko: "\"음... 좀 찐 것 같기도? 야식 줄이고 운동 좀 해\"",
          en: "\"Hmm... Maybe a bit? Try cutting down on late-night snacks and exercise more\"",
          ja: "「うーん...ちょっと太ったかも？夜食減らして運動したら？」",
          'zh-CN': "\"嗯...好像有点？少吃点夜宵，多运动吧\"",
          'zh-TW': "「嗯...好像有點？少吃點宵夜，多運動吧」",
          vi: "\"Hmm... Có thể một chút? Giảm ăn khuya và tập thể dục thêm\"",
          id: "\"Hmm... Mungkin sedikit? Coba kurangi makan tengah malam dan olahraga\""
        },
        score: 1 // B (이성적/현실적)
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 \"나 우울해서 머리 잘랐어\"라고 했다.",
      en: "A friend said \"I cut my hair because I was depressed.\"",
      ja: "友達が「落ち込んでいて髪を切った」と言った。",
      'zh-CN': "朋友说\"我因为心情不好剪了头发\"。",
      'zh-TW': "朋友說「我因為心情不好剪了頭髮」。",
      vi: "Bạn bè nói \"Mình cắt tóc vì chán nản.\"",
      id: "Teman mengatakan \"Saya potong rambut karena depresi.\""
    },
    options: [
      {
        text: {
          ko: "\"헐 왜 우울해? 무슨 일 있었어? ㅠㅠ\"",
          en: "\"Oh no, why are you depressed? What happened?\"",
          ja: "「えー、なんで落ち込んでるの？何があったの？」",
          'zh-CN': "\"啊？为什么心情不好？发生什么事了？\"",
          'zh-TW': "「啊？為什麼心情不好？發生什麼事了？」",
          vi: "\"Ồ không, sao lại chán nản? Có chuyện gì xảy ra?\"",
          id: "\"Oh tidak, kenapa depresi? Apa yang terjadi?\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"얼마 주고 잘랐어? 사진 보여줘\"",
          en: "\"How much did you pay? Show me a photo\"",
          ja: "「いくらで切ったの？写真見せて」",
          'zh-CN': "\"花了多少钱？给我看看照片\"",
          'zh-TW': "「花了多少錢？給我看照片」",
          vi: "\"Cắt hết bao nhiêu? Cho mình xem ảnh\"",
          id: "\"Berapa harganya? Tunjukkan fotonya\""
        },
        score: 1
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 차 사고가 났다고 전화가 왔다.",
      en: "A friend called saying they had a car accident.",
      ja: "友達から交通事故に遭ったと電話が来た。",
      'zh-CN': "朋友打电话说发生了车祸。",
      'zh-TW': "朋友打電話說發生了車禍。",
      vi: "Bạn bè gọi điện nói họ bị tai nạn xe hơi.",
      id: "Teman menelepon mengatakan mereka mengalami kecelakaan mobil."
    },
    options: [
      {
        text: {
          ko: "\"헐! 몸은 괜찮아? 많이 놀랐겠다 ㅠㅠ\"",
          en: "\"Oh no! Are you okay? You must have been so shocked\"",
          ja: "「えー！体は大丈夫？すごく驚いたでしょ」",
          'zh-CN': "\"天哪！身体还好吗？你一定很震惊吧\"",
          'zh-TW': "「天哪！身體還好嗎？你一定很震驚吧」",
          vi: "\"Ồ không! Cơ thể ổn chứ? Bạn chắc rất sốc\"",
          id: "\"Oh tidak! Apakah kamu baik-baik saja? Kamu pasti sangat terkejut\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"보험 불렀어? 과실 비율은 어떻게 된대?\"",
          en: "\"Did you call the insurance? What's the fault ratio?\"",
          ja: "「保険会社には連絡した？過失割合はどうなったの？」",
          'zh-CN': "\"你给保险公司打电话了吗？责任比例是多少？\"",
          'zh-TW': "「你給保險公司打電話了嗎？責任比例是多少？」",
          vi: "\"Bạn đã gọi bảo hiểm chưa? Tỷ lệ lỗi như thế nào?\"",
          id: "\"Apakah kamu sudah menghubungi asuransi? Berapa rasio kesalahannya?\""
        },
        score: 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "슬픈 영화를 볼 때 당신의 머릿속은?",
      en: "What goes through your mind when watching a sad movie?",
      ja: "悲しい映画を見るとき、あなたの頭の中は？",
      'zh-CN': "看悲伤电影时你脑子里想什么？",
      'zh-TW': "看悲傷電影時你腦子裡想什麼？",
      vi: "Điều gì diễn ra trong đầu bạn khi xem phim buồn?",
      id: "Apa yang terlintas di pikiran Anda saat menonton film sedih?"
    },
    options: [
      {
        text: {
          ko: "주인공에 빙의해서 같이 오열하고 있다.",
          en: "I'm possessed by the protagonist and crying together.",
          ja: "主人公に憑依して一緒に泣いている。",
          'zh-CN': "被主角附身，一起痛哭。",
          'zh-TW': "被主角附身，一起痛哭。",
          vi: "Tôi bị nhân vật chính chiếm hữu và khóc cùng nhau.",
          id: "Saya dirasuki protagonis dan menangis bersama."
        },
        score: 0
      },
      {
        text: {
          ko: "'저 상황에서 왜 저러지? 개연성이 좀...' 분석하고 있다.",
          en: "'Why would they do that in that situation? The plausibility is a bit...' I'm analyzing it.",
          ja: "「あの状況でなんでそうするの？説得力がちょっと...」分析している。",
          'zh-CN': "\"那种情况下为什么会那样？合理性有点...\"我在分析。",
          'zh-TW': "「那種情況下為什麼會那樣？合理性有點...」我在分析。",
          vi: "'Tại sao họ lại làm thế trong tình huống đó? Tính hợp lý hơi...' Tôi đang phân tích.",
          id: "'Mengapa mereka melakukan itu dalam situasi itu? Plausibilitasnya agak...' Saya menganalisisnya."
        },
        score: 1
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "시험에 떨어져서 우울해하는 친구에게?",
      en: "To a friend who is depressed because they failed an exam?",
      ja: "試験に落ちて落ち込んでいる友達に？",
      'zh-CN': "对因考试失败而沮丧的朋友？",
      'zh-TW': "對因考試失敗而沮喪的朋友？",
      vi: "Với bạn bè buồn vì thi trượt?",
      id: "Kepada teman yang depresi karena gagal ujian?"
    },
    options: [
      {
        text: {
          ko: "\"진짜 아쉽다... 너 열심히 했는데 내가 다 속상해\"",
          en: "\"That's really disappointing... You worked so hard, I'm sad too\"",
          ja: "「本当に残念...あなた一生懸命やったのに、私も悲しい」",
          'zh-CN': "\"真可惜...你那么努力，我也很难过\"",
          'zh-TW': "「真可惜...你那麼努力，我也很難過」",
          vi: "\"Thật đáng tiếc... Bạn đã cố gắng rất nhiều, tôi cũng buồn\"",
          id: "\"Sangat mengecewakan... Kamu sudah bekerja keras, saya juga sedih\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"어떤 문제 틀렸는데? 다음엔 이렇게 준비해 봐\"",
          en: "\"What problems did you get wrong? Try preparing this way next time\"",
          ja: "「どんな問題を間違えたの？次はこうやって準備してみて」",
          'zh-CN': "\"哪些题目做错了？下次试试这样准备\"",
          'zh-TW': "「哪些題目做錯了？下次試試這樣準備」",
          vi: "\"Bạn đã làm sai những câu nào? Lần sau thử chuẩn bị theo cách này\"",
          id: "\"Soal apa yang salah? Coba persiapkan dengan cara ini lain kali\""
        },
        score: 1
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "누군가 나에게 고민 상담을 요청한다면?",
      en: "If someone asks me for advice about their worries?",
      ja: "誰かが私に悩み相談を求めてきたら？",
      'zh-CN': "如果有人向我寻求烦恼咨询？",
      'zh-TW': "如果有人向我尋求煩惱諮詢？",
      vi: "Nếu ai đó yêu cầu tôi tư vấn về nỗi lo lắng?",
      id: "Jika seseorang meminta saya untuk konsultasi tentang kekhawatiran mereka?"
    },
    options: [
      {
        text: {
          ko: "끝까지 들어주고 맞장구쳐주는 게 중요하다고 생각한다",
          en: "I think it's important to listen to the end and respond empathetically",
          ja: "最後まで聞いて、相槌を打つのが大切だと思う",
          'zh-CN': "我认为听完并给予回应很重要",
          'zh-TW': "我認為聽完並給予回應很重要",
          vi: "Tôi nghĩ điều quan trọng là lắng nghe đến cuối và phản hồi đồng cảm",
          id: "Saya pikir penting untuk mendengarkan sampai akhir dan merespons dengan empati"
        },
        score: 0
      },
      {
        text: {
          ko: "현실적인 해결책을 제시해 주는 게 진정한 도움이라고 생각한다",
          en: "I think providing practical solutions is true help",
          ja: "現実的な解決策を提示することが本当の助けだと思う",
          'zh-CN': "我认为提供现实的解决方案才是真正的帮助",
          'zh-TW': "我認為提供現實的解決方案才是真正的幫助",
          vi: "Tôi nghĩ đưa ra giải pháp thực tế mới là sự giúp đỡ thực sự",
          id: "Saya pikir memberikan solusi praktis adalah bantuan yang sebenarnya"
        },
        score: 1
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구가 \"나 배 아파\"라고 했을 때?",
      en: "When a friend says \"My stomach hurts\"?",
      ja: "友達が「お腹が痛い」と言ったとき？",
      'zh-CN': "当朋友说\"我肚子疼\"时？",
      'zh-TW': "當朋友說「我肚子疼」時？",
      vi: "Khi bạn bè nói \"Bụng mình đau\"?",
      id: "Ketika teman mengatakan \"Perutku sakit\"?"
    },
    options: [
      {
        text: {
          ko: "\"많이 아파? 배 문질러 줄게 ㅠㅠ\"",
          en: "\"Does it hurt a lot? I'll rub your stomach for you\"",
          ja: "「すごく痛い？お腹をさすってあげる」",
          'zh-CN': "\"很疼吗？我给你揉揉肚子\"",
          'zh-TW': "「很疼嗎？我給你揉揉肚子」",
          vi: "\"Đau nhiều không? Để mình xoa bụng cho bạn\"",
          id: "\"Sakit sekali? Saya akan menggosok perutmu\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"어제 뭐 먹었는데? 병원 가봐. 아니면 약 사다 줄까?\"",
          en: "\"What did you eat yesterday? Go to the hospital. Or should I get you some medicine?\"",
          ja: "「昨日何食べたの？病院に行って。それとも薬を買ってこようか？」",
          'zh-CN': "\"昨天吃了什么？去医院看看。或者我给你买点药？\"",
          'zh-TW': "「昨天吃了什麼？去醫院看看。或者我給你買點藥？」",
          vi: "\"Hôm qua bạn ăn gì? Đi bệnh viện đi. Hoặc để mình mua thuốc cho bạn?\"",
          id: "\"Apa yang kamu makan kemarin? Pergi ke rumah sakit. Atau saya belikan obat?\""
        },
        score: 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "선물을 받았는데 마음에 안 들 때?",
      en: "When you receive a gift you don't like?",
      ja: "もらったプレゼントが気に入らないとき？",
      'zh-CN': "收到不喜欢的礼物时？",
      'zh-TW': "收到不喜歡的禮物時？",
      vi: "Khi nhận được món quà không thích?",
      id: "Ketika Anda menerima hadiah yang tidak Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "\"와! 진짜 예쁘다!\" 상대가 무안할까 봐 맘에 드는 척한다",
          en: "\"Wow! It's really pretty!\" I pretend to like it so they don't feel awkward",
          ja: "「わあ！本当にきれい！」相手が気まずくなるのが嫌で気に入ったふりをする",
          'zh-CN': "\"哇！真漂亮！\"我假装喜欢，以免对方尴尬",
          'zh-TW': "「哇！真漂亮！」我假裝喜歡，以免對方尷尬",
          vi: "\"Ồ! Đẹp thật đấy!\" Tôi giả vờ thích để họ không cảm thấy khó xử",
          id: "\"Wow! Benar-benar cantik!\" Saya berpura-pura menyukainya agar mereka tidak merasa canggung"
        },
        score: 0
      },
      {
        text: {
          ko: "\"고마워. 근데 영수증 있어? 색상 교환하고 싶은데\" 실용성을 택한다",
          en: "\"Thanks. But do you have the receipt? I'd like to exchange the color\" I choose practicality",
          ja: "「ありがとう。でもレシートある？色を交換したいんだけど」実用性を選ぶ",
          'zh-CN': "\"谢谢。不过有收据吗？我想换个颜色\"我选择实用性",
          'zh-TW': "「謝謝。不過有收據嗎？我想換個顏色」我選擇實用性",
          vi: "\"Cảm ơn. Nhưng có hóa đơn không? Mình muốn đổi màu\" Tôi chọn tính thực dụng",
          id: "\"Terima kasih. Tapi ada struknya? Saya ingin menukar warnanya\" Saya memilih kepraktisan"
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
          ko: "억울하고 분해서 눈물부터 차오르고 말이 잘 안 나온다",
          en: "I feel wronged and angry, so tears well up first and I can't speak well",
          ja: "悔しくて怒りで、まず涙が溢れて、うまく話せない",
          'zh-CN': "我感到委屈和愤怒，眼泪先涌上来，话都说不出来",
          'zh-TW': "我感到委屈和憤怒，眼淚先湧上來，話都說不出來",
          vi: "Tôi cảm thấy oan ức và tức giận, nước mắt trào ra trước và không nói được",
          id: "Saya merasa tidak adil dan marah, jadi air mata mengalir terlebih dahulu dan saya tidak bisa berbicara dengan baik"
        },
        score: 0
      },
      {
        text: {
          ko: "논리적으로 조목조목 따져서 잘잘못을 가려야 직성이 풀린다",
          en: "I have to logically go through each point to determine right and wrong to feel satisfied",
          ja: "論理的に一つ一つ追及して、正誤を判断しなければ気が済まない",
          'zh-CN': "我必须逻辑地逐条追究，判断对错才能满意",
          'zh-TW': "我必須邏輯地逐條追究，判斷對錯才能滿意",
          vi: "Tôi phải phân tích từng điểm một cách logic để xác định đúng sai thì mới thỏa mãn",
          id: "Saya harus secara logis memeriksa setiap poin untuk menentukan benar dan salah agar merasa puas"
        },
        score: 1
      }
    ]
  },
  {
    id: 10,
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
          ko: "'만약에 좀비가 나타나면...' 꼬리에 꼬리를 무는 상상",
          en: "'What if zombies appear...' Imagination that leads to another",
          ja: "「もしゾンビが現れたら...」次々と続く想像",
          'zh-CN': "\"如果僵尸出现...\"一个接一个的想象",
          'zh-TW': "「如果殭屍出現...」一個接一個的想像",
          vi: "'Nếu zombie xuất hiện...' Tưởng tượng nối tiếp nhau",
          id: "'Bagaimana jika zombie muncul...' Imajinasi yang saling beruntun"
        },
        score: 0
      },
      {
        text: {
          ko: "'오늘 저녁 뭐 먹지? 내일 일정 체크해야지.' 현실적인 계획",
          en: "'What should I eat for dinner? I need to check tomorrow's schedule.' Realistic plans",
          ja: "「今日の夕食何食べよう？明日の予定チェックしなきゃ」現実的な計画",
          'zh-CN': "\"今晚吃什么？我得检查明天的日程。\"现实的计划",
          'zh-TW': "「今晚吃什麼？我得檢查明天的日程。」現實的計劃",
          vi: "'Tối nay ăn gì nhỉ? Phải kiểm tra lịch ngày mai.' Kế hoạch thực tế",
          id: "'Makan malam apa hari ini? Saya perlu mengecek jadwal besok.' Rencana realistis"
        },
        score: 1
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "친구가 새로 산 옷이 별로 안 어울릴 때?",
      en: "When a friend's newly bought clothes don't look good on them?",
      ja: "友達が新しく買った服が似合わないとき？",
      'zh-CN': "当朋友新买的衣服不太适合时？",
      'zh-TW': "當朋友新買的衣服不太適合時？",
      vi: "Khi quần áo mới mua của bạn bè không đẹp?",
      id: "Ketika pakaian baru yang dibeli teman tidak cocok?"
    },
    options: [
      {
        text: {
          ko: "\"오~ 색깔 특이하다! 너랑 잘 어울리는 것 같아\"",
          en: "\"Oh~ The color is unique! It seems to suit you well\"",
          ja: "「おー！色が独特だね！よく似合ってるよ」",
          'zh-CN': "\"哦~颜色很特别！好像很适合你\"",
          'zh-TW': "「哦～顏色很特別！好像很適合你」",
          vi: "\"Ồ~ Màu sắc độc đáo! Có vẻ hợp với bạn\"",
          id: "\"Oh~ Warnanya unik! Sepertinya cocok denganmu\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"솔직히 그 색은 너 톤이랑 안 맞아. 환불하는 게 낫지 않아?\"",
          en: "\"Honestly, that color doesn't match your skin tone. Wouldn't it be better to return it?\"",
          ja: "「正直言うと、その色はあなたのトーンと合わないよ。返品した方がよくない？」",
          'zh-CN': "\"老实说，那个颜色不太配你的肤色。退货会不会更好？\"",
          'zh-TW': "「老實說，那個顏色不太配你的膚色。退貨會不會更好？」",
          vi: "\"Thật ra màu đó không hợp với tông da bạn. Trả lại không tốt hơn sao?\"",
          id: "\"Jujur, warna itu tidak cocok dengan tone kulitmu. Bukankah lebih baik dikembalikan?\""
        },
        score: 1
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 생각하는 최악의 인간상은?",
      en: "What is the worst type of person in your opinion?",
      ja: "あなたが考える最悪の人間像は？",
      'zh-CN': "你认为最糟糕的人是什么样的？",
      'zh-TW': "你認為最糟糕的人是什麼樣的？",
      vi: "Bạn nghĩ kiểu người tệ nhất là gì?",
      id: "Apa tipe orang terburuk menurut Anda?"
    },
    options: [
      {
        text: {
          ko: "앞뒤 다르고 사람 무시하는 인성 파탄자",
          en: "Someone with a broken personality who is two-faced and disrespects others",
          ja: "表裏が違い、人を無視する人格破綻者",
          'zh-CN': "表里不一、不尊重人的人格败坏者",
          'zh-TW': "表裡不一、不尊重人的人格敗壞者",
          vi: "Người có nhân cách tồi tệ, hai mặt và không tôn trọng người khác",
          id: "Seseorang dengan kepribadian rusak yang bermuka dua dan tidak menghormati orang lain"
        },
        score: 0
      },
      {
        text: {
          ko: "일 못하고 멍청해서 팀에 민폐 끼치는 무능력자",
          en: "An incompetent person who can't work well and is stupid, causing trouble for the team",
          ja: "仕事ができず、バカでチームに迷惑をかける無能者",
          'zh-CN': "工作能力差、愚蠢、给团队带来麻烦的无能者",
          'zh-TW': "工作能力差、愚蠢、給團隊帶來麻煩的無能者",
          vi: "Người vô năng lực, không làm việc được và ngu ngốc, gây phiền phức cho đội",
          id: "Orang yang tidak kompeten yang tidak bisa bekerja dengan baik dan bodoh, menyebabkan masalah bagi tim"
        },
        score: 1
      }
    ]
  }
];

export const phase2FactBomberResults: Phase2FactBomberResult[] = [
  {
    type: "Type1",
    emoji: "🍮",
    title: {
      ko: "말랑말랑 순두부, 명예 F",
      en: "Soft Tofu, Honorary F",
      ja: "やわらかい豆腐、名誉F",
      'zh-CN': "软软豆腐，名誉F",
      'zh-TW': "軟軟豆腐，名譽F",
      vi: "Đậu phụ mềm mại, F danh dự",
      id: "Tahu Lembut, F Kehormatan"
    },
    shortDescription: {
      ko: "\"팩폭 그게 뭔데? 먹는 거야?\"",
      en: "\"What's that fact bombing? Is it something to eat?\"",
      ja: "「ファクト爆撃って何？食べ物？」",
      'zh-CN': "\"事实轰炸是什么？能吃吗？\"",
      'zh-TW': "「事實轟炸是什麼？能吃嗎？」",
      vi: "\"Fact bombing là gì? Có phải là thứ để ăn không?\"",
      id: "\"Apa itu fact bombing? Apakah itu sesuatu untuk dimakan?\""
    },
    description: {
      ko: "당신은 T 테스트를 하러 왔지만 뼛속까지 F인 사람입니다. 타인의 감정에 민감하고, 싫은 소리를 절대 못 합니다. 팩트를 말해서 상처를 주느니 차라리 선의의 거짓말을 택합니다. 공감 능력 만렙인 당신은 세상의 빛과 소금입니다.",
      en: "You came to take a T test, but you're an F through and through. You're sensitive to others' emotions and can never say anything harsh. You'd rather tell a white lie than speak facts that might hurt someone. With max-level empathy, you are the light and salt of the world.",
      ja: "あなたはTテストを受けに来ましたが、骨の髄までFの人です。他人の感情に敏感で、嫌なことは絶対に言えません。事実を言って傷つけるより、善意の嘘を選びます。共感能力がマックスレベルのあなたは、世の光と塩です。",
      'zh-CN': "你来做T测试，但你骨子里是F。你对他人情绪敏感，从不说难听的话。与其说出事实伤害别人，你宁愿说善意的谎言。共情能力满级的你是世界的光和盐。",
      'zh-TW': "你來做T測試，但你骨子裡是F。你對他人情緒敏感，從不說難聽的話。與其說出事實傷害別人，你寧願說善意的謊言。共情能力滿級的你是世界的光和鹽。",
      vi: "Bạn đến làm bài kiểm tra T, nhưng bạn là F từ trong ra ngoài. Bạn nhạy cảm với cảm xúc của người khác và không bao giờ nói điều gì khó nghe. Bạn thà nói dối vô hại hơn là nói sự thật có thể làm tổn thương ai đó. Với khả năng đồng cảm tối đa, bạn là ánh sáng và muối của thế giới.",
      id: "Anda datang untuk mengikuti tes T, tetapi Anda adalah F sepenuhnya. Anda sensitif terhadap emosi orang lain dan tidak pernah bisa mengatakan sesuatu yang keras. Anda lebih suka berbohong putih daripada mengatakan fakta yang mungkin menyakiti seseorang. Dengan empati level maksimum, Anda adalah cahaya dan garam dunia."
    },
    factBomberLevel: {
      ko: "1% (공격력 제로)",
      en: "1% (Zero Attack Power)",
      ja: "1%（攻撃力ゼロ）",
      'zh-CN': "1%（攻击力为零）",
      'zh-TW': "1%（攻擊力為零）",
      vi: "1% (Sức tấn công bằng không)",
      id: "1% (Kekuatan Serangan Nol)"
    },
    characteristics: {
      ko: "거절 못 함, 눈물 많음",
      en: "Can't say no, cries easily",
      ja: "断れない、涙もろい",
      'zh-CN': "无法拒绝，爱哭",
      'zh-TW': "無法拒絕，愛哭",
      vi: "Không thể từ chối, dễ khóc",
      id: "Tidak bisa menolak, mudah menangis"
    },
    goodMatch: {
      ko: "Type 2 (눈치 보는 F)",
      en: "Type 2 (F Who Reads the Room)",
      ja: "Type 2（空気を読むF）",
      'zh-CN': "Type 2（会看眼色的F）",
      'zh-TW': "Type 2（會看眼色的F）",
      vi: "Type 2 (F biết đọc tình huống)",
      id: "Type 2 (F yang Membaca Situasi)"
    },
    badMatch: {
      ko: "Type 6 (감정 없는 AI)",
      en: "Type 6 (Emotionless AI)",
      ja: "Type 6（感情のないAI）",
      'zh-CN': "Type 6（没有感情的AI）",
      'zh-TW': "Type 6（沒有感情的AI）",
      vi: "Type 6 (AI vô cảm)",
      id: "Type 6 (AI Tanpa Emosi)"
    }
  },
  {
    type: "Type2",
    emoji: "🥐",
    title: {
      ko: "노력형 이성주의자, 겉바속촉",
      en: "Effortful Rationalist, Hard Outside Soft Inside",
      ja: "努力型合理主義者、外は固く中は柔らかい",
      'zh-CN': "努力型理性主义者，外硬内软",
      'zh-TW': "努力型理性主義者，外硬內軟",
      vi: "Người duy lý nỗ lực, ngoài cứng trong mềm",
      id: "Rasionalis Berusaha, Keras di Luar Lembut di Dalam"
    },
    shortDescription: {
      ko: "\"머리로는 아는데 마음이 안 따라줘\"",
      en: "\"I know it in my head but my heart doesn't follow\"",
      ja: "「頭ではわかっているけど、心がついていかない」",
      'zh-CN': "\"头脑明白，但心不跟随\"",
      'zh-TW': "「頭腦明白，但心不跟隨」",
      vi: "\"Đầu óc hiểu nhưng trái tim không theo\"",
      id: "\"Saya tahu di kepala tapi hati tidak mengikuti\""
    },
    description: {
      ko: "당신은 겉으로는 쿨해 보이고 싶어 하지만 속은 여린 사람입니다. 팩트를 말해야 할 타이밍에도 상대방이 상처받을까 봐 주저합니다. T가 되고 싶은 F, 혹은 사회화된 F에 가깝습니다.",
      en: "You want to appear cool on the outside, but you're soft inside. Even when you should speak facts, you hesitate because you're afraid of hurting the other person. You're an F who wants to be T, or a socialized F.",
      ja: "あなたは表面的にはクールに見せたいけれど、中身は優しい人です。ファクトを言うべきタイミングでも、相手を傷つけてしまうかもしれないと躊躇します。TになりたいF、あるいは社会化されたFに近いです。",
      'zh-CN': "你想在外表上看起来很酷，但内心很柔软。即使应该说事实的时候，你也因为害怕伤害对方而犹豫。你是想成为T的F，或者说是社会化的F。",
      'zh-TW': "你想在外表上看起來很酷，但內心很柔軟。即使應該說事實的時候，你也因為害怕傷害對方而猶豫。你是想成為T的F，或者說是社會化的F。",
      vi: "Bạn muốn trông cool ở bên ngoài, nhưng bên trong bạn mềm yếu. Ngay cả khi nên nói sự thật, bạn cũng do dự vì sợ làm tổn thương người khác. Bạn là F muốn trở thành T, hoặc F đã được xã hội hóa.",
      id: "Anda ingin terlihat keren di luar, tetapi Anda lembut di dalam. Bahkan saat harus mengatakan fakta, Anda ragu karena takut menyakiti orang lain. Anda adalah F yang ingin menjadi T, atau F yang tersosialisasi."
    },
    factBomberLevel: {
      ko: "20% (소심한 공격)",
      en: "20% (Timid Attack)",
      ja: "20%（小心な攻撃）",
      'zh-CN': "20%（胆小的攻击）",
      'zh-TW': "20%（膽小的攻擊）",
      vi: "20% (Tấn công rụt rè)",
      id: "20% (Serangan Pemalu)"
    },
    characteristics: {
      ko: "할 말 하고 나서 후회함, 밤에 이불 킥",
      en: "Regrets after speaking, kicks blanket at night",
      ja: "言った後で後悔する、夜に布団を蹴る",
      'zh-CN': "说完就后悔，晚上踢被子",
      'zh-TW': "說完就後悔，晚上踢被子",
      vi: "Hối hận sau khi nói, đá chăn vào ban đêm",
      id: "Menyesal setelah berbicara, menendang selimut di malam hari"
    },
    goodMatch: {
      ko: "Type 1 (순두부)",
      en: "Type 1 (Soft Tofu)",
      ja: "Type 1（豆腐）",
      'zh-CN': "Type 1（软豆腐）",
      'zh-TW': "Type 1（軟豆腐）",
      vi: "Type 1 (Đậu phụ mềm)",
      id: "Type 1 (Tahu Lembut)"
    },
    badMatch: {
      ko: "Type 5 (팩트 폭격기)",
      en: "Type 5 (Fact Bomber)",
      ja: "Type 5（ファクト爆撃機）",
      'zh-CN': "Type 5（事实轰炸机）",
      'zh-TW': "Type 5（事實轟炸機）",
      vi: "Type 5 (Máy ném fact)",
      id: "Type 5 (Pengebom Fakta)"
    }
  },
  {
    type: "Type3",
    emoji: "🌗",
    title: {
      ko: "반반 무 많이, 하이브리드 T",
      en: "Half and Half, Hybrid T",
      ja: "半々、ハイブリッドT",
      'zh-CN': "一半一半，混合T",
      'zh-TW': "一半一半，混合T",
      vi: "Nửa nửa, T lai",
      id: "Setengah-Setengah, T Hibrida"
    },
    shortDescription: {
      ko: "\"상황에 따라 달라요\"",
      en: "\"It depends on the situation\"",
      ja: "「状況によって違う」",
      'zh-CN': "\"视情况而定\"",
      'zh-TW': "「視情況而定」",
      vi: "\"Tùy vào tình huống\"",
      id: "\"Tergantung situasinya\""
    },
    description: {
      ko: "당신은 이성과 감성의 밸런스가 아주 좋습니다. 공감이 필요할 땐 공감을, 해결책이 필요할 땐 해결책을 줄 수 있는 유연함을 가졌습니다. 사회생활에 최적화된 지능형 캐릭터입니다.",
      en: "You have an excellent balance between reason and emotion. You have the flexibility to provide empathy when needed, and solutions when solutions are needed. You're an intelligent character optimized for social life.",
      ja: "あなたは理性と感情のバランスがとても良いです。共感が必要なときは共感を、解決策が必要なときは解決策を与えられる柔軟性を持っています。社会生活に最適化されたインテリジェントなキャラクターです。",
      'zh-CN': "你在理性和情感之间有很好的平衡。你有灵活性，需要共情时给予共情，需要解决方案时提供解决方案。你是为社交生活优化的智能角色。",
      'zh-TW': "你在理性和情感之間有很好的平衡。你有靈活性，需要共情時給予共情，需要解決方案時提供解決方案。你是為社交生活優化的智能角色。",
      vi: "Bạn có sự cân bằng tuyệt vời giữa lý trí và cảm xúc. Bạn có sự linh hoạt để cung cấp sự đồng cảm khi cần, và giải pháp khi cần giải pháp. Bạn là một nhân vật thông minh được tối ưu hóa cho cuộc sống xã hội.",
      id: "Anda memiliki keseimbangan yang sangat baik antara akal dan emosi. Anda memiliki fleksibilitas untuk memberikan empati saat dibutuhkan, dan solusi saat solusi dibutuhkan. Anda adalah karakter cerdas yang dioptimalkan untuk kehidupan sosial."
    },
    factBomberLevel: {
      ko: "40% (선택적 공격)",
      en: "40% (Selective Attack)",
      ja: "40%（選択的攻撃）",
      'zh-CN': "40%（选择性攻击）",
      'zh-TW': "40%（選擇性攻擊）",
      vi: "40% (Tấn công có chọn lọc)",
      id: "40% (Serangan Selektif)"
    },
    characteristics: {
      ko: "눈치 빠름, 중재자 역할",
      en: "Quick-witted, plays mediator role",
      ja: "察しが早い、調停者の役割",
      'zh-CN': "反应快，扮演调解者角色",
      'zh-TW': "反應快，扮演調解者角色",
      vi: "Nhanh nhạy, đóng vai trò hòa giải",
      id: "Cepat tanggap, berperan sebagai mediator"
    },
    goodMatch: {
      ko: "Type 4 (효율적 조언가)",
      en: "Type 4 (Efficient Advisor)",
      ja: "Type 4（効率的な助言者）",
      'zh-CN': "Type 4（高效顾问）",
      'zh-TW': "Type 4（高效顧問）",
      vi: "Type 4 (Cố vấn hiệu quả)",
      id: "Type 4 (Penasihat Efisien)"
    },
    badMatch: {
      ko: "없음 (두루두루 잘 지냄)",
      en: "None (Gets along with everyone)",
      ja: "なし（みんなと仲良くできる）",
      'zh-CN': "无（与谁都处得来）",
      'zh-TW': "無（與誰都處得來）",
      vi: "Không có (Hòa hợp với mọi người)",
      id: "Tidak ada (Akur dengan semua orang)"
    }
  },
  {
    type: "Type4",
    emoji: "👓",
    title: {
      ko: "효율적 조언가, 스마트 T",
      en: "Efficient Advisor, Smart T",
      ja: "効率的な助言者、スマートT",
      'zh-CN': "高效顾问，聪明T",
      'zh-TW': "高效顧問，聰明T",
      vi: "Cố vấn hiệu quả, T thông minh",
      id: "Penasihat Efisien, T Cerdas"
    },
    shortDescription: {
      ko: "\"감정 소모는 사절, 해결이 먼저다\"",
      en: "\"No emotional waste, solutions come first\"",
      ja: "「感情の消耗はお断り、解決が最優先」",
      'zh-CN': "\"拒绝情感消耗，解决方案优先\"",
      'zh-TW': "「拒絕情感消耗，解決方案優先」",
      vi: "\"Không lãng phí cảm xúc, giải pháp là ưu tiên\"",
      id: "\"Tidak ada pemborosan emosional, solusi yang utama\""
    },
    description: {
      ko: "당신은 감정적인 징징거림보다는 건설적인 대화를 선호합니다. 친구가 힘들어하면 같이 울어주기보다는 실질적인 도움을 주는 것이 낫다고 판단합니다. 차가워 보이지만 사실은 누구보다 친구의 문제 해결을 위해 고민하는 따뜻한(?) 마음을 가졌습니다.",
      en: "You prefer constructive conversations over emotional whining. When a friend is struggling, you judge that it's better to provide practical help than to cry together. You may seem cold, but you actually have a warm(?) heart that worries about solving your friend's problems more than anyone else.",
      ja: "あなたは感情的なくどくどした話より建設的な対話を好みます。友達が苦しんでいるとき、一緒に泣くより実質的な助けを提供する方がいいと判断します。冷たく見えますが、実際には誰よりも友達の問題解決のために悩む温かい(?)心を持っています。",
      'zh-CN': "比起情感上的抱怨，你更喜欢建设性的对话。当朋友遇到困难时，你认为提供实际帮助比一起哭泣更好。你看起来很冷，但实际上你有一颗温暖(?)的心，比任何人都更关心解决朋友的问题。",
      'zh-TW': "比起情感上的抱怨，你更喜歡建設性的對話。當朋友遇到困難時，你認為提供實際幫助比一起哭泣更好。你看起來很冷，但實際上你有一顆溫暖(?)的心，比任何人都更關心解決朋友的問題。",
      vi: "Bạn thích những cuộc trò chuyện mang tính xây dựng hơn là than vãn cảm xúc. Khi bạn bè gặp khó khăn, bạn cho rằng việc cung cấp sự giúp đỡ thực tế tốt hơn là cùng khóc. Bạn có vẻ lạnh lùng, nhưng thực ra bạn có một trái tim ấm áp(?) lo lắng về việc giải quyết vấn đề của bạn bè hơn bất kỳ ai khác.",
      id: "Anda lebih suka percakapan yang konstruktif daripada mengeluh secara emosional. Ketika teman sedang berjuang, Anda menilai lebih baik memberikan bantuan praktis daripada menangis bersama. Anda mungkin terlihat dingin, tetapi sebenarnya Anda memiliki hati yang hangat(?) yang mengkhawatirkan penyelesaian masalah teman lebih dari siapa pun."
    },
    factBomberLevel: {
      ko: "60% (유효타 공격)",
      en: "60% (Effective Attack)",
      ja: "60%（有効打攻撃）",
      'zh-CN': "60%（有效攻击）",
      'zh-TW': "60%（有效攻擊）",
      vi: "60% (Tấn công hiệu quả)",
      id: "60% (Serangan Efektif)"
    },
    characteristics: {
      ko: "츤데레, 잔소리꾼",
      en: "Tsundere, nagging type",
      ja: "ツンデレ、口うるさい",
      'zh-CN': "傲娇，爱唠叨",
      'zh-TW': "傲嬌，愛嘮叨",
      vi: "Tsundere, hay cằn nhằn",
      id: "Tsundere, tipe cerewet"
    },
    goodMatch: {
      ko: "Type 3 (하이브리드 T)",
      en: "Type 3 (Hybrid T)",
      ja: "Type 3（ハイブリッドT）",
      'zh-CN': "Type 3（混合T）",
      'zh-TW': "Type 3（混合T）",
      vi: "Type 3 (T lai)",
      id: "Type 3 (T Hibrida)"
    },
    badMatch: {
      ko: "Type 1 (순두부)",
      en: "Type 1 (Soft Tofu)",
      ja: "Type 1（豆腐）",
      'zh-CN': "Type 1（软豆腐）",
      'zh-TW': "Type 1（軟豆腐）",
      vi: "Type 1 (Đậu phụ mềm)",
      id: "Type 1 (Tahu Lembut)"
    }
  },
  {
    type: "Type5",
    emoji: "💣",
    title: {
      ko: "자비 없는 팩트 폭격기",
      en: "Merciless Fact Bomber",
      ja: "容赦ないファクト爆撃機",
      'zh-CN': "无情的真相轰炸机",
      'zh-TW': "無情的真相轟炸機",
      vi: "Máy ném fact không thương tiếc",
      id: "Pengebom Fakta Tanpa Ampun"
    },
    shortDescription: {
      ko: "\"맞는 말인데 왜 기분 나빠해?\"",
      en: "\"I'm saying the right thing, why are you upset?\"",
      ja: "「正しいことを言ってるのに、なんで機嫌悪いの？」",
      'zh-CN': "\"我说得对，你为什么生气？\"",
      'zh-TW': "「我說得對，你為什麼生氣？」",
      vi: "\"Tôi nói đúng mà, sao bạn lại khó chịu?\"",
      id: "\"Saya mengatakan hal yang benar, kenapa kamu kesal?\""
    },
    description: {
      ko: "당신은 틀린 말은 절대 안 합니다. 다만 그 말이 너무 날카로워서 상대방의 뼈를 부러뜨릴 뿐입니다. \"다 너 잘되라고 하는 소리야\"라며 조언하지만, 듣는 사람은 상처받을 수 있습니다. 논리 정연한 말빨로 말싸움에서 지는 법이 없습니다.",
      en: "You never say anything wrong. It's just that your words are so sharp they can break the other person's bones. You advise saying \"I'm saying all this for your own good,\" but the listener can still get hurt. With your logically organized speaking skills, you never lose arguments.",
      ja: "あなたは間違ったことは絶対に言いません。ただ、その言葉があまりにも鋭くて相手の骨を折ってしまうだけです。「全部あなたのためを思って言ってるんだよ」と助言しますが、聞く人は傷つく可能性があります。論理的に整理された話術で、口論で負けることはありません。",
      'zh-CN': "你从不说错话。只是你的话太尖锐，可能会伤到对方的骨头。你建议说\"我这么说都是为了你好\"，但听者仍然可能受伤。凭借逻辑清晰的口才，你在争论中从不输。",
      'zh-TW': "你從不說錯話。只是你的話太尖銳，可能會傷到對方的骨頭。你建議說「我這麼說都是為了你好」，但聽者仍然可能受傷。憑藉邏輯清晰的口才，你在爭論中從不輸。",
      vi: "Bạn không bao giờ nói sai. Chỉ là lời nói của bạn quá sắc bén đến mức có thể làm gãy xương người khác. Bạn khuyên rằng \"Tôi nói tất cả những điều này vì lợi ích của bạn,\" nhưng người nghe vẫn có thể bị tổn thương. Với kỹ năng nói logic có tổ chức, bạn không bao giờ thua trong tranh luận.",
      id: "Anda tidak pernah mengatakan hal yang salah. Hanya saja kata-kata Anda begitu tajam sehingga bisa mematahkan tulang orang lain. Anda menasihati dengan mengatakan \"Saya mengatakan semua ini untuk kebaikan Anda,\" tetapi pendengar tetap bisa terluka. Dengan keterampilan berbicara yang terorganisir secara logis, Anda tidak pernah kalah dalam argumen."
    },
    factBomberLevel: {
      ko: "80% (치명타 공격)",
      en: "80% (Critical Attack)",
      ja: "80%（致命打攻撃）",
      'zh-CN': "80%（致命攻击）",
      'zh-TW': "80%（致命攻擊）",
      vi: "80% (Tấn công chí mạng)",
      id: "80% (Serangan Kritis)"
    },
    characteristics: {
      ko: "토론 즐김, 답답한 거 못 참음",
      en: "Loves debates, can't stand frustrating things",
      ja: "議論が好き、イライラすることが耐えられない",
      'zh-CN': "喜欢辩论，无法忍受令人沮丧的事",
      'zh-TW': "喜歡辯論，無法忍受令人沮喪的事",
      vi: "Thích tranh luận, không chịu được những điều bực mình",
      id: "Suka berdebat, tidak tahan hal-hal yang membuat frustrasi"
    },
    goodMatch: {
      ko: "Type 6 (감정 없는 AI)",
      en: "Type 6 (Emotionless AI)",
      ja: "Type 6（感情のないAI）",
      'zh-CN': "Type 6（没有感情的AI）",
      'zh-TW': "Type 6（沒有感情的AI）",
      vi: "Type 6 (AI vô cảm)",
      id: "Type 6 (AI Tanpa Emosi)"
    },
    badMatch: {
      ko: "Type 2 (겉바속촉)",
      en: "Type 2 (Hard Outside Soft Inside)",
      ja: "Type 2（外は固く中は柔らかい）",
      'zh-CN': "Type 2（外硬内软）",
      'zh-TW': "Type 2（外硬內軟）",
      vi: "Type 2 (Ngoài cứng trong mềm)",
      id: "Type 2 (Keras di Luar Lembut di Dalam)"
    }
  },
  {
    type: "Type6",
    emoji: "🤖",
    title: {
      ko: "감정 없는 AI 로봇",
      en: "Emotionless AI Robot",
      ja: "感情のないAIロボット",
      'zh-CN': "没有感情的AI机器人",
      'zh-TW': "沒有感情的AI機器人",
      vi: "Robot AI vô cảm",
      id: "Robot AI Tanpa Emosi"
    },
    shortDescription: {
      ko: "\"입력된 명령어: 오직 팩트\"",
      en: "\"Input command: Facts only\"",
      ja: "「入力されたコマンド：ファクトのみ」",
      'zh-CN': "\"输入命令：仅事实\"",
      'zh-TW': "「輸入命令：僅事實」",
      vi: "\"Lệnh đã nhập: Chỉ sự thật\"",
      id: "\"Perintah yang dimasukkan: Hanya fakta\""
    },
    description: {
      ko: "당신에게 감정은 불필요한 데이터일 뿐입니다. 극강의 효율과 논리를 추구하며, 공감 능력이 제로에 수렴합니다. 타인의 감정에 휘둘리지 않고 냉철한 판단을 내리는 능력은 뛰어나지만, 사회성 패치가 조금 필요할 수 있습니다.",
      en: "To you, emotions are just unnecessary data. You pursue extreme efficiency and logic, and your empathy ability approaches zero. While you excel at making cold judgments without being swayed by others' emotions, you might need a bit of a social patch.",
      ja: "あなたにとって、感情は不要なデータでしかありません。極限の効率と論理を追求し、共感能力はゼロに近づきます。他人の感情に左右されずに冷静な判断を下す能力は優れていますが、社会性パッチが少し必要かもしれません。",
      'zh-CN': "对你来说，情感只是不必要的数据。你追求极致的效率和逻辑，共情能力趋近于零。虽然你擅长在不被他人情绪影响的情况下做出冷静的判断，但你可能需要一点社交补丁。",
      'zh-TW': "對你來說，情感只是不必要的數據。你追求極致的效率和邏輯，共情能力趨近於零。雖然你擅長在不被他人情緒影響的情況下做出冷靜的判斷，但你可能需要一點社交補丁。",
      vi: "Với bạn, cảm xúc chỉ là dữ liệu không cần thiết. Bạn theo đuổi hiệu quả và logic cực đoan, và khả năng đồng cảm của bạn tiến gần đến số không. Trong khi bạn xuất sắc trong việc đưa ra phán đoán lạnh lùng mà không bị ảnh hưởng bởi cảm xúc của người khác, bạn có thể cần một chút bản vá xã hội.",
      id: "Bagi Anda, emosi hanyalah data yang tidak perlu. Anda mengejar efisiensi dan logika ekstrem, dan kemampuan empati Anda mendekati nol. Meskipun Anda unggul dalam membuat penilaian dingin tanpa terpengaruh oleh emosi orang lain, Anda mungkin membutuhkan sedikit patch sosial."
    },
    factBomberLevel: {
      ko: "99% (전멸)",
      en: "99% (Annihilation)",
      ja: "99%（全滅）",
      'zh-CN': "99%（全灭）",
      'zh-TW': "99%（全滅）",
      vi: "99% (Tiêu diệt hoàn toàn)",
      id: "99% (Pemusnahan)"
    },
    characteristics: {
      ko: "\"그래서?\", \"결론이 뭔데?\"",
      en: "\"So?\", \"What's the conclusion?\"",
      ja: "「だから？結論は？」",
      'zh-CN': "\"所以呢？结论是什么？\"",
      'zh-TW': "「所以呢？結論是什麼？」",
      vi: "\"Vậy thì?\", \"Kết luận là gì?\"",
      id: "\"Jadi?\", \"Kesimpulannya apa?\""
    },
    goodMatch: {
      ko: "Type 5 (팩트 폭격기)",
      en: "Type 5 (Fact Bomber)",
      ja: "Type 5（ファクト爆撃機）",
      'zh-CN': "Type 5（事实轰炸机）",
      'zh-TW': "Type 5（事實轟炸機）",
      vi: "Type 5 (Máy ném fact)",
      id: "Type 5 (Pengebom Fakta)"
    },
    badMatch: {
      ko: "Type 1 (순두부)",
      en: "Type 1 (Soft Tofu)",
      ja: "Type 1（豆腐）",
      'zh-CN': "Type 1（软豆腐）",
      'zh-TW': "Type 1（軟豆腐）",
      vi: "Type 1 (Đậu phụ mềm)",
      id: "Type 1 (Tahu Lembut)"
    }
  }
];

export function calculatePhase2FactBomberResult(answers: number[]): string {
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
  } else if (totalScore === 12) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type6";
  }
}

