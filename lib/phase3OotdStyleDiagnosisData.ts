/** 오늘 뭐 입지? OOTD 스타일 진단 — 12문항 이미지 2지선다, A=0 B=1, 총점 0~12 */

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

export interface Phase3OotdStyleDiagnosisQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3OotdStyleDiagnosisResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  fashionIdentity: Record<string, string>;
  signatureItems: Record<string, string>;
  colorPalette: Record<string, string>;
  ootdDirection: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3OotdStyleDiagnosisResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3OotdStyleDiagnosisQuestions: Phase3OotdStyleDiagnosisQuestion[] = [
  {
    id: 1,
    question: L(
      '오늘 기분 전환이 필요한 날, 어느 쪽 코디가 더 끌리나요?',
      'On a day you need a mood reset, which outfit pulls you more?',
      '気分転換したい日、どちらのコーデに惹かれますか？',
      '需要转换心情的今天，更想穿哪一套？',
      '需要轉換心情的今天，更想穿哪一套？',
      'Ngày cần đổi mood, outfit nào hút bạn hơn?',
      'Hari butuh ubah suasana, outfit mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q1a.jpg',
        label: L(
          '깔끔한 화이트 셔츠 + 슬랙스 + 로퍼 조합',
          'Crisp white shirt + slacks + loafers',
          'クリーンな白シャツ＋スラックス＋ローファー',
          '利落白衬衫 + 西裤 + 乐福鞋',
          '俐落白襯衫 + 西裝褲 + 樂福鞋',
          'Sơ mi trắng + quần tây + loafer gọn gàng',
          'Kemeja putih rapi + slacks + loafer'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q1b.jpg',
        label: L(
          '오버사이즈 후드 + 와이드 팬츠 + 스니커즈 조합',
          'Oversized hoodie + wide pants + sneakers',
          'オーバーサイズフーディ＋ワイドパンツ＋スニーカー',
          '宽松连帽衫 + 阔腿裤 + 运动鞋',
          '寬鬆連帽衫 + 寬褲 + 運動鞋',
          'Hoodie oversize + quần ống rộng + sneaker',
          'Hoodie oversize + celana lebar + sneaker'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '데이트 날 입고 싶은 코디는?',
      'What would you wear on a date?',
      'デートの日に着たいコーデは？',
      '约会日想穿哪套？',
      '約會日想穿哪套？',
      'Buổi hẹn bạn muốn mặc outfit nào?',
      'Pas kencan, mau pakai outfit mana?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q2a.jpg',
        label: L(
          '플로럴 원피스 + 스트랩 샌들 + 미니 숄더백',
          'Floral dress + strappy sandals + mini shoulder bag',
          '花柄ワンピ＋ストラップサンダル＋ミニショルダー',
          '碎花连衣裙 + 细带凉鞋 + 迷你单肩包',
          '碎花連身裙 + 細帶涼鞋 + 迷你肩背包',
          'Váy hoa + sandal quai mảnh + túi đeo vai mini',
          'Dress bunga + sandal tali + tas bahu mini'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q2b.jpg',
        label: L(
          '블랙 슬림 팬츠 + 크롭 재킷 + 앵클 부츠',
          'Black slim pants + cropped jacket + ankle boots',
          'ブラックスリムパンツ＋クロップドジャケット＋アンクルブーツ',
          '黑色修身裤 + 短夹克 + 踝靴',
          '黑色修身褲 + 短版外套 + 踝靴',
          'Quần đen ôm + áo khoác crop + boot cổ thấp',
          'Celana slim hitam + jaket crop + ankle boots'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '주말 브런치 카페에 갈 때 입고 싶은 것은?',
      'What do you want to wear to a weekend brunch café?',
      '週末ブランチカフェに行くなら何を着たい？',
      '周末早午餐咖啡店想穿什么？',
      '週末早午餐咖啡店想穿什麼？',
      'Cuối tuần đi cà phê brunch bạn muốn mặc gì?',
      'Weekend brunch ke kafe, mau pakai apa?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q3a.jpg',
        label: L(
          '린넨 와이드 팬츠 + 스트라이프 티셔츠 + 버킷햇',
          'Linen wide pants + striped tee + bucket hat',
          'リネンワイドパンツ＋ボーダーT＋バケットハット',
          '亚麻阔腿裤 + 条纹T恤 + 渔夫帽',
          '亞麻寬褲 + 條紋T恤 + 漁夫帽',
          'Quần linen ống rộng + áo sọc + mũ bucket',
          'Celana linen lebar + kaos garis + topi bucket'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q3b.jpg',
        label: L(
          '데님 미니스커트 + 빈티지 밴드 티 + 척테일러',
          'Denim mini skirt + vintage band tee + Chucks',
          'デニムミニスカート＋ヴィンテージバンドT＋チャック',
          '牛仔迷你裙 + 复古乐队T + 匡威',
          '牛仔迷你裙 + 復古樂團T + 帆布鞋',
          'Chân váy denim mini + áo band vintage + Converse',
          'Rok mini denim + kaos band vintage + Converse'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '지금 당장 갖고 싶은 아우터는?',
      'Which outer layer do you want right now?',
      '今すぐ欲しいアウターは？',
      '现在最想入哪件外套？',
      '現在最想入哪件外套？',
      'Bạn muốn có ngay áo khoác nào?',
      'Outer layer mana yang paling ingin kamu miliki sekarang?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q4a.jpg',
        label: L(
          '카멜색 롱 울 코트',
          'Camel long wool coat',
          'キャメルのロングウールコート',
          '驼色长款羊毛大衣',
          '駝色長版羊毛大衣',
          'Áo dạ len dài màu camel',
          'Mantel wol panjang warna camel'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q4b.jpg',
        label: L(
          '오버사이즈 레더 재킷',
          'Oversized leather jacket',
          'オーバーサイズレザージャケット',
          '宽松皮夹克',
          '寬鬆皮外套',
          'Áo da oversize',
          'Jaket kulit oversize'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '신발 컬렉션에 하나 더 추가한다면?',
      'If you could add one more pair to your shoe collection?',
      'シューズコレクションにもう一足足すなら？',
      '鞋柜里再添一双的话会选？',
      '鞋櫃裡再添一雙的話會選？',
      'Thêm một đôi giày vào bộ sưu tập thì chọn gì?',
      'Kalau nambah satu pasang sepatu ke koleksi?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q5a.jpg',
        label: L(
          '클래식 화이트 스니커즈',
          'Classic white sneakers',
          'クラシックなホワイトスニーカー',
          '经典小白鞋',
          '經典小白鞋',
          'Giày sneaker trắng cổ điển',
          'Sneaker putih klasik'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q5b.jpg',
        label: L(
          '청키 플랫폼 슈즈 또는 투박한 워커',
          'Chunky platforms or rugged workers',
          'チャンキープラットフォームかごついワークブーツ',
          '厚底鞋或粗犷工装靴',
          '厚底鞋或粗獷工裝靴',
          'Giày đế dày hoặc boot worker hầm hố',
          'Platform chunky atau work boots tebal'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '가방은 어떤 스타일이 더 끌리나요?',
      'Which bag style pulls you more?',
      'バッグはどちらのスタイルに惹かれますか？',
      '哪种包型更吸引你？',
      '哪種包型更吸引你？',
      'Kiểu túi nào hút bạn hơn?',
      'Gaya tas mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q6a.jpg',
        label: L(
          '미니멀 토트백 또는 버킷백',
          'Minimal tote or bucket bag',
          'ミニマルトートかバケットバッグ',
          '极简托特包或水桶包',
          '極簡托特包或水桶包',
          'Tote tối giản hoặc túi bucket',
          'Tote minimalis atau bucket bag'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q6b.jpg',
        label: L(
          '크로스바디 체인백 또는 벨트백',
          'Crossbody chain bag or belt bag',
          'クロスボディのチェーンバッグかベルトバッグ',
          '链条斜挎包或腰包',
          '鏈條斜背包或腰包',
          'Túi đeo chéo dây xích hoặc belt bag',
          'Tas selempang rantai atau belt bag'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '색상 팔레트 중 더 끌리는 쪽은?',
      'Which color palette pulls you more?',
      'カラーパレットはどちらに惹かれますか？',
      '更偏爱哪组配色？',
      '更偏愛哪組配色？',
      'Bảng màu nào hút bạn hơn?',
      'Palet warna mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q7a.jpg',
        label: L(
          '화이트, 베이지, 크림, 아이보리 등 뉴트럴 컬러',
          'Neutrals: white, beige, cream, ivory',
          'ホワイト・ベージュ・クリーム・アイボリーなどニュートラル',
          '白、米色、奶油色、象牙色等中性色',
          '白、米色、奶油色、象牙色等中性色',
          'Trắng, be, kem, ngà — màu trung tính',
          'Putih, beige, cream, ivory — netral'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q7b.jpg',
        label: L(
          '블랙, 차콜, 버건디, 올리브 등 다크 컬러',
          'Dark tones: black, charcoal, burgundy, olive',
          'ブラック・チャコール・バーガンディ・オリーブなどダークカラー',
          '黑、炭灰、酒红、橄榄等深色',
          '黑、炭灰、酒紅、橄欖等深色',
          'Đen, than, đỏ rượu, ôliu — tối',
          'Hitam, arang, burgundy, zaitun — gelap'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '옷을 살 때 가장 중요하게 보는 것은?',
      'What matters most when you buy clothes?',
      '服を買うとき一番大事にするのは？',
      '买衣服时你最看重什么？',
      '買衣服時你最看重什麼？',
      'Mua đồ bạn quan tâm nhất điều gì?',
      'Saat beli baju, yang paling penting?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q8a.jpg',
        label: L(
          '소재와 핏. 내 몸에 자연스럽게 떨어지는지',
          'Fabric and fit—how it drapes on your body',
          '素材とシルエット。体に自然に落ちるか',
          '面料与版型，是否自然贴合身形',
          '面料與版型，是否自然貼合身型',
          'Chất liệu và form — có ôm dáng tự nhiên không',
          'Bahan dan potongan — jatuh di badan dengan natural'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q8b.jpg',
        label: L(
          '디자인과 개성. 이 옷이 나를 얼마나 특별하게 보이게 하는지',
          'Design and personality—how special it makes you look',
          'デザインと個性。どれだけ特別に見せてくれるか',
          '设计与个性，能让你看起来多特别',
          '設計與個性，能讓你看起來多特別',
          'Thiết kế và cá tính — làm bạn nổi bật thế nào',
          'Desain dan kepribadian — seberapa bikin kamu beda'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '인스타그램에서 저장하게 되는 코디는?',
      'Which outfits do you save on Instagram?',
      'Instagramで保存しがちなコーデは？',
      '在 Instagram 上你会保存哪种穿搭？',
      '在 Instagram 上你會儲存哪種穿搭？',
      'Trên Instagram bạn hay lưu outfit kiểu gì?',
      'Di Instagram outfit mana yang sering kamu simpan?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q9a.jpg',
        label: L(
          '군더더기 없이 깔끔한 미니멀 모노톤 코디',
          'Clean minimal monochrome—no extra noise',
          '無駄のないクリーンなミニマルモノトーン',
          '干净利落的极简同色系穿搭',
          '乾淨俐落的極簡同色系穿搭',
          'Tối giản một tông, gọn không thừa',
          'Minimal monokrom, bersih tanpa ribet'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q9b.jpg',
        label: L(
          '레이어드가 많고 믹스매치가 재밌는 스타일링',
          'Heavy layering and playful mix-and-match',
          'レイヤー多めでミックスが楽しいスタイリング',
          '叠穿丰富、混搭有趣的造型',
          '疊穿豐富、混搭有趣的造型',
          'Nhiều lớp, mix & match vui mắt',
          'Layer tebal, mix & match yang seru'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '여행 갈 때 캐리어에 가장 많이 챙기는 아이템은?',
      'What do you pack most in your suitcase for a trip?',
      '旅行のスーツケースに一番多く入れるのは？',
      '旅行时行李箱里装得最多的是哪种单品？',
      '旅行時行李箱裡裝得最多的是哪種單品？',
      'Đi du lịch vali bạn nhét nhiều nhất loại gì?',
      'Pas traveling, barang apa yang paling banyak di koper?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q10a.jpg',
        label: L(
          '다양하게 매치할 수 있는 기본 아이템 위주',
          'Versatile basics you can mix endlessly',
          'いろいろ組み合わせできるベーシック中心',
          '以百搭基础款为主',
          '以百搭基礎款為主',
          'Đồ basic mix được nhiều kiểu',
          'Basic serbaguna yang bisa dikombinasi'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q10b.jpg',
        label: L(
          '그 여행지에서만 입을 특별한 아이템',
          'Special pieces you only wear on that trip',
          'その旅先でしか着ない特別なアイテム',
          '只在目的地穿的特别款',
          '只在目的地穿的特別款',
          'Đồ đặc biệt chỉ mặc ở chuyến đi đó',
          'Item spesial yang cuma dipakai di trip itu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '지금 가장 갖고 싶은 패션 아이템은?',
      'What fashion item do you want most right now?',
      '今いちばん欲しいファッションアイテムは？',
      '现在最想入手的时尚单品是？',
      '現在最想入手的時尚單品是？',
      'Món fashion nào bạn muốn nhất lúc này?',
      'Item fashion apa yang paling ingin kamu miliki sekarang?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q11a.jpg',
        label: L(
          '클래식한 디자이너 피스 하나 (오래 입을 수 있는 것)',
          'One classic designer piece (built to last)',
          '長く着られるクラシックなデザイナーズピース',
          '一件经典设计师款（能穿很久）',
          '一件經典設計師款（能穿很久）',
          'Một món designer cổ điển (mặc lâu)',
          'Satu piece designer klasik (awet dipakai)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q11b.jpg',
        label: L(
          '요즘 트렌딩 중인 핫한 아이템 (지금 이 순간 가장 유행하는 것)',
          'What’s hot and trending right this moment',
          'いま一番トレンドのホットアイテム',
          '当下最火的潮流单品',
          '當下最火的潮流單品',
          'Item đang hot trend lúc này',
          'Item yang lagi viral sekarang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '나의 패션 철학에 가장 가까운 것은?',
      'Which line is closest to your fashion philosophy?',
      'あなたのファッション哲学に一番近いのは？',
      '哪句话最接近你的穿搭哲学？',
      '哪句話最接近你的穿搭哲學？',
      'Câu nào gần với triết lý thời trang của bạn nhất?',
      'Mana yang paling dekat dengan filosofi fashionmu?'
    ),
    options: [
      {
        image: 'p3_test_ootd_style_diagnosis_q12a.jpg',
        label: L(
          '「덜 입을수록 더 세련돼 보인다」',
          '“The less you wear, the more polished you look.”',
          '「少なく着るほど洗練に見える」',
          '「穿得越少越显精致」',
          '「穿得越少越顯精緻」',
          '“Càng ít đồ càng tinh tế.”',
          '“Semakin sedikit, semakin chic.”'
        ),
        score: 0,
      },
      {
        image: 'p3_test_ootd_style_diagnosis_q12b.jpg',
        label: L(
          '「패션은 자기표현이다. 눈에 띄어야 의미가 있다」',
          '“Fashion is self-expression—you have to stand out.”',
          '「ファッションは自己表現。目立ってこそ意味がある」',
          '「时尚是自我表达，不亮眼就没意义」',
          '「時尚是自我表達，不亮眼就沒意義」',
          '“Thời trang là bản thân—phải nổi bật mới có ý nghĩa.”',
          '“Fashion itu ekspresi diri—harus mencolok.”'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3OotdStyleDiagnosisResults: Phase3OotdStyleDiagnosisResult[] = [
  {
    type: 'Type1',
    emoji: '🤍',
    title: L(
      '적을수록 더 완벽한, 미니멀리스트',
      'Less is flawless—the minimalist',
      '少ないほど完璧、ミニマリスト',
      '越少越完美：极简主义者',
      '越少越完美：極簡主義者',
      'Càng ít càng hoàn hảo — tối giản',
      'Makin sedikit makin sempurna — minimalis'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 군더더기 없는 미니멀리즘입니다.',
      'Your fashion identity is pared-back minimalism.',
      'あなたのファッションアイデンティティは無駄のないミニマリズムです。',
      '你的时尚身份是利落的极简主义。',
      '你的時尚身份是俐落的極簡主義。',
      'Bản sắc thời trang của bạn là tối giản gọn gàng.',
      'Identitas fashionmu adalah minimalisme tanpa ribet.'
    ),
    description: L(
      '뉴트럴 컬러, 클린한 실루엣, 좋은 소재. 당신에게 패션은 과시가 아닌 정제입니다. 로고도 없고 화려하지도 않지만, 입을수록 왜 저 사람은 저렇게 세련돼 보이지 싶은 그 사람이 바로 당신입니다. 옷이 적어도 코디가 되는 이유는 기본기가 완벽하기 때문입니다.',
      'Neutrals, clean lines, quality fabric. For you fashion is refinement, not flex. No loud logos—yet people wonder how you look so polished. Fewer pieces still “work” because your basics are flawless.',
      'ニュートラル、クリーンなシルエット、良い素材。あなたにとってファッションは誇示ではなく洗練。派手なロゴはなくても、「なぜあの人はあんなに素敵に見えるの？」と思わせるのがあなたです。服が少なくても成立するのは、基礎が完璧だから。',
      '中性色、利落廓形、好面料。对你来说时尚是克制不是炫耀。没有大logo也不花哨，却让人觉得「为什么穿得这么高级」——那就是你。衣服少也能成搭，因为基本功过硬。',
      '中性色、俐落廓形、好面料。對你來說時尚是克制不是炫耀。沒有大logo也不花俏，卻讓人覺得「為什麼穿得這麼高級」——那就是你。衣服少也能成搭，因為基本功過硬。',
      'Tông trung tính, form gọn, vải đẹp. Với bạn thời trang là tinh chứ không phải khoe. Không logo nhưng người ta vẫn thấy bạn thanh lịch — vì nền tảng quá chuẩn.',
      'Netral, siluet bersih, bahan bagus. Fashion untukmu adalah penyempurnaan, bukan pamer. Tanpa logo besar tapi tetap terlihat chic — dasar-dasarmu kuat.'
    ),
    fashionIdentity: L(
      '미니멀리스트 (Minimalist)',
      'Minimalist',
      'ミニマリスト',
      '极简主义者',
      '極簡主義者',
      'Tối giản (Minimalist)',
      'Minimalis'
    ),
    signatureItems: L(
      '화이트 셔츠 / 베이지 슬랙스 / 클린 스니커즈 / 미니멀 토트백',
      'White shirt / beige slacks / clean sneakers / minimal tote',
      '白シャツ／ベージュスラックス／クリーンスニーカー／ミニマルトート',
      '白衬衫 / 米色西裤 / 简约运动鞋 / 极简托特包',
      '白襯衫 / 米色西裝褲 / 簡約運動鞋 / 極簡托特包',
      'Sơ mi trắng / quầy be / sneaker gọn / tote tối giản',
      'Kemeja putih / slacks beige / sneaker bersih / tote minimal'
    ),
    colorPalette: L(
      '화이트·아이보리·베이지·크림·그레이',
      'White · ivory · beige · cream · gray',
      'ホワイト・アイボリー・ベージュ・クリーム・グレー',
      '白·象牙色·米色·奶油色·灰',
      '白·象牙色·米色·奶油色·灰',
      'Trắng · ngà · be · kem · xám',
      'Putih · gading · beige · cream · abu'
    ),
    ootdDirection: L(
      '화이트 셔츠 하나 잘 입기. 터크인하고 슬랙스에 로퍼면 완성',
      'Nail one white shirt: tuck in, slacks, loafers—done.',
      '白シャツ一枚をきちんと。タックインしてスラックスにローファーで完成。',
      '把一件白衬衫穿好：束进西裤配乐福，完成。',
      '把一件白襯衫穿好：束進西褲配樂福，完成。',
      'Một sơ mi trắng chỉn chu, sơ vin + slacks + loafer là xong.',
      'Satu kemeja putih rapi, tuck in + slacks + loafer — selesai.'
    ),
    goodMatch: L(
      'Type 2 (캐주얼 컴포트형 — 서로의 스타일이 자연스럽게 어울림)',
      'Type 2 (Casual comfort—styles blend naturally)',
      'Type 2（カジュアルコンフォート型—お互いのスタイルが自然に馴染む）',
      'Type 2（休闲舒适型——彼此风格自然合拍）',
      'Type 2（休閒舒適型——彼此風格自然合拍）',
      'Type 2 (Casual comfort — hợp gu tự nhiên)',
      'Type 2 (Casual comfort — cocok tanpa dipaksakan)'
    ),
    badMatch: L(
      'Type 6 (맥시멀리스트 — 서로의 옷장이 완전히 다른 세계)',
      'Type 6 (Maximalist—your closets are different worlds)',
      'Type 6（マキシマリスト—クローゼットがまるで別世界）',
      'Type 6（极繁型——衣橱像两个世界）',
      'Type 6（極繁型——衣櫥像兩個世界）',
      'Type 6 (Maximalist — tủ đồ như hai thế giới)',
      'Type 6 (Maximalis — lemari beda dunia)'
    ),
    shareTypeName: L(
      '미니멀리스트',
      'Minimalist',
      'ミニマリスト',
      '极简主义者',
      '極簡主義者',
      'Tối giản',
      'Minimalis'
    ),
  },
  {
    type: 'Type2',
    emoji: '🧸',
    title: L(
      '편안함이 곧 스타일인, 캐주얼 컴포트형',
      'Comfort is the look—casual comfort',
      '快適さがそのままスタイル、カジュアルコンフォート型',
      '舒服就是风格：休闲舒适型',
      '舒服就是風格：休閒舒適型',
      'Thoải mái là phong cách — casual comfort',
      'Nyaman itu gaya — casual comfort'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 「입기 편하면서도 멋있어 보이는 것」입니다.',
      'Your identity is “comfy but still looks good.”',
      'あなたのアイデンティティは「着心地よく、でもちゃんとかっこいい」。',
      '你的风格是「好穿又要好看」。',
      '你的風格是「好穿又要好看」。',
      'Bạn là kiểu “mặc thoải mái mà vẫn ổn”.',
      'Kamu tipe “nyaman tapi tetap keren.”'
    ),
    description: L(
      '오버사이즈, 루즈핏, 편안한 소재. 억지로 꾸미지 않아도 자연스럽게 멋있어 보이는 스타일을 추구합니다. 트렌드를 억지로 따라가기보다는 나에게 맞는 편안한 스타일을 오래 유지하는 타입입니다. 실제로 이 스타일이 가장 오래 입어도 지치지 않습니다.',
      'Oversized, relaxed fits, easy fabrics. You look good without trying too hard. You’d rather keep a comfy personal uniform than chase every trend—and it never gets tiring.',
      'オーバーサイズ、ルーズフィット、着心地の良い素材。無理に着飾らなくても自然にかっこよく見えるスタイルを好みます。無理にトレンド追いより、自分に合う快適スタイルを長く続けるタイプ。実際いちばん疲れにくいのもこのスタイルです。',
      '宽松版型、舒适面料，不刻意也很顺眼。比起硬追潮流，你更想长期穿让自己舒服的风格，而且真的不容易腻。',
      '寬鬆版型、舒適面料，不刻意也很順眼。比起硬追潮流，你更想長期穿讓自己舒服的風格，而且真的不容易膩。',
      'Form rộng, vải dễ chịu — không cố cũng ổn. Bạn giữ phong cách thoải mái lâu dài hơn là chạy theo trend.',
      'Oversize, bahan nyaman — tanpa dipaksakan tetap keren. Lebih pilih gaya nyaman jangka panjang daripada ikut trend.'
    ),
    fashionIdentity: L(
      '캐주얼 컴포트형 (Casual Comfort)',
      'Casual comfort',
      'カジュアルコンフォート型',
      '休闲舒适型',
      '休閒舒適型',
      'Casual comfort',
      'Casual comfort'
    ),
    signatureItems: L(
      '오버사이즈 후드 / 와이드 팬츠 / 청키 스니커즈 / 크로스백',
      'Oversized hoodie / wide pants / chunky sneakers / crossbody',
      'オーバーサイズフーディ／ワイドパンツ／チャンキースニーカー／ショルダー',
      '宽松连帽衫 / 阔腿裤 / 厚底运动鞋 / 斜挎包',
      '寬鬆連帽衫 / 寬褲 / 厚底運動鞋 / 斜背包',
      'Hoodie rộng / quần ống rộng / sneaker đế dày / túi chéo',
      'Hoodie besar / celana lebar / sneaker chunky / sling bag'
    ),
    colorPalette: L(
      '그레이·카키·네이비·블랙·화이트',
      'Gray · khaki · navy · black · white',
      'グレー・カーキ・ネイビー・ブラック・ホワイト',
      '灰·卡其·藏青·黑·白',
      '灰·卡其·藏青·黑·白',
      'Xám · kaki · navy · đen · trắng',
      'Abu · khaki · navy · hitam · putih'
    ),
    ootdDirection: L(
      '오버핏 스웨트셔츠 + 조거 팬츠 + 슬리퍼. 이것만으로도 충분히 멋있음',
      'Oversized sweatshirt + joggers + slides—that’s already a look.',
      'オーバーフィットスウェット＋ジョガー＋スライド。これだけで十分かっこいい。',
      '宽松卫衣 + 慢跑裤 + 拖鞋，这样就很可以。',
      '寬鬆衛衣 + 慢跑褲 + 拖鞋，這樣就很可以。',
      'Áo nỉ rộng + jogger + dép — thế là đủ chất.',
      'Sweatshirt besar + jogger + sandal — sudah oke.'
    ),
    goodMatch: L(
      'Type 1 (미니멀리스트 — 서로의 스타일이 자연스럽게 섞임)',
      'Type 1 (Minimalist—styles mix naturally)',
      'Type 1（ミニマリスト—お互いのスタイルが自然に混ざる）',
      'Type 1（极简型——彼此风格自然融合）',
      'Type 1（極簡型——彼此風格自然融合）',
      'Type 1 (Minimalist — hòa gu dễ)',
      'Type 1 (Minimalis — nyatu natural)'
    ),
    badMatch: L(
      'Type 5 (로맨틱형 — 코디 방향이 너무 달라서 쇼핑을 같이 가면 의견이 안 맞음)',
      'Type 5 (Romantic—shopping together gets opinion clashes)',
      'Type 5（ロマンティック型—コーデの方向性が違いすぎて一緒の買い物は意見が合わない）',
      'Type 5（浪漫型——穿搭方向差太多，一起逛街容易吵）',
      'Type 5（浪漫型——穿搭方向差太多，一起逛街容易吵）',
      'Type 5 (Romantic — đi shopping chung dễ trật ý)',
      'Type 5 (Romantis — belanja bareng sering beda selera)'
    ),
    shareTypeName: L(
      '캐주얼 컴포트형',
      'Casual comfort',
      'カジュアルコンフォート型',
      '休闲舒适型',
      '休閒舒適型',
      'Casual comfort',
      'Casual comfort'
    ),
  },
  {
    type: 'Type3',
    emoji: '🎸',
    title: L(
      '빈티지 감성으로 나만의 서사를 입는, 빈티지 레트로형',
      'Vintage soul—you wear your own story',
      'ヴィンテージ感で自分だけの物語を纏う、ヴィンテージレトロ型',
      '复古感性，穿出你的故事：复古型',
      '復古感性，穿出你的故事：復古型',
      'Vintage — mặc cả câu chuyện riêng',
      'Vintage — pakai ceritamu sendiri'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 과거에서 가져온 현재의 나만의 스타일입니다.',
      'Your style borrows the past to build the present you.',
      'あなたのスタイルは過去から持ち込んだ、いまの自分だけのもの。',
      '你的风格是从过去借来、写进当下的自己。',
      '你的風格是從過去借來、寫進當下的自己。',
      'Phong cách lấy cảm hứng quá khứ để làm “bạn” hôm nay.',
      'Gaya yang mengambil masa lalu untuk jadi dirimu sekarang.'
    ),
    description: L(
      '새 옷보다 오래된 옷이 더 멋있어 보이는 걸 알고 있고, 빈티지 숍에서 보물 찾는 걸 즐깁니다. 누가 봐도 남다른 조합, 다른 사람들이 모르는 브랜드, 세월이 느껴지는 워싱과 색바램이 매력입니다. 패션으로 나만의 서사를 만들어가는 타입입니다.',
      'You know worn-in pieces often beat brand-new. You love digging for gems in vintage shops—unique combos, obscure labels, fades and washes with character. Fashion is how you tell your story.',
      '新品よりヴィンテージのほうがカッコいいと分かっていて、古着屋で宝探しが好き。誰にも真似できない組み合わせ、知る人ぞ知るブランド、色褪せや加工の味が魅力。ファッションで自分だけの物語をつくるタイプです。',
      '你知道旧衣有时比新衣更有味道，也爱古着店淘货。独特搭配、小众牌子、水洗褪色都是魅力。你用穿搭写自己的故事。',
      '你知道舊衣有時比新衣更有味道，也愛古著店淘貨。獨特搭配、小眾牌子、水洗褪色都是魅力。你用穿搭寫自己的故事。',
      'Bạn thích đồ cũ đôi khi hơn đồ mới, thích săn đồ vintage. Phối lạ, brand hiếm, fade — đó là cách bạn kể chuyện.',
      'Kamu tahu baju bekas kadang lebih keren, suka hunting vintage. Kombinasi unik, brand langka — ceritamu lewat outfit.'
    ),
    fashionIdentity: L(
      '빈티지 레트로형 (Vintage Retro)',
      'Vintage retro',
      'ヴィンテージレトロ型',
      '复古怀旧型',
      '復古懷舊型',
      'Vintage retro',
      'Vintage retro'
    ),
    signatureItems: L(
      '빈티지 청자켓 / 밴드 티 / 척테일러 / 플란넬 셔츠 / 고스트링 백팩',
      'Vintage denim jacket / band tee / Chucks / flannel / drawstring backpack',
      'ヴィンテージGジャン／バンドT／チャック／フランネル／巾着バックパック',
      '复古牛仔夹克 / 乐队T / 帆布鞋 / 法兰绒 / 抽绳背包',
      '復古牛仔外套 / 樂團T / 帆布鞋 / 法蘭絨 / 抽繩背包',
      'Áo jean vintage / áo band / Converse / flannel / balo dây rút',
      'Jaket denim vintage / kaos band / Converse / flanel / ransel serut'
    ),
    colorPalette: L(
      '워싱 블루·버건디·올리브·오렌지·브라운',
      'Washed blue · burgundy · olive · orange · brown',
      'ウォッシュブルー・バーガンディ・オリーブ・オレンジ・ブラウン',
      '水洗蓝·酒红·橄榄·橙·棕',
      '水洗藍·酒紅·橄欖·橙·棕',
      'Xanh wash · đỏ rượu · ôliu · cam · nâu',
      'Biru wash · burgundy · zaitun · oranye · cokelat'
    ),
    ootdDirection: L(
      '빈티지 워싱 청자켓 + 흰 티 + 스트레이트 데님 + 척테일러. 클래식한 조합',
      'Washed denim jacket + white tee + straight jeans + Chucks—a classic mix.',
      'ウォッシュGジャン＋白T＋ストレートデニム＋チャック。王道の組み合わせ。',
      '水洗牛仔夹克 + 白T + 直筒牛仔 + 帆布鞋，经典组合。',
      '水洗牛仔外套 + 白T + 直筒牛仔 + 帆布鞋，經典組合。',
      'Áo jean wash + áo trắng + jean thẳng + Converse — combo kinh điển.',
      'Jaket denim wash + kaos putih + jeans lurus + Converse — klasik.'
    ),
    goodMatch: L(
      'Type 4 (스트릿형 — 빈티지와 스트릿이 만나면 가장 힙한 조합)',
      'Type 4 (Street—vintage × street is the coolest combo)',
      'Type 4（ストリート型—ヴィンテージ×ストリートが一番ハイプ）',
      'Type 4（街头型——古着×街头最对味）',
      'Type 4（街頭型——古著×街頭最對味）',
      'Type 4 (Street — vintage + street = chất nhất)',
      'Type 4 (Street — vintage × street paling kece)'
    ),
    badMatch: L(
      'Type 1 (미니멀리스트 — 「왜 저렇게 낡은 옷을 입어?」라고 생각할 수 있음)',
      'Type 1 (Minimalist—they might ask “why the worn look?”)',
      'Type 1（ミニマリスト—「なんでそんなに古着っぽいの？」と思われがち）',
      'Type 1（极简型——可能觉得「怎么穿这么旧」）',
      'Type 1（極簡型——可能覺得「怎麼穿這麼舊」）',
      'Type 1 (Minimalist — có thể thấy “sao mặc đồ cũ vậy”)',
      'Type 1 (Minimalis — bisa kelihatan “kok lusuh”)'
    ),
    shareTypeName: L(
      '빈티지 레트로형',
      'Vintage retro',
      'ヴィンテージレトロ型',
      '复古怀旧型',
      '復古懷舊型',
      'Vintage retro',
      'Vintage retro'
    ),
  },
  {
    type: 'Type4',
    emoji: '🏙️',
    title: L(
      '도시의 에너지를 입는, 스트릿 캐주얼형',
      'City energy on you—street casual',
      '街のエネルギーを纏う、ストリートカジュアル型',
      '穿出城市能量：街头休闲型',
      '穿出城市能量：街頭休閒型',
      'Năng lượng phố thị — street casual',
      'Energi kota — street casual'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 도시 한복판에서 가장 자연스러운 스타일입니다.',
      'You look most “right” in the middle of the city.',
      'あなたのスタイルは都市のど真んでもっとも自然に映えるタイプ。',
      '你的穿搭在城市中心最自在。',
      '你的穿搭在城市中心最自在。',
      'Outfit bạn “hợp” nhất giữa phố xá.',
      'Kamu paling pas di tengah kota.'
    ),
    description: L(
      '그래픽 티, 카고 팬츠, 레더 재킷, 청키 슈즈. 트렌드에 민감하고 새로운 브랜드나 아이템에 빠르게 반응합니다. 스트릿 패션은 단순히 편한 옷이 아니라 하나의 문화이고 언어입니다. SNS 피드가 곧 패션 잡지인 타입입니다.',
      'Graphic tees, cargos, leather jackets, chunky shoes. You’re quick to pick up new brands and drops. Streetwear isn’t just comfy clothes—it’s culture. Your feed is basically a fashion zine.',
      'グラフィックT、カーゴ、レザー、チャンキーシューズ。トレンド感度が高く、新しいブランドやアイテムにも反応が早い。ストリートはただの楽な服ではなく文化であり言語。SNSフィードがそのままファッション誌なタイプ。',
      '印花T、工装裤、皮夹克、厚底鞋。你对潮流敏感，新牌子新单品反应快。街头不只是舒服，是一种文化。你的动态像时尚杂志。',
      '印花T、工裝褲、皮夾克、厚底鞋。你對潮流敏感，新牌子新單品反應快。街頭不只是舒服，是一種文化。你的動態像時尚雜誌。',
      'Áo graphic, cargo, da, giày chunky. Bạn nhạy trend, bắt drop nhanh. Street là vă hóa — feed bạn như tạp chí.',
      'Graphic tee, cargo, kulit, sepatu tebal. Cepat tangkap trend. Street itu budaya — feed kamu kayak majalah.'
    ),
    fashionIdentity: L(
      '스트릿 캐주얼형 (Street Casual)',
      'Street casual',
      'ストリートカジュアル型',
      '街头休闲型',
      '街頭休閒型',
      'Street casual',
      'Street casual'
    ),
    signatureItems: L(
      '그래픽 티 / 카고 팬츠 / 레더 재킷 / 청키 스니커즈 / 벨트백',
      'Graphic tee / cargo pants / leather jacket / chunky sneakers / belt bag',
      'グラフィックT／カーゴ／レザージャケット／チャンキースニーカー／ボディバッグ',
      '印花T / 工装裤 / 皮夹克 / 厚底运动鞋 / 腰包',
      '印花T / 工裝褲 / 皮外套 / 厚底運動鞋 / 腰包',
      'Áo graphic / cargo / áo da / sneaker chunky / belt bag',
      'Kaos grafis / cargo / jaket kulit / sneaker chunky / waist bag'
    ),
    colorPalette: L(
      '블랙·화이트·올리브·카키 + 포인트 컬러',
      'Black · white · olive · khaki + a pop color',
      'ブラック・ホワイト・オリーブ・カーキ＋差し色',
      '黑·白·橄榄·卡其 + 点缀色',
      '黑·白·橄欖·卡其 + 點綴色',
      'Đen · trắng · ôliu · kaki + màu nhấn',
      'Hitam · putih · zaitun · khaki + aksen warna'
    ),
    ootdDirection: L(
      '그래픽 티 + 카고 팬츠 + 청키 슈즈 + 볼캡. 레이어드 하나 더하면 완성',
      'Graphic tee + cargos + chunky shoes + cap—add a layer to finish.',
      'グラフィックT＋カーゴ＋チャンキー＋キャップ。レイヤーを一枚足して完成。',
      '印花T + 工装裤 + 厚底鞋 + 棒球帽，加一层外套收尾。',
      '印花T + 工裝褲 + 厚底鞋 + 棒球帽，加一層外套收尾。',
      'Graphic + cargo + chunky + mũ lưỡi trai — thêm một lớp là xong.',
      'Graphic + cargo + chunky + topi — tambah satu layer selesai.'
    ),
    goodMatch: L(
      'Type 3 (빈티지형 — 빈티지와 스트릿이 만나면 최강 조합)',
      'Type 3 (Vintage—vintage × street is elite)',
      'Type 3（ヴィンテージ型—ヴィンテージ×ストリートが最強）',
      'Type 3（复古型——古着×街头最强拍档）',
      'Type 3（復古型——古著×街頭最強拍檔）',
      'Type 3 (Vintage — vintage + street = đỉnh)',
      'Type 3 (Vintage — combo terkuat)'
    ),
    badMatch: L(
      'Type 5 (로맨틱형 — 함께 코디 맞추기가 어려운 조합)',
      'Type 5 (Romantic—hard to match outfits together)',
      'Type 5（ロマンティック型—一緒コーデが合わせにくい）',
      'Type 5（浪漫型——情侣穿搭很难对齐）',
      'Type 5（浪漫型——情侶穿搭很難對齊）',
      'Type 5 (Romantic — khó match đồ đôi)',
      'Type 5 (Romantis — susah padu padan couple)'
    ),
    shareTypeName: L(
      '스트릿 캐주얼형',
      'Street casual',
      'ストリートカジュアル型',
      '街头休闲型',
      '街頭休閒型',
      'Street casual',
      'Street casual'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌸',
    title: L(
      '입는 것만으로 분위기가 되는, 로맨틱 페미닌형',
      'Outfit is the mood—romantic feminine',
      '着るだけでムードになる、ロマンティックフェミニン型',
      '穿上就有氛围：浪漫柔美型',
      '穿上就有氛圍：浪漫柔美型',
      'Mặc lên là có vibe — romantic feminine',
      'Dipakai langsung ada suasana — feminin romantis'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 입는 것만으로 하나의 무드가 되는 스타일입니다.',
      'Your clothes are the atmosphere.',
      'あなたの服そのものがムードになるタイプ。',
      '你的穿搭本身就是氛围。',
      '你的穿搭本身就是氛圍。',
      'Trang phục của bạn là cả bầu không khí.',
      'Outfitmu adalah mood-nya.'
    ),
    description: L(
      '플로럴, 레이스, 시폰, 프릴, 부드러운 컬러. 패션으로 감성을 표현하고 분위기를 만드는 것을 즐깁니다. 드레스 하나로 하루의 기분이 달라지고, 예쁜 옷을 입었을 때의 설렘이 가장 큰 동기입니다. 옷이 곧 자신감인 타입입니다.',
      'Florals, lace, chiffon, ruffles, soft tones. You express feeling through clothes and build a vibe. One dress can change your day—the thrill of wearing something pretty is huge motivation. Clothes are confidence.',
      '花柄、レース、シフォン、フリル、柔らかい色。ファッションで感性を表し、空気をつくるのが好き。ワンピ一枚で一日の気分が変わり、可愛い服を着たときの高揚感が最大の動機。服がそのまま自信になるタイプ。',
      '碎花、蕾丝、雪纺、荷叶边、柔和色系。你用穿搭表达情绪、营造氛围。一条裙子能改变一天的心情，穿好看的衣服是最大的动力。衣服就是你的自信。',
      '碎花、蕾絲、雪紡、荷葉邊、柔和色系。你用穿搭表達情緒、營造氛圍。一條裙子能改變一天的心情，穿好看的衣服是最大的動力。衣服就是你的自信。',
      'Hoa, ren, voan, bèo nhún, tông mềm. Bạn thể hiện cảm xúc qua đồ. Một chiếc váy đổi cả ngày — động lực là được mặc đẹp.',
      'Bunga, renda, sifon, ruffle, warna lembut. Ekspresi lewat outfit. Satu dress bisa ubah hari — motivasi utama tampil cantik.'
    ),
    fashionIdentity: L(
      '로맨틱 페미닌형 (Romantic Feminine)',
      'Romantic feminine',
      'ロマンティックフェミニン型',
      '浪漫柔美型',
      '浪漫柔美型',
      'Romantic feminine',
      'Feminin romantis'
    ),
    signatureItems: L(
      '플로럴 원피스 / 스트랩 샌들 / 미니 숄더백 / 니트 가디건 / 헤어 액세서리',
      'Floral dress / strappy sandals / mini shoulder bag / knit cardigan / hair accessories',
      '花柄ワンピ／ストラップサンダル／ミニショルダー／ニットカーディガン／ヘアアクセ',
      '碎花连衣裙 / 细带凉鞋 / 迷你单肩包 / 针织开衫 / 发饰',
      '碎花連身裙 / 細帶涼鞋 / 迷你肩背包 / 針織開衫 / 髮飾',
      'Váy hoa / sandal quai / túi mini / cardigan / phụ kiện tóc',
      'Dress bunga / sandal tali / tas mini / kardigan / aksesori rambut'
    ),
    colorPalette: L(
      '핑크·라벤더·화이트·민트·복숭아',
      'Pink · lavender · white · mint · peach',
      'ピンク・ラベンダー・ホワイト・ミント・ピーチ',
      '粉·薰衣草紫·白·薄荷·桃色',
      '粉·薰衣草紫·白·薄荷·桃色',
      'Hồng · lavender · trắng · bạc hà · đào',
      'Pink · lavender · putih · mint · peach'
    ),
    ootdDirection: L(
      '플로럴 원피스 하나에 스트랩 샌들. 작은 숄더백 하나면 완성. 가디건 걸치면 더 완벽',
      'Floral dress + strappy sandals + a small shoulder bag—add a cardigan for perfection.',
      '花柄ワンピにストラップサンダル。ミニショルダーで完成。カーディガンを羽織ればさらに完璧。',
      '碎花裙配细带凉鞋和小包就齐活，加件开衫更完美。',
      '碎花裙配細帶涼鞋和小包就齊活，加件開衫更完美。',
      'Váy hoa + sandal + túi nhỏ — khoác cardigan là perfect.',
      'Dress bunga + sandal + tas kecil — tambah kardigan sempurna.'
    ),
    goodMatch: L(
      'Type 1 (미니멀리스트 — 로맨틱과 미니멀이 만나면 세련된 조화)',
      'Type 1 (Minimalist—romantic × minimal reads chic)',
      'Type 1（ミニマリスト—ロマンティック×ミニマルが洗練に見える）',
      'Type 1（极简型——浪漫配极简很高级）',
      'Type 1（極簡型——浪漫配極簡很高級）',
      'Type 1 (Minimalist — romantic + tối giản = thanh lịch)',
      'Type 1 (Minimalis — romantis + minimal = chic)'
    ),
    badMatch: L(
      'Type 4 (스트릿형 — 커플 코디 맞추기가 세상에서 가장 어려운 조합)',
      'Type 4 (Street—matching couple fits is nearly impossible)',
      'Type 4（ストリート型—カップルコーデを合わせるのが一番難しい）',
      'Type 4（街头型——情侣穿搭最难对齐）',
      'Type 4（街頭型——情侶穿搭最難對齊）',
      'Type 4 (Street — khó nhất để match đồ đôi)',
      'Type 4 (Street — paling susah couple match)'
    ),
    shareTypeName: L(
      '로맨틱 페미닌형',
      'Romantic feminine',
      'ロマンティックフェミニン型',
      '浪漫柔美型',
      '浪漫柔美型',
      'Romantic feminine',
      'Feminin romantis'
    ),
  },
  {
    type: 'Type6',
    emoji: '🎨',
    title: L(
      '패션이 예술인, 맥시멀 개성파형',
      'Fashion as art—maximalist individualist',
      'ファッションはアート、マキシマル個性派型',
      '时尚即艺术：极繁个性派',
      '時尚即藝術：極繁個性派',
      'Thời trang là nghệ thuật — maximalist',
      'Fashion adalah seni — maximalis'
    ),
    shortDescription: L(
      '당신의 패션 정체성은 입는 것 자체가 하나의 작품인 스타일입니다.',
      'Your outfit is basically a piece on its own.',
      '着るものそのものが作品になるタイプ。',
      '你的穿搭本身就是一件作品。',
      '你的穿搭本身就是一件作品。',
      'Set đồ của bạn như một tác phẩm.',
      'Outfitmu seperti satu karya.'
    ),
    description: L(
      '믹스매치, 레이어드, 패턴 온 패턴, 과감한 컬러 블로킹. 남들 눈에 이상해 보여도 괜찮습니다. 오히려 그게 의도입니다. 패션은 자기표현이고 예술이라고 진심으로 믿는 타입입니다. 옷장에 없는 것이 없고, 코디가 매일 달라서 주변 사람들이 신기해합니다.',
      'Mix-and-match, layers, pattern on pattern, bold color blocks. Weird to others? That’s the point. You truly believe fashion is self-expression and art. Your closet has everything and your looks change daily—people are amazed.',
      'ミックス、レイヤー、柄×柄、大胆なカラーブロック。人から見て変でもOK。むしろそうしたい。ファッションは自己表現であり芸術だと本気で信じるタイプ。クローゼットは何でもあり、毎日コーデが違って周りが驚く。',
      '混搭、叠穿、图案叠图案、大胆撞色。别人觉得怪也没关系，那就是你要的。你真心相信时尚是自我表达与艺术。衣柜什么都有，每天造型都不同，旁人直呼神奇。',
      '混搭、疊穿、圖案疊圖案、大膽撞色。別人覺得怪也沒關係，那就是你要的。你真心相信時尚是自我表達與藝術。衣櫃什麼都有，每天造型都不同，旁人直呼神奇。',
      'Mix layer, họa tiết chồng họa tiết, color block mạnh. Lạ cũng được — đó là ý đồ. Bạn tin thời trang là nghệ thuật. Tủ đồ đủ thứ, mỗi ngày một kiểu.',
      'Mix layer, pattern on pattern, warna berani. Aneh? Memang sengaja. Kamu percaya fashion itu seni. Lemari penuh, outfit beda tiap hari.'
    ),
    fashionIdentity: L(
      '맥시멀 개성파형 (Maximalist Individualist)',
      'Maximalist individualist',
      'マキシマル個性派型',
      '极繁个性派',
      '極繁個性派',
      'Maximalist cá nhân',
      'Individualis maximalis'
    ),
    signatureItems: L(
      '패턴 아이템 / 레이어드용 다양한 피스들 / 특이한 액세서리 / 플랫폼 슈즈',
      'Pattern pieces / many layering options / quirky accessories / platform shoes',
      '柄アイテム／レイヤー用の多様なピース／個性的アクセ／プラットフォームシューズ',
      '图案单品 / 多件叠穿 / 个性配饰 / 厚底鞋',
      '圖案單品 / 多件疊穿 / 個性配飾 / 厚底鞋',
      'Đồ họa tiết / nhiều lớp / phụ kiện lạ / giày platform',
      'Motif unik / banyak layer / aksesori nyeleneh / sepatu platform'
    ),
    colorPalette: L(
      '제한 없음. 모든 컬러가 팔레트',
      'No limits—every color is fair game',
      '制限なし。すべての色がパレット',
      '不设限，所有颜色都是调色盘',
      '不設限，所有顏色都是調色盤',
      'Không giới hạn — mọi màu đều được',
      'Tanpa batas — semua warna boleh'
    ),
    ootdDirection: L(
      '오늘 제일 특이해 보이는 것부터 꺼내서 입기. 거기에 뭔가 하나 더 얹기',
      'Start with the wildest piece today—then add one more layer.',
      '今日いちばん個性的なものから着る。そこにもう一枚足す。',
      '今天从最特别的那件穿起，再加一层。',
      '今天從最特別的那件穿起，再加一層。',
      'Mặc món “lạ” nhất trước — rồi thêm một lớp nữa.',
      'Mulai dari potongan paling nyeleneh — lalu tambah satu lagi.'
    ),
    goodMatch: L(
      'Type 3 (빈티지형 — 개성 있는 아이템들이 자연스럽게 어울림)',
      'Type 3 (Vintage—quirky pieces vibe together)',
      'Type 3（ヴィンテージ型—個性アイテムが自然にハマる）',
      'Type 3（复古型——个性单品很合拍）',
      'Type 3（復古型——個性單品很合拍）',
      'Type 3 (Vintage — đồ độc hợp gu)',
      'Type 3 (Vintage — item unik cocok)'
    ),
    badMatch: L(
      'Type 1 (미니멀리스트 — 서로의 옷장이 평행우주 수준)',
      'Type 1 (Minimalist—your closets are parallel universes)',
      'Type 1（ミニマリスト—クローゼットが平行宇宙レベル）',
      'Type 1（极简型——衣橱像平行宇宙）',
      'Type 1（極簡型——衣櫥像平行宇宙）',
      'Type 1 (Minimalist — tủ đồ như vũ trụ song song)',
      'Type 1 (Minimalis — lemari beda galaksi)'
    ),
    shareTypeName: L(
      '맥시멀 개성파형',
      'Maximalist',
      'マキシマル個性派型',
      '极繁个性派',
      '極繁個性派',
      'Maximalist',
      'Maximalis'
    ),
  },
];
