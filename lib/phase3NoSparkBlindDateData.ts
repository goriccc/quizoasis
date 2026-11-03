/**
 * 나는 왜 소개팅만 하면 호감이 안 생길까?
 * slug: phase3-no-spark-blind-date
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 · 동점 시 Q1→Q2→…
 */

import {
  PHASE3_NO_SPARK_BLIND_DATE_I18N,
  type Phase3NoSparkBlindDateForeignLocale,
  type Phase3NoSparkBlindDateResultText,
} from './phase3NoSparkBlindDateI18n';

export type Phase3NoSparkBlindDateLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3NoSparkBlindDateText = Record<Phase3NoSparkBlindDateLocaleKey, string>;

function L(ko: string): Phase3NoSparkBlindDateText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_NO_SPARK_BLIND_DATE_I18N) as Phase3NoSparkBlindDateForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3NoSparkBlindDateForeignLocale) => string,
): Phase3NoSparkBlindDateText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export function noSparkBlindDateText(text: Phase3NoSparkBlindDateText, locale: string): string {
  return text[locale as Phase3NoSparkBlindDateLocaleKey] || text.ko;
}

export interface Phase3NoSparkBlindDateQuestion {
  id: number;
  question: Phase3NoSparkBlindDateText;
  options: { text: Phase3NoSparkBlindDateText; score: number }[];
}

export interface Phase3NoSparkBlindDateResult {
  type: string;
  emoji: string;
  title: Phase3NoSparkBlindDateText;
  typeName: Phase3NoSparkBlindDateText;
  realReason: Phase3NoSparkBlindDateText;
  quote: Phase3NoSparkBlindDateText;
  description: Phase3NoSparkBlindDateText;
  keywords: Phase3NoSparkBlindDateText;
  blockMoment: Phase3NoSparkBlindDateText;
  strengths: Phase3NoSparkBlindDateText;
  realReasonUnpack: Phase3NoSparkBlindDateText;
  frequentSaying: Phase3NoSparkBlindDateText;
  tips: Phase3NoSparkBlindDateText;
  counselingNote: Phase3NoSparkBlindDateText;
  oneLiner: Phase3NoSparkBlindDateText;
  shareLine: Phase3NoSparkBlindDateText;
}

export const PHASE3_NO_SPARK_BLIND_DATE_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

export const PHASE3_NO_SPARK_BLIND_DATE_MAX_TYPE_SCORE = 8;

