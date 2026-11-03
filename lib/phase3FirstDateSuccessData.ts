/**
 * 나의 첫 데이트 성공 확률
 * slug: phase3-first-date-success
 * 10문항 4지선다 · 1~4점 합산(10~40) · 5구간(30/50/70/85/95%)
 */

import {
  PHASE3_FIRST_DATE_SUCCESS_I18N,
  type Phase3FirstDateSuccessForeignLocale,
  type Phase3FirstDateSuccessResultText,
} from './phase3FirstDateSuccessI18n';

export type Phase3FirstDateSuccessLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FirstDateSuccessText = Record<Phase3FirstDateSuccessLocaleKey, string>;

function L(ko: string): Phase3FirstDateSuccessText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_FIRST_DATE_SUCCESS_I18N) as Phase3FirstDateSuccessForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3FirstDateSuccessForeignLocale) => string,
): Phase3FirstDateSuccessText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export type Phase3FirstDateSuccessAreaId =
  | 'wait'
  | 'greeting'
  | 'icebreak'
  | 'listen'
  | 'myStory'
  | 'silence'
  | 'disagree'
  | 'menu'
  | 'goodbye'
  | 'after';

export const PHASE3_FIRST_DATE_SUCCESS_AREA_LABELS: Record<
  Phase3FirstDateSuccessAreaId,
  Phase3FirstDateSuccessText
> = {
  wait: withForeign('약속 대기', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.wait),
  greeting: withForeign('첫인사', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.greeting),
  icebreak: withForeign('말문 열기', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.icebreak),
  listen: withForeign('경청', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.listen),
  myStory: withForeign('내 이야기 나누기', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.myStory),
  silence: withForeign('침묵 대처', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.silence),
  disagree: withForeign('의견 차이', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.disagree),
  menu: withForeign('메뉴·계산', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.menu),
  goodbye: withForeign('마무리', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.goodbye),
  after: withForeign('데이트 후', (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].areas.after),
};

export interface Phase3FirstDateSuccessQuestion {
  id: number;
  area: Phase3FirstDateSuccessAreaId;
  question: Phase3FirstDateSuccessText;
  options: { text: Phase3FirstDateSuccessText; score: number }[];
}

export interface Phase3FirstDateSuccessResult {
  type: string;
  emoji: string;
  probability: number;
  min: number;
  max: number;
  title: Phase3FirstDateSuccessText;
  gaugeLabel: Phase3FirstDateSuccessText;
  levelLine: Phase3FirstDateSuccessText;
  shortDescription: Phase3FirstDateSuccessText;
  description: Phase3FirstDateSuccessText;
  scoreRange: Phase3FirstDateSuccessText;
  keywords: Phase3FirstDateSuccessText;
  strengths: Phase3FirstDateSuccessText;
  tips: Phase3FirstDateSuccessText;
  counseling: Phase3FirstDateSuccessText;
  oneLiner: Phase3FirstDateSuccessText;
  shareLine: Phase3FirstDateSuccessText;
}

export const PHASE3_FIRST_DATE_SUCCESS_MIN = 10;
export const PHASE3_FIRST_DATE_SUCCESS_MAX = 40;

