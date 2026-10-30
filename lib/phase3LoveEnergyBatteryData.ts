/**
 * 나의 연애 에너지 배터리 잔량
 * slug: phase3-love-energy-battery
 * 10문항 4지선다 · 1~4점 합산(10~40) · 5구간(10/30/50/80/100%) · 동점 없음
 */

import {
  PHASE3_LOVE_ENERGY_BATTERY_I18N,
  type Phase3LoveEnergyBatteryForeignLocale,
  type Phase3LoveEnergyBatteryResultText,
} from './phase3LoveEnergyBatteryI18n';

export type Phase3LoveEnergyBatteryLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveEnergyBatteryText = Record<Phase3LoveEnergyBatteryLocaleKey, string>;

function L(ko: string): Phase3LoveEnergyBatteryText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_ENERGY_BATTERY_I18N) as Phase3LoveEnergyBatteryForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveEnergyBatteryForeignLocale) => string,
): Phase3LoveEnergyBatteryText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export const PHASE3_LOVE_ENERGY_BATTERY_AREAS = [
  { id: 'contact', questionIds: [1] },
  { id: 'meetup', questionIds: [2] },
  { id: 'recovery', questionIds: [3] },
  { id: 'listening', questionIds: [4] },
  { id: 'anniversary', questionIds: [5] },
  { id: 'aloneTime', questionIds: [6] },
  { id: 'conflict', questionIds: [7] },
  { id: 'expectation', questionIds: [8] },
  { id: 'energyBalance', questionIds: [9] },
  { id: 'anticipation', questionIds: [10] },
] as const;

export type Phase3LoveEnergyBatteryAreaId = (typeof PHASE3_LOVE_ENERGY_BATTERY_AREAS)[number]['id'];

export const PHASE3_LOVE_ENERGY_BATTERY_AREA_LABELS: Record<
  Phase3LoveEnergyBatteryAreaId,
  Phase3LoveEnergyBatteryText
> = {
  contact: withForeign('연락', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.contact),
  meetup: withForeign('만남 제안', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.meetup),
  recovery: withForeign('데이트 후 회복', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.recovery),
  listening: withForeign('고민 경청', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.listening),
  anniversary: withForeign('기념일 준비', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.anniversary),
  aloneTime: withForeign('혼자 시간', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.aloneTime),
  conflict: withForeign('갈등 대처', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.conflict),
  expectation: withForeign('기대 부응', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.expectation),
  energyBalance: withForeign('에너지 균형', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.energyBalance),
  anticipation: withForeign('만남 기대', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].areas.anticipation),
};

export interface Phase3LoveEnergyBatteryQuestion {
  id: number;
  area: Phase3LoveEnergyBatteryAreaId;
  question: Phase3LoveEnergyBatteryText;
  options: { text: Phase3LoveEnergyBatteryText; score: number }[];
}

export interface Phase3LoveEnergyBatteryResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  /** 결과 화면·게이지용 잔량 % (10/30/50/80/100) */
  batteryPercent: number;
  title: Phase3LoveEnergyBatteryText;
  gaugeLabel: Phase3LoveEnergyBatteryText;
  levelLine: Phase3LoveEnergyBatteryText;
  shortDescription: Phase3LoveEnergyBatteryText;
  description: Phase3LoveEnergyBatteryText;
  scoreRange: Phase3LoveEnergyBatteryText;
  keywords: Phase3LoveEnergyBatteryText;
  strengths: Phase3LoveEnergyBatteryText;
  tips: Phase3LoveEnergyBatteryText;
  counseling: Phase3LoveEnergyBatteryText;
  oneLiner: Phase3LoveEnergyBatteryText;
  /** {score} 치환 */
  shareLine: Phase3LoveEnergyBatteryText;
}

