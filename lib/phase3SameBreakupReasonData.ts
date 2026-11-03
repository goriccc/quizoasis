/**
 * 나는 왜 매번 같은 이유로 헤어질까?
 * slug: phase3-same-breakup-reason
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 · 동점 시 Q1→Q2→…
 */

import {
  PHASE3_SAME_BREAKUP_REASON_I18N,
  type Phase3SameBreakupReasonForeignLocale,
  type Phase3SameBreakupReasonResultText,
} from './phase3SameBreakupReasonI18n';

export type Phase3SameBreakupReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3SameBreakupReasonText = Record<Phase3SameBreakupReasonLocaleKey, string>;

function L(ko: string): Phase3SameBreakupReasonText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_SAME_BREAKUP_REASON_I18N) as Phase3SameBreakupReasonForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3SameBreakupReasonForeignLocale) => string,
): Phase3SameBreakupReasonText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export function sameBreakupReasonText(
  text: Phase3SameBreakupReasonText,
  locale: string,
): string {
  return text[locale as Phase3SameBreakupReasonLocaleKey] || text.ko;
}

export interface Phase3SameBreakupReasonQuestion {
  id: number;
  question: Phase3SameBreakupReasonText;
  options: { text: Phase3SameBreakupReasonText; score: number }[];
}

export interface Phase3SameBreakupReasonResult {
  type: string;
  emoji: string;
  title: Phase3SameBreakupReasonText;
  typeName: Phase3SameBreakupReasonText;
  realReason: Phase3SameBreakupReasonText;
  quote: Phase3SameBreakupReasonText;
  description: Phase3SameBreakupReasonText;
  keywords: Phase3SameBreakupReasonText;
  breakupMoment: Phase3SameBreakupReasonText;
  strengths: Phase3SameBreakupReasonText;
  realReasonUnpack: Phase3SameBreakupReasonText;
  frequentSaying: Phase3SameBreakupReasonText;
  tips: Phase3SameBreakupReasonText;
  counselingNote: Phase3SameBreakupReasonText;
  oneLiner: Phase3SameBreakupReasonText;
  shareLine: Phase3SameBreakupReasonText;
}

export const PHASE3_SAME_BREAKUP_REASON_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

export const PHASE3_SAME_BREAKUP_REASON_MAX_TYPE_SCORE = 8;

