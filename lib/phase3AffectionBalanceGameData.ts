/**
 * 밸런스 게임 — 스킨십·애정표현 극한편
 * slug: phase3-affection-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: word(말) / action(행동) · 축B: abundant(풍성) / restrained(절제)
 */

import {
  PHASE3_AFFECTION_BALANCE_I18N,
  type Phase3AffectionBalanceForeignLocale,
  type Phase3AffectionBalanceResultText,
} from './phase3AffectionBalanceGameI18n';

export type Phase3AffectionBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3AffectionBalanceText = Record<Phase3AffectionBalanceLocaleKey, string>;
export type Phase3AffectionPolar = 'word' | 'action' | 'abundant' | 'restrained' | 'stat';

function L(ko: string): Phase3AffectionBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_AFFECTION_BALANCE_I18N) as Phase3AffectionBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3AffectionBalanceForeignLocale) => string,
): Phase3AffectionBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3AffectionBalanceText,
  polar: Phase3AffectionPolar,
): { text: Phase3AffectionBalanceText; polar: Phase3AffectionPolar } {
  return { text: texts, polar };
}

export interface Phase3AffectionBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3AffectionBalanceText;
  options: { text: Phase3AffectionBalanceText; polar: Phase3AffectionPolar }[];
}

export interface Phase3AffectionBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3AffectionBalanceText;
  shortDescription: Phase3AffectionBalanceText;
  quote: Phase3AffectionBalanceText;
  description: Phase3AffectionBalanceText;
  typeLabel: Phase3AffectionBalanceText;
  characteristics: Phase3AffectionBalanceText;
  livingStyle: Phase3AffectionBalanceText;
  strengths: Phase3AffectionBalanceText;
  caution: Phase3AffectionBalanceText;
  goodMatch: Phase3AffectionBalanceText;
  tips: Phase3AffectionBalanceText;
  oneLiner: Phase3AffectionBalanceText;
  shareLine: Phase3AffectionBalanceText;
}

export function affectionBalanceText(text: Phase3AffectionBalanceText, locale: string): string {
  const loc = locale as Phase3AffectionBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3AffectionBalanceGameResult(
  questions: Phase3AffectionBalanceGameQuestion[],
  answers: number[],
): string {
  let word = 0;
  let action = 0;
  let abundant = 0;
  let restrained = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'word') word += 1;
    else if (polar === 'action') action += 1;
    else if (polar === 'abundant') abundant += 1;
    else if (polar === 'restrained') restrained += 1;
  });

  const axisA = word >= 3 ? 'word' : 'action';
  const axisB = abundant >= 3 ? 'abundant' : 'restrained';

  if (axisA === 'word' && axisB === 'abundant') return 'Type1';
  if (axisA === 'word' && axisB === 'restrained') return 'Type2';
  if (axisA === 'action' && axisB === 'restrained') return 'Type3';
  return 'Type4';
}

