/**
 * 나는 왜 먼저 고백을 못 할까?
 * slug: phase3-cant-confess-first
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 · 동점 시 Q1→Q2→Q3
 */

import {
  PHASE3_CANT_CONFESS_FIRST_I18N,
  type Phase3CantConfessFirstForeignLocale,
  type Phase3CantConfessFirstResultText,
} from './phase3CantConfessFirstI18n';

export type Phase3CantConfessFirstLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3CantConfessFirstText = Record<Phase3CantConfessFirstLocaleKey, string>;

function L(ko: string): Phase3CantConfessFirstText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_CANT_CONFESS_FIRST_I18N) as Phase3CantConfessFirstForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3CantConfessFirstForeignLocale) => string): Phase3CantConfessFirstText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3CantConfessFirstQuestion {
  id: number;
  question: Phase3CantConfessFirstText;
  options: { text: Phase3CantConfessFirstText; score: number }[];
}

export interface Phase3CantConfessFirstResult {
  type: string;
  emoji: string;
  title: Phase3CantConfessFirstText;
  typeName: Phase3CantConfessFirstText;
  realReason: Phase3CantConfessFirstText;
  shortDescription: Phase3CantConfessFirstText;
  description: Phase3CantConfessFirstText;
  keywords: Phase3CantConfessFirstText;
  blockedMoment: Phase3CantConfessFirstText;
  strengths: Phase3CantConfessFirstText;
  reasonDetail: Phase3CantConfessFirstText;
  frequentSaying: Phase3CantConfessFirstText;
  changeTips: Phase3CantConfessFirstText;
  oneLiner: Phase3CantConfessFirstText;
  shareLine: Phase3CantConfessFirstText;
  counselingNote?: Phase3CantConfessFirstText;
}

export const PHASE3_CANT_CONFESS_FIRST_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

