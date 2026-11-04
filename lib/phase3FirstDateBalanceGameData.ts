/**
 * 밸런스 게임 — 첫 데이트 극한편
 * slug: phase3-first-date-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: manner(매너) / spark(설렘) · 축B: plan(계획) / improv(즉흥)
 */

import {
  PHASE3_FIRST_DATE_BALANCE_I18N,
  type Phase3FirstDateBalanceForeignLocale,
  type Phase3FirstDateBalanceResultText,
} from './phase3FirstDateBalanceGameI18n';

export type Phase3FirstDateBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FirstDateBalanceText = Record<Phase3FirstDateBalanceLocaleKey, string>;
export type Phase3FirstDatePolar = 'manner' | 'spark' | 'plan' | 'improv' | 'stat';

function L(ko: string): Phase3FirstDateBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_FIRST_DATE_BALANCE_I18N) as Phase3FirstDateBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3FirstDateBalanceForeignLocale) => string,
): Phase3FirstDateBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3FirstDateBalanceText,
  polar: Phase3FirstDatePolar,
): { text: Phase3FirstDateBalanceText; polar: Phase3FirstDatePolar } {
  return { text: texts, polar };
}

export interface Phase3FirstDateBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3FirstDateBalanceText;
  options: { text: Phase3FirstDateBalanceText; polar: Phase3FirstDatePolar }[];
}

export interface Phase3FirstDateBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3FirstDateBalanceText;
  shortDescription: Phase3FirstDateBalanceText;
  quote: Phase3FirstDateBalanceText;
  description: Phase3FirstDateBalanceText;
  typeLabel: Phase3FirstDateBalanceText;
  characteristics: Phase3FirstDateBalanceText;
  livingStyle: Phase3FirstDateBalanceText;
  strengths: Phase3FirstDateBalanceText;
  caution: Phase3FirstDateBalanceText;
  goodMatch: Phase3FirstDateBalanceText;
  tips: Phase3FirstDateBalanceText;
  oneLiner: Phase3FirstDateBalanceText;
  shareLine: Phase3FirstDateBalanceText;
}

export function firstDateBalanceText(text: Phase3FirstDateBalanceText, locale: string): string {
  const loc = locale as Phase3FirstDateBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3FirstDateBalanceGameResult(
  questions: Phase3FirstDateBalanceGameQuestion[],
  answers: number[],
): string {
  let manner = 0;
  let spark = 0;
  let plan = 0;
  let improv = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'manner') manner += 1;
    else if (polar === 'spark') spark += 1;
    else if (polar === 'plan') plan += 1;
    else if (polar === 'improv') improv += 1;
  });

  const axisA = manner >= 3 ? 'manner' : 'spark';
  const axisB = plan >= 3 ? 'plan' : 'improv';

  if (axisA === 'manner' && axisB === 'plan') return 'Type1';
  if (axisA === 'manner' && axisB === 'improv') return 'Type2';
  if (axisA === 'spark' && axisB === 'plan') return 'Type3';
  return 'Type4';
}

