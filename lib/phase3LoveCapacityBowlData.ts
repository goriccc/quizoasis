/**
 * 나의 사랑 용량 — 마음의 크기 측정
 * slug: phase3-love-capacity-bowl
 * 12문항 4지선다 · 1~4점 합산(12~48) · 5구간 · 동점 없음
 */

import {
  PHASE3_LOVE_CAPACITY_BOWL_I18N,
  type Phase3LoveCapacityBowlForeignLocale,
  type Phase3LoveCapacityBowlResultText,
} from './phase3LoveCapacityBowlI18n';

export type Phase3LoveCapacityBowlLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveCapacityBowlText = Record<Phase3LoveCapacityBowlLocaleKey, string>;

function L(ko: string): Phase3LoveCapacityBowlText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_CAPACITY_BOWL_I18N) as Phase3LoveCapacityBowlForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3LoveCapacityBowlForeignLocale) => string): Phase3LoveCapacityBowlText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export const PHASE3_LOVE_CAPACITY_BOWL_AREAS = [
  { id: 'delay', questionIds: [1] },
  { id: 'criticism', questionIds: [2] },
  { id: 'contactDrop', questionIds: [3] },
  { id: 'hobby', questionIds: [4] },
  { id: 'brokenItem', questionIds: [5] },
  { id: 'friendsFirst', questionIds: [6] },
  { id: 'repeatedMistake', questionIds: [7] },
  { id: 'irritation', questionIds: [8] },
  { id: 'opinionClash', questionIds: [9] },
  { id: 'bigApology', questionIds: [10] },
  { id: 'vulnerability', questionIds: [11] },
  { id: 'loveView', questionIds: [12] },
] as const;

export type Phase3LoveCapacityBowlAreaId = (typeof PHASE3_LOVE_CAPACITY_BOWL_AREAS)[number]['id'];

export const PHASE3_LOVE_CAPACITY_BOWL_AREA_LABELS: Record<Phase3LoveCapacityBowlAreaId, Phase3LoveCapacityBowlText> = {
  delay: withForeign('지연', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.delay),
  criticism: withForeign('지적', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.criticism),
  contactDrop: withForeign('연락 감소', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.contactDrop),
  hobby: withForeign('취미 차이', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.hobby),
  brokenItem: withForeign('실수로 물건 망가뜨림', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.brokenItem),
  friendsFirst: withForeign('친구 우선', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.friendsFirst),
  repeatedMistake: withForeign('반복된 실수', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.repeatedMistake),
  irritation: withForeign('짜증', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.irritation),
  opinionClash: withForeign('의견 충돌', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.opinionClash),
  bigApology: withForeign('큰 실수 사과', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.bigApology),
  vulnerability: withForeign('약한 모습', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.vulnerability),
  loveView: withForeign('사랑관', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].areas.loveView),
};

export interface Phase3LoveCapacityBowlQuestion {
  id: number;
  area: Phase3LoveCapacityBowlAreaId;
  question: Phase3LoveCapacityBowlText;
  options: { text: Phase3LoveCapacityBowlText; score: number }[];
}

export interface Phase3LoveCapacityBowlResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  title: Phase3LoveCapacityBowlText;
  gaugeLabel: Phase3LoveCapacityBowlText;
  levelLine: Phase3LoveCapacityBowlText;
  shortDescription: Phase3LoveCapacityBowlText;
  description: Phase3LoveCapacityBowlText;
  scoreRange: Phase3LoveCapacityBowlText;
  keywords: Phase3LoveCapacityBowlText;
  strengths: Phase3LoveCapacityBowlText;
  tips: Phase3LoveCapacityBowlText;
  counseling: Phase3LoveCapacityBowlText;
  oneLiner: Phase3LoveCapacityBowlText;
  /** {score} {percent} 치환 */
  shareLine: Phase3LoveCapacityBowlText;
}

/**
 * 점수 12~48의 예상 상위 %. 문항 점수가 1~4에 고르게 퍼진다고 볼 때의 '이 점수 이상' 비율을 반올림.
 * 0%로 떨어지면 1%로 둔다. 응답이 쌓이면 실제 분포로 교체.
 */
