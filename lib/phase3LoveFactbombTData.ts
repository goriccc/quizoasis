/**
 * 연애 팩폭 능력 T 테스트
 * slug: phase3-love-factbomb-t
 * 12문항 2지선다 · 직설=1 / 공감=0 합산(0~12) · 5구간
 */

import {
  PHASE3_LOVE_FACTBOMB_T_I18N,
  type Phase3LoveFactbombTForeignLocale,
  type Phase3LoveFactbombTResultText,
} from './phase3LoveFactbombTI18n';

export type Phase3LoveFactbombTLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveFactbombTText = Record<Phase3LoveFactbombTLocaleKey, string>;

function L(ko: string): Phase3LoveFactbombTText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_FACTBOMB_T_I18N) as Phase3LoveFactbombTForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveFactbombTForeignLocale) => string,
): Phase3LoveFactbombTText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3LoveFactbombTQuestion {
  id: number;
  question: Phase3LoveFactbombTText;
  options: { text: Phase3LoveFactbombTText; score: number }[];
}

export interface Phase3LoveFactbombTResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  title: Phase3LoveFactbombTText;
  animal: Phase3LoveFactbombTText;
  animalLine: Phase3LoveFactbombTText;
  gaugeLabel: Phase3LoveFactbombTText;
  shortDescription: Phase3LoveFactbombTText;
  description: Phase3LoveFactbombTText;
  scoreRange: Phase3LoveFactbombTText;
  keywords: Phase3LoveFactbombTText;
  strengths: Phase3LoveFactbombTText;
  caution: Phase3LoveFactbombTText;
  tip: Phase3LoveFactbombTText;
  oneLiner: Phase3LoveFactbombTText;
  /** {score} 치환 */
  shareLine: Phase3LoveFactbombTText;
}

export const PHASE3_LOVE_FACTBOMB_T_MIN = 0;
export const PHASE3_LOVE_FACTBOMB_T_MAX = 12;

export const PHASE3_LOVE_FACTBOMB_T_META = {
  title: withForeign('연애 팩폭 능력 T 테스트', (loc) => PHASE3_LOVE_FACTBOMB_T_I18N[loc].meta.title),
  description: withForeign(
    '연애 상담해 주다 팩폭 날린 적 있나요? 12가지 상담 상황에서 나의 반응을 골라 팩폭 T지수를 알려드립니다.',
    (loc) => PHASE3_LOVE_FACTBOMB_T_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애상담', '연애테스트'],
    en: PHASE3_LOVE_FACTBOMB_T_I18N.en.meta.tags,
    ja: PHASE3_LOVE_FACTBOMB_T_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_FACTBOMB_T_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_FACTBOMB_T_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_FACTBOMB_T_I18N.vi.meta.tags,
    id: PHASE3_LOVE_FACTBOMB_T_I18N.id.meta.tags,
  },
};

export function calculatePhase3LoveFactbombTTotal(answers: number[]): number {
  return answers.reduce((sum, s) => sum + (s ?? 0), 0);
}

export function getPhase3LoveFactbombTResult(total: number): Phase3LoveFactbombTResult {
  const clamped = Math.max(PHASE3_LOVE_FACTBOMB_T_MIN, Math.min(PHASE3_LOVE_FACTBOMB_T_MAX, total));
  const found = phase3LoveFactbombTResults.find((r) => clamped >= r.min && clamped <= r.max);
  return found ?? phase3LoveFactbombTResults[0];
}

export function calculatePhase3LoveFactbombTResult(answers: number[]): string {
  return getPhase3LoveFactbombTResult(calculatePhase3LoveFactbombTTotal(answers)).type;
}

/** T 쪽 비율 0~100 (게이지용). 점수 높을수록 직설 T */
export function getPhase3LoveFactbombTTPercent(total: number): number {
  return Math.round((total / PHASE3_LOVE_FACTBOMB_T_MAX) * 100);
}

/** 메인 동물 × 상대 동물 조합 한 줄 (친구 비교용) */
const ANIMAL_COMBO_LINES_KO: Record<string, string> = {
  'Type1|Type3': '양 × 부엉이 = 포근한 위로와 균형 조언의 조합',
  'Type1|Type4': '양 × 여우 = 안아 주는 사람과 정리해 주는 사람',
  'Type1|Type5': '양 × 늑대 = 위로와 팩폭이 한 팀이 되면 든든함',
  'Type2|Type4': '강아지 × 여우 = 다정함이 직설을 부드럽게 만듦',
  'Type2|Type5': '강아지 × 늑대 = 먼저 듣고 나서 핵심을 짚는 호흡',
  'Type3|Type5': '부엉이 × 늑대 = 균형과 직설이 서로를 보완',
};

