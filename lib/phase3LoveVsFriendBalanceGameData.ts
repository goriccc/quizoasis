/**
 * 밸런스 게임 — 연애 vs 우정 극한편
 * slug: phase3-love-vs-friend-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 */

import {
  PHASE3_LOVE_VS_FRIEND_BALANCE_I18N,
  type Phase3LoveVsFriendBalanceForeignLocale,
  type Phase3LoveVsFriendBalanceResultText,
} from './phase3LoveVsFriendBalanceGameI18n';

export type Phase3LoveVsFriendBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveVsFriendBalanceText = Record<Phase3LoveVsFriendBalanceLocaleKey, string>;
export type Phase3LoveVsFriendPolar = 'loyalty' | 'affection' | 'direct' | 'mediate' | 'stat';

function L(ko: string): Phase3LoveVsFriendBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_VS_FRIEND_BALANCE_I18N) as Phase3LoveVsFriendBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveVsFriendBalanceForeignLocale) => string,
): Phase3LoveVsFriendBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3LoveVsFriendBalanceText,
  polar: Phase3LoveVsFriendPolar,
): { text: Phase3LoveVsFriendBalanceText; polar: Phase3LoveVsFriendPolar } {
  return { text: texts, polar };
}

export interface Phase3LoveVsFriendBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3LoveVsFriendBalanceText;
  options: { text: Phase3LoveVsFriendBalanceText; polar: Phase3LoveVsFriendPolar }[];
}

export interface Phase3LoveVsFriendBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3LoveVsFriendBalanceText;
  shortDescription: Phase3LoveVsFriendBalanceText;
  quote: Phase3LoveVsFriendBalanceText;
  description: Phase3LoveVsFriendBalanceText;
  typeLabel: Phase3LoveVsFriendBalanceText;
  characteristics: Phase3LoveVsFriendBalanceText;
  choiceStyle: Phase3LoveVsFriendBalanceText;
  strengths: Phase3LoveVsFriendBalanceText;
  caution: Phase3LoveVsFriendBalanceText;
  goodMatch: Phase3LoveVsFriendBalanceText;
  tips: Phase3LoveVsFriendBalanceText;
  oneLiner: Phase3LoveVsFriendBalanceText;
  shareLine: Phase3LoveVsFriendBalanceText;
}

export function loveVsFriendText(text: Phase3LoveVsFriendBalanceText, locale: string): string {
  const loc = locale as Phase3LoveVsFriendBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3LoveVsFriendBalanceGameResult(
  questions: Phase3LoveVsFriendBalanceGameQuestion[],
  answers: number[],
): string {
  let loyalty = 0;
  let affection = 0;
  let direct = 0;
  let mediate = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'loyalty') loyalty += 1;
    else if (polar === 'affection') affection += 1;
    else if (polar === 'direct') direct += 1;
    else if (polar === 'mediate') mediate += 1;
  });

  const axisA = loyalty >= 3 ? 'loyalty' : 'affection';
  const axisB = direct >= 3 ? 'direct' : 'mediate';

  if (axisA === 'loyalty' && axisB === 'direct') return 'Type1';
  if (axisA === 'loyalty' && axisB === 'mediate') return 'Type2';
  if (axisA === 'affection' && axisB === 'direct') return 'Type3';
  return 'Type4';
}

