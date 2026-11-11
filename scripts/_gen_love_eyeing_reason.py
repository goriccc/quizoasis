# -*- coding: utf-8 -*-
"""Generate phase3-love-eyeing-reason KO-first (registry scenario_4)."""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-love-eyeing-reason"
NS = "phase3LoveEyeingReasonTest"
THUMB = "p3_test_love_eyeing_reason.webp"
TITLE = "나는 왜 연애할 때 자꾸 눈치만 볼까?"
META_DESC = (
    "연애만 하면, 왜 상대 기분부터 살피게 될까? "
    "10가지 상황으로 내가 눈치를 보게 되는 진짜 이유와 편해지는 법을 알려드립니다."
)
TAGS = ["연애눈치", "연애심리", "연애유형"]

MAPPING = [
    [2, 3, 4, 5],
    [3, 4, 5, 1],
    [4, 5, 1, 2],
    [5, 1, 2, 3],
    [1, 2, 3, 4],
    [4, 5, 2, 3],
    [5, 1, 3, 4],
    [1, 2, 4, 5],
    [2, 3, 5, 1],
    [3, 4, 1, 2],
]
flat = Counter(x for row in MAPPING for x in row)
assert all(flat[i] == 8 for i in range(1, 6)), flat
print("scoring matrix ok", dict(flat))

