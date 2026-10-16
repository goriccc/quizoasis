/** 나의 연애 자신감 레벨 테스트 — phase3-love-confidence-level · 12문항 4지선다 · 1~4점 합산(12~48) · 5구간 · 7개 로케일 */

import {
  PHASE3_LOVE_CONFIDENCE_LEVEL_I18N,
  type Phase3LoveConfidenceLevelForeignLocale,
  type Phase3LoveConfidenceLevelResultText,
} from './phase3LoveConfidenceLevelI18n';

export type Phase3LoveConfidenceLevelLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3LoveConfidenceLevelLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_CONFIDENCE_LEVEL_I18N) as Phase3LoveConfidenceLevelForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3LoveConfidenceLevelForeignLocale) => string): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3LoveConfidenceLevelQuestion {
  id: number;
  area: Phase3LoveConfidenceLevelAreaId;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3LoveConfidenceLevelResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  title: LocaleText;
  gaugeLabel: LocaleText;
  levelLine: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  scoreRange: LocaleText;
  keywords: LocaleText;
  strengths: LocaleText;
  tips: LocaleText;
  counseling: LocaleText;
  oneLiner: LocaleText;
  /** {score} {percent} 치환 */
  shareLine: LocaleText;
}

export const PHASE3_LOVE_CONFIDENCE_LEVEL_AREAS = [
  { id: 'approach', questionIds: [1] },
  { id: 'praise', questionIds: [2, 10] },
  { id: 'hurt', questionIds: [3] },
  { id: 'voice', questionIds: [4, 6, 7] },
  { id: 'compare', questionIds: [5, 9] },
  { id: 'self', questionIds: [8, 11, 12] },
] as const;

export type Phase3LoveConfidenceLevelAreaId = (typeof PHASE3_LOVE_CONFIDENCE_LEVEL_AREAS)[number]['id'];

export const PHASE3_LOVE_CONFIDENCE_LEVEL_AREA_LABELS: Record<Phase3LoveConfidenceLevelAreaId, LocaleText> = {
  approach: withForeign('먼저 다가가기', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.approach),
  praise: withForeign('칭찬 수용', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.praise),
  hurt: withForeign('서운함 표현', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.hurt),
  voice: withForeign('의견 말하기', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.voice),
  compare: withForeign('비교 대처', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.compare),
  self: withForeign('자기 믿음', (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].areas.self),
};

/**
 * 점수 12~48의 예상 상위 %. 문항 점수가 1~4에 고르게 퍼진다고 볼 때의 '이 점수 이상' 비율을 반올림.
 * 0%로 떨어지면 1%로 둔다. 응답이 쌓이면 실제 분포로 교체.
 */
export const PHASE3_LOVE_CONFIDENCE_LEVEL_TOP_PERCENT = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 99, 97, 95, 92, 88, 82, 74, 65, 55, 45, 35, 26, 18, 12, 8, 5, 3, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
] as const;

