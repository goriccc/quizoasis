/**
 * 싸우고 화해를 못 하는 진짜 이유
 * slug: phase3-cant-make-up-reason
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~4) · 최고 득점 · 동점 시 Q1→Q2→Q3
 */

import {
  PHASE3_CANT_MAKE_UP_REASON_I18N,
  type Phase3CantMakeUpReasonForeignLocale,
  type Phase3CantMakeUpReasonResultText,
} from './phase3CantMakeUpReasonI18n';

export type Phase3CantMakeUpReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3CantMakeUpReasonText = Record<Phase3CantMakeUpReasonLocaleKey, string>;

function L(ko: string): Phase3CantMakeUpReasonText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_CANT_MAKE_UP_REASON_I18N) as Phase3CantMakeUpReasonForeignLocale[];

function withForeign(ko: string, pick: (loc: Phase3CantMakeUpReasonForeignLocale) => string): Phase3CantMakeUpReasonText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3CantMakeUpReasonQuestion {
  id: number;
  question: Phase3CantMakeUpReasonText;
  options: { text: Phase3CantMakeUpReasonText; score: number }[];
}

export interface Phase3CantMakeUpReasonResult {
  type: string;
  emoji: string;
  title: Phase3CantMakeUpReasonText;
  typeName: Phase3CantMakeUpReasonText;
  realReason: Phase3CantMakeUpReasonText;
  shortDescription: Phase3CantMakeUpReasonText;
  description: Phase3CantMakeUpReasonText;
  keywords: Phase3CantMakeUpReasonText;
  blockedMoment: Phase3CantMakeUpReasonText;
  partnerSees: Phase3CantMakeUpReasonText;
  groupChatCharacter: Phase3CantMakeUpReasonText;
  strengths: Phase3CantMakeUpReasonText;
  reasonDetail: Phase3CantMakeUpReasonText;
  frequentSaying: Phase3CantMakeUpReasonText;
  changeTips: Phase3CantMakeUpReasonText;
  oneLiner: Phase3CantMakeUpReasonText;
  shareLine: Phase3CantMakeUpReasonText;
  counselingNote?: Phase3CantMakeUpReasonText;
}

