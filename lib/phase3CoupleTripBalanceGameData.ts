/**
 * 밸런스 게임 — 커플 여행 극한편
 * slug: phase3-couple-trip-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: plan(계획) / improv(즉흥) · 축B: rest(휴식) / active(활동)
 */

import {
  PHASE3_COUPLE_TRIP_BALANCE_I18N,
  type Phase3CoupleTripBalanceForeignLocale,
  type Phase3CoupleTripBalanceResultText,
} from './phase3CoupleTripBalanceGameI18n';

export type Phase3CoupleTripBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3CoupleTripBalanceText = Record<Phase3CoupleTripBalanceLocaleKey, string>;
export type Phase3CoupleTripPolar = 'plan' | 'improv' | 'rest' | 'active' | 'stat';

function L(ko: string): Phase3CoupleTripBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_COUPLE_TRIP_BALANCE_I18N) as Phase3CoupleTripBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3CoupleTripBalanceForeignLocale) => string,
): Phase3CoupleTripBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3CoupleTripBalanceText,
  polar: Phase3CoupleTripPolar,
): { text: Phase3CoupleTripBalanceText; polar: Phase3CoupleTripPolar } {
  return { text: texts, polar };
}

export interface Phase3CoupleTripBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3CoupleTripBalanceText;
  options: { text: Phase3CoupleTripBalanceText; polar: Phase3CoupleTripPolar }[];
}

export interface Phase3CoupleTripBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3CoupleTripBalanceText;
  shortDescription: Phase3CoupleTripBalanceText;
  quote: Phase3CoupleTripBalanceText;
  description: Phase3CoupleTripBalanceText;
  typeLabel: Phase3CoupleTripBalanceText;
  characteristics: Phase3CoupleTripBalanceText;
  livingStyle: Phase3CoupleTripBalanceText;
  strengths: Phase3CoupleTripBalanceText;
  caution: Phase3CoupleTripBalanceText;
  goodMatch: Phase3CoupleTripBalanceText;
  tips: Phase3CoupleTripBalanceText;
  oneLiner: Phase3CoupleTripBalanceText;
  shareLine: Phase3CoupleTripBalanceText;
}

export function coupleTripBalanceText(text: Phase3CoupleTripBalanceText, locale: string): string {
  const loc = locale as Phase3CoupleTripBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3CoupleTripBalanceGameResult(
  questions: Phase3CoupleTripBalanceGameQuestion[],
  answers: number[],
): string {
  let plan = 0;
  let improv = 0;
  let rest = 0;
  let active = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'plan') plan += 1;
    else if (polar === 'improv') improv += 1;
    else if (polar === 'rest') rest += 1;
    else if (polar === 'active') active += 1;
  });

  const axisA = plan >= 3 ? 'plan' : 'improv';
  const axisB = rest >= 3 ? 'rest' : 'active';

  if (axisA === 'plan' && axisB === 'active') return 'Type1';
  if (axisA === 'improv' && axisB === 'rest') return 'Type2';
  if (axisA === 'plan' && axisB === 'rest') return 'Type3';
  return 'Type4';
}

