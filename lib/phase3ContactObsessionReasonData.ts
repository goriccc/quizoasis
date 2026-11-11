/**
 * 나는 왜 연애하면 연락에 집착하게 될까?
 * slug: phase3-contact-obsession-reason
 * 10문항 4지선다 · 5유형
 */

import {
  PHASE3_CONTACT_OBSESSION_REASON_I18N,
  type Phase3ContactObsessionReasonForeignLocale,
  type Phase3ContactObsessionReasonResultText,
} from './phase3ContactObsessionReasonI18n';

export type Phase3ContactObsessionReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3ContactObsessionReasonLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_CONTACT_OBSESSION_REASON_I18N) as Phase3ContactObsessionReasonForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3ContactObsessionReasonForeignLocale) => string,
): LocaleText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

export interface Phase3ContactObsessionReasonQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3ContactObsessionReasonResult {
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

export const PHASE3_CONTACT_OBSESSION_REASON_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */
export function calculatePhase3ContactObsessionReasonScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_CONTACT_OBSESSION_REASON_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3ContactObsessionReasonResult(answers: number[]): string {
  const scores = calculatePhase3ContactObsessionReasonScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_CONTACT_OBSESSION_REASON_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 숨은 욕구). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3ContactObsessionReasonHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3ContactObsessionReasonScores(answers);
  const sorted = [...PHASE3_CONTACT_OBSESSION_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: "연인이 오후 내내 연락이 없다가 저녁에야 \"회의가 길어졌어\"라고 답했다. 나는?",
    opts: [
      ["기다리는 동안 심장이 두근거리고 일이 손에 안 잡혔다. 답이 와서야 몸의 긴장이 풀린다", 2],
      ["퇴근 시간이 지났는데 연락이 없어서 \"지금 어디야? 누구랑 있어?\"를 묻고 싶어진다", 3],
      ["연락이 없는 시간이 길어지니 마음이 허전하고 괜히 쓸쓸해진다", 4],
      ["연락이 없는 사이 마음이 식은 건 아닐까, 나를 떠나려는 건 아닐까 싶은 생각이 든다", 5],
    ],
  },
  {
    q: "연인이 친구들과 노는 날, 오후 6시 이후 연락이 끊겼다. 나는?",
    opts: [
      ["몇 시에 끝나는지, 누구랑 있는지 알아야 마음이 놓여서 미리 확인해 둔다", 3],
      ["혼자 있기 싫어서 친구에게 연락하거나 일부러 바쁜 척 외출을 잡는다", 4],
      ["이런 식으로 연락이 줄어들다가 결국 나를 떠나는 거 아닐까 하는 생각이 스친다", 5],
      ["한 시간 단위로 \"재밌게 놀고 있어?\"를 보내며 신호를 받고 싶어진다", 1],
    ],
  },
  {
    q: "연인이 메시지를 읽고 한 시간째 답이 없다. 마음속에서 가장 먼저 올라오는 건?",
    opts: [
      ["이럴 때 혼자라는 느낌이 확 들어서 마음이 급해진다", 4],
      ["이 사람이 나를 잊은 건 아닐까, 내가 부담스러워진 건 아닐까 가슴이 내려앉는다", 5],
      ["폰을 계속 열어보고 읽은 시각과 접속 시간을 번갈아 확인한다", 1],
      ["최악의 상황이 머릿속에서 줄줄이 펼쳐지며 심장이 쿵쾅댄다", 2],
    ],
  },
  {
    q: "연인이 \"오늘은 피곤해서 일찍 잘게\"라고 보냈다. 나는?",
    opts: [
      ["이 말이 사실은 나와의 대화를 끝내고 싶다는 신호 같아 마음이 철렁한다", 5],
      ["\"진짜 자는 거 맞지?\"를 보내고 정말 자는지 접속 상태를 한 번 더 확인한다", 1],
      ["아무 일도 아닌데 불안이 자꾸 커져서 가슴이 뛰고 쉽게 잠들지 못한다", 2],
      ["내일은 몇 시쯤 연락이 가능한지, 일정이 어떤지 미리 알아두고 싶어진다", 3],
    ],
  },
  {
    q: "연인이 평소보다 짧은 답장만 보냈다. 나는?",
    opts: [
      ["\"왜 이렇게 짧아?\", \"화났어?\"라고 물으며 풀릴 때까지 대화를 이어간다", 1],
      ["걱정이 점점 커져서 심장이 두근거리고 연락이 올 때까지 다른 일이 손에 안 잡힌다", 2],
      ["앞으로 연락 시간과 빈도를 어떻게 할지 규칙을 정해두고 싶은 마음이 올라온다", 3],
      ["대화가 짧아지니 혼자 남은 느낌이 들어서 마음이 텅 빈다", 4],
    ],
  },
  {
    q: "연인이 갑자기 \"요즘 연락 좀 줄이면 안 될까? 숨이 막혀\"라고 말했다. 나는?",
    opts: [
      ["연락이 줄면 나 혼자 남는 시간이 더 길어질까 봐 속이 허전해진다", 4],
      ["그 말을 듣자마자 가슴이 내려앉고, 이대로 헤어지자는 건 아닐까 두렵다", 5],
      ["괜찮다고는 했지만 속으로는 마음이 롤러코스터를 타서 하루 종일 불안하다", 2],
      ["어떤 규칙이든 정해서라도 상대의 연락 흐름을 어느 정도 알고 싶어진다", 3],
    ],
  },
  {
    q: "연인이 읽씹한 채 SNS에는 활동 중인 걸 발견했다. 나는?",
    opts: [
      ["나한테는 안 하면서 다른 건 하는 걸 보니 내가 이제 우선순위가 아닌가 싶어 두렵다", 5],
      ["활동 시간과 내 메시지 읽은 시각을 비교하며 새로고침을 반복한다", 1],
      ["누구랑 있는지, 뭘 하는지 파악해야 마음이 놓여서 궁금한 걸 묻고 싶어진다", 3],
      ["나만 빼고 다들 연결되어 있는 것 같아서 외롭고 소외된 느낌이 든다", 4],
    ],
  },
  {
    q: "연인이 주말 약속을 취소하고 친구와 약속을 잡았다. 나는?",
    opts: [
      ["약속이 취소된 뒤에도 연인의 접속 상태와 읽음 표시를 틈틈이 확인하게 된다", 1],
      ["약속이 취소된 순간 불안이 몰려와서 이후 연락 하나하나에 심장이 반응한다", 2],
      ["혼자 보내야 할 주말이 길게 느껴져서 연인의 연락을 더 기다리게 된다", 4],
      ["연인이 점점 나에게서 멀어지는 것 같아 불안해서 서운함을 숨기고 더 챙기게 된다", 5],
    ],
  },
  {
    q: "연인이 \"나 요즘 많이 바빠서 연락 못 할 수도 있어\"라고 미리 말해줬다. 나는?",
    opts: [
      ["이해는 하는데 연락이 줄면 심장이 두근거리고 불안이 커질 것 같다", 2],
      ["얼마나 바쁜지, 언제쯤 연락이 가능한지 날짜와 시간대를 구체적으로 알고 싶어진다", 3],
      ["바쁘다는 말이 거리를 두려는 시작처럼 느껴져서 마음이 무겁다", 5],
      ["\"알겠어\"라고 답했지만 대화창을 자꾸 열어보며 안심 신호를 찾는다", 1],
    ],
  },
  {
    q: "연락 문제로 연인과 다툰 뒤 \"너 나 못 믿어?\"라는 말을 들었다. 속마음은?",
    opts: [
      ["믿는 게 아니라 확실하게 알고 싶은 거고, 모르면 마음이 불편해서 견디기 힘들다", 3],
      ["연락이 끊기면 혼자라는 느낌이 너무 크게 와서 그걸 막고 싶었다", 4],
      ["믿지만 읽음 표시나 답장이 보여야 안심이 돼서 자꾸 확인하게 된다", 1],
      ["믿고 싶은데 연락이 안 닿으면 몸이 먼저 불안해져서 어쩔 수가 없다", 2],
    ],
  },
];