export const PHASE3_CANT_CONFESS_FIRST_META = {
  title: withForeign('나는 왜 먼저 고백을 못 할까?', (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].meta.title),
  description: withForeign(
    '좋아하는 마음은 큰데 입이 안 떨어질 때. 12가지 상황으로 거절 공포·타이밍 대기·확신 필요·자존심 수호·관계 파괴 걱정·표현 서툰형 중 나의 진짜 장벽을 알려드립니다.',
    (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['고백', '썸', '연애심리'],
    en: PHASE3_CANT_CONFESS_FIRST_I18N.en.meta.tags,
    ja: PHASE3_CANT_CONFESS_FIRST_I18N.ja.meta.tags,
    'zh-CN': PHASE3_CANT_CONFESS_FIRST_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_CANT_CONFESS_FIRST_I18N['zh-TW'].meta.tags,
    vi: PHASE3_CANT_CONFESS_FIRST_I18N.vi.meta.tags,
    id: PHASE3_CANT_CONFESS_FIRST_I18N.id.meta.tags,
  },
};

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3CantConfessFirstScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_CANT_CONFESS_FIRST_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3CantConfessFirstResult(answers: number[]): string {
  const scores = calculatePhase3CantConfessFirstScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_CANT_CONFESS_FIRST_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 장벽). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3CantConfessFirstHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3CantConfessFirstScores(answers);
  const sorted = [...PHASE3_CANT_CONFESS_FIRST_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '좋아하는 사람과 둘이 저녁을 먹고 헤어지는 길, 고백하고 싶은 마음이 크다. 나는?',
    opts: [
      ['마음은 확실한데 지금은 타이밍이 아닌 것 같아서 "조금 더 있다가 하자"고 미룬다', 2],
      ['내가 먼저 말하면 더 좋아하는 쪽이 되는 것 같아 상대가 먼저 말해주길 기다린다', 4],
      ['지금처럼 편한 사이가 깨질까 봐 마음을 숨기고 평소처럼 대한다', 5],
      ['하고 싶은 말은 가득한데 어떻게 꺼내야 할지 문장이 떠오르지 않는다', 6],
    ],
  },
  {
    q: '오랜만에 만난 썸 상대가 "요즘 좋아하는 사람 없어?"라고 물었다. 나는?',
    opts: [
      ['지금 말했다가 거절당하면 너무 아플 것 같아서 "없어"라고 대답한다', 1],
      ['이 사람 마음이 어떤지 아직 확실하지 않아서 "글쎄, 너는?"이라고 되묻는다', 3],
      ['마음은 있는데 어떻게 말해야 할지 몰라서 우물쭈물하다 화제를 바꾼다', 6],
      ['먼저 마음을 보이는 건 자존심이 상해서 "그냥 뭐~"하고 쿨한 척한다', 4],
    ],
  },
  {
    q: '상대가 "우리 요즘 자주 보네"라고 말했다. 고백할 수 있는 분위기다. 나는?',
    opts: [
      ['고백했다가 어색해지면 이 편한 만남마저 사라질까 봐 "그러게, 친해졌네"라고 한다', 5],
      ['거절당할 수도 있다는 생각이 스쳐 가슴이 내려앉고 말을 삼킨다', 1],
      ['지금이 맞는 때인지 더 지켜봐야 할 것 같아서 다음 기회로 넘긴다', 2],
      ['이 말이 호감의 신호인지 그냥 친해졌다는 뜻인지 확신이 안 서서 일단 지켜본다', 3],
    ],
  },
  {
    q: '고백하려고 마음먹은 날, 상대와 마주 앉았다. 나는?',
    opts: [
      ['머릿속으로 여러 번 연습한 말이 막상 얼굴을 보니 하나도 생각나지 않는다', 6],
      ['분위기가 완벽하지 않은 것 같아서 더 좋은 날을 기다리기로 한다', 2],
      ['상대의 표정과 말투를 살피며 마음을 확실히 알 수 있는 신호를 찾는다', 3],
      ['고백이 오히려 우리 사이를 망칠까 걱정돼서 평소처럼 수다만 떨고 헤어진다', 5],
    ],
  },
  {
    q: '친구가 "그 사람한테 그냥 말해봐"라고 했다. 속마음에 가장 가까운 건?',
    opts: [
      ['상대가 나를 어떻게 생각하는지 확신이 생기면 그때 말하고 싶다', 3],
      ['말하는 순간 지금의 소중한 관계가 달라질까 봐 모험을 하고 싶지 않다', 5],
      ['거절당했을 때의 상처를 생각하면 몸이 먼저 얼어붙는다', 1],
      ['나는 기다리는 쪽이고 상대가 먼저 다가오는 게 맞다고 생각한다', 4],
    ],
  },
  {
    q: '썸 상대가 "너 주말에 시간 돼?"라고 물었다. 고백할 기회 같다. 나는?',
    opts: [
      ['주말은 아직 이른 것 같아서 "그때 봐서 얘기하자"며 기회를 다음으로 미룬다', 2],
      ['설레는 마음이 큰데 표현이 서툴러서 "응, 괜찮아"로만 답하고 만다', 6],
      ['내가 너무 반기는 티를 내면 쉬워 보일까 봐 일부러 천천히 답한다', 4],
      ['이 약속이 고백의 자리가 되면 결과가 두려워서 약속 자체가 부담스럽다', 1],
    ],
  },
  {
    q: '상대가 다른 사람과 친하게 지내는 걸 보고 마음이 급해졌다. 나는?',
    opts: [
      ['그래도 내가 먼저 매달리는 건 싫어서 아무렇지 않은 척한다', 4],
      ['이 사람 마음이 나에게 있는지부터 확인하고 싶어서 주변에 은근히 물어본다', 3],
      ['말을 꺼내고 싶은데 뭐라고 해야 할지 몰라서 혼자 속만 태운다', 6],
      ['지금 말하면 급해 보일 것 같아서 조금 더 지켜보다 기회를 놓친다', 2],
    ],
  },
  {
    q: '상대가 "너는 연애 안 해?"라고 묻는다. 속마음은?',
    opts: [
      ['하고 싶은데 마음을 보였다가 차이면 상처가 클 것 같아서 두렵다', 1],
      ['하고 싶은 사람이 지금 내 옆의 친구인데, 말하면 우정까지 잃을까 봐 말을 못 한다', 5],
      ['연애는 하고 싶지만 먼저 좋아한다고 말하는 건 내 자존심이 허락하지 않는다', 4],
      ['하고 싶은 마음은 있는데 그걸 말로 옮기는 방법을 잘 모르겠다', 6],
    ],
  },
  {
    q: '고백하기 좋은 분위기인데 마음속이 시끄럽다. 가장 가까운 건?',
    opts: [
      ['마음은 가득한데 문장이 만들어지지 않고 입이 안 떨어진다', 6],
      ['거절당하는 장면이 머릿속에서 자꾸 재생된다', 1],
      ['지금은 아닌 것 같다는 생각이 계속 들고, 조금 더 좋은 순간이 올 것 같다', 2],
      ['상대가 내게 마음이 있다는 확실한 증거가 없어서 한 걸음이 안 나간다', 3],
    ],
  },
  {
    q: '고백할 기회를 여러 번 놓친 뒤 돌아보니, 가장 큰 이유는?',
    opts: [
      ['상대의 마음을 확신할 수 없어서 말할 용기가 나지 않았다', 3],
      ['먼저 고백하면 지는 것 같아서 상대가 먼저 말하길 기다렸다', 4],
      ['고백이 지금의 관계마저 망가뜨릴까 봐 무서웠다', 5],
      ['더 좋은 타이밍이 올 거라고 믿으며 계속 미뤘다', 2],
    ],
  },
  {
    q: '친구가 내 고백 이야기를 먼저 꺼냈다. 가장 먼저 떠오르는 건?',
    opts: [
      ['편한 친구 사이였는데 이게 깨지면 돌아갈 곳이 없다는 생각', 5],
      ['하고 싶은 말은 많은데 어디서부터 어떻게 말해야 할지 막막함', 6],
      ['상대가 어떻게 생각하는지 알고 싶은데 확인할 방법이 없다는 답답함', 3],
      ['거절당하고 어색해지는 순간이 먼저 떠올라 마음이 움츠러듦', 1],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"내가 먼저 말하면 지는 것 같아"', 4],
      ['"아직 때가 아닌 것 같아"', 2],
      ['"거절당할까 봐 너무 무서워"', 1],
      ['"지금 이대로의 사이도 소중해서 못 깨겠어"', 5],
    ],
  },
];

