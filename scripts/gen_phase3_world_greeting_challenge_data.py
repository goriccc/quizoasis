# -*- coding: utf-8 -*-
"""Generate lib/phase3WorldGreetingChallengeData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("이탈리아", False),
            ("포르투갈", False),
            ("프랑스", True),
            ("루마니아", False),
        ],
        "explanation": '프랑스어 인사말 "Bonjour(봉주르)"입니다. "Bon(좋은) + Jour(낮)"의 합성어로 "좋은 하루"라는 의미입니다. 프랑스어는 전 세계 약 30개국에서 공식 언어로 사용되며 약 3억 명이 사용합니다. 비슷하게 들리는 이탈리아어 인사말은 "Buongiorno(부온조르노)"입니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("중국", False),
            ("대만", False),
            ("일본", True),
            ("베트남", False),
        ],
        "explanation": '일본어 인사말 "こんにちは(곤니치와)"입니다. "今日は(오늘은)"에서 유래한 표현으로 낮 인사로 사용됩니다. 아침엔 "おはようございます(오하요우 고자이마스)", 밤엔 "こんばんは(곤반와)"를 씁니다. 한자를 쓰는 중국·대만과 달리 일본어는 히라가나·카타카나·한자를 혼합 사용하는 것이 특징입니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("스페인", False),
            ("프랑스", False),
            ("그리스", False),
            ("이탈리아", True),
        ],
        "explanation": '이탈리아어 인사말 "Ciao(차오)"입니다. 만날 때와 헤어질 때 모두 사용하는 인사말로 "안녕"과 "잘 가" 두 가지 의미를 가집니다. 이탈리아어에서 유래했지만 현재는 유럽 여러 나라에서 비공식 인사말로 사용될 만큼 전 세계로 퍼진 단어입니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("일본", False),
            ("한국", False),
            ("베트남", False),
            ("중국", True),
        ],
        "explanation": '중국어(보통화/만다린) 인사말 "你好(니하오)"입니다. "你(당신) + 好(좋다)"의 합성어로 세계에서 가장 많은 사람이 사용하는 언어의 인사말입니다. 더 공손하게는 "您好(닌하오)"를 사용합니다. 일본어 한자(漢字)와 형태가 비슷하지만 발음 체계가 완전히 다릅니다.',
    },
    {
        "q": "이 인사말은 어느 나라(언어)의 인사말인가요?",
        "opts": [
            ("네팔", False),
            ("태국", False),
            ("스리랑카", False),
            ("인도 (힌디어)", True),
        ],
        "explanation": '힌디어 인사말 "नमस्ते(나마스테)"입니다. 산스크리트어에서 유래한 단어로 "당신 안에 있는 신성함에 경의를 표합니다"라는 깊은 의미를 담고 있습니다. 두 손을 모아 합장하며 인사하는 것이 전통 방식입니다. 힌디어는 인도의 공용어 중 하나로 약 6억 명이 사용합니다. 네팔에서도 같은 인사말을 씁니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("아랍에미리트", False),
            ("이란", False),
            ("그리스", False),
            ("터키", True),
        ],
        "explanation": '터키어 인사말 "Merhaba(메르하바)"입니다. 아랍어 "مرحبا(Marhaba)"에서 유래한 단어로 터키를 비롯해 중동·발칸 지역의 여러 언어에서도 비슷한 형태로 사용됩니다. 더 격식 있는 인사말로는 "Günaydın(귀나이든, 좋은 아침)"이 있습니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("아랍에미리트", False),
            ("요르단", False),
            ("레바논", False),
            ("이스라엘 (히브리어)", True),
        ],
        "explanation": '히브리어 인사말 "שָׁלוֹם(샬롬)"입니다. "평화"를 의미하는 단어로 만날 때와 헤어질 때 모두 사용합니다. 히브리어는 약 2,000년간 사용되지 않다가 19세기 말 이스라엘 건국 운동과 함께 부활한 세계 유일의 \'되살아난 언어\'입니다. 아랍어 인사말 "السَّلَامُ عَلَيْكُمْ(앗살라무 알라이쿰)"도 같은 어원의 "살람(السلام)"에서 유래했습니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("우크라이나", False),
            ("불가리아", False),
            ("세르비아", False),
            ("러시아", True),
        ],
        "explanation": '러시아어 비격식 인사말 "Привет(프리빗)"입니다. 친한 사이에 쓰는 "안녕/하이"에 해당하는 말로 격식 있는 인사말은 "Здравствуйте(즈드라스트부이쩨)"입니다. 러시아어는 키릴 문자를 사용하며 약 2억 6천만 명이 모국어 또는 제2언어로 사용합니다. 우크라이나·불가리아·세르비아 등도 키릴 문자를 쓰지만 각각 다른 언어입니다.',
    },
    {
        "q": "이 인사말은 어느 나라(언어)에서 사용하나요?",
        "opts": [
            ("나이지리아", False),
            ("에티오피아", False),
            ("가나", False),
            ("케냐·탄자니아 (스와힐리어)", True),
        ],
        "explanation": '스와힐리어 인사말 "Jambo(잠보)"입니다. 스와힐리어는 아프리카 동부 지역에서 약 2억 명이 사용하는 언어로 케냐·탄자니아·우간다·르완다 등의 공용어입니다. "Jambo"는 주로 외국인에게 친근하게 인사할 때 사용하며 현지인끼리는 "Habari(하바리, 어떻게 지내세요?)"를 더 많이 씁니다. 스와힐리어의 "Hakuna Matata(하쿠나 마타타)"는 "아무 문제 없어"라는 뜻으로도 유명합니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("태국", False),
            ("캄보디아", False),
            ("미얀마", False),
            ("베트남", True),
        ],
        "explanation": '베트남어 인사말 "Xin chào(신짜오)"입니다. "Xin(정중히) + chào(인사하다)"의 합성어로 베트남어는 성조 언어로 같은 글자라도 성조에 따라 뜻이 완전히 달라집니다. 현재 베트남어는 라틴 문자를 변형한 꾸옥응으(Quốc ngữ)를 사용하는데 이는 17세기 프랑스 선교사들이 베트남어를 로마자로 표기하면서 정착된 것입니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어에서 사용하나요?",
        "opts": [
            ("나이지리아 (요루바어)", False),
            ("에티오피아 (암하라어)", False),
            ("이집트 (아랍어)", False),
            ("남아프리카공화국 (줄루어)", True),
        ],
        "explanation": '줄루어 인사말 "Sawubona(사우보나)"입니다. 직역하면 "나는 당신을 봅니다(I see you)"라는 의미로 단순한 인사를 넘어 "당신의 존재를 인정하고 존중합니다"라는 깊은 뜻을 담고 있습니다. 영화 아바타의 "I see you"가 이 인사말에서 영감을 받은 것으로 알려져 있습니다. 줄루어는 남아프리카공화국에서 약 1,200만 명이 사용하며 11개 공용어 중 하나입니다.',
    },
    {
        "q": "이 인사말은 어느 나라의 언어인가요?",
        "opts": [
            ("피지", False),
            ("통가", False),
            ("하와이 (미국)", False),
            ("사모아", True),
        ],
        "explanation": '사모아어 인사말 "Talofa(탈로파)"입니다. "Talo(사랑) + fa(줍니다)"의 합성어로 "사랑을 드립니다"라는 아름다운 의미를 담고 있습니다. 사모아는 남태평양의 섬나라로 인구 약 22만 명이 살며 사모아어와 영어를 공용어로 사용합니다. 비슷한 폴리네시아어 계통의 하와이어 인사말 "Aloha"와 헷갈리기 쉽지만 다른 언어입니다. 여기까지 맞히셨다면 진정한 세계 언어 마스터입니다.',
    },
]

RESULTS = [
    {
        "type": "Level1",
        "emoji": "🌱",
        "title": "오늘 세계를 처음 만난 날, 언어 탐험 새싹 🌱",
        "short": "12개 중 2개 이하를 맞혔습니다. 쉬운 구간에서도 많이 막혔군요. 사실 당연합니다. 세계 언어는 7,000개가 넘으니까요.",
        "desc": '오늘 이 테스트로 "Sawubona"가 I see you라는 뜻이고 "Talofa"가 사랑을 드립니다는 뜻이라는 걸 처음 알게 됐을 것입니다. 그것만으로도 충분합니다.',
        "languageGrade": "언어 고수 등급: Lv.1 탐험 새싹 🌱",
        "scoreRange": "정답 수: 0~2개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "재도전 팁: 오늘 틀린 인사말 해설을 다시 읽고 각 나라 위치를 지도에서 확인하기",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "세계에는 아직 당신이 모르는 인사말이 7,000개 더 있습니다. 오늘 12개를 배웠습니다",
        "share": "세계 인사말 퀴즈: Lv.1 새싹 🌱 Sawubona가 '나는 당신을 봅니다'라는 뜻인 거 오늘 처음 알았음... 세계에 이런 인사말이 있었구나 → 이 인사말 어느 나라 말인지 알아?",
    },
    {
        "type": "Level2",
        "emoji": "🗺️",
        "title": "익숙한 건 알고 낯선 건 모르는, 언어 견습생 🗺️",
        "short": "잘 알려진 인사말은 어느 정도 맞혔는데 중간 이후부터 막히기 시작했군요. 평균 수준입니다.",
        "desc": '프랑스어·일본어는 맞혔지만 스와힐리어·줄루어에서 막혔을 것입니다. 오늘 배운 "Jambo"와 "Sawubona"를 내일 대화에서 한번 써보세요. 분위기가 달라집니다.',
        "languageGrade": "언어 고수 등급: Lv.2 견습생 🗺️",
        "scoreRange": "정답 수: 3~5개",
        "strengthZone": "강점 구간: 쉬운 Q1~Q4",
        "weakZone": "취약 구간: 어려운 Q9~Q12",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "유명한 언어는 알고 있습니다. 이제 그 바깥이 궁금해질 것입니다",
        "share": "세계 인사말 퀴즈: Lv.2 견습생 🗺️ Bonjour·Ciao는 맞혔는데 Jambo에서 막힘... 스와힐리어인 줄 몰랐음 → 이 인사말 어느 나라 말인지 알아? 도전해봐",
    },
    {
        "type": "Level3",
        "emoji": "🧭",
        "title": "여행 좀 해봤거나 언어에 관심 있는, 언어 탐험가 🧭",
        "short": "절반 이상을 맞혔습니다. 평균 이상의 세계 언어 상식입니다.",
        "desc": "힌디어 나마스테, 터키어 메르하바, 히브리어 샬롬 정도는 알고 있는 수준입니다. 스와힐리어·줄루어·사모아어에서 막혔을 것입니다. 이 정도면 해외여행에서 현지인이 기뻐하는 인사 한마디를 건넬 수 있는 사람입니다.",
        "languageGrade": "언어 고수 등급: Lv.3 탐험가 🧭",
        "scoreRange": "정답 수: 6~8개",
        "strengthZone": "강점 구간: 쉬운 + 중간 구간",
        "weakZone": "취약 구간: 어려운 Q9~Q12 (아프리카·오세아니아 언어군)",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "세계가 이미 어느 정도 보이는 사람입니다. 조금만 더 가면 고수입니다",
        "share": "세계 인사말 퀴즈: Lv.3 탐험가 🧭 Namaste·Shalom까지는 맞혔는데 Talofa에서 멘붕... 사모아어인 줄 누가 알겠어 ㅋㅋ → 이 나라 말 알아? 친구한테 도전장 보내봐",
    },
    {
        "type": "Level4",
        "emoji": "🌐",
        "title": "세계 언어 지식이 상당한, 언어 고수 🌐",
        "short": "어려운 구간까지 대부분 맞혔습니다. 상위 15%에 해당하는 세계 언어 지식입니다.",
        "desc": '스와힐리어 잠보, 베트남어 신짜오까지 알고 있다면 평소에 언어·문화·여행에 깊은 관심이 있는 사람일 가능성이 높습니다. "Sawubona"가 \'나는 당신을 봅니다\'라는 의미를 담고 있다는 것도 알고 있었다면 진짜 고수입니다.',
        "languageGrade": "언어 고수 등급: Lv.4 고수 🌐",
        "scoreRange": "정답 수: 9~10개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과를 가진 사람의 특징: 여행을 좋아하거나 언어·문화 콘텐츠를 즐겨 봄",
        "regretPoint": "아쉬운 포인트: 만점까지 2~3개 차이. 틀린 인사말의 해설을 다시 읽어보기",
        "certification": "",
        "oneLiner": "이 결과면 세계 어느 나라에서든 현지 인사 한마디는 건넬 수 있는 사람입니다",
        "share": "세계 인사말 퀴즈: Lv.4 고수 🌐 상위 15%... Xin chào·Sawubona까지 맞혔음 → 이 나라 말 알아? 이거 다 맞히면 언어 고수 인정",
    },
    {
        "type": "Level5",
        "emoji": "🏆",
        "title": "세계 모든 곳이 반가운 사람, 언어 마스터 🏆",
        "short": "11개 또는 12개를 모두 맞혔습니다. 사모아어 탈로파까지 맞혔다면 진정한 세계 언어 마스터입니다.",
        "desc": "줄루어 Sawubona가 '나는 당신을 봅니다'를 의미하고, 사모아어 Talofa가 '사랑을 드립니다'를 의미하는 것까지 알고 있다는 것은 세계 언어에 깊은 관심과 지식을 가진 사람임을 증명합니다.",
        "languageGrade": "언어 고수 등급: Lv.5 마스터 🏆",
        "scoreRange": "정답 수: 11~12개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과가 가능한 경우: 언어학 전공·다국어 구사자·세계 여행 경험자·문화 콘텐츠 애청자",
        "regretPoint": "",
        "certification": "세계 언어 마스터 달성 🏆 사모아어까지 맞혔습니다",
        "oneLiner": "당신은 세계 어디에서나 '반갑습니다'를 알아듣는 사람입니다",
        "share": "세계 인사말 퀴즈: Lv.5 마스터 🏆 사모아어 Talofa까지 맞혔음... 이거 12개 다 아는 사람 있으면 나와봐 → 이 나라 말 알아? 도전해봐",
    },
]

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
IMAGE_PREFIX = "p3_quiz_world_greeting_challenge"


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


HEADER = """/** 나라별 인사말 맞추기 챌린지 — phase3-world-greeting-challenge · 12문항 4지선다 · 정답 +1 오답 0 · 한국어 우선 */

export type Phase3WorldGreetingChallengeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3WorldGreetingChallengeLocaleKey, string>): Record<Phase3WorldGreetingChallengeLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3WorldGreetingChallengeLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3WorldGreetingChallengeLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3WorldGreetingChallengeOption {
  text: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3WorldGreetingChallengeQuestion {
  id: number;
  imageFile: string;
  question: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  options: Phase3WorldGreetingChallengeOption[];
  correctExplanation: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  wrongTraps: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
}

export interface Phase3WorldGreetingChallengeResult {
  type: string;
  emoji: string;
  title: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  shortDescription: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  description: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  languageGrade: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  scoreRange: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  strengthZone: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  weakZone: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  retakeTip: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  characteristic: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  regretPoint: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  certificationPhrase: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  oneLiner: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
  shareLine: Record<Phase3WorldGreetingChallengeLocaleKey, string>;
}

export function calculatePhase3WorldGreetingChallengeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3WorldGreetingChallengeQuestions: Phase3WorldGreetingChallengeQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3WorldGreetingChallengeResults: Phase3WorldGreetingChallengeResult[] = [\n"
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
        "languageGrade": r["languageGrade"],
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

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3WorldGreetingChallengeData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
