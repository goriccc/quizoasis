/** 나의 고백 성공 확률 — phase3-confession-success · 10문항 2지선다 · 0/1점 합산(0~10) · 5구간 · 7개 로케일 */

import {
  PHASE3_CONFESSION_SUCCESS_I18N,
  type Phase3ConfessionSuccessForeignLocale,
  type Phase3ConfessionSuccessResultText,
} from './phase3ConfessionSuccessI18n';

export type Phase3ConfessionSuccessLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3ConfessionSuccessLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_CONFESSION_SUCCESS_I18N) as Phase3ConfessionSuccessForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3ConfessionSuccessForeignLocale) => string): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3ConfessionSuccessQuestion {
  id: number;
  area: Phase3ConfessionSuccessAreaId;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3ConfessionSuccessResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  probability: number;
  title: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  scoreRange: LocaleText;
  keywords: LocaleText;
  strengths: LocaleText;
  tips: LocaleText;
  oneLiner: LocaleText;
  /** {score} {percent} 치환 */
  shareLine: LocaleText;
}

export const PHASE3_CONFESSION_SUCCESS_AREAS = [
  { id: 'foundation', questionIds: [1, 3, 9] },
  { id: 'timing', questionIds: [2] },
  { id: 'method', questionIds: [4, 5, 6] },
  { id: 'rush', questionIds: [8] },
  { id: 'closing', questionIds: [7, 10] },
] as const;

export type Phase3ConfessionSuccessAreaId = (typeof PHASE3_CONFESSION_SUCCESS_AREAS)[number]['id'];

export const PHASE3_CONFESSION_SUCCESS_AREA_LABELS: Record<Phase3ConfessionSuccessAreaId, LocaleText> = {
  foundation: withForeign('관계 쌓임', (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].areas.foundation),
  timing: withForeign('타이밍', (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].areas.timing),
  method: withForeign('방식', (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].areas.method),
  rush: withForeign('재촉', (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].areas.rush),
  closing: withForeign('마무리', (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].areas.closing),
};

/** 점수 0~10의 예상 상위 %. 문항이 반반일 때의 이항분포에서 '이 점수 이상' 비율을 반올림. 만점은 0% 대신 1%로 둔다 */
export const PHASE3_CONFESSION_SUCCESS_TOP_PERCENT = [100, 100, 99, 95, 83, 62, 38, 17, 5, 1, 1] as const;

export const PHASE3_CONFESSION_SUCCESS_META: {
  title: LocaleText;
  description: LocaleText;
  tags: Record<Phase3ConfessionSuccessLocaleKey, string[]>;
} = {
  title: {
    ko: '나의 고백 성공 확률',
    en: 'My Confession Success Rate',
    ja: '私の告白成功確率',
    'zh-CN': '我的告白成功概率',
    'zh-TW': '我的告白成功機率',
    vi: 'Xác suất tỏ tình thành công của tôi',
    id: 'Peluang Keberhasilan Nembakku',
  },
  description: {
    ko: '같은 마음이라도 타이밍과 방식에 따라 결과가 달라집니다. 10가지 상황으로 고백 성공 확률과 상위 몇 %인지 알려드립니다.',
    en: 'The same feelings can land differently depending on timing and style. 10 situations estimate your confession success rate and where you rank.',
    ja: '同じ気持ちでも、タイミングと伝え方で結果は変わります。10の状況で告白の成功確率と上位何%かを出します。',
    'zh-CN': '同样的心意，时机和方式不同，结果也会不同。通过10个情境，算出告白成功概率和你排在前百分之几。',
    'zh-TW': '同樣的心意，時機和方式不同，結果也會不同。透過10個情境，算出告白成功機率和你排在前百分之幾。',
    vi: 'Cùng một tấm lòng, thời điểm và cách nói khác nhau thì kết quả cũng khác. 10 tình huống tính xác suất tỏ tình thành công và bạn thuộc top bao nhiêu phần trăm.',
    id: 'Perasaan yang sama bisa beda hasilnya tergantung waktu dan cara menyampaikannya. 10 situasi menghitung peluang berhasil nembak dan kamu ada di berapa persen teratas.',
  },
  tags: {
    ko: ['고백타이밍', '썸', '연애테스트'],
    en: ['confession timing', 'talking stage', 'dating test'],
    ja: ['告白タイミング', '曖昧', '恋愛テスト'],
    'zh-CN': ['告白时机', '暧昧', '恋爱测试'],
    'zh-TW': ['告白時機', '曖昧', '戀愛測驗'],
    vi: ['thời điểm tỏ tình', 'mập mờ', 'test tình yêu'],
    id: ['waktu nembak', 'pdkt', 'tes cinta'],
  },
};

