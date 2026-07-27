# -*- coding: utf-8 -*-
"""Generate lib/phase3FandomStyleData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "좋아하는 아티스트의 새 앨범이 나왔다. 나는?",
        "opts": [
            "스트리밍으로 듣고 좋은 곡 몇 개를 저장한다",
            "전곡을 여러 번 듣고 내 최애 곡을 정한다",
            "실물 앨범을 구매하고 모든 트랙을 분석한다",
            "발매 전날부터 기다렸다가 자정에 바로 듣고 포토카드 랜덤 뽑기까지 완료한다",
        ],
    },
    {
        "q": "최애가 SNS에 셀카를 올렸다. 나는?",
        "opts": [
            "예쁘다고 생각하며 좋아요를 누른다",
            "저장하고 배경화면으로 설정한다",
            "저장하고 팬 카페/커뮤니티에 공유하며 같이 반응한다",
            "즉시 저장·공유·리트윗을 동시에 하고 사진 속 디테일(배경·착장·표정)까지 분석한다",
        ],
    },
    {
        "q": "좋아하는 아티스트의 굿즈가 출시됐다. 나는?",
        "opts": [
            "예쁘면 하나 정도 살 수도 있다",
            "마음에 드는 것 몇 가지는 구매한다",
            "세트 구성이면 풀세트로 구매하고 진열한다",
            "한정판은 무조건 구매하고 해외 직구도 마다하지 않는다. 품절 알림도 켜놨다",
        ],
    },
    {
        "q": "최애의 과거 콘텐츠(예전 영상·사진·인터뷰)를 발견했다. 나는?",
        "opts": [
            "재밌어 보이면 몇 개 본다",
            "시간 날 때마다 찾아보며 과거 히스토리를 채워간다",
            "체계적으로 정주행하며 연도순으로 정리해둔다",
            "이미 다 봤다. 심지어 기억도 한다. 오늘도 다시 보고 있다",
        ],
    },
    {
        "q": "최애가 콘서트·팬미팅을 한다는 소식이 떴다. 나는?",
        "opts": [
            "가고 싶은데 티켓팅이 어려우면 포기할 수 있다",
            "열심히 티켓팅에 도전하고 되면 당연히 간다",
            "피켓팅을 위해 여러 계정으로 동시 접속하고 안 되면 양도도 찾아본다",
            "이미 일정 비워뒀다. 지방·해외도 간다. 굿즈 교환 목록도 준비 중이다",
        ],
    },
    {
        "q": "팬덤 커뮤니티(카페·디스코드·트위터)에서 나는?",
        "opts": [
            "가끔 눈팅 정도는 한다",
            "가끔 들어가서 덕질 정보를 얻는다",
            "꽤 자주 활동하고 팬들과 소통하는 걸 즐긴다",
            "거의 상주한다. 실시간 이슈를 놓치지 않는다. 온라인 세계에서 팬들이 내 친구다",
        ],
    },
    {
        "q": "최애가 출연한 예능·드라마·영화가 나왔다. 나는?",
        "opts": [
            "재밌을 것 같으면 본다",
            "최애가 나오니까 당연히 본다. 최애 장면 위주로 본다",
            "본방 사수하고 최애 직캠과 교차 편집본까지 챙겨본다",
            "본방·다시보기·직캠·클립·반응 영상까지 전부 챙긴다. 명장면은 gif로 만들어뒀다",
        ],
    },
    {
        "q": "최애에 대한 이야기가 나왔을 때 나는?",
        "opts": [
            '"나 그 사람 좋아해"라고 가볍게 말한다',
            "좋아하는 이유를 설명할 수 있고 신나서 말하게 된다",
            "한번 말하기 시작하면 멈추기 어렵다. 상대방이 모른다면 처음부터 설명해준다",
            "본격적인 입덕 권유가 시작된다. 영상 링크를 보내고 있다",
        ],
    },
    {
        "q": "스트리밍 차트나 음원 성적이 발표됐다. 나는?",
        "opts": [
            "결과가 나왔구나, 하고 넘긴다",
            "성적이 좋으면 뿌듯하고 안 좋으면 아쉽다",
            "직접 스트리밍에 기여하고 차트 순위를 꾸준히 확인한다",
            "스트리밍 프로그램을 켜놓고 멜론·스포티파이·빌보드를 동시에 체크한다. 자정 스밍은 기본이다",
        ],
    },
    {
        "q": "최애와 관련된 굿즈·포토카드를 정리하는 나만의 방식은?",
        "opts": [
            "딱히 없다. 가지고 있어도 그냥 놔둔다",
            "좋아하는 것들은 모아두는 편이다",
            "슬리브·바인더에 넣어서 깔끔하게 정리해둔다",
            "포토카드별로 분류·등급·등록까지 해놨다. 중복 카드는 교환 목록이 따로 있다",
        ],
    },
    {
        "q": "최애를 처음 알게 된 계기와 입덕 속도는?",
        "opts": [
            "자연스럽게 알게 됐고 서서히 좋아졌다",
            "어느 순간 갑자기 좋아졌다는 걸 느꼈다",
            "계기가 된 영상이나 무대가 있고 그 후 빠르게 빠져들었다",
            "입덕 순간이 선명하다. 그 전과 그 후로 인생이 나뉜다",
        ],
    },
    {
        "q": "지금 이 순간 최애를 생각하면?",
        "opts": [
            "그냥 좋다. 편안하게 좋아하고 있다",
            "보고 싶고 다음 활동이 기다려진다",
            "오늘도 덕질할 콘텐츠가 있는지 찾아봐야겠다는 생각이 든다",
            "이미 핸드폰에서 최애 콘텐츠를 보고 있거나 이 테스트를 하면서도 최애 생각을 했다",
        ],
    },
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🎵",
        "title": "가볍고 건강하게, 힐링 감상형",
        "short": "당신의 덕질은 일상에 조용한 즐거움을 더해줍니다. 억지로 챙기지 않아도 좋아하는 마음은 진심입니다.",
        "desc": "음악을 들으며 기분이 좋아지고, 새 콘텐츠가 나오면 반갑고, 좋아요 누르는 것으로 충분한 타입입니다. 덕질이 의무가 아닌 순수한 취향으로 존재합니다. 팬 활동에 크게 에너지를 쓰지 않아도 본인이 좋아한다는 사실은 분명합니다.",
        "fandomType": "힐링 감상형 🎵",
        "keywords": "편안함·취향·가벼운 팬심·일상 속 즐거움",
        "fandomStyle": "스트리밍·유튜브 알고리즘·가끔 라이브 시청",
        "strength": "덕질로 인한 스트레스가 없음. 좋아하는 것이 순수하게 즐거움으로 남음",
        "characteristic": "여러 아티스트를 동시에 좋아하는 경우가 많음. 장르가 넓음",
        "bestBias": "활동이 꾸준하고 음악·콘텐츠 퀄리티가 높은 아티스트",
        "oneLiner": "좋아하는 방법에 옳고 그름이 없습니다. 이 방식이 당신에게 가장 잘 맞습니다",
        "certification": "",
        "share": "내 덕질 유형: 힐링 감상형 🎵 가볍게 즐기는 팬이래... 억지로 챙기지 않아도 좋아하는 마음은 진짜임 → 너는 어떤 덕질 유형이야?",
    },
    {
        "type": "Type2",
        "emoji": "💙",
        "title": "감정으로 연결되는, 감성 몰입형",
        "short": "당신은 최애의 음악·무대·감정이 자신의 감정과 연결될 때 가장 강하게 반응합니다.",
        "desc": "노래 가사가 마음에 와닿고, 무대 표정 하나에 울컥하고, 최애가 힘들다고 하면 같이 힘들어지는 타입입니다. 굿즈나 스트리밍 수치보다 최애와의 감정적 연결이 덕질의 핵심입니다.",
        "fandomType": "감성 몰입형 💙",
        "keywords": "감정·공감·세계관·서사",
        "fandomStyle": "음악 정주행·뮤직비디오 반복 감상·인터뷰·편지 쓰기",
        "strength": "최애의 아름다운 면을 가장 깊이 느끼는 감수성",
        "characteristic": "최애가 힘든 시기에 팬심이 더 강해지는 경향. 서사형 아티스트에게 강하게 빠짐",
        "bestBias": "뚜렷한 세계관·감성적인 가사·진정성 있는 소통을 하는 아티스트",
        "oneLiner": "당신은 최애의 음악을 가장 깊이 듣는 사람입니다",
        "certification": "",
        "share": "내 덕질 유형: 감성 몰입형 💙 최애 가사에 울컥하는 유형... 감정으로 덕질하는 거 맞음 ㅠ → 맞아 나 이런 덕질 함 ㅋㅋ 너는?",
    },
    {
        "type": "Type3",
        "emoji": "📱",
        "title": "모든 콘텐츠를 섭렵하는, 콘텐츠 정주행형",
        "short": "당신은 최애가 남긴 모든 흔적을 놓치지 않습니다. 과거 영상부터 실시간 게시물까지.",
        "desc": "새 콘텐츠가 올라오면 바로 확인하고, 예전 영상을 정주행하고, 팬 커뮤니티에서 놓친 정보를 채우고, 최애의 역사를 꽤 잘 알고 있습니다. 소비형 덕질의 끝판왕에 가까운 타입입니다.",
        "fandomType": "콘텐츠 정주행형 📱",
        "keywords": "정주행·아카이브·콘텐츠·히스토리",
        "fandomStyle": "영상 정주행·클립 저장·팬 커뮤니티 활동·직캠 수집",
        "strength": "최애에 대해 아는 게 많아서 입덕 권유 시 가장 강력한 설득력을 가짐",
        "characteristic": "최애가 콘텐츠를 많이 낼수록 더 행복해짐. 영상 알림은 항상 켜져 있음",
        "bestBias": "콘텐츠 생산이 활발하고 브이로그·예능·SNS 활동이 많은 아티스트",
        "oneLiner": "당신이 있는 한 최애의 콘텐츠는 사라지지 않습니다",
        "certification": "",
        "share": "내 덕질 유형: 콘텐츠 정주행형 📱 최애 영상 다 봤음... 과거 콘텐츠 정주행하는 거 완전 나 ㅋㅋ → 너는 어떤 덕질 유형이야?",
    },
    {
        "type": "Type4",
        "emoji": "🎤",
        "title": "팬 활동이 즐거운, 팬덤 활동가형",
        "short": "당신의 덕질은 최애뿐만 아니라 같은 팬덤과의 연결에서도 에너지를 얻습니다.",
        "desc": "콘서트에서 같이 소리 지르고, 커뮤니티에서 팬들과 소통하고, 스트리밍·음방 투표에 참여하고, 최애의 성적에 내 일처럼 기뻐하는 타입입니다. 혼자 좋아하는 것보다 같이 좋아하는 것이 더 즐겁습니다.",
        "fandomType": "팬덤 활동가형 🎤",
        "keywords": "팬덤·응원·공유·연대",
        "fandomStyle": "콘서트·음방 투표·스트리밍·팬 커뮤니티 활동·소통",
        "strength": "팬덤에 긍정적인 에너지를 불어넣는 존재. 함께하는 덕질의 즐거움을 앎",
        "characteristic": "최애 성적이 잘 나올 때 팬심이 더 강해짐. 응원봉을 이미 갖고 있음",
        "bestBias": "팬과의 소통이 활발하고 팬덤 문화가 건강한 아티스트",
        "oneLiner": "덕질은 혼자보다 같이가 더 즐거운 것임을 당신은 알고 있습니다",
        "certification": "",
        "share": "내 덕질 유형: 팬덤 활동가형 🎤 같이 덕질하는 게 제일 재밌는 유형... 음방 투표·스밍 이미 하고 있음 → 맞아 나 이런 덕질 함 ㅋㅋ 너는?",
    },
    {
        "type": "Type5",
        "emoji": "⭐",
        "title": "최애가 일상의 중심인, 하드코어 덕후형",
        "short": "당신의 일정, 지출, 감정이 최애와 연결돼 있습니다. 덕질이 취미가 아닌 삶의 방식입니다.",
        "desc": "티켓팅을 위해 일정을 비워두고, 한정판 굿즈를 위해 예산을 따로 잡아두고, 최애 활동이 없는 날은 과거 콘텐츠를 다시 봅니다. 주변 사람들이 이미 알고 있습니다. 당신이 그 아티스트를 엄청나게 좋아한다는 걸.",
        "fandomType": "하드코어 덕후형 ⭐",
        "keywords": "몰입·헌신·굿즈·현장·모든 것",
        "fandomStyle": "콘서트 현장·굿즈 풀세트·포토카드 수집·직캠·스밍·해외 원정 포함",
        "strength": "최애에 대해 가장 많이 알고 가장 열정적으로 지지함",
        "characteristic": "덕질 친구와의 유대가 깊음. 최애와 관련된 기억이 삶의 좋은 추억이 됨",
        "bestBias": "월드투어·다양한 콘텐츠·꾸준한 활동·팬과의 소통이 있는 아티스트",
        "oneLiner": "당신의 덕질은 진심입니다. 그리고 그 진심이 최애에게도 분명히 닿고 있습니다",
        "certification": "",
        "share": "내 덕질 유형: 하드코어 덕후형 ⭐ 덕질이 삶의 방식이래... 굿즈방 있고 자정 스밍 기본이고 맞음 ㅋㅋ → 너는 어떤 유형이야?",
    },
    {
        "type": "Type6",
        "emoji": "🌟",
        "title": "덕질이 인생인 사람, 덕업일치 마스터형",
        "short": "최애를 만나기 전과 후로 인생이 나뉩니다. 이미 모든 걸 해봤고 지금도 하고 있습니다.",
        "desc": "자정 스트리밍은 기본이고, 굿즈방이 따로 있거나 방 한쪽이 굿즈로 채워져 있고, 팬 커뮤니티에서 상당한 존재감이 있고, 입덕 권유 성공 사례가 여러 개 있는 타입입니다. 최애를 좋아한다는 것이 자신의 정체성 중 하나가 됐습니다.",
        "fandomType": "덕업일치 마스터형 🌟",
        "keywords": "정체성·헌신·전문가·아카이브·공동체",
        "fandomStyle": "모든 것. 스밍·굿즈·콘서트·해외 원정·입덕 권유·팬 창작물 등",
        "strength": "최애에 대해 그 누구보다 잘 알고 지지함. 팬덤의 핵심 구성원",
        "characteristic": "덕질을 통해 만든 인연들이 진짜 친구가 됨. 덕질이 삶을 풍요롭게 만든다는 걸 앎",
        "bestBias": "오래 활동하며 팬과 함께 성장하는 아티스트. 솔직하고 진정성 있는 소통",
        "oneLiner": "당신이 좋아하는 방식이 가장 뜨겁고 가장 아름다운 덕질입니다",
        "certification": "덕업일치 마스터 달성 🌟 나의 덕질은 진심 그 자체",
        "share": "내 덕질 유형: 덕업일치 마스터형 🌟 최애 만나기 전후로 인생이 나뉜대... 사실임 ㅋㅋ → 맞아 나 이런 덕질 함 ㅋㅋ 팬덤 친구들 다 해봐",
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


HEADER = """/** 나의 덕질 성향 진단 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 한국어 우선 */

