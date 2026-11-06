/**
 * 연애 불안 버튼 TOP3
 * slug: phase3-anxiety-button-top3
 * 12문항 4지선다 · 8항목 상위 3개
 */

import {
  PHASE3_ANXIETY_BUTTON_I18N,
  type Phase3AnxietyButtonForeignLocale,
} from './phase3AnxietyButtonTop3I18n';

export type Phase3AnxietyButtonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3AnxietyButtonText = Record<Phase3AnxietyButtonLocaleKey, string>;
export type Phase3AnxietyButtonId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Phase3AnxietyButtonFamilyId = 'connection' | 'compare' | 'transparency' | 'balance';

function L(ko: string): Phase3AnxietyButtonText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_ANXIETY_BUTTON_I18N) as Phase3AnxietyButtonForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3AnxietyButtonForeignLocale) => string,
): Phase3AnxietyButtonText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function pick(text: Phase3AnxietyButtonText, locale: string): string {
  const loc = locale as Phase3AnxietyButtonLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3AnxietyButtonOption {
  text: Phase3AnxietyButtonText;
  category: Phase3AnxietyButtonId;
}

export interface Phase3AnxietyButtonQuestion {
  id: number;
  question: Phase3AnxietyButtonText;
  options: Phase3AnxietyButtonOption[];
}

export interface Phase3AnxietyButtonCard {
  id: Phase3AnxietyButtonId;
  emoji: string;
  /** UI 호환용 — 버튼명과 동일 */
  animal: Phase3AnxietyButtonText;
  name: Phase3AnxietyButtonText;
  family: Exclude<Phase3AnxietyButtonFamilyId, 'balance'>;
  tieRank: number;
  thought: Phase3AnxietyButtonText;
  mindBehind: Phase3AnxietyButtonText;
  behavior: Phase3AnxietyButtonText;
  strength: Phase3AnxietyButtonText;
  calmLine: Phase3AnxietyButtonText;
  toPartner: Phase3AnxietyButtonText;
  oneLiner: Phase3AnxietyButtonText;
  note: Phase3AnxietyButtonText;
  barColor: string;
}

export interface Phase3AnxietyButtonFamily {
  id: Phase3AnxietyButtonFamilyId;
  emoji: string;
  title: Phase3AnxietyButtonText;
  description: Phase3AnxietyButtonText;
  practice: Phase3AnxietyButtonText;
  shareLine: Phase3AnxietyButtonText;
}

export interface Phase3AnxietyButtonRanked {
  card: Phase3AnxietyButtonCard;
  score: number;
  rank: number;
}

export interface Phase3AnxietyButtonOutcome {
  ranked: Phase3AnxietyButtonRanked[];
  top3: Phase3AnxietyButtonRanked[];
  closeFourth: Phase3AnxietyButtonRanked | null;
  family: Phase3AnxietyButtonFamily;
  shareLine: string;
}

const RAW_QUESTIONS: { q: string; opts: [string, Phase3AnxietyButtonId][] }[] = [
  {
    q: '연인과의 연락·SNS에서 이런 일이 생겼다면, 가장 마음이 철렁할 순간은?',
    opts: [
      ['보낸 메시지에 읽음 표시만 뜨고 답이 없다', 1],
      ['평소 칼답이던 연인이 반나절째 답이 없다', 2],
      ['연인이 이성 친구와 둘이 밥을 먹었다고 말한다', 3],
      ['연인이 낯선 이성의 사진에 좋아요를 눌렀다', 4],
    ],
  },
  {
    q: '연인이 평소와 다른 행동을 한다. 가장 마음이 철렁하는 순간은?',
    opts: [
      ['잘 통하던 대화 중에 연인이 갑자기 말이 없어진다', 5],
      ['휴대폰을 건네던 연인이 화면을 급히 돌려 놓는다', 6],
      ['연인이 옛 연인과 갔던 곳을 추억처럼 이야기한다', 7],
      ['연인이 당일 아침에 약속을 다음으로 미루자고 한다', 8],
    ],
  },
  {
    q: '연인의 달라진 모습이 느껴진다. 가장 마음이 불편해지는 건?',
    opts: [
      ['연인의 답장이 하루 종일 몇 시간씩 늦게 온다', 2],
      ['질문에 읽음만 남기고 다른 이야기로 넘어간다', 1],
      ['연인이 휴대폰 잠금을 새로 바꾸고 알려 주지 않는다', 6],
      ['이유 없이 연인의 말수가 줄고 표정이 굳는다', 5],
    ],
  },
  {
    q: '연인 주변에서 이런 일이 벌어진다면, 가장 마음이 쓰이는 건?',
    opts: [
      ['연인의 게시물에 낯선 이성이 다정한 댓글을 단다', 4],
      ['연인이 이성 동료와 늦은 밤까지 메시지를 주고받는다', 3],
      ['기다리던 기념일 계획이 연인의 사정으로 바뀐다', 8],
      ['연인이 옛 연인의 근황을 우연히 알게 됐다고 말한다', 7],
    ],
  },
  {
    q: '연인과 이야기를 나누다 이런 일이 생겼다. 가장 마음이 가라앉는 순간은?',
    opts: [
      ['연인이 "전에 만났던 사람은 이랬는데"라고 말을 꺼낸다', 7],
      ['통화하다 연인이 아무 설명 없이 한참 말이 없다', 5],
      ['긴 마음을 적어 보냈는데 읽음만 남고 반응이 없다', 1],
      ['연인이 이성 친구 모임에 나를 소개 없이 다녀온다', 3],
    ],
  },
  {
    q: '요즘 연인의 모습 중 가장 신경 쓰일 것 같은 건?',
    opts: [
      ['약속이 연달아 두 번 미뤄진다', 8],
      ['연인이 이성 계정을 새로 팔로우한 것을 알게 된다', 4],
      ['연인이 메시지를 확인하고도 저녁까지 답하지 않는다', 2],
      ['연인이 휴대폰을 늘 엎어 두고 알림을 감춘다', 6],
    ],
  },
  {
    q: '연인과의 관계에서 이런 신호가 보인다면, 가장 불안해지는 건?',
    opts: [
      ['평소와 달리 답장이 점점 길게 늦어진다', 2],
      ['연인이 옛 연인과 아직 연락하는지 애매하게 대답한다', 7],
      ['연인이 "이번 주는 어렵겠다"며 만남을 줄인다', 8],
      ['내 메시지만 읽음 표시로 남고 답이 오지 않는다', 1],
    ],
  },
  {
    q: '연인이 이런 모습을 보인다면, 가장 속이 타는 순간은?',
    opts: [
      ['연인이 이성 친구의 부탁은 바로 들어주러 나간다', 3],
      ['연인이 "그건 내 사생활이야"라며 휴대폰을 닫는다', 6],
      ['연인의 스토리에 이성의 이모티콘 반응이 가득하다', 4],
      ['다툰 뒤 연인이 이틀째 아무 말 없이 지낸다', 5],
    ],
  },
  {
    q: '연인에 대해 이런 느낌이 든다면, 가장 마음에 걸리는 순간은?',
    opts: [
      ['내 휴대폰은 보면서 자기 휴대폰은 감추는 연인을 본다', 6],
      ['연인이 이유를 말하지 않고 약속 장소를 바꾼다', 8],
      ['연인이 이성 동료와 출장을 같이 간다고 통보한다', 3],
      ['중요한 질문에 읽음 표시만 남기고 하루가 지난다', 1],
    ],
  },
  {
    q: '연인과 지내다 문득 이런 순간이 온다면, 가장 마음이 쓰이는 건?',
    opts: [
      ['연인이 내 게시물엔 반응이 없고 다른 사람 게시물엔 좋아요를 누른다', 4],
      ['연인의 방에서 옛 연인과 찍은 사진이 우연히 보인다', 7],
      ['즐겁게 웃던 연인이 갑자기 차분하게 입을 닫는다', 5],
      ['밤늦게 보낸 메시지의 답이 다음 날 점심에야 온다', 2],
    ],
  },
  {
    q: '평소와 달라진 연인을 보게 됐다. 가장 마음이 흔들리는 순간은?',
    opts: [
      ['평소와 달리 연인이 아무 이유 없이 연락을 멈춘다', 5],
      ['서운하다고 보낸 메시지에 읽음만 남고 답이 없다', 1],
      ['연인이 새로 알게 된 이성의 사진마다 좋아요를 누른다', 4],
      ['연인이 약속 직전에 "급한 일이 생겼어"라고 취소한다', 8],
    ],
  },
  {
    q: '마지막 질문. 연인에게서 가장 마주치고 싶지 않은 순간은?',
    opts: [
      ['연인이 옛 연인과 아직 인연이 있는 듯 말을 흐린다', 7],
      ['연인이 이성 친구에게만 속 얘기를 털어놓는다', 3],
      ['휴대폰 비밀번호를 물으면 연인이 화제를 돌린다', 6],
      ['바쁜 시간도 아닌데 연락이 몇 시간씩 느려진다', 2],
    ],
  },
];

export const phase3AnxietyButtonTop3Questions: Phase3AnxietyButtonQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, category], oi) => ({
      text: withForeign(text, (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].questions[idx].opts[oi]),
      category,
    })),
  }),
);

