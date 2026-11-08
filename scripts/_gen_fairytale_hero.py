# -*- coding: utf-8 -*-
"""Generate phase3-fairytale-hero KO-first (registry typed via balance payload)."""
from pathlib import Path
from collections import Counter
import json

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-fairytale-hero"
NS = "phase3FairytaleHeroTest"
THUMB = "p3_test_fairytale_hero.webp"

DATA = r'''/**
 * 동화 속 나는 어떤 주인공일까?
 * slug: phase3-fairytale-hero
 * 12문항 4지선다 · 6유형 · KO-first
 */

export type Phase3FairytaleHeroLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type LocaleText = Record<Phase3FairytaleHeroLocaleKey, string>;

function L(ko: string): LocaleText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

export interface Phase3FairytaleHeroQuestion {
  id: number;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3FairytaleHeroResult {
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

export const PHASE3_FAIRYTALE_HERO_TYPES = [
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'Type5',
  'Type6',
] as const;

/** answers: 원래 문항 순서의 선택 유형 번호(1~6) 배열 */
export function calculatePhase3FairytaleHeroScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = {};
  for (const type of PHASE3_FAIRYTALE_HERO_TYPES) scores[type] = 0;
  for (const a of answers) {
    const key = `Type${a}`;
    if (key in scores) scores[key] += 1;
  }
  return scores;
}

/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */
export function calculatePhase3FairytaleHeroResult(answers: number[]): string {
  const scores = calculatePhase3FairytaleHeroScores(answers);
  const max = Math.max(...Object.values(scores));
  const tied = PHASE3_FAIRYTALE_HERO_TYPES.filter((t) => scores[t] === max);
  if (tied.length === 1) return tied[0];
  for (const a of answers) {
    const key = `Type${a}`;
    if ((tied as readonly string[]).includes(key)) return key;
  }
  return tied[0];
}

/** 2순위 유형(함께 깃든 이야기). 1·2순위 모두 동점이 아닐 때만 반환 */
export function getPhase3FairytaleHeroHiddenType(answers: number[]): string | null {
  const scores = calculatePhase3FairytaleHeroScores(answers);
  const sorted = [...PHASE3_FAIRYTALE_HERO_TYPES].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = sorted;
  if (scores[first] === scores[second]) return null;
  if (scores[second] === 0 || scores[second] === scores[third]) return null;
  return second;
}

const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [
  {
    q: '썸 상대에게서 연락이 뜸해졌다. 나는?',
    opts: [
      ['걱정은 접어 두고 내 즐거운 일에 집중한다', 2],
      ['좋은 사람일 거라 믿고 주변에 의견을 구한다', 4],
      ['겉으로 드러난 모습 말고 속사정이 있는지 헤아려 본다', 5],
      ['직접 찾아가 보자며 먼저 연락을 시도한다', 6],
    ],
  },
  {
    q: '힘든 일이 계속되는 시기다. 나는?',
    opts: [
      ['언젠가 좋은 날이 올 거라 믿고 묵묵히 해낸다', 1],
      ['힘든 마음은 속에 담고 소중한 것을 위해 버틴다', 3],
      ['새로운 길로 나가 보며 돌파구를 찾는다', 6],
      ['주변 사람들의 도움을 받아 다시 일어선다', 4],
    ],
  },
  {
    q: '호감 가는 사람이 차갑게 행동한다. 나는?',
    opts: [
      ['그 이유가 있을 거라며 곁에서 지켜본다', 5],
      ['곁에서 성실하게 하던 일을 계속하며 기다린다', 1],
      ['크게 신경 쓰지 않고 가볍게 지낸다', 2],
      ['마음을 전하고 싶어 말을 고르며 망설인다', 3],
    ],
  },
  {
    q: '연인과 처음 데이트할 장소를 고른다. 나는?',
    opts: [
      ['가 보지 않은 새로운 곳을 탐험하자고 한다', 6],
      ['놀이공원처럼 신나게 놀 수 있는 곳을 고른다', 2],
      ['바다나 호수처럼 마음이 일렁이는 조용한 곳을 고른다', 3],
      ['상대가 편하게 마음을 열 수 있는 아늑한 곳을 고른다', 5],
    ],
  },
  {
    q: '연인이 내 마음을 몰라준다. 나는?',
    opts: [
      ['말 대신 행동으로 마음을 보여 주려 애쓴다', 3],
      ['시간이 걸려도 마음이 통하도록 곁을 지킨다', 5],
      ['언젠가는 알아줄 거라 믿으며 정성을 이어 간다', 1],
      ['솔직하게 말하면 알아줄 것이라 믿고 이야기한다', 4],
    ],
  },
  {
    q: '연애에서 책임이 커지는 순간이 왔다. 나는?',
    opts: [
      ['아직은 자유로운 지금이 좋다며 미루고 싶다', 2],
      ['두렵지만 한 걸음 나서서 직접 부딪쳐 본다', 6],
      ['믿을 만한 사람들과 상의하며 함께 헤쳐 간다', 4],
      ['차분히 준비하며 내 몫을 책임진다', 1],
    ],
  },
  {
    q: '연인의 단점이 눈에 들어왔다. 나는?',
    opts: [
      ['좋은 면을 먼저 보고 믿어 주려 한다', 4],
      ['단점도 품으면서 조용히 마음을 쓴다', 3],
      ['궁금한 건 바로 물어보며 알아 간다', 6],
      ['그 사람 그대로가 재밌으니 가볍게 넘긴다', 2],
    ],
  },
  {
    q: '소중한 약속이 깨졌다. 나는?',
    opts: [
      ['속상해도 마음을 다잡고 다음 기회를 기다린다', 1],
      ['이유를 차분히 듣고 상대의 처지를 이해해 본다', 5],
      ['속상함을 믿는 사람에게 털어놓고 위로받는다', 4],
      ['직접 만나 풀고 싶어 먼저 찾아간다', 6],
    ],
  },
  {
    q: '새로운 사람을 소개받는 자리다. 나는?',
    opts: [
      ['호기심이 가득해 먼저 말을 걸어 본다', 6],
      ['단정하게 준비하고 차분히 대화한다', 1],
      ['장난기 어린 농담으로 분위기를 띄운다', 2],
      ['조심스럽게 지켜보며 마음을 천천히 연다', 3],
    ],
  },
  {
    q: '사랑을 위해 무언가를 포기해야 한다면? 나는?',
    opts: [
      ['소중한 사람을 위해 기꺼이 내 것을 내어 준다', 3],
      ['서로 도울 방법을 찾아 함께 해결하려 한다', 4],
      ['겉이 아닌 진심을 지키는 쪽을 택한다', 5],
      ['포기보다 즐거운 다른 길을 찾아본다', 2],
    ],
  },
  {
    q: '연인과 다툰 뒤 화해하는 방식은? 나는?',
    opts: [
      ['상대의 속마음을 이해할 때까지 이야기를 듣는다', 5],
      ['먼저 찾아가 솔직하게 사과하고 풀어 본다', 6],
      ['말은 아끼지만 작은 행동으로 마음을 전한다', 3],
      ['시간을 두고 차분히 다시 대화할 기회를 기다린다', 1],
    ],
  },
  {
    q: '지금 내 연애관에 가장 가까운 문장은?',
    opts: [
      ['"사람을 믿고 마음을 열면 좋은 일이 생겨"', 4],
      ['"연애도 즐겁고 자유로워야 오래가"', 2],
      ['"선하게 기다리면 좋은 인연이 와"', 1],
      ['"겉보다 내면을 보면 진짜 사랑이 보여"', 5],
    ],
  },
];

export const phase3FairytaleHeroQuestions: Phase3FairytaleHeroQuestion[] = RAW_QUESTIONS.map(
  (item, idx) => ({
    id: idx + 1,
    question: L(item.q),
    options: item.opts.map(([text, score]) => ({ text: L(text), score })),
  }),
);

export const phase3FairytaleHeroResults: Phase3FairytaleHeroResult[] = [
  {
    type: 'Type1',
    emoji: '👠',
    title: L('묵묵히 선함을 지키며 때를 만드는 사람, 신데렐라 👠'),
    typeName: L('신데렐라'),
    realReason: L('묵묵히 선함을 지키며 때를 만드는 사람'),
    shortDescription: L('당신은 힘든 시기에도 희망과 품위를 잃지 않는 사람입니다.'),
    description: L(
      '연애 스타일: 성실하게 마음을 쌓고 좋은 인연이 올 때까지 정성을 이어 갑니다.',
    ),
    keywords: L('인내, 선한 마음, 흔들리지 않는 품위'),
    strengths: L('기다림 끝에 마음이 닿는 순간'),
    reasonDetail: L('기다리기만 하지 않고 먼저 한 걸음 나서 보기'),
    frequentSaying: L('"선한 마음이 결국 길을 열어요"'),
    changeTips: L('작은 신호를 먼저 보내는 용기 내기'),
    oneLiner: L('기다림의 힘은 큽니다. 먼저 건네는 한마디가 때를 앞당깁니다'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 신데렐라 👠 나 신데렐라래ㅋㅋ 선함으로 길을 연대. 너는 누구야?',
    ),
  },
  {
    type: 'Type2',
    emoji: '🧚',
    title: L('자유롭고 즐겁게 날아다니는 사람, 피터팬 🧚'),
    typeName: L('피터팬'),
    realReason: L('자유롭고 즐겁게 날아다니는 사람'),
    shortDescription: L('당신과 있으면 일상이 모험처럼 가벼워집니다.'),
    description: L(
      '연애 스타일: 구속 없이 즐겁게 만나고 함께 있는 순간을 신나게 만듭니다.',
    ),
    keywords: L('장난기, 유쾌한 에너지, 순수한 마음'),
    strengths: L('함께 떠나는 여행, 분위기가 가라앉은 순간'),
    reasonDetail: L('책임이 필요한 대화도 가볍게 넘기지 않기'),
    frequentSaying: L('"오늘도 즐겁게 날아요"'),
    changeTips: L('약속과 연락은 가볍게라도 꼭 지키기'),
    oneLiner: L('자유로운 활기는 매력입니다. 중요한 약속은 마음에 새겨 보세요'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 피터팬 🧚 나 피터팬래ㅋㅋ 자유롭게 날아다닌대. 너는 누구야?',
    ),
  },
  {
    type: 'Type3',
    emoji: '🧜',
    title: L('사랑을 위해 큰 용기를 내는 사람, 인어공주 🧜'),
    typeName: L('인어공주'),
    realReason: L('사랑을 위해 큰 용기를 내는 사람'),
    shortDescription: L('당신은 마음을 다 걸 만큼 깊고 진심 어린 사랑을 합니다.'),
    description: L(
      '연애 스타일: 소중한 사람을 위해 기꺼이 마음과 노력을 쏟습니다.',
    ),
    keywords: L('깊은 진심, 헌신, 낭만적인 감수성'),
    strengths: L('마음을 건네는 고백, 상대를 위해 한 걸음 나서는 순간'),
    reasonDetail: L('말로 표현하지 못한 마음이 오해가 되지 않게 한 줄씩 전하기'),
    frequentSaying: L('"마음을 다해 사랑해요"'),
    changeTips: L('행동뿐 아니라 마음을 말로도 건네기'),
    oneLiner: L('헌신은 큰 힘입니다. 내 마음의 소리도 꼭 전해 보세요'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 인어공주 🧜 나 인어공주래ㅎㅎ 마음을 다해 사랑한대. 너는 누구야?',
    ),
  },
  {
    type: 'Type4',
    emoji: '🍎',
    title: L('순수하게 믿고 함께 일어서는 사람, 백설공주 🍎'),
    typeName: L('백설공주'),
    realReason: L('순수하게 믿고 함께 일어서는 사람'),
    shortDescription: L('당신은 사람을 믿는 맑은 마음으로 주변을 따뜻하게 만듭니다.'),
    description: L(
      '연애 스타일: 상대의 좋은 점을 먼저 보고 곁의 사람들과 함께 관계를 가꿉니다.',
    ),
    keywords: L('순수함, 신뢰, 사람을 끌어당기는 친화력'),
    strengths: L('새로운 만남, 힘들 때 주변과 마음을 나누는 순간'),
    reasonDetail: L('믿는 만큼 사실도 한 번 확인하는 균형 갖기'),
    frequentSaying: L('"믿는 마음이 사람을 모아요"'),
    changeTips: L('좋은 마음과 함께 "이 부분은 궁금해"를 질문으로 확인하기'),
    oneLiner: L('순수한 신뢰는 큰 선물입니다. 확인하는 한마디가 더해지면 더 안전합니다'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 백설공주 🍎 나 백설공주래ㅎㅎ 믿는 마음이 사람을 모은대. 너는 누구야?',
    ),
  },
  {
    type: 'Type5',
    emoji: '🌹',
    title: L('겉보다 속을 보고 마음을 열어 주는 사람, 미녀와 야수 🌹'),
    typeName: L('미녀와 야수'),
    realReason: L('겉보다 속을 보고 마음을 열어 주는 사람'),
    shortDescription: L('당신은 상대의 진짜 모습을 알아보고 변화를 이끌어 내는 사람입니다.'),
    description: L(
      '연애 스타일: 시간이 걸려도 속마음을 이해하며 깊은 신뢰를 쌓습니다.',
    ),
    keywords: L('통찰, 깊은 이해, 한결같은 인내'),
    strengths: L('닫힌 마음이 풀리는 순간, 서로를 이해하게 된 순간'),
    reasonDetail: L('상대를 바꾸려 애쓰기보다 내 마음의 경계도 지키기'),
    frequentSaying: L('"진짜 모습을 알아봐요"'),
    changeTips: L('이해하는 만큼 나의 바람도 말로 요청하기'),
    oneLiner: L('깊은 이해는 큰 힘입니다. 내 마음도 같은 무게로 돌봐 주세요'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 미녀와 야수 🌹 나 미녀와 야수래ㅎㅎ 진짜 모습을 알아본대. 너는 누구야?',
    ),
  },
  {
    type: 'Type6',
    emoji: '🧺',
    title: L('호기심으로 길을 나서는 씩씩한 사람, 빨간 모자 🧺'),
    typeName: L('빨간 모자'),
    realReason: L('호기심으로 길을 나서는 씩씩한 사람'),
    shortDescription: L('당신은 궁금한 곳을 향해 먼저 걸어가는 용기 있는 사람입니다.'),
    description: L(
      '연애 스타일: 먼저 말을 걸고 직접 부딪치며 관계를 알아 갑니다.',
    ),
    keywords: L('호기심, 씩씩함, 경험에서 배우는 유연함'),
    strengths: L('새로운 만남, 갈등을 직접 풀러 나서는 순간'),
    reasonDetail: L('낯선 사람에게 마음을 줄 땐 확인하고 천천히 가까워지기'),
    frequentSaying: L('"궁금하면 먼저 걸어가요"'),
    changeTips: L('먼저 다가가되 상대의 말과 행동이 일치하는지 지켜보기'),
    oneLiner: L('용기는 큰 자산입니다. 새로운 만남은 안전하게 한 걸음씩 가세요'),
    shareLine: L(
      '동화 속 나는 어떤 주인공일까? 빨간 모자 🧺 나 빨간 모자래ㅋㅋ 궁금하면 먼저 걸어간대. 너는 누구야?',
    ),
  },
];

export const PHASE3_FAIRYTALE_HERO_META = {
  title: {
    ko: '동화 속 나는 어떤 주인공일까?',
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  description: {
    ko: '동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다.',
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  tags: {
    ko: ['동화주인공'],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[],
  },
};
'''

