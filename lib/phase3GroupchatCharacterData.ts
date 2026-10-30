/**
 * 단톡방 속 나는 어떤 캐릭터일까?
 * slug: phase3-groupchat-character
 * 12문항 4지선다 · 선택지 score = 유형 번호(1~8) · 최고 득점 · 동점 시 Q1→Q2→…
 */

import {
  PHASE3_GROUPCHAT_CHARACTER_I18N,
  type Phase3GroupchatCharacterForeignLocale,
  type Phase3GroupchatCharacterResultText,
} from './phase3GroupchatCharacterI18n';

export type Phase3GroupchatCharacterLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3GroupchatCharacterText = Record<Phase3GroupchatCharacterLocaleKey, string>;

function L(ko: string): Phase3GroupchatCharacterText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_GROUPCHAT_CHARACTER_I18N) as Phase3GroupchatCharacterForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3GroupchatCharacterForeignLocale) => string,
): Phase3GroupchatCharacterText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

export interface Phase3GroupchatCharacterQuestion {
  id: number;
  question: Phase3GroupchatCharacterText;
  options: { text: Phase3GroupchatCharacterText; score: number }[];
}

export interface Phase3GroupchatCharacterResult {
  type: string;
  emoji: string;
  title: Phase3GroupchatCharacterText;
  typeName: Phase3GroupchatCharacterText;
  characterLine: Phase3GroupchatCharacterText;
  shortDescription: Phase3GroupchatCharacterText;
  description: Phase3GroupchatCharacterText;
  keywords: Phase3GroupchatCharacterText;
  friendsView: Phase3GroupchatCharacterText;
  strengths: Phase3GroupchatCharacterText;
  caution: Phase3GroupchatCharacterText;
  goodMatch: Phase3GroupchatCharacterText;
  roomLine: Phase3GroupchatCharacterText;
  oneLiner: Phase3GroupchatCharacterText;
  shareLine: Phase3GroupchatCharacterText;
}

export const PHASE3_GROUPCHAT_CHARACTER_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
  'Type7',
  'Type8',
] as const;

export const PHASE3_GROUPCHAT_CHARACTER_MAX_TYPE_SCORE = 6;

export const PHASE3_GROUPCHAT_CHARACTER_META = {
  title: withForeign('단톡방 속 나는 어떤 캐릭터일까?', (loc) => PHASE3_GROUPCHAT_CHARACTER_I18N[loc].meta.title),
  description: withForeign(
    '단톡방 속 나는 어떤 캐릭터일까? 12가지 상황에서 가장 나다운 반응을 고르면 8가지 캐릭터 중 나의 캐릭터를 알려드립니다.',
    (loc) => PHASE3_GROUPCHAT_CHARACTER_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['대화스타일'],
    en: PHASE3_GROUPCHAT_CHARACTER_I18N.en.meta.tags,
    ja: PHASE3_GROUPCHAT_CHARACTER_I18N.ja.meta.tags,
    'zh-CN': PHASE3_GROUPCHAT_CHARACTER_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_GROUPCHAT_CHARACTER_I18N['zh-TW'].meta.tags,
    vi: PHASE3_GROUPCHAT_CHARACTER_I18N.vi.meta.tags,
    id: PHASE3_GROUPCHAT_CHARACTER_I18N.id.meta.tags,
  },
};

