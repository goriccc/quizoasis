/** 날 미치게 하는! 도파민 유형 — A=0 식도락 / B=1 쇼핑 / C=2 운동 / D=3 지식·성취, 총점 0~36 → 6유형 */

function loc(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3DopamineTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3DopamineTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  dopamineCategory: Record<string, string>;
  chargePoints: Record<string, string>;
  dischargePoints: Record<string, string>;
  memeVersion: Record<string, string>;
  strength: Record<string, string>;
  caution: Record<string, string>;
  upgrade: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export const phase3DopamineTypeQuestions: Phase3DopamineTypeQuestion[] = [
  {
    id: 1,
    question: loc(
      '퇴근 후 또는 힘든 하루가 끝났을 때 가장 먼저 하고 싶은 것은?',
      'After work or a hard day, what do you want to do first?',
      '退勤後やしんどい一日の終わり、まず何をしたい？',
      '下班或辛苦的一天结束后，最想先做什么？',
      '下班或辛苦的一天結束後，最想先做什麼？',
      'Sau giờ làm hoặc ngày mệt, bạn muốn làm gì trước tiên?',
      'Setelah kerja atau hari berat, apa yang paling ingin kamu lakukan dulu?'
    ),
    options: [
      {
        text: loc(
          '맛있는 것을 먹거나 배달을 시킨다. 음식이 최고의 보상이다',
          'Eat something tasty or order delivery. Food is the ultimate reward.',
          '美味しいものを食べるかデリバリー。ご飯が最高のご褒美。',
          '吃好吃的或叫外卖。食物是最好的犒赏。',
          '吃好吃的或叫外送。食物是最好的犒賞。',
          'Ăn món ngon hoặc giao đồ ăn. Đồ ăn là phần thưởng tuyệt nhất.',
          'Makan enak atau pesan antar. Makanan adalah hadiah terbaik.'
        ),
        score: 0,
      },
      {
        text: loc(
          '쇼핑 앱을 열거나 갖고 싶었던 걸 산다. 구매가 곧 치유다',
          'Open shopping apps or buy what you wanted. Retail therapy is real.',
          'ショップアプリを開くか、欲しかったものを買う。買い物が癒やし。',
          '打开购物应用或买下心动已久的东西。购物即疗愈。',
          '打開購物 App 或買下心動已久的東西。購物即療癒。',
          'Mở app mua sắm hoặc mua thứ bạn từng muốn. Mua sắm chính là liều thuốc.',
          'Buka aplikasi belanja atau beli yang diinginkan. Belanja itu penyembuh.'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동하거나 산책한다. 몸을 움직여야 스트레스가 풀린다',
          'Exercise or take a walk. Moving your body melts stress.',
          '運動や散歩。体を動かしてストレスをほぐす。',
          '运动或散步。动起来才能释放压力。',
          '運動或散步。動起來才能釋放壓力。',
          'Tập thể dục hoặc đi bộ. Cử động cơ thể giải tỏa căng thẳng.',
          'Olahraga atau jalan kaki. Bergerak melepaskan stres.'
        ),
        score: 2,
      },
      {
        text: loc(
          '유튜브나 책으로 새로운 정보를 흡수한다. 배우는 게 취미다',
          'Soak up new info on YouTube or in books. Learning is your hobby.',
          'YouTubeや本で新しい情報を吸収。学ぶことが趣味。',
          '用视频或书吸收新信息。学习是爱好。',
          '用影片或書吸收新資訊。學習是愛好。',
          'Xem YouTube hoặc đọc sách để học điều mới. Học là sở thích.',
          'Serap info baru lewat YouTube atau buku. Belajar adalah hobimu.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: loc(
      '「나 이래서 산다」라는 말이 가장 자주 나오는 순간은?',
      'When do you most often think, “That’s why I live for this”?',
      '「これが生きがい」と一番よく思う瞬間は？',
      '你最常说「这就是我活着的理由」的瞬间是？',
      '你最常說「這就是我活著的理由」的瞬間是？',
      'Bạn thường nghĩ “đây mới là lý do mình sống” nhất khi nào?',
      'Kapan kamu paling sering merasa “ini alasanku hidup”?'
    ),
    options: [
      {
        text: loc(
          '기대하던 메뉴가 딱 맛있게 나왔을 때',
          'When the dish you hoped for tastes amazing',
          '楽しみにしていたメニューが想像以上に美味しいとき',
          '期待已久的菜真的很好吃时',
          '期待已久的菜真的很好吃時',
          'Khi món bạn mong đợi ngon hơn cả tưởng tượng',
          'Saat menu yang kamu nanti rasanya luar biasa'
        ),
        score: 0,
      },
      {
        text: loc(
          '오래 고민하던 걸 드디어 질렀을 때',
          'When you finally buy something you debated forever',
          'ずっと迷っていたものをついに買い切ったとき',
          '终于买下犹豫很久的东西时',
          '終於買下猶豫很久的東西時',
          'Khi bạn cuối cùng mua được thứ lâu nay phân vân',
          'Saat akhirnya membeli sesuatu yang lama kamu pertimbangkan'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동 후 거울을 봤을 때 또는 기록이 갱신됐을 때',
          'After a workout in the mirror—or when you hit a new PR',
          '運動後に鏡を見たとき、または記録が更新されたとき',
          '运动后照镜子，或刷新个人纪录时',
          '運動後照鏡子，或刷新個人紀錄時',
          'Sau tập nhìn gương—hoặc khi phá kỷ lục cá nhân',
          'Setelah olahraga lihat cermin—atau saat rekor barumu'
        ),
        score: 2,
      },
      {
        text: loc(
          '몰랐던 사실을 알게 되거나 새로운 분야에 눈이 떠질 때',
          'When you learn a fact you never knew—or a field “clicks”',
          '知らなかった事実を知ったとき、新しい分野に目覚めたとき',
          '得知不知道的事实，或对新领域豁然开朗时',
          '得知不知道的事實，或對新領域豁然開朗時',
          'Khi biết điều chưa từng biết—hoặc “mở mắt” với lĩnh vực mới',
          'Saat tahu fakta baru—atau “nyala” di bidang baru'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: loc(
      '계획에 없던 돈이 생겼다. 가장 먼저 하고 싶은 것은?',
      'Unexpected money came in. What do you spend on first?',
      '予定外のお金が入った。まず何に使いたい？',
      '意外多了一笔钱。最想先花在哪？',
      '意外多了一筆錢。最想先花在哪？',
      'Có thêm tiền ngoài dự định. Bạn muốn chi vào đâu trước?',
      'Ada uang tak terduga. Mau dipakai untuk apa dulu?'
    ),
    options: [
      {
        text: loc(
          '그동안 못 가봤던 맛집이나 레스토랑에 간다',
          'Hit that restaurant or spot you never got to try',
          'ずっと行けなかった名店やレストランへ',
          '去一直没能去的餐厅或名店',
          '去一直沒能去的餐廳或名店',
          'Đến quán/ng nhà hàng lâu nay chưa đi được',
          'Ke restoran yang lama ingin dicoba'
        ),
        score: 0,
      },
      {
        text: loc(
          '갖고 싶었던 아이템을 산다. 이미 장바구니에 다 담겨있다',
          'Buy the item you wanted—it’s already in your cart',
          '欲しかったアイテムを買う。もうカゴに入ってる',
          '买下心动已久的东西，早就在购物车里了',
          '買下心動已久的東西，早就在購物車裡了',
          'Mua món đã lâu trong giỏ—đã add sẵn rồi',
          'Beli barang yang sudah lama di keranjang'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동 장비, 러닝화, PT 등 몸 관련에 투자한다',
          'Invest in gear, running shoes, PT—anything for your body',
          '器具、ランニングシューズ、パーソナルなど体への投資',
          '买装备、跑鞋、私教等，投资身体',
          '買裝備、跑鞋、教練課等，投資身體',
          'Đầu tư giày, dụng cụ, PT—cho cơ thể',
          'Investasi sepatu lari, alat, PT—untuk tubuh'
        ),
        score: 2,
      },
      {
        text: loc(
          '강의나 책, 경험에 쓴다. 나에 대한 투자가 최우선이다',
          'Spend on courses, books, experiences—investing in you comes first',
          '講座、本、体験。自分への投資が最優先',
          '课程、书、体验。投资自己优先',
          '課程、書、體驗。投資自己優先',
          'Khóa học, sách, trải nghiệm—ưu tiên đầu tư bản thân',
          'Kursus, buku, pengalaman—investasi diri nomor satu'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: loc(
      'SNS에서 가장 오래 머무는 콘텐츠는?',
      'On social media, what content keeps you scrolling longest?',
      'SNSで一番長く見てしまうコンテンツは？',
      '在社交平台上，哪种内容让你刷最久？',
      '在社群平台上，哪種內容讓你刷最久？',
      'Trên mạng xã hội, nội dung nào khiến bạn xem lâu nhất?',
      'Di sosmed, konten apa yang paling lama kamu tonton?'
    ),
    options: [
      {
        text: loc(
          '먹방, 맛집 리뷰, 레시피 영상',
          'Mukbangs, restaurant reviews, recipe videos',
          'ムクバン、グルメレビュー、レシピ動画',
          '吃播、探店测评、食谱视频',
          '吃播、探店評測、食譜影片',
          'Ăn uống, review quán, video công thức',
          'Mukbang, review restoran, video resep'
        ),
        score: 0,
      },
      {
        text: loc(
          '쇼핑 하울, 신상 리뷰, 아이템 추천',
          'Shopping hauls, new-drop reviews, item recommendations',
          '購入品紹介、新作レビュー、アイテム紹介',
          '购物开箱、新品测评、好物推荐',
          '購物開箱、新品評測、好物推薦',
          'Haul mua sắm, review hàng mới, gợi ý đồ',
          'Haul belanja, review rilis baru, rekomendasi barang'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동 루틴, 갓생 브이로그, 피지컬 변화 기록',
          'Workout routines, “that girl” vlogs, body progress',
          'トレ動画、ルーティンVlog、体の変化記録',
          '运动routine、自律vlog、身材变化记录',
          '運動 routine、自律 vlog、身材變化紀錄',
          'Routine tập, vlog sống lành, tiến độ cơ thể',
          'Routine olahraga, vlog hidup sehat, progres fisik'
        ),
        score: 2,
      },
      {
        text: loc(
          '지식 콘텐츠, 다큐, 흥미로운 사실 정리 영상',
          'Explainers, documentaries, fun-fact compilations',
          '知識系、ドキュメンタリー、雑学まとめ動画',
          '知识科普、纪录片、冷知识合集',
          '知識科普、紀錄片、冷知識合集',
          'Kiến thức, phim tài liệu, tổng hợp fact hay',
          'Konten edukatif, dokumenter, fakta menarik'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: loc(
      '기분이 최고로 좋아지는 순간을 고른다면?',
      'Pick the moment your mood peaks:',
      '気分が最高になる瞬間を選ぶとしたら？',
      '选一个心情最好的瞬间：',
      '選一個心情最好的瞬間：',
      'Chọn khoảnh khắc bạn vui nhất:',
      'Momen mana yang bikin mood kamu puncak?'
    ),
    options: [
      {
        text: loc(
          '처음 가보는 맛집에서 첫 한 입이 기대 이상일 때',
          'First bite at a new spot—and it’s even better than you hoped',
          '初めての名店で一口目が期待以上のとき',
          '第一次去网红店，第一口就超预期',
          '第一次去名店，第一口就超預期',
          'Lần đầu đến quán, miếng đầu đã vượt mong đợi',
          'Gigit pertama di restoran baru—lebih enak dari bayangan'
        ),
        score: 0,
      },
      {
        text: loc(
          '기다리던 택배가 도착했을 때 언박싱하는 순간',
          'Unboxing the package you’ve been waiting for',
          '待っていた荷物が届き、開封する瞬間',
          '等了很久的快递到了，开箱那一刻',
          '等了很久的包裹到了，開箱那一刻',
          'Mở hàng order lâu nay vừa tới',
          'Unboxing paket yang ditunggu-tunggu'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동이나 활동 후 땀을 흘리고 샤워했을 때',
          'After moving, sweating, then a hot shower',
          '運動や活動の後、汗をかいてシャワーしたとき',
          '运动或活动后流汗，再冲个澡',
          '運動或活動後流汗，再沖個澡',
          'Sau khi vận động đổ mồ hôi rồi tắm',
          'Setelah gerak keringetan lalu mandi'
        ),
        score: 2,
      },
      {
        text: loc(
          '복잡하게 생각하던 것이 갑자기 명확하게 이해되는 순간',
          'When something fuzzy suddenly “clicks” and makes sense',
          'モヤモヤしていたことがふっと腑に落ちる瞬間',
          '纠结很久的事突然想通、豁然开朗',
          '糾結很久的事突然想通、豁然開朗',
          'Điều rối bỗng sáng tỏ trong một phút',
          'Yang rumit tiba-tiba “klik” dan jelas'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: loc(
      '여행을 간다면 가장 기대되는 것은?',
      'On a trip, what are you most excited for?',
      '旅行に行くなら、いちばん楽しみにしていることは？',
      '去旅行的话，最期待什么？',
      '去旅行的話，最期待什麼？',
      'Đi du lịch, bạn háo hức nhất điều gì?',
      'Saat traveling, yang paling kamu nanti?'
    ),
    options: [
      {
        text: loc(
          '현지 음식 탐방. 그 나라 음식이 여행의 전부다',
          'Local food tour—that country’s eats are the whole trip',
          '現地グルメ巡り。その国の食が旅のすべて',
          '当地美食探店，吃遍那个国家才是旅行',
          '當地美食探店，吃遍那個國家才是旅行',
          'Ăn uống địa phương—ẩm thực là cả chuyến đi',
          'Kuliner lokal—makanannya adalah inti perjalanan'
        ),
        score: 0,
      },
      {
        text: loc(
          '한국에 없는 브랜드 쇼핑 또는 여행지 기념품 수집',
          'Brands you can’t get at home—or souvenir hunting',
          '自国にないブランドのショッピングやお土産集め',
          '国内买不到的牌子，或收集旅行纪念品',
          '國內買不到的牌子，或收集旅行紀念品',
          'Mua thương hiệu khó có ở nhà—hoặc sưu tầm quà',
          'Belanja merek yang jarang ada di rumah—atau oleh-oleh'
        ),
        score: 1,
      },
      {
        text: loc(
          '하이킹, 서핑, 등산 등 액티비티 체험',
          'Hiking, surfing, climbing—active experiences',
          'ハイキング、サーフィン、登山などアクティビティ',
          '徒步、冲浪、登山等体验活动',
          '健行、衝浪、登山等體驗活動',
          'Leo núi, lướt sóng, trekking—trải nghiệm vận động',
          'Hiking, surfing, naik gunung—aktivitas seru'
        ),
        score: 2,
      },
      {
        text: loc(
          '그 나라의 역사, 문화, 색다른 라이프스타일 경험',
          'History, culture, a different everyday life',
          'その国の歴史・文化、違うライフスタイル体験',
          '历史、文化、体验不同的生活方式',
          '歷史、文化、體驗不同的生活方式',
          'Lịch sử, văn hóa, cách sống khác biệt',
          'Sejarah, budaya, gaya hidup yang beda'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: loc(
      '주말 아침 기분 좋게 일어났을 때 가장 하고 싶은 것은?',
      'Weekend morning, you wake up in a good mood—what first?',
      '週末の朝、気分よく起きたらまず何をしたい？',
      '周末早上心情很好地醒来，最想做什么？',
      '週末早上心情很好地醒來，最想先做什麼？',
      'Cuối tuần sáng thức dậy vui—làm gì trước?',
      'Akhir pekan bangun pagi dengan mood bagus—ngapain dulu?'
    ),
    options: [
      {
        text: loc(
          '브런치 맛집을 검색하고 예약한다',
          'Search and book a brunch spot',
          'ブランチの名店を探して予約する',
          '搜早午餐店并预约',
          '搜早午餐店並預約',
          'Tìm và đặt chỗ ăn brunch',
          'Cari dan booking tempat brunch'
        ),
        score: 0,
      },
      {
        text: loc(
          '주말 쇼핑이나 플리마켓에 간다',
          'Weekend shopping or a flea market',
          '週末のショッピングやフリマへ',
          '周末逛街或逛市集',
          '週末逛街或逛市集',
          'Đi shopping cuối tuần hoặc chợ đồ cũ',
          'Belanja akhir pekan atau pasar loak'
        ),
        score: 1,
      },
      {
        text: loc(
          '조깅, 등산, 수영 등 아침 운동을 한다',
          'Morning jog, hike, swim—move early',
          '朝ラン、登山、水泳など朝の運動',
          '晨跑、爬山、游泳等早间运动',
          '晨跑、爬山、游泳等早間運動',
          'Chạy bộ, leo núi, bơi—vận động sáng',
          'Lari pagi, hiking, renang—gerak pagi'
        ),
        score: 2,
      },
      {
        text: loc(
          '밀린 책을 읽거나 관심 분야 공부를 한다',
          'Catch up on books or study a topic you like',
          '積読を読むか、興味分野を勉強する',
          '读囤着的书，或学感兴趣的领域',
          '讀囤著的書，或學感興趣的領域',
          'Đọc sách tồn hoặc học chủ đề thích',
          'Baca buku nganggur atau belajar topik favorit'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: loc(
      '스트레스가 심할 때 나도 모르게 하는 행동은?',
      'When stress is high, what do you do without thinking?',
      'ストレスが強いとき、無意識にやってしまうことは？',
      '压力大时，你会不自觉做什么？',
      '壓力大時，你會不自覺做什麼？',
      'Khi stress cao, bạn vô thức làm gì?',
      'Saat stres tinggi, kamu tanpa sadar ngapain?'
    ),
    options: [
      {
        text: loc(
          '뭔가를 먹는다. 맛있는 걸 먹으면 기분이 나아진다',
          'Eat something—good food lifts your mood',
          '何か食べる。美味しいと気分が上がる',
          '吃点什么，好吃的能让心情变好',
          '吃點什麼，好吃的能讓心情變好',
          'Ăn gì đó—đồ ngon là mood lên',
          'Makan sesuatu—yang enak bikin mood naik'
        ),
        score: 0,
      },
      {
        text: loc(
          '쇼핑 앱을 열어 구경하거나 장바구니를 채운다',
          'Open shopping apps to browse or fill the cart',
          'ショップアプリを開いて見たりカゴに入れたり',
          '打开购物软件逛或加购物车',
          '打開購物軟體逛或加購物車',
          'Mở app mua sắm lướt hoặc nhét giỏ',
          'Buka app belanja window-shopping atau isi keranjang'
        ),
        score: 1,
      },
      {
        text: loc(
          '몸을 움직인다. 걷거나 뛰면 머리가 비워진다',
          'Move—walk or run until your head clears',
          '体を動かす。歩く・走ると頭が空く',
          '动起来，走走跑跑脑子就空了',
          '動起來，走走跑跑腦子就空了',
          'Cử động—đi bộ hoặc chạy cho đầu óc nhẹ',
          'Gerak—jalan atau lari sampai kepala ringan'
        ),
        score: 2,
      },
      {
        text: loc(
          '관심 분야 영상이나 글을 읽으며 머릿속을 채운다',
          'Watch or read about your interests to fill your head',
          '興味の動画や記事で頭を埋める',
          '看感兴趣的视频或文章填满脑子',
          '看感興趣的影片或文章填滿腦子',
          'Xem video/bài viết sở thích để “lấp” đầu',
          'Tonton/baca minatmu untuk penuhi pikiran'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: loc(
      '대화할 때 내가 가장 신나는 주제는?',
      'In conversation, what topic gets you most hyped?',
      '会話で一番テンションが上がる話題は？',
      '聊天时你最兴奋的话题是？',
      '聊天時你最興奮的話題是？',
      'Khi trò chuyện, chủ đề nào khiến bạn hào hứng nhất?',
      'Saat ngobrol, topik apa yang paling bikin semangat?'
    ),
    options: [
      {
        text: loc(
          '맛집, 음식, 요리, 식재료 이야기',
          'Restaurants, food, cooking, ingredients',
          'グルメ、料理、食材の話',
          '探店、美食、做饭、食材',
          '探店、美食、做飯、食材',
          'Quán ăn, món ăn, nấu nướng, nguyên liệu',
          'Kuliner, masak, bahan makanan'
        ),
        score: 0,
      },
      {
        text: loc(
          '신상 아이템, 브랜드, 최근 구매한 것들 이야기',
          'New drops, brands, recent purchases',
          '新作アイテム、ブランド、最近買ったもの',
          '新品、品牌、最近买了什么',
          '新品、品牌、最近買了什麼',
          'Hàng mới, thương hiệu, đồ vừa mua',
          'Rilis baru, merek, belanjaan terbaru'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동, 건강, 몸 관리, 갓생 이야기',
          'Training, health, body, “that life” routines',
          'トレ、健康、ボディメイク、ルーティン',
          '运动、健康、身材管理、自律生活',
          '運動、健康、身材管理、自律生活',
          'Tập luyện, sức khỏe, body, routine sống lành',
          'Olahraga, kesehatan, tubuh, hidup disiplin'
        ),
        score: 2,
      },
      {
        text: loc(
          '새로운 정보, 흥미로운 사실, 요즘 배운 것 이야기',
          'New info, fun facts, what you’ve been learning',
          '新しい情報、雑学、最近学んだこと',
          '新资讯、冷知识、最近学了什么',
          '新資訊、冷知識、最近學了什麼',
          'Thông tin mới, fact hay, điều vừa học',
          'Info baru, fakta menarik, yang baru dipelajari'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: loc(
      '인스타그램 저장 폴더에 가장 많은 것은?',
      'What fills your Instagram saved folder the most?',
      'Instagramの保存フォルダに一番多いのは？',
      '你的 ins 收藏夹里最多的是？',
      '你的 IG 收藏裡最多的是？',
      'Thư mục đã lưu Instagram của bạn toàn gì nhất?',
      'Isi folder simpanan Instagram kamu paling banyak apa?'
    ),
    options: [
      {
        text: loc(
          '맛집 정보, 레시피, 카페 저장',
          'Restaurant tips, recipes, cafés',
          'グルメ情報、レシピ、カフェ',
          '探店、食谱、咖啡馆',
          '探店、食譜、咖啡館',
          'Quán ăn, công thức, quán cafe',
          'Info kuliner, resep, kafe'
        ),
        score: 0,
      },
      {
        text: loc(
          '갖고 싶은 아이템, 쇼핑 스크린샷, 코디 레퍼런스',
          'Wishlist items, shopping screenshots, outfit refs',
          '欲しいアイテム、スクショ、コーデ参考',
          '心动单品、购物截图、穿搭参考',
          '心動單品、購物截圖、穿搭參考',
          'Đồ muốn mua, screenshot, outfit',
          'Barang incaran, screenshot, referensi outfit'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동 루틴, 갓생 스케줄, 건강 정보',
          'Workout routines, schedules, health tips',
          'トレ動画、スケジュール、健康情報',
          '运动routine、日程、健康资讯',
          '運動 routine、日程、健康資訊',
          'Routine tập, lịch, tips sức khỏe',
          'Routine olahraga, jadwal, info sehat'
        ),
        score: 2,
      },
      {
        text: loc(
          '지식 카드뉴스, 읽어야 할 글, 공부 자료',
          'Knowledge carousels, articles to read, study material',
          '知識カルーセル、後で読む記事、勉強資料',
          '知识卡片、待读文章、学习资料',
          '知識卡片、待讀文章、學習資料',
          'Slide kiến thức, bài đọc dở, tài liệu học',
          'Konten edukasi, bacaan nanti, materi belajar'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: loc(
      '돈을 써서 가장 행복했던 기억은?',
      'Your happiest memory of spending money?',
      'お金を使って一番幸せだった思い出は？',
      '花钱花得最开心的一次记忆是？',
      '花錢花得最開心的一次記憶是？',
      'Kỷ niệm chi tiền khiến bạn hạnh phúc nhất?',
      'Kenangan paling bahagia saat menghabiskan uang?'
    ),
    options: [
      {
        text: loc(
          '정말 맛있는 식사 또는 잊을 수 없는 디저트',
          'An incredible meal or unforgettable dessert',
          '本当に美味しい食事か忘れられないデザート',
          '特别好吃的一餐或难忘的甜品',
          '特別好吃的一餐或難忘的甜品',
          'Bữa ăn tuyệt hoặc món tráng miệng khó quên',
          'Makan luar biasa atau dessert yang tak terlupakan'
        ),
        score: 0,
      },
      {
        text: loc(
          '오랫동안 갖고 싶었던 아이템을 드디어 샀을 때',
          'Finally buying something you wanted for ages',
          'ずっと欲しかったアイテムをついに買えたとき',
          '终于买下惦记很久的东西',
          '終於買下惦記很久的東西',
          'Cuối cùng mua được thứ mong ước lâu nay',
          'Akhirnya beli barang yang lama diinginkan'
        ),
        score: 1,
      },
      {
        text: loc(
          '운동 등록, 개인 트레이닝, 스포츠 장비 구매',
          'Gym membership, personal training, sports gear',
          'ジム、パーソナル、スポーツ用品',
          '办健身卡、私教、买运动装备',
          '辦健身卡、教練課、買運動裝備',
          'Đăng gym, PT, đồ thể thao',
          'Member gym, PT, peralatan olahraga'
        ),
        score: 2,
      },
      {
        text: loc(
          '강의 수강, 책 구매, 새로운 경험을 위한 투자',
          'Courses, books, paying for new experiences',
          '講座、本、新しい体験への投資',
          '课程、书、为新体验买单',
          '課程、書、為新體驗買單',
          'Khóa học, sách, trải nghiệm mới',
          'Kursus, buku, pengalaman baru'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: loc(
      '지금 이 순간 가장 하고 싶은 것을 솔직하게 고른다면?',
      'Right now, honestly—what do you most want to do?',
      '今この瞬間、一番やりたいことを正直に選ぶと？',
      '此刻你最想做什么？诚实选一项。',
      '此刻你最想做什麼？誠實選一項。',
      'Ngay lúc này, thật lòng bạn muốn làm gì nhất?',
      'Saat ini, jujur—apa yang paling ingin kamu lakukan?'
    ),
    options: [
      {
        text: loc(
          '맛있는 거 먹기. 지금 당장 뭔가 먹고 싶다',
          'Eat something good—I need food now',
          '美味しいものを食べたい。今すぐ何か食べたい',
          '吃点好的，现在就想吃',
          '吃點好的，現在就想吃',
          'Ăn món ngon—giờ là muốn ăn ngay',
          'Makan enak—pengen makan sekarang juga'
        ),
        score: 0,
      },
      {
        text: loc(
          '갖고 싶은 거 사기. 지금 장바구니에 뭔가 담겨있다',
          'Buy something—there’s already stuff in my cart',
          '欲しいものを買う。もうカゴに入ってる',
          '买点想要的，购物车里已经加好了',
          '買點想要的，購物車裡已經加好了',
          'Mua đồ—giỏ hàng đã có sẵn rồi',
          'Beli yang diinginkan—keranjang sudah ada isinya'
        ),
        score: 1,
      },
      {
        text: loc(
          '몸 움직이기. 오늘 운동 안 하면 찝찝할 것 같다',
          'Move—if I don’t work out today I’ll feel off',
          '体を動かす。今日運動しないとモヤモヤする',
          '动起来，今天不练就难受',
          '動起來，今天不練就難受',
          'Vận động—không tập hôm nay là thấy bứt rứt',
          'Gerak—kalau hari ini tidak olahraga rasanya salah'
        ),
        score: 2,
      },
      {
        text: loc(
          '뭔가 배우기. 요즘 궁금한 게 생겼는데 파고들고 싶다',
          'Learn something—I’m curious and want to go deep',
          '何か学ぶ。最近気になって深掘りしたい',
          '学点什么，最近好奇想深挖',
          '學點什麼，最近好奇想深挖',
          'Học điều gì đó—đang tò mò muốn đào sâu',
          'Belajar sesuatu—penasaran dan ingin mendalami'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3DopamineTypeResults: Phase3DopamineTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🍜',
    title: loc(
      '먹는 게 남는 거야, 식도락 도파민형',
      'Food Is Everything—Foodie Dopamine',
      '食べることが正義、グルメドーパミン型',
      '吃货至上，美食多巴胺型',
      '吃貨至上，美食多巴胺型',
      'Ăn là chính—kiểu dopamine đồ ăn',
      'Makan itu segalanya—tipe dopamin foodie'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「기대하던 메뉴가 딱 맛있게 나오는 그 순간」',
      'That’s why I live: the moment the dish tastes even better than I hoped',
      'これが生きがい：期待以上に美味しい一皿が出てきた瞬間',
      '这就是我活着的理由：期待已久的菜真的好吃到爆的那一刻',
      '這就是我活著的理由：期待已久的菜真的好吃到爆的那一刻',
      'Đó là lý do mình sống: món ăn còn ngon hơn cả mong đợi',
      'Itulah hidupku: saat makanan lebih enak dari yang kubayangkan'
    ),
    description: loc(
      '당신의 도파민은 위장을 통해 충전됩니다. 맛집 예약이 잡히는 순간부터 두근거리고, 음식이 나오는 순간 핸드폰 카메라가 먼저 열리고, 첫 한 입에 눈이 반짝이는 사람입니다. 힘든 날도 맛있는 것 하나면 해결되고, 좋은 날에도 맛있는 것으로 자축합니다. 당신에게 음식은 단순한 끼니가 아니라 감정의 언어입니다.',
      'Your dopamine charges through your stomach. You buzz the moment a reservation is set; when the food arrives, your phone camera opens first; your eyes light up at the first bite. A hard day can be fixed with one great meal, and a good day still calls for a feast. For you, food isn’t just fuel—it’s emotional language.',
      'あなたのドーパミンは胃袋からチャージされます。予約が取れた瞬間からワクワクし、料理が出るとまずスマホのカメラ、一口目で目が輝く人。つらい日も美味しい一皿で救われ、良い日もご褒美は食。食事は単なる栄養ではなく、あなたにとって感情の言語です。',
      '你的多巴胺靠胃充电。订上位子就开始期待，菜一上桌先掏手机，第一口眼睛就亮了。难熬的日子靠一顿好的就能续命，开心的日子也要用美食庆祝。对你来说，食物不只是填饱肚子，而是情绪的语言。',
      '你的多巴胺靠胃充電。訂到位子就開始期待，菜一上桌先掏手機，第一口眼睛就亮了。難熬的日子靠一頓好的就能續命，開心的日子也要用美食慶祝。對你來說，食物不只是填飽肚子，而是情緒的語言。',
      'Dopamine của bạn nạp qua dạ dày. Đặt bàn xong là hồi hộp, món ra là mở máy ảnh trước, miếng đầu là mắt sáng lên. Ngày khó cũng được cứu bằng một bữa ngon, ngày vui càng phải ăn mừng. Với bạn, đồ ăn không chỉ là no bụng—là ngôn ngữ cảm xúc.',
      'Dopaminmu terisi lewat perut. Begitu reservasi fix sudah excited, makanan datang kamera dulu yang nyala, gigitan pertama mata berbinar. Hari berat bisa sembuh dengan satu makan enak, hari bahagia tetap dirayakan dengan makan. Bagimu, makan bukan sekadar kenyang—ini bahasa emosi.'
    ),
    dopamineCategory: loc(
      '식도락형 (Foodie Dopamine)',
      'Foodie (Foodie Dopamine)',
      'グルメ型（フーディ・ドーパミン）',
      '美食型（吃货多巴胺）',
      '美食型（吃貨多巴胺）',
      'Kiểu foodie (Foodie Dopamine)',
      'Tipe foodie (Foodie Dopamine)'
    ),
    chargePoints: loc(
      '맛집 예약 완료 → 첫 한 입 → 완식 후 만족감',
      'Reservation locked → first bite → post-meal bliss',
      '予約確定 → 一口目 → 完食後の満足',
      '订位成功 → 第一口 → 吃完的满足',
      '訂位成功 → 第一口 → 吃完的滿足',
      'Đặt bàn xong → miếng đầu → no bụng mãn nguyện',
      'Reservasi oke → gigitan pertama → puas selesai makan'
    ),
    dischargePoints: loc(
      '기대했던 음식이 실망스러울 때',
      'When the food disappoints after you hyped it up',
      '期待していたのに味がイマイチなとき',
      '期待很高却踩雷时',
      '期待很高卻踩雷時',
      'Khi đồ ăn không như kỳ vọng',
      'Saat makanan mengecewakan setelah dinanti'
    ),
    memeVersion: loc(
      '맛있는 거 먹을 때 → 나 이래서 산다 🍜',
      'When the food hits → that’s why I live 🍜',
      '美味しいものを食べるとき → これが生きがい 🍜',
      '吃到好吃的 → 这就是我活着的理由 🍜',
      '吃到好吃的 → 這就是我活著的理由 🍜',
      'Ăn ngon → đó mới là lý do mình sống 🍜',
      'Makan enak → itulah hidupku 🍜'
    ),
    strength: loc(
      '사람들을 맛집으로 데려가는 능력. 음식으로 관계를 쌓는 사람',
      'You bring people to great spots and build bonds through food.',
      '人を名店に連れて行ける。食で関係を築く人。',
      '擅长带人去好店，用美食拉近关系。',
      '擅長帶人去好店，用美食拉近關係。',
      'Dẫn người đến quán ngon, kết nối bằng đồ ăn.',
      'Bisa ajak orang ke tempat enak, bangun relasi lewat makanan.'
    ),
    caution: loc(
      '스트레스 해소를 음식으로만 하면 악순환이 생길 수 있음',
      'If food is your only stress outlet, it can become a loop.',
      'ストレス発散を食だけに頼るとループになりがち',
      '若只用吃解压，可能形成恶性循环',
      '若只用吃解壓，可能形成惡性循環',
      'Chỉ xả stress bằng ăn uống dễ thành vòng lặp xấu',
      'Kalau stres cuma dilampiaskan makan, bisa jadi lingkaran buruk'
    ),
    upgrade: loc(
      '요리를 직접 해보기. 먹는 도파민에 만드는 도파민이 더해지면 2배',
      'Try cooking—eating dopamine plus making dopamine doubles the hit.',
      '料理してみる。食べるドーパミン＋作るドーパミンで倍増。',
      '试着自己做。吃的快乐加上做的快乐，多巴胺翻倍。',
      '試著自己做。吃的快樂加上做的快樂，多巴胺翻倍。',
      'Thử nấu ăn—dopamine ăn + dopamine nấu = nhân đôi.',
      'Coba masak—dopamin makan + dopamin memasak jadi double.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 식도락형 🍜 나 이래서 산다: 기대했던 맛집이 딱 맞았을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Foodie 🍜 That’s why I live: when the spot delivers → What’s your dopamine type?',
      '私のドーパミンタイプはグルメ型 🍜 これが生きがい：期待の名店が当たったとき → あなたは？',
      '我的多巴胺类型是吃货型 🍜 这就是我活着的理由：探店没踩雷 → 你是哪种多巴胺型？',
      '我的多巴胺類型是吃貨型 🍜 這就是我活著的理由：探店沒踩雷 → 你是哪種多巴胺型？',
      'Mình là kiểu foodie 🍜 Sống vì điều này: quán đúng như mong đợi → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku foodie 🍜 Itulah hidupku: restoran sesuai ekspektasi → Kamu tipe dopamine apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🛍️',
    title: loc(
      '질렀을 때 살아있음을 느끼는, 쇼핑 도파민형',
      'Alive When You Checkout—Shopping Dopamine',
      '買い切った瞬間に生を実感、ショッピング・ドーパミン型',
      '下单那一刻才感觉活着，购物多巴胺型',
      '下單那一刻才感覺活著，購物多巴胺型',
      'Thanh toán xong mới thấy sống—dopamine mua sắm',
      'Hidup saat checkout—dopamin belanja'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「오래 고민하던 걸 드디어 질렀을 때 그 찰나」',
      'That’s why I live: the second I finally buy what I debated forever',
      'これが生きがい：ずっと迷っていたものをついに決済した瞬間',
      '这就是我活着的理由：终于买下犹豫很久的东西那一刻',
      '這就是我活著的理由：終於買下猶豫很久的東西那一刻',
      'Sống vì khoảnh khắc cuối cùng chốt đơn sau bao lần phân vân',
      'Hidup untuk detik akhirnya checkout setelah lama galau'
    ),
    description: loc(
      '당신의 도파민은 결제 버튼에서 충전됩니다. 장바구니에 담는 순간부터 설레고, 결제 완료 알림에 심장이 뛰고, 택배 추적 화면을 열 번은 확인하고, 언박싱 순간이 하이라이트입니다. 물건이 필요해서 사는 게 아니라 사는 행위 자체가 에너지를 줍니다. 갖고 싶은 것을 눈으로만 보는 것도 이미 일종의 도파민이 됩니다.',
      'Your dopamine hits at checkout. Adding to cart already thrills you; the payment ping makes your heart race; you refresh tracking ten times; unboxing is the climax. You don’t only buy because you need things—buying itself energizes you. Even window-shopping your wishlist is already dopamine.',
      'ドーパミンは決済ボタンでチャージ。カゴに入れた時点で高揚、決済通知でドキドキ、追跡画面は何度も更新、アンボックスがクライマックス。必要だから買うだけでなく「買う」行為そのものがエネルギー。欲しいものを眺めるだけでももうドーパミンです。',
      '你的多巴胺在付款瞬间充值。加购就开始兴奋，支付成功心跳加速，物流能刷十遍，开箱才是高光。你不只为需要而买——买本身就在供能。光把心愿单逛一遍也像打了多巴胺。',
      '你的多巴胺在付款瞬間充值。加購就開始興奮，支付成功心跳加速，物流能刷十遍，開箱才是高光。你不只為需要而買——買本身就在供能。光把願望清單逛一遍也像打了多巴胺。',
      'Dopamine tới lúc thanh toán. Thêm giỏ đã sướng, thông báo thanh toán là tim đập, theo dõi ship refresh miết, unboxing là đỉnh. Bạn không chỉ mua vì cần—hành động mua đã tiếp năng lượng. Chỉ xem wishlist cũng đã là dopamine.',
      'Dopaminmu di tombol bayar. Masuk keranjang sudah deg-degan, notifikasi bayar bikin jantung berdebar, lacak paket dibuka berkali-kali, unboxing adalah klimaks. Kamu tidak cuma beli karena perlu—membeli sendiri yang mengisi energi. Sekadar lihat wishlist pun sudah dopamine.'
    ),
    dopamineCategory: loc(
      '쇼핑형 (Shopping Dopamine)',
      'Shopping (Shopping Dopamine)',
      'ショッピング型（ショッピング・ドーパミン）',
      '购物型（购物多巴胺）',
      '購物型（購物多巴胺）',
      'Kiểu mua sắm (Shopping Dopamine)',
      'Tipe belanja (Shopping Dopamine)'
    ),
    chargePoints: loc(
      '결제 완료 → 배송 알림 → 언박싱 순간',
      'Paid → shipping update → unboxing',
      '決済完了 → 発送通知 → アンボックス',
      '支付成功 → 发货通知 → 开箱',
      '付款成功 → 出貨通知 → 開箱',
      'Thanh toán xong → thông báo giao → unboxing',
      'Bayar → notifikasi kirim → unboxing'
    ),
    dischargePoints: loc(
      '사놓고 별로일 때 또는 카드 명세서 받을 때',
      'When the purchase flops—or the card statement arrives',
      '買ってからイマイチだったとき、明細を見たとき',
      '买回家发现一般，或账单来了时',
      '買回家發現一般，或帳單來了時',
      'Mua xong thấy chán—hoặc khi nhận sao kê thẻ',
      'Beli tapi mengecewakan—atau saat lihat tagihan kartu'
    ),
    memeVersion: loc(
      '오래 고민하던 거 드디어 질렀을 때 → 나 이래서 산다 🛍️',
      'When I finally buy what I debated forever → that’s why I live 🛍️',
      'ずっと迷ってたのをついに買ったとき → これが生きがい 🛍️',
      '终于买下犹豫很久的东西 → 这就是我活着的理由 🛍️',
      '終於買下猶豫很久的東西 → 這就是我活著的理由 🛍️',
      'Cuối cùng chốt đơn sau bao lần lưỡng lự → đó là lý do mình sống 🛍️',
      'Akhirnya checkout setelah lama galau → itulah hidupku 🛍️'
    ),
    strength: loc(
      '트렌드 감각이 뛰어나고 쇼핑 큐레이션 능력이 있음',
      'Sharp trend sense and great shopping curation.',
      'トレンド感覚が鋭く、買い物のキュレーション上手。',
      '趋势嗅觉敏锐，擅长购物种草与搭配。',
      '趨勢嗅覺敏銳，擅長購物種草與搭配。',
      'Bắt trend giỏi, curate đồ mua sắc tốt.',
      'Peka tren, jago kurasi belanja.'
    ),
    caution: loc(
      '구매 후 행복감이 빠르게 사라지는 특성. 다음 구매를 위한 구매가 될 수 있음',
      'The high fades fast—you might shop to shop again.',
      '購入後の高揚は短く、次のための買い物になりがち。',
      '买完快乐退得快，容易变成为买而买。',
      '買完快樂退得快，容易變成為買而買。',
      'Vui sau mua nhanh tàn—dễ mua để rồi lại muốn mua.',
      'Bahagia setelah beli cepat pudar—bisa belanja demi belanja lagi.'
    ),
    upgrade: loc(
      '위시리스트에 담고 2주 기다리기. 진짜 원하는 것과 충동을 구별하는 연습',
      'Wishlist it and wait two weeks—practice telling want from impulse.',
      'ウィッシュリストに入れて2週間待つ。本当に欲しいものと衝動を区別する練習。',
      '先加愿望单等两周，练习分辨真心想要和冲动。',
      '先加願望清單等兩週，練習分辨真心想要和衝動。',
      'Cho vào wishlist chờ 2 tuần—tập phân biệt mong muốn thật và nhất thời.',
      'Masukkan wishlist tunggu 2 minggu—latih bedakan keinginan dan impuls.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 쇼핑형 🛍️ 나 이래서 산다: 드디어 질렀을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Shopping 🛍️ That’s why I live: when I finally checkout → What’s your dopamine type?',
      '私のドーパミンタイプはショッピング型 🛍️ これが生いきがい：ついに決済したとき → あなたは？',
      '我的多巴胺类型是购物型 🛍️ 这就是我活着的理由：终于下单 → 你是哪种多巴胺型？',
      '我的多巴胺類型是購物型 🛍️ 這就是我活著的理由：終於下單 → 你是哪種多巴胺型？',
      'Mình là kiểu mua sắm 🛍️ Sống vì lúc chốt đơn → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku belanja 🛍️ Hidup saat checkout → Kamu tipe dopamine apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '💪',
    title: loc(
      '땀 흘리고 나서 살아있음을 느끼는, 운동 도파민형',
      'Alive After You Sweat—Fitness Dopamine',
      '汗をかいて初めて生を感じる、フィットネス・ドーパミン型',
      '流汗才觉得活着，运动多巴胺型',
      '流汗才覺得活著，運動多巴胺型',
      'Đổ mồ hôi mới thấy sống—dopamine fitness',
      'Hidup setelah berkeringat—dopamin fitness'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「운동하고 나서 거울 보는 그 순간」',
      'That’s why I live: the moment I look in the mirror after a workout',
      'これが生きがい：トレ後に鏡を見た瞬間',
      '这就是我活着的理由：练完照镜子的那一刻',
      '這就是我活著的理由：練完照鏡子的那一刻',
      'Sống vì khoảnh khắc soi gương sau tập',
      'Hidup untuk saat lihat cermin setelah olahraga'
    ),
    description: loc(
      '당신의 도파민은 근육에서 충전됩니다. 운동하기 전에는 귀찮지만 일단 시작하면 멈추기 어렵고, 끝나고 나면 세상을 다 가진 것 같은 기분이 듭니다. 오늘 운동을 안 하면 왠지 하루를 낭비한 것 같은 찝찝함이 생기는 사람. 땀을 흘리고 나서 마시는 물 한 잔, 운동 후 샤워, 기록이 갱신되는 순간이 최고의 도파민입니다.',
      'Your dopamine charges in your muscles. Before training you drag your feet, but once you start it’s hard to stop—and after, you feel on top of the world. Skip a workout and the day feels wasted. That post-sweat water, the shower after, a new PR—peak dopamine.',
      'ドーパミンは筋肉でチャージ。始める前はだるいのに、一度動くと止まらず、終わった後は世界を手にした気分。今日動かないと一日を無駄にしたようなモヤモヤ。汗をかいた後の水、シャワー、記録更新が最高のドーパミン。',
      '你的多巴胺在肌肉里充值。练前嫌麻烦，一旦开始就停不下来，练完像拥有了全世界。今天没练就像白过了一天。流汗后那口水、训练后的澡、刷新纪录的瞬间，都是顶配多巴胺。',
      '你的多巴胺在肌肉裡充值。練前嫌麻煩，一旦開始就停不下來，練完像擁有了全世界。今天沒練就像白過了一天。流汗後那口水、訓練後的澡、刷新紀錄的瞬間，都是頂配多巴胺。',
      'Dopamine nạp ở cơ. Trước tập lười, vào rồi khó dừng, xong tập như có cả thế giới. Không tập là thấy lãng phí ngày. Ngụm nước sau mồ hôi, tắm sau tập, phá kỷ lục—đỉnh dopamine.',
      'Dopamin di otot. Sebelum latihan malas, mulai susah berhenti, selesai rasanya punya dunia. Tanpa latihan hari terasa sia-sia. Minum setelah keringat, mandi pasca latihan, rekor baru—dopamine puncak.'
    ),
    dopamineCategory: loc(
      '운동형 (Fitness Dopamine)',
      'Fitness (Fitness Dopamine)',
      'フィットネス型（フィットネス・ドーパミン）',
      '运动型（健身多巴胺）',
      '運動型（健身多巴胺）',
      'Kiểu fitness (Fitness Dopamine)',
      'Tipe fitness (Fitness Dopamine)'
    ),
    chargePoints: loc(
      '운동 시작 → 한계 돌파 → 완료 후 성취감',
      'Start → push the limit → post-workout pride',
      'スタート → 限界突破 → 完了後の達成感',
      '开练 → 突破极限 → 练完的成就感',
      '開練 → 突破極限 → 練完的成就感',
      'Bắt đầu → vượt giới hạn → tự hào sau tập',
      'Mulai → dorong batas → bangga selesai latihan'
    ),
    dischargePoints: loc(
      '몸이 아파서 운동을 못 하는 날',
      'Days you can’t train because you’re sick or hurt',
      '体調や怪我で動けない日',
      '生病或受伤练不了的日子',
      '生病或受傷練不了的日子',
      'Ngày ốm/đau không tập được',
      'Hari tidak bisa latihan karena sakit/cidera'
    ),
    memeVersion: loc(
      '오늘 운동 완료했을 때 → 나 이래서 산다 💪',
      'When I finish today’s workout → that’s why I live 💪',
      '今日のトレ完了したとき → これが生きがい 💪',
      '今天练完了 → 这就是我活着的理由 💪',
      '今天練完了 → 這就是我活著的理由 💪',
      'Xong buổi tập hôm nay → đó là lý do mình sống 💪',
      'Selesai latihan hari ini → itulah hidupku 💪'
    ),
    strength: loc(
      '자기 관리 능력과 루틴 형성력이 다른 영역에도 적용됨',
      'Self-discipline and routine-building transfer to other areas.',
      '自己管理とルーティン力が他の分野にも効く。',
      '自律和养成习惯的能力也会迁移到其他领域。',
      '自律和養成習慣的能力也會遷移到其他領域。',
      'Kỷ luật và xây routine lan sang lĩnh vực khác.',
      'Disiplin dan rutinitas bisa dipakai di bidang lain.'
    ),
    caution: loc(
      '운동 강박이 될 수 있음. 쉬는 것도 성장의 일부임을 잊지 말기',
      'Watch exercise compulsion—rest is part of growth.',
      '運動の強迫になりがち。休むことも成長の一部。',
      '小心练上瘾，休息也是成长的一部分。',
      '小心練上癮，休息也是成長的一部分。',
      'Cẩn thận nghiện tập—nghỉ cũng là tiến bộ.',
      'Waspada obsesi latihan—istirahat bagian dari progres.'
    ),
    upgrade: loc(
      '좋아하는 사람과 함께 운동하기. 사회적 도파민이 더해지면 운동 지속력이 2배',
      'Train with people you like—social dopamine doubles consistency.',
      '好きな人と一緒にトレ。社会的ドーパミンで継続力が倍に。',
      '和喜欢的人一起练，社交多巴胺让坚持翻倍。',
      '和喜歡的人一起練，社交多巴胺讓堅持翻倍。',
      'Tập cùng người thích—dopamine xã hội nhân đôi kiên trì.',
      'Latihan bareng orang disukai—dopamin sosial gandakan konsistensi.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 운동형 💪 나 이래서 산다: 오늘 운동 완료했을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Fitness 💪 That’s why I live: when I finish today’s workout → What’s your dopamine type?',
      '私のドーパミンタイプはフィットネス型 💪 これが生きがい：今日のトレ完了 → あなたは？',
      '我的多巴胺类型是运动型 💪 这就是我活着的理由：今天练完了 → 你是哪种多巴胺型？',
      '我的多巴胺類型是運動型 💪 這就是我活著的理由：今天練完了 → 你是哪種多巴胺型？',
      'Mình là kiểu fitness 💪 Sống vì xong buổi tập hôm nay → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku fitness 💪 Hidup saat selesai latihan hari ini → Kamu tipe dopamine apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '📚',
    title: loc(
      '알게 되는 순간 설레는, 지식 탐구 도파민형',
      'Thrilled When It Clicks—Intellectual Dopamine',
      'わかった瞬間にときめく、知的好奇心ドーパミン型',
      '搞懂的那一刻最上头，求知多巴胺型',
      '搞懂的那一刻最上頭，求知多巴胺型',
      'Lúc “aha!” là sướng nhất—dopamine tri thức',
      'Deg-degan saat paham—dopamin intelektual'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「몰랐던 것이 갑자기 완전히 이해되는 그 순간」',
      'That’s why I live: when something I didn’t get suddenly makes total sense',
      'これが生きがい：わからなかったことがふっと全部つながる瞬間',
      '这就是我活着的理由：不懂的事突然全通了那一刻',
      '這就是我活著的理由：不懂的事突然全通了那一刻',
      'Sống vì khoảnh khắc thứ rối bỗng hiểu hết',
      'Hidup untuk saat yang rumit tiba-tiba jelas'
    ),
    description: loc(
      '당신의 도파민은 뇌에서 충전됩니다. 새로운 것을 배우는 순간, 복잡하게 생각하던 것이 갑자기 명확해지는 순간, 흥미로운 사실을 발견하는 순간에 심장이 두근거립니다. 유튜브 알고리즘이 알아서 지식 채널만 추천해주는 사람이고, 관심 분야 이야기가 나오면 말이 빨라지고 눈이 빛나는 사람입니다.',
      'Your dopamine charges in your brain. Learning something new, when a knotty idea suddenly clears, when you discover a fascinating fact—your heart races. Your YouTube feed is all explainers; when your niche comes up, you talk faster and your eyes shine.',
      'ドーパミンは脳でチャージ。新しいことを学ぶ瞬間、モヤモヤがふっと晴れる瞬間、面白い事実に出会う瞬間にドキドキ。YouTubeも知識系ばかり。好きな話題になると話すスピードが上がり、目が輝く人です。',
      '你的多巴胺在大脑里充值。学到新东西、纠结的事突然清晰、发现有趣事实时心跳加速。算法总给你推知识类视频；一聊到兴趣领域就语速变快、眼睛发光。',
      '你的多巴胺在大腦裡充值。學到新東西、糾結的事突然清晰、發現有趣事實時心跳加速。演算法總推知識類影片；一聊到興趣領域就語速變快、眼睛發光。',
      'Dopamine nạp ở não. Học điều mới, ý rối chợt sáng, đọc fact hay là tim đập. Feed toàn video kiến thức; đụng chủ đề thích là nói nhanh mắt sáng.',
      'Dopamin di otak. Belajar hal baru, ide rumit tiba jelas, temukan fakta menarik—jantung berdebar. Feed YouTube penuh edukasi; bahas minat bicara cepat mata berbinar.'
    ),
    dopamineCategory: loc(
      '지식 탐구형 (Intellectual Dopamine)',
      'Intellectual (Intellectual Dopamine)',
      '知的好奇心型（インテレクチュアル・ドーパミン）',
      '求知型（智识多巴胺）',
      '求知型（智識多巴胺）',
      'Kiểu tri thức (Intellectual Dopamine)',
      'Tipe intelektual (Intellectual Dopamine)'
    ),
    chargePoints: loc(
      '새로운 개념 습득 → 연결되는 순간 → 타인에게 설명할 때',
      'Learn a concept → it connects → you explain it to someone',
      '新概念を掴む → つながる瞬間 → 人に説明するとき',
      '学到新概念 → 串起来 → 讲给别人听',
      '學到新概念 → 串起來 → 講給別人聽',
      'Học khái niệm → nối được → giải thích cho người khác',
      'Paham konsep → nyambung → jelaskan ke orang lain'
    ),
    dischargePoints: loc(
      '더 이상 배울 게 없다고 느껴질 때 또는 반복되는 일상',
      'When you feel there’s nothing left to learn—or life feels on repeat',
      'もう学ぶことがない気分のとき、毎日がルーティンだけのとき',
      '觉得没什么可学，或日子只剩重复时',
      '覺得沒什麼可學，或日子只剩重複時',
      'Cảm giác không còn gì để học—hoặc ngày nào cũng lặp',
      'Merasa tidak ada yang baru dipelajar—atau hidup monoton'
    ),
    memeVersion: loc(
      '몰랐던 거 갑자기 이해됐을 때 → 나 이래서 산다 📚',
      'When something I didn’t get suddenly clicks → that’s why I live 📚',
      'わからなかったのがふっとわかったとき → これが生きがい 📚',
      '不懂的事突然懂了 → 这就是我活着的理由 📚',
      '不懂的事突然懂了 → 這就是我活著的理由 📚',
      'Thứ không hiểu chợt sáng → đó là lý do mình sống 📚',
      'Yang susah tiba-tiba paham → itulah hidupku 📚'
    ),
    strength: loc(
      '깊이 있는 대화 능력과 다양한 분야의 연결 사고',
      'Deep conversations and connecting ideas across fields.',
      '深い会話力と分野をまたぐ連想力。',
      '能聊得深，也能把不同领域串起来。',
      '能聊得深，也能把不同領域串起來。',
      'Trò chuyện sâu, nối ý giữa nhiều lĩnh vực.',
      'Ngobrol dalam, menghubungkan ide lintas bidang.'
    ),
    caution: loc(
      '배우는 데만 집중하다가 실행이 늦어지는 경향이 있음',
      'You can stay in “learning mode” and delay doing.',
      '学びに没頭して実行が遅れがち。',
      '容易只顾学不动手，执行会拖延。',
      '容易只顧學不動手，執行會拖延。',
      'Dễ học mãi mà chậm hành động.',
      'Sering fokus belajar, eksekusi tertunda.'
    ),
    upgrade: loc(
      '배운 것을 누군가에게 설명해보기. 가르치면서 더 깊이 이해됨',
      'Teach what you learn—understanding deepens when you explain.',
      '学んだことを誰かに説明してみる。教えると理解が深まる。',
      '把学到的讲给别人听，教是最好的学。',
      '把學到的講給別人聽，教是最好的學。',
      'Giải thích cho ai đó những gì học—dạy là học sâu hơn.',
      'Jelaskan yang dipelajari ke orang lain—mengajar memperdalam paham.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 지식 탐구형 📚 나 이래서 산다: 몰랐던 거 이해됐을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Intellectual 📚 That’s why I live: when it finally clicks → What’s your dopamine type?',
      '私のドーパミンタイプは知的好奇心型 📚 これが生きがい：ふっと理解できたとき → あなたは？',
      '我的多巴胺类型是求知型 📚 这就是我活着的理由：突然想通了 → 你是哪种多巴胺型？',
      '我的多巴胺類型是求知型 📚 這就是我活著的理由：突然想通了 → 你是哪種多巴胺型？',
      'Mình là kiểu tri thức 📚 Sống vì lúc chợt hiểu → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku intelektual 📚 Hidup saat akhirnya paham → Kamu tipe dopamine apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🫂',
    title: loc(
      '연결되는 순간 충전되는, 관계 도파민형',
      'Charged by Connection—Social Dopamine',
      'つながる瞬間に充電される、ソーシャル・ドーパミン型',
      '在连接里充电，社交多巴胺型',
      '在連結裡充電，社交多巴胺型',
      'Nạp pin khi kết nối—dopamine xã hội',
      'Terisi saat terhubung—dopamin sosial'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「좋아하는 사람들과 배꼽 잡고 웃는 그 순간」',
      'That’s why I live: laughing till my stomach hurts with people I love',
      'これが生きがい：好きな人たちと腹を抱えて笑う瞬間',
      '这就是我活着的理由：和喜欢的人笑到肚子疼',
      '這就是我活著的理由：和喜歡的人笑到肚子痛',
      'Sống vì cười nghiêng ngả với người thương',
      'Hidup untuk tertawa bareng orang tersayang sampai perut sakit'
    ),
    description: loc(
      '당신의 도파민은 사람에게서 충전됩니다. 오랜만에 만난 친구와 나누는 대화, 아무 이유 없이 같이 웃는 순간, 내 말을 진심으로 들어주는 사람과의 대화에서 에너지가 폭발합니다. 혼자 있는 것도 괜찮지만 결국 사람과 함께할 때 가장 살아있는 느낌이 드는 타입입니다. 연락 하나에 기분이 좋아지고, 만남 하나에 한 주가 충전됩니다.',
      'Your dopamine charges from people. Catching up with an old friend, laughing together for no reason, being truly heard—energy explodes. Solo time is fine, but you feel most alive with others. One text can lift your mood; one hangout can fuel your whole week.',
      'ドーパミンは人からチャージ。久しぶりの友だちとの会話、理由もなく笑い合う瞬間、本気で聞いてくれる人との対話でエネルギーが弾ける。一人も平気だけど、結局いちばん生を感じるのは一緒にいるとき。連絡ひとつで気分が上がり、会うだけで一週間が充電されるタイプ。',
      '你的多巴胺从人身上来。和老友聊天、无缘无故一起笑、被认真倾听——能量会爆。独处也行，但和人在一起才最有活着的感觉。一条消息就能心情变好，见一次能续航一整周。',
      '你的多巴胺從人身上來。和老友聊天、無緣無故一起笑、被認真傾聽——能量會爆。獨處也行，但和人在一起才最有活著的感覺。一則訊息就能心情變好，見一次能續航一整週。',
      'Dopamine đến từ người. Trò chuyện bạn cũ, cười không lý do, được lắng nghe—năng lượng bùng. Ở một mình cũng ổn nhưng bên người mới thấy sống. Một tin nhắn đủ vui, một buổi gặp sạc cả tuần.',
      'Dopamin dari orang. Ngobrol teman lama, tertawa tanpa alasan, didengarkan sungguh-sungguh—energi meledak. Sendiri oke, tapi bareng orang baru hidup penuh. Satu chat bikin mood naik, satu kali ketemu isi seminggu.'
    ),
    dopamineCategory: loc(
      '관계형 (Social Dopamine)',
      'Social (Social Dopamine)',
      'ソーシャル型（ソーシャル・ドーパミン）',
      '社交型（关系多巴胺）',
      '社交型（關係多巴胺）',
      'Kiểu xã hội (Social Dopamine)',
      'Tipe sosial (Social Dopamine)'
    ),
    chargePoints: loc(
      '오랜 친구 연락 → 약속 잡기 → 만나서 웃는 순간',
      'Text an old friend → make plans → laugh together IRL',
      '久しぶりに連絡 → 約束 → 会って笑う瞬間',
      '联系老友 → 约见面 → 见面笑成一团',
      '聯絡老友 → 約見面 → 見面笑成一團',
      'Nhắn bạn cũ → hẹn → gặp và cười',
      'Chat teman lama → janji → ketemu dan tertawa'
    ),
    dischargePoints: loc(
      '오래 혼자 있거나 인간관계에서 상처받을 때',
      'Too much alone time—or getting hurt in relationships',
      '長く一人でいるとき、人間関係で傷ついたとき',
      '独处太久，或在关系里受伤时',
      '獨處太久，或在關係裡受傷時',
      'Ở một mình quá lâu—hoặc tổn thương trong quan hệ',
      'Terlalu lama sendiri—atau terluka dalam hubungan'
    ),
    memeVersion: loc(
      '찐친들이랑 배꼽 잡고 웃을 때 → 나 이래서 산다 🫂',
      'When I laugh with my besties till it hurts → that’s why I live 🫂',
      '親友と腹を抱えて笑うとき → これが生きがい 🫂',
      '和死党笑到肚子疼 → 这就是我活着的理由 🫂',
      '和死党笑到肚子痛 → 這就是我活著的理由 🫂',
      'Cười nghiêng ngả với bạn thân → đó là lý do mình sống 🫂',
      'Tertawa dengan sahabat sampai perut sakit → itulah hidupku 🫂'
    ),
    strength: loc(
      '관계를 오래 유지하는 능력과 사람을 편하게 만드는 기질',
      'You keep relationships and put people at ease.',
      '関係を長く保ち、人を安心させる才能。',
      '擅长维系关系，也让人相处放松。',
      '擅長維繫關係，也讓人相處放鬆。',
      'Giữ quan hệ bền, khiến người khác thoải mái.',
      'Pertahankan hubungan, bikin orang nyaman.'
    ),
    caution: loc(
      '사람에게서 도파민을 얻다 보면 관계가 나쁠 때 과하게 영향받을 수 있음',
      'If people are your main dopamine, rough patches can hit extra hard.',
      '人からドーパミンを得すぎると、関係が悪いときに落ち込みやすい。',
      '太依赖人从关系里取多巴胺，关系不顺时打击会更大。',
      '太依賴人從關係裡取多巴胺，關係不順時打擊會更大。',
      'Lấy dopamine chủ yếu từ người—khi quan hệ xấu sẽ đau hơn.',
      'Dopamin utama dari orang—saat hubungan buruk dampaknya besar.'
    ),
    upgrade: loc(
      '나 자신과의 시간도 도파민 충전원으로 만들기. 혼자도 괜찮은 연습',
      'Practice solo time as a dopamine source too—it’s okay to recharge alone.',
      '一人時間もドーパミン源に。ひとりでも大丈夫な練習。',
      '也练习让独处成为充电方式，一个人也可以很好。',
      '也練習讓獨處成為充電方式，一個人也可以很好。',
      'Tập để thời gian một mình cũng nạp dopamine.',
      'Latih waktu sendiri juga jadi sumber dopamine.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 관계형 🫂 나 이래서 산다: 찐친들이랑 배꼽 잡고 웃을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Social 🫂 That’s why I live: laughing with my besties → What’s your dopamine type?',
      '私のドーパミンタイプはソーシャル型 🫂 これが生きがい：親友と笑い合うとき → あなたは？',
      '我的多巴胺类型是社交型 🫂 这就是我活着的理由：和死党笑成一团 → 你是哪种多巴胺型？',
      '我的多巴胺類型是社交型 🫂 這就是我活著的理由：和死党笑成一團 → 你是哪種多巴胺型？',
      'Mình là kiểu xã hội 🫂 Sống vì cười với bạn thân → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku sosial 🫂 Hidup saat tertawa bareng sahabat → Kamu tipe dopamine apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🏆',
    title: loc(
      '성취했을 때 폭발하는, 목표 달성 도파민형',
      'Explodes When You Achieve—Achievement Dopamine',
      '達成の瞬間に爆発する、アチーブメント・ドーパミン型',
      '完成目标才爆爽，成就多巴胺型',
      '完成目標才爆爽，成就多巴胺型',
      'Bùng khi hoàn thành—dopamine thành tựu',
      'Meledak saat capai target—dopamin pencapaian'
    ),
    shortDescription: loc(
      '나 이래서 산다: 「세워놓은 목표를 완료로 체크하는 그 순간」',
      'That’s why I live: the moment I check off a goal I set',
      'これが生きがい：立てた目標を完了にチェックした瞬間',
      '这就是我活着的理由：把定下的目标一项项打勾那一刻',
      '這就是我活著的理由：把定下的目標一項項打勾那一刻',
      'Sống vì khoảnh khắc tích xong mục tiêu đã đặt',
      'Hidup untuk saat centang selesai pada target yang dibuat'
    ),
    description: loc(
      '당신의 도파민은 체크박스에서 충전됩니다. 할 일 목록을 만들고 하나씩 완료로 바꾸는 쾌감, 장기 목표를 달성했을 때의 폭발적인 성취감, 오늘 계획한 것을 전부 끝냈을 때의 충만함. 먹는 것도, 사는 것도, 운동도 좋지만 결국 뭔가를 해냈다는 감각이 가장 강한 도파민을 줍니다.',
      'Your dopamine charges at the checkbox. The rush of turning todos done one by one, the burst when a long-term goal lands, the fullness when today’s plan is 100% complete. Food, shopping, workouts are great—but “I did it” hits hardest.',
      'ドーパミンはチェックボックスでチャージ。ToDoを一つずつ完了に変える快感、長期目標を達成したときの爆発的な達成感、今日の予定を全部終えた充実感。食べるも買うも運動もいいけれど、結局「やり切った」感覚がいちばん強いドーパミンです。',
      '你的多巴胺在勾选框里充值。一条条把待办划掉的快感、长期目标达成的爆发感、今天计划全完成的满足感。吃买练都好，但“我做到了”才是最强多巴胺。',
      '你的多巴胺在勾選框裡充值。一條條把待辦劃掉的快感、長期目標達成的爆發感、今天計畫全完成的滿足感。吃買練都好，但「我做到了」才是最強多巴胺。',
      'Dopamine ở ô tick. Sướng khi gạch từng việc, nổ khi đạt mục tiêu dài hạn, đầy đặn khi xong hết kế hoạch hôm nay. Ăn mua tập đều hay nhưng “làm được rồi” là mạnh nhất.',
      'Dopamin di kotak centang. Puas mencentang tugas satu per satu, meledak saat capai target jangka panjang, penuh saat rencana hari ini selesai semua. Makan beli olahraga bagus—tapi “aku berhasil” paling kuat.'
    ),
    dopamineCategory: loc(
      '목표 달성형 (Achievement Dopamine)',
      'Achievement (Achievement Dopamine)',
      '達成型（アチーブメント・ドーパミン）',
      '成就型（目标多巴胺）',
      '成就型（目標多巴胺）',
      'Kiểu thành tựu (Achievement Dopamine)',
      'Tipe pencapaian (Achievement Dopamine)'
    ),
    chargePoints: loc(
      '목표 설정 → 과정의 작은 완료들 → 최종 달성 순간',
      'Set the goal → small wins along the way → final check',
      '目標設定 → 途中の小さな完了 → 最終達成',
      '定目标 → 过程里的小完成 → 最终达成',
      '定目標 → 過程裡的小完成 → 最終達成',
      'Đặt mục tiêu → thắng nhỏ dọc đường → hoàn tất cuối',
      'Set target → menang kecil di jalan → selesai akhir'
    ),
    dischargePoints: loc(
      '계획이 틀어지거나 목표 달성이 계속 미뤄질 때',
      'When plans fall apart—or goals keep slipping',
      '計画が崩れたとき、目標が延び延びになるとき',
      '计划泡汤，或目标一再拖延时',
      '計畫泡湯，或目標一再拖延時',
      'Kế hoạch đổ—hoặc mục tiêu cứ bị lùi',
      'Rencana berantakan—atau target terus mundur'
    ),
    memeVersion: loc(
      '오늘 할 일 다 끝냈을 때 → 나 이래서 산다 🏆',
      'When I finish everything on today’s list → that’s why I live 🏆',
      '今日のタスクを全部終えたとき → これが生きがい 🏆',
      '今天的事全做完了 → 这就是我活着的理由 🏆',
      '今天的事全做完了 → 這就是我活著的理由 🏆',
      'Xong hết việc hôm nay → đó là lý do mình sống 🏆',
      'Selesai semua tugas hari ini → itulah hidupku 🏆'
    ),
    strength: loc(
      '높은 자기 관리 능력과 장기 목표를 향한 지속력',
      'Strong self-management and stamina for long goals.',
      '自己管理能力が高く、長期目標に向けた継続力。',
      '自我管理强，对长期目标有耐力。',
      '自我管理強，對長期目標有耐力。',
      'Tự quản tốt, bền bỉ với mục tiêu dài.',
      'Manajemen diri kuat, gigih ke target jangka panjang.'
    ),
    caution: loc(
      '달성 후 공허함이 오는 경우가 있음. 과정 자체를 즐기는 연습이 필요',
      'Post-achievement emptiness can hit—practice enjoying the process.',
      '達成後の虚無感がありがち。プロセスを楽しむ練習を。',
      '达成后可能空虚，需要练习享受过程本身。',
      '達成後可能空虛，需要練習享受過程本身。',
      'Sau khi đạt có thể trống rỗng—hãy tập thích cả hành trình.',
      'Setelah capai bisa hampa—latih nikmati prosesnya.'
    ),
    upgrade: loc(
      '큰 목표를 잘게 쪼개기. 작은 완료의 도파민이 쌓여 큰 성취를 가능하게 함',
      'Break big goals into tiny wins—small dopamine stacks into big wins.',
      '大きな目標を細かく分ける。小さな完了のドーパミンが積み上がる。',
      '把大目标切碎，小完成的多巴胺堆成大成就。',
      '把大目標切碎，小完成的多巴胺堆成大成就。',
      'Chia mục lớn thành win nhỏ—dopamine nhỏ chồng thành thành công lớn.',
      'Pecah target besar jadi centang kecil—dopamine menumpuk jadi pencapaian besar.'
    ),
    shareSnippet: loc(
      '내 도파민 유형은 목표 달성형 🏆 나 이래서 산다: 오늘 할 일 다 끝냈을 때 → 너는 어떤 도파민 유형이야?',
      'My dopamine type is Achievement 🏆 That’s why I live: when I clear today’s list → What’s your dopamine type?',
      '私のドーパミンタイプは達成型 🏆 これが生きがい：今日のタスク完了 → あなたは？',
      '我的多巴胺类型是成就型 🏆 这就是我活着的理由：今天的事全做完 → 你是哪种多巴胺型？',
      '我的多巴胺類型是成就型 🏆 這就是我活著的理由：今天的事全做完 → 你是哪種多巴胺型？',
      'Mình là kiểu thành tựu 🏆 Sống vì xong hết việc hôm nay → Bạn là kiểu dopamine nào?',
      'Tipe dopaminku pencapaian 🏆 Hidup saat selesai semua tugas hari ini → Kamu tipe dopamine apa?'
    ),
  },
];

export function calculatePhase3DopamineTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total >= 0 && total <= 5) return 'Type1';
  if (total >= 6 && total <= 11) return 'Type2';
  if (total >= 12 && total <= 19) return 'Type3';
  if (total >= 20 && total <= 27) return 'Type4';
  if (total >= 28 && total <= 33) return 'Type5';
  if (total >= 34 && total <= 36) return 'Type6';
  return 'Type4';
}
