/** 나의 디토소비 유형 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형 */

function M(
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

export interface Phase3DittoConsumptionTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3DittoConsumptionTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  dittoType: Record<string, string>;
  mainChannel: Record<string, string>;
  triggerCondition: Record<string, string>;
  strength: Record<string, string>;
  trap: Record<string, string>;
  blackHistory: Record<string, string>;
  smartStrategy: Record<string, string>;
  brandApproach: Record<string, string>;
  todayTask: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3DittoConsumptionTypeResult(scores: number[]): string {
  const total = scores.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3DittoConsumptionTypeQuestions: Phase3DittoConsumptionTypeQuestion[] = [
  {
    id: 1,
    question: M(
      '새로운 제품을 구매할 때 가장 먼저 찾는 정보는?',
      'When buying a new product, what information do you look for first?',
      '新しい商品を買うとき、最初に探す情報は？',
      '购买新产品时，你最先查找什么信息？',
      '購買新產品時，你最先查找什麼資訊？',
      'Khi mua sản phẩm mới, bạn tìm thông tin gì trước tiên?',
      'Saat membeli produk baru, informasi apa yang kamu cari dulu?'
    ),
    options: [
      {
        text: M(
          '유튜버·인스타 인플루언서 리뷰. 실제로 써본 사람 영상이 가장 믿음직하다',
          'YouTuber and Instagram influencer reviews. Videos from people who actually used it feel most trustworthy',
          'YouTuber・インスタインフルエンサーのレビュー。実際に使った人の動画がいちばん信頼できる',
          'YouTube博主和Instagram网红测评。真正用过的人的视频最可信',
          'YouTube博主和Instagram網紅測評。真正用過的人的影片最可信',
          'Review của YouTuber và influencer Instagram. Video của người thực sự dùng thử đáng tin nhất',
          'Review YouTuber dan influencer Instagram. Video dari orang yang benar-benar pakai paling dipercaya'
        ),
        score: 0,
      },
      {
        text: M(
          '친한 친구나 지인의 직접 추천. 내 취향을 아는 사람의 말이 제일 정확하다',
          'Direct recommendations from close friends or acquaintances. People who know my taste are most accurate',
          '親しい友人や知人の直接のおすすめ。自分の好みを知っている人の言葉がいちばん正確',
          '亲密朋友或熟人的直接推荐。了解我喜好的人说的最准确',
          '親密朋友或熟人的直接推薦。了解我喜好的人說的最準確',
          'Giới thiệu trực tiếp từ bạn thân hoặc người quen. Người hiểu gu của mình nói chính xác nhất',
          'Rekomendasi langsung dari teman dekat atau kenalan. Orang yang paham selera saya paling akurat'
        ),
        score: 1,
      },
      {
        text: M(
          '네이버·쿠팡·앱 추천 알고리즘. 유사 구매자 리뷰와 평점이 기준이다',
          'Naver, Coupang, and app recommendation algorithms. Similar buyer reviews and ratings are my standard',
          'Naver・Coupang・アプリのおすすめアルゴリズム。類似購入者のレビューと評価が基準',
          'Naver、Coupang和应用推荐算法。相似买家的评价和评分是标准',
          'Naver、Coupang和應用程式推薦演算法。相似買家的評價和評分是標準',
          'Thuật toán gợi ý trên Naver, Coupang và app. Đánh giá và xếp hạng của người mua tương tự là tiêu chuẩn',
          'Algoritma rekomendasi Naver, Coupang, dan aplikasi. Review dan rating pembeli serupa jadi patokan'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 연예인·셀럽·드라마 협찬 제품. 그 사람이 쓰면 믿음이 간다',
          'Products worn or used by my favorite celebrities, idols, or drama placements. If they use it, I trust it',
          '好きな芸能人・セレブ・ドラマ協賛商品。その人が使っていれば信頼できる',
          '喜欢的明星、名人和电视剧植入产品。他们用的我就信',
          '喜歡的明星、名人和戲劇置入產品。他們用的我就信',
          'Sản phẩm của idol, celeb yêu thích hoặc quảng cáo trong phim. Họ dùng thì mình tin',
          'Produk dari seleb, idol, atau placement drama favorit. Kalau mereka pakai, saya percaya'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '인스타·유튜브를 보다가 갑자기 구매 욕구가 생길 때는?',
      'When scrolling Instagram or YouTube suddenly makes you want to buy something?',
      'インスタ・YouTubeを見ていて突然買いたくなるのは？',
      '刷Instagram或YouTube时突然想买，通常是因为？',
      '刷Instagram或YouTube時突然想買，通常是因為？',
      'Khi lướt Instagram hoặc YouTube mà đột nhiên muốn mua?',
      'Saat scroll Instagram atau YouTube tiba-tiba ingin beli?'
    ),
    options: [
      {
        text: M(
          '인플루언서가 "진짜 좋다"며 언박싱하는 영상을 볼 때',
          'When an influencer unboxes something saying "this is really good"',
          'インフルエンサーが「本当にいい」と言いながら開封動画を見せるとき',
          '看到网红开箱说"真的很好"的时候',
          '看到網紅開箱說「真的很好」的時候',
          'Khi influencer mở hộp và nói "thật sự tốt lắm"',
          'Saat influencer unboxing sambil bilang "ini beneran bagus"'
        ),
        score: 0,
      },
      {
        text: M(
          '친구가 스토리에 올린 사진 속 아이템이 눈에 들어올 때',
          'When an item in a photo on a friend\'s story catches my eye',
          '友人がストーリーに載せた写真の中のアイテムが目に入ったとき',
          '朋友故事里的照片某件东西映入眼帘的时候',
          '朋友限動裡的照片某件東西映入眼簾的時候',
          'Khi món đồ trong ảnh story của bạn thu hút mình',
          'Saat barang di foto story teman menarik perhatian'
        ),
        score: 1,
      },
      {
        text: M(
          '내가 본 영상과 관련 상품이 피드에 계속 뜨기 시작할 때',
          'When related products from a video I watched keep showing up in my feed',
          '見た動画に関連する商品がフィードに次々と出てくるようになったとき',
          '看过的视频相关商品开始在信息流里不断出现的时候',
          '看過的影片相關商品開始在動態牆上不斷出現的時候',
          'Khi sản phẩm liên quan video vừa xem cứ hiện trên feed',
          'Saat produk terkait video yang ditonton terus muncul di feed'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 연예인이 입거나 쓴 것과 같은 제품임을 알게 될 때',
          'When I find out it\'s the same product my favorite celebrity wore or used',
          '好きな芸能人が着た・使ったものと同じ商品だと分かったとき',
          '发现是喜欢的明星穿或用的同款的时候',
          '發現是喜歡的明星穿或用的同款的時候',
          'Khi biết đó là sản phẩm giống idol yêu thích từng dùng',
          'Saat tahu itu produk yang sama dengan yang dipakai idol favorit'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '쇼핑 전 리뷰를 확인하는 나의 방식은?',
      'How do I check reviews before shopping?',
      '買い物前にレビューを確認する自分のやり方は？',
      '购物前我如何查看评价？',
      '購物前我如何查看評價？',
      'Cách mình xem review trước khi mua sắm?',
      'Bagaimana saya cek review sebelum belanja?'
    ),
    options: [
      {
        text: M(
          '구독 중인 인플루언서나 유튜버의 리뷰 영상을 먼저 찾아본다',
          'I look up review videos from influencers or YouTubers I follow first',
          '登録しているインフルエンサーやYouTuberのレビュー動画を先に探す',
          '先找订阅的网红或YouTube博主的测评视频',
          '先找訂閱的網紅或YouTube博主的測評影片',
          'Tìm video review của influencer hoặc YouTuber đang theo dõi trước',
          'Cari video review influencer atau YouTuber yang di-subscribe dulu'
        ),
        score: 0,
      },
      {
        text: M(
          '카카오톡이나 인스타 DM으로 친구에게 "이거 써봤어?" 먼저 물어본다',
          'I ask friends on KakaoTalk or Instagram DM "Have you tried this?" first',
          'KakaoTalkやインスタDMで友人に「これ使った？」と先に聞く',
          '先在KakaoTalk或Instagram私信问朋友"你用过这个吗？"',
          '先在KakaoTalk或Instagram私訊問朋友「你用過這個嗎？」',
          'Hỏi bạn qua KakaoTalk hoặc DM Instagram "Bạn dùng thử cái này chưa?" trước',
          'Tanya teman lewat KakaoTalk atau DM Instagram "Kamu pernah coba ini?" dulu'
        ),
        score: 1,
      },
      {
        text: M(
          '별점 4.5 이상, 리뷰 500개 이상인지 수치부터 확인한다',
          'I check the numbers first: 4.5+ stars and 500+ reviews',
          '星4.5以上、レビュー500件以上か数値から先に確認する',
          '先看数据：4.5星以上、500条以上评价',
          '先看數據：4.5星以上、500則以上評價',
          'Kiểm tra số liệu trước: 4.5 sao trở lên, trên 500 review',
          'Cek angka dulu: rating 4.5+ dan review 500+'
        ),
        score: 2,
      },
      {
        text: M(
          '연예인이 착용한 컷이나 협찬 게시물을 찾아서 같은 제품인지 확인한다',
          'I search for photos of celebrities wearing it or sponsored posts to confirm it\'s the same product',
          '芸能人が着用したカットや協賛投稿を探して同じ商品か確認する',
          '找明星穿搭图或赞助帖，确认是不是同款',
          '找明星穿搭圖或贊助貼文，確認是不是同款',
          'Tìm ảnh celeb mặc hoặc bài đăng tài trợ để xác nhận cùng sản phẩm',
          'Cari foto seleb pakai atau posting sponsor untuk pastikan produk yang sama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '구매를 결정하게 만드는 가장 강력한 한마디는?',
      'What single line is most likely to make me buy?',
      '購入を決めさせるいちばん強い一言は？',
      '最能让我决定购买的一句话是？',
      '最能讓我決定購買的一句話是？',
      'Một câu nói mạnh nhất khiến mình quyết định mua?',
      'Satu kalimat paling kuat yang bikin saya beli?'
    ),
    options: [
      {
        text: M(
          '"저 진짜 한 달 넘게 쓰고 있어요. 솔직히 이건 못 끊어요"',
          '"I\'ve really been using this for over a month. Honestly, I can\'t quit this one"',
          '「本当に1ヶ月以上使ってます。正直、これは手放せません」',
          '"我真的用了一个多月了。老实说，这个离不开"',
          '「我真的用了一個多月了。老實說，這個離不開」',
          '"Mình thật sự dùng hơn một tháng rồi. Thành thật mà nói, không bỏ được"',
          '"Aku beneran pakai lebih dari sebulan. Jujur, ini nggak bisa dilepas"'
        ),
        score: 0,
      },
      {
        text: M(
          '"나 그거 샀는데 진짜 좋더라. 너도 사봐"',
          '"I bought that and it\'s really good. You should get it too"',
          '「それ買ったんだけど本当にいいよ。あなたも買ってみて」',
          '"我买了那个，真的很好。你也买一个试试"',
          '「我買了那個，真的很好。你也買一個試試」',
          '"Mình mua cái đó rồi, thật sự ngon. Bạn cũng thử mua đi"',
          '"Aku beli itu dan beneran bagus. Kamu juga coba beli"'
        ),
        score: 1,
      },
      {
        text: M(
          '"이 상품 구매자의 98%가 재구매 의사 있음"',
          '"98% of buyers of this product say they would buy again"',
          '「この商品の購入者の98%が再購入意向あり」',
          '"该商品98%的购买者表示会回购"',
          '「該商品98%的購買者表示會回購」',
          '"98% người mua sản phẩm này có ý định mua lại"',
          '"98% pembeli produk ini punya niat beli lagi"'
        ),
        score: 2,
      },
      {
        text: M(
          '"[좋아하는 연예인 이름]이 실제로 쓰는 제품입니다"',
          '"This is a product [favorite celebrity name] actually uses"',
          '「[好きな芸能人の名前]が実際に使っている商品です」',
          '"这是[喜欢的明星名字]实际在用的产品"',
          '「這是[喜歡的明星名字]實際在用的產品」',
          '"Đây là sản phẩm [tên idol yêu thích] thực sự đang dùng"',
          '"Ini produk yang benar-benar dipakai [nama seleb favorit]"'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '새로운 카페나 식당을 선택할 때 나는?',
      'When choosing a new cafe or restaurant, I?',
      '新しいカフェやレストランを選ぶとき、自分は？',
      '选择新咖啡馆或餐厅时，我会？',
      '選擇新咖啡館或餐廳時，我會？',
      'Khi chọn quán cà phê hoặc nhà hàng mới, mình?',
      'Saat memilih kafe atau restoran baru, saya?'
    ),
    options: [
      {
        text: M(
          '유명 푸드 인플루언서나 맛집 유튜버가 다녀간 곳을 선택한다',
          'Pick places famous food influencers or restaurant YouTubers have visited',
          '有名フードインフルエンサーやグルメYouTuberが行った店を選ぶ',
          '选知名美食网红或探店博主去过的地方',
          '選知名美食網紅或探店博主去過的地方',
          'Chọn nơi food influencer hoặc YouTuber ẩm thực nổi tiếng từng đến',
          'Pilih tempat yang pernah dikunjungi food influencer atau YouTuber kuliner'
        ),
        score: 0,
      },
      {
        text: M(
          '친구가 "거기 진짜 맛있어"라고 직접 추천한 곳을 선택한다',
          'Pick a place a friend directly recommended saying "it\'s really good there"',
          '友人が「そこ本当においしい」と直接おすすめした店を選ぶ',
          '选朋友直接推荐说"那里真的好吃"的地方',
          '選朋友直接推薦說「那裡真的好吃」的地方',
          'Chọn nơi bạn trực tiếp giới thiệu "ở đó ngon thật"',
          'Pilih tempat yang teman rekomendasikan langsung bilang "di sana enak banget"'
        ),
        score: 1,
      },
      {
        text: M(
          '네이버·카카오맵 별점과 방문자 리뷰 수가 많은 곳을 선택한다',
          'Pick places with high Naver or Kakao Map ratings and lots of visitor reviews',
          'Naver・カカオマップの星評価と来店者レビュー数が多い店を選ぶ',
          '选Naver、Kakao Map评分高、访客评价多的地方',
          '選Naver、Kakao Map評分高、訪客評價多的地方',
          'Chọn nơi rating cao trên Naver, Kakao Map và nhiều review',
          'Pilih tempat dengan rating tinggi di Naver, Kakao Map dan banyak review pengunjung'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 연예인이 SNS에 올린 카페나 드라마 촬영지를 선택한다',
          'Pick a cafe a favorite celebrity posted on SNS or a drama filming location',
          '好きな芸能人がSNSに載せたカフェやドラマのロケ地を選ぶ',
          '选喜欢的明星在社交媒体发过的咖啡馆或电视剧拍摄地',
          '選喜歡的明星在社群媒體發過的咖啡館或戲劇拍攝地',
          'Chọn quán celeb yêu thích đăng trên SNS hoặc địa điểm quay phim',
          'Pilih kafe yang diposting seleb favorit di SNS atau lokasi syuting drama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '최근 3개월 내 구매한 것 중 "따라 산" 비중은?',
      'In the past 3 months, how much of what I bought was "copycat purchases"?',
      '最近3ヶ月の購入のうち「真似買い」の割合は？',
      '近3个月购买中，"跟风买"占多少？',
      '近3個月購買中，「跟風買」占多少？',
      'Trong 3 tháng qua, bao nhiêu phần mua hàng là "mua theo"?',
      'Dalam 3 bulan terakhir, berapa banyak pembelian yang "ikut-ikutan"?'
    ),
    options: [
      {
        text: M(
          '인플루언서나 유튜버 영상 보고 산 것이 절반 이상이다',
          'More than half were bought after watching influencer or YouTuber videos',
          'インフルエンサーやYouTuberの動画を見て買ったものが半分以上',
          '一半以上是看了网红或YouTube博主视频后买的',
          '一半以上是看了網紅或YouTube博主影片後買的',
          'Hơn nửa là mua sau khi xem video influencer hoặc YouTuber',
          'Lebih dari setengah dibeli setelah nonton video influencer atau YouTuber'
        ),
        score: 0,
      },
      {
        text: M(
          '친구나 지인 추천으로 산 것이 절반 이상이다',
          'More than half were bought based on friend or acquaintance recommendations',
          '友人や知人のおすすめで買ったものが半分以上',
          '一半以上是朋友或熟人推荐后买的',
          '一半以上是朋友或熟人推薦後買的',
          'Hơn nửa là mua theo giới thiệu của bạn hoặc người quen',
          'Lebih dari setengah dibeli berdasarkan rekomendasi teman atau kenalan'
        ),
        score: 1,
      },
      {
        text: M(
          '앱 추천·오늘의딜·연관 상품으로 산 것이 꽤 된다',
          'Quite a lot came from app recommendations, daily deals, or related products',
          'アプリおすすめ・今日の特価・関連商品で買ったものがかなりある',
          '不少是通过应用推荐、今日特惠或关联商品买的',
          '不少是透過應用程式推薦、今日特惠或關聯商品買的',
          'Khá nhiều mua qua gợi ý app, deal hôm nay hoặc sản phẩm liên quan',
          'Cukup banyak dari rekomendasi app, deal hari ini, atau produk terkait'
        ),
        score: 2,
      },
      {
        text: M(
          '셀럽 착용·협찬·드라마 PPL 보고 산 것이 있다',
          'Some were bought after seeing celebrity outfits, sponsorships, or drama product placements',
          'セレブ着用・協賛・ドラマPPLを見て買ったものがある',
          '有因看到明星穿搭、赞助或电视剧植入而买的',
          '有因看到明星穿搭、贊助或戲劇置入而買的',
          'Có mua sau khi thấy celeb mặc, tài trợ hoặc product placement trong phim',
          'Ada yang dibeli setelah lihat outfit seleb, sponsor, atau PPL drama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '구매 후 후회할 때의 패턴은?',
      'What pattern do I follow when I regret a purchase?',
      '購入後に後悔するときのパターンは？',
      '购买后后悔时的模式是？',
      '購買後後悔時的模式是？',
      'Mẫu hối hận sau khi mua của mình?',
      'Polanya saat menyesal setelah beli?'
    ),
    options: [
      {
        text: M(
          '"그 인플루언서 광고였던 거 같은데..." 하고 나중에 알게 된다',
          '"I think that influencer video was actually an ad..." and I find out later',
          '「あのインフルエンサー、広告だったっぽい…」と後から分かる',
          '"那个网红的好像是广告..."后来才发现',
          '「那個網紅的好像是廣告...」後來才發現',
          '"Hóa ra video influencer đó là quảng cáo..." và biết sau',
          '"Ternyata video influencer itu iklan..." baru tahu belakangan'
        ),
        score: 0,
      },
      {
        text: M(
          '"내 취향이랑 다르네. 친구랑 나는 취향이 달랐구나" 하게 된다',
          '"This isn\'t my taste. My friend and I have different preferences"',
          '「自分の好みと違う。友達と好みが違ったんだ」と感じる',
          '"跟我的喜好不一样。原来我和朋友品味不同"',
          '「跟我的喜好不一樣。原來我和朋友品味不同」',
          '"Không hợp gu mình. Hóa ra gu mình và bạn khác nhau"',
          '"Nggak sesuai selera. Ternyata selera saya dan teman beda"'
        ),
        score: 1,
      },
      {
        text: M(
          '"리뷰는 좋았는데 내 상황엔 안 맞네" 하게 된다',
          '"Reviews were good but it doesn\'t fit my situation"',
          '「レビューは良かったけど、自分の状況には合わない」と感じる',
          '"评价很好但不太适合我的情况"',
          '「評價很好但不太適合我的情況」',
          '"Review tốt nhưng không hợp hoàn cảnh của mình"',
          '"Review bagus tapi nggak cocok sama situasi saya"'
        ),
        score: 2,
      },
      {
        text: M(
          '"저 사람이 써서 예뻐 보인 거지 내가 쓰니 다르네" 하게 된다',
          '"It looked good because they used it, but on me it\'s different"',
          '「あの人が使ってたから良く見えただけで、自分が使うと違う」と感じる',
          '"他们用了才好看，我用起来不一样"',
          '「他們用了才好看，我用起來不一樣」',
          '"Họ dùng mới đẹp, mình dùng thì khác hẳn"',
          '"Mereka pakai jadi bagus, saya pakai beda banget"'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '쇼핑할 때 나를 가장 흔드는 콘텐츠 형태는?',
      'What type of content shakes me most when shopping?',
      '買い物のとき自分をいちばん揺さぶるコンテンツの形は？',
      '购物时最能动摇我的内容形式是？',
      '購物時最能動搖我的內容形式是？',
      'Dạng nội dung nào lay chuyển mình nhất khi mua sắm?',
      'Bentuk konten apa yang paling menggoyahkan saya saat belanja?'
    ),
    options: [
      {
        text: M(
          '인플루언서의 솔직한 장단점 비교 리뷰 영상',
          'An influencer\'s honest pros-and-cons comparison review video',
          'インフルエンサーの正直な長所・短所比較レビュー動画',
          '网红诚实的优缺点对比测评视频',
          '網紅誠實的優缺點對比測評影片',
          'Video review so sánh ưu nhược điểm thật lòng của influencer',
          'Video review perbandingan pro-kontra jujur dari influencer'
        ),
        score: 0,
      },
      {
        text: M(
          '친구의 "나 이거 사서 완전 만족이야" 카톡 한 줄',
          'A friend\'s one-line KakaoTalk message: "I bought this and I\'m totally satisfied"',
          '友人の「これ買って大満足」というKakaoTalkの一行',
          '朋友KakaoTalk一行："我买了这个超满意"',
          '朋友KakaoTalk一行：「我買了這個超滿意」',
          'Một dòng KakaoTalk của bạn: "Mình mua cái này siêu hài lòng"',
          'Satu baris KakaoTalk teman: "Aku beli ini dan puas banget"'
        ),
        score: 1,
      },
      {
        text: M(
          '"이 상품을 본 사람이 함께 구매한 상품" 추천 목록',
          'The "Customers who viewed this also bought" recommendation list',
          '「この商品を見た人が一緒に購入した商品」のおすすめリスト',
          '"浏览此商品的人还购买了"推荐列表',
          '「瀏覽此商品的人還購買了」推薦列表',
          'Danh sách "Người xem sản phẩm này cũng mua"',
          'Daftar rekomendasi "Orang yang lihat produk ini juga beli"'
        ),
        score: 2,
      },
      {
        text: M(
          '연예인 공항 패션·화보·예능 속 착용 아이템 기사',
          'Articles about celebrity airport fashion, photoshoots, or variety show outfits',
          '芸能人の空港ファッション・画報・バラエティ番組着用アイテムの記事',
          '明星机场穿搭、画报、综艺穿着单品的新闻',
          '明星機場穿搭、畫報、綜藝穿著單品的新聞',
          'Bài viết về thời trang sân bay, pictorial hoặc đồ celeb mặc trên variety show',
          'Artikel tentang fashion bandara seleb, photoshoot, atau outfit di variety show'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '처음 가보는 나라나 도시에서 쇼핑할 때 나는?',
      'When shopping in a country or city I\'m visiting for the first time, I?',
      '初めて行く国や都市で買い物するとき、自分は？',
      '第一次去某个国家或城市购物时，我会？',
      '第一次去某個國家或城市購物時，我會？',
      'Khi mua sắm ở quốc gia hoặc thành phố lần đầu đến, mình?',
      'Saat belanja di negara atau kota yang pertama kali dikunjungi, saya?'
    ),
    options: [
      {
        text: M(
          '그 나라 인플루언서나 여행 유튜버가 추천한 쇼핑 리스트를 미리 챙긴다',
          'Prepare a shopping list from local influencers or travel YouTubers in advance',
          'その国のインフルエンサーや旅行YouTuberがおすすめしたショッピングリストを事前に用意する',
          '提前准备好该国网红或旅行博主推荐的购物清单',
          '提前準備好該國網紅或旅行博主推薦的購物清單',
          'Chuẩn bị trước danh sách mua sắm do influencer hoặc YouTuber du lịch địa phương gợi ý',
          'Siapkan daftar belanja dari influencer lokal atau YouTuber travel sebelumnya'
        ),
        score: 0,
      },
      {
        text: M(
          '같이 간 친구나 현지 아는 사람의 추천을 따른다',
          'Follow recommendations from friends I\'m traveling with or locals I know',
          '一緒に行った友人や現地の知り合いのおすすめに従う',
          '听从同行朋友或当地熟人的推荐',
          '聽從同行朋友或當地熟人的推薦',
          'Theo giới thiệu của bạn đi cùng hoặc người quen địa phương',
          'Ikuti rekomendasi teman yang ikut traveling atau kenalan lokal'
        ),
        score: 1,
      },
      {
        text: M(
          '구글·트립어드바이저 평점 높은 쇼핑 스팟을 찾는다',
          'Look for highly rated shopping spots on Google or TripAdvisor',
          'Google・TripAdvisorで評価の高いショッピングスポットを探す',
          '在Google、TripAdvisor上找高评分购物点',
          '在Google、TripAdvisor上找高評分購物點',
          'Tìm điểm mua sắm rating cao trên Google hoặc TripAdvisor',
          'Cari spot belanja rating tinggi di Google atau TripAdvisor'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 연예인이 여행 중 샀다고 언급한 아이템을 찾아본다',
          'Search for items my favorite celebrity mentioned buying while traveling',
          '好きな芸能人が旅行中に買ったと言及したアイテムを探す',
          '找喜欢的明星旅行时提到买过的单品',
          '找喜歡的明星旅行時提到買過的單品',
          'Tìm món đồ celeb yêu thích từng nhắc mua khi đi du lịch',
          'Cari barang yang disebut seleb favorit beli saat traveling'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '뷰티·스킨케어 제품을 고를 때 가장 믿는 정보는?',
      'What information do I trust most when choosing beauty or skincare products?',
      '美容・スキンケア商品を選ぶとき、いちばん信頼する情報は？',
      '选择美妆护肤产品时最信任的信息是？',
      '選擇美妝護膚產品時最信任的資訊是？',
      'Thông tin nào mình tin nhất khi chọn mỹ phẩm hoặc skincare?',
      'Informasi apa yang paling dipercaya saat memilih produk kecantikan atau skincare?'
    ),
    options: [
      {
        text: M(
          '피부 타입이 나와 비슷한 뷰티 유튜버의 6개월 장기 사용 후기',
          'A beauty YouTuber with a similar skin type sharing 6-month long-term use reviews',
          '肌タイプが自分と似ている美容YouTuberの6ヶ月長期使用レビュー',
          '肤质和我相似的美妆博主6个月长期使用测评',
          '膚質和我相似的美妝博主6個月長期使用測評',
          'Review dùng dài hạn 6 tháng của beauty YouTuber có loại da tương tự',
          'Review pemakaian jangka panjang 6 bulan dari beauty YouTuber dengan tipe kulit serupa'
        ),
        score: 0,
      },
      {
        text: M(
          '피부 고민이 비슷한 친구가 써보고 직접 권해준 제품',
          'Products a friend with similar skin concerns tried and personally recommended',
          '肌の悩みが似ている友人が試して直接勧めてくれた商品',
          '皮肤困扰相似的朋友试用后直接推荐的产品',
          '皮膚困擾相似的朋友試用後直接推薦的產品',
          'Sản phẩm bạn có vấn đề da tương tự dùng thử và trực tiếp giới thiệu',
          'Produk yang dicoba dan direkomendasikan langsung teman dengan masalah kulit serupa'
        ),
        score: 1,
      },
      {
        text: M(
          '올리브영·무신사 베스트셀러 순위와 실구매자 별점 리뷰',
          'Olive Young and Musinsa bestseller rankings and verified buyer star reviews',
          'Olive Young・Musinsaのベストセラー順位と実購入者の星評価レビュー',
          'Olive Young、Musinsa畅销榜和真实买家星级评价',
          'Olive Young、Musinsa暢銷榜和真實買家星級評價',
          'Bảng xếp hạng bestseller Olive Young, Musinsa và review sao từ người mua thật',
          'Ranking bestseller Olive Young, Musinsa dan review bintang pembeli asli'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 배우나 아이돌의 피부 관리 비결로 알려진 제품',
          'Products known as the skincare secrets of my favorite actor or idol',
          '好きな俳優やアイドルのスキンケアの秘訣として知られる商品',
          '以喜欢的演员或偶像护肤秘诀而闻名的产品',
          '以喜歡的演員或偶像護膚秘訣而聞名的產品',
          'Sản phẩm được biết đến là bí quyết skincare của diễn viên hoặc idol yêu thích',
          'Produk yang dikenal sebagai rahasia perawatan kulit aktor atau idol favorit'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '같은 제품인데 가격이 30% 비싼 버전이 있다. 셀럽 에디션이라는 이유라면?',
      'There\'s a version that costs 30% more for the same product—a celebrity edition. Would I?',
      '同じ商品なのに30%高いバージョンがある。セレブエディションという理由なら？',
      '同款产品有个贵30%的版本，因为是明星联名版。我会？',
      '同款產品有個貴30%的版本，因為是明星聯名版。我會？',
      'Cùng sản phẩm nhưng bản đắt hơn 30% vì là phiên bản celeb. Mình sẽ?',
      'Produk sama tapi versi 30% lebih mahal karena edisi seleb. Saya?'
    ),
    options: [
      {
        text: M(
          '인플루언서가 "이 에디션이 훨씬 퀄리티 좋아요"라고 하면 살 수도 있다',
          'Might buy if an influencer says "this edition has much better quality"',
          'インフルエンサーが「このエディションの方がずっとクオリティがいい」と言えば買うかもしれない',
          '如果网红说"这个联名版质量好很多"可能会买',
          '如果網紅說「這個聯名版品質好很多」可能會買',
          'Có thể mua nếu influencer nói "bản này chất lượng tốt hơn nhiều"',
          'Mungkin beli kalau influencer bilang "edisi ini kualitasnya jauh lebih bagus"'
        ),
        score: 0,
      },
      {
        text: M(
          '친구 중 누군가가 사서 "진짜 차이 있어"라고 하면 살 수도 있다',
          'Might buy if a friend got it and says "there\'s really a difference"',
          '友人の誰かが買って「本当に違いがある」と言えば買うかもしれない',
          '如果朋友买了说"真的有差别"可能会买',
          '如果朋友買了說「真的有差別」可能會買',
          'Có thể mua nếu bạn mua và nói "thật sự khác biệt"',
          'Mungkin beli kalau teman beli dan bilang "bedanya beneran kerasa"'
        ),
        score: 1,
      },
      {
        text: M(
          '실구매자 리뷰에서 "일반 버전과 차이 없음"이 많으면 일반으로 산다',
          'Buy the regular version if many verified reviews say "no difference from the standard version"',
          '実購入者レビューで「通常版と違いなし」が多ければ通常版を買う',
          '如果真实买家评价里很多说"和普通版没区别"就买普通版',
          '如果真實買家評價裡很多說「和普通版沒差別」就買普通版',
          'Mua bản thường nếu nhiều review người mua thật nói "không khác bản thường"',
          'Beli versi biasa kalau banyak review pembeli asli bilang "nggak beda dari versi standar"'
        ),
        score: 2,
      },
      {
        text: M(
          '좋아하는 셀럽 에디션이라면 30% 더 내고 살 의향이 있다',
          'Willing to pay 30% more if it\'s an edition from my favorite celebrity',
          '好きなセレブのエディションなら30%多く払って買う意向がある',
          '如果是喜欢的明星联名版，愿意多付30%',
          '如果是喜歡的明星聯名版，願意多付30%',
          'Sẵn sàng trả thêm 30% nếu là phiên bản celeb yêu thích',
          'Bersedia bayar 30% lebih kalau edisi seleb favorit'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '나의 디토소비를 한 문장으로 표현한다면?',
      'If I had to describe my ditto consumption in one sentence?',
      '自分のディト消費を一文で表すなら？',
      '用一句话形容我的跟风消费？',
      '用一句話形容我的跟風消費？',
      'Mô tả kiểu tiêu dùng theo người khác của mình bằng một câu?',
      'Kalau deskripsikan konsumsi ikut-ikutan saya dalam satu kalimat?'
    ),
    options: [
      {
        text: M(
          '"내가 신뢰하는 인플루언서가 좋다면 나도 좋을 것이다"',
          '"If an influencer I trust likes it, it\'ll probably work for me too"',
          '「信頼しているインフルエンサーが良いなら、自分にも良いはず」',
          '"我信任的网红说好，我应该也会好"',
          '「我信任的網紅說好，我應該也會好」',
          '"Influencer mình tin khen thì mình cũng sẽ ổn"',
          '"Kalau influencer yang saya percaya suka, saya juga pasti cocok"'
        ),
        score: 0,
      },
      {
        text: M(
          '"나를 아는 친구가 추천한 것이 나에게 가장 잘 맞는다"',
          '"What a friend who knows me recommends fits me best"',
          '「自分を知っている友人のおすすめが自分にいちばん合う」',
          '"了解我的朋友推荐的最适合我"',
          '「了解我的朋友推薦的最適合我」',
          '"Bạn hiểu mình giới thiệu thì hợp nhất"',
          '"Rekomendasi teman yang paham saya paling pas"'
        ),
        score: 1,
      },
      {
        text: M(
          '"다수가 선택한 것에는 이유가 있다. 데이터를 믿는다"',
          '"There\'s a reason many people choose it. I trust the data"',
          '「多数が選んだものには理由がある。データを信じる」',
          '"多数人选择的东西一定有道理。我相信数据"',
          '「多數人選擇的東西一定有道理。我相信數據」',
          '"Đa số chọn thì có lý do. Mình tin vào dữ liệu"',
          '"Kalau banyak orang pilih, pasti ada alasannya. Saya percaya data"'
        ),
        score: 2,
      },
      {
        text: M(
          '"내가 좋아하는 사람이 선택한 것이라면 특별하게 느껴진다"',
          '"If someone I admire chose it, it feels special"',
          '「好きな人が選んだものなら、特別に感じる」',
          '"如果是我喜欢的人选的，感觉特别"',
          '「如果是我喜歡的人選的，感覺特別」',
          '"Nếu người mình thích chọn thì cảm thấy đặc biệt"',
          '"Kalau orang yang saya suka pilih, rasanya spesial"'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3DittoConsumptionTypeResults: Phase3DittoConsumptionTypeResult[] = [
  {
    type: 'Type1',
    emoji: '📱',
    title: M(
      '인플루언서의 말이 곧 구매 신호, 인플루언서 추종형',
      'An influencer\'s word is your buy signal — Influencer Follower Type',
      'インフルエンサーの言葉がそのまま購入シグナル、インフルエンサー追従型',
      '网红一句话就是购买信号，网红追随型',
      '網紅一句話就是購買信號，網紅追隨型',
      'Lời influencer là tín hiệu mua hàng — Kiểu theo influencer',
      'Kata influencer langsung jadi sinyal beli — Tipe Pengikut Influencer'
    ),
    shortDescription: M(
      '"당신의 소비는 구독 중인 인플루언서가 상당 부분 결정하고 있습니다."',
      '"A big part of your spending is shaped by the influencers you follow."',
      '「あなたの消費は、登録中のインフルエンサーがかなり決めています。」',
      '"你的消费很大程度上由你关注的网红决定。"',
      '"你的消費很大程度上由你關注的網紅決定。"',
      '"Phần lớn chi tiêu của bạn do influencer đang theo dõi quyết định."',
      '"Sebagian besar belanja kamu ditentukan influencer yang kamu follow."'
    ),
    description: M(
      '믿을 수 있는 인플루언서의 리뷰는 어떤 광고보다 설득력 있게 느껴집니다. 솔직한 언박싱 영상, 장단점 비교, 한 달 후기까지 챙겨보고 구매 결정을 내립니다. 좋아하는 인플루언서의 취향을 신뢰하고 그 선택을 따라가는 것이 자연스럽습니다. 국내 디토소비 중 가장 큰 비중을 차지하는 유형입니다.',
      'Reviews from influencers you trust feel more convincing than any ad. You watch honest unboxings, pros-and-cons comparisons, and one-month follow-ups before buying. Trusting your favorite influencer\'s taste and following their picks feels natural. This is the largest ditto consumption type in Korea.',
      '信頼できるインフルエンサーのレビューは、どんな広告より説得力があります。正直な開封動画、長所・短所比較、1ヶ月後のレビューまで見て購入を決めます。好きなインフルエンサーのセンスを信じ、その選択に従うのが自然です。国内のディト消費の中で最も大きな割合を占めるタイプです。',
      '你信任的网红测评比任何广告都有说服力。你会看真实开箱、优缺点对比、一个月后续评再决定购买。相信喜欢的网红品味、跟着他们的选择走很自然。这是韩国跟风消费中占比最大的类型。',
      '你信任的網紅測評比任何廣告都有說服力。你會看真實開箱、優缺點對比、一個月後續評再決定購買。相信喜歡的網紅品味、跟著他們的選擇走很自然。這是韓國跟風消費中占比最大的類型。',
      'Review từ influencer bạn tin thuyết phục hơn mọi quảng cáo. Bạn xem unboxing thật, so sánh ưu nhược, review sau một tháng rồi mới mua. Tin gu influencer yêu thích và theo lựa chọn của họ là tự nhiên. Đây là kiểu tiêu dùng theo người khác phổ biến nhất ở Hàn Quốc.',
      'Review influencer yang kamu percaya terasa lebih meyakinkan dari iklan apa pun. Kamu nonton unboxing jujur, perbandingan pro-kontra, dan follow-up sebulan sebelum beli. Percaya selera influencer favorit dan mengikuti pilihannya terasa wajar. Ini tipe konsumsi ikut-ikutan terbesar di Korea.'
    ),
    dittoType: M(
      '인플루언서 추종형 📱',
      'Influencer Follower Type 📱',
      'インフルエンサー追従型 📱',
      '网红追随型 📱',
      '網紅追隨型 📱',
      'Kiểu theo influencer 📱',
      'Tipe Pengikut Influencer 📱'
    ),
    mainChannel: M(
      '유튜브 리뷰·인스타 릴스·블로그 체험 후기',
      'YouTube reviews, Instagram Reels, and blog trial posts',
      'YouTubeレビュー・インスタリール・ブログ体験レビュー',
      'YouTube测评、Instagram Reels、博客体验文',
      'YouTube測評、Instagram Reels、部落格體驗文',
      'Review YouTube, Instagram Reels, bài trải nghiệm blog',
      'Review YouTube, Instagram Reels, posting uji coba blog'
    ),
    triggerCondition: M(
      '신뢰하는 인플루언서의 "이건 진짜야" 한마디',
      'A trusted influencer saying "this one is the real deal"',
      '信頼するインフルエンサーの「これは本物」という一言',
      '信任的网红说"这个真的好"',
      '信任的網紅說「這個真的好」',
      'Influencer tin cậy nói "cái này thật sự ngon"',
      'Influencer tepercaya bilang "ini beneran bagus"'
    ),
    strength: M(
      '실제 사용 후기를 충분히 확인하고 구매해서 실패율이 비교적 낮음',
      'You check real user reviews thoroughly before buying, so your failure rate is relatively low',
      '実際の使用レビューを十分確認してから購入するので、失敗率が比較的低い',
      '充分确认真实使用评价后再买，失败率相对较低',
      '充分確認真實使用評價後再買，失敗率相對較低',
      'Xem đủ review thực tế trước khi mua nên tỷ lệ thất bại tương đối thấp',
      'Cek review penggunaan nyata cukup dulu sebelum beli, jadi tingkat gagal relatif rendah'
    ),
    trap: M(
      '광고·협찬 제품인데 솔직한 리뷰처럼 포장된 경우를 구별하기 어려움',
      'Hard to tell when sponsored or gifted products are dressed up as honest reviews',
      '広告・協賛商品なのに正直なレビューのように見せかけたものを見分けにくい',
      '难以分辨广告/赞助产品被包装成真实测评的情况',
      '難以分辨廣告/贊助產品被包裝成真實測評的情況',
      'Khó phân biệt sản phẩm quảng cáo/tài trợ được đóng gói như review thật',
      'Sulit bedakan produk iklan/sponsor yang dibungkus seperti review jujur'
    ),
    blackHistory: M(
      '"나중에 알고 보니 그 영상 광고였음" / "인플루언서 피부랑 내 피부가 달랐음"',
      '"Found out later that video was an ad" / "The influencer\'s skin and mine are totally different"',
      '「後から分かったけどあの動画は広告だった」/「インフルエンサーの肌と自分の肌が違った」',
      '"后来才发现那个视频是广告" / "网红的肤质和我的不一样"',
      '「後來才發現那個影片是廣告」/「網紅的膚質和我的不一樣」',
      '"Sau mới biết video đó là quảng cáo" / "Da influencer khác hẳn da mình"',
      '"Baru tahu belakangan videonya iklan" / "Kulit influencer beda jauh sama kulit saya"'
    ),
    smartStrategy: M(
      '• 영상 하단 \'#광고\' \'#협찬\' 표시 먼저 확인하기\n• 구독자 10만 이하 소규모 인플루언서 리뷰가 더 솔직한 경우가 많음\n• 같은 제품을 여러 인플루언서가 리뷰했는지 교차 확인하기\n• "이 인플루언서가 안 좋다고 한 것"도 함께 찾아보기',
      '• Check for #ad or #sponsored tags at the bottom of videos first\n• Micro-influencers under 100K followers often give more honest reviews\n• Cross-check whether multiple influencers reviewed the same product\n• Also look for products this influencer said were NOT good',
      '• 動画下部の「#広告」「#協賛」表示を先に確認する\n• 登録者10万人以下のマイクロインフルエンサーのレビューの方が正直なことが多い\n• 同じ商品を複数のインフルエンサーがレビューしたか交差確認する\n• 「このインフルエンサーが良くないと言ったもの」も一緒に探す',
      '• 先看视频底部的#广告 #赞助标签\n• 10万粉丝以下的小网红测评往往更真实\n• 交叉确认是否有多个网红测评同一产品\n• 也找找这个网红说"不好"的产品',
      '• 先看影片底部的#廣告 #贊助標籤\n• 10萬粉絲以下的小網紅測評往往更真實\n• 交叉確認是否有多個網紅測評同一產品\n• 也找找這個網紅說「不好」的產品',
      '• Kiểm tra nhãn #quảngcáo #tài trợ ở cuối video trước\n• Review của micro-influencer dưới 100K follower thường thật hơn\n• Đối chiếu xem nhiều influencer có review cùng sản phẩm không\n• Tìm cả sản phẩm influencer này từng nói "không tốt"',
      '• Cek tag #iklan atau #sponsor di bagian bawah video dulu\n• Review micro-influencer di bawah 100K follower sering lebih jujur\n• Cross-check apakah beberapa influencer review produk yang sama\n• Cari juga produk yang influencer ini bilang "nggak bagus"'
    ),
    brandApproach: M(
      '마이크로 인플루언서 협찬·뒷광고·진짜 사용자처럼 보이는 콘텐츠',
      'Micro-influencer sponsorships, hidden ads, and content that looks like real user experience',
      'マイクロインフルエンサー協賛・ステマ・本当のユーザーに見えるコンテンツ',
      '微型网红赞助、暗广、看起来像真实用户的内容',
      '微型網紅贊助、暗廣、看起來像真實用戶的內容',
      'Tài trợ micro-influencer, quảng cáo ngầm, nội dung trông như người dùng thật',
      'Sponsor micro-influencer, iklan tersembunyi, konten yang terlihat seperti pengguna asli'
    ),
    todayTask: M(
      '가장 최근에 인플루언서 보고 산 것 하나 떠올리기. 그 영상이 광고였는지 확인해보기',
      'Think of the most recent thing you bought after an influencer. Check whether that video was an ad',
      '最近インフルエンサーを見て買ったものを一つ思い出す。その動画が広告だったか確認する',
      '回想最近因网红而买的一件东西。确认那个视频是不是广告',
      '回想最近因網紅而買的一件東西。確認那個影片是不是廣告',
      'Nhớ món gần nhất mua vì influencer. Kiểm tra xem video đó có phải quảng cáo không',
      'Ingat barang terakhir yang dibeli karena influencer. Cek apakah videonya iklan'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 인플루언서 추종형 📱 구독자인데 광고였다는 거 나중에 안 경험... 있는 사람? → 너는 어떤 디토소비 유형이야?',
      'My ditto consumption type is Influencer Follower 📱 Anyone else subscribed... then found out it was an ad? → What\'s your ditto type?',
      '私のディト消費タイプはインフルエンサー追従型 📱 登録してたのに後から広告だったって分かった経験... ある人？ → あなたはどのディト消費タイプ？',
      '我的跟风消费类型是网红追随型 📱 关注了才发现是广告... 有人吗？ → 你是什么跟风消费类型？',
      '我的跟風消費類型是網紅追隨型 📱 訂閱了才發現是廣告... 有人嗎？ → 你是什麼跟風消費類型？',
      'Kiểu tiêu dùng theo người khác của mình: theo influencer 📱 Follow rồi mới biết là quảng cáo... ai giống không? → Bạn thuộc kiểu nào?',
      'Tipe konsumsi ikut-ikutanku: Pengikut Influencer 📱 Follow tapi ternyata iklan... ada yang sama? → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🤝',
    title: M(
      '친구 말이라면 바로 장바구니, 신뢰 기반 지인 추천형',
      'One word from a friend and it\'s in the cart — Trusted Friend Recommendation Type',
      '友人の一言ならすぐカート、信頼ベースの知人おすすめ型',
      '朋友一句话就进购物车，信任型熟人推荐型',
      '朋友一句話就進購物車，信任型熟人推薦型',
      'Bạn nói một câu là vào giỏ — Kiểu giới thiệu từ người quen tin cậy',
      'Satu kata dari teman langsung masuk keranjang — Tipe Rekomendasi Teman Terpercaya'
    ),
    shortDescription: M(
      '"당신의 소비는 친한 친구 한마디에 가장 크게 움직입니다."',
      '"Your spending moves most when a close friend says just one thing."',
      '「あなたの消費は、親しい友人の一言にいちばん大きく動きます。」',
      '"你的消费最容易被亲密朋友的一句话打动。"',
      '"你的消費最容易被親密朋友的一句話打動。"',
      '"Chi tiêu của bạn dễ bị lay chuyển nhất bởi một câu của bạn thân."',
      '"Belanjamu paling gampang digerakkan satu kalimat dari teman dekat."'
    ),
    description: M(
      '어떤 광고보다 "나 이거 써봤는데 진짜 좋아"라는 친구 카톡 한 줄이 더 설득력 있습니다. 내 취향과 상황을 아는 사람의 추천이기 때문에 실패 확률이 낮다고 느끼고, 직접 물어볼 수도 있어서 신뢰도가 높습니다. 입소문 마케팅의 핵심 타깃이 바로 이 유형입니다.',
      'A one-line KakaoTalk from a friend saying "I tried this and it\'s really good" is more convincing than any ad. Because they know your taste and situation, you feel the failure rate is lower and you can ask follow-up questions, so trust runs high. This type is the core target of word-of-mouth marketing.',
      'どんな広告より「これ使ったんだけど本当にいいよ」という友人のKakaoTalk一行の方が説得力があります。自分の好みと状況を知っている人のおすすめなので失敗確率が低いと感じ、直接聞けるので信頼度が高いです。口コミマーケティングの核心ターゲットがまさにこのタイプです。',
      '比任何广告都更有说服力的是朋友KakaoTalk一行："我用过这个，真的很好。"因为了解你的喜好和情况，你觉得失败概率低，还能直接追问，信任度很高。口碑营销的核心目标就是这一型。',
      '比任何廣告都更有說服力的是朋友KakaoTalk一行：「我用過這個，真的很好。」因為了解你的喜好和情況，你覺得失敗機率低，還能直接追問，信任度很高。口碑行銷的核心目標就是這一型。',
      'Một dòng KakaoTalk "Mình dùng thử cái này, thật sự ngon" thuyết phục hơn mọi quảng cáo. Vì họ hiểu gu và hoàn cảnh của bạn, bạn cảm thấy ít thất bại hơn và có thể hỏi thêm, nên độ tin cao. Đây là nhóm mục tiêu cốt lõi của marketing truyền miệng.',
      'Satu baris KakaoTalk teman bilang "Aku coba ini dan beneran bagus" lebih meyakinkan dari iklan apa pun. Karena mereka paham selera dan situasimu, kamu merasa lebih aman dan bisa tanya langsung, jadi kepercayaannya tinggi. Tipe ini target inti word-of-mouth marketing.'
    ),
    dittoType: M(
      '신뢰 기반 지인 추천형 🤝',
      'Trusted Friend Recommendation Type 🤝',
      '信頼ベースの知人おすすめ型 🤝',
      '信任型熟人推荐型 🤝',
      '信任型熟人推薦型 🤝',
      'Kiểu giới thiệu từ người quen tin cậy 🤝',
      'Tipe Rekomendasi Teman Terpercaya 🤝'
    ),
    mainChannel: M(
      '카카오톡·인스타 DM·지인 직접 추천',
      'KakaoTalk, Instagram DM, and direct recommendations from acquaintances',
      'KakaoTalk・インスタDM・知人の直接おすすめ',
      'KakaoTalk、Instagram私信、熟人直接推荐',
      'KakaoTalk、Instagram私訊、熟人直接推薦',
      'KakaoTalk, DM Instagram, giới thiệu trực tiếp từ người quen',
      'KakaoTalk, DM Instagram, rekomendasi langsung dari kenalan'
    ),
    triggerCondition: M(
      '친한 친구의 "이거 진짜 좋아. 사봐"',
      'A close friend saying "This is really good. You should get it"',
      '親しい友人の「これ本当にいいよ。買ってみて」',
      '亲密朋友说"这个真的很好，买一个试试"',
      '親密朋友說「這個真的很好，買一個試試」',
      'Bạn thân nói "Cái này thật sự ngon. Mua thử đi"',
      'Teman dekat bilang "Ini beneran bagus. Coba beli"'
    ),
    strength: M(
      '나를 아는 사람의 추천이라 취향 적합도가 높은 편',
      'Recommendations from people who know you tend to fit your taste better',
      '自分を知っている人のおすすめなので好みの適合度が高い傾向',
      '了解你的人推荐，通常更符合你的喜好',
      '了解你的人推薦，通常更符合你的喜好',
      'Giới thiệu từ người hiểu bạn thường hợp gu hơn',
      'Rekomendasi dari orang yang paham kamu biasanya lebih cocok'
    ),
    trap: M(
      '친구 취향과 내 취향이 다를 수 있음. 거절하기 미안해서 사는 경우도 있음',
      'Your friend\'s taste may differ from yours. Sometimes you buy because you feel bad saying no',
      '友人の好みと自分の好みが違うことがある。断りにくくて買ってしまう場合も',
      '朋友的品味可能和你不同。有时因为不好意思拒绝而买',
      '朋友的品味可能和你不同。有時因為不好意思拒絕而買',
      'Gu bạn có thể khác gu bạn. Đôi khi mua vì ngại từ chối',
      'Selera teman bisa beda. Kadang beli karena malu menolak'
    ),
    blackHistory: M(
      '"친구는 좋다는데 내 피부엔 안 맞았음" / "거절하기 미안해서 샀는데 안 씀"',
      '"Friend said it was good but it didn\'t suit my skin" / "Bought because I felt bad refusing and never used it"',
      '「友人は良いと言ったけど自分の肌には合わなかった」/「断りにくくて買ったけど使わなかった」',
      '"朋友说好但不太适合我的皮肤" / "不好意思拒绝买了却没用"',
      '「朋友說好但不太適合我的皮膚」/「不好意思拒絕買了卻沒用」',
      '"Bạn khen nhưng không hợp da mình" / "Mua vì ngại từ chối rồi không dùng"',
      '"Teman bilang bagus tapi nggak cocok di kulitku" / "Beli karena malu nolak, nggak pernah dipakai"'
    ),
    smartStrategy: M(
      '• 추천받은 후 "내가 왜 이게 필요한지" 스스로에게 물어보기\n• 친구와 나의 취향·피부·체형 차이 먼저 고려하기\n• 추천 고마움과 구매 결정을 분리하기. 고마워도 안 사도 됨\n• 친구 추천 + 실구매자 리뷰 병행 확인으로 교차검증하기',
      '• After a recommendation, ask yourself "Why do I actually need this?"\n• Consider taste, skin type, and body differences between you and your friend first\n• Separate gratitude from the purchase decision. You can say thanks without buying\n• Cross-check friend recommendations with verified buyer reviews',
      '• おすすめをもらった後「なぜこれが必要なのか」と自分に問う\n• 友人と自分の好み・肌・体型の違いを先に考える\n• おすすめへの感謝と購入判断を分ける。感謝しても買わなくていい\n• 友人のおすすめ＋実購入者レビューで交差検証する',
      '• 收到推荐后问自己"我为什么需要这个？"\n• 先考虑你和朋友在品味、肤质、体型上的差异\n• 把感谢和购买决定分开。感谢也可以不买\n• 用朋友推荐+真实买家评价交叉验证',
      '• 收到推薦後問自己「我為什麼需要這個？」\n• 先考慮你和朋友在品味、膚質、體型上的差異\n• 把感謝和購買決定分開。感謝也可以不買\n• 用朋友推薦+真實買家評價交叉驗證',
      '• Sau khi được giới thiệu, hỏi bản thân "Tại sao mình cần cái này?"\n• Cân nhắc khác biệt gu, da, dáng giữa bạn và bạn trước\n• Tách lời cảm ơn khỏi quyết định mua. Cảm ơn vẫn có thể không mua\n• Đối chiếu giới thiệu bạn + review người mua thật',
      '• Setelah direkomendasikan, tanya diri "Kenapa aku butuh ini?"\n• Pertimbangkan beda selera, kulit, dan tubuh antara kamu dan teman dulu\n• Pisahkan rasa terima kasih dari keputusan beli. Bisa berterima kasih tanpa beli\n• Cross-check rekomendasi teman dengan review pembeli asli'
    ),
    brandApproach: M(
      '친구 추천 리워드·지인 공유 할인·입소문 캠페인',
      'Friend referral rewards, acquaintance share discounts, and word-of-mouth campaigns',
      '友人紹介リワード・知人シェア割引・口コミキャンペーン',
      '朋友推荐奖励、熟人分享折扣、口碑营销',
      '朋友推薦獎勵、熟人分享折扣、口碑行銷',
      'Thưởng giới thiệu bạn bè, giảm giá chia sẻ người quen, chiến dịch truyền miệng',
      'Reward referral teman, diskon share kenalan, kampanye word-of-mouth'
    ),
    todayTask: M(
      '지인 추천으로 산 물건 중 실제로 잘 쓰는 것과 아닌 것 비율 세어보기',
      'Count how many things you bought on a friend\'s recommendation you actually use vs. don\'t',
      '知人のおすすめで買ったもののうち、実際によく使っているものとそうでないものの割合を数える',
      '数一数熟人推荐买的东西里，真正在用的和没用的比例',
      '數一數熟人推薦買的東西裡，真正在用的和沒用的比例',
      'Đếm tỷ lệ đồ mua theo giới thiệu người quen mà thực sự dùng vs không dùng',
      'Hitung berapa barang dari rekomendasi kenalan yang benar-benar dipakai vs tidak'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 지인 추천형 🤝 친구 카톡 한 줄에 장바구니 가는 거 맞음 ㅋㅋ → 너는 어떤 디토소비 유형이야?',
      'My ditto type is Friend Recommendation 🤝 One KakaoTalk line and it\'s in the cart lol → What\'s your ditto type?',
      '私のディト消費タイプは知人おすすめ型 🤝 友人のカトゥーク一行でカートに入るの、当たり前 ㅋㅋ → あなたはどのタイプ？',
      '我的跟风消费类型是熟人推荐型 🤝 朋友KakaoTalk一行就进购物车 哈哈 → 你是什么类型？',
      '我的跟風消費類型是熟人推薦型 🤝 朋友KakaoTalk一行就進購物車 哈哈 → 你是什麼類型？',
      'Kiểu tiêu dùng theo người khác của mình: giới thiệu người quen 🤝 Một dòng KakaoTalk là vào giỏ ㅋㅋ → Bạn thuộc kiểu nào?',
      'Tipe ikut-ikutanku: Rekomendasi Teman 🤝 Satu baris KakaoTalk langsung masuk keranjang wkwk → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '📊',
    title: M(
      '데이터가 선택해주는, 알고리즘 의존형',
      'Data picks for you — Algorithm-Dependent Type',
      'データが選んでくれる、アルゴリズム依存型',
      '数据帮你选，算法依赖型',
      '數據幫你選，演算法依賴型',
      'Dữ liệu chọn hộ — Kiểu phụ thuộc thuật toán',
      'Data yang memilih — Tipe Bergantung Algoritma'
    ),
    shortDescription: M(
      '"당신의 소비는 앱이 보여주는 추천 목록이 상당 부분 결정하고 있습니다."',
      '"A big part of your spending is shaped by the recommendation lists your apps show you."',
      '「あなたの消費は、アプリが見せるおすすめリストがかなり決めています。」',
      '"你的消费很大程度上由应用推荐列表决定。"',
      '"你的消費很大程度上由應用程式推薦列表決定。"',
      '"Phần lớn chi tiêu của bạn do danh sách gợi ý trên app quyết định."',
      '"Sebagian besar belanjamu ditentukan daftar rekomendasi dari aplikasi."'
    ),
    description: M(
      '별점 4.5 이상, 리뷰 500개 이상, 재구매율 높음. 이런 데이터가 쌓인 제품에 신뢰가 갑니다. 오늘의딜·연관 상품·함께 많이 산 상품 목록을 자연스럽게 따라가는 타입입니다. 많은 사람이 선택했다는 사실 자체가 구매 근거가 됩니다. 쇼핑 플랫폼이 가장 공을 들이는 타깃 유형입니다.',
      '4.5+ stars, 500+ reviews, high repurchase rate — you trust products backed by that kind of data. You naturally follow daily deals, related items, and "frequently bought together" lists. The fact that many people chose it is reason enough to buy. Shopping platforms invest most heavily in targeting this type.',
      '星4.5以上、レビュー500件以上、再購入率が高い。こうしたデータが積み重なった商品に信頼が行きます。今日の特価・関連商品・よく一緒に買われる商品リストに自然に従うタイプです。多くの人が選んだという事実自体が購入理由になります。ショッピングプラットフォームが最も注力するターゲットタイプです。',
      '4.5星以上、500条以上评价、高复购率——你信任有这类数据支撑的产品。会自然跟着今日特惠、关联商品、"经常一起买"列表走。很多人选过本身就是购买理由。购物平台最重点投放的目标类型。',
      '4.5星以上、500則以上評價、高回購率——你信任有這類數據支撐的產品。會自然跟著今日特惠、關聯商品、「經常一起買」列表走。很多人選過本身就是購買理由。購物平台最重點投放的目標類型。',
      '4.5 sao trở lên, 500+ review, tỷ lệ mua lại cao — bạn tin sản phẩm có dữ liệu như vậy. Tự nhiên theo deal hôm nay, sản phẩm liên quan, danh sách "thường mua cùng nhau". Việc nhiều người chọn đã là lý do mua. Nền tảng mua sắm nhắm mục tiêu kiểu này nhất.',
      'Rating 4.5+, review 500+, repurchase rate tinggi — kamu percaya produk dengan data seperti itu. Natural mengikuti deal hari ini, produk terkait, dan daftar "sering dibeli bersama". Fakta banyak orang memilihnya sudah cukup jadi alasan beli. Platform belanja paling fokus menarget tipe ini.'
    ),
    dittoType: M(
      '알고리즘 의존형 📊',
      'Algorithm-Dependent Type 📊',
      'アルゴリズム依存型 📊',
      '算法依赖型 📊',
      '演算法依賴型 📊',
      'Kiểu phụ thuộc thuật toán 📊',
      'Tipe Bergantung Algoritma 📊'
    ),
    mainChannel: M(
      '쿠팡·네이버쇼핑·올리브영 베스트·앱 추천 피드',
      'Coupang, Naver Shopping, Olive Young bestsellers, and app recommendation feeds',
      'Coupang・Naverショッピング・Olive Youngベスト・アプリおすすめフィード',
      'Coupang、Naver购物、Olive Young畅销榜、应用推荐信息流',
      'Coupang、Naver購物、Olive Young暢銷榜、應用程式推薦動態牆',
      'Coupang, Naver Shopping, bestseller Olive Young, feed gợi ý app',
      'Coupang, Naver Shopping, bestseller Olive Young, feed rekomendasi app'
    ),
    triggerCondition: M(
      '별점 높고 리뷰 많은 제품이 할인 중일 때',
      'When a highly rated product with lots of reviews goes on sale',
      '星評価が高くレビューが多い商品が割引中のとき',
      '高评分、评价多的产品在打折时',
      '高評分、評價多的產品在打折時',
      'Khi sản phẩm rating cao, nhiều review đang giảm giá',
      'Saat produk rating tinggi dengan banyak review sedang diskon'
    ),
    strength: M(
      '다수의 검증을 거친 제품을 선택하는 경향. 크게 실패하지 않는 편',
      'Tend to pick products validated by many people. Usually don\'t fail badly',
      '多数の検証を経た商品を選ぶ傾向。大きく失敗しない',
      '倾向选择经过多人验证的产品，一般不会大翻车',
      '傾向選擇經過多人驗證的產品，一般不會大翻車',
      'Thường chọn sản phẩm được nhiều người kiểm chứng. Ít thất bại nặng',
      'Cenderung pilih produk yang sudah divalidasi banyak orang. Jarang gagal parah'
    ),
    trap: M(
      '알고리즘은 내 취향이 아닌 클릭 패턴 기반. 조작된 리뷰에 취약함',
      'Algorithms follow click patterns, not your taste. Vulnerable to manipulated reviews',
      'アルゴリズムは好みではなくクリックパターン基準。操作されたレビューに弱い',
      '算法基于点击模式而非你的喜好，容易被刷评影响',
      '演算法基於點擊模式而非你的喜好，容易被刷評影響',
      'Thuật toán dựa trên click, không phải gu. Dễ bị review giả lừa',
      'Algoritma berdasarkan pola klik, bukan selera. Rentan review manipulasi'
    ),
    blackHistory: M(
      '"리뷰는 좋았는데 내 상황엔 안 맞았음" / "연관 상품 따라가다 예산 초과"',
      '"Reviews were good but it didn\'t fit my situation" / "Followed related products and blew my budget"',
      '「レビューは良かったけど自分の状況には合わなかった」/「関連商品を追って予算オーバー」',
      '"评价很好但不太适合我的情况" / "跟着关联商品买超预算了"',
      '「評價很好但不太適合我的情況」/「跟著關聯商品買超預算了」',
      '"Review tốt nhưng không hợp hoàn cảnh" / "Theo sản phẩm liên quan rồi vượt ngân sách"',
      '"Review bagus tapi nggak cocok situasiku" / "Ikut produk terkait sampai budget jebol"'
    ),
    smartStrategy: M(
      '• 별점보다 "별점 1~2점 리뷰"를 먼저 읽기. 단점이 더 솔직하게 나옴\n• "함께 많이 본 상품" 클릭 전에 이게 내 원래 목적인지 확인하기\n• 리뷰 날짜 확인하기. 오래된 리뷰가 많을수록 신뢰도 낮을 수 있음\n• 쇼핑 전 살 것 목록 고정 후 알고리즘 추천은 참고만 하기',
      '• Read 1–2 star reviews before overall ratings. Cons are more honest there\n• Before clicking "Customers also viewed," check if this was your original goal\n• Check review dates. Too many old reviews may mean lower trust\n• Fix your shopping list before browsing and treat algorithm picks as reference only',
      '• 星評価より「1〜2星レビュー」を先に読む。短所の方が正直\n• 「一緒によく見られた商品」をクリックする前に、本来の目的か確認する\n• レビュー日付を確認。古いレビューが多いほど信頼度が下がる可能性\n• 買い物前に買うものリストを固定し、アルゴリズムおすすめは参考程度に',
      '• 先看1-2星评价，缺点往往更真实\n• 点"经常一起浏览"前先确认这是不是原本目的\n• 看评价日期，旧评价太多可能可信度低\n• 购物前先定好清单，算法推荐只作参考',
      '• 先看1-2星評價，缺點往往更真實\n• 點「經常一起瀏覽」前先確認這是不是原本目的\n• 看評價日期，舊評價太多可能可信度低\n• 購物前先定好清單，演算法推薦只作參考',
      '• Đọc review 1-2 sao trước rating tổng. Nhược điểm thường thật hơn\n• Trước khi bấm "cùng xem", kiểm tra có phải mục đích ban đầu không\n• Xem ngày review. Quá nhiều review cũ có thể kém tin cậy\n• Lập danh sách mua trước, gợi ý thuật toán chỉ tham khảo',
      '• Baca review 1-2 bintang dulu sebelum rating keseluruhan. Kekurangan lebih jujur\n• Sebelum klik "sering dilihat bersama," cek apakah ini tujuan awalmu\n• Cek tanggal review. Terlalu banyak review lama bisa kurang terpercaya\n• Buat daftar belanja dulu, rekomendasi algoritma cukup jadi referensi'
    ),
    brandApproach: M(
      '리뷰 어뷰징·베스트셀러 순위 조작·오늘의딜 긴급 할인',
      'Review manipulation, bestseller rank gaming, and urgent daily-deal discounts',
      'レビュー操作・ベストセラー順位操作・今日の特価の緊急割引',
      '刷评、操纵畅销榜、今日特惠限时折扣',
      '刷評、操縱暢銷榜、今日特惠限時折扣',
      'Thao túng review, xếp hạng bestseller giả, giảm giá deal khẩn cấp',
      'Manipulasi review, ranking bestseller palsu, diskon deal mendesak'
    ),
    todayTask: M(
      '가장 최근 앱 추천 보고 산 것 하나 떠올리기. 처음부터 살 생각이 있었는지 돌아보기',
      'Think of the most recent thing you bought from an app recommendation. Reflect on whether you planned to buy it from the start',
      '最近アプリのおすすめを見て買ったものを一つ思い出す。最初から買うつもりがあったか振り返る',
      '回想最近因应用推荐买的一件东西。想想一开始是不是就想买',
      '回想最近因應用程式推薦買的一件東西。想想一開始是不是就想買',
      'Nhớ món gần nhất mua vì gợi ý app. Suy lại có định mua từ đầu không',
      'Ingat barang terakhir dibeli karena rekomendasi app. Renungkan apakah memang rencana beli dari awal'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 알고리즘 의존형 📊 별점·리뷰 수 먼저 보는 사람들 손 ✋ 연관 상품 따라가다 예산 초과도 → 너는?',
      'My ditto type is Algorithm-Dependent 📊 Hand up if you check stars and review count first ✋ Also blew budget following related items → You?',
      '私のディト消費タイプはアルゴリズム依存型 📊 星評価・レビュー数を先に見る人、手を上げて ✋ 関連商品を追って予算オーバーしたことも → あなたは？',
      '我的跟风消费类型是算法依赖型 📊 先看评分和评价数的人举手 ✋ 跟着关联商品买超预算的也有 → 你呢？',
      '我的跟風消費類型是演算法依賴型 📊 先看評分和評價數的人舉手 ✋ 跟著關聯商品買超預算的也有 → 你呢？',
      'Kiểu tiêu dùng theo người khác của mình: phụ thuộc thuật toán 📊 Giơ tay ai xem sao và số review trước ✋ Theo sản phẩm liên quan vượt ngân sách nữa → Bạn?',
      'Tipe ikut-ikutanku: Bergantung Algoritma 📊 Angkat tangan yang cek bintang & jumlah review dulu ✋ Pernah jebol budget ikut produk terkait → Kamu?'
    ),
  },
  {
    type: 'Type4',
    emoji: '⭐',
    title: M(
      '좋아하는 사람이라면 다르게 보이는, 셀럽 동일시형',
      'If you admire them, it looks different — Celebrity Identification Type',
      '好きな人なら違って見える、セレブ同一視型',
      '喜欢的人用的就不一样，明星认同型',
      '喜歡的人用的就不一樣，明星認同型',
      'Người mình thích dùng thì khác hẳn — Kiểu đồng nhất celeb',
      'Kalau orang yang disukai pakai, rasanya beda — Tipe Identifikasi Seleb'
    ),
    shortDescription: M(
      '"당신은 좋아하는 사람의 선택을 나의 선택으로 연결하는 경향이 있습니다."',
      '"You tend to connect someone you admire\'s choices with your own."',
      '「あなたは好きな人の選択を自分の選択につなげる傾向があります。」',
      '"你倾向于把喜欢的人的选择当成自己的选择。"',
      '"你傾向於把喜歡的人的選擇當成自己的選擇。"',
      '"Bạn có xu hướng gắn lựa chọn của người mình thích với lựa chọn của mình."',
      '"Kamu cenderung menghubungkan pilihan orang yang kamu kagumi dengan pilihanmu sendiri."'
    ),
    description: M(
      '드라마 속 배우가 쓰던 립스틱, 좋아하는 아이돌의 공항 패션, 셀럽이 여행에서 샀다고 언급한 물건. 같은 제품인데 좋아하는 사람과 연결되면 다르게 느껴집니다. 단순한 소비를 넘어 취향·라이프스타일의 공유처럼 느껴지는 심리가 작동합니다. 문화 마케팅과 팬덤 경제의 핵심 소비층입니다.',
      'The lipstick an actor used in a drama, your favorite idol\'s airport outfit, something a celeb mentioned buying on a trip. The same product feels different when linked to someone you admire. It goes beyond shopping — it feels like sharing taste and lifestyle. This is the core consumer layer of culture marketing and fandom economy.',
      'ドラマの俳優が使っていたリップ、好きなアイドルの空港ファッション、セレブが旅行中に買ったと言及したもの。同じ商品でも好きな人と結びつくと違って感じます。単なる消費を超え、好み・ライフスタイルの共有のように感じる心理が働きます。カルチャーマーケティングとファンダム経済の核心消費層です。',
      '电视剧里演员用的口红、喜欢偶像的机场穿搭、明星旅行时提到买的东西。同款产品一旦和喜欢的人联系起来感觉就不一样。不只是消费，更像在共享品味和生活方式。文化营销和粉丝经济的核心消费群。',
      '戲劇裡演員用的口紅、喜歡偶像的機場穿搭、明星旅行時提到買的東西。同款產品一旦和喜歡的人聯繫起來感覺就不一樣。不只是消費，更像在共享品味和生活方式。文化行銷和粉絲經濟的核心消費群。',
      'Son môi diễn viên dùng trong phim, outfit sân bay idol yêu thích, món celeb nhắc mua khi đi du lịch. Cùng sản phẩm nhưng gắn với người mình thích thì cảm giác khác hẳn. Không chỉ mua sắm mà như chia sẻ gu và lifestyle. Đây là tầng tiêu dùng cốt lõi của marketing văn hóa và kinh tế fandom.',
      'Lipstik yang dipakai aktor di drama, outfit bandara idol favorit, barang yang disebut seleb beli saat traveling. Produk sama terasa beda kalau terhubung dengan orang yang dikagumi. Bukan sekadar belanja — rasanya seperti berbagi selera dan gaya hidup. Ini lapisan konsumen inti dari culture marketing dan ekonomi fandom.'
    ),
    dittoType: M(
      '셀럽 동일시형 ⭐',
      'Celebrity Identification Type ⭐',
      'セレブ同一視型 ⭐',
      '明星认同型 ⭐',
      '明星認同型 ⭐',
      'Kiểu đồng nhất celeb ⭐',
      'Tipe Identifikasi Seleb ⭐'
    ),
    mainChannel: M(
      '드라마 PPL·연예인 SNS·팬 커뮤니티·공항 패션 기사',
      'Drama product placements, celebrity SNS, fan communities, and airport fashion articles',
      'ドラマPPL・芸能人SNS・ファンコミュニティ・空港ファッション記事',
      '电视剧植入、明星社交媒体、粉丝社区、机场穿搭新闻',
      '戲劇置入、明星社群媒體、粉絲社群、機場穿搭新聞',
      'Product placement phim, SNS celeb, cộng đồng fan, bài thời trang sân bay',
      'Product placement drama, SNS seleb, komunitas fan, artikel fashion bandara'
    ),
    triggerCondition: M(
      '좋아하는 셀럽이 착용·사용한 제품임이 확인될 때',
      'When it\'s confirmed your favorite celebrity wore or used the product',
      '好きなセレブが着用・使用した商品だと確認されたとき',
      '确认是喜欢的明星穿或用的产品时',
      '確認是喜歡的明星穿或用的產品時',
      'Khi xác nhận celeb yêu thích đã mặc hoặc dùng sản phẩm',
      'Saat terkonfirmasi seleb favorit memakai atau menggunakan produk'
    ),
    strength: M(
      '제품보다 라이프스타일을 구매하는 감각이 있어 취향 형성에 영향',
      'You buy lifestyle, not just products, which shapes your taste over time',
      '商品よりライフスタイルを買う感覚があり、好み形成に影響',
      '买的不仅是产品更是生活方式，影响品味形成',
      '買的不僅是產品更是生活方式，影響品味形成',
      'Mua lifestyle hơn là sản phẩm, ảnh hưởng hình thành gu',
      'Membeli gaya hidup, bukan hanya produk, yang membentuk selera'
    ),
    trap: M(
      '셀럽의 환경·체형·피부와 나의 것이 다를 수 있음. PPL은 광고임',
      'A celeb\'s environment, body type, and skin may differ from yours. PPL is advertising',
      'セレブの環境・体型・肌と自分のものは違うことがある。PPLは広告',
      '明星的环境、体型、肤质可能和你不同。植入就是广告',
      '明星的環境、體型、膚質可能和你不同。置入就是廣告',
      'Môi trường, dáng, da celeb có thể khác bạn. PPL là quảng cáo',
      'Lingkungan, bentuk tubuh, kulit seleb bisa beda. PPL itu iklan'
    ),
    blackHistory: M(
      '"저 사람이 써서 예뻐 보인 거지 내가 쓰니 다르더라" / "셀럽 에디션 프리미엄 가격이 아깝게 느껴짐"',
      '"It looked good because they used it, but on me it was different" / "The celeb edition premium felt like a waste"',
      '「あの人が使ってたから良く見えただけで、自分が使うと違った」/「セレブエディションのプレミアム価格がもったいなく感じた」',
      '"他们用了才好看，我用起来不一样" / "明星联名版溢价感觉不值"',
      '「他們用了才好看，我用起來不一樣」/「明星聯名版溢價感覺不值」',
      '"Họ dùng mới đẹp, mình dùng khác hẳn" / "Bản celeb đắt hơn cảm thấy phí"',
      '"Mereka pakai jadi bagus, saya pakai beda" / "Edisi seleb premium terasa sayang"'
    ),
    smartStrategy: M(
      '• 셀럽 착용 제품인지 여부와 제품 자체의 퀄리티를 분리해서 평가하기\n• 셀럽 에디션 vs 일반 버전 실구매자 리뷰 차이 비교하기\n• "내가 이 셀럽이 아니어도 이 제품이 갖고 싶었을까?" 질문해보기\n• 팬심과 구매 욕구를 의식적으로 분리하는 연습하기',
      '• Separate whether it\'s a celeb-worn product from the product\'s actual quality\n• Compare verified reviews of celeb edition vs. standard version\n• Ask yourself "Would I want this even if I weren\'t a fan of this celeb?"\n• Practice consciously separating fandom from purchase desire',
      '• セレブ着用かどうかと商品自体のクオリティを分けて評価する\n• セレブエディション vs 通常版の実購入者レビュー差を比較する\n• 「このセレブのファンでなくてもこの商品が欲しかったか？」と問う\n• ファン心と購買欲を意識的に分ける練習をする',
      '• 把"是不是明星同款"和产品本身质量分开评价\n• 对比明星联名版和普通版的真实买家评价\n• 问自己"即使不是这个明星的粉丝，我也会想要吗？"\n• 练习有意识地把粉丝心和购买欲分开',
      '• 把「是不是明星同款」和產品本身品質分開評價\n• 對比明星聯名版和普通版的真實買家評價\n• 問自己「即使不是這個明星的粉絲，我也會想要嗎？」\n• 練習有意識地把粉絲心和購買欲分開',
      '• Tách việc celeb mặc khỏi chất lượng sản phẩm\n• So sánh review bản celeb vs bản thường từ người mua thật\n• Hỏi "Dù không phải fan celeb này, mình vẫn muốn không?"\n• Luyện tách tình cảm fan khỏi ham muốn mua',
      '• Pisahkan apakah produk dipakai seleb dari kualitas produk itu sendiri\n• Bandingkan review edisi seleb vs versi standar dari pembeli asli\n• Tanya "Apakah aku tetap mau ini meski bukan fan seleb ini?"\n• Latih memisahkan fan feeling dari keinginan beli'
    ),
    brandApproach: M(
      '셀럽 협찬·한정 에디션·팬미팅 굿즈·드라마 PPL',
      'Celebrity sponsorships, limited editions, fan meeting merch, and drama PPL',
      'セレブ協賛・限定エディション・ファンミーティンググッズ・ドラマPPL',
      '明星赞助、限定联名、粉丝见面会周边、电视剧植入',
      '明星贊助、限定聯名、粉絲見面會周邊、戲劇置入',
      'Tài trợ celeb, phiên bản giới hạn, merch fan meeting, PPL phim',
      'Sponsor seleb, edisi terbatas, merch fan meeting, PPL drama'
    ),
    todayTask: M(
      '셀럽 때문에 산 것 중 지금도 잘 쓰는 것과 아닌 것 분류해보기',
      'Sort things you bought because of a celeb into still using vs. not using',
      'セレブのせいで買ったもののうち、今もよく使っているものとそうでないものを分類する',
      '把因明星而买的东西分成还在用和没用的',
      '把因明星而買的東西分成還在用和沒用的',
      'Phân loại đồ mua vì celeb thành vẫn dùng và không dùng',
      'Klasifikasikan barang beli karena seleb: masih dipakai vs tidak'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 셀럽 동일시형 ⭐ 드라마 PPL 보고 산 거 있는 사람들 다 모여 → 너는 어떤 디토소비 유형이야?',
      'My ditto type is Celebrity Identification ⭐ Anyone who bought something after drama PPL, gather here → What\'s your ditto type?',
      '私のディト消費タイプはセレブ同一視型 ⭐ ドラマPPL見て買った人、集合 → あなたはどのタイプ？',
      '我的跟风消费类型是明星认同型 ⭐ 看电视剧植入买的，都来集合 → 你是什么类型？',
      '我的跟風消費類型是明星認同型 ⭐ 看戲劇置入買的，都來集合 → 你是什麼類型？',
      'Kiểu tiêu dùng theo người khác của mình: đồng nhất celeb ⭐ Ai mua vì PPL phim tập hợp đi → Bạn thuộc kiểu nào?',
      'Tipe ikut-ikutanku: Identifikasi Seleb ⭐ Yang beli karena PPL drama, kumpul → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌀',
    title: M(
      '모든 채널에서 동시에 흔들리는, 멀티 디토형',
      'Shaken on every channel at once — Multi-Ditto Type',
      'すべてのチャンネルで同時に揺さぶられる、マルチディト型',
      '所有渠道同时动摇，多重跟风型',
      '所有管道同時動搖，多重跟風型',
      'Bị lay chuyển trên mọi kênh cùng lúc — Kiểu multi-ditto',
      'Terguncang di semua channel sekaligus — Tipe Multi-Ditto'
    ),
    shortDescription: M(
      '"인플루언서도, 친구도, 알고리즘도, 셀럽도 당신을 흔듭니다. 동시에."',
      '"Influencers, friends, algorithms, and celebrities all shake you. At the same time."',
      '「インフルエンサーも、友人も、アルゴリズムも、セレブもあなたを揺さぶります。同時に。」',
      '"网红、朋友、算法、明星都会动摇你。同时。"',
      '"網紅、朋友、演算法、明星都會動搖你。同時。"',
      '"Influencer, bạn bè, thuật toán, celeb đều lay chuyển bạn. Cùng lúc."',
      '"Influencer, teman, algoritma, seleb semua menggoyahkan kamu. Bersamaan."'
    ),
    description: M(
      '어느 하나에 집중되지 않고 모든 채널에서 구매 신호를 받습니다. 인플루언서 영상을 보다가 친구에게 물어보고, 앱 추천도 확인하고, 셀럽 착용 여부까지 검색합니다. 정보는 많이 모으지만 결국 그 정보들이 모두 "사라"는 방향을 가리킬 때 지갑이 열립니다. 정보 과부하 속에서 소비하는 현대인의 가장 전형적인 패턴입니다.',
      'You don\'t fixate on one channel — you pick up buy signals everywhere. Watch an influencer, ask a friend, check app recommendations, and search whether a celeb wore it. You gather lots of info, but your wallet opens when it all points to "buy." The most typical pattern of modern consumption under information overload.',
      'どれか一つに集中せず、すべてのチャンネルで購入シグナルを受け取ります。インフルエンサーの動画を見て、友人に聞き、アプリのおすすめも確認し、セレブ着用かまで検索します。情報はたくさん集めるが、結局それらがすべて「買え」の方向を指すとき財布が開きます。情報過多の中で消費する現代人の最も典型的なパターンです。',
      '不会只盯一个渠道，所有渠道都会收到购买信号。看网红视频、问朋友、查应用推荐、搜明星是否穿过。信息收集很多，但当所有信息都指向"买"时钱包就开了。信息过载时代最典型的消费模式。',
      '不會只盯一個管道，所有管道都會收到購買信號。看網紅影片、問朋友、查應用程式推薦、搜明星是否穿過。資訊收集很多，但當所有資訊都指向「買」時錢包就開了。資訊過載時代最典型的消費模式。',
      'Không tập trung một kênh mà nhận tín hiệu mua từ mọi nơi. Xem influencer, hỏi bạn, xem gợi ý app, tìm celeb có mặc không. Thu thập nhiều thông tin nhưng ví mở khi tất cả đều chỉ "mua". Mẫu tiêu dùng điển hình nhất của người hiện đại trong quá tải thông tin.',
      'Tidak fokus satu channel — sinyal beli datang dari mana-mana. Nonton influencer, tanya teman, cek rekomendasi app, cari apakah seleb memakainya. Kumpul banyak info, tapi dompet terbuka saat semuanya mengarah ke "beli." Pola konsumsi paling tipikal di era overload informasi.'
    ),
    dittoType: M(
      '멀티 디토형 🌀',
      'Multi-Ditto Type 🌀',
      'マルチディト型 🌀',
      '多重跟风型 🌀',
      '多重跟風型 🌀',
      'Kiểu multi-ditto 🌀',
      'Tipe Multi-Ditto 🌀'
    ),
    mainChannel: M(
      '유튜브·친구 추천·앱 추천·셀럽 전부',
      'YouTube, friend recommendations, app recommendations, and celebrities — all of them',
      'YouTube・友人おすすめ・アプリおすすめ・セレブ全部',
      'YouTube、朋友推荐、应用推荐、明星——全部',
      'YouTube、朋友推薦、應用程式推薦、明星——全部',
      'YouTube, giới thiệu bạn, gợi ý app, celeb — tất cả',
      'YouTube, rekomendasi teman, rekomendasi app, seleb — semuanya'
    ),
    triggerCondition: M(
      '여러 채널에서 동시에 같은 제품이 보이기 시작할 때',
      'When the same product starts showing up across multiple channels at once',
      '複数のチャンネルで同時に同じ商品が見え始めたとき',
      '多个渠道同时开始出现同一产品时',
      '多個管道同時開始出現同一產品時',
      'Khi cùng một sản phẩm bắt đầu xuất hiện trên nhiều kênh cùng lúc',
      'Saat produk yang sama mulai muncul di banyak channel sekaligus'
    ),
    strength: M(
      '다양한 정보를 교차 확인하는 경향이 있어 정보량은 많음',
      'You cross-check diverse sources, so you end up with a lot of information',
      '多様な情報を交差確認する傾向があり、情報量は多い',
      '倾向交叉验证多种信息，信息量很大',
      '傾向交叉驗證多種資訊，資訊量很大',
      'Có xu hướng đối chiếu nhiều nguồn nên lượng thông tin lớn',
      'Cenderung cross-check berbagai sumber, jadi informasinya banyak'
    ),
    trap: M(
      '정보가 많아도 결국 "사고 싶다"는 감정이 판단을 지배함. 과정이 정당화 수단이 됨',
      'Even with lots of info, the "I want it" feeling ends up driving the decision. Research becomes justification',
      '情報が多くても結局「欲しい」という感情が判断を支配する。調べる過程が正当化の手段になる',
      '信息再多，最终"想买"的情绪还是会主导判断。研究过程变成了合理化手段',
      '資訊再多，最終「想買」的情緒還是會主導判斷。研究過程變成了合理化手段',
      'Dù nhiều thông tin, cảm xúc "muốn mua" vẫn chi phối quyết định. Quá trình tìm hiểu thành cách biện minh',
      'Meski info banyak, perasaan "pengen beli" tetap menguasai keputusan. Proses riset jadi alasan pembenaran'
    ),
    blackHistory: M(
      '"이렇게 많이 알아봤는데 왜 후회하지?" / "알아보는 과정 자체에 시간과 에너지 낭비"',
      '"I researched this much — why do I still regret it?" / "Wasted time and energy on the research itself"',
      '「こんなに調べたのに、なぜ後悔する？」/「調べる過程自体に時間とエネルギーを浪費」',
      '"查了这么多为什么还是后悔？" / "研究过程本身就浪费了时间和精力"',
      '「查了這麼多為什麼還是後悔？」/「研究過程本身就浪費了時間和精力」',
      '"Tìm hiểu nhiều thế mà sao vẫn hối?" / "Lãng phí thời gian và năng lượng vào việc tìm hiểu"',
      '"Riset segini banyak kok tetap nyesel?" / "Buang waktu dan energi di proses risetnya sendiri"'
    ),
    smartStrategy: M(
      '• 정보 수집 시간 제한하기. 30분 이상 알아보고 있다면 오늘은 사지 않기\n• "이 중에 어떤 정보가 나한테 진짜 맞는 정보인가"를 먼저 결정하기\n• 살 것·살 이유·예산을 먼저 적고 그 기준에 맞는 정보만 수집하기\n• 모든 채널에서 좋아 보인다고 해서 사야 한다는 건 아님',
      '• Limit research time. If you\'ve been looking for 30+ minutes, don\'t buy today\n• Decide first which source of info actually fits you\n• Write what you\'ll buy, why, and your budget first — then collect info that matches\n• Looking good on every channel doesn\'t mean you have to buy',
      '• 情報収集時間を制限する。30分以上調べていたら今日は買わない\n• 「この中でどの情報が自分に本当に合うか」を先に決める\n• 買うもの・理由・予算を先に書いて、その基準に合う情報だけ集める\n• すべてのチャンネルで良さそうだからといって買う必要はない',
      '• 限制信息收集时间。研究超过30分钟今天就不买\n• 先决定"哪种信息才真正适合我"\n• 先写下要买什么、为什么买、预算，再只收集符合标准的信息\n• 所有渠道看起来都好不代表必须买',
      '• 限制資訊收集時間。研究超過30分鐘今天就不買\n• 先決定「哪種資訊才真正適合我」\n• 先寫下要買什麼、為什麼買、預算，再只收集符合標準的資訊\n• 所有管道看起來都好不代表必須買',
      '• Giới hạn thời gian tìm hiểu. Hơn 30 phút thì hôm nay không mua\n• Quyết định trước nguồn thông tin nào thực sự phù hợp\n• Viết trước mua gì, vì sao, ngân sách — rồi chỉ thu thập info phù hợp\n• Trông tốt trên mọi kênh không có nghĩa phải mua',
      '• Batasi waktu riset. Kalau sudah 30+ menit, jangan beli hari ini\n• Tentukan dulu info mana yang benar-benar cocok untukmu\n• Tulis dulu mau beli apa, alasan, budget — baru kumpulkan info sesuai kriteria\n• Terlihat bagus di semua channel bukan berarti harus beli'
    ),
    brandApproach: M(
      '전 채널 동시 노출 캠페인·"다들 사는 거" 사회적 증거 마케팅',
      'Cross-channel simultaneous exposure campaigns and "everyone\'s buying it" social proof marketing',
      '全チャンネル同時露出キャンペーン・「みんな買ってる」社会的証明マーケティング',
      '全渠道同时曝光营销、"大家都在买"的社会证明营销',
      '全管道同時曝光行銷、「大家都在買」的社會證明行銷',
      'Chiến dịch hiển thị đồng thời mọi kênh, marketing bằng chứng xã hội "ai cũng mua"',
      'Kampanye eksposur lintas channel sekaligus dan social proof marketing "semua orang beli"'
    ),
    todayTask: M(
      '가장 최근 여러 곳에서 알아보고 산 것 하나 떠올리기. 결국 결정한 이유가 뭐였는지 돌아보기',
      'Think of the most recent thing you researched across multiple sources before buying. Reflect on what finally made you decide',
      '最近複数のところで調べて買ったものを一つ思い出す。結局何が決め手だったか振り返る',
      '回想最近多方研究后买的一件东西。想想最终是什么理由让你决定买',
      '回想最近多方研究後買的一件東西。想想最終是什麼理由讓你決定買',
      'Nhớ món gần nhất tìm hiểu nhiều nơi rồi mua. Suy lại lý do cuối cùng khiến bạn quyết định',
      'Ingat barang terakhir yang diresarch di banyak tempat sebelum beli. Renungkan apa yang akhirnya bikin kamu memutuskan'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 멀티 디토형 🌀 인플루언서·친구·알고리즘 다 확인하고 사는데 그래도 후회함 ㅋㅋ → 너는 어떤 유형이야?',
      'My ditto type is Multi-Ditto 🌀 I check influencers, friends, AND algorithms before buying... still regret it lol → What type are you?',
      '私のディト消費タイプはマルチディト型 🌀 インフルエンサー・友人・アルゴリズム全部確認して買うのに後悔する ㅋㅋ → あなたはどのタイプ？',
      '我的跟风消费类型是多重跟风型 🌀 网红、朋友、算法全查完才买，还是后悔 哈哈 → 你是什么类型？',
      '我的跟風消費類型是多重跟風型 🌀 網紅、朋友、演算法全查完才買，還是後悔 哈哈 → 你是什麼類型？',
      'Kiểu tiêu dùng theo người khác của mình: multi-ditto 🌀 Check influencer, bạn, thuật toán hết rồi mua mà vẫn hối ㅋㅋ → Bạn thuộc kiểu nào?',
      'Tipe ikut-ikutanku: Multi-Ditto 🌀 Cek influencer, teman, algoritma semua baru beli... tetap nyesel wkwk → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🛡️',
    title: M(
      '나만의 기준으로 사는, 디토 저항형',
      'Buying by your own rules — Ditto-Resistant Type',
      '自分だけの基準で買う、ディト抵抗型',
      '按自己的标准买，跟风抵抗型',
      '按自己的標準買，跟風抵抗型',
      'Mua theo tiêu chuẩn riêng — Kiểu kháng tiêu dùng theo người khác',
      'Beli dengan standar sendiri — Tipe Anti Ikut-Ikutan'
    ),
    shortDescription: M(
      '"당신은 디토소비의 흐름에 가장 적게 흔들리는 사람입니다."',
      '"You are the person least shaken by the tide of ditto consumption."',
      '「あなたはディト消費の流れにいちばん揺さぶられにくい人です。」',
      '"你是跟风消费浪潮中最不容易被动摇的人。"',
      '"你是跟風消費浪潮中最不容易被動搖的人。"',
      '"Bạn là người ít bị lay chuyển bởi dòng tiêu dùng theo người khác nhất."',
      '"Kamu orang yang paling jarang tergoyah arus konsumsi ikut-ikutan."'
    ),
    description: M(
      '인플루언서 리뷰, 친구 추천, 알고리즘 추천, 셀럽 협찬 어느 것도 즉각적인 구매 신호로 작동하지 않습니다. 외부 정보를 참고는 하지만 최종 결정은 나의 필요와 기준으로 내립니다. 가장 독립적인 소비자처럼 보이지만, 사실 이 유형도 자신만의 디토소비 기준이 있습니다. 다만 그 기준이 남이 아닌 자신에게 있다는 차이입니다.',
      'Influencer reviews, friend recommendations, algorithm picks, and celebrity sponsorships none of them trigger instant buy signals for you. You may reference outside info, but the final call is based on your needs and standards. You look like the most independent shopper, but even this type has its own ditto consumption rules — the difference is those rules come from you, not others.',
      'インフルエンサーレビュー、友人のおすすめ、アルゴリズムおすすめ、セレブ協賛、どれも即座の購入シグナルにはなりません。外部情報は参考にしますが、最終判断は自分の必要性と基準で下します。最も独立した消費者に見えますが、実はこのタイプにも自分だけのディト消費基準があります。ただしその基準が他人ではなく自分にあるという違いです。',
      '网红测评、朋友推荐、算法推荐、明星赞助都不会立刻变成购买信号。会参考外部信息，但最终决定按自己的需求和标准。看起来像最独立的消费者，但其实这一型也有自己的跟风消费标准——区别在于标准来自自己而非他人。',
      '網紅測評、朋友推薦、演算法推薦、明星贊助都不會立刻變成購買信號。會參考外部資訊，但最終決定按自己的需求和標準。看起來像最獨立的消費者，但其實這一型也有自己的跟風消費標準——區別在於標準來自自己而非他人。',
      'Review influencer, giới thiệu bạn, gợi ý thuật toán, tài trợ celeb — không cái nào kích hoạt mua ngay. Tham khảo thông tin bên ngoài nhưng quyết định cuối theo nhu cầu và tiêu chuẩn của bạn. Trông như người tiêu dùng độc lập nhất, nhưng kiểu này cũng có quy tắc riêng — khác ở chỗ quy tắc đến từ chính mình.',
      'Review influencer, rekomendasi teman, algoritma, sponsor seleb — tidak ada yang langsung jadi sinyal beli. Kamu bisa lihat info luar, tapi keputusan akhir berdasarkan kebutuhan dan standar sendiri. Terlihat paling independen, tapi tipe ini juga punya aturan ikut-ikutan sendiri — bedanya aturannya dari dirimu, bukan orang lain.'
    ),
    dittoType: M(
      '디토 저항형 🛡️',
      'Ditto-Resistant Type 🛡️',
      'ディト抵抗型 🛡️',
      '跟风抵抗型 🛡️',
      '跟風抵抗型 🛡️',
      'Kiểu kháng ditto 🛡️',
      'Tipe Anti Ikut-Ikutan 🛡️'
    ),
    mainChannel: M(
      '직접 사용 경험·공식 스펙 비교·본인 필요 판단',
      'Direct use experience, official spec comparison, and personal need assessment',
      '直接使用経験・公式スペック比較・自分の必要性判断',
      '直接使用经验、官方参数对比、个人需求判断',
      '直接使用經驗、官方規格對比、個人需求判斷',
      'Kinh nghiệm dùng trực tiếp, so sánh thông số chính thức, đánh giá nhu cầu cá nhân',
      'Pengalaman pakai langsung, perbandingan spesifikasi resmi, penilaian kebutuhan pribadi'
    ),
    triggerCondition: M(
      '외부 정보가 내 기준과 일치할 때만 반응',
      'You only respond when outside information aligns with your standards',
      '外部情報が自分の基準と一致するときだけ反応する',
      '只有外部信息与我的标准一致时才会有反应',
      '只有外部資訊與我的標準一致時才會有反應',
      'Chỉ phản ứng khi thông tin bên ngoài khớp tiêu chuẩn của mình',
      'Hanya bereaksi saat info luar selaras dengan standarmu'
    ),
    strength: M(
      '충동구매가 적고 구매 후 만족도가 높은 경향',
      'Less impulse buying and higher post-purchase satisfaction',
      '衝動買いが少なく、購入後の満足度が高い傾向',
      '冲动购买少，购后满意度高',
      '衝動購買少，購後滿意度高',
      'Ít mua theo cảm xúc, hài lòng sau mua cao hơn',
      'Impulse buying lebih sedikit, kepuasan setelah beli lebih tinggi'
    ),
    trap: M(
      '정보를 너무 배제하다 좋은 제품을 놓치거나 결정이 느려지는 경우',
      'May miss good products or slow decisions by excluding too much outside info',
      '情報を排除しすぎて良い商品を見逃したり、決定が遅くなる場合がある',
      '过于排斥信息可能错过好产品或决策变慢',
      '過於排斥資訊可能錯過好產品或決策變慢',
      'Loại bỏ quá nhiều thông tin có thể bỏ lỡ sản phẩm tốt hoặc quyết định chậm',
      'Terlalu menolak info bisa melewatkan produk bagus atau memperlambat keputusan'
    ),
    blackHistory: M(
      '"고집 부리다 더 나은 것 뒤늦게 알게 됨" / "남의 추천 무시했다가 나중에 맞는 제품이었음을 앎"',
      '"Stubborn and found out later there was something better" / "Ignored others\' recommendations and later learned it was actually a good fit"',
      '「頑固で、後からもっと良いものがあると分かった」/「他人のおすすめを無視して、後から合う商品だったと分かった」',
      '"太固执，后来才发现有更好的" / "忽略了别人推荐，后来才发现其实挺合适"',
      '「太固執，後來才發現有更好的」/「忽略了別人推薦，後來才發現其實挺合適」',
      '"Cố chấp rồi sau mới biết có cái tốt hơn" / "Bỏ qua lời giới thiệu, sau mới biết sản phẩm hợp"',
      '"Bandel dan baru tahu belakangan ada yang lebih bagus" / "Abaikan rekomendasi orang, ternyata produknya cocok"'
    ),
    smartStrategy: M(
      '• 독립적 판단은 강점. 단 좋은 정보는 열린 마음으로 수용하기\n• 신뢰할 수 있는 정보 채널 한두 개만 골라두고 활용하기\n• 내 기준이 오래된 것일 수도 있음. 주기적으로 업데이트하기\n• 결정에 너무 많은 에너지를 쓰는 것도 비효율. 적절한 정보 수용이 오히려 시간 절약',
      '• Independent judgment is a strength. Stay open to good information\n• Pick one or two trusted info channels and use them consistently\n• Your standards may be outdated. Update them periodically\n• Spending too much energy on decisions is also inefficient. Accepting some info saves time',
      '• 独立した判断は強み。ただ良い情報はオープンな心で受け入れる\n• 信頼できる情報チャンネルを1〜2つ選んで活用する\n• 自分の基準が古い可能性もある。定期的にアップデートする\n• 決定にエネルギーを使いすぎるのも非効率。適切な情報受容が時間節約になる',
      '• 独立判断是优势，但好的信息要开放接受\n• 选一两个可信信息渠道持续使用\n• 自己的标准可能过时，要定期更新\n• 决策花太多精力也不高效，适当接受信息反而省时间',
      '• 獨立判斷是優勢，但好的資訊要開放接受\n• 選一兩個可信資訊管道持續使用\n• 自己的標準可能過時，要定期更新\n• 決策花太多精力也不高效，適當接受資訊反而省時間',
      '• Phán đoán độc lập là điểm mạnh. Nhưng hãy mở lòng với thông tin tốt\n• Chọn 1-2 kênh thông tin tin cậy và dùng thường xuyên\n• Tiêu chuẩn có thể lỗi thời. Cập nhật định kỳ\n• Tốn quá nhiều năng lượng quyết định cũng kém hiệu quả. Tiếp nhận info hợp lý tiết kiệm thời gian',
      '• Keputusan independen itu kekuatan. Tetap terbuka pada info yang bagus\n• Pilih satu atau dua channel info terpercaya dan pakai konsisten\n• Standarmu mungkin sudah ketinggalan. Update secara berkala\n• Terlalu banyak energi untuk keputusan juga tidak efisien. Terima info secukupnya justru hemat waktu'
    ),
    brandApproach: M(
      '스펙·성분 중심 마케팅·직접 체험 샘플링·공신력 있는 수상 실적',
      'Spec- and ingredient-focused marketing, direct trial sampling, and credible award credentials',
      'スペック・成分中心マーケティング・直接体験サンプリング・信頼できる受賞実績',
      '以参数和成分为主的营销、直接体验试用、权威获奖背书',
      '以規格和成分為主的行銷、直接體驗試用、權威獲獎背書',
      'Marketing tập trung spec/thành phần, sampling trải nghiệm trực tiếp, giải thưởng uy tín',
      'Marketing fokus spesifikasi & kandungan, sampling uji coba langsung, penghargaan kredibel'
    ),
    todayTask: M(
      '최근 6개월 구매 중 가장 만족한 것과 이유 떠올리기. 그 기준이 내 소비 원칙이 됩니다',
      'Recall your most satisfying purchase in the last 6 months and why. That standard becomes your spending principle',
      '最近6ヶ月の購入のうち、いちばん満足したものと理由を思い出す。その基準が自分の消費原則になる',
      '回想近6个月最满意的一次购买及原因。那就是你的消费原则',
      '回想近6個月最滿意的一次購買及原因。那就是你的消費原則',
      'Nhớ món mua hài lòng nhất 6 tháng qua và lý do. Tiêu chuẩn đó thành nguyên tắc tiêu dùng',
      'Ingat pembelian paling memuaskan 6 bulan terakhir dan alasannya. Standar itu jadi prinsip belanjamu'
    ),
    shareSnippet: M(
      '내 디토소비 유형은 디토 저항형 🛡️ 나만의 기준으로 산다는 거 맞긴 한데... 가끔 뒤늦게 후회도 함 → 너는 어떤 유형이야?',
      'My ditto type is Ditto-Resistant 🛡️ I do buy by my own rules... but sometimes regret it later → What type are you?',
      '私のディト消費タイプはディト抵抗型 🛡️ 自分の基準で買うのは確かだけど... たまに後から後悔もする → あなたはどのタイプ？',
      '我的跟风消费类型是跟风抵抗型 🛡️ 确实按自己标准买...但偶尔也会事后后悔 → 你是什么类型？',
      '我的跟風消費類型是跟風抵抗型 🛡️ 確實按自己標準買...但偶爾也會事後後悔 → 你是什麼類型？',
      'Kiểu tiêu dùng theo người khác của mình: kháng ditto 🛡️ Mua theo tiêu chuẩn riêng đúng rồi... nhưng đôi khi vẫn hối sau → Bạn thuộc kiểu nào?',
      'Tipe ikut-ikutanku: Anti Ikut-Ikutan 🛡️ Memang beli dengan standar sendiri... tapi kadang nyesel belakangan → Kamu tipe apa?'
    ),
  },
];
