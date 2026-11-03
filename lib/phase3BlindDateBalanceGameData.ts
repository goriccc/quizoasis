/**
 * 밸런스 게임 — 소개팅 극한편
 * slug: phase3-blind-date-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: impression(첫인상) / talk(대화) · 축B: active(적극) / careful(신중)
 */

import {
  PHASE3_BLIND_DATE_BALANCE_I18N,
  type Phase3BlindDateBalanceForeignLocale,
  type Phase3BlindDateBalanceResultText,
} from './phase3BlindDateBalanceGameI18n';

export type Phase3BlindDateBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3BlindDateBalanceText = Record<Phase3BlindDateBalanceLocaleKey, string>;
export type Phase3BlindDatePolar = 'impression' | 'talk' | 'active' | 'careful' | 'stat';

function L(ko: string): Phase3BlindDateBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_BLIND_DATE_BALANCE_I18N) as Phase3BlindDateBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3BlindDateBalanceForeignLocale) => string,
): Phase3BlindDateBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3BlindDateBalanceText,
  polar: Phase3BlindDatePolar,
): { text: Phase3BlindDateBalanceText; polar: Phase3BlindDatePolar } {
  return { text: texts, polar };
}

export interface Phase3BlindDateBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3BlindDateBalanceText;
  options: { text: Phase3BlindDateBalanceText; polar: Phase3BlindDatePolar }[];
}

export interface Phase3BlindDateBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3BlindDateBalanceText;
  shortDescription: Phase3BlindDateBalanceText;
  quote: Phase3BlindDateBalanceText;
  description: Phase3BlindDateBalanceText;
  typeLabel: Phase3BlindDateBalanceText;
  characteristics: Phase3BlindDateBalanceText;
  livingStyle: Phase3BlindDateBalanceText;
  strengths: Phase3BlindDateBalanceText;
  caution: Phase3BlindDateBalanceText;
  goodMatch: Phase3BlindDateBalanceText;
  tips: Phase3BlindDateBalanceText;
  oneLiner: Phase3BlindDateBalanceText;
  shareLine: Phase3BlindDateBalanceText;
}

export function blindDateBalanceText(text: Phase3BlindDateBalanceText, locale: string): string {
  const loc = locale as Phase3BlindDateBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3BlindDateBalanceGameResult(
  questions: Phase3BlindDateBalanceGameQuestion[],
  answers: number[],
): string {
  let impression = 0;
  let talk = 0;
  let active = 0;
  let careful = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'impression') impression += 1;
    else if (polar === 'talk') talk += 1;
    else if (polar === 'active') active += 1;
    else if (polar === 'careful') careful += 1;
  });

  const axisA = impression >= 3 ? 'impression' : 'talk';
  const axisB = active >= 3 ? 'active' : 'careful';

  if (axisA === 'impression' && axisB === 'active') return 'Type1';
  if (axisA === 'impression' && axisB === 'careful') return 'Type2';
  if (axisA === 'talk' && axisB === 'active') return 'Type3';
  return 'Type4';
}

