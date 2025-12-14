export interface Phase2CoreEmotionQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2CoreEmotionResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>; // 핵심 키워드
  caution: Record<string, string>; // 주의할 점
}

export const phase2CoreEmotionQuestions: Phase2CoreEmotionQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아침에 눈을 떴을 때 가장 먼저 드는 기분은?",
      en: "",
      ja: "",
      "zh-CN": "",
      "zh-TW": "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"오늘도 좋은 일이 생길 거야!\" 설렘과 기대감",
          en: "\"Good things will happen today!\" Excitement and anticipation",
          ja: "「今日もいいことがあるはず！」ワクワクと期待感",
          "zh-CN": "「今天也会有好事发生！」兴奋和期待",
          "zh-TW": "「今天也會有好事發生！」興奮和期待",
          vi: "\"Hôm nay sẽ có những điều tốt đẹp!\" Sự phấn khích và kỳ vọng",
          id: "\"Hal baik akan terjadi hari ini!\" Kegembiraan dan antisipasi"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"아... 더 자고 싶다. 피곤해.\" 무거움과 처짐",
          en: "\"Ah... I want to sleep more. I'm tired.\" Heaviness and exhaustion",
          ja: "「ああ...もっと寝たい。疲れた」重さと落ち込み",
          "zh-CN": "「啊...还想再睡。好累」沉重和疲惫",
          "zh-TW": "「啊...還想再睡。好累」沉重和疲憊",
          vi: "\"Ồ... Muốn ngủ thêm. Mệt mỏi.\" Sự nặng nề và kiệt sức",
          id: "\"Ah... Ingin tidur lagi. Lelah.\" Keberatan dan kelelahan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"오늘 할 일이 뭐더라?\" 실수할까 봐 미리 걱정함",
          en: "\"What do I have to do today?\" Worrying in advance about making mistakes",
          ja: "「今日やることは何だっけ？」失敗しないか心配する",
          "zh-CN": "「今天要做什么来着？」提前担心会出错",
          "zh-TW": "「今天要做什麼來著？」提前擔心會出錯",
          vi: "\"Hôm nay phải làm gì nhỉ?\" Lo lắng trước về việc mắc sai lầm",
          id: "\"Apa yang harus saya lakukan hari ini?\" Khawatir sebelumnya tentang membuat kesalahan"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"알람 소리 진짜 시끄럽네!\" 짜증과 예민함",
          en: "\"The alarm is really loud!\" Irritation and sensitivity",
          ja: "「アラームの音が本当にうるさい！」イライラと過敏",
          "zh-CN": "「闹钟声音真吵！」烦躁和敏感",
          "zh-TW": "「鬧鐘聲音真吵！」煩躁和敏感",
          vi: "\"Tiếng báo thức thật ồn ào!\" Sự khó chịu và nhạy cảm",
          id: "\"Alarm benar-benar keras!\" Iritasi dan sensitivitas"
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "갑작스러운 여행을 떠나게 되었다면?",
      en: "If you had to go on a sudden trip?",
      ja: "突然旅行に出ることになったら？",
      "zh-CN": "如果突然要去旅行？",
      "zh-TW": "如果突然要去旅行？",
      vi: "Nếu bạn phải đi du lịch đột ngột?",
      id: "Jika Anda harus pergi dalam perjalanan mendadak?"
    },
    options: [
      {
        text: {
          ko: "\"와 신난다! 어디로 갈까?\" 즉흥적인 모험을 즐긴다",
          en: "\"Wow, exciting! Where should we go?\" Enjoy an impromptu adventure",
          ja: "「わあ、楽しみ！どこに行こう？」即興の冒険を楽しむ",
          "zh-CN": "「哇，好兴奋！去哪里呢？」享受即兴冒险",
          "zh-TW": "「哇，好興奮！去哪裡呢？」享受即興冒險",
          vi: "\"Ồ thú vị! Đi đâu nhỉ?\" Tận hưởng cuộc phiêu lưu ngẫu hứng",
          id: "\"Wah, menyenangkan! Ke mana kita pergi?\" Menikmati petualangan spontan"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"혹시 위험하진 않을까? 준비물은?\" 꼼꼼하게 대비한다",
          en: "\"What if it's dangerous? What should I prepare?\" Prepare thoroughly",
          ja: "「もしかして危険じゃない？準備物は？」きちんと準備する",
          "zh-CN": "「会不会有危险？要准备什么？」仔细准备",
          "zh-TW": "「會不會有危險？要準備什麼？」仔細準備",
          vi: "\"Liệu có nguy hiểm không? Cần chuẩn bị gì?\" Chuẩn bị kỹ lưỡng",
          id: "\"Bagaimana jika berbahaya? Apa yang harus disiapkan?\" Mempersiapkan dengan teliti"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"숙소가 더러우면 어떡하지?\" 위생과 퀄리티부터 따진다",
          en: "\"What if the accommodation is dirty?\" Consider hygiene and quality first",
          ja: "「宿泊先が汚かったらどうしよう？」衛生と品質から考える",
          "zh-CN": "「如果住宿很脏怎么办？」先考虑卫生和质量",
          "zh-TW": "「如果住宿很髒怎麼辦？」先考慮衛生和質量",
          vi: "\"Nếu chỗ ở bẩn thì sao?\" Xem xét vệ sinh và chất lượng trước",
          id: "\"Bagaimana jika akomodasinya kotor?\" Pertimbangkan kebersihan dan kualitas terlebih dahulu"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "\"가서 푹 쉬다 와야지.\" 아무 계획 없이 흘러가는 대로 둔다",
          en: "\"I'll go and rest well.\" Let it flow without any plans",
          ja: "「行ってゆっくり休んでこよう」何の計画もなく流れに任せる",
          "zh-CN": "「去好好休息一下」没有任何计划，随遇而安",
          "zh-TW": "「去好好休息一下」沒有任何計劃，隨遇而安",
          vi: "\"Đi và nghỉ ngơi thật tốt.\" Để mọi thứ tự nhiên không có kế hoạch",
          id: "\"Pergi dan istirahat dengan baik.\" Biarkan mengalir tanpa rencana"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 약속 시간에 늦었을 때?",
      en: "When a friend is late for an appointment?",
      ja: "友達が約束の時間に遅れた時？",
      "zh-CN": "当朋友约会迟到时？",
      "zh-TW": "當朋友約會遲到時？",
      vi: "Khi bạn bè đến muộn cuộc hẹn?",
      id: "Ketika teman terlambat untuk janji?"
    },
    options: [
      {
        text: {
          ko: "\"오다가 무슨 일 있었나?\" 걱정부터 앞선다",
          en: "\"Did something happen on the way?\" Worry comes first",
          ja: "「途中で何かあったの？」心配が先に立つ",
          "zh-CN": "「路上发生什么事了吗？」先担心起来",
          "zh-TW": "「路上發生什麼事了嗎？」先擔心起來",
          vi: "\"Có chuyện gì xảy ra trên đường không?\" Lo lắng đến trước",
          id: "\"Apakah ada sesuatu yang terjadi di jalan?\" Kekhawatiran datang terlebih dahulu"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "\"내 시간을 낭비하게 하다니.\" 화가 나고 따지고 싶다",
          en: "\"Wasting my time like this.\" Get angry and want to confront",
          ja: "「私の時間を無駄にさせるなんて」怒って詰問したい",
          "zh-CN": "「浪费我的时间」生气并想质问",
          "zh-TW": "「浪費我的時間」生氣並想質問",
          vi: "\"Lãng phí thời gian của tôi như vậy.\" Tức giận và muốn đối chất",
          id: "\"Membuang-buang waktu saya seperti ini.\" Marah dan ingin menghadapi"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"괜찮아~ 그동안 폰 보고 있으면 돼.\" 여유롭게 기다린다",
          en: "\"It's okay~ I'll just look at my phone meanwhile.\" Wait leisurely",
          ja: "「大丈夫〜その間スマホ見てればいいよ」余裕を持って待つ",
          "zh-CN": "「没关系~我看看手机就行」悠闲地等待",
          "zh-TW": "「沒關係~我看看手機就行」悠閒地等待",
          vi: "\"Không sao~ Trong lúc đó xem điện thoại là được.\" Chờ đợi một cách thoải mái",
          id: "\"Tidak apa-apa~ Saya akan melihat ponsel sementara itu.\" Menunggu dengan santai"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"늦으면 늦는다고 말을 했어야지.\" 예의 없는 태도가 거슬린다",
          en: "\"You should have said you'd be late.\" The rude attitude is annoying",
          ja: "「遅れるなら遅れると言うべきだった」無礼な態度が気になる",
          "zh-CN": "「应该提前说会迟到」无礼的态度让人不舒服",
          "zh-TW": "「應該提前說會遲到」無禮的態度讓人不舒服",
          vi: "\"Lẽ ra nên nói là sẽ đến muộn.\" Thái độ vô lễ khó chịu",
          id: "\"Seharusnya bilang akan terlambat.\" Sikap tidak sopan mengganggu"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "슬픈 영화를 볼 때 당신의 모습은?",
      en: "What are you like when watching a sad movie?",
      ja: "悲しい映画を見るとき、あなたの様子は？",
      "zh-CN": "看悲伤电影时你的样子是？",
      "zh-TW": "看悲傷電影時你的樣子是？",
      vi: "Bạn như thế nào khi xem phim buồn?",
      id: "Bagaimana Anda saat menonton film sedih?"
    },
    options: [
      {
        text: {
          ko: "주인공의 감정에 동화되어 펑펑 운다",
          en: "Empathize with the protagonist's emotions and cry hard",
          ja: "主人公の感情に同化して号泣する",
          "zh-CN": "与主角的情感产生共鸣，痛哭流涕",
          "zh-TW": "與主角的情感產生共鳴，痛哭流涕",
          vi: "Đồng cảm với cảm xúc của nhân vật chính và khóc nức nở",
          id: "Berempati dengan emosi protagonis dan menangis tersedu-sedu"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"저건 영화일 뿐이야.\" 담담하게 본다",
          en: "\"That's just a movie.\" Watch calmly",
          ja: "「あれは映画に過ぎない」冷静に見る",
          "zh-CN": "「那只是电影而已」冷静地观看",
          "zh-TW": "「那只是電影而已」冷靜地觀看",
          vi: "\"Đó chỉ là phim thôi.\" Xem một cách bình tĩnh",
          id: "\"Itu hanya film.\" Menonton dengan tenang"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"결말이 해피엔딩이면 좋겠다.\" 희망을 찾는",
          en: "\"I hope it has a happy ending.\" Looking for hope",
          ja: "「結末がハッピーエンドだったらいいな」希望を探す",
          "zh-CN": "「希望结局是圆满的」寻找希望",
          "zh-TW": "「希望結局是圓滿的」尋找希望",
          vi: "\"Hy vọng kết thúc có hậu.\" Tìm kiếm hy vọng",
          id: "\"Saya harap akhirnya bahagia.\" Mencari harapan"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"저 장면 연출이 좀 별로네.\" 비평가 모드로 본다.",
          en: "\"That scene's direction is not great.\" Watch in critic mode",
          ja: "「あのシーンの演出がちょっと微妙だな」批評家モードで見る",
          "zh-CN": "「那个场景的导演手法不怎么样」以评论家模式观看",
          "zh-TW": "「那個場景的導演手法不怎麼樣」以評論家模式觀看",
          vi: "\"Cảnh đó đạo diễn hơi tệ.\" Xem ở chế độ phê bình",
          id: "\"Arahan adegan itu tidak bagus.\" Menonton dalam mode kritikus"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "누군가 나에게 부당한 대우를 했을 때?",
      en: "When someone treats you unfairly?",
      ja: "誰かがあなたに不当な扱いをした時？",
      "zh-CN": "当有人对你不公平时？",
      "zh-TW": "當有人對你不公平時？",
      vi: "Khi ai đó đối xử bất công với bạn?",
      id: "Ketika seseorang memperlakukan Anda dengan tidak adil?"
    },
    options: [
      {
        text: {
          ko: "그 자리에서 즉시 항의하고 사과를 받아낸다",
          en: "Immediately protest on the spot and demand an apology",
          ja: "その場で即座に抗議して謝罪を受け取る",
          "zh-CN": "当场立即抗议并要求道歉",
          "zh-TW": "當場立即抗議並要求道歉",
          vi: "Ngay lập tức phản đối tại chỗ và yêu cầu xin lỗi",
          id: "Segera memprotes di tempat dan menuntut permintaan maaf"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"내가 뭘 잘못했나?\" 집에서 혼자 곱씹으며 우울해한다",
          en: "\"What did I do wrong?\" Brood alone at home and get depressed",
          ja: "「私が何を間違えたの？」家で一人で思い悩んで憂鬱になる",
          "zh-CN": "「我做错了什么？」独自在家反复思考并变得抑郁",
          "zh-TW": "「我做錯了什麼？」獨自在家反覆思考並變得抑鬱",
          vi: "\"Mình đã làm gì sai?\" Suy nghĩ một mình ở nhà và trở nên chán nản",
          id: "\"Apa yang saya lakukan salah?\" Merenung sendirian di rumah dan menjadi depresi"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "더러워서 피한다. 상종하지 않고 무시한다",
          en: "Avoid them because they're disgusting. Ignore and don't associate",
          ja: "汚いから避ける。付き合わずに無視する",
          "zh-CN": "因为恶心而避开。不交往，直接无视",
          "zh-TW": "因為噁心而避開。不交往，直接無視",
          vi: "Tránh vì họ đáng ghét. Không giao tiếp và bỏ qua",
          id: "Menghindari karena menjijikkan. Mengabaikan dan tidak bergaul"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "상황이 악화될까 봐 일단 참고 넘어간다",
          en: "Endure and let it pass for now, worried the situation might worsen",
          ja: "状況が悪化するかもしれないので、とりあえず我慢してやり過ごす",
          "zh-CN": "担心情况会恶化，暂时忍耐并放过",
          "zh-TW": "擔心情況會惡化，暫時忍耐並放過",
          vi: "Chịu đựng và bỏ qua tạm thời, lo lắng tình huống có thể xấu đi",
          id: "Bertahan dan membiarkannya berlalu untuk sementara, khawatir situasi mungkin memburuk"
        },
        types: ["Type4", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "새로운 맛집에 도전할 때 당신의 선택 기준은?",
      en: "What's your selection criteria when trying a new restaurant?",
      ja: "新しいレストランに挑戦する時、あなたの選択基準は？",
      "zh-CN": "尝试新餐厅时，你的选择标准是？",
      "zh-TW": "嘗試新餐廳時，你的選擇標準是？",
      vi: "Tiêu chí lựa chọn của bạn khi thử nhà hàng mới là gì?",
      id: "Apa kriteria pilihan Anda saat mencoba restoran baru?"
    },
    options: [
      {
        text: {
          ko: "사람들이 줄 서서 먹는 검증된 핫플레이스",
          en: "A verified hot place where people line up",
          ja: "人が並んで食べる検証済みのホットプレイス",
          "zh-CN": "人们排队等候的已验证热门餐厅",
          "zh-TW": "人們排隊等候的已驗證熱門餐廳",
          vi: "Địa điểm nổi tiếng đã được xác minh nơi mọi người xếp hàng",
          id: "Tempat populer yang terverifikasi di mana orang mengantri"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "인테리어가 예쁘고 분위기 좋은 곳",
          en: "A place with pretty interior and good atmosphere",
          ja: "インテリアがきれいで雰囲気の良い場所",
          "zh-CN": "装修漂亮、氛围好的地方",
          "zh-TW": "裝修漂亮、氛圍好的地方",
          vi: "Nơi có nội thất đẹp và không khí tốt",
          id: "Tempat dengan interior cantik dan suasana yang baik"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "위생 등급이 높고 재료가 신선한 곳",
          en: "A place with high hygiene rating and fresh ingredients",
          ja: "衛生等級が高く材料が新鮮な場所",
          "zh-CN": "卫生等级高、食材新鲜的地方",
          "zh-TW": "衛生等級高、食材新鮮的地方",
          vi: "Nơi có xếp hạng vệ sinh cao và nguyên liệu tươi",
          id: "Tempat dengan peringkat kebersihan tinggi dan bahan segar"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "그냥 눈앞에 보이는 아무 식당",
          en: "Just any restaurant I see in front of me",
          ja: "ただ目の前にあるどんなレストランでも",
          "zh-CN": "就是眼前看到的任何餐厅",
          "zh-TW": "就是眼前看到的任何餐廳",
          vi: "Chỉ cần bất kỳ nhà hàng nào tôi thấy trước mặt",
          id: "Hanya restoran apa pun yang saya lihat di depan saya"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신이 생각하는 '행복'이란?",
      en: "What do you think 'happiness' is?",
      ja: "あなたが考える「幸せ」とは？",
      "zh-CN": "你认为'幸福'是什么？",
      "zh-TW": "你認為「幸福」是什麼？",
      vi: "Bạn nghĩ 'hạnh phúc' là gì?",
      id: "Apa yang Anda pikirkan tentang 'kebahagiaan'?"
    },
    options: [
      {
        text: {
          ko: "매일매일 웃을 일이 가득하고 신나는 것",
          en: "Having lots of things to laugh about every day and being excited",
          ja: "毎日毎日笑えることがいっぱいでワクワクすること",
          "zh-CN": "每天都有很多值得笑的事情，充满兴奋",
          "zh-TW": "每天都有很多值得笑的事情，充滿興奮",
          vi: "Có nhiều điều để cười mỗi ngày và cảm thấy phấn khích",
          id: "Memiliki banyak hal untuk ditertawakan setiap hari dan merasa bersemangat"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "아무런 걱정 근심 없이 마음이 평온한 상태",
          en: "A state of peace of mind without any worries or concerns",
          ja: "何の心配もなく心が平穏な状態",
          "zh-CN": "没有任何担忧和烦恼，内心平静的状态",
          "zh-TW": "沒有任何擔憂和煩惱，內心平靜的狀態",
          vi: "Trạng thái bình yên trong tâm trí không có lo lắng hay phiền muộn",
          id: "Keadaan ketenangan pikiran tanpa kekhawatiran atau keprihatinan"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "내가 원하는 것을 성취하고 인정받는 것",
          en: "Achieving what I want and being recognized",
          ja: "自分が望むことを達成し、認められること",
          "zh-CN": "实现我想要的东西并获得认可",
          "zh-TW": "實現我想要的東西並獲得認可",
          vi: "Đạt được điều mình muốn và được công nhận",
          id: "Mencapai apa yang saya inginkan dan diakui"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "사랑하는 사람들과 깊은 감정을 나누는 것",
          en: "Sharing deep emotions with loved ones",
          ja: "愛する人々と深い感情を分かち合うこと",
          "zh-CN": "与所爱的人分享深刻的情感",
          "zh-TW": "與所愛的人分享深刻的情感",
          vi: "Chia sẻ cảm xúc sâu sắc với những người thân yêu",
          id: "Berbagi emosi yang mendalam dengan orang yang dicintai"
        },
        types: ["Type2"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "과거의 나를 떠올리면 어떤 생각이 드나요?",
      en: "What thoughts come to mind when you think of your past self?",
      ja: "過去の自分を思い出すと、どんな考えが浮かびますか？",
      "zh-CN": "当你想起过去的自己时，会有什么想法？",
      "zh-TW": "當你想起過去的自己時，會有什麼想法？",
      vi: "Những suy nghĩ nào xuất hiện khi bạn nghĩ về bản thân trong quá khứ?",
      id: "Pikiran apa yang muncul ketika Anda memikirkan diri Anda di masa lalu?"
    },
    options: [
      {
        text: {
          ko: "\"그때 참 재밌었지.\" 즐거운 추억 위주로 생각난다",
          en: "\"Those were fun times.\" Mostly happy memories come to mind",
          ja: "「あの時は楽しかったな」楽しい思い出が主に思い出される",
          "zh-CN": "「那时候真有趣」主要是快乐的回忆",
          "zh-TW": "「那時候真有趣」主要是快樂的回憶",
          vi: "\"Lúc đó thật vui.\" Chủ yếu là những kỷ niệm vui vẻ",
          id: "\"Waktu itu menyenangkan.\" Sebagian besar kenangan bahagia muncul"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"그때 왜 그랬을까...\" 이불 킥하고 싶은 후회가 밀려온다",
          en: "\"Why did I do that back then...\" Regret that makes me want to kick the blanket floods in",
          ja: "「あの時なぜあんなことをしたんだろう...」布団を蹴りたくなる後悔が押し寄せる",
          "zh-CN": "「那时候为什么要那样做...」想要踢被子的后悔涌上心头",
          "zh-TW": "「那時候為什麼要那樣做...」想要踢被子的後悔湧上心頭",
          vi: "\"Tại sao mình lại làm vậy lúc đó...\" Hối tiếc muốn đá chăn tràn ngập",
          id: "\"Mengapa saya melakukan itu dulu...\" Penyesalan yang membuat ingin menendang selimut membanjiri"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"그때 그 선택이 최선이었을까?\" 끊임없이 되묻는다",
          en: "\"Was that choice the best back then?\" Constantly questioning",
          ja: "「あの時のその選択が最善だったのか？」絶えず問い直す",
          "zh-CN": "「那时候的选择是最好的吗？」不断质疑",
          "zh-TW": "「那時候的選擇是最好的嗎？」不斷質疑",
          vi: "\"Lựa chọn đó có phải là tốt nhất lúc đó không?\" Liên tục tự hỏi",
          id: "\"Apakah pilihan itu yang terbaik saat itu?\" Terus-menerus mempertanyakan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"다 지나간 일이야.\" 별다른 감흥이 없다",
          en: "\"It's all in the past.\" No particular emotion",
          ja: "「すべて過ぎ去ったことだ」特別な感慨がない",
          "zh-CN": "「都是过去的事了」没有什么特别的感受",
          "zh-TW": "「都是過去的事了」沒有什麼特別的感受",
          vi: "\"Tất cả đã qua rồi.\" Không có cảm xúc đặc biệt",
          id: "\"Semuanya sudah berlalu.\" Tidak ada emosi khusus"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "친구가 엉뚱한 사업 아이템을 가져왔을 때?",
      en: "When a friend brings an unexpected business idea?",
      ja: "友達がとんでもないビジネスアイデアを持ってきた時？",
      "zh-CN": "当朋友带来一个意外的商业想法时？",
      "zh-TW": "當朋友帶來一個意外的商業想法時？",
      vi: "Khi bạn bè mang đến một ý tưởng kinh doanh bất ngờ?",
      id: "Ketika teman membawa ide bisnis yang tidak terduga?"
    },
    options: [
      {
        text: {
          ko: "\"재밌겠다! 대박 날 것 같아!\" 긍정적으로 응원한다",
          en: "\"Sounds fun! It'll be a hit!\" Support positively",
          ja: "「楽しそう！大ヒットしそう！」ポジティブに応援する",
          "zh-CN": "「听起来很有趣！会大火的！」积极支持",
          "zh-TW": "「聽起來很有趣！會大火的！」積極支持",
          vi: "\"Nghe thú vị! Sẽ thành công lớn!\" Ủng hộ tích cực",
          id: "\"Kedengarannya menyenangkan! Akan sukses besar!\" Mendukung secara positif"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"이건 이래서 안 되고, 저건 위험해.\" 리스크를 분석한다",
          en: "\"This won't work because of this, and that's risky.\" Analyze the risks",
          ja: "「これはこういう理由でダメで、あれは危険だ」リスクを分析する",
          "zh-CN": "「这个因为这样不行，那个有风险」分析风险",
          "zh-TW": "「這個因為這樣不行，那個有風險」分析風險",
          vi: "\"Cái này không được vì lý do này, cái kia rủi ro.\" Phân tích rủi ro",
          id: "\"Ini tidak akan berhasil karena alasan ini, dan itu berisiko.\" Menganalisis risiko"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"네가 그걸 한다고? 다시 생각해 봐.\" 냉정하게 평가한다",
          en: "\"You're going to do that? Think again.\" Evaluate coldly",
          ja: "「君がそれをやるって？もう一度考えてみて」冷静に評価する",
          "zh-CN": "「你要做那个？再想想吧」冷静地评估",
          "zh-TW": "「你要做那個？再想想吧」冷靜地評估",
          vi: "\"Bạn sẽ làm điều đó? Nghĩ lại đi.\" Đánh giá một cách lạnh lùng",
          id: "\"Kamu akan melakukan itu? Pikir lagi.\" Mengevaluasi dengan dingin"
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "\"하고 싶으면 해봐.\" 별로 관심 없지만 고개는 끄덕인다",
          en: "\"If you want to do it, go ahead.\" Not really interested but nods",
          ja: "「やりたければやってみて」あまり興味はないが頷く",
          "zh-CN": "「想做就做吧」不太感兴趣但点头",
          "zh-TW": "「想做就做吧」不太感興趣但點頭",
          vi: "\"Nếu muốn làm thì cứ làm.\" Không thực sự quan tâm nhưng gật đầu",
          id: "\"Jika ingin melakukannya, silakan.\" Tidak terlalu tertarik tapi mengangguk"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "혼자 있는 시간에 주로 하는 것은?",
      en: "What do you mainly do when you're alone?",
      ja: "一人でいる時間に主にすることは？",
      "zh-CN": "独自一人时主要做什么？",
      "zh-TW": "獨自一人時主要做什麼？",
      vi: "Bạn chủ yếu làm gì khi ở một mình?",
      id: "Apa yang terutama Anda lakukan saat sendirian?"
    },
    options: [
      {
        text: {
          ko: "취미 생활을 즐기거나 신나는 음악을 듣는다",
          en: "Enjoy hobbies or listen to exciting music",
          ja: "趣味を楽しんだり、ワクワクする音楽を聞く",
          "zh-CN": "享受爱好或听兴奋的音乐",
          "zh-TW": "享受愛好或聽興奮的音樂",
          vi: "Tận hưởng sở thích hoặc nghe nhạc sôi động",
          id: "Menikmati hobi atau mendengarkan musik yang menyenangkan"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "센치한 음악을 들으며 감성에 젖는다",
          en: "Listen to sentimental music and immerse in emotions",
          ja: "センチメンタルな音楽を聞きながら感情に浸る",
          "zh-CN": "听感伤的音乐，沉浸在情感中",
          "zh-TW": "聽感傷的音樂，沉浸在情感中",
          vi: "Nghe nhạc đầy cảm xúc và đắm chìm trong cảm xúc",
          id: "Mendengarkan musik sentimental dan tenggelam dalam emosi"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "방 청소를 하거나 밀린 일들을 정리한다",
          en: "Clean the room or organize pending tasks",
          ja: "部屋の掃除をしたり、溜まった仕事を片付ける",
          "zh-CN": "打扫房间或整理积压的工作",
          "zh-TW": "打掃房間或整理積壓的工作",
          vi: "Dọn dẹp phòng hoặc sắp xếp công việc tồn đọng",
          id: "Membersihkan kamar atau mengatur tugas yang tertunda"
        },
        types: ["Type4", "Type5"]
      },
      {
        text: {
          ko: "아무것도 안 하고 가만히 누워 있는다",
          en: "Do nothing and just lie still",
          ja: "何もせずに静かに横になっている",
          "zh-CN": "什么都不做，静静地躺着",
          "zh-TW": "什麼都不做，靜靜地躺著",
          vi: "Không làm gì cả và chỉ nằm yên",
          id: "Tidak melakukan apa-apa dan hanya berbaring diam"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 말버릇에 가장 가까운 것은?",
      en: "What's closest to your speech habit?",
      ja: "あなたの口癖に最も近いものは？",
      "zh-CN": "最接近你口头禅的是什么？",
      "zh-TW": "最接近你口頭禪的是什麼？",
      vi: "Điều gì gần nhất với thói quen nói của bạn?",
      id: "Apa yang paling dekat dengan kebiasaan bicara Anda?"
    },
    options: [
      {
        text: {
          ko: "\"대박!\", \"완전 좋아!\", \"최고다!\"",
          en: "\"Amazing!\", \"I totally love it!\", \"The best!\"",
          ja: "「すごい！」「完全に好き！」「最高だ！」",
          "zh-CN": "「太棒了！」「完全喜欢！」「最棒！」",
          "zh-TW": "「太棒了！」「完全喜歡！」「最棒！」",
          vi: "\"Tuyệt vời!\", \"Hoàn toàn thích!\", \"Tốt nhất!\"",
          id: "\"Luar biasa!\", \"Saya benar-benar suka!\", \"Yang terbaik!\""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"혹시 모르니까...\", \"일단은...\", \"조심해\"",
          en: "\"Just in case...\", \"For now...\", \"Be careful\"",
          ja: "「もしかしたら...」「とりあえず...」「気をつけて」",
          "zh-CN": "「以防万一...」「暂时...」「小心」",
          "zh-TW": "「以防萬一...」「暫時...」「小心」",
          vi: "\"Phòng khi...\", \"Tạm thời...\", \"Cẩn thận\"",
          id: "\"Berjaga-jaga...\", \"Untuk sementara...\", \"Hati-hati\""
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"그건 좀 아닌 듯.\", \"짜증 나.\", \"답답해\"",
          en: "\"That's not quite right.\", \"It's annoying.\", \"Frustrating\"",
          ja: "「それはちょっと違うな」「イライラする」「もどかしい」",
          "zh-CN": "「那不太对」「很烦人」「令人沮丧」",
          "zh-TW": "「那不太對」「很煩人」「令人沮喪」",
          vi: "\"Điều đó không đúng lắm.\", \"Khó chịu.\", \"Bực bội\"",
          id: "\"Itu tidak benar.\", \"Mengganggu.\", \"Frustasi\""
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "\"그럴 수 있지.\", \"상관없어.\", \"몰라\"",
          en: "\"That's possible.\", \"I don't care.\", \"I don't know\"",
          ja: "「そういうこともあるよね」「どうでもいい」「わからない」",
          "zh-CN": "「有可能」「无所谓」「不知道」",
          "zh-TW": "「有可能」「無所謂」「不知道」",
          vi: "\"Có thể như vậy.\", \"Không quan tâm.\", \"Không biết\"",
          id: "\"Mungkin saja.\", \"Tidak peduli.\", \"Tidak tahu\""
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이 테스트의 결과가 어떻게 나왔으면 좋겠나요?",
      en: "How would you like the results of this test to turn out?",
      ja: "このテストの結果がどうなったらいいと思いますか？",
      "zh-CN": "你希望这个测试的结果如何？",
      "zh-TW": "你希望這個測試的結果如何？",
      vi: "Bạn muốn kết quả của bài test này như thế nào?",
      id: "Bagaimana Anda ingin hasil tes ini berubah?"
    },
    options: [
      {
        text: {
          ko: "내 장점이 돋보이는 멋진 결과",
          en: "A great result that highlights my strengths",
          ja: "私の長所が際立つ素晴らしい結果",
          "zh-CN": "突出我优点的出色结果",
          "zh-TW": "突出我優點的出色結果",
          vi: "Kết quả tuyệt vời làm nổi bật điểm mạnh của tôi",
          id: "Hasil yang bagus yang menyoroti kekuatan saya"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "나의 숨겨진 내면을 정확히 꿰뚫는 결과",
          en: "A result that accurately penetrates my hidden inner self",
          ja: "私の隠された内面を正確に突き抜ける結果",
          "zh-CN": "准确洞察我隐藏内心的结果",
          "zh-TW": "準確洞察我隱藏內心的結果",
          vi: "Kết quả chính xác thấu hiểu bản chất ẩn sâu bên trong của tôi",
          id: "Hasil yang secara akurat menembus diri batin tersembunyi saya"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "남들에게 자랑할 수 있는 특별한 결과",
          en: "A special result I can boast about to others",
          ja: "人に自慢できる特別な結果",
          "zh-CN": "可以向别人炫耀的特殊结果",
          "zh-TW": "可以向別人炫耀的特殊結果",
          vi: "Kết quả đặc biệt tôi có thể khoe với người khác",
          id: "Hasil istimewa yang bisa saya banggakan kepada orang lain"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "그냥 심심풀이로 하는 거라 상관없다",
          en: "Just doing it for fun, so I don't care",
          ja: "ただ暇つぶしでやるだけなので気にしない",
          "zh-CN": "只是消遣而已，无所谓",
          "zh-TW": "只是消遣而已，無所謂",
          vi: "Chỉ làm cho vui thôi, nên không quan tâm",
          id: "Hanya melakukan untuk bersenang-senang, jadi tidak peduli"
        },
        types: ["Type6"]
      }
    ]
  }
];

export const phase2CoreEmotionResults: Phase2CoreEmotionResult[] = [
  {
    type: "Type1",
    emoji: "☀️",
    title: {
      ko: "무한 긍정 에너지, 기쁨이 (Joy)",
      en: "Infinite Positive Energy, Joy",
      ja: "無限のポジティブエネルギー、喜び",
      "zh-CN": "无限正能量，快乐",
      "zh-TW": "無限正能量，快樂",
      vi: "Năng Lượng Tích Cực Vô Hạn, Niềm Vui",
      id: "Energi Positif Tak Terbatas, Kegembiraan"
    },
    shortDescription: {
      ko: "\"난 행복해! 세상은 즐거움으로 가득 차 있어!\"",
      en: "\"I'm happy! The world is full of joy!\"",
      ja: "「私は幸せ！世界は喜びで満ちている！」",
      "zh-CN": "「我很幸福！世界充满欢乐！」",
      "zh-TW": "「我很幸福！世界充滿歡樂！」",
      vi: "\"Tôi hạnh phúc! Thế giới tràn ngập niềm vui!\"",
      id: "\"Saya bahagia! Dunia penuh dengan kegembiraan!\""
    },
    description: {
      ko: "당신의 삶을 지배하는 감정은 '기쁨'입니다. 어떤 상황에서도 긍정적인 면을 먼저 보려 노력하고, 주변 사람들에게 해피 바이러스를 전파합니다. 좌절하는 순간이 와도 오뚝이처럼 다시 일어나는 회복 탄력성을 가졌습니다. 당신의 웃음은 세상을 밝히는 힘입니다.",
      en: "The emotion that dominates your life is 'joy'. You try to see the positive side first in any situation and spread the happy virus to those around you. Even when moments of frustration come, you have the resilience to bounce back like a tumbler. Your laughter is the power that brightens the world.",
      ja: "あなたの人生を支配する感情は「喜び」です。どんな状況でもポジティブな面を最初に見ようと努力し、周りの人々にハッピーバイラスを広めます。挫折の瞬間が来ても、不倒翁のように再び立ち上がる回復力を持っています。あなたの笑顔は世界を明るくする力です。",
      "zh-CN": "支配你生活的情绪是'快乐'。你努力在任何情况下都先看到积极的一面，并向周围的人传播快乐病毒。即使遇到挫折的时刻，你也有像不倒翁一样重新站起来的恢复力。你的笑容是照亮世界的力量。",
      "zh-TW": "支配你生活的情緒是「快樂」。你努力在任何情況下都先看到積極的一面，並向周圍的人傳播快樂病毒。即使遇到挫折的時刻，你也有像不倒翁一樣重新站起來的恢復力。你的笑容是照亮世界的力量。",
      vi: "Cảm xúc chi phối cuộc sống của bạn là 'niềm vui'. Bạn cố gắng nhìn thấy mặt tích cực trước trong mọi tình huống và lan tỏa virus hạnh phúc đến những người xung quanh. Ngay cả khi những khoảnh khắc thất vọng đến, bạn có khả năng phục hồi để đứng dậy như một con lật đật. Tiếng cười của bạn là sức mạnh làm sáng thế giới.",
      id: "Emosi yang mendominasi hidup Anda adalah 'kegembiraan'. Anda berusaha melihat sisi positif terlebih dahulu dalam situasi apa pun dan menyebarkan virus bahagia kepada orang di sekitar. Bahkan ketika momen frustrasi datang, Anda memiliki ketahanan untuk bangkit kembali seperti mainan yang tidak bisa dijatuhkan. Tawa Anda adalah kekuatan yang menerangi dunia."
    },
    keywords: {
      ko: "낙천적, 에너지, 희망, 활력",
      en: "Optimistic, Energy, Hope, Vitality",
      ja: "楽観的、エネルギー、希望、活力",
      "zh-CN": "乐观、能量、希望、活力",
      "zh-TW": "樂觀、能量、希望、活力",
      vi: "Lạc quan, Năng lượng, Hy vọng, Sức sống",
      id: "Optimis, Energi, Harapan, Vitalitas"
    },
    caution: {
      ko: "슬픔이나 부정적인 감정을 억지로 외면하지 마세요.",
      en: "Don't forcibly ignore sadness or negative emotions.",
      ja: "悲しみや否定的な感情を無理に無視しないでください。",
      "zh-CN": "不要强行忽视悲伤或负面情绪。",
      "zh-TW": "不要強行忽視悲傷或負面情緒。",
      vi: "Đừng cố gắng bỏ qua nỗi buồn hay cảm xúc tiêu cực.",
      id: "Jangan memaksa mengabaikan kesedihan atau emosi negatif."
    }
  },
  {
    type: "Type2",
    emoji: "💧",
    title: {
      ko: "깊은 감수성, 슬픔이 (Sadness)",
      en: "Deep Sensitivity, Sadness",
      ja: "深い感受性、悲しみ",
      "zh-CN": "深刻的敏感性，悲伤",
      "zh-TW": "深刻的敏感性，悲傷",
      vi: "Sự Nhạy Cảm Sâu Sắc, Nỗi Buồn",
      id: "Sensitivitas Mendalam, Kesedihan"
    },
    shortDescription: {
      ko: "\"네 마음이 얼마나 아플지 난 다 알 것 같아...\"",
      en: "\"I think I know how much your heart hurts...\"",
      ja: "「あなたの心がどれほど痛いか、私はすべて分かっているような気がする...」",
      "zh-CN": "「我想我知道你的心有多痛...」",
      "zh-TW": "「我想我知道你的心有多痛...」",
      vi: "\"Tôi nghĩ tôi biết trái tim bạn đau đớn đến mức nào...\"",
      id: "\"Saya rasa saya tahu betapa sakitnya hati Anda...\""
    },
    description: {
      ko: "당신의 핵심 감정은 '슬픔'입니다. 이것은 우울함이 아닌, 타인의 아픔에 깊이 공감하고 이해하는 능력입니다. 섬세한 감수성 덕분에 사려 깊고 신중하며, 예술적인 영감이 뛰어납니다. 당신은 누군가에게 진정한 위로가 되어주는 힐러입니다.",
      en: "Your core emotion is 'sadness'. This is not depression, but the ability to deeply empathize with and understand others' pain. Thanks to your delicate sensitivity, you are thoughtful and careful, and excel in artistic inspiration. You are a healer who provides true comfort to others.",
      ja: "あなたの核心感情は「悲しみ」です。これは憂鬱ではなく、他人の痛みに深く共感し理解する能力です。繊細な感受性のおかげで、思慮深く慎重で、芸術的なインスピレーションに優れています。あなたは誰かに真の慰めを与えるヒーラーです。",
      "zh-CN": "你的核心情绪是'悲伤'。这不是抑郁，而是深刻共情和理解他人痛苦的能力。由于你细腻的敏感性，你深思熟虑且谨慎，在艺术灵感方面表现出色。你是一个为他人提供真正安慰的治愈者。",
      "zh-TW": "你的核心情緒是「悲傷」。這不是抑鬱，而是深刻共情和理解他人痛苦的能力。由於你細膩的敏感性，你深思熟慮且謹慎，在藝術靈感方面表現出色。你是一個為他人提供真正安慰的治癒者。",
      vi: "Cảm xúc cốt lõi của bạn là 'nỗi buồn'. Đây không phải là trầm cảm, mà là khả năng đồng cảm sâu sắc và hiểu nỗi đau của người khác. Nhờ sự nhạy cảm tinh tế, bạn chu đáo và thận trọng, và xuất sắc trong cảm hứng nghệ thuật. Bạn là người chữa lành mang lại sự an ủi thực sự cho người khác.",
      id: "Emosi inti Anda adalah 'kesedihan'. Ini bukan depresi, tetapi kemampuan untuk berempati secara mendalam dan memahami rasa sakit orang lain. Berkat kepekaan yang halus, Anda bijaksana dan hati-hati, dan unggul dalam inspirasi artistik. Anda adalah penyembuh yang memberikan kenyamanan sejati kepada orang lain."
    },
    keywords: {
      ko: "공감, 감성, 위로, 통찰",
      en: "Empathy, Emotion, Comfort, Insight",
      ja: "共感、感情、慰め、洞察",
      "zh-CN": "共情、情感、安慰、洞察",
      "zh-TW": "共情、情感、安慰、洞察",
      vi: "Đồng cảm, Cảm xúc, An ủi, Sự sáng suốt",
      id: "Empati, Emosi, Kenyamanan, Wawasan"
    },
    caution: {
      ko: "감정의 늪에 너무 깊이 빠지지 않도록 주의하세요.",
      en: "Be careful not to fall too deep into the swamp of emotions.",
      ja: "感情の沼に深く落ち込まないように注意してください。",
      "zh-CN": "注意不要陷入情感沼泽太深。",
      "zh-TW": "注意不要陷入情感沼澤太深。",
      vi: "Hãy cẩn thận đừng rơi quá sâu vào vũng lầy cảm xúc.",
      id: "Hati-hati jangan jatuh terlalu dalam ke rawa emosi."
    }
  },
  {
    type: "Type3",
    emoji: "🔥",
    title: {
      ko: "뜨거운 열정, 버럭이 (Anger)",
      en: "Burning Passion, Anger",
      ja: "燃える情熱、怒り",
      "zh-CN": "燃烧的激情，愤怒",
      "zh-TW": "燃燒的激情，憤怒",
      vi: "Đam Mê Cháy Bỏng, Sự Tức Giận",
      id: "Gairah Membara, Kemarahan"
    },
    shortDescription: {
      ko: "\"틀린 건 못 참아! 정의는 승리한다!\"",
      en: "\"I can't stand what's wrong! Justice will prevail!\"",
      ja: "「間違っていることは我慢できない！正義は勝利する！」",
      "zh-CN": "「无法忍受错误！正义必胜！」",
      "zh-TW": "「無法忍受錯誤！正義必勝！」",
      vi: "\"Không thể chịu đựng điều sai trái! Công lý sẽ thắng!\"",
      id: "\"Saya tidak tahan dengan yang salah! Keadilan akan menang!\""
    },
    description: {
      ko: "당신의 핵심 감정은 '분노'입니다. 이것은 단순한 화가 아니라, 불의를 참지 못하는 정의감과 목표를 향한 열정입니다. 에너지가 넘치고 추진력이 강하며, 답답한 상황을 시원하게 뚫어주는 리더십이 있습니다. 솔직하고 뒤끝 없는 성격의 소유자입니다.",
      en: "Your core emotion is 'anger'. This is not simple rage, but a sense of justice that cannot tolerate injustice and passion toward goals. You have overflowing energy and strong drive, and leadership that cuts through frustrating situations refreshingly. You are someone with an honest and no-holds-barred personality.",
      ja: "あなたの核心感情は「怒り」です。これは単純な怒りではなく、不正を許せない正義感と目標への情熱です。エネルギーが溢れ、推進力が強く、もどかしい状況を爽快に切り開くリーダーシップがあります。率直で後腐れのない性格の持ち主です。",
      "zh-CN": "你的核心情绪是'愤怒'。这不是简单的生气，而是无法容忍不公正的正义感和对目标的热情。你拥有充沛的能量和强大的推动力，以及能够清爽地突破令人沮丧情况的领导力。你是一个诚实且没有后顾之忧的人。",
      "zh-TW": "你的核心情緒是「憤怒」。這不是簡單的生氣，而是無法容忍不公正的正義感和對目標的熱情。你擁有充沛的能量和強大的推動力，以及能夠清爽地突破令人沮喪情況的領導力。你是一個誠實且沒有後顧之憂的人。",
      vi: "Cảm xúc cốt lõi của bạn là 'sự tức giận'. Đây không phải là cơn giận đơn giản, mà là cảm giác công lý không thể chịu đựng bất công và đam mê hướng tới mục tiêu. Bạn có năng lượng dồi dào và động lực mạnh mẽ, và khả năng lãnh đạo cắt xuyên qua những tình huống bực bội một cách sảng khoái. Bạn là người có tính cách trung thực và thẳng thắn.",
      id: "Emosi inti Anda adalah 'kemarahan'. Ini bukan kemarahan sederhana, tetapi rasa keadilan yang tidak dapat mentolerir ketidakadilan dan gairah menuju tujuan. Anda memiliki energi yang meluap dan dorongan yang kuat, serta kepemimpinan yang memotong situasi yang membuat frustrasi dengan menyegarkan. Anda adalah seseorang dengan kepribadian yang jujur dan tanpa ragu-ragu."
    },
    keywords: {
      ko: "열정, 정의감, 추진력, 솔직함",
      en: "Passion, Sense of Justice, Drive, Honesty",
      ja: "情熱、正義感、推進力、率直さ",
      "zh-CN": "激情、正义感、推动力、诚实",
      "zh-TW": "激情、正義感、推動力、誠實",
      vi: "Đam mê, Cảm giác công lý, Động lực, Sự trung thực",
      id: "Gairah, Rasa Keadilan, Dorongan, Kejujuran"
    },
    caution: {
      ko: "욱하는 성질만 조금 다스리면 완벽합니다.",
      en: "You'll be perfect if you just control your hot temper a bit.",
      ja: "短気な性格を少し抑えれば完璧です。",
      "zh-CN": "只要稍微控制一下火爆脾气就完美了。",
      "zh-TW": "只要稍微控制一下火爆脾氣就完美了。",
      vi: "Bạn sẽ hoàn hảo nếu chỉ kiểm soát tính nóng nảy một chút.",
      id: "Anda akan sempurna jika hanya mengendalikan temperamen panas sedikit."
    }
  },
  {
    type: "Type4",
    emoji: "🛡️",
    title: {
      ko: "완벽한 대비, 소심이 (Fear)",
      en: "Perfect Preparation, Fear",
      ja: "完璧な準備、恐れ",
      "zh-CN": "完美准备，恐惧",
      "zh-TW": "完美準備，恐懼",
      vi: "Sự Chuẩn Bị Hoàn Hảo, Nỗi Sợ Hãi",
      id: "Persiapan Sempurna, Ketakutan"
    },
    shortDescription: {
      ko: "\"안전제일! 돌다리도 두드려 보고 건너자.\"",
      en: "\"Safety first! Let's tap the stone bridge before crossing.\"",
      ja: "「安全第一！石橋も叩いてから渡ろう」",
      "zh-CN": "「安全第一！过石桥前也要先敲敲」",
      "zh-TW": "「安全第一！過石橋前也要先敲敲」",
      vi: "\"An toàn là trên hết! Hãy gõ cầu đá trước khi băng qua.\"",
      id: "\"Keamanan pertama! Mari ketuk jembatan batu sebelum menyeberang.\""
    },
    description: {
      ko: "당신의 핵심 감정은 '두려움'입니다. 겁이 많다는 뜻이 아니라, 그만큼 신중하고 꼼꼼하다는 뜻입니다. 미래의 위험을 미리 감지하고 대비하는 능력 덕분에 실수가 거의 없습니다. 당신은 팀에서 위기를 예방하는 든든한 방패 역할을 합니다.",
      en: "Your core emotion is 'fear'. This doesn't mean you're cowardly, but rather that you're cautious and meticulous. Thanks to your ability to detect and prepare for future risks in advance, you rarely make mistakes. You play the role of a solid shield that prevents crises in your team.",
      ja: "あなたの核心感情は「恐れ」です。これは臆病だという意味ではなく、それだけ慎重で几帳面だという意味です。未来の危険を事前に察知し準備する能力のおかげで、失敗がほとんどありません。あなたはチームで危機を防ぐ頼もしい盾の役割を果たします。",
      "zh-CN": "你的核心情绪是'恐惧'。这不是说你胆小，而是说你谨慎和细致。由于你能够提前察觉并为未来的风险做准备，你很少犯错。你在团队中扮演着防止危机的坚实盾牌角色。",
      "zh-TW": "你的核心情緒是「恐懼」。這不是說你膽小，而是說你謹慎和細緻。由於你能夠提前察覺並為未來的風險做準備，你很少犯錯。你在團隊中扮演著防止危機的堅實盾牌角色。",
      vi: "Cảm xúc cốt lõi của bạn là 'nỗi sợ hãi'. Điều này không có nghĩa là bạn nhút nhát, mà là bạn thận trọng và tỉ mỉ. Nhờ khả năng phát hiện và chuẩn bị cho rủi ro tương lai trước, bạn hiếm khi mắc sai lầm. Bạn đóng vai trò là tấm khiên vững chắc ngăn chặn khủng hoảng trong nhóm của mình.",
      id: "Emosi inti Anda adalah 'ketakutan'. Ini tidak berarti Anda pengecut, melainkan Anda berhati-hati dan teliti. Berkat kemampuan Anda untuk mendeteksi dan mempersiapkan risiko masa depan terlebih dahulu, Anda jarang membuat kesalahan. Anda memainkan peran sebagai perisai yang solid yang mencegah krisis dalam tim Anda."
    },
    keywords: {
      ko: "신중함, 꼼꼼함, 계획, 안전",
      en: "Caution, Meticulousness, Planning, Safety",
      ja: "慎重さ、几帳面さ、計画、安全性",
      "zh-CN": "谨慎、细致、计划、安全",
      "zh-TW": "謹慎、細緻、計劃、安全",
      vi: "Thận trọng, Tỉ mỉ, Lập kế hoạch, An toàn",
      id: "Kehati-hatian, Ketelitian, Perencanaan, Keamanan"
    },
    caution: {
      ko: "너무 많은 걱정은 실행력을 낮출 수 있습니다.",
      en: "Too much worry can lower your execution power.",
      ja: "心配しすぎると実行力が低下する可能性があります。",
      "zh-CN": "过多的担忧可能会降低你的执行力。",
      "zh-TW": "過多的擔憂可能會降低你的執行力。",
      vi: "Quá nhiều lo lắng có thể làm giảm khả năng thực thi của bạn.",
      id: "Terlalu banyak kekhawatiran dapat menurunkan kekuatan eksekusi Anda."
    }
  },
  {
    type: "Type5",
    emoji: "🧐",
    title: {
      ko: "섬세한 취향, 까칠이 (Disgust)",
      en: "Delicate Taste, Disgust",
      ja: "繊細な好み、嫌悪",
      "zh-CN": "精致的品味，厌恶",
      "zh-TW": "精緻的品味，厭惡",
      vi: "Sở Thích Tinh Tế, Sự Ghê Tởm",
      id: "Selera Halus, Jijik"
    },
    shortDescription: {
      ko: "\"내 기준에 안 맞으면 용납 못 해. 퀄리티가 중요해.\"",
      en: "\"I can't accept what doesn't meet my standards. Quality matters.\"",
      ja: "「私の基準に合わないものは許容できない。品質が重要だ」",
      "zh-CN": "「不符合我标准的不能接受。质量很重要」",
      "zh-TW": "「不符合我標準的不能接受。質量很重要」",
      vi: "\"Không thể chấp nhận những gì không đáp ứng tiêu chuẩn của tôi. Chất lượng quan trọng.\"",
      id: "\"Saya tidak bisa menerima apa yang tidak memenuhi standar saya. Kualitas penting.\""
    },
    description: {
      ko: "당신의 핵심 감정은 '까다로움'입니다. 호불호가 확실하고 자신만의 높은 기준을 가지고 있습니다. 남들이 보지 못하는 디테일을 캐치하는 능력이 있으며, 위선이나 가식적인 것을 싫어합니다. 세련된 안목과 독자적인 취향을 가진 매력쟁이입니다.",
      en: "Your core emotion is 'fastidiousness'. You have clear likes and dislikes and your own high standards. You have the ability to catch details that others don't see, and you dislike hypocrisy or artificiality. You are a charming person with sophisticated taste and unique preferences.",
      ja: "あなたの核心感情は「気難しい」です。好き嫌いがはっきりしていて、自分だけの高い基準を持っています。他人が見落とす細部をキャッチする能力があり、偽善や作為的なものを嫌います。洗練された目利きと独自の好みを持つ魅力的な人です。",
      "zh-CN": "你的核心情绪是'挑剔'。你有明确的好恶和自己高标准。你有能力捕捉别人看不到的细节，讨厌虚伪或做作。你是一个拥有精致眼光和独特品味的魅力人物。",
      "zh-TW": "你的核心情緒是「挑剔」。你有明確的好惡和自己高標準。你有能力捕捉別人看不到的細節，討厭虛偽或做作。你是一個擁有精緻眼光和獨特品味的魅力人物。",
      vi: "Cảm xúc cốt lõi của bạn là 'sự khó tính'. Bạn có sở thích và không thích rõ ràng và tiêu chuẩn cao của riêng mình. Bạn có khả năng nắm bắt những chi tiết mà người khác không thấy, và bạn ghét sự giả dối hay giả tạo. Bạn là người quyến rũ với thị hiếu tinh tế và sở thích độc đáo.",
      id: "Emosi inti Anda adalah 'kerewelan'. Anda memiliki suka dan tidak suka yang jelas dan standar tinggi Anda sendiri. Anda memiliki kemampuan untuk menangkap detail yang tidak dilihat orang lain, dan Anda tidak menyukai kemunafikan atau kepalsuan. Anda adalah orang yang menawan dengan selera yang canggih dan preferensi unik."
    },
    keywords: {
      ko: "안목, 디테일, 솔직함, 취향",
      en: "Discernment, Detail, Honesty, Taste",
      ja: "目利き、細部、率直さ、好み",
      "zh-CN": "眼光、细节、诚实、品味",
      "zh-TW": "眼光、細節、誠實、品味",
      vi: "Sự sáng suốt, Chi tiết, Sự trung thực, Thị hiếu",
      id: "Kecerdasan, Detail, Kejujuran, Selera"
    },
    caution: {
      ko: "타인의 취향도 존중해 주는 여유를 가져보세요.",
      en: "Try to have the grace to respect others' tastes as well.",
      ja: "他人の好みも尊重する余裕を持ってみてください。",
      "zh-CN": "试着也尊重他人的品味。",
      "zh-TW": "試著也尊重他人的品味。",
      vi: "Hãy thử có sự khoan dung để tôn trọng sở thích của người khác.",
      id: "Cobalah memiliki rahmat untuk menghormati selera orang lain juga."
    }
  },
  {
    type: "Type6",
    emoji: "🍃",
    title: {
      ko: "흔들리지 않는 편안함, 평온이 (Peace)",
      en: "Unshakable Comfort, Peace",
      ja: "揺るがない安らぎ、平和",
      "zh-CN": "不可动摇的舒适，平静",
      "zh-TW": "不可動搖的舒適，平靜",
      vi: "Sự Thoải Mái Không Lay Chuyển, Sự Bình Yên",
      id: "Kenyamanan yang Tak Tergoyahkan, Kedamaian"
    },
    shortDescription: {
      ko: "\"이래도 흥, 저래도 흥. 평화로운 게 최고야.\"",
      en: "\"This way or that way, it's fine. Peaceful is best.\"",
      ja: "「こうでもいいし、ああでもいい。平和なのが最高だ」",
      "zh-CN": "「这样也行，那样也行。平静最好」",
      "zh-TW": "「這樣也行，那樣也行。平靜最好」",
      vi: "\"Cách này cũng được, cách kia cũng được. Bình yên là tốt nhất.\"",
      id: "\"Cara ini atau cara itu, tidak apa-apa. Damai adalah yang terbaik.\""
    },
    description: {
      ko: "당신의 핵심 감정은 '평온'입니다. 감정 기복이 크지 않고, 어떤 상황에서도 침착함을 유지합니다. 욕심을 부리기보다는 현재에 만족하며, 물 흐르는 듯한 삶을 추구합니다. 당신 곁에 있으면 사람들은 마음이 편안해집니다.",
      en: "Your core emotion is 'peace'. Your emotional fluctuations are not large, and you maintain composure in any situation. Rather than being greedy, you are satisfied with the present and pursue a life that flows like water. People feel at ease when they're around you.",
      ja: "あなたの核心感情は「平和」です。感情の起伏が大きくなく、どんな状況でも冷静さを保ちます。欲を張るよりは現在に満足し、水が流れるような人生を追求します。あなたのそばにいると、人々は心が安らぎます。",
      "zh-CN": "你的核心情绪是'平静'。你的情绪波动不大，在任何情况下都保持冷静。与其贪婪，你满足于现在，追求如水般流动的生活。人们在你身边时会感到安心。",
      "zh-TW": "你的核心情緒是「平靜」。你的情緒波動不大，在任何情況下都保持冷靜。與其貪婪，你滿足於現在，追求如水般流動的生活。人們在你身邊時會感到安心。",
      vi: "Cảm xúc cốt lõi của bạn là 'sự bình yên'. Biến động cảm xúc của bạn không lớn, và bạn duy trì sự bình tĩnh trong mọi tình huống. Thay vì tham lam, bạn hài lòng với hiện tại và theo đuổi cuộc sống trôi chảy như nước. Mọi người cảm thấy thoải mái khi ở bên bạn.",
      id: "Emosi inti Anda adalah 'kedamaian'. Fluktuasi emosional Anda tidak besar, dan Anda mempertahankan ketenangan dalam situasi apa pun. Daripada serakah, Anda puas dengan masa kini dan mengejar kehidupan yang mengalir seperti air. Orang merasa nyaman ketika berada di dekat Anda."
    },
    keywords: {
      ko: "안정, 여유, 수용, 무던함",
      en: "Stability, Leisure, Acceptance, Gentleness",
      ja: "安定、余裕、受容、穏やかさ",
      "zh-CN": "稳定、悠闲、接受、温和",
      "zh-TW": "穩定、悠閒、接受、溫和",
      vi: "Ổn định, Nhàn rỗi, Chấp nhận, Sự dịu dàng",
      id: "Stabilitas, Waktu Luang, Penerimaan, Kelembutan"
    },
    caution: {
      ko: "무기력해지지 않도록 가끔은 새로운 자극이 필요합니다.",
      en: "You need new stimulation from time to time to avoid becoming lethargic.",
      ja: "無気力にならないように、時々新しい刺激が必要です。",
      "zh-CN": "为了避免变得无精打采，偶尔需要新的刺激。",
      "zh-TW": "為了避免變得無精打采，偶爾需要新的刺激。",
      vi: "Bạn cần sự kích thích mới thỉnh thoảng để tránh trở nên uể oải.",
      id: "Anda membutuhkan stimulasi baru dari waktu ke waktu untuk menghindari menjadi lesu."
    }
  }
];

// 채점 로직: 각 답변의 types 배열에 포함된 Type들에 +1점씩 부여
// 동점일 경우 우선순위: Type 2 > Type 4 > Type 5 > Type 3 > Type 1 > Type 6
export function calculatePhase2CoreEmotionResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변의 types 배열에 포함된 Type들에 +1점씩 부여
  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  // 가장 높은 점수 찾기
  let maxScore = -1;
  let resultType = "Type2"; // 기본값 (우선순위 최상위)
  
  // 동점일 경우 우선순위: Type 2 > Type 4 > Type 5 > Type 3 > Type 1 > Type 6
  const priority = ["Type2", "Type4", "Type5", "Type3", "Type1", "Type6"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });

  return resultType;
}
