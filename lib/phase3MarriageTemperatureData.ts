/**
 * 내 결혼 생각 온도 측정
 * slug: phase3-marriage-temperature
 * 10문항 4지선다 · 1~4점 합산(10~40) · 5구간
 */

import {
  PHASE3_MARRIAGE_TEMPERATURE_I18N,
  type Phase3MarriageTemperatureForeignLocale,
  type Phase3MarriageTemperatureResultText,
} from './phase3MarriageTemperatureI18n';

export type Phase3MarriageTemperatureLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3MarriageTemperatureText = Record<Phase3MarriageTemperatureLocaleKey, string>;

function L(ko: string): Phase3MarriageTemperatureText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_MARRIAGE_TEMPERATURE_I18N) as Phase3MarriageTemperatureForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3MarriageTemperatureForeignLocale) => string,
): Phase3MarriageTemperatureText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export function marriageTemperatureText(text: Phase3MarriageTemperatureText, locale: string): string {
  return text[locale as Phase3MarriageTemperatureLocaleKey] || text.ko;
}

/** 내 마음이 서늘해지는 지점용 영역 */
export const PHASE3_MARRIAGE_TEMPERATURE_AREAS = [
  { id: 'socialNews', questionIds: [1] },
  { id: 'partnerTalk', questionIds: [2] },
  { id: 'pressure', questionIds: [3] },
  { id: 'marriedLife', questionIds: [4] },
  { id: 'prep', questionIds: [5] },
  { id: 'datingLink', questionIds: [6] },
  { id: 'freedom', questionIds: [7] },
  { id: 'family', questionIds: [8] },
  { id: 'timing', questionIds: [9] },
  { id: 'overall', questionIds: [10] },
] as const;

export type Phase3MarriageTemperatureAreaId = (typeof PHASE3_MARRIAGE_TEMPERATURE_AREAS)[number]['id'];

export const PHASE3_MARRIAGE_TEMPERATURE_AREA_LABELS: Record<
  Phase3MarriageTemperatureAreaId,
  Phase3MarriageTemperatureText
> = {
  socialNews: withForeign('주변 결혼 소식', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.socialNews),
  partnerTalk: withForeign('연인 결혼 대화', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.partnerTalk),
  pressure: withForeign('주변 압박', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.pressure),
  marriedLife: withForeign('결혼 후 일상', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.marriedLife),
  prep: withForeign('준비 과정', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.prep),
  datingLink: withForeign('연애와 결혼', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.datingLink),
  freedom: withForeign('자유·커리어', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.freedom),
  family: withForeign('가족 계획', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.family),
  timing: withForeign('시기', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.timing),
  overall: withForeign('전반 태도', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].areas.overall),
};

export interface Phase3MarriageTemperatureQuestion {
  id: number;
  area: Phase3MarriageTemperatureAreaId;
  question: Phase3MarriageTemperatureText;
  options: { text: Phase3MarriageTemperatureText; score: number }[];
}

export interface Phase3MarriageTemperatureResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  /** 게이지·표시용 온도 (°C 비유) */
  tempC: number;
  title: Phase3MarriageTemperatureText;
  gaugeLabel: Phase3MarriageTemperatureText;
  levelLine: Phase3MarriageTemperatureText;
  shortDescription: Phase3MarriageTemperatureText;
  description: Phase3MarriageTemperatureText;
  scoreRange: Phase3MarriageTemperatureText;
  keywords: Phase3MarriageTemperatureText;
  strengths: Phase3MarriageTemperatureText;
  tips: Phase3MarriageTemperatureText;
  oneLiner: Phase3MarriageTemperatureText;
  /** {score} 치환 */
  shareLine: Phase3MarriageTemperatureText;
}

