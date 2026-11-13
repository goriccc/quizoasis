# -*- coding: utf-8 -*-
"""Generate phase3-ex-sns-peeking-reason KO-first (registry scenario_4)."""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-ex-sns-peeking-reason"
NS = "phase3ExSnsPeekingReasonTest"
THUMB = "p3_test_ex_sns_peeking_reason.webp"
TITLE = "나는 왜 이별 후에도 전 애인 SNS를 염탐할까?"
META_DESC = (
    "끝난 사이인데, 왜 자꾸 그 계정에 들어가 보게 될까? "
    "10가지 상황으로 내가 자꾸 들어가 보게 되는 진짜 이유와 마음을 정리하는 법을 알려드립니다."
)
TAGS = ["염탐", "이별심리"]

PASCAL = "ExSnsPeekingReason"
CAMEL = "exSnsPeekingReason"
CONST = "EX_SNS_PEEKING_REASON"

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
        "헤어진 지 한 달, 퇴근길에 문득 전 애인의 계정이 떠올랐다. 나는?",
        [
            "지금 어떻게 지내는지, 나보다 잘 지내는 것 같은지 비교해 보고 싶다",
            "보고 나면 마음이 조금 편해지는 기분이라 위로받으려는 마음으로 들어가 본다",
            "생각이 들기도 전에 손이 먼저 앱을 열고 있다",
            "제대로 마무리하지 못한 이야기가 남아 있어서 마음이 자꾸 그쪽으로 간다",
        ],
    ),
    (
        "새벽 1시, 잠이 오지 않는 밤이다. 나는?",
        [
            "같이 찍은 사진이 아직 남아 있는지 보며 그때의 따뜻함으로 마음을 달랜다",
            "딱히 이유 없이 스크롤을 내리다 보니 어느새 그 계정 앞이다",
            "끝내 하지 못한 말이 떠올라서 달라진 건 없는지 살펴본다",
            "혹시 내 생각이 나서 뭔가 올리진 않았는지 흔적을 찾아본다",
        ],
    ),
    (
        "전 애인의 새 게시물 알림이 떴다. 나는?",
        [
            "새로 올라왔다는 사실만으로 안 볼 수가 없어서 바로 확인한다",
            "우리 이야기가 정말 끝난 건지 확인하고 싶은 마음이 든다",
            "혹시 나를 떠올리게 하는 내용이 아닌지 한 줄 한 줄 읽는다",
            "사진 속 모습이 나보다 훨씬 행복해 보이는지부터 따져 본다",
        ],
    ),
    (
        "전 애인의 계정이 비공개로 바뀐 것을 알게 됐다. 나는?",
        [
            "이렇게 끝나는 건가 싶어서 마음이 정리되지 않고 허전함이 남는다",
            "일부러 나 보라고 바꾼 건 아닐까, 어떤 신호는 아닐까 의미를 찾게 된다",
            "새로운 사람이 생겨서 숨기는 건지, 그 사람은 나와 어떻게 다른지 궁금해진다",
            "어차피 이제는 못 본다고 생각하니 조금 홀가분하다고 스스로를 다독인다",
        ],
    ),
    (
        '친구가 "걔 요즘 어떻게 지내는지 알아?"라고 물었다. 나는?',
        [
            "내 이야기를 하진 않는지, 나를 어떻게 얘기하는지가 먼저 궁금하다",
            "나는 이렇게 지내는데 그쪽은 어떤지 비교하는 마음이 올라온다",
            "그 얘기를 들으면 마음이 오히려 안정되고 괜찮아지는 기분이 든다",
            "모른다고 답하면서 속으로는 바로 찾아보고 싶어서 폰을 만지작거린다",
        ],
    ),
    (
        "계정을 안 보겠다고 다짐한 지 사흘째다. 나는?",
        [
            "참아보려 했는데 어느새 손이 습관처럼 앱을 열고 있다",
            "마음 한쪽이 정리되지 않아서 확인하지 않으면 마무리가 안 된 느낌이다",
            "다짐했는데도 그 사람의 근황이 내 근황보다 나아 보일지 궁금해진다",
            "다짐은 했지만 보고 나면 마음이 편해지는 순간이 있어 끊기가 쉽지 않다",
        ],
    ),
    (
        "전 애인과의 마지막 대화창을 다시 열어봤다. 나는?",
        [
            "마지막이 어정쩡하게 끝난 게 아쉬워서 마음이 자꾸 그곳에 머문다",
            "혹시 다시 연락이 올 흔적은 없는지, 그쪽도 나를 생각하는지 살핀다",
            "옛 대화를 읽다 보면 그때가 떠올라 마음이 조금 따뜻해진다",
            "마지막 접속 시간이나 프로필 사진 같은 작은 변화가 있는지 확인하고 싶어진다",
        ],
    ),
    (
        "전 애인이 친구들과 찍은 즐거운 사진을 올렸다. 나는?",
        [
            "사진 속에 후회하는 기색이나 나를 떠올리게 하는 표정이 있는지 찾아본다",
            "나는 아직 힘든데 저 사람은 잘 지내는 것 같아서 나와 비교하게 된다",
            "게시물 하나에서 시작해 다른 게시물까지 연달아 보게 된다",
            "사진을 보며 우리 사이는 도대체 어떻게 끝난 건지 같은 질문이 다시 떠오른다",
        ],
    ),
    (
        "한 달 뒤, 전 애인에게 새 연애를 하는 것 같은 단서가 보였다. 나는?",
        [
            "그 사람과 나를 비교하며 내가 부족했던 건 아닌지 자꾸 생각이 든다",
            "이미 정리된 일이라고 스스로를 달래지만 한 번 더 보고 안심하고 싶다",
            "이제는 정말 끝이라는 사실이 실감 나면서 마무리되지 못한 마음이 올라온다",
            "이 관계가 정말 끝난 건지, 그쪽은 나를 완전히 잊은 건지 더 알고 싶어진다",
        ],
    ),
    (
        '친구가 "너 걔 계정 아직도 봐?"라고 물었다. 가장 가까운 속마음은?',
        [
            "솔직히 보고 나면 마음이 편해져서 하나의 위로 같은 습관이 되었다",
            "이유라기보다 손이 가는 습관이라 나도 멈추기가 쉽지 않다",
            "아직 그쪽이 나를 생각하고 있는지 확인하고 싶은 마음이 있다",
            "그 사람이 나 없이 어떻게 지내는지 비교해 보고 싶은 마음이 크다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🔍",
        "title": "아직 나를 생각하는지 확인하고 싶은 사람, 미련 확인형 🔍",
        "typeName": "미련 확인형",
        "realReason": "그 사람 마음에 내가 아직 남아 있는지 확인하고 싶다",
        "shortDescription": "당신은 염탐하는 게 아닙니다. 아직 나를 생각하고 있는지, 흔적이 남아 있는지 확인하고 싶은 마음입니다.",
        "description": "새 게시물의 문구, 비공개 전환, 프로필 변화 하나하나가 나를 향한 신호처럼 느껴집니다. 확인하고 나면 잠깐 마음이 움직이지만, 확실한 답이 없으니 다시 들어가 보게 됩니다. 이 마음은 사랑이 남아 있다는 증거이기도 하지만 해석에 쓰이는 에너지가 큽니다.",
        "keywords": "흔적 찾기, 신호 해석, 나를 생각할까, 아직 끝나지 않은 마음, 의미 부여",
        "strengths": "관계에 진심이었고 사람을 쉽게 지우지 않는 깊은 마음",
        "reasonDetail": "새 게시물·프로필 변화·접속 기록이 보일 때, 마지막 대화창을 다시 열어볼 때",
        "frequentSaying": '"혹시 나 생각하고 있는 건 아닐까?"',
        "changeTips": "확인하고 싶어질 때 '지금 얻고 싶은 답이 무엇인지'를 한 문장으로 적어보기\n그 계정을 숨김·뮤트로 정리해 새 알림이 눈에 닿지 않게 하기\n신호를 해석한 내용과 실제로 확인된 사실을 두 줄로 나눠 적어보기",
        "oneLiner": "흔적은 해석할수록 커집니다. 답은 그 계정이 아니라 내 마음속에서 정리됩니다",
        "shareLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 미련 확인형 🔍 나를 아직 생각하는지 확인하고 싶은 마음이래... 이거 내 얘기라 소름 저장해둠 너는 뭐 나왔어?",
    },
    {
        "type": "Type2",
        "emoji": "⚖️",
        "title": "나와 그 사람을 저울에 올리는 사람, 비교 심리형 ⚖️",
        "typeName": "비교 심리형",
        "realReason": "그 사람의 근황과 내 근황을 비교하며 나를 가늠하고 있다",
        "shortDescription": "당신은 그 사람이 궁금한 게 아닙니다. 그 사람의 삶 옆에 내 삶을 올려놓고 내 위치를 재고 있습니다.",
        "description": "행복해 보이는 사진, 새 연인의 단서, 잘 지내는 모습을 보면 마음이 가라앉습니다. 이별의 아픔에 비교가 겹치면서 '나만 뒤처진 건가' 하는 생각이 커집니다. 계정에 들어가는 행동이 마음을 편하게 해주기보다 더 지치게 만들 수 있습니다.",
        "keywords": "근황 비교, 나만 뒤처진 느낌, 새 연인 궁금, 저울질, 자기 평가",
        "strengths": "자기 성장에 대한 기준이 분명하고 더 나아지려는 의지가 강함",
        "reasonDetail": "행복해 보이는 게시물을 볼 때, 새 연애 단서를 발견했을 때",
        "frequentSaying": '"걔는 잘 지내는데 나만 이러네"',
        "changeTips": "비교가 시작되면 '내가 이번 달에 해낸 일' 3가지를 먼저 적어보기\nSNS 속 모습은 편집된 하이라이트일 뿐이라는 점을 한 번 더 떠올리기\n비교 대상을 그 사람이 아닌 '한 달 전의 나'로 바꿔 보기",
        "oneLiner": "남의 근황은 편집본이고 내 마음은 원본입니다. 원본을 돌보는 시간을 늘려보세요",
        "shareLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 비교 심리형 ⚖️ 그 사람 근황이랑 내 근황을 저울에 올리는 거래... 이거 내 얘기라 소름ㅠ 저장 필수",
    },
    {
        "type": "Type3",
        "emoji": "🫶",
        "title": "보면서 마음을 달래는 사람, 자기 위안형 🫶",
        "typeName": "자기 위안형",
        "realReason": "보고 있는 동안 마음이 잠깐 편해져서 위로가 되고 있다",
        "shortDescription": "당신은 상처를 키우려는 게 아닙니다. 그 계정이 어느새 마음을 달래는 익숙한 위로가 되어 있습니다.",
        "description": "옛 사진, 옛 대화, 익숙한 프로필을 보면 마음이 조금 따뜻해지거나 안정됩니다. 이별의 빈자리를 그 계정이 대신 채워주는 느낌입니다. 다만 위로로 쓸수록 끊기가 어려워지고, 이별의 정리는 그만큼 뒤로 밀릴 수 있습니다.",
        "keywords": "위로, 익숙함, 따뜻한 기억, 안정감, 끊기 어려움",
        "strengths": "좋았던 기억을 소중히 여기고 감정을 스스로 달래는 방법을 아는 따뜻함",
        "reasonDetail": "잠이 오지 않는 밤, 마음이 허전할 때, 옛 사진이나 대화를 떠올릴 때",
        "frequentSaying": '"보고 있으면 좀 괜찮아져서"',
        "changeTips": "위로가 필요한 시간대(밤 등)에 쓸 대체 루틴(산책·음악·친구 통화)을 미리 정해두기\n좋았던 기억은 계정 대신 내가 직접 정리한 메모나 사진첩 안에 남기기\n위로를 '사람에게서' 받을 수 있는 연결(친구·가족)을 이번 주에 한 번 만들기",
        "oneLiner": "위로가 필요한 건 당연합니다. 다만 그 위로는 이제 지금의 나에게서 받아도 괜찮습니다",
        "shareLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 자기 위안형 🫶 보면서 마음을 달래는 위로 루틴이 된 거래... 이거 내 얘기라 소름 돋음 저장함 너는?",
    },
    {
        "type": "Type4",
        "emoji": "📱",
        "title": "손이 먼저 움직이는 사람, 호기심 중독형 📱",
        "typeName": "호기심 중독형",
        "realReason": "이유보다 습관으로 앱을 열고 새 정보를 확인하고 싶어 한다",
        "shortDescription": "당신은 미련이 커서 들어가는 게 아닐 수도 있습니다. 생각보다 손이 먼저 움직이는 반복 습관입니다.",
        "description": "새 게시물이 올라오면 안 볼 수가 없고, 하나를 보면 다음 게시물까지 연달아 보게 됩니다. 마음의 이유를 찾기 전에 이미 스크롤이 시작되어 있습니다. 확인할 때의 작은 자극이 반복되며 끊기 어려운 루프가 만들어진 타입입니다.",
        "keywords": "습관, 자동 스크롤, 새 게시물 궁금, 연달아 보기, 멈추기 어려움",
        "strengths": "새로운 정보에 민감하고 호기심이 많아 다양한 일에 쉽게 몰입함",
        "reasonDetail": "알림이 올 때, 멍하니 폰을 만지작거릴 때, 심심한 틈",
        "frequentSaying": '"나도 모르게 또 들어가 있었어"',
        "changeTips": "앱 위치를 옮기거나 그 계정을 뮤트·차단해서 '열기까지의 단계'를 늘리기\n손이 가려 할 때 3분 동안 다른 행동(물 마시기·스트레칭)을 먼저 해보기\n하루 중 스크롤하는 시간대를 정해두고 그 밖의 시간엔 알림 끄기",
        "oneLiner": "마음이 아니라 손의 습관이라면 환경을 바꾸는 것이 가장 빠른 방법입니다",
        "shareLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 호기심 중독형 📱 마음이 아니라 손이 먼저 움직이는 습관이래... 이거 내 얘기라 소름ㅋㅋ 저장해둔다 너는 어떤 유형이야?",
    },
    {
        "type": "Type5",
        "emoji": "🧩",
        "title": "이야기가 끝나지 않은 사람, 정리 미완형 🧩",
        "typeName": "정리 미완형",
        "realReason": "하지 못한 말과 풀리지 않은 질문이 남아 마음이 마무리되지 못했다",
        "shortDescription": "당신은 그 사람이 보고 싶은 게 아닙니다. 끝맺지 못한 이야기가 마침표를 찾고 있습니다.",
        "description": "왜 그렇게 끝났는지, 마지막에 하지 못한 말은 무엇이었는지, 이 이별이 정말 확정된 건지 같은 질문이 마음 한쪽에 남아 있습니다. 계정을 열어보는 행동은 그 이야기의 결말을 찾으려는 시도이기도 합니다. 결말은 상대의 SNS가 아니라 내가 정리하는 문장에서 만들어집니다.",
        "keywords": "마침표, 못다 한 말, 풀리지 않은 질문, 어정쩡한 마무리, 결말 찾기",
        "strengths": "관계를 책임감 있게 마무리하려는 성실함과 감정을 정리하려는 의지",
        "reasonDetail": "마지막 대화를 떠올릴 때, 끝내 하지 못한 말이 생각날 때, 이별이 실감 날 때",
        "frequentSaying": '"그때 그 말은 하고 끝냈어야 했는데"',
        "changeTips": "하지 못한 말을 보내지 않을 편지로 써서 끝까지 적어보기\n풀리지 않은 질문을 목록으로 적고 '내가 답을 만들 수 있는 것'과 '상대만 아는 것'으로 나누기\n정리를 마친 날을 정해 그날 계정 정리(뮤트·숨김)를 마침표로 삼기",
        "oneLiner": "결말은 상대가 주는 것이 아니라 내가 써서 닫는 것입니다. 한 줄씩 적다 보면 마침표가 찍힙니다",
        "shareLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 결과: 정리 미완형 🧩 끝맺지 못한 이야기가 마침표를 찾는 거래... 이거 내 얘기라 소름ㅠ 저장해둠 너는 뭐 나왔어?",
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
    "/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */",
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
            "line1": "끝난 사이인데, 왜 자꾸 그 계정에 들어가 보게 될까?",
            "line2": '안 보겠다고 다짐해도 어느새 손이 먼저 그 프로필을 열고 있습니다. 보고 나면 마음이 더 복잡해질 걸 알면서도 멈추기 어렵고, 그런 나를 보며 "나 아직 미련 남았나?" 하고 스스로가 낯설어지기도 합니다.',
            "line3": "염탐처럼 보이는 행동 뒤에는 사람마다 서로 다른 마음이 숨어 있습니다. 아직 나를 생각하는지 확인하고 싶어서일 수도, 비교하게 되어서일 수도, 보면서 위로받고 있어서일 수도, 습관이 되어서일 수도, 끝맺지 못한 이야기가 남아서일 수도 있습니다. 이름을 붙이면 마음이 훨씬 정리됩니다.",
            "line4": "10가지 상황으로 내가 자꾸 들어가 보게 되는 진짜 이유와 마음을 정리하는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "염탐하는 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "자꾸 들어가 보는 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 이유",
            "strengths": "이 유형의 강점",
            "reasonDetail": "들여다보는 순간",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "마음 정리하는 법",
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
            "startDefault": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
            "startKakao": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
            "startWechat": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
            "startWhatsapp": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
            "startTelegram": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
            "startLine": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까? 🔍 들어가 보게 되는 진짜 이유, 너도 해봐!",
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

src = (root / "components" / "Phase3HurtBySmallWordsTestClient.tsx").read_text(encoding="utf-8")
dst = src
for a, b in [
    ("HurtBySmallWords", PASCAL),
    ("hurtBySmallWords", CAMEL),
    ("HURT_BY_SMALL_WORDS", CONST),
    ("phase3HurtBySmallWordsTest", NS),
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

data_text = (root / "lib" / f"{DATA_FILE}.ts").read_text(encoding="utf-8")
assert "Type${a}" in data_text
assert "Type${{a}}" not in data_text
assert "options: { text: LocaleText; score: number }[];" in data_text
assert "options: {{ text" not in data_text
print("Type1-5 reachability ok")
print("Type key + options braces ok")
print("generated", SLUG)
