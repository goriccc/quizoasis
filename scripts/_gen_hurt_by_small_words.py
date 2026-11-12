# -*- coding: utf-8 -*-
"""Generate phase3-hurt-by-small-words KO-first (registry scenario_4)."""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-hurt-by-small-words"
NS = "phase3HurtBySmallWordsTest"
THUMB = "p3_test_hurt_by_small_words.webp"
TITLE = "나는 왜 연인의 사소한 말에 상처받을까?"
META_DESC = (
    "별 뜻 없는 한마디인데, 왜 마음이 쿵 내려앉을까? "
    "10가지 상황으로 내가 상처받는 진짜 이유와 마음을 지키는 법을 알려드립니다."
)
TAGS = ["연애상처", "연애심리"]

PASCAL = "HurtBySmallWords"
CAMEL = "hurtBySmallWords"
CONST = "HURT_BY_SMALL_WORDS"

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
        '연인이 약속 장소에서 나를 보더니 "오늘 좀 피곤해 보인다"라고 했다. 나는?',
        [
            "나를 만나는 게 반갑지 않은 건가 싶어 마음이 순간 쿵 내려앉는다",
            "오늘 데이트를 위해 신경 썼는데 알아봐 주지 않아서 서운하다",
            "요즘 계속 지쳐 있었는데 그 말이 마지막 한 방처럼 느껴져 울컥한다",
            "내가 별로인 모습으로 보이는 건가 싶어 자꾸 거울이 신경 쓰인다",
        ],
    ),
    (
        '연인이 "너는 늘 그렇지 뭐"라고 웃으며 말했다. 나는?',
        [
            "내가 바라던 따뜻한 반응이 아니라서 아쉽고 기대가 꺾인 느낌이다",
            "하루 종일 몸도 마음도 지쳐 있던 날이라 이 말이 더 크게 와서 눈물이 날 것 같다",
            "나는 늘 부족한 사람이라는 말처럼 들려 마음이 가라앉는다",
            "예전에 비슷한 말을 들었던 기억이 떠올라 그때 감정이 그대로 올라온다",
        ],
    ),
    (
        '연인이 내 이야기를 듣다 "아 그래?" 하고 폰을 봤다. 나는?',
        [
            "피곤한 하루 끝이라 이런 사소한 반응에도 마음이 한계에 닿는 느낌이다",
            "내 이야기가 재미없어서 관심을 거두는 것 같아 자존감이 내려간다",
            "예전에 대화 도중 무시당했던 장면이 겹쳐서 가슴이 철렁한다",
            "내 말이 중요하지 않다는 신호 같아서 더 이야기하고 싶지 않아진다",
        ],
    ),
    (
        '연인이 "그건 좀 아닌 것 같은데"라고 내 의견에 가볍게 말했다. 나는?',
        [
            "내 의견이 가치 없다는 말처럼 들려 위축된다",
            "예전에 의견을 말했다가 무시당했던 기억이 떠올라 말문이 막힌다",
            "내 의견을 거절당한 것 같아 마음의 문이 순간 닫힌다",
            "내 편이 되어줄 거라고 기대했는데 그 기대가 어긋나서 서운하다",
        ],
    ),
    (
        '연인이 "그 정도는 알아서 해야지"라고 말했다. 나는?',
        [
            "예전에 비슷한 말을 들으며 혼자 감당했던 시간이 떠올라 마음이 무거워진다",
            "도움을 요청하는 것 자체가 거절당한 것 같아 다음엔 말을 꺼내기 어렵다",
            "연인이라면 먼저 챙겨줄 거라고 생각했는데 기대와 달라서 서운하다",
            "이미 지친 상태에서 들은 말이라 마음이 한꺼번에 무너지는 느낌이다",
        ],
    ),
    (
        '연인이 "나 지금 바빠, 나중에 얘기하자"라고 연락했다. 나는?',
        [
            "며칠째 피로가 쌓여 있어서 이 말에 눈물이 날 만큼 마음이 약해진다",
            "바쁜 건 알지만 나는 중요하지 않은 사람인가 싶어 자존감이 흔들린다",
            "말을 꺼내기도 전에 밀려나는 것 같아 거절당한 기분이 든다",
            "중요한 얘기인데 알아줄 거라 기대했는데 그렇지 않아서 서운하다",
        ],
    ),
    (
        '연인이 "너 요즘 좀 예민한 것 같아"라고 말했다. 나는?',
        [
            "나는 늘 문제가 있는 사람인가 싶어 스스로가 작아진다",
            "예전 연애에서도 예민하다는 말을 들었던 기억이 떠올라 마음이 아프다",
            "내 마음을 알아줄 거라 기대했는데 지적으로 돌아와서 실망스럽다",
            "요즘 계속 지쳐 있었는데 그 말에 더 지치고 눈물이 난다",
        ],
    ),
    (
        "연인이 단체 사진에서 내 옆자리가 아닌 다른 곳에 앉았다. 나는?",
        [
            "예전에 비슷하게 소외됐던 장면이 겹쳐서 마음이 얼어붙는다",
            "나를 멀리하는 신호 같아서 거절당한 느낌에 마음이 쿵 내려앉는다",
            "하루 종일 쌓인 피로 때문에 이런 작은 일에도 감정이 무너진다",
            "나는 옆에 앉고 싶은 사람이 아닌가 싶어 자존감이 떨어진다",
        ],
    ),
    (
        '연인이 "그냥 네가 이해해줘"라고 말했다. 나는?',
        [
            "내 마음은 늘 뒤로 밀리는 것 같아 요청하기도 전에 마음이 닫힌다",
            "연인이라면 내 마음을 먼저 헤아려 줄 거라 기대했는데 어긋나서 서운하다",
            "내 감정은 이해받을 만큼 가치 없는 건가 싶어 스스로가 작게 느껴진다",
            "예전에도 늘 내가 이해하는 쪽이었던 기억이 떠올라 마음이 먹먹하다",
        ],
    ),
    (
        '연인에게 "내가 방금 한 말에 상처받았어"라고 말하려는 순간, 속마음에 가장 가까운 건?',
        [
            "이런 말을 하면 기대에 못 미치는 사람이 될까 봐 연인의 반응이 먼저 걱정된다",
            "말을 해도 가볍게 넘길 것 같아서 말할 힘조차 없어 입을 닫고 싶다",
            "예전에 말했다가 오히려 더 상처받았던 기억이 떠올라 망설여진다",
            "말하면 거절당할까 봐 두려워서 말이 목구멍에서 멈춘다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🕰️",
        "title": "예전 기억이 지금의 말에 겹치는 사람, 과거 소환형 🕰️",
        "typeName": "과거 소환형",
        "realReason": "지금의 한마디가 예전에 아팠던 장면을 건드려 그때의 감정이 올라온다",
        "shortDescription": "당신은 예민한 게 아닙니다. 지금의 한마디가 예전에 아팠던 기억의 버튼을 눌러 그때 감정이 함께 올라오는 것입니다.",
        "description": "연인은 아무 뜻 없이 말했는데 내 마음은 과거의 비슷한 장면으로 순식간에 돌아갑니다. 지금의 말보다 그때의 감정이 더 크게 반응하기 때문에 반응이 상황보다 크게 느껴집니다. 이 연결을 알아차리면 상처의 크기가 줄어듭니다.",
        "keywords": "기억 버튼, 비슷한 장면, 그때의 감정, 과거와 현재의 겹침, 반응이 커짐",
        "strengths": "기억이 깊고 경험에서 배우는 힘이 있으며 감정의 결이 섬세함",
        "reasonDetail": "예전에 들었던 말과 비슷한 표현, 비슷한 상황",
        "frequentSaying": '"예전에도 이런 말 들었었는데"',
        "changeTips": "마음이 쿵 내려앉을 때 \"지금 이 말 때문일까, 예전 기억 때문일까?\"를 먼저 물어보기\n연인에게 \"그 말이 예전 기억을 건드렸어\"라고 이유를 함께 말해주기\n과거 장면과 지금 장면의 차이를 두 줄로 적어 현재를 구분하기\n과거의 기억이 자주 올라와 일상이나 관계가 힘들다면 심리상담 전문가와 그 기억을 안전하게 정리해 보세요",
        "oneLiner": "지금의 말과 그때의 기억을 분리하면 마음의 크기가 현실 크기로 돌아옵니다",
        "shareLine": "나는 왜 연인의 사소한 말에 상처받을까? 결과: 과거 소환형 🕰️ 지금 한마디가 예전 기억 버튼을 누르는 거래... 아 이거 너 같아ㅋㅋ 같이 해보자 너는 뭐 나올까?",
    },
    {
        "type": "Type2",
        "emoji": "🚪",
        "title": "거절처럼 느껴지는 순간에 얼어붙는 사람, 거절 민감형 🚪",
        "typeName": "거절 민감형",
        "realReason": "사소한 말이나 행동을 '나를 밀어내는 신호'로 읽는다",
        "shortDescription": "당신은 예민한 게 아닙니다. 거절의 신호를 빨리 알아차리는 마음의 안테나가 높은 사람입니다.",
        "description": "나중에 얘기하자, 바빠, 그건 아닌 것 같아 같은 말이 내게는 '너를 원하지 않아'로 들립니다. 마음이 순식간에 닫히고 다음엔 말을 꺼내는 것 자체가 어려워집니다. 거절에 대한 민감함은 관계를 소중히 여기는 마음의 다른 모습이기도 합니다.",
        "keywords": "밀려남, 거절 신호, 마음이 닫힘, 말 꺼내기 어려움, 안테나",
        "strengths": "관계를 진지하게 대하고 상대의 작은 변화를 빨리 알아채는 섬세함",
        "reasonDetail": "약속 연기, 바쁘다는 말, 의견에 대한 반대, 멀어지는 행동",
        "frequentSaying": '"나를 싫어하게 된 건 아니지?"',
        "changeTips": "거절로 읽히는 순간 \"이 말이 정말 거절인가, 그냥 사정인가?\"를 사실로 확인하기\n\"방금 그 말이 거절처럼 들렸는데 그런 뜻이야?\"라고 직접 물어보기\n거절 같은 말 뒤에 이어지는 연인의 행동(연락·약속)으로 확인하기",
        "oneLiner": "거절처럼 들린 말이 정말 거절인지 한 번만 확인해 보세요. 대부분은 마음의 해석이 더 컸습니다",
        "shareLine": "나는 왜 연인의 사소한 말에 상처받을까? 결과: 거절 민감형 🚪 사소한 말을 밀어내는 신호로 읽는 거래... 이거 너 같아 진짜ㅠ 결과 보내줘",
    },
    {
        "type": "Type3",
        "emoji": "🎨",
        "title": "말하지 않은 기대가 어긋나 서운한 사람, 기대 과잉형 🎨",
        "typeName": "기대 과잉형",
        "realReason": "연인이 해줄 거라 기대한 반응과 실제 반응의 간격이 상처가 된다",
        "shortDescription": "당신은 말이 상처가 된 게 아닙니다. 기대했던 반응이 나오지 않았다는 간격이 서운함이 되었습니다.",
        "description": "알아봐 줄 거라는 기대, 편들어줄 거라는 기대, 먼저 챙겨줄 거라는 기대가 말로 꺼내지지 않은 채 쌓입니다. 연인은 기대의 존재를 모르고 지나가고, 나는 '왜 몰라주지'로 상처를 입습니다. 기대를 말로 바꾸면 서운함이 줄어듭니다.",
        "keywords": "말하지 않은 기대, 알아봐 줄 거라는 믿음, 반응의 간격, 서운함",
        "strengths": "관계에 대한 기준이 분명하고 사랑을 깊게 주고받고 싶은 마음이 큼",
        "reasonDetail": "알아봐 주지 않을 때, 내 편이 되어주지 않을 때, 먼저 챙겨주지 않을 때",
        "frequentSaying": '"이 정도는 알아줘야 하는 거 아냐?"',
        "changeTips": "서운할 때 '내가 이 기대를 연인에게 말한 적이 있는가'를 먼저 확인하기\n\"이럴 때 이렇게 해주면 좋겠어\"라고 기대를 요청 문장으로 바꾸기\n연인이 해준 일 3가지를 먼저 떠올린 뒤 아쉬운 점을 이야기하기",
        "oneLiner": "기대는 말하지 않으면 전해지지 않습니다. 요청으로 바꾸면 서운함은 대화가 됩니다",
        "shareLine": "나는 왜 연인의 사소한 말에 상처받을까? 결과: 기대 과잉형 🎨 말이 아니라 기대한 반응이 안 와서 서운한 거래... 이거 너 같아ㅋㅋ 너도 해봐",
    },
    {
        "type": "Type4",
        "emoji": "🔋",
        "title": "쌓인 피로가 한계에 닿은 사람, 피로 누적형 🔋",
        "typeName": "피로 누적형",
        "realReason": "이미 지쳐 있어서 작은 한마디가 마지막 한 방울이 된다",
        "shortDescription": "당신은 말에 약한 게 아닙니다. 쌓인 피로로 마음의 여유가 바닥나 있는 상태에서 한마디가 닿은 것입니다.",
        "description": "평소라면 웃어넘겼을 말도 며칠째 피곤하고 지친 날에는 눈물이 날 만큼 크게 느껴집니다. 말 자체의 크기보다 내 마음의 여유가 얼마나 남아 있느냐가 반응의 크기를 정합니다. 상처받는 날의 컨디션을 살피면 반응이 달라집니다.",
        "keywords": "마지막 한 방울, 여유 없음, 컨디션, 눈물, 한계",
        "strengths": "책임감이 강하고 맡은 일을 성실히 해내며 참을성이 큼",
        "reasonDetail": "지친 날, 바쁜 시기, 며칠째 쉬지 못한 때 들은 말",
        "frequentSaying": '"요즘 너무 지쳐서 별것 아닌데도 힘들어"',
        "changeTips": "지친 날에는 중요한 대화를 미루고 \"오늘은 컨디션이 안 좋아서 내일 얘기하자\"고 말하기\n상처받은 순간 '오늘 내가 얼마나 지쳐 있었지?'를 먼저 체크하기\n수면·식사·쉬는 시간을 일정에 먼저 넣어 마음의 여유를 만들기\n피로와 무기력이 오래 이어져 일상의 의욕과 수면, 식사에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요",
        "oneLiner": "상처는 말의 크기만큼이 아니라 내 여유의 크기만큼 커집니다. 먼저 쉬는 것이 가장 빠른 방패입니다",
        "shareLine": "나는 왜 연인의 사소한 말에 상처받을까? 결과: 피로 누적형 🔋 쌓인 피로 위에 한마디가 마지막 한 방울이 된 거래... 이거 너 같아ㅋㅋ 너는 어떤 유형 나올까?",
    },
    {
        "type": "Type5",
        "emoji": "🪞",
        "title": "한마디에 내 가치가 흔들리는 사람, 자존감 흔들림형 🪞",
        "typeName": "자존감 흔들림형",
        "realReason": "연인의 말을 '내가 부족하다는 증거'로 받아들인다",
        "shortDescription": "당신은 말에 상처받는 게 아닙니다. 그 말 속에서 '나는 부족한 사람'이라는 결론을 읽어내고 있습니다.",
        "description": "피곤해 보인다는 말은 '내가 별로인가', 그건 아닌 것 같다는 말은 '내 의견은 가치 없나', 예민하다는 말은 '나는 문제가 있나'로 번집니다. 말의 내용보다 그 말이 내 자존감에 건드리는 지점이 상처의 정체입니다. 상대의 말과 내 가치를 분리하면 마음이 가벼워집니다.",
        "keywords": "나는 부족하다, 가치 흔들림, 결론 비약, 자기 평가, 위축",
        "strengths": "겸손하고 자기 행동을 돌아볼 줄 알며 상대를 배려하는 섬세함",
        "reasonDetail": "외모·의견·성격에 대한 사소한 평가나 지적",
        "frequentSaying": '"내가 별로라서 그런 거 아닐까?"',
        "changeTips": "상처받을 때 \"이 말이 내 가치를 정한 건가, 이 한 상황에 대한 말인가?\"를 구분하기\n연인의 말과 상관없이 내가 가진 장점 3가지를 적어 두고 읽기\n마음에 걸린 말은 \"방금 그 말은 어떤 뜻이었어?\"라고 의도를 직접 확인하기\n자신이 부족하다는 생각이 연애뿐 아니라 일상 전반에서 자주 강하게 이어진다면 심리상담 전문가와 이야기해 보세요",
        "oneLiner": "한마디가 당신의 가치를 정하지 못합니다. 말과 나를 분리하는 연습이 마음의 방패가 됩니다",
        "shareLine": "나는 왜 연인의 사소한 말에 상처받을까? 결과: 자존감 흔들림형 🪞 한마디를 내가 부족하다는 증거로 읽는 거래... 이거 너 같아ㅠ 해보고 알려줘",
    },
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def L(s: str) -> str:
    return f'L("{esc(s)}")'


I18N_CONST = f"PHASE3_{CONST}_I18N"
DATA_FILE = f"phase3{PASCAL}Data"
I18N_FILE = f"phase3{PASCAL}I18n"
TYPE_LOCALE = f"Phase3{PASCAL}LocaleKey"
TYPE_FOREIGN = f"Phase3{PASCAL}ForeignLocale"
TYPE_RESULT_TEXT = f"Phase3{PASCAL}ResultText"
TYPE_Q = f"Phase3{PASCAL}Question"
TYPE_R = f"Phase3{PASCAL}Result"
TYPES_CONST = f"PHASE3_{CONST}_TYPES"
META_CONST = f"PHASE3_{CONST}_META"
Q_EXPORT = f"phase3{PASCAL}Questions"
R_EXPORT = f"phase3{PASCAL}Results"
FN_SCORES = f"calculatePhase3{PASCAL}Scores"
FN_RESULT = f"calculatePhase3{PASCAL}Result"
FN_HIDDEN = f"getPhase3{PASCAL}HiddenType"

data_lines = [
    "/**",
    f" * {TITLE}",
    f" * slug: {SLUG}",
    " * 10문항 4지선다 · 5유형",
    " */",
    "",
    "import {",
    f"  {I18N_CONST},",
    f"  type {TYPE_FOREIGN},",
    f"  type {TYPE_RESULT_TEXT},",
    f"}} from './{I18N_FILE}';",
    "",
    f"export type {TYPE_LOCALE} = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    f"type LocaleText = Record<{TYPE_LOCALE}, string>;",
    "",
    "function L(ko: string): LocaleText {",
    "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };",
    "}",
    "",
    f"const FOREIGN_LOCALES = Object.keys({I18N_CONST}) as {TYPE_FOREIGN}[];",
    "",
    "function withForeign(",
    "  ko: string,",
    f"  pickFn: (loc: {TYPE_FOREIGN}) => string,",
    "): LocaleText {",
    "  const t = L(ko);",
    "  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);",
    "  return t;",
    "}",
    "",
    f"export interface {TYPE_Q} {{",
    "  id: number;",
    "  question: LocaleText;",
    "  options: { text: LocaleText; score: number }[];",
    "}",
    "",
    f"export interface {TYPE_R} {{",
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
    f"export const {TYPES_CONST} = [",
    "  'Type1',",
    "  'Type2',",
    "  'Type3',",
    "  'Type4',",
    "  'Type5',",
    "] as const;",
    "",
    "/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */",
    f"export function {FN_SCORES}(answers: number[]): Record<string, number> {{",
    "  const scores: Record<string, number> = {};",
    f"  for (const type of {TYPES_CONST}) scores[type] = 0;",
    "  for (const a of answers) {",
    # IMPORTANT: plain string so output is Type${a}, not Type${{a}}
    "    const key = `Type${a}`;",
    "    if (key in scores) scores[key] += 1;",
    "  }",
    "  return scores;",
    "}",
    "",
    "/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */",
    f"export function {FN_RESULT}(answers: number[]): string {{",
    f"  const scores = {FN_SCORES}(answers);",
    "  const max = Math.max(...Object.values(scores));",
    f"  const tied = {TYPES_CONST}.filter((t) => scores[t] === max);",
    "  if (tied.length === 1) return tied[0];",
    "  for (const a of answers) {",
    "    const key = `Type${a}`;",
    "    if ((tied as readonly string[]).includes(key)) return key;",
    "  }",
    "  return tied[0];",
    "}",
    "",
    "/** 2순위 유형(함께 있는 상처 포인트). 1·2순위 모두 동점이 아닐 때만 반환 */",
    f"export function {FN_HIDDEN}(answers: number[]): string | null {{",
    f"  const scores = {FN_SCORES}(answers);",
    f"  const sorted = [...{TYPES_CONST}].sort((a, b) => scores[b] - scores[a]);",
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
    f"export const {Q_EXPORT}: {TYPE_Q}[] =",
    "  RAW_QUESTIONS.map((raw, idx) => ({",
    "    id: idx + 1,",
    f"    question: withForeign(raw.q, (loc) => {I18N_CONST}[loc].questions[idx].q),",
    "    options: raw.opts.map(([text, score], oi) => ({",
    f"      text: withForeign(text, (loc) => {I18N_CONST}[loc].questions[idx].opts[oi]),",
    "      score,",
    "    })),",
    "  }));",
    "",
    "const RESULT_TEXT_KEYS = [",
    "  'title', 'typeName', 'realReason', 'shortDescription', 'description', 'keywords',",
    "  'strengths', 'reasonDetail', 'frequentSaying', 'changeTips', 'oneLiner', 'shareLine',",
    f"] as const satisfies readonly (keyof {TYPE_RESULT_TEXT})[];",
    "",
    f"const KO_RESULTS: {TYPE_R}[] = [",
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
    f"export const {R_EXPORT}: {TYPE_R}[] = KO_RESULTS.map((r, ri) => {{",
    f"  const merged: {TYPE_R} = {{ ...r }};",
    "  for (const key of RESULT_TEXT_KEYS) {",
    f"    merged[key] = withForeign(r[key].ko, (loc) => {I18N_CONST}[loc].results[ri][key]);",
    "  }",
    "  return merged;",
    "});",
    "",
    f"export const {META_CONST} = {{",
    f'  title: withForeign("{esc(TITLE)}", (loc) => {I18N_CONST}[loc].meta.title),',
    f'  description: withForeign("{esc(META_DESC)}", (loc) => {I18N_CONST}[loc].meta.description),',
    "  tags: {",
    f"    ko: {json.dumps(TAGS, ensure_ascii=False)},",
    f"    en: {I18N_CONST}.en.meta.tags,",
    f"    ja: {I18N_CONST}.ja.meta.tags,",
    f"    'zh-CN': {I18N_CONST}['zh-CN'].meta.tags,",
    f"    'zh-TW': {I18N_CONST}['zh-TW'].meta.tags,",
    f"    vi: {I18N_CONST}.vi.meta.tags,",
    f"    id: {I18N_CONST}.id.meta.tags,",
    "  },",
    "};",
    "",
]

(root / "lib" / f"{DATA_FILE}.ts").write_text("\n".join(data_lines) + "\n", encoding="utf-8")

empty_tags = [""] * len(TAGS)
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
    "meta": {"title": "", "description": "", "tags": empty_tags},
    "questions": empty_q,
    "results": empty_r,
}

