/** 내가 연애를 못 하는 진짜 이유 — phase3-real-reason-single · 12문항 4지선다 · 선택지 score = 유형 번호(1~6) · 최고 득점 유형 · 7개 로케일 */

import {
  PHASE3_REAL_REASON_SINGLE_I18N,
  type Phase3RealReasonSingleForeignLocale,
  type Phase3RealReasonSingleResultText,
} from './phase3RealReasonSingleI18n';

export type Phase3RealReasonSingleLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3RealReasonSingleLocaleKey, string>;

function localeMap(t: LocaleText): LocaleText {
  return t;
}

function L(ko: string): LocaleText {
  return localeMap({ ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' });
}

const FOREIGN_LOCALES = Object.keys(PHASE3_REAL_REASON_SINGLE_I18N) as Phase3RealReasonSingleForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3RealReasonSingleForeignLocale) => string): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3RealReasonSingleQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3RealReasonSingleResult {
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

export const PHASE3_REAL_REASON_SINGLE_TYPES = ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6'] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3RealReasonSingleScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_REAL_REASON_SINGLE_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3RealReasonSingleResult(answers: number[]): string {
  const scores = calculatePhase3RealReasonSingleScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_REAL_REASON_SINGLE_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(숨은 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3RealReasonSingleHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3RealReasonSingleScores(answers);
  const sorted = [...PHASE3_REAL_REASON_SINGLE_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '친구가 주말에 소개팅을 해보라고 한다. 나의 속마음은?',
    opts: [
      ['요즘 일·취미로 바빠서 연애에 쓸 에너지가 없다. 여유 생기면 그때 하겠다고 한다', 6],
      ['나 같은 사람이 나가도 상대가 별로라고 하지 않을까 걱정부터 앞선다', 4],
      ['낯선 사람과 마주 앉아 있는 것 자체가 부담스러워서 핑계를 찾는다', 2],
      ['소개 말고는 새로운 사람을 만날 방법이 딱히 없어서 이런 기회가 귀하다', 5],
    ],
  },
  {
    q: '마음에 드는 사람이 생겼다. 나는?',
    opts: [
      ['나를 좋아할 리 없다고 미리 결론 내린다. 시도도 하기 전에 마음을 접는다', 4],
      ['설레긴 하지만 지금 해야 할 일이 우선이다. 바쁜 시기 지나고 생각해보자 싶다', 6],
      ['좋긴 한데 이상형과 비교하게 된다. 마음에 걸리는 점이 하나라도 없는지 따져본다', 1],
      ['연락할까 말까 재다가 타이밍을 놓친다. 정신 차려보니 그 사람은 이미 다른 사람과 가까워져 있다', 3],
    ],
  },
  {
    q: '데이트 약속이 잡혔다. 가장 먼저 드는 생각은?',
    opts: [
      ['이런 만남이 정말 오랜만이다. 평소 생활 반경에서는 이성을 만날 일이 거의 없었다', 5],
      ['분위기가 좋아도 다음 약속이든 마음 표현이든 말할 타이밍을 계속 놓칠 것 같다', 3],
      ['상대가 약속 장소·시간·대화 수준까지 내 기대에 맞는지 은근히 체크하게 된다', 1],
      ['가까워질수록 불편해진다. 적당한 거리를 두려고 미리 선을 그어둔다', 2],
    ],
  },
  {
    q: '연애가 잘 안 풀린다고 느끼는 순간은?',
    opts: [
      ['연애보다 일·자기계발이 먼저라서 만남을 자꾸 뒤로 미루고 있을 때', 6],
      ['상대가 다가오면 나도 모르게 한 걸음 물러나고 있을 때', 2],
      ['같은 사람들만 계속 마주쳐서 새로운 인연이 들어올 틈이 없을 때', 5],
      ["'조금만 더 일찍 말할걸' 하는 후회가 반복될 때", 3],
    ],
  },
  {
    q: '친구가 "너는 왜 연애 안 해?"라고 물었다. 솔직한 속마음은?',
    opts: [
      ['괜찮은 사람이 있긴 했는데 어영부영하다가 놓쳤다', 3],
      ['만나고 싶어도 만날 사람 자체가 주변에 없다', 5],
      ['아무나 만나고 싶지 않다. 기준을 낮출 생각은 없다', 1],
      ['솔직히 나를 좋아해 줄 사람이 있을지 자신이 없다', 4],
    ],
  },
  {
    q: '상대가 나에게 호감을 표현했다. 나는?',
    opts: [
      ['갑자기 부담스러워서 연락 빈도를 줄이거나 슬쩍 거리를 둔다', 2],
      ['마음은 감사한데 지금 연애할 여유가 없어서 미지근하게 반응한다', 6],
      ['왜 나를? 하는 의심이 든다. 알아가다 보면 실망할 것 같아 불안하다', 4],
      ['고맙지만 마음에 걸리는 점이 하나둘 보여서 더 알아가기 망설여진다', 1],
    ],
  },
  {
    q: '연애 앱이나 소개 서비스를 써볼까 고민한다. 나는?',
    opts: [
      ['앱 볼 시간에 다른 일을 하는 게 더 급하다고 느낀다', 6],
      ["가입은 해뒀는데 '프로필 더 다듬고 시작하자' 하다가 몇 주가 지나간다", 3],
      ['낯선 사람과 대화하는 것 자체가 부담스럽다. 깔아놓고도 대화는 시작 못 한다', 2],
      ['사진과 소개글에 자신이 없어서 선뜻 올리지 못한다', 4],
    ],
  },
  {
    q: '이상형에 대한 나의 생각은?',
    opts: [
      ['이상형 이전에 이성을 만날 자리부터 없다. 선택할 수 있는 폭 자체가 좁다', 5],
      ['외모·성격·직업 등 내가 정한 기준이 꽤 구체적이고 쉽게 양보되지 않는다', 1],
      ['이상형을 따로 그려본 적이 별로 없다. 연애가 삶의 우선순위에서 한참 아래다', 6],
      ['이상형은 있지만 그런 사람이 나 같은 사람을 좋아할 리 없다고 생각한다', 4],
    ],
  },
  {
    q: '썸이 길어지고 있다. 나는?',
    opts: [
      ['고백할 타이밍을 계속 재다가 썸만 길어지고 결국 흐지부지된다', 3],
      ['상대의 작은 단점이 자꾸 눈에 들어와서 이 사람이 맞는지 계속 저울질한다', 1],
      ['바쁜 시기엔 연락이 뜸해지고 연애에 신경 쓸 여력이 안 된다', 6],
      ['관계가 깊어질 분위기가 되면 괜히 불편해져서 한 발 물러난다', 2],
    ],
  },
  {
    q: '연말 연휴, 혼자인 나를 보며 드는 생각은?',
    opts: [
      ['회사-집만 오가는 생활이라 새로운 사람을 만날 기회가 없었다', 5],
      ['나한테 문제가 있는 건 아닐까 하는 생각이 은근히 올라온다', 4],
      ['누군가와 가까워지는 게 여전히 부담스럽다. 혼자가 편하다고 스스로를 설득한다', 2],
      ['올해도 괜찮은 사람이 있었는데, 용기를 낼 타이밍을 또 놓쳤다', 3],
    ],
  },
  {
    q: '연애를 시작해보자고 마음먹었다. 가장 먼저 하게 되는 일은?',
    opts: [
      ['일정을 보고 연애에 쓸 시간이 되는지부터 따져본다. 지금은 여유가 없다', 6],
      ['내가 원하는 상대 조건과 연애 기준을 먼저 정리한다', 1],
      ['소개팅·모임·동호회 등 사람을 만날 자리를 어떻게 찾아야 할지 막막하다', 5],
      ["마음은 먹었는데 '언제부터' 시작할지 정하지 못하고 계속 미룬다", 3],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"나는 사랑받을 만한 사람인지 아직 확신이 없다"', 4],
      ['"좋은 사람을 만나고 싶지만 어디서 만나야 할지 모르겠다"', 5],
      ['"상처받기 싫어서 마음을 쉽게 열지 않는다"', 2],
      ['"아무나 만날 바엔 혼자가 낫다"', 1],
    ],
  },
];

export const phase3RealReasonSingleQuestions: Phase3RealReasonSingleQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  question: withForeign(item.q, (loc) => PHASE3_REAL_REASON_SINGLE_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_REAL_REASON_SINGLE_I18N[loc].questions[idx].opts[oi]),
    score,
  })),
}));

