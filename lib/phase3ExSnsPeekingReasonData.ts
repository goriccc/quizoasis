/**
 * 나는 왜 이별 후에도 전 애인 SNS를 염탐할까?
 * slug: phase3-ex-sns-peeking-reason
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_EX_SNS_PEEKING_REASON_I18N,
  type Phase3ExSnsPeekingReasonForeignLocale,
  type Phase3ExSnsPeekingReasonResultText,
} from './phase3ExSnsPeekingReasonI18n';

export type Phase3ExSnsPeekingReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3ExSnsPeekingReasonLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_EX_SNS_PEEKING_REASON_I18N) as Phase3ExSnsPeekingReasonForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3ExSnsPeekingReasonForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3ExSnsPeekingReasonQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3ExSnsPeekingReasonResult {
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

export const PHASE3_EX_SNS_PEEKING_REASON_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3ExSnsPeekingReasonScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_EX_SNS_PEEKING_REASON_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3ExSnsPeekingReasonResult(answers: number[]): string {
  const scores = calculatePhase3ExSnsPeekingReasonScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_EX_SNS_PEEKING_REASON_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3ExSnsPeekingReasonHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3ExSnsPeekingReasonScores(answers);
  const sorted = [...PHASE3_EX_SNS_PEEKING_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "헤어진 지 한 달, 퇴근길에 문득 전 애인의 계정이 떠올랐다. 나는?",
    opts: [
      ["지금 어떻게 지내는지, 나보다 잘 지내는 것 같은지 비교해 보고 싶다", 2],
      ["보고 나면 마음이 조금 편해지는 기분이라 위로받으려는 마음으로 들어가 본다", 3],
      ["생각이 들기도 전에 손이 먼저 앱을 열고 있다", 4],
      ["제대로 마무리하지 못한 이야기가 남아 있어서 마음이 자꾸 그쪽으로 간다", 5],
    ],
  },
  {
    q: "새벽 1시, 잠이 오지 않는 밤이다. 나는?",
    opts: [
      ["같이 찍은 사진이 아직 남아 있는지 보며 그때의 따뜻함으로 마음을 달랜다", 3],
      ["딱히 이유 없이 스크롤을 내리다 보니 어느새 그 계정 앞이다", 4],
      ["끝내 하지 못한 말이 떠올라서 달라진 건 없는지 살펴본다", 5],
      ["혹시 내 생각이 나서 뭔가 올리진 않았는지 흔적을 찾아본다", 1],
    ],
  },
  {
    q: "전 애인의 새 게시물 알림이 떴다. 나는?",
    opts: [
      ["새로 올라왔다는 사실만으로 안 볼 수가 없어서 바로 확인한다", 4],
      ["우리 이야기가 정말 끝난 건지 확인하고 싶은 마음이 든다", 5],
      ["혹시 나를 떠올리게 하는 내용이 아닌지 한 줄 한 줄 읽는다", 1],
      ["사진 속 모습이 나보다 훨씬 행복해 보이는지부터 따져 본다", 2],
    ],
  },
  {
    q: "전 애인의 계정이 비공개로 바뀐 것을 알게 됐다. 나는?",
    opts: [
      ["이렇게 끝나는 건가 싶어서 마음이 정리되지 않고 허전함이 남는다", 5],
      ["일부러 나 보라고 바꾼 건 아닐까, 어떤 신호는 아닐까 의미를 찾게 된다", 1],
      ["새로운 사람이 생겨서 숨기는 건지, 그 사람은 나와 어떻게 다른지 궁금해진다", 2],
      ["어차피 이제는 못 본다고 생각하니 조금 홀가분하다고 스스로를 다독인다", 3],
    ],
  },
  {
    q: "친구가 \"걔 요즘 어떻게 지내는지 알아?\"라고 물었다. 나는?",
    opts: [
      ["내 이야기를 하진 않는지, 나를 어떻게 얘기하는지가 먼저 궁금하다", 1],
      ["나는 이렇게 지내는데 그쪽은 어떤지 비교하는 마음이 올라온다", 2],
      ["그 얘기를 들으면 마음이 오히려 안정되고 괜찮아지는 기분이 든다", 3],
      ["모른다고 답하면서 속으로는 바로 찾아보고 싶어서 폰을 만지작거린다", 4],
    ],
  },
  {
    q: "계정을 안 보겠다고 다짐한 지 사흘째다. 나는?",
    opts: [
      ["참아보려 했는데 어느새 손이 습관처럼 앱을 열고 있다", 4],
      ["마음 한쪽이 정리되지 않아서 확인하지 않으면 마무리가 안 된 느낌이다", 5],
      ["다짐했는데도 그 사람의 근황이 내 근황보다 나아 보일지 궁금해진다", 2],
      ["다짐은 했지만 보고 나면 마음이 편해지는 순간이 있어 끊기가 쉽지 않다", 3],
    ],
  },
  {
    q: "전 애인과의 마지막 대화창을 다시 열어봤다. 나는?",
    opts: [
      ["마지막이 어정쩡하게 끝난 게 아쉬워서 마음이 자꾸 그곳에 머문다", 5],
      ["혹시 다시 연락이 올 흔적은 없는지, 그쪽도 나를 생각하는지 살핀다", 1],
      ["옛 대화를 읽다 보면 그때가 떠올라 마음이 조금 따뜻해진다", 3],
      ["마지막 접속 시간이나 프로필 사진 같은 작은 변화가 있는지 확인하고 싶어진다", 4],
    ],
  },
  {
    q: "전 애인이 친구들과 찍은 즐거운 사진을 올렸다. 나는?",
    opts: [
      ["사진 속에 후회하는 기색이나 나를 떠올리게 하는 표정이 있는지 찾아본다", 1],
      ["나는 아직 힘든데 저 사람은 잘 지내는 것 같아서 나와 비교하게 된다", 2],
      ["게시물 하나에서 시작해 다른 게시물까지 연달아 보게 된다", 4],
      ["사진을 보며 우리 사이는 도대체 어떻게 끝난 건지 같은 질문이 다시 떠오른다", 5],
    ],
  },
  {
    q: "한 달 뒤, 전 애인에게 새 연애를 하는 것 같은 단서가 보였다. 나는?",
    opts: [
      ["그 사람과 나를 비교하며 내가 부족했던 건 아닌지 자꾸 생각이 든다", 2],
      ["이미 정리된 일이라고 스스로를 달래지만 한 번 더 보고 안심하고 싶다", 3],
      ["이제는 정말 끝이라는 사실이 실감 나면서 마무리되지 못한 마음이 올라온다", 5],
      ["이 관계가 정말 끝난 건지, 그쪽은 나를 완전히 잊은 건지 더 알고 싶어진다", 1],
    ],
  },
  {
    q: "친구가 \"너 걔 계정 아직도 봐?\"라고 물었다. 가장 가까운 속마음은?",
    opts: [
      ["솔직히 보고 나면 마음이 편해져서 하나의 위로 같은 습관이 되었다", 3],
      ["이유라기보다 손이 가는 습관이라 나도 멈추기가 쉽지 않다", 4],
      ["아직 그쪽이 나를 생각하고 있는지 확인하고 싶은 마음이 있다", 1],
      ["그 사람이 나 없이 어떻게 지내는지 비교해 보고 싶은 마음이 크다", 2],
    ],
  },
];

export const phase3ExSnsPeekingReasonQuestions: Phase3ExSnsPeekingReasonQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_EX_SNS_PEEKING_REASON_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_EX_SNS_PEEKING_REASON_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3ExSnsPeekingReasonResultText)[];

const KO_RESULTS: Phase3ExSnsPeekingReasonResult[] = [
  {
    type: "Type1",
    emoji: "🔍",
    title: L("아직 나를 생각하는지 확인하고 싶은 사람, 미련 확인형 🔍"),
    typeName: L("미련 확인형"),
    realReason: L("그 사람 마음에 내가 아직 남아 있는지 확인하고 싶다"),
    shortDescription: L("당신은 염탐하는 게 아닙니다. 아직 나를 생각하고 있는지, 흔적이 남아 있는지 확인하고 싶은 마음입니다."),
    description: L("새 게시물의 문구, 비공개 전환, 프로필 변화 하나하나가 나를 향한 신호처럼 느껴집니다. 확인하고 나면 잠깐 마음이 움직이지만, 확실한 답이 없으니 다시 들어가 보게 됩니다. 이 마음은 사랑이 남아 있다는 증거이기도 하지만 해석에 쓰이는 에너지가 큽니다."),
    keywords: L("흔적 찾기, 신호 해석, 나를 생각할까, 아직 끝나지 않은 마음, 의미 부여"),
    strengths: L("관계에 진심이었고 사람을 쉽게 지우지 않는 깊은 마음"),
    reasonDetail: L("새 게시물·프로필 변화·접속 기록이 보일 때, 마지막 대화창을 다시 열어볼 때"),
    frequentSaying: L("\"혹시 나 생각하고 있는 건 아닐까?\""),
    changeTips: L("확인하고 싶어질 때 '지금 얻고 싶은 답이 무엇인지'를 한 문장으로 적어보기\n그 계정을 숨김·뮤트로 정리해 새 알림이 눈에 닿지 않게 하기\n신호를 해석한 내용과 실제로 확인된 사실을 두 줄로 나눠 적어보기"),
    oneLiner: L("흔적은 해석할수록 커집니다. 답은 그 계정이 아니라 내 마음속에서 정리됩니다"),
    shareLine: L("나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 미련 확인형 🔍 나를 아직 생각하는지 확인하고 싶은 마음이래... 이거 내 얘기라 소름 저장해둠 너는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "⚖️",
    title: L("나와 그 사람을 저울에 올리는 사람, 비교 심리형 ⚖️"),
    typeName: L("비교 심리형"),
    realReason: L("그 사람의 근황과 내 근황을 비교하며 나를 가늠하고 있다"),
    shortDescription: L("당신은 그 사람이 궁금한 게 아닙니다. 그 사람의 삶 옆에 내 삶을 올려놓고 내 위치를 재고 있습니다."),
    description: L("행복해 보이는 사진, 새 연인의 단서, 잘 지내는 모습을 보면 마음이 가라앉습니다. 이별의 아픔에 비교가 겹치면서 '나만 뒤처진 건가' 하는 생각이 커집니다. 계정에 들어가는 행동이 마음을 편하게 해주기보다 더 지치게 만들 수 있습니다."),
    keywords: L("근황 비교, 나만 뒤처진 느낌, 새 연인 궁금, 저울질, 자기 평가"),
    strengths: L("자기 성장에 대한 기준이 분명하고 더 나아지려는 의지가 강함"),
    reasonDetail: L("행복해 보이는 게시물을 볼 때, 새 연애 단서를 발견했을 때"),
    frequentSaying: L("\"걔는 잘 지내는데 나만 이러네\""),
    changeTips: L("비교가 시작되면 '내가 이번 달에 해낸 일' 3가지를 먼저 적어보기\nSNS 속 모습은 편집된 하이라이트일 뿐이라는 점을 한 번 더 떠올리기\n비교 대상을 그 사람이 아닌 '한 달 전의 나'로 바꿔 보기"),
    oneLiner: L("남의 근황은 편집본이고 내 마음은 원본입니다. 원본을 돌보는 시간을 늘려보세요"),
    shareLine: L("나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 비교 심리형 ⚖️ 그 사람 근황이랑 내 근황을 저울에 올리는 거래... 이거 내 얘기라 소름ㅠ 저장 필수"),
  },
  {
    type: "Type3",
    emoji: "🫶",
    title: L("보면서 마음을 달래는 사람, 자기 위안형 🫶"),
    typeName: L("자기 위안형"),
    realReason: L("보고 있는 동안 마음이 잠깐 편해져서 위로가 되고 있다"),
    shortDescription: L("당신은 상처를 키우려는 게 아닙니다. 그 계정이 어느새 마음을 달래는 익숙한 위로가 되어 있습니다."),
    description: L("옛 사진, 옛 대화, 익숙한 프로필을 보면 마음이 조금 따뜻해지거나 안정됩니다. 이별의 빈자리를 그 계정이 대신 채워주는 느낌입니다. 다만 위로로 쓸수록 끊기가 어려워지고, 이별의 정리는 그만큼 뒤로 밀릴 수 있습니다."),
    keywords: L("위로, 익숙함, 따뜻한 기억, 안정감, 끊기 어려움"),
    strengths: L("좋았던 기억을 소중히 여기고 감정을 스스로 달래는 방법을 아는 따뜻함"),
    reasonDetail: L("잠이 오지 않는 밤, 마음이 허전할 때, 옛 사진이나 대화를 떠올릴 때"),
    frequentSaying: L("\"보고 있으면 좀 괜찮아져서\""),
    changeTips: L("위로가 필요한 시간대(밤 등)에 쓸 대체 루틴(산책·음악·친구 통화)을 미리 정해두기\n좋았던 기억은 계정 대신 내가 직접 정리한 메모나 사진첩 안에 남기기\n위로를 '사람에게서' 받을 수 있는 연결(친구·가족)을 이번 주에 한 번 만들기"),
    oneLiner: L("위로가 필요한 건 당연합니다. 다만 그 위로는 이제 지금의 나에게서 받아도 괜찮습니다"),
    shareLine: L("나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 자기 위안형 🫶 보면서 마음을 달래는 위로 루틴이 된 거래... 이거 내 얘기라 소름 돋음 저장함 너는?"),
  },
  {
    type: "Type4",
    emoji: "📱",
    title: L("손이 먼저 움직이는 사람, 호기심 중독형 📱"),
    typeName: L("호기심 중독형"),
    realReason: L("이유보다 습관으로 앱을 열고 새 정보를 확인하고 싶어 한다"),
    shortDescription: L("당신은 미련이 커서 들어가는 게 아닐 수도 있습니다. 생각보다 손이 먼저 움직이는 반복 습관입니다."),
    description: L("새 게시물이 올라오면 안 볼 수가 없고, 하나를 보면 다음 게시물까지 연달아 보게 됩니다. 마음의 이유를 찾기 전에 이미 스크롤이 시작되어 있습니다. 확인할 때의 작은 자극이 반복되며 끊기 어려운 루프가 만들어진 타입입니다."),
    keywords: L("습관, 자동 스크롤, 새 게시물 궁금, 연달아 보기, 멈추기 어려움"),
    strengths: L("새로운 정보에 민감하고 호기심이 많아 다양한 일에 쉽게 몰입함"),
    reasonDetail: L("알림이 올 때, 멍하니 폰을 만지작거릴 때, 심심한 틈"),
    frequentSaying: L("\"나도 모르게 또 들어가 있었어\""),
    changeTips: L("앱 위치를 옮기거나 그 계정을 뮤트·차단해서 '열기까지의 단계'를 늘리기\n손이 가려 할 때 3분 동안 다른 행동(물 마시기·스트레칭)을 먼저 해보기\n하루 중 스크롤하는 시간대를 정해두고 그 밖의 시간엔 알림 끄기"),
    oneLiner: L("마음이 아니라 손의 습관이라면 환경을 바꾸는 것이 가장 빠른 방법입니다"),
    shareLine: L("나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 호기심 중독형 📱 마음이 아니라 손이 먼저 움직이는 습관이래... 이거 내 얘기라 소름ㅋㅋ 저장해둔다 너는 어떤 유형이야?"),
  },
  {
    type: "Type5",
    emoji: "🧩",
    title: L("이야기가 끝나지 않은 사람, 정리 미완형 🧩"),
    typeName: L("정리 미완형"),
    realReason: L("하지 못한 말과 풀리지 않은 질문이 남아 마음이 마무리되지 못했다"),
    shortDescription: L("당신은 그 사람이 보고 싶은 게 아닙니다. 끝맺지 못한 이야기가 마침표를 찾고 있습니다."),
    description: L("왜 그렇게 끝났는지, 마지막에 하지 못한 말은 무엇이었는지, 이 이별이 정말 확정된 건지 같은 질문이 마음 한쪽에 남아 있습니다. 계정을 열어보는 행동은 그 이야기의 결말을 찾으려는 시도이기도 합니다. 결말은 상대의 SNS가 아니라 내가 정리하는 문장에서 만들어집니다."),
    keywords: L("마침표, 못다 한 말, 풀리지 않은 질문, 어정쩡한 마무리, 결말 찾기"),
    strengths: L("관계를 책임감 있게 마무리하려는 성실함과 감정을 정리하려는 의지"),
    reasonDetail: L("마지막 대화를 떠올릴 때, 끝내 하지 못한 말이 생각날 때, 이별이 실감 날 때"),
    frequentSaying: L("\"그때 그 말은 하고 끝냈어야 했는데\""),
    changeTips: L("하지 못한 말을 보내지 않을 편지로 써서 끝까지 적어보기\n풀리지 않은 질문을 목록으로 적고 '내가 답을 만들 수 있는 것'과 '상대만 아는 것'으로 나누기\n정리를 마친 날을 정해 그날 계정 정리(뮤트·숨김)를 마침표로 삼기"),
    oneLiner: L("결말은 상대가 주는 것이 아니라 내가 써서 닫는 것입니다. 한 줄씩 적다 보면 마침표가 찍힙니다"),
    shareLine: L("나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 정리 미완형 🧩 끝맺지 못한 이야기가 마침표를 찾는 거래... 이거 내 얘기라 소름ㅠ 저장해둠 너는 뭐 나왔어?"),
  },
];

export const phase3ExSnsPeekingReasonResults: Phase3ExSnsPeekingReasonResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3ExSnsPeekingReasonResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_EX_SNS_PEEKING_REASON_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_EX_SNS_PEEKING_REASON_META = {
  title: withForeign("나는 왜 이별 후에도 전 애인 SNS를 염탐할까?", (loc) => PHASE3_EX_SNS_PEEKING_REASON_I18N[loc].meta.title),
  description: withForeign("끝난 사이인데, 왜 자꾸 그 계정에 들어가 보게 될까? 10가지 상황으로 내가 자꾸 들어가 보게 되는 진짜 이유와 마음을 정리하는 법을 알려드립니다.", (loc) => PHASE3_EX_SNS_PEEKING_REASON_I18N[loc].meta.description),
  tags: {
    ko: ["염탐", "이별심리"],
    en: PHASE3_EX_SNS_PEEKING_REASON_I18N.en.meta.tags,
    ja: PHASE3_EX_SNS_PEEKING_REASON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_EX_SNS_PEEKING_REASON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_EX_SNS_PEEKING_REASON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_EX_SNS_PEEKING_REASON_I18N.vi.meta.tags,
    id: PHASE3_EX_SNS_PEEKING_REASON_I18N.id.meta.tags,
  },
};

