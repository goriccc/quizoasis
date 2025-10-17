export interface IdealTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface IdealTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  datingStyle: Record<string, string>[];
  idealJobs: Record<string, string>[];
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const idealTypeQuestions: IdealTypeQuestion[] = [
  {
    id: 1,
    question: {
      ko: "첫 만남에서 가장 매력적으로 느껴지는 순간은?",
      en: "What moment feels most attractive in a first meeting?",
      ja: "初対面で最も魅力的に感じる瞬間は？",
      'zh-CN': "第一次见面时最吸引人的瞬间是？",
      'zh-TW': "第一次見面時最吸引人的瞬間是？",
      id: "Momen apa yang terasa paling menarik saat pertemuan pertama?",
      vi: "Khoảnh khắc nào cảm thấy hấp dẫn nhất trong lần gặp đầu tiên?"
    },
    options: [
      {
        text: {
          ko: "깊이 있는 대화를 나눌 때",
          en: "When having deep conversations",
          ja: "深い会話をする時",
          'zh-CN': "进行深度对话时",
          'zh-TW': "進行深度對話時",
          id: "Ketika melakukan percakapan mendalam",
          vi: "Khi có cuộc trò chuyện sâu sắc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "함께 웃고 즐거울 때",
          en: "When laughing and having fun together",
          ja: "一緒に笑って楽しい時",
          'zh-CN': "一起欢笑快乐时",
          'zh-TW': "一起歡笑快樂時",
          id: "Ketika tertawa dan bersenang-senang bersama",
          vi: "Khi cười và vui vẻ cùng nhau"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "세심하게 배려해줄 때",
          en: "When being considerate and caring",
          ja: "細かく気遣ってくれる時",
          'zh-CN': "细心体贴时",
          'zh-TW': "細心體貼時",
          id: "Ketika penuh perhatian dan peduli",
          vi: "Khi chu đáo và quan tâm"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "당당하고 자신감 있을 때",
          en: "When confident and assertive",
          ja: "堂々として自信がある時",
          'zh-CN': "自信满满时",
          'zh-TW': "自信滿滿時",
          id: "Ketika percaya diri dan tegas",
          vi: "Khi tự tin và quyết đoán"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인에게 바라는 가장 중요한 능력은?",
      en: "What is the most important ability you want in a partner?",
      ja: "恋人に求める最も重要な能力は？",
      'zh-CN': "对恋人最重要的能力要求是？",
      'zh-TW': "對戀人最重要的能力要求是？",
      id: "Kemampuan apa yang paling penting yang Anda inginkan dari pasangan?",
      vi: "Khả năng quan trọng nhất bạn muốn ở người yêu là gì?"
    },
    options: [
      {
        text: {
          ko: "현실적인 계획과 실행력",
          en: "Realistic planning and execution",
          ja: "現実的な計画と実行力",
          'zh-CN': "现实的计划和执行力",
          'zh-TW': "現實的計劃和執行力",
          id: "Perencanaan realistis dan eksekusi",
          vi: "Lập kế hoạch thực tế và thực hiện"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "자유로운 사고와 창의성",
          en: "Free thinking and creativity",
          ja: "自由な思考と創造性",
          'zh-CN': "自由思考和创造力",
          'zh-TW': "自由思考和創造力",
          id: "Pemikiran bebas dan kreativitas",
          vi: "Suy nghĩ tự do và sáng tạo"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "논리적 사고와 문제 해결력",
          en: "Logical thinking and problem-solving",
          ja: "論理的思考と問題解決力",
          'zh-CN': "逻辑思维和解决问题的能力",
          'zh-TW': "邏輯思維和解決問題的能力",
          id: "Berpikir logis dan pemecahan masalah",
          vi: "Tư duy logic và giải quyết vấn đề"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "긍정적 마인드와 유머감각",
          en: "Positive mindset and sense of humor",
          ja: "ポジティブな心とユーモアセンス",
          'zh-CN': "积极心态和幽默感",
          'zh-TW': "積極心態和幽默感",
          id: "Pola pikir positif dan selera humor",
          vi: "Tư duy tích cực và khiếu hài hước"
        },
        scores: { Type2: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "데이트 중 이상형이 보여줬으면 하는 모습은?",
      en: "What appearance would you like your ideal type to show during a date?",
      ja: "デート中に理想のタイプに見せてほしい姿は？",
      'zh-CN': "约会时希望理想型展现的样子是？",
      'zh-TW': "約會時希望理想型展現的樣子是？",
      id: "Penampilan seperti apa yang ingin Anda lihat dari tipe ideal saat kencan?",
      vi: "Bạn muốn kiểu lý tưởng thể hiện như thế nào trong buổi hẹn hò?"
    },
    options: [
      {
        text: {
          ko: "다정한 눈빛과 따뜻한 말",
          en: "Tender eyes and warm words",
          ja: "優しい眼差しと温かい言葉",
          'zh-CN': "温柔的眼神和温暖的话语",
          'zh-TW': "溫柔的眼神和溫暖的話語",
          id: "Mata yang lembut dan kata-kata hangat",
          vi: "Ánh mắt dịu dàng và lời nói ấm áp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "적극적인 리드와 결단력",
          en: "Active leadership and decisiveness",
          ja: "積極的なリードと決断力",
          'zh-CN': "积极的领导和决断力",
          'zh-TW': "積極的領導和決斷力",
          id: "Kepemimpinan aktif dan ketegasan",
          vi: "Lãnh đạo tích cực và quyết đoán"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "책임감 있는 행동과 신뢰감",
          en: "Responsible behavior and trustworthiness",
          ja: "責任感のある行動と信頼感",
          'zh-CN': "负责任的行为和信任感",
          'zh-TW': "負責任的行為和信任感",
          id: "Perilaku bertanggung jawab dan dapat dipercaya",
          vi: "Hành vi có trách nhiệm và đáng tin cậy"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "자유로운 영혼과 독특한 개성",
          en: "Free spirit and unique personality",
          ja: "自由な魂と独特な個性",
          'zh-CN': "自由的灵魂和独特的个性",
          'zh-TW': "自由的靈魂和獨特的個性",
          id: "Jiwa bebas dan kepribadian unik",
          vi: "Tâm hồn tự do và tính cách độc đáo"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "어떤 대화 스타일에 끌리나요?",
      en: "What conversation style attracts you?",
      ja: "どんな会話スタイルに惹かれますか？",
      'zh-CN': "什么样的对话风格吸引你？",
      'zh-TW': "什麼樣的對話風格吸引你？",
      id: "Gaya percakapan apa yang menarik bagi Anda?",
      vi: "Phong cách trò chuyện nào thu hút bạn?"
    },
    options: [
      {
        text: {
          ko: "지적 호기심을 자극하는 깊은 대화",
          en: "Deep conversations that stimulate intellectual curiosity",
          ja: "知的好奇心を刺激する深い会話",
          'zh-CN': "激发智识好奇心的深度对话",
          'zh-TW': "激發智識好奇心的深度對話",
          id: "Percakapan mendalam yang merangsang rasa ingin tahu intelektual",
          vi: "Cuộc trò chuyện sâu sắc kích thích trí tò mò"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "웃음 가득한 유쾌한 대화",
          en: "Cheerful conversations full of laughter",
          ja: "笑いがいっぱいの愉快な会話",
          'zh-CN': "充满欢笑的愉快对话",
          'zh-TW': "充滿歡笑的愉快對話",
          id: "Percakapan ceria penuh tawa",
          vi: "Cuộc trò chuyện vui vẻ đầy tiếng cười"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "진심이 담긴 공감과 위로",
          en: "Sincere empathy and comfort",
          ja: "真心のこもった共感と慰め",
          'zh-CN': "真诚的共情和安慰",
          'zh-TW': "真誠的共情和安慰",
          id: "Empati dan kenyamanan yang tulus",
          vi: "Sự đồng cảm và an ủi chân thành"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "열정적이고 에너지 넘치는 대화",
          en: "Passionate and energetic conversations",
          ja: "情熱的でエネルギッシュな会話",
          'zh-CN': "充满激情和活力的对话",
          'zh-TW': "充滿激情和活力的對話",
          id: "Percakapan yang penuh semangat dan energik",
          vi: "Cuộc trò chuyện đầy đam mê và năng lượng"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "힘들 때 연인에게 기대하는 반응은?",
      en: "What reaction do you expect from your partner when you're having a hard time?",
      ja: "辛い時に恋人に期待する反応は？",
      'zh-CN': "困难时期望恋人有什么反应？",
      'zh-TW': "困難時期望戀人有什麼反應？",
      id: "Reaksi apa yang Anda harapkan dari pasangan saat mengalami kesulitan?",
      vi: "Bạn mong đợi phản ứng gì từ người yêu khi gặp khó khăn?"
    },
    options: [
      {
        text: {
          ko: "\"함께 해결해보자\" 현실적 조언",
          en: "\"Let's solve it together\" Practical advice",
          ja: "「一緒に解決しよう」現実的なアドバイス",
          'zh-CN': "「一起解决吧」现实建议",
          'zh-TW': "「一起解決吧」現實建議",
          id: "\"Mari kita selesaikan bersama\" Saran praktis",
          vi: "\"Hãy cùng giải quyết\" Lời khuyên thực tế"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "\"네가 하고 싶은 대로 해\" 존중과 자유",
          en: "\"Do whatever you want\" Respect and freedom",
          ja: "「あなたがしたいようにして」尊重と自由",
          'zh-CN': "「按你想的做」尊重和自由",
          'zh-TW': "「按你想的做」尊重和自由",
          id: "\"Lakukan apa yang kamu inginkan\" Menghormati dan kebebasan",
          vi: "\"Làm theo ý bạn muốn\" Tôn trọng và tự do"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "\"괜찮아, 다 잘 될 거야\" 지혜로운 조언",
          en: "\"It's okay, everything will be fine\" Wise advice",
          ja: "「大丈夫、きっとうまくいくよ」賢明なアドバイス",
          'zh-CN': "「没关系，一切都会好的」智慧建议",
          'zh-TW': "「沒關係，一切都會好的」智慧建議",
          id: "\"Tidak apa-apa, semuanya akan baik-baik saja\" Saran bijak",
          vi: "\"Không sao đâu, mọi thứ sẽ ổn thôi\" Lời khuyên khôn ngoan"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"힘내! 우리 기분 전환하자\" 긍정 에너지",
          en: "\"Cheer up! Let's change our mood\" Positive energy",
          ja: "「頑張って！気分転換しよう」ポジティブなエネルギー",
          'zh-CN': "「加油！我们转换心情吧」正能量",
          'zh-TW': "「加油！我們轉換心情吧」正能量",
          id: "\"Semangat! Mari kita ubah suasana hati\" Energi positif",
          vi: "\"Cố lên! Hãy thay đổi tâm trạng\" Năng lượng tích cực"
        },
        scores: { Type2: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "이상형의 취미 생활은?",
      en: "What are your ideal type's hobbies?",
      ja: "理想のタイプの趣味は？",
      'zh-CN': "理想型的爱好是什么？",
      'zh-TW': "理想型的愛好是什麼？",
      id: "Apa hobi tipe ideal Anda?",
      vi: "Sở thích của kiểu lý tưởng là gì?"
    },
    options: [
      {
        text: {
          ko: "책 읽기, 글쓰기, 공부",
          en: "Reading, writing, studying",
          ja: "読書、執筆、勉強",
          'zh-CN': "读书、写作、学习",
          'zh-TW': "讀書、寫作、學習",
          id: "Membaca, menulis, belajar",
          vi: "Đọc sách, viết lách, học tập"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "운동, 등산, 액티비티",
          en: "Exercise, hiking, activities",
          ja: "運動、ハイキング、アクティビティ",
          'zh-CN': "运动、登山、活动",
          'zh-TW': "運動、登山、活動",
          id: "Olahraga, hiking, aktivitas",
          vi: "Tập thể dục, leo núi, hoạt động"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "요리, 집 꾸미기, 반려동물 돌보기",
          en: "Cooking, decorating home, taking care of pets",
          ja: "料理、家の装飾、ペットの世話",
          'zh-CN': "烹饪、装饰家居、照顾宠物",
          'zh-TW': "烹飪、裝飾家居、照顧寵物",
          id: "Memasak, mendekorasi rumah, merawat hewan peliharaan",
          vi: "Nấu ăn, trang trí nhà, chăm sóc thú cưng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "여행, 새로운 경험, 자유로운 활동",
          en: "Travel, new experiences, free activities",
          ja: "旅行、新しい経験、自由な活動",
          'zh-CN': "旅行、新体验、自由活动",
          'zh-TW': "旅行、新體驗、自由活動",
          id: "Perjalanan, pengalaman baru, aktivitas bebas",
          vi: "Du lịch, trải nghiệm mới, hoạt động tự do"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "연인이 당신을 대하는 방식 중 가장 좋은 것은?",
      en: "What is the best way for your partner to treat you?",
      ja: "恋人があなたを扱う方法で最も良いのは？",
      'zh-CN': "恋人对待你的方式中最好的是什么？",
      'zh-TW': "戀人對待你的方式中最好的是什麼？",
      id: "Cara terbaik pasangan memperlakukan Anda adalah?",
      vi: "Cách tốt nhất người yêu đối xử với bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "내 생각을 존중하고 경청해줄 때",
          en: "When they respect and listen to my thoughts",
          ja: "私の考えを尊重し、聞いてくれる時",
          'zh-CN': "尊重并倾听我的想法时",
          'zh-TW': "尊重並傾聽我的想法時",
          id: "Ketika mereka menghormati dan mendengarkan pikiran saya",
          vi: "Khi họ tôn trọng và lắng nghe suy nghĩ của tôi"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "나를 웃게 만들어줄 때",
          en: "When they make me laugh",
          ja: "私を笑わせてくれる時",
          'zh-CN': "让我笑的时候",
          'zh-TW': "讓我笑的時候",
          id: "Ketika mereka membuat saya tertawa",
          vi: "Khi họ làm tôi cười"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "내 감정을 먼저 헤아려줄 때",
          en: "When they consider my feelings first",
          ja: "私の感情をまず汲み取ってくれる時",
          'zh-CN': "首先考虑我的感受时",
          'zh-TW': "首先考慮我的感受時",
          id: "Ketika mereka mempertimbangkan perasaan saya terlebih dahulu",
          vi: "Khi họ quan tâm đến cảm xúc của tôi trước"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "나를 응원하고 밀어줄 때",
          en: "When they cheer me on and push me forward",
          ja: "私を応援し、押してくれる時",
          'zh-CN': "为我加油并推动我前进时",
          'zh-TW': "為我加油並推動我前進時",
          id: "Ketika mereka mendukung dan mendorong saya",
          vi: "Khi họ cổ vũ và thúc đẩy tôi"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "이상형의 직업이나 꿈은?",
      en: "What is your ideal type's job or dream?",
      ja: "理想のタイプの職業や夢は？",
      'zh-CN': "理想型的职业或梦想是什么？",
      'zh-TW': "理想型的職業或夢想是什麼？",
      id: "Apa pekerjaan atau mimpi tipe ideal Anda?",
      vi: "Nghề nghiệp hoặc ước mơ của kiểu lý tưởng là gì?"
    },
    options: [
      {
        text: {
          ko: "안정적이고 전망 좋은 직업",
          en: "Stable and promising career",
          ja: "安定していて将来性のある職業",
          'zh-CN': "稳定且有前景的职业",
          'zh-TW': "穩定且有前景的職業",
          id: "Karier yang stabil dan menjanjikan",
          vi: "Nghề nghiệp ổn định và có triển vọng"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "창의적이고 자유로운 일",
          en: "Creative and free work",
          ja: "創造的で自由な仕事",
          'zh-CN': "创造性和自由的工作",
          'zh-TW': "創造性和自由的工作",
          id: "Pekerjaan kreatif dan bebas",
          vi: "Công việc sáng tạo và tự do"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "전문성 있고 존경받는 직업",
          en: "Professional and respected career",
          ja: "専門性があり、尊敬される職業",
          'zh-CN': "专业且受尊敬的职业",
          'zh-TW': "專業且受尊敬的職業",
          id: "Karier profesional dan dihormati",
          vi: "Nghề nghiệp chuyên nghiệp và được tôn trọng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들을 즐겁게 하는 일",
          en: "Work that makes people happy",
          ja: "人々を楽しませる仕事",
          'zh-CN': "让人们快乐的工作",
          'zh-TW': "讓人們快樂的工作",
          id: "Pekerjaan yang membuat orang bahagia",
          vi: "Công việc làm cho mọi người vui vẻ"
        },
        scores: { Type2: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "연인과의 갈등 상황에서 바라는 모습은?",
      en: "What do you want to see in conflict situations with your partner?",
      ja: "恋人との対立状況で望む姿は？",
      'zh-CN': "与恋人冲突时期望的样子是？",
      'zh-TW': "與戀人衝突時期望的樣子是？",
      id: "Apa yang Anda inginkan dalam situasi konflik dengan pasangan?",
      vi: "Bạn muốn thấy gì trong tình huống xung đột với người yêu?"
    },
    options: [
      {
        text: {
          ko: "차분하고 따뜻하게 풀어가기",
          en: "Resolving calmly and warmly",
          ja: "落ち着いて温かく解決する",
          'zh-CN': "冷静温暖地解决",
          'zh-TW': "冷靜溫暖地解決",
          id: "Menyelesaikan dengan tenang dan hangat",
          vi: "Giải quyết một cách bình tĩnh và ấm áp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "솔직하고 당당하게 해결하기",
          en: "Solving honestly and confidently",
          ja: "正直で堂々と解決する",
          'zh-CN': "诚实坦然地解决",
          'zh-TW': "誠實坦然地解決",
          id: "Menyelesaikan dengan jujur dan percaya diri",
          vi: "Giải quyết một cách thành thật và tự tin"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "현실적이고 합리적으로 타협하기",
          en: "Compromising realistically and rationally",
          ja: "現実的で合理的に妥協する",
          'zh-CN': "现实合理地妥协",
          'zh-TW': "現實合理地妥協",
          id: "Berkompromi secara realistis dan rasional",
          vi: "Thỏa hiệp một cách thực tế và hợp lý"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "여유롭게 시간을 두고 자연스럽게",
          en: "Taking time naturally and leisurely",
          ja: "余裕を持って時間をかけて自然に",
          'zh-CN': "从容地给时间自然解决",
          'zh-TW': "從容地給時間自然解決",
          id: "Mengambil waktu secara alami dan santai",
          vi: "Dành thời gian một cách tự nhiên và thoải mái"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "소개팅에서 첫눈에 반할 것 같은 타입은?",
      en: "What type would you fall in love with at first sight on a blind date?",
      ja: "お見合いで一目惚れしそうなタイプは？",
      'zh-CN': "相亲时一见钟情的类型是？",
      'zh-TW': "相親時一見鍾情的類型是？",
      id: "Tipe apa yang akan membuat Anda jatuh cinta pada pandangan pertama saat kencan buta?",
      vi: "Kiểu người nào khiến bạn yêu ngay từ cái nhìn đầu tiên trong buổi hẹn hò?"
    },
    options: [
      {
        text: {
          ko: "지적이고 품격 있는 느낌",
          en: "Intellectual and dignified feeling",
          ja: "知的で品格のある感じ",
          'zh-CN': "智慧而有品位的感受",
          'zh-TW': "智慧而有品位的感受",
          id: "Perasaan intelektual dan bermartabat",
          vi: "Cảm giác trí tuệ và có phẩm cách"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "밝고 친근한 미소",
          en: "Bright and friendly smile",
          ja: "明るく親しみやすい笑顔",
          'zh-CN': "明亮友善的笑容",
          'zh-TW': "明亮友善的笑容",
          id: "Senyuman cerah dan ramah",
          vi: "Nụ cười tươi sáng và thân thiện"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "부드럽고 편안한 분위기",
          en: "Soft and comfortable atmosphere",
          ja: "柔らかく心地よい雰囲気",
          'zh-CN': "柔和舒适的氛围",
          'zh-TW': "柔和舒適的氛圍",
          id: "Suasana lembut dan nyaman",
          vi: "Không khí dịu dàng và thoải mái"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "카리스마 있고 당당한 태도",
          en: "Charismatic and confident attitude",
          ja: "カリスマ的で堂々とした態度",
          'zh-CN': "有魅力和自信的态度",
          'zh-TW': "有魅力和自信的態度",
          id: "Sikap karismatik dan percaya diri",
          vi: "Thái độ có sức hút và tự tin"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "장거리 연애 시 이상형의 연락 스타일은?",
      en: "What is your ideal type's communication style in a long-distance relationship?",
      ja: "遠距離恋愛での理想のタイプの連絡スタイルは？",
      'zh-CN': "异地恋时理想型的联系风格是？",
      'zh-TW': "異地戀時理想型的聯繫風格是？",
      id: "Apa gaya komunikasi tipe ideal Anda dalam hubungan jarak jauh?",
      vi: "Phong cách liên lạc của kiểu lý tưởng trong mối quan hệ xa là gì?"
    },
    options: [
      {
        text: {
          ko: "규칙적이고 꾸준한 연락",
          en: "Regular and consistent communication",
          ja: "規則的で継続的な連絡",
          'zh-CN': "规律持续的联络",
          'zh-TW': "規律持續的聯絡",
          id: "Komunikasi teratur dan konsisten",
          vi: "Liên lạc đều đặn và nhất quán"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "자유롭지만 서로 이해하는 관계",
          en: "Free but understanding relationship",
          ja: "自由だがお互いを理解する関係",
          'zh-CN': "自由但相互理解的关系",
          'zh-TW': "自由但相互理解的關係",
          id: "Hubungan bebas tetapi saling memahami",
          vi: "Mối quan hệ tự do nhưng hiểu nhau"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "깊이 있는 대화로 채워가기",
          en: "Filling with deep conversations",
          ja: "深い会話で埋めていく",
          'zh-CN': "用深度对话填补",
          'zh-TW': "用深度對話填補",
          id: "Mengisi dengan percakapan mendalam",
          vi: "Lấp đầy bằng những cuộc trò chuyện sâu sắc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "재미있는 얘기로 심심하지 않게",
          en: "Making it fun with interesting stories",
          ja: "面白い話で退屈しないように",
          'zh-CN': "用有趣的故事避免无聊",
          'zh-TW': "用有趣的故事避免無聊",
          id: "Membuatnya menyenangkan dengan cerita menarik",
          vi: "Làm cho vui vẻ với những câu chuyện thú vị"
        },
        scores: { Type2: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "결혼을 생각한다면 가장 중요한 기준은?",
      en: "If you think about marriage, what is the most important criterion?",
      ja: "結婚を考えるなら最も重要な基準は？",
      'zh-CN': "如果考虑结婚，最重要的标准是？",
      'zh-TW': "如果考慮結婚，最重要的標準是？",
      id: "Jika memikirkan pernikahan, kriteria apa yang paling penting?",
      vi: "Nếu nghĩ đến hôn nhân, tiêu chí quan trọng nhất là gì?"
    },
    options: [
      {
        text: {
          ko: "따뜻한 성격과 가정적인 모습",
          en: "Warm personality and family-oriented nature",
          ja: "温かい性格と家庭的な姿",
          'zh-CN': "温暖的性格和顾家的样子",
          'zh-TW': "溫暖的性格和顧家的樣子",
          id: "Kepribadian hangat dan sifat keluarga",
          vi: "Tính cách ấm áp và có tính gia đình"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "추진력 있고 미래 지향적",
          en: "Driven and future-oriented",
          ja: "推進力があり未来志向",
          'zh-CN': "有推动力和面向未来",
          'zh-TW': "有推動力和面向未來",
          id: "Berkemauan keras dan berorientasi masa depan",
          vi: "Có động lực và hướng tương lai"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "경제적 안정과 책임감",
          en: "Economic stability and responsibility",
          ja: "経済的安定と責任感",
          'zh-CN': "经济稳定和责任感",
          'zh-TW': "經濟穩定和責任感",
          id: "Stabilitas ekonomi dan tanggung jawab",
          vi: "Ổn định kinh tế và trách nhiệm"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "서로의 자유를 존중하는 관계",
          en: "Relationship that respects each other's freedom",
          ja: "お互いの自由を尊重する関係",
          'zh-CN': "相互尊重自由的关係",
          'zh-TW': "相互尊重自由的關係",
          id: "Hubungan yang saling menghormati kebebasan",
          vi: "Mối quan hệ tôn trọng tự do của nhau"
        },
        scores: { Type6: 3 }
      }
    ]
  }
];

export function calculateIdealTypeResult(answers: any[]): string {
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

export const idealTypeResults: IdealTypeResult[] = [
  {
    type: "Type1",
    emoji: "🧠",
    title: {
      ko: "지적인 멘사형",
      en: "Intellectual Mensa Type",
      ja: "知的なメンサ型",
      'zh-CN': "智慧型天才",
      'zh-TW': "智慧型天才",
      id: "Tipe Mensa Intelektual",
      vi: "Kiểu Thiên Tài Trí Tuệ"
    },
    description: {
      ko: "대화가 통하는 똑똑한 사람이 최고! 당신은 머리가 좋고 지적인 사람에게 끌립니다. 깊이 있는 대화, 풍부한 지식, 논리적 사고를 가진 사람을 매력적으로 느낍니다. 책 읽는 모습, 무언가를 진지하게 설명하는 모습에 심장이 뛰고, \"역시 똑똑해\"라는 말이 최고의 칭찬입니다. 외모보다 내면의 깊이를 중시합니다.",
      en: "Smart people who can communicate are the best! You are attracted to intelligent and intellectual people. You find people with deep conversations, rich knowledge, and logical thinking attractive. Your heart beats when you see them reading books or seriously explaining something, and \"you're so smart\" is the best compliment. You value inner depth over appearance.",
      ja: "会話が通じる頭の良い人が最高！あなたは頭が良くて知的な人に惹かれます。深い会話、豊富な知識、論理的思考を持つ人を魅力的に感じます。本を読む姿、何かを真剣に説明する姿に心が躍り、「やっぱり頭がいい」という言葉が最高の褒め言葉です。外見より内面の深さを重視します。",
      'zh-CN': "能沟通的聪明人最棒！你被聪明和智慧的人吸引。你觉得有深度对话、丰富知识、逻辑思维的人很有魅力。看到他们读书或认真解释什么时心跳加速，\"你真聪明\"是最好的赞美。你重视内在深度胜过外表。",
      'zh-TW': "能溝通的聰明人最棒！你被聰明和智慧的人吸引。你覺得有深度對話、豐富知識、邏輯思維的人很有魅力。看到他們讀書或認真解釋什麼時心跳加速，「你真聰明」是最好的讚美。你重視內在深度勝過外表。",
      id: "Orang pintar yang bisa berkomunikasi adalah yang terbaik! Anda tertarik pada orang yang cerdas dan intelektual. Anda merasa orang dengan percakapan mendalam, pengetahuan yang kaya, dan pemikiran logis menarik. Jantung Anda berdebar ketika melihat mereka membaca buku atau serius menjelaskan sesuatu, dan \"kamu sangat pintar\" adalah pujian terbaik. Anda menghargai kedalaman batin daripada penampilan.",
      vi: "Những người thông minh có thể giao tiếp là tốt nhất! Bạn bị thu hút bởi những người thông minh và trí tuệ. Bạn thấy những người có cuộc trò chuyện sâu sắc, kiến thức phong phú và tư duy logic hấp dẫn. Tim bạn đập mạnh khi thấy họ đọc sách hoặc nghiêm túc giải thích điều gì đó, và \"bạn thật thông minh\" là lời khen tốt nhất. Bạn coi trọng chiều sâu nội tâm hơn vẻ ngoài."
    },
    pros: [
      {
        ko: "지적 호기심",
        en: "Intellectual curiosity",
        ja: "知的好奇心",
        'zh-CN': "智识好奇心",
        'zh-TW': "智識好奇心",
        id: "Rasa ingin tahu intelektual",
        vi: "Trí tò mò trí tuệ"
      },
      {
        ko: "깊은 사고",
        en: "Deep thinking",
        ja: "深い思考",
        'zh-CN': "深度思考",
        'zh-TW': "深度思考",
        id: "Pemikiran mendalam",
        vi: "Suy nghĩ sâu sắc"
      },
      {
        ko: "교양",
        en: "Culture",
        ja: "教養",
        'zh-CN': "修养",
        'zh-TW': "修養",
        id: "Budaya",
        vi: "Văn hóa"
      },
      {
        ko: "논리력",
        en: "Logic",
        ja: "論理力",
        'zh-CN': "逻辑力",
        'zh-TW': "邏輯力",
        id: "Logika",
        vi: "Logic"
      }
    ],
    cons: [
      {
        ko: "지나친 논리로 감정이 메마를 수 있음",
        en: "May become emotionally dry due to excessive logic",
        ja: "過度な論理で感情が乾燥する可能性",
        'zh-CN': "过度逻辑可能导致情感干涸",
        'zh-TW': "過度邏輯可能導致情感乾涸",
        id: "Mungkin menjadi emosional kering karena logika berlebihan",
        vi: "Có thể trở nên khô khan về mặt cảm xúc do logic quá mức"
      }
    ],
    advice: {
      ko: "지성도 중요하지만 때로는 감정적 연결도 필요합니다. 가끔은 논리보다 마음이 먼저일 때도 있어요.",
      en: "Intelligence is important, but sometimes emotional connection is also needed. Sometimes the heart comes before logic.",
      ja: "知性も重要ですが、時には感情的なつながりも必要です。時には論理より心が先の時もあります。",
      'zh-CN': "智慧很重要，但有时也需要情感连接。有时心比逻辑更重要。",
      'zh-TW': "智慧很重要，但有時也需要情感連接。有時心比邏輯更重要。",
      id: "Kecerdasan penting, tetapi terkadang koneksi emosional juga diperlukan. Terkadang hati datang sebelum logika.",
      vi: "Trí tuệ rất quan trọng, nhưng đôi khi cũng cần kết nối cảm xúc. Đôi khi trái tim đến trước logic."
    },
    datingStyle: [
      { ko: "서점", en: "Bookstore", ja: "書店", 'zh-CN': "书店", 'zh-TW': "書店", id: "Toko buku", vi: "Hiệu sách" },
      { ko: "전시회", en: "Exhibition", ja: "展示会", 'zh-CN': "展览会", 'zh-TW': "展覽會", id: "Pameran", vi: "Triển lãm" },
      { ko: "깊은 대화", en: "Deep conversation", ja: "深い会話", 'zh-CN': "深度对话", 'zh-TW': "深度對話", id: "Percakapan mendalam", vi: "Trò chuyện sâu sắc" },
      { ko: "다큐멘터리", en: "Documentary", ja: "ドキュメンタリー", 'zh-CN': "纪录片", 'zh-TW': "紀錄片", id: "Dokumenter", vi: "Phim tài liệu" }
    ],
    idealJobs: [
      { ko: "교수", en: "Professor", ja: "教授", 'zh-CN': "教授", 'zh-TW': "教授", id: "Profesor", vi: "Giáo sư" },
      { ko: "연구원", en: "Researcher", ja: "研究員", 'zh-CN': "研究员", 'zh-TW': "研究員", id: "Peneliti", vi: "Nhà nghiên cứu" },
      { ko: "작가", en: "Writer", ja: "作家", 'zh-CN': "作家", 'zh-TW': "作家", id: "Penulis", vi: "Nhà văn" },
      { ko: "변호사", en: "Lawyer", ja: "弁護士", 'zh-CN': "律师", 'zh-TW': "律師", id: "Pengacara", vi: "Luật sư" },
      { ko: "전문직", en: "Professional", ja: "専門職", 'zh-CN': "专业职业", 'zh-TW': "專業職業", id: "Profesional", vi: "Chuyên gia" }
    ],
    compatibility: {
      best: ["Type3"],
      good: ["Type5"],
      careful: ["Type2"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type2",
    emoji: "😂",
    title: {
      ko: "유머러스 개그형",
      en: "Humorous Comedian Type",
      ja: "ユーモラスなコメディアン型",
      'zh-CN': "幽默喜剧型",
      'zh-TW': "幽默喜劇型",
      id: "Tipe Komedian Humoris",
      vi: "Kiểu Hài Hước Vui Nhộn"
    },
    description: {
      ko: "웃음이 최고! 재미있는 사람이 진리! 당신은 유머감각이 뛰어나고 재미있는 사람에게 끌립니다. 함께 있으면 웃음이 끊이지 않고, 긍정적 에너지를 주는 사람이 좋습니다. 농담도 잘 받아주고 장난기 있는 모습에 매력을 느낍니다. \"너랑 있으면 재밌어\"가 최고의 칭찬입니다. 무거운 분위기보다 가볍고 즐거운 관계를 원합니다.",
      en: "Laughter is the best! Fun people are the truth! You are attracted to people with excellent sense of humor and fun. When you're together, laughter never stops, and you like people who give positive energy. You're good at receiving jokes and find playful behavior attractive. \"It's fun with you\" is the best compliment. You want a light and enjoyable relationship rather than a heavy atmosphere.",
      ja: "笑いが最高！面白い人が真実！あなたはユーモアセンスが優れていて面白い人に惹かれます。一緒にいると笑いが絶えず、ポジティブなエネルギーを与える人が好きです。冗談もよく受け入れて、いたずらっぽい姿に魅力を感じます。「君といると楽しい」が最高の褒め言葉です。重い雰囲気より軽やかで楽しい関係を望みます。",
      'zh-CN': "笑声最棒！有趣的人是真理！你被幽默感出色和有趣的人吸引。在一起时笑声不断，你喜欢给予正能量的人。善于接受玩笑，觉得顽皮的样子很有魅力。「和你在一起很有趣」是最好的赞美。你希望轻松愉快的关系而不是沉重的氛围。",
      'zh-TW': "笑聲最棒！有趣的人是真理！你被幽默感出色和有趣的人吸引。在一起時笑聲不斷，你喜歡給予正能量的人。善於接受玩笑，覺得頑皮的樣子很有魅力。「和你在一起很有趣」是最好的讚美。你希望輕鬆愉快的關係而不是沉重的氛圍。",
      id: "Tertawa adalah yang terbaik! Orang yang menyenangkan adalah kebenaran! Anda tertarik pada orang dengan selera humor yang luar biasa dan menyenangkan. Saat bersama, tawa tidak pernah berhenti, dan Anda menyukai orang yang memberikan energi positif. Anda pandai menerima lelucon dan menemukan perilaku bermain-main menarik. \"Menyenangkan denganmu\" adalah pujian terbaik. Anda menginginkan hubungan yang ringan dan menyenangkan daripada suasana yang berat.",
      vi: "Tiếng cười là tốt nhất! Những người vui vẻ là chân lý! Bạn bị thu hút bởi những người có khiếu hài hước xuất sắc và vui vẻ. Khi ở cùng nhau, tiếng cười không bao giờ dừng lại, và bạn thích những người mang lại năng lượng tích cực. Bạn giỏi tiếp nhận những câu đùa và thấy hành vi vui tươi hấp dẫn. \"Vui vẻ với bạn\" là lời khen tốt nhất. Bạn muốn một mối quan hệ nhẹ nhàng và thú vị hơn là bầu không khí nặng nề."
    },
    pros: [
      {
        ko: "유머감각",
        en: "Sense of humor",
        ja: "ユーモアセンス",
        'zh-CN': "幽默感",
        'zh-TW': "幽默感",
        id: "Selera humor",
        vi: "Khiếu hài hước"
      },
      {
        ko: "긍정성",
        en: "Positivity",
        ja: "ポジティブさ",
        'zh-CN': "积极性",
        'zh-TW': "積極性",
        id: "Positivitas",
        vi: "Tính tích cực"
      },
      {
        ko: "친근함",
        en: "Friendliness",
        ja: "親しみやすさ",
        'zh-CN': "友善",
        'zh-TW': "友善",
        id: "Keramahan",
        vi: "Sự thân thiện"
      },
      {
        ko: "밝음",
        en: "Brightness",
        ja: "明るさ",
        'zh-CN': "开朗",
        'zh-TW': "開朗",
        id: "Kecerahan",
        vi: "Sự tươi sáng"
      }
    ],
    cons: [
      {
        ko: "진지한 대화가 필요할 때 부족할 수 있음",
        en: "May be lacking when serious conversation is needed",
        ja: "真剣な会話が必要な時に不足する可能性",
        'zh-CN': "需要严肃对话时可能不足",
        'zh-TW': "需要嚴肅對話時可能不足",
        id: "Mungkin kurang ketika percakapan serius diperlukan",
        vi: "Có thể thiếu khi cần cuộc trò chuyện nghiêm túc"
      }
    ],
    advice: {
      ko: "유머도 좋지만 때로는 진지한 대화도 필요합니다. 가끔은 웃음보다 공감이 먼저일 때도 있어요.",
      en: "Humor is good, but sometimes serious conversation is also needed. Sometimes empathy comes before laughter.",
      ja: "ユーモアも良いですが、時には真剣な会話も必要です。時には笑いより共感が先の時もあります。",
      'zh-CN': "幽默很好，但有时也需要严肃的对话。有时同理心比笑声更重要。",
      'zh-TW': "幽默很好，但有時也需要嚴肅的對話。有時同理心比笑聲更重要。",
      id: "Humor itu baik, tetapi terkadang percakapan serius juga diperlukan. Terkadang empati datang sebelum tawa.",
      vi: "Hài hước cũng tốt, nhưng đôi khi cũng cần cuộc trò chuyện nghiêm túc. Đôi khi sự đồng cảm đến trước tiếng cười."
    },
    datingStyle: [
      { ko: "코미디 영화", en: "Comedy movie", ja: "コメディ映画", 'zh-CN': "喜剧电影", 'zh-TW': "喜劇電影", id: "Film komedi", vi: "Phim hài" },
      { ko: "놀이공원", en: "Amusement park", ja: "遊園地", 'zh-CN': "游乐园", 'zh-TW': "遊樂園", id: "Taman hiburan", vi: "Công viên giải trí" },
      { ko: "페스티벌", en: "Festival", ja: "フェスティバル", 'zh-CN': "节日庆典", 'zh-TW': "節日慶典", id: "Festival", vi: "Lễ hội" },
      { ko: "게임", en: "Games", ja: "ゲーム", 'zh-CN': "游戏", 'zh-TW': "遊戲", id: "Permainan", vi: "Trò chơi" }
    ],
    idealJobs: [
      { ko: "예능인", en: "Entertainer", ja: "芸能人", 'zh-CN': "艺人", 'zh-TW': "藝人", id: "Hiburan", vi: "Nghệ sĩ giải trí" },
      { ko: "크리에이터", en: "Creator", ja: "クリエイター", 'zh-CN': "创作者", 'zh-TW': "創作者", id: "Kreator", vi: "Người sáng tạo" },
      { ko: "마케터", en: "Marketer", ja: "マーケター", 'zh-CN': "营销人员", 'zh-TW': "營銷人員", id: "Pemasar", vi: "Nhà tiếp thị" },
      { ko: "이벤트 기획자", en: "Event planner", ja: "イベント企画者", 'zh-CN': "活动策划", 'zh-TW': "活動策劃", id: "Perencana acara", vi: "Người lập kế hoạch sự kiện" }
    ],
    compatibility: {
      best: ["Type2"],
      good: ["Type6"],
      careful: ["Type5"],
      difficult: ["Type1"]
    }
  },
  {
    type: "Type3",
    emoji: "💝",
    title: {
      ko: "따뜻한 힐러형",
      en: "Warm Healer Type",
      ja: "温かいヒーラー型",
      'zh-CN': "温暖治愈型",
      'zh-TW': "溫暖治癒型",
      id: "Tipe Penyembuh Hangat",
      vi: "Kiểu Chữa Lành Ấm Áp"
    },
    description: {
      ko: "마음이 따뜻한 사람이 최고의 보물! 당신은 따뜻하고 다정한 사람에게 끌립니다. 세심한 배려, 공감 능력, 다정한 말투를 가진 사람을 좋아합니다. 힘들 때 위로해주고, 작은 것도 챙겨주는 모습에 감동합니다. \"너는 참 마음이 따뜻해\"가 최고의 칭찬입니다. 화려함보다 소박한 행복을 중시합니다.",
      en: "Warm-hearted people are the greatest treasure! You are attracted to warm and affectionate people. You like people with careful consideration, empathy, and gentle speech. You are moved by their appearance of comforting you when you're having a hard time and taking care of even small things. \"You are so warm-hearted\" is the best compliment. You value simple happiness over splendor.",
      ja: "心の温かい人が最高の宝物！あなたは温かくて優しい人に惹かれます。細やかな配慮、共感能力、優しい口調を持つ人が好きです。辛い時に慰めてくれて、小さなことでも気にかけてくれる姿に感動します。「あなたは本当に心が温かい」が最高の褒め言葉です。華やかさより素朴な幸せを重視します。",
      'zh-CN': "温暖的人是最珍贵的宝物！你被温暖和温柔的人吸引。你喜欢细心体贴、有同理心、说话温柔的人。困难时安慰你、连小事都照顾你的样子让你感动。「你真的很温暖」是最好的赞美。你重视朴素的幸福胜过华丽。",
      'zh-TW': "溫暖的人是最珍貴的寶物！你被溫暖和溫柔的人吸引。你喜歡細心體貼、有同理心、說話溫柔的人。困難時安慰你、連小事都照顧你的樣子讓你感動。「你真的很溫暖」是最好的讚美。你重視樸素的幸福勝過華麗。",
      id: "Orang yang hangat hati adalah harta terbesar! Anda tertarik pada orang yang hangat dan penuh kasih sayang. Anda menyukai orang dengan pertimbangan hati-hati, empati, dan ucapan lembut. Anda terharu dengan penampilan mereka yang menghibur Anda saat mengalami kesulitan dan merawat hal-hal kecil sekalipun. \"Anda sangat hangat hati\" adalah pujian terbaik. Anda menghargai kebahagiaan sederhana daripada kemewahan.",
      vi: "Những người có trái tim ấm áp là kho báu quý giá nhất! Bạn bị thu hút bởi những người ấm áp và dịu dàng. Bạn thích những người có sự quan tâm chu đáo, khả năng đồng cảm và lời nói dịu dàng. Bạn cảm động trước việc họ an ủi bạn khi gặp khó khăn và chăm sóc cả những điều nhỏ nhặt. \"Bạn thật sự có trái tim ấm áp\" là lời khen tốt nhất. Bạn coi trọng hạnh phúc giản dị hơn sự xa hoa."
    },
    pros: [
      { ko: "다정함", en: "Affection", ja: "優しさ", 'zh-CN': "温柔", 'zh-TW': "溫柔", id: "Kasih sayang", vi: "Sự dịu dàng" },
      { ko: "배려심", en: "Consideration", ja: "配慮", 'zh-CN': "体贴", 'zh-TW': "體貼", id: "Pertimbangan", vi: "Sự quan tâm" },
      { ko: "공감력", en: "Empathy", ja: "共感力", 'zh-CN': "共情力", 'zh-TW': "共情力", id: "Empati", vi: "Khả năng đồng cảm" },
      { ko: "따뜻함", en: "Warmth", ja: "温かさ", 'zh-CN': "温暖", 'zh-TW': "溫暖", id: "Kehangatan", vi: "Sự ấm áp" }
    ],
    cons: [
      { ko: "지나친 헌신으로 자신을 잃을 수 있음", en: "May lose yourself due to excessive devotion", ja: "過度な献身で自分を失う可能性", 'zh-CN': "过度奉献可能失去自我", 'zh-TW': "過度奉獻可能失去自我", id: "Mungkin kehilangan diri karena pengabdian berlebihan", vi: "Có thể mất bản thân do cống hiến quá mức" }
    ],
    advice: {
      ko: "따뜻함도 중요하지만 자신도 소중합니다. 때로는 상대방보다 자신을 먼저 챙겨야 해요.",
      en: "Warmth is important, but you are also precious. Sometimes you need to take care of yourself before others.",
      ja: "温かさも重要ですが、自分も大切です。時には相手より自分をまず気にかける必要があります。",
      'zh-CN': "温暖很重要，但你自己也很珍贵。有时需要先照顾自己而不是别人。",
      'zh-TW': "溫暖很重要，但你自己也很珍貴。有時需要先照顧自己而不是別人。",
      id: "Kehangatan penting, tetapi Anda juga berharga. Terkadang Anda perlu merawat diri sendiri sebelum orang lain.",
      vi: "Sự ấm áp rất quan trọng, nhưng bản thân bạn cũng quý giá. Đôi khi bạn cần chăm sóc bản thân trước người khác."
    },
    datingStyle: [
      { ko: "산책", en: "Walking", ja: "散歩", 'zh-CN': "散步", 'zh-TW': "散步", id: "Berjalan-jalan", vi: "Đi dạo" },
      { ko: "홈데이트", en: "Home date", ja: "ホームデート", 'zh-CN': "家庭约会", 'zh-TW': "家庭約會", id: "Kencan di rumah", vi: "Hẹn hò tại nhà" },
      { ko: "조용한 카페", en: "Quiet cafe", ja: "静かなカフェ", 'zh-CN': "安静咖啡厅", 'zh-TW': "安靜咖啡廳", id: "Kafe tenang", vi: "Quán cà phê yên tĩnh" },
      { ko: "봉사활동", en: "Volunteer work", ja: "ボランティア活動", 'zh-CN': "志愿活动", 'zh-TW': "志願活動", id: "Kegiatan sukarela", vi: "Hoạt động tình nguyện" }
    ],
    idealJobs: [
      { ko: "선생님", en: "Teacher", ja: "先生", 'zh-CN': "老师", 'zh-TW': "老師", id: "Guru", vi: "Giáo viên" },
      { ko: "상담사", en: "Counselor", ja: "カウンセラー", 'zh-CN': "咨询师", 'zh-TW': "諮詢師", id: "Konselor", vi: "Tư vấn viên" },
      { ko: "의료인", en: "Medical professional", ja: "医療従事者", 'zh-CN': "医疗人员", 'zh-TW': "醫療人員", id: "Profesional medis", vi: "Nhân viên y tế" },
      { ko: "사회복지사", en: "Social worker", ja: "ソーシャルワーカー", 'zh-CN': "社会工作者", 'zh-TW': "社會工作者", id: "Pekerja sosial", vi: "Nhân viên xã hội" }
    ],
    compatibility: {
      best: ["Type1"],
      good: ["Type5"],
      careful: ["Type4"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type4",
    emoji: "🔥",
    title: {
      ko: "열정적 리더형",
      en: "Passionate Leader Type",
      ja: "情熱的なリーダー型",
      'zh-CN': "激情领导型",
      'zh-TW': "激情領導型",
      id: "Tipe Pemimpin Berapi-api",
      vi: "Kiểu Lãnh Đạo Đam Mê"
    },
    description: {
      ko: "당당하고 추진력 있는 사람이 멋져! 당신은 열정적이고 리더십 있는 사람에게 끌립니다. 자신감 넘치고 목표를 향해 달려가는 모습, 결단력 있는 태도가 매력적입니다. 소극적이고 우유부단한 사람보다 적극적으로 리드하는 사람이 좋습니다. \"너는 정말 멋있어\"가 최고의 칭찬입니다. 함께 성장하는 관계를 원합니다.",
      en: "Confident and driven people are cool! You are attracted to passionate and leadership-oriented people. Their confident appearance running toward goals and decisive attitude are attractive. You prefer people who actively lead rather than passive and indecisive people. \"You are really cool\" is the best compliment. You want a relationship that grows together.",
      ja: "堂々として推進力のある人がかっこいい！あなたは情熱的でリーダーシップのある人に惹かれます。自信に満ちて目標に向かって走る姿、決断力のある態度が魅力的です。消極的で優柔不断な人より積極的にリードする人が好きです。「君は本当にかっこいい」が最高の褒め言葉です。一緒に成長する関係を望みます。",
      'zh-CN': "自信和有推动力的人很酷！你被激情和有领导力的人吸引。充满自信奔向目标的样子、果断的态度很有魅力。你喜欢积极领导的人而不是被动优柔寡断的人。「你真酷」是最好的赞美。你希望一起成长的关系。",
      'zh-TW': "自信和有推動力的人很酷！你被激情和有領導力的人吸引。充滿自信奔向目標的樣子、果斷的態度很有魅力。你喜歡積極領導的人而不是被動優柔寡斷的人。「你真酷」是最好的讚美。你希望一起成長的關係。",
      id: "Orang yang percaya diri dan berkemauan keras itu keren! Anda tertarik pada orang yang berapi-api dan berorientasi kepemimpinan. Penampilan percaya diri mereka yang berlari menuju tujuan dan sikap tegas sangat menarik. Anda lebih menyukai orang yang aktif memimpin daripada orang yang pasif dan ragu-ragu. \"Anda benar-benar keren\" adalah pujian terbaik. Anda menginginkan hubungan yang tumbuh bersama.",
      vi: "Những người tự tin và có động lực thật tuyệt! Bạn bị thu hút bởi những người đam mê và có khả năng lãnh đạo. Vẻ tự tin chạy về phía mục tiêu và thái độ quyết đoán của họ rất hấp dẫn. Bạn thích những người tích cực dẫn đầu hơn là những người thụ động và do dự. \"Bạn thật sự tuyệt vời\" là lời khen tốt nhất. Bạn muốn một mối quan hệ cùng phát triển."
    },
    pros: [
      { ko: "리더십", en: "Leadership", ja: "リーダーシップ", 'zh-CN': "领导力", 'zh-TW': "領導力", id: "Kepemimpinan", vi: "Khả năng lãnh đạo" },
      { ko: "추진력", en: "Drive", ja: "推進力", 'zh-CN': "推动力", 'zh-TW': "推動力", id: "Kemauan keras", vi: "Động lực" },
      { ko: "자신감", en: "Confidence", ja: "自信", 'zh-CN': "自信", 'zh-TW': "自信", id: "Kepercayaan diri", vi: "Sự tự tin" },
      { ko: "결단력", en: "Decisiveness", ja: "決断力", 'zh-CN': "决断力", 'zh-TW': "決斷力", id: "Ketegasan", vi: "Sự quyết đoán" }
    ],
    cons: [
      { ko: "지나친 강함에 상대방이 위축될 수 있음", en: "Partner may feel intimidated by excessive strength", ja: "過度な強さに相手が萎縮する可能性", 'zh-CN': "过度的强势可能让对方畏缩", 'zh-TW': "過度的強勢可能讓對方畏縮", id: "Pasangan mungkin merasa terintimidasi oleh kekuatan berlebihan", vi: "Đối phương có thể cảm thấy bị đe dọa bởi sức mạnh quá mức" }
    ],
    advice: {
      ko: "강함도 좋지만 때로는 부드러움도 필요합니다. 가끔은 리드보다 듣는 것이 먼저일 때도 있어요.",
      en: "Strength is good, but sometimes gentleness is also needed. Sometimes listening comes before leading.",
      ja: "強さも良いですが、時には優しさも必要です。時にはリードより聞くことが先の時もあります。",
      'zh-CN': "强势很好，但有时也需要温柔。有时倾听比领导更重要。",
      'zh-TW': "強勢很好，但有時也需要溫柔。有時傾聽比領導更重要。",
      id: "Kekuatan itu baik, tetapi terkadang kelembutan juga diperlukan. Terkadang mendengarkan datang sebelum memimpin.",
      vi: "Sức mạnh cũng tốt, nhưng đôi khi cũng cần sự dịu dàng. Đôi khi lắng nghe đến trước việc lãnh đạo."
    },
    datingStyle: [
      { ko: "목표 달성 축하", en: "Goal achievement celebration", ja: "目標達成祝い", 'zh-CN': "目标达成庆祝", 'zh-TW': "目標達成慶祝", id: "Perayaan pencapaian tujuan", vi: "Chúc mừng đạt mục tiêu" },
      { ko: "도전적 활동", en: "Challenging activities", ja: "挑戦的活動", 'zh-CN': "挑战性活动", 'zh-TW': "挑戰性活動", id: "Aktivitas menantang", vi: "Hoạt động thử thách" },
      { ko: "고급 레스토랑", en: "Fine dining", ja: "高級レストラン", 'zh-CN': "高级餐厅", 'zh-TW': "高級餐廳", id: "Restoran mewah", vi: "Nhà hàng cao cấp" }
    ],
    idealJobs: [
      { ko: "CEO", en: "CEO", ja: "CEO", 'zh-CN': "首席执行官", 'zh-TW': "首席執行官", id: "CEO", vi: "CEO" },
      { ko: "임원", en: "Executive", ja: "役員", 'zh-CN': "高管", 'zh-TW': "高管", id: "Eksekutif", vi: "Giám đốc điều hành" },
      { ko: "운동선수", en: "Athlete", ja: "アスリート", 'zh-CN': "运动员", 'zh-TW': "運動員", id: "Atlet", vi: "Vận động viên" },
      { ko: "정치인", en: "Politician", ja: "政治家", 'zh-CN': "政治家", 'zh-TW': "政治家", id: "Politisi", vi: "Chính trị gia" },
      { ko: "프로듀서", en: "Producer", ja: "プロデューサー", 'zh-CN': "制作人", 'zh-TW': "製作人", id: "Produser", vi: "Nhà sản xuất" }
    ],
    compatibility: {
      best: ["Type3"],
      good: ["Type4"],
      careful: ["Type1"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type5",
    emoji: "🏡",
    title: {
      ko: "안정적 플래너형",
      en: "Stable Planner Type",
      ja: "安定したプランナー型",
      'zh-CN': "稳定规划型",
      'zh-TW': "穩定規劃型",
      id: "Tipe Perencana Stabil",
      vi: "Kiểu Lập Kế Hoạch Ổn Định"
    },
    description: {
      ko: "믿음직하고 책임감 있는 사람이 진리! 당신은 안정적이고 책임감 있는 사람에게 끌립니다. 계획적이고 현실적이며, 약속을 지키는 사람이 좋습니다. 경제관념이 있고 미래를 준비하는 모습에 신뢰감을 느낍니다. \"너는 정말 믿음직해\"가 최고의 칭찬입니다. 드라마틱한 연애보다 오래가는 안정적 관계를 원합니다.",
      en: "Reliable and responsible people are the truth! You are attracted to stable and responsible people. You like people who are planned, realistic, and keep their promises. You feel trust in their appearance of having economic sense and preparing for the future. \"You are really reliable\" is the best compliment. You want a long-lasting stable relationship rather than dramatic romance.",
      ja: "信頼できて責任感のある人が真実！あなたは安定していて責任感のある人に惹かれます。計画的で現実的で、約束を守る人が好きです。経済観念があり、未来を準備する姿に信頼感を感じます。「君は本当に信頼できる」が最高の褒め言葉です。ドラマチックな恋愛より長続きする安定した関係を望みます。",
      'zh-CN': "可靠和有责任感的人是真理！你被稳定和有责任感的人吸引。你喜欢有计划、现实、守承诺的人。他们有经济观念并为未来做准备的样子让你感到信任。「你真可靠」是最好的赞美。你希望长久稳定的关系而不是戏剧性的恋爱。",
      'zh-TW': "可靠和有責任感的人是真理！你被穩定和有責任感的人吸引。你喜歡有計劃、現實、守承諾的人。他們有經濟觀念並為未來做準備的樣子讓你感到信任。「你真可靠」是最好的讚美。你希望長久穩定的關係而不是戲劇性的戀愛。",
      id: "Orang yang dapat dipercaya dan bertanggung jawab adalah kebenaran! Anda tertarik pada orang yang stabil dan bertanggung jawab. Anda menyukai orang yang terencana, realistis, dan menepati janji. Anda merasakan kepercayaan pada penampilan mereka yang memiliki pemahaman ekonomi dan mempersiapkan masa depan. \"Anda benar-benar dapat dipercaya\" adalah pujian terbaik. Anda menginginkan hubungan stabil yang bertahan lama daripada romansa dramatis.",
      vi: "Những người đáng tin cậy và có trách nhiệm là chân lý! Bạn bị thu hút bởi những người ổn định và có trách nhiệm. Bạn thích những người có kế hoạch, thực tế và giữ lời hứa. Bạn cảm thấy tin tưởng vào việc họ có quan niệm kinh tế và chuẩn bị cho tương lai. \"Bạn thật sự đáng tin cậy\" là lời khen tốt nhất. Bạn muốn một mối quan hệ ổn định lâu dài hơn là tình yêu kịch tính."
    },
    pros: [
      { ko: "책임감", en: "Responsibility", ja: "責任感", 'zh-CN': "责任感", 'zh-TW': "責任感", id: "Tanggung jawab", vi: "Trách nhiệm" },
      { ko: "신뢰", en: "Trust", ja: "信頼", 'zh-CN': "信任", 'zh-TW': "信任", id: "Kepercayaan", vi: "Niềm tin" },
      { ko: "계획성", en: "Planning", ja: "計画性", 'zh-CN': "计划性", 'zh-TW': "計劃性", id: "Perencanaan", vi: "Tính kế hoạch" },
      { ko: "현실감각", en: "Realistic sense", ja: "現実感覚", 'zh-CN': "现实感", 'zh-TW': "現實感", id: "Rasa realistis", vi: "Cảm giác thực tế" }
    ],
    cons: [
      { ko: "지나친 안정 추구로 모험이 없을 수 있음", en: "May lack adventure due to excessive pursuit of stability", ja: "過度な安定追求で冒険がない可能性", 'zh-CN': "过度追求稳定可能缺乏冒险", 'zh-TW': "過度追求穩定可能缺乏冒險", id: "Mungkin kurang petualangan karena mengejar stabilitas berlebihan", vi: "Có thể thiếu phiêu lưu do theo đuổi sự ổn định quá mức" }
    ],
    advice: {
      ko: "안정도 중요하지만 때로는 모험도 필요합니다. 가끔은 계획보다 즉흥이 먼저일 때도 있어요.",
      en: "Stability is important, but sometimes adventure is also needed. Sometimes spontaneity comes before planning.",
      ja: "安定も重要ですが、時には冒険も必要です。時には計画より即興が先の時もあります。",
      'zh-CN': "稳定很重要，但有时也需要冒险。有时即兴比计划更重要。",
      'zh-TW': "穩定很重要，但有時也需要冒險。有時即興比計劃更重要。",
      id: "Stabilitas penting, tetapi terkadang petualangan juga diperlukan. Terkadang spontanitas datang sebelum perencanaan.",
      vi: "Sự ổn định rất quan trọng, nhưng đôi khi cũng cần phiêu lưu. Đôi khi sự tự phát đến trước việc lập kế hoạch."
    },
    datingStyle: [
      { ko: "계획 여행", en: "Planned trip", ja: "計画旅行", 'zh-CN': "计划旅行", 'zh-TW': "計劃旅行", id: "Perjalanan terencana", vi: "Chuyến đi có kế hoạch" },
      { ko: "저축 목표", en: "Savings goal", ja: "貯蓄目標", 'zh-CN': "储蓄目标", 'zh-TW': "儲蓄目標", id: "Tujuan tabungan", vi: "Mục tiêu tiết kiệm" },
      { ko: "부동산 투자", en: "Real estate investment", ja: "不動産投資", 'zh-CN': "房地产投资", 'zh-TW': "房地產投資", id: "Investasi properti", vi: "Đầu tư bất động sản" },
      { ko: "미래 설계", en: "Future planning", ja: "将来設計", 'zh-CN': "未来规划", 'zh-TW': "未來規劃", id: "Perencanaan masa depan", vi: "Lập kế hoạch tương lai" }
    ],
    idealJobs: [
      { ko: "공무원", en: "Civil servant", ja: "公務員", 'zh-CN': "公务员", 'zh-TW': "公務員", id: "Pegawai negeri", vi: "Công chức" },
      { ko: "회계사", en: "Accountant", ja: "会計士", 'zh-CN': "会计师", 'zh-TW': "會計師", id: "Akuntan", vi: "Kế toán" },
      { ko: "은행원", en: "Banker", ja: "銀行員", 'zh-CN': "银行职员", 'zh-TW': "銀行職員", id: "Bankir", vi: "Nhân viên ngân hàng" },
      { ko: "엔지니어", en: "Engineer", ja: "エンジニア", 'zh-CN': "工程师", 'zh-TW': "工程師", id: "Insinyur", vi: "Kỹ sư" },
      { ko: "관리직", en: "Management", ja: "管理職", 'zh-CN': "管理职位", 'zh-TW': "管理職位", id: "Manajemen", vi: "Quản lý" }
    ],
    compatibility: {
      best: ["Type3"],
      good: ["Type1"],
      careful: ["Type2"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type6",
    emoji: "🌈",
    title: {
      ko: "자유로운 영혼형",
      en: "Free Spirit Type",
      ja: "自由な魂型",
      'zh-CN': "自由灵魂型",
      'zh-TW': "自由靈魂型",
      id: "Tipe Jiwa Bebas",
      vi: "Kiểu Tâm Hồn Tự Do"
    },
    description: {
      ko: "독립적이고 개성 있는 사람이 멋져! 당신은 자유롭고 독립적인 사람에게 끌립니다. 자기만의 세계가 있고 독특한 개성을 가진 사람이 매력적입니다. 서로의 자유를 존중하고, 집착하지 않는 관계를 원합니다. \"너는 정말 특별해\"가 최고의 칭찬입니다. 틀에 박힌 연애보다 자유롭고 창의적인 관계를 추구합니다.",
      en: "Independent and unique people are cool! You are attracted to free and independent people. People who have their own world and unique personality are attractive. You want a relationship that respects each other's freedom and doesn't obsess. \"You are really special\" is the best compliment. You pursue a free and creative relationship rather than a stereotypical romance.",
      ja: "独立的で個性のある人がかっこいい！あなたは自由で独立した人に惹かれます。自分だけの世界を持ち、独特な個性を持つ人が魅力的です。お互いの自由を尊重し、執着しない関係を望みます。「君は本当に特別だ」が最高の褒め言葉です。型にはまった恋愛より自由で創造的な関係を追求します。",
      'zh-CN': "独立有个性的人很酷！你被自由独立的人吸引。有自己世界和独特个性的人很有魅力。你希望相互尊重自由、不执着的关係。「你真特别」是最好的赞美。你追求自由创造的关系而不是刻板的恋爱。",
      'zh-TW': "獨立有個性的人很酷！你被自由獨立的人吸引。有自己世界和獨特個性的人很有魅力。你希望相互尊重自由、不執著的關係。「你真特別」是最好的讚美。你追求自由創造的關係而不是刻板的戀愛。",
      id: "Orang yang mandiri dan unik itu keren! Anda tertarik pada orang yang bebas dan mandiri. Orang yang memiliki dunia mereka sendiri dan kepribadian unik sangat menarik. Anda menginginkan hubungan yang saling menghormati kebebasan dan tidak terobsesi. \"Anda benar-benar istimewa\" adalah pujian terbaik. Anda mengejar hubungan yang bebas dan kreatif daripada romansa stereotip.",
      vi: "Những người độc lập và có cá tính thật tuyệt! Bạn bị thu hút bởi những người tự do và độc lập. Những người có thế giới riêng và tính cách độc đáo rất hấp dẫn. Bạn muốn một mối quan hệ tôn trọng tự do của nhau và không ám ảnh. \"Bạn thật sự đặc biệt\" là lời khen tốt nhất. Bạn theo đuổi một mối quan hệ tự do và sáng tạo hơn là tình yêu khuôn mẫu."
    },
    pros: [
      { ko: "독립성", en: "Independence", ja: "独立性", 'zh-CN': "独立性", 'zh-TW': "獨立性", id: "Kemandirian", vi: "Tính độc lập" },
      { ko: "개성", en: "Personality", ja: "個性", 'zh-CN': "个性", 'zh-TW': "個性", id: "Kepribadian", vi: "Cá tính" },
      { ko: "창의성", en: "Creativity", ja: "創造性", 'zh-CN': "创造性", 'zh-TW': "創造性", id: "Kreativitas", vi: "Tính sáng tạo" },
      { ko: "자유로움", en: "Freedom", ja: "自由さ", 'zh-CN': "自由", 'zh-TW': "自由", id: "Kebebasan", vi: "Sự tự do" }
    ],
    cons: [
      { ko: "지나친 거리감으로 관계가 소원해질 수 있음", en: "Relationship may become distant due to excessive distance", ja: "過度な距離感で関係が疎遠になる可能性", 'zh-CN': "过度的距离感可能让关系疏远", 'zh-TW': "過度的距離感可能讓關係疏遠", id: "Hubungan mungkin menjadi jauh karena jarak berlebihan", vi: "Mối quan hệ có thể trở nên xa cách do khoảng cách quá mức" }
    ],
    advice: {
      ko: "자유도 중요하지만 때로는 가까움도 필요합니다. 가끔은 거리보다 연결이 먼저일 때도 있어요.",
      en: "Freedom is important, but sometimes closeness is also needed. Sometimes connection comes before distance.",
      ja: "自由も重要ですが、時には近さも必要です。時には距離よりつながりが先の時もあります。",
      'zh-CN': "自由很重要，但有时也需要亲近。有时连接比距离更重要。",
      'zh-TW': "自由很重要，但有時也需要親近。有時連接比距離更重要。",
      id: "Kebebasan penting, tetapi terkadang kedekatan juga diperlukan. Terkadang koneksi datang sebelum jarak.",
      vi: "Tự do rất quan trọng, nhưng đôi khi cũng cần sự gần gũi. Đôi khi kết nối đến trước khoảng cách."
    },
    datingStyle: [
      { ko: "즉흥 여행", en: "Spontaneous trip", ja: "即興旅行", 'zh-CN': "即兴旅行", 'zh-TW': "即興旅行", id: "Perjalanan spontan", vi: "Chuyến đi tự phát" },
      { ko: "새로운 경험", en: "New experiences", ja: "新しい経験", 'zh-CN': "新体验", 'zh-TW': "新體驗", id: "Pengalaman baru", vi: "Trải nghiệm mới" },
      { ko: "예술 활동", en: "Art activities", ja: "芸術活動", 'zh-CN': "艺术活动", 'zh-TW': "藝術活動", id: "Aktivitas seni", vi: "Hoạt động nghệ thuật" },
      { ko: "각자 취미", en: "Individual hobbies", ja: "各自の趣味", 'zh-CN': "各自爱好", 'zh-TW': "各自愛好", id: "Hobi individual", vi: "Sở thích cá nhân" }
    ],
    idealJobs: [
      { ko: "예술가", en: "Artist", ja: "芸術家", 'zh-CN': "艺术家", 'zh-TW': "藝術家", id: "Seniman", vi: "Nghệ sĩ" },
      { ko: "여행가", en: "Traveler", ja: "旅行家", 'zh-CN': "旅行家", 'zh-TW': "旅行家", id: "Pecinta perjalanan", vi: "Người du lịch" },
      { ko: "프리랜서", en: "Freelancer", ja: "フリーランサー", 'zh-CN': "自由职业者", 'zh-TW': "自由職業者", id: "Freelancer", vi: "Người làm tự do" },
      { ko: "창업가", en: "Entrepreneur", ja: "起業家", 'zh-CN': "企业家", 'zh-TW': "企業家", id: "Pengusaha", vi: "Doanh nhân" },
      { ko: "활동가", en: "Activist", ja: "活動家", 'zh-CN': "活动家", 'zh-TW': "活動家", id: "Aktivis", vi: "Nhà hoạt động" }
    ],
    compatibility: {
      best: ["Type6"],
      good: ["Type2"],
      careful: ["Type3"],
      difficult: ["Type5"]
    }
  }
];
