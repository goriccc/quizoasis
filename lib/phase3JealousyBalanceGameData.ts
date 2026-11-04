/**
 * 밸런스 게임 — 질투·집착 극한편
 * slug: phase3-jealousy-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: allow(허용) / control(통제) · 축B: honest(솔직) / endure(인내)
 */

import {
  PHASE3_JEALOUSY_BALANCE_I18N,
  type Phase3JealousyBalanceForeignLocale,
  type Phase3JealousyBalanceResultText,
} from './phase3JealousyBalanceGameI18n';

export type Phase3JealousyBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3JealousyBalanceText = Record<Phase3JealousyBalanceLocaleKey, string>;
export type Phase3JealousyPolar = 'allow' | 'control' | 'honest' | 'endure' | 'stat';

function L(ko: string): Phase3JealousyBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_JEALOUSY_BALANCE_I18N) as Phase3JealousyBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3JealousyBalanceForeignLocale) => string,
): Phase3JealousyBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3JealousyBalanceText,
  polar: Phase3JealousyPolar,
): { text: Phase3JealousyBalanceText; polar: Phase3JealousyPolar } {
  return { text: texts, polar };
}

export interface Phase3JealousyBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3JealousyBalanceText;
  options: { text: Phase3JealousyBalanceText; polar: Phase3JealousyPolar }[];
}

export interface Phase3JealousyBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3JealousyBalanceText;
  shortDescription: Phase3JealousyBalanceText;
  quote: Phase3JealousyBalanceText;
  description: Phase3JealousyBalanceText;
  typeLabel: Phase3JealousyBalanceText;
  characteristics: Phase3JealousyBalanceText;
  livingStyle: Phase3JealousyBalanceText;
  strengths: Phase3JealousyBalanceText;
  caution: Phase3JealousyBalanceText;
  goodMatch: Phase3JealousyBalanceText;
  tips: Phase3JealousyBalanceText;
  oneLiner: Phase3JealousyBalanceText;
  shareLine: Phase3JealousyBalanceText;
}

export function jealousyBalanceText(text: Phase3JealousyBalanceText, locale: string): string {
  const loc = locale as Phase3JealousyBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3JealousyBalanceGameResult(
  questions: Phase3JealousyBalanceGameQuestion[],
  answers: number[],
): string {
  let allow = 0;
  let control = 0;
  let honest = 0;
  let endure = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'allow') allow += 1;
    else if (polar === 'control') control += 1;
    else if (polar === 'honest') honest += 1;
    else if (polar === 'endure') endure += 1;
  });

  const axisA = allow >= 3 ? 'allow' : 'control';
  const axisB = honest >= 3 ? 'honest' : 'endure';

  if (axisA === 'allow' && axisB === 'honest') return 'Type1';
  if (axisA === 'allow' && axisB === 'endure') return 'Type2';
  if (axisA === 'control' && axisB === 'honest') return 'Type3';
  return 'Type4';
}