/** answers: 원래 문항 순서의 선택 유형 번호(1~8) 배열 */
export function calculatePhase3GroupchatCharacterScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_GROUPCHAT_CHARACTER_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3GroupchatCharacterResult(answers: number[]): string {
  const scores = calculatePhase3GroupchatCharacterScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_GROUPCHAT_CHARACTER_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 있는 캐릭터). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3GroupchatCharacterSecondType(answers: number[]): string | null {
  const scores = calculatePhase3GroupchatCharacterScores(answers);
  const sorted = [...PHASE3_GROUPCHAT_CHARACTER_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

/** 메인×2순위 조합 한 줄 (순서 무관). 없으면 null */
const COMBO_LINES_KO: Record<string, string> = {
  'Type1|Type3': '분위기 메이커 × 이모티콘 장인 = 던지면 바로 받아 주는 호흡',
  'Type1|Type2': '분위기 메이커 × 눈팅 관전자 = 한쪽이 불 피우고 한쪽이 불꽃 구경',
  'Type1|Type7': '분위기 메이커 × 정보통 = 정리하면 바로 실행하는 팀',
  'Type1|Type8': '분위기 메이커 × 읽씹 유령 = 한쪽이 불 피우고 한쪽이 불꽃 구경',
  'Type3|Type4': '이모티콘 장인 × 사진 투척러 = 반응과 비주얼이 동시에 터짐',
  'Type5|Type6': '팩폭 담당 × 중재자 = 직설과 중재가 균형을 이룸',
  'Type6|Type8': '중재자 × 읽씹 유령 = 늦어도 맥락을 챙겨 주는 호흡',
};

export function getPhase3GroupchatCharacterComboLine(
  mainType: string,
  secondType: string,
  locale: string = 'ko',
): string | null {
  const key = [mainType, secondType].sort().join('|');
  if (locale === 'ko') return COMBO_LINES_KO[key] ?? null;
  const foreign = locale as Phase3GroupchatCharacterForeignLocale;
  const bundle = PHASE3_GROUPCHAT_CHARACTER_I18N[foreign];
  if (!bundle) return COMBO_LINES_KO[key] ?? null;
  return bundle.combos[key] ?? COMBO_LINES_KO[key] ?? null;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '단톡방에 친구의 좋은 소식이 올라왔다. 나는?',
    opts: [
      ['"헐 대박!! 오늘 저녁 축하 파티 하자!" 하고 판을 만든다', 1],
      ['말없이 끝까지 읽고 조용히 넘어간다', 2],
      ['축하 이모티콘을 연달아 보낸다', 3],
      ['예전에 함께 찍은 사진을 찾아 올린다', 4],
    ],
  },
  {
    q: '친구 둘이 의견이 갈려 분위기가 무겁다. 나는?',
    opts: [
      ['"솔직히 이건 네가 틀렸어"라고 짚는다', 5],
      ['"둘 다 일리 있어, 이렇게 해 보자"라고 정리한다', 6],
      ['관련 기사와 후기 링크를 찾아 올린다', 7],
      ['알림만 확인하고 며칠 뒤에 답한다', 8],
    ],
  },
  {
    q: '단톡방에 갑자기 정적이 흘렀다. 나는?',
    opts: [
      ['누가 말하는지 슬쩍 지켜보며 읽기만 한다', 2],
      ['"다들 어디 갔어~ 주말에 뭐 해?"라고 먼저 던진다', 1],
      ['"다들 바쁜가 봐, 시간 날 때 얘기하자"라고 다독인다', 6],
      ['"다들 읽고 답은 안 하네, 이럴 거면 방 왜 있어?"라고 던진다', 5],
    ],
  },
  {
    q: '친구가 오늘 점심 메뉴를 물었다. 나는?',
    opts: [
      ['먹고 있던 음식 사진을 바로 찍어 올린다', 4],
      ['메뉴에 어울리는 이모티콘 하나로 답한다', 3],
      ['읽고도 점심이 끝날 때까지 답하지 않는다', 8],
      ['근처 맛집 위치와 영업시간을 정리해 준다', 7],
    ],
  },
  {
    q: '친구가 모임 장소를 못 정하고 있다. 나는?',
    opts: [
      ['후기와 거리까지 비교해서 장소를 추천한다', 7],
      ['"그냥 정해, 계속 고민하면 끝도 없어"라고 말한다', 5],
      ['"내가 예약할게! 다 같이 가자!"라고 분위기를 띄운다', 1],
      ['장소 후보마다 이모티콘 투표를 눌러 의견을 표시한다', 3],
    ],
  },
  {
    q: '단톡방에서 내 이름이 불렸다. 나는?',
    opts: [
      ['읽고도 한참 뒤에 겨우 한 줄 답한다', 8],
      ['관련된 짤이나 사진으로 대신 답한다', 4],
      ['조용히 읽기만 하고 나중에 개인톡으로 답한다', 2],
      ['내 이름이 나온 이유를 묻고 다들 편하게 말하게 정리한다', 6],
    ],
  },
  {
    q: '단톡방에 알림이 100개 쌓여 있다. 나는?',
    opts: [
      ['처음부터 끝까지 읽지만 한마디도 남기지 않는다', 2],
      ['중요한 일정과 링크만 골라 정리해 올린다', 7],
      ['읽음 표시만 남기고 며칠째 조용히 지나간다', 8],
      ['제일 웃긴 대목에 ㅋㅋ를 쏟으며 대화에 합류한다', 1],
    ],
  },
  {
    q: '친구가 힘든 소식을 올렸다. 나는?',
    opts: [
      ['위로 이모티콘과 하트를 여러 개 보낸다', 3],
      ['"힘들었겠다, 다들 한 번씩 안부 챙기자"라고 모은다', 6],
      ['웃음이 날 만한 귀여운 사진을 올려 기분을 풀어 준다', 4],
      ['"그건 네가 거절했어야지"라고 솔직하게 말한다', 5],
    ],
  },
  {
    q: '모임 약속이 갑자기 깨졌다. 나는?',
    opts: [
      ['"아쉽지만 다음 날로 다시 잡자"라고 정리한다', 6],
      ['읽고도 답하지 않고 사라진다', 8],
      ['아쉬운 표정 이모티콘을 연달아 올린다', 3],
      ['"그럼 오늘 즉석 번개 하자!"라고 판을 키운다', 1],
    ],
  },
  {
    q: '친구가 새로 산 물건을 자랑했다. 나는?',
    opts: [
      ['비슷한 물건 사진과 비교 컷을 올린다', 4],
      ['가격 비교와 구매 후기를 검색해 알려 준다', 7],
      ['"그거 별로야, 환불해"라고 직설적으로 말한다', 5],
      ['잘 샀다고 생각하지만 아무 말 없이 읽기만 한다', 2],
    ],
  },
  {
    q: '단톡방 대화가 점점 길어지고 있다. 나는?',
    opts: [
      ['"결론이 뭔데?" 하고 핵심만 짚는다', 5],
      ['새로운 주제를 던져 분위기를 바꾼다', 1],
      ['지난 여행 사진이나 짤을 올려 대화를 환기한다', 4],
      ['알림을 끄고 보지 않은 채 지나간다', 8],
    ],
  },
  {
    q: '지금 나에게 가장 가까운 문장은?',
    opts: [
      ['"필요한 정보는 내가 제일 먼저 찾아 줄게"', 7],
      ['"말보다 이모티콘이 마음을 더 잘 표현해"', 3],
      ['"누가 서운해하지 않는지 먼저 살펴보게 돼"', 6],
      ['"말은 안 해도 단톡방은 전부 읽고 있어"', 2],
    ],
  },
];

export const phase3GroupchatCharacterQuestions: Phase3GroupchatCharacterQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: withForeign(item.q, (loc) => PHASE3_GROUPCHAT_CHARACTER_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, score], oi) => ({
      text: withForeign(text, (loc) => PHASE3_GROUPCHAT_CHARACTER_I18N[loc].questions[idx].opts[oi]),
      score,
    })),
  }),
);

