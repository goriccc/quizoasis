/**
 * 밸런스 게임 — 연인의 가족·친구 극한편
 * slug: phase3-partner-circle-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: family(가족) / friend(친구) · 축B: respect(존중) / blend(융화)
 */

import {
  PHASE3_PARTNER_CIRCLE_BALANCE_I18N,
  type Phase3PartnerCircleBalanceForeignLocale,
  type Phase3PartnerCircleBalanceResultText,
} from './phase3PartnerCircleBalanceGameI18n';

export type Phase3PartnerCircleBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3PartnerCircleBalanceText = Record<Phase3PartnerCircleBalanceLocaleKey, string>;
export type Phase3PartnerCirclePolar = 'family' | 'friend' | 'respect' | 'blend' | 'stat';

function L(ko: string): Phase3PartnerCircleBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_PARTNER_CIRCLE_BALANCE_I18N) as Phase3PartnerCircleBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3PartnerCircleBalanceForeignLocale) => string,
): Phase3PartnerCircleBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3PartnerCircleBalanceText,
  polar: Phase3PartnerCirclePolar,
): { text: Phase3PartnerCircleBalanceText; polar: Phase3PartnerCirclePolar } {
  return { text: texts, polar };
}

export interface Phase3PartnerCircleBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3PartnerCircleBalanceText;
  options: { text: Phase3PartnerCircleBalanceText; polar: Phase3PartnerCirclePolar }[];
}

export interface Phase3PartnerCircleBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3PartnerCircleBalanceText;
  shortDescription: Phase3PartnerCircleBalanceText;
  quote: Phase3PartnerCircleBalanceText;
  description: Phase3PartnerCircleBalanceText;
  typeLabel: Phase3PartnerCircleBalanceText;
  characteristics: Phase3PartnerCircleBalanceText;
  livingStyle: Phase3PartnerCircleBalanceText;
  strengths: Phase3PartnerCircleBalanceText;
  caution: Phase3PartnerCircleBalanceText;
  goodMatch: Phase3PartnerCircleBalanceText;
  tips: Phase3PartnerCircleBalanceText;
  oneLiner: Phase3PartnerCircleBalanceText;
  shareLine: Phase3PartnerCircleBalanceText;
}

export function partnerCircleBalanceText(text: Phase3PartnerCircleBalanceText, locale: string): string {
  const loc = locale as Phase3PartnerCircleBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3PartnerCircleBalanceGameResult(
  questions: Phase3PartnerCircleBalanceGameQuestion[],
  answers: number[],
): string {
  let family = 0;
  let friend = 0;
  let respect = 0;
  let blend = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'family') family += 1;
    else if (polar === 'friend') friend += 1;
    else if (polar === 'respect') respect += 1;
    else if (polar === 'blend') blend += 1;
  });

  const axisA = family >= 3 ? 'family' : 'friend';
  const axisB = respect >= 3 ? 'respect' : 'blend';

  if (axisA === 'family' && axisB === 'respect') return 'Type1';
  if (axisA === 'friend' && axisB === 'respect') return 'Type2';
  if (axisA === 'family' && axisB === 'blend') return 'Type3';
  return 'Type4';
}

