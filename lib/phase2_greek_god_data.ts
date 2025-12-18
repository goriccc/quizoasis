export interface Phase2GreekGodQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2GreekGodResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  symbols: Record<string, string>; // 상징
  traits: Record<string, string>; // 주요 성격
  recommendedItems: Record<string, string>; // 추천 아이템
}

export const phase2GreekGodQuestions: Phase2GreekGodQuestion[] = [
  {
    id: 1,
    question: {
      ko: "당신이 그룹 프로젝트의 조장이 된다면?",
      en: "If you become the leader of a group project?",
      ja: "あなたがグループプロジェクトのリーダーになったら？",
      "zh-CN": "如果你成为小组项目的组长？",
      "zh-TW": "如果你成為小組項目的組長？",
      vi: "Nếu bạn trở thành trưởng nhóm của dự án nhóm?",
      id: "Jika Anda menjadi pemimpin proyek kelompok?"
    },
    options: [
      {
        text: {
          ko: "\"나만 믿고 따라와.\" 카리스마 있게 역할을 분담하고 지시한다",
          en: "\"Just trust me and follow.\" Charismatically assigns roles and gives instructions",
          ja: "「私を信じてついて来て。」カリスマ的に役割を分担して指示する",
          "zh-CN": "\"相信我，跟着我。\" 有魅力地分配角色并下达指示",
          "zh-TW": "\"相信我，跟著我。\" 有魅力地分配角色並下達指示",
          vi: "\"Chỉ cần tin tôi và làm theo.\" Phân chia vai trò một cách có sức hút và đưa ra chỉ thị",
          id: "\"Percayalah padaku dan ikuti.\" Membagi peran dengan karismatik dan memberikan instruksi"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"우리 같이 잘해보자.\" 팀원들의 의견을 듣고 조율한다",
          en: "\"Let's do well together.\" Listens to team members' opinions and coordinates",
          ja: "「一緒に頑張ろう。」チームメンバーの意見を聞いて調整する",
          "zh-CN": "\"让我们一起做好。\" 听取团队成员的意见并协调",
          "zh-TW": "\"讓我們一起做好。\" 聽取團隊成員的意見並協調",
          vi: "\"Hãy cùng làm tốt nhé.\" Lắng nghe ý kiến của các thành viên và điều phối",
          id: "\"Mari kita lakukan dengan baik bersama.\" Mendengarkan pendapat anggota tim dan mengoordinasikan"
        },
        types: ["Type2", "Type3", "Type5"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "누군가 당신의 자존심을 건드렸을 때 반응은?",
      en: "When someone touches your pride, what's your reaction?",
      ja: "誰かがあなたのプライドに触れた時、反応は？",
      "zh-CN": "当有人触碰到你的自尊心时，你的反应是什么？",
      "zh-TW": "當有人觸碰到你的自尊心時，你的反應是什麼？",
      vi: "Khi ai đó chạm vào lòng tự trọng của bạn, phản ứng của bạn là gì?",
      id: "Ketika seseorang menyentuh harga diri Anda, apa reaksi Anda?"
    },
    options: [
      {
        text: {
          ko: "\"감히 나를?\" 겉으로는 참아도 속으론 복수의 칼을 간다",
          en: "\"How dare you?\" Outwardly endures but inwardly sharpens the blade of revenge",
          ja: "「よくも私を？」表では我慢しても心の中では復讐の刃を研ぐ",
          "zh-CN": "\"竟敢这样对我？\" 表面忍耐但内心磨着复仇的刀",
          "zh-TW": "\"竟敢這樣對我？\" 表面忍耐但內心磨著復仇的刀",
          vi: "\"Sao dám làm vậy với tôi?\" Bề ngoài chịu đựng nhưng trong lòng mài lưỡi dao trả thù",
          id: "\"Berani sekali?\" Secara lahiriah menahan diri tetapi di dalam hati mengasah pisau balas dendam"
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "\"뭐 그럴 수도 있지.\" 쿨하게 무시하거나 웃어넘긴다",
          en: "\"Well, that could happen.\" Coolly ignores or laughs it off",
          ja: "「まあ、そういうこともあるよね。」クールに無視するか笑って流す",
          "zh-CN": "\"嗯，可能会这样。\" 冷静地无视或一笑而过",
          "zh-TW": "\"嗯，可能會這樣。\" 冷靜地無視或一笑而過",
          vi: "\"Ồ, có thể xảy ra như vậy.\" Bình tĩnh bỏ qua hoặc cười xòa",
          id: "\"Yah, itu bisa terjadi.\" Dengan tenang mengabaikan atau menertawakannya"
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "주말에 갑자기 약속이 취소되었다면?",
      en: "If a weekend plan is suddenly canceled?",
      ja: "週末に突然約束がキャンセルされたら？",
      "zh-CN": "如果周末的约会突然被取消了？",
      "zh-TW": "如果週末的約會突然被取消了？",
      vi: "Nếu kế hoạch cuối tuần đột ngột bị hủy?",
      id: "Jika rencana akhir pekan tiba-tiba dibatalkan?"
    },
    options: [
      {
        text: {
          ko: "\"오히려 좋아.\" 혼자만의 시간을 즐기며 재충전한다",
          en: "\"Actually, I like it.\" Enjoys alone time and recharges",
          ja: "「むしろいいかも。」一人の時間を楽しんで充電する",
          "zh-CN": "\"其实挺好的。\" 享受独处时间并充电",
          "zh-TW": "\"其實挺好的。\" 享受獨處時間並充電",
          vi: "\"Thực ra tôi thích điều đó.\" Tận hưởng thời gian một mình và nạp năng lượng",
          id: "\"Sebenarnya, saya suka.\" Menikmati waktu sendiri dan mengisi ulang"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"심심한 건 못 참아.\" 당장 다른 친구에게 연락해 약속을 잡는다",
          en: "\"Can't stand being bored.\" Immediately contacts another friend to make plans",
          ja: "「退屈は我慢できない。」すぐに他の友達に連絡して約束を入れる",
          "zh-CN": "\"受不了无聊。\" 立即联系其他朋友安排约会",
          "zh-TW": "\"受不了無聊。\" 立即聯繫其他朋友安排約會",
          vi: "\"Không thể chịu được sự nhàm chán.\" Ngay lập tức liên hệ bạn khác để sắp xếp kế hoạch",
          id: "\"Tidak tahan bosan.\" Segera menghubungi teman lain untuk membuat rencana"
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "낯선 곳에서 길을 잃었을 때 당신의 선택은?",
      en: "When you get lost in an unfamiliar place, what do you choose?",
      ja: "見知らぬ場所で道に迷った時、あなたの選択は？",
      "zh-CN": "在陌生地方迷路时，你的选择是什么？",
      "zh-TW": "在陌生地方迷路時，你的選擇是什麼？",
      vi: "Khi bạn lạc đường ở nơi xa lạ, bạn chọn gì?",
      id: "Ketika Anda tersesat di tempat asing, apa pilihan Anda?"
    },
    options: [
      {
        text: {
          ko: "지도를 켜고 현재 위치와 목적지를 논리적으로 파악한다",
          en: "Opens a map and logically identifies current location and destination",
          ja: "地図を開いて現在地と目的地を論理的に把握する",
          "zh-CN": "打开地图，逻辑性地确定当前位置和目的地",
          "zh-TW": "打開地圖，邏輯性地確定當前位置和目的地",
          vi: "Mở bản đồ và xác định vị trí hiện tại và điểm đến một cách logic",
          id: "Membuka peta dan secara logis mengidentifikasi lokasi saat ini dan tujuan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"이쪽 느낌이 좋은데?\" 감을 믿고 발길 닿는 대로 가본다",
          en: "\"This way feels good?\" Trusts intuition and goes wherever the path leads",
          ja: "「こっちの感じがいいかも？」直感を信じて足の向くままに行ってみる",
          "zh-CN": "\"这边感觉不错？\" 相信直觉，跟着感觉走",
          "zh-TW": "\"這邊感覺不錯？\" 相信直覺，跟著感覺走",
          vi: "\"Hướng này có vẻ tốt?\" Tin vào trực giác và đi theo hướng nào cảm thấy đúng",
          id: "\"Arah ini terasa bagus?\" Mempercayai intuisi dan pergi ke mana pun jalan mengarah"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신이 더 중요하게 생각하는 가치는?",
      en: "What value do you consider more important?",
      ja: "あなたがより重要だと思う価値は？",
      "zh-CN": "你认为更重要的价值是什么？",
      "zh-TW": "你認為更重要的價值是什麼？",
      vi: "Giá trị nào bạn coi trọng hơn?",
      id: "Nilai apa yang Anda anggap lebih penting?"
    },
    options: [
      {
        text: {
          ko: "모두에게 인정받는 명예와 압도적인 힘",
          en: "Honor recognized by everyone and overwhelming power",
          ja: "みんなに認められる名誉と圧倒的な力",
          "zh-CN": "被所有人认可的名誉和压倒性的力量",
          "zh-TW": "被所有人認可的名譽和壓倒性的力量",
          vi: "Danh dự được mọi người công nhận và sức mạnh áp đảo",
          id: "Kehormatan yang diakui semua orang dan kekuatan yang luar biasa"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "누구에게도 얽매이지 않는 자유와 즐거움",
          en: "Freedom and joy unbound by anyone",
          ja: "誰にも縛られない自由と楽しみ",
          "zh-CN": "不受任何人束缚的自由和快乐",
          "zh-TW": "不受任何人束縛的自由和快樂",
          vi: "Tự do và niềm vui không bị ràng buộc bởi ai",
          id: "Kebebasan dan kegembiraan yang tidak terikat oleh siapa pun"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "사랑에 빠졌을 때 나의 모습은?",
      en: "When I fall in love, what am I like?",
      ja: "恋に落ちた時、私はどんな姿？",
      "zh-CN": "当我坠入爱河时，我是什么样子？",
      "zh-TW": "當我墜入愛河時，我是什麼樣子？",
      vi: "Khi tôi yêu, tôi như thế nào?",
      id: "Ketika saya jatuh cinta, saya seperti apa?"
    },
    options: [
      {
        text: {
          ko: "상대방을 내 것으로 만들기 위해 적극적으로 대시한다",
          en: "Actively pursues to make the other person mine",
          ja: "相手を自分のものにするために積極的にアプローチする",
          "zh-CN": "积极追求，让对方成为我的",
          "zh-TW": "積極追求，讓對方成為我的",
          vi: "Tích cực theo đuổi để biến người đó thành của mình",
          id: "Secara aktif mengejar untuk membuat orang itu menjadi milik saya"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "상대방의 마음이 열릴 때까지 기다리거나 신중하게 다가간다",
          en: "Waits until the other person opens their heart or approaches carefully",
          ja: "相手の心が開くまで待つか、慎重に近づく",
          "zh-CN": "等待对方敞开心扉，或谨慎地接近",
          "zh-TW": "等待對方敞開心扉，或謹慎地接近",
          vi: "Chờ đến khi người đó mở lòng hoặc tiếp cận một cách thận trọng",
          id: "Menunggu sampai orang itu membuka hatinya atau mendekati dengan hati-hati"
        },
        types: ["Type2", "Type4"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구가 뜬구름 잡는 비현실적인 고민을 털어놓는다면?",
      en: "If a friend confides unrealistic worries about chasing clouds?",
      ja: "友達が非現実的な悩みを打ち明けたら？",
      "zh-CN": "如果朋友向你倾诉不切实际的烦恼？",
      "zh-TW": "如果朋友向你傾訴不切實際的煩惱？",
      vi: "Nếu bạn bè tâm sự về những lo lắng không thực tế?",
      id: "Jika teman mengungkapkan kekhawatiran yang tidak realistis?"
    },
    options: [
      {
        text: {
          ko: "\"그건 좀 아닌 것 같은데?\" 현실적인 팩트로 조언해 준다",
          en: "\"That doesn't seem right?\" Gives advice with realistic facts",
          ja: "「それはちょっと違うんじゃない？」現実的な事実でアドバイスする",
          "zh-CN": "\"那似乎不太对？\" 用现实的事实给出建议",
          "zh-TW": "\"那似乎不太對？\" 用現實的事實給出建議",
          vi: "\"Điều đó có vẻ không đúng?\" Đưa ra lời khuyên với những sự thật thực tế",
          id: "\"Itu sepertinya tidak benar?\" Memberikan nasihat dengan fakta realistis"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"와, 그런 상상을 했어?\" 감정에 공감하며 맞장구쳐준다",
          en: "\"Wow, you imagined that?\" Empathizes emotionally and plays along",
          ja: "「わあ、そんな想像をしたの？」感情に共感して相槌を打つ",
          "zh-CN": "\"哇，你那样想象过？\" 情感上共情并附和",
          "zh-TW": "\"哇，你那樣想像過？\" 情感上共情並附和",
          vi: "\"Ồ, bạn đã tưởng tượng như vậy?\" Đồng cảm về mặt cảm xúc và hùa theo",
          id: "\"Wah, kamu membayangkan itu?\" Berempati secara emosional dan ikut bermain"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신의 옷장 속 패션 스타일은?",
      en: "What's your fashion style in your wardrobe?",
      ja: "あなたのクローゼットの中のファッションスタイルは？",
      "zh-CN": "你衣橱里的时尚风格是什么？",
      "zh-TW": "你衣櫥裡的時尚風格是什麼？",
      vi: "Phong cách thời trang trong tủ quần áo của bạn là gì?",
      id: "Apa gaya fashion di lemari pakaian Anda?"
    },
    options: [
      {
        text: {
          ko: "유행을 선도하거나 화려하고 눈에 띄는 스타일",
          en: "Trend-leading or flashy and eye-catching style",
          ja: "トレンドをリードするか、華やかで目立つスタイル",
          "zh-CN": "引领潮流或华丽醒目的风格",
          "zh-TW": "引領潮流或華麗醒目的風格",
          vi: "Phong cách dẫn đầu xu hướng hoặc nổi bật và thu hút",
          id: "Gaya yang memimpin tren atau mencolok dan menarik perhatian"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "유행보다는 실용적이고 편안하거나, 나만의 독특한 스타일",
          en: "Practical and comfortable rather than trendy, or my own unique style",
          ja: "トレンドより実用的で快適か、自分だけの独特なスタイル",
          "zh-CN": "比起流行更实用舒适，或是我自己独特的风格",
          "zh-TW": "比起流行更實用舒適，或是我自己獨特的風格",
          vi: "Thực dụng và thoải mái hơn là theo xu hướng, hoặc phong cách độc đáo của riêng tôi",
          id: "Praktis dan nyaman daripada mengikuti tren, atau gaya unik saya sendiri"
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "어려운 문제가 생겼을 때 해결 방식은?",
      en: "When a difficult problem arises, how do you solve it?",
      ja: "難しい問題が発生した時、解決方法は？",
      "zh-CN": "当出现困难问题时，你的解决方式是什么？",
      "zh-TW": "當出現困難問題時，你的解決方式是什麼？",
      vi: "Khi có vấn đề khó khăn, bạn giải quyết như thế nào?",
      id: "Ketika masalah sulit muncul, bagaimana Anda menyelesaikannya?"
    },
    options: [
      {
        text: {
          ko: "나만의 지식과 전략을 세워 스마트하게 해결한다",
          en: "Uses my own knowledge and strategy to solve it smartly",
          ja: "自分の知識と戦略を立ててスマートに解決する",
          "zh-CN": "运用自己的知识和策略聪明地解决",
          "zh-TW": "運用自己的知識和策略聰明地解決",
          vi: "Sử dụng kiến thức và chiến lược của riêng mình để giải quyết một cách thông minh",
          id: "Menggunakan pengetahuan dan strategi saya sendiri untuk menyelesaikannya dengan cerdas"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "주변 인맥을 동원하거나 임기응변으로 빠르게 해결한다",
          en: "Mobilizes connections or solves it quickly with improvisation",
          ja: "周りの人脈を動員するか、臨機応変に素早く解決する",
          "zh-CN": "动员周围人脉或随机应变快速解决",
          "zh-TW": "動員周圍人脈或隨機應變快速解決",
          vi: "Huy động các mối quan hệ xung quanh hoặc giải quyết nhanh chóng bằng cách ứng biến",
          id: "Mengerahkan koneksi atau menyelesaikannya dengan cepat secara improvisasi"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "만약 신이 되어 한 가지 능력을 가질 수 있다면?",
      en: "If you could become a god and have one ability?",
      ja: "もし神になって一つの能力を持てるとしたら？",
      "zh-CN": "如果你能成为神并拥有一种能力？",
      "zh-TW": "如果你能成為神並擁有一種能力？",
      vi: "Nếu bạn có thể trở thành thần và có một khả năng?",
      id: "Jika Anda bisa menjadi dewa dan memiliki satu kemampuan?"
    },
    options: [
      {
        text: {
          ko: "세상을 내 뜻대로 움직이는 강력한 통제력",
          en: "Powerful control to move the world as I wish",
          ja: "世界を自分の意思通りに動かす強力な統制力",
          "zh-CN": "按照我的意愿移动世界的强大控制力",
          "zh-TW": "按照我的意願移動世界的強大控制力",
          vi: "Sức mạnh kiểm soát mạnh mẽ để điều khiển thế giới theo ý muốn",
          id: "Kontrol kuat untuk menggerakkan dunia sesuai keinginan saya"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "어디든 순식간에 이동할 수 있는 자유로운 비행 능력",
          en: "Free flying ability to move anywhere instantly",
          ja: "どこへでも一瞬で移動できる自由な飛行能力",
          "zh-CN": "可以瞬间移动到任何地方的自由飞行能力",
          "zh-TW": "可以瞬間移動到任何地方的自由飛行能力",
          vi: "Khả năng bay tự do để di chuyển đến bất cứ đâu trong tích tắc",
          id: "Kemampuan terbang bebas untuk bergerak ke mana pun dalam sekejap"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "사람들이 평가하는 당신의 첫인상은?",
      en: "What do people think of your first impression?",
      ja: "人々が評価するあなたの第一印象は？",
      "zh-CN": "人们对你的第一印象是什么？",
      "zh-TW": "人們對你的第一印象是什麼？",
      vi: "Mọi người đánh giá ấn tượng đầu tiên của bạn như thế nào?",
      id: "Apa yang orang pikirkan tentang kesan pertama Anda?"
    },
    options: [
      {
        text: {
          ko: "\"좀 다가가기 어려워 보여\"",
          en: "\"Seems a bit hard to approach\"",
          ja: "「ちょっと近づきにくそう」",
          "zh-CN": "\"看起来有点难以接近\"",
          "zh-TW": "\"看起來有點難以接近\"",
          vi: "\"Có vẻ hơi khó tiếp cận\"",
          id: "\"Sepertinya agak sulit didekati\""
        },
        types: ["Type1", "Type2", "Type4"]
      },
      {
        text: {
          ko: "\"금방 친해질 수 있을 것 같아\"",
          en: "\"Seems like we can become friends quickly\"",
          ja: "「すぐに仲良くなれそう」",
          "zh-CN": "\"似乎很快就能成为朋友\"",
          "zh-TW": "\"似乎很快就能成為朋友\"",
          vi: "\"Có vẻ như chúng ta có thể trở thành bạn nhanh chóng\"",
          id: "\"Sepertinya kita bisa cepat berteman\""
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 꿈꾸는 최고의 휴식은?",
      en: "What's your ideal rest?",
      ja: "あなたが夢見る最高の休息は？",
      "zh-CN": "你梦想中的最佳休息是什么？",
      "zh-TW": "你夢想中的最佳休息是什麼？",
      vi: "Kỳ nghỉ lý tưởng mà bạn mơ ước là gì?",
      id: "Apa istirahat ideal yang Anda impikan?"
    },
    options: [
      {
        text: {
          ko: "화려한 파티나 북적이는 곳에서 에너지 얻기",
          en: "Getting energy from a glamorous party or bustling place",
          ja: "華やかなパーティーや賑やかな場所でエネルギーを得る",
          "zh-CN": "在华丽的派对或热闹的地方获得能量",
          "zh-TW": "在華麗的派對或熱鬧的地方獲得能量",
          vi: "Nhận năng lượng từ một bữa tiệc lộng lẫy hoặc nơi nhộn nhịp",
          id: "Mendapatkan energi dari pesta mewah atau tempat yang ramai"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "조용한 지하 서재나 어두운 방에서 혼자 쉬기",
          en: "Resting alone in a quiet underground study or dark room",
          ja: "静かな地下書斎や暗い部屋で一人で休む",
          "zh-CN": "在安静的地下书房或黑暗的房间里独自休息",
          "zh-TW": "在安靜的地下書房或黑暗的房間裡獨自休息",
          vi: "Nghỉ ngơi một mình trong phòng đọc sách dưới lòng đất yên tĩnh hoặc căn phòng tối",
          id: "Beristirahat sendirian di ruang belajar bawah tanah yang tenang atau ruangan gelap"
        },
        types: ["Type4"]
      }
    ]
  }
];

export const phase2GreekGodResults: Phase2GreekGodResult[] = [
  {
    type: "Type1",
    emoji: "⚡",
    title: {
      ko: "하늘의 지배자, 제우스 (Zeus)",
      en: "Ruler of the Sky, Zeus",
      ja: "天空の支配者、ゼウス",
      "zh-CN": "天空的统治者，宙斯",
      "zh-TW": "天空的統治者，宙斯",
      vi: "Người Cai Trị Bầu Trời, Zeus",
      id: "Penguasa Langit, Zeus"
    },
    shortDescription: {
      ko: "\"압도적인 카리스마, 야망 넘치는 리더\"",
      en: "\"Overwhelming charisma, ambitious leader\"",
      ja: "「圧倒的なカリスマ、野心に満ちたリーダー」",
      "zh-CN": "\"压倒性的魅力，充满野心的领导者\"",
      "zh-TW": "\"壓倒性的魅力，充滿野心的領導者\"",
      vi: "\"Sức hút áp đảo, nhà lãnh đạo đầy tham vọng\"",
      id: "\"Karisma yang luar biasa, pemimpin yang ambisius\""
    },
    description: {
      ko: "당신은 태어날 때부터 리더의 기질을 타고났습니다. 목표를 향한 야망이 크고, 상황을 주도하는 것을 좋아합니다. 자존심이 세고 승부욕이 강해 어디서든 1등을 해야 직성이 풀리지만, 내 사람에게는 한없이 관대하고 든든한 보호자가 되어줍니다.",
      en: "You were born with the qualities of a leader. You have great ambition toward your goals and enjoy taking charge of situations. You have strong pride and competitive spirit, needing to be first everywhere, but you are infinitely generous and a reliable protector to your people.",
      ja: "あなたは生まれながらにしてリーダーの資質を持っています。目標への野心が大きく、状況を主導することを好みます。プライドが高く勝負心が強く、どこでも1位でないと気が済みませんが、自分の人には限りなく寛大で頼りになる保護者になってくれます。",
      "zh-CN": "你天生具有领导者的气质。你对目标有巨大的野心，喜欢主导局面。自尊心强，好胜心强，无论在哪里都必须第一才能满足，但对你自己的人却无限宽容，成为可靠的保护者。",
      "zh-TW": "你天生具有領導者的氣質。你對目標有巨大的野心，喜歡主導局面。自尊心強，好勝心強，無論在哪裡都必須第一才能滿足，但對你自己的人卻無限寬容，成為可靠的保護者。",
      vi: "Bạn được sinh ra với phẩm chất của một nhà lãnh đạo. Bạn có tham vọng lớn hướng tới mục tiêu và thích nắm quyền kiểm soát tình huống. Bạn có lòng tự trọng cao và tinh thần cạnh tranh mạnh mẽ, cần phải đứng đầu ở mọi nơi, nhưng bạn vô cùng hào phóng và là người bảo vệ đáng tin cậy cho những người của mình.",
      id: "Anda dilahirkan dengan kualitas seorang pemimpin. Anda memiliki ambisi besar menuju tujuan dan menikmati mengambil alih situasi. Anda memiliki harga diri yang kuat dan semangat kompetitif, perlu menjadi yang pertama di mana pun, tetapi Anda sangat murah hati dan pelindung yang dapat diandalkan untuk orang-orang Anda."
    },
    symbols: {
      ko: "번개, 독수리, 왕좌",
      en: "Lightning, eagle, throne",
      ja: "雷、鷲、王座",
      "zh-CN": "闪电、鹰、王座",
      "zh-TW": "閃電、鷹、王座",
      vi: "Sét, đại bàng, ngai vàng",
      id: "Petir, elang, takhta"
    },
    traits: {
      ko: "리더십, 자신감, 야망, 책임감",
      en: "Leadership, confidence, ambition, responsibility",
      ja: "リーダーシップ、自信、野心、責任感",
      "zh-CN": "领导力、自信、野心、责任感",
      "zh-TW": "領導力、自信、野心、責任感",
      vi: "Khả năng lãnh đạo, tự tin, tham vọng, trách nhiệm",
      id: "Kepemimpinan, kepercayaan diri, ambisi, tanggung jawab"
    },
    recommendedItems: {
      ko: "고급스러운 시계, 명함 지갑",
      en: "Luxurious watch, business card holder",
      ja: "高級な時計、名刺入れ",
      "zh-CN": "豪华手表、名片夹",
      "zh-TW": "豪華手錶、名片夾",
      vi: "Đồng hồ sang trọng, hộp đựng danh thiếp",
      id: "Jam tangan mewah, tempat kartu nama"
    }
  },
  {
    type: "Type2",
    emoji: "🦉",
    title: {
      ko: "지혜의 여신, 아테나 (Athena)",
      en: "Goddess of Wisdom, Athena",
      ja: "知恵の女神、アテナ",
      "zh-CN": "智慧女神，雅典娜",
      "zh-TW": "智慧女神，雅典娜",
      vi: "Nữ Thần Trí Tuệ, Athena",
      id: "Dewi Kebijaksanaan, Athena"
    },
    shortDescription: {
      ko: "\"냉철한 전략가, 완벽주의 지성인\"",
      en: "\"Cool strategist, perfectionist intellectual\"",
      ja: "「冷静な戦略家、完璧主義の知識人」",
      "zh-CN": "\"冷静的战略家，完美主义知识分子\"",
      "zh-TW": "\"冷靜的戰略家，完美主義知識分子\"",
      vi: "\"Nhà chiến lược lạnh lùng, trí thức theo chủ nghĩa hoàn hảo\"",
      id: "\"Strategis yang tenang, intelektual perfeksionis\""
    },
    description: {
      ko: "당신은 감정보다는 이성을 중요하게 생각하는 논리적인 사람입니다. 어떤 위기 상황에서도 당황하지 않고 해결책을 찾아내는 스마트함을 가졌습니다. 자기 계발을 게을리하지 않으며, 효율성과 완벽함을 추구하는 현대판 전략가입니다.",
      en: "You are a logical person who values reason over emotion. You have the intelligence to find solutions without panicking in any crisis. You never neglect self-improvement and are a modern strategist who pursues efficiency and perfection.",
      ja: "あなたは感情よりも理性を重要視する論理的な人です。どんな危機的状況でも慌てずに解決策を見つける知恵を持っています。自己啓発を怠らず、効率性と完璧さを追求する現代版の戦略家です。",
      "zh-CN": "你是一个重视理性胜过情感的逻辑型人。你拥有在任何危机情况下都不慌张、能找到解决方案的智慧。你从不忽视自我提升，是追求效率和完美的现代战略家。",
      "zh-TW": "你是一個重視理性勝過情感的邏輯型人。你擁有在任何危機情況下都不慌張、能找到解決方案的智慧。你從不忽視自我提升，是追求效率和完美的現代戰略家。",
      vi: "Bạn là người logic coi trọng lý trí hơn cảm xúc. Bạn có trí thông minh để tìm ra giải pháp mà không hoảng sợ trong bất kỳ cuộc khủng hoảng nào. Bạn không bao giờ bỏ bê việc tự phát triển và là một nhà chiến lược hiện đại theo đuổi hiệu quả và sự hoàn hảo.",
      id: "Anda adalah orang yang logis yang menghargai akal lebih dari emosi. Anda memiliki kecerdasan untuk menemukan solusi tanpa panik dalam krisis apa pun. Anda tidak pernah mengabaikan pengembangan diri dan adalah seorang strategis modern yang mengejar efisiensi dan kesempurnaan."
    },
    symbols: {
      ko: "부엉이, 방패, 올리브나무",
      en: "Owl, shield, olive tree",
      ja: "フクロウ、盾、オリーブの木",
      "zh-CN": "猫头鹰、盾牌、橄榄树",
      "zh-TW": "貓頭鷹、盾牌、橄欖樹",
      vi: "Cú, khiên, cây ô liu",
      id: "Burung hantu, perisai, pohon zaitun"
    },
    traits: {
      ko: "지혜, 논리, 전략, 완벽주의",
      en: "Wisdom, logic, strategy, perfectionism",
      ja: "知恵、論理、戦略、完璧主義",
      "zh-CN": "智慧、逻辑、战略、完美主义",
      "zh-TW": "智慧、邏輯、戰略、完美主義",
      vi: "Trí tuệ, logic, chiến lược, chủ nghĩa hoàn hảo",
      id: "Kebijaksanaan, logika, strategi, perfeksionisme"
    },
    recommendedItems: {
      ko: "다이어리, 만년필, 안경",
      en: "Diary, fountain pen, glasses",
      ja: "日記、万年筆、眼鏡",
      "zh-CN": "日记、钢笔、眼镜",
      "zh-TW": "日記、鋼筆、眼鏡",
      vi: "Nhật ký, bút máy, kính",
      id: "Buku harian, pena, kacamata"
    }
  },
  {
    type: "Type3",
    emoji: "🌹",
    title: {
      ko: "사랑과 미의 여신, 아프로디테 (Aphrodite)",
      en: "Goddess of Love and Beauty, Aphrodite",
      ja: "愛と美の女神、アフロディーテ",
      "zh-CN": "爱与美的女神，阿佛洛狄忒",
      "zh-TW": "愛與美的女神，阿佛洛狄忒",
      vi: "Nữ Thần Tình Yêu và Sắc Đẹp, Aphrodite",
      id: "Dewi Cinta dan Kecantikan, Aphrodite"
    },
    shortDescription: {
      ko: "\"거부할 수 없는 매력, 사교계의 주인공\"",
      en: "\"Irresistible charm, protagonist of social circles\"",
      ja: "「拒否できない魅力、社交界の主人公」",
      "zh-CN": "\"无法抗拒的魅力，社交圈的主角\"",
      "zh-TW": "\"無法抗拒的魅力，社交圈的主角\"",
      vi: "\"Sức hút không thể cưỡng lại, nhân vật chính của giới xã hội\"",
      id: "\"Pesona yang tak tertahankan, protagonis lingkaran sosial\""
    },
    description: {
      ko: "당신은 사람을 끌어당기는 매력과 센스를 타고났습니다. 감수성이 풍부하고 아름다움을 사랑하며, 타인의 감정을 잘 읽어냅니다. 어디를 가나 주목받는 인기인이며, 사랑과 사람 없는 인생은 상상할 수 없는 낭만주의자입니다.",
      en: "You were born with charm and sense that draws people in. You have rich sensitivity, love beauty, and read others' emotions well. You are a popular person who attracts attention wherever you go, and you are a romanticist who cannot imagine life without love and people.",
      ja: "あなたは人を引き寄せる魅力とセンスを生まれ持っています。感受性が豊かで美しさを愛し、他人の感情をよく読み取ります。どこへ行っても注目される人気者であり、愛と人なしの人生は想像できないロマンチストです。",
      "zh-CN": "你天生具有吸引人的魅力和品味。你感受力丰富，热爱美丽，善于读懂他人的情感。无论走到哪里都是备受关注的人气人物，是无法想象没有爱和人的生活的浪漫主义者。",
      "zh-TW": "你天生具有吸引人的魅力和品味。你感受力豐富，熱愛美麗，善於讀懂他人的情感。無論走到哪裡都是備受關注的人氣人物，是無法想像沒有愛和人的生活的浪漫主義者。",
      vi: "Bạn được sinh ra với sức hút và cảm giác thu hút mọi người. Bạn có sự nhạy cảm phong phú, yêu cái đẹp và đọc được cảm xúc của người khác rất tốt. Bạn là người nổi tiếng thu hút sự chú ý ở bất cứ đâu bạn đến, và bạn là một người lãng mạn không thể tưởng tượng cuộc sống mà không có tình yêu và con người.",
      id: "Anda dilahirkan dengan pesona dan rasa yang menarik orang. Anda memiliki kepekaan yang kaya, mencintai keindahan, dan membaca emosi orang lain dengan baik. Anda adalah orang populer yang menarik perhatian ke mana pun Anda pergi, dan Anda adalah seorang romantis yang tidak dapat membayangkan hidup tanpa cinta dan orang."
    },
    symbols: {
      ko: "장미, 비둘기, 거울",
      en: "Rose, dove, mirror",
      ja: "バラ、鳩、鏡",
      "zh-CN": "玫瑰、鸽子、镜子",
      "zh-TW": "玫瑰、鴿子、鏡子",
      vi: "Hoa hồng, chim bồ câu, gương",
      id: "Mawar, merpati, cermin"
    },
    traits: {
      ko: "매력, 사교성, 감성, 낭만",
      en: "Charm, sociability, sensitivity, romance",
      ja: "魅力、社交性、感性、ロマンス",
      "zh-CN": "魅力、社交性、感性、浪漫",
      "zh-TW": "魅力、社交性、感性、浪漫",
      vi: "Sức hút, tính xã hội, nhạy cảm, lãng mạn",
      id: "Pesona, sosial, kepekaan, romantis"
    },
    recommendedItems: {
      ko: "향수, 거울, 액세서리",
      en: "Perfume, mirror, accessories",
      ja: "香水、鏡、アクセサリー",
      "zh-CN": "香水、镜子、配饰",
      "zh-TW": "香水、鏡子、配飾",
      vi: "Nước hoa, gương, phụ kiện",
      id: "Parfum, cermin, aksesori"
    }
  },
  {
    type: "Type4",
    emoji: "🌑",
    title: {
      ko: "지하 세계의 왕, 하데스 (Hades)",
      en: "King of the Underworld, Hades",
      ja: "冥界の王、ハデス",
      "zh-CN": "冥界之王，哈迪斯",
      "zh-TW": "冥界之王，哈迪斯",
      vi: "Vua Địa Ngục, Hades",
      id: "Raja Dunia Bawah, Hades"
    },
    shortDescription: {
      ko: "\"깊이 있는 내면, 고독한 늑대\"",
      en: "\"Deep inner world, lone wolf\"",
      ja: "「深い内面、孤独な狼」",
      "zh-CN": "\"深刻的内心世界，孤独的狼\"",
      "zh-TW": "\"深刻的內心世界，孤獨的狼\"",
      vi: "\"Thế giới nội tâm sâu sắc, sói cô đơn\"",
      id: "\"Dunia batin yang dalam, serigala kesepian\""
    },
    description: {
      ko: "당신은 겉으로 자신을 잘 드러내지 않지만, 내면에 깊은 세계를 가진 사람입니다. 시끄러운 모임보다는 혼자만의 시간을 즐기며, 좁고 깊은 인간관계를 선호합니다. 신중하고 통찰력이 뛰어나며, 한번 마음을 연 사람에게는 끝까지 의리를 지킵니다.",
      en: "You don't reveal yourself outwardly, but you are a person with a deep inner world. You enjoy time alone rather than noisy gatherings and prefer narrow but deep relationships. You are cautious and have excellent insight, and you keep your loyalty to those who have opened their hearts to you.",
      ja: "あなたは表面的には自分をあまり表に出しませんが、内面に深い世界を持つ人です。騒がしい集まりよりも一人の時間を楽しみ、狭くて深い人間関係を好みます。慎重で洞察力に優れており、一度心を開いた人には最後まで義理を守ります。",
      "zh-CN": "你表面上不轻易展现自己，但内心拥有深刻的世界。比起喧闹的聚会，你更喜欢独处时光，偏好狭窄而深刻的人际关系。你谨慎且洞察力出色，对向你敞开心扉的人会一直保持忠诚。",
      "zh-TW": "你表面上不輕易展現自己，但內心擁有深刻的世界。比起喧鬧的聚會，你更喜歡獨處時光，偏好狹窄而深刻的人際關係。你謹慎且洞察力出色，對向你敞開心扉的人會一直保持忠誠。",
      vi: "Bạn không thể hiện bản thân ra bên ngoài, nhưng bạn là người có thế giới nội tâm sâu sắc. Bạn thích thời gian một mình hơn là những buổi tụ tập ồn ào và thích những mối quan hệ hẹp nhưng sâu sắc. Bạn thận trọng và có sự hiểu biết sâu sắc, và bạn giữ lòng trung thành với những người đã mở lòng với bạn.",
      id: "Anda tidak mengungkapkan diri secara lahiriah, tetapi Anda adalah orang dengan dunia batin yang dalam. Anda menikmati waktu sendirian daripada pertemuan yang ramai dan lebih suka hubungan yang sempit tetapi dalam. Anda berhati-hati dan memiliki wawasan yang sangat baik, dan Anda menjaga kesetiaan Anda kepada mereka yang telah membuka hati mereka kepada Anda."
    },
    symbols: {
      ko: "투구, 보석, 지하",
      en: "Helmet, gem, underworld",
      ja: "兜、宝石、地下",
      "zh-CN": "头盔、宝石、地下",
      "zh-TW": "頭盔、寶石、地下",
      vi: "Mũ bảo hiểm, đá quý, địa ngục",
      id: "Helm, permata, dunia bawah"
    },
    traits: {
      ko: "신중함, 통찰력, 독립심, 비밀",
      en: "Caution, insight, independence, secrecy",
      ja: "慎重さ、洞察力、独立心、秘密",
      "zh-CN": "谨慎、洞察力、独立性、秘密",
      "zh-TW": "謹慎、洞察力、獨立性、秘密",
      vi: "Thận trọng, sự hiểu biết sâu sắc, độc lập, bí mật",
      id: "Kehati-hatian, wawasan, kemandirian, kerahasiaan"
    },
    recommendedItems: {
      ko: "무드등, 헤드폰, 블랙 패션",
      en: "Mood light, headphones, black fashion",
      ja: "ムードライト、ヘッドフォン、ブラックファッション",
      "zh-CN": "氛围灯、耳机、黑色时尚",
      "zh-TW": "氛圍燈、耳機、黑色時尚",
      vi: "Đèn tạo không khí, tai nghe, thời trang đen",
      id: "Lampu suasana, headphone, fashion hitam"
    }
  },
  {
    type: "Type5",
    emoji: "🕊️",
    title: {
      ko: "전령의 신, 헤르메스 (Hermes)",
      en: "Messenger God, Hermes",
      ja: "伝令の神、ヘルメス",
      "zh-CN": "信使之神，赫尔墨斯",
      "zh-TW": "信使之神，赫爾墨斯",
      vi: "Thần Truyền Tin, Hermes",
      id: "Dewa Utusan, Hermes"
    },
    shortDescription: {
      ko: "\"자유로운 영혼, 만능 재주꾼\"",
      en: "\"Free spirit, all-around talent\"",
      ja: "「自由な魂、万能の才能」",
      "zh-CN": "\"自由的灵魂，全能的天才\"",
      "zh-TW": "\"自由的靈魂，全能的天才\"",
      vi: "\"Linh hồn tự do, tài năng đa năng\"",
      id: "\"Jiwa bebas, bakat serba bisa\""
    },
    description: {
      ko: "당신은 한곳에 머무르기보다 자유롭게 돌아다니는 것을 좋아합니다. 호기심이 많고 적응력이 뛰어나며, 임기응변에 강합니다. 재치 있는 말솜씨로 주변을 즐겁게 만들며, 멀티태스킹에 능한 다재다능한 능력자입니다.",
      en: "You prefer to move around freely rather than staying in one place. You are very curious, highly adaptable, and strong at improvisation. You make those around you happy with your witty words and are a versatile talent skilled at multitasking.",
      ja: "あなたは一箇所に留まるよりも自由に動き回ることを好みます。好奇心が強く、適応力に優れ、臨機応変に強いです。機知に富んだ話術で周囲を楽しませ、マルチタスクに長けた多才な才能の持ち主です。",
      "zh-CN": "你更喜欢自由地四处走动，而不是待在一个地方。你非常好奇，适应力强，擅长随机应变。你用机智的言辞让周围的人开心，是擅长多任务处理的多才多艺的人才。",
      "zh-TW": "你更喜歡自由地四處走動，而不是待在一個地方。你非常好奇，適應力強，擅長隨機應變。你用機智的言辭讓周圍的人開心，是擅長多任務處理的多才多藝的人才。",
      vi: "Bạn thích di chuyển tự do hơn là ở một chỗ. Bạn rất tò mò, thích ứng tốt và mạnh mẽ trong việc ứng biến. Bạn làm cho những người xung quanh vui vẻ bằng lời nói dí dỏm và là một tài năng đa năng giỏi xử lý nhiều việc cùng lúc.",
      id: "Anda lebih suka bergerak bebas daripada tinggal di satu tempat. Anda sangat penasaran, sangat mudah beradaptasi, dan kuat dalam improvisasi. Anda membuat orang di sekitar Anda bahagia dengan kata-kata lucu Anda dan adalah bakat serba bisa yang terampil dalam multitasking."
    },
    symbols: {
      ko: "날개 달린 신발, 지팡이",
      en: "Winged sandals, staff",
      ja: "翼のあるサンダル、杖",
      "zh-CN": "带翅膀的凉鞋、手杖",
      "zh-TW": "帶翅膀的涼鞋、手杖",
      vi: "Dép có cánh, gậy",
      id: "Sandal bersayap, tongkat"
    },
    traits: {
      ko: "자유, 호기심, 순발력, 유머",
      en: "Freedom, curiosity, quick wit, humor",
      ja: "自由、好奇心、機転、ユーモア",
      "zh-CN": "自由、好奇心、机智、幽默",
      "zh-TW": "自由、好奇心、機智、幽默",
      vi: "Tự do, tò mò, nhanh nhẹn, hài hước",
      id: "Kebebasan, rasa ingin tahu, kecerdikan, humor"
    },
    recommendedItems: {
      ko: "운동화, 여행 가방, 스마트폰",
      en: "Sneakers, travel bag, smartphone",
      ja: "スニーカー、旅行かばん、スマートフォン",
      "zh-CN": "运动鞋、旅行包、智能手机",
      "zh-TW": "運動鞋、旅行包、智能手機",
      vi: "Giày thể thao, túi du lịch, điện thoại thông minh",
      id: "Sepatu olahraga, tas perjalanan, smartphone"
    }
  }
];

export function calculatePhase2GreekGodResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type3"; // Default value (highest priority)
  const priority = ["Type3", "Type5", "Type1", "Type2", "Type4"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
