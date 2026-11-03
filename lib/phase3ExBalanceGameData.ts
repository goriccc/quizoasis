/**
 * 밸런스 게임 — 전 애인 극한편
 * slug: phase3-ex-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: cool(쿨) / linger(미련) · 축B: open(공개) / secret(비밀)
 */

import {
  PHASE3_EX_BALANCE_I18N,
  type Phase3ExBalanceForeignLocale,
  type Phase3ExBalanceResultText,
} from './phase3ExBalanceGameI18n';

export type Phase3ExBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3ExBalanceText = Record<Phase3ExBalanceLocaleKey, string>;
export type Phase3ExPolar = 'cool' | 'linger' | 'open' | 'secret' | 'stat';

function L(ko: string): Phase3ExBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_EX_BALANCE_I18N) as Phase3ExBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3ExBalanceForeignLocale) => string,
): Phase3ExBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3ExBalanceText,
  polar: Phase3ExPolar,
): { text: Phase3ExBalanceText; polar: Phase3ExPolar } {
  return { text: texts, polar };
}

export interface Phase3ExBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3ExBalanceText;
  options: { text: Phase3ExBalanceText; polar: Phase3ExPolar }[];
}

export interface Phase3ExBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3ExBalanceText;
  shortDescription: Phase3ExBalanceText;
  quote: Phase3ExBalanceText;
  description: Phase3ExBalanceText;
  typeLabel: Phase3ExBalanceText;
  characteristics: Phase3ExBalanceText;
  livingStyle: Phase3ExBalanceText;
  strengths: Phase3ExBalanceText;
  caution: Phase3ExBalanceText;
  goodMatch: Phase3ExBalanceText;
  tips: Phase3ExBalanceText;
  oneLiner: Phase3ExBalanceText;
  shareLine: Phase3ExBalanceText;
}

export function exBalanceText(text: Phase3ExBalanceText, locale: string): string {
  const loc = locale as Phase3ExBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3ExBalanceGameResult(
  questions: Phase3ExBalanceGameQuestion[],
  answers: number[],
): string {
  let cool = 0;
  let linger = 0;
  let open = 0;
  let secret = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'cool') cool += 1;
    else if (polar === 'linger') linger += 1;
    else if (polar === 'open') open += 1;
    else if (polar === 'secret') secret += 1;
  });

  const axisA = cool >= 3 ? 'cool' : 'linger';
  const axisB = open >= 3 ? 'open' : 'secret';

  if (axisA === 'cool' && axisB === 'open') return 'Type1';
  if (axisA === 'cool' && axisB === 'secret') return 'Type2';
  if (axisA === 'linger' && axisB === 'open') return 'Type3';
  return 'Type4';
}