export const PHASE3_LOVE_CAPACITY_BOWL_TOP_PERCENT = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 99, 97, 95, 92, 88, 82, 74, 65, 55, 45, 35, 26, 18, 12, 8, 5, 3, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
] as const;

export const PHASE3_LOVE_CAPACITY_BOWL_META = {
  title: withForeign('나의 사랑 용량 — 마음의 크기 측정', (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].meta.title),
  description: withForeign(
    '내 마음은 종지 그릇일까, 바다일까? 12가지 연애 상황으로 사랑 그릇의 크기와 상위 몇 %인지 알려드립니다.',
    (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애성향', '연애테스트'],
    en: PHASE3_LOVE_CAPACITY_BOWL_I18N.en.meta.tags,
    ja: PHASE3_LOVE_CAPACITY_BOWL_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_CAPACITY_BOWL_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_CAPACITY_BOWL_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_CAPACITY_BOWL_I18N.vi.meta.tags,
    id: PHASE3_LOVE_CAPACITY_BOWL_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; area: Phase3LoveCapacityBowlAreaId; opts: [string, number][] }[] = [
  {
    q: '연인이 약속에 30분 늦었다. 나는?',
    area: 'delay',
    opts: [
      ['무슨 일이 있었는지 먼저 걱정하며 맞아 준다', 4],
      ['서운하지만 이유를 듣고 웃어 넘긴다', 3],
      ['괜찮다고 하지만 표정이 굳어 풀리지 않는다', 2],
      ['기다린 시간만큼 서운함을 따져 묻는다', 1],
    ],
  },
  {
    q: '연인이 내 부족한 점을 지적했다. 나는?',
    area: 'criticism',
    opts: [
      ['상처받아서 한동안 말을 하고 싶지 않다', 1],
      ['아픈 말이지만 고칠 점이 있는지 차분히 생각한다', 4],
      ['속상하지만 이유를 물어보고 이야기를 나눈다', 3],
      ['나도 상대의 단점을 떠올리며 맞받고 싶다', 2],
    ],
  },
  {
    q: '연인이 힘든 시기라 연락이 줄었다. 나는?',
    area: 'contactDrop',
    opts: [
      ['이해하려 하지만 서운함이 조금씩 쌓인다', 2],
      ['나에 대한 마음이 줄었다고 느껴 불안해진다', 1],
      ['필요한 만큼 기다리며 짧은 응원을 보낸다', 4],
      ['부담 주지 않게 안부만 가볍게 전한다', 3],
    ],
  },
  {
    q: '연인이 내 취향과 다른 취미를 시작했다. 나는?',
    area: 'hobby',
    opts: [
      ['이해하려 노력하며 가끔 함께해 본다', 3],
      ['관심은 없지만 말리지는 않는다', 2],
      ['나와 시간이 줄어들까 봐 은근히 불만이다', 1],
      ['즐거워하는 모습이 좋아서 기꺼이 응원한다', 4],
    ],
  },
  {
    q: '연인이 실수로 내 물건을 망가뜨렸다. 나는?',
    area: 'brokenItem',
    opts: [
      ['다친 곳은 없는지 먼저 묻고 괜찮다고 말한다', 4],
      ['아쉽지만 일부러가 아니니 이해한다', 3],
      ['겉으로는 괜찮다 하지만 속으로 오래 곱씹는다', 2],
      ['조심하지 않았다며 한참 책임을 묻는다', 1],
    ],
  },
  {
    q: '연인이 나보다 친구와의 약속을 먼저 잡았다. 나는?',
    area: 'friendsFirst',
    opts: [
      ['우선순위가 아닌 것 같아 마음이 크게 상한다', 1],
      ['친구 관계도 소중하니 즐겁게 다녀오라고 한다', 4],
      ['서운하지만 다음 약속을 먼저 잡자고 말한다', 3],
      ['티는 안 내지만 한동안 연락을 줄인다', 2],
    ],
  },
  {
    q: '연인이 같은 실수를 또 반복했다. 나는?',
    area: 'repeatedMistake',
    opts: [
      ['또 그러냐며 지난 일까지 떠올라 지친다', 2],
      ['달라질 마음이 없는 것 같아 실망이 크다', 1],
      ['왜 반복되는지 함께 방법을 찾아보자고 말한다', 4],
      ['힘들지만 한 번 더 이야기해 보기로 한다', 3],
    ],
  },
  {
    q: '연인이 기분이 안 좋아 나에게 짜증을 냈다. 나는?',
    area: 'irritation',
    opts: [
      ['서운하지만 기분이 풀릴 때까지 시간을 준다', 3],
      ['나도 감정이 올라와 말수가 줄어든다', 2],
      ['나에게 화풀이한다고 느껴 똑같이 쏘아붙인다', 1],
      ['무슨 일 있었는지 다정하게 물으며 곁을 지킨다', 4],
    ],
  },
  {
    q: '연인이 나와 다른 의견을 강하게 주장했다. 나는?',
    area: 'opinionClash',
    opts: [
      ['이유를 끝까지 듣고 서로 맞는 지점을 찾는다', 4],
      ['내 의견도 말하되 상대 생각을 존중한다', 3],
      ['분위기를 위해 내 의견은 접고 따른다', 2],
      ['내 생각이 맞다고 설득하려 끝까지 이어 간다', 1],
    ],
  },
  {
    q: '연인이 큰 실수로 나에게 사과했다. 나는?',
    area: 'bigApology',
    opts: [
      ['쉽게 용서하기 어렵고 오랫동안 마음에 남는다', 1],
      ['사과를 받아들이고 앞으로를 함께 이야기한다', 4],
      ['시간이 필요하지만 차츰 마음을 풀어 간다', 3],
      ['용서하지만 같은 일이 생기면 그땐 다를 거라 말한다', 2],
    ],
  },
  {
    q: '연인이 나의 가장 약한 모습을 보게 됐다. 나는?',
    area: 'vulnerability',
    opts: [
      ['부끄러워서 한동안 거리를 두고 싶어진다', 2],
      ['약점이 알려져 불안하고 마음이 닫힌다', 1],
      ['있는 그대로 보여 줄 수 있어서 오히려 편안하다', 4],
      ['당황스럽지만 이 사람에게는 괜찮다고 느낀다', 3],
    ],
  },
  {
    q: '사랑에 대한 지금의 마음을 한 문장으로 말한다면?',
    area: 'loveView',
    opts: [
      ['"서로 주고받으며 천천히 채워 가는 거야"', 3],
      ['"받은 만큼 주는 게 마음이 편해"', 2],
      ['"내 마음을 지키는 게 먼저야"', 1],
      ['"상대가 어떤 모습이어도 품고 싶어"', 4],
    ],
  },
];

export const phase3LoveCapacityBowlQuestions: Phase3LoveCapacityBowlQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3LoveCapacityBowlResultText)[];

const KO_RESULTS: Phase3LoveCapacityBowlResult[] = [
  {
    type: 'Type1',
    emoji: '🥄',
    min: 12,
    max: 19,
    title: L('종지 그릇'),
    gaugeLabel: L('종지'),
    levelLine: L('사랑 용량: 작지만 정성스럽게 채우는 단계'),
    shortDescription: L(
      '당신의 사랑 그릇은 작고 소중한 종지입니다. 가득 찬 마음은 진하고 정성스럽습니다.',
    ),
    description: L(
      '지금은 마음의 여유가 적어 상대의 실수와 변화를 품기 버거울 수 있습니다. 용량이 작은 것은 사랑이 작아서가 아니라 지금 내 마음이 지쳤거나 상처를 지키는 중이라는 신호일 수 있습니다.',
    ),
    scoreRange: L('점수대: 12~19점'),
    keywords: L('정성·섬세함·여유 부족·상처 보호'),
    strengths: L('한 사람에게 깊고 진하게 마음을 쓰는 섬세함'),
    tips: L(
      '서운할 때 쌓아 두지 말고 "나 지금 여유가 없어"라고 먼저 알리기\n하루 한 번 나를 채우는 시간(휴식·취미)을 만들어 그릇의 바닥 채우기\n상대의 실수 앞에서 \'의도가 있었는지\'를 먼저 확인하기',
    ),
    counseling: L(
      '마음의 여유가 오래 바닥나고 일상과 관계 전반이 힘들다면 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('작은 그릇은 쉽게 가득 차는 만큼 정성스럽습니다. 먼저 나를 채우면 그릇이 커집니다'),
    shareLine: L(
      '나의 사랑 용량: 종지 그릇 🥄 ({score}점/48, 상위 {percent}%) 작지만 정성스러운 그릇이래ㅋㅋ 너는 어떤 그릇이야? 캡처 공유해줘',
    ),
  },
  {
    type: 'Type2',
    emoji: '🍚',
    min: 20,
    max: 27,
    title: L('밥그릇'),
    gaugeLabel: L('밥그릇'),
    levelLine: L('사랑 용량: 일상을 든든하게 채우는 단계'),
    shortDescription: L('당신의 사랑 그릇은 매일을 채우는 든든한 밥그릇입니다.'),
    description: L(
      '대체로 상대를 이해하려 노력하지만 서운함이 쌓이면 마음이 좁아질 때가 있습니다. 이해와 서운함 사이를 오가는 현실적인 사랑입니다.',
    ),
    scoreRange: L('점수대: 20~27점'),
    keywords: L('현실적·이해와 서운함·균형 노력·든든함'),
    strengths: L('일상 속에서 꾸준히 챙기며 관계를 안정적으로 이어 가는 힘'),
    tips: L(
      "서운함이 쌓이기 전에 그날 안에 한 문장으로 말하기\n상대의 실수를 '사람 전체'가 아닌 '그 순간의 행동'으로 분리해 보기\n이해하는 만큼 나도 이해받고 있는지 주고받음 점검하기",
    ),
    counseling: L(''),
    oneLiner: L('든든한 그릇입니다. 서운함을 말로 비워 내면 그릇이 한결 넉넉해집니다'),
    shareLine: L(
      '나의 사랑 용량: 밥그릇 🍚 ({score}점/48, 상위 {percent}%) 일상을 든든하게 채우는 타입이래... 너는 어떤 그릇이야? 캡처 ㄱㄱ',
    ),
  },
  {
    type: 'Type3',
    emoji: '🍲',
    min: 28,
    max: 34,
    title: L('냄비'),
    gaugeLabel: L('냄비'),
    levelLine: L('사랑 용량: 이것저것 품어 끓여 내는 단계'),
    shortDescription: L('당신의 사랑 그릇은 많은 것을 담아 따뜻하게 끓이는 냄비입니다.'),
    description: L(
      '상대의 부족함과 기분 변화를 대체로 품고 대화로 풀어 갑니다. 담는 양이 많은 만큼 가끔 넘치지 않도록 내 몫도 챙겨야 합니다.',
    ),
    scoreRange: L('점수대: 28~34점'),
    keywords: L('포용·대화·따뜻함·넘치지 않게 조절'),
    strengths: L('상대를 이해하고 갈등을 대화로 따뜻하게 풀어 가는 힘'),
    tips: L(
      '품는 만큼 내 필요도 말하는 연습하기\n한쪽으로만 담기지 않도록 주고받음의 균형을 가끔 점검하기\n지칠 때는 혼자 쉬는 시간을 일정에 먼저 넣기',
    ),
    counseling: L(''),
    oneLiner: L('따뜻하게 품는 힘이 있습니다. 나의 몫도 함께 담아야 오래 끓습니다'),
    shareLine: L(
      '나의 사랑 용량: 냄비 🍲 ({score}점/48, 상위 {percent}%) 많이 품고 따뜻하게 끓이는 타입이래ㅋㅋ 너는 어떤 그릇이야? 캡처 공유해줘',
    ),
  },
  {
    type: 'Type4',
    emoji: '🛁',
    min: 35,
    max: 41,
    title: L('대야'),
    gaugeLabel: L('대야'),
    levelLine: L('사랑 용량: 넓고 여유롭게 품는 단계'),
    shortDescription: L('당신의 사랑 그릇은 넓고 여유로운 대야입니다.'),
    description: L(
      '상대의 약점과 변화도 너그럽게 받아들이고, 갈등 앞에서도 곁을 지키며 대화합니다. 넓게 품는 만큼 내 감정을 놓치지 않는 것이 과제입니다.',
    ),
    scoreRange: L('점수대: 35~41점'),
    keywords: L('너그러움·여유·곁을 지킴·넓은 포용'),
    strengths: L('상대가 편안하게 약점을 드러내도록 만드는 안정감'),
    tips: L(
      '너그러움이 참음이 되지 않도록 불편한 점은 짧게 표현하기\n상대가 나를 챙겨 줄 기회를 주고 받는 연습하기\n힘든 날에는 "오늘은 내가 기대고 싶어"라고 말하기',
    ),
    counseling: L(''),
    oneLiner: L('넓은 그릇은 큰 안식처입니다. 내 마음도 담아야 더 오래갑니다'),
    shareLine: L(
      '나의 사랑 용량: 대야 🛁 ({score}점/48, 상위 {percent}%) 넓고 여유롭게 품는 타입이래! 너는 어떤 그릇이야? 캡처 ㄱㄱ',
    ),
  },
  {
    type: 'Type5',
    emoji: '🌊',
    min: 42,
    max: 48,
    title: L('바다'),
    gaugeLabel: L('바다'),
    levelLine: L('사랑 용량: 모든 모습을 품는 가장 큰 단계'),
    shortDescription: L('당신의 사랑 그릇은 모든 모습을 품는 바다입니다.'),
    description: L(
      '상대의 실수, 약점, 변화까지 있는 그대로 받아들이고 다정하게 곁을 지킵니다. 큰 만큼 상대가 편안하지만, 바다도 가끔 쉬어야 파도가 잔잔해집니다. 큰 사랑에 내 마음을 돌보는 일도 꼭 포함하세요.',
    ),
    scoreRange: L('점수대: 42~48점'),
    keywords: L('무한한 포용·다정함·안정감·자기 돌봄 필요'),
    strengths: L('상대를 있는 그대로 품고 편안하게 해 주는 큰 사랑'),
    tips: L(
      '모든 것을 품다 지치지 않도록 나만의 충전 시간을 먼저 확보하기\n상대의 책임까지 대신 품지 않도록 선을 정하기\n이 사랑의 방식을 친구들과 나누기. 당신의 마음이 누군가의 힌트가 됩니다',
    ),
    counseling: L(''),
    oneLiner: L('바다 같은 사랑은 큰 선물입니다. 나도 그 품 안에 들어 있다는 걸 잊지 마세요'),
    shareLine: L(
      '나의 사랑 용량: 바다 🌊 ({score}점/48, 상위 {percent}%) 모든 모습을 품는 가장 큰 그릇이래ㅋㅋ 너는 어떤 그릇이야? 상위 몇 %인지 캡처해줘',
    ),
  },
];

export const phase3LoveCapacityBowlResults: Phase3LoveCapacityBowlResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveCapacityBowlResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_CAPACITY_BOWL_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_LOVE_CAPACITY_BOWL_MIN = 12;
export const PHASE3_LOVE_CAPACITY_BOWL_MAX = 48;

export function calculatePhase3LoveCapacityBowlTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3LoveCapacityBowlResult(total: number): Phase3LoveCapacityBowlResult {
  return (
    phase3LoveCapacityBowlResults.find((r) => total >= r.min && total <= r.max) ??
    phase3LoveCapacityBowlResults[0]
  );
}

export function getPhase3LoveCapacityBowlTopPercent(total: number): number {
  const index =
    Math.min(PHASE3_LOVE_CAPACITY_BOWL_MAX, Math.max(PHASE3_LOVE_CAPACITY_BOWL_MIN, total)) -
    PHASE3_LOVE_CAPACITY_BOWL_MIN;
  return PHASE3_LOVE_CAPACITY_BOWL_TOP_PERCENT[index];
}

/** 평균이 가장 낮은 영역. 동점이면 정의 순서대로 모두. 모든 영역이 같으면 빈 배열 */
export function getPhase3LoveCapacityBowlWeakAreas(answers: number[]): Phase3LoveCapacityBowlAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_LOVE_CAPACITY_BOWL_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_LOVE_CAPACITY_BOWL_AREAS.filter((_, index) => avgs[index] === minAvg).map(
    (area) => area.id,
  );
  if (weak.length === PHASE3_LOVE_CAPACITY_BOWL_AREAS.length) return [];
  return weak;
}
