# -*- coding: utf-8 -*-
"""Generate lib/phase3LateNightTypeData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "잠자리에 누웠는데 잠이 안 온다. 나는?",
        "opts": [
            "그냥 눈 감고 있으면서 이런저런 생각에 빠진다. 특별히 뭘 하진 않는다",
            "아예 일어나서 뭔가를 한다. 멍하니 누워있는 게 더 답답하다",
        ],
    },
    {
        "q": "새벽에 감성이 올라올 때 나는?",
        "opts": [
            "플레이리스트를 틀어놓고 그 감성 안에 그냥 있는다",
            "그 감정을 일기나 메모로 꺼내 적는다. 글로 써야 정리되는 타입",
        ],
    },
    {
        "q": "새벽에 핸드폰을 드는 이유는?",
        "opts": [
            "음악·영상·릴스·숏폼 등 뭔가를 보거나 듣기 위해",
            "뭔가를 기록하거나 검색하거나 작업하기 위해",
        ],
    },
    {
        "q": "새벽에 좋은 아이디어나 생각이 떠올랐다. 나는?",
        "opts": [
            "'아 좋은 생각이다' 하고 생각하다 흘려보낸다. 기록까지는 잘 안 한다",
            "바로 메모장이나 노트를 꺼내 적는다. 안 적으면 까먹으니까",
        ],
    },
    {
        "q": "새벽 2시에 나는 보통 어떤 상태인가?",
        "opts": [
            "감성에 빠져있거나 뭔가를 보거나 듣고 있다. 수동적으로 새벽을 보낸다",
            "뭔가를 하고 있다. 오히려 낮보다 지금이 더 잘 된다",
        ],
    },
    {
        "q": "새벽에 주변 환경을 어떻게 만드는가?",
        "opts": [
            "불을 끄거나 조명을 낮춘다. 분위기가 중요하다. 어두워야 감성이 산다",
            "작업등이나 스탠드를 켠다. 볼 게 있고 할 게 있으니까",
        ],
    },
    {
        "q": "새벽에 과거가 떠오를 때 나는?",
        "opts": [
            "그 기억 안에 한참 있는다. 억지로 안 꺼내려 해도 자꾸 떠오른다",
            "생각이 떠오르면 글로 정리하거나 그 에너지를 다른 것에 쏟는다",
        ],
    },
    {
        "q": "새벽에 아무도 없을 때 내가 가장 자주 하는 것은?",
        "opts": [
            "음악 듣기·영상 보기·릴스 스크롤·드라마 정주행",
            "글쓰기·공부·작업·정리·뭔가 만들기",
        ],
    },
    {
        "q": "새벽에 갑자기 누군가에게서 연락이 왔다. 나는?",
        "opts": [
            "반갑다. 새벽에 깨어있는 사람이 있다는 게 동지감이다. 한참 얘기한다",
            "잠깐 확인하고 다시 하던 것으로 돌아간다. 흐름을 깨고 싶지 않다",
        ],
    },
    {
        "q": "새벽 시간을 한 마디로 표현하면?",
        "opts": [
            "감성이 가장 선명해지는 시간. 낮에는 안 느끼던 것들이 올라오는 시간",
            "집중이 가장 잘 되는 시간. 방해 없이 온전히 나에게 집중할 수 있는 시간",
        ],
    },
    {
        "q": "내일 아침 일정이 있는 새벽 1시, 나는?",
        "opts": [
            "자야 하는 거 알면서도 못 잔다. 감성이 살아있는데 억지로 끄기가 어렵다",
            "자야 하는 거 알면서도 못 멈춘다. 지금 이게 너무 잘 되고 있어서",
        ],
    },
    {
        "q": "새벽이 깊어질수록 나는?",
        "opts": [
            "더 감성적이 된다. 새벽 4시가 새벽 1시보다 더 감성이 짙어진다",
            "더 각성된다. 세상이 고요해질수록 오히려 더 선명해지는 느낌이다",
        ],
    },
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🌑",
        "title": "잠자리에 누우면 생각이 폭발하는, 새벽 침잠 감성형",
        "short": "당신의 새벽은 아무것도 안 하는데 제일 많이 느끼는 시간입니다. 생각이 멈추지 않습니다.",
        "desc": "뭔가를 하는 것도 아니고 그렇다고 자는 것도 아닌 상태. 이불 속에 누워서 오늘 있었던 일, 예전 기억, 누군가의 얼굴, 했어야 할 말들이 하나씩 떠오릅니다. 막을 방법이 없습니다. 그냥 흘러가도록 두는 것이 가장 자연스럽습니다.",
        "lateNightType": "침잠 감성형 🌑",
        "keywords": "생각·기억·고요·흘려보내기·이불 속",
        "actualBehavior": "생각하기·과거 떠올리기·감정 흘려보내기·잠 못 자기",
        "strength": "혼자만의 감정 세계가 깊음. 아무도 모르게 많은 것을 느끼고 처리함",
        "characteristic": "낮에는 바쁘게 살다가 밤에 모든 감정이 한꺼번에 올라옴. 새벽이 감정 처리 타임",
        "dawnBgm": "아무것도 안 틀거나 백색소음·빗소리",
        "whatTheyNeed": "생각을 판단하지 않고 그냥 흘려보낼 수 있는 조용한 새벽",
        "oneLiner": "당신의 새벽은 가장 조용하고 가장 많은 일이 일어나는 시간입니다",
        "certification": "",
        "share": "내 새벽 감성 유형: 침잠 감성형 🌑 눕자마자 생각 폭발하는 유형이래... 자려고 누웠는데 생각하다 새벽 됨 맞음 → 너는 새벽에 뭐해? 지금 몇 시야",
    },
    {
        "type": "Type2",
        "emoji": "🎵",
        "title": "플레이리스트가 새벽을 완성하는, 새벽 음악 감성형",
        "short": "당신의 새벽은 지금 기분에 딱 맞는 노래를 찾는 것에서 시작됩니다. 그 노래 하나로 새벽의 온도가 결정됩니다.",
        "desc": "새벽에 가장 먼저 하는 것이 이어폰을 끼거나 플레이리스트를 여는 것입니다. 음악의 장르가 그날 새벽의 감성을 결정합니다. 감성이 올라오면 올라오는 대로, 가라앉으면 가라앉는 대로 그 기분에 맞는 곡을 찾습니다. 음악이 없는 새벽은 뭔가 빠진 느낌이 납니다.",
        "lateNightType": "음악 감성형 🎵",
        "keywords": "플레이리스트·감성·이어폰·분위기·음악",
        "actualBehavior": "음악 탐색·플레이리스트 정리·노래 가사에 공감·감성에 빠지기",
        "strength": "음악으로 감정을 조절하는 능력. 기분에 맞는 곡을 찾는 귀가 발달함",
        "characteristic": "새벽 플레이리스트가 따로 있음. 낮에 듣는 음악과 새벽에 듣는 음악이 다름",
        "dawnBgm": "감성 R&B·인디·재즈·새벽 감성 로파이",
        "whatTheyNeed": "방해받지 않는 이어폰 타임. 노래 한 곡이 흐르는 동안의 완전한 혼자",
        "oneLiner": "당신의 새벽은 지금 켜놓은 노래 한 곡으로 설명됩니다",
        "certification": "",
        "share": "내 새벽 감성 유형: 음악 감성형 🎵 플레이리스트 없으면 새벽이 안 된다는 유형이래... 이 테스트 새벽에 이어폰 끼고 하는 중 ㅋㅋ → 너는 새벽에 뭐해?",
    },
    {
        "type": "Type3",
        "emoji": "📺",
        "title": "알고리즘이 이끄는 대로 새벽을 보내는, 새벽 콘텐츠 몰입형",
        "short": "당신의 새벽은 어느 순간 자정이 지나 새벽 3시가 되어있습니다. 보다 보면 그렇게 됩니다.",
        "desc": "딱 이것만 보고 자야지 했는데 그 다음 편이 너무 궁금하고 알고리즘이 딱 보고 싶은 걸 추천해주고 자려면 이미 새벽 3시가 넘어있습니다. 새벽에 가장 자주 하는 것은 화면을 보는 것입니다. 그리고 그게 가장 편안합니다.",
        "lateNightType": "콘텐츠 몰입형 📺",
        "keywords": "정주행·알고리즘·화면·몰입·연속 재생",
        "actualBehavior": "드라마 정주행·유튜브·릴스·다큐·영화",
        "strength": "콘텐츠 소비 능력 최강. 좋은 콘텐츠를 남들보다 빨리 발견하고 많이 봄",
        "characteristic": '"딱 한 편만"이라는 말이 새벽 루틴의 시작이 됨. 결국 해가 뜨는 경우도 있음',
        "dawnBgm": "드라마 OST·유튜브 오디오",
        "whatTheyNeed": "충분히 충전된 기기와 와이파이. 그리고 내일 일정 없는 날",
        "oneLiner": "당신의 새벽은 자동 재생으로 채워집니다. 그리고 그게 나쁘지 않습니다",
        "certification": "",
        "share": "내 새벽 감성 유형: 콘텐츠 몰입형 📺 딱 한 편만 보고 자려 했는데 새벽 3시된 유형이래... 맞음 ㅠ → 지금 새벽에 이거 보고 있는 너도 해봐",
    },
    {
        "type": "Type4",
        "emoji": "🖊️",
        "title": "감정과 생각을 언어로 정리하는, 새벽 사색 기록형",
        "short": "당신의 새벽은 하루 중 가장 솔직한 시간입니다. 낮에는 못 꺼냈던 것들이 새벽에 글로 나옵니다.",
        "desc": "감정이 올라오거나 생각이 많아지면 그것을 그냥 흘려보내는 게 아니라 글로 꺼내야 정리가 됩니다. 일기거나 메모거나 핸드폰 메모장이거나. 쓰고 나면 훨씬 가벼워집니다. 새벽에 쓴 글이 낮에 쓴 글보다 훨씬 솔직합니다.",
        "lateNightType": "사색 기록형 🖊️",
        "keywords": "일기·메모·기록·정리·솔직함",
        "actualBehavior": "일기 쓰기·메모·과거 기록 다시 읽기·생각 정리·편지 초안 쓰기",
        "strength": "자기 자신을 잘 아는 사람. 감정을 언어로 전환하는 능력이 뛰어남",
        "characteristic": "새벽에 쓴 일기장이 따로 있는 경우가 많음. 나중에 다시 읽으면 부끄러운 것들도 있지만 그게 진짜였음",
        "dawnBgm": "조용한 피아노·ASMR·또는 완전한 침묵",
        "whatTheyNeed": "판단 없이 뭐든 써낼 수 있는 공간. 아무도 읽지 않는다는 안심감",
        "oneLiner": "당신이 새벽에 쓴 것들이 당신을 가장 잘 설명합니다",
        "certification": "",
        "share": "내 새벽 감성 유형: 사색 기록형 🖊️ 새벽에 일기 쓰고 생각 정리하는 유형이래... 새벽에 쓴 글이 제일 솔직함 맞음 → 너는 새벽에 뭐해?",
    },
    {
        "type": "Type5",
        "emoji": "💻",
        "title": "새벽이 가장 생산적인 시간인, 새벽 야행 작업형",
        "short": "당신의 새벽은 황금 집중 타임입니다. 세상이 조용해질수록 오히려 더 선명해지고 더 잘 됩니다.",
        "desc": "낮에는 그렇게 안 되던 게 새벽만 되면 술술 됩니다. 방해하는 것도 없고 연락도 없고 오직 나와 내가 하는 것만 남는 시간. 작업이거나 공부거나 프로젝트거나. 새벽에 가장 많은 것이 완성됩니다. 내일 일정이 있어도 이 집중 상태를 깨기가 아깝습니다.",
        "lateNightType": "야행 작업형 💻",
        "keywords": "집중·생산성·황금타임·조용함·완성",
        "actualBehavior": "작업·공부·사이드 프로젝트·글쓰기·편집·정리",
        "strength": "깊은 집중 능력. 방해 없는 환경에서 압도적인 퍼포먼스를 냄",
        "characteristic": "낮에 못 끝낸 것을 새벽에 마무리하는 루틴이 생겨있음. 새벽에 완성한 결과물이 가장 마음에 드는 경우가 많음",
        "dawnBgm": "로파이·백색소음·집중용 플레이리스트·또는 완전 침묵",
        "whatTheyNeed": "방해 없는 긴 시간 덩어리. 알림 없는 환경. 그리고 커피 한 잔",
        "oneLiner": "당신의 새벽은 아무도 보지 않는 곳에서 가장 많이 쌓이는 시간입니다",
        "certification": "",
        "share": "내 새벽 감성 유형: 야행 작업형 💻 새벽이 황금 집중 타임인 유형이래... 낮에 안 되던 게 새벽에 됨 완전 맞음 → 너는 새벽에 뭐해? 지금 새벽 몇 시야",
    },
    {
        "type": "Type6",
        "emoji": "🌟",
        "title": "밤이 낮인 사람, 새벽 완전 각성 마스터형",
        "short": "당신은 세상이 잠들어야 비로소 제대로 깨어납니다. 새벽이 당신의 진짜 시간입니다.",
        "desc": "새벽 감성도 있고 새벽 생산성도 있고 새벽 사색도 있습니다. 새벽의 모든 것이 당신에게 맞습니다. 낮보다 새벽이 훨씬 자연스럽고 새벽보다 낮이 오히려 어색한 타입입니다. 밤이 깊어질수록 에너지가 올라가고 더 각성됩니다. 이미 밤낮이 뒤집혔거나 뒤집히는 중입니다.",
        "lateNightType": "완전 각성 마스터형 🌟",
        "keywords": "각성·야행성·선명함·자유·새벽이 낮",
        "actualBehavior": "모든 것. 감성·음악·작업·기록·창작·사색을 새벽에 다 함",
        "strength": "세상이 가장 고요할 때 가장 많은 것을 할 수 있는 사람. 새벽의 모든 에너지를 흡수함",
        "characteristic": '"일찍 자야지"라는 말을 평생 해왔지만 이루어진 적이 없음. 새벽 4시가 무서운 시간이 아니라 자연스러운 시간',
        "dawnBgm": "상황에 따라 다름. 감성일 때는 감성 음악, 작업일 때는 집중 음악. 새벽의 주인",
        "whatTheyNeed": "다음 날 오전 일정이 없는 것. 그리고 낮에 충분히 잘 수 있는 환경",
        "oneLiner": "당신은 세상이 잠든 시간에 가장 크게 살아있는 사람입니다",
        "certification": "새벽 완전 각성 마스터 🌟 내 진짜 시간은 새벽입니다",
        "share": "내 새벽 감성 유형: 완전 각성 마스터형 🌟 밤이 낮인 사람이래... 새벽 4시에 제일 선명해지는 거 맞음 ㅋㅋ → 지금 새벽에 이거 보는 사람 다 해봐",
    },
]

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")


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


HEADER = """/** 나의 새벽 감성 유형 — 12문항 2지선다, A=0 B=1, 총점 0~12 → Type1~6 · 한국어 우선 */

