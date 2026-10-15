/** 나는 왜 늘 비슷한 사람에게 끌릴까? — phase3-same-type-attraction · 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 유형 · 7개 로케일 */

import {
  PHASE3_SAME_TYPE_ATTRACTION_I18N,
  type Phase3SameTypeAttractionForeignLocale,
  type Phase3SameTypeAttractionResultText,
} from './phase3SameTypeAttractionI18n';

export type Phase3SameTypeAttractionLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3SameTypeAttractionLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_SAME_TYPE_ATTRACTION_I18N) as Phase3SameTypeAttractionForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3SameTypeAttractionForeignLocale) => string): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3SameTypeAttractionQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3SameTypeAttractionResult {
  type: string;
  emoji: string;
  title: LocaleText;
  typeName: LocaleText;
  attractionFormula: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  keywords: LocaleText;
  attractedTo: LocaleText;
  strengths: LocaleText;
  repeatPattern: LocaleText;
  frequentSaying: LocaleText;
  changeTips: LocaleText;
  oneLiner: LocaleText;
  shareLine: LocaleText;
}

/** DB 미등록 시 page.tsx fallback용 메타데이터 (supabase/insert-phase3-same-type-attraction.sql과 동일) */
export const PHASE3_SAME_TYPE_ATTRACTION_META: {
  title: LocaleText;
  description: LocaleText;
  tags: Record<Phase3SameTypeAttractionLocaleKey, string[]>;
} = {
  title: {
    ko: '나는 왜 늘 비슷한 사람에게 끌릴까?',
    en: 'Why Am I Always Drawn to the Same Type?',
    ja: 'なぜ私はいつも似たような人に惹かれるの？',
    'zh-CN': '为什么我总是被同一类人吸引？',
    'zh-TW': '為什麼我總是被同一型的人吸引？',
    vi: 'Vì sao mình luôn bị thu hút bởi cùng một kiểu người?',
    id: 'Kenapa Aku Selalu Tertarik pada Tipe yang Sama?',
  },
  description: {
    ko: '헤어지고 나면 꼭 비슷한 사람이 또 나타난다면? 12가지 상황으로 구원자형·나쁜 남녀 끌림형·안정 추구형 등 6가지 중 나만의 끌림 공식을 찾아드립니다.',
    en: 'Why does the same kind of person keep showing up after every breakup? Through 12 situations, find your attraction formula among 6 types, from The Rescuer and The Hard-to-Get Chaser to The Stability Seeker.',
    ja: '別れても、なぜかまた似たような人が現れる？12の状況から、救世主型・つかめない人に惹かれ型・安定志向型など6タイプの中で、あなただけの「惹かれる法則」を見つけます。',
    'zh-CN': '每次分手后，总会遇到差不多的人？通过12个情境，从拯救者型、若即若离吸引型、安稳追求型等6种类型中，找出你专属的心动公式。',
    'zh-TW': '每次分手後，總會遇到差不多的人？透過12個情境，從拯救者型、若即若離吸引型、安穩追求型等6種類型中，找出你專屬的心動公式。',
    vi: 'Chia tay xong lại gặp đúng kiểu người cũ? Qua 12 tình huống, hãy tìm ra công thức rung động của riêng bạn trong 6 kiểu như Vị Cứu Tinh, Mê Người Khó Nắm Bắt, Tìm Kiếm Bình Yên.',
    id: 'Habis putus, kok ketemu tipe yang mirip lagi? Lewat 12 situasi, temukan rumus ketertarikanmu di antara 6 tipe seperti Sang Penyelamat, Suka yang Sulit Digapai, dan Pencari Kestabilan.',
  },
  tags: {
    ko: ['연애패턴', '이상형', '연애심리'],
    en: ['dating pattern', 'ideal type', 'love psychology'],
    ja: ['恋愛パターン', '理想のタイプ', '恋愛心理'],
    'zh-CN': ['恋爱模式', '理想型', '恋爱心理'],
    'zh-TW': ['戀愛模式', '理想型', '戀愛心理'],
    vi: ['kiểu yêu đương', 'hình mẫu lý tưởng', 'tâm lý tình yêu'],
    id: ['pola pacaran', 'tipe ideal', 'psikologi cinta'],
  },
};

