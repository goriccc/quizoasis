/**
 * 거절할 때 나의 말투 테스트
 * slug: phase3-refusal-tone
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~4) · 최고 득점 · 동점 시 Q1→Q2→Q3
 */

import {
  PHASE3_REFUSAL_TONE_I18N,
  type Phase3RefusalToneForeignLocale,
  type Phase3RefusalToneResultText,
} from './phase3RefusalToneI18n';

export type Phase3RefusalToneLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3RefusalToneText = Record<Phase3RefusalToneLocaleKey, string>;

function L(ko: string): Phase3RefusalToneText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_REFUSAL_TONE_I18N) as Phase3RefusalToneForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3RefusalToneForeignLocale) => string): Phase3RefusalToneText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3RefusalToneQuestion {
  id: number;
  question: Phase3RefusalToneText;
  options: { text: Phase3RefusalToneText; score: number }[];
}

export interface Phase3RefusalToneResult {
  type: string;
  emoji: string;
  title: Phase3RefusalToneText;
  typeName: Phase3RefusalToneText;
  refusalTone: Phase3RefusalToneText;
  shortDescription: Phase3RefusalToneText;
  description: Phase3RefusalToneText;
  keywords: Phase3RefusalToneText;
  frequentSaying: Phase3RefusalToneText;
  partnerImpression: Phase3RefusalToneText;
  strengths: Phase3RefusalToneText;
  caution: Phase3RefusalToneText;
  emotionLabel: Phase3RefusalToneText;
  rewriteLine: Phase3RefusalToneText;
  changeTips: Phase3RefusalToneText;
  oneLiner: Phase3RefusalToneText;
  shareLine: Phase3RefusalToneText;
  counselingNote?: Phase3RefusalToneText;
}

export const PHASE3_REFUSAL_TONE_TYPES = ['Type1', 'Type2', 'Type3', 'Type4'] as const;

export function calculatePhase3RefusalToneScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_REFUSAL_TONE_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

