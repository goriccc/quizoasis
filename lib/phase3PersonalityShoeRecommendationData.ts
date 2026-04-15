/** 내 성격과 어울리는 신발 추천 — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36. 7개 언어 문구. */

/** ko, en, ja, zh-CN, zh-TW, vi, id — goodMatch/badMatch 에는 UI 매칭용으로 `Type N` 영문 접두 유지 */
function T(
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

export interface Phase3PersonalityShoeRecommendationQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3PersonalityShoeRecommendationResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  shoeTypeRecommended: Record<string, string>;
  modelKeywords: Record<string, string>;
  personalityLink: Record<string, string>;
  colorRec: Record<string, string>;
  outfitDirection: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3PersonalityShoeRecommendationResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3PersonalityShoeRecommendationQuestions: Phase3PersonalityShoeRecommendationQuestion[] = [
  {
    id: 1,
    question: T(
      '주말 아침, 아무 계획 없이 나가게 된다면 자연스럽게 신게 되는 신발은?',
      'On a weekend morning with no plans, which shoes would you naturally grab?',
      '予定のない週末の朝、自然に履いていく靴は？',
      '周末早晨没有计划时，你会自然穿上哪双鞋？',
      '週末早晨沒有計畫時，你會自然穿上哪雙鞋？',
      'Cuối tuần sáng không kế hoạch, bạn tự nhiên đi đôi giày nào?',
      'Akhir pekan pagi tanpa rencana, sepatu mana yang paling kamu pakai?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q1a.jpg',
        label: T(
          '깨끗한 화이트 스니커즈',
          'Clean white sneakers',
          '真っ白なスニーカー',
          '干净的白色运动鞋',
          '乾淨的白色運動鞋',
          'Giày sneaker trắng sạch',
          'Sneaker putih bersih'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q1b.jpg',
        label: T(
          '편안한 슬립온 또는 스니커 뮬',
          'Comfortable slip-ons or sneaker mules',
          '楽なスリッポンやスニーカーミュール',
          '舒适的一脚蹬或穆勒运动鞋',
          '舒適的一腳蹬或穆勒運動鞋',
          'Slip-on hoặc sneaker mule thoải mái',
          'Slip-on atau mule sneaker nyaman'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q1c.jpg',
        label: T(
          '클래식 로퍼',
          'Classic loafers',
          'クラシックローファー',
          '经典乐福鞋',
          '經典樂福鞋',
          'Loafer cổ điển',
          'Loafer klasik'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q1d.jpg',
        label: T(
          '투박한 청키 스니커즈 또는 워커',
          'Chunky sneakers or work boots',
          '分厚いチャンキースニーカーやワークブーツ',
          '厚底运动鞋或工装靴',
          '厚底運動鞋或工裝靴',
          'Sneaker đế dày hoặc boot công nhân',
          'Sneaker chunky atau work boot'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: T(
      '쇼핑몰에서 신발을 고를 때 가장 먼저 보는 것은?',
      'When shoe shopping, what do you check first?',
      '靴を選ぶとき、まず何を見る？',
      '买鞋时你最先看什么？',
      '買鞋時你最先看什麼？',
      'Khi mua giày, bạn xem gì trước?',
      'Saat beli sepatu, apa yang kamu lihat dulu?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q2a.jpg',
        label: T(
          '어떤 코디에도 맞는 기본 컬러와 심플한 디자인',
          'Neutral colors and a simple design that match any outfit',
          'どんなコーデにも合うベーシックカラーとシンプルなデザイン',
          '百搭的基础色与简约设计',
          '百搭的基礎色與簡約設計',
          'Màu trung tính và form đơn giản hợp mọi outfit',
          'Warna netral dan desain simpel cocok semua outfit'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q2b.jpg',
        label: T(
          '하루 종일 신어도 발이 편한지',
          'Whether they stay comfortable all day',
          '一日中履いても足が楽か',
          '全天穿着是否舒适',
          '全天穿著是否舒適',
          'Đi cả ngày có êm chân không',
          'Nyaman dipakai seharian'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q2c.jpg',
        label: T(
          '클래식하면서도 세련된 형태',
          'A classic yet refined silhouette',
          'クラシックで洗練されたシルエット',
          '经典又利落的廓形',
          '經典又俐落的廓形',
          'Form cổ điển nhưng tinh tế',
          'Siluet klasik tapi rapi'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q2d.jpg',
        label: T(
          '남들이 잘 안 신는 독특한 디자인이나 실루엣',
          'A unique design or silhouette others rarely wear',
          'あまり人が履かないユニークなデザインやシルエット',
          '少见、独特的款式或轮廓',
          '少見、獨特的款式或輪廓',
          'Thiết kế hoặc form ít người đi',
          'Desain atau siluet yang jarang dipakai orang'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: T(
      '중요한 자리에 갈 때 발에 신고 싶은 것은?',
      'For an important occasion, what do you want on your feet?',
      '大事な場面では足元に何を履きたい？',
      '重要场合你想穿什么鞋？',
      '重要場合你想穿什麼鞋？',
      'Dịp quan trọng bạn muốn đi giày gì?',
      'Acara penting, sepatu apa yang ingin kamu pakai?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q3a.jpg',
        label: T(
          '깔끔하게 관리된 화이트 또는 블랙 스니커즈',
          'Well-kept white or black sneakers',
          '手入れの行き届いた白または黒のスニーカー',
          '打理得当的白色或黑色运动鞋',
          '打理得當的白色或黑色運動鞋',
          'Sneaker trắng/đen được giữ gìn gọn',
          'Sneaker putih/hitam yang dirawat rapi'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q3b.jpg',
        label: T(
          '굽 없는 플랫 슈즈 또는 발레 플랫',
          'Flat shoes or ballet flats',
          'ヒールのないフラットやバレエシューズ',
          '平底鞋或芭蕾平底鞋',
          '平底鞋或芭蕾平底鞋',
          'Giày bệt hoặc ballet flat',
          'Flat shoes atau ballet flat'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q3c.jpg',
        label: T(
          '클래식 로퍼 또는 옥스퍼드',
          'Classic loafers or Oxfords',
          'クラシックローファーやオックスフォード',
          '经典乐福鞋或牛津鞋',
          '經典樂福鞋或牛津鞋',
          'Loafer cổ điển hoặc Oxford',
          'Loafer klasik atau Oxford'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q3d.jpg',
        label: T(
          '날렵한 앵클 부츠 또는 킬힐',
          'Sleek ankle boots or stiletto heels',
          'シャープなアンクルブーツやスティレット',
          '利落的踝靴或细高跟',
          '俐落的踝靴或細高跟',
          'Boot cổ thấp gọn hoặc gót nhọn',
          'Ankle boots ramping atau stiletto'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: T(
      '여행지에서 하루 종일 걸을 때 신고 싶은 신발은?',
      'On a trip, walking all day—what shoes do you want?',
      '旅行で一日歩き回るなら、どの靴？',
      '旅行时走一整天，你想穿哪双？',
      '旅行時走一整天，你想穿哪雙？',
      'Du lịch đi bộ cả ngày, bạn chọn giày gì?',
      'Saat traveling jalan seharian, sepatu apa?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q4a.jpg',
        label: T(
          '가볍고 쿠션 좋은 러닝화 또는 트레일 슈즈',
          'Light running shoes or trail shoes with good cushioning',
          '軽くクッションの良いランニングやトレイルシューズ',
          '轻便缓震好的跑鞋或越野鞋',
          '輕便緩震好的跑鞋或越野鞋',
          'Giày chạy/trail nhẹ, đệm tốt',
          'Sepatu lari/trail ringan dengan bantalan bagus'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q4b.jpg',
        label: T(
          '편안한 캔버스 슬립온 또는 에스파드리유',
          'Easy canvas slip-ons or espadrilles',
          '楽なキャンバスのスリッポンやエスパドリーユ',
          '舒适的帆布一脚蹬或草编鞋',
          '舒適的帆布一腳蹬或草編鞋',
          'Slip-on canvas hoặc espadrille thoải mái',
          'Slip-on kanvas atau espadrille nyaman'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q4c.jpg',
        label: T(
          '로퍼 또는 더비 슈즈 (걸어도 발이 편한 것)',
          'Loafers or Derbies that stay comfy while walking',
          '歩いても楽なローファーやダービー',
          '走路也舒服的乐福或德比鞋',
          '走路也舒服的樂福或德比鞋',
          'Loafer/Derby đi bộ vẫn êm',
          'Loafer/Derby nyaman untuk jalan jauh'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q4d.jpg',
        label: T(
          '등산화 또는 아웃도어 트레킹 슈즈',
          'Hiking boots or outdoor trekking shoes',
          'トレッキングシューズやアウトドアブーツ',
          '登山鞋或户外徒步鞋',
          '登山鞋或戶外徒步鞋',
          'Giày leo núi hoặc trekking outdoor',
          'Sepatu hiking atau trekking outdoor'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: T(
      '지금 가장 끌리는 신발 소재는?',
      'Which shoe material appeals to you most right now?',
      '今いちばん惹かれる靴の素材は？',
      '现在最吸引你的鞋面材质是？',
      '現在最吸引你的鞋面材質是？',
      'Hiện tại bạn thích chất liệu giày nào nhất?',
      'Material sepatu mana yang paling menarik bagimu sekarang?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q5a.jpg',
        label: T(
          '깨끗한 가죽 또는 스웨이드',
          'Clean leather or suede',
          'きれいなレザーやスエード',
          '干净的皮革或绒面革',
          '乾淨的皮革或絨面革',
          'Da lộn hoặc suede sạch',
          'Kulit atau suede rapi'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q5b.jpg',
        label: T(
          '부드러운 패브릭 또는 니트 소재',
          'Soft fabric or knit uppers',
          '柔らかい生地やニット素材',
          '柔软织物或针织鞋面',
          '柔軟織物或針織鞋面',
          'Vải mềm hoặc knit',
          'Kain lembut atau knit'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q5c.jpg',
        label: T(
          '클래식한 광택 가죽',
          'Classic glossy patent leather',
          'クラシックな艶のあるレザー',
          '经典亮面漆皮',
          '經典亮面漆皮',
          'Da bóng cổ điển',
          'Kulit mengilap klasik'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q5d.jpg',
        label: T(
          '거친 텍스처의 누벅 또는 캔버스',
          'Rough-textured nubuck or canvas',
          'ザラッとしたヌバックやキャンバス',
          '粗粝质感的磨砂皮或帆布',
          '粗粝質感的磨砂皮或帆布',
          'Nubuck hoặc canvas texture thô',
          'Nubuck atau canvas bertekstur kasar'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: T(
      '옷장에서 지금 가장 많은 비중을 차지하는 신발은?',
      'In your closet, which shoes take up the most space?',
      'クローゼットでいま一番多い靴は？',
      '衣柜里占比最多的鞋是哪种？',
      '衣櫃裡占比最多的鞋是哪種？',
      'Tủ giày của bạn chủ yếu là loại nào?',
      'Di lemari, sepatu mana yang paling banyak?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q6a.jpg',
        label: T(
          '흰 스니커즈 또는 기본 컬러 스니커즈 여러 켤레',
          'Several pairs of white or neutral sneakers',
          '白やベーシックカラーのスニーカーが何足も',
          '多双白色或基础色运动鞋',
          '多雙白色或基礎色運動鞋',
          'Nhiều đôi sneaker trắng/màu cơ bản',
          'Banyak sneaker putih/warna netral'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q6b.jpg',
        label: T(
          '슬리퍼, 슬립온, 크록스 등 편한 것들',
          'Slippers, slip-ons, Crocs—easy shoes',
          'スリッパ、スリッポン、クロックスなど楽なもの',
          '拖鞋、一脚蹬、洞洞鞋等舒适款',
          '拖鞋、一腳蹬、洞洞鞋等舒適款',
          'Dép, slip-on, Crocs… đồ êm chân',
          'Sandal, slip-on, Crocs, yang nyaman'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q6c.jpg',
        label: T(
          '로퍼, 더비, 옥스퍼드 등 클래식 슈즈',
          'Classic shoes: loafers, Derbies, Oxfords',
          'ローファー、ダービー、オックスフォードなどクラシック',
          '乐福、德比、牛津等经典皮鞋',
          '樂福、德比、牛津等經典皮鞋',
          'Loafer, Derby, Oxford cổ điển',
          'Loafer, Derby, Oxford klasik'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q6d.jpg',
        label: T(
          '부츠, 워커, 플랫폼 등 개성 있는 신발들',
          'Statement boots, work boots, platforms',
          'ブーツ、ワークブーツ、プラットフォームなど個性派',
          '靴子、工装靴、厚底等个性款',
          '靴子、工裝靴、厚底等個性款',
          'Boot, work boot, platform nổi bật',
          'Boot, work boot, platform statement'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: T(
      '지금 내 라이프스타일과 가장 가까운 것은?',
      'Which lifestyle sounds closest to yours right now?',
      '今のライフスタイルに一番近いのは？',
      '哪种生活最像现在的你？',
      '哪種生活最像現在的你？',
      'Lối sống nào gần với bạn nhất?',
      'Gaya hidup mana yang paling mirip denganmu?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q7a.jpg',
        label: T(
          '카페, 미술관, 서점 등 문화 공간을 즐겨 찾는 편',
          'Cafés, museums, bookstores—you love cultural spots',
          'カフェ、美術館、書店など文化スポットが好き',
          '爱去咖啡馆、美术馆、书店等文化空间',
          '愛去咖啡館、美術館、書店等文化空間',
          'Thích quán cà phê, bảo tàng, hiệu sách',
          'Suka kafe, museum, toko buku'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q7b.jpg',
        label: T(
          '집에서 편하게 보내는 시간이 가장 소중한 편',
          'Home time in comfort matters most',
          '家でゆっくり過ごす時間が一番大切',
          '最珍惜在家放松的时光',
          '最珍惜在家放鬆的時光',
          'Quý nhất là thời gian ở nhà thoải mái',
          'Paling menghargai waktu nyaman di rumah'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q7c.jpg',
        label: T(
          '비즈니스 미팅, 격식 있는 자리가 많은 편',
          'Lots of business meetings and formal settings',
          'ビジネスミーティングやフォーマルな場が多い',
          '商务会议与正式场合较多',
          '商務會議與正式場合較多',
          'Nhiều họp và sự kiện trang trọng',
          'Banyak meeting bisnis dan acara formal'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q7d.jpg',
        label: T(
          '공연, 클럽, 파티, 야외 행사 등 활동적인 편',
          'Gigs, clubs, parties, outdoor events—you stay active',
          'ライブ、クラブ、パーティ、アウトドアなどアクティブ',
          '演出、夜店、派对、户外活动等较活跃',
          '演出、夜店、派對、戶外活動等較活躍',
          'Show, club, tiệc, sự kiện ngoài trời',
          'Konser, club, pesta, acara outdoor'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: T(
      '신발을 선물받는다면 어떤 것이 가장 기쁠까요?',
      'If you received shoes as a gift, what would make you happiest?',
      '靴のプレゼントなら、何が一番うれしい？',
      '如果收到鞋作为礼物，哪种最让你开心？',
      '如果收到鞋作為禮物，哪種最讓你開心？',
      'Được tặng giày, loại nào khiến bạn vui nhất?',
      'Kalau dapat hadiah sepatu, yang mana paling membahagiakan?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q8a.jpg',
        label: T(
          '유행 안 타는 베이직 스니커즈',
          'Timeless basic sneakers',
          '流行に左右されないベーシックスニーカー',
          '不过时的基础款运动鞋',
          '不過時的基礎款運動鞋',
          'Sneaker basic không lỗi mốt',
          'Sneaker basic yang tidak ketinggalan zaman'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q8b.jpg',
        label: T(
          '아무 곳에나 신을 수 있는 편한 플랫 슈즈',
          'Comfy flats you can wear anywhere',
          'どこでも履ける楽なフラット',
          '去哪都能穿的舒适平底鞋',
          '去哪都能穿的舒適平底鞋',
          'Giày bệt êm đi đâu cũng được',
          'Flat nyaman dipakai ke mana saja'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q8c.jpg',
        label: T(
          '고급 가죽 소재의 클래식 로퍼',
          'Premium leather classic loafers',
          '上質レザーのクラシックローファー',
          '高级皮革经典乐福鞋',
          '高級皮革經典樂福鞋',
          'Loafer cổ điển da cao cấp',
          'Loafer klasik kulit premium'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q8d.jpg',
        label: T(
          '요즘 가장 핫한 디자이너 한정판 신발',
          'The hottest designer limited drops',
          '今いちばん話題のデザイナー限定モデル',
          '当下最火的设计师限量款',
          '當下最火的設計師限量款',
          'Phiên bản giới hạn designer đang hot',
          'Sepatu limited designer yang lagi hits'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: T(
      '신발을 관리하는 나의 방식은?',
      'How do you care for your shoes?',
      '靴の手入れスタイルは？',
      '你怎样保养鞋子？',
      '你怎樣保養鞋子？',
      'Bạn chăm giày kiểu gì?',
      'Bagaimana kamu merawat sepatu?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q9a.jpg',
        label: T(
          '더러워지면 바로 세탁하고 항상 깨끗하게 유지한다',
          'Wash as soon as they get dirty—always keep them clean',
          '汚れたらすぐ洗って常にきれいに',
          '脏了马上洗，始终保持干净',
          '髒了馬上洗，始終保持乾淨',
          'Bẩn là giặt ngay, luôn giữ sạch',
          'Kotor langsung cuci, selalu bersih'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q9b.jpg',
        label: T(
          '특별히 관리하지 않는다. 신발은 소모품이다',
          'I do not fuss—shoes are consumables',
          '特に手入れしない。靴は消耗品',
          '不怎么打理，鞋是消耗品',
          '不怎麼打理，鞋是消耗品',
          'Không chăm đặc biệt—giày là đồ tiêu hao',
          'Tidak dirawat khusus—sepatu habis pakai'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q9c.jpg',
        label: T(
          '가죽 크림, 방수 스프레이 등 전용 용품으로 꼼꼼하게 관리한다',
          'Leather cream, waterproof spray—full care routine',
          'レザークリームや防水スプレーで丁寧にケア',
          '用鞋油、防水喷雾等认真保养',
          '用鞋油、防水噴霧等認真保養',
          'Kem da, xịt chống nước—chăm kỹ',
          'Krim kulit, semprot waterproof—perawatan penuh'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q9d.jpg',
        label: T(
          '자연스럽게 닳고 때 타는 것도 멋이라고 생각한다',
          'Natural wear and patina are part of the charm',
          '自然な減りや色あせも味だと思う',
          '自然磨损和旧化也是一种味道',
          '自然磨損和舊化也是一種味道',
          'Mài mòn và patina tự nhiên cũng đẹp',
          'Usia dan pudar alami juga keren'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: T(
      '지금 나의 기분을 신발로 표현한다면?',
      'If your mood were a shoe right now, which would it be?',
      '今の気分を靴で表すと？',
      '若用一双鞋形容现在的心情？',
      '若用一雙鞋形容現在的心情？',
      'Nếu tâm trạng là một đôi giày?',
      'Kalau suasana hatimu jadi sepatu?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q10a.jpg',
        label: T(
          '가볍고 경쾌한 흰 스니커즈',
          'Light, cheerful white sneakers',
          '軽く明るい白スニーカー',
          '轻快活泼的白运动鞋',
          '輕快活潑的白運動鞋',
          'Sneaker trắng nhẹ nhàng vui vẻ',
          'Sneaker putih ringan ceria'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q10b.jpg',
        label: T(
          '폭신하고 따뜻한 털 슬리퍼',
          'Fluffy warm slippers',
          'ふかふか暖かいファースリッパ',
          '蓬松温暖的毛绒拖鞋',
          '蓬鬆溫暖的毛絨拖鞋',
          'Dép lông ấm xốp',
          'Sandal bulu hangat empuk'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q10c.jpg',
        label: T(
          '자신감 있는 클래식 로퍼',
          'Confident classic loafers',
          '自信に満ちたクラシックローファー',
          '自信满满的经典乐福',
          '自信滿滿的經典樂福',
          'Loafer cổ điển tự tin',
          'Loafer klasik penuh percaya diri'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q10d.jpg',
        label: T(
          '에너지 넘치는 청키 부츠',
          'High-energy chunky boots',
          'エネルギッシュなチャンキーブーツ',
          '能量满满的厚底靴',
          '能量滿滿的厚底靴',
          'Boot chunky tràn năng lượng',
          'Boot chunky penuh energi'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: T(
      'SNS에서 신발 사진을 올린다면 어떤 스타일?',
      'On social media, how would you shoot your shoes?',
      'SNSで靴写真を上げるならどんなスタイル？',
      '若在社交平台发鞋照，你会选哪种风格？',
      '若在社群平台發鞋照，你會選哪種風格？',
      'Đăng ảnh giày lên mạng, bạn chọn kiểu nào?',
      'Kalau posting foto sepatu di sosmed, gayanya?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q11a.jpg',
        label: T(
          '깔끔한 배경에 신발만 단독 촬영',
          'Clean background, shoes only—product shot',
          'シンプルな背景に靴だけの単体ショット',
          '干净背景，只拍鞋单品',
          '乾淨背景，只拍鞋單品',
          'Nền sạch, chỉ chụp giày',
          'Background bersih, fokus sepatu saja'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q11b.jpg',
        label: T(
          '발을 앞으로 쭉 뻗은 편안한 발 셀카',
          'Relaxed foot selfie, legs stretched out',
          '足を前に伸ばしたリラックスした自撮り',
          '伸腿向前的轻松脚部自拍',
          '伸腿向前的輕鬆腳部自拍',
          'Selfie chân duỗi thẳng thư giãn',
          'Selfie kaki santai menjulur ke depan'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q11c.jpg',
        label: T(
          '카페나 감성 공간에서 코디와 함께',
          'At a café or aesthetic spot with the full fit',
          'カフェや雰囲気のいい場所でコーデと一緒に',
          '咖啡馆或氛围空间里与穿搭同框',
          '咖啡館或氛圍空間裡與穿搭同框',
          'Quán cà phê/không gian vibe cùng outfit',
          'Di kafe atau spot estetik dengan outfit'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q11d.jpg',
        label: T(
          '스트릿 배경에서 전신 코디의 일부로',
          'Street backdrop, part of a full-body look',
          'ストリート背景で全身コーデの一部として',
          '街头背景里作为全身造型的一部分',
          '街頭背景裡作為全身造型的一部分',
          'Phông đường phố, một phần outfit full body',
          'Latar jalanan, bagian dari OOTD full body'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: T(
      '나를 가장 잘 표현하는 신발의 느낌은?',
      'Which shoe vibe describes you best?',
      'あなたを一番よく表す靴の感じは？',
      '哪种鞋的感觉最像你？',
      '哪種鞋的感覺最像你？',
      'Vibe giày nào giống bạn nhất?',
      'Nuansa sepatu mana yang paling seperti dirimu?'
    ),
    options: [
      {
        image: 'p3_test_personality_shoe_recommendation_q12a.jpg',
        label: T(
          '군더더기 없이 깔끔한 것',
          'Minimal and spotless',
          '無駄のないクリーンさ',
          '干净利落无多余',
          '乾淨俐落無多餘',
          'Tối giản, sạch sẽ',
          'Minimal, bersih tanpa ribet'
        ),
        score: 0,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q12b.jpg',
        label: T(
          '신었는지 안 신었는지 모를 정도로 편한 것',
          'So comfy you forget you are wearing shoes',
          '履いてるか忘れるほど楽',
          '舒服到像没穿一样',
          '舒服到像沒穿一樣',
          'Êm đến mức quên là đang đi giày',
          'Nyaman sampai lupa sedang pakai sepatu'
        ),
        score: 1,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q12c.jpg',
        label: T(
          '시간이 지나도 질리지 않는 클래식한 것',
          'Classic—never gets old',
          '時間が経っても飽きないクラシック',
          '经典耐看不过时',
          '經典耐看不過時',
          'Cổ điển, không bao giờ chán',
          'Klasik, tak pernah membosankan'
        ),
        score: 2,
      },
      {
        image: 'p3_test_personality_shoe_recommendation_q12d.jpg',
        label: T(
          '한 번 보면 잊히지 않는 개성 있는 것',
          'Bold and unforgettable',
          '一度見たら忘れられない個性派',
          '一眼难忘有个性',
          '一眼難忘有個性',
          'Một lần nhìn là nhớ—độc đáo',
          'Sekali lihat tak terlupakan'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3PersonalityShoeRecommendationResults: Phase3PersonalityShoeRecommendationResult[] = [
  {
    type: 'Type1',
    emoji: '👟',
    title: T(
      '어디에나 어울리는 당신의 신발, 클린 스니커즈',
      'Your go-anywhere shoes: clean sneakers',
      'どこにでも合うあなたの靴、クリーンスニーカー',
      '百搭的你：清爽白色运动鞋',
      '百搭的你：清爽白色運動鞋',
      'Đi đâu cũng hợp: sneaker trắng sạch',
      'Sepatu serba cocok: sneaker putih bersih'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 깔끔한 화이트 스니커즈입니다.',
      'The shoes that match your personality best are crisp white sneakers.',
      'あなたの性格にいちばん合うのは、すっきりした白スニーカーです。',
      '最配你性格的是干净的白运动鞋。',
      '最配你性格的是乾淨的白運動鞋。',
      'Hợp tính cách bạn nhất là sneaker trắng gọn gàng.',
      'Yang paling cocok denganmu adalah sneaker putih bersih.'
    ),
    description: T(
      '정돈된 것을 좋아하고, 튀지 않으면서도 세련되게 보이고 싶은 당신. 화이트 스니커즈는 당신의 성격을 발끝에서 완벽하게 표현합니다. 어떤 코디에도 맞고, 언제 꺼내도 실망시키지 않는 신뢰감. 그것이 당신이 사람들에게 주는 인상과 닮아 있습니다.',
      'You like things tidy and want to look polished without shouting. White sneakers express your personality right down to your toes. They go with any outfit and never let you down—just like the steady, reliable impression you give others.',
      '整っているものが好きで、派手にならずに洗練されたいあなた。白スニーカーは性格を足元で表現します。どんなコーデにも合い、いつ出しても裏切らない信頼感。それはあなたが周りに与える印象に似ています。',
      '你喜欢整洁、低调又利落。白运动鞋从脚下体现你的性格：百搭、随时拿得出手，像别人对你的印象一样可靠。',
      '你喜歡整潔、低調又俐落。白運動鞋從腳下體現你的性格：百搭、隨時拿得出手，像別人對你的印象一樣可靠。',
      'Bạn thích gọn gàng, không phô nhưng vẫn chỉn chu. Sneaker trắng thể hiện tính cách từ đôi chân: hợp mọi outfit, luôn đáng tin—giống ấn tượng bạn để lại.',
      'Kamu suka rapi, tidak mencolok tapi tetap stylish. Sneaker putih mencerminkan kepribadianmu: cocok semua outfit, selalu bisa diandalkan—seperti kesan yang kamu beri.'
    ),
    shoeTypeRecommended: T(
      '클린 화이트 스니커즈 (Clean White Sneakers)',
      'Clean white sneakers',
      'クリーン・ホワイトスニーカー',
      '清爽白色运动鞋',
      '清爽白色運動鞋',
      'Sneaker trắng sạch',
      'Sneaker putih bersih'
    ),
    modelKeywords: T(
      '에어포스1, 스탠스미스, 뉴발란스 327, 아디다스 가젤',
      'Air Force 1, Stan Smith, New Balance 327, Adidas Gazelle',
      'エアフォース1、スタンスミス、ニューバランス327、アディダス ガゼル',
      'Air Force 1、Stan Smith、New Balance 327、Adidas Gazelle',
      'Air Force 1、Stan Smith、New Balance 327、Adidas Gazelle',
      'Air Force 1, Stan Smith, New Balance 327, Adidas Gazelle',
      'Air Force 1, Stan Smith, New Balance 327, Adidas Gazelle'
    ),
    personalityLink: T(
      '정돈됨, 신뢰감, 무난하지만 세련됨, 일관성',
      'Orderly, trustworthy, quietly polished, consistent',
      '整頓、信頼感、地味だけど洗練、一貫性',
      '整洁、可靠、低调利落、稳定',
      '整潔、可靠、低調俐落、穩定',
      'Gọn gàng, đáng tin, chỉn chư không phô, nhất quán',
      'Rapi, bisa diandalkan, halus tanpa mencolok, konsisten'
    ),
    colorRec: T(
      '화이트, 오프화이트, 아이보리, 크림',
      'White, off-white, ivory, cream',
      'ホワイト、オフホワイト、アイボリー、クリーム',
      '白色、米白、象牙色、奶油色',
      '白色、米白、象牙色、奶油色',
      'Trắng, off-white, ngà, kem',
      'Putih, off-white, gading, krem'
    ),
    outfitDirection: T(
      '청바지 + 화이트 티 + 화이트 스니커즈. 이것만으로 완성',
      'Jeans + white tee + white sneakers—done.',
      'デニム＋白T＋白スニーカー。これだけで完成',
      '牛仔裤 + 白T + 白运动鞋，一套就够',
      '牛仔褲 + 白T + 白運動鞋，一套就夠',
      'Quần jean + áo trắng + sneaker trắng—xong.',
      'Jeans + kaos putih + sneaker putih—selesai.'
    ),
    goodMatch: T(
      'Type 2 (로퍼형과 함께하면 서로의 스타일이 자연스럽게 어울림)',
      'Type 2 (Pairs naturally with the loafer vibe)',
      'Type 2（ローファータイプと相性が自然に合う）',
      'Type 2（与乐福型搭配很自然）',
      'Type 2（與樂福型搭配很自然）',
      'Type 2 (Hợp tự nhiên với kiểu loafer)',
      'Type 2 (Cocok dengan gaya loafer)'
    ),
    badMatch: T(
      'Type 6 (부츠·워커형과는 신발 취향이 완전히 다른 세계)',
      'Type 6 (Boot/work-boot types live in a different shoe universe)',
      'Type 6（ブーツ・ワーク系とは別世界の好み）',
      'Type 6（与靴款·工装型完全两种世界）',
      'Type 6（與靴款·工裝型完全兩種世界）',
      'Type 6 (Kiểu boot/work boot là thế giới khác)',
      'Type 6 (Tipe boot/work boot—dunia berbeda)'
    ),
    shareTypeName: T(
      '클린 스니커즈',
      'Clean sneakers',
      'クリーンスニーカー',
      '清爽运动鞋',
      '清爽運動鞋',
      'Sneaker sạch',
      'Sneaker bersih'
    ),
  },
  {
    type: 'Type2',
    emoji: '🥿',
    title: T(
      '격식과 편안함 사이, 클래식 로퍼',
      'Between dressy and easy: classic loafers',
      'フォーマルと楽さの間で、クラシックローファー',
      '介于正式与轻松之间：经典乐福鞋',
      '介於正式與輕鬆之間：經典樂福鞋',
      'Giữa chỉn chu và thoải mái: loafer cổ điển',
      'Antara formal dan santai: loafer klasik'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 클래식 로퍼입니다.',
      'The shoes that match your personality best are classic loafers.',
      'あなたの性格にいちばん合うのは、クラシックローファーです。',
      '最配你性格的是经典乐福鞋。',
      '最配你性格的是經典樂福鞋。',
      'Hợp bạn nhất là loafer cổ điển.',
      'Yang paling cocok adalah loafer klasik.'
    ),
    description: T(
      '어디서든 적절하고, 과하지 않으며, 신어본 사람만 아는 편안함이 있는 로퍼. 캐주얼도 포멀도 되는 유연함이 당신의 성격을 닮아있습니다. 튀고 싶진 않지만 눈에 띄고 싶고, 편하면서도 멋있어야 하는 당신의 균형 감각이 로퍼 한 켤레에 담겨 있습니다.',
      'Loafers are appropriate anywhere—not loud, but comfort you only know once you wear them. Their casual-or-formal flexibility mirrors you: you do not want to scream for attention, yet you want to look good while staying comfortable. That balance lives in a single pair of loafers.',
      'どこでもちょうどよく、やりすぎず、履いた人だけが知る楽さがあるローファー。カジュアルにもフォーマルにもなる柔軟さはあなたに似ています。目立ちすぎたくないのにちゃんと見せたい、楽でいて格好よく—そのバランス感覚が一足に詰まっています。',
      '乐福鞋得体、不张扬，舒适要穿上才懂。可休闲可正式的灵活像你：不想太抢眼却想好看，要舒服也要有型——这种平衡就在一双乐福里。',
      '樂福鞋得體、不張揚，舒適要穿上才懂。可休閒可正式的靈活像你：不想太搶眼卻想好看，要舒服也要有型——這種平衡就在一雙樂福裡。',
      'Loafer lịch sự, không ồn ào, chỉ khi đi mới thấy êm. Linh hoạt casual/formal giống bạn: không muốn nổi bật nhưng vẫn đẹp, vừa thoải mái vừa chỉn chu.',
      'Loafer pas di mana saja, tidak berisik, nyaman dirasakan saat dipakai. Fleksibel casual/formal seperti kamu: ingin terlihat baik tanpa mencolok—nyaman tapi tetap stylish.'
    ),
    shoeTypeRecommended: T(
      '클래식 로퍼 (Classic Loafer)',
      'Classic loafers',
      'クラシックローファー',
      '经典乐福鞋',
      '經典樂福鞋',
      'Loafer cổ điển',
      'Loafer klasik'
    ),
    modelKeywords: T(
      '구찌 호스빗, 살바토레 페라가모, 토즈, 타비 로퍼',
      'Gucci Horsebit, Salvatore Ferragamo, Tod’s, Tabi loafers',
      'グッチホースビット、フェラガモ、トッズ、タビローファー',
      'Gucci Horsebit、Ferragamo、Tod’s、Tabi乐福',
      'Gucci Horsebit、Ferragamo、Tod’s、Tabi樂福',
      'Gucci Horsebit, Ferragamo, Tod’s, loafer Tabi',
      'Gucci Horsebit, Ferragamo, Tod’s, loafer Tabi'
    ),
    personalityLink: T(
      '균형감, 클래식한 취향, 유연한 격식, 오래가는 가치',
      'Balance, classic taste, flexible formality, lasting value',
      'バランス感、クラシックな趣味、柔軟なフォーマル、長く愛せる価値',
      '平衡感、经典品味、进退有度的正式感、耐看价值',
      '平衡感、經典品味、進退有度的正式感、耐看價值',
      'Cân bằng, gu cổ điển, formal linh hoạt, giá trị bền',
      'Keseimbangan, selera klasik, formal fleksibel, nilai awet'
    ),
    colorRec: T(
      '브라운, 블랙, 버건디, 카멜',
      'Brown, black, burgundy, camel',
      'ブラウン、ブラック、バーガンディ、キャメル',
      '棕、黑、酒红、驼色',
      '棕、黑、酒紅、駝色',
      'Nâu, đen, đỏ rượu, camel',
      'Coklat, hitam, burgundy, camel'
    ),
    outfitDirection: T(
      '와이드 슬랙스 + 크롭 블레이저 + 로퍼. 심플하게 완성',
      'Wide slacks + cropped blazer + loafers—simple and done.',
      'ワイドスラックス＋クロップドブレザー＋ローファー。シンプルに完成',
      '阔腿西裤 + 短西装 + 乐福，简约完成',
      '寬褲西裝褲 + 短西裝 + 樂福，簡約完成',
      'Quần ống rộng + blazer crop + loafer—gọn gàng.',
      'Celana lebar + blazer crop + loafer—simpel jadi.'
    ),
    goodMatch: T(
      'Type 1 (스니커즈형과 함께하면 서로의 스타일이 보완됨)',
      'Type 1 (Complements the clean-sneaker vibe)',
      'Type 1（スニーカータイプとスタイルが補い合う）',
      'Type 1（与清爽运动鞋型互相补足）',
      'Type 1（與清爽運動鞋型互相補足）',
      'Type 1 (Bổ sung cho kiểu sneaker sạch)',
      'Type 1 (Melengkapi gaya sneaker bersih)'
    ),
    badMatch: T(
      'Type 5 (편안함 최우선 슬립온형과는 격식의 온도가 다름)',
      'Type 5 (Slip-on comfort-first types run at a different formality temperature)',
      'Type 5（楽さ最優先のスリッポン系とはフォーマルの温度が違う）',
      'Type 5（与舒适优先的一脚蹬型「正式感温度」不同）',
      'Type 5（與舒適優先的一腳蹬型「正式感溫度」不同）',
      'Type 5 (Kiểu ưu tiên slip-on—khác mức độ chỉn chu)',
      'Type 5 (Tipe slip-on nyaman dulu—beda suhu formal)'
    ),
    shareTypeName: T(
      '클래식 로퍼',
      'Classic loafers',
      'クラシックローファー',
      '经典乐福',
      '經典樂福',
      'Loafer cổ điển',
      'Loafer klasik'
    ),
  },
  {
    type: 'Type3',
    emoji: '👟',
    title: T(
      '움직임이 많은 당신을 위한 신발, 기능성 러닝화',
      'For always-on-the-move you: performance trainers',
      '動きの多いあなたへ、機能性ランニングシューズ',
      '爱走爱动的你：功能性跑鞋',
      '愛走愛動的你：功能性跑鞋',
      'Luôn chuyển động: giày chạy performance',
      'Sering bergerak: sepatu lari fungsional'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 가볍고 기능적인 러닝화입니다.',
      'The shoes that match your personality best are light, functional running shoes.',
      'あなたの性格にいちばん合うのは、軽くて機能的なランニングシューズです。',
      '最配你性格的是轻便功能性跑鞋。',
      '最配你性格的是輕便功能性跑鞋。',
      'Hợp bạn nhất là giày chạy nhẹ, đầy chức năng.',
      'Paling cocok: sepatu lari ringan dan fungsional.'
    ),
    description: T(
      '항상 어딘가로 움직이고, 효율을 중요하게 여기고, 외모보다 기능이 먼저인 당신. 러닝화는 당신의 라이프스타일에 가장 솔직하게 맞는 선택입니다. 멋보다 실용, 외관보다 착용감. 하루 종일 신어도 발이 지치지 않아야 한다는 확고한 기준이 있는 타입입니다.',
      'You are always going somewhere, you value efficiency, and function beats looks. Running shoes are the most honest match for your lifestyle: utility over flex, fit over flash. You have a firm rule—your feet should not feel wrecked after a full day.',
      'いつもどこかへ動き、効率を重んじ、見た目より機能を選ぶあなた。ランニングシューズはライフスタイルにいちばん正直に合います。かっこよさより実用、見た目より履き心地。一日中履いても足が疲れない、という揺るぎない基準のタイプです。',
      '你总是奔波、重视效率、功能优先于外表。跑鞋最贴合你的生活：实用胜过耍帅，脚感胜过外观。你的标准是：穿一整天脚也不能垮。',
      '你總是奔波、重視效率、功能優先於外表。跑鞋最貼合你的生活：實用勝過耍帥，腳感勝過外觀。你的標準是：穿一整天腳也不能垮。',
      'Bạn luôn bận rộn, ưu tiên hiệu quả, chức năng hơn ngoại hình. Giày chạy hợp nhất: thực dụng trước, êm chân cả ngày là tiêu chuẩn.',
      'Selalu aktif, utamakan efisiensi, fungsi di atas penampilan. Sepatu lari paling jujur: praktis dulu, kaki tidak capek seharian.'
    ),
    shoeTypeRecommended: T(
      '기능성 러닝화·트레이너 (Performance Trainer)',
      'Performance trainers',
      'パフォーマンストレーナー',
      '功能性跑鞋/训练鞋',
      '功能性跑鞋/訓練鞋',
      'Giày chạy performance',
      'Sepatu lari performance'
    ),
    modelKeywords: T(
      '나이키 페가수스, 온클라우드, 아식스 젤, 뉴발란스 1080',
      'Nike Pegasus, On Cloud, ASICS Gel, New Balance 1080',
      'ナイキ ペガサス、オン クラウド、アシックス ゲル、NB 1080',
      'Nike Pegasus、On Cloud、ASICS Gel、New Balance 1080',
      'Nike Pegasus、On Cloud、ASICS Gel、New Balance 1080',
      'Nike Pegasus, On Cloud, ASICS Gel, New Balance 1080',
      'Nike Pegasus, On Cloud, ASICS Gel, New Balance 1080'
    ),
    personalityLink: T(
      '활동성, 실용주의, 효율 추구, 건강 지향',
      'Active, practical, efficiency-driven, health-minded',
      '活動的、実用主義、効率志向、ヘルシー志向',
      '好动、实用、追求效率、健康导向',
      '好動、實用、追求效率、健康導向',
      'Năng động, thực dụng, hiệu quả, hướng sức khỏe',
      'Aktif, praktis, efisien, peduli kesehatan'
    ),
    colorRec: T(
      '화이트·블랙·네이비 등 기본 컬러 또는 포인트 컬러 한 가지',
      'White, black, navy basics—or one accent color',
      'ホワイト・ブラック・ネイビーなどベーシック、またはアクセントカラー一色',
      '白、黑、海军蓝等基础色，或一个点缀色',
      '白、黑、海軍藍等基礎色，或一個點綴色',
      'Trắng, đen, navy hoặc một màu nhấn',
      'Putih, hitam, navy, atau satu warna aksen'
    ),
    outfitDirection: T(
      '조거 팬츠 + 드라이핏 티 + 러닝화. 기능적이면서 멋있음',
      'Joggers + dry-fit tee + trainers—functional and cool.',
      'ジョガー＋ドライフィットT＋ランニングシューズ。機能的でかっこいい',
      '慢跑裤 + 速干T + 跑鞋，机能又好看',
      '慢跑褲 + 速乾T + 跑鞋，機能又好看',
      'Quần jogger + áo dry-fit + giày chạy—gọn và đẹp.',
      'Jogger + kaos dry-fit + sepatu lari—keren dan fungsional.'
    ),
    goodMatch: T(
      'Type 4 (편안함 추구형과 라이프스타일이 비슷해서 잘 맞음)',
      'Type 4 (Lifestyle aligns with comfort-first types)',
      'Type 4（楽さ重視タイプとライフスタイルが近く相性がいい）',
      'Type 4（与追求舒适型生活方式相近）',
      'Type 4（與追求舒適型生活方式相近）',
      'Type 4 (Gần kiểu ưu tiên thoải mái)',
      'Type 4 (Cocok dengan tipe utamakan kenyamanan)'
    ),
    badMatch: T(
      'Type 6 (부츠·워커형과는 신발을 고르는 기준이 완전히 다름)',
      'Type 6 (Boot/work-boot types shop by totally different rules)',
      'Type 6（ブーツ・ワーク系とは選ぶ基準がまったく違う）',
      'Type 6（与靴款·工装型选鞋标准完全不同）',
      'Type 6（與靴款·工裝型選鞋標準完全不同）',
      'Type 6 (Kiểu boot—tiêu chí chọn khác hẳn)',
      'Type 6 (Tipe boot—kriteria beda total)'
    ),
    shareTypeName: T(
      '기능성 러닝화',
      'Performance trainers',
      '機能性ランニング',
      '功能性跑鞋',
      '功能性跑鞋',
      'Giày chạy',
      'Sepatu lari'
    ),
  },
  {
    type: 'Type4',
    emoji: '🩴',
    title: T(
      '집이 제일 좋은 당신의 신발, 편안한 슬립온·슬리퍼',
      'Home is your happy place: easy slip-ons and slippers',
      'おうちが一番。楽なスリッポン＆スリッパ',
      '最爱在家的你：舒适一脚蹬与拖鞋',
      '最愛在家的你：舒適一腳蹬與拖鞋',
      'Thích ở nhà: slip-on và dép êm',
      'Paling nyaman di rumah: slip-on & sandal'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 신고 벗기 편한 슬립온 또는 슬리퍼입니다.',
      'The shoes that match your personality best are slip-ons or slippers that are easy on and off.',
      'あなたの性格にいちばん合うのは、履き脱ぎしやすいスリッポンかスリッパです。',
      '最配你性格的是易穿脱的一脚蹬或拖鞋。',
      '最配你性格的是易穿脫的一腳蹬或拖鞋。',
      'Hợp bạn nhất: slip-on hoặc dép dễ mang tháo.',
      'Paling cocok: slip-on atau sandal gampang pakai.'
    ),
    description: T(
      '신발 끈을 매는 시간도 아깝고, 신었는지 안 신었는지 모를 정도로 편해야 하고, 어디에나 편하게 걸칠 수 있어야 하는 당신. 슬립온과 슬리퍼는 편안함과 자유로움을 최우선으로 두는 당신의 성격을 가장 솔직하게 표현합니다. 형식보다 실질, 겉모습보다 실제 편안함을 더 중요하게 여기는 타입입니다.',
      'Tying laces feels like wasted time—you need shoes so comfy you barely notice them, easy to slip on anywhere. Slip-ons and slippers are the most honest expression of a personality that puts comfort and freedom first. Form over flash, real ease over looks.',
      '紐を結ぶ時間すらもったいなく、履いてるか忘れるほど楽で、どこでもさっと履けるあなた。スリッポンとスリッパは、快適さと自由を最優先する性格をいちばん正直に表します。体裁より実質、見た目より本当の楽さを選ぶタイプです。',
      '系鞋带都像浪费时间；要舒服到像没穿，随时一脚蹬上就能出门。一脚蹬和拖鞋最直白地表达你把舒适与自由放第一位：重实质不重形式，重真舒服不重外表。',
      '繫鞋帶都像浪費時間；要舒服到像沒穿，隨時一腳蹬上就能出門。一腳蹬和拖鞋最直白地表達你把舒適與自由放第一位：重實質不重形式，重真舒服不重外表。',
      'Buộc dây cũng thấy lãng phí; cần êm như không đi, mang vô là đi được. Slip-on và dép thể hiện rõ: thoải mái và tự do lên trước.',
      'Ikat tali terasa buang waktu; harus nyaman seperti tak pakai, mudah dipakai kapan saja. Slip-on dan sandal mencerminkan kenyamanan dan kebebasan di atas segalanya.'
    ),
    shoeTypeRecommended: T(
      '슬립온·편안한 슬리퍼 (Slip-on & Easy Slide)',
      'Slip-ons & easy slides',
      'スリッポン＆イージースライド',
      '一脚蹬与轻便拖鞋',
      '一腳蹬與輕便拖鞋',
      'Slip-on & dép slide',
      'Slip-on & sandal slide'
    ),
    modelKeywords: T(
      '반스 슬립온, 버켄스탁, 크록스, UGG 슬리퍼, 어그 플랫폼',
      'Vans Slip-On, Birkenstock, Crocs, UGG slippers, UGG platforms',
      'バンズ スリッポン、ビルケン、クロックス、UGGスリッパ、UGGプラットフォーム',
      'Vans Slip-On、Birkenstock、Crocs、UGG拖鞋、UGG厚底',
      'Vans Slip-On、Birkenstock、Crocs、UGG拖鞋、UGG厚底',
      'Vans Slip-On, Birkenstock, Crocs, UGG, UGG platform',
      'Vans Slip-On, Birkenstock, Crocs, UGG, platform UGG'
    ),
    personalityLink: T(
      '편안함 최우선, 자유로움, 형식 탈피, 솔직함',
      'Comfort first, freedom, low formality, honesty',
      '快適最優先、自由、形式からの解放、正直さ',
      '舒适至上、自由、不拘形式、坦率',
      '舒適至上、自由、不拘形式、坦率',
      'Thoải mái trước, tự do, bỏ hình thức, thật thà',
      'Kenyamanan dulu, bebas, rendah formalitas, jujur'
    ),
    colorRec: T(
      '블랙, 화이트, 베이지, 체크 패턴',
      'Black, white, beige, checks',
      'ブラック、ホワイト、ベージュ、チェック',
      '黑、白、米色、格纹',
      '黑、白、米色、格紋',
      'Đen, trắng, be, kẻ caro',
      'Hitam, putih, beige, kotak-kotak'
    ),
    outfitDirection: T(
      '루즈 티 + 쇼츠 또는 와이드 팬츠 + 슬립온. 가장 나다운 코디',
      'Loose tee + shorts or wide pants + slip-ons—the most you outfit.',
      'ルーズT＋ショーツかワイドパンツ＋スリッポン。いちばん自分らしいコーデ',
      '宽松T + 短裤或阔腿裤 + 一脚蹬，最像你的穿搭',
      '寬鬆T + 短褲或闊腿褲 + 一腳蹬，最像你的穿搭',
      'Áo rộng + short/quần ống rộng + slip-on—đúng chất bạn.',
      'Kaos longgar + celana pendek/lebar + slip-on—paling kamu.'
    ),
    goodMatch: T(
      'Type 3 (러닝화형과 편안함 철학이 맞닿아 있음)',
      'Type 3 (Your comfort philosophy meets the trainer type)',
      'Type 3（ランニング系と「楽さ」の哲学が通じ合う）',
      'Type 3（与跑鞋型在「舒适哲学」上相通）',
      'Type 3（與跑鞋型在「舒適哲學」上相通）',
      'Type 3 (Cùng triết lý thoải mái với kiểu giày chạy)',
      'Type 3 (Filosofi nyaman sama dengan tipe sepatu lari)'
    ),
    badMatch: T(
      'Type 2 (로퍼형의 격식 있는 태도가 가끔 부담스러울 수 있음)',
      'Type 2 (The loafer types polished vibe can feel like a lot sometimes)',
      'Type 2（ローファー系のきちんと感がときどき重く感じる）',
      'Type 2（乐福型的「正式感」有时会让你有压力）',
      'Type 2（樂福型的「正式感」有時會讓你有壓力）',
      'Type 2 (Vẻ chỉn chu của loafer đôi khi hơi nặng)',
      'Type 2 (Aura formal loafer kadang terasa berat)'
    ),
    shareTypeName: T(
      '슬립온·슬리퍼',
      'Slip-ons & slippers',
      'スリッポン＆スリッパ',
      '一脚蹬·拖鞋',
      '一腳蹬·拖鞋',
      'Slip-on & dép',
      'Slip-on & sandal'
    ),
  },
  {
    type: 'Type5',
    emoji: '👢',
    title: T(
      '시간이 지나도 빛나는 당신의 신발, 클래식 앵클 부츠',
      'Timeless shine: classic ankle boots',
      '時間が経っても色あせない、クラシックアンクルブーツ',
      '历久弥新的你：经典踝靴',
      '歷久彌新的你：經典踝靴',
      'Bền với thời gian: boot cổ thấp cổ điển',
      'Awet zaman: ankle boots klasik'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 클래식 앵클 부츠입니다.',
      'The shoes that match your personality best are classic ankle boots.',
      'あなたの性格にいちばん合うのは、クラシックなアンクルブーツです。',
      '最配你性格的是经典踝靴。',
      '最配你性格的是經典踝靴。',
      'Hợp bạn nhất: boot cổ thấp cổ điển.',
      'Paling cocok: ankle boots klasik.'
    ),
    description: T(
      '유행에 흔들리지 않고, 자신만의 기준이 뚜렷하고, 어디서든 자신감 있게 걷는 당신. 앵클 부츠는 계절을 타지 않고 어떤 코디에도 에너지를 더해주는 신발입니다. 강하지 않아 보이지만 실제로는 흔들리지 않는 내면을 가진 당신과 닮아있습니다.',
      'You are not swayed by trends, your standards are clear, and you walk with quiet confidence anywhere. Ankle boots add energy to any outfit in any season. Like you, they may look soft—but they stand firm inside.',
      '流行に流されず、自分の基準ははっきりしていて、どこでも自信を持って歩くあなた。アンクルブーツは季節を問わず、どんなコーデにも力を足します。強そうに見えなくても、内側は揺れない—それがあなたに似ています。',
      '你不随波逐流，标准清晰，走路自带底气。踝靴四季可穿，为任何造型加分。外表未必张扬，内心却很稳——就像你。',
      '你不隨波逐流，標準清晰，走路自帶底氣。踝靴四季可穿，為任何造型加分。外表未必張揚，內心卻很穩——就像你。',
      'Bạn không theo trend, có chuẩn riêng, đi đứng tự tin. Boot cổ thấp nâng mọi outfit mọi mùa. Ngoài mềm trong cứng—giống bạn.',
      'Tak ikut tren, punya standar jelas, berjalan percaya diri. Ankle boots cocok semua musim dan outfit. Terlihat lembut, dalamnya teguh—seperti kamu.'
    ),
    shoeTypeRecommended: T(
      '클래식 앵클 부츠 (Classic Ankle Boots)',
      'Classic ankle boots',
      'クラシックアンクルブーツ',
      '经典踝靴',
      '經典踝靴',
      'Boot cổ thấp cổ điển',
      'Ankle boots klasik'
    ),
    modelKeywords: T(
      '닥터마틴, 첼시 부츠, 사이다 부츠, 리카르도 베베 앵클 부츠',
      'Dr. Martens, Chelsea boots, chelsea-style boots, designer ankle boots',
      'ドクターマーチン、チェルシーブーツ、サイドゴア、デザイナーアンクル',
      'Dr. Martens、切尔西靴、切尔西款、设计师踝靴',
      'Dr. Martens、雀爾喜靴、雀爾喜款、設計師踝靴',
      'Dr. Martens, Chelsea, side-gore, ankle boots designer',
      'Dr. Martens, Chelsea, side-gore, ankle boots desainer'
    ),
    personalityLink: T(
      '자기 확신, 일관성, 시간이 지나도 변하지 않는 가치관',
      'Self-assurance, consistency, values that age well',
      '自己確信、一貫性、時間が経っても変わらない価値観',
      '自信、一致、经得起时间的价值观',
      '自信、一致、經得起時間的價值觀',
      'Tự tin, nhất quán, giá trị bền theo năm tháng',
      'Percaya diri, konsisten, nilai yang awet'
    ),
    colorRec: T(
      '블랙, 브라운, 카멜, 다크 버건디',
      'Black, brown, camel, dark burgundy',
      'ブラック、ブラウン、キャメル、ダークバーガンディ',
      '黑、棕、驼、深酒红',
      '黑、棕、駝、深酒紅',
      'Đen, nâu, camel, đỏ rượu đậm',
      'Hitam, coklat, camel, burgundy gelap'
    ),
    outfitDirection: T(
      '미디 스커트 또는 와이드 팬츠 + 터틀넥 + 앵클 부츠. 계절 불문 완성',
      'Midi skirt or wide pants + turtleneck + ankle boots—works year-round.',
      'ミディスカートかワイドパンツ＋タートル＋アンクルブーツ。季節を問わず完成',
      '中长裙或阔腿裤 + 高领 + 踝靴，四季通吃',
      '中長裙或闊腿褲 + 高領 + 踝靴，四季通吃',
      'Chân váy midi/quần rộng + cổ lọ + boot cổ thấp—cả năm đẹp.',
      'Rok midi/celana lebar + turtleneck + ankle boots—sepanjang tahun.'
    ),
    goodMatch: T(
      'Type 6 (청키 부츠·워커형과 에너지가 잘 맞음)',
      'Type 6 (Energy clicks with chunky boot and work-boot types)',
      'Type 6（チャンキーブーツ・ワーク系とエネルギーが合う）',
      'Type 6（与厚底靴·工装型气场合拍）',
      'Type 6（與厚底靴·工裝型氣場合拍）',
      'Type 6 (Hợp năng lượng với kiểu boot chunky/work)',
      'Type 6 (Energi cocok dengan chunky/work boot)'
    ),
    badMatch: T(
      'Type 4 (슬립온형의 편안함 우선 철학과 방향이 다름)',
      'Type 4 (Comfort-first slip-on types move in a different direction)',
      'Type 4（スリッポン系の「楽さ最優先」と方向が違う）',
      'Type 4（与一脚蹬型「舒适优先」方向不同）',
      'Type 4（與一腳蹬型「舒適優先」方向不同）',
      'Type 4 (Khác hướng với kiểu ưu tiên slip-on)',
      'Type 4 (Arah beda dengan tipe slip-on nyaman dulu)'
    ),
    shareTypeName: T(
      '클래식 앵클 부츠',
      'Classic ankle boots',
      'クラシックアンクル',
      '经典踝靴',
      '經典踝靴',
      'Boot cổ thấp',
      'Ankle boots'
    ),
  },
  {
    type: 'Type6',
    emoji: '🥾',
    title: T(
      '존재감이 곧 스타일인 당신의 신발, 청키 부츠·워커',
      'Presence is your style: chunky boots and workers',
      '存在感がスタイル。チャンキーブーツ＆ワークブーツ',
      '存在感即风格：厚底靴与工装靴',
      '存在感即風格：厚底靴與工裝靴',
      'Sự hiện diện là phong cách: boot chunky & work boot',
      'Presence adalah gaya: chunky boot & work boot'
    ),
    shortDescription: T(
      '당신의 성격과 가장 어울리는 신발은 개성 넘치는 청키 부츠 또는 워커입니다.',
      'The shoes that match your personality best are bold chunky boots or work boots.',
      'あなたの性格にいちばん合うのは、個性あふれるチャンキーブーツかワークブーツです。',
      '最配你性格的是个性十足的厚底靴或工装靴。',
      '最配你性格的是個性十足的厚底靴或工裝靴。',
      'Hợp bạn nhất: boot chunky hoặc work boot nổi bật.',
      'Paling cocok: chunky boot atau work boot berkarakter.'
    ),
    description: T(
      '어디서든 눈에 띄고, 자신만의 스타일 언어가 있고, 신발 하나로 코디 전체의 무게를 바꿀 줄 아는 당신. 청키 부츠와 워커는 그냥 신발이 아닙니다. 당신이 어떤 사람인지를 한 번에 보여주는 선언입니다. 묵직하고 강렬하며, 한 번 보면 잊히지 않는 존재감. 그것이 당신의 스타일입니다.',
      'You stand out anywhere, speak your own style language, and know how one pair of shoes can shift an entire outfit. Chunky boots and workers are not just shoes—they are a statement of who you are. Heavy, bold, unforgettable presence: that is your style.',
      'どこでも目立ち、自分だけのスタイル語彙を持ち、一足でコーデ全体の印象を変えられるあなた。チャンキーブーツとワークはただの靴ではありません。あなたがどんな人かを一度で示す宣言です。重く、強く、一度見たら忘れない存在感。それがあなたのスタイルです。',
      '你走到哪都抢眼，有自己的风格语言，懂得一双鞋能改变整身造型。厚底靴和工装靴不只是鞋，而是一次性亮出你是谁的宣言。厚重、强烈、过目不忘——这就是你的风格。',
      '你走到哪都搶眼，有自己的風格語言，懂得一雙鞋能改變整身造型。厚底靴和工裝靴不只是鞋，而是一次性亮出你是誰的宣言。厚重、強烈、過目不忘——這就是你的風格。',
      'Bạn nổi bật mọi nơi, có ngôn ngữ style riêng, một đôi giày đổi cả outfit. Boot chunky/work không chỉ là giày—đó là tuyên ngôn về bạn. Nặng, mạnh, khó quên.',
      'Kamu menonjol di mana saja, punya bahasa gaya sendiri, sepatu bisa mengubah seluruh look. Chunky/work boot bukan sekadar sepatu—pernyataan siapa kamu. Berat, tegas, tak terlupakan.'
    ),
    shoeTypeRecommended: T(
      '청키 부츠·워커 (Chunky Boots & Workers)',
      'Chunky boots & work boots',
      'チャンキーブーツ＆ワークブーツ',
      '厚底靴与工装靴',
      '厚底靴與工裝靴',
      'Boot chunky & work boot',
      'Chunky boot & work boot'
    ),
    modelKeywords: T(
      '닥터마틴 1460, 팀버랜드, 스티브 매든 플랫폼, 어그 울트라 미니 플랫폼',
      'Dr. Martens 1460, Timberland, Steve Madden platforms, UGG Ultra Mini Platform',
      'ドクターマーチン1460、ティンバーランド、スティーブマッデン、UGGウルトラミニプラットフォーム',
      'Dr. Martens 1460、Timberland、Steve Madden 厚底、UGG Ultra Mini 厚底',
      'Dr. Martens 1460、Timberland、Steve Madden 厚底、UGG Ultra Mini 厚底',
      'Dr. Martens 1460, Timberland, Steve Madden platform, UGG Ultra Mini Platform',
      'Dr. Martens 1460, Timberland, Steve Madden platform, UGG Ultra Mini Platform'
    ),
    personalityLink: T(
      '강한 개성, 자기표현, 눈에 띄는 존재감, 트렌드 선도',
      'Strong personality, self-expression, standout presence, trend-leading',
      '強い個性、自己表現、目立つ存在感、トレンドを先導',
      '强个性、自我表达、抢眼存在感、引领潮流',
      '強個性、自我表達、搶眼存在感、引領潮流',
      'Cá tính mạnh, thể hiện bản thân, nổi bật, dẫn trend',
      'Kepribadian kuat, ekspresi diri, menonjol, memimpin tren'
    ),
    colorRec: T(
      '블랙, 밀리터리 그린, 버건디, 브라운',
      'Black, military green, burgundy, brown',
      'ブラック、ミリタリーグリーン、バーガンディ、ブラウン',
      '黑、军绿、酒红、棕',
      '黑、軍綠、酒紅、棕',
      'Đen, xanh quân đội, đỏ rượu, nâu',
      'Hitam, hijau militer, burgundy, coklat'
    ),
    outfitDirection: T(
      '플레어 데님 + 스트라이프 티 + 청키 부츠. 이것만으로 룩 완성',
      'Flare denim + striped tee + chunky boots—the look is complete.',
      'フレアデニム＋ボーダーT＋チャンキーブーツ。これだけで完成',
      '喇叭牛仔 + 条纹T + 厚底靴，一身就够',
      '喇叭牛仔 + 條紋T + 厚底靴，一身就夠',
      'Jean loe + áo sọc + boot chunky—đủ một set.',
      'Jeans flare + kaos stripe + chunky boot—look selesai.'
    ),
    goodMatch: T(
      'Type 5 (앵클 부츠형과 에너지와 자신감이 잘 통함)',
      'Type 5 (Energy and confidence sync with ankle-boot types)',
      'Type 5（アンクルブーツ系とエネルギーと自信が通じ合う）',
      'Type 5（与踝靴型在能量与自信上合拍）',
      'Type 5（與踝靴型在能量與自信上合拍）',
      'Type 5 (Năng lượng và tự tin hợp boot cổ thấp)',
      'Type 5 (Energi & percaya diri cocok dengan ankle boots)'
    ),
    badMatch: T(
      'Type 1 (미니멀 스니커즈형과는 신발을 고르는 언어가 완전히 다름)',
      'Type 1 (Minimal sneaker types speak a totally different shoe language)',
      'Type 1（ミニマルスニーカー系とは靴を選ぶ言語がまったく違う）',
      'Type 1（与极简运动鞋型选鞋「语言」完全不同）',
      'Type 1（與極簡運動鞋型選鞋「語言」完全不同）',
      'Type 1 (Khác hoàn toàn ngôn ngữ chọn giày với sneaker tối giản)',
      'Type 1 (Bahasa pilih sepatu beda total dengan sneaker minimal)'
    ),
    shareTypeName: T(
      '청키 부츠·워커',
      'Chunky boots & workers',
      'チャンキー＆ワーク',
      '厚底靴·工装靴',
      '厚底靴·工裝靴',
      'Boot chunky',
      'Chunky & work boot'
    ),
  },
];
