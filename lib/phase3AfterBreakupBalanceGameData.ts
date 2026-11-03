/**
 * 밸런스 게임 — 이별 후 극한편
 * slug: phase3-after-breakup-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: clear(정리) / keep(보관) · 축B: block(차단) / connect(연결)
 */

import {
  PHASE3_AFTER_BREAKUP_BALANCE_I18N,
  type Phase3AfterBreakupBalanceForeignLocale,
  type Phase3AfterBreakupBalanceResultText,
} from './phase3AfterBreakupBalanceGameI18n';

export type Phase3AfterBreakupBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3AfterBreakupBalanceText = Record<Phase3AfterBreakupBalanceLocaleKey, string>;
export type Phase3AfterBreakupPolar = 'clear' | 'keep' | 'block' | 'connect' | 'stat';

function L(ko: string): Phase3AfterBreakupBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_AFTER_BREAKUP_BALANCE_I18N) as Phase3AfterBreakupBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3AfterBreakupBalanceForeignLocale) => string,
): Phase3AfterBreakupBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3AfterBreakupBalanceText,
  polar: Phase3AfterBreakupPolar,
): { text: Phase3AfterBreakupBalanceText; polar: Phase3AfterBreakupPolar } {
  return { text: texts, polar };
}

export interface Phase3AfterBreakupBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3AfterBreakupBalanceText;
  options: { text: Phase3AfterBreakupBalanceText; polar: Phase3AfterBreakupPolar }[];
}

export interface Phase3AfterBreakupBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3AfterBreakupBalanceText;
  shortDescription: Phase3AfterBreakupBalanceText;
  quote: Phase3AfterBreakupBalanceText;
  description: Phase3AfterBreakupBalanceText;
  typeLabel: Phase3AfterBreakupBalanceText;
  characteristics: Phase3AfterBreakupBalanceText;
  livingStyle: Phase3AfterBreakupBalanceText;
  strengths: Phase3AfterBreakupBalanceText;
  caution: Phase3AfterBreakupBalanceText;
  goodMatch: Phase3AfterBreakupBalanceText;
  tips: Phase3AfterBreakupBalanceText;
  oneLiner: Phase3AfterBreakupBalanceText;
  shareLine: Phase3AfterBreakupBalanceText;
}

export function afterBreakupBalanceText(text: Phase3AfterBreakupBalanceText, locale: string): string {
  const loc = locale as Phase3AfterBreakupBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3AfterBreakupBalanceGameResult(
  questions: Phase3AfterBreakupBalanceGameQuestion[],
  answers: number[],
): string {
  let clear = 0;
  let keep = 0;
  let block = 0;
  let connect = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'clear') clear += 1;
    else if (polar === 'keep') keep += 1;
    else if (polar === 'block') block += 1;
    else if (polar === 'connect') connect += 1;
  });

  const axisA = clear >= 3 ? 'clear' : 'keep';
  const axisB = block >= 3 ? 'block' : 'connect';

  if (axisA === 'clear' && axisB === 'connect') return 'Type1';
  if (axisA === 'keep' && axisB === 'connect') return 'Type2';
  if (axisA === 'keep' && axisB === 'block') return 'Type3';
  return 'Type4';
}

export const PHASE3_AFTER_BREAKUP_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 이별 후 극한편',
    (loc) => PHASE3_AFTER_BREAKUP_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '헤어진 뒤 연락 오는 전 애인 vs 연락 한 번 없는 전 애인. 12라운드 극한 선택으로 나의 이별 후 스타일을 알려드립니다.',
    (loc) => PHASE3_AFTER_BREAKUP_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '양자택일', '연애테스트'],
    en: PHASE3_AFTER_BREAKUP_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_AFTER_BREAKUP_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_AFTER_BREAKUP_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_AFTER_BREAKUP_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_AFTER_BREAKUP_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_AFTER_BREAKUP_BALANCE_I18N.id.meta.tags,
  },
};