(root / "lib" / "phase3FairytaleHeroData.ts").write_text(DATA, encoding="utf-8", newline="\n")
print("data ok")

messages = {
    NS: {
        "startMessage": {
            "line1": "동화 속 주인공으로 살아간다면 나는 누구일까?",
            "line2": "기다림으로 빛나는 사람, 자유롭게 날아다니는 사람, 사랑을 위해 용기를 내는 사람. 동화 속 주인공들은 저마다 다른 방식으로 사랑합니다. 내가 끌리는 이야기에는 나의 연애 결이 담겨 있습니다.",
            "line3": "12가지 장면에서 가장 나다운 반응을 골라 보세요. 나의 동화 주인공과 연애 스타일을 알려드립니다. 어떤 주인공이 나와도 장점으로 읽어 드립니다.",
            "line4": "",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "내 주인공 찾기 📖",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "나의 동화 속 주인공",
            "keywords": "매력 포인트",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 깃든 이야기",
            "strengths": "빛나는 순간",
            "reasonDetail": "조심할 점",
            "frequentSaying": "카드 문구",
            "changeTips": "연애 한 줄 팁",
            "oneLiner": "한 줄 평",
            "shareResult": "결과 공유하기",
            "popularBadge": "인기",
            "retake": "다시 하기",
            "otherTests": "다른 테스트 보기",
        },
        "shareMessages": {
            "default": "{type}",
            "kakao": "{type}",
            "wechat": "{type}",
            "whatsapp": "{type}",
            "telegram": "{type}",
            "line": "{type}",
            "startDefault": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
            "startKakao": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
            "startWechat": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
            "startWhatsapp": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
            "startTelegram": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
            "startLine": "동화 속 나는 어떤 주인공일까? 📖 나 신데렐라? 피터팬? 너도 해봐!",
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "resultCopied": "결과가 클립보드에 복사되었습니다!",
            "shareFailed": "공유 기능을 사용할 수 없습니다.",
            "wechatCopy": "링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.",
            "kakaoInit": "카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.",
            "kakaoError": "카카오톡 공유 중 오류가 발생했습니다.",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 유사한 다른 테스트 추천 톱5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 톱5",
        },
    }
}