export const phase3CantConfessFirstQuestions: Phase3CantConfessFirstQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }),
);

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'realReason',
  'shortDescription',
  'description',
  'keywords',
  'blockedMoment',
  'strengths',
  'reasonDetail',
  'frequentSaying',
  'changeTips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3CantConfessFirstResultText)[];

const KO_RESULTS: Phase3CantConfessFirstResult[] = [
  {
    type: 'Type1',
    emoji: '🥶',
    title: L('거절이 두려워 먼저 얼어붙는 사람, 거절 공포형'),
    typeName: L('거절 공포형'),
    realReason: L('거절당했을 때의 아픔을 먼저 상상하고 몸이 얼어붙는다'),
    shortDescription: L(
      '당신은 용기가 없는 게 아닙니다. 아직 일어나지 않은 거절의 아픔을 미리 느끼고 있습니다.',
    ),
    description: L(
      '고백 장면을 떠올리면 성공보다 거절당하는 장면이 먼저 재생됩니다. 상처받을 가능성을 줄이려고 마음을 숨기고, 숨길수록 마음은 더 커집니다. 거절은 두렵지만 고백하지 않아서 생기는 후회 역시 오래 남습니다.',
    ),
    keywords: L('거절 상상·상처 두려움·움츠림·마음 숨김·최악의 장면'),
    blockedMoment: L('고백 장면을 떠올릴 때, 상대가 호감을 확인하는 질문을 던질 때'),
    strengths: L('관계를 가볍게 대하지 않고 마음이 깊으며 상대를 소중히 여김'),
    reasonDetail: L(
      "상대의 반응이 아니라 '거절당하면 내가 감당할 수 없을 것 같다'는 내면의 예상이 장벽",
    ),
    frequentSaying: L('"차이면 어떡해"'),
    changeTips: L(
      "거절당했을 때 가장 두려운 것 한 가지를 적고 '그래도 내가 감당할 수 있는 부분'을 옆에 적어보기\n고백 대신 \"너랑 더 가까워지고 싶어\" 같은 작은 호감 표현부터 시작하기\n거절은 나 자체에 대한 평가가 아니라 '그 사람과의 맞음'에 대한 정보라고 다시 정의하기",
    ),
    oneLiner: L('거절은 아프지만 끝이 아닙니다. 말하지 못한 마음은 오래 남습니다'),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 거절 공포형 🥶 아직 일어나지 않은 거절의 아픔을 미리 느끼는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?',
    ),
    counselingNote: L(
      '거절에 대한 두려움이 연애뿐 아니라 일상 전반에서 크게 힘들다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요',
    ),
  },
  {
    type: 'Type2',
    emoji: '⏳',
    title: L('좋은 때를 계속 기다리는 사람, 타이밍 대기형'),
    typeName: L('타이밍 대기형'),
    realReason: L("'지금은 아닌 것 같아'가 반복되며 때를 계속 뒤로 민다"),
    shortDescription: L(
      '당신은 마음이 없는 게 아닙니다. 완벽한 때를 기다리다 모든 때가 지나가고 있습니다.',
    ),
    description: L(
      '분위기가 완벽하지 않아서, 너무 이른 것 같아서, 조금 더 친해진 뒤가 좋을 것 같아서 매번 다음으로 미룹니다. 신중함이 장점이지만 기다림이 길어질수록 상대의 열기가 식거나 다른 사람이 나타날 수 있습니다. 완벽한 타이밍은 오지 않고, 좋은 타이밍은 대개 지나고 나서야 보입니다.',
    ),
    keywords: L('조금만 더·완벽한 순간·미루기·지켜보기·놓친 기회'),
    blockedMoment: L("기회가 왔는데 '지금은 아닌 것 같아'라는 생각이 먼저 들 때"),
    strengths: L('신중하고 충동적이지 않으며 관계를 책임감 있게 시작하려는 태도'),
    reasonDetail: L('때를 고르는 게 아니라 말하는 순간의 부담을 줄이려고 미루는 습관이 굳어짐'),
    frequentSaying: L('"다음에 말해야지"'),
    changeTips: L(
      '나만의 \'데드라인\'을 정하기. 예: "이번 달 안에 한 번은 마음을 표현한다"\n큰 고백 대신 "다음에 또 보고 싶다"처럼 작은 한마디부터 시작하기\n완벽한 순간이 아니라 \'충분히 괜찮은 순간\'에 말하겠다는 기준으로 바꾸기',
    ),
    oneLiner: L('완벽한 타이밍은 오지 않습니다. 충분히 괜찮은 순간이 이미 지금일 수 있습니다'),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 타이밍 대기형 ⏳ 완벽한 때를 기다리다 모든 때가 지나가는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘',
    ),
  },
  {
    type: 'Type3',
    emoji: '🔍',
    title: L('상대 마음을 확신하고 싶은 사람, 확신 필요형'),
    typeName: L('확신 필요형'),
    realReason: L('상대 마음이 확실해야 움직일 수 있어서 신호만 해석하고 멈춘다'),
    shortDescription: L(
      '당신은 소심한 게 아닙니다. 틀릴 수 있는 추측으로 움직이기보다 확실한 근거를 찾고 있습니다.',
    ),
    description: L(
      '말투, 표정, 답장 속도, 약속 빈도까지 모든 신호를 읽지만 정답은 끝내 나오지 않습니다. 확신이 생길 때까지 기다리면 시간이 흐르고, 상대도 같은 기다림 속에 있을 수 있습니다. 확신은 해석이 아니라 확인에서 생기는 경우가 훨씬 많습니다.',
    ),
    keywords: L('신호 해석·확실한 증거·확인 방법 찾기·곱씹기·추측'),
    blockedMoment: L('상대의 호감 신호가 애매할 때, 확인할 방법이 없다고 느낄 때'),
    strengths: L('상대의 작은 변화까지 알아채는 섬세함과 신중함'),
    reasonDetail: L(
      "'맞을지도 모르는 추측'이 '틀릴 수 있는 확인'보다 안전하게 느껴짐",
    ),
    frequentSaying: L('"이게 호감 신호가 맞는 걸까?"'),
    changeTips: L(
      '신호를 해석하는 대신 "우리 요즘 어떤 사이일까?"라고 가볍게 한 번 물어보기\n상대의 확신을 요구하기보다 내 마음을 먼저 한 줄로 말하기\n확인하고 싶을 때 \'지금 필요한 건 추측일까 대화일까\'를 스스로에게 묻기',
    ),
    oneLiner: L('확신은 해석이 아니라 대화에서 생깁니다. 한 번의 질문이 몇 주의 추측을 끝냅니다'),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 확신 필요형 🔍 상대 마음이 확실해야 움직이는 거래... 이거 너 같아ㅋㅋ 너도 해봐',
    ),
  },
  {
    type: 'Type4',
    emoji: '👑',
    title: L('먼저 말하면 지는 것 같은 사람, 자존심 수호형'),
    typeName: L('자존심 수호형'),
    realReason: L('먼저 마음을 보이는 것이 약한 모습처럼 느껴진다'),
    shortDescription: L(
      '당신은 마음을 숨기려는 게 아닙니다. 먼저 말하면 내가 더 좋아하는 사람이 되는 것 같아 입을 닫고 있습니다.',
    ),
    description: L(
      '쿨한 척하고, 상대가 먼저 다가오길 기다리고, 관심 없는 듯 행동합니다. 자존심은 나를 지켜주는 단단함이지만 기다림이 길어지면 상대는 내 마음을 알 길이 없습니다. 서로 상대가 먼저 말하길 기다리는 소모전이 될 수 있습니다.',
    ),
    keywords: L('먼저 말하면 지는 것·쿨한 척·기다림·자기 보호·소모전'),
    blockedMoment: L('상대의 반응을 확인하기 전, 먼저 마음을 보여야 할 때'),
    strengths: L('자기 기준이 분명하고 관계에서도 스스로를 존중하려는 단단함'),
    reasonDetail: L("고백을 '약함의 고백'으로 해석하고 있어서 마음의 표현이 패배처럼 느껴짐"),
    frequentSaying: L('"걔가 먼저 말해야 하는 거 아냐?"'),
    changeTips: L(
      "고백을 지는 게 아니라 '내가 원하는 걸 선택하는 용기'라고 다시 정의하기\n가볍고 짧은 한마디부터 시작하기. 예: \"나 사실 너 꽤 좋아해\"\n상대가 먼저 말해주길 기다리는 동안 상대도 같은 기다림 속에 있을 수 있음을 떠올리기",
    ),
    oneLiner: L('먼저 마음을 보이는 사람이 약한 게 아니라 용기 있는 사람입니다'),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 자존심 수호형 👑 먼저 말하면 지는 것 같아서 입 닫는 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🧱',
    title: L('지금의 관계를 잃을까 걱정하는 사람, 관계 파괴 걱정형'),
    typeName: L('관계 파괴 걱정형'),
    realReason: L('고백이 지금의 소중한 관계를 깨뜨릴까 봐 현재를 지키려 한다'),
    shortDescription: L(
      '당신은 마음이 약한 게 아닙니다. 지금 있는 소중한 것을 잃지 않으려는 마음이 더 큽니다.',
    ),
    description: L(
      '편한 친구 사이, 자주 보는 일상, 서로 아는 인간관계가 고백 하나로 달라질까 걱정됩니다. 현재를 지키려는 선택이지만, 마음이 커질수록 지금의 관계가 점점 아프게 느껴질 수도 있습니다. 고백의 결과가 어떻든 관계는 달라질 수 있지만 꼭 나빠지는 건 아닙니다.',
    ),
    keywords: L('현재 유지·편한 사이·우정을 잃을까 봐·지금이 소중·변화 두려움'),
    blockedMoment: L('상대와 편하게 지내는 시간이 즐거울 때, 관계가 달라질 가능성을 떠올릴 때'),
    strengths: L('관계를 소중히 지키고 상대와의 시간을 진심으로 아낌'),
    reasonDetail: L("'지금 이 편안함을 잃을 수 있다'는 상실의 가능성이 장벽"),
    frequentSaying: L('"지금도 충분히 좋은데 괜히 망치면 어떡해"'),
    changeTips: L(
      "고백 후 가능한 결과를 '성공·거절·시간이 필요함' 세 가지로 적고 각각 어떻게 대처할지 정하기\n무거운 고백 대신 \"너랑 더 특별한 사이가 되면 좋겠어\"처럼 부담 낮은 문장으로 시작하기\n지금의 관계가 마음을 숨겨야만 유지되는 것은 아닌지 스스로에게 물어보기",
    ),
    oneLiner: L('관계는 한 번의 말로 끝나지 않습니다. 진심은 때로 관계를 더 깊게 만들기도 합니다'),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 관계 파괴 걱정형 🧱 지금의 소중한 사이를 잃을까 봐 못 하는 거래... 이거 너 같아ㅠ 해보고 알려줘',
    ),
  },
  {
    type: 'Type6',
    emoji: '🧩',
    title: L('마음은 큰데 말이 안 나오는 사람, 표현 서툰형'),
    typeName: L('표현 서툰형'),
    realReason: L('하고 싶은 말을 문장으로 꺼내는 방법을 모른다'),
    shortDescription: L(
      '당신은 마음이 작은 게 아닙니다. 마음은 가득한데 그걸 말로 바꾸는 길을 아직 못 찾았습니다.',
    ),
    description: L(
      '머릿속에서는 수십 번 연습했는데 막상 얼굴을 보면 "밥 먹었어?"만 나옵니다. 설렘이 크면 클수록 표현은 더 막힙니다. 이건 성격 문제가 아니라 연습의 문제이고, 문장 틀 하나만 있어도 훨씬 쉬워집니다.',
    ),
    keywords: L('말문 막힘·문장 없음·연습과 실전의 차이·설렘으로 얼어붙음·우물쭈물'),
    blockedMoment: L('상대와 마주 앉았을 때, 상대가 마음을 묻는 질문을 던졌을 때'),
    strengths: L('감정이 깊고 진심이 크며 말보다 마음으로 관계를 대하는 진중함'),
    reasonDetail: L('마음이 부족한 게 아니라 감정을 문장으로 바꾸는 연습과 틀이 부족한 상태'),
    frequentSaying: L('"뭐라고 해야 할지 모르겠어"'),
    changeTips: L(
      "'사실 1줄 + 마음 1줄' 문장 틀로 미리 적어두기. 예: \"너랑 있으면 편해. 그래서 더 알아가고 싶어\"\n얼굴 보고 말하기 어려우면 메시지나 편지로 먼저 전해도 된다고 허락하기\n완벽한 고백이 아니라 서툴러도 진심이 전해지는 한마디면 충분하다는 점 기억하기",
    ),
    oneLiner: L(
      '서툰 진심이 화려한 말보다 오래 남습니다. 문장 하나만 준비해도 마음은 훨씬 잘 전해집니다',
    ),
    shareLine: L(
      '나는 왜 먼저 고백을 못 할까? 결과: 표현 서툰형 🧩 마음은 큰데 문장이 안 나오는 거래... 이거 너 같아 진짜ㅋㅋ 같이 해보자',
    ),
  },
];

export const phase3CantConfessFirstResults: Phase3CantConfessFirstResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3CantConfessFirstResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].results[ri][key]);
  }
  if (r.counselingNote) {
    merged.counselingNote = withForeign(
      r.counselingNote.ko,
      (loc) => PHASE3_CANT_CONFESS_FIRST_I18N[loc].results[ri].counselingNote || '',
    );
  }
  return merged;
});