export type Phase3LateNightTypeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3LateNightTypeLocaleKey, string>): Record<Phase3LateNightTypeLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3LateNightTypeLocaleKey, string>, score: number): { text: Record<Phase3LateNightTypeLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3LateNightTypeQuestion {
  id: number;
  question: Record<Phase3LateNightTypeLocaleKey, string>;
  options: { text: Record<Phase3LateNightTypeLocaleKey, string>; score: number }[];
}

export interface Phase3LateNightTypeResult {
  type: string;
  emoji: string;
  title: Record<Phase3LateNightTypeLocaleKey, string>;
  shortDescription: Record<Phase3LateNightTypeLocaleKey, string>;
  description: Record<Phase3LateNightTypeLocaleKey, string>;
  lateNightType: Record<Phase3LateNightTypeLocaleKey, string>;
  lateNightKeywords: Record<Phase3LateNightTypeLocaleKey, string>;
  actualBehavior: Record<Phase3LateNightTypeLocaleKey, string>;
  strength: Record<Phase3LateNightTypeLocaleKey, string>;
  characteristic: Record<Phase3LateNightTypeLocaleKey, string>;
  dawnBgm: Record<Phase3LateNightTypeLocaleKey, string>;
  whatTheyNeed: Record<Phase3LateNightTypeLocaleKey, string>;
  oneLiner: Record<Phase3LateNightTypeLocaleKey, string>;
  certificationPhrase: Record<Phase3LateNightTypeLocaleKey, string>;
  shareLine: Record<Phase3LateNightTypeLocaleKey, string>;
}

export function calculatePhase3LateNightTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3LateNightTypeQuestions: Phase3LateNightTypeQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3LateNightTypeResults: Phase3LateNightTypeResult[] = [\n"
FOOTER_END = "];\n"


def ko_only(text: str) -> dict[str, str]:
    return {"ko": text, **{loc: "" for loc in LOCALES[1:]}}


lines = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
    lines.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    lines.append("    options: [")
    for j, opt_text in enumerate(q["opts"]):
        lines.append(f"      opt({fmt_locale_map(ko_only(opt_text), '        ')}, {j}),")
    lines.append("    ],")
    lines.append("  },")

lines.append(FOOTER_Q)
for r in RESULTS:
    field_map = {
        "title": r["title"],
        "shortDescription": r["short"],
        "description": r["desc"],
        "lateNightType": r["lateNightType"],
        "lateNightKeywords": r["keywords"],
        "actualBehavior": r["actualBehavior"],
        "strength": r["strength"],
        "characteristic": r["characteristic"],
        "dawnBgm": r["dawnBgm"],
        "whatTheyNeed": r["whatTheyNeed"],
        "oneLiner": r["oneLiner"],
        "certificationPhrase": r["certification"],
        "shareLine": r["share"],
    }
    lines.append("  {")
    lines.append(f"    type: '{r['type']}',")
    lines.append(f"    emoji: '{r['emoji']}',")
    for field, val in field_map.items():
        lines.append(f"    {field}: {fmt_locale_map(ko_only(val))},")
    lines.append("  },")

lines.append(FOOTER_END)

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3LateNightTypeData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