export function calculatePhase3RefusalToneResult(answers: number[]): string {
  const scores = calculatePhase3RefusalToneScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_REFUSAL_TONE_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

export function getPhase3RefusalToneHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3RefusalToneScores(answers);
  const sorted = [...PHASE3_REFUSAL_TONE_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '연인이 갑자기 "오늘 만나자"고 했는데 쉬고 싶다. 나는?',
    opts: [
      ['"오늘은 쉬고 싶어, 내일 보자"', 1],
      ['"보고 싶은데 오늘은 몸이 좀 무거워서 미안해ㅠ"', 2],
      ['"아 오늘 갑자기 일이 생겼어, 못 갈 것 같아"', 3],
      ['"알겠어, 피곤하지만 갈게"', 4],
    ],
  },
  {
    q: '친구가 큰돈을 빌려 달라고 했다. 나는?',
    opts: [
      ['"도와주고 싶은데 내 형편이 빠듯해서 어렵겠어, 미안해"', 2],
      ['"지금 통장 정리 중이라 돈이 묶여 있어서..."', 3],
      ['…일단 알겠어, 얼마나 필요한데?', 4],
      ['"돈 거래는 안 하기로 했어, 미안"', 1],
    ],
  },
  {
    q: '직장 동료가 퇴근 직전에 일을 부탁했다. 나는?',
    opts: [
      ['"아 저 오늘 약속이 있어서 지금 나가야 해요"', 3],
      ['"네, 제가 할게요..."', 4],
      ['"오늘은 어렵습니다, 내일 오전에 보겠습니다"', 1],
      ['"도와드리고 싶은데 오늘은 일정이 있어서 어려울 것 같아요"', 2],
    ],
  },
  {
    q: '연인이 친구 모임에 같이 가자고 했다. 가기 싫다. 나는?',
    opts: [
      ['"그래, 같이 가자" 하고 속으로 후회한다', 4],
      ['"나는 이번엔 안 갈래, 재밌게 놀다 와"', 1],
      ['"네 친구들 보는 건 좋은데 이번엔 쉬고 싶어서 미안"', 2],
      ['"그날 갑자기 가족 일정이 생길 수도 있어서..."', 3],
    ],
  },
  {
    q: '연인이 휴대폰 비밀번호를 알려 달라고 했다. 불편하다. 나는?',
    opts: [
      ['"그건 불편해, 비밀번호는 알려 주기 싫어"', 1],
      ['불편하지만 말없이 알려 준다', 4],
      ['"비밀번호가 기억이 안 나, 나중에 알려 줄게"', 3],
      ['"네가 신경 쓰이는 건 알겠는데 그건 내게 조금 어려워, 미안"', 2],
    ],
  },
  {
    q: '친구가 여행에 같이 가자고 했는데 일정이 어렵다. 나는?',
    opts: [
      ['"같이 가고 싶은데 이번 일정은 어려울 것 같아, 아쉬워"', 2],
      ['"이번엔 못 가, 다음에 꼭 가자"', 1],
      ['못 갈 것 같지만 거절을 못 하고 알겠다고 한다', 4],
      ['"그때 가족 행사가 있을지도 몰라서 확답을 못 할 것 같아"', 3],
    ],
  },
  {
    q: '연인이 주말 내내 같이 있자고 했다. 혼자 있고 싶다. 나는?',
    opts: [
      ['"주말에 해야 할 일이 갑자기 생겼어"', 3],
      ['"함께 있고 싶은데 하루는 혼자 쉬고 싶어서 미안해"', 2],
      ['"토요일은 혼자 보내고 일요일에 만나자"', 1],
      ['"그래, 주말 내내 같이 있자" 하고 마음을 눌러 둔다', 4],
    ],
  },
  {
    q: '영업 전화가 와서 상품 가입을 권유받았다. 나는?',
    opts: [
      ['거절하지 못하고 설명을 끝까지 듣다가 가입한다', 4],
      ['"지금 운전 중이라서요" 하고 끊는다', 3],
      ['"좋은 상품 같은데 지금은 가입이 어려울 것 같아요"', 2],
      ['"관심 없습니다, 감사합니다" 하고 끊는다', 1],
    ],
  },
  {
    q: '친구가 내 연애에 대해 계속 캐묻는다. 말하기 싫다. 나는?',
    opts: [
      ['"그건 얘기하고 싶지 않아"', 1],
      ['"얘기하고 싶은데 아직 정리가 안 돼서 나중에 말해 줄게"', 2],
      ['하기 싫지만 결국 다 털어놓는다', 4],
      ['"배터리가 없어서 이만 끊을게" 하고 화제를 피한다', 3],
    ],
  },
  {
    q: '연인이 선물을 사 줬는데 취향이 아니다. 교환하고 싶다. 나는?',
    opts: [
      ['"고마운데 사이즈가 조금 안 맞아서 바꿔도 될까?"', 2],
      ['"내 취향이 아니라서 바꾸고 싶어, 고마워"', 1],
      ['"이거 잃어버릴 것 같아서 일단 넣어 둘게"', 3],
      ['아무 말 없이 좋아하는 척하며 계속 쓴다', 4],
    ],
  },
  {
    q: '연인이 "내일 같이 야근하는 날 데리러 와 줄래?"라고 했다. 힘들다. 나는?',
    opts: [
      ['"내일 차에 문제가 생길 수도 있어서 확실하진 않아"', 3],
      ['"알겠어, 갈게" 하고 피곤한 몸을 이끌고 간다', 4],
      ['"데리러 가고 싶은데 내일은 체력이 안 돼서 미안해"', 2],
      ['"내일은 어려워, 택시 타고 가는 건 어때?"', 1],
    ],
  },
  {
    q: '지금 거절할 때 나에게 가장 가까운 문장은?',
    opts: [
      ['"거절하면 상대가 상처받을까 봐 일단 받아 줘"', 4],
      ['"직접 거절하는 것보다 사정이 있다고 말하는 게 편해"', 3],
      ['"안 되는 건 짧고 분명하게 말하는 게 서로에게 낫다고 생각해"', 1],
      ['"미안한 마음을 담아 부드럽게 거절하려고 해"', 2],
    ],
  },
];