export const PHASE3_LOVE_ENERGY_BATTERY_META = {
  title: withForeign('나의 연애 에너지 배터리 잔량', (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].meta.title),
  description: withForeign(
    '지금 내 연애 에너지는 몇 %일까? 10가지 상황에서 반응을 합산해 연애 배터리 잔량을 %로 알려드립니다.',
    (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애에너지', '연애번아웃', '연애테스트'],
    en: PHASE3_LOVE_ENERGY_BATTERY_I18N.en.meta.tags,
    ja: PHASE3_LOVE_ENERGY_BATTERY_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_ENERGY_BATTERY_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_ENERGY_BATTERY_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_ENERGY_BATTERY_I18N.vi.meta.tags,
    id: PHASE3_LOVE_ENERGY_BATTERY_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; area: Phase3LoveEnergyBatteryAreaId; opts: [string, number][] }[] = [
  {
    q: '연인에게서 연락이 왔다. 나는?',
    area: 'contact',
    opts: [
      ['반가워서 바로 답장하고 대화를 즐긴다', 4],
      ['답장은 하지만 여유 있을 때 천천히 한다', 3],
      ['보고도 한참 뒤에 의무처럼 답을 보낸다', 2],
      ['연락 알림만 봐도 지치고 피하고 싶다', 1],
    ],
  },
  {
    q: '연인이 주말에 만나자고 제안했다. 나는?',
    area: 'meetup',
    opts: [
      ['쉬고 싶은데 거절하기가 부담스러워 고민한다', 1],
      ['기대가 되고 무엇을 할지 먼저 생각해 본다', 4],
      ['나쁘지 않지만 조금 쉬었다가 만나고 싶다', 3],
      ['가야 하니까 가긴 하지만 마음은 무겁다', 2],
    ],
  },
  {
    q: '연인과 하루를 보내고 집에 돌아왔다. 나는?',
    area: 'recovery',
    opts: [
      ['즐거웠지만 한참 쉬어야 기운이 돌아온다', 2],
      ['방전되어 아무것도 하지 못하고 쓰러진다', 1],
      ['기분 좋은 여운이 남아 내 할 일도 거뜬히 한다', 4],
      ['조금 피곤하지만 금방 회복해서 일상으로 돌아간다', 3],
    ],
  },
  {
    q: '연인이 고민을 길게 털어놓았다. 나는?',
    area: 'listening',
    opts: [
      ['끝까지 들어주지만 끝나면 조금 지친다', 3],
      ['듣는 내내 내 에너지가 닳는 느낌이 든다', 2],
      ['더 듣고 싶지 않아 속으로 빨리 끝나길 바란다', 1],
      ['편하게 들어주고 필요한 도움도 함께 고민한다', 4],
    ],
  },
  {
    q: '연인과 기념일 계획을 세우는 중이다. 나는?',
    area: 'anniversary',
    opts: [
      ['설레서 아이디어를 내고 준비하는 과정이 즐겁다', 4],
      ['해야 할 일은 하되 무리 없는 선에서 준비한다', 3],
      ['챙길 게 많아 보여서 벌써 마음이 무겁다', 2],
      ['아무것도 하기 싫고 이 연애가 부담스럽다', 1],
    ],
  },
  {
    q: '나만의 시간(혼자 쉬기, 취미)을 가질 수 있었다. 나는?',
    area: 'aloneTime',
    opts: [
      ['혼자 시간이 거의 없어서 늘 쫓기는 기분이다', 1],
      ['충분히 쉬고 나면 연인이 더 보고 싶어진다', 4],
      ['어느 정도 쉬면서 균형을 맞춰 가고 있다', 3],
      ['쉬어도 쉬는 것 같지 않고 머릿속은 연애 생각이다', 2],
    ],
  },
  {
    q: '연인과 다투거나 의견이 달랐다. 나는?',
    area: 'conflict',
    opts: [
      ['풀고 싶지만 말할 기운이 부족해 미룬다', 2],
      ['싸울 힘도 없어서 그냥 다 포기하고 싶다', 1],
      ['차분히 이야기하고 풀 기운이 충분히 남아 있다', 4],
      ['힘들지만 그날 안에 한 번은 이야기해 보려 한다', 3],
    ],
  },
  {
    q: '연인이 서운하다며 내게 더 잘해 달라고 했다. 나는?',
    area: 'expectation',
    opts: [
      ['노력해 보겠다고 하지만 속으로는 조금 버겁다', 3],
      ['이미 충분히 하고 있는 것 같아 억울하고 지친다', 2],
      ['더 줄 에너지가 남아 있지 않아 마음이 닫힌다', 1],
      ['서운한 마음을 이해하고 할 수 있는 만큼 해 보겠다', 4],
    ],
  },
  {
    q: '요즘 연애에 대해 솔직하게 말한다면?',
    area: 'energyBalance',
    opts: [
      ['에너지를 주고받는 느낌이라 오히려 충전된다', 4],
      ['주는 만큼 받으면서 적당히 균형을 맞추고 있다', 3],
      ['주는 에너지가 더 많아서 점점 줄어드는 중이다', 2],
      ['연애가 내 에너지를 모두 가져가는 것 같다', 1],
    ],
  },
  {
    q: '내일 연인을 만나야 한다. 나는?',
    area: 'anticipation',
    opts: [
      ['벌써부터 피곤하고 약속을 취소하고 싶다', 1],
      ['만날 생각에 기운이 나고 컨디션을 챙긴다', 4],
      ['무난하게 준비하며 푹 자고 만나려 한다', 3],
      ['가기는 하겠지만 억지로 힘을 짜내야 한다', 2],
    ],
  },
];

export const phase3LoveEnergyBatteryQuestions: Phase3LoveEnergyBatteryQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }),
);

