export interface Phase2HiddenTalentQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    type: string; // 각 선택지가 점수를 주는 Type (예: "Type1", "Type2" 등)
  }[];
}

export interface Phase2HiddenTalentResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  hiddenTalent: Record<string, string>; // 숨겨진 재능 (empathyLevel로 매핑)
  recommendedFields: Record<string, string>; // 추천 분야 (characteristics로 매핑)
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2HiddenTalentQuestions: Phase2HiddenTalentQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아무도 없는 무인도에 떨어진다면 당신의 첫 행동은?",
      en: "If you were stranded on a deserted island, what would be your first action?",
      ja: "誰もいない無人島に流れ着いたら、あなたの最初の行動は？",
      'zh-CN': "如果流落到无人岛上，你的第一个行动是？",
      'zh-TW': "如果流落到無人島上，你的第一個行動是？",
      vi: "Nếu bạn bị mắc kẹt trên một hòn đảo hoang, hành động đầu tiên của bạn sẽ là gì?",
      id: "Jika Anda terdampar di pulau tak berpenghuni, apa tindakan pertama Anda?"
    },
    options: [
      { text: { ko: "구조될 때까지 버틸 안전한 은신처부터 찾는다", en: "First, find a safe hiding place to hold out until rescue", ja: "救助されるまで耐えられる安全な隠れ家から探す", 'zh-CN': "首先寻找一个安全的藏身处，坚持到救援", 'zh-TW': "首先尋找一個安全的藏身處，堅持到救援", vi: "Đầu tiên, tìm nơi ẩn náu an toàn để chờ đợi cứu hộ", id: "Pertama, cari tempat persembunyian yang aman untuk bertahan sampai diselamatkan" }, type: "Type6" },
      { text: { ko: "섬을 한 바퀴 돌며 지형을 파악하고 지도를 그린다", en: "Walk around the island to understand the terrain and draw a map", ja: "島を一周して地形を把握し地図を描く", 'zh-CN': "绕岛一周了解地形并绘制地图", 'zh-TW': "繞島一周了解地形並繪製地圖", vi: "Đi vòng quanh đảo để hiểu địa hình và vẽ bản đồ", id: "Berjalan mengelilingi pulau untuk memahami medan dan menggambar peta" }, type: "Type4" },
      { text: { ko: "\"살려주세요!\" 모래사장에 크게 구조 신호를 만든다", en: "Make a large SOS signal on the sandy beach saying \"Help!\"", ja: "「助けて！」砂浜に大きく救助信号を作る", 'zh-CN': "在海滩上制作大型求救信号\"救救我！\"", 'zh-TW': "在海灘上製作大型求救信號「救救我！」", vi: "Tạo tín hiệu cứu hộ lớn trên bãi biển với chữ \"Cứu tôi!\"", id: "Buat sinyal SOS besar di pantai pasir yang mengatakan \"Tolong!\"" }, type: "Type3" },
      { text: { ko: "나무를 깎아 작살을 만들고 물고기 사냥을 나간다", en: "Carve wood into a spear and go fishing", ja: "木を削って銛を作り魚を狩りに行く", 'zh-CN': "削木做矛去捕鱼", 'zh-TW': "削木做矛去捕魚", vi: "Đẽo gỗ thành cây lao và đi săn cá", id: "Ukir kayu menjadi tombak dan pergi memancing" }, type: "Type5" }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구들과 여행 계획을 짤 때 당신의 역할은?",
      en: "What is your role when planning a trip with friends?",
      ja: "友達と旅行計画を立てるとき、あなたの役割は？",
      'zh-CN': "和朋友制定旅行计划时，你的角色是？",
      'zh-TW': "和朋友制定旅行計劃時，你的角色是？",
      vi: "Vai trò của bạn khi lập kế hoạch đi du lịch với bạn bè là gì?",
      id: "Apa peran Anda saat merencanakan perjalanan dengan teman?"
    },
    options: [
      { text: { ko: "최저가 항공권, 숙소 예약, 동선 최적화 담당", en: "Handle cheapest flights, accommodation bookings, route optimization", ja: "最安航空券、宿泊予約、ルート最適化を担当", 'zh-CN': "负责最便宜的机票、住宿预订、路线优化", 'zh-TW': "負責最便宜的機票、住宿預訂、路線優化", vi: "Xử lý vé máy bay giá rẻ nhất, đặt phòng, tối ưu hóa lộ trình", id: "Menangani tiket pesawat termurah, pemesanan akomodasi, optimasi rute" }, type: "Type4" },
      { text: { ko: "\"거기 핫하대!\" 맛집과 핫플레이스 리스트 업 담당", en: "\"That place is hot!\" Handle listing restaurants and hot places", ja: "「そこが人気なんだって！」グルメとホットプレイスのリストアップを担当", 'zh-CN': "\"那里很热门！\"负责列出美食和热门地点", 'zh-TW': "「那裡很熱門！」負責列出美食和熱門地點", vi: "\"Nơi đó hot lắm!\" Phụ trách liệt kê nhà hàng và địa điểm hot", id: "\"Tempat itu populer!\" Menangani daftar restoran dan tempat populer" }, type: "Type1" },
      { text: { ko: "\"다 좋아~\" 군말 없이 따르고 분위기를 맞추는 리액션 담당", en: "\"All good~\" Follow without complaint and handle reactions to match the mood", ja: "「全部いいよ〜」文句も言わずについて行き雰囲気を合わせるリアクション担当", 'zh-CN': "\"都行~\"毫无怨言地跟随并负责配合气氛的反应", 'zh-TW': "「都行〜」毫無怨言地跟隨並負責配合氣氛的反應", vi: "\"Tất cả đều ổn~\" Đi theo không phàn nàn và xử lý phản ứng để phù hợp với không khí", id: "\"Semua baik~\" Ikut tanpa mengeluh dan menangani reaksi untuk menyesuaikan suasana" }, type: "Type6" },
      { text: { ko: "총무를 맡아 예산을 관리하고 회비를 걷는 담당", en: "Take charge of finances, manage budget and collect contributions", ja: "総務を担当して予算を管理し会費を集める", 'zh-CN': "担任总务，管理预算并收取会费", 'zh-TW': "擔任總務，管理預算並收取會費", vi: "Đảm nhận tổng vụ, quản lý ngân sách và thu tiền đóng góp", id: "Mengambil alih keuangan, mengelola anggaran dan mengumpulkan kontribusi" }, type: "Type5" }
    ]
  },
  {
    id: 3,
    question: {
      ko: "멍하니 있을 때 주로 하는 상상은?",
      en: "What do you usually imagine when spacing out?",
      ja: "ぼーっとしているとき、主に何を想像する？",
      'zh-CN': "发呆时你主要会想象什么？",
      'zh-TW': "發呆時你主要會想像什麼？",
      vi: "Bạn thường tưởng tượng gì khi đang mơ màng?",
      id: "Apa yang biasanya Anda bayangkan saat melamun?"
    },
    options: [
      { text: { ko: "'로또 1등 당첨되면 뭐부터 사지?' 행복한 소비 계획", en: "'What should I buy first if I win the lottery?' Happy spending plans", ja: "「ロト1等当選したら何から買おう？」幸せな消費計画", 'zh-CN': "\"中彩票后先买什么？\"幸福的消费计划", 'zh-TW': "「中彩券後先買什麼？」幸福的消費計劃", vi: "'Nên mua gì trước nếu trúng xổ số?' Kế hoạch chi tiêu hạnh phúc", id: "'Apa yang harus saya beli dulu jika menang lotre?' Rencana pengeluaran yang bahagia" }, type: "Type4" },
      { text: { ko: "'좀비가 나타나면 어디로 도망가지?' 생존 시뮬레이션", en: "'Where should I run if zombies appear?' Survival simulation", ja: "「ゾンビが現れたらどこへ逃げる？」生存シミュレーション", 'zh-CN': "\"如果出现僵尸，该往哪里逃？\"生存模拟", 'zh-TW': "「如果出現殭屍，該往哪裡逃？」生存模擬", vi: "'Nên chạy đi đâu nếu zombie xuất hiện?' Mô phỏng sinh tồn", id: "'Kemana saya harus lari jika zombie muncul?' Simulasi bertahan hidup" }, type: "Type5" },
      { text: { ko: "'왜 인간은 태어났을까?' 철학적이고 우주적인 고민", en: "'Why were humans born?' Philosophical and cosmic thoughts", ja: "「なぜ人間は生まれたのか？」哲学的で宇宙的な悩み", 'zh-CN': "\"人类为什么出生？\"哲学和宇宙的思考", 'zh-TW': "「人類為什麼出生？」哲學和宇宙的思考", vi: "'Tại sao con người được sinh ra?' Suy nghĩ triết học và vũ trụ", id: "'Mengapa manusia dilahirkan?' Pemikiran filosofis dan kosmik" }, type: "Type2" },
      { text: { ko: "'이 물건을 이렇게 고치면 더 편하겠는데?' 발명과 개선", en: "'If I fix this thing like this, it would be more convenient?' Invention and improvement", ja: "「この物をこうやって直したらもっと便利だろう？」発明と改善", 'zh-CN': "\"如果这样修这个东西会更方便吧？\"发明和改进", 'zh-TW': "「如果這樣修這個東西會更方便吧？」發明和改進", vi: "'Nếu sửa vật này như thế này thì sẽ tiện hơn nhỉ?' Phát minh và cải tiến", id: "'Jika saya memperbaiki benda ini begini, akan lebih nyaman?' Penemuan dan peningkatan" }, type: "Type2" }
    ]
  },
  {
    id: 4,
    question: {
      ko: "서점에서 책을 한 권 산다면?",
      en: "If you buy one book at a bookstore?",
      ja: "書店で本を一冊買うとしたら？",
      'zh-CN': "如果在书店买一本书？",
      'zh-TW': "如果在書店買一本書？",
      vi: "Nếu bạn mua một cuốn sách ở hiệu sách?",
      id: "Jika Anda membeli satu buku di toko buku?"
    },
    options: [
      { text: { ko: "베스트셀러 소설이나 감성적인 에세이", en: "Bestseller novel or emotional essay", ja: "ベストセラー小説や感情的なエッセイ", 'zh-CN': "畅销小说或感性的散文", 'zh-TW': "暢銷小說或感性的散文", vi: "Tiểu thuyết bestseller hoặc bài luận cảm xúc", id: "Novel bestseller atau esai emosional" }, type: "Type2" },
      { text: { ko: "주식 투자, 경제 전망 등 재테크 관련 서적", en: "Stock investment, economic outlook, and other financial books", ja: "株式投資、経済見通しなど資産運用関連の書籍", 'zh-CN': "股票投资、经济前景等理财相关书籍", 'zh-TW': "股票投資、經濟前景等理財相關書籍", vi: "Sách về đầu tư chứng khoán, triển vọng kinh tế, v.v.", id: "Investasi saham, prospek ekonomi, dan buku keuangan lainnya" }, type: "Type4" },
      { text: { ko: "심리학, 인간관계, 대화법 관련 서적", en: "Psychology, relationships, conversation techniques related books", ja: "心理学、人間関係、会話術関連の書籍", 'zh-CN': "心理学、人际关系、对话技巧相关书籍", 'zh-TW': "心理學、人際關係、對話技巧相關書籍", vi: "Sách về tâm lý học, mối quan hệ, kỹ thuật trò chuyện", id: "Buku tentang psikologi, hubungan, teknik percakapan" }, type: "Type3" },
      { text: { ko: "역사, 과학, 미스터리 등 지적 호기심을 채워줄 책", en: "Books that satisfy intellectual curiosity like history, science, mystery", ja: "歴史、科学、ミステリーなど知的好奇心を満たす本", 'zh-CN': "满足知识好奇心的书籍，如历史、科学、悬疑", 'zh-TW': "滿足知識好奇心的書籍，如歷史、科學、懸疑", vi: "Sách thỏa mãn trí tò mò trí tuệ như lịch sử, khoa học, bí ẩn", id: "Buku yang memuaskan keingintahuan intelektual seperti sejarah, sains, misteri" }, type: "Type1" }
    ]
  },
  {
    id: 5,
    question: {
      ko: "나를 가장 화나게 하는 상황은?",
      en: "What situation makes me angriest?",
      ja: "私を最も怒らせる状況は？",
      'zh-CN': "什么情况最让我生气？",
      'zh-TW': "什麼情況最讓我生氣？",
      vi: "Tình huống nào khiến tôi tức giận nhất?",
      id: "Situasi apa yang paling membuat saya marah?"
    },
    options: [
      { text: { ko: "비효율적이고 꽉 막힌 시스템 때문에 시간 낭비할 때", en: "When wasting time due to inefficient and rigid systems", ja: "非効率で硬直的なシステムのために時間を無駄にするとき", 'zh-CN': "因为低效和僵化的系统而浪费时间时", 'zh-TW': "因為低效和僵化的系統而浪費時間時", vi: "Khi lãng phí thời gian vì hệ thống kém hiệu quả và cứng nhắc", id: "Ketika membuang waktu karena sistem yang tidak efisien dan kaku" }, type: "Type5" },
      { text: { ko: "예의 없고 무례한 사람에게 존중받지 못할 때", en: "When not being respected by rude and impolite people", ja: "礼儀がなく失礼な人に尊重されないとき", 'zh-CN': "不被无礼粗鲁的人尊重时", 'zh-TW': "不被無禮粗魯的人尊重時", vi: "Khi không được tôn trọng bởi những người thô lỗ và vô lễ", id: "Ketika tidak dihormati oleh orang yang tidak sopan dan kasar" }, type: "Type3" },
      { text: { ko: "내 자유를 억압받고 통제당한다고 느낄 때", en: "When feeling oppressed and controlled in my freedom", ja: "自分の自由が抑圧され統制されていると感じるとき", 'zh-CN': "感到自由受到压迫和控制时", 'zh-TW': "感到自由受到壓迫和控制時", vi: "Khi cảm thấy tự do bị đàn áp và kiểm soát", id: "Ketika merasa kebebasan saya ditekan dan dikendalikan" }, type: "Type1" },
      { text: { ko: "열심히 노력했는데 결과가 공정하지 않을 때", en: "When I worked hard but the result is unfair", ja: "一生懸命努力したのに結果が公正でないとき", 'zh-CN': "努力了但结果不公平时", 'zh-TW': "努力了但結果不公平時", vi: "Khi đã cố gắng hết sức nhưng kết quả không công bằng", id: "Ketika saya bekerja keras tapi hasilnya tidak adil" }, type: "Type6" }
    ]
  },
  {
    id: 6,
    question: {
      ko: "새로운 스마트폰 어플(App)이 나왔다!",
      en: "A new smartphone app has been released!",
      ja: "新しいスマホアプリが登場！",
      'zh-CN': "新的智能手机应用发布了！",
      'zh-TW': "新的智能手機應用發布了！",
      vi: "Ứng dụng điện thoại thông minh mới đã được phát hành!",
      id: "Aplikasi smartphone baru telah dirilis!"
    },
    options: [
      { text: { ko: "남들이 좋다고 하면 그때 가서 다운로드한다", en: "Download it when others say it's good", ja: "他の人がいいと言ったらそのときダウンロードする", 'zh-CN': "别人说好才去下载", 'zh-TW': "別人說好才去下載", vi: "Tải xuống khi người khác nói nó tốt", id: "Unduh ketika orang lain bilang bagus" }, type: "Type6" },
      { text: { ko: "출시되자마자 깔아서 이것저것 기능부터 눌러본다", en: "Download immediately upon release and try out various features", ja: "リリースされ次第インストールしてあれこれ機能を試す", 'zh-CN': "一发布就下载，先试试各种功能", 'zh-TW': "一發布就下載，先試試各種功能", vi: "Tải xuống ngay khi phát hành và thử các tính năng khác nhau", id: "Unduh segera setelah rilis dan coba berbagai fitur" }, type: "Type1" },
      { text: { ko: "디자인이 예쁘거나 내 취향이면 사용한다", en: "Use it if the design is pretty or matches my taste", ja: "デザインが可愛いか自分の好みなら使う", 'zh-CN': "如果设计漂亮或符合我的喜好就使用", 'zh-TW': "如果設計漂亮或符合我的喜好就使用", vi: "Sử dụng nếu thiết kế đẹp hoặc phù hợp với sở thích của tôi", id: "Gunakan jika desainnya cantik atau sesuai selera saya" }, type: "Type2" },
      { text: { ko: "리뷰와 평점을 꼼꼼히 분석하고 비교한 뒤 결정한다", en: "Analyze reviews and ratings carefully, compare, then decide", ja: "レビューと評価をしっかり分析して比較した後決める", 'zh-CN': "仔细分析评论和评分，比较后决定", 'zh-TW': "仔細分析評論和評分，比較後決定", vi: "Phân tích đánh giá và xếp hạng cẩn thận, so sánh rồi quyết định", id: "Analisis ulasan dan peringkat dengan hati-hati, bandingkan, lalu putuskan" }, type: "Type4" }
    ]
  },
  {
    id: 7,
    question: {
      ko: "팀 프로젝트 중, 의견이 갈려서 싸움이 났다.",
      en: "During a team project, opinions diverged and a fight broke out.",
      ja: "チームプロジェクト中、意見が分かれて喧嘩になった。",
      'zh-CN': "团队项目中，意见分歧导致发生争执。",
      'zh-TW': "團隊項目中，意見分歧導致發生爭執。",
      vi: "Trong dự án nhóm, ý kiến phân hóa và xảy ra cãi vã.",
      id: "Selama proyek tim, pendapat berbeda dan terjadi pertengkaran."
    },
    options: [
      { text: { ko: "양쪽 의견을 다 듣고 절충안을 제시해 중재한다", en: "Listen to both opinions and propose a compromise to mediate", ja: "両方の意見を聞いて妥協案を提示して仲裁する", 'zh-CN': "听取双方意见并提出折衷方案进行调解", 'zh-TW': "聽取雙方意見並提出折衷方案進行調解", vi: "Lắng nghe cả hai ý kiến và đề xuất giải pháp thỏa hiệp để hòa giải", id: "Dengarkan kedua pendapat dan usulkan kompromi untuk menengahi" }, type: "Type3" },
      { text: { ko: "누구의 논리가 더 타당한지 팩트로 따져본다", en: "Examine which logic is more valid using facts", ja: "誰の論理がより妥当か事実で追求する", 'zh-CN': "用事实分析谁的理由更合理", 'zh-TW': "用事實分析誰的理由更合理", vi: "Xem xét logic nào hợp lý hơn bằng sự thật", id: "Periksa logika mana yang lebih valid menggunakan fakta" }, type: "Type4" },
      { text: { ko: "싸우지 말고 좋게 하자며 분위기를 푼다", en: "Relax the atmosphere by saying let's not fight and get along", ja: "喧嘩しないで仲良くしようと言って雰囲気を和らげる", 'zh-CN': "说不要吵架，好好相处，缓和气氛", 'zh-TW': "說不要吵架，好好相處，緩和氣氛", vi: "Làm dịu không khí bằng cách nói đừng cãi nhau và hãy hòa thuận", id: "Santai suasana dengan mengatakan jangan bertengkar dan baik-baik" }, type: "Type6" },
      { text: { ko: "내 의견을 강력하게 어필해서 주도권을 잡는다", en: "Strongly appeal my opinion to take the lead", ja: "自分の意見を強くアピールして主導権を握る", 'zh-CN': "强烈表达我的意见以掌握主导权", 'zh-TW': "強烈表達我的意見以掌握主導權", vi: "Thuyết phục mạnh mẽ ý kiến của tôi để nắm quyền chủ động", id: "Perjuangkan pendapat saya dengan kuat untuk mengambil alih kendali" }, type: "Type5" }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 '성공한 삶'이란?",
      en: "What do you think a 'successful life' is?",
      ja: "あなたが考える「成功した人生」とは？",
      'zh-CN': "你认为的'成功人生'是什么？",
      'zh-TW': "你認為的「成功人生」是什麼？",
      vi: "Bạn nghĩ 'cuộc sống thành công' là gì?",
      id: "Apa yang Anda pikirkan tentang 'hidup yang berhasil'?"
    },
    options: [
      { text: { ko: "경제적 자유를 얻어 평생 돈 걱정 없이 사는 것", en: "Achieving financial freedom and living without money worries for life", ja: "経済的自由を得て一生お金の心配なく生きること", 'zh-CN': "获得经济自由，一生不用为钱担忧", 'zh-TW': "獲得經濟自由，一生不用為錢擔憂", vi: "Đạt được tự do tài chính và sống không lo lắng về tiền bạc suốt đời", id: "Mencapai kebebasan finansial dan hidup tanpa khawatir uang seumur hidup" }, type: "Type4" },
      { text: { ko: "세상에 내 이름을 남기고 명예를 얻는 것", en: "Leaving my name in the world and gaining fame", ja: "世の中に自分の名前を残し名誉を得ること", 'zh-CN': "在世上留下我的名字并获得名誉", 'zh-TW': "在世上留下我的名字並獲得名譽", vi: "Để lại tên tuổi trên thế giới và đạt được danh tiếng", id: "Meninggalkan nama saya di dunia dan mendapatkan ketenaran" }, type: "Type5" },
      { text: { ko: "사랑하는 사람들과 화목하고 건강하게 사는 것", en: "Living harmoniously and healthily with loved ones", ja: "愛する人々と仲良く健康に生きること", 'zh-CN': "与所爱的人和睦健康地生活", 'zh-TW': "與所愛的人和睦健康地生活", vi: "Sống hòa thuận và khỏe mạnh với những người thân yêu", id: "Hidup harmonis dan sehat dengan orang yang dicintai" }, type: "Type3" },
      { text: { ko: "내가 하고 싶은 일을 하며 자유롭게 사는 것", en: "Living freely doing what I want to do", ja: "自分がしたいことをしながら自由に生きること", 'zh-CN': "自由地做我想做的事", 'zh-TW': "自由地做我想做的事", vi: "Sống tự do làm những gì tôi muốn làm", id: "Hidup bebas melakukan apa yang ingin saya lakukan" }, type: "Type1" }
    ]
  },
  {
    id: 9,
    question: {
      ko: "길을 걷다 독특한 간판의 가게를 발견했다.",
      en: "While walking, you discovered a store with a unique sign.",
      ja: "道を歩いているとき、ユニークな看板のお店を発見した。",
      'zh-CN': "走路时发现了一家招牌独特的商店。",
      'zh-TW': "走路時發現了一家招牌獨特的商店。",
      vi: "Khi đang đi bộ, bạn phát hiện một cửa hàng có bảng hiệu độc đáo.",
      id: "Saat berjalan, Anda menemukan toko dengan papan nama yang unik."
    },
    options: [
      { text: { ko: "\"와, 저기 사장님 센스 있네.\" 디자인 감각을 본다", en: "\"Wow, that owner has style.\" I look at the design sense", ja: "「わあ、あそこの店主センスあるね。」デザイン感覚を見る", 'zh-CN': "\"哇，那个老板真有品味。\"我看设计感", 'zh-TW': "「哇，那個老闆真有品味。」我看設計感", vi: "\"Ồ, chủ cửa hàng đó có gu đấy.\" Tôi xem xét cảm quan thiết kế", id: "\"Wow, pemilik toko itu punya selera.\" Saya melihat sense desain" }, type: "Type2" },
      { text: { ko: "\"저 자리는 월세가 얼마일까?\" 상권과 수익을 분석한다", en: "\"How much is the monthly rent for that location?\" I analyze the commercial area and profitability", ja: "「あの場所の月額はいくらだろう？」商圏と収益を分析する", 'zh-CN': "\"那个位置的月租是多少？\"我分析商圈和收益", 'zh-TW': "「那個位置的月租是多少？」我分析商圈和收益", vi: "\"Tiền thuê hàng tháng ở vị trí đó là bao nhiêu?\" Tôi phân tích khu vực thương mại và lợi nhuận", id: "\"Berapa sewa bulanan untuk lokasi itu?\" Saya menganalisis area komersial dan profitabilitas" }, type: "Type4" },
      { text: { ko: "\"뭐 파는 곳이지?\" 호기심에 일단 들어가 본다", en: "\"What do they sell?\" I go in out of curiosity", ja: "「何を売ってるんだろう？」好奇心でとりあえず入ってみる", 'zh-CN': "\"卖什么的？\"出于好奇先进去看看", 'zh-TW': "「賣什麼的？」出於好奇先進去看看", vi: "\"Họ bán gì vậy?\" Tôi vào xem vì tò mò", id: "\"Apa yang mereka jual?\" Saya masuk karena penasaran" }, type: "Type1" },
      { text: { ko: "그냥 지나친다. (관심 없음)", en: "Just pass by. (Not interested)", ja: "ただ通り過ぎる。（興味なし）", 'zh-CN': "直接走过。（不感兴趣）", 'zh-TW': "直接走過。（不感興趣）", vi: "Chỉ đi qua. (Không quan tâm)", id: "Hanya lewat. (Tidak tertarik)" }, type: "Type6" }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구가 엉뚱한 사업 아이디어를 말한다면?",
      en: "If a friend suggests a wild business idea?",
      ja: "友達がとんでもないビジネスアイデアを言ったら？",
      'zh-CN': "如果朋友提出一个奇怪的事业想法？",
      'zh-TW': "如果朋友提出一個奇怪的事業想法？",
      vi: "Nếu bạn bè đề xuất một ý tưởng kinh doanh kỳ lạ?",
      id: "Jika teman menyarankan ide bisnis yang aneh?"
    },
    options: [
      { text: { ko: "\"재밌겠다! 이름은 뭘로 할 거야?\" 같이 신나서 맞장구친다", en: "\"That sounds fun! What will you name it?\" I get excited and join in", ja: "「面白そう！名前は何にするの？」一緒に盛り上がって相槌を打つ", 'zh-CN': "\"听起来很有趣！你要起什么名字？\"我也兴奋起来一起讨论", 'zh-TW': "「聽起來很有趣！你要起什麼名字？」我也興奮起來一起討論", vi: "\"Nghe hay đấy! Bạn sẽ đặt tên gì?\" Tôi hào hứng và tham gia vào", id: "\"Kedengarannya menyenangkan! Apa nama yang akan Anda berikan?\" Saya menjadi bersemangat dan ikut serta" }, type: "Type2" },
      { text: { ko: "\"그게 현실적으로 가능해? 자본금은?\" 리스크를 지적한다", en: "\"Is that realistically possible? What about capital?\" I point out the risks", ja: "「それが現実的に可能？資本金は？」リスクを指摘する", 'zh-CN': "\"这现实吗？资金呢？\"我指出风险", 'zh-TW': "「這現實嗎？資金呢？」我指出風險", vi: "\"Điều đó có thực tế không? Còn vốn thì sao?\" Tôi chỉ ra rủi ro", id: "\"Apakah itu realistis? Bagaimana dengan modal?\" Saya menunjuk risiko" }, type: "Type4" },
      { text: { ko: "\"너라면 잘할 수 있을 거야.\" 맹목적으로 응원한다", en: "\"You could do well.\" I blindly cheer them on", ja: "「あなたならうまくできるよ。」盲目的に応援する", 'zh-CN': "\"你应该能做好的。\"我盲目地支持", 'zh-TW': "「你應該能做好的。」我盲目地支持", vi: "\"Bạn có thể làm tốt mà.\" Tôi ủng hộ một cách mù quáng", id: "\"Anda pasti bisa melakukannya dengan baik.\" Saya memberikan dukungan tanpa berpikir" }, type: "Type3" },
      { text: { ko: "\"그거랑 비슷한 거 이미 있던데?\" 시장 조사를 해준다", en: "\"Something similar already exists, doesn't it?\" I do market research for them", ja: "「それと似たようなものもうあったよね？」市場調査をしてあげる", 'zh-CN': "\"类似的东西已经存在了吧？\"我为他们做市场调研", 'zh-TW': "「類似的東西已經存在了吧？」我為他們做市場調研", vi: "\"Cái gì đó tương tự đã có rồi phải không?\" Tôi nghiên cứu thị trường cho họ", id: "\"Sesuatu yang mirip sudah ada, kan?\" Saya melakukan riset pasar untuk mereka" }, type: "Type1" }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 옷장을 열어보면?",
      en: "What do you see when you open your closet?",
      ja: "あなたのクローゼットを開けると？",
      'zh-CN': "打开你的衣柜会看到什么？",
      'zh-TW': "打開你的衣櫃會看到什麼？",
      vi: "Bạn thấy gì khi mở tủ quần áo của mình?",
      id: "Apa yang Anda lihat saat membuka lemari pakaian Anda?"
    },
    options: [
      { text: { ko: "무채색 위주의 깔끔하고 단정한 옷들", en: "Clean and neat clothes mainly in neutral colors", ja: "無彩色中心のすっきりと整った服", 'zh-CN': "主要是中性色的干净整洁的衣服", 'zh-TW': "主要是中性色的乾淨整潔的衣服", vi: "Quần áo sạch sẽ và gọn gàng chủ yếu là màu trung tính", id: "Pakaian bersih dan rapi terutama dalam warna netral" }, type: "Type6" },
      { text: { ko: "유행하는 스타일이나 화려한 색감의 옷들", en: "Trendy styles or clothes with vibrant colors", ja: "流行のスタイルや華やかな色合いの服", 'zh-CN': "流行的款式或颜色鲜艳的衣服", 'zh-TW': "流行的款式或顏色鮮豔的衣服", vi: "Phong cách thời trang hoặc quần áo có màu sắc rực rỡ", id: "Gaya tren atau pakaian dengan warna-warna cerah" }, type: "Type1" },
      { text: { ko: "편안함이 최고! 츄리닝이나 오버핏 의류", en: "Comfort is best! Tracksuits or oversized clothing", ja: "快適さが最高！トレーニングウェアやオーバーサイズの服", 'zh-CN': "舒适最重要！运动服或 oversized 服装", 'zh-TW': "舒適最重要！運動服或 oversized 服裝", vi: "Sự thoải mái là nhất! Quần áo thể thao hoặc quần áo oversized", id: "Kenyamanan adalah yang terbaik! Pakaian olahraga atau pakaian oversized" }, type: "Type5" },
      { text: { ko: "남들은 잘 안 입는 독특하고 개성 있는 옷들", en: "Unique and individual clothes that others don't often wear", ja: "他の人があまり着ない独特で個性的な服", 'zh-CN': "别人很少穿的独特有个性的衣服", 'zh-TW': "別人很少穿的獨特有個性的衣服", vi: "Quần áo độc đáo và cá tính mà người khác ít mặc", id: "Pakaian unik dan individual yang jarang dipakai orang lain" }, type: "Type2" }
    ]
  },
  {
    id: 12,
    question: {
      ko: "신이 당신에게 한 가지 재능을 더 준다면?",
      en: "If God gave you one more talent?",
      ja: "神があなたにもう一つの才能をくれたら？",
      'zh-CN': "如果神再给你一种才能？",
      'zh-TW': "如果神再給你一種才能？",
      vi: "Nếu Chúa ban cho bạn thêm một tài năng?",
      id: "Jika Tuhan memberi Anda satu bakat lagi?"
    },
    options: [
      { text: { ko: "사람의 마음을 읽고 움직이는 심리 조종 능력", en: "The ability to read and manipulate people's minds psychologically", ja: "人の心を読み操る心理操作能力", 'zh-CN': "读懂并操控人心的心理操控能力", 'zh-TW': "讀懂並操控人心的心理操控能力", vi: "Khả năng đọc và thao túng tâm trí con người một cách tâm lý", id: "Kemampuan membaca dan memanipulasi pikiran orang secara psikologis" }, type: "Type3" },
      { text: { ko: "미래의 흐름을 꿰뚫어 보는 통찰력과 예지력", en: "Insight and foresight to see through future trends", ja: "未来の流れを見抜く洞察力と予知力", 'zh-CN': "看透未来趋势的洞察力和预见力", 'zh-TW': "看透未來趨勢的洞察力和預見力", vi: "Sự sáng suốt và khả năng tiên đoán để nhìn thấu xu hướng tương lai", id: "Wawasan dan pandangan ke depan untuk melihat tren masa depan" }, type: "Type1" },
      { text: { ko: "무엇이든 뚝딱 만들어내는 금손 창작 능력", en: "Golden hand creative ability to make anything instantly", ja: "何でもあっという間に作る金の手の創作能力", 'zh-CN': "能瞬间创造出任何东西的黄金手创作能力", 'zh-TW': "能瞬間創造出任何東西的黃金手創作能力", vi: "Khả năng sáng tạo bàn tay vàng để tạo ra bất cứ thứ gì ngay lập tức", id: "Kemampuan kreatif tangan emas untuk membuat apa pun secara instan" }, type: "Type2" },
      { text: { ko: "어떤 상황에서도 살아남는 강철 멘탈과 체력", en: "Steel mental strength and physical stamina to survive any situation", ja: "どんな状況でも生き残る鋼のメンタルと体力", 'zh-CN': "在任何情况下都能生存的钢铁意志和体力", 'zh-TW': "在任何情況下都能生存的鋼鐵意志和體力", vi: "Sức mạnh tinh thần và thể chất thép để sống sót trong mọi tình huống", id: "Kekuatan mental baja dan stamina fisik untuk bertahan dalam situasi apa pun" }, type: "Type5" }
    ]
  }
];