export const PHASE3_NO_SPARK_BLIND_DATE_META = {
  title: withForeign(
    '나는 왜 소개팅만 하면 호감이 안 생길까?',
    (loc) => PHASE3_NO_SPARK_BLIND_DATE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '분명 좋은 사람인데 왜 소개팅만 하면 마음이 안 움직일까? 12가지 상황으로 기준 고정형·첫인상 집착형·비교 습관형 등 6가지 중 내가 소개팅에서 막히는 진짜 이유를 알려드립니다.',
    (loc) => PHASE3_NO_SPARK_BLIND_DATE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['소개팅', '솔로탈출', '연애심리'],
    en: PHASE3_NO_SPARK_BLIND_DATE_I18N.en.meta.tags,
    ja: PHASE3_NO_SPARK_BLIND_DATE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_NO_SPARK_BLIND_DATE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_NO_SPARK_BLIND_DATE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_NO_SPARK_BLIND_DATE_I18N.vi.meta.tags,
    id: PHASE3_NO_SPARK_BLIND_DATE_I18N.id.meta.tags,
  },
};

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3NoSparkBlindDateScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_NO_SPARK_BLIND_DATE_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3NoSparkBlindDateResult(answers: number[]): string {
  const scores = calculatePhase3NoSparkBlindDateScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_NO_SPARK_BLIND_DATE_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 막힘). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3NoSparkBlindDateSecondType(answers: number[]): string | null {
  const scores = calculatePhase3NoSparkBlindDateScores(answers);
  const sorted = [...PHASE3_NO_SPARK_BLIND_DATE_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '소개팅 자리에 앉아 상대와 인사를 나눈 첫 5분, 나는?',
    opts: [
      ['첫 5분의 인상으로 이미 느낌이 정해지는 것 같고 그 뒤는 확인하는 시간이 된다', 2],
      ['긴장돼서 웃음도 어색하고 내 본모습이 안 나와 방어적으로 앉아 있다', 4],
      ['오기 전에 상상한 모습이 커서 눈앞의 실제와 간격이 느껴져 김이 빠진다', 5],
      ['이번에도 별일 없겠지 싶어 마음을 열지 않은 채 예의 바르게만 대한다', 6],
    ],
  },
  {
    q: '상대가 자신의 직업과 취미를 소개했다. 나는?',
    opts: [
      ['내가 정해둔 조건(키·직업·분위기)에 맞는지 하나씩 체크하게 된다', 1],
      ['지난 소개팅 상대나 전 애인과 자연스럽게 비교하게 된다', 3],
      ['좋은 사람일수록 상처받을 수 있으니 마음에 선을 긋고 듣는다', 6],
      ['어떤 말을 해야 할지 계속 신경 쓰느라 대화에 집중이 안 된다', 4],
    ],
  },
  {
    q: '대화가 잘 흘러가고 상대가 좋은 사람 같다. 그런데 나는?',
    opts: [
      ['이 정도면 설렘이 와야 하는데 오지 않아서 아쉽다', 5],
      ['대화는 좋지만 내 조건표에서 한 칸이 비어 있어 마음이 멈춘다', 1],
      ['첫인상이 별로였던 게 계속 남아서 대화가 잘 풀려도 그 인상이 지워지지 않는다', 2],
      ['다른 소개팅 상대가 더 잘했던 것 같아 은근히 비교한다', 3],
    ],
  },
  {
    q: '소개팅이 끝나갈 즈음 내 마음은?',
    opts: [
      ['처음부터 마음을 열지 않았으니 감정의 변화가 거의 없다', 6],
      ['첫 5분에 느낀 인상이 끝까지 그대로라 결론이 바뀌지 않는다', 2],
      ['이 사람이 전 애인이나 이전 상대와 비교해 몇 점인지 계산하고 있다', 3],
      ['오늘을 많이 기대했는데 설렘이 없어서 실망이 크다', 5],
    ],
  },
  {
    q: '상대가 "다음에 또 볼까요?"라고 물었다. 나는?',
    opts: [
      ['지난번 소개팅 상대보다 나은지 비교해 본 뒤 대답하려 한다', 3],
      ['기대한 만큼의 설렘이 없었는데 계속 만나야 하나 고민된다', 5],
      ['내 기준에 몇 가지가 안 맞아서 선뜻 답하기 어렵다', 1],
      ['긴장해서 본모습을 못 보여준 것 같아 다음에도 같을까 봐 걱정된다', 4],
    ],
  },
  {
    q: '주선자가 "그분 어땠어?"라고 물었다. 나는?',
    opts: [
      ['첫인상에서 아니라고 느꼈다고 말하고 그 느낌을 뒷받침할 근거를 모은다', 2],
      ['소개팅은 원래 큰 기대가 없고 마음이 안 움직이는 게 늘 그렇다고 답한다', 6],
      ['긴장해서 정신이 없어 상대가 어땠는지 제대로 기억나지 않는다', 4],
      ['좋은 사람이지만 내 이상형 조건과는 거리가 있다고 말한다', 1],
    ],
  },
  {
    q: '상대가 내 이야기를 궁금해하며 이것저것 물었다. 나는?',
    opts: [
      ['평가받는 느낌에 긴장돼서 준비해 간 말만 반복하며 방어적으로 답한다', 4],
      ['상대의 말투와 태도를 이전 사람들과 견주며 듣게 된다', 3],
      ['이 사람도 결국 비슷하게 끝날 것 같아 깊은 이야기는 하지 않는다', 6],
      ['이미 정해진 인상으로 듣다 보니 새로운 모습이 눈에 안 들어온다', 2],
    ],
  },
  {
    q: '상대가 계산을 하고 "집까지 데려다줄게요"라고 했다. 나는?',
    opts: [
      ['매너는 좋지만 내 조건표의 중요한 항목은 아니라 점수가 오르지 않는다', 1],
      ['고마운데 내가 기대했던 설렘 장면과 달라서 마음이 안 움직인다', 5],
      ['긴장이 풀리지 않아 고맙다는 말도 어색하게 나오고 거리를 두게 된다', 4],
      ['친절한 사람일수록 마음이 가면 아플까 봐 더 선을 긋는다', 6],
    ],
  },
  {
    q: '소개팅을 마치고 집에 돌아온 저녁, 나는?',
    opts: [
      ['마음이 안 움직이는 게 익숙해서 별 감흥 없이 하루를 마무리한다', 6],
      ['조건 체크리스트를 다시 떠올리며 안 맞는 항목을 정리한다', 1],
      ['첫인상을 떠올리며 역시 그때 느낌이 맞았다고 결론짓는다', 2],
      ['이전 소개팅 상대들과 점수를 비교해 순위를 매겨 본다', 3],
    ],
  },
  {
    q: '친구가 "좋은 사람이면 한 번 더 만나봐"라고 말했다. 속마음은?',
    opts: [
      ['또 만나도 비교하게 될 것 같아서 의미가 없다고 느낀다', 3],
      ['한 번 더 만나면 덜 긴장할 것 같지만 또 어색할까 봐 걱정된다', 4],
      ['기대했던 설렘이 다음에 갑자기 생길 것 같지 않아 망설여진다', 5],
      ['첫인상이 바뀔 것 같지 않아서 두 번째 만남이 필요 없다고 느낀다', 2],
    ],
  },
  {
    q: '지인이 또 소개팅을 제안했다. 나는?',
    opts: [
      ['이번엔 영화 같은 설렘이 올 거라는 기대가 또 커지고 그만큼 불안하다', 5],
      ['또 그럴 텐데 싶어서 크게 기대하지 않고 마음의 문을 닫는다', 6],
      ['지난번 사람과 비교해 이번 사람의 프로필 점수를 매겨 본다', 3],
      ['프로필의 조건을 보고 내 기준에 맞는지 먼저 걸러낸다', 1],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"소개팅 자리에선 긴장해서 나다운 모습이 안 나와"', 4],
      ['"첫인상에서 느낌이 정해지면 잘 바뀌지 않아"', 2],
      ['"내가 정한 조건에 맞는 사람이어야 마음이 가"', 1],
      ['"소개팅에 갈 땐 기대를 너무 크게 하게 돼"', 5],
    ],
  },
];