for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]:
    dest = root / "messages" / loc / "tests" / f"{SLUG}.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(messages, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
print("messages ok")

title_obj = {k: "동화 속 나는 어떤 주인공일까?" for k in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
desc = "동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다."
desc_obj = {k: desc for k in title_obj}
tags_obj = {k: ["동화주인공"] for k in title_obj}


def sql_str(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))
    return "'" + s.replace("'", "''") + "'"


sql = f"""-- 동화 속 나는 어떤 주인공일까?
-- slug: {SLUG}
-- thumbnail: {THUMB}
-- category: personality · format: scenario_4
-- KO-first: 타 언어는 이후 다국어처리 시 갱신

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  '{SLUG}',
  {sql_str(title_obj)},
  {sql_str(desc_obj)},
  '{THUMB}',
  'psychology',
  'personality',
  'scenario_4',
  {sql_str(tags_obj)},
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
"""
(root / "supabase" / f"insert-{SLUG}.sql").write_text(sql, encoding="utf-8", newline="\n")
print("sql ok")

# Client from situationship (same 6-type UI)
src = (root / "components" / "Phase3SituationshipStuckReasonTestClient.tsx").read_text(encoding="utf-8")
out = src
for a, b in [
    ("Phase3SituationshipStuckQuestion", "Phase3FairytaleHeroQuestion"),
    ("Phase3SituationshipStuckResult", "Phase3FairytaleHeroResult"),
    ("PHASE3_SITUATIONSHIP_STUCK_TYPES", "PHASE3_FAIRYTALE_HERO_TYPES"),
    ("calculatePhase3SituationshipStuckResult", "calculatePhase3FairytaleHeroResult"),
    ("calculatePhase3SituationshipStuckScores", "calculatePhase3FairytaleHeroScores"),
    ("getPhase3SituationshipStuckHiddenType", "getPhase3FairytaleHeroHiddenType"),
    ("phase3SituationshipStuckReasonData", "phase3FairytaleHeroData"),
    ("phase3SituationshipStuckReasonTest", NS),
    ("Phase3SituationshipStuckTestClient", "Phase3FairytaleHeroTestClient"),
    ("Phase3SituationshipStuck", "Phase3FairytaleHero"),
]:
    out = out.replace(a, b)
