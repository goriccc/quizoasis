export interface Phase2ReincarnationAnimalQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2ReincarnationAnimalResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  personalityKeywords: Record<string, string>; // 성격 키워드
  goodMatch: Record<string, string>; // 잘 맞는 친구
  badMatch: Record<string, string>; // 안 맞는 친구
}

export const phase2ReincarnationAnimalQuestions: Phase2ReincarnationAnimalQuestion[] = [
  {
    id: 1,
    question: {
      ko: "다음 생에 태어날 곳을 고를 수 있다면?",
      en: "If you could choose where to be born in your next life?",
      ja: "次の生で生まれる場所を選べるとしたら？",
      "zh-CN": "如果你可以选择下一世出生的地方？",
      "zh-TW": "如果你可以選擇下一世出生的地方？",
      vi: "Nếu bạn có thể chọn nơi sinh ra ở kiếp sau?",
      id: "Jika Anda bisa memilih tempat lahir di kehidupan berikutnya?"
    },
    options: [
      {
        text: {
          ko: "친구들이 많고 활기찬 넓은 초원이나 바다",
          en: "A vast grassland or sea with many friends and full of energy",
          ja: "友達が多く活気に満ちた広い草原や海",
          "zh-CN": "有很多朋友、充满活力的广阔草原或大海",
          "zh-TW": "有很多朋友、充滿活力的廣闊草原或大海",
          vi: "Đồng cỏ rộng lớn hoặc biển cả với nhiều bạn bè và tràn đầy năng lượng",
          id: "Padang rumput atau laut yang luas dengan banyak teman dan penuh energi"
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "아무도 방해하지 않는 조용하고 평화로운 숲속 동굴",
          en: "A quiet and peaceful cave in the forest where no one disturbs",
          ja: "誰にも邪魔されない静かで平和な森の中の洞窟",
          "zh-CN": "没有人打扰的安静和平的森林洞穴",
          "zh-TW": "沒有人打擾的安靜和平的森林洞穴",
          vi: "Hang động yên tĩnh và thanh bình trong rừng, không ai làm phiền",
          id: "Gua yang tenang dan damai di hutan yang tidak diganggu siapa pun"
        },
        types: ["Type3", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "낯선 무리에 들어갔을 때 당신의 행동은?",
      en: "When you enter a group of strangers, what do you do?",
      ja: "見知らぬ集団に入ったとき、あなたの行動は？",
      "zh-CN": "当你进入陌生群体时，你的行为是？",
      "zh-TW": "當你進入陌生群體時，你的行為是？",
      vi: "Khi bạn bước vào một nhóm người lạ, bạn sẽ làm gì?",
      id: "Ketika Anda memasuki sekelompok orang asing, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "먼저 다가가서 인사를 건네고 분위기를 살핀다",
          en: "Approach first, greet them, and check the atmosphere",
          ja: "まず近づいて挨拶し、雰囲気を探る",
          "zh-CN": "先主动接近打招呼，观察气氛",
          "zh-TW": "先主動接近打招呼，觀察氣氛",
          vi: "Tiến đến trước, chào hỏi và quan sát không khí",
          id: "Mendekati terlebih dahulu, menyapa, dan mengecek suasana"
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "구석에 자리를 잡고 누가 있는지 조용히 관찰한다",
          en: "Take a seat in the corner and quietly observe who's there",
          ja: "隅に席を取り、誰がいるか静かに観察する",
          "zh-CN": "在角落找个位置，安静地观察有谁在",
          "zh-TW": "在角落找個位置，安靜地觀察有誰在",
          vi: "Ngồi ở góc và lặng lẽ quan sát xem có ai ở đó",
          id: "Mengambil tempat di sudut dan diam-diam mengamati siapa yang ada"
        },
        types: ["Type3", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "누군가 내 구역(자존심)을 건드린다면?",
      en: "If someone touches your territory (pride)?",
      ja: "誰かが自分の縄張り（プライド）に触れたら？",
      "zh-CN": "如果有人触碰你的领域（自尊心）？",
      "zh-TW": "如果有人觸碰你的領域（自尊心）？",
      vi: "Nếu ai đó chạm vào lãnh thổ (lòng tự trọng) của bạn?",
      id: "Jika seseorang menyentuh wilayah (harga diri) Anda?"
    },
    options: [
      {
        text: {
          ko: "\"감히?\" 즉시 으르렁거리며 확실하게 경고한다",
          en: "\"How dare you?\" Immediately growl and give a clear warning",
          ja: "「よくも？」すぐに唸り声を上げて明確に警告する",
          "zh-CN": "\"竟敢？\"立即发出低吼并明确警告",
          "zh-TW": "\"竟敢？\"立即發出低吼並明確警告",
          vi: "\"Sao dám?\" Lập tức gầm gừ và cảnh báo rõ ràng",
          id: "\"Berani?\" Segera menggeram dan memberikan peringatan yang jelas"
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "\"똥이 무서워서 피하나.\" 귀찮으니 무시하고 자리를 뜬다",
          en: "\"Afraid of poop, so avoiding.\" Too bothersome, so ignore and leave",
          ja: "「うんちが怖くて避けるのか。」面倒なので無視して席を立つ",
          "zh-CN": "\"怕屎所以躲开。\"太麻烦，所以无视并离开",
          "zh-TW": "\"怕屎所以躲開。\"太麻煩，所以無視並離開",
          vi: "\"Sợ phân nên tránh.\" Quá phiền phức, nên bỏ qua và rời đi",
          id: "\"Takut kotoran, jadi menghindar.\" Terlalu merepotkan, jadi abaikan dan pergi"
        },
        types: ["Type3", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "주말(휴일)을 보내는 가장 이상적인 방법은?",
      en: "What's the most ideal way to spend the weekend (holiday)?",
      ja: "週末（休日）を過ごす最も理想的な方法は？",
      "zh-CN": "度过周末（假日）最理想的方式是？",
      "zh-TW": "度過週末（假日）最理想的方式是？",
      vi: "Cách lý tưởng nhất để trải qua cuối tuần (ngày nghỉ) là gì?",
      id: "Cara paling ideal untuk menghabiskan akhir pekan (libur) adalah?"
    },
    options: [
      {
        text: {
          ko: "여기저기 돌아다니며 새로운 냄새를 맡고 탐험한다",
          en: "Wander around, smell new scents, and explore",
          ja: "あちこち歩き回り、新しい匂いを嗅ぎ、探検する",
          "zh-CN": "到处走走，闻闻新气味，探索",
          "zh-TW": "到處走走，聞聞新氣味，探索",
          vi: "Đi lang thang khắp nơi, ngửi mùi mới và khám phá",
          id: "Berjalan-jalan, mencium aroma baru, dan menjelajah"
        },
        types: ["Type2", "Type4", "Type6"]
      },
      {
        text: {
          ko: "가장 편안한 자세로 늘어지게 뒹굴거리며 쉰다",
          en: "Lounge around lazily in the most comfortable position and rest",
          ja: "最も快適な姿勢でだらりと横になり、のんびりと休む",
          "zh-CN": "以最舒服的姿势懒散地躺着休息",
          "zh-TW": "以最舒服的姿勢懶散地躺著休息",
          vi: "Nằm dài một cách lười biếng ở tư thế thoải mái nhất và nghỉ ngơi",
          id: "Berbaring dengan malas dalam posisi paling nyaman dan beristirahat"
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구가 우울해 보일 때 위로하는 방식은?",
      en: "How do you comfort a friend who seems depressed?",
      ja: "友達が落ち込んでいるとき、どのように慰めますか？",
      "zh-CN": "当朋友看起来沮丧时，你如何安慰？",
      "zh-TW": "當朋友看起來沮喪時，你如何安慰？",
      vi: "Bạn an ủi bạn bè khi họ có vẻ buồn như thế nào?",
      id: "Bagaimana Anda menghibur teman yang terlihat sedih?"
    },
    options: [
      {
        text: {
          ko: "옆에 찰싹 붙어서 재롱을 부리거나 같이 놀자고 조른다",
          en: "Stick close to them, act cute, or urge them to play together",
          ja: "横にぴったりくっついて甘えたり、一緒に遊ぼうとせがむ",
          "zh-CN": "紧紧贴在他们身边，撒娇或催促一起玩",
          "zh-TW": "緊緊貼在他們身邊，撒嬌或催促一起玩",
          vi: "Dính sát bên cạnh, làm nũng hoặc thúc giục chơi cùng",
          id: "Menempel erat di samping mereka, bertingkah lucu, atau mendesak untuk bermain bersama"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "가만히 옆에 앉아 있거나 맛있는 간식을 툭 던져준다",
          en: "Sit quietly beside them or toss them a tasty snack",
          ja: "静かに横に座っているか、美味しいおやつをポンと投げてあげる",
          "zh-CN": "安静地坐在旁边，或者扔给他们好吃的零食",
          "zh-TW": "安靜地坐在旁邊，或者扔給他們好吃的零食",
          vi: "Ngồi yên lặng bên cạnh hoặc ném cho họ một món ăn vặt ngon",
          id: "Duduk diam di samping mereka atau melempar camilan lezat"
        },
        types: ["Type3", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "어려운 미션(사냥)이 주어졌을 때 당신은?",
      en: "When given a difficult mission (hunt), what do you do?",
      ja: "難しいミッション（狩り）を与えられたとき、あなたは？",
      "zh-CN": "当接到困难任务（狩猎）时，你会？",
      "zh-TW": "當接到困難任務（狩獵）時，你會？",
      vi: "Khi được giao nhiệm vụ khó (săn bắn), bạn sẽ làm gì?",
      id: "Ketika diberi misi sulit (berburu), apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "동료들과 협력해서 다 같이 잡는다",
          en: "Cooperate with colleagues and catch it together",
          ja: "仲間と協力してみんなで捕まえる",
          "zh-CN": "与同事合作，大家一起抓住",
          "zh-TW": "與同事合作，大家一起抓住",
          vi: "Hợp tác với đồng nghiệp và cùng nhau bắt",
          id: "Bekerja sama dengan rekan dan menangkapnya bersama-sama"
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "나만의 기술과 전략으로 은밀하게 혼자 잡는다",
          en: "Catch it alone secretly using my own skills and strategy",
          ja: "自分の技術と戦略で密かに一人で捕まえる",
          "zh-CN": "用自己的技术和策略秘密地独自抓住",
          "zh-TW": "用自己的技術和策略秘密地獨自抓住",
          vi: "Bắt một mình bí mật bằng kỹ năng và chiến lược riêng",
          id: "Menangkapnya sendirian secara diam-diam menggunakan keterampilan dan strategi sendiri"
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신이 생각하는 '행복'이란?",
      en: "What do you think 'happiness' is?",
      ja: "あなたが思う「幸せ」とは？",
      "zh-CN": "你认为的'幸福'是什么？",
      "zh-TW": "你認為的「幸福」是什麼？",
      vi: "Bạn nghĩ 'hạnh phúc' là gì?",
      id: "Apa yang Anda pikirkan tentang 'kebahagiaan'?"
    },
    options: [
      {
        text: {
          ko: "모두에게 인정받고 무리의 리더가 되는 것",
          en: "Being recognized by everyone and becoming the leader of the group",
          ja: "みんなに認められ、集団のリーダーになること",
          "zh-CN": "被所有人认可，成为群体的领导者",
          "zh-TW": "被所有人認可，成為群體的領導者",
          vi: "Được mọi người công nhận và trở thành thủ lĩnh của nhóm",
          id: "Diakui oleh semua orang dan menjadi pemimpin kelompok"
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "누구의 간섭도 받지 않고 자유롭게 사는 것",
          en: "Living freely without anyone's interference",
          ja: "誰の干渉も受けずに自由に生きること",
          "zh-CN": "不受任何人干涉，自由地生活",
          "zh-TW": "不受任何人干涉，自由地生活",
          vi: "Sống tự do mà không bị ai can thiệp",
          id: "Hidup bebas tanpa campur tangan siapa pun"
        },
        types: ["Type3", "Type4", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "길을 가다 호기심을 자극하는 무언가를 발견했다!",
      en: "While walking, you discovered something that piques your curiosity!",
      ja: "道を歩いていたら好奇心をそそる何かを発見した！",
      "zh-CN": "走路时发现了激起好奇心的东西！",
      "zh-TW": "走路時發現了激起好奇心的東西！",
      vi: "Khi đang đi, bạn phát hiện thứ gì đó kích thích sự tò mò!",
      id: "Saat berjalan, Anda menemukan sesuatu yang memicu rasa ingin tahu!"
    },
    options: [
      {
        text: {
          ko: "\"이게 뭐지?\" 일단 건드려보고 냄새 맡아본다",
          en: "\"What's this?\" Touch it first and smell it",
          ja: "「これ何？」とりあえず触ってみて匂いを嗅ぐ",
          "zh-CN": "\"这是什么？\"先碰一下，然后闻一闻",
          "zh-TW": "\"這是什麼？\"先碰一下，然後聞一聞",
          vi: "\"Cái gì đây?\" Chạm vào trước và ngửi thử",
          id: "\"Apa ini?\" Sentuh dulu dan cium baunya"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "\"위험할 수도 있어.\" 멀리서 지켜보며 안전한지 확인한다",
          en: "\"It might be dangerous.\" Watch from afar and check if it's safe",
          ja: "「危険かもしれない。」遠くから見守り、安全かどうか確認する",
          "zh-CN": "\"可能很危险。\"从远处观察，确认是否安全",
          "zh-TW": "\"可能很危險。\"從遠處觀察，確認是否安全",
          vi: "\"Có thể nguy hiểm.\" Quan sát từ xa và kiểm tra xem có an toàn không",
          id: "\"Mungkin berbahaya.\" Perhatikan dari jauh dan periksa apakah aman"
        },
        types: ["Type5", "Type6"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "평소 당신의 표정이나 분위기는?",
      en: "What's your usual expression or vibe?",
      ja: "普段のあなたの表情や雰囲気は？",
      "zh-CN": "你平时的表情或氛围是？",
      "zh-TW": "你平時的表情或氛圍是？",
      vi: "Biểu cảm hoặc không khí thường ngày của bạn là gì?",
      id: "Apa ekspresi atau suasana biasa Anda?"
    },
    options: [
      {
        text: {
          ko: "감정이 얼굴에 다 드러나는 투명한 스타일",
          en: "A transparent style where all emotions show on your face",
          ja: "感情が顔にすべて表れる透明なスタイル",
          "zh-CN": "所有情绪都写在脸上的透明风格",
          "zh-TW": "所有情緒都寫在臉上的透明風格",
          vi: "Phong cách trong suốt, mọi cảm xúc đều hiện trên khuôn mặt",
          id: "Gaya transparan di mana semua emosi terlihat di wajah"
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "무슨 생각을 하는지 알 수 없는 포커페이스 스타일",
          en: "A poker face style where no one can tell what you're thinking",
          ja: "何を考えているかわからないポーカーフェーススタイル",
          "zh-CN": "没人能看出你在想什么的扑克脸风格",
          "zh-TW": "沒人能看出你在想什麼的撲克臉風格",
          vi: "Phong cách poker face, không ai biết bạn đang nghĩ gì",
          id: "Gaya poker face di mana tidak ada yang tahu apa yang Anda pikirkan"
        },
        types: ["Type3", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "리더(대장) 역할을 맡아야 한다면?",
      en: "If you have to take on the leader (boss) role?",
      ja: "リーダー（ボス）の役割を担わなければならないなら？",
      "zh-CN": "如果你必须担任领导者（首领）角色？",
      "zh-TW": "如果你必須擔任領導者（首領）角色？",
      vi: "Nếu bạn phải đảm nhận vai trò lãnh đạo (thủ lĩnh)?",
      id: "Jika Anda harus mengambil peran pemimpin (bos)?"
    },
    options: [
      {
        text: {
          ko: "\"나만 믿어!\" 책임감을 가지고 앞장선다",
          en: "\"Just trust me!\" Take the lead with responsibility",
          ja: "「俺を信じろ！」責任感を持って先頭に立つ",
          "zh-CN": "\"相信我！\"带着责任感带头",
          "zh-TW": "\"相信我！\"帶著責任感帶頭",
          vi: "\"Chỉ cần tin tôi!\" Dẫn đầu với trách nhiệm",
          id: "\"Percayalah padaku!\" Memimpin dengan rasa tanggung jawab"
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "\"굳이 내가?\" 귀찮지만 시키면 요령껏 잘 해낸다",
          en: "\"Do I really have to?\" It's bothersome, but if asked, I'll do it skillfully",
          ja: "「わざわざ私が？」面倒だけど言われたら要領よくうまくやる",
          "zh-CN": "\"一定要我吗？\"虽然麻烦，但如果被要求，会巧妙地做好",
          "zh-TW": "\"一定要我嗎？\"雖然麻煩，但如果被要求，會巧妙地做好",
          vi: "\"Tôi thực sự phải làm sao?\" Phiền phức, nhưng nếu được yêu cầu, tôi sẽ làm khéo léo",
          id: "\"Haruskah saya?\" Merepotkan, tapi jika diminta, akan melakukannya dengan terampil"
        },
        types: ["Type3", "Type4", "Type5", "Type6"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "짝사랑하는 상대가 생겼을 때?",
      en: "When you have a crush?",
      ja: "片思いの相手ができたとき？",
      "zh-CN": "当你有了暗恋对象时？",
      "zh-TW": "當你有了暗戀對象時？",
      vi: "Khi bạn có người mình thầm thích?",
      id: "Ketika Anda memiliki gebetan?"
    },
    options: [
      {
        text: {
          ko: "좋으면 꼬리를 흔들며 직진! 적극적으로 표현한다",
          en: "If I like them, wag my tail and go straight! Express actively",
          ja: "好きならしっぽを振って一直線！積極的に表現する",
          "zh-CN": "如果喜欢，就摇尾巴直进！积极表达",
          "zh-TW": "如果喜歡，就搖尾巴直進！積極表達",
          vi: "Nếu thích, vẫy đuôi và tiến thẳng! Bày tỏ tích cực",
          id: "Jika suka, kibaskan ekor dan maju langsung! Ekspresikan secara aktif"
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "밀당의 고수! 상대가 다가오게끔 여우같이 유혹한다",
          en: "A master of push and pull! Seduce them like a fox to make them approach",
          ja: "イチャイチャの達人！相手が近づいてくるように狐のように誘惑する",
          "zh-CN": "推拉高手！像狐狸一样诱惑对方接近",
          "zh-TW": "推拉高手！像狐狸一樣誘惑對方接近",
          vi: "Bậc thầy của trò chơi đẩy kéo! Quyến rũ như cáo để khiến họ đến gần",
          id: "Ahli push and pull! Merayu seperti rubah agar mereka mendekat"
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "다시 태어난다면 어떤 삶을 살고 싶나요?",
      en: "If you were reborn, what kind of life would you want to live?",
      ja: "生まれ変わるなら、どんな人生を送りたいですか？",
      "zh-CN": "如果重生，你想过什么样的生活？",
      "zh-TW": "如果重生，你想過什麼樣的生活？",
      vi: "Nếu được tái sinh, bạn muốn sống cuộc đời như thế nào?",
      id: "Jika terlahir kembali, kehidupan seperti apa yang ingin Anda jalani?"
    },
    options: [
      {
        text: {
          ko: "매일매일이 시트콤처럼 즐겁고 신나는 삶",
          en: "A life that's fun and exciting like a sitcom every day",
          ja: "毎日がシットコムのように楽しくてワクワクする人生",
          "zh-CN": "每天都像情景喜剧一样快乐兴奋的生活",
          "zh-TW": "每天都像情景喜劇一樣快樂興奮的生活",
          vi: "Cuộc sống vui vẻ và thú vị như sitcom mỗi ngày",
          id: "Kehidupan yang menyenangkan dan menggembirakan seperti sitkom setiap hari"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "걱정 근심 없이 배부르고 등 따뜻한 편안한 삶",
          en: "A comfortable life, full and warm, without worries or concerns",
          ja: "心配や悩みがなく、お腹いっぱいで背中が温かい快適な人生",
          "zh-CN": "没有担忧烦恼，吃饱穿暖的舒适生活",
          "zh-TW": "沒有擔憂煩惱，吃飽穿暖的舒適生活",
          vi: "Cuộc sống thoải mái, no đủ và ấm áp, không lo lắng hay phiền muộn",
          id: "Kehidupan yang nyaman, kenyang dan hangat, tanpa kekhawatiran atau kesulitan"
        },
        types: ["Type3", "Type5"]
      }
    ]
  }
];

export const phase2ReincarnationAnimalResults: Phase2ReincarnationAnimalResult[] = [
  {
    type: "Type1",
    emoji: "🦁",
    title: {
      ko: "백수의 왕, 사자",
      en: "King of Beasts, Lion",
      ja: "百獣の王、ライオン",
      "zh-CN": "百兽之王，狮子",
      "zh-TW": "百獸之王，獅子",
      vi: "Vua của muôn thú, Sư tử",
      id: "Raja Binatang, Singa"
    },
    shortDescription: {
      ko: "\"카리스마 폭발, 야망 넘치는 리더\"",
      en: "\"Charisma explosion, ambitious leader\"",
      ja: "「カリスマ爆発、野心あふれるリーダー」",
      "zh-CN": "\"魅力爆发，充满野心的领导者\"",
      "zh-TW": "\"魅力爆發，充滿野心的領導者\"",
      vi: "\"Bùng nổ sức hút, nhà lãnh đạo đầy tham vọng\"",
      id: "\"Ledakan karisma, pemimpin yang ambisius\""
    },
    description: {
      ko: "당신은 어디서나 당당하고 자신감이 넘칩니다. 무리를 이끄는 리더십이 있으며, 자존심이 세서 지는 것을 싫어합니다. 겉으로는 강해 보이지만 내 사람에게는 책임감이 강하고 든든한 보스 기질을 타고났습니다. 다음 생에는 초원을 호령하는 왕이 될 운명입니다.",
      en: "You are confident and bold everywhere. You have leadership to lead the group, and you hate losing because of your strong pride. You may look strong on the outside, but you have a strong sense of responsibility and a reliable boss temperament toward your people. In your next life, you are destined to become a king who commands the grasslands.",
      ja: "あなたはどこでも堂々としていて自信に満ちています。群れを導くリーダーシップがあり、プライドが強いため負けることを嫌います。外見は強そうに見えますが、内側の人々には責任感が強く、頼りになるボス気質を持っています。次の生では草原を支配する王になる運命です。",
      "zh-CN": "你无论在哪里都自信满满。你有领导群体的领导力，自尊心强，讨厌失败。虽然外表看起来很强大，但对内你有强烈的责任感和可靠的老板气质。下一世，你注定成为统治草原的王者。",
      "zh-TW": "你無論在哪裡都自信滿滿。你有領導群體的領導力，自尊心強，討厭失敗。雖然外表看起來很強大，但對內你有強烈的責任感和可靠的老闆氣質。下一世，你註定成為統治草原的王者。",
      vi: "Bạn tự tin và dũng cảm ở mọi nơi. Bạn có khả năng lãnh đạo để dẫn dắt nhóm, và bạn ghét thua vì lòng tự trọng mạnh mẽ. Bạn có thể trông mạnh mẽ bên ngoài, nhưng bạn có ý thức trách nhiệm mạnh mẽ và tính cách lãnh đạo đáng tin cậy đối với người của mình. Ở kiếp sau, bạn được định mệnh trở thành vua thống trị đồng cỏ.",
      id: "Anda percaya diri dan berani di mana pun. Anda memiliki kepemimpinan untuk memimpin kelompok, dan Anda benci kalah karena harga diri yang kuat. Anda mungkin terlihat kuat di luar, tetapi Anda memiliki rasa tanggung jawab yang kuat dan temperamen bos yang dapat diandalkan terhadap orang-orang Anda. Di kehidupan berikutnya, Anda ditakdirkan menjadi raja yang memerintah padang rumput."
    },
    personalityKeywords: {
      ko: "리더십, 자신감, 열정, 의리",
      en: "Leadership, Confidence, Passion, Loyalty",
      ja: "リーダーシップ、自信、情熱、義理",
      "zh-CN": "领导力、自信、热情、义气",
      "zh-TW": "領導力、自信、熱情、義氣",
      vi: "Lãnh đạo, Tự tin, Đam mê, Trung thành",
      id: "Kepemimpinan, Kepercayaan Diri, Gairah, Kesetiaan"
    },
    goodMatch: {
      ko: "골든 리트리버",
      en: "Golden Retriever",
      ja: "ゴールデンレトリバー",
      "zh-CN": "金毛寻回犬",
      "zh-TW": "黃金獵犬",
      vi: "Golden Retriever",
      id: "Golden Retriever"
    },
    badMatch: {
      ko: "고양이",
      en: "Cat",
      ja: "猫",
      "zh-CN": "猫",
      "zh-TW": "貓",
      vi: "Mèo",
      id: "Kucing"
    }
  },
  {
    type: "Type2",
    emoji: "🐶",
    title: {
      ko: "인간 비타민, 골든 리트리버",
      en: "Human Vitamin, Golden Retriever",
      ja: "人間ビタミン、ゴールデンレトリバー",
      "zh-CN": "人类维生素，金毛寻回犬",
      "zh-TW": "人類維生素，黃金獵犬",
      vi: "Vitamin của con người, Golden Retriever",
      id: "Vitamin Manusia, Golden Retriever"
    },
    shortDescription: {
      ko: "\"사람이 너무 좋아! 사랑둥이 인싸\"",
      en: "\"I love people so much! Beloved social butterfly\"",
      ja: "「人が大好き！愛されキャラのインサイダー」",
      "zh-CN": "\"太喜欢人了！被爱的社交达人\"",
      "zh-TW": "\"太喜歡人了！被愛的社交達人\"",
      vi: "\"Yêu người quá nhiều! Người được yêu thích, hướng ngoại\"",
      id: "\"Sangat suka orang! Sosok yang dicintai dan populer\""
    },
    description: {
      ko: "당신은 친화력 만렙의 평화주의자입니다. 꼬리를 살랑이며 누구에게나 먼저 다가가고, 주변을 밝게 만드는 에너지가 있습니다. 혼자 있는 것보다는 함께 노는 것을 좋아하며, 사랑받고 칭찬받을 때 가장 행복해합니다.",
      en: "You are a pacifist with maxed-out friendliness. You wag your tail and approach everyone first, and you have energy that brightens your surroundings. You prefer playing together rather than being alone, and you are happiest when loved and praised.",
      ja: "あなたは親和力がマックスレベルの平和主義者です。しっぽを振って誰にでも最初に近づき、周囲を明るくするエネルギーを持っています。一人でいるよりも一緒に遊ぶことを好み、愛され、褒められるときが最も幸せです。",
      "zh-CN": "你是一个亲和力满级的和平主义者。你摇着尾巴主动接近每个人，拥有让周围变得明亮的能量。比起独自一人，你更喜欢一起玩耍，在被爱和被赞美时最快乐。",
      "zh-TW": "你是一個親和力滿級的和平主義者。你搖著尾巴主動接近每個人，擁有讓周圍變得明亮的能量。比起獨自一人，你更喜歡一起玩耍，在被愛和被讚美時最快樂。",
      vi: "Bạn là người theo chủ nghĩa hòa bình với sự thân thiện ở mức tối đa. Bạn vẫy đuôi và tiếp cận mọi người trước, và bạn có năng lượng làm sáng môi trường xung quanh. Bạn thích chơi cùng nhau hơn là ở một mình, và bạn hạnh phúc nhất khi được yêu thương và khen ngợi.",
      id: "Anda adalah seorang pasifis dengan keramahan yang maksimal. Anda mengibaskan ekor dan mendekati semua orang terlebih dahulu, dan Anda memiliki energi yang mencerahkan lingkungan sekitar. Anda lebih suka bermain bersama daripada sendirian, dan Anda paling bahagia ketika dicintai dan dipuji."
    },
    personalityKeywords: {
      ko: "친화력, 긍정, 충성심, 활발함",
      en: "Friendliness, Positivity, Loyalty, Activeness",
      ja: "親和力、ポジティブ、忠誠心、活発さ",
      "zh-CN": "亲和力、积极、忠诚、活跃",
      "zh-TW": "親和力、積極、忠誠、活躍",
      vi: "Thân thiện, Tích cực, Trung thành, Năng động",
      id: "Keramahan, Positivitas, Kesetiaan, Keaktifan"
    },
    goodMatch: {
      ko: "사자",
      en: "Lion",
      ja: "ライオン",
      "zh-CN": "狮子",
      "zh-TW": "獅子",
      vi: "Sư tử",
      id: "Singa"
    },
    badMatch: {
      ko: "여우",
      en: "Fox",
      ja: "狐",
      "zh-CN": "狐狸",
      "zh-TW": "狐狸",
      vi: "Cáo",
      id: "Rubah"
    }
  },
  {
    type: "Type3",
    emoji: "🐱",
    title: {
      ko: "도도한 매력, 고양이",
      en: "Proud Charm, Cat",
      ja: "ドレッシーな魅力、猫",
      "zh-CN": "高傲的魅力，猫",
      "zh-TW": "高傲的魅力，貓",
      vi: "Sức hút kiêu kỳ, Mèo",
      id: "Pesona Anggun, Kucing"
    },
    shortDescription: {
      ko: "\"건드리지 마, 혼자만의 시간이 소중해\"",
      en: "\"Don't touch me, my alone time is precious\"",
      ja: "「触らないで、一人の時間が大切」",
      "zh-CN": "\"别碰我，独处的时间很珍贵\"",
      "zh-TW": "\"別碰我，獨處的時間很珍貴\"",
      vi: "\"Đừng chạm vào, thời gian một mình của tôi rất quý giá\"",
      id: "\"Jangan sentuh, waktu sendiri saya sangat berharga\""
    },
    description: {
      ko: "당신은 독립심이 강하고 자기주관이 뚜렷합니다. 남들의 시선보다는 나의 기분이 가장 중요하며, '츤데레' 같은 매력이 있습니다. 귀찮은 것은 딱 질색이지만, 한번 마음을 연 상대에게는 은근히 집착하는 반전 매력을 보여줍니다.",
      en: "You have strong independence and clear self-opinion. Your mood is more important than others' gaze, and you have a charm like 'tsundere'. You absolutely hate bothersome things, but you show a reverse charm of subtly obsessing over someone once you open your heart to them.",
      ja: "あなたは独立心が強く、自己主張がはっきりしています。他人の視線よりも自分の気分が最も重要で、「ツンデレ」のような魅力があります。面倒なことは大嫌いですが、一度心を開いた相手には控えめに執着する逆の魅力を見せます。",
      "zh-CN": "你有强烈的独立心和明确的主见。比起别人的眼光，你的心情最重要，你有像'傲娇'一样的魅力。你非常讨厌麻烦的事情，但一旦对某人敞开心扉，你会展现出暗中依恋的反转魅力。",
      "zh-TW": "你有強烈的獨立心和明確的主見。比起別人的眼光，你的心情最重要，你有像「傲嬌」一樣的魅力。你非常討厭麻煩的事情，但一旦對某人敞開心扉，你會展現出暗中依戀的反轉魅力。",
      vi: "Bạn có tính độc lập mạnh mẽ và ý kiến cá nhân rõ ràng. Tâm trạng của bạn quan trọng hơn ánh mắt của người khác, và bạn có sức hút như 'tsundere'. Bạn hoàn toàn ghét những thứ phiền phức, nhưng bạn thể hiện sức hút ngược lại là ám ảnh tinh tế với ai đó một khi bạn mở lòng với họ.",
      id: "Anda memiliki kemandirian yang kuat dan pendapat pribadi yang jelas. Suasana hati Anda lebih penting daripada pandangan orang lain, dan Anda memiliki pesona seperti 'tsundere'. Anda benar-benar membenci hal-hal yang merepotkan, tetapi Anda menunjukkan pesona terbalik dengan terobsesi secara halus pada seseorang setelah Anda membuka hati kepada mereka."
    },
    personalityKeywords: {
      ko: "독립심, 시크함, 섬세함, 마이웨이",
      en: "Independence, Chic, Delicacy, My Way",
      ja: "独立心、シック、繊細さ、マイウェイ",
      "zh-CN": "独立、时尚、细腻、我行我素",
      "zh-TW": "獨立、時尚、細膩、我行我素",
      vi: "Độc lập, Thời thượng, Tinh tế, Cách của tôi",
      id: "Kemandirian, Gaya, Kehalusan, Cara Saya"
    },
    goodMatch: {
      ko: "나무늘보(판다)",
      en: "Sloth (Panda)",
      ja: "ナマケモノ（パンダ）",
      "zh-CN": "树懒（熊猫）",
      "zh-TW": "樹懶（熊貓）",
      vi: "Lười (Gấu trúc)",
      id: "Kemalasan (Panda)"
    },
    badMatch: {
      ko: "사자",
      en: "Lion",
      ja: "ライオン",
      "zh-CN": "狮子",
      "zh-TW": "獅子",
      vi: "Sư tử",
      id: "Singa"
    }
  },
  {
    type: "Type4",
    emoji: "🐬",
    title: {
      ko: "자유로운 영혼, 돌고래",
      en: "Free Spirit, Dolphin",
      ja: "自由な魂、イルカ",
      "zh-CN": "自由的灵魂，海豚",
      "zh-TW": "自由的靈魂，海豚",
      vi: "Linh hồn tự do, Cá heo",
      id: "Jiwa Bebas, Lumba-lumba"
    },
    shortDescription: {
      ko: "\"호기심 천국, 유쾌한 장난꾸러기\"",
      en: "\"Curiosity paradise, cheerful prankster\"",
      ja: "「好奇心天国、愉快ないたずらっ子」",
      "zh-CN": "\"好奇心天堂，愉快的捣蛋鬼\"",
      "zh-TW": "\"好奇心天堂，愉快的搗蛋鬼\"",
      vi: "\"Thiên đường tò mò, kẻ nghịch ngợm vui vẻ\"",
      id: "\"Surga keingintahuan, penggemar lelucon yang ceria\""
    },
    description: {
      ko: "당신은 머리가 좋고 노는 것을 좋아하는 자유인입니다. 얽매이는 것을 싫어하고 넓은 세상을 탐험하고 싶어 합니다. 긍정적이고 유머 감각이 뛰어나 주변에 늘 친구가 많지만, 구속하려 들면 미꾸라지처럼 빠져나갑니다.",
      en: "You are a free-spirited person who is smart and loves to play. You hate being tied down and want to explore the wide world. You are positive and have excellent humor, so you always have many friends around, but if someone tries to restrain you, you slip away like a loach.",
      ja: "あなたは頭が良く、遊ぶことが好きな自由人です。束縛されることを嫌い、広い世界を探検したいと思っています。ポジティブでユーモアセンスが優れているため、周りには常に多くの友達がいますが、束縛しようとするとドジョウのようにすり抜けます。",
      "zh-CN": "你是一个聪明且喜欢玩耍的自由人。你讨厌被束缚，想要探索广阔的世界。你积极乐观，幽默感出色，所以身边总是有很多朋友，但如果有人试图约束你，你会像泥鳅一样溜走。",
      "zh-TW": "你是一個聰明且喜歡玩耍的自由人。你討厭被束縛，想要探索廣闊的世界。你積極樂觀，幽默感出色，所以身邊總是有很多朋友，但如果有人試圖約束你，你會像泥鰍一樣溜走。",
      vi: "Bạn là người tự do thông minh và thích chơi đùa. Bạn ghét bị ràng buộc và muốn khám phá thế giới rộng lớn. Bạn tích cực và có khiếu hài hước xuất sắc, nên bạn luôn có nhiều bạn bè xung quanh, nhưng nếu ai đó cố gắng kiềm chế bạn, bạn sẽ trượt đi như một con cá chạch.",
      id: "Anda adalah orang bebas yang cerdas dan suka bermain. Anda benci dibelenggu dan ingin menjelajahi dunia yang luas. Anda positif dan memiliki selera humor yang luar biasa, jadi Anda selalu memiliki banyak teman di sekitar, tetapi jika seseorang mencoba mengekang Anda, Anda akan meloloskan diri seperti ikan loach."
    },
    personalityKeywords: {
      ko: "자유, 지능, 유머, 호기심",
      en: "Freedom, Intelligence, Humor, Curiosity",
      ja: "自由、知性、ユーモア、好奇心",
      "zh-CN": "自由、智慧、幽默、好奇心",
      "zh-TW": "自由、智慧、幽默、好奇心",
      vi: "Tự do, Thông minh, Hài hước, Tò mò",
      id: "Kebebasan, Kecerdasan, Humor, Rasa Ingin Tahu"
    },
    goodMatch: {
      ko: "여우",
      en: "Fox",
      ja: "狐",
      "zh-CN": "狐狸",
      "zh-TW": "狐狸",
      vi: "Cáo",
      id: "Rubah"
    },
    badMatch: {
      ko: "나무늘보(판다)",
      en: "Sloth (Panda)",
      ja: "ナマケモノ（パンダ）",
      "zh-CN": "树懒（熊猫）",
      "zh-TW": "樹懶（熊貓）",
      vi: "Lười (Gấu trúc)",
      id: "Kemalasan (Panda)"
    }
  },
  {
    type: "Type5",
    emoji: "🐼",
    title: {
      ko: "눕는 게 제일 좋아, 판다",
      en: "Lying Down is Best, Panda",
      ja: "横になるのが一番好き、パンダ",
      "zh-CN": "最喜欢躺着，熊猫",
      "zh-TW": "最喜歡躺著，熊貓",
      vi: "Nằm là tốt nhất, Gấu trúc",
      id: "Berbaring adalah yang Terbaik, Panda"
    },
    shortDescription: {
      ko: "\"느긋함의 미학, 평화로운 힐링 요정\"",
      en: "\"Aesthetics of leisure, peaceful healing fairy\"",
      ja: "「のんびりの美学、平和なヒーリング妖精」",
      "zh-CN": "\"悠闲的美学，平和的治愈精灵\"",
      "zh-TW": "\"悠閒的美學，平和的治癒精靈\"",
      vi: "\"Thẩm mỹ của sự nhàn nhã, tiên nữ chữa lành thanh bình\"",
      id: "\"Estetika santai, peri penyembuhan yang damai\""
    },
    description: {
      ko: "당신에게 최고의 행복은 맛있는 거 먹고 푹 자는 것입니다. 경쟁이나 싸움을 싫어하며, \"좋은 게 좋은 거지\"라는 마인드를 가졌습니다. 둥글둥글한 성격 덕분에 적이 없으며, 보고만 있어도 힐링이 되는 귀여운 매력의 소유자입니다.",
      en: "Your greatest happiness is eating delicious food and sleeping soundly. You hate competition or fighting, and you have a mindset of \"what's good is good.\" Thanks to your round personality, you have no enemies, and you are the owner of a cute charm that heals just by looking at you.",
      ja: "あなたにとって最高の幸せは、美味しいものを食べてぐっすり眠ることです。競争や争いを嫌い、「良いことは良いことだ」という考えを持っています。丸い性格のおかげで敵がおらず、見ているだけで癒される可愛い魅力の持ち主です。",
      "zh-CN": "对你来说，最大的幸福就是吃美味的食物和好好睡觉。你讨厌竞争或打架，有着\"好的就是好的\"的心态。由于你圆润的性格，你没有敌人，你是那种只看一眼就能治愈的可爱魅力的拥有者。",
      "zh-TW": "對你來說，最大的幸福就是吃美味的食物和好好睡覺。你討厭競爭或打架，有著「好的就是好的」的心態。由於你圓潤的性格，你沒有敵人，你是那種只看一眼就能治癒的可愛魅力的擁有者。",
      vi: "Hạnh phúc lớn nhất của bạn là ăn đồ ngon và ngủ ngon. Bạn ghét cạnh tranh hoặc đánh nhau, và bạn có tư duy \"cái gì tốt thì tốt.\" Nhờ tính cách tròn trịa, bạn không có kẻ thù, và bạn là chủ sở hữu của sức hút dễ thương khiến người ta được chữa lành chỉ bằng cách nhìn vào bạn.",
      id: "Kebahagiaan terbesar Anda adalah makan makanan lezat dan tidur nyenyak. Anda benci persaingan atau pertengkaran, dan Anda memiliki pola pikir \"yang baik adalah baik.\" Berkat kepribadian yang bulat, Anda tidak memiliki musuh, dan Anda adalah pemilik pesona lucu yang menyembuhkan hanya dengan melihat Anda."
    },
    personalityKeywords: {
      ko: "평화, 여유, 귀차니즘, 낙천적",
      en: "Peace, Leisure, Laziness, Optimism",
      ja: "平和、余裕、面倒くさがり、楽観的",
      "zh-CN": "和平、悠闲、懒惰、乐观",
      "zh-TW": "和平、悠閒、懶惰、樂觀",
      vi: "Hòa bình, Nhàn nhã, Lười biếng, Lạc quan",
      id: "Kedamaian, Santai, Kemalasan, Optimisme"
    },
    goodMatch: {
      ko: "고양이",
      en: "Cat",
      ja: "猫",
      "zh-CN": "猫",
      "zh-TW": "貓",
      vi: "Mèo",
      id: "Kucing"
    },
    badMatch: {
      ko: "돌고래",
      en: "Dolphin",
      ja: "イルカ",
      "zh-CN": "海豚",
      "zh-TW": "海豚",
      vi: "Cá heo",
      id: "Lumba-lumba"
    }
  },
  {
    type: "Type6",
    emoji: "🦊",
    title: {
      ko: "눈치 100단, 여우",
      en: "Level 100 Awareness, Fox",
      ja: "空気読み100段、狐",
      "zh-CN": "眼力100级，狐狸",
      "zh-TW": "眼力100級，狐狸",
      vi: "Nhận thức cấp 100, Cáo",
      id: "Kesadaran Level 100, Rubah"
    },
    shortDescription: {
      ko: "\"상황 파악 완료, 스마트한 전략가\"",
      en: "\"Situation understood, smart strategist\"",
      ja: "「状況把握完了、スマートな戦略家」",
      "zh-CN": "\"情况已掌握，聪明的战略家\"",
      "zh-TW": "\"情況已掌握，聰明的戰略家\"",
      vi: "\"Đã nắm bắt tình huống, nhà chiến lược thông minh\"",
      id: "\"Situasi dipahami, strategis yang cerdas\""
    },
    description: {
      ko: "당신은 눈치가 빠르고 센스가 넘치는 현실주의자입니다. 자신이 어떻게 해야 이득을 보는지 본능적으로 알고 있으며, 처세술에 능합니다. 매력적인 화술로 사람을 홀릴 줄 알며, 어떤 환경에서도 살아남는 적응력을 가졌습니다.",
      en: "You are a realist with quick awareness and overflowing sense. You instinctively know how to benefit yourself and are skilled in social tactics. You know how to charm people with attractive speech, and you have adaptability to survive in any environment.",
      ja: "あなたは空気を読むのが早く、センスが溢れる現実主義者です。自分がどうすれば利益を得られるかを本能的に知っており、処世術に長けています。魅力的な話術で人を魅了する方法を知っており、どんな環境でも生き残る適応力を持っています。",
      "zh-CN": "你是一个眼力快、充满智慧的现实主义者。你本能地知道如何让自己受益，擅长处世之道。你知道如何用有魅力的口才吸引人，并且拥有在任何环境中都能生存的适应力。",
      "zh-TW": "你是一個眼力快、充滿智慧的現實主義者。你本能地知道如何讓自己受益，擅長處世之道。你知道如何用有魅力的口才吸引人，並且擁有在任何環境中都能生存的適應力。",
      vi: "Bạn là người theo chủ nghĩa hiện thực với nhận thức nhanh và tràn đầy cảm nhận. Bạn biết một cách bản năng cách để có lợi cho bản thân và giỏi về chiến thuật xã hội. Bạn biết cách quyến rũ mọi người bằng lời nói hấp dẫn, và bạn có khả năng thích ứng để tồn tại trong bất kỳ môi trường nào.",
      id: "Anda adalah seorang realis dengan kesadaran cepat dan rasa yang meluap. Anda secara naluriah tahu bagaimana menguntungkan diri sendiri dan terampil dalam taktik sosial. Anda tahu cara mempesona orang dengan pidato yang menarik, dan Anda memiliki kemampuan adaptasi untuk bertahan di lingkungan apa pun."
    },
    personalityKeywords: {
      ko: "센스, 눈치, 지혜, 매력",
      en: "Sense, Awareness, Wisdom, Charm",
      ja: "センス、空気読み、知恵、魅力",
      "zh-CN": "感觉、眼力、智慧、魅力",
      "zh-TW": "感覺、眼力、智慧、魅力",
      vi: "Cảm nhận, Nhận thức, Trí tuệ, Sức hút",
      id: "Rasa, Kesadaran, Kebijaksanaan, Pesona"
    },
    goodMatch: {
      ko: "돌고래",
      en: "Dolphin",
      ja: "イルカ",
      "zh-CN": "海豚",
      "zh-TW": "海豚",
      vi: "Cá heo",
      id: "Lumba-lumba"
    },
    badMatch: {
      ko: "골든 리트리버",
      en: "Golden Retriever",
      ja: "ゴールデンレトリバー",
      "zh-CN": "金毛寻回犬",
      "zh-TW": "黃金獵犬",
      vi: "Golden Retriever",
      id: "Golden Retriever"
    }
  }
];

export function calculatePhase2ReincarnationAnimalResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type2"; // Default value (highest priority)
  const priority = ["Type2", "Type3", "Type5", "Type6", "Type1", "Type4"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