export const PHASE3_MARRIAGE_TEMPERATURE_META = {
  title: withForeign('내 결혼 생각 온도 측정', (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].meta.title),
  description: withForeign(
    '결혼에 대한 내 마음은 지금 몇 도일까? 10가지 상황에서 반응을 합산해 영하 비혼 확신부터 뜨거운 결혼 열망까지 나의 결혼 생각 온도를 알려드립니다.',
    (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['결혼생각', '비혼', '연애테스트'],
    en: PHASE3_MARRIAGE_TEMPERATURE_I18N.en.meta.tags,
    ja: PHASE3_MARRIAGE_TEMPERATURE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_MARRIAGE_TEMPERATURE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_MARRIAGE_TEMPERATURE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_MARRIAGE_TEMPERATURE_I18N.vi.meta.tags,
    id: PHASE3_MARRIAGE_TEMPERATURE_I18N.id.meta.tags,
  },
};

export const PHASE3_MARRIAGE_TEMPERATURE_MIN = 10;
export const PHASE3_MARRIAGE_TEMPERATURE_MAX = 40;

const RAW_QUESTIONS: {
  q: string;
  area: Phase3MarriageTemperatureAreaId;
  opts: [string, number][];
}[] = [
  {
    q: '친구가 결혼 소식을 전했다. 나는?',
    area: 'socialNews',
    opts: [
      ['부럽고 나도 그런 날이 오면 좋겠다고 생각한다', 4],
      ['축하하면서 나의 미래도 한 번쯤 그려 본다', 3],
      ['기쁘지만 나와는 상관없는 일처럼 느껴진다', 2],
      ['축하는 하지만 나는 결혼 생각이 전혀 없다', 1],
    ],
  },
  {
    q: '연인이 "우리 결혼하면 어떨까?"라고 가볍게 말했다. 나는?',
    area: 'partnerTalk',
    opts: [
      ['갑자기 부담스러워 화제를 돌리고 싶어진다', 1],
      ['설레면서 함께 그려 보는 이야기로 이어 간다', 4],
      ['당황하지만 진지하게 생각해 볼 만하다고 느낀다', 3],
      ['농담으로 받아넘기며 반응을 살핀다', 2],
    ],
  },
  {
    q: '부모님이나 주변에서 결혼 이야기를 꺼냈다. 나는?',
    area: 'pressure',
    opts: [
      ['부담스럽지만 웃으며 넘어간다', 2],
      ['간섭처럼 느껴져 불편하고 말을 피한다', 1],
      ['내 계획을 편하게 이야기하고 조언도 들어 본다', 4],
      ['아직 이르다고 답하되 완전히 닫지는 않는다', 3],
    ],
  },
  {
    q: '결혼 후의 생활을 상상해 본다. 나는?',
    area: 'marriedLife',
    opts: [
      ['좋은 점과 걱정이 반반으로 떠오른다', 3],
      ['자유가 줄어들 것 같아 걱정이 더 크다', 2],
      ['상상만 해도 답답하고 내키지 않는다', 1],
      ['함께하는 일상이 따뜻하게 그려진다', 4],
    ],
  },
  {
    q: '결혼 준비(상견례·예식·살림 등) 이야기를 들었다. 나는?',
    area: 'prep',
    opts: [
      ['번거롭지만 함께 준비하는 과정이 기대된다', 4],
      ['힘들 것 같지만 감당할 수 있다고 생각한다', 3],
      ['복잡해 보여 생각만 해도 지친다', 2],
      ['그 과정을 겪고 싶지 않아 결혼 자체가 멀게 느껴진다', 1],
    ],
  },
  {
    q: '연애 기간과 결혼의 관계에 대한 나의 생각은? 나는?',
    area: 'datingLink',
    opts: [
      ['연애와 결혼은 완전히 별개라 결혼은 필요 없다', 1],
      ['서로를 충분히 알면 자연스럽게 결혼으로 이어질 수 있다', 4],
      ['좋은 사람이라면 결혼도 고려해 볼 수 있다', 3],
      ['결혼은 연애와 다른 문제라 신중하게 따져 본다', 2],
    ],
  },
  {
    q: '결혼과 나의 커리어·자유에 대해 생각하면? 나는?',
    area: 'freedom',
    opts: [
      ['둘이 충돌할까 봐 선뜻 결정하기 어렵다', 2],
      ['결혼하면 내 삶이 크게 줄어들 것 같아 꺼려진다', 1],
      ['서로 존중하며 함께 이룰 수 있다고 믿는다', 4],
      ['조율하면 가능하다고 생각하지만 시간이 필요하다', 3],
    ],
  },
  {
    q: '아이나 가족을 꾸리는 미래를 떠올려 본다. 나는?',
    area: 'family',
    opts: [
      ['아직 확신은 없지만 열어 두고 생각한다', 3],
      ['책임이 커 보여서 부담감이 앞선다', 2],
      ['나의 삶의 계획에는 들어 있지 않다', 1],
      ['가족을 이루는 모습이 행복하게 그려진다', 4],
    ],
  },
  {
    q: '결혼 적령기나 시기에 대한 나의 마음은? 나는?',
    area: 'timing',
    opts: [
      ['좋은 사람과 때가 되면 결혼하고 싶다', 4],
      ['서두르지 않지만 몇 년 안에 생각해 본다', 3],
      ['시기보다 사람이 중요해 지금은 생각이 없다', 2],
      ['시기와 상관없이 결혼은 내 선택지가 아니다', 1],
    ],
  },
  {
    q: '지금의 나에게 가장 가까운 문장은? 나는?',
    area: 'overall',
    opts: [
      ['"결혼 없이도 충분히 행복하게 살 수 있어"', 1],
      ['"함께할 사람이 있다면 결혼하고 싶어"', 4],
      ['"좋은 사람을 만나면 그때 생각해 볼래"', 3],
      ['"해도 되고 안 해도 되는 선택이라고 생각해"', 2],
    ],
  },
];

const RAW_RESULTS: {
  type: string;
  emoji: string;
  min: number;
  max: number;
  tempC: number;
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
    type: 'Type1',
    emoji: '🧊',
    min: 10,
    max: 16,
    tempC: -5,
    title: '영하 비혼 확신',
    gaugeLabel: '영하',
    levelLine: '결혼 온도: 영하 — 나만의 삶이 분명한 단계',
    shortDescription: '당신의 결혼 온도는 영하, 혼자서도 단단한 삶의 방향이 분명합니다.',
    description:
      '결혼은 선택이라는 생각이 분명하고, 자신의 삶의 방식을 확실하게 알고 있습니다. 비혼은 결혼에 대한 거부가 아니라 내 삶의 설계입니다. 만약 연인이 결혼 열망이 높다면 이 온도 차이를 일찍 대화로 확인하는 것이 서로를 존중하는 길입니다.',
    scoreRange: '10~16점',
    keywords: '비혼 확신·자기 설계·독립·분명한 기준',
    strengths: '자기 삶의 방향이 분명하고 흔들리지 않는 단단함',
    tips:
      '비혼을 선택하는 이유와 지키고 싶은 가치를 한 문장으로 정리해 두기\n연인이 있다면 온도 차이를 비난 없이 솔직하게 먼저 나누기\n결혼이 아닌 방식의 헌신(동반자·파트너십)을 어떻게 그리는지 생각해 보기',
    oneLiner: '분명한 방향은 큰 힘입니다. 상대와 온도를 일찍 나누면 서로가 편해집니다',
    shareLine:
      '내 결혼 생각 온도: 영하 🧊 ({score}점/40) 비혼 확신이래ㅋㅋ 너는 몇 도야? 연인이랑 비교해보자',
  },
  {
    type: 'Type2',
    emoji: '🌬️',
    min: 17,
    max: 22,
    tempC: 10,
    title: '서늘한 관망',
    gaugeLabel: '서늘',
    levelLine: '결혼 온도: 서늘함 — 지켜보며 판단하는 단계',
    shortDescription: '당신의 결혼 온도는 서늘함, 서두르지 않고 지켜보는 중입니다.',
    description:
      '결혼에 대한 걱정과 부담이 기대보다 조금 큰 상태입니다. 닫힌 것이 아니라 확신할 근거를 찾는 중일 수 있습니다.',
    scoreRange: '17~22점',
    keywords: '관망·부담·자유·판단 보류',
    strengths: '신중하게 선택하며 충동적으로 결정하지 않는 현실감',
    tips:
      '걱정되는 점(자유·비용·책임)을 적고 해결 가능한 것과 불가능한 것으로 나누기\n연인과 결혼에 대한 생각을 압박 없이 가볍게 나눠 보기\n서두르지 않아도 되는 기한을 스스로 정해 마음의 부담 줄이기',
    oneLiner: '서늘함은 신중함의 온도입니다. 걱정을 정리하면 방향이 보입니다',
    shareLine:
      '내 결혼 생각 온도: 서늘한 관망 🌬️ ({score}점/40) 지켜보는 중이래... 너는 몇 도야? 우리 온도 비교해봐',
  },
  {
    type: 'Type3',
    emoji: '🌤️',
    min: 23,
    max: 28,
    tempC: 22,
    title: '미지근한 가능성',
    gaugeLabel: '미지근',
    levelLine: '결혼 온도: 미지근함 — 열어 두고 지켜보는 단계',
    shortDescription: '당신의 결혼 온도는 미지근함, 좋은 사람과 시기가 맞으면 충분히 가능성이 있습니다.',
    description:
      '결혼을 닫지도 서두르지도 않으며, 사람과 상황에 따라 온도가 오르내립니다. 가장 유연한 상태입니다.',
    scoreRange: '23~28점',
    keywords: '열린 마음·유연함·사람 중심·타이밍',
    strengths: '상황에 따라 균형 있게 판단하는 유연함',
    tips:
      '내가 결혼에서 꼭 필요한 조건 3가지를 정리해 두기\n연인과 서로의 결혼관을 가볍게 확인하는 대화 시도하기\n온도가 오르내리는 순간의 이유를 기록해 보기',
    oneLiner: '열린 마음은 가장 큰 가능성입니다. 기준을 정리하면 선택이 편해집니다',
    shareLine:
      '내 결혼 생각 온도: 미지근한 가능성 🌤️ ({score}점/40) 열어 두는 타입이래ㅋㅋ 너는 몇 도야? 비교 ㄱㄱ',
  },
  {
    type: 'Type4',
    emoji: '☀️',
    min: 29,
    max: 34,
    tempC: 32,
    title: '따뜻한 기대',
    gaugeLabel: '따뜻',
    levelLine: '결혼 온도: 따뜻함 — 함께하는 미래를 그리는 단계',
    shortDescription: '당신의 결혼 온도는 따뜻함, 함께하는 미래를 자연스럽게 그리고 있습니다.',
    description:
      '결혼에 대한 설렘과 기대가 걱정보다 큽니다. 함께 준비하는 과정도 긍정적으로 받아들입니다.',
    scoreRange: '29~34점',
    keywords: '기대·설렘·함께하는 미래·긍정',
    strengths: '관계를 미래로 이어 가려는 따뜻한 의지',
    tips:
      '결혼관(돈·거주·가족·일)을 연인과 구체적으로 나누기\n기대가 큰 만큼 상대의 속도와 온도를 확인하며 맞춰 가기\n결혼 전 서로의 생활 습관을 알아가는 시간을 충분히 갖기',
    oneLiner: '따뜻한 기대는 좋은 출발입니다. 상대의 온도와 맞춰 가면 더 단단해집니다',
    shareLine:
      '내 결혼 생각 온도: 따뜻한 기대 ☀️ ({score}점/40) 함께하는 미래를 그리는 타입이래! 너는 몇 도야? 연인이랑 비교해봐',
  },
  {
    type: 'Type5',
    emoji: '🔥',
    min: 35,
    max: 40,
    tempC: 42,
    title: '뜨거운 결혼 열망',
    gaugeLabel: '뜨거움',
    levelLine: '결혼 온도: 뜨거움 — 결혼에 대한 마음이 확실한 단계',
    shortDescription: '당신의 결혼 온도는 뜨거움, 함께할 평생을 향한 마음이 분명합니다.',
    description:
      '결혼과 가족을 꾸리는 미래가 행복하게 그려지고 준비 과정도 기대됩니다. 열망이 큰 만큼 상대의 속도와 상황을 존중하는 것이 중요합니다. 열망이 조급함이나 압박으로 전해지지 않도록 하세요.',
    scoreRange: '35~40점',
    keywords: '확실한 열망·가족 꿈·적극성·상대 속도 존중',
    strengths: '관계에 대한 확신과 가족을 꿈꾸는 따뜻한 에너지',
    tips:
      "열망을 압박이 아닌 '내 마음의 공유'로 부드럽게 전하기\n상대의 결혼 온도와 시기 생각을 먼저 묻고 경청하기\n결혼 자체보다 '어떤 일상을 함께 살고 싶은지'를 구체적으로 이야기하기",
    oneLiner: '뜨거운 마음은 아름답습니다. 상대의 온도를 존중하며 함께 맞추면 더 오래갑니다',
    shareLine:
      '내 결혼 생각 온도: 뜨거운 결혼 열망 🔥 ({score}점/40) 결혼 마음이 확실하대ㅋㅋ 너는 몇 도야? 우리 온도 비교해보자',
  },
];