type Phase3LoveEnergyBatteryResultTextKey = keyof Phase3LoveEnergyBatteryResultText;

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
] as const satisfies readonly Phase3LoveEnergyBatteryResultTextKey[];

const KO_RESULTS: Phase3LoveEnergyBatteryResult[] = [
  {
    type: 'Type1',
    emoji: '🪫',
    min: 10,
    max: 16,
    batteryPercent: 10,
    title: L('배터리 잔량 10%'),
    gaugeLabel: L('10%'),
    levelLine: L('연애 에너지: 경고등이 켜진 단계'),
    shortDescription: L('당신의 연애 배터리는 경고등이 켜진 상태입니다.'),
    description: L(
      '연락도 만남도 버겁고, 연애가 에너지를 가져가는 느낌이 큽니다. 사랑이 식은 것이 아니라 충전 없이 오래 달려와 소진된 상태일 수 있습니다. 지금은 관계보다 회복이 먼저입니다.',
    ),
    scoreRange: L('점수대: 10~16점'),
    keywords: L('소진·경고등·회피·의무감·회복 필요'),
    strengths: L('오랫동안 책임감 있게 관계에 에너지를 쏟아 온 성실함'),
    tips: L(
      '이번 주 하루는 연락과 약속 없이 나만의 날로 비워 두기\n"요즘 많이 지쳐서 쉬는 시간이 필요해"라고 연인에게 솔직하게 알리기\n수면·식사 같은 기본 충전부터 먼저 챙기기',
    ),
    counseling: L(
      '피로와 무기력이 오래 이어져 일상(수면·식사·일)에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요',
    ),
    oneLiner: L('쉬는 것은 도망이 아니라 충전입니다. 먼저 나를 채워야 사랑도 이어집니다'),
    shareLine: L(
      '나의 연애 에너지 배터리: 10% 🪫 ({score}점/40) 경고등 켜졌대ㅠ 너는 몇 %야? 연인이랑 비교해보자',
    ),
  },
  {
    type: 'Type2',
    emoji: '🔋',
    min: 17,
    max: 22,
    batteryPercent: 30,
    title: L('배터리 잔량 30%'),
    gaugeLabel: L('30%'),
    levelLine: L('연애 에너지: 절전 모드가 필요한 단계'),
    shortDescription: L('당신의 연애 배터리는 절전 모드가 필요한 상태입니다.'),
    description: L(
      '해야 할 일은 해내지만 여유가 줄고 쉬어도 개운하지 않습니다. 주는 에너지가 받는 에너지보다 많아지고 있을 수 있습니다.',
    ),
    scoreRange: L('점수대: 17~22점'),
    keywords: L('절전·여유 부족·주는 쪽 쏠림·피곤함'),
    strengths: L('지쳐도 관계를 놓지 않으려는 끈기와 배려'),
    tips: L(
      '연락·약속 중 줄여도 되는 것을 하나 골라 가볍게 조정하기\n주고받는 에너지를 일주일간 적어 보고 쏠림 확인하기\n연인과 역할(예약·기념일 준비 등)을 나누기',
    ),
    counseling: L(
      '피로가 반복되어 연애와 일상에 영향을 준다면 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('절전 모드는 오래 달리기 위한 선택입니다. 줄일 것 하나만 정해도 숨이 트입니다'),
    shareLine: L(
      '나의 연애 에너지 배터리: 30% 🔋 ({score}점/40) 절전 모드 필요하대... 너는 몇 %야? 결과 비교 ㄱㄱ',
    ),
  },
  {
    type: 'Type3',
    emoji: '🔌',
    min: 23,
    max: 28,
    batteryPercent: 50,
    title: L('배터리 잔량 50%'),
    gaugeLabel: L('50%'),
    levelLine: L('연애 에너지: 절반쯤 남아 있는 단계'),
    shortDescription: L('당신의 연애 배터리는 절반쯤 남아 있는 상태입니다.'),
    description: L(
      '대체로 무난하게 균형을 맞추지만 바쁘거나 다툼이 있을 때 쉽게 줄어듭니다. 충전 습관을 만들어 두면 안정적으로 유지됩니다.',
    ),
    scoreRange: L('점수대: 23~28점'),
    keywords: L('절반·균형·변동·충전 습관'),
    strengths: L('에너지를 현실적으로 조절하며 관계를 무난하게 이어 가는 힘'),
    tips: L(
      '일주일에 한 번은 나만의 충전 시간을 일정에 먼저 넣기\n에너지가 줄어드는 순간(다툼·바쁜 주)을 미리 파악해 대비하기\n연인과 함께 충전되는 활동(산책·맛집)을 정해 두기',
    ),
    counseling: L(''),
    oneLiner: L('절반의 배터리는 가장 조절하기 좋은 상태입니다. 충전 루틴 하나로 더 안정됩니다'),
    shareLine: L(
      '나의 연애 에너지 배터리: 50% 🔌 ({score}점/40) 절반 남았대ㅋㅋ 너는 몇 %야? 우리 비교해보자',
    ),
  },
  {
    type: 'Type4',
    emoji: '⚡',
    min: 29,
    max: 34,
    batteryPercent: 80,
    title: L('배터리 잔량 80%'),
    gaugeLabel: L('80%'),
    levelLine: L('연애 에너지: 넉넉하게 채워진 단계'),
    shortDescription: L('당신의 연애 배터리는 넉넉하게 채워진 상태입니다.'),
    description: L(
      '연인과의 시간이 에너지를 주고받는 시간이 되고, 회복도 빠릅니다. 약간의 피로가 있어도 금방 충전됩니다.',
    ),
    scoreRange: L('점수대: 29~34점'),
    keywords: L('넉넉함·빠른 회복·주고받음·여유'),
    strengths: L('에너지를 주고받으며 갈등도 차분히 푸는 안정감'),
    tips: L(
      '지금의 충전 습관(혼자 시간·휴식)을 유지하기\n여유가 있을 때 연인에게 먼저 따뜻한 한마디 건네기\n가끔 무리하지 않았는지 내 에너지 상태를 점검하기',
    ),
    counseling: L(''),
    oneLiner: L('넉넉한 배터리는 관계의 큰 자산입니다. 지금의 리듬을 지켜 가세요'),
    shareLine: L(
      '나의 연애 에너지 배터리: 80% ⚡ ({score}점/40) 넉넉하게 충전돼 있대! 너는 몇 %야? 결과 비교해봐',
    ),
  },
  {
    type: 'Type5',
    emoji: '💚',
    min: 35,
    max: 40,
    batteryPercent: 100,
    title: L('배터리 잔량 100%'),
    gaugeLabel: L('100%'),
    levelLine: L('연애 에너지: 가득 충전된 단계'),
    shortDescription: L('당신의 연애 배터리는 가득 충전되어 있습니다.'),
    description: L(
      '연인과의 시간이 오히려 충전이 되고, 혼자 시간도 잘 챙기며 갈등 앞에서도 여유가 있습니다. 다만 에너지가 넘칠 때 상대의 속도를 앞서가지 않도록 살펴 주세요.',
    ),
    scoreRange: L('점수대: 35~40점'),
    keywords: L('가득 충전·여유·선순환·회복력·안정'),
    strengths: L('에너지가 선순환하며 상대에게도 안정감을 주는 힘'),
    tips: L(
      '넘치는 에너지는 상대의 속도에 맞춰 나눠 쓰기\n연인이 지쳐 있을 때 충전을 도와줄 방법을 함께 찾기\n이 노하우를 친구들과 나누기. 당신의 리듬이 누군가의 힌트가 됩니다',
    ),
    counseling: L(''),
    oneLiner: L('가득 찬 배터리는 나눌수록 커집니다. 상대의 속도만 살피면 완벽합니다'),
    shareLine: L(
      '나의 연애 에너지 배터리: 100% 💚 ({score}점/40) 가득 충전이래ㅋㅋ 너는 몇 %야? 연인이랑 비교해봐',
    ),
  },
];

export const phase3LoveEnergyBatteryResults: Phase3LoveEnergyBatteryResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveEnergyBatteryResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_ENERGY_BATTERY_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_LOVE_ENERGY_BATTERY_MIN = 10;
export const PHASE3_LOVE_ENERGY_BATTERY_MAX = 40;

export function calculatePhase3LoveEnergyBatteryTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3LoveEnergyBatteryResult(total: number): Phase3LoveEnergyBatteryResult {
  return (
    phase3LoveEnergyBatteryResults.find((r) => total >= r.min && total <= r.max) ??
    phase3LoveEnergyBatteryResults[0]
  );
}

/** 평균이 가장 낮은 영역. 동점이면 정의 순서대로 모두. 모든 영역이 같으면 빈 배열 */
export function getPhase3LoveEnergyBatteryWeakAreas(answers: number[]): Phase3LoveEnergyBatteryAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_LOVE_ENERGY_BATTERY_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_LOVE_ENERGY_BATTERY_AREAS.filter((_, index) => avgs[index] === minAvg).map(
    (area) => area.id,
  );
  if (weak.length === PHASE3_LOVE_ENERGY_BATTERY_AREAS.length) return [];
  return weak;
}