export const PHASE3_SAME_BREAKUP_REASON_META = {
  title: withForeign('나는 왜 매번 같은 이유로 헤어질까?', (loc) => PHASE3_SAME_BREAKUP_REASON_I18N[loc].meta.title),
  description: withForeign(
    '사람은 바뀌었는데, 왜 이별 이유는 늘 비슷할까? 12가지 상황으로 소통 단절형·신뢰 균열형·기대 불일치형 등 6가지 중 내가 반복해서 헤어지는 진짜 이유를 알려드립니다.',
    (loc) => PHASE3_SAME_BREAKUP_REASON_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['이별패턴', '연애패턴', '연애심리'],
    en: PHASE3_SAME_BREAKUP_REASON_I18N.en.meta.tags,
    ja: PHASE3_SAME_BREAKUP_REASON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_SAME_BREAKUP_REASON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_SAME_BREAKUP_REASON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_SAME_BREAKUP_REASON_I18N.vi.meta.tags,
    id: PHASE3_SAME_BREAKUP_REASON_I18N.id.meta.tags,
  },
};

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3SameBreakupReasonScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_SAME_BREAKUP_REASON_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3SameBreakupReasonResult(answers: number[]): string {
  const scores = calculatePhase3SameBreakupReasonScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_SAME_BREAKUP_REASON_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 패턴). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3SameBreakupReasonSecondType(answers: number[]): string | null {
  const scores = calculatePhase3SameBreakupReasonScores(answers);
  const sorted = [...PHASE3_SAME_BREAKUP_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '헤어진 뒤 친구가 "이번엔 왜 헤어졌어?"라고 물었다. 가장 먼저 떠오르는 장면은?',
    opts: [
      ['상대의 말과 행동이 달라서 무엇을 믿어야 할지 몰라 의심만 쌓였던 장면', 2],
      ['나는 더 가까워지고 싶은데 상대는 천천히 가고 싶어 해서 관계의 속도가 계속 안 맞았던 장면', 4],
      ['서로 노력했지만 마음이 지쳐서 더는 힘이 남지 않았던 장면', 5],
      ['중요한 선택에서 생각이 정반대로 갈려 끝내 합의하지 못했던 장면', 6],
    ],
  },
  {
    q: '연인과 처음 크게 다툰 날을 떠올려 보면?',
    opts: [
      ['말다툼 끝에 대화가 끊기고 며칠 동안 서로 연락하지 않았다', 1],
      ['내가 바라던 모습과 달라서 실망이 크게 터졌다', 3],
      ['돈을 쓰는 방식이나 시간을 쓰는 방식 같은 기본 생각이 달라서 부딪혔다', 6],
      ['사귄 지 얼마 안 됐는데 상대가 너무 빠르게 다가와서 속도가 부담스러웠다', 4],
    ],
  },
  {
    q: '헤어지기 전 마지막 한 달은 어땠나?',
    opts: [
      ['관계를 유지하는 데 에너지를 너무 많이 써서 몸도 마음도 지쳤다', 5],
      ['하고 싶은 말이 있어도 꺼내지 못하고 대화가 점점 짧아졌다', 1],
      ['확인할 일이 생길 때마다 서로 의심하며 감시하듯 지냈다', 2],
      ['내가 기대한 모습과 달라서 실망하는 일이 계속 반복됐다', 3],
    ],
  },
  {
    q: '연인과 미래 이야기를 나눌 때 나는?',
    opts: [
      ['결혼·거주지·일에 대한 생각이 달라서 이야기할수록 간격만 확인됐다', 6],
      ['약속을 해도 지켜질지 믿음이 안 가서 말을 들어도 마음이 놓이지 않았다', 2],
      ['내가 그리던 미래와 상대가 그리는 미래가 달라 실망스러웠다', 3],
      ['미래를 이야기할 에너지도 남지 않을 만큼 현재 관계에 지쳐 있었다', 5],
    ],
  },
  {
    q: '서운함이 쌓였을 때 나는?',
    opts: [
      ['이 정도는 해주겠지 기대했는데 그렇지 않아서 실망이 점점 커졌다', 3],
      ['서운함을 풀 힘조차 없어서 지친 채로 그냥 넘겼다', 5],
      ['말해봤자 대화가 겉돌 것 같아서 말을 꺼내지 않고 입을 닫았다', 1],
      ['내 마음이 정리될 시간 없이 상대가 앞서가서 속도 차이가 부담됐다', 4],
    ],
  },
  {
    q: '연인이 사소한 거짓말을 한 걸 알게 됐다. 나는?',
    opts: [
      ['이번만이 아니라 다른 말도 의심하게 되어 자꾸 확인하게 됐다', 2],
      ['거짓말 자체보다 정직함에 대한 기준이 서로 달라서 이해가 안 됐다', 6],
      ['이 이야기를 꺼낼 만큼 가까운 사이인지 헷갈려서 관계의 진도부터 다시 가늠하게 됐다', 4],
      ['따지고 싶었지만 어떻게 말해야 할지 몰라 말을 못 하고 입을 닫았다', 1],
    ],
  },
  {
    q: '연애 중 가장 답답했던 순간은?',
    opts: [
      ['나는 관계를 확실히 정하고 싶은데 상대는 계속 미뤄서 속도가 안 맞았던 순간', 4],
      ['상대가 내가 바라던 만큼 표현해주지 않아 기대와 현실의 간격이 느껴진 순간', 3],
      ['일과 휴식, 돈과 시간의 우선순위가 달라서 서로 이해하지 못한 순간', 6],
      ['상대의 말을 믿고 싶은데 자꾸 어긋나서 믿음이 흔들리던 순간', 2],
    ],
  },
  {
    q: '이별이 확정된 순간 가장 가까운 마음은?',
    opts: [
      ['대화를 시도했지만 서로 말이 안 통해서 결국 말을 줄이며 끝났다', 1],
      ['더 이어갈 힘이 남지 않아서 지친 마음이 먼저 끝을 냈다', 5],
      ['한 사람은 앞서가고 한 사람은 멈춰 있다가 거리가 너무 벌어졌다', 4],
      ['인생에서 중요하게 생각하는 것이 달라서 더 이어가기 어렵다고 느꼈다', 6],
    ],
  },
  {
    q: '헤어지고 나서 돌아보면 가장 큰 아쉬움은?',
    opts: [
      ['처음부터 서로의 중요한 기준을 확인하고 시작했으면 좋았을 것 같다', 6],
      ['그때 솔직하게 속마음을 말했더라면 달라졌을 것 같다', 1],
      ['서로를 조금만 더 믿어주었다면 하는 아쉬움이 남는다', 2],
      ['내가 기대한 모습에 상대를 너무 맞추려 하지 않았나 하는 생각이 든다', 3],
    ],
  },
  {
    q: '헤어진 이유가 반복된다는 걸 알게 된 순간 가장 가까운 건?',
    opts: [
      ["매번 '내가 바란 모습이 아니라서' 실망했다는 점이 겹친다", 3],
      ['매번 관계의 진도와 속도가 안 맞아서 어긋났다는 점이 겹친다', 4],
      ['매번 연애 후반에 지쳐서 마음이 닫혔다는 점이 겹친다', 5],
      ['매번 상대를 믿지 못해 확인하고 의심하다 끝났다는 점이 겹친다', 2],
    ],
  },
  {
    q: '친구가 "다음 연애에서는 뭘 바꿀 거야?"라고 물었다. 나는?',
    opts: [
      ['에너지를 전부 쏟기보다 쉬어가며 지치지 않게 하고 싶다', 5],
      ['중요한 생각의 기준이 비슷한 사람인지 먼저 확인하고 싶다', 6],
      ['내가 기대하는 것을 미리 말하고 서로 맞춰보고 싶다', 3],
      ['속마음을 말하는 연습부터 해서 대화를 끊지 않고 싶다', 1],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"관계의 속도가 안 맞으면 자꾸 어긋나는 것 같아"', 4],
      ['"한번 믿음이 깨지면 다시 믿기가 너무 어려워"', 2],
      ['"서운한 걸 말 못 하고 침묵하다 끝나는 것 같아"', 1],
      ['"연애 후반만 되면 마음이 지쳐서 놓고 싶어져"', 5],
    ],
  },
];