const RAW_QUESTIONS: { q: string; area: Phase3ConfessionSuccessAreaId; opts: [string, number][] }[] = [
  {
    q: '고백 전, 상대와의 관계는?',
    area: 'foundation',
    opts: [
      ['몇 번 따로 만나며 편하게 이야기하는 사이다', 1],
      ['아직 단체 모임에서 인사만 하는 사이다', 0],
    ],
  },
  {
    q: '고백할 타이밍을 고르는 방식은?',
    area: 'timing',
    opts: [
      ['마음이 벅차오르는 순간 바로 전하고 싶다', 0],
      ['상대의 상황과 분위기를 살피고 정한다', 1],
    ],
  },
  {
    q: '상대의 호감 신호를 확인한 적이 있나?',
    area: 'foundation',
    opts: [
      ['연락, 약속 제안 등에서 호감이 느껴진 적이 있다', 1],
      ['호감 신호는 잘 모르겠고 내 마음만 확실하다', 0],
    ],
  },
  {
    q: '고백 장소는 어떻게 정할 것 같은가?',
    area: 'method',
    opts: [
      ['사람이 많은 곳에서 큰 이벤트로 놀라게 하고 싶다', 0],
      ['조용하고 편하게 이야기할 수 있는 곳을 고른다', 1],
    ],
  },
  {
    q: '고백 방식은?',
    area: 'method',
    opts: [
      ['진심을 담아 직접 얼굴을 보고 전한다', 1],
      ['부담 없이 메시지로 가볍게 먼저 보낸다', 0],
    ],
  },
  {
    q: '고백 문장은 어떻게 준비할 것 같은가?',
    area: 'method',
    opts: [
      ['즉흥적으로 그 순간 떠오르는 말을 한다', 0],
      ['내 마음을 한두 문장으로 정리해 둔다', 1],
    ],
  },
  {
    q: '거절당할 가능성에 대한 나의 마음은?',
    area: 'closing',
    opts: [
      ['거절되어도 관계를 잃지 않게 대비해 둔다', 1],
      ['거절은 생각하기도 싫어서 고민하지 않는다', 0],
    ],
  },
  {
    q: '고백할 때 상대에게 어떤 태도를 보일 것 같은가?',
    area: 'rush',
    opts: [
      ['답을 바로 달라고 재촉하며 분위기를 끌고 간다', 0],
      ['마음을 전하고 상대가 생각할 시간을 준다', 1],
    ],
  },
  {
    q: '고백 전에 내가 상대에게 쌓아 둔 모습은?',
    area: 'foundation',
    opts: [
      ['꾸준히 안부와 관심을 보여 온 편이다', 1],
      ['갑자기 마음을 전하면 놀랄 만큼 연락이 적었다', 0],
    ],
  },
  {
    q: '고백이 끝난 뒤 상대의 반응이 어색했다. 나는?',
    area: 'closing',
    opts: [
      ['당황해서 말을 서둘러 거두고 자리를 피한다', 0],
      ['부담 주지 않게 웃으며 시간을 두자고 말한다', 1],
    ],
  },
];