export const phase2HiddenTalentResults: Phase2HiddenTalentResult[] = [
  {
    type: "Type1",
    emoji: "🏹",
    title: {
      ko: "시대를 앞서가는, 트렌드 사냥꾼 (Trend Setter)",
      en: "Trend Setter, Ahead of the Times",
      ja: "時代を先駆ける、トレンドハンター",
      'zh-CN': "走在时代前列，潮流猎人",
      'zh-TW': "走在時代前列，潮流獵人",
      vi: "Người Đặt Xu Hướng, Đi Trước Thời Đại",
      id: "Pembuat Tren, Melampaui Zaman"
    },
    shortDescription: {
      ko: "\"남들보다 반 박자 빠른 감각\"",
      en: "\"A sense half a beat faster than others\"",
      ja: "「人より半拍早いセンス」",
      'zh-CN': "\"比他人快半拍的感觉\"",
      'zh-TW': "「比他人快半拍的感覺」",
      vi: "\"Cảm giác nhanh hơn người khác nửa nhịp\"",
      id: "\"Perasaan setengah ketukan lebih cepat dari yang lain\""
    },
    description: {
      ko: "당신은 새로운 것에 대한 호기심이 많고, 유행의 흐름을 본능적으로 감지하는 능력이 있습니다. 남들이 \"그게 뭐야?\" 할 때 이미 그것을 즐기고 있는 얼리어답터 기질이 다분합니다. 대중의 니즈를 파악하는 마케팅이나 기획 분야에서 잠재력이 폭발할 수 있습니다.",
      en: "You have a lot of curiosity about new things and an instinctive ability to detect trends. You have the qualities of an early adopter, already enjoying things when others ask \"What's that?\" You have explosive potential in fields like marketing or planning that understand public needs.",
      ja: "あなたは新しいものへの好奇心が強く、流行の流れを本能的に察知する能力があります。他の人が「それは何？」と言うとき、すでにそれを楽しんでいるアーリーアダプターの気質があります。大衆のニーズを把握するマーケティングや企画分野で潜在能力が爆発する可能性があります。",
      'zh-CN': "你对新事物充满好奇，具有本能地感知潮流趋势的能力。当别人问\"那是什么？\"时，你已经享受其中，具有很强的早期采用者特质。在把握大众需求的市场营销或策划领域，你的潜力可能会爆发。",
      'zh-TW': "你對新事物充滿好奇，具有本能地感知潮流趨勢的能力。當別人問「那是什麼？」時，你已經享受其中，具有很強的早期採用者特質。在把握大眾需求的市場營銷或策劃領域，你的潛力可能會爆發。",
      vi: "Bạn có nhiều tò mò về những điều mới và khả năng cảm nhận xu hướng một cách bản năng. Bạn có đặc tính của một người tiên phong, đã tận hưởng những thứ đó khi người khác hỏi \"Đó là gì?\" Bạn có tiềm năng bùng nổ trong các lĩnh vực như marketing hoặc lập kế hoạch để nắm bắt nhu cầu của công chúng.",
      id: "Anda memiliki banyak rasa ingin tahu tentang hal-hal baru dan kemampuan untuk mendeteksi tren secara naluriah. Anda memiliki kualitas early adopter, sudah menikmati hal-hal ketika orang lain bertanya \"Apa itu?\" Anda memiliki potensi eksplosif di bidang seperti pemasaran atau perencanaan yang memahami kebutuhan publik."
    },
    hiddenTalent: {
      ko: "직관력, 센스, 정보 수집 능력",
      en: "Intuition, sense, information gathering ability",
      ja: "直感力、センス、情報収集能力",
      'zh-CN': "直觉力、感觉、信息收集能力",
      'zh-TW': "直覺力、感覺、資訊收集能力",
      vi: "Trực giác, cảm quan, khả năng thu thập thông tin",
      id: "Intuisi, sense, kemampuan pengumpulan informasi"
    },
    recommendedFields: {
      ko: "마케팅, 패션/뷰티, 콘텐츠 기획",
      en: "Marketing, fashion/beauty, content planning",
      ja: "マーケティング、ファッション/美容、コンテンツ企画",
      'zh-CN': "市场营销、时尚/美容、内容策划",
      'zh-TW': "市場營銷、時尚/美容、內容策劃",
      vi: "Marketing, thời trang/làm đẹp, lập kế hoạch nội dung",
      id: "Pemasaran, fashion/kecantikan, perencanaan konten"
    },
    goodMatch: {
      ko: "Type 4 (전략가) - 아이디어를 현실화시켜줌",
      en: "Type 4 (Strategist) - Brings ideas to reality",
      ja: "Type 4（戦略家）- アイデアを現実化してくれる",
      'zh-CN': "Type 4（战略家）- 将想法变为现实",
      'zh-TW': "Type 4（戰略家）- 將想法變為現實",
      vi: "Type 4 (Nhà chiến lược) - Biến ý tưởng thành hiện thực",
      id: "Type 4 (Strategist) - Membawa ide ke kenyataan"
    },
    badMatch: {
      ko: "Type 6 (수호자) - 너무 보수적이라 답답함",
      en: "Type 6 (Guardian) - Too conservative, frustrating",
      ja: "Type 6（守護者）- 保守的すぎてイライラする",
      'zh-CN': "Type 6（守护者）- 太保守，令人沮丧",
      'zh-TW': "Type 6（守護者）- 太保守，令人沮喪",
      vi: "Type 6 (Người bảo vệ) - Quá bảo thủ, gây bực bội",
      id: "Type 6 (Penjaga) - Terlalu konservatif, membuat frustrasi"
    }
  },
  {
    type: "Type2",
    emoji: "💡",
    title: {
      ko: "무에서 유를 창조하는, 아이디어 뱅크 (Creator)",
      en: "Idea Bank, Creating Something from Nothing (Creator)",
      ja: "無から有を創造する、アイデアバンク",
      'zh-CN': "从无到有创造，创意银行",
      'zh-TW': "從無到有創造，創意銀行",
      vi: "Ngân Hàng Ý Tưởng, Sáng Tạo Từ Không (Người Sáng Tạo)",
      id: "Bank Ide, Menciptakan Sesuatu dari Ketiadaan (Pencipta)"
    },
    shortDescription: {
      ko: "\"상상력이 곧 현실이 되는 마법\"",
      en: "\"Magic where imagination becomes reality\"",
      ja: "「想像力がそのまま現実になる魔法」",
      'zh-CN': "\"想象力即刻变为现实的魔法\"",
      'zh-TW': "「想像力即刻變為現實的魔法」",
      vi: "\"Phép thuật khi trí tưởng tượng trở thành hiện thực\"",
      id: "\"Keajaiban di mana imajinasi menjadi kenyataan\""
    },
    description: {
      ko: "당신은 엉뚱한 상상을 즐기고, 남들과 다른 관점으로 세상을 봅니다. \"왜 안 돼?\"라는 질문을 자주 던지며, 고정관념을 깨는 것을 좋아합니다. 당신의 머릿속에 있는 독창적인 아이디어는 예술이나 창작 활동을 통해 세상에 나왔을 때 큰 가치를 발휘합니다.",
      en: "You enjoy wild imagination and see the world from a different perspective than others. You often ask \"Why not?\" and like breaking stereotypes. Your original ideas in your head will show great value when they come out into the world through art or creative activities.",
      ja: "あなたはとんでもない想像を楽しみ、他の人とは違う視点で世界を見ます。「なぜできないの？」という質問をよく投げかけ、固定観念を破ることを好みます。あなたの頭の中にある独創的なアイデアは、芸術や創作活動を通じて世の中に出たときに大きな価値を発揮します。",
      'zh-CN': "你喜欢天马行空的想象，用与他人不同的视角看世界。你经常问\"为什么不行？\"，喜欢打破固有观念。你脑海中的独创想法通过艺术或创作活动展现在世人面前时会发挥巨大价值。",
      'zh-TW': "你喜歡天馬行空的想像，用與他人不同的視角看世界。你經常問「為什麼不行？」，喜歡打破固有觀念。你腦海中的獨創想法通過藝術或創作活動展現在世人面前時會發揮巨大價值。",
      vi: "Bạn thích tưởng tượng kỳ lạ và nhìn thế giới từ góc độ khác với người khác. Bạn thường hỏi \"Tại sao không?\" và thích phá vỡ các khuôn mẫu. Những ý tưởng độc đáo trong đầu bạn sẽ thể hiện giá trị lớn khi chúng được đưa ra thế giới thông qua nghệ thuật hoặc hoạt động sáng tạo.",
      id: "Anda menikmati imajinasi liar dan melihat dunia dari perspektif yang berbeda dari orang lain. Anda sering bertanya \"Mengapa tidak?\" dan suka mematahkan stereotip. Ide orisinal Anda di kepala akan menunjukkan nilai besar ketika mereka keluar ke dunia melalui seni atau aktivitas kreatif."
    },
    hiddenTalent: {
      ko: "창의력, 독창성, 예술적 감각",
      en: "Creativity, originality, artistic sense",
      ja: "創造力、独創性、芸術的センス",
      'zh-CN': "创造力、独创性、艺术感",
      'zh-TW': "創造力、獨創性、藝術感",
      vi: "Khả năng sáng tạo, tính độc đáo, cảm quan nghệ thuật",
      id: "Kreativitas, orisinalitas, sense artistik"
    },
    recommendedFields: {
      ko: "디자인, 작가, 유튜버, 예술가",
      en: "Design, writer, YouTuber, artist",
      ja: "デザイン、作家、ユーチューバー、芸術家",
      'zh-CN': "设计、作家、YouTuber、艺术家",
      'zh-TW': "設計、作家、YouTuber、藝術家",
      vi: "Thiết kế, nhà văn, YouTuber, nghệ sĩ",
      id: "Desain, penulis, YouTuber, seniman"
    },
    goodMatch: {
      ko: "Type 5 (해결사) - 뜬구름 잡는 걸 실행해줌",
      en: "Type 5 (Survivor) - Executes the pie-in-the-sky ideas",
      ja: "Type 5（解決者）- 雲を掴むようなことを実行してくれる",
      'zh-CN': "Type 5（解决者）- 将不切实际的想法付诸实践",
      'zh-TW': "Type 5（解決者）- 將不切實際的想法付諸實踐",
      vi: "Type 5 (Người giải quyết) - Thực thi những ý tưởng viển vông",
      id: "Type 5 (Pemecah Masalah) - Mengeksekusi ide yang tidak realistis"
    },
    badMatch: {
      ko: "Type 4 (전략가) - 너무 따져서 김빠지게 함",
      en: "Type 4 (Strategist) - Too analytical, takes the fun out",
      ja: "Type 4（戦略家）- 分析しすぎて興ざめさせる",
      'zh-CN': "Type 4（战略家）- 太过分析，扫兴",
      'zh-TW': "Type 4（戰略家）- 太過分析，掃興",
      vi: "Type 4 (Nhà chiến lược) - Quá phân tích, làm mất vui",
      id: "Type 4 (Strategist) - Terlalu analitis, membuat tidak menyenangkan"
    }
  },
  {
    type: "Type3",
    emoji: "🤝",
    title: {
      ko: "사람을 움직이는, 인심 장악러 (Influencer)",
      en: "People Mover, Heart Capturer (Influencer)",
      ja: "人を動かす、人心掌握者",
      'zh-CN': "推动他人，人心掌控者",
      'zh-TW': "推動他人，人心掌控者",
      vi: "Người Vận Động Con Người, Kẻ Chinh Phục Lòng Người (Người Có Ảnh Hưởng)",
      id: "Penggerak Orang, Penguasa Hati (Influencer)"
    },
    shortDescription: {
      ko: "\"마음을 훔치는 치명적인 매력\"",
      en: "\"Deadly charm that steals hearts\"",
      ja: "「心を盗む致命的な魅力」",
      'zh-CN': "\"偷走心灵的致命魅力\"",
      'zh-TW': "「偷走心靈的致命魅力」",
      vi: "\"Sức hấp dẫn chết người đánh cắp trái tim\"",
      id: "\"Pesona mematikan yang mencuri hati\""
    },
    description: {
      ko: "당신은 타인의 감정에 공감하고, 사람들과의 관계를 조율하는 데 탁월한 재능이 있습니다. 적을 만들지 않는 유연한 처세술과 리더십으로 사람들을 내 편으로 만듭니다. 당신의 말 한마디는 논리보다 더 큰 설득력을 가지며, 조직을 이끄는 힘이 됩니다.",
      en: "You have excellent talent for empathizing with others' emotions and coordinating relationships with people. With flexible social skills and leadership that don't create enemies, you bring people to your side. Your words have greater persuasive power than logic and become the force that leads organizations.",
      ja: "あなたは他人の感情に共感し、人々との関係を調整するのに卓越した才能があります。敵を作らない柔軟な処世術とリーダーシップで人々を味方にします。あなたの一言は論理よりも大きな説得力を持ち、組織を導く力となります。",
      'zh-CN': "你具有卓越的才能，能够共情他人的情感并协调人际关系。凭借不会树敌的灵活处世技巧和领导力，你将人们拉到自己一边。你的一句话比逻辑更有说服力，成为领导组织的力量。",
      'zh-TW': "你具有卓越的才能，能夠共情他人的情感並協調人際關係。憑藉不會樹敵的靈活處世技巧和領導力，你將人們拉到自己一邊。你的一句話比邏輯更有說服力，成為領導組織的力量。",
      vi: "Bạn có tài năng xuất sắc trong việc đồng cảm với cảm xúc của người khác và điều phối mối quan hệ với mọi người. Với kỹ năng xã hội linh hoạt và khả năng lãnh đạo không tạo kẻ thù, bạn đưa mọi người về phía mình. Lời nói của bạn có sức thuyết phục lớn hơn logic và trở thành lực lượng dẫn dắt tổ chức.",
      id: "Anda memiliki bakat luar biasa untuk berempati dengan emosi orang lain dan mengoordinasikan hubungan dengan orang. Dengan keterampilan sosial yang fleksibel dan kepemimpinan yang tidak menciptakan musuh, Anda membawa orang ke pihak Anda. Kata-kata Anda memiliki daya persuasif yang lebih besar daripada logika dan menjadi kekuatan yang memimpin organisasi."
    },
    hiddenTalent: {
      ko: "공감 능력, 협상, 리더십, 인맥 관리",
      en: "Empathy, negotiation, leadership, network management",
      ja: "共感能力、交渉、リーダーシップ、人脈管理",
      'zh-CN': "共情能力、谈判、领导力、人脉管理",
      'zh-TW': "共情能力、談判、領導力、人脈管理",
      vi: "Khả năng đồng cảm, đàm phán, lãnh đạo, quản lý mạng lưới",
      id: "Empati, negosiasi, kepemimpinan, manajemen jaringan"
    },
    recommendedFields: {
      ko: "상담, 영업, HR(인사), 정치/사회",
      en: "Counseling, sales, HR (personnel), politics/social",
      ja: "カウンセリング、営業、人事、政治/社会",
      'zh-CN': "咨询、销售、人事、政治/社会",
      'zh-TW': "諮詢、銷售、人事、政治/社會",
      vi: "Tư vấn, bán hàng, nhân sự, chính trị/xã hội",
      id: "Konseling, penjualan, SDM, politik/sosial"
    },
    goodMatch: {
      ko: "Type 6 (수호자) - 묵묵히 뒤를 받쳐줌",
      en: "Type 6 (Guardian) - Quietly supports from behind",
      ja: "Type 6（守護者）- 黙々と後ろから支えてくれる",
      'zh-CN': "Type 6（守护者）- 默默在背后支持",
      'zh-TW': "Type 6（守護者）- 默默在背後支持",
      vi: "Type 6 (Người bảo vệ) - Im lặng hỗ trợ từ phía sau",
      id: "Type 6 (Penjaga) - Diam-diam mendukung dari belakang"
    },
    badMatch: {
      ko: "Type 5 (해결사) - 감정 없는 팩폭에 상처받음",
      en: "Type 5 (Survivor) - Hurt by emotionless brutal honesty",
      ja: "Type 5（解決者）- 感情のない率直な発言に傷つく",
      'zh-CN': "Type 5（解决者）- 被无情的直言伤害",
      'zh-TW': "Type 5（解決者）- 被無情的直言傷害",
      vi: "Type 5 (Người giải quyết) - Bị tổn thương bởi sự thẳng thắn tàn nhẫn không cảm xúc",
      id: "Type 5 (Pemecah Masalah) - Terluka oleh kejujuran brutal tanpa emosi"
    }
  },
  {
    type: "Type4",
    emoji: "♟️",
    title: {
      ko: "빈틈없는 설계자, 마스터 전략가 (Strategist)",
      en: "Flawless Designer, Master Strategist",
      ja: "隙のない設計者、マスターチストラテジスト",
      'zh-CN': "无懈可击的设计师，战略大师",
      'zh-TW': "無懈可擊的設計師，戰略大師",
      vi: "Nhà Thiết Kế Hoàn Hảo, Bậc Thầy Chiến Lược",
      id: "Desainer Sempurna, Master Strategist"
    },
    shortDescription: {
      ko: "\"수만 가지 경우의 수를 계산하는 두뇌\"",
      en: "\"A brain that calculates tens of thousands of possibilities\"",
      ja: "「数万通りの場合の数を計算する頭脳」",
      'zh-CN': "\"计算数万种可能情况的大脑\"",
      'zh-TW': "「計算數萬種可能情況的大腦」",
      vi: "\"Bộ não tính toán hàng chục nghìn khả năng\"",
      id: "\"Otak yang menghitung puluhan ribu kemungkinan\""
    },
    description: {
      ko: "당신은 감정보다는 이성에 따라 움직이며, 효율성을 최우선으로 생각합니다. 복잡한 상황에서도 핵심을 파악하고 최적의 경로를 찾아내는 논리적인 사고방식을 가졌습니다. 리스크를 최소화하고 이익을 극대화하는 투자나 경영 분야에서 빛을 발할 것입니다.",
      en: "You move based on reason rather than emotion and prioritize efficiency above all. You have a logical way of thinking that grasps the essence and finds the optimal path even in complex situations. You will shine in fields like investment or management that minimize risks and maximize profits.",
      ja: "あなたは感情よりも理性に従って動き、効率性を最優先に考えます。複雑な状況でも核心を把握し最適な経路を見つけ出す論理的な思考方法を持っています。リスクを最小化し利益を最大化する投資や経営分野で光を放つでしょう。",
      'zh-CN': "你按照理性而非情感行事，将效率放在首位。即使在复杂的情况下，你也能把握核心并找到最佳路径，具有逻辑思维。你将在投资或管理等最小化风险、最大化利润的领域发光发热。",
      'zh-TW': "你按照理性而非情感行事，將效率放在首位。即使在複雜的情況下，你也能把握核心並找到最佳路徑，具有邏輯思維。你將在投資或管理等最小化風險、最大化利潤的領域發光發熱。",
      vi: "Bạn hành động dựa trên lý trí hơn là cảm xúc và ưu tiên hiệu quả trên hết. Bạn có cách suy nghĩ logic nắm bắt bản chất và tìm ra con đường tối ưu ngay cả trong tình huống phức tạp. Bạn sẽ tỏa sáng trong các lĩnh vực như đầu tư hoặc quản lý để tối thiểu hóa rủi ro và tối đa hóa lợi nhuận.",
      id: "Anda bergerak berdasarkan alasan daripada emosi dan memprioritaskan efisiensi di atas segalanya. Anda memiliki cara berpikir logis yang memahami esensi dan menemukan jalan optimal bahkan dalam situasi kompleks. Anda akan bersinar di bidang seperti investasi atau manajemen yang meminimalkan risiko dan memaksimalkan keuntungan."
    },
    hiddenTalent: {
      ko: "분석력, 기획력, 논리적 사고, 재테크",
      en: "Analytical ability, planning skills, logical thinking, financial management",
      ja: "分析力、企画力、論理的思考、資産運用",
      'zh-CN': "分析能力、策划能力、逻辑思维、理财",
      'zh-TW': "分析能力、策劃能力、邏輯思維、理財",
      vi: "Khả năng phân tích, kỹ năng lập kế hoạch, tư duy logic, quản lý tài chính",
      id: "Kemampuan analitis, keterampilan perencanaan, pemikiran logis, manajemen keuangan"
    },
    recommendedFields: {
      ko: "금융/투자, 컨설팅, 데이터 분석, 사업",
      en: "Finance/investment, consulting, data analysis, business",
      ja: "金融/投資、コンサルティング、データ分析、事業",
      'zh-CN': "金融/投资、咨询、数据分析、商业",
      'zh-TW': "金融/投資、諮詢、數據分析、商業",
      vi: "Tài chính/đầu tư, tư vấn, phân tích dữ liệu, kinh doanh",
      id: "Keuangan/investasi, konsultasi, analisis data, bisnis"
    },
    goodMatch: {
      ko: "Type 1 (트렌드 사냥꾼) - 좋은 소스를 물어다 줌",
      en: "Type 1 (Trend Setter) - Brings good sources",
      ja: "Type 1（トレンドハンター）- 良い情報源を持ってきてくれる",
      'zh-CN': "Type 1（潮流猎人）- 带来好的信息来源",
      'zh-TW': "Type 1（潮流獵人）- 帶來好的資訊來源",
      vi: "Type 1 (Người đặt xu hướng) - Mang lại nguồn thông tin tốt",
      id: "Type 1 (Pembuat Tren) - Membawa sumber yang baik"
    },
    badMatch: {
      ko: "Type 2 (아이디어 뱅크) - 비현실적이라 피곤함",
      en: "Type 2 (Creator) - Unrealistic, exhausting",
      ja: "Type 2（アイデアバンク）- 非現実的で疲れる",
      'zh-CN': "Type 2（创意银行）- 不现实，令人疲惫",
      'zh-TW': "Type 2（創意銀行）- 不現實，令人疲憊",
      vi: "Type 2 (Người sáng tạo) - Không thực tế, mệt mỏi",
      id: "Type 2 (Pencipta) - Tidak realistis, melelahkan"
    }
  },
  {
    type: "Type5",
    emoji: "🛠️",
    title: {
      ko: "위기에 강한, 불굴의 해결사 (Survivor)",
      en: "Strong in Crisis, Indomitable Problem Solver (Survivor)",
      ja: "危機に強い、不屈の解決者",
      'zh-CN': "危机中的强者，不屈不挠的解决者",
      'zh-TW': "危機中的強者，不屈不撓的解決者",
      vi: "Mạnh Mẽ Trong Khủng Hoảng, Người Giải Quyết Không Khuất Phục (Người Sống Sót)",
      id: "Kuat dalam Krisis, Pemecah Masalah Tak Terkalahkan (Penyintas)"
    },
    shortDescription: {
      ko: "\"어떤 상황에서도 살아남는 생존 본능\"",
      en: "\"Survival instinct to survive any situation\"",
      ja: "「どんな状況でも生き残る生存本能」",
      'zh-CN': "\"在任何情况下都能生存的生存本能\"",
      'zh-TW': "「在任何情況下都能生存的生存本能」",
      vi: "\"Bản năng sinh tồn để sống sót trong mọi tình huống\"",
      id: "\"Naluri bertahan hidup untuk bertahan dalam situasi apa pun\""
    },
    description: {
      ko: "당신은 멘탈이 강하고 임기응변에 능합니다. 돌발 상황이 닥쳐도 당황하지 않고 현실적인 대안을 찾아내 해결합니다. 실행력이 뛰어나며, 머리로 고민할 시간에 몸으로 부딪혀 결과를 만들어내는 스타일입니다. 난세의 영웅이 될 자질이 있습니다.",
      en: "You have strong mental fortitude and are skilled at improvising. Even when unexpected situations arise, you don't panic and find realistic alternatives to solve them. You have excellent execution skills and are the type who tackles things head-on to produce results rather than spending time thinking. You have the qualities to become a hero in troubled times.",
      ja: "あなたは精神的に強く、臨機応変に優れています。突発的な状況が訪れてもパニックにならず、現実的な代替案を見つけて解決します。実行力が優れており、頭で悩む時間に体でぶつかって結果を作り出すスタイルです。乱世の英雄になる資質があります。",
      'zh-CN': "你精神强大，善于随机应变。即使遇到突发情况，你也不会惊慌，能找到现实的替代方案来解决问题。你执行力出色，与其花时间思考，不如身体力行创造结果的类型。你具有在乱世中成为英雄的资质。",
      'zh-TW': "你精神強大，善於隨機應變。即使遇到突發情況，你也不會驚慌，能找到現實的替代方案來解決問題。你執行力出色，與其花時間思考，不如身體力行創造結果的類型。你具有在亂世中成為英雄的資質。",
      vi: "Bạn có tinh thần mạnh mẽ và giỏi ứng biến. Ngay cả khi tình huống bất ngờ xảy ra, bạn không hoảng sợ và tìm ra các giải pháp thay thế thực tế để giải quyết. Bạn có kỹ năng thực thi xuất sắc và là kiểu người lao vào tạo ra kết quả thay vì dành thời gian suy nghĩ. Bạn có phẩm chất trở thành anh hùng trong thời loạn.",
      id: "Anda memiliki ketabahan mental yang kuat dan terampil dalam improvisasi. Bahkan ketika situasi tak terduga muncul, Anda tidak panik dan menemukan alternatif yang realistis untuk menyelesaikannya. Anda memiliki keterampilan eksekusi yang sangat baik dan adalah tipe yang menghadapi hal-hal langsung untuk menghasilkan hasil daripada menghabiskan waktu berpikir. Anda memiliki kualitas untuk menjadi pahlawan di masa-masa sulit."
    },
    hiddenTalent: {
      ko: "문제 해결력, 순발력, 강한 멘탈, 실행력",
      en: "Problem-solving skills, quick thinking, strong mental fortitude, execution ability",
      ja: "問題解決力、機転、強いメンタル、実行力",
      'zh-CN': "解决问题的能力、敏捷性、强大的精神、执行力",
      'zh-TW': "解決問題的能力、敏捷性、強大的精神、執行力",
      vi: "Kỹ năng giải quyết vấn đề, phản ứng nhanh, tinh thần mạnh mẽ, khả năng thực thi",
      id: "Keterampilan pemecahan masalah, pemikiran cepat, ketabahan mental yang kuat, kemampuan eksekusi"
    },
    recommendedFields: {
      ko: "창업, 엔지니어, 스포츠, 응급/재난 관련",
      en: "Entrepreneurship, engineering, sports, emergency/disaster-related",
      ja: "起業、エンジニア、スポーツ、緊急/災害関連",
      'zh-CN': "创业、工程、体育、紧急/灾害相关",
      'zh-TW': "創業、工程、體育、緊急/災害相關",
      vi: "Khởi nghiệp, kỹ sư, thể thao, liên quan đến khẩn cấp/thảm họa",
      id: "Kewirausahaan, teknik, olahraga, terkait darurat/bencana"
    },
    goodMatch: {
      ko: "Type 2 (아이디어 뱅크) - 창의적인 해결책을 줌",
      en: "Type 2 (Creator) - Provides creative solutions",
      ja: "Type 2（アイデアバンク）- 創造的な解決策を与えてくれる",
      'zh-CN': "Type 2（创意银行）- 提供创造性的解决方案",
      'zh-TW': "Type 2（創意銀行）- 提供創造性的解決方案",
      vi: "Type 2 (Người sáng tạo) - Cung cấp giải pháp sáng tạo",
      id: "Type 2 (Pencipta) - Memberikan solusi kreatif"
    },
    badMatch: {
      ko: "Type 3 (인심 장악러) - 말만 많고 행동 안 해서 싫음",
      en: "Type 3 (Influencer) - Too much talk, no action, dislike",
      ja: "Type 3（人心掌握者）- 話ばかりで行動しないのが嫌",
      'zh-CN': "Type 3（人心掌控者）- 只说不做，不喜欢",
      'zh-TW': "Type 3（人心掌控者）- 只說不做，不喜歡",
      vi: "Type 3 (Người có ảnh hưởng) - Nói nhiều nhưng không hành động, không thích",
      id: "Type 3 (Influencer) - Terlalu banyak bicara, tidak ada tindakan, tidak suka"
    }
  },
  {
    type: "Type6",
    emoji: "🛡️",
    title: {
      ko: "묵묵히 지키는, 든든한 수호자 (Guardian)",
      en: "Silently Protecting, Reliable Guardian",
      ja: "黙々と守る、頼れる守護者",
      'zh-CN': "默默守护，可靠的守护者",
      'zh-TW': "默默守護，可靠的守護者",
      vi: "Lặng Lẽ Bảo Vệ, Người Bảo Vệ Đáng Tin Cậy",
      id: "Melindungi dengan Diam, Penjaga yang Dapat Diandalkan"
    },
    shortDescription: {
      ko: "\"흔들리지 않는 편안함과 꾸준함\"",
      en: "\"Unshakable comfort and consistency\"",
      ja: "「揺るがない安心感と着実さ」",
      'zh-CN': "\"不可动摇的舒适和持续\"",
      'zh-TW': "「不可動搖的舒適和持續」",
      vi: "\"Sự thoải mái và nhất quán không thể lay chuyển\"",
      id: "\"Kenyamanan dan konsistensi yang tak tergoyahkan\""
    },
    description: {
      ko: "당신은 화려하진 않지만 성실함과 책임감으로 신뢰를 쌓는 타입입니다. 디테일한 부분을 놓치지 않는 꼼꼼함과 인내심이 당신의 가장 큰 무기입니다. 장기적인 안목으로 꾸준히 노력하여 결국에는 정상에 오르는 대기만성형 인재입니다.",
      en: "You may not be flashy, but you are the type who builds trust through sincerity and responsibility. Your attention to detail and patience that doesn't miss small things are your greatest weapons. You are a late-blooming talent who steadily works with long-term vision and eventually reaches the top.",
      ja: "あなたは華やかではないかもしれませんが、誠実さと責任感で信頼を築くタイプです。細かい部分を見逃さない几帳面さと忍耐力があなたの最大の武器です。長期的な視点で着実に努力し、最終的に頂点に立つ大器晩成型の才能です。",
      'zh-CN': "你可能并不华丽，但你是通过真诚和责任感建立信任的类型。不放过细节的细致和耐心是你最大的武器。你是具有长远眼光、持续努力、最终登上顶峰的晚成型人才。",
      'zh-TW': "你可能並不華麗，但你是通過真誠和責任感建立信任的類型。不放過細節的細緻和耐心是你最大的武器。你是具有長遠眼光、持續努力、最終登上頂峰的晚成型人才。",
      vi: "Bạn có thể không lộng lẫy, nhưng bạn là kiểu người xây dựng niềm tin thông qua sự chân thành và trách nhiệm. Sự cẩn thận không bỏ sót chi tiết và sự kiên nhẫn của bạn là vũ khí lớn nhất. Bạn là tài năng nở muộn, làm việc ổn định với tầm nhìn dài hạn và cuối cùng đạt đến đỉnh cao.",
      id: "Anda mungkin tidak mencolok, tetapi Anda adalah tipe yang membangun kepercayaan melalui ketulusan dan tanggung jawab. Ketelitian yang tidak melewatkan detail dan kesabaran adalah senjata terbesar Anda. Anda adalah bakat yang berkembang lambat yang bekerja dengan mantap dengan visi jangka panjang dan akhirnya mencapai puncak."
    },
    hiddenTalent: {
      ko: "성실함, 꼼꼼함, 관리 능력, 인내심",
      en: "Sincerity, meticulousness, management ability, patience",
      ja: "誠実さ、几帳面さ、管理能力、忍耐力",
      'zh-CN': "真诚、细致、管理能力、耐心",
      'zh-TW': "真誠、細緻、管理能力、耐心",
      vi: "Chân thành, cẩn thận, khả năng quản lý, kiên nhẫn",
      id: "Ketulusan, ketelitian, kemampuan manajemen, kesabaran"
    },
    recommendedFields: {
      ko: "공무원, 연구원, 회계/재무, 관리직",
      en: "Public servant, researcher, accounting/finance, management",
      ja: "公務員、研究員、会計/財務、管理職",
      'zh-CN': "公务员、研究员、会计/财务、管理",
      'zh-TW': "公務員、研究員、會計/財務、管理",
      vi: "Công chức, nhà nghiên cứu, kế toán/tài chính, quản lý",
      id: "Pegawai negeri, peneliti, akuntansi/keuangan, manajemen"
    },
    goodMatch: {
      ko: "Type 3 (인심 장악러) - 나를 이끌어주고 챙겨줌",
      en: "Type 3 (Influencer) - Leads and takes care of me",
      ja: "Type 3（人心掌握者）- 私を導いて面倒を見てくれる",
      'zh-CN': "Type 3（人心掌控者）- 引导和照顾我",
      'zh-TW': "Type 3（人心掌控者）- 引導和照顧我",
      vi: "Type 3 (Người có ảnh hưởng) - Dẫn dắt và chăm sóc tôi",
      id: "Type 3 (Influencer) - Memimpin dan merawat saya"
    },
    badMatch: {
      ko: "Type 1 (트렌드 사냥꾼) - 너무 변덕스러워서 불안함",
      en: "Type 1 (Trend Setter) - Too fickle, makes me anxious",
      ja: "Type 1（トレンドハンター）- 気まぐれすぎて不安になる",
      'zh-CN': "Type 1（潮流猎人）- 太善变，让人不安",
      'zh-TW': "Type 1（潮流獵人）- 太善變，讓人不安",
      vi: "Type 1 (Người đặt xu hướng) - Quá thất thường, khiến tôi lo lắng",
      id: "Type 1 (Pembuat Tren) - Terlalu tidak konsisten, membuat saya cemas"
    }
  }
];

