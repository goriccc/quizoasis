export interface OptimismQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      optimism: number;
      pessimism: number;
    };
  }[];
}

export interface OptimismResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  strengths: Record<string, string>[];
  weaknesses: Record<string, string>[];
  score: Record<string, string>;
  advice: Record<string, string>;
  warningTitle: Record<string, string>;
  warningItems: Record<string, string[]>;
}

export const optimismQuestions: OptimismQuestion[] = [
  {
    id: 1,
    question: {
      ko: "내일 중요한 발표가 있다면?",
      en: "If you have an important presentation tomorrow?",
      ja: "明日重要な発表があるなら？",
      'zh-CN': "如果明天有重要的演讲？",
      'zh-TW': "如果明天有重要的演講？",
      vi: "Nếu bạn có một bài thuyết trình quan trọng vào ngày mai?",
      id: "Jika Anda memiliki presentasi penting besok?"
    },
    options: [
      {
        text: {
          ko: "\"잘될 거야! 열심히 준비했잖아\"",
          en: "\"It will go well! I prepared hard\"",
          ja: "「うまくいくよ！一生懸命準備したじゃない」",
          'zh-CN': "「会成功的！我已经努力准备了」",
          'zh-TW': "「會成功的！我已經努力準備了」",
          vi: "\"Sẽ ổn thôi! Tôi đã chuẩn bị kỹ mà\"",
          id: "\"Akan berhasil! Saya sudah bekerja keras mempersiapkannya\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"망하면 어떡하지... 불안해\"",
          en: "\"What if it fails... I'm anxious\"",
          ja: "「失敗したらどうしよう...不安だ」",
          'zh-CN': "「如果失败了怎么办...很不安」",
          'zh-TW': "「如果失敗了怎麼辦...很不安」",
          vi: "\"Nếu thất bại thì sao... Lo lắng quá\"",
          id: "\"Bagaimana jika gagal... Saya cemas\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "새로운 프로젝트를 시작할 때?",
      en: "When starting a new project?",
      ja: "新しいプロジェクトを始める時？",
      'zh-CN': "开始新项目时？",
      'zh-TW': "開始新項目時？",
      vi: "Khi bắt đầu một dự án mới?",
      id: "Saat memulai proyek baru?"
    },
    options: [
      {
        text: {
          ko: "설레고 기대됨, 좋은 결과 상상",
          en: "Excited and looking forward to it, imagining good results",
          ja: "わくわくして期待、良い結果を想像",
          'zh-CN': "兴奋且期待，想象好结果",
          'zh-TW': "興奮且期待，想像好結果",
          vi: "Hào hứng và mong đợi, tưởng tượng kết quả tốt",
          id: "Bersemangat dan menantikannya, membayangkan hasil yang baik"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "걱정됨, 실패하면 어쩌나 불안",
          en: "Worried, anxious about what if it fails",
          ja: "心配、失敗したらどうしようと不安",
          'zh-CN': "担心，焦虑万一失败怎么办",
          'zh-TW': "擔心，焦慮萬一失敗怎麼辦",
          vi: "Lo lắng, bất an về việc sẽ làm gì nếu thất bại",
          id: "Khawatir, cemas jika gagal"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "비오는 날을 맞이하는 마음은?",
      en: "How do you feel about a rainy day?",
      ja: "雨の日を迎える気持ちは？",
      'zh-CN': "迎接下雨天的心情是？",
      'zh-TW': "迎接下雨天的心情是？",
      vi: "Cảm giác của bạn khi đón một ngày mưa là gì?",
      id: "Bagaimana perasaan Anda menyambut hari hujan?"
    },
    options: [
      {
        text: {
          ko: "\"집에서 쉬는 날! 좋네\"",
          en: "\"A day to rest at home! Nice\"",
          ja: "「家で休む日！いいね」",
          'zh-CN': "「在家休息的日子！很好」",
          'zh-TW': "「在家休息的日子！很好」",
          vi: "\"Ngày nghỉ ở nhà! Tốt đấy\"",
          id: "\"Hari istirahat di rumah! Menyenangkan\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"계획 다 망했네... 최악이야\"",
          en: "\"All plans ruined... Worst day\"",
          ja: "「計画全部ダメになった...最悪だ」",
          'zh-CN': "「所有计划都泡汤了...最糟糕」",
          'zh-TW': "「所有計劃都泡湯了...最糟糕」",
          vi: "\"Kế hoạch đều tan vỡ... Tệ nhất\"",
          id: "\"Semua rencana gagal... Terburuk\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "친구가 연락이 늦으면?",
      en: "When a friend is late to contact you?",
      ja: "友達の連絡が遅い時？",
      'zh-CN': "朋友联系晚时？",
      'zh-TW': "朋友聯繫晚時？",
      vi: "Khi bạn bè chậm liên lạc?",
      id: "Ketika teman terlambat menghubungi?"
    },
    options: [
      {
        text: {
          ko: "\"바쁜가보다\" 자연스럽게 생각",
          en: "\"Must be busy\" Think naturally",
          ja: "「忙しいのかな」自然に考える",
          'zh-CN': "「可能在忙吧」自然地想",
          'zh-TW': "「可能在忙吧」自然地想",
          vi: "\"Chắc đang bận\" Nghĩ tự nhiên",
          id: "\"Pasti sedang sibuk\" Berpikir wajar"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"화났나? 뭔가 잘못했나?\" 불안",
          en: "\"Are they angry? Did I do something wrong?\" Anxious",
          ja: "「怒ったの？何か間違えたの？」不安",
          'zh-CN': "「他们生气了吗？我做错什么了吗？」不安",
          'zh-TW': "「他們生氣了嗎？我做錯什麼了嗎？」不安",
          vi: "\"Họ giận à? Tôi làm sai gì chăng?\" Lo lắng",
          id: "\"Apakah mereka marah? Apakah saya melakukan kesalahan?\" Cemas"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "시험 결과를 기다릴 때?",
      en: "When waiting for exam results?",
      ja: "試験結果を待つ時？",
      'zh-CN': "等待考试结果时？",
      'zh-TW': "等待考試結果時？",
      vi: "Khi chờ kết quả kỳ thi?",
      id: "Saat menunggu hasil ujian?"
    },
    options: [
      {
        text: {
          ko: "\"괜찮을 거야\" 긍정적 예상",
          en: "\"It will be okay\" Positive expectation",
          ja: "「大丈夫だろう」肯定的予想",
          'zh-CN': "「应该没问题」积极预期",
          'zh-TW': "「應該沒問題」積極預期",
          vi: "\"Sẽ ổn thôi\" Dự đoán tích cực",
          id: "\"Akan baik-baik saja\" Ekspektasi positif"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"떨어지면 어쩌지\" 최악 상상",
          en: "\"What if I fail\" Worst case imagination",
          ja: "「落ちたらどうしよう」最悪の想像",
          'zh-CN': "「如果失败了怎么办」最坏想象",
          'zh-TW': "「如果失敗了怎麼辦」最壞想像",
          vi: "\"Nếu rớt thì sao\" Tưởng tượng tệ nhất",
          id: "\"Bagaimana jika gagal\" Imajinasi terburuk"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "새로운 일에 도전할 기회가 왔을 때?",
      en: "When you get a chance to try something new?",
      ja: "新しいことに挑戦する機会が来た時？",
      'zh-CN': "得到尝试新事物机会时？",
      'zh-TW': "得到嘗試新事物機會時？",
      vi: "Khi có cơ hội thử thách điều mới?",
      id: "Saat Anda mendapat kesempatan mencoba hal baru?"
    },
    options: [
      {
        text: {
          ko: "\"해보자! 재미있겠는데?\"",
          en: "\"Let's try it! Seems fun!\"",
          ja: "「やってみよう！面白そうだね？」",
          'zh-CN': "「试试吧！看起来很有趣？」",
          'zh-TW': "「試試吧！看起來很有趣？」",
          vi: "\"Hãy thử xem! Có vẻ thú vị nhỉ?\"",
          id: "\"Mari coba! Sepertinya menyenangkan?\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"내가 할 수 있을까... 무섭다\"",
          en: "\"Can I do it... Scary\"",
          ja: "「私にできるかな...怖い」",
          'zh-CN': "「我能做到吗...害怕」",
          'zh-TW': "「我能做到嗎...害怕」",
          vi: "\"Tôi có làm được không... Sợ quá\"",
          id: "\"Bisakah saya melakukannya... Menakutkan\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "작은 실수를 했을 때?",
      en: "When you make a small mistake?",
      ja: "小さな失敗をした時？",
      'zh-CN': "犯小错误时？",
      'zh-TW': "犯小錯誤時？",
      vi: "Khi mắc lỗi nhỏ?",
      id: "Saat Anda membuat kesalahan kecil?"
    },
    options: [
      {
        text: {
          ko: "\"괜찮아, 실수할 수 있지\" 털고 일어남",
          en: "\"It's okay, mistakes happen\" Shake it off",
          ja: "「大丈夫、失敗するよ」払い落として立ち上がる",
          'zh-CN': "「没关系，会犯错的」振作起来",
          'zh-TW': "「沒關係，會犯錯的」振作起來",
          vi: "\"Không sao, ai cũng có thể mắc lỗi\" Đứng dậy",
          id: "\"Tidak apa-apa, kesalahan bisa terjadi\" Bangkit kembali"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"다 망쳤어...\" 계속 생각함",
          en: "\"I ruined everything...\" Keep thinking about it",
          ja: "「全部台無しにした...」ずっと考えている",
          'zh-CN': "「一切都搞砸了...」一直想着",
          'zh-TW': "「一切都搞砸了...」一直想著",
          vi: "\"Đã hỏng hết rồi...\" Cứ nghĩ mãi",
          id: "\"Saya merusak segalanya...\" Terus memikirkannya"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "미래를 생각하면?",
      en: "When you think about the future?",
      ja: "未来を考えると？",
      'zh-CN': "想起未来时？",
      'zh-TW': "想起未來時？",
      vi: "Khi nghĩ về tương lai?",
      id: "Saat Anda memikirkan masa depan?"
    },
    options: [
      {
        text: {
          ko: "기대되고 좋은 일들이 기다릴 것 같음",
          en: "Feel excited, seems like good things are waiting",
          ja: "期待、良いことが待っているような気がする",
          'zh-CN': "感到期待，好像有好事在等着",
          'zh-TW': "感到期待，好像有好事在等著",
          vi: "Cảm thấy hào hứng, có vẻ như những điều tốt đang chờ đợi",
          id: "Merasa bersemangat, sepertinya hal-hal baik menanti"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "불안하고 걱정되는 일들이 생길 것 같음",
          en: "Feel anxious, seems like worrying things will happen",
          ja: "不安、心配なことが起こりそうな気がする",
          'zh-CN': "感到不安，好像会有令人担心的事",
          'zh-TW': "感到不安，好像會有令人擔心的事",
          vi: "Cảm thấy lo lắng, có vẻ như những điều đáng lo sẽ xảy ra",
          id: "Merasa cemas, sepertinya hal-hal yang mengkhawatirkan akan terjadi"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "좋은 일이 생기면?",
      en: "When something good happens?",
      ja: "良いことが起こると？",
      'zh-CN': "发生好事时？",
      'zh-TW': "發生好事時？",
      vi: "Khi có điều tốt xảy ra?",
      id: "Saat hal baik terjadi?"
    },
    options: [
      {
        text: {
          ko: "\"행운이야! 또 좋은 일 생기겠지\"",
          en: "\"I'm lucky! More good things will come\"",
          ja: "「ラッキー！また良いことが起こるだろう」",
          'zh-CN': "「真幸运！更多好事会来的」",
          'zh-TW': "「真幸運！更多好事會來的」",
          vi: "\"May mắn quá! Sẽ còn nhiều điều tốt nữa\"",
          id: "\"Beruntung! Hal-hal baik lainnya akan datang\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"이제 나쁜 일이 올 차례인가...\"",
          en: "\"Now bad things will come...\"",
          ja: "「今度は悪いことが来る番かな...」",
          'zh-CN': "「现在是坏事的轮次了...」",
          'zh-TW': "「現在是壞事的輪次了...」",
          vi: "\"Giờ đến lượt chuyện xấu...\"",
          id: "\"Sekarang giliran hal buruk...\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "하루를 시작할 때 드는 생각은?",
      en: "What do you think when starting the day?",
      ja: "一日を始める時に浮かぶ考えは？",
      'zh-CN': "开始一天时想到什么？",
      'zh-TW': "開始一天時想到什麼？",
      vi: "Bạn nghĩ gì khi bắt đầu ngày mới?",
      id: "Apa yang Anda pikirkan saat memulai hari?"
    },
    options: [
      {
        text: {
          ko: "\"오늘은 좋은 날이 될 거야\"",
          en: "\"Today will be a good day\"",
          ja: "「今日は良い日になるだろう」",
          'zh-CN': "「今天会是美好的一天」",
          'zh-TW': "「今天會是美好的一天」",
          vi: "\"Hôm nay sẽ là một ngày tốt đẹp\"",
          id: "\"Hari ini akan menjadi hari yang baik\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"오늘은 또 뭐가 문제일까\"",
          en: "\"What problem will there be today\"",
          ja: "「今日はまた何が問題だろう」",
          'zh-CN': "「今天又会出现什么问题呢」",
          'zh-TW': "「今天又會出現什麼問題呢」",
          vi: "\"Hôm nay sẽ có vấn đề gì đây\"",
          id: "\"Masalah apa yang akan ada hari ini\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "목표를 세울 때?",
      en: "When setting goals?",
      ja: "目標を立てる時？",
      'zh-CN': "设定目标时？",
      'zh-TW': "設定目標時？",
      vi: "Khi đặt mục tiêu?",
      id: "Saat menetapkan tujuan?"
    },
    options: [
      {
        text: {
          ko: "\"할 수 있어! 도전해보자\"",
          en: "\"I can do it! Let's challenge\"",
          ja: "「できる！挑戦してみよう」",
          'zh-CN': "「能做到！挑战一下」",
          'zh-TW': "「能做到！挑戰一下」",
          vi: "\"Tôi làm được! Hãy thử thách\"",
          id: "\"Saya bisa! Mari menantang\""
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "\"현실적으로 어렵지 않을까...\"",
          en: "\"Realistically isn't it too difficult...\"",
          ja: "「現実的に難しいのではないか...」",
          'zh-CN': "「现实来说会不会太难...」",
          'zh-TW': "「現實來說會不會太難...」",
          vi: "\"Thực tế có khó quá không...\"",
          id: "\"Secara realistis bukankah terlalu sulit...\""
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "전반적으로 당신의 인생관은?",
      en: "Overall, what is your view of life?",
      ja: "全体的にあなたの人生観は？",
      'zh-CN': "总体来说，你的人生观是？",
      'zh-TW': "總體來說，你的人生觀是？",
      vi: "Nhìn chung, quan điểm sống của bạn là gì?",
      id: "Secara keseluruhan, apa pandangan hidup Anda?"
    },
    options: [
      {
        text: {
          ko: "긍정적, 좋은 일이 더 많을 것",
          en: "Positive, there will be more good things",
          ja: "肯定的、良いことがもっと多くなるだろう",
          'zh-CN': "积极的，好事会更多",
          'zh-TW': "積極的，好事會更多",
          vi: "Tích cực, sẽ có nhiều điều tốt hơn",
          id: "Positif, akan ada lebih banyak hal baik"
        },
        scores: { optimism: 2, pessimism: 0 }
      },
      {
        text: {
          ko: "조심스러움, 나쁜 일 대비해야 함",
          en: "Cautious, need to prepare for bad things",
          ja: "慎重、悪いことに備えなければならない",
          'zh-CN': "谨慎，需要防范坏事",
          'zh-TW': "謹慎，需要防範壞事",
          vi: "Thận trọng, cần chuẩn bị cho điều xấu",
          id: "Hati-hati, perlu bersiap untuk hal buruk"
        },
        scores: { optimism: 0, pessimism: 2 }
      }
    ]
  }
];

export const optimismResults: OptimismResult[] = [
  {
    type: "Type1",
    emoji: "☀️",
    title: {
      ko: "극단적 낙관주의",
      en: "Extreme Optimist",
      ja: "極端な楽観主義",
      'zh-CN': "极端乐观主义",
      'zh-TW': "極端樂觀主義",
      vi: "Người Lạc Quan Cực Đoan",
      id: "Optimis Ekstrem"
    },
    shortDescription: {
      ko: "무조건 잘 될 거야! 걱정? 그게 뭔데?",
      en: "Everything will definitely work out! Worry? What's that?",
      ja: "絶対うまくいく！心配？それが何？",
      'zh-CN': "一定会成功！担心？那是什么？",
      'zh-TW': "一定會成功！擔心？那是什麼？",
      vi: "Chắc chắn sẽ thành công! Lo lắng? Đó là gì?",
      id: "Semuanya pasti akan berhasil! Khawatir? Apa itu?"
    },
    description: {
      ko: "모든 것을 긍정적으로만 봅니다. 현실의 위험을 간과하고 \"다 잘 될 거야\"라고 생각합니다. 낙관적이고 밝지만 준비 부족으로 실패할 수 있습니다. 위험 신호를 무시하고 과도하게 낙관적이어서 문제가 생겨도 늦게 대처합니다. 균형이 필요한 상태입니다.",
      en: "You see everything only positively. You overlook real risks and think \"everything will be fine.\" You're optimistic and bright but may fail due to lack of preparation. You ignore warning signs and are overly optimistic, so you handle problems too late. You need balance.",
      ja: "すべてを肯定的にだけ見ます。現実の危険を見落とし、「すべて大丈夫だろう」と考えます。楽観的で明るいですが、準備不足で失敗する可能性があります。危険信号を無視し、過度に楽観的で、問題が発生しても遅く対処します。バランスが必要な状態です。",
      'zh-CN': "只看事物的积极面。忽视了现实风险，认为「一切都会好」。乐观积极但可能因准备不足而失败。忽视警告信号，过度乐观，以致问题出现时应对太晚。需要平衡。",
      'zh-TW': "只看事物的積極面。忽視了現實風險，認為「一切都會好」。樂觀積極但可能因準備不足而失敗。忽視警告信號，過度樂觀，以致問題出現時應對太晚。需要平衡。",
      vi: "Bạn chỉ nhìn mọi thứ tích cực. Bạn bỏ qua những rủi ro thực tế và nghĩ \"mọi thứ sẽ ổn.\" Bạn lạc quan và sáng sủa nhưng có thể thất bại do thiếu chuẩn bị. Bạn bỏ qua các dấu hiệu cảnh báo và quá lạc quan, nên bạn xử lý vấn đề quá muộn. Bạn cần cân bằng.",
      id: "Anda melihat segalanya hanya secara positif. Anda mengabaikan risiko nyata dan berpikir \"semuanya akan baik-baik saja.\" Anda optimis dan cerah tetapi mungkin gagal karena kurang persiapan. Anda mengabaikan tanda peringatan dan terlalu optimis, jadi Anda menangani masalah terlalu terlambat. Anda perlu keseimbangan."
    },
    strengths: [
      {
        ko: "밝음",
        en: "Brightness",
        ja: "明るさ",
        'zh-CN': "开朗",
        'zh-TW': "開朗",
        vi: "Tươi sáng",
        id: "Kecerahan"
      },
      {
        ko: "스트레스 적음",
        en: "Low stress",
        ja: "ストレス少ない",
        'zh-CN': "压力小",
        'zh-TW': "壓力小",
        vi: "Ít căng thẳng",
        id: "Stres rendah"
      },
      {
        ko: "도전적",
        en: "Challenging",
        ja: "挑戦的",
        'zh-CN': "有挑战性",
        'zh-TW': "有挑戰性",
        vi: "Dám thử thách",
        id: "Menantang"
      },
      {
        ko: "회복력",
        en: "Resilience",
        ja: "回復力",
        'zh-CN': "恢复力",
        'zh-TW': "恢復力",
        vi: "Khả năng phục hồi",
        id: "Ketahanan"
      }
    ],
    weaknesses: [
      {
        ko: "현실 인식 부족",
        en: "Lack of reality awareness",
        ja: "現実認識不足",
        'zh-CN': "缺乏现实认识",
        'zh-TW': "缺乏現實認識",
        vi: "Thiếu nhận thức thực tế",
        id: "Kurang kesadaran realitas"
      },
      {
        ko: "준비 소홀",
        en: "Lack of preparation",
        ja: "準備不足",
        'zh-CN': "准备不足",
        'zh-TW': "準備不足",
        vi: "Chuẩn bị không đầy đủ",
        id: "Kurang persiapan"
      },
      {
        ko: "위험 간과",
        en: "Overlooking risks",
        ja: "リスク見落とし",
        'zh-CN': "忽视风险",
        'zh-TW': "忽視風險",
        vi: "Bỏ qua rủi ro",
        id: "Mengabaikan risiko"
      }
    ],
    score: {
      ko: "낙관 10/10, 현실 2/10",
      en: "Optimism 10/10, Reality 2/10",
      ja: "楽観10/10、現実2/10",
      'zh-CN': "乐观10/10，现实2/10",
      'zh-TW': "樂觀10/10，現實2/10",
      vi: "Lạc quan 10/10, Thực tế 2/10",
      id: "Optimisme 10/10, Realitas 2/10"
    },
    advice: {
      ko: "긍정은 좋지만 현실도 봐야 해요. \"잘될 거야\" + \"준비도 하자\"가 진짜 낙관주의입니다!",
      en: "Positivity is good, but you need to see reality too. \"It will go well\" + \"Let's prepare\" is true optimism!",
      ja: "肯定は良いですが、現実も見る必要があります。「うまくいくよ」+「準備もしよう」が本当の楽観主義です！",
      'zh-CN': "积极很好，但也需要看清现实。「会成功的」+「也要准备」才是真正的乐观主义！",
      'zh-TW': "積極很好，但也需要看清現實。「會成功的」+「也要準備」才是真正的樂觀主義！",
      vi: "Tích cực là tốt, nhưng bạn cũng cần nhìn thấy thực tế. \"Sẽ thành công\" + \"Hãy chuẩn bị\" mới là lạc quan thực sự!",
      id: "Positivitas itu baik, tetapi Anda juga perlu melihat realitas. \"Akan berhasil\" + \"Mari persiapkan\" adalah optimisme sejati!"
    },
    warningTitle: {
      ko: "주의사항",
      en: "Warning",
      ja: "注意事項",
      'zh-CN': "注意事项",
      'zh-TW': "注意事項",
      vi: "Cảnh báo",
      id: "Peringatan"
    },
    warningItems: {
      ko: ["과도한 낙관은 판단력 저하", "위험 신호 무시 금물", "계획과 준비의 중요성", "현실적 평가 연습하기"],
      en: ["Excessive optimism lowers judgment", "Don't ignore warning signs", "Importance of planning and preparation", "Practice realistic assessment"],
      ja: ["過度な楽観は判断力低下", "危険信号無視禁止", "計画と準備の重要性", "現実的評価の練習"],
      'zh-CN': ["过度乐观会降低判断力", "切勿忽视警告信号", "计划和准备的重要性", "练习现实评估"],
      'zh-TW': ["過度樂觀會降低判斷力", "切勿忽視警告信號", "計劃和準備的重要性", "練習現實評估"],
      vi: ["Lạc quan quá mức làm giảm khả năng phán đoán", "Không được bỏ qua dấu hiệu cảnh báo", "Tầm quan trọng của lập kế hoạch và chuẩn bị", "Thực hành đánh giá thực tế"],
      id: ["Optimisme berlebihan menurunkan penilaian", "Jangan abaikan tanda peringatan", "Pentingnya perencanaan dan persiapan", "Latih penilaian realistis"]
    }
  },
  {
    type: "Type2",
    emoji: "🌤️",
    title: {
      ko: "건강한 낙관주의",
      en: "Healthy Optimism",
      ja: "健康的な楽観主義",
      'zh-CN': "健康的乐观主义",
      'zh-TW': "健康的樂觀主義",
      vi: "Người Lạc Quan Lành Mạnh",
      id: "Optimisme Sehat"
    },
    shortDescription: {
      ko: "잘 될 거야! 근데 준비도 하자",
      en: "It will go well! But let's prepare too",
      ja: "うまくいくよ！でも準備もしよう",
      'zh-CN': "会成功的！但也要准备",
      'zh-TW': "會成功的！但也要準備",
      vi: "Sẽ thành công! Nhưng cũng hãy chuẩn bị",
      id: "Akan berhasil! Tapi mari kita persiapkan juga"
    },
    description: {
      ko: "긍정적이면서도 현실적입니다. 좋은 결과를 기대하지만 준비도 철저히 합니다. 실패해도 \"다음엔 더 잘하자\"며 긍정적으로 받아들입니다. 가장 이상적인 사고방식으로, 낙관과 현실의 균형이 완벽합니다. 심리학적으로 가장 건강한 상태입니다.",
      en: "You're positive yet realistic. You expect good results but also prepare thoroughly. Even if you fail, you accept it positively by saying \"let's do better next time.\" This is the most ideal mindset, with perfect balance between optimism and reality. It's the psychologically healthiest state.",
      ja: "肯定的でありながら現実的です。良い結果を期待しますが、準備も徹底的にします。失敗しても「次はもっとうまくやろう」と肯定的に受け入れます。最も理想的な思考方式で、楽観と現実のバランスが完璧です。心理学的に最も健康な状態です。",
      'zh-CN': "既积极又现实。期待好结果但也会充分准备。即使失败，也会积极接受，说「下次做得更好」。这是最理想的思维方式，乐观与现实的平衡完美。这是心理学上最健康的状态。",
      'zh-TW': "既積極又現實。期待好結果但也會充分準備。即使失敗，也會積極接受，說「下次做得更好」。這是最理想的思維方式，樂觀與現實的平衡完美。這是心理學上最健康的狀態。",
      vi: "Bạn tích cực nhưng cũng thực tế. Bạn mong đợi kết quả tốt nhưng cũng chuẩn bị kỹ lưỡng. Ngay cả khi thất bại, bạn chấp nhận một cách tích cực bằng cách nói \"hãy làm tốt hơn lần sau.\" Đây là tư duy lý tưởng nhất, với sự cân bằng hoàn hảo giữa lạc quan và thực tế. Đây là trạng thái tâm lý lành mạnh nhất.",
      id: "Anda positif namun realistis. Anda mengharapkan hasil yang baik tetapi juga mempersiapkan dengan matang. Bahkan jika gagal, Anda menerimanya secara positif dengan mengatakan \"mari lakukan lebih baik lain kali.\" Ini adalah pola pikir yang paling ideal, dengan keseimbangan sempurna antara optimisme dan realitas. Ini adalah keadaan yang paling sehat secara psikologis."
    },
    strengths: [
      {
        ko: "긍정적",
        en: "Positive",
        ja: "肯定的",
        'zh-CN': "积极",
        'zh-TW': "積極",
        vi: "Tích cực",
        id: "Positif"
      },
      {
        ko: "현실적",
        en: "Realistic",
        ja: "現実的",
        'zh-CN': "现实",
        'zh-TW': "現實",
        vi: "Thực tế",
        id: "Realistis"
      },
      {
        ko: "준비철저",
        en: "Thorough preparation",
        ja: "準備徹底",
        'zh-CN': "准备充分",
        'zh-TW': "準備充分",
        vi: "Chuẩn bị kỹ lưỡng",
        id: "Persiapan menyeluruh"
      },
      {
        ko: "회복력",
        en: "Resilience",
        ja: "回復力",
        'zh-CN': "恢复力",
        'zh-TW': "恢復力",
        vi: "Khả năng phục hồi",
        id: "Ketahanan"
      }
    ],
    weaknesses: [
      {
        ko: "거의 없음",
        en: "Almost none",
        ja: "ほとんどない",
        'zh-CN': "几乎没有",
        'zh-TW': "幾乎沒有",
        vi: "Hầu như không có",
        id: "Hampir tidak ada"
      }
    ],
    score: {
      ko: "낙관 8/10, 현실 8/10",
      en: "Optimism 8/10, Reality 8/10",
      ja: "楽観8/10、現実8/10",
      'zh-CN': "乐观8/10，现实8/10",
      'zh-TW': "樂觀8/10，現實8/10",
      vi: "Lạc quan 8/10, Thực tế 8/10",
      id: "Optimisme 8/10, Realitas 8/10"
    },
    advice: {
      ko: "완벽해요! 현재의 균형잡힌 태도를 계속 유지하세요. 당신의 사고방식은 이상적입니다!",
      en: "Perfect! Keep maintaining your current balanced attitude. Your mindset is ideal!",
      ja: "完璧です！現在のバランスの取れた態度を続けてください。あなたの思考方式は理想的です！",
      'zh-CN': "完美！继续保持你当前平衡的态度。你的思维方式是理想的！",
      'zh-TW': "完美！繼續保持你當前平衡的態度。你的思維方式是理想的！",
      vi: "Hoàn hảo! Hãy tiếp tục duy trì thái độ cân bằng hiện tại của bạn. Tư duy của bạn là lý tưởng!",
      id: "Sempurna! Terus pertahankan sikap seimbang Anda saat ini. Pola pikir Anda ideal!"
    },
    warningTitle: {
      ko: "유지 방법",
      en: "Maintenance Method",
      ja: "維持方法",
      'zh-CN': "维持方法",
      'zh-TW': "維持方法",
      vi: "Phương pháp duy trì",
      id: "Metode Pemeliharaan"
    },
    warningItems: {
      ko: ["긍정 + 준비의 균형 유지", "실패를 배움으로 전환", "합리적 낙관주의", "감사 일기 쓰기"],
      en: ["Maintain balance of positivity + preparation", "Turn failure into learning", "Rational optimism", "Write gratitude journal"],
      ja: ["肯定+準備のバランス維持", "失敗を学びに変換", "合理的楽観主義", "感謝日記を書く"],
      'zh-CN': ["保持积极+准备的平衡", "将失败转化为学习", "理性乐观主义", "写感恩日记"],
      'zh-TW': ["保持積極+準備的平衡", "將失敗轉化為學習", "理性樂觀主義", "寫感恩日記"],
      vi: ["Duy trì cân bằng tích cực + chuẩn bị", "Biến thất bại thành học hỏi", "Lạc quan hợp lý", "Viết nhật ký biết ơn"],
      id: ["Pertahankan keseimbangan positif + persiapan", "Ubah kegagalan menjadi pembelajaran", "Optimisme rasional", "Tulis jurnal rasa syukur"]
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "현실적 균형형",
      en: "Realistic Balanced",
      ja: "現実的バランス型",
      'zh-CN': "现实平衡型",
      'zh-TW': "現實平衡型",
      vi: "Người Cân Bằng Thực Tế",
      id: "Seimbang Realistis"
    },
    shortDescription: {
      ko: "좋을 수도 나쁠 수도 있지 뭐",
      en: "Could be good, could be bad",
      ja: "良くなるかもしれないし、悪くなるかもしれない",
      'zh-CN': "可能好也可能坏",
      'zh-TW': "可能好也可能壞",
      vi: "Có thể tốt, có thể xấu",
      id: "Bisa jadi baik, bisa jadi buruk"
    },
    description: {
      ko: "\"좋을 수도, 나쁠 수도 있지 뭐\" 낙관도 비관도 아닌 중립적 시각을 가지고 있습니다. 상황을 있는 그대로 보고 판단합니다. 과도한 기대도, 과도한 걱정도 하지 않습니다. 안정적이고 균형잡혔지만 때로는 열정이나 동기가 부족할 수 있습니다. 실용적이고 이성적인 타입입니다.",
      en: "\"Could be good, could be bad\" You have a neutral perspective that's neither optimistic nor pessimistic. You see situations as they are and judge accordingly. You don't have excessive expectations or excessive worries. You're stable and balanced but sometimes may lack passion or motivation. You're a practical and rational type.",
      ja: "「良くなるかもしれないし、悪くなるかもしれない」楽観でも悲観でもない中立的な視点を持っています。状況をあるがままに見て判断します。過度な期待も、過度な心配もしません。安定していてバランスが取れていますが、時には情熱や動機が不足することがあります。実用的で理性的なタイプです。",
      'zh-CN': "「可能好也可能坏」拥有既不是乐观也不是悲观的中立视角。如实地看待和判断情况。既不过度期待也不过度担心。稳定且平衡，但有时可能缺乏热情或动力。是实用且理性的类型。",
      'zh-TW': "「可能好也可能壞」擁有既不是樂觀也不是悲觀的中立視角。如實地看待和判斷情況。既不過度期待也不過度擔心。穩定且平衡，但有時可能缺乏熱情或動力。是實用且理性的類型。",
      vi: "\"Có thể tốt, có thể xấu\" Bạn có góc nhìn trung lập không phải lạc quan cũng không phải bi quan. Bạn nhìn tình huống như nó vốn có và đánh giá phù hợp. Bạn không có kỳ vọng quá mức cũng không lo lắng quá mức. Bạn ổn định và cân bằng nhưng đôi khi có thể thiếu đam mê hoặc động lực. Bạn là kiểu người thực tế và lý trí.",
      id: "\"Bisa jadi baik, bisa jadi buruk\" Anda memiliki perspektif netral yang tidak optimis maupun pesimis. Anda melihat situasi apa adanya dan menilai sesuai. Anda tidak memiliki ekspektasi berlebihan atau kekhawatiran berlebihan. Anda stabil dan seimbang tetapi kadang-kadang mungkin kurang gairah atau motivasi. Anda adalah tipe yang praktis dan rasional."
    },
    strengths: [
      {
        ko: "균형감",
        en: "Sense of balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      },
      {
        ko: "현실적",
        en: "Realistic",
        ja: "現実的",
        'zh-CN': "现实",
        'zh-TW': "現實",
        vi: "Thực tế",
        id: "Realistis"
      },
      {
        ko: "안정적",
        en: "Stable",
        ja: "安定",
        'zh-CN': "稳定",
        'zh-TW': "穩定",
        vi: "Ổn định",
        id: "Stabil"
      },
      {
        ko: "이성적",
        en: "Rational",
        ja: "理性的",
        'zh-CN': "理性",
        'zh-TW': "理性",
        vi: "Lý trí",
        id: "Rasional"
      }
    ],
    weaknesses: [
      {
        ko: "열정 부족",
        en: "Lack of passion",
        ja: "情熱不足",
        'zh-CN': "缺乏热情",
        'zh-TW': "缺乏熱情",
        vi: "Thiếu đam mê",
        id: "Kurang gairah"
      },
      {
        ko: "재미 없을 수 있음",
        en: "May lack excitement",
        ja: "面白みがないかもしれない",
        'zh-CN': "可能缺乏趣味",
        'zh-TW': "可能缺乏趣味",
        vi: "Có thể thiếu hào hứng",
        id: "Mungkin kurang menarik"
      }
    ],
    score: {
      ko: "낙관 5/10, 비관 5/10",
      en: "Optimism 5/10, Pessimism 5/10",
      ja: "楽観5/10、悲観5/10",
      'zh-CN': "乐观5/10，悲观5/10",
      'zh-TW': "樂觀5/10，悲觀5/10",
      vi: "Lạc quan 5/10, Bi quan 5/10",
      id: "Optimisme 5/10, Pesimisme 5/10"
    },
    advice: {
      ko: "균형은 좋지만 가끔은 긍정의 힘도 필요해요. 열정을 더하면 삶이 더 풍요로워집니다!",
      en: "Balance is good, but sometimes you need the power of positivity too. Adding passion makes life more enriching!",
      ja: "バランスは良いですが、時には肯定の力も必要です。情熱を加えると人生がより豊かになります！",
      'zh-CN': "平衡很好，但有时也需要积极的力量。增加热情会让生活更丰富！",
      'zh-TW': "平衡很好，但有時也需要積極的力量。增加熱情會讓生活更豐富！",
      vi: "Cân bằng là tốt, nhưng đôi khi bạn cũng cần sức mạnh của tích cực. Thêm đam mê sẽ làm cho cuộc sống phong phú hơn!",
      id: "Keseimbangan itu baik, tetapi kadang-kadang Anda juga perlu kekuatan positif. Menambahkan gairah membuat hidup lebih kaya!"
    },
    warningTitle: {
      ko: "활력 더하기",
      en: "Add Vitality",
      ja: "活力を増やす",
      'zh-CN': "增加活力",
      'zh-TW': "增加活力",
      vi: "Thêm sinh lực",
      id: "Tambahkan Vitalitas"
    },
    warningItems: {
      ko: ["긍정 일기 시도해보기", "작은 기대감 가져보기", "좋은 일에 집중하기", "감사하기 연습"],
      en: ["Try positive journaling", "Have small expectations", "Focus on good things", "Practice gratitude"],
      ja: ["肯定的日記を試す", "小さな期待感を持つ", "良いことに集中する", "感謝の練習"],
      'zh-CN': ["尝试积极日记", "抱有小小期待", "专注于好事", "练习感恩"],
      'zh-TW': ["嘗試積極日記", "抱有小小期待", "專注於好事", "練習感恩"],
      vi: ["Thử viết nhật ký tích cực", "Có kỳ vọng nhỏ", "Tập trung vào điều tốt", "Thực hành biết ơn"],
      id: ["Coba jurnal positif", "Miliki ekspektasi kecil", "Fokus pada hal-hal baik", "Latih rasa syukur"]
    }
  },
  {
    type: "Type4",
    emoji: "🛡️",
    title: {
      ko: "방어적 비관주의",
      en: "Defensive Pessimism",
      ja: "防御的悲観主義",
      'zh-CN': "防御性悲观主义",
      'zh-TW': "防禦性悲觀主義",
      vi: "Người Bi Quan Phòng Thủ",
      id: "Pesimisme Defensif"
    },
    shortDescription: {
      ko: "미리 걱정하면 덜 실망해!",
      en: "If I worry in advance, I'll be less disappointed!",
      ja: "事前に心配すると失望が少ない！",
      'zh-CN': "提前担心失望会更少！",
      'zh-TW': "提前擔心失望會更少！",
      vi: "Nếu lo lắng trước, tôi sẽ ít thất vọng hơn!",
      id: "Jika saya khawatir sebelumnya, saya akan kurang kecewa!"
    },
    description: {
      ko: "\"미리 걱정하면 덜 실망해!\" 최악을 예상하며 준비하는 타입입니다. \"실패하면 어쩌지\" 생각하며 철저히 준비합니다. 걱정이 동기가 되어 더 열심히 하고, 실제로는 잘 해냅니다. 심리학에서는 이것도 하나의 전략이지만, 스트레스와 불안이 높아 건강에 좋지 않습니다.",
      en: "\"If I worry in advance, I'll be less disappointed!\" You're the type who prepares by expecting the worst. You think \"what if I fail\" and prepare thoroughly. Worry becomes motivation and you work harder, actually doing well. In psychology, this is also a strategy, but high stress and anxiety are not good for health.",
      ja: "「事前に心配すると失望が少ない！」最悪を予想しながら準備するタイプです。「失敗したらどうしよう」と考えながら徹底的に準備します。心配が動機となってより一生懸命になり、実際にはうまくやります。心理学ではこれも戦略の一つですが、ストレスと不安が高く健康に良くありません。",
      'zh-CN': "「提前担心失望会更少！」预期最坏情况并为此准备的类型。一边想着「如果失败了怎么办」一边充分准备。担心成为动力，更加努力，实际上做得很好。在心理学中这也是一种策略，但压力高和焦虑对健康不利。",
      'zh-TW': "「提前擔心失望會更少！」預期最壞情況並為此準備的類型。一邊想著「如果失敗了怎麼辦」一邊充分準備。擔心成為動力，更加努力，實際上做得很好。在心理學中這也是一種策略，但壓力高和焦慮對健康不利。",
      vi: "\"Nếu lo lắng trước, tôi sẽ ít thất vọng hơn!\" Bạn là kiểu người chuẩn bị bằng cách mong đợi điều tồi tệ nhất. Bạn nghĩ \"nếu thất bại thì sao\" và chuẩn bị kỹ lưỡng. Lo lắng trở thành động lực và bạn làm việc chăm chỉ hơn, thực sự làm tốt. Trong tâm lý học, đây cũng là một chiến lược, nhưng căng thẳng và lo âu cao không tốt cho sức khỏe.",
      id: "\"Jika saya khawatir sebelumnya, saya akan kurang kecewa!\" Anda adalah tipe yang mempersiapkan dengan mengharapkan yang terburuk. Anda berpikir \"bagaimana jika saya gagal\" dan mempersiapkan dengan matang. Kekhawatiran menjadi motivasi dan Anda bekerja lebih keras, sebenarnya berhasil dengan baik. Dalam psikologi, ini juga strategi, tetapi stres dan kecemasan yang tinggi tidak baik untuk kesehatan."
    },
    strengths: [
      {
        ko: "철저한 준비",
        en: "Thorough preparation",
        ja: "徹底的な準備",
        'zh-CN': "充分准备",
        'zh-TW': "充分準備",
        vi: "Chuẩn bị kỹ lưỡng",
        id: "Persiapan menyeluruh"
      },
      {
        ko: "실망 적음",
        en: "Less disappointment",
        ja: "失望少ない",
        'zh-CN': "较少失望",
        'zh-TW': "較少失望",
        vi: "Ít thất vọng",
        id: "Kurang kekecewaan"
      },
      {
        ko: "위기 대비",
        en: "Crisis preparedness",
        ja: "危機対応",
        'zh-CN': "危机准备",
        'zh-TW': "危機準備",
        vi: "Sẵn sàng tốt cho khủng hoảng",
        id: "Kesiapan krisis"
      }
    ],
    weaknesses: [
      {
        ko: "높은 스트레스",
        en: "High stress",
        ja: "高いストレス",
        'zh-CN': "高压",
        'zh-TW': "高壓",
        vi: "Căng thẳng cao",
        id: "Stres tinggi"
      },
      {
        ko: "불안",
        en: "Anxiety",
        ja: "不安",
        'zh-CN': "焦虑",
        'zh-TW': "焦慮",
        vi: "Lo âu",
        id: "Kecemasan"
      },
      {
        ko: "행복감 낮음",
        en: "Low happiness",
        ja: "幸福感低い",
        'zh-CN': "幸福感低",
        'zh-TW': "幸福感低",
        vi: "Hạnh phúc thấp",
        id: "Kebahagiaan rendah"
      }
    ],
    score: {
      ko: "낙관 3/10, 비관 7/10",
      en: "Optimism 3/10, Pessimism 7/10",
      ja: "楽観3/10、悲観7/10",
      'zh-CN': "乐观3/10，悲观7/10",
      'zh-TW': "樂觀3/10，悲觀7/10",
      vi: "Lạc quan 3/10, Bi quan 7/10",
      id: "Optimisme 3/10, Pesimisme 7/10"
    },
    advice: {
      ko: "준비는 좋지만 스트레스는 나빠요. 가끔은 \"잘 될 거야\"라고 믿어보세요!",
      en: "Preparation is good, but stress is bad. Sometimes believe \"it will go well\"!",
      ja: "準備は良いですが、ストレスは悪いです。時には「うまくいくよ」と信じてみてください！",
      'zh-CN': "准备很好，但压力不好。有时要相信「会成功的」！",
      'zh-TW': "準備很好，但壓力不好。有時要相信「會成功的」！",
      vi: "Chuẩn bị là tốt, nhưng căng thẳng là xấu. Đôi khi hãy tin \"sẽ thành công\"!",
      id: "Persiapan itu baik, tetapi stres itu buruk. Kadang-kadang percayalah \"akan berhasil\"!"
    },
    warningTitle: {
      ko: "스트레스 줄이기",
      en: "Reduce Stress",
      ja: "ストレスを減らす",
      'zh-CN': "减少压力",
      'zh-TW': "減少壓力",
      vi: "Giảm căng thẳng",
      id: "Kurangi Stres"
    },
    warningItems: {
      ko: ["최악만 생각하지 않기", "좋은 결과도 상상하기", "이완 기법 배우기", "과도한 걱정 줄이기"],
      en: ["Don't only think worst case", "Imagine good results too", "Learn relaxation techniques", "Reduce excessive worry"],
      ja: ["最悪だけ考えない", "良い結果も想像する", "リラクゼーション技術を学ぶ", "過度な心配を減らす"],
      'zh-CN': ["不要只想最坏情况", "也想象好结果", "学习放松技巧", "减少过度担心"],
      'zh-TW': ["不要只想最壞情況", "也想像好結果", "學習放鬆技巧", "減少過度擔心"],
      vi: ["Đừng chỉ nghĩ đến trường hợp xấu nhất", "Hãy tưởng tượng kết quả tốt", "Học kỹ thuật thư giãn", "Giảm lo lắng quá mức"],
      id: ["Jangan hanya memikirkan skenario terburuk", "Bayangkan hasil yang baik juga", "Pelajari teknik relaksasi", "Kurangi kekhawatiran berlebihan"]
    }
  },
  {
    type: "Type5",
    emoji: "☁️",
    title: {
      ko: "비관주의 성향",
      en: "Pessimistic Tendency",
      ja: "悲観主義傾向",
      'zh-CN': "悲观主义倾向",
      'zh-TW': "悲觀主義傾向",
      vi: "Xu Hướng Bi Quan",
      id: "Kecenderungan Pesimis"
    },
    shortDescription: {
      ko: "뭘 해도 안 될 거야...",
      en: "Nothing will work out anyway...",
      ja: "何をしてもうまくいかないだろう...",
      'zh-CN': "无论做什么都不会成功...",
      'zh-TW': "無論做什麼都不會成功...",
      vi: "Làm gì cũng không thành công...",
      id: "Tidak ada yang akan berhasil..."
    },
    description: {
      ko: "\"뭘 해도 안 될 거야...\" 대부분의 상황을 부정적으로 봅니다. 좋은 일이 생겨도 \"곧 나쁜 일이 올 거야\"라고 생각합니다. 실패를 두려워하고 도전을 피합니다. 우울하고 불안한 감정이 많으며, 삶의 만족도가 낮습니다. 사고방식 전환이 필요한 상태입니다.",
      en: "\"Nothing will work out anyway...\" You see most situations negatively. Even when good things happen, you think \"bad things will come soon.\" You fear failure and avoid challenges. You have many depressive and anxious feelings, and life satisfaction is low. You need a mindset shift.",
      ja: "「何をしてもうまくいかないだろう...」ほとんどの状況を否定的に見ます。良いことが起こっても「すぐに悪いことが来るだろう」と考えます。失敗を恐れ、挑戦を避けます。うつ病で不安な感情が多く、人生の満足度が低いです。思考方式の転換が必要な状態です。",
      'zh-CN': "「无论做什么都不会成功...」消极看待大多数情况。即使好事发生，也认为「坏事很快就会来」。害怕失败，回避挑战。抑郁和焦虑情绪多，生活满意度低。需要转变思维方式。",
      'zh-TW': "「無論做什麼都不會成功...」消極看待大多數情況。即使好事發生，也認為「壞事很快就會來」。害怕失敗，迴避挑戰。抑鬱和焦慮情緒多，生活滿意度低。需要轉變思維方式。",
      vi: "\"Làm gì cũng không thành công...\" Bạn nhìn hầu hết tình huống một cách tiêu cực. Ngay cả khi điều tốt xảy ra, bạn nghĩ \"chuyện xấu sẽ đến sớm thôi.\" Bạn sợ thất bại và tránh thử thách. Bạn có nhiều cảm xúc trầm cảm và lo âu, và sự hài lòng cuộc sống thấp. Bạn cần thay đổi tư duy.",
      id: "\"Tidak ada yang akan berhasil...\" Anda melihat sebagian besar situasi secara negatif. Bahkan ketika hal-hal baik terjadi, Anda berpikir \"hal-hal buruk akan datang segera.\" Anda takut kegagalan dan menghindari tantangan. Anda memiliki banyak perasaan depresi dan cemas, dan kepuasan hidup rendah. Anda perlu perubahan pola pikir."
    },
    strengths: [
      {
        ko: "위험 인식",
        en: "Risk awareness",
        ja: "リスク認識",
        'zh-CN': "风险意识",
        'zh-TW': "風險意識",
        vi: "Nhận thức rủi ro",
        id: "Kesadaran risiko"
      },
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        'zh-CN': "谨慎",
        'zh-TW': "謹慎",
        vi: "Thận trọng",
        id: "Kehati-hatian"
      }
    ],
    weaknesses: [
      {
        ko: "우울",
        en: "Depression",
        ja: "うつ病",
        'zh-CN': "抑郁",
        'zh-TW': "抑鬱",
        vi: "Trầm cảm",
        id: "Depresi"
      },
      {
        ko: "불안",
        en: "Anxiety",
        ja: "不安",
        'zh-CN': "焦虑",
        'zh-TW': "焦慮",
        vi: "Lo âu",
        id: "Kecemasan"
      },
      {
        ko: "기회 놓침",
        en: "Missed opportunities",
        ja: "機会逃し",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        vi: "Bỏ lỡ cơ hội",
        id: "Melewatkan peluang"
      },
      {
        ko: "도전 회피",
        en: "Avoiding challenges",
        ja: "挑戦回避",
        'zh-CN': "回避挑战",
        'zh-TW': "迴避挑戰",
        vi: "Tránh thử thách",
        id: "Menghindari tantangan"
      }
    ],
    score: {
      ko: "낙관 2/10, 비관 8/10",
      en: "Optimism 2/10, Pessimism 8/10",
      ja: "楽観2/10、悲観8/10",
      'zh-CN': "乐观2/10，悲观8/10",
      'zh-TW': "樂觀2/10，悲觀8/10",
      vi: "Lạc quan 2/10, Bi quan 8/10",
      id: "Optimisme 2/10, Pesimisme 8/10"
    },
    advice: {
      ko: "세상은 생각보다 나쁘지 않아요. 작은 긍정부터 시작해보세요. 전문가 상담도 도움이 됩니다.",
      en: "The world isn't as bad as you think. Start with small positives. Professional counseling also helps.",
      ja: "世界はあなたが思うほど悪くありません。小さな肯定から始めてください。専門家のカウンセリングも役立ちます。",
      'zh-CN': "世界没有你想的那么糟。从小小的积极开始。专业咨询也有帮助。",
      'zh-TW': "世界沒有你想的那麼糟。從小小的積極開始。專業諮詢也有幫助。",
      vi: "Thế giới không tệ như bạn nghĩ. Hãy bắt đầu với những điều tích cực nhỏ. Tư vấn chuyên nghiệp cũng giúp ích.",
      id: "Dunia tidak seburuk yang Anda pikirkan. Mulailah dengan hal-hal positif kecil. Konseling profesional juga membantu."
    },
    warningTitle: {
      ko: "긍정 전환하기",
      en: "Shift to Positive",
      ja: "肯定的に転換する",
      'zh-CN': "转向积极",
      'zh-TW': "轉向積極",
      vi: "Chuyển sang tích cực",
      id: "Beralih ke Positif"
    },
    warningItems: {
      ko: ["긍정 찾기 연습", "인지 왜곡 수정", "감사 일기", "필요시 상담 받기"],
      en: ["Practice finding positives", "Correct cognitive distortions", "Gratitude journal", "Seek counseling if needed"],
      ja: ["肯定探しの練習", "認知歪み修正", "感謝日記", "必要に応じてカウンセリングを受ける"],
      'zh-CN': ["练习寻找积极面", "纠正认知扭曲", "感恩日记", "必要时寻求咨询"],
      'zh-TW': ["練習尋找積極面", "糾正認知扭曲", "感恩日記", "必要時尋求諮詢"],
      vi: ["Thực hành tìm điều tích cực", "Sửa chữa méo mó nhận thức", "Nhật ký biết ơn", "Tìm tư vấn nếu cần"],
      id: ["Latih menemukan hal positif", "Perbaiki distorsi kognitif", "Jurnal rasa syukur", "Cari konseling jika diperlukan"]
    }
  },
  {
    type: "Type6",
    emoji: "⛈️",
    title: {
      ko: "극단적 비관주의",
      en: "Extreme Pessimism",
      ja: "極端な悲観主義",
      'zh-CN': "极端悲观主义",
      'zh-TW': "極端悲觀主義",
      vi: "Người Bi Quan Cực Đoan",
      id: "Pesimisme Ekstrem"
    },
    shortDescription: {
      ko: "모든 게 최악이야...",
      en: "Everything is the worst...",
      ja: "すべてが最悪だ...",
      'zh-CN': "一切都是最糟的...",
      'zh-TW': "一切都是最糟的...",
      vi: "Mọi thứ đều tồi tệ nhất...",
      id: "Semuanya terburuk..."
    },
    description: {
      ko: "\"모든 게 최악이야...\" 모든 것을 부정적으로만 봅니다. 항상 최악을 예상하고, 좋은 일도 믿지 못합니다. 우울증 위험이 높고 삶의 질이 매우 낮습니다. 도전을 완전히 포기하고 무기력합니다. 전문가의 도움이 절실히 필요한 상태입니다. 혼자 해결하기 어렵습니다.",
      en: "\"Everything is the worst...\" You see everything only negatively. You always expect the worst and can't believe in good things. Depression risk is high and quality of life is very low. You completely give up on challenges and feel lethargic. You urgently need professional help. It's difficult to solve alone.",
      ja: "「すべてが最悪だ...」すべてを否定的にだけ見ます。常に最悪を予想し、良いことも信じられません。うつ病のリスクが高く、人生の質が非常に低いです。挑戦を完全に諦めて無気力です。専門家の助けが切実に必要な状態です。一人で解決するのは困難です。",
      'zh-CN': "「一切都是最糟的...」只看消极面。总是预期最坏，连好事也不相信。抑郁风险高，生活质量很低。完全放弃挑战，没有动力。迫切需要专业帮助。难以独自解决。",
      'zh-TW': "「一切都是最糟的...」只看消極面。總是預期最壞，連好事也不相信。抑鬱風險高，生活質量很低。完全放棄挑戰，沒有動力。迫切需要專業幫助。難以獨自解決。",
      vi: "\"Mọi thứ đều tồi tệ nhất...\" Bạn chỉ nhìn mọi thứ một cách tiêu cực. Bạn luôn mong đợi điều tồi tệ nhất và không thể tin vào điều tốt. Nguy cơ trầm cảm cao và chất lượng cuộc sống rất thấp. Bạn hoàn toàn từ bỏ thử thách và cảm thấy uể oải. Bạn cần sự giúp đỡ chuyên nghiệp khẩn cấp. Khó tự giải quyết.",
      id: "\"Semuanya terburuk...\" Anda melihat segalanya hanya secara negatif. Anda selalu mengharapkan yang terburuk dan tidak bisa percaya pada hal-hal baik. Risiko depresi tinggi dan kualitas hidup sangat rendah. Anda benar-benar menyerah pada tantangan dan merasa lesu. Anda sangat membutuhkan bantuan profesional. Sulit untuk diselesaikan sendiri."
    },
    strengths: [
      {
        ko: "거의 없음 (극도의 신중함?)",
        en: "Almost none (extreme caution?)",
        ja: "ほとんどない（極度の慎重さ？）",
        'zh-CN': "几乎没有（极度谨慎？）",
        'zh-TW': "幾乎沒有（極度謹慎？）",
        vi: "Hầu như không có (thận trọng cực độ?)",
        id: "Hampir tidak ada (kehati-hatian ekstrem?)"
      }
    ],
    weaknesses: [
      {
        ko: "우울",
        en: "Depression",
        ja: "うつ病",
        'zh-CN': "抑郁",
        'zh-TW': "抑鬱",
        vi: "Trầm cảm",
        id: "Depresi"
      },
      {
        ko: "무기력",
        en: "Lethargy",
        ja: "無気力",
        'zh-CN': "无动力",
        'zh-TW': "無動力",
        vi: "Uể oải",
        id: "Lesu"
      },
      {
        ko: "삶의 질 저하",
        en: "Low quality of life",
        ja: "人生の質低下",
        'zh-CN': "生活质量低下",
        'zh-TW': "生活質量低下",
        vi: "Chất lượng cuộc sống thấp",
        id: "Kualitas hidup rendah"
      },
      {
        ko: "관계 어려움",
        en: "Relationship difficulties",
        ja: "関係困難",
        'zh-CN': "关系困难",
        'zh-TW': "關係困難",
        vi: "Khó khăn trong mối quan hệ",
        id: "Kesulitan hubungan"
      }
    ],
    score: {
      ko: "낙관 0/10, 비관 10/10",
      en: "Optimism 0/10, Pessimism 10/10",
      ja: "楽観0/10、悲観10/10",
      'zh-CN': "乐观0/10，悲观10/10",
      'zh-TW': "樂觀0/10，悲觀10/10",
      vi: "Lạc quan 0/10, Bi quan 10/10",
      id: "Optimisme 0/10, Pesimisme 10/10"
    },
    advice: {
      ko: "혼자 고민하지 마세요. 우울증일 가능성이 있습니다. 정신건강의학과나 상담센터를 꼭 방문하세요.",
      en: "Don't worry alone. There's a possibility of depression. Please visit a psychiatric department or counseling center.",
      ja: "一人で悩まないでください。うつ病の可能性があります。精神科またはカウンセリングセンターを必ず訪問してください。",
      'zh-CN': "不要独自烦恼。有患抑郁症的可能。请务必前往精神科或咨询中心。",
      'zh-TW': "不要獨自煩惱。有患抑鬱症的可能。請務必前往精神科或諮詢中心。",
      vi: "Đừng lo lắng một mình. Có khả năng bị trầm cảm. Vui lòng đến khoa tâm thần hoặc trung tâm tư vấn.",
      id: "Jangan khawatir sendirian. Ada kemungkinan depresi. Silakan kunjungi departemen psikiatri atau pusat konseling."
    },
    warningTitle: {
      ko: "전문가 도움 받기",
      en: "Seek Professional Help",
      ja: "専門家の助けを得る",
      'zh-CN': "寻求专业帮助",
      'zh-TW': "尋求專業幫助",
      vi: "Tìm kiếm sự giúp đỡ chuyên nghiệp",
      id: "Mencari Bantuan Profesional"
    },
    warningItems: {
      ko: ["정신건강의학과 방문", "심리상담센터 1577-0199", "자살예방상담 1393", "인지행동치료(CBT) 추천"],
      en: ["Visit psychiatric department", "Counseling center 1577-0199", "Suicide prevention hotline 1393", "Recommend cognitive behavioral therapy (CBT)"],
      ja: ["精神科訪問", "心理カウンセリングセンター1577-0199", "自殺防止相談1393", "認知行動療法（CBT）推奨"],
      'zh-CN': ["前往精神科", "心理咨询中心1577-0199", "自杀预防热线1393", "推荐认知行为疗法(CBT)"],
      'zh-TW': ["前往精神科", "心理諮詢中心1577-0199", "自殺預防熱線1393", "推薦認知行為療法(CBT)"],
      vi: ["Đến khoa tâm thần", "Trung tâm tư vấn tâm lý 1577-0199", "Đường dây phòng chống tự tử 1393", "Khuyến nghị liệu pháp nhận thức hành vi (CBT)"],
      id: ["Kunjungi departemen psikiatri", "Pusat konseling 1577-0199", "Hotline pencegahan bunuh diri 1393", "Rekomendasikan terapi perilaku kognitif (CBT)"]
    }
  }
];

export function calculateOptimismResult(answers: any[]): string {
  let optimismScore = 0;
  let pessimismScore = 0;
  
  answers.forEach(answer => {
    if (answer.optimism) optimismScore += answer.optimism;
    if (answer.pessimism) pessimismScore += answer.pessimism;
  });
  
  // 총 24점 만점 (낙관 vs 비관)
  // 22-24점 낙관: Type 1 (극단적 낙관주의)
  // 16-20점 낙관: Type 2 (건강한 낙관주의)
  // 10-14점: Type 3 (현실적 균형형)
  // 4-8점 비관: Type 4 (방어적 비관주의)
  // 2점 비관: Type 5 (비관주의 성향)
  // 0점 (24점 비관): Type 6 (극단적 비관주의)
  
  if (optimismScore >= 22) return "Type1";
  if (optimismScore >= 16) return "Type2";
  if (optimismScore >= 10) return "Type3";
  if (optimismScore >= 4) return "Type4";
  if (optimismScore >= 2) return "Type5";
  return "Type6";
}