export const PHASE3_EX_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 전 애인 극한편',
    (loc) => PHASE3_EX_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '전 애인과 같은 회사 다니기 vs 전 애인이 내 친구와 연애. 12라운드 극한 선택으로 나의 전 애인 대처 스타일을 알려드립니다.',
    (loc) => PHASE3_EX_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '양자택일', '연애테스트'],
    en: PHASE3_EX_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_EX_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_EX_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_EX_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_EX_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_EX_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3ExPolar][] }[] = [
  {
    q: '전 애인과 같은 회사에 다니게 됐다. 나는?',
    scored: true,
    opts: [
      ['매일 마주쳐도 동료처럼 담담하게 인사하며 지낸다', 'cool'],
      ['마주칠 때마다 마음이 흔들려 출근길이 괴롭다', 'linger'],
    ],
  },
  {
    q: '전 애인이 새 연애를 시작했다는 소식을 들었다. 나는?',
    scored: true,
    opts: [
      ['겉으론 웃지만 하루 종일 그 소식만 곱씹는다', 'linger'],
      ['잘됐다고 생각하고 곧바로 내 일상으로 돌아온다', 'cool'],
    ],
  },
  {
    q: '전 애인에게서 "잘 지내?"라는 연락이 왔다. 나는?',
    scored: true,
    opts: [
      ['가볍게 안부만 답하고 대화를 더 끌지 않는다', 'cool'],
      ['답장을 열 번 고쳐 쓰고 한참 마음이 어지럽다', 'linger'],
    ],
  },
  {
    q: '전 애인이 내가 즐겨 가던 단골 가게에 자주 온다는 걸 알았다. 나는?',
    scored: true,
    opts: [
      ['혹시 마주칠까 그 가게를 끊고 한동안 신경이 쓰인다', 'linger'],
      ['마주쳐도 상관없다며 계속 다닌다', 'cool'],
    ],
  },
  {
    q: '전 애인과 찍은 사진이 우연히 눈에 띄었다. 나는?',
    scored: true,
    opts: [
      ['한참 들여다보다 감정이 올라와 하루를 망친다', 'linger'],
      ['추억으로 한 번 보고 별 감흥 없이 넘긴다', 'cool'],
    ],
  },
  {
    q: '전 애인이 내 친구와 연애를 시작했다. 나는?',
    scored: true,
    opts: [
      ['친구들에게 솔직히 불편하다고 말해서 분위기가 어색해진다', 'open'],
      ['아무렇지 않은 척 축하하고 혼자 끙끙 앓는다', 'secret'],
    ],
  },
  {
    q: '전 애인을 우연히 마주쳐 마음이 흔들렸다. 나는?',
    scored: true,
    opts: [
      ['누구에게도 말하지 않아 혼자 감정을 감당해야 한다', 'secret'],
      ['친구에게 바로 털어놓아 전 애인 이야기가 퍼질 수 있다', 'open'],
    ],
  },
  {
    q: '전 애인과 공통 지인들의 모임에 초대받았다. 나는?',
    scored: true,
    opts: [
      ['전 애인도 오는지 솔직히 묻고 불편하면 불편하다고 말한다', 'open'],
      ['이유를 말하지 않고 갑자기 일이 생겼다며 빠진다', 'secret'],
    ],
  },
  {
    q: '전 애인과 연락을 이어 가고 있다. 나는?',
    scored: true,
    opts: [
      ['현재 연인이나 친구에게 말하지 않고 몰래 이어 간다', 'secret'],
      ['숨김없이 말했다가 오해와 다툼이 생긴다', 'open'],
    ],
  },
  {
    q: '전 애인과의 이별 이유를 누가 물었다. 나는?',
    scored: true,
    opts: [
      ['솔직하게 다 이야기해서 상대의 단점까지 알려진다', 'open'],
      ['"그냥 안 맞았어"로 얼버무리고 속사정은 끝내 말하지 않는다', 'secret'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 상황은?',
    scored: false,
    opts: [
      ['전 애인과 같은 회사 다니기', 'stat'],
      ['전 애인이 내 친구와 연애하기', 'stat'],
    ],
  },
  {
    q: '둘 중 더 아찔한 상황은?',
    scored: false,
    opts: [
      ['전 애인의 결혼식에 초대받기', 'stat'],
      ['전 애인이 내 현재 연인의 직장 동료가 되기', 'stat'],
    ],
  },
];

export const phase3ExBalanceGameQuestions: Phase3ExBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_EX_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_EX_BALANCE_I18N[loc].questions[idx].opts[oi]),
        polar,
      ),
    ),
  }));

