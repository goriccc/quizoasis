/**
 * 나는 왜 연인의 사소한 말에 상처받을까?
 * slug: phase3-hurt-by-small-words
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_HURT_BY_SMALL_WORDS_I18N,
  type Phase3HurtBySmallWordsForeignLocale,
  type Phase3HurtBySmallWordsResultText,
} from './phase3HurtBySmallWordsI18n';

export type Phase3HurtBySmallWordsLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3HurtBySmallWordsLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_HURT_BY_SMALL_WORDS_I18N) as Phase3HurtBySmallWordsForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3HurtBySmallWordsForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3HurtBySmallWordsQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3HurtBySmallWordsResult {
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

export const PHASE3_HURT_BY_SMALL_WORDS_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3HurtBySmallWordsScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_HURT_BY_SMALL_WORDS_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3HurtBySmallWordsResult(answers: number[]): string {
  const scores = calculatePhase3HurtBySmallWordsScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_HURT_BY_SMALL_WORDS_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 상처 포인트). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3HurtBySmallWordsHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3HurtBySmallWordsScores(answers);
  const sorted = [...PHASE3_HURT_BY_SMALL_WORDS_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "연인이 약속 장소에서 나를 보더니 \"오늘 좀 피곤해 보인다\"라고 했다. 나는?",
    opts: [
      ["나를 만나는 게 반갑지 않은 건가 싶어 마음이 순간 쿵 내려앉는다", 2],
      ["오늘 데이트를 위해 신경 썼는데 알아봐 주지 않아서 서운하다", 3],
      ["요즘 계속 지쳐 있었는데 그 말이 마지막 한 방처럼 느껴져 울컥한다", 4],
      ["내가 별로인 모습으로 보이는 건가 싶어 자꾸 거울이 신경 쓰인다", 5],
    ],
  },
  {
    q: "연인이 \"너는 늘 그렇지 뭐\"라고 웃으며 말했다. 나는?",
    opts: [
      ["내가 바라던 따뜻한 반응이 아니라서 아쉽고 기대가 꺾인 느낌이다", 3],
      ["하루 종일 몸도 마음도 지쳐 있던 날이라 이 말이 더 크게 와서 눈물이 날 것 같다", 4],
      ["나는 늘 부족한 사람이라는 말처럼 들려 마음이 가라앉는다", 5],
      ["예전에 비슷한 말을 들었던 기억이 떠올라 그때 감정이 그대로 올라온다", 1],
    ],
  },
  {
    q: "연인이 내 이야기를 듣다 \"아 그래?\" 하고 폰을 봤다. 나는?",
    opts: [
      ["피곤한 하루 끝이라 이런 사소한 반응에도 마음이 한계에 닿는 느낌이다", 4],
      ["내 이야기가 재미없어서 관심을 거두는 것 같아 자존감이 내려간다", 5],
      ["예전에 대화 도중 무시당했던 장면이 겹쳐서 가슴이 철렁한다", 1],
      ["내 말이 중요하지 않다는 신호 같아서 더 이야기하고 싶지 않아진다", 2],
    ],
  },
  {
    q: "연인이 \"그건 좀 아닌 것 같은데\"라고 내 의견에 가볍게 말했다. 나는?",
    opts: [
      ["내 의견이 가치 없다는 말처럼 들려 위축된다", 5],
      ["예전에 의견을 말했다가 무시당했던 기억이 떠올라 말문이 막힌다", 1],
      ["내 의견을 거절당한 것 같아 마음의 문이 순간 닫힌다", 2],
      ["내 편이 되어줄 거라고 기대했는데 그 기대가 어긋나서 서운하다", 3],
    ],
  },
  {
    q: "연인이 \"그 정도는 알아서 해야지\"라고 말했다. 나는?",
    opts: [
      ["예전에 비슷한 말을 들으며 혼자 감당했던 시간이 떠올라 마음이 무거워진다", 1],
      ["도움을 요청하는 것 자체가 거절당한 것 같아 다음엔 말을 꺼내기 어렵다", 2],
      ["연인이라면 먼저 챙겨줄 거라고 생각했는데 기대와 달라서 서운하다", 3],
      ["이미 지친 상태에서 들은 말이라 마음이 한꺼번에 무너지는 느낌이다", 4],
    ],
  },
  {
    q: "연인이 \"나 지금 바빠, 나중에 얘기하자\"라고 연락했다. 나는?",
    opts: [
      ["며칠째 피로가 쌓여 있어서 이 말에 눈물이 날 만큼 마음이 약해진다", 4],
      ["바쁜 건 알지만 나는 중요하지 않은 사람인가 싶어 자존감이 흔들린다", 5],
      ["말을 꺼내기도 전에 밀려나는 것 같아 거절당한 기분이 든다", 2],
      ["중요한 얘기인데 알아줄 거라 기대했는데 그렇지 않아서 서운하다", 3],
    ],
  },
  {
    q: "연인이 \"너 요즘 좀 예민한 것 같아\"라고 말했다. 나는?",
    opts: [
      ["나는 늘 문제가 있는 사람인가 싶어 스스로가 작아진다", 5],
      ["예전 연애에서도 예민하다는 말을 들었던 기억이 떠올라 마음이 아프다", 1],
      ["내 마음을 알아줄 거라 기대했는데 지적으로 돌아와서 실망스럽다", 3],
      ["요즘 계속 지쳐 있었는데 그 말에 더 지치고 눈물이 난다", 4],
    ],
  },
  {
    q: "연인이 단체 사진에서 내 옆자리가 아닌 다른 곳에 앉았다. 나는?",
    opts: [
      ["예전에 비슷하게 소외됐던 장면이 겹쳐서 마음이 얼어붙는다", 1],
      ["나를 멀리하는 신호 같아서 거절당한 느낌에 마음이 쿵 내려앉는다", 2],
      ["하루 종일 쌓인 피로 때문에 이런 작은 일에도 감정이 무너진다", 4],
      ["나는 옆에 앉고 싶은 사람이 아닌가 싶어 자존감이 떨어진다", 5],
    ],
  },
  {
    q: "연인이 \"그냥 네가 이해해줘\"라고 말했다. 나는?",
    opts: [
      ["내 마음은 늘 뒤로 밀리는 것 같아 요청하기도 전에 마음이 닫힌다", 2],
      ["연인이라면 내 마음을 먼저 헤아려 줄 거라 기대했는데 어긋나서 서운하다", 3],
      ["내 감정은 이해받을 만큼 가치 없는 건가 싶어 스스로가 작게 느껴진다", 5],
      ["예전에도 늘 내가 이해하는 쪽이었던 기억이 떠올라 마음이 먹먹하다", 1],
    ],
  },
  {
    q: "연인에게 \"내가 방금 한 말에 상처받았어\"라고 말하려는 순간, 속마음에 가장 가까운 건?",
    opts: [
      ["이런 말을 하면 기대에 못 미치는 사람이 될까 봐 연인의 반응이 먼저 걱정된다", 3],
      ["말을 해도 가볍게 넘길 것 같아서 말할 힘조차 없어 입을 닫고 싶다", 4],
      ["예전에 말했다가 오히려 더 상처받았던 기억이 떠올라 망설여진다", 1],
      ["말하면 거절당할까 봐 두려워서 말이 목구멍에서 멈춘다", 2],
    ],
  },
];

export const phase3HurtBySmallWordsQuestions: Phase3HurtBySmallWordsQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_HURT_BY_SMALL_WORDS_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_HURT_BY_SMALL_WORDS_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3HurtBySmallWordsResultText)[];

const KO_RESULTS: Phase3HurtBySmallWordsResult[] = [
  {
    type: "Type1",
    emoji: "🕰️",
    title: L("예전 기억이 지금의 말에 겹치는 사람, 과거 소환형 🕰️"),
    typeName: L("과거 소환형"),
    realReason: L("지금의 한마디가 예전에 아팠던 장면을 건드려 그때의 감정이 올라온다"),
    shortDescription: L("당신은 예민한 게 아닙니다. 지금의 한마디가 예전에 아팠던 기억의 버튼을 눌러 그때 감정이 함께 올라오는 것입니다."),
    description: L("연인은 아무 뜻 없이 말했는데 내 마음은 과거의 비슷한 장면으로 순식간에 돌아갑니다. 지금의 말보다 그때의 감정이 더 크게 반응하기 때문에 반응이 상황보다 크게 느껴집니다. 이 연결을 알아차리면 상처의 크기가 줄어듭니다."),
    keywords: L("기억 버튼, 비슷한 장면, 그때의 감정, 과거와 현재의 겹침, 반응이 커짐"),
    strengths: L("기억이 깊고 경험에서 배우는 힘이 있으며 감정의 결이 섬세함"),
    reasonDetail: L("예전에 들었던 말과 비슷한 표현, 비슷한 상황"),
    frequentSaying: L("\"예전에도 이런 말 들었었는데\""),
    changeTips: L("마음이 쿵 내려앉을 때 \"지금 이 말 때문일까, 예전 기억 때문일까?\"를 먼저 물어보기\n연인에게 \"그 말이 예전 기억을 건드렸어\"라고 이유를 함께 말해주기\n과거 장면과 지금 장면의 차이를 두 줄로 적어 현재를 구분하기\n과거의 기억이 자주 올라와 일상이나 관계가 힘들다면 심리상담 전문가와 그 기억을 안전하게 정리해 보세요"),
    oneLiner: L("지금의 말과 그때의 기억을 분리하면 마음의 크기가 현실 크기로 돌아옵니다"),
    shareLine: L("나는 왜 연인의 사소한 말에 상처받을까? 결과: 과거 소환형 🕰️ 지금 한마디가 예전 기억 버튼을 누르는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?"),
  },
  {
    type: "Type2",
    emoji: "🚪",
    title: L("거절처럼 느껴지는 순간에 얼어붙는 사람, 거절 민감형 🚪"),
    typeName: L("거절 민감형"),
    realReason: L("사소한 말이나 행동을 '나를 밀어내는 신호'로 읽는다"),
    shortDescription: L("당신은 예민한 게 아닙니다. 거절의 신호를 빨리 알아차리는 마음의 안테나가 높은 사람입니다."),
    description: L("나중에 얘기하자, 바빠, 그건 아닌 것 같아 같은 말이 내게는 '너를 원하지 않아'로 들립니다. 마음이 순식간에 닫히고 다음엔 말을 꺼내는 것 자체가 어려워집니다. 거절에 대한 민감함은 관계를 소중히 여기는 마음의 다른 모습이기도 합니다."),
    keywords: L("밀려남, 거절 신호, 마음이 닫힘, 말 꺼내기 어려움, 안테나"),
    strengths: L("관계를 진지하게 대하고 상대의 작은 변화를 빨리 알아채는 섬세함"),
    reasonDetail: L("약속 연기, 바쁘다는 말, 의견에 대한 반대, 멀어지는 행동"),
    frequentSaying: L("\"나를 싫어하게 된 건 아니지?\""),
    changeTips: L("거절로 읽히는 순간 \"이 말이 정말 거절인가, 그냥 사정인가?\"를 사실로 확인하기\n\"방금 그 말이 거절처럼 들렸는데 그런 뜻이야?\"라고 직접 물어보기\n거절 같은 말 뒤에 이어지는 연인의 행동(연락·약속)으로 확인하기"),
    oneLiner: L("거절처럼 들린 말이 정말 거절인지 한 번만 확인해 보세요. 대부분은 마음의 해석이 더 컸습니다"),
    shareLine: L("나는 왜 연인의 사소한 말에 상처받을까? 결과: 거절 민감형 🚪 사소한 말을 밀어내는 신호로 읽는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘"),
  },
  {
    type: "Type3",
    emoji: "🎨",
    title: L("말하지 않은 기대가 어긋나 서운한 사람, 기대 과잉형 🎨"),
    typeName: L("기대 과잉형"),
    realReason: L("연인이 해줄 거라 기대한 반응과 실제 반응의 간격이 상처가 된다"),
    shortDescription: L("당신은 말이 상처가 된 게 아닙니다. 기대했던 반응이 나오지 않았다는 간격이 서운함이 되었습니다."),
    description: L("알아봐 줄 거라는 기대, 편들어줄 거라는 기대, 먼저 챙겨줄 거라는 기대가 말로 꺼내지지 않은 채 쌓입니다. 연인은 기대의 존재를 모르고 지나가고, 나는 '왜 몰라주지'로 상처를 입습니다. 기대를 말로 바꾸면 서운함이 줄어듭니다."),
    keywords: L("말하지 않은 기대, 알아봐 줄 거라는 믿음, 반응의 간격, 서운함"),
    strengths: L("관계에 대한 기준이 분명하고 사랑을 깊게 주고받고 싶은 마음이 큼"),
    reasonDetail: L("알아봐 주지 않을 때, 내 편이 되어주지 않을 때, 먼저 챙겨주지 않을 때"),
    frequentSaying: L("\"이 정도는 알아줘야 하는 거 아냐?\""),
    changeTips: L("서운할 때 '내가 이 기대를 연인에게 말한 적이 있는가'를 먼저 확인하기\n\"이럴 때 이렇게 해주면 좋겠어\"라고 기대를 요청 문장으로 바꾸기\n연인이 해준 일 3가지를 먼저 떠올린 뒤 아쉬운 점을 이야기하기"),
    oneLiner: L("기대는 말하지 않으면 전해지지 않습니다. 요청으로 바꾸면 서운함은 대화가 됩니다"),
    shareLine: L("나는 왜 연인의 사소한 말에 상처받을까? 결과: 기대 과잉형 🎨 말이 아니라 기대한 반응이 안 와서 서운한 거래... 이거 너 같아ㅋㅋ 너도 해봐"),
  },
  {
    type: "Type4",
    emoji: "🔋",
    title: L("쌓인 피로가 한계에 닿은 사람, 피로 누적형 🔋"),
    typeName: L("피로 누적형"),
    realReason: L("이미 지쳐 있어서 작은 한마디가 마지막 한 방울이 된다"),
    shortDescription: L("당신은 말에 약한 게 아닙니다. 쌓인 피로로 마음의 여유가 바닥나 있는 상태에서 한마디가 닿은 것입니다."),
    description: L("평소라면 웃어넘겼을 말도 며칠째 피곤하고 지친 날에는 눈물이 날 만큼 크게 느껴집니다. 말 자체의 크기보다 내 마음의 여유가 얼마나 남아 있느냐가 반응의 크기를 정합니다. 상처받는 날의 컨디션을 살피면 반응이 달라집니다."),
    keywords: L("마지막 한 방울, 여유 없음, 컨디션, 눈물, 한계"),
    strengths: L("책임감이 강하고 맡은 일을 성실히 해내며 참을성이 큼"),
    reasonDetail: L("지친 날, 바쁜 시기, 며칠째 쉬지 못한 때 들은 말"),
    frequentSaying: L("\"요즘 너무 지쳐서 별것 아닌데도 힘들어\""),
    changeTips: L("지친 날에는 중요한 대화를 미루고 \"오늘은 컨디션이 안 좋아서 내일 얘기하자\"고 말하기\n상처받은 순간 '오늘 내가 얼마나 지쳐 있었지?'를 먼저 체크하기\n수면·식사·쉬는 시간을 일정에 먼저 넣어 마음의 여유를 만들기\n피로와 무기력이 오래 이어져 일상의 의욕과 수면, 식사에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요"),
    oneLiner: L("상처는 말의 크기만큼이 아니라 내 여유의 크기만큼 커집니다. 먼저 쉬는 것이 가장 빠른 방패입니다"),
    shareLine: L("나는 왜 연인의 사소한 말에 상처받을까? 결과: 피로 누적형 🔋 쌓인 피로 위에 한마디가 마지막 한 방울이 된 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?"),
  },
  {
    type: "Type5",
    emoji: "🪞",
    title: L("한마디에 내 가치가 흔들리는 사람, 자존감 흔들림형 🪞"),
    typeName: L("자존감 흔들림형"),
    realReason: L("연인의 말을 '내가 부족하다는 증거'로 받아들인다"),
    shortDescription: L("당신은 말에 상처받는 게 아닙니다. 그 말 속에서 '나는 부족한 사람'이라는 결론을 읽어내고 있습니다."),
    description: L("피곤해 보인다는 말은 '내가 별로인가', 그건 아닌 것 같다는 말은 '내 의견은 가치 없나', 예민하다는 말은 '나는 문제가 있나'로 번집니다. 말의 내용보다 그 말이 내 자존감에 건드리는 지점이 상처의 정체입니다. 상대의 말과 내 가치를 분리하면 마음이 가벼워집니다."),
    keywords: L("나는 부족하다, 가치 흔들림, 결론 비약, 자기 평가, 위축"),
    strengths: L("겸손하고 자기 행동을 돌아볼 줄 알며 상대를 배려하는 섬세함"),
    reasonDetail: L("외모·의견·성격에 대한 사소한 평가나 지적"),
    frequentSaying: L("\"내가 별로라서 그런 거 아닐까?\""),
    changeTips: L("상처받을 때 \"이 말이 내 가치를 정한 건가, 이 한 상황에 대한 말인가?\"를 구분하기\n연인의 말과 상관없이 내가 가진 장점 3가지를 적어 두고 읽기\n마음에 걸린 말은 \"방금 그 말은 어떤 뜻이었어?\"라고 의도를 직접 확인하기\n자신이 부족하다는 생각이 연애뿐 아니라 일상 전반에서 자주 강하게 이어진다면 심리상담 전문가와 이야기해 보세요"),
    oneLiner: L("한마디가 당신의 가치를 정하지 못합니다. 말과 나를 분리하는 연습이 마음의 방패가 됩니다"),
    shareLine: L("나는 왜 연인의 사소한 말에 상처받을까? 결과: 자존감 흔들림형 🪞 한마디를 내가 부족하다는 증거로 읽는 거래... 이거 너 같아ㅠ 해보고 알려줘"),
  },
];

export const phase3HurtBySmallWordsResults: Phase3HurtBySmallWordsResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3HurtBySmallWordsResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_HURT_BY_SMALL_WORDS_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_HURT_BY_SMALL_WORDS_META = {
  title: withForeign("나는 왜 연인의 사소한 말에 상처받을까?", (loc) => PHASE3_HURT_BY_SMALL_WORDS_I18N[loc].meta.title),
  description: withForeign("별 뜻 없는 한마디인데, 왜 마음이 쿵 내려앉을까? 10가지 상황으로 내가 상처받는 진짜 이유와 마음을 지키는 법을 알려드립니다.", (loc) => PHASE3_HURT_BY_SMALL_WORDS_I18N[loc].meta.description),
  tags: {
    ko: ["연애상처", "연애심리"],
    en: PHASE3_HURT_BY_SMALL_WORDS_I18N.en.meta.tags,
    ja: PHASE3_HURT_BY_SMALL_WORDS_I18N.ja.meta.tags,
    'zh-CN': PHASE3_HURT_BY_SMALL_WORDS_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_HURT_BY_SMALL_WORDS_I18N['zh-TW'].meta.tags,
    vi: PHASE3_HURT_BY_SMALL_WORDS_I18N.vi.meta.tags,
    id: PHASE3_HURT_BY_SMALL_WORDS_I18N.id.meta.tags,
  },
};

