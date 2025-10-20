export interface HonestyQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface HonestyResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription?: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  advice: Record<string, string>;
  communicationStyle: Record<string, string>;
  compatibility: {
    best: Record<string, string[]>;
    good: Record<string, string[]>;
    careful: Record<string, string[]>;
    difficult: Record<string, string[]>;
  };
}

export const honestyQuestions: HonestyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 \"나 이 옷 어때?\" 물었는데 별로일 때?",
      en: "When a friend asks \"How does this outfit look?\" and it's not great?",
      ja: "友達が「この服どう？」と聞いてきたけど、あまり良くない時？",
      'zh-CN': "朋友问\"这件衣服怎么样？\"但不太好时？",
      'zh-TW': "朋友問「這件衣服怎麼樣？」但不太好時？",
      vi: "Khi bạn hỏi \"Bộ đồ này thế nào?\" nhưng không đẹp lắm?",
      id: "Ketika teman bertanya \"Bagaimana pakaian ini?\" tapi tidak bagus?"
    },
    options: [
      {
        text: {
          ko: "솔직히 별로야. 다른 거 입는 게 낫겠어",
          en: "Honestly, it's not great. You should wear something else",
          ja: "正直、あまり良くない。別のものを着た方がいい",
          'zh-CN': "老实说，不太好。你应该穿别的",
          'zh-TW': "老實說，不太好。你應該穿別的",
          vi: "Thành thật mà nói, không đẹp lắm. Bạn nên mặc cái khác",
          id: "Jujur, tidak bagus. Kamu harus memakai yang lain"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "괜찮긴 한데, 아까 봤던 게 더 예뻤어",
          en: "It's okay, but the one you saw earlier was prettier",
          ja: "まあまあだけど、さっき見た方がきれいだった",
          'zh-CN': "还行，但你之前看的那件更漂亮",
          'zh-TW': "還行，但你之前看的那件更漂亮",
          vi: "Ổn thôi, nhưng cái bạn vừa thấy đẹp hơn",
          id: "Lumayan, tapi yang tadi kamu lihat lebih cantik"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "동료가 실수했을 때?",
      en: "When a colleague makes a mistake?",
      ja: "同僚がミスをした時？",
      'zh-CN': "同事犯错时？",
      'zh-TW': "同事犯錯時？",
      vi: "Khi đồng nghiệp mắc lỗi?",
      id: "Ketika rekan kerja melakukan kesalahan?"
    },
    options: [
      {
        text: {
          ko: "이렇게 하면 안 되지. 다음엔 이렇게 해",
          en: "You shouldn't do it like this. Next time do it this way",
          ja: "こうやってはいけない。次はこうやって",
          'zh-CN': "你不应该这样做。下次这样做",
          'zh-TW': "你不應該這樣做。下次這樣做",
          vi: "Không nên làm như vậy. Lần sau làm như này",
          id: "Tidak boleh seperti ini. Lain kali lakukan seperti ini"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "괜찮아, 다들 실수하니까. 다음에 조심하자",
          en: "It's okay, everyone makes mistakes. Let's be careful next time",
          ja: "大丈夫、みんなミスするから。次は気をつけよう",
          'zh-CN': "没关系，大家都会犯错。下次小心点",
          'zh-TW': "沒關係，大家都會犯錯。下次小心點",
          vi: "Không sao, ai cũng mắc lỗi. Lần sau cẩn thận nhé",
          id: "Tidak apa-apa, semua orang membuat kesalahan. Lain kali hati-hati"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "당신의 소통 철학은?",
      en: "What is your communication philosophy?",
      ja: "あなたのコミュニケーション哲学は？",
      'zh-CN': "你的沟通哲学是什么？",
      'zh-TW': "你的溝通哲學是什麼？",
      vi: "Triết lý giao tiếp của bạn là gì?",
      id: "Apa filosofi komunikasi Anda?"
    },
    options: [
      {
        text: {
          ko: "진실을 말하는 게 진짜 관계다",
          en: "Telling the truth is a real relationship",
          ja: "真実を話すのが本当の関係だ",
          'zh-CN': "说真话才是真正的关系",
          'zh-TW': "說真話才是真正的關係",
          vi: "Nói sự thật mới là mối quan hệ thật sự",
          id: "Berbicara jujur adalah hubungan yang sesungguhnya"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "상대 기분을 배려하는 게 중요하다",
          en: "It's important to consider the other person's feelings",
          ja: "相手の気持ちを配慮することが重要だ",
          'zh-CN': "考虑对方的感受很重要",
          'zh-TW': "考慮對方的感受很重要",
          vi: "Quan tâm đến cảm xúc của đối phương là quan trọng",
          id: "Mempertimbangkan perasaan orang lain itu penting"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "친구의 연인이 별로일 때?",
      en: "When your friend's partner is not great?",
      ja: "友達の恋人があまり良くない時？",
      'zh-CN': "朋友的恋人不太好时？",
      'zh-TW': "朋友的戀人不太好時？",
      vi: "Khi người yêu của bạn không tốt lắm?",
      id: "Ketika pacar teman tidak bagus?"
    },
    options: [
      {
        text: {
          ko: "내가 보기엔 별로야. 신중하게 생각해",
          en: "I think it's not great. Think carefully",
          ja: "私が見る限りあまり良くない。慎重に考えて",
          'zh-CN': "我觉得不太好。仔细想想",
          'zh-TW': "我覺得不太好。仔細想想",
          vi: "Theo tôi thấy không tốt lắm. Hãy suy nghĩ cẩn thận",
          id: "Menurut saya tidak bagus. Pikirkan dengan hati-hati"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "안 좋은 말은 안 함, 친구가 행복하면 됨",
          en: "Don't say bad things, as long as my friend is happy",
          ja: "悪いことは言わない、友達が幸せならそれでいい",
          'zh-CN': "不说坏话，朋友开心就好",
          'zh-TW': "不說壞話，朋友開心就好",
          vi: "Không nói điều xấu, bạn tôi hạnh phúc là được",
          id: "Tidak mengatakan hal buruk, yang penting teman bahagia"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "누군가 잘못된 정보를 말할 때?",
      en: "When someone gives wrong information?",
      ja: "誰かが間違った情報を言う時？",
      'zh-CN': "有人说错信息时？",
      'zh-TW': "有人說錯資訊時？",
      vi: "Khi ai đó đưa thông tin sai?",
      id: "Ketika seseorang memberikan informasi yang salah?"
    },
    options: [
      {
        text: {
          ko: "그거 틀렸어. 사실은 이래",
          en: "That's wrong. The fact is...",
          ja: "それは間違ってる。事実は...",
          'zh-CN': "那是错的。事实是...",
          'zh-TW': "那是錯的。事實是...",
          vi: "Đó là sai. Sự thật là...",
          id: "Itu salah. Faktanya..."
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "아, 내가 알기로는 조금 다른데...",
          en: "Ah, as far as I know, it's a bit different...",
          ja: "あ、私が知る限りでは少し違うんですが...",
          'zh-CN': "啊，据我所知有点不同...",
          'zh-TW': "啊，據我所知有點不同...",
          vi: "À, theo tôi biết thì hơi khác...",
          id: "Ah, sepengetahuan saya agak berbeda..."
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "선물 받았는데 취향이 아닐 때?",
      en: "When you receive a gift that's not your taste?",
      ja: "プレゼントをもらったけど好みじゃない時？",
      'zh-CN': "收到礼物但不是你的喜好时？",
      'zh-TW': "收到禮物但不是你的喜好時？",
      vi: "Khi nhận quà nhưng không hợp sở thích?",
      id: "Ketika menerima hadiah tapi tidak sesuai selera?"
    },
    options: [
      {
        text: {
          ko: "고마운데, 사실 내 스타일은 아니야",
          en: "Thanks, but it's not really my style",
          ja: "ありがとう、でも私のスタイルじゃない",
          'zh-CN': "谢谢，但不是我喜欢的风格",
          'zh-TW': "謝謝，但不是我喜歡的風格",
          vi: "Cảm ơn, nhưng không phải phong cách của tôi",
          id: "Terima kasih, tapi bukan gaya saya"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "고마워! 잘 쓸게 (마음만 받음)",
          en: "Thanks! I'll use it well (just appreciate the thought)",
          ja: "ありがとう！よく使うね（気持ちだけ受け取る）",
          'zh-CN': "谢谢！我会好好使用（只接受心意）",
          'zh-TW': "謝謝！我會好好使用（只接受心意）",
          vi: "Cảm ơn! Tôi sẽ dùng tốt (chỉ nhận tấm lòng)",
          id: "Terima kasih! Akan saya gunakan dengan baik (hanya menerima niat)"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구가 무리한 부탁을 할 때?",
      en: "When a friend makes an unreasonable request?",
      ja: "友達が無理な頼みをする時？",
      'zh-CN': "朋友提出无理要求时？",
      'zh-TW': "朋友提出無理要求時？",
      vi: "Khi bạn đưa ra yêu cầu vô lý?",
      id: "Ketika teman membuat permintaan yang tidak masuk akal?"
    },
    options: [
      {
        text: {
          ko: "미안, 그건 못 들어줘",
          en: "Sorry, I can't help with that",
          ja: "ごめん、それはできない",
          'zh-CN': "抱歉，我帮不了那个",
          'zh-TW': "抱歉，我幫不了那個",
          vi: "Xin lỗi, tôi không thể giúp được",
          id: "Maaf, saya tidak bisa membantu itu"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "지금은 어렵지만... 다른 방법 찾아볼까?",
          en: "It's difficult now... but maybe we can find another way?",
          ja: "今は難しいけど...他の方法を探してみようか？",
          'zh-CN': "现在很困难...但我们能找到其他方法吗？",
          'zh-TW': "現在很困難...但我們能找到其他方法嗎？",
          vi: "Bây giờ khó... nhưng có thể tìm cách khác?",
          id: "Sekarang sulit... tapi mungkin kita bisa cari cara lain?"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "회의에서 잘못된 의견이 나올 때?",
      en: "When a wrong opinion comes up in a meeting?",
      ja: "会議で間違った意見が出る時？",
      'zh-CN': "会议上出现错误意见时？",
      'zh-TW': "會議上出現錯誤意見時？",
      vi: "Khi có ý kiến sai trong cuộc họp?",
      id: "Ketika pendapat salah muncul dalam rapat?"
    },
    options: [
      {
        text: {
          ko: "그건 비효율적입니다. 이유는...",
          en: "That's inefficient. The reason is...",
          ja: "それは非効率的です。理由は...",
          'zh-CN': "那是低效的。原因是...",
          'zh-TW': "那是低效的。原因是...",
          vi: "Đó là không hiệu quả. Lý do là...",
          id: "Itu tidak efisien. Alasannya..."
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "좋은 의견이지만, 이런 방법도 있을 것 같아요",
          en: "Good opinion, but I think there's also this method",
          ja: "良い意見ですが、こんな方法もあると思います",
          'zh-CN': "好意见，但我想也有这种方法",
          'zh-TW': "好意見，但我想也有這種方法",
          vi: "Ý kiến hay, nhưng tôi nghĩ cũng có cách này",
          id: "Pendapat bagus, tapi saya rasa ada juga metode ini"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "누군가의 꿈이 현실성 없어 보일 때?",
      en: "When someone's dream seems unrealistic?",
      ja: "誰かの夢が現実的でないように見える時？",
      'zh-CN': "某人的梦想看起来不现实时？",
      'zh-TW': "某人的夢想看起來不現實時？",
      vi: "Khi ước mơ của ai đó có vẻ không thực tế?",
      id: "Ketika mimpi seseorang terlihat tidak realistis?"
    },
    options: [
      {
        text: {
          ko: "솔직히 힘들어 보여. 현실적으로 생각해",
          en: "Honestly, it looks difficult. Think realistically",
          ja: "正直、難しそう。現実的に考えて",
          'zh-CN': "老实说，看起来很困难。现实地想想",
          'zh-TW': "老實說，看起來很困難。現實地想想",
          vi: "Thành thật mà nói, có vẻ khó. Hãy nghĩ thực tế",
          id: "Jujur, terlihat sulit. Pikirkan secara realistis"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "도전해봐! 응원할게 (속으론 걱정)",
          en: "Try it! I'll cheer you on (worried inside)",
          ja: "挑戦してみて！応援するよ（内心心配）",
          'zh-CN': "试试吧！我会为你加油（内心担心）",
          'zh-TW': "試試吧！我會為你加油（內心擔心）",
          vi: "Thử đi! Tôi sẽ cổ vũ (lo lắng bên trong)",
          id: "Coba saja! Saya akan mendukung (khawatir di dalam hati)"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "SNS에 올라온 별로인 사진에 댓글 달 때?",
      en: "When commenting on not-so-great photos on SNS?",
      ja: "SNSにアップされたあまり良くない写真にコメントする時？",
      'zh-CN': "在SNS上不太好的照片下评论时？",
      'zh-TW': "在SNS上不太好的照片下評論時？",
      vi: "Khi bình luận trên ảnh không đẹp trên SNS?",
      id: "Ketika mengomentari foto yang tidak bagus di SNS?"
    },
    options: [
      {
        text: {
          ko: "아예 안 달거나 솔직하게",
          en: "Either don't comment at all or be honest",
          ja: "全く書かないか正直に",
          'zh-CN': "要么不评论要么诚实地说",
          'zh-TW': "要麼不評論要麼誠實地說",
          vi: "Hoặc không bình luận hoặc thành thật",
          id: "Entah tidak komentar sama sekali atau jujur"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "좋아요 누르고 긍정 댓글",
          en: "Like and write positive comments",
          ja: "いいねしてポジティブなコメント",
          'zh-CN': "点赞并写正面评论",
          'zh-TW': "點讚並寫正面評論",
          vi: "Like và viết bình luận tích cực",
          id: "Like dan tulis komentar positif"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "상사가 비효율적인 지시를 할 때?",
      en: "When your boss gives inefficient instructions?",
      ja: "上司が非効率的な指示をする時？",
      'zh-CN': "上司给出低效指示时？",
      'zh-TW': "上司給出低效指示時？",
      vi: "Khi sếp đưa ra chỉ dẫn không hiệu quả?",
      id: "Ketika bos memberikan instruksi yang tidak efisien?"
    },
    options: [
      {
        text: {
          ko: "이렇게 하는 게 더 효율적일 것 같습니다",
          en: "I think doing it this way would be more efficient",
          ja: "こうやる方が効率的だと思います",
          'zh-CN': "我认为这样做会更有效率",
          'zh-TW': "我認為這樣做會更有效率",
          vi: "Tôi nghĩ làm như này sẽ hiệu quả hơn",
          id: "Saya rasa melakukan seperti ini akan lebih efisien"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "일단 시키는 대로 하고 나중에 건의",
          en: "Do as instructed first and suggest later",
          ja: "とりあえず言われた通りにして後で提案",
          'zh-CN': "先按指示做，然后稍后建议",
          'zh-TW': "先按指示做，然後稍後建議",
          vi: "Làm theo chỉ dẫn trước, sau đó đề xuất",
          id: "Lakukan sesuai instruksi dulu, kemudian usulkan nanti"
        },
        scores: { 배려: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 더 중요하게 생각하는 것은?",
      en: "What do you think is more important?",
      ja: "あなたがより重要だと思うのは？",
      'zh-CN': "你认为什么更重要？",
      'zh-TW': "你認為什麼更重要？",
      vi: "Bạn nghĩ điều gì quan trọng hơn?",
      id: "Apa yang Anda anggap lebih penting?"
    },
    options: [
      {
        text: {
          ko: "진실과 솔직함",
          en: "Truth and honesty",
          ja: "真実と正直さ",
          'zh-CN': "真理和诚实",
          'zh-TW': "真理和誠實",
          vi: "Sự thật và thành thật",
          id: "Kebenaran dan kejujuran"
        },
        scores: { 솔직: 2 }
      },
      {
        text: {
          ko: "관계와 배려",
          en: "Relationships and consideration",
          ja: "関係と配慮",
          'zh-CN': "关系和体贴",
          'zh-TW': "關係和體貼",
          vi: "Mối quan hệ và sự quan tâm",
          id: "Hubungan dan pertimbangan"
        },
        scores: { 배려: 2 }
      }
    ]
  }
];

export const honestyResults: HonestyResult[] = [
  {
    type: "Type1",
    emoji: "🔥",
    title: {
      ko: "극단의 솔직파",
      en: "Extreme Honesty Type",
      ja: "極端な正直派",
      'zh-CN': "极端诚实型",
      'zh-TW': "極端誠實型",
      vi: "Kiểu Thành Thật Cực Đoan",
      id: "Tipe Kejujuran Ekstrem"
    },
    description: {
      ko: "진실만이 살길! 거짓말은 절대 안 해",
      en: "Truth is the only way! Never lie",
      ja: "真実だけが道！絶対に嘘はつかない",
      'zh-CN': "真理是唯一出路！绝不说谎",
      'zh-TW': "真理是唯一出路！絕不說謊",
      vi: "Sự thật là con đường duy nhất! Không bao giờ nói dối",
      id: "Kebenaran adalah satu-satunya jalan! Tidak pernah berbohong"
    },
    longDescription: {
      ko: "솔직함을 최고 가치로 여깁니다. 어떤 상황에서도 진실을 말하고, 거짓말이나 에둘러 말하는 걸 싫어합니다. \"내가 나빠 보여도 진실을 말하는 게 맞다\"고 생각합니다. 정직하고 신뢰할 수 있지만, 때로는 상처를 주거나 관계가 틀어질 수 있습니다. 배려 없는 솔직함은 폭력이 될 수 있다는 걸 기억하세요.",
      en: "Values honesty above all else. Always tells the truth in any situation and hates lies or beating around the bush. Thinks \"Even if I look bad, telling the truth is right.\" Honest and trustworthy, but can sometimes hurt others or damage relationships. Remember that honesty without consideration can be violence.",
      ja: "正直さを最高の価値とします。どんな状況でも真実を話し、嘘や遠回しな言い方を嫌います。「自分が悪く見えても真実を話すのが正しい」と考えています。正直で信頼できるが、時には他人を傷つけたり関係を壊したりすることがあります。配慮のない正直さは暴力になり得ることを覚えておきましょう。",
      'zh-CN': "将诚实视为最高价值。在任何情况下都说真话，讨厌谎言或拐弯抹角。认为\"即使我看起来不好，说真话也是对的。\"诚实可信，但有时会伤害他人或破坏关系。记住，没有体贴的诚实可能是暴力。",
      'zh-TW': "將誠實視為最高價值。在任何情況下都說真話，討厭謊言或拐彎抹角。認為「即使我看起來不好，說真話也是對的。」誠實可信，但有時會傷害他人或破壞關係。記住，沒有體貼的誠實可能是暴力。",
      vi: "Đánh giá cao sự thành thật hơn tất cả. Luôn nói sự thật trong mọi tình huống và ghét nói dối hoặc nói vòng vo. Nghĩ rằng \"Dù tôi trông xấu, nói sự thật là đúng.\" Thành thật và đáng tin cậy, nhưng đôi khi có thể làm tổn thương người khác hoặc phá hủy mối quan hệ. Nhớ rằng sự thành thật không có sự quan tâm có thể là bạo lực.",
      id: "Menghargai kejujuran di atas segalanya. Selalu mengatakan kebenaran dalam situasi apa pun dan membenci kebohongan atau berbicara berbelit-belit. Berpikir \"Meskipun saya terlihat buruk, mengatakan kebenaran adalah benar.\" Jujur dan dapat dipercaya, tetapi terkadang dapat menyakiti orang lain atau merusak hubungan. Ingat bahwa kejujuran tanpa pertimbangan bisa menjadi kekerasan."
    },
    pros: {
      ko: "정직, 신뢰, 명확함, 진실성",
      en: "Honesty, Trust, Clarity, Authenticity",
      ja: "正直、信頼、明確さ、真実性",
      'zh-CN': "诚实、信任、清晰、真实性",
      'zh-TW': "誠實、信任、清晰、真實性",
      vi: "Thành thật, Tin cậy, Rõ ràng, Chân thực",
      id: "Kejujuran, Kepercayaan, Kejelasan, Keaslian"
    },
    cons: {
      ko: "무례함, 관계 손상, 상처 주기 쉬움",
      en: "Rudeness, Relationship Damage, Easy to Hurt",
      ja: "無礼、関係の損傷、傷つけやすい",
      'zh-CN': "粗鲁、关系损害、容易伤害",
      'zh-TW': "粗魯、關係損害、容易傷害",
      vi: "Thô lỗ, Tổn hại mối quan hệ, Dễ làm tổn thương",
      id: "Kekasaran, Kerusakan Hubungan, Mudah Menyakiti"
    },
    advice: {
      ko: "진실도 중요하지만 전달 방식이 더 중요해요. \"무엇을\" 말하는가보다 \"어떻게\" 말하는가가 관계를 결정합니다.",
      en: "Truth is important, but how you deliver it is more important. How you say it, not what you say, determines relationships.",
      ja: "真実も重要ですが、伝え方がもっと重要です。「何を」言うかより「どのように」言うかが関係を決定します。",
      'zh-CN': "真理很重要，但如何传达更重要。如何说比说什么更能决定关系。",
      'zh-TW': "真理很重要，但如何傳達更重要。如何說比說什麼更能決定關係。",
      vi: "Sự thật quan trọng, nhưng cách truyền đạt quan trọng hơn. Cách nói quyết định mối quan hệ hơn là nói gì.",
      id: "Kebenaran penting, tapi cara menyampaikannya lebih penting. Bagaimana mengatakannya, bukan apa yang dikatakan, yang menentukan hubungan."
    },
    communicationStyle: {
      ko: "직설적, 솔직, 날카로움",
      en: "Direct, Honest, Sharp",
      ja: "率直、正直、鋭い",
      'zh-CN': "直接、诚实、尖锐",
      'zh-TW': "直接、誠實、尖銳",
      vi: "Trực tiếp, Thành thật, Sắc bén",
      id: "Langsung, Jujur, Tajam"
    },
    compatibility: {
      best: {
        ko: ["극단의 솔직파", "솔직 우선형"],
        en: ["Extreme Honesty Type", "Honesty Priority Type"],
        ja: ["極端な正直派", "正直優先型"],
        'zh-CN': ["极端诚实型", "诚实优先型"],
        'zh-TW': ["極端誠實型", "誠實優先型"],
        vi: ["Kiểu Thành Thật Cực Đoan", "Kiểu Ưu Tiên Thành Thật"],
        id: ["Tipe Kejujuran Ekstrem", "Tipe Prioritas Kejujuran"]
      },
      good: {
        ko: ["완벽한 균형형"],
        en: ["Perfect Balance Type"],
        ja: ["完璧なバランス型"],
        'zh-CN': ["完美平衡型"],
        'zh-TW': ["完美平衡型"],
        vi: ["Kiểu Cân Bằng Hoàn Hảo"],
        id: ["Tipe Keseimbangan Sempurna"]
      },
      careful: {
        ko: ["배려 우선형", "극단의 배려파"],
        en: ["Consideration Priority Type", "Extreme Consideration Type"],
        ja: ["配慮優先型", "極端な配慮派"],
        'zh-CN': ["体贴优先型", "极端体贴型"],
        'zh-TW': ["體貼優先型", "極端體貼型"],
        vi: ["Kiểu Ưu Tiên Quan Tâm", "Kiểu Quan Tâm Cực Đoan"],
        id: ["Tipe Prioritas Pertimbangan", "Tipe Pertimbangan Ekstrem"]
      },
      difficult: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    }
  },
  {
    type: "Type2",
    emoji: "💬",
    title: {
      ko: "솔직 우선형",
      en: "Honesty Priority Type",
      ja: "正直優先型",
      'zh-CN': "诚实优先型",
      'zh-TW': "誠實優先型",
      vi: "Kiểu Ưu Tiên Thành Thật",
      id: "Tipe Prioritas Kejujuran"
    },
    description: {
      ko: "솔직하되 상처주지 않게! 현명한 진실",
      en: "Honest but don't hurt! Wise truth",
      ja: "正直だけど傷つけない！賢い真実",
      'zh-CN': "诚实但不伤害！明智的真理",
      'zh-TW': "誠實但不傷害！明智的真理",
      vi: "Thành thật nhưng đừng làm tổn thương! Sự thật khôn ngoan",
      id: "Jujur tapi jangan menyakiti! Kebenaran bijaksana"
    },
    longDescription: {
      ko: "솔직함을 중시하되 최소한의 배려는 갖춘 타입입니다. 진실을 말하지만 표현을 조금 부드럽게 합니다. \"별로야\"보다는 \"다른 게 더 나을 것 같아\"라고 말합니다. 정직하면서도 관계를 해치지 않는 균형감이 있습니다. 가장 건강한 솔직함을 가진 타입입니다.",
      en: "Values honesty but maintains minimum consideration. Tells the truth but expresses it gently. Says \"something else might be better\" instead of \"it's not good.\" Has a sense of balance that maintains relationships while being honest. This is the type with the healthiest honesty.",
      ja: "正直さを重視するが、最小限の配慮を持っています。真実を話すが表現を少し柔らかくします。「あまり良くない」よりも「他の方が良さそう」と言います。正直でありながら関係を損なわないバランス感覚があります。最も健康的な正直さを持つタイプです。",
      'zh-CN': "重视诚实但保持最低限度的体贴。说真话但表达温和。说\"别的可能更好\"而不是\"不好\"。在诚实的同时保持关系平衡感。这是拥有最健康诚实感的类型。",
      'zh-TW': "重視誠實但保持最低限度的體貼。說真話但表達溫和。說「別的可能更好」而不是「不好」。在誠實的同時保持關係平衡感。這是擁有最健康誠實感的類型。",
      vi: "Đánh giá cao sự thành thật nhưng duy trì sự quan tâm tối thiểu. Nói sự thật nhưng diễn đạt một cách nhẹ nhàng. Nói \"cái khác có thể tốt hơn\" thay vì \"không tốt\". Có cảm giác cân bằng vừa thành thật vừa duy trì mối quan hệ. Đây là kiểu có sự thành thật lành mạnh nhất.",
      id: "Menghargai kejujuran tetapi mempertahankan pertimbangan minimum. Mengatakan kebenaran tetapi mengungkapkannya dengan lembut. Mengatakan \"yang lain mungkin lebih baik\" daripada \"tidak baik\". Memiliki rasa keseimbangan yang mempertahankan hubungan sambil tetap jujur. Ini adalah tipe dengan kejujuran paling sehat."
    },
    pros: {
      ko: "정직, 신뢰, 균형감, 배려",
      en: "Honesty, Trust, Balance, Consideration",
      ja: "正直、信頼、バランス感覚、配慮",
      'zh-CN': "诚实、信任、平衡感、体贴",
      'zh-TW': "誠實、信任、平衡感、體貼",
      vi: "Thành thật, Tin cậy, Cân bằng, Quan tâm",
      id: "Kejujuran, Kepercayaan, Keseimbangan, Pertimbangan"
    },
    cons: {
      ko: "때로는 우유부단해 보일 수 있음",
      en: "Sometimes may seem indecisive",
      ja: "時々優柔不断に見える",
      'zh-CN': "有时可能显得优柔寡断",
      'zh-TW': "有時可能顯得優柔寡斷",
      vi: "Đôi khi có vẻ do dự",
      id: "Terkadang mungkin terlihat ragu-ragu"
    },
    advice: {
      ko: "완벽해요! 진실과 배려의 균형을 잘 유지하고 있습니다. 지금처럼만 하세요!",
      en: "Perfect! You maintain a good balance between truth and consideration. Keep doing what you're doing!",
      ja: "完璧です！真実と配慮のバランスをよく保っています。このまま続けてください！",
      'zh-CN': "完美！你很好地保持了真理和体贴的平衡。继续这样做！",
      'zh-TW': "完美！你很好地保持了真理和體貼的平衡。繼續這樣做！",
      vi: "Hoàn hảo! Bạn duy trì sự cân bằng tốt giữa sự thật và sự quan tâm. Hãy tiếp tục như vậy!",
      id: "Sempurna! Anda mempertahankan keseimbangan yang baik antara kebenaran dan pertimbangan. Terus lakukan apa yang Anda lakukan!"
    },
    communicationStyle: {
      ko: "솔직하되 부드러움",
      en: "Honest but Gentle",
      ja: "正直だけど優しい",
      'zh-CN': "诚实但温和",
      'zh-TW': "誠實但溫和",
      vi: "Thành thật nhưng dịu dàng",
      id: "Jujur tapi Lembut"
    },
    compatibility: {
      best: {
        ko: ["솔직 우선형", "완벽한 균형형"],
        en: ["Honesty Priority Type", "Perfect Balance Type"],
        ja: ["正直優先型", "完璧なバランス型"],
        'zh-CN': ["诚实优先型", "完美平衡型"],
        'zh-TW': ["誠實優先型", "完美平衡型"],
        vi: ["Kiểu Ưu Tiên Thành Thật", "Kiểu Cân Bằng Hoàn Hảo"],
        id: ["Tipe Prioritas Kejujuran", "Tipe Keseimbangan Sempurna"]
      },
      good: {
        ko: ["극단의 솔직파", "배려 우선형"],
        en: ["Extreme Honesty Type", "Consideration Priority Type"],
        ja: ["極端な正直派", "配慮優先型"],
        'zh-CN': ["极端诚实型", "体贴优先型"],
        'zh-TW': ["極端誠實型", "體貼優先型"],
        vi: ["Kiểu Thành Thật Cực Đoan", "Kiểu Ưu Tiên Quan Tâm"],
        id: ["Tipe Kejujuran Ekstrem", "Tipe Prioritas Pertimbangan"]
      },
      careful: {
        ko: ["극단의 배려파"],
        en: ["Extreme Consideration Type"],
        ja: ["極端な配慮派"],
        'zh-CN': ["极端体贴型"],
        'zh-TW': ["極端體貼型"],
        vi: ["Kiểu Quan Tâm Cực Đoan"],
        id: ["Tipe Pertimbangan Ekstrem"]
      },
      difficult: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "완벽한 균형형",
      en: "Perfect Balance Type",
      ja: "完璧なバランス型",
      'zh-CN': "完美平衡型",
      'zh-TW': "完美平衡型",
      vi: "Kiểu Cân Bằng Hoàn Hảo",
      id: "Tipe Keseimbangan Sempurna"
    },
    description: {
      ko: "상황 따라 다르지! 유연한 소통자",
      en: "Different depending on the situation! Flexible communicator",
      ja: "状況によって違う！柔軟なコミュニケーター",
      'zh-CN': "根据情况不同！灵活的沟通者",
      'zh-TW': "根據情況不同！靈活的溝通者",
      vi: "Khác nhau tùy tình huống! Người giao tiếp linh hoạt",
      id: "Berbeda tergantung situasi! Komunikator fleksibel"
    },
    longDescription: {
      ko: "솔직함과 배려의 완벽한 균형을 가진 이상적인 타입입니다. 상황을 보고 판단합니다. 중요한 일은 솔직하게, 사소한 일은 배려 있게 말합니다. 관계와 진실 사이에서 최선을 선택할 줄 압니다. 융통성 있고 지혜로운 소통을 합니다.",
      en: "An ideal type with perfect balance between honesty and consideration. Judges based on the situation. Speaks honestly about important matters and considerately about trivial ones. Knows how to choose the best between relationships and truth. Communicates flexibly and wisely.",
      ja: "正直さと配慮の完璧なバランスを持つ理想的なタイプです。状況を見て判断します。重要なことは正直に、些細なことは配慮を持って話します。関係と真実の間で最善を選択することを知っています。柔軟で賢いコミュニケーションをします。",
      'zh-CN': "拥有诚实和体贴完美平衡的理想类型。根据情况判断。对重要事情诚实地说，对琐碎事情体贴地说。知道如何在关系和真理之间选择最佳。灵活而明智地沟通。",
      'zh-TW': "擁有誠實和體貼完美平衡的理想類型。根據情況判斷。對重要事情誠實地說，對瑣碎事情體貼地說。知道如何在關係和真理之間選擇最佳。靈活而明智地溝通。",
      vi: "Một kiểu lý tưởng có sự cân bằng hoàn hảo giữa sự thành thật và sự quan tâm. Đánh giá dựa trên tình huống. Nói thành thật về những việc quan trọng và quan tâm về những việc nhỏ nhặt. Biết cách chọn tốt nhất giữa mối quan hệ và sự thật. Giao tiếp một cách linh hoạt và khôn ngoan.",
      id: "Tipe ideal dengan keseimbangan sempurna antara kejujuran dan pertimbangan. Menilai berdasarkan situasi. Berbicara jujur tentang hal-hal penting dan penuh pertimbangan tentang hal-hal sepele. Tahu cara memilih yang terbaik antara hubungan dan kebenaran. Berkomunikasi dengan fleksibel dan bijaksana."
    },
    pros: {
      ko: "균형, 지혜, 융통성, 적응력",
      en: "Balance, Wisdom, Flexibility, Adaptability",
      ja: "バランス、知恵、柔軟性、適応力",
      'zh-CN': "平衡、智慧、灵活性、适应性",
      'zh-TW': "平衡、智慧、靈活性、適應性",
      vi: "Cân bằng, Trí tuệ, Linh hoạt, Thích ứng",
      id: "Keseimbangan, Kebijaksanaan, Fleksibilitas, Adaptabilitas"
    },
    cons: {
      ko: "때로 우유부단, 선택 어려움",
      en: "Sometimes indecisive, difficulty choosing",
      ja: "時々優柔不断、選択が困難",
      'zh-CN': "有时优柔寡断，选择困难",
      'zh-TW': "有時優柔寡斷，選擇困難",
      vi: "Đôi khi do dự, khó lựa chọn",
      id: "Terkadang ragu-ragu, sulit memilih"
    },
    advice: {
      ko: "이상적인 소통 능력이에요! 다만 가끔은 명확한 입장도 필요합니다.",
      en: "You have ideal communication skills! But sometimes you need a clear stance.",
      ja: "理想的なコミュニケーション能力です！ただし時々明確な立場も必要です。",
      'zh-CN': "你有理想的沟通能力！但有时也需要明确的立场。",
      'zh-TW': "你有理想的溝通能力！但有時也需要明確的立場。",
      vi: "Bạn có khả năng giao tiếp lý tưởng! Nhưng đôi khi cũng cần lập trường rõ ràng.",
      id: "Anda memiliki kemampuan komunikasi yang ideal! Tapi terkadang juga perlu posisi yang jelas."
    },
    communicationStyle: {
      ko: "상황 맞춤형, 유연함",
      en: "Situation-specific, Flexible",
      ja: "状況に応じた、柔軟",
      'zh-CN': "情境定制、灵活",
      'zh-TW': "情境定制、靈活",
      vi: "Theo tình huống, Linh hoạt",
      id: "Sesuai Situasi, Fleksibel"
    },
    compatibility: {
      best: {
        ko: ["솔직 우선형", "완벽한 균형형", "배려 우선형"],
        en: ["Honesty Priority Type", "Perfect Balance Type", "Consideration Priority Type"],
        ja: ["正直優先型", "完璧なバランス型", "配慮優先型"],
        'zh-CN': ["诚实优先型", "完美平衡型", "体贴优先型"],
        'zh-TW': ["誠實優先型", "完美平衡型", "體貼優先型"],
        vi: ["Kiểu Ưu Tiên Thành Thật", "Kiểu Cân Bằng Hoàn Hảo", "Kiểu Ưu Tiên Quan Tâm"],
        id: ["Tipe Prioritas Kejujuran", "Tipe Keseimbangan Sempurna", "Tipe Prioritas Pertimbangan"]
      },
      good: {
        ko: ["극단의 솔직파", "극단의 배려파"],
        en: ["Extreme Honesty Type", "Extreme Consideration Type"],
        ja: ["極端な正直派", "極端な配慮派"],
        'zh-CN': ["极端诚实型", "极端体贴型"],
        'zh-TW': ["極端誠實型", "極端體貼型"],
        vi: ["Kiểu Thành Thật Cực Đoan", "Kiểu Quan Tâm Cực Đoan"],
        id: ["Tipe Kejujuran Ekstrem", "Tipe Pertimbangan Ekstrem"]
      },
      careful: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      },
      difficult: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    }
  },
  {
    type: "Type4",
    emoji: "🌸",
    title: {
      ko: "배려 우선형",
      en: "Consideration Priority Type",
      ja: "配慮優先型",
      'zh-CN': "体贴优先型",
      'zh-TW': "體貼優先型",
      vi: "Kiểu Ưu Tiên Quan Tâm",
      id: "Tipe Prioritas Pertimbangan"
    },
    description: {
      ko: "마음이 다치지 않게! 따뜻한 배려파",
      en: "Don't hurt feelings! Warm considerate type",
      ja: "心を傷つけない！温かい配慮派",
      'zh-CN': "不要伤害感情！温暖的体贴派",
      'zh-TW': "不要傷害感情！溫暖的體貼派",
      vi: "Đừng làm tổn thương cảm xúc! Kiểu quan tâm ấm áp",
      id: "Jangan menyakiti perasaan! Tipe pertimbangan hangat"
    },
    longDescription: {
      ko: "배려를 더 중시하되 필요하면 진실도 말하는 타입입니다. 상대방의 기분과 감정을 먼저 생각합니다. 솔직한 말로 상처받는 것보다 조금 에둘러 말하더라도 관계를 지키는 게 중요합니다. 다정하고 따뜻하지만 때로는 진실을 말해야 할 때도 있습니다.",
      en: "Values consideration more but will tell the truth when necessary. Thinks about the other person's feelings and emotions first. It's important to maintain relationships even if it means being a bit indirect rather than hurting with honest words. Kind and warm but sometimes needs to tell the truth.",
      ja: "配慮をより重視するが、必要なら真実も話すタイプです。相手の気持ちと感情をまず考えます。正直な言葉で傷つけるより、少し遠回しに言っても関係を保つことが重要です。優しく温かいが、時には真実を話す必要もあります。",
      'zh-CN': "更重视体贴，但必要时也会说真话。首先考虑对方的感受和情绪。与其用诚实的话语伤害对方，不如稍微委婉地表达来维护关系。善良温暖，但有时也需要说真话。",
      'zh-TW': "更重視體貼，但必要時也會說真話。首先考慮對方的感受和情緒。與其用誠實的話語傷害對方，不如稍微委婉地表達來維護關係。善良溫暖，但有時也需要說真話。",
      vi: "Đánh giá cao sự quan tâm hơn nhưng sẽ nói sự thật khi cần thiết. Nghĩ về cảm xúc và tình cảm của người khác trước. Quan trọng là duy trì mối quan hệ ngay cả khi có nghĩa là phải gián tiếp một chút thay vì làm tổn thương bằng lời thành thật. Tốt bụng và ấm áp nhưng đôi khi cần nói sự thật.",
      id: "Menghargai pertimbangan lebih tetapi akan mengatakan kebenaran ketika diperlukan. Memikirkan perasaan dan emosi orang lain terlebih dahulu. Penting untuk mempertahankan hubungan bahkan jika itu berarti sedikit tidak langsung daripada menyakiti dengan kata-kata jujur. Baik dan hangat tetapi terkadang perlu mengatakan kebenaran."
    },
    pros: {
      ko: "배려심, 다정함, 관계 유지, 따뜻함",
      en: "Consideration, Kindness, Relationship Maintenance, Warmth",
      ja: "配慮心、優しさ、関係維持、温かさ",
      'zh-CN': "体贴心、善良、关系维护、温暖",
      'zh-TW': "體貼心、善良、關係維護、溫暖",
      vi: "Sự quan tâm, Tốt bụng, Duy trì mối quan hệ, Ấm áp",
      id: "Pertimbangan, Kebaikan, Pemeliharaan Hubungan, Kehangatan"
    },
    cons: {
      ko: "솔직함 부족, 오해 가능성",
      en: "Lack of Honesty, Possibility of Misunderstanding",
      ja: "正直さ不足、誤解の可能性",
      'zh-CN': "缺乏诚实、误解可能性",
      'zh-TW': "缺乏誠實、誤解可能性",
      vi: "Thiếu thành thật, Khả năng hiểu lầm",
      id: "Kurang Kejujuran, Kemungkinan Kesalahpahaman"
    },
    advice: {
      ko: "배려는 좋지만 때로는 솔직하게 말하는 것이 진짜 배려일 수 있어요!",
      en: "Consideration is good, but sometimes being honest can be the real consideration!",
      ja: "配慮は良いですが、時には正直に話すことが本当の配慮かもしれません！",
      'zh-CN': "体贴很好，但有时诚实可能是真正的体贴！",
      'zh-TW': "體貼很好，但有時誠實可能是真正的體貼！",
      vi: "Sự quan tâm là tốt, nhưng đôi khi thành thật có thể là sự quan tâm thực sự!",
      id: "Pertimbangan itu baik, tapi terkadang jujur bisa menjadi pertimbangan yang sebenarnya!"
    },
    communicationStyle: {
      ko: "부드럽고 간접적",
      en: "Gentle and Indirect",
      ja: "優しく間接的",
      'zh-CN': "温和而间接",
      'zh-TW': "溫和而間接",
      vi: "Dịu dàng và gián tiếp",
      id: "Lembut dan Tidak Langsung"
    },
    compatibility: {
      best: {
        ko: ["배려 우선형", "극단의 배려파"],
        en: ["Consideration Priority Type", "Extreme Consideration Type"],
        ja: ["配慮優先型", "極端な配慮派"],
        'zh-CN': ["体贴优先型", "极端体贴型"],
        'zh-TW': ["體貼優先型", "極端體貼型"],
        vi: ["Kiểu Ưu Tiên Quan Tâm", "Kiểu Quan Tâm Cực Đoan"],
        id: ["Tipe Prioritas Pertimbangan", "Tipe Pertimbangan Ekstrem"]
      },
      good: {
        ko: ["완벽한 균형형"],
        en: ["Perfect Balance Type"],
        ja: ["完璧なバランス型"],
        'zh-CN': ["完美平衡型"],
        'zh-TW': ["完美平衡型"],
        vi: ["Kiểu Cân Bằng Hoàn Hảo"],
        id: ["Tipe Keseimbangan Sempurna"]
      },
      careful: {
        ko: ["극단의 솔직파"],
        en: ["Extreme Honesty Type"],
        ja: ["極端な正直派"],
        'zh-CN': ["极端诚实型"],
        'zh-TW': ["極端誠實型"],
        vi: ["Kiểu Thành Thật Cực Đoan"],
        id: ["Tipe Kejujuran Ekstrem"]
      },
      difficult: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    }
  },
  {
    type: "Type5",
    emoji: "🕊️",
    title: {
      ko: "극단의 배려파",
      en: "Extreme Consideration Type",
      ja: "極端な配慮派",
      'zh-CN': "极端体贴型",
      'zh-TW': "極端體貼型",
      vi: "Kiểu Quan Tâm Cực Đoan",
      id: "Tipe Pertimbangan Ekstrem"
    },
    description: {
      ko: "절대 상처 안 줘요! 평화주의자",
      en: "Never hurt anyone! Pacifist",
      ja: "絶対傷つけない！平和主義者",
      'zh-CN': "绝不伤害！和平主义者",
      'zh-TW': "絕不傷害！和平主義者",
      vi: "Không bao giờ làm tổn thương! Người theo chủ nghĩa hòa bình",
      id: "Tidak pernah menyakiti! Pasifis"
    },
    longDescription: {
      ko: "배려를 최우선으로 여깁니다. 상처 주는 말은 절대 하지 않고, 진실도 숨길 수 있습니다. \"거짓말이라도 기분 좋게\"라고 생각합니다. 관계가 틀어지는 것을 극도로 두려워합니다. 착하고 다정하지만 진실한 관계를 만들기 어렵습니다. 과도한 배려는 오히려 불신을 만들 수 있습니다.",
      en: "Prioritizes consideration above all else. Never says hurtful words and can even hide the truth. Thinks \"even lies are fine if they make people feel good.\" Extremely afraid of relationships falling apart. Kind and caring but difficult to build genuine relationships. Excessive consideration can actually create distrust.",
      ja: "配慮を最優先とします。傷つける言葉は絶対に言わず、真実も隠すことができます。「嘘でも気分良く」と考えています。関係が崩れることを極度に恐れています。優しく思いやりがあるが、真実の関係を築くのは困難です。過度な配慮は逆に不信を生むことがあります。",
      'zh-CN': "将体贴放在首位。绝对不说伤害性的话语，甚至可以隐藏真相。认为\"即使是谎言，只要让人感觉好就行\"。极度害怕关系破裂。善良体贴但难以建立真正的关系。过度的体贴反而可能造成不信任。",
      'zh-TW': "將體貼放在首位。絕對不說傷害性的話語，甚至可以隱藏真相。認為「即使是謊言，只要讓人感覺好就行」。極度害怕關係破裂。善良體貼但難以建立真正的關係。過度的體貼反而可能造成不信任。",
      vi: "Ưu tiên sự quan tâm hơn tất cả. Không bao giờ nói những lời làm tổn thương và thậm chí có thể che giấu sự thật. Nghĩ rằng \"ngay cả lời nói dối cũng ổn nếu làm người ta cảm thấy tốt.\" Cực kỳ sợ mối quan hệ tan vỡ. Tốt bụng và quan tâm nhưng khó xây dựng mối quan hệ chân thật. Sự quan tâm quá mức thực sự có thể tạo ra sự không tin tưởng.",
      id: "Memprioritaskan pertimbangan di atas segalanya. Tidak pernah mengatakan kata-kata yang menyakitkan dan bahkan dapat menyembunyikan kebenaran. Berpikir \"bahkan kebohongan pun baik-baik saja jika membuat orang merasa baik.\" Sangat takut hubungan runtuh. Baik dan peduli tetapi sulit membangun hubungan yang genuine. Pertimbangan yang berlebihan justru dapat menciptakan ketidakpercayaan."
    },
    pros: {
      ko: "다정함, 평화로움, 상처 안 줌",
      en: "Kindness, Peacefulness, Never Hurt",
      ja: "優しさ、平和、傷つけない",
      'zh-CN': "善良、和平、不伤害",
      'zh-TW': "善良、和平、不傷害",
      vi: "Tốt bụng, Hòa bình, Không làm tổn thương",
      id: "Kebaikan, Kedamaian, Tidak Menyakiti"
    },
    cons: {
      ko: "진실성 부족, 신뢰 어려움, 진짜 관계 어려움",
      en: "Lack of Authenticity, Difficulty Trusting, Difficulty Building Real Relationships",
      ja: "真実性不足、信頼困難、本当の関係困難",
      'zh-CN': "缺乏真实性、难以信任、难以建立真正关系",
      'zh-TW': "缺乏真實性、難以信任、難以建立真正關係",
      vi: "Thiếu tính chân thực, Khó tin tưởng, Khó xây dựng mối quan hệ thật",
      id: "Kurang Keaslian, Sulit Mempercayai, Sulit Membangun Hubungan Nyata"
    },
    advice: {
      ko: "배려도 좋지만 진실 없는 관계는 오래가지 못해요. 용기를 내서 솔직해지는 연습이 필요합니다.",
      en: "Consideration is good, but relationships without truth don't last long. You need to practice being honest with courage.",
      ja: "配慮も良いですが、真実のない関係は長続きしません。勇気を出して正直になる練習が必要です。",
      'zh-CN': "体贴很好，但没有真实的关系不会长久。你需要练习勇敢地诚实。",
      'zh-TW': "體貼很好，但沒有真實的關係不會長久。你需要練習勇敢地誠實。",
      vi: "Sự quan tâm là tốt, nhưng mối quan hệ không có sự thật sẽ không kéo dài. Bạn cần thực hành thành thật với lòng dũng cảm.",
      id: "Pertimbangan itu baik, tapi hubungan tanpa kebenaran tidak akan bertahan lama. Anda perlu berlatih jujur dengan keberanian."
    },
    communicationStyle: {
      ko: "매우 간접적, 회피적",
      en: "Very Indirect, Avoidant",
      ja: "非常に間接的、回避的",
      'zh-CN': "非常间接、回避性",
      'zh-TW': "非常間接、迴避性",
      vi: "Rất gián tiếp, Tránh né",
      id: "Sangat Tidak Langsung, Menghindari"
    },
    compatibility: {
      best: {
        ko: ["극단의 배려파"],
        en: ["Extreme Consideration Type"],
        ja: ["極端な配慮派"],
        'zh-CN': ["极端体贴型"],
        'zh-TW': ["極端體貼型"],
        vi: ["Kiểu Quan Tâm Cực Đoan"],
        id: ["Tipe Pertimbangan Ekstrem"]
      },
      good: {
        ko: ["배려 우선형"],
        en: ["Consideration Priority Type"],
        ja: ["配慮優先型"],
        'zh-CN': ["体贴优先型"],
        'zh-TW': ["體貼優先型"],
        vi: ["Kiểu Ưu Tiên Quan Tâm"],
        id: ["Tipe Prioritas Pertimbangan"]
      },
      careful: {
        ko: ["극단의 솔직파", "솔직 우선형"],
        en: ["Extreme Honesty Type", "Honesty Priority Type"],
        ja: ["極端な正直派", "正直優先型"],
        'zh-CN': ["极端诚实型", "诚实优先型"],
        'zh-TW': ["極端誠實型", "誠實優先型"],
        vi: ["Kiểu Thành Thật Cực Đoan", "Kiểu Ưu Tiên Thành Thật"],
        id: ["Tipe Kejujuran Ekstrem", "Tipe Prioritas Kejujuran"]
      },
      difficult: {
        ko: [],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    }
  }
];

export function calculateHonestyResult(answers: Record<string, number>[]): string {
  const totalScores: Record<string, number> = {};

  // 모든 답변의 점수를 합산
  answers.forEach(answer => {
    Object.entries(answer).forEach(([key, value]) => {
      totalScores[key] = (totalScores[key] || 0) + value;
    });
  });

  // 솔직함과 배려 점수 계산
  const honestyScore = totalScores['솔직'] || 0;
  const considerationScore = totalScores['배려'] || 0;

  // 점수에 따른 결과 결정
  if (honestyScore >= 22) {
    return "Type1"; // 극단의 솔직파
  } else if (honestyScore >= 16) {
    return "Type2"; // 솔직 우선형
  } else if (honestyScore >= 10 && considerationScore >= 10) {
    return "Type3"; // 완벽한 균형형
  } else if (considerationScore >= 16) {
    return "Type4"; // 배려 우선형
  } else {
    return "Type5"; // 극단의 배려파
  }
}
