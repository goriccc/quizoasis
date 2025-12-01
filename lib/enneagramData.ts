export interface EnneagramQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      type1?: number;
      type2?: number;
      type3?: number;
      type4?: number;
      type5?: number;
      type6?: number;
      type7?: number;
      type8?: number;
      type9?: number;
    };
  }[];
}

export interface EnneagramResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  coreValue: Record<string, string>;
  caution: Record<string, string>;
  idealMatch: Record<string, string>;
  worstMatch: Record<string, string>;
}

// 질문 데이터 (한국어만 먼저 작성)
export const enneagramQuestions: EnneagramQuestion[] = [
  {
    id: 1,
    question: {
      ko: "문제가 생겼을 때 당신의 본능적인 반응은?",
      en: "What is your instinctive reaction when a problem arises?",
      ja: "問題が生じたとき、あなたの本能的な反応は？",
      'zh-CN': "当问题出现时，你的本能反应是什么？",
      'zh-TW': "當問題出現時，你的本能反應是什麼？",
      vi: "Phản ứng bản năng của bạn khi có vấn đề xảy ra là gì?",
      id: "Apa reaksi naluriah Anda ketika masalah muncul?"
    },
    options: [
      {
        text: {
          ko: "\"이게 옳아, 저건 틀렸어.\" 원칙과 기준에 따라 판단한다.",
          en: "\"This is right, that is wrong.\" I judge according to principles and standards.",
          ja: "「これは正しい、あれは間違っている。」原則と基準に従って判断する。",
          'zh-CN': "「这是对的，那是错的。」根据原则和标准来判断。",
          'zh-TW': "「這是對的，那是錯的。」根據原則和標準來判斷。",
          vi: "\"Cái này đúng, cái kia sai.\" Tôi phán đoán theo nguyên tắc và tiêu chuẩn.",
          id: "\"Ini benar, itu salah.\" Saya menilai menurut prinsip dan standar."
        },
        scores: { type1: 1, type8: 1 }
      },
      {
        text: {
          ko: "\"일단 상황을 보자.\" 융통성 있게 대처하거나 사람들의 반응을 살핀다.",
          en: "\"Let me see the situation first.\" I deal with it flexibly or observe people's reactions.",
          ja: "「まず状況を見よう。」柔軟に対処したり、人々の反応を観察する。",
          'zh-CN': "「先看看情况。」灵活应对或观察人们的反应。",
          'zh-TW': "「先看看情況。」靈活應對或觀察人們的反應。",
          vi: "\"Hãy xem tình huống trước.\" Tôi xử lý linh hoạt hoặc quan sát phản ứng của mọi người.",
          id: "\"Mari lihat situasinya dulu.\" Saya menangani dengan fleksibel atau mengamati reaksi orang."
        },
        scores: { type9: 1, type2: 1 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "당신이 더 중요하게 생각하는 것은?",
      en: "What do you consider more important?",
      ja: "あなたがより重要だと思うことは？",
      'zh-CN': "你认为什么更重要？",
      'zh-TW': "你認為什麼更重要？",
      vi: "Bạn coi trọng điều gì hơn?",
      id: "Apa yang Anda anggap lebih penting?"
    },
    options: [
      {
        text: {
          ko: "다른 사람들에게 사랑받고 필요한 존재가 되는 것.",
          en: "Being loved and needed by others.",
          ja: "他の人々から愛され、必要とされる存在になること。",
          'zh-CN': "被他人所爱和需要。",
          'zh-TW': "被他人所愛和需要。",
          vi: "Được yêu thương và cần thiết bởi người khác.",
          id: "Dicintai dan dibutuhkan oleh orang lain."
        },
        scores: { type2: 1, type6: 1 }
      },
      {
        text: {
          ko: "나만의 능력과 성과를 인정받고 성공하는 것.",
          en: "Having my own abilities and achievements recognized and succeeding.",
          ja: "自分だけの能力と成果を認められ、成功すること。",
          'zh-CN': "让自己的能力和成就得到认可并取得成功。",
          'zh-TW': "讓自己的能力和成就得到認可並取得成功。",
          vi: "Được công nhận khả năng và thành tích của riêng mình và thành công.",
          id: "Kemampuan dan pencapaian saya sendiri diakui dan berhasil."
        },
        scores: { type3: 1, type1: 1 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "감정을 표현하는 방식은?",
      en: "How do you express emotions?",
      ja: "感情を表現する方法は？",
      'zh-CN': "你如何表达情感？",
      'zh-TW': "你如何表達情感？",
      vi: "Bạn thể hiện cảm xúc như thế nào?",
      id: "Bagaimana Anda mengekspresikan emosi?"
    },
    options: [
      {
        text: {
          ko: "남들과 다른 특별한 감정을 느끼며, 이를 독창적으로 표현하고 싶다.",
          en: "I feel special emotions different from others and want to express them uniquely.",
          ja: "他の人とは違う特別な感情を感じ、それを独創的に表現したい。",
          'zh-CN': "感受到与他人不同的特殊情感，并想独特地表达出来。",
          'zh-TW': "感受到與他人不同的特殊情感，並想獨特地表達出來。",
          vi: "Tôi cảm nhận những cảm xúc đặc biệt khác với người khác và muốn thể hiện chúng một cách độc đáo.",
          id: "Saya merasakan emosi khusus yang berbeda dari orang lain dan ingin mengekspresikannya secara unik."
        },
        scores: { type4: 1, type7: 1 }
      },
      {
        text: {
          ko: "감정에 휘둘리기보다는 객관적인 사실과 정보를 분석하려 한다.",
          en: "I try to analyze objective facts and information rather than being swayed by emotions.",
          ja: "感情に振り回されるよりも、客観的な事実と情報を分析しようとする。",
          'zh-CN': "更倾向于分析客观事实和信息，而不是被情感左右。",
          'zh-TW': "更傾向於分析客觀事實和信息，而不是被情感左右。",
          vi: "Tôi cố gắng phân tích sự thật và thông tin khách quan thay vì bị cảm xúc chi phối.",
          id: "Saya mencoba menganalisis fakta dan informasi objektif daripada terpengaruh oleh emosi."
        },
        scores: { type5: 1, type1: 1 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "새로운 일을 시작할 때 가장 걱정되는 것은?",
      en: "What worries you most when starting something new?",
      ja: "新しいことを始める時、最も心配なことは？",
      'zh-CN': "开始新事物时，你最担心什么？",
      'zh-TW': "開始新事物時，你最擔心什麼？",
      vi: "Điều gì khiến bạn lo lắng nhất khi bắt đầu điều gì đó mới?",
      id: "Apa yang paling Anda khawatirkan saat memulai sesuatu yang baru?"
    },
    options: [
      {
        text: {
          ko: "\"혹시 잘못되면 어쩌지?\" 안전과 돌발 상황에 대한 대비책이 필요하다.",
          en: "\"What if something goes wrong?\" I need a plan for safety and unexpected situations.",
          ja: "「もし間違ったらどうしよう？」安全と突発的な状況に対する対策が必要だ。",
          'zh-CN': "「如果出错了怎么办？」需要为安全和突发情况做准备。",
          'zh-TW': "「如果出錯了怎麼辦？」需要為安全和突發情況做準備。",
          vi: "\"Nếu có gì đó sai sót thì sao?\" Tôi cần kế hoạch cho sự an toàn và tình huống bất ngờ.",
          id: "\"Bagaimana jika ada yang salah?\" Saya perlu rencana untuk keselamatan dan situasi tak terduga."
        },
        scores: { type6: 1, type1: 1 }
      },
      {
        text: {
          ko: "\"지루하면 어쩌지?\" 흥미와 즐거움이 없으면 시작하기 싫다.",
          en: "\"What if it's boring?\" I don't want to start if there's no interest or fun.",
          ja: "「退屈だったらどうしよう？」興味と楽しみがなければ始めたくない。",
          'zh-CN': "「如果很无聊怎么办？」如果没有兴趣和乐趣就不想开始。",
          'zh-TW': "「如果很無聊怎麼辦？」如果沒有興趣和樂趣就不想開始。",
          vi: "\"Nếu nó nhàm chán thì sao?\" Tôi không muốn bắt đầu nếu không có hứng thú hoặc niềm vui.",
          id: "\"Bagaimana jika membosankan?\" Saya tidak ingin memulai jika tidak ada minat atau kesenangan."
        },
        scores: { type7: 1, type4: 1 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "그룹 활동에서 당신의 태도는?",
      en: "What is your attitude in group activities?",
      ja: "グループ活動でのあなたの態度は？",
      'zh-CN': "在团体活动中，你的态度是什么？",
      'zh-TW': "在團體活動中，你的態度是什麼？",
      vi: "Thái độ của bạn trong hoạt động nhóm là gì?",
      id: "Apa sikap Anda dalam aktivitas kelompok?"
    },
    options: [
      {
        text: {
          ko: "내가 주도권을 잡고 강하게 이끌어가야 직성이 풀린다.",
          en: "I need to take the lead and guide strongly to feel satisfied.",
          ja: "私が主導権を握り、強く導かなければ気が済まない。",
          'zh-CN': "我需要掌握主导权并强势引导才能满足。",
          'zh-TW': "我需要掌握主導權並強勢引導才能滿足。",
          vi: "Tôi cần nắm quyền chủ đạo và dẫn dắt mạnh mẽ mới cảm thấy thỏa mãn.",
          id: "Saya perlu mengambil alih dan memimpin dengan kuat untuk merasa puas."
        },
        scores: { type8: 1, type3: 1 }
      },
      {
        text: {
          ko: "갈등을 피하고 모두가 편안한 분위기를 유지하려 한다.",
          en: "I try to avoid conflict and maintain a comfortable atmosphere for everyone.",
          ja: "対立を避け、みんなが快適な雰囲気を維持しようとする。",
          'zh-CN': "我试图避免冲突，为每个人维持舒适的氛围。",
          'zh-TW': "我試圖避免衝突，為每個人維持舒適的氛圍。",
          vi: "Tôi cố gắng tránh xung đột và duy trì bầu không khí thoải mái cho mọi người.",
          id: "Saya mencoba menghindari konflik dan mempertahankan suasana nyaman untuk semua orang."
        },
        scores: { type9: 1, type2: 1 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "당신을 가장 힘들게 하는 상황은?",
      en: "What situation is most difficult for you?",
      ja: "あなたを最も困難にする状況は？",
      'zh-CN': "什么情况让你最困难？",
      'zh-TW': "什麼情況讓你最困難？",
      vi: "Tình huống nào khiến bạn khó khăn nhất?",
      id: "Situasi apa yang paling sulit bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "불완전하고 실수가 용납되지 않는 무질서한 상황.",
          en: "Incomplete and chaotic situations where mistakes are not tolerated.",
          ja: "不完全で、間違いが許されない無秩序な状況。",
          'zh-CN': "不完整且混乱的情况，错误不被容忍。",
          'zh-TW': "不完整且混亂的情況，錯誤不被容忍。",
          vi: "Tình huống không hoàn chỉnh và hỗn loạn nơi sai sót không được chấp nhận.",
          id: "Situasi tidak lengkap dan kacau di mana kesalahan tidak ditoleransi."
        },
        scores: { type1: 1, type5: 1 }
      },
      {
        text: {
          ko: "사람들이 나를 외면하거나 쓸모없는 사람 취급할 때.",
          en: "When people ignore me or treat me as useless.",
          ja: "人々が私を無視したり、役に立たない人として扱うとき。",
          'zh-CN': "当人们忽视我或把我当作无用的人时。",
          'zh-TW': "當人們忽視我或把我當作無用的人時。",
          vi: "Khi mọi người bỏ qua tôi hoặc coi tôi là vô dụng.",
          id: "Ketika orang mengabaikan saya atau memperlakukan saya sebagai tidak berguna."
        },
        scores: { type2: 1, type4: 1 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "자신의 이미지에 대해 어떻게 생각하나요?",
      en: "What do you think about your own image?",
      ja: "自分のイメージについてどう思いますか？",
      'zh-CN': "你如何看待自己的形象？",
      'zh-TW': "你如何看待自己的形象？",
      vi: "Bạn nghĩ gì về hình ảnh của chính mình?",
      id: "Apa yang Anda pikirkan tentang citra Anda sendiri?"
    },
    options: [
      {
        text: {
          ko: "나는 효율적이고 유능하며, 목표를 달성하는 사람이다.",
          en: "I am efficient, capable, and a person who achieves goals.",
          ja: "私は効率的で有能であり、目標を達成する人だ。",
          'zh-CN': "我是高效、有能力、能实现目标的人。",
          'zh-TW': "我是高效、有能力、能實現目標的人。",
          vi: "Tôi là người hiệu quả, có năng lực và đạt được mục tiêu.",
          id: "Saya efisien, mampu, dan orang yang mencapai tujuan."
        },
        scores: { type3: 1, type8: 1 }
      },
      {
        text: {
          ko: "나는 남들과 다르며, 이해받기 힘든 깊은 내면을 가진 사람이다.",
          en: "I am different from others and have a deep inner self that is hard to understand.",
          ja: "私は他の人とは違い、理解されにくい深い内面を持った人だ。",
          'zh-CN': "我与他人不同，拥有难以理解的深刻内心。",
          'zh-TW': "我與他人不同，擁有難以理解的深刻內心。",
          vi: "Tôi khác với người khác và có nội tâm sâu sắc khó hiểu.",
          id: "Saya berbeda dari orang lain dan memiliki diri batin yang dalam yang sulit dipahami."
        },
        scores: { type4: 1, type5: 1 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "휴일, 혼자만의 시간이 주어졌을 때?",
      en: "When you have a holiday, time alone?",
      ja: "休日、一人だけの時間が与えられたとき？",
      'zh-CN': "当你有了假期，独处的时间？",
      'zh-TW': "當你有了假期，獨處的時間？",
      vi: "Khi bạn có kỳ nghỉ, thời gian một mình?",
      id: "Ketika Anda memiliki liburan, waktu sendirian?"
    },
    options: [
      {
        text: {
          ko: "관심 있는 분야를 깊게 파고들거나 지식을 쌓는다.",
          en: "I delve deeply into areas of interest or build knowledge.",
          ja: "興味のある分野を深く掘り下げたり、知識を積み上げる。",
          'zh-CN': "深入感兴趣的领域或积累知识。",
          'zh-TW': "深入感興趣的領域或積累知識。",
          vi: "Tôi đào sâu vào các lĩnh vực quan tâm hoặc tích lũy kiến thức.",
          id: "Saya menyelami bidang minat secara mendalam atau membangun pengetahuan."
        },
        scores: { type5: 1, type4: 1 }
      },
      {
        text: {
          ko: "친구들을 만나거나 새로운 모험을 찾아 떠난다.",
          en: "I meet friends or go on new adventures.",
          ja: "友達に会ったり、新しい冒険を探して出かける。",
          'zh-CN': "与朋友见面或寻找新的冒险。",
          'zh-TW': "與朋友見面或尋找新的冒險。",
          vi: "Tôi gặp bạn bè hoặc đi tìm những cuộc phiêu lưu mới.",
          id: "Saya bertemu teman atau pergi mencari petualangan baru."
        },
        scores: { type7: 1, type2: 1 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "결정을 내릴 때 당신의 기준은?",
      en: "What is your standard when making decisions?",
      ja: "決定を下すとき、あなたの基準は？",
      'zh-CN': "做决定时，你的标准是什么？",
      'zh-TW': "做決定時，你的標準是什麼？",
      vi: "Tiêu chuẩn của bạn khi đưa ra quyết định là gì?",
      id: "Apa standar Anda saat membuat keputusan?"
    },
    options: [
      {
        text: {
          ko: "신뢰할 수 있는 권위나 규칙, 혹은 내면의 두려움.",
          en: "Trustworthy authority or rules, or inner fear.",
          ja: "信頼できる権威や規則、あるいは内面の恐れ。",
          'zh-CN': "可信的权威或规则，或内心的恐惧。",
          'zh-TW': "可信的權威或規則，或內心的恐懼。",
          vi: "Thẩm quyền hoặc quy tắc đáng tin cậy, hoặc nỗi sợ hãi bên trong.",
          id: "Otoritas atau aturan yang dapat dipercaya, atau ketakutan batin."
        },
        scores: { type6: 1, type1: 1 }
      },
      {
        text: {
          ko: "나의 본능적인 직감과 욕구, 혹은 통제받기 싫은 마음.",
          en: "My instinctive intuition and desires, or a mind that dislikes being controlled.",
          ja: "私の本能的な直感と欲望、あるいはコントロールされたくない心。",
          'zh-CN': "我本能的直觉和欲望，或不想被控制的心。",
          'zh-TW': "我本能的直覺和欲望，或不想被控制的心。",
          vi: "Trực giác và ham muốn bản năng của tôi, hoặc tâm trí không muốn bị kiểm soát.",
          id: "Intuisi dan keinginan naluriah saya, atau pikiran yang tidak suka dikendalikan."
        },
        scores: { type8: 1, type7: 1 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구와 다퉜을 때 해결 방식은?",
      en: "How do you resolve conflicts with friends?",
      ja: "友達と喧嘩したときの解決方法は？",
      'zh-CN': "与朋友发生冲突时，你的解决方式是什么？",
      'zh-TW': "與朋友發生衝突時，你的解決方式是什麼？",
      vi: "Cách bạn giải quyết khi cãi nhau với bạn bè là gì?",
      id: "Bagaimana Anda menyelesaikan konflik dengan teman?"
    },
    options: [
      {
        text: {
          ko: "\"내 말이 맞아.\" 강하게 주장하며 물러서지 않는다.",
          en: "\"I'm right.\" I insist strongly and don't back down.",
          ja: "「私の言うことが正しい。」強く主張し、引かない。",
          'zh-CN': "「我是对的。」我坚持己见，不退缩。",
          'zh-TW': "「我是對的。」我堅持己見，不退縮。",
          vi: "\"Tôi đúng.\" Tôi khăng khăng mạnh mẽ và không lùi bước.",
          id: "\"Saya benar.\" Saya bersikeras dengan kuat dan tidak mundur."
        },
        scores: { type8: 1, type1: 1 }
      },
      {
        text: {
          ko: "\"좋은 게 좋은 거지.\" 내가 좀 참더라도 화해하고 평화를 찾는다.",
          en: "\"Good is good.\" Even if I have to endure a bit, I reconcile and seek peace.",
          ja: "「良いことは良いことだ。」私が少し我慢しても、和解して平和を求める。",
          'zh-CN': "「好就是好。」即使我要忍受一点，我也会和解并寻求和平。",
          'zh-TW': "「好就是好。」即使我要忍受一點，我也會和解並尋求和平。",
          vi: "\"Tốt là tốt.\" Dù tôi phải chịu đựng một chút, tôi vẫn hòa giải và tìm kiếm hòa bình.",
          id: "\"Baik adalah baik.\" Meskipun saya harus menahan sedikit, saya berdamai dan mencari perdamaian."
        },
        scores: { type9: 1, type6: 1 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "타인에게 바라는 나의 모습은?",
      en: "What image do you want others to see of you?",
      ja: "他人に期待する自分の姿は？",
      'zh-CN': "你希望别人看到你什么样的形象？",
      'zh-TW': "你希望別人看到你什麼樣的形象？",
      vi: "Bạn muốn người khác thấy hình ảnh gì của mình?",
      id: "Citra seperti apa yang Anda inginkan orang lain lihat dari Anda?"
    },
    options: [
      {
        text: {
          ko: "항상 바르고 모범적이며 완벽한 사람.",
          en: "Always correct, exemplary, and perfect person.",
          ja: "常に正しく、模範的で完璧な人。",
          'zh-CN': "总是正确、模范且完美的人。",
          'zh-TW': "總是正確、模範且完美的人。",
          vi: "Luôn đúng đắn, gương mẫu và hoàn hảo.",
          id: "Selalu benar, teladan, dan sempurna."
        },
        scores: { type1: 1, type3: 1 }
      },
      {
        text: {
          ko: "언제나 즐겁고 긍정적이며 에너지가 넘치는 사람.",
          en: "Always cheerful, positive, and energetic person.",
          ja: "いつも楽しく、肯定的でエネルギッシュな人。",
          'zh-CN': "总是快乐、积极且充满活力的人。",
          'zh-TW': "總是快樂、積極且充滿活力的人。",
          vi: "Luôn vui vẻ, tích cực và tràn đầy năng lượng.",
          id: "Selalu ceria, positif, dan penuh energi."
        },
        scores: { type7: 1, type2: 1 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 인생 목표는 무엇인가요?",
      en: "What is your life goal?",
      ja: "あなたの人生の目標は何ですか？",
      'zh-CN': "你的人生目标是什么？",
      'zh-TW': "你的人生目標是什麼？",
      vi: "Mục tiêu cuộc đời của bạn là gì?",
      id: "Apa tujuan hidup Anda?"
    },
    options: [
      {
        text: {
          ko: "세상에 도움이 되는 사람, 혹은 사랑받는 사람.",
          en: "A person who helps the world, or a person who is loved.",
          ja: "世界に役立つ人、あるいは愛される人。",
          'zh-CN': "对世界有帮助的人，或被爱的人。",
          'zh-TW': "對世界有幫助的人，或被愛的人。",
          vi: "Người giúp ích cho thế giới, hoặc người được yêu thương.",
          id: "Orang yang membantu dunia, atau orang yang dicintai."
        },
        scores: { type2: 1, type9: 1 }
      },
      {
        text: {
          ko: "누구에게도 의지하지 않는 독립적이고 강한 사람.",
          en: "An independent and strong person who doesn't depend on anyone.",
          ja: "誰にも依存しない独立した強い人。",
          'zh-CN': "不依赖任何人的独立且强大的人。",
          'zh-TW': "不依賴任何人的獨立且強大的人。",
          vi: "Người độc lập và mạnh mẽ không phụ thuộc vào ai.",
          id: "Orang yang mandiri dan kuat yang tidak bergantung pada siapa pun."
        },
        scores: { type5: 1, type8: 1 }
      }
    ]
  }
];

// 결과 데이터 (한국어만 먼저 작성)
export const enneagramResults: EnneagramResult[] = [
  {
    type: "Type1",
    emoji: "📏",
    title: {
      ko: "원칙을 지키는, 완벽주의자 (The Reformer)",
      en: "The Perfectionist Who Upholds Principles (The Reformer)",
      ja: "原則を守る、完璧主義者 (The Reformer)",
      'zh-CN': "坚持原则的完美主义者 (改革者)",
      'zh-TW': "堅持原則的完美主義者 (改革者)",
      vi: "Người Tuân Thủ Nguyên Tắc, Người Cầu Toàn (The Reformer)",
      id: "Perfeksionis yang Menjunjung Prinsip (The Reformer)"
    },
    shortDescription: {
      ko: "\"세상은 올바른 규칙대로 돌아가야 해.\"",
      en: "\"The world must operate according to the right rules.\"",
      ja: "「世界は正しい規則通りに回らなければならない。」",
      'zh-CN': "「世界必须按照正确的规则运行。」",
      'zh-TW': "「世界必須按照正確的規則運行。」",
      vi: "\"Thế giới phải vận hành theo những quy tắc đúng đắn.\"",
      id: "\"Dunia harus beroperasi menurut aturan yang benar.\""
    },
    description: {
      ko: "당신은 매사에 꼼꼼하고 원칙을 중요하게 생각합니다. 높은 도덕적 기준을 가지고 있으며, 자신과 타인에게 엄격합니다. 실수를 두려워하고 항상 더 나은 방법을 고민하는 당신은 세상을 개선하려는 개혁가입니다.",
      en: "You are meticulous in everything and value principles. You have high moral standards and are strict with yourself and others. You fear mistakes and always think about better ways. You are a reformer who wants to improve the world.",
      ja: "あなたは何事にも細心で、原則を重要視します。高い道徳的基準を持ち、自分と他人に厳格です。間違いを恐れ、常により良い方法を考えるあなたは、世界を改善しようとする改革者です。",
      'zh-CN': "你对每件事都很细致，重视原则。你拥有很高的道德标准，对自己和他人都很严格。你害怕犯错，总是思考更好的方法。你是一个想要改善世界的改革者。",
      'zh-TW': "你對每件事都很細緻，重視原則。你擁有很高的道德標準，對自己和他人都很嚴格。你害怕犯錯，總是思考更好的方法。你是一個想要改善世界的改革者。",
      vi: "Bạn tỉ mỉ trong mọi việc và coi trọng nguyên tắc. Bạn có tiêu chuẩn đạo đức cao và nghiêm khắc với bản thân và người khác. Bạn sợ sai sót và luôn suy nghĩ về cách tốt hơn. Bạn là người cải cách muốn cải thiện thế giới.",
      id: "Anda teliti dalam segala hal dan menghargai prinsip. Anda memiliki standar moral yang tinggi dan ketat dengan diri sendiri dan orang lain. Anda takut kesalahan dan selalu memikirkan cara yang lebih baik. Anda adalah reformis yang ingin memperbaiki dunia."
    },
    coreValue: {
      ko: "정직, 성실, 질서",
      en: "Honesty, Sincerity, Order",
      ja: "正直、誠実、秩序",
      'zh-CN': "诚实、真诚、秩序",
      'zh-TW': "誠實、真誠、秩序",
      vi: "Trung thực, chân thành, trật tự",
      id: "Kejujuran, Ketulusan, Ketertiban"
    },
    caution: {
      ko: "지나친 비판과 자기 검열을 내려놓으세요.",
      en: "Let go of excessive criticism and self-censorship.",
      ja: "過度な批判と自己検閲を手放してください。",
      'zh-CN': "放下过度的批评和自我审查。",
      'zh-TW': "放下過度的批評和自我審查。",
      vi: "Hãy buông bỏ sự chỉ trích quá mức và tự kiểm duyệt.",
      id: "Lepaskan kritik berlebihan dan penyensoran diri."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 7 (즐거움을 알려줌)",
      en: "💖 Ideal Match: Type 7 (Shows you joy)",
      ja: "💖 理想の相性: Type 7 (楽しみを教えてくれる)",
      'zh-CN': "💖 理想配对: Type 7 (告诉你快乐)",
      'zh-TW': "💖 理想配對: Type 7 (告訴你快樂)",
      vi: "💖 Cặp đôi lý tưởng: Type 7 (Chỉ cho bạn niềm vui)",
      id: "💖 Pasangan Ideal: Type 7 (Menunjukkan kegembiraan)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 4 (감정적이라 이해 안 됨)",
      en: "💔 Worst Match: Type 4 (Too emotional to understand)",
      ja: "💔 最悪の相性: Type 4 (感情的すぎて理解できない)",
      'zh-CN': "💔 最差配对: Type 4 (太情绪化，无法理解)",
      'zh-TW': "💔 最差配對: Type 4 (太情緒化，無法理解)",
      vi: "💔 Cặp đôi tệ nhất: Type 4 (Quá cảm xúc nên không hiểu được)",
      id: "💔 Pasangan Terburuk: Type 4 (Terlalu emosional untuk dipahami)"
    }
  },
  {
    type: "Type2",
    emoji: "🥰",
    title: {
      ko: "사랑을 전하는, 조력자 (The Helper)",
      en: "The Helper Who Spreads Love (The Helper)",
      ja: "愛を伝える、助力者 (The Helper)",
      'zh-CN': "传递爱的助人者 (助人者)",
      'zh-TW': "傳遞愛的助人者 (助人者)",
      vi: "Người Giúp Đỡ, Người Truyền Tình Yêu (The Helper)",
      id: "Pembantu yang Menyebarkan Cinta (The Helper)"
    },
    shortDescription: {
      ko: "\"내가 널 도와줄게. 넌 나에게 특별해.\"",
      en: "\"I'll help you. You're special to me.\"",
      ja: "「私があなたを助ける。あなたは私にとって特別だ。」",
      'zh-CN': "「我会帮助你。你对我来说很特别。」",
      'zh-TW': "「我會幫助你。你對我來說很特別。」",
      vi: "\"Tôi sẽ giúp bạn. Bạn đặc biệt với tôi.\"",
      id: "\"Saya akan membantu Anda. Anda istimewa bagi saya.\""
    },
    description: {
      ko: "당신은 따뜻한 마음씨로 타인을 돕는 것을 좋아합니다. 사람들에게 사랑받고 필요로 해지는 것에서 자신의 가치를 느낍니다. 공감 능력이 뛰어나지만, 때로는 자신의 욕구보다 남을 먼저 챙기느라 지칠 수 있습니다.",
      en: "You like helping others with a warm heart. You feel your value from being loved and needed by people. You have excellent empathy, but sometimes you can get tired from taking care of others before your own needs.",
      ja: "あなたは温かい心で他人を助けることが好きです。人々から愛され、必要とされることで自分の価値を感じます。共感能力が優れていますが、時には自分の欲求よりも他人を先に世話することで疲れることがあります。",
      'zh-CN': "你喜欢用温暖的心帮助他人。你从被他人所爱和需要中感受到自己的价值。你拥有出色的共情能力，但有时会因为先照顾他人而不是自己的需求而感到疲惫。",
      'zh-TW': "你喜歡用溫暖的心幫助他人。你從被他人所愛和需要中感受到自己的價值。你擁有出色的共情能力，但有時會因為先照顧他人而不是自己的需求而感到疲憊。",
      vi: "Bạn thích giúp đỡ người khác bằng trái tim ấm áp. Bạn cảm nhận giá trị của mình từ việc được yêu thương và cần thiết bởi mọi người. Bạn có khả năng đồng cảm xuất sắc, nhưng đôi khi bạn có thể mệt mỏi vì chăm sóc người khác trước nhu cầu của chính mình.",
      id: "Anda suka membantu orang lain dengan hati yang hangat. Anda merasakan nilai Anda dari dicintai dan dibutuhkan oleh orang. Anda memiliki empati yang sangat baik, tetapi kadang-kadang Anda bisa lelah karena merawat orang lain sebelum kebutuhan Anda sendiri."
    },
    coreValue: {
      ko: "봉사, 사랑, 희생",
      en: "Service, Love, Sacrifice",
      ja: "奉仕、愛、犠牲",
      'zh-CN': "服务、爱、牺牲",
      'zh-TW': "服務、愛、犧牲",
      vi: "Phục vụ, tình yêu, hy sinh",
      id: "Pelayanan, Cinta, Pengorbanan"
    },
    caution: {
      ko: "거절하는 법을 배우고 나를 먼저 챙기세요.",
      en: "Learn to say no and take care of yourself first.",
      ja: "断ることを学び、自分をまず大切にしてください。",
      'zh-CN': "学会拒绝，先照顾好自己。",
      'zh-TW': "學會拒絕，先照顧好自己。",
      vi: "Học cách từ chối và chăm sóc bản thân trước.",
      id: "Belajar mengatakan tidak dan jaga diri sendiri terlebih dahulu."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 4 (감성을 공유함)",
      en: "💖 Ideal Match: Type 4 (Shares emotions)",
      ja: "💖 理想の相性: Type 4 (感情を共有する)",
      'zh-CN': "💖 理想配对: Type 4 (分享情感)",
      'zh-TW': "💖 理想配對: Type 4 (分享情感)",
      vi: "💖 Cặp đôi lý tưởng: Type 4 (Chia sẻ cảm xúc)",
      id: "💖 Pasangan Ideal: Type 4 (Berbagi emosi)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 8 (너무 강해서 상처받음)",
      en: "💔 Worst Match: Type 8 (Too strong, gets hurt)",
      ja: "💔 最悪の相性: Type 8 (強すぎて傷つく)",
      'zh-CN': "💔 最差配对: Type 8 (太强势，会受伤)",
      'zh-TW': "💔 最差配對: Type 8 (太強勢，會受傷)",
      vi: "💔 Cặp đôi tệ nhất: Type 8 (Quá mạnh mẽ, bị tổn thương)",
      id: "💔 Pasangan Terburuk: Type 8 (Terlalu kuat, terluka)"
    }
  },
  {
    type: "Type3",
    emoji: "🏆",
    title: {
      ko: "목표를 달성하는, 성취자 (The Achiever)",
      en: "The Achiever Who Reaches Goals (The Achiever)",
      ja: "目標を達成する、達成者 (The Achiever)",
      'zh-CN': "实现目标的成就者 (成就者)",
      'zh-TW': "實現目標的成就者 (成就者)",
      vi: "Người Thành Đạt, Người Đạt Mục Tiêu (The Achiever)",
      id: "Pencapaian yang Mencapai Tujuan (The Achiever)"
    },
    shortDescription: {
      ko: "\"결과로 증명한다. 나는 유능해.\"",
      en: "\"I prove it with results. I am capable.\"",
      ja: "「結果で証明する。私は有能だ。」",
      'zh-CN': "「用结果证明。我有能力。」",
      'zh-TW': "「用結果證明。我有能力。」",
      vi: "\"Tôi chứng minh bằng kết quả. Tôi có năng lực.\"",
      id: "\"Saya membuktikannya dengan hasil. Saya mampu.\""
    },
    description: {
      ko: "당신은 성공 지향적이고 효율성을 중시합니다. 어디서든 눈에 띄는 성과를 내며, 타인에게 인정받는 것을 좋아합니다. 카멜레온처럼 상황에 맞춰 자신을 연출할 줄 아는 능력자이지만, 가끔은 진정한 내 모습을 잃어버린 기분이 들기도 합니다.",
      en: "You are success-oriented and value efficiency. You achieve outstanding results anywhere and like being recognized by others. You are capable of presenting yourself according to situations like a chameleon, but sometimes you feel like you've lost your true self.",
      ja: "あなたは成功志向で、効率性を重視します。どこでも目立つ成果を上げ、他人から認められることを好みます。カメレオンのように状況に合わせて自分を演出できる能力者ですが、時には本当の自分の姿を失った気分になることもあります。",
      'zh-CN': "你以成功为导向，重视效率。你在任何地方都能取得突出成果，喜欢得到他人的认可。你像变色龙一样能够根据情况展现自己，但有时你会感到失去了真正的自我。",
      'zh-TW': "你以成功為導向，重視效率。你在任何地方都能取得突出成果，喜歡得到他人的認可。你像變色龍一樣能夠根據情況展現自己，但有時你會感到失去了真正的自我。",
      vi: "Bạn hướng đến thành công và coi trọng hiệu quả. Bạn đạt được kết quả nổi bật ở bất cứ đâu và thích được người khác công nhận. Bạn có khả năng thể hiện bản thân theo tình huống như một con tắc kè, nhưng đôi khi bạn cảm thấy như đã mất đi bản thân thật của mình.",
      id: "Anda berorientasi pada kesuksesan dan menghargai efisiensi. Anda mencapai hasil yang menonjol di mana saja dan suka diakui oleh orang lain. Anda mampu mempresentasikan diri sesuai situasi seperti bunglon, tetapi kadang-kadang Anda merasa seperti kehilangan diri Anda yang sebenarnya."
    },
    coreValue: {
      ko: "성공, 효율, 이미지",
      en: "Success, Efficiency, Image",
      ja: "成功、効率、イメージ",
      'zh-CN': "成功、效率、形象",
      'zh-TW': "成功、效率、形象",
      vi: "Thành công, hiệu quả, hình ảnh",
      id: "Kesuksesan, Efisiensi, Citra"
    },
    caution: {
      ko: "일 중독에서 벗어나 휴식을 취하세요.",
      en: "Break away from work addiction and take a rest.",
      ja: "仕事中毒から抜け出し、休息を取ってください。",
      'zh-CN': "摆脱工作成瘾，好好休息。",
      'zh-TW': "擺脫工作成癮，好好休息。",
      vi: "Thoát khỏi chứng nghiện công việc và nghỉ ngơi.",
      id: "Lepaskan diri dari kecanduan kerja dan istirahat."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 6 (성실함이 잘 맞음)",
      en: "💖 Ideal Match: Type 6 (Sincerity matches well)",
      ja: "💖 理想の相性: Type 6 (誠実さがよく合う)",
      'zh-CN': "💖 理想配对: Type 6 (真诚很匹配)",
      'zh-TW': "💖 理想配對: Type 6 (真誠很匹配)",
      vi: "💖 Cặp đôi lý tưởng: Type 6 (Sự chân thành rất phù hợp)",
      id: "💖 Pasangan Ideal: Type 6 (Ketulusan cocok dengan baik)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 9 (느긋해서 답답함)",
      en: "💔 Worst Match: Type 9 (Too relaxed, frustrating)",
      ja: "💔 最悪の相性: Type 9 (のんびりしすぎてイライラする)",
      'zh-CN': "💔 最差配对: Type 9 (太放松，令人沮丧)",
      'zh-TW': "💔 最差配對: Type 9 (太放鬆，令人沮喪)",
      vi: "💔 Cặp đôi tệ nhất: Type 9 (Quá thư giãn, gây bực bội)",
      id: "💔 Pasangan Terburuk: Type 9 (Terlalu santai, membuat frustrasi)"
    }
  },
  {
    type: "Type4",
    emoji: "🎨",
    title: {
      ko: "특별함을 꿈꾸는, 예술가 (The Individualist)",
      en: "The Artist Who Dreams of Uniqueness (The Individualist)",
      ja: "特別さを夢見る、芸術家 (The Individualist)",
      'zh-CN': "梦想独特性的艺术家 (个人主义者)",
      'zh-TW': "夢想獨特性的藝術家 (個人主義者)",
      vi: "Nghệ Sĩ, Người Mơ Ước Sự Đặc Biệt (The Individualist)",
      id: "Seniman yang Memimpikan Keunikan (The Individualist)"
    },
    shortDescription: {
      ko: "\"나는 남들과 달라. 나만의 색깔이 있어.\"",
      en: "\"I'm different from others. I have my own color.\"",
      ja: "「私は他の人とは違う。自分だけの色がある。」",
      'zh-CN': "「我与他人不同。我有自己的颜色。」",
      'zh-TW': "「我與他人不同。我有自己的顏色。」",
      vi: "\"Tôi khác với người khác. Tôi có màu sắc riêng của mình.\"",
      id: "\"Saya berbeda dari orang lain. Saya memiliki warna sendiri.\""
    },
    description: {
      ko: "당신은 풍부한 감수성과 독창적인 매력을 지녔습니다. 평범한 것을 거부하고 자신만의 독특한 정체성을 찾으려 합니다. 감정 기복이 심하고 우울감에 빠지기도 쉽지만, 그 감정을 예술적으로 승화시키는 능력이 있습니다.",
      en: "You have rich sensitivity and original charm. You reject the ordinary and try to find your own unique identity. You have severe emotional fluctuations and can easily fall into depression, but you have the ability to sublimate those emotions artistically.",
      ja: "あなたは豊かな感性と独創的な魅力を持っています。平凡なものを拒否し、自分だけの独特なアイデンティティを見つけようとします。感情の起伏が激しく、うつ状態に陥りやすいですが、その感情を芸術的に昇華させる能力があります。",
      'zh-CN': "你拥有丰富的感性和独特的魅力。你拒绝平凡，试图找到自己独特的身份。你情绪波动很大，容易陷入抑郁，但你有能力将那些情感艺术性地升华。",
      'zh-TW': "你擁有豐富的感性和獨特的魅力。你拒絕平凡，試圖找到自己獨特的身份。你情緒波動很大，容易陷入抑鬱，但你有能力將那些情感藝術性地昇華。",
      vi: "Bạn có sự nhạy cảm phong phú và sức hấp dẫn độc đáo. Bạn từ chối sự bình thường và cố gắng tìm bản sắc độc đáo của riêng mình. Bạn có biến động cảm xúc nghiêm trọng và dễ rơi vào trầm cảm, nhưng bạn có khả năng thăng hoa những cảm xúc đó một cách nghệ thuật.",
      id: "Anda memiliki kepekaan yang kaya dan pesona asli. Anda menolak yang biasa dan mencoba menemukan identitas unik Anda sendiri. Anda memiliki fluktuasi emosional yang parah dan mudah jatuh ke dalam depresi, tetapi Anda memiliki kemampuan untuk menyublimkan emosi tersebut secara artistik."
    },
    coreValue: {
      ko: "개성, 낭만, 진정성",
      en: "Individuality, Romance, Authenticity",
      ja: "個性、ロマンス、真正性",
      'zh-CN': "个性、浪漫、真实性",
      'zh-TW': "個性、浪漫、真實性",
      vi: "Cá tính, lãng mạn, chân thực",
      id: "Individualitas, Romantis, Keaslian"
    },
    caution: {
      ko: "감정에 너무 깊이 매몰되지 마세요.",
      en: "Don't get too deeply immersed in emotions.",
      ja: "感情に深く埋もれすぎないでください。",
      'zh-CN': "不要过于沉浸在情感中。",
      'zh-TW': "不要過於沉浸在情感中。",
      vi: "Đừng chìm đắm quá sâu vào cảm xúc.",
      id: "Jangan terlalu tenggelam dalam emosi."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 2 (나를 이해해 줌)",
      en: "💖 Ideal Match: Type 2 (Understands me)",
      ja: "💖 理想の相性: Type 2 (私を理解してくれる)",
      'zh-CN': "💖 理想配对: Type 2 (理解我)",
      'zh-TW': "💖 理想配對: Type 2 (理解我)",
      vi: "💖 Cặp đôi lý tưởng: Type 2 (Hiểu tôi)",
      id: "💖 Pasangan Ideal: Type 2 (Memahami saya)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 1 (너무 딱딱함)",
      en: "💔 Worst Match: Type 1 (Too rigid)",
      ja: "💔 最悪の相性: Type 1 (硬すぎる)",
      'zh-CN': "💔 最差配对: Type 1 (太僵硬)",
      'zh-TW': "💔 最差配對: Type 1 (太僵硬)",
      vi: "💔 Cặp đôi tệ nhất: Type 1 (Quá cứng nhắc)",
      id: "💔 Pasangan Terburuk: Type 1 (Terlalu kaku)"
    }
  },
  {
    type: "Type5",
    emoji: "🧠",
    title: {
      ko: "지식을 탐구하는, 사색가 (The Investigator)",
      en: "The Thinker Who Explores Knowledge (The Investigator)",
      ja: "知識を探求する、思索家 (The Investigator)",
      'zh-CN': "探索知识的思考者 (调查者)",
      'zh-TW': "探索知識的思考者 (調查者)",
      vi: "Người Suy Tư, Người Khám Phá Tri Thức (The Investigator)",
      id: "Pemikir yang Menjelajahi Pengetahuan (The Investigator)"
    },
    shortDescription: {
      ko: "\"아는 것이 힘이다. 혼자만의 시간이 필요해.\"",
      en: "\"Knowledge is power. I need time alone.\"",
      ja: "「知ることは力だ。一人だけの時間が必要だ。」",
      'zh-CN': "「知识就是力量。我需要独处的时间。」",
      'zh-TW': "「知識就是力量。我需要獨處的時間。」",
      vi: "\"Kiến thức là sức mạnh. Tôi cần thời gian một mình.\"",
      id: "\"Pengetahuan adalah kekuatan. Saya perlu waktu sendirian.\""
    },
    description: {
      ko: "당신은 호기심이 많고 분석적입니다. 세상을 이해하기 위해 끊임없이 관찰하고 탐구합니다. 감정적인 교류보다는 지적인 대화를 선호하며, 독립적인 공간과 시간을 매우 중요하게 생각합니다.",
      en: "You are curious and analytical. You constantly observe and explore to understand the world. You prefer intellectual conversations over emotional exchanges and value independent space and time very much.",
      ja: "あなたは好奇心が強く、分析的です。世界を理解するために絶えず観察し、探求します。感情的な交流よりも知的な対話を好み、独立した空間と時間を非常に重要視します。",
      'zh-CN': "你充满好奇心且善于分析。你不断观察和探索以理解世界。你更喜欢智力对话而不是情感交流，非常重视独立的空间和时间。",
      'zh-TW': "你充滿好奇心且善於分析。你不斷觀察和探索以理解世界。你更喜歡智力對話而不是情感交流，非常重視獨立的空間和時間。",
      vi: "Bạn tò mò và phân tích. Bạn liên tục quan sát và khám phá để hiểu thế giới. Bạn thích các cuộc trò chuyện trí tuệ hơn trao đổi cảm xúc và rất coi trọng không gian và thời gian độc lập.",
      id: "Anda penasaran dan analitis. Anda terus-menerus mengamati dan menjelajahi untuk memahami dunia. Anda lebih suka percakapan intelektual daripada pertukaran emosional dan sangat menghargai ruang dan waktu independen."
    },
    coreValue: {
      ko: "지식, 통찰, 독립",
      en: "Knowledge, Insight, Independence",
      ja: "知識、洞察、独立",
      'zh-CN': "知识、洞察、独立",
      'zh-TW': "知識、洞察、獨立",
      vi: "Kiến thức, sự thấu hiểu, độc lập",
      id: "Pengetahuan, Wawasan, Kemerdekaan"
    },
    caution: {
      ko: "생각만 하지 말고 행동으로 옮겨보세요.",
      en: "Don't just think, put it into action.",
      ja: "考えるだけでなく、行動に移してください。",
      'zh-CN': "不要只想，要付诸行动。",
      'zh-TW': "不要只想，要付諸行動。",
      vi: "Đừng chỉ suy nghĩ, hãy hành động.",
      id: "Jangan hanya berpikir, lakukan tindakan."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 8 (나를 지켜줌)",
      en: "💖 Ideal Match: Type 8 (Protects me)",
      ja: "💖 理想の相性: Type 8 (私を守ってくれる)",
      'zh-CN': "💖 理想配对: Type 8 (保护我)",
      'zh-TW': "💖 理想配對: Type 8 (保護我)",
      vi: "💖 Cặp đôi lý tưởng: Type 8 (Bảo vệ tôi)",
      id: "💖 Pasangan Ideal: Type 8 (Melindungi saya)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 2 (사생활 침해함)",
      en: "💔 Worst Match: Type 2 (Invades privacy)",
      ja: "💔 最悪の相性: Type 2 (プライバシーを侵害する)",
      'zh-CN': "💔 最差配对: Type 2 (侵犯隐私)",
      'zh-TW': "💔 最差配對: Type 2 (侵犯隱私)",
      vi: "💔 Cặp đôi tệ nhất: Type 2 (Xâm phạm quyền riêng tư)",
      id: "💔 Pasangan Terburuk: Type 2 (Mengganggu privasi)"
    }
  },
  {
    type: "Type6",
    emoji: "🛡️",
    title: {
      ko: "안전을 추구하는, 충성가 (The Loyalist)",
      en: "The Loyalist Who Seeks Safety (The Loyalist)",
      ja: "安全を追求する、忠誠者 (The Loyalist)",
      'zh-CN': "追求安全的忠诚者 (忠诚者)",
      'zh-TW': "追求安全的忠誠者 (忠誠者)",
      vi: "Người Trung Thành, Người Tìm Kiếm An Toàn (The Loyalist)",
      id: "Setia yang Mencari Keamanan (The Loyalist)"
    },
    shortDescription: {
      ko: "\"돌다리도 두드려 보고 건너자.\"",
      en: "\"Let's knock on the stone bridge before crossing.\"",
      ja: "「石橋も叩いて見て渡ろう。」",
      'zh-CN': "「过石桥前也要先敲敲看。」",
      'zh-TW': "「過石橋前也要先敲敲看。」",
      vi: "\"Hãy gõ vào cây cầu đá trước khi băng qua.\"",
      id: "\"Mari ketuk jembatan batu sebelum menyeberang.\""
    },
    description: {
      ko: "당신은 책임감이 강하고 조직에 충실합니다. 하지만 내면에는 늘 불안과 걱정이 자리 잡고 있어, 미래를 대비하고 안전을 확인하려 합니다. 신뢰하는 사람이나 그룹에 의지하며, 한번 믿으면 끝까지 의리를 지킵니다.",
      en: "You have a strong sense of responsibility and are loyal to organizations. However, anxiety and worry always reside within you, so you try to prepare for the future and confirm safety. You rely on trusted people or groups, and once you trust, you keep your loyalty to the end.",
      ja: "あなたは責任感が強く、組織に忠実です。しかし、内面には常に不安と心配が根付いていて、未来に備え、安全を確認しようとします。信頼する人やグループに依存し、一度信じたら最後まで義理を守ります。",
      'zh-CN': "你有强烈的责任感，对组织忠诚。但内心总是充满焦虑和担忧，所以你试图为未来做准备并确认安全。你依赖信任的人或团体，一旦信任，就会坚持到底。",
      'zh-TW': "你有強烈的責任感，對組織忠誠。但內心總是充滿焦慮和擔憂，所以你試圖為未來做準備並確認安全。你依賴信任的人或團體，一旦信任，就會堅持到底。",
      vi: "Bạn có ý thức trách nhiệm mạnh mẽ và trung thành với tổ chức. Tuy nhiên, lo lắng và lo âu luôn cư trú trong bạn, vì vậy bạn cố gắng chuẩn bị cho tương lai và xác nhận sự an toàn. Bạn dựa vào những người hoặc nhóm đáng tin cậy, và một khi bạn tin tưởng, bạn giữ lòng trung thành đến cuối cùng.",
      id: "Anda memiliki rasa tanggung jawab yang kuat dan setia pada organisasi. Namun, kecemasan dan kekhawatiran selalu bersemayam di dalam diri Anda, jadi Anda mencoba mempersiapkan masa depan dan mengonfirmasi keamanan. Anda bergantung pada orang atau kelompok tepercaya, dan begitu Anda percaya, Anda menjaga kesetiaan sampai akhir."
    },
    coreValue: {
      ko: "안전, 신뢰, 책임",
      en: "Safety, Trust, Responsibility",
      ja: "安全、信頼、責任",
      'zh-CN': "安全、信任、责任",
      'zh-TW': "安全、信任、責任",
      vi: "An toàn, tin cậy, trách nhiệm",
      id: "Keamanan, Kepercayaan, Tanggung Jawab"
    },
    caution: {
      ko: "걱정을 멈추고 자신을 믿으세요.",
      en: "Stop worrying and believe in yourself.",
      ja: "心配をやめて、自分を信じてください。",
      'zh-CN': "停止担忧，相信自己。",
      'zh-TW': "停止擔憂，相信自己。",
      vi: "Ngừng lo lắng và tin vào bản thân.",
      id: "Berhenti khawatir dan percayalah pada diri sendiri."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 9 (편안함을 줌)",
      en: "💖 Ideal Match: Type 9 (Gives comfort)",
      ja: "💖 理想の相性: Type 9 (快適さを与えてくれる)",
      'zh-CN': "💖 理想配对: Type 9 (给予舒适)",
      'zh-TW': "💖 理想配對: Type 9 (給予舒適)",
      vi: "💖 Cặp đôi lý tưởng: Type 9 (Mang lại sự thoải mái)",
      id: "💖 Pasangan Ideal: Type 9 (Memberikan kenyamanan)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 7 (너무 즉흥적임)",
      en: "💔 Worst Match: Type 7 (Too impulsive)",
      ja: "💔 最悪の相性: Type 7 (衝動的すぎる)",
      'zh-CN': "💔 最差配对: Type 7 (太冲动)",
      'zh-TW': "💔 最差配對: Type 7 (太衝動)",
      vi: "💔 Cặp đôi tệ nhất: Type 7 (Quá bốc đồng)",
      id: "💔 Pasangan Terburuk: Type 7 (Terlalu impulsif)"
    }
  },
  {
    type: "Type7",
    emoji: "🎉",
    title: {
      ko: "즐거움을 쫓는, 낙천가 (The Enthusiast)",
      en: "The Optimist Who Chases Joy (The Enthusiast)",
      ja: "楽しみを追う、楽観主義者 (The Enthusiast)",
      'zh-CN': "追逐快乐的乐观主义者 (热情者)",
      'zh-TW': "追逐快樂的樂觀主義者 (熱情者)",
      vi: "Người Lạc Quan, Người Theo Đuổi Niềm Vui (The Enthusiast)",
      id: "Optimis yang Mengejar Kegembiraan (The Enthusiast)"
    },
    shortDescription: {
      ko: "\"인생은 축제야! 새로운 게 좋아!\"",
      en: "\"Life is a festival! I love new things!\"",
      ja: "「人生は祭りだ！新しいものが好き！」",
      'zh-CN': "「人生是节日！我喜欢新事物！」",
      'zh-TW': "「人生是節日！我喜歡新事物！」",
      vi: "\"Cuộc sống là lễ hội! Tôi yêu những điều mới!\"",
      id: "\"Hidup adalah festival! Saya suka hal-hal baru!\""
    },
    description: {
      ko: "당신은 에너지가 넘치고 긍정적입니다. 지루한 것을 참지 못하며, 항상 새로운 경험과 재미를 찾아다닙니다. 아이디어가 많고 다재다능하지만, 한 가지 일에 진득하게 집중하는 것을 어려워할 수 있습니다.",
      en: "You are full of energy and positive. You can't stand boredom and always seek new experiences and fun. You have many ideas and are versatile, but you may find it difficult to focus deeply on one thing.",
      ja: "あなたはエネルギーに溢れ、肯定的です。退屈なことを我慢できず、常に新しい経験と楽しみを探し回ります。アイデアが多く、多才多芸ですが、一つのことに深く集中することを困難に感じるかもしれません。",
      'zh-CN': "你充满活力和积极。你无法忍受无聊，总是寻求新的体验和乐趣。你有很多想法且多才多艺，但你可能发现很难深入专注于一件事。",
      'zh-TW': "你充滿活力和積極。你無法忍受無聊，總是尋求新的體驗和樂趣。你有很多想法且多才多藝，但你可能發現很難深入專注於一件事。",
      vi: "Bạn tràn đầy năng lượng và tích cực. Bạn không thể chịu đựng sự nhàm chán và luôn tìm kiếm trải nghiệm và niềm vui mới. Bạn có nhiều ý tưởng và đa tài, nhưng bạn có thể thấy khó khăn khi tập trung sâu vào một việc.",
      id: "Anda penuh energi dan positif. Anda tidak tahan kebosanan dan selalu mencari pengalaman dan kesenangan baru. Anda memiliki banyak ide dan serbaguna, tetapi Anda mungkin merasa sulit untuk fokus mendalam pada satu hal."
    },
    coreValue: {
      ko: "행복, 자유, 모험",
      en: "Happiness, Freedom, Adventure",
      ja: "幸福、自由、冒険",
      'zh-CN': "幸福、自由、冒险",
      'zh-TW': "幸福、自由、冒險",
      vi: "Hạnh phúc, tự do, phiêu lưu",
      id: "Kebahagiaan, Kebebasan, Petualangan"
    },
    caution: {
      ko: "싫은 일도 끝까지 마무리해 보세요.",
      en: "Try to finish even things you don't like.",
      ja: "嫌なことも最後まで仕上げてみてください。",
      'zh-CN': "即使是不喜欢的事也要完成。",
      'zh-TW': "即使是不喜歡的事也要完成。",
      vi: "Hãy cố gắng hoàn thành ngay cả những việc bạn không thích.",
      id: "Coba selesaikan bahkan hal-hal yang tidak Anda sukai."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 1 (나를 잡아줌)",
      en: "💖 Ideal Match: Type 1 (Holds me back)",
      ja: "💖 理想の相性: Type 1 (私を引き止めてくれる)",
      'zh-CN': "💖 理想配对: Type 1 (拉住我)",
      'zh-TW': "💖 理想配對: Type 1 (拉住我)",
      vi: "💖 Cặp đôi lý tưởng: Type 1 (Giữ tôi lại)",
      id: "💖 Pasangan Ideal: Type 1 (Menahan saya)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 6 (너무 신중함)",
      en: "💔 Worst Match: Type 6 (Too cautious)",
      ja: "💔 最悪の相性: Type 6 (慎重すぎる)",
      'zh-CN': "💔 最差配对: Type 6 (太谨慎)",
      'zh-TW': "💔 最差配對: Type 6 (太謹慎)",
      vi: "💔 Cặp đôi tệ nhất: Type 6 (Quá thận trọng)",
      id: "💔 Pasangan Terburuk: Type 6 (Terlalu hati-hati)"
    }
  },
  {
    type: "Type8",
    emoji: "🦁",
    title: {
      ko: "힘을 과시하는, 도전가 (The Challenger)",
      en: "The Challenger Who Displays Power (The Challenger)",
      ja: "力を誇示する、挑戦者 (The Challenger)",
      'zh-CN': "展示力量的挑战者 (挑战者)",
      'zh-TW': "展示力量的挑戰者 (挑戰者)",
      vi: "Người Thách Thức, Người Thể Hiện Sức Mạnh (The Challenger)",
      id: "Penantang yang Memamerkan Kekuatan (The Challenger)"
    },
    shortDescription: {
      ko: "\"내 인생의 주인은 나야. 덤벼 봐.\"",
      en: "\"I'm the master of my life. Bring it on.\"",
      ja: "「私の人生の主人は私だ。かかってこい。」",
      'zh-CN': "「我人生的主人是我。来吧。」",
      'zh-TW': "「我人生的主人是我。來吧。」",
      vi: "\"Tôi là chủ nhân cuộc đời mình. Cứ đến đây.\"",
      id: "\"Saya adalah tuan hidup saya. Ayo hadapi.\""
    },
    description: {
      ko: "당신은 강한 의지와 리더십을 가지고 있습니다. 통제받는 것을 싫어하며, 자신의 힘으로 상황을 주도하려 합니다. 직설적이고 정의감이 넘치며, 약자를 보호하려는 보스 기질이 있습니다.",
      en: "You have strong will and leadership. You dislike being controlled and try to lead situations with your own power. You are direct and full of a sense of justice, and have a boss-like nature that wants to protect the weak.",
      ja: "あなたは強い意志とリーダーシップを持っています。コントロールされることを嫌い、自分の力で状況を主導しようとします。率直で正義感に溢れ、弱者を守ろうとするボス気質があります。",
      'zh-CN': "你拥有坚强的意志和领导力。你讨厌被控制，试图用自己的力量主导情况。你直率且充满正义感，有保护弱者的老板气质。",
      'zh-TW': "你擁有堅強的意志和領導力。你討厭被控制，試圖用自己的力量主導情況。你直率且充滿正義感，有保護弱者的老闆氣質。",
      vi: "Bạn có ý chí mạnh mẽ và khả năng lãnh đạo. Bạn không thích bị kiểm soát và cố gắng dẫn dắt tình huống bằng sức mạnh của chính mình. Bạn thẳng thắn và tràn đầy cảm giác công lý, và có bản chất giống ông chủ muốn bảo vệ người yếu.",
      id: "Anda memiliki kemauan yang kuat dan kepemimpinan. Anda tidak suka dikendalikan dan mencoba memimpin situasi dengan kekuatan Anda sendiri. Anda langsung dan penuh rasa keadilan, dan memiliki sifat seperti bos yang ingin melindungi yang lemah."
    },
    coreValue: {
      ko: "힘, 정의, 통제",
      en: "Power, Justice, Control",
      ja: "力、正義、統制",
      'zh-CN': "力量、正义、控制",
      'zh-TW': "力量、正義、控制",
      vi: "Sức mạnh, công lý, kiểm soát",
      id: "Kekuatan, Keadilan, Kontrol"
    },
    caution: {
      ko: "타인의 감정도 배려해 주세요.",
      en: "Please also consider others' emotions.",
      ja: "他人の感情も配慮してください。",
      'zh-CN': "请也考虑他人的情感。",
      'zh-TW': "請也考慮他人的情感。",
      vi: "Vui lòng cũng xem xét cảm xúc của người khác.",
      id: "Tolong pertimbangkan juga emosi orang lain."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 5 (지혜를 빌려줌)",
      en: "💖 Ideal Match: Type 5 (Lends wisdom)",
      ja: "💖 理想の相性: Type 5 (知恵を貸してくれる)",
      'zh-CN': "💖 理想配对: Type 5 (借给我智慧)",
      'zh-TW': "💖 理想配對: Type 5 (借給我智慧)",
      vi: "💖 Cặp đôi lý tưởng: Type 5 (Cho mượn trí tuệ)",
      id: "💖 Pasangan Ideal: Type 5 (Meminjamkan kebijaksanaan)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 2 (감정적이라 귀찮음)",
      en: "💔 Worst Match: Type 2 (Too emotional, annoying)",
      ja: "💔 最悪の相性: Type 2 (感情的すぎて煩わしい)",
      'zh-CN': "💔 最差配对: Type 2 (太情绪化，烦人)",
      'zh-TW': "💔 最差配對: Type 2 (太情緒化，煩人)",
      vi: "💔 Cặp đôi tệ nhất: Type 2 (Quá cảm xúc, phiền toái)",
      id: "💔 Pasangan Terburuk: Type 2 (Terlalu emosional, mengganggu)"
    }
  },
  {
    type: "Type9",
    emoji: "🕊️",
    title: {
      ko: "조화를 꿈꾸는, 평화주의자 (The Peacemaker)",
      en: "The Peacemaker Who Dreams of Harmony (The Peacemaker)",
      ja: "調和を夢見る、平和主義者 (The Peacemaker)",
      'zh-CN': "梦想和谐的和平主义者 (调停者)",
      'zh-TW': "夢想和諧的和平主義者 (調停者)",
      vi: "Người Hòa Bình, Người Mơ Ước Hòa Hợp (The Peacemaker)",
      id: "Pembuat Perdamaian yang Memimpikan Harmoni (The Peacemaker)"
    },
    shortDescription: {
      ko: "\"좋은 게 좋은 거지. 싸우지 말자.\"",
      en: "\"Good is good. Let's not fight.\"",
      ja: "「良いことは良いことだ。喧嘩しないようにしよう。」",
      'zh-CN': "「好就是好。我们不要打架。」",
      'zh-TW': "「好就是好。我們不要打架。」",
      vi: "\"Tốt là tốt. Đừng đánh nhau.\"",
      id: "\"Baik adalah baik. Jangan bertengkar.\""
    },
    description: {
      ko: "당신은 갈등을 싫어하고 내면의 평화를 추구합니다. 타인의 의견을 잘 수용하고 둥글둥글하게 지내려 합니다. 느긋하고 편안한 성격이지만, 때로는 결정을 미루거나 게으름을 피우며 현실을 회피하기도 합니다.",
      en: "You dislike conflict and pursue inner peace. You accept others' opinions well and try to get along smoothly. You have a relaxed and comfortable personality, but sometimes you postpone decisions or become lazy and avoid reality.",
      ja: "あなたは対立を嫌い、内面の平和を追求します。他人の意見をよく受け入れ、円滑に過ごそうとします。のんびりとした快適な性格ですが、時には決定を先延ばしにしたり、怠けたりして現実を回避することもあります。",
      'zh-CN': "你讨厌冲突，追求内心和平。你很好地接受他人的意见，试图顺利相处。你性格轻松舒适，但有时你会推迟决定或变得懒惰并逃避现实。",
      'zh-TW': "你討厭衝突，追求內心和平。你很好地接受他人的意見，試圖順利相處。你性格輕鬆舒適，但有時你會推遲決定或變得懶惰並逃避現實。",
      vi: "Bạn không thích xung đột và theo đuổi hòa bình nội tâm. Bạn chấp nhận ý kiến của người khác tốt và cố gắng hòa thuận. Bạn có tính cách thư giãn và thoải mái, nhưng đôi khi bạn trì hoãn quyết định hoặc trở nên lười biếng và tránh né thực tế.",
      id: "Anda tidak suka konflik dan mengejar kedamaian batin. Anda menerima pendapat orang lain dengan baik dan mencoba bergaul dengan lancar. Anda memiliki kepribadian yang santai dan nyaman, tetapi kadang-kadang Anda menunda keputusan atau menjadi malas dan menghindari kenyataan."
    },
    coreValue: {
      ko: "평화, 조화, 수용",
      en: "Peace, Harmony, Acceptance",
      ja: "平和、調和、受容",
      'zh-CN': "和平、和谐、接受",
      'zh-TW': "和平、和諧、接受",
      vi: "Hòa bình, hòa hợp, chấp nhận",
      id: "Perdamaian, Harmoni, Penerimaan"
    },
    caution: {
      ko: "자신의 의견을 명확히 표현하세요.",
      en: "Express your opinions clearly.",
      ja: "自分の意見を明確に表現してください。",
      'zh-CN': "清楚地表达你的意见。",
      'zh-TW': "清楚地表達你的意見。",
      vi: "Hãy thể hiện ý kiến của bạn một cách rõ ràng.",
      id: "Ekspresikan pendapat Anda dengan jelas."
    },
    idealMatch: {
      ko: "💖 환상의 짝꿍: Type 6 (안정감을 줌)",
      en: "💖 Ideal Match: Type 6 (Gives stability)",
      ja: "💖 理想の相性: Type 6 (安定感を与えてくれる)",
      'zh-CN': "💖 理想配对: Type 6 (给予稳定)",
      'zh-TW': "💖 理想配對: Type 6 (給予穩定)",
      vi: "💖 Cặp đôi lý tưởng: Type 6 (Mang lại sự ổn định)",
      id: "💖 Pasangan Ideal: Type 6 (Memberikan stabilitas)"
    },
    worstMatch: {
      ko: "💔 환장의 짝꿍: Type 3 (너무 닥달함)",
      en: "💔 Worst Match: Type 3 (Too pushy)",
      ja: "💔 最悪の相性: Type 3 (せかしすぎる)",
      'zh-CN': "💔 最差配对: Type 3 (太催促)",
      'zh-TW': "💔 最差配對: Type 3 (太催促)",
      vi: "💔 Cặp đôi tệ nhất: Type 3 (Quá thúc ép)",
      id: "💔 Pasangan Terburuk: Type 3 (Terlalu mendesak)"
    }
  }
];

// 결과 계산 함수
export function calculateEnneagramResult(answers: any[]): string {
  const scores: Record<string, number> = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0,
    type6: 0,
    type7: 0,
    type8: 0,
    type9: 0
  };
  
  // 각 답변의 점수를 합산
  answers.forEach(answer => {
    Object.keys(answer).forEach(key => {
      if (key.startsWith('type') && typeof answer[key] === 'number') {
        scores[key] += answer[key];
      }
    });
  });
  
  // 가장 높은 점수를 가진 타입 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.keys(scores).forEach(key => {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
      resultType = key.replace(/^type/, 'Type');
    }
  });
  
  // 동점일 경우 우선순위 적용
  const maxScoreTypes = Object.keys(scores).filter(key => scores[key] === maxScore);
  if (maxScoreTypes.length > 1) {
    const priority = ['type9', 'type6', 'type2', 'type7', 'type3', 'type1', 'type4', 'type8', 'type5'];
    for (const priorityType of priority) {
      if (maxScoreTypes.includes(priorityType)) {
        resultType = priorityType.replace(/^type/, 'Type');
        break;
      }
    }
  }
  
  return resultType;
}

