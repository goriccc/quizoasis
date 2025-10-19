export interface FirstImpressionQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface FirstImpressionResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  detailedDescription: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  suitableJobs: Record<string, string>[];
  advice: Record<string, string>;
  compatibleTypes: Record<string, string>[];
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const firstImpressionQuestions: FirstImpressionQuestion[] = [
  {
    id: 1,
    question: {
      ko: "처음 만난 사람과 대화할 때, 당신은?",
      en: "When talking to someone you just met, you:",
      ja: "初めて会った人と話すとき、あなたは？",
      'zh-CN': "当你和刚认识的人交谈时，你会：",
      'zh-TW': "當你和剛認識的人交談時，你會：",
      vi: "Khi nói chuyện với người mới gặp, bạn:",
      id: "Saat berbicara dengan seseorang yang baru dikenal, Anda:"
    },
    options: [
      {
        text: {
          ko: "먼저 말을 걸고 친근하게 다가감",
          en: "Start the conversation first and approach friendly",
          ja: "先に話しかけて親しみやすくアプローチする",
          'zh-CN': "主动搭话并友善地接近",
          'zh-TW': "主動搭話並友善地接近",
          vi: "Chủ động bắt chuyện và tiếp cận thân thiện",
          id: "Memulai percakapan terlebih dahulu dan mendekati dengan ramah"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "상대가 말을 걸 때까지 기다림",
          en: "Wait until the other person starts talking",
          ja: "相手が話しかけるまで待つ",
          'zh-CN': "等待对方先开口",
          'zh-TW': "等待對方先開口",
          vi: "Chờ đến khi người khác bắt chuyện",
          id: "Menunggu sampai orang lain mulai berbicara"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "밝은 표정으로 적극적으로 대화",
          en: "Talk actively with a bright expression",
          ja: "明るい表情で積極的に話す",
          'zh-CN': "表情明亮地积极交谈",
          'zh-TW': "表情明亮地積極交談",
          vi: "Nói chuyện tích cực với biểu cảm sáng sủa",
          id: "Berbicara aktif dengan ekspresi cerah"
        },
        scores: { Type3: 3, Type6: 1 }
      },
      {
        text: {
          ko: "차분하게 상대를 관찰하며 반응",
          en: "Respond calmly while observing the other person",
          ja: "落ち着いて相手を観察しながら反応する",
          'zh-CN': "冷静地观察对方并做出反应",
          'zh-TW': "冷靜地觀察對方並做出反應",
          vi: "Phản ứng bình tĩnh trong khi quan sát người khác",
          id: "Merespons dengan tenang sambil mengamati orang lain"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "새로운 모임에 갔을 때 당신의 모습은?",
      en: "When you go to a new gathering, you:",
      ja: "新しい集まりに参加したとき、あなたの様子は？",
      'zh-CN': "当你参加新的聚会时，你的表现是：",
      'zh-TW': "當你參加新的聚會時，你的表現是：",
      vi: "Khi bạn tham gia một cuộc tụ họp mới, bạn:",
      id: "Ketika Anda menghadiri pertemuan baru, Anda:"
    },
    options: [
      {
        text: {
          ko: "여러 사람과 두루두루 인사하고 다님",
          en: "Greet many people and move around",
          ja: "多くの人に挨拶して回る",
          'zh-CN': "与许多人打招呼并四处走动",
          'zh-TW': "與許多人打招呼並四處走動",
          vi: "Chào hỏi nhiều người và đi lại khắp nơi",
          id: "Menyapa banyak orang dan berkeliling"
        },
        scores: { Type1: 3, Type6: 1 }
      },
      {
        text: {
          ko: "구석에서 편한 사람 몇 명과만 대화",
          en: "Talk only with a few comfortable people in the corner",
          ja: "隅で気の合う数人とだけ話す",
          'zh-CN': "在角落里只和几个熟悉的人交谈",
          'zh-TW': "在角落裡只和幾個熟悉的人交談",
          vi: "Chỉ nói chuyện với một vài người quen ở góc",
          id: "Hanya berbicara dengan beberapa orang yang nyaman di sudut"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "분위기 메이커 역할을 자연스럽게 함",
          en: "Naturally take on the role of mood maker",
          ja: "自然にムードメーカーの役割をする",
          'zh-CN': "自然地扮演气氛制造者的角色",
          'zh-TW': "自然地扮演氣氛製造者的角色",
          vi: "Tự nhiên đảm nhận vai trò người tạo không khí",
          id: "Secara alami mengambil peran sebagai pembuat suasana"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "조용히 앉아서 상황을 파악함",
          en: "Sit quietly and understand the situation",
          ja: "静かに座って状況を把握する",
          'zh-CN': "安静地坐着了解情况",
          'zh-TW': "安靜地坐著了解情況",
          vi: "Ngồi yên lặng và nắm bắt tình huống",
          id: "Duduk diam-diam dan memahami situasi"
        },
        scores: { Type2: 3, Type5: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "당신의 평소 표정은?",
      en: "What is your usual expression?",
      ja: "あなたの普段の表情は？",
      'zh-CN': "你平时的表情是怎样的？",
      'zh-TW': "你平時的表情是怎樣的？",
      vi: "Biểu cảm thường ngày của bạn như thế nào?",
      id: "Ekspresi biasa Anda seperti apa?"
    },
    options: [
      {
        text: {
          ko: "부드러운 미소를 자주 짓는 편",
          en: "Often smile gently",
          ja: "優しい微笑みをよくする方",
          'zh-CN': "经常露出温柔的笑容",
          'zh-TW': "經常露出溫柔的笑容",
          vi: "Thường xuyên mỉm cười dịu dàng",
          id: "Sering tersenyum dengan lembut"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "무표정하거나 진지한 편",
          en: "Expressionless or serious",
          ja: "無表情か真剣な方",
          'zh-CN': "面无表情或严肃",
          'zh-TW': "面無表情或嚴肅",
          vi: "Không biểu cảm hoặc nghiêm túc",
          id: "Tanpa ekspresi atau serius"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "밝고 활발한 표정",
          en: "Bright and lively expression",
          ja: "明るく活発な表情",
          'zh-CN': "明亮活跃的表情",
          'zh-TW': "明亮活躍的表情",
          vi: "Biểu cảm sáng sủa và năng động",
          id: "Ekspresi cerah dan bersemangat"
        },
        scores: { Type3: 3, Type6: 1 }
      },
      {
        text: {
          ko: "차분하고 침착한 표정",
          en: "Calm and composed expression",
          ja: "落ち着いて冷静な表情",
          'zh-CN': "冷静沉着的表情",
          'zh-TW': "冷靜沉著的表情",
          vi: "Biểu cảm bình tĩnh và điềm tĩnh",
          id: "Ekspresi tenang dan terkendali"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "처음 만난 사람에게 말을 걸 때?",
      en: "When talking to someone you just met?",
      ja: "初めて会った人に話しかけるときは？",
      'zh-CN': "当你和刚认识的人搭话时？",
      'zh-TW': "當你和剛認識的人搭話時？",
      vi: "Khi nói chuyện với người mới gặp?",
      id: "Saat berbicara dengan seseorang yang baru dikenal?"
    },
    options: [
      {
        text: {
          ko: "편하게 일상적인 주제로 시작",
          en: "Start with comfortable everyday topics",
          ja: "気軽に日常的な話題から始める",
          'zh-CN': "轻松地从日常话题开始",
          'zh-TW': "輕鬆地從日常話題開始",
          vi: "Bắt đầu với những chủ đề hàng ngày thoải mái",
          id: "Mulai dengan topik sehari-hari yang nyaman"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "필요할 때만 최소한으로",
          en: "Only when necessary, minimally",
          ja: "必要な時だけ最小限に",
          'zh-CN': "只在必要时，最少限度地",
          'zh-TW': "只在必要時，最少限度地",
          vi: "Chỉ khi cần thiết, tối thiểu",
          id: "Hanya ketika diperlukan, minimal"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "재미있는 얘기나 농담으로 시작",
          en: "Start with funny stories or jokes",
          ja: "面白い話や冗談で始める",
          'zh-CN': "从有趣的故事或笑话开始",
          'zh-TW': "從有趣的故事或笑話開始",
          vi: "Bắt đầu bằng những câu chuyện vui hoặc trò đùa",
          id: "Mulai dengan cerita lucu atau lelucon"
        },
        scores: { Type6: 8 }
      },
      {
        text: {
          ko: "예의 바르고 격식 있게 인사",
          en: "Greet politely and formally",
          ja: "礼儀正しく格式張って挨拶する",
          'zh-CN': "礼貌而正式地打招呼",
          'zh-TW': "禮貌而正式地打招呼",
          vi: "Chào hỏi lịch sự và trang trọng",
          id: "Menyapa dengan sopan dan formal"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신의 목소리 톤은?",
      en: "What is your voice tone?",
      ja: "あなたの声のトーンは？",
      'zh-CN': "你的声音音调是怎样的？",
      'zh-TW': "你的聲音音調是怎樣的？",
      vi: "Giọng nói của bạn như thế nào?",
      id: "Nada suara Anda seperti apa?"
    },
    options: [
      {
        text: {
          ko: "따뜻하고 부드러운 편",
          en: "Warm and soft",
          ja: "温かくて優しい方",
          'zh-CN': "温暖柔和",
          'zh-TW': "溫暖柔和",
          vi: "Ấm áp và dịu dàng",
          id: "Hangat dan lembut"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "낮고 차분한 편",
          en: "Low and calm",
          ja: "低くて落ち着いた方",
          'zh-CN': "低沉冷静",
          'zh-TW': "低沉冷靜",
          vi: "Trầm và bình tĩnh",
          id: "Rendah dan tenang"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "밝고 활기찬 편",
          en: "Bright and energetic",
          ja: "明るくて活気のある方",
          'zh-CN': "明亮有活力",
          'zh-TW': "明亮有活力",
          vi: "Sáng sủa và năng động",
          id: "Cerah dan bersemangat"
        },
        scores: { Type3: 3, Type6: 1 }
      },
      {
        text: {
          ko: "안정적이고 신뢰감 있는 편",
          en: "Stable and trustworthy",
          ja: "安定していて信頼できる方",
          'zh-CN': "稳定可靠",
          'zh-TW': "穩定可靠",
          vi: "Ổn định và đáng tin cậy",
          id: "Stabil dan dapat dipercaya"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "첫 만남에서 당신의 옷차림은?",
      en: "What is your outfit for the first meeting?",
      ja: "初対面でのあなたの服装は？",
      'zh-CN': "第一次见面时你的着装是怎样的？",
      'zh-TW': "第一次見面時你的著裝是怎樣的？",
      vi: "Trang phục của bạn trong lần gặp đầu tiên như thế nào?",
      id: "Pakaian Anda saat pertemuan pertama seperti apa?"
    },
    options: [
      {
        text: {
          ko: "편안하고 친근한 캐주얼",
          en: "Comfortable and friendly casual",
          ja: "快適で親しみやすいカジュアル",
          'zh-CN': "舒适友善的休闲装",
          'zh-TW': "舒適友善的休閒裝",
          vi: "Trang phục casual thoải mái và thân thiện",
          id: "Kasual yang nyaman dan ramah"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "세련되고 개성 있는 스타일",
          en: "Sophisticated and unique style",
          ja: "洗練されていて個性的なスタイル",
          'zh-CN': "精致有个性的风格",
          'zh-TW': "精緻有個性的風格",
          vi: "Phong cách tinh tế và cá tính",
          id: "Gaya canggih dan unik"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "밝은 색상의 활동적인 옷",
          en: "Bright colored active clothes",
          ja: "明るい色の活動的な服",
          'zh-CN': "明亮颜色的运动装",
          'zh-TW': "明亮顏色的運動裝",
          vi: "Trang phục hoạt động màu sáng",
          id: "Pakaian aktif warna cerah"
        },
        scores: { Type3: 3, Type6: 1 }
      },
      {
        text: {
          ko: "단정하고 깔끔한 정장 스타일",
          en: "Neat and clean formal style",
          ja: "きちんとして清潔なスーツスタイル",
          'zh-CN': "整洁干净的正装风格",
          'zh-TW': "整潔乾淨的正裝風格",
          vi: "Phong cách vest gọn gàng và sạch sẽ",
          id: "Gaya formal rapi dan bersih"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "누군가 당신에게 도움을 청하면?",
      en: "When someone asks you for help?",
      ja: "誰かがあなたに助けを求めたら？",
      'zh-CN': "当有人向你求助时？",
      'zh-TW': "當有人向你求助時？",
      vi: "Khi ai đó xin bạn giúp đỡ?",
      id: "Ketika seseorang meminta bantuan kepada Anda?"
    },
    options: [
      {
        text: {
          ko: "그럼요! 기꺼이 도와줌",
          en: "Of course! I'll help gladly",
          ja: "もちろん！喜んで手伝います",
          'zh-CN': "当然！很乐意帮忙",
          'zh-TW': "當然！很樂意幫忙",
          vi: "Tất nhiên! Tôi sẵn lòng giúp đỡ",
          id: "Tentu saja! Saya dengan senang hati membantu"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "상황 보고 판단해서 결정",
          en: "Judge the situation and decide",
          ja: "状況を見て判断して決める",
          'zh-CN': "根据情况判断后决定",
          'zh-TW': "根據情況判斷後決定",
          vi: "具体 tình huống và quyết định",
          id: "Menilai situasi dan memutuskan"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "당연하죠! 적극적으로 나섬",
          en: "Of course! I step forward actively",
          ja: "もちろん！積極的に出て行く",
          'zh-CN': "当然！积极上前",
          'zh-TW': "當然！積極上前",
          vi: "Tất nhiên! Tôi tích cực tiến lên",
          id: "Tentu saja! Saya maju dengan aktif"
        },
        scores: { Type3: 3, Type6: 1 }
      },
      {
        text: {
          ko: "어떻게 도와드릴까요? 신중하게 대응",
          en: "How can I help you? Respond carefully",
          ja: "どのようにお手伝いしましょうか？慎重に対応する",
          'zh-CN': "我该如何帮助您？谨慎回应",
          'zh-TW': "我該如何幫助您？謹慎回應",
          vi: "Tôi có thể giúp bạn như thế nào? Phản hồi cẩn thận",
          id: "Bagaimana saya bisa membantu Anda? Merespons dengan hati-hati"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "처음 만난 사람과의 거리는?",
      en: "What distance do you keep with someone you just met?",
      ja: "初めて会った人との距離は？",
      'zh-CN': "你和刚认识的人保持什么距离？",
      'zh-TW': "你和剛認識的人保持什麼距離？",
      vi: "Bạn giữ khoảng cách như thế nào với người mới gặp?",
      id: "Jarak apa yang Anda jaga dengan seseorang yang baru dikenal?"
    },
    options: [
      {
        text: {
          ko: "가까운 편, 스킨십도 자연스러움",
          en: "Close, physical contact feels natural",
          ja: "近い方、スキンシップも自然",
          'zh-CN': "比较亲近，身体接触也很自然",
          'zh-TW': "比較親近，身體接觸也很自然",
          vi: "Gần gũi, tiếp xúc thể chất cũng tự nhiên",
          id: "Dekat, kontak fisik terasa alami"
        },
        scores: { Type1: 3, Type3: 1 }
      },
      {
        text: {
          ko: "적당한 거리 유지",
          en: "Maintain appropriate distance",
          ja: "適度な距離を保つ",
          'zh-CN': "保持适当距离",
          'zh-TW': "保持適當距離",
          vi: "Duy trì khoảng cách phù hợp",
          id: "Menjaga jarak yang sesuai"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "가까운 편, 친근하게 어깨도 툭툭",
          en: "Close, friendly shoulder taps",
          ja: "近い方、親しみやすく肩もポンポン",
          'zh-CN': "比较亲近，友好地拍拍肩膀",
          'zh-TW': "比較親近，友好地拍拍肩膀",
          vi: "Gần gũi, thân thiện vỗ vai",
          id: "Dekat, ramah menepuk bahu"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "예의 바른 거리 유지",
          en: "Maintain polite distance",
          ja: "礼儀正しい距離を保つ",
          'zh-CN': "保持礼貌距离",
          'zh-TW': "保持禮貌距離",
          vi: "Duy trì khoảng cách lịch sự",
          id: "Menjaga jarak yang sopan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "대화 중 당신의 리액션은?",
      en: "What is your reaction during conversation?",
      ja: "会話中のあなたのリアクションは？",
      'zh-CN': "对话中你的反应是怎样的？",
      'zh-TW': "對話中你的反應是怎樣的？",
      vi: "Phản ứng của bạn trong cuộc trò chuyện như thế nào?",
      id: "Reaksi Anda selama percakapan seperti apa?"
    },
    options: [
      {
        text: {
          ko: "그렇구나, 맞아 공감 많이 함",
          en: "I see, that's right, I empathize a lot",
          ja: "そうなんだ、そうそう、共感をたくさんする",
          'zh-CN': "原来如此，对的，很有共鸣",
          'zh-TW': "原來如此，對的，很有共鳴",
          vi: "Ồ, đúng rồi, tôi đồng cảm nhiều",
          id: "Oh begitu, benar, saya banyak berempati"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "고개만 끄덕이거나 최소한의 반응",
          en: "Just nod or minimal reaction",
          ja: "首を振るだけか最小限の反応",
          'zh-CN': "只是点头或最小反应",
          'zh-TW': "只是點頭或最小反應",
          vi: "Chỉ gật đầu hoặc phản ứng tối thiểu",
          id: "Hanya mengangguk atau reaksi minimal"
        },
        scores: { Type2: 3, Type4: 8 }
      },
      {
        text: {
          ko: "진짜?, 대박! 크게 반응",
          en: "Really? Awesome! React big",
          ja: "本当？すごい！大きく反応する",
          'zh-CN': "真的吗？太棒了！反应很大",
          'zh-TW': "真的嗎？太棒了！反應很大",
          vi: "Thật sao? Tuyệt vời! Phản ứng lớn",
          id: "Benarkah? Luar biasa! Bereaksi besar"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "차분하게 듣고 적절히 반응",
          en: "Listen calmly and respond appropriately",
          ja: "落ち着いて聞いて適切に対応する",
          'zh-CN': "冷静地倾听并适当回应",
          'zh-TW': "冷靜地傾聽並適當回應",
          vi: "Lắng nghe bình tĩnh và phản ứng thích hợp",
          id: "Mendengarkan dengan tenang dan merespons dengan tepat"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "모르는 사람이 당신을 보고 느끼는 것은?",
      en: "What do strangers feel when they see you?",
      ja: "知らない人があなたを見て感じることは？",
      'zh-CN': "陌生人看到你时感觉如何？",
      'zh-TW': "陌生人看到你時感覺如何？",
      vi: "Người lạ cảm thấy gì khi nhìn thấy bạn?",
      id: "Apa yang dirasakan orang asing ketika melihat Anda?"
    },
    options: [
      {
        text: {
          ko: "편하고 말 걸기 쉬운 사람",
          en: "A comfortable and easy person to talk to",
          ja: "快適で話しかけやすい人",
          'zh-CN': "舒适容易搭话的人",
          'zh-TW': "舒適容易搭話的人",
          vi: "Người thoải mái và dễ bắt chuyện",
          id: "Orang yang nyaman dan mudah diajak bicara"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "쉽게 다가가기 어려운 사람",
          en: "A person who is difficult to approach",
          ja: "簡単に近づきにくい人",
          'zh-CN': "难以接近的人",
          'zh-TW': "難以接近的人",
          vi: "Người khó tiếp cận",
          id: "Orang yang sulit didekati"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "재미있고 함께 있으면 즐거운 사람",
          en: "A fun and enjoyable person to be with",
          ja: "面白くて一緒にいると楽しい人",
          'zh-CN': "有趣且在一起很快乐的人",
          'zh-TW': "有趣且在一起很快樂的人",
          vi: "Người thú vị và vui vẻ khi ở cùng",
          id: "Orang yang menyenangkan dan menyenangkan untuk diajak bersama"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "믿음직하고 의지되는 사람",
          en: "A trustworthy and reliable person",
          ja: "信頼できて頼れる人",
          'zh-CN': "可信赖和可靠的人",
          'zh-TW': "可信賴和可靠 Reliable person",
          vi: "Người đáng tin cậy và có thể dựa vào",
          id: "Orang yang dapat dipercaya dan diandalkan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "SNS 프로필 사진 스타일은?",
      en: "What is your SNS profile photo style?",
      ja: "SNSプロフィール写真のスタイルは？",
      'zh-CN': "你的SNS头像照片风格是怎样的？",
      'zh-TW': "你的SNS頭像照片風格是怎樣的？",
      vi: "Phong cách ảnh đại diện SNS của bạn như thế nào?",
      id: "Gaya foto profil SNS Anda seperti apa?"
    },
    options: [
      {
        text: {
          ko: "밝게 웃는 자연스러운 사진",
          en: "Bright smiling natural photo",
          ja: "明るく笑っている自然な写真",
          'zh-CN': "明亮微笑的自然照片",
          'zh-TW': "明亮微笑的自然照片",
          vi: "Ảnh tự nhiên cười sáng sủa",
          id: "Foto alami tersenyum cerah"
        },
        scores: { Type1: 3, Type3: 1 }
      },
      {
        text: {
          ko: "감성적이거나 측면 사진",
          en: "Emotional or side photo",
          ja: "感情的か横顔の写真",
          'zh-CN': "感性或侧面照片",
          'zh-TW': "感性或側面照片",
          vi: "Ảnh cảm xúc hoặc ảnh nghiêng",
          id: "Foto emosional atau foto samping"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "재미있거나 독특한 포즈",
          en: "Fun or unique pose",
          ja: "面白いか独特なポーズ",
          'zh-CN': "有趣或独特的姿势",
          'zh-TW': "有趣或獨特的姿勢",
          vi: "Tư thế thú vị hoặc độc đáo",
          id: "Pose yang menyenangkan atau unik"
        },
        scores: { Type6: 8 }
      },
      {
        text: {
          ko: "정면에서 찍은 단정한 사진",
          en: "Neat photo taken from the front",
          ja: "正面から撮ったきちんとした写真",
          'zh-CN': "正面拍摄的整洁照片",
          'zh-TW': "正面拍攝的整潔照片",
          vi: "Ảnh gọn gàng chụp từ phía trước",
          id: "Foto rapi yang diambil dari depan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "첫 만남 후 상대가 당신을 기억하는 이유는?",
      en: "Why does the other person remember you after the first meeting?",
      ja: "初対面後、相手があなたを覚えている理由は？",
      'zh-CN': "第一次见面后对方记住你的原因是？",
      'zh-TW': "第一次見面後對方記住你的原因是？",
      vi: "Tại sao người khác nhớ bạn sau lần gặp đầu tiên?",
      id: "Mengapa orang lain mengingat Anda setelah pertemuan pertama?"
    },
    options: [
      {
        text: {
          ko: "따뜻하고 친절했던 태도",
          en: "Warm and kind attitude",
          ja: "温かくて親切だった態度",
          'zh-CN': "温暖友善的态度",
          'zh-TW': "溫暖友善的態度",
          vi: "Thái độ ấm áp và tử tế",
          id: "Sikap hangat dan baik"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "독특하고 인상적인 분위기",
          en: "Unique and impressive atmosphere",
          ja: "独特で印象的な雰囲気",
          'zh-CN': "独特令人印象深刻的氛围",
          'zh-TW': "獨特令人印象深刻的氛圍",
          vi: "Bầu không khí độc đáo và ấn tượng",
          id: "Suasana unik dan mengesankan"
        },
        scores: { Type2: 3, Type4: 2 }
      },
      {
        text: {
          ko: "밝고 긍정적인 에너지",
          en: "Bright and positive energy",
          ja: "明るくてポジティブなエネルギー",
          'zh-CN': "明亮积极的能量",
          'zh-TW': "明亮積極的能量",
          vi: "Năng lượng sáng sủa và tích cực",
          id: "Energi cerah dan positif"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "믿음직하고 진중한 모습",
          en: "Trustworthy and serious appearance",
          ja: "信頼できて真剣な姿",
          'zh-CN': "可靠严肃的样子",
          'zh-TW': "可靠嚴肅的樣子",
          vi: "Vẻ ngoài đáng tin cậy và nghiêm túc",
          id: "Penampilan dapat dipercaya dan serius"
        },
        scores: { Type5: 3 }
      }
    ]
  }
];

export const firstImpressionResults: FirstImpressionResult[] = [
  {
    type: "Type1",
    emoji: "🌸",
    title: {
      ko: "따뜻한 친근형",
      en: "Warm and Friendly Type",
      ja: "温かい親しみやすい型",
      'zh-CN': "温暖友善型",
      'zh-TW': "溫暖友善型",
      vi: "Thân thiện ấm áp",
      id: "Tipe Ramah Hangat"
    },
    description: {
      ko: "누구나 편하게 다가갈 수 있는 사람",
      en: "Someone everyone can comfortably approach",
      ja: "誰でも気軽に近づける人",
      'zh-CN': "任何人都能轻松接近的人",
      'zh-TW': "任何人都能輕鬆接近的人",
      vi: "Người mà ai cũng có thể tiếp cận một cách thoải mái",
      id: "Seseorang yang bisa didekati dengan nyaman oleh siapa saja"
    },
    detailedDescription: {
      ko: "부드러운 미소와 따뜻한 말투로 사람들에게 편안함을 줍니다. 친근하고 접근하기 쉬워서 처음 만나도 금방 친해집니다. 공감 능력이 뛰어나고 배려심이 많아 좋은 첫인상을 남깁니다. 다만 너무 친근해서 가볍게 보일 수 있으니 상황에 따라 적절한 거리감도 필요합니다.",
      en: "You give comfort to people with a gentle smile and warm tone. You're friendly and approachable, making it easy to become close even when meeting for the first time. You have excellent empathy and caring nature, leaving a good first impression. However, being too friendly might make you seem light, so you need to maintain appropriate distance depending on the situation.",
      ja: "優しい笑顔と温かい口調で人々に安らぎを与えます。親しみやすく近づきやすいため、初めて会ってもすぐに仲良くなれます。共感能力に優れ、思いやりが多く、良い第一印象を与えます。ただし、あまりにも親しみやすいと軽く見られる可能性があるため、状況に応じて適切な距離感も必要です。",
      'zh-CN': "用温柔的笑容和温暖的语调给人们带来舒适感。你友善且容易接近，即使是初次见面也能很快亲近。你拥有出色的共情能力和关怀之心，给人留下良好的第一印象。不过，过于友善可能会让你显得轻浮，所以需要根据情况保持适当的距离感。",
      'zh-TW': "用溫柔的笑容和溫暖的語調給人們帶來舒適感。你友善且容易接近，即使是初次見面也能很快親近。你擁有出色的共情能力和關懷之心，給人留下良好的第一印象。不過，過於友善可能會讓你顯得輕浮，所以需要根據情況保持適當的距離感。",
      vi: "Bạn mang lại sự thoải mái cho mọi người bằng nụ cười dịu dàng và giọng điệu ấm áp. Bạn thân thiện và dễ tiếp cận, dễ dàng trở nên thân thiết ngay cả khi lần đầu gặp mặt. Bạn có khả năng đồng cảm xuất sắc và lòng quan tâm, để lại ấn tượng đầu tiên tốt. Tuy nhiên, quá thân thiện có thể khiến bạn trông nhẹ nhàng, nên cần duy trì khoảng cách phù hợp tùy theo tình huống.",
      id: "Anda memberikan kenyamanan kepada orang-orang dengan senyuman lembut dan nada yang hangat. Anda ramah dan mudah didekati, mudah menjadi akrab bahkan saat pertama kali bertemu. Anda memiliki kemampuan empati yang luar biasa dan kepedulian yang besar, meninggalkan kesan pertama yang baik. Namun, terlalu ramah mungkin membuat Anda terlihat ringan, jadi perlu menjaga jarak yang sesuai tergantung situasi."
    },
    pros: [
      { ko: "친화력", en: "Friendliness", ja: "親しみやすさ", 'zh-CN': "亲和力", 'zh-TW': "親和力", vi: "Thân thiện", id: "Keramahan" },
      { ko: "공감력", en: "Empathy", ja: "共感力", 'zh-CN': "共情能力", 'zh-TW': "共情能力", vi: "Khả năng đồng cảm", id: "Empati" },
      { ko: "편안함", en: "Comfort", ja: "安らぎ", 'zh-CN': "舒适感", 'zh-TW': "舒適感", vi: "Thoải mái", id: "Kenyamanan" },
      { ko: "호감", en: "Likeability", ja: "好感", 'zh-CN': "好感度", 'zh-TW': "好感度", vi: "Được yêu mến", id: "Disukai" }
    ],
    cons: [
      { ko: "경계 없어 보임", en: "Seems to lack boundaries", ja: "境界がないように見える", 'zh-CN': "看起来缺乏界限", 'zh-TW': "看起來缺乏界限", vi: "Có vẻ thiếu ranh giới", id: "Sepertinya kurang batasan" },
      { ko: "가볍게 보일 수 있음", en: "May seem light", ja: "軽く見られる可能性", 'zh-CN': "可能显得轻浮", 'zh-TW': "可能顯得輕浮", vi: "Có thể trông nhẹ nhàng", id: "Mungkin terlihat ringan" }
    ],
    suitableJobs: [
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", vi: "Tư vấn viên", id: "Konselor" },
      { ko: "교사", en: "Teacher", ja: "教師", 'zh-CN': "教师", 'zh-TW': "教師", vi: "Giáo viên", id: "Guru" },
      { ko: "서비스직", en: "Service Worker", ja: "サービス業", 'zh-CN': "服务业", 'zh-TW': "服務業", vi: "Dịch vụ", id: "Layanan" },
      { ko: "의료인", en: "Medical Professional", ja: "医療従事者", 'zh-CN': "医疗人员", 'zh-TW': "醫療人員", vi: "Nhân viên y tế", id: "Profesional Medis" }
    ],
    advice: {
      ko: "따뜻함은 큰 장점이에요. 하지만 비즈니스 상황에서는 약간의 프로페셔널함도 더하면 완벽합니다!",
      en: "Warmth is a great advantage. But adding some professionalism in business situations would be perfect!",
      ja: "温かさは大きな長所です。しかし、ビジネスシーンでは少しプロフェッショナルさも加えると完璧です！",
      'zh-CN': "温暖是一个很大的优点。但在商务场合中，加入一些专业感会更完美！",
      'zh-TW': "溫暖是一個很大的優點。但在商務場合中，加入一些專業感會更完美！",
      vi: "Sự ấm áp là một ưu điểm lớn. Nhưng thêm một chút chuyên nghiệp trong tình huống kinh doanh sẽ hoàn hảo!",
      id: "Kehangatan adalah keunggulan besar. Tapi menambahkan sedikit profesionalisme dalam situasi bisnis akan sempurna!"
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 밝은 활발형 - 함께 있으면 분위기 최고", en: "💖 Best Match: Bright Active Type - Perfect atmosphere together", ja: "💖 最高の相性：明るい活発型 - 一緒にいると雰囲気最高", 'zh-CN': "💖 最佳搭配：阳光活跃型 - 在一起氛围最好", 'zh-TW': "💖 最佳搭配：陽光活躍型 - 在一起氛圍最好", vi: "💖 Kết hợp tốt nhất: Năng động sáng - Cùng nhau tạo không khí tuyệt vời", id: "💖 Kombinasi Terbaik: Tipe Aktif Cerah - Suasana sempurna bersama" },
      { ko: "😊 보통 궁합: 믿음직한형 - 따뜻함과 신뢰의 완벽 조화", en: "😊 Good Match: Trustworthy Type - Perfect harmony of warmth and trust", ja: "😊 良い相性：信頼できる型 - 温かさと信頼の完璧な調和", 'zh-CN': "😊 良好搭配：可靠型 - 温暖与信任的完美和谐", 'zh-TW': "😊 良好搭配：可靠型 - 溫暖與信任的完美和諧", vi: "😊 Kết hợp tốt: Đáng tin cậy - Hài hòa hoàn hảo giữa ấm áp và tin tưởng", id: "😊 Kombinasi Baik: Tipe Dapat Dipercaya - Harmoni sempurna kehangatan dan kepercayaan" },
      { ko: "⚠️ 주의 궁합: 신비한형 - 온도 차이로 어색할 수 있음", en: "⚠️ Caution: Mysterious Type - May feel awkward due to temperature difference", ja: "⚠️ 注意：神秘的型 - 温度差でぎこちなくなる可能性", 'zh-CN': "⚠️ 注意搭配：神秘型 - 温度差异可能造成尴尬", 'zh-TW': "⚠️ 注意搭配：神秘型 - 溫度差異可能造成尷尬", vi: "⚠️ Cẩn thận: Bí ẩn - Có thể khó xử do sự khác biệt về nhiệt độ", id: "⚠️ Hati-hati: Tipe Misterius - Mungkin canggung karena perbedaan suhu" }
    ],
    compatibility: {
      best: ["Type3"],
      good: ["Type5"],
      careful: ["Type2"],
      difficult: []
    }
  },
  {
    type: "Type2",
    emoji: "❄️",
    title: {
      ko: "쿨한 신비형",
      en: "Cool Mysterious Type",
      ja: "クールで神秘的な型",
      'zh-CN': "酷炫神秘型",
      'zh-TW': "酷炫神秘型",
      vi: "Bí ẩn mát mẻ",
      id: "Tipe Misterius Keren"
    },
    description: {
      ko: "쉽게 다가가기 어렵지만 매력적인 사람",
      en: "Hard to approach but attractive person",
      ja: "近づきにくいが魅力的な人",
      'zh-CN': "难以接近但很有魅力的人",
      'zh-TW': "難以接近但很有魅力的人",
      vi: "Khó tiếp cận nhưng hấp dẫn",
      id: "Sulit didekati tapi menarik"
    },
    detailedDescription: {
      ko: "차분하고 침착한 태도로 신비로운 분위기를 풍깁니다. 첫인상은 차가워 보이지만 알고 보면 따뜻한 반전 매력이 있습니다. 쉽게 친해지지 않아 거리감이 있지만, 그래서 더 특별하게 느껴집니다. 진지하고 깊이 있는 관계를 선호합니다.",
      en: "You exude a mysterious atmosphere with a calm and composed attitude. Your first impression may seem cold, but once people get to know you, you have a warm, surprising charm. You don't easily become close to others, maintaining distance, which makes you feel more special. You prefer serious and deep relationships.",
      ja: "落ち着いた冷静な態度で神秘的な雰囲気を醸し出します。第一印象は冷たく見えますが、よく知ると温かい逆転の魅力があります。簡単には親しくなれず距離感がありますが、それがより特別に感じさせます。真剣で深い関係を好みます。",
      'zh-CN': "你以冷静沉着的态度散发着神秘的氛围。第一印象看起来冷淡，但了解后发现你有温暖的反转魅力。不容易亲近，有距离感，但正因如此更显特别。你偏好认真深入的关系。",
      'zh-TW': "你以冷靜沉著的態度散發著神秘的氛圍。第一印象看起來冷淡，但了解後發現你有溫暖的反轉魅力。不容易親近，有距離感，但正因如此更顯特別。你偏好認真深入的關係。",
      vi: "Bạn tỏa ra bầu không khí bí ẩn với thái độ bình tĩnh và điềm tĩnh. Ấn tượng đầu tiên có vẻ lạnh lùng, nhưng khi hiểu rõ, bạn có sức hút ngược lại ấm áp. Bạn không dễ dàng trở nên thân thiết, giữ khoảng cách, khiến bạn cảm thấy đặc biệt hơn. Bạn thích những mối quan hệ nghiêm túc và sâu sắc.",
      id: "Anda memancarkan suasana misterius dengan sikap tenang dan terkendali. Kesan pertama mungkin terlihat dingin, tetapi setelah dikenal, Anda memiliki pesona terbalik yang hangat. Anda tidak mudah menjadi dekat, menjaga jarak, yang membuat Anda terasa lebih istimewa. Anda lebih suka hubungan yang serius dan mendalam."
    },
    pros: [
      { ko: "신비로움", en: "Mystery", ja: "神秘さ", 'zh-CN': "神秘感", 'zh-TW': "神秘感", vi: "Bí ẩn", id: "Misteri" },
      { ko: "독립적", en: "Independent", ja: "独立心", 'zh-CN': "独立性", 'zh-TW': "獨立性", vi: "Độc lập", id: "Mandiri" },
      { ko: "개성", en: "Personality", ja: "個性", 'zh-CN': "个性", 'zh-TW': "個性", vi: "Cá tính", id: "Kepribadian" },
      { ko: "깊이", en: "Depth", ja: "深さ", 'zh-CN': "深度", 'zh-TW': "深度", vi: "Độ sâu", id: "Kedalaman" }
    ],
    cons: [
      { ko: "차갑게 보임", en: "Seems cold", ja: "冷たく見える", 'zh-CN': "显得冷淡", 'zh-TW': "顯得冷淡", vi: "Có vẻ lạnh lùng", id: "Terlihat dingin" },
      { ko: "접근 어려움", en: "Hard to approach", ja: "近づきにくい", 'zh-CN': "难以接近", 'zh-TW': "難以接近", vi: "Khó tiếp cận", id: "Sulit didekati" },
      { ko: "오해 받기 쉬움", en: "Easily misunderstood", ja: "誤解されやすい", 'zh-CN': "容易被误解", 'zh-TW': "容易被誤解", vi: "Dễ bị hiểu lầm", id: "Mudah disalahpahami" }
    ],
    suitableJobs: [
      { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", vi: "Nhà nghiên cứu", id: "Peneliti" },
      { ko: "디자이너", en: "Designer", ja: "デザイナー", 'zh-CN': "设计师", 'zh-TW': "設計師", vi: "Nhà thiết kế", id: "Desainer" },
      { ko: "예술가", en: "Artist", ja: "アーティスト", 'zh-CN': "艺术家", 'zh-TW': "藝術家", vi: "Nghệ sĩ", id: "Seniman" },
      { ko: "전문직", en: "Professional", ja: "専門職", 'zh-CN': "专业人士", 'zh-TW': "專業人士", vi: "Chuyên gia", id: "Profesional" }
    ],
    advice: {
      ko: "가끔은 미소나 가벼운 대화로 문턱을 낮춰보세요. 당신의 진짜 모습을 보여줄 기회를 만들어보세요!",
      en: "Try lowering the threshold with occasional smiles or light conversations. Create opportunities to show your true self!",
      ja: "時々笑顔や軽い会話で敷居を下げてみてください。あなたの本当の姿を見せる機会を作ってみてください！",
      'zh-CN': "偶尔用微笑或轻松对话降低门槛。创造展示真实自我的机会！",
      'zh-TW': "偶爾用微笑或輕鬆對話降低門檻。創造展示真實自我的機會！",
      vi: "Thỉnh thoảng hãy hạ thấp rào cản bằng nụ cười hoặc cuộc trò chuyện nhẹ nhàng. Tạo cơ hội để thể hiện bản thân thật của bạn!",
      id: "Coba turunkan ambang dengan sesekali tersenyum atau obrolan ringan. Buat kesempatan untuk menunjukkan diri Anda yang sebenarnya!"
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 믿음직한형 - 서로 존중하는 성숙한 관계", en: "💖 Best Match: Trustworthy Type - Mature relationship with mutual respect", ja: "💖 最高の相性：信頼できる型 - お互いを尊重する成熟した関係", 'zh-CN': "💖 最佳搭配：可靠型 - 相互尊重的成熟关系", 'zh-TW': "💖 最佳搭配：可靠型 - 相互尊重的成熟關係", vi: "💖 Kết hợp tốt nhất: Đáng tin cậy - Mối quan hệ trưởng thành tôn trọng lẫn nhau", id: "💖 Kombinasi Terbaik: Tipe Dapat Dipercaya - Hubungan dewasa saling menghormati" },
      { ko: "😊 보통 궁합: 신비한형 - 비슷한 성향으로 편안함", en: "😊 Good Match: Mysterious Type - Comfortable with similar tendencies", ja: "😊 良い相性：神秘的型 - 似たような傾向で居心地が良い", 'zh-CN': "😊 良好搭配：神秘型 - 相似倾向让人舒适", 'zh-TW': "😊 良好搭配：神秘型 - 相似傾向讓人舒適", vi: "😊 Kết hợp tốt: Bí ẩn - Thoải mái với xu hướng tương tự", id: "😊 Kombinasi Baik: Tipe Misterius - Nyaman dengan kecenderungan serupa" },
      { ko: "⚠️ 주의 궁합: 밝은 활발형 - 에너지 차이로 피곤할 수 있음", en: "⚠️ Caution: Bright Active Type - May feel tired due to energy difference", ja: "⚠️ 注意：明るい活発型 - エネルギーの違いで疲れる可能性", 'zh-CN': "⚠️ 注意搭配：阳光活跃型 - 能量差异可能让人疲惫", 'zh-TW': "⚠️ 注意搭配：陽光活躍型 - 能量差異可能讓人疲憊", vi: "⚠️ Cẩn thận: Năng động sáng - Có thể mệt mỏi do sự khác biệt năng lượng", id: "⚠️ Hati-hati: Tipe Aktif Cerah - Mungkin lelah karena perbedaan energi" }
    ],
    compatibility: {
      best: ["Type5"],
      good: ["Type2"],
      careful: ["Type3"],
      difficult: []
    }
  },
  {
    type: "Type3",
    emoji: "☀️",
    title: {
      ko: "밝은 활발형",
      en: "Bright Active Type",
      ja: "明るい活発型",
      'zh-CN': "阳光活跃型",
      'zh-TW': "陽光活躍型",
      vi: "Năng động sáng",
      id: "Tipe Aktif Cerah"
    },
    description: {
      ko: "에너지 넘치는 비타민 같은 사람",
      en: "Vitamin-like person full of energy",
      ja: "エネルギッシュなビタミンのような人",
      'zh-CN': "充满能量的维生素般的人",
      'zh-TW': "充滿能量的維生素般的人",
      vi: "Người như vitamin tràn đầy năng lượng",
      id: "Orang seperti vitamin penuh energi"
    },
    detailedDescription: {
      ko: "밝고 긍정적인 에너지로 주변을 환하게 만듭니다. 웃음이 많고 표현이 풍부해서 함께 있으면 즐겁습니다. 적극적이고 활발해서 분위기 메이커 역할을 자연스럽게 합니다. 사교성이 뛰어나지만 가끔 시끄럽게 느껴질 수 있으니 TPO를 고려하세요.",
      en: "You brighten your surroundings with bright and positive energy. You have many smiles and rich expressions, making it enjoyable to be together. You're proactive and active, naturally taking on the role of a mood maker. You have excellent social skills, but sometimes you might seem noisy, so consider TPO (Time, Place, Occasion).",
      ja: "明るくポジティブなエネルギーで周りを明るくします。笑顔が多く、表現が豊富で、一緒にいると楽しいです。積極的で活発で、自然にムードメーカーの役割を果たします。社交性に優れていますが、時々うるさく感じられることがあるので、TPOを考慮してください。",
      'zh-CN': "你用明亮积极的能量让周围变得明亮。笑容多，表达丰富，在一起很愉快。你积极主动，自然地扮演气氛制造者的角色。你社交能力出色，但有时可能显得吵闹，所以请考虑TPO（时间、地点、场合）。",
      'zh-TW': "你用明亮積極的能量讓周圍變得明亮。笑容多，表達豐富，在一起很愉快。你積極主動，自然地扮演氣氛製造者的角色。你社交能力出色，但有時可能顯得吵鬧，所以請考慮TPO（時間、地點、場合）。",
      vi: "Bạn làm sáng lên xung quanh bằng năng lượng tích cực và sáng sủa. Bạn có nhiều nụ cười và biểu cảm phong phú, khiến việc ở cùng nhau trở nên thú vị. Bạn chủ động và năng động, tự nhiên đảm nhận vai trò người tạo không khí. Bạn có kỹ năng xã hội xuất sắc, nhưng đôi khi có thể cảm thấy ồn ào, vì vậy hãy cân nhắc TPO (Thời gian, Địa điểm, Dịp).",
      id: "Anda mencerahkan lingkungan sekitar dengan energi yang cerah dan positif. Anda memiliki banyak senyuman dan ekspresi yang kaya, membuat bersama-sama menjadi menyenangkan. Anda proaktif dan aktif, secara alami mengambil peran sebagai pembuat suasana. Anda memiliki keterampilan sosial yang luar biasa, tetapi kadang-kadang mungkin terlihat berisik, jadi pertimbangkan TPO (Waktu, Tempat, Kesempatan)."
    },
    pros: [
      { ko: "긍정적", en: "Positive", ja: "ポジティブ", 'zh-CN': "积极", 'zh-TW': "積極", vi: "Tích cực", id: "Positif" },
      { ko: "사교성", en: "Sociability", ja: "社交性", 'zh-CN': "社交性", 'zh-TW': "社交性", vi: "Tính xã hội", id: "Sosialitas" },
      { ko: "활발함", en: "Activeness", ja: "活発さ", 'zh-CN': "活跃", 'zh-TW': "活躍", vi: "Năng động", id: "Kegiatan" },
      { ko: "재미", en: "Fun", ja: "面白さ", 'zh-CN': "有趣", 'zh-TW': "有趣", vi: "Thú vị", id: "Menyenangkan" }
    ],
    cons: [
      { ko: "산만해 보임", en: "Seems distracted", ja: "散漫に見える", 'zh-CN': "显得散漫", 'zh-TW': "顯得散漫", vi: "Có vẻ mất tập trung", id: "Terlihat terganggu" },
      { ko: "시끄러움", en: "Noisy", ja: "うるさい", 'zh-CN': "吵闹", 'zh-TW': "吵鬧", vi: "Ồn ào", id: "Berisik" },
      { ko: "진중함 부족", en: "Lack of seriousness", ja: "真剣さの欠如", 'zh-CN': "缺乏严肃", 'zh-TW': "缺乏嚴肅", vi: "Thiếu nghiêm túc", id: "Kurang serius" }
    ],
    suitableJobs: [
      { ko: "방송인", en: "Broadcaster", ja: "放送人", 'zh-CN': "广播员", 'zh-TW': "廣播員", vi: "Người phát thanh", id: "Penyiar" },
      { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "營銷人員", vi: "Nhà tiếp thị", id: "Pemasar" },
      { ko: "영업직", en: "Sales", ja: "営業職", 'zh-CN': "销售", 'zh-TW': "銷售", vi: "Bán hàng", id: "Penjualan" },
      { ko: "엔터테이너", en: "Entertainer", ja: "エンターテイナー", 'zh-CN': "娱乐工作者", 'zh-TW': "娛樂工作者", vi: "Nghệ sĩ giải trí", id: "Penyanyi" }
    ],
    advice: {
      ko: "당신의 밝은 에너지는 최고의 무기예요! 하지만 진지한 상황에서는 톤을 조절하는 센스도 필요합니다.",
      en: "Your bright energy is your best weapon! But you also need the sense to adjust your tone in serious situations.",
      ja: "あなたの明るいエネルギーは最高の武器です！しかし、真剣な状況ではトーンを調整するセンスも必要です。",
      'zh-CN': "你明亮的能量是你最好的武器！但在严肃的情况下，你也需要调整语调的敏感度。",
      'zh-TW': "你明亮的能量是你最好的武器！但在嚴肅的情況下，你也需要調整語調的敏感度。",
      vi: "Năng lượng sáng sủa của bạn là vũ khí tốt nhất! Nhưng trong tình huống nghiêm túc, bạn cũng cần có khả năng điều chỉnh giọng điệu.",
      id: "Energi cerah Anda adalah senjata terbaik! Tapi dalam situasi serius, Anda juga perlu kepekaan untuk menyesuaikan nada."
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 따뜻한 친근형 - 긍정 에너지 두 배!", en: "💖 Best Match: Warm Friendly Type - Double positive energy!", ja: "💖 最高の相性：温かい親しみやすい型 - ポジティブエネルギー2倍！", 'zh-CN': "💖 最佳搭配：温暖友善型 - 积极能量翻倍！", 'zh-TW': "💖 最佳搭配：溫暖友善型 - 積極能量翻倍！", vi: "💖 Kết hợp tốt nhất: Thân thiện ấm áp - Năng lượng tích cực gấp đôi!", id: "💖 Kombinasi Terbaik: Tipe Ramah Hangat - Energi positif berlipat ganda!" },
      { ko: "😊 보통 궁합: 유머러스형 - 웃음 가득한 최고 조합", en: "😊 Good Match: Humorous Type - Best combination full of laughter", ja: "😊 良い相性：ユーモラス型 - 笑い満載の最高の組み合わせ", 'zh-CN': "😊 良好搭配：幽默型 - 充满笑声的最佳组合", 'zh-TW': "😊 良好搭配：幽默型 - 充滿笑聲的最佳組合", vi: "😊 Kết hợp tốt: Hài hước - Sự kết hợp tuyệt vời đầy tiếng cười", id: "😊 Kombinasi Baik: Tipe Humor - Kombinasi terbaik penuh tawa" },
      { ko: "⚠️ 주의 궁합: 신비한형 - 텐션 차이로 어색", en: "⚠️ Caution: Mysterious Type - Awkward due to tension difference", ja: "⚠️ 注意：神秘的型 - テンションの違いでぎこちない", 'zh-CN': "⚠️ 注意搭配：神秘型 - 紧张感差异造成尴尬", 'zh-TW': "⚠️ 注意搭配：神秘型 - 緊張感差異造成尷尬", vi: "⚠️ Cẩn thận: Bí ẩn - Có thể khó xử do sự khác biệt về căng thẳng", id: "⚠️ Hati-hati: Tipe Misterius - Mungkin canggung karena perbedaan ketegangan" }
    ],
    compatibility: {
      best: ["Type1"],
      good: ["Type6"],
      careful: ["Type2"],
      difficult: []
    }
  },
  {
    type: "Type4",
    emoji: "🌙",
    title: {
      ko: "조용한 관찰형",
      en: "Quiet Observant Type",
      ja: "静かな観察型",
      'zh-CN': "安静观察型",
      'zh-TW': "安靜觀察型",
      vi: "Quan sát im lặng",
      id: "Tipe Pengamat Tenang"
    },
    description: {
      ko: "말은 적지만 깊이 있는 사람",
      en: "Person who speaks little but has depth",
      ja: "話は少ないが深みのある人",
      'zh-CN': "话不多但有深度的人",
      'zh-TW': "話不多但有深度的人",
      vi: "Ít nói nhưng có chiều sâu",
      id: "Sedikit bicara tapi memiliki kedalaman"
    },
    detailedDescription: {
      ko: "많은 말을 하지 않지만 상황을 냉철하게 관찰합니다. 조용하지만 무시당하지 않는 존재감이 있습니다. 깊이 있는 대화를 선호하고 신중하게 관계를 맺습니다. 소수와 깊은 관계를 맺는 스타일로, 시간이 지날수록 진가가 드러납니다.",
      en: "You don't speak much but observe situations calmly. You're quiet but have a presence that can't be ignored. You prefer deep conversations and form relationships carefully. You have a style of forming deep relationships with a few people, and your true worth becomes apparent over time.",
      ja: "多くは話しませんが、状況を冷静に観察します。静かですが、無視できない存在感があります。深い対話を好み、慎重に関係を築きます。少数の人との深い関係を築くスタイルで、時間が経つにつれて真価が現れます。",
      'zh-CN': "你话不多，但冷静地观察情况。你安静但有不容忽视的存在感。你偏好深入对话，谨慎地建立关系。你有与少数人建立深度关系的风格，随着时间的推移，你的真正价值会显现出来。",
      'zh-TW': "你話不多，但冷靜地觀察情況。你安靜但有不容忽視的存在感。你偏好深入對話，謹慎地建立關係。你有與少數人建立深度關係的風格，隨著時間的推移，你的真正價值會顯現出來。",
      vi: "Bạn không nói nhiều nhưng quan sát tình huống một cách bình tĩnh. Bạn im lặng nhưng có sự hiện diện không thể bị bỏ qua. Bạn thích những cuộc trò chuyện sâu sắc và xây dựng mối quan hệ một cách cẩn thận. Bạn có phong cách xây dựng mối quan hệ sâu sắc với một số ít người, và giá trị thực sự của bạn sẽ được thể hiện theo thời gian.",
      id: "Anda tidak banyak bicara tetapi mengamati situasi dengan tenang. Anda diam tetapi memiliki kehadiran yang tidak bisa diabaikan. Anda lebih suka percakapan yang mendalam dan membangun hubungan dengan hati-hati. Anda memiliki gaya membangun hubungan yang mendalam dengan sedikit orang, dan nilai sejati Anda akan terlihat seiring waktu."
    },
    pros: [
      { ko: "신중함", en: "Prudence", ja: "慎重さ", 'zh-CN': "谨慎", 'zh-TW': "謹慎", vi: "Thận trọng", id: "Kebijaksanaan" },
      { ko: "관찰력", en: "Observation", ja: "観察力", 'zh-CN': "观察力", 'zh-TW': "觀察力", vi: "Khả năng quan sát", id: "Pengamatan" },
      { ko: "깊이", en: "Depth", ja: "深さ", 'zh-CN': "深度", 'zh-TW': "深度", vi: "Độ sâu", id: "Kedalaman" },
      { ko: "사려 깊음", en: "Thoughtfulness", ja: "思慮深さ", 'zh-CN': "深思熟虑", 'zh-TW': "深思熟慮", vi: "Suy nghĩ sâu sắc", id: "Pertimbangan" }
    ],
    cons: [
      { ko: "소극적", en: "Passive", ja: "消極的", 'zh-CN': "被动", 'zh-TW': "被動", vi: "Thụ động", id: "Pasif" },
      { ko: "관심 없어 보임", en: "Seems uninterested", ja: "関心がないように見える", 'zh-CN': "显得不感兴趣", 'zh-TW': "顯得對不感興趣", vi: "Có vẻ không quan tâm", id: "Terlihat tidak tertarik" },
      { ko: "어색함", en: "Awkwardness", ja: "ぎこちなさ", 'zh-CN': "尴尬", 'zh-TW': "尷尬", vi: "Khó xử", id: "Kecanggungan" }
    ],
    suitableJobs: [
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", vi: "Nhà văn", id: "Penulis" },
      { ko: "분석가", en: "Analyst", ja: "アナリスト", 'zh-CN': "分析师", 'zh-TW': "分析師", vi: "Nhà phân tích", id: "Analis" },
      { ko: "연구원", en: "Researcher", ja: "研究者", 'zh-CN': "研究员", 'zh-TW': "研究員", vi: "Nhà nghiên cứu", id: "Peneliti" },
      { ko: "기획자", en: "Planner", ja: "企画者", 'zh-CN': "策划师", 'zh-TW': "策劃師", vi: "Người lập kế hoạch", id: "Perencana" }
    ],
    advice: {
      ko: "조용한 것은 단점이 아니에요. 하지만 가끔은 먼저 다가가는 용기도 필요합니다!",
      en: "Being quiet is not a disadvantage. But sometimes you need the courage to approach first!",
      ja: "静かなことは欠点ではありません。しかし、時々は先に近づく勇気も必要です！",
      'zh-CN': "安静不是缺点。但有时你需要主动接近的勇气！",
      'zh-TW': "安靜不是缺點。但有時你需要主動接近的勇氣！",
      vi: "Im lặng không phải là nhược điểm. Nhưng đôi khi bạn cần can đảm để tiếp cận trước!",
      id: "Diam bukanlah kelemahan. Tapi kadang-kadang Anda perlu keberanian untuk mendekati terlebih dahulu!"
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 믿음직한형 - 조용하지만 편안한 관계", en: "💖 Best Match: Trustworthy Type - Quiet but comfortable relationship", ja: "💖 最高の相性：信頼できる型 - 静かだが居心地の良い関係", 'zh-CN': "💖 最佳搭配：可靠型 - 安静但舒适的关系", 'zh-TW': "💖 最佳搭配：可靠型 - 安靜但舒適的關係", vi: "💖 Kết hợp tốt nhất: Đáng tin cậy - Mối quan hệ im lặng nhưng thoải mái", id: "💖 Kombinasi Terbaik: Tipe Dapat Dipercaya - Hubungan tenang tetapi nyaman" },
      { ko: "😊 보통 궁합: 신비한형 - 비슷한 리듬으로 이해", en: "😊 Good Match: Mysterious Type - Understanding with similar rhythm", ja: "😊 良い相性：神秘的型 - 似たようなリズムで理解", 'zh-CN': "😊 良好搭配：神秘型 - 相似节奏的理解", 'zh-TW': "😊 良好搭配：神秘型 - 相似節奏的理解", vi: "😊 Kết hợp tốt: Bí ẩn - Hiểu nhau với nhịp điệu tương tự", id: "😊 Kombinasi Baik: Tipe Misterius - Memahami dengan ritme serupa" },
      { ko: "⚠️ 주의 궁합: 밝은 활발형 - 에너지 차이", en: "⚠️ Caution: Bright Active Type - Energy difference", ja: "⚠️ 注意：明るい活発型 - エネルギーの違い", 'zh-CN': "⚠️ 注意搭配：阳光活跃型 - 能量差异", 'zh-TW': "⚠️ 注意搭配：陽光活躍型 - 能量差異", vi: "⚠️ Cẩn thận: Năng động sáng - Sự khác biệt năng lượng", id: "⚠️ Hati-hati: Tipe Aktif Cerah - Perbedaan energi" }
    ],
    compatibility: {
      best: ["Type5"],
      good: ["Type2"],
      careful: ["Type3"],
      difficult: []
    }
  },
  {
    type: "Type5",
    emoji: "💼",
    title: {
      ko: "믿음직한 안정형",
      en: "Trustworthy Stable Type",
      ja: "信頼できる安定型",
      'zh-CN': "可靠稳定型",
      'zh-TW': "可靠穩定型",
      vi: "Ổn định đáng tin cậy",
      id: "Tipe Stabil Dapat Dipercaya"
    },
    description: {
      ko: "신뢰감 주는 의지되는 사람",
      en: "Reliable and trustworthy person",
      ja: "信頼感を与える頼れる人",
      'zh-CN': "给人信任感的可靠的人",
      'zh-TW': "給人信任感的可靠的人",
      vi: "Người đáng tin cậy và có thể dựa vào",
      id: "Orang yang dapat dipercaya dan diandalkan"
    },
    detailedDescription: {
      ko: "단정하고 예의 바른 모습으로 신뢰감을 줍니다. 차분하고 안정적인 태도로 믿음직한 첫인상을 남깁니다. 책임감 있고 진중해서 중요한 일을 맡기고 싶은 사람입니다. 다만 너무 격식 있어서 친해지기까지 시간이 걸릴 수 있습니다.",
      en: "You give a sense of trust with your neat and polite appearance. You leave a reliable first impression with your calm and stable attitude. You're responsible and serious, making people want to entrust important matters to you. However, being too formal might take time to become close.",
      ja: "きちんとした礼儀正しい姿で信頼感を与えます。落ち着いて安定した態度で信頼できる第一印象を残します。責任感があり真面目で、重要なことを任せたい人です。ただし、あまりにも格式張っていると親しくなるまで時間がかかるかもしれません。",
      'zh-CN': "你以整洁有礼的外表给人信任感。你以冷静稳定的态度留下可靠的第一印象。你有责任感和严肃，是人们想要委托重要事务的人。不过，过于正式可能需要时间才能变得亲近。",
      'zh-TW': "你以整潔有禮的外表給人信任感。你以冷靜穩定的態度留下可靠的第一印象。你有責任感和嚴肅，是人們想要委託重要事務的人。不過，過於正式可能需要時間才能變得親近。",
      vi: "Bạn mang lại cảm giác tin tưởng với vẻ ngoài gọn gàng và lịch sự. Bạn để lại ấn tượng đầu tiên đáng tin cậy với thái độ bình tĩnh và ổn định. Bạn có trách nhiệm và nghiêm túc, khiến mọi người muốn giao phó những việc quan trọng cho bạn. Tuy nhiên, quá trang trọng có thể mất thời gian để trở nên thân thiết.",
      id: "Anda memberikan rasa percaya dengan penampilan rapi dan sopan. Anda meninggalkan kesan pertama yang dapat dipercaya dengan sikap tenang dan stabil. Anda bertanggung jawab dan serius, membuat orang ingin mempercayakan hal-hal penting kepada Anda. Namun, terlalu formal mungkin membutuhkan waktu untuk menjadi dekat."
    },
    pros: [
      { ko: "신뢰감", en: "Trustworthiness", ja: "信頼感", 'zh-CN': "信任感", 'zh-TW': "信任感", vi: "Đáng tin cậy", id: "Dapat dipercaya" },
      { ko: "안정감", en: "Stability", ja: "安定感", 'zh-CN': "稳定感", 'zh-TW': "穩定感", vi: "Ổn định", id: "Stabilitas" },
      { ko: "책임감", en: "Responsibility", ja: "責任感", 'zh-CN': "责任感", 'zh-TW': "責任感", vi: "Trách nhiệm", id: "Tanggung jawab" },
      { ko: "프로페셔널", en: "Professional", ja: "プロフェッショナル", 'zh-CN': "专业", 'zh-TW': "專業", vi: "Chuyên nghiệp", id: "Profesional" }
    ],
    cons: [
      { ko: "딱딱함", en: "Rigidity", ja: "堅さ", 'zh-CN': "死板", 'zh-TW': "死板", vi: "Cứng nhắc", id: "Kekakuan" },
      { ko: "거리감", en: "Distance", ja: "距離感", 'zh-CN': "距离感", 'zh-TW': "距離感", vi: "Khoảng cách", id: "Jarak" },
      { ko: "재미없어 보임", en: "Seems boring", ja: "面白くなさそう", 'zh-CN': "显得无聊", 'zh-TW': "顯得無聊", vi: "Có vẻ nhàm chán", id: "Terlihat membosankan" }
    ],
    suitableJobs: [
      { ko: "관리자", en: "Manager", ja: "管理者", 'zh-CN': "管理者", 'zh-TW': "管理者", vi: "Quản lý", id: "Manajer" },
      { ko: "공무원", en: "Public Official", ja: "公務員", 'zh-CN': "公务员", 'zh-TW': "公務員", vi: "Công chức", id: "Pegawai Negeri" },
      { ko: "회계사", en: "Accountant", ja: "会計士", 'zh-CN': "会计师", 'zh-TW': "會計師", vi: "Kế toán viên", id: "Akuntan" },
      { ko: "법조인", en: "Legal Professional", ja: "法曹人", 'zh-CN': "法律专业人士", 'zh-TW': "法律專業人士", vi: "Chuyên gia pháp lý", id: "Profesional Hukum" }
    ],
    advice: {
      ko: "당신의 신뢰감은 큰 자산이에요. 가끔은 가벼운 농담으로 친근함을 더해보세요!",
      en: "Your trustworthiness is a great asset. Sometimes add friendliness with light jokes!",
      ja: "あなたの信頼感は大きな資産です。時々軽い冗談で親しみやすさを加えてみてください！",
      'zh-CN': "你的信任感是巨大的资产。有时用轻松的笑话增加亲切感！",
      'zh-TW': "你的信任感是巨大的資產。有時用輕鬆的笑話增加親切感！",
      vi: "Sự đáng tin cậy của bạn là tài sản lớn. Thỉnh thoảng hãy thêm sự thân thiện bằng những câu đùa nhẹ nhàng!",
      id: "Dapat dipercaya Anda adalah aset besar. Kadang-kadang tambahkan keramahan dengan lelucon ringan!"
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 따뜻한 친근형 - 신뢰와 따뜻함의 조화", en: "💖 Best Match: Warm Friendly Type - Harmony of trust and warmth", ja: "💖 最高の相性：温かい親しみやすい型 - 信頼と温かさの調和", 'zh-CN': "💖 最佳搭配：温暖友善型 - 信任与温暖的和谐", 'zh-TW': "💖 最佳搭配：溫暖友善型 - 信任與溫暖的和諧", vi: "💖 Kết hợp tốt nhất: Thân thiện ấm áp - Hài hòa giữa tin tưởng và ấm áp", id: "💖 Kombinasi Terbaik: Tipe Ramah Hangat - Harmoni kepercayaan dan kehangatan" },
      { ko: "😊 보통 궁합: 신비한형, 조용한형 - 성숙한 관계", en: "😊 Good Match: Mysterious Type, Quiet Type - Mature relationship", ja: "😊 良い相性：神秘的型、静かな型 - 成熟した関係", 'zh-CN': "😊 良好搭配：神秘型、安静型 - 成熟的关系", 'zh-TW': "😊 良好搭配：神秘型、安靜型 - 成熟的關係", vi: "😊 Kết hợp tốt: Bí ẩn, Im lặng - Mối quan hệ trưởng thành", id: "😊 Kombinasi Baik: Tipe Misterius, Tenang - Hubungan dewasa" },
      { ko: "⚠️ 주의 궁합: 유머러스형 - 진지함 vs 유머", en: "⚠️ Caution: Humorous Type - Seriousness vs humor", ja: "⚠️ 注意：ユーモラス型 - 真剣さ対ユーモア", 'zh-CN': "⚠️ 注意搭配：幽默型 - 严肃vs幽默", 'zh-TW': "⚠️ 注意搭配：幽默型 - 嚴肅vs幽默", vi: "⚠️ Cẩn thận: Hài hước - Nghiêm túc vs hài hước", id: "⚠️ Hati-hati: Tipe Humor - Keseriusan vs humor" }
    ],
    compatibility: {
      best: ["Type1"],
      good: ["Type2", "Type4"],
      careful: ["Type6"],
      difficult: []
    }
  },
  {
    type: "Type6",
    emoji: "🎭",
    title: {
      ko: "유머러스 재미형",
      en: "Humorous Fun Type",
      ja: "ユーモラスで楽しい型",
      'zh-CN': "幽默有趣型",
      'zh-TW': "幽默有趣型",
      vi: "Hài hước thú vị",
      id: "Tipe Humor Menyenangkan"
    },
    description: {
      ko: "있는 곳이 무대! 웃음 주는 사람",
      en: "Wherever you are is a stage! Person who brings laughter",
      ja: "いる場所が舞台！笑いをもたらす人",
      'zh-CN': "所在之处就是舞台！带来笑声的人",
      'zh-TW': "所在之處就是舞台！帶來笑聲的人",
      vi: "Nơi nào bạn ở đều là sân khấu! Người mang lại tiếng cười",
      id: "Di mana pun Anda berada adalah panggung! Orang yang membawa tawa"
    },
    detailedDescription: {
      ko: "재치있는 말과 유머로 사람들을 웃게 만듭니다. 처음 만나도 금방 친해지고 분위기를 밝게 만듭니다. 표현이 풍부하고 스토리텔링이 뛰어나 주목받습니다. 다만 진지한 상황에서도 농담하면 오해받을 수 있으니 주의하세요.",
      en: "You make people laugh with witty words and humor. You become close quickly even when meeting for the first time and brighten the atmosphere. You have rich expressions and excellent storytelling skills, attracting attention. However, be careful as making jokes in serious situations can lead to misunderstandings.",
      ja: "機知に富んだ言葉とユーモアで人々を笑わせます。初めて会ってもすぐに親しくなり、雰囲気を明るくします。表現が豊富でストーリーテリングに優れ、注目を集めます。ただし、真剣な状況でも冗談を言うと誤解される可能性があるので注意してください。",
      'zh-CN': "你用机智的话语和幽默让人们发笑。即使是初次见面也能很快亲近，让气氛变得明亮。你表达丰富，故事讲述出色，引人注目。不过，在严肃情况下开玩笑可能会被误解，所以要小心。",
      'zh-TW': "你用機智的話語和幽默讓人們發笑。即使是初次見面也能很快親近，讓氣氛變得明亮。你表達豐富，故事講述出色，引人注目。不過，在嚴肅情況下開玩笑可能會被誤解，所以要小心。",
      vi: "Bạn làm mọi người cười bằng những lời nói dí dỏm và hài hước. Bạn trở nên thân thiết nhanh chóng ngay cả khi lần đầu gặp mặt và làm sáng lên bầu không khí. Bạn có biểu cảm phong phú và kỹ năng kể chuyện xuất sắc, thu hút sự chú ý. Tuy nhiên, hãy cẩn thận vì nói đùa trong tình huống nghiêm túc có thể dẫn đến hiểu lầm.",
      id: "Anda membuat orang tertawa dengan kata-kata lucu dan humor. Anda menjadi dekat dengan cepat bahkan saat pertama kali bertemu dan mencerahkan suasana. Anda memiliki ekspresi yang kaya dan keterampilan bercerita yang luar biasa, menarik perhatian. Namun, hati-hati karena bercanda dalam situasi serius dapat menyebabkan kesalahpahaman."
    },
    pros: [
      { ko: "유머", en: "Humor", ja: "ユーモア", 'zh-CN': "幽默", 'zh-TW': "幽默", vi: "Hài hước", id: "Humor" },
      { ko: "재치", en: "Wit", ja: "機知", 'zh-CN': "机智", 'zh-TW': "機智", vi: "Thông minh", id: "Kecerdasan" },
      { ko: "친화력", en: "Friendliness", ja: "親しみやすさ", 'zh-CN': "亲和力", 'zh-TW': "親和力", vi: "Thân thiện", id: "Keramahan" },
      { ko: "스토리텔링", en: "Storytelling", ja: "ストーリーテリング", 'zh-CN': "故事讲述", 'zh-TW': "故事講述", vi: "Kể chuyện", id: "Bercerita" }
    ],
    cons: [
      { ko: "가볍게 보임", en: "Seems light", ja: "軽く見える", 'zh-CN': "显得轻浮", 'zh-TW': "顯得輕浮", vi: "Có vẻ nhẹ nhàng", id: "Terlihat ringan" },
      { ko: "진지함 부족", en: "Lack of seriousness", ja: "真剣さの欠如", 'zh-CN': "缺乏严肃", 'zh-TW': "缺乏嚴肅", vi: "Thiếu nghiêm túc", id: "Kurang serius" },
      { ko: "경솔해 보임", en: "Seems frivolous", ja: "軽率に見える", 'zh-CN': "显得轻率", 'zh-TW': "顯得輕率", vi: "Có vẻ bất cẩn", id: "Terlihat sembrono" }
    ],
    suitableJobs: [
      { ko: "코미디언", en: "Comedian", ja: "コメディアン", 'zh-CN': "喜剧演员", 'zh-TW': "喜劇演員", vi: "Diễn viên hài", id: "Komedian" },
      { ko: "크리에이터", en: "Creator", ja: "クリエイター", 'zh-CN': "创作者", 'zh-TW': "創作者", vi: "Người sáng tạo", id: "Kreator" },
      { ko: "방송인", en: "Broadcaster", ja: "放送人", 'zh-CN': "广播员", 'zh-TW': "廣播員", vi: "Người phát thanh", id: "Penyiar" },
      { ko: "MC", en: "MC", ja: "MC", 'zh-CN': "主持人", 'zh-TW': "主持人", vi: "MC", id: "MC" }
    ],
    advice: {
      ko: "웃음은 최고의 무기지만, TPO를 지키는 센스가 중요합니다. 진지할 땐 진지하게!",
      en: "Laughter is your best weapon, but it's important to have the sense to follow TPO. Be serious when it's serious!",
      ja: "笑いは最高の武器ですが、TPOを守るセンスが重要です。真剣な時は真剣に！",
      'zh-CN': "笑声是你最好的武器，但遵守TPO的敏感度很重要。严肃时要严肃！",
      'zh-TW': "笑聲是你最好的武器，但遵守TPO的敏感度很重要。嚴肅時要嚴肅！",
      vi: "Tiếng cười là vũ khí tốt nhất của bạn, nhưng điều quan trọng là phải có khả năng tuân thủ TPO. Hãy nghiêm túc khi cần nghiêm túc!",
      id: "Tawa adalah senjata terbaik Anda, tetapi penting untuk memiliki kepekaan mengikuti TPO. Serius ketika perlu serius!"
    },
    compatibleTypes: [
      { ko: "💖 좋은 궁합: 밝은 활발형 - 웃음 폭발 최고 조합", en: "💖 Best Match: Bright Active Type - Explosive laughter best combination", ja: "💖 最高の相性：明るい活発型 - 笑い爆発最高の組み合わせ", 'zh-CN': "💖 最佳搭配：阳光活跃型 - 笑声爆发的最佳组合", 'zh-TW': "💖 最佳搭配：陽光活躍型 - 笑聲爆發的最佳組合", vi: "💖 Kết hợp tốt nhất: Năng động sáng - Sự kết hợp tuyệt vời với tiếng cười bùng nổ", id: "💖 Kombinasi Terbaik: Tipe Aktif Cerah - Kombinasi terbaik ledakan tawa" },
      { ko: "😊 보통 궁합: 따뜻한 친근형 - 편안하고 즐거움", en: "😊 Good Match: Warm Friendly Type - Comfortable and fun", ja: "😊 良い相性：温かい親しみやすい型 - 快適で楽しい", 'zh-CN': "😊 良好搭配：温暖友善型 - 舒适愉快", 'zh-TW': "😊 良好搭配：溫暖友善型 - 舒適愉快", vi: "😊 Kết hợp tốt: Thân thiện ấm áp - Thoải mái và vui vẻ", id: "😊 Kombinasi Baik: Tipe Ramah Hangat - Nyaman dan menyenangkan" },
      { ko: "⚠️ 주의 궁합: 믿음직한형 - 진지함 vs 유머 충돌", en: "⚠️ Caution: Trustworthy Type - Seriousness vs humor conflict", ja: "⚠️ 注意：信頼できる型 - 真剣さ対ユーモアの衝突", 'zh-CN': "⚠️ 注意搭配：可靠型 - 严肃vs幽默冲突", 'zh-TW': "⚠️ 注意搭配：可靠型 - 嚴肅vs幽默衝突", vi: "⚠️ Cẩn thận: Đáng tin cậy - Xung đột giữa nghiêm túc và hài hước", id: "⚠️ Hati-hati: Tipe Dapat Dipercaya - Konflik keseriusan vs humor" }
    ],
    compatibility: {
      best: ["Type3"],
      good: ["Type1"],
      careful: ["Type5"],
      difficult: []
    }
  }
];

export function calculateFirstImpressionResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
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
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
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