export const PHASE3_PARTNER_CIRCLE_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 연인의 가족·친구 극한편',
    (loc) => PHASE3_PARTNER_CIRCLE_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리. 12라운드 극한 선택으로 나의 인간관계 스타일을 알려드립니다.',
    (loc) => PHASE3_PARTNER_CIRCLE_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '연인친구', '연애테스트'],
    en: PHASE3_PARTNER_CIRCLE_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_PARTNER_CIRCLE_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_PARTNER_CIRCLE_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_PARTNER_CIRCLE_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_PARTNER_CIRCLE_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_PARTNER_CIRCLE_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3PartnerCirclePolar][] }[] = [
  {
    q: '연인이 누군가를 먼저 소개하고 싶어 한다. 나는?',
    scored: true,
    opts: [
      ['부모님을 먼저 만나지만 어른 앞의 긴장에 식사 내내 체할 것 같다', 'family'],
      ['친구들을 먼저 만나지만 낯선 사람들 사이에서 평가받는 기분이 든다', 'friend'],
    ],
  },
  {
    q: '연인의 생일 자리가 두 곳으로 나뉜다. 나는?',
    scored: true,
    opts: [
      ['친구들 모임에 가지만 가족에게 소홀하다는 인상을 줄 수 있다', 'friend'],
      ['가족 식사에 가지만 친구들 사이에서 나만 빠진 사람이 된다', 'family'],
    ],
  },
  {
    q: '연인의 사람들에게 가장 신경 쓰이는 평판은? 나는?',
    scored: true,
    opts: [
      ['부모님께 성실하다는 인상을 주려 애쓰지만 내 모습이 굳어 보인다', 'family'],
      ['친구들에게 재밌는 사람으로 보이려 애쓰지만 과하게 나대 보인다', 'friend'],
    ],
  },
  {
    q: '연인의 가족 행사와 친구 모임이 같은 주말이다. 나는?',
    scored: true,
    opts: [
      ['친구 모임에 함께하지만 가족 행사에 연인이 혼자 가야 한다', 'friend'],
      ['가족 행사에 함께하지만 친구들과 약속을 미뤄 서운해한다', 'family'],
    ],
  },
  {
    q: '연인의 사람 중 한쪽에게만 선물을 한다면? 나는?',
    scored: true,
    opts: [
      ['친구들에게 챙겨 가지만 가족에게는 빈손이라 마음이 쓰인다', 'friend'],
      ['부모님께 정성껏 챙기지만 친구들은 서운해할 수 있다', 'family'],
    ],
  },
  {
    q: '연인의 사람들과 처음 대화한다. 나는?',
    scored: true,
    opts: [
      ['예의를 지키며 말을 아끼지만 낯가림이 심한 사람으로 보일 수 있다', 'respect'],
      ['먼저 말을 걸고 농담도 하지만 선을 넘었다는 인상을 줄 수 있다', 'blend'],
    ],
  },
  {
    q: '상대 가족이 사생활을 묻는다. 나는?',
    scored: true,
    opts: [
      ['솔직하게 다 대답하지만 이후 질문이 점점 깊어질 수 있다', 'blend'],
      ['정중하게 선을 긋지만 분위기가 서먹해질 수 있다', 'respect'],
    ],
  },
  {
    q: '술자리에서 분위기가 무르익었다. 나는?',
    scored: true,
    opts: [
      ['적당히 마시고 먼저 자리를 정리하지만 어울리지 못했다는 아쉬움이 남는다', 'respect'],
      ['분위기를 같이 타고 끝까지 남지만 다음 날 실수가 걱정된다', 'blend'],
    ],
  },
  {
    q: '연인의 사람들이 단톡방에 초대했다. 나는?',
    scored: true,
    opts: [
      ['바로 들어가 활발히 대화하지만 사생활이 노출된다', 'blend'],
      ['필요할 때만 참여하지만 소외감을 느낄 수 있다', 'respect'],
    ],
  },
  {
    q: '연인의 사람들이 집으로 놀러 오겠다고 한다. 나는?',
    scored: true,
    opts: [
      ['정중하게 다음에 만나자고 하지만 거절로 받아들여질 수 있다', 'respect'],
      ['흔쾌히 초대해 대접하지만 준비와 부담이 크다', 'blend'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 자리는?',
    scored: false,
    opts: [
      ['연인 부모님과의 첫 식사', 'stat'],
      ['연인 친구 열 명과의 술자리', 'stat'],
    ],
  },
  {
    q: '둘 중 더 불편한 상황은?',
    scored: false,
    opts: [
      ['연인 가족이 나를 마음에 들어 하지 않는 것', 'stat'],
      ['연인 친구들이 나를 마음에 들어 하지 않는 것', 'stat'],
    ],
  },
];

export const phase3PartnerCircleBalanceGameQuestions: Phase3PartnerCircleBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_PARTNER_CIRCLE_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_PARTNER_CIRCLE_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3PartnerCircleBalanceResultText)[];

const KO_RESULTS: Phase3PartnerCircleBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🏠',
    title: L('가족 앞에서 예의를 다하는 사람, 가족 존중파'),
    shortDescription: L('어른 앞에서는 예의와 선을 지키는 정석형'),
    quote: L('당신은 연인의 가족을 중요하게 여기고 정중하게 거리를 지키며 신뢰를 쌓습니다.'),
    description: L(
      '어른들에게 안정감을 주지만 낯가림이 길면 친밀감이 늦게 쌓일 수 있습니다.',
    ),
    typeLabel: L('가족 존중파 🏠'),
    characteristics: L('예의·정중함·신뢰·거리 유지'),
    livingStyle: L('인사와 선물을 챙기고 사적인 질문은 정중하게 넘김'),
    strengths: L('가족에게 믿음직한 인상을 주는 예의'),
    caution: L('낯가림으로 마음을 닫은 사람처럼 보일 수 있음'),
    goodMatch: L('친구 융화파 (상대가 친구 쪽을 맡아 균형이 맞음)'),
    tips: L(
      '짧은 안부 연락으로 친밀감을 천천히 쌓기\n사적인 질문은 일부만 답하며 웃음으로 부드럽게 넘기기\n연인에게 내 낯가림을 미리 알려 두기',
    ),
    oneLiner: L('정중함은 신뢰의 시작입니다. 작은 안부가 거리를 줄여 줍니다'),
    shareLine: L(
      '밸런스 게임 — 연인의 가족·친구 극한편 결과: 가족 존중파 🏠 어른 앞에서 예의 다하는 타입이래ㅋㅋ 너는 뭐 나왔어? 연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🤝',
    title: L('친구들을 존중하며 한 발 물러나는 사람, 친구 존중파'),
    shortDescription: L('친구들의 영역을 존중하며 적당히 어울리는 배려형'),
    quote: L('당신은 연인의 친구들을 존중하고 그들의 관계에 무리하게 들어가지 않습니다.'),
    description: L(
      '편한 분위기를 지키지만 어울림이 적어 친밀감이 더딜 수 있습니다.',
    ),
    typeLabel: L('친구 존중파 🤝'),
    characteristics: L('배려·적당한 거리·영역 존중·느린 친밀'),
    livingStyle: L('모임에는 가되 먼저 자리를 정리하고 단톡방은 필요할 때만 참여함'),
    strengths: L('연인의 친구 관계를 침범하지 않는 건강한 배려'),
    caution: L('소외감을 느끼거나 거리감 있는 사람으로 보일 수 있음'),
    goodMatch: L('적극 융화파 (상대가 가족 쪽에 적극적이라 역할이 나뉨)'),
    tips: L(
      '한두 명과 먼저 일대일로 가까워지기\n모임에서 한 가지 역할(사진·주문 등)을 맡아 자연스럽게 섞이기\n거리를 두는 이유가 존중임을 연인에게 설명하기',
    ),
    oneLiner: L('존중은 좋은 태도입니다. 한 사람과의 친해짐이 문을 엽니다'),
    shareLine: L(
      '밸런스 게임 — 연인의 가족·친구 극한편 결과: 친구 존중파 🤝 친구들 영역 존중하며 한 발 물러나는 타입이래... 너는 뭐 나왔어? 연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🌸',
    title: L('가족에게 적극 스며드는 사람, 적극 융화파'),
    shortDescription: L('가족 속으로 먼저 다가가 친해지는 붙임성형'),
    quote: L('당신은 연인의 가족에게 먼저 다가가고 솔직하게 마음을 열어 빨리 가까워집니다.'),
    description: L(
      '가족과 금방 친해지지만 속도가 빠르면 사생활이 노출되거나 경계가 흐려질 수 있습니다.',
    ),
    typeLabel: L('적극 융화파 🌸'),
    characteristics: L('붙임성·솔직함·빠른 친밀·경계 흐림'),
    livingStyle: L('가족 대화에 먼저 참여하고 사적인 질문에도 솔직하게 답함'),
    strengths: L('가족에게 친근하고 따뜻한 인상을 빠르게 줌'),
    caution: L('내 사생활 경계를 놓칠 수 있음'),
    goodMatch: L('친구 존중파 (상대가 친구 쪽 균형을 맞춰 줌)'),
    tips: L(
      '공유할 이야기와 지킬 이야기를 미리 정해 두기\n가까워질수록 연인과 서로 경계를 한 번 확인하기\n친해진 뒤에도 예의의 선을 유지하기',
    ),
    oneLiner: L('붙임성은 큰 장점입니다. 경계 하나만 지키면 더 오래갑니다'),
    shareLine: L(
      '밸런스 게임 — 연인의 가족·친구 극한편 결과: 적극 융화파 🌸 가족에게 먼저 스며드는 타입이래ㅋㅋ 너는 뭐 나왔어? 연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리, 너라면 뭐 골라?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🎉',
    title: L('친구들 속에 빠르게 섞이는 사람, 친구 융화파'),
    shortDescription: L('친구들 틈에서 분위기를 함께 타는 어울림형'),
    quote: L('당신은 연인의 친구들과 금세 편해지고 분위기를 함께 즐깁니다.'),
    description: L(
      '친구들에게 빨리 받아들여지지만 과한 어울림이 실수나 피로로 이어질 수 있습니다.',
    ),
    typeLabel: L('친구 융화파 🎉'),
    characteristics: L('어울림·분위기·빠른 친밀·과한 몰입'),
    livingStyle: L('먼저 말을 걸고 술자리에서도 끝까지 함께하며 단톡방에서 활발함'),
    strengths: L('낯선 사람들 사이에서 분위기를 살리는 친화력'),
    caution: L('과음과 실수, 사생활 노출에 주의가 필요함'),
    goodMatch: L('가족 존중파 (상대가 가족 쪽을 정중하게 맡아 줌)'),
    tips: L(
      '술자리에서는 마실 양의 상한을 미리 정하기\n단톡방에 올릴 내용의 선을 정해 두기\n가족 앞에서는 한 단계 차분한 모드로 전환하기',
    ),
    oneLiner: L('어울림의 힘은 큽니다. 속도와 양만 조절하면 더 빛납니다'),
    shareLine: L(
      '밸런스 게임 — 연인의 가족·친구 극한편 결과: 친구 융화파 🎉 친구들 틈에서 분위기 타는 타입이래... 너는 뭐 나왔어? 연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리, 너라면 뭐 골라?',
    ),
  },
];

export const phase3PartnerCircleBalanceGameResults: Phase3PartnerCircleBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3PartnerCircleBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_PARTNER_CIRCLE_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