export const PHASE3_FIRST_DATE_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 첫 데이트 극한편',
    (loc) => PHASE3_FIRST_DATE_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '첫 데이트에서 5분 늦은 상대 vs 휴대폰만 보는 상대. 12라운드 극한 선택으로 나의 첫 데이트 스타일을 알려드립니다.',
    (loc) => PHASE3_FIRST_DATE_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '첫데이트', '양자택일', '연애테스트'],
    en: PHASE3_FIRST_DATE_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_FIRST_DATE_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_FIRST_DATE_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_FIRST_DATE_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_FIRST_DATE_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_FIRST_DATE_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3FirstDatePolar][] }[] = [
  {
    q: '첫 데이트 상대를 고른다면? 나는?',
    scored: true,
    opts: [
      ['약속·배려가 완벽한 사람을 고르지만 두근거림은 적을 수 있다', 'manner'],
      ['두근거리는 사람을 고르지만 시간 약속에 느슨할 수 있다', 'spark'],
    ],
  },
  {
    q: '상대가 약속 시간에 5분 늦었는데 외모가 완전 내 스타일이다. 나는?',
    scored: true,
    opts: [
      ['5분쯤은 넘기고 분위기를 즐기지만 습관일까 마음에 걸린다', 'spark'],
      ['늦은 게 신경 쓰여 호감이 식지만 외모는 아쉽다', 'manner'],
    ],
  },
  {
    q: '식사 중 상대가 종업원에게 반말을 하는데 대화는 너무 재밌다. 나는?',
    scored: true,
    opts: [
      ['태도가 마음에 걸려 두 번째 만남은 접지만 재밌는 사람을 놓친다', 'manner'],
      ['대화가 즐거워 넘어가지만 찜찜함이 오래 남는다', 'spark'],
    ],
  },
  {
    q: '상대가 데이트 내내 휴대폰을 자주 보지만 눈빛과 말투에 끌린다. 나는?',
    scored: true,
    opts: [
      ['끌림이 커서 한 번 더 만나 보지만 존중받지 못한다는 느낌이 남는다', 'spark'],
      ['휴대폰 보는 모습에 실망해 마음을 접지만 끌림이 아깝다', 'manner'],
    ],
  },
  {
    q: '상대가 계산할 때 어색하게 머뭇거리는데 같이 있으면 너무 설렌다. 나는?',
    scored: true,
    opts: [
      ['설렘이 커서 괜찮다고 넘기지만 마음 한구석이 불편하다', 'spark'],
      ['배려 부족이 보여 호감이 줄지만 설렘이 아쉽다', 'manner'],
    ],
  },
  {
    q: '첫 데이트 코스를 짠다. 나는?',
    scored: true,
    opts: [
      ['식당·카페·동선을 미리 예약해 두지만 상대가 부담스러워할 수 있다', 'plan'],
      ['만나서 정하지만 마땅한 곳을 못 찾고 헤매다 어색해질 수 있다', 'improv'],
    ],
  },
  {
    q: '데이트 중 분위기 좋은 골목을 발견했다. 나는?',
    scored: true,
    opts: [
      ['예약 시간을 미루고 걸어 보지만 일정이 꼬일 수 있다', 'improv'],
      ['예정대로 움직이지만 놓친 분위기가 두고두고 아쉽다', 'plan'],
    ],
  },
  {
    q: '첫 데이트 전날 밤이다. 나는?',
    scored: true,
    opts: [
      ['대화 주제와 입을 옷까지 정해 두지만 긴장이 더 커진다', 'plan'],
      ['아무 준비 없이 푹 자지만 당일에 말문이 막힐 수 있다', 'improv'],
    ],
  },
  {
    q: '대화가 잘 풀려 예정에 없던 2차를 제안받았다. 나는?',
    scored: true,
    opts: [
      ['흔쾌히 따라가지만 다음 날 일정에 지장이 생긴다', 'improv'],
      ['계획대로 마무리하지만 좋은 흐름이 끊긴다', 'plan'],
    ],
  },
  {
    q: '데이트 비용을 정한다. 나는?',
    scored: true,
    opts: [
      ['예산 상한을 정해 두고 움직이지만 분위기가 계산적으로 보일 수 있다', 'plan'],
      ['그날 기분에 쓰지만 예상보다 지출이 커질 수 있다', 'improv'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 상대는?',
    scored: false,
    opts: [
      ['5분 늦은 상대', 'stat'],
      ['휴대폰만 보는 상대', 'stat'],
    ],
  },
  {
    q: '둘 중 더 불편한 첫 데이트는?',
    scored: false,
    opts: [
      ['예의는 완벽한데 대화가 지루한 상대', 'stat'],
      ['대화는 재밌는데 매너가 아쉬운 상대', 'stat'],
    ],
  },
];

export const phase3FirstDateBalanceGameQuestions: Phase3FirstDateBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_FIRST_DATE_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_FIRST_DATE_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3FirstDateBalanceResultText)[];

const KO_RESULTS: Phase3FirstDateBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '📋',
    title: L('예의가 기본이고 미리 준비하는 사람, 매너 계획파'),
    shortDescription: L('존중과 준비로 신뢰를 쌓는 정석형'),
    quote: L('당신은 시간·배려·태도를 중요하게 보고, 첫 만남도 미리 준비합니다.'),
    description: L(
      '안정감과 신뢰를 주지만 기준이 높으면 좋은 인연을 일찍 거를 수 있고, 준비가 지나치면 긴장이 커집니다.',
    ),
    typeLabel: L('매너 계획파 📋'),
    characteristics: L('예의·준비·신뢰·기준'),
    livingStyle: L('예약하고 일찍 도착하고 상대의 태도를 세심히 살핌'),
    strengths: L('상대에게 안정감과 존중을 주는 태도'),
    caution: L('기준이 높아 작은 실수에 호감이 빨리 식을 수 있음'),
    goodMatch: L('설렘 즉흥파 (내 안정감에 상대의 생기가 더해짐)'),
    tips: L(
      "기준을 '꼭 필요한 3가지'와 '있으면 좋은 것'으로 나누기\n한 번의 실수는 두 번째 만남에서 다시 확인하기\n코스에 여유 시간 30분을 남겨 두기",
    ),
    oneLiner: L('정석은 신뢰를 줍니다. 여유 한 스푼이 매력이 됩니다'),
    shareLine: L(
      '밸런스 게임 — 첫 데이트 극한편 결과: 매너 계획파 📋 존중과 준비로 신뢰 쌓는 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 5분 늦은 상대 vs 휴대폰만 보는 상대',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌿',
    title: L('예의를 보며 흐름을 타는 사람, 매너 즉흥파'),
    shortDescription: L('사람의 태도를 보며 자연스럽게 움직이는 관찰형'),
    quote: L('당신은 상대의 배려를 중요하게 보되 코스는 그날 분위기에 맡깁니다.'),
    description: L(
      '편안한 분위기를 만들지만 준비가 없어 어색한 순간이 올 수 있습니다. 예의에 대한 기준은 엄격한 편입니다.',
    ),
    typeLabel: L('매너 즉흥파 🌿'),
    characteristics: L('관찰·유연함·배려 기준·분위기'),
    livingStyle: L('계획 없이 만나 상대의 태도와 말투를 살핌'),
    strengths: L('자연스러운 분위기와 사람을 보는 눈'),
    caution: L('준비 부족으로 상대가 코스를 떠안을 수 있음'),
    goodMatch: L('설렘 계획파 (상대가 코스를 잡아 주고 내가 분위기를 살림)'),
    tips: L(
      '후보 장소 두 곳만 미리 정해 두기\n상대의 태도에서 좋았던 점도 함께 기억하기\n대화 소재 두세 개만 가볍게 준비하기',
    ),
    oneLiner: L('흐름을 읽는 눈이 강점입니다. 후보 두 곳이면 충분합니다'),
    shareLine: L(
      '밸런스 게임 — 첫 데이트 극한편 결과: 매너 즉흥파 🌿 태도를 보며 흐름 타는 타입이래... 이 라운드 너라면 뭐 골라? 5분 늦은 상대 vs 휴대폰만 보는 상대',
    ),
  },
  {
    type: 'Type3',
    emoji: '💘',
    title: L('끌림이 먼저이고 꼼꼼히 준비하는 사람, 설렘 계획파'),
    shortDescription: L('설레는 상대를 위해 코스를 설계하는 열정형'),
    quote: L('당신은 마음이 끌리면 코스와 분위기까지 미리 설계합니다.'),
    description: L(
      '호감을 행동으로 보여 주지만, 설렘이 커서 상대의 작은 매너 문제를 놓칠 수 있고 준비가 부담으로 전해질 수 있습니다.',
    ),
    typeLabel: L('설렘 계획파 💘'),
    characteristics: L('끌림·설계·열정·콩깍지'),
    livingStyle: L('설레는 상대에게 맞춰 예약과 코스를 준비함'),
    strengths: L('호감을 구체적인 정성으로 표현하는 힘'),
    caution: L('콩깍지로 상대의 태도 신호를 놓칠 수 있음'),
    goodMatch: L('매너 즉흥파 (상대가 중심을 잡아 줌)'),
    tips: L(
      "데이트 뒤 '좋았던 점'과 '마음에 걸린 점'을 함께 적기\n준비는 70%만 하고 나머지는 열어 두기\n상대의 태도를 세 번 만나는 동안 관찰하기",
    ),
    oneLiner: L('정성은 큰 매력입니다. 상대의 태도도 함께 봐 주세요'),
    shareLine: L(
      '밸런스 게임 — 첫 데이트 극한편 결과: 설렘 계획파 💘 끌리면 코스까지 설계하는 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 5분 늦은 상대 vs 휴대폰만 보는 상대',
    ),
  },
  {
    type: 'Type4',
    emoji: '✨',
    title: L('끌림을 따라 즉흥으로 움직이는 사람, 설렘 즉흥파'),
    shortDescription: L('분위기와 끌림에 몸을 맡기는 자유형'),
    quote: L('당신은 설레는 순간에 몰입하고 흐름에 따라 자유롭게 움직입니다.'),
    description: L(
      '생생한 순간을 만들지만 준비 부족이나 지출 과다, 상대 태도 신호를 놓치는 일이 생길 수 있습니다.',
    ),
    typeLabel: L('설렘 즉흥파 ✨'),
    characteristics: L('끌림·즉흥·몰입·자유'),
    livingStyle: L('분위기 따라 2차를 가고 기분 따라 소비함'),
    strengths: L('순간을 즐기고 자연스러운 설렘을 만드는 힘'),
    caution: L('지출과 일정이 흐트러지고 태도 신호를 놓칠 수 있음'),
    goodMatch: L('매너 계획파 (상대가 안정감을 줌)'),
    tips: L(
      '예산 상한만 정해 두기\n설렘이 클 때 상대의 시간·배려 신호를 한 가지 점검하기\n다음 날 일정을 비워 두기\n설렘에 휩쓸려 위험 신호를 반복해 놓치고 상처받는 일이 이어진다면 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('순간을 즐기는 힘은 큰 매력입니다. 신호 점검 하나만 챙기세요'),
    shareLine: L(
      '밸런스 게임 — 첫 데이트 극한편 결과: 설렘 즉흥파 ✨ 끌림 따라 자유롭게 움직이는 타입이래... 이 라운드 너라면 뭐 골라? 5분 늦은 상대 vs 휴대폰만 보는 상대',
    ),
  },
];


export const phase3FirstDateBalanceGameResults: Phase3FirstDateBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3FirstDateBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_FIRST_DATE_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