export const PHASE3_LOVE_CONFIDENCE_LEVEL_META: {
  title: LocaleText;
  description: LocaleText;
  tags: Record<Phase3LoveConfidenceLevelLocaleKey, string[]>;
} = {
  title: {
    ko: '나의 연애 자신감 레벨 테스트',
    en: 'My Dating Confidence Level',
    ja: '私の恋愛自信レベルテスト',
    'zh-CN': '我的恋爱自信等级测试',
    'zh-TW': '我的戀愛自信等級測驗',
    vi: 'Cấp độ tự tin trong tình yêu của tôi',
    id: 'Level Kepercayaan Diriku saat Pacaran',
  },
  description: {
    ko: '좋아하는 사람 앞에서 나는 나를 얼마나 믿고 있을까요? 12가지 연애 상황으로 연애 자신감 레벨과 상위 몇 %인지 알려드립니다.',
    en: 'How much do you trust yourself in front of someone you like? 12 dating situations estimate your confidence level and where you rank.',
    ja: '好きな人の前で、自分をどれくらい信じている？12の恋愛場面で自信レベルと上位何%かを出します。',
    'zh-CN': '在喜欢的人面前，你有多相信自己？通过12个恋爱情境，算出自信等级和你排在前百分之几。',
    'zh-TW': '在喜歡的人面前，你有多相信自己？透過12個戀愛情境，算出自信等級和你排在前百分之幾。',
    vi: 'Trước mặt người mình thích, bạn tin mình đến mức nào? 12 tình huống tính cấp độ tự tin và bạn thuộc top bao nhiêu phần trăm.',
    id: 'Di depan orang yang kamu suka, seberapa kamu percaya pada dirimu? 12 situasi menghitung level kepercayaan diri dan kamu ada di berapa persen teratas.',
  },
  tags: {
    ko: ['연애자신감', '연애자존감', '연애심리', '연애테스트'],
    en: ['dating confidence', 'dating self-esteem', 'dating psychology', 'dating test'],
    ja: ['恋愛自信', '恋愛自尊感', '恋愛心理', '恋愛テスト'],
    'zh-CN': ['恋爱自信', '恋爱自尊', '恋爱心理', '恋爱测试'],
    'zh-TW': ['戀愛自信', '戀愛自尊', '戀愛心理', '戀愛測驗'],
    vi: ['tự tin tình yêu', 'tự trọng khi yêu', 'tâm lý tình yêu', 'test tình yêu'],
    id: ['percaya diri pacaran', 'harga diri saat pacaran', 'psikologi cinta', 'tes cinta'],
  },
};

