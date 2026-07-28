# -*- coding: utf-8 -*-
"""Generate lib/phase3PersonalityColorTemperatureData.ts (Korean complete, locale skeleton)."""

QUESTIONS = [
    {
        "q": "두 공간 중 더 머물고 싶은 곳은?",
        "a": "왼쪽 공간이 더 끌린다",
        "b": "오른쪽 공간이 더 끌린다",
    },
    {
        "q": "두 음료 중 지금 더 마시고 싶은 것은?",
        "a": "왼쪽 음료가 더 끌린다",
        "b": "오른쪽 음료가 더 끌린다",
    },
    {
        "q": "두 풍경 중 더 감동적인 것은?",
        "a": "왼쪽 풍경이 더 감동적이다",
        "b": "오른쪽 풍경이 더 감동적이다",
    },
    {
        "q": "두 컬러 팔레트 중 더 끌리는 것은?",
        "a": "왼쪽 팔레트가 더 끌린다",
        "b": "오른쪽 팔레트가 더 끌린다",
    },
    {
        "q": "두 소재·질감 중 더 좋아하는 것은?",
        "a": "왼쪽 소재가 더 좋다",
        "b": "오른쪽 소재가 더 좋다",
    },
    {
        "q": "두 하늘 중 더 마음이 가는 것은?",
        "a": "왼쪽 하늘이 더 마음에 든다",
        "b": "오른쪽 하늘이 더 마음에 든다",
    },
    {
        "q": "두 꽃 중 더 좋아하는 것은?",
        "a": "왼쪽 꽃이 더 좋다",
        "b": "오른쪽 꽃이 더 좋다",
    },
    {
        "q": "두 밤의 분위기 중 더 끌리는 것은?",
        "a": "왼쪽 밤이 더 끌린다",
        "b": "오른쪽 밤이 더 끌린다",
    },
    {
        "q": "두 동물 중 더 좋아하는 것은?",
        "a": "왼쪽 동물이 더 좋다",
        "b": "오른쪽 동물이 더 좋다",
    },
    {
        "q": "두 패션 컬러 중 더 끌리는 것은?",
        "a": "왼쪽 코디가 더 끌린다",
        "b": "오른쪽 코디가 더 끌린다",
    },
    {
        "q": "두 디저트 중 더 먹고 싶은 것은?",
        "a": "왼쪽 디저트가 더 먹고 싶다",
        "b": "오른쪽 디저트가 더 먹고 싶다",
    },
    {
        "q": "두 바다 풍경 중 더 마음이 가는 것은?",
        "a": "왼쪽 바다가 더 마음에 든다",
        "b": "오른쪽 바다가 더 마음에 든다",
    },
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🔵",
        "temperatureCelsius": -10,
        "accentColor": "#0A2342",
        "title": "깊고 고요한 독립의 온도, 딥 오션 블루",
        "short": "당신의 감성은 깊고 고요한 바다 같습니다. 차갑게 느껴지지만 그 안에 아무도 모르는 깊이가 있습니다.",
        "desc": "따뜻한 것보다 차갑고 고요한 것에 더 끌리고, 사람 많은 곳보다 혼자만의 공간에서 충전되며, 감정을 쉽게 꺼내 보이지 않는 타입입니다. 독립적이고 지적이며 자신만의 세계가 뚜렷합니다.",
        "emotionTemperature": "-10°C",
        "emotionColor": "딥 오션 블루",
        "emotionKeywords": "독립·깊이·고요·지적·절제",
        "strengthAtTemp": "흔들리지 않는 내면의 중심. 쉽게 흥분하지 않고 냉정하게 상황을 봄",
        "charmAtTemp": "처음엔 차가워 보이지만 알면 알수록 깊은 면이 드러남. 가까워지기 어렵지만 가까워지면 가장 진한 관계가 됨",
        "comfortableSpace": "조용한 서재·창가 자리·혼자 걷는 산책로·새벽 거리",
        "colorCodes": "딥 네이비 #0A2342 · 스틸 블루 #4682B4 · 아비스 블루 #041F3C",
        "certification": "",
        "oneLiner": "당신의 차가움은 냉정한 게 아닙니다. 깊은 겁니다",
        "share": "내 감성 온도: 딥 오션 블루 🔵 -10°C 차갑고 깊은 감성이래... 차가운 게 아니라 깊은 거래 맞음 ㅋㅋ → 너는 몇 도야? 색깔도 나옴",
    },
    {
        "type": "Type2",
        "emoji": "🩵",
        "temperatureCelsius": 5,
        "accentColor": "#AAF0D1",
        "title": "청량하고 절제된 감성의 온도, 아이스 민트",
        "short": "당신의 감성은 이른 봄 새벽 공기 같습니다. 차갑지만 어딘가 싱그럽고, 절제되어 있지만 감성이 없는 게 아닙니다.",
        "desc": "차가운 것에 끌리면서도 완전히 차갑지는 않은, 쿨과 청량함 사이 어딘가에 있는 감성 온도입니다. 감정이 있지만 과하게 표현하지 않고, 독립적이지만 완전한 고독을 원하지는 않습니다. 적당한 거리에서 따뜻한 관계를 유지하는 타입입니다.",
        "emotionTemperature": "5°C",
        "emotionColor": "아이스 민트",
        "emotionKeywords": "청량함·절제·감성·균형·신선함",
        "strengthAtTemp": "차갑지도 뜨겁지도 않은 균형. 감정적이면서도 이성적인 판단이 가능함",
        "charmAtTemp": "쿨해 보이는데 의외로 감성적인 면이 있음. 그 갭이 매력 포인트",
        "comfortableSpace": "큰 창문이 있는 카페·잘 정돈된 작업실·이른 아침 공원",
        "colorCodes": "아이스 민트 #AAF0D1 · 씨폼 #B2FFEF · 쿨 그레이 #8DA9C4",
        "certification": "",
        "oneLiner": "당신의 감성은 청량합니다. 여름 새벽 한 모금 차가운 물처럼",
        "share": "내 감성 온도: 아이스 민트 🩵 5°C 청량하고 절제된 감성이래... 쿨한데 감성적인 거 맞음 → 너는 몇 도야? 색깔 결과 캡처해봐",
    },
    {
        "type": "Type3",
        "emoji": "💜",
        "temperatureCelsius": 18,
        "accentColor": "#9683A3",
        "title": "신비롭고 몽환적인 경계의 온도, 라벤더 바이올렛",
        "short": "당신의 감성은 차갑지도 따뜻하지도 않습니다. 봄과 여름 사이, 해질녘처럼 두 가지가 동시에 존재합니다.",
        "desc": "쿨톤과 웜톤 어느 쪽에도 완전히 속하지 않는 감성 온도입니다. 차가운 것에도 끌리고 따뜻한 것에도 끌리며, 상황에 따라 두 가지 감성이 모두 드러납니다. 복합적이고 신비로운 면이 있으며 단순하게 정의되지 않는 깊이가 있습니다.",
        "emotionTemperature": "18°C",
        "emotionColor": "라벤더 바이올렛",
        "emotionKeywords": "신비·몽환·복합·경계·깊이",
        "strengthAtTemp": "어느 분위기에도 녹아드는 유연함. 차갑게도 따뜻하게도 대응 가능",
        "charmAtTemp": "정의하기 어렵다는 게 가장 큰 매력. 알아갈수록 새로운 면이 나옴",
        "comfortableSpace": "해질녘 카페·라벤더밭·흐린 날 오후의 창가",
        "colorCodes": "라벤더 #E6E6FA · 모브 #B784A7 · 더스티 바이올렛 #9683A3",
        "certification": "",
        "oneLiner": "당신은 한 가지 색깔로 설명되지 않습니다. 그게 당신의 가장 매력적인 부분입니다",
        "share": "내 감성 온도: 라벤더 바이올렛 💜 18°C 쿨도 웜도 아닌 경계래... 한 가지 색으로 설명 안 된다는 거 맞음 ㅋㅋ → 너는 몇 도야?",
    },
    {
        "type": "Type4",
        "emoji": "🍑",
        "temperatureCelsius": 28,
        "accentColor": "#FF7F50",
        "title": "부드럽고 배려 깊은 따뜻함, 피치 코랄",
        "short": "당신의 감성은 따뜻한 봄 햇살 같습니다. 뜨겁지 않지만 옆에 있으면 자연스럽게 온기가 전해집니다.",
        "desc": "따뜻한 것에 더 끌리고 사람과의 연결에서 에너지를 얻으며 자연스럽게 주변을 배려하는 타입입니다. 감정 표현이 적당히 풍부하고 분위기를 따뜻하게 만드는 능력이 있습니다. 억지스럽지 않게 자연스럽게 따뜻한 사람입니다.",
        "emotionTemperature": "28°C",
        "emotionColor": "피치 코랄",
        "emotionKeywords": "따뜻함·배려·부드러움·포용·친근함",
        "strengthAtTemp": "처음 만나는 사람도 편하게 만드는 온기. 갈등을 부드럽게 해결하는 능력",
        "charmAtTemp": "억지스럽지 않은 자연스러운 따뜻함. 옆에 있으면 기분이 좋아지는 존재",
        "comfortableSpace": "따뜻한 조명의 카페·꽃이 있는 공간·친구의 집·봄날 공원",
        "colorCodes": "피치 #FFCBA4 · 코랄 #FF7F50 · 살몬 핑크 #FA8072",
        "certification": "",
        "oneLiner": "당신 곁에 있으면 왠지 모르게 안심이 됩니다. 그것이 당신의 온도입니다",
        "share": "내 감성 온도: 피치 코랄 🍑 28°C 따뜻하고 배려 깊은 감성이래... 자연스럽게 따뜻한 사람이래 → 너는 몇 도야? 색깔 결과 캡처해봐",
    },
    {
        "type": "Type5",
        "emoji": "✨",
        "temperatureCelsius": 36,
        "accentColor": "#FFD700",
        "title": "밝고 에너지 넘치는 따뜻함, 선셋 골드",
        "short": "당신의 감성은 노을 지는 하늘 같습니다. 뜨겁고 밝고 주변을 모두 물들이는 온기입니다.",
        "desc": "따뜻한 것에 강하게 끌리고 사람과 함께할 때 가장 빛나며 감정을 풍부하게 표현하는 타입입니다. 에너지가 넘치고 긍정적이며 주변 분위기를 밝게 만드는 능력이 있습니다. 함께 있으면 덩달아 기분이 좋아지는 사람입니다.",
        "emotionTemperature": "36°C",
        "emotionColor": "선셋 골드",
        "emotionKeywords": "밝음·에너지·긍정·풍요로움·감동",
        "strengthAtTemp": "주변을 밝히는 에너지. 열정적이고 감동을 잘 받고 또 잘 줌",
        "charmAtTemp": "함께 있으면 덩달아 기분이 올라가는 사람. 감정이 선명하고 진함",
        "comfortableSpace": "노을이 보이는 루프탑·야외 테라스·봄날 피크닉·따뜻한 사람들과의 저녁",
        "colorCodes": "선셋 골드 #FFD700 · 앰버 #FFBF00 · 허니 #FFC107",
        "certification": "",
        "oneLiner": "당신의 온도는 주변을 물들입니다. 노을처럼",
        "share": "내 감성 온도: 선셋 골드 ✨ 36°C 노을처럼 주변을 물들이는 감성이래... 뜨겁고 밝은 거 맞음 → 너는 몇 도야? 색깔 캡처 공유해봐",
    },
    {
        "type": "Type6",
        "emoji": "❤️‍🔥",
        "temperatureCelsius": 42,
        "accentColor": "#C21A7A",
        "title": "뜨겁고 강렬한 열정의 온도, 딥 로즈 레드",
        "short": "당신의 감성은 타오르는 불꽃 같습니다. 뜨겁고 강렬하고 한번 빠지면 멈추기 어렵습니다.",
        "desc": "차가운 것보다 따뜻한 것, 따뜻한 것보다 뜨거운 것에 끌리는 타입입니다. 감정이 선명하고 강렬하며 좋아하는 것과 싫어하는 것이 분명합니다. 열정적이고 에너지가 뜨겁고 한번 마음을 주면 전부 줍니다. 감동을 받는 것도, 감동을 주는 것도 가장 뜨거운 온도에서 합니다.",
        "emotionTemperature": "42°C",
        "emotionColor": "딥 로즈 레드",
        "emotionKeywords": "열정·강렬함·감동·뜨거움·전부",
        "strengthAtTemp": "가장 강하게 사랑하고 가장 뜨겁게 살아가는 타입. 열정 자체가 매력",
        "charmAtTemp": "옆에 있으면 온도가 전염됨. 무기력한 사람도 덩달아 뜨거워지게 만드는 존재",
        "comfortableSpace": "벽난로 앞·여름 밤 캠프파이어·콘서트·열정적인 사람들이 모인 곳",
        "colorCodes": "딥 로즈 #C21A7A · 크림슨 #DC143C · 버건디 #800020",
        "certification": "감성 온도 42°C 딥 로즈 레드 ❤️‍🔥 내 감성은 타오르는 불꽃",
        "oneLiner": "당신의 온도는 뜨겁습니다. 그리고 그 뜨거움이 당신의 가장 강한 무기입니다",
        "share": "내 감성 온도: 딥 로즈 레드 ❤️‍🔥 42°C 타오르는 불꽃 같은 열정 감성이래... 뜨거운 거 맞음 ㅋㅋ → 너는 몇 도야? 색깔 결과 캡처해봐",
    },
]

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
IMG_PREFIX = "p3_test_personality_color_temperature"


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


