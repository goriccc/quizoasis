# -*- coding: utf-8 -*-
"""Generate lib/phase3WebtoonProtagonistData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "어느 날 갑자기 특별한 능력이 생겼다. 나는?",
        "opts": [
            "일단 감추고 조용히 살던 대로 산다. 튀고 싶지 않다",
            "가까운 사람만 알려준다. 이 능력으로 소중한 사람들을 지키고 싶다",
            "이 능력으로 무언가 이룰 수 있을 것 같다. 가능성을 테스트해본다",
            "이미 능력을 어떻게 쓸지 계획이 섰다. 바로 실행한다",
        ],
    },
    {
        "q": "처음 만나는 자리에서 나는 어떤 인상을 남기는가?",
        "opts": [
            "기억에 잘 안 남는 편이다. 눈에 띄지 않고 평범하게 섞여 있다",
            "따뜻하고 친근한 인상. 대화가 편하다는 말을 자주 듣는다",
            "처음엔 별로 안 특별해 보이는데 알아갈수록 의외의 면이 드러난다",
            "등장하는 순간 분위기가 바뀐다. 존재감이 강하다",
        ],
    },
    {
        "q": "위기 상황이 갑자기 닥쳤다. 나는?",
        "opts": [
            "일단 당황하고 어떻게 해야 할지 모른다. 그러다 어떻게든 해결하긴 한다",
            "주변 사람들 걱정이 먼저다. 다 같이 무사해야 한다",
            "머릿속으로 빠르게 상황을 분석하고 가능한 선택지를 정리한다",
            "이미 몸이 먼저 움직이고 있다. 생각보다 실행이 빠르다",
        ],
    },
    {
        "q": "주변 사람들이 나를 어떻게 보는가?",
        "opts": [
            "평범하고 무난하다. 특별히 튀는 것도 없고 문제도 없다",
            "따뜻하다. 곁에 있으면 왠지 모르게 위로가 된다는 말을 듣는다",
            "처음엔 잘 모르는데 알고 나면 \"이런 면도 있었어?\" 하는 반응이 나온다",
            "강하다거나 독특하다는 말을 자주 듣는다. 좋은 의미든 나쁜 의미든",
        ],
    },
    {
        "q": "나의 가장 강한 동기는 무엇인가?",
        "opts": [
            "지금처럼 평화롭게 사는 것. 특별한 것보다 안정이 좋다",
            "소중한 사람들이 행복한 것. 나보다 주변이 먼저다",
            "내가 하고 싶은 걸 결국 이루는 것. 속도가 느려도 포기하지 않는다",
            "최고가 되는 것. 또는 누구도 막을 수 없는 무언가를 이루는 것",
        ],
    },
    {
        "q": "연애 상황에서 나는?",
        "opts": [
            "티 안 내고 혼자 좋아하는 타입. 상대방이 눈치 못 채는 경우도 많다",
            "감정이 풍부하고 표현도 많은 편. 좋아하면 온 마음이 거기에 있다",
            "겉으로는 쿨한 척하지만 실은 꽤 진심이다. 아는 사람만 안다",
            "좋아하면 확실하다. 밀당보다 직진이고 상황을 내가 주도하는 편이다",
        ],
    },
    {
        "q": "강력한 라이벌 또는 적이 나타났다. 나는?",
        "opts": [
            "일단 피하고 본다. 정면 대결보다는 상황을 모면하는 방법을 찾는다",
            "무조건 이기려 하기보다 왜 적이 됐는지 이해하고 싶다",
            "분석한다. 어디가 약점인지, 어떻게 이길 수 있는지를 생각한다",
            "오히려 반긴다. 강한 상대가 나타나야 내가 더 재밌어진다",
        ],
    },
    {
        "q": "나의 대화 스타일은?",
        "opts": [
            "말이 많지 않다. 필요한 말만 하고 조용히 있는 편이다",
            "감정을 솔직하게 표현하는 편. 공감대 형성이 자연스럽다",
            "처음엔 과묵하지만 친해지면 의외로 재밌거나 날카롭다",
            "말 한마디에 무게가 있다. 또는 개성이 너무 강해서 대화가 기억에 남는다",
        ],
    },
    {
        "q": "내가 가장 빛나는 순간은?",
        "opts": [
            "딱히 빛나는 순간이 없다. 그냥 있는 것 같다. 그래도 괜찮다",
            "소중한 사람을 위해 무언가를 해줄 수 있을 때",
            "오랫동안 준비해온 것이 드디어 결과로 나타날 때",
            "모두가 불가능하다고 했는데 내가 해냈을 때",
        ],
    },
    {
        "q": "팀·그룹에서 나의 자연스러운 역할은?",
        "opts": [
            "조용히 맡은 것 잘 하는 사람. 눈에 안 띄지만 없으면 뭔가 빠진 느낌",
            "분위기 메이커 또는 감정 중심. 팀의 감성과 유대를 담당한다",
            "전략 담당. 방향을 잡거나 문제를 분석하는 역할을 자연스럽게 맡게 된다",
            "리더 또는 에이스. 내가 나서면 분위기가 달라진다",
        ],
    },
    {
        "q": "내 안에 숨겨진 면이 있다면?",
        "opts": [
            "사실 별로 숨겨진 게 없다. 보이는 것이 거의 전부다",
            "표면보다 훨씬 깊은 감정과 진심이 있다. 다 꺼내 보여주기가 어려울 뿐이다",
            "아무도 예상 못 할 능력이나 반전 매력이 있다. 아직 드러나지 않았을 뿐이다",
            "지금 보여주는 것도 일부다. 진짜 실력·진짜 모습은 훨씬 더 강하거나 독특하다",
        ],
    },
    {
        "q": "내 인생의 서사를 한 마디로 표현한다면?",
        "opts": [
            "평범하지만 나름 괜찮은 하루하루",
            "소중한 것들을 지키며 살아가는 이야기",
            "느려도 결국 해내고야 마는 성장의 기록",
            "아무도 막을 수 없는 나만의 이야기",
        ],
    },
]

RESULTS = [
    {
        "type": "Type1", "emoji": "📖",
        "title": "공감 100% 소시민 주인공, 일상 공감형",
        "short": "당신이 주인공인 웹툰은 화려하지 않지만 가장 많은 독자가 '이거 나 얘기임'이라고 말합니다.",
        "desc": "특별한 능력도 없고 화려한 배경도 없지만 일상의 작은 순간들을 섬세하게 포착하는 타입입니다. 갑자기 이세계에 떨어져도 먼저 집에 돌아갈 생각을 하는 사람입니다. 독자들이 나와 함께 숨을 쉬는 것 같은 느낌을 받는 주인공입니다.",
        "protagonistType": "일상 공감형 📖",
        "appearingGenre": "일상·힐링·성장·직장물·학원 일상물",
        "narrativePattern": "평범한 주인공이 소소한 관계와 사건들 속에서 조금씩 변해가는 이야기",
        "strength": "감정이입 최강. 독자가 가장 쉽게 자신을 대입하는 타입",
        "charmPoint": "화려하지 않지만 진짜인 것들. 일상의 결정적 순간",
        "shiningScene": "오랫동안 혼자 감당해오던 감정을 마침내 꺼내는 장면",
        "recommendedGenre": "일상 에세이툰·직장인 공감물·청춘 성장물",
        "oneLiner": "당신의 이야기는 화려하지 않아도 읽다 보면 멈출 수가 없는 그런 웹툰입니다",
        "certification": "",
        "share": "내 웹툰 주인공 유형: 일상 공감형 📖 화려하지 않은데 읽다 보면 멈출 수 없는 웹툰 주인공이래... 공감 100% 맞음 → 너는 어떤 주인공이야? 웹툰 장르도 추천해줌",
    },
    {
        "type": "Type2", "emoji": "💗",
        "title": "독자의 심장을 저격하는, 감성 로맨스 주인공",
        "short": "당신이 주인공인 웹툰에서는 대사 하나, 표정 하나에 독자들이 멈춥니다.",
        "desc": "사람과의 관계에서 가장 빛나고 감정을 세밀하게 표현하며 상대방을 위해 자신을 던질 수 있는 타입입니다. 로맨스 장르의 주인공이 되면 독자들이 상대 캐릭터를 질투할 만큼 매력적인 케미가 나옵니다. 팬들이 가장 많이 울게 만드는 타입이기도 합니다.",
        "protagonistType": "감성 로맨스형 💗",
        "appearingGenre": "로맨스·로맨스 판타지·BL·GL·학원 로맨스",
        "narrativePattern": "관계의 변화와 감정의 깊어짐이 중심이 되는 이야기",
        "strength": "감정 묘사가 독보적. 독자가 대리 감정을 가장 강하게 느끼는 타입",
        "charmPoint": "소중한 사람을 위해 모든 걸 내던지는 순간",
        "shiningScene": "마음을 숨기다 결국 고백하는 장면. 독자들이 여러 번 다시 읽는 장면",
        "recommendedGenre": "로맨스·로판·감성 드라마·순정물",
        "oneLiner": "당신의 이야기는 읽다 보면 캡처가 멈추지 않는 그런 웹툰입니다",
        "certification": "",
        "share": "내 웹툰 주인공 유형: 감성 로맨스형 💗 대사 하나에 독자들이 멈추는 주인공이래... 캡처 멈출 수 없는 웹툰 맞음 ㅋㅋ → 너는 어떤 주인공이야?",
    },
    {
        "type": "Type3", "emoji": "🔥",
        "title": "느리지만 결국 해내는, 노력 성장형 주인공",
        "short": "당신이 주인공인 웹툰은 독자들이 '이번 화도 응원하고 싶다'는 말을 하게 만듭니다.",
        "desc": "타고난 재능보다 꾸준함으로 성장하는 타입입니다. 초반에는 주변에 비해 부족해 보이지만 포기하지 않는 모습이 독자들의 응원을 끌어냅니다. 강해지는 과정 자체가 이야기의 핵심이고, 중반 이후 성장한 모습이 나오는 장면에서 독자들이 가장 뜨겁게 반응하는 주인공입니다.",
        "protagonistType": "노력 성장형 🔥",
        "appearingGenre": "스포츠물·무협·이세계 성장물·직업 성장물",
        "narrativePattern": "바닥에서 시작해 꾸준한 노력으로 정상을 향해 올라가는 이야기",
        "strength": "독자가 가장 강하게 응원하게 만드는 타입. 성장 서사의 정석",
        "charmPoint": "한계를 넘는 순간들. 작은 성장 하나에도 독자들이 환호함",
        "shiningScene": "아무도 믿지 않았던 시절을 지나 드디어 실력을 증명하는 장면",
        "recommendedGenre": "스포츠물·성장 판타지·무협·직업물",
        "oneLiner": "당신의 이야기는 초반부터 보던 독자가 가장 오래 남는 그런 웹툰입니다",
        "certification": "",
        "share": "내 웹툰 주인공 유형: 노력 성장형 🔥 초반부터 보던 독자가 끝까지 응원하는 주인공이래... 성장 서사 공감 → 너는 어떤 웹툰 주인공이야?",
    },
    {
        "type": "Type4", "emoji": "⚡",
        "title": "겉은 평범, 실은 먼치킨, 숨겨진 반전 주인공",
        "short": "당신이 주인공인 웹툰에서 독자들은 '아직 진짜를 안 보여준 것'임을 알고 기다립니다.",
        "desc": "표면적으로는 특별하지 않아 보이지만 위기 상황이나 결정적 순간에 숨겨진 능력과 반전 매력이 폭발하는 타입입니다. 독자들이 가장 열광하는 서사 패턴 중 하나입니다. 주변 캐릭터들이 처음엔 무시했다가 나중에 당황하는 장면에서 독자들이 가장 쾌감을 느낍니다.",
        "protagonistType": "숨겨진 반전 먼치킨형 ⚡",
        "appearingGenre": "이세계물·헌터물·판타지·회귀물·빙의물",
        "narrativePattern": "처음엔 약하거나 평범해 보이다가 진짜 실력이 하나씩 드러나는 이야기",
        "strength": "독자들이 가장 기다리게 만드는 타입. 반전 공개 장면의 쾌감이 최고",
        "charmPoint": "아무것도 모르는 빌런이 주인공을 무시하다가 바닥을 보는 순간",
        "shiningScene": "\"제가 좀 강하거든요\"급 반전이 드러나는 장면",
        "recommendedGenre": "이세계·헌터물·회귀·숨겨진 능력 판타지",
        "oneLiner": "당신의 이야기는 초반부를 참고 읽으면 반전에서 멈출 수 없는 그런 웹툰입니다",
        "certification": "",
        "share": "내 웹툰 주인공 유형: 숨겨진 반전 먼치킨형 ⚡ 겉은 평범, 실은 먼치킨이래... 진짜를 안 보여준 것 맞음 ㅋㅋ → 너는 어떤 주인공이야? 웹툰 장르도 나옴",
    },
    {
        "type": "Type5", "emoji": "👑",
        "title": "처음부터 압도적인, 카리스마 먼치킨 주인공",
        "short": "당신이 주인공인 웹툰에서 독자들은 주인공이 얼마나 더 강한지를 보러 매화를 기다립니다.",
        "desc": "처음부터 뛰어나고 강하며 주변을 압도하는 타입입니다. 먼치킨 판타지의 전형적인 주인공으로 독자들이 주인공의 능력치와 카리스마에 열광합니다. 약점이 없어 보이지만 그 이면에 아무도 모르는 고독이나 목표가 있는 서사가 더해지면 독자들이 완전히 빠져듭니다.",
        "protagonistType": "카리스마 먼치킨형 👑",
        "appearingGenre": "먼치킨 판타지·헌터물·재벌물·권력물·하렘물",
        "narrativePattern": "처음부터 강한 주인공이 더 강해지거나 세계를 재편하는 이야기",
        "strength": "독자가 주인공과 함께 세계를 내려다보는 쾌감을 느끼는 타입",
        "charmPoint": "압도적인 장면. 강자를 상대로 한 치도 흔들리지 않는 모습",
        "shiningScene": "모든 적을 한꺼번에 상대하면서 \"이 정도면 충분하지\"라고 말하는 장면",
        "recommendedGenre": "먼치킨 판타지·SSS급 헌터물·재벌 2세물·회귀 먼치킨",
        "oneLiner": "당신의 이야기는 주인공이 나올 때마다 독자들이 환호하는 그런 웹툰입니다",
        "certification": "",
        "share": "내 웹툰 주인공 유형: 카리스마 먼치킨형 👑 처음부터 압도적인 주인공이래... SSS급 먼치킨 웹툰 주인공 ㅋㅋ → 너는 어떤 주인공이야?",
    },
    {
        "type": "Type6", "emoji": "🌟",
        "title": "장르 불문 팬덤을 만드는, 개성 폭발 입덕 유발 주인공",
        "short": "당신이 주인공인 웹툰은 장르가 뭐든 독자들이 주인공 하나만 보러 옵니다.",
        "desc": "어떤 설정에 집어넣어도 그 공간을 장악하는 독보적인 개성과 존재감의 타입입니다. 일상물에 넣어도 먼치킨처럼 보이고, 판타지에 넣어도 감성이 살아있고, 로맨스에 넣어도 주변이 다 들러리가 됩니다. 독자들이 작가에게 \"주인공 너무 좋아요\"를 연속으로 남기는 타입입니다.",
        "protagonistType": "개성 폭발 입덕 유발형 🌟",
        "appearingGenre": "장르 불문. 어디에 나와도 그 장르의 새로운 기준을 만드는 주인공",
        "narrativePattern": "기존 공식을 비틀거나 완전히 새로운 방향으로 전개되는 이야기",
        "strength": "어떤 장면에서도 기억에 남음. 독자가 자신만의 해석을 하게 만드는 타입",
        "charmPoint": "예측 불가능함. 다음 화가 어떻게 될지 아무도 모른다",
        "shiningScene": "예상을 완전히 뒤엎는 행동을 한 후 아무렇지 않게 넘어가는 장면",
        "recommendedGenre": "장르 믹스·독특한 설정의 신작·작가 역량이 강한 개성적 웹툰",
        "oneLiner": "당신의 이야기는 어떤 장르로 나와도 시즌2가 나올 수밖에 없는 그런 웹툰입니다",
        "certification": "개성 폭발 입덕 유발 주인공 🌟 내 웹툰은 장르 불문 팬덤 보장",
        "share": "내 웹툰 주인공 유형: 개성 폭발 입덕 유발형 🌟 어떤 장르로 나와도 팬덤 생기는 주인공이래... 시즌2 보장이래 ㅋㅋ → 너는 어떤 웹툰 주인공이야?",
    },
]

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나는 어떤 웹툰 주인공? — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 한국어 우선 */

export type Phase3WebtoonProtagonistLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3WebtoonProtagonistLocaleKey, string>): Record<Phase3WebtoonProtagonistLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3WebtoonProtagonistLocaleKey, string>, score: number): { text: Record<Phase3WebtoonProtagonistLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3WebtoonProtagonistQuestion {
  id: number;
  question: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  options: { text: Record<Phase3WebtoonProtagonistLocaleKey, string>; score: number }[];
}

export interface Phase3WebtoonProtagonistResult {
  type: string;
  emoji: string;
  title: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shortDescription: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  description: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  protagonistType: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  appearingGenre: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  narrativePattern: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  strength: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  charmPoint: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shiningScene: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  recommendedGenre: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  oneLiner: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  certificationPhrase: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shareLine: Record<Phase3WebtoonProtagonistLocaleKey, string>;
}

export function calculatePhase3WebtoonProtagonistResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3WebtoonProtagonistQuestions: Phase3WebtoonProtagonistQuestion[] = [
"""


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def fmt_locale_map(ko: str, indent: str = "      ") -> str:
    lines = [f"{indent}ko: '{esc(ko)}',"]
    for loc in LOCALES[1:]:
        lines.append(f"{indent}{loc_key(loc)}: '',")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