export const PHASE3_FIRST_DATE_SUCCESS_META = {
  title: withForeign(
    '나의 첫 데이트 성공 확률',
    (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].meta.title,
  ),
  description: withForeign(
    '첫 데이트의 분위기, 나의 습관이 얼마나 좌우할까? 10가지 첫 데이트 상황에서 나의 반응을 점수로 합산해 성공 확률을 %로 알려드립니다.',
    (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['첫데이트', '소개팅', '썸', '연애테스트'],
    en: PHASE3_FIRST_DATE_SUCCESS_I18N.en.meta.tags,
    ja: PHASE3_FIRST_DATE_SUCCESS_I18N.ja.meta.tags,
    'zh-CN': PHASE3_FIRST_DATE_SUCCESS_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_FIRST_DATE_SUCCESS_I18N['zh-TW'].meta.tags,
    vi: PHASE3_FIRST_DATE_SUCCESS_I18N.vi.meta.tags,
    id: PHASE3_FIRST_DATE_SUCCESS_I18N.id.meta.tags,
  },
};

const RAW: {
  area: Phase3FirstDateSuccessAreaId;
  q: string;
  opts: [string, number][];
}[] = [
  {
    area: 'wait',
    q: '약속 장소에 도착해 상대를 기다리는 동안 나는?',
    opts: [
      ['여유 있게 도착해 주변을 둘러보며 마음을 가라앉힌다', 4],
      ['조금 일찍 와서 거울을 보며 옷매무새를 확인한다', 3],
      ['폰만 보며 긴장을 달래고 상대가 오기를 기다린다', 2],
      ['하고 싶은 말을 계속 머릿속으로 되뇌며 안절부절한다', 1],
    ],
  },
  {
    area: 'greeting',
    q: '상대와 처음 인사를 나누는 순간 나는?',
    opts: [
      ['눈을 피하며 작은 목소리로 겨우 인사한다', 1],
      ['눈을 맞추고 웃으며 반갑다고 먼저 말한다', 4],
      ['웃기는 하지만 인사말이 조금 어색하게 나온다', 3],
      ['인사는 하는데 표정이 굳어서 딱딱한 인상을 준다', 2],
    ],
  },
  {
    area: 'icebreak',
    q: '대화 초반, 어색한 분위기를 풀어야 한다. 나는?',
    opts: [
      ['준비해 온 질문을 하나씩 던지며 이어 간다', 2],
      ['상대가 먼저 말해 주기를 기다리며 가만히 있는다', 1],
      ['오는 길의 소소한 이야기로 가볍게 말문을 연다', 4],
      ['주문한 메뉴나 장소 이야기로 무난하게 시작한다', 3],
    ],
  },
  {
    area: 'listen',
    q: '상대가 자기 이야기를 길게 하고 있다. 나는?',
    opts: [
      ['고개를 끄덕이며 듣다가 가끔 한마디 거든다', 3],
      ['듣고는 있지만 다음에 할 말을 생각하느라 바쁘다', 2],
      ['지루해서 폰을 슬쩍 보거나 딴생각을 한다', 1],
      ['눈을 맞추며 들으면서 궁금한 점을 이어서 묻는다', 4],
    ],
  },
  {
    area: 'myStory',
    q: '내 이야기를 해야 하는 차례가 왔다. 나는?',
    opts: [
      ['솔직하고 편한 일상을 짧게 나누고 상대에게도 묻는다', 4],
      ['괜찮아 보이는 이야기만 골라 조금 정돈해서 말한다', 3],
      ['한 가지 주제로 오래 말하다 보니 일방적이 된다', 2],
      ['별 이야기 없다며 말을 줄이고 얼른 질문을 돌린다', 1],
    ],
  },
  {
    area: 'silence',
    q: '대화 중 갑자기 침묵이 흘렀다. 나는?',
    opts: [
      ['당황해서 얼굴이 굳고 어쩔 줄 몰라 한다', 1],
      ['웃으며 "잠깐 생각했어요"라고 가볍게 넘긴다', 4],
      ['컵을 만지작거리며 상대가 말하기를 기다린다', 3],
      ['급하게 아무 이야기나 꺼내서 침묵을 메운다', 2],
    ],
  },
  {
    area: 'disagree',
    q: '상대의 의견이 나와 다르다. 나는?',
    opts: [
      ['마음에 안 들지만 티 내지 않고 고개만 끄덕인다', 2],
      ['바로 반박하거나 내 생각이 맞다고 설명한다', 1],
      ['그럴 수도 있겠다고 받아들이고 이유를 궁금해한다', 4],
      ['다른 점은 인정하되 내 생각도 가볍게 이야기한다', 3],
    ],
  },
  {
    area: 'menu',
    q: '식사하며 메뉴나 계산 이야기가 나왔다. 나는?',
    opts: [
      ['상대 취향을 물어보고 무난한 쪽으로 고른다', 3],
      ['결정을 못 해서 한참 메뉴판만 들여다본다', 2],
      ['아무거나 괜찮다며 선택을 전부 상대에게 맡긴다', 1],
      ['먹고 싶은 걸 말하고 상대 의견도 편하게 듣는다', 4],
    ],
  },
  {
    area: 'goodbye',
    q: '데이트가 끝나갈 무렵 나는?',
    opts: [
      ['오늘 좋았던 점을 솔직히 말하고 인사를 건넨다', 4],
      ['고마웠다는 인사만 짧게 하고 조용히 헤어진다', 3],
      ['아쉬워도 말은 못 하고 시계만 슬쩍 쳐다본다', 2],
      ['어색해서 서둘러 일어나 급하게 헤어진다', 1],
    ],
  },
  {
    area: 'after',
    q: '헤어진 뒤 집에 가는 길에 나는?',
    opts: [
      ['오늘 했던 말과 행동을 끝없이 곱씹으며 자책한다', 1],
      ['좋았던 순간을 떠올리며 가볍게 안부 메시지를 보낸다', 4],
      ['잘 들어갔는지 상대의 연락을 기다려 본다', 3],
      ['호감이 있는지 알 수 없어 마음이 복잡하다', 2],
    ],
  },
];

export const phase3FirstDateSuccessQuestions: Phase3FirstDateSuccessQuestion[] = RAW.map(
  (item, index) => ({
    id: index + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].questions[index].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(
        text,
        (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].questions[index].opts[oi],
      ),
      score,
    })),
  }),
);

