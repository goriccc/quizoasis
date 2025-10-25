export interface ReactionStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface ReactionStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  strengths: Record<string, string[]>;
  weaknesses: Record<string, string[]>;
  advice: Record<string, string>;
  reactionFeatures: Record<string, string>;
}

export const reactionStyleQuestions: ReactionStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "좋은 소식을 들었을 때?",
      en: "When you hear good news?",
      ja: "良い知らせを聞いた時？",
      'zh-CN': "听到好消息时？",
      'zh-TW': "聽到好消息時？",
      id: "Ketika Anda mendengar kabar baik?",
      vi: "Khi bạn nghe tin tốt?"
    },
    options: [
      {
        text: {
          ko: "즉시 기뻐하며 감정 표현",
          en: "Immediately express joy and emotions",
          ja: "すぐに喜んで感情を表現する",
          'zh-CN': "立即表达喜悦和情感",
          'zh-TW': "立即表達喜悅和情感",
          id: "Segera mengekspresikan kegembiraan dan emosi",
          vi: "Ngay lập tức thể hiện niềm vui và cảm xúc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"정말? 어떻게 된 거야?\" 분석",
          en: "\"Really? What happened?\" Analyze",
          ja: "「本当？どうなったの？」分析する",
          'zh-CN': "「真的吗？怎么回事？」分析",
          'zh-TW': "「真的嗎？怎麼回事？」分析",
          id: "「Benarkah? Apa yang terjadi?」 Menganalisis",
          vi: "「Thật sao? Chuyện gì đã xảy ra?」 Phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"축하해!\" 하고 축하 행동",
          en: "\"Congratulations!\" Take congratulatory action",
          ja: "「おめでとう！」お祝いの行動を取る",
          'zh-CN': "「恭喜！」采取祝贺行动",
          'zh-TW': "「恭喜！」採取祝賀行動",
          id: "「Selamat!」 Melakukan aksi selamat",
          vi: "「Chúc mừng!」 Thực hiện hành động chúc mừng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "조용히 미소 지으며 기뻐함",
          en: "Quietly smile and be happy",
          ja: "静かに微笑んで喜ぶ",
          'zh-CN': "安静地微笑并高兴",
          'zh-TW': "安靜地微笑並高興",
          id: "Diam-diam tersenyum dan bahagia",
          vi: "Im lặng mỉm cười và vui vẻ"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "갑자기 계획이 취소되었을 때?",
      en: "When plans are suddenly cancelled?",
      ja: "突然計画がキャンセルされた時？",
      'zh-CN': "当计划突然被取消时？",
      'zh-TW': "當計劃突然被取消時？",
      id: "Ketika rencana tiba-tiba dibatalkan?",
      vi: "Khi kế hoạch đột nhiên bị hủy?"
    },
    options: [
      {
        text: {
          ko: "\"아 진짜?\" 실망하며 표현",
          en: "\"Oh really?\" Express disappointment",
          ja: "「あ、本当？」失望して表現する",
          'zh-CN': "「哦，真的吗？」表达失望",
          'zh-TW': "「哦，真的嗎？」表達失望",
          id: "「Oh benarkah?」 Mengekspresikan kekecewaan",
          vi: "「Ồ thật sao?」 Thể hiện sự thất vọng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"왜 취소됐지?\" 이유 파악",
          en: "\"Why was it cancelled?\" Find out the reason",
          ja: "「なぜキャンセルされたの？」理由を把握する",
          'zh-CN': "「为什么取消了？」了解原因",
          'zh-TW': "「為什麼取消了？」了解原因",
          id: "「Mengapa dibatalkan?」 Mencari tahu alasannya",
          vi: "「Tại sao bị hủy?」 Tìm hiểu lý do"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"그럼 다른 걸 하자\" 대안 제시",
          en: "\"Then let's do something else\" Suggest alternatives",
          ja: "「じゃあ他のことをしよう」代替案を提示する",
          'zh-CN': "「那我们做别的吧」提出替代方案",
          'zh-TW': "「那我們做別的吧」提出替代方案",
          id: "「Kalau begitu lakukan yang lain」 Menyarankan alternatif",
          vi: "「Vậy thì làm việc khác」 Đề xuất phương án thay thế"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"그래, 어쩔 수 없지\" 담담히 받아들임",
          en: "\"Well, nothing we can do\" Accept calmly",
          ja: "「そうだね、仕方ない」冷静に受け入れる",
          'zh-CN': "「好吧，没办法」冷静接受",
          'zh-TW': "「好吧，沒辦法」冷靜接受",
          id: "「Ya, tidak ada yang bisa dilakukan」 Menerima dengan tenang",
          vi: "「Ừ, không có cách nào」 Chấp nhận một cách bình tĩnh"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "누군가 당신을 비판했을 때?",
      en: "When someone criticizes you?",
      ja: "誰かがあなたを批判した時？",
      'zh-CN': "当有人批评你时？",
      'zh-TW': "當有人批評你時？",
      id: "Ketika seseorang mengkritik Anda?",
      vi: "Khi ai đó chỉ trích bạn?"
    },
    options: [
      {
        text: {
          ko: "화나거나 속상해함",
          en: "Get angry or upset",
          ja: "怒ったり落ち込んだりする",
          'zh-CN': "生气或难过",
          'zh-TW': "生氣或難過",
          id: "Marah atau sedih",
          vi: "Tức giận hoặc buồn bã"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"무슨 의미인지\" 정확히 분석",
          en: "\"What do you mean?\" Analyze precisely",
          ja: "「どういう意味？」正確に分析する",
          'zh-CN': "「什么意思？」准确分析",
          'zh-TW': "「什麼意思？」準確分析",
          id: "「Apa maksudnya?」 Menganalisis dengan tepat",
          vi: "「Ý nghĩa là gì?」 Phân tích chính xác"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"어떻게 개선할까\" 행동 계획",
          en: "\"How can I improve?\" Make action plan",
          ja: "「どう改善しようか」行動計画を立てる",
          'zh-CN': "「如何改进？」制定行动计划",
          'zh-TW': "「如何改進？」制定行動計劃",
          id: "「Bagaimana cara memperbaiki?」 Membuat rencana aksi",
          vi: "「Làm sao để cải thiện?」 Lập kế hoạch hành động"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "일단 침묵하고 생각함",
          en: "Stay silent and think first",
          ja: "とりあえず黙って考える",
          'zh-CN': "先保持沉默思考",
          'zh-TW': "先保持沉默思考",
          id: "Diam dulu dan berpikir",
          vi: "Tạm thời im lặng và suy nghĩ"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "예상 밖의 선물을 받았을 때?",
      en: "When you receive an unexpected gift?",
      ja: "予想外のプレゼントをもらった時？",
      'zh-CN': "当你收到意外礼物时？",
      'zh-TW': "當你收到意外禮物時？",
      id: "Ketika Anda menerima hadiah yang tidak terduga?",
      vi: "Khi bạn nhận được món quà bất ngờ?"
    },
    options: [
      {
        text: {
          ko: "\"와!\" 크게 기뻐하며 반응",
          en: "\"Wow!\" React with great joy",
          ja: "「わあ！」大きく喜んで反応する",
          'zh-CN': "「哇！」非常高兴地反应",
          'zh-TW': "「哇！」非常高興地反應",
          id: "「Wow!」 Bereaksi dengan kegembiraan besar",
          vi: "「Wow!」 Phản ứng với niềm vui lớn"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"왜 이걸 줬지?\" 궁금해함",
          en: "\"Why did you give me this?\" Wonder",
          ja: "「なぜこれをくれたの？」不思議に思う",
          'zh-CN': "「为什么给我这个？」好奇",
          'zh-TW': "「為什麼給我這個？」好奇",
          id: "「Mengapa memberikan ini?」 Bertanya-tanya",
          vi: "「Tại sao lại tặng cái này?」 Tò mò"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"정말 고마워\" 즉시 답례 계획",
          en: "\"Thank you so much\" Plan to reciprocate immediately",
          ja: "「本当にありがとう」すぐにお返しを計画する",
          'zh-CN': "「真的很感谢」立即计划回礼",
          'zh-TW': "「真的很感謝」立即計劃回禮",
          id: "「Terima kasih banyak」 Segera merencanakan balasan",
          vi: "「Cảm ơn rất nhiều」 Lập kế hoạch đáp lễ ngay"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "조용히 \"고마워\" 하고 미소",
          en: "Quietly say \"thank you\" and smile",
          ja: "静かに「ありがとう」と言って微笑む",
          'zh-CN': "安静地说「谢谢」并微笑",
          'zh-TW': "安靜地說「謝謝」並微笑",
          id: "Diam-diam mengatakan \"terima kasih\" dan tersenyum",
          vi: "Im lặng nói \"cảm ơn\" và mỉm cười"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구가 당신에게 화를 냈을 때?",
      en: "When a friend is angry with you?",
      ja: "友達があなたに怒った時？",
      'zh-CN': "当朋友对你生气时？",
      'zh-TW': "當朋友對你生氣時？",
      id: "Ketika teman marah kepada Anda?",
      vi: "Khi bạn bè tức giận với bạn?"
    },
    options: [
      {
        text: {
          ko: "당황하고 감정적으로 반응",
          en: "Get flustered and react emotionally",
          ja: "慌てて感情的になる",
          'zh-CN': "慌张并情绪化反应",
          'zh-TW': "慌張並情緒化反應",
          id: "Bingung dan bereaksi secara emosional",
          vi: "Bối rối và phản ứng một cách cảm xúc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"무엇 때문에?\" 이유 파악",
          en: "\"What's the reason?\" Find out why",
          ja: "「何のため？」理由を把握する",
          'zh-CN': "「为什么？」了解原因",
          'zh-TW': "「為什麼？」了解原因",
          id: "「Apa alasannya?」 Mencari tahu mengapa",
          vi: "「Tại sao?」 Tìm hiểu lý do"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"미안해\" 즉시 사과하고 해결",
          en: "\"Sorry\" Apologize immediately and resolve",
          ja: "「ごめん」すぐに謝って解決する",
          'zh-CN': "「对不起」立即道歉并解决",
          'zh-TW': "「對不起」立即道歉並解決",
          id: "「Maaf」 Segera minta maaf dan menyelesaikan",
          vi: "「Xin lỗi」 Ngay lập tức xin lỗi và giải quyết"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "일단 침착하게 상황 지켜봄",
          en: "Stay calm and observe the situation first",
          ja: "とりあえず冷静に状況を見守る",
          'zh-CN': "先冷静观察情况",
          'zh-TW': "先冷靜觀察情況",
          id: "Untuk sementara tetap tenang dan mengamati situasi",
          vi: "Tạm thời bình tĩnh và quan sát tình huống"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "중요한 시험 결과가 나왔을 때?",
      en: "When important exam results come out?",
      ja: "重要な試験結果が出た時？",
      'zh-CN': "当重要考试结果出来时？",
      'zh-TW': "當重要考試結果出來時？",
      id: "Ketika hasil ujian penting keluar?",
      vi: "Khi kết quả thi quan trọng ra?"
    },
    options: [
      {
        text: {
          ko: "감정이 즉시 얼굴에 드러남",
          en: "Emotions immediately show on face",
          ja: "感情がすぐに顔に現れる",
          'zh-CN': "情感立即在脸上显现",
          'zh-TW': "情感立即在臉上顯現",
          id: "Emosi langsung terlihat di wajah",
          vi: "Cảm xúc ngay lập tức hiện trên khuôn mặt"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "점수 분석하고 원인 파악",
          en: "Analyze scores and identify causes",
          ja: "点数を分析して原因を把握する",
          'zh-CN': "分析分数并找出原因",
          'zh-TW': "分析分數並找出原因",
          id: "Menganalisis skor dan mengidentifikasi penyebab",
          vi: "Phân tích điểm số và xác định nguyên nhân"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"다음엔 이렇게 하자\" 계획",
          en: "\"Let's do this next time\" Plan",
          ja: "「次はこうしよう」計画する",
          'zh-CN': "「下次这样做」计划",
          'zh-TW': "「下次這樣做」計劃",
          id: "「Lain kali lakukan seperti ini」 Merencanakan",
          vi: "「Lần sau làm như thế này」 Lập kế hoạch"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "조용히 받아들이고 생각 정리",
          en: "Quietly accept and organize thoughts",
          ja: "静かに受け入れて考えを整理する",
          'zh-CN': "安静接受并整理思绪",
          'zh-TW': "安靜接受並整理思緒",
          id: "Diam-diam menerima dan mengatur pikiran",
          vi: "Im lặng chấp nhận và sắp xếp suy nghĩ"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "갑작스러운 문제가 발생했을 때?",
      en: "When a sudden problem occurs?",
      ja: "突然問題が発生した時？",
      'zh-CN': "当突然发生问题时？",
      'zh-TW': "當突然發生問題時？",
      id: "Ketika masalah tiba-tiba terjadi?",
      vi: "Khi vấn đề đột ngột xảy ra?"
    },
    options: [
      {
        text: {
          ko: "\"어떡해!\" 당황하며 표현",
          en: "\"What to do!\" Express panic",
          ja: "「どうしよう！」慌てて表現する",
          'zh-CN': "「怎么办！」慌张表达",
          'zh-TW': "「怎麼辦！」慌張表達",
          id: "「Apa yang harus dilakukan!」 Mengekspresikan kepanikan",
          vi: "「Làm sao đây!」 Thể hiện sự hoảng loạn"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"원인이 뭐지?\" 분석 시작",
          en: "\"What's the cause?\" Start analyzing",
          ja: "「原因は何？」分析を始める",
          'zh-CN': "「原因是什么？」开始分析",
          'zh-TW': "「原因是什麼？」開始分析",
          id: "「Apa penyebabnya?」 Mulai menganalisis",
          vi: "「Nguyên nhân là gì?」 Bắt đầu phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "즉시 해결 방법 찾아 실행",
          en: "Immediately find and execute solution",
          ja: "すぐに解決方法を見つけて実行する",
          'zh-CN': "立即寻找并执行解决方法",
          'zh-TW': "立即尋找並執行解決方法",
          id: "Segera mencari dan mengeksekusi solusi",
          vi: "Ngay lập tức tìm và thực hiện giải pháp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "침착하게 상황 파악 후 대응",
          en: "Calmly assess situation then respond",
          ja: "冷静に状況を把握してから対応する",
          'zh-CN': "冷静评估情况后应对",
          'zh-TW': "冷靜評估情況後應對",
          id: "Dengan tenang menilai situasi lalu merespons",
          vi: "Bình tĩnh đánh giá tình huống rồi phản ứng"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "누군가 도움을 요청했을 때?",
      en: "When someone asks for help?",
      ja: "誰かが助けを求めた時？",
      'zh-CN': "当有人请求帮助时？",
      'zh-TW': "當有人請求幫助時？",
      id: "Ketika seseorang meminta bantuan?",
      vi: "Khi ai đó yêu cầu giúp đỡ?"
    },
    options: [
      {
        text: {
          ko: "\"힘들겠다\" 공감하며 반응",
          en: "\"That must be hard\" React with empathy",
          ja: "「大変だね」共感して反応する",
          'zh-CN': "「一定很辛苦」共情反应",
          'zh-TW': "「一定很辛苦」共情反應",
          id: "「Pasti sulit」 Bereaksi dengan empati",
          vi: "「Chắc là khó khăn」 Phản ứng với sự đồng cảm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"무슨 문제야?\" 상황 파악",
          en: "\"What's the problem?\" Understand the situation",
          ja: "「何の問題？」状況を把握する",
          'zh-CN': "「什么问题？」了解情况",
          'zh-TW': "「什麼問題？」了解情況",
          id: "「Masalah apa?」 Memahami situasi",
          vi: "「Vấn đề gì?」 Hiểu tình huống"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"내가 도와줄게\" 즉시 행동",
          en: "\"I'll help you\" Take immediate action",
          ja: "「私が手伝うよ」すぐに行動する",
          'zh-CN': "「我来帮你」立即行动",
          'zh-TW': "「我來幫你」立即行動",
          id: "「Saya akan membantu」 Segera bertindak",
          vi: "「Tôi sẽ giúp bạn」 Ngay lập tức hành động"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "조용히 듣고 생각해본 후 답변",
          en: "Listen quietly and think before responding",
          ja: "静かに聞いて考えてから答える",
          'zh-CN': "安静倾听思考后回答",
          'zh-TW': "安靜傾聽思考後回答",
          id: "Diam-diam mendengarkan dan berpikir sebelum menjawab",
          vi: "Im lặng lắng nghe và suy nghĩ trước khi trả lời"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "기대했던 일이 실패했을 때?",
      en: "When something you expected fails?",
      ja: "期待していたことが失敗した時？",
      'zh-CN': "当你期待的事情失败时？",
      'zh-TW': "當你期待的事情失敗時？",
      id: "Ketika sesuatu yang Anda harapkan gagal?",
      vi: "Khi điều bạn mong đợi thất bại?"
    },
    options: [
      {
        text: {
          ko: "실망하고 슬퍼하며 표현",
          en: "Express disappointment and sadness",
          ja: "失望して悲しんで表現する",
          'zh-CN': "表达失望和悲伤",
          'zh-TW': "表達失望和悲傷",
          id: "Mengekspresikan kekecewaan dan kesedihan",
          vi: "Thể hiện sự thất vọng và buồn bã"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"왜 실패했을까\" 분석",
          en: "\"Why did it fail?\" Analyze",
          ja: "「なぜ失敗したのか」分析する",
          'zh-CN': "「为什么失败了？」分析",
          'zh-TW': "「為什麼失敗了？」分析",
          id: "「Mengapa gagal?」 Menganalisis",
          vi: "「Tại sao thất bại?」 Phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"다시 도전하자\" 재시도",
          en: "\"Let's try again\" Retry",
          ja: "「また挑戦しよう」再挑戦する",
          'zh-CN': "「再试一次」重试",
          'zh-TW': "「再試一次」重試",
          id: "「Mari coba lagi」 Mencoba lagi",
          vi: "「Hãy thử lại」 Thử lại"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "담담히 받아들이고 정리",
          en: "Calmly accept and organize",
          ja: "淡々と受け入れて整理する",
          'zh-CN': "平静接受并整理",
          'zh-TW': "平靜接受並整理",
          id: "Dengan tenang menerima dan mengatur",
          vi: "Bình tĩnh chấp nhận và sắp xếp"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "갑자기 좋은 기회가 왔을 때?",
      en: "When a sudden good opportunity comes?",
      ja: "突然良い機会が来た時？",
      'zh-CN': "当突然出现好机会时？",
      'zh-TW': "當突然出現好機會時？",
      id: "Ketika kesempatan baik tiba-tiba datang?",
      vi: "Khi cơ hội tốt đột nhiên đến?"
    },
    options: [
      {
        text: {
          ko: "\"진짜?\" 흥분하며 기뻐함",
          en: "\"Really?\" Get excited and happy",
          ja: "「本当？」興奮して喜ぶ",
          'zh-CN': "「真的吗？」兴奋高兴",
          'zh-TW': "「真的嗎？」興奮高興",
          id: "「Benarkah?」 Bersemangat dan bahagia",
          vi: "「Thật sao?」 Hào hứng và vui vẻ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"조건이 어떻게?\" 꼼꼼히 확인",
          en: "\"What are the conditions?\" Check carefully",
          ja: "「条件はどう？」詳しく確認する",
          'zh-CN': "「条件如何？」仔细确认",
          'zh-TW': "「條件如何？」仔細確認",
          id: "「Bagaimana syaratnya?」 Memeriksa dengan teliti",
          vi: "「Điều kiện như thế nào?」 Kiểm tra cẩn thận"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"할게요!\" 즉시 결정하고 시작",
          en: "\"I'll do it!\" Decide immediately and start",
          ja: "「やります！」すぐに決めて始める",
          'zh-CN': "「我来做！」立即决定并开始",
          'zh-TW': "「我來做！」立即決定並開始",
          id: "「Saya akan lakukan!」 Segera memutuskan dan memulai",
          vi: "「Tôi sẽ làm!」 Ngay lập tức quyết định và bắt đầu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "신중하게 고민해보고 결정",
          en: "Carefully consider and decide",
          ja: "慎重に考えてから決める",
          'zh-CN': "谨慎考虑后决定",
          'zh-TW': "謹慎考慮後決定",
          id: "Dengan hati-hati mempertimbangkan dan memutuskan",
          vi: "Cẩn thận suy nghĩ rồi quyết định"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "예상치 못한 변화가 생겼을 때?",
      en: "When an unexpected change occurs?",
      ja: "予想外の変化が生じた時？",
      'zh-CN': "当发生意外变化时？",
      'zh-TW': "當發生意外變化時？",
      id: "Ketika perubahan tak terduga terjadi?",
      vi: "Khi có sự thay đổi bất ngờ xảy ra?"
    },
    options: [
      {
        text: {
          ko: "불안하거나 두려워함",
          en: "Feel anxious or fearful",
          ja: "不安になったり恐れたりする",
          'zh-CN': "感到不安或害怕",
          'zh-TW': "感到不安或害怕",
          id: "Merasa cemas atau takut",
          vi: "Cảm thấy lo lắng hoặc sợ hãi"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"어떤 변화인지\" 정확히 파악",
          en: "\"What kind of change?\" Understand precisely",
          ja: "「どんな変化？」正確に把握する",
          'zh-CN': "「什么样的变化？」准确了解",
          'zh-TW': "「什麼樣的變化？」準確了解",
          id: "「Perubahan seperti apa?」 Memahami dengan tepat",
          vi: "「Thay đổi như thế nào?」 Hiểu chính xác"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "빠르게 적응하고 행동",
          en: "Quickly adapt and act",
          ja: "素早く適応して行動する",
          'zh-CN': "快速适应并行动",
          'zh-TW': "快速適應並行動",
          id: "Dengan cepat beradaptasi dan bertindak",
          vi: "Nhanh chóng thích nghi và hành động"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "침착하게 관찰하며 대응",
          en: "Calmly observe and respond",
          ja: "冷静に観察して対応する",
          'zh-CN': "冷静观察并应对",
          'zh-TW': "冷靜觀察並應對",
          id: "Dengan tenang mengamati dan merespons",
          vi: "Bình tĩnh quan sát và phản ứng"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 일반적인 반응 스타일은?",
      en: "What is your general reaction style?",
      ja: "あなたの一般的な反応スタイルは？",
      'zh-CN': "你的一般反应风格是什么？",
      'zh-TW': "你的一般反應風格是什麼？",
      id: "Apa gaya reaksi umum Anda?",
      vi: "Phong cách phản ứng chung của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "감정이 즉각적으로 드러남",
          en: "Emotions appear immediately",
          ja: "感情が即座に現れる",
          'zh-CN': "情感立即显现",
          'zh-TW': "情感立即顯現",
          id: "Emosi langsung muncul",
          vi: "Cảm xúc ngay lập tức xuất hiện"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "논리적으로 생각하고 분석함",
          en: "Think logically and analyze",
          ja: "論理的に考えて分析する",
          'zh-CN': "逻辑思考和分析",
          'zh-TW': "邏輯思考和分析",
          id: "Berpikir logis dan menganalisis",
          vi: "Suy nghĩ logic và phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "빠르게 행동하고 실행함",
          en: "Act quickly and execute",
          ja: "素早く行動して実行する",
          'zh-CN': "快速行动和执行",
          'zh-TW': "快速行動和執行",
          id: "Bertindak cepat dan mengeksekusi",
          vi: "Hành động nhanh chóng và thực hiện"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "침착하고 신중하게 대응함",
          en: "Respond calmly and carefully",
          ja: "冷静で慎重に対応する",
          'zh-CN': "冷静谨慎地应对",
          'zh-TW': "冷靜謹慎地應對",
          id: "Merespons dengan tenang dan hati-hati",
          vi: "Phản ứng một cách bình tĩnh và cẩn thận"
        },
        scores: { Type4: 3 }
      }
    ]
  }
];

export const reactionStyleResults: ReactionStyleResult[] = [
  {
    type: "Type2",
    emoji: "🧠",
    title: {
      ko: "이성 분석형",
      en: "Rational Analyzer",
      ja: "理性分析型",
      'zh-CN': "理性分析型",
      'zh-TW': "理性分析型",
      id: "Analis Rasional",
      vi: "Người Phân Tích Lý Trí"
    },
    description: {
      ko: "생각이 먼저! 논리적으로 분석하는 이성파",
      en: "Think first! Rational analyzer",
      ja: "考えが先！論理的に分析する理性派",
      'zh-CN': "思考先行！理性分析派",
      'zh-TW': "思考先行！理性分析派",
      id: "Pikir dulu! Analis rasional",
      vi: "Suy nghĩ trước! Người phân tích lý trí"
    },
    characteristics: {
      ko: "감정보다 이성이 먼저 작동하는 타입입니다. 상황을 분석하고, 원인을 파악하며, 논리적으로 생각합니다. 즉각적인 반응보다는 생각한 후 대응하며, 감정보다 사실에 집중합니다. 냉정하고 객관적이지만, 때로는 감정 표현이 필요할 수 있습니다. 문제 해결 능력이 뛰어납니다.",
      en: "A type where reason works before emotions. Analyzes situations, identifies causes, and thinks logically. Responds after thinking rather than reacting immediately, focusing on facts rather than emotions. Cool and objective, but sometimes emotional expression may be needed. Has excellent problem-solving abilities.",
      ja: "感情より理性が先に働くタイプです。状況を分析し、原因を把握し、論理的に考えます。即座の反応より考えた後に対応し、感情より事実に集中します。冷静で客観的ですが、時には感情表現が必要かもしれません。問題解決能力が優れています。",
      'zh-CN': "理性先于情感的类型。分析情况，找出原因，逻辑思考。先思考后应对，而非立即反应，关注事实而非情感。冷静客观，但有时可能需要情感表达。具有出色的解决问题的能力。",
      'zh-TW': "理性先於情感的類型。分析情況，找出原因，邏輯思考。先思考後應對，而非立即反應，關注事實而非情感。冷靜客觀，但有時可能需要情感表達。具有出色的解決問題的能力。",
      id: "Tipe di mana akal bekerja sebelum emosi. Menganalisis situasi, mengidentifikasi penyebab, dan berpikir logis. Merespons setelah berpikir daripada bereaksi langsung, fokus pada fakta daripada emosi. Dingin dan objektif, tetapi kadang-kadang ekspresi emosional mungkin diperlukan. Memiliki kemampuan pemecahan masalah yang luar biasa.",
      vi: "Kiểu người mà lý trí hoạt động trước cảm xúc. Phân tích tình huống, xác định nguyên nhân, và suy nghĩ logic. Phản ứng sau khi suy nghĩ thay vì phản ứng ngay lập tức, tập trung vào sự thật thay vì cảm xúc. Lạnh lùng và khách quan, nhưng đôi khi có thể cần thể hiện cảm xúc. Có khả năng giải quyết vấn đề xuất sắc."
    },
    strengths: {
      ko: ["냉정함", "객관성", "문제 해결", "합리성"],
      en: ["Coolness", "Objectivity", "Problem solving", "Rationality"],
      ja: ["冷静さ", "客観性", "問題解決", "合理性"],
      'zh-CN': ["冷静", "客观性", "问题解决", "合理性"],
      'zh-TW': ["冷靜", "客觀性", "問題解決", "合理性"],
      id: ["Ketenangan", "Objektivitas", "Pemecahan masalah", "Rasionalitas"],
      vi: ["Sự bình tĩnh", "Tính khách quan", "Giải quyết vấn đề", "Tính hợp lý"]
    },
    weaknesses: {
      ko: ["냉정해 보임", "감정 부족", "공감 어려움"],
      en: ["Appears cold", "Lack of emotion", "Difficulty empathizing"],
      ja: ["冷たく見える", "感情不足", "共感困難"],
      'zh-CN': ["显得冷漠", "缺乏情感", "难以共情"],
      'zh-TW': ["顯得冷漠", "缺乏情感", "難以共情"],
      id: ["Terlihat dingin", "Kurang emosi", "Sulit berempati"],
      vi: ["Trông lạnh lùng", "Thiếu cảm xúc", "Khó đồng cảm"]
    },
    advice: {
      ko: "분석도 좋지만 때로는 감정적 반응도 필요해요. 공감을 표현해보세요.",
      en: "Analysis is good, but sometimes emotional responses are needed too. Try expressing empathy.",
      ja: "分析も良いですが、時には感情的な反応も必要です。共感を表現してみてください。",
      'zh-CN': "分析很好，但有时也需要情感反应。试着表达共情。",
      'zh-TW': "分析很好，但有時也需要情感反應。試著表達共情。",
      id: "Analisis itu baik, tetapi kadang-kadang respons emosional juga diperlukan. Coba ekspresikan empati.",
      vi: "Phân tích là tốt, nhưng đôi khi cũng cần phản ứng cảm xúc. Hãy thử thể hiện sự đồng cảm."
    },
    reactionFeatures: {
      ko: "분석적, 논리적, 객관적, 신중, 이성적",
      en: "Analytical, logical, objective, careful, rational",
      ja: "分析的、論理的、客観的、慎重、理性的",
      'zh-CN': "分析性、逻辑性、客观性、谨慎、理性",
      'zh-TW': "分析性、邏輯性、客觀性、謹慎、理性",
      id: "Analitis, logis, objektif, hati-hati, rasional",
      vi: "Phân tích, logic, khách quan, cẩn thận, lý trí"
    }
  },
  {
    type: "Type1",
    emoji: "💥",
    title: {
      ko: "감정 표출형",
      en: "Emotional Expresser",
      ja: "感情表出型",
      'zh-CN': "情感表达型",
      'zh-TW': "情感表達型",
      id: "Pengekspresi Emosional",
      vi: "Người Thể Hiện Cảm Xúc"
    },
    description: {
      ko: "감정이 즉각적으로 드러나는 타입입니다. 기쁘면 기쁜 대로, 슬프면 슬픈 대로 솔직하게 표현합니다. 감정을 억누르지 않고 자연스럽게 드러내며, 표정과 목소리에 감정이 그대로 나타납니다. 진솔하고 인간적이지만, 때로는 감정 조절이 필요할 수 있습니다. 공감 능력이 뛰어나고 따뜻합니다.",
      en: "A type where emotions appear immediately. Expresses joy as joy, sadness as sadness honestly. Doesn't suppress emotions and reveals them naturally, with emotions showing directly in facial expressions and voice. Genuine and human, but sometimes emotional control may be needed. Has excellent empathy and warmth.",
      ja: "感情が即座に現れるタイプです。嬉しい時は嬉しいまま、悲しい時は悲しいまま正直に表現します。感情を抑えずに自然に表し、表情と声に感情がそのまま現れます。真摯で人間的ですが、時には感情のコントロールが必要かもしれません。共感能力が優れており、温かいです。",
      'zh-CN': "情感立即显现的类型。高兴时就是高兴，悲伤时就是悲伤，诚实表达。不压抑情感，自然流露，表情和声音中直接体现情感。真诚且人性化，但有时可能需要情感控制。具有出色的共情能力和温暖。",
      'zh-TW': "情感立即顯現的類型。高興時就是高興，悲傷時就是悲傷，誠實表達。不壓抑情感，自然流露，表情和聲音中直接體現情感。真誠且人性化，但有時可能需要情感控制。具有出色的共情能力和溫暖。",
      id: "Tipe di mana emosi muncul segera. Mengekspresikan kegembiraan sebagai kegembiraan, kesedihan sebagai kesedihan dengan jujur. Tidak menekan emosi dan mengungkapkannya secara alami, dengan emosi muncul langsung dalam ekspresi wajah dan suara. Tulus dan manusiawi, tetapi kadang-kadang kontrol emosional mungkin diperlukan. Memiliki empati yang luar biasa dan kehangatan.",
      vi: "Kiểu người mà cảm xúc xuất hiện ngay lập tức. Thể hiện niềm vui như niềm vui, nỗi buồn như nỗi buồn một cách thành thật. Không kìm nén cảm xúc và bộc lộ chúng một cách tự nhiên, với cảm xúc hiện trực tiếp trên nét mặt và giọng nói. Chân thành và có tính người, nhưng đôi khi có thể cần kiểm soát cảm xúc. Có khả năng đồng cảm xuất sắc và sự ấm áp."
    },
    characteristics: {
      ko: "즉각적, 감정적, 표현적, 솔직, 진솔",
      en: "Immediate, emotional, expressive, honest, genuine",
      ja: "即座、感情的、表現的、正直、真摯",
      'zh-CN': "即时、情感化、表达性、诚实、真诚",
      'zh-TW': "即時、情感化、表達性、誠實、真誠",
      id: "Langsung, emosional, ekspresif, jujur, tulus",
      vi: "Tức thì, cảm xúc, biểu cảm, thành thật, chân thành"
    },
    strengths: {
      ko: ["진실함", "공감 능력", "솔직함", "인간미"],
      en: ["Truthfulness", "Empathy ability", "Honesty", "Humanity"],
      ja: ["真実性", "共感能力", "正直さ", "人間性"],
      'zh-CN': ["真实性", "共情能力", "诚实", "人性"],
      'zh-TW': ["真實性", "共情能力", "誠實", "人性"],
      id: ["Kebenaran", "Kemampuan empati", "Kejujuran", "Kemanusiaan"],
      vi: ["Tính chân thật", "Khả năng đồng cảm", "Sự thành thật", "Tính người"]
    },
    weaknesses: {
      ko: ["충동적", "감정 기복", "오해 가능"],
      en: ["Impulsive", "Emotional fluctuations", "Potential misunderstandings"],
      ja: ["衝動的", "感情の起伏", "誤解の可能性"],
      'zh-CN': ["冲动", "情绪波动", "可能误解"],
      'zh-TW': ["衝動", "情緒波動", "可能誤解"],
      id: ["Impulsif", "Fluktuasi emosional", "Potensi kesalahpahaman"],
      vi: ["Bốc đồng", "Dao động cảm xúc", "Có thể hiểu lầm"]
    },
    advice: {
      ko: "감정 표현은 좋지만 중요한 순간에는 한 번 더 생각해보세요.",
      en: "Emotional expression is good, but think twice in important moments.",
      ja: "感情表現は良いですが、重要な瞬間にはもう一度考えてみてください。",
      'zh-CN': "情感表达很好，但在重要时刻要三思。",
      'zh-TW': "情感表達很好，但在重要時刻要三思。",
      id: "Ekspresi emosional itu baik, tetapi pikirkan dua kali pada momen penting.",
      vi: "Thể hiện cảm xúc là tốt, nhưng hãy suy nghĩ kỹ trong những khoảnh khắc quan trọng."
    },
    reactionFeatures: {
      ko: "즉각적, 감정적, 표현적, 솔직, 진솔",
      en: "Immediate, emotional, expressive, honest, genuine",
      ja: "即座、感情的、表現的、正直、真摯",
      'zh-CN': "即时、情感化、表达性、诚实、真诚",
      'zh-TW': "即時、情感化、表達性、誠實、真誠",
      id: "Langsung, emosional, ekspresif, jujur, tulus",
      vi: "Tức thì, cảm xúc, biểu cảm, thành thật, chân thành"
    }
  },
  {
    type: "Type3",
    emoji: "⚡",
    title: {
      ko: "행동 실천형",
      en: "Action Practitioner",
      ja: "行動実践型",
      'zh-CN': "行动实践型",
      'zh-TW': "行動實踐型",
      id: "Praktisi Aksi",
      vi: "Người Thực Hành Hành Động"
    },
    description: {
      ko: "행동이 먼저! 즉시 실행하는 실천파",
      en: "Action first! Immediate practitioner",
      ja: "行動が先！即座に実行する実践派",
      'zh-CN': "行动先行！立即实践派",
      'zh-TW': "行動先行！立即實踐派",
      id: "Aksi dulu! Praktisi langsung",
      vi: "Hành động trước! Người thực hành ngay lập tức"
    },
    characteristics: {
      ko: "생각이나 감정보다 행동이 먼저인 타입입니다. 문제가 생기면 즉시 해결책을 찾아 실행하고, 기회가 오면 빠르게 결단합니다. 실행력이 뛰어나고 추진력이 강하며, 말보다 행동으로 보여줍니다. 역동적이고 효율적이지만, 때로는 신중함이 필요할 수 있습니다.",
      en: "A type where action comes before thoughts or emotions. When problems arise, immediately finds solutions and executes them, and when opportunities come, makes quick decisions. Has excellent execution power and strong drive, showing through actions rather than words. Dynamic and efficient, but sometimes caution may be needed.",
      ja: "思考や感情より行動が先のタイプです。問題が生じるとすぐに解決策を見つけて実行し、機会が来ると素早く決断します。実行力が優れており推進力が強く、言葉より行動で示します。動的で効率的ですが、時には慎重さが必要かもしれません。",
      'zh-CN': "行动先于思考或情感的类型。问题出现时立即寻找解决方案并执行，机会来临时快速决断。执行力出色，推动力强，通过行动而非言语展现。动态高效，但有时可能需要谨慎。",
      'zh-TW': "行動先於思考或情感的類型。問題出現時立即尋找解決方案並執行，機會來臨時快速決斷。執行力出色，推動力強，通過行動而非言語展現。動態高效，但有時可能需要謹慎。",
      id: "Tipe di mana aksi datang sebelum pikiran atau emosi. Ketika masalah muncul, segera menemukan solusi dan mengeksekusinya, dan ketika kesempatan datang, membuat keputusan cepat. Memiliki kekuatan eksekusi yang luar biasa dan dorongan yang kuat, menunjukkan melalui aksi daripada kata-kata. Dinamis dan efisien, tetapi kadang-kadang kehati-hatian mungkin diperlukan.",
      vi: "Kiểu người mà hành động đến trước suy nghĩ hoặc cảm xúc. Khi vấn đề xảy ra, ngay lập tức tìm giải pháp và thực hiện, khi cơ hội đến thì quyết định nhanh chóng. Có khả năng thực hiện xuất sắc và động lực mạnh mẽ, thể hiện qua hành động thay vì lời nói. Năng động và hiệu quả, nhưng đôi khi có thể cần sự cẩn thận."
    },
    strengths: {
      ko: ["실행력", "결단력", "효율성", "추진력"],
      en: ["Execution power", "Decisiveness", "Efficiency", "Driving force"],
      ja: ["実行力", "決断力", "効率性", "推進力"],
      'zh-CN': ["执行力", "决断力", "效率", "推动力"],
      'zh-TW': ["執行力", "決斷力", "效率", "推動力"],
      id: ["Kekuatan eksekusi", "Ketegasan", "Efisiensi", "Kekuatan pendorong"],
      vi: ["Khả năng thực hiện", "Quyết đoán", "Hiệu quả", "Động lực"]
    },
    weaknesses: {
      ko: ["성급함", "실수 가능", "섬세함 부족"],
      en: ["Hastiness", "Possibility of mistakes", "Lack of delicacy"],
      ja: ["性急さ", "ミスの可能性", "繊細さの不足"],
      'zh-CN': ["急躁", "可能出错", "缺乏细致"],
      'zh-TW': ["急躁", "可能出錯", "缺乏細緻"],
      id: ["Ketergesaan", "Kemungkinan kesalahan", "Kurang kehalusan"],
      vi: ["Vội vàng", "Có thể mắc lỗi", "Thiếu sự tinh tế"]
    },
    advice: {
      ko: "행동력은 좋지만 중요한 결정은 한 번 더 생각해보세요.",
      en: "Action power is good, but think twice about important decisions.",
      ja: "行動力は良いですが、重要な決定はもう一度考えてみてください。",
      'zh-CN': "行动力很好，但重要决定要三思。",
      'zh-TW': "行動力很好，但重要決定要三思。",
      id: "Kekuatan aksi itu baik, tetapi pikirkan dua kali tentang keputusan penting.",
      vi: "Khả năng hành động tốt, nhưng hãy suy nghĩ kỹ về những quyết định quan trọng."
    },
    reactionFeatures: {
      ko: "즉각적, 행동적, 실천적, 효율적, 추진력",
      en: "Immediate, action-oriented, practical, efficient, driving force",
      ja: "即座、行動的、実践的、効率的、推進力",
      'zh-CN': "即时、行动导向、实践性、高效、推动力",
      'zh-TW': "即時、行動導向、實踐性、高效、推動力",
      id: "Langsung, berorientasi aksi, praktis, efisien, kekuatan pendorong",
      vi: "Tức thì, định hướng hành động, thực tế, hiệu quả, động lực"
    }
  },
  {
    type: "Type4",
    emoji: "🌙",
    title: {
      ko: "관찰 침착형",
      en: "Calm Observer",
      ja: "観察冷静型",
      'zh-CN': "观察冷静型",
      'zh-TW': "觀察冷靜型",
      id: "Pengamat Tenang",
      vi: "Người Quan Sát Bình Tĩnh"
    },
    description: {
      ko: "침착이 먼저! 신중하게 대응하는 관찰파",
      en: "Calm first! Careful observer",
      ja: "冷静が先！慎重に対応する観察派",
      'zh-CN': "冷静先行！谨慎观察派",
      'zh-TW': "冷靜先行！謹慎觀察派",
      id: "Tenang dulu! Pengamat hati-hati",
      vi: "Bình tĩnh trước! Người quan sát cẩn thận"
    },
    characteristics: {
      ko: "어떤 상황에서도 침착함을 유지하는 타입입니다. 즉각적으로 반응하지 않고, 상황을 관찰하고 생각한 후 대응합니다. 감정을 잘 드러내지 않고 차분하게 행동하며, 안정적이고 신뢰감을 줍니다. 신중하고 현명하지만, 때로는 적극성이 필요할 수 있습니다.",
      en: "A type that maintains calmness in any situation. Doesn't react immediately, observes the situation and responds after thinking. Doesn't reveal emotions well and acts calmly, providing stability and trust. Careful and wise, but sometimes proactivity may be needed.",
      ja: "どんな状況でも冷静さを保つタイプです。即座に反応せず、状況を観察して考えてから対応します。感情をあまり表に出さずに落ち着いて行動し、安定感と信頼感を与えます。慎重で賢明ですが、時には積極性が必要かもしれません。",
      'zh-CN': "在任何情况下都保持冷静的类型。不立即反应，观察情况后思考再应对。不轻易表露情感，冷静行动，提供稳定感和信任感。谨慎明智，但有时可能需要积极性。",
      'zh-TW': "在任何情況下都保持冷靜的類型。不立即反應，觀察情況後思考再應對。不輕易表露情感，冷靜行動，提供穩定感和信任感。謹慎明智，但有時可能需要積極性。",
      id: "Tipe yang mempertahankan ketenangan dalam situasi apa pun. Tidak bereaksi langsung, mengamati situasi dan merespons setelah berpikir. Tidak mengungkapkan emosi dengan baik dan bertindak dengan tenang, memberikan stabilitas dan kepercayaan. Hati-hati dan bijaksana, tetapi kadang-kadang proaktivitas mungkin diperlukan.",
      vi: "Kiểu người duy trì sự bình tĩnh trong mọi tình huống. Không phản ứng ngay lập tức, quan sát tình huống và phản ứng sau khi suy nghĩ. Không dễ dàng bộc lộ cảm xúc và hành động một cách bình tĩnh, mang lại cảm giác ổn định và tin cậy. Cẩn thận và khôn ngoan, nhưng đôi khi có thể cần tính tích cực."
    },
    strengths: {
      ko: ["안정감", "신뢰감", "현명함", "실수 적음"],
      en: ["Sense of stability", "Trust", "Wisdom", "Few mistakes"],
      ja: ["安定感", "信頼感", "賢明さ", "ミスが少ない"],
      'zh-CN': ["稳定感", "信任感", "智慧", "错误少"],
      'zh-TW': ["穩定感", "信任感", "智慧", "錯誤少"],
      id: ["Rasa stabilitas", "Kepercayaan", "Kebijaksanaan", "Sedikit kesalahan"],
      vi: ["Cảm giác ổn định", "Tin cậy", "Khôn ngoan", "Ít lỗi"]
    },
    weaknesses: {
      ko: ["소극적", "느림", "기회 놓침"],
      en: ["Passive", "Slow", "Missing opportunities"],
      ja: ["消極的", "遅い", "機会を逃す"],
      'zh-CN': ["消极", "缓慢", "错失机会"],
      'zh-TW': ["消極", "緩慢", "錯失機會"],
      id: ["Pasif", "Lambat", "Melewatkan kesempatan"],
      vi: ["Thụ động", "Chậm chạp", "Bỏ lỡ cơ hội"]
    },
    advice: {
      ko: "침착함도 좋지만 때로는 빠른 결단도 필요해요. 적극성을 키워보세요.",
      en: "Calmness is good, but sometimes quick decisions are also needed. Try developing proactivity.",
      ja: "冷静さも良いですが、時には素早い決断も必要です。積極性を育ててみてください。",
      'zh-CN': "冷静很好，但有时也需要快速决断。尝试培养积极性。",
      'zh-TW': "冷靜很好，但有時也需要快速決斷。嘗試培養積極性。",
      id: "Ketenangan itu baik, tetapi kadang-kadang keputusan cepat juga diperlukan. Coba kembangkan proaktivitas.",
      vi: "Sự bình tĩnh cũng tốt, nhưng đôi khi cũng cần quyết định nhanh chóng. Hãy thử phát triển tính tích cực."
    },
    reactionFeatures: {
      ko: "침착함, 신중함, 관찰, 안정적, 차분함",
      en: "Calmness, carefulness, observation, stability, composure",
      ja: "冷静さ、慎重さ、観察、安定性、落ち着き",
      'zh-CN': "冷静、谨慎、观察、稳定性、沉着",
      'zh-TW': "冷靜、謹慎、觀察、穩定性、沉著",
      id: "Ketenangan, kehati-hatian, observasi, stabilitas, ketenangan",
      vi: "Bình tĩnh, cẩn thận, quan sát, ổn định, điềm tĩnh"
    }
  }
];

export function calculateReactionStyleResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
    
    lastThreeAnswers.forEach(answer => {
      Object.keys(answer).forEach(type => {
        if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
          lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
        }
      });
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
