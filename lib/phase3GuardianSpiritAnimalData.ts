/**
 * 나를 수호하는 신비한 영물 — 12문항 이미지 2지선다, A=0 B=1, 총점 0~12
 *
 * Supabase `tests-thumbnails` 등 업로드 시 파일명 규칙 (.jpg):
 * - 썸네일: p3_test_guardian_spirit_animal.jpg
 * - 문항 이미지: Qn A → p3_test_guardian_spirit_animal_q{n}a.jpg, Qn B → p3_test_guardian_spirit_animal_q{n}b.jpg
 *   예: q1a, q1b … q12a, q12b
 */

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

export interface Phase3GuardianSpiritAnimalQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3GuardianSpiritAnimalResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  guardianOfficial: Record<string, string>;
  symbolism: Record<string, string>;
  guardianEnergy: Record<string, string>;
  spiritMessage: Record<string, string>;
  spiritColors: Record<string, string>;
  luckyDirection: Record<string, string>;
  resemblance: Record<string, string>;
  guardianBlessing: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3GuardianSpiritAnimalResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3GuardianSpiritAnimalQuestions: Phase3GuardianSpiritAnimalQuestion[] = [
  {
    id: 1,
    question: T(
      '두 가지 하늘 중 더 끌리는 것은?',
      'Which of the two skies draws you more?',
      '二つの空のうち、より惹かれるのは？',
      '两种天空中，你更被哪一种吸引？',
      '兩種天空中，你更被哪一種吸引？',
      'Hai bầu trời, bạn bị thu hút bởi cái nào hơn?',
      'Di antara dua langit, mana yang lebih menarik perhatianmu?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q1a.jpg',
        label: T(
          '불꽃처럼 붉고 황금빛이 퍼지는 일몰 하늘',
          'A sunset sky blazing red and gold like fire',
          '炎のように赤く黄金色に広がる夕焼けの空',
          '如火焰般泛红、金光蔓延的日落天空',
          '如火焰般泛紅、金光蔓延的日落天空',
          'Bầu trời hoàng hôn đỏ rực và ánh vàng lan tỏa như lửa',
          'Langit senja merah menyala dan keemasan menyebar seperti api'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q1b.jpg',
        label: T(
          '별이 쏟아지는 깊고 고요한 한밤중 하늘',
          'A deep, quiet midnight sky full of stars',
          '星が降りそそぐ深く静かな真夜中の空',
          '繁星倾泻、深邃宁静的子夜天空',
          '繁星傾瀉、深邃寧靜的子夜天空',
          'Bầu trời nửa đêm sâu thẳm, yên tĩnh, đầy sao',
          'Langit tengah malam yang dalam, tenang, penuh bintang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: T(
      '두 가지 자연 소재 중 더 끌리는 것은?',
      'Which natural element draws you more?',
      '二つの自然の素材のうち、より惹かれるのは？',
      '两种自然元素中，你更被哪一种吸引？',
      '兩種自然元素中，你更被哪一種吸引？',
      'Hai yếu tố thiên nhiên, bạn thích cái nào hơn?',
      'Dari dua elemen alam, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q2a.jpg',
        label: T('활활 타오르는 붉은 불꽃', 'Blazing red flames', '燃え上がる赤い炎', '熊熊燃烧的红色火焰', '熊熊燃燒的紅色火焰', 'Ngọn lửa đỏ bốc cháy', 'Api merah yang menyala'),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q2b.jpg',
        label: T(
          '깊고 맑은 물 속 푸른빛',
          'Deep, clear blue light under water',
          '深く澄んだ水の中の青い光',
          '深水之下清澈的蓝光',
          '深水之下清澈的藍光',
          'Ánh xanh trong nước trong và sâu',
          'Cahaya biru di dalam air yang jernih dan dalam'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: T(
      '두 가지 공간 중 지금 더 가고 싶은 곳은?',
      'Which place would you rather go to right now?',
      '二つの空間のうち、今より行きたいのは？',
      '两个空间里，你现在更想去哪里？',
      '兩個空間裡，你現在更想去哪裡？',
      'Hai không gian, bạn muốn đến đâu hơn lúc này?',
      'Dari dua tempat, mana yang lebih ingin kamu kunjungi sekarang?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q3a.jpg',
        label: T(
          '구름 위 황금빛 궁전',
          'A golden palace above the clouds',
          '雲の上の黄金の宮殿',
          '云端之上的金色宫殿',
          '雲端之上的金色宮殿',
          'Cung điện vàng trên mây',
          'Istana emas di atas awan'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q3b.jpg',
        label: T(
          '깊은 대나무 숲속 고요한 정자',
          'A quiet pavilion deep in a bamboo forest',
          '深い竹林の中の静かな東屋',
          '幽深竹林里的宁静亭子',
          '幽深竹林裡的寧靜亭子',
          'Chòi nghỉ yên tĩnh sâu trong rừng tre',
          'Pavilun tenang di hutan bambu yang dalam'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: T(
      '두 가지 빛 중 더 끌리는 것은?',
      'Which light draws you more?',
      '二つの光のうち、より惹かれるのは？',
      '两种光中，你更被哪一种吸引？',
      '兩種光中，你更被哪一種吸引？',
      'Hai thứ ánh sáng, bạn bị thu hút bởi cái nào hơn?',
      'Dari dua cahaya, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q4a.jpg',
        label: T(
          '여의주처럼 빛나는 눈부신 금빛 구슬',
          'A dazzling golden orb shining like a dragon pearl',
          '龍玉のように輝く眩しい金色の珠',
          '如龙珠般耀眼的金色光球',
          '如龍珠般耀眼的金色光球',
          'Quả cầu vàng lấp lánh như ngọc rồng',
          'Bola emas menyilaukan seperti mutiara naga'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q4b.jpg',
        label: T(
          '달빛처럼 은은하게 퍼지는 흰 빛',
          'Soft white light spreading like moonlight',
          '月光のように柔らかく広がる白い光',
          '如月光般柔和铺开的白色光芒',
          '如月光般柔和鋪開的白色光芒',
          'Ánh trắng lan tỏa dịu dàng như ánh trăng',
          'Cahaya putih lembut menyebar seperti cahaya bulan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: T(
      '두 가지 동물 중 더 끌리는 것은?',
      'Which animal draws you more?',
      '二つの動物のうち、より惹かれるのは？',
      '两种动物中，你更被哪一种吸引？',
      '兩種動物中，你更被哪一種吸引？',
      'Hai con vật, bạn thích hình ảnh nào hơn?',
      'Dari dua hewan, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q5a.jpg',
        label: T(
          '하늘을 자유롭게 나는 새',
          'A bird soaring freely in the sky',
          '空を自由に飛ぶ鳥',
          '在天空自由翱翔的鸟',
          '在天空自由翱翔的鳥',
          'Chim bay tự do trên trời',
          'Burung yang terbang bebas di langit'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q5b.jpg',
        label: T(
          '땅과 바다를 묵묵히 지키는 거북',
          'A turtle quietly guarding land and sea',
          '陸と海を黙々と守る亀',
          '默默守护陆地与海洋的龟',
          '默默守護陸地與海洋的龜',
          'Rùa lặng lẽ canh giữ đất và biển',
          'Kura-kura yang diam-diam menjaga darat dan laut'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: T(
      '두 가지 색깔 중 더 끌리는 것은?',
      'Which colors draw you more?',
      '二つの色のうち、より惹かれるのは？',
      '两种配色中，你更被哪一种吸引？',
      '兩種配色中，你更被哪一種吸引？',
      'Hai tông màu, bạn thích cái nào hơn?',
      'Dua kombinasi warna, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q6a.jpg',
        label: T(
          '붉은빛과 황금빛이 섞인 불꽃 컬러',
          'Flame colors mixing red and gold',
          '赤と金が混ざる炎のような色',
          '红与金交织的火焰色',
          '紅與金交織的火焰色',
          'Sắc lửa pha đỏ và vàng',
          'Warna api merah dan emas'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q6b.jpg',
        label: T(
          '에메랄드빛과 흰빛이 섞인 신비 컬러',
          'Mystic colors mixing emerald and white',
          'エメラルドと白が混ざる神秘的な色',
          '翠绿与白色交织的神秘配色',
          '翠綠與白色交織的神秘配色',
          'Sắc thần bí pha ngọc lục bảo và trắng',
          'Warna mistis hijau zamrud dan putih'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: T(
      '두 가지 문양 중 더 끌리는 것은?',
      'Which pattern draws you more?',
      '二つの文様のうち、より惹かれるのは？',
      '两种纹样中，你更被哪一种吸引？',
      '兩種紋樣中，你更被哪一種吸引？',
      'Hai họa tiết, bạn thích cái nào hơn?',
      'Dua pola, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q7a.jpg',
        label: T(
          '소용돌이치며 위로 상승하는 나선형 문양',
          'A spiral pattern swirling upward',
          '渦を巻いて上へ昇る螺旋の文様',
          '盘旋上升的螺旋纹样',
          '盤旋上升的螺旋紋樣',
          'Họa tiết xoắn ốc bay lên',
          'Motif spiral yang berputar ke atas'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q7b.jpg',
        label: T(
          '균형과 조화를 이루는 원형 만다라 문양',
          'A circular mandala of balance and harmony',
          '均衡と調和を表す円形の曼荼羅文様',
          '象征平衡与和谐的圆形曼陀罗纹样',
          '象徵平衡與和諧的圓形曼陀羅紋樣',
          'Mạn đà la tròn cân bằng và hài hòa',
          'Mandala melingkar yang seimbang dan harmonis'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: T(
      '두 가지 산 중 더 끌리는 곳은?',
      'Which mountain draws you more?',
      '二つの山のうち、より惹かれるのは？',
      '两座山中，你更被哪一座吸引？',
      '兩座山中，你更被哪一座吸引？',
      'Hai ngọn núi, bạn thích cảnh nào hơn?',
      'Dua gunung, pemandangan mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q8a.jpg',
        label: T(
          '구름을 뚫고 솟아 있는 높은 화산 봉우리',
          'A tall volcanic peak piercing the clouds',
          '雲を突き抜けてそびえる高い火山の峰',
          '刺破云层的高耸火山峰',
          '刺破雲層的高聳火山峰',
          'Đỉnh núi lửa cao xuyên qua mây',
          'Puncak gunung berapi menjulang menembus awan'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q8b.jpg',
        label: T(
          '안개에 싸인 부드러운 능선의 산',
          'Soft ridgelines wrapped in mist',
          '霧に包まれた柔らかな稜線の山',
          '薄雾笼罩的柔和山脊',
          '薄霧籠罩的柔和山脊',
          'Dãy núi mềm mại trong sương mù',
          'Pegunungan lembut yang diselimuti kabut'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: T(
      '두 가지 돌 중 더 끌리는 것은?',
      'Which stone draws you more?',
      '二つの石のうち、より惹かれるのは？',
      '两种宝石中，你更被哪一种吸引？',
      '兩種寶石中，你更被哪一種吸引？',
      'Hai loại đá quý, bạn thích cái nào hơn?',
      'Dua batu permata, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q9a.jpg',
        label: T(
          '강렬하게 빛나는 루비 또는 호박',
          'A fiercely glowing ruby or amber',
          '激しく輝くルビーまたは琥珀',
          '强烈闪耀的红宝石或琥珀',
          '強烈閃耀的紅寶石或琥珀',
          'Ruby hoặc hổ phách rực rỡ',
          'Ruby atau ambar yang bersinar kuat'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q9b.jpg',
        label: T(
          '맑고 투명하게 빛나는 백옥 또는 비취',
          'Clear, luminous white jade or jadeite',
          '澄んで透明に輝く白玉または翡翠',
          '清澈透亮的白玉或翡翠',
          '清澈透亮的白玉或翡翠',
          'Ngọc trắng hoặc phỉ thúy trong suốt',
          'Giok putih atau giok hijau yang bening bercahaya'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: T(
      '두 가지 바람 중 더 끌리는 것은?',
      'Which wind draws you more?',
      '二つの風のうち、より惹かれるのは？',
      '两种风中，你更被哪一种吸引？',
      '兩種風中，你更被哪一種吸引？',
      'Hai cơn gió, bạn thích cảm giác nào hơn?',
      'Dua jenis angin, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q10a.jpg',
        label: T(
          '폭풍처럼 강하게 몰아치는 바람',
          'A storm wind howling with force',
          '嵐のように激しく吹き荒れる風',
          '如风暴般猛烈呼啸的风',
          '如風暴般猛烈呼嘯的風',
          'Gió giật mạnh như bão',
          'Angin badai yang mengamuk'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q10b.jpg',
        label: T(
          '꽃잎을 살랑이게 하는 봄바람',
          'A spring breeze fluttering petals',
          '花びらをそよがせる春の風',
          '轻拂花瓣的春风',
          '輕拂花瓣的春風',
          'Gió xuân làm lay động cánh hoa',
          'Angin musim semi yang mengibarkan kelopak bunga'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: T(
      '두 가지 신화 속 장면 중 더 끌리는 것은?',
      'Which mythic scene draws you more?',
      '二つの神話の場面のうち、より惹かれるのは？',
      '两个神话场景中，你更被哪一种吸引？',
      '兩個神話場景中，你更被哪一種吸引？',
      'Hai cảnh thần thoại, bạn thích cái nào hơn?',
      'Dua adegan mitologi, mana yang lebih menarik?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q11a.jpg',
        label: T(
          '하늘을 가르며 여의주를 낚아채는 용',
          'A dragon splitting the sky to seize a pearl',
          '空を切り裂き龍玉を奪う龍',
          '划破长空、攫取龙珠的龙',
          '劃破長空、攫取龍珠的龍',
          'Rồng xé trời đoạt ngọc',
          'Naga membelah langit meraih mutiara'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q11b.jpg',
        label: T(
          '연꽃 위에 고요하게 앉아 있는 신성한 존재',
          'A sacred being resting still on a lotus',
          '蓮の上に静かに座る神聖な存在',
          '安坐于莲花之上的神圣存在',
          '安坐於蓮花之上的神聖存在',
          'Thực thể thiêng ngồi yên trên sen',
          'Makhluk suci yang duduk tenang di atas teratai'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: T(
      '두 가지 감각 중 지금 더 끌리는 것은?',
      'Which sensation draws you more right now?',
      '二つの感覚のうち、今より惹かれるのは？',
      '两种感官体验中，你现在更被哪一种吸引？',
      '兩種感官體驗中，你現在更被哪一種吸引？',
      'Hai cảm giác, bạn thích cái nào hơn lúc này?',
      'Dua sensasi, mana yang lebih menarik sekarang?'
    ),
    options: [
      {
        image: 'p3_test_guardian_spirit_animal_q12a.jpg',
        label: T(
          '타오르는 불 앞에 서 있을 때의 뜨거운 열기',
          'The heat on your face standing before a roaring fire',
          '燃え盛る炎の前に立つときの熱気',
          '站在熊熊火焰前的灼热气息',
          '站在熊熊火焰前的灼熱氣息',
          'Hơi nóng trước ngọn lửa bốc cháy',
          'Hawa panas di depan api yang menyala'
        ),
        score: 0,
      },
      {
        image: 'p3_test_guardian_spirit_animal_q12b.jpg',
        label: T(
          '이른 새벽 숲속에 내려앉은 고요한 안개',
          'Quiet mist settling in the forest at dawn',
          '早朝の森に降りる静かな霧',
          '拂晓林间沉静的薄雾',
          '拂曉林間沉靜的薄霧',
          'Sương mù lặng lẽ trong rừng lúc bình minh',
          'Kabut tenang di hutan saat fajar'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3GuardianSpiritAnimalResults: Phase3GuardianSpiritAnimalResult[] = [
  {
    type: 'Type1',
    emoji: '🔥',
    title: T(
      '불 속에서 다시 태어나는, 봉황(鳳凰) 🔥',
      'Reborn from flames — Fenghuang (Phoenix) 🔥',
      '炎から蘇る、鳳凰 🔥',
      '浴火重生，凤凰 🔥',
      '浴火重生，鳳凰 🔥',
      'Tái sinh từ lửa — Phượng hoàng 🔥',
      'Lahir kembali dari api — Fenghuang 🔥'
    ),
    shortDescription: T(
      '당신의 수호 영물은 봉황입니다.',
      'Your guardian spirit is the Fenghuang.',
      'あなたの守護霊獣は鳳凰です。',
      '你的守护灵兽是凤凰。',
      '你的守護靈獸是鳳凰。',
      'Linh thú hộ mệnh của bạn là Phượng hoàng.',
      'Roh penjagamu adalah Fenghuang.'
    ),
    description: T(
      '봉황은 불 속에서 타오르고 다시 태어나는 신성한 새입니다. 당신 곁에 봉황이 깃든다는 것은 어떤 역경 속에서도 다시 일어서는 강인한 생명력과 재생의 기운을 타고났다는 뜻입니다. 가장 힘든 순간에 오히려 빛나는 사람, 상처가 성장이 되는 사람이 바로 봉황의 기운을 가진 사람입니다.',
      'The Fenghuang is a sacred bird that burns and is reborn from fire. If it guards you, you carry fierce life force and the power to rise again through any hardship. Those who shine brightest in the hardest moments—who turn wounds into growth—carry Fenghuang energy.',
      '鳳凰は炎に包まれ蘇る聖なる鳥です。鳳凰が寄り添うなら、どんな逆境でも立ち上がる生命力と再生の気を宿すということ。いちばん苦しいときに光る人、傷を成長に変える人が鳳凰の気を持つ人です。',
      '凤凰是在火中燃烧并重生的神鸟。若凤凰守护你，意味着你拥有逆境中再起的力量与再生之气。在最难的时刻反而发光、把伤痕化为成长的人，正是凤凰之气。',
      '鳳凰是在火中燃燒並重生的神鳥。若鳳凰守護你，意味著你擁有逆境中再起的力量與再生之氣。在最難的時刻反而發光、把傷痕化為成長的人，正是鳳凰之氣。',
      'Phượng hoàng là chim thiêng cháy rồi tái sinh từ lửa. Nếu linh thú này hộ mệnh bạn, bạn mang sinh lực mạnh mẽ và khả năng đứng dậy sau mọi thử thách. Người tỏa sáng nhất khi khó khăn nhất—biến vết thương thành trưởng thành—mang khí Phượng hoàng.',
      'Fenghuang adalah burung suci yang terbakar dan terlahir kembali dari api. Jika ia menjagamu, kamu membawa kekuatan hidup dan bangkit dari kesulitan. Mereka yang bersinar di saat tersulit—mengubah luka menjadi pertumbuhan—membawa energi Fenghuang.'
    ),
    guardianOfficial: T(
      '수호 영물: 봉황 (鳳凰, Phoenix)',
      'Guardian spirit: Fenghuang (Phoenix)',
      '守護霊獣：鳳凰（フェンホワン、Phoenix）',
      '守护灵兽：凤凰（Phoenix）',
      '守護靈獸：鳳凰（Phoenix）',
      'Linh thú hộ mệnh: Phượng hoàng (Phoenix)',
      'Roh penjaga: Fenghuang (Phoenix)'
    ),
    symbolism: T(
      '재생, 불사, 고귀함, 변화와 부활',
      'Rebirth, immortality, nobility, change and revival',
      '再生、不死、高貴さ、変化と復活',
      '再生、不朽、高贵、变化与复活',
      '再生、不朽、高貴、變化與復活',
      'Tái sinh, bất tử, cao quý, thay đổi và phục hồi',
      'Kelahiran kembali, keabadian, kemuliaan, perubahan dan kebangkitan'
    ),
    guardianEnergy: T(
      '당신이 넘어졌을 때 다시 일어서는 힘. 포기를 모르는 열정',
      'The strength to stand again when you fall. Passion that does not quit.',
      '倒れても立ち上がる力。諦めを知らない情熱',
      '跌倒后再次站起的力量。不知放弃的热情',
      '跌倒後再次站起的力量。不知放棄的熱情',
      'Sức mạnh đứng dậy khi vấp ngã. Đam mê không biết bỏ cuộc.',
      'Kekuatan bangkit ketika jatuh. Gairah yang tak kenal menyerah.'
    ),
    spiritMessage: T(
      '불 속에서도 나는 당신 곁에 있습니다. 타오를수록 더 아름답게 날아오를 것입니다',
      'Even in fire, I am beside you. The brighter you burn, the more beautifully you will rise.',
      '炎の中でも私はあなたの傍にいます。燃えれば燃えるほど、美しく舞い上がれます',
      '即使在火中，我也在你身边。燃烧得越烈，越能美丽地高飞。',
      '即使在火中，我也在你身邊。燃燒得越烈，越能美麗地高飛。',
      'Ngay trong lửa, ta vẫn bên bạn. Càng cháy rực, bạn càng bay lên đẹp hơn.',
      'Bahkan dalam api, aku di sisimu. Semakin kau menyala, semakin indah kau membumbung tinggi.'
    ),
    spiritColors: T(
      '붉은 주홍빛, 황금빛, 자줏빛',
      'Crimson red, gold, violet',
      '深紅、金色、紫',
      '深红、金色、紫罗兰色',
      '深紅、金色、紫羅蘭色',
      'Đỏ thẫm, vàng, tím',
      'Merah tua, emas, ungu'
    ),
    luckyDirection: T(
      '남쪽. 봉황은 남쪽 하늘에서 날아옵니다',
      'South. The Fenghuang flies from the southern sky.',
      '南。鳳凰は南の空から舞い降ります',
      '南方。凤凰从南方的天空飞来。',
      '南方。鳳凰從南方的天空飛來。',
      'Phương Nam. Phượng hoàng bay từ bầu trời phía nam.',
      'Selatan. Fenghuang terbang dari langit selatan.'
    ),
    resemblance: T(
      '실패를 두려워하지 않고, 끝까지 다시 도전하는 불굴의 의지',
      'You do not fear failure—you keep trying with unbreakable will.',
      '失敗を恐れず、最後まで挑み続ける不屈の意志',
      '不惧失败，坚持到底的不屈意志',
      '不懼失敗，堅持到底的不屈意志',
      'Không sợ thất bại—luôn thử lại với ý chí bất khuất.',
      'Tak takut gagal—terus mencoba dengan tekad yang tak tergoyahkan.'
    ),
    guardianBlessing: T(
      '다시 타오르세요. 당신의 불꽃은 꺼지지 않습니다',
      'Burn bright again. Your flame does not go out.',
      '再び燃え上がって。あなたの炎は消えません',
      '再次燃烧吧。你的火焰不会熄灭。',
      '再次燃燒吧。你的火焰不會熄滅。',
      'Hãy bùng cháy trở lại. Ngọn lửa trong bạn không tắt.',
      'Nyalakan lagi. Api dalam dirimu tak akan padam.'
    ),
    shareTypeName: T('봉황 🔥', 'Fenghuang 🔥', '鳳凰 🔥', '凤凰 🔥', '鳳凰 🔥', 'Phượng hoàng 🔥', 'Fenghuang 🔥'),
  },
  {
    type: 'Type2',
    emoji: '🐉',
    title: T(
      '하늘과 땅을 잇는, 청룡(靑龍) 🐉',
      'Bridging heaven and earth — Azure Dragon 🐉',
      '天と地をつなぐ、青龍 🐉',
      '连接天地的青龙 🐉',
      '連接天地的青龍 🐉',
      'Nối trời và đất — Thanh Long 🐉',
      'Menjembatkan langit dan bumi — Naga Azure 🐉'
    ),
    shortDescription: T(
      '당신의 수호 영물은 청룡입니다.',
      'Your guardian spirit is the Azure Dragon.',
      'あなたの守護霊獣は青龍です。',
      '你的守护灵兽是青龙。',
      '你的守護靈獸是青龍。',
      'Linh thú hộ mệnh của bạn là Thanh Long.',
      'Roh penjagamu adalah Naga Azure.'
    ),
    description: T(
      '청룡은 동양 신화에서 가장 높은 격을 가진 영물로, 하늘의 기운과 땅의 기운을 동시에 품은 존재입니다. 당신 곁에 청룡이 깃든다는 것은 큰 뜻을 품고 있으며 그것을 이루어낼 기운이 있다는 뜻입니다. 조용히 때를 기다리다 결정적인 순간 하늘을 가르는 용처럼, 당신도 자신만의 타이밍을 알고 있습니다.',
      'The Azure Dragon ranks among the highest spirits in East Asian myth, holding both celestial and earthly energy. If it guards you, you carry a great purpose and the power to fulfill it. Like a dragon that waits in silence then splits the sky at the decisive moment, you know your own timing.',
      '青龍は東洋神話で最も位の高い霊獣の一つで、天と地の気を同時に宿します。青龍が寄り添うなら大いなる志を持ち、それを成し遂げる気があるということ。静かに時を待ち、決定的な瞬間に空を切る龍のように、あなたも自分のタイミングを知っています。',
      '青龙在东方神话中位阶极高，同时承载天与地之气。若青龙守护你，意味着你心怀大志且具备实现之力。如龙静候时机、在关键时刻划破长空，你也懂得自己的节奏。',
      '青龍在東方神話中位階極高，同時承載天與地之氣。若青龍守護你，意味著你心懷大志且具備實現之力。如龍靜候時機、在關鍵時刻劃破長空，你也懂得自己的節奏。',
      'Thanh Long là một trong những linh thú tối cao trong thần thoại Đông Á, mang khí trời và đất. Nếu hộ mệnh bạn, bạn mang chí lớn và khí lực để thực hiện. Như rồng chờ thời rồi xé trời đúng khoảnh khắc then chốt, bạn biết nhịp của riêng mình.',
      'Naga Azure termasuk roh tertinggi dalam mitologi Asia Timur, membawa energi langit dan bumi. Jika menjagamu, kamu membawa tujuan besar dan kekuatan untuk mewujudkannya. Seperti naga yang menunggu lalu membelah langit di momen penting, kamu tahu iramamu sendiri.'
    ),
    guardianOfficial: T(
      '수호 영물: 청룡 (靑龍, Azure Dragon)',
      'Guardian spirit: Azure Dragon (Qinglong)',
      '守護霊獣：青龍（Azure Dragon）',
      '守护灵兽：青龙（Azure Dragon）',
      '守護靈獸：青龍（Azure Dragon）',
      'Linh thú hộ mệnh: Thanh Long (Azure Dragon)',
      'Roh penjaga: Naga Azure (Qinglong)'
    ),
    symbolism: T(
      '권위, 승천, 원대한 뜻, 봄의 시작과 새로운 출발',
      'Authority, ascension, great purpose, spring and new beginnings',
      '権威、昇天、大いなる志、春の始まりと新たな出発',
      '权威、飞升、远大志向、春天与新的出发',
      '權威、飛昇、遠大志向、春天與新的出發',
      'Uy quyền, thăng thiên, chí lớn, mùa xuân và khởi đầu mới',
      'Otoritas, kenaikan, tujuan besar, musim semi dan awal baru'
    ),
    guardianEnergy: T(
      '높은 곳을 향해 나아가는 상승의 기운. 아무리 깊은 물속에서도 하늘로 오를 수 있는 힘',
      'Rising energy toward the heights. Power to reach the sky even from the deepest water.',
      '高みへ向かう上昇の気。どんなに深い水の中からでも天へ昇れる力',
      '向上攀升之气。即使身处深水，也能冲向天空的力量。',
      '向上攀升之氣。即使身處深水，也能衝向天空的力量。',
      'Khí thăng tiến về đỉnh cao. Sức mạnh vươn trời dù ở đáy nước sâu.',
      'Energi naik menuju puncak. Kekuatan mencapai langit bahkan dari air terdalam.'
    ),
    spiritMessage: T(
      '때가 되면 반드시 하늘에 오를 것입니다. 지금의 준비가 헛되지 않습니다',
      'When the time comes, you will surely rise to the sky. What you prepare now is not in vain.',
      '時が来れば必ず天に昇れます。今の準備は無駄になりません',
      '时机一到，你必能冲天而起。当下的准备不会白费。',
      '時機一到，你必能沖天而起。當下的準備不會白費。',
      'Đến lúc, nhất định bạn sẽ vươn tới trời. Chuẩn bị hôm nay không uổng.',
      'Saat tiba, engkau pasti naik ke langit. Persiapanmu kini tak sia-sia.'
    ),
    spiritColors: T(
      '에메랄드 청빛, 금빛, 흰빛',
      'Emerald blue, gold, white',
      'エメラルドの青、金、白',
      '翡翠青、金色、白色',
      '翡翠青、金色、白色',
      'Xanh ngọc lục bảo, vàng, trắng',
      'Biru zamrud, emas, putih'
    ),
    luckyDirection: T(
      '동쪽. 청룡은 동쪽에서 새벽을 열고 옵니다',
      'East. The Azure Dragon opens the dawn from the east.',
      '東。青龍は東から夜明けを開きます',
      '东方。青龙从东方开启黎明。',
      '東方。青龍從東方開啟黎明。',
      'Phương Đông. Thanh Long mở bình minh từ phía đông.',
      'Timur. Naga Azure membuka fajar dari timur.'
    ),
    resemblance: T(
      '겉으로는 조용하지만 내면에 원대한 꿈과 강한 의지를 품고 있음',
      'Quiet outside, but inside you hold vast dreams and strong will.',
      '外は静かでも内に大いなる夢と強い意志を秘めている',
      '外表安静，内心却怀有远大梦想与坚强意志',
      '外表安靜，內心卻懷有遠大夢想與堅強意志',
      'Bề ngoài điềm tĩnh, bên trong mang mơ ước lớn và ý chí mạnh.',
      'Tenang di luar, di dalam membawa mimpi besar dan tekad kuat.'
    ),
    guardianBlessing: T(
      '여의주는 이미 당신 손안에 있습니다. 믿고 날아오르세요',
      'The pearl is already in your hands. Trust and soar.',
      '龍玉はもうあなたの手の中にあります。信じて舞い上がって',
      '龙珠已在你的掌中。相信并高飞吧。',
      '龍珠已在你的掌中。相信並高飛吧。',
      'Ngọc đã nằm trong tay bạn. Hãy tin và bay lên.',
      'Mutiara sudah di telapakmu. Percaya dan membumbung tinggi.'
    ),
    shareTypeName: T('청룡 🐉', 'Azure Dragon 🐉', '青龍 🐉', '青龙 🐉', '青龍 🐉', 'Thanh Long 🐉', 'Naga Azure 🐉'),
  },
  {
    type: 'Type3',
    emoji: '✨',
    title: T(
      '성스러운 땅을 걷는, 기린(麒麟) ✨',
      'Walking sacred ground — Qilin ✨',
      '聖なる地を歩む、麒麟 ✨',
      '行走于圣土的麒麟 ✨',
      '行走於聖土的麒麟 ✨',
      'Bước trên đất thiêng — Kỳ Lân ✨',
      'Berjalan di tanah suci — Qilin ✨'
    ),
    shortDescription: T(
      '당신의 수호 영물은 기린입니다.',
      'Your guardian spirit is the Qilin.',
      'あなたの守護霊獣は麒麟です。',
      '你的守护灵兽是麒麟。',
      '你的守護靈獸是麒麟。',
      'Linh thú hộ mệnh của bạn là Kỳ Lân.',
      'Roh penjagamu adalah Qilin.'
    ),
    description: T(
      '기린은 동양 신화에서 태평성대에만 나타나는 가장 성스러운 영물입니다. 살아있는 생명을 밟지 않기 위해 발끝을 들고 걷고, 풀조차 꺾지 않는 자비로운 존재입니다. 당신 곁에 기린이 깃든다는 것은 선한 마음과 덕의 기운을 품고 있으며, 그 존재 자체가 주변에 평화를 가져온다는 뜻입니다.',
      'The Qilin appears in myth only in ages of peace—one of the most sacred beasts. It lifts its hooves so as not to crush life and bends no grass out of mercy. If it guards you, you carry kindness and virtue; your presence itself brings peace.',
      '麒麟は太平の世にのみ現れる最も聖なる霊獣です。生き物を踏まぬよう足先を上げ、草も折らない慈悲深い存在。麒麟が寄り添うなら善心と徳の気を宿し、その存在そのものが周りに平和をもたらします。',
      '麒麟只在太平盛世出现，是最为神圣的灵兽。为不伤生灵而踮足而行，连草也不折。若麒麟守护你，意味着你心怀善念与德性，你的存在本身就能带来平和。',
      '麒麟只在太平盛世出現，是最為神聖的靈獸。為不傷生靈而踮足而行，連草也不折。若麒麟守護你，意味著你心懷善念與德性，你的存在本身就能帶來平和。',
      'Kỳ Lân chỉ xuất hiện thời thái bình—linh thú thiêng liêng nhất. Nhấc móng để không giẫm lên sự sống, không bẻ cỏ vì lòng từ bi. Nếu hộ mệnh bạn, bạn mang lòng thiện và đức; sự hiện diện của bạn mang lại hòa bình.',
      'Qilin hanya muncul di zaman damai—makhluk paling suci. Mengangkat kuku agar tak menginjak kehidupan, tak mematahkan rumput karena welas asih. Jika menjagamu, kamu membawa kebaikan dan budi; kehadiranmu membawa kedamaian.'
    ),
    guardianOfficial: T(
      '수호 영물: 기린 (麒麟, Qilin)',
      'Guardian spirit: Qilin',
      '守護霊獣：麒麟（キリン）',
      '守护灵兽：麒麟（Qilin）',
      '守護靈獸：麒麟（Qilin）',
      'Linh thú hộ mệnh: Kỳ Lân (Qilin)',
      'Roh penjaga: Qilin'
    ),
    symbolism: T(
      '덕, 자비, 성스러움, 평화, 어진 이의 출현',
      'Virtue, compassion, sacredness, peace, the rise of the worthy',
      '徳、慈悲、聖性、平和、賢者の出現',
      '德、慈悲、神圣、和平、贤者出世',
      '德、慈悲、神聖、和平、賢者出世',
      'Đức, từ bi, thiêng liêng, hòa bình, người hiền xuất hiện',
      'Budi, welas asih, kesucian, damai, orang bijak muncul'
    ),
    guardianEnergy: T(
      '존재 자체가 복을 부르는 기운. 선한 마음이 세상을 바꾸는 힘',
      'Your very presence draws blessing. Kindness that can change the world.',
      '存在そのものが福を呼ぶ気。善心が世界を変える力',
      '存在本身即招福之气。善心改变世界之力。',
      '存在本身即招福之氣。善心改變世界之力。',
      'Sự hiện diện đã mang phúc. Lòng thiện đổi đời.',
      'Kehadiranmu memanggil berkah. Kebaikan mengubah dunia.'
    ),
    spiritMessage: T(
      '당신의 선한 마음이 세상을 더 아름답게 만들고 있습니다',
      'Your kind heart is already making the world more beautiful.',
      'あなたの善心が世界をより美しくしています',
      '你的善心正在让世界变得更美。',
      '你的善心正在讓世界變得更美。',
      'Trái tim hiền lành của bạn đang làm đẹp thế giới.',
      'Hatimu yang baik menjadikan dunia lebih indah.'
    ),
    spiritColors: T(
      '황금빛, 비취빛, 흰빛',
      'Gold, jade green, white',
      '金色、翡翠色、白',
      '金色、翡翠色、白色',
      '金色、翡翠色、白色',
      'Vàng, xanh ngọc, trắng',
      'Emas, hijau giok, putih'
    ),
    luckyDirection: T(
      '중앙. 기린은 모든 방향의 중심에서 균형을 잡습니다',
      'Center. The Qilin balances all directions from the middle.',
      '中央。麒麟はあらゆる方角の中心で均衡を取ります',
      '中央。麒麟在正中调和四方。',
      '中央。麒麟在正中調和四方。',
      'Trung tâm. Kỳ Lân cân bằng mọi phương từ giữa.',
      'Pusat. Qilin menyeimbangkan segala arah dari tengah.'
    ),
    resemblance: T(
      '남을 해치지 않고 조화롭게 살아가는 따뜻한 성품',
      'A warm nature that harms no one and lives in harmony.',
      '誰も傷つけず調和して生きる温かい性質',
      '不伤害他人、和谐共处的温和性情',
      '不傷害他人、和諧共處的溫和性情',
      'Không làm hại ai, sống hòa hợp, ấm áp.',
      'Tidak menyakiti siapa pun, hidup selaras, hangat.'
    ),
    guardianBlessing: T(
      '당신의 덕이 쌓일수록 더 큰 기운이 당신을 둘러쌉니다',
      'The more virtue you gather, the greater the energy that surrounds you.',
      '徳が積まれるほど、より大きな気があなたを包みます',
      '德行愈积，环绕你的气愈盛。',
      '德行愈積，環繞你的氣愈盛。',
      'Càng tích đức, khí quanh bạn càng lớn.',
      'Semakin bertambah budi, semakin besar energi di sekelilingmu.'
    ),
    shareTypeName: T('기린 🌟', 'Qilin 🌟', '麒麟 🌟', '麒麟 🌟', '麒麟 🌟', 'Kỳ Lân 🌟', 'Qilin 🌟'),
  },
  {
    type: 'Type4',
    emoji: '🕊️',
    title: T(
      '천년을 날아온, 신학(神鶴) 🕊️',
      'Flying across a thousand years — Sacred Crane 🕊️',
      '千年を舞う、神鶴 🕊️',
      '飞越千年的神鹤 🕊️',
      '飛越千年的神鶴 🕊️',
      'Bay ngàn năm — Hạc thần 🕊️',
      'Terbang sepanjang seribu tahun — Bangau Suci 🕊️'
    ),
    shortDescription: T(
      '당신의 수호 영물은 신학입니다.',
      'Your guardian spirit is the Sacred Crane.',
      'あなたの守護霊獣は神鶴です。',
      '你的守护灵兽是神鹤。',
      '你的守護靈獸是神鶴。',
      'Linh thú hộ mệnh của bạn là Hạc thần.',
      'Roh penjagamu adalah Bangau Suci.'
    ),
    description: T(
      '학은 동양에서 장수와 고귀함, 신선의 세계와 인간 세계를 잇는 사자(使者)로 여겨집니다. 무리 짓지 않고 홀로 높이 날며, 어디서든 흔들리지 않는 우아함을 잃지 않는 존재입니다. 당신 곁에 학이 깃든다는 것은 어떤 상황에서도 자신의 품격을 잃지 않는 내면의 단단함을 가졌다는 뜻입니다.',
      'In the East, the crane symbolizes longevity, nobility, and the messenger between immortal and human realms. It flies high alone, never losing grace. If it guards you, you carry inner steadiness—you never lose your dignity.',
      '鶴は東洋で長寿と高貴さ、仙人界と人間界をつなぐ使者とされます。群れず高く舞い、どこでも揺るがない優雅さを失いません。鶴が寄り添うなら、どんな状況でも品格を失わない内なる強さを持つということです。',
      '鹤在东方象征长寿、高贵，是连接仙境与人间的使者。它独飞高空，不失优雅。若鹤守护你，意味着你内心坚定，任何处境都不失风度。',
      '鶴在東方象徵長壽、高貴，是連接仙境與人間的使者。它獨飛高空，不失優雅。若鶴守護你，意味著你內心堅定，任何處境都不失風度。',
      'Hạc tượng trưng trường thọ, cao quý, sứ giả giữa tiên giới và nhân gian. Bay cao một mình, không mất duyên dáng. Nếu hộ mệnh bạn, bạn có nội lực—không mất phong thái.',
      'Bangau melambangkan umur panjang, kemuliaan, utusan antara dunia abadi dan manusia. Terbang tinggi sendiri, tetap anggun. Jika menjagamu, kamu punya keteguhan batin—tak kehilangan martabat.'
    ),
    guardianOfficial: T(
      '수호 영물: 신학 (神鶴, Sacred Crane)',
      'Guardian spirit: Sacred Crane',
      '守護霊獣：神鶴（Sacred Crane）',
      '守护灵兽：神鹤（Sacred Crane）',
      '守護靈獸：神鶴（Sacred Crane）',
      'Linh thú hộ mệnh: Hạc thần (Sacred Crane)',
      'Roh penjaga: Bangau Suci (Sacred Crane)'
    ),
    symbolism: T(
      '고귀함, 장수, 절개, 신선의 세계와의 연결',
      'Nobility, longevity, integrity, link to the immortal realm',
      '高貴さ、長寿、節操、仙人界とのつながり',
      '高贵、长寿、节操、与仙境的联系',
      '高貴、長壽、節操、與仙境的聯繫',
      'Cao quý, trường thọ, tiết tháo, liên kết cõi tiên',
      'Kemuliaan, umur panjang, integritas, hubungan ke alam abadi'
    ),
    guardianEnergy: T(
      '흔들리지 않는 우아함. 홀로 서도 빛나는 고고한 기운',
      'Unshakable grace. A noble energy that shines even when you stand alone.',
      '揺るがない優雅さ。独りでも輝く孤高の気',
      '不动摇的优雅。独站亦生辉的清高气韵',
      '不動搖的優雅。獨站亦生輝的清高氣韻',
      'Ưu nhã không lay động. Khí cao quý tỏa sáng dù đứng một mình.',
      'Anggun yang tak goyah. Energi mulia bersinar meski sendiri.'
    ),
    spiritMessage: T(
      '높이 날수록 더 멀리 보입니다. 당신의 시야는 남들과 다릅니다',
      'The higher you fly, the farther you see. Your view is not like others.',
      '高く舞えば舞うほど遠くが見えます。あなたの視野は人と違います',
      '飞得越高，看得越远。你的视野与众不同。',
      '飛得越高，看得越遠。你的視野與眾不同。',
      'Bay càng cao càng thấy xa. Tầm nhìn bạn khác người.',
      'Semakin tinggi terbang, semakin jauh terlihat. Pandanganmu tak seperti yang lain.'
    ),
    spiritColors: T(
      '순백색, 붉은 단정, 은빛',
      'Pure white, crimson crown, silver',
      '純白、赤い冠、銀色',
      '纯白、丹顶红、银色',
      '純白、丹頂紅、銀色',
      'Trắng tinh, đỏ vương miện, bạc',
      'Putih bersih, mahkota merah, perak'
    ),
    luckyDirection: T(
      '서쪽. 학은 서쪽 신선의 땅에서 날아옵니다',
      'West. The crane flies from the western realm of immortals.',
      '西。鶴は西の仙人の地から舞い降ります',
      '西方。神鹤从西方仙域飞来。',
      '西方。神鶴從西方仙域飛來。',
      'Phương Tây. Hạc bay từ cõi tiên phương tây.',
      'Barat. Bangau terbang dari negeri abadi di barat.'
    ),
    resemblance: T(
      '남들의 시선보다 자신의 기준이 더 중요한 독립적인 성품',
      'Independent—you value your own standards more than others opinions.',
      '他人の目より自分の基準を大切にする独立した性質',
      '重视自我标准胜过他人目光的独立性格',
      '重視自我標準勝過他人目光的獨立性格',
      'Độc lập—chuẩn mực riêng quan trọng hơn ánh nhìn người khác.',
      'Independen—standar sendiri lebih penting dari pandangan orang.'
    ),
    guardianBlessing: T(
      '고요히 날아오르세요. 당신의 날갯짓이 세상에 파문을 만듭니다',
      'Rise quietly. Each beat of your wings sends ripples through the world.',
      '静かに舞い上がって。あなたの羽ばたきが世界に波紋を作ります',
      '静静高飞吧。你的振翅会在世界激起涟漪。',
      '靜靜高飛吧。你的振翅會在世界激起漣漪。',
      'Bay lên thật êm. Mỗi cánh vỗ tạo gợn sóng trong thế giới.',
      'Terbanglah dengan tenang. Setiap kepakan sayapmu menciptakan riak di dunia.'
    ),
    shareTypeName: T('신학 🕊️', 'Sacred Crane 🕊️', '神鶴 🕊️', '神鹤 🕊️', '神鶴 🕊️', 'Hạc thần 🕊️', 'Bangau Suci 🕊️'),
  },
  {
    type: 'Type5',
    emoji: '🐯',
    title: T(
      '깊은 곳을 수호하는, 백호(白虎) 🐯',
      'Guarding the depths — White Tiger 🐯',
      '深きを守る、白虎 🐯',
      '守护深处的白虎 🐯',
      '守護深處的白虎 🐯',
      'Canh giữ chiều sâu — Bạch Hổ 🐯',
      'Menjaga yang dalam — Harimau Putih 🐯'
    ),
    shortDescription: T(
      '당신의 수호 영물은 백호입니다.',
      'Your guardian spirit is the White Tiger.',
      'あなたの守護霊獣は白虎です。',
      '你的守护灵兽是白虎。',
      '你的守護靈獸是白虎。',
      'Linh thú hộ mệnh của bạn là Bạch Hổ.',
      'Roh penjagamu adalah Harimau Putih.'
    ),
    description: T(
      '백호는 서방을 수호하는 신성한 영물로, 천 년을 살면 흰빛으로 변한다는 전설 속의 호랑이입니다. 강하고 날카롭지만 함부로 힘을 드러내지 않으며, 한번 지키겠다고 마음먹은 것은 절대 포기하지 않는 존재입니다. 당신 곁에 백호가 깃든다는 것은 강인한 의지와 깊은 의리, 그리고 잠재된 힘을 품고 있다는 뜻입니다.',
      'The White Tiger guards the west—a tiger of legend that turns white after a thousand years. Fierce yet restrained, it never flaunts strength, and what it vows to protect, it never abandons. If it guards you, you carry fierce will, deep loyalty, and latent power.',
      '白虎は西方を守る聖なる霊獣で、千年生きれば白くなるという伝説の虎です。強く鋭いが力を見せびらかさず、守ると決めたものは決して捨てません。白虎が寄り添うなら強い意志、深い義理、そして眠れる力を宿します。',
      '白虎镇守西方，传说中千年化为纯白。强悍而内敛，不轻易示强，一旦许诺守护便绝不放弃。若白虎守护你，意味着你拥有坚强意志、深厚情义与潜藏之力。',
      '白虎鎮守西方，傳說中千年化為純白。強悍而內斂，不輕易示強，一旦許諾守護便絕不放棄。若白虎守護你，意味著你擁有堅強意志、深厚情義與潛藏之力。',
      'Bạch Hổ canh phương Tây—hổ trong truyền thuyết ngàn năm hóa trắng. Mạnh mà kìm, không khoe sức; đã hứa bảo vệ thì không bỏ. Nếu hộ mệnh bạn, bạn mang ý chí, nghĩa khí và sức mạnh tiềm ẩn.',
      'Harimau Putih menjaga barat—harimau legenda yang memutih setelah seribu tahun. Ganas tapi tertahan, tak pamer kekuatan; yang dijanjikan dilindungi, tak ditinggal. Jika menjagamu, kamu membawa tekad, loyalitas, dan kekuatan terpendam.'
    ),
    guardianOfficial: T(
      '수호 영물: 백호 (白虎, White Tiger)',
      'Guardian spirit: White Tiger',
      '守護霊獣：白虎（White Tiger）',
      '守护灵兽：白虎（White Tiger）',
      '守護靈獸：白虎（White Tiger）',
      'Linh thú hộ mệnh: Bạch Hổ (White Tiger)',
      'Roh penjaga: Harimau Putih (White Tiger)'
    ),
    symbolism: T(
      '용맹, 의리, 결단력, 서방의 수호, 잠재된 강함',
      'Courage, loyalty, resolve, guardian of the west, hidden strength',
      '勇猛、義理、決断力、西方の守護、眠れる強さ',
      '勇猛、义气、决断、西方镇守、潜藏之强',
      '勇猛、義氣、決斷、西方鎮守、潛藏之強',
      'Dũng mãnh, nghĩa khí, quyết đoán, canh Tây, sức mạnh ẩn',
      'Keberanian, loyalitas, tekad, penjaga barat, kekuatan tersembunyi'
    ),
    guardianEnergy: T(
      '한번 정한 것은 끝까지 지키는 강인함. 나와 내 사람을 반드시 지키는 힘',
      'Once you choose, you see it through. Power to protect yourself and your people.',
      '一度決めたことは最後まで守る強さ。自分と大切な人を必ず守る力',
      '一旦决定便坚持到底。守护自己与所爱之人的力量。',
      '一旦決定便堅持到底。守護自己與所愛之人的力量。',
      'Đã chọn là theo đến cùng. Sức bảo vệ mình và người thân.',
      'Setelah memilih, bertahan sampai akhir. Kekuatan melindungi diri dan orang dekat.'
    ),
    spiritMessage: T(
      '나는 항상 당신의 곁에서 당신이 사랑하는 모든 것을 지킵니다',
      'I am always beside you, guarding everything you love.',
      '私はいつもあなたの傍で、あなたが愛するすべてを守ります',
      '我始终在你身边，守护你所爱的一切。',
      '我始終在你身邊，守護你所愛的一切。',
      'Ta luôn bên bạn, canh giữ mọi điều bạn yêu.',
      'Aku selalu di sisimu, menjaga semua yang kau cintai.'
    ),
    spiritColors: T(
      '순백색, 은빛, 차가운 달빛 빛',
      'Pure white, silver, cool moonlight',
      '純白、銀色、冷たい月光',
      '纯白、银色、清冷的月光',
      '純白、銀色、清冷的月光',
      'Trắng tinh, bạc, ánh trăng lạnh',
      'Putih bersih, perak, cahaya bulan dingin'
    ),
    luckyDirection: T(
      '서쪽. 백호는 서쪽 하늘에서 달빛을 타고 옵니다',
      'West. The White Tiger rides moonlight from the western sky.',
      '西。白虎は西の空から月光に乗って来ます',
      '西方。白虎乘着月光从西方的天空而来。',
      '西方。白虎乘著月光從西方的天空而來。',
      'Phương Tây. Bạch Hổ cưỡi ánh trăng từ trời phương tây.',
      'Barat. Harimau Putih menaiki cahaya bulan dari langit barat.'
    ),
    resemblance: T(
      '겉으로는 과묵하지만 한번 믿은 사람은 끝까지 곁에 있는 강한 의리',
      'Quiet outside, but fierce loyalty—those you trust, you stay beside to the end.',
      '外は寡黙でも、一度信じた人には最後まで寄り添う強い義理',
      '外表寡言，但对所信之人情义深重、不离不弃。',
      '外表寡言，但對所信之人情義深重、不離不棄。',
      'Ít nói bên ngoài, nhưng trung thành sâu với người đã tin.',
      'Pendiam di luar, tapi setia dalam pada yang dipercaya.'
    ),
    guardianBlessing: T(
      '당신의 힘은 아직 절반도 나오지 않았습니다. 때가 되면 알게 될 것입니다',
      'Your strength is not even half revealed yet. In time, you will know.',
      'あなたの力はまだ半分も出ていません。時が来れば分かります',
      '你的力量尚未显露一半。时机到了自会明白。',
      '你的力量尚未顯露一半。時機到了自會明白。',
      'Sức mạnh của bạn chưa lộ một nửa. Đến lúc sẽ rõ.',
      'Kekuatanmu belum setengah terlihat. Nanti engkau akan mengerti.'
    ),
    shareTypeName: T('백호 🐯', 'White Tiger 🐯', '白虎 🐯', '白虎 🐯', '白虎 🐯', 'Bạch Hổ 🐯', 'Harimau Putih 🐯'),
  },
  {
    type: 'Type6',
    emoji: '🐢',
    title: T(
      '모든 것의 시작과 끝을 아는, 현무(玄武) 🐢',
      'Knowing the beginning and end of all things — Black Tortoise 🐢',
      'すべての始まりと終わりを知る、玄武 🐢',
      '知晓万物始终的玄武 🐢',
      '知曉萬物始終的玄武 🐢',
      'Biết khởi đầu và kết thúc của vạn vật — Huyền Vũ 🐢',
      'Mengetahui awal dan akhir segalanya — Kura-kura Hitam 🐢'
    ),
    shortDescription: T(
      '당신의 수호 영물은 현무입니다.',
      'Your guardian spirit is the Black Tortoise (Xuanwu).',
      'あなたの守護霊獣は玄武です。',
      '你的守护灵兽是玄武。',
      '你的守護靈獸是玄武。',
      'Linh thú hộ mệnh của bạn là Huyền Vũ.',
      'Roh penjagamu adalah Kura-kura Hitam (Xuanwu).'
    ),
    description: T(
      '현무는 북방을 수호하는 영물로, 거북과 뱀이 하나가 된 신성한 존재입니다. 가장 느리지만 가장 오래 살고, 가장 무거운 것을 짊어지면서도 흔들리지 않는 완전한 안정의 상징입니다. 당신 곁에 현무가 깃든다는 것은 어떤 폭풍이 와도 흔들리지 않는 깊은 내면의 힘과 오랫동안 쌓아온 지혜를 품고 있다는 뜻입니다.',
      'The Black Tortoise guards the north—a sacred union of tortoise and serpent. Slowest to move, longest to live, it carries the heaviest burdens without shaking: perfect stability. If it guards you, you hold deep inner strength through any storm and wisdom gathered over time.',
      '玄武は北方を守る霊獣で、亀と蛇が一つになった聖なる存在です。最も遅いが最も長く生き、最も重いものを背負っても揺れない完全な安定の象徴。玄武が寄り添うなら、どんな嵐でも揺るがない深い内なる力と、長く積み上げた知恵を宿します。',
      '玄武镇守北方，是龟蛇合一的神圣存在。最慢却最久活，背负最重亦不摇，象征至稳。若玄武守护你，意味着你有风暴不撼的内心之力与经年累月的智慧。',
      '玄武鎮守北方，是龜蛇合一的神聖存在。最慢卻最久活，背負最重亦不搖，象徵至穩。若玄武守護你，意味著你有風暴不撼的內心之力與經年累月的智慧。',
      'Huyền Vũ canh phương Bắc—rùa và rắn hợp nhất. Chậm nhất, sống lâu nhất, gánh nặng nhất mà không lay: ổn định tuyệt đối. Nếu hộ mệnh bạn, bạn có sức mạnh nội tâm vượt bão và trí tuệ tích lũy theo thời gian.',
      'Xuanwu menjaga utara—kura-kura dan ular menyatu. Paling lambat, paling lama hidup, memikul terberat tanpa goyah: stabilitas sempurna. Jika menjagamu, kamu punya kekuatan batin dalam badai dan kebijaksanaan yang terkumpul lama.'
    ),
    guardianOfficial: T(
      '수호 영물: 현무 (玄武, Black Tortoise)',
      'Guardian spirit: Black Tortoise (Xuanwu)',
      '守護霊獣：玄武（Black Tortoise）',
      '守护灵兽：玄武（Black Tortoise）',
      '守護靈獸：玄武（Black Tortoise）',
      'Linh thú hộ mệnh: Huyền Vũ (Black Tortoise)',
      'Roh penjaga: Kura-kura Hitam (Xuanwu)'
    ),
    symbolism: T(
      '지혜, 불굴, 장수, 안정, 북방의 수호, 시작과 끝의 순환',
      'Wisdom, endurance, longevity, stability, guardian of the north, cycle of beginning and end',
      '知恵、不屈、長寿、安定、北方の守護、始まりと終わりの循環',
      '智慧、不屈、长寿、稳定、北方镇守、始终循环',
      '智慧、不屈、長壽、穩定、北方鎮守、始終循環',
      'Trí tuệ, bất khuất, trường thọ, ổn định, canh Bắc, vòng khởi-kết',
      'Kebijaksanaan, ketabahan, umur panjang, stabilitas, penjaga utara, siklus awal dan akhir'
    ),
    guardianEnergy: T(
      '어떤 것도 흔들 수 없는 완전한 안정감. 가장 오래, 가장 깊이 지속되는 힘',
      'Complete calm nothing can shake. The longest-lasting, deepest strength.',
      '何も揺るがせない完全な安定。最も長く、最も深く続く力',
      '万物难撼的安定。最持久、最深邃的力量。',
      '萬物難撼的安定。最持久、最深邃的力量。',
      'Vững vàng không gì lay chuyển. Sức mạnh bền và sâu nhất.',
      'Tenang sempurna yang tak tergoyahkan. Kekuatan paling tahan lama dan dalam.'
    ),
    spiritMessage: T(
      '급하게 가지 않아도 됩니다. 당신의 속도가 곧 당신의 강함입니다',
      'You need not rush. Your pace is your strength.',
      '急がなくて大丈夫です。あなたのペースがそのまま強さです',
      '不必着急。你的节奏就是你的力量。',
      '不必著急。你的節奏就是你的力量。',
      'Không cần vội. Nhịp của chính bạn là sức mạnh.',
      'Tak perlu tergesa. Ritmemu adalah kekuatanmu.'
    ),
    spiritColors: T(
      '깊은 흑빛, 자줏빛, 심해의 청빛',
      'Deep black, violet, abyssal blue-green',
      '深い黒、紫、深海の青緑',
      '深黑、紫色、深海青蓝',
      '深黑、紫色、深海青藍',
      'Đen sâu, tím, xanh biển sâu',
      'Hitam pekat, ungu, biru laut dalam'
    ),
    luckyDirection: T(
      '북쪽. 현무는 북방의 깊은 물속에서 모든 것을 지켜봅니다',
      'North. The Black Tortoise watches all from deep northern waters.',
      '北。玄武は北方の深い水の底からすべてを見守ります',
      '北方。玄武在北方的深水之中守望一切。',
      '北方。玄武在北方的深水之中守望一切。',
      'Phương Bắc. Huyền Vũ canh mọi thứ từ đáy nước sâu phương bắc.',
      'Utara. Xuanwu mengawasi segalanya dari air dalam di utara.'
    ),
    resemblance: T(
      '남들이 포기할 때도 끝까지 자리를 지키는 묵직하고 깊은 존재감',
      'A grounded presence—you hold your place when others give up.',
      '人が諦めても最後まで場を守る、重く深い存在感',
      '他人放弃时仍坚守阵地的沉稳存在感',
      '他人放棄時仍堅守陣地的沉穩存在感',
      'Khi người khác bỏ cuộc, bạn vẫn giữ chỗ—hiện diện sâu và vững.',
      'Saat orang menyerah, kamu tetap bertahan—hadir dalam dan mantap.'
    ),
    guardianBlessing: T(
      '당신이 지금 짊어지고 있는 모든 것, 현무가 함께 받쳐드립니다',
      'Everything you carry now—Xuanwu holds it with you.',
      '今あなたが背負っているすべてを、玄武が一緒に支えます',
      '你此刻背负的一切，玄武与你一同托起。',
      '你此刻背負的一切，玄武與你一同托起。',
      'Mọi gánh nặng hiện tại—Huyền Vũ cùng bạn gánh.',
      'Segala yang kau pikul kini—Xuanwu menopang bersamamu.'
    ),
    shareTypeName: T('현무 🐢', 'Black Tortoise 🐢', '玄武 🐢', '玄武 🐢', '玄武 🐢', 'Huyền Vũ 🐢', 'Xuanwu 🐢'),
  },
];
