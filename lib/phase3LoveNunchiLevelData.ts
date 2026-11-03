/**
 * 나의 연애 눈치 레벨 테스트
 * slug: phase3-love-nunchi-level
 * 10문항 4지선다 · 1~4점 합산(10~40) · 5구간
 */

import {
  PHASE3_LOVE_NUNCHI_LEVEL_I18N,
  type Phase3LoveNunchiLevelForeignLocale,
  type Phase3LoveNunchiLevelResultText,
} from './phase3LoveNunchiLevelI18n';

export type Phase3LoveNunchiLevelLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveNunchiLevelText = Record<Phase3LoveNunchiLevelLocaleKey, string>;

function L(ko: string): Phase3LoveNunchiLevelText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_NUNCHI_LEVEL_I18N) as Phase3LoveNunchiLevelForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveNunchiLevelForeignLocale) => string,
): Phase3LoveNunchiLevelText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export function loveNunchiLevelText(text: Phase3LoveNunchiLevelText, locale: string): string {
  return text[locale as Phase3LoveNunchiLevelLocaleKey] || text.ko;
}

/** 내 눈치 성장 포인트용 영역 */
export const PHASE3_LOVE_NUNCHI_LEVEL_AREAS = [
  { id: 'overread', questionIds: [1, 4, 6, 9] },
  { id: 'missSignal', questionIds: [3, 7] },
  { id: 'verify', questionIds: [2, 5, 8, 10] },
] as const;

export type Phase3LoveNunchiLevelAreaId = (typeof PHASE3_LOVE_NUNCHI_LEVEL_AREAS)[number]['id'];

export const PHASE3_LOVE_NUNCHI_LEVEL_AREA_LABELS: Record<
  Phase3LoveNunchiLevelAreaId,
  Phase3LoveNunchiLevelText
> = {
  overread: withForeign('과해석', (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].areas.overread),
  missSignal: withForeign('신호 놓침', (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].areas.missSignal),
  verify: withForeign('검증 방법', (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].areas.verify),
};

export interface Phase3LoveNunchiLevelQuestion {
  id: number;
  area: Phase3LoveNunchiLevelAreaId;
  question: Phase3LoveNunchiLevelText;
  options: { text: Phase3LoveNunchiLevelText; score: number }[];
}

export interface Phase3LoveNunchiLevelResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  title: Phase3LoveNunchiLevelText;
  gaugeLabel: Phase3LoveNunchiLevelText;
  levelLine: Phase3LoveNunchiLevelText;
  shortDescription: Phase3LoveNunchiLevelText;
  description: Phase3LoveNunchiLevelText;
  scoreRange: Phase3LoveNunchiLevelText;
  keywords: Phase3LoveNunchiLevelText;
  strengths: Phase3LoveNunchiLevelText;
  tips: Phase3LoveNunchiLevelText;
  oneLiner: Phase3LoveNunchiLevelText;
  /** {score} 치환 */
  shareLine: Phase3LoveNunchiLevelText;
}

