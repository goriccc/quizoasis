/**
 * 나는 왜 연애에서 늘 을이 될까?
 * slug: phase3-always-the-weaker-in-love
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N,
  type Phase3AlwaysTheWeakerInLoveForeignLocale,
  type Phase3AlwaysTheWeakerInLoveResultText,
} from './phase3AlwaysTheWeakerInLoveI18n';

export type Phase3AlwaysTheWeakerInLoveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3AlwaysTheWeakerInLoveLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N) as Phase3AlwaysTheWeakerInLoveForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3AlwaysTheWeakerInLoveForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3AlwaysTheWeakerInLoveQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3AlwaysTheWeakerInLoveResult {
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

export const PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3AlwaysTheWeakerInLoveScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

export function calculatePhase3AlwaysTheWeakerInLoveResult(answers: number[]): string {
  const scores = calculatePhase3AlwaysTheWeakerInLoveScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

export function getPhase3AlwaysTheWeakerInLoveHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3AlwaysTheWeakerInLoveScores(answers);
  const sorted = [...PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "연인과 주말 약속을 잡는다. 나는?",
    opts: [
      ["연락이 오기를 기다리다 못해 먼저 보내고 \"나 좋아하는 거 맞지?\"를 확인하고 싶어진다", 2],
      ["내가 원하는 날짜를 말했다가 거절당할까 봐 말을 꺼내지 못한다", 3],
      ["상대가 피곤해 보여서 내 시간과 비용을 더 들여서라도 내가 움직이기로 한다", 4],
      ["어디서 뭘 할지 정하는 일은 상대에게 맡기고 \"너 편한 대로\"라고 한다", 5],
    ],
  },
  {
    q: "연인이 약속 시간에 30분 늦었다. 나는?",
    opts: [
      ["서운하다고 하면 상대가 멀어질까 봐 \"괜찮아\"라고 웃어 넘긴다", 3],
      ["기다린 시간은 아깝지만 내가 더 일찍 나와 자리를 잡은 거라며 손해를 감수한다", 4],
      ["다음 약속 시간은 이번에도 상대가 정하게 두고 나는 따른다", 5],
      ["상대의 평소 스타일에 맞추려고 서운함을 접고 오히려 내가 더 미안한 척한다", 1],
    ],
  },
  {
    q: "연인이 며칠째 연락이 뜸하다. 나는?",
    opts: [
      ["내가 먼저 연락하고 안부와 선물까지 챙겨 내가 더 많이 주는 쪽이 된다", 4],
      ["연락이 없으니 이후 일은 상대가 정할 때까지 기다리기만 한다", 5],
      ["상대가 바빠서 그런 거라며 내 서운함은 접고 상대의 리듬에 계속 맞춘다", 1],
      ["내 마음이 어떤지 확인받고 싶어 대화창을 계속 열어보며 답을 기다린다", 2],
    ],
  },
  {
    q: "연인이 \"오늘 뭐 먹고 싶어?\"라고 물었다. 나는?",
    opts: [
      ["내 의견을 내기보다 \"네가 정해줘\"라고 선택권을 통째로 넘긴다", 5],
      ["상대가 좋아하는 메뉴를 떠올려 그걸로 맞추고 내 취향은 접는다", 1],
      ["어떤 메뉴를 말해도 나를 좋아하는 게 맞는지 은근히 반응을 살피며 확인하고 싶다", 2],
      ["내가 먹고 싶은 건 말했다가 부담스러워할까 봐 아무거나 괜찮다고 한다", 3],
    ],
  },
  {
    q: "연인이 \"이번 휴가 어디 갈래?\"라고 물었다. 나는?",
    opts: [
      ["상대가 가고 싶은 곳을 먼저 파악해 거기에 내 일정과 취향을 맞춘다", 1],
      ["어디를 가도 상대가 정말 나를 좋아하는지 확신이 안 서서 자꾸 마음을 확인하고 싶다", 2],
      ["내가 원하는 곳을 말했다가 불편해할까 봐 거절당하는 장면이 먼저 떠오른다", 3],
      ["비용과 예약, 일정 조율을 내가 도맡아 더 많이 부담한다", 4],
    ],
  },
  {
    q: "연인이 \"이번 주는 따로 보내자\"고 말했다. 나는?",
    opts: [
      ["내가 더 아쉬워도 티 내지 않고 오히려 상대 일정을 도와주며 손해를 감수한다", 4],
      ["우리 관계가 앞으로 어떻게 될지는 상대가 정하는 거라며 판단을 넘긴다", 5],
      ["따로 보내는 사이 상대 마음이 변한 건 아닌지 확인받고 싶어 불안해진다", 2],
      ["싫다고 하면 이별 이야기로 번질까 봐 아쉬운 마음을 삼키고 \"응\"이라고 한다", 3],
    ],
  },
  {
    q: "연인과 의견이 갈렸다. 나는?",
    opts: [
      ["결론은 늘 상대가 내리도록 맡기고 나는 따라가는 쪽을 택한다", 5],
      ["상대 의견에 맞추면 편해지니 내 의견은 접고 상대 쪽으로 기운다", 1],
      ["내 의견을 고집하면 거절당하거나 멀어질까 봐 말을 삼킨다", 3],
      ["내가 양보하고 손해를 보는 게 마음 편해서 내 몫을 먼저 포기한다", 4],
    ],
  },
  {
    q: "연인이 기념일을 잊고 지나갔다. 나는?",
    opts: [
      ["상대가 바빴을 거라며 서운함은 접고 상대의 리듬에 맞춰 넘어간다", 1],
      ["기념일을 잊은 건 나를 덜 좋아한다는 뜻 같아 마음을 확인하고 싶어진다", 2],
      ["서운해도 내가 먼저 선물과 이벤트를 챙겨 상대에게 더 베푼다", 4],
      ["어떻게 할지는 상대가 알아서 정할 일이라며 나는 기다리기만 한다", 5],
    ],
  },
  {
    q: "연인이 \"요즘 너 좀 힘들어 보여\"라고 말했다. 나는?",
    opts: [
      ["이 말이 나를 걱정하는 건지 귀찮아하는 건지 마음을 확인하고 싶다", 2],
      ["힘들다고 털어놓으면 부담스러워할까 봐 괜찮다고 말을 삼킨다", 3],
      ["어떻게 해야 할지는 상대가 정해 주면 따르겠다고 생각한다", 5],
      ["내 힘듦은 접고 상대 기분에 맞추려고 오히려 밝은 척한다", 1],
    ],
  },
  {
    q: "연애에서 늘 을이 되는 가장 솔직한 이유를 한 문장으로 말한다면?",
    opts: [
      ["\"거절당하거나 버려질까 봐 내 요구를 못 해\"", 3],
      ["\"내가 더 주고 손해 보는 쪽이 마음이 편해\"", 4],
      ["\"상대에게 맞추는 게 습관이 돼서 내 것을 접어\"", 1],
      ["\"마음을 확인받지 못하면 불안해서 계속 기다려\"", 2],
    ],
  },
];

export const phase3AlwaysTheWeakerInLoveQuestions: Phase3AlwaysTheWeakerInLoveQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3AlwaysTheWeakerInLoveResultText)[];

const KO_RESULTS: Phase3AlwaysTheWeakerInLoveResult[] = [
  {
    type: "Type1",
    emoji: "🧩",
    title: L("상대에게 맞추는 게 습관인 사람, 맞춰주기형 🧩"),
    typeName: L("맞춰주기형"),
    realReason: L("상대의 기준과 리듬에 맞추며 내 선택을 접는 것이 습관이 되었다"),
    shortDescription: L("당신은 약한 사람이 아닙니다. 관계를 편하게 하려고 맞추는 쪽을 선택하다 보니 내 자리가 작아졌습니다."),
    description: L("약속, 메뉴, 일정, 휴가까지 상대의 기준을 먼저 파악하고 내 취향은 접습니다. 갈등은 줄지만 내가 원하는 것이 점점 흐려지고, 상대는 나의 선호를 알 기회가 없습니다. 맞춤이 길어지면 관계의 저울은 자연스럽게 한쪽으로 기웁니다.\n\n진짜 이유를 풀어보면: 맞추는 방식이 갈등을 줄이는 가장 쉬운 길이라 내 의견이 설 자리가 줄어든 상태"),
    keywords: L("맞춤, 내 취향 접기, 상대 리듬, 서운함 접기, 습관"),
    strengths: L("상대를 배려하고 평화로운 분위기를 만드는 조율 능력"),
    reasonDetail: L("일정을 정할 때, 상대가 늦거나 연락이 뜸할 때, 의견이 갈릴 때"),
    frequentSaying: L("\"네가 편한 대로 해\""),
    changeTips: L("하루에 작은 선택 하나(메뉴·영화)는 내 의견으로 정해 말해 보기\n\"나는 이게 좋은데 너는 어때?\"로 내 의견을 먼저 꺼내기\n맞춘 날에는 나를 위한 작은 보상을 일정에 넣기"),
    oneLiner: L("맞추는 마음은 소중하지만 나를 지우는 맞춤은 오래가지 않습니다. 내 의견이 있어야 균형도 있습니다"),
    shareLine: L("나는 왜 연애에서 늘 을이 될까? 결과: 맞춰주기형 🧩 맞추는 게 습관이 돼서 내 자리가 작아진 거래... 이거 내 얘기라 소름 저장해둠 너는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "🔍",
    title: L("마음을 확인받아야 안심하는 사람, 확신 갈구형 🔍"),
    typeName: L("확신 갈구형"),
    realReason: L("상대의 마음을 확인받지 못해 불안해서 늘 기다리고 확인을 구한다"),
    shortDescription: L("당신은 약한 사람이 아닙니다. 상대의 마음이 확실하지 않아서 기다리는 쪽에 서게 됩니다."),
    description: L("연락을 기다리고, 반응을 살피고, 마음을 확인하고 싶어 대화창을 열어봅니다. 확인받는 순간 잠깐 안심하지만 곧 다시 기다림이 시작됩니다. 확신을 상대에게 의존하면 관계의 주도권은 자연스럽게 상대에게 넘어갑니다.\n\n진짜 이유를 풀어보면: 사랑이 부족한 게 아니라 확신의 근거를 상대의 반응에서만 찾고 있는 상태"),
    keywords: L("기다림, 마음 확인, 연락 확인, 반응 살핌, 안심 갈증"),
    strengths: L("관계에 진심이고 상대의 작은 변화까지 놓치지 않는 섬세함"),
    reasonDetail: L("연락이 뜸할 때, 약속이 바뀔 때, 기념일이 지나갈 때"),
    frequentSaying: L("\"나 좋아하는 거 맞지?\""),
    changeTips: L("확인하고 싶을 때 '지금 필요한 건 확인일까 안정일까'를 먼저 묻기\n돌려 묻는 대신 \"오늘은 안심시켜 줄래?\"라고 원하는 것을 직접 말하기\n상대 반응 없이도 나를 채우는 활동을 일주일에 하나 늘리기\n확인받아도 안심이 이어지지 않고 불안이 일상에 영향을 줄 정도라면 심리상담 전문가와 이야기해 보세요"),
    oneLiner: L("확신은 밖에서만 오지 않습니다. 내 안에도 샘 하나를 만들어 두면 기다림이 가벼워집니다"),
    shareLine: L("나는 왜 연애에서 늘 을이 될까? 결과: 확신 갈구형 🔍 마음을 확인받아야 안심해서 기다리는 쪽이 되는 거래... 이거 내 얘기라 소름ㅠ 저장 필수"),
  },
  {
    type: "Type3",
    emoji: "🥀",
    title: L("거절당할까 봐 말을 삼키는 사람, 거절 불안형 🥀"),
    typeName: L("거절 불안형"),
    realReason: L("요구하면 거절당하거나 멀어질까 봐 내 마음을 말하지 못한다"),
    shortDescription: L("당신은 요구가 없는 게 아닙니다. 말하면 관계가 흔들릴까 봐 요구를 삼키고 있습니다."),
    description: L("원하는 날짜, 메뉴, 휴가지, 서운함을 말했다가 불편해하거나 멀어질까 봐 침묵합니다. 요구가 쌓이지 않는 만큼 관계는 상대 중심으로 흘러갑니다. 말하지 않으면 지켜질 것 같지만 오히려 내 자리가 줄어듭니다.\n\n진짜 이유를 풀어보면: 요구가 곧 거절이나 이별로 이어질 거라는 내면의 예상이 입을 막고 있음"),
    keywords: L("말을 삼킴, 거절 상상, 괜찮아, 멀어질까 봐, 요구 못 함"),
    strengths: L("상대를 배려하고 관계를 소중히 여기는 신중함"),
    reasonDetail: L("서운함을 말해야 할 때, 원하는 것을 정해야 할 때, 힘들다고 털어놓아야 할 때"),
    frequentSaying: L("\"말하면 불편해할까 봐\""),
    changeTips: L("거절당했을 때 가장 두려운 것 한 가지를 적고 '그래도 내가 감당할 수 있는 부분'을 옆에 적기\n\"하나만 부탁해도 될까?\" 같은 작은 요청부터 시작하기\n요구는 관계를 위협하는 게 아니라 알려주는 일이라고 다시 정의하기\n거절에 대한 두려움이 일상 전반에서 크게 힘들다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요"),
    oneLiner: L("요구하는 사람이 사랑받지 못하는 게 아닙니다. 작게 말할수록 관계는 더 단단해집니다"),
    shareLine: L("나는 왜 연애에서 늘 을이 될까? 결과: 거절 불안형 🥀 요구하면 멀어질까 봐 말을 삼키는 거래... 이거 내 얘기라 소름 돋음 저장함 너는?"),
  },
  {
    type: "Type4",
    emoji: "🎁",
    title: L("내가 더 주고 손해 보는 사람, 자기 희생형 🎁"),
    typeName: L("자기 희생형"),
    realReason: L("내가 더 주고 손해 보는 쪽이 마음 편해서 내 몫을 먼저 내려놓는다"),
    shortDescription: L("당신은 손해를 보는 게 아닙니다. 주는 쪽에 서야 관계가 안전하다고 느끼고 있습니다."),
    description: L("더 챙기고, 더 부담하고, 아쉬워도 티 내지 않고 상대 일정을 도와줍니다. 헌신은 사랑의 표현이지만 한쪽만 계속 주면 균형이 깨지고 상대는 받는 것에 익숙해집니다. 주는 만큼 받지 못할 때 서운함이 소리 없이 쌓입니다.\n\n진짜 이유를 풀어보면: 더 주어야 사랑받을 수 있다는 믿음이 내 몫을 먼저 포기하게 만듦"),
    keywords: L("더 주기, 손해 감수, 비용, 헌신, 티 안 내기"),
    strengths: L("따뜻하고 헌신적이며 관계를 위해 기꺼이 움직이는 에너지"),
    reasonDetail: L("약속을 잡을 때, 일정을 조율할 때, 상대에게 서운함이 생길 때"),
    frequentSaying: L("\"내가 좀 더 하면 되지 뭐\""),
    changeTips: L("주고받는 일을 눈에 보이게 적어 '내가 한 것'과 '상대가 한 것'의 균형 확인하기\n비용과 수고를 반반으로 나누자고 구체적으로 제안하기\n받을 때는 \"고마워\"로 충분히 받아들이는 연습하기"),
    oneLiner: L("주는 마음은 소중하지만 받는 것도 사랑입니다. 반씩 나눌 때 관계는 오래갑니다"),
    shareLine: L("나는 왜 연애에서 늘 을이 될까? 결과: 자기 희생형 🎁 내가 더 주고 손해 보는 쪽이 마음 편한 거래... 이거 내 얘기라 소름ㅋㅋ 저장해둔다 너는 어떤 유형이야?"),
  },
  {
    type: "Type5",
    emoji: "🪁",
    title: L("결정권을 상대에게 넘기는 사람, 주도권 포기형 🪁"),
    typeName: L("주도권 포기형"),
    realReason: L("결정과 방향을 상대에게 넘기고 따라가는 데 익숙해졌다"),
    shortDescription: L("당신은 수동적인 사람이 아닙니다. 결정이 부담스러워 방향을 상대에게 맡기는 쪽을 택하고 있습니다."),
    description: L("\"네가 정해줘\", \"너 편한 대로\"가 입에 붙고, 관계의 방향과 다음 약속도 상대가 정하길 기다립니다. 결정의 책임이 없는 만큼 편하지만 관계는 늘 상대의 속도로만 흐릅니다. 내가 원하는 방향은 점점 보이지 않게 됩니다.\n\n진짜 이유를 풀어보면: 결정의 책임과 실패의 부담을 피하려는 마음이 주도권을 내려놓게 함"),
    keywords: L("네가 정해줘, 방향 위임, 기다림, 책임 회피, 상대 속도"),
    strengths: L("상대의 선택을 존중하고 유연하며 갈등을 만들지 않으려는 태도"),
    reasonDetail: L("메뉴·장소·일정을 정할 때, 관계의 방향을 결정할 때, 의견이 갈릴 때"),
    frequentSaying: L("\"나는 다 괜찮아, 네가 정해\""),
    changeTips: L("결정 하나는 내가 먼저 정해 말해 보기. 예: \"이번 주 장소는 내가 정할게\"\n선택지를 세 개 준비해 두고 그중 하나를 제안하기\n틀려도 괜찮다는 기준으로 작은 결정부터 경험 쌓기"),
    oneLiner: L("방향을 같이 정할 때 관계의 저울이 맞춰집니다. 작은 결정 하나가 균형의 시작입니다"),
    shareLine: L("나는 왜 연애에서 늘 을이 될까? 결과: 주도권 포기형 🪁 결정을 상대에게 넘기는 데 익숙한 거래... 이거 내 얘기라 소름ㅠ 저장해둠 너는 뭐 나왔어?"),
  },
];

export const phase3AlwaysTheWeakerInLoveResults: Phase3AlwaysTheWeakerInLoveResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3AlwaysTheWeakerInLoveResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_META = {
  title: withForeign("나는 왜 연애에서 늘 을이 될까?", (loc) => PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N[loc].meta.title),
  description: withForeign("더 맞추고 더 기다리는 쪽은, 왜 늘 나일까? 10가지 상황으로 내가 약자가 되는 진짜 이유와 균형을 찾는 법을 알려드립니다.", (loc) => PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N[loc].meta.description),
  tags: {
    ko: ["연애심리", "관계불균형"],
    en: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N.en.meta.tags,
    ja: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N.vi.meta.tags,
    id: PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N.id.meta.tags,
  },
};