const RESULT_TEXT_KEYS: (keyof Phase3RealReasonSingleResultText)[] = [
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
];

const KO_RESULTS: Phase3RealReasonSingleResult[] = [
  {
    type: 'Type1',
    emoji: '📏',
    title: L('눈이 높은 게 아니라 기준이 선명한 사람, 높은 기준형'),
    typeName: L('높은 기준형'),
    realReason: L('상대를 만나기 전에 기준표부터 대조하고 있다'),
    shortDescription: L(
      '당신은 사람을 만나는 게 아니라 조건을 확인하고 있습니다. 그 기준표가 시작도 전에 많은 인연을 걸러내고 있습니다.',
    ),
    description: L(
      '외모·성격·직업·가치관까지 내가 원하는 모습이 구체적이고, 한 가지라도 어긋나면 더 알아가기를 망설입니다. 기준이 있다는 건 나를 존중한다는 증거이기도 합니다. 다만 모든 항목이 맞는 사람은 처음부터 없고, 대부분의 호감은 만난 뒤에 자랍니다.',
    ),
    keywords: L('기준표, 비교, 저울질, 선택 과잉, 완벽한 상대'),
    strengths: L('나에게 맞지 않는 관계에 휩쓸리지 않는 단단함. 만나는 사람의 퀄리티가 높음'),
    reasonDetail: L('만남 이후가 아니라 만남 이전 단계에서 대부분 탈락시키고 있음'),
    frequentSaying: L('"나쁜 사람은 아닌데 뭔가 아쉬워"'),
    changeTips: L(
      "기준을 '반드시 필요한 3가지'와 '있으면 좋은 것'으로 나눠 적어보기\n첫 만남에서 점수 매기지 않고 '이 사람의 재밌는 점 하나'만 찾아보기\n세 번은 만나보고 판단하기",
    ),
    oneLiner: L('기준을 낮추라는 게 아닙니다. 기준표를 잠깐 내려놓고 사람을 한 번만 더 봐주세요'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 높은 기준형 📏 눈이 높은 게 아니라 기준표부터 대조한대... 나 높은 기준형 나왔어ㅋㅋ 너는 어떤 이유야?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🛡️',
    title: L('마음 앞에 벽을 세워둔 사람, 철벽 방어형'),
    typeName: L('철벽 방어형'),
    realReason: L('가까워질수록 먼저 거리를 벌리고 있다'),
    shortDescription: L(
      '당신은 상처받을 준비보다 상처받지 않을 준비를 먼저 합니다. 그 방어가 좋은 사람까지 막고 있습니다.',
    ),
    description: L(
      '호감이 생겨도 상대가 다가오면 괜히 불편해지고 한 발 물러납니다. 혼자가 편하다고 말하지만, 사실은 마음이 다치는 것이 두려운 쪽에 가깝습니다. 철벽은 나를 지켜주지만 동시에 문 앞에 온 사람도 돌려보냅니다.',
    ),
    keywords: L('거리 두기, 방어, 선 긋기, 마음 열기 어려움, 혼자가 편함'),
    strengths: L('쉽게 휘둘리지 않고 관계에 신중함. 마음을 열면 깊고 진중한 연애를 함'),
    reasonDetail: L('관계가 깊어지려는 순간에 스스로 브레이크를 밟고 있음'),
    frequentSaying: L('"아직은 좀 부담스러워서..."'),
    changeTips: L(
      "거리를 벌리고 싶어지는 순간을 알아차리고 '지금 내가 방어 중이구나'라고 이름 붙이기\n작은 사적인 이야기 하나를 먼저 꺼내보기\n상대의 호감을 확인하기 전에 도망치지 않고 한 번만 더 대화해보기",
    ),
    oneLiner: L('벽이 있다는 건 지킬 만큼 소중한 마음이 있다는 뜻입니다. 문 하나만 열어두면 됩니다'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 철벽 방어형 🛡️ 가까워지면 먼저 거리 벌린대... 나 철벽 방어형 나왔어ㅋㅋ 인정ㅠ 너는 뭐야?',
    ),
  },
  {
    type: 'Type3',
    emoji: '⏰',
    title: L('좋은 인연을 눈앞에서 놓치는 사람, 타이밍 놓침형'),
    typeName: L('타이밍 놓침형'),
    realReason: L('마음은 있는데 행동하는 순간이 매번 늦다'),
    shortDescription: L('당신은 호감이 없는 게 아닙니다. 말할까 말까 고민하는 사이에 타이밍이 지나가고 있습니다.'),
    description: L(
      '연락할까, 고백할까, 다음 약속을 잡을까. 재고 또 재다가 분위기가 식거나 상대가 먼저 다른 사람에게 갑니다. 준비가 더 되면 시작하자는 마음이 계속 시작을 미루게 만듭니다.',
    ),
    keywords: L('망설임, 미루기, 후회, 좋았는데 놓침, 준비 부족 핑계'),
    strengths: L('신중하고 상대를 배려하며 가볍게 접근하지 않음'),
    reasonDetail: L('감정 부족이 아니라 실행 시점의 문제. 마음은 이미 정해졌는데 행동이 따라오지 않음'),
    frequentSaying: L('"조금만 일찍 말할걸"'),
    changeTips: L(
      "'호감 신호가 오면 48시간 안에 한 번은 움직인다'는 나만의 규칙 만들기\n고백 같은 큰 행동 대신 \"다음에 같이 ○○ 갈래?\" 같은 작은 제안부터 하기\n완벽한 타이밍은 없다는 사실을 기억하기",
    ),
    oneLiner: L('당신에게 부족한 건 인연이 아니라 3초의 용기입니다. 그 3초만 앞당기면 결과가 달라집니다'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 타이밍 놓침형 ⏰ 마음은 있는데 행동이 늦대... 나 타이밍 놓침형 나왔어ㅋㅋ 3초만 일찍 말할걸 → 너는 어떤 이유야?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🌱',
    title: L('사랑받을 자신이 아직 없는 사람, 자기확신 부족형'),
    typeName: L('자기확신 부족형'),
    realReason: L("시작도 전에 '나는 안 될 거야'라고 결론 내린다"),
    shortDescription: L('당신은 충분히 괜찮은 사람입니다. 다만 그 사실을 당신만 아직 믿지 못하고 있습니다.'),
    description: L(
      "호감이 생겨도 '나를 좋아할 리 없다'고 먼저 접고, 상대가 다가와도 '알아가다 보면 실망할 것'이라며 불안해합니다. 다른 사람은 이미 알아보는 매력을 본인만 못 보는 경우가 많습니다.",
    ),
    keywords: L('자기 의심, 미리 포기, 불안, 비교, 괜찮은 사람인 걸 모름'),
    strengths: L('겸손하고 상대의 감정에 섬세하게 반응함. 진심으로 대하는 연애를 함'),
    reasonDetail: L('상대의 반응 이전에 나 스스로 매긴 점수가 먼저 문을 닫고 있음'),
    frequentSaying: L('"나 같은 사람을 누가 좋아하겠어"'),
    changeTips: L(
      "친구들이 나를 칭찬했던 말 3가지를 적어보고 자주 읽기\n'거절당하면 끝'이 아니라 '시도해본 경험'으로 정의하기\n연애가 아닌 영역에서 작은 성공 경험을 쌓아 자기 신뢰 키우기",
    ),
    oneLiner: L('자신감은 연애를 시작하기 위한 조건이 아니라 연애하면서 자라는 결과입니다. 일단 한 걸음만 내디뎌 보세요'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 자기확신 부족형 🌱 나 같은 사람을 누가 좋아하겠어가 이유래... 나 자기확신 부족형 나왔어ㅋㅋ 뜨끔 → 너는?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🏠',
    title: L('사람은 좋은데 만날 자리가 없는, 만남 환경 부족형'),
    typeName: L('만남 환경 부족형'),
    realReason: L('인연이 들어올 입구 자체가 좁다'),
    shortDescription: L(
      '당신의 문제는 마음도 성격도 아닙니다. 새로운 사람을 만날 수 있는 환경이 거의 열려있지 않다는 것입니다.',
    ),
    description: L(
      '회사-집 루틴이 고정돼 있고, 만나는 사람은 늘 같은 얼굴들입니다. 좋은 사람을 만나고 싶은 마음은 분명한데 어디서 어떻게 만나야 할지 막막합니다. 이건 개인의 결함이 아니라 구조의 문제라서 환경을 바꾸면 가장 빠르게 해결됩니다.',
    ),
    keywords: L('고정 루틴, 좁은 생활 반경, 기회 부족, 막막함, 환경 문제'),
    strengths: L('연애에 대한 마음이 열려있고 선택 기준이 비교적 현실적임'),
    reasonDetail: L("매력이나 마음이 아닌 '만남의 숫자' 자체가 부족함"),
    frequentSaying: L('"소개해 줄 사람 없어? 진짜로"'),
    changeTips: L(
      '한 달에 한 번은 평소와 다른 장소·모임·클래스에 참여하기\n지인들에게 "소개 필요하다"고 솔직하게 알려두기\n연애 목적이 아닌 취미 기반 모임부터 시작해 자연스러운 접점 늘리기',
    ),
    oneLiner: L('당신은 인연이 없는 게 아니라 인연을 만날 통로가 막혀있는 겁니다. 길을 하나만 열어도 판이 바뀝니다'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 만남 환경 부족형 🏠 마음이 아니라 만날 자리가 없는 거래... 나 만남 환경 부족형 나왔어ㅋㅋ 소개 좀 → 너는 어떤 이유야?',
    ),
  },
  {
    type: 'Type6',
    emoji: '📋',
    title: L('연애보다 해야 할 일이 먼저인 사람, 연애 후순위형'),
    typeName: L('연애 후순위형'),
    realReason: L('연애가 늘 우선순위 목록의 아래쪽에 있다'),
    shortDescription: L('당신은 연애를 못 하는 게 아니라 연애를 뒤로 미루고 있습니다. 지금은 다른 것들이 더 급해 보이니까요.'),
    description: L(
      "일·공부·취미·자기계발이 삶을 꽉 채우고 있고, 연애는 '여유 생기면 그때'의 항목입니다. 호감이 생겨도 에너지가 없어 미지근하게 반응하다가 관계가 시작되기 전에 끝나버립니다. 바쁜 건 사실이지만, 시간은 중요하다고 생각하는 것에 쓰이기 마련입니다.",
    ),
    keywords: L('바쁨, 우선순위, 여유 없음, 나중에, 일 중심'),
    strengths: L('자기 삶이 탄탄하고 목표가 뚜렷하며 독립적임'),
    reasonDetail: L('연애 의지가 없다기보다 연애에 배정된 시간과 에너지가 0에 가까움'),
    frequentSaying: L('"지금은 좀 바빠서... 이것만 끝나면"'),
    changeTips: L(
      "일정표에 '연애를 위한 시간' 주 1회를 먼저 고정해보기\n바쁜 시기와 상관없이 \"나는 연애하고 싶은가?\"를 한 번 솔직하게 물어보기\n호감 가는 상대가 생기면 답장 속도만이라도 일정 수준으로 유지하기",
    ),
    oneLiner: L('바쁨은 이유가 될 수 있지만 영원한 핑계가 되진 않습니다. 시간은 만들어야 생깁니다'),
    shareLine: L(
      '내가 연애를 못 하는 진짜 이유: 연애 후순위형 📋 연애가 우선순위 맨 아래래... 나 연애 후순위형 나왔어ㅋㅋ 바쁨은 핑계였나 → 너는 뭐 나왔어?',
    ),
  },
];

export const phase3RealReasonSingleResults: Phase3RealReasonSingleResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3RealReasonSingleResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_REAL_REASON_SINGLE_I18N[loc].results[ri][key]);
  }
  return merged;
});
