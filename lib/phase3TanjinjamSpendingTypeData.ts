/** 나의 탕진잼 유형은? — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 */

function M(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
) {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

const img = (q: number, abcd: 'a' | 'b' | 'c' | 'd') =>
  `p3_test_tanjinjam_spending_type_q${q}${abcd}.jpg`;

export interface Phase3TanjinjamSpendingTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3TanjinjamSpendingTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  tanjinJamCategory: Record<string, string>;
  tanjinPoint: Record<string, string>;
  tanjinLevel: Record<string, string>;
  tanjinSignature: Record<string, string>;
  monthlyPick: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3TanjinjamSpendingTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 6) return 'Type1';
  if (total <= 13) return 'Type2';
  if (total <= 20) return 'Type3';
  if (total <= 28) return 'Type4';
  return 'Type5';
}

export const phase3TanjinjamSpendingTypeQuestions: Phase3TanjinjamSpendingTypeQuestion[] = [
  {
    id: 1,
    question: M(
      '퇴근 후 나를 가장 행복하게 만들어줄 것은?',
      'After work, what would make you happiest?',
      '退勤後、あなたを一番ハッピーにしてくれるのは？',
      '下班后，什么最能让你开心？',
      '下班後，什麼最能讓你開心？',
      'Tan làm về, điều gì khiến bạn hạnh phúc nhất?',
      'Setelah kerja, apa yang paling bikin kamu bahagia?'
    ),
    options: [
      {
        image: img(1, 'a'),
        label: M(
          '맛집에서 먹음직스러운 저녁 한 상',
          'A mouthwatering dinner spread at a hot restaurant',
          '話題の店で、食欲をそそる晩ごはんのテーブル',
          '网红店里的诱人晚餐一桌',
          '話題店裡誘人的晚餐一桌',
          'Quán hot: mâm tối nhìn là thèm',
          'Resto hits: meja makan malam yang menggugah selera'
        ),
        score: 0,
      },
      {
        image: img(1, 'b'),
        label: M(
          '예쁘게 배송 온 새 옷 언박싱',
          'Unboxing a pretty new clothing delivery',
          '届いたての新しい服を開封する瞬間',
          '拆开刚送到的新衣服',
          '拆開剛送達的新衣服',
          'Khui hộp quần áo mới ship tới',
          'Unboxing baju baru yang baru datang'
        ),
        score: 1,
      },
      {
        image: img(1, 'c'),
        label: M(
          '여행지 감성 카페에서 마시는 커피 한 잔',
          'A coffee at a travel-vibe cafe',
          '旅先っぽい雰囲気のカフェで飲むコーヒー一杯',
          '旅行感咖啡厅里的一杯咖啡',
          '旅行感咖啡廳裡的一杯咖啡',
          'Một ly cà phê ở quán vibe du lịch',
          'Secangkir kopi di kafe nuansa traveling'
        ),
        score: 2,
      },
      {
        image: img(1, 'd'),
        label: M(
          '드디어 구한 최애 한정판 굿즈',
          'Finally scoring limited merch of your fave',
          'やっと手に入れた推しの限定グッズ',
          '终于买到的本命限量周边',
          '終於買到的本命限量周邊',
          'Merch limited bias cuối cùng cũng săn được',
          'Merch limited bias yang akhirnya kebeli'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '갑자기 10만 원이 생겼다. 가장 먼저 하고 싶은 것은?',
      'You suddenly have extra cash (₩100,000). What do you do first?',
      '急に10万ウォンできた。真っ先にやりたいことは？',
      '突然多了十万韩元，你最先想做什么？',
      '突然多了十萬韓元，你最先想做什麼？',
      'Đột nhiên có thêm 100.000 won — bạn làm gì trước?',
      'Tiba-tiba ada uang ekstra (₩100.000). Kamu apain dulu?'
    ),
    options: [
      {
        image: img(2, 'a'),
        label: M(
          '못 가봤던 유명 맛집 예약',
          'Book that famous restaurant you never tried',
          '行けずにいた有名店を予約',
          '预约一直没去成的名店',
          '預約一直沒去成的名店',
          'Đặt bàn quán nổi tiếng chưa từng đi',
          'Reserv resto hits yang belum pernah ke sana'
        ),
        score: 0,
      },
      {
        image: img(2, 'b'),
        label: M(
          '위시리스트에 담아둔 옷 구매',
          'Buy clothes sitting on your wishlist',
          'ウィッシュリストに入れていた服を買う',
          '买下心愿单里的衣服',
          '買下心願單裡的衣服',
          'Mua đồ trong wishlist',
          'Beli baju yang ada di wishlist'
        ),
        score: 1,
      },
      {
        image: img(2, 'c'),
        label: M(
          '당일치기 여행 교통비로 사용',
          'Spend it on a day-trip fare',
          '日帰り旅行の交通費に使う',
          '用在当日往返的交通上',
          '用在當日往返的交通上',
          'Chi phí đi chơi trong ngày',
          'Buat ongkos trip sehari'
        ),
        score: 2,
      },
      {
        image: img(2, 'd'),
        label: M(
          '한정판 콜라보 상품 구매',
          'Buy limited collab drops',
          '限定コラボ商品を買う',
          '买限量联名款',
          '買限量聯名款',
          'Săn đồ collab limited',
          'Beli produk kolaborasi limited'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      'SNS에서 가장 오래 구경하게 되는 콘텐츠는?',
      'On social media, what do you scroll longest?',
      'SNSで一番長く見てしまうコンテンツは？',
      '在社交平台上，你刷最久的内容是？',
      '在社群上，你滑最久的內容是？',
      'Trên mạng xã hội, bạn lướt lâu nhất loại nào?',
      'Di sosmed, konten apa yang paling lama kamu scroll?'
    ),
    options: [
      {
        image: img(3, 'a'),
        label: M(
          '먹방 & 맛집 리뷰',
          'Mukbang & restaurant reviews',
          'ムクバン＆グルメレビュー',
          '吃播与探店测评',
          '吃播與探店評測',
          'Mukbang & review quán ăn',
          'Mukbang & review resto'
        ),
        score: 0,
      },
      {
        image: img(3, 'b'),
        label: M(
          '패션 & 코디 추천',
          'Fashion & outfit ideas',
          'ファッション＆コーデ紹介',
          '穿搭与造型推荐',
          '穿搭與造型推薦',
          'Thời trang & gợi ý outfit',
          'Fashion & ide outfit'
        ),
        score: 1,
      },
      {
        image: img(3, 'c'),
        label: M(
          '여행 & 감성 브이로그',
          'Travel & aesthetic vlogs',
          '旅行＆おしゃれVlog',
          '旅行与氛围感 vlog',
          '旅行與氛圍感 vlog',
          'Du lịch & vlog vibe',
          'Travel & vlog estetik'
        ),
        score: 2,
      },
      {
        image: img(3, 'd'),
        label: M(
          '덕질 & 취미 커뮤니티',
          'Fandom & hobby communities',
          '推し活＆趣味コミュニティ',
          '追星与同好社群',
          '追星與同好社群',
          'Fandom & cộng đồng sở thích',
          'Fandom & komunitas hobi'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '스트레스를 풀기 위해 가장 하고 싶은 것은?',
      'To blow off stress, what do you want to do most?',
      'ストレス解消に一番やりたいことは？',
      '解压时你最想做什么？',
      '解壓時你最想做什麼？',
      'Xả stress, bạn muốn làm gì nhất?',
      'Buat hilang stres, kamu paling pengen apa?'
    ),
    options: [
      {
        image: img(4, 'a'),
        label: M(
          '고급 식당에서 혼자 호화 식사',
          'Solo splurge dinner at a fine restaurant',
          '高級レストランで一人贅沢ディナー',
          '独自在高级餐厅大餐一顿',
          '獨自在高級餐廳大餐一頓',
          'Tự thưởng bữa tối ở nhà hàng xịn',
          'Makan malam mewah sendirian di restoran fine dining'
        ),
        score: 0,
      },
      {
        image: img(4, 'b'),
        label: M(
          '쇼핑몰에서 마음에 드는 것 다 담기',
          'Toss everything you like into the cart at the mall',
          'モールで気に入ったものをカゴに入れまくる',
          '在商场把喜欢的都加进购物车',
          '在商場把喜歡的都加進購物車',
          'Ở mall nhét hết đồ thích vào giỏ',
          'Di mall masukin semua yang suka ke keranjang'
        ),
        score: 1,
      },
      {
        image: img(4, 'c'),
        label: M(
          '즉흥 여행 예약하고 떠나기',
          'Book a spontaneous trip and go',
          '即興で旅行を予約して出発',
          '即兴订一场旅行出发',
          '即興訂一場旅行出發',
          'Book chuyến đi spontaneous rồi đi luôn',
          'Booking trip dadakan lalu berangkat'
        ),
        score: 2,
      },
      {
        image: img(4, 'd'),
        label: M(
          '좋아하는 것 관련 굿즈 쇼핑',
          'Shop merch for the things you love',
          '好きなもの関連のグッズを買い漁る',
          '买喜欢事物的周边',
          '買喜歡事物的周邊',
          'Shopping merch theo sở thích',
          'Belanja merch sesuai minat'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '친구와 주말 약속, 어디를 가장 가고 싶나요?',
      'Weekend plans with friends—where do you want to go most?',
      '友達との週末、一番行きたいのは？',
      '和朋友过周末，你最想去哪？',
      '和朋友過週末，你最想去哪？',
      'Cuối tuần đi chơi với bạn — muốn đi đâu nhất?',
      'Weekend bareng teman — paling pengen ke mana?'
    ),
    options: [
      {
        image: img(5, 'a'),
        label: M(
          '오픈한 지 얼마 안 된 핫한 맛집',
          'A newly opened hyped restaurant',
          'オープンしたての話題のグルメ店',
          '刚开不久的热门餐厅',
          '剛開不久的熱門餐廳',
          'Quán mới mở đang hot',
          'Resto baru yang lagi hype'
        ),
        score: 0,
      },
      {
        image: img(5, 'b'),
        label: M(
          '트렌디한 편집샵 & 쇼핑 거리',
          'Trendy select shops & shopping streets',
          'トレンディなセレクトショップ＆商店街',
          '潮牌买手店和购物街',
          '潮牌買手店和購物街',
          'Select shop & phố mua sắm trendy',
          'Select shop & jalan belanja kece'
        ),
        score: 1,
      },
      {
        image: img(5, 'c'),
        label: M(
          '감성 넘치는 로컬 여행지',
          'Aesthetic local getaway spots',
          '雰囲気たっぷりのローカルスポット',
          '氛围感满满的本地小旅行',
          '氛圍感滿滿的本地小旅行',
          'Điểm local vibe chill',
          'Spot lokal yang estetik'
        ),
        score: 2,
      },
      {
        image: img(5, 'd'),
        label: M(
          '좋아하는 분야 팝업 스토어',
          'A pop-up for a fandom you love',
          '好きなジャンルのポップアップストア',
          '喜欢领域的快闪店',
          '喜歡領域的快閃店',
          'Pop-up đúng fandom kamu',
          'Pop-up sesuai minatmu'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '카드 명세서에서 가장 많이 나오는 항목은?',
      'On your card statement, which category shows up most?',
      'カード明細で一番多い項目は？',
      '信用卡账单里，哪一类支出最多？',
      '信用卡帳單裡，哪一類支出最多？',
      'Sao kê thẻ — mục nào xuất hiện nhiều nhất?',
      'Di mutasi kartu, kategori mana yang paling sering?'
    ),
    options: [
      {
        image: img(6, 'a'),
        label: M(
          '식비 & 배달비',
          'Food & delivery',
          '食費＆デリバリー',
          '餐饮与外卖',
          '餐飲與外送',
          'Ăn uống & giao đồ',
          'Makan & delivery'
        ),
        score: 0,
      },
      {
        image: img(6, 'b'),
        label: M(
          '패션 & 뷰티',
          'Fashion & beauty',
          'ファッション＆ビューティー',
          '服饰美妆',
          '服飾美妝',
          'Thời trang & làm đẹp',
          'Fashion & beauty'
        ),
        score: 1,
      },
      {
        image: img(6, 'c'),
        label: M(
          '여행 & 교통비',
          'Travel & transit',
          '旅行＆交通費',
          '旅行与交通',
          '旅行與交通',
          'Du lịch & đi lại',
          'Travel & transport'
        ),
        score: 2,
      },
      {
        image: img(6, 'd'),
        label: M(
          '취미 & 엔터테인먼트',
          'Hobbies & entertainment',
          '趣味＆エンタメ',
          '爱好与娱乐',
          '愛好與娛樂',
          'Sở thích & giải trí',
          'Hobi & hiburan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '여행 계획을 세울 때 가장 공들이는 부분은?',
      'When planning a trip, what do you invest the most effort in?',
      '旅行プランで一番力を入れるのは？',
      '做旅行计划时，你最花心思的是？',
      '做旅行計畫時，你最花心思的是？',
      'Lên kế hoạch du lịch — bạn đầu tư công sức nhất vào đâu?',
      'Saat rencanain trip — bagian mana yang paling kamu utamakan?'
    ),
    options: [
      {
        image: img(7, 'a'),
        label: M(
          '현지 맛집 & 카페 리스트 작성',
          'Building a food & cafe hit list',
          '現地グルメ＆カフェリストを作る',
          '列当地美食与咖啡厅清单',
          '列當地美食與咖啡廳清單',
          'List quán ăn & cafe địa phương',
          'Buat list makan & kafe lokal'
        ),
        score: 0,
      },
      {
        image: img(7, 'b'),
        label: M(
          '여행지별 쇼핑 스팟 & 브랜드 조사',
          'Researching shopping spots & brands per city',
          '都市ごとのショッピングスポット＆ブランド調査',
          '按城市做购物点与品牌功课',
          '按城市做購物點與品牌功課',
          'Research spot mua sắm & thương hiệu từng nơi',
          'Riset spot belanja & brand per kota'
        ),
        score: 1,
      },
      {
        image: img(7, 'c'),
        label: M(
          '감성 숙소 & 포토스팟 예약',
          'Booking aesthetic stays & photo spots',
          'おしゃれ宿＆フォトスポットを予約',
          '订氛围感住宿与打卡点',
          '訂氛圍感住宿與打卡點',
          'Book chỗ ở vibe & điểm chụp ảnh',
          'Booking penginapan estetik & spot foto'
        ),
        score: 2,
      },
      {
        image: img(7, 'd'),
        label: M(
          '현지 팝업·전시·이벤트 일정 확인',
          'Checking pop-ups, exhibits & events',
          '現地のポップアップ・展示・イベント日程をチェック',
          '查当地快闪、展览与活动日程',
          '查當地快閃、展覽與活動日程',
          'Lịch pop-up, triển lãm & event',
          'Jadwal pop-up, pameran & event lokal'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '오늘 기분이 너무 좋을 때 가장 하고 싶은 것은?',
      'On a really good day, what do you most want to do?',
      '今日ご機嫌なとき、一番やりたいことは？',
      '心情超好的一天，你最想做什么？',
      '心情超好的一天，你最想做什麼？',
      'Ngày cực vui — bạn muốn làm gì nhất?',
      'Hari super bahagia — paling pengen ngapain?'
    ),
    options: [
      {
        image: img(8, 'a'),
        label: M(
          '평소 못 가던 고급 레스토랑 도전',
          'Try that upscale restaurant you usually skip',
          '普段行けない高級レストランに挑戦',
          '挑战平时舍不得去的高级餐厅',
          '挑戰平時捨不得去的高級餐廳',
          'Thử nhà hàng xịn mãi chưa dám đi',
          'Coba restoran fancy yang biasanya dilewati'
        ),
        score: 0,
      },
      {
        image: img(8, 'b'),
        label: M(
          '망설이던 옷 or 가방 지르기',
          'Finally buy the clothes or bag you hesitated on',
          'ずっと迷っていた服かバッグを買う',
          '拿下犹豫很久的衣服或包',
          '拿下猶豫很久的衣服或包',
          'Tậu đồ/túi lưỡng lự mãi',
          'Beli baju/tas yang lama dipertimbangkan'
        ),
        score: 1,
      },
      {
        image: img(8, 'c'),
        label: M(
          '즉흥 1박 여행 예약',
          'Book a spontaneous one-night trip',
          '即興で一泊旅行を予約',
          '即兴订一晚小旅行',
          '即興訂一晚小旅行',
          'Book đi chơi 1 đêm spontaneous',
          'Booking trip menginap dadakan'
        ),
        score: 2,
      },
      {
        image: img(8, 'd'),
        label: M(
          '최애 관련 신상 굿즈 풀구매',
          'Buy the full new merch drop for your bias',
          '推しの新作グッズをフルで買う',
          '把本命新品周边一次买齐',
          '把本命新品周邊一次買齊',
          'Full set merch mới của bias',
          'Beli full set merch baru buat bias'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '백화점에서 가장 오래 머무는 층은?',
      'In a department store, which floor do you linger on longest?',
      'デパートで一番長くいるフロアは？',
      '在百货里，你待最久的是哪一层？',
      '在百貨裡，你待最久的是哪一層？',
      'Ở trung tâm thương mại — tầng nào bạn ở lâu nhất?',
      'Di department store — lantai mana paling lama kamu habiskan?'
    ),
    options: [
      {
        image: img(9, 'a'),
        label: M(
          '식품관 & 레스토랑 층',
          'Food hall & restaurant floor',
          '食品フロア＆レストラン階',
          '食品馆与餐饮层',
          '食品館與餐飲層',
          'Tầng food hall & nhà hàng',
          'Lantai food hall & restoran'
        ),
        score: 0,
      },
      {
        image: img(9, 'b'),
        label: M(
          '패션 & 잡화 층',
          'Fashion & accessories floor',
          'ファッション＆雑貨フロア',
          '服饰杂货层',
          '服飾雜貨層',
          'Tầng thời trang & phụ kiện',
          'Lantai fashion & aksesoris'
        ),
        score: 1,
      },
      {
        image: img(9, 'c'),
        label: M(
          '라이프스타일 & 여행용품 층',
          'Lifestyle & travel goods floor',
          'ライフスタイル＆旅行用品フロア',
          '生活方式与旅行用品层',
          '生活方式與旅行用品層',
          'Tầng lifestyle & đồ du lịch',
          'Lantai lifestyle & perlengkapan travel'
        ),
        score: 2,
      },
      {
        image: img(9, 'd'),
        label: M(
          '문화 행사 & 팝업 공간',
          'Culture events & pop-up space',
          'イベント＆ポップアップスペース',
          '文化活动与快闪空间',
          '文化活動與快閃空間',
          'Không gian event & pop-up',
          'Area event & pop-up'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '다음 달 월급을 상상할 때 가장 먼저 드는 생각은?',
      'When you imagine next month’s paycheck, what pops into your head first?',
      '来月の給料日を想像したとき、真っ先に浮かぶのは？',
      '想象下月工资时，你最先想到什么？',
      '想像下月工資時，你最先想到什麼？',
      'Tưởng tượng lương tháng sau — nghĩ đến gì trước?',
      'Bayangin gaji bulan depan — hal pertama yang kepikiran?'
    ),
    options: [
      {
        image: img(10, 'a'),
        label: M(
          '가고 싶었던 오마카세 예약',
          'Reserving omakase you have been craving',
          'ずっと行きたかったおまかせを予約',
          '预约心心念念的板前料理',
          '預約心心念念的板前料理',
          'Đặt omakase mơ ước',
          'Reserv omakase yang didam-damkan'
        ),
        score: 0,
      },
      {
        image: img(10, 'b'),
        label: M(
          '새 시즌 신상 쇼핑 리스트 정리',
          'Sorting a new-season shopping list',
          '新シーズンの新作ウィッシュリスト整理',
          '整理新一季购物清单',
          '整理新一季購物清單',
          'Dọn wishlist mùa mới',
          'Rapikan wishlist musim baru'
        ),
        score: 1,
      },
      {
        image: img(10, 'c'),
        label: M(
          '이번엔 어디 여행 갈까',
          'Where to travel this time?',
          '今度はどこに旅行しよう',
          '这次去哪旅行',
          '這次去哪旅行',
          'Lần này đi du lịch đâu',
          'Mau traveling ke mana ya'
        ),
        score: 2,
      },
      {
        image: img(10, 'd'),
        label: M(
          '다음 콘서트 or 이벤트 티켓팅',
          'Ticketing for the next concert or event',
          '次のライブやイベントのチケット争奪',
          '抢下一场演唱会或活动票',
          '搶下一場演唱會或活動票',
          'Săn vé concert/event kế tiếp',
          'War tiket konser/event berikutnya'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '나의 핸드폰 저장소에 가장 많은 것은?',
      'What fills most of your phone storage?',
      'スマホのストレージを一番占めるのは？',
      '手机存储里最多的是？',
      '手機儲存裡最多的是？',
      'Bộ nhớ điện thoại toàn cái gì nhất?',
      'Isi penyimpanan HP paling banyak apa?'
    ),
    options: [
      {
        image: img(11, 'a'),
        label: M(
          '맛집 & 음식 사진',
          'Food & restaurant photos',
          'グルメ＆料理写真',
          '美食与餐厅照片',
          '美食與餐廳照片',
          'Ảnh đồ ăn & quán',
          'Foto makanan & resto'
        ),
        score: 0,
      },
      {
        image: img(11, 'b'),
        label: M(
          '코디 & 쇼핑 스크린샷',
          'Outfit & shopping screenshots',
          'コーデ＆買い物スクショ',
          '穿搭与购物截图',
          '穿搭與購物截圖',
          'Screenshot outfit & belanja',
          'Screenshot outfit & belanja'
        ),
        score: 1,
      },
      {
        image: img(11, 'c'),
        label: M(
          '여행 & 풍경 사진',
          'Travel & scenery shots',
          '旅行＆風景写真',
          '旅行与风景照',
          '旅行與風景照',
          'Ảnh du lịch & phong cảnh',
          'Foto travel & pemandangan'
        ),
        score: 2,
      },
      {
        image: img(11, 'd'),
        label: M(
          '최애 & 덕질 관련 사진',
          'Bias & fandom photos',
          '推し＆オタク系の写真',
          '本命与追星相关照片',
          '本命與追星相關照片',
          'Ảnh bias & fandom',
          'Foto bias & koleksi fandom'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '나를 가장 잘 아는 친구가 내 소비를 한마디로 표현한다면?',
      'If your best friend summed up your spending in one line, what would it be?',
      '一番わかってる友達が、あなたの散財を一言で言うと？',
      '最懂你的朋友会用哪句话形容你的消费习惯？',
      '最懂你的朋友會用哪句話形容你的消費習慣？',
      'Bạn thân mô tả thói chi tiêu của bạn một câu thì sao?',
      'Teman terdekat ngejelasin kebiasaan belanjamu satu kalimat?',
    ),
    options: [
      {
        image: img(12, 'a'),
        label: M(
          '"얘는 음식에 진심이야"',
          '"They are dead serious about food."',
          '「こいつ、食い道楽が本気」',
          '“这家伙对吃是认真的。”',
          '「這傢伙對吃是認真的。」',
          '"Nó nghiện đồ ăn thật sự."',
          '"Dia tuh serius soal makan."'
        ),
        score: 0,
      },
      {
        image: img(12, 'b'),
        label: M(
          '"얘는 옷이 너무 많아"',
          '"Way too many clothes."',
          '「服の量がやばい」',
          '“衣服也太多了。”',
          '「衣服也太多了。」',
          '"Quần áo nhiều quá trời."',
          '"Bajunya kebanyakan."'
        ),
        score: 1,
      },
      {
        image: img(12, 'c'),
        label: M(
          '"얘는 여행 고수야"',
          '"Certified travel addict."',
          '「旅行の鬼」',
          '“旅行达人本达。”',
          '「旅行達人本達。」',
          '"Nghiện du lịch level pro."',
          '"Ahlinya traveling."'
        ),
        score: 2,
      },
      {
        image: img(12, 'd'),
        label: M(
          '"얘는 덕질에 재산 탕진 중"',
          '"Blowing savings on hobbies and merch."',
          '「推し活で財布が死んでる」',
          '“为爱好和周边掏空钱包。”',
          '「為愛好與周邊掏空錢包。」',
          '"Hết tiền vì đam mê & merch."',
          '"Habis duit buat hobi & merch."'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3TanjinjamSpendingTypeResults: Phase3TanjinjamSpendingTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🍜',
    title: M(
      '먹는 게 남는 거야, 먹방 탕진잼형',
      'Food First—Mukbang Splurge Type',
      '食べるが一番、グルメ散財タイプ',
      '吃才是正义·吃货剁手型',
      '吃才是正義·吃貨剁手型',
      'Ăn là chính — kiểu “hết tiền vì ăn”',
      'Makan nomor satu — tipe boros kuliner'
    ),
    shortDescription: M(
      '당신의 소비 행복 포인트는 단연 음식입니다.',
      'Your spending joy point is clearly food.',
      'あなたの散財ハッピーポイントは間違いなくグルメ。',
      '你的消费快乐点毫无疑问是吃。',
      '你的消費快樂點毫無疑問是吃。',
      'Điểm vui khi tiêu tiền của bạn chắc chắn là đồ ăn.',
      'Poin bahagia belanjamu jelas: makanan.'
    ),
    description: M(
      '맛집 탐방, 배달 음식, 고급 식재료, 오마카세까지. 음식 앞에서는 지갑이 자동으로 열립니다. 여행도 맛집이 없으면 의미가 없고, 기분 좋은 날도 슬픈 날도 맛있는 걸 먹으면 해결됩니다. 카드 명세서에서 식비가 가장 많이 나오는 것은 당연한 일입니다. "먹는 게 남는 거다"라는 말을 인생 철학으로 삼고 있는 타입입니다.',
      'Restaurant crawls, delivery feasts, premium ingredients, omakase—around food your wallet opens on autopilot. A trip without great bites feels empty; good or rough days, tasty food fixes it. Of course dining tops your card statement. You treat “you are what you eat” as a life motto.',
      '名店巡り、デリバリー、高級食材、おまかせまで。食べ物の前では財布が勝手に開きます。旅行もグルメがなければ意味がないし、ご機嫌な日も落ち込んだ日も、美味しいもので解決。明細で食費がトップなのは当然。「食べるが一番」を人生哲学にしているタイプです。',
      '探店、外卖、高级食材、板前料理……面对美食钱包自动打开。旅行没有好吃的就没灵魂；心情好坏都能用一顿解决。账单里餐饮排第一是常态。把“吃才是正经事”当人生信条。',
      '探店、外送、高級食材、板前料理……面對美食錢包自動打開。旅行沒有好吃的就沒靈魂；心情好壞都能用一頓解決。帳單裡餐飲排第一是常態。把「吃才是正經事」當人生信條。',
      'Ăn sành, ship đồ, nguyên liệu xịn, omakase — trước đồ ngon là ví tự mở. Đi chơi mà không có quán ngon thì thiếu vị; vui buồn gì cũng ăn là ổn. Sao kê toàn tiền ăn là chuyện đương nhiên. Triết lý: sống là để ăn ngon.',
      'Kulineran, delivery, bahan premium, omakase — di depan makanan dompet kebuka sendiri. Trip tanpa makan enak hambar; senang sedih juga selesai kalau makan enak. Tagihan makan paling besar itu wajar. Filosofi hidup: yang penting makan enak.'
    ),
    tanjinJamCategory: M(
      '먹방 탕진형 🍽️',
      'Foodie splurge 🍽️',
      'グルメ散財タイプ 🍽️',
      '吃货剁手型 🍽️',
      '吃貨剁手型 🍽️',
      'Kiểu hết tiền vì ăn 🍽️',
      'Tipe boros kuliner 🍽️'
    ),
    tanjinPoint: M(
      '맛집, 배달, 오마카세, 고급 식재료, 베이커리',
      'Hot restaurants, delivery, omakase, premium ingredients, bakeries',
      '名店、デリバリー、おまかせ、高級食材、ベーカリー',
      '网红店、外卖、板前、高级食材、烘焙',
      '網紅店、外送、板前、高級食材、烘焙',
      'Quán hot, ship đồ, omakase, nguyên liệu xịn, bakery',
      'Resto hits, delivery, omakase, bahan premium, roti'
    ),
    tanjinLevel: M(
      'Lv. 맛집 박사',
      'Lv. Restaurant PhD',
      'Lv. グルメ博士',
      '等级·探店博士',
      '等級·探店博士',
      'Lv. Bác sĩ quán ăn',
      'Lv. Dokter kuliner'
    ),
    tanjinSignature: M(
      '카드 명세서 1위가 항상 식비, 맛집 인스타 저장 폴더 수백 개',
      'Dining always tops your statement; hundreds of saved food IG folders',
      '明細トップはいつも食費、インスタのグルメ保存フォルダが何百個',
      '账单第一是餐饮，ins 存了几百个美食夹',
      '帳單第一是餐飲，IG 存了幾百個美食夾',
      'Sao kê: ăn uống luôn top; folder Instagram toàn quán',
      'Mutasi: makan selalu nomor satu; ratusan folder IG kuliner'
    ),
    monthlyPick: M(
      '못 가본 오마카세 드디어 예약해보기',
      'Finally book that omakase you never tried',
      '行けてなかったおまかせ、ついに予約する',
      '终于预约那家一直舍不得的板前',
      '終於預約那家一直捨不得的板前',
      'Cuối cùng đặt được omakase mơ ước',
      'Akhirnya reserv omakase yang ditunda-tunda'
    ),
    goodMatch: M(
      'Type 3 (여행 가서 현지 맛집 같이 탐방)',
      'Type 3 (travel buddies who food-crawl together)',
      'タイプ3（旅行で現地グルメを一緒に巡る相棒）',
      '类型3（旅行时一起扫当地美食）',
      '類型3（旅行時一起掃當地美食）',
      'Type 3 (đi chơi cùng săn quán local)',
      'Type 3 (partner jalan-jalan + hunting makan)'
    ),
    badMatch: M(
      'Type 4 (맛집 가자는데 굿즈샵 가자는 사람)',
      'Type 4 (wants merch shops when you want restaurants)',
      'タイプ4（グルメ行きたいのにグッズショップ行きたがる人）',
      '类型4（你想探店TA想去周边店）',
      '類型4（你想探店TA想去周邊店）',
      'Type 4 (bạn muốn ăn mà họ muốn shop merch)',
      'Type 4 (kamu mau makan, dia mau beli merch)'
    ),
    shareTypeName: M(
      '먹방 탕진잼형',
      'Foodie Splurge Type',
      'グルメ散財タイプ',
      '吃货剁手型',
      '吃貨剁手型',
      'Kiểu hết tiền vì ăn',
      'Tipe boros kuliner'
    ),
  },
  {
    type: 'Type2',
    emoji: '👗',
    title: M(
      '옷이 곧 나야, 패션·뷰티 탕진잼형',
      'Clothes Are Me—Fashion & Beauty Splurge Type',
      '服が私、ファッション＆ビューティー散財タイプ',
      '衣如本人·美妆时尚剁手型',
      '衣如本人·美妝時尚剁手型',
      'Áo là mình — kiểu shopping thời trang & beauty',
      'Outfit = aku — tipe boros fashion & beauty'
    ),
    shortDescription: M(
      '당신의 소비 행복 포인트는 나를 꾸미는 것입니다.',
      'Your spending joy is leveling up your look.',
      'あなたの散財ハッピーポイントは「自分を磨くこと」。',
      '你的消费快乐点在于打扮自己。',
      '你的消費快樂點在於打扮自己。',
      'Niềm vui tiêu tiền là chăm chỉnh chu ngoại hình.',
      'Bahagia belanjanya: invest penampilan.'
    ),
    description: M(
      '새 옷이 배송 왔을 때의 설렘, 올리브영에서 신상 뷰티 제품을 발견했을 때의 쾌감. 외모를 가꾸는 것이 자기계발이자 취미이자 행복입니다. 계절이 바뀔 때마다 옷장이 새로 채워지고, 한정판 컬래버 제품 앞에서는 자동으로 지갑이 열립니다. 옷방이 따로 있거나 있었으면 하는 타입입니다.',
      'The thrill of a new delivery, the rush of spotting new beauty drops—looking your best is growth, hobby, and joy. Each season refills your closet; limited collabs make your wallet open itself. You either have a walk-in closet or dream of one.',
      '届いた新しい服のときめき、ドラッグストアで新作コスメを見つけたときの高揚。外見を磨くことが自己投資であり趣味であり幸福。季節が変わるたびにクローゼットが更新され、限定コラボの前では財布が勝手に開きます。衣装部屋が別にある、か欲しいタイプです。',
      '新衣服到手的兴奋，在美妆集合店发现新品的快感——打理外表是成长、爱好和快乐。换季就填满衣柜；限量联名前钱包自动投降。梦想有独立衣帽间。',
      '新衣服到手的興奮，在藥妝店發現新品的快感——打理外表是成長、愛好和快樂。換季就填滿衣櫃；限量聯名前錢包自動投降。夢想有獨立衣帽間。',
      'Ship đồ mới tới là sướng, thấy mỹ phẩm mới là phấn khích — chăm ngoại hình là đầu tư, sở thích và hạnh phúc. Đổi mùa là đổi tủ đồ; collab limited là ví tự mở. Mơ có phòng quần áo riêng.',
      'Senangnya paket baju baru, greget lihat produk beauty baru — grooming itu invest, hobi, dan bahagia. Ganti musim = isi lemari lagi; collab limited = dompet kebuka. Pengen walk-in closet sendiri.'
    ),
    tanjinJamCategory: M(
      '패션·뷰티 탕진형 💄',
      'Fashion & beauty splurge 💄',
      'ファッション＆ビューティー散財 💄',
      '美妆时尚剁手型 💄',
      '美妝時尚剁手型 💄',
      'Hết tiền vì thời trang & làm đẹp 💄',
      'Boros fashion & beauty 💄'
    ),
    tanjinPoint: M(
      '신상 의류, 뷰티 제품, 한정판 컬래버, 명품 입문',
      'New drops, beauty hauls, limited collabs, first luxury buys',
      '新作アパレル、コスメ、限定コラボ、初めてのラグジュアリー',
      '新款服饰、美妆、限量联名、入门轻奢',
      '新款服飾、美妝、限量聯名、入門輕奢',
      'Đồ mới, mỹ phẩm, collab limited, bước vào đồ hiệu',
      'Baju baru, beauty, collab limited, mulai beli branded'
    ),
    tanjinLevel: M(
      'Lv. 패피 (패션피플)',
      'Lv. Certified fashion person',
      'Lv. ファッション人間',
      '等级·穿搭达人',
      '等級·穿搭達人',
      'Lv. Fashionista',
      'Lv. Fashionista'
    ),
    tanjinSignature: M(
      '옷장 앞에서 "입을 게 없다" 외치기, 코디 레퍼런스 스크린샷 수천 장',
      'Says “nothing to wear” in front of a full closet; thousands of outfit screenshots',
      'クローゼットの前で「着る服がない」と叫び、コーデ参考スクショが数千枚',
      '满柜衣服还喊没衣服穿，穿搭截图几千张',
      '滿櫃衣服還喊沒衣服穿，穿搭截圖幾千張',
      'Tủ đầy mà vẫn kêu không có gì mặc; screenshot outfit cả ngàn',
      'Lemari penuh tapi bilang nggak ada baju; screenshot OOTD ribuan'
    ),
    monthlyPick: M(
      '망설이던 그 가방, 이번 달만큼은 허락해주기',
      'Let yourself buy that bag you keep hesitating on—at least this month',
      'ずっと迷っていたあのバッグ、今月だけは許す',
      '犹豫很久的那只包，这个月就宠自己一次',
      '猶豫很久的那只包，這個月就寵自己一次',
      'Cái túi lưỡng lự mãi — tháng này cho phép mình nhé',
      'Tas yang lama dipendam — bulan ini izinkan diri sendiri beli'
    ),
    goodMatch: M(
      'Type 1 (쇼핑하고 맛있는 것도 먹는 황금 루틴)',
      'Type 1 (shop then feast—golden routine)',
      'タイプ1（買い物してから美味しいもの、黄金ルーティン）',
      '类型1（买完再吃，黄金组合）',
      '類型1（買完再吃，黃金組合）',
      'Type 1 (shopping xong đi ăn ngon — combo vàng)',
      'Type 1 (belanja lalu makan enak — rutin emas)'
    ),
    badMatch: M(
      'Type 5 (왜 굳이 새 옷을 사냐고 하는 사람)',
      'Type 5 (asks why you keep buying new clothes)',
      'タイプ5（なんでまた新しい服、と言う人）',
      '类型5（总问你怎么又买衣服）',
      '類型5（總問你怎麼又買衣服）',
      'Type 5 (hay hỏi sao lại mua áo mới)',
      'Type 5 (suka nanya kenapa beli baju lagi)'
    ),
    shareTypeName: M(
      '패션·뷰티 탕진잼형',
      'Fashion & Beauty Splurge Type',
      'ファッション＆ビューティー散財タイプ',
      '美妆时尚剁手型',
      '美妝時尚剁手型',
      'Kiểu thời trang & beauty',
      'Tipe fashion & beauty'
    ),
  },
  {
    type: 'Type3',
    emoji: '✈️',
    title: M(
      '비행기 타야 진짜 탕진, 여행·경험 탕진잼형',
      'Planes = Real Splurge—Travel & Experience Type',
      '飛行機に乗ってこそ本物の散財、旅行＆体験タイプ',
      '飞机一订才是真·剁手·旅行体验型',
      '飛機一訂才是真·剁手·旅行體驗型',
      'Cất cánh mới là tiêu thật — du lịch & trải nghiệm',
      'Naik pesawat baru kerasa boros bener — travel & pengalaman'
    ),
    shortDescription: M(
      '당신의 소비 행복 포인트는 새로운 경험과 여행입니다.',
      'Your spending joy is new experiences and travel.',
      'あなたの散財ハッピーポイントは新しい体験と旅行。',
      '你的消费快乐点是新体验与旅行。',
      '你的消費快樂點是新體驗與旅行。',
      'Niềm vui chi tiêu là trải nghiệm mới và du lịch.',
      'Bahagia belanjanya: pengalaman baru & traveling.'
    ),
    description: M(
      '항공권을 끊는 순간이 가장 행복하고, 여행지에서 쓰는 돈은 전혀 아깝지 않습니다. 물건보다 기억에 남는 경험이 훨씬 가치 있다는 철학을 가진 경험 중심 소비자입니다. 여행 계획을 세우는 것 자체가 취미이고, 다음 여행을 상상하는 것만으로도 행복해집니다. 통장이 텅텅 비어도 비행기 안에 있으면 그만입니다.',
      'Booking a flight is pure joy; money spent on the road never feels wasted. You are experience-first: memories beat stuff. Planning trips is your hobby; imagining the next one already makes you happy. Empty bank account, but if you are in the air, it is worth it.',
      '航空券を押した瞬間が一番幸せで、旅先での出費はまったく惜しくない。モノより思い出に価値を置く体験型。旅行計画を立てるのが趣味で、次の旅を想像するだけで幸せ。残高ゼロでも、機内にいればそれでいいタイプです。',
      '订票那一刻最快乐，旅途中的钱花得从不心疼。相信体验比物质更值得。做攻略是爱好，光想下次旅行就开心。余额见底，只要在飞机上就值。',
      '訂票那一刻最快樂，旅途中的錢花得從不心疼。相信體驗比物質更值得。做攻略是愛好，光想下次旅行就開心。餘額見底，只要在飛機上就值。',
      'Book vé là sướng nhất; tiền tiêu trên đường không thấy tiếc. Triết lý: kỷ niệm quan trọng hơn đồ đạc. Lên kế hoạch là sở thích; tưởng tượng chuyến sau là đủ vui. Hết tiền nhưng đang trên máy bay là OK.',
      'Booking tiket = bahagia; duit di jalan nggak sayang. Filosofi: pengalaman > barang. Rencanain trip itu hobinya; bayangin trip berikutnya udah senang. Saldo kosong asal sudah di pesawat.'
    ),
    tanjinJamCategory: M(
      '여행·경험 탕진형 🗺️',
      'Travel & experience splurge 🗺️',
      '旅行＆体験散財タイプ 🗺️',
      '旅行体验剁手型 🗺️',
      '旅行體驗剁手型 🗺️',
      'Du lịch & trải nghiệm 🗺️',
      'Travel & pengalaman 🗺️'
    ),
    tanjinPoint: M(
      '항공권, 감성 숙소, 현지 투어, 맛집 & 카페 탐방',
      'Flights, aesthetic stays, local tours, food & cafe crawls',
      '航空券、おしゃれ宿、現地ツアー、グルメ＆カフェ巡り',
      '机票、氛围住宿、当地游、美食咖啡扫街',
      '機票、氛圍住宿、當地遊、美食咖啡掃街',
      'Vé máy, chỗ ở vibe, tour local, ăn uống cafe',
      'Tiket pesawat, penginapan estetik, tur lokal, kuliner'
    ),
    tanjinLevel: M(
      'Lv. 세계 여행러',
      'Lv. Global wanderer',
      'Lv. 世界を旅する人',
      '等级·环球旅人',
      '等級·環球旅人',
      'Lv. Dân du lịch toàn cầu',
      'Lv. Pejalan dunia'
    ),
    tanjinSignature: M(
      '월급 = 다음 여행 적금, 여행 사진 갤러리 5천 장 이상',
      'Paycheck = next-trip fund; 5,000+ travel photos in your gallery',
      '給料＝次の旅行貯金、旅行写真ギャラリー5000枚超',
      '工资等于下次旅行基金，相册旅行照五千张起',
      '工資等於下次旅行基金，相簿旅行照五千張起',
      'Lương = quỹ trip tiếp; gallery >5000 ảnh du lịch',
      'Gaji = tabungan trip berikut; galeri ribuan foto travel'
    ),
    monthlyPick: M(
      '고민만 하던 그 여행지, 이번 달 항공권 끊기',
      'Book flights to that destination you only daydreamed about',
      'ずっと憧れていたあの旅行先、今月こそ航空券を押す',
      '这个月给心心念念的目的地出票',
      '這個月給心心念念的目的地出票',
      'Tháng này book vé đến nơi mơ mãi',
      'Bulan ini beli tiket ke destinasi yang lama dipendam'
    ),
    goodMatch: M(
      'Type 1 (여행 가서 현지 맛집 투어 최강 조합)',
      'Type 1 (travel + local food crawl dream team)',
      'タイプ1（旅先で現地グルメを巡る最強コンビ）',
      '类型1（旅行+当地美食扫街最强搭子）',
      '類型1（旅行+當地美食掃街最強搭子）',
      'Type 1 (đi chơi + ăn local — combo mạnh nhất)',
      'Type 1 (trip + hunting makan lokal — partner terbaik)'
    ),
    badMatch: M(
      'Type 2 (여행에서도 쇼핑만 하자는 사람)',
      'Type 2 (only wants shopping even on trips)',
      'タイプ2（旅行中も買い物だけしたがる人）',
      '类型2（出门旅行也只想买爆）',
      '類型2（出門旅行也只想買爆）',
      'Type 2 (đi chơi mà chỉ muốn shopping)',
      'Type 2 (traveling tapi maunya belanja doang)'
    ),
    shareTypeName: M(
      '여행·경험 탕진잼형',
      'Travel & Experience Splurge Type',
      '旅行＆体験散財タイプ',
      '旅行体验剁手型',
      '旅行體驗剁手型',
      'Kiểu du lịch & trải nghiệm',
      'Tipe travel & pengalaman'
    ),
  },
  {
    type: 'Type4',
    emoji: '🎮',
    title: M(
      '최애를 위해선 못 참지, 덕질·취미 탕진잼형',
      'For My Bias I Cannot Resist—Fandom & Hobby Splurge Type',
      '推しのためなら止まらない、オタク＆趣味散財タイプ',
      '为本命忍不住·追星爱好剁手型',
      '為本命忍不住·追星愛好剁手型',
      'Vì bias không nhịn được — fandom & hobi',
      'Demi bias nggak bisa nahan — fandom & hobi'
    ),
    shortDescription: M(
      '당신의 소비 행복 포인트는 좋아하는 것에 모든 것을 쏟는 것입니다.',
      'Your spending joy is pouring everything into what you love.',
      '好きなものに全ベットするのがあなたのハッピーポイント。',
      '你的快乐是把钱砸在热爱上。',
      '你的快樂是把錢砸在熱愛上。',
      'Niềm vui là đổ tiền vào điều mình mê.',
      'Bahagianya ngebuang duit buat hal yang disukai.'
    ),
    description: M(
      '콘서트 티켓, 한정판 굿즈, 게임 아이템, 피규어. 좋아하는 것 앞에서는 합리적인 소비자가 되는 것이 불가능합니다. 덕질이 삶의 원동력이고, 최애를 위한 지출은 투자라고 생각합니다. 주변에서 "또 샀어?" 소리를 달고 살지만 전혀 후회하지 않습니다. 행복의 기준이 명확한, 소비 철학이 뚜렷한 타입입니다.',
      'Concert tickets, limited merch, game items, figures—logic leaves the chat when it is something you love. Fandom fuels you; spending on your bias feels like investing. People say “you bought again?” and you still have zero regrets. Clear happiness rules, sharp spending philosophy.',
      'ライブチケット、限定グッズ、ゲームアイテム、フィギュア。好きの前では合理的な消費者になれません。推し活が生きがいで、推しへの出費は投資。周りに「また買ったの？」と言われても後悔ゼロ。幸福の基準がはっきりしたタイプです。',
      '演唱会票、限量周边、游戏道具、手办——热爱面前没有理性。追星是动力，给本命花钱等于投资。别人总问“又买？”但你从不后悔。快乐标准清晰，消费观鲜明。',
      '演唱會票、限量周邊、遊戲道具、公仔——熱愛面前沒有理性。追星是動力，給本命花錢等於投資。別人總問「又買？」但你從不後悔。快樂標準清晰，消費觀鮮明。',
      'Vé concert, merch limited, item game, figure — trước đam mê không có lý trí. Fandom là động lực; chi cho bias là đầu tư. Bị hỏi “mua nữa à?” nhưng không hối tiếc.',
      'Tiket konser, merch limited, item game, figure — di depan passion nggak ada logika. Fandom bahan bakar; belanja buat bias itu investasi. Disindir “beli lagi?” tetap nggak nyesel.'
    ),
    tanjinJamCategory: M(
      '덕질·취미 탕진형 🎭',
      'Fandom & hobby splurge 🎭',
      'オタク＆趣味散財 🎭',
      '追星爱好剁手型 🎭',
      '追星愛好剁手型 🎭',
      'Fandom & sở thích 🎭',
      'Fandom & hobi 🎭'
    ),
    tanjinPoint: M(
      '콘서트 티켓, 굿즈, 게임, 피규어, 취미 용품',
      'Concert tickets, merch, games, figures, hobby gear',
      'ライブチケット、グッズ、ゲーム、フィギュア、趣味グッズ',
      '演唱会票、周边、游戏、手办、爱好装备',
      '演唱會票、周邊、遊戲、公仔、愛好裝備',
      'Vé concert, merch, game, figure, đồ hobby',
      'Tiket konser, merch, game, figure, perlengkapan hobi'
    ),
    tanjinLevel: M(
      'Lv. 찐덕후',
      'Lv. Hardcore fan',
      'Lv. ガチオタ',
      '等级·硬核粉',
      '等級·硬核粉',
      'Lv. Fan cứng',
      'Lv. Fan garis keras'
    ),
    tanjinSignature: M(
      '티켓팅 실패 시 멘탈 붕괴, 굿즈 전시 공간 필요',
      'Ticket-war loss = mental breakdown; needs a merch display zone',
      'チケット落ちたらメンタル崩壊、グッズ展示スペース必須',
      '抢票失败心态崩，家里需要周边展示区',
      '搶票失敗心態崩，家裡需要周邊展示區',
      'Trượt vé là vỡ òa tinh thần; cần góc trưng merch',
      'Gagal war tiket = mental breakdown; perlu sudut pajang merch'
    ),
    monthlyPick: M(
      '덕질은 정신건강에 이롭습니다. 오늘도 지르세요',
      'Hobbies are self-care—treat yourself again today',
      '推し活はメンタルに良い。今日も買っていい',
      '爱好疗愈心灵，今天也可以下单',
      '愛好療癒心靈，今天也可以下單',
      'Đam mê tốt cho tinh thần — hôm nay cứ “chốt”',
      'Hobi itu self-care — hari ini juga boleh checkout'
    ),
    goodMatch: M(
      'Type 5 (홈 셋업으로 덕질 공간 꾸미기 시너지)',
      'Type 5 (home setup synergy for a fandom corner)',
      'タイプ5（部屋づくりで推しコーナーがシナジー）',
      '类型5（布置房间打造追星角，默契加成）',
      '類型5（佈置房間打造追星角，默契加成）',
      'Type 5 (trang trí nhà làm góc fandom — ăn ý)',
      'Type 5 (dekor rumah buat sudut fandom — sinergi)'
    ),
    badMatch: M(
      'Type 3 (여행 가자는데 굿즈 출시일이랑 겹치면 곤란)',
      'Type 3 (awkward when trips clash with merch drops)',
      'タイプ3（旅行とグッズ発売日が被ると地獄）',
      '类型3（想旅行却撞周边发售日就尴尬）',
      '類型3（想旅行卻撞周邊發售日就尷尬）',
      'Type 3 (muốn đi chơi mà trùng ngày drop merch — khó xử)',
      'Type 3 (mau traveling tapi bentrok rilis merch — ribet)'
    ),
    shareTypeName: M(
      '덕질·취미 탕진잼형',
      'Fandom & Hobby Splurge Type',
      'オタク＆趣味散財タイプ',
      '追星爱好剁手型',
      '追星愛好剁手型',
      'Kiểu fandom & sở thích',
      'Tipe fandom & hobi'
    ),
  },
  {
    type: 'Type5',
    emoji: '🏠',
    title: M(
      '집이 곧 나의 세계, 홈·라이프 탕진잼형',
      'Home Is My World—Home & Life Splurge Type',
      '家が私の世界、ホーム＆ライフ散財タイプ',
      '家即宇宙·居家生活剁手型',
      '家即宇宙·居家生活剁手型',
      'Nhà là thế giới — tô điểm nhà cửa',
      'Rumah = duniamu — tipe boros dekor rumah'
    ),
    shortDescription: M(
      '당신의 소비 행복 포인트는 나의 공간을 완벽하게 꾸미는 것입니다.',
      'Your spending joy is perfecting your space.',
      'あなたの散財ハッピーポイントは「自分の空間を完璧に整えること」。',
      '你的消费快乐点是把居住空间打磨到位。',
      '你的消費快樂點是把居住空間打磨到位。',
      'Niềm vui chi tiêu là hoàn thiện không gian sống.',
      'Bahagia belanjanya: menyempurnakan ruangmu.'
    ),
    description: M(
      '예쁜 조명 하나, 감성 있는 식물 하나, 새로 산 디퓨저 향기. 집을 가꾸는 것이 가장 큰 취미이자 행복입니다. 이케아, 다이소, 무인양품을 들르면 손이 자동으로 움직이고, 인테리어 계정을 팔로우하면서 새로운 아이디어를 끊임없이 수집합니다. 집이 예쁘면 굳이 밖에 나가지 않아도 행복한 타입입니다.',
      'One cute lamp, one moody plant, a new diffuser scent—making home cozy is your biggest hobby and joy. IKEA, dollar stores, MUJI: your hands move on autopilot. You follow interior accounts and collect ideas nonstop. If the place looks good, you are happy staying in.',
      'かわいい照明、癒しの観葉植物、新しいディフューザーの香り。家を整えることが最大の趣味であり幸福。IKEAや100均、無印に入ると手が勝手に動く。インテリアアカウントを追いかけアイデアを集め続ける。家が整っていれば外に出なくても幸せなタイプです。',
      '一盏灯、一株植物、新的香薰——打造舒服的家是最大爱好与快乐。逛宜家、百元店、无印良品手会自动加购。关注家居博主不停收藏灵感。家够美，宅着也幸福。',
      '一盞燈、一株植物、新的香氛——打造舒服的家是最大愛好與快樂。逛宜家、百元店、無印良品手會自動加購。關注家居博主不停收藏靈感。家夠美，宅著也幸福。',
      'Một đèn, một cây, tinh dầu mới — decor nhà là hobby và hạnh phúc lớn nhất. Vào IKEA, cửa 100 yên, MUJI là tay tự nhấc đồ. Follow acc nội thất suốt. Nhà đẹp là ở nhà cũng vui.',
      'Lampu kecil, tanaman, diffuser baru — dekor rumah adalah hobi & bahagia terbesar. Masuk IKEA, serba murah, MUJI tangan gerak sendiri. Follow akun interior terus. Rumah cakep = bahagia di rumah.'
    ),
    tanjinJamCategory: M(
      '홈·라이프 탕진형 🪴',
      'Home & life splurge 🪴',
      'ホーム＆ライフ散財 🪴',
      '居家生活剁手型 🪴',
      '居家生活剁手型 🪴',
      'Tô nhà cửa 🪴',
      'Dekor rumah 🪴'
    ),
    tanjinPoint: M(
      '인테리어 소품, 주방용품, 식물, 침구류, 향초·디퓨저',
      'Decor, kitchenware, plants, bedding, candles & diffusers',
      'インテリア小物、キッチン用品、観葉植物、寝具、キャンドル＆ディフューザー',
      '家居小物、厨房用品、绿植、床品、香薰蜡烛',
      '家居小物、廚房用品、綠植、床品、香氛蠟燭',
      'Đồ trang trí, bếp, cây, drap, nến & tinh dầu',
      'Dekor, peralatan dapur, tanaman, bedding, lilin & diffuser'
    ),
    tanjinLevel: M(
      'Lv. 홈 인테리어 마니아',
      'Lv. Home decor maniac',
      'Lv. インテリアマニア',
      '等级·家居布置控',
      '等級·家居佈置控',
      'Lv. Mê nội thất',
      'Lv. Pecinta dekor rumah'
    ),
    tanjinSignature: M(
      '이케아 가면 살 것 없다고 했다가 카트 가득 채워 나오기',
      'Walks into IKEA for “nothing,” leaves with a full cart',
      'IKEAに「買うものない」って言ってカゴいっぱい',
      '嘴上说去宜家不买东西，推车推满才出来',
      '嘴上去IKEA不買東西，推車推滿才出來',
      'Vào IKEA bảo không mua gì rồi đầy xe',
      'Masuk IKEA bilang nggak beli apa-apa, keluar keranjang penuh'
    ),
    monthlyPick: M(
      '망설이던 그 소품 하나로 집 분위기가 완전히 달라집니다. 지르세요',
      'That one decor piece you hesitated on can change the whole vibe—go for it',
      '迷っていた小物一つで部屋の空気が変わる。買っていい',
      '犹豫的那件小物能改变全屋氛围，下单吧',
      '猶豫的那件小物能改變全屋氛圍，下單吧',
      'Một món decor lưỡng lự đổi cả vibe nhà — mua đi',
      'Satu dekor yang ragu-ragu bisa ubah suasana — checkout aja'
    ),
    goodMatch: M(
      'Type 4 (예쁘게 꾸민 공간에서 같이 덕질)',
      'Type 4 (fandom nights in a pretty space)',
      'タイプ4（きれいに整った部屋で一緒に推し活）',
      '类型4（美房里一起追星同好）',
      '類型4（美房裡一起追星同好）',
      'Type 4 (fandom trong nhà xinh)',
      'Type 4 (fandom di ruangan yang aesthetic)'
    ),
    badMatch: M(
      'Type 3 (집을 이렇게 예쁘게 꾸며놨는데 여행을 가자고?)',
      'Type 3 (“We just styled the home—why leave for a trip?”)',
      'タイプ3（こんなに部屋を整えたのに旅行？）',
      '类型3（家都布置好了还要出门旅行？）',
      '類型3（家都佈置好了還要出門旅行？）',
      'Type 3 (nhà xinh thế mà đòi đi du lịch?)',
      'Type 3 (rumah udah cakep kok diajak traveling?)'
    ),
    shareTypeName: M(
      '홈·라이프 탕진잼형',
      'Home & Life Splurge Type',
      'ホーム＆ライフ散財タイプ',
      '居家生活剁手型',
      '居家生活剁手型',
      'Kiểu tô nhà cửa',
      'Tipe dekor rumah'
    ),
  },
];
