/**
 * 나는 왜 연애 초반에 과하게 잘해줄까?
 * slug: phase3-overgiving-early-love
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_OVERGIVING_EARLY_LOVE_I18N,
  type Phase3OvergivingEarlyLoveForeignLocale,
  type Phase3OvergivingEarlyLoveResultText,
} from './phase3OvergivingEarlyLoveI18n';

export type Phase3OvergivingEarlyLoveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3OvergivingEarlyLoveLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_OVERGIVING_EARLY_LOVE_I18N) as Phase3OvergivingEarlyLoveForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3OvergivingEarlyLoveForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3OvergivingEarlyLoveQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3OvergivingEarlyLoveResult {
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

export const PHASE3_OVERGIVING_EARLY_LOVE_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3OvergivingEarlyLoveScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_OVERGIVING_EARLY_LOVE_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3OvergivingEarlyLoveResult(answers: number[]): string {
  const scores = calculatePhase3OvergivingEarlyLoveScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_OVERGIVING_EARLY_LOVE_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3OvergivingEarlyLoveHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3OvergivingEarlyLoveScores(answers);
  const sorted = [...PHASE3_OVERGIVING_EARLY_LOVE_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "썸 상대와 두 번째 만남을 앞두고 있다. 나는?",
    opts: [
      ["이 사람이 마음이 식어 떠날까 불안해서 미리 맛집 예약과 선물을 준비해 붙잡아 둔다", 2],
      ["이만큼 준비하면 상대도 나에게 그만큼 마음을 써 줄 거라고 기대하게 된다", 3],
      ["설레는 마음이 넘쳐서 만나기 전부터 계획이 한꺼번에 머릿속에서 쏟아진다", 4],
      ["이번에도 센스 있고 좋은 사람이라는 말을 듣고 싶어 신경 써서 챙긴다", 5],
    ],
  },
  {
    q: "상대가 \"오늘 하루 어땠어?\"라고 가볍게 물었다. 나는?",
    opts: [
      ["길게 답장하며 정성을 보이면 나중에 상대도 비슷하게 돌려줄 거라고 기대한다", 3],
      ["반가운 마음이 커서 하루 일과를 한꺼번에 쏟아내듯 길게 답한다", 4],
      ["다정하고 성실한 사람으로 보이고 싶어 답장 하나도 공들여 쓴다", 5],
      ["이 정성이 상대 마음을 먼저 사로잡을 기회라 생각하며 적극적으로 답한다", 1],
    ],
  },
  {
    q: "상대의 생일이 만난 지 2주 만에 돌아왔다. 나는?",
    opts: [
      ["설렘이 커서 선물과 이벤트를 크게 준비하고 싶은 마음이 넘친다", 4],
      ["이런 정성을 보여야 좋은 사람으로 기억될 것 같아 무리해서 챙긴다", 5],
      ["처음부터 크게 챙기면 상대가 나를 특별하게 여기고 마음을 줄 거라 생각한다", 1],
      ["대충 챙기면 마음이 식을까 불안해서 최선을 다해 붙잡는다", 2],
    ],
  },
  {
    q: "상대가 \"너 진짜 잘 챙긴다\"라고 칭찬했다. 나는?",
    opts: [
      ["이 말이 기뻐서 더 좋은 사람으로 인정받으려고 더 애쓰게 된다", 5],
      ["호감을 확실히 얻었다는 신호라 생각해 속도를 더 높여 챙긴다", 1],
      ["이 칭찬이 사라지면 안 될 것 같아 지금보다 더 잘해서 놓치지 않으려 한다", 2],
      ["이만큼 잘해줬으니 이제 상대도 나에게 같은 정성을 줄 차례라고 기대한다", 3],
    ],
  },
  {
    q: "상대가 며칠 바빠서 연락이 줄었다. 나는?",
    opts: [
      ["먼저 연락하고 응원 메시지를 보내 존재감을 확실히 남겨 호감을 지킨다", 1],
      ["연락이 줄어든 게 마음이 식은 신호일까 불안해서 더 챙기며 붙잡는다", 2],
      ["내가 이렇게 챙겼는데 왜 돌려주지 않나 서운함이 올라온다", 3],
      ["보고 싶은 마음이 넘쳐서 하루에도 몇 번씩 연락하고 싶어진다", 4],
    ],
  },
  {
    q: "만난 지 한 달, 상대가 나 때문에 힘이 났다고 말했다. 나는?",
    opts: [
      ["기쁨이 넘쳐서 더 해주고 싶은 마음이 샘솟아 이것저것 계획한다", 4],
      ["좋은 사람이라는 인정을 받은 것 같아 더 잘해 주려고 노력한다", 5],
      ["이 말을 계속 듣고 싶어서 떠나지 않게 더 챙겨 놓친다는 불안을 덜어낸다", 2],
      ["내가 준 만큼 앞으로 상대도 비슷하게 돌려줄 거라는 기대가 커진다", 3],
    ],
  },
  {
    q: "상대가 데이트 장소를 직접 정해 보겠다고 했다. 나는?",
    opts: [
      ["내가 안 챙기면 좋은 사람으로 보이지 않을까 싶어 은근히 불안해 내가 먼저 정하려 한다", 5],
      ["장소를 내가 정해야 호감을 선점할 수 있다고 생각해 먼저 제안한다", 1],
      ["지금까지 내가 다 챙겼으니 이번엔 상대 차례라는 생각이 든다", 3],
      ["설레는 마음에 이미 여러 후보를 정해 놓은 상태다", 4],
    ],
  },
  {
    q: "상대에게 기대한 만큼의 반응이 오지 않았다. 나는?",
    opts: [
      ["처음 인상을 더 확실히 남겨야겠다며 더 세게 호감을 표현한다", 1],
      ["이러다 떠날까 불안해서 더 잘해 붙잡으려 한다", 2],
      ["감정이 앞서서 반응을 따지기 전에 마음이 넘쳐 더 해주고 싶어진다", 4],
      ["내가 충분히 좋은 사람으로 보이지 않았나 싶어 더 노력한다", 5],
    ],
  },
  {
    q: "상대가 \"너무 잘해줘서 부담돼\"라고 말했다. 나는?",
    opts: [
      ["부담된다는 말에 떠날까 불안해져 더 조심하며 잘해보려 한다", 2],
      ["이만큼 잘했는데 부담이라니 서운하고 돌려받지 못하는 기분이 든다", 3],
      ["좋은 사람으로 보이려던 노력이 오히려 평가를 깎은 것 같아 위축된다", 5],
      ["호감을 얻으려던 방식이 과했나 싶어 속도를 어떻게 줄일지 계산한다", 1],
    ],
  },
  {
    q: "내가 초반에 과하게 잘해주는 가장 솔직한 이유는?",
    opts: [
      ["\"잘해준 만큼 돌려받고 싶어서\"", 3],
      ["\"설레는 마음이 넘쳐서 멈추기 어려워서\"", 4],
      ["\"먼저 잘해줘야 상대가 나를 좋아하게 될 것 같아서\"", 1],
      ["\"떠날까 불안해서 미리 붙잡고 싶어서\"", 2],
    ],
  },
];

export const phase3OvergivingEarlyLoveQuestions: Phase3OvergivingEarlyLoveQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

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
] as const satisfies readonly (keyof Phase3OvergivingEarlyLoveResultText)[];

const KO_RESULTS: Phase3OvergivingEarlyLoveResult[] = [
  {
    type: "Type1",
    emoji: "🏁",
    title: L("먼저 잘해서 마음을 얻으려는 사람, 호감 선점형 🏁"),
    typeName: L("호감 선점형"),
    realReason: L("먼저 크게 잘해줘야 상대가 나를 좋아하게 된다고 믿는다"),
    shortDescription: L("당신은 과한 사람이 아닙니다. 호감은 먼저 표현하는 쪽이 얻는다고 믿고 속도를 높이고 있습니다."),
    description: L("초반에 존재감을 확실히 남기려 선물, 연락, 이벤트를 앞당깁니다. 호감을 얻을 수는 있지만 상대는 부담을 느끼거나 나의 속도에 맞추기 버거워질 수 있습니다. 호감은 양이 아니라 리듬으로 자라는 경우가 많습니다.\n\n진짜 이유를 풀어보면: 마음이 큰 게 아니라 '먼저 잘해야 얻는다'는 공식이 속도를 올리고 있음"),
    keywords: L("먼저 표현, 존재감, 선점, 속도, 확실한 인상"),
    strengths: L("적극적이고 표현이 분명하며 호감을 행동으로 보여주는 용기"),
    reasonDetail: L("두 번째 만남 전, 칭찬받았을 때, 반응이 기대에 못 미칠 때"),
    frequentSaying: L("\"처음에 확실히 잘해야지\""),
    changeTips: L("연락과 선물에 '주 2회, 소소한 선물만' 같은 나만의 상한선 정하기\n상대의 속도(답장 빈도·만남 간격)를 관찰해 비슷한 리듬으로 맞추기\n호감은 시간이 쌓일수록 자란다는 점을 기억하고 한 걸음씩 가기"),
    oneLiner: L("호감은 달리기가 아니라 같이 걷는 속도에서 자랍니다. 한 걸음 늦춰도 마음은 닿습니다"),
    shareLine: L("나는 왜 연애 초반에 과하게 잘해줄까? 결과: 호감 선점형 🏁 먼저 잘해야 마음을 얻는다고 믿는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?"),
  },
  {
    type: "Type2",
    emoji: "🧲",
    title: L("떠날까 불안해 미리 붙잡는 사람, 불안 선제형 🧲"),
    typeName: L("불안 선제형"),
    realReason: L("마음이 식어 떠날까 두려워서 미리 잘해 붙잡아 둔다"),
    shortDescription: L("당신은 베푸는 게 아닙니다. 놓칠까 불안해서 먼저 붙잡고 있습니다."),
    description: L("연락이 줄거나 반응이 미지근하면 불안이 올라와 더 챙기게 됩니다. 칭찬이 사라질까 봐 한 걸음 더 애쓰고, 그 노력은 지속하기 어려운 속도가 됩니다. 불안이 행동을 이끌면 잘해줄수록 불안도 함께 커집니다.\n\n진짜 이유를 풀어보면: 상대의 행동이 아니라 '놓칠 수 있다'는 내면의 불안이 행동의 크기를 키움"),
    keywords: L("떠날까 불안, 미리 붙잡기, 더 잘하기, 놓침 두려움, 불안 해소"),
    strengths: L("관계를 소중히 여기고 상대의 작은 변화에 세심하게 반응함"),
    reasonDetail: L("연락이 줄 때, 반응이 미지근할 때, 칭찬이 끊길까 걱정될 때"),
    frequentSaying: L("\"혹시 마음이 식은 건 아닐까?\""),
    changeTips: L("불안이 올라올 때 '지금 실제로 일어난 일'과 '내가 상상한 걱정'을 두 줄로 나눠 적기\n더 잘해주는 대신 \"요즘 연락이 줄어서 조금 불안해\"라고 솔직하게 말하기\n연인 밖에서 나를 채우는 활동을 늘려 불안의 무게를 분산하기\n놓칠까 불안한 마음이 반복되어 일상에 영향을 준다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요"),
    oneLiner: L("붙잡는 마음은 사랑의 다른 얼굴입니다. 불안을 말로 꺼내면 행동의 무게가 줄어듭니다"),
    shareLine: L("나는 왜 연애 초반에 과하게 잘해줄까? 결과: 불안 선제형 🧲 떠날까 불안해서 미리 붙잡는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘"),
  },
  {
    type: "Type3",
    emoji: "🎁",
    title: L("준 만큼 돌려받고 싶은 사람, 보상 기대형 🎁"),
    typeName: L("보상 기대형"),
    realReason: L("잘해준 만큼 상대도 비슷하게 돌려줄 것을 기대한다"),
    shortDescription: L("당신은 베푸는 게 아닙니다. 마음속에 '돌려받는 계산서'가 조용히 쌓이고 있습니다."),
    description: L("이만큼 챙겼으니 상대도 같은 정성을 줄 차례라고 기대하고, 반응이 없으면 서운함이 올라옵니다. 말하지 않은 기대는 상대에게 닿지 않고, 서운함만 쌓여 관계에서 힘이 빠집니다. 준 마음을 계산서처럼 쌓아 두면 사랑이 거래처럼 느껴지기도 합니다.\n\n진짜 이유를 풀어보면: 순수한 헌신이 아니라 말하지 않은 기대가 행동을 이끌고 있음"),
    keywords: L("준 만큼 받기, 계산서, 돌려받음, 말 안 한 기대, 서운함 누적"),
    strengths: L("관계에서 공정한 주고받음을 중시하고 성의 있게 표현하는 성실함"),
    reasonDetail: L("길게 답장할 때, 선물과 이벤트를 준비할 때, 상대 차례라고 느낄 때"),
    frequentSaying: L("\"나는 이만큼 했는데\""),
    changeTips: L("잘해주기 전에 '이 행동에 내가 기대하는 것이 있는가'를 먼저 물어보기\n기대가 있다면 \"나는 이럴 때 이렇게 해주면 좋아\"라고 말로 요청하기\n베푸는 일을 '내가 해주고 싶은 만큼만'으로 한정해 계산서를 줄이기"),
    oneLiner: L("기대는 숨기면 서운함이 되고 말하면 요청이 됩니다. 요청으로 바꾸면 사랑이 가벼워집니다"),
    shareLine: L("나는 왜 연애 초반에 과하게 잘해줄까? 결과: 보상 기대형 🎁 준 만큼 돌려받고 싶은 계산서가 쌓이는 거래... 이거 너 같아ㅋㅋ 너도 해봐"),
  },
  {
    type: "Type4",
    emoji: "🔥",
    title: L("설렘이 넘쳐 속도가 안 줄어드는 사람, 열정 과열형 🔥"),
    typeName: L("열정 과열형"),
    realReason: L("설렘과 감정이 커서 행동이 한꺼번에 넘친다"),
    shortDescription: L("당신은 계산하는 게 아닙니다. 마음이 너무 뜨거워서 멈추는 브레이크가 약합니다."),
    description: L("보고 싶은 마음에 하루 몇 번씩 연락하고, 만나기 전부터 계획이 쏟아집니다. 순수한 열정이지만 상대의 속도와 맞지 않으면 부담이 되고, 나도 곧 방전됩니다. 감정이 행동을 앞지르는 상태입니다.\n\n진짜 이유를 풀어보면: 의도가 아니라 감정의 속도가 행동의 속도보다 빠른 상태"),
    keywords: L("설렘, 넘침, 즉각 행동, 보고 싶음, 브레이크 약함"),
    strengths: L("감정이 풍부하고 솔직하며 사랑을 진심으로 표현하는 열정"),
    reasonDetail: L("만나기 전, 상대가 바쁠 때, 기념일이나 생일이 다가올 때"),
    frequentSaying: L("\"너무 보고 싶어서 참을 수가 없어\""),
    changeTips: L("하고 싶은 행동을 메모장에 먼저 적고 30분 뒤에도 하고 싶은지 확인하기\n하루 연락 횟수나 이벤트 크기에 '오늘은 한 가지만' 규칙 정하기\n넘치는 열정은 운동·창작 같은 나만의 출구에도 나눠 쓰기"),
    oneLiner: L("뜨거움은 장점입니다. 연료를 나눠 쓰면 더 오래 타오릅니다"),
    shareLine: L("나는 왜 연애 초반에 과하게 잘해줄까? 결과: 열정 과열형 🔥 설렘이 넘쳐서 브레이크가 약한 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?"),
  },
  {
    type: "Type5",
    emoji: "⭐",
    title: L("좋은 사람으로 인정받고 싶은 사람, 인정 갈구형 ⭐"),
    typeName: L("인정 갈구형"),
    realReason: L("좋은 사람이라는 인정과 평가를 받고 싶어 애쓴다"),
    shortDescription: L("당신은 베푸는 게 아닙니다. 상대의 눈에 좋은 사람으로 비치고 싶어서 애쓰고 있습니다."),
    description: L("센스 있고 성실한 사람이라는 말을 듣고 싶어 답장 하나, 선물 하나에도 공을 들입니다. 칭찬을 받으면 더 노력하게 되고, 칭찬이 없으면 위축됩니다. 인정이 연료가 되면 상대의 반응에 따라 에너지가 크게 흔들립니다.\n\n진짜 이유를 풀어보면: 상대의 반응이 내 가치를 정하는 점수표처럼 쓰이고 있음"),
    keywords: L("좋은 사람, 칭찬, 인정, 평가, 애쓰기"),
    strengths: L("성실하고 섬세하며 상대를 기쁘게 하려는 노력과 센스"),
    reasonDetail: L("칭찬을 받을 때, 센스를 보여줘야 할 때, 평가받는 느낌이 들 때"),
    frequentSaying: L("\"나 괜찮은 사람이지?\""),
    changeTips: L("칭찬이 없어도 '오늘 내가 해낸 것' 세 가지를 스스로에게 먼저 칭찬하기\n애쓰기 전에 \"지금 내가 원하는 건 칭찬일까, 상대의 행복일까\"를 구분하기\n평소의 모습 그대로 보여 주고 상대의 반응을 관찰해 보기"),
    oneLiner: L("인정은 받을수록 목마릅니다. 일부를 나 자신에게서 받으면 애쓰는 속도가 줄어듭니다"),
    shareLine: L("나는 왜 연애 초반에 과하게 잘해줄까? 결과: 인정 갈구형 ⭐ 좋은 사람으로 인정받고 싶어서 애쓰는 거래... 이거 너 같아ㅠ 해보고 알려줘"),
  },
];

export const phase3OvergivingEarlyLoveResults: Phase3OvergivingEarlyLoveResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3OvergivingEarlyLoveResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_OVERGIVING_EARLY_LOVE_META = {
  title: withForeign("나는 왜 연애 초반에 과하게 잘해줄까?", (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].meta.title),
  description: withForeign("처음부터 이렇게 잘해주면 나중에 지치는 거 알면서, 왜 그럴까? 10가지 상황으로 초반에 올인하는 진짜 이유와 속도를 조절하는 법을 알려드립니다.", (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].meta.description),
  tags: {
    ko: ["연애심리", "연애패턴"],
    en: PHASE3_OVERGIVING_EARLY_LOVE_I18N.en.meta.tags,
    ja: PHASE3_OVERGIVING_EARLY_LOVE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_OVERGIVING_EARLY_LOVE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_OVERGIVING_EARLY_LOVE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_OVERGIVING_EARLY_LOVE_I18N.vi.meta.tags,
    id: PHASE3_OVERGIVING_EARLY_LOVE_I18N.id.meta.tags,
  },
};

