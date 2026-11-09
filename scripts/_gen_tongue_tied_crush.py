# -*- coding: utf-8 -*-
"""Generate phase3-tongue-tied-crush KO-first (registry typed via balance payload)."""
from pathlib import Path
from collections import Counter
import json
import re

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-tongue-tied-crush"
NS = "phase3TongueTiedCrushTest"
THUMB = "p3_test_tongue_tied_crush.webp"
TITLE = "나는 왜 썸 상대 앞에서만 말이 꼬일까?"
META_DESC = (
    "평소엔 말 잘하는데 왜 그 사람 앞에서만 버벅일까? "
    "10가지 상황으로 말이 꼬이는 진짜 이유와 편하게 말하는 법을 알려드립니다."
)
TAGS = ["썸", "연애심리"]

# scoring map A B C D
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
        "썸 상대와 단둘이 카페에 앉았다. 첫마디를 꺼내려는 순간 나는?",
        [
            "어떤 말이 가장 멋져 보일지 머릿속으로 문장을 다듬다 타이밍을 놓친다",
            "이 말을 하면 어떻게 평가할까 싶어 말하기 전부터 위축된다",
            "심장이 너무 빨리 뛰어서 평소의 말투가 아니라 목소리가 들뜬다",
            "말을 꺼내면 실수할 것 같아서 일단 조용히 웃기만 한다",
        ],
    ),
    (
        '썸 상대가 "요즘 뭐 하고 지내?"라고 물었다. 나는?',
        [
            "대답을 하면서 상대가 내 말을 어떻게 판단할까 신경 쓰여 말이 짧아진다",
            "설레는 마음이 너무 커서 하고 싶은 말이 한꺼번에 튀어나와 문장이 뒤엉킨다",
            "별일 없다며 짧게 답하고 더 이상 말을 이어가지 않는다",
            "이 사람 앞이라는 생각이 머리를 가득 채워서 평소 하던 말도 하나도 생각나지 않는다",
        ],
    ),
    (
        "대화 중 갑자기 침묵이 흘렀다. 나는?",
        [
            "심장 소리가 들릴 것 같고 신경이 곤두서서 아무 말도 떠오르지 않는다",
            "말을 하면 오히려 실수할 것 같아서 침묵을 그냥 두는 편이 안전하다고 느낀다",
            "모든 신경이 이 사람에게 쏠려서 머리가 하얘진다",
            "침묵을 깰 만큼 멋진 말을 찾느라 고민하다 더 어색해진다",
        ],
    ),
    (
        "상대가 내 이야기를 웃으며 듣고 있다. 나는?",
        [
            "이야기를 이어가기보다 화제를 얼른 상대 쪽으로 넘긴다",
            "이 순간이 너무 의미 있어서 모든 걸 잘해야 한다는 생각에 입이 얼어붙는다",
            "방금 한 말이 완벽했는지 되짚으며 다음 말을 더 매끄럽게 하려고 계산한다",
            "웃는 모습이 마음에 들어서 내가 이상하게 보일까 걱정이 앞선다",
        ],
    ),
    (
        "상대에게 농담을 던지려는 순간 나는?",
        [
            "상대가 신경 쓰이다 보니 평소에 하던 농담의 타이밍을 계속 놓친다",
            "가장 센스 있어 보이는 농담을 고르느라 시간이 지나 흐름이 끊긴다",
            "이 농담이 재미없으면 어쩌나 평가받을까 두려워 삼킨다",
            "웃음이 먼저 터져서 문장을 끝맺지 못하고 말이 꼬인다",
        ],
    ),
    (
        "상대 앞에서 말하다 말실수를 했다. 나는?",
        [
            "가슴이 두근거려서 실수한 말을 고치지도 못하고 얼굴이 빨개진다",
            "이 이후로 말을 줄이는 게 낫겠다 싶어 입을 닫는다",
            "실수한 걸 만회하려고 더 완벽한 문장을 만들려다 오히려 말이 꼬인다",
            "방금 실수 때문에 이 사람이 나를 이상하게 볼까 마음이 쿵 내려앉는다",
        ],
    ),
    (
        '상대가 "너 평소엔 말 잘하는데 오늘은 왜 이래?"라고 웃었다. 나는?',
        [
            "말없이 웃으며 대화를 끝내려고 화제를 돌린다",
            "사실 너 앞이라서 모든 게 의식돼서 그렇다고 말하고 싶지만 얼굴만 붉어진다",
            "이 말도 평가인가 싶어 더 위축되어 입을 다문다",
            "설레서 어쩔 줄 모르겠다는 마음이 얼굴과 목소리로 다 드러난다",
        ],
    ),
    (
        "썸 상대에게 보낼 메시지를 쓰고 있다. 나는?",
        [
            "상대가 신경 쓰이다 보니 쓰고 지우기를 열 번 넘게 반복한다",
            "가장 완벽한 문장이 될 때까지 몇 번을 고치며 보내지 못한다",
            "설레는 마음이 앞서서 문장이 길어지고 두서없이 쓰다가 부끄러워 지운다",
            "괜히 말이 꼬일 것 같아서 한두 단어만 보내고 마무리한다",
        ],
    ),
    (
        "상대 앞에서 내 이야기를 길게 해야 하는 상황이다. 나는?",
        [
            "내가 말하는 방식이 어떻게 보일지 연출까지 신경 쓰느라 오히려 어색해진다",
            "어떤 반응을 보일지 평가가 두려워서 말하기 전부터 손에 땀이 난다",
            "말하다 실수할까 봐 말끝을 흐리고 짧게 마무리한다",
            "이 순간 이 사람에게 쏠린 모든 신경 때문에 하려던 말이 머릿속에서 사라진다",
        ],
    ),
    (
        "헤어지고 집에 와서 오늘 대화를 떠올렸다. 가장 가까운 후회는?",
        [
            "방금 한 말이 이상하게 들렸을까 평가가 두려워서 계속 떠올린다",
            "설레서 어쩔 줄 몰랐던 내 모습이 생각나 얼굴이 뜨거워진다",
            "하고 싶은 말은 하나도 못 하고 상대에게만 온 신경이 쏠려 있던 내가 떠오른다",
            "더 멋지게 말할 수 있었는데 하고 완벽한 장면을 다시 연출해 본다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🎯",
        "typeName": "과몰입 긴장형",
        "title": "그 사람에게만 모든 신경이 쏠리는 사람, 과몰입 긴장형 🎯",
        "realReason": "상대에게 신경이 한꺼번에 쏠려 평소의 자연스러움이 사라진다",
        "shortDescription": "당신은 말을 못 하는 게 아닙니다. 그 사람에게 신경이 전부 쏠려서 평소의 나를 꺼낼 여유가 없는 것입니다.",
        "body": "친구 앞에서는 쉽게 나오던 농담과 문장이 그 사람 앞에서는 머릿속에서 사라집니다. 의식이 상대에게만 향하다 보니 내 말을 꺼낼 공간이 줄어듭니다. 이건 말솜씨의 문제가 아니라 주의가 한곳에 몰리는 현상입니다.",
        "unfold": "상대가 부담스러운 게 아니라 의식이 상대에게 쏠려 내 말에 쓸 에너지가 줄어든 상태",
        "keywords": "신경 쏠림, 머리가 하얘짐, 평소와 다름, 의식 과잉, 쓰고 지우기",
        "reasonDetail": "단둘이 있을 때, 침묵이 흐를 때, 메시지를 쓸 때",
        "strengths": "상대에게 진심으로 집중하고 작은 변화도 놓치지 않는 몰입력",
        "frequentSaying": '"머리가 하얘졌어"',
        "changeTips": "\n".join(
            [
                '만나기 전 "오늘 할 이야기 소재 3가지"를 메모해 두기',
                "긴장될 때 숨을 천천히 내쉬고 상대 대신 눈앞의 물건 하나에 잠깐 시선 두기",
                '말이 막히면 "너 앞이라 좀 긴장돼"라고 솔직하게 말해 부담 줄이기',
            ]
        ),
        "oneLiner": "머리가 하얘지는 건 마음이 크다는 증거입니다. 소재 몇 개와 솔직한 한마디면 충분합니다",
        "shareLine": "나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 과몰입 긴장형 🎯 그 사람에게 신경이 다 쏠려서 머리가 하얘진대... 나 과몰입 긴장형 나왔어ㅋㅋ 너는 뭐 나왔어?",
    },
    {
        "type": "Type2",
        "emoji": "🎭",
        "typeName": "완벽 연출형",
        "title": "멋지게 보이려고 말을 고르는 사람, 완벽 연출형 🎭",
        "realReason": "가장 멋진 모습으로 보이려고 문장을 연출하다 흐름이 끊긴다",
        "shortDescription": "당신은 말이 서툰 게 아닙니다. 가장 좋은 말만 내보내려다 말할 타이밍을 놓치고 있습니다.",
        "body": "센스 있는 농담, 멋진 문장, 완벽한 첫마디를 머릿속에서 계속 고르고 다듬습니다. 다듬는 사이 대화는 지나가고, 어렵게 꺼낸 말은 어색하게 들립니다. 연출이 강할수록 자연스러운 모습이 가려집니다.",
        "unfold": "대화가 아니라 '내가 어떻게 보일까'라는 연출에 에너지가 쓰이고 있음",
        "keywords": "문장 다듬기, 멋져 보이기, 타이밍 놓침, 계산, 연출",
        "reasonDetail": "첫마디를 꺼낼 때, 농담을 던질 때, 메시지를 보낼 때",
        "strengths": "상대에게 좋은 인상을 주려는 노력과 센스가 있고 섬세함",
        "frequentSaying": '"더 멋지게 말할 수 있었는데"',
        "changeTips": "\n".join(
            [
                "문장을 다듬는 횟수를 '한 번'으로 정하고 그다음엔 그대로 말해 보기",
                '멋진 말 대신 솔직한 한 줄 먼저 던지기. 예: "오늘 너 만나서 기분 좋아"',
                "완벽한 문장보다 자연스러운 어색함이 더 호감이라는 점 기억하기",
            ]
        ),
        "oneLiner": "완벽한 문장은 필요 없습니다. 조금 어색해도 진심이 담긴 한마디가 더 가깝게 닿습니다",
        "shareLine": "나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 완벽 연출형 🎭 멋지게 말하려다 타이밍을 놓치는 거래... 나 완벽 연출형 나왔어ㅋㅋ 인정 너는?",
    },
    {
        "type": "Type3",
        "emoji": "🔍",
        "typeName": "평가 공포형",
        "title": "평가받는 것이 두려운 사람, 평가 공포형 🔍",
        "realReason": "내 말이 어떻게 평가될지 두려워 말하기 전부터 위축된다",
        "shortDescription": "당신은 할 말이 없는 게 아닙니다. 내 말이 어떻게 판단될지 두려워서 입이 먼저 얼어붙습니다.",
        "body": "방금 한 말이 이상했나, 농담이 재미없으면 어쩌지 하는 생각이 말하기 전과 후를 채웁니다. 상대의 작은 표정도 평가처럼 읽히고, 말은 더 짧아집니다. 헤어진 뒤에도 장면을 반복해서 되감으며 자책하기도 합니다.",
        "unfold": "상대의 실제 평가보다 내가 상상한 평가가 말을 막고 있음",
        "keywords": "평가 두려움, 위축, 표정 해석, 되감기, 말이 짧아짐",
        "reasonDetail": "농담을 던지려 할 때, 말실수를 한 뒤, 상대의 반응을 살필 때",
        "strengths": "말을 신중하게 고르고 상대에게 실례하지 않으려는 섬세함",
        "frequentSaying": '"내가 이상하게 들렸을까?"',
        "changeTips": "\n".join(
            [
                "상대의 표정을 해석하기 전에 '실제로 한 말'만 사실로 떠올려 보기",
                '말실수는 "아 방금 말 꼬였다ㅋㅋ"처럼 웃으며 인정하고 넘기기',
                '헤어진 뒤 되감기가 시작되면 "상대가 실제로 한 반응" 세 가지만 적어 보기',
            ]
        ),
        "oneLiner": "상대는 당신을 심사하는 게 아니라 알아가는 중입니다. 평가 대신 대화에 주의를 돌려 보세요",
        "shareLine": "나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 평가 공포형 🔍 평가받을까 봐 입이 먼저 얼어붙는 거래... 나 평가 공포형 나왔어ㅋㅋ 찔림 너는 어떤 유형이야?",
    },
    {
        "type": "Type4",
        "emoji": "💓",
        "typeName": "설렘 과열형",
        "title": "설렘이 너무 커서 넘치는 사람, 설렘 과열형 💓",
        "realReason": "설렘이 커서 심장과 말의 속도가 맞지 않아 문장이 뒤엉킨다",
        "shortDescription": "당신은 말이 서툰 게 아니라 마음이 너무 빨리 뛰고 있습니다. 설렘의 속도를 말이 못 따라가는 것입니다.",
        "body": "하고 싶은 말이 한꺼번에 몰려 순서가 엉키고, 웃음이 먼저 터져 문장을 끝맺지 못합니다. 목소리가 들뜨고 얼굴이 붉어져서 티가 다 납니다. 감정이 솔직하게 드러나는 건 약점이 아니라 매력이기도 합니다.",
        "unfold": "말솜씨가 아니라 감정의 속도가 말의 속도보다 빠른 상태",
        "keywords": "두근거림, 말이 뒤엉킴, 얼굴 빨개짐, 들뜬 목소리, 감정이 앞섬",
        "reasonDetail": "상대가 웃을 때, 칭찬받을 때, 메시지를 쓸 때",
        "strengths": "감정이 솔직하고 풍부하며 설렘을 숨김없이 표현하는 진심",
        "frequentSaying": '"나 지금 너무 설레서 말이 안 나와"',
        "changeTips": "\n".join(
            [
                "말하기 전에 3초 호흡으로 심박을 낮추고 한 문장씩 천천히 말하기",
                "하고 싶은 말이 많을 땐 가장 중요한 한 가지만 먼저 꺼내기",
                '설렘이 티 날 땐 "나 지금 좀 떨려"라고 인정하면 오히려 편해지기',
            ]
        ),
        "oneLiner": "설렘이 티 나는 건 약점이 아니라 진심입니다. 속도만 조금 늦추면 마음이 또렷이 전해집니다",
        "shareLine": "나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 설렘 과열형 💓 설렘이 커서 말이 못 따라가는 거래... 나 설렘 과열형 나왔어ㅋㅋ 소름 너는 뭐야?",
    },
    {
        "type": "Type5",
        "emoji": "🤐",
        "typeName": "침묵 방어형",
        "title": "말을 아껴 스스로를 지키는 사람, 침묵 방어형 🤐",
        "realReason": "실수가 두려워 말을 줄이고 입을 닫아 대화가 끊긴다",
        "shortDescription": "당신은 말하고 싶지 않은 게 아닙니다. 실수할까 봐 말을 아끼는 쪽이 안전하다고 느끼고 있습니다.",
        "body": "화제를 상대에게 넘기고, 짧게 대답하고, 웃으며 넘기는 방식으로 위험을 줄입니다. 실수는 줄지만 상대는 나를 알 기회가 줄어 관심이 없는 것으로 오해하기도 합니다. 안전한 침묵이 거리가 되기 쉬운 타입입니다.",
        "unfold": "말을 못 하는 게 아니라 실수를 피하려는 방어가 대화를 줄이고 있음",
        "keywords": "말 줄이기, 화제 넘기기, 짧은 대답, 실수 회피, 안전한 침묵",
        "reasonDetail": "침묵이 흐를 때, 말실수를 한 직후, 상대가 내 이야기를 기다릴 때",
        "strengths": "신중하고 상대의 말을 잘 들어주며 차분한 인상을 줌",
        "frequentSaying": '"아, 그냥... 별일 없어"',
        "changeTips": "\n".join(
            [
                '짧은 대답 뒤에 내 이야기 한 줄을 덧붙이기. 예: "나는 이번 주에 영화 봤어"',
                "하루 한 번 작은 대화(인사·안부)에서 말 한 줄 더 얹는 연습하기",
                "실수해도 대화는 이어진다는 경험을 쌓기 위해 일부러 작은 실수를 허용하기",
            ]
        ),
        "oneLiner": "침묵은 안전하지만 거리가 됩니다. 한 줄만 더 말해도 상대는 당신을 더 알게 됩니다",
        "shareLine": "나는 왜 썸 상대 앞에서만 말이 꼬일까? 결과: 침묵 방어형 🤐 실수할까 봐 말을 아끼는 거래... 나 침묵 방어형 나왔어ㅋㅋ 인정 너는?",
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
    lines.append("export type Phase3TongueTiedCrushLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';")
    lines.append("type LocaleText = Record<Phase3TongueTiedCrushLocaleKey, string>;")
    lines.append("")
    lines.append("function L(ko: string): LocaleText {")
    lines.append("  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3TongueTiedCrushQuestion {")
    lines.append("  id: number;")
    lines.append("  question: LocaleText;")
    lines.append("  options: { text: LocaleText; score: number }[];")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3TongueTiedCrushResult {")
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
    lines.append("export const PHASE3_TONGUE_TIED_CRUSH_TYPES = [")
    lines.append("  'Type1',")
    lines.append("  'Type2',")
    lines.append("  'Type3',")
    lines.append("  'Type4',")
    lines.append("  'Type5',")
    lines.append("] as const;")
    lines.append("")
    lines.append("/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */")
    lines.append("export function calculatePhase3TongueTiedCrushScores(answers: number[]): Record<string, number> {")
    lines.append("  const scores: Record<string, number> = {};")
    lines.append("  for (const type of PHASE3_TONGUE_TIED_CRUSH_TYPES) scores[type] = 0;")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if (key in scores) scores[key] += 1;")
    lines.append("  }")
    lines.append("  return scores;")
    lines.append("}")
    lines.append("")
    lines.append("/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */")
    lines.append("export function calculatePhase3TongueTiedCrushResult(answers: number[]): string {")
    lines.append("  const scores = calculatePhase3TongueTiedCrushScores(answers);")
    lines.append("  const max = Math.max(...Object.values(scores));")
    lines.append("  const tied = PHASE3_TONGUE_TIED_CRUSH_TYPES.filter((t) => scores[t] === max);")
    lines.append("  if (tied.length === 1) return tied[0];")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if ((tied as readonly string[]).includes(key)) return key;")
    lines.append("  }")
    lines.append("  return tied[0];")
    lines.append("}")
    lines.append("")
    lines.append("/** 2순위 유형(함께 있는 이유). 1·2순위 모두 동점이 아닐 때만 반환 */")
    lines.append("export function getPhase3TongueTiedCrushHiddenType(answers: number[]): string | null {")
    lines.append("  const scores = calculatePhase3TongueTiedCrushScores(answers);")
    lines.append("  const sorted = [...PHASE3_TONGUE_TIED_CRUSH_TYPES].sort((a, b) => scores[b] - scores[a]);")
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
    lines.append("export const phase3TongueTiedCrushQuestions: Phase3TongueTiedCrushQuestion[] = RAW_QUESTIONS.map(")
    lines.append("  (item, idx) => ({")
    lines.append("    id: idx + 1,")
    lines.append("    question: L(item.q),")
    lines.append("    options: item.opts.map(([text, score]) => ({ text: L(text), score })),")
    lines.append("  }),")
    lines.append(");")
    lines.append("")
    lines.append("export const phase3TongueTiedCrushResults: Phase3TongueTiedCrushResult[] = [")
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
    lines.append("export const PHASE3_TONGUE_TIED_CRUSH_META = {")
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


(root / "lib" / "phase3TongueTiedCrushData.ts").write_text(build_data_ts(), encoding="utf-8", newline="\n")
print("data ok")

START_SHARE = "나는 왜 썸 상대 앞에서만 말이 꼬일까? 💬 평소엔 말 잘하는데 왜 그 사람 앞에서만? 너도 해봐!"

messages = {
    NS: {
        "startMessage": {
            "line1": "평소엔 말 잘하는데, 왜 그 사람 앞에서만 버벅일까?",
            "line2": '친구들과는 수다가 끊이지 않는데 좋아하는 사람 앞에서는 "어... 그게... 음..."만 반복합니다. 헤어지고 나서야 하고 싶던 말이 떠올라 이불을 걷어차기도 합니다.',
            "line3": "말이 꼬이는 데에는 사람마다 서로 다른 이유가 있습니다. 너무 의식해서일 수도, 완벽하게 보이려고 해서일 수도, 평가받는 게 두려워서일 수도, 설렘이 너무 커서일 수도, 말을 아끼려는 방어일 수도 있습니다. 이유를 알면 대화가 편해집니다.",
            "line4": "10가지 상황으로 내가 말이 꼬이는 진짜 이유와 편하게 말하는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "말이 꼬이는 이유 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "말이 꼬이는 진짜 이유",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 이유",
            "strengths": "이 유형의 강점",
            "reasonDetail": "말이 꼬이는 순간",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "편하게 말하는 법",
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

# Client from EmptyEvenLoved (already stripped counseling UI)
src = (root / "components" / "Phase3EmptyEvenLovedTestClient.tsx").read_text(encoding="utf-8")
out = src
for a, b in [
    ("Phase3EmptyEvenLovedQuestion", "Phase3TongueTiedCrushQuestion"),
    ("Phase3EmptyEvenLovedResult", "Phase3TongueTiedCrushResult"),
    ("PHASE3_EMPTY_EVEN_LOVED_TYPES", "PHASE3_TONGUE_TIED_CRUSH_TYPES"),
    ("calculatePhase3EmptyEvenLovedResult", "calculatePhase3TongueTiedCrushResult"),
    ("calculatePhase3EmptyEvenLovedScores", "calculatePhase3TongueTiedCrushScores"),
    ("getPhase3EmptyEvenLovedHiddenType", "getPhase3TongueTiedCrushHiddenType"),
    ("phase3EmptyEvenLovedData", "phase3TongueTiedCrushData"),
    ("phase3EmptyEvenLovedTest", NS),
    ("Phase3EmptyEvenLovedTestClient", "Phase3TongueTiedCrushTestClient"),
    ("Phase3EmptyEvenLoved", "Phase3TongueTiedCrush"),
]:
    out = out.replace(a, b)

(root / "components" / "Phase3TongueTiedCrushTestClient.tsx").write_text(out, encoding="utf-8", newline="\n")
print("client ok")

# Registry
reg = (root / "lib" / "testRuntimeRegistry.ts").read_text(encoding="utf-8")
entry = f"""
  '{SLUG}': {{
    slug: '{SLUG}',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {{
      const {{ PHASE3_TONGUE_TIED_CRUSH_META }} = await import('./phase3TongueTiedCrushData');
      return {{
        title: PHASE3_TONGUE_TIED_CRUSH_META.title,
        description: PHASE3_TONGUE_TIED_CRUSH_META.description,
        tags: PHASE3_TONGUE_TIED_CRUSH_META.tags,
        thumbnail: '{THUMB}',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      }};
    }},
    loadBalancePayload: async () => {{
      const mod = await import('./phase3TongueTiedCrushData');
      return {{
        questions: mod.phase3TongueTiedCrushQuestions,
        results: mod.phase3TongueTiedCrushResults,
        meta: {{
          title: mod.PHASE3_TONGUE_TIED_CRUSH_META.title,
          description: mod.PHASE3_TONGUE_TIED_CRUSH_META.description,
          tags: mod.PHASE3_TONGUE_TIED_CRUSH_META.tags,
          thumbnail: '{THUMB}',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        }},
        messagesNamespace: '{NS}',
        messagesFileSlug: '{SLUG}',
      }};
    }},
    loadClient: () => import('@/components/Phase3TongueTiedCrushTestClient'),
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
        "'phase3-empty-even-loved': 'scenario_4',",
        "'phase3-empty-even-loved': 'scenario_4',\n  'phase3-tongue-tied-crush': 'scenario_4',",
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
        "  'phase3-empty-even-loved': {",
        loader + "  'phase3-empty-even-loved': {",
    )
    (root / "lib" / "testMessages.ts").write_text(msg, encoding="utf-8", newline="\n")
    print("testMessages ok")
else:
    print("testMessages already has slug")

# verify client
client = (root / "components" / "Phase3TongueTiedCrushTestClient.tsx").read_text(encoding="utf-8")
assert "phase3TongueTiedCrushData" in client
assert NS in client
assert "EmptyEven" not in client
assert "empty-even" not in client
assert "Fairytale" not in client
assert "fairytale" not in client
assert "ui.counseling" not in client
assert "ui.disclaimer" not in client
assert "counselingNote" not in client
assert "export default function Phase3TongueTiedCrushTestClient" in client
assert "PHASE3_TONGUE_TIED_CRUSH_TYPES" in client
print("client rename ok")

# verify messages have no counseling/disclaimer
for loc in ["ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id"]:
    msg_path = root / "messages" / loc / "tests" / f"{SLUG}.json"
    raw = msg_path.read_text(encoding="utf-8")
    assert "counseling" not in raw
    assert "disclaimer" not in raw
print("messages no counseling/disclaimer ok")

# verify data scoring counts from RAW opts
data = (root / "lib" / "phase3TongueTiedCrushData.ts").read_text(encoding="utf-8")
opt_scores = [int(x) for x in re.findall(r'", (\d+)\]', data)]
c = Counter(opt_scores)
assert all(c[i] == 8 for i in range(1, 6)), c
assert "counselingNote" not in data
assert "Type6" not in data
print("data scoring counts ok", dict(c))
print("DONE")