export const PHASE3_CANT_MAKE_UP_REASON_TYPES = ['Type1', 'Type2', 'Type3', 'Type4'] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~4) 배열 */
export function calculatePhase3CantMakeUpReasonScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_CANT_MAKE_UP_REASON_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3CantMakeUpReasonResult(answers: number[]): string {
  const scores = calculatePhase3CantMakeUpReasonScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_CANT_MAKE_UP_REASON_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 속마음). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3CantMakeUpReasonHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3CantMakeUpReasonScores(answers);
  const sorted = [...PHASE3_CANT_MAKE_UP_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '다툰 다음 날 아침, 연인에게서 연락이 없다. 나는?',
    opts: [
      ['내가 먼저 보내면 잘못한 쪽이 되는 것 같아 폰을 내려놓는다', 1],
      ['보냈다가 읽고도 답이 없을까 봐 입력창만 열었다 닫는다', 2],
      ['보낼 타이밍을 재다 보니 점심이 지나고 저녁이 된다', 3],
      ['서운한 마음이 아직 풀리지 않아 보낼 말이 떠오르지 않는다', 4],
    ],
  },
  {
    q: '냉전 이틀째, 화해하고 싶은 마음이 커졌다. 나는?',
    opts: [
      ['손을 내밀었다가 차갑게 받아들여질까 봐 망설인다', 2],
      ['오늘은 늦었으니 내일 보내자며 또 하루를 미룬다', 3],
      ['내가 서운했던 걸 상대가 먼저 알아주길 기다린다', 4],
      ['이쯤이면 상대가 먼저 연락할 차례라고 생각한다', 1],
    ],
  },
  {
    q: '친구가 "그냥 먼저 연락해 봐"라고 말했다. 나는?',
    opts: [
      ['맞는 말인데 지금 보내기엔 때가 애매하다고 느낀다', 3],
      ['연락은 할 수 있지만 사과받지 못한 마음이 남아 있다', 4],
      ['내가 먼저 숙이면 앞으로도 계속 그래야 할 것 같다', 1],
      ['괜히 보냈다가 상황이 더 나빠질까 봐 겁이 난다', 2],
    ],
  },
  {
    q: '연인이 아무 일 없다는 듯 SNS에 사진을 올렸다. 나는?',
    opts: [
      ['아무렇지 않게 올린 모습에 또 서운해져 마음이 더 닫힌다', 4],
      ['나는 힘든데 상대는 괜찮아 보여 오기가 생긴다', 1],
      ["말을 걸었다가 무시당할까 봐 '좋아요'도 못 누른다", 2],
      ['반응하기엔 이미 늦은 것 같아 그냥 지나친다', 3],
    ],
  },
  {
    q: '냉전이 일주일을 넘겼다. 나는?',
    opts: [
      ['내가 먼저 풀면 자존심이 상할 것 같아 버틴다', 1],
      ['쌓인 서운함을 말하지 못한 채 시간만 흘려보낸다', 4],
      ['이제 와서 연락하기엔 너무 늦은 느낌이라 못 한다', 3],
      ['마음이 식었다는 답이 올까 봐 확인을 피한다', 2],
    ],
  },
  {
    q: '연인이 먼저 "뭐해?"라고만 보냈다. 나는?',
    opts: [
      ['화해 신호인지 확신이 없어 조심스럽게 답한다', 2],
      ['쉽게 풀어 주면 지는 것 같아 짧게만 답한다', 1],
      ['사과 한마디 없는 연락에 여전히 서운하다', 4],
      ['바로 답하기엔 시간이 지나서 한참 뒤에 답한다', 3],
    ],
  },
  {
    q: '화해 메시지를 쓰고 있다. 나는?',
    opts: [
      ['언제 보내야 좋을지 계속 시간을 잰다', 3],
      ['썼다 지우며 답이 안 올 상황을 상상한다', 2],
      ['먼저 보내면 약해 보일까 봐 전송을 못 누른다', 1],
      ['서운했던 이유를 쓰다 보니 화해 메시지가 아니게 된다', 4],
    ],
  },
  {
    q: '연인이 "우리 얘기 좀 하자"라고 했다. 나는?',
    opts: [
      ['나도 말하고 싶지만 서운했던 일부터 인정받고 싶다', 4],
      ['지금은 아닌 것 같아 다음에 하자고 미룬다', 3],
      ['이별 이야기일까 봐 심장이 내려앉는다', 2],
      ['나만 잘못한 사람이 될까 봐 방어부터 한다', 1],
    ],
  },
  {
    q: '지난번 싸움 뒤 화해했던 때를 떠올린다. 나는?',
    opts: [
      ['결국 내가 먼저 연락하지 않은 게 자존심으로 남았다', 1],
      ['연락했다가 거절당한 기억 때문에 이번에도 겁이 난다', 2],
      ['서운함이 풀리지 않은 채 넘어가 마음이 쌓였다', 4],
      ['타이밍을 놓쳐 어색한 채로 흐지부지 지나갔다', 3],
    ],
  },
  {
    q: '연인이 하루 종일 내 메시지를 읽고도 답이 없다. 나는?',
    opts: [
      ['내가 싫어진 건가 싶어 불안해진다', 2],
      ['나도 똑같이 대하겠다며 연락을 끊는다', 1],
      ['지금 보내면 재촉처럼 보일까 봐 더 기다린다', 3],
      ['그렇게 대하는 게 또 서운해 마음의 문이 닫힌다', 4],
    ],
  },
  {
    q: '기념일이 다가오는데 아직 화해하지 못했다. 나는?',
    opts: [
      ['기념일 전에 풀어야 하는데 말 꺼낼 때를 못 잡는다', 3],
      ['서운함이 남아 있어 축하할 마음이 나지 않는다', 4],
      ['기념일 연락에 반응이 없을까 봐 보낼지 고민만 한다', 2],
      ['연락이 먼저 오길 기다리다 자존심 싸움이 된다', 1],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"말은 하고 싶은데 서운한 마음이 아직 안 풀렸어"', 4],
      ['"연락하려고 했는데 때를 놓쳤어"', 3],
      ['"내가 먼저 하면 지는 것 같아서 못 하겠어"', 1],
      ['"연락했다가 거절당할까 봐 무서워"', 2],
    ],
  },
];