i18n = [
    f"export type {TYPE_FOREIGN} = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';",
    "",
    f"export type {TYPE_RESULT_TEXT} = {{",
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
    f"  results: {TYPE_RESULT_TEXT}[];",
    "};",
    "",
    f"export const {I18N_CONST}: Record<{TYPE_FOREIGN}, LocaleBundle> = "
    + json.dumps(
        {loc: empty_locale for loc in ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]},
        ensure_ascii=False,
        indent=2,
    )
    + " as const;",
    "",
]
(root / "lib" / f"{I18N_FILE}.ts").write_text("\n".join(i18n), encoding="utf-8")

msg = {
    NS: {
        "startMessage": {
            "line1": "별 뜻 없는 한마디인데, 왜 마음이 쿵 내려앉을까?",
            "line2": '"오늘 좀 피곤해 보인다", "너는 늘 그렇지 뭐" 같은 말에 상대는 아무 생각이 없었는데 나는 하루 종일 그 말이 맴돕니다. 예민하다는 말을 들을까 봐 티를 내지 못하고 혼자 삼키기도 합니다.',
            "line3": "상처가 되는 지점은 사람마다 다릅니다. 예전 기억이 건드려져서일 수도, 거절처럼 느껴져서일 수도, 기대가 어긋나서일 수도, 쌓인 피로가 한계에 닿아서일 수도, 내 가치가 흔들려서일 수도 있습니다. 내 반응을 보면 내 상처 포인트가 보입니다.",
            "line4": "10가지 상황으로 내가 상처받는 진짜 이유와 마음을 지키는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "상처받는 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "상처받는 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 상처 포인트",
            "strengths": "이 유형의 강점",
            "reasonDetail": "상처 포인트",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "마음을 지키는 법",
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
            "startDefault": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
            "startKakao": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
            "startWechat": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
            "startWhatsapp": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
            "startTelegram": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
            "startLine": "나는 왜 연인의 사소한 말에 상처받을까? 🕰️ 상처받는 진짜 이유, 너도 해봐!",
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
tags_json = {loc: (TAGS if loc == "ko" else empty_tags) for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}

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

src = (root / "components" / "Phase3SmallLieReasonTestClient.tsx").read_text(encoding="utf-8")
dst = src
for a, b in [
    ("SmallLieReason", PASCAL),
    ("smallLieReason", CAMEL),
    ("SMALL_LIE_REASON", CONST),
    ("phase3SmallLieReasonTest", NS),
]:
    dst = dst.replace(a, b)
(root / "components" / f"Phase3{PASCAL}TestClient.tsx").write_text(dst, encoding="utf-8")


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

# verify generated Type key template is correct
data_text = (root / "lib" / f"{DATA_FILE}.ts").read_text(encoding="utf-8")
assert "Type${a}" in data_text
assert "Type${{a}}" not in data_text
print("Type1-5 reachability ok")
print("Type key template ok")
print("generated", SLUG)
