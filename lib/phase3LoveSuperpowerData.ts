/**
 * 나의 숨겨진 연애 초능력
 * slug: phase3-love-superpower
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 · 동점 시 Q1→Q2→…
 */

import {
  PHASE3_LOVE_SUPERPOWER_I18N,
  type Phase3LoveSuperpowerForeignLocale,
  type Phase3LoveSuperpowerResultText,
} from './phase3LoveSuperpowerI18n';

export type Phase3LoveSuperpowerLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3LoveSuperpowerText = Record<Phase3LoveSuperpowerLocaleKey, string>;

function L(ko: string): Phase3LoveSuperpowerText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_SUPERPOWER_I18N) as Phase3LoveSuperpowerForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3LoveSuperpowerForeignLocale) => string,
): Phase3LoveSuperpowerText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3LoveSuperpowerQuestion {
  id: number;
  question: Phase3LoveSuperpowerText;
  options: { text: Phase3LoveSuperpowerText; score: number }[];
}

export interface Phase3LoveSuperpowerResult {
  type: string;
  emoji: string;
  title: Phase3LoveSuperpowerText;
  typeName: Phase3LoveSuperpowerText;
  abilityLine: Phase3LoveSuperpowerText;
  shortDescription: Phase3LoveSuperpowerText;
  abilityIdentity: Phase3LoveSuperpowerText;
  shineMoment: Phase3LoveSuperpowerText;
  howToUse: Phase3LoveSuperpowerText;
  caution: Phase3LoveSuperpowerText;
  tip: Phase3LoveSuperpowerText;
  cardPhrase: Phase3LoveSuperpowerText;
  oneLiner: Phase3LoveSuperpowerText;
  shareLine: Phase3LoveSuperpowerText;
}

export const PHASE3_LOVE_SUPERPOWER_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

export const PHASE3_LOVE_SUPERPOWER_MAX_TYPE_SCORE = 8;

