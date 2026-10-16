/** 나의 밀당 레벨 테스트 — phase3-push-pull-level · 10문항 4지선다 · 선택지 1~4점 합산(10~40) · 5구간 · 7개 로케일 */

import {
  PHASE3_PUSH_PULL_LEVEL_I18N,
  type Phase3PushPullLevelForeignLocale,
  type Phase3PushPullLevelResultText,
} from './phase3PushPullLevelI18n';

export type Phase3PushPullLevelLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3PushPullLevelLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_PUSH_PULL_LEVEL_I18N) as Phase3PushPullLevelForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3PushPullLevelForeignLocale) => string): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3PushPullLevelQuestion {
  id: number;
  area: Phase3PushPullLevelAreaId;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3PushPullLevelResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  title: LocaleText;
  levelLine: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  scoreRange: LocaleText;
  keywords: LocaleText;
  strengths: LocaleText;
  tips: LocaleText;
  oneLiner: LocaleText;
  /** {score} 자리에 총점을 넣는다 */
  shareLine: LocaleText;
}

export const PHASE3_PUSH_PULL_LEVEL_AREAS = [
  { id: 'pace', questionIds: [1, 5] },
  { id: 'test', questionIds: [2, 6, 10] },
  { id: 'hurt', questionIds: [7, 8] },
  { id: 'progress', questionIds: [3, 4, 9] },
] as const;

export type Phase3PushPullLevelAreaId = (typeof PHASE3_PUSH_PULL_LEVEL_AREAS)[number]['id'];

export const PHASE3_PUSH_PULL_LEVEL_AREA_LABELS: Record<Phase3PushPullLevelAreaId, LocaleText> = {
  pace: withForeign('연락 속도', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].areas.pace),
  test: withForeign('시험하기', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].areas.test),
  hurt: withForeign('서운함 표현', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].areas.hurt),
  progress: withForeign('관계 진전', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].areas.progress),
};

export const PHASE3_PUSH_PULL_LEVEL_GROWTH_LINES: Record<Phase3PushPullLevelAreaId, LocaleText> = {
  pace: withForeign('답장과 대화 마무리 속도가 가장 흔들립니다. 내 일정에 맞춘 자연스러운 속도를 정해 보세요.', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].growth.pace),
  test: withForeign('불안할 때 상대를 시험하는 반응이 가장 낮습니다. 끊기보다 한 줄 안부가 더 안전합니다.', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].growth.test),
  hurt: withForeign('서운함을 쿨한 척하거나 벌로 돌려주는 쪽이 약합니다. 한 문장으로 말하는 연습이 레벨을 올립니다.', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].growth.hurt),
  progress: withForeign('호감과 다음 단계를 전하는 타이밍이 가장 어렵습니다. 반응을 보며 가벼운 제안부터 해보세요.', (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].growth.progress),
};

/** 점수 차(절댓값)에 따른 우리 둘 밀당 궁합 한 줄 */
const CHEMISTRY_KO = [
  '두 사람의 밀당 감각이 거의 같아요. 눈치 볼 일이 적고, 편한 속도가 잘 맞습니다.',
  '속도가 조금 다릅니다. 빠른 쪽이 한 박자 쉬고, 느린 쪽이 마음을 한 줄만 더하면 균형이 맞아요.',
  '한 사람은 직진, 한 사람은 여유에 가깝습니다. 시험하기보다 "지금 내 속도"를 말로 맞춰 보세요.',
  '거리 감각이 많이 다릅니다. 점수 차이가 크다고 안 맞는 건 아니에요. 서로의 속도를 존중하는 대화가 먼저입니다.',
];

export const PHASE3_PUSH_PULL_LEVEL_CHEMISTRY: { maxDiff: number; line: LocaleText }[] = [3, 8, 15, 30].map(
  (maxDiff, index) => ({
    maxDiff,
    line: withForeign(CHEMISTRY_KO[index], (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].chemistry[index]),
  }),
);