lines = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
    lines.append(f"    question: {fmt_locale_map(q['q'])},")
    lines.append("    options: [")
    for j, opt_text in enumerate(q["opts"]):
        lines.append(f"      opt({fmt_locale_map(opt_text, '        ')}, {j}),")
    lines.append("    ],")
    lines.append("  },")

lines.append("];\n\nexport const phase3WebtoonProtagonistResults: Phase3WebtoonProtagonistResult[] = [\n")

field_map_keys = [
    ("title", "title"), ("shortDescription", "short"), ("description", "desc"),
    ("protagonistType", "protagonistType"), ("appearingGenre", "appearingGenre"),
    ("narrativePattern", "narrativePattern"), ("strength", "strength"),
    ("charmPoint", "charmPoint"), ("shiningScene", "shiningScene"),
    ("recommendedGenre", "recommendedGenre"), ("oneLiner", "oneLiner"),
    ("certificationPhrase", "certification"), ("shareLine", "share"),
]

for r in RESULTS:
    lines.append("  {")
    lines.append(f"    type: '{r['type']}',")
    lines.append(f"    emoji: '{r['emoji']}',")
    for field, key in field_map_keys:
        lines.append(f"    {field}: {fmt_locale_map(r[key])},")
    lines.append("  },")

lines.append("];\n")

from pathlib import Path
out = Path(__file__).resolve().parents[1] / "lib" / "phase3WebtoonProtagonistData.ts"
out.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out, out.stat().st_size)