export const PHASE3_LOVE_VS_FRIEND_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 연애 vs 우정 극한편',
    (loc) => PHASE3_LOVE_VS_FRIEND_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '친구 결혼식 vs 연인 기념일이 겹치면? 12라운드 극한 선택으로 나의 연애·우정 균형 스타일을 알려드립니다.',
    (loc) => PHASE3_LOVE_VS_FRIEND_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '양자택일', '연애테스트'],
    en: PHASE3_LOVE_VS_FRIEND_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_LOVE_VS_FRIEND_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_VS_FRIEND_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_VS_FRIEND_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_VS_FRIEND_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_LOVE_VS_FRIEND_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3LoveVsFriendPolar][] }[] = [
  {
    q: '친한 친구의 결혼식과 연인과의 1주년 기념일이 같은 날이다. 나는?',
    scored: true,
    opts: [
      ['결혼식에 가지만 연인이 서운해하고 기념일이 어긋난다', 'loyalty'],
      ['기념일을 지키지만 친구에게 평생 미안함이 남을 수 있다', 'affection'],
    ],
  },
  {
    q: '연인이 아파서 누워 있는데 오랜 친구가 급하게 도움을 청한다. 나는?',
    scored: true,
    opts: [
      ['연인 곁을 지키지만 친구는 서운함을 느낄 수 있다', 'affection'],
      ['친구에게 달려가지만 아픈 연인이 혼자 있게 된다', 'loyalty'],
    ],
  },
  {
    q: '친구들과 1년 전부터 잡아 둔 여행에 연인이 같은 기간 중요한 일정이 있다고 한다. 나는?',
    scored: true,
    opts: [
      ['여행을 가지만 연인의 일정에 함께하지 못해 미안하다', 'loyalty'],
      ['여행을 포기하지만 친구들과의 약속을 깨게 된다', 'affection'],
    ],
  },
  {
    q: '연인이 내 친구 한 명을 불편해하며 연락을 줄이라고 한다. 나는?',
    scored: true,
    opts: [
      ['연락을 줄이지만 그 친구와의 우정이 멀어질 수 있다', 'affection'],
      ['우정을 지키지만 연인과 갈등이 커질 수 있다', 'loyalty'],
    ],
  },
  {
    q: '한정된 용돈으로 연인 생일 선물과 친구 축하 모임 중 하나만 가능하다. 나는?',
    scored: true,
    opts: [
      ['연인 선물에 쓰지만 친구 모임에서 빠져 어색해진다', 'affection'],
      ['친구 모임에 가지만 연인에게 소홀한 사람이 된다', 'loyalty'],
    ],
  },
  {
    q: '선택을 내린 뒤 상대가 서운해한다. 나는?',
    scored: true,
    opts: [
      ['내 결정이 맞다고 밀고 가지만 관계에 균열이 생길 수 있다', 'direct'],
      ['양쪽을 달래러 다니지만 지쳐서 어느 쪽에도 온전하지 못할 수 있다', 'mediate'],
    ],
  },
  {
    q: '연인과 친구의 일정이 겹쳤다. 나는?',
    scored: true,
    opts: [
      ['양쪽에 시간을 쪼개 잠깐씩 참석하지만 어디서도 집중하지 못한다', 'mediate'],
      ['한쪽만 확실히 선택해 집중하지만 다른 쪽에 실망을 준다', 'direct'],
    ],
  },
  {
    q: '연인과 친구가 서로 불편해한다. 나는?',
    scored: true,
    opts: [
      ['서로 만나지 않게 따로 만나지만 둘 사이 오해는 풀리지 않는다', 'direct'],
      ['두 사람을 억지로 한자리에 불러 화해시키려 하지만 분위기가 더 어색해질 수 있다', 'mediate'],
    ],
  },
  {
    q: '친구와 연인에게 같은 시간에 약속이 잡혔다. 나는?',
    scored: true,
    opts: [
      ['양쪽에 사정을 설명하고 시간을 옮기자고 부탁하지만 둘 다 번거로워한다', 'mediate'],
      ['먼저 잡힌 약속을 지키고 나머지는 거절하지만 서운함을 감수해야 한다', 'direct'],
    ],
  },
  {
    q: '연인과 친구가 같은 부탁을 동시에 해 왔다. 나는?',
    scored: true,
    opts: [
      ['중요도를 혼자 판단해 한쪽만 들어주고 사정은 길게 설명하지 않는다', 'direct'],
      ['양쪽 부탁을 다 들어주려다 일정이 과부하되고 지친다', 'mediate'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 상황은?',
    scored: false,
    opts: [
      ['친구 결혼식에 못 가는 것', 'stat'],
      ['연인과의 기념일을 놓치는 것', 'stat'],
    ],
  },
  {
    q: '둘 중 더 서운한 상황은?',
    scored: false,
    opts: [
      ['친구가 내 연인 때문에 나를 멀리하는 것', 'stat'],
      ['연인이 내 친구 때문에 나를 멀리하는 것', 'stat'],
    ],
  },
];

export const phase3LoveVsFriendBalanceGameQuestions: Phase3LoveVsFriendBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_VS_FRIEND_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_LOVE_VS_FRIEND_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
  'choiceStyle',
  'strengths',
  'caution',
  'goodMatch',
  'tips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3LoveVsFriendBalanceResultText)[];

const KO_RESULTS: Phase3LoveVsFriendBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🛡️',
    title: L('친구를 먼저 챙기고 밀고 가는 사람, 의리 직진파'),
    shortDescription: L('우정을 우선하고 결정을 번복하지 않는 의리형'),
    quote: L('당신은 오랜 친구와의 약속을 중요하게 여기고, 한번 정한 선택을 끝까지 지킵니다.'),
    description: L(
      '신뢰와 의리가 강점이지만, 연인이 후순위로 느끼면 서운함이 쌓일 수 있고 설명 없는 직진은 오해를 부릅니다.',
    ),
    typeLabel: L('의리 직진파 🛡️'),
    characteristics: L('의리·약속·확고함·우정 우선'),
    choiceStyle: L('먼저 한 약속과 오랜 인연을 지키고 번복하지 않음'),
    strengths: L('약속을 지키는 믿음직함과 흔들리지 않는 결단'),
    caution: L('연인에게 설명 없이 결정하면 소외감을 줄 수 있음'),
    goodMatch: L('애정 조율파 (상대가 내 결정 뒤의 마음을 다독여 줌)'),
    tips: L(
      '선택 전에 연인에게 먼저 사정과 이유를 알리기\n연인과 보낼 시간을 미리 따로 확보해 두기\n결정 뒤 "미안하고 고마워" 한마디 건네기',
    ),
    oneLiner: L('의리는 큰 힘입니다. 연인에게 이유를 먼저 말해 주세요'),
    shareLine: L(
      '밸런스 게임 — 연애 vs 우정 극한편 결과: 의리 직진파 🛡️ 친구 먼저 챙기고 밀고 가는 타입이래ㅋㅋ 너는 뭐 나왔어? 친구 결혼식 vs 연인 기념일, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌉',
    title: L('친구를 챙기며 양쪽을 살피는 사람, 의리 조율파'),
    shortDescription: L('우정을 지키면서 연인도 놓치지 않으려는 중재형'),
    quote: L('당신은 친구와의 인연을 소중히 하면서도 연인의 마음까지 챙기려 애씁니다.'),
    description: L(
      '양쪽을 배려하는 따뜻함이 있지만, 모두를 만족시키려다 지칠 수 있고 정작 내 마음은 뒷전이 됩니다.',
    ),
    typeLabel: L('의리 조율파 🌉'),
    characteristics: L('중재·배려·절충·과부하'),
    choiceStyle: L('친구 쪽으로 가되 연인을 달래고 양쪽에 사정을 설명함'),
    strengths: L('양쪽의 마음을 헤아리는 배려와 소통 능력'),
    caution: L('모두를 만족시키려다 에너지가 소진될 수 있음'),
    goodMatch: L('애정 직진파 (상대가 방향을 정해 줘서 부담이 줄어듦)'),
    tips: L(
      "모두를 만족시키려는 대신 '이번엔 한쪽에 집중'하는 기준 세우기\n조율하는 일에 쓰는 시간과 에너지의 한도 정하기\n내 마음이 어느 쪽에 더 가까운지 먼저 적어 보기",
    ),
    oneLiner: L('중재하는 마음은 따뜻합니다. 내 에너지의 한도도 지켜 주세요'),
    shareLine: L(
      '밸런스 게임 — 연애 vs 우정 극한편 결과: 의리 조율파 🌉 친구도 연인도 놓치지 않으려는 중재형이래... 너는 뭐 나왔어? 친구 결혼식 vs 연인 기념일, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type3',
    emoji: '💘',
    title: L('연인을 먼저 챙기고 밀고 가는 사람, 애정 직진파'),
    shortDescription: L('연인을 우선하고 결정을 확고히 밀고 가는 올인형'),
    quote: L('당신은 연인과의 시간을 최우선으로 두고, 선택에 망설임이 적습니다.'),
    description: L(
      '연인에게는 확실한 사랑을 주지만, 친구는 서운함을 느끼고 관계가 멀어질 수 있습니다.',
    ),
    typeLabel: L('애정 직진파 💘'),
    characteristics: L('연인 우선·확고함·올인·친구와의 거리'),
    choiceStyle: L('기념일과 연인의 일정을 우선하고 한 번 정하면 밀고 감'),
    strengths: L('연인에게 확신과 안정감을 주는 헌신'),
    caution: L('친구 관계가 소원해지고 연애가 끝나면 외로워질 수 있음'),
    goodMatch: L('의리 조율파 (상대가 친구 쪽 마음을 이어 주는 다리가 됨)'),
    tips: L(
      '친구와 정기적인 만남을 먼저 일정에 고정해 두기\n친구에게 못 가는 이유를 미리 따뜻하게 전하기\n연애와 별개로 나만의 인간관계를 유지하기',
    ),
    oneLiner: L('사랑에 올인하는 힘은 큽니다. 친구라는 오래된 안식처도 지켜 두세요'),
    shareLine: L(
      '밸런스 게임 — 연애 vs 우정 극한편 결과: 애정 직진파 💘 연인 먼저 챙기고 올인하는 타입이래ㅋㅋ 너는 뭐 나왔어? 친구 결혼식 vs 연인 기념일, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🌷',
    title: L('연인을 챙기며 양쪽을 살피는 사람, 애정 조율파'),
    shortDescription: L('연인을 중심에 두되 친구도 놓치지 않으려는 균형형'),
    quote: L('당신은 연인을 먼저 챙기면서도 친구에게 미안한 마음을 풀려고 노력합니다.'),
    description: L(
      '관계의 균형을 맞추려는 노력이 돋보이지만, 사과와 조율이 반복되면 지치고 어느 쪽에도 온전하지 못하다고 느낄 수 있습니다.',
    ),
    typeLabel: L('애정 조율파 🌷'),
    characteristics: L('균형·미안함·절충·연인 중심'),
    choiceStyle: L('연인 곁을 지키며 친구에게 사정을 설명하고 만회함'),
    strengths: L('섬세한 배려로 연인과 친구 모두의 마음을 살피는 능력'),
    caution: L('미안함이 쌓여 자책하거나 지칠 수 있음'),
    goodMatch: L('의리 직진파 (상대가 방향을 확실히 잡아 줘서 안정됨)'),
    tips: L(
      '만회는 한 번의 진심 어린 약속으로 충분하다고 정하기\n미안한 마음을 자책이 아닌 구체적인 일정으로 바꾸기\n내가 편해지는 선택 기준을 한 가지 정해 두기',
    ),
    oneLiner: L('균형을 잡으려는 마음이 따뜻합니다. 미안함을 일정으로 바꿔 보세요'),
    shareLine: L(
      '밸런스 게임 — 연애 vs 우정 극한편 결과: 애정 조율파 🌷 연인 중심에 두고 친구도 챙기는 균형형이래... 너는 뭐 나왔어? 친구 결혼식 vs 연인 기념일, 너라면 뭐 골라?',
    ),
  },
];

export const phase3LoveVsFriendBalanceGameResults: Phase3LoveVsFriendBalanceGameResult[] =
  KO_RESULTS.map((r, ri) => {
    const merged: Phase3LoveVsFriendBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_LOVE_VS_FRIEND_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  });