export const PHASE3_SAME_TYPE_ATTRACTION_TYPES = ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6'] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3SameTypeAttractionScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_SAME_TYPE_ATTRACTION_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3SameTypeAttractionResult(answers: number[]): string {
  const scores = calculatePhase3SameTypeAttractionScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_SAME_TYPE_ATTRACTION_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(숨은 끌림). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3SameTypeAttractionHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3SameTypeAttractionScores(answers);
  const sorted = [...PHASE3_SAME_TYPE_ATTRACTION_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '처음 만났을 때 유독 눈이 가는 사람은?',
    opts: [
      ['속을 알 수 없고 쉽게 곁을 내주지 않을 것 같은 사람', 2],
      ['어디서 본 듯 말이 잘 통하고 편안한 사람', 5],
      ['무언가에 푹 빠져 빛이 나는, 나보다 한 수 위처럼 보이는 사람', 4],
      ['뭘 할지 예측이 안 되고 등장만으로 분위기가 확 바뀌는 사람', 6],
    ],
  },
  {
    q: '연애 상대로 매력을 느끼는 순간은?',
    opts: [
      ['말과 행동이 늘 한결같을 때', 3],
      ['일이나 분야에서의 실력과 전문성에 존경심이 들 때', 4],
      ['힘들어 보여서 곁에서 챙겨주고 싶다는 마음이 들 때', 1],
      ['갑자기 "지금 바다 갈래?" 같은 즉흥 제안을 던질 때', 6],
    ],
  },
  {
    q: '설렘이 시작되는 포인트는?',
    opts: [
      ['연락이 오락가락해서 나만 신경 쓰는 것 같은데 오히려 더 생각난다', 2],
      ['오래 알고 지내서 편한 사이였는데 어느 순간 다르게 보인다', 5],
      ['약한 모습을 나에게만 보여줬을 때', 1],
      ['연락이 꾸준해서 불안해할 틈이 없을 때', 3],
    ],
  },
  {
    q: '지금까지의 연애 상대들을 돌아보면 가장 많은 공통점은?',
    opts: [
      ['취향·말투·생활 환경이 나와 비슷한 사람이었다', 5],
      ['쉽게 마음을 주지 않는 쪽이 오히려 더 끌렸다', 2],
      ['매번 새로운 걸 벌이는 모험가 같은 사람이었다', 6],
      ['성실하고 책임감 있는 사람이었다', 3],
    ],
  },
  {
    q: '친구가 내 이상형을 한마디로 말한다면?',
    opts: [
      ['"어려운 일 겪는 사람을 못 지나치잖아"', 1],
      ['"오래 봐서 익숙한 편한 사람이지"', 5],
      ['"너보다 훨씬 앞서가는 사람이지"', 4],
      ['"믿음직하고 흔들리지 않는 사람이지"', 3],
    ],
  },
  {
    q: '내가 가장 잘 거르지 못하는 유형은?',
    opts: [
      ['차갑게 선을 긋다가 가끔 마음을 흔드는 말을 던지는 사람', 2],
      ['재능·분위기·스펙이 높아서 올려다보게 되는 사람', 4],
      ['새로운 경험으로 데려가 주는 사람', 6],
      ['상처가 있어서 옆에서 지켜주고 싶은 사람', 1],
    ],
  },
  {
    q: '연애 초반에 가장 설레는 순간은?',
    opts: [
      ['감정이 롤러코스터처럼 오르내려서 심장이 뛸 때', 6],
      ['이 사람이라면 앞으로도 안심할 수 있겠다 싶을 때', 3],
      ['이 사람처럼 되고 싶다는 생각이 들 때', 4],
      ['연락이 올지 안 올지 몰라서 마음을 졸일 때', 2],
    ],
  },
  {
    q: '연애할 때 나도 모르게 하는 행동은?',
    opts: [
      ['상대를 우러러보며 하나라도 더 배우려 한다', 4],
      ['새로운 장소와 새로운 경험을 계속 제안한다', 6],
      ['상대의 고민과 문제를 먼저 해결해 주려고 한다', 1],
      ['이미 익숙한 사람·장소·방식으로 자연스럽게 돌아간다', 5],
    ],
  },
  {
    q: '연인의 어떤 모습에 가장 약한가?',
    opts: [
      ['약속을 지키고 한결같은 모습', 3],
      ['힘든 이야기를 털어놓으며 나에게 기대는 모습', 1],
      ['규칙에 얽매이지 않고 하고 싶은 대로 하는 자유로움', 6],
      ['다가가면 한 발 물러나서 더 알고 싶어지는 거리감', 2],
    ],
  },
  {
    q: '다시 연애를 시작한다면 마음이 가는 후보는?',
    opts: [
      ['같은 동네·학교·직장에서 오래 봐온 편한 사람', 5],
      ['내가 존경하는 분야에서 인정받는 사람', 4],
      ['매력은 큰데 애매하게 선을 긋는 사람', 2],
      ['약속·연락·태도가 모두 믿을 만한 사람', 3],
    ],
  },
  {
    q: '헤어진 뒤 다음 사람을 고르는 기준은?',
    opts: [
      ['지난 연애가 지루했으니 이번엔 짜릿한 사람', 6],
      ['역시 편한 게 최고라서 익숙한 환경의 사람', 5],
      ['이번엔 정말 믿을 수 있는 사람', 3],
      ['정신 차려보면 또 아픈 사람을 챙기고 있다', 1],
    ],
  },
  {
    q: '지금까지 끌렸던 사람들을 한 문장으로 말한다면?',
    opts: [
      ['"내가 도와주고 싶었던 사람"', 1],
      ['"쉽게 곁을 안 주던 사람"', 2],
      ['"처음부터 편했던 사람"', 5],
      ['"내가 동경했던 사람"', 4],
    ],
  },
];