const RAW_RESULTS: {
  type: string;
  emoji: string;
  title: string;
  typeName: string;
  realReason: string;
  quote: string;
  description: string;
  keywords: string;
  blockMoment: string;
  strengths: string;
  realReasonUnpack: string;
  frequentSaying: string;
  tips: string;
  counselingNote: string;
  oneLiner: string;
  shareLine: string;
}[] = [
  {
    type: 'Type1',
    emoji: '📋',
    title: '기준 고정형',
    typeName: '기준 고정형',
    realReason: '사람을 만나기 전에 내 조건표와 대조해서 호감이 열리기 전에 걸러낸다',
    quote: '당신은 까다로운 게 아닙니다. 기준이 분명한 만큼 사람보다 조건표를 먼저 읽고 있습니다.',
    description:
      '키, 직업, 분위기, 가치관까지 정해둔 항목에서 한 칸이라도 비면 마음이 멈춥니다. 기준은 나를 지켜주지만 대부분의 호감은 만난 뒤에 자랍니다. 모든 항목이 맞는 사람은 처음부터 거의 없습니다.',
    keywords: '조건표·체크리스트·한 칸 빔·걸러내기·이상형 틀',
    blockMoment: '프로필을 볼 때, 직업·외모 같은 항목이 나올 때, 소개팅 직후 정리할 때',
    strengths: '내가 원하는 관계의 모습이 분명하고 나에게 맞지 않는 관계에 휩쓸리지 않는 단단함',
    realReasonUnpack: '사람의 문제가 아니라 만남 이전 단계에서 대부분을 탈락시키는 기준 구조',
    frequentSaying: '"좋은 분인데 제 스타일은 아니에요"',
    tips:
      "기준을 '반드시 필요한 3가지'와 '있으면 좋은 것'으로 나눠 적기\n만나는 동안 점수 대신 '이 사람의 재밌는 점 하나'를 찾기\n조건이 하나 비어도 세 번은 만나보고 판단하기",
    counselingNote: '',
    oneLiner: '기준을 낮추라는 게 아닙니다. 조건표를 잠깐 덮고 사람을 한 번만 더 봐주세요',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 기준 고정형 📋 사람보다 조건표를 먼저 읽는 거래... 나 기준 고정형 나왔어ㅋㅋ 너는 뭐 나왔어?',
  },
  {
    type: 'Type2',
    emoji: '⏱️',
    title: '첫인상 집착형',
    typeName: '첫인상 집착형',
    realReason: '첫인상으로 느낌이 정해지고 그 뒤의 대화는 결론을 확인하는 시간이 된다',
    quote:
      '당신은 마음이 닫힌 게 아닙니다. 첫 5분의 느낌이 너무 빨리 결론이 되어 나머지 시간을 검증으로 쓰고 있습니다.',
    description:
      '대화가 잘 풀려도 처음의 인상이 지워지지 않고, 새로운 모습이 보여도 이미 정해진 틀로 해석합니다. 첫인상은 빠른 판단 도구지만 사람의 전부를 말해주지는 않습니다.',
    keywords: '첫 5분·직감·결론 고정·확증·두 번째 만남 불필요',
    blockMoment: '첫인사, 대화 초반, 소개팅이 끝나고 평가할 때',
    strengths: '사람을 빠르게 파악하고 직감이 발달해 에너지를 아끼는 능력',
    realReasonUnpack: '호감이 없는 게 아니라 빠른 판단이 이후 정보를 걸러내는 필터가 되고 있음',
    frequentSaying: '"처음 딱 봤을 때 느낌이 아니었어요"',
    tips:
      "첫 느낌을 '가설'로 두고 대화 중 가설과 다른 점 두 가지를 찾아보기\n첫인상이 별로여도 두 번째 만남을 한 번만 가져보기\n첫인상 이후 새로 알게 된 사실을 메모해 결론을 미루기",
    counselingNote: '',
    oneLiner: '첫인상은 시작일 뿐 결론이 아닙니다. 두 번째 장면에서 사람이 달라 보이기도 합니다',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 첫인상 집착형 ⏱️ 첫 5분에 결론이 나는 거래... 나 첫인상 집착형 나왔어ㅋㅋ 인정 너는?',
  },
  {
    type: 'Type3',
    emoji: '⚖️',
    title: '비교 습관형',
    typeName: '비교 습관형',
    realReason: '지난 사람이나 전 애인과 비교하느라 지금 눈앞의 사람이 보이지 않는다',
    quote: '당신은 상대가 부족한 게 아니라 비교의 저울이 너무 빨리 올라와 있습니다.',
    description:
      '말투, 매너, 대화 방식을 이전 상대나 전 애인과 견주고 점수를 매깁니다. 비교는 안전한 판단 같지만 사람마다 다른 장점을 같은 표에 넣으면 늘 어딘가 모자라 보입니다. 새로운 사람의 고유한 매력이 가려집니다.',
    keywords: '점수 매기기·이전 상대·순위·저울·같은 표에 올림',
    blockMoment: '상대의 말투를 들을 때, 소개팅 후 정리할 때, 새 소개가 들어올 때',
    strengths: '경험에서 배운 기준이 있고 관계의 장단점을 구체적으로 보는 분석력',
    realReasonUnpack: '눈앞의 사람 대신 기억 속 사람이 기준이 되어 평가하는 구조',
    frequentSaying: '"전에 만났던 분은 이랬는데"',
    tips:
      "비교가 시작되면 '이 사람만의 특징 한 가지'를 먼저 적어보기\n점수 대신 '오늘 처음 알게 된 것' 한 가지로 정리하기\n비교 대상이 되는 사람과 그 사람의 단점도 함께 떠올려 균형 맞추기",
    counselingNote: '',
    oneLiner: '사람은 서로를 비교할 표에 올려지지 않습니다. 새 사람은 새 이야기로 읽어보세요',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 비교 습관형 ⚖️ 지난 사람이랑 자꾸 저울에 올리는 거래... 나 비교 습관형 나왔어ㅋㅋ 찔림 너는 어떤 유형이야?',
  },
  {
    type: 'Type4',
    emoji: '🛡️',
    title: '긴장 방어형',
    typeName: '긴장 방어형',
    realReason: '평가받는 자리라는 긴장 때문에 본모습이 안 나오고 방어적으로 앉아 있다',
    quote:
      '당신은 호감이 없는 게 아닙니다. 긴장하느라 나를 꺼낼 여유가 없어서 상대도 나도 서로를 못 보고 있습니다.',
    description:
      '준비한 말만 반복하고, 웃음이 어색해지고, 끝나고 나면 상대가 어땠는지 기억나지 않습니다. 긴장 때문에 감정도 닫혀서 호감이 올라올 틈이 없어집니다. 소개팅이라는 형식 자체가 부담이 되는 타입입니다.',
    keywords: '평가받는 느낌·어색한 웃음·준비한 말·기억 안 남·본모습 가림',
    blockMoment: '첫인사, 질문을 받을 때, 침묵이 흐를 때',
    strengths: '상대를 존중하고 실례하지 않으려는 신중함과 배려',
    realReasonUnpack: '호감 부족이 아니라 긴장이 감정과 주의를 모두 가져가는 상태',
    frequentSaying: '"너무 긴장해서 무슨 말을 했는지 모르겠어요"',
    tips:
      '만나기 전 소재 3가지를 메모하고 첫 5분은 질문 위주로 대화하기\n긴장될 때 "저 좀 긴장했어요"라고 솔직하게 말해 부담을 줄이기\n가벼운 장소(산책·카페)에서 짧게 만나고 두 번째 만남으로 이어가기',
    counselingNote:
      '사람 앞에서의 긴장이 심해 일상과 관계 전반에 영향을 준다면 심리상담 전문가와 이야기해 보세요',
    oneLiner: '긴장은 진심의 다른 모습입니다. 긴장을 인정하는 한마디가 호감의 문을 엽니다',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 긴장 방어형 🛡️ 긴장해서 나다움이 안 나오는 거래... 나 긴장 방어형 나왔어ㅋㅋ 소름 너는 뭐야?',
  },
  {
    type: 'Type5',
    emoji: '🎬',
    title: '기대 과다형',
    typeName: '기대 과다형',
    realReason: '영화 같은 설렘을 기대하다 현실과의 간격에서 실망한다',
    quote:
      '당신은 호감이 안 생기는 게 아닙니다. 기대한 장면과 눈앞의 현실 사이 간격이 실망으로 느껴집니다.',
    description:
      "오기 전에 상상한 장면이 크면 평범하게 잘 흘러가는 대화도 밋밋해집니다. 설렘이 오지 않으면 '이 사람은 아니다'로 결론을 내리지만, 잔잔하게 시작하는 호감도 많습니다. 기대가 클수록 소개팅이 반복될 때마다 실망도 쌓입니다.",
    keywords: '영화 같은 설렘·상상과 현실 간격·실망·설렘 판정·기대 증폭',
    blockMoment: '만나기 전 상상할 때, 설렘이 안 올 때, 다음 소개가 들어올 때',
    strengths: '사랑에 대한 로망과 진지함이 크고 관계에 대한 기대를 포기하지 않는 낙관',
    realReasonUnpack: "사람이 아니라 '첫 만남에서 설렘이 와야 한다'는 기대가 판정 기준이 됨",
    frequentSaying: '"설렘이 있어야 하는데 안 오네요"',
    tips:
      "소개팅 전에 '설렘'보다 '편안한가·대화가 이어지는가' 같은 기대 한 가지를 추가하기\n설렘은 세 번 정도 만나며 자란다고 생각하고 판정을 미루기\n기대하는 장면을 적어두고 현실에서 좋았던 장면 세 가지와 비교하기",
    counselingNote: '',
    oneLiner: '설렘은 첫 만남에만 오지 않습니다. 천천히 자라는 호감도 사랑의 시작입니다',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 기대 과다형 🎬 영화 같은 설렘을 기대해서 실망하는 거래... 나 기대 과다형 나왔어ㅋㅋ 인정 너는?',
  },
  {
    type: 'Type6',
    emoji: '🔒',
    title: '마음 닫힘형',
    typeName: '마음 닫힘형',
    realReason: '또 실망하거나 상처받을까 봐 시작 전에 마음을 열지 않는다',
    quote: '당신은 무심한 게 아닙니다. 다치지 않으려고 마음을 열기 전에 먼저 문을 잠가두었습니다.',
    description:
      '이번에도 별일 없을 거라며 기대를 낮추고, 친절한 사람일수록 선을 긋습니다. 마음이 안 움직이는 게 익숙해져서 감흥이 없는 상태가 기본값이 되었습니다. 방어가 오래되면 호감이 움직이는 감각 자체가 무뎌집니다.',
    keywords: '기대 안 함·선 긋기·예의만 지킴·감흥 없음·방어',
    blockMoment: '소개팅 제안을 받을 때, 상대가 친절할 때, 깊은 이야기가 나올 때',
    strengths: '신중하고 쉽게 휘둘리지 않으며 마음을 열면 깊고 진지하게 사랑함',
    realReasonUnpack: '소개팅의 문제가 아니라 과거의 실망과 상처가 마음의 문을 미리 닫게 함',
    frequentSaying: '"어차피 이번에도 비슷할 텐데요"',
    tips:
      "만나기 전 '이번엔 문을 한 뼘만 열어둔다'를 나만의 규칙으로 정하기\n대화 중 상대의 호감 가는 점을 한 가지 소리 내어 말해 보기\n과거에 실망했던 경험과 지금의 상대를 분리해서 '이 사람은 어떤 사람인가'를 따로 적어보기",
    counselingNote:
      '과거의 상처로 새로운 만남이 반복해서 힘들고 일상에 영향을 준다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요',
    oneLiner:
      '닫힌 문은 상처의 흔적이지 영원한 결론이 아닙니다. 한 뼘만 열어도 새로운 바람이 들어옵니다',
    shareLine:
      '나는 왜 소개팅만 하면 호감이 안 생길까? 결과: 마음 닫힘형 🔒 시작 전에 문을 미리 잠가두는 거래... 나 마음 닫힘형 나왔어ㅋㅋ 너는 뭐 나왔어?',
  },
];

