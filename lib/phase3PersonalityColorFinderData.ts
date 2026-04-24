/** 내 성격은 어떤 색깔일까? — 12문항 2지선다(이미지), A=0 B=1, 총점 0~12
 *
 * CRITICAL: UI/UX는 `Phase3SnsAlgorithmTypeTestClient`를 그대로 복사해 사용.
 * 따라서 결과 필드명도 템플릿 구조(`algorithmSubtype`, `feedComposition` 등)에 맞춥니다.
 */

export type Phase3PersonalityColorFinderLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function M(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<Phase3PersonalityColorFinderLocaleKey, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

/** Supabase/메타데이터 폴백 — `page.tsx`에서 재사용 */
export const phase3PersonalityColorFinderTestFallback = {
  title: {
    ko: '내 성격은 어떤 색깔일까?',
    en: 'What Color Is My Personality?',
    ja: 'あなたの性格はどんな色？',
    'zh-CN': '我的性格是什么颜色？',
    'zh-TW': '我的性格是什麼顏色？',
    vi: 'Tính cách của bạn là màu gì?',
    id: 'Warna Kepribadianku yang Mana?',
  },
  description: {
    ko: '12문항 이미지 2지선다로 보는 성격 컬러·퍼스널 팔레트 6유형. #성격 #컬러 #퍼스널컬러 #심리 #감성',
    en: '12 image A/B questions: personality color and a 6-type personal palette. #personality #color #personalcolor #psychology #emotion',
    ja: '画像2択12問で性格カラーとパーソナルパレット6タイプ。#性格 #カラー #パーソナルカラー #心理 #感性',
    'zh-CN': '12 道图片二选一：性格色与个人配色 6 种类型。#性格 #色彩 #个人色彩 #心理 #感性',
    'zh-TW': '12 題圖片二選一：性格色與個人配色 6 種類型。#性格 #色彩 #個人色彩 #心理 #感性',
    vi: '12 câu chọn ảnh A/B: màu cá tính và bảng màu cá nhân 6 kiểu. #tính_cách #màu_sắc #màu_cá_nhân #tâm_lý #cảm_xúc',
    id: '12 pertanyaan pilih gambar A/B: warna kepribadian dan palet personal 6 tipe. #kepribadian #warna #warnapersonal #psikologi #emosional',
  },
  tags: {
    ko: ['성격', '컬러', '퍼스널컬러', '심리', '감성'],
    en: ['Personality', 'Color', 'Personal color', 'Psychology', 'Emotion'],
    ja: ['性格', 'カラー', 'パーソナルカラー', '心理', '感性'],
    'zh-CN': ['性格', '色彩', '个人色彩', '心理', '感性'],
    'zh-TW': ['性格', '色彩', '個人色彩', '心理', '感性'],
    vi: ['Tính cách', 'Màu sắc', 'Màu cá nhân', 'Tâm lý', 'Cảm xúc'],
    id: ['Kepribadian', 'Warna', 'Warna personal', 'Psikologi', 'Emosi'],
  },
} as const;

export interface Phase3PersonalityColorFinderQuestion {
  id: number;
  question: Record<Phase3PersonalityColorFinderLocaleKey, string>;
  options: {
    image: string;
    label: Record<Phase3PersonalityColorFinderLocaleKey, string>;
    score: number;
  }[];
}

export interface Phase3PersonalityColorFinderResult {
  type: string;
  emoji: string;
  title: Record<Phase3PersonalityColorFinderLocaleKey, string>;
  shortDescription: Record<Phase3PersonalityColorFinderLocaleKey, string>;
  description: Record<Phase3PersonalityColorFinderLocaleKey, string>;

  // 템플릿 UI 섹션 매핑
  algorithmSubtype: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 성격 컬러
  feedComposition: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 컬러 키워드(슬래시 구분)
  saveFolderName: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 퍼스널 팔레트(슬래시 구분)
  snsMainActivity: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 오늘의 컬러 메시지(따옴표는 UI에서 처리)
  goodMatch: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 잘 어울리는 컬러
  badMatch: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 주의할 컬러
  shareTypeName: Record<Phase3PersonalityColorFinderLocaleKey, string>; // 공유용 타입명
}

export function calculatePhase3PersonalityColorFinderResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

const base = 'p3_test_personality_color_finder';

export const phase3PersonalityColorFinderQuestions: Phase3PersonalityColorFinderQuestion[] = [
  {
    id: 1,
    question: M(
      '두 가지 꽃 중 더 끌리는 것은?',
      'Which flower are you more drawn to?',
      '2つの花のうち、より惹かれるのは？',
      '两种花里你更被哪一种吸引？',
      '兩種花裡你更被哪一種吸引？',
      'Hai loài hoa, bạn thích hơn loài nào?',
      'Dua bunga ini, mana yang lebih menarik bagimu?'
    ),
    options: [
      {
        image: `${base}_q1a.jpg`,
        label: M(
          '강렬하고 선명하게 핀 붉은 장미',
          'A vivid red rose in bold, full bloom',
          '鮮烈に咲き誇る真紅のバラ',
          '浓烈盛开的红玫瑰',
          '濃烈盛開的紅玫瑰',
          'Đóa hồng đỏ rực, nở rõ nét và mạnh mẽ',
          'Mawar merah yang mekar tegas dan menyala'
        ),
        score: 0,
      },
      {
        image: `${base}_q1b.jpg`,
        label: M(
          '잔잔하고 고요하게 핀 연보라 라벤더',
          'Soft lavender blooming in quiet calm',
          '穏やかに揺れる淡い紫のラベンダー',
          '宁静绽放的淡紫薰衣草',
          '寧靜綻放的淡紫薰衣草',
          'Hoa oải hương tím nhạt, yên bình và dịu dàng',
          'Lavender lembut yang mekar dengan tenang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '두 가지 하늘 중 더 끌리는 것은?',
      'Which sky are you more drawn to?',
      '2つの空のうち、より惹かれるのは？',
      '两片天空你更向往哪一种？',
      '兩片天空你更嚮往哪一種？',
      'Hai bầu trời, bạn thích hơn cảnh nào?',
      'Dua langit ini, mana yang lebih kamu suka?'
    ),
    options: [
      {
        image: `${base}_q2a.jpg`,
        label: M(
          '눈부시게 맑고 파란 정오의 하늘',
          'Dazzling clear blue noon sky',
          '眩しいほど澄んだ真昼のコバルトブルー',
          '耀眼清澈的正午蓝天',
          '耀眼清澈的正午藍天',
          'Bầu trời xanh trong vắt giữa trưa rực rỡ',
          'Langit siang yang biru jernih dan menyilaukan'
        ),
        score: 0,
      },
      {
        image: `${base}_q2b.jpg`,
        label: M(
          '황금빛으로 물드는 따뜻한 저녁 하늘',
          'Warm evening sky washed in gold',
          '黄金色に染まるあたたかい夕暮れの空',
          '染上金晖的温暖傍晚天空',
          '染上金暉的溫暖傍晚天空',
          'Bầu trời chiều ấm áp ngả vàng óng',
          'Langit senja hangat yang keemasan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '두 가지 자연 풍경 중 더 끌리는 것은?',
      'Which natural scene are you more drawn to?',
      '2つの自然の風景のうち、より惹かれるのは？',
      '两种自然风光你更被哪一种吸引？',
      '兩種自然風光你更被哪一種吸引？',
      'Hai khung cảnh thiên nhiên, bạn thích hơn cảnh nào?',
      'Dua pemandangan alam ini, mana yang lebih menarik?'
    ),
    options: [
      {
        image: `${base}_q3a.jpg`,
        label: M(
          '울창하고 깊은 초록 숲',
          'A deep, lush green forest',
          '深く茂る緑の森',
          '幽深茂密的绿色森林',
          '幽深茂密的綠色森林',
          'Khu rừng xanh um tùm và sâu thẳm',
          'Hutan hijau lebat dan dalam'
        ),
        score: 0,
      },
      {
        image: `${base}_q3b.jpg`,
        label: M(
          '신비롭게 빛나는 보랏빛 안개 낀 산',
          'Misty purple mountains glowing mysteriously',
          '紫の霧に包まれた神秘的な山並み',
          '紫雾缭绕、神秘发光的山',
          '紫霧繚繞、神秘發光的山',
          'Núi tím trong sương mờ, huyền ảo lấp lánh',
          'Gunung ungu berkabut yang misterius berkilau'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '두 가지 바다 중 더 끌리는 것은?',
      'Which ocean view are you more drawn to?',
      '2つの海のうち、より惹かれるのは？',
      '两种海景你更向往哪一种？',
      '兩種海景你更嚮往哪一種？',
      'Hai cảnh biển, bạn thích hơn cảnh nào?',
      'Dua pemandangan laut ini, mana yang lebih kamu suka?'
    ),
    options: [
      {
        image: `${base}_q4a.jpg`,
        label: M(
          '파도가 힘차게 부서지는 에메랄드빛 여름 바다',
          'Emerald summer sea with powerful breaking waves',
          '波しぶきがはじけるエメラルドグリーンの夏の海',
          '浪花激荡的祖母绿夏日海',
          '浪花激盪的祖母綠夏日海',
          'Biển hè màu ngọc lục bảo, sóng vỗ mạnh',
          'Laut musim panas zamrud, ombak memecah penuh tenaga'
        ),
        score: 0,
      },
      {
        image: `${base}_q4b.jpg`,
        label: M(
          '달빛이 고요하게 내려앉은 깊고 어두운 밤바다',
          'A deep, dark night sea under quiet moonlight',
          '月明かりが静かに沈む深い夜の海',
          '月光静静洒落的深邃夜海',
          '月光靜靜灑落的深邃夜海',
          'Biển đêm sâu thẳm, ánh trăng lặng lẽ',
          'Laut malam yang gelap dan tenang di bawah sinar bulan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '두 가지 과일 중 더 끌리는 것은?',
      'Which fruit are you more drawn to?',
      '2つの果物のうち、より惹かれるのは？',
      '两种水果你更想吃哪一种？',
      '兩種水果你更想吃哪一種？',
      'Hai loại trái cây, bạn thích hơn loại nào?',
      'Dua buah ini, mana yang lebih menarik bagimu?'
    ),
    options: [
      {
        image: `${base}_q5a.jpg`,
        label: M(
          '새콤달콤 잘 익은 선명한 오렌지',
          'A bright, tangy-sweet ripe orange',
          '甘酸っぱく鮮やかに熟したオレンジ',
          '酸甜鲜亮、熟透的橙子',
          '酸甜鮮亮、熟透的橙子',
          'Cam chín mọng, chua ngọt rực rỡ',
          'Jeruk matang yang segar, manis-asam menyala'
        ),
        score: 0,
      },
      {
        image: `${base}_q5b.jpg`,
        label: M(
          '깊고 달콤하게 익은 자줏빛 블루베리',
          'Deep purple blueberries, rich and sweet',
          '深い紫に熟した甘いブルーベリー',
          '深紫饱满、香甜多汁的蓝莓',
          '深紫飽滿、香甜多汁的藍莓',
          'Việt quất tím đậm, ngọt sâu',
          'Blueberry ungu pekat yang manis lekat'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '두 가지 빛 중 더 끌리는 것은?',
      'Which light are you more drawn to?',
      '2つの光のうち、より惹かれるのは？',
      '两种光你更被哪一种吸引？',
      '兩種光你更被哪一種吸引？',
      'Hai thứ ánh sáng, bạn thích hơn cái nào?',
      'Dua cahaya ini, mana yang lebih menarik?'
    ),
    options: [
      {
        image: `${base}_q6a.jpg`,
        label: M(
          '태양처럼 선명하게 터지는 노란 빛',
          'Yellow light bursting bright like the sun',
          '太陽のように弾ける鮮やかな黄色い光',
          '像太阳一样迸发的明亮黄光',
          '像太陽一樣迸發的明亮黃光',
          'Ánh vàng bùng nổ rực rỡ như mặt trời',
          'Cahaya kuning yang meledak terang seperti matahari'
        ),
        score: 0,
      },
      {
        image: `${base}_q6b.jpg`,
        label: M(
          '달처럼 은은하게 퍼지는 흰 빛',
          'Soft white light spreading like the moon',
          '月のように柔らかく広がる白い光',
          '像月光一样柔和铺开的白光',
          '像月光一樣柔和鋪開的白光',
          'Ánh trắng dịu lan tỏa như trăng',
          'Cahaya putih lembut yang menyebar seperti bulan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '두 가지 소재 중 더 끌리는 것은?',
      'Which fabric are you more drawn to?',
      '2つの素材のうち、より惹かれるのは？',
      '两种面料你更喜欢哪一种？',
      '兩種面料你更喜歡哪一種？',
      'Hai chất liệu vải, bạn thích hơn loại nào?',
      'Dua kain ini, mana yang lebih kamu suka?'
    ),
    options: [
      {
        image: `${base}_q7a.jpg`,
        label: M(
          '불꽃처럼 타오르는 붉은 실크 드레이프',
          'Red silk drapery blazing like fire',
          '炎のように揺らめく深紅のシルクドレープ',
          '如火焰般翻涌的红色丝绸垂幔',
          '如火焰般翻湧的紅色絲綢垂幔',
          'Lụa đỏ bay như ngọn lửa',
          'Sutra merah yang berkibar seperti api'
        ),
        score: 0,
      },
      {
        image: `${base}_q7b.jpg`,
        label: M(
          '물처럼 투명하게 흐르는 청록 쉬폰 드레이프',
          'Aqua chiffon flowing translucent like water',
          '水のように透けるターコイズのシフォンドレープ',
          '如水般清透流淌的青绿雪纺',
          '如水般清透流淌的青綠雪紡',
          'Voan xanh ngọc trong veo như dòng nước',
          'Sifon biru kehijauan mengalir transparan seperti air'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '두 가지 공간 중 더 끌리는 것은?',
      'Which space are you more drawn to?',
      '2つの空間のうち、より惹かれるのは？',
      '两个空间你更想待在哪一处？',
      '兩個空間你更想待在哪一處？',
      'Hai không gian, bạn thích ở nơi nào hơn?',
      'Dua ruang ini, mana yang lebih ingin kamu duduki?'
    ),
    options: [
      {
        image: `${base}_q8a.jpg`,
        label: M(
          '황금빛 조명이 가득한 따뜻한 벽난로 앞',
          'A cozy fireplace nook in warm golden light',
          '金色の灯りに包まれた暖炉の前',
          '金色灯光环绕的温暖壁炉前',
          '金色燈光環繞的溫暖壁爐前',
          'Góc lò sưởi ấm áp trong ánh vàng óng',
          'Sudut perapian hangat dengan cahaya keemasan'
        ),
        score: 0,
      },
      {
        image: `${base}_q8b.jpg`,
        label: M(
          '푸른 달빛이 쏟아지는 고요한 도서관',
          'A quiet library flooded with cool blue moonlight',
          '青い月明かりが差し込む静かな図書館',
          '蓝色月光倾泻的静谧图书馆',
          '藍色月光傾瀉的靜謐圖書館',
          'Thư viện tĩnh lặng, ánh trăng xanh tràn vào',
          'Perpustakaan sunyi yang dipenuhi cahaya bulan biru'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '두 가지 돌 중 더 끌리는 것은?',
      'Which stone are you more drawn to?',
      '2つの石のうち、より惹かれるのは？',
      '两种宝石你更被哪一种吸引？',
      '兩種寶石你更被哪一種吸引？',
      'Hai viên đá / đá quý, bạn thích hơn loại nào?',
      'Dua batu permata ini, mana yang lebih menarik?'
    ),
    options: [
      {
        image: `${base}_q9a.jpg`,
        label: M(
          '강렬하게 빛나는 황금빛 호박 또는 루비',
          'Amber or ruby blazing with intense golden-red fire',
          '黄金の炎のように輝くアンバーまたはルビー',
          '如烈火般闪耀的琥珀或红宝石',
          '如烈火般閃耀的琥珀或紅寶石',
          'Hổ phách hoặc hồng ngọc rực vàng-đỏ',
          'Amber atau rubi yang berkilau emas-merah menyala'
        ),
        score: 0,
      },
      {
        image: `${base}_q9b.jpg`,
        label: M(
          '맑고 투명하게 빛나는 아메시스트 또는 사파이어',
          'Amethyst or sapphire shining clear and cool',
          '澄んで冷たく光るアメジストまたはサファイア',
          '清透冷冽发光的紫水晶或蓝宝石',
          '清透冷冽發光的紫水晶或藍寶石',
          'Thạch anh tím hoặc sapphire trong, lạnh, sáng',
          'Amethyst atau safir yang bening dan berkilau dingin'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '두 가지 계절 풍경 중 더 끌리는 것은?',
      'Which seasonal landscape are you more drawn to?',
      '2つの季節の風景のうち、より惹かれるのは？',
      '两种季节景色你更喜欢哪一种？',
      '兩種季節景色你更喜歡哪一種？',
      'Hai khung cảnh theo mùa, bạn thích hơn cảnh nào?',
      'Dua pemandangan musim ini, mana yang lebih kamu suka?'
    ),
    options: [
      {
        image: `${base}_q10a.jpg`,
        label: M(
          '붉고 황금빛으로 물드는 가을 단풍 숲',
          'An autumn forest blazing red and gold',
          '赤と黄金に染まる秋の紅葉の森',
          '红与金交织的秋日枫林',
          '紅與金交織的秋日楓林',
          'Rừng thu rực đỏ vàng',
          'Hutan musim gugur merah dan keemasan'
        ),
        score: 0,
      },
      {
        image: `${base}_q10b.jpg`,
        label: M(
          '새하얗고 고요한 눈 내리는 겨울 풍경',
          'A quiet winter scene of pure white snow',
          '真っ白な静寂に包まれる雪の冬景色',
          '雪白静谧的冬日雪景',
          '雪白靜謐的冬日雪景',
          'Cảnh đông tuyết trắng và tĩnh lặng',
          'Pemandangan musim salju putih bersih yang tenang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '두 가지 예술 작품 중 더 끌리는 것은?',
      'Which artwork are you more drawn to?',
      '2つの芸術作品のうち、より惹かれるのは？',
      '两种艺术作品你更被哪一种吸引？',
      '兩種藝術作品你更被哪一種吸引？',
      'Hai tác phẩm nghệ thuật, bạn thích hơn tác phẩm nào?',
      'Dua karya seni ini, mana yang lebih menarik bagimu?'
    ),
    options: [
      {
        image: `${base}_q11a.jpg`,
        label: M(
          '강렬한 붓터치와 선명한 원색의 추상화',
          'Abstract art with bold strokes and vivid primaries',
          '力強いタッチと原色が躍る抽象画',
          '笔触强烈、原色鲜明的大胆抽象画',
          '筆觸強烈、原色鮮明的大膽抽象畫',
          'Trừu tượng với nét cọ mạnh và màu nguyên bản rực rỡ',
          'Lukisan abstrak dengan goresan tegas dan warna primer cerah'
        ),
        score: 0,
      },
      {
        image: `${base}_q11b.jpg`,
        label: M(
          '섬세하고 정교한 수묵화 또는 파스텔 드로잉',
          'Delicate ink wash or refined pastel drawing',
          '繊細な水墨画、またはパステルの精緻なドローイング',
          '细腻水墨或精致粉彩静物',
          '細膩水墨或精緻粉彩靜物',
          'Tranh mực tinh tế hoặc phấn màu pastel tỉ mỉ',
          'Lukisan tinta halus atau gambar pastel yang rumit'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '두 가지 감각 중 지금 더 끌리는 것은?',
      'Which sensation pulls you more right now?',
      '今、2つの感覚のうちより惹かれるのは？',
      '此刻两种感觉你更向往哪一种？',
      '此刻兩種感覺你更嚮往哪一種？',
      'Lúc này, hai cảm giác nào bạn thích hơn?',
      'Sekarang, dari dua sensasi ini mana yang lebih menarik?'
    ),
    options: [
      {
        image: `${base}_q12a.jpg`,
        label: M(
          '뜨겁고 강한 여름 정오의 태양 아래 서 있는 느낌',
          'Standing under a hot, intense summer noon sun',
          '真夏の真昼、強い日差しの下にいる感覚',
          '站在盛夏正午灼热骄阳下的感觉',
          '站在盛夏正午灼熱驕陽下的感覺',
          'Đứng dưới nắng trưa hè nóng rực và mạnh mẽ',
          'Berdiri di bawah terik matahari siang musim panas yang kuat'
        ),
        score: 0,
      },
      {
        image: `${base}_q12b.jpg`,
        label: M(
          '서늘하고 고요한 새벽 숲속을 혼자 걷는 느낌',
          'Walking alone through a cool, quiet dawn forest',
          'ひんやり静かな夜明けの森を一人で歩く感覚',
          '独自走在清凉寂静的黎明森林中',
          '獨自走在清涼寂靜的黎明森林中',
          'Một mình bước trong rừng bình minh mát và tĩnh',
          'Berjalan sendiri di hutan fajar yang sejuk dan sunyi'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3PersonalityColorFinderResults: Phase3PersonalityColorFinderResult[] = [
  {
    type: 'Type1',
    emoji: '🔴',
    title: M(
      '존재 자체가 강렬한, 패션 레드',
      'Intense presence: Fashion Red',
      '存在感が強烈、ファッション・レッド',
      '存在感强烈的时尚红',
      '存在感強烈的時尚紅',
      'Sự hiện diện mạnh mẽ: Đỏ thời trang',
      'Kehadiran yang kuat: Merah fashion'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 레드입니다.',
      'Your personality color is Red.',
      'あなたの性格カラーはレッドです。',
      '你的性格色是红色。',
      '你的性格色是紅色。',
      'Màu cá tính của bạn là Đỏ.',
      'Warna kepribadianmu adalah Merah.'
    ),
    description: M(
      '레드는 가장 먼저 눈에 띄고 가장 오래 기억에 남는 색입니다. 당신이 바로 그런 사람입니다. 공간에 들어서는 순간 존재감이 느껴지고, 하고 싶은 말을 망설임 없이 하며, 목표를 향해 달려갈 때는 누구도 막을 수 없는 에너지를 가지고 있습니다. 쉽게 타오르고 뜨겁게 사랑하는 사람. 당신의 색은 레드입니다.',
      'Red is the color people notice first—and remember longest. That is you. The moment you enter a room, your presence lands. You say what you mean without hesitation, and when you chase a goal, your energy is hard to stop. You burn bright and love fiercely. Your color is Red.',
      'レッドは、いちばん最初に目に入り、いちばん長く記憶に残る色。あなたはまさにそのタイプです。空間に入った瞬間に存在感が伝わり、言いたいことはためらわずに言える。目標に向かうときは、誰にも止められないエネルギーを持っています。燃え上がりやすく、熱く愛する人。あなたの色はレッドです。',
      '红色是最先抓住视线、也最难被遗忘的颜色。你正是如此。一进空间就有存在感，想说的话不犹豫，冲向目标时能量几乎挡不住。容易点燃，也爱得炽热。你的颜色是红。',
      '紅色是最先抓住視線、也最難被遺忘的顏色。你正是如此。一進空間就有存在感，想說的話不猶豫，衝向目標時能量幾乎擋不住。容易點燃，也愛得熾熱。你的顏色是紅。',
      'Đỏ là màu người ta nhìn thấy trước nhất và nhớ lâu nhất—và bạn chính là vậy. Bạn vừa bước vào là đã thấy sự hiện diện; bạn nói điều mình muốn không ngần ngại; khi hướng tới mục tiêu, năng lượng của bạn khó ai cản. Bạn bùng cháy nhanh và yêu rất nồng nhiệt. Màu của bạn là Đỏ.',
      'Merah adalah warna yang paling dulu terlihat dan paling lama diingat—dan kamu memang begitu. Begitu masuk ruangan, kehadiranmu terasa. Kamu mengatakan yang kamu mau tanpa ragu, dan saat mengejar tujuan, energimu sulit dihentikan. Kamu mudah menyala dan mencintai dengan hangat. Warnamu adalah Merah.'
    ),
    algorithmSubtype: M(
      '레드 (Red)',
      'Red',
      'レッド（Red）',
      '红色（Red）',
      '紅色（Red）',
      'Đỏ (Red)',
      'Merah (Red)'
    ),
    feedComposition: M(
      '열정 / 존재감 / 강인함 / 직진본능 / 리더십',
      'Passion / Presence / Resilience / Straight-ahead drive / Leadership',
      '情熱 / 存在感 / 強さ / 一直線の本能 / リーダーシップ',
      '热情 / 存在感 / 坚韧 / 直线本能 / 领导力',
      '熱情 / 存在感 / 堅韌 / 直線本能 / 領導力',
      'Đam mê / Sự hiện diện / Kiên cường / Bản năng lao thẳng / Lãnh đạo',
      'Gairah / Kehadiran / Tangguh / Dorongan langsung / Kepemimpinan'
    ),
    saveFolderName: M(
      '딥 레드 / 버밀리온 / 크림슨 / 코랄 레드 / 골드',
      'Deep Red / Vermilion / Crimson / Coral Red / Gold',
      'ディープレッド / バーミリオン / クリムゾン / コーラルレッド / ゴールド',
      '深红 / 朱红 / 绯红 / 珊瑚红 / 金',
      '深紅 / 朱紅 / 緋紅 / 珊瑚紅 / 金',
      'Đỏ đậm / Đỏ son / Đỏ thẫm / Đỏ san hô / Vàng gold',
      'Merah pekat / Vermilion / Crimson / Merah koral / Emas'
    ),
    snsMainActivity: M(
      '당신의 레드는 아무도 끌 수 없습니다. 더 세게 타오르세요',
      'No one can dim your Red—burn even brighter.',
      'あなたのレッドは、誰にも消せない。もっと強く燃えていい。',
      '没人能熄灭你的红，再热烈地燃烧吧。',
      '沒人能熄滅你的紅，再熱烈地燃燒吧。',
      'Không ai có thể làm tắt màu Đỏ của bạn—hãy cháy mạnh hơn nữa.',
      'Tak ada yang bisa meredupkan Merahmu—nyalakan lebih terang lagi.'
    ),
    goodMatch: M(
      '화이트, 블랙, 골드',
      'White, Black, Gold',
      'ホワイト、ブラック、ゴールド',
      '白、黑、金',
      '白、黑、金',
      'Trắng, Đen, Vàng gold',
      'Putih, Hitam, Emas'
    ),
    badMatch: M('오렌지', 'Orange', 'オレンジ', '橙色', '橙色', 'Cam', 'Oranye'),
    shareTypeName: M(
      '패션 레드 🔴',
      'Fashion Red 🔴',
      'ファッション・レッド 🔴',
      '时尚红 🔴',
      '時尚紅 🔴',
      'Đỏ thời trang 🔴',
      'Merah fashion 🔴'
    ),
  },
  {
    type: 'Type2',
    emoji: '🟡',
    title: M(
      '따뜻하게 물드는, 선샤인 옐로우',
      'Warmly glowing: Sunshine Yellow',
      'あたたかく染まる、サンシャインイエロー',
      '温暖晕染的阳光黄',
      '溫暖暈染的陽光黃',
      'Ấm áp tỏa sáng: Vàng ánh nắng',
      'Hangat bersinar: Kuning sunshine'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 옐로우입니다.',
      'Your personality color is Yellow.',
      'あなたの性格カラーはイエローです。',
      '你的性格色是黄色。',
      '你的性格色是黃色。',
      'Màu cá tính của bạn là Vàng.',
      'Warna kepribadianmu adalah Kuning.'
    ),
    description: M(
      '옐로우는 어두운 공간에서도 가장 먼저 빛을 내는 색입니다. 당신이 있으면 분위기가 밝아지고, 당신의 웃음 하나에 주변 사람들의 기분이 달라집니다. 긍정적인 에너지가 자연스럽게 흘러나오고, 새로운 것에 대한 호기심이 넘치며, 어떤 상황에서도 유머를 잃지 않는 사람. 당신의 색은 옐로우입니다.',
      'Yellow is the color that lights up a room—even a dark one. Your presence brightens the mood; your laugh can shift how everyone feels. Positive energy flows from you naturally, curiosity never runs dry, and you keep your humor in almost any situation. Your color is Yellow.',
      'イエローは、暗い場所でもいちばん先に光を届ける色。あなたがいると空気が明るくなり、笑いひとつで周りの気分が変わります。前向きなエネルギーが自然にあふれ、好奇心が止まらず、どんな場面でもユーモアを失わない人。あなたの色はイエローです。',
      '黄色是在暗处也最先带来光的颜色。有你在，气氛就会亮起来；你的笑声能改变周围人的心情。正能量自然流淌，好奇心旺盛，几乎任何场合都不丢幽默感。你的颜色是黄。',
      '黃色是在暗處也最先帶來光的顏色。有你在，氣氛就會亮起來；你的笑聲能改變周圍人的心情。正能量自然流淌，好奇心旺盛，幾乎任何場合都不丟幽默感。你的顏色是黃。',
      'Vàng là màu thắp sáng cả những không gian tối. Có bạn là không khí vui hơn; một nụ cười của bạn cũng đổi cả tâm trạng mọi người. Năng lượng tích cực tuôn ra tự nhiên, tò mò không cạn, và bạn vẫn giữ được hài hước trong hầu hết tình huống. Màu của bạn là Vàng.',
      'Kuning adalah warna yang menerangi ruangan—bahkan yang gelap. Kehadiranmu mencerahkan suasana; tawamu bisa mengubah perasaan orang-orang di sekitar. Energi positif mengalir natural, rasa ingin tahu tak pernah kering, dan humormu tetap ada hampir di segala situasi. Warnamu adalah Kuning.'
    ),
    algorithmSubtype: M(
      '선샤인 옐로우 (Sunshine Yellow)',
      'Sunshine Yellow',
      'サンシャインイエロー（Sunshine Yellow）',
      '阳光黄（Sunshine Yellow）',
      '陽光黃（Sunshine Yellow）',
      'Vàng ánh nắng (Sunshine Yellow)',
      'Kuning sunshine (Sunshine Yellow)'
    ),
    feedComposition: M(
      '밝음 / 긍정 / 창의성 / 호기심 / 유머',
      'Brightness / Positivity / Creativity / Curiosity / Humor',
      '明るさ / ポジティブ / 創造性 / 好奇心 / ユーモア',
      '明亮 / 积极 / 创意 / 好奇 / 幽默',
      '明亮 / 積極 / 創意 / 好奇 / 幽默',
      'Tươi sáng / Tích cực / Sáng tạo / Tò mò / Hài hước',
      'Cerah / Positif / Kreativitas / Rasa ingin tahu / Humor'
    ),
    saveFolderName: M(
      '선샤인 옐로우 / 버터 크림 / 레몬 / 코랄 / 피치',
      'Sunshine Yellow / Butter Cream / Lemon / Coral / Peach',
      'サンシャインイエロー / バタークリーム / レモン / コーラル / ピーチ',
      '阳光黄 / 奶油黄 / 柠檬 / 珊瑚 / 桃色',
      '陽光黃 / 奶油黃 / 檸檬 / 珊瑚 / 桃色',
      'Vàng nắng / Kem bơ / Chanh / San hô / Đào',
      'Kuning sunshine / Butter cream / Lemon / Koral / Persik'
    ),
    snsMainActivity: M(
      '당신의 밝음은 누군가에게 오늘의 햇빛이 됩니다',
      'Your brightness becomes someone’s sunlight today.',
      'あなたの明るさは、誰かにとって今日の太陽になります。',
      '你的明亮会成为某个人今天的阳光。',
      '你的明亮會成為某個人今天的陽光。',
      'Sự tươi sáng của bạn là ánh nắng trong ngày của ai đó.',
      'Keceriaanmu jadi sinar matahari hari ini bagi seseorang.'
    ),
    goodMatch: M(
      '화이트, 코랄, 민트',
      'White, Coral, Mint',
      'ホワイト、コーラル、ミント',
      '白、珊瑚、薄荷',
      '白、珊瑚、薄荷',
      'Trắng, San hô, Bạc hà',
      'Putih, Koral, Mint'
    ),
    badMatch: M(
      '네온 그린',
      'Neon Green',
      'ネオングリーン',
      '荧光绿',
      '螢光綠',
      'Xanh neon',
      'Hijau neon'
    ),
    shareTypeName: M(
      '선샤인 옐로우 🟡',
      'Sunshine Yellow 🟡',
      'サンシャインイエロー 🟡',
      '阳光黄 🟡',
      '陽光黃 🟡',
      'Vàng ánh nắng 🟡',
      'Kuning sunshine 🟡'
    ),
  },
  {
    type: 'Type3',
    emoji: '🟢',
    title: M(
      '생명력으로 가득한, 포레스트 그린',
      'Full of life: Forest Green',
      '生命力あふれる、フォレストグリーン',
      '充满生命力的森林绿',
      '充滿生命力的森林綠',
      'Tràn sức sống: Xanh rừng',
      'Penuh kehidupan: Hijau hutan'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 그린입니다.',
      'Your personality color is Green.',
      'あなたの性格カラーはグリーンです。',
      '你的性格色是绿色。',
      '你的性格色是綠色。',
      'Màu cá tính của bạn là Xanh lá.',
      'Warna kepribadianmu adalah Hijau.'
    ),
    description: M(
      '그린은 가장 오래 바라봐도 피로하지 않은 색입니다. 당신 곁에 있으면 마음이 편안해지고 안정이 됩니다. 급하게 달려가기보다 자신만의 속도를 가지고 있고, 깊게 뿌리를 내리듯 무엇이든 꾸준하게 이어가는 힘이 있습니다. 말이 없어도 신뢰가 가는 사람. 당신의 색은 그린입니다.',
      'Green is easy on the eyes for a long time—and easy on the heart. Being near you feels calm and steady. Rather than rushing, you move at your own pace, and you keep going with the quiet strength of deep roots. Even in silence, people trust you. Your color is Green.',
      'グリーンは、長く見ていても疲れにくい色。あなたのそばにいると心が落ち着き、安定します。焦って走るより自分のペースを持ち、根を下ろすように何でも着実に続ける力があります。言葉が少なくても信頼される人。あなたの色はグリーンです。',
      '绿色是看久了也不易疲惫的颜色。在你身边，心会安定下来。你不急着冲刺，有自己的节奏，像深根一样把事物稳稳延续。话不多也让人信赖。你的颜色是绿。',
      '綠色是看久了也不易疲憊的顏色。在你身邊，心會安定下來。你不急著衝刺，有自己的節奏，像深根一樣把事物穩穩延續。話不多也讓人信賴。你的顏色是綠。',
      'Xanh lá là màu nhìn lâu vẫn dễ chịu. Ở cạnh bạn, lòng người an yên và vững. Bạn không chạy theo vội vàng mà có nhịp riêng, và tiếp tục mọi thứ bền bỉ như rễ cắm sâu. Ít nói nhưng vẫn đáng tin. Màu của bạn là Xanh lá.',
      'Hijau enak dipandang lama—dan menenangkan hati. Dekat denganmu terasa tenang dan stabil. Daripada buru-buru, kamu punya ritme sendiri, dan melanjutkan segala sesuatu dengan kekuatan akar yang dalam. Bahkan tanpa banyak bicara, orang percaya padamu. Warnamu adalah Hijau.'
    ),
    algorithmSubtype: M(
      '포레스트 그린 (Forest Green)',
      'Forest Green',
      'フォレストグリーン（Forest Green）',
      '森林绿（Forest Green）',
      '森林綠（Forest Green）',
      'Xanh rừng (Forest Green)',
      'Hijau hutan (Forest Green)'
    ),
    feedComposition: M(
      '균형 / 안정감 / 성실함 / 자연스러움 / 신뢰',
      'Balance / Stability / Diligence / Natural ease / Trust',
      'バランス / 安定感 / 誠実さ / 自然体 / 信頼',
      '平衡 / 安定感 / 踏实 / 自然 / 信任',
      '平衡 / 安定感 / 踏實 / 自然 / 信任',
      'Cân bằng / Ổn định / Chăm chỉ / Tự nhiên / Tin cậy',
      'Keseimbangan / Stabilitas / Rajin / Natural / Kepercayaan'
    ),
    saveFolderName: M(
      '포레스트 그린 / 세이지 그린 / 올리브 / 크림 / 테라코타',
      'Forest Green / Sage Green / Olive / Cream / Terracotta',
      'フォレストグリーン / セージグリーン / オリーブ / クリーム / テラコッタ',
      '森林绿 / 鼠尾草绿 / 橄榄 / 奶油 / 陶土',
      '森林綠 / 鼠尾草綠 / 橄欖 / 奶油 / 陶土',
      'Xanh rừng / Xanh sage / Ô liu / Kem / Đất nung',
      'Hijau hutan / Hijau sage / Zaitun / Krem / Terrakota'
    ),
    snsMainActivity: M(
      '당신의 꾸준함은 가장 강한 힘입니다. 그대로의 속도로 나아가세요',
      'Your consistency is a superpower—keep your pace.',
      'あなたの継続力は、いちばん強い力。そのペースのまま進んで。',
      '你的坚持是最强的力量，按自己的节奏前进吧。',
      '你的堅持是最強的力量，按自己的節奏前進吧。',
      'Sự bền bỉ của bạn là sức mạnh lớn nhất—giữ nhịp của bạn.',
      'Konsistensimu adalah kekuatan besar—tetap di ritmemu.'
    ),
    goodMatch: M(
      '베이지, 브라운, 화이트',
      'Beige, Brown, White',
      'ベージュ、ブラウン、ホワイト',
      '米色、棕色、白',
      '米色、棕色、白',
      'Be, Nâu, Trắng',
      'Beige, Cokelat, Putih'
    ),
    badMatch: M(
      '네온 핑크',
      'Neon Pink',
      'ネオンピンク',
      '荧光粉',
      '螢光粉',
      'Hồng neon',
      'Merah muda neon'
    ),
    shareTypeName: M(
      '포레스트 그린 🟢',
      'Forest Green 🟢',
      'フォレストグリーン 🟢',
      '森林绿 🟢',
      '森林綠 🟢',
      'Xanh rừng 🟢',
      'Hijau hutan 🟢'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔵',
    title: M(
      '깊고 신뢰할 수 있는, 오션 블루',
      'Deep and trustworthy: Ocean Blue',
      '深く信頼できる、オーシャンブルー',
      '深邃可信赖的海洋蓝',
      '深邃可信賴的海洋藍',
      'Sâu và đáng tin: Xanh đại dương',
      'Dalam dan bisa dipercaya: Biru laut'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 블루입니다.',
      'Your personality color is Blue.',
      'あなたの性格カラーはブルーです。',
      '你的性格色是蓝色。',
      '你的性格色是藍色。',
      'Màu cá tính của bạn là Xanh dương.',
      'Warna kepribadianmu adalah Biru.'
    ),
    description: M(
      '블루는 가장 신뢰받는 색입니다. 당신은 감정을 함부로 드러내지 않고 깊이 생각한 뒤 말합니다. 한번 믿기로 한 사람에게는 흔들림 없이 곁을 지키고, 논리적이고 차분하게 문제를 해결합니다. 화려하지 않지만 오래 알수록 더 깊어지는 사람. 당신의 색은 블루입니다.',
      'Blue is one of the most trusted colors. You do not wear emotions on your sleeve—you think deeply, then speak. Once you commit to someone, you stay steady beside them, solving problems with logic and calm. You are not flashy, but the longer people know you, the deeper you become. Your color is Blue.',
      'ブルーは、いちばん信頼されやすい色のひとつ。感情を軽には出さず、深く考えてから言葉にします。一度信じた人のそばからは揺れずにいて、論理的かつ冷静に問題を解きます。派手ではないけれど、知れば知るほど深みが増える人。あなたの色はブルーです。',
      '蓝色是最容易被托付信任的颜色之一。你不轻易外露情绪，想透了再说。一旦认定某人，你会稳稳守在旁边，用逻辑与冷静处理问题。你不张扬，但越相识越见深度。你的颜色是蓝。',
      '藍色是最容易被託付信任的顏色之一。你不輕易外露情緒，想透了再說。一旦認定某人，你會穩穩守在旁邊，用邏輯與冷靜處理問題。你不張揚，但越相識越見深度。你的顏色是藍。',
      'Xanh dương là một trong những màu dễ được tin tưởng. Bạn không phô cảm xúc bừa bãi—suy nghĩ sâu rồi mới nói. Một khi đã chọn tin ai, bạn ở bên họ vững vàng, giải quyết vấn đề bằng lý trí và điềm tĩnh. Bạn không phô trương, nhưng càng gần càng thấy chiều sâu. Màu của bạn là Xanh dương.',
      'Biru termasuk warna yang paling dipercaya. Kamu tidak memamerkan emosi sembarangan—berpikir dulu, lalu berbicara. Setelah memutuskan percaya pada seseorang, kamu tetap setia di sampingnya, menyelesaikan masalah dengan logis dan tenang. Kamu tidak mencolok, tapi semakin lama dikenal, semakin dalam dirimu. Warnamu adalah Biru.'
    ),
    algorithmSubtype: M(
      '오션 블루 (Ocean Blue)',
      'Ocean Blue',
      'オーシャンブルー（Ocean Blue）',
      '海洋蓝（Ocean Blue）',
      '海洋藍（Ocean Blue）',
      'Xanh đại dương (Ocean Blue)',
      'Biru laut (Ocean Blue)'
    ),
    feedComposition: M(
      '신뢰 / 지성 / 깊이 / 차분함 / 일관성',
      'Trust / Intellect / Depth / Calm / Consistency',
      '信頼 / 知性 / 深み / 冷静さ / 一貫性',
      '信任 / 知性 / 深度 / 冷静 / 一致',
      '信任 / 知性 / 深度 / 冷靜 / 一致',
      'Tin cậy / Trí tuệ / Chiều sâu / Điềm tĩnh / Nhất quán',
      'Kepercayaan / Intelek / Kedalaman / Tenang / Konsistensi'
    ),
    saveFolderName: M(
      '딥 네이비 / 코발트 블루 / 스틸 블루 / 스카이 블루 / 화이트',
      'Deep Navy / Cobalt Blue / Steel Blue / Sky Blue / White',
      'ディープネイビー / コバルトブルー / スチールブルー / スカイブルー / ホワイト',
      '深藏青 / 钴蓝 / 钢蓝 / 天蓝 / 白',
      '深藏青 / 鈷藍 / 鋼藍 / 天藍 / 白',
      'Navy đậm / Coban / Xanh thép / Xanh trời / Trắng',
      'Navy pekat / Kobalt / Biru baja / Biru langit / Putih'
    ),
    snsMainActivity: M(
      '당신의 깊이는 가까이 갈수록 더 넓어집니다. 닫지 마세요',
      'The closer people get, the wider your depth becomes—stay open.',
      '近づけば近づくほど、あなたの深みは広がる。閉じないで。',
      '越靠近，你的深度越开阔——别关上。',
      '越靠近，你的深度越開闊——別關上。',
      'Càng gần, chiều sâu của bạn càng mở rộng—đừng khép lại.',
      'Semakin dekat, semakin luas kedalamanmu—jangan menutup diri.'
    ),
    goodMatch: M(
      '화이트, 실버, 크림',
      'White, Silver, Cream',
      'ホワイト、シルバー、クリーム',
      '白、银、奶油',
      '白、銀、奶油',
      'Trắng, Bạc, Kem',
      'Putih, Perak, Krem'
    ),
    badMatch: M('오렌지', 'Orange', 'オレンジ', '橙色', '橙色', 'Cam', 'Oranye'),
    shareTypeName: M(
      '오션 블루 🔵',
      'Ocean Blue 🔵',
      'オーシャンブルー 🔵',
      '海洋蓝 🔵',
      '海洋藍 🔵',
      'Xanh đại dương 🔵',
      'Biru laut 🔵'
    ),
  },
  {
    type: 'Type5',
    emoji: '🟣',
    title: M(
      '신비롭고 독보적인, 미스틱 바이올렛',
      'Mysterious and one of a kind: Mystic Violet',
      '神秘的で唯一無二、ミスティックバイオレット',
      '神秘而独树一帜的迷雾紫',
      '神秘而獨樹一幟的迷霧紫',
      'Huyền bí và độc nhất: Tím mystic',
      'Misterius dan tiada duanya: Ungu mistik'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 바이올렛입니다.',
      'Your personality color is Violet.',
      'あなたの性格カラーはバイオレットです。',
      '你的性格色是紫色。',
      '你的性格色是紫色。',
      'Màu cá tính của bạn là Tím.',
      'Warna kepribadianmu adalah Ungu.'
    ),
    description: M(
      '바이올렛은 가장 희귀하고 신비로운 색입니다. 쉽게 파악되지 않고, 알면 알수록 새로운 면이 나오며, 평범한 것보다 남다른 것에서 아름다움을 찾습니다. 감수성이 깊고 예술적인 감각을 가졌으며, 자신만의 세계가 뚜렷한 사람. 당신의 색은 바이올렛입니다.',
      'Violet is rare and mysterious. You are not easy to read—the more someone knows you, the more new sides appear. You find beauty in the unusual more than the ordinary. You are deeply sensitive, with an artistic eye, and a world that is distinctly your own. Your color is Violet.',
      'バイオレットは、いちばん希少で神秘的な色。簡単には掴めず、知れば知るほど新しい面が出てきます。平凡より「少し違う」ものに美を見出します。感受性が深く、芸術的なセンスがあり、自分だけの世界がはっきりしている人。あなたの色はバイオレットです。',
      '紫色稀少而神秘。你不易被一眼看穿——越了解，越发现新的面向。你更常在与众不同里看见美。感受力深，审美艺术性强，自有一方清晰的世界。你的颜色是紫。',
      '紫色稀少而神秘。你不易被一眼看穿——越了解，越發現新的面向。你更常在與眾不同裡看見美。感受力深，審美藝術性強，自有一方清晰的世界。你的顏色是紫。',
      'Tím hiếm và huyền bí. Bạn không dễ bị đọc vỏn vẹn—càng hiểu càng thấy thêm mặt mới. Bạn thấy đẹp ở điều khác thường hơn là điều tầm thường. Bạn nhạy cảm sâu, mắt thẩm mỹ nghệ thuật, và một thế giới riêng rất rõ. Màu của bạn là Tím.',
      'Ungu langka dan misterius. Kamu tidak mudah ditebak—semakin dikenal, semakin banyak sisi baru. Kamu menemukan keindahan pada yang tidak biasa lebih dari yang biasa. Kamu peka dalam, punya mata seni, dan duniamu sangat khas. Warnamu adalah Ungu.'
    ),
    algorithmSubtype: M(
      '미스틱 바이올렛 (Mystic Violet)',
      'Mystic Violet',
      'ミスティックバイオレット（Mystic Violet）',
      '迷雾紫（Mystic Violet）',
      '迷霧紫（Mystic Violet）',
      'Tím mystic (Mystic Violet)',
      'Ungu mistik (Mystic Violet)'
    ),
    feedComposition: M(
      '신비로움 / 창의성 / 감수성 / 독창성 / 깊은 내면',
      'Mystery / Creativity / Sensitivity / Originality / Inner depth',
      '神秘性 / 創造性 / 感受性 / 独創性 / 深い内面',
      '神秘 / 创意 / 敏感 / 独创 / 内在深度',
      '神秘 / 創意 / 敏感 / 獨創 / 內在深度',
      'Huyền bí / Sáng tạo / Nhạy cảm / Độc đáo / Chiều sâu nội tâm',
      'Misteri / Kreativitas / Sensitivitas / Orisinalitas / Kedalaman batin'
    ),
    saveFolderName: M(
      '딥 바이올렛 / 라벤더 / 모브 / 인디고 / 실버',
      'Deep Violet / Lavender / Mauve / Indigo / Silver',
      'ディープバイオレット / ラベンダー / モーブ / インディゴ / シルバー',
      '深紫 / 薰衣草 / 藕紫 / 靛蓝 / 银',
      '深紫 / 薰衣草 / 藕紫 / 靛藍 / 銀',
      'Tím đậm / Oải hương / Mauve / Chàm / Bạc',
      'Ungu pekat / Lavender / Mauve / Indigo / Perak'
    ),
    snsMainActivity: M(
      '당신은 알면 알수록 더 신비로운 사람입니다. 그 깊이를 숨기지 마세요',
      'The more people know you, the more mysterious you become—do not hide that depth.',
      '知れば知るほど、あなたはもっと神秘的になる。その深みを隠さないで。',
      '越了解你越觉神秘——别藏起那份深度。',
      '越了解你越覺神秘——別藏起那份深度。',
      'Càng hiểu bạn càng thấy huyền bí—đừng giấu chiều sâu đó.',
      'Semakin dikenal, semakin misterius dirimu—jangan sembunyikan kedalaman itu.'
    ),
    goodMatch: M(
      '실버, 화이트, 딥 네이비',
      'Silver, White, Deep Navy',
      'シルバー、ホワイト、ディープネイビー',
      '银、白、深藏青',
      '銀、白、深藏青',
      'Bạc, Trắng, Navy đậm',
      'Perak, Putih, Navy pekat'
    ),
    badMatch: M(
      '브라이트 옐로우',
      'Bright Yellow',
      'ブライトイエロー',
      '亮黄',
      '亮黃',
      'Vàng chói',
      'Kuning terang'
    ),
    shareTypeName: M(
      '미스틱 바이올렛 🟣',
      'Mystic Violet 🟣',
      'ミスティックバイオレット 🟣',
      '迷雾紫 🟣',
      '迷霧紫 🟣',
      'Tím mystic 🟣',
      'Ungu mistik 🟣'
    ),
  },
  {
    type: 'Type6',
    emoji: '🟠',
    title: M(
      '따뜻하게 안아주는, 선셋 코랄',
      'Warmly embracing: Sunset Coral',
      'あたたかく包み込む、サンセットコーラル',
      '温暖环抱的日落珊瑚',
      '溫暖環抱的日落珊瑚',
      'Ấm áp ôm trọn: San hô hoàng hôn',
      'Hangat memeluk: Koral sunset'
    ),
    shortDescription: M(
      '당신의 성격 컬러는 코랄입니다.',
      'Your personality color is Coral.',
      'あなたの性格カラーはコーラルです。',
      '你的性格色是珊瑚色。',
      '你的性格色是珊瑚色。',
      'Màu cá tính của bạn là San hô.',
      'Warna kepribadianmu adalah Koral.'
    ),
    description: M(
      '코랄은 레드의 열정과 옐로우의 따뜻함이 만난 색입니다. 강하지 않지만 부드럽고, 시끄럽지 않지만 존재감이 있습니다. 누군가의 힘든 이야기를 들어주고, 먼저 다가가 따뜻하게 안아주는 사람. 곁에 있으면 마음이 편해지는데 왜 그런지 설명하기 어려운 매력을 가진 사람. 당신의 색은 코랄입니다.',
      'Coral is where Red’s passion meets Yellow’s warmth. Not harsh, yet soft; not loud, yet unmistakably present. You listen when someone is struggling, and you move first to offer a warm hug. People feel calmer beside you—for reasons hard to put into words. Your color is Coral.',
      'コーラルは、レッドの情熱とイエローのあたたかさが出会う色。強すぎず柔らかく、騒がしくなくても存在感があります。誰かのつらい話を受け止め、先に寄り添ってあたたかく抱きしめられる人。そばにいると心が楽になるのに、理由はうまく言えない魅力。あなたの色はコーラルです。',
      '珊瑚色是红的热情与黄的温暖相遇。不尖锐却柔软，不喧哗却有存在感。你会倾听别人的艰难，也会先靠近给一个温暖的拥抱。人在你身边会更安心——那种魅力难以言传。你的颜色是珊瑚色。',
      '珊瑚色是紅的熱情與黃的溫暖相遇。不尖銳卻柔軟，不喧嘩卻有存在感。你會傾聽別人的艱難，也會先靠近給一個溫暖的擁抱。人在你身邊會更安心——那種魅力難以言傳。你的顏色是珊瑚色。',
      'San hô là nơi đam mê của Đỏ gặp sự ấm áp của Vàng. Không gắt nhưng mềm, không ồn nhưng vẫn hiện diện rõ. Bạn lắng nghe khi ai đó khó khăn, và chủ động đến gần để ôm ấm. Người khác bên cạnh bạn thấy nhẹ lòng—một sức hút khó diễn tả. Màu của bạn là San hô.',
      'Koral adalah pertemuan gairah Merah dan kehangatan Kuning. Tidak keras, tapi lembut; tidak berisik, tapi jelas terasa. Kamu mendengarkan saat seseorang berat, dan lebih dulu mendekat dengan pelukan hangat. Orang di sampingmu jadi lebih tenang—pesona yang sulit dijelaskan. Warnamu adalah Koral.'
    ),
    algorithmSubtype: M(
      '선셋 코랄 (Sunset Coral)',
      'Sunset Coral',
      'サンセットコーラル（Sunset Coral）',
      '日落珊瑚（Sunset Coral）',
      '日落珊瑚（Sunset Coral）',
      'San hô hoàng hôn (Sunset Coral)',
      'Koral sunset (Sunset Coral)'
    ),
    feedComposition: M(
      '따뜻함 / 공감 / 사교성 / 부드러운 존재감 / 위로',
      'Warmth / Empathy / Sociability / Gentle presence / Comfort',
      'あたたかさ / 共感 / 社交性 / やわらかな存在感 / なぐさめ',
      '温暖 / 共情 / 社交性 / 柔和存在感 / 安慰',
      '溫暖 / 共情 / 社交性 / 柔和存在感 / 安慰',
      'Ấm áp / Đồng cảm / Hòa đồng / Hiện diện dịu / An ủi',
      'Kehangatan / Empati / Sosial / Kehadiran lembut / Penghiburan'
    ),
    saveFolderName: M(
      '선셋 코랄 / 피치 / 테라코타 / 살몬 핑크 / 크림',
      'Sunset Coral / Peach / Terracotta / Salmon Pink / Cream',
      'サンセットコーラル / ピーチ / テラコッタ / サーモンピンク / クリーム',
      '日落珊瑚 / 桃色 / 陶土 / 鲑粉 / 奶油',
      '日落珊瑚 / 桃色 / 陶土 / 鮭粉 / 奶油',
      'San hô hoàng hôn / Đào / Đất nung / Hồng salmon / Kem',
      'Koral sunset / Persik / Terrakota / Merah muda salmon / Krem'
    ),
    snsMainActivity: M(
      '당신이 뿜어내는 따뜻함은 누군가의 오늘을 바꿉니다. 그 빛을 잃지 마세요',
      'The warmth you give can change someone’s day—don’t lose that light.',
      'あなたのあたたかさは、誰かの今日を変える。その光を失わないで。',
      '你散发的温暖能改变某个人的一天——别丢掉那道光。',
      '你散發的溫暖能改變某個人的一天——別丟掉那道光。',
      'Sự ấm áp bạn tỏa ra có thể đổi cả ngày của ai đó—đừng đánh mất ánh sáng đó.',
      'Kehangatan yang kamu beri bisa mengubah hari seseorang—jangan hilangkan cahaya itu.'
    ),
    goodMatch: M(
      '크림, 베이지, 포레스트 그린',
      'Cream, Beige, Forest Green',
      'クリーム、ベージュ、フォレストグリーン',
      '奶油、米色、森林绿',
      '奶油、米色、森林綠',
      'Kem, Be, Xanh rừng',
      'Krem, Beige, Hijau hutan'
    ),
    badMatch: M(
      '차가운 블루 그레이',
      'Cool Blue Gray',
      'クールなブルーグレー',
      '冷调蓝灰',
      '冷調藍灰',
      'Xám xanh lạnh',
      'Abu-abu biru dingin'
    ),
    shareTypeName: M(
      '선셋 코랄 🟠',
      'Sunset Coral 🟠',
      'サンセットコーラル 🟠',
      '日落珊瑚 🟠',
      '日落珊瑚 🟠',
      'San hô hoàng hôn 🟠',
      'Koral sunset 🟠'
    ),
  },
];