export const PHASE3_JEALOUSY_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 질투·집착 극한편',
    (loc) => PHASE3_JEALOUSY_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구. 12라운드 극한 선택으로 나의 질투 스타일을 알려드립니다.',
    (loc) => PHASE3_JEALOUSY_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '질투', '연애테스트'],
    en: PHASE3_JEALOUSY_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_JEALOUSY_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_JEALOUSY_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_JEALOUSY_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_JEALOUSY_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_JEALOUSY_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3JealousyPolar][] }[] = [
  {
    q: '연인이 이성 친구와 단둘이 1박 2일 여행을 가겠다고 한다. 나는?',
    scored: true,
    opts: [
      ['보내 주지만 여행 내내 마음이 불편하다', 'allow'],
      ['가지 말라고 하지만 연인이 답답해하며 서운해한다', 'control'],
    ],
  },
  {
    q: '연인이 매일 위치를 공유해 달라고 요구한다. 나는?',
    scored: true,
    opts: [
      ['나도 똑같이 위치를 공유받는 조건으로 받아들이지만 서로 숨이 막힌다', 'control'],
      ['거절하지만 연인이 의심한다고 서운해한다', 'allow'],
    ],
  },
  {
    q: '연인이 이성 동료와 둘이 늦은 저녁을 먹는다고 한다. 나는?',
    scored: true,
    opts: [
      ['다녀오라 하지만 밤새 연락 한 통에도 신경이 곤두선다', 'allow'],
      ['단둘이는 안 된다고 선을 긋지만 연인이 자유를 침해받는다고 느낀다', 'control'],
    ],
  },
  {
    q: '연인의 이성 친구 연락처를 정리해 달라고 요구하고 싶다. 나는?',
    scored: true,
    opts: [
      ['정리를 요구해서 마음은 놓이지만 연인이 크게 반발한다', 'control'],
      ['요구하지 않고 두지만 계속 마음에 걸린다', 'allow'],
    ],
  },
  {
    q: '연인이 내 지인들 모임에 이성 친구를 데려오겠다고 한다. 나는?',
    scored: true,
    opts: [
      ['안 된다고 하지만 분위기가 어색해지고 연인이 서운해한다', 'control'],
      ['웃으며 받아들이지만 모임 내내 눈치가 쓰인다', 'allow'],
    ],
  },
  {
    q: '연인이 이성 친구 이야기를 자주 꺼낸다. 나는?',
    scored: true,
    opts: [
      ['"그 얘기 들으면 신경 쓰여"라고 말하지만 예민하다는 말을 들을 수 있다', 'honest'],
      ['아무 말 없이 들어 주지만 혼자 속이 타들어 간다', 'endure'],
    ],
  },
  {
    q: '연인이 질투하는 나를 눈치채고 괜찮은지 묻는다. 나는?',
    scored: true,
    opts: [
      ['"아니 괜찮아"라고 넘기지만 그날 밤 마음이 더 복잡해진다', 'endure'],
      ['"사실 조금 불안했어"라고 말하지만 연인이 부담스러워할 수 있다', 'honest'],
    ],
  },
  {
    q: '연인의 이성 친구가 보낸 메시지가 눈에 띄었다. 나는?',
    scored: true,
    opts: [
      ['바로 물어보지만 의심하는 사람처럼 보일 수 있다', 'honest'],
      ['못 본 척하지만 궁금증이 오래 남는다', 'endure'],
    ],
  },
  {
    q: '질투가 올라오는 순간 나는?',
    scored: true,
    opts: [
      ['쿨한 척 삼키지만 쌓였다가 한꺼번에 터질 수 있다', 'endure'],
      ['그 자리에서 말하지만 감정이 앞서 말이 거칠어질 수 있다', 'honest'],
    ],
  },
  {
    q: '연인의 이성 친구 SNS 댓글이 친근해 보인다. 나는?',
    scored: true,
    opts: [
      ['"그 댓글 좀 신경 쓰여"라고 말하지만 분위기가 어색해질 수 있다', 'honest'],
      ['아무렇지 않은 척 지나가지만 혼자 계속 곱씹게 된다', 'endure'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 상황은?',
    scored: false,
    opts: [
      ['연인이 이성 친구와 단둘이 여행 가는 것', 'stat'],
      ['연인에게 매일 위치 공유를 요구받는 것', 'stat'],
    ],
  },
  {
    q: '둘 중 더 불편한 상황은?',
    scored: false,
    opts: [
      ['연인이 내 질투를 아예 모르는 것', 'stat'],
      ['연인이 내 질투를 알고 부담스러워하는 것', 'stat'],
    ],
  },
];

export const phase3JealousyBalanceGameQuestions: Phase3JealousyBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_JEALOUSY_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_JEALOUSY_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3JealousyBalanceResultText)[];

const KO_RESULTS: Phase3JealousyBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🌤️',
    title: L('자유를 존중하고 마음은 말하는 사람, 허용 솔직파'),
    shortDescription: L('상대의 자유는 지키되 내 감정은 숨기지 않는 균형형'),
    quote: L('당신은 연인의 자유를 막지 않고, 신경 쓰이는 마음은 말로 전합니다.'),
    description: L(
      '질투를 통제가 아닌 대화로 푸는 건강한 방식입니다. 다만 허용이 참음이 되지 않도록 선을 정하고, 솔직함이 비난이 되지 않도록 말투를 살피세요.',
    ),
    typeLabel: L('허용 솔직파 🌤️'),
    characteristics: L('자유 존중·감정 표현·대화·균형'),
    livingStyle: L('보내 주되 "신경 쓰여"라고 가볍게 말함'),
    strengths: L('질투가 쌓이지 않고 대화로 풀려 관계가 건강함'),
    caution: L('말투가 날카로우면 상대가 방어적이 될 수 있음'),
    goodMatch: L('허용 인내파 (내가 말해 주면 상대가 마음을 열기 쉬움)'),
    tips: L(
      '“~하지 마”보다 “~해서 나는 불안했어”로 말하기\n허용 범위(밤 시간·단둘이 여부 등)를 두 사람이 합의로 정하기\n대화 후 상대의 설명을 끝까지 듣기',
    ),
    oneLiner: L('자유와 솔직함의 균형은 가장 건강한 질투 처방입니다'),
    shareLine: L(
      '밸런스 게임 — 질투·집착 극한편 결과: 허용 솔직파 🌤️ 자유는 주고 마음은 말하는 타입이래ㅋㅋ 너라면 뭐 골라? 연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌫️',
    title: L('자유는 주지만 혼자 삼키는 사람, 허용 인내파'),
    shortDescription: L('쿨하게 보내 주고 속은 혼자 감당하는 침묵형'),
    quote: L('당신은 연인을 믿고 보내 주지만, 불안은 아무에게도 말하지 않고 안고 있습니다.'),
    description: L(
      '넓은 마음처럼 보이지만 혼자 쌓은 질투는 한꺼번에 터지기 쉽습니다. 연인은 내 마음을 몰라 같은 상황을 반복할 수 있습니다.',
    ),
    typeLabel: L('허용 인내파 🌫️'),
    characteristics: L('쿨함·침묵·쌓이는 불안·뒤늦은 폭발'),
    livingStyle: L('괜찮다고 웃으며 보내고 혼자 곱씹음'),
    strengths: L('상대를 구속하지 않고 신뢰를 보여 주는 너그러움'),
    caution: L('쌓인 감정이 큰 다툼으로 번질 수 있음'),
    goodMatch: L('통제 솔직파 (상대가 먼저 표현해 내 마음도 열기 쉬움)'),
    tips: L(
      '쌓이기 전에 그날 안에 "조금 신경 쓰였어" 한 줄 말하기\n불안을 메모장에 먼저 적고 핵심 한 줄만 전하기\n괜찮다고 말하기 전에 \'진짜 괜찮은가\'를 한 번 점검하기',
    ),
    oneLiner: L('넓은 마음에 한 줄의 솔직함을 더하면 쌓이지 않습니다'),
    shareLine: L(
      '밸런스 게임 — 질투·집착 극한편 결과: 허용 인내파 🌫️ 쿨하게 보내고 속은 혼자 삭이는 타입이래... 너라면 뭐 골라? 연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구',
    ),
  },
  {
    type: 'Type3',
    emoji: '🚧',
    title: L('기준을 세우고 불안을 말하는 사람, 통제 솔직파'),
    shortDescription: L('선을 분명히 긋고 이유를 말로 요구하는 직설형'),
    quote: L('당신은 불안한 부분에 분명한 기준을 세우고 그 마음을 말로 요구합니다.'),
    description: L(
      '기준이 분명해 오해는 적지만, 요구가 강해지면 상대가 구속당한다고 느낄 수 있습니다. 규칙은 합의일 때만 지켜집니다.',
    ),
    typeLabel: L('통제 솔직파 🚧'),
    characteristics: L('기준·요구·직설·구속 위험'),
    livingStyle: L('단둘이는 안 된다고 말하고 이유를 설명함'),
    strengths: L('불안을 숨기지 않아 오해가 적음'),
    caution: L('일방적 요구가 상대의 자유를 침해할 수 있음'),
    goodMatch: L('허용 인내파 (상대가 내 불안을 받아 주어 균형이 맞음)'),
    tips: L(
      '요구하기 전에 "내가 이래서 불안해, 어떻게 하면 좋을까?"로 함께 정하기\n규칙은 한쪽만이 아니라 서로에게 같은 기준으로 적용하기\n요구가 불안에서 나오는지 신뢰 문제인지 구분해 보기\n불안이 커서 연인의 이성 관계나 동선을 계속 제한하고 싶어진다면 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('기준은 합의할 때 힘이 됩니다. 요구 대신 함께 정하는 질문으로 바꿔 보세요'),
    shareLine: L(
      '밸런스 게임 — 질투·집착 극한편 결과: 통제 솔직파 🚧 선을 긋고 불안을 말로 요구하는 타입이래ㅋㅋ 너라면 뭐 골라? 연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구',
    ),
  },
  {
    type: 'Type4',
    emoji: '🔒',
    title: L('기준은 있지만 말은 못 하는 사람, 통제 인내파'),
    shortDescription: L('속으로는 제한하고 싶지만 겉으로는 참는 억제형'),
    quote: L('당신은 마음속으로는 선을 긋고 싶지만 그 말을 꺼내지 못하고 참고 있습니다.'),
    description: L(
      '말하지 못한 통제 욕구는 몰래 확인하거나 한꺼번에 터지는 형태로 나올 수 있어 가장 불안이 커지기 쉽습니다. 불안을 안전하게 꺼낼 통로가 필요합니다.',
    ),
    typeLabel: L('통제 인내파 🔒'),
    characteristics: L('억제·몰래 확인·쌓인 불안·터질 위험'),
    livingStyle: L('겉은 평온하지만 속으로 연인의 동선과 연락을 계속 신경 씀'),
    strengths: L('감정을 쉽게 폭발시키지 않는 절제력'),
    caution: L('몰래 확인하거나 한꺼번에 터지면 신뢰가 크게 흔들림'),
    goodMatch: L('허용 솔직파 (상대가 편하게 말을 꺼내 줘서 마음이 열림)'),
    tips: L(
      '몰래 확인하는 대신 "요즘 불안해서 이야기하고 싶어"라고 직접 말하기\n불안을 하루 한 줄 글로 적어 상태를 알아차리기\n신뢰하는 친구나 상담 전문가에게 먼저 털어놓기\n몰래 확인하고 싶은 마음이나 불안이 반복되어 일상에 영향을 준다면 혼자 해결하려 하지 말고 심리상담 전문가와 이야기해 보세요',
    ),
    oneLiner: L('참는 불안은 커집니다. 안전한 곳에서 먼저 말로 꺼내 보세요'),
    shareLine: L(
      '밸런스 게임 — 질투·집착 극한편 결과: 통제 인내파 🔒 속으론 제한하고 싶지만 말은 못 하는 타입이래... 너라면 뭐 골라? 연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구',
    ),
  },
];


export const phase3JealousyBalanceGameResults: Phase3JealousyBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3JealousyBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_JEALOUSY_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
