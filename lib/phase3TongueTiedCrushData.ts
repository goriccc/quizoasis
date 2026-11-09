/**
 * 나는 왜 썸 상대 앞에서만 말이 꼬일까?
 * slug: phase3-tongue-tied-crush
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_TONGUE_TIED_CRUSH_I18N,
  type Phase3TongueTiedCrushForeignLocale,
  type Phase3TongueTiedCrushResultText,
} from './phase3TongueTiedCrushI18n';

export type Phase3TongueTiedCrushLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3TongueTiedCrushLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_TONGUE_TIED_CRUSH_I18N) as Phase3TongueTiedCrushForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3TongueTiedCrushForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3TongueTiedCrushQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3TongueTiedCrushResult {
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

export const PHASE3_TONGUE_TIED_CRUSH_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3TongueTiedCrushScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_TONGUE_TIED_CRUSH_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3TongueTiedCrushResult(answers: number[]): string {
  const scores = calculatePhase3TongueTiedCrushScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_TONGUE_TIED_CRUSH_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3TongueTiedCrushHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3TongueTiedCrushScores(answers);
  const sorted = [...PHASE3_TONGUE_TIED_CRUSH_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "썸 상대와 단둘이 카페에 앉았다. 첫마디를 꺼내려는 순간 나는?",
    opts: [
      ["어떤 말이 가장 멋져 보일지 머릿속으로 문장을 다듬다 타이밍을 놓친다", 2],
      ["이 말을 하면 어떻게 평가할까 싶어 말하기 전부터 위축된다", 3],
      ["심장이 너무 빨리 뛰어서 평소의 말투가 아니라 목소리가 들뜬다", 4],
      ["말을 꺼내면 실수할 것 같아서 일단 조용히 웃기만 한다", 5]
    ],
  },
  {
    q: "썸 상대가 \"요즘 뭐 하고 지내?\"라고 물었다. 나는?",
    opts: [
      ["대답을 하면서 상대가 내 말을 어떻게 판단할까 신경 쓰여 말이 짧아진다", 3],
      ["설레는 마음이 너무 커서 하고 싶은 말이 한꺼번에 튀어나와 문장이 뒤엉킨다", 4],
      ["별일 없다며 짧게 답하고 더 이상 말을 이어가지 않는다", 5],
      ["이 사람 앞이라는 생각이 머리를 가득 채워서 평소 하던 말도 하나도 생각나지 않는다", 1]
    ],
  },
  {
    q: "대화 중 갑자기 침묵이 흘렀다. 나는?",
    opts: [
      ["심장 소리가 들릴 것 같고 신경이 곤두서서 아무 말도 떠오르지 않는다", 4],
      ["말을 하면 오히려 실수할 것 같아서 침묵을 그냥 두는 편이 안전하다고 느낀다", 5],
      ["모든 신경이 이 사람에게 쏠려서 머리가 하얘진다", 1],
      ["침묵을 깰 만큼 멋진 말을 찾느라 고민하다 더 어색해진다", 2]
    ],
  },
  {
    q: "상대가 내 이야기를 웃으며 듣고 있다. 나는?",
    opts: [
      ["이야기를 이어가기보다 화제를 얼른 상대 쪽으로 넘긴다", 5],
      ["이 순간이 너무 의미 있어서 모든 걸 잘해야 한다는 생각에 입이 얼어붙는다", 1],
      ["방금 한 말이 완벽했는지 되짚으며 다음 말을 더 매끄럽게 하려고 계산한다", 2],
      ["웃는 모습이 마음에 들어서 내가 이상하게 보일까 걱정이 앞선다", 3]
    ],
  },
  {
    q: "상대에게 농담을 던지려는 순간 나는?",
    opts: [
      ["상대가 신경 쓰이다 보니 평소에 하던 농담의 타이밍을 계속 놓친다", 1],
      ["가장 센스 있어 보이는 농담을 고르느라 시간이 지나 흐름이 끊긴다", 2],
      ["이 농담이 재미없으면 어쩌나 평가받을까 두려워 삼킨다", 3],
      ["웃음이 먼저 터져서 문장을 끝맺지 못하고 말이 꼬인다", 4]
    ],
  },
  {
    q: "상대 앞에서 말하다 말실수를 했다. 나는?",
    opts: [
      ["가슴이 두근거려서 실수한 말을 고치지도 못하고 얼굴이 빨개진다", 4],
      ["이 이후로 말을 줄이는 게 낫겠다 싶어 입을 닫는다", 5],
      ["실수한 걸 만회하려고 더 완벽한 문장을 만들려다 오히려 말이 꼬인다", 2],
      ["방금 실수 때문에 이 사람이 나를 이상하게 볼까 마음이 쿵 내려앉는다", 3]
    ],
  },
  {
    q: "상대가 \"너 평소엔 말 잘하는데 오늘은 왜 이래?\"라고 웃었다. 나는?",
    opts: [
      ["말없이 웃으며 대화를 끝내려고 화제를 돌린다", 5],
      ["사실 너 앞이라서 모든 게 의식돼서 그렇다고 말하고 싶지만 얼굴만 붉어진다", 1],
      ["이 말도 평가인가 싶어 더 위축되어 입을 다문다", 3],
      ["설레서 어쩔 줄 모르겠다는 마음이 얼굴과 목소리로 다 드러난다", 4]
    ],
  },
  {
    q: "썸 상대에게 보낼 메시지를 쓰고 있다. 나는?",
    opts: [
      ["상대가 신경 쓰이다 보니 쓰고 지우기를 열 번 넘게 반복한다", 1],
      ["가장 완벽한 문장이 될 때까지 몇 번을 고치며 보내지 못한다", 2],
      ["설레는 마음이 앞서서 문장이 길어지고 두서없이 쓰다가 부끄러워 지운다", 4],
      ["괜히 말이 꼬일 것 같아서 한두 단어만 보내고 마무리한다", 5]
    ],
  },
  {
    q: "상대 앞에서 내 이야기를 길게 해야 하는 상황이다. 나는?",
    opts: [
      ["내가 말하는 방식이 어떻게 보일지 연출까지 신경 쓰느라 오히려 어색해진다", 2],
      ["어떤 반응을 보일지 평가가 두려워서 말하기 전부터 손에 땀이 난다", 3],
      ["말하다 실수할까 봐 말끝을 흐리고 짧게 마무리한다", 5],
      ["이 순간 이 사람에게 쏠린 모든 신경 때문에 하려던 말이 머릿속에서 사라진다", 1]
    ],
  },
  {
    q: "헤어지고 집에 와서 오늘 대화를 떠올렸다. 가장 가까운 후회는?",
    opts: [
      ["방금 한 말이 이상하게 들렸을까 평가가 두려워서 계속 떠올린다", 3],
      ["설레서 어쩔 줄 몰랐던 내 모습이 생각나 얼굴이 뜨거워진다", 4],
      ["하고 싶은 말은 하나도 못 하고 상대에게만 온 신경이 쏠려 있던 내가 떠오른다", 1],
      ["더 멋지게 말할 수 있었는데 하고 완벽한 장면을 다시 연출해 본다", 2]
    ],
  },
];

export const phase3TongueTiedCrushQuestions: Phase3TongueTiedCrushQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_TONGUE_TIED_CRUSH_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_TONGUE_TIED_CRUSH_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3TongueTiedCrushResultText)[];

const KO_RESULTS: Phase3TongueTiedCrushResult[] = [
  {
    type: "Type1",
    emoji: "🎯",
    title: L("그 사람에게만 모든 신경이 쏠리는 사람, 과몰입 긴장형 🎯"),
    typeName: L("과몰입 긴장형"),
    realReason: L("상대에게 신경이 한꺼번에 쏠려 평소의 자연스러움이 사라진다"),
    shortDescription: L("당신은 말을 못 하는 게 아닙니다. 그 사람에게 신경이 전부 쏠려서 평소의 나를 꺼낼 여유가 없는 것입니다."),
    description: L("친구 앞에서는 쉽게 나오던 농담과 문장이 그 사람 앞에서는 머릿속에서 사라집니다. 의식이 상대에게만 향하다 보니 내 말을 꺼낼 공간이 줄어듭니다. 이건 말솜씨의 문제가 아니라 주의가 한곳에 몰리는 현상입니다.\n\n진짜 이유를 풀어보면: 상대가 부담스러운 게 아니라 의식이 상대에게 쏠려 내 말에 쓸 에너지가 줄어든 상태"),
    keywords: L("신경 쏠림, 머리가 하얘짐, 평소와 다름, 의식 과잉, 쓰고 지우기"),
    strengths: L("상대에게 진심으로 집중하고 작은 변화도 놓치지 않는 몰입력"),
    reasonDetail: L("단둘이 있을 때, 침묵이 흐를 때, 메시지를 쓸 때"),
    frequentSaying: L("\"머리가 하얘졌어\""),
    changeTips: L("만나기 전 \"오늘 할 이야기 소재 3가지\"를 메모해 두기\n긴장될 때 숨을 천천히 내쉬고 상대 대신 눈앞의 물건 하나에 잠깐 시선 두기\n말이 막히면 \"너 앞이라 좀 긴장돼\"라고 솔직하게 말해 부담 줄이기"),
    oneLiner: L("머리가 하얘지는 건 마음이 크다는 증거입니다. 소재 몇 개와 솔직한 한마디면 충분합니다"),
    shareLine: L("나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 과몰입 긴장형 🎯 그 사람에게 신경이 다 쏠려서 머리가 하얘진대... 나 과몰입 긴장형 나왔어ㅋㅋ 너는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "🎭",
    title: L("멋지게 보이려고 말을 고르는 사람, 완벽 연출형 🎭"),
    typeName: L("완벽 연출형"),
    realReason: L("가장 멋진 모습으로 보이려고 문장을 연출하다 흐름이 끊긴다"),
    shortDescription: L("당신은 말이 서툰 게 아닙니다. 가장 좋은 말만 내보내려다 말할 타이밍을 놓치고 있습니다."),
    description: L("센스 있는 농담, 멋진 문장, 완벽한 첫마디를 머릿속에서 계속 고르고 다듬습니다. 다듬는 사이 대화는 지나가고, 어렵게 꺼낸 말은 어색하게 들립니다. 연출이 강할수록 자연스러운 모습이 가려집니다.\n\n진짜 이유를 풀어보면: 대화가 아니라 '내가 어떻게 보일까'라는 연출에 에너지가 쓰이고 있음"),
    keywords: L("문장 다듬기, 멋져 보이기, 타이밍 놓침, 계산, 연출"),
    strengths: L("상대에게 좋은 인상을 주려는 노력과 센스가 있고 섬세함"),
    reasonDetail: L("첫마디를 꺼낼 때, 농담을 던질 때, 메시지를 보낼 때"),
    frequentSaying: L("\"더 멋지게 말할 수 있었는데\""),
    changeTips: L("문장을 다듬는 횟수를 '한 번'으로 정하고 그다음엔 그대로 말해 보기\n멋진 말 대신 솔직한 한 줄 먼저 던지기. 예: \"오늘 너 만나서 기분 좋아\"\n완벽한 문장보다 자연스러운 어색함이 더 호감이라는 점 기억하기"),
    oneLiner: L("완벽한 문장은 필요 없습니다. 조금 어색해도 진심이 담긴 한마디가 더 가깝게 닿습니다"),
    shareLine: L("나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 완벽 연출형 🎭 멋지게 말하려다 타이밍을 놓치는 거래... 나 완벽 연출형 나왔어ㅋㅋ 인정 너는?"),
  },
  {
    type: "Type3",
    emoji: "🔍",
    title: L("평가받는 것이 두려운 사람, 평가 공포형 🔍"),
    typeName: L("평가 공포형"),
    realReason: L("내 말이 어떻게 평가될지 두려워 말하기 전부터 위축된다"),
    shortDescription: L("당신은 할 말이 없는 게 아닙니다. 내 말이 어떻게 판단될지 두려워서 입이 먼저 얼어붙습니다."),
    description: L("방금 한 말이 이상했나, 농담이 재미없으면 어쩌지 하는 생각이 말하기 전과 후를 채웁니다. 상대의 작은 표정도 평가처럼 읽히고, 말은 더 짧아집니다. 헤어진 뒤에도 장면을 반복해서 되감으며 자책하기도 합니다.\n\n진짜 이유를 풀어보면: 상대의 실제 평가보다 내가 상상한 평가가 말을 막고 있음"),
    keywords: L("평가 두려움, 위축, 표정 해석, 되감기, 말이 짧아짐"),
    strengths: L("말을 신중하게 고르고 상대에게 실례하지 않으려는 섬세함"),
    reasonDetail: L("농담을 던지려 할 때, 말실수를 한 뒤, 상대의 반응을 살필 때"),
    frequentSaying: L("\"내가 이상하게 들렸을까?\""),
    changeTips: L("상대의 표정을 해석하기 전에 '실제로 한 말'만 사실로 떠올려 보기\n말실수는 \"아 방금 말 꼬였다ㅋㅋ\"처럼 웃으며 인정하고 넘기기\n헤어진 뒤 되감기가 시작되면 \"상대가 실제로 한 반응\" 세 가지만 적어 보기"),
    oneLiner: L("상대는 당신을 심사하는 게 아니라 알아가는 중입니다. 평가 대신 대화에 주의를 돌려 보세요"),
    shareLine: L("나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 평가 공포형 🔍 평가받을까 봐 입이 먼저 얼어붙는 거래... 나 평가 공포형 나왔어ㅋㅋ 찔림 너는 어떤 유형이야?"),
  },
  {
    type: "Type4",
    emoji: "💓",
    title: L("설렘이 너무 커서 넘치는 사람, 설렘 과열형 💓"),
    typeName: L("설렘 과열형"),
    realReason: L("설렘이 커서 심장과 말의 속도가 맞지 않아 문장이 뒤엉킨다"),
    shortDescription: L("당신은 말이 서툰 게 아니라 마음이 너무 빨리 뛰고 있습니다. 설렘의 속도를 말이 못 따라가는 것입니다."),
    description: L("하고 싶은 말이 한꺼번에 몰려 순서가 엉키고, 웃음이 먼저 터져 문장을 끝맺지 못합니다. 목소리가 들뜨고 얼굴이 붉어져서 티가 다 납니다. 감정이 솔직하게 드러나는 건 약점이 아니라 매력이기도 합니다.\n\n진짜 이유를 풀어보면: 말솜씨가 아니라 감정의 속도가 말의 속도보다 빠른 상태"),
    keywords: L("두근거림, 말이 뒤엉킴, 얼굴 빨개짐, 들뜬 목소리, 감정이 앞섬"),
    strengths: L("감정이 솔직하고 풍부하며 설렘을 숨김없이 표현하는 진심"),
    reasonDetail: L("상대가 웃을 때, 칭찬받을 때, 메시지를 쓸 때"),
    frequentSaying: L("\"나 지금 너무 설레서 말이 안 나와\""),
    changeTips: L("말하기 전에 3초 호흡으로 심박을 낮추고 한 문장씩 천천히 말하기\n하고 싶은 말이 많을 땐 가장 중요한 한 가지만 먼저 꺼내기\n설렘이 티 날 땐 \"나 지금 좀 떨려\"라고 인정하면 오히려 편해지기"),
    oneLiner: L("설렘이 티 나는 건 약점이 아니라 진심입니다. 속도만 조금 늦추면 마음이 또렷이 전해집니다"),
    shareLine: L("나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 설렘 과열형 💓 설렘이 커서 말이 못 따라가는 거래... 나 설렘 과열형 나왔어ㅋㅋ 소름 너는 뭐야?"),
  },
  {
    type: "Type5",
    emoji: "🤐",
    title: L("말을 아껴 스스로를 지키는 사람, 침묵 방어형 🤐"),
    typeName: L("침묵 방어형"),
    realReason: L("실수가 두려워 말을 줄이고 입을 닫아 대화가 끊긴다"),
    shortDescription: L("당신은 말하고 싶지 않은 게 아닙니다. 실수할까 봐 말을 아끼는 쪽이 안전하다고 느끼고 있습니다."),
    description: L("화제를 상대에게 넘기고, 짧게 대답하고, 웃으며 넘기는 방식으로 위험을 줄입니다. 실수는 줄지만 상대는 나를 알 기회가 줄어 관심이 없는 것으로 오해하기도 합니다. 안전한 침묵이 거리가 되기 쉬운 타입입니다.\n\n진짜 이유를 풀어보면: 말을 못 하는 게 아니라 실수를 피하려는 방어가 대화를 줄이고 있음"),
    keywords: L("말 줄이기, 화제 넘기기, 짧은 대답, 실수 회피, 안전한 침묵"),
    strengths: L("신중하고 상대의 말을 잘 들어주며 차분한 인상을 줌"),
    reasonDetail: L("침묵이 흐를 때, 말실수를 한 직후, 상대가 내 이야기를 기다릴 때"),
    frequentSaying: L("\"아, 그냥... 별일 없어\""),
    changeTips: L("짧은 대답 뒤에 내 이야기 한 줄을 덧붙이기. 예: \"나는 이번 주에 영화 봤어\"\n하루 한 번 작은 대화(인사·안부)에서 말 한 줄 더 얹는 연습하기\n실수해도 대화는 이어진다는 경험을 쌓기 위해 일부러 작은 실수를 허용하기"),
    oneLiner: L("침묵은 안전하지만 거리가 됩니다. 한 줄만 더 말해도 상대는 당신을 더 알게 됩니다"),
    shareLine: L("나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 침묵 방어형 🤐 실수할까 봐 말을 아끼는 거래... 나 침묵 방어형 나왔어ㅋㅋ 인정 너는?"),
  },
];

export const phase3TongueTiedCrushResults: Phase3TongueTiedCrushResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3TongueTiedCrushResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_TONGUE_TIED_CRUSH_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_TONGUE_TIED_CRUSH_META = {
  title: withForeign(
    "나는 왜 썸 상대 앞에서만 말이 꼬일까?",
    (loc) => PHASE3_TONGUE_TIED_CRUSH_I18N[loc].meta.title,
  ),
  description: withForeign(
    "평소엔 말 잘하는데 왜 그 사람 앞에서만 버벅일까? 10가지 상황으로 말이 꼬이는 진짜 이유와 편하게 말하는 법을 알려드립니다.",
    (loc) => PHASE3_TONGUE_TIED_CRUSH_I18N[loc].meta.description,
  ),
  tags: {
    ko: ["썸", "연애심리"],
    en: PHASE3_TONGUE_TIED_CRUSH_I18N.en.meta.tags,
    ja: PHASE3_TONGUE_TIED_CRUSH_I18N.ja.meta.tags,
    'zh-CN': PHASE3_TONGUE_TIED_CRUSH_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_TONGUE_TIED_CRUSH_I18N['zh-TW'].meta.tags,
    vi: PHASE3_TONGUE_TIED_CRUSH_I18N.vi.meta.tags,
    id: PHASE3_TONGUE_TIED_CRUSH_I18N.id.meta.tags,
  },
};