(root / "components" / "Phase3FairytaleHeroTestClient.tsx").write_text(out, encoding="utf-8", newline="\n")
print("client ok")

reg = (root / "lib" / "testRuntimeRegistry.ts").read_text(encoding="utf-8")
entry = """
  'phase3-fairytale-hero': {
    slug: 'phase3-fairytale-hero',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {
      const { PHASE3_FAIRYTALE_HERO_META } = await import('./phase3FairytaleHeroData');
      return {
        title: PHASE3_FAIRYTALE_HERO_META.title,
        description: PHASE3_FAIRYTALE_HERO_META.description,
        tags: PHASE3_FAIRYTALE_HERO_META.tags,
        thumbnail: 'p3_test_fairytale_hero.webp',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./phase3FairytaleHeroData');
      return {
        questions: mod.phase3FairytaleHeroQuestions,
        results: mod.phase3FairytaleHeroResults,
        meta: {
          title: mod.PHASE3_FAIRYTALE_HERO_META.title,
          description: mod.PHASE3_FAIRYTALE_HERO_META.description,
          tags: mod.PHASE3_FAIRYTALE_HERO_META.tags,
          thumbnail: 'p3_test_fairytale_hero.webp',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        },
        messagesNamespace: 'phase3FairytaleHeroTest',
        messagesFileSlug: 'phase3-fairytale-hero',
      };
    },
    loadClient: () => import('@/components/Phase3FairytaleHeroTestClient'),
  },
"""
if SLUG not in reg:
    reg = reg.replace(
        "};\n\nexport function getRuntimeTestEntry",
        entry + "};\n\nexport function getRuntimeTestEntry",
    )
    (root / "lib" / "testRuntimeRegistry.ts").write_text(reg, encoding="utf-8", newline="\n")
    print("registry ok")