export const PHASE3_PUSH_PULL_LEVEL_META: {
  title: LocaleText;
  description: LocaleText;
  tags: Record<Phase3PushPullLevelLocaleKey, string[]>;
} = {
  title: {
    ko: '나의 밀당 레벨 테스트',
    en: 'My Push-Pull Level Test',
    ja: '私の駆け引きレベルテスト',
    'zh-CN': '我的推拉等级测试',
    'zh-TW': '我的推拉等級測試',
    vi: 'Test cấp độ kéo-đẩy của tôi',
    id: 'Tes Level Tarik-Ulurku',
  },
  description: {
    ko: '너무 다가가면 부담스럽고, 너무 물러서면 식은 줄 압니다. 10가지 썸·연애 상황으로 거리와 온도를 조절하는 감각을 재어 밀당 신생아부터 마스터까지 5단계 레벨을 알려드립니다.',
    en: 'Too close feels heavy, too far cools things off. 10 dating situations score how you balance distance and warmth, from newbie to master.',
    ja: '近づきすぎると重く、引きすぎると冷める。10の恋愛シチュエーションで距離と温度の感覚を測り、駆け引きレベルを5段階で診断します。',
    'zh-CN': '靠太近会有压力，退太远又会冷掉。通过10个暧昧与恋爱情境，测出你调节距离和温度的感觉，从新手到大师共5个等级。',
    'zh-TW': '靠太近會有壓力，退太遠又會冷掉。透過10個曖昧與戀愛情境，測出你調節距離和溫度的感覺，從新手到大師共5個等級。',
    vi: 'Lại gần quá thì nặng, lùi xa quá thì nguội. 10 tình huống đo cảm giác giữ khoảng cách và nhiệt độ, từ người mới đến bậc thầy.',
    id: 'Terlalu dekat terasa berat, terlalu jauh malah dingin. 10 situasi mengukur cara mengatur jarak dan suhu, dari pemula sampai master.',
  },
  tags: {
    ko: ['밀당', '썸', '연애기술', '연애테스트'],
    en: ['push and pull', 'talking stage', 'dating skills', 'dating test'],
    ja: ['駆け引き', '曖昧', '恋愛テク', '恋愛テスト'],
    'zh-CN': ['推拉', '暧昧', '恋爱技巧', '恋爱测试'],
    'zh-TW': ['推拉', '曖昧', '戀愛技巧', '戀愛測驗'],
    vi: ['kéo đẩy', 'mập mờ', 'kỹ năng yêu', 'test tình yêu'],
    id: ['tarik ulur', 'pdkt', 'skill pacaran', 'tes cinta'],
  },
};

