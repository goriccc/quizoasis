/**
 * 나는 왜 연인에게 사소한 거짓말을 하게 될까?
 * slug: phase3-small-lie-reason
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_SMALL_LIE_REASON_I18N,
  type Phase3SmallLieReasonForeignLocale,
  type Phase3SmallLieReasonResultText,
} from './phase3SmallLieReasonI18n';

export type Phase3SmallLieReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3SmallLieReasonLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_SMALL_LIE_REASON_I18N) as Phase3SmallLieReasonForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3SmallLieReasonForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3SmallLieReasonQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3SmallLieReasonResult {
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

export const PHASE3_SMALL_LIE_REASON_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3SmallLieReasonScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_SMALL_LIE_REASON_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3SmallLieReasonResult(answers: number[]): string {
  const scores = calculatePhase3SmallLieReasonScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_SMALL_LIE_REASON_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3SmallLieReasonHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3SmallLieReasonScores(answers);
  const sorted = [...PHASE3_SMALL_LIE_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "퇴근이 늦어졌는데 연인이 \"벌써 집에 가는 중이야?\"라고 묻는다. 사실은 친구와 한잔하는 중이다. 나는?",
    opts: [
      ["사실대로 말하면 말이 길어지고 분위기가 불편해질 것 같아서 \"응, 가는 중이야\"라고 한다", 2],
      ["괜히 걱정시키고 싶지 않아서 일단 \"응, 가는 중이야. 별일 없어\"라고 한다", 3],
      ["생각해 보기도 전에 \"응, 가는 중이야\"가 입에서 먼저 나온다", 4],
      ["늦게까지 놀았다고 하면 실망할 것 같아서 상대가 기대하는 성실한 모습에 맞춰 \"응, 일찍 들어가는 중이야\"라고 한다", 5],
    ],
  },
  {
    q: "연인이 선물해 준 물건이 내 취향에 맞지 않는다. \"마음에 들어?\"라고 묻는다. 나는?",
    opts: [
      ["정성껏 고른 걸 아는데 실망하는 모습을 보면 마음 아파할까 봐 마음에 든다고 한다", 3],
      ["별생각 없이 \"응, 좋아\"가 먼저 나온다", 4],
      ["선물을 받으면 기뻐해야 한다는 기대에 맞추려고 크게 좋아하는 표정을 짓는다", 5],
      ["취향이 별로라는 게 드러나면 센스 없어 보일까 봐 마음에 드는 이유를 만들어 붙인다", 1],
    ],
  },
  {
    q: "연인이 \"오늘 점심 뭐 먹었어?\"라고 물었다. 사실 대충 편의점 음식으로 때웠다. 나는?",
    opts: [
      ["생각해 보기도 전에 \"그냥 백반 먹었어\"가 입에서 먼저 나온다", 4],
      ["늘 잘 챙겨 먹는 사람이라는 기대에 맞추려고 \"잘 챙겨 먹었어\"라고 말한다", 5],
      ["대충 먹은 모습이 한심해 보일까 봐 조금 괜찮아 보이는 메뉴로 바꿔 말한다", 1],
      ["건강 좀 챙기라는 잔소리가 이어질 것 같아서 \"도시락 먹었어\"라고 넘어간다", 2],
    ],
  },
  {
    q: "연인이 약속 시간에 늦었다고 사과하며 \"많이 기다렸어?\"라고 묻는다. 사실 30분을 기다렸다. 나는?",
    opts: [
      ["늘 괜찮은 사람이어야 할 것 같아서 서운한 마음을 접고 \"하나도 안 기다렸어\"라고 한다", 5],
      ["쿨한 사람처럼 보이고 싶어서 \"나도 방금 왔어\" 하며 웃어넘긴다", 1],
      ["솔직히 기다렸다고 하면 싸움이 될 것 같아서 \"아냐, 나도 방금 왔어\"라고 한다", 2],
      ["미안해하는 모습이 마음에 걸려서 \"괜찮아, 얼마 안 기다렸어\"라고 한다", 3],
    ],
  },
  {
    q: "연인이 \"요즘 무슨 일 있어? 표정이 안 좋은데\"라고 묻는다. 사실 회사에서 힘든 일이 있었다. 나는?",
    opts: [
      ["힘들어하는 모습은 보이고 싶지 않아서 연인 앞에서는 늘 잘 지내는 사람처럼 \"아무 일 없어\"라고 한다", 1],
      ["이야기를 꺼내면 일이 커지고 분위기가 무거워질 것 같아서 \"아냐, 피곤해서 그래\"라고 한다", 2],
      ["힘든 이야기를 하면 신경 쓰고 걱정할까 봐 \"아무 일 없어\"라고 한다", 3],
      ["질문이 오자마자 \"아무 일도 아니야\"가 반사적으로 튀어나온다", 4],
    ],
  },
  {
    q: "연인이 \"너 오늘 다른 사람이랑 있었어?\"라고 가볍게 물었다. 사실 직장 동료와 둘이 식사했다. 나는?",
    opts: [
      ["질문이 나오자마자 습관적으로 \"아니\"가 먼저 나온다", 4],
      ["연인이 기대하는 한결같은 모습에서 어긋날까 봐 \"아니, 혼자 먹었어\"라고 한다", 5],
      ["사실대로 말하면 오해하고 분위기가 불편해질 것 같아서 \"혼자 먹었어\"라고 한다", 2],
      ["괜히 신경 쓰게 만들고 싶지 않아서 별일 아닌 듯 \"혼자 있었어\"라고 한다", 3],
    ],
  },
  {
    q: "연인이 \"너 이거 알아?\"라고 물었는데 사실 잘 모르는 이야기다. 나는?",
    opts: [
      ["모른다고 하면 대화가 어색해지고 실망할 것 같아서 연인이 기대하는 대로 아는 것처럼 맞장구친다", 5],
      ["모른다고 하면 무식해 보일까 봐 아는 척하며 고개를 끄덕인다", 1],
      ["모른다고 하면 상대가 설명하느라 애쓰게 될까 봐 미안해서 \"응, 알아\"라고 넘긴다", 3],
      ["생각보다 먼저 \"응, 알아~\"가 나와버리고 나서 후회한다", 4],
    ],
  },
  {
    q: "연인이 선물한 꽃다발이 시들었는데 \"아직 잘 있지?\"라고 묻는다. 사실 이미 버렸다. 나는?",
    opts: [
      ["선물을 버린 사람처럼 보이기 싫어서 잘 간직하는 정성스러운 사람인 척 \"응, 잘 두고 있어\"라고 한다", 1],
      ["버렸다고 하면 서운해하며 한참 이야기하게 될 것 같아서 \"응, 잘 있어\"라고 한다", 2],
      ["질문을 받으면 별생각 없이 \"응~ 잘 있어\"가 습관처럼 나온다", 4],
      ["선물을 소중히 여기는 사람이어야 한다는 기대에 맞추려고 \"응, 잘 두고 있어\"라고 한다", 5],
    ],
  },
  {
    q: "연인이 \"나한테 숨기는 거 없지?\"라고 물었다. 사실 사소한 걸 숨긴 게 있다. 나는?",
    opts: [
      ["말해버리면 크게 번질 것 같아서 \"없어\"라고 잘라 말하고 넘어간다", 2],
      ["걱정시키고 싶지 않다는 마음이 앞서서 \"응, 없어\"라고 한다", 3],
      ["숨김없이 솔직한 사람이어야 한다는 기대에 맞추려고 \"당연히 없지\"라고 말한다", 5],
      ["숨기는 게 있는 사람으로 비치는 게 부끄러워서 떳떳한 척 \"없어, 걱정 마\"라고 한다", 1],
    ],
  },
  {
    q: "작은 거짓말이 들켜서 연인이 \"왜 그런 걸 숨겼어?\"라고 묻는다. 속마음에 가장 가까운 건?",
    opts: [
      ["걱정하는 모습을 보고 싶지 않아서 숨겼다", 3],
      ["생각해서 한 거짓말이라기보다 나도 모르게 습관처럼 나왔다", 4],
      ["있는 그대로를 말하면 별로인 사람으로 보일까 봐 조금 괜찮아 보이게 덧칠하고 싶었다", 1],
      ["그냥 말하면 싸울 것 같아서 피하고 싶었다", 2],
    ],
  },
];

export const phase3SmallLieReasonQuestions: Phase3SmallLieReasonQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_SMALL_LIE_REASON_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_SMALL_LIE_REASON_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3SmallLieReasonResultText)[];

const KO_RESULTS: Phase3SmallLieReasonResult[] = [
  {
    type: "Type1",
    emoji: "🛡️",
    title: L("좋은 모습만 보여주고 싶은 사람, 체면 방어형 🛡️"),
    typeName: L("체면 방어형"),
    realReason: L("부족해 보이는 모습이 들키는 것이 불편해서 괜찮은 척 덧칠한다"),
    shortDescription: L("당신은 속이려는 게 아닙니다. 연인 앞에서 조금 더 괜찮은 사람으로 보이고 싶은 마음이 작은 덧칠을 만들고 있습니다."),
    description: L("대충 먹은 점심을 조금 괜찮은 메뉴로 말하거나, 모르는 이야기에 아는 척하거나, 괜찮지 않은데 괜찮다고 말합니다. 악의가 아니라 이미지를 지키고 싶은 마음에서 나오는 행동입니다. 다만 덧칠이 쌓이면 상대는 나의 진짜 모습을 알 기회가 줄어듭니다."),
    keywords: L("이미지 관리, 아는 척, 괜찮은 척, 덧칠, 부족함 감추기"),
    strengths: L("자기 관리에 신경 쓰고 상대에게 좋은 모습을 보여주려는 성실함"),
    reasonDetail: L("부족해 보일 수 있는 일상이나 모르는 이야기가 나올 때, 약한 모습을 보이게 될 때"),
    frequentSaying: L("\"응 알아, 나도 그 정도는 해\""),
    changeTips: L("작은 부족함 하나를 일부러 먼저 말해보기. 예: \"사실 오늘 대충 먹었어\"\n모르는 이야기가 나오면 \"그건 잘 몰라, 설명해줘\"라고 한 번 말해보기\n상대가 약한 모습을 봐도 달라지지 않았던 경험을 떠올려 보기"),
    oneLiner: L("덧칠 없는 모습이 오히려 더 가깝게 느껴집니다. 작은 솔직함부터 시작해 보세요"),
    shareLine: L("나는 왜 연인에게 사소한 거짓말을 하게 될까? 결과: 체면 방어형 🛡️ 부족해 보일까 봐 괜찮은 척 덧칠하는 거래... 나 체면 방어형 나왔어ㅋㅋ 너는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "🕊️",
    title: L("싸움이 될까 봐 먼저 접는 사람, 갈등 회피형 🕊️"),
    typeName: L("갈등 회피형"),
    realReason: L("사실대로 말했을 때 생길 불편한 분위기를 피하려고 둘러댄다"),
    shortDescription: L("당신은 거짓말쟁이가 아닙니다. 사실을 말하면 이어질 다툼이나 긴 대화가 부담스러워서 가장 빠른 길을 택하고 있습니다."),
    description: L("늦게까지 놀았다는 말, 오래 기다렸다는 말, 서운했다는 말이 꺼내지는 순간 갈등이 시작될 것 같아서 \"괜찮아\", \"아냐\"로 접습니다. 분위기는 지켜지지만 말하지 않은 사실은 사라지지 않고, 들켰을 때는 더 큰 신뢰 문제로 돌아오기도 합니다."),
    keywords: L("분위기 우선, 괜찮아, 긴 대화 부담, 갈등 예방, 들킬 때의 후폭풍"),
    strengths: L("평화로운 분위기를 만들고 불필요한 싸움을 줄이려는 센스"),
    reasonDetail: L("사실을 말하면 잔소리나 다툼이 이어질 것 같을 때, 서운함이나 불편함을 표현해야 할 때"),
    frequentSaying: L("\"그냥 넘어가자, 별일 아니야\""),
    changeTips: L("불편한 사실을 말할 때 \"싸우려는 게 아니라 알려주고 싶어서\"로 시작하기\n'사실 한 줄 + 내 마음 한 줄'만 짧게 말해 대화를 길게 끌지 않기\n작은 사실부터 그날 안에 말해보며 말해도 관계가 깨지지 않는다는 경험 쌓기"),
    oneLiner: L("말하는 것과 싸우는 것은 다릅니다. 작게 먼저 말할수록 들켰을 때의 싸움은 줄어듭니다"),
    shareLine: L("나는 왜 연인에게 사소한 거짓말을 하게 될까? 결과: 갈등 회피형 🕊️ 싸움 날까 봐 둘러대는 거래... 나 갈등 회피형 나왔어ㅋㅋ 인정 너는?"),
  },
  {
    type: "Type3",
    emoji: "🌂",
    title: L("걱정시키기 싫어서 숨기는 사람, 걱정 차단형 🌂"),
    typeName: L("걱정 차단형"),
    realReason: L("상대가 걱정하거나 마음 아파할까 봐 먼저 막아준다"),
    shortDescription: L("당신은 숨기려는 게 아닙니다. 상대가 걱정할 일을 미리 막아주려는 마음입니다."),
    description: L("힘든 일이 있어도 \"아무 일 없어\"라고 하고, 신경 쓰게 할 만한 일은 \"별일 아니야\"로 넘깁니다. 상대의 마음을 아끼려는 다정한 선택이지만 상대는 내가 힘든 것을 모른 채 지나갈 수 있고, 나중에 알게 되면 오히려 서운해하기도 합니다."),
    keywords: L("걱정 막기, 마음 아끼기, 아무 일 없어, 다정한 거짓말, 혼자 감당"),
    strengths: L("따뜻하고 상대의 마음을 먼저 헤아리며 부담을 주지 않으려는 배려"),
    reasonDetail: L("힘든 일이 있을 때, 상대가 마음 아파할 만한 사실이 있을 때"),
    frequentSaying: L("\"걱정할까 봐 말 안 했어\""),
    changeTips: L("걱정시키지 않을 만큼만 \"오늘 좀 힘들었어, 들어줄래?\"라고 가볍게 먼저 꺼내기\n상대가 걱정하는 것과 내 마음을 나누는 것은 다르다는 점을 기억하기\n숨기고 싶을 때 '말하면 상대가 정말 부담스러워할까?'를 한 번 확인해 보기"),
    oneLiner: L("걱정은 나눌수록 가벼워집니다. 숨기는 배려보다 나누는 배려가 관계를 더 단단하게 합니다"),
    shareLine: L("나는 왜 연인에게 사소한 거짓말을 하게 될까? 결과: 걱정 차단형 🌂 걱정시키기 싫어서 숨기는 다정한 거짓말이래... 나 걱정 차단형 나왔어ㅋㅋ 너는 어떤 유형이야?"),
  },
  {
    type: "Type4",
    emoji: "⚡",
    title: L("입이 먼저 나가는 사람, 습관 반사형 ⚡"),
    typeName: L("습관 반사형"),
    realReason: L("이유를 생각하기도 전에 입에서 먼저 나오는 습관이다"),
    shortDescription: L("당신은 일부러 속이려는 게 아닙니다. 질문이 끝나기도 전에 입이 먼저 답해버리는 반사 습관입니다."),
    description: L("\"응 알아\", \"별일 없어\", \"잘 두고 있어\" 같은 말이 의도 없이 먼저 나오고, 한참 뒤에 '아 사실은 아니었는데' 하고 후회가 따라옵니다. 마음의 이유가 있다기보다 대답하는 방식이 습관으로 굳어서 생긴 패턴입니다."),
    keywords: L("반사적 대답, 입이 먼저, 생각 전에 나옴, 뒤늦은 후회, 굳어진 습관"),
    strengths: L("대화 흐름을 빠르게 이어가고 분위기를 가볍게 만드는 순발력"),
    reasonDetail: L("질문을 받자마자 즉시 답해야 할 것 같을 때, 대화가 빠르게 오갈 때"),
    frequentSaying: L("\"아 맞다, 사실은...\""),
    changeTips: L("질문을 받으면 숨 한 번 쉬고 3초 뒤에 답하는 규칙 만들기\n반사로 나온 말이 사실과 다르면 바로 \"아 잠깐, 사실은 이랬어\"라고 정정하기\n자주 하게 되는 거짓말 한두 가지를 미리 적어두고 그 상황에서 쓸 진짜 문장을 정해두기"),
    oneLiner: L("마음의 문제가 아니라 습관의 문제라면 3초의 여유만으로도 바뀝니다"),
    shareLine: L("나는 왜 연인에게 사소한 거짓말을 하게 될까? 결과: 습관 반사형 ⚡ 이유 없이 입이 먼저 나가는 거래... 나 습관 반사형 나왔어ㅋㅋ 소름 너는 뭐야?"),
  },
  {
    type: "Type5",
    emoji: "🎯",
    title: L("기대에 맞추려고 모양을 바꾸는 사람, 기대 부응형 🎯"),
    typeName: L("기대 부응형"),
    realReason: L("연인이 기대하는 모습에 맞추려다 사실을 바꾼다"),
    shortDescription: L("당신은 속이려는 게 아닙니다. 상대가 기대하는 모습에서 벗어나는 것이 불안해서 모양을 맞추고 있습니다."),
    description: L("늘 괜찮은 사람, 숨김없는 사람, 한결같은 사람이어야 한다고 느껴서 서운함이나 실수를 말하지 못합니다. 상대의 기대를 실망시키는 순간 사랑이 줄어들 것 같아서 사실을 상대가 좋아할 모습으로 바꿔 말합니다."),
    keywords: L("기대 맞추기, 실망시키기 싫음, 한결같은 사람, 상대가 원하는 모습, 압박"),
    strengths: L("책임감이 강하고 상대의 기대에 성실하게 부응하려는 노력"),
    reasonDetail: L("상대가 나에게 기대하는 모습이 분명할 때, 실수나 서운함을 말해야 할 때"),
    frequentSaying: L("\"실망시키고 싶지 않았어\""),
    changeTips: L("상대에게 \"나한테 바라는 게 뭐야?\"라고 직접 물어 상상 속 기대의 크기를 확인하기\n완벽하지 않은 모습을 하나 일부러 보여주고 상대의 반응 확인하기\n'이래야 사랑받는다'는 문장을 '이래도 사랑받을 수 있다'로 바꿔 적어보기"),
    oneLiner: L("기대에 맞추는 사랑은 오래 지치게 합니다. 다르게 보여도 곁에 남는 사람이 진짜입니다"),
    shareLine: L("나는 왜 연인에게 사소한 거짓말을 하게 될까? 결과: 기대 부응형 🎯 상대 기대에 맞추려다 사실을 바꾸는 거래... 나 기대 부응형 나왔어ㅋㅋ 찔림 너는?"),
  },
];

export const phase3SmallLieReasonResults: Phase3SmallLieReasonResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3SmallLieReasonResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_SMALL_LIE_REASON_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_SMALL_LIE_REASON_META = {
  title: withForeign("나는 왜 연인에게 사소한 거짓말을 하게 될까?", (loc) => PHASE3_SMALL_LIE_REASON_I18N[loc].meta.title),
  description: withForeign("굳이 안 해도 될 말인데, 왜 자꾸 둘러대게 될까? 10가지 상황으로 내가 작은 거짓말을 하게 되는 진짜 이유와 솔직해지는 법을 알려드립니다.", (loc) => PHASE3_SMALL_LIE_REASON_I18N[loc].meta.description),
  tags: {
    ko: ["연애거짓말", "연애심리", "연애유형"],
    en: PHASE3_SMALL_LIE_REASON_I18N.en.meta.tags,
    ja: PHASE3_SMALL_LIE_REASON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_SMALL_LIE_REASON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_SMALL_LIE_REASON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_SMALL_LIE_REASON_I18N.vi.meta.tags,
    id: PHASE3_SMALL_LIE_REASON_I18N.id.meta.tags,
  },
};