export const phase3CantMakeUpReasonQuestions: Phase3CantMakeUpReasonQuestion[] = RAW_QUESTIONS.map((item, idx) => ({
  id: idx + 1,
  question: withForeign(item.q, (loc) => PHASE3_CANT_MAKE_UP_REASON_I18N[loc].questions[idx].q),
  options: item.opts.map(([text, score], oi) => ({
    text: withForeign(text, (loc) => PHASE3_CANT_MAKE_UP_REASON_I18N[loc].questions[idx].opts[oi]),
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
  'blockedMoment',
  'partnerSees',
  'groupChatCharacter',
  'strengths',
  'reasonDetail',
  'frequentSaying',
  'changeTips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (Exclude<keyof Phase3CantMakeUpReasonResultText, 'counselingNote'>)[];

const KO_RESULTS: Phase3CantMakeUpReasonResult[] = [
  {
    type: 'Type1',
    emoji: '👑',
    title: L('먼저 숙이면 지는 것 같은 사람, 자존심 지킴형'),
    typeName: L('자존심 지킴형'),
    realReason: L('먼저 연락하는 것이 내가 틀렸다는 인정처럼 느껴진다'),
    shortDescription: L(
      '당신은 화해가 싫은 게 아닙니다. 먼저 손을 내미는 순간 지는 것 같아서 버티고 있습니다.'
    ),
    description: L(
      '연락 순서가 곧 승패처럼 느껴져 상대가 먼저 오길 기다립니다. 자존심은 나를 지켜 주지만, 양쪽이 같은 마음으로 기다리면 냉전이 길어집니다.'
    ),
    keywords: L('먼저 하면 지는 것·버티기·연락 순서·오기'),
    blockedMoment: L('상대의 연락을 기다릴 때, 내가 먼저 보내야 할 차례일 때'),
    partnerSees: L('단단하지만 마음을 알기 어려운 사람'),
    groupChatCharacter: L('먼저 안 하는 척하지만 사실 제일 기다리는 사람'),
    strengths: L('자기 기준이 분명하고 스스로를 존중하는 단단함'),
    reasonDetail: L("화해를 '패배'로 해석해서 마음의 표현이 약함처럼 느껴짐"),
    frequentSaying: L('"걔가 먼저 연락해야지"'),
    changeTips: L(
      "먼저 연락하는 것은 지는 게 아니라 '관계를 고르는 선택'이라고 다시 정의하기\n\"이긴 사람 없이 풀고 싶어\" 같은 승패 없는 문장으로 시작하기\n연락 순서를 번갈아 맡자고 평소에 약속해 두기"
    ),
    oneLiner: L('먼저 내민 손은 약함이 아니라 용기입니다. 이기는 것보다 풀리는 쪽이 오래갑니다'),
    shareLine: L(
      "싸우고 화해를 못 하는 진짜 이유: 자존심 지킴형 👑 먼저 숙이면 지는 것 같아서래ㅋㅋ 내 단톡방 캐릭터는 '먼저 안 하는 척하지만 제일 기다리는 사람'... 너희는 뭐 나왔어?"
    ),
  },
  {
    type: 'Type2',
    emoji: '🥶',
    title: L('연락했다 거절당할까 겁나는 사람, 거절 두려움형'),
    typeName: L('거절 두려움형'),
    realReason: L('손을 내밀었다가 차갑게 거절당하는 장면이 먼저 떠오른다'),
    shortDescription: L(
      '당신은 마음이 없는 게 아닙니다. 아직 일어나지 않은 거절의 아픔을 미리 느끼고 있습니다.'
    ),
    description: L(
      '입력창을 열었다 닫고, 답이 안 올 상황을 상상하느라 보내지 못합니다. 상처를 피하려는 마음이 화해의 기회까지 막고 있습니다.'
    ),
    keywords: L('거절 상상·입력창 열었다 닫기·읽씹 공포·확인 회피'),
    blockedMoment: L('메시지를 쓸 때, 상대가 답이 없을 때'),
    partnerSees: L('조용하고 마음을 숨기는 사람'),
    groupChatCharacter: L('썼다 지우기 장인, 임시저장함 부자'),
    strengths: L('관계를 소중히 여기고 상대 마음을 세심하게 살피는 섬세함'),
    reasonDetail: L("상대의 반응이 아니라 '거절당하면 감당 못 한다'는 내 안의 예상이 문제"),
    frequentSaying: L('"답이 안 오면 어떡해"'),
    changeTips: L(
      "답이 안 오는 최악의 상황과 '그래도 감당할 수 있는 부분'을 함께 적어 보기\n긴 글 대신 \"보고 싶어, 얘기하고 싶어\" 한 줄만 보내기\n답이 늦어도 '읽었다'는 것만으로 전해졌다고 생각하기"
    ),
    oneLiner: L('한 줄이면 충분합니다. 보내는 순간 상상 속 거절보다 현실의 답이 훨씬 가볍습니다'),
    shareLine: L(
      "싸우고 화해를 못 하는 진짜 이유: 거절 두려움형 🥶 보냈다 읽씹당할까 봐 겁나서래... 내 단톡방 캐릭터는 '임시저장함 부자' 소름ㅠ 너희는?"
    ),
    counselingNote: L(
      '거절에 대한 두려움이 연애뿐 아니라 일상 전반에서 크게 힘들다면 심리상담 전문가와 이야기해 보세요'
    ),
  },
  {
    type: 'Type3',
    emoji: '⏳',
    title: L('때를 재다 놓치는 사람, 타이밍 놓침형'),
    typeName: L('타이밍 놓침형'),
    realReason: L('좋은 때를 기다리다 시간이 지나 연락이 점점 어려워진다'),
    shortDescription: L(
      "당신은 화해할 마음이 있습니다. 다만 '지금은 아닌 것 같아'가 반복되며 시간이 흘러가고 있습니다."
    ),
    description: L(
      '하루가 이틀이 되고 이틀이 일주일이 되면 처음의 싸움보다 침묵이 더 큰 장벽이 됩니다. 완벽한 때는 오지 않고, 늦을수록 말 꺼내기만 어려워집니다.'
    ),
    keywords: L('지금은 아님·미루기·너무 늦은 느낌·시간 재기'),
    blockedMoment: L('연락할 때를 고를 때, 하루가 더 지났을 때'),
    partnerSees: L('마음은 있어 보이는데 행동이 느린 사람'),
    groupChatCharacter: L('내일 연락할게의 달인'),
    strengths: L('상대 상황을 배려하고 신중하게 때를 고르는 마음'),
    reasonDetail: L('때를 고르는 게 아니라 말을 꺼내는 부담을 줄이려고 미루는 습관'),
    frequentSaying: L('"내일 보내야지"'),
    changeTips: L(
      "싸운 뒤 '24시간 안에 한 줄 보내기' 규칙을 정하기\n이미 늦었더라도 \"연락이 늦어서 미안해\" 한 줄로 시작하기\n타이밍을 고민하는 시간을 10분으로 제한하기"
    ),
    oneLiner: L('가장 좋은 타이밍은 지금입니다. 늦었다는 사과가 오히려 문을 엽니다'),
    shareLine: L(
      "싸우고 화해를 못 하는 진짜 이유: 타이밍 놓침형 ⏳ 때 재다가 놓치는 거래ㅋㅋ 내 단톡방 캐릭터는 '내일 연락할게의 달인' 인정... 너희는 뭐 나왔어?"
    ),
  },
  {
    type: 'Type4',
    emoji: '🌧️',
    title: L('서운함이 풀리지 않은 사람, 서운함 쌓임형'),
    typeName: L('서운함 쌓임형'),
    realReason: L('인정받지 못한 서운함이 남아 있어 화해할 마음이 먼저 움직이지 않는다'),
    shortDescription: L(
      '당신은 화해가 싫은 게 아닙니다. 내 서운함이 아직 한 번도 제대로 받아들여지지 않았습니다.'
    ),
    description: L(
      "연락은 할 수 있어도, 사과나 이해를 받지 못한 마음이 남아 있으면 화해가 '또 내가 참는 일'처럼 느껴집니다. 서운함을 말로 꺼내지 않으면 같은 싸움이 반복됩니다."
    ),
    keywords: L('인정받고 싶음·쌓인 서운함·사과 기다림·마음의 문 닫힘'),
    blockedMoment: L('사과 없는 연락을 받을 때, 서운한 이유가 떠오를 때'),
    partnerSees: L('말은 없지만 속으로 많이 쌓아 두는 사람'),
    groupChatCharacter: L('조용히 장부 쓰는 사람'),
    strengths: L('감정이 깊고 관계에서 존중받고 싶은 기준이 분명함'),
    reasonDetail: L("화해 자체보다 '내 마음을 알아줬으면' 하는 바람이 먼저 채워져야 하는 상태"),
    frequentSaying: L('"내가 얼마나 서운했는지는 알아?"'),
    changeTips: L(
      "화해 연락 전에 서운했던 점을 '사실 한 줄 + 내 마음 한 줄'로 먼저 적어 보기\n\"화해하고 싶어. 그런데 이 부분은 서운했어\"를 한 번에 말하기\n사과를 기다리기보다 원하는 한마디를 직접 요청하기"
    ),
    oneLiner: L('서운함은 말해야 풀립니다. 화해와 서운함을 한 문장에 함께 담아 보세요'),
    shareLine: L(
      "싸우고 화해를 못 하는 진짜 이유: 서운함 쌓임형 🌧️ 서운함이 안 풀려서래... 내 단톡방 캐릭터는 '조용히 장부 쓰는 사람' 찔림ㅠ 너희는?"
    ),
  },
];

export const phase3CantMakeUpReasonResults: Phase3CantMakeUpReasonResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3CantMakeUpReasonResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_CANT_MAKE_UP_REASON_I18N[loc].results[ri][key]);
  }
  const koNote = r.counselingNote?.ko;
  if (koNote) {
    merged.counselingNote = withForeign(koNote, (loc) => {
      const note = PHASE3_CANT_MAKE_UP_REASON_I18N[loc].results[ri].counselingNote;
      return note || koNote;
    });
  }
  return merged;
});

export const PHASE3_CANT_MAKE_UP_REASON_META = {
  title: withForeign('싸우고 화해를 못 하는 진짜 이유', (loc) => PHASE3_CANT_MAKE_UP_REASON_I18N[loc].meta.title),
  description: withForeign(
    '먼저 연락하고 싶은데 손이 안 갈 때. 12가지 상황으로 자존심·거절 두려움·타이밍·서운함 중 내 손을 붙잡는 진짜 이유를 알려드립니다.',
    (loc) => PHASE3_CANT_MAKE_UP_REASON_I18N[loc].meta.description
  ),
  tags: {
    ko: ['연애싸움', '연애테스트'],
    en: PHASE3_CANT_MAKE_UP_REASON_I18N.en.meta.tags,
    ja: PHASE3_CANT_MAKE_UP_REASON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_CANT_MAKE_UP_REASON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_CANT_MAKE_UP_REASON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_CANT_MAKE_UP_REASON_I18N.vi.meta.tags,
    id: PHASE3_CANT_MAKE_UP_REASON_I18N.id.meta.tags,
  } as Record<Phase3CantMakeUpReasonLocaleKey, string[]>,
};