export const PHASE3_LOVE_NUNCHI_LEVEL_META = {
  title: withForeign('나의 연애 눈치 레벨 테스트', (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].meta.title),
  description: withForeign(
    '상대의 호감 신호, 나는 얼마나 잘 읽고 있을까? 10가지 썸·연애 상황에서 해석을 합산해 눈치 신생아부터 눈치 도사까지 나의 연애 눈치 레벨을 알려드립니다.',
    (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애눈치', '썸', '연애테스트'],
    en: PHASE3_LOVE_NUNCHI_LEVEL_I18N.en.meta.tags,
    ja: PHASE3_LOVE_NUNCHI_LEVEL_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_NUNCHI_LEVEL_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_NUNCHI_LEVEL_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_NUNCHI_LEVEL_I18N.vi.meta.tags,
    id: PHASE3_LOVE_NUNCHI_LEVEL_I18N.id.meta.tags,
  },
};

export const PHASE3_LOVE_NUNCHI_LEVEL_MIN = 10;
export const PHASE3_LOVE_NUNCHI_LEVEL_MAX = 40;

const RAW_QUESTIONS: {
  q: string;
  area: Phase3LoveNunchiLevelAreaId;
  opts: [string, number][];
}[] = [
  {
    q: '썸 상대가 "오늘 진짜 재밌었다, 다음에 또 보자"라고 말했다. 나는?',
    area: 'overread',
    opts: [
      ['좋은 신호로 보되 다음 약속이 이어지는지 지켜본다', 4],
      ['좋은 신호 같아 설레지만 확신이 없어 마음 졸인다', 3],
      ['흔한 인사치레일 거라며 기대하지 않고 넘긴다', 2],
      ['나를 좋아하는 게 확실하다며 고백을 준비한다', 1],
    ],
  },
  {
    q: '상대의 답장이 평소보다 늦어졌다. 나는?',
    area: 'verify',
    opts: [
      ['이제 나에게 관심이 식은 거라고 결론 내린다', 1],
      ['바쁜 시기일 수 있어 평소 패턴과 견주며 지켜본다', 4],
      ['신경은 쓰이지만 일단 내 할 일에 집중한다', 3],
      ['불안해서 이유를 묻는 메시지를 연달아 보낸다', 2],
    ],
  },
  {
    q: "상대가 내 SNS에 '좋아요'를 눌렀다. 나는?",
    area: 'missSignal',
    opts: [
      ['나에게 관심이 있다는 확실한 증거라고 여긴다', 2],
      ['아무에게나 누르는 거라며 의미를 전혀 두지 않는다', 1],
      ['하나의 신호로만 보고 다른 행동도 함께 살핀다', 4],
      ['반가워서 나도 눌러 보고 반응이 오는지 살핀다', 3],
    ],
  },
  {
    q: '상대가 내 이야기를 기억하고 며칠 뒤 먼저 꺼냈다. 나는?',
    area: 'overread',
    opts: [
      ['기쁘지만 기억력이 좋은 사람일 수도 있다고 본다', 3],
      ['별일 아니라고 넘기고 크게 신경 쓰지 않는다', 2],
      ['이 정도면 나를 좋아하는 게 확실하다고 믿는다', 1],
      ['관심의 신호로 보되 비슷한 행동이 반복되는지 본다', 4],
    ],
  },
  {
    q: '상대가 약속을 먼저 잡자고 했다가 일정이 생겨 취소했다. 나는?',
    area: 'verify',
    opts: [
      ['이유를 듣고 다음 일정을 어떻게 제안하는지 본다', 4],
      ['아쉽지만 사정이 있었겠지 하며 이해하고 넘어간다', 3],
      ['나를 우선순위로 두지 않는 것 같아 서운하다', 2],
      ['나를 싫어하는 거라고 단정하고 연락을 줄인다', 1],
    ],
  },
  {
    q: '단체 모임에서 상대가 내 옆자리에 앉았다. 나는?',
    area: 'overread',
    opts: [
      ['나를 좋아하는 게 틀림없다고 생각하며 들뜬다', 1],
      ['우연일 수도 있어 이후 대화와 행동을 더 살핀다', 4],
      ['기분은 좋지만 큰 의미는 두지 않고 지나간다', 3],
      ['빈자리라서 앉았을 거라며 아무 의미 없이 넘긴다', 2],
    ],
  },
  {
    q: '상대가 "너 요즘 바빠 보이더라"라고 말했다. 나는?',
    area: 'missSignal',
    opts: [
      ['내 근황을 챙기는 걸 보니 호감이 있다고 해석한다', 2],
      ['그냥 하는 말이라며 아무 의미도 두지 않는다', 1],
      ['안부일 수도 호감일 수도 있어 대화를 이어 본다', 4],
      ['걱정해 주는 것 같아 고맙고 기분이 좋아진다', 3],
    ],
  },
  {
    q: '상대가 다른 이성과 즐겁게 이야기하는 모습을 봤다. 나는?',
    area: 'verify',
    opts: [
      ['신경 쓰이지만 그냥 친한 사이일 수도 있다고 본다', 3],
      ['질투가 나서 한동안 그 장면만 계속 곱씹는다', 2],
      ['나는 가망이 없다고 판단하고 마음을 접는다', 1],
      ['한 장면보다 평소 두 사람 관계와 내 대우를 본다', 4],
    ],
  },
  {
    q: '상대가 사적인 고민을 털어놓았다. 나는?',
    area: 'overread',
    opts: [
      ['신뢰의 신호로 받아들이되 호감과는 구분해서 본다', 4],
      ['나를 믿는 것 같아 기쁘고 더 가까워졌다고 느낀다', 3],
      ['편한 친구라서 말한 거라며 선을 긋고 생각한다', 2],
      ['사실상 고백이나 다름없다고 믿고 마음이 부푼다', 1],
    ],
  },
  {
    q: '상대의 행동이 애매해서 호감인지 모르겠다. 나는?',
    area: 'verify',
    opts: [
      ['혼자 계속 분석하고 친구들에게 해석을 물어본다', 1],
      ['한동안 관찰하다 가볍게 만남을 제안해 반응을 본다', 4],
      ['신호가 더 쌓일 때까지 기다리며 지켜보기만 한다', 3],
      ['직접 묻지 못하고 에둘러서 마음을 떠본다', 2],
    ],
  },
];

type RawResult = {
  type: string;
  emoji: string;
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
};

const RAW_RESULTS: RawResult[] = [
  {
    type: 'Level1',
    emoji: '🍼',
    min: 10,
    max: 16,
    title: '눈치 신생아',
    gaugeLabel: '신생아',
    levelLine: '연애 눈치: 신호가 잘 안 보이거나 과하게 해석하는 단계',
    shortDescription: '당신은 호감 신호를 놓치거나 한 장면에 크게 흔들립니다.',
    description:
      '직진 신호도 인사치레로 넘기거나, 반대로 작은 신호를 확신으로 키워 버리기도 합니다. 신호를 읽는 틀이 아직 만들어지는 중입니다.',
    scoreRange: '10~16점',
    keywords: '신호 놓침, 과해석, 단정, 한 장면에 흔들림',
    strengths: '순수하고 솔직하며 선입견 없이 사람을 대함',
    tips: "신호를 하나만 보고 판단하지 말고 '같은 행동이 3번 반복되는지' 확인하기\n해석 대신 '관찰한 사실'만 메모해 보기\n애매할 땐 \"이번 주말에 볼래?\"처럼 가볍게 제안해 반응 확인하기",
    oneLiner: '눈치는 타고나는 게 아니라 연습입니다. 사실과 상상을 나누는 것부터 시작해 보세요',
    shareLine:
      '나의 연애 눈치 레벨: 눈치 신생아 🍼 ({score}점/40) 신호를 놓치거나 과해석하는 단계래... 나 눈치 신생아 나옴ㅋㅋ 너는 몇 점이야?',
  },
  {
    type: 'Level2',
    emoji: '🐣',
    min: 17,
    max: 22,
    title: '눈치 초보',
    gaugeLabel: '초보',
    levelLine: '연애 눈치: 신호는 느끼지만 해석이 흔들리는 단계',
    shortDescription: '당신은 신호를 느끼긴 하지만 확신하지 못해 흔들립니다.',
    description:
      '좋은 신호에 설레다가도 작은 변화에 불안해집니다. 감각은 있는데 판단 기준이 아직 없는 상태입니다.',
    scoreRange: '17~22점',
    keywords: '설렘과 불안, 해석 흔들림, 확신 부족, 곱씹기',
    strengths: '상대의 변화에 민감하고 관심이 깊음',
    tips: "신호를 '평소 패턴 대비 달라졌는가'로 비교해 보기\n불안이 올라올 때 친구에게 묻기 전에 내 관찰을 먼저 적기\n확신이 필요하면 짧은 질문으로 직접 확인하기",
    oneLiner: '느끼는 힘은 이미 있습니다. 기준을 하나만 세우면 해석이 안정됩니다',
    shareLine:
      '나의 연애 눈치 레벨: 눈치 초보 🐣 ({score}점/40) 느끼긴 하는데 확신이 흔들린대... 너는 몇 점이야? 점수 인증해줘',
  },
  {
    type: 'Level3',
    emoji: '🌿',
    min: 23,
    max: 28,
    title: '눈치 중수',
    gaugeLabel: '중수',
    levelLine: '연애 눈치: 대체로 정확하지만 가끔 흔들리는 단계',
    shortDescription: '당신은 대부분의 신호를 균형 있게 읽습니다.',
    description:
      '한 장면에 크게 휘둘리지 않으면서도 가끔 의미 부여가 앞서거나 놓치는 순간이 있습니다. 경험이 쌓일수록 정확도가 올라갑니다.',
    scoreRange: '23~28점',
    keywords: '균형, 대체로 정확, 가끔 흔들림, 경험 축적',
    strengths: '신호와 상황을 함께 보고 침착하게 판단함',
    tips: "흔들렸던 해석을 기록해 '맞았던 것/틀렸던 것' 패턴 찾기\n호감 신호와 친절·배려 신호를 구분하는 기준 정리하기\n확인이 필요할 땐 관찰로만 끌지 말고 한 번의 대화로 검증하기",
    oneLiner: '정확도는 경험으로 올라갑니다. 해석을 기록하면 중수에서 고수로 갑니다',
    shareLine:
      '나의 연애 눈치 레벨: 눈치 중수 🌿 ({score}점/40) 대체로 정확한 타입이래ㅋㅋ 너는 몇 점이야? 비교해보자',
  },
  {
    type: 'Level4',
    emoji: '🌳',
    min: 29,
    max: 34,
    title: '눈치 고수',
    gaugeLabel: '고수',
    levelLine: '연애 눈치: 신호를 맥락 속에서 읽는 단계',
    shortDescription: '당신은 말보다 맥락과 반복을 보는 눈치 고수입니다.',
    description:
      '한 번의 행동이 아닌 패턴과 상황을 함께 읽고, 확인이 필요하면 가볍게 검증합니다. 과한 의미 부여와 무시 사이에서 균형을 잡습니다.',
    scoreRange: '29~34점',
    keywords: '맥락, 패턴, 검증, 균형, 차분함',
    strengths: '감정에 휩쓸리지 않고 사실을 근거로 판단하는 능력',
    tips: '읽은 신호를 혼자 가두지 말고 직접 표현해 상대에게 확인받기\n지나친 분석이 타이밍을 놓치지 않는지 점검하기\n눈치와 용기는 별개이니 호감이 확인되면 한 걸음 내딛기',
    oneLiner: '읽는 눈은 충분합니다. 이제 읽은 마음에 응답하는 용기를 더해 보세요',
    shareLine:
      '나의 연애 눈치 레벨: 눈치 고수 🌳 ({score}점/40) 맥락으로 읽는 타입이래! 너는 몇 점이야? 점수 인증 ㄱㄱ',
  },
  {
    type: 'Level5',
    emoji: '🔮',
    min: 35,
    max: 40,
    title: '눈치 도사',
    gaugeLabel: '도사',
    levelLine: '연애 눈치: 신호를 정확히 읽고 현명하게 확인하는 최고 단계',
    shortDescription: '당신은 신호를 정확히 읽고 검증까지 하는 눈치 도사입니다.',
    description:
      '작은 단서를 놓치지 않으면서 과해석하지 않고, 필요할 땐 가볍게 확인해 오해를 줄입니다. 다만 너무 잘 읽는 만큼 상대를 분석 대상으로만 보지 않도록 마음을 열어 두세요.',
    scoreRange: '35~40점',
    keywords: '정확한 해석, 검증, 균형, 섬세함, 현명한 확인',
    strengths: '관찰력과 침착함으로 오해를 줄이고 관계를 부드럽게 이끔',
    tips: '분석에서 멈추지 말고 느낀 마음을 솔직하게 표현하기\n상대가 신호를 서툴게 줄 때 해석보다 먼저 따뜻하게 반응해 주기\n이 노하우를 친구들과 나누기. 당신의 시선이 누군가의 힌트가 됩니다',
    oneLiner: '정확히 읽는 눈에 따뜻하게 응답하는 마음까지 더하면 완벽합니다',
    shareLine:
      '나의 연애 눈치 레벨: 눈치 도사 🔮 ({score}점/40) 읽고 검증까지 하는 타입이래ㅋㅋ 너는 몇 점이야? 인증해봐',
  },
];

export const phase3LoveNunchiLevelQuestions: Phase3LoveNunchiLevelQuestion[] = RAW_QUESTIONS.map(
  (item, index) => ({
    id: index + 1,
    area: item.area,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].questions[index].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].questions[index].opts[oi]),
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
] as const satisfies readonly (keyof Phase3LoveNunchiLevelResultText)[];

