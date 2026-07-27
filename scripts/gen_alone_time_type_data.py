# -*- coding: utf-8 -*-
"""Generate lib/phase3AloneTimeTypeData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "오늘 하루 종일 완전히 혼자다. 제일 먼저 하는 것은?",
        "opts": [
            "일단 눕는다. 특별히 계획 같은 건 없다. 그냥 눕는 게 먼저다",
            "이어폰을 끼거나 틀어놓을 영상이나 음악을 고른다",
            "하고 싶었던 게임·취미·운동 중 오늘 뭘 할지 정한다",
            "해야 할 것들 또는 하고 싶었던 것들을 머릿속으로 정리하기 시작한다",
        ],
    },
    {
        "q": "혼자 있는 시간에 가장 자주 하는 행동은?",
        "opts": [
            "멍 때리거나 자거나 아무것도 안 한다. 뇌를 쉬게 두는 것",
            "유튜브·넷플릭스·릴스·숏폼을 본다. 콘텐츠 소비가 중심이다",
            "게임·독서·그림·운동 등 정해진 취미 활동을 한다",
            "공부하거나 사이드 프로젝트를 진행하거나 뭔가를 만든다",
        ],
    },
    {
        "q": '혼자 있는 시간이 끝났을 때 "잘 쉬었다"는 느낌이 드는 순간은?',
        "opts": [
            "아무것도 안 하고 그냥 있었는데 왠지 몸이 좀 가벼워진 것 같을 때",
            "보고 싶었던 콘텐츠를 다 봤거나 플레이리스트가 딱 끝났을 때",
            "좋아하는 취미를 실컷 했을 때. 게임 클리어·책 완독·운동 완료",
            "계획했던 것을 하나라도 해냈을 때. 뭔가 쌓인 게 있을 때",
        ],
    },
    {
        "q": "혼자 있는 시간에 핸드폰을 어떻게 쓰는가?",
        "opts": [
            "딱히 많이 안 본다. 그냥 내려놓고 있는 경우가 많다",
            "계속 보고 있다. 알고리즘이 주는 걸 그냥 계속 보게 된다",
            "취미 관련 정보나 커뮤니티를 보거나 게임을 한다",
            "배울 것을 찾거나 저장해두거나 생산적인 용도로 쓴다",
        ],
    },
    {
        "q": "혼자 있는 시간이 길어질수록 나는?",
        "opts": [
            "더 좋다. 길수록 더 편안하고 충전이 잘 된다",
            "적당히까지는 좋은데 너무 길어지면 좀 심심해진다",
            "할 게 있으면 계속 괜찮고 없으면 슬슬 뭔가 찾게 된다",
            "시간이 아까워진다. 뭔가 해야 할 것 같은 느낌이 든다",
        ],
    },
    {
        "q": "혼자 있을 때 먹는 것은?",
        "opts": [
            "딱히 차려먹지 않는다. 있는 거 대충 먹거나 굶거나",
            "좋아하는 걸 시켜 먹거나 분위기 있게 먹는다. 먹는 것도 콘텐츠처럼 즐긴다",
            "뭐 먹을지 고르는 것도 취미처럼 즐긴다. 혼밥을 꽤 잘한다",
            "효율적으로 해결하거나 건강을 생각해서 챙겨 먹는다",
        ],
    },
    {
        "q": "혼자 있는 방의 분위기는?",
        "opts": [
            "조명 그대로, 소리 없이, 아무것도 안 틀어놓은 채로 그냥 있는다",
            "좋아하는 플레이리스트나 영상을 틀어놓는다. 배경음이 있어야 편하다",
            "취미 도구들이 펼쳐져 있거나 게임 화면이 켜져 있다",
            "노트북이 열려 있거나 메모지와 펜이 놓여있다",
        ],
    },
    {
        "q": "혼자 있는 시간에 갑자기 연락이 오면 나는?",
        "opts": [
            "나중에 보게 된다. 핸드폰 자체를 잘 안 보고 있어서",
            "보긴 보는데 지금 콘텐츠 보는 중이라 답장은 나중에 한다",
            "지금 뭔가 하는 중이라 잠깐 멈추고 확인하고 다시 돌아온다",
            "빠르게 확인하고 중요한 것만 처리한다. 집중 모드를 깨고 싶지 않다",
        ],
    },
    {
        "q": "혼자 있는 시간이 가장 풍요롭게 느껴지는 순간은?",
        "opts": [
            "아무것도 안 해도 되는 상태가 확인됐을 때. 자유가 보장된 그 순간",
            "딱 좋아하는 콘텐츠를 발견했을 때. 알고리즘이 나를 이해한 것 같은 순간",
            "취미에 완전히 집중해서 시간 가는 줄 몰랐을 때. 몰입 그 자체",
            "혼자 조용히 뭔가를 해냈을 때. 아무도 모르지만 나는 안다",
        ],
    },
    {
        "q": "혼자 있는 시간에 감정이 올라올 때 나는?",
        "opts": [
            "그냥 둔다. 생각도 감정도 흘러가게 놔둔다. 억지로 처리하려 하지 않는다",
            "그 감정에 맞는 음악을 찾거나 관련 콘텐츠를 본다. 감정을 콘텐츠로 다룬다",
            "좋아하는 것에 집중하면서 자연스럽게 잊어버린다. 몰입이 최고의 처방이다",
            "일기를 쓰거나 메모하거나 생각을 정리한다. 글로 써야 해결된 느낌이 난다",
        ],
    },
    {
        "q": "혼자 있는 시간에 가장 싫은 것은?",
        "opts": [
            "갑자기 누군가 와서 그 고요함이 깨지는 것",
            "와이파이가 안 되거나 볼 게 없거나 배터리가 닳는 것",
            "하려던 게 뭔가 이유로 안 되는 것. 게임 버그·취미 도구 없음 등",
            "시간을 낭비한 것 같은 느낌. 아무것도 안 하고 시간만 간 것 같을 때",
        ],
    },
    {
        "q": "지금 이 테스트를 하고 있는 상황은?",
        "opts": [
            "딱히 뭘 하려던 건 아닌데 그냥 하게 됐다. 무계획 혼자 시간 중이다",
            "릴스·유튜브 보다가 알고리즘이 이걸 추천해줘서 하게 됐다",
            "잠깐 쉬는 타임에 재밌을 것 같아서 해본다. 다 하면 다시 하던 거 할 것이다",
            "이 테스트 결과를 저장하거나 메모할 생각이 이미 있다",
        ],
    },
]

RESULTS = [
    {
        "type": "Type1",
        "emoji": "🛋️",
        "title": "아무것도 안 하는 게 진짜 휴식, 완전 방전 충전형",
        "short": "당신의 찐 혼자 시간은 아무것도 안 하는 시간입니다. 그게 낭비처럼 보여도 당신에게는 그게 제일 필요한 것입니다.",
        "desc": "할 일도 볼 것도 들을 것도 없는 상태. 그냥 멍하니 있거나 자거나 천장만 바라보는 시간이 진짜 충전입니다. 사람들은 그걸 보고 \"뭐해?\"라고 하지만 당신은 알고 있습니다. 이게 가장 깊은 휴식이라는 걸.",
        "soloTimeType": "완전 방전 충전형 🛋️",
        "keywords": "고요·비움·뇌 정지·무계획·방전 후 재시작",
        "actualBehavior": "자기·멍 때리기·핸드폰도 안 보기·그냥 누워있기",
        "strength": "완전히 쉬는 능력. 아무것도 안 하는 것을 죄책감 없이 할 수 있으면 진짜 강한 사람임",
        "characteristic": "외부 자극이 많은 날일수록 더 완전한 고요가 필요함. 배터리 0%에서 완충하는 방식",
        "difficultSituation": "혼자 있어야 하는데 자꾸 뭔가 해야 할 것 같은 압박이 올 때",
        "whatTheyNeed": "아무도 연락하지 않는 하루. 계획 없는 주말 오전",
        "oneLiner": "아무것도 안 하는 것도 실력입니다. 당신은 그 실력이 있습니다",
        "certification": "",
        "share": "내 찐 혼자 시간 유형: 완전 방전 충전형 🛋️ 아무것도 안 하는 게 최고래... 눕는 게 먼저인 거 완전 맞음 → 혼자 시간 이럼 공감? 너는 어떤 유형이야",
    },
    {
        "type": "Type2",
        "emoji": "📱",
        "title": "콘텐츠와 감성으로 채우는, 감성 흡수형",
        "short": "당신의 찐 혼자 시간은 알고리즘과의 데이트입니다. 릴스·유튜브·플레이리스트·드라마. 이게 있으면 몇 시간이고 혼자서 완벽합니다.",
        "desc": "아무도 없을 때 이어폰부터 끼는 타입입니다. 틀어놓을 것만 정해지면 혼자 시간이 완성됩니다. 음악이 분위기를 만들고 콘텐츠가 감성을 채우고 알고리즘이 다음 것을 추천해줍니다. 유튜브 시청 시간이 어마어마한 유형입니다.",
        "soloTimeType": "감성 흡수형 📱",
        "keywords": "콘텐츠·감성·플레이리스트·알고리즘·분위기",
        "actualBehavior": "유튜브 정주행·릴스·드라마·음악 틀어놓고 뒹굴기",
        "strength": "어떤 상황에서도 콘텐츠만 있으면 혼자서 완전한 시간을 보낼 수 있음",
        "characteristic": "분위기에 민감함. 혼자 있을 때 음악이나 영상의 톤이 그날 기분을 좌우함",
        "difficultSituation": "와이파이가 없거나 배터리가 없거나 볼 게 없을 때. 진짜 공황 상태",
        "whatTheyNeed": "충분히 충전된 기기와 방해받지 않는 시간",
        "oneLiner": "당신의 알고리즘은 당신을 잘 알고 있습니다. 오늘도 딱 맞는 걸 추천해줄 겁니다",
        "certification": "",
        "share": "내 찐 혼자 시간 유형: 감성 흡수형 📱 알고리즘이랑 데이트하는 유형이래... 릴스 보다가 이 테스트 한 거 들켰음 ㅋㅋ → 혼자 시간 이럼 공감? 너는?",
    },
    {
        "type": "Type3",
        "emoji": "🎮",
        "title": "좋아하는 것에 완전히 빠지는, 취미 몰입형",
        "short": "당신의 찐 혼자 시간은 몰입의 시간입니다. 게임 클리어, 책 완독, 운동 완료. 뭔가 끝났을 때 찐 충전이 됩니다.",
        "desc": "혼자 있는 시간에 가장 자주 생각나는 게 있습니다. 게임이거나 독서거나 그림이거나 운동이거나. 그걸 실컷 할 수 있는 시간이 생기면 그 시간이 최고입니다. 몰입 상태에서는 시간 가는 줄 모릅니다.",
        "soloTimeType": "취미 몰입형 🎮",
        "keywords": "몰입·취미·집중·달성·나만의 루틴",
        "actualBehavior": "게임·독서·그림·운동·요리·악기 등 정해진 취미 활동",
        "strength": "혼자 있는 시간을 가장 알차게 보내는 타입. 몰입 능력이 탁월함",
        "characteristic": "취미가 없는 날보다 취미가 있는 날이 훨씬 잘 쉰 느낌이 남",
        "difficultSituation": "취미 도구가 없거나 취미를 즐길 수 없는 환경일 때",
        "whatTheyNeed": "방해받지 않는 충분한 취미 시간. 중간에 끊기지 않는 것",
        "oneLiner": "당신은 혼자 있는 시간을 가장 잘 쓰는 사람입니다. 그 시간이 당신을 채웁니다",
        "certification": "",
        "share": "내 찐 혼자 시간 유형: 취미 몰입형 🎮 시간 가는 줄 모르고 몰입하는 유형이래... 게임 클리어하고 시계 보면 새벽 4시 맞음 ㅋㅋ → 너는 어떤 유형이야?",
    },
    {
        "type": "Type4",
        "emoji": "🖊️",
        "title": "생각하고 기록하고 정리하는, 내면 사색형",
        "short": "당신의 찐 혼자 시간은 나 자신과 대화하는 시간입니다. 일기·메모·사색·멍 때리기 같지만 실은 엄청나게 많은 생각을 하고 있습니다.",
        "desc": "혼자 있으면 자연스럽게 생각이 많아집니다. 요즘 내 감정은 어떤지, 이 관계가 맞는지, 앞으로 어떻게 살고 싶은지. 그 생각들을 일기에 쓰거나 메모에 정리하거나 그냥 창밖을 보며 흘려보내는 것이 진짜 혼자 시간입니다.",
        "soloTimeType": "내면 사색형 🖊️",
        "keywords": "사색·기록·감정 정리·일기·내면 탐구",
        "actualBehavior": "일기 쓰기·메모·창밖 보기·과거 기록 다시 읽기·멍 때리며 생각하기",
        "strength": "자기 자신을 잘 아는 사람. 감정과 생각을 언어로 정리하는 능력이 탁월함",
        "characteristic": "혼자 있을수록 자기 이해가 깊어짐. 생각을 정리해야 다음 단계로 나아갈 수 있는 타입",
        "difficultSituation": "혼자 생각할 시간이 없을 때. 생각이 쌓인 채로 계속 사람을 만나야 할 때",
        "whatTheyNeed": "아무것도 하지 않아도 되는, 생각할 수 있는 조용한 시간",
        "oneLiner": "당신은 혼자 있을 때 가장 성장합니다. 그 시간이 당신을 만들어가고 있습니다",
        "certification": "",
        "share": "내 찐 혼자 시간 유형: 내면 사색형 🖊️ 혼자 있으면 생각이 많아지는 유형이래... 창밖 보다가 한 시간 지나있는 거 맞음 → 혼자 시간 이럼 공감? 너는?",
    },
    {
        "type": "Type5",
        "emoji": "💻",
        "title": "혼자서도 배우고 채우는, 자기계발 충전형",
        "short": "당신의 찐 혼자 시간은 조용한 성장의 시간입니다. 아무도 모르지만 혼자 있을 때 가장 많은 것을 배우고 쌓습니다.",
        "desc": "혼자 있는 시간이 생기면 자연스럽게 배울 것을 찾거나 미뤄뒀던 것을 합니다. 클래스 101 강의, 유튜브 공부 영상, 읽어야 할 책, 사이드 프로젝트. 쉰다는 게 아무것도 안 하는 게 아니라 내가 하고 싶은 걸 하는 것이라 생각합니다.",
        "soloTimeType": "자기계발 충전형 💻",
        "keywords": "성장·배움·미뤄뒀던 것·조용한 생산성·혼자 하는 것들",
        "actualBehavior": "온라인 강의·공부·자격증 준비·사이드 프로젝트·책",
        "strength": "시간을 낭비했다는 느낌을 가장 적게 갖는 타입. 혼자 있는 시간이 쌓이면 달라져 있음",
        "characteristic": "혼자 있을 때 오히려 생산적임. 사람과 함께 있을 때보다 더 집중이 잘 됨",
        "difficultSituation": "뭔가 하려는데 환경이 안 될 때. 집중이 안 되는 날 혼자 있으면 더 답답함",
        "whatTheyNeed": "완벽한 집중 환경과 방해 없는 시간. 그리고 가끔은 아무것도 안 해도 된다는 허락",
        "oneLiner": "당신의 혼자 시간은 아무도 보지 않는 곳에서 가장 많이 성장하는 시간입니다",
        "certification": "",
        "share": "내 찐 혼자 시간 유형: 자기계발 충전형 💻 혼자 있을 때 오히려 더 생산적인 유형이래... 혼자 있어야 집중 잘 됨 맞음 → 혼자 시간 이럼 공감? 너는 어떤 유형이야?",
    },
    {
        "type": "Type6",
        "emoji": "🎨",
        "title": "혼자 있으면 더 바빠지는, 창작 생산형",
        "short": "당신의 찐 혼자 시간은 가장 생산적인 시간입니다. 혼자 있을 때 오히려 더 많은 것을 만들고 더 많은 것이 완성됩니다.",
        "desc": "혼자 있는 시간이 생기면 작업 모드가 됩니다. 그림을 그리거나 글을 쓰거나 음악을 만들거나 영상을 편집하거나. 만드는 과정 자체가 즐겁고 뭔가가 완성됐을 때 가장 충만합니다. 남들은 어떻게 혼자 있으면서 그렇게 많이 만드냐고 하는데 당신에게는 그게 쉬는 거고 노는 겁니다.",
        "soloTimeType": "창작 생산형 🎨",
        "keywords": "창작·표현·만들기·완성·혼자 작업",
        "actualBehavior": "그림·글쓰기·음악 작업·영상 편집·공예·코딩·요리 창작 등",
        "strength": "혼자 있는 시간이 생기면 결과물이 나옴. 세상에서 가장 효율적인 혼자 시간 사용자",
        "characteristic": "창작 중에는 연락도 끊기고 밥도 까먹음. 완전 몰입 상태가 자주 옴",
        "difficultSituation": "만들고 싶은데 아이디어가 없거나 도구가 없을 때. 창작 슬럼프",
        "whatTheyNeed": "방해받지 않는 긴 시간 덩어리. 집중을 깨는 알림 없는 환경",
        "oneLiner": "당신이 혼자 있는 동안 세상에 없던 것들이 만들어지고 있습니다",
        "certification": "창작 생산형 🎨 혼자 있으면 더 바빠짐 인증 완료",
        "share": "내 찐 혼자 시간 유형: 창작 생산형 🎨 혼자 있으면 더 바빠지는 유형이래... 만들다 보면 밥 까먹는 거 인정 ㅋㅋ → 혼자 시간 이럼 공감? 너는 어떤 유형이야?",
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


HEADER = """/** 나의 '찐 혼자 시간' 유형 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 한국어 우선 */