export type Phase3FandomStyleLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3FandomStyleLocaleKey, string>): Record<Phase3FandomStyleLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3FandomStyleLocaleKey, string>, score: number): { text: Record<Phase3FandomStyleLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3FandomStyleQuestion {
  id: number;
  question: Record<Phase3FandomStyleLocaleKey, string>;
  options: { text: Record<Phase3FandomStyleLocaleKey, string>; score: number }[];
}

export interface Phase3FandomStyleResult {
  type: string;
  emoji: string;
  title: Record<Phase3FandomStyleLocaleKey, string>;
  shortDescription: Record<Phase3FandomStyleLocaleKey, string>;
  description: Record<Phase3FandomStyleLocaleKey, string>;
  fandomType: Record<Phase3FandomStyleLocaleKey, string>;
  fandomKeywords: Record<Phase3FandomStyleLocaleKey, string>;
  fandomStyle: Record<Phase3FandomStyleLocaleKey, string>;
  strength: Record<Phase3FandomStyleLocaleKey, string>;
  characteristic: Record<Phase3FandomStyleLocaleKey, string>;
  bestBiasType: Record<Phase3FandomStyleLocaleKey, string>;
  oneLiner: Record<Phase3FandomStyleLocaleKey, string>;
  certificationPhrase: Record<Phase3FandomStyleLocaleKey, string>;
  shareLine: Record<Phase3FandomStyleLocaleKey, string>;
}

export function calculatePhase3FandomStyleResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3FandomStyleQuestions: Phase3FandomStyleQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3FandomStyleResults: Phase3FandomStyleResult[] = [\n"
FOOTER_END = "];\n"

NOTE_KO = "※ 덕질 중이거나 덕질 경험이 있다면 그때를 떠올리며, 없다면 가장 좋아하는 것을 기준으로 답하세요."


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
        "fandomType": r["fandomType"],
        "fandomKeywords": r["keywords"],
        "fandomStyle": r["fandomStyle"],
        "strength": r["strength"],
        "characteristic": r["characteristic"],
        "bestBiasType": r["bestBias"],
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

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3FandomStyleData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