export const phase3ContactObsessionReasonQuestions: Phase3ContactObsessionReasonQuestion[] =
  RAW_QUESTIONS.map((raw, idx) => ({
    id: idx + 1,
    question: withForeign(raw.q, (loc) => PHASE3_CONTACT_OBSESSION_REASON_I18N[loc].questions[idx].q),
    options: raw.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_CONTACT_OBSESSION_REASON_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }));

const RESULT_TEXT_KEYS = [
  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',
  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',
] as const satisfies readonly (keyof Phase3ContactObsessionReasonResultText)[];

const KO_RESULTS: Phase3ContactObsessionReasonResult[] = [
  {
    type: "Type1",
    emoji: "🔁",
    title: L("확인해야 숨이 쉬어지는 사람, 확인 중독형 🔁"),
    typeName: L("확인 중독형"),
    realReason: L("확인할 때 느끼는 잠깐의 안심이 다시 확인하게 만든다"),
    shortDescription: L("당신은 집착하는 게 아닙니다. 확인으로 얻는 안심이 너무 짧아서 계속 확인하게 되는 것입니다."),
    description: L("읽음 표시, 접속 시간, 답장 속도를 확인하면 잠깐 마음이 가라앉습니다. 하지만 새로운 신호가 없으면 다시 불안이 올라와서 또 확인하게 됩니다. 확인이 안심으로 이어지지 않고 확인하는 행동 자체를 키우는 반복이 만들어집니다.\n\n진짜 이유를 풀어보면: 답을 얻으려는 게 아니라 불안을 달래줄 즉각적인 신호가 필요한 상태\n연락 집착 뒤의 숨은 욕구: 지금 이 순간 관계가 괜찮다는 눈에 보이는 신호를 받고 싶은 욕구"),
    keywords: L("새로고침, 접속 시간, 확인 반복, 단서 찾기, 안심의 유통기한"),
    strengths: L("관계에 진심으로 몰입하고 상대에게 먼저 다가가는 적극성"),
    reasonDetail: L("읽음·접속·활동 기록을 번갈아 확인하고 짧은 안부 메시지를 자주 보냄"),
    frequentSaying: L("\"나 지금 몇 번째 확인하는 거지\""),
    changeTips: L("확인하고 싶을 때 '10분만 참기' 타이머를 설정해 보기\n알림을 끄고 하루 중 정해진 시간에만 대화창 열어보기\n확인 대신 \"오늘 한마디만 안심시켜 줄래?\"라고 원하는 것을 직접 요청하기\n확인하는 행동을 멈추기 어렵고 일상(일·수면·집중)에 영향을 줄 정도라면, 혼자 해결하려 하지 말고 심리상담 전문가와 이야기해 보세요"),
    oneLiner: L("확인은 불안을 잠깐 달랠 뿐 없애주진 못합니다. 확인 대신 말로 요청할 때 반복이 끊어집니다"),
    shareLine: L("나는 왜 연애하면 연락에 집착하게 될까? 결과: 확인 중독형 🔁 확인으로 얻는 안심이 너무 짧아서 계속 확인하는 거래... 단톡방 결과 카드 인증! 너희는 뭐 나왔어?"),
  },
  {
    type: "Type2",
    emoji: "🌪️",
    title: L("불안이 몸까지 퍼지는 사람, 불안 폭주형 🌪️"),
    typeName: L("불안 폭주형"),
    realReason: L("연락이 끊기는 순간 불안이 걷잡을 수 없이 커진다"),
    shortDescription: L("당신은 상대를 의심하는 게 아닙니다. 불안이 한 번 켜지면 스스로 꺼지지 않는 상태입니다."),
    description: L("연락이 늦어지면 심장이 두근거리고 머릿속에 최악의 장면들이 이어집니다. 이성으로는 별일 아니라는 걸 알아도 몸의 반응이 먼저 달려갑니다. 연락이 닿아야 비로소 불안이 가라앉는 구조라서, 연락이 안정 장치처럼 작동합니다.\n\n진짜 이유를 풀어보면: 상대의 행동이 아니라 불안이 올라올 때 스스로를 진정시키는 방법이 아직 부족한 상태\n연락 집착 뒤의 숨은 욕구: 불안을 빨리 가라앉히고 마음의 평온을 되찾고 싶은 욕구"),
    keywords: L("심장 두근거림, 최악의 상상, 몸이 먼저 반응, 잠 못 이룸, 연락이 안정제"),
    strengths: L("감정이 풍부하고 상대의 작은 변화에도 예민하게 반응하며 깊이 몰입하는 사랑"),
    reasonDetail: L("연락이 끊기면 다른 일에 집중하지 못하고 연락이 올 때까지 기다림"),
    frequentSaying: L("\"이성으로는 아는데 마음이 안 따라와\""),
    changeTips: L("불안이 올라오면 4초 들이쉬고 6초 내쉬는 호흡을 다섯 번 해보기\n머릿속 시나리오를 '확인된 사실'과 '내가 만든 이야기' 두 줄로 나눠 적어보기\n연락 없이도 불안을 달래줄 나만의 진정 루틴(산책·음악·샤워)을 미리 만들어 두기\n불안으로 가슴이 뛰거나 잠을 못 자는 일이 잦고 일상에 영향을 준다면, 심리상담 전문가나 정신건강의학과 전문의의 도움을 받아보세요. 불안은 도움을 받으면 충분히 가벼워질 수 있습니다"),
    oneLiner: L("불안은 약함이 아니라 마음이 켜놓은 경보입니다. 경보를 끄는 방법을 익히면 사랑이 훨씬 편해집니다"),
    shareLine: L("나는 왜 연애하면 연락에 집착하게 될까? 결과: 불안 폭주형 🌪️ 집착이 아니라 불안이 몸까지 퍼지는 거래... 팩트라 조용해짐ㅠ 단톡방 결과 카드 인증! 너희는?"),
  },
  {
    type: "Type3",
    emoji: "🧭",
    title: L("알아야 마음이 놓이는 사람, 통제 욕구형 🧭"),
    typeName: L("통제 욕구형"),
    realReason: L("상황을 내가 파악하고 있어야 불안이 줄어든다"),
    shortDescription: L("당신은 상대를 가두려는 게 아닙니다. 모르는 상태가 불편해서 상황을 내 손에 쥐고 싶은 것입니다."),
    description: L("연인이 어디 있는지, 누구와 있는지, 언제 끝나는지 알아야 마음이 놓입니다. 규칙이나 일정을 정해두면 불안이 줄어들지만, 그 방식이 상대에게는 감시나 간섭처럼 느껴질 수 있습니다. 불안의 해결책으로 '알기'를 선택한 타입입니다.\n\n진짜 이유를 풀어보면: 상대를 통제하려는 게 아니라 불확실함을 견디기 어려워서 정보로 안정을 얻으려는 상태\n연락 집착 뒤의 숨은 욕구: 예측 가능한 상태에서 안정감을 얻고 싶은 욕구"),
    keywords: L("파악, 규칙 정하기, 일정 확인, 알아야 안심, 불확실함이 불편"),
    strengths: L("계획적이고 책임감이 강하며 관계를 안정적으로 이끌려는 성실함"),
    reasonDetail: L("위치·일정·동행자를 묻거나 연락 규칙을 제안함"),
    frequentSaying: L("\"그냥 알고만 있으면 안심이 돼서\""),
    changeTips: L("알고 싶은 것을 '꼭 필요한 정보 1가지'로 줄이고 나머지는 상대의 자유로 남겨두기\n규칙을 일방적으로 정하는 대신 \"나는 이럴 때 불안해져, 어떻게 하면 좋을까?\"라고 함께 정하기\n모르는 상태를 5분만 견뎌보고 그 사이 아무 일 없다는 경험을 쌓기\n상대의 위치나 일정을 계속 확인해야 하는 마음이 커져 관계에서 갈등이 반복된다면, 심리상담 전문가와 그 불안의 뿌리를 함께 살펴보세요"),
    oneLiner: L("알아야 안심되는 마음은 이해할 수 있습니다. 다만 안심은 정보가 아니라 신뢰에서 오래 갑니다"),
    shareLine: L("나는 왜 연애하면 연락에 집착하게 될까? 결과: 통제 욕구형 🧭 가두려는 게 아니라 모르는 게 불편해서 파악하고 싶은 거래... 인정ㅋㅋ 단톡방 결과 카드 인증! 너희는 어떤 유형이야?"),
  },
  {
    type: "Type4",
    emoji: "🛟",
    title: L("혼자 남는 시간이 두려운 사람, 외로움 방어형 🛟"),
    typeName: L("외로움 방어형"),
    realReason: L("연락이 끊기면 혼자라는 느낌이 크게 와서 그걸 막으려 한다"),
    shortDescription: L("당신은 연락에 집착하는 게 아닙니다. 혼자 남겨지는 시간의 외로움을 연락으로 막고 있습니다."),
    description: L("연인의 연락이 끊기면 마음이 허전해지고 쓸쓸해집니다. 연락이 곧 곁에 있다는 감각이라서, 연락이 줄면 외로움이 한꺼번에 몰려옵니다. 사랑이 아니라 외로움을 방어하는 수단으로 연락이 쓰이는 타입입니다.\n\n진짜 이유를 풀어보면: 연인의 연락 빈도보다 혼자 있는 시간에 느껴지는 외로움이 연락 욕구를 키움\n연락 집착 뒤의 숨은 욕구: 누군가와 연결되어 있다는 감각으로 외로움을 막고 싶은 욕구"),
    keywords: L("허전함, 혼자라는 느낌, 소외감, 연락이 곁에 있는 감각, 방어"),
    strengths: L("사람과의 연결을 소중히 여기고 따뜻하며 관계에 에너지를 쏟는 헌신"),
    reasonDetail: L("연락이 뜸한 시간대에 친구를 찾거나 바쁜 척 외출하고, 연락이 오면 마음이 풀림"),
    frequentSaying: L("\"연락 없으면 갑자기 혼자 남은 것 같아\""),
    changeTips: L("연인 외에 마음을 나눌 연결(친구·가족·모임)을 일주일에 한 번 이상 의도적으로 만들기\n혼자 있는 시간에 할 '나를 위한 계획'을 미리 정해두기\n외로움이 올라올 때 \"지금 외롭구나\" 하고 이름 붙이고, 연락 대신 다른 방식으로 달래보기\n혼자 있는 시간이 유난히 힘들고 외로움이 오래 이어지거나 일상의 의욕과 수면에 영향을 준다면, 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터에 이야기해 보세요"),
    oneLiner: L("연락은 외로움을 달래주지만 채워주진 못합니다. 나를 채우는 연결이 하나 더 생기면 마음이 훨씬 단단해집니다"),
    shareLine: L("나는 왜 연애하면 연락에 집착하게 될까? 결과: 외로움 방어형 🛟 연락으로 혼자 남는 외로움을 막고 있는 거래... 찔림ㅠ 단톡방 결과 카드 인증! 너희는 뭐 나왔어?"),
  },
  {
    type: "Type5",
    emoji: "🥀",
    title: L("이 사랑을 잃을까 두려운 사람, 버림받음 공포형 🥀"),
    typeName: L("버림받음 공포형"),
    realReason: L("연락이 줄면 관계가 끝날 것 같은 두려움이 올라온다"),
    shortDescription: L("당신은 서운해서 연락하는 게 아닙니다. 이 사랑이 사라질까 봐 무서워서 붙잡고 있는 것입니다."),
    description: L("연락이 짧아지거나 줄어드는 순간, 마음이 멀어지는 징조처럼 느껴집니다. \"바빠\", \"피곤해\" 같은 말도 이별의 예고처럼 들려서 서운함보다 두려움이 먼저 올라옵니다. 과거에 갑작스럽게 관계가 끝났던 경험이 있다면 더 크게 느껴질 수 있습니다.\n\n진짜 이유를 풀어보면: 지금 상대의 행동보다 '사랑은 언젠가 끝난다'는 내면의 두려움이 연락 반응을 키움\n연락 집착 뒤의 숨은 욕구: 이 관계가 지속된다는 확신, 버려지지 않을 거라는 안전감을 얻고 싶은 욕구"),
    keywords: L("이별의 징조, 잃을까 두려움, 붙잡기, 서운함보다 두려움, 관계 단절 불안"),
    strengths: L("관계를 소중히 여기고 헌신적이며 상대를 위해 노력을 아끼지 않는 사랑"),
    reasonDetail: L("연락이 줄면 서둘러 더 챙기거나 감정을 숨기고 붙잡는 방향으로 움직임"),
    frequentSaying: L("\"나 버리는 건 아니지?\""),
    changeTips: L("연락이 줄었을 때 '관계가 끝난다'는 해석 외에 가능한 다른 이유 3가지를 적어보기\n두려움이 올라올 때 \"나 지금 잃을까 봐 무서워\"라고 감정 그대로 상대에게 말해보기\n이 관계 밖에서도 나를 지탱해주는 사람과 활동을 늘려 관계에 대한 의존도를 낮추기\n버려질 것 같은 두려움이 연애마다 반복되거나 과거의 이별 경험이 지금도 크게 영향을 준다면, 심리상담 전문가와 함께 그 두려움의 뿌리를 안전하게 살펴보세요"),
    oneLiner: L("잃을까 두려운 만큼 사랑이 깊다는 뜻입니다. 그 두려움을 말로 꺼내놓을 때 관계는 오히려 더 단단해집니다"),
    shareLine: L("나는 왜 연애하면 연락에 집착하게 될까? 결과: 버림받음 공포형 🥀 서운함이 아니라 잃을까 봐 무서운 거래... 소름 돋음 단톡방 결과 카드 인증! 너희는 어떤 이유야?"),
  },
];

