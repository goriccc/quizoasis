/**
 * 썸에서 연애로 못 넘어가는 진짜 이유
 * slug: phase3-situationship-stuck-reason
 * 12문항 4지선다 · 6유형
 */

import {
  PHASE3_SITUATIONSHIP_STUCK_I18N,
  type Phase3SituationshipStuckForeignLocale,
  type Phase3SituationshipStuckResultText,
} from './phase3SituationshipStuckReasonI18n';

export type Phase3SituationshipStuckLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3SituationshipStuckLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_SITUATIONSHIP_STUCK_I18N) as Phase3SituationshipStuckForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3SituationshipStuckForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3SituationshipStuckQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3SituationshipStuckResult {
  type: string;
  emoji: string;
  title: LocaleText;
  typeName: LocaleText;
  realReason: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  keywords: LocaleText;
  strengths: LocaleText;
  reasonDetail: LocaleText;
  frequentSaying: LocaleText;
  changeTips: LocaleText;
  oneLiner: LocaleText;
  shareLine: LocaleText;
}

export const PHASE3_SITUATIONSHIP_STUCK_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3SituationshipStuckScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_SITUATIONSHIP_STUCK_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3SituationshipStuckResult(answers: number[]): string {
  const scores = calculatePhase3SituationshipStuckScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_SITUATIONSHIP_STUCK_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(숨은 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3SituationshipStuckHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3SituationshipStuckScores(answers);
  const sorted = [...PHASE3_SITUATIONSHIP_STUCK_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '썸 3주째, 상대가 "이번 주말에 뭐 해?"라고 물었다. 나는?',
    opts: [
      ['"글쎄, 아직 모르겠네~"라고 일부러 여지를 두고 상대의 반응을 살핀다', 4],
      ["나랑 만나자는 뜻일까 싶으면서도 '내가 좋아서 만나자는 건 아니겠지' 하며 소극적으로 답한다", 6],
      ['만나고 싶은데 지금 약속을 잡으면 너무 빠른 건 아닌가 재다가 답을 미룬다', 2],
      ['내가 그리는 분위기 있는 데이트와 상대가 던진 평범한 약속이 달라서 은근히 김이 샌다', 5],
    ],
  },
  {
    q: '밤늦게 상대가 "자기 전에 네 생각났어"라고 보냈다. 나는?',
    opts: [
      ['나한테 그럴 리가 없다며 장난이나 인사치레로 의미를 낮춰 받아들인다', 6],
      ['설레긴 한데 호감인지 그냥 친근함인지 확신이 서지 않아 어떻게 답할지 모르겠다', 1],
      ['바로 답하면 쉬워 보일까 봐 한참 뒤에 시크하게 답한다', 4],
      ['마음은 가지만 선을 넘고 싶지 않아 "ㅋㅋ 고마워~" 하고 가볍게 받아넘긴다', 3],
    ],
  },
  {
    q: '상대가 "우리 요즘 자주 보네"라고 말했다. 나는?',
    opts: [
      ['관계가 깊어지는 느낌이 부담돼서 "그러게, 친해졌네~"라며 친구 선을 유지한다', 3],
      ['나는 연애로 가고 싶은데 상대는 편한 사이로 생각하는 것 같아 온도 차이를 느낀다', 5],
      ['이 말이 썸이라는 뜻인지 그냥 친해졌다는 뜻인지 해석하느라 머리가 복잡하다', 1],
      ["신호 같아서 말을 꺼내볼까 싶었는데 '조금만 더 지켜보자' 하다가 이야기 주제가 바뀐다", 2],
    ],
  },
  {
    q: '썸 한 달째, 이제 관계를 정리해야 할 시점 같다. 나는?',
    opts: [
      ["말해야 할 때인 건 아는데 '다음 만남에서 해야지' 하며 계속 미룬다", 2],
      ['이름을 붙이는 순간 관계가 달라질까 봐 지금처럼 편한 사이로 두고 싶다', 3],
      ['내가 먼저 꺼냈다가 거절당하면 어색해질까 봐 자신이 없어서 못 꺼낸다', 6],
      ['상대가 원하는 관계의 모습이 내가 그리던 연애와 다를 것 같아 말을 아낀다', 5],
    ],
  },
  {
    q: '상대가 "너는 나 어떻게 생각해?"라고 직접 물었다. 나는?',
    opts: [
      ['내가 바라는 관계와 상대가 바라는 게 맞는지 모호해서 애매하게 둘러 답한다', 5],
      ['속마음을 다 보여주면 상처받을 것 같아 "좋은 사람이지~"라며 선을 긋는다', 3],
      ['나도 내 마음이 정확히 뭔지 확신이 안 서서 "잘 모르겠어, 생각해볼게"라고 한다', 1],
      ['일부러 "글쎄, 너는?" 하고 되물어 답을 상대에게 넘긴다', 4],
    ],
  },
  {
    q: '썸 상대의 연락이 이틀째 뜸하다. 나는?',
    opts: [
      ['마음이 변한 건지 확신이 없어서 지난 대화의 신호들을 계속 곱씹는다', 1],
      ["먼저 연락할까 하다가 '조금만 더 기다렸다 보내자' 하며 시기를 놓친다", 2],
      ['내가 별로여서 그런가 보다 하고 먼저 연락하지 않으며 거리를 둔다', 6],
      ['나도 똑같이 연락을 줄여서 상대가 먼저 신경 쓰게 만든다', 4],
    ],
  },
  {
    q: '상대가 "다음 달 주말에 같이 여행 갈래?"라고 제안했다. 나는?',
    opts: [
      ['아직 그 정도로 가까워지기엔 이른 것 같아 핑계를 대며 거절한다', 3],
      ['바로 수락하면 쉬워 보일까 봐 "생각해볼게~" 하고 간을 본다', 4],
      ["가고 싶지만 '조금 더 가까워진 뒤에 가자' 하며 미루다 상대 열기가 식는다", 2],
      ['나랑 가면 실망할 것 같아 "다른 사람이랑 가는 게 더 재밌을걸"이라고 말한다', 6],
    ],
  },
  {
    q: '친구가 "그 사람 너한테 마음 있는 것 같던데?"라고 말했다. 나는?',
    opts: [
      ['나한테? 그럴 리가 없다며 믿지 않는다', 6],
      ['그럼 좀 더 튕겨서 애를 태워볼까 하고 전략을 세운다', 4],
      ['마음이 있어도 내가 바라는 연애 스타일과 맞는 사람인지 따져보게 된다', 5],
      ['본인 입으로 말해준 것도 아니니 직접 들을 때까지 확신이 서지 않는다', 1],
    ],
  },
  {
    q: '썸 상대가 처음으로 고민을 진지하게 털어놓았다. 나는?',
    opts: [
      ['나를 특별하게 여겨서인지 아무에게나 하는 이야기인지 확신이 서지 않는다', 1],
      ['내가 위로를 잘 못하는 사람이라 오히려 실망시킬까 봐 걱정한다', 6],
      ['마음이 가까워지는 게 부담돼서 "힘내~" 정도로 가볍게 받고 선을 둔다', 3],
      ['이 분위기에서 마음을 말할까 싶었지만 지금은 아닌 것 같아 넘기고 나중에 후회한다', 2],
    ],
  },
  {
    q: '썸 3개월째, 관계가 계속 그대로다. 가장 가까운 상황은?',
    opts: [
      ["말할 기회는 여러 번 있었는데 번번이 '다음에'로 넘기다 여기까지 왔다", 2],
      ['상대는 지금의 편한 사이를 원하는 것 같고 나는 연애를 원해서 서로 바라는 게 어긋나 있다', 5],
      ['서로 밀고 당기는 게 재밌어서 선뜻 확정을 짓지 않고 있다', 4],
      ['가까워질수록 불편해져서 어느 선 이상은 마음을 열지 않았다', 3],
    ],
  },
  {
    q: '상대가 "우리 그냥 이렇게 지내는 것도 좋지 않아?"라고 말했다. 나는?',
    opts: [
      ['나는 연애를 원하는데 상대는 지금 관계에 만족하는 것 같아 원하는 게 다르다는 걸 느낀다', 5],
      ['이게 거절인지 아닌지 확신이 안 서서 말의 의미를 계속 곱씹는다', 1],
      ['솔직히 편한 거리가 안전해서 "그러게" 하고 동의한다', 3],
      ['역시 내가 연애 상대로는 부족한가 보다 생각하며 마음을 접는다', 6],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"밀당을 해야 상대가 나를 더 좋아할 것 같다"', 4],
      ['"고백할 타이밍을 재다가 매번 놓치는 것 같다"', 2],
      ['"내가 바라는 연애와 상대가 바라는 관계가 달라 보인다"', 5],
      ['"상대가 나를 어떻게 생각하는지 확신이 없어 한 발 못 나간다"', 1],
    ],
  },
];

export const phase3SituationshipStuckQuestions: Phase3SituationshipStuckQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_SITUATIONSHIP_STUCK_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_SITUATIONSHIP_STUCK_I18N[loc].questions[idx].opts[oi]),
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
  'strengths',
  'reasonDetail',
  'frequentSaying',
  'changeTips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3SituationshipStuckResultText)[];

