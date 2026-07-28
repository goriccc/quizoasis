# -*- coding: utf-8 -*-
"""Generate lib/phase3KpopHistoryMasterData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "SM엔터테인먼트를 통해 1996년 데뷔한 이 그룹은 기획사 주도의 아이돌 시스템을 처음으로 정착시키며 1세대 K-팝의 시작을 알렸다고 평가받습니다. 이 그룹은?",
        "opts": [
            ("젝스키스", False),
            ("서태지와 아이들", False),
            ("god", False),
            ("H.O.T", True),
        ],
        "explanation": 'H.O.T(High-five Of Teenagers)는 1996년 9월 7일 데뷔곡 "전사의 후예"로 데뷔했습니다. SM엔터테인먼트가 기획하고 트레이닝 시스템으로 육성한 최초의 아이돌 그룹으로 팬클럽·팬덤 문화를 만들어낸 K-팝 1세대의 상징입니다. 서태지와 아이들은 1992년 데뷔했지만 기획사 중심 아이돌 시스템 이전의 그룹으로 분류됩니다.',
    },
    {
        "q": "1세대 대표 걸그룹 S.E.S의 멤버가 아닌 사람은?",
        "opts": [
            ("바다 (Sea)", False),
            ("이효리", True),
            ("슈 (Shoo)", False),
            ("유진 (Eugene)", False),
        ],
        "explanation": "S.E.S는 바다·유진·슈 세 명으로 구성된 1세대 대표 걸그룹입니다. 그룹명 S.E.S는 세 멤버의 영어 이름 Sea·Eugene·Shoo의 앞글자를 따왔습니다. 이효리는 같은 시대의 1세대 걸그룹 핑클(FinKL)의 멤버입니다. S.E.S와 핑클은 1세대 걸그룹 양대 산맥으로 불리며 팬들 사이의 라이벌 구도로도 유명했습니다.",
    },
    {
        "q": '2012년 발표한 "강남스타일"로 유튜브 역사상 최초로 10억 뷰를 돌파하며 K-팝을 전 세계에 알린 아티스트는?',
        "opts": [
            ("비 (Rain)", False),
            ("보아 (BoA)", False),
            ("2NE1", False),
            ("싸이 (PSY)", True),
        ],
        "explanation": '싸이의 "강남스타일"은 2012년 7월 발매 후 그해 12월 유튜브 역사상 최초로 10억 뷰를 돌파했습니다. 당시 유튜브 조회수 카운터가 10억을 초과할 수 없도록 설계되어 있어 유튜브 측에서 카운터 자체를 수정해야 했을 정도였습니다. K-팝이 아시아를 넘어 북미·유럽에 알려지는 결정적 계기가 된 곡입니다.',
    },
    {
        "q": "2003년 SM엔터테인먼트를 통해 데뷔한 후 일본을 비롯한 아시아 전역에서 폭발적인 인기를 얻으며 K-팝 2세대의 문을 열었다고 평가받는 그룹은?",
        "opts": [
            ("신화", False),
            ("god", False),
            ("동방신기 (TVXQ)", True),
            ("SS501", False),
        ],
        "explanation": "동방신기(TVXQ, 東方神起)는 2003년 12월 데뷔해 일본 시장을 정면 공략하며 K-팝이 아시아 전역으로 확산되는 데 결정적인 역할을 했습니다. 일본에서 외국 아티스트 최초로 돔 투어를 성공시킨 그룹으로 약 80만 명에 달하는 일본 팬클럽 카시오페아는 기네스북에 등재된 세계 최대 규모의 팬클럽으로 알려졌습니다.",
    },
    {
        "q": '2006년 데뷔해 "거짓말"·"뱅뱅뱅"·"하루하루" 등 수많은 히트곡을 남기며 2세대 K-팝을 대표하는 빅뱅(BIGBANG)의 소속사는?',
        "opts": [
            ("SM엔터테인먼트", False),
            ("JYP엔터테인먼트", False),
            ("YG엔터테인먼트", True),
            ("큐브엔터테인먼트", False),
        ],
        "explanation": "빅뱅은 2006년 YG엔터테인먼트를 통해 데뷔했습니다. YG는 1996년 양현석·지누션·원타임으로 구성된 힙합 레이블로 시작했으며 이후 빅뱅·2NE1·위너·iKON·BLACKPINK 등을 배출한 K-팝 3대 기획사 중 하나입니다. 참고로 SM은 H.O.T·동방신기·소녀시대·엑소·BTS 전 소속 그룹들, JYP는 원더걸스·2PM·트와이스·스트레이 키즈 등을 배출했습니다.",
    },
    {
        "q": '2007년 8월 SM엔터테인먼트를 통해 9인조로 데뷔해 이후 "Gee"·"소원을 말해봐" 등 수많은 히트곡을 기록한 소녀시대의 데뷔곡은?',
        "opts": [
            ("Gee", False),
            ("Oh!", False),
            ("소원을 말해봐", False),
            ("다시 만난 세계", True),
        ],
        "explanation": '소녀시대는 2007년 8월 2일 "다시 만난 세계(Into the New World)"로 데뷔했습니다. 이 곡은 데뷔 당시보다 이후 시간이 지날수록 명곡으로 재평가받으며 현재까지도 소녀시대를 대표하는 곡 중 하나로 꼽힙니다. "Gee"는 2009년 발매된 히트곡으로 데뷔곡이 아닙니다.',
    },
    {
        "q": '2013년 빅히트엔터테인먼트(현 HYBE)를 통해 데뷔곡 "No More Dream"으로 데뷔한 방탄소년단(BTS)의 데뷔 연도와 날짜로 올바른 것은?',
        "opts": [
            ("2012년 6월 13일", False),
            ("2013년 5월 13일", False),
            ("2013년 6월 13일", True),
            ("2014년 6월 13일", False),
        ],
        "explanation": '방탄소년단(BTS)은 2013년 6월 13일 데뷔곡 "No More Dream"으로 데뷔했습니다. 데뷔 당시 업계에서 주목받지 못했지만 이후 자체 제작 콘텐츠와 SNS 소통으로 팬덤 아미(ARMY)를 키우며 세계 최정상 K-팝 그룹으로 성장했습니다. 매년 6월 13일은 아미들이 기념하는 BTS 데뷔 기념일입니다.',
    },
    {
        "q": '2007년 "Tell Me" 신드롬을 일으키며 K-팝 걸그룹의 새 역사를 쓴 원더걸스의 소속사는?',
        "opts": [
            ("SM엔터테인먼트", False),
            ("JYP엔터테인먼트", True),
            ("YG엔터테인먼트", False),
            ("스타쉽엔터테인먼트", False),
        ],
        "explanation": '원더걸스는 2007년 JYP엔터테인먼트를 통해 데뷔했습니다. 같은 해 발매한 "Tell Me"는 전국적인 \'텔미 댄스\' 열풍을 일으키며 유치원생부터 직장인·국회의원까지 따라 추는 사회적 현상이 됐습니다. 이후 "Nobody"로 한국 가수 최초 빌보드 HOT 100 입성이라는 기록도 세웠습니다.',
    },
    {
        "q": "K-팝 1세대 아이돌의 상징 H.O.T가 공식 해체한 연도는?",
        "opts": [
            ("1999년", False),
            ("2000년", False),
            ("2001년", True),
            ("2003년", False),
        ],
        "explanation": "H.O.T는 2001년 5월 공식 해체했습니다. SM엔터테인먼트와의 계약 문제, 멤버 간 의견 충돌이 겹치며 해체로 이어졌습니다. 당시 팬들의 충격이 워낙 커서 해체 소식에 수백 명의 팬들이 SM엔터테인먼트 앞에서 시위를 벌이기도 했습니다. 이후 2017년 MBC '무한도전' 토요일의 기적 편에서 팬들의 오랜 소원이었던 완전체 재결합 무대를 선보였습니다.",
    },
    {
        "q": "2020년 방탄소년단(BTS)이 K-팝 그룹 최초로 미국 빌보드 HOT 100 차트 1위를 달성한 곡은?",
        "opts": [
            ("Boy With Luv (Feat. Halsey)", False),
            ("Butter", False),
            ("Permission to Dance", False),
            ("Dynamite", True),
        ],
        "explanation": '방탄소년단의 영어 곡 "Dynamite"는 2020년 9월 5일 빌보드 HOT 100 1위를 달성하며 K-팝 그룹 최초의 기록을 세웠습니다. 이전까지 한국 가수의 HOT 100 최고 순위는 원더걸스의 "Nobody"(76위, 2009)였습니다. 이후 BTS는 같은 해 "Savage Love (Jawsh 685 x Jason Derulo X BTS)" 리믹스로도 1위를 기록했고 2021년에는 "Butter"·"Permission to Dance"로도 1위를 달성했습니다.',
    },
    {
        "q": '2008년 데뷔해 "링딩동"·"루시퍼"·"샤이니 월드" 등으로 팬덤 샤이니 월드를 형성한 샤이니(SHINee)의 데뷔곡은?',
        "opts": [
            ("Ring Ding Dong", False),
            ("Lucifer", False),
            ("Sherlock", False),
            ("누난 너무 예뻐 (Replay)", True),
        ],
        "explanation": '샤이니는 2008년 5월 22일 "누난 너무 예뻐 (Replay)"로 데뷔했습니다. 데뷔 당시 멤버 중 가장 어린 태민이 만 14세였으며 "누나"라는 단어가 들어간 제목으로 연상 팬들의 마음을 사로잡았습니다. "Ring Ding Dong"은 2009년, "Lucifer"는 2010년, "Sherlock"은 2012년 발매곡입니다.',
    },
    {
        "q": "2020년 SM엔터테인먼트를 통해 데뷔한 4인조 걸그룹으로 현실 세계의 멤버와 메타버스 세계의 AI 아바타 'æ-(에이)'가 공존하는 독창적인 세계관으로 4세대 K-팝을 선도하는 그룹은?",
        "opts": [
            ("있지 (ITZY)", False),
            ("르세라핌 (LE SSERAFIM)", False),
            ("뉴진스 (NewJeans)", False),
            ("에스파 (aespa)", True),
        ],
        "explanation": "에스파(aespa)는 2020년 11월 17일 SM엔터테인먼트를 통해 데뷔했습니다. 그룹명 aespa는 아바타(Avatar)·경험(Experience)·관점(Aspect)을 합친 SM만의 조어로 현실 멤버(카리나·지젤·윈터·닝닝)와 각자의 AI 아바타 'æ-카리나'·'æ-지젤' 등이 공존하는 메타버스 세계관이 특징입니다. 있지(ITZY)는 JYP, 르세라핌(LE SSERAFIM)과 뉴진스(NewJeans)는 각각 SOURCE MUSIC(HYBE 산하)과 ADOR(HYBE 산하) 소속입니다.",
    },
]

RESULTS = [
    {
        "type": "Level1",
        "emoji": "🌱",
        "title": "K-팝은 좋아하지만 역사는 처음인, 입문 팬 🌱",
        "short": "12개 중 2개 이하를 맞혔습니다. 지금 활동 중인 아티스트는 잘 알지만 K-팝 역사는 아직 낯선 단계입니다.",
        "desc": "지금 좋아하는 아이돌이 생기기까지 얼마나 많은 선배 아티스트들이 있었는지 오늘 처음 느꼈을 것입니다. H.O.T가 없었다면 지금의 K-팝도 없었습니다. 1세대 영상부터 하나씩 찾아보는 것도 꽤 재밌는 경험이 됩니다.",
        "historyGrade": "K-팝 역사 등급: Lv.1 입문 팬 🌱",
        "scoreRange": "정답 수: 0~2개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "재도전 팁: 오늘 틀린 문항의 해설을 읽고 각 세대 대표 그룹 이름 외우기",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "K-팝 역사를 알면 지금 좋아하는 아이돌이 더 특별하게 보입니다",
        "share": "K-팝 역사 테스트: Lv.1 입문 팬 🌱 소녀시대 데뷔곡이 Gee인 줄 알았음... 다시 만난 세계인 거 오늘 처음 알았음 ㅠ → K-팝 역사 몇 개 맞혀? 도전해봐",
    },
    {
        "type": "Level2",
        "emoji": "🎤",
        "title": "현세대는 알고 옛날은 이름만 아는, 현세대 팬 🎤",
        "short": "익숙한 아티스트는 맞혔는데 1세대 세부 지식에서 막히기 시작했군요. 평균 수준입니다.",
        "desc": "2세대 이후는 꽤 알고 있지만 1세대의 구체적인 사실들(데뷔 연도·해체 연도·멤버 구성)에서 빈칸이 많은 단계입니다. S.E.S와 핑클을 혼동하거나 H.O.T 해체 연도를 몰랐을 가능성이 높습니다.",
        "historyGrade": "K-팝 역사 등급: Lv.2 현세대 팬 🎤",
        "scoreRange": "정답 수: 3~5개",
        "strengthZone": "강점 구간: 쉬운 Q1~Q4",
        "weakZone": "취약 구간: 어려운 Q9~Q12",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "지금 시대는 잘 알고 있습니다. 조금만 뒤를 돌아보면 고수가 됩니다",
        "share": "K-팝 역사 테스트: Lv.2 현세대 팬 🎤 S.E.S 멤버에 이효리가 없는 거 맞혔는데 H.O.T 해체 연도에서 막힘... → K-팝 역사 몇 개 맞혀? 팬덤 자존심 테스트",
    },
    {
        "type": "Level3",
        "emoji": "🌟",
        "title": "세대를 넘나드는 상식이 있는, 크로스 세대 팬 🌟",
        "short": "절반 이상을 맞혔습니다. 1세대부터 현재까지 어느 정도 폭넓게 알고 있는 수준입니다.",
        "desc": "소녀시대 데뷔곡이 Gee가 아닌 다시 만난 세계인 것을 알고, 동방신기가 2세대 문을 열었다는 것도 알고 있습니다. 어려운 구간에서 H.O.T 해체 연도, Dynamite 기록 등에서 막혔을 것입니다.",
        "historyGrade": "K-팝 역사 등급: Lv.3 크로스 세대 팬 🌟",
        "scoreRange": "정답 수: 6~8개",
        "strengthZone": "강점 구간: 쉬운 + 중간 구간",
        "weakZone": "취약 구간: 어려운 Q9~Q12 (세부 연도·기록)",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "팬 커뮤니티에서 K-팝 역사 대화에 끼어들 수 있는 수준입니다",
        "share": "K-팝 역사 테스트: Lv.3 크로스 세대 팬 🌟 절반 이상 맞혔는데 샤이니 데뷔곡에서 멘붕... 링딩동 아니었구나 ㅋㅋ → K-팝 역사 몇 개 맞혀?",
    },
    {
        "type": "Level4",
        "emoji": "🏅",
        "title": "K-팝 역사책을 읽은 수준, K-팝 역사 고수 🏅",
        "short": "어려운 구간까지 대부분 맞혔습니다. 상위 15%에 해당하는 K-팝 역사 지식입니다.",
        "desc": "H.O.T 해체 연도, Dynamite의 빌보드 HOT 100 최초 1위 기록, 샤이니 데뷔곡까지 알고 있다면 K-팝 역사를 진지하게 공부한 사람이거나 그 시대를 직접 경험한 팬일 가능성이 높습니다.",
        "historyGrade": "K-팝 역사 등급: Lv.4 역사 고수 🏅",
        "scoreRange": "정답 수: 9~10개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과를 가진 사람의 특징: 오랜 K-팝 팬·역사 콘텐츠 즐겨봄·팬 커뮤니티 활성 활동",
        "regretPoint": "아쉬운 포인트: 만점까지 2~3개 차이. 틀린 문항 해설 다시 읽어보기",
        "certification": "",
        "oneLiner": "팬 커뮤니티에서 '찐 역덕'으로 인정받는 수준입니다. 이 결과 자랑해도 됩니다",
        "share": "K-팝 역사 테스트: Lv.4 역사 고수 🏅 상위 15%... H.O.T 해체 연도·Dynamite 기록 다 맞혔음 → K-팝 역사 몇 개 맞혀? 이거 다 맞히면 역사 마스터",
    },
    {
        "type": "Level5",
        "emoji": "🏆",
        "title": "살아있는 K-팝 역사책, 역사 마스터 🏆",
        "short": "11개 또는 12개를 모두 맞혔습니다. 에스파의 세계관, H.O.T 해체 연도, BTS Dynamite 기록까지 전부 알고 있다면 진정한 K-팝 역사 마스터입니다.",
        "desc": "1세대부터 4세대까지 K-팝 역사 전체를 꿰뚫고 있는 수준입니다. 데뷔곡·해체 연도·소속사·세계 기록까지 모두 알고 있다는 것은 K-팝과 함께 세월을 보낸 진짜 팬이라는 증거입니다.",
        "historyGrade": "K-팝 역사 등급: Lv.5 역사 마스터 🏆",
        "scoreRange": "정답 수: 11~12개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과가 가능한 경우: 1세대부터 함께한 오랜 팬·K-팝 관련 전공·기자·평론가·역덕 마스터",
        "regretPoint": "",
        "certification": "K-팝 역사 마스터 달성 🏆 1세대부터 4세대까지 전부 꿰뚫었습니다",
        "oneLiner": "당신은 살아있는 K-팝 역사책입니다. 이 결과를 팬 커뮤니티에 올리세요",
        "share": "K-팝 역사 테스트: Lv.5 역사 마스터 🏆 1세대부터 4세대까지 전부 맞혔음... 에스파 세계관까지 → K-팝 역사 몇 개 맞혀? 팬덤 자존심 걸고 도전해봐",
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


def ko_only(text: str) -> dict[str, str]:
    return {"ko": text, **{loc: "" for loc in LOCALES[1:]}}


HEADER = """/** K-팝 역사 마스터 테스트 — phase3-kpop-history-master · 12문항 4지선다 · 정답 +1 오답 0 · 한국어 우선 */