export type Phase3AloneTimeTypeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3AloneTimeTypeLocaleKey, string>): Record<Phase3AloneTimeTypeLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3AloneTimeTypeLocaleKey, string>, score: number): { text: Record<Phase3AloneTimeTypeLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3AloneTimeTypeQuestion {
  id: number;
  question: Record<Phase3AloneTimeTypeLocaleKey, string>;
  options: { text: Record<Phase3AloneTimeTypeLocaleKey, string>; score: number }[];
}

export interface Phase3AloneTimeTypeResult {
  type: string;
  emoji: string;
  title: Record<Phase3AloneTimeTypeLocaleKey, string>;
  shortDescription: Record<Phase3AloneTimeTypeLocaleKey, string>;
  description: Record<Phase3AloneTimeTypeLocaleKey, string>;
  soloTimeType: Record<Phase3AloneTimeTypeLocaleKey, string>;
  soloKeywords: Record<Phase3AloneTimeTypeLocaleKey, string>;
  actualBehavior: Record<Phase3AloneTimeTypeLocaleKey, string>;
  strength: Record<Phase3AloneTimeTypeLocaleKey, string>;
  characteristic: Record<Phase3AloneTimeTypeLocaleKey, string>;
  difficultSituation: Record<Phase3AloneTimeTypeLocaleKey, string>;
  whatTheyNeed: Record<Phase3AloneTimeTypeLocaleKey, string>;
  oneLiner: Record<Phase3AloneTimeTypeLocaleKey, string>;
  certificationPhrase: Record<Phase3AloneTimeTypeLocaleKey, string>;
  shareLine: Record<Phase3AloneTimeTypeLocaleKey, string>;
}

export function calculatePhase3AloneTimeTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3AloneTimeTypeQuestions: Phase3AloneTimeTypeQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3AloneTimeTypeResults: Phase3AloneTimeTypeResult[] = [\n"
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
        "soloTimeType": r["soloTimeType"],
        "soloKeywords": r["keywords"],
        "actualBehavior": r["actualBehavior"],
        "strength": r["strength"],
        "characteristic": r["characteristic"],
        "difficultSituation": r["difficultSituation"],
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

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3AloneTimeTypeData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
