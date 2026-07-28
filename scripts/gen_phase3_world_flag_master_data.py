# -*- coding: utf-8 -*-
"""Generate lib/phase3WorldFlagMasterData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("방글라데시", False),
            ("조지아", False),
            ("일본", True),
            ("덴마크", False),
        ],
        "explanation": "일본 국기 히노마루(日の丸)입니다. 흰 배경에 빨간 원 하나로 이루어진 세계에서 가장 단순한 국기 중 하나입니다. 빨간 원은 태양을 상징합니다. 비슷해 보이는 방글라데시 국기와의 차이점은 원의 색(방글라데시는 초록 바탕에 빨간 원)입니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("미국", False),
            ("뉴질랜드", False),
            ("호주", False),
            ("캐나다", True),
        ],
        "explanation": "캐나다 국기입니다. 빨강-흰색-빨강 세로 구성에 중앙에 빨간 단풍잎이 특징입니다. 단풍잎은 캐나다를 상징하는 나무로, 국기 외에도 다양한 곳에 활용됩니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("대만", False),
            ("홍콩", False),
            ("중국", False),
            ("대한민국", True),
        ],
        "explanation": "대한민국 태극기입니다. 흰색 바탕에 중앙 태극 문양과 네 모서리의 사괘가 특징입니다. 흰색은 평화, 태극은 음양의 조화, 사괘는 하늘·땅·물·불을 상징합니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("호주", False),
            ("영국", True),
            ("뉴질랜드", False),
            ("아이슬란드", False),
        ],
        "explanation": "영국 국기 유니언잭(Union Jack)입니다. 잉글랜드의 성 조지 십자, 스코틀랜드의 성 안드레 십자, 아일랜드의 성 패트릭 십자 세 개가 합쳐진 디자인입니다. 호주·뉴질랜드 국기에도 작게 들어가 있어 혼동하기 쉽습니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("덴마크", False),
            ("몰타", False),
            ("조지아", False),
            ("스위스", True),
        ],
        "explanation": "스위스 국기입니다. 빨간 바탕에 흰색 십자가가 특징이며 국제적십자사 마크의 원형이 됐습니다. 비슷하게 생긴 덴마크 국기와의 차이점은 스위스는 정사각형(1:1), 덴마크는 직사각형(28:37)입니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("트리니다드토바고", False),
            ("자메이카", True),
            ("가이아나", False),
            ("바베이도스", False),
        ],
        "explanation": "자메이카 국기입니다. 황금색 대각선 X자와 초록·검은 삼각형이 특징입니다. 황금은 빛나는 자원과 자연, 검은색은 강인함을 이겨낸 역경, 초록은 풍요로운 자연을 상징합니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("팔라우", False),
            ("일본", False),
            ("방글라데시", True),
            ("라오스", False),
        ],
        "explanation": "방글라데시 국기입니다. 초록 바탕에 빨간 원이 특징입니다. 초록은 방글라데시의 푸른 자연과 젊음, 빨간 원은 독립을 위해 흘린 피와 새로운 태양을 상징합니다. 일본 국기와 색이 반전된 것으로 기억하면 쉽습니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("부탄", False),
            ("스리랑카", False),
            ("몽골", False),
            ("네팔", True),
        ],
        "explanation": "네팔 국기입니다. 세계에서 유일하게 직사각형이 아닌 국기로 두 개의 삼각형 깃발이 겹쳐진 이중 페넌트 형태입니다. 윗 삼각형에는 달, 아랫 삼각형에는 태양이 그려져 있습니다. 이 독특한 모양만으로도 한 번 보면 절대 잊지 못합니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("몽골", False),
            ("부탄", True),
            ("카자흐스탄", False),
            ("키르기스스탄", False),
        ],
        "explanation": "부탄 국기입니다. 주황(왼쪽 상단)과 금색(오른쪽 하단)으로 대각선으로 나뉘고 가운데에 흰색 용이 그려진 독특한 국기입니다. 부탄은 '뇌룡의 나라'라는 뜻으로 용이 국가 상징입니다. 이 문항을 맞히셨다면 진짜 지리 고수입니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("타지키스탄", False),
            ("카자흐스탄", False),
            ("키르기스스탄", True),
            ("투르크메니스탄", False),
        ],
        "explanation": "키르기스스탄 국기입니다. 빨간 바탕에 노란 태양이 있고 태양 안에 유르트(전통 천막) 천장 뼈대 무늬가 들어있습니다. 유르트는 키르기스스탄 유목민의 전통 생활 공간을 상징합니다. 비슷한 중앙아시아 국기들 중 유르트 문양이 들어간 것이 키르기스스탄입니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("파키스탄", False),
            ("알제리", False),
            ("리비아", False),
            ("몰디브", True),
        ],
        "explanation": "몰디브 국기입니다. 빨간 테두리 안에 초록 직사각형, 그 안에 흰 초승달이 특징입니다. 빨강은 용기와 순국, 초록은 평화와 번영, 흰 초승달은 이슬람 신앙을 상징합니다. 파키스탄·알제리 국기와 헷갈리기 쉽지만 독특한 빨간 테두리가 포인트입니다.",
    },
    {
        "q": "이 국기는 어느 나라 국기인가요?",
        "opts": [
            ("우즈베키스탄", False),
            ("아제르바이잔", False),
            ("투르크메니스탄", False),
            ("카자흐스탄", True),
        ],
        "explanation": "카자흐스탄 국기입니다. 하늘색 바탕에 황금 태양·독수리·왼쪽 전통 문양 띠가 특징입니다. 하늘색은 자유와 광활한 하늘, 황금색 태양은 번영, 독수리는 자유와 힘, 전통 문양은 카자흐 문화를 상징합니다. 여기까지 맞히셨다면 진정한 세계 국기 마스터입니다.",
    },
]

RESULTS = [
    {
        "type": "Level1",
        "emoji": "🌱",
        "title": "아직 지구본 한 번 더 보기, 국기 새싹 🌱",
        "short": "12개 중 2개 이하를 맞혔습니다. 쉬운 구간에서도 많이 막혔나요? 괜찮습니다. 국기를 잘 모르는 게 당연합니다.",
        "desc": "국기를 외우는 건 특별한 관심이 없으면 접할 일이 없습니다. 이 테스트를 계기로 세계 지도 한 번 펼쳐보는 건 어떨까요? 생각보다 재밌습니다.",
        "flagGrade": "Lv.1 국기 새싹 🌱",
        "scoreRange": "정답 수: 0~2개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "재도전 팁: 일본·캐나다·대한민국·영국부터 외우고 다시 도전",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "오늘부터 국기 박사가 될 수 있습니다. 첫 번째 걸음을 뗐습니다",
        "share": "세계 국기 테스트: Lv.1 새싹 🌱 12개 중 2개... 카자흐스탄은커녕 스위스도 몰랐음 ㅋㅋ → 이 국기 알아? 친구한테 도전장 보내봐",
    },
    {
        "type": "Level2",
        "emoji": "🗺️",
        "title": "흔한 건 알고 낯선 건 모르는, 국기 견습생 🗺️",
        "short": "쉬운 구간은 어느 정도 맞혔는데 중간 이후부터 막히기 시작했군요. 평균 수준입니다.",
        "desc": "유명한 나라의 국기는 알지만 중소국가 국기는 아직 낯선 단계입니다. 스위스와 덴마크 국기의 차이, 방글라데시와 일본 국기의 차이를 이 기회에 알아두세요.",
        "flagGrade": "Lv.2 국기 견습생 🗺️",
        "scoreRange": "정답 수: 3~5개",
        "strengthZone": "강점 구간: 쉬운 Q1~Q4",
        "weakZone": "취약 구간: 중간~어려운 Q5~Q12",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "자주 보이는 국기는 알고 있습니다. 조금만 더 알면 고수가 됩니다",
        "share": "세계 국기 테스트: Lv.2 견습생 🗺️ 일본·영국은 맞혔는데 자메이카에서 막힘... 방글라데시랑 일본 색 반대인 거 오늘 알았음 → 이 국기 알아? 도전해봐",
    },
    {
        "type": "Level3",
        "emoji": "🧭",
        "title": "지리 상식 괜찮은 편, 국기 탐험가 🧭",
        "short": "절반 이상을 맞혔습니다. 평균 이상의 세계 지리 상식입니다.",
        "desc": "쉬운 구간은 대부분 맞혔고 중간 구간도 상당수 정복했습니다. 어려운 구간(부탄·키르기스스탄·몰디브·카자흐스탄)에서 몇 개 떨어졌을 것입니다. 중앙아시아·도서 국가 국기를 집중 공략해보세요.",
        "flagGrade": "Lv.3 국기 탐험가 🧭",
        "scoreRange": "정답 수: 6~8개",
        "strengthZone": "강점 구간: 쉬운 + 중간 구간",
        "weakZone": "취약 구간: 어려운 Q9~Q12 (부탄·키르기스스탄·몰디브·카자흐스탄)",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "탐험가 수준의 세계 지식이 있습니다. 조금만 더 넓히면 고수 단계입니다",
        "share": "세계 국기 테스트: Lv.3 탐험가 🧭 절반 이상 맞혔는데 카자흐스탄에서 멘붕... 부탄에 용 국기 있는 거 몰랐음 → 이 국기 알아? 지리 상식 테스트해봐",
    },
    {
        "type": "Level4",
        "emoji": "🌐",
        "title": "지리 덕후 인정받는 수준, 국기 고수 🌐",
        "short": "어려운 구간까지 대부분 맞혔습니다. 상위 15%에 해당하는 국기 지식입니다.",
        "desc": "부탄의 용 국기, 키르기스스탄의 유르트 문양, 몰디브의 빨간 테두리까지 알고 있다는 것이 인상적입니다. 세계 지리에 관심이 많거나 여행을 좋아하는 분일 가능성이 높습니다.",
        "flagGrade": "Lv.4 국기 고수 🌐",
        "scoreRange": "정답 수: 9~10개",
        "strengthZone": "강점: 중간 + 어려운 구간 모두 높은 정답률",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "아쉬운 포인트: 12점 만점까지 1~3개 차이. 틀린 국기가 어디였는지 확인해보기",
        "certification": "",
        "oneLiner": "당신 주변에서 국기 퀴즈 1등 하는 사람입니다. 이 결과 자랑해도 됩니다",
        "share": "세계 국기 테스트: Lv.4 고수 🌐 상위 15%... 키르기스스탄 유르트 문양도 맞혔음 → 이 국기 알아? 이거 다 맞히면 지리 덕후 인정",
    },
    {
        "type": "Level5",
        "emoji": "🏆",
        "title": "세계 지도가 머릿속에 있는, 국기 마스터 🏆",
        "short": "11개 또는 12개를 모두 맞혔습니다. 카자흐스탄 국기까지 맞혔다면 진정한 마스터입니다.",
        "desc": "네팔이 세계 유일의 비직사각형 국기임을 알고, 키르기스스탄 국기 안에 유르트 문양이 있음을 알고, 카자흐스탄 국기의 하늘색과 독수리를 구별해낸 것은 놀라운 수준의 지리 상식입니다.",
        "flagGrade": "Lv.5 국기 마스터 🏆",
        "scoreRange": "정답 수: 11~12개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과가 가능한 경우: 세계 지리 깊은 관심·여행·국제 관련 전공·지리 덕후",
        "regretPoint": "",
        "certification": "세계 국기 마스터 달성 🏆 카자흐스탄 국기도 맞혔다",
        "oneLiner": "당신은 세계 국기 고수입니다. 이 결과를 친구에게 보내서 도전장을 던지세요",
        "share": "세계 국기 테스트: Lv.5 마스터 🏆 카자흐스탄 국기까지 맞혔음... 12개 중 11~12개 → 이 국기 알아? 도전해봐 다 맞힐 수 있어?",
    },
]

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
IMAGE_PREFIX = "p3_quiz_world_flag_master"


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def fmt_locale_map(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f"{indent}ko: '{esc(d['ko'])}',"]
    for loc in LOCALES[1:]:
        val = d.get(loc, "")
        lines.append(f"{indent}{loc_key(loc)}: '{esc(val)}',")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def ko_only(text: str) -> dict[str, str]:
    return {"ko": text, **{loc: "" for loc in LOCALES[1:]}}


HEADER = """/** 세계 국기 고수 테스트 — phase3-world-flag-master · 12문항 4지선다 · 정답 +1 오답 0 · 한국어 우선 */