export const PHASE3_ANXIETY_BUTTON_MAX = 6;

const EMPTY = L('');

const CARD_TEXT_KEYS = [
  'name',
  'thought',
  'mindBehind',
  'behavior',
  'strength',
  'calmLine',
  'toPartner',
  'oneLiner',
] as const;

const KO_CARDS: Phase3AnxietyButtonCard[] = [
  {
    id: 1,
    emoji: '👁️',
    animal: L('읽씹'),
    name: L('읽씹'),
    family: 'connection',
    tieRank: 1,
    thought: L('내 이야기가 중요하지 않은 걸까?'),
    mindBehind: L('내 말이 받아들여지고 있다는 확인을 받고 싶은 마음'),
    behavior: L('메시지를 거듭 보내거나 대화창을 반복해서 확인하기'),
    strength: L('대화와 소통을 소중히 여기는 마음'),
    calmLine: L('읽음은 답이 아니라 확인일 뿐이야. 한 시간 내 일을 하고 다시 보자'),
    toPartner: L("답이 늦어도 괜찮은데, '확인했어' 한마디만 해 주면 안심돼"),
    oneLiner: L('읽음만으로 흔들리는 마음도 소중합니다. 확인 한마디면 충분합니다'),
    note: EMPTY,
    barColor: '#6366f1',
  },
  {
    id: 2,
    emoji: '⏳',
    animal: L('답장 지연'),
    name: L('답장 지연'),
    family: 'connection',
    tieRank: 4,
    thought: L('마음이 식은 건 아닐까?'),
    mindBehind: L('연인의 일상 속에 내가 있다는 안심을 받고 싶은 마음'),
    behavior: L('시간을 재거나 최악의 이유를 상상하기'),
    strength: L('관계의 온도 변화를 빨리 알아채는 섬세함'),
    calmLine: L('늦은 이유는 수십 가지야. 내가 아는 사실부터 적어 보자'),
    toPartner: L("바쁠 땐 '이따 연락할게' 한 줄만 남겨 주면 마음이 편해"),
    oneLiner: L('온도를 읽는 섬세함은 강점입니다. 사실부터 적어 보세요'),
    note: EMPTY,
    barColor: '#0ea5e9',
  },
  {
    id: 3,
    emoji: '👥',
    animal: L('이성 친구'),
    name: L('이성 친구'),
    family: 'compare',
    tieRank: 3,
    thought: L('내가 가장 중요한 사람 맞을까?'),
    mindBehind: L('우선순위에 대한 확신을 받고 싶은 마음'),
    behavior: L('누구인지 캐묻거나 상상으로 앞서 나가기'),
    strength: L('관계에 대한 애착과 책임감'),
    calmLine: L("질투는 자연스러워. 통제 대신 '불안해'라고 말하자"),
    toPartner: L('의심하는 건 아니고, 그 자리 얘기 미리 들으면 마음이 편해져'),
    oneLiner: L('우선순위를 확인하고 싶은 마음도 애착입니다'),
    note: EMPTY,
    barColor: '#e11d48',
  },
  {
    id: 4,
    emoji: '❤️‍🔥',
    animal: L('SNS 좋아요'),
    name: L('SNS 좋아요'),
    family: 'compare',
    tieRank: 6,
    thought: L('나만 보지 않는 걸 누군가는 보고 있나?'),
    mindBehind: L('나만 특별하다는 느낌을 확인하고 싶은 마음'),
    behavior: L('연인의 계정을 거듭 확인하거나 계정 활동을 따져 보기'),
    strength: L('애정이 크고 신호에 민감한 마음'),
    calmLine: L('좋아요 하나는 마음의 증거가 아니야. 계정 대신 내 마음을 보자'),
    toPartner: L('별일 아닌 걸 알지만 조금 신경 쓰였어. 얘기 들어 줄래?'),
    oneLiner: L('특별함을 확인하고 싶은 마음은 애정의 다른 얼굴입니다'),
    note: EMPTY,
    barColor: '#f43f5e',
  },
  {
    id: 5,
    emoji: '🤐',
    animal: L('갑작스러운 침묵'),
    name: L('갑작스러운 침묵'),
    family: 'connection',
    tieRank: 2,
    thought: L('내가 뭘 잘못했나?'),
    mindBehind: L('거리가 생긴 이유를 알아 안심하고 싶은 마음'),
    behavior: L('이유를 추측하며 눈치를 살피거나 먼저 사과하기'),
    strength: L('상대의 기분 변화를 세심하게 살피는 배려'),
    calmLine: L('침묵은 정리 중일 수도 있어. 이유를 묻기 전에 숨부터 고르자'),
    toPartner: L('말이 줄어서 걱정돼. 정리할 시간이 필요한 거면 알려 줘'),
    oneLiner: L('침묵 앞에서 흔들리는 것도 연결을 소중히 여기는 마음입니다'),
    note: EMPTY,
    barColor: '#8b5cf6',
  },
  {
    id: 6,
    emoji: '🔐',
    animal: L('비밀번호 숨김'),
    name: L('비밀번호 숨김'),
    family: 'transparency',
    tieRank: 7,
    thought: L('나에게 말 못 할 게 있는 걸까?'),
    mindBehind: L('투명하게 믿을 수 있는 관계이고 싶은 마음'),
    behavior: L('슬쩍 확인하고 싶은 충동이 올라오거나 단서를 모으기'),
    strength: L('솔직한 관계를 중요하게 여기는 기준'),
    calmLine: L('사생활과 비밀은 달라. 확인 대신 불안이라고 말하자'),
    toPartner: L('휴대폰을 보자는 게 아니라, 숨긴다는 느낌이 들어서 불안했어'),
    oneLiner: L('투명함을 원하는 기준은 관계를 지키는 힘입니다'),
    note: EMPTY,
    barColor: '#059669',
  },
  {
    id: 7,
    emoji: '📷',
    animal: L('옛 연인 얘기'),
    name: L('옛 연인 얘기'),
    family: 'compare',
    tieRank: 5,
    thought: L('나는 그 사람과 비교되는 걸까?'),
    mindBehind: L('지금의 나로 충분하다는 확인을 받고 싶은 마음'),
    behavior: L('옛 연인에 대해 캐묻거나 나를 낮춰 비교하기'),
    strength: L('관계의 현재와 미래를 소중히 여기는 마음'),
    calmLine: L('지난 사람은 과거고 지금 곁에 있는 건 나야. 비교가 아니라 지금을 보자'),
    toPartner: L('그 얘기 들으니 조금 불안했어. 지금 우리가 더 좋다는 말 해 줄래?'),
    oneLiner: L('지금으로 충분하다는 확인이 필요할 뿐입니다'),
    note: EMPTY,
    barColor: '#d97706',
  },
  {
    id: 8,
    emoji: '📅',
    animal: L('약속 변경'),
    name: L('약속 변경'),
    family: 'transparency',
    tieRank: 8,
    thought: L('내가 후순위가 된 걸까?'),
    mindBehind: L('약속된 시간에 대한 존중과 예측 가능한 안정감을 원하는 마음'),
    behavior: L('이유를 따지거나 말없이 기대를 접어 두기'),
    strength: L('약속과 시간을 소중히 여기는 성실함'),
    calmLine: L('바뀐 일정과 내 가치는 별개야. 다음 약속부터 정해 두자'),
    toPartner: L('일정이 바뀔 수 있는 건 알겠는데, 미리 알려 주면 훨씬 덜 서운해'),
    oneLiner: L('예측 가능한 약속을 원하는 마음도 관계의 성실함입니다'),
    note: EMPTY,
    barColor: '#0284c7',
  },
];

