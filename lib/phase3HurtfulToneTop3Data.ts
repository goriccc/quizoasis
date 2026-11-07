/**
 * 연인이 서운해하는 나의 말투 TOP3
 * slug: phase3-hurtful-tone-top3
 * 12문항 4지선다 · 8항목 상위 3개
 */

import {
  PHASE3_HURTFUL_TONE_I18N,
  type Phase3HurtfulToneForeignLocale,
} from './phase3HurtfulToneTop3I18n';

export type Phase3HurtfulToneLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3HurtfulToneText = Record<Phase3HurtfulToneLocaleKey, string>;
export type Phase3HurtfulToneId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Phase3HurtfulToneFamilyId = 'cold' | 'avoid' | 'respect' | 'balance';

function L(ko: string): Phase3HurtfulToneText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_HURTFUL_TONE_I18N) as Phase3HurtfulToneForeignLocale[];

function withForeign(
  ko: string,
  pickFn: (loc: Phase3HurtfulToneForeignLocale) => string,
): Phase3HurtfulToneText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);
  return t;
}

function pick(text: Phase3HurtfulToneText, locale: string): string {
  const loc = locale as Phase3HurtfulToneLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3HurtfulToneOption {
  text: Phase3HurtfulToneText;
  category: Phase3HurtfulToneId;
}

export interface Phase3HurtfulToneQuestion {
  id: number;
  question: Phase3HurtfulToneText;
  options: Phase3HurtfulToneOption[];
}

export interface Phase3HurtfulToneCard {
  id: Phase3HurtfulToneId;
  emoji: string;
  animal: Phase3HurtfulToneText;
  name: Phase3HurtfulToneText;
  family: Exclude<Phase3HurtfulToneFamilyId, 'balance'>;
  tieRank: number;
  partnerView: Phase3HurtfulToneText;
  groupchatCharacter: Phase3HurtfulToneText;
  heardAs: Phase3HurtfulToneText;
  mindBehind: Phase3HurtfulToneText;
  strength: Phase3HurtfulToneText;
  changeLine: Phase3HurtfulToneText;
  oneLiner: Phase3HurtfulToneText;
  note: Phase3HurtfulToneText;
  barColor: string;
}

export interface Phase3HurtfulToneFamily {
  id: Phase3HurtfulToneFamilyId;
  emoji: string;
  title: Phase3HurtfulToneText;
  description: Phase3HurtfulToneText;
  practice: Phase3HurtfulToneText;
  shareLine: Phase3HurtfulToneText;
}

export interface Phase3HurtfulToneRanked {
  card: Phase3HurtfulToneCard;
  score: number;
  rank: number;
}

export interface Phase3HurtfulToneOutcome {
  ranked: Phase3HurtfulToneRanked[];
  top3: Phase3HurtfulToneRanked[];
  closeFourth: Phase3HurtfulToneRanked | null;
  family: Phase3HurtfulToneFamily;
  shareLine: string;
}

const RAW_QUESTIONS: { q: string; opts: [string, Phase3HurtfulToneId][] }[] = [
  {
    q: '연인과 대화할 때 내가 자주 하는 쪽은?',
    opts: [
      ['연인의 긴 이야기에 "응", "그래"만 짧게 답한다', 1],
      ['서운하다는 말에 "나도 바빴어"부터 꺼낸다', 2],
      ['진지한 얘기 중에 "ㅋㅋ 왜 이래" 하고 웃어 넘긴다', 3],
      ['마음에 안 드는 말에 크게 한숨부터 쉰다', 4],
    ],
  },
  {
    q: '연인과 있을 때 내가 자주 하는 쪽은?',
    opts: [
      ['"전 애인은 안 그랬는데"라고 무심코 견준다', 5],
      ['연인이 말하는 중에 "알았어 알았어"라며 끊는다', 6],
      ['이번 주 약속을 깜빡해 당일에야 떠올린다', 7],
      ['연인이 챙겨 줘도 고맙다는 말 없이 넘어간다', 8],
    ],
  },
  {
    q: '연인이 내 단점을 이야기할 때 내가 자주 하는 쪽은?',
    opts: [
      ['"그건 상황이 그랬어"라고 먼저 해명한다', 2],
      ['메시지에 "ㅇㅇ", "몰라" 같은 한두 글자로 답한다', 1],
      ['결론을 짐작해 "아 그 얘기구나" 하고 말을 자른다', 6],
      ['"친구네 커플은 안 이러던데"라고 말한다', 5],
    ],
  },
  {
    q: '연인이 속상한 마음을 꺼낼 때 내가 자주 하는 쪽은?',
    opts: [
      ['같은 얘기가 또 나오면 고개를 젓고 한숨을 쉰다', 4],
      ['"ㅋㅋ 에이 설마" 하고 장난으로 받는다', 3],
      ['좋았던 일에도 "좋다"는 말 한마디 없이 지나간다', 8],
      ['중요하다고 했던 일정을 또 잊어서 미안해한다', 7],
    ],
  },
  {
    q: '연인과 기념일이나 일상을 보낼 때 내가 자주 하는 쪽은?',
    opts: [
      ['생일 선물 준비를 미루다 날짜를 놓친다', 7],
      ['"그 사람 연봉이 더 높던데"처럼 다른 사람과 견준다', 5],
      ['연인이 물어도 "그냥"이라고만 대답한다', 1],
      ['속상하다는 얘기를 "너 오늘 왜 이렇게 진지해?"라며 가볍게 돌린다', 3],
    ],
  },
  {
    q: '연인이 나를 위해 노력했을 때 내가 자주 하는 쪽은?',
    opts: [
      ['애써 준비한 이벤트에 "음 괜찮네"만 말한다', 8],
      ['연인이 말하는 도중 눈을 굴리며 한숨을 쉰다', 4],
      ['"나도 힘들었다고"라며 내 사정부터 꺼낸다', 2],
      ['설명하는 중에 "됐어 알겠어"라고 말을 막는다', 6],
    ],
  },
  {
    q: '연인에게 미안한 상황에서 내가 자주 하는 쪽은?',
    opts: [
      ['사과하기 전에 "일이 너무 많아서 그랬어"라고 먼저 변명한다', 2],
      ['"내일 꼭 갈게"라고 했던 약속을 까맣게 잊는다', 7],
      ['사랑한다는 말을 해 달라 해도 쑥스럽다며 넘긴다', 8],
      ['통화 중 "어", "응"만 반복한다', 1],
    ],
  },
  {
    q: '연인이 서운함을 털어놓을 때 내가 자주 하는 쪽은?',
    opts: [
      ['"에이 그걸 뭘 그렇게 심각해" 하고 웃는다', 3],
      ['"그만, 결론만 말해"라며 자른다', 6],
      ['연인이 말을 꺼내자 "하…" 하고 숨을 길게 내쉰다', 4],
      ['"다른 커플은 이런 걸로 안 싸우던데"라고 말한다', 5],
    ],
  },
  {
    q: '연인이 질문하거나 하루를 이야기할 때 내가 자주 하는 쪽은?',
    opts: [
      ['질문이 끝나기도 전에 "응 알아" 하고 답한다', 6],
      ['고생한 날에도 "수고했어" 한마디를 하지 않는다', 8],
      ['서운해하면 "그 정도로 삐졌어? ㅋㅋ"라고 넘긴다', 3],
      ['긴 메시지에 "ㅇㅇ 알았어"만 보낸다', 1],
    ],
  },
  {
    q: '연인의 실수나 부탁 앞에서 내가 자주 하는 쪽은?',
    opts: [
      ['실수에 한숨부터 쉬며 못마땅함을 드러낸다', 4],
      ['기념일을 며칠 지나서야 알아채고 당황한다', 7],
      ['"네 친구는 이런 것도 해 주던데"라고 비교한다', 5],
      ['약속에 늦은 이유를 먼저 길게 설명한다', 2],
    ],
  },
  {
    q: '연인과 하루를 보낼 때 내가 자주 하는 쪽은?',
    opts: [
      ['연인의 외모나 성격을 다른 사람과 견준다', 5],
      ['하루 종일 연락에 "ㅇㅇ"과 "ㅇㅋ"만 보낸다', 1],
      ['연인의 말이 길어지면 한숨을 쉬며 시계를 본다', 4],
      ['연인이 노력해도 따뜻한 반응 없이 담담하게 넘긴다', 8],
    ],
  },
  {
    q: '연인과 갈등이 생겼을 때 내가 자주 하는 쪽은?',
    opts: [
      ['빌려 주기로 한 물건을 약속한 날 챙기지 못한다', 7],
      ['싸움 도중 "ㅋㅋ 이제 그만하자 웃기잖아"라고 분위기를 가볍게 만든다', 3],
      ['말하는 중간에 "아니, 그게 아니라" 하고 끼어든다', 6],
      ['"그때는 내가 어쩔 수 없었어"라고 설명부터 한다', 2],
    ],
  }
];

export const phase3HurtfulToneTop3Questions: Phase3HurtfulToneQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_HURTFUL_TONE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, category], oi) => ({
      text: withForeign(text, (loc) => PHASE3_HURTFUL_TONE_I18N[loc].questions[idx].opts[oi]),
      category,
    })),
  }),
);

