# -*- coding: utf-8 -*-
"""Generate phase3-alone-even-in-love KO-first (registry typed via balance payload)."""
from pathlib import Path
from collections import Counter
import json
import re

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-alone-even-in-love"
NS = "phase3AloneEvenInLoveTest"
THUMB = "p3_test_alone_even_in_love.webp"
TITLE = "나는 왜 연애 중에도 혼자가 편할까?"
META_DESC = (
    "연인이 좋은데 왜 혼자 있는 시간이 필요할까? "
    "10가지 상황으로 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다."
)
TAGS = ["내향", "연애심리"]

# scoring map A B C D (same as tongue-tied)
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
        '연인이 "이번 주말 하루 종일 같이 있자"고 제안했다. 나는?',
        [
            "좋긴 한데 이틀 내내 붙어 있으면 쉬는 시간이 하나도 없어서 반나절은 혼자 있고 싶다",
            "같이 있는 것 자체는 좋지만 감정이 계속 오르내려서 중간에 조용히 정리할 시간이 필요하다",
            "연인과 일정이 계속 겹치면 내 일상이 연인에게 스며들어 흐려지는 것 같아 불편하다",
            "사람과 계속 마주하는 게 이제는 지쳐서 혼자 있는 하루가 먼저 떠오른다",
        ],
    ),
    (
        "연인과 하루 종일 데이트한 뒤 집에 돌아왔다. 나는?",
        [
            "즐거웠지만 하루 동안 감정이 많이 오르내려서 마음이 가득 찬 느낌이라 조용히 정리해야 한다",
            "생활이 섞이는 게 점점 당연해지는 것 같아서 나만의 선을 다시 확인하게 된다",
            "사람을 계속 상대하느라 지쳐서 아무것도 하고 싶지 않다",
            "하루 종일 같이 있는 동안 내 취향과 내 시간이 줄어든 것 같아서 방에 들어가 내 것을 한다",
        ],
    ),
    (
        "연인이 하루 종일 연락이 오가는 걸 좋아한다. 나는?",
        [
            "연락이 끊임없이 이어지면 어디까지가 내 영역인지 흐려져서 불안해진다",
            "대화가 계속되는 것 자체가 부담스러워서 가끔은 아예 연락을 끊고 싶다",
            "연락이 이어지면 내 하루가 연인에게 맞춰지는 것 같아서 내 시간을 지키고 싶다",
            "연락 하나하나에 답하다 보면 에너지가 쉽게 닳아서 하루 끝에는 기운이 없다",
        ],
    ),
    (
        "연인의 친구들과 함께하는 모임이 잡혔다. 나는?",
        [
            "사람이 많은 자리가 이제는 부담스럽고 이런 관계 자체에 지쳤다는 생각이 든다",
            "모임이 끝나면 혼자만의 시간이 꼭 있어야 해서 일정 뒤에 쉬는 시간을 따로 확보한다",
            "사람 많은 자리에서 에너지를 쓰고 나면 방전돼서 다음 날까지 회복해야 한다",
            "모임에서 많은 감정과 분위기를 한꺼번에 받아들이느라 마음이 복잡해진다",
        ],
    ),
    (
        '연인이 "너 요즘 혼자 있는 시간이 많아졌네"라고 말했다. 속마음은?',
        [
            "내 영역과 시간을 지키는 건 연애를 오래 하기 위한 나만의 방식이라고 설명하고 싶다",
            "사실 에너지가 빨리 닳아서 혼자 충전해야 다시 연인을 만날 힘이 생긴다",
            "요즘 감정이 많이 올라와서 혼자 정리하는 시간이 필요했다",
            "연애하면 나와 연인의 영역이 섞이는데 그 경계가 어디까지인지 확인하고 싶었다",
        ],
    ),
    (
        "연인과 다툰 뒤 어색한 분위기가 이어진다. 나는?",
        [
            "갈등이 길어지면 서로의 경계를 침범한 것 같아서 내 쪽 선을 먼저 다시 세운다",
            "이런 관계의 긴장에 지쳐서 아무 말도 하고 싶지 않다",
            "다툼에 에너지를 너무 써서 방전된 상태라 일단 충전부터 하고 이야기하고 싶다",
            "감정이 한꺼번에 몰려 머리가 복잡하고 조용히 정리하지 않으면 말이 이상하게 나올 것 같다",
        ],
    ),
    (
        '연인이 "우리 같이 살면 어떨까?"라고 말했다. 나는?',
        [
            "지금도 관계에 지칠 때가 많은데 매일 함께하면 더 힘들 것 같다",
            "함께 사는 순간 나만의 공간과 시간이 사라질까 봐 설렘보다 걱정이 먼저 든다",
            "같은 공간에서 계속 마주하면 감정이 쉴 틈 없이 오르내릴 것 같아 겁이 난다",
            "생활이 섞이면 내 영역과 연인의 영역이 어디서 나뉘는지 흐려질까 봐 불안하다",
        ],
    ),
    (
        '연인이 갑자기 "지금 보러 갈까?"라고 연락했다. 나는?',
        [
            "예고 없이 내 시간을 쓰라는 느낌이라 내 일정을 지키고 싶다는 마음이 먼저 올라온다",
            "쉬려고 했던 시간인데 갑자기 에너지를 쓰려니 몸이 버겁다",
            "연인이 내 공간에 들어오는 순간 경계가 흐려지는 느낌이 들어 마음이 불편해진다",
            "만나면 즐거울 걸 알지만 사람을 상대하는 것 자체가 지쳐서 거절하고 싶다",
        ],
    ),
    (
        "연인이 힘들다며 오랜 시간 고민을 털어놓았다. 나는?",
        [
            "함께 이야기를 듣다 보면 에너지가 소진돼서 끝나고 나면 한참 쉬어야 한다",
            "연인의 감정이 내 감정처럼 쏟아져 들어와 마음이 무겁고 정리가 안 된다",
            "계속 들어주기만 하는 관계가 버거워서 이런 역할에 지쳐 있다",
            "듣고 싶은 마음은 있지만 내 시간이 계속 줄어드는 것 같아 조금 답답하다",
        ],
    ),
    (
        '연인에게 "혼자 있고 싶어"라고 말하기 전, 속마음에 가장 가까운 건?',
        [
            "감정이 정리되면 다시 가까워질 수 있는데 말하지 않으면 그 사이 감정이 더 복잡해진다",
            "서로의 경계가 분명해야 오래 갈 수 있다고 믿는데 그걸 어떻게 설명해야 할지 막막하다",
            "내 시간을 지키려는 건데 연인이 서운해할까 봐 어떻게 말할지 고민된다",
            "에너지가 바닥나서 충전이 필요한 건데 연인이 오해할까 봐 마음이 쓰인다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🏰",
        "typeName": "독립 수호형",
        "title": "내 영역과 시간을 지키고 싶은 사람, 독립 수호형 🏰",
        "realReason": "연애 속에서도 나만의 시간과 영역이 있어야 내가 나로 있을 수 있다",
        "shortDescription": "당신은 사랑이 부족한 게 아닙니다. 내 영역이 있어야 연애도 오래 할 수 있다고 믿는 사람입니다.",
        "body": "연락이 이어지면 하루가 연인에게 맞춰지는 것 같고, 일정이 겹치면 내 시간이 줄어드는 것 같습니다. 이건 이기적인 게 아니라 '나'라는 중심을 지키려는 자연스러운 욕구입니다. 다만 설명 없이 혼자만의 시간을 가지면 상대는 거리감으로 오해할 수 있습니다.",
        "unfold": "연인이 부담스러운 게 아니라 '나다움'이 줄어드는 신호에 민감한 상태",
        "keywords": "내 시간, 내 영역, 독립, 자기 중심, 나다움 유지",
        "reasonDetail": "연락과 일정이 쌓일 때, 내 일상이 연인에게 맞춰지는 느낌이 들 때",
        "strengths": "자기 삶이 탄탄하고 연인에게 과하게 의존하지 않으며 각자의 성장을 존중하는 힘",
        "frequentSaying": '"내 시간은 내가 지키고 싶어"',
        "changeTips": "\n".join(
            [
                '"너랑 있는 게 싫은 게 아니라 나다움을 지켜야 오래 사랑할 수 있어서야"라고 이유를 먼저 말하기',
                "혼자 시간과 함께 시간의 리듬을 연인과 함께 정해두기 (예: 주 1회 각자의 날)",
                "혼자 시간 뒤에 연인에게 먼저 짧은 안부를 건네 거리감으로 오해되지 않게 하기",
            ]
        ),
        "oneLiner": "독립은 사랑의 반대말이 아닙니다. 설명 한 줄이 연인에게는 큰 안심이 됩니다",
        "shareLine": "나는 왜 연애 중에도 혼자가 편할까? 결과: 독립 수호형 🏰 내 영역이 있어야 오래 사랑할 수 있는 거래... 나 독립 수호형 나왔어ㅋㅋ 너는 뭐 나왔어?",
    },
    {
        "type": "Type2",
        "emoji": "🔋",
        "typeName": "에너지 보존형",
        "title": "에너지가 쉽게 닳는 사람, 에너지 보존형 🔋",
        "realReason": "사람과 함께하는 시간이 에너지를 크게 쓰게 해서 혼자 충전해야 한다",
        "shortDescription": "당신은 연인이 싫은 게 아닙니다. 에너지 배터리가 빨리 닳아서 혼자 충전이 필요한 사람입니다.",
        "body": "연애가 즐거워도 하루 종일 같이 있으면 방전되고, 연락에 답하는 것만으로도 기운이 빠집니다. 혼자 있으면 비로소 숨이 쉬어지고 다시 연인에게 돌아갈 힘이 생깁니다. 충전 방식이 사람마다 다를 뿐 사랑의 크기와는 무관합니다.",
        "unfold": "관계에 애정이 없는 게 아니라 에너지를 쓰는 속도가 충전 속도보다 빠른 상태",
        "keywords": "방전, 충전, 에너지 소모, 혼자 쉼, 회복",
        "reasonDetail": "하루 종일 같이 있었던 뒤, 사람 많은 자리에 다녀온 뒤, 갑작스러운 만남 제안이 올 때",
        "strengths": "자기 에너지 상태를 잘 알고 회복이 되면 연인에게 집중력 있게 몰입함",
        "frequentSaying": '"나 지금 배터리가 없어서 충전 좀 하고 올게"',
        "changeTips": "\n".join(
            [
                '"싫어서가 아니라 충전하고 오면 더 잘해줄 수 있어서야"라고 목적을 말하기',
                "만남 전후에 쉬는 시간을 미리 일정에 넣어 방전 전에 회복하기",
                '충전 시간의 길이를 연인에게 알려 "두 시간 뒤에 연락할게"처럼 기대 시간을 맞추기',
            ]
        ),
        "oneLiner": "충전이 필요한 건 약함이 아니라 자기 속도를 아는 것입니다. 충전하고 오면 사랑도 더 선명해집니다",
        "shareLine": "나는 왜 연애 중에도 혼자가 편할까? 결과: 에너지 보존형 🔋 배터리가 빨리 닳아서 혼자 충전해야 하는 거래... 나 에너지 보존형 나왔어ㅋㅋ 인정 너는?",
    },
    {
        "type": "Type3",
        "emoji": "🌊",
        "typeName": "감정 과부하형",
        "title": "감정이 한꺼번에 밀려오는 사람, 감정 과부하형 🌊",
        "realReason": "연인과 있으면 감정이 많이 움직여서 조용히 정리할 시간이 필요하다",
        "shortDescription": "당신은 거리를 두려는 게 아닙니다. 감정의 파도를 가라앉힐 조용한 시간이 필요한 사람입니다.",
        "body": "연인의 감정과 분위기까지 함께 받아들이다 보면 마음이 가득 차서 정리가 안 됩니다. 혼자 있는 시간에 하루의 감정을 정돈해야 다시 연인과 편하게 마주할 수 있습니다. 정리 없이 이어지면 말이 이상하게 나오거나 감정이 더 커지기도 합니다.",
        "unfold": "연인이 부담이라서가 아니라 감정을 흡수하는 양이 커서 처리할 시간이 필요한 상태",
        "keywords": "감정 정리, 조용한 시간, 분위기 흡수, 벅참, 진정",
        "reasonDetail": "다툼 뒤, 연인의 감정을 오래 들은 뒤, 큰 이벤트나 모임을 마친 뒤",
        "strengths": "감정이 깊고 공감 능력이 뛰어나며 상대의 분위기를 섬세하게 읽는 힘",
        "frequentSaying": '"머리가 복잡해서 잠깐 정리하고 올게"',
        "changeTips": "\n".join(
            [
                '감정이 벅찰 때 "지금 마음이 가득 차서 정리할 시간이 필요해"라고 상태를 말하기',
                "혼자 시간에 쓸 진정 루틴(산책·글쓰기·샤워)을 미리 정해두기",
                '정리가 끝나면 "정리 끝났어, 이야기하자"라고 먼저 돌아와 연결 이어가기',
            ]
        ),
        "oneLiner": "감정을 정리하는 시간은 관계를 위한 준비입니다. 돌아오겠다는 한마디가 곁에 남는 방법입니다",
        "shareLine": "나는 왜 연애 중에도 혼자가 편할까? 결과: 감정 과부하형 🌊 감정이 한꺼번에 밀려와서 정리할 시간이 필요한 거래... 나 감정 과부하형 나왔어ㅋㅋ 너는 어떤 유형이야?",
    },
    {
        "type": "Type4",
        "emoji": "🧭",
        "typeName": "경계 확장형",
        "title": "경계가 흐려지는 게 불안한 사람, 경계 확장형 🧭",
        "realReason": "연인과 내 영역이 섞이면서 어디까지가 나인지 흐려지는 것이 불안하다",
        "shortDescription": "당신은 연인을 밀어내는 게 아닙니다. 서로의 영역이 분명해야 안전하다고 느끼는 사람입니다.",
        "body": "연락·일정·생활이 섞이면 내 선과 상대의 선이 흐려지는 것 같습니다. 같이 사는 이야기가 나오면 설렘보다 불안이 먼저 오기도 합니다. 경계가 선명할 때 오히려 더 가까워질 수 있는 타입입니다.",
        "unfold": "연인에 대한 거부가 아니라 경계가 흐려질수록 내가 사라진다고 느끼는 상태",
        "keywords": "경계, 영역 구분, 선 긋기, 섞임에 대한 불안, 선명함",
        "reasonDetail": "생활이 겹칠 때, 연인이 내 공간에 들어올 때, 같이 사는 이야기가 나올 때",
        "strengths": "관계에서 건강한 선을 세울 줄 알고 서로를 존중하는 구조를 만들 수 있음",
        "frequentSaying": '"여기까지는 내 영역이야"',
        "changeTips": "\n".join(
            [
                '경계를 거부가 아닌 \'서로를 지키는 약속\'으로 설명하기. 예: "각자의 공간이 있어야 같이 있는 시간도 소중해져"',
                "지켜야 할 경계 2~3가지를 연인과 함께 정해 둔 기준 만들기",
                "경계를 정한 뒤에는 함께하는 시간에 더 집중해 연결감을 채우기",
            ]
        ),
        "oneLiner": "경계는 벽이 아니라 울타리입니다. 선명한 울타리가 있어야 서로 안심하고 가까워질 수 있습니다",
        "shareLine": "나는 왜 연애 중에도 혼자가 편할까? 결과: 경계 확장형 🧭 서로의 영역이 흐려지는 게 불안한 거래... 나 경계 확장형 나왔어ㅋㅋ 소름 너는 뭐야?",
    },
    {
        "type": "Type5",
        "emoji": "🍂",
        "typeName": "관계 피로형",
        "title": "관계에 오래 지쳐 있는 사람, 관계 피로형 🍂",
        "realReason": "사람과의 관계에서 쌓인 피로가 연애에서도 이어져 쉼이 필요하다",
        "shortDescription": "당신은 사랑이 식은 게 아닙니다. 오랜 관계의 피로가 쌓여 있어서 쉬고 싶은 상태입니다.",
        "body": "연애뿐 아니라 사람을 상대하는 모든 일이 버겁게 느껴지고, 연인이 좋아도 연락과 만남이 의무처럼 느껴집니다. 혼자 있을 때만 숨이 쉬어지는 날이 늘어나면 피로가 꽤 쌓였다는 신호입니다. 이 피로를 방치하면 연애마저 힘들어질 수 있습니다.",
        "unfold": "연인이 문제라기보다 관계 전반에서 쌓인 소진이 쉼을 요구하는 상태",
        "keywords": "피로, 의무감, 사람 지침, 쉼 필요, 소진",
        "reasonDetail": "사람을 계속 만난 시기, 들어주는 역할이 이어질 때, 일상이 바쁠 때",
        "strengths": "책임감이 강하고 관계에 성실하게 임하며 상대를 배려하는 힘",
        "frequentSaying": '"요즘 사람이 너무 지쳐"',
        "changeTips": "\n".join(
            [
                '"너 때문이 아니라 요즘 내가 많이 지쳐 있어서야"라고 원인을 분리해서 말하기',
                "의무처럼 느껴지는 연락·약속을 줄이고 꼭 필요한 연결만 남기는 기간 정하기",
                "쉼의 기간이 끝나면 연인과 함께할 작은 즐거운 계획을 하나 세워두기",
            ]
        ),
        "oneLiner": "쉬어야 다시 사랑할 수 있습니다. 지친 이유를 말로 나누면 쉼도 관계의 일부가 됩니다",
        "shareLine": "나는 왜 연애 중에도 혼자가 편할까? 결과: 관계 피로형 🍂 사람에 오래 지쳐서 쉼이 필요한 거래... 나 관계 피로형 나왔어ㅋㅋ 찔림 너는?",
    },
]


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def build_data_ts() -> str:
    lines = []
    lines.append("/**")
    lines.append(f" * {TITLE}")
    lines.append(f" * slug: {SLUG}")
    lines.append(" * 10문항 4지선다 · 5유형 · KO-first")
    lines.append(" */")
    lines.append("")
    lines.append("export type Phase3AloneEvenInLoveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';")
    lines.append("type LocaleText = Record<Phase3AloneEvenInLoveLocaleKey, string>;")
    lines.append("")
    lines.append("function L(ko: string): LocaleText {")
    lines.append("  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3AloneEvenInLoveQuestion {")
    lines.append("  id: number;")
    lines.append("  question: LocaleText;")
    lines.append("  options: { text: LocaleText; score: number }[];")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3AloneEvenInLoveResult {")
    lines.append("  type: string;")
    lines.append("  emoji: string;")
    lines.append("  title: LocaleText;")
    lines.append("  typeName: LocaleText;")
    lines.append("  realReason: LocaleText;")
    lines.append("  shortDescription: LocaleText;")
    lines.append("  description: LocaleText;")
    lines.append("  keywords: LocaleText;")
    lines.append("  strengths: LocaleText;")
    lines.append("  reasonDetail: LocaleText;")
    lines.append("  frequentSaying: LocaleText;")
    lines.append("  changeTips: LocaleText;")
    lines.append("  oneLiner: LocaleText;")
    lines.append("  shareLine: LocaleText;")
    lines.append("}")
    lines.append("")
    lines.append("export const PHASE3_ALONE_EVEN_IN_LOVE_TYPES = [")
    lines.append("  'Type1',")
    lines.append("  'Type2',")
    lines.append("  'Type3',")
    lines.append("  'Type4',")
    lines.append("  'Type5',")
    lines.append("] as const;")
    lines.append("")
    lines.append("/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */")
    lines.append("export function calculatePhase3AloneEvenInLoveScores(answers: number[]): Record<string, number> {")
    lines.append("  const scores: Record<string, number> = {};")
    lines.append("  for (const type of PHASE3_ALONE_EVEN_IN_LOVE_TYPES) scores[type] = 0;")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if (key in scores) scores[key] += 1;")
    lines.append("  }")
    lines.append("  return scores;")
    lines.append("}")
    lines.append("")
    lines.append("/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */")
    lines.append("export function calculatePhase3AloneEvenInLoveResult(answers: number[]): string {")
    lines.append("  const scores = calculatePhase3AloneEvenInLoveScores(answers);")
    lines.append("  const max = Math.max(...Object.values(scores));")
    lines.append("  const tied = PHASE3_ALONE_EVEN_IN_LOVE_TYPES.filter((t) => scores[t] === max);")
    lines.append("  if (tied.length === 1) return tied[0];")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if ((tied as readonly string[]).includes(key)) return key;")
    lines.append("  }")
    lines.append("  return tied[0];")
    lines.append("}")
    lines.append("")
    lines.append("/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */")
    lines.append("export function getPhase3AloneEvenInLoveHiddenType(answers: number[]): string | null {")
    lines.append("  const scores = calculatePhase3AloneEvenInLoveScores(answers);")
    lines.append("  const sorted = [...PHASE3_ALONE_EVEN_IN_LOVE_TYPES].sort((a, b) => scores[b] - scores[a]);")
    lines.append("  const [first, second, third] = sorted;")
    lines.append("  if (scores[first] === scores[second]) return null;")
    lines.append("  if (scores[second] === 0 || scores[second] === scores[third]) return null;")
    lines.append("  return second;")
    lines.append("}")
    lines.append("")
    lines.append("const RAW_QUESTIONS: { q: string; opts: [string, number][] }[] = [")
    for qi, (q, opts) in enumerate(QUESTIONS):
        scores = MAPPING[qi]
        lines.append("  {")
        lines.append(f"    q: {ts_str(q)},")
        lines.append("    opts: [")
        for oi, opt in enumerate(opts):
            comma = "," if oi < 3 else ""
            lines.append(f"      [{ts_str(opt)}, {scores[oi]}]{comma}")
        lines.append("    ],")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("export const phase3AloneEvenInLoveQuestions: Phase3AloneEvenInLoveQuestion[] = RAW_QUESTIONS.map(")
    lines.append("  (item, idx) => ({")
    lines.append("    id: idx + 1,")
    lines.append("    question: L(item.q),")
    lines.append("    options: item.opts.map(([text, score]) => ({ text: L(text), score })),")
    lines.append("  }),")
    lines.append(");")
    lines.append("")
    lines.append("export const phase3AloneEvenInLoveResults: Phase3AloneEvenInLoveResult[] = [")
    for r in RESULTS:
        desc = f"{r['body']}\n\n진짜 이유를 풀어보면: {r['unfold']}"
        lines.append("  {")
        lines.append(f"    type: {ts_str(r['type'])},")
        lines.append(f"    emoji: {ts_str(r['emoji'])},")
        lines.append(f"    title: L({ts_str(r['title'])}),")
        lines.append(f"    typeName: L({ts_str(r['typeName'])}),")
        lines.append(f"    realReason: L({ts_str(r['realReason'])}),")
        lines.append(f"    shortDescription: L({ts_str(r['shortDescription'])}),")
        lines.append(f"    description: L({ts_str(desc)}),")
        lines.append(f"    keywords: L({ts_str(r['keywords'])}),")
        lines.append(f"    strengths: L({ts_str(r['strengths'])}),")
        lines.append(f"    reasonDetail: L({ts_str(r['reasonDetail'])}),")
        lines.append(f"    frequentSaying: L({ts_str(r['frequentSaying'])}),")
        lines.append(f"    changeTips: L({ts_str(r['changeTips'])}),")
        lines.append(f"    oneLiner: L({ts_str(r['oneLiner'])}),")
        lines.append(f"    shareLine: L({ts_str(r['shareLine'])}),")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("export const PHASE3_ALONE_EVEN_IN_LOVE_META = {")
    lines.append("  title: {")
    lines.append(f"    ko: {ts_str(TITLE)},")
    lines.append("    en: '',")
    lines.append("    ja: '',")
    lines.append("    'zh-CN': '',")
    lines.append("    'zh-TW': '',")
    lines.append("    vi: '',")
    lines.append("    id: '',")
    lines.append("  },")
    lines.append("  description: {")
    lines.append(f"    ko: {ts_str(META_DESC)},")
    lines.append("    en: '',")
    lines.append("    ja: '',")
    lines.append("    'zh-CN': '',")
    lines.append("    'zh-TW': '',")
    lines.append("    vi: '',")
    lines.append("    id: '',")
    lines.append("  },")
    lines.append("  tags: {")
    lines.append(f"    ko: {json.dumps(TAGS, ensure_ascii=False)},")
    lines.append("    en: [] as string[],")
    lines.append("    ja: [] as string[],")
    lines.append("    'zh-CN': [] as string[],")
    lines.append("    'zh-TW': [] as string[],")
    lines.append("    vi: [] as string[],")
    lines.append("    id: [] as string[],")
    lines.append("  },")
    lines.append("};")
    lines.append("")
    return "\n".join(lines)


(root / "lib" / "phase3AloneEvenInLoveData.ts").write_text(build_data_ts(), encoding="utf-8", newline="\n")
print("data ok")

START_SHARE = "나는 왜 연애 중에도 혼자가 편할까? 🏰 연인이 좋은데 왜 혼자 시간이 필요해? 너도 해봐!"

messages = {
    NS: {
        "startMessage": {
            "line1": "연인이 좋은데, 왜 혼자 있는 시간이 이렇게 필요할까?",
            "line2": '사랑하는 사람이 있어도 주말 하루는 혼자 보내고 싶고, 연락이 이어지다 보면 어느 순간 폰을 내려놓고 싶어집니다. 연인이 싫어진 것도 아닌데 "나 혼자 있을 시간이 필요해"라고 말하면 상대가 서운해할까 봐 미안해집니다.',
            "line3": "혼자가 편한 데에는 사람마다 서로 다른 이유가 있습니다. 나만의 영역을 지키고 싶어서일 수도, 에너지가 쉽게 닳아서일 수도, 감정이 한꺼번에 몰려서일 수도, 관계의 경계가 흐려지는 게 불안해서일 수도, 관계에 오래 지쳐서일 수도 있습니다. 이유를 알면 연인에게 설명하는 방법도 달라집니다.",
            "line4": "10가지 상황으로 내가 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "혼자가 편한 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "혼자가 편한 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 이유",
            "strengths": "이 유형의 강점",
            "reasonDetail": "혼자가 필요해지는 순간",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "독립 욕구를 이해하고 설명하는 법",
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
            "startDefault": START_SHARE,
            "startKakao": START_SHARE,
            "startWechat": START_SHARE,
            "startWhatsapp": START_SHARE,
            "startTelegram": START_SHARE,
            "startLine": START_SHARE,
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

title_obj = {k: TITLE for k in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]}
desc_obj = {k: META_DESC for k in title_obj}
tags_obj = {k: TAGS for k in title_obj}


def sql_str(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))
    return "'" + s.replace("'", "''") + "'"


sql = f"""-- {TITLE}
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

# Client from TongueTiedCrush (already stripped counseling UI)
src = (root / "components" / "Phase3TongueTiedCrushTestClient.tsx").read_text(encoding="utf-8")
out = src
for a, b in [
    ("Phase3TongueTiedCrushQuestion", "Phase3AloneEvenInLoveQuestion"),
    ("Phase3TongueTiedCrushResult", "Phase3AloneEvenInLoveResult"),
    ("PHASE3_TONGUE_TIED_CRUSH_TYPES", "PHASE3_ALONE_EVEN_IN_LOVE_TYPES"),
    ("calculatePhase3TongueTiedCrushResult", "calculatePhase3AloneEvenInLoveResult"),
    ("calculatePhase3TongueTiedCrushScores", "calculatePhase3AloneEvenInLoveScores"),
    ("getPhase3TongueTiedCrushHiddenType", "getPhase3AloneEvenInLoveHiddenType"),
    ("phase3TongueTiedCrushData", "phase3AloneEvenInLoveData"),
    ("phase3TongueTiedCrushTest", NS),
    ("Phase3TongueTiedCrushTestClient", "Phase3AloneEvenInLoveTestClient"),
    ("Phase3TongueTiedCrush", "Phase3AloneEvenInLove"),
]:
    out = out.replace(a, b)

(root / "components" / "Phase3AloneEvenInLoveTestClient.tsx").write_text(out, encoding="utf-8", newline="\n")
print("client ok")

# Registry
reg = (root / "lib" / "testRuntimeRegistry.ts").read_text(encoding="utf-8")
entry = f"""
  '{SLUG}': {{
    slug: '{SLUG}',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {{
      const {{ PHASE3_ALONE_EVEN_IN_LOVE_META }} = await import('./phase3AloneEvenInLoveData');
      return {{
        title: PHASE3_ALONE_EVEN_IN_LOVE_META.title,
        description: PHASE3_ALONE_EVEN_IN_LOVE_META.description,
        tags: PHASE3_ALONE_EVEN_IN_LOVE_META.tags,
        thumbnail: '{THUMB}',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      }};
    }},
    loadBalancePayload: async () => {{
      const mod = await import('./phase3AloneEvenInLoveData');
      return {{
        questions: mod.phase3AloneEvenInLoveQuestions,
        results: mod.phase3AloneEvenInLoveResults,
        meta: {{
          title: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.title,
          description: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.description,
          tags: mod.PHASE3_ALONE_EVEN_IN_LOVE_META.tags,
          thumbnail: '{THUMB}',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        }},
        messagesNamespace: '{NS}',
        messagesFileSlug: '{SLUG}',
      }};
    }},
    loadClient: () => import('@/components/Phase3AloneEvenInLoveTestClient'),
  }},
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
        "'phase3-tongue-tied-crush': 'scenario_4',",
        "'phase3-tongue-tied-crush': 'scenario_4',\n  'phase3-alone-even-in-love': 'scenario_4',",
    )
    (root / "lib" / "testFormatRegistry.ts").write_text(fmt, encoding="utf-8", newline="\n")
    print("format ok")
else:
    print("format already has slug")

msg = (root / "lib" / "testMessages.ts").read_text(encoding="utf-8")
loader = f"""  '{SLUG}': {{
    ko: () => import('@/messages/ko/tests/{SLUG}.json'),
    en: () => import('@/messages/en/tests/{SLUG}.json'),
    ja: () => import('@/messages/ja/tests/{SLUG}.json'),
    'zh-CN': () => import('@/messages/zh-CN/tests/{SLUG}.json'),
    'zh-TW': () => import('@/messages/zh-TW/tests/{SLUG}.json'),
    vi: () => import('@/messages/vi/tests/{SLUG}.json'),
    id: () => import('@/messages/id/tests/{SLUG}.json'),
  }},
"""
if SLUG not in msg:
    msg = msg.replace(
        "  'phase3-tongue-tied-crush': {",
        loader + "  'phase3-tongue-tied-crush': {",
    )
    (root / "lib" / "testMessages.ts").write_text(msg, encoding="utf-8", newline="\n")
    print("testMessages ok")
else:
    print("testMessages already has slug")

# verify client
client = (root / "components" / "Phase3AloneEvenInLoveTestClient.tsx").read_text(encoding="utf-8")
assert "phase3AloneEvenInLoveData" in client
assert NS in client
assert "TongueTied" not in client
assert "tongue-tied" not in client
assert "EmptyEven" not in client
assert "empty-even" not in client
assert "AloneTime" not in client
assert "alone-time" not in client
assert "ui.counseling" not in client
assert "ui.disclaimer" not in client
assert "counselingNote" not in client
assert "export default function Phase3AloneEvenInLoveTestClient" in client
assert "PHASE3_ALONE_EVEN_IN_LOVE_TYPES" in client
print("client rename ok")

# verify messages have no counseling/disclaimer
for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]:
    msg_path = root / "messages" / loc / "tests" / f"{SLUG}.json"
    raw = msg_path.read_text(encoding="utf-8")
    assert "counseling" not in raw
    assert "disclaimer" not in raw
print("messages no counseling/disclaimer ok")

# verify data scoring counts from RAW opts
data = (root / "lib" / "phase3AloneEvenInLoveData.ts").read_text(encoding="utf-8")
opt_scores = [int(x) for x in re.findall(r'", (\d+)\]', data)]
c = Counter(opt_scores)
assert all(c[i] == 8 for i in range(1, 6)), c
assert "counselingNote" not in data
assert "Type6" not in data
print("data scoring counts ok", dict(c))

# verify page.tsx untouched by this slug
page = (root / "app" / "[locale]" / "test" / "[slug]" / "page.tsx").read_text(encoding="utf-8")
assert SLUG not in page
assert "phase3-alone-time-type" in page  # existing different test stays
print("page.tsx clean (no new slug) ok")
print("DONE")