export const PHASE3_LOVE_SUPERPOWER_META = {
  title: withForeign('나의 숨겨진 연애 초능력', (loc) => PHASE3_LOVE_SUPERPOWER_I18N[loc].meta.title),
  description: withForeign(
    '연애에서 나만 가진 초능력이 있습니다. 12가지 연애 장면에서 가장 나다운 반응을 고르면 6가지 초능력 중 나의 능력을 알려드립니다.',
    (loc) => PHASE3_LOVE_SUPERPOWER_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애', '초능력'],
    en: PHASE3_LOVE_SUPERPOWER_I18N.en.meta.tags,
    ja: PHASE3_LOVE_SUPERPOWER_I18N.ja.meta.tags,
    'zh-CN': PHASE3_LOVE_SUPERPOWER_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_LOVE_SUPERPOWER_I18N['zh-TW'].meta.tags,
    vi: PHASE3_LOVE_SUPERPOWER_I18N.vi.meta.tags,
    id: PHASE3_LOVE_SUPERPOWER_I18N.id.meta.tags,
  },
};

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3LoveSuperpowerScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_LOVE_SUPERPOWER_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3LoveSuperpowerResult(answers: number[]): string {
  const scores = calculatePhase3LoveSuperpowerScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_LOVE_SUPERPOWER_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 쓰는 초능력). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3LoveSuperpowerSecondType(answers: number[]): string | null {
  const scores = calculatePhase3LoveSuperpowerScores(answers);
  const sorted = [...PHASE3_LOVE_SUPERPOWER_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '연인과 오랜만에 데이트하는 날이다. 나는?',
    opts: [
      ['휴대폰을 넣어 두고 오늘 하루에 푹 빠진다', 2],
      ['기대감이 커져서 설렘을 온몸으로 표현한다', 4],
      ['상대의 말과 표정이 맞는지 은근히 살핀다', 5],
      ['어색한 순간이 오면 재밌는 얘기로 분위기를 푼다', 6],
    ],
  },
  {
    q: '연인이 "아무 일 없어"라고 말했다. 나는?',
    opts: [
      ['표정과 목소리에서 진짜 마음이 먼저 느껴진다', 1],
      ['이 흐름이 이어지면 어떻게 될지 머릿속에 그려진다', 3],
      ['일단 분위기를 가볍게 바꿔 말하기 편하게 만든다', 6],
      ['같이 걱정하며 마음이 크게 출렁인다', 4],
    ],
  },
  {
    q: '썸 상대가 약속을 취소했다. 나는?',
    opts: [
      ['이유와 행동이 맞는지 따져 보게 된다', 5],
      ['말투에서 어떤 기분인지 짐작이 간다', 1],
      ['다음에 만날 때 더 소중하게 보내겠다고 마음먹는다', 2],
      ['이 관계가 어디로 갈지 미리 그려 본다', 3],
    ],
  },
  {
    q: '친구가 새로운 연인을 소개했다. 나는?',
    opts: [
      ['어색한 분위기를 부드럽게 만드는 질문을 던진다', 6],
      ['지금 이 자리를 즐기며 대화에 푹 빠진다', 2],
      ['이 둘이 앞으로 어떻게 지낼지 감이 온다', 3],
      ['말과 태도가 일치하는지 자연스럽게 살핀다', 5],
    ],
  },
  {
    q: '연인과 처음으로 여행을 가게 됐다. 나는?',
    opts: [
      ['여행 후 우리 관계가 어떻게 달라질지 상상한다', 3],
      ['계획과 실제가 맞는지 세심하게 확인한다', 5],
      ['상대가 무엇을 원하는지 말하기 전에 눈치챈다', 1],
      ['들뜬 기분이 최고조에 올라 주변까지 신나게 만든다', 4],
    ],
  },
  {
    q: '연인과 함께 있는 평범한 저녁이다. 나는?',
    opts: [
      ['이 순간이 오래 남도록 온전히 집중한다', 2],
      ['조용한 분위기를 따뜻하게 바꾸는 말을 건넨다', 6],
      ['사소한 즐거움도 크게 반응하며 나눈다', 4],
      ['말이 없어도 상대의 기분을 알아챈다', 1],
    ],
  },
  {
    q: '연인에게 좋은 소식이 생겼다. 나는?',
    opts: [
      ['나도 모르게 상대보다 더 크게 기뻐한다', 4],
      ['이 소식이 가져올 앞으로의 변화를 떠올린다', 3],
      ['축하 분위기를 띄우려고 깜짝 계획을 세운다', 6],
      ['이 순간을 기억에 오래 남기고 싶어 곁에서 함께한다', 2],
    ],
  },
  {
    q: '연인과의 대화 중 이상한 느낌이 들었다. 나는?',
    opts: [
      ['숨은 감정이 무엇인지 조용히 헤아려 본다', 1],
      ['말과 행동이 어긋나는 지점을 찾아본다', 5],
      ['불안한 마음이 크게 불어나 몸이 반응한다', 4],
      ['분위기를 바꾸며 대화를 부드럽게 돌린다', 6],
    ],
  },
  {
    q: '연인이 힘들어 보인다. 나는?',
    opts: [
      ['일부러 장난을 걸어 분위기를 풀어 준다', 6],
      ['지금 어떤 마음일지 먼저 느껴진다', 1],
      ['오늘 하루는 다른 걱정 없이 곁에서 함께한다', 2],
      ['이 시기가 지나면 나아질 흐름이 그려진다', 3],
    ],
  },
  {
    q: '호감 가는 사람이 생겼다. 나는?',
    opts: [
      ['이 사람과 함께할 미래가 자연스럽게 떠오른다', 3],
      ['가슴이 두근거려 하루가 설렘으로 가득하다', 4],
      ['말과 행동이 일관된지 천천히 지켜본다', 5],
      ['같이 있는 순간순간에 깊이 빠져든다', 2],
    ],
  },
  {
    q: '연인이 약속을 지키지 않았다. 나는?',
    opts: [
      ['이 말이 사실인지 앞뒤를 맞춰 본다', 5],
      ['긴장된 분위기를 풀기 위해 먼저 웃으며 말을 꺼낸다', 6],
      ['이런 일이 반복될 경우 어떻게 될지 가늠한다', 3],
      ['미안해하는 마음이 표정에서 읽힌다', 1],
    ],
  },
  {
    q: '지금 내 연애 습관에 가장 가까운 문장은?',
    opts: [
      ['"좋은 감정은 나누면 두 배가 된다고 믿어"', 4],
      ['"함께하는 순간에 집중하는 게 제일 소중해"', 2],
      ['"말하지 않아도 상대 마음이 느껴져"', 1],
      ['"믿으려면 말과 행동이 같아야 해"', 5],
    ],
  },
];