export const phase3NoSparkBlindDateQuestions: Phase3NoSparkBlindDateQuestion[] = RAW_QUESTIONS.map(
  (item, index) => ({
    id: index + 1,
    question: withForeign(item.q, (loc) => PHASE3_NO_SPARK_BLIND_DATE_I18N[loc].questions[index].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_NO_SPARK_BLIND_DATE_I18N[loc].questions[index].opts[oi]),
      score,
    })),
  }),
);

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'realReason',
  'quote',
  'description',
  'keywords',
  'blockMoment',
  'strengths',
  'realReasonUnpack',
  'frequentSaying',
  'tips',
  'counselingNote',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3NoSparkBlindDateResultText)[];

export const phase3NoSparkBlindDateResults: Phase3NoSparkBlindDateResult[] = RAW_RESULTS.map((r, ri) => {
  const base: Phase3NoSparkBlindDateResult = {
    type: r.type,
    emoji: r.emoji,
    title: L(r.title),
    typeName: L(r.typeName),
    realReason: L(r.realReason),
    quote: L(r.quote),
    description: L(r.description),
    keywords: L(r.keywords),
    blockMoment: L(r.blockMoment),
    strengths: L(r.strengths),
    realReasonUnpack: L(r.realReasonUnpack),
    frequentSaying: L(r.frequentSaying),
    tips: L(r.tips),
    counselingNote: L(r.counselingNote),
    oneLiner: L(r.oneLiner),
    shareLine: L(r.shareLine),
  };
  for (const key of RESULT_TEXT_KEYS) {
    base[key] = withForeign(r[key], (loc) => PHASE3_NO_SPARK_BLIND_DATE_I18N[loc].results[ri][key]);
  }
  return base;
});
