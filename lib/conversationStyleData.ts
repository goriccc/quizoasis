export interface ConversationStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 여러 Type에 점수 부여 가능 (예: ["Type1", "Type4"])
  }[];
}

export interface ConversationStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  conversationShare: Record<string, string>; // 대화 점유율 (예: "90% (나 혼자 산다)")
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const conversationStyleQuestions: ConversationStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "여러 사람이 모인 모임 자리, 침묵이 흐른다면?",
      en: "At a gathering with many people, if silence falls?",
      ja: "多くの人が集まった会合で、沈黙が流れたら？",
      'zh-CN': "在多人聚会的场合，如果出现沉默？",
      'zh-TW': "在多人聚會的場合，如果出現沉默？",
      vi: "Trong một buổi tụ tập với nhiều người, nếu im lặng bao trùm?",
      id: "Di pertemuan dengan banyak orang, jika keheningan terjadi?"
    },
    options: [
      {
        text: {
          ko: "어색한 건 못 참는다. 아무 말이나 꺼내서 분위기를 띄운다.",
          en: "I can't stand awkwardness. I say anything to lighten the mood.",
          ja: "気まずいのは我慢できない。何でも言って雰囲気を盛り上げる。",
          'zh-CN': "我受不了尴尬。我会说任何话来活跃气氛。",
          'zh-TW': "我受不了尷尬。我會說任何話來活躍氣氛。",
          vi: "Tôi không thể chịu được sự khó xử. Tôi nói bất cứ điều gì để làm không khí vui vẻ hơn.",
          id: "Saya tidak tahan dengan kejanggalan. Saya mengatakan apa saja untuk meringankan suasana."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "침묵도 대화의 일부다. 누군가 말할 때까지 기다린다.",
          en: "Silence is also part of conversation. I wait until someone speaks.",
          ja: "沈黙も会話の一部だ。誰かが話すまで待つ。",
          'zh-CN': "沉默也是对话的一部分。我会等到有人说话。",
          'zh-TW': "沉默也是對話的一部分。我會等到有人說話。",
          vi: "Im lặng cũng là một phần của cuộc trò chuyện. Tôi đợi cho đến khi ai đó nói.",
          id: "Keheningan juga bagian dari percakapan. Saya menunggu sampai seseorang berbicara."
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 고민을 털어놓을 때 당신의 반응은?",
      en: "How do you react when a friend shares their worries?",
      ja: "友達が悩みを打ち明けるとき、あなたの反応は？",
      'zh-CN': "当朋友向你倾诉烦恼时，你的反应是？",
      'zh-TW': "當朋友向你傾訴煩惱時，你的反應是？",
      vi: "Bạn phản ứng thế nào khi bạn bè tâm sự về nỗi lo lắng?",
      id: "Bagaimana reaksi Anda ketika teman membagikan kekhawatiran mereka?"
    },
    options: [
      {
        text: {
          ko: "\"그래서 어떻게 됐어?\" 질문을 던지며 적극적으로 대화를 이끈다.",
          en: "\"So what happened?\" I ask questions and actively lead the conversation.",
          ja: "「それでどうなったの？」質問を投げかけながら積極的に会話をリードする。",
          'zh-CN': "「所以发生了什么？」我会提问并积极引导对话。",
          'zh-TW': "「所以發生了什麼？」我會提問並積極引導對話。",
          vi: "\"Vậy chuyện gì đã xảy ra?\" Tôi đặt câu hỏi và tích cực dẫn dắt cuộc trò chuyện.",
          id: "\"Jadi apa yang terjadi?\" Saya mengajukan pertanyaan dan secara aktif memimpin percakapan."
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "\"응, 그랬구나.\" 고개를 끄덕이며 묵묵히 들어준다.",
          en: "\"I see, that's how it was.\" I nod and listen quietly.",
          ja: "「うん、そうだったんだね。」うなずきながら黙々と聞いてあげる。",
          'zh-CN': "「嗯，原来是这样。」我会点头并静静地倾听。",
          'zh-TW': "「嗯，原來是這樣。」我會點頭並靜靜地傾聽。",
          vi: "\"Ừ, ra vậy.\" Tôi gật đầu và lắng nghe một cách im lặng.",
          id: "\"Oke, begitu ya.\" Saya mengangguk dan mendengarkan dengan diam."
        },
        types: ["Type2", "Type5"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "대화 도중 내가 잘 아는 주제가 나왔다.",
      en: "During a conversation, a topic I know well comes up.",
      ja: "会話中、私がよく知っている話題が出た。",
      'zh-CN': "在对话中，出现了一个我熟悉的话题。",
      'zh-TW': "在對話中，出現了一個我熟悉的話題。",
      vi: "Trong cuộc trò chuyện, một chủ đề tôi biết rõ xuất hiện.",
      id: "Selama percakapan, topik yang saya ketahui dengan baik muncul."
    },
    options: [
      {
        text: {
          ko: "눈이 반짝이며 내가 아는 지식과 정보를 대방출한다.",
          en: "My eyes sparkle and I pour out all the knowledge and information I know.",
          ja: "目が輝き、私が知っている知識と情報を大放出する。",
          'zh-CN': "我的眼睛闪闪发光，我会倾泻出所有我知道的知识和信息。",
          'zh-TW': "我的眼睛閃閃發光，我會傾瀉出所有我知道的知識和信息。",
          vi: "Mắt tôi sáng lên và tôi trút ra tất cả kiến thức và thông tin tôi biết.",
          id: "Mata saya bersinar dan saya menuangkan semua pengetahuan dan informasi yang saya ketahui."
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "상대방이 다 말할 때까지 기다렸다가 내 의견을 덧붙인다.",
          en: "I wait until the other person finishes speaking, then add my opinion.",
          ja: "相手が話し終わるまで待ってから、自分の意見を付け加える。",
          'zh-CN': "我会等到对方说完，然后补充我的意见。",
          'zh-TW': "我會等到對方說完，然後補充我的意見。",
          vi: "Tôi đợi cho đến khi người kia nói xong, rồi mới thêm ý kiến của mình.",
          id: "Saya menunggu sampai lawan bicara selesai berbicara, lalu menambahkan pendapat saya."
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "당신이 생각하는 '좋은 대화'란?",
      en: "What do you think a 'good conversation' is?",
      ja: "あなたが思う「良い会話」とは？",
      'zh-CN': "你认为什么是'好的对话'？",
      'zh-TW': "你認為什麼是「好的對話」？",
      vi: "Bạn nghĩ 'cuộc trò chuyện tốt' là gì?",
      id: "Apa yang Anda pikir tentang 'percakapan yang baik'?"
    },
    options: [
      {
        text: {
          ko: "끊임없이 티키타카가 오가며 웃음이 터지는 즐거운 대화.",
          en: "A fun conversation with constant back-and-forth and bursts of laughter.",
          ja: "絶え間なくティキタカが行き来し、笑いが溢れる楽しい会話。",
          'zh-CN': "不断来回交流，笑声不断的有趣对话。",
          'zh-TW': "不斷來回交流，笑聲不斷的有趣對話。",
          vi: "Một cuộc trò chuyện vui vẻ với sự trao đổi liên tục và tiếng cười.",
          id: "Percakapan yang menyenangkan dengan bolak-balik terus-menerus dan tawa yang meledak."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "서로의 깊은 속마음을 차분하게 나누는 진지한 대화.",
          en: "A serious conversation where we calmly share our deep inner thoughts.",
          ja: "お互いの深い本心を落ち着いて分かち合う真剣な会話。",
          'zh-CN': "平静地分享彼此内心深处想法的严肃对话。",
          'zh-TW': "平靜地分享彼此內心深處想法的嚴肅對話。",
          vi: "Một cuộc trò chuyện nghiêm túc nơi chúng ta bình tĩnh chia sẻ những suy nghĩ sâu thẳm.",
          id: "Percakapan serius di mana kita dengan tenang berbagi pikiran dalam kita."
        },
        types: ["Type2", "Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "누군가 말도 안 되는 주장을 할 때?",
      en: "When someone makes a ridiculous claim?",
      ja: "誰かが全くもってありえない主張をしたとき？",
      'zh-CN': "当有人提出荒谬的主张时？",
      'zh-TW': "當有人提出荒謬的主張時？",
      vi: "Khi ai đó đưa ra một tuyên bố vô lý?",
      id: "Ketika seseorang membuat klaim yang tidak masuk akal?"
    },
    options: [
      {
        text: {
          ko: "\"그건 아니지.\" 즉시 반박하고 팩트를 바로잡는다.",
          en: "\"That's not right.\" I immediately refute and correct the facts.",
          ja: "「それは違うよ。」即座に反論し、事実を正す。",
          'zh-CN': "「那不对。」我会立即反驳并纠正事实。",
          'zh-TW': "「那不對。」我會立即反駁並糾正事實。",
          vi: "\"Điều đó không đúng.\" Tôi ngay lập tức phản bác và sửa lại sự thật.",
          id: "\"Itu tidak benar.\" Saya segera menyangkal dan memperbaiki fakta."
        },
        types: ["Type3", "Type4"]
      },
      {
        text: {
          ko: "'저렇게 생각할 수도 있겠네.' 속으로만 생각하고 넘어간다.",
          en: "'They might think that way.' I only think it to myself and let it pass.",
          ja: "「そう考えることもあるかもしれないね。」心の中でだけ考えて、そのまま流す。",
          'zh-CN': "「也许他们会那样想。」我只在心里想，然后让它过去。",
          'zh-TW': "「也許他們會那樣想。」我只在心裡想，然後讓它過去。",
          vi: "'Họ có thể nghĩ như vậy.' Tôi chỉ nghĩ trong đầu và để nó trôi qua.",
          id: "'Mereka mungkin berpikir seperti itu.' Saya hanya memikirkannya dalam hati dan membiarkannya berlalu."
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구와 통화할 때 당신의 통화 시간은?",
      en: "When talking on the phone with a friend, how long is your call?",
      ja: "友達と通話するとき、あなたの通話時間は？",
      'zh-CN': "和朋友通电话时，你的通话时长是？",
      'zh-TW': "和朋友通電話時，你的通話時長是？",
      vi: "Khi nói chuyện điện thoại với bạn bè, cuộc gọi của bạn kéo dài bao lâu?",
      id: "Saat berbicara di telepon dengan teman, berapa lama panggilan Anda?"
    },
    options: [
      {
        text: {
          ko: "기본 1시간 이상. 끊으려다가 \"아 맞다!\" 하고 또 말한다.",
          en: "Usually over an hour. When I try to hang up, I say \"Oh right!\" and keep talking.",
          ja: "基本1時間以上。切ろうとして「あ、そうだ！」と言ってまた話す。",
          'zh-CN': "通常超过一小时。当我试图挂断时，我会说「哦对了！」然后继续说。",
          'zh-TW': "通常超過一小時。當我試圖掛斷時，我會說「哦對了！」然後繼續說。",
          vi: "Thường hơn một giờ. Khi tôi cố gắng cúp máy, tôi nói \"Ồ đúng rồi!\" và tiếp tục nói.",
          id: "Biasanya lebih dari satu jam. Ketika saya mencoba menutup telepon, saya berkata \"Oh benar!\" dan terus berbicara."
        },
        types: ["Type1", "Type4", "Type5"]
      },
      {
        text: {
          ko: "용건만 간단히. 5분 이상 넘어가면 귀가 뜨거워진다.",
          en: "Just the business briefly. If it goes over 5 minutes, my ears get hot.",
          ja: "用件だけ簡潔に。5分以上になると耳が熱くなる。",
          'zh-CN': "只谈正事，简短。如果超过5分钟，我的耳朵会发热。",
          'zh-TW': "只談正事，簡短。如果超過5分鐘，我的耳朵會發熱。",
          vi: "Chỉ nói chuyện cần thiết một cách ngắn gọn. Nếu quá 5 phút, tai tôi sẽ nóng lên.",
          id: "Hanya urusan singkat. Jika lebih dari 5 menit, telinga saya menjadi panas."
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "나의 평소 말하기 속도와 톤은?",
      en: "What is my usual speaking speed and tone?",
      ja: "私の普段の話すスピードとトーンは？",
      'zh-CN': "我平时的说话速度和语调是？",
      'zh-TW': "我平時的說話速度和語調是？",
      vi: "Tốc độ và giọng điệu nói chuyện thông thường của tôi là gì?",
      id: "Apa kecepatan dan nada bicara saya yang biasa?"
    },
    options: [
      {
        text: {
          ko: "목소리가 크고 말이 빠른 편이다.",
          en: "My voice is loud and I speak quickly.",
          ja: "声が大きく、話すのが速い方だ。",
          'zh-CN': "我的声音很大，说话很快。",
          'zh-TW': "我的聲音很大，說話很快。",
          vi: "Giọng tôi to và tôi nói nhanh.",
          id: "Suara saya keras dan saya berbicara cepat."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "목소리가 차분하고 말하는 속도가 느긋한 편이다.",
          en: "My voice is calm and I speak at a relaxed pace.",
          ja: "声が落ち着いていて、話す速度がゆっくりした方だ。",
          'zh-CN': "我的声音很平静，说话速度很慢。",
          'zh-TW': "我的聲音很平靜，說話速度很慢。",
          vi: "Giọng tôi bình tĩnh và tôi nói với tốc độ thong thả.",
          id: "Suara saya tenang dan saya berbicara dengan kecepatan santai."
        },
        types: ["Type2", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "대화할 때 제스처(손짓, 몸짓)를 많이 쓰나요?",
      en: "Do you use a lot of gestures (hand gestures, body movements) when talking?",
      ja: "会話するとき、ジェスチャー（手振り、身振り）をよく使いますか？",
      'zh-CN': "对话时，你经常使用手势（手部动作、身体动作）吗？",
      'zh-TW': "對話時，你經常使用手勢（手部動作、身體動作）嗎？",
      vi: "Bạn có sử dụng nhiều cử chỉ (cử chỉ tay, cử động cơ thể) khi nói chuyện không?",
      id: "Apakah Anda banyak menggunakan gerakan (gerakan tangan, gerakan tubuh) saat berbicara?"
    },
    options: [
      {
        text: {
          ko: "온몸으로 말한다. 리액션이 크고 표정이 다양하다.",
          en: "I speak with my whole body. My reactions are big and my expressions are varied.",
          ja: "全身で話す。リアクションが大きく、表情が豊かだ。",
          'zh-CN': "我用全身说话。我的反应很大，表情很丰富。",
          'zh-TW': "我用全身說話。我的反應很大，表情很豐富。",
          vi: "Tôi nói bằng cả cơ thể. Phản ứng của tôi lớn và biểu cảm đa dạng.",
          id: "Saya berbicara dengan seluruh tubuh. Reaksi saya besar dan ekspresi saya bervariasi."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "가만히 앉아서 말한다. 표정 변화가 크지 않다.",
          en: "I sit still and speak. My facial expressions don't change much.",
          ja: "じっと座って話す。表情の変化が大きくない。",
          'zh-CN': "我安静地坐着说话。我的面部表情变化不大。",
          'zh-TW': "我安靜地坐著說話。我的面部表情變化不大。",
          vi: "Tôi ngồi yên và nói. Biểu cảm của tôi không thay đổi nhiều.",
          id: "Saya duduk diam dan berbicara. Ekspresi wajah saya tidak banyak berubah."
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "상대방의 말을 끊고 끼어든 적이 있나요?",
      en: "Have you ever interrupted someone and cut in?",
      ja: "相手の話を遮って割り込んだことがありますか？",
      'zh-CN': "你有没有打断过对方的话并插话？",
      'zh-TW': "你有沒有打斷過對方的話並插話？",
      vi: "Bạn có bao giờ ngắt lời và chen vào cuộc trò chuyện của người khác không?",
      id: "Pernahkah Anda memotong pembicaraan seseorang dan menyela?"
    },
    options: [
      {
        text: {
          ko: "종종 있다. 할 말이 생각나면 바로 해야 직성이 풀린다.",
          en: "Often. If something comes to mind, I have to say it right away or I won't be satisfied.",
          ja: "よくある。言うことが思い浮かんだらすぐに言わないと気が済まない。",
          'zh-CN': "经常有。如果想到什么，我必须马上说出来，否则我会不舒服。",
          'zh-TW': "經常有。如果想到什麼，我必須馬上說出來，否則我會不舒服。",
          vi: "Thường xuyên có. Nếu có điều gì đó nảy ra trong đầu, tôi phải nói ngay lập tức hoặc tôi sẽ không hài lòng.",
          id: "Sering terjadi. Jika sesuatu muncul dalam pikiran, saya harus mengatakannya segera atau saya tidak akan puas."
        },
        types: ["Type1", "Type3", "Type4"]
      },
      {
        text: {
          ko: "거의 없다. 상대방의 말이 완전히 끝날 때까지 기다린다.",
          en: "Almost never. I wait until the other person completely finishes speaking.",
          ja: "ほとんどない。相手の話が完全に終わるまで待つ。",
          'zh-CN': "几乎没有。我会等到对方完全说完。",
          'zh-TW': "幾乎沒有。我會等到對方完全說完。",
          vi: "Hầu như không có. Tôi đợi cho đến khi người kia nói xong hoàn toàn.",
          id: "Hampir tidak pernah. Saya menunggu sampai lawan bicara benar-benar selesai berbicara."
        },
        types: ["Type2", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신이 더 선호하는 대화 주제는?",
      en: "What conversation topics do you prefer?",
      ja: "あなたがより好む会話のテーマは？",
      'zh-CN': "你更喜欢的对话主题是？",
      'zh-TW': "你更喜歡的對話主題是？",
      vi: "Chủ đề trò chuyện bạn thích hơn là gì?",
      id: "Topik percakapan apa yang lebih Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "최신 유행, 가십, 연예인, 맛집 등 가볍고 재밌는 이야기.",
          en: "Latest trends, gossip, celebrities, restaurants, etc. - light and fun topics.",
          ja: "最新の流行、ゴシップ、芸能人、美味しい店など、軽くて面白い話。",
          'zh-CN': "最新流行、八卦、明星、餐厅等轻松有趣的话题。",
          'zh-TW': "最新流行、八卦、明星、餐廳等輕鬆有趣的話題。",
          vi: "Xu hướng mới nhất, tin đồn, người nổi tiếng, nhà hàng ngon, v.v. - những chủ đề nhẹ nhàng và vui vẻ.",
          id: "Tren terbaru, gosip, selebritas, restoran, dll. - topik ringan dan menyenangkan."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "인생관, 가치관, 고민 상담 등 깊이 있고 철학적인 이야기.",
          en: "Life philosophy, values, counseling worries, etc. - deep and philosophical topics.",
          ja: "人生観、価値観、悩み相談など、深みがあり哲学的な話。",
          'zh-CN': "人生观、价值观、烦恼咨询等深刻且哲学性的话题。",
          'zh-TW': "人生觀、價值觀、煩惱諮詢等深刻且哲學性的話題。",
          vi: "Triết lý sống, giá trị, tư vấn lo lắng, v.v. - những chủ đề sâu sắc và triết học.",
          id: "Filsafat hidup, nilai-nilai, konseling kekhawatiran, dll. - topik yang mendalam dan filosofis."
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "소개팅 후, 상대방이 나를 어떻게 기억할까?",
      en: "After a blind date, how would the other person remember me?",
      ja: "お見合いの後、相手は私をどう覚えているだろうか？",
      'zh-CN': "相亲后，对方会如何记住我？",
      'zh-TW': "相親後，對方會如何記住我？",
      vi: "Sau một buổi hẹn hò đầu tiên, người kia sẽ nhớ tôi như thế nào?",
      id: "Setelah kencan buta, bagaimana lawan akan mengingat saya?"
    },
    options: [
      {
        text: {
          ko: "\"말도 잘하고 재밌는 사람이네.\"",
          en: "\"They speak well and are fun.\"",
          ja: "「話すのも上手で面白い人だね。」",
          'zh-CN': "「他们很会说话，很有趣。」",
          'zh-TW': "「他們很會說話，很有趣。」",
          vi: "\"Họ nói chuyện tốt và thú vị.\"",
          id: "\"Mereka berbicara dengan baik dan menyenangkan.\""
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "\"내 이야기를 잘 들어주는 편안한 사람이네.\"",
          en: "\"They're a comfortable person who listens well to my stories.\"",
          ja: "「私の話をよく聞いてくれる心地よい人だね。」",
          'zh-CN': "「他们是一个很舒服的人，很会倾听我的故事。」",
          'zh-TW': "「他們是一個很舒服的人，很會傾聽我的故事。」",
          vi: "\"Họ là người thoải mái, lắng nghe câu chuyện của tôi rất tốt.\"",
          id: "\"Mereka orang yang nyaman yang mendengarkan cerita saya dengan baik.\""
        },
        types: ["Type2", "Type5"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "대화를 마치고 집에 돌아올 때 기분은?",
      en: "How do you feel when you finish a conversation and return home?",
      ja: "会話を終えて家に帰るときの気分は？",
      'zh-CN': "结束对话回家时，你的心情是？",
      'zh-TW': "結束對話回家時，你的心情是？",
      vi: "Bạn cảm thấy thế nào khi kết thúc cuộc trò chuyện và trở về nhà?",
      id: "Bagaimana perasaan Anda saat menyelesaikan percakapan dan pulang ke rumah?"
    },
    options: [
      {
        text: {
          ko: "실컷 떠들어서 스트레스가 풀리고 개운하다.",
          en: "I've talked enough, so my stress is relieved and I feel refreshed.",
          ja: "たっぷり話してストレスが解消され、すっきりしている。",
          'zh-CN': "我聊够了，所以压力得到缓解，我感到神清气爽。",
          'zh-TW': "我聊夠了，所以壓力得到緩解，我感到神清氣爽。",
          vi: "Tôi đã nói đủ rồi, nên căng thẳng được giải tỏa và tôi cảm thấy sảng khoái.",
          id: "Saya sudah berbicara cukup, jadi stres saya teratasi dan saya merasa segar."
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "\"내가 말실수한 건 없나?\" 곱씹으며 피로감을 느낀다.",
          en: "\"Did I make any mistakes in what I said?\" I ruminate and feel tired.",
          ja: "「私が言い間違いをしたことはないか？」反芻して疲労感を感じる。",
          'zh-CN': "「我说错什么了吗？」我会反复思考并感到疲惫。",
          'zh-TW': "「我說錯什麼了嗎？」我會反覆思考並感到疲憊。",
          vi: "\"Tôi có mắc lỗi gì trong lời nói không?\" Tôi suy nghĩ lại và cảm thấy mệt mỏi.",
          id: "\"Apakah saya membuat kesalahan dalam apa yang saya katakan?\" Saya merenungkan dan merasa lelah."
        },
        types: ["Type2", "Type3", "Type5", "Type6"]
      }
    ]
  }
];

export const conversationStyleResults: ConversationStyleResult[] = [
  {
    type: "Type1",
    emoji: "📢",
    title: {
      ko: "멈추지 않는 네버엔딩 스토리, 투머치 토커 (TMT)",
      en: "Never-Ending Story, Too Much Talker (TMT)",
      ja: "止まらないネバーエンディングストーリー、トゥーマッチトーカー (TMT)",
      'zh-CN': "永不停歇的故事，话太多的人 (TMT)",
      'zh-TW': "永不停歇的故事，話太多的人 (TMT)",
      vi: "Câu chuyện không bao giờ kết thúc, Người nói quá nhiều (TMT)",
      id: "Cerita Tanpa Akhir, Pembicara Terlalu Banyak (TMT)"
    },
    shortDescription: {
      ko: "\"제 얘기 아직 안 끝났는데요? (3시간째)\"",
      en: "\"I haven't finished my story yet? (3 hours in)\"",
      ja: "「私の話、まだ終わってないけど？（3時間目）」",
      'zh-CN': "「我的故事还没讲完呢？（3小时了）」",
      'zh-TW': "「我的故事還沒講完呢？（3小時了）」",
      vi: "\"Tôi chưa nói xong câu chuyện của mình? (3 giờ rồi)\"",
      id: "\"Saya belum selesai dengan cerita saya? (Sudah 3 jam)\""
    },
    description: {
      ko: "당신은 말하는 것 자체가 에너지인 사람입니다. 에피소드 부자이며, 이야기의 꼬리에 꼬리를 무는 능력이 탁월합니다. 어색한 분위기를 절대 만들지 않는 장점이 있지만, 상대방의 귀에서 피가 날 수도 있습니다. 가끔은 '쉼표'가 필요합니다.",
      en: "You are someone for whom speaking itself is energy. You're rich in episodes and excel at adding story after story. The advantage is that you never create awkward atmospheres, but the other person's ears might bleed. Sometimes you need a 'pause'.",
      ja: "あなたは話すことそのものがエネルギーな人です。エピソードに富み、話の尻尾に尻尾をつける能力が卓越しています。気まずい雰囲気を絶対に作らないという利点がありますが、相手の耳から血が出るかもしれません。時々「休止符」が必要です。",
      'zh-CN': "你是一个把说话本身当作能量的人。你有很多故事，擅长一个接一个地讲故事。优点是你永远不会制造尴尬的气氛，但对方的耳朵可能会流血。有时你需要一个'停顿'。",
      'zh-TW': "你是一個把說話本身當作能量的人。你有很多故事，擅長一個接一個地講故事。優點是你永遠不會製造尷尬的氣氛，但對方的耳朵可能會流血。有時你需要一個「停頓」。",
      vi: "Bạn là người mà bản thân việc nói chuyện đã là năng lượng. Bạn có nhiều câu chuyện và xuất sắc trong việc thêm câu chuyện này vào câu chuyện khác. Ưu điểm là bạn không bao giờ tạo ra không khí khó xử, nhưng tai của người khác có thể chảy máu. Đôi khi bạn cần một 'dấu phẩy'.",
      id: "Anda adalah seseorang yang berbicara itu sendiri adalah energi. Anda kaya akan episode dan unggul dalam menambahkan cerita demi cerita. Keuntungannya adalah Anda tidak pernah menciptakan suasana canggung, tetapi telinga lawan bicara mungkin berdarah. Terkadang Anda membutuhkan 'koma'."
    },
    conversationShare: {
      ko: "90% (나 혼자 산다)",
      en: "90% (I live alone)",
      ja: "90%（私一人で生きる）",
      'zh-CN': "90%（我一个人生活）",
      'zh-TW': "90%（我一個人生活）",
      vi: "90% (Tôi sống một mình)",
      id: "90% (Saya hidup sendirian)"
    },
    characteristics: {
      ko: "말 끊기, 주제 이탈, 오디오 안 빔",
      en: "Interrupting, topic deviation, audio not beaming",
      ja: "話を遮る、話題がそれる、オーディオが送信されない",
      'zh-CN': "打断别人，偏离主题，音频不发送",
      'zh-TW': "打斷別人，偏離主題，音頻不發送",
      vi: "Ngắt lời, lệch chủ đề, âm thanh không phát",
      id: "Menyela, menyimpang dari topik, audio tidak mengirim"
    },
    goodMatch: {
      ko: "Type 2 (프로 리스너)",
      en: "Type 2 (Pro Listener)",
      ja: "Type 2 (プロリスナー)",
      'zh-CN': "Type 2 (专业倾听者)",
      'zh-TW': "Type 2 (專業傾聽者)",
      vi: "Type 2 (Người nghe chuyên nghiệp)",
      id: "Type 2 (Pendengar Profesional)"
    },
    badMatch: {
      ko: "Type 6 (단답형 로봇)",
      en: "Type 6 (Short Answer Robot)",
      ja: "Type 6 (短答型ロボット)",
      'zh-CN': "Type 6 (简短回答机器人)",
      'zh-TW': "Type 6 (簡短回答機器人)",
      vi: "Type 6 (Robot trả lời ngắn gọn)",
      id: "Type 6 (Robot Jawaban Singkat)"
    }
  },
  {
    type: "Type2",
    emoji: "👂",
    title: {
      ko: "세상에서 제일 편한 귀, 프로 리스너 (Listener)",
      en: "The Most Comfortable Ear in the World, Pro Listener (Listener)",
      ja: "世界で一番心地よい耳、プロリスナー (リスナー)",
      'zh-CN': "世界上最舒适的耳朵，专业倾听者 (倾听者)",
      'zh-TW': "世界上最舒適的耳朵，專業傾聽者 (傾聽者)",
      vi: "Đôi tai thoải mái nhất thế giới, Người nghe chuyên nghiệp (Listener)",
      id: "Telinga Paling Nyaman di Dunia, Pendengar Profesional (Listener)"
    },
    shortDescription: {
      ko: "\"그랬구나~ 진짜? 대박이다.\"",
      en: "\"I see~ Really? That's amazing.\"",
      ja: "「そうだったんだね〜本当？すごいね。」",
      'zh-CN': "「原来如此~真的吗？太棒了。」",
      'zh-TW': "「原來如此~真的嗎？太棒了。」",
      vi: "\"Ra vậy~ Thật sao? Tuyệt vời quá.\"",
      id: "\"Begitu ya~ Benarkah? Luar biasa.\""
    },
    description: {
      ko: "당신은 듣기의 달인입니다. 적절한 추임새와 따뜻한 눈빛으로 상대방이 신나게 말할 수 있도록 멍석을 깔아줍니다. 자기주장이 강하지 않아 답답해 보일 수도 있지만, 모든 사람이 비밀을 털어놓고 싶어 하는 대나무 숲 같은 존재입니다.",
      en: "You are a master of listening. You set the stage with appropriate responses and warm eyes so the other person can speak excitedly. You may seem frustrating because you're not strongly opinionated, but you're like a bamboo forest where everyone wants to confide their secrets.",
      ja: "あなたは聞くことの達人です。適切な相槌と温かい目で、相手が楽しそうに話せるように舞台を整えます。自己主張が強くないのでもどかしく見えるかもしれませんが、みんなが秘密を打ち明けたくなる竹林のような存在です。",
      'zh-CN': "你是倾听的大师。你用适当的回应和温暖的眼神为对方搭建舞台，让他们可以兴奋地说话。你可能看起来令人沮丧，因为你没有强烈的意见，但你就像一片竹林，每个人都想在那里倾诉他们的秘密。",
      'zh-TW': "你是傾聽的大師。你用適當的回應和溫暖的眼神為對方搭建舞台，讓他們可以興奮地說話。你可能看起來令人沮喪，因為你沒有強烈的意見，但你就像一片竹林，每個人都想在那裡傾訴他們的秘密。",
      vi: "Bạn là bậc thầy của việc lắng nghe. Bạn tạo sân khấu với những phản hồi thích hợp và ánh mắt ấm áp để người kia có thể nói chuyện một cách hào hứng. Bạn có vẻ khó chịu vì không có ý kiến mạnh mẽ, nhưng bạn giống như một khu rừng tre nơi mọi người muốn tâm sự bí mật của họ.",
      id: "Anda adalah master dalam mendengarkan. Anda menyiapkan panggung dengan respons yang tepat dan mata yang hangat sehingga lawan bicara dapat berbicara dengan antusias. Anda mungkin tampak frustasi karena tidak memiliki pendapat yang kuat, tetapi Anda seperti hutan bambu di mana semua orang ingin mengungkapkan rahasia mereka."
    },
    conversationShare: {
      ko: "20% (듣기 전문)",
      en: "20% (Listening specialist)",
      ja: "20%（聞く専門）",
      'zh-CN': "20%（专业倾听）",
      'zh-TW': "20%（專業傾聽）",
      vi: "20% (Chuyên gia nghe)",
      id: "20% (Spesialis mendengarkan)"
    },
    characteristics: {
      ko: "끄덕끄덕, 영혼 있는 리액션, 비밀 보장",
      en: "Nodding, soulful reactions, secret guarantee",
      ja: "うなずく、魂のあるリアクション、秘密の保証",
      'zh-CN': "点头，有灵魂的反应，保证秘密",
      'zh-TW': "點頭，有靈魂的反應，保證秘密",
      vi: "Gật đầu, phản ứng có tâm hồn, đảm bảo bí mật",
      id: "Mengangguk, reaksi penuh jiwa, jaminan rahasia"
    },
    goodMatch: {
      ko: "Type 1 (투머치 토커)",
      en: "Type 1 (Too Much Talker)",
      ja: "Type 1 (トゥーマッチトーカー)",
      'zh-CN': "Type 1 (话太多的人)",
      'zh-TW': "Type 1 (話太多的人)",
      vi: "Type 1 (Người nói quá nhiều)",
      id: "Type 1 (Pembicara Terlalu Banyak)"
    },
    badMatch: {
      ko: "Type 2 (서로 듣기만 해서 정적 흐름)",
      en: "Type 2 (Only listening to each other, silence flows)",
      ja: "Type 2 (お互いに聞くだけなので静寂が流れる)",
      'zh-CN': "Type 2 (只互相倾听，沉默流淌)",
      'zh-TW': "Type 2 (只互相傾聽，沉默流淌)",
      vi: "Type 2 (Chỉ lắng nghe nhau, im lặng trôi)",
      id: "Type 2 (Hanya saling mendengarkan, keheningan mengalir)"
    }
  },
  {
    type: "Type3",
    emoji: "🔍",
    title: {
      ko: "팩트만 짚어내는, 논리왕 탐정 (Detective)",
      en: "Pointing Out Only Facts, Logic King Detective (Detective)",
      ja: "ファクトだけを指摘する、論理王探偵 (探偵)",
      'zh-CN': "只指出事实，逻辑王侦探 (侦探)",
      'zh-TW': "只指出事實，邏輯王偵探 (偵探)",
      vi: "Chỉ chỉ ra sự thật, Thám tử Logic King (Detective)",
      id: "Menunjukkan Hanya Fakta, Detektif Raja Logika (Detektif)"
    },
    shortDescription: {
      ko: "\"그래서 결론이 뭐야? 근거는 있어?\"",
      en: "\"So what's the conclusion? Do you have evidence?\"",
      ja: "「それで結論は何？根拠はある？」",
      'zh-CN': "「所以结论是什么？有证据吗？」",
      'zh-TW': "「所以結論是什麼？有證據嗎？」",
      vi: "\"Vậy kết luận là gì? Bạn có bằng chứng không?\"",
      id: "\"Jadi apa kesimpulannya? Apakah Anda punya bukti?\""
    },
    description: {
      ko: "당신은 대화의 효율성과 논리를 중요하게 생각합니다. 감정적인 하소연보다는 문제 해결과 정보 전달에 집중합니다. 빙빙 돌려 말하는 것을 싫어하며, 핵심을 찌르는 질문으로 상대방을 당황하게 만들기도 합니다. 토론할 때 가장 빛나는 타입입니다.",
      en: "You value the efficiency and logic of conversation. You focus on problem-solving and information delivery rather than emotional complaints. You hate beating around the bush and can make others flustered with pointed questions. You shine the most during debates.",
      ja: "あなたは会話の効率と論理を重要視します。感情的な訴えよりも問題解決と情報伝達に集中します。遠回しに言うことを嫌い、核心を突く質問で相手を困惑させることもあります。討論するときに最も輝くタイプです。",
      'zh-CN': "你重视对话的效率和逻辑。你专注于解决问题和信息传递，而不是情感抱怨。你讨厌拐弯抹角，可以用尖锐的问题让对方感到困惑。在辩论时你是最闪耀的类型。",
      'zh-TW': "你重視對話的效率和邏輯。你專注於解決問題和信息傳遞，而不是情感抱怨。你討厭拐彎抹角，可以用尖銳的問題讓對方感到困惑。在辯論時你是最閃耀的類型。",
      vi: "Bạn coi trọng hiệu quả và logic của cuộc trò chuyện. Bạn tập trung vào giải quyết vấn đề và truyền đạt thông tin thay vì phàn nàn về cảm xúc. Bạn ghét nói vòng vo và có thể làm người khác bối rối bằng những câu hỏi sắc bén. Bạn tỏa sáng nhất trong các cuộc tranh luận.",
      id: "Anda menghargai efisiensi dan logika percakapan. Anda fokus pada pemecahan masalah dan penyampaian informasi daripada keluhan emosional. Anda membenci berbicara berbelit-belit dan dapat membuat orang lain bingung dengan pertanyaan yang tajam. Anda bersinar paling terang saat berdebat."
    },
    conversationShare: {
      ko: "50% (핵심만 타격)",
      en: "50% (Hit only the essentials)",
      ja: "50%（核心だけを狙う）",
      'zh-CN': "50%（只击中核心）",
      'zh-TW': "50%（只擊中核心）",
      vi: "50% (Chỉ đánh vào điểm cốt lõi)",
      id: "50% (Hanya memukul intinya)"
    },
    characteristics: {
      ko: "왜?, 아니 근데, 팩트 체크",
      en: "Why?, But no, fact check",
      ja: "なぜ？、いやでも、ファクトチェック",
      'zh-CN': "为什么？，但是不对，事实检查",
      'zh-TW': "為什麼？，但是不對，事實檢查",
      vi: "Tại sao?, Không nhưng, kiểm tra sự thật",
      id: "Kenapa?, Tidak tapi, periksa fakta"
    },
    goodMatch: {
      ko: "Type 5 (지적인 대화 가능)",
      en: "Type 5 (Intellectual conversation possible)",
      ja: "Type 5 (知的な会話が可能)",
      'zh-CN': "Type 5 (可以进行知性对话)",
      'zh-TW': "Type 5 (可以進行知性對話)",
      vi: "Type 5 (Có thể trò chuyện trí tuệ)",
      id: "Type 5 (Percakapan intelektual mungkin)"
    },
    badMatch: {
      ko: "Type 4 (감성팔이 질색)",
      en: "Type 4 (Hate selling emotions)",
      ja: "Type 4 (感情売りが大嫌い)",
      'zh-CN': "Type 4 (讨厌卖弄情感)",
      'zh-TW': "Type 4 (討厭賣弄情感)",
      vi: "Type 4 (Ghét bán cảm xúc)",
      id: "Type 4 (Benci menjual emosi)"
    }
  },
  {
    type: "Type4",
    emoji: "🎤",
    title: {
      ko: "분위기 띄우는, 유쾌한 MC (Entertainer)",
      en: "Mood Lifter, Cheerful MC (Entertainer)",
      ja: "雰囲気を盛り上げる、愉快なMC (エンターテイナー)",
      'zh-CN': "活跃气氛，愉快的MC (娱乐者)",
      'zh-TW': "活躍氣氛，愉快的MC (娛樂者)",
      vi: "Người tạo không khí, MC vui vẻ (Entertainer)",
      id: "Pembangkit Suasana, MC Ceria (Entertainer)"
    },
    shortDescription: {
      ko: "\"자, 다들 주목! 나 좀 봐봐!\"",
      en: "\"Hey everyone, pay attention! Look at me!\"",
      ja: "「さあ、みんな注目！私を見て！」",
      'zh-CN': "「嘿，大家注意！看看我！」",
      'zh-TW': "「嘿，大家注意！看看我！」",
      vi: "\"Nào mọi người, chú ý! Nhìn tôi này!\"",
      id: "\"Hei semua, perhatikan! Lihat saya!\""
    },
    description: {
      ko: "당신은 좌중을 휘어잡는 입담과 유머 감각을 가졌습니다. 당신이 있는 곳에는 항상 웃음이 끊이지 않습니다. 남을 웃겨야 한다는 강박이 있어 가끔은 무리수를 두기도 하지만, 미워할 수 없는 분위기 메이커입니다.",
      en: "You have the gift of gab and sense of humor that captivates the audience. Wherever you are, laughter never stops. You have a compulsion to make others laugh, so you sometimes go too far, but you're an atmosphere maker who can't be hated.",
      ja: "あなたは座を引きつける話術とユーモアセンスを持っています。あなたがいる場所には常に笑いが絶えません。人を笑わせなければならないという強迫観念があり、時々無理な手を打つこともありますが、憎めない雰囲気メーカーです。",
      'zh-CN': "你拥有吸引观众的说话技巧和幽默感。你在的地方总是笑声不断。你有强迫症要逗别人笑，所以有时会做得太过分，但你是一个让人无法讨厌的氛围制造者。",
      'zh-TW': "你擁有吸引觀眾的說話技巧和幽默感。你在的地方總是笑聲不斷。你有強迫症要逗別人笑，所以有時會做得太過分，但你是一個讓人無法討厭的氛圍製造者。",
      vi: "Bạn có tài nói chuyện và khiếu hài hước thu hút khán giả. Nơi nào bạn ở, tiếng cười không bao giờ dừng. Bạn có ám ảnh phải làm người khác cười, nên đôi khi bạn đi quá xa, nhưng bạn là người tạo không khí không thể bị ghét.",
      id: "Anda memiliki bakat berbicara dan selera humor yang memikat penonton. Di mana pun Anda berada, tawa tidak pernah berhenti. Anda memiliki obsesi untuk membuat orang lain tertawa, jadi terkadang Anda berlebihan, tetapi Anda adalah pembuat suasana yang tidak bisa dibenci."
    },
    conversationShare: {
      ko: "70% (주도권 장악)",
      en: "70% (Taking control)",
      ja: "70%（主導権を握る）",
      'zh-CN': "70%（掌握主导权）",
      'zh-TW': "70%（掌握主導權）",
      vi: "70% (Nắm quyền kiểm soát)",
      id: "70% (Mengambil kendali)"
    },
    characteristics: {
      ko: "성대모사, 에피소드 과장, 리액션 혜자",
      en: "Voice imitation, episode exaggeration, reaction generous",
      ja: "声帯模写、エピソードの誇張、リアクションが豊富",
      'zh-CN': "声音模仿，情节夸张，反应丰富",
      'zh-TW': "聲音模仿，情節誇張，反應豐富",
      vi: "Bắt chước giọng nói, phóng đại câu chuyện, phản ứng hào phóng",
      id: "Imitasi suara, melebih-lebihkan episode, reaksi murah hati"
    },
    goodMatch: {
      ko: "Type 6 (내 개그에 웃어주면 뿌듯)",
      en: "Type 6 (Proud when they laugh at my jokes)",
      ja: "Type 6 (私のギャグに笑ってくれると嬉しい)",
      'zh-CN': "Type 6 (当他们为我的笑话而笑时感到骄傲)",
      'zh-TW': "Type 6 (當他們為我的笑話而笑時感到驕傲)",
      vi: "Type 6 (Tự hào khi họ cười với câu đùa của tôi)",
      id: "Type 6 (Bangga ketika mereka tertawa pada lelucon saya)"
    },
    badMatch: {
      ko: "Type 3 (다큐로 받아들임)",
      en: "Type 3 (Takes it as a documentary)",
      ja: "Type 3 (ドキュメンタリーとして受け取る)",
      'zh-CN': "Type 3 (把它当作纪录片)",
      'zh-TW': "Type 3 (把它當作紀錄片)",
      vi: "Type 3 (Xem nó như một bộ phim tài liệu)",
      id: "Type 3 (Menerimanya sebagai dokumenter)"
    }
  },
  {
    type: "Type5",
    emoji: "📜",
    title: {
      ko: "마음을 울리는, 감성 스토리텔러 (Poet)",
      en: "Touching the Heart, Emotional Storyteller (Poet)",
      ja: "心を打つ、感情的なストーリーテラー (詩人)",
      'zh-CN': "触动心灵，感性的故事讲述者 (诗人)",
      'zh-TW': "觸動心靈，感性的故事講述者 (詩人)",
      vi: "Chạm vào trái tim, Người kể chuyện cảm xúc (Poet)",
      id: "Menyentuh Hati, Pendongeng Emosional (Penyair)"
    },
    shortDescription: {
      ko: "\"너의 아픔이 나에게도 느껴져...\"",
      en: "\"I can feel your pain too...\"",
      ja: "「あなたの痛みが私にも感じられる...」",
      'zh-CN': "「我也能感受到你的痛苦...」",
      'zh-TW': "「我也能感受到你的痛苦...」",
      vi: "\"Tôi cũng có thể cảm nhận nỗi đau của bạn...\"",
      id: "\"Saya juga bisa merasakan rasa sakit Anda...\""
    },
    description: {
      ko: "당신은 깊이 있는 대화를 선호합니다. 가벼운 농담보다는 서로의 가치관이나 감정을 나누는 것을 좋아합니다. 공감 능력이 뛰어나고 표현력이 풍부하여, 상대방의 마음에 오래 남는 위로의 말을 건넬 줄 아는 사람입니다.",
      en: "You prefer deep conversations. Rather than light jokes, you like sharing each other's values and emotions. You have excellent empathy and rich expression, so you know how to deliver words of comfort that stay in the other person's heart for a long time.",
      ja: "あなたは深い会話を好みます。軽い冗談よりも、お互いの価値観や感情を共有することを好みます。共感能力が優れ、表現力が豊かで、相手の心に長く残る慰めの言葉をかけることができる人です。",
      'zh-CN': "你喜欢深度对话。比起轻松的玩笑，你更喜欢分享彼此的价值观和情感。你拥有出色的共情能力和丰富的表达能力，所以你知道如何说出能长久留在对方心中的安慰话语。",
      'zh-TW': "你喜歡深度對話。比起輕鬆的玩笑，你更喜歡分享彼此的價值觀和情感。你擁有出色的共情能力和豐富的表達能力，所以你知道如何說出能長久留在對方心中的安慰話語。",
      vi: "Bạn thích những cuộc trò chuyện sâu sắc. Thay vì những trò đùa nhẹ nhàng, bạn thích chia sẻ giá trị và cảm xúc của nhau. Bạn có khả năng đồng cảm xuất sắc và biểu đạt phong phú, nên bạn biết cách đưa ra những lời an ủi lưu lại trong lòng người khác lâu dài.",
      id: "Anda lebih suka percakapan yang mendalam. Daripada lelucon ringan, Anda lebih suka berbagi nilai dan emosi satu sama lain. Anda memiliki kemampuan empati yang luar biasa dan ekspresi yang kaya, jadi Anda tahu bagaimana memberikan kata-kata penghiburan yang tinggal di hati lawan bicara untuk waktu yang lama."
    },
    conversationShare: {
      ko: "50% (감정 교류)",
      en: "50% (Emotional exchange)",
      ja: "50%（感情の交流）",
      'zh-CN': "50%（情感交流）",
      'zh-TW': "50%（情感交流）",
      vi: "50% (Trao đổi cảm xúc)",
      id: "50% (Pertukaran emosional)"
    },
    characteristics: {
      ko: "비유적 표현, 진지함, 새벽 감성",
      en: "Metaphorical expression, seriousness, dawn emotion",
      ja: "比喩的表現、真剣さ、夜明けの感情",
      'zh-CN': "比喻性表达，严肃，黎明情感",
      'zh-TW': "比喻性表達，嚴肅，黎明情感",
      vi: "Biểu đạt ẩn dụ, nghiêm túc, cảm xúc bình minh",
      id: "Ekspresi metaforis, keseriusan, emosi fajar"
    },
    goodMatch: {
      ko: "Type 2 (내 말을 잘 받아줌)",
      en: "Type 2 (Accepts my words well)",
      ja: "Type 2 (私の言葉をよく受け入れてくれる)",
      'zh-CN': "Type 2 (很好地接受我的话)",
      'zh-TW': "Type 2 (很好地接受我的話)",
      vi: "Type 2 (Chấp nhận lời tôi tốt)",
      id: "Type 2 (Menerima kata-kata saya dengan baik)"
    },
    badMatch: {
      ko: "Type 1 (너무 가벼워 보임)",
      en: "Type 1 (Seems too light)",
      ja: "Type 1 (軽すぎて見える)",
      'zh-CN': "Type 1 (显得太轻浮)",
      'zh-TW': "Type 1 (顯得太輕浮)",
      vi: "Type 1 (Có vẻ quá nhẹ nhàng)",
      id: "Type 1 (Terlihat terlalu ringan)"
    }
  },
  {
    type: "Type6",
    emoji: "😶",
    title: {
      ko: "필요한 말만 하는, 단답형 관찰자 (Observer)",
      en: "Only Necessary Words, Short Answer Observer (Observer)",
      ja: "必要なことだけ言う、短答型観察者 (観察者)",
      'zh-CN': "只说必要的话，简短回答的观察者 (观察者)",
      'zh-TW': "只說必要的話，簡短回答的觀察者 (觀察者)",
      vi: "Chỉ nói điều cần thiết, Người quan sát trả lời ngắn gọn (Observer)",
      id: "Hanya Kata yang Diperlukan, Pengamat Jawaban Singkat (Pengamat)"
    },
    shortDescription: {
      ko: "\"네. 아니요. 글쎄요.\"",
      en: "\"Yes. No. I'm not sure.\"",
      ja: "「はい。いいえ。よくわからない。」",
      'zh-CN': "「是的。不是。不知道。」",
      'zh-TW': "「是的。不是。不知道。」",
      vi: "\"Vâng. Không. Tôi không chắc.\"",
      id: "\"Ya. Tidak. Tidak yakin.\""
    },
    description: {
      ko: "당신은 말수가 적고 신중합니다. 머릿속으로 생각을 정리한 뒤에 입을 떼기 때문에 대화 템포가 느린 편입니다. 쓸데없는 잡담을 싫어하며, 침묵을 편안해합니다. 차가워 보일 수 있지만, 한 번 뱉은 말은 무게감이 있어 신뢰를 줍니다.",
      en: "You are quiet and cautious. You organize your thoughts in your head before opening your mouth, so your conversation tempo is slow. You hate unnecessary small talk and are comfortable with silence. You may seem cold, but once you speak, your words have weight and inspire trust.",
      ja: "あなたは口数が少なく、慎重です。頭の中で考えを整理してから口を開くので、会話のテンポは遅い方です。無駄な雑談を嫌い、沈黙を心地よく感じます。冷たく見えるかもしれませんが、一度口にした言葉には重みがあり、信頼を与えます。",
      'zh-CN': "你话少且谨慎。你在开口之前会在脑中整理思路，所以你的对话节奏较慢。你讨厌无意义的小聊天，并且对沉默感到舒适。你可能看起来很冷漠，但一旦你开口，你的话有分量并给人信任感。",
      'zh-TW': "你話少且謹慎。你在開口之前會在腦中整理思路，所以你的對話節奏較慢。你討厭無意義的小聊天，並且對沉默感到舒適。你可能看起來很冷漠，但一旦你開口，你的話有分量並給人信任感。",
      vi: "Bạn ít nói và thận trọng. Bạn sắp xếp suy nghĩ trong đầu trước khi mở miệng, nên nhịp độ trò chuyện của bạn chậm. Bạn ghét những cuộc trò chuyện phiếm không cần thiết và cảm thấy thoải mái với sự im lặng. Bạn có vẻ lạnh lùng, nhưng một khi bạn nói, lời nói của bạn có trọng lượng và tạo niềm tin.",
      id: "Anda pendiam dan hati-hati. Anda mengatur pikiran di kepala sebelum membuka mulut, jadi tempo percakapan Anda lambat. Anda benci obrolan kecil yang tidak perlu dan nyaman dengan keheningan. Anda mungkin terlihat dingin, tetapi begitu Anda berbicara, kata-kata Anda memiliki bobot dan menginspirasi kepercayaan."
    },
    conversationShare: {
      ko: "10% (생존형 대화)",
      en: "10% (Survival conversation)",
      ja: "10%（生存型会話）",
      'zh-CN': "10%（生存型对话）",
      'zh-TW': "10%（生存型對話）",
      vi: "10% (Cuộc trò chuyện sinh tồn)",
      id: "10% (Percakapan bertahan hidup)"
    },
    characteristics: {
      ko: "묵묵부답, 포커페이스, 내적 수다",
      en: "Silent, poker face, internal chatter",
      ja: "黙々無言、ポーカーフェイス、内的おしゃべり",
      'zh-CN': "默默无言，扑克脸，内心喋喋不休",
      'zh-TW': "默默無言，撲克臉，內心喋喋不休",
      vi: "Im lặng, mặt poker, nói chuyện trong đầu",
      id: "Bisu, poker face, obrolan internal"
    },
    goodMatch: {
      ko: "Type 4 (나를 웃게 해줌)",
      en: "Type 4 (Makes me laugh)",
      ja: "Type 4 (私を笑わせてくれる)",
      'zh-CN': "Type 4 (让我笑)",
      'zh-TW': "Type 4 (讓我笑)",
      vi: "Type 4 (Làm tôi cười)",
      id: "Type 4 (Membuat saya tertawa)"
    },
    badMatch: {
      ko: "Type 1 (기 빨려서 도망감)",
      en: "Type 1 (Runs away because too fast)",
      ja: "Type 1 (ペースが速すぎて逃げる)",
      'zh-CN': "Type 1 (节奏太快而逃跑)",
      'zh-TW': "Type 1 (節奏太快而逃跑)",
      vi: "Type 1 (Bỏ chạy vì quá nhanh)",
      id: "Type 1 (Kabur karena terlalu cepat)"
    }
  }
];

export function calculateConversationStyleResult(answers: string[]): string {
  // 각 Type별 점수 계산
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 대해 해당하는 Type들에 점수 부여
  answers.forEach((answerTypes) => {
    // answerTypes는 "Type1,Type4" 같은 형식일 수 있음
    const types = answerTypes.split(',').map(t => t.trim());
    types.forEach(type => {
      if (scores.hasOwnProperty(type)) {
        scores[type]++;
      }
    });
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = "Type1";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 우선순위: Type 4(MC) > Type 2(리스너) > Type 1(TMT) > Type 5(감성) > Type 3(논리) > Type 6(관찰자)
  if (maxScore > 0) {
    const tiedTypes = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([type, _]) => type);

    if (tiedTypes.length > 1) {
      const priority = ["Type4", "Type2", "Type1", "Type5", "Type3", "Type6"];
      for (const priorityType of priority) {
        if (tiedTypes.includes(priorityType)) {
          resultType = priorityType;
          break;
        }
      }
    }
  }

  return resultType;
}