else:
    print("registry already has slug")

fmt = (root / "lib" / "testFormatRegistry.ts").read_text(encoding="utf-8")
if SLUG not in fmt:
    fmt = fmt.replace(
        "'phase3-situationship-stuck-reason': 'scenario_4',",
        "'phase3-situationship-stuck-reason': 'scenario_4',\n  'phase3-fairytale-hero': 'scenario_4',",
    )
    (root / "lib" / "testFormatRegistry.ts").write_text(fmt, encoding="utf-8", newline="\n")
    print("format ok")
else:
    print("format already has slug")

msg = (root / "lib" / "testMessages.ts").read_text(encoding="utf-8")
loader = """  'phase3-fairytale-hero': {
    ko: () => import('@/messages/ko/tests/phase3-fairytale-hero.json'),
    en: () => import('@/messages/en/tests/phase3-fairytale-hero.json'),
    ja: () => import('@/messages/ja/tests/phase3-fairytale-hero.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/phase3-fairytale-hero.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/phase3-fairytale-hero.json'),
    vi: () => import('@/messages/vi/tests/phase3-fairytale-hero.json'),
    id: () => import('@/messages/id/tests/phase3-fairytale-hero.json'),
  },
"""
if SLUG not in msg:
    msg = msg.replace(
        "  'phase3-situationship-stuck-reason': {",
        loader + "  'phase3-situationship-stuck-reason': {",
    )
    (root / "lib" / "testMessages.ts").write_text(msg, encoding="utf-8", newline="\n")
    print("testMessages ok")
else:
    print("testMessages already has slug")

# scoring matrix from doc (A B C D scores)
mapping = [
    [2, 4, 5, 6],
    [1, 3, 6, 4],
    [5, 1, 2, 3],
    [6, 2, 3, 5],
    [3, 5, 1, 4],
    [2, 6, 4, 1],
    [4, 3, 6, 2],
    [1, 5, 4, 6],
    [6, 1, 2, 3],
    [3, 4, 5, 2],
    [5, 6, 3, 1],
    [4, 2, 1, 5],
]
flat = Counter(x for row in mapping for x in row)
assert all(flat[i] == 8 for i in range(1, 7)), flat
print("scoring matrix ok", dict(flat))

# verify client imports
client = (root / "components" / "Phase3FairytaleHeroTestClient.tsx").read_text(encoding="utf-8")
assert "phase3FairytaleHeroData" in client
assert "phase3FairytaleHeroTest" in client
assert "Situationship" not in client
assert "export default function Phase3FairytaleHeroTestClient" in client
print("client rename ok")
print("DONE")