export const phase3MarriageTemperatureQuestions: Phase3MarriageTemperatureQuestion[] = RAW_QUESTIONS.map(
  (item, index) => ({
    id: index + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].questions[index].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].questions[index].opts[oi]),
      score,
    })),
  }),
);

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
] as const satisfies readonly (keyof Phase3MarriageTemperatureResultText)[];

export const phase3MarriageTemperatureResults: Phase3MarriageTemperatureResult[] = RAW_RESULTS.map((r, ri) => {
  const base: Phase3MarriageTemperatureResult = {
    type: r.type,
    emoji: r.emoji,
    min: r.min,
    max: r.max,
    tempC: r.tempC,
    title: L(r.title),
    gaugeLabel: L(r.gaugeLabel),
    levelLine: L(r.levelLine),
    shortDescription: L(r.shortDescription),
    description: L(r.description),
    scoreRange: L(r.scoreRange),
    keywords: L(r.keywords),
    strengths: L(r.strengths),
    tips: L(r.tips),
    oneLiner: L(r.oneLiner),
    shareLine: L(r.shareLine),
  };
  for (const key of RESULT_TEXT_KEYS) {
    base[key] = withForeign(r[key], (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].results[ri][key]);
  }
  return base;
});

export function calculatePhase3MarriageTemperatureTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3MarriageTemperatureResult(total: number): Phase3MarriageTemperatureResult {
  return (
    phase3MarriageTemperatureResults.find((r) => total >= r.min && total <= r.max) ??
    phase3MarriageTemperatureResults[0]
  );
}