// 동점일 경우 우선순위: Type 1 > Type 2 > Type 3 > Type 5 > Type 4 > Type 6
const TYPE_PRIORITY: Record<string, number> = {
  "Type1": 6,
  "Type2": 5,
  "Type3": 4,
  "Type5": 3,
  "Type4": 2,
  "Type6": 1
};

export function calculatePhase2HiddenTalentResult(answers: Record<number, number>, questions: Phase2HiddenTalentQuestion[]): string {
  const scores: Record<string, number> = {
    "Type1": 0, "Type2": 0, "Type3": 0, "Type4": 0, "Type5": 0, "Type6": 0
  };

  Object.keys(answers).forEach(originalQuestionIndexStr => {
    const originalQuestionIndex = parseInt(originalQuestionIndexStr);
    const selectedOptionIndex = answers[originalQuestionIndex];
    const question = questions[originalQuestionIndex];

    if (question && question.options[selectedOptionIndex]) {
      const selectedOption = question.options[selectedOptionIndex];
      scores[selectedOption.type] += 1;
    }
  });

  let maxScore = -1;
  let resultTypes: string[] = [];

  for (const type in scores) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultTypes = [type];
    } else if (scores[type] === maxScore) {
      resultTypes.push(type);
    }
  }

  // 동점일 경우 우선순위 적용
  if (resultTypes.length > 1) {
    let highestPriority = -1;
    let resultType = resultTypes[0];

    for (const type of resultTypes) {
      if (TYPE_PRIORITY[type] > highestPriority) {
        highestPriority = TYPE_PRIORITY[type];
        resultType = type;
      }
    }
    return resultType;
  }

  return resultTypes[0] || "Type1"; // Fallback
}