const RAW_RESULTS: {
  type: string;
  emoji: string;
  probability: number;
  min: number;
  max: number;
  title: string;
  gaugeLabel: string;
  levelLine: string;
  shortDescription: string;
  description: string;
  scoreRange: string;
  keywords: string;
  strengths: string;
  tips: string;
  oneLiner: string;
  shareLine: string;
}[] = [
  {
    type: '30',
    emoji: '🌧️',
    probability: 30,
    min: 10,
    max: 16,
    title: '성공 확률 30%',
    gaugeLabel: '30%',
    levelLine: '점수대 10~16점',
    shortDescription: '당신의 첫 데이트는 긴장이 분위기를 가리는 단계입니다.',
    description:
      '마음은 있지만 긴장과 걱정이 앞서 본래의 매력이 잘 드러나지 않습니다. 습관 몇 가지만 바꿔도 확률이 크게 달라질 수 있는 구간입니다.',
    scoreRange: '10~16점',
    keywords: '긴장·굳은 표정·말 줄이기·자책',
    strengths: '상대를 존중하고 신중하게 대하는 진심',
    tips:
      '만나기 전 화제 3가지를 메모하고 긴장되면 "저 좀 긴장했어요"라고 솔직히 말하기\n첫 5분은 질문 위주로 대화하며 상대 이야기를 듣는 데 집중하기\n데이트 후 자책 대신 \'좋았던 순간 한 가지\'를 먼저 떠올리기',
    oneLiner: '긴장은 진심의 다른 모습입니다. 인정하는 한마디가 분위기를 풀어 줍니다',
    shareLine:
      '나의 첫 데이트 성공 확률: 30% 🌧️ ({score}점/40) 긴장이 분위기를 가린대ㅋㅋ 너는 몇 %야? 댓글로 비교해보자',
  },
  {
    type: '50',
    emoji: '⛅',
    probability: 50,
    min: 17,
    max: 22,
    title: '성공 확률 50%',
    gaugeLabel: '50%',
    levelLine: '점수대 17~22점',
    shortDescription: '당신의 첫 데이트는 반반의 가능성을 가진 단계입니다.',
    description:
      '호감을 주는 순간과 어색해지는 순간이 섞여 있습니다. 분위기를 읽는 감각은 있어서 작은 습관을 다듬으면 빠르게 올라갑니다.',
    scoreRange: '17~22점',
    keywords: '반반·들쑥날쑥한 분위기·계산·조심스러움',
    strengths: '상황을 살피며 무난하게 대처하는 균형감',
    tips:
      '준비한 질문에서 벗어나 상대 답변에 이어서 묻는 연습하기\n침묵이 와도 웃으며 "잠깐 생각했어요"처럼 가볍게 넘기기\n내 이야기를 정돈하기보다 편한 일상 한 토막 나누기',
    oneLiner: '반반은 가능성이 가장 큰 구간입니다. 한 가지 습관만 바꿔도 분위기가 달라집니다',
    shareLine:
      '나의 첫 데이트 성공 확률: 50% ⛅ ({score}점/40) 반반이래... 너는 몇 %야? 점수 댓글로 알려줘',
  },
  {
    type: '70',
    emoji: '🌤️',
    probability: 70,
    min: 23,
    max: 28,
    title: '성공 확률 70%',
    gaugeLabel: '70%',
    levelLine: '점수대 23~28점',
    shortDescription: '당신의 첫 데이트는 좋은 분위기를 만들 가능성이 높은 단계입니다.',
    description:
      '대체로 편안하게 대화를 이끌고 상대의 이야기에도 귀를 기울입니다. 가끔 긴장이나 조심스러움이 나올 뿐 호감을 주는 기본기가 있습니다.',
    scoreRange: '23~28점',
    keywords: '편안함·경청·무난한 대화·기본기',
    strengths: '상대를 편하게 해 주고 대화를 안정적으로 이어 가는 힘',
    tips:
      '무난한 대화에 내 취향이나 솔직한 의견 한 가지를 더하기\n헤어질 때 오늘 좋았던 점을 한 문장으로 말해 보기\n상대의 호감 신호를 놓치지 않도록 대화 중 표정과 반응 살피기',
    oneLiner: '기본기는 충분합니다. 솔직한 한마디를 더하면 인상이 훨씬 선명해집니다',
    shareLine:
      '나의 첫 데이트 성공 확률: 70% 🌤️ ({score}점/40) 기본기 탄탄하대ㅋㅋ 너는 몇 %야? 댓글 ㄱㄱ',
  },
  {
    type: '85',
    emoji: '☀️',
    probability: 85,
    min: 29,
    max: 34,
    title: '성공 확률 85%',
    gaugeLabel: '85%',
    levelLine: '점수대 29~34점',
    shortDescription: '당신의 첫 데이트는 호감을 자연스럽게 만드는 단계입니다.',
    description:
      '눈을 맞추고 경청하며 자기 이야기도 편안하게 나눕니다. 침묵이나 의견 차이도 부드럽게 넘기는 여유가 있습니다.',
    scoreRange: '29~34점',
    keywords: '여유·눈 맞춤·경청·자연스러움·솔직함',
    strengths: '분위기를 읽고 자연스럽게 대화를 주고받는 능력',
    tips:
      '호감이 생기면 다음 만남을 가볍게 먼저 제안하기\n완벽한 인상보다 편안한 모습을 유지하며 상대에게도 여유 주기\n데이트 후 안부 메시지로 좋았던 순간 한 가지 전하기',
    oneLiner: '자연스러움이 가장 큰 매력입니다. 다음 만남을 향한 한 걸음만 더하면 됩니다',
    shareLine:
      '나의 첫 데이트 성공 확률: 85% ☀️ ({score}점/40) 자연스러운 호감형이래! 너는 몇 %야? 댓글로 비교해보자',
  },
  {
    type: '95',
    emoji: '🌈',
    probability: 95,
    min: 35,
    max: 40,
    title: '성공 확률 95%',
    gaugeLabel: '95%',
    levelLine: '점수대 35~40점',
    shortDescription: '당신의 첫 데이트는 좋은 분위기가 거의 보장된 단계입니다.',
    description:
      '처음부터 끝까지 상대를 편하게 하고, 솔직하게 마음을 나누며, 헤어진 뒤의 연결까지 자연스럽게 이어 갑니다. 다만 확률이 높다고 상대의 속도를 앞서가지 않도록 주의하세요.',
    scoreRange: '35~40점',
    keywords: '편안함·솔직함·경청·연결·여유',
    strengths: '상대가 편하게 마음을 열도록 이끄는 따뜻한 태도',
    tips:
      '상대의 속도에 맞춰 천천히 가며 호감을 확인하기\n내 편안함을 상대에게도 나눠 주고 서툰 모습도 따뜻하게 받아 주기\n이 노하우를 친구들과 나누기. 당신의 방식이 누군가의 힌트가 됩니다',
    oneLiner: '편안함을 줄 줄 아는 사람은 어디서든 환영받습니다. 속도만 맞추면 좋은 인연이 이어집니다',
    shareLine:
      '나의 첫 데이트 성공 확률: 95% 🌈 ({score}점/40) 거의 보장이래ㅋㅋ 너는 몇 %야? 점수 댓글로 인증해봐',
  },
];