export type Phase3KpopHistoryMasterLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3KpopHistoryMasterLocaleKey, string>): Record<Phase3KpopHistoryMasterLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3KpopHistoryMasterLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3KpopHistoryMasterLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3KpopHistoryMasterQuestion {
  id: number;
  question: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  options: { text: Record<Phase3KpopHistoryMasterLocaleKey, string>; isCorrect: boolean }[];
  correctExplanation: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  wrongTraps: Record<Phase3KpopHistoryMasterLocaleKey, string>;
}

export interface Phase3KpopHistoryMasterResult {
  type: string;
  emoji: string;
  title: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  shortDescription: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  description: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  historyGrade: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  scoreRange: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  strengthZone: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  weakZone: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  retakeTip: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  characteristic: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  regretPoint: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  certificationPhrase: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  oneLiner: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  shareLine: Record<Phase3KpopHistoryMasterLocaleKey, string>;
}

export function calculatePhase3KpopHistoryMasterResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3KpopHistoryMasterQuestions: Phase3KpopHistoryMasterQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3KpopHistoryMasterResults: Phase3KpopHistoryMasterResult[] = [\n"
FOOTER_END = "];\n"

lines = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
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
        "historyGrade": r["historyGrade"],
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

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3KpopHistoryMasterData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