export const PHASE3_BLIND_DATE_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 소개팅 극한편',
    (loc) => PHASE3_BLIND_DATE_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '소개팅 상대가 15분 늦게 왔는데 사과 없음 vs 사과는 하는데 계속 폰 봄. 12라운드 극한 선택으로 나의 소개팅 스타일을 알려드립니다.',
    (loc) => PHASE3_BLIND_DATE_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '소개팅', '양자택일', '연애테스트'],
    en: PHASE3_BLIND_DATE_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_BLIND_DATE_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_BLIND_DATE_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_BLIND_DATE_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_BLIND_DATE_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_BLIND_DATE_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3BlindDatePolar][] }[] = [
  {
    q: '소개팅에서 상대를 판단하는 기준은? 나는?',
    scored: true,
    opts: [
      ['외모와 태도, 시간 약속 같은 첫인상을 먼저 보지만 숨은 매력을 놓칠 수 있다', 'impression'],
      ['대화가 통하는지를 먼저 보지만 첫인상의 위험 신호를 늦게 알아챌 수 있다', 'talk'],
    ],
  },
  {
    q: '상대가 호감형은 아닌데 대화가 놀랍도록 잘 통한다. 나는?',
    scored: true,
    opts: [
      ['대화에 끌려 두 번째 만남을 이어 가지만 설렘이 안 올 수 있다', 'talk'],
      ['첫인상이 마음에 걸려 접지만 잘 맞는 사람을 놓칠 수 있다', 'impression'],
    ],
  },
  {
    q: '상대가 15분 늦게 왔는데 사과가 없다. 나는?',
    scored: true,
    opts: [
      ['태도에 실망해 일찍 마음을 접지만 사정이 있었을지도 모른다', 'impression'],
      ['일단 대화를 해 보지만 마음 한구석이 계속 불편하다', 'talk'],
    ],
  },
  {
    q: '대화 중 상대가 말은 잘하는데 내 이야기는 거의 듣지 않는다. 나는?',
    scored: true,
    opts: [
      ['재미있게 들으며 이어 가지만 일방적인 소통이 아쉽다', 'talk'],
      ['배려 부족이라 판단해 마음을 접지만 대화가 재밌었던 건 사실이다', 'impression'],
    ],
  },
  {
    q: '상대가 사과는 하는데 데이트 내내 휴대폰을 자주 본다. 나는?',
    scored: true,
    opts: [
      ['대화 흐름을 보고 판단하겠다며 더 지켜보지만 존중받지 못하는 기분이 든다', 'talk'],
      ['태도가 신호라고 보고 일찍 끝내지만 사정을 모른 채 단정할 수 있다', 'impression'],
    ],
  },
  {
    q: '소개팅 첫 5분의 어색한 분위기다. 나는?',
    scored: true,
    opts: [
      ['내가 먼저 질문을 던져 분위기를 끌지만 과하게 애쓴 인상을 줄 수 있다', 'active'],
      ['상대의 반응을 보며 천천히 말을 꺼내지만 침묵이 길어질 수 있다', 'careful'],
    ],
  },
  {
    q: '마음에 드는 상대가 생겼다. 나는?',
    scored: true,
    opts: [
      ['상대의 호감 신호가 확실해질 때까지 기다리지만 기회를 놓칠 수 있다', 'careful'],
      ['바로 호감을 표현하고 다음 약속을 잡지만 거절당할 수 있다', 'active'],
    ],
  },
  {
    q: '소개팅이 끝날 즈음이다. 나는?',
    scored: true,
    opts: [
      ['그 자리에서 다음 만남을 제안하지만 상대가 부담스러워할 수 있다', 'active'],
      ['집에 와서 메시지로 천천히 전하지만 그 사이 열기가 식을 수 있다', 'careful'],
    ],
  },
  {
    q: '상대가 애매한 반응을 보이며 헤어졌다. 나는?',
    scored: true,
    opts: [
      ['연락을 기다리며 지켜보지만 아무 일도 안 일어날 수 있다', 'careful'],
      ['먼저 안부를 보내 반응을 확인하지만 부담을 줄 수 있다', 'active'],
    ],
  },
  {
    q: '주선자가 상대의 속마음을 알려 줄 수 있다고 한다. 나는?',
    scored: true,
    opts: [
      ['바로 물어봐서 확인하지만 결과가 기대와 다를 수 있다', 'active'],
      ['듣지 않고 스스로 확인하려 하지만 오래 헷갈릴 수 있다', 'careful'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 상대는?',
    scored: false,
    opts: [
      ['15분 늦게 왔는데 사과 없는 상대', 'stat'],
      ['사과는 하는데 계속 폰을 보는 상대', 'stat'],
    ],
  },
  {
    q: '둘 중 더 아쉬운 소개팅은?',
    scored: false,
    opts: [
      ['매너는 완벽한데 대화가 안 통하는 상대', 'stat'],
      ['대화는 통하는데 매너가 아쉬운 상대', 'stat'],
    ],
  },
];

export const phase3BlindDateBalanceGameQuestions: Phase3BlindDateBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_BLIND_DATE_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_BLIND_DATE_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3BlindDateBalanceResultText)[];

const KO_RESULTS: Phase3BlindDateBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '⚡',
    title: L('신호를 먼저 보고 먼저 움직이는 사람, 첫인상 적극파'),
    shortDescription: L('태도 신호로 빠르게 판단하고 직진하는 결단형'),
    quote: L('당신은 첫인상과 태도를 기준으로 빠르게 판단하고, 마음이 가면 먼저 움직입니다.'),
    description: L(
      '결단이 빨라 시간을 아끼지만, 첫인상 판단이 성급하면 좋은 인연을 놓치고 직진이 부담이 될 수 있습니다.',
    ),
    typeLabel: L('첫인상 적극파 ⚡'),
    characteristics: L('빠른 판단·직진·태도 중시·결단'),
    livingStyle: L('첫 5분에 느낌을 정하고 마음에 들면 먼저 다음 약속을 제안함'),
    strengths: L('시간을 낭비하지 않는 결단력과 솔직한 호감 표현'),
    caution: L('첫인상에 갇혀 숨은 매력을 놓칠 수 있음'),
    goodMatch: L('대화 신중파 (내가 이끌면 상대가 천천히 마음을 열어 줌)'),
    tips: L(
      "첫인상 느낌을 '가설'로 두고 대화에서 다른 점 두 가지 찾기\n마음에 들어도 제안은 상대 반응을 한 번 확인한 뒤 하기\n두 번째 만남을 한 번은 열어 두기",
    ),
    oneLiner: L('결단은 강점입니다. 첫 느낌을 한 번만 더 확인해 보세요'),
    shareLine: L(
      '밸런스 게임 — 소개팅 극한편 결과: 첫인상 적극파 ⚡ 태도로 빠르게 판단하고 직진하는 타입이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 15분 지각 사과 없음 vs 사과하고 폰만 봄?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🔎',
    title: L('신호를 보며 천천히 움직이는 사람, 첫인상 신중파'),
    shortDescription: L('태도를 꼼꼼히 관찰하고 확신이 선 뒤 움직이는 관찰형'),
    quote: L('당신은 태도와 매너를 세심히 살피고, 확신이 생길 때까지 조용히 지켜봅니다.'),
    description: L(
      '안전한 선택을 하지만 신중함이 길면 기회가 지나가고 상대는 내 마음을 알기 어렵습니다.',
    ),
    typeLabel: L('첫인상 신중파 🔎'),
    characteristics: L('관찰·매너 기준·확인·기다림'),
    livingStyle: L('상대의 시간·태도를 살피며 호감 표현은 천천히 함'),
    strengths: L('위험 신호를 잘 알아채는 안정적인 판단'),
    caution: L('신호를 기다리다 타이밍을 놓칠 수 있음'),
    goodMatch: L('대화 적극파 (상대가 먼저 다가와 주어 내 관찰이 편해짐)'),
    tips: L(
      "호감이 있으면 작은 신호(안부 한 줄)를 먼저 보내기\n관찰 기준을 '반드시 필요한 3가지'로 줄이기\n기다림의 기한을 정해 두기",
    ),
    oneLiner: L('관찰하는 눈은 큰 자산입니다. 작은 신호 하나를 먼저 보내 보세요'),
    shareLine: L(
      '밸런스 게임 — 소개팅 극한편 결과: 첫인상 신중파 🔎 태도를 꼼꼼히 살피고 움직이는 타입이래... 나와 같은 선택 몇 %인지 인증! 15분 지각 사과 없음 vs 사과하고 폰만 봄?',
    ),
  },
  {
    type: 'Type3',
    emoji: '💬',
    title: L('대화를 보고 먼저 다가가는 사람, 대화 적극파'),
    shortDescription: L('대화 호흡으로 판단하고 적극적으로 이끄는 소통형'),
    quote: L('당신은 대화가 통하는지를 가장 중요하게 보고, 마음이 맞으면 적극적으로 다가갑니다.'),
    description: L(
      '분위기를 편하게 만들고 호감도 잘 표현하지만, 대화의 즐거움이 매너 신호를 가릴 수 있습니다.',
    ),
    typeLabel: L('대화 적극파 💬'),
    characteristics: L('소통·호흡·적극·분위기 리드'),
    livingStyle: L('질문을 먼저 던지고 대화가 맞으면 바로 다음 약속을 제안함'),
    strengths: L('편안한 분위기를 만들고 호감을 자연스럽게 표현하는 능력'),
    caution: L('대화 재미에 빠져 태도 신호를 놓칠 수 있음'),
    goodMatch: L('첫인상 신중파 (상대가 중심을 잡고 내가 분위기를 살림)'),
    tips: L(
      '대화가 즐거울 때 상대의 시간·배려 신호도 한 가지 점검하기\n상대가 말할 시간도 충분히 주기\n제안은 상대의 호응을 확인한 뒤 하기',
    ),
    oneLiner: L('대화로 마음을 여는 힘이 강점입니다. 태도 신호도 함께 봐 주세요'),
    shareLine: L(
      '밸런스 게임 — 소개팅 극한편 결과: 대화 적극파 💬 대화 호흡 보고 먼저 다가가는 타입이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 15분 지각 사과 없음 vs 사과하고 폰만 봄?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🌙',
    title: L('대화를 보고 천천히 마음 여는 사람, 대화 신중파'),
    shortDescription: L('대화의 결을 천천히 느끼며 마음을 키우는 숙성형'),
    quote: L('당신은 대화가 쌓일수록 마음이 열리고, 서두르지 않고 천천히 다가갑니다.'),
    description: L(
      '깊은 호감이 자라지만 소개팅 한 번으로는 신호가 약해 상대가 확신하기 어렵습니다.',
    ),
    typeLabel: L('대화 신중파 🌙'),
    characteristics: L('숙성·경청·천천히·약한 신호'),
    livingStyle: L('상대의 이야기를 듣고 헤어진 뒤 천천히 마음을 정리함'),
    strengths: L('깊이 있는 경청과 진정성 있는 호감'),
    caution: L('신호가 약해 좋은 인연이 지나갈 수 있음'),
    goodMatch: L('첫인상 적극파 (상대가 이끌어 주어 내 마음이 열리기 쉬움)'),
    tips: L(
      '헤어진 당일 "오늘 즐거웠어요" 한 줄 보내기\n내 속도를 "저는 천천히 가까워지는 편이에요"라고 미리 알리기\n두 번째 만남을 가볍게 먼저 제안해 보기',
    ),
    oneLiner: L('천천히 여는 마음은 깊습니다. 작은 신호 하나가 닿게 합니다'),
    shareLine: L(
      '밸런스 게임 — 소개팅 극한편 결과: 대화 신중파 🌙 대화가 쌓일수록 마음 여는 타입이래... 나와 같은 선택 몇 %인지 인증! 15분 지각 사과 없음 vs 사과하고 폰만 봄?',
    ),
  },
];

export const phase3BlindDateBalanceGameResults: Phase3BlindDateBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3BlindDateBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_BLIND_DATE_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