HEADER = f"""/**
 * 내 성격의 감성 온도 — 12문항 이미지 2지선다, A=0(쿨) B=1(웜), 총점 0~12 → Type1~6 · 한국어 우선
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: {IMG_PREFIX}.webp
 * - 답변 이미지: {IMG_PREFIX}_q{{n}}a~b.webp (12문항 × 2 = 24장)
 */

export type Phase3PersonalityColorTemperatureLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3PersonalityColorTemperatureLocaleKey, string>): Record<Phase3PersonalityColorTemperatureLocaleKey, string> {{
  return t;
}}

export interface Phase3PersonalityColorTemperatureQuestion {{
  id: number;
  question: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  options: {{ image: string; label: Record<Phase3PersonalityColorTemperatureLocaleKey, string>; score: number }}[];
}}

export interface Phase3PersonalityColorTemperatureResult {{
  type: string;
  emoji: string;
  title: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  shortDescription: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  description: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  temperatureCelsius: number;
  accentColor: string;
  emotionTemperature: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  emotionColor: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  emotionKeywords: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  strengthAtTemp: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  charmAtTemp: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  comfortableSpace: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  colorCodes: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  certificationPhrase: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  oneLiner: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  shareLine: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
}}

export function calculatePhase3PersonalityColorTemperatureResult(answers: number[]): string {{
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}}

const IMG = (n: number, choice: 'a' | 'b') => '{IMG_PREFIX}_q' + String(n) + choice + '.webp';

export const phase3PersonalityColorTemperatureQuestions: Phase3PersonalityColorTemperatureQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3PersonalityColorTemperatureResults: Phase3PersonalityColorTemperatureResult[] = [\n"
FOOTER_END = "];\n"

lines = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
    lines.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    lines.append("    options: [")
    lines.append(f"      {{ image: IMG({i}, 'a'), label: {fmt_locale_map(ko_only(q['a']), '        ')}, score: 0 }},")
    lines.append(f"      {{ image: IMG({i}, 'b'), label: {fmt_locale_map(ko_only(q['b']), '        ')}, score: 1 }},")
    lines.append("    ],")
    lines.append("  },")

lines.append(FOOTER_Q)
for r in RESULTS:
    field_map = {
        "title": r["title"],
        "shortDescription": r["short"],
        "description": r["desc"],
        "emotionTemperature": r["emotionTemperature"],
        "emotionColor": r["emotionColor"],
        "emotionKeywords": r["emotionKeywords"],
        "strengthAtTemp": r["strengthAtTemp"],
        "charmAtTemp": r["charmAtTemp"],
        "comfortableSpace": r["comfortableSpace"],
        "colorCodes": r["colorCodes"],
        "certificationPhrase": r["certification"],
        "oneLiner": r["oneLiner"],
        "shareLine": r["share"],
    }
    lines.append("  {")
    lines.append(f"    type: '{r['type']}',")
    lines.append(f"    emoji: '{r['emoji']}',")
    lines.append(f"    temperatureCelsius: {r['temperatureCelsius']},")
    lines.append(f"    accentColor: '{r['accentColor']}',")
    for field, val in field_map.items():
        lines.append(f"    {field}: {fmt_locale_map(ko_only(val))},")
    lines.append("  },")

lines.append(FOOTER_END)

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3PersonalityColorTemperatureData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