const RESULT_TEXT_KEYS = [
  'title',
  'gaugeLabel',
  'levelLine',
  'shortDescription',
  'description',
  'scoreRange',
  'keywords',
  'strengths',
  'tips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3FirstDateSuccessResultText)[];

export const phase3FirstDateSuccessResults: Phase3FirstDateSuccessResult[] = RAW_RESULTS.map(
  (r, ri) => {
    const base: Phase3FirstDateSuccessResult = {
      type: r.type,
      emoji: r.emoji,
      probability: r.probability,
      min: r.min,
      max: r.max,
      title: L(r.title),
      gaugeLabel: L(r.gaugeLabel),
      levelLine: L(r.levelLine),
      shortDescription: L(r.shortDescription),
      description: L(r.description),
      scoreRange: L(r.scoreRange),
      keywords: L(r.keywords),
      strengths: L(r.strengths),
      tips: L(r.tips),
      counseling: L(''),
      oneLiner: L(r.oneLiner),
      shareLine: L(r.shareLine),
    };
    for (const key of RESULT_TEXT_KEYS) {
      base[key] = withForeign(r[key], (loc) => PHASE3_FIRST_DATE_SUCCESS_I18N[loc].results[ri][key]);
    }
    return base;
  },
);

export function calculatePhase3FirstDateSuccessTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3FirstDateSuccessResult(total: number): Phase3FirstDateSuccessResult {
  return (
    phase3FirstDateSuccessResults.find((item) => total >= item.min && total <= item.max) ??
    phase3FirstDateSuccessResults[0]
  );
}

/** 가장 낮게 나온 문항 영역. 동점이면 문항 순서대로 모두. 모든 문항이 같으면 빈 배열 */
export function getPhase3FirstDateSuccessGrowthPoints(
  answers: number[],
): Phase3FirstDateSuccessAreaId[] {
  const scores = phase3FirstDateSuccessQuestions.map((question) => answers[question.id - 1] ?? 0);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  if (min === max) return [];
  return phase3FirstDateSuccessQuestions
    .filter((_, index) => scores[index] === min)
    .map((question) => question.area);
}