export const PHASE3_HURTFUL_TONE_MAX = 6;

const EMPTY = L('');

const KO_CARDS: Phase3HurtfulToneCard[] = [
  {
    id: 1,
    emoji: '🪫',
    animal: L('무심한 단답'),
    name: L('무심한 단답'),
    family: 'cold',
    tieRank: 1,
    partnerView: L('대화에 관심이 없어 보이는 사람'),
    groupchatCharacter: L("읽고 'ㅇㅇ' 한마디 남기는 사람"),
    heardAs: L('네 이야기는 길게 들을 만큼 중요하지 않아'),
    mindBehind: L('귀찮은 게 아니라 길게 말하는 게 어색하거나 피곤한 상태'),
    strength: L('군더더기 없이 간결한 태도'),
    changeLine: L('응, 그랬구나. 더 얘기해 줘'),
    oneLiner: L('짧은 말도 괜찮습니다. 질문 하나만 더하면 관심이 전해집니다'),
    note: EMPTY,
    barColor: '#64748b',
  },
  {
    id: 2,
    emoji: '🛡️',
    animal: L('핑계 먼저'),
    name: L('핑계 먼저'),
    family: 'avoid',
    tieRank: 2,
    partnerView: L('인정보다 변명이 먼저 나오는 사람'),
    groupchatCharacter: L("'아니 그게 아니라'로 시작하는 사람"),
    heardAs: L('내 서운함보다 내 사정이 더 중요해'),
    mindBehind: L('비난받고 싶지 않은 두려움'),
    strength: L('상황을 논리적으로 설명하려는 의지'),
    changeLine: L('서운했겠다, 미안해. 이유는 이따 설명할게'),
    oneLiner: L('이유 앞에 인정 한마디를 놓으면 해명도 위로가 됩니다'),
    note: EMPTY,
    barColor: '#0ea5e9',
  },
  {
    id: 3,
    emoji: '🎭',
    animal: L('농담으로 넘김'),
    name: L('농담으로 넘김'),
    family: 'avoid',
    tieRank: 5,
    partnerView: L('진지한 이야기를 가볍게 만드는 사람'),
    groupchatCharacter: L('분위기 깨질까 봐 ㅋㅋ부터 치는 사람'),
    heardAs: L('네 서운함은 웃어넘길 일이야'),
    mindBehind: L('무거운 분위기가 불편해 풀어 주고 싶은 마음'),
    strength: L('분위기를 밝게 만드는 재치'),
    changeLine: L('웃기려는 게 아니라, 진지하게 들을게'),
    oneLiner: L('재치는 매력입니다. 진지한 순간엔 농담을 잠시 내려놓아 주세요'),
    note: EMPTY,
    barColor: '#a855f7',
  },
  {
    id: 4,
    emoji: '😮‍💨',
    animal: L('한숨 쉬기'),
    name: L('한숨 쉬기'),
    family: 'cold',
    tieRank: 3,
    partnerView: L('말하기만 해도 눈치가 보이게 하는 사람'),
    groupchatCharacter: L('말 없이 한숨으로 대답하는 사람'),
    heardAs: L('또 시작이야, 지겹다'),
    mindBehind: L('지치고 감당하기 벅찬 마음'),
    strength: L('감정을 솔직하게 몸으로 드러내는 정직함'),
    changeLine: L('지금 좀 지쳐서 그래, 10분만 쉬고 들을게'),
    oneLiner: L('한숨은 말로 바꾸면 사라집니다. 지쳤다고 먼저 말해 주세요'),
    note: EMPTY,
    barColor: '#6366f1',
  },
  {
    id: 5,
    emoji: '⚖️',
    animal: L('비교하기'),
    name: L('비교하기'),
    family: 'respect',
    tieRank: 6,
    partnerView: L('있는 그대로를 인정해 주지 않는 사람'),
    groupchatCharacter: L("'누구는 이러던데'를 입에 달고 사는 사람"),
    heardAs: L('넌 다른 사람보다 부족해'),
    mindBehind: L('비교가 아니라 이렇게 해 줬으면 하는 바람'),
    strength: L('관계에 대한 기대와 기준이 분명함'),
    changeLine: L('나는 이런 걸 해 주면 정말 좋을 것 같아'),
    oneLiner: L('바람은 말해도 되지만 비교는 상처가 됩니다. 사람 이름을 빼고 말해 보세요'),
    note: EMPTY,
    barColor: '#e11d48',
  },
  {
    id: 6,
    emoji: '✂️',
    animal: L('말 끊기'),
    name: L('말 끊기'),
    family: 'respect',
    tieRank: 4,
    partnerView: L('끝까지 들어 주지 않는 사람'),
    groupchatCharacter: L('문장이 끝나기 전에 끼어드는 사람'),
    heardAs: L('네 이야기는 끝까지 들을 필요 없어'),
    mindBehind: L('빨리 해결하고 싶거나 이미 아는 이야기 같은 조급함'),
    strength: L('핵심을 빠르게 파악하는 감각'),
    changeLine: L('끝까지 들어 볼게, 다 말해 줘'),
    oneLiner: L('빠른 이해도 좋지만 끝까지 들어야 마음이 전해집니다'),
    note: EMPTY,
    barColor: '#f59e0b',
  },
  {
    id: 7,
    emoji: '📅',
    animal: L('약속 잊음'),
    name: L('약속 잊음'),
    family: 'avoid',
    tieRank: 8,
    partnerView: L('내 일이라서 중요하지 않다고 느끼게 하는 사람'),
    groupchatCharacter: L("'아 맞다!' 장인"),
    heardAs: L('너와의 약속은 우선순위가 아니야'),
    mindBehind: L('마음이 없는 게 아니라 일정을 놓치는 습관'),
    strength: L('새 일을 즐기고 현재에 몰입하는 에너지'),
    changeLine: L('깜빡했어, 미안해. 오늘부터 알람 걸어 둘게'),
    oneLiner: L('기억은 마음의 증거로 읽힙니다. 알람이 사랑을 대신 챙겨 줍니다'),
    note: EMPTY,
    barColor: '#0284c7',
  },
  {
    id: 8,
    emoji: '🔒',
    animal: L('표현 부족'),
    name: L('표현 부족'),
    family: 'cold',
    tieRank: 7,
    partnerView: L('마음이 있는지 알 수 없는 사람'),
    groupchatCharacter: L('반응은 없는데 다 읽고 있는 사람'),
    heardAs: L('네 노력이 보이지 않아'),
    mindBehind: L('고마움과 애정은 있지만 말로 꺼내기 쑥스러운 마음'),
    strength: L('말보다 행동과 진심을 무겁게 여기는 태도'),
    changeLine: L('쑥스럽지만 말할게, 고마워'),
    oneLiner: L('마음이 있어도 말하지 않으면 닿지 않습니다. 한마디면 충분합니다'),
    note: EMPTY,
    barColor: '#059669',
  },
];

