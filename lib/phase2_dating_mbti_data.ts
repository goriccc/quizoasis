export interface Phase2DatingMbtiQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1
  }[];
}

export interface Phase2DatingMbtiResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  datingStyle: Record<string, string>; // 연애 스타일
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2DatingMbtiQuestions: Phase2DatingMbtiQuestion[] = [
  {
    id: 1,
    question: {
      ko: "마음에 드는 이성을 발견했을 때 당신은?",
      en: "When you find someone you like?",
      ja: "気になる異性を見つけたとき、あなたは？",
      'zh-CN': "当你找到喜欢的人时，你会？",
      'zh-TW': "當你找到喜歡的人時，你會？",
      vi: "Khi bạn tìm thấy người bạn thích?",
      id: "Ketika Anda menemukan seseorang yang Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "일단 지켜본다. 상대가 다가오거나 확신이 설 때까지 기다린다",
          en: "I wait and observe. I wait until they approach me or I'm sure",
          ja: "まず様子を見る。相手が近づいてくるか、確信が持てるまで待つ",
          'zh-CN': "先观察。等待对方靠近或等到有把握",
          'zh-TW': "先觀察。等待對方靠近或等到有把握",
          vi: "Tôi chờ đợi và quan sát. Tôi đợi cho đến khi họ tiếp cận tôi hoặc tôi chắc chắn",
          id: "Saya menunggu dan mengamati. Saya menunggu sampai mereka mendekati saya atau saya yakin"
        },
        score: 0 // A (이성적/방어적)
      },
      {
        text: {
          ko: "기회를 엿본다. 주변을 맴돌거나 먼저 말을 걸어 존재감을 알린다",
          en: "I look for opportunities. I hover around or make the first move to show my presence",
          ja: "チャンスをうかがう。周りをうろついたり、先に話しかけて存在感を示す",
          'zh-CN': "寻找机会。在周围徘徊或先开口显示存在感",
          'zh-TW': "尋找機會。在周圍徘徊或先開口顯示存在感",
          vi: "Tôi tìm cơ hội. Tôi xung quanh hoặc chủ động bắt chuyện để thể hiện sự hiện diện",
          id: "Saya mencari peluang. Saya mengitari atau membuat langkah pertama untuk menunjukkan kehadiran saya"
        },
        score: 1 // B (감성적/개방적)
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "소개팅 전날, 당신의 머릿속은?",
      en: "The day before a blind date, what's on your mind?",
      ja: "お見合いの前日、あなたの頭の中は？",
      'zh-CN': "相亲前一天，你脑子里想什么？",
      'zh-TW': "相親前一天，你腦子裡想什麼？",
      vi: "Ngày trước buổi hẹn hò, bạn nghĩ gì?",
      id: "Sehari sebelum kencan buta, apa yang ada di pikiran Anda?"
    },
    options: [
      {
        text: {
          ko: "\"어색하면 어떡하지? 무슨 말을 해야 하지?\" 걱정과 시뮬레이션 가동",
          en: "\"What if it's awkward? What should I say?\" Worries and simulations running",
          ja: "「気まずくなったらどうしよう？何を話せばいい？」心配とシミュレーション開始",
          'zh-CN': "\"如果尴尬怎么办？该说什么？\"担心和模拟开始",
          'zh-TW': "「如果尷尬怎麼辦？該說什麼？」擔心和模擬開始",
          vi: "\"Nếu khó xử thì sao? Mình nên nói gì?\" Lo lắng và mô phỏng trong đầu",
          id: "\"Bagaimana jika canggung? Apa yang harus saya katakan?\" Kekhawatiran dan simulasi berjalan"
        },
        score: 0
      },
      {
        text: {
          ko: "\"어떤 사람일까? 재밌겠다!\" 새로운 만남에 대한 설렘과 기대",
          en: "\"What kind of person will they be? This will be fun!\" Excitement and anticipation for the new meeting",
          ja: "「どんな人かな？楽しそう！」新しい出会いへのときめきと期待",
          'zh-CN': "\"会是什么样的人？应该很有趣！\"对新见面的兴奋和期待",
          'zh-TW': "「會是什麼樣的人？應該很有趣！」對新見面的興奮和期待",
          vi: "\"Họ sẽ là người như thế nào nhỉ? Sẽ vui đấy!\" Hồi hộp và mong đợi cuộc gặp mới",
          id: "\"Seperti apa orangnya ya? Sepertinya menyenangkan!\" Kegembiraan dan antisipasi untuk pertemuan baru"
        },
        score: 1
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "썸 타는 상대가 \"나 오늘 우울해\"라고 톡을 보냈다.",
      en: "Someone you're dating sends a message saying \"I'm depressed today.\"",
      ja: "付き合っている相手が「今日落ち込んでる」とメッセージを送ってきた。",
      'zh-CN': "正在暧昧的对象发来消息说\"我今天心情不好\"。",
      'zh-TW': "正在曖昧的對象發來消息說「我今天心情不好」。",
      vi: "Người bạn đang hẹn hò gửi tin nhắn nói \"Hôm nay mình buồn.\"",
      id: "Seseorang yang Anda kencani mengirim pesan mengatakan \"Saya sedih hari ini.\""
    },
    options: [
      {
        text: {
          ko: "\"왜 우울해? 무슨 일 있었어?\" 이유를 묻고 해결해주려 한다",
          en: "\"Why are you depressed? What happened?\" I ask the reason and try to help solve it",
          ja: "「どうして落ち込んでるの？何があったの？」理由を聞いて解決しようとする",
          'zh-CN': "\"为什么心情不好？发生什么事了？\"询问原因并试图解决",
          'zh-TW': "「為什麼心情不好？發生什麼事了？」詢問原因並試圖解決",
          vi: "\"Sao lại buồn? Có chuyện gì xảy ra?\" Tôi hỏi lý do và cố gắng giúp giải quyết",
          id: "\"Kenapa depresi? Apa yang terjadi?\" Saya menanyakan alasannya dan mencoba membantu menyelesaikannya"
        },
        score: 0
      },
      {
        text: {
          ko: "\"저런 ㅠㅠ 맛있는 거 사줄까? 전화할래?\" 기분을 풀어주려 한다",
          en: "\"Oh no :( Should I buy you something delicious? Want to call?\" I try to cheer them up",
          ja: "「あら...美味しいもの買ってあげようか？電話する？」気分を良くしようとする",
          'zh-CN': "\"哎呀 :( 我给你买点好吃的？要打电话吗？\"试图让他们心情好起来",
          'zh-TW': "「哎呀 :( 我給你買點好吃的？要打電話嗎？」試圖讓他們心情好起來",
          vi: "\"Ồ không :( Mình mua đồ ngon cho bạn nhé? Muốn gọi điện không?\" Tôi cố gắng làm họ vui lên",
          id: "\"Wah :( Mau saya belikan makanan enak? Mau telepon?\" Saya mencoba menghibur mereka"
        },
        score: 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "연인과 다툴 때 당신의 모습은?",
      en: "What are you like when you fight with your partner?",
      ja: "恋人と喧嘩するとき、あなたの様子は？",
      'zh-CN': "和恋人争吵时，你是什么样子？",
      'zh-TW': "和戀人爭吵時，你是什麼樣子？",
      vi: "Bạn như thế nào khi cãi nhau với người yêu?",
      id: "Bagaimana Anda saat bertengkar dengan pasangan?"
    },
    options: [
      {
        text: {
          ko: "감정적인 말싸움은 딱 질색. 논리적으로 잘잘못을 따진다",
          en: "I absolutely hate emotional arguments. I logically analyze what's right and wrong",
          ja: "感情的ないさかいは大嫌い。論理的に是非を問いただす",
          'zh-CN': "我绝对讨厌情绪化的争吵。我会逻辑地分析对错",
          'zh-TW': "我絕對討厭情緒化的爭吵。我會邏輯地分析對錯",
          vi: "Tôi hoàn toàn ghét tranh cãi cảm xúc. Tôi phân tích đúng sai một cách logic",
          id: "Saya sangat benci argumen emosional. Saya secara logis menganalisis benar dan salah"
        },
        score: 0
      },
      {
        text: {
          ko: "서운한 감정이 북받쳐서 눈물부터 나거나 말이 꼬인다",
          en: "Hurt feelings well up, so I tear up first or my words get tangled",
          ja: "悔しい感情が込み上げて、まず涙が出るか言葉がうまく出ない",
          'zh-CN': "委屈的情绪涌上来，先流泪或话说不清楚",
          'zh-TW': "委屈的情緒湧上來，先流淚或話說不清楚",
          vi: "Cảm xúc tổn thương dâng trào, nước mắt chảy trước hoặc lời nói lộn xộn",
          id: "Perasaan terluka memuncak, jadi saya menangis terlebih dahulu atau kata-kata saya kusut"
        },
        score: 1
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "데이트 장소를 정할 때 선호하는 방식은?",
      en: "How do you prefer to decide on a date location?",
      ja: "デート場所を決めるとき、好みの方法は？",
      'zh-CN': "决定约会地点时，你偏好什么方式？",
      'zh-TW': "決定約會地點時，你偏好什麼方式？",
      vi: "Bạn thích cách nào khi quyết định địa điểm hẹn hò?",
      id: "Bagaimana Anda lebih suka memutuskan lokasi kencan?"
    },
    options: [
      {
        text: {
          ko: "맛집, 카페, 동선, 예약까지 완벽하게 짜여진 코스",
          en: "A perfectly planned course: restaurants, cafes, route, even reservations",
          ja: "美味しい店、カフェ、動線、予約まで完璧に組まれたコース",
          'zh-CN': "完美安排的行程：餐厅、咖啡厅、路线，甚至预订",
          'zh-TW': "完美安排的行程：餐廳、咖啡廳、路線，甚至預訂",
          vi: "Một lộ trình được lập kế hoạch hoàn hảo: nhà hàng, quán cà phê, tuyến đường, thậm chí cả đặt chỗ",
          id: "Kursus yang direncanakan dengan sempurna: restoran, kafe, rute, bahkan reservasi"
        },
        score: 0
      },
      {
        text: {
          ko: "\"여기 좋아 보이는데?\" 걷다가 필 꽂히는 곳으로 들어가는 즉흥 코스",
          en: "\"This place looks nice?\" An impromptu course: walking and entering wherever catches my interest",
          ja: "「ここ良さそう？」歩きながら気になったところに入る即興コース",
          'zh-CN': "\"这地方看起来不错？\"即兴行程：边走边进入感兴趣的地方",
          'zh-TW': "「這地方看起來不錯？」即興行程：邊走邊進入感興趣的地方",
          vi: "\"Chỗ này trông đẹp nhỉ?\" Một lộ trình tức thì: đi bộ và vào bất cứ nơi nào thu hút",
          id: "\"Tempat ini terlihat bagus?\" Kursus dadakan: berjalan dan masuk ke mana pun yang menarik minat saya"
        },
        score: 1
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연인에게 선물을 준다면?",
      en: "If you give a gift to your partner?",
      ja: "恋人にプレゼントをあげるとしたら？",
      'zh-CN': "如果给恋人送礼物？",
      'zh-TW': "如果給戀人送禮物？",
      vi: "Nếu bạn tặng quà cho người yêu?",
      id: "Jika Anda memberi hadiah kepada pasangan?"
    },
    options: [
      {
        text: {
          ko: "상대방에게 지금 가장 필요하고 실용적인 물건",
          en: "Something they need most right now and is practical",
          ja: "相手に今最も必要で実用的なもの",
          'zh-CN': "对方现在最需要且实用的东西",
          'zh-TW': "對方現在最需要且實用的東西",
          vi: "Thứ gì đó họ cần nhất ngay bây giờ và thực dụng",
          id: "Sesuatu yang paling mereka butuhkan saat ini dan praktis"
        },
        score: 0
      },
      {
        text: {
          ko: "꽃다발, 손편지, 커플 아이템 등 낭만적이고 의미 있는 물건",
          en: "Romantic and meaningful things like bouquets, handwritten letters, couple items",
          ja: "花束、手紙、カップルアイテムなどロマンチックで意味のあるもの",
          'zh-CN': "浪漫且有意义的物品，如花束、手写信、情侣物品",
          'zh-TW': "浪漫且有意義的物品，如花束、手寫信、情侶物品",
          vi: "Những thứ lãng mạn và có ý nghĩa như bó hoa, thư viết tay, đồ đôi",
          id: "Hal-hal romantis dan bermakna seperti karangan bunga, surat tulisan tangan, item pasangan"
        },
        score: 1
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "연인이 약속 시간에 늦었을 때?",
      en: "When your partner is late for the appointment?",
      ja: "恋人が約束の時間に遅れたとき？",
      'zh-CN': "当恋人约会迟到时？",
      'zh-TW': "當戀人約會遲到時？",
      vi: "Khi người yêu đến muộn cuộc hẹn?",
      id: "Ketika pasangan Anda terlambat untuk janji?"
    },
    options: [
      {
        text: {
          ko: "\"지금 어디야? 몇 분 도착이야?\" 늦는 이유와 도착 시간을 체크한다",
          en: "\"Where are you now? How many minutes until you arrive?\" I check the reason for being late and arrival time",
          ja: "「今どこ？何分で着く？」遅れている理由と到着時間を確認する",
          'zh-CN': "\"你现在在哪？几分钟到？\"检查迟到原因和到达时间",
          'zh-TW': "「你現在在哪？幾分鐘到？」檢查遲到原因和到達時間",
          vi: "\"Bây giờ bạn ở đâu? Bao nhiêu phút nữa đến?\" Tôi kiểm tra lý do đến muộn và thời gian đến",
          id: "\"Di mana kamu sekarang? Berapa menit sampai tiba?\" Saya mengecek alasan keterlambatan dan waktu kedatangan"
        },
        score: 0
      },
      {
        text: {
          ko: "\"오다가 무슨 일 생겼나?\" 걱정부터 되거나, 늦는 김에 나도 천천히 준비한다",
          en: "\"Did something happen on the way?\" I worry first, or since they're late, I prepare slowly too",
          ja: "「途中で何かあったの？」心配から始まるか、遅れるついでに私もゆっくり準備する",
          'zh-CN': "\"路上发生什么事了吗？\"先担心，或者既然他们迟到了，我也慢慢准备",
          'zh-TW': "「路上發生什麼事了嗎？」先擔心，或者既然他們遲到了，我也慢慢準備",
          vi: "\"Trên đường có chuyện gì xảy ra không?\" Tôi lo lắng trước, hoặc vì họ đến muộn nên tôi cũng chuẩn bị từ từ",
          id: "\"Ada sesuatu yang terjadi di jalan?\" Saya khawatir dulu, atau karena mereka terlambat, saya juga bersiap perlahan"
        },
        score: 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "\"우리 헤어져\" 이별 통보를 받았을 때?",
      en: "When you receive a breakup notice \"Let's break up\"?",
      ja: "「別れよう」という別れの通告を受けたとき？",
      'zh-CN': "当你收到\"我们分手吧\"的分手通知时？",
      'zh-TW': "當你收到「我們分手吧」的分手通知時？",
      vi: "Khi bạn nhận được thông báo chia tay \"Chúng ta chia tay nhé\"?",
      id: "Ketika Anda menerima pemberitahuan putus \"Kita putus\"?"
    },
    options: [
      {
        text: {
          ko: "납득할 만한 이유를 묻고, 정리가 되면 쿨하게 받아들인다",
          en: "I ask for a reasonable reason, and when things are sorted out, I accept it coolly",
          ja: "納得できる理由を尋ね、整理がついたらクールに受け入れる",
          'zh-CN': "询问合理的理由，整理清楚后冷静接受",
          'zh-TW': "詢問合理的理由，整理清楚後冷靜接受",
          vi: "Tôi hỏi lý do hợp lý, và khi mọi thứ được giải quyết, tôi chấp nhận một cách bình tĩnh",
          id: "Saya meminta alasan yang masuk akal, dan ketika semuanya sudah jelas, saya menerimanya dengan tenang"
        },
        score: 0
      },
      {
        text: {
          ko: "\"내가 잘할게, 다시 생각해 봐.\" 매달리거나 식음을 전폐하고 앓아눕는다",
          en: "\"I'll do better, think again.\" I cling on or stop eating and lie in bed sick",
          ja: "「僕がちゃんとするから、もう一度考えて。」しがみつくか、食事をやめて寝込む",
          'zh-CN': "\"我会做得更好，再想想。\"我纠缠不放或停止进食，卧床不起",
          'zh-TW': "「我會做得更好，再想想。」我糾纏不放或停止進食，臥床不起",
          vi: "\"Mình sẽ làm tốt hơn, suy nghĩ lại nhé.\" Tôi níu kéo hoặc bỏ ăn và nằm liệt giường",
          id: "\"Saya akan lebih baik, pikirkan lagi.\" Saya bergantung atau berhenti makan dan berbaring sakit"
        },
        score: 1
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "평소 꿈꾸는 연애의 로망은?",
      en: "What is your usual romantic ideal for love?",
      ja: "普段夢見る恋愛のロマンスは？",
      'zh-CN': "你平时梦想的恋爱浪漫是什么？",
      'zh-TW': "你平時夢想的戀愛浪漫是什麼？",
      vi: "Lý tưởng lãng mạn trong tình yêu mà bạn thường mơ ước là gì?",
      id: "Apa ideal romantis dalam cinta yang biasa Anda impikan?"
    },
    options: [
      {
        text: {
          ko: "서로의 성장을 돕고 안정적인 미래를 함께하는 성숙한 연애",
          en: "A mature relationship that helps each other grow and builds a stable future together",
          ja: "お互いの成長を助け、安定した未来を共にする成熟した恋愛",
          'zh-CN': "帮助彼此成长并共同建立稳定未来的成熟恋爱",
          'zh-TW': "幫助彼此成長並共同建立穩定未來的成熟戀愛",
          vi: "Một mối quan hệ trưởng thành giúp nhau phát triển và xây dựng tương lai ổn định cùng nhau",
          id: "Hubungan yang matang yang saling membantu tumbuh dan membangun masa depan yang stabil bersama"
        },
        score: 0
      },
      {
        text: {
          ko: "영화 속 주인공처럼 불같이 뜨겁고 드라마틱한 운명적인 연애",
          en: "A dramatic, fateful love that's hot as fire, like movie protagonists",
          ja: "映画の主人公のように炎のように熱くてドラマチックな運命的な恋愛",
          'zh-CN': "像电影主人公一样火热、戏剧化、命中注定的恋爱",
          'zh-TW': "像電影主人公一樣火熱、戲劇化、命中註定的戀愛",
          vi: "Một tình yêu định mệnh nóng bỏng như lửa và đầy kịch tính, như những nhân vật chính trong phim",
          id: "Cinta yang dramatis dan takdir yang panas seperti api, seperti protagonis film"
        },
        score: 1
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구가 연애 상담을 요청하면?",
      en: "When a friend asks for dating advice?",
      ja: "友達が恋愛相談を求めてきたら？",
      'zh-CN': "当朋友寻求恋爱建议时？",
      'zh-TW': "當朋友尋求戀愛建議時？",
      vi: "Khi bạn bè yêu cầu tư vấn về tình yêu?",
      id: "Ketika teman meminta nasihat kencan?"
    },
    options: [
      {
        text: {
          ko: "\"걔는 좀 아닌 것 같아. 헤어져.\" 객관적인 팩트로 조언한다",
          en: "\"That person doesn't seem right. Break up.\" I advise with objective facts",
          ja: "「あの人ちょっと違うと思う。別れなよ。」客観的な事実でアドバイスする",
          'zh-CN': "\"那个人好像不太合适。分手吧。\"我用客观事实给出建议",
          'zh-TW': "「那個人好像不太合適。分手吧。」我用客觀事實給出建議",
          vi: "\"Người đó có vẻ không phù hợp. Chia tay đi.\" Tôi đưa ra lời khuyên dựa trên sự thật khách quan",
          id: "\"Orang itu sepertinya tidak tepat. Putus saja.\" Saya menasihati dengan fakta objektif"
        },
        score: 0
      },
      {
        text: {
          ko: "\"헐 진짜? 쓰레기네!\" 같이 욕해주고 편들어준다",
          en: "\"OMG really? What trash!\" I curse together and take their side",
          ja: "「えー本当？クソみたい！」一緒に悪口を言って味方になる",
          'zh-CN': "\"天哪真的吗？太垃圾了！\"一起骂人并站在他们一边",
          'zh-TW': "「天哪真的嗎？太垃圾了！」一起罵人並站在他們一邊",
          vi: "\"Ồ thật không? Đồ rác rưởi!\" Tôi cùng chửi rủa và đứng về phía họ",
          id: "\"Wah benar? Sampah!\" Saya ikut mencaci dan berpihak pada mereka"
        },
        score: 1
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "다음 중 당신에게 더 힘든 상황은?",
      en: "Which is harder for you among the following?",
      ja: "次のうち、あなたにとってより辛い状況は？",
      'zh-CN': "以下哪种情况对你来说更困难？",
      'zh-TW': "以下哪種情況對你來說更困難？",
      vi: "Tình huống nào khó hơn đối với bạn trong số sau?",
      id: "Mana yang lebih sulit bagi Anda di antara berikut ini?"
    },
    options: [
      {
        text: {
          ko: "계획했던 데이트 일정이 다 틀어지고 꼬이는 것",
          en: "The planned date schedule all falls apart and gets messed up",
          ja: "計画していたデートの予定が全部崩れてこじれること",
          'zh-CN': "计划好的约会行程全部被打乱和搞砸",
          'zh-TW': "計劃好的約會行程全部被打亂和搞砸",
          vi: "Lịch trình hẹn hò đã lên kế hoạch đều bị đảo lộn và rối tung",
          id: "Jadwal kencan yang direncanakan semua berantakan dan kacau"
        },
        score: 0
      },
      {
        text: {
          ko: "연인이 나에게 무관심하거나 애정 표현이 줄어드는 것",
          en: "My partner being indifferent to me or showing less affection",
          ja: "恋人が私に無関心だったり、愛情表現が減ること",
          'zh-CN': "恋人对我漠不关心或感情表达减少",
          'zh-TW': "戀人對我漠不關心或感情表達減少",
          vi: "Người yêu thờ ơ với tôi hoặc thể hiện tình cảm ít hơn",
          id: "Pasangan saya acuh tak acuh terhadap saya atau menunjukkan kasih sayang lebih sedikit"
        },
        score: 1
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "결혼에 대한 당신의 생각은?",
      en: "What are your thoughts on marriage?",
      ja: "結婚に対するあなたの考えは？",
      'zh-CN': "你对婚姻的看法是？",
      'zh-TW': "你對婚姻的看法是？",
      vi: "Bạn nghĩ gì về hôn nhân?",
      id: "Apa pendapat Anda tentang pernikahan?"
    },
    options: [
      {
        text: {
          ko: "경제력, 가치관, 집안 등 현실적인 조건이 맞아야 한다",
          en: "Realistic conditions like financial status, values, family background must match",
          ja: "経済力、価値観、家柄など現実的な条件が合う必要がある",
          'zh-CN': "经济能力、价值观、家庭背景等现实条件必须匹配",
          'zh-TW': "經濟能力、價值觀、家庭背景等現實條件必須匹配",
          vi: "Các điều kiện thực tế như tài chính, giá trị quan, gia đình phải phù hợp",
          id: "Kondisi realistis seperti status keuangan, nilai-nilai, latar belakang keluarga harus cocok"
        },
        score: 0
      },
      {
        text: {
          ko: "사랑과 믿음만 있다면 어떤 어려움도 극복할 수 있다",
          en: "If there's love and trust, we can overcome any difficulty",
          ja: "愛と信頼があれば、どんな困難も乗り越えられる",
          'zh-CN': "只要有爱和信任，我们就能克服任何困难",
          'zh-TW': "只要有愛和信任，我們就能克服任何困難",
          vi: "Nếu có tình yêu và niềm tin, chúng ta có thể vượt qua mọi khó khăn",
          id: "Jika ada cinta dan kepercayaan, kita bisa mengatasi kesulitan apa pun"
        },
        score: 1
      }
    ]
  }
];

export const phase2DatingMbtiResults: Phase2DatingMbtiResult[] = [
  {
    type: "Type1",
    emoji: "🏰",
    title: {
      ko: "난공불락 철벽, 연애 독존자 (ISTJ / INTJ 재질)",
      en: "Impregnable Fortress, Dating Lone Wolf (ISTJ / INTJ type)",
      ja: "難攻不落の鉄壁、恋愛独尊者（ISTJ / INTJタイプ）",
      'zh-CN': "坚不可摧的铁壁，恋爱独尊（ISTJ / INTJ 类型）",
      'zh-TW': "堅不可摧的鐵壁，戀愛獨尊（ISTJ / INTJ 類型）",
      vi: "Thành trì bất khả xâm phạm, kẻ độc tôn trong tình yêu (kiểu ISTJ / INTJ)",
      id: "Benteng Tak Tertembus, Penguasa Dating (tipe ISTJ / INTJ)"
    },
    shortDescription: {
      ko: "\"연애? 굳이 해야 하나요? 혼자가 편한데.\"",
      en: "\"Dating? Do I really have to? I'm comfortable alone.\"",
      ja: "「恋愛？無理にしなきゃいけないの？一人の方が楽だし。」",
      'zh-CN': "\"恋爱？真的有必要吗？一个人更舒服。\"",
      'zh-TW': "「戀愛？真的有必要嗎？一個人更舒服。」",
      vi: "\"Hẹn hò? Mình có thực sự cần không? Một mình thoải mái hơn.\"",
      id: "\"Kencan? Haruskah saya? Saya nyaman sendiri.\""
    },
    description: {
      ko: "당신은 기준이 매우 높고 자기만의 세계가 확고한 사람입니다. 감정 소모하는 것을 싫어하며, 비효율적인 연애보다는 나의 성공이나 취미가 더 중요합니다. 웬만해선 틈을 주지 않는 철벽 때문에 썸이 시작되기도 전에 끝나는 경우가 많습니다. 하지만 한번 검증된 사람에게는 의외의 순정파가 됩니다.",
      en: "You have very high standards and a firmly established world of your own. You hate wasting emotions, and your success or hobbies are more important than inefficient dating. Your impregnable fortress rarely gives openings, so relationships often end before they even begin. But once someone passes your verification, you become an unexpectedly devoted romantic.",
      ja: "あなたは基準が非常に高く、自分だけの世界がしっかりしている人です。感情の消耗を嫌い、非効率な恋愛よりも自分の成功や趣味の方が重要です。大抵の場合、隙を与えない鉄壁のせいで関係が始まる前に終わることが多いです。しかし一度検証された人には意外な純情派になります。",
      'zh-CN': "你的标准很高，拥有自己坚定的世界。你讨厌消耗情感，比起低效的恋爱，你的成功或爱好更重要。由于几乎不给机会的铜墙铁壁，关系往往在开始前就结束了。但一旦有人通过了你的验证，你会变成意外的纯情派。",
      'zh-TW': "你的標準很高，擁有自己堅定的世界。你討厭消耗情感，比起低效的戀愛，你的成功或愛好更重要。由於幾乎不給機會的銅牆鐵壁，關係往往在開始前就結束了。但一旦有人通過了你的驗證，你會變成意外的純情派。",
      vi: "Bạn có tiêu chuẩn rất cao và một thế giới riêng vững chắc. Bạn ghét lãng phí cảm xúc, và thành công hoặc sở thích của bạn quan trọng hơn việc hẹn hò không hiệu quả. Thành trì bất khả xâm phạm của bạn hiếm khi tạo ra cơ hội, nên các mối quan hệ thường kết thúc trước khi bắt đầu. Nhưng một khi ai đó vượt qua sự xác minh của bạn, bạn trở thành một người lãng mạn bất ngờ.",
      id: "Anda memiliki standar yang sangat tinggi dan dunia Anda sendiri yang mapan. Anda benci membuang emosi, dan kesuksesan atau hobi Anda lebih penting daripada kencan yang tidak efisien. Benteng Anda yang tak tertembus jarang memberikan celah, jadi hubungan sering berakhir sebelum dimulai. Tapi begitu seseorang lolos verifikasi Anda, Anda menjadi romantis yang tidak terduga."
    },
    datingStyle: {
      ko: "신중함, 분석적, 철벽, 츤데레",
      en: "Cautious, Analytical, Fortress, Tsundere",
      ja: "慎重、分析的、鉄壁、ツンデレ",
      'zh-CN': "谨慎、分析型、铁壁、傲娇",
      'zh-TW': "謹慎、分析型、鐵壁、傲嬌",
      vi: "Thận trọng, Phân tích, Thành trì, Tsundere",
      id: "Hati-hati, Analitis, Benteng, Tsundere"
    },
    characteristics: {
      ko: "신중함, 분석적, 철벽, 츤데레",
      en: "Cautious, Analytical, Fortress, Tsundere",
      ja: "慎重、分析的、鉄壁、ツンデレ",
      'zh-CN': "谨慎、分析型、铁壁、傲娇",
      'zh-TW': "謹慎、分析型、鐵壁、傲嬌",
      vi: "Thận trọng, Phân tích, Thành trì, Tsundere",
      id: "Hati-hati, Analitis, Benteng, Tsundere"
    },
    goodMatch: {
      ko: "Type 6 (직진하는 불도저)",
      en: "Type 6 (Straightforward Bulldozer)",
      ja: "Type 6（一直線のブルドーザー）",
      'zh-CN': "Type 6（直进的推土机）",
      'zh-TW': "Type 6（直進的推土機）",
      vi: "Type 6 (Máy ủi thẳng tiến)",
      id: "Type 6 (Bulldozer Langsung)"
    },
    badMatch: {
      ko: "Type 4 (감성적인 몽상가)",
      en: "Type 4 (Emotional Dreamer)",
      ja: "Type 4（感情的な夢想家）",
      'zh-CN': "Type 4（感性的梦想家）",
      'zh-TW': "Type 4（感性的夢想家）",
      vi: "Type 4 (Kẻ mơ mộng cảm tính)",
      id: "Type 4 (Pemimpi Emosional)"
    }
  },
  {
    type: "Type2",
    emoji: "📝",
    title: {
      ko: "깐깐한 분석가, 썸 파괴자 (ESTJ / ENTJ 재질)",
      en: "Strict Analyst, Relationship Destroyer (ESTJ / ENTJ type)",
      ja: "厳しい分析家、恋愛破壊者（ESTJ / ENTJタイプ）",
      'zh-CN': "严格的分析家，关系破坏者（ESTJ / ENTJ 类型）",
      'zh-TW': "嚴格的分析家，關係破壞者（ESTJ / ENTJ 類型）",
      vi: "Nhà phân tích khắt khe, Kẻ phá hủy mối quan hệ (kiểu ESTJ / ENTJ)",
      id: "Analis Ketat, Penghancur Hubungan (tipe ESTJ / ENTJ)"
    },
    shortDescription: {
      ko: "\"조건, 성격, 미래... 합격하면 사귈게.\"",
      en: "\"Conditions, personality, future... If they pass, I'll date them.\"",
      ja: "「条件、性格、未来...合格したら付き合う。」",
      'zh-CN': "\"条件、性格、未来...如果通过，就交往。\"",
      'zh-TW': "「條件、性格、未來...如果通過，就交往。」",
      vi: "\"Điều kiện, tính cách, tương lai... Nếu đạt, mình sẽ hẹn hò.\"",
      id: "\"Kondisi, kepribadian, masa depan... Jika mereka lulus, saya akan berkencan dengan mereka.\""
    },
    description: {
      ko: "당신은 연애도 비즈니스처럼 합니다. 상대방을 파악하고 분석하는 데 도가 텄으며, 내 기준에 부합하지 않으면 가차 없이 정리합니다. 리드하는 것을 좋아하고 밀당을 싫어합니다. 팩트 폭격으로 연인에게 상처를 줄 수 있지만, 책임감 하나는 끝내주는 스타일입니다.",
      en: "You treat dating like business. You're skilled at understanding and analyzing your partner, and if they don't meet your standards, you cut them off mercilessly. You like to lead and hate push-pull games. You might hurt your partner with fact-bombing, but your sense of responsibility is outstanding.",
      ja: "あなたは恋愛もビジネスのようにします。相手を把握し分析するのが上手で、自分の基準に合わなければ容赦なく整理します。リードするのが好きで、押し引きを嫌います。ファクト爆撃で恋人を傷つけるかもしれませんが、責任感だけは最高です。",
      'zh-CN': "你把恋爱当作生意。你善于理解和分析伴侣，如果他们不符合你的标准，你会毫不留情地断掉。你喜欢主导，讨厌推拉游戏。你可能会用事实轰炸伤害伴侣，但你的责任感是一流的。",
      'zh-TW': "你把戀愛當作生意。你善於理解和分析伴侶，如果他們不符合你的標準，你會毫不留情地斷掉。你喜歡主導，討厭推拉遊戲。你可能會用事實轟炸傷害伴侶，但你的責任感是一流的。",
      vi: "Bạn coi hẹn hò như kinh doanh. Bạn giỏi nắm bắt và phân tích đối tác, và nếu họ không đáp ứng tiêu chuẩn của bạn, bạn cắt đứt không thương tiếc. Bạn thích dẫn dắt và ghét trò đẩy kéo. Bạn có thể làm tổn thương người yêu bằng cách nói thẳng sự thật, nhưng tinh thần trách nhiệm của bạn là xuất sắc.",
      id: "Anda memperlakukan kencan seperti bisnis. Anda terampil dalam memahami dan menganalisis pasangan, dan jika mereka tidak memenuhi standar Anda, Anda memutuskan tanpa ampun. Anda suka memimpin dan membenci permainan push-pull. Anda mungkin menyakiti pasangan dengan fact-bombing, tetapi rasa tanggung jawab Anda luar biasa."
    },
    datingStyle: {
      ko: "리더십, 현실적, 직설적, 책임감",
      en: "Leadership, Realistic, Direct, Responsible",
      ja: "リーダーシップ、現実的、率直、責任感",
      'zh-CN': "领导力、现实、直接、负责",
      'zh-TW': "領導力、現實、直接、負責",
      vi: "Khả năng lãnh đạo, Thực tế, Thẳng thắn, Trách nhiệm",
      id: "Kepemimpinan, Realistis, Langsung, Bertanggung Jawab"
    },
    characteristics: {
      ko: "리더십, 현실적, 직설적, 책임감",
      en: "Leadership, Realistic, Direct, Responsible",
      ja: "リーダーシップ、現実的、率直、責任感",
      'zh-CN': "领导力、现实、直接、负责",
      'zh-TW': "領導力、現實、直接、負責",
      vi: "Khả năng lãnh đạo, Thực tế, Thẳng thắn, Trách nhiệm",
      id: "Kepemimpinan, Realistis, Langsung, Bertanggung Jawab"
    },
    goodMatch: {
      ko: "Type 5 (유연한 둥글이)",
      en: "Type 5 (Flexible Easygoing)",
      ja: "Type 5（柔軟な丸い人）",
      'zh-CN': "Type 5（灵活的圆滑者）",
      'zh-TW': "Type 5（靈活的圓滑者）",
      vi: "Type 5 (Người dễ tính linh hoạt)",
      id: "Type 5 (Mudah Bergaul Fleksibel)"
    },
    badMatch: {
      ko: "Type 3 (서운함 많은 찡찡이)",
      en: "Type 3 (Oversensitive Worrier)",
      ja: "Type 3（不機嫌な多い人）",
      'zh-CN': "Type 3（过于敏感的爱担心者）",
      'zh-TW': "Type 3（過於敏感的愛擔心者）",
      vi: "Type 3 (Người dễ tổn thương, hay lo lắng)",
      id: "Type 3 (Pengkhawatir yang Terlalu Sensitif)"
    }
  },
  {
    type: "Type3",
    emoji: "😿",
    title: {
      ko: "상처받은 영혼, 짝사랑 전문가 (ISFP / INFP 재질)",
      en: "Wounded Soul, Unrequited Love Expert (ISFP / INFP type)",
      ja: "傷ついた魂、片思い専門家（ISFP / INFPタイプ）",
      'zh-CN': "受伤的灵魂，单恋专家（ISFP / INFP 类型）",
      'zh-TW': "受傷的靈魂，單戀專家（ISFP / INFP 類型）",
      vi: "Linh hồn tổn thương, Chuyên gia yêu đơn phương (kiểu ISFP / INFP)",
      id: "Jiwa Terluka, Ahli Cinta Bertepuk Sebelah Tangan (tipe ISFP / INFP)"
    },
    shortDescription: {
      ko: "\"혼자 좋아하고, 혼자 상처받고, 혼자 끝내고...\"",
      en: "\"I like them alone, get hurt alone, end it alone...\"",
      ja: "「一人で好きになって、一人で傷ついて、一人で終わらせて...」",
      'zh-CN': "\"独自喜欢，独自受伤，独自结束...\"",
      'zh-TW': "「獨自喜歡，獨自受傷，獨自結束...」",
      vi: "\"Một mình thích, một mình đau khổ, một mình kết thúc...\"",
      id: "\"Sendiri suka, sendiri terluka, sendiri mengakhiri...\""
    },
    description: {
      ko: "당신은 감수성이 풍부하고 마음이 여린 사람입니다. 상대방의 사소한 행동에도 큰 의미를 부여하며 혼자 천국과 지옥을 오갑니다. 거절당할까 봐 고백도 못 하고 속앓이만 하다가 끝나는 경우가 많습니다. 배려심이 깊어 연인에게 모든 걸 맞춰주는 착한 사람입니다.",
      en: "You're a person with rich sensitivity and a tender heart. You attach great meaning to even the smallest actions of your partner and go through heaven and hell alone. You often can't confess for fear of rejection and end up just suffering internally. You're a kind person who deeply cares and adapts everything for your partner.",
      ja: "あなたは感受性が豊かで心が優しい人です。相手の些細な行動にも大きな意味を持たせ、一人で天国と地獄を行き来します。拒絶されることを恐れて告白もできず、一人で悩んで終わることが多いです。思いやりが深く、恋人にすべてを合わせてあげる優しい人です。",
      'zh-CN': "你是一个敏感丰富、心地柔软的人。你会给伴侣的微小行为赋予很大意义，独自在天堂和地狱之间徘徊。因为害怕被拒绝而不敢表白，经常只是内心痛苦就结束了。你是一个深深关心并会为伴侣调整一切的善良的人。",
      'zh-TW': "你是一個敏感豐富、心地柔軟的人。你會給伴侶的微小行為賦予很大意義，獨自在天堂和地獄之間徘徊。因為害怕被拒絕而不敢表白，經常只是內心痛苦就結束了。你是一個深深關心並會為伴侶調整一切的善良的人。",
      vi: "Bạn là người nhạy cảm phong phú và có trái tim mềm yếu. Bạn gán ý nghĩa lớn cho cả những hành động nhỏ nhất của đối tác và tự mình trải qua thiên đường và địa ngục. Bạn thường không thể thổ lộ vì sợ bị từ chối và chỉ đau khổ trong lòng. Bạn là người tốt bụng, quan tâm sâu sắc và điều chỉnh mọi thứ cho đối tác.",
      id: "Anda adalah orang dengan kepekaan yang kaya dan hati yang lembut. Anda memberikan makna besar bahkan pada tindakan terkecil pasangan Anda dan pergi melalui surga dan neraka sendirian. Anda sering tidak bisa mengakui karena takut ditolak dan berakhir hanya menderita secara internal. Anda adalah orang baik yang sangat peduli dan menyesuaikan segalanya untuk pasangan Anda."
    },
    datingStyle: {
      ko: "섬세함, 짝사랑, 배려, 회피형",
      en: "Sensitive, Unrequited Love, Caring, Avoidant",
      ja: "繊細、片思い、思いやり、回避型",
      'zh-CN': "细腻、单恋、体贴、回避型",
      'zh-TW': "細膩、單戀、體貼、迴避型",
      vi: "Tinh tế, Yêu đơn phương, Quan tâm, Tránh né",
      id: "Sensitif, Cinta Bertepuk Sebelah Tangan, Peduli, Menghindar"
    },
    characteristics: {
      ko: "섬세함, 짝사랑, 배려, 회피형",
      en: "Sensitive, Unrequited Love, Caring, Avoidant",
      ja: "繊細、片思い、思いやり、回避型",
      'zh-CN': "细腻、单恋、体贴、回避型",
      'zh-TW': "細膩、單戀、體貼、迴避型",
      vi: "Tinh tế, Yêu đơn phương, Quan tâm, Tránh né",
      id: "Sensitif, Cinta Bertepuk Sebelah Tangan, Peduli, Menghindar"
    },
    goodMatch: {
      ko: "Type 2 (확실하게 리드하는 사람)",
      en: "Type 2 (Someone who leads clearly)",
      ja: "Type 2（確実にリードする人）",
      'zh-CN': "Type 2（明确主导的人）",
      'zh-TW': "Type 2（明確主導的人）",
      vi: "Type 2 (Người dẫn dắt rõ ràng)",
      id: "Type 2 (Seseorang yang memimpin dengan jelas)"
    },
    badMatch: {
      ko: "Type 1 (반응 없는 로봇)",
      en: "Type 1 (Unresponsive Robot)",
      ja: "Type 1（反応のないロボット）",
      'zh-CN': "Type 1（无反应的机器人）",
      'zh-TW': "Type 1（無反應的機器人）",
      vi: "Type 1 (Robot không phản hồi)",
      id: "Type 1 (Robot Tidak Responsif)"
    }
  },
  {
    type: "Type4",
    emoji: "🦄",
    title: {
      ko: "로맨스에 죽고 사는, 운명론자 (ENFP / INFJ 재질)",
      en: "Lives and Dies for Romance, Fatalist (ENFP / INFJ type)",
      ja: "ロマンスに生き死にする、運命論者（ENFP / INFJタイプ）",
      'zh-CN': "为浪漫而生而死，宿命论者（ENFP / INFJ 类型）",
      'zh-TW': "為浪漫而生而死，宿命論者（ENFP / INFJ 類型）",
      vi: "Sống chết vì lãng mạn, Người tin vào định mệnh (kiểu ENFP / INFJ)",
      id: "Hidup Mati untuk Romantis, Fatalis (tipe ENFP / INFJ)"
    },
    shortDescription: {
      ko: "\"이 느낌은... 운명이야! 우리는 데스티니!\"",
      en: "\"This feeling... it's fate! We're destiny!\"",
      ja: "「この感覚...運命だ！私たちはデスティニー！」",
      'zh-CN': "\"这种感觉...是命运！我们是命中注定！\"",
      'zh-TW': "「這種感覺...是命運！我們是命中註定！」",
      vi: "\"Cảm giác này... là định mệnh! Chúng ta là số phận!\"",
      id: "\"Perasaan ini... ini takdir! Kita adalah takdir!\""
    },
    description: {
      ko: "당신은 금방 사랑에 빠지는 '금사빠' 기질이 있습니다. 영화 같은 사랑을 꿈꾸며, 낭만적인 이벤트나 운명적인 서사에 약합니다. 감정 표현이 풍부하고 애교가 많아 연애할 때 가장 사랑스러운 유형입니다. 하지만 감정 기복이 심해 연인을 당황하게 만들기도 합니다.",
      en: "You have a 'fast-faller' temperament that quickly falls in love. You dream of movie-like love and are weak to romantic events or fateful narratives. You express emotions abundantly and are very affectionate, making you the most lovable type when dating. But your emotional fluctuations are severe and can confuse your partner.",
      ja: "あなたはすぐに恋に落ちる「金サバ」の気質があります。映画のような恋を夢見て、ロマンチックなイベントや運命的な物語に弱いです。感情表現が豊かで愛嬌が多く、恋愛するとき最も愛らしいタイプです。しかし感情の起伏が激しく、恋人を当惑させることもあります。",
      'zh-CN': "你有'快速坠入爱河'的倾向。你梦想着电影般的爱情，对浪漫事件或命运叙事没有抵抗力。你情感表达丰富且非常可爱，是恋爱时最可爱的类型。但你的情绪波动严重，可能会让恋人困惑。",
      'zh-TW': "你有「快速墜入愛河」的傾向。你夢想著電影般的愛情，對浪漫事件或命運敘事沒有抵抗力。你情感表達豐富且非常可愛，是戀愛時最可愛的類型。但你的情緒波動嚴重，可能會讓戀人困惑。",
      vi: "Bạn có tính cách 'yêu nhanh' dễ dàng rơi vào lưới tình. Bạn mơ ước tình yêu như trong phim và dễ bị thu hút bởi các sự kiện lãng mạn hoặc câu chuyện định mệnh. Bạn thể hiện cảm xúc phong phú và rất đáng yêu, khiến bạn trở thành kiểu người đáng yêu nhất khi hẹn hò. Nhưng biến động cảm xúc của bạn nghiêm trọng và có thể khiến người yêu bối rối.",
      id: "Anda memiliki temperamen 'jatuh cinta cepat' yang cepat jatuh cinta. Anda memimpikan cinta seperti film dan lemah terhadap acara romantis atau narasi takdir. Anda mengekspresikan emosi dengan berlimpah dan sangat manja, menjadikan Anda tipe paling menggemaskan saat berkencan. Tapi fluktuasi emosional Anda parah dan bisa membingungkan pasangan Anda."
    },
    datingStyle: {
      ko: "낭만적, 금사빠, 열정, 드라마퀸",
      en: "Romantic, Fast-faller, Passionate, Drama Queen",
      ja: "ロマンチック、金サバ、情熱的、ドラマクイーン",
      'zh-CN': "浪漫、快速坠入爱河、热情、戏剧女王",
      'zh-TW': "浪漫、快速墜入愛河、熱情、戲劇女王",
      vi: "Lãng mạn, Yêu nhanh, Nồng nhiệt, Nữ hoàng kịch tính",
      id: "Romantis, Jatuh Cinta Cepat, Berapi-api, Drama Queen"
    },
    characteristics: {
      ko: "낭만적, 금사빠, 열정, 드라마퀸",
      en: "Romantic, Fast-faller, Passionate, Drama Queen",
      ja: "ロマンチック、金サバ、情熱的、ドラマクイーン",
      'zh-CN': "浪漫、快速坠入爱河、热情、戏剧女王",
      'zh-TW': "浪漫、快速墜入愛河、熱情、戲劇女王",
      vi: "Lãng mạn, Yêu nhanh, Nồng nhiệt, Nữ hoàng kịch tính",
      id: "Romantis, Jatuh Cinta Cepat, Berapi-api, Drama Queen"
    },
    goodMatch: {
      ko: "Type 1 (나를 진정시켜 줄 사람)",
      en: "Type 1 (Someone who can calm me down)",
      ja: "Type 1（私を落ち着かせてくれる人）",
      'zh-CN': "Type 1（能让我平静下来的人）",
      'zh-TW': "Type 1（能讓我平靜下來的人）",
      vi: "Type 1 (Người có thể làm tôi bình tĩnh)",
      id: "Type 1 (Seseorang yang bisa menenangkan saya)"
    },
    badMatch: {
      ko: "Type 2 (지나치게 현실적인 사람)",
      en: "Type 2 (Overly realistic person)",
      ja: "Type 2（過度に現実的な人）",
      'zh-CN': "Type 2（过于现实的人）",
      'zh-TW': "Type 2（過於現實的人）",
      vi: "Type 2 (Người quá thực tế)",
      id: "Type 2 (Orang yang terlalu realistis)"
    }
  },
  {
    type: "Type5",
    emoji: "🍃",
    title: {
      ko: "오는 사람 안 막는, 유유자적 둥글이 (ISFJ / ESFP 재질)",
      en: "Doesn't Block Anyone, Easygoing Person (ISFJ / ESFP type)",
      ja: "来る人を遮らない、悠悠自適な丸い人（ISFJ / ESFPタイプ）",
      'zh-CN': "不阻挡任何人，悠闲自得的人（ISFJ / ESFP 类型）",
      'zh-TW': "不阻擋任何人，悠閒自得的人（ISFJ / ESFP 類型）",
      vi: "Không chặn ai, Người dễ tính thoải mái (kiểu ISFJ / ESFP)",
      id: "Tidak Menghalangi Siapa Pun, Orang Santai (tipe ISFJ / ESFP)"
    },
    shortDescription: {
      ko: "\"좋은 게 좋은 거지~ 흘러가는 대로.\"",
      en: "\"What's good is good~ Just go with the flow.\"",
      ja: "「いいものはいいものだし〜流れに任せる。」",
      'zh-CN': "\"好的就是好的~顺其自然。\"",
      'zh-TW': "「好的就是好的～順其自然。」",
      vi: "\"Cái gì tốt thì tốt thôi~ Cứ để nó trôi đi.\"",
      id: "\"Yang baik adalah baik~ Ikuti saja alurnya.\""
    },
    description: {
      ko: "당신은 평화주의자이며 누구와도 잘 맞춰주는 둥글둥글한 성격입니다. 굳이 먼저 대시하지 않아도 자연스럽게 연애가 시작되는 경우가 많습니다. 갈등을 싫어해서 웬만하면 참아주지만, 한번 돌아서면 뒤도 안 돌아보는 무서운 면도 있습니다. 편안하고 친구 같은 연애를 선호합니다.",
      en: "You're a pacifist with a round, easygoing personality that gets along with anyone. Even if you don't actively make the first move, relationships often start naturally. You hate conflict so you usually endure, but once you turn away, you never look back, which can be scary. You prefer comfortable, friend-like relationships.",
      ja: "あなたは平和主義者で、誰とでもうまく合わせる丸い性格です。わざわざ最初にアプローチしなくても、自然に恋愛が始まることが多いです。衝突を嫌うので大抵は我慢しますが、一度振り返ると二度と振り返らない恐ろしい面もあります。心地よく友達のような恋愛を好みます。",
      'zh-CN': "你是一个和平主义者，性格圆滑，与任何人都能相处。即使不主动追求，恋爱也往往自然而然地开始。你讨厌冲突所以通常会忍耐，但一旦转身就再也不会回头，这很可怕。你喜欢舒适、像朋友一样的恋爱。",
      'zh-TW': "你是一個和平主義者，性格圓滑，與任何人都能相處。即使不主動追求，戀愛也往往自然而然地開始。你討厭衝突所以通常會忍耐，但一旦轉身就再也不會回頭，這很可怕。你喜歡舒適、像朋友一樣的戀愛。",
      vi: "Bạn là một người theo chủ nghĩa hòa bình với tính cách dễ tính, hòa hợp với bất kỳ ai. Ngay cả khi không chủ động làm bước đầu tiên, các mối quan hệ thường bắt đầu một cách tự nhiên. Bạn ghét xung đột nên thường chịu đựng, nhưng một khi bạn quay lưng lại, bạn sẽ không bao giờ nhìn lại, điều này có thể đáng sợ. Bạn thích những mối quan hệ thoải mái, giống như bạn bè.",
      id: "Anda adalah pasifis dengan kepribadian yang mudah bergaul yang cocok dengan siapa pun. Bahkan jika Anda tidak aktif mengambil langkah pertama, hubungan sering dimulai secara alami. Anda benci konflik jadi biasanya Anda menahan, tapi sekali Anda berbalik, Anda tidak pernah melihat ke belakang, yang bisa menakutkan. Anda lebih suka hubungan yang nyaman, seperti teman."
    },
    datingStyle: {
      ko: "편안함, 유연함, 평화주의, 귀차니즘",
      en: "Comfortable, Flexible, Pacifist, Laziness",
      ja: "心地よさ、柔軟性、平和主義、グータラ",
      'zh-CN': "舒适、灵活、和平主义、懒散",
      'zh-TW': "舒適、靈活、和平主義、懶散",
      vi: "Thoải mái, Linh hoạt, Hòa bình, Lười biếng",
      id: "Nyaman, Fleksibel, Pasifis, Kemalasan"
    },
    characteristics: {
      ko: "편안함, 유연함, 평화주의, 귀차니즘",
      en: "Comfortable, Flexible, Pacifist, Laziness",
      ja: "心地よさ、柔軟性、平和主義、グータラ",
      'zh-CN': "舒适、灵活、和平主义、懒散",
      'zh-TW': "舒適、靈活、和平主義、懶散",
      vi: "Thoải mái, Linh hoạt, Hòa bình, Lười biếng",
      id: "Nyaman, Fleksibel, Pasifis, Kemalasan"
    },
    goodMatch: {
      ko: "Type 2 (나를 이끌어주는 사람)",
      en: "Type 2 (Someone who leads me)",
      ja: "Type 2（私を導いてくれる人）",
      'zh-CN': "Type 2（引领我的人）",
      'zh-TW': "Type 2（引領我的人）",
      vi: "Type 2 (Người dẫn dắt tôi)",
      id: "Type 2 (Seseorang yang memimpin saya)"
    },
    badMatch: {
      ko: "Type 4 (감정 기복 심한 사람)",
      en: "Type 4 (Person with severe emotional fluctuations)",
      ja: "Type 4（感情の起伏が激しい人）",
      'zh-CN': "Type 4（情绪波动严重的人）",
      'zh-TW': "Type 4（情緒波動嚴重的人）",
      vi: "Type 4 (Người có biến động cảm xúc nghiêm trọng)",
      id: "Type 4 (Orang dengan fluktuasi emosional yang parah)"
    }
  },
  {
    type: "Type6",
    emoji: "🌳",
    title: {
      ko: "아낌없이 주는 나무, 연애 호구 (ENFJ / ESFJ 재질)",
      en: "Giving Tree, Dating Pushover (ENFJ / ESFJ type)",
      ja: "惜しみなく与える木、恋愛カモ（ENFJ / ESFJタイプ）",
      'zh-CN': "无私奉献的树，恋爱冤大头（ENFJ / ESFJ 类型）",
      'zh-TW': "無私奉獻的樹，戀愛冤大頭（ENFJ / ESFJ 類型）",
      vi: "Cây cho đi không tính toán, Kẻ ngốc trong tình yêu (kiểu ENFJ / ESFJ)",
      id: "Pohon Pemberi, Korbankan Diri dalam Kencan (tipe ENFJ / ESFJ)"
    },
    shortDescription: {
      ko: "\"네가 웃을 수만 있다면 난 뭐든지 할 수 있어.\"",
      en: "\"If you can smile, I can do anything.\"",
      ja: "「あなたが笑えるなら、私は何でもできる。」",
      'zh-CN': "\"只要你能笑，我什么都能做。\"",
      'zh-TW': "「只要你能笑，我什麼都能做。」",
      vi: "\"Nếu bạn có thể cười, mình có thể làm bất cứ điều gì.\"",
      id: "\"Jika Anda bisa tersenyum, saya bisa melakukan apa pun.\""
    },
    description: {
      ko: "당신은 사랑하는 사람에게 간과 쓸개를 다 빼주는 헌신적인 스타일입니다. 나의 행복보다 연인의 행복이 우선이며, 퍼주는 것에서 기쁨을 느낍니다. 하지만 상대방이 그 마음을 당연하게 여기면 '호구'가 되기 십상입니다. 상처받아도 또다시 사랑을 믿는 당신은 진정한 사랑꾼입니다.",
      en: "You're a devoted style that gives your heart and soul to your loved one. Your partner's happiness comes before your own, and you find joy in giving. But if your partner takes that heart for granted, you often become a 'pushover.' Even after being hurt, you believe in love again - you're a true lover.",
      ja: "あなたは愛する人に心と肝をすべて差し出す献身的なスタイルです。自分の幸せよりも恋人の幸せが優先であり、与えることに喜びを感じます。しかし相手がその心を当然だと思えば「カモ」になることが多いです。傷ついてもまた愛を信じるあなたは真の恋人です。",
      'zh-CN': "你是一个奉献型的人，会把心肝都给你爱的人。伴侣的幸福优先于你自己的幸福，你从给予中获得快乐。但如果伴侣认为这是理所当然的，你往往会成为'冤大头'。即使受伤后，你仍然相信爱情——你是一个真正的爱人。",
      'zh-TW': "你是一個奉獻型的人，會把心肝都給你愛的人。伴侶的幸福優先於你自己的幸福，你從給予中獲得快樂。但如果伴侶認為這是理所當然的，你往往會成為「冤大頭」。即使受傷後，你仍然相信愛情——你是一個真正的愛人。",
      vi: "Bạn là kiểu người tận tụy, dành hết tâm can cho người yêu. Hạnh phúc của người yêu ưu tiên hơn hạnh phúc của chính bạn, và bạn cảm thấy niềm vui khi cho đi. Nhưng nếu người yêu coi điều đó là điều hiển nhiên, bạn thường trở thành 'kẻ ngốc'. Dù bị tổn thương, bạn vẫn tin vào tình yêu - bạn là một người yêu chân chính.",
      id: "Anda adalah gaya yang berdedikasi yang memberikan hati dan jiwa kepada kekasih Anda. Kebahagiaan pasangan Anda lebih diutamakan daripada kebahagiaan Anda sendiri, dan Anda menemukan sukacita dalam memberi. Tapi jika pasangan Anda menganggap hati itu sebagai hal yang biasa, Anda sering menjadi 'korban'. Bahkan setelah terluka, Anda percaya pada cinta lagi - Anda adalah pecinta sejati."
    },
    datingStyle: {
      ko: "헌신, 희생, 애정 과다, 결혼 갈망",
      en: "Devotion, Sacrifice, Excessive Affection, Marriage Craving",
      ja: "献身、犠牲、愛情過多、結婚への渇望",
      'zh-CN': "奉献、牺牲、过度情感、渴望婚姻",
      'zh-TW': "奉獻、犧牲、過度情感、渴望婚姻",
      vi: "Cống hiến, Hy sinh, Tình cảm quá mức, Khao khát hôn nhân",
      id: "Pengabdian, Pengorbanan, Kasih Sayang Berlebihan, Kerinduan Menikah"
    },
    characteristics: {
      ko: "헌신, 희생, 애정 과다, 결혼 갈망",
      en: "Devotion, Sacrifice, Excessive Affection, Marriage Craving",
      ja: "献身、犠牲、愛情過多、結婚への渇望",
      'zh-CN': "奉献、牺牲、过度情感、渴望婚姻",
      'zh-TW': "奉獻、犧牲、過度情感、渴望婚姻",
      vi: "Cống hiến, Hy sinh, Tình cảm quá mức, Khao khát hôn nhân",
      id: "Pengabdian, Pengorbanan, Kasih Sayang Berlebihan, Kerinduan Menikah"
    },
    goodMatch: {
      ko: "Type 1 (내 사랑을 알아주는 진국)",
      en: "Type 1 (Someone who truly appreciates my love)",
      ja: "Type 1（私の愛を理解してくれる真の人）",
      'zh-CN': "Type 1（真正懂得我的爱的人）",
      'zh-TW': "Type 1（真正懂得我的愛的人）",
      vi: "Type 1 (Người thực sự đánh giá cao tình yêu của tôi)",
      id: "Type 1 (Seseorang yang benar-benar menghargai cinta saya)"
    },
    badMatch: {
      ko: "Type 5 (우유부단한 사람)",
      en: "Type 5 (Indecisive person)",
      ja: "Type 5（優柔不断な人）",
      'zh-CN': "Type 5（优柔寡断的人）",
      'zh-TW': "Type 5（優柔寡斷的人）",
      vi: "Type 5 (Người do dự)",
      id: "Type 5 (Orang yang ragu-ragu)"
    }
  }
];

export function calculatePhase2DatingMbtiResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 1) {
    return "Type1";
  } else if (totalScore >= 2 && totalScore <= 3) {
    return "Type2";
  } else if (totalScore >= 4 && totalScore <= 6) {
    return "Type5";
  } else if (totalScore >= 7 && totalScore <= 8) {
    return "Type3";
  } else if (totalScore >= 9 && totalScore <= 10) {
    return "Type4";
  } else if (totalScore >= 11 && totalScore <= 12) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type6";
  }
}