export function getPhase3LoveFactbombTAnimalComboLine(
  myType: string,
  friendType: string,
  locale: string = 'ko',
): string | null {
  if (myType === friendType) return null;
  const key = [myType, friendType].sort().join('|');
  if (locale === 'ko') return ANIMAL_COMBO_LINES_KO[key] ?? null;
  const foreign = locale as Phase3LoveFactbombTForeignLocale;
  const bundle = PHASE3_LOVE_FACTBOMB_T_I18N[foreign];
  if (!bundle) return ANIMAL_COMBO_LINES_KO[key] ?? null;
  return bundle.combos[key] ?? ANIMAL_COMBO_LINES_KO[key] ?? null;
}

/** 결과 화면용: 내 유형과 잘 대비되는 예시 조합 2개 */
export function getPhase3LoveFactbombTSampleCombos(myType: string, locale: string = 'ko'): string[] {
  const pairs: Record<string, string[]> = {
    Type1: ['Type4', 'Type5'],
    Type2: ['Type4', 'Type5'],
    Type3: ['Type1', 'Type5'],
    Type4: ['Type1', 'Type2'],
    Type5: ['Type1', 'Type2'],
  };
  return (pairs[myType] || ['Type1', 'Type5'])
    .map((other) => getPhase3LoveFactbombTAnimalComboLine(myType, other, locale))
    .filter((line): line is string => Boolean(line));
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '친구가 "또 읽씹당했어ㅠ"라며 울상이다. 나는?',
    opts: [
      ['"그 사람 연락 패턴이 원래 그런 거야, 기대를 낮춰"', 1],
      ['"속상했겠다, 일단 얘기 더 해 봐"', 0],
    ],
  },
  {
    q: '친구가 헤어진 전 애인에게 연락하고 싶다고 한다. 나는?',
    opts: [
      ['"지금은 마음이 약해져서 그래, 일단 오늘은 참아 보자"', 0],
      ['"연락해서 얻을 게 뭔지 한 줄로 적어 보고 정해"', 1],
    ],
  },
  {
    q: '친구가 "걔가 날 좋아하는 걸까?"라고 묻는다. 나는?',
    opts: [
      ['"행동을 보면 답 나와, 약속을 먼저 잡는지 봐"', 1],
      ['"너한테 어떤 모습이 보였는지 먼저 얘기해 줘"', 0],
    ],
  },
  {
    q: '친구가 매번 비슷한 사람에게 상처받는다. 나는?',
    opts: [
      ['"네가 많이 힘들었겠다, 마음 다독이는 게 먼저야"', 0],
      ['"패턴이 보여, 같은 유형을 계속 고르고 있어"', 1],
    ],
  },
  {
    q: '친구가 상대의 잘못을 길게 하소연한다. 나는?',
    opts: [
      ['"그 상황에서 네가 할 수 있는 선택지는 두 개야"', 1],
      ['"말 안 해도 힘들었던 거 알아, 끝까지 들을게"', 0],
    ],
  },
  {
    q: '친구가 이별 후 한 달째 우울해한다. 나는?',
    opts: [
      ['"그래도 밥은 먹었어? 같이 산책부터 하자"', 0],
      ['"시간이 약이라지만 루틴을 만들어야 빨리 나아"', 1],
    ],
  },
  {
    q: '친구가 "내가 너무 집착한 걸까?"라고 묻는다. 나는?',
    opts: [
      ['"연락 횟수가 상대 대비 많았다면 조절이 필요해"', 1],
      ['"그만큼 불안했던 거지, 네 마음부터 이해해 보자"', 0],
    ],
  },
  {
    q: '친구가 고백할까 말까 고민한다. 나는?',
    opts: [
      ['"떨리는 마음 다 알아, 어떤 결과든 곁에 있을게"', 0],
      ['"반응 신호가 3번 이상 있으면 해, 없으면 기다려"', 1],
    ],
  },
  {
    q: '친구가 연인과 같은 문제로 또 싸웠다. 나는?',
    opts: [
      ['"같은 문제가 반복되면 대화 방식을 바꿔야 해"', 1],
      ['"또 싸워서 지쳤겠다, 오늘은 푹 쉬어"', 0],
    ],
  },
  {
    q: '친구가 상대의 미지근한 태도에 서운하다고 한다. 나는?',
    opts: [
      ['"서운하다고 말해도 괜찮아, 네 감정은 이상하지 않아"', 0],
      ['"서운하다는 말을 안 했으면 상대는 몰라, 말부터 해"', 1],
    ],
  },
  {
    q: '친구가 소개팅에서 별로였다며 투덜댄다. 나는?',
    opts: [
      ['"기준을 3개로 줄여 보면 다음엔 덜 피곤할 거야"', 1],
      ['"에너지 많이 쓰고 왔겠다, 오늘은 수고했어"', 0],
    ],
  },
  {
    q: '친구가 "내가 잘못한 거야?"라고 울며 묻는다. 나는?',
    opts: [
      ['"잘잘못보다 네가 지금 아픈 게 먼저야"', 0],
      ['"네 잘못 한 가지와 상대 잘못 한 가지로 나눠서 보자"', 1],
    ],
  },
];