export const phase3RefusalToneQuestions: Phase3RefusalToneQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  question: withForeign(item.q, (loc) => PHASE3_REFUSAL_TONE_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_REFUSAL_TONE_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'refusalTone',
  'shortDescription',
  'description',
  'keywords',
  'frequentSaying',
  'partnerImpression',
  'strengths',
  'caution',
  'emotionLabel',
  'rewriteLine',
  'changeTips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (Exclude<keyof Phase3RefusalToneResultText, 'counselingNote'>)[];

const KO_RESULTS: Phase3RefusalToneResult[] = [
  {
    type: 'Type1',
    emoji: '🎃',
    title: L('짧고 분명하게 말하는 사람, 단호박 직설형'),
    typeName: L('단호박 직설형'),
    refusalTone: L('이유를 짧게 대고 "안 돼"를 분명히 말하는 명료형'),
    shortDescription: L('당신은 거절을 길게 끌지 않고 한마디로 선을 긋는 사람입니다.'),
    description: L(
      '상대가 기대를 품을 틈을 주지 않아 오해가 적고 내 시간을 잘 지킵니다. 다만 말투가 짧고 차가워 상대가 마음을 거절당한 것처럼 느낄 수 있습니다.'
    ),
    keywords: L('명료·짧은 이유·선 긋기·시간 지키기'),
    frequentSaying: L('"오늘은 어려워", "나는 안 갈래"'),
    partnerImpression: L('분명해서 편하지만 가끔 차갑게 느껴지는 사람'),
    strengths: L('기대와 오해를 만들지 않는 솔직함과 자기 보호 능력'),
    caution: L('짧은 말이 상대에게 마음의 거절로 들릴 수 있음'),
    emotionLabel: L('나는 지금 내 시간을 지키고 싶구나'),
    rewriteLine: L('오늘은 쉬고 싶어. 대신 내일 보자, 보고 싶은 건 같아'),
    changeTips: L(
      '거절 앞에 "고마워" 또는 "마음은 알아"를 한 문장 붙이기\n거절한 뒤 대안을 하나 제안해 마음의 거절이 아님을 전하기\n말투가 날카로워질 땐 "지금은 어렵다"로 부드럽게 바꾸기'
    ),
    oneLiner: L('분명한 거절은 서로를 지킵니다. 마음은 아니라는 한 줄만 더해 보세요'),
    shareLine: L(
      '거절할 때 나의 말투: 단호박 직설형 🎃 짧고 분명하게 선 긋는 타입이래ㅋㅋ 너는 어떻게 거절해? 결과 보내줘'
    ),
  },
  {
    type: 'Type2',
    emoji: '🌸',
    title: L('부드럽게 에둘러 말하는 사람, 돌려 말하는 완곡형'),
    typeName: L('돌려 말하는 완곡형'),
    refusalTone: L('미안함과 아쉬움을 담아 진짜 이유를 부드럽게 전하는 배려형'),
    shortDescription: L('당신은 거절하면서도 상대의 마음이 다치지 않도록 먼저 살피는 사람입니다.'),
    description: L(
      '상대가 존중받는 느낌을 받아 관계가 부드럽게 유지됩니다. 다만 돌려 말하다 보면 거절 의사가 흐려져 상대가 다시 부탁하거나 오해할 수 있습니다.'
    ),
    keywords: L('배려·미안함·완곡 표현·진짜 이유 설명'),
    frequentSaying: L('"도와주고 싶은데 어려울 것 같아, 미안해"'),
    partnerImpression: L('따뜻하고 배려하지만 속뜻을 한 번 더 확인하게 되는 사람'),
    strengths: L('관계를 상하지 않게 하는 섬세한 배려'),
    caution: L('완곡해서 거절이 분명히 전달되지 않을 수 있음'),
    emotionLabel: L('나는 지금 상대를 서운하게 할까 봐 조심스럽구나'),
    rewriteLine: L('미안해, 이번엔 어려워. 다음엔 꼭 같이 하자'),
    changeTips: L(
      '배려 문장 뒤에 "이번엔 어려워"라는 결론을 마지막에 분명히 말하기\n\'아마\', \'어려울 것 같아\'를 줄이고 \'이번엔 못 해\'를 한 번은 쓰기\n상대가 다시 부탁하면 같은 이유를 반복하며 선을 유지하기'
    ),
    oneLiner: L('부드러운 거절은 큰 장점입니다. 결론 한 문장이 분명하면 더 오해가 없습니다'),
    shareLine: L(
      '거절할 때 나의 말투: 돌려 말하는 완곡형 🌸 부드럽게 에둘러 거절하는 타입이래... 너는 어떻게 거절해? 결과 보내줘'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌀',
    title: L('사정을 만들어 피하는 사람, 핑계 만드는 회피형'),
    typeName: L('핑계 만드는 회피형'),
    refusalTone: L('없는 사정을 지어내거나 답을 미뤄 직접 거절을 피한다'),
    shortDescription: L('당신은 직접 안 된다고 말하기보다 상황 때문에 어렵다고 말하는 게 편한 사람입니다.'),
    description: L(
      '직접 거절의 불편함을 피하고 당장의 갈등을 줄입니다. 다만 핑계가 반복되면 신뢰가 흔들리고 같은 상황이 계속 돌아옵니다.'
    ),
    keywords: L('핑계·미루기·확답 피하기·갈등 회피'),
    frequentSaying: L('"갑자기 일이 생겼어", "확답은 못 할 것 같아"'),
    partnerImpression: L('바쁜 사람 같지만 속마음을 알기 어려운 사람'),
    strengths: L('갈등을 피하려는 평화 지향과 상황 판단력'),
    caution: L('핑계가 쌓이면 신뢰와 진심이 흐려질 수 있음'),
    emotionLabel: L('나는 지금 직접 말하는 게 무섭구나'),
    rewriteLine: L('사실 오늘은 좀 쉬고 싶어서 미안해'),
    changeTips: L(
      '핑계 대신 진짜 이유를 한 단어로라도 말해 보기. 예: "피곤해서"\n확답이 어려울 땐 "내일 오전까지 알려 줄게"처럼 기한을 정하기\n작은 거절부터 사실대로 말하는 연습하기'
    ),
    oneLiner: L('핑계는 순간을 구하지만 진심은 관계를 구합니다. 진짜 이유 한 단어가 시작입니다'),
    shareLine: L(
      '거절할 때 나의 말투: 핑계 만드는 회피형 🌀 사정을 만들어 피하는 타입이래ㅋㅋ 찔린다... 너는 어떻게 거절해? 결과 보내줘'
    ),
  },
  {
    type: 'Type4',
    emoji: '🤲',
    title: L('거절하지 못하고 받아들이는 사람, 아예 못 하는 수락형'),
    typeName: L('아예 못 하는 수락형'),
    refusalTone: L('속으로는 싫어도 결국 "알겠어"로 받아들인다'),
    shortDescription: L('당신은 상대가 실망할까 봐 거절하는 대신 내 마음을 접는 사람입니다.'),
    description: L(
      '상대에게 든든하고 좋은 사람으로 보이지만 거절하지 못한 감정은 쌓이고 어느 순간 피로나 서운함으로 터질 수 있습니다.'
    ),
    keywords: L('수락·참기·눈치·쌓이는 피로'),
    frequentSaying: L('"알겠어, 갈게", "괜찮아, 할게"'),
    partnerImpression: L('늘 맞춰 주는 편한 사람'),
    strengths: L('상대를 먼저 생각하는 헌신과 배려'),
    caution: L('억눌린 감정이 쌓여 번아웃이나 갑작스러운 폭발로 이어질 수 있음'),
    emotionLabel: L('나는 지금 싫다고 말하면 미움받을까 봐 두렵구나'),
    rewriteLine: L('오늘은 어려워. 대신 이건 도와줄게'),
    changeTips: L(
      '바로 대답하지 않고 "잠깐 생각해 보고 알려 줄게"라고 시간을 벌기\n작은 부탁부터 한 번씩 거절해 보며 관계가 괜찮음을 확인하기\n수락한 뒤 쌓인 피로를 그날 안에 "사실 좀 힘들었어"라고 말하기'
    ),
    oneLiner: L('배려는 소중하지만 내 마음도 소중합니다. 잠깐 생각해 볼게라는 말이 첫걸음입니다'),
    shareLine: L(
      '거절할 때 나의 말투: 아예 못 하는 수락형 🤲 거절 못 하고 받아 주는 타입이래... 너는 어떻게 거절해? 결과 보내줘'
    ),
    counselingNote: L(
      '거절하지 못하는 어려움이 연애뿐 아니라 일상 전반에서 크게 힘들거나 상대의 요구를 계속 따르게 된다면 심리상담 전문가와 이야기해 보세요'
    ),
  },
];

export const phase3RefusalToneResults: Phase3RefusalToneResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3RefusalToneResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_REFUSAL_TONE_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_REFUSAL_TONE_META = {
  title: withForeign('거절할 때 나의 말투 테스트', (loc) => PHASE3_REFUSAL_TONE_I18N[loc].meta.title),
  description: withForeign(
    "같은 '안 돼'도 말투마다 달라요. 12가지 거절 상황으로 단호박 직설·완곡·핑계 회피·수락형 중 나의 거절 화법을 알려드립니다.",
    (loc) => PHASE3_REFUSAL_TONE_I18N[loc].meta.description
  ),
  tags: {
    ko: ['거절말투', '연애말투', '연애테스트'],
    en: PHASE3_REFUSAL_TONE_I18N.en.meta.tags,
    ja: PHASE3_REFUSAL_TONE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_REFUSAL_TONE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_REFUSAL_TONE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_REFUSAL_TONE_I18N.vi.meta.tags,
    id: PHASE3_REFUSAL_TONE_I18N.id.meta.tags,
  } as Record<Phase3RefusalToneLocaleKey, string[]>,
};