type RawResult = {
  type: string;
  emoji: string;
  title: string;
  typeName: string;
  realReason: string;
  quote: string;
  description: string;
  keywords: string;
  breakupMoment: string;
  strengths: string;
  realReasonUnpack: string;
  frequentSaying: string;
  tips: string;
  counselingNote: string;
  oneLiner: string;
  shareLine: string;
};

const RAW_RESULTS: RawResult[] = [
  {
    type: 'Type1',
    emoji: '🔇',
    title: '말이 끊기면서 멀어지는 사람, 소통 단절형',
    typeName: '소통 단절형',
    realReason: '하고 싶은 말을 삼키다 대화가 끊기고, 침묵이 거리가 된다',
    quote: '당신의 이별은 한 번의 큰 사건이 아니라 쌓여간 침묵에서 시작됩니다.',
    description:
      "서운함이 생겨도 말을 꺼내지 못하고, 말을 해도 겉돌 것 같아 입을 닫습니다. 대화가 짧아지는 사이 상대와의 거리는 조용히 벌어지고, 어느 날 이별이 갑작스럽게 느껴집니다. 상대가 바뀌어도 '말하지 않는 방식'이 같으면 같은 장면이 반복됩니다.",
    keywords: '침묵, 말 삼키기, 대화 감소, 서운함 쌓임, 갑작스러운 끝',
    breakupMoment: '서운함이 생겼는데 말하지 못할 때, 다툰 뒤 대화가 끊겼을 때',
    strengths: '상대를 배려하고 갈등을 크게 만들지 않으려는 차분함',
    realReasonUnpack: '마음이 식은 게 아니라 마음을 전달하는 길이 막혀 관계가 서서히 닫힘',
    frequentSaying: '말해도 달라질 것 같지 않아서',
    tips: '서운한 일이 생기면 그날 안에 \'사실 한 줄 + 내 마음 한 줄\'만 말해보기\n다툰 뒤 연락이 끊기기 전에 "생각 정리하고 내일 얘기하자"라고 기한 말하기\n다음 연애 초반에 "나는 말을 삼키는 편이야, 눈치채면 물어봐줘"라고 미리 알려두기',
    counselingNote: '',
    oneLiner: '침묵은 평화가 아니라 거리입니다. 짧게 자주 말할수록 이별은 멀어집니다',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 소통 단절형 🔇 서운함을 삼키다 대화가 끊겨서 멀어지는 거래... 팩트라 조용해짐ㅠ 단톡방 결과 카드 인증! 너희는 뭐 나왔어?',
  },
  {
    type: 'Type2',
    emoji: '🪞',
    title: '믿음에 금이 가면 회복이 어려운 사람, 신뢰 균열형',
    typeName: '신뢰 균열형',
    realReason: '한 번 흔들린 믿음이 의심과 확인으로 이어져 관계를 소모시킨다',
    quote: '당신의 이별은 마음이 없어서가 아니라, 믿고 싶은데 믿기 어려운 마음에서 시작됩니다.',
    description:
      "상대의 말과 행동이 어긋나면 모든 말이 의심스러워지고, 확인하고 또 확인하다 서로 지칩니다. 믿음이 깨졌던 경험이 있다면 같은 신호에 더 크게 반응하기도 합니다. 사람이 바뀌어도 '확인하는 연애'가 반복되면 이별 이유도 닮아갑니다.",
    keywords: '의심, 확인, 말과 행동의 불일치, 믿음 회복 어려움, 감시',
    breakupMoment: '거짓말이나 약속 불이행을 알게 됐을 때, 확인할수록 불안이 커질 때',
    strengths: '관계에 진지하고 정직함과 일관성을 소중히 여기는 기준',
    realReasonUnpack: '현재 상대의 행동에 더해 과거에 쌓인 불안이 신호를 위험으로 읽게 만듦',
    frequentSaying: '한번 깨진 믿음은 다시 붙기 어려워',
    tips: "의심이 올라올 때 '확인된 사실'과 '내가 만든 추측'을 두 줄로 나눠 적어보기\n확인 대신 \"이 부분이 불안해, 설명해줄래?\"라고 감정을 먼저 말하기\n믿음의 기준을 '완벽한 일관성'이 아닌 '문제가 생겼을 때 솔직하게 말하는지'로 바꿔보기",
    counselingNote:
      '믿음이 어려워 연애마다 의심과 확인이 반복되고 일상이 힘들다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요',
    oneLiner: '믿음은 확인으로 쌓이지 않고 솔직한 대화로 쌓입니다. 확인하고 싶을 때 말로 바꿔 보세요',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 신뢰 균열형 🪞 한 번 금 간 믿음이 의심과 확인으로 이어지는 거래... 찔림ㅠ 단톡방 결과 카드 인증! 너희는?',
  },
  {
    type: 'Type3',
    emoji: '🎨',
    title: '기대한 모습과 현실의 간격에 실망하는 사람, 기대 불일치형',
    typeName: '기대 불일치형',
    realReason: '말하지 않은 기대가 쌓이고 현실이 그 기대에 못 미칠 때 마음이 돌아선다',
    quote: '당신의 이별은 상대가 부족해서가 아니라, 내가 그린 모습과 현실 사이의 간격에서 커집니다.',
    description:
      "이 정도는 해주겠지, 이런 모습일 거야 하는 기대를 말로 꺼내지 않은 채 실망만 쌓입니다. 상대는 무엇이 문제인지 모르고, 나는 매번 '또 이런 사람이었네'라고 결론 내립니다. 사람이 바뀌어도 기대를 말하지 않는 방식이 같으면 이유도 비슷해집니다.",
    keywords: '말 안 한 기대, 실망 누적, 이상과 현실, 또 이런 사람, 기준표',
    breakupMoment: '기대한 표현이나 행동이 나오지 않을 때, 상대의 평범한 모습이 이상과 어긋날 때',
    strengths: '사랑에 대한 기준이 분명하고 관계를 특별하게 만들고 싶은 마음이 큼',
    realReasonUnpack: '상대의 변화가 아니라 내가 말하지 않은 기대가 실망을 키우고 있음',
    frequentSaying: '내가 바라는 건 이게 아닌데',
    tips: "연애 초반에 내가 바라는 것을 '꼭 필요한 3가지'로 정리해 상대와 말로 맞춰보기\n실망이 올라올 때 '이 기대를 상대에게 말한 적이 있는가'를 먼저 확인하기\n상대가 해준 것 3가지를 먼저 떠올린 뒤 아쉬운 점을 이야기하기",
    counselingNote: '',
    oneLiner: '기대는 말하지 않으면 전해지지 않습니다. 기대를 말로 바꾸면 실망은 대화가 됩니다',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 기대 불일치형 🎨 말 안 한 기대가 쌓여서 실망하는 거래... 인정ㅋㅋ 단톡방 결과 카드 인증! 너희는 어떤 유형이야?',
  },
  {
    type: 'Type4',
    emoji: '🚦',
    title: '관계의 속도가 서로 다른 사람, 속도 차이형',
    typeName: '속도 차이형',
    realReason: '가까워지고 확정하는 속도가 맞지 않아 한쪽이 앞서거나 뒤처진다',
    quote: '당신의 이별은 마음의 크기가 아니라, 걸음의 속도가 달라서 벌어진 거리입니다.',
    description:
      '나는 빨리 가까워지고 확실히 정하고 싶은데 상대는 천천히 가고 싶거나, 그 반대이기도 합니다. 한쪽은 재촉하는 사람, 한쪽은 도망치는 사람처럼 느껴지며 서로 지칩니다. 속도를 맞추는 대화 없이 시작하면 상대가 바뀌어도 같은 간격이 반복됩니다.',
    keywords: '진도, 관계 정의, 서두름과 망설임, 앞서감과 멈춤, 보폭',
    breakupMoment: '관계를 확정하는 시점, 일상 공유나 미래 이야기의 속도가 어긋날 때',
    strengths: '관계에서 내가 원하는 방향이 분명하고 필요한 때 움직일 줄 앎',
    realReasonUnpack: '호감의 차이가 아니라 서로 원하는 속도를 말로 맞춰보지 않은 상태',
    frequentSaying: '너무 빠른 것 같아 / 왜 이렇게 느려?',
    tips: '"나는 이 정도 속도가 편해, 너는 어때?"라고 속도를 직접 이야기하기\n관계를 정의하는 시기와 만남 빈도의 기준을 서로 한 가지씩 합의하기\n속도가 맞지 않을 때 상대를 평가하기보다 \'내가 불안한 지점\'부터 말하기',
    counselingNote: '',
    oneLiner: '속도는 맞추는 것이지 이기는 것이 아닙니다. 보폭을 말해주는 순간 같은 길을 걸을 수 있습니다',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 속도 차이형 🚦 마음 크기가 아니라 걸음 속도가 달랐던 거래... 소름 단톡방 결과 카드 인증! 너희는 뭐 나왔어?',
  },
  {
    type: 'Type5',
    emoji: '🍂',
    title: '마음의 배터리가 먼저 바닥나는 사람, 감정 소진형',
    typeName: '감정 소진형',
    realReason: '관계를 유지하는 데 에너지를 다 쓰고 지쳐서 마음이 먼저 닫힌다',
    quote: '당신의 이별은 사랑이 식어서가 아니라, 마음이 지쳐서 쉬고 싶어서 시작됩니다.',
    description:
      '상대에게 맞추고 참고 챙기다 보면 어느새 에너지가 바닥나고, 서운함을 풀 힘조차 남지 않습니다. 연애 후반에 마음이 무거워지고 놓고 싶어지는 패턴이 반복됩니다. 쉬어가며 주고받는 방식이 없으면 사람이 바뀌어도 같은 시점에 지칩니다.',
    keywords: '방전, 에너지 소모, 참고 맞추기, 연애 후반 지침, 놓고 싶음',
    breakupMoment: '연애 후반부, 서운함을 풀 힘도 없을 때, 관계 유지가 의무처럼 느껴질 때',
    strengths: '책임감이 강하고 관계에 성실하게 에너지를 쏟는 헌신',
    realReasonUnpack: '상대가 문제라기보다 내 에너지를 관리하고 나누는 방식이 부족해 일찍 소진됨',
    frequentSaying: '요즘 너무 지쳐서 힘이 없어',
    tips: '연애 속에서도 혼자 쉬는 시간과 나를 채우는 활동을 일정에 먼저 넣어두기\n지치기 전에 "요즘 내가 많이 지쳐 있어, 잠깐 쉬어도 될까?"라고 미리 알리기\n주는 만큼 받고 있는지 점검하고 한쪽에 쏠린 역할을 나눠 달라고 요청하기',
    counselingNote:
      '연애뿐 아니라 일상 전반에서 의욕이 오래 떨어지고 수면·식사에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요',
    oneLiner: '지치기 전에 쉬는 것도 사랑의 기술입니다. 쉬어가는 연애가 오래갑니다',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 감정 소진형 🍂 사랑이 식은 게 아니라 마음이 먼저 방전되는 거래... 이거 팩트ㅠ 단톡방 결과 카드 인증! 너희는 어떤 이유야?',
  },
  {
    type: 'Type6',
    emoji: '⚖️',
    title: '삶의 기준이 부딪히는 사람, 가치관 충돌형',
    typeName: '가치관 충돌형',
    realReason: '돈·시간·미래 같은 중요한 기준이 달라 끝내 합의하지 못한다',
    quote: '당신의 이별은 감정 문제가 아니라, 삶에서 중요하게 여기는 기준이 서로 달라서 생깁니다.',
    description:
      '결혼, 거주지, 일과 휴식, 돈을 쓰는 방식 같은 큰 주제에서 생각이 갈립니다. 사랑해도 기준이 다르면 이야기할수록 간격만 확인됩니다. 이 기준을 연애 초반에 확인하지 않으면 사람이 바뀌어도 같은 지점에서 부딪힙니다.',
    keywords: '돈, 시간, 결혼, 우선순위, 삶의 방향, 기준 차이',
    breakupMoment: '미래·돈·일에 대한 이야기가 구체적으로 나올 때, 기본 생각이 부딪힐 때',
    strengths: '내 삶의 기준이 분명하고 중요한 것에는 타협하지 않는 단단함',
    realReasonUnpack: '사랑이 부족한 게 아니라 중요한 기준을 확인하는 시점이 너무 늦음',
    frequentSaying: '우리는 중요한 걸 보는 방향이 달라',
    tips: "만난 지 두세 달 안에 '결혼·돈·일·거주지' 같은 큰 주제를 가볍게 이야기해 보기\n내 기준을 '절대 양보 못 하는 것 3가지'와 '조율 가능한 것'으로 나눠 적어두기\n기준이 다를 때 누가 맞는지 따지기보다 '합의 가능한 접점이 있는지'를 먼저 확인하기",
    counselingNote: '',
    oneLiner: '기준이 다른 건 틀린 게 아닙니다. 다만 일찍 확인할수록 서로의 시간이 아낌없이 쓰입니다',
    shareLine:
      '나는 왜 매번 같은 이유로 헤어질까? 결과: 가치관 충돌형 ⚖️ 감정 문제가 아니라 삶의 기준이 부딪힌 거래... 인정 단톡방 결과 카드 인증! 너희는 뭐 나왔어?',
  },
];

