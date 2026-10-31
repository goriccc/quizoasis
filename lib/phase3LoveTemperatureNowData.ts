/**
 * 내 연애의 온도, 지금 몇 도일까?
 * slug: phase3-love-temperature-now
 * 10문항 4지선다 · 1~4점 합산(10~40) · 5구간 · 동점 없음
 */

import {
  PHASE3_LOVE_TEMPERATURE_NOW_I18N,
  type Phase3LoveTemperatureNowForeignLocale,
  type Phase3LoveTemperatureNowResultText,
} from './phase3LoveTemperatureNowI18n';

export type Phase3LoveTemperatureNowLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveTemperatureNowText = Record<Phase3LoveTemperatureNowLocaleKey, string>;

function L(ko: string): Phase3LoveTemperatureNowText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_TEMPERATURE_NOW_I18N) as Phase3LoveTemperatureNowForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveTemperatureNowForeignLocale) => string,
): Phase3LoveTemperatureNowText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export const PHASE3_LOVE_TEMPERATURE_NOW_AREAS = [
  { id: 'contact', questionIds: [1] },
  { id: 'conversation', questionIds: [2] },
  { id: 'affection', questionIds: [3] },
  { id: 'conflict', questionIds: [4] },
  { id: 'future', questionIds: [5] },
  { id: 'gratitude', questionIds: [6] },
  { id: 'curiosity', questionIds: [7] },
  { id: 'novelty', questionIds: [8] },
  { id: 'anticipation', questionIds: [9] },
  { id: 'overall', questionIds: [10] },
] as const;

export type Phase3LoveTemperatureNowAreaId = (typeof PHASE3_LOVE_TEMPERATURE_NOW_AREAS)[number]['id'];

export const PHASE3_LOVE_TEMPERATURE_NOW_AREA_LABELS: Record<
  Phase3LoveTemperatureNowAreaId,
  Phase3LoveTemperatureNowText
> = {
  contact: withForeign('연락', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.contact),
  conversation: withForeign('대화', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.conversation),
  affection: withForeign('애정 표현', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.affection),
  conflict: withForeign('갈등 회복', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.conflict),
  future: withForeign('미래 계획', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.future),
  gratitude: withForeign('고마움 표현', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.gratitude),
  curiosity: withForeign('일상 관심', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.curiosity),
  novelty: withForeign('새로움', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.novelty),
  anticipation: withForeign('만남 설렘', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.anticipation),
  overall: withForeign('전반 온기', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].areas.overall),
};

export interface Phase3LoveTemperatureNowQuestion {
  id: number;
  area: Phase3LoveTemperatureNowAreaId;
  question: Phase3LoveTemperatureNowText;
  options: { text: Phase3LoveTemperatureNowText; score: number }[];
}

export interface Phase3LoveTemperatureNowResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  /** 게이지·표시용 온도 (°C 비유) */
  tempC: number;
  title: Phase3LoveTemperatureNowText;
  gaugeLabel: Phase3LoveTemperatureNowText;
  levelLine: Phase3LoveTemperatureNowText;
  shortDescription: Phase3LoveTemperatureNowText;
  description: Phase3LoveTemperatureNowText;
  scoreRange: Phase3LoveTemperatureNowText;
  keywords: Phase3LoveTemperatureNowText;
  strengths: Phase3LoveTemperatureNowText;
  tips: Phase3LoveTemperatureNowText;
  counseling: Phase3LoveTemperatureNowText;
  oneLiner: Phase3LoveTemperatureNowText;
  /** {score} 치환 */
  shareLine: Phase3LoveTemperatureNowText;
}