export const phase3SameTypeAttractionQuestions: Phase3SameTypeAttractionQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  question: withForeign(item.q, (loc) => PHASE3_SAME_TYPE_ATTRACTION_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_SAME_TYPE_ATTRACTION_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS: (keyof Phase3SameTypeAttractionResultText)[] = [
  'title',
  'typeName',
  'attractionFormula',
  'shortDescription',
  'description',
  'keywords',
  'attractedTo',
  'strengths',
  'repeatPattern',
  'frequentSaying',
  'changeTips',
  'oneLiner',
  'shareLine',
];

const KO_RESULTS: Phase3SameTypeAttractionResult[] = [
  {
    type: 'Type1',
    emoji: '🤲',
    title: L('도와주고 싶은 마음에 끌리는 사람, 구원자형'),
    typeName: L('구원자형'),
    attractionFormula: L('힘들어 보이는 사람 + 내가 필요한 순간 = 설렘'),
    shortDescription: L(
      '당신은 완벽한 사람보다 곁이 필요한 사람에게 마음이 움직입니다. 누군가에게 필요한 사람이 되는 순간 가장 크게 설렙니다.',
    ),
    description: L(
      "상처가 있거나 지쳐 보이는 사람에게 자꾸 눈이 가고, 연애가 시작되면 상대의 고민과 문제부터 해결해 주려 합니다. 그 다정함이 큰 매력이지만, 어느새 연애가 '돌봄'이 되어 내 마음은 뒷전이 되기도 합니다.",
    ),
    keywords: L('돌봄, 보호 본능, 필요한 사람, 헌신, 챙김'),
    attractedTo: L('지쳐 있거나 사연이 많거나 도움이 필요해 보이는 사람'),
    strengths: L('따뜻하고 헌신적이며 상대가 힘들 때 가장 든든한 곁이 되어줌'),
    repeatPattern: L('내가 더 주는 쪽이 되고 상대는 받는 데 익숙해지는 흐름'),
    frequentSaying: L('"내가 옆에 있어 주면 괜찮아질 거야"'),
    changeTips: L(
      "연애 초반에 '이 사람의 매력'과 '이 사람의 사연'을 나눠서 적어보기\n챙겨주기 전에 내가 원하는 것도 한 가지 먼저 말하기\n서로 주고받는 균형이 맞는 사람에게 같은 마음을 쓰는 연습하기",
    ),
    oneLiner: L('당신의 다정함은 소중합니다. 그 다정함을 받는 만큼 돌려줄 줄 아는 사람에게 쓰면 훨씬 오래 갑니다'),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 구원자형 🤲 힘들어 보이는 사람 못 지나친대... 아 맞다 내 전 애인들 다 그랬음ㅋㅋ 단톡방 결과 카드 인증! 너희는 뭐 나왔어?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌙',
    title: L('잡힐 듯 안 잡히는 사람에게 끌리는, 나쁜 남녀 끌림형'),
    typeName: L('나쁜 남녀 끌림형'),
    attractionFormula: L('닿을 듯 말 듯한 거리 + 알 수 없는 속마음 = 중독'),
    shortDescription: L('당신의 마음은 확실한 사람보다 아직 확실하지 않은 사람 앞에서 더 크게 반응합니다.'),
    description: L(
      '연락이 오락가락하고 선을 긋다가도 가끔 마음을 흔드는 한마디를 던지는 사람에게 유독 약합니다. 쉽게 얻을 수 없는 것에 마음이 더 쏠리는 건 자연스러운 반응이지만, 그 설렘이 불안과 섞이면 연애가 힘들어지기 쉽습니다.',
    ),
    keywords: L('밀당, 거리감, 미스터리, 불확실함, 애매한 신호'),
    attractedTo: L('속을 알 수 없고 쉽게 곁을 내주지 않는 사람'),
    strengths: L('감정 표현이 풍부하고 사랑에 열정적이며 상대의 작은 변화도 놓치지 않는 예민함'),
    repeatPattern: L('상대가 확실하게 다가오면 열기가 식고, 애매할 때 가장 뜨거워지는 흐름'),
    frequentSaying: L('"내가 이상한 건 알겠는데 자꾸 신경 쓰여"'),
    changeTips: L(
      '설렘이 큰 순간과 안심되는 순간을 나눠서 기록해 보기\n불안해서 두근거리는 건지 좋아서 두근거리는 건지 구분해 보기\n일관되게 다정한 사람을 세 번 만나보고 감정 변화 관찰하기',
    ),
    oneLiner: L(
      '끌림이 강한 건 마음이 열정적이라는 뜻입니다. 그 열정이 확실한 사랑 앞에서도 설렐 수 있다면 가장 좋은 연애가 시작됩니다',
    ),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 나쁜 남녀 끌림형 🌙 잡힐 듯 안 잡히는 사람한테 약하대... 팩트 폭행ㅠ 결과 카드 인증하고 간다 너희는?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🏡',
    title: L('흔들리지 않는 사람에게 마음이 놓이는, 안정 추구형'),
    typeName: L('안정 추구형'),
    attractionFormula: L('한결같은 태도 + 믿을 수 있는 행동 = 안심'),
    shortDescription: L(
      '당신은 불꽃 같은 사람보다 약속을 지키는 사람에게 사랑을 느낍니다. 마음이 편한 순간이 가장 큰 설렘입니다.',
    ),
    description: L(
      '연락이 꾸준하고, 말과 행동이 일치하고, 책임감 있는 사람에게 끌립니다. 불안한 연애에 지쳐본 경험이 있거나 관계의 안정을 중요하게 여기는 타입입니다. 신뢰가 쌓일수록 더 깊이 사랑하는 사람입니다.',
    ),
    keywords: L('신뢰, 한결같음, 책임감, 예측 가능, 안심'),
    attractedTo: L('성실하고 약속을 지키며 감정 기복이 적은 사람'),
    strengths: L('관계를 오래 지속하는 힘. 깊고 단단한 연애를 만들어 감'),
    repeatPattern: L('안정적인 사람을 만났는데 설렘이 약하다고 느껴 스스로를 의심하는 흐름'),
    frequentSaying: L('"자극은 필요 없고 믿을 수 있는 사람이면 돼"'),
    changeTips: L(
      "'설렘이 약하다'와 '안정적이다'를 같은 말로 취급하지 않기\n안정적인 관계 안에서도 작은 이벤트와 새로운 시도를 하나씩 더해보기\n안정을 이유로 마음 표현을 미루지 않기",
    ),
    oneLiner: L('믿을 수 있는 사람을 알아보는 눈은 큰 자산입니다. 그 믿음 위에 설렘을 조금만 얹으면 완벽해집니다'),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 안정 추구형 🏡 한결같은 사람이 이상형이래... 이건 인정ㅋㅋ 단톡방 결과 카드 인증! 너희는 어떤 유형이야?',
    ),
  },
  {
    type: 'Type4',
    emoji: '✨',
    title: L('올려다볼수록 더 반하는, 동경형'),
    typeName: L('동경형'),
    attractionFormula: L('나보다 한 수 위 + 배울 점이 많은 사람 = 설렘'),
    shortDescription: L('당신은 같이 있으면 나도 더 나아질 것 같은 사람에게 마음이 움직입니다.'),
    description: L(
      '재능, 전문성, 분위기, 가치관이 뚜렷하고 나보다 앞서가는 사람에게 존경과 설렘이 함께 올라옵니다. 상대에게서 배우고 성장하는 연애를 원하고, 그런 사람 곁에 있으면 나도 빛나는 것 같은 기분이 듭니다.',
    ),
    keywords: L('존경, 성장, 올려다봄, 재능, 롤모델'),
    attractedTo: L('자기 분야에서 인정받고 확고한 신념이 있는 사람'),
    strengths: L('자극받고 성장하려는 의지가 강하며 상대의 장점을 정확히 알아봄'),
    repeatPattern: L('상대를 높이 올려다보다가 실제 모습을 알게 되면 괴리를 느끼거나, 내가 작아지는 느낌이 드는 흐름'),
    frequentSaying: L('"저 사람 진짜 멋있다. 배울 게 너무 많아"'),
    changeTips: L(
      "상대의 장점뿐 아니라 일상의 모습도 함께 보려고 노력하기\n'이 사람처럼 되고 싶다'와 '이 사람과 잘 맞는다'를 구분하기\n내 장점도 같은 크기로 인정하고 상대에게 말해보기",
    ),
    oneLiner: L('멋진 사람을 알아보는 눈이 있다는 건 당신 안에도 같은 빛이 있다는 뜻입니다'),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 동경형 ✨ 나보다 한 수 위인 사람한테 반한대... 내 이상형 설명 그대로임ㅋㅋ 결과 카드 인증! 너희는?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🧸',
    title: L('편하고 익숙한 곳으로 마음이 흐르는, 익숙함형'),
    typeName: L('익숙함형'),
    attractionFormula: L('익숙한 환경 + 닮은 분위기 = 편안한 끌림'),
    shortDescription: L('당신은 낯선 설렘보다 이미 아는 편안함에서 사랑을 시작합니다.'),
    description: L(
      '오래 알고 지낸 사람, 같은 학교·직장·동네에서 만난 사람, 말투와 취향이 비슷한 사람에게 자연스럽게 끌립니다. 헤어진 뒤에도 비슷한 분위기의 사람을 다시 만나는 경우가 많습니다. 마음이 편해지는 순간 호감이 생기는 타입입니다.',
    ),
    keywords: L('편안함, 친숙함, 비슷함, 오래된 사이, 자연스러움'),
    attractedTo: L('말이 잘 통하고 취향과 생활 환경이 비슷한 사람'),
    strengths: L('편안한 관계를 잘 만들고 소통이 자연스러우며 서로 눈치 보지 않는 연애를 함'),
    repeatPattern: L('같은 반경 안에서만 사람을 만나다 보니 비슷한 사람과 비슷한 연애를 반복하는 흐름'),
    frequentSaying: L('"얘랑 있으면 그냥 편해"'),
    changeTips: L(
      '평소와 다른 모임이나 활동에 한 달에 한 번은 참여해 보기\n익숙해서 끌리는 건지 정말 좋아서 끌리는 건지 스스로 물어보기\n낯선 유형의 사람과 두 번은 대화해 본 뒤 판단하기',
    ),
    oneLiner: L('편안함은 오래가는 사랑의 시작입니다. 새로운 사람 한 명만 만나봐도 내 끌림 폭이 넓어집니다'),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 익숙함형 🧸 편하고 익숙한 사람한테 끌린대... 전 애인들 다 같은 동네 사람이었던 거 실화냐ㅋㅋ 결과 카드 인증! 너희는?',
    ),
  },
  {
    type: 'Type6',
    emoji: '⚡',
    title: L('예측 불가능한 사람에게 심장이 뛰는, 자극 추구형'),
    typeName: L('자극 추구형'),
    attractionFormula: L('새로움 + 예측 불가 + 즉흥 = 두근거림'),
    shortDescription: L('당신은 내일이 궁금한 사람에게 끌립니다. 지루함은 연애의 가장 큰 적입니다.'),
    description: L(
      '즉흥적이고 모험을 좋아하며 같이 있으면 분위기가 확 달라지는 사람에게 심장이 반응합니다. 새로운 경험과 강한 감정의 오르내림이 있는 연애에서 살아있다는 느낌을 받습니다.',
    ),
    keywords: L('짜릿함, 새로움, 즉흥, 모험, 강렬한 케미'),
    attractedTo: L('자유롭고 즉흥적이며 매번 새로운 곳으로 이끄는 사람'),
    strengths: L('연애에 활력을 불어넣고 새로운 경험을 두려워하지 않는 에너지'),
    repeatPattern: L('초반 불꽃이 크지만 일상이 되면 빠르게 식어서 다음 설렘을 찾게 되는 흐름'),
    frequentSaying: L('"안정적인 건 좋은데 너무 심심하면 안 되잖아"'),
    changeTips: L(
      '설렘이 줄어드는 시점이 언제인지 패턴 파악하기\n일상 속에서 함께 할 새로운 도전을 의도적으로 만들어 보기\n짜릿함과 안정감이 함께 있는 사람이 어떤 모습일지 정의해 보기',
    ),
    oneLiner: L(
      '새로움을 즐기는 마음은 큰 매력입니다. 설렘이 일상 속에서도 이어질 수 있는 사람을 만나면 연애가 훨씬 오래 갑니다',
    ),
    shareLine: L(
      '나는 왜 늘 비슷한 사람에게 끌릴까? 결과: 자극 추구형 ⚡ 예측 불가능한 사람한테 심장 뛴대... 지루하면 못 사귀는 거 맞음ㅋㅋ 단톡방 결과 카드 인증! 너희는 뭐야?',
    ),
  },
];

export const phase3SameTypeAttractionResults: Phase3SameTypeAttractionResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3SameTypeAttractionResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_SAME_TYPE_ATTRACTION_I18N[loc].results[ri][key]);
  }
  return merged;
});