const RAW_QUESTIONS: { q: string; scored: boolean; opts: [string, Phase3AfterBreakupPolar][] }[] = [
  {
    q: '이별 직후 전 애인과 찍은 사진과 선물이 집에 가득하다. 나는?',
    scored: true,
    opts: [
      ['전부 버려 마음은 깔끔해지지만 좋았던 기억까지 사라진 느낌이 든다', 'clear'],
      ['상자에 담아 두어 추억은 지키지만 볼 때마다 마음이 흔들린다', 'keep'],
    ],
  },
  {
    q: '한 달 뒤 문득 전 애인이 보고 싶어졌다. 나는?',
    scored: true,
    opts: [
      ['그리움을 그대로 느끼며 지내지만 일상이 자꾸 멈춘다', 'keep'],
      ['감정을 서둘러 눌러 덮지만 나중에 뒤늦게 올라올 수 있다', 'clear'],
    ],
  },
  {
    q: '전 애인과 함께 듣던 노래가 흘러나왔다. 나는?',
    scored: true,
    opts: [
      ['바로 끄고 플레이리스트에서 지우지만 좋아하던 노래 하나를 잃는다', 'clear'],
      ['끝까지 들으며 추억에 잠기지만 하루 기분이 가라앉는다', 'keep'],
    ],
  },
  {
    q: '친구가 "이제 그만 잊어"라고 말했다. 나는?',
    scored: true,
    opts: [
      ['아직 못 잊겠다며 시간을 더 달라고 하지만 친구가 지칠 수 있다', 'keep'],
      ['알겠다며 이야기를 꺼내지 않기로 하지만 속마음은 혼자 안고 간다', 'clear'],
    ],
  },
  {
    q: '전 애인에게 받은 편지를 발견했다. 나는?',
    scored: true,
    opts: [
      ['다시 읽어 보고 서랍에 간직하지만 가끔 꺼내 볼까 봐 불안하다', 'keep'],
      ['읽지 않고 그대로 버리지만 나중에 후회할 수도 있다', 'clear'],
    ],
  },
  {
    q: '헤어진 직후 전 애인의 연락처와 SNS가 그대로 남아 있다. 나는?',
    scored: true,
    opts: [
      ['모두 차단하지만 상대 소식을 영영 알 수 없다', 'block'],
      ['그대로 두어 소식을 알 수 있지만 마음이 계속 신경 쓰인다', 'connect'],
    ],
  },
  {
    q: '전 애인에게서 "잘 지내?" 하고 연락이 왔다. 나는?',
    scored: true,
    opts: [
      ['가볍게 답하지만 마음이 다시 흔들릴 수 있다', 'connect'],
      ['답하지 않고 넘기지만 궁금증이 오래 남는다', 'block'],
    ],
  },
  {
    q: '전 애인이 내 SNS 게시물에 좋아요를 눌렀다. 나는?',
    scored: true,
    opts: [
      ['바로 차단해 접점을 없애지만 허전함이 남는다', 'block'],
      ['그냥 두고 지켜보지만 신경 쓰여 자꾸 확인한다', 'connect'],
    ],
  },
  {
    q: '전 애인이 "친구로 지내자"고 제안했다. 나는?',
    scored: true,
    opts: [
      ['친구로 지내 보지만 감정이 정리되지 않을 수 있다', 'connect'],
      ['정중히 거절하지만 아쉬움이 남을 수 있다', 'block'],
    ],
  },
  {
    q: '전 애인이 공통 지인의 모임에 온다고 한다. 나는?',
    scored: true,
    opts: [
      ['모임에 가지 않지만 지인들과 멀어질 수 있다', 'block'],
      ['아무렇지 않게 참석하지만 내내 어색함을 견뎌야 한다', 'connect'],
    ],
  },
  {
    q: '둘 중 더 견딜 만한 전 애인은?',
    scored: false,
    opts: [
      ['헤어진 뒤에도 가끔 연락이 오는 전 애인', 'stat'],
      ['연락 한 번 없이 완전히 사라진 전 애인', 'stat'],
    ],
  },
  {
    q: '둘 중 더 아쉬운 이별은?',
    scored: false,
    opts: [
      ['좋게 헤어졌지만 다시는 볼 수 없는 이별', 'stat'],
      ['싸우고 헤어졌지만 계속 마주치는 이별', 'stat'],
    ],
  },
];