const CARD_TEXT_KEYS = [
  'name',
  'partnerView',
  'groupchatCharacter',
  'heardAs',
  'mindBehind',
  'strength',
  'changeLine',
  'oneLiner',
] as const;

export const phase3HurtfulToneCards: Phase3HurtfulToneCard[] = KO_CARDS.map((card, ci) => {
  const merged: Phase3HurtfulToneCard = { ...card };
  for (const key of CARD_TEXT_KEYS) {
    merged[key] = withForeign(card[key].ko, (loc) => PHASE3_HURTFUL_TONE_I18N[loc].cards[ci][key]);
  }
  merged.animal = merged.name;
  return merged;
});

const KO_FAMILIES: Phase3HurtfulToneFamily[] = [
  {
    id: 'cold',
    emoji: '🪫',
    title: L("연인이 서운해하는 이유는 '온기가 전달되지 않아서'입니다."),
    description: L(
      '단답, 한숨, 표현 부족은 모두 마음이 없다는 신호로 읽힙니다. 마음은 있는데 표현이 모자란 경우가 대부분입니다. 하루 한 번 감정 단어를 넣는 습관이 가장 효과적입니다.',
    ),
    practice: L('별건 아닌데, 오늘 네 얘기 듣고 싶었어'),
    shareLine: L(
      "연인이 서운해하는 나의 말투 TOP3: 1위 {first} 2위 {second} 3위 {third}... 차가운 계열이래ㅋㅋ 내 단톡방 캐릭터는 '{character}' 인증... 너희는?",
    ),
  },
  {
    id: 'avoid',
    emoji: '🌀',
    title: L("연인이 서운해하는 이유는 '내 마음이 정면으로 받아들여지지 않아서'입니다."),
    description: L(
      '변명, 농담, 약속 놓침은 불편한 순간을 피하는 방식입니다. 상대는 진지하게 들어 주지 않는다고 느낍니다. 불편함을 3초만 견디고 인정 한마디를 먼저 하는 연습이 도움이 됩니다.',
    ),
    practice: L('그 마음 이해해, 일단 들을게'),
    shareLine: L(
      "연인이 서운해하는 나의 말투 TOP3: 1위 {first} 2위 {second} 3위 {third}... 회피 계열이래... 내 단톡방 캐릭터는 '{character}' 찔린다 너희는?",
    ),
  },
  {
    id: 'respect',
    emoji: '⚖️',
    title: L("연인이 서운해하는 이유는 '존중받지 못했다고 느껴서'입니다."),
    description: L(
      '비교와 말 끊기는 내용보다 태도로 상처를 줍니다. 급하게 해결하려는 마음이나 기대가 말투를 날카롭게 만듭니다. 끝까지 듣기와 사람 이름 빼고 바람 말하기를 연습해 보세요.',
    ),
    practice: L('끝까지 들을게. 그리고 나는 이렇게 해 주면 좋겠어'),
    shareLine: L(
      "연인이 서운해하는 나의 말투 TOP3: 1위 {first} 2위 {second} 3위 {third}... 존중 계열이래ㅋㅋ 내 단톡방 캐릭터는 '{character}' 인정... 너희는?",
    ),
  },
  {
    id: 'balance',
    emoji: '🎛️',
    title: L('당신의 서운 말투는 한 영역에 몰려 있지 않고 여러 영역에 흩어져 있습니다.'),
    description: L(
      "온기, 정면 대응, 존중 각각에서 서운해질 지점이 있어 상황에 따라 달라 보입니다. 공통점은 '내 마음이 어떻게 들릴지 잘 모른다'는 점입니다. 한 주에 한 번 \"내 말투 어땠어?\"라고 연인에게 묻는 습관이 가장 큰 도움이 됩니다.",
    ),
    practice: L('내 말투 중에 서운했던 게 있으면 말해 줘, 고칠게'),
    shareLine: L(
      "연인이 서운해하는 나의 말투 TOP3: 1위 {first} 2위 {second} 3위 {third}... 여기저기 흩어진 균형형이래ㅋㅋ 내 단톡방 캐릭터는 '{character}' 인증! 너희가 본 나는?",
    ),
  },
];