export const phase3ConfessionSuccessQuestions: Phase3ConfessionSuccessQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  area: item.area,
  question: withForeign(item.q, (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS: (keyof Phase3ConfessionSuccessResultText)[] = [
  'title',
  'shortDescription',
  'description',
  'scoreRange',
  'keywords',
  'strengths',
  'tips',
  'oneLiner',
  'shareLine',
];

const KO_RESULTS: Phase3ConfessionSuccessResult[] = [
  {
    type: 'p20',
    emoji: '🌧️',
    min: 0,
    max: 2,
    probability: 20,
    title: L('성공 확률 20%'),
    shortDescription: L('지금의 고백은 준비가 더 필요한 단계입니다.'),
    description: L(
      '마음은 진심이지만 관계의 쌓임과 타이밍, 전하는 방식이 아직 맞춰지지 않았습니다. 서두르기보다 과정을 만들면 확률이 크게 올라갑니다.',
    ),
    scoreRange: L('0~2점'),
    keywords: L('준비 부족, 즉흥, 관계 쌓임 부족, 거절 대비 없음'),
    strengths: L('마음이 솔직하고 열정적인 진심'),
    tips: L(
      '고백 전에 단둘이 만나는 자리를 두세 번 먼저 만들기\n호감 신호(연락·약속 제안)가 있는지 한 달간 관찰해 보기\n고백 문장을 한두 줄로 정리하고 부담 없는 방식으로 준비하기',
    ),
    oneLiner: L('진심은 충분합니다. 과정을 조금만 쌓으면 같은 마음이 더 잘 닿습니다'),
    shareLine: L('나의 고백 성공 확률: 20% 🌧️ ({score}점/10, 상위 {percent}%) 준비가 더 필요하대ㅠ 너는 몇 %야? 캡처 공유해줘'),
  },
  {
    type: 'p40',
    emoji: '⛅',
    min: 3,
    max: 4,
    probability: 40,
    title: L('성공 확률 40%'),
    shortDescription: L('고백의 씨앗은 있지만 몇 가지가 어긋나 있는 단계입니다.'),
    description: L('호감의 기반은 있으나 타이밍이나 방식에서 부담을 줄 요소가 섞여 있습니다. 한두 가지만 조정해도 달라집니다.'),
    scoreRange: L('3~4점'),
    keywords: L('가능성, 타이밍 어긋남, 부담 요소, 조정 필요'),
    strengths: L('용기와 진심이 있고 표현할 의지가 있음'),
    tips: L(
      '큰 이벤트 대신 조용히 이야기할 수 있는 자리 고르기\n답을 재촉하지 않고 생각할 시간을 주겠다고 먼저 말하기\n상대의 최근 반응을 정리해 지금이 적절한 때인지 점검하기',
    ),
    oneLiner: L('한두 가지만 조정해도 확률이 오릅니다. 부담을 덜어 주는 쪽으로 방향을 잡아 보세요'),
    shareLine: L('나의 고백 성공 확률: 40% ⛅ ({score}점/10, 상위 {percent}%) 한두 가지만 조정하면 된대... 너는 몇 %야? 캡처 ㄱㄱ'),
  },
  {
    type: 'p60',
    emoji: '🌤️',
    min: 5,
    max: 6,
    probability: 60,
    title: L('성공 확률 60%'),
    shortDescription: L('충분히 시도해 볼 만한 단계입니다.'),
    description: L('기본적인 관계의 쌓임과 배려가 있고, 아쉬운 부분은 몇 가지뿐입니다. 상대의 호감 신호를 한 번 더 확인하면 안정적입니다.'),
    scoreRange: L('5~6점'),
    keywords: L('시도 가능, 배려, 기본기, 확인 필요'),
    strengths: L('상대를 배려하며 현실적으로 접근하는 균형감'),
    tips: L(
      '고백 전 가볍게 "다음에 또 보고 싶다"는 호감 표현으로 반응 확인하기\n거절되어도 관계가 이어질 수 있게 마무리 문장 준비하기\n마음 정리 문장을 소리 내어 한 번 연습하기',
    ),
    oneLiner: L('시도해 볼 만합니다. 반응 확인과 마무리 문장이 마지막 한 조각입니다'),
    shareLine: L('나의 고백 성공 확률: 60% 🌤️ ({score}점/10, 상위 {percent}%) 시도해 볼 만하대ㅋㅋ 너는 몇 %야? 캡처 공유해줘'),
  },
  {
    type: 'p80',
    emoji: '☀️',
    min: 7,
    max: 8,
    probability: 80,
    title: L('성공 확률 80%'),
    shortDescription: L('좋은 고백이 될 가능성이 높은 단계입니다.'),
    description: L('관계의 쌓임, 타이밍, 방식이 대체로 잘 맞아 있습니다. 상대가 부담 없이 마음을 생각해 볼 수 있는 고백입니다.'),
    scoreRange: L('7~8점'),
    keywords: L('좋은 타이밍, 배려, 준비, 진심'),
    strengths: L('상대의 상황을 살피고 부담 없이 마음을 전하는 성숙함'),
    tips: L(
      '호감 신호가 확인된 시기에 맞춰 날짜를 정하기\n고백 뒤 상대의 속도를 기다릴 수 있도록 마음의 여유 갖기\n거절이든 수락이든 이어질 대화를 미리 상상해 두기',
    ),
    oneLiner: L('준비된 고백은 마음을 편하게 합니다. 이제 용기만 더하면 됩니다'),
    shareLine: L('나의 고백 성공 확률: 80% ☀️ ({score}점/10, 상위 {percent}%) 좋은 고백이 될 가능성 높대! 너는 몇 %야? 캡처 ㄱㄱ'),
  },
  {
    type: 'p95',
    emoji: '🌈',
    min: 9,
    max: 10,
    probability: 95,
    title: L('성공 확률 95%'),
    shortDescription: L('고백하기 매우 좋은 단계입니다.'),
    description: L(
      '관계를 차곡차곡 쌓았고, 상대의 상황을 살피며, 진심을 부담 없이 전할 줄 압니다. 어떤 결과여도 관계를 지킬 수 있는 태도입니다. 다만 확률이 높다고 상대의 속도를 앞서가지 않도록 살피세요.',
    ),
    scoreRange: L('9~10점'),
    keywords: L('과정, 타이밍, 진심, 배려, 성숙한 태도'),
    strengths: L('상대를 존중하며 진심을 전하는 안정적인 접근'),
    tips: L(
      '상대가 생각할 시간을 주는 여유를 끝까지 유지하기\n수락되면 속도를 천천히 맞추며 관계를 이어 가기\n이 노하우를 친구들과 나누기. 당신의 방식이 누군가의 힌트가 됩니다',
    ),
    oneLiner: L('과정이 쌓인 진심은 가장 잘 닿습니다. 상대의 속도만 존중하면 됩니다'),
    shareLine: L(
      '나의 고백 성공 확률: 95% 🌈 ({score}점/10, 상위 {percent}%) 고백하기 딱 좋대ㅋㅋ 너는 몇 %야? 상위 몇 %인지 캡처해줘',
    ),
  },
];

export const phase3ConfessionSuccessResults: Phase3ConfessionSuccessResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3ConfessionSuccessResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_CONFESSION_SUCCESS_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_CONFESSION_SUCCESS_MIN = 0;
export const PHASE3_CONFESSION_SUCCESS_MAX = 10;

export function calculatePhase3ConfessionSuccessTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3ConfessionSuccessResult(total: number): Phase3ConfessionSuccessResult {
  return (
    phase3ConfessionSuccessResults.find((r) => total >= r.min && total <= r.max) ?? phase3ConfessionSuccessResults[0]
  );
}

export function getPhase3ConfessionSuccessTopPercent(total: number): number {
  const index = Math.min(PHASE3_CONFESSION_SUCCESS_MAX, Math.max(PHASE3_CONFESSION_SUCCESS_MIN, total));
  return PHASE3_CONFESSION_SUCCESS_TOP_PERCENT[index];
}

/** 0점이 있는 영역을 정의 순서대로. 전부 1점이면 빈 배열 */
export function getPhase3ConfessionSuccessWeakAreas(answers: number[]): Phase3ConfessionSuccessAreaId[] {
  return PHASE3_CONFESSION_SUCCESS_AREAS.filter((area) =>
    area.questionIds.some((id) => (answers[id - 1] ?? 0) <= 0),
  ).map((area) => area.id);
}