export const PHASE3_LOVE_TEMPERATURE_NOW_META = {
  title: withForeign('내 연애의 온도, 지금 몇 도일까?', (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].meta.title),
  description: withForeign(
    '지금 내 연애는 뜨겁게 끓는 중일까, 식어 가는 중일까? 10가지 상황에서 반응을 합산해 지금 연애의 온도를 알려드립니다.',
    (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애온도', '열애', '연애테스트'],
    en: PHASE3_LOVE_TEMPERATURE_NOW_I18N.en.meta.tags,
    ja: PHASE3_LOVE_TEMPERATURE_NOW_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_TEMPERATURE_NOW_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_TEMPERATURE_NOW_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_TEMPERATURE_NOW_I18N.vi.meta.tags,
    id: PHASE3_LOVE_TEMPERATURE_NOW_I18N.id.meta.tags,
  },
};

export const PHASE3_LOVE_TEMPERATURE_NOW_MIN = 10;
export const PHASE3_LOVE_TEMPERATURE_NOW_MAX = 40;

const RAW_QUESTIONS: {
  q: string;
  area: Phase3LoveTemperatureNowAreaId;
  opts: [string, number][];
}[] = [
  {
    q: '연인에게서 연락이 왔다. 요즘 나는?',
    area: 'contact',
    opts: [
      ['반가워서 바로 답하고 대화를 이어 간다', 4],
      ['답은 하지만 여유가 있을 때 천천히 한다', 3],
      ['확인하고도 한참 뒤에 짧게 답을 보낸다', 2],
      ['알림이 와도 답하기가 귀찮고 미루게 된다', 1],
    ],
  },
  {
    q: '연인과 함께 있는 시간에 나는?',
    area: 'conversation',
    opts: [
      ['같은 공간에 있어도 각자 폰만 보며 시간을 보낸다', 1],
      ['눈을 맞추고 웃으며 대화가 자연스럽게 이어진다', 4],
      ['즐거운 순간이 있지만 대화가 가끔 끊긴다', 3],
      ['대화는 하지만 형식적이고 새로운 이야기가 적다', 2],
    ],
  },
  {
    q: '연인과 스킨십이나 애정 표현은 어떤가? 나는?',
    area: 'affection',
    opts: [
      ['예전보다 줄었지만 가끔 의식적으로 표현한다', 2],
      ['거의 없고 오히려 부담스럽게 느껴진다', 1],
      ['손잡기와 안기 같은 표현이 자연스럽게 이어진다', 4],
      ['기념일이나 특별한 날에는 꼭 표현한다', 3],
    ],
  },
  {
    q: '연인과 다투었을 때 나는?',
    area: 'conflict',
    opts: [
      ['시간이 지나면 서로 풀려고 노력하는 편이다', 3],
      ['어색한 분위기가 며칠씩 이어지곤 한다', 2],
      ['다툼을 피하려고 말을 아예 하지 않게 되었다', 1],
      ['그날 안에 이야기하고 화해하는 편이다', 4],
    ],
  },
  {
    q: '연인과 앞으로의 계획(여행·미래)을 이야기할 때 나는?',
    area: 'future',
    opts: [
      ['함께 가고 싶은 곳과 하고 싶은 일이 술술 나온다', 4],
      ['가까운 계획은 이야기하지만 먼 미래는 조금 조심스럽다', 3],
      ['계획을 세워도 신이 나지 않고 흐지부지된다', 2],
      ['미래 이야기를 꺼내는 것 자체가 부담스럽다', 1],
    ],
  },
  {
    q: '연인에게 고마움이나 호감을 표현하는 빈도는? 나는?',
    area: 'gratitude',
    opts: [
      ['언제 마지막으로 표현했는지 기억이 나지 않는다', 1],
      ['사소한 일에도 "고마워", "좋아"를 자주 말한다', 4],
      ['생각날 때마다 말로 표현하는 편이다', 3],
      ['기념일이나 특별한 날에만 표현한다', 2],
    ],
  },
  {
    q: '연인의 일상이 궁금한 정도는? 나는?',
    area: 'curiosity',
    opts: [
      ['가끔 궁금하지만 먼저 묻지는 않는다', 2],
      ['별로 궁금하지 않고 알려 줘도 흘려듣는다', 1],
      ['오늘 하루가 어땠는지 먼저 묻고 싶어진다', 4],
      ['큰일이 있을 때는 챙겨서 물어본다', 3],
    ],
  },
  {
    q: '연인과 함께하는 새로운 경험(데이트·활동)은? 나는?',
    area: 'novelty',
    opts: [
      ['가끔 새로운 장소나 활동을 시도해 본다', 3],
      ['늘 비슷한 코스로 만나서 큰 변화가 없다', 2],
      ['만나는 것 자체가 의무처럼 느껴질 때가 있다', 1],
      ['함께 하고 싶은 새로운 일을 자주 제안한다', 4],
    ],
  },
  {
    q: '요즘 연인을 만나기 전의 마음은? 나는?',
    area: 'anticipation',
    opts: [
      ['설레고 기다려져서 준비하는 시간도 즐겁다', 4],
      ['편안하고 무난하게 만날 준비를 한다', 3],
      ['가야 하니까 가는 느낌으로 준비한다', 2],
      ['만나기 전부터 피곤하고 약속을 취소하고 싶다', 1],
    ],
  },
  {
    q: '지금 내 연애에 가장 가까운 문장은? 나는?',
    area: 'overall',
    opts: [
      ['"서로 마음이 많이 식어서 차갑게 느껴져"', 1],
      ['"함께 있으면 따뜻하고 더 가까워지는 중이야"', 4],
      ['"편안하고 안정적인데 가끔 설렘이 그리워"', 3],
      ['"나쁘진 않지만 예전만큼 뜨겁지는 않아"', 2],
    ],
  },
];

export const phase3LoveTemperatureNowQuestions: Phase3LoveTemperatureNowQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].questions[idx].opts[oi]),
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
  'counseling',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3LoveTemperatureNowResultText)[];