const RESULT_TEXT_KEYS = [
  'title',
  'typeName',
  'characterLine',
  'shortDescription',
  'description',
  'keywords',
  'friendsView',
  'strengths',
  'caution',
  'goodMatch',
  'roomLine',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3GroupchatCharacterResultText)[];

const KO_RESULTS: Phase3GroupchatCharacterResult[] = [
  {
    type: 'Type1',
    emoji: '🎉',
    title: L('분위기 메이커'),
    typeName: L('분위기 메이커'),
    characterLine: L('화제를 던지고 판을 키우는 방의 엔진'),
    shortDescription: L('당신이 말하면 조용하던 단톡방이 살아납니다.'),
    description: L(
      '정적이 흐르면 먼저 말을 꺼내고 번개 약속도 잘 만듭니다. 방이 활기차지는 만큼 늘 앞장서다 지칠 수 있고, 반응이 없을 땐 민망해질 수 있습니다.',
    ),
    keywords: L('화제 던지기·번개·에너지·판 키우기'),
    friendsView: L('이 방의 에너지원'),
    strengths: L('방을 살아 있게 만드는 추진력과 친화력'),
    caution: L('반응이 없을 때 혼자 애쓰는 느낌이 들 수 있음'),
    goodMatch: L('이모티콘 장인 (내가 던지면 바로 반응해 줌)'),
    roomLine: L('오늘은 네가 번개 한 번 열어 줘, 나 좀 쉴게'),
    oneLiner: L('방을 살리는 힘은 큽니다. 가끔은 다른 사람에게 마이크를 넘겨 보세요'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 분위기 메이커 🎉 방에 불 켜는 사람이래ㅋㅋ 이거 나 단톡방 모습ㅋㅋ 너희는 뭐 나왔어?',
    ),
  },
  {
    type: 'Type2',
    emoji: '👀',
    title: L('눈팅 관전자'),
    typeName: L('눈팅 관전자'),
    characterLine: L('끝까지 읽지만 글은 아끼는 조용한 관찰자'),
    shortDescription: L('당신은 말은 적어도 단톡방의 모든 대화를 알고 있습니다.'),
    description: L(
      '신중하고 갈등에 휘말리지 않지만 존재감이 옅어 친구들이 내 마음을 모를 수 있습니다. 필요한 순간 한마디가 큰 무게를 갖는 타입입니다.',
    ),
    keywords: L('관찰·조용함·신중·한마디의 무게'),
    friendsView: L('말이 없어도 다 보고 있는 사람'),
    strengths: L('흐름을 정확히 읽고 갈등에 휘말리지 않는 침착함'),
    caution: L('마음을 알려 주지 않아 거리감이 생길 수 있음'),
    goodMatch: L('분위기 메이커 (내가 조용해도 판을 이끌어 줌)'),
    roomLine: L('말은 없어도 다 읽고 있어ㅋㅋ 나도 좋아!'),
    oneLiner: L('조용한 참여도 참여입니다. 작은 반응 하나가 존재감을 만듭니다'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 눈팅 관전자 👀 말없이 다 보고 있는 사람이래... 이거 나 단톡방 모습ㅋㅋ 너희는?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🥰',
    title: L('이모티콘 장인'),
    typeName: L('이모티콘 장인'),
    characterLine: L('이모티콘과 하트로 마음을 전하는 감정 번역가'),
    shortDescription: L('당신은 긴 말 없이도 이모티콘 하나로 분위기를 읽어 냅니다.'),
    description: L(
      '반응이 빠르고 다정해서 방의 온도를 따뜻하게 만듭니다. 다만 이모티콘만으로 넘기면 진심이 가볍게 지나가거나 정작 필요한 말이 빠질 수 있습니다.',
    ),
    keywords: L('이모티콘·빠른 반응·다정함·공감'),
    friendsView: L('반응 하나로 기분 좋게 해 주는 사람'),
    strengths: L('모두가 편하게 느끼도록 만드는 따뜻한 반응력'),
    caution: L('중요한 순간에 말이 부족해 보일 수 있음'),
    goodMatch: L('분위기 메이커 (던지면 바로 받아 주는 호흡)'),
    roomLine: L('이모티콘 뒤에 한 줄만 더! 정말 축하해, 기뻐'),
    oneLiner: L('다정한 반응은 큰 선물입니다. 중요한 날엔 한 줄을 더해 보세요'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 이모티콘 장인 🥰 말보다 스티커가 빠른 사람이래ㅋㅋ 이거 나 단톡방 모습ㅋㅋ 너희는?',
    ),
  },
  {
    type: 'Type4',
    emoji: '📸',
    title: L('사진 투척러'),
    typeName: L('사진 투척러'),
    characterLine: L('사진·짤·영상으로 대화를 채우는 비주얼 담당'),
    shortDescription: L('당신은 설명 대신 사진 한 장으로 상황을 보여 줍니다.'),
    description: L(
      '단톡방에 생생한 추억과 웃음을 더하지만, 사진이 많으면 대화 흐름이 묻힐 수 있고 정작 내 생각은 잘 드러나지 않을 수 있습니다.',
    ),
    keywords: L('사진·짤·영상·시각 소통'),
    friendsView: L('사진 폴더가 풍부한 사람'),
    strengths: L('말보다 빠르게 분위기를 전달하는 시각적 표현력'),
    caution: L('사진에 가려 내 마음과 의견은 전달되지 않을 수 있음'),
    goodMatch: L('이모티콘 장인 (사진에 바로 반응해 줌)'),
    roomLine: L('사진 올리고 한 줄 코멘트! 이날 너무 좋았어'),
    oneLiner: L('사진은 추억의 언어입니다. 한 줄만 더하면 마음까지 전해집니다'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 사진 투척러 📸 사진으로 말하는 사람이래ㅋㅋ 이거 나 단톡방 모습ㅋㅋ 너희는?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🎯',
    title: L('팩폭 담당'),
    typeName: L('팩폭 담당'),
    characterLine: L('핵심을 짚어 주는 직설형 조언가'),
    shortDescription: L('당신은 모두가 망설일 때 핵심을 짚는 사람입니다.'),
    description: L(
      '결단을 도와주고 겉도는 대화를 정리하는 힘이 있습니다. 다만 직설이 지나치면 상대가 상처로 느끼거나 방의 분위기가 굳을 수 있습니다.',
    ),
    keywords: L('직설·핵심 짚기·결단·솔직함'),
    friendsView: L('필요한 말을 해 주는 사람'),
    strengths: L('흐지부지되는 대화에 방향을 만들어 주는 솔직함'),
    caution: L('같은 말도 말투에 따라 비난처럼 들릴 수 있음'),
    goodMatch: L('중재자 (내 직설을 부드럽게 정리해 줌)'),
    roomLine: L('팩트만 말하면 이거야. 근데 네 선택을 응원해'),
    oneLiner: L('솔직함은 신뢰의 재료입니다. 한마디 응원을 더하면 약이 됩니다'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 팩폭 담당 🎯 돌려 말 안 하는 사람이래... 이거 나 단톡방 모습ㅋㅋ 찔리면 말해 너희는?',
    ),
  },
  {
    type: 'Type6',
    emoji: '🕊️',
    title: L('중재자'),
    typeName: L('중재자'),
    characterLine: L('서운한 사람이 없게 정리해 주는 방의 안전장치'),
    shortDescription: L('당신은 분위기가 무거워질 때 가장 먼저 풀어 주는 사람입니다.'),
    description: L(
      '갈등이 커지지 않게 막고 서운한 사람을 챙깁니다. 다만 모두를 챙기다 내 마음은 뒷전이 되고, 중재에 지칠 수 있습니다.',
    ),
    keywords: L('중재·배려·정리·서운함 살피기'),
    friendsView: L('이 방의 평화 담당'),
    strengths: L('갈등을 완화하고 모두가 안심하게 만드는 배려'),
    caution: L('모두를 챙기다 내 감정이 쌓일 수 있음'),
    goodMatch: L('팩폭 담당 (직설과 중재가 균형을 이룸)'),
    roomLine: L('이번엔 내 얘기도 해 볼게. 나는 이렇게 느꼈어'),
    oneLiner: L('중재하는 마음은 따뜻합니다. 내 몫의 마음도 챙겨 주세요'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 중재자 🕊️ 이 방의 평화 담당이래ㅋㅋ 이거 나 단톡방 모습ㅋㅋ 너희는?',
    ),
  },
  {
    type: 'Type7',
    emoji: '🔎',
    title: L('정보통'),
    typeName: L('정보통'),
    characterLine: L('링크·장소·일정·후기를 정리해 주는 방의 검색엔진'),
    shortDescription: L('당신 덕분에 모임 장소도 일정도 쉽게 정해집니다.'),
    description: L(
      '실용적이고 믿음직해서 친구들이 가장 먼저 찾는 사람입니다. 다만 정보 위주로 말하다 보면 감정 표현이 적어 보이거나 일을 도맡게 될 수 있습니다.',
    ),
    keywords: L('정리·링크·일정·실용'),
    friendsView: L('모르면 물어보는 사람'),
    strengths: L('선택을 쉽게 만들어 주는 실용적 도움'),
    caution: L('모든 모임의 총무가 되어 지칠 수 있음'),
    goodMatch: L('분위기 메이커 (내가 정리하면 상대가 실행함)'),
    roomLine: L('이번엔 장소 후보만 내가 뽑을게, 예약은 누가 맡아 줄래?'),
    oneLiner: L('정보는 모두를 편하게 합니다. 역할은 나눠야 오래 즐겁습니다'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 정보통 🔎 모르면 나한테 물어보는 사람이래ㅋㅋ 이거 나 단톡방 모습ㅋㅋ 너희는?',
    ),
  },
  {
    type: 'Type8',
    emoji: '👻',
    title: L('읽씹 유령'),
    typeName: L('읽씹 유령'),
    characterLine: L('읽음 표시만 남기고 나타났다 사라지는 유령'),
    shortDescription: L('당신은 단톡방에 있지만 필요할 때만 불쑥 나타나는 사람입니다.'),
    description: L(
      '알림이 많아 피로하거나 답할 타이밍을 놓쳐 조용해지는 경우가 많습니다. 마음이 없는 게 아니어도 친구들은 무관심으로 오해할 수 있습니다.',
    ),
    keywords: L('늦은 답장·알림 피로·불쑥 등장·타이밍 놓침'),
    friendsView: L('가끔 나타나면 반가운 사람'),
    strengths: L('방에 매이지 않고 자기 리듬을 지키는 독립성'),
    caution: L('답이 늦어 친구가 서운해하거나 소외감을 느낄 수 있음'),
    goodMatch: L('중재자 (내가 늦어도 맥락을 챙겨 줌)'),
    roomLine: L('이제 봤어, 미안! 마음은 다 읽고 있었어'),
    oneLiner: L('자기 리듬은 소중합니다. 이모티콘 한 번이 유령을 사람으로 바꿔 줍니다'),
    shareLine: L(
      '단톡방 속 나는 어떤 캐릭터일까? 읽씹 유령 👻 읽고 사라지는 사람이래... 이거 나 단톡방 모습ㅋㅋ 인정 너희는?',
    ),
  },
];

export const phase3GroupchatCharacterResults: Phase3GroupchatCharacterResult[] = KO_RESULTS.map((r, ri) => {
  const merged: Phase3GroupchatCharacterResult = { ...r };
  for (const key of RESULT_TEXT_KEYS) {
    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_GROUPCHAT_CHARACTER_I18N[loc].results[ri][key]);
  }
  return merged;
});