export type Phase3WorldFlagMasterLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3WorldFlagMasterLocaleKey, string>): Record<Phase3WorldFlagMasterLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3WorldFlagMasterLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3WorldFlagMasterLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3WorldFlagMasterOption {
  text: Record<Phase3WorldFlagMasterLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3WorldFlagMasterQuestion {
  id: number;
  imageFile: string;
  question: Record<Phase3WorldFlagMasterLocaleKey, string>;
  options: Phase3WorldFlagMasterOption[];
  correctExplanation: Record<Phase3WorldFlagMasterLocaleKey, string>;
  wrongTraps: Record<Phase3WorldFlagMasterLocaleKey, string>;
}

export interface Phase3WorldFlagMasterResult {
  type: string;
  emoji: string;
  title: Record<Phase3WorldFlagMasterLocaleKey, string>;
  shortDescription: Record<Phase3WorldFlagMasterLocaleKey, string>;
  description: Record<Phase3WorldFlagMasterLocaleKey, string>;
  flagGrade: Record<Phase3WorldFlagMasterLocaleKey, string>;
  scoreRange: Record<Phase3WorldFlagMasterLocaleKey, string>;
  strengthZone: Record<Phase3WorldFlagMasterLocaleKey, string>;
  weakZone: Record<Phase3WorldFlagMasterLocaleKey, string>;
  retakeTip: Record<Phase3WorldFlagMasterLocaleKey, string>;
  characteristic: Record<Phase3WorldFlagMasterLocaleKey, string>;
  regretPoint: Record<Phase3WorldFlagMasterLocaleKey, string>;
  certificationPhrase: Record<Phase3WorldFlagMasterLocaleKey, string>;
  oneLiner: Record<Phase3WorldFlagMasterLocaleKey, string>;
  shareLine: Record<Phase3WorldFlagMasterLocaleKey, string>;
}

export function calculatePhase3WorldFlagMasterResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3WorldFlagMasterQuestions: Phase3WorldFlagMasterQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3WorldFlagMasterResults: Phase3WorldFlagMasterResult[] = [\n"
FOOTER_END = "];\n"

lines = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
    lines.append(f"    imageFile: '{IMAGE_PREFIX}_q{i}.webp',")
    lines.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    lines.append("    options: [")
    for opt_text, is_correct in q["opts"]:
        lines.append(f"      quizOpt({fmt_locale_map(ko_only(opt_text), '        ')}, {str(is_correct).lower()}),")
    lines.append("    ],")
    lines.append(f"    correctExplanation: {fmt_locale_map(ko_only(q['explanation']))},")
    lines.append(f"    wrongTraps: {fmt_locale_map(ko_only(''))},")
    lines.append("  },")

lines.append(FOOTER_Q)
for r in RESULTS:
    field_map = {
        "title": r["title"],
        "shortDescription": r["short"],
        "description": r["desc"],
        "flagGrade": r["flagGrade"],
        "scoreRange": r["scoreRange"],
        "strengthZone": r["strengthZone"],
        "weakZone": r["weakZone"],
        "retakeTip": r["retakeTip"],
        "characteristic": r["characteristic"],
        "regretPoint": r["regretPoint"],
        "certificationPhrase": r["certification"],
        "oneLiner": r["oneLiner"],
        "shareLine": r["share"],
    }
    lines.append("  {")
    lines.append(f"    type: '{r['type']}',")
    lines.append(f"    emoji: '{r['emoji']}',")
    for field, val in field_map.items():
        lines.append(f"    {field}: {fmt_locale_map(ko_only(val))},")
    lines.append("  },")

lines.append(FOOTER_END)

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3WorldFlagMasterData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