QUESTIONS = [
    (
        '연인이 "오늘 뭐 먹을래?"라고 물었다. 나는?',
        [
            "상대가 어제 먹고 싶다고 했던 걸 떠올려서 그걸 먹자고 한다",
            '의견이 갈리면 분위기가 불편해질까 봐 "아무거나 좋아"로 끝낸다',
            "내가 고른 메뉴를 상대가 만족해하는지 표정부터 살핀다",
            "이 메뉴를 말하면 이상하게 보일까 싶어 속으로 여러 번 고쳐 생각하다 말을 꺼낸다",
        ],
    ),
    (
        "약속 장소에 나온 연인의 표정이 평소보다 굳어 있다. 나는?",
        [
            "분위기가 가라앉을까 봐 아무 일 없는 듯 화제를 밝게 돌린다",
            "내가 뭘 잘못했나, 나한테 실망한 건 아닌가 신경 쓰여서 평소보다 더 애쓴다",
            "물어볼까 하다가 이 질문이 부담스럽게 들릴까 봐 말을 고르다 타이밍을 놓친다",
            "나 때문에 기분이 안 좋아진 거라면 나를 싫어하게 될 것 같아 불안해진다",
        ],
    ),
    (
        "새로 한 헤어스타일에 대해 연인이 별말 없이 지나갔다. 나는?",
        [
            "마음에 드는지 직접 묻거나 칭찬 한마디가 나올 때까지 기다리게 된다",
            "어떠냐고 묻고 싶지만 이런 걸 묻는 사람처럼 보일까 봐 입 안에서 삼킨다",
            "마음에 안 드는데 말을 못 하는 건 아닌지, 내가 싫어진 건 아닌지 걱정한다",
            "신경 쓰이지만 상대가 피곤해 보여서 내 이야기는 접고 컨디션부터 챙긴다",
        ],
    ),
    (
        "연인이 내가 비워둔 주말에 친구 약속을 잡았다고 한다. 나는?",
        [
            '서운하다고 하면 속 좁아 보일까 봐 한참 문장을 다듬다가 "다녀와~"라고 한다',
            "내가 붙잡으면 귀찮아하거나 나를 떠날까 봐 괜찮은 척한다",
            "오랜만에 친구를 만나는 거니까 내 일정을 바로 바꿔 상대에게 맞춘다",
            "얘기를 꺼내면 말다툼이 될까 봐 아무 말 없이 넘어간다",
        ],
    ),
    (
        '연인이 "이번 여행, 너는 어디 가고 싶어?"라고 물었다. 나는?',
        [
            "내가 원하는 곳을 말했다가 상대가 싫어하면 어쩌나 싶어 상대가 원할 만한 쪽에 맞춘다",
            "상대가 어디를 가고 싶어 하는지 먼저 파악해서 그쪽으로 답한다",
            '의견이 다르면 부딪힐까 봐 "너 편한 대로 해"라고 한다',
            "어떤 답이 상대의 마음에 들지 계산하고 칭찬받을 만한 선택지를 고른다",
        ],
    ),
    (
        '연인이 "오늘은 피곤해서 통화 짧게 하자"고 한다. 나는?',
        [
            "내가 재미없어서 피곤한 건 아닌지 신경 쓰이고 다음엔 더 재밌는 얘기를 준비한다",
            "서운해도 말하면 투정처럼 들릴까 봐 속으로 문장을 검열하다가 말을 삼킨다",
            '피곤한 사람에게 부담을 주지 않으려고 "얼른 쉬어"라며 내 이야기는 접는다',
            '아쉽다고 말하면 분위기가 어색해질까 봐 "응 잘 자~" 하고 끝낸다',
        ],
    ),
    (
        '내 의견에 연인이 "그건 좀 아닌 것 같은데"라고 했다. 나는?',
        [
            "방금 한 말이 이상했나 싶어 내가 한 말을 머릿속으로 여러 번 되감으며 후회한다",
            '이 말 때문에 나를 안 좋게 볼까 봐 철렁해서 바로 "아 내가 잘못 생각했나 봐"라고 한다',
            '반박하면 싸움이 될까 봐 "그럴 수도 있겠네" 하고 접는다',
            "인정받고 싶었는데 반응이 차가워서 그날 하루 종일 마음이 쓰인다",
        ],
    ),
    (
        "기념일 선물이 별로 마음에 안 드는데 연인이 기대하는 눈빛으로 나를 쳐다본다. 나는?",
        [
            "실망한 표정이 드러나면 상대가 상처받고 나를 멀리할까 봐 과하게 좋아하는 척한다",
            "정성스럽게 고른 걸 아니까 상대의 기분을 최우선으로 두고 크게 고맙다고 표현한다",
            "어떤 반응이 상대를 가장 만족시킬지 계산하며 칭찬받을 만한 리액션을 한다",
            "솔직한 소감을 말할까 하다가 이 말이 상처가 될지 몇 번이나 문장을 고쳐 쓴다",
        ],
    ),
    (
        "연인의 친구들 모임에 처음 참석했다. 나는?",
        [
            "연인이 편하도록 분위기를 살피고 필요한 걸 챙기느라 정작 나는 즐기지 못한다",
            "불편한 질문이 나와도 웃어넘기고 부딪힐 만한 이야기는 피한다",
            "말하기 전에 이 얘기를 해도 되나 계속 검열하다 보니 말수가 줄어든다",
            "내가 이 사람들 눈에 별로면 연인이 나를 멀리하게 될까 봐 긴장된다",
        ],
    ),
    (
        '연인이 "너는 항상 내 눈치를 보는 것 같아"라고 말했다. 속마음에 가장 가까운 건?',
        [
            "싸우기 싫어서 맞춰왔는데 그게 이렇게 보였구나 싶다",
            "좋은 사람으로 보이고 싶어서 애써온 게 들킨 것 같다",
            "내 진짜 모습을 보이면 상대가 떠날까 봐 계속 눈치를 봤다",
            "상대가 편하길 바랐던 거라 내 마음은 늘 뒤로 미뤄왔다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🥀",
        "title": "미움받을까 봐 먼저 움츠리는 사람, 거절 공포형 🥀",
        "typeName": "거절 공포형",
        "realReason": "내 모습을 보였다가 거절당하거나 떠나갈까 봐 두렵다",
        "shortDescription": "당신은 예민한 게 아닙니다. 있는 그대로의 나를 보였다가 싫어하게 될까 봐 먼저 몸을 움츠리고 있습니다.",
        "description": (
            "내 의견을 말하거나 실망한 표정을 보이는 것이 곧 사랑을 잃는 일처럼 느껴집니다. "
            "그래서 상대의 반응을 살피고 맞추는 쪽으로 움직이게 됩니다. "
            "눈치는 나를 지켜주는 방패가 되지만, 그 방패 때문에 진짜 내 모습은 상대에게 닿기 어렵습니다."
        ),
        "keywords": "미움받을까 봐, 싫어하게 될까 봐, 진짜 모습 숨김, 맞추기, 버려질 두려움",
        "strengths": "관계를 소중히 여기고 상대의 마음을 세심하게 살피는 섬세함",
        "reasonDetail": "상대의 표정이 굳을 때, 의견이 갈릴 때, 내 진짜 감정을 보여야 할 때",
        "frequentSaying": '"나 때문에 싫어진 거 아니지?"',
        "changeTips": (
            "오늘 하루 아주 작은 선호(메뉴·영화)를 하나 골라 솔직하게 말해보기\n"
            "상대가 내 의견에 다른 말을 했을 때 '나를 싫어하게 된 증거'가 정말 있는지 사실만 적어보기\n"
            '불안이 올라올 때 "나 지금 싫어할까 봐 걱정돼"라고 감정을 그대로 말해보기\n'
            "미움받는 두려움이 연애마다 반복되거나 일상 전반에서 크게 힘들다면, 심리상담 전문가와 그 두려움의 뿌리를 안전하게 살펴보세요"
        ),
        "oneLiner": "진짜 모습을 보여도 곁에 남는 사람이 진짜 인연입니다. 작은 것부터 솔직해져 보세요",
        "shareLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 결과: 거절 공포형 🥀 진짜 모습 보이면 싫어할까 봐 움츠리는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?",
    },
    {
        "type": "Type2",
        "emoji": "🌷",
        "title": "상대 기분이 내 기분보다 먼저인 사람, 배려 과잉형 🌷",
        "typeName": "배려 과잉형",
        "realReason": "상대가 편하길 바라는 마음이 앞서 내 마음은 늘 뒤로 밀린다",
        "shortDescription": "당신은 눈치를 보는 게 아닙니다. 상대가 편하길 너무 많이 바라서 나를 뒤로 보내고 있습니다.",
        "description": (
            "상대가 피곤해 보이면 내 이야기를 접고, 상대가 원하는 것을 먼저 파악해서 맞춥니다. "
            "다정하고 성숙한 태도처럼 보이지만 이 배려가 쌓이면 나만 계속 참는 관계가 되기 쉽습니다. "
            "정작 내가 원하는 것은 상대가 모를 수도 있습니다."
        ),
        "keywords": "상대 우선, 내 마음 뒤로, 기분 맞추기, 챙김, 혼자 감당",
        "strengths": "따뜻하고 상대의 필요를 빠르게 알아채며 관계를 편안하게 돌보는 능력",
        "reasonDetail": "상대가 피곤해 보일 때, 선택해야 할 때, 상대가 기뻐해야 하는 자리일 때",
        "frequentSaying": '"나는 괜찮아, 너 편한 대로 해"',
        "changeTips": (
            "선택의 순간에 상대의 답을 떠올리기 전에 '내가 원하는 것'을 먼저 한 줄 적어보기\n"
            '"나도 이게 좋아"라고 말하는 연습을 하루 한 번만 해보기\n'
            "배려한 만큼 나도 받아도 되는 사람이라는 문장을 떠올리기"
        ),
        "oneLiner": "당신의 배려는 소중합니다. 나를 지우지 않는 배려가 오래가는 배려입니다",
        "shareLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 결과: 배려 과잉형 🌷 상대 기분이 내 기분보다 먼저라서 지치는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘",
    },
    {
        "type": "Type3",
        "emoji": "🕊️",
        "title": "평화를 위해 말을 삼키는 사람, 갈등 회피형 🕊️",
        "typeName": "갈등 회피형",
        "realReason": "부딪히는 순간이 싸움이 될까 봐 먼저 접는다",
        "shortDescription": "당신은 눈치를 보는 게 아닙니다. 갈등이 생기기 전에 분위기를 먼저 지키려고 움직이고 있습니다.",
        "description": (
            '의견이 갈릴 것 같으면 "아무거나 좋아"라고 하고, 서운해도 "괜찮아"로 넘어갑니다. '
            "평화로운 분위기는 지켜지지만 해결되지 못한 마음은 사라지지 않고 쌓입니다. "
            "눈치가 갈등을 막아주는 대신 서로를 알아갈 기회도 함께 막을 수 있습니다."
        ),
        "keywords": "분위기 지키기, 아무거나, 괜찮아, 부딪힘 회피, 쌓이는 마음",
        "strengths": "평화로운 분위기를 만들고 상대를 편안하게 하는 능력",
        "reasonDetail": "의견이 갈릴 것 같을 때, 서운한 마음이 올라올 때, 분위기가 어색해질 때",
        "frequentSaying": '"아니야, 그냥 넘어가자"',
        "changeTips": (
            '서운한 일이 생기면 따지는 말 대신 "싸우려는 게 아니라 알려주고 싶어서"로 시작하기\n'
            "'사실 + 내 감정' 두 문장만 말해보기. 예: \"약속이 바뀌어서 조금 서운했어\"\n"
            "작은 의견 차이부터 말해보며 말해도 관계가 깨지지 않는다는 경험 쌓기"
        ),
        "oneLiner": "말하는 것과 싸우는 것은 다릅니다. 작게 자주 말할수록 큰 싸움은 줄어듭니다",
        "shareLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 결과: 갈등 회피형 🕊️ 싸움 날까 봐 말을 먼저 삼키는 거래... 아무거나 좋아 하는 사람 이거 너 같아ㅋㅋ 너도 해봐",
    },
    {
        "type": "Type4",
        "emoji": "⭐",
        "title": "좋은 사람으로 보이고 싶은 사람, 인정 갈구형 ⭐",
        "typeName": "인정 갈구형",
        "realReason": "상대에게 인정받고 만족시켜야 안심이 된다",
        "shortDescription": "당신은 눈치를 보는 게 아닙니다. 상대의 표정에서 '잘하고 있다'는 신호를 찾고 있습니다.",
        "description": (
            "내 선택이 상대 마음에 들었는지, 내가 재미있는 사람인지, 칭찬받을 만한 반응을 했는지를 계속 점검합니다. "
            "반응이 차가우면 하루 종일 마음이 쓰이고 다음엔 더 잘하려고 애씁니다. "
            "상대의 인정이 곧 내 점수처럼 느껴지는 타입입니다."
        ),
        "keywords": "칭찬 기다림, 잘 보이기, 만족시키기, 반응 점검, 점수 매김",
        "strengths": "상대를 기쁘게 하려는 노력과 센스가 있고 관계에 성실하게 임함",
        "reasonDetail": "내 선택을 상대가 평가할 때, 상대의 반응이 평소보다 차가울 때",
        "frequentSaying": '"나 괜찮았어? 어땠어?"',
        "changeTips": (
            "칭찬이 없어도 '오늘 내가 해낸 것' 3가지를 스스로에게 먼저 칭찬해 주기\n"
            '상대의 반응을 점검하고 싶을 때 "지금 내가 원하는 건 칭찬일까 안심일까"를 구분하기\n'
            "상대 만족과 상관없이 나 혼자 즐거운 활동을 일주일에 하나 만들기"
        ),
        "oneLiner": "인정받고 싶은 마음은 자연스럽습니다. 인정의 일부를 나 자신에게서 받으면 눈치가 훨씬 가벼워집니다",
        "shareLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 결과: 인정 갈구형 ⭐ 상대 표정에서 잘하고 있다는 신호를 찾는 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?",
    },
    {
        "type": "Type5",
        "emoji": "✂️",
        "title": "말하기 전에 스스로 검열하는 사람, 자기 검열형 ✂️",
        "typeName": "자기 검열형",
        "realReason": "상대 반응이 오기도 전에 내 말을 내가 먼저 걸러낸다",
        "shortDescription": "당신은 눈치를 보는 게 아닙니다. 아직 나오지도 않은 상대의 반응을 미리 상상하며 내 말을 스스로 다듬고 있습니다.",
        "description": (
            '"이 말 하면 이상하게 들릴까?", "투정처럼 보이면 어쩌지?" 하며 말하기 전에 문장을 수없이 고칩니다. '
            "말한 뒤에도 내가 한 말을 머릿속에서 되감으며 후회합니다. "
            "상대는 아무렇지 않은데 혼자서만 에너지를 많이 쓰고 지치는 타입입니다."
        ),
        "keywords": "문장 고쳐 쓰기, 말 삼키기, 되감기, 상상 속 반응, 혼자 지침",
        "strengths": "신중하고 말을 가볍게 하지 않으며 상대를 배려해 표현을 고르는 섬세함",
        "reasonDetail": "말을 꺼내기 직전, 말을 마친 직후, 서운함이나 부탁을 전해야 할 때",
        "frequentSaying": '"이 말 해도 되는 건가?"',
        "changeTips": (
            "말하기 전에 문장을 고치는 횟수를 '한 번'으로 정하고 그다음에는 그대로 말해보기\n"
            "말한 뒤 되감기가 시작되면 상대의 실제 반응을 사실로만 떠올려 보기\n"
            "가벼운 말 한마디를 일부러 다듬지 않고 던져보며 아무 일도 없다는 경험 쌓기"
        ),
        "oneLiner": "완벽한 문장은 필요 없습니다. 조금 서툴러도 진심이 담긴 한마디가 더 가깝게 닿습니다",
        "shareLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 결과: 자기 검열형 ✂️ 말하기 전에 내가 먼저 문장을 걸러내는 거래... 이거 너 같아ㅠ 해보고 알려줘",
    },
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def L(s: str) -> str:
    return f'L("{esc(s)}")'


data_lines = [
    "/**",
    f" * {TITLE}",
    f" * slug: {SLUG}",
    " * 10문항 4지선다 · 5유형",
    " */",
    "",
    "import {",
    "  PHASE3_LOVE_EYEING_REASON_I18N,",
    "  type Phase3LoveEyeingReasonForeignLocale,",
    "  type Phase3LoveEyeingReasonResultText,",
    "} from './phase3LoveEyeingReasonI18n';",
    "",
    "export type Phase3LoveEyeingReasonLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    "type LocaleText = Record<Phase3LoveEyeingReasonLocaleKey, string>;",
    "",
    "function L(ko: string): LocaleText {",
    "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };",
    "}",
    "",
    "const FOREIGN_LOCALES = Object.keys(PHASE3_LOVE_EYEING_REASON_I18N) as Phase3LoveEyeingReasonForeignLocale[];",
    "",
    "function withForeign(",
    "  ko: string,",
    "  pickFn: (loc: Phase3LoveEyeingReasonForeignLocale) => string,",
    "): LocaleText {",
    "  const t = L(ko);",
    "  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);",
    "  return t;",
    "}",
    "",
    "export interface Phase3LoveEyeingReasonQuestion {",
    "  id: number;",
    "  question: LocaleText;",
    "  options: { text: LocaleText; score: number }[];",
    "}",
    "",
    "export interface Phase3LoveEyeingReasonResult {",
    "  type: string;",
    "  emoji: string;",
    "  title: LocaleText;",
    "  typeName: LocaleText;",
    "  realReason: LocaleText;",
    "  shortDescription: LocaleText;",
    "  description: LocaleText;",
    "  keywords: LocaleText;",
    "  strengths: LocaleText;",
    "  reasonDetail: LocaleText;",
    "  frequentSaying: LocaleText;",
    "  changeTips: LocaleText;",
    "  oneLiner: LocaleText;",
    "  shareLine: LocaleText;",
    "}",
    "",
    "export const PHASE3_LOVE_EYEING_REASON_TYPES = [",
    "  'Type1',",
    "  'Type2',",
    "  'Type3',",
    "  'Type4',",
    "  'Type5',",
    "] as const;",
    "",
    "/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */",
    "export function calculatePhase3LoveEyeingReasonScores(answers: number[]): Record<string, number> {",
    "  const scores: Record<string, number> = {};",
    "  for (const type of PHASE3_LOVE_EYEING_REASON_TYPES) scores[type] = 0;",
    "  for (const a of answers) {",
    "    const key = `Type${a}`;",
    "    if (key in scores) scores[key] += 1;",
    "  }",
    "  return scores;",
    "}",
    "",
    "/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */",
    "export function calculatePhase3LoveEyeingReasonResult(answers: number[]): string {",
    "  const scores = calculatePhase3LoveEyeingReasonScores(answers);",
    "  const max = Math.max(...Object.values(scores));",
    "  const tied = PHASE3_LOVE_EYEING_REASON_TYPES.filter((t) => scores[t] === max);",
    "  if (tied.length === 1) return tied[0];",
    "  for (const a of answers) {",
    "    const key = `Type${a}`;",
    "    if ((tied as readonly string[]).includes(key)) return key;",
    "  }",
    "  return tied[0];",
    "}",
    "",
    "/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */",
    "export function getPhase3LoveEyeingReasonHiddenType(answers: number[]): string | null {",
    "  const scores = calculatePhase3LoveEyeingReasonScores(answers);",
    "  const sorted = [...PHASE3_LOVE_EYEING_REASON_TYPES].sort((a, b) => scores[b] - scores[a]);",
    "  const [first, second, third] = sorted;",
    "  if (scores[first] === scores[second]) return null;",
    "  if (scores[second] === 0 || scores[second] === scores[third]) return null;",
    "  return second;",
    "}",
    "",
    "const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [",
]

for (q, opts), scores in zip(QUESTIONS, MAPPING):
    data_lines.append("  {")
    data_lines.append(f'    q: "{esc(q)}",')
    data_lines.append("    opts: [")
    for opt, sc in zip(opts, scores):
        data_lines.append(f'      ["{esc(opt)}", {sc}],')
    data_lines.append("    ],")
    data_lines.append("  },")

data_lines += [
    "];",
    "",
    "export const phase3LoveEyeingReasonQuestions: Phase3LoveEyeingReasonQuestion[] =",
    "  RAW_QUESTIONS.map((raw, idx) => ({",
    "    id: idx + 1,",
    "    question: withForeign(raw.q, (loc) => PHASE3_LOVE_EYEING_REASON_I18N[loc].questions[idx].q),",
    "    options: raw.opts.map(([text, score], oi) => ({",
    "      text: withForeign(text, (loc) => PHASE3_LOVE_EYEING_REASON_I18N[loc].questions[idx].opts[oi]),",
    "      score,",
    "    })),",
    "  }));",
    "",
    "const RESULT_TEXT_KEYS = [",
    "  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',",
    "  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',",
    "] as const satisfies readonly (keyof Phase3LoveEyeingReasonResultText)[];",
    "",
    "const KO_RESULTS: Phase3LoveEyeingReasonResult[] = [",
]

for r in RESULTS:
    data_lines.append("  {")
    data_lines.append(f'    type: "{r["type"]}",')
    data_lines.append(f'    emoji: "{r["emoji"]}",')
    for k in [
        "title",
        "typeName",
        "realReason",
        "shortDescription",
        "description",
        "keywords",
        "strengths",
        "reasonDetail",
        "frequentSaying",
        "changeTips",
        "oneLiner",
        "shareLine",
    ]:
        data_lines.append(f"    {k}: {L(r[k])},")
    data_lines.append("  },")

data_lines += [
    "];",
    "",
    "export const phase3LoveEyeingReasonResults: Phase3LoveEyeingReasonResult[] = KO_RESULTS.map((r, ri) => {",
    "  const merged: Phase3LoveEyeingReasonResult = { ...r };",
    "  for (const key of RESULT_TEXT_KEYS) {",
    "    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_LOVE_EYEING_REASON_I18N[loc].results[ri][key]);",
    "  }",
    "  return merged;",
    "});",
    "",
    "export const PHASE3_LOVE_EYEING_REASON_META = {",
    f'  title: withForeign("{esc(TITLE)}", (loc) => PHASE3_LOVE_EYEING_REASON_I18N[loc].meta.title),',
    f'  description: withForeign("{esc(META_DESC)}", (loc) => PHASE3_LOVE_EYEING_REASON_I18N[loc].meta.description),',
    "  tags: {",
    f"    ko: {json.dumps(TAGS, ensure_ascii=False)},",
    "    en: PHASE3_LOVE_EYEING_REASON_I18N.en.meta.tags,",
    "    ja: PHASE3_LOVE_EYEING_REASON_I18N.ja.meta.tags,",
    "    'zh-CN': PHASE3_LOVE_EYEING_REASON_I18N['zh-CN'].meta.tags,",
    "    'zh-TW': PHASE3_LOVE_EYEING_REASON_I18N['zh-TW'].meta.tags,",
    "    vi: PHASE3_LOVE_EYEING_REASON_I18N.vi.meta.tags,",
    "    id: PHASE3_LOVE_EYEING_REASON_I18N.id.meta.tags,",
    "  },",
    "};",
    "",
]

(root / "lib" / "phase3LoveEyeingReasonData.ts").write_text("\n".join(data_lines) + "\n", encoding="utf-8")

empty_q = [{"q": "", "opts": ["", "", "", ""]} for _ in range(10)]
empty_r = [
    {
        "title": "",
        "typeName": "",
        "realReason": "",
        "shortDescription": "",
        "description": "",
        "keywords": "",
        "strengths": "",
        "reasonDetail": "",
        "frequentSaying": "",
        "changeTips": "",
        "oneLiner": "",
        "shareLine": "",
    }
    for _ in range(5)
]
empty_locale = {
    "meta": {"title": "", "description": "", "tags": ["", "", ""]},
    "questions": empty_q,
    "results": empty_r,
}

i18n = [
    "export type Phase3LoveEyeingReasonForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    "",
    "export type Phase3LoveEyeingReasonResultText = {",
    "  title: string;",
    "  typeName: string;",
    "  realReason: string;",
    "  shortDescription: string;",
    "  description: string;",
    "  keywords: string;",
    "  strengths: string;",
    "  reasonDetail: string;",
    "  frequentSaying: string;",
    "  changeTips: string;",
    "  oneLiner: string;",
    "  shareLine: string;",
    "};",
    "",
    "type LocaleBundle = {",
    "  meta: { title: string; description: string; tags: string[] };",
    "  questions: { q: string; opts: string[] }[];",
    "  results: Phase3LoveEyeingReasonResultText[];",
    "};",
    "",
    "export const PHASE3_LOVE_EYEING_REASON_I18N: Record<Phase3LoveEyeingReasonForeignLocale, LocaleBundle> = "
    + json.dumps(
        {loc: empty_locale for loc in ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]},
        ensure_ascii=False,
        indent=2,
    )
    + " as const;",
    "",
]
(root / "lib" / "phase3LoveEyeingReasonI18n.ts").write_text("\n".join(i18n), encoding="utf-8")

msg = {
    NS: {
        "startMessage": {
            "line1": "연애만 하면, 왜 상대 기분부터 살피게 될까?",
            "line2": "메뉴 하나 고를 때도, 말 한마디 할 때도 먼저 상대의 표정을 확인합니다. 상대는 아무렇지 않은데 나만 혼자 날씨를 읽고 있고, 데이트가 끝나면 즐거움보다 피곤함이 먼저 몰려옵니다.",
            "line3": "눈치를 보는 데에는 사람마다 서로 다른 이유가 있습니다. 거절당할까 봐 겁나서일 수도, 상대를 너무 배려해서일 수도, 싸움이 싫어서일 수도, 인정받고 싶어서일 수도, 내 말을 스스로 먼저 검열해서일 수도 있습니다. 내 반응을 보면 내가 어떤 사람인지가 보입니다.",
            "line4": "10가지 상황으로 내가 눈치를 보게 되는 진짜 이유와 편해지는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "눈치 보는 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "눈치 보는 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 이유",
            "strengths": "이 유형의 강점",
            "reasonDetail": "눈치가 켜지는 순간",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "편해지는 법",
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
            "startDefault": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
            "startKakao": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
            "startWechat": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
            "startWhatsapp": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
            "startTelegram": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
            "startLine": "나는 왜 연애할 때 자꾸 눈치만 볼까? 🥀 눈치 보게 되는 진짜 이유, 너도 해봐!",
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
    path = root / "messages" / loc / "tests" / f"{SLUG}.json"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

title_json = {loc: (TITLE if loc == "ko" else "") for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
desc_json = {loc: (META_DESC if loc == "ko" else "") for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
tags_json = {loc: (TAGS if loc == "ko" else ["", "", ""]) for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}

sql = f"""-- {TITLE}
-- slug: {SLUG}
-- thumbnail: {THUMB}
-- category: personality · format: scenario_4

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
  '{json.dumps(title_json, ensure_ascii=False)}',
  '{json.dumps(desc_json, ensure_ascii=False)}',
  '{THUMB}',
  'psychology',
  'personality',
  'scenario_4',
  '{json.dumps(tags_json, ensure_ascii=False)}',
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
(root / "supabase" / f"insert-{SLUG}.sql").write_text(sql, encoding="utf-8")

src = (root / "components" / "Phase3ContactObsessionReasonTestClient.tsx").read_text(encoding="utf-8")
dst = src
for a, b in [
    ("ContactObsessionReason", "LoveEyeingReason"),
    ("contactObsessionReason", "loveEyeingReason"),
    ("CONTACT_OBSESSION_REASON", "LOVE_EYEING_REASON"),
    ("phase3ContactObsessionReasonTest", NS),
]:
    dst = dst.replace(a, b)
(root / "components" / "Phase3LoveEyeingReasonTestClient.tsx").write_text(dst, encoding="utf-8")


def result_for(answers):
    scores = {i: 0 for i in range(1, 6)}
    for a in answers:
        scores[a] += 1
    maxv = max(scores.values())
    tied = [i for i, v in scores.items() if v == maxv]
    if len(tied) == 1:
        return tied[0]
    for a in answers:
        if a in tied:
            return a
    return tied[0]


for t in range(1, 6):
    answers = [t if t in row else row[0] for row in MAPPING]
    assert result_for(answers) == t, (t, answers)
print("Type1-5 reachability ok")
print("generated", SLUG)