export const phase3AnxietyButtonCards: Phase3AnxietyButtonCard[] = KO_CARDS.map((card, ci) => {
  const merged: Phase3AnxietyButtonCard = { ...card };
  for (const key of CARD_TEXT_KEYS) {
    merged[key] = withForeign(card[key].ko, (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].cards[ci][key]);
  }
  merged.animal = merged.name;
  return merged;
});

const FAMILY_TEXT_KEYS = ['title', 'description', 'practice', 'shareLine'] as const;

const KO_FAMILIES: Phase3AnxietyButtonFamily[] = [
  {
    id: 'connection',
    emoji: '📡',
    title: L("당신의 불안 버튼은 '연결'에 있습니다. 연락과 반응의 빈칸에서 흔들립니다."),
    description: L(
      '읽음, 답장 시간, 갑작스러운 침묵은 모두 "나와 아직 이어져 있나?"라는 질문으로 번역됩니다. 연락 규칙(바쁠 땐 한 줄 알림)을 합의하면 효과가 큽니다.',
    ),
    practice: L("답이 늦을 땐 '이따 연락할게' 한 줄만 부탁해도 돼?"),
    shareLine: L(
      '연애 불안 버튼 TOP3: 1위 {first} 2위 {second} 3위 {third}... 연결 확인 계열이래ㅋㅋ 상담 대신 가볍게 해봤는데 내 얘기 같음. 너의 TOP3는?',
    ),
  },
  {
    id: 'compare',
    emoji: '⚖️',
    title: L("당신의 불안 버튼은 '비교'에 있습니다. 다른 사람의 자리와 견주어질 때 흔들립니다."),
    description: L(
      '이성 관계, SNS 반응, 옛 연인 얘기는 "내가 충분한가?"라는 질문을 건드립니다. 불안을 통제 대신 요청으로 바꾸는 연습이 도움이 됩니다.',
    ),
    practice: L('비교하려는 게 아니라, 내가 지금 충분하다고 느끼고 싶어서 물어봐'),
    shareLine: L(
      '연애 불안 버튼 TOP3: 1위 {first} 2위 {second} 3위 {third}... 비교 계열이래... 상담 대신 가볍게 해봤는데 내 얘기 같음. 너의 TOP3는?',
    ),
  },
  {
    id: 'transparency',
    emoji: '🔍',
    title: L("당신의 불안 버튼은 '투명함'에 있습니다. 감춰지거나 바뀌는 순간에 흔들립니다."),
    description: L(
      '숨김과 일정 변경은 "예측하고 믿을 수 있나?"라는 질문을 건드립니다. 사생활과 비밀의 차이를 대화로 정리하고 일정 변경을 미리 알리는 약속을 맺는 것이 효과적입니다.',
    ),
    practice: L('비밀번호 말고, 바뀌는 일은 미리 알려 주기로 약속하자'),
    shareLine: L(
      '연애 불안 버튼 TOP3: 1위 {first} 2위 {second} 3위 {third}... 투명 계열이래ㅋㅋ 상담 대신 가볍게 해봤는데 내 얘기 같음. 너의 TOP3는?',
    ),
  },
  {
    id: 'balance',
    emoji: '🎛️',
    title: L('당신의 불안 버튼은 한 군데에 몰려 있지 않고 여러 영역에 흩어져 있습니다.'),
    description: L(
      "연결, 비교, 투명함 각각에서 흔들리는 지점이 있어 상황마다 이유가 달라 보입니다. 공통점은 '이 관계에서 내가 안전한가'를 확인하고 싶은 마음입니다. 불안이 올라올 때 하루 안에 한 줄로 말하는 습관이 가장 큰 도움이 됩니다.",
    ),
    practice: L('지금 불안해. 비난이 아니라 안심하고 싶어서 말하는 거야'),
    shareLine: L(
      '연애 불안 버튼 TOP3: 1위 {first} 2위 {second} 3위 {third}... 여기저기 흩어진 균형형이래ㅋㅋ 가볍게 해봤는데 내 얘기 같음. 너의 TOP3는?',
    ),
  },
];