const KO_RESULTS: Phase3SituationshipStuckResult[] = [
  {
    type: 'Type1',
    emoji: '🔍',
    title: L('상대 마음을 확신하지 못해 멈추는 사람, 확신 부족형 🔍'),
    typeName: L('확신 부족형'),
    realReason: L('신호는 많은데 확신이 없어서 한 걸음을 못 내딛는다'),
    shortDescription: L(
      '당신은 마음이 없는 게 아닙니다. 상대의 마음이 확실하지 않아서 앞으로 나아가지 못하고 있습니다.',
    ),
    description: L(
      "말투, 이모티콘, 답장 속도, 만나는 횟수까지 모든 신호를 해석하지만 정답은 끝내 나오지 않습니다. 확실해질 때까지 기다리다 보면 시간이 흐르고, 상대도 같은 기다림 속에 있을 수 있습니다. 확신은 기다려서 생기기보다 확인해서 생기는 경우가 훨씬 많습니다.\n\n진짜 이유를 풀어보면: 호감이 부족한 게 아니라 '틀릴 수 있는 확인'보다 '맞을지도 모르는 추측'이 더 안전하게 느껴짐",
    ),
    keywords: L('신호 해석, 곱씹기, 확실한 말 기다림, 애매함 불편, 확인 미루기'),
    strengths: L('상대의 작은 변화까지 알아채는 섬세함과 관계를 가볍게 대하지 않는 진중함'),
    reasonDetail: L('상대의 마음을 직접 묻기 전 단계에서 신호만 계속 해석할 때'),
    frequentSaying: L('"이게 썸이 맞는 걸까?"'),
    changeTips: L(
      '신호를 해석하는 대신 "우리 요즘 어떤 사이일까?"라고 가볍게 한 번 물어보기\n확신을 요구하기보다 "나는 너랑 더 가까워지고 싶어"라고 내 마음부터 먼저 말하기\n확인이 필요한 순간에 \'지금 필요한 건 추측일까 대화일까\'를 스스로에게 물어보기',
    ),
    oneLiner: L('확신은 해석이 아니라 대화에서 생깁니다. 한 번의 질문이 몇 주의 추측을 끝낼 수 있습니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 확신 부족형 🔍 신호는 많은데 확신이 없어서 못 나간대... 아 이거 너 같아ㅋㅋ 나랑 같이 해보자 너는 뭐 나올까?',
    ),
  },
  {
    type: 'Type2',
    emoji: '⏰',
    title: L('말하려는 순간을 자꾸 놓치는 사람, 타이밍 놓침형 ⏰'),
    typeName: L('타이밍 놓침형'),
    realReason: L('마음은 정해졌는데 말하는 순간을 번번이 미룬다'),
    shortDescription: L(
      "당신은 용기가 없는 게 아닙니다. '지금은 아닌 것 같아'가 반복되면서 순간이 지나가고 있습니다.",
    ),
    description: L(
      '고백할까, 연락할까, 약속을 잡을까. 조금만 더 지켜보자는 마음이 쌓이는 사이 분위기는 식고 상대는 다른 곳을 바라보기도 합니다. 완벽한 타이밍은 오지 않고, 좋은 타이밍은 대부분 지나고 나서야 알게 됩니다.\n\n진짜 이유를 풀어보면: 감정이 아니라 실행 시점의 문제. 말하는 순간의 부담을 줄이려고 미루는 습관이 굳어짐',
    ),
    keywords: L('조금만 더, 다음에, 망설임, 재는 시간, 후회'),
    strengths: L('신중하고 상대를 배려하며 충동적으로 관계를 망치지 않으려는 태도'),
    reasonDetail: L("말할 수 있는 순간이 왔는데 '조금 더 지켜보자'로 넘길 때"),
    frequentSaying: L('"다음에 보면 그때 말해야지"'),
    changeTips: L(
      "'호감 신호가 오면 일주일 안에 한 번은 마음을 표현한다'는 나만의 규칙 만들기\n고백 같은 큰 말 대신 \"다음에 또 보고 싶다\" 같은 작은 한마디부터 시작하기\n다음 약속을 만나는 자리에서 바로 잡아 '다음에'를 줄이기",
    ),
    oneLiner: L('완벽한 타이밍은 오지 않습니다. 3초의 용기가 몇 달의 후회를 줄여줍니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 타이밍 놓침형 ⏰ 말하려는 순간을 번번이 미룬대... 이거 너 같아ㅋㅋ 3초만 용기 내면 되는데 너도 해봐',
    ),
  },
  {
    type: 'Type3',
    emoji: '🚧',
    title: L('가까워질수록 선을 긋는 사람, 경계 과다형 🚧'),
    typeName: L('경계 과다형'),
    realReason: L('가까워지는 순간 마음의 선을 먼저 긋는다'),
    shortDescription: L(
      '당신은 관심이 없는 게 아닙니다. 관계가 깊어질 것 같을 때 스스로 한 발 물러나 거리를 만듭니다.',
    ),
    description: L(
      "썸은 즐겁지만 '관계의 이름'이 붙는 순간 부담이 커집니다. 그래서 \"친구처럼 편한 사이\"에 머무르거나, 진지한 분위기가 되면 가볍게 넘깁니다. 나를 지키려는 경계가 좋은 인연의 입구까지 막고 있을 수 있습니다.\n\n진짜 이유를 풀어보면: 호감이 부족한 게 아니라 마음을 보여줬을 때 다치거나 달라질 것이 두려워 방어가 먼저 작동함",
    ),
    keywords: L('선 긋기, 편한 친구 사이, 거리 유지, 마음 안 보여주기, 깊어지는 것이 부담'),
    strengths: L('쉽게 휘둘리지 않고 관계에 신중하며, 마음을 열면 깊고 단단한 연애를 함'),
    reasonDetail: L('관계가 깊어질 분위기가 되었을 때 가볍게 넘기며 선을 긋는 순간'),
    frequentSaying: L('"우리 지금 이대로도 좋잖아"'),
    changeTips: L(
      "거리를 두고 싶어지는 순간을 알아차리고 '지금 내가 선을 긋고 있구나'라고 이름 붙이기\n작은 속마음 하나를 먼저 꺼내 상대의 반응을 확인하며 신뢰를 쌓기\n\"천천히 가고 싶은데 마음은 있어\"처럼 선을 긋는 대신 속도를 말로 알려주기",
    ),
    oneLiner: L('경계는 나를 지키는 문입니다. 문을 닫는 대신 한 뼘만 열어두면 좋은 사람이 들어올 수 있습니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 경계 과다형 🚧 가까워질수록 선을 먼저 긋는대... 이거 너 같아ㅠ 결과 보내줘 궁금해',
    ),
  },
  {
    type: 'Type4',
    emoji: '🎭',
    title: L('밀고 당기다 신호가 꼬이는 사람, 밀당 과잉형 🎭'),
    typeName: L('밀당 과잉형'),
    realReason: L('계산한 밀당이 진심까지 가려버린다'),
    shortDescription: L(
      '당신은 마음을 숨기려는 게 아닙니다. 쉬워 보이기 싫어서 쓴 전략이 마음의 신호까지 흐려놓고 있습니다.',
    ),
    description: L(
      "일부러 늦게 답하고, 여지만 주고, 먼저 연락하지 않습니다. 상대는 그 신호를 '관심 없음'으로 읽을 수도, '지금은 조용히 지켜보는 것'으로 읽을 수도 있습니다. 밀당이 길어지면 어느 쪽도 먼저 확정을 짓지 못하는 소모전이 됩니다.\n\n진짜 이유를 풀어보면: 호감이 없어서가 아니라 '먼저 마음을 보이면 내가 지는 것 같다'는 계산이 작동함",
    ),
    keywords: L('간 보기, 일부러 늦게 답, 튕기기, 전략, 확정 미루기'),
    strengths: L('관계의 흐름을 읽는 감각이 있고 호감을 오래 유지하는 긴장감을 만드는 능력'),
    reasonDetail: L('서로 상대가 먼저 움직이길 기다리며 신호가 엇갈리는 때'),
    frequentSaying: L('"너무 쉬워 보이면 안 되잖아"'),
    changeTips: L(
      "밀당할 때마다 '이 행동이 진짜 내 마음일까 전략일까'를 한 번 물어보기\n상대가 마음에 들면 답장 속도를 인위적으로 조절하지 않고 평소 리듬 그대로 보내기\n\"나 사실 너 꽤 좋아해\"처럼 전략 없는 한마디를 먼저 던져 흐름을 바꾸기",
    ),
    oneLiner: L('밀당은 호감을 키우는 양념이지 메인 요리가 아닙니다. 진심 한마디가 열 번의 밀당보다 강합니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 밀당 과잉형 🎭 계산한 밀당이 진심을 가려버린대... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🧩',
    title: L('서로 바라는 그림이 다른 사람, 기대 불일치형 🧩'),
    typeName: L('기대 불일치형'),
    realReason: L('내가 바라는 관계와 상대가 바라는 관계가 서로 다르다'),
    shortDescription: L(
      '당신은 인연이 없는 게 아닙니다. 서로 그리는 연애의 모습이 달라서 한 발씩 어긋나고 있습니다.',
    ),
    description: L(
      "나는 연애를 원하는데 상대는 편한 사이가 좋다고 하고, 나는 분위기 있는 데이트를 기대하는데 상대는 평범한 만남을 제안합니다. 기대의 방향이 어긋나면 서로 좋아해도 관계가 앞으로 나가지 못합니다. 문제는 사람이 아니라 '맞추지 않은 기대'일 수 있습니다.\n\n진짜 이유를 풀어보면: 상대가 부족한 게 아니라 서로의 기대를 말로 맞춰보지 않아서 어긋남이 쌓임",
    ),
    keywords: L('온도 차이, 관계의 속도, 그려둔 연애, 기대와 현실, 맞지 않는 방향'),
    strengths: L('내가 원하는 연애의 기준이 분명하고 관계에서 스스로를 존중하려는 단단함'),
    reasonDetail: L('내가 원하는 관계의 모습을 말하지 않은 채 상대의 반응만 확인하는 때'),
    frequentSaying: L('"내가 바라는 건 이게 아닌데"'),
    changeTips: L(
      "내가 원하는 관계의 모습을 '반드시 필요한 것 3가지'로 정리해 보기\n\"나는 이런 연애를 하고 싶은데 너는 어때?\"라고 기대를 가볍게 먼저 꺼내보기\n어긋남이 느껴질 때 상대를 평가하기 전에 '서로 원하는 속도'부터 확인하기",
    ),
    oneLiner: L('기대는 말하지 않으면 전해지지 않습니다. 서로의 그림을 나란히 놓아보면 의외로 접점이 보입니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 기대 불일치형 🧩 서로 바라는 연애 그림이 달라서 어긋나는 거래... 이거 너 같아 진짜 해보고 알려줘',
    ),
  },
  {
    type: 'Type6',
    emoji: '🌱',
    title: L('나는 안 될 것 같다고 먼저 접는 사람, 자신감 부족형 🌱'),
    typeName: L('자신감 부족형'),
    realReason: L("시도하기 전에 '나는 안 될 거야'라고 먼저 결론 내린다"),
    shortDescription: L(
      '당신은 충분히 괜찮은 사람입니다. 다만 그 사실을 당신만 아직 믿지 못하고 있습니다.',
    ),
    description: L(
      '상대가 호감을 보여도 인사치레로 받아들이고, 고백은 거절당할까 봐 미리 접습니다. 먼저 거리를 두면 상처는 줄지만 연애로 이어질 가능성도 함께 줄어듭니다. 다른 사람은 이미 알아보는 매력을 본인만 못 보는 경우가 많습니다.\n\n진짜 이유를 풀어보면: 상대의 반응보다 내가 나에게 매긴 점수가 먼저 문을 닫고 있음',
    ),
    keywords: L('나는 안 될 것 같음, 인사치레로 해석, 미리 접기, 자기 의심, 위축'),
    strengths: L('겸손하고 상대의 감정에 섬세하며 진심을 다해 관계를 대하는 태도'),
    reasonDetail: L("상대의 호감 신호를 '나한테 그럴 리 없다'고 낮춰 해석할 때"),
    frequentSaying: L('"나 같은 사람을 좋아하겠어?"'),
    changeTips: L(
      "상대가 내게 해준 좋은 말이나 행동을 메모해 두고 의심 없이 다시 읽어보기\n'거절당하면 끝'이 아니라 '시도해본 경험'으로 정의하고 작은 시도부터 해보기\n연애 밖에서 성취한 경험을 모아 자기 신뢰를 쌓기",
    ),
    oneLiner: L('상대는 이미 당신의 매력을 보고 있을지도 모릅니다. 당신이 믿는 만큼 관계도 앞으로 나아갑니다'),
    shareLine: L(
      '썸에서 연애로 못 넘어가는 진짜 이유: 자신감 부족형 🌱 나는 안 될 거야 하고 먼저 접는 거래... 이거 너 같아ㅠ 너는 충분히 괜찮은데 같이 해보자',
    ),
  },
];

export const phase3SituationshipStuckResults: Phase3SituationshipStuckResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3SituationshipStuckResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_SITUATIONSHIP_STUCK_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_SITUATIONSHIP_STUCK_META = {
  title: withForeign(
    '썸에서 연애로 못 넘어가는 진짜 이유',
    (loc) => PHASE3_SITUATIONSHIP_STUCK_I18N[loc].meta.title,
  ),
  description: withForeign(
    '썸은 잘 타는데 왜 연애로는 못 넘어갈까? 12가지 상황에서 관계가 멈추는 진짜 이유와 연애로 넘어가는 법을 알려드립니다.',
    (loc) => PHASE3_SITUATIONSHIP_STUCK_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['썸', '연애유형'],
    en: PHASE3_SITUATIONSHIP_STUCK_I18N.en.meta.tags,
    ja: PHASE3_SITUATIONSHIP_STUCK_I18N.ja.meta.tags,
    'zh-CN': PHASE3_SITUATIONSHIP_STUCK_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_SITUATIONSHIP_STUCK_I18N['zh-TW'].meta.tags,
    vi: PHASE3_SITUATIONSHIP_STUCK_I18N.vi.meta.tags,
    id: PHASE3_SITUATIONSHIP_STUCK_I18N.id.meta.tags,
  },
};