export const PHASE3_COUPLE_TRIP_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 커플 여행 극한편',
    (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인. 12라운드 극한 선택으로 나의 커플 여행 스타일을 알려드립니다.',
    (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '커플여행', '양자택일', '연애테스트'],
    en: PHASE3_COUPLE_TRIP_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_COUPLE_TRIP_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_COUPLE_TRIP_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_COUPLE_TRIP_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_COUPLE_TRIP_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_COUPLE_TRIP_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3CoupleTripPolar][] }[] = [
  {
    q: '여행 일정을 짠다. 나는?',
    scored: true,
    opts: [
      ['시간대별로 빼곡히 짜 두지만 일정이 틀어지면 크게 스트레스를 받는다', 'plan'],
      ['숙소와 비행기만 잡고 떠나지만 현지에서 헤맬 수 있다', 'improv'],
    ],
  },
  {
    q: '여행 첫날 점심시간이다. 나는?',
    scored: true,
    opts: [
      ['눈에 띄는 가게에 들어가지만 맛이 별로일 수 있다', 'improv'],
      ['미리 찾아 둔 맛집으로 가지만 웨이팅이 길 수 있다', 'plan'],
    ],
  },
  {
    q: '이동 수단을 정한다. 나는?',
    scored: true,
    opts: [
      ['교통편을 모두 예약해 두지만 변경하기가 어렵다', 'plan'],
      ['그때그때 택시나 버스를 고르지만 시간이 늘어질 수 있다', 'improv'],
    ],
  },
  {
    q: '여행 중 날씨가 갑자기 나빠졌다. 나는?',
    scored: true,
    opts: [
      ['일정을 버리고 근처 카페에서 쉬지만 예정한 곳을 놓친다', 'improv'],
      ['준비한 대체 코스로 이동하지만 마음이 급해진다', 'plan'],
    ],
  },
  {
    q: '연인이 갑자기 가고 싶은 곳이 생겼다고 한다. 나는?',
    scored: true,
    opts: [
      ['일정을 바꿔서 따라가지만 이후 일정이 밀린다', 'improv'],
      ['일정대로 가자고 하지만 연인이 아쉬워한다', 'plan'],
    ],
  },
  {
    q: '여행 하루 일과를 정한다. 나는?',
    scored: true,
    opts: [
      ['늦잠 자고 느긋하게 보내지만 볼거리를 놓친 기분이 든다', 'rest'],
      ['아침부터 밤까지 꽉 채워 다니지만 저녁에는 녹초가 된다', 'active'],
    ],
  },
  {
    q: '숙소를 고른다. 나는?',
    scored: true,
    opts: [
      ['저렴한 숙소에 짐만 두고 밖에서 보내지만 잠자리가 불편하다', 'active'],
      ['좋은 숙소에서 푹 쉬지만 밖에 나갈 시간이 줄어든다', 'rest'],
    ],
  },
  {
    q: '여행지에서 오후 시간이다. 나는?',
    scored: true,
    opts: [
      ['카페나 숙소에서 쉬며 충전하지만 연인이 심심해할 수 있다', 'rest'],
      ['체험과 관광을 이어 가지만 체력이 바닥난다', 'active'],
    ],
  },
  {
    q: '연인이 새로운 액티비티를 제안한다. 나는?',
    scored: true,
    opts: [
      ['무섭지만 도전하지만 겁이 나서 기분이 가라앉을 수 있다', 'active'],
      ['거절하고 쉬지만 연인과의 추억을 놓칠 수 있다', 'rest'],
    ],
  },
  {
    q: '여행의 마지막 날이다. 나는?',
    scored: true,
    opts: [
      ['조용히 산책하고 마무리하지만 아쉬움이 남는다', 'rest'],
      ['마지막까지 일정을 채우지만 돌아오는 길이 피곤하다', 'active'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 연인은?',
    scored: false,
    opts: [
      ['여행 중 길을 잃은 연인', 'stat'],
      ['숙소 예약을 실수한 연인', 'stat'],
    ],
  },
  {
    q: '둘 중 더 불편한 여행은?',
    scored: false,
    opts: [
      ['일정이 분 단위로 짜인 빡빡한 여행', 'stat'],
      ['아무 계획 없는 막막한 여행', 'stat'],
    ],
  },
];

export const phase3CoupleTripBalanceGameQuestions: Phase3CoupleTripBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].questions[idx].opts[oi]),
        polar,
      ),
    ),
  }));