const KO_RESULTS: Phase3LoveTemperatureNowResult[] = [
  {
    type: 'Type1',
    emoji: '🧊',
    min: 10,
    max: 16,
    tempC: -5,
    title: L('영하 냉전'),
    gaugeLabel: L('영하'),
    levelLine: L('연애 온도: 영하 — 서로의 온기가 멀어진 단계'),
    shortDescription: L('지금 당신의 연애 온도는 영하입니다. 연락과 대화, 애정 표현이 크게 줄어든 상태입니다.'),
    description: L(
      '함께 있어도 각자의 시간을 보내거나 말을 아끼는 일이 많아졌을 수 있습니다. 사랑이 없다는 뜻이 아니라 지치거나 서운함이 쌓여 마음의 문이 닫혀 있다는 신호일 수 있습니다. 지금은 관계를 어떻게 하고 싶은지부터 솔직하게 살펴볼 시간입니다.',
    ),
    scoreRange: L('10~16점'),
    keywords: L('대화 단절·온기 부족·쌓인 서운함·마음의 문 닫힘'),
    strengths: L('관계의 문제를 솔직하게 느끼고 있다는 자기 인식'),
    tips: L(
      '"요즘 우리 사이가 멀어진 것 같아서 이야기하고 싶어"라고 비난 없이 먼저 말 꺼내기\n거창한 이벤트 대신 하루 한 번 안부 한 줄부터 시작하기\n이 관계에서 내가 바라는 것과 지치는 이유를 각각 한 문장으로 적어 보기',
    ),
    counseling: L(
      '관계에서의 단절과 무기력이 오래 이어져 일상에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 부부·커플 상담 기관과 이야기해 보세요',
    ),
    oneLiner: L('영하는 끝이 아니라 데울 곳을 알려 주는 신호입니다. 대화 한 줄이 첫 불씨입니다'),
    shareLine: L(
      '내 연애 온도: 영하 냉전 🧊 ({score}점/40) 데울 곳을 알려 주는 신호래ㅠ 나 영하 냉전 나옴ㅋㅋ 너는 몇 도야? 점수 인증해줘',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌬️',
    min: 17,
    max: 22,
    tempC: 10,
    title: L('서늘'),
    gaugeLabel: L('서늘'),
    levelLine: L('연애 온도: 서늘함 — 일상 속에 온기가 줄어드는 단계'),
    shortDescription: L('지금 당신의 연애 온도는 서늘합니다. 관계는 이어지지만 설렘과 대화가 줄어들고 있습니다.'),
    description: L(
      '형식적인 대화, 비슷한 코스, 드문 애정 표현이 쌓이며 열기가 식고 있습니다. 아직은 작은 노력으로 충분히 데울 수 있는 단계입니다.',
    ),
    scoreRange: L('17~22점'),
    keywords: L('형식적 대화·반복·표현 감소·식어 가는 열기'),
    strengths: L('관계를 이어 가려는 책임감과 안정감'),
    tips: L(
      "일주일에 한 번 '처음 해보는 것' 데이트를 정해 새로움 더하기\n고마운 점을 하루 한 가지 말로 표현하기\n서운함은 쌓기 전에 그날 안에 한 문장으로 말하기",
    ),
    counseling: L(
      '서늘함이 오래 이어져 관계와 일상이 힘들다면 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('서늘함은 노력이 가장 잘 먹히는 구간입니다. 작은 새로움이 온도를 올립니다'),
    shareLine: L(
      '내 연애 온도: 서늘 🌬️ ({score}점/40) 작은 노력으로 데울 수 있대... 너는 몇 도야? 점수 인증 ㄱㄱ',
    ),
  },
  {
    type: 'Type3',
    emoji: '🌤️',
    min: 23,
    max: 28,
    tempC: 22,
    title: L('미온'),
    gaugeLabel: L('미온'),
    levelLine: L('연애 온도: 미지근함 — 편안하지만 설렘이 그리운 단계'),
    shortDescription: L('지금 당신의 연애 온도는 미지근합니다. 안정적이지만 처음의 열기는 아니에요.'),
    description: L(
      '편안함이 커지고 설렘이 줄어든 오래된 연애에서 흔한 온도입니다. 나쁜 상태가 아니라 안정과 설렘 사이의 균형을 찾는 단계입니다.',
    ),
    scoreRange: L('23~28점'),
    keywords: L('편안함·안정·그리운 설렘·균형 찾기'),
    strengths: L('편안하게 서로를 받아들이는 안정감'),
    tips: L(
      "기념일 외에 '아무 날도 아닌 날' 작은 선물이나 편지 하나 건네기\n3개월마다 함께 하고 싶은 일을 한 가지 정해 실행하기\n설렘이 그리운 점을 연인에게 솔직히 말하고 같이 방법 찾기",
    ),
    counseling: L(''),
    oneLiner: L('미지근함은 안정의 다른 이름입니다. 작은 변화 하나로 다시 따뜻해집니다'),
    shareLine: L(
      '내 연애 온도: 미온 🌤️ ({score}점/40) 안정적인데 설렘이 그리운 단계래ㅋㅋ 너는 몇 도야? 비교해보자',
    ),
  },
  {
    type: 'Type4',
    emoji: '☀️',
    min: 29,
    max: 34,
    tempC: 32,
    title: L('따뜻'),
    gaugeLabel: L('따뜻'),
    levelLine: L('연애 온도: 따뜻함 — 온기가 잘 오가는 단계'),
    shortDescription: L('지금 당신의 연애 온도는 따뜻합니다. 대화와 애정이 자연스럽게 오가고 있습니다.'),
    description: L(
      '갈등도 풀어 가며 일상의 즐거움을 함께 나누는 건강한 온도입니다. 지금의 습관을 유지하면 오래 따뜻할 수 있습니다.',
    ),
    scoreRange: L('29~34점'),
    keywords: L('대화·애정 표현·갈등 회복·일상의 즐거움'),
    strengths: L('감정을 나누고 갈등을 대화로 푸는 안정적인 관계 습관'),
    tips: L(
      '지금의 대화와 표현 습관을 의식적으로 유지하기\n새로운 경험을 가끔 더해 신선함 지키기\n바쁜 시기에도 안부 한 줄은 놓치지 않기',
    ),
    counseling: L(''),
    oneLiner: L('따뜻한 연애는 작은 습관이 만듭니다. 지금처럼 이어 가세요'),
    shareLine: L(
      '내 연애 온도: 따뜻 ☀️ ({score}점/40) 온기가 잘 오가는 연애래! 너는 몇 도야? 점수 인증해봐',
    ),
  },
  {
    type: 'Type5',
    emoji: '🔥',
    min: 35,
    max: 40,
    tempC: 42,
    title: L('펄펄 끓는 열애'),
    gaugeLabel: L('열애'),
    levelLine: L('연애 온도: 뜨거움 — 설렘과 애정이 가득한 단계'),
    shortDescription: L('지금 당신의 연애 온도는 펄펄 끓습니다. 설렘과 애정이 가득한 열애 중입니다.'),
    description: L(
      '연락도 만남도 기다려지고 미래를 함께 그리는 것이 즐겁습니다. 뜨거운 만큼 두 사람의 에너지 균형과 각자의 시간을 챙기면 더 오래 갑니다.',
    ),
    scoreRange: L('35~40점'),
    keywords: L('설렘·애정·함께하는 미래·열정'),
    strengths: L('애정을 자연스럽게 표현하고 관계에 활기를 불어넣는 에너지'),
    tips: L(
      '뜨거울 때일수록 각자의 시간과 충전 루틴 지키기\n상대의 속도와 에너지를 살피며 속도 맞추기\n이 연애 노하우를 친구들과 나누기. 당신의 방식이 누군가의 힌트가 됩니다',
    ),
    counseling: L(''),
    oneLiner: L('끓는 사랑은 속도 조절과 함께할 때 오래갑니다'),
    shareLine: L(
      '내 연애 온도: 펄펄 끓는 열애 🔥 ({score}점/40) 설렘이 가득하대ㅋㅋ 너는 몇 도야? 인증해봐',
    ),
  },
];

export const phase3LoveTemperatureNowResults: Phase3LoveTemperatureNowResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveTemperatureNowResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_TEMPERATURE_NOW_I18N[loc].results[ri][key]);
  }
  return merged;
});

export function calculatePhase3LoveTemperatureNowTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3LoveTemperatureNowResult(total: number): Phase3LoveTemperatureNowResult {
  return (
    phase3LoveTemperatureNowResults.find((r) => total >= r.min && total <= r.max) ??
    phase3LoveTemperatureNowResults[0]
  );
}

/** 평균이 가장 낮은 영역. 동점이면 정의 순서대로 모두. 모든 영역이 같으면 빈 배열 */
export function getPhase3LoveTemperatureNowWeakAreas(
  answers: number[],
): Phase3LoveTemperatureNowAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_LOVE_TEMPERATURE_NOW_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_LOVE_TEMPERATURE_NOW_AREAS.filter((_, index) => avgs[index] === minAvg).map(
    (area) => area.id,
  );
  if (weak.length === PHASE3_LOVE_TEMPERATURE_NOW_AREAS.length) return [];
  return weak;
}