export const PHASE3_AFFECTION_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 스킨십·애정표현 극한편',
    (loc) => PHASE3_AFFECTION_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '하루 100번 사랑해 vs 1년에 한 번 진심 편지. 12라운드 극한 선택으로 나의 애정표현 스타일을 알려드립니다.',
    (loc) => PHASE3_AFFECTION_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '스킨십', '사랑표현', '연애테스트'],
    en: PHASE3_AFFECTION_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_AFFECTION_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_AFFECTION_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_AFFECTION_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_AFFECTION_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_AFFECTION_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3AffectionPolar][] }[] = [
  {
    q: '사랑을 전하는 나만의 방식은? 나는?',
    scored: true,
    opts: [
      ['말과 메시지로 전하지만 행동이 따르지 않는다고 느끼게 할 수 있다', 'word'],
      ['행동과 챙김으로 전하지만 마음을 말로 몰라줄 수 있다', 'action'],
    ],
  },
  {
    q: '연인이 힘들어 보이는 날, 나는?',
    scored: true,
    opts: [
      ['말없이 음식을 챙겨 주고 곁에 있지만 위로의 말이 부족해 보일 수 있다', 'action'],
      ['따뜻한 말로 긴 위로를 건네지만 실질적인 도움은 놓칠 수 있다', 'word'],
    ],
  },
  {
    q: '기념일 선물은? 나는?',
    scored: true,
    opts: [
      ['정성 담은 긴 편지를 쓰지만 물건이 없어 아쉬워할 수 있다', 'word'],
      ['필요한 물건을 챙겨 주지만 편지 한 줄 없어 서운해할 수 있다', 'action'],
    ],
  },
  {
    q: '오랜만에 만난 연인에게 나는?',
    scored: true,
    opts: [
      ['말없이 꼭 안아 주지만 보고 싶었다는 말은 못 한다', 'action'],
      ['"보고 싶었어"를 여러 번 말하지만 스킨십은 어색해한다', 'word'],
    ],
  },
  {
    q: '연인이 서운하다고 말했다. 나는?',
    scored: true,
    opts: [
      ['아무 말 없이 손을 잡고 곁에 있어 주지만 이유를 설명하지 않는다', 'action'],
      ['미안한 마음을 길게 말로 설명하지만 곁에 가까이 가지는 않는다', 'word'],
    ],
  },
  {
    q: '연인에게 애정을 표현하는 빈도는? 나는?',
    scored: true,
    opts: [
      ['하루 100번 사랑 표현을 하지만 가치가 가벼워 보일 수 있다', 'abundant'],
      ['아주 가끔 한 번만 하지만 마음이 있는지 의심받을 수 있다', 'restrained'],
    ],
  },
  {
    q: '연인과 길을 걷는 중이다. 나는?',
    scored: true,
    opts: [
      ['사람들 앞에서는 손만 살짝 잡지만 연인이 아쉬워할 수 있다', 'restrained'],
      ['팔짱을 끼고 어깨를 기대지만 연인이 민망해할 수 있다', 'abundant'],
    ],
  },
  {
    q: '연인에게 보내는 메시지는? 나는?',
    scored: true,
    opts: [
      ['사랑 표현과 이모티콘을 가득 담지만 부담스러워할 수 있다', 'abundant'],
      ['짧고 담백하게 보내지만 차갑다고 느낄 수 있다', 'restrained'],
    ],
  },
  {
    q: '기념일 이벤트는? 나는?',
    scored: true,
    opts: [
      ['조용히 식사 한 끼로 마무리하지만 특별함이 덜하다', 'restrained'],
      ['매번 큰 이벤트를 준비하지만 준비와 지출이 부담된다', 'abundant'],
    ],
  },
  {
    q: '연인과 잠들기 전 나는?',
    scored: true,
    opts: [
      ['매일 긴 통화와 굿나잇 인사를 하지만 서로 피곤할 수 있다', 'abundant'],
      ['짧은 인사만 남기고 자지만 아쉬움이 남을 수 있다', 'restrained'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 연인은?',
    scored: false,
    opts: [
      ['하루 100번 사랑한다고 말하는 연인', 'stat'],
      ['1년에 한 번 진심 편지만 쓰는 연인', 'stat'],
    ],
  },
  {
    q: '둘 중 더 서운한 상황은?',
    scored: false,
    opts: [
      ['말은 많은데 행동은 없는 연인', 'stat'],
      ['행동은 있는데 말이 전혀 없는 연인', 'stat'],
    ],
  },
];

export const phase3AffectionBalanceGameQuestions: Phase3AffectionBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_AFFECTION_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_AFFECTION_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3AffectionBalanceResultText)[];

const KO_RESULTS: Phase3AffectionBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '💥',
    title: L('말도 마음도 아낌없이 쏟는 사람, 표현 폭발파'),
    shortDescription: L('사랑을 말과 글로 자주, 크게 전하는 직설형'),
    quote: L('당신은 사랑하면 숨기지 않고 말과 메시지로 아낌없이 표현합니다.'),
    description: L(
      '연인이 마음을 의심할 일이 적고 분위기가 따뜻하지만, 표현이 많은 만큼 상대의 속도와 부담을 놓칠 수 있습니다.',
    ),
    typeLabel: L('표현 폭발파 💥'),
    characteristics: L('직설·자주·메시지·풍성함'),
    livingStyle: L('사랑해와 칭찬을 수시로 말하고 긴 메시지를 보냄'),
    strengths: L('마음이 잘 전해져 안정감을 주는 따뜻한 표현력'),
    caution: L('상대가 표현을 부담스러워하면 거리감이 생길 수 있음'),
    goodMatch: L('표현 서툰파 (내 표현이 상대의 빈칸을 채워 줌)'),
    tips: L(
      '상대의 표현 속도를 관찰해 비슷한 리듬으로 맞추기\n말 뒤에 상대가 좋아하는 행동 한 가지 더하기\n부담스러운지 가끔 가볍게 물어보기',
    ),
    oneLiner: L('아낌없는 표현은 큰 선물입니다. 상대의 속도만 함께 살피세요'),
    shareLine: L(
      '밸런스 게임 — 스킨십·애정표현 극한편 결과: 표현 폭발파 💥 사랑을 아낌없이 쏟는 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 하루 100번 사랑해 vs 1년에 한 번 진심 편지',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌙',
    title: L('말은 아끼되 한마디에 진심을 담는 사람, 표현 은근파'),
    shortDescription: L('말은 적게, 의미는 깊게 전하는 진중형'),
    quote: L('당신은 말을 아끼지만 꺼낼 때는 마음을 꾹꾹 눌러 담습니다.'),
    description: L(
      '한마디의 무게가 크고 진정성이 있지만, 표현이 적어 상대가 확신하지 못할 수 있습니다.',
    ),
    typeLabel: L('표현 은근파 🌙'),
    characteristics: L('진중·편지·한마디·깊은 의미'),
    livingStyle: L('평소엔 담백하지만 기념일에 정성 담은 편지를 씀'),
    strengths: L('말이 가볍지 않아 신뢰를 주는 진정성'),
    caution: L('평소 표현이 적어 상대가 불안해할 수 있음'),
    goodMatch: L('행동 우선파 (상대의 행동이 내 말의 빈칸을 채워 줌)'),
    tips: L(
      '평소에 짧은 안부 한 줄을 가볍게 더하기\n편지처럼 큰 표현 사이에 작은 표현을 자주 끼워 넣기\n마음이 전해졌는지 가끔 물어보기',
    ),
    oneLiner: L('한마디의 무게는 큰 힘입니다. 가벼운 한마디도 더해 보세요'),
    shareLine: L(
      '밸런스 게임 — 스킨십·애정표현 극한편 결과: 표현 은근파 🌙 말은 아끼고 한마디에 진심 담는 타입이래... 이 라운드 너라면 뭐 골라? 하루 100번 사랑해 vs 1년에 한 번 진심 편지',
    ),
  },
  {
    type: 'Type3',
    emoji: '🌫️',
    title: L('말도 행동도 아껴 마음이 안 보이는 사람, 표현 서툰파'),
    shortDescription: L('마음은 큰데 표현 방법을 잘 모르는 조용형'),
    quote: L('당신은 마음은 깊지만 말과 행동으로 꺼내는 방법이 아직 서툽니다.'),
    description: L(
      '상대가 마음을 읽기 어려워 오해가 쌓일 수 있고, 마음이 있다는 사실이 전달되지 않을 수 있습니다.',
    ),
    typeLabel: L('표현 서툰파 🌫️'),
    characteristics: L('서툼·침묵·큰 마음·오해 위험'),
    livingStyle: L('말은 짧고 스킨십도 적어 마음이 잘 안 보임'),
    strengths: L('감정이 진지하고 가볍게 표현하지 않는 깊이'),
    caution: L('표현 부족으로 상대가 사랑받지 못한다고 느낄 수 있음'),
    goodMatch: L('표현 폭발파 (상대의 표현이 내 마음의 통로가 됨)'),
    tips: L(
      '하루 한 번 "고마워" 같은 짧은 표현부터 시작하기\n말이 어려우면 작은 선물이나 메시지로 대신 전하기\n"표현이 서툴 뿐 마음은 크다"고 미리 알려 주기',
    ),
    oneLiner: L('마음이 크다는 사실이 전해져야 합니다. 한마디 표현이 첫걸음입니다'),
    shareLine: L(
      '밸런스 게임 — 스킨십·애정표현 극한편 결과: 표현 서툰파 🌫️ 마음은 큰데 표현이 서툰 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 하루 100번 사랑해 vs 1년에 한 번 진심 편지',
    ),
  },
  {
    type: 'Type4',
    emoji: '🤝',
    title: L('행동으로 사랑을 보여 주는 사람, 행동 우선파'),
    shortDescription: L('챙김과 스킨십으로 마음을 전하는 실천형'),
    quote: L('당신은 말보다 행동으로 사랑을 보여 줍니다. 챙기고 안아 주고 곁에 있어 줍니다.'),
    description: L(
      '실질적인 안정감을 주지만, 마음을 말로 듣고 싶어 하는 상대는 아쉬울 수 있습니다.',
    ),
    typeLabel: L('행동 우선파 🤝'),
    characteristics: L('챙김·스킨십·실천·곁에 있음'),
    livingStyle: L('음식을 챙기고 안아 주며 곁을 지킴'),
    strengths: L('말보다 확실한 행동으로 신뢰와 안정감을 줌'),
    caution: L('상대가 말로 확인받고 싶을 때 공백이 생김'),
    goodMatch: L('표현 은근파 (서로 다른 방식이 서로의 빈칸을 채움)'),
    tips: L(
      '행동 뒤에 "네가 소중해서 챙겼어" 한마디 덧붙이기\n상대가 좋아하는 표현 방식(말·선물·시간)을 물어보기\n스킨십은 상대의 편안함과 동의를 확인하며 속도 맞추기',
    ),
    oneLiner: L('행동은 가장 믿음직한 언어입니다. 한마디만 더하면 더 선명해집니다'),
    shareLine: L(
      '밸런스 게임 — 스킨십·애정표현 극한편 결과: 행동 우선파 🤝 말보다 행동으로 보여 주는 타입이래... 이 라운드 너라면 뭐 골라? 하루 100번 사랑해 vs 1년에 한 번 진심 편지',
    ),
  },
];

export const phase3AffectionBalanceGameResults: Phase3AffectionBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3AffectionBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_AFFECTION_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