const RAW_QUESTIONS: { q: string; area: Phase3LoveConfidenceLevelAreaId; opts: [string, number][] }[] = [
  {
    q: '좋아하는 사람에게 먼저 연락하려는 순간, 나는?',
    area: 'approach',
    opts: [
      ['부담스러워하면 그때 생각하자며 가볍게 먼저 연락한다', 4],
      ['먼저 연락해도 되는지 한참 고민하다 보낸다', 3],
      ['상대가 연락하기를 기다리다 못 보낼 때가 많다', 2],
      ['내가 연락하면 귀찮아할 것 같아 아예 포기한다', 1],
    ],
  },
  {
    q: '연인이 "오늘 예뻐 보인다/멋져 보인다"라고 칭찬했다. 나는?',
    area: 'praise',
    opts: [
      ['빈말일 것 같아 "아니야"라며 손사래를 친다', 1],
      ['"고마워, 나도 오늘 마음에 들어"라고 웃으며 받는다', 4],
      ['고맙다고 하지만 속으로는 조금 믿기 어렵다', 3],
      ['기분은 좋은데 어색해서 얼버무린다', 2],
    ],
  },
  {
    q: '서운한 일이 생겼다. 나는?',
    area: 'hurt',
    opts: [
      ['상대가 눈치채주기를 기다리며 말을 삼킨다', 2],
      ['말하면 관계가 불편해질까 봐 괜찮다고 한다', 1],
      ['그날 안에 "이런 점이 서운했어"라고 차분히 말한다', 4],
      ['여러 번 고민한 끝에 조심스럽게 돌려 말한다', 3],
    ],
  },
  {
    q: '연인이 "너는 어디가 좋아?"라고 물었다. 나는?',
    area: 'voice',
    opts: [
      ['겸손하게 한두 가지를 말하고 서둘러 화제를 돌린다', 3],
      ['남들이 말해준 장점을 겨우 하나 꺼낸다', 2],
      ['딱히 떠오르는 장점이 없어 대답을 피한다', 1],
      ['내가 가진 장점 몇 가지를 자연스럽게 이야기한다', 4],
    ],
  },
  {
    q: '연인이 친구들과 노느라 연락이 줄었다. 나는?',
    area: 'compare',
    opts: [
      ['즐겁게 놀고 오라고 응원하고 내 시간을 보낸다', 4],
      ['서운하지만 티 내지 않고 참는다', 3],
      ['다른 사람에게 마음이 간 건 아닌지 불안해 확인하고 싶다', 2],
      ['내가 재미없어서 그런 건가 싶어 위축된다', 1],
    ],
  },
  {
    q: '데이트 코스를 정해야 한다. 나는?',
    area: 'voice',
    opts: [
      ['상대가 원하는 곳으로 무조건 맞춘다', 1],
      ['내가 가고 싶은 곳을 먼저 제안하고 상대 의견도 듣는다', 4],
      ['상대의 취향을 파악한 뒤 비슷하게 제안한다', 3],
      ['가고 싶은 곳이 있어도 말을 꺼내지 못한다', 2],
    ],
  },
  {
    q: '연인과 의견이 달랐다. 나는?',
    area: 'voice',
    opts: [
      ['내 의견이 틀린 것 같아 금방 접는다', 2],
      ['분위기가 나빠질까 봐 의견을 말하지 않는다', 1],
      ['서로 다른 점을 이야기하고 중간 지점을 찾는다', 4],
      ['내 의견을 말하지만 상대가 반대하면 쉽게 흔들린다', 3],
    ],
  },
  {
    q: '연인이 "너 요즘 좀 달라졌네"라고 말했다. 나는?',
    area: 'self',
    opts: [
      ['걱정되지만 겉으로는 괜찮은 척한다', 3],
      ['내가 뭘 잘못했는지 곱씹으며 자책한다', 2],
      ['나에게 실망한 건가 싶어 불안하다', 1],
      ['어떤 점이 달라 보이는지 편하게 물어본다', 4],
    ],
  },
  {
    q: '전 애인이나 더 매력적인 사람 이야기가 나왔다. 나는?',
    area: 'compare',
    opts: [
      ['사람마다 매력이 다르다고 생각하며 크게 신경 쓰지 않는다', 4],
      ['마음에 걸리지만 비교하지 않으려 노력한다', 3],
      ['비교하게 되고 한동안 계속 생각난다', 2],
      ['나는 그 사람보다 부족한 것 같아 마음이 가라앉는다', 1],
    ],
  },
  {
    q: '연인이 큰 사랑 표현을 해 줬다. 나는?',
    area: 'praise',
    opts: [
      ['이런 사랑을 받을 자격이 있는지 불안하다', 1],
      ['기쁘게 받아들이고 내 마음도 표현한다', 4],
      ['기쁘지만 받은 만큼 돌려줘야 한다는 부담이 든다', 3],
      ['감사하지만 곧 사라질 것 같아 마음을 다 열지 못한다', 2],
    ],
  },
  {
    q: '연애가 끝날지도 모른다는 생각이 들었다. 나는?',
    area: 'self',
    opts: [
      ['어떻게든 붙잡으려고 내 의견을 접는다', 2],
      ['내가 부족해서 그런 거라며 자책한다', 1],
      ['서로 이야기해 보고 나에게 맞는 선택을 하겠다고 생각한다', 4],
      ['불안하지만 일단 상황을 지켜본다', 3],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    area: 'self',
    opts: [
      ['"가끔 흔들리지만 점점 나를 믿어가는 중이야"', 3],
      ['"상대가 좋아해 주는 만큼만 나도 괜찮은 사람 같아"', 2],
      ['"나는 사랑받을 만한 사람인지 모르겠어"', 1],
      ['"나는 있는 그대로도 사랑받을 수 있는 사람이야"', 4],
    ],
  },
];

export const phase3LoveConfidenceLevelQuestions: Phase3LoveConfidenceLevelQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  area: item.area,
  question: withForeign(item.q, (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS: (keyof Phase3LoveConfidenceLevelResultText)[] = [
  'title',
  'gaugeLabel',
  'levelLine',
  'shortDescription',
  'description',
  'scoreRange',
  'keywords',
  'strengths',
  'tips',
  'counseling',
  'oneLiner',
  'shareLine',
];

const KO_RESULTS: Phase3LoveConfidenceLevelResult[] = [
  {
    type: 'sprout',
    emoji: '🌱',
    min: 12,
    max: 19,
    title: L('레벨1 새싹'),
    gaugeLabel: L('새싹'),
    levelLine: L('막 싹이 트는 단계'),
    shortDescription: L('당신의 연애 자신감은 이제 막 싹이 튼 새싹입니다. 아직 작지만 자랄 가능성이 가장 큽니다.'),
    description: L(
      '연락, 칭찬, 서운함 표현 앞에서 스스로를 낮추고 상대의 반응에 크게 흔들립니다. 사랑받을 자격을 의심하기도 합니다. 이 상태는 성격이 아니라 경험과 믿음에서 온 것이라 자라날 수 있습니다.',
    ),
    scoreRange: L('12~19점'),
    keywords: L('위축, 자기 의심, 상대 반응 의존, 말 삼킴'),
    strengths: L('상대를 세심하게 배려하고 관계를 소중히 여기는 마음'),
    tips: L(
      '하루 한 번 "오늘 내가 잘한 일" 한 가지를 적어 보기\n칭찬을 받으면 "아니야" 대신 "고마워"로 먼저 받아 보기\n서운함은 사실 한 줄만 짧게 말하는 연습부터 시작하기',
    ),
    counseling: L('자신이 부족하다는 생각이 연애뿐 아니라 일상 전반에서 자주 강하게 이어진다면 심리상담 전문가와 이야기해 보세요'),
    oneLiner: L('새싹은 물을 주면 자랍니다. 나에게 건네는 작은 칭찬이 첫 번째 물입니다'),
    shareLine: L(
      '나의 연애 자신감 레벨: 레벨1 새싹 🌱 ({score}점/48, 상위 {percent}%) 이제 막 싹이 튼 단계래... 나 이거 팩트ㅠ 너는 몇 레벨이야? 캡처 공유해줘',
    ),
  },
  {
    type: 'shy',
    emoji: '🌸',
    min: 20,
    max: 27,
    title: L('레벨2 수줍음'),
    gaugeLabel: L('수줍음'),
    levelLine: L('마음은 있지만 표현이 조심스러운 단계'),
    shortDescription: L('당신은 마음이 큰 만큼 표현이 조심스러운 수줍은 사람입니다.'),
    description: L(
      '하고 싶은 말을 여러 번 고민하고, 내 의견을 말하기 전에 상대 반응을 먼저 살핍니다. 신중함은 장점이지만 말을 삼키는 일이 쌓이면 서운함도 쌓입니다. 작은 표현 연습만으로도 눈에 띄게 자랄 수 있는 단계입니다.',
    ),
    scoreRange: L('20~27점'),
    keywords: L('신중함, 조심스러운 표현, 상대 눈치, 고민 후 행동'),
    strengths: L('신중하고 섬세하며 상대의 마음을 헤아리는 힘'),
    tips: L(
      '작은 선택(메뉴·장소) 하나는 내 의견으로 먼저 말해 보기\n고민이 길어질 때 "3분 안에 보내기" 규칙 정하기\n상대가 나를 좋아하는 증거 세 가지를 적어 두고 흔들릴 때 읽기',
    ),
    counseling: L('표현하는 것이 두려워 일상 전반에서 크게 힘들다면 심리상담 전문가와 이야기해 보세요'),
    oneLiner: L('수줍음은 마음이 깊다는 뜻입니다. 한 문장만 더 말해도 관계가 달라집니다'),
    shareLine: L(
      '나의 연애 자신감 레벨: 레벨2 수줍음 🌸 ({score}점/48, 상위 {percent}%) 마음은 큰데 표현이 조심스러운 타입이래ㅋㅋ 너는 몇 레벨이야? 캡처 ㄱㄱ',
    ),
  },
  {
    type: 'steady',
    emoji: '🌿',
    min: 28,
    max: 34,
    title: L('레벨3 안정'),
    gaugeLabel: L('안정'),
    levelLine: L('흔들려도 회복하는 안정 단계'),
    shortDescription: L('당신은 가끔 흔들리지만 금방 중심을 되찾는 안정적인 사람입니다.'),
    description: L(
      '대체로 내 마음을 말하고 상대의 의견도 듣지만, 비교나 불안이 올라오는 순간에는 위축되기도 합니다. 회복 탄력성이 좋아서 경험이 쌓일수록 안정감이 커집니다. 흔들리는 지점만 알아도 한 단계 올라갑니다.',
    ),
    scoreRange: L('28~34점'),
    keywords: L('안정, 회복, 균형, 가끔 흔들림, 성장 중'),
    strengths: L('감정을 조절하고 대화로 풀며 흔들림에서 빨리 회복하는 힘'),
    tips: L(
      '흔들렸던 순간을 기록하고 "이럴 때 나는 이렇게 회복한다"는 공식 만들기\n비교가 올라올 때 "내가 가진 매력 세 가지"를 먼저 떠올리기\n서운함은 미루지 않고 그날 안에 짧게 말하기',
    ),
    counseling: L('가끔 흔들리는 수준을 넘어 불안이 오래 이어져 일상에 영향을 준다면 심리상담 전문가와 이야기해 보세요'),
    oneLiner: L('흔들려도 돌아오는 힘이 이미 있습니다. 그 힘을 믿어도 괜찮습니다'),
    shareLine: L(
      '나의 연애 자신감 레벨: 레벨3 안정 🌿 ({score}점/48, 상위 {percent}%) 흔들려도 회복하는 타입이래... 너는 몇 레벨이야? 캡처 공유해줘',
    ),
  },
  {
    type: 'bold',
    emoji: '🌳',
    min: 35,
    max: 41,
    title: L('레벨4 당당'),
    gaugeLabel: L('당당'),
    levelLine: L('나를 믿고 당당하게 표현하는 단계'),
    shortDescription: L('당신은 연애에서 나의 마음과 의견을 당당하게 말할 줄 아는 사람입니다.'),
    description: L(
      '서운함을 차분히 말하고 칭찬을 기쁘게 받으며, 상대와 다른 점을 대화로 조율합니다. 상대의 반응에 내 가치가 크게 흔들리지 않습니다. 다만 당당함이 상대의 감정을 놓치지 않도록 듣는 시간도 함께 지키면 더 좋아집니다.',
    ),
    scoreRange: L('35~41점'),
    keywords: L('당당함, 솔직한 표현, 조율, 자기 신뢰, 안정된 가치'),
    strengths: L('내 마음을 솔직하게 표현하고 상대와 균형 있게 대화하는 능력'),
    tips: L(
      '의견을 말한 뒤 "너는 어떻게 생각해?"로 상대 마음도 한 번 더 묻기\n흔들리는 연인에게 내 안정감을 나눠 주되 대신 책임지려 하지 않기\n힘든 날에는 당당한 척하지 않고 기대도 괜찮다고 허락하기',
    ),
    counseling: L('당당함 뒤에서 감정을 눌러 두는 일이 쌓여 힘들다면 심리상담 전문가와 이야기해 보세요'),
    oneLiner: L('당당함은 상대를 이기는 힘이 아니라 함께 서는 힘입니다. 듣는 귀를 더하면 더 단단해집니다'),
    shareLine: L(
      '나의 연애 자신감 레벨: 레벨4 당당 🌳 ({score}점/48, 상위 {percent}%) 나를 믿고 표현하는 타입이래ㅋㅋ 너는 몇 레벨이야? 상위 몇 %인지 캡처 ㄱㄱ',
    ),
  },
  {
    type: 'max',
    emoji: '👑',
    min: 42,
    max: 48,
    title: L('레벨5 자신감 만렙'),
    gaugeLabel: L('만렙'),
    levelLine: L('있는 그대로의 나를 믿는 최고 단계'),
    shortDescription: L('당신은 있는 그대로의 나도 사랑받을 수 있다고 믿는 자신감 만렙입니다.'),
    description: L(
      '비교와 평가에 휘둘리지 않고, 서운함도 사랑도 솔직하게 표현하며, 이별의 가능성 앞에서도 나에게 맞는 선택을 합니다. 건강한 자신감은 상대를 편안하게 만들고 관계의 기준이 됩니다. 다만 완벽해야 한다는 부담 없이 가끔 흔들리는 순간도 허용해 주세요.',
    ),
    scoreRange: L('42~48점'),
    keywords: L('자기 신뢰, 솔직함, 건강한 경계, 비교에 흔들리지 않음, 안정감'),
    strengths: L('자기 가치를 믿고 건강한 경계를 지키며 상대에게 안정감을 주는 힘'),
    tips: L(
      '가끔 흔들리는 순간도 정상이라고 허용하고 도움이 필요하면 편하게 요청하기\n자신감이 상대에게 압박이 되지 않도록 상대의 속도도 살피기\n이 노하우를 주변과 나누기. 당신의 방식이 누군가의 힌트가 됩니다',
    ),
    counseling: L('만렙이어도 힘든 일이 생기면 혼자 버티지 말고 필요할 때 심리상담 전문가와 이야기해 보세요'),
    oneLiner: L('자신감은 흔들리지 않는 것이 아니라 흔들려도 나를 믿는 것입니다. 지금의 당신이 이미 충분히 빛납니다'),
    shareLine: L(
      '나의 연애 자신감 레벨: 레벨5 자신감 만렙 👑 ({score}점/48, 상위 {percent}%) 있는 그대로의 나를 믿는 단계래ㅋㅋ 너는 몇 레벨이야? 캡처 공유해줘',
    ),
  },
];

export const phase3LoveConfidenceLevelResults: Phase3LoveConfidenceLevelResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3LoveConfidenceLevelResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_CONFIDENCE_LEVEL_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_LOVE_CONFIDENCE_LEVEL_MIN = 12;
export const PHASE3_LOVE_CONFIDENCE_LEVEL_MAX = 48;

export function calculatePhase3LoveConfidenceLevelTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3LoveConfidenceLevelResult(total: number): Phase3LoveConfidenceLevelResult {
  return (
    phase3LoveConfidenceLevelResults.find((r) => total >= r.min && total <= r.max) ?? phase3LoveConfidenceLevelResults[0]
  );
}

export function getPhase3LoveConfidenceLevelTopPercent(total: number): number {
  const index = Math.min(
    PHASE3_LOVE_CONFIDENCE_LEVEL_MAX,
    Math.max(PHASE3_LOVE_CONFIDENCE_LEVEL_MIN, total),
  ) - PHASE3_LOVE_CONFIDENCE_LEVEL_MIN;
  return PHASE3_LOVE_CONFIDENCE_LEVEL_TOP_PERCENT[index];
}

/** 평균이 가장 낮은 영역. 동점이면 정의 순서대로 모두. 모든 영역이 같으면 빈 배열 */
export function getPhase3LoveConfidenceLevelWeakAreas(answers: number[]): Phase3LoveConfidenceLevelAreaId[] {
  let minAvg = Number.POSITIVE_INFINITY;
  const avgs = PHASE3_LOVE_CONFIDENCE_LEVEL_AREAS.map((area) => {
    const scores = area.questionIds.map((id) => answers[id - 1] ?? 0);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < minAvg) minAvg = avg;
    return avg;
  });
  const weak = PHASE3_LOVE_CONFIDENCE_LEVEL_AREAS.filter((_, index) => avgs[index] === minAvg).map((area) => area.id);
  if (weak.length === PHASE3_LOVE_CONFIDENCE_LEVEL_AREAS.length) return [];
  return weak;
}