export const phase3LoveFactbombTQuestions: Phase3LoveFactbombTQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  question: withForeign(item.q, (loc) => PHASE3_LOVE_FACTBOMB_T_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_LOVE_FACTBOMB_T_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS = [
  'title',
  'animal',
  'animalLine',
  'gaugeLabel',
  'shortDescription',
  'description',
  'scoreRange',
  'keywords',
  'strengths',
  'caution',
  'tip',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3LoveFactbombTResultText)[];

const KO_RESULTS: Phase3LoveFactbombTResult[] = [
  {
    type: 'Type1',
    emoji: '🐑',
    min: 0,
    max: 2,
    title: L('눈물 F 위로형'),
    animal: L('양'),
    animalLine: L('곁에서 같이 울어 주는 포근함'),
    gaugeLabel: L('눈물 F'),
    shortDescription: L('당신은 해결보다 마음부터 안아 주는 사람입니다.'),
    description: L(
      '친구가 흔들릴 때 먼저 자리를 내어 주고 감정을 받아 줍니다. T/F는 재미용 비유일 뿐, 위로가 필요한 순간엔 당신이 가장 든든한 상담자입니다.',
    ),
    scoreRange: L('0~2점'),
    keywords: L('공감·위로·경청·정서적 안전'),
    strengths: L('친구가 안심하고 무너질 수 있는 안전한 자리'),
    caution: L('필요한 조언을 미루다 같은 고민이 반복될 수 있음'),
    tip: L('위로한 뒤 "그럼 이제 뭐 해 볼까?" 한 문장 붙이기'),
    oneLiner: L('안아 주는 힘은 큽니다. 다음 걸음을 묻는 한마디가 더해지면 완벽합니다'),
    shareLine: L(
      '연애 팩폭 능력 T 테스트: 눈물 F 위로형 🐑 ({score}점/12) 나 눈물 F 위로형래ㅋㅋ 같이 울어 주는 양이래. 너는 무슨 동물이야?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🐶',
    min: 3,
    max: 5,
    title: L('공감 우선형'),
    animal: L('강아지'),
    animalLine: L('먼저 들어 주고 나서 말하는 다정함'),
    gaugeLabel: L('공감 우선'),
    shortDescription: L('당신은 감정을 먼저 받아 주고 가볍게 방향을 제안합니다.'),
    description: L(
      '공감이 먼저라서 친구는 방어 없이 조언을 받아들이기 쉽습니다. 가끔은 핵심 한마디를 아끼지 않는 것이 더 큰 도움이 됩니다.',
    ),
    scoreRange: L('3~5점'),
    keywords: L('공감 우선·부드러운 조언·타이밍'),
    strengths: L('상대가 방어 없이 조언을 받아들이게 하는 부드러움'),
    caution: L('핵심 지적을 삼켜 속으로 답답해질 수 있음'),
    tip: L('중요한 한 가지는 "이것만 말할게"라고 미리 알리고 전하기'),
    oneLiner: L('다정한 순서는 큰 강점입니다. 핵심 한마디를 아끼지 마세요'),
    shareLine: L(
      '연애 팩폭 능력 T 테스트: 공감 우선형 🐶 ({score}점/12) 먼저 들어 주는 강아지래ㅎㅎ 너는 무슨 동물이야?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🦉',
    min: 6,
    max: 8,
    title: L('균형 조언형'),
    animal: L('부엉이'),
    animalLine: L('마음과 사실을 함께 보는 균형감'),
    gaugeLabel: L('균형'),
    shortDescription: L('당신은 공감과 해결을 함께 건네는 사람입니다.'),
    description: L(
      '위로와 방향을 함께 줘서 친구가 힘을 얻습니다. 다만 지금 상대에게 위로가 필요한지 조언이 필요한지 먼저 물어보면 더 정확해집니다.',
    ),
    scoreRange: L('6~8점'),
    keywords: L('균형·공감 후 조언·현실감'),
    strengths: L('위로와 방향을 함께 줘서 친구가 힘을 얻음'),
    caution: L('친구가 지금 필요한 쪽을 놓칠 수 있음'),
    tip: L('"지금은 위로가 필요해, 조언이 필요해?"라고 먼저 묻기'),
    oneLiner: L('균형 잡힌 상담은 최고의 선물입니다. 상대가 필요한 쪽을 먼저 물어보세요'),
    shareLine: L(
      '연애 팩폭 능력 T 테스트: 균형 조언형 🦉 ({score}점/12) 마음과 사실 다 보는 부엉이래. 너는 무슨 동물이야?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🦊',
    min: 9,
    max: 10,
    title: L('직설 T형'),
    animal: L('여우'),
    animalLine: L('핵심을 빠르게 꿰뚫는 눈치'),
    gaugeLabel: L('직설 T'),
    shortDescription: L('당신은 상황을 정리하고 해결 방향을 먼저 제시하는 사람입니다.'),
    description: L(
      '흐릿한 고민을 선명하게 정리해 주는 분석력이 강점입니다. 감정이 먼저인 친구에게는 온기 한 문장을 앞에 붙이면 훨씬 잘 닿습니다.',
    ),
    scoreRange: L('9~10점'),
    keywords: L('직설·해결 중심·패턴 파악·명료함'),
    strengths: L('흐릿한 고민을 선명하게 정리해 주는 분석력'),
    caution: L('감정이 먼저인 친구에게는 차갑게 들릴 수 있음'),
    tip: L('조언 앞에 "많이 힘들었지" 한 문장을 먼저 붙이기'),
    oneLiner: L('정확함은 큰 힘입니다. 온기 한 문장이 더해지면 훨씬 잘 닿습니다'),
    shareLine: L(
      '연애 팩폭 능력 T 테스트: 직설 T형 🦊 ({score}점/12) 핵심 꿰뚫는 여우래ㅋㅋ 너는 무슨 동물이야?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🐺',
    min: 11,
    max: 12,
    title: L('팩폭 기계형'),
    animal: L('늑대'),
    animalLine: L('돌려 말하지 않는 단단한 의리'),
    gaugeLabel: L('팩폭 기계'),
    shortDescription: L('당신은 듣기 좋은 말보다 도움이 되는 말을 택하는 사람입니다.'),
    description: L(
      '친구가 흔들릴 때 중심을 잡아 주는 솔직함이 있습니다. 준비되지 않은 순간의 직설은 상처가 될 수 있으니, 말하기 전 허락을 구하면 약이 됩니다.',
    ),
    scoreRange: L('11~12점'),
    keywords: L('팩폭·솔직·결단·의리'),
    strengths: L('친구가 흔들릴 때 중심을 잡아 주는 솔직함'),
    caution: L('친구가 준비되지 않은 순간의 직설은 상처가 될 수 있음'),
    tip: L('말하기 전 "팩트 말해도 돼?"라고 허락을 구하기'),
    oneLiner: L('솔직함은 신뢰의 재료입니다. 허락과 온기를 더하면 약이 됩니다'),
    shareLine: L(
      '연애 팩폭 능력 T 테스트: 팩폭 기계형 🐺 ({score}점/12) 돌려 말 안 하는 늑대래ㅋㅋ 너는 무슨 동물이야?',
    ),
  },
];

export const phase3LoveFactbombTResults: Phase3LoveFactbombTResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveFactbombTResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_FACTBOMB_T_I18N[loc].results[ri][key]);
  }
  return merged;
});