const RAW_QUESTIONS: { q: string; area: Phase3PushPullLevelAreaId; opts: [string, number][] }[] = [
  {
    q: '썸 상대가 먼저 연락을 해 왔다. 나는?',
    area: 'pace',
    opts: [
      ['반갑게 답하되 내 일상도 챙기며 자연스러운 속도로 이어 간다', 4],
      ['반가워도 일부러 조금 있다가 여유 있게 답장한다', 3],
      ['너무 빨리 답하면 쉬워 보일까 봐 몇 시간 뒤에 보낸다', 2],
      ['기쁜 마음에 바로 답하고 대화를 길게 끌고 간다', 1],
    ],
  },
  {
    q: '상대의 답장이 평소보다 늦다. 나는?',
    area: 'test',
    opts: [
      ['일부러 나도 연락을 끊고 상대가 먼저 오길 기다린다', 1],
      ['바쁜 사정일 수 있다고 보고 내 할 일을 하며 기다린다', 4],
      ['신경은 쓰이지만 티 내지 않고 평소처럼 지낸다', 3],
      ['불안해서 안부 메시지를 연달아 보낸다', 2],
    ],
  },
  {
    q: '상대가 주말에 시간이 되는지 물었다. 나는?',
    area: 'progress',
    opts: [
      ['시간이 있어도 바쁜 척하며 한 번 튕겨 본다', 2],
      ['무조건 되는 것처럼 모든 일정을 비우고 답한다', 1],
      ['가능한 시간을 솔직하게 말하고 만나고 싶다고 표현한다', 4],
      ['되는 시간대를 알려 주되 반응을 보며 조율한다', 3],
    ],
  },
  {
    q: '상대가 나에게 호감을 표현했다. 나는?',
    area: 'progress',
    opts: [
      ['기쁨은 표현하되 내 마음의 속도는 천천히 맞춘다', 3],
      ['좋으면서도 애매한 반응을 보이며 상대를 더 지켜본다', 2],
      ['마음이 앞서서 곧바로 내 감정을 전부 쏟아낸다', 1],
      ['고맙다고 솔직히 말하고 나도 호감이 있음을 적당히 전한다', 4],
    ],
  },
  {
    q: '상대와 대화가 잘 통해 하루 종일 연락이 이어졌다. 나는?',
    area: 'pace',
    opts: [
      ['즐겁게 이어 가다가 자연스럽게 "이만 일 좀 할게"라고 마무리한다', 4],
      ['대화는 이어 가되 다음 날 연락 빈도를 조금 조절한다', 3],
      ['너무 붙어 있으면 질릴까 봐 갑자기 답장 간격을 늘린다', 2],
      ['끝없이 이어 가려고 밤새 대화를 붙잡는다', 1],
    ],
  },
  {
    q: '상대가 갑자기 연락이 줄었다. 나는?',
    area: 'test',
    opts: [
      ['상대의 관심을 시험해 보려고 일부러 차갑게 군다', 1],
      ['걱정되는 마음을 담아 가볍게 안부를 묻고 반응을 본다', 4],
      ['한동안 지켜보다 필요하면 한 번 연락해 본다', 3],
      ['서운한 마음에 이유를 따져 묻고 싶어진다', 2],
    ],
  },
  {
    q: '상대가 다른 약속 때문에 만남을 미뤘다. 나는?',
    area: 'hurt',
    opts: [
      ['아쉬운 티를 숨기고 쿨한 척 "응 그래"라고만 답한다', 2],
      ['서운한 마음에 며칠간 말수를 줄이며 벌을 준다', 1],
      ['아쉬움을 가볍게 말하고 다음 일정을 먼저 제안한다', 4],
      ['이해한다고 하되 다음엔 꼭 보자고 한마디 덧붙인다', 3],
    ],
  },
  {
    q: '상대가 질투를 유발하는 이야기를 꺼냈다. 나는?',
    area: 'hurt',
    opts: [
      ['신경 쓰이지만 크게 반응하지 않고 평소대로 대화한다', 3],
      ['일부러 나도 다른 사람 이야기를 꺼내 맞받아친다', 2],
      ['화가 나서 감정이 앞서 날 선 말을 쏟아낸다', 1],
      ['솔직하게 "그 얘기 조금 신경 쓰이네"라고 가볍게 말한다', 4],
    ],
  },
  {
    q: '상대와 관계를 한 단계 진전시키고 싶다. 나는?',
    area: 'progress',
    opts: [
      ['상대의 반응을 살피며 자연스럽게 더 가까워질 제안을 한다', 4],
      ['호감 신호가 더 확실해질 때까지 기다렸다가 말한다', 3],
      ['상대가 먼저 말해 주기를 기다리며 신호만 흘린다', 2],
      ['확신이 서기 전에 서둘러 관계를 정하자고 몰아붙인다', 1],
    ],
  },
  {
    q: '밀당에 대한 나의 생각은?',
    area: 'test',
    opts: [
      ['상대를 애태우게 해야 마음을 얻을 수 있다고 믿는다', 1],
      ['서로 편한 거리를 찾아가는 과정이라고 생각한다', 4],
      ['필요할 때 조금만 하면 도움이 된다고 생각한다', 3],
      ['어렵고 계산이 복잡해서 자꾸 지치는 일이다', 2],
    ],
  },
];