/** 평균이 가장 낮은 영역 → 내 마음이 서늘해지는 지점. 전 영역 동점이면 빈 배열 */
export function getPhase3MarriageTemperatureWeakAreas(
  answers: number[],
): Phase3MarriageTemperatureAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_MARRIAGE_TEMPERATURE_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_MARRIAGE_TEMPERATURE_AREAS.filter((_, index) => avgs[index] === minAvg).map(
    (area) => area.id,
  );
  if (weak.length === PHASE3_MARRIAGE_TEMPERATURE_AREAS.length) return [];
  return weak;
}

export type Phase3MarriageTemperatureCoupleDiff = {
  comment: Phase3MarriageTemperatureText;
  prompt: Phase3MarriageTemperatureText;
};

/** 나와 연인 점수 차이(|diff|)에 따른 한 줄 코멘트·대화 시작 문장 */
export function getPhase3MarriageTemperatureCoupleDiff(diffAbs: number): Phase3MarriageTemperatureCoupleDiff {
  const band = diffAbs <= 3 ? 0 : diffAbs <= 8 ? 1 : diffAbs <= 15 ? 2 : 3;
  const koBands: { comment: string; prompt: string }[] = [
    {
      comment: '온도가 거의 비슷해요. 서로의 결혼관을 편하게 맞춰 가기 좋은 상태입니다.',
      prompt: '"우리 결혼에 대해 지금 느끼는 온도가 비슷한 것 같아. 각자 중요하게 생각하는 조건이 뭐야?"',
    },
    {
      comment: '온도 차이가 조금 있어요. 서두르기보다 서로의 속도와 이유를 먼저 들어 보세요.',
      prompt: '"나랑 너랑 결혼 생각 온도가 조금 다른 것 같아. 너는 어떤 부분이 가장 고민이야?"',
    },
    {
      comment: '온도 차이가 꽤 나요. 비난 없이 차이 자체를 인정하는 대화가 필요합니다.',
      prompt: '"우리 온도 차이가 꽤 나는 것 같아. 상대를 바꾸려 하기보다, 서로가 원하는 속도를 먼저 말해볼래?"',
    },
    {
      comment: '온도 차이가 커요. 압박보다 솔직한 확인이 관계를 지키는 길입니다.',
      prompt: '"우리 결혼관이 꽤 다른 편인 것 같아. 각자의 기준과 지킬 선을 차분히 나눠볼까?"',
    },
  ];
  const ko = koBands[band];
  return {
    comment: withForeign(ko.comment, (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].coupleDiff[band].comment),
    prompt: withForeign(ko.prompt, (loc) => PHASE3_MARRIAGE_TEMPERATURE_I18N[loc].coupleDiff[band].prompt),
  };
}