export const phase3LoveSuperpowerQuestions: Phase3LoveSuperpowerQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_LOVE_SUPERPOWER_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_LOVE_SUPERPOWER_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }),
);

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'abilityLine',
  'shortDescription',
  'abilityIdentity',
  'shineMoment',
  'howToUse',
  'caution',
  'tip',
  'cardPhrase',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3LoveSuperpowerResultText)[];

const KO_RESULTS: Phase3LoveSuperpowerResult[] = [
  {
    type: 'Type1',
    emoji: '🔮',
    title: L('마음 읽기'),
    typeName: L('마음 읽기'),
    abilityLine: L('나의 연애 초능력: 말하지 않아도 속마음이 느껴지는 눈치의 힘'),
    shortDescription: L('당신은 표정과 목소리에서 상대의 진짜 기분을 먼저 알아채는 사람입니다.'),
    abilityIdentity: L('섬세한 관찰력과 공감 감각'),
    shineMoment: L('상대가 말을 꺼내기 어려워할 때'),
    howToUse: L('알아챈 것을 "혹시 이런 기분이야?"라고 부드럽게 물어보기'),
    caution: L('짐작이 사실처럼 굳어 상대를 단정하지 않기. 맞혔는지는 상대에게 확인하기'),
    tip: L('느낀 것을 묻고 확인하면 능력이 두 배로 빛납니다'),
    cardPhrase: L('말 안 해도 느껴지는 사람'),
    oneLiner: L('눈치는 큰 선물입니다. 확인하는 한마디를 곁들이세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 마음 읽기 🔮 말 안 해도 느껴지는 사람이래ㅋㅋ 카드 저장! 친구들아 내 친구 유형 맞혀봐',
    ),
  },
  {
    type: 'Type2',
    emoji: '⏳',
    title: L('시간 멈춤 데이트'),
    typeName: L('시간 멈춤 데이트'),
    abilityLine: L('나의 연애 초능력: 함께하는 순간을 깊이 있게 만드는 몰입의 힘'),
    shortDescription: L('당신과 있으면 시간이 천천히 흐르는 것 같다고 느끼게 하는 사람입니다.'),
    abilityIdentity: L('현재에 집중하는 몰입과 정성'),
    shineMoment: L('단둘이 보내는 데이트, 중요한 기념일'),
    howToUse: L('휴대폰 없는 시간을 정해 두고 오늘만의 작은 의식을 만들기'),
    caution: L('몰입이 깊어 일상과 다른 관계를 소홀히 하지 않기'),
    tip: L('몰입한 순간을 사진 한 장이나 한 줄 메모로 남기기'),
    cardPhrase: L('오늘 이 순간에 전부를 담는 사람'),
    oneLiner: L('몰입은 큰 매력입니다. 일상의 균형도 함께 챙기세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 시간 멈춤 데이트 ⏳ 순간에 깊이 빠지는 사람이래ㅎㅎ 카드 저장! 너는 뭐야?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🌠',
    title: L('미래 예지'),
    typeName: L('미래 예지'),
    abilityLine: L('나의 연애 초능력: 관계의 흐름과 앞날을 그려 보는 상상의 힘'),
    shortDescription: L('당신은 지금의 작은 신호에서 앞으로의 그림을 떠올리는 사람입니다.'),
    abilityIdentity: L('통찰력과 계획하는 힘'),
    shineMoment: L('큰 결정을 앞두고 방향을 잡을 때'),
    howToUse: L('떠오른 그림을 "우리 이런 방향이면 어때?"라고 함께 이야기하기'),
    caution: L('상상이 불안으로 번져 아직 일어나지 않은 일을 단정하지 않기'),
    tip: L("예측은 '가설'로 두고 지금 확인된 사실과 나눠 적기"),
    cardPhrase: L('앞날을 그려 보는 사람'),
    oneLiner: L('통찰은 귀한 힘입니다. 예측은 가설로, 현재는 사실로 보세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 미래 예지 🌠 앞날을 그려 보는 사람이래ㅋㅋ 카드 저장! 너는 뭐야?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🎆',
    title: L('감정 증폭'),
    typeName: L('감정 증폭'),
    abilityLine: L('나의 연애 초능력: 기쁨과 설렘을 크게 키워 나누는 에너지의 힘'),
    shortDescription: L('당신 곁에서는 작은 즐거움도 크게 번지는 사람입니다.'),
    abilityIdentity: L('풍부한 감정 표현과 전염되는 활기'),
    shineMoment: L('기념일, 좋은 소식, 새로운 시작'),
    howToUse: L('좋은 감정은 마음껏 나누고 상대의 속도도 살피기'),
    caution: L('불안과 걱정까지 같이 커지지 않게 감정이 클 땐 한 템포 쉬기'),
    tip: L('감정이 크게 올라올 땐 10분 뒤에 다시 한 번 느껴 보기'),
    cardPhrase: L('기쁨을 두 배로 만드는 사람'),
    oneLiner: L('활기는 큰 재능입니다. 감정이 클 땐 잠시 숨을 골라 보세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 감정 증폭 🎆 기쁨을 두 배로 만드는 사람이래ㅎㅎ 카드 저장! 너는 뭐야?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🔎',
    title: L('거짓말 감지'),
    typeName: L('거짓말 감지'),
    abilityLine: L('나의 연애 초능력: 말과 행동의 일치를 알아보는 분별의 힘'),
    shortDescription: L('당신은 말보다 행동의 일관성을 보는 신중한 사람입니다.'),
    abilityIdentity: L('일관성을 살피는 분별력'),
    shineMoment: L('새로운 사람을 만날 때, 중요한 선택 앞에서'),
    howToUse: L('어긋남이 느껴지면 추궁 대신 "이 부분이 궁금해"라고 질문하기'),
    caution: L('의심이 앞서 상대를 감시하거나 추궁하지 않기. 사실 확인 없이 단정하지 않기'),
    tip: L('의심이 들면 확인된 사실과 내 추측을 나눠 적기'),
    cardPhrase: L('행동의 일관성을 보는 사람'),
    oneLiner: L('분별력은 큰 힘입니다. 추궁 대신 질문으로 쓰세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 거짓말 감지 🔎 행동의 일관성을 보는 사람이래ㅋㅋ 카드 저장! 너는 뭐야?',
    ),
  },
  {
    type: 'Type6',
    emoji: '🎭',
    title: L('분위기 변신'),
    typeName: L('분위기 변신'),
    abilityLine: L('나의 연애 초능력: 어색함과 무거움을 가볍게 바꾸는 전환의 힘'),
    shortDescription: L('당신이 한마디 하면 굳었던 분위기가 풀리는 사람입니다.'),
    abilityIdentity: L('재치와 분위기를 읽는 센스'),
    shineMoment: L('어색한 첫 만남, 긴장되는 다툼 뒤'),
    howToUse: L('분위기를 푼 뒤 하고 싶었던 진짜 이야기도 꺼내기'),
    caution: L('무거운 이야기를 계속 농담으로 넘기지 않기'),
    tip: L('진지한 얘기엔 "농담 없이 진짜 얘기 하나만" 하고 시작하기'),
    cardPhrase: L('분위기를 바꾸는 사람'),
    oneLiner: L('전환의 힘은 큰 자산입니다. 진심 한 줄도 함께 건네세요'),
    shareLine: L(
      '나의 숨겨진 연애 초능력: 분위기 변신 🎭 분위기를 바꾸는 사람이래ㅋㅋ 카드 저장! 너는 뭐야?',
    ),
  },
];

export const phase3LoveSuperpowerResults: Phase3LoveSuperpowerResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveSuperpowerResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_SUPERPOWER_I18N[loc].results[ri][key]);
  }
  return merged;
});