export const phase3LoveNunchiLevelResults: Phase3LoveNunchiLevelResult[] = RAW_RESULTS.map((r, ri) => {
  const base: Phase3LoveNunchiLevelResult = {
    type: r.type,
    emoji: r.emoji,
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
    oneLiner: L(r.oneLiner),
    shareLine: L(r.shareLine),
  };
  for (const key of RESULT_TEXT_KEYS) {
    base[key] = withForeign(r[key], (loc) => PHASE3_LOVE_NUNCHI_LEVEL_I18N[loc].results[ri][key]);
  }
  return base;
});

export function calculatePhase3LoveNunchiLevelTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3LoveNunchiLevelResult(total: number): Phase3LoveNunchiLevelResult {
  return (
    phase3LoveNunchiLevelResults.find((r) => total >= r.min && total <= r.max) ??
    phase3LoveNunchiLevelResults[0]
  );
}

/** 평균이 가장 낮은 영역 → 내 눈치 성장 포인트. 전 영역 동점이면 빈 배열 */
export function getPhase3LoveNunchiLevelGrowthPoints(
  answers: number[],
): Phase3LoveNunchiLevelAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_LOVE_NUNCHI_LEVEL_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_LOVE_NUNCHI_LEVEL_AREAS.filter((_, index) => avgs[index] === minAvg).map(
    (area) => area.id,
  );
  if (weak.length === PHASE3_LOVE_NUNCHI_LEVEL_AREAS.length) return [];
  return weak;
}
