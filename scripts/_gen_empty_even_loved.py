# -*- coding: utf-8 -*-
"""Generate phase3-empty-even-loved KO-first (registry typed via balance payload)."""
from pathlib import Path
from collections import Counter
import json
import re

root = Path(__file__).resolve().parents[1]
SLUG = "phase3-empty-even-loved"
NS = "phase3EmptyEvenLovedTest"
THUMB = "p3_test_empty_even_loved.webp"
TITLE = "나는 왜 사랑받아도 허전할까?"
META_DESC = (
    "연인은 잘해주는데 왜 마음은 비어 있을까? "
    "10가지 상황에서 채워지지 않는 마음의 정체와 채우는 법을 알려드립니다."
)

# scoring map A B C D
MAPPING = [
    [2, 3, 4, 5],
    [3, 4, 5, 1],
    [4, 1, 5, 2],
    [5, 2, 3, 1],
    [1, 3, 4, 2],
    [4, 5, 2, 3],
    [5, 1, 3, 4],
    [2, 4, 1, 5],
    [1, 5, 2, 3],
    [3, 2, 1, 4],
]
flat = Counter(x for row in MAPPING for x in row)
assert all(flat[i] == 8 for i in range(1, 6)), flat
print("scoring matrix ok", dict(flat))

QUESTIONS = [
    (
        "연인이 퇴근길에 깜짝 꽃다발을 들고 찾아왔다. 기쁜데 마음 한쪽이 이상하게 비어 있다. 그 허전함에 가장 가까운 생각은?",
        [
            "이런 걸 받을 만한 사람인가 싶어서 마음 편히 받아들여지지 않는다",
            "이렇게 좋을 때일수록 예전처럼 갑자기 끝날 것 같아 마음 한쪽이 경계한다",
            "고맙지만 내가 상상한 장면에 비하면 뭔가 조금 모자란 느낌이다",
            "좋긴 한데 사람이 곁에 있어도 마음 한쪽은 원래 비어 있는 느낌이다",
        ],
    ),
    (
        '연인이 "요즘 너 정말 소중해"라고 말해줬다. 그런데 몇 시간 뒤 다시 허전해진다. 나는?',
        [
            "이 말이 언제까지 이어질까, 예전에 좋은 말 뒤에 상처가 왔던 기억이 스친다",
            "말뿐 아니라 내가 바라는 만큼의 행동도 함께였으면 좋겠다는 생각이 든다",
            "따뜻한 말을 듣는 순간뿐, 곧 혼자 있는 익숙한 감각으로 돌아간다",
            "그 말을 한 번 더, 더 자주 듣고 싶어진다",
        ],
    ),
    (
        "연인과 하루 종일 같이 있었는데 헤어지고 집에 오니 마음이 텅 빈다. 나는?",
        [
            "오늘 하루가 내가 그리던 완벽한 데이트에는 못 미쳤다는 아쉬움이 남는다",
            '헤어지자마자 "오늘 좋았지?"를 확인하고 싶고 연락이 오길 기다린다',
            "같이 있어도 혼자 있어도 비슷한 외로움이라 이제는 익숙하다",
            "오늘 내가 별로였던 건 아닐까, 실망시켰을 것 같아 자꾸 되돌아본다",
        ],
    ),
    (
        '연인이 "사랑해"라고 말해줬다. 그 순간 나는?',
        [
            "고맙지만 마음속 빈자리는 그대로여서 왜 그런지 나도 모르겠다",
            "나의 어떤 점을 사랑한다는 건지 믿기 어렵고, 진짜 나를 알면 달라질 것 같다",
            "예전에도 이런 말을 믿었다가 아팠던 기억이 떠올라 완전히 믿지 못한다",
            "기쁘지만 하루에도 몇 번씩 더 듣고 싶고, 못 들으면 불안해진다",
        ],
    ),
    (
        "연인이 바빠서 오늘은 짧게만 연락할 수 있다고 했다. 이해는 되지만 허전하다. 나는?",
        [
            "바빠도 나를 생각하고 있다는 신호를 확실히 확인하고 싶어진다",
            "연락이 줄어들면 멀어지는 것 같아 예전의 이별이 떠오르며 마음이 움츠러든다",
            "연인이라면 바빠도 이 정도는 챙겨줘야 한다는 기준이 있어서 서운하다",
            "바쁜 사람에게 내가 짐이 되는 것 같아서 내 존재가 부담일까 싶다",
        ],
    ),
    (
        '주변에서 "너 연인 정말 잘 만났다, 부럽다"라고 한다. 속마음은?',
        [
            "겉으로는 그렇지만 내가 원하는 사랑의 모습은 아직 한참 더 남아 있다",
            "잘 만난 건 맞는데 나는 왜 계속 마음이 외로울까 싶다",
            "내가 이 사랑을 받을 자격이 되나 싶어 괜히 위축된다",
            "좋을수록 이 행복이 깨질 때를 미리 상상하며 마음의 준비를 한다",
        ],
    ),
    (
        "연인이 곁에서 잠들었는데 나는 잠이 안 온다. 그 시간에 드는 생각은?",
        [
            "바로 옆에 있는데도 이상하게 혼자인 것처럼 느껴진다",
            "나를 얼마나 사랑하는지 지금 깨워서라도 확인하고 싶어진다",
            "이 사람도 언젠가 예전처럼 떠날지 모른다는 생각이 스쳐 불안하다",
            "내가 꿈꾸던 연애는 이런 모습이 아니었는데 하는 비교가 올라온다",
        ],
    ),
    (
        "연인이 나를 위해 큰 이벤트를 준비해줬다. 감동받은 뒤에 남는 마음은?",
        [
            "이렇게까지 해줄 만큼 내가 가치 있는 사람일까 하는 의문이 든다",
            "더 큰 감동을 기대했던 마음 때문에 살짝 아쉬움이 남는다",
            "이벤트가 끝나면 이 사랑이 줄어들까 봐 또 확인받고 싶어진다",
            "행복한 순간인데 곧 끝나고 다시 혼자 남을 것 같은 느낌이 먼저 든다",
        ],
    ),
    (
        "연인과 다툰 뒤 화해했는데도 마음이 편하지 않다. 나는?",
        [
            "정말 괜찮은 거 맞냐고 몇 번이고 다시 확인해야 마음이 놓인다",
            "화해해도 마음 한쪽에는 늘 비슷한 외로움이 그대로 남는다",
            "내가 문제여서 다툰 것 같고, 이런 나를 계속 사랑해 줄까 싶다",
            "다툼이 이별로 이어졌던 과거가 떠올라서 화해 뒤에도 마음이 긴장되어 있다",
        ],
    ),
    (
        '친구가 "연인이 이렇게 잘해주는데 뭐가 허전해?"라고 묻는다. 가장 가까운 답은?',
        [
            "예전에 크게 상처받은 기억 때문에 지금의 사랑을 온전히 믿기 어렵다",
            "내가 이 사랑을 받을 만한 사람이라는 확신이 없다",
            "사랑받고 있다는 확인이 계속 필요하고 한 번으로는 부족하다",
            "내가 바라는 사랑의 크기가 있는데 그만큼이 채워지지 않는다",
        ],
    ),
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "💧",
        "typeName": "확인 갈증형",
        "title": "사랑을 계속 확인해야 채워지는 사람, 확인 갈증형 💧",
        "realReason": "사랑받고 있다는 확인이 금방 증발해서 계속 새로운 확인이 필요하다",
        "shortDescription": "당신은 사랑을 못 받고 있는 게 아닙니다. 받은 사랑이 오래 남지 않아서 자꾸 목이 마를 뿐입니다.",
        "body": '"사랑해"라는 말을 들어도, 선물을 받아도 안심은 잠깐입니다. 시간이 지나면 다시 허전해져서 또 확인하고 싶어집니다. 상대가 부족해서가 아니라 확인으로 채워지는 안심의 유통기한이 짧아서 생기는 패턴입니다.',
        "unfold": "사랑의 양이 부족한 게 아니라, 확인으로만 마음을 채우다 보니 밖에서 들어오는 확인이 끊기면 바로 비어버리는 구조",
        "keywords": "확인, 사랑해 한 번 더, 안심의 유통기한, 갈증, 연락 기다림",
        "reasonDetail": "사랑 표현이 한동안 없거나 연락이 뜸해질 때, 좋은 말을 들은 직후의 공백",
        "strengths": "관계에 진심이고 애정 표현을 아끼지 않으며 상대의 사소한 변화도 놓치지 않는 섬세함",
        "frequentSaying": '"나 좋아하는 거 맞지?"',
        "changeTips": "\n".join(
            [
                '확인하고 싶을 때 "지금 필요한 건 확인일까, 안정일까"를 먼저 자문하기',
                '돌려 묻는 대신 "오늘은 안심시켜 줄래?"라고 원하는 것을 직접 요청하기',
                "상대의 확인 없이도 나를 채우는 활동(운동·취미·친구)을 일주일에 하나씩 늘리기",
            ]
        ),
        "counselingNote": "확인받아도 안심이 거의 이어지지 않고 불안이 일상에 영향을 줄 정도라면, 혼자 해결하려 하지 말고 심리상담 전문가와 이야기해 보세요. 불안의 뿌리를 안전하게 살펴볼 수 있습니다",
        "oneLiner": "확인은 목을 축여주는 한 모금입니다. 내 안에도 샘 하나를 만들어 두면 갈증이 훨씬 덜해집니다",
        "shareLine": "나는 왜 사랑받아도 허전할까? 결과: 확인 갈증형 💧 받은 사랑이 금방 증발해서 계속 확인이 필요하대... 나 확인 갈증형 나왔어ㅋㅋ 너는 뭐 나왔어?",
    },
    {
        "type": "Type2",
        "emoji": "🪞",
        "typeName": "자기 가치 의심형",
        "title": "받을 자격이 없다고 느끼는 사람, 자기 가치 의심형 🪞",
        "realReason": "사랑을 받아도 '내가 이 사랑을 받을 만한 사람인가'라는 의심이 마음을 비워둔다",
        "shortDescription": "당신은 사랑이 없어서 허전한 게 아닙니다. 받은 사랑이 내 것처럼 느껴지지 않아서 허전한 것입니다.",
        "body": "칭찬을 받아도, 선물을 받아도, 사랑한다는 말을 들어도 마음에 닿기 전에 의심이 먼저 올라옵니다. 진짜 모습을 알면 상대가 실망할 것 같고, 이 사랑이 과분하게 느껴집니다. 사랑이 문 앞까지 와도 마음의 문 안으로 들어오기 어려운 타입입니다.",
        "unfold": "상대의 사랑 크기가 아니라 내가 나에게 매긴 점수가 사랑이 들어오는 입구를 좁히고 있음",
        "keywords": "받을 자격, 과분함, 들킬 것 같음, 칭찬이 불편함, 자기 의심",
        "reasonDetail": "칭찬이나 큰 사랑 표현을 받는 순간, 상대가 나를 높게 평가할 때",
        "strengths": "겸손하고 상대를 진심으로 배려하며 받은 만큼 돌려주려는 성실한 마음",
        "frequentSaying": '"나 같은 사람 어디가 좋아서?"',
        "changeTips": "\n".join(
            [
                "상대가 해준 좋은 말을 그대로 메모해 두고, 의심하지 않고 사실로 다시 읽어보기",
                '칭찬을 받으면 "아니야"로 밀어내는 대신 "고마워" 한마디로 일단 받아보기',
                "연애 밖에서 내가 이룬 것과 인정받은 경험을 적어 자기 신뢰의 근거 쌓기",
            ]
        ),
        "counselingNote": "자신이 가치 없다는 생각이 연애뿐 아니라 일상 전반에서 자주, 강하게 이어진다면 심리상담 전문가의 도움을 받아보세요. 자기 가치감은 상담에서 충분히 회복해 갈 수 있는 영역입니다",
        "oneLiner": "사랑이 들어올 자리는 이미 있습니다. 받아도 괜찮은 사람이라는 걸 한 번씩 확인해 보세요",
        "shareLine": "나는 왜 사랑받아도 허전할까? 결과: 자기 가치 의심형 🪞 받아도 내 것 같지 않아서 허전한 거래... 나 자기 가치 의심형 나왔어ㅋㅋ 뜨끔해서 조용해짐 너는?",
    },
    {
        "type": "Type3",
        "emoji": "🕰️",
        "typeName": "과거 상처형",
        "title": "예전의 상처가 지금의 사랑을 막는 사람, 과거 상처형 🕰️",
        "realReason": "지금의 사랑 위에 예전 상처의 그림자가 덮여 있다",
        "shortDescription": "당신은 지금의 연인을 못 믿는 게 아닙니다. 예전에 아팠던 기억이 지금의 행복에 경고를 보내고 있습니다.",
        "body": "좋은 순간이 올수록 '이게 언제 깨질까'를 먼저 생각하고, 사랑한다는 말에도 마음 한쪽이 경계합니다. 예전의 이별이나 상처가 아직 정리되지 않은 채 남아 있어서, 행복을 온전히 누리기 전에 방어가 먼저 작동합니다.",
        "unfold": "지금의 상대에 대한 의심이 아니라 과거의 경험이 현재의 사랑을 위험 신호로 읽게 만듦",
        "keywords": "예전 기억, 경계, 행복이 불안, 미리 대비, 그림자",
        "reasonDetail": "관계가 좋아지고 깊어지는 순간, 예전에 아팠던 상황과 비슷한 장면이 나올 때",
        "strengths": "신중하고 쉽게 휘둘리지 않으며, 마음을 열었을 때는 깊고 단단한 연애를 함",
        "frequentSaying": '"너무 좋으면 오히려 불안해"',
        "changeTips": "\n".join(
            [
                "지금의 연인이 한 행동 중 '확인된 사실'과 '예전 기억 때문에 생긴 걱정'을 두 줄로 나눠 적어보기",
                '불안이 올라올 때 "지금 나를 아프게 한 일이 있었나?"라고 사실부터 점검하기',
                "마음의 속도를 천천히 정하고, 작은 속마음 하나씩 꺼내며 신뢰를 확인해 가기",
            ]
        ),
        "counselingNote": "과거의 상처가 떠올라 지금의 일상이나 관계에서 반복적으로 힘들다면, 혼자 감당하지 말고 심리상담 전문가와 함께 정리해 보세요. 오래된 상처는 안전한 환경에서 이야기할 때 가장 빠르게 가벼워집니다",
        "oneLiner": "그림자가 있다는 건 한때 빛이 있었다는 뜻입니다. 지금의 빛을 천천히 믿어봐도 괜찮습니다",
        "shareLine": "나는 왜 사랑받아도 허전할까? 결과: 과거 상처형 🕰️ 예전 상처 그림자가 지금 사랑 위에 덮여 있는 거래... 나 과거 상처형 나왔어ㅋㅋ 인정ㅠ 너는 뭐 나왔어?",
    },
    {
        "type": "Type4",
        "emoji": "🎨",
        "typeName": "기대 과잉형",
        "title": "내 안의 그림이 너무 커서 비는 사람, 기대 과잉형 🎨",
        "realReason": "내가 그리는 사랑의 크기와 현실의 사랑 사이에 간격이 있다",
        "shortDescription": "당신은 사랑을 못 받는 게 아닙니다. 마음속에 그려둔 사랑의 그림이 커서 현실이 그 안을 다 채우지 못하고 있습니다.",
        "body": "연인이 잘해줘도 '내가 상상한 장면에는 못 미친다'는 아쉬움이 남습니다. 영화 같은 순간, 드라마 같은 대사, 완벽한 이벤트처럼 머릿속에 그려둔 기준이 높을수록 현실의 사랑은 늘 조금 모자라 보입니다.",
        "unfold": "사랑이 부족한 게 아니라, 말하지 않은 기대가 쌓이면서 현실과의 간격이 허전함으로 느껴짐",
        "keywords": "그려둔 사랑, 비교, 조금 모자람, 완벽한 장면, 기준표",
        "reasonDetail": "기념일·이벤트·표현처럼 내가 기대한 장면이 기대와 다르게 흘러갈 때",
        "strengths": "사랑에 대한 로망과 기준이 분명하고 관계를 특별하게 만들고 싶은 마음이 큼",
        "frequentSaying": '"이 정도는 해줘야 하는 거 아냐?"',
        "changeTips": "\n".join(
            [
                "내가 바라는 사랑의 모습을 '꼭 필요한 것 3가지'와 '있으면 좋은 것'으로 나눠 적어보기",
                '기대하는 장면이 있다면 "나는 이런 걸 해주면 정말 좋아"라고 상대에게 미리 말하기',
                "허전해질 때 '오늘 연인이 해준 것' 3가지를 먼저 적고 나서 아쉬운 점을 보기",
            ]
        ),
        "counselingNote": "기대와 현실의 간격 때문에 연애가 반복해서 힘들어진다면, 그 기대가 어디에서 비롯됐는지 심리상담 전문가와 함께 살펴보는 것도 도움이 됩니다",
        "oneLiner": "그림이 큰 건 사랑을 깊이 원한다는 뜻입니다. 그 그림을 상대에게 보여줘야 함께 채워갈 수 있습니다",
        "shareLine": "나는 왜 사랑받아도 허전할까? 결과: 기대 과잉형 🎨 내가 그린 사랑 그림이 커서 현실이 모자란 거래... 나 기대 과잉형 나왔어ㅋㅋ 찔린다 너는 어떤 유형이야?",
    },
    {
        "type": "Type5",
        "emoji": "🌫️",
        "typeName": "외로움 습관형",
        "title": "외로움이 기본값이 된 사람, 외로움 습관형 🌫️",
        "realReason": "오래된 외로움이 몸에 배어 사랑받는 순간에도 비어 있는 감각으로 돌아간다",
        "shortDescription": "당신은 연인의 사랑이 부족해서 허전한 게 아닙니다. 외로움이 오래 머물러서 가장 익숙한 느낌이 되어 있습니다.",
        "body": "누군가 곁에 있어도, 좋은 말을 들어도 마음 한쪽이 먼저 비어 있는 상태로 돌아갑니다. 이유를 찾아봐도 딱히 원인이 보이지 않아서 스스로도 이상하게 느껴집니다. 외로움이 사건 때문이 아니라 오래된 배경음처럼 깔려 있는 타입입니다.",
        "unfold": "연인과의 관계 문제가 아니라, 오래 쌓인 외로움의 감각이 새로운 사랑이 들어와도 쉽게 사라지지 않는 상태",
        "keywords": "배경 외로움, 곁에 있어도 혼자, 이유를 모르겠음, 익숙한 공허, 기본값",
        "reasonDetail": "행복한 순간이 끝났을 때, 연인과 헤어져 혼자 남은 시간, 조용한 밤",
        "strengths": "혼자 있는 시간을 잘 견디고 감정을 깊이 느끼며 관계의 의미를 진지하게 생각하는 힘",
        "frequentSaying": '"이유는 모르겠는데 그냥 허전해"',
        "changeTips": "\n".join(
            [
                "허전함이 올라오는 시간대(밤·헤어진 직후 등)를 기록해 패턴을 파악하기",
                "연인 외에도 친구·가족·모임 등 마음을 나눌 연결을 한 곳 더 만들기",
                '허전함을 없애려 하기보다 "지금 허전하구나" 하고 이름을 붙이며 지켜보기',
            ]
        ),
        "counselingNote": "이유 없이 허전하고 외로운 느낌이 오래 이어지거나 일상의 의욕과 수면, 식사에 영향을 준다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터에 꼭 이야기해 보세요. 이런 감정은 도움을 받으면 훨씬 가벼워질 수 있습니다",
        "oneLiner": "외로움은 당신이 약해서 생긴 게 아닙니다. 오래 머물렀을 뿐이고, 천천히 떠나보낼 수 있습니다",
        "shareLine": "나는 왜 사랑받아도 허전할까? 결과: 외로움 습관형 🌫️ 외로움이 기본값이 돼서 곁에 있어도 비는 거래... 나 외로움 습관형 나왔어ㅋㅋ 소름 너는 뭐 나왔어?",
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
    lines.append("export type Phase3EmptyEvenLovedLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';")
    lines.append("type LocaleText = Record<Phase3EmptyEvenLovedLocaleKey, string>;")
    lines.append("")
    lines.append("function L(ko: string): LocaleText {")
    lines.append("  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3EmptyEvenLovedQuestion {")
    lines.append("  id: number;")
    lines.append("  question: LocaleText;")
    lines.append("  options: { text: LocaleText; score: number }[];")
    lines.append("}")
    lines.append("")
    lines.append("export interface Phase3EmptyEvenLovedResult {")
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
    lines.append("  counselingNote: LocaleText;")
    lines.append("  oneLiner: LocaleText;")
    lines.append("  shareLine: LocaleText;")
    lines.append("}")
    lines.append("")
    lines.append("export const PHASE3_EMPTY_EVEN_LOVED_TYPES = [")
    lines.append("  'Type1',")
    lines.append("  'Type2',")
    lines.append("  'Type3',")
    lines.append("  'Type4',")
    lines.append("  'Type5',")
    lines.append("] as const;")
    lines.append("")
    lines.append("/** answers: 원래 문항 순서의 선택 유형 번호(1~5) 배열 */")
    lines.append("export function calculatePhase3EmptyEvenLovedScores(answers: number[]): Record<string, number> {")
    lines.append("  const scores: Record<string, number> = {};")
    lines.append("  for (const type of PHASE3_EMPTY_EVEN_LOVED_TYPES) scores[type] = 0;")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if (key in scores) scores[key] += 1;")
    lines.append("  }")
    lines.append("  return scores;")
    lines.append("}")
    lines.append("")
    lines.append("/** 최고 득점 유형. 동점이면 Q1부터 순서대로 동점 그룹에 처음 포함되는 응답 유형으로 확정 */")
    lines.append("export function calculatePhase3EmptyEvenLovedResult(answers: number[]): string {")
    lines.append("  const scores = calculatePhase3EmptyEvenLovedScores(answers);")
    lines.append("  const max = Math.max(...Object.values(scores));")
    lines.append("  const tied = PHASE3_EMPTY_EVEN_LOVED_TYPES.filter((t) => scores[t] === max);")
    lines.append("  if (tied.length === 1) return tied[0];")
    lines.append("  for (const a of answers) {")
    lines.append("    const key = `Type${a}`;")
    lines.append("    if ((tied as readonly string[]).includes(key)) return key;")
    lines.append("  }")
    lines.append("  return tied[0];")
    lines.append("}")
    lines.append("")
    lines.append("/** 2순위 유형(함께 있는 허전함). 1·2순위 모두 동점이 아닐 때만 반환 */")
    lines.append("export function getPhase3EmptyEvenLovedHiddenType(answers: number[]): string | null {")
    lines.append("  const scores = calculatePhase3EmptyEvenLovedScores(answers);")
    lines.append("  const sorted = [...PHASE3_EMPTY_EVEN_LOVED_TYPES].sort((a, b) => scores[b] - scores[a]);")
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
    lines.append("export const phase3EmptyEvenLovedQuestions: Phase3EmptyEvenLovedQuestion[] = RAW_QUESTIONS.map(")
    lines.append("  (item, idx) => ({")
    lines.append("    id: idx + 1,")
    lines.append("    question: L(item.q),")
    lines.append("    options: item.opts.map(([text, score]) => ({ text: L(text), score })),")
    lines.append("  }),")
    lines.append(");")
    lines.append("")
    lines.append("export const phase3EmptyEvenLovedResults: Phase3EmptyEvenLovedResult[] = [")
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
        lines.append(f"    counselingNote: L({ts_str(r['counselingNote'])}),")
        lines.append(f"    oneLiner: L({ts_str(r['oneLiner'])}),")
        lines.append(f"    shareLine: L({ts_str(r['shareLine'])}),")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("export const PHASE3_EMPTY_EVEN_LOVED_META = {")
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
    lines.append("    ko: ['연애심리'],")
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


(root / "lib" / "phase3EmptyEvenLovedData.ts").write_text(build_data_ts(), encoding="utf-8", newline="\n")
print("data ok")

START_SHARE = "나는 왜 사랑받아도 허전할까? 💧 연인은 잘해주는데 왜 마음은 비어 있지? 너도 해봐!"

messages = {
    NS: {
        "startMessage": {
            "line1": "연인은 잘해주는데, 왜 마음 한쪽은 계속 비어 있을까?",
            "line2": "사랑한다는 말도 듣고, 챙겨주는 마음도 느끼는데 문득 허전해질 때가 있습니다. 상대가 부족해서도, 내가 배부른 소리를 해서도 아닙니다. 그 빈자리는 사람마다 서로 다른 이유에서 생깁니다.",
            "line3": "더 확인받고 싶어서일 수도, 사랑받을 자격이 없다고 느껴서일 수도, 예전의 상처가 아직 남아서일 수도, 내가 그리는 사랑의 크기가 커서일 수도, 오래된 외로움이 습관이 되어서일 수도 있습니다. 정체를 알면 채우는 방법도 달라집니다.",
            "line4": "10가지 상황에서 나의 반응을 모아 채워지지 않는 마음의 정체와 나에게 맞는 채우는 법을 알려드립니다.",
            "line5": "",
        },
        "ui": {
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "startTest": "허전함의 정체 알아보기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "similarTests": "유사한 다른 테스트",
            "realReason": "허전함의 정체",
            "keywords": "핵심 키워드",
            "scoreTitle": "유형별 점수",
            "scoreUnit": "점",
            "hiddenReason": "함께 있는 허전함",
            "strengths": "이 유형의 강점",
            "reasonDetail": "나의 허전함 버튼",
            "frequentSaying": "이 유형이 자주 하는 말",
            "changeTips": "채우는 법",
            "counseling": "전문가 상담 안내",
            "disclaimer": "이 테스트는 의학적 진단이 아닌 자기 이해용입니다. 결과가 걱정되거나 일상·관계에 큰 어려움이 있다면 전문가의 도움을 받아보세요.",
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
tags_obj = {k: ["연애심리"] for k in title_obj}


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

# Client from fairytale
src = (root / "components" / "Phase3FairytaleHeroTestClient.tsx").read_text(encoding="utf-8")
out = src
for a, b in [
    ("Phase3FairytaleHeroQuestion", "Phase3EmptyEvenLovedQuestion"),
    ("Phase3FairytaleHeroResult", "Phase3EmptyEvenLovedResult"),
    ("PHASE3_FAIRYTALE_HERO_TYPES", "PHASE3_EMPTY_EVEN_LOVED_TYPES"),
    ("calculatePhase3FairytaleHeroResult", "calculatePhase3EmptyEvenLovedResult"),
    ("calculatePhase3FairytaleHeroScores", "calculatePhase3EmptyEvenLovedScores"),
    ("getPhase3FairytaleHeroHiddenType", "getPhase3EmptyEvenLovedHiddenType"),
    ("phase3FairytaleHeroData", "phase3EmptyEvenLovedData"),
    ("phase3FairytaleHeroTest", NS),
    ("Phase3FairytaleHeroTestClient", "Phase3EmptyEvenLovedTestClient"),
    ("Phase3FairytaleHero", "Phase3EmptyEvenLoved"),
]:
    out = out.replace(a, b)

# start button: use localized ui.startTest
out = out.replace(
    "{tGlobal('mbti.startTest')}",
    "{t('ui.startTest')}",
)

# keep description newlines (body + unfold)
out = out.replace(
    '<p className="text-base text-gray-600 leading-relaxed">{resultDescription}</p>',
    '<p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">{resultDescription}</p>',
)

# No counseling section / no disclaimer on result screen (kept out of UI by request)

(root / "components" / "Phase3EmptyEvenLovedTestClient.tsx").write_text(out, encoding="utf-8", newline="\n")
print("client ok")

# Registry
reg = (root / "lib" / "testRuntimeRegistry.ts").read_text(encoding="utf-8")
entry = f"""
  '{SLUG}': {{
    slug: '{SLUG}',
    format: 'scenario_4',
    ssr: true,
    loadMeta: async () => {{
      const {{ PHASE3_EMPTY_EVEN_LOVED_META }} = await import('./phase3EmptyEvenLovedData');
      return {{
        title: PHASE3_EMPTY_EVEN_LOVED_META.title,
        description: PHASE3_EMPTY_EVEN_LOVED_META.description,
        tags: PHASE3_EMPTY_EVEN_LOVED_META.tags,
        thumbnail: '{THUMB}',
        type: 'psychology',
        category: 'personality',
        format: 'scenario_4',
      }};
    }},
    loadBalancePayload: async () => {{
      const mod = await import('./phase3EmptyEvenLovedData');
      return {{
        questions: mod.phase3EmptyEvenLovedQuestions,
        results: mod.phase3EmptyEvenLovedResults,
        meta: {{
          title: mod.PHASE3_EMPTY_EVEN_LOVED_META.title,
          description: mod.PHASE3_EMPTY_EVEN_LOVED_META.description,
          tags: mod.PHASE3_EMPTY_EVEN_LOVED_META.tags,
          thumbnail: '{THUMB}',
          type: 'psychology',
          category: 'personality',
          format: 'scenario_4',
        }},
        messagesNamespace: '{NS}',
        messagesFileSlug: '{SLUG}',
      }};
    }},
    loadClient: () => import('@/components/Phase3EmptyEvenLovedTestClient'),
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
        "'phase3-fairytale-hero': 'scenario_4',",
        "'phase3-fairytale-hero': 'scenario_4',\n  'phase3-empty-even-loved': 'scenario_4',",
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
        "  'phase3-fairytale-hero': {",
        loader + "  'phase3-fairytale-hero': {",
    )
    (root / "lib" / "testMessages.ts").write_text(msg, encoding="utf-8", newline="\n")
    print("testMessages ok")
else:
    print("testMessages already has slug")

# verify client
client = (root / "components" / "Phase3EmptyEvenLovedTestClient.tsx").read_text(encoding="utf-8")
assert "phase3EmptyEvenLovedData" in client
assert NS in client
assert "Fairytale" not in client
assert "fairytale" not in client
assert "ui.counseling" not in client
assert "ui.disclaimer" not in client
assert "export default function Phase3EmptyEvenLovedTestClient" in client
assert "PHASE3_EMPTY_EVEN_LOVED_TYPES" in client
print("client rename ok")

# verify data scoring counts from RAW opts
data = (root / "lib" / "phase3EmptyEvenLovedData.ts").read_text(encoding="utf-8")
opt_scores = [int(x) for x in re.findall(r"\], (\d+)\]", data)]
# pattern in generated file is: ["text", N]
opt_scores = [int(x) for x in re.findall(r'", (\d+)\]', data)]
c = Counter(opt_scores)
assert all(c[i] == 8 for i in range(1, 6)), c
assert "counselingNote" in data
assert "Type6" not in data
print("data scoring counts ok", dict(c))
print("DONE")