const FAMILY_TEXT_KEYS = ['title', 'description', 'practice', 'shareLine'] as const;

export const phase3HurtfulToneFamilies: Phase3HurtfulToneFamily[] = KO_FAMILIES.map(
  (family, fi) => {
    const merged: Phase3HurtfulToneFamily = { ...family };
    for (const key of FAMILY_TEXT_KEYS) {
      merged[key] = withForeign(
        family[key].ko,
        (loc) => PHASE3_HURTFUL_TONE_I18N[loc].families[fi][key],
      );
    }
    return merged;
  },
);

export function calculatePhase3HurtfulToneTop3(
  answers: number[],
  locale: string,
): Phase3HurtfulToneOutcome {
  const scores = new Map<Phase3HurtfulToneId, number>();
  phase3HurtfulToneCards.forEach((card) => scores.set(card.id, 0));
  answers.forEach((category) => {
    const id = category as Phase3HurtfulToneId;
    if (!scores.has(id)) return;
    scores.set(id, (scores.get(id) ?? 0) + 1);
  });

  const ranked: Phase3HurtfulToneRanked[] = phase3HurtfulToneCards
    .map((card) => ({ card, score: scores.get(card.id) ?? 0, rank: 0 }))
    .sort((a, b) => b.score - a.score || a.card.tieRank - b.card.tieRank)
    .map((item, index) => ({ ...item, rank: index + 1 }));

  const top3 = ranked.slice(0, 3);
  const fourth = ranked[3];
  const closeFourth = fourth && top3[2] && fourth.score === top3[2].score ? fourth : null;

  const familyCounts: Record<Exclude<Phase3HurtfulToneFamilyId, 'balance'>, number> = {
    cold: 0,
    avoid: 0,
    respect: 0,
  };
  top3.forEach((item) => {
    familyCounts[item.card.family] += 1;
  });
  const paired = (
    Object.keys(familyCounts) as Array<Exclude<Phase3HurtfulToneFamilyId, 'balance'>>
  ).find((family) => familyCounts[family] >= 2);
  const familyId: Phase3HurtfulToneFamilyId = paired ?? 'balance';
  const family =
    phase3HurtfulToneFamilies.find((item) => item.id === familyId) ?? phase3HurtfulToneFamilies[3];

  const names = top3.map((item) => pick(item.card.name, locale));
  const character = pick(top3[0]?.card.groupchatCharacter ?? L(''), locale);
  const shareLine = pick(family.shareLine, locale)
    .replace('{first}', names[0] ?? '')
    .replace('{second}', names[1] ?? '')
    .replace('{third}', names[2] ?? '')
    .replace('{character}', character);

  return { ranked, top3, closeFourth, family, shareLine };
}

export function hurtfulToneText(text: Phase3HurtfulToneText, locale: string): string {
  return pick(text, locale);
}

export const PHASE3_HURTFUL_TONE_TOP3_META = {
  title: withForeign(
    '연인이 서운해하는 나의 말투 TOP3',
    (loc) => PHASE3_HURTFUL_TONE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '나는 몰랐는데, 상대는 서운했던 말투가 있다면? 12가지 장면에서 연인이 서운해할 가능성이 큰 말투 TOP3를 알려드립니다.',
    (loc) => PHASE3_HURTFUL_TONE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['대화스타일', '연애테스트'],
    en: PHASE3_HURTFUL_TONE_I18N.en.meta.tags,
    ja: PHASE3_HURTFUL_TONE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_HURTFUL_TONE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_HURTFUL_TONE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_HURTFUL_TONE_I18N.vi.meta.tags,
    id: PHASE3_HURTFUL_TONE_I18N.id.meta.tags,
  },
};
