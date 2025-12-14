export interface Phase2BirthGemFlowerQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2BirthGemFlowerResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  gem: Record<string, string>; // 상징 보석
  flower: Record<string, string>; // 상징 꽃
  recommendation: Record<string, string>; // 추천 아이템
}

export const phase2BirthGemFlowerQuestions: Phase2BirthGemFlowerQuestion[] = [
  {
    id: 1,
    question: {
      ko: "일 년 중 당신이 가장 좋아하는 계절의 분위기는?",
      en: "What's the atmosphere of your favorite season of the year?",
      ja: "一年の中で最も好きな季節の雰囲気は？",
      "zh-CN": "一年中你最喜欢的季节氛围是？",
      "zh-TW": "一年中你最喜歡的季節氛圍是？",
      vi: "Bầu không khí của mùa bạn yêu thích nhất trong năm là gì?",
      id: "Apa suasana musim favorit Anda sepanjang tahun?"
    },
    options: [
      {
        text: {
          ko: "생명력이 넘치고 꽃이 만발하는 따스한 봄",
          en: "Warm spring full of vitality and blooming flowers",
          ja: "生命力に溢れ、花が満開の温かい春",
          "zh-CN": "充满生机、鲜花盛开的温暖春天",
          "zh-TW": "充滿生機、鮮花盛開的溫暖春天",
          vi: "Mùa xuân ấm áp tràn đầy sức sống và hoa nở rộ",
          id: "Musim semi yang hangat penuh vitalitas dan bunga bermekaran"
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "태양이 작렬하고 에너지가 넘치는 뜨거운 여름",
          en: "Hot summer with blazing sun and overflowing energy",
          ja: "太陽が激しく照りつけ、エネルギーが溢れる熱い夏",
          "zh-CN": "烈日炎炎、充满能量的炎热夏天",
          "zh-TW": "烈日炎炎、充滿能量的炎熱夏天",
          vi: "Mùa hè nóng bức với mặt trời chói chang và năng lượng tràn trề",
          id: "Musim panas yang panas dengan matahari terik dan energi meluap"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "쓸쓸한 듯하지만 분위기 있고 시원한 가을/겨울",
          en: "Cool autumn/winter that seems lonely but has atmosphere",
          ja: "寂しげだが雰囲気があり涼しい秋/冬",
          "zh-CN": "看似寂寥但很有氛围的凉爽秋天/冬天",
          "zh-TW": "看似寂寥但很有氛圍的涼爽秋天/冬天",
          vi: "Mùa thu/đông mát mẻ có vẻ cô đơn nhưng đầy không khí",
          id: "Musim gugur/musim dingin yang sejuk, tampak sepi tapi beraura"
        },
        types: ["Type2", "Type4"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "특별한 날, 친구에게 받고 싶은 선물은?",
      en: "On a special day, what gift would you like to receive from a friend?",
      ja: "特別な日、友達からもらいたいプレゼントは？",
      "zh-CN": "特殊的日子，你想从朋友那里收到什么礼物？",
      "zh-TW": "特殊的日子，你想從朋友那裡收到什麼禮物？",
      vi: "Vào ngày đặc biệt, bạn muốn nhận quà gì từ bạn bè?",
      id: "Pada hari istimewa, hadiah apa yang ingin Anda terima dari teman?"
    },
    options: [
      {
        text: {
          ko: "반짝이고 화려한 액세서리나 주얼리",
          en: "Sparkling and gorgeous accessories or jewelry",
          ja: "キラキラと華やかなアクセサリーやジュエリー",
          "zh-CN": "闪闪发光、华丽的配饰或珠宝",
          "zh-TW": "閃閃發光、華麗的配飾或珠寶",
          vi: "Phụ kiện hoặc trang sức lấp lánh và lộng lẫy",
          id: "Aksesori atau perhiasan yang berkilau dan mewah"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "향기롭고 감성적인 꽃다발이나 향수",
          en: "Fragrant and emotional bouquet or perfume",
          ja: "香りが良く、感情的な花束や香水",
          "zh-CN": "芬芳且感性的花束或香水",
          "zh-TW": "芬芳且感性的花束或香水",
          vi: "Bó hoa hoặc nước hoa thơm ngát và đầy cảm xúc",
          id: "Buket bunga atau parfum yang harum dan emosional"
        },
        types: ["Type3", "Type4"]
      },
      {
        text: {
          ko: "실용적이고 오래 쓸 수 있는 전자기기나 잡화",
          en: "Practical and long-lasting electronics or miscellaneous goods",
          ja: "実用的で長く使える電子機器や雑貨",
          "zh-CN": "实用且耐用的电子产品或杂货",
          "zh-TW": "實用且耐用的電子產品或雜貨",
          vi: "Thiết bị điện tử hoặc đồ linh tinh thực dụng và bền lâu",
          id: "Elektronik atau barang-barang praktis dan tahan lama"
        },
        types: ["Type2"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "나를 색깔로 표현한다면 어떤 톤일까요?",
      en: "If you express yourself in colors, what tone would it be?",
      ja: "自分を色で表現するとしたら、どんなトーン？",
      "zh-CN": "如果用颜色表达自己，会是什么色调？",
      "zh-TW": "如果用顏色表達自己，會是什麼色調？",
      vi: "Nếu thể hiện bản thân bằng màu sắc, tông màu sẽ là gì?",
      id: "Jika mengekspresikan diri dengan warna, nada apa yang akan digunakan?"
    },
    options: [
      {
        text: {
          ko: "정열적이고 눈에 띄는 레드나 핫핑크",
          en: "Passionate and eye-catching red or hot pink",
          ja: "情熱的で目立つレッドやホットピンク",
          "zh-CN": "热情且引人注目的红色或热粉色",
          "zh-TW": "熱情且引人注目的紅色或熱粉色",
          vi: "Đỏ hoặc hồng nóng bỏng đầy đam mê và nổi bật",
          id: "Merah atau hot pink yang penuh gairah dan mencolok"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "차분하고 신비로운 블루나 바이올렛",
          en: "Calm and mysterious blue or violet",
          ja: "落ち着いていて神秘的なブルーやバイオレット",
          "zh-CN": "平静而神秘的蓝色或紫色",
          "zh-TW": "平靜而神秘的藍色或紫色",
          vi: "Xanh dương hoặc tím bình tĩnh và bí ẩn",
          id: "Biru atau ungu yang tenang dan misterius"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "맑고 깨끗한 화이트나 투명한 컬러",
          en: "Clear and clean white or transparent color",
          ja: "清らかで清潔なホワイトや透明なカラー",
          "zh-CN": "清澈干净的白色或透明色",
          "zh-TW": "清澈乾淨的白色或透明色",
          vi: "Trắng trong trẻo và sạch sẽ hoặc màu trong suốt",
          id: "Putih yang jernih dan bersih atau warna transparan"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "힘든 일이 생겼을 때, 나만의 극복 방법은?",
      en: "When something difficult happens, what's your way of overcoming it?",
      ja: "困難なことが起きた時、あなただけの克服方法は？",
      "zh-CN": "遇到困难时，你独特的克服方法是什么？",
      "zh-TW": "遇到困難時，你獨特的克服方法是什麼？",
      vi: "Khi có việc khó khăn xảy ra, cách vượt qua riêng của bạn là gì?",
      id: "Ketika sesuatu yang sulit terjadi, apa cara Anda mengatasinya?"
    },
    options: [
      {
        text: {
          ko: "친구들을 만나 수다를 떨며 에너지를 얻는다",
          en: "Meet friends and chat to gain energy",
          ja: "友達に会っておしゃべりしてエネルギーを得る",
          "zh-CN": "见朋友聊天来获得能量",
          "zh-TW": "見朋友聊天來獲得能量",
          vi: "Gặp bạn bè và trò chuyện để lấy lại năng lượng",
          id: "Bertemu teman dan mengobrol untuk mendapatkan energi"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "혼자 조용한 곳에서 음악을 듣거나 사색에 잠긴다",
          en: "Listen to music or contemplate alone in a quiet place",
          ja: "一人で静かな場所で音楽を聞いたり思索に耽る",
          "zh-CN": "独自在安静的地方听音乐或沉思",
          "zh-TW": "獨自在安靜的地方聽音樂或沉思",
          vi: "Nghe nhạc hoặc suy tư một mình ở nơi yên tĩnh",
          id: "Mendengarkan musik atau merenung sendirian di tempat yang tenang"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "맛있는 걸 먹거나 쇼핑을 하며 기분을 전환한다",
          en: "Switch mood by eating delicious food or shopping",
          ja: "美味しいものを食べたり買い物をして気分を転換する",
          "zh-CN": "通过吃美食或购物来转换心情",
          "zh-TW": "通過吃美食或購物來轉換心情",
          vi: "Chuyển tâm trạng bằng cách ăn đồ ngon hoặc mua sắm",
          id: "Mengubah suasana hati dengan makan makanan enak atau berbelanja"
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "파티나 모임에서 당신의 포지션은?",
      en: "What's your position at parties or gatherings?",
      ja: "パーティーや集まりでのあなたのポジションは？",
      "zh-CN": "在聚会或聚会上，你的位置是？",
      "zh-TW": "在聚會或聚會上，你的位置是？",
      vi: "Vị trí của bạn trong các bữa tiệc hoặc cuộc họp mặt là gì?",
      id: "Apa posisi Anda di pesta atau pertemuan?"
    },
    options: [
      {
        text: {
          ko: "분위기를 주도하는 리더 혹은 인싸",
          en: "A leader or popular person who leads the atmosphere",
          ja: "雰囲気を主導するリーダーや人気者",
          "zh-CN": "主导气氛的领导者或受欢迎的人",
          "zh-TW": "主導氣氛的領導者或受歡迎的人",
          vi: "Người lãnh đạo hoặc người nổi tiếng dẫn dắt không khí",
          id: "Pemimpin atau orang populer yang memimpin suasana"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "조용히 사람들의 이야기를 들어주는 리스너",
          en: "A quiet listener who listens to people's stories",
          ja: "静かに人々の話を聞いてくれるリスナー",
          "zh-CN": "安静倾听人们故事的倾听者",
          "zh-TW": "安靜傾聽人們故事的傾聽者",
          vi: "Người lắng nghe yên lặng lắng nghe câu chuyện của mọi người",
          id: "Pendengar yang tenang yang mendengarkan cerita orang"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "필요할 때 적재적소에 센스 있는 멘트를 날리는 분위기 메이커",
          en: "A mood maker who drops witty comments at the right time",
          ja: "必要な時に適切な場所でセンスのあるコメントを飛ばす雰囲気メーカー",
          "zh-CN": "在需要时在合适的地方抛出有品位的评论的氛围制造者",
          "zh-TW": "在需要時在合適的地方拋出有品位的評論的氛圍製造者",
          vi: "Người tạo không khí thả những bình luận tinh tế đúng lúc đúng chỗ",
          id: "Pembuat suasana yang memberikan komentar cerdas di waktu yang tepat"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "보석이 가진 힘 중, 하나만 가질 수 있다면?",
      en: "If you could have only one power that gems possess?",
      ja: "宝石が持つ力の中で、一つだけ持てるとしたら？",
      "zh-CN": "如果只能拥有宝石拥有的力量之一？",
      "zh-TW": "如果只能擁有寶石擁有的力量之一？",
      vi: "Nếu bạn chỉ có thể có một trong những sức mạnh mà đá quý sở hữu?",
      id: "Jika Anda hanya bisa memiliki satu kekuatan yang dimiliki permata?"
    },
    options: [
      {
        text: {
          ko: "영원한 사랑과 불변의 아름다움",
          en: "Eternal love and unchanging beauty",
          ja: "永遠の愛と変わらない美しさ",
          "zh-CN": "永恒的爱和不变的美",
          "zh-TW": "永恒的愛和不變的美",
          vi: "Tình yêu vĩnh cửu và vẻ đẹp bất biến",
          id: "Cinta abadi dan keindahan yang tidak berubah"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "나를 지켜주는 강력한 보호와 치유의 힘",
          en: "Strong protection and healing power that guards me",
          ja: "私を守る強力な保護と癒しの力",
          "zh-CN": "守护我的强大保护和治愈力量",
          "zh-TW": "守護我的強大保護和治癒力量",
          vi: "Sức mạnh bảo vệ và chữa lành mạnh mẽ bảo vệ tôi",
          id: "Kekuatan perlindungan dan penyembuhan yang kuat yang melindungi saya"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "미래를 내다보는 지혜와 통찰력",
          en: "Wisdom and insight to see the future",
          ja: "未来を見通す知恵と洞察力",
          "zh-CN": "预见未来的智慧和洞察力",
          "zh-TW": "預見未來的智慧和洞察力",
          vi: "Trí tuệ và sự sáng suốt để nhìn thấy tương lai",
          id: "Kebijaksanaan dan wawasan untuk melihat masa depan"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "길가에 핀 꽃을 볼 때 드는 생각은?",
      en: "What do you think when you see flowers blooming by the roadside?",
      ja: "道端に咲いている花を見た時、どんなことを思う？",
      "zh-CN": "看到路边盛开的花朵时，你会想到什么？",
      "zh-TW": "看到路邊盛開的花朵時，你會想到什麼？",
      vi: "Bạn nghĩ gì khi thấy hoa nở bên đường?",
      id: "Apa yang Anda pikirkan ketika melihat bunga mekar di pinggir jalan?"
    },
    options: [
      {
        text: {
          ko: "\"와 예쁘다! 사진 찍어서 인스타 올려야지\"",
          en: "\"Wow, it's pretty! I should take a photo and post it on Instagram\"",
          ja: "「わあ、きれい！写真を撮ってインスタに上げなきゃ」",
          "zh-CN": "「哇，好漂亮！应该拍张照片发到Instagram上」",
          "zh-TW": "「哇，好漂亮！應該拍張照片發到Instagram上」",
          vi: "\"Ồ đẹp quá! Nên chụp ảnh và đăng lên Instagram\"",
          id: "\"Wah, cantik! Harus foto dan posting di Instagram\""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"저 꽃의 이름은 뭘까? 꽃말이 궁금하다\"",
          en: "\"What's the name of that flower? I'm curious about its meaning\"",
          ja: "「あの花の名前は何だろう？花言葉が気になる」",
          "zh-CN": "「那朵花叫什么名字？我想知道它的花语」",
          "zh-TW": "「那朵花叫什麼名字？我想知道它的花語」",
          vi: "\"Tên của bông hoa đó là gì? Tôi tò mò về ý nghĩa của nó\"",
          id: "\"Apa nama bunga itu? Saya penasaran dengan maknanya\""
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "\"예쁘긴 한데, 금방 시들겠지? 아쉽다\"",
          en: "\"It's pretty, but it'll wither soon, right? What a pity\"",
          ja: "「きれいだけど、すぐに枯れちゃうよね？残念」",
          "zh-CN": "「虽然漂亮，但很快就会凋谢吧？真可惜」",
          "zh-TW": "「雖然漂亮，但很快就會凋謝吧？真可惜」",
          vi: "\"Đẹp đấy, nhưng sẽ sớm héo úa phải không? Tiếc quá\"",
          id: "\"Cantik sih, tapi akan cepat layu kan? Sayang sekali\""
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신의 성격을 한 단어로 정의한다면?",
      en: "If you define your personality in one word?",
      ja: "あなたの性格を一言で定義するとしたら？",
      "zh-CN": "如果用一句话定义你的性格？",
      "zh-TW": "如果用一句話定義你的性格？",
      vi: "Nếu bạn định nghĩa tính cách của mình bằng một từ?",
      id: "Jika Anda mendefinisikan kepribadian Anda dalam satu kata?"
    },
    options: [
      {
        text: {
          ko: "열정적인",
          en: "Passionate",
          ja: "情熱的な",
          "zh-CN": "热情的",
          "zh-TW": "熱情的",
          vi: "Đam mê",
          id: "Bergairah"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "차분한",
          en: "Calm",
          ja: "落ち着いた",
          "zh-CN": "平静的",
          "zh-TW": "平靜的",
          vi: "Bình tĩnh",
          id: "Tenang"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "순수한",
          en: "Pure",
          ja: "純粋な",
          "zh-CN": "纯洁的",
          "zh-TW": "純潔的",
          vi: "Thuần khiết",
          id: "Murni"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "누군가에게 고백을 한다면 어떤 방식일까요?",
      en: "If you were to confess to someone, what way would you do it?",
      ja: "誰かに告白するとしたら、どんな方法？",
      "zh-CN": "如果要向某人告白，你会用什么方式？",
      "zh-TW": "如果要向某人告白，你會用什麼方式？",
      vi: "Nếu bạn thổ lộ với ai đó, bạn sẽ làm theo cách nào?",
      id: "Jika Anda akan mengakui cinta pada seseorang, cara apa yang akan Anda gunakan?"
    },
    options: [
      {
        text: {
          ko: "화려한 이벤트와 함께 직설적으로 \"나랑 사귈래?\"",
          en: "Directly say \"Will you date me?\" with a flashy event",
          ja: "華やかなイベントと一緒に率直に「私と付き合う？」",
          "zh-CN": "在华丽的活动上直接说「和我交往吧？」",
          "zh-TW": "在華麗的活動上直接說「和我交往吧？」",
          vi: "Nói thẳng \"Bạn có muốn hẹn hò với tôi không?\" cùng một sự kiện hoành tráng",
          id: "Langsung bilang \"Mau pacaran sama saya?\" dengan acara yang meriah"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "진심을 담은 손편지와 함께 은은하게 마음 전달",
          en: "Gently convey feelings with a heartfelt handwritten letter",
          ja: "真心を込めた手紙と一緒に控えめに気持ちを伝える",
          "zh-CN": "用充满真心的手写信温柔地传达心意",
          "zh-TW": "用充滿真心的手寫信溫柔地傳達心意",
          vi: "Nhẹ nhàng truyền đạt cảm xúc bằng một bức thư viết tay chân thành",
          id: "Menyampaikan perasaan dengan lembut melalui surat tulisan tangan yang tulus"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "장난스럽지만 센스 있게 툭, 챙겨주며 고백",
          en: "Playfully but sensibly confess while taking care of them",
          ja: "遊び心があるがセンス良く、さりげなく気遣いながら告白",
          "zh-CN": "开玩笑但很有品位地，在照顾对方的同时告白",
          "zh-TW": "開玩笑但很有品位地，在照顧對方的同時告白",
          vi: "Vui đùa nhưng tinh tế, thổ lộ trong khi chăm sóc họ",
          id: "Bermain-main tapi dengan cerdas, mengakui sambil merawat mereka"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신이 꿈꾸는 이상적인 집의 모습은?",
      en: "What's your ideal dream home like?",
      ja: "あなたが夢見る理想的な家の姿は？",
      "zh-CN": "你梦想的理想家园是什么样子？",
      "zh-TW": "你夢想的理想家園是什麼樣子？",
      vi: "Ngôi nhà lý tưởng trong mơ của bạn như thế nào?",
      id: "Seperti apa rumah impian ideal Anda?"
    },
    options: [
      {
        text: {
          ko: "화려한 샹들리에가 있는 고급스러운 펜트하우스",
          en: "Luxurious penthouse with a gorgeous chandelier",
          ja: "華やかなシャンデリアがある高級なペントハウス",
          "zh-CN": "有华丽吊灯的豪华顶层公寓",
          "zh-TW": "有華麗吊燈的豪華頂層公寓",
          vi: "Căn penthouse sang trọng với đèn chùm lộng lẫy",
          id: "Penthouse mewah dengan lampu gantung yang megah"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "식물이 가득하고 햇살이 잘 드는 아늑한 주택",
          en: "Cozy house full of plants with good sunlight",
          ja: "植物がたくさんあり、日当たりの良い居心地の良い家",
          "zh-CN": "充满植物、阳光充足的舒适房屋",
          "zh-TW": "充滿植物、陽光充足的舒適房屋",
          vi: "Ngôi nhà ấm cúng đầy cây cối với ánh nắng tốt",
          id: "Rumah nyaman penuh tanaman dengan sinar matahari yang baik"
        },
        types: ["Type3", "Type4"]
      },
      {
        text: {
          ko: "군더더기 없이 깔끔하고 모던한 미니멀 하우스",
          en: "Clean and modern minimal house without clutter",
          ja: "無駄がなく清潔でモダンなミニマルハウス",
          "zh-CN": "干净现代、没有多余装饰的极简房屋",
          "zh-TW": "乾淨現代、沒有多餘裝飾的極簡房屋",
          vi: "Ngôi nhà tối giản sạch sẽ và hiện đại không có đồ thừa",
          id: "Rumah minimalis yang bersih dan modern tanpa barang berlebihan"
        },
        types: ["Type2", "Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "낯선 여행지에서 길을 잃었다면?",
      en: "If you got lost in an unfamiliar travel destination?",
      ja: "見知らぬ旅行先で道に迷ったら？",
      "zh-CN": "如果在陌生的旅行地迷路了？",
      "zh-TW": "如果在陌生的旅行地迷路了？",
      vi: "Nếu bạn bị lạc ở một điểm đến du lịch xa lạ?",
      id: "Jika Anda tersesat di destinasi perjalanan yang tidak dikenal?"
    },
    options: [
      {
        text: {
          ko: "당황하지 않고 현지인에게 말을 걸어 길을 묻는다",
          en: "Don't panic and ask locals for directions",
          ja: "慌てずに現地の人に話しかけて道を尋ねる",
          "zh-CN": "不慌张，向当地人问路",
          "zh-TW": "不慌張，向當地人問路",
          vi: "Không hoảng sợ và hỏi người dân địa phương đường đi",
          id: "Tidak panik dan bertanya arah pada penduduk lokal"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "지도를 켜고 내 위치를 파악하며 논리적으로 길을 찾는다",
          en: "Turn on the map, identify my location, and find the way logically",
          ja: "地図を開いて自分の位置を把握し、論理的に道を探す",
          "zh-CN": "打开地图，确定自己的位置，逻辑性地找路",
          "zh-TW": "打開地圖，確定自己的位置，邏輯性地找路",
          vi: "Bật bản đồ, xác định vị trí của mình và tìm đường một cách logic",
          id: "Buka peta, identifikasi lokasi saya, dan cari jalan secara logis"
        },
        types: ["Type2", "Type5"]
      },
      {
        text: {
          ko: "\"이것도 여행의 묘미지!\" 하며 발길 닿는 대로 구경한다",
          en: "\"This is also part of the travel charm!\" and explore wherever my feet take me",
          ja: "「これも旅の醍醐味だ！」と言って足の向くままに見て回る",
          "zh-CN": "「这也是旅行的魅力！」随性游览",
          "zh-TW": "「這也是旅行的魅力！」隨性遊覽",
          vi: "\"Đây cũng là sự quyến rũ của du lịch!\" và khám phá bất cứ nơi nào chân tôi đưa đến",
          id: "\"Ini juga bagian dari pesona perjalanan!\" dan jelajahi ke mana pun kaki membawa"
        },
        types: ["Type3", "Type4"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 '아름다움'이란 무엇인가요?",
      en: "What does 'beauty' mean to you?",
      ja: "あなたにとって「美しさ」とは何ですか？",
      "zh-CN": "对你来说'美'是什么？",
      "zh-TW": "對你來說「美」是什麼？",
      vi: "'Vẻ đẹp' đối với bạn là gì?",
      id: "Apa arti 'keindahan' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "눈길을 사로잡는 강렬함과 화려함",
          en: "Intensity and splendor that catches the eye",
          ja: "目を引く強烈さと華やかさ",
          "zh-CN": "吸引眼球的强烈和华丽",
          "zh-TW": "吸引眼球的強烈和華麗",
          vi: "Cường độ và sự lộng lẫy thu hút ánh nhìn",
          id: "Intensitas dan kemewahan yang menarik perhatian"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "내면에서 우러나오는 깊이와 우아함",
          en: "Depth and elegance that comes from within",
          ja: "内面から湧き出る深さと優雅さ",
          "zh-CN": "从内心流露出的深度和优雅",
          "zh-TW": "從內心流露出的深度和優雅",
          vi: "Độ sâu và sự thanh lịch đến từ bên trong",
          id: "Kedalaman dan keanggunan yang berasal dari dalam"
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "꾸밈없는 자연스러움과 깨끗함",
          en: "Unadorned naturalness and cleanliness",
          ja: "飾り気のない自然さと清潔さ",
          "zh-CN": "不加修饰的自然和干净",
          "zh-TW": "不加修飾的自然和乾淨",
          vi: "Sự tự nhiên không trang điểm và sự sạch sẽ",
          id: "Kewajaran tanpa hiasan dan kebersihan"
        },
        types: ["Type5"]
      }
    ]
  }
];

export const phase2BirthGemFlowerResults: Phase2BirthGemFlowerResult[] = [
  {
    type: "Type1",
    emoji: "🌹",
    title: {
      ko: "불타는 열정, 루비 & 장미",
      en: "Burning Passion, Ruby & Rose",
      ja: "燃える情熱、ルビー＆バラ",
      "zh-CN": "燃烧的激情，红宝石与玫瑰",
      "zh-TW": "燃燒的激情，紅寶石與玫瑰",
      vi: "Đam mê cháy bỏng, Ruby & Hoa hồng",
      id: "Gairah Membara, Ruby & Mawar"
    },
    shortDescription: {
      ko: "\"당신은 세상의 주인공입니다.\"",
      en: "\"You are the protagonist of the world.\"",
      ja: "「あなたは世界の主人公です。」",
      "zh-CN": "「你是世界的主角。」",
      "zh-TW": "「你是世界的主角。」",
      vi: "\"Bạn là nhân vật chính của thế giới.\"",
      id: "\"Anda adalah protagonis dunia.\""
    },
    description: {
      ko: "당신은 루비처럼 강렬하고 장미처럼 매혹적인 사람입니다. 어디서나 존재감을 드러내며, 자신감 넘치는 태도로 주변을 이끕니다. 뜨거운 열정과 사랑을 상징하며, 목표를 향해 직진하는 에너지가 넘칩니다.",
      en: "You are someone as intense as a ruby and as captivating as a rose. You show your presence everywhere and lead those around you with a confident attitude. You symbolize hot passion and love, and have overflowing energy to go straight toward your goals.",
      ja: "あなたはルビーのように強烈で、バラのように魅力的な人です。どこでも存在感を示し、自信に満ちた態度で周囲を導きます。熱い情熱と愛を象徴し、目標に向かって一直線に進むエネルギーが溢れています。",
      "zh-CN": "你是一个像红宝石一样强烈、像玫瑰一样迷人的人。你在任何地方都展现存在感，以充满自信的态度引领周围的人。你象征着炽热的激情和爱情，拥有朝着目标直进的充沛能量。",
      "zh-TW": "你是一個像紅寶石一樣強烈、像玫瑰一樣迷人的人。你在任何地方都展現存在感，以充滿自信的態度引領周圍的人。你象徵著熾熱的激情和愛情，擁有朝著目標直進的充沛能量。",
      vi: "Bạn là người mạnh mẽ như ruby và quyến rũ như hoa hồng. Bạn thể hiện sự hiện diện ở khắp mọi nơi và dẫn dắt những người xung quanh với thái độ tự tin. Bạn tượng trưng cho đam mê nồng cháy và tình yêu, và có năng lượng dồi dào để tiến thẳng về phía mục tiêu.",
      id: "Anda adalah seseorang yang intens seperti ruby dan memikat seperti mawar. Anda menunjukkan kehadiran di mana-mana dan memimpin orang di sekitar dengan sikap percaya diri. Anda melambangkan gairah dan cinta yang membara, dan memiliki energi yang meluap untuk maju lurus menuju tujuan."
    },
    gem: {
      ko: "루비 (Ruby) - 열정, 용기, 자유",
      en: "Ruby - Passion, Courage, Freedom",
      ja: "ルビー - 情熱、勇気、自由",
      "zh-CN": "红宝石 - 激情、勇气、自由",
      "zh-TW": "紅寶石 - 激情、勇氣、自由",
      vi: "Ruby - Đam mê, Dũng cảm, Tự do",
      id: "Ruby - Gairah, Keberanian, Kebebasan"
    },
    flower: {
      ko: "장미 (Rose) - 사랑, 아름다움, 낭만",
      en: "Rose - Love, Beauty, Romance",
      ja: "バラ - 愛、美しさ、ロマンス",
      "zh-CN": "玫瑰 - 爱情、美丽、浪漫",
      "zh-TW": "玫瑰 - 愛情、美麗、浪漫",
      vi: "Hoa hồng - Tình yêu, Vẻ đẹp, Lãng mạn",
      id: "Mawar - Cinta, Keindahan, Romantis"
    },
    recommendation: {
      ko: "레드 계열의 립스틱, 골드 액세서리",
      en: "Red-toned lipstick, gold accessories",
      ja: "レッド系のリップスティック、ゴールドアクセサリー",
      "zh-CN": "红色系口红，金色配饰",
      "zh-TW": "紅色系口紅，金色配飾",
      vi: "Son tông đỏ, phụ kiện vàng",
      id: "Lipstik nuansa merah, aksesori emas"
    }
  },
  {
    type: "Type2",
    emoji: "⚜️",
    title: {
      ko: "깊은 지혜, 사파이어 & 백합",
      en: "Deep Wisdom, Sapphire & Lily",
      ja: "深い知恵、サファイア＆ユリ",
      "zh-CN": "深邃的智慧，蓝宝石与百合",
      "zh-TW": "深邃的智慧，藍寶石與百合",
      vi: "Trí tuệ sâu sắc, Sapphire & Hoa loa kèn",
      id: "Kebijaksanaan Mendalam, Safir & Lili"
    },
    shortDescription: {
      ko: "\"당신은 고요하지만 깊은 바다 같습니다.\"",
      en: "\"You are like a calm but deep sea.\"",
      ja: "「あなたは静かだが深い海のようです。」",
      "zh-CN": "「你像平静但深邃的大海。」",
      "zh-TW": "「你像平靜但深邃的大海。」",
      vi: "\"Bạn giống như biển cả bình yên nhưng sâu thẳm.\"",
      id: "\"Anda seperti laut yang tenang tapi dalam.\""
    },
    description: {
      ko: "당신은 사파이어처럼 신비롭고 백합처럼 고결한 사람입니다. 차분하고 이성적이며, 겉으로 드러내기보다 내면의 깊이를 중요하게 생각합니다. 주변 사람들에게 신뢰를 주며, 지혜로운 조언자가 되어줍니다.",
      en: "You are someone as mysterious as a sapphire and as noble as a lily. You are calm and rational, and value inner depth more than outward display. You give trust to those around you and become a wise advisor.",
      ja: "あなたはサファイアのように神秘的で、ユリのように高潔な人です。落ち着いていて理性的で、外に表すことより内面の深さを大切にします。周囲の人々に信頼を与え、賢明な助言者になります。",
      "zh-CN": "你是一个像蓝宝石一样神秘、像百合一样高贵的人。你平静理性，比起外在表现更重视内在深度。你给周围的人带来信任，成为明智的顾问。",
      "zh-TW": "你是一個像藍寶石一樣神秘、像百合一樣高貴的人。你平靜理性，比起外在表現更重視內在深度。你給周圍的人帶來信任，成為明智的顧問。",
      vi: "Bạn là người bí ẩn như sapphire và cao quý như hoa loa kèn. Bạn bình tĩnh và lý trí, và coi trọng chiều sâu bên trong hơn là thể hiện bên ngoài. Bạn mang lại niềm tin cho những người xung quanh và trở thành cố vấn khôn ngoan.",
      id: "Anda adalah seseorang yang misterius seperti safir dan mulia seperti lili. Anda tenang dan rasional, dan menghargai kedalaman batin lebih dari tampilan luar. Anda memberikan kepercayaan kepada orang di sekitar dan menjadi penasihat yang bijaksana."
    },
    gem: {
      ko: "사파이어 (Sapphire) - 지혜, 진실, 평화",
      en: "Sapphire - Wisdom, Truth, Peace",
      ja: "サファイア - 知恵、真実、平和",
      "zh-CN": "蓝宝石 - 智慧、真理、和平",
      "zh-TW": "藍寶石 - 智慧、真理、和平",
      vi: "Sapphire - Trí tuệ, Sự thật, Hòa bình",
      id: "Safir - Kebijaksanaan, Kebenaran, Kedamaian"
    },
    flower: {
      ko: "백합 (Lily) - 순결, 변함없는 사랑",
      en: "Lily - Purity, Unchanging Love",
      ja: "ユリ - 純潔、変わらない愛",
      "zh-CN": "百合 - 纯洁、不变的爱",
      "zh-TW": "百合 - 純潔、不變的愛",
      vi: "Hoa loa kèn - Sự thuần khiết, Tình yêu bất biến",
      id: "Lili - Kemurnian, Cinta yang Tidak Berubah"
    },
    recommendation: {
      ko: "블루/네이비 컬러의 의상, 실버 주얼리",
      en: "Blue/navy colored clothing, silver jewelry",
      ja: "ブルー/ネイビーカラーの服装、シルバージュエリー",
      "zh-CN": "蓝色/海军蓝服装，银色珠宝",
      "zh-TW": "藍色/海軍藍服裝，銀色珠寶",
      vi: "Trang phục màu xanh dương/navy, trang sức bạc",
      id: "Pakaian warna biru/navy, perhiasan perak"
    }
  },
  {
    type: "Type3",
    emoji: "🌻",
    title: {
      ko: "밝은 에너지, 시트린 & 해바라기",
      en: "Bright Energy, Citrine & Sunflower",
      ja: "明るいエネルギー、シトリン＆ヒマワリ",
      "zh-CN": "明亮的能量，黄水晶与向日葵",
      "zh-TW": "明亮的能量，黃水晶與向日葵",
      vi: "Năng lượng tươi sáng, Citrine & Hoa hướng dương",
      id: "Energi Cerah, Citrine & Bunga Matahari"
    },
    shortDescription: {
      ko: "\"당신은 긍정의 아이콘입니다.\"",
      en: "\"You are an icon of positivity.\"",
      ja: "「あなたはポジティブのアイコンです。」",
      "zh-CN": "「你是积极向上的象征。」",
      "zh-TW": "「你是積極向上的象徵。」",
      vi: "\"Bạn là biểu tượng của sự tích cực.\"",
      id: "\"Anda adalah ikon positivitas.\""
    },
    description: {
      ko: "당신은 시트린처럼 반짝이고 해바라기처럼 따뜻한 사람입니다. 주변을 밝게 비추는 긍정적인 에너지를 가지고 있으며, 사람들에게 행복을 전파합니다. 사교적이고 유쾌하여 어디서나 환영받습니다.",
      en: "You are someone as sparkling as citrine and as warm as a sunflower. You have positive energy that brightens your surroundings and spread happiness to people. You are sociable and cheerful, welcomed everywhere.",
      ja: "あなたはシトリンのように輝き、ヒマワリのように温かい人です。周囲を明るく照らすポジティブなエネルギーを持ち、人々に幸せを広めます。社交的で愉快で、どこでも歓迎されます。",
      "zh-CN": "你是一个像黄水晶一样闪亮、像向日葵一样温暖的人。你拥有照亮周围的积极能量，向人们传播幸福。你善于社交且愉快，在任何地方都受到欢迎。",
      "zh-TW": "你是一個像黃水晶一樣閃亮、像向日葵一樣溫暖的人。你擁有照亮周圍的積極能量，向人們傳播幸福。你善於社交且愉快，在任何地方都受到歡迎。",
      vi: "Bạn là người lấp lánh như citrine và ấm áp như hoa hướng dương. Bạn có năng lượng tích cực làm sáng môi trường xung quanh và lan tỏa hạnh phúc đến mọi người. Bạn hòa đồng và vui vẻ, được chào đón ở khắp mọi nơi.",
      id: "Anda adalah seseorang yang berkilau seperti citrine dan hangat seperti bunga matahari. Anda memiliki energi positif yang menerangi sekeliling dan menyebarkan kebahagiaan kepada orang-orang. Anda ramah dan ceria, disambut di mana-mana."
    },
    gem: {
      ko: "시트린 (Citrine) - 번영, 성공, 활력",
      en: "Citrine - Prosperity, Success, Vitality",
      ja: "シトリン - 繁栄、成功、活力",
      "zh-CN": "黄水晶 - 繁荣、成功、活力",
      "zh-TW": "黃水晶 - 繁榮、成功、活力",
      vi: "Citrine - Thịnh vượng, Thành công, Sức sống",
      id: "Citrine - Kemakmuran, Kesuksesan, Vitalitas"
    },
    flower: {
      ko: "해바라기 (Sunflower) - 숭배, 기다림, 긍정",
      en: "Sunflower - Adoration, Waiting, Positivity",
      ja: "ヒマワリ - 崇拝、待つこと、ポジティブ",
      "zh-CN": "向日葵 - 崇拜、等待、积极",
      "zh-TW": "向日葵 - 崇拜、等待、積極",
      vi: "Hoa hướng dương - Sùng bái, Chờ đợi, Tích cực",
      id: "Bunga Matahari - Pemujaan, Menunggu, Positivitas"
    },
    recommendation: {
      ko: "옐로우/오렌지 포인트 소품, 시트러스 향수",
      en: "Yellow/orange point accessories, citrus perfume",
      ja: "イエロー/オレンジのポイント小物、シトラス香水",
      "zh-CN": "黄色/橙色点缀配饰，柑橘调香水",
      "zh-TW": "黃色/橙色點綴配飾，柑橘調香水",
      vi: "Phụ kiện điểm nhấn vàng/cam, nước hoa cam quýt",
      id: "Aksesori aksen kuning/oranye, parfum jeruk"
    }
  },
  {
    type: "Type4",
    emoji: "🔮",
    title: {
      ko: "신비로운 아우라, 자수정 & 제비꽃",
      en: "Mysterious Aura, Amethyst & Violet",
      ja: "神秘的なオーラ、アメジスト＆スミレ",
      "zh-CN": "神秘的光环，紫水晶与紫罗兰",
      "zh-TW": "神秘的光環，紫水晶與紫羅蘭",
      vi: "Hào quang bí ẩn, Amethyst & Hoa tím",
      id: "Aura Misterius, Amethyst & Violet"
    },
    shortDescription: {
      ko: "\"당신은 보이지 않는 것을 봅니다.\"",
      en: "\"You see what cannot be seen.\"",
      ja: "「あなたは見えないものを見ます。」",
      "zh-CN": "「你能看到看不见的东西。」",
      "zh-TW": "「你能看到看不見的東西。」",
      vi: "\"Bạn nhìn thấy những gì không thể nhìn thấy.\"",
      id: "\"Anda melihat apa yang tidak bisa dilihat.\""
    },
    description: {
      ko: "당신은 자수정처럼 영롱하고 제비꽃처럼 섬세한 사람입니다. 남다른 직관력과 감수성을 가지고 있으며, 예술적인 감각이 뛰어납니다. 신비로운 매력으로 사람들을 끌어당기지만, 쉽게 속마음을 보여주지 않습니다.",
      en: "You are someone as brilliant as amethyst and as delicate as a violet. You have exceptional intuition and sensitivity, and excel in artistic sense. You attract people with your mysterious charm, but don't easily show your inner thoughts.",
      ja: "あなたはアメジストのように輝き、スミレのように繊細な人です。並外れた直感力と感受性を持ち、芸術的なセンスに優れています。神秘的な魅力で人々を引き寄せますが、簡単に本心を見せません。",
      "zh-CN": "你是一个像紫水晶一样闪亮、像紫罗兰一样精致的人。你拥有非凡的直觉和敏感性，在艺术感方面表现出色。你以神秘的魅力吸引人们，但不会轻易表露内心想法。",
      "zh-TW": "你是一個像紫水晶一樣閃亮、像紫羅蘭一樣精緻的人。你擁有非凡的直覺和敏感性，在藝術感方面表現出色。你以神秘的魅力吸引人們，但不會輕易表露內心想法。",
      vi: "Bạn là người lấp lánh như amethyst và tinh tế như hoa tím. Bạn có trực giác và sự nhạy cảm đặc biệt, và xuất sắc trong cảm nhận nghệ thuật. Bạn thu hút mọi người bằng sức hút bí ẩn, nhưng không dễ dàng bộc lộ suy nghĩ bên trong.",
      id: "Anda adalah seseorang yang cemerlang seperti amethyst dan halus seperti violet. Anda memiliki intuisi dan kepekaan yang luar biasa, dan unggul dalam rasa artistik. Anda menarik orang dengan pesona misterius, tapi tidak mudah menunjukkan pikiran batin."
    },
    gem: {
      ko: "자수정 (Amethyst) - 평화, 성실, 직관",
      en: "Amethyst - Peace, Sincerity, Intuition",
      ja: "アメジスト - 平和、誠実、直感",
      "zh-CN": "紫水晶 - 和平、真诚、直觉",
      "zh-TW": "紫水晶 - 和平、真誠、直覺",
      vi: "Amethyst - Hòa bình, Chân thành, Trực giác",
      id: "Amethyst - Kedamaian, Ketulusan, Intuisi"
    },
    flower: {
      ko: "제비꽃 (Violet) - 겸손, 성실, 작은 행복",
      en: "Violet - Humility, Sincerity, Small Happiness",
      ja: "スミレ - 謙遜、誠実、小さな幸せ",
      "zh-CN": "紫罗兰 - 谦逊、真诚、小幸福",
      "zh-TW": "紫羅蘭 - 謙遜、真誠、小幸福",
      vi: "Hoa tím - Khiêm tốn, Chân thành, Hạnh phúc nhỏ",
      id: "Violet - Kerendahan Hati, Ketulusan, Kebahagiaan Kecil"
    },
    recommendation: {
      ko: "보라색 스카프, 몽환적인 무드등",
      en: "Purple scarf, dreamy mood light",
      ja: "紫のスカーフ、幻想的なムードライト",
      "zh-CN": "紫色围巾，梦幻氛围灯",
      "zh-TW": "紫色圍巾，夢幻氛圍燈",
      vi: "Khăn quàng màu tím, đèn mood mơ màng",
      id: "Syal ungu, lampu suasana yang indah"
    }
  },
  {
    type: "Type5",
    emoji: "🌸",
    title: {
      ko: "고귀한 순수, 다이아몬드 & 벚꽃",
      en: "Noble Purity, Diamond & Cherry Blossom",
      ja: "高貴な純粋さ、ダイヤモンド＆桜",
      "zh-CN": "高贵的纯洁，钻石与樱花",
      "zh-TW": "高貴的純潔，鑽石與櫻花",
      vi: "Sự thuần khiết cao quý, Kim cương & Hoa anh đào",
      id: "Kemurnian Mulia, Berlian & Bunga Sakura"
    },
    shortDescription: {
      ko: "\"당신은 변하지 않는 가치를 지녔습니다.\"",
      en: "\"You possess unchanging value.\"",
      ja: "「あなたは変わらない価値を持っています。」",
      "zh-CN": "「你拥有不变的价值。」",
      "zh-TW": "「你擁有不變的價值。」",
      vi: "\"Bạn sở hữu giá trị bất biến.\"",
      id: "\"Anda memiliki nilai yang tidak berubah.\""
    },
    description: {
      ko: "당신은 다이아몬드처럼 단단하고 벚꽃처럼 청초한 사람입니다. 완벽함을 추구하며, 어떤 상황에서도 흔들리지 않는 신념을 가지고 있습니다. 맑고 깨끗한 이미지로 누구에게나 호감을 줍니다.",
      en: "You are someone as solid as a diamond and as fresh as cherry blossoms. You pursue perfection and have unwavering beliefs in any situation. You give a good impression to everyone with your clear and clean image.",
      ja: "あなたはダイヤモンドのように固く、桜のように清らかな人です。完璧を追求し、どんな状況でも揺るがない信念を持っています。清らかで清潔なイメージで誰にでも好印象を与えます。",
      "zh-CN": "你是一个像钻石一样坚固、像樱花一样清纯的人。你追求完美，在任何情况下都有不可动摇的信念。你以清澈干净的形象给所有人留下好印象。",
      "zh-TW": "你是一個像鑽石一樣堅固、像櫻花一樣清純的人。你追求完美，在任何情況下都有不可動搖的信念。你以清澈乾淨的形象給所有人留下好印象。",
      vi: "Bạn là người cứng rắn như kim cương và tươi mới như hoa anh đào. Bạn theo đuổi sự hoàn hảo và có niềm tin không lay chuyển trong mọi tình huống. Bạn tạo ấn tượng tốt với mọi người bằng hình ảnh trong sáng và sạch sẽ.",
      id: "Anda adalah seseorang yang kokoh seperti berlian dan segar seperti bunga sakura. Anda mengejar kesempurnaan dan memiliki keyakinan yang tidak tergoyahkan dalam situasi apa pun. Anda memberikan kesan baik kepada semua orang dengan citra yang jernih dan bersih."
    },
    gem: {
      ko: "다이아몬드 (Diamond) - 영원, 순수, 불멸",
      en: "Diamond - Eternity, Purity, Immortality",
      ja: "ダイヤモンド - 永遠、純粋、不滅",
      "zh-CN": "钻石 - 永恒、纯洁、不朽",
      "zh-TW": "鑽石 - 永恆、純潔、不朽",
      vi: "Kim cương - Vĩnh cửu, Thuần khiết, Bất tử",
      id: "Berlian - Keabadian, Kemurnian, Keabadian"
    },
    flower: {
      ko: "벚꽃 (Cherry Blossom) - 순결, 절세미인",
      en: "Cherry Blossom - Purity, Peerless Beauty",
      ja: "桜 - 純潔、絶世の美人",
      "zh-CN": "樱花 - 纯洁、绝世美人",
      "zh-TW": "櫻花 - 純潔、絕世美人",
      vi: "Hoa anh đào - Thuần khiết, Mỹ nhân tuyệt thế",
      id: "Bunga Sakura - Kemurnian, Kecantikan Tiada Tara"
    },
    recommendation: {
      ko: "크리스탈 액세서리, 화이트 셔츠",
      en: "Crystal accessories, white shirt",
      ja: "クリスタルアクセサリー、ホワイトシャツ",
      "zh-CN": "水晶配饰，白色衬衫",
      "zh-TW": "水晶配飾，白色襯衫",
      vi: "Phụ kiện pha lê, áo sơ mi trắng",
      id: "Aksesori kristal, kemeja putih"
    }
  }
];

// 태어난 달에 따른 보너스 점수
export function getBirthMonthBonus(birthMonth: number): string {
  if (birthMonth >= 6 && birthMonth <= 8) {
    return "Type1"; // 여름의 열정
  } else if (birthMonth >= 9 && birthMonth <= 10) {
    return "Type2"; // 가을의 지혜
  } else if (birthMonth === 5 || birthMonth === 11) {
    return "Type3"; // 계절의 여왕/결실
  } else if (birthMonth === 1 || birthMonth === 2 || birthMonth === 12) {
    return "Type4"; // 겨울의 신비
  } else if (birthMonth >= 3 && birthMonth <= 4) {
    return "Type5"; // 봄의 순수
  }
  return "Type1"; // 기본값
}

// 결과 계산 함수
export function calculatePhase2BirthGemFlowerResult(
  birthMonth: number,
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  // Step 1: 태어난 달 보너스 점수 (+3점)
  const monthBonus = getBirthMonthBonus(birthMonth);
  
  // Step 2: 각 타입별 점수 계산
  const typeScores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0
  };
  
  // 보너스 점수 추가
  typeScores[monthBonus] += 3;
  
  // 질문별 점수 누적 (+1점)
  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });
  
  // 가장 높은 점수를 가진 타입 찾기
  let maxScore = -1;
  let resultType = "Type1";
  
  // 동점일 경우 우선순위: Type 1 > Type 5 > Type 3 > Type 2 > Type 4
  const priority = ["Type1", "Type5", "Type3", "Type2", "Type4"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  
  return resultType;
}
