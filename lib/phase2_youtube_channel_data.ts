export interface Phase2YoutubeChannelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: string[]; // 각 선택지가 점수를 주는 Type 배열 (예: ['Type1'] 또는 ['Type2', 'Type3'])
  }[];
}

export interface Phase2YoutubeChannelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  mainContent: Record<string, string>; // 주력 콘텐츠
  cheatKey: Record<string, string>; // 떡상 치트키
  collabPartner: Record<string, string>; // 추천 합방 파트너
}

export const phase2YoutubeChannelQuestions: Phase2YoutubeChannelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "유튜브 채널을 개설하려는 주된 이유는?",
      en: "What is the main reason you want to start a YouTube channel?",
      ja: "YouTubeチャンネルを開設したい主な理由は？",
      'zh-CN': "你想开设YouTube频道的主要原因是？",
      'zh-TW': "你想開設YouTube頻道的主要原因是？",
      vi: "Lý do chính bạn muốn bắt đầu một kênh YouTube là gì?",
      id: "Apa alasan utama Anda ingin memulai saluran YouTube?"
    },
    options: [
      {
        text: {
          ko: "나의 평범하지만 소중한 일상을 기록하고 싶어서",
          en: "I want to record my ordinary but precious daily life",
          ja: "平凡だけど大切な日常を記録したいから",
          'zh-CN': "想要记录我平凡但珍贵的日常生活",
          'zh-TW': "想要記錄我平凡但珍貴的日常生活",
          vi: "Tôi muốn ghi lại cuộc sống hàng ngày bình thường nhưng quý giá của mình",
          id: "Saya ingin merekam kehidupan sehari-hari yang biasa namun berharga"
        },
        scores: ["Type1"]
      },
      {
        text: {
          ko: "남들을 웃기고 즐겁게 해주는 게 좋아서",
          en: "I like making others laugh and happy",
          ja: "人を笑わせて楽しくさせることが好きだから",
          'zh-CN': "喜欢让别人笑和开心",
          'zh-TW': "喜歡讓別人笑和開心",
          vi: "Tôi thích làm cho người khác cười và vui vẻ",
          id: "Saya suka membuat orang lain tertawa dan senang"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "내가 가진 정보나 지식을 공유하고 싶어서",
          en: "I want to share the information and knowledge I have",
          ja: "自分が持っている情報や知識を共有したいから",
          'zh-CN': "想要分享我拥有的信息和知识",
          'zh-TW': "想要分享我擁有的信息和知識",
          vi: "Tôi muốn chia sẻ thông tin và kiến thức mà tôi có",
          id: "Saya ingin berbagi informasi dan pengetahuan yang saya miliki"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "맛있는 걸 먹거나 좋아하는 게임을 실컷 하고 싶어서",
          en: "I want to eat delicious food or play my favorite games to my heart's content",
          ja: "美味しいものを食べたり、好きなゲームを存分にしたいから",
          'zh-CN': "想要尽情享用美食或玩喜欢的游戏",
          'zh-TW': "想要盡情享用美食或玩喜歡的遊戲",
          vi: "Tôi muốn ăn đồ ngon hoặc chơi những trò chơi yêu thích thỏa thích",
          id: "Saya ingin makan makanan lezat atau bermain game favorit sepuasnya"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "가장 자신 있는 나의 재능은?",
      en: "What is my most confident talent?",
      ja: "最も自信のある私の才能は？",
      'zh-CN': "我最自信的才能是什么？",
      'zh-TW': "我最自信的才能是什麼？",
      vi: "Tài năng mà tôi tự tin nhất là gì?",
      id: "Apa bakat saya yang paling percaya diri?"
    },
    options: [
      {
        text: {
          ko: "감각적인 영상 편집과 보정 능력",
          en: "Stylish video editing and color correction skills",
          ja: "センスの良い動画編集と補正能力",
          'zh-CN': "时尚的视频编辑和调色能力",
          'zh-TW': "時尚的視頻編輯和調色能力",
          vi: "Kỹ năng chỉnh sửa và chỉnh màu video có gu",
          id: "Kemampuan pengeditan video yang stylish dan koreksi warna"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "쉴 새 없이 떠들 수 있는 화려한 입담",
          en: "Brilliant talking skills that never stop",
          ja: "休む間もなく話し続けられる華麗な口調",
          'zh-CN': "能说会道的口才",
          'zh-TW': "能說會道的口才",
          vi: "Kỹ năng nói chuyện sáng bóng không bao giờ ngừng",
          id: "Keterampilan berbicara yang brilian yang tidak pernah berhenti"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "남들보다 뛰어난 논리적인 분석력",
          en: "Superior logical analytical skills",
          ja: "他の人よりも優れた論理的分析力",
          'zh-CN': "卓越的逻辑分析能力",
          'zh-TW': "卓越的邏輯分析能力",
          vi: "Kỹ năng phân tích logic vượt trội",
          id: "Keterampilan analitis logis yang unggul"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "뭐든 잘 먹거나 게임 컨트롤이 좋은 피지컬",
          en: "Great appetite or excellent game control/physical skills",
          ja: "何でもよく食べるか、ゲームのコントロールが良いフィジカル",
          'zh-CN': "胃口好或游戏操作能力强",
          'zh-TW': "胃口好或遊戲操作能力強",
          vi: "Khả năng ăn tốt hoặc kỹ năng điều khiển game/ thể chất xuất sắc",
          id: "Nafsu makan besar atau keterampilan kontrol game/kebugaran yang sangat baik"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "카메라 앞에 섰을 때 당신의 모습은?",
      en: "What are you like when standing in front of the camera?",
      ja: "カメラの前に立つとき、あなたの様子は？",
      'zh-CN': "站在镜头前时你的样子是？",
      'zh-TW': "站在鏡頭前時你的樣子是？",
      vi: "Bạn như thế nào khi đứng trước camera?",
      id: "Bagaimana Anda saat berdiri di depan kamera?"
    },
    options: [
      {
        text: {
          ko: "얼굴보다는 목소리나 손, 풍경 위주로 찍고 싶다",
          en: "I want to focus on voice, hands, and scenery rather than my face",
          ja: "顔よりも声や手、風景を中心に撮りたい",
          'zh-CN': "想要以声音、手、风景为主，而不是脸部",
          'zh-TW': "想要以聲音、手、風景為主，而不是臉部",
          vi: "Tôi muốn tập trung vào giọng nói, bàn tay và phong cảnh hơn là khuôn mặt",
          id: "Saya ingin fokus pada suara, tangan, dan pemandangan daripada wajah saya"
        },
        scores: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "풀메이크업 장착! 비주얼을 최대한 뽐낸다",
          en: "Full makeup on! Show off my visuals to the max",
          ja: "フルメイク装着！ビジュアルを最大限にアピールする",
          'zh-CN': "全妆上阵！最大限度展现视觉效果",
          'zh-TW': "全妝上陣！最大限度展現視覺效果",
          vi: "Trang điểm đầy đủ! Khoe vẻ ngoài tối đa",
          id: "Makeup penuh! Pamerkan visual saya semaksimal mungkin"
        },
        scores: ["Type6"]
      },
      {
        text: {
          ko: "표정 연기부터 성대모사까지, 끼를 대방출한다",
          en: "From facial expressions to voice impressions, I unleash all my talents",
          ja: "表情の演技から声真似まで、才能を大放出する",
          'zh-CN': "从表情表演到声音模仿，尽情展现才华",
          'zh-TW': "從表情表演到聲音模仿，盡情展現才華",
          vi: "Từ biểu cảm khuôn mặt đến bắt chước giọng nói, tôi thể hiện hết tài năng",
          id: "Dari ekspresi wajah hingga impresi suara, saya mengeluarkan semua bakat saya"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "화면발보다는 내가 하는 행동(먹기/게임)에 집중한다",
          en: "I focus on my actions (eating/gaming) rather than my appearance on screen",
          ja: "画面映えよりも自分の行動（食べる/ゲーム）に集中する",
          'zh-CN': "专注于我的行为（吃/游戏）而不是屏幕外观",
          'zh-TW': "專注於我的行為（吃/遊戲）而不是螢幕外觀",
          vi: "Tôi tập trung vào hành động của mình (ăn/chơi game) hơn là vẻ ngoài trên màn hình",
          id: "Saya fokus pada tindakan saya (makan/gaming) daripada penampilan di layar"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "선호하는 영상 편집 스타일은?",
      en: "What is your preferred video editing style?",
      ja: "好みの動画編集スタイルは？",
      'zh-CN': "你喜欢的视频编辑风格是？",
      'zh-TW': "你喜歡的視頻編輯風格是？",
      vi: "Phong cách chỉnh sửa video bạn ưa thích là gì?",
      id: "Apa gaya pengeditan video yang Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "감성적인 BGM과 예쁜 자막, 영화 같은 색감",
          en: "Emotional BGM, beautiful subtitles, and cinematic color grading",
          ja: "感情的なBGMと綺麗な字幕、映画のような色味",
          'zh-CN': "感性的背景音乐、漂亮的字幕、电影般的色调",
          'zh-TW': "感性的背景音樂、漂亮的字幕、電影般的色調",
          vi: "Nhạc nền cảm xúc, phụ đề đẹp và màu sắc như phim điện ảnh",
          id: "BGM emosional, subtitle yang indah, dan grading warna sinematik"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "화려한 효과음, 짤방 삽입, 빠른 컷 편집",
          en: "Flashy sound effects, meme inserts, and fast-paced cuts",
          ja: "華やかな効果音、ミーム挿入、速いカット編集",
          'zh-CN': "华丽的音效、表情包插入、快速剪辑",
          'zh-TW': "華麗的音效、表情包插入、快速剪輯",
          vi: "Hiệu ứng âm thanh sáng bóng, chèn meme và cắt nhanh",
          id: "Efek suara mencolok, sisipan meme, dan potongan cepat"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "핵심 정보 위주의 깔끔한 자막과 자료 화면",
          en: "Clean subtitles focusing on key information and data screens",
          ja: "核心情報中心のすっきりした字幕と資料画面",
          'zh-CN': "以核心信息为主的简洁字幕和数据画面",
          'zh-TW': "以核心信息為主的簡潔字幕和數據畫面",
          vi: "Phụ đề gọn gàng tập trung vào thông tin chính và màn hình dữ liệu",
          id: "Subtitle bersih yang berfokus pada informasi utama dan layar data"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "편집보다는 생생한 현장감과 라이브 소통",
          en: "Vivid on-site atmosphere and live interaction rather than editing",
          ja: "編集よりも生き生きとした臨場感とライブ交流",
          'zh-CN': "比起剪辑更注重生动的现场感和实时互动",
          'zh-TW': "比起剪輯更注重生動的現場感和實時互動",
          vi: "Không khí hiện trường sống động và tương tác trực tiếp hơn là chỉnh sửa",
          id: "Atmosfer on-site yang jelas dan interaksi langsung daripada pengeditan"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "악플(Hater)이 달렸을 때 대처법은?",
      en: "How do you handle hate comments?",
      ja: "アンチコメント（Hater）がついたときの対処法は？",
      'zh-CN': "面对恶评（Hater）时的应对方法是？",
      'zh-TW': "面對惡評（Hater）時的應對方法是？",
      vi: "Bạn xử lý thế nào khi có bình luận ghét?",
      id: "Bagaimana Anda menangani komentar kebencian?"
    },
    options: [
      {
        text: {
          ko: "상처받아서 조용히 삭제하거나 채널을 비공개한다",
          en: "I get hurt and quietly delete it or make the channel private",
          ja: "傷ついて静かに削除したり、チャンネルを非公開にする",
          'zh-CN': "受伤后悄悄删除或设为私密",
          'zh-TW': "受傷後悄悄刪除或設為私密",
          vi: "Tôi bị tổn thương và lặng lẽ xóa hoặc đặt kênh ở chế độ riêng tư",
          id: "Saya terluka dan diam-diam menghapusnya atau membuat saluran menjadi pribadi"
        },
        scores: ["Type1"]
      },
      {
        text: {
          ko: "\"너나 잘하세요~\" 재치 있게 받아치거나 콘텐츠로 승화한다",
          en: "\"You do it better~\" I cleverly respond or turn it into content",
          ja: "「あなたがやってください〜」と機転を利かせて受け流したり、コンテンツに昇華する",
          'zh-CN': "\"你来做好啦~\" 巧妙回应或转化为内容",
          'zh-TW': "「你來做好啦〜」巧妙回應或轉化為內容",
          vi: "\"Bạn làm tốt hơn đi~\" Tôi phản ứng một cách khéo léo hoặc biến nó thành nội dung",
          id: "\"Anda yang melakukannya lebih baik~\" Saya dengan cerdik merespons atau mengubahnya menjadi konten"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "논리적으로 반박하는 고정 댓글을 달아 참교육한다",
          en: "I post a pinned comment logically refuting it to educate",
          ja: "論理的に反論する固定コメントを付けて真の教育をする",
          'zh-CN': "发表置顶评论进行逻辑反驳以教育",
          'zh-TW': "發表置頂評論進行邏輯反駁以教育",
          vi: "Tôi đăng một bình luận ghim phản bác một cách logic để giáo dục",
          id: "Saya memposting komentar yang disematkan yang secara logis membantah untuk mendidik"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "신경 안 쓴다. 무플보다 악플이 낫다고 생각한다",
          en: "I don't care. I think hate comments are better than no comments",
          ja: "気にしない。無反応よりもアンチコメントの方が良いと思う",
          'zh-CN': "不在乎。认为恶评比没评论好",
          'zh-TW': "不在乎。認為惡評比沒評論好",
          vi: "Tôi không quan tâm. Tôi nghĩ bình luận ghét còn hơn là không có bình luận",
          id: "Saya tidak peduli. Saya pikir komentar kebencian lebih baik daripada tidak ada komentar"
        },
        scores: ["Type2", "Type3", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "평소 친구들이 나에게 자주 하는 말은?",
      en: "What do friends usually say to me?",
      ja: "普段友達が私によく言うことは？",
      'zh-CN': "朋友们平时常对我说的话是？",
      'zh-TW': "朋友們平時常對我說的話是？",
      vi: "Bạn bè thường nói gì với tôi?",
      id: "Apa yang biasanya teman-teman katakan kepada saya?"
    },
    options: [
      {
        text: {
          ko: "\"너는 참 감성이 있어. 사진 잘 찍는다\"",
          en: "\"You're so emotional/sensitive. You take great photos\"",
          ja: "「あなたは本当に感性がある。写真が上手い」",
          'zh-CN': "\"你很有感性。照片拍得很好\"",
          'zh-TW': "「你很有感性。照片拍得很好」",
          vi: "\"Bạn thật nhạy cảm/cảm xúc. Bạn chụp ảnh rất đẹp\"",
          id: "\"Anda sangat emosional/sensitif. Anda mengambil foto yang bagus\""
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "\"너 진짜 골 때린다. 개그맨 해라\"",
          en: "\"You're really funny. You should be a comedian\"",
          ja: "「あなた本当に面白い。コメディアンになれ」",
          'zh-CN': "\"你太搞笑了。应该当喜剧演员\"",
          'zh-TW': "「你太搞笑了。應該當喜劇演員」",
          vi: "\"Bạn thật hài hước. Bạn nên làm diễn viên hài\"",
          id: "\"Anda benar-benar lucu. Anda harus menjadi komedian\""
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "\"너는 모르는 게 뭐야? 설명충 같아\"",
          en: "\"What don't you know? You're like a walking encyclopedia\"",
          ja: "「あなたが知らないことは何？説明魔みたい」",
          'zh-CN': "\"有什么你不知道的？你就像个解释狂\"",
          'zh-TW': "「有什麼你不知道的？你就像個解釋狂」",
          vi: "\"Có gì bạn không biết không? Bạn như một cuốn bách khoa toàn thư sống\"",
          id: "\"Apa yang tidak Anda ketahui? Anda seperti ensiklopedia berjalan\""
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "\"진짜 잘 먹는다(또는 게임 잘한다). 신기해\"",
          en: "\"You really eat well (or play games well). Amazing\"",
          ja: "「本当によく食べる（またはゲームが上手い）。すごい」",
          'zh-CN': "\"你真的很能吃（或很会打游戏）。太神奇了\"",
          'zh-TW': "「你真的很能吃（或很會打遊戲）。太神奇了」",
          vi: "\"Bạn thực sự ăn rất tốt (hoặc chơi game rất giỏi). Tuyệt vời\"",
          id: "\"Anda benar-benar makan dengan baik (atau bermain game dengan baik). Luar biasa\""
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "첫 수익이 생겼다! 어디에 투자할까?",
      en: "I earned my first income! Where should I invest it?",
      ja: "初めての収益ができた！どこに投資しようか？",
      'zh-CN': "赚到第一笔收入了！应该投资在哪里？",
      'zh-TW': "賺到第一筆收入了！應該投資在哪裡？",
      vi: "Tôi đã kiếm được thu nhập đầu tiên! Nên đầu tư vào đâu?",
      id: "Saya mendapat pendapatan pertama! Di mana saya harus menginvestasikannya?"
    },
    options: [
      {
        text: {
          ko: "감성적인 조명과 인테리어 소품 구매",
          en: "Buy emotional lighting and interior accessories",
          ja: "感情的な照明とインテリア小物を購入",
          'zh-CN': "购买感性的照明和室内装饰品",
          'zh-TW': "購買感性的照明和室內裝飾品",
          vi: "Mua đèn cảm xúc và phụ kiện nội thất",
          id: "Beli pencahayaan emosional dan aksesori interior"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "더 좋은 카메라와 마이크 등 장비 업그레이드",
          en: "Upgrade equipment like better cameras and microphones",
          ja: "より良いカメラやマイクなどの機材をアップグレード",
          'zh-CN': "升级设备，如更好的相机和麦克风",
          'zh-TW': "升級設備，如更好的相機和麥克風",
          vi: "Nâng cấp thiết bị như camera và microphone tốt hơn",
          id: "Tingkatkan peralatan seperti kamera dan mikrofon yang lebih baik"
        },
        scores: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "전문 서적 구매나 유료 강의 결제",
          en: "Buy professional books or pay for paid courses",
          ja: "専門書を購入したり有料講座に支払う",
          'zh-CN': "购买专业书籍或支付付费课程",
          'zh-TW': "購買專業書籍或支付付費課程",
          vi: "Mua sách chuyên nghiệp hoặc thanh toán khóa học trả phí",
          id: "Beli buku profesional atau membayar kursus berbayar"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "콘텐츠 제작을 위한 재료비(음식/게임팩 등) 지출",
          en: "Spend on material costs for content production (food/game packs, etc.)",
          ja: "コンテンツ制作のための材料費（食べ物/ゲームパックなど）に支出",
          'zh-CN': "用于内容制作的材料费用（食物/游戏包等）",
          'zh-TW': "用於內容製作的材料費用（食物/遊戲包等）",
          vi: "Chi cho chi phí nguyên liệu để sản xuất nội dung (thức ăn/gói game, v.v.)",
          id: "Belanjakan biaya bahan untuk produksi konten (makanan/paket game, dll.)"
        },
        scores: ["Type2", "Type4"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "숏폼(Shorts/릴스) 콘텐츠에 대한 생각은?",
      en: "What do you think about short-form content (Shorts/Reels)?",
      ja: "ショート動画（Shorts/リール）コンテンツについてどう思いますか？",
      'zh-CN': "你对短视频内容（Shorts/Reels）的看法是？",
      'zh-TW': "你對短視頻內容（Shorts/Reels）的看法是？",
      vi: "Bạn nghĩ gì về nội dung dạng ngắn (Shorts/Reels)?",
      id: "Apa pendapat Anda tentang konten format pendek (Shorts/Reels)?"
    },
    options: [
      {
        text: {
          ko: "짧은 시간 안에 내 감성을 담기엔 부족하다",
          en: "It's not enough time to convey my emotions",
          ja: "短い時間で私の感情を伝えるには不十分",
          'zh-CN': "时间太短，无法充分表达我的情感",
          'zh-TW': "時間太短，無法充分表達我的情感",
          vi: "Thời gian không đủ để truyền tải cảm xúc của tôi",
          id: "Waktunya tidak cukup untuk menyampaikan emosi saya"
        },
        scores: ["Type1"]
      },
      {
        text: {
          ko: "댄스 챌린지나 상황극 하기에 딱이다. 무조건 해야지",
          en: "Perfect for dance challenges or skits. I must do it",
          ja: "ダンスチャレンジや寸劇をするのに最適。絶対にやるべき",
          'zh-CN': "非常适合舞蹈挑战或短剧。一定要做",
          'zh-TW': "非常適合舞蹈挑戰或短劇。一定要做",
          vi: "Hoàn hảo cho thử thách nhảy hoặc vở kịch ngắn. Tôi phải làm",
          id: "Sempurna untuk tantangan dansa atau sketsa. Saya harus melakukannya"
        },
        scores: ["Type4", "Type6"]
      },
      {
        text: {
          ko: "핵심 요약 정보를 전달하는 용도로 활용한다",
          en: "I use it to deliver key summarized information",
          ja: "核心要約情報を伝える用途で活用する",
          'zh-CN': "用于传达核心摘要信息",
          'zh-TW': "用於傳達核心摘要信息",
          vi: "Tôi sử dụng nó để truyền đạt thông tin tóm tắt chính",
          id: "Saya menggunakannya untuk menyampaikan informasi ringkasan utama"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "하이라이트 장면만 모아서 홍보용으로 쓴다",
          en: "I compile highlight scenes only to use for promotion",
          ja: "ハイライトシーンのみを集めて宣伝用に使う",
          'zh-CN': "只收集高光片段用于宣传",
          'zh-TW': "只收集高光片段用於宣傳",
          vi: "Tôi chỉ tập hợp các cảnh nổi bật để dùng cho quảng bá",
          id: "Saya mengompilasi hanya adegan sorotan untuk digunakan untuk promosi"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "합방(콜라보) 제안이 들어왔다. 누구랑 할까?",
      en: "I received a collaboration offer. Who should I do it with?",
      ja: "コラボ（合流）の提案が来た。誰とやる？",
      'zh-CN': "收到了合作（合播）邀请。应该和谁一起？",
      'zh-TW': "收到了合作（合播）邀請。應該和誰一起？",
      vi: "Tôi nhận được đề nghị hợp tác. Nên làm với ai?",
      id: "Saya menerima tawaran kolaborasi. Dengan siapa saya harus melakukannya?"
    },
    options: [
      {
        text: {
          ko: "나와 결이 비슷한 차분한 브이로거",
          en: "A calm vlogger with a similar vibe to me",
          ja: "私と雰囲気が似ている落ち着いたブロガー",
          'zh-CN': "和我风格相似的冷静博主",
          'zh-TW': "和我風格相似的冷靜博主",
          vi: "Một vlogger điềm tĩnh có phong cách tương tự tôi",
          id: "Seorang vlogger yang tenang dengan vibe yang mirip dengan saya"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "티키타카가 잘 되는 텐션 높은 개그 유튜버",
          en: "A high-energy comedy YouTuber with great chemistry",
          ja: "キャッチボールが上手くテンションの高いコメディYouTuber",
          'zh-CN': "配合默契、热情高涨的搞笑YouTuber",
          'zh-TW': "配合默契、熱情高漲的搞笑YouTuber",
          vi: "Một YouTuber hài kịch năng lượng cao có sự tương tác tốt",
          id: "Seorang YouTuber komedi berenergi tinggi dengan chemistry yang bagus"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "해당 분야의 전문가나 교수님",
          en: "An expert or professor in that field",
          ja: "その分野の専門家や教授",
          'zh-CN': "该领域的专家或教授",
          'zh-TW': "該領域的專家或教授",
          vi: "Một chuyên gia hoặc giáo sư trong lĩnh vực đó",
          id: "Seorang ahli atau profesor di bidang tersebut"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "많이 먹기 대결이나 게임 매치를 할 수 있는 라이벌",
          en: "A rival I can compete with in eating contests or gaming matches",
          ja: "大食い対決やゲームマッチができるライバル",
          'zh-CN': "可以一起进行大胃王比赛或游戏对战的对手",
          'zh-TW': "可以一起進行大胃王比賽或遊戲對戰的對手",
          vi: "Đối thủ mà tôi có thể thi đấu trong cuộc thi ăn hoặc trận game",
          id: "Seorang rival yang bisa saya ajak bertanding dalam kontes makan atau pertandingan game"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "방송 중 돌발 상황 발생! (마이크 꺼짐 등)",
      en: "An unexpected situation occurs during the broadcast! (Microphone turned off, etc.)",
      ja: "放送中に突発的な状況が発生！（マイクが切れるなど）",
      'zh-CN': "直播中发生突发状况！（麦克风关闭等）",
      'zh-TW': "直播中發生突發狀況！（麥克風關閉等）",
      vi: "Tình huống bất ngờ xảy ra trong lúc phát sóng! (Micro tắt, v.v.)",
      id: "Situasi tak terduga terjadi selama siaran! (Mikrofon mati, dll.)"
    },
    options: [
      {
        text: {
          ko: "당황해서 얼굴이 빨개지고 어쩔 줄 모른다",
          en: "I panic, my face turns red, and I don't know what to do",
          ja: "慌てて顔が赤くなり、どうすればいいかわからなくなる",
          'zh-CN': "慌张得脸红，不知所措",
          'zh-TW': "慌張得臉紅，不知所措",
          vi: "Tôi hoảng sợ, mặt đỏ và không biết phải làm gì",
          id: "Saya panik, wajah memerah, dan tidak tahu harus berbuat apa"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "몸개그로 승화시켜 웃음 포인트로 만든다",
          en: "I turn it into physical comedy and make it a laughing point",
          ja: "身体を使ったギャグに昇華させて笑いのポイントにする",
          'zh-CN': "转化为肢体搞笑，变成笑点",
          'zh-TW': "轉化為肢體搞笑，變成笑點",
          vi: "Tôi biến nó thành hài kịch thể chất và tạo thành điểm cười",
          id: "Saya mengubahnya menjadi komedi fisik dan menjadikannya titik tawa"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "자막으로 '방송 사고' 상황을 침착하게 설명한다",
          en: "I calmly explain the 'broadcast accident' situation with subtitles",
          ja: "字幕で「放送事故」の状況を冷静に説明する",
          'zh-CN': "用字幕冷静地解释'播出事故'的情况",
          'zh-TW': "用字幕冷靜地解釋「播出事故」的情況",
          vi: "Tôi bình tĩnh giải thích tình huống 'sự cố phát sóng' bằng phụ đề",
          id: "Saya dengan tenang menjelaskan situasi 'kecelakaan siaran' dengan subtitle"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "채팅창을 보며 시청자들과 소통하며 해결한다",
          en: "I solve it by communicating with viewers through the chat",
          ja: "チャットを見ながら視聴者と交流して解決する",
          'zh-CN': "通过聊天与观众交流来解决",
          'zh-TW': "通過聊天與觀眾交流來解決",
          vi: "Tôi giải quyết bằng cách giao tiếp với người xem qua chat",
          id: "Saya menyelesaikannya dengan berkomunikasi dengan penonton melalui chat"
        },
        scores: ["Type3"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신이 꿈꾸는 채널의 미래 모습은?",
      en: "What is your dream future for your channel?",
      ja: "あなたが夢見るチャンネルの未来の姿は？",
      'zh-CN': "你梦想中的频道未来是什么样子？",
      'zh-TW': "你夢想中的頻道未來是什麼樣子？",
      vi: "Tương lai mà bạn mơ ước cho kênh của mình là gì?",
      id: "Bagaimana masa depan impian Anda untuk saluran Anda?"
    },
    options: [
      {
        text: {
          ko: "소수지만 끈끈하고 충성도 높은 팬덤을 가진 채널",
          en: "A channel with a small but tight-knit and highly loyal fanbase",
          ja: "少数だが結束力があり忠誠度の高いファンベースを持つチャンネル",
          'zh-CN': "拥有少数但紧密且忠诚度高的粉丝群的频道",
          'zh-TW': "擁有少數但緊密且忠誠度高的粉絲群的頻道",
          vi: "Một kênh có lượng người theo dõi nhỏ nhưng gắn kết và cực kỳ trung thành",
          id: "Saluran dengan basis penggemar kecil namun erat dan sangat loyal"
        },
        scores: ["Type1"]
      },
      {
        text: {
          ko: "전 국민이 다 아는 유행어를 만든 대기업 채널",
          en: "A major channel that created catchphrases known by everyone in the country",
          ja: "全国民が知っている流行語を作った大企業チャンネル",
          'zh-CN': "创造了全国皆知流行语的大公司频道",
          'zh-TW': "創造了全國皆知流行語的大公司頻道",
          vi: "Một kênh lớn đã tạo ra những câu nói viral mà mọi người trong nước đều biết",
          id: "Saluran besar yang menciptakan frasa populer yang diketahui semua orang di negara"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "사람들이 정보를 얻으러 찾아오는 백과사전 같은 채널",
          en: "An encyclopedia-like channel where people come to get information",
          ja: "人が情報を得るために訪れる百科事典のようなチャンネル",
          'zh-CN': "人们为了获取信息而前来访问的百科全书式频道",
          'zh-TW': "人們為了獲取信息而前來訪問的百科全書式頻道",
          vi: "Một kênh giống như bách khoa toàn thư nơi mọi người đến để lấy thông tin",
          id: "Saluran seperti ensiklopedia di mana orang datang untuk mendapatkan informasi"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "스트레스 풀러 오는 쾌감 쩌는 채널",
          en: "A channel people come to for stress relief and pure enjoyment",
          ja: "ストレス解消に来る快感満載のチャンネル",
          'zh-CN': "人们来缓解压力、获得快感的频道",
          'zh-TW': "人們來緩解壓力、獲得快感的頻道",
          vi: "Một kênh mà mọi người đến để giảm căng thẳng và tận hưởng",
          id: "Saluran tempat orang datang untuk menghilangkan stres dan kenikmatan murni"
        },
        scores: ["Type2", "Type3", "Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "구독자 애칭(팬네임)을 정한다면?",
      en: "If you were to choose a fan name for your subscribers?",
      ja: "購読者の愛称（ファンネーム）を決めるとしたら？",
      'zh-CN': "如果要为订阅者选择一个粉丝名称？",
      'zh-TW': "如果要為訂閱者選擇一個粉絲名稱？",
      vi: "Nếu bạn chọn một tên fan cho người đăng ký?",
      id: "Jika Anda memilih nama penggemar untuk pelanggan Anda?"
    },
    options: [
      {
        text: {
          ko: "몽글이, 구름이 (귀엽고 감성적인 느낌)",
          en: "Monggie, Gureumi (cute and emotional feeling)",
          ja: "モンギ、クルミ（可愛くて感情的な感じ）",
          'zh-CN': "Monggie, Gureumi（可爱且感性的感觉）",
          'zh-TW': "Monggie, Gureumi（可愛且感性的感覺）",
          vi: "Monggie, Gureumi (cảm giác dễ thương và cảm xúc)",
          id: "Monggie, Gureumi (rasa lucu dan emosional)"
        },
        scores: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "잼민이, 똘마니 (친근하고 장난스러운 느낌)",
          en: "Jaemini, Ttolnani (friendly and playful feeling)",
          ja: "ジャミニ、トルマニ（親しみやすく遊び心のある感じ）",
          'zh-CN': "Jaemini, Ttolnani（友好且调皮的感觉）",
          'zh-TW': "Jaemini, Ttolnani（友好且調皮的感覺）",
          vi: "Jaemini, Ttolnani (cảm giác thân thiện và vui tươi)",
          id: "Jaemini, Ttolnani (rasa ramah dan main-main)"
        },
        scores: ["Type4"]
      },
      {
        text: {
          ko: "학우님, 연구원 (지적이고 존중하는 느낌)",
          en: "Hagwoonim, Yeonguwon (intellectual and respectful feeling)",
          ja: "ハグニム、ヨングウォン（知的で敬意を表する感じ）",
          'zh-CN': "Hagwoonim, Yeonguwon（知识性和尊重的感觉）",
          'zh-TW': "Hagwoonim, Yeonguwon（知識性和尊重的感覺）",
          vi: "Hagwoonim, Yeonguwon (cảm giác trí tuệ và tôn trọng)",
          id: "Hagwoonim, Yeonguwon (rasa intelektual dan menghormati)"
        },
        scores: ["Type5"]
      },
      {
        text: {
          ko: "먹깨비, 겜돌이 (직관적이고 활동적인 느낌)",
          en: "Meokkkaebi, Gemdoli (intuitive and active feeling)",
          ja: "モッケビ、ゲムドリ（直感的で活動的な感じ）",
          'zh-CN': "Meokkkaebi, Gemdoli（直观且活跃的感觉）",
          'zh-TW': "Meokkkaebi, Gemdoli（直觀且活躍的感覺）",
          vi: "Meokkkaebi, Gemdoli (cảm giác trực quan và hoạt động)",
          id: "Meokkkaebi, Gemdoli (rasa intuitif dan aktif)"
        },
        scores: ["Type2", "Type3"]
      }
    ]
  }
];

export const phase2YoutubeChannelResults: Phase2YoutubeChannelResult[] = [
  {
    type: "Type1",
    emoji: "📹",
    title: {
      ko: "감성 한 스푼, 힐링 브이로거 (Vlogger)",
      en: "A Spoonful of Emotion, Healing Vlogger",
      ja: "感性ひとさじ、ヒーリングブロガー（Vlogger）",
      'zh-CN': "感性满满，治愈系博主（Vlogger）",
      'zh-TW': "感性滿滿，治癒系博主（Vlogger）",
      vi: "Một Muỗng Cảm Xúc, Vlogger Chữa Lành",
      id: "Satu Sendok Emosi, Vlogger Penyembuhan"
    },
    shortDescription: {
      ko: "\"당신의 일상이 곧 영화가 됩니다\"",
      en: "\"Your daily life will soon become a movie\"",
      ja: "「あなたの日常がすぐに映画になります」",
      'zh-CN': "\"你的日常生活很快就会变成电影\"",
      'zh-TW': "「你的日常生活很快就會變成電影」",
      vi: "\"Cuộc sống hàng ngày của bạn sẽ sớm trở thành một bộ phim\"",
      id: "\"Kehidupan sehari-hari Anda akan segera menjadi film\""
    },
    description: {
      ko: "당신은 평범한 일상도 특별하게 만드는 감각을 지녔습니다. 화려한 말주변보다는 따뜻한 영상미와 편안한 분위기로 승부합니다. 얼굴 없는 유튜버로 시작해도 좋으며, 당신의 영상을 보며 힐링하는 '랜선 이모/삼촌' 팬들이 생길 것입니다.",
      en: "You have the ability to make ordinary daily life special. You win with warm visuals and a comfortable atmosphere rather than flashy talk. It's fine to start as a faceless YouTuber, and you'll gain 'online aunt/uncle' fans who heal while watching your videos.",
      ja: "あなたは平凡な日常も特別にする感覚を持っています。華やかな話術よりも温かい映像美と心地よい雰囲気で勝負します。顔出ししないユーチューバーとして始めても良く、あなたの動画を見て癒される「ネットのおば/おじさん」ファンができるでしょう。",
      'zh-CN': "你拥有将平凡的日常生活变得特别的感性。比起华丽的言谈，更以温暖的画面和舒适的氛围取胜。可以以不露脸的YouTuber身份开始，会有观看你的视频获得治愈的'网络姨/叔'粉丝。",
      'zh-TW': "你擁有將平凡的日常生活變得特別的感性。比起華麗的言談，更以溫暖的畫面和舒適的氛圍取勝。可以以不露臉的YouTuber身份開始，會有觀看你的視頻獲得治癒的「網路姨/叔」粉絲。",
      vi: "Bạn có khả năng biến cuộc sống hàng ngày bình thường thành đặc biệt. Bạn thắng bằng hình ảnh ấm áp và không khí thoải mái hơn là lời nói hào nhoáng. Bắt đầu như một YouTuber không lộ mặt cũng được, và bạn sẽ có những người hâm mộ 'dì/chú trực tuyến' được chữa lành khi xem video của bạn.",
      id: "Anda memiliki kemampuan untuk membuat kehidupan sehari-hari yang biasa menjadi istimewa. Anda menang dengan visual hangat dan suasana nyaman daripada obrolan mencolok. Tidak apa-apa memulai sebagai YouTuber tanpa wajah, dan Anda akan mendapatkan penggemar 'bibi/paman online' yang sembuh sambil menonton video Anda."
    },
    mainContent: {
      ko: "GRWM, 룸투어, 감성 카페 탐방, 공부 타임랩스",
      en: "GRWM, Room Tour, Emotional Cafe Exploration, Study Timelapse",
      ja: "GRWM、ルームツアー、感性カフェ探訪、勉強タイムラプス",
      'zh-CN': "GRWM、房间参观、感性咖啡厅探访、学习延时",
      'zh-TW': "GRWM、房間參觀、感性咖啡廳探訪、學習延時",
      vi: "GRWM, Tham Quan Phòng, Khám Phá Quán Cà Phê Cảm Xúc, Timelapse Học Tập",
      id: "GRWM, Tur Kamar, Eksplorasi Kafe Emosional, Timelapse Belajar"
    },
    cheatKey: {
      ko: "색감 보정 필터, 감각적인 썸네일",
      en: "Color grading filters, stylish thumbnails",
      ja: "色味補正フィルター、センスの良いサムネイル",
      'zh-CN': "色调校正滤镜，时尚的缩略图",
      'zh-TW': "色調校正濾鏡，時尚的縮略圖",
      vi: "Bộ lọc chỉnh màu sắc, hình thu nhỏ có gu",
      id: "Filter koreksi warna, thumbnail yang stylish"
    },
    collabPartner: {
      ko: "Type 6 (뷰티/패션 유튜버)",
      en: "Type 6 (Beauty/Fashion YouTuber)",
      ja: "タイプ6（ビューティー/ファッションユーチューバー）",
      'zh-CN': "类型6（美妆/时尚YouTuber）",
      'zh-TW': "類型6（美妝/時尚YouTuber）",
      vi: "Loại 6 (YouTuber Làm Đẹp/Thời Trang)",
      id: "Tipe 6 (YouTuber Kecantikan/Fashion)"
    }
  },
  {
    type: "Type2",
    emoji: "🍗",
    title: {
      ko: "위장 크기 2배, 먹방 스트리머 (Mukbang)",
      en: "Stomach Size 2x, Mukbang Streamer",
      ja: "胃袋サイズ2倍、モッパンストリーマー（Mukbang）",
      'zh-CN': "胃容量2倍，吃播主播（Mukbang）",
      'zh-TW': "胃容量2倍，吃播主播（Mukbang）",
      vi: "Kích Thước Dạ Dày Gấp Đôi, Streamer Mukbang",
      id: "Ukuran Perut 2x, Streamer Mukbang"
    },
    shortDescription: {
      ko: "\"소리까지 맛있는 ASMR 장인\"",
      en: "\"ASMR master whose sounds are delicious\"",
      ja: "「音まで美味しいASMR職人」",
      'zh-CN': "\"连声音都美味的ASMR大师\"",
      'zh-TW': "「連聲音都美味的ASMR大師」",
      vi: "\"Bậc thầy ASMR mà âm thanh cũng ngon\"",
      id: "\"Master ASMR yang suaranya juga enak\""
    },
    description: {
      ko: "당신은 먹는 것에 진심인 사람입니다. 복스럽게 먹는 모습만으로도 사람들에게 대리 만족을 줍니다. 맛 표현이 풍부하거나, 아무리 먹어도 배부르지 않는 위장을 가졌다면 당장 카메라를 켜세요. 전 세계가 당신의 '쩝쩝' 소리를 기다립니다.",
      en: "You're serious about eating. Your hearty eating alone gives people vicarious satisfaction. If you have rich taste expressions or a stomach that never gets full no matter how much you eat, turn on the camera now. The whole world is waiting for your 'chomp chomp' sounds.",
      ja: "あなたは食べることに対して真剣な人です。豪快に食べる姿だけで人々に代理満足を与えます。味の表現が豊かだったり、どれだけ食べても満腹にならない胃袋を持っているなら、今すぐカメラを付けましょう。世界中があなたの「モグモグ」音を待っています。",
      'zh-CN': "你对待吃是认真的。光是豪爽的吃相就能给人带来代偿满足感。如果味觉表达丰富，或者拥有怎么吃都不饱的胃，马上开启摄像头吧。全世界都在等待你的'咀嚼'声。",
      'zh-TW': "你對待吃是認真的。光是豪爽的吃相就能給人帶來代償滿足感。如果味覺表達豐富，或者擁有怎麼吃都不飽的胃，馬上開啟攝像頭吧。全世界都在等待你的「咀嚼」聲。",
      vi: "Bạn nghiêm túc về việc ăn. Chỉ riêng việc ăn một cách hào hứng đã mang lại sự thỏa mãn gián tiếp cho mọi người. Nếu bạn có cách diễn đạt hương vị phong phú hoặc một cái dạ dày không bao giờ no dù ăn bao nhiêu, hãy bật camera ngay bây giờ. Cả thế giới đang chờ đợi âm thanh 'nhóp nhép' của bạn.",
      id: "Anda serius tentang makan. Cara makan Anda yang lahap saja sudah memberi kepuasan tidak langsung kepada orang-orang. Jika Anda memiliki ekspresi rasa yang kaya atau perut yang tidak pernah kenyang tidak peduli seberapa banyak Anda makan, nyalakan kamera sekarang. Seluruh dunia menunggu suara 'chomp chomp' Anda."
    },
    mainContent: {
      ko: "리얼 사운드 먹방, 편의점 꿀조합, 배달 음식 리뷰",
      en: "Real sound mukbang, convenience store perfect combos, delivery food reviews",
      ja: "リアルサウンドモッパン、コンビニのハニーコンボ、配達料理レビュー",
      'zh-CN': "真实音效吃播、便利店完美组合、外卖食物评价",
      'zh-TW': "真實音效吃播、便利店完美組合、外賣食物評價",
      vi: "Mukbang âm thanh thật, combo tiện lợi cửa hàng tiện lợi, đánh giá đồ ăn giao hàng",
      id: "Mukbang suara nyata, kombinasi sempurna minimarket, ulasan makanan pengiriman"
    },
    cheatKey: {
      ko: "침샘 자극하는 고화질 마이크",
      en: "High-quality microphone that stimulates saliva",
      ja: "唾液腺を刺激する高画質マイク",
      'zh-CN': "刺激唾液分泌的高品质麦克风",
      'zh-TW': "刺激唾液分泌的高品質麥克風",
      vi: "Microphone chất lượng cao kích thích tuyến nước bọt",
      id: "Mikrofon berkualitas tinggi yang merangsang kelenjar air liur"
    },
    collabPartner: {
      ko: "Type 4 (예능 유튜버 - 대신 많이 먹어줌)",
      en: "Type 4 (Entertainment YouTuber - eats a lot for you)",
      ja: "タイプ4（エンタメユーチューバー - 代わりにたくさん食べてくれる）",
      'zh-CN': "类型4（娱乐YouTuber - 帮你吃很多）",
      'zh-TW': "類型4（娛樂YouTuber - 幫你吃很多）",
      vi: "Loại 4 (YouTuber Giải Trí - ăn nhiều thay cho bạn)",
      id: "Tipe 4 (YouTuber Hiburan - makan banyak untuk Anda)"
    }
  },
  {
    type: "Type3",
    emoji: "🎮",
    title: {
      ko: "신의 컨트롤, 게임/IT 리뷰어 (Gamer/Tech)",
      en: "Godlike Control, Game/IT Reviewer",
      ja: "神のコントロール、ゲーム/ITレビュアー（Gamer/Tech）",
      'zh-CN': "神级操作，游戏/IT评测者（Gamer/Tech）",
      'zh-TW': "神級操作，遊戲/IT評測者（Gamer/Tech）",
      vi: "Điều Khiển Thần Thánh, Người Đánh Giá Game/IT",
      id: "Kontrol Seperti Dewa, Reviewer Game/IT"
    },
    shortDescription: {
      ko: "\"실력으로 증명하는 겜생겜사\"",
      en: "\"Proving with skill - game life, game death\"",
      ja: "「実力で証明するゲーム人生ゲーム死」",
      'zh-CN': "\"用实力证明的游戏人生\"",
      'zh-TW': "「用實力證明的遊戲人生」",
      vi: "\"Chứng minh bằng kỹ năng - cuộc đời game, cái chết game\"",
      id: "\"Membuktikan dengan keterampilan - hidup game, mati game\""
    },
    description: {
      ko: "당신은 좋아하는 분야에 깊게 파고드는 오타쿠 기질이 있습니다. 화려한 게임 피지컬을 보여주거나, 신제품 전자기기를 누구보다 빠르게 분석합니다. 당신의 전문성과 덕력에 감탄한 시청자들이 '형님'으로 모시게 될 것입니다.",
      en: "You have an otaku nature that dives deep into fields you love. You show off flashy game physical skills or analyze new electronic products faster than anyone. Viewers amazed by your expertise and dedication will treat you like a 'brother'.",
      ja: "あなたは好きな分野に深く掘り下げるオタク気質があります。華やかなゲームのフィジカルを見せたり、新製品の電子機器を誰よりも早く分析します。あなたの専門性とマニア度に感嘆した視聴者が「兄貴」として扱うでしょう。",
      'zh-CN': "你拥有深入钻研所爱领域的宅属性。展现华丽的游戏操作，或比任何人都更快地分析新产品电子设备。对你的专业性和热爱程度感到惊叹的观众会将你奉为'大哥'。",
      'zh-TW': "你擁有深入鑽研所愛領域的宅屬性。展現華麗的遊戲操作，或比任何人都更快地分析新產品電子設備。對你的專業性和熱愛程度感到驚嘆的觀眾會將你奉為「大哥」。",
      vi: "Bạn có bản chất otaku đi sâu vào các lĩnh vực bạn yêu thích. Bạn thể hiện kỹ năng thể chất game hào nhoáng hoặc phân tích sản phẩm điện tử mới nhanh hơn bất kỳ ai. Người xem ngạc nhiên trước chuyên môn và sự tận tâm của bạn sẽ coi bạn như một 'anh cả'.",
      id: "Anda memiliki sifat otaku yang menyelam jauh ke bidang yang Anda sukai. Anda memamerkan keterampilan fisik game yang mencolok atau menganalisis produk elektronik baru lebih cepat dari siapa pun. Penonton yang kagum dengan keahlian dan dedikasi Anda akan memperlakukan Anda seperti 'kakak'."
    },
    mainContent: {
      ko: "게임 공략, 신작 언박싱, 장비 추천",
      en: "Game guides, new release unboxing, equipment recommendations",
      ja: "ゲーム攻略、新作アンボクシング、機材推薦",
      'zh-CN': "游戏攻略、新品开箱、设备推荐",
      'zh-TW': "遊戲攻略、新品開箱、設備推薦",
      vi: "Hướng dẫn game, mở hộp sản phẩm mới, gợi ý thiết bị",
      id: "Panduan game, unboxing rilis baru, rekomendasi peralatan"
    },
    cheatKey: {
      ko: "남들보다 빠른 정보력, 미친 피지컬",
      en: "Faster information gathering than others, insane physical skills",
      ja: "他の人より速い情報力、狂ったフィジカル",
      'zh-CN': "比别人更快的信息获取能力，惊人的操作",
      'zh-TW': "比別人更快的信息獲取能力，驚人的操作",
      vi: "Thu thập thông tin nhanh hơn người khác, kỹ năng thể chất điên cuồng",
      id: "Pengumpulan informasi lebih cepat dari orang lain, keterampilan fisik yang gila"
    },
    collabPartner: {
      ko: "Type 5 (지식 유튜버 - 심층 분석 가능)",
      en: "Type 5 (Knowledge YouTuber - can do in-depth analysis)",
      ja: "タイプ5（知識ユーチューバー - 深層分析可能）",
      'zh-CN': "类型5（知识YouTuber - 可进行深度分析）",
      'zh-TW': "類型5（知識YouTuber - 可進行深度分析）",
      vi: "Loại 5 (YouTuber Kiến Thức - có thể phân tích sâu)",
      id: "Tipe 5 (YouTuber Pengetahuan - dapat melakukan analisis mendalam)"
    }
  },
  {
    type: "Type4",
    emoji: "🤡",
    title: {
      ko: "웃음 폭격기, 예능/개그 유튜버 (Entertainer)",
      en: "Laughter Bomber, Entertainment/Comedy YouTuber",
      ja: "笑い爆撃機、エンタメ/ギャグユーチューバー（Entertainer）",
      'zh-CN': "笑声轰炸机，娱乐/搞笑YouTuber（Entertainer）",
      'zh-TW': "笑聲轟炸機，娛樂/搞笑YouTuber（Entertainer）",
      vi: "Máy Bay Ném Bom Tiếng Cười, YouTuber Giải Trí/Hài Kịch",
      id: "Pengebom Tawa, YouTuber Hiburan/Komedi"
    },
    shortDescription: {
      ko: "\"알고리즘이 선택한 개그 캐릭터\"",
      en: "\"The comedy character chosen by the algorithm\"",
      ja: "「アルゴリズムが選んだギャグキャラクター」",
      'zh-CN': "\"算法选择的搞笑角色\"",
      'zh-TW': "「演算法選擇的搞笑角色」",
      vi: "\"Nhân vật hài kịch được thuật toán chọn\"",
      id: "\"Karakter komedi yang dipilih oleh algoritma\""
    },
    description: {
      ko: "당신은 1초도 오디오가 비는 것을 참지 못합니다. 타고난 입담과 뻔뻔함으로 시청자들의 배꼽을 훔칩니다. '스케치 코미디'나 '길거리 인터뷰'처럼 사람들과 소통하고 망가지는 것을 두려워하지 않는 당신은 천생 연예인입니다.",
      en: "You can't stand even one second of dead air. You steal viewers' hearts with your natural wit and shamelessness. You're a born entertainer who's not afraid to communicate with people and make a fool of yourself, like in 'sketch comedy' or 'street interviews'.",
      ja: "あなたは1秒もオーディオが空くことを我慢できません。生まれ持った話術と図太さで視聴者の笑いを取ります。「スケッチコメディ」や「街頭インタビュー」のように人々と交流し、崩れることを恐れないあなたは天のエンターテイナーです。",
      'zh-CN': "你连一秒钟的沉默都无法忍受。用天生的口才和厚脸皮抓住观众的笑点。像'短剧喜剧'或'街头采访'那样不怕与人交流、不怕出丑的你，是天生的艺人。",
      'zh-TW': "你連一秒鐘的沉默都無法忍受。用天生的口才和厚臉皮抓住觀眾的笑點。像「短劇喜劇」或「街頭採訪」那樣不怕與人交流、不怕出醜的你，是天生的藝人。",
      vi: "Bạn không thể chịu được dù chỉ một giây im lặng. Bạn đánh cắp trái tim người xem bằng sự dí dỏm và vô liêm sỉ tự nhiên của mình. Bạn là một nghệ sĩ giải trí bẩm sinh không sợ giao tiếp với mọi người và làm mình trông ngu ngốc, như trong 'hài kịch kịch' hoặc 'phỏng vấn đường phố'.",
      id: "Anda tidak bisa tahan bahkan satu detik udara mati. Anda mencuri hati penonton dengan kecerdasan alami dan ketidaksopanan Anda. Anda adalah penghibur yang lahir tidak takut berkomunikasi dengan orang dan membuat diri Anda terlihat bodoh, seperti dalam 'komedi sketsa' atau 'wawancara jalanan'."
    },
    mainContent: {
      ko: "몰래카메라, 상황극, 토크쇼, 밸런스 게임",
      en: "Hidden camera, skits, talk shows, balance games",
      ja: "隠しカメラ、状況劇、トークショー、バランスゲーム",
      'zh-CN': "隐藏摄像机、情景剧、脱口秀、平衡游戏",
      'zh-TW': "隱藏攝像機、情景劇、脫口秀、平衡遊戲",
      vi: "Camera ẩn, vở kịch tình huống, chương trình nói chuyện, trò chơi cân bằng",
      id: "Kamera tersembunyi, sandiwara situasi, acara bincang, permainan keseimbangan"
    },
    cheatKey: {
      ko: "중독성 강한 유행어, 밈(Meme) 활용",
      en: "Highly addictive catchphrases, meme utilization",
      ja: "中毒性の強い流行語、ミーム（Meme）活用",
      'zh-CN': "高度成瘾的流行语，表情包运用",
      'zh-TW': "高度成癮的流行語，表情包運用",
      vi: "Câu nói gây nghiện cao, sử dụng meme",
      id: "Frasa yang sangat membuat ketagihan, pemanfaatan meme"
    },
    collabPartner: {
      ko: "Type 2 (먹방 유튜버 - 리액션 담당)",
      en: "Type 2 (Mukbang YouTuber - handles reactions)",
      ja: "タイプ2（モッパンユーチューバー - リアクション担当）",
      'zh-CN': "类型2（吃播YouTuber - 负责反应）",
      'zh-TW': "類型2（吃播YouTuber - 負責反應）",
      vi: "Loại 2 (YouTuber Mukbang - xử lý phản ứng)",
      id: "Tipe 2 (YouTuber Mukbang - menangani reaksi)"
    }
  },
  {
    type: "Type5",
    emoji: "🧠",
    title: {
      ko: "걸어 다니는 백과사전, 지식/정보 유튜버 (Genius)",
      en: "Walking Encyclopedia, Knowledge/Info YouTuber",
      ja: "歩く百科事典、知識/情報ユーチューバー（Genius）",
      'zh-CN': "行走的百科全书，知识/信息YouTuber（Genius）",
      'zh-TW': "行走的百科全書，知識/信息YouTuber（Genius）",
      vi: "Bách Khoa Toàn Thư Biết Đi, YouTuber Kiến Thức/Thông Tin",
      id: "Ensiklopedia Berjalan, YouTuber Pengetahuan/Info"
    },
    shortDescription: {
      ko: "\"뇌가 섹시해지는 유익한 시간\"",
      en: "\"Beneficial time that makes your brain sexy\"",
      ja: "「脳がセクシーになる有益な時間」",
      'zh-CN': "\"让大脑变得性感的益智时光\"",
      'zh-TW': "「讓大腦變得性感的益智時光」",
      vi: "\"Thời gian bổ ích khiến bộ não trở nên quyến rũ\"",
      id: "\"Waktu bermanfaat yang membuat otak menjadi seksi\""
    },
    description: {
      ko: "당신은 논리적이고 설명하는 것을 좋아합니다. 복잡한 사건이나 어려운 개념을 쉽고 재미있게 풀어서 이야기해 주는 능력이 탁월합니다. 영화 리뷰, 경제 분석, 역사 해설 등 당신의 지적인 매력에 빠진 구독자들이 떡상을시켜줄 것입니다.",
      en: "You're logical and love explaining things. You excel at breaking down complex events or difficult concepts in an easy and fun way. Movie reviews, economic analysis, historical explanations - subscribers who fall for your intellectual charm will make your channel rise.",
      ja: "あなたは論理的で説明することが好きです。複雑な事件や難しい概念を簡単で面白く解き明かして話す能力が卓越しています。映画レビュー、経済分析、歴史解説など、あなたの知的な魅力に夢中になった購読者がチャンネルを盛り上げるでしょう。",
      'zh-CN': "你逻辑性强，喜欢解释事物。擅长将复杂事件或困难概念以简单有趣的方式阐述。电影评价、经济分析、历史解说等，陷入你知性魅力的订阅者会让你的频道人气飙升。",
      'zh-TW': "你邏輯性強，喜歡解釋事物。擅長將複雜事件或困難概念以簡單有趣的方式闡述。電影評價、經濟分析、歷史解說等，陷入你知性魅力的訂閱者會讓你的頻道人氣飆升。",
      vi: "Bạn logic và thích giải thích mọi thứ. Bạn xuất sắc trong việc phá vỡ các sự kiện phức tạp hoặc khái niệm khó thành cách dễ hiểu và thú vị. Đánh giá phim, phân tích kinh tế, giải thích lịch sử - những người đăng ký say mê sự quyến rũ trí tuệ của bạn sẽ làm kênh của bạn tăng vọt.",
      id: "Anda logis dan suka menjelaskan hal-hal. Anda unggul dalam memecah peristiwa kompleks atau konsep sulit dengan cara yang mudah dan menyenangkan. Ulasan film, analisis ekonomi, penjelasan sejarah - pelanggan yang terpikat oleh pesona intelektual Anda akan membuat saluran Anda naik."
    },
    mainContent: {
      ko: "영화 해석, 미스터리 사건, 재테크 꿀팁",
      en: "Movie interpretations, mystery cases, investment tips",
      ja: "映画解釈、ミステリー事件、資産運用のコツ",
      'zh-CN': "电影解读、神秘事件、理财技巧",
      'zh-TW': "電影解讀、神秘事件、理財技巧",
      vi: "Diễn giải phim, vụ án bí ẩn, mẹo đầu tư",
      id: "Interpretasi film, kasus misteri, tips investasi"
    },
    cheatKey: {
      ko: "신뢰감을 주는 목소리(딕션), 깔끔한 자료 화면",
      en: "Trustworthy voice (diction), clean data screens",
      ja: "信頼感を与える声（発音）、すっきりした資料画面",
      'zh-CN': "值得信赖的声音（发音）、整洁的资料画面",
      'zh-TW': "值得信賴的聲音（發音）、整潔的資料畫面",
      vi: "Giọng nói đáng tin cậy (phát âm), màn hình dữ liệu gọn gàng",
      id: "Suara yang dapat dipercaya (diksi), layar data yang bersih"
    },
    collabPartner: {
      ko: "Type 3 (게임/IT 리뷰어)",
      en: "Type 3 (Game/IT Reviewer)",
      ja: "タイプ3（ゲーム/ITレビュアー）",
      'zh-CN': "类型3（游戏/IT评测者）",
      'zh-TW': "類型3（遊戲/IT評測者）",
      vi: "Loại 3 (Người Đánh Giá Game/IT)",
      id: "Tipe 3 (Reviewer Game/IT)"
    }
  },
  {
    type: "Type6",
    emoji: "💄",
    title: {
      ko: "인간 복숭아, 뷰티/패션 유튜버 (Beauty/Fashion)",
      en: "Human Peach, Beauty/Fashion YouTuber",
      ja: "人間桃、ビューティー/ファッションユーチューバー（Beauty/Fashion）",
      'zh-CN': "人间水蜜桃，美妆/时尚YouTuber（Beauty/Fashion）",
      'zh-TW': "人間水蜜桃，美妝/時尚YouTuber（Beauty/Fashion）",
      vi: "Đào Nhân Gian, YouTuber Làm Đẹp/Thời Trang",
      id: "Persik Manusia, YouTuber Kecantikan/Fashion"
    },
    shortDescription: {
      ko: "\"워너비 스타일 아이콘\"",
      en: "\"Wannabe style icon\"",
      ja: "「憧れのスタイルアイコン」",
      'zh-CN': "\"令人向往的风格偶像\"",
      'zh-TW': "「令人嚮往的風格偶像」",
      vi: "\"Biểu tượng phong cách đáng ao ước\"",
      id: "\"Ikon gaya yang diinginkan\""
    },
    description: {
      ko: "당신은 트렌드에 민감하고 꾸미는 것을 좋아합니다. 당신이 입고 바르는 모든 것이 정보가 되고 유행이 됩니다. 화려한 비주얼과 센스 있는 스타일링 팁으로 수많은 '손민수(따라쟁이)'들을 양성할 잠재력이 있습니다.",
      en: "You're sensitive to trends and love styling yourself. Everything you wear and put on becomes information and a trend. With your gorgeous visuals and sense-filled styling tips, you have the potential to raise countless 'followers'.",
      ja: "あなたはトレンドに敏感で、おしゃれすることが好きです。あなたが着て塗るすべてのものが情報になり、トレンドになります。華やかなビジュアルとセンスのあるスタイリングのコツで、数多くの「フォロワー（真似っ子）」を育てる可能性があります。",
      'zh-CN': "你对潮流敏感，喜欢打扮。你穿的和用的所有东西都会成为信息和流行趋势。凭借华丽的视觉效果和富有品味的造型技巧，你有潜力培养无数'跟风者'。",
      'zh-TW': "你對潮流敏感，喜歡打扮。你穿的和用的所有東西都會成為信息和流行趨勢。憑藉華麗的視覺效果和富有品味的造型技巧，你有潛力培養無數「跟風者」。",
      vi: "Bạn nhạy cảm với xu hướng và thích tạo kiểu cho bản thân. Mọi thứ bạn mặc và sử dụng đều trở thành thông tin và xu hướng. Với hình ảnh rực rỡ và mẹo tạo kiểu đầy cảm quan của bạn, bạn có tiềm năng nuôi dưỡng vô số 'người theo dõi'.",
      id: "Anda sensitif terhadap tren dan suka menata diri. Semua yang Anda kenakan dan pakai menjadi informasi dan tren. Dengan visual yang menawan dan tips styling penuh rasa, Anda berpotensi membesarkan banyak 'pengikut'."
    },
    mainContent: {
      ko: "메이크업 튜토리얼, 룩북(Lookbook), 하울",
      en: "Makeup tutorials, lookbooks, hauls",
      ja: "メイクアップチュートリアル、ルックブック、ハウル",
      'zh-CN': "化妆教程、造型册、开箱/购物分享",
      'zh-TW': "化妝教程、造型冊、開箱/購物分享",
      vi: "Hướng dẫn trang điểm, lookbook, haul",
      id: "Tutorial makeup, lookbook, haul"
    },
    cheatKey: {
      ko: "비포 & 애프터 반전 매력",
      en: "Before & after reversal charm",
      ja: "ビフォー＆アフターの反転魅力",
      'zh-CN': "前后对比反转魅力",
      'zh-TW': "前後對比反轉魅力",
      vi: "Sức hấp dẫn đảo ngược trước và sau",
      id: "Daya tarik pembalikan sebelum & sesudah"
    },
    collabPartner: {
      ko: "Type 1 (브이로거 - 감성 시너지)",
      en: "Type 1 (Vlogger - emotional synergy)",
      ja: "タイプ1（ブロガー - 感性シナジー）",
      'zh-CN': "类型1（Vlogger - 感性协同）",
      'zh-TW': "類型1（Vlogger - 感性協同）",
      vi: "Loại 1 (Vlogger - hiệu ứng cảm xúc)",
      id: "Tipe 1 (Vlogger - sinergi emosional)"
    }
  }
];

// 동점일 경우 우선순위: Type 4(예능) > Type 2(먹방) > Type 1(브이로그) > Type 6(뷰티) > Type 3(게임) > Type 5(지식)
const TYPE_PRIORITY: Record<string, number> = {
  "Type4": 6,
  "Type2": 5,
  "Type1": 4,
  "Type6": 3,
  "Type3": 2,
  "Type5": 1
};

export function calculatePhase2YoutubeChannelResult(answers: Record<number, number>, questions: Phase2YoutubeChannelQuestion[]): string {
  // 각 Type의 점수를 저장할 객체
  const typeScores: Record<string, number> = {
    "Type1": 0,
    "Type2": 0,
    "Type3": 0,
    "Type4": 0,
    "Type5": 0,
    "Type6": 0
  };

  // 각 질문의 답변을 기반으로 점수 계산
  Object.keys(answers).forEach(originalIndexStr => {
    const originalIndex = parseInt(originalIndexStr);
    const selectedOptionIndex = answers[originalIndex];
    const question = questions[originalIndex];
    
    if (question && question.options[selectedOptionIndex]) {
      const selectedOption = question.options[selectedOptionIndex];
      // 선택한 옵션이 점수를 주는 모든 Type에 +1
      selectedOption.scores.forEach(type => {
        if (typeScores.hasOwnProperty(type)) {
          typeScores[type]++;
        }
      });
    }
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = -1;
  let resultType = "Type1"; // 기본값
  
  Object.keys(typeScores).forEach(type => {
    const score = typeScores[type];
    if (score > maxScore || (score === maxScore && TYPE_PRIORITY[type] > TYPE_PRIORITY[resultType])) {
      maxScore = score;
      resultType = type;
    }
  });

  return resultType;
}