export const phase3SameBreakupReasonQuestions: Phase3SameBreakupReasonQuestion[] = RAW_QUESTIONS.map(
  (item, index) => ({
    id: index + 1,
    question: withForeign(item.q, (loc) => PHASE3_SAME_BREAKUP_REASON_I18N[loc].questions[index].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_SAME_BREAKUP_REASON_I18N[loc].questions[index].opts[oi]),
      score,
    })),
  }),
);

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'realReason',
  'quote',
  'description',
  'keywords',
  'breakupMoment',
  'strengths',
  'realReasonUnpack',
  'frequentSaying',
  'tips',
  'counselingNote',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3SameBreakupReasonResultText)[];

export const phase3SameBreakupReasonResults: Phase3SameBreakupReasonResult[] = RAW_RESULTS.map((r, ri) => {
  const base: Phase3SameBreakupReasonResult = {
    type: r.type,
    emoji: r.emoji,
    title: L(r.title),
    typeName: L(r.typeName),
    realReason: L(r.realReason),
    quote: L(r.quote),
    description: L(r.description),
    keywords: L(r.keywords),
    breakupMoment: L(r.breakupMoment),
    strengths: L(r.strengths),
    realReasonUnpack: L(r.realReasonUnpack),
    frequentSaying: L(r.frequentSaying),
    tips: L(r.tips),
    counselingNote: L(r.counselingNote),
    oneLiner: L(r.oneLiner),
    shareLine: L(r.shareLine),
  };
  for (const key of RESULT_TEXT_KEYS) {
    base[key] = withForeign(r[key], (loc) => PHASE3_SAME_BREAKUP_REASON_I18N[loc].results[ri][key]);
  }
  return base;
});