export const phase3PushPullLevelQuestions: Phase3PushPullLevelQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  area: item.area,
  question: withForeign(item.q, (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS: (keyof Phase3PushPullLevelResultText)[] = [
  'title',
  'levelLine',
  'shortDescription',
  'description',
  'scoreRange',
  'keywords',
  'strengths',
  'tips',
  'oneLiner',
  'shareLine',
];

const KO_RESULTS: Phase3PushPullLevelResult[] = [
  {
    type: 'baby',
    emoji: '🍼',
    min: 10,
    max: 16,
    title: L('밀당 신생아'),
    levelLine: L('직진 또는 시험하기 사이에서 흔들리는 단계'),
    shortDescription: L('당신은 마음이 앞서 직진하거나, 반대로 시험하다 어긋나는 단계입니다.'),
    description: L(
      '기쁘면 감정을 전부 쏟고, 불안하면 상대를 시험하거나 벌주듯 거리를 두기도 합니다. 진심이 큰 만큼 조절이 서툰 것일 뿐입니다. 거리 조절은 연습하면 빠르게 늘어납니다.',
    ),
    scoreRange: L('10~16점'),
    keywords: L('직진, 시험, 감정 앞섬, 조절 서투름'),
    strengths: L('솔직하고 진심이 크며 마음을 숨기지 않는 순수함'),
    tips: L(
      "연락 전에 '지금 내 목적은 대화인가, 반응 확인인가'를 한 번 묻기\n서운할 땐 시험하는 대신 \"나 이게 서운했어\"라고 말로 표현하기\n감정이 올라올 때 30분 쉬고 보낼 메시지를 다시 읽어 보기",
    ),
    oneLiner: L('진심은 최고의 무기입니다. 거리 감각만 더하면 훨씬 편안해집니다'),
    shareLine: L('나의 밀당 레벨: 밀당 신생아 🍼 ({score}점/40) 마음이 앞서는 직진형이래ㅋㅋ 너는 몇 레벨이야? 우리 비교해보자'),
  },
  {
    type: 'beginner',
    emoji: '🐣',
    min: 17,
    max: 22,
    title: L('밀당 초보'),
    levelLine: L('계산하고 눈치 보다 지치는 단계'),
    shortDescription: L('당신은 밀당을 의식하다 오히려 부자연스러워지는 단계입니다.'),
    description: L(
      '쉬워 보일까 봐 일부러 답장을 늦추거나 쿨한 척하다 마음이 엇갈리기도 합니다. 계산이 많아질수록 즐거움보다 피곤함이 커질 수 있습니다.',
    ),
    scoreRange: L('17~22점'),
    keywords: L('계산, 쿨한 척, 눈치, 어색함, 피곤함'),
    strengths: L('상대에게 좋은 인상을 주려는 섬세함과 노력'),
    tips: L(
      "일부러 늦추는 연락 대신 내 일정에 맞춘 자연스러운 속도 정하기\n쿨한 척 대신 한 문장의 솔직한 마음을 더해 보기\n계산이 시작되면 '이 행동이 상대와 나를 편하게 하는가'만 확인하기",
    ),
    oneLiner: L('기술보다 자연스러움이 먼저입니다. 계산을 줄이면 밀당이 쉬워집니다'),
    shareLine: L('나의 밀당 레벨: 밀당 초보 🐣 ({score}점/40) 계산하다 지치는 타입이래... 너는 몇 레벨이야? 결과 비교 ㄱㄱ'),
  },
  {
    type: 'mid',
    emoji: '🌿',
    min: 23,
    max: 28,
    title: L('밀당 중수'),
    levelLine: L('대체로 균형을 잡는 단계'),
    shortDescription: L('당신은 대체로 거리와 온도를 자연스럽게 조절하는 중수입니다.'),
    description: L(
      '반가움과 여유 사이에서 균형을 잡고 불안해도 크게 흔들리지 않습니다. 가끔 감정이 앞서거나 눈치가 지나친 순간만 다듬으면 됩니다.',
    ),
    scoreRange: L('23~28점'),
    keywords: L('균형, 여유, 가끔 흔들림, 자연스러움'),
    strengths: L('감정과 상황을 함께 보며 침착하게 반응하는 안정감'),
    tips: L(
      '흔들렸던 순간을 기록해 반복되는 패턴 찾기\n신경 쓰이는 일은 쌓아 두지 말고 가볍게 한 문장으로 표현하기\n상대의 속도와 내 속도를 자주 맞춰 보는 대화 시도하기',
    ),
    oneLiner: L('균형 감각이 이미 있습니다. 솔직한 한마디가 고수로 가는 열쇠입니다'),
    shareLine: L('나의 밀당 레벨: 밀당 중수 🌿 ({score}점/40) 대체로 균형 잡는 타입이래ㅋㅋ 너는 몇 레벨이야? 우리 비교해봐'),
  },
  {
    type: 'advanced',
    emoji: '🌳',
    min: 29,
    max: 34,
    title: L('밀당 고수'),
    levelLine: L('솔직함과 여유를 함께 쓰는 단계'),
    shortDescription: L('당신은 솔직함과 여유를 함께 쓰는 밀당 고수입니다.'),
    description: L(
      '기쁨은 표현하고, 불안은 말로 가볍게 꺼내며, 속도는 상대와 맞춥니다. 밀고 당기기보다 함께 걷는 법을 압니다.',
    ),
    scoreRange: L('29~34점'),
    keywords: L('솔직함, 여유, 속도 맞춤, 가벼운 표현, 신뢰'),
    strengths: L('감정을 솔직하게 표현하면서도 상대의 속도를 존중하는 능력'),
    tips: L(
      "호감이 확인되면 다음 단계를 가볍게 먼저 제안하기\n상대가 서툴게 다가올 때 따뜻하게 받아 주기\n거리 조절이 '전략'이 되지 않도록 마음의 진심을 계속 확인하기",
    ),
    oneLiner: L('솔직함이 최고의 밀당입니다. 이제 한 걸음 먼저 내딛어 보세요'),
    shareLine: L('나의 밀당 레벨: 밀당 고수 🌳 ({score}점/40) 솔직함이 최고의 밀당이래! 너는 몇 레벨이야? 결과 비교해보자'),
  },
  {
    type: 'master',
    emoji: '🔮',
    min: 35,
    max: 40,
    title: L('밀당 마스터'),
    levelLine: L('서로 편한 거리를 만드는 최고 단계'),
    shortDescription: L('당신은 상대와 편한 거리를 함께 찾아가는 밀당 마스터입니다.'),
    description: L(
      '연락, 만남, 서운함, 진전까지 자연스럽게 조절하고 필요한 말은 솔직하게 합니다. 상대를 흔들려 하지 않기 때문에 오히려 신뢰가 쌓입니다. 다만 노련함이 계산으로 보이지 않도록 마음의 온기를 늘 곁들이세요.',
    ),
    scoreRange: L('35~40점'),
    keywords: L('균형, 존중, 자연스러운 속도, 솔직함, 신뢰'),
    strengths: L('상대를 존중하며 서로가 편한 거리를 찾는 성숙한 감각'),
    tips: L(
      '능숙함이 거리감이 되지 않도록 가끔 서툰 마음도 보여 주기\n상대의 속도가 느릴 때 기다려 주는 여유 유지하기\n이 노하우를 친구들과 나누기. 당신의 방식이 누군가의 힌트가 됩니다',
    ),
    oneLiner: L('최고의 밀당은 기술이 아니라 존중입니다. 지금의 온도를 지켜 가세요'),
    shareLine: L(
      '나의 밀당 레벨: 밀당 마스터 🔮 ({score}점/40) 서로 편한 거리를 만드는 타입이래ㅋㅋ 너는 몇 레벨이야? 연인이랑 비교해봐',
    ),
  },
];

export const phase3PushPullLevelResults: Phase3PushPullLevelResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3PushPullLevelResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_PUSH_PULL_LEVEL_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_PUSH_PULL_LEVEL_MIN = 10;
export const PHASE3_PUSH_PULL_LEVEL_MAX = 40;

/** answers: 원래 문항 순서의 선택 점수(1~4) 배열 */
export function calculatePhase3PushPullLevelTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3PushPullLevelResult(total: number): Phase3PushPullLevelResult {
  return (
    phase3PushPullLevelResults.find((r) => total >= r.min && total <= r.max) ?? phase3PushPullLevelResults[0]
  );
}

/** 영역 평균이 가장 낮은 곳. 동점이면 영역 정의 순서(연락 속도 → 시험하기 → 서운함 → 관계 진전) */
export function getPhase3PushPullLevelGrowthArea(answers: number[]): Phase3PushPullLevelAreaId {
  let best: Phase3PushPullLevelAreaId = PHASE3_PUSH_PULL_LEVEL_AREAS[0].id;
  let bestAvg = Number.POSITIVE_INFINITY;
  for (const area of PHASE3_PUSH_PULL_LEVEL_AREAS) {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < bestAvg) {
      bestAvg = avg;
      best = area.id;
    }
  }
  return best;
}

export function getPhase3PushPullLevelChemistry(diff: number): LocaleText {
  const abs = Math.abs(diff);
  return (PHASE3_PUSH_PULL_LEVEL_CHEMISTRY.find((c) => abs <= c.maxDiff) ?? PHASE3_PUSH_PULL_LEVEL_CHEMISTRY.at(-1)!)
    .line;
}