export const phase3ContactObsessionReasonResults: Phase3ContactObsessionReasonResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3ContactObsessionReasonResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_CONTACT_OBSESSION_REASON_I18N[loc].results[ri][key]);
  }
  return merged;
});

export const PHASE3_CONTACT_OBSESSION_REASON_META = {
  title: withForeign("나는 왜 연애하면 연락에 집착하게 될까?", (loc) => PHASE3_CONTACT_OBSESSION_REASON_I18N[loc].meta.title),
  description: withForeign("연락이 늦어지면, 왜 이렇게 마음이 조급해질까? 10가지 상황으로 연락에 매달리게 되는 나의 진짜 이유와 숨은 욕구를 알려드립니다.", (loc) => PHASE3_CONTACT_OBSESSION_REASON_I18N[loc].meta.description),
  tags: {
    ko: ["연락집착", "연애심리"],
    en: PHASE3_CONTACT_OBSESSION_REASON_I18N.en.meta.tags,
    ja: PHASE3_CONTACT_OBSESSION_REASON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_CONTACT_OBSESSION_REASON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_CONTACT_OBSESSION_REASON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_CONTACT_OBSESSION_REASON_I18N.vi.meta.tags,
    id: PHASE3_CONTACT_OBSESSION_REASON_I18N.id.meta.tags,
  },
};