const RESULT_TEXT_KEYS = [
  'title',
  'shortDescription',
  'quote',
  'description',
  'typeLabel',
  'characteristics',
  'livingStyle',
  'strengths',
  'caution',
  'goodMatch',
  'tips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3ExBalanceResultText)[];

const KO_RESULTS: Phase3ExBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🌤️',
    title: L('담담하고 솔직한 사람, 쿨한 공개파'),
    shortDescription: L('감정은 가볍게, 소통은 투명하게 하는 정리형'),
    quote: L('당신은 전 애인 앞에서 크게 흔들리지 않고, 불편한 일은 말로 정리하는 사람입니다.'),
    description: L(
      '이별 뒤의 감정을 일상으로 빠르게 되돌리고, 필요하면 주변에 솔직하게 말해 오해를 줄입니다. 다만 담담함이 속마음을 다 정리했다는 뜻은 아닐 수 있으니 가끔 내 감정도 점검하세요.',
    ),
    typeLabel: L('쿨한 공개파 🌤️'),
    characteristics: L('담담함·투명함·빠른 정리·솔직한 소통'),
    livingStyle: L('마주쳐도 담담하고, 불편하면 불편하다고 말함'),
    strengths: L('오해와 소문 없이 빠르게 관계를 정리하는 능력'),
    caution: L('담담함 뒤에 남은 감정을 놓칠 수 있음'),
    goodMatch: L('쿨한 비밀파 (서로 담담하게 선을 지킴)'),
    tips: L(
      '빠르게 털어낸 감정이 정말 정리됐는지 며칠 뒤 한 번 점검하기\n말할 때 전 애인을 평가하지 않고 내 상황만 이야기하기\n친구에게 공유한 내용이 불필요하게 퍼지지 않게 범위 정하기',
    ),
    oneLiner: L('담담하고 솔직한 정리는 큰 힘입니다. 마음의 뒷정리만 한 번 챙기세요'),
    shareLine: L(
      '밸런스 게임 — 전 애인 극한편 결과: 쿨한 공개파 🌤️ 담담하고 솔직하게 정리하는 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 전 애인과 같은 회사 vs 전 애인이 내 친구와 연애',
    ),
  },
  {
    type: 'Type2',
    emoji: '🌫️',
    title: L('담담하지만 혼자 삭이는 사람, 쿨한 비밀파'),
    shortDescription: L('겉은 쿨하게, 속은 조용히 처리하는 침착형'),
    quote: L('당신은 전 애인 이야기를 크게 벌이지 않고 혼자 조용히 정리합니다.'),
    description: L(
      '흔들림을 겉으로 드러내지 않고 일상을 유지하지만, 말하지 않은 감정은 혼자 감당해야 합니다. 주변은 내 상태를 알 수 없어 도움을 줄 기회가 줄어듭니다.',
    ),
    typeLabel: L('쿨한 비밀파 🌫️'),
    characteristics: L('침착·조용한 처리·감정 비공개·혼자 감당'),
    livingStyle: L('아무 일 없는 듯 지내고 속사정은 말하지 않음'),
    strengths: L('감정에 휘둘리지 않고 일상을 안정적으로 유지하는 침착함'),
    caution: L('혼자 쌓은 감정이 뒤늦게 올라올 수 있음'),
    goodMatch: L('쿨한 공개파 (내가 말하지 않아도 편하게 소통을 이끌어 줌)'),
    tips: L(
      '믿을 수 있는 한 사람에게만 지금 상태를 한 문장으로 말해 보기\n혼자 감당하는 감정을 일주일에 한 번 글로 적어 보기\n비밀이 현재 연인과의 신뢰를 흔들지 않는지 점검하기',
    ),
    oneLiner: L('조용한 침착함도 능력입니다. 한 사람에게만 열어 두면 더 가벼워집니다'),
    shareLine: L(
      '밸런스 게임 — 전 애인 극한편 결과: 쿨한 비밀파 🌫️ 겉은 쿨하게 속은 조용히 처리하는 타입이래... 이 라운드 너라면 뭐 골라? 전 애인과 같은 회사 vs 전 애인이 내 친구와 연애',
    ),
  },
  {
    type: 'Type3',
    emoji: '🌧️',
    title: L('흔들리지만 터놓는 사람, 미련 공개파'),
    shortDescription: L('마음이 흔들리면 주변에 터놓고 풀어내는 표현형'),
    quote: L('당신은 전 애인 앞에서 마음이 흔들리지만, 그 마음을 숨기지 않고 말로 꺼내 놓습니다.'),
    description: L(
      '감정이 올라올 때 친구에게 털어놓아 마음을 가볍게 하지만, 같은 이야기가 반복되면 주변이 지칠 수 있습니다. 표현은 회복을 돕지만 정리의 마침표는 스스로 찍어야 합니다.',
    ),
    typeLabel: L('미련 공개파 🌧️'),
    characteristics: L('흔들림·솔직한 표현·털어놓기·반복되는 이야기'),
    livingStyle: L('마음이 흔들리고, 그 마음을 주변에 말로 풀어냄'),
    strengths: L('감정을 억누르지 않고 도움을 요청할 줄 아는 힘'),
    caution: L('같은 감정을 반복해 말하며 정리가 길어질 수 있음'),
    goodMatch: L('미련 비밀파 (서로의 감정을 이해하는 공감대)'),
    tips: L(
      "털어놓는 횟수를 정하고 그다음엔 '정리 한 줄'을 적어 마무리하기\n하지 못한 말은 보내지 않을 편지로 끝까지 적어 보기\n전 애인의 계정과 소식에 닿는 접촉을 줄이기",
    ),
    oneLiner: L('터놓는 용기는 회복의 시작입니다. 마침표는 내가 찍어야 합니다'),
    shareLine: L(
      '밸런스 게임 — 전 애인 극한편 결과: 미련 공개파 🌧️ 흔들리면 터놓고 푸는 타입이래ㅋㅋ 이 라운드 너라면 뭐 골라? 전 애인과 같은 회사 vs 전 애인이 내 친구와 연애',
    ),
  },
  {
    type: 'Type4',
    emoji: '🌑',
    title: L('흔들리는데 숨기는 사람, 미련 비밀파'),
    shortDescription: L('마음은 흔들리지만 아무에게도 보이지 않는 인내형'),
    quote: L('당신은 전 애인 앞에서 마음이 크게 흔들리지만, 그 사실을 누구에게도 보이지 않습니다.'),
    description: L(
      '괜찮은 척하며 혼자 곱씹고, 사진과 소식을 몰래 보며 감정을 키울 수 있습니다. 혼자 오래 감당하면 회복이 더뎌지니 안전한 사람에게 조금씩 열어 보세요.',
    ),
    typeLabel: L('미련 비밀파 🌑'),
    characteristics: L('숨은 미련·혼자 곱씹기·괜찮은 척·몰래 확인'),
    livingStyle: L('겉은 평온하지만 속은 계속 전 애인을 향함'),
    strengths: L('감정을 쉽게 드러내지 않는 인내심과 깊은 마음'),
    caution: L('혼자 쌓은 감정이 오래가고 회복이 더딜 수 있음'),
    goodMatch: L('미련 공개파 (먼저 말해 주면 마음을 열기 쉬움)'),
    tips: L(
      '가장 안전한 사람 한 명에게 "사실 아직 마음이 좀 남았어"라고 말해 보기\n몰래 확인하는 계정과 사진을 정리하거나 뮤트하기\n이별한 이유를 한 줄로 적어 지갑이나 메모장에 넣어 두기\n혼자 곱씹는 감정이 오래 이어져 일상의 수면·식사·일에 영향을 준다면 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요',
    ),
    oneLiner: L('숨긴 마음일수록 한 사람에게 열면 가벼워집니다. 혼자 오래 안고 있지 마세요'),
    shareLine: L(
      '밸런스 게임 — 전 애인 극한편 결과: 미련 비밀파 🌑 흔들리는데 아무에게도 안 보이는 타입이래... 이 라운드 너라면 뭐 골라? 전 애인과 같은 회사 vs 전 애인이 내 친구와 연애',
    ),
  },
];

export const phase3ExBalanceGameResults: Phase3ExBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3ExBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_EX_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
