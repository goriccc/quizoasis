/** 내 방이 말해주는 나의 성격 — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 */

function L(
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

export interface Phase3RoomPersonalityAnalysisQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3RoomPersonalityAnalysisResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  personalityKeywords: Record<string, string>;
  idealRoomStyle: Record<string, string>;
  dreamRoomColors: Record<string, string>;
  keyFurniture: Record<string, string>;
  mustHaveItems: Record<string, string>;
  neverPut: Record<string, string>;
  dreamRoomQuote: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3RoomPersonalityAnalysisResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3RoomPersonalityAnalysisQuestions: Phase3RoomPersonalityAnalysisQuestion[] = [
  {
    id: 1,
    question: L(
      '지금 당장 들어가서 쉬고 싶은 방은?',
      'Which room do you want to walk into and rest in right now?',
      '今すぐ入って休みたい部屋は？',
      '现在最想进去休息的房间是？',
      '現在最想進去休息的房間是？',
      'Bạn muốn bước vào và nghỉ ngay bây giờ là phòng nào?',
      'Kamu ingin langsung masuk dan istirahat di kamar yang mana?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q1a.jpg',
        label: L(
          '흰 벽, 원목 바닥, 린넨 커튼의 깔끔한 미니멀 방',
          'Clean minimalist room: white walls, wood floor, linen curtains',
          '白壁・無垢床・リネンカーテンのすっきりミニマルな部屋',
          '白墙、木地板、亚麻窗帘的清爽极简房间',
          '白牆、木地板、亞麻窗簾的清爽極簡房間',
          'Tường trắng, sàn gỗ, rèm linen—phòng tối giản gọn gàng',
          'Dinding putih, lantai kayu, gorden linen—kamar minimalis rapi'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q1b.jpg',
        label: L(
          '식물이 가득하고 자연 소재로 꾸며진 보태니컬 방',
          'Botanical room full of plants and natural materials',
          '植物と天然素材で彩られたボタニカルな部屋',
          '绿植满满、天然材质装饰的植栽风房间',
          '綠植滿滿、天然材質裝飾的植栽風房間',
          'Phòng botanical đầy cây và đồ trang trí tự nhiên',
          'Kamar botanical penuh tanaman dan material alami'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q1c.jpg',
        label: L(
          '딥 컬러 벽지와 골드 조명의 다크 럭셔리 방',
          'Dark luxury room with deep-colored walls and gold lighting',
          'ディープカラーの壁とゴールド照明のダークラグジュアリーな部屋',
          '深色墙与金色照明的暗黑奢华房间',
          '深色牆與金色照明的暗黑奢華房間',
          'Phòng dark luxury: tường màu đậm và đèn vàng',
          'Kamar dark luxury: dinding warna gelap dan lampu emas'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q1d.jpg',
        label: L(
          '빈티지 포스터와 레트로 소품으로 가득한 개성 있는 방',
          'Eclectic room filled with vintage posters and retro decor',
          'ビンテージポスターとレトロ小物でいっぱいの個性派ルーム',
          '复古海报与怀旧摆件满满的个性房间',
          '復古海報與懷舊擺件滿滿的個性房間',
          'Phòng đầy poster vintage và đồ retro độc đáo',
          'Kamar penuh poster vintage dan dekor retro'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '침대 위 베딩으로 가장 끌리는 것은?',
      'What bedding on the bed attracts you most?',
      'ベッドの寝具で一番惹かれるのは？',
      '床上床品最吸引你的是？',
      '床上床品最吸引你的是？',
      'Bộ giường nào hút bạn nhất?',
      'Seprai/kasur seperti apa yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q2a.jpg',
        label: L(
          '새하얀 호텔식 화이트 베딩',
          'Crisp hotel-style all-white bedding',
          '真っ白なホテルライクなホワイトベッディング',
          '酒店风纯白床品',
          '飯店風純白床品',
          'Bộ ga trắng tinh kiểu khách sạn',
          'Seprai putih bersih ala hotel'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q2b.jpg',
        label: L(
          '내추럴 워싱 린넨 베이지 이불',
          'Natural washed linen duvet in beige',
          'ナチュラルなウォッシュリネンのベージュ掛け布団',
          '水洗亚麻米色被子',
          '水洗亞麻米色被子',
          'Chăn linen beige wash tự nhiên',
          'Selimut linen beige washed natural'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q2c.jpg',
        label: L(
          '딥 버건디 또는 딥 블루 벨벳 이불',
          'Deep burgundy or deep blue velvet duvet',
          'ディープバーガンディまたはディープブルーのベルベット掛け布団',
          '深酒红或深蓝色天鹅绒被',
          '深酒紅或深藍色天鵝絨被',
          'Chăn nhung burgundy hoặc xanh đậm',
          'Selimut beludru burgundy atau biru tua'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q2d.jpg',
        label: L(
          '빈티지 패치워크 또는 보헤미안 패턴 이불',
          'Vintage patchwork or bohemian pattern duvet',
          'ビンテージパッチワークまたはボヘミアン柄の掛け布団',
          '复古拼布或波西米亚图案被子',
          '復古拼布或波希米亞圖案被子',
          'Chăn patchwork vintage hoặc họa tiết bohemian',
          'Selimut patchwork vintage atau motif bohemian'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '책상 위 모습으로 가장 끌리는 것은?',
      'Which desk setup appeals to you most?',
      'デスクの景色で一番惹かれるのは？',
      '哪种书桌样貌最吸引你？',
      '哪種書桌樣貌最吸引你？',
      'Bạn thích setup bàn làm việc nào nhất?',
      'Setup meja kerja mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q3a.jpg',
        label: L(
          '깔끔하게 정리된 미니멀 책상. 노트북 하나만',
          'Minimal desk, perfectly tidy—just a laptop',
          'すっきり整ったミニマルデスク。ノートPCだけ',
          '整洁极简书桌，只有一台笔记本',
          '整潔極簡書桌，只有一台筆電',
          'Bàn tối giản gọn—chỉ một laptop',
          'Meja minimal rapi—hanya laptop'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q3b.jpg',
        label: L(
          '작은 화분과 자연 소재 소품이 있는 감성 책상',
          'Aesthetic desk with small plants and natural accents',
          '小さな鉢植えと天然素材の小物がある感性デスク',
          '小盆栽与自然材质摆件的氛围书桌',
          '小盆栽與天然材質擺件的氛圍書桌',
          'Bàn có cây nhỏ và đồ trang trí tự nhiên',
          'Meja dengan tanaman kecil dan aksen alami'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q3c.jpg',
        label: L(
          '아트북과 고급 문구류가 배치된 큐레이팅된 책상',
          'Curated desk with art books and fine stationery',
          'アートブックと上質な文房具が並んだキュレーションされたデスク',
          '艺术书与高级文具陈列的策展感书桌',
          '藝術書與高級文具陳列的策展感書桌',
          'Bàn curated: sách nghệ thuật và đồ dùng cao cấp',
          'Meja curated: buku seni dan alat tulis premium'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q3d.jpg',
        label: L(
          '피규어, 엽서, 개성 있는 소품들이 가득한 나만의 책상',
          'Your own desk packed with figures, postcards, and quirky items',
          'フィギュア、ポストカード、個性小物でいっぱいのマイデスク',
          '手办、明信片、个性小物满满的专属书桌',
          '公仔、明信片、個性小物滿滿的專屬書桌',
          'Bàn đầy figure, bưu thiếp và đồ lạ',
          'Meja penuh figure, kartu pos, dan koleksi unik'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '벽을 꾸민다면 어떤 스타일로?',
      'If you decorate the wall, which style?',
      '壁を飾るならどんなスタイル？',
      '装饰墙面的话会选哪种风格？',
      '裝飾牆面的話會選哪種風格？',
      'Nếu trang trí tường, bạn chọn phong cách nào?',
      'Kalau menghias dinding, gaya apa?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q4a.jpg',
        label: L(
          '아무것도 없는 흰 벽 그대로',
          'Plain white wall with nothing on it',
          '何もない白壁のまま',
          '留白大白墙',
          '留白大白牆',
          'Tường trắng trơn không treo gì',
          'Dinding putih polos tanpa hiasan'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q4b.jpg',
        label: L(
          '식물 그림자나 자연 소재 벽 장식',
          'Plant shadows or natural-material wall decor',
          '植物の影や天然素材の壁飾り',
          '植物影子或自然材质墙饰',
          '植物影子或天然材質牆飾',
          'Bóng cây hoặc đồ treo tường từ vật liệu tự nhiên',
          'Bayangan tanaman atau dekor dinding material alami'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q4c.jpg',
        label: L(
          '액자에 담긴 아트 프린트 또는 포토그래피',
          'Framed art prints or photography in a grid',
          '額装したアートプリントやフォトグラフィー',
          '装裱的艺术画或摄影作品',
          '裝裱的藝術畫或攝影作品',
          'Tranh in nghệ thuật hoặc ảnh trong khung',
          'Cetakan seni atau foto dalam bingkai'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q4d.jpg',
        label: L(
          '빈티지 포스터와 폴라로이드 사진이 가득한 갤러리 월',
          'Gallery wall full of vintage posters and Polaroids',
          'ビンテージポスターとポラロイドだらけのギャラリーウォール',
          '复古海报与拍立得贴满的照片墙',
          '復古海報與拍立得貼滿的照片牆',
          'Tường gallery poster vintage và Polaroid',
          'Dinding galeri penuh poster vintage dan Polaroid'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '조명 분위기로 가장 끌리는 것은?',
      'Which lighting mood draws you in most?',
      '照明の雰囲気で一番惹かれるのは？',
      '哪种灯光氛围最吸引你？',
      '哪種燈光氛圍最吸引你？',
      'Không khí ánh sáng nào hút bạn nhất?',
      'Suasana pencahayaan mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q5a.jpg',
        label: L(
          '자연광만으로 충분한 밝고 깨끗한 방',
          'Bright, clean room with daylight only',
          '自然光だけで十分な明るく清潔な部屋',
          '仅靠自然光就明亮干净的空间',
          '僅靠自然光就明亮乾淨的空間',
          'Phòng sáng sạch chỉ cần ánh sáng tự nhiên',
          'Ruang terang bersih hanya dengan cahaya alami'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q5b.jpg',
        label: L(
          '따뜻한 전구 조명과 캔들이 어우러진 방',
          'Warm bulb lights and candles together',
          '温かい電球照明とキャンドルが調和した部屋',
          '暖光灯泡与蜡烛交融的房间',
          '暖光燈泡與蠟燭交融的房間',
          'Đèn bóng ấm và nến hòa quyện',
          'Lampu bola hangat dan lilin'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q5c.jpg',
        label: L(
          '황금빛 플로어 램프의 드라마틱한 방',
          'Dramatic room with golden floor lamp glow',
          'ゴールドのフロアランプがドラマチックな部屋',
          '金色落地灯营造戏剧感的房间',
          '金色落地燈營造戲劇感的房間',
          'Phòng kịch tính với đèn sàn ánh vàng',
          'Ruang dramatis dengan lampu lantai emas'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q5d.jpg',
        label: L(
          '네온사인 또는 개성 있는 조명이 포인트인 방',
          'Room where neon or statement lighting is the star',
          'ネオンサインや個性照明が主役の部屋',
          '霓虹或造型灯是主角的房间',
          '霓虹或造型燈是主角的房間',
          'Phòng có neon hoặc đèn nổi bật',
          'Ruang dengan neon atau lampu statement'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '수납 방식으로 가장 끌리는 것은?',
      'Which storage style appeals to you most?',
      '収納スタイルで一番惹かれるのは？',
      '哪种收纳方式最吸引你？',
      '哪種收納方式最吸引你？',
      'Kiểu lưu trữ nào hút bạn nhất?',
      'Gaya penyimpanan mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q6a.jpg',
        label: L(
          '보이지 않도록 모두 수납장 안에. 표면은 깨끗하게',
          'Everything hidden in cabinets—surfaces stay clear',
          '全部収納の中に。見える面はスッキリ',
          '全部收进柜子里，台面空空如也',
          '全部收進櫃子裡，檯面空空如也',
          'Giấu hết trong tủ—mặt phẳng sạch sẽ',
          'Semua di lemari—permukaan kosong'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q6b.jpg',
        label: L(
          '자연 소재 바구니와 오픈 선반에 보기 좋게',
          'Natural baskets and open shelving, nicely arranged',
          '天然素材のバスケットとオープン棚に美しく',
          '天然材质篮与开放层板，赏心悦目',
          '天然材質籃與開放層板，賞心悅目',
          'Giỏ mây và kệ mở xếp đẹp',
          'Keranjang alami dan rak terbuka rapi'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q6c.jpg',
        label: L(
          '고급스러운 트레이와 박스로 정돈되게 디스플레이',
          'Luxury trays and boxes—curated display',
          '上質なトレイとボックスで整えてディスプレイ',
          '高级托盘与收纳盒，策展式陈列',
          '高級托盤與收納盒，策展式陳列',
          'Khay và hộp cao cấp—trưng bày curated',
          'Nampan dan kotak mewah—display curated'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q6d.jpg',
        label: L(
          '내가 좋아하는 것들을 전부 꺼내놓고 보이게',
          'Everything you love is out on display',
          '好きなものを全部出して見せる',
          '喜欢的东西全部摆出来展示',
          '喜歡的東西全部擺出來展示',
          'Đồ thích đều bày ra ngoài',
          'Semua koleksi favorit dipajang'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '바닥 소재로 가장 끌리는 것은?',
      'Which flooring material attracts you most?',
      '床材で一番惹かれるのは？',
      '哪种地面材质最吸引你？',
      '哪種地面材質最吸引你？',
      'Vật liệu sàn nào hút bạn nhất?',
      'Material lantai mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q7a.jpg',
        label: L(
          '밝고 깔끔한 화이트 오크 원목 바닥',
          'Bright, clean white oak hardwood',
          '明るくすっきりしたホワイトオークの無垢床',
          '明亮干净的白橡木地板',
          '明亮乾淨的白橡木地板',
          'Sàn gỗ sồi trắng sáng gọn',
          'Lantai kayu oak putih terang'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q7b.jpg',
        label: L(
          '자연스러운 결의 다크 월넛 원목 바닥',
          'Dark walnut hardwood with rich grain',
          '木目が美しいダークウォールナットの無垢床',
          '纹理自然的深色胡桃木地板',
          '紋理自然的深色胡桃木地板',
          'Sàn óc chó đậm vân đẹp',
          'Lantai walnut gelap serat kaya'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q7c.jpg',
        label: L(
          '광택 있는 고급 대리석 또는 타일 바닥',
          'Polished luxury marble or tile floor',
          '光沢のある高級大理石またはタイル床',
          '光泽感的高级大理石或瓷砖地面',
          '光澤感的高級大理石或磁磚地面',
          'Sàn đá cẩm thạch hoặc gạch bóng cao cấp',
          'Lantai marmer atau ubin mengilap mewah'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q7d.jpg',
        label: L(
          '패턴 있는 빈티지 타일 또는 헤링본 마루',
          'Patterned vintage tile or herringbone parquet',
          '柄ものビンテージタイルまたはヘリンボーンのフローリング',
          '花纹复古砖或人字拼地板',
          '花紋復古磚或人字拼地板',
          'Gạch vintage họa tiết hoặc sàn xương cá',
          'Ubin vintage bermotif atau parket herringbone'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '방 안 식물 스타일로 가장 끌리는 것은?',
      'Which plant style in a room appeals to you most?',
      '部屋の植物スタイルで一番惹かれるのは？',
      '房间里哪种植物风格最吸引你？',
      '房間裡哪種植物風格最吸引你？',
      'Phong cách cây trong phòng nào hút bạn nhất?',
      'Gaya tanaman di kamar mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q8a.jpg',
        label: L(
          '식물 없이 깨끗하게. 대신 드라이플라워 하나만',
          'No plants—just one bundle of dried flowers',
          '植物なしですっきり。その代わりドライフラワーを一束だけ',
          '不放绿植，只放一束干花',
          '不放綠植，只放一束乾花',
          'Không cây—chỉ một bó hoa khô',
          'Tanpa tanaman—sekuntum bunga kering'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q8b.jpg',
        label: L(
          '다양한 초록 식물이 창가를 가득 채운 모습',
          'Many green plants filling the window area',
          '様々な緑の植物が窓際をいっぱいに',
          '窗边摆满各种绿色植物',
          '窗邊擺滿各種綠色植物',
          'Đầy cây xanh quanh cửa sổ',
          'Penuh tanaman hijau di jendela'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q8c.jpg',
        label: L(
          '고급 화기에 담긴 관엽식물 하나만',
          'One statement foliage plant in a fine planter',
          '上質な鉢に一株の観葉植物だけ',
          '高级花盆里只放一株观叶植物',
          '高級花盆裡只放一株觀葉植物',
          'Một cây lá trong chậu sang trọng',
          'Satu tanaman daun dalam pot premium'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q8d.jpg',
        label: L(
          '선인장, 다육이, 개성 있는 식물들의 컬렉션',
          'A collection of cacti, succulents, and quirky plants',
          'サボテン、多肉、個性派植物のコレクション',
          '仙人掌、多肉与个性植物收藏',
          '仙人掌、多肉與個性植物收藏',
          'Bộ sưu tập xương rồng, sen đá',
          'Koleksi kaktus, sukulen, tanaman unik'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '소파나 의자 스타일로 가장 끌리는 것은?',
      'Which sofa or chair style draws you in most?',
      'ソファや椅子のスタイルで一番惹かれるのは？',
      '哪种沙发或椅子款式最吸引你？',
      '哪種沙發或椅子款式最吸引你？',
      'Kiểu sofa/ghế nào hút bạn nhất?',
      'Gaya sofa atau kursi mana yang paling menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q9a.jpg',
        label: L(
          '심플한 라인의 화이트 또는 베이지 패브릭 소파',
          'Simple-line white or beige fabric sofa',
          'シンプルなラインのホワイト／ベージュのファブリックソファ',
          '线条简洁的米白或米色布艺沙发',
          '線條簡潔的米白或米色布藝沙發',
          'Sofa vải trắng/ngà đường nét đơn giản',
          'Sofa kain putih/krem garis simpel'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q9b.jpg',
        label: L(
          '라탄 또는 우드 프레임의 내추럴 암체어',
          'Natural armchair with rattan or wood frame',
          'ラタンまたはウッドフレームのナチュラルアームチェア',
          '藤编或木框架的自然风单人椅',
          '藤編或木框架的自然風單人椅',
          'Ghế đơn mây hoặc khung gỗ tự nhiên',
          'Kursi santai rotan atau rangka kayu'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q9c.jpg',
        label: L(
          '딥 컬러 벨벳 체스터필드 소파',
          'Deep-colored velvet Chesterfield sofa',
          'ディープカラーのベルベットチェスターフィールドソファ',
          '深色天鹅绒切斯特菲尔德沙发',
          '深色天鵝絨切斯特菲爾德沙發',
          'Sofa Chesterfield nhung màu đậm',
          'Sofa Chesterfield beludru warna gelap'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q9d.jpg',
        label: L(
          '레트로 디자인의 컬러풀한 빈티지 소파',
          'Colorful vintage sofa with retro design',
          'レトロデザインのカラフルなビンテージソファ',
          '复古设计的多彩怀旧沙发',
          '復古設計的多彩懷舊沙發',
          'Sofa vintage nhiều màu phong cách retro',
          'Sofa vintage warna-warni retro'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '침구 위에 올려두고 싶은 쿠션은?',
      'Which cushions would you put on the bed?',
      '寝具の上に置きたいクッションは？',
      '你想在床上放哪种抱枕？',
      '你想在床上放哪種抱枕？',
      'Bạn muốn đặt gối ôm kiểu nào trên giường?',
      'Bantal seperti apa yang ingin kamu taruh di tempat tidur?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q10a.jpg',
        label: L(
          '흰색 또는 베이지 단색 리넨 쿠션 2개',
          'Two solid linen cushions in white or beige',
          'ホワイトまたはベージュの無地リネンクッション2つ',
          '白色或米色纯色亚麻抱枕两个',
          '白色或米色純色亞麻抱枕兩個',
          'Hai gối linen trơn trắng hoặc be',
          'Dua bantal linen polos putih atau krem'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q10b.jpg',
        label: L(
          '자연 소재로 만든 구겨진 보슬보슬 쿠션',
          'Soft, crumpled cushions in natural materials',
          '天然素材のくしゃっとしたふわふわクッション',
          '天然材质、略皱的毛绒抱枕',
          '天然材質、略皺的毛絨抱枕',
          'Gối xù vật liệu tự nhiên, hơi nhàu',
          'Bantal lembut material alami, sedikit kusut'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q10c.jpg',
        label: L(
          '금색 프린지 또는 벨벳 질감의 쿠션',
          'Gold fringe or velvet-textured cushions',
          'ゴールドフリンジまたはベルベット質感のクッション',
          '金色流苏或天鹅绒质感抱枕',
          '金色流蘇或天鵝絨質感抱枕',
          'Gối tua vàng hoặc nhung',
          'Bantal fringe emas atau beludru'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q10d.jpg',
        label: L(
          '패치워크 또는 자수 장식 보헤미안 쿠션',
          'Patchwork or embroidered bohemian cushions',
          'パッチワークまたは刺繍のボヘミアンクッション',
          '拼布或刺绣波西米亚抱枕',
          '拼布或刺繡波希米亞抱枕',
          'Gối bohemian patchwork hoặc thêu',
          'Bantal bohemian patchwork atau bordir'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '창문을 꾸미는 방식으로 더 끌리는 것은?',
      'Which window treatment appeals to you more?',
      '窓の飾り方でより惹かれるのは？',
      '哪种窗户装饰方式更吸引你？',
      '哪種窗戶裝飾方式更吸引你？',
      'Cách trang trí cửa sổ nào hút bạn hơn?',
      'Perapihan jendela mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q11a.jpg',
        label: L(
          '아무 커튼 없이 자연광을 최대한 들이는 통창',
          'Floor-to-ceiling glass with no curtains—max daylight',
          'カーテンなしで自然光を最大限に取り込む大開口',
          '无窗帘、引入最多自然光的通窗',
          '無窗簾、引入最多自然光的通窗',
          'Cửa kính lớn không rèm—tối đa ánh sáng',
          'Jendela besar tanpa gorden—cahaya maksimal'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q11b.jpg',
        label: L(
          '가볍게 흔들리는 린넨 쉬어 커튼',
          'Light linen sheer curtains that sway gently',
          'さらりと揺れるリネンのシアーカーテン',
          '轻轻飘动的亚麻纱帘',
          '輕輕飄動的亞麻紗簾',
          'Rèm linen mỏng nhẹ bay',
          'Gorden sheer linen bergoyang lembut'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q11c.jpg',
        label: L(
          '두꺼운 블랙아웃 또는 벨벳 커튼',
          'Thick blackout or velvet curtains',
          '厚手のブラックアウトまたはベルベットカーテン',
          '厚重的遮光或天鹅绒窗帘',
          '厚重的遮光或天鵝絨窗簾',
          'Rèm cản sáng dày hoặc nhung',
          'Gorden blackout tebal atau beludru'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q11d.jpg',
        label: L(
          '빈티지 패턴 또는 자수 장식 커튼',
          'Vintage pattern or embroidered curtains',
          'ビンテージ柄または刺繍のカーテン',
          '复古纹样或刺绣窗帘',
          '復古紋樣或刺繡窗簾',
          'Rèm họa tiết vintage hoặc thêu',
          'Gorden motif vintage atau bordir'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '내 방의 전체적인 분위기를 한마디로 표현한다면?',
      'How would you sum up your room’s vibe in one line?',
      '部屋全体の雰囲気を一言で表すと？',
      '用一句话形容你房间的整体氛围？',
      '用一句話形容你房間的整體氛圍？',
      'Một câu mô tả bầu không khí phòng bạn?',
      'Satu kalimat untuk suasana kamarmu?'
    ),
    options: [
      {
        image: 'p3_test_room_personality_analysis_q12a.jpg',
        label: L(
          '비워낼수록 더 완성되는 방',
          'The more you empty it, the more complete it feels',
          '空けるほど完成度が上がる部屋',
          '越空越完整的房间',
          '越空越完整的房間',
          'Càng tối giản càng hoàn chỉnh',
          'Semakin kosong semakin sempurna'
        ),
        score: 0,
      },
      {
        image: 'p3_test_room_personality_analysis_q12b.jpg',
        label: L(
          '자연 속에 있는 것처럼 생기 있는 방',
          'Alive, like being in nature indoors',
          '自然の中にいるような生き生きとした部屋',
          '像置身自然一样有生命力的房间',
          '像置身自然一樣有生命力的房間',
          'Sống động như ở giữa thiên nhiên',
          'Hidup seperti di alam'
        ),
        score: 1,
      },
      {
        image: 'p3_test_room_personality_analysis_q12c.jpg',
        label: L(
          '들어오는 순간 압도되는 고급스러운 방',
          'Luxurious—the moment you enter, it overwhelms',
          '入った瞬間に圧倒されるラグジュアリーな部屋',
          '一进门就被高级感震撼的房间',
          '一進門就被高級感震撼的房間',
          'Vào là thấy sang trọng áp đảo',
          'Mewah sejak langkah pertama masuk'
        ),
        score: 2,
      },
      {
        image: 'p3_test_room_personality_analysis_q12d.jpg',
        label: L(
          '구석구석 내 이야기가 담긴 방',
          'Every corner holds a piece of your story',
          '隅々に自分の物語が詰まった部屋',
          '每个角落都藏着自己的故事',
          '每個角落都藏著自己的故事',
          'Mỗi ngóc ngách đều có câu chuyện',
          'Setiap sudut punya cerita'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3RoomPersonalityAnalysisResults: Phase3RoomPersonalityAnalysisResult[] = [
  {
    type: 'Type1',
    emoji: '🤍',
    title: L(
      '비워낼수록 완성되는 사람, 미니멀리스트 🤍',
      'Finished by emptying—minimalist 🤍',
      '空けるほど完成する人、ミニマリスト 🤍',
      '越空越完整的人，极简主义者 🤍',
      '越空越完整的人，極簡主義者 🤍',
      'Người càng tối giản càng trọn vẹn—minimalist 🤍',
      'Makin minimalis makin utuh—minimalis 🤍'
    ),
    shortDescription: L(
      '당신의 방은 당신의 내면을 닮아 있습니다. 깨끗하고, 정돈되고, 군더더기가 없습니다.',
      'Your room mirrors your inner world—clean, orderly, nothing extra.',
      'あなたの部屋は内面の鏡。清潔で整い、余計なものがありません。',
      '你的房间像你的内心：干净、整齐、没有多余。',
      '你的房間像你的內心：乾淨、整齊、沒有多餘。',
      'Phòng bạn phản chiếu nội tâm—sạch, ngăn nắp, không thừa.',
      'Kamarmu mencerminkan batin—bersih, rapi, tanpa lebihan.'
    ),
    description: L(
      '당신은 복잡한 것보다 단순한 것에서 아름다움을 찾는 사람입니다. 방에 물건이 많으면 머릿속도 복잡해지는 느낌이 들고, 하나를 채우면 하나를 버려야 직성이 풀립니다. 이 성격은 집중력이 뛰어나고 본질을 꿰뚫는 능력과 연결됩니다. 사람들에게도 꾸밈없이 솔직하고 명확한 소통을 하는 타입입니다.',
      'You find beauty in simplicity more than clutter. Too many things in a room makes your mind feel crowded—add one thing, and you need to remove another. This links to strong focus and seeing the essence. You communicate clearly and honestly without pretense.',
      'あなたは複雑さよりシンプルさに美を見出します。物が多いと頭もごちゃつき、一つ足すなら一つ減らしたくなるタイプ。集中力と本質を見抜く力につながり、飾らず率直で明確なコミュニケーションをします。',
      '你更能在简单而非繁杂中发现美。东西一多脑子也乱，放进一件就想丢掉一件。这与专注力和看透本质有关；与人沟通也直率清晰。',
      '你更能在簡單而非繁雜中發現美。東西一多腦子也亂，放進一件就想丟掉一件。這與專注力和看透本質有關；與人溝通也直率清晰。',
      'Bạn thấy đẹp ở sự đơn giản hơn là đồ đạc lộn xộn. Nhiều đồ là đầu óc rối—thêm một món là muốn bớt một. Gắn với tập trung và nhìn thấu bản chất; giao tiếp rõ ràng, thật thà.',
      'Kamu menemukan keindahan dalam kesederhanaan. Terlalu banyak barang bikin pikiran sesak—nambah satu, harus kurangi satu. Terhubung dengan fokus dan melihat esensi; komunikasimu jujur dan jelas.'
    ),
    personalityKeywords: L(
      '명확함, 집중력, 절제, 본질 추구',
      'Clarity, focus, restraint, essence-seeking',
      '明確さ、集中、節制、本質志向',
      '清晰、专注、克制、追求本质',
      '清晰、專注、克制、追求本質',
      'Rõ ràng, tập trung, tiết chế, đuổi theo bản chất',
      'Jernih, fokus, menahan diri, mengejar esensi'
    ),
    idealRoomStyle: L(
      '북유럽 미니멀 (Scandinavian Minimal)',
      'Scandinavian Minimal',
      'スカンジナビアン・ミニマル',
      '北欧极简（斯堪的纳维亚）',
      '北歐極簡（斯堪地那維亞）',
      'Tối giản Bắc Âu (Scandinavian Minimal)',
      'Minimalis Skandinavia'
    ),
    dreamRoomColors: L(
      '화이트·베이지·웜 그레이·내추럴 우드',
      'White, beige, warm gray, natural wood',
      'ホワイト・ベージュ・ウォームグレー・ナチュラルウッド',
      '白色、米色、暖灰、原木',
      '白色、米色、暖灰、原木',
      'Trắng, be, xám ấm, gỗ tự nhiên',
      'Putih, krem, abu hangat, kayu alami'
    ),
    keyFurniture: L(
      '낮은 원목 침대 프레임, 숨겨진 수납장, 린넨 커튼',
      'Low wood bed frame, hidden storage, linen curtains',
      '低めの無垢ベッドフレーム、隠し収納、リネンカーテン',
      '矮木床架、隐藏收纳、亚麻窗帘',
      '矮木床架、隱藏收納、亞麻窗簾',
      'Khung giường gỗ thấp, tủ ẩn, rèm linen',
      'Rangka tempat tidur kayu rendah, penyimpanan tersembunyi, gorden linen'
    ),
    mustHaveItems: L(
      '드라이플라워 한 다발, 원목 트레이 하나',
      'One bundle of dried flowers, one wood tray',
      'ドライフラワー一束、ウッドトレイ一つ',
      '一束干花、一个木托盘',
      '一束乾花、一個木托盤',
      'Một bó hoa khô, một khay gỗ',
      'Seikat bunga kering, satu nampan kayu'
    ),
    neverPut: L(
      '쓸모없는 장식품, 보이는 전선, 쌓인 물건들',
      'Useless knickknacks, visible cords, piled clutter',
      '無意味な飾り、見える配線、積み上げた物',
      '无用装饰、外露电线、堆叠杂物',
      '無用裝飾、外露電線、堆疊雜物',
      'Đồ trang trí vô dụng, dây điện lộ, đồ chất đống',
      'Dekor sia-sia, kabel terlihat, barang menumpuk'
    ),
    dreamRoomQuote: L(
      'Less is more. 비울수록 더 나다워지는 공간',
      'Less is more. The more you clear, the more “you” the space becomes.',
      'Less is more。空けるほど、自分らしい空間に。',
      'Less is more。越留白越像自己。',
      'Less is more。越留白越像自己。',
      'Less is more. Càng dọn càng giống bạn.',
      'Less is more. Makin kosong makin jadi kamu.'
    ),
    goodMatch: L(
      'Type 2 (내추럴형과 함께하면 따뜻함이 더해짐)',
      'Type 2 (with a natural type, warmth adds up)',
      'Type 2（ナチュラル型と相性◎温かさプラス）',
      'Type 2（与自然型同住更添温暖）',
      'Type 2（與自然型同住更添溫暖）',
      'Type 2 (ở cùng kiểu natural thì ấm hơn)',
      'Type 2 (dengan tipe natural, hangatnya nambah)'
    ),
    badMatch: L(
      'Type 6 (컬렉터형과 함께 살면 매일 전쟁)',
      'Type 6 (living with a collector—daily war)',
      'Type 6（コレクター型と同居は毎日戦争）',
      'Type 6（与收藏型同住天天开战）',
      'Type 6（與收藏型同住天天開戰）',
      'Type 6 (ở với kiểu sưu tầm—chiến mỗi ngày)',
      'Type 6 (dengan kolektor—perang tiap hari)'
    ),
    shareTypeName: L(
      '미니멀리스트 🤍',
      'Minimalist 🤍',
      'ミニマリスト 🤍',
      '极简主义者 🤍',
      '極簡主義者 🤍',
      'Minimalist 🤍',
      'Minimalis 🤍'
    ),
  },
  {
    type: 'Type2',
    emoji: '🌿',
    title: L(
      '자연이 가장 편한 사람, 보태니컬 내추럴리스트 🌿',
      'Most at home in nature—botanical naturalist 🌿',
      '自然が一番落ち着く人、ボタニカル・ナチュラリスト 🌿',
      '在自然里最自在的人，植栽自然系 🌿',
      '在自然裡最自在的人，植栽自然系 🌿',
      'Gần gũi thiên nhiên nhất—botanical naturalist 🌿',
      'Paling nyaman di alam—naturalis botanical 🌿'
    ),
    shortDescription: L(
      '당신의 방에는 항상 살아있는 것이 있어야 합니다. 식물이든, 빛이든, 바람이든.',
      'Your room always needs something alive—plants, light, or breeze.',
      '部屋には常に“生きているもの”が必要。植物でも光でも風でも。',
      '你的房间总要有点生命力——植物、光或风。',
      '你的房間總要有點生命力——植物、光或風。',
      'Phòng bạn luôn cần thứ gì đó sống—cây, ánh sáng hoặc gió.',
      'Kamarmu selalu butuh sesuatu yang hidup—tanaman, cahaya, atau angin.'
    ),
    description: L(
      '당신은 인공적인 것보다 자연스러운 것에서 안정을 찾습니다. 방에 식물 하나가 들어오면 공간 전체가 살아나는 것을 느끼고, 자연 소재 소품들이 주는 텍스처에서 위안을 얻습니다. 이 성격은 감수성이 풍부하고 타인의 감정을 잘 읽는 능력과 연결됩니다. 억지스러운 것을 싫어하고 자연스러운 관계와 대화를 선호하는 타입입니다.',
      'You feel steadier in what feels natural than artificial. One plant can make the whole room feel alive; natural textures comfort you. This ties to rich empathy and reading others’ feelings. You dislike forced vibes and prefer easy, natural conversation.',
      '人工より自然なものに安心を感じます。植物が一つ入るだけで空間が生き、天然素材の質感に癒されます。感受性が豊かで人の感情を読むのが得意。無理は嫌いで、自然な関係と会話を好みます。',
      '比起人工你更从自然里获得安定。一株绿植就能让空间活起来，天然材质的触感给你安慰。这与丰富共情、读懂他人情绪有关；你讨厌生硬，偏爱自然的关系与对话。',
      '比起人工你更從自然裡獲得安定。一株綠植就能讓空間活起來，天然材質的觸感給你安慰。這與豐富共情、讀懂他人情緒有關；你討厭生硬，偏愛自然的關係與對話。',
      'Bạn an tâm hơn với điều tự nhiên hơn nhân tạo. Một cây đã làm cả phòng “sống”; chất liệu tự nhiên an ủi bạn. Gắn với đồng cảm và đọc cảm xúc; ghét gượng ép, thích quan hệ và chuyện trò tự nhiên.',
      'Kamu lebih tenang dengan hal alami. Satu tanaman sudah membuat ruangan hidup; tekstur alami menenangkan. Terhubung dengan empati; tidak suka dipaksakan, suka hubungan dan obrolan natural.'
    ),
    personalityKeywords: L(
      '감수성, 자연스러움, 따뜻함, 배려',
      'Sensitivity, natural warmth, care',
      '感受性、ナチュラルさ、温かさ、思いやり',
      '感性、自然感、温暖、体贴',
      '感性、自然感、溫暖、體貼',
      'Nhạy cảm, tự nhiên, ấm áp, quan tâm',
      'Sensitif, alami, hangat, peduli'
    ),
    idealRoomStyle: L(
      '보태니컬 내추럴 (Botanical Natural)',
      'Botanical Natural',
      'ボタニカル・ナチュラル',
      '植栽自然风',
      '植栽自然風',
      'Botanical Natural',
      'Botanical Natural'
    ),
    dreamRoomColors: L(
      '세이지 그린·테라코타·크림·어스 브라운',
      'Sage green, terracotta, cream, earth brown',
      'セージグリーン・テラコッタ・クリーム・アースブラウン',
      '鼠尾草绿、陶土色、奶油色、大地棕',
      '鼠尾草綠、陶土色、奶油色、大地棕',
      'Xanh sage, đất nung, kem, nâu đất',
      'Hijau sage, terrakota, krem, coklat tanah'
    ),
    keyFurniture: L(
      '라탄 암체어, 원목 오픈 선반, 마크라메 벽장식',
      'Rattan armchair, open wood shelves, macramé wall hanging',
      'ラタンアームチェア、無垢のオープン棚、マクラメ壁飾り',
      '藤编单人椅、原木开放层板、编织挂毯',
      '藤編單人椅、原木開放層板、編織掛毯',
      'Ghế đơn mây, kệ gỗ mở, treo tường macramé',
      'Kursi rotan, rak kayu terbuka, hiasan dinding macramé'
    ),
    mustHaveItems: L(
      '몬스테라 또는 폴리스키아스, 테라코타 화분, 워싱 린넨 이불',
      'Monstera or polysias, terracotta pot, washed linen duvet',
      'モンステラまたはポリシャス、テラコッタ鉢、ウォッシュリネンの掛け布団',
      '龟背竹或福禄桐、陶盆、水洗亚麻被',
      '龜背竹或福祿桐、陶盆、水洗亞麻被',
      'Monstera hoặc polysias, chậu đất nung, chăn linen wash',
      'Monstera atau polysias, pot terrakota, selimut linen washed'
    ),
    neverPut: L(
      '플라스틱 소재, 형광 조명, 인공 식물',
      'Plastic-heavy decor, harsh fluorescent light, fake plants',
      'プラスチック多用、蛍光灯直撃、フェイクグリーン',
      '塑料感过重、刺眼荧光灯、假植物',
      '塑膠感過重、刺眼日光燈、假植物',
      'Đồ nhựa lộ, đèn huỳnh quang chói, cây giả',
      'Dekor plastik berlebihan, neon menyilaukan, tanaman palsu'
    ),
    dreamRoomQuote: L(
      '실내에 있어도 자연 속에 있는 것처럼. 살아 숨 쉬는 공간',
      'Indoors, yet it feels like nature. A space that breathes.',
      '室内にいても自然の中にいるような。息づく空間。',
      '人在室内也像在自然里。会呼吸的空间。',
      '人在室內也像在自然裡。會呼吸的空間。',
      'Trong nhà mà như ở giữa thiên nhiên. Không gian thở.',
      'Di dalam tapi seperti di alam. Ruang yang bernapas.'
    ),
    goodMatch: L(
      'Type 1 (미니멀형과 함께하면 깔끔함이 더해짐)',
      'Type 1 (with a minimalist, cleanliness stacks nicely)',
      'Type 1（ミニマル型と相性◎すっきり感プラス）',
      'Type 1（与极简型一起更利落）',
      'Type 1（與極簡型一起更俐落）',
      'Type 1 (với tối giản—gọn thêm)',
      'Type 1 (dengan minimalis—makin rapi)'
    ),
    badMatch: L(
      'Type 4 (다크 럭셔리형과는 빛과 어둠의 전쟁)',
      'Type 4 (with dark luxury—light vs. shadow clash)',
      'Type 4（ダークラグジュアリー型とは光と影の戦い）',
      'Type 4（与暗黑奢华型是光与影之战）',
      'Type 4（與暗黑奢華型是光與影之戰）',
      'Type 4 (với dark luxury—đụng sáng tối)',
      'Type 4 (dengan dark luxury—perang terang gelap)'
    ),
    shareTypeName: L(
      '보태니컬 내추럴리스트 🌿',
      'Botanical naturalist 🌿',
      'ボタニカル・ナチュラリスト 🌿',
      '植栽自然系 🌿',
      '植栽自然系 🌿',
      'Naturalist botanical 🌿',
      'Naturalis botanical 🌿'
    ),
  },
  {
    type: 'Type3',
    emoji: '🖼️',
    title: L(
      '취향이 뚜렷한 사람, 모던 큐레이터 🖼️',
      'Clear taste—modern curator 🖼️',
      '好みがはっきりした人、モダン・キュレーター 🖼️',
      '品味清晰的人，现代策展型 🖼️',
      '品味清晰的人，現代策展型 🖼️',
      'Gu rõ ràng—curator hiện đại 🖼️',
      'Selera jelas—kurator modern 🖼️'
    ),
    shortDescription: L(
      '당신의 방은 하나의 전시공간입니다. 모든 것이 의도를 갖고 배치되어 있습니다.',
      'Your room is a gallery—everything is placed on purpose.',
      'あなたの部屋はギャラリー。すべて意図を持って配置されています。',
      '你的房间像展厅，每件都有意图。',
      '你的房間像展廳，每件都有意圖。',
      'Phòng bạn như phòng trưng bày—mọi thứ có chủ đích.',
      'Kamarmu seperti galeri—semua ditempatkan dengan maksud.'
    ),
    description: L(
      '당신은 아무 물건이나 두지 않습니다. 하나를 들일 때 오래 고르고, 한 번 정한 것은 완벽하게 배치합니다. 방을 꾸미는 과정 자체가 당신에게는 즐거운 작업입니다. 이 성격은 심미안이 뛰어나고 세부적인 것까지 신경 쓰는 완벽주의 성향과 연결됩니다. 사람들에게 좋은 것을 추천해주고 싶고, 취향을 나누는 것을 즐기는 타입입니다.',
      'You don’t place random things. You take time choosing, and what you choose lands perfectly. Styling the room is fun labor for you. This links to strong aesthetics and perfectionism down to details. You love recommending good finds and sharing taste.',
      '何でも置く人ではありません。一つ入れるのに時間をかけ、決めたら完璧に配置。部屋を整える過程自体が楽しい。美的感覚と細部まで気を配る完璧主義。おすすめをしたくて、趣味の共有が好きです。',
      '你不会随便摆东西。会花时间挑选，定下就摆到位。布置房间对你本身就是乐事。这与审美与细节控的完美主义有关；你喜欢推荐好物、分享品味。',
      '你不會隨便擺東西。會花時間挑選，定下就擺到位。佈置房間對你本身就是樂事。這與審美與細節控的完美主義有關；你喜歡推薦好物、分享品味。',
      'Bạn không đặt đồ bừa bãi. Chọn lâu, đặt xong là khớp. Trang trí phòng là niềm vui. Gắn với thẩm mỹ và cầu toàn chi tiết; thích gợi ý và chia sẻ gu.',
      'Kamu tidak meletakkan barang sembarangan. Pilih lama, pasang sempurna. Mendekor ruangan itu menyenangkan. Terhubung estetika dan perfeksionis detail; suka rekomendasi dan bagi selera.'
    ),
    personalityKeywords: L(
      '심미안, 완벽주의, 큐레이팅, 취향 공유',
      'Aesthetics, perfectionism, curation, taste-sharing',
      '美的感覚、完璧主義、キュレーション、趣味の共有',
      '审美、完美主义、策展、分享品味',
      '審美、完美主義、策展、分享品味',
      'Thẩm mỹ, cầu toàn, curation, chia sẻ gu',
      'Estetika, perfeksionisme, kurasi, bagi selera'
    ),
    idealRoomStyle: L(
      '모던 큐레이팅 (Modern Curated)',
      'Modern Curated',
      'モダン・キュレーテッド',
      '现代策展风',
      '現代策展風',
      'Modern Curated',
      'Modern Curated'
    ),
    dreamRoomColors: L(
      '딥 그린·크림·블랙·골드 포인트',
      'Deep green, cream, black, gold accents',
      'ディープグリーン・クリーム・ブラック・ゴールドアクセント',
      '深绿、奶油、黑色、金色点缀',
      '深綠、奶油、黑色、金色點綴',
      'Xanh đậm, kem, đen, điểm nhấn vàng',
      'Hijau tua, krem, hitam, aksen emas'
    ),
    keyFurniture: L(
      '아크 플로어 램프, 대리석 사이드 테이블, 갤러리 월',
      'Arc floor lamp, marble side table, gallery wall',
      'アークフロアランプ、大理石サイドテーブル、ギャラリーウォール',
      '弧形落地灯、大理石边几、照片墙',
      '弧形落地燈、大理石邊几、照片牆',
      'Đèn sàn vòm, bàn mặt đá, tường gallery',
      'Lampu lantai lengkung, meja samping marmer, dinding galeri'
    ),
    mustHaveItems: L(
      '하드커버 아트북, 우아한 화기, 블랙 프레임 아트 프린트',
      'Hardcover art books, elegant vase, black-framed prints',
      'ハードカバーのアートブック、上品な花器、黒フレームのプリント',
      '精装艺术书、雅致花器、黑框画',
      '精裝藝術書、雅致花器、黑框畫',
      'Sách nghệ thuật bìa cứng, bình hoa thanh lịch, tranh khung đen',
      'Buku seni hardcover, vas anggun, cetakan bingkai hitam'
    ),
    neverPut: L(
      '아무 물건이나 사서 두기, 정리 안 된 선반',
      'Buying random decor, messy open shelves',
      '適当に買って置く、整理されていない棚',
      '随便买来乱摆、收纳乱的层板',
      '隨便買來亂擺、收納亂的層板',
      'Mua đại để đại, kệ lộn xộn',
      'Beli asal taruh, rak berantakan'
    ),
    dreamRoomQuote: L(
      '들어오는 순간 이 사람이 어떤 사람인지 알 수 있는 공간',
      'The moment you enter, you can tell who lives here.',
      '入った瞬間に「この人がどんな人か」わかる空間。',
      '一进门就能知道这是什么样的人的空间。',
      '一進門就能知道這是什麼樣的人的空間。',
      'Bước vào là biết chủ nhân là người thế nào.',
      'Begitu masuk sudah tahu pemiliknya seperti apa.'
    ),
    goodMatch: L(
      'Type 4 (럭셔리형과 함께하면 더 완성도 높은 공간이 됨)',
      'Type 4 (with luxury type—higher polish together)',
      'Type 4（ラグジュアリー型と相性◎完成度アップ）',
      'Type 4（与奢华型一起完成度更高）',
      'Type 4（與奢華型一起完成度更高）',
      'Type 4 (với kiểu luxury—độ hoàn thiện cao hơn)',
      'Type 4 (dengan tipe luxury—lebih matang)'
    ),
    badMatch: L(
      'Type 6 (컬렉터형의 어수선함이 스트레스)',
      'Type 6 (collector clutter stresses you)',
      'Type 6（コレクター型のごちゃつきがストレス）',
      'Type 6（收藏型的杂乱让你压力）',
      'Type 6（收藏型的雜亂讓你壓力）',
      'Type 6 (bừa bộn kiểu collector gây stress)',
      'Type 6 (berantakan kolektor bikin stres)'
    ),
    shareTypeName: L(
      '모던 큐레이터 🖼️',
      'Modern curator 🖼️',
      'モダン・キュレーター 🖼️',
      '现代策展型 🖼️',
      '現代策展型 🖼️',
      'Curator hiện đại 🖼️',
      'Kurator modern 🖼️'
    ),
  },
  {
    type: 'Type4',
    emoji: '🖤',
    title: L(
      '공간도 드라마가 있어야 하는 사람, 다크 럭셔리스트 🖤',
      'Space needs drama—dark luxury soul 🖤',
      '空間にもドラマが必要な人、ダークラグジュアリスト 🖤',
      '空间也要有戏剧感的人，暗黑奢华系 🖤',
      '空間也要有戲劇感的人，暗黑奢華系 🖤',
      'Không gian cần drama—dark luxury 🖤',
      'Ruang harus dramatis—dark luxury 🖤'
    ),
    shortDescription: L(
      '당신의 방에 들어서면 다른 세계로 넘어온 것 같은 느낌이 납니다.',
      'Walking in feels like stepping into another world.',
      '入ると別世界に来たような感覚。',
      '一进门像进入另一个世界。',
      '一進門像進入另一個世界。',
      'Bước vào như sang thế giới khác.',
      'Masuk seperti dunia lain.'
    ),
    description: L(
      '밝고 화사한 것보다 깊고 극적인 것에서 아름다움을 느끼는 당신. 딥 컬러 벽, 황금빛 조명, 벨벳 소재가 만들어내는 분위기가 당신의 내면을 표현합니다. 이 성격은 강한 존재감과 개성, 자기만의 세계관이 뚜렷한 것과 연결됩니다. 표면적으로는 차갑게 보일 수 있지만 자신의 세계로 초대한 사람에게는 누구보다 깊은 면을 보여주는 타입입니다.',
      'You find beauty in depth and drama more than bright and airy. Deep walls, gold light, velvet mood express your inner world. This ties to strong presence and a clear personal universe. You can seem cool on the surface, but those you invite in see your deepest side.',
      '明るさより深さとドラマに美を感じるあなた。深い壁色、ゴールドの光、ベルベットの空気が内面を表します。存在感と独自の世界観。一見クールでも、招いた人には誰より深い一面を見せます。',
      '比起明亮你更从深邃与戏剧感里感受美。深色墙、金色光、丝绒氛围表达内心。这与强烈存在感与鲜明自我世界有关；表面冷淡，对受邀进入你世界的人却最深。',
      '比起明亮你更從深邃與戲劇感裡感受美。深色牆、金色光、絲絨氛圍表達內心。這與強烈存在感與鮮明自我世界有關；表面冷淡，對受邀進入你世界的人卻最深。',
      'Bạn thấy đẹp ở chiều sâu và drama hơn sáng choang. Tường đậm, ánh vàng, nhung thể hiện nội tâm. Gắn với sự hiện diện mạnh và vũ trụ riêng; ngoài lạnh trong người được mời vào thấy sâu nhất.',
      'Kamu menemukan keindahan di kedalaman dan drama. Dinding gelap, cahaya emas, beludru mengekspresikan batinmu. Ada dunia pribadi yang kuat; terlihat dingin tapi ke orang yang kamu undang kamu paling dalam.'
    ),
    personalityKeywords: L(
      '강한 개성, 드라마틱, 독보적 세계관, 깊이 있는 매력',
      'Strong personality, dramatic, unique worldview, deep charm',
      '強い個性、ドラマチック、独自の世界観、深い魅力',
      '强个性、戏剧感、独特世界观、深层魅力',
      '強個性、戲劇感、獨特世界觀、深層魅力',
      'Cá tính mạnh, kịch tính, thế giới riêng, sức hút sâu',
      'Kepribadian kuat, dramatis, dunia unik, pesona dalam'
    ),
    idealRoomStyle: L(
      '다크 럭셔리 (Dark Luxury)',
      'Dark Luxury',
      'ダークラグジュアリー',
      '暗黑奢华',
      '暗黑奢華',
      'Dark Luxury',
      'Dark Luxury'
    ),
    dreamRoomColors: L(
      '딥 버건디·포레스트 그린·블랙·골드',
      'Deep burgundy, forest green, black, gold',
      'ディープバーガンディ・フォレストグリーン・ブラック・ゴールド',
      '深酒红、森林绿、黑色、金色',
      '深酒紅、森林綠、黑色、金色',
      'Đỏ burgundy, xanh rừng, đen, vàng',
      'Burgundy, hijau hutan, hitam, emas'
    ),
    keyFurniture: L(
      '벨벳 체스터필드 소파, 골드 플로어 램프, 두꺼운 블랙아웃 커튼',
      'Velvet Chesterfield sofa, gold floor lamp, heavy blackout curtains',
      'ベルベットのチェスターフィールドソファ、ゴールドフロアランプ、厚手ブラックアウトカーテン',
      '丝绒切斯特沙发、金色落地灯、厚重遮光帘',
      '絲絨切斯特沙發、金色落地燈、厚重遮光簾',
      'Sofa Chesterfield nhung, đèn sàn vàng, rèm cản sáng dày',
      'Sofa Chesterfield beludru, lampu lantai emas, gorden blackout tebal'
    ),
    mustHaveItems: L(
      '향초 여러 개, 아트 프린트, 대형 거울',
      'Several scented candles, art prints, oversized mirror',
      '香りのキャンドル複数、アートプリント、大型ミラー',
      '多支香薰蜡烛、艺术画、大镜子',
      '多支香氛蠟燭、藝術畫、大鏡子',
      'Nến thơm, tranh in, gương lớn',
      'Lilin wangi, cetakan seni, cermin besar'
    ),
    neverPut: L(
      '화이트 계열 가구, 밝은 파스텔 소품',
      'All-white furniture sets, loud pastel knickknacks',
      'オールホワイトの家具セット、派手なパステル小物',
      '全屋白家具、扎眼 pastel 小物',
      '全屋白家具、刺眼 pastel 小物',
      'Nội thất trắng toàn bộ, đồ pastel chói',
      'Furniture serba putih, pastel mencolok'
    ),
    dreamRoomQuote: L(
      '이 공간에서는 다른 사람이 되는 것 같아. 나만의 성',
      'In this room I feel like someone else—a castle of my own.',
      'この空間では別の自分になれる。私だけの城。',
      '在这个空间里像变成另一个人。只属于我的城。',
      '在這個空間裡像變成另一個人。只屬於我的城。',
      'Ở đây như thành người khác—thành trì của riêng mình.',
      'Di sini seperti jadi orang lain—istanaku sendiri.'
    ),
    goodMatch: L(
      'Type 3 (큐레이터형과 함께하면 더 완성된 드라마)',
      'Type 3 (with a curator—drama levels up)',
      'Type 3（キュレーター型と相性◎ドラマが完成）',
      'Type 3（与策展型一起戏剧更完整）',
      'Type 3（與策展型一起戲劇更完整）',
      'Type 3 (với curator—drama trọn hơn)',
      'Type 3 (dengan kurator—drama lebih matang)'
    ),
    badMatch: L(
      'Type 2 (보태니컬형의 밝은 에너지와 충돌)',
      'Type 2 (clashes with bright botanical energy)',
      'Type 2（ボタニカル型の明るさと衝突）',
      'Type 2（与植栽自然系的明亮能量相冲）',
      'Type 2（與植栽自然系的明亮能量相衝）',
      'Type 2 (đụng năng lượng sáng botanical)',
      'Type 2 (bentrok dengan energi terang botanical)'
    ),
    shareTypeName: L(
      '다크 럭셔리스트 🖤',
      'Dark luxury type 🖤',
      'ダークラグジュアリスト 🖤',
      '暗黑奢华系 🖤',
      '暗黑奢華系 🖤',
      'Dark luxury 🖤',
      'Dark luxury 🖤'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌈',
    title: L(
      '자유롭고 이야기 많은 사람, 보헤미안 빈티지러 🌈',
      'Free-spirited storyteller—bohemian vintage 🌈',
      '自由で物語が多い人、ボヘミアン・ヴィンテージ 🌈',
      '自由又多故事的人，波西米亚复古系 🌈',
      '自由又多故事的人，波西米亞復古系 🌈',
      'Tự do và nhiều chuyện—bohemian vintage 🌈',
      'Bebas dan penuh cerita—bohemian vintage 🌈'
    ),
    shortDescription: L(
      '당신의 방에는 당신의 인생이 담겨 있습니다. 구석구석 들여다볼수록 이야기가 나옵니다.',
      'Your room holds your life story—the more you look, the more stories appear.',
      '部屋にはあなたの人生が詰まっています。隅々を見れば見るほど物語が出てきます。',
      '你的房间装着人生，越看越有的聊。',
      '你的房間裝著人生，越看越有的聊。',
      'Phòng bạn chứa cả đời—càng nhìn càng có chuyện.',
      'Kamarmu penuh hidupmu—mak dilihat mak banyak cerita.'
    ),
    description: L(
      '규칙 없이 자유롭고, 정해진 스타일보다 내가 좋아하는 것들이 모인 공간을 사랑하는 당신. 여행지 기념품, 오래된 책, 친구에게 받은 선물이 함께 어우러진 방이 가장 편안합니다. 이 성격은 풍부한 감수성과 다양한 경험에 열린 태도, 관계를 소중히 여기는 따뜻함과 연결됩니다. 사람들이 당신 방에 오면 이것저것 물어보면서 시간 가는 줄 모르는 타입입니다.',
      'You love freedom without rigid rules—a space where things you love gather beats a fixed style. Souvenirs, old books, gifts from friends layered together feel like home. This links to rich sensitivity, openness to experience, and valuing relationships. Guests ask about everything and lose track of time.',
      '決まったスタイルより、好きなものが集まる空間を愛するあなた。旅のお土産、古い本、友からの贈り物が混ざる部屋が一番落ち着く。感受性と経験への開放、人との絆。来客はあれこれ聞いて時間を忘れます。',
      '你不爱条条框框，更爱喜欢之物堆在一起的家。旅行纪念品、旧书、朋友礼物混在一起最安心。这与丰富感性、开放体验、重视关系有关；朋友来会东问西问忘了时间。',
      '你不愛條條框框，更愛喜歡之物堆在一起的家。旅行紀念品、舊書、朋友禮物混在一起最安心。這與豐富感性、開放體驗、重視關係有關；朋友來會東問西問忘了時間。',
      'Bạn thích không gian gom đồ yêu thích hơn một style cố định. Quà du lịch, sách cũ, quà bạn—trộn lại là nhà. Gắn với nhạy cảm, cởi mở trải nghiệm, trân trọng quan hệ; khách hỏi đủ thứ quên giờ.',
      'Kamu suka ruang berisi hal favoritmu, bukan gaya kaku. Suvenir, buku lama, hadiah teman—nyampur jadi rumah. Sensitif, terbuka pengalaman, menghargai hubungan; tamu lupa waktu bertanya.'
    ),
    personalityKeywords: L(
      '자유로움, 감수성, 풍부한 경험, 관계 중시',
      'Freedom, sensitivity, rich experience, relationships first',
      '自由、感受性、経験への開放、人間関係重視',
      '自由、感性、丰富体验、重视关系',
      '自由、感性、豐富體驗、重視關係',
      'Tự do, nhạy cảm, trải nghiệm, coi trọng quan hệ',
      'Bebas, sensitif, pengalaman, utamakan relasi'
    ),
    idealRoomStyle: L(
      '보헤미안 빈티지 (Bohemian Vintage)',
      'Bohemian Vintage',
      'ボヘミアン・ヴィンテージ',
      '波西米亚复古',
      '波西米亞復古',
      'Bohemian Vintage',
      'Bohemian Vintage'
    ),
    dreamRoomColors: L(
      '버건디·머스타드·테라코타·인디고·패치워크 컬러',
      'Burgundy, mustard, terracotta, indigo, patchwork mix',
      'バーガンディ・マスタード・テラコッタ・インディゴ・パッチワーク',
      '酒红、芥末黄、陶土、靛蓝、拼布色',
      '酒紅、芥末黃、陶土、靛藍、拼布色',
      'Đỏ rượu, mù tạt, đất nung, chàm, patchwork',
      'Burgundy, mustard, terrakota, nila, patchwork'
    ),
    keyFurniture: L(
      '레트로 빈티지 소파, 패턴 러그, 마크라메 벽장식',
      'Retro vintage sofa, patterned rug, macramé wall decor',
      'レトロヴィンテージソファ、柄ラグ、マクラメ壁飾り',
      '复古沙发、花纹地毯、编织挂饰',
      '復古沙發、花紋地毯、編織掛飾',
      'Sofa vintage retro, thảm họa tiết, macramé',
      'Sofa vintage retro, karpet bermotif, macramé'
    ),
    mustHaveItems: L(
      '여행 기념품, 폴라로이드 사진, 빈티지 포스터',
      'Travel souvenirs, Polaroid photos, vintage posters',
      '旅のお土産、ポラロイド、ビンテージポスター',
      '旅行纪念品、拍立得、复古海报',
      '旅行紀念品、拍立得、復古海報',
      'Quà du lịch, Polaroid, poster vintage',
      'Suvenir, Polaroid, poster vintage'
    ),
    neverPut: L(
      '획일화된 세트 가구, 너무 깔끔한 정리',
      'Matching furniture sets from one catalog, overly sterile tidiness',
      'カタログ通りの統一セット家具、殺風景な整理整頓',
      '成套同款家具、过度冷清的收纳',
      '成套同款家具、過度冷清的收納',
      'Bộ nội thất đồng bộ nhàm, dọn quá “sạch vô hồn”',
      'Set furniture katalog membosankan, rapi terlalu steril'
    ),
    dreamRoomQuote: L(
      '이 방에 오면 나를 더 잘 알 수 있어. 내 인생이 다 있거든',
      'Come in here and you’ll know me better—my whole life is in this room.',
      'この部屋に来れば私のことがもっとわかる。人生が全部あるから。',
      '来这房间就更懂我——我的人生都在这儿。',
      '來這房間就更懂我——我的人生都在這兒。',
      'Vào phòng này là hiểu mình hơn—cả đời mình ở đây.',
      'Masuk sini lebih kenal aku—hidupku ada di sini.'
    ),
    goodMatch: L(
      'Type 6 (컬렉터형과 함께하면 공간이 더 풍성해짐)',
      'Type 6 (with a collector—space gets richer)',
      'Type 6（コレクター型と相性◎空間がより豊かに）',
      'Type 6（与收藏型一起空间更丰盛）',
      'Type 6（與收藏型一起空間更豐盛）',
      'Type 6 (với collector—không gian phong phú hơn)',
      'Type 6 (dengan kolektor—ruang makin kaya)'
    ),
    badMatch: L(
      'Type 1 (미니멀형은 당신의 방을 보면 기절할 수 있음)',
      'Type 1 (a minimalist might faint at your room)',
      'Type 1（ミニマル型はあなたの部屋を見て卒倒しがち）',
      'Type 1（极简型看你房间可能晕倒）',
      'Type 1（極簡型看你房間可能暈倒）',
      'Type 1 (tối giản có thể “ngất” với phòng bạn)',
      'Type 1 (minimalis bisa pingsan lihat kamarmu)'
    ),
    shareTypeName: L(
      '보헤미안 빈티지러 🌈',
      'Bohemian vintage type 🌈',
      'ボヘミアン・ヴィンテージ 🌈',
      '波西米亚复古系 🌈',
      '波西米亞復古系 🌈',
      'Bohemian vintage 🌈',
      'Bohemian vintage 🌈'
    ),
  },
  {
    type: 'Type6',
    emoji: '🗝️',
    title: L(
      '세상 모든 것을 모으는 사람, 컬렉터 큐리어스 🗝️',
      'Collects everything—curious collector 🗝️',
      '世界のすべてを集める人、キュリオス・コレクター 🗝️',
      '什么都想收的人，好奇收藏型 🗝️',
      '什麼都想收的人，好奇收藏型 🗝️',
      'Thu thập mọi thứ—curious collector 🗝️',
      'Kumpulkan segalanya—kolektor penasaran 🗝️'
    ),
    shortDescription: L(
      '당신의 방은 하나의 박물관입니다. 모든 물건에 이름과 이유가 있습니다.',
      'Your room is a museum—every object has a name and a reason.',
      '部屋は博物館。すべての物に名前と理由があります。',
      '你的房间像博物馆，每件都有名字和理由。',
      '你的房間像博物館，每件都有名字和理由。',
      'Phòng bạn như bảo tàng—món nào cũng có lý do.',
      'Kamarmu seperti museum—setiap benda punya alasan.'
    ),
    description: L(
      '관심 있는 것은 무조건 모으고, 버리는 것이 세상에서 제일 어렵고, 새로운 소품을 발견하면 심장이 두근거리는 당신. 방 안 모든 물건이 당신의 취향과 역사를 담고 있습니다. 이 성격은 강한 호기심과 깊이 있는 탐구력, 독창적인 세계관과 연결됩니다. 한 번 관심이 생기면 그 분야를 끝까지 파고드는 타입입니다.',
      'You collect what interests you; letting go is the hardest thing in the world; a new find makes your heart race. Every item holds your taste and history. This ties to fierce curiosity, deep digging, and an original worldview. Once hooked on a topic, you go all the way.',
      '興味のあるものは集めずにいられず、手放すのが一番難しい。新しい小物を見つけるとドキドキ。すべてが趣味と歴史。強い好奇心と深掘り、独自の世界観。一度ハマったら最後まで追求します。',
      '有兴趣就收，最难的是扔掉；发现新小物会心跳。每件都承载品味与历史。这与强烈好奇、深挖、独特世界观有关；一旦入坑就挖到底。',
      '有興趣就收，最難的是扔掉；發現新小物會心跳。每件都承載品味與歷史。這與強烈好奇、深挖、獨特世界觀有關；一旦入坑就挖到底。',
      'Có hứng là gom, khó nhất là vứt; thấy đồ mới là tim đập. Món nào cũng mang gu và lịch sử. Hiếu kỳ mạnh, đào sâu, thế giới riêng; ham là đào tận cùng.',
      'Tertarik ya dikumpulkan, buang paling susah; temukan barang baru deg-degan. Semua bercerita selera dan sejarah. Penasaran kuat, mendalam, dunia unik; suka menyelam sampai habis.'
    ),
    personalityKeywords: L(
      '강한 호기심, 수집욕, 탐구력, 독창적 세계관',
      'Strong curiosity, collecting drive, research drive, original worldview',
      '強い好奇心、収集欲、探求力、独自の世界観',
      '强烈好奇、收藏欲、探究力、独特世界观',
      '強烈好奇、收藏欲、探究力、獨特世界觀',
      'Tò mò mạnh, sưu tầm, tìm hiểu sâu, thế giới riêng',
      'Penasaran kuat, koleksi, eksplorasi dalam, dunia unik'
    ),
    idealRoomStyle: L(
      '큐리어스 컬렉터 (Curious Collector)',
      'Curious Collector',
      'キュリオス・コレクター',
      '好奇收藏型',
      '好奇收藏型',
      'Curious Collector',
      'Curious Collector'
    ),
    dreamRoomColors: L(
      '특정 컬러보다 소품이 만드는 컬러. 배경은 내추럴 우드 또는 크림',
      'Color comes from objects more than a single palette—backdrop in natural wood or cream',
      '特定色より小物が作る色。背景はナチュラルウッドかクリーム',
      '颜色来自物件而非单一色板，背景用原木或奶油色',
      '顏色來自物件而非單一色板，背景用原木或奶油色',
      'Màu đến từ đồ vật hơn một palette—nền gỗ tự nhiên hoặc kem',
      'Warna dari benda, bukan satu palet—latar kayu alami atau krem'
    ),
    keyFurniture: L(
      '대형 책장, 전시 선반, 수집품 진열장',
      'Tall bookshelves, display shelves, collection cases',
      '大型本棚、ディスプレイ棚、コレクションケース',
      '大型书架、展示层板、收藏陈列柜',
      '大型書架、展示層板、收藏陳列櫃',
      'Kệ sách cao, kệ trưng bày, tủ trưng bộ sưu tập',
      'Rak buku tinggi, rak pajang, lemari koleksi'
    ),
    mustHaveItems: L(
      '좋아하는 분야의 컬렉션, 책, 오브제들',
      'Collections in your favorite niche, books, objet d’art',
      '好きな分野のコレクション、本、オブジェ',
      '所爱领域的收藏、书籍、摆件',
      '所愛領域的收藏、書籍、擺件',
      'Bộ sưu tập lĩnh vực yêu thích, sách, đồ trang trí',
      'Koleksi bidang favorit, buku, objek'
    ),
    neverPut: L(
      '아무것도 없는 빈 선반',
      'Totally empty shelves with nothing to show',
      '何もない空っぽの棚',
      '空空如也的架子',
      '空空如也的架子',
      'Kệ trống không có gì',
      'Rak kosong tanpa apa pun'
    ),
    dreamRoomQuote: L(
      '내 방에 오면 몇 시간이 지나도 모르게 됩니다. 볼 것이 너무 많아서',
      'Hours disappear in my room—there’s too much to see.',
      '部屋に来ると何時間経ったかわからない。見るものが多すぎて。',
      '进我房间几小时不知觉——可看的东西太多。',
      '進我房間幾小時不知覺——可看的東西太多。',
      'Vào phòng mình mấy giờ không hay—xem mãi không hết.',
      'Masuk kamarku berjam-jam—terlalu banyak yang dilihat.'
    ),
    goodMatch: L(
      'Type 5 (보헤미안형과 함께하면 세상에서 가장 풍성한 공간 탄생)',
      'Type 5 (with bohemian type—the richest room on earth)',
      'Type 5（ボヘミアン型と相性◎世界一豊かな空間）',
      'Type 5（与波西米亚型诞生最丰盛的空间）',
      'Type 5（與波西米亞型誕生最豐盛的空間）',
      'Type 5 (với bohemian—không gian phong phú nhất)',
      'Type 5 (dengan bohemian—ruang paling kaya)'
    ),
    badMatch: L(
      'Type 1 (미니멀형과 함께하면 매일 전쟁의 연속)',
      'Type 1 (with a minimalist—daily battle)',
      'Type 1（ミニマル型と同居は毎日戦争）',
      'Type 1（与极简型同住天天开战）',
      'Type 1（與極簡型同住天天開戰）',
      'Type 1 (với tối giản—chiến mỗi ngày)',
      'Type 1 (dengan minimalis—perang tiap hari)'
    ),
    shareTypeName: L(
      '컬렉터 큐리어스 🗝️',
      'Curious collector 🗝️',
      'キュリオス・コレクター 🗝️',
      '好奇收藏型 🗝️',
      '好奇收藏型 🗝️',
      'Curious collector 🗝️',
      'Kolektor penasaran 🗝️'
    ),
  },
];