const RESULT_TEXT_KEYS = [
  'title',
  'shortDescription',
  'quote',
  'description',
  'typeLabel',
  'characteristics',
  'livingStyle',
  'strengths',
  'caution',
  'goodMatch',
  'tips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3CoupleTripBalanceResultText)[];

const KO_RESULTS: Phase3CoupleTripBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '📋',
    title: L('일정으로 알차게 움직이는 사람, 계획 철저파'),
    shortDescription: L('분 단위 일정으로 여행을 알차게 채우는 설계형'),
    quote: L('당신은 여행을 미리 설계하고 알찬 동선으로 많은 것을 경험하려 합니다.'),
    description: L(
      '효율과 안정감이 강점이지만 일정이 틀어지면 스트레스가 크고 연인이 숨 가빠할 수 있습니다.',
    ),
    typeLabel: L('계획 철저파 📋'),
    characteristics: L('설계, 효율, 알참, 빡빡함'),
    livingStyle: L('예약과 동선을 완벽히 준비하고 하루를 꽉 채움'),
    strengths: L('실수가 적고 많은 경험을 안정적으로 만듦'),
    caution: L('변수에 유연하지 못하고 연인이 지칠 수 있음'),
    goodMatch: L('즉흥 낭만파 (상대가 여유와 낭만을 더해 줌)'),
    tips: L(
      "일정마다 30분 여유 시간을 비워 두기\n하루에 '안 가도 되는 곳' 한 곳을 정해 두기\n연인이 원하는 곳을 하루 한 번 끼워 넣기",
    ),
    oneLiner: L('철저한 준비는 큰 힘입니다. 여백 한 칸이 여행을 숨 쉬게 합니다'),
    shareLine: L(
      '밸런스 게임 — 커플 여행 극한편 결과: 계획 철저파 📋 분 단위로 알차게 짜는 타입이래ㅋㅋ 너는 뭐 나왔어? 여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌅',
    title: L('정해진 것 없이 풍경을 따라가는 사람, 즉흥 낭만파'),
    shortDescription: L('계획 없이 분위기와 풍경에 몸을 맡기는 감성형'),
    quote: L('당신은 발길 닿는 대로 풍경을 즐기며 느긋하게 시간을 보냅니다.'),
    description: L(
      '우연한 설렘을 만들지만 준비가 부족해 헤매거나 놓치는 일이 생길 수 있습니다.',
    ),
    typeLabel: L('즉흥 낭만파 🌅'),
    characteristics: L('낭만, 여유, 우연, 느긋함'),
    livingStyle: L('눈에 띄는 카페에 들어가고 일정은 그날 기분으로 정함'),
    strengths: L('예상 밖의 순간을 낭만으로 바꾸는 여유'),
    caution: L('예약 실수나 길 잃음 같은 변수에 취약함'),
    goodMatch: L('계획 철저파 (상대가 구조를 잡아 줘 내가 마음껏 즐김)'),
    tips: L(
      '숙소와 교통만큼은 미리 확정해 두기\n가고 싶은 곳 세 곳만 후보로 정해 두기\n변수가 생기면 연인과 함께 웃어넘길 문장 정해 두기',
    ),
    oneLiner: L('낭만은 여행의 맛입니다. 최소한의 안전망만 더하면 완벽합니다'),
    shareLine: L(
      '밸런스 게임 — 커플 여행 극한편 결과: 즉흥 낭만파 🌅 풍경 따라 느긋하게 가는 타입이래... 너는 뭐 나왔어? 여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type3',
    emoji: '☕',
    title: L('미리 편하게 준비해 푹 쉬는 사람, 편안 휴식파'),
    shortDescription: L('숙소와 동선을 편하게 세팅하고 충전하는 힐링형'),
    quote: L('당신은 편한 숙소와 여유 있는 동선을 미리 갖춰 두고 푹 쉬는 여행을 합니다.'),
    description: L(
      '체력 소모가 적고 안정적이지만 활동적인 연인은 아쉬워할 수 있습니다.',
    ),
    typeLabel: L('편안 휴식파 ☕'),
    characteristics: L('힐링, 준비된 편안함, 충전, 여유'),
    livingStyle: L('좋은 숙소를 예약하고 일정은 느슨하게 짬'),
    strengths: L('피로가 적고 연인과 여유로운 시간을 만듦'),
    caution: L('새로운 경험이 줄어 단조롭게 느껴질 수 있음'),
    goodMatch: L('액티브 탐험파 (상대가 활기를 더해 균형을 이룸)'),
    tips: L(
      '하루에 하나는 연인이 원하는 활동을 함께 하기\n쉬는 시간과 움직이는 시간을 반반으로 나누기\n새로운 장소 한 곳은 미리 점찍어 두기',
    ),
    oneLiner: L('충전하는 여행은 소중합니다. 활동 하나가 추억을 더해 줍니다'),
    shareLine: L(
      '밸런스 게임 — 커플 여행 극한편 결과: 편안 휴식파 ☕ 미리 편하게 세팅하고 푹 쉬는 타입이래ㅋㅋ 너는 뭐 나왔어? 여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🧭',
    title: L('발길 닿는 대로 탐험하는 사람, 액티브 탐험파'),
    shortDescription: L('계획 없이 움직이며 새로운 곳을 찾아다니는 모험형'),
    quote: L('당신은 즉흥적으로 움직이며 새로운 경험을 찾아다니는 모험가입니다.'),
    description: L(
      '여행이 생생해지지만 체력과 일정, 예산이 흐트러질 수 있고 연인이 따라가기 벅찰 수 있습니다.',
    ),
    typeLabel: L('액티브 탐험파 🧭'),
    characteristics: L('모험, 즉흥, 체력, 새로움'),
    livingStyle: L('눈에 띄는 곳으로 가고 액티비티는 일단 도전함'),
    strengths: L('새로운 경험을 두려워하지 않는 추진력'),
    caution: L('체력 소진과 일정 혼선, 연인의 피로'),
    goodMatch: L('편안 휴식파 (상대가 쉼터를 마련해 균형을 맞춤)'),
    tips: L(
      '하루 한 번은 연인의 휴식 시간을 보장하기\n액티브한 일정은 오전에 몰고 오후는 비우기\n연인의 체력과 컨디션을 먼저 묻고 정하기',
    ),
    oneLiner: L('모험심은 큰 매력입니다. 연인의 속도와 쉼을 함께 챙기세요'),
    shareLine: L(
      '밸런스 게임 — 커플 여행 극한편 결과: 액티브 탐험파 🧭 발길 닿는 대로 모험하는 타입이래... 너는 뭐 나왔어? 여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인, 너라면 뭐 골라?',
    ),
  },
];

export const phase3CoupleTripBalanceGameResults: Phase3CoupleTripBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3CoupleTripBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