export const phase3AnxietyButtonFamilies: Phase3AnxietyButtonFamily[] = KO_FAMILIES.map(
  (family, fi) => {
    const merged: Phase3AnxietyButtonFamily = { ...family };
    for (const key of FAMILY_TEXT_KEYS) {
      merged[key] = withForeign(
        family[key].ko,
        (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].families[fi][key],
      );
    }
    return merged;
  },
);

export function calculatePhase3AnxietyButtonTop3(
  answers: number[],
  locale: string,
): Phase3AnxietyButtonOutcome {
  const scores = new Map<Phase3AnxietyButtonId, number>();
  phase3AnxietyButtonCards.forEach((card) => scores.set(card.id, 0));
  answers.forEach((category) => {
    const id = category as Phase3AnxietyButtonId;
    if (!scores.has(id)) return;
    scores.set(id, (scores.get(id) ?? 0) + 1);
  });

  const ranked: Phase3AnxietyButtonRanked[] = phase3AnxietyButtonCards
    .map((card) => ({ card, score: scores.get(card.id) ?? 0, rank: 0 }))
    .sort((a, b) => b.score - a.score || a.card.tieRank - b.card.tieRank)
    .map((item, index) => ({ ...item, rank: index + 1 }));

  const top3 = ranked.slice(0, 3);
  const fourth = ranked[3];
  const closeFourth = fourth && top3[2] && fourth.score === top3[2].score ? fourth : null;

  const familyCounts: Record<Exclude<Phase3AnxietyButtonFamilyId, 'balance'>, number> = {
    connection: 0,
    compare: 0,
    transparency: 0,
  };
  top3.forEach((item) => {
    familyCounts[item.card.family] += 1;
  });
  const paired = (
    Object.keys(familyCounts) as Array<Exclude<Phase3AnxietyButtonFamilyId, 'balance'>>
  ).find((family) => familyCounts[family] >= 2);
  const familyId: Phase3AnxietyButtonFamilyId = paired ?? 'balance';
  const family =
    phase3AnxietyButtonFamilies.find((item) => item.id === familyId) ??
    phase3AnxietyButtonFamilies[3];

  const names = top3.map((item) => pick(item.card.name, locale));
  const shareLine = pick(family.shareLine, locale)
    .replace('{first}', names[0] ?? '')
    .replace('{second}', names[1] ?? '')
    .replace('{third}', names[2] ?? '');

  return { ranked, top3, closeFourth, family, shareLine };
}

export function anxietyButtonText(text: Phase3AnxietyButtonText, locale: string): string {
  return pick(text, locale);
}

export const PHASE3_ANXIETY_BUTTON_TOP3_META = {
  title: withForeign(
    '연애 불안 버튼 TOP3',
    (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].meta.title,
  ),
  description: withForeign(
    '연인의 어떤 행동에 가장 흔들릴까요? 12가지 장면에서 내 불안 버튼 상위 3개를 알려드립니다.',
    (loc) => PHASE3_ANXIETY_BUTTON_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['연애불안', '연애테스트', '자기이해'],
    en: PHASE3_ANXIETY_BUTTON_I18N.en.meta.tags,
    ja: PHASE3_ANXIETY_BUTTON_I18N.ja.meta.tags,
    'zh-CN': PHASE3_ANXIETY_BUTTON_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_ANXIETY_BUTTON_I18N['zh-TW'].meta.tags,
    vi: PHASE3_ANXIETY_BUTTON_I18N.vi.meta.tags,
    id: PHASE3_ANXIETY_BUTTON_I18N.id.meta.tags,
  },
};