export const phase3AfterBreakupBalanceGameQuestions: Phase3AfterBreakupBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_AFTER_BREAKUP_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_AFTER_BREAKUP_BALANCE_I18N[loc].questions[idx].opts[oi]),
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
] as const satisfies readonly (keyof Phase3AfterBreakupBalanceResultText)[];

const KO_RESULTS: Phase3AfterBreakupBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🌤️',
    title: L('감정은 정리하고 담담하게 열어 두는 사람, 쿨한 정리파'),
    shortDescription: L('흔적은 정리하되 관계는 담담하게 남겨 두는 균형형'),
    quote: L('당신은 이별의 감정을 빠르게 정리하고, 필요하면 담담하게 연락을 받아들입니다.'),
    description: L(
      '마음이 가볍고 일상 복귀가 빠르지만, 정리가 빠른 만큼 미처 다루지 못한 감정이 남을 수 있습니다.',
    ),
    typeLabel: L('쿨한 정리파 🌤️'),
    characteristics: L('담담함·빠른 정리·열린 연락·균형'),
    livingStyle: L('물건은 정리하고 연락이 오면 가볍게 답함'),
    strengths: L('이별 뒤에도 관계를 불필요하게 극단으로 만들지 않는 성숙함'),
    caution: L('마음이 흔들리는 순간 연결이 감정을 다시 건드릴 수 있음'),
    goodMatch: L('추억 보관파 (내 담담함 옆에서 상대의 마음이 정리됨)'),
    tips: L(
      "연락이 올 때 '지금 내 마음이 정말 괜찮은가'를 먼저 점검하기\n연락을 이어 갈 경우 범위(안부 정도까지)를 스스로 정해 두기\n빠르게 털어낸 감정이 며칠 뒤 올라오는지 살펴보기",
    ),
    oneLiner: L('담담한 정리는 큰 힘입니다. 마음의 뒷정리만 한 번 챙기세요'),
    shareLine: L(
      '밸런스 게임 — 이별 후 극한편 결과: 쿨한 정리파 🌤️ 정리는 빠르게 연락은 담담하게 받는 타입이래ㅋㅋ 너라면 뭐 골라? 연락 오는 전 애인 vs 연락 한 번 없는 전 애인',
    ),
  },
  {
    type: 'Type2',
    emoji: '🔗',
    title: L('마음을 간직하고 연락도 열어 두는 사람, 연락 유지파'),
    shortDescription: L('추억을 놓지 않고 관계의 끈도 이어 가는 연결형'),
    quote: L('당신은 이별 뒤에도 인연을 끊기보다 이어 가려는 따뜻한 마음을 가졌습니다.'),
    description: L(
      '정이 깊고 관계를 쉽게 끊지 않지만, 정리가 안 된 채 이어지는 연락은 감정을 길게 끌고 갈 수 있습니다.',
    ),
    typeLabel: L('연락 유지파 🔗'),
    characteristics: L('정·연결·미련 가능성·열린 끈'),
    livingStyle: L('추억을 간직하고 연락이 오면 반갑게 받음'),
    strengths: L('사람을 쉽게 지우지 않고 관계를 소중히 다루는 마음'),
    caution: L('연락이 감정을 다시 붙잡아 회복이 늦어질 수 있음'),
    goodMatch: L('완전 차단파 (상대의 선이 분명해 내 마음을 정리하는 데 도움이 됨)'),
    tips: L(
      "연락이 이어질수록 마음이 편한지 힘든지 일주일 단위로 기록하기\n이어 가고 싶은 이유를 '친구여서'인지 '미련 때문에'인지 구분해 적기\n일정 기간(예: 한 달) 연락을 쉬는 시간 가져 보기\n이별 후 연락과 감정이 정리되지 않아 일상(수면·식사·일)에 영향을 준다면 심리상담 전문가와 이야기해 보세요",
    ),
    oneLiner: L('정이 깊은 마음은 장점입니다. 연락이 회복을 돕는지 한 번 점검해 보세요'),
    shareLine: L(
      '밸런스 게임 — 이별 후 극한편 결과: 연락 유지파 🔗 추억도 간직하고 끈도 이어 가는 타입이래... 너라면 뭐 골라? 연락 오는 전 애인 vs 연락 한 번 없는 전 애인',
    ),
  },
  {
    type: 'Type3',
    emoji: '📦',
    title: L('연락은 끊고 추억은 간직하는 사람, 추억 보관파'),
    shortDescription: L('관계의 문은 닫고 기억은 혼자 조용히 품는 보관형'),
    quote: L('당신은 연락은 끊되 함께한 시간은 마음속 상자에 소중히 담아 둡니다.'),
    description: L(
      '접점을 정리해 흔들림은 줄이지만, 혼자 간직한 감정이 오래가고 갑자기 올라올 수 있습니다.',
    ),
    typeLabel: L('추억 보관파 📦'),
    characteristics: L('조용한 간직·접점 정리·혼자 품기·뒤늦은 그리움'),
    livingStyle: L('연락처는 정리하지만 사진과 편지는 간직함'),
    strengths: L('관계를 존중하며 선을 지키고 기억을 소중히 다루는 마음'),
    caution: L('보관한 추억이 감정을 계속 자극할 수 있음'),
    goodMatch: L('쿨한 정리파 (상대의 담담함이 내 간직한 마음을 가볍게 해 줌)'),
    tips: L(
      '보관하는 물건을 한 상자에만 담고 꺼내 보는 시기를 정하기\n혼자 품은 감정을 믿을 수 있는 한 사람에게 말해 보기\n이별한 이유를 한 줄로 적어 상자 위에 붙여 두기\n혼자 간직한 감정이 오래 이어져 일상에 영향을 준다면 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요',
    ),
    oneLiner: L('조용히 간직하는 마음도 괜찮습니다. 꺼내 보는 시기를 정하면 더 가벼워집니다'),
    shareLine: L(
      '밸런스 게임 — 이별 후 극한편 결과: 추억 보관파 📦 연락은 끊고 추억은 혼자 품는 타입이래ㅋㅋ 너라면 뭐 골라? 연락 오는 전 애인 vs 연락 한 번 없는 전 애인',
    ),
  },
  {
    type: 'Type4',
    emoji: '🚪',
    title: L('흔적과 접점을 모두 끊는 사람, 완전 차단파'),
    shortDescription: L('연락도 물건도 정리하고 새 출발을 택하는 단절형'),
    quote: L('당신은 이별 뒤 깔끔하게 선을 긋고 앞으로 나아가는 쪽을 택합니다.'),
    description: L(
      '미련이 끼어들 틈이 줄어 회복이 빠르지만, 급하게 끊은 감정이 뒤늦게 올라오고 주변 관계까지 영향을 받을 수 있습니다.',
    ),
    typeLabel: L('완전 차단파 🚪'),
    characteristics: L('단절·새 출발·선 긋기·깔끔함'),
    livingStyle: L('사진·선물·연락처·SNS를 모두 정리함'),
    strengths: L('자기 마음을 지키는 단호함과 빠른 새 출발'),
    caution: L('감정을 덮고 지나가면 나중에 갑자기 올라올 수 있음'),
    goodMatch: L('연락 유지파 (상대가 마음을 열어 두고 내가 선을 분명히 해서 균형을 이룸)'),
    tips: L(
      '정리한 뒤 일주일 정도 지나 내 감정을 한 번 돌아보기\n차단하는 이유를 한 줄로 적어 흔들릴 때 읽기\n주변 지인에게는 불필요한 오해가 생기지 않게 상황을 간단히 알리기',
    ),
    oneLiner: L('단호한 선 긋기는 마음을 지키는 방법입니다. 감정의 뒷정리만 한 번 챙기세요'),
    shareLine: L(
      '밸런스 게임 — 이별 후 극한편 결과: 완전 차단파 🚪 연락도 물건도 깔끔하게 정리하는 타입이래... 너라면 뭐 골라? 연락 오는 전 애인 vs 연락 한 번 없는 전 애인',
    ),
  },
];

export const phase3AfterBreakupBalanceGameResults: Phase3AfterBreakupBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3AfterBreakupBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_AFTER_BREAKUP_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
