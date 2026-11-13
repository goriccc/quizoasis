/**
 * 나는 왜 연인이 잘해줄수록 불안해질까?
 * slug: phase3-anxious-when-loved
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_ANXIOUS_WHEN_LOVED_I18N,
  type Phase3AnxiousWhenLovedForeignLocale,
  type Phase3AnxiousWhenLovedResultText,
} from './phase3AnxiousWhenLovedI18n';

export type Phase3AnxiousWhenLovedLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3AnxiousWhenLovedLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_ANXIOUS_WHEN_LOVED_I18N) as Phase3AnxiousWhenLovedForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3AnxiousWhenLovedForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3AnxiousWhenLovedQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3AnxiousWhenLovedResult {
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

export const PHASE3_ANXIOUS_WHEN_LOVED_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3AnxiousWhenLovedScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_ANXIOUS_WHEN_LOVED_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3AnxiousWhenLovedResult(answers: number[]): string {
  const scores = calculatePhase3AnxiousWhenLovedScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_ANXIOUS_WHEN_LOVED_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 뿌리). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3AnxiousWhenLovedHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3AnxiousWhenLovedScores(answers);
  const sorted = [...PHASE3_ANXIOUS_WHEN_LOVED_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "연인이 기념일에 정성스러운 이벤트를 준비해 줬다. 행복한데 마음 한쪽이 불안하다. 가장 가까운 생각은?",
    opts: [
      ["이런 사랑을 받을 만큼 내가 괜찮은 사람인지 확신이 없다", 2],
      ["이만큼 받았으니 나도 똑같이 돌려줘야 한다는 부담이 올라온다", 3],
      ["이렇게 기대하게 만들고 나중에 무너지면 어쩌나 하는 생각이 든다", 4],
      ["예전에도 이렇게 좋다가 갑자기 끝났던 기억이 떠오른다", 5],
    ],
  },
  {
    q: "연인이 \"요즘 너랑 있으면 정말 행복해\"라고 말했다. 나는?",
    opts: [
      ["받은 말만큼 내가 잘해야 할 것 같아 마음이 무거워진다", 3],
      ["이 말을 믿고 기대했다가 상처받을까 봐 기쁨보다 조심스러움이 앞선다", 4],
      ["예전에도 행복하다는 말 뒤에 이별이 왔던 기억이 겹친다", 5],
      ["이렇게 좋은 시간은 오래가지 못하고 곧 끝날 것 같은 예감이 든다", 1],
    ],
  },
  {
    q: "일주일 내내 다툼 없이 평화로운 날들이 이어졌다. 나는?",
    opts: [
      ["평화가 이어질수록 기대가 커질까 봐 일부러 마음을 눌러 둔다", 4],
      ["이런 평화가 예전에 끝나던 방식과 비슷해서 마음이 먼저 경계한다", 5],
      ["이렇게 좋은 시간이 오래가지 못하고 갑자기 끝날 것 같다는 예감이 커진다", 1],
      ["내가 이런 평온을 누릴 자격이 있는지 의심이 든다", 2],
    ],
  },
  {
    q: "연인이 내 일을 대신 해결해 주며 \"신경 쓰지 마, 내가 할게\"라고 말했다. 나는?",
    opts: [
      ["예전에 이렇게 챙겨주던 사람이 갑자기 사라졌던 장면이 떠오른다", 5],
      ["이렇게 잘해줄수록 끝날 때의 충격이 더 클 것 같아 미리 마음이 아프다", 1],
      ["내가 이런 도움을 받을 만한 사람인지 의심스럽고 부끄럽다", 2],
      ["신세를 많이 졌으니 갚아야 한다는 생각에 마음이 무거워진다", 3],
    ],
  },
  {
    q: "연인이 \"우리 내년에도 같이 여행 가자\"라고 말했다. 나는?",
    opts: [
      ["약속을 하는 순간 그때까지 끝나지 않을까 하는 예감이 든다", 1],
      ["이런 약속을 받을 만큼 내가 가치 있는 사람인지 의심이 올라온다", 2],
      ["약속을 받은 만큼 나도 그에 걸맞게 해야 할 것 같아 부담스럽다", 3],
      ["약속에 기대를 걸었다가 깨지면 너무 아플 것 같아서 기대를 접어둔다", 4],
    ],
  },
  {
    q: "연인이 힘든 일을 털어놓으며 \"너한테만 말할 수 있어\"라고 했다. 나는?",
    opts: [
      ["믿어주는 마음이 커서 기쁜데 그 믿음이 깨질 때를 상상하며 기대하기가 두렵다", 4],
      ["이렇게 믿어주던 사람이 어느 날 갑자기 떠났던 예전 기억이 떠올라 불안하다", 5],
      ["이런 믿음을 받을 만큼 내가 잘 들어줄 수 있는 사람인지 자신이 없다", 2],
      ["받은 신뢰만큼 내가 더 잘 들어주고 갚아야 한다는 부담이 커진다", 3],
    ],
  },
  {
    q: "연인이 일찍 퇴근해서 깜짝 방문했다. 나는?",
    opts: [
      ["이렇게 좋았던 순간 뒤에는 꼭 안 좋은 일이 오던 경험이 떠올라 마음이 급해진다", 5],
      ["이 행복이 오래가지 못할 것 같아 지금 이 순간부터 끝을 상상한다", 1],
      ["이렇게 신경 써준 만큼 나도 똑같이 갚아야 한다는 생각에 부담스럽다", 3],
      ["이런 행복에 기대를 걸었다가 나중에 무너질까 봐 일부러 덤덤하게 반응한다", 4],
    ],
  },
  {
    q: "연인이 \"너는 내게 정말 소중한 사람이야\"라고 말했다. 나는?",
    opts: [
      ["이 행복이 오래가지 못하고 곧 끝날 것 같다는 생각이 스친다", 1],
      ["이 말이 나에게 어울리는지 의심이 들어서 마음이 편하게 받아들여지지 않는다", 2],
      ["이 말을 믿고 기대했다가 상처받을까 봐 믿음에서 한 걸음 물러난다", 4],
      ["예전에도 소중하다는 말을 들었는데 결국 떠났던 기억이 되살아난다", 5],
    ],
  },
  {
    q: "연인과 완벽한 하루를 보내고 돌아오는 길이다. 나는?",
    opts: [
      ["이렇게 좋은 하루를 누릴 자격이 내게 있는지 의심이 드는 순간이 있다", 2],
      ["오늘 받은 만큼 다음엔 내가 더 해야 한다는 숙제가 마음에 얹힌다", 3],
      ["예전에 완벽했던 날 뒤에 이별이 왔던 기억이 떠올라 마음이 무겁다", 5],
      ["이렇게 좋은 하루가 마지막이 될 것 같은 예감에 마음이 급해진다", 1],
    ],
  },
  {
    q: "연인이 \"왜 요즘 불안해 보여?\"라고 물었다. 속마음에 가장 가까운 건?",
    opts: [
      ["받은 만큼 돌려주지 못할까 봐 마음이 늘 빚진 것 같다", 3],
      ["행복에 기대를 걸었다 무너질까 봐 기대 자체가 두렵다", 4],
      ["행복이 커질수록 끝날 날도 가까워질 것 같은 예감이 든다", 1],
      ["이렇게 좋은 사람에게 내가 어울리는지 자꾸 의심이 든다", 2],
    ],
  },
];

export const phase3AnxiousWhenLovedQuestions: Phase3AnxiousWhenLovedQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_ANXIOUS_WHEN_LOVED_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_ANXIOUS_WHEN_LOVED_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3AnxiousWhenLovedResultText)[];

const KO_RESULTS: Phase3AnxiousWhenLovedResult[] = [
  {
    type: "Type1",
    emoji: "⏳",
    title: L("행복할수록 끝을 예감하는 사람, 이별 예감형 ⏳"),
    typeName: L("이별 예감형"),
    realReason: L("좋은 순간이 커질수록 끝나는 날을 미리 상상하게 된다"),
    shortDescription: L("당신은 행복이 불편한 게 아닙니다. 행복이 커질수록 그만큼 잃을 날도 가까워질 것 같아 미리 마음이 긴장합니다."),
    description: L("이벤트, 평화로운 일주일, 완벽한 하루처럼 좋은 순간에 오히려 '이게 마지막일지도'라는 생각이 따라옵니다. 끝을 미리 상상하면 충격이 줄 것 같지만, 지금의 행복도 함께 줄어듭니다. 행복을 누리는 시간이 불안을 준비하는 시간으로 바뀌기 쉽습니다."),
    keywords: L("끝의 예감, 마지막일 것 같음, 미리 상상, 긴장, 행복이 불안"),
    strengths: L("관계를 소중히 여기고 지금 이 순간의 가치를 깊이 느끼는 마음"),
    reasonDetail: L("큰 이벤트를 받을 때, 미래 약속을 들을 때, 다툼 없이 평화로울 때"),
    frequentSaying: L("\"이렇게 좋아도 되나 싶어\""),
    changeTips: L("끝을 예감할 때 '지금 실제로 일어난 나쁜 일이 있는가'를 사실로 확인하기\n행복한 순간을 사진이나 메모로 남겨 '지금'에 머무는 연습하기\n\"행복해서 오히려 불안해\"라고 연인에게 솔직하게 말하기\n좋은 순간마다 끝을 상상하는 불안이 반복되고 일상(수면·집중)에 영향을 준다면 혼자 해결하려 하지 말고 심리상담 전문가와 이야기해 보세요"),
    oneLiner: L("끝을 준비하는 마음은 사랑이 깊다는 신호입니다. 그 에너지를 오늘의 행복에 조금만 돌려보세요"),
    shareLine: L("나는 왜 연인이 잘해줄수록 불안해질까? 결과: 이별 예감형 ⏳ 행복할수록 끝을 미리 상상하는 거래... 소름 단톡방 결과 카드 인증! 너희는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "🪞",
    title: L("받을 자격이 없다고 느끼는 사람, 자격 의심형 🪞"),
    typeName: L("자격 의심형"),
    realReason: L("이런 사랑이 나에게 과분하다는 생각이 사랑을 불안하게 만든다"),
    shortDescription: L("당신은 사랑이 부족해서 불안한 게 아닙니다. 받는 사랑이 내 것처럼 느껴지지 않아서 불안한 것입니다."),
    description: L("정성스러운 이벤트, 소중하다는 말, 완벽한 하루 앞에서 '내가 이런 걸 받을 사람인가'라는 의심이 먼저 올라옵니다. 사랑이 크면 클수록 그만큼 과분하게 느껴지고, 언젠가 진짜 모습이 들키면 사라질 것 같아 마음이 편하지 않습니다."),
    keywords: L("과분함, 받을 자격, 들킬 것 같음, 칭찬이 불편, 자기 의심"),
    strengths: L("겸손하고 받은 만큼 소중히 여기며 상대를 진심으로 대하는 성실함"),
    reasonDetail: L("정성이나 칭찬을 받을 때, 소중하다는 말을 들을 때, 평온한 시간이 이어질 때"),
    frequentSaying: L("\"나 같은 사람 어디가 좋아서?\""),
    changeTips: L("연인이 해준 좋은 말을 그대로 메모해 두고 의심하지 않고 사실로 다시 읽어보기\n칭찬을 받으면 \"아니야\" 대신 \"고마워\" 한마디로 일단 받아보기\n연애 밖에서 내가 이룬 것과 인정받은 경험을 적어 자기 신뢰의 근거 쌓기\n자신이 가치 없다는 생각이 연애뿐 아니라 일상 전반에서 자주 강하게 이어진다면 심리상담 전문가와 이야기해 보세요"),
    oneLiner: L("사랑이 들어올 자리는 이미 있습니다. 받아도 괜찮은 사람이라는 걸 한 번씩 확인해 보세요"),
    shareLine: L("나는 왜 연인이 잘해줄수록 불안해질까? 결과: 자격 의심형 🪞 받는 사랑이 내 것 같지 않아서 불안한 거래... 찔림ㅠ 단톡방 결과 카드 인증! 너희는?"),
  },
  {
    type: "Type3",
    emoji: "🎒",
    title: L("받은 만큼 갚아야 한다고 느끼는 사람, 빚진 마음형 🎒"),
    typeName: L("빚진 마음형"),
    realReason: L("받은 사랑을 똑같이 돌려줘야 한다는 부담이 마음을 무겁게 한다"),
    shortDescription: L("당신은 사랑이 부담스러운 게 아닙니다. 받은 만큼 갚아야 한다는 마음이 사랑을 숙제처럼 느끼게 만듭니다."),
    description: L("이벤트, 도움, 믿음을 받을 때마다 '나도 그만큼 해야 한다'는 계산이 시작됩니다. 사랑이 주고받는 흐름이 아니라 빚과 상환처럼 느껴져, 잘해줄수록 마음이 무거워집니다. 갚지 못하는 날이 오면 관계가 흔들릴 것 같은 불안도 따라옵니다."),
    keywords: L("받은 만큼 갚기, 숙제, 부담, 계산, 신세 진 마음"),
    strengths: L("책임감이 강하고 관계에서 공정하게 주고받으려는 성실함"),
    reasonDetail: L("이벤트나 도움을 받을 때, 신뢰나 고민을 털어놓음 받을 때, 완벽한 하루 뒤"),
    frequentSaying: L("\"나도 그만큼 해줘야 하는데\""),
    changeTips: L("받을 때 \"고마워\"로 끝내고 곧바로 갚을 방법을 찾지 않기\n연인에게 \"내가 갚아야 할 것 같아서 부담돼\"라고 마음을 솔직하게 말하기\n주고받음을 숫자가 아닌 '서로 편안한가'로 점검하기\n받는 것이 계속 부담스럽고 관계 전반에서 갚아야 한다는 압박이 크다면 심리상담 전문가와 그 뿌리를 함께 살펴보세요"),
    oneLiner: L("사랑은 갚는 것이 아니라 나누는 것입니다. 받아도 괜찮은 날이 쌓이면 부담도 가벼워집니다"),
    shareLine: L("나는 왜 연인이 잘해줄수록 불안해질까? 결과: 빚진 마음형 🎒 받은 만큼 갚아야 해서 마음이 무거운 거래... 인정ㅋㅋ 단톡방 결과 카드 인증! 너희는 어떤 유형이야?"),
  },
  {
    type: "Type4",
    emoji: "🌫️",
    title: L("기대했다 무너질까 두려운 사람, 기대 공포형 🌫️"),
    typeName: L("기대 공포형"),
    realReason: L("행복을 기대했다가 깨질 때의 아픔이 두려워 기대 자체를 누른다"),
    shortDescription: L("당신은 행복이 싫은 게 아닙니다. 기대했다가 무너지는 아픔이 두려워서 행복에 마음을 다 주지 못합니다."),
    description: L("약속, 믿음, 평화 앞에서 기쁨보다 조심스러움이 먼저 오고, 일부러 덤덤하게 반응합니다. 기대를 낮추면 덜 다치지만 지금의 행복도 덜 느끼게 됩니다. 기대와 상처를 같은 것으로 묶어두는 방어에 가까운 마음입니다."),
    keywords: L("기대가 무서움, 덤덤한 반응, 마음 눌러둠, 한 걸음 물러남, 방어"),
    strengths: L("신중하고 충동적으로 휘둘리지 않으며 마음을 열면 깊게 사랑함"),
    reasonDetail: L("미래 약속을 들을 때, 신뢰를 받을 때, 평화가 이어질 때"),
    frequentSaying: L("\"너무 기대하면 안 될 것 같아서\""),
    changeTips: L("기대가 올라올 때 '기대해도 되는 근거'와 '걱정되는 근거'를 두 줄로 나눠 적어보기\n작은 기대(이번 주말 약속)부터 하나씩 열어보며 아무 일도 없었다는 경험 쌓기\n\"기대하는 게 무서워서 덤덤하게 굴어\"라고 연인에게 알려 오해 줄이기\n기대하는 것 자체가 반복해서 두렵고 일상에 영향을 준다면 심리상담 전문가와 그 불안의 뿌리를 안전하게 살펴보세요"),
    oneLiner: L("기대는 상처의 씨앗이 아니라 사랑의 문입니다. 한 뼘씩 열어도 괜찮습니다"),
    shareLine: L("나는 왜 연인이 잘해줄수록 불안해질까? 결과: 기대 공포형 🌫️ 기대했다 무너질까 봐 기대를 누르는 거래... 팩트라 조용해짐ㅠ 단톡방 결과 카드 인증! 너희는 뭐 나왔어?"),
  },
  {
    type: "Type5",
    emoji: "🕰️",
    title: L("예전 이별이 되살아나는 사람, 과거 재현형 🕰️"),
    typeName: L("과거 재현형"),
    realReason: L("예전에 좋다가 끝났던 경험이 지금의 행복 위에 겹쳐진다"),
    shortDescription: L("당신은 지금의 연인을 못 믿는 게 아닙니다. 예전에 좋다가 끝났던 기억이 지금의 행복에 경고를 보내고 있습니다."),
    description: L("다정한 말, 평화로운 날, 소중하다는 고백이 예전 이별 직전의 장면과 비슷하게 느껴집니다. 지금의 행동보다 과거의 패턴이 더 크게 반응해서, 같은 결말이 다시 올 것 같은 불안이 생깁니다."),
    keywords: L("예전 기억, 비슷한 장면, 경고, 반복될 것 같음, 그림자"),
    strengths: L("경험에서 배운 힘이 있고 신중하며 마음을 열었을 때는 깊고 단단한 연애를 함"),
    reasonDetail: L("예전과 비슷한 말이나 상황을 마주할 때, 좋은 순간 뒤에 찾아오는 고요"),
    frequentSaying: L("\"예전에도 이럴 때 끝났어\""),
    changeTips: L("지금 연인의 행동 중 '확인된 사실'과 '예전 기억 때문에 생긴 걱정'을 두 줄로 나눠 적기\n불안이 올라올 때 \"지금 나를 아프게 한 일이 있었나?\"를 먼저 점검하기\n예전 이별과 지금의 차이를 세 가지 적어 두고 필요할 때 읽어보기\n과거의 이별 기억이 자주 올라와 지금의 연애와 일상이 힘들다면 심리상담 전문가와 그 기억을 안전하게 정리해 보세요"),
    oneLiner: L("그림자가 있다는 건 한때 빛이 있었다는 뜻입니다. 지금의 빛을 천천히 믿어봐도 괜찮습니다"),
    shareLine: L("나는 왜 연인이 잘해줄수록 불안해질까? 결과: 과거 재현형 🕰️ 예전 이별 기억이 지금 행복에 겹쳐지는 거래... 소름 단톡방 결과 카드 인증! 너희는 어떤 이유야?"),
  },
];

export const phase3AnxiousWhenLovedResults: Phase3AnxiousWhenLovedResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3AnxiousWhenLovedResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_ANXIOUS_WHEN_LOVED_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_ANXIOUS_WHEN_LOVED_META = {
  title: withForeign("나는 왜 연인이 잘해줄수록 불안해질까?", (loc) => PHASE3_ANXIOUS_WHEN_LOVED_I18N[loc].meta.title),
  description: withForeign("잘해주는 사람 곁인데, 왜 마음 한쪽은 자꾸 불안할까? 10가지 상황으로 내가 행복할수록 불안한 진짜 이유와 마음을 안정시키는 법을 알려드립니다.", (loc) => PHASE3_ANXIOUS_WHEN_LOVED_I18N[loc].meta.description),
  tags: {
    ko: ["연애불안", "애착", "연애심리"],
    en: PHASE3_ANXIOUS_WHEN_LOVED_I18N.en.meta.tags,
    ja: PHASE3_ANXIOUS_WHEN_LOVED_I18N.ja.meta.tags,
    'zh-CN': PHASE3_ANXIOUS_WHEN_LOVED_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_ANXIOUS_WHEN_LOVED_I18N['zh-TW'].meta.tags,
    vi: PHASE3_ANXIOUS_WHEN_LOVED_I18N.vi.meta.tags,
    id: PHASE3_ANXIOUS_WHEN_LOVED_I18N.id.meta.tags,
  },
};

