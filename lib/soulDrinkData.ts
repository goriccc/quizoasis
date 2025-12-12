export interface SoulDrinkQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    typePoints: number[]; // 각 Type에 대한 점수 [Type1, Type2, Type3, Type4, Type5]
  }[];
}

export interface SoulDrinkResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  soulCoffee: Record<string, string>; // Soul Coffee
  soulWine: Record<string, string>; // Soul Wine
  recommendation: Record<string, string>; // 추천
}

export const soulDrinkQuestions: SoulDrinkQuestion[] = [
  {
    id: 1,
    question: {
      ko: "당신이 가장 선호하는 '맛'의 느낌은?",
      en: "What taste sensation do you prefer most?",
      ja: "あなたが最も好む「味」の感覚は？",
      'zh-CN': "你最偏好的'味道'感觉是？",
      'zh-TW': "你最偏好的「味道」感覺是？",
      vi: "Cảm giác 'vị' mà bạn ưa thích nhất là gì?",
      id: "Sensasi rasa apa yang paling Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "정신이 번쩍 드는 강렬하고 씁쓸한 맛",
          en: "Intense and bitter taste that wakes you up",
          ja: "目が覚めるような強烈で苦い味",
          'zh-CN': "让人精神一振的强烈苦涩味道",
          'zh-TW': "讓人精神一振的強烈苦澀味道",
          vi: "Vị đắng mạnh mẽ và đậm đà khiến tinh thần tỉnh táo",
          id: "Rasa pahit yang intens dan menyegarkan"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "입안에 침이 고이는 상큼하고 산뜻한 맛",
          en: "Fresh and tangy taste that makes your mouth water",
          ja: "口の中に唾液がたまるような爽やかでさっぱりした味",
          'zh-CN': "让人口水直流的清爽新鲜味道",
          'zh-TW': "讓人口水直流的清爽新鮮味道",
          vi: "Vị chua thanh mát và tươi mới khiến miệng tiết nước bọt",
          id: "Rasa segar dan asam yang membuat mulut berair"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "기분이 좋아지는 달콤하고 부드러운 맛",
          en: "Sweet and smooth taste that lifts your mood",
          ja: "気分が良くなる甘くて滑らかな味",
          'zh-CN': "让人心情愉悦的甜美柔和味道",
          'zh-TW': "讓人心情愉悅的甜美柔和味道",
          vi: "Vị ngọt ngào và mềm mại khiến tâm trạng tốt hơn",
          id: "Rasa manis dan lembut yang meningkatkan suasana hati"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "튀지 않고 은은하게 오래 남는 고소한 맛",
          en: "Subtle and lingering nutty flavor that doesn't stand out",
          ja: "目立たず、ほのかに長く残る香ばしい味",
          'zh-CN': "不张扬但持久留香的醇厚味道",
          'zh-TW': "不張揚但持久留香的醇厚味道",
          vi: "Vị béo ngậy tinh tế, lưu lại lâu mà không quá nổi bật",
          id: "Rasa gurih yang halus dan bertahan lama tanpa mencolok"
        },
        typePoints: [0, 0, 0, 1, 1] // Type 4, Type 5
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "가장 좋아하는 향기를 고른다면?",
      en: "If you had to choose your favorite scent?",
      ja: "最も好きな香りを選ぶなら？",
      'zh-CN': "如果选择你最喜欢的香味？",
      'zh-TW': "如果選擇你最喜歡的香味？",
      vi: "Nếu phải chọn mùi hương yêu thích nhất?",
      id: "Jika harus memilih aroma favorit?"
    },
    options: [
      {
        text: {
          ko: "묵직한 나무 타는 냄새나 가죽 향 (우디/스모키)",
          en: "Heavy burning wood or leather scent (Woody/Smoky)",
          ja: "重厚な木の燃える匂いや革の香り（ウッディ/スモーキー）",
          'zh-CN': "厚重的燃烧木头或皮革香味（木质/烟熏）",
          'zh-TW': "厚重的燃燒木頭或皮革香味（木質/煙燻）",
          vi: "Mùi gỗ cháy nặng hoặc mùi da (Gỗ/Khói)",
          id: "Aroma kayu terbakar atau kulit yang berat (Woody/Smoky)"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "싱그러운 꽃향기나 과일 향 (플로럴/프루티)",
          en: "Fresh floral or fruity scent (Floral/Fruity)",
          ja: "爽やかな花の香りや果物の香り（フローラル/フルーティー）",
          'zh-CN': "清新的花香或果香（花香/果香）",
          'zh-TW': "清新的花香或果香（花香/果香）",
          vi: "Mùi hoa tươi mát hoặc mùi trái cây (Hoa/Trái cây)",
          id: "Aroma bunga segar atau buah (Floral/Fruity)"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "달달한 바닐라나 갓 구운 빵 냄새 (구르망)",
          en: "Sweet vanilla or freshly baked bread scent (Gourmand)",
          ja: "甘いバニラや焼きたてのパンの香り（グルマン）",
          'zh-CN': "甜美的香草或刚烤好的面包香味（美食调）",
          'zh-TW': "甜美的香草或剛烤好的麵包香味（美食調）",
          vi: "Mùi vani ngọt ngào hoặc mùi bánh mì vừa nướng (Gourmand)",
          id: "Aroma vanila manis atau roti yang baru dipanggang (Gourmand)"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "비 온 뒤 숲속 냄새나 흙 내음 (어스)",
          en: "Post-rain forest scent or earthy aroma (Earthy)",
          ja: "雨上がりの森の匂いや土の香り（アース）",
          'zh-CN': "雨后森林或泥土的香味（大地调）",
          'zh-TW': "雨後森林或泥土的香味（大地調）",
          vi: "Mùi rừng sau mưa hoặc mùi đất (Đất)",
          id: "Aroma hutan setelah hujan atau aroma tanah (Earthy)"
        },
        typePoints: [0, 0, 0, 0, 1] // Type 5
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "이상적인 금요일 저녁 계획은?",
      en: "What's your ideal Friday evening plan?",
      ja: "理想的な金曜日の夜の計画は？",
      'zh-CN': "理想的周五晚上计划是？",
      'zh-TW': "理想的週五晚上計劃是？",
      vi: "Kế hoạch tối thứ Sáu lý tưởng của bạn là gì?",
      id: "Apa rencana malam Jumat ideal Anda?"
    },
    options: [
      {
        text: {
          ko: "성공한 CEO처럼 호텔 라운지 바에서 혼술",
          en: "Solo drinking at a hotel lounge bar like a successful CEO",
          ja: "成功したCEOのようにホテルラウンジバーで一人飲み",
          'zh-CN': "像成功CEO一样在酒店休息室酒吧独自小酌",
          'zh-TW': "像成功CEO一樣在酒店休息室酒吧獨自小酌",
          vi: "Uống một mình ở quầy bar khách sạn như một CEO thành công",
          id: "Minum sendirian di bar lounge hotel seperti CEO sukses"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "힙한 을지로 와인바에서 친구들과 수다",
          en: "Chatting with friends at a hip wine bar in Euljiro",
          ja: "ヒップな乙支路のワインバーで友達とおしゃべり",
          'zh-CN': "在时尚的乙支路葡萄酒吧与朋友聊天",
          'zh-TW': "在時尚的乙支路葡萄酒吧與朋友聊天",
          vi: "Trò chuyện với bạn bè ở quán rượu vang hip ở Euljiro",
          id: "Mengobrol dengan teman di bar anggur hip di Euljiro"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "따뜻한 전기장판 위에서 귤 까먹으며 넷플릭스",
          en: "Eating tangerines on a warm electric blanket while watching Netflix",
          ja: "温かい電気マットの上でみかんを食べながらNetflix",
          'zh-CN': "在温暖的 electric blanket 上吃橘子看 Netflix",
          'zh-TW': "在溫暖的電熱毯上吃橘子看 Netflix",
          vi: "Ăn quýt trên chăn điện ấm áp và xem Netflix",
          id: "Makan jeruk di atas selimut listrik hangat sambil menonton Netflix"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "조용한 LP 바에서 좋아하는 음악 감상",
          en: "Enjoying favorite music at a quiet LP bar",
          ja: "静かなLPバーで好きな音楽を楽しむ",
          'zh-CN': "在安静的LP酒吧欣赏喜欢的音乐",
          'zh-TW': "在安靜的LP酒吧欣賞喜歡的音樂",
          vi: "Thưởng thức nhạc yêu thích ở quán bar LP yên tĩnh",
          id: "Menikmati musik favorit di bar LP yang tenang"
        },
        typePoints: [0, 0, 0, 0, 1] // Type 5
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "스트레스를 받았을 때 당신의 반응은?",
      en: "How do you react when you're stressed?",
      ja: "ストレスを受けたとき、あなたの反応は？",
      'zh-CN': "当你感到压力时，你的反应是？",
      'zh-TW': "當你感到壓力時，你的反應是？",
      vi: "Phản ứng của bạn khi bị căng thẳng là gì?",
      id: "Bagaimana reaksi Anda saat stres?"
    },
    options: [
      {
        text: {
          ko: "운동이나 매운 음식으로 독하게 푼다.",
          en: "Release it intensely through exercise or spicy food",
          ja: "運動や辛い食べ物で激しく発散する",
          'zh-CN': "通过运动或辛辣食物激烈释放",
          'zh-TW': "通過運動或辛辣食物激烈釋放",
          vi: "Giải tỏa mạnh mẽ bằng tập thể dục hoặc đồ cay",
          id: "Melepaskannya dengan intens melalui olahraga atau makanan pedas"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "친구에게 전화해서 미주알고주알 털어놓는다.",
          en: "Call a friend and pour out everything in detail",
          ja: "友達に電話して細かく全てを打ち明ける",
          'zh-CN': "给朋友打电话，详细倾诉一切",
          'zh-TW': "給朋友打電話，詳細傾訴一切",
          vi: "Gọi cho bạn bè và trút hết mọi thứ chi tiết",
          id: "Menelepon teman dan menceritakan semuanya secara detail"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "달달한 디저트를 왕창 먹는다.",
          en: "Eat a lot of sweet desserts",
          ja: "甘いデザートをたくさん食べる",
          'zh-CN': "大吃甜点",
          'zh-TW': "大吃甜點",
          vi: "Ăn rất nhiều đồ ngọt",
          id: "Makan banyak makanan penutup manis"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "혼자만의 시간을 가지며 차분히 삭힌다.",
          en: "Have alone time and let it settle calmly",
          ja: "一人の時間を持って静かに落ち着かせる",
          'zh-CN': "独自一人，平静地让它沉淀",
          'zh-TW': "獨自一人，平靜地讓它沉澱",
          vi: "Dành thời gian một mình và để nó lắng xuống bình tĩnh",
          id: "Mengambil waktu sendiri dan membiarkannya tenang dengan tenang"
        },
        typePoints: [0, 0, 0, 1, 1] // Type 4, Type 5
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신의 옷장을 열면 가장 많은 옷 스타일은?",
      en: "What clothing style is most common in your wardrobe?",
      ja: "あなたのクローゼットを開けると、最も多い服のスタイルは？",
      'zh-CN': "打开你的衣柜，最常见的衣服风格是？",
      'zh-TW': "打開你的衣櫃，最常見的衣服風格是？",
      vi: "Khi mở tủ quần áo của bạn, phong cách quần áo nào nhiều nhất?",
      id: "Gaya pakaian apa yang paling banyak di lemari pakaian Anda?"
    },
    options: [
      {
        text: {
          ko: "블랙, 그레이 위주의 시크한 정장이나 코트",
          en: "Chic suits or coats mainly in black and gray",
          ja: "黒、グレー中心のシックなスーツやコート",
          'zh-CN': "以黑色、灰色为主的时尚正装或外套",
          'zh-TW': "以黑色、灰色為主的時尚正裝或外套",
          vi: "Bộ vest hoặc áo khoác thanh lịch chủ yếu màu đen và xám",
          id: "Setelan atau mantel chic terutama hitam dan abu-abu"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "톡톡 튀는 색감이나 유니크한 패턴의 옷",
          en: "Clothes with eye-catching colors or unique patterns",
          ja: "目立つ色合いやユニークなパターンの服",
          'zh-CN': "颜色醒目或图案独特的衣服",
          'zh-TW': "顏色醒目或圖案獨特的衣服",
          vi: "Quần áo có màu sắc nổi bật hoặc họa tiết độc đáo",
          id: "Pakaian dengan warna mencolok atau pola unik"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "보들보들한 니트나 파스텔 톤의 편안한 옷",
          en: "Soft knits or comfortable clothes in pastel tones",
          ja: "ふわふわしたニットやパステルトーンの快適な服",
          'zh-CN': "柔软的针织衫或柔和色调的舒适衣服",
          'zh-TW': "柔軟的針織衫或柔和色調的舒適衣服",
          vi: "Áo len mềm mại hoặc quần áo thoải mái tông màu pastel",
          id: "Rajutan lembut atau pakaian nyaman dengan nada pastel"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "유행 타지 않는 베이직한 셔츠나 슬랙스",
          en: "Timeless basic shirts or slacks",
          ja: "流行に左右されないベーシックなシャツやスラックス",
          'zh-CN': "不受流行影响的经典衬衫或长裤",
          'zh-TW': "不受流行影響的經典襯衫或長褲",
          vi: "Áo sơ mi hoặc quần tây cơ bản không theo mốt",
          id: "Kemeja atau celana panjang dasar yang tidak mengikuti tren"
        },
        typePoints: [0, 0, 0, 1, 0] // Type 4
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "인생 영화 장르는?",
      en: "What's your life movie genre?",
      ja: "人生の映画ジャンルは？",
      'zh-CN': "你的人生电影类型是？",
      'zh-TW': "你的人生電影類型是？",
      vi: "Thể loại phim cuộc đời của bạn là gì?",
      id: "Genre film kehidupan Anda adalah?"
    },
    options: [
      {
        text: {
          ko: "긴장감 넘치는 느와르, 스릴러",
          en: "Tense noir, thriller",
          ja: "緊張感あふれるノワール、スリラー",
          'zh-CN': "紧张刺激的黑色电影、惊悚片",
          'zh-TW': "緊張刺激的黑色電影、驚悚片",
          vi: "Phim noir, phim kinh dị đầy căng thẳng",
          id: "Noir yang tegang, thriller"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "영상미가 예쁜 로맨틱 코미디, 판타지",
          en: "Beautiful romantic comedy, fantasy",
          ja: "映像美が美しいロマンティックコメディ、ファンタジー",
          'zh-CN': "画面优美的浪漫喜剧、奇幻片",
          'zh-TW': "畫面優美的浪漫喜劇、奇幻片",
          vi: "Phim hài lãng mạn, phim giả tưởng đẹp mắt",
          id: "Komedi romantis yang indah, fantasi"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "가슴이 따뜻해지는 힐링, 애니메이션",
          en: "Heartwarming healing, animation",
          ja: "胸が温かくなるヒーリング、アニメーション",
          'zh-CN': "温暖治愈的、动画片",
          'zh-TW': "溫暖治癒的、動畫片",
          vi: "Phim chữa lành ấm lòng, phim hoạt hình",
          id: "Penyembuhan yang menghangatkan hati, animasi"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "여운이 길게 남는 드라마, 예술 영화",
          en: "Drama with lingering aftertaste, art films",
          ja: "余韻が長く残るドラマ、芸術映画",
          'zh-CN': "余韵悠长的剧情片、艺术电影",
          'zh-TW': "餘韻悠長的劇情片、藝術電影",
          vi: "Phim truyền hình để lại dư vị lâu, phim nghệ thuật",
          id: "Drama dengan aftertaste yang bertahan lama, film seni"
        },
        typePoints: [0, 0, 0, 0, 1] // Type 5
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "카페에 가서 메뉴를 고르는 기준은?",
      en: "What's your criteria for choosing a menu at a cafe?",
      ja: "カフェに行ってメニューを選ぶ基準は？",
      'zh-CN': "去咖啡店选择菜单的标准是？",
      'zh-TW': "去咖啡店選擇菜單的標準是？",
      vi: "Tiêu chí chọn menu khi đến quán cà phê là gì?",
      id: "Apa kriteria Anda untuk memilih menu di kafe?"
    },
    options: [
      {
        text: {
          ko: "\"아이스 아메리카노 주세요.\"",
          en: "\"I'll have an iced Americano, please.\"",
          ja: "「アイスアメリカーノください。」",
          'zh-CN': "\"请给我一杯冰美式。\"",
          'zh-TW': "\"請給我一杯冰美式。\"",
          vi: "\"Cho tôi một ly Americano đá.\"",
          id: "\"Tolong berikan saya es kopi Amerika.\""
        },
        typePoints: [0, 0, 0, 1, 0] // Type 4
      },
      {
        text: {
          ko: "\"이 집 시그니처가 뭐예요?\"",
          en: "\"What's this place's signature?\"",
          ja: "「このお店のシグネチャーは何ですか？」",
          'zh-CN': "\"这家店的招牌是什么？\"",
          'zh-TW': "\"這家店的招牌是什麼？\"",
          vi: "\"Món đặc trưng của quán này là gì?\"",
          id: "\"Apa signature tempat ini?\""
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "\"휘핑 많이 올려주세요.\"",
          en: "\"Please add lots of whipped cream.\"",
          ja: "「ホイップをたくさん乗せてください。」",
          'zh-CN': "\"请多放一些奶油。\"",
          'zh-TW': "\"請多放一些奶油。\"",
          vi: "\"Cho nhiều kem tươi nhé.\"",
          id: "\"Tolong tambahkan banyak krim kocok.\""
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "\"오늘의 원두는 산미가 있나요?\"",
          en: "\"Does today's coffee bean have acidity?\"",
          ja: "「今日のコーヒー豆は酸味がありますか？」",
          'zh-CN': "\"今天的咖啡豆有酸味吗？\"",
          'zh-TW': "\"今天的咖啡豆有酸味嗎？\"",
          vi: "\"Hạt cà phê hôm nay có vị chua không?\"",
          id: "\"Apakah biji kopi hari ini memiliki keasaman?\""
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "누군가에게 매력을 느끼는 포인트는?",
      en: "What attracts you to someone?",
      ja: "誰かに魅力を感じるポイントは？",
      'zh-CN': "你对某人有好感的点是？",
      'zh-TW': "你對某人有好感的點是？",
      vi: "Điểm thu hút bạn ở ai đó là gì?",
      id: "Apa yang menarik Anda pada seseorang?"
    },
    options: [
      {
        text: {
          ko: "압도적인 카리스마와 리더십",
          en: "Overwhelming charisma and leadership",
          ja: "圧倒的なカリスマ性とリーダーシップ",
          'zh-CN': "压倒性的魅力和领导力",
          'zh-TW': "壓倒性的魅力和領導力",
          vi: "Sức hút áp đảo và khả năng lãnh đạo",
          id: "Kharisma dan kepemimpinan yang luar biasa"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "통통 튀는 유머 감각과 센스",
          en: "Bubbling sense of humor and style",
          ja: "弾むユーモアセンスとセンス",
          'zh-CN': "活泼的幽默感和品味",
          'zh-TW': "活潑的幽默感和品味",
          vi: "Khiếu hài hước và phong cách nổi bật",
          id: "Rasa humor yang ceria dan gaya"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "다정하고 세심하게 챙겨주는 배려심",
          en: "Warm and thoughtful consideration",
          ja: "優しく細かく気遣ってくれる思いやり",
          'zh-CN': "温柔细心的关怀",
          'zh-TW': "溫柔細心的關懷",
          vi: "Sự quan tâm ấm áp và chu đáo",
          id: "Perhatian yang hangat dan penuh pertimbangan"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "차분하고 지적인 대화가 통하는 깊이",
          en: "Depth that allows calm and intellectual conversation",
          ja: "落ち着いて知的な会話が通じる深さ",
          'zh-CN': "能够进行冷静理智对话的深度",
          'zh-TW': "能夠進行冷靜理智對話的深度",
          vi: "Độ sâu cho phép cuộc trò chuyện bình tĩnh và trí tuệ",
          id: "Kedalaman yang memungkinkan percakapan tenang dan intelektual"
        },
        typePoints: [0, 0, 0, 1, 1] // Type 4, Type 5
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "당신의 성격을 한 단어로 표현한다면?",
      en: "If you had to describe your personality in one word?",
      ja: "あなたの性格を一言で表現すると？",
      'zh-CN': "如果用一句话形容你的性格？",
      'zh-TW': "如果用一句話形容你的性格？",
      vi: "Nếu phải mô tả tính cách của bạn bằng một từ?",
      id: "Jika Anda harus menggambarkan kepribadian Anda dalam satu kata?"
    },
    options: [
      {
        text: {
          ko: "단호한",
          en: "Determined",
          ja: "断固とした",
          'zh-CN': "果断的",
          'zh-TW': "果斷的",
          vi: "Quyết đoán",
          id: "Tegas"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "자유로운",
          en: "Free",
          ja: "自由な",
          'zh-CN': "自由的",
          'zh-TW': "自由的",
          vi: "Tự do",
          id: "Bebas"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "사랑스러운",
          en: "Lovable",
          ja: "愛らしい",
          'zh-CN': "可爱的",
          'zh-TW': "可愛的",
          vi: "Đáng yêu",
          id: "Menyenangkan"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "신중한",
          en: "Prudent",
          ja: "慎重な",
          'zh-CN': "谨慎的",
          'zh-TW': "謹慎的",
          vi: "Thận trọng",
          id: "Bijaksana"
        },
        typePoints: [0, 0, 0, 1, 0] // Type 4
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "여행지에서 묵고 싶은 숙소는?",
      en: "What kind of accommodation do you want to stay at when traveling?",
      ja: "旅行先で泊まりたい宿泊施設は？",
      'zh-CN': "旅行时想住的住宿是？",
      'zh-TW': "旅行時想住的住宿是？",
      vi: "Loại chỗ ở bạn muốn khi đi du lịch là gì?",
      id: "Jenis akomodasi apa yang ingin Anda tinggali saat bepergian?"
    },
    options: [
      {
        text: {
          ko: "럭셔리한 5성급 호텔 스위트룸",
          en: "Luxurious 5-star hotel suite",
          ja: "豪華な5つ星ホテルのスイートルーム",
          'zh-CN': "豪华的五星级酒店套房",
          'zh-TW': "豪華的五星級酒店套房",
          vi: "Phòng suite khách sạn 5 sao sang trọng",
          id: "Suite hotel bintang 5 mewah"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "현지 감성이 가득한 에어비앤비나 게스트하우스",
          en: "Airbnb or guesthouse full of local charm",
          ja: "現地の雰囲気が満ちたエアビーアンドビーやゲストハウス",
          'zh-CN': "充满当地风情的爱彼迎或民宿",
          'zh-TW': "充滿當地風情的愛彼迎或民宿",
          vi: "Airbnb hoặc nhà khách đầy cảm giác địa phương",
          id: "Airbnb atau guesthouse penuh dengan pesona lokal"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "아기자기하고 예쁜 풀빌라 펜션",
          en: "Cozy and pretty pool villa pension",
          ja: "可愛らしくてきれいなプール付きヴィラペンション",
          'zh-CN': "温馨漂亮的带泳池别墅民宿",
          'zh-TW': "溫馨漂亮的帶泳池別墅民宿",
          vi: "Pension biệt thự có hồ bơi ấm cúng và xinh xắn",
          id: "Pensiun villa kolam renang yang nyaman dan cantik"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "고즈넉한 한옥이나 숲속 산장",
          en: "Tranquil hanok or mountain lodge in the forest",
          ja: "静かな韓屋や森の中の山小屋",
          'zh-CN': "宁静的韩屋或森林中的山间小屋",
          'zh-TW': "寧靜的韓屋或森林中的山間小屋",
          vi: "Nhà hanok yên tĩnh hoặc nhà nghỉ trên núi trong rừng",
          id: "Hanok yang tenang atau pondok gunung di hutan"
        },
        typePoints: [0, 0, 0, 0, 1] // Type 5
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "대화할 때 당신의 스타일은?",
      en: "What's your conversation style?",
      ja: "会話するとき、あなたのスタイルは？",
      'zh-CN': "你对话时的风格是？",
      'zh-TW': "你對話時的風格是？",
      vi: "Phong cách trò chuyện của bạn là gì?",
      id: "Apa gaya percakapan Anda?"
    },
    options: [
      {
        text: {
          ko: "결론부터 말하고 핵심만 명확하게 전달",
          en: "Start with the conclusion and clearly convey only the key points",
          ja: "結論から話し、核心だけを明確に伝える",
          'zh-CN': "先说结论，只明确传达核心要点",
          'zh-TW': "先說結論，只明確傳達核心要點",
          vi: "Nói kết luận trước và chỉ truyền đạt rõ ràng những điểm chính",
          id: "Mulai dengan kesimpulan dan sampaikan hanya poin-poin kunci dengan jelas"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "제스처를 섞어가며 생생하고 재밌게 이야기",
          en: "Tell stories vividly and interestingly with gestures",
          ja: "ジェスチャーを交えながら生き生きと面白く話す",
          'zh-CN': "配合手势生动有趣地讲述",
          'zh-TW': "配合手勢生動有趣地講述",
          vi: "Kể chuyện sinh động và thú vị kèm theo cử chỉ",
          id: "Bercerita dengan hidup dan menarik sambil menggunakan gerakan"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "상대방의 말에 맞장구치며 공감",
          en: "Respond and empathize with what the other person says",
          ja: "相手の言葉に相槌を打ちながら共感する",
          'zh-CN': "附和对方的话并产生共鸣",
          'zh-TW': "附和對方的話並產生共鳴",
          vi: "Đồng cảm và phản hồi theo lời người đối diện",
          id: "Merespons dan berempati dengan apa yang dikatakan lawan bicara"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "말을 많이 하기보다 경청하며 신중하게 대답",
          en: "Listen carefully and answer thoughtfully rather than talking a lot",
          ja: "多く話すより、傾聴しながら慎重に答える",
          'zh-CN': "比起说很多，更倾向于仔细倾听并谨慎回答",
          'zh-TW': "比起說很多，更傾向於仔細傾聽並謹慎回答",
          vi: "Lắng nghe cẩn thận và trả lời thận trọng hơn là nói nhiều",
          id: "Mendengarkan dengan saksama dan menjawab dengan bijaksana daripada banyak bicara"
        },
        typePoints: [0, 0, 0, 1, 0] // Type 4
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 추구하는 삶의 가치는?",
      en: "What life value do you pursue?",
      ja: "あなたが追求する人生の価値は？",
      'zh-CN': "你追求的人生价值是？",
      'zh-TW': "你追求的人生價值是？",
      vi: "Giá trị cuộc sống bạn theo đuổi là gì?",
      id: "Nilai kehidupan apa yang Anda kejar?"
    },
    options: [
      {
        text: {
          ko: "성공과 성취, 남들보다 앞서가는 것",
          en: "Success and achievement, staying ahead of others",
          ja: "成功と達成、他人より先を行くこと",
          'zh-CN': "成功与成就，领先他人",
          'zh-TW': "成功與成就，領先他人",
          vi: "Thành công và thành tựu, đi trước người khác",
          id: "Kesuksesan dan pencapaian, tetap di depan orang lain"
        },
        typePoints: [1, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "즐거움과 경험, 현재를 즐기는 것",
          en: "Joy and experience, enjoying the present",
          ja: "楽しさと経験、現在を楽しむこと",
          'zh-CN': "快乐与体验，享受当下",
          'zh-TW': "快樂與體驗，享受當下",
          vi: "Niềm vui và trải nghiệm, tận hưởng hiện tại",
          id: "Kegembiraan dan pengalaman, menikmati saat ini"
        },
        typePoints: [0, 1, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "행복과 사랑, 주변 사람들과 함께하는 것",
          en: "Happiness and love, being with people around you",
          ja: "幸せと愛、周りの人々と共にいること",
          'zh-CN': "幸福与爱，与身边的人在一起",
          'zh-TW': "幸福與愛，與身邊的人在一起",
          vi: "Hạnh phúc và tình yêu, ở bên những người xung quanh",
          id: "Kebahagiaan dan cinta, bersama orang-orang di sekitar Anda"
        },
        typePoints: [0, 0, 1, 0, 0] // Type 3
      },
      {
        text: {
          ko: "균형과 평화, 흔들리지 않는 내면",
          en: "Balance and peace, an unshakable inner self",
          ja: "バランスと平和、揺るがない内面",
          'zh-CN': "平衡与和平，坚定不移的内心",
          'zh-TW': "平衡與和平，堅定不移的內心",
          vi: "Cân bằng và bình yên, nội tâm không lay chuyển",
          id: "Keseimbangan dan kedamaian, batin yang tidak tergoyahkan"
        },
        typePoints: [0, 0, 0, 1, 1] // Type 4, Type 5
      }
    ]
  }
];

export const soulDrinkResults: SoulDrinkResult[] = [
  {
    type: "Type1",
    emoji: "🍷",
    title: {
      ko: "고독한 야망가, 에스프레소 & 카베르네 소비뇽",
      en: "Lonely Ambitious, Espresso & Cabernet Sauvignon",
      ja: "孤独な野心家、エスプレッソ & カベルネ・ソーヴィニョン",
      'zh-CN': "孤独的野心家，意式浓缩咖啡 & 赤霞珠",
      'zh-TW': "孤獨的野心家，義式濃縮咖啡 & 赤霞珠",
      vi: "Người tham vọng cô đơn, Espresso & Cabernet Sauvignon",
      id: "Ambisius Kesepian, Espresso & Cabernet Sauvignon"
    },
    shortDescription: {
      ko: "\"타협하지 않는 강렬함, 압도적인 바디감\"",
      en: "\"Uncompromising intensity, overwhelming body\"",
      ja: "「妥協しない強烈さ、圧倒的なボディ感」",
      'zh-CN': "\"不妥协的强烈，压倒性的酒体\"",
      'zh-TW': "\"不妥協的強烈，壓倒性的酒體\"",
      vi: "\"Cường độ không thỏa hiệp, thân vị áp đảo\"",
      id: "\"Intensitas yang tidak kompromi, body yang luar biasa\""
    },
    description: {
      ko: "당신은 군더더기 없는 깔끔함과 강렬한 임팩트를 선호합니다. 인생에서도 목표가 뚜렷하고, 주관이 확실한 리더형입니다. 씁쓸함 뒤에 오는 깊은 여운을 즐길 줄 아는 어른스러운 입맛을 가졌습니다.",
      en: "You prefer clean simplicity without frills and intense impact. In life, you have clear goals and are a leader type with firm convictions. You have a mature palate that knows how to enjoy the deep aftertaste that follows bitterness.",
      ja: "あなたは無駄のない清潔さと強烈なインパクトを好みます。人生でも目標が明確で、主観が確かなリーダー型です。苦味の後に来る深い余韻を楽しむことができる大人の味覚を持っています。",
      'zh-CN': "你偏好没有多余装饰的简洁和强烈的冲击。在生活中，你目标明确，是拥有坚定主见的领导型。你拥有成熟的味觉，懂得享受苦涩之后带来的深刻余韵。",
      'zh-TW': "你偏好沒有多餘裝飾的簡潔和強烈的衝擊。在生活中，你目標明確，是擁有堅定主見的領導型。你擁有成熟的味覺，懂得享受苦澀之後帶來的深刻餘韻。",
      vi: "Bạn thích sự đơn giản gọn gàng không thừa thãi và tác động mạnh mẽ. Trong cuộc sống, bạn có mục tiêu rõ ràng và là kiểu lãnh đạo có quan điểm vững chắc. Bạn có khẩu vị trưởng thành biết thưởng thức dư vị sâu sắc sau vị đắng.",
      id: "Anda lebih suka kesederhanaan bersih tanpa hiasan dan dampak yang intens. Dalam hidup, Anda memiliki tujuan yang jelas dan merupakan tipe pemimpin dengan keyakinan yang kuat. Anda memiliki selera dewasa yang tahu cara menikmati aftertaste yang dalam yang mengikuti kepahitan."
    },
    soulCoffee: {
      ko: "에스프레소 (Espresso) - 본연의 강렬한 맛",
      en: "Espresso - The original intense flavor",
      ja: "エスプレッソ - 本来の強烈な味",
      'zh-CN': "意式浓缩咖啡 - 原本的强烈味道",
      'zh-TW': "義式濃縮咖啡 - 原本的強烈味道",
      vi: "Espresso - Hương vị mạnh mẽ nguyên bản",
      id: "Espresso - Rasa intens asli"
    },
    soulWine: {
      ko: "카베르네 소비뇽 (Cabernet Sauvignon) - 묵직한 타닌과 바디감",
      en: "Cabernet Sauvignon - Heavy tannins and body",
      ja: "カベルネ・ソーヴィニョン - 重厚なタンニンとボディ感",
      'zh-CN': "赤霞珠 - 厚重的单宁和酒体",
      'zh-TW': "赤霞珠 - 厚重的單寧和酒體",
      vi: "Cabernet Sauvignon - Tanin nặng và thân vị",
      id: "Cabernet Sauvignon - Tannin berat dan body"
    },
    recommendation: {
      ko: "다크 초콜릿 같은 쌉싸름함과 묵직한 바디감을 즐겨보세요.",
      en: "Enjoy the bittersweetness like dark chocolate and the heavy body.",
      ja: "ダークチョコレートのような苦みと重厚なボディ感を楽しんでください。",
      'zh-CN': "享受如黑巧克力般的苦涩和厚重的酒体。",
      'zh-TW': "享受如黑巧克力般的苦澀和厚重的酒體。",
      vi: "Hãy thưởng thức vị đắng ngọt như sô cô la đen và thân vị nặng.",
      id: "Nikmati kepahitan manis seperti cokelat hitam dan body yang berat."
    }
  },
  {
    type: "Type2",
    emoji: "🥂",
    title: {
      ko: "자유로운 영혼, 핸드드립 & 소비뇽 블랑",
      en: "Free Spirit, Hand Drip & Sauvignon Blanc",
      ja: "自由な魂、ハンドドリップ & ソーヴィニョン・ブラン",
      'zh-CN': "自由的灵魂，手冲咖啡 & 长相思",
      'zh-TW': "自由的靈魂，手沖咖啡 & 長相思",
      vi: "Tâm hồn tự do, Hand Drip & Sauvignon Blanc",
      id: "Jiwa Bebas, Hand Drip & Sauvignon Blanc"
    },
    shortDescription: {
      ko: "\"톡 톡 터지는 산미, 싱그러운 아로마\"",
      en: "\"Bursting acidity, fresh aroma\"",
      ja: "「弾けるような酸味、爽やかなアロマ」",
      'zh-CN': "\"爆发的酸度，清新的香气\"",
      'zh-TW': "\"爆發的酸度，清新的香氣\"",
      vi: "\"Độ chua bùng nổ, hương thơm tươi mát\"",
      id: "\"Keasaman yang meledak, aroma segar\""
    },
    description: {
      ko: "당신은 틀에 박힌 것을 싫어하고 늘 새로운 자극을 찾아다닙니다. 상큼하고 화려한 향기를 좋아하며, 어디로 튈지 모르는 매력을 가졌습니다. 입안 가득 퍼지는 과일 향처럼 주변 사람들을 기분 좋게 만듭니다.",
      en: "You dislike being stuck in a rut and always seek new stimulation. You love fresh and vibrant scents, and have an unpredictable charm. Like a fruity aroma that fills your mouth, you make people around you feel good.",
      ja: "あなたは型にはまったことを嫌い、常に新しい刺激を探し回ります。爽やかで華やかな香りを好み、どこに飛ぶかわからない魅力を持っています。口いっぱいに広がる果物の香りのように、周りの人々を気分良くさせます。",
      'zh-CN': "你讨厌墨守成规，总是寻找新的刺激。你喜欢清新华丽的香气，拥有不可预测的魅力。就像充满口腔的水果香气一样，你让周围的人感到愉悦。",
      'zh-TW': "你討厭墨守成規，總是尋找新的刺激。你喜歡清新華麗的香氣，擁有不可預測的魅力。就像充滿口腔的水果香氣一樣，你讓周圍的人感到愉悅。",
      vi: "Bạn ghét những thứ khuôn mẫu và luôn tìm kiếm kích thích mới. Bạn thích mùi hương tươi mát và rực rỡ, và có sức hút không thể đoán trước. Như mùi trái cây tràn đầy miệng, bạn khiến mọi người xung quanh cảm thấy dễ chịu.",
      id: "Anda tidak suka hal-hal yang membosankan dan selalu mencari stimulasi baru. Anda menyukai aroma segar dan cerah, dan memiliki pesona yang tidak terduga. Seperti aroma buah yang memenuhi mulut, Anda membuat orang di sekitar merasa nyaman."
    },
    soulCoffee: {
      ko: "에티오피아 예가체프 (Hand Drip) - 화려한 꽃향기와 산미",
      en: "Ethiopian Yirgacheffe (Hand Drip) - Vibrant floral aroma and acidity",
      ja: "エチオピア・イルガチェフェ（ハンドドリップ）- 華やかな花の香りと酸味",
      'zh-CN': "埃塞俄比亚耶加雪菲（手冲）- 华丽的花香和酸度",
      'zh-TW': "衣索比亞耶加雪菲（手沖）- 華麗的花香和酸度",
      vi: "Ethiopian Yirgacheffe (Hand Drip) - Hương hoa rực rỡ và độ chua",
      id: "Ethiopian Yirgacheffe (Hand Drip) - Aroma bunga yang cerah dan keasaman"
    },
    soulWine: {
      ko: "소비뇽 블랑 (Sauvignon Blanc) - 상큼한 시트러스와 허브 향",
      en: "Sauvignon Blanc - Fresh citrus and herb aromas",
      ja: "ソーヴィニョン・ブラン - 爽やかなシトラスとハーブの香り",
      'zh-CN': "长相思 - 清新的柑橘和草本香气",
      'zh-TW': "長相思 - 清新的柑橘和草本香氣",
      vi: "Sauvignon Blanc - Hương cam quýt và thảo mộc tươi mát",
      id: "Sauvignon Blanc - Aroma jeruk dan herbal segar"
    },
    recommendation: {
      ko: "차갑게 칠링 된 화이트 와인이나 산미 있는 드립 커피가 어울립니다.",
      en: "Chilled white wine or drip coffee with acidity suits you well.",
      ja: "冷やした白ワインや酸味のあるドリップコーヒーが似合います。",
      'zh-CN': "冰镇的白葡萄酒或带酸度的手冲咖啡很适合你。",
      'zh-TW': "冰鎮的白葡萄酒或帶酸度的手沖咖啡很適合你。",
      vi: "Rượu vang trắng ướp lạnh hoặc cà phê pha có độ chua rất hợp với bạn.",
      id: "Anggur putih yang didinginkan atau kopi tetes dengan keasaman cocok untuk Anda."
    }
  },
  {
    type: "Type3",
    emoji: "🍰",
    title: {
      ko: "달콤한 로맨티스트, 바닐라 라떼 & 모스카토",
      en: "Sweet Romantic, Vanilla Latte & Moscato",
      ja: "甘いロマンチスト、バニララテ & モスカート",
      'zh-CN': "甜蜜的浪漫主义者，香草拿铁 & 莫斯卡托",
      'zh-TW': "甜蜜的浪漫主義者，香草拿鐵 & 莫斯卡托",
      vi: "Người lãng mạn ngọt ngào, Vanilla Latte & Moscato",
      id: "Romantis Manis, Vanilla Latte & Moscato"
    },
    shortDescription: {
      ko: "\"기분 좋아지는 달콤함, 부드러운 목넘김\"",
      en: "\"Mood-lifting sweetness, smooth finish\"",
      ja: "「気分が良くなる甘さ、滑らかなのどごし」",
      'zh-CN': "\"让人心情愉悦的甜美，顺滑的口感\"",
      'zh-TW': "\"讓人心情愉悅的甜美，順滑的口感\"",
      vi: "\"Vị ngọt nâng tâm trạng, kết thúc mượt mà\"",
      id: "\"Manis yang meningkatkan suasana hati, finish yang halus\""
    },
    description: {
      ko: "당신은 쓴맛보다는 인생의 달콤함을 사랑합니다. 힘든 일이 있어도 긍정적으로 생각하려 노력하며, 주변 사람들에게 다정다감합니다. 당신은 마시는 것만으로도 당이 충전되는 디저트 같은 사람입니다.",
      en: "You love the sweetness of life more than bitterness. Even when things are tough, you try to think positively and are warm and affectionate to people around you. You're like a dessert that recharges your sugar just by drinking it.",
      ja: "あなたは苦味よりも人生の甘さを愛します。困難なことがあっても前向きに考えようと努力し、周りの人々に優しく情熱的です。あなたは飲むだけで糖分が充電されるデザートのような人です。",
      'zh-CN': "你热爱生活的甜蜜胜过苦涩。即使遇到困难，你也会努力积极思考，对周围的人温柔热情。你就像甜点一样，光是喝就能补充糖分。",
      'zh-TW': "你熱愛生活的甜蜜勝過苦澀。即使遇到困難，你也會努力積極思考，對周圍的人溫柔熱情。你就像甜點一樣，光是喝就能補充糖分。",
      vi: "Bạn yêu sự ngọt ngào của cuộc sống hơn là vị đắng. Ngay cả khi gặp khó khăn, bạn cố gắng suy nghĩ tích cực và ấm áp, tình cảm với mọi người xung quanh. Bạn giống như một món tráng miệng có thể nạp đường chỉ bằng cách uống.",
      id: "Anda mencintai manisnya kehidupan lebih dari kepahitan. Bahkan ketika hal-hal sulit, Anda mencoba berpikir positif dan hangat serta penuh kasih kepada orang di sekitar. Anda seperti makanan penutup yang mengisi ulang gula Anda hanya dengan meminumnya."
    },
    soulCoffee: {
      ko: "바닐라 라떼 (Vanilla Latte) - 달달하고 부드러운 우유 거품",
      en: "Vanilla Latte - Sweet and smooth milk foam",
      ja: "バニララテ - 甘くて滑らかなミルクフォーム",
      'zh-CN': "香草拿铁 - 甜美顺滑的奶泡",
      'zh-TW': "香草拿鐵 - 甜美順滑的奶泡",
      vi: "Vanilla Latte - Bọt sữa ngọt ngào và mượt mà",
      id: "Vanilla Latte - Busa susu manis dan halus"
    },
    soulWine: {
      ko: "모스카토 다스티 (Moscato d'Asti) - 달콤한 탄산과 복숭아 향",
      en: "Moscato d'Asti - Sweet fizz and peach aroma",
      ja: "モスカート・ダスティ - 甘い炭酸と桃の香り",
      'zh-CN': "阿斯蒂莫斯卡托 - 甜美的气泡和桃子香气",
      'zh-TW': "阿斯蒂莫斯卡托 - 甜美的氣泡和桃子香氣",
      vi: "Moscato d'Asti - Fizz ngọt ngào và hương đào",
      id: "Moscato d'Asti - Fizz manis dan aroma persik"
    },
    recommendation: {
      ko: "스트레스받을 땐 무조건 달달한 게 최고! 디저트 와인을 추천해요.",
      en: "When stressed, sweet is always the best! I recommend dessert wine.",
      ja: "ストレスを受けたときは、甘いものが最高！デザートワインをおすすめします。",
      'zh-CN': "压力大时，甜的就是最好的！我推荐甜点酒。",
      'zh-TW': "壓力大時，甜的就是最好的！我推薦甜點酒。",
      vi: "Khi căng thẳng, đồ ngọt luôn là tốt nhất! Tôi khuyên bạn nên uống rượu vang tráng miệng.",
      id: "Saat stres, yang manis selalu yang terbaik! Saya merekomendasikan anggur pencuci mulut."
    }
  },
  {
    type: "Type4",
    emoji: "☕",
    title: {
      ko: "우아한 클래식, 아메리카노 & 메를로",
      en: "Elegant Classic, Americano & Merlot",
      ja: "優雅なクラシック、アメリカーノ & メルロー",
      'zh-CN': "优雅的经典，美式咖啡 & 梅洛",
      'zh-TW': "優雅的經典，美式咖啡 & 梅洛",
      vi: "Cổ điển thanh lịch, Americano & Merlot",
      id: "Klasik Elegan, Americano & Merlot"
    },
    shortDescription: {
      ko: "\"질리지 않는 편안함, 완벽한 밸런스\"",
      en: "\"Comfortable without getting tired, perfect balance\"",
      ja: "「飽きない快適さ、完璧なバランス」",
      'zh-CN': "\"不会厌倦的舒适，完美的平衡\"",
      'zh-TW': "\"不會厭倦的舒適，完美的平衡\"",
      vi: "\"Thoải mái không chán, cân bằng hoàn hảo\"",
      id: "\"Kenyamanan yang tidak membosankan, keseimbangan sempurna\""
    },
    description: {
      ko: "당신은 튀는 것보다 조화와 균형을 중요하게 생각합니다. 유행을 타지 않는 베이직한 스타일을 선호하며, 누구와도 무난하게 잘 어울립니다. 매일 마셔도 질리지 않는 데일리 커피처럼 편안한 매력을 지녔습니다.",
      en: "You value harmony and balance more than standing out. You prefer timeless basic styles and get along well with anyone. You have a comfortable charm like daily coffee that never gets boring even when drunk every day.",
      ja: "あなたは目立つことよりも調和とバランスを重要視します。流行に左右されないベーシックなスタイルを好み、誰とでも無難にうまくやっていけます。毎日飲んでも飽きないデイリーコーヒーのような快適な魅力を持っています。",
      'zh-CN': "你重视和谐与平衡胜过突出。你偏好不受流行影响的经典风格，与任何人都能相处融洽。你拥有如日常咖啡般的舒适魅力，即使每天喝也不会厌倦。",
      'zh-TW': "你重視和諧與平衡勝過突出。你偏好不受流行影響的經典風格，與任何人都能相處融洽。你擁有如日常咖啡般的舒適魅力，即使每天喝也不會厭倦。",
      vi: "Bạn coi trọng sự hài hòa và cân bằng hơn là nổi bật. Bạn thích phong cách cơ bản không theo mốt và hòa hợp tốt với bất kỳ ai. Bạn có sức hút thoải mái như cà phê hàng ngày không bao giờ chán dù uống mỗi ngày.",
      id: "Anda menghargai harmoni dan keseimbangan lebih dari menonjol. Anda lebih suka gaya dasar yang abadi dan bergaul dengan baik dengan siapa pun. Anda memiliki pesona yang nyaman seperti kopi harian yang tidak pernah membosankan bahkan ketika diminum setiap hari."
    },
    soulCoffee: {
      ko: "아메리카노 (Americano) - 깔끔하고 구수한 정석",
      en: "Americano - Clean and savory classic",
      ja: "アメリカーノ - 清潔で香ばしい定番",
      'zh-CN': "美式咖啡 - 干净醇香的标准",
      'zh-TW': "美式咖啡 - 乾淨醇香的標準",
      vi: "Americano - Cổ điển sạch sẽ và thơm ngon",
      id: "Americano - Klasik yang bersih dan gurih"
    },
    soulWine: {
      ko: "메를로 (Merlot) - 부드러운 타닌과 적당한 산미",
      en: "Merlot - Soft tannins and moderate acidity",
      ja: "メルロー - 柔らかいタンニンと適度な酸味",
      'zh-CN': "梅洛 - 柔和的单宁和适度的酸度",
      'zh-TW': "梅洛 - 柔和的單寧和適度的酸度",
      vi: "Merlot - Tanin mềm mại và độ chua vừa phải",
      id: "Merlot - Tannin lembut dan keasaman sedang"
    },
    recommendation: {
      ko: "호불호 없이 누구나 좋아하는 밸런스 좋은 음료가 딱입니다.",
      en: "A well-balanced drink that everyone likes without strong preferences is perfect for you.",
      ja: "好みが分かれず、誰もが好きなバランスの良い飲み物がぴったりです。",
      'zh-CN': "没有明显好恶，任何人都喜欢的平衡饮品正适合你。",
      'zh-TW': "沒有明顯好惡，任何人都喜歡的平衡飲品正適合你。",
      vi: "Một thức uống cân bằng mà ai cũng thích, không có sở thích mạnh mẽ, hoàn hảo cho bạn.",
      id: "Minuman yang seimbang yang disukai semua orang tanpa preferensi kuat sangat cocok untuk Anda."
    }
  },
  {
    type: "Type5",
    emoji: "🍇",
    title: {
      ko: "섬세한 예술가, 콜드브루 & 피노 누아",
      en: "Delicate Artist, Cold Brew & Pinot Noir",
      ja: "繊細な芸術家、コールドブリュー & ピノ・ノワール",
      'zh-CN': "细腻的艺术家，冷萃咖啡 & 黑皮诺",
      'zh-TW': "細膩的藝術家，冷萃咖啡 & 黑皮諾",
      vi: "Nghệ sĩ tinh tế, Cold Brew & Pinot Noir",
      id: "Seniman Halus, Cold Brew & Pinot Noir"
    },
    shortDescription: {
      ko: "\"복합적인 레이어, 은은하게 피어오르는 향\"",
      en: "\"Complex layers, subtly emerging aroma\"",
      ja: "「複雑なレイヤー、ほのかに立ち上る香り」",
      'zh-CN': "\"复杂的层次，淡淡散发的香气\"",
      'zh-TW': "\"複雜的層次，淡淡散發的香氣\"",
      vi: "\"Lớp phức tạp, hương thơm tỏa ra tinh tế\"",
      id: "\"Lapisan kompleks, aroma yang muncul dengan halus\""
    },
    description: {
      ko: "당신은 남들이 캐치하지 못하는 디테일을 봅니다. 감수성이 풍부하고 섬세하며, 혼자만의 시간을 즐깁니다. 처음엔 낯설 수 있지만, 알면 알수록 빠져드는 복합적인 풍미를 가진 사람입니다.",
      en: "You notice details that others miss. You're rich in sensitivity and delicate, and enjoy your alone time. You may seem unfamiliar at first, but you're someone with a complex flavor that draws people in the more they know you.",
      ja: "あなたは他の人が見逃す細部に気づきます。感受性が豊かで繊細で、一人の時間を楽しみます。最初は慣れないかもしれませんが、知れば知るほど引き込まれる複雑な風味を持つ人です。",
      'zh-CN': "你能注意到别人忽略的细节。你敏感丰富且细腻，享受独处时光。起初可能显得陌生，但你是一个拥有复杂风味的人，越了解越让人着迷。",
      'zh-TW': "你能注意到別人忽略的細節。你敏感豐富且細膩，享受獨處時光。起初可能顯得陌生，但你是一個擁有複雜風味的人，越了解越讓人著迷。",
      vi: "Bạn nhận thấy những chi tiết mà người khác bỏ lỡ. Bạn giàu cảm xúc và tinh tế, và thích thời gian một mình. Lúc đầu có vẻ xa lạ, nhưng bạn là người có hương vị phức tạp khiến người ta càng biết càng bị cuốn hút.",
      id: "Anda memperhatikan detail yang terlewatkan orang lain. Anda kaya akan kepekaan dan halus, dan menikmati waktu sendirian. Anda mungkin tampak asing pada awalnya, tetapi Anda adalah seseorang dengan rasa kompleks yang menarik orang semakin dalam semakin mereka mengenal Anda."
    },
    soulCoffee: {
      ko: "콜드브루 (Cold Brew) - 깔끔하지만 깊은 숙성의 맛",
      en: "Cold Brew - Clean but deep aged flavor",
      ja: "コールドブリュー - 清潔だが深い熟成の味",
      'zh-CN': "冷萃咖啡 - 干净但深沉的陈年味道",
      'zh-TW': "冷萃咖啡 - 乾淨但深沉的陳年味道",
      vi: "Cold Brew - Hương vị ủ sâu nhưng sạch sẽ",
      id: "Cold Brew - Rasa matang yang bersih tetapi dalam"
    },
    soulWine: {
      ko: "피노 누아 (Pinot Noir) - 섬세하고 우아한 붉은 과실 향",
      en: "Pinot Noir - Delicate and elegant red fruit aroma",
      ja: "ピノ・ノワール - 繊細で優雅な赤い果実の香り",
      'zh-CN': "黑皮诺 - 细腻优雅的红色水果香气",
      'zh-TW': "黑皮諾 - 細膩優雅的紅色水果香氣",
      vi: "Pinot Noir - Hương trái cây đỏ tinh tế và thanh lịch",
      id: "Pinot Noir - Aroma buah merah yang halus dan elegan"
    },
    recommendation: {
      ko: "향을 음미할 수 있는 섬세한 와인이나 깔끔한 콜드브루가 어울립니다.",
      en: "Delicate wine that allows you to savor the aroma or clean cold brew suits you well.",
      ja: "香りを味わうことができる繊細なワインや清潔なコールドブリューが似合います。",
      'zh-CN': "能够品味香气的细腻葡萄酒或干净的冷萃咖啡很适合你。",
      'zh-TW': "能夠品味香氣的細膩葡萄酒或乾淨的冷萃咖啡很適合你。",
      vi: "Rượu vang tinh tế cho phép bạn thưởng thức hương thơm hoặc cold brew sạch sẽ rất hợp với bạn.",
      id: "Anggur halus yang memungkinkan Anda menikmati aroma atau cold brew yang bersih sangat cocok untuk Anda."
    }
  }
];

// 답변 배열을 받아서 각 Type별 점수를 계산하고, 가장 높은 점수의 Type을 반환
// 동점일 경우 우선순위: Type 4 > Type 3 > Type 2 > Type 5 > Type 1
export function calculateSoulDrinkResult(answers: number[][]): string {
  // answers는 각 질문에 대한 선택된 option의 typePoints 배열
  // 예: [[1,0,0,0,0], [0,1,0,0,0], ...]
  
  const typeScores = [0, 0, 0, 0, 0]; // Type1, Type2, Type3, Type4, Type5
  
  // 각 답변의 점수를 합산
  answers.forEach(answer => {
    if (answer && answer.length === 5) {
      for (let i = 0; i < 5; i++) {
        typeScores[i] += answer[i];
      }
    }
  });
  
  // 가장 높은 점수 찾기
  const maxScore = Math.max(...typeScores);
  
  // 동점인 경우를 고려하여 우선순위 적용
  // 우선순위: Type 4 (index 3) > Type 3 (index 2) > Type 2 (index 1) > Type 5 (index 4) > Type 1 (index 0)
  const priority = [3, 2, 1, 4, 0]; // Type4, Type3, Type2, Type5, Type1 순서
  
  for (const typeIndex of priority) {
    if (typeScores[typeIndex] === maxScore) {
      return `Type${typeIndex + 1}`;
    }
  }
  
  // Fallback (should not happen)
  return "Type4";
}
