# -*- coding: utf-8 -*-
"""Generate phase3-overgiving-early-love KO-first (registry scenario_4)."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-overgiving-early-love"
NS = "phase3OvergivingEarlyLoveTest"
THUMB = "p3_test_overgiving_early_love.webp"
TITLE = "나는 왜 연애 초반에 과하게 잘해줄까?"
META_DESC = (
    "처음부터 이렇게 잘해주면 나중에 지치는 거 알면서, 왜 그럴까? "
    "10가지 상황으로 초반에 올인하는 진짜 이유와 속도를 조절하는 법을 알려드립니다."
)
TAGS = ["연애심리", "연애패턴"]

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
        "썸 상대와 두 번째 만남을 앞두고 있다. 나는?",
        [
            "이 사람이 마음이 식어 떠날까 불안해서 미리 맛집 예약과 선물을 준비해 붙잡아 둔다",
            "이만큼 준비하면 상대도 나에게 그만큼 마음을 써 줄 거라고 기대하게 된다",
            "설레는 마음이 넘쳐서 만나기 전부터 계획이 한꺼번에 머릿속에서 쏟아진다",
            "이번에도 센스 있고 좋은 사람이라는 말을 듣고 싶어 신경 써서 챙긴다",
        ],
    ),
    (
        '상대가 "오늘 하루 어땠어?"라고 가볍게 물었다. 나는?',
        [
            "길게 답장하며 정성을 보이면 나중에 상대도 비슷하게 돌려줄 거라고 기대한다",
            "반가운 마음이 커서 하루 일과를 한꺼번에 쏟아내듯 길게 답한다",
            "다정하고 성실한 사람으로 보이고 싶어 답장 하나도 공들여 쓴다",
            "이 정성이 상대 마음을 먼저 사로잡을 기회라 생각하며 적극적으로 답한다",
        ],
    ),
    (
        "상대의 생일이 만난 지 2주 만에 돌아왔다. 나는?",
        [
            "설렘이 커서 선물과 이벤트를 크게 준비하고 싶은 마음이 넘친다",
            "이런 정성을 보여야 좋은 사람으로 기억될 것 같아 무리해서 챙긴다",
            "처음부터 크게 챙기면 상대가 나를 특별하게 여기고 마음을 줄 거라 생각한다",
            "대충 챙기면 마음이 식을까 불안해서 최선을 다해 붙잡는다",
        ],
    ),
    (
        '상대가 "너 진짜 잘 챙긴다"라고 칭찬했다. 나는?',
        [
            "이 말이 기뻐서 더 좋은 사람으로 인정받으려고 더 애쓰게 된다",
            "호감을 확실히 얻었다는 신호라 생각해 속도를 더 높여 챙긴다",
            "이 칭찬이 사라지면 안 될 것 같아 지금보다 더 잘해서 놓치지 않으려 한다",
            "이만큼 잘해줬으니 이제 상대도 나에게 같은 정성을 줄 차례라고 기대한다",
        ],
    ),
    (
        "상대가 며칠 바빠서 연락이 줄었다. 나는?",
        [
            "먼저 연락하고 응원 메시지를 보내 존재감을 확실히 남겨 호감을 지킨다",
            "연락이 줄어든 게 마음이 식은 신호일까 불안해서 더 챙기며 붙잡는다",
            "내가 이렇게 챙겼는데 왜 돌려주지 않나 서운함이 올라온다",
            "보고 싶은 마음이 넘쳐서 하루에도 몇 번씩 연락하고 싶어진다",
        ],
    ),
    (
        "만난 지 한 달, 상대가 나 때문에 힘이 났다고 말했다. 나는?",
        [
            "기쁨이 넘쳐서 더 해주고 싶은 마음이 샘솟아 이것저것 계획한다",
            "좋은 사람이라는 인정을 받은 것 같아 더 잘해 주려고 노력한다",
            "이 말을 계속 듣고 싶어서 떠나지 않게 더 챙겨 놓친다는 불안을 덜어낸다",
            "내가 준 만큼 앞으로 상대도 비슷하게 돌려줄 거라는 기대가 커진다",
        ],
    ),
    (
        "상대가 데이트 장소를 직접 정해 보겠다고 했다. 나는?",
        [
            "내가 안 챙기면 좋은 사람으로 보이지 않을까 싶어 은근히 불안해 내가 먼저 정하려 한다",
            "장소를 내가 정해야 호감을 선점할 수 있다고 생각해 먼저 제안한다",
            "지금까지 내가 다 챙겼으니 이번엔 상대 차례라는 생각이 든다",
            "설레는 마음에 이미 여러 후보를 정해 놓은 상태다",
        ],
    ),
    (
        "상대에게 기대한 만큼의 반응이 오지 않았다. 나는?",
        [
            "처음 인상을 더 확실히 남겨야겠다며 더 세게 호감을 표현한다",
            "이러다 떠날까 불안해서 더 잘해 붙잡으려 한다",
            "감정이 앞서서 반응을 따지기 전에 마음이 넘쳐 더 해주고 싶어진다",
            "내가 충분히 좋은 사람으로 보이지 않았나 싶어 더 노력한다",
        ],
    ),
    (
        '상대가 "너무 잘해줘서 부담돼"라고 말했다. 나는?',
        [
            "부담된다는 말에 떠날까 불안해져 더 조심하며 잘해보려 한다",
            "이만큼 잘했는데 부담이라니 서운하고 돌려받지 못하는 기분이 든다",
            "좋은 사람으로 보이려던 노력이 오히려 평가를 깎은 것 같아 위축된다",
            "호감을 얻으려던 방식이 과했나 싶어 속도를 어떻게 줄일지 계산한다",
        ],
    ),
    (
        "내가 초반에 과하게 잘해주는 가장 솔직한 이유는?",
        [
            '"잘해준 만큼 돌려받고 싶어서"',
            '"설레는 마음이 넘쳐서 멈추기 어려워서"',
            '"먼저 잘해줘야 상대가 나를 좋아하게 될 것 같아서"',
            '"떠날까 불안해서 미리 붙잡고 싶어서"',
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🏁",
        "title": "먼저 잘해서 마음을 얻으려는 사람, 호감 선점형 🏁",
        "typeName": "호감 선점형",
        "realReason": "먼저 크게 잘해줘야 상대가 나를 좋아하게 된다고 믿는다",
        "shortDescription": "당신은 과한 사람이 아닙니다. 호감은 먼저 표현하는 쪽이 얻는다고 믿고 속도를 높이고 있습니다.",
        "description": (
            "초반에 존재감을 확실히 남기려 선물, 연락, 이벤트를 앞당깁니다. "
            "호감을 얻을 수는 있지만 상대는 부담을 느끼거나 나의 속도에 맞추기 버거워질 수 있습니다. "
            "호감은 양이 아니라 리듬으로 자라는 경우가 많습니다.\n\n"
            "진짜 이유를 풀어보면: 마음이 큰 게 아니라 '먼저 잘해야 얻는다'는 공식이 속도를 올리고 있음"
        ),
        "keywords": "먼저 표현, 존재감, 선점, 속도, 확실한 인상",
        "strengths": "적극적이고 표현이 분명하며 호감을 행동으로 보여주는 용기",
        "reasonDetail": "두 번째 만남 전, 칭찬받았을 때, 반응이 기대에 못 미칠 때",
        "frequentSaying": '"처음에 확실히 잘해야지"',
        "changeTips": (
            "연락과 선물에 '주 2회, 소소한 선물만' 같은 나만의 상한선 정하기\n"
            "상대의 속도(답장 빈도·만남 간격)를 관찰해 비슷한 리듬으로 맞추기\n"
            "호감은 시간이 쌓일수록 자란다는 점을 기억하고 한 걸음씩 가기"
        ),
        "oneLiner": "호감은 달리기가 아니라 같이 걷는 속도에서 자랍니다. 한 걸음 늦춰도 마음은 닿습니다",
        "shareLine": "나는 왜 연애 초반에 과하게 잘해줄까? 결과: 호감 선점형 🏁 먼저 잘해야 마음을 얻는다고 믿는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?",
    },
    {
        "type": "Type2",
        "emoji": "🧲",
        "title": "떠날까 불안해 미리 붙잡는 사람, 불안 선제형 🧲",
        "typeName": "불안 선제형",
        "realReason": "마음이 식어 떠날까 두려워서 미리 잘해 붙잡아 둔다",
        "shortDescription": "당신은 베푸는 게 아닙니다. 놓칠까 불안해서 먼저 붙잡고 있습니다.",
        "description": (
            "연락이 줄거나 반응이 미지근하면 불안이 올라와 더 챙기게 됩니다. "
            "칭찬이 사라질까 봐 한 걸음 더 애쓰고, 그 노력은 지속하기 어려운 속도가 됩니다. "
            "불안이 행동을 이끌면 잘해줄수록 불안도 함께 커집니다.\n\n"
            "진짜 이유를 풀어보면: 상대의 행동이 아니라 '놓칠 수 있다'는 내면의 불안이 행동의 크기를 키움"
        ),
        "keywords": "떠날까 불안, 미리 붙잡기, 더 잘하기, 놓침 두려움, 불안 해소",
        "strengths": "관계를 소중히 여기고 상대의 작은 변화에 세심하게 반응함",
        "reasonDetail": "연락이 줄 때, 반응이 미지근할 때, 칭찬이 끊길까 걱정될 때",
        "frequentSaying": '"혹시 마음이 식은 건 아닐까?"',
        "changeTips": (
            "불안이 올라올 때 '지금 실제로 일어난 일'과 '내가 상상한 걱정'을 두 줄로 나눠 적기\n"
            "더 잘해주는 대신 \"요즘 연락이 줄어서 조금 불안해\"라고 솔직하게 말하기\n"
            "연인 밖에서 나를 채우는 활동을 늘려 불안의 무게를 분산하기\n"
            "놓칠까 불안한 마음이 반복되어 일상에 영향을 준다면 심리상담 전문가와 그 뿌리를 안전하게 살펴보세요"
        ),
        "oneLiner": "붙잡는 마음은 사랑의 다른 얼굴입니다. 불안을 말로 꺼내면 행동의 무게가 줄어듭니다",
        "shareLine": "나는 왜 연애 초반에 과하게 잘해줄까? 결과: 불안 선제형 🧲 떠날까 불안해서 미리 붙잡는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘",
    },
    {
        "type": "Type3",
        "emoji": "🎁",
        "title": "준 만큼 돌려받고 싶은 사람, 보상 기대형 🎁",
        "typeName": "보상 기대형",
        "realReason": "잘해준 만큼 상대도 비슷하게 돌려줄 것을 기대한다",
        "shortDescription": "당신은 베푸는 게 아닙니다. 마음속에 '돌려받는 계산서'가 조용히 쌓이고 있습니다.",
        "description": (
            "이만큼 챙겼으니 상대도 같은 정성을 줄 차례라고 기대하고, 반응이 없으면 서운함이 올라옵니다. "
            "말하지 않은 기대는 상대에게 닿지 않고, 서운함만 쌓여 관계에서 힘이 빠집니다. "
            "준 마음을 계산서처럼 쌓아 두면 사랑이 거래처럼 느껴지기도 합니다.\n\n"
            "진짜 이유를 풀어보면: 순수한 헌신이 아니라 말하지 않은 기대가 행동을 이끌고 있음"
        ),
        "keywords": "준 만큼 받기, 계산서, 돌려받음, 말 안 한 기대, 서운함 누적",
        "strengths": "관계에서 공정한 주고받음을 중시하고 성의 있게 표현하는 성실함",
        "reasonDetail": "길게 답장할 때, 선물과 이벤트를 준비할 때, 상대 차례라고 느낄 때",
        "frequentSaying": '"나는 이만큼 했는데"',
        "changeTips": (
            "잘해주기 전에 '이 행동에 내가 기대하는 것이 있는가'를 먼저 물어보기\n"
            "기대가 있다면 \"나는 이럴 때 이렇게 해주면 좋아\"라고 말로 요청하기\n"
            "베푸는 일을 '내가 해주고 싶은 만큼만'으로 한정해 계산서를 줄이기"
        ),
        "oneLiner": "기대는 숨기면 서운함이 되고 말하면 요청이 됩니다. 요청으로 바꾸면 사랑이 가벼워집니다",
        "shareLine": "나는 왜 연애 초반에 과하게 잘해줄까? 결과: 보상 기대형 🎁 준 만큼 돌려받고 싶은 계산서가 쌓이는 거래... 이거 너 같아ㅋㅋ 너도 해봐",
    },
    {
        "type": "Type4",
        "emoji": "🔥",
        "title": "설렘이 넘쳐 속도가 안 줄어드는 사람, 열정 과열형 🔥",
        "typeName": "열정 과열형",
        "realReason": "설렘과 감정이 커서 행동이 한꺼번에 넘친다",
        "shortDescription": "당신은 계산하는 게 아닙니다. 마음이 너무 뜨거워서 멈추는 브레이크가 약합니다.",
        "description": (
            "보고 싶은 마음에 하루 몇 번씩 연락하고, 만나기 전부터 계획이 쏟아집니다. "
            "순수한 열정이지만 상대의 속도와 맞지 않으면 부담이 되고, 나도 곧 방전됩니다. "
            "감정이 행동을 앞지르는 상태입니다.\n\n"
            "진짜 이유를 풀어보면: 의도가 아니라 감정의 속도가 행동의 속도보다 빠른 상태"
        ),
        "keywords": "설렘, 넘침, 즉각 행동, 보고 싶음, 브레이크 약함",
        "strengths": "감정이 풍부하고 솔직하며 사랑을 진심으로 표현하는 열정",
        "reasonDetail": "만나기 전, 상대가 바쁠 때, 기념일이나 생일이 다가올 때",
        "frequentSaying": '"너무 보고 싶어서 참을 수가 없어"',
        "changeTips": (
            "하고 싶은 행동을 메모장에 먼저 적고 30분 뒤에도 하고 싶은지 확인하기\n"
            "하루 연락 횟수나 이벤트 크기에 '오늘은 한 가지만' 규칙 정하기\n"
            "넘치는 열정은 운동·창작 같은 나만의 출구에도 나눠 쓰기"
        ),
        "oneLiner": "뜨거움은 장점입니다. 연료를 나눠 쓰면 더 오래 타오릅니다",
        "shareLine": "나는 왜 연애 초반에 과하게 잘해줄까? 결과: 열정 과열형 🔥 설렘이 넘쳐서 브레이크가 약한 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?",
    },
    {
        "type": "Type5",
        "emoji": "⭐",
        "title": "좋은 사람으로 인정받고 싶은 사람, 인정 갈구형 ⭐",
        "typeName": "인정 갈구형",
        "realReason": "좋은 사람이라는 인정과 평가를 받고 싶어 애쓴다",
        "shortDescription": "당신은 베푸는 게 아닙니다. 상대의 눈에 좋은 사람으로 비치고 싶어서 애쓰고 있습니다.",
        "description": (
            "센스 있고 성실한 사람이라는 말을 듣고 싶어 답장 하나, 선물 하나에도 공을 들입니다. "
            "칭찬을 받으면 더 노력하게 되고, 칭찬이 없으면 위축됩니다. "
            "인정이 연료가 되면 상대의 반응에 따라 에너지가 크게 흔들립니다.\n\n"
            "진짜 이유를 풀어보면: 상대의 반응이 내 가치를 정하는 점수표처럼 쓰이고 있음"
        ),
        "keywords": "좋은 사람, 칭찬, 인정, 평가, 애쓰기",
        "strengths": "성실하고 섬세하며 상대를 기쁘게 하려는 노력과 센스",
        "reasonDetail": "칭찬을 받을 때, 센스를 보여줘야 할 때, 평가받는 느낌이 들 때",
        "frequentSaying": '"나 괜찮은 사람이지?"',
        "changeTips": (
            "칭찬이 없어도 '오늘 내가 해낸 것' 세 가지를 스스로에게 먼저 칭찬하기\n"
            "애쓰기 전에 \"지금 내가 원하는 건 칭찬일까, 상대의 행복일까\"를 구분하기\n"
            "평소의 모습 그대로 보여 주고 상대의 반응을 관찰해 보기"
        ),
        "oneLiner": "인정은 받을수록 목마릅니다. 일부를 나 자신에게서 받으면 애쓰는 속도가 줄어듭니다",
        "shareLine": "나는 왜 연애 초반에 과하게 잘해줄까? 결과: 인정 갈구형 ⭐ 좋은 사람으로 인정받고 싶어서 애쓰는 거래... 이거 너 같아ㅠ 해보고 알려줘",
    },
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def L(s: str) -> str:
    return f'L("{esc(s)}")'


# --- data.ts ---
data_lines = [
    "/**",
    f" * {TITLE}",
    f" * slug: {SLUG}",
    " * 10문항 4지선다 · 5유형",
    " */",
    "",
    "import {",
    "  PHASE3_OVERGIVING_EARLY_LOVE_I18N,",
    "  type Phase3OvergivingEarlyLoveForeignLocale,",
    "  type Phase3OvergivingEarlyLoveResultText,",
    "} from './phase3OvergivingEarlyLoveI18n';",
    "",
    "export type Phase3OvergivingEarlyLoveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    "type LocaleText = Record<Phase3OvergivingEarlyLoveLocaleKey, string>;",
    "",
    "function L(ko: string): LocaleText {",
    "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };",
    "}",
    "",
    "const FOREIGN_LOCALES = Object.keys(PHASE3_OVERGIVING_EARLY_LOVE_I18N) as Phase3OvergivingEarlyLoveForeignLocale[];",
    "",
    "function withForeign(",
    "  ko: string,",
    "  pickFn: (loc: Phase3OvergivingEarlyLoveForeignLocale) => string,",
    "): LocaleText {",
    "  const t = L(ko);",
    "  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);",
    "  return t;",
    "}",
    "",
    "export interface Phase3OvergivingEarlyLoveQuestion {",
    "  id: number;",
    "  question: LocaleText;",
    "  options: { text: LocaleText; score: number }[];",
    "}",
    "",
    "export interface Phase3OvergivingEarlyLoveResult {",
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
    "export const PHASE3_OVERGIVING_EARLY_LOVE_TYPES = [",
    "  'Type1',",
    "  'Type2',",
    "  'Type3',",
    "  'Type4',",
    "  'Type5',",
    "] as const;",
    "",
    "/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */",
    "export function calculatePhase3OvergivingEarlyLoveScores(answers: number[]): Record<string, number> {",
    "  const scores: Record<string, number> = {};",
    "  for (const type of PHASE3_OVERGIVING_EARLY_LOVE_TYPES) scores[type] = 0;",
    "  for (const a of answers) {",
    "    const key = `Type${a}`;",
    "    if (key in scores) scores[key] += 1;",
    "  }",
    "  return scores;",
    "}",
    "",
    "/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */",
    "export function calculatePhase3OvergivingEarlyLoveResult(answers: number[]): string {",
    "  const scores = calculatePhase3OvergivingEarlyLoveScores(answers);",
    "  const max = Math.max(...Object.values(scores));",
    "  const tied = PHASE3_OVERGIVING_EARLY_LOVE_TYPES.filter((t) => scores[t] === max);",
    "  if (tied.length === 1) return tied[0];",
    "  for (const a of answers) {",
    "    const key = `Type${a}`;",
    "    if ((tied as readonly string[]).includes(key)) return key;",
    "  }",
    "  return tied[0];",
    "}",
    "",
    "/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */",
    "export function getPhase3OvergivingEarlyLoveHiddenType(answers: number[]): string | null {",
    "  const scores = calculatePhase3OvergivingEarlyLoveScores(answers);",
    "  const sorted = [...PHASE3_OVERGIVING_EARLY_LOVE_TYPES].sort((a, b) => scores[b] - scores[a]);",
    "  const [first, second, third] = sorted;",
    "  if (scores[first] === scores[second]) return null;",
    "  if (scores[second] === 0 || scores[second] === scores[third]) return null;",
    "  return second;",
    "}",
    "",
    "const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [",
]

for qi, ((q, opts), scores) in enumerate(zip(QUESTIONS, MAPPING)):
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
    "export const phase3OvergivingEarlyLoveQuestions: Phase3OvergivingEarlyLoveQuestion[] =",
    "  RAW_QUESTIONS.map((raw, idx) => ({",
    "    id: idx + 1,",
    "    question: withForeign(raw.q, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].questions[idx].q),",
    "    options: raw.opts.map(([text, score], oi) => ({",
    "      text: withForeign(text, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].questions[idx].opts[oi]),",
    "      score,",
    "    })),",
    "  }));",
    "",
    "const RESULT_TEXT_KEYS = [",
    "  'title',",
    "  'typeName',",
    "  'realReason',",
    "  'shortDescription',",
    "  'description',",
    "  'keywords',",
    "  'strengths',",
    "  'reasonDetail',",
    "  'frequentSaying',",
    "  'changeTips',",
    "  'oneLiner',",
    "  'shareLine',",
    "] as const satisfies readonly (keyof Phase3OvergivingEarlyLoveResultText)[];",
    "",
    "const KO_RESULTS: Phase3OvergivingEarlyLoveResult[] = [",
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
    "export const phase3OvergivingEarlyLoveResults: Phase3OvergivingEarlyLoveResult[] = KO_RESULTS.map((r, ri) => {",
    "  const merged: Phase3OvergivingEarlyLoveResult = { ...r };",
    "  for (const key of RESULT_TEXT_KEYS) {",
    "    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].results[ri][key]);",
    "  }",
    "  return merged;",
    "});",
    "",
    "export const PHASE3_OVERGIVING_EARLY_LOVE_META = {",
    f'  title: withForeign("{esc(TITLE)}", (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].meta.title),',
    f'  description: withForeign("{esc(META_DESC)}", (loc) => PHASE3_OVERGIVING_EARLY_LOVE_I18N[loc].meta.description),',
    "  tags: {",
    f"    ko: {json.dumps(TAGS, ensure_ascii=False)},",
    "    en: PHASE3_OVERGIVING_EARLY_LOVE_I18N.en.meta.tags,",
    "    ja: PHASE3_OVERGIVING_EARLY_LOVE_I18N.ja.meta.tags,",
    "    'zh-CN': PHASE3_OVERGIVING_EARLY_LOVE_I18N['zh-CN'].meta.tags,",
    "    'zh-TW': PHASE3_OVERGIVING_EARLY_LOVE_I18N['zh-TW'].meta.tags,",
    "    vi: PHASE3_OVERGIVING_EARLY_LOVE_I18N.vi.meta.tags,",
    "    id: PHASE3_OVERGIVING_EARLY_LOVE_I18N.id.meta.tags,",
    "  },",
    "};",
    "",
]

(root / "lib" / "phase3OvergivingEarlyLoveData.ts").write_text("\n".join(data_lines) + "\n", encoding="utf-8")

# --- i18n stub (empty foreign; filled later on 다국어처리) ---
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
    "meta": {"title": "", "description": "", "tags": ["", ""]},
    "questions": empty_q,
    "results": empty_r,
}

i18n = [
    "export type Phase3OvergivingEarlyLoveForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    "",
    "export type Phase3OvergivingEarlyLoveResultText = {",
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
    "  results: Phase3OvergivingEarlyLoveResultText[];",
    "};",
    "",
    "export const PHASE3_OVERGIVING_EARLY_LOVE_I18N: Record<Phase3OvergivingEarlyLoveForeignLocale, LocaleBundle> = "
    + json.dumps(
        {loc: empty_locale for loc in ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]},
        ensure_ascii=False,
        indent=2,
    )
    + " as const;",
    "",
]
(root / "lib" / "phase3OvergivingEarlyLoveI18n.ts").write_text("\n".join(i18n), encoding="utf-8")

# --- messages ---
msg = {
    NS: {
        "startMessage": {
            "line1": "처음부터 이렇게 잘해주면 나중에 지치는 거 알면서, 왜 그럴까?",
            "line2": "만난 지 며칠 안 됐는데 아침저녁 안부, 맛집 예약, 깜짝 선물까지 챙기게 됩니다. 상대는 감동하지만 몇 달 뒤 나는 방전되고, 서운함이 올라옵니다. 그런 나를 보며 \"왜 매번 이러지\" 싶어집니다.",
            "line3": "과하게 잘해주는 데에는 사람마다 서로 다른 이유가 있습니다. 호감을 선점하고 싶어서일 수도, 떠날까 불안해서일 수도, 돌려받고 싶어서일 수도, 설렘이 넘쳐서일 수도, 좋은 사람으로 인정받고 싶어서일 수도 있습니다. 내 반응을 보면 내가 어떤 사람인지가 보입니다.",
            "line4": "10가지 상황으로 내가 초반에 올인하는 진짜 이유와 속도를 조절하는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "초반에 잘해주는 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "과하게 잘해주는 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 이유",
            "strengths": "이 유형의 강점",
            "reasonDetail": "과하게 잘해주는 순간",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "속도를 조절하는 법",
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
            "startDefault": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
            "startKakao": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
            "startWechat": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
            "startWhatsapp": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
            "startTelegram": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
            "startLine": "나는 왜 연애 초반에 과하게 잘해줄까? 🏁 처음부터 올인하는 진짜 이유, 너도 해봐!",
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
    if loc == "ko":
        path.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    else:
        # keep same structure as KO shell for UI keys; content remains KO until 다국어처리
        path.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# --- SQL (KO only for now; other locales empty-ish placeholders from KO) ---
title_json = {loc: TITLE if loc == "ko" else "" for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
title_json["ko"] = TITLE
desc_json = {loc: META_DESC if loc == "ko" else "" for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
desc_json["ko"] = META_DESC
tags_json = {loc: TAGS if loc == "ko" else ["", ""] for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
tags_json["ko"] = TAGS

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

# --- Client: clone alone-even-in-love and rename ---
src = (root / "components" / "Phase3AloneEvenInLoveTestClient.tsx").read_text(encoding="utf-8")
dst = src
repls = [
    ("AloneEvenInLove", "OvergivingEarlyLove"),
    ("aloneEvenInLove", "overgivingEarlyLove"),
    ("ALONE_EVEN_IN_LOVE", "OVERGIVING_EARLY_LOVE"),
    ("phase3AloneEvenInLoveTest", NS),
]
for a, b in repls:
    dst = dst.replace(a, b)
(root / "components" / "Phase3OvergivingEarlyLoveTestClient.tsx").write_text(dst, encoding="utf-8")

# verify scoring reachability
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
    answers = []
    for row in MAPPING:
        answers.append(t if t in row else row[0])
    # force pick t whenever available
    answers = [t if t in row else row[0] for row in MAPPING]
    assert result_for(answers) == t, (t, answers, result_for(answers))
print("Type1-5 reachability ok")
print("generated", SLUG)
