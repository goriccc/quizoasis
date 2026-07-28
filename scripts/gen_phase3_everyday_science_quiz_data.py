# -*- coding: utf-8 -*-
"""Generate lib/phase3EverydayScienceQuizData.ts (Korean only, localeMap skeleton)"""

QUESTIONS = [
    {
        "q": "냉장고에서 가끔 들리는 '윙윙' 또는 '웅웅' 소리의 정체는 무엇인가요?",
        "opts": [
            ("냉장고 안을 흐르는 전기가 내는 소리다", False),
            ("냉장고 내부를 차갑게 유지하는 압축기(컴프레서)가 냉매를 압축하며 작동하는 소리다", True),
            ("음식이 냉각되면서 수축하는 소리다", False),
            ("냉기를 순환시키는 팬이 돌아가는 소리다", False),
        ],
        "explanation": "냉장고 내부의 냉매를 압축하는 모터(압축기·컴프레서)가 작동하면서 나는 소리입니다. 냉매가 압축→팽창→압축을 반복하면서 내부의 열을 바깥으로 내보내는 원리입니다. 소리가 멈추는 구간이 있는 것은 냉장고 내부 온도가 설정 온도에 도달하면 압축기가 잠시 멈추기 때문입니다.",
    },
    {
        "q": "전자레인지가 음식을 데우는 진짜 원리는 무엇인가요?",
        "opts": [
            ("내부 코일에서 발생한 열기가 음식 표면을 가열한다", False),
            ("자외선이 음식 표면의 분자를 활성화해 온도를 올린다", False),
            ("마이크로파(전자기파)가 음식 속 물 분자를 빠르게 진동시켜 마찰열을 발생시킨다", True),
            ("음식 주변 공기를 먼저 가열하면 그 열이 음식에 전달된다", False),
        ],
        "explanation": "전자레인지는 2.45GHz 주파수의 마이크로파를 방출합니다. 이 전자기파가 음식 속 물 분자를 초당 수십억 번 진동시키고 이 진동이 마찰열을 만들어 음식이 데워집니다. 그래서 물이 없는 음식은 잘 안 데워지고 음식 내부부터 데워지는 것이 특징입니다.",
    },
    {
        "q": "번개가 번쩍인 뒤 천둥 소리가 나중에 들리는 이유는 무엇인가요?",
        "opts": [
            ("천둥이 구름 안에서 먼저 울린 다음 지면에 도달하기까지 시간이 걸리기 때문이다", False),
            ("뇌가 눈의 신호보다 귀의 신호를 처리하는 데 더 오래 걸리기 때문이다", False),
            ("빛의 속도(초당 약 30만km)가 소리의 속도(초당 약 340m)보다 훨씬 빠르기 때문이다", True),
            ("번개가 지면보다 더 높은 곳에서 발생하므로 천둥이 내려오는 시간이 필요하기 때문이다", False),
        ],
        "explanation": "빛의 속도는 초당 약 30만km, 소리의 속도는 초당 약 340m입니다. 약 88만 배 차이가 납니다. 번개가 치는 순간 빛과 소리가 동시에 출발하지만 빛은 거의 즉시 도달하고 소리는 훨씬 늦게 도달합니다. 천둥 소리가 들리기까지 3초가 걸렸다면 번개가 약 1km 떨어진 곳에서 친 것입니다.",
    },
    {
        "q": "얼음이 물 위에 뜨는 이유는 무엇인가요?",
        "opts": [
            ("얼음 안에 작은 공기 방울이 많이 들어있어 전체 무게가 가볍기 때문이다", False),
            ("물이 얼 때 수소 결합으로 육각형 결정 구조를 형성해 부피가 증가하고 밀도가 낮아지기 때문이다", True),
            ("차가운 물체는 따뜻한 물 위로 올라가는 성질이 있기 때문이다", False),
            ("얼음 표면의 표면 장력이 물의 표면 장력보다 강하기 때문이다", False),
        ],
        "explanation": "대부분의 물질은 고체가 액체보다 밀도가 높지만 물은 예외입니다. 물이 4°C에서 0°C로 냉각될 때 물 분자들이 수소 결합으로 육각형 결정 구조를 형성하는데 이 구조는 액체 상태보다 분자 간 공간이 더 넓어 부피가 약 9% 증가합니다. 같은 질량으로 부피가 커지니 밀도가 낮아져 물 위에 뜨게 됩니다. 이 덕분에 호수나 강이 얼어도 수중 생물이 살 수 있습니다.",
    },
    {
        "q": "세탁기 탈수 시 드럼을 빠르게 돌리는 이유는 무엇인가요?",
        "opts": [
            ("빠른 회전으로 마찰열이 발생해 물이 증발하기 때문이다", False),
            ("자기장이 물 분자를 옷감에서 분리시키기 때문이다", False),
            ("빠른 회전으로 발생하는 원심력이 물을 드럼 바깥 방향으로 밀어내기 때문이다", True),
            ("드럼 구멍을 통해 내부 기압이 낮아져 물이 빨려 나가기 때문이다", False),
        ],
        "explanation": "원심력은 회전하는 물체에서 중심에서 바깥 방향으로 작용하는 관성력입니다. 드럼이 빠르게 회전할 때 옷에 스며있는 물 분자는 원심력으로 인해 드럼 벽 쪽(바깥 방향)으로 밀려나고 드럼 구멍을 통해 밖으로 빠져나갑니다. RPM(분당 회전수)이 높을수록 원심력이 강해 탈수 효율이 높아집니다.",
    },
    {
        "q": "일반 가스 라이터에서 불꽃이 생기는 원리는 무엇인가요?",
        "opts": [
            ("내부 소형 배터리에서 전기를 공급해 스파크를 만든다", False),
            ("가스가 공기와 닿는 순간 자연 발화한다", False),
            ("압전 소자(특수 결정체)에 압력을 가하면 순간적으로 전압이 발생해 스파크가 튄다", True),
            ("내부 부싯돌을 금속으로 긁어 마찰 불꽃을 만든다", False),
        ],
        "explanation": "전자 라이터에는 '압전 소자'가 들어있습니다. 버튼을 누르면 압전 소자(주로 압전 세라믹)에 압력이 가해지고 이때 순간적으로 수천 볼트의 전압이 발생해 스파크가 만들어집니다. 이 원리를 '압전 효과(Piezoelectric Effect)'라고 합니다. 가스 조절부에서 가스가 나오는 순간 이 스파크가 점화시킵니다.",
    },
    {
        "q": "선풍기 바람은 실제로 공기 온도를 낮추지 않는데 왜 시원하게 느껴지나요?",
        "opts": [
            ("선풍기 날개가 공기 분자를 느리게 만들어 실제로 기온을 낮추기 때문이다", False),
            ("선풍기 모터에서 냉각된 공기가 방출되기 때문이다", False),
            ("빠른 바람이 피부 위의 땀을 증발시키면서 기화열을 빼앗아 피부 온도를 낮추기 때문이다", True),
            ("빠른 공기가 피부 혈관을 수축시켜 차갑다는 신호를 보내기 때문이다", False),
        ],
        "explanation": "선풍기는 공기 자체의 온도를 낮추지 않습니다. 피부 위에 있는 땀(수분)이 증발할 때 주변에서 열을 흡수하는 '기화열' 원리로 시원함을 느낍니다. 땀이 없거나 이미 건조한 상태에서는 선풍기 바람이 덜 시원하게 느껴지는 것도 이 때문입니다. 에어컨은 냉매로 실제 공기 온도를 낮추지만 선풍기는 기화 냉각 원리를 이용합니다.",
    },
    {
        "q": "뜨거운 물을 일반 유리컵에 갑자기 부으면 컵이 깨지는 이유는 무엇인가요?",
        "opts": [
            ("뜨거운 물의 무게가 차가운 유리를 압박하기 때문이다", False),
            ("뜨거운 물이 유리 성분을 용해시키기 때문이다", False),
            ("유리 안쪽과 바깥쪽이 서로 다른 속도로 열팽창해 균열이 생기기 때문이다", True),
            ("뜨거운 물 위에 수증기가 갑자기 팽창해 유리를 내부에서 밀기 때문이다", False),
        ],
        "explanation": "유리는 열전도율이 낮은 재료입니다. 뜨거운 물이 닿는 안쪽은 빠르게 팽창하지만 바깥쪽은 아직 차가운 상태로 팽창이 느립니다. 이 팽창 속도 차이가 유리 내부에 응력(스트레스)을 만들고 그것이 균열로 이어집니다. 내열 유리(파이렉스 등)는 열팽창 계수가 낮아 이 현상이 줄어들어 깨지지 않습니다.",
    },
    {
        "q": "낮에 하늘이 파랗게 보이는 이유는 무엇인가요?",
        "opts": [
            ("바다와 강의 파란 물이 하늘에 반사되기 때문이다", False),
            ("대기 중 산소 분자가 파란색을 띠기 때문이다", False),
            ("오존층이 파란색 빛을 방출하기 때문이다", False),
            ("태양빛 중 파장이 짧은 파란빛이 대기 중 분자에 더 많이 산란(레일리 산란)되어 하늘 전체에서 보이기 때문이다", True),
        ],
        "explanation": "태양빛은 여러 색의 빛이 섞인 흰빛입니다. 빛이 대기를 통과할 때 공기 분자와 충돌해 산란되는데 이를 '레일리 산란'이라 합니다. 파장이 짧을수록 산란이 더 강하게 일어나고 파란빛은 빨간빛보다 약 10배 더 많이 산란됩니다. 산란된 파란빛이 하늘 전체에서 사방으로 퍼져 우리 눈에 들어오기 때문에 하늘이 파랗게 보입니다. 노을이 빨간 이유도 같은 원리입니다. 해질녘엔 빛이 대기를 더 길게 통과해 파란빛은 모두 산란되고 긴 파장의 빨간빛만 남습니다.",
    },
    {
        "q": "비행기가 하늘에 남기는 하얀 줄(비행운)의 정체는 무엇인가요?",
        "opts": [
            ("비행기 엔진에서 연소된 연료가 검댕이 되어 하늘에 남는 것이다", False),
            ("비행기 날개가 고속으로 지나가면서 공기를 압축해 구름이 생기는 것이다", False),
            ("비행기가 통과하면서 기존 구름층을 눌러서 생기는 흔적이다", False),
            ("엔진 배기가스에 포함된 수증기가 고도 약 8~12km의 차가운 공기를 만나 순간적으로 얼어붙어 생긴 얼음 결정이다", True),
        ],
        "explanation": "비행기가 운항하는 고도(약 8~12km)의 기온은 영하 40~60°C에 달합니다. 엔진 배기가스에 포함된 수증기가 이 극저온 공기를 만나면 순간적으로 얼어붙어 미세한 얼음 결정이 됩니다. 이것이 모여 우리 눈에 하얀 선으로 보이는 비행운(航跡雲, Contrail)입니다. 대기 중 습도가 높은 날은 비행운이 오래 유지되고 건조한 날은 빨리 사라집니다.",
    },
    {
        "q": "전자레인지에 금속을 넣으면 안 되는 진짜 이유는 무엇인가요?",
        "opts": [
            ("금속이 마이크로파를 너무 잘 흡수해 과열되어 폭발할 수 있기 때문이다", False),
            ("금속이 고온에서 녹아 음식을 오염시키기 때문이다", False),
            ("금속이 마이크로파를 반사해 전자레인지 내부에서 전기 아크(불꽃 방전)가 발생하고 기기가 손상될 수 있기 때문이다", True),
            ("금속이 자성을 가지므로 전자레인지 자기장을 방해하기 때문이다", False),
        ],
        "explanation": "금속은 마이크로파를 흡수하지 않고 반사합니다. 반사된 마이크로파가 전자레인지 내부를 튕겨 다니다가 금속의 날카로운 모서리나 얇은 부분(호일 등)에 전류가 집중되면 공기 중으로 방전되는 아크(전기 불꽃)가 발생합니다. 이 불꽃이 화재를 일으키거나 전자레인지 내부 부품을 손상시킵니다. 반면 금속으로 만든 일부 특수 음식 용기는 안전하게 설계되기도 합니다.",
    },
    {
        "q": "더운 날 냉장고 문을 열어놓아도 방이 시원해지지 않는 이유는 무엇인가요?",
        "opts": [
            ("냉장고에서 나오는 냉기의 양이 너무 적어서 방 전체 기온을 낮추기에 역부족이기 때문이다", False),
            ("냉장고 문을 열면 냉장고 효율이 떨어져 제대로 작동하지 않기 때문이다", False),
            ("냉장고는 내부의 열을 뒤쪽 방열판(콘덴서)으로 내보내는 기계라 결과적으로 방 전체에 열을 더 추가하기 때문이다", True),
            ("냉기와 따뜻한 공기가 섞이면 서로 상쇄되어 온도 변화가 없기 때문이다", False),
        ],
        "explanation": "냉장고는 내부 열을 뒤쪽의 방열판(콘덴서)을 통해 방으로 내보내는 '열 펌프' 장치입니다. 문을 열면 앞에서는 차가운 공기가 나오지만 뒤에서는 그보다 더 많은 열이 방으로 방출됩니다. 게다가 냉장고가 더 열심히 가동되면서 전기 에너지도 열로 변환되어 방 전체에 추가됩니다. 결과적으로 냉장고 문을 열어놓으면 방이 더 더워집니다.",
    },
]

RESULTS = [
    {
        "type": "Level1",
        "emoji": "🌱",
        "title": "오늘부터 과학이 보이기 시작, 생활 과학 입문자 🌱",
        "short": "12개 중 2개 이하를 맞혔습니다. 사실 당연합니다. 학교에서 배웠지만 일상에서 다시 생각해본 적이 없는 것들입니다.",
        "desc": "쉬운 구간에서도 많이 막혔나요? 오늘 이 테스트를 계기로 냉장고 소리가 들릴 때 한 번 더 생각하게 될 것입니다. 그게 시작입니다.",
        "scienceGrade": "생활 과학 등급: Lv.1 입문자 🌱",
        "scoreRange": "정답 수: 0~2개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "재도전 팁: 오늘 틀린 문항의 해설을 다시 읽고 외우기. 의외로 기억에 잘 남음",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "몰랐던 것을 알게 되는 순간이 가장 재밌는 순간입니다. 오늘이 그 시작입니다",
        "share": "생활 과학 퀴즈: Lv.1 입문자 🌱 냉장고 소리가 압축기 소리인 거 오늘 처음 알았음... 매일 듣던 소린데 ㅋㅋ → 어? 이거 왜 그럼? 친구한테 도전장 보내봐",
    },
    {
        "type": "Level2",
        "emoji": "🔍",
        "title": "들어본 것 같은데 설명은 못 하는, 생활 과학 견습생 🔍",
        "short": "어디선가 들어본 것 같은데 정확히는 모르는 수준입니다. 평균 정도입니다.",
        "desc": "쉬운 구간은 어느 정도 맞혔지만 중간 이후부터 막히기 시작했을 것입니다. 압전 효과·기화열·레일리 산란 같은 개념들이 이번 기회에 처음 연결됐을 것입니다.",
        "scienceGrade": "생활 과학 등급: Lv.2 견습생 🔍",
        "scoreRange": "정답 수: 3~5개",
        "strengthZone": "강점 구간: 쉬운 Q1~Q4",
        "weakZone": "취약 구간: 중간~어려운 Q5~Q12",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "대화 중 '아 그거 어디서 들어봤는데' 하는 타입입니다. 조금만 더 알면 설명할 수 있습니다",
        "share": "생활 과학 퀴즈: Lv.2 견습생 🔍 선풍기가 실제론 공기 온도 안 낮춘다는 거 충격... 그럼 뭘로 시원한 거야?? → 어? 이거 왜 그럼? 다들 알아?",
    },
    {
        "type": "Level3",
        "emoji": "🧪",
        "title": "친구들 사이에서 과학 담당, 생활 과학 탐구자 🧪",
        "short": "절반 이상을 맞혔습니다. 평균 이상의 생활 과학 상식입니다.",
        "desc": "쉬운 구간을 대부분 맞히고 중간 구간도 절반 이상 정복했습니다. 어려운 구간(레일리 산란·비행운·전자레인지 금속·냉장고 원리)에서 몇 개 떨어졌을 것입니다. 주변 사람들에게 오늘 배운 것들을 설명해주면 \"어? 진짜?\" 반응이 나올 것입니다.",
        "scienceGrade": "생활 과학 등급: Lv.3 탐구자 🧪",
        "scoreRange": "정답 수: 6~8개",
        "strengthZone": "강점 구간: 쉬운 + 중간 구간",
        "weakZone": "취약 구간: 어려운 Q9~Q12",
        "retakeTip": "",
        "characteristic": "",
        "regretPoint": "",
        "certification": "",
        "oneLiner": "이 정도면 과학 이야기가 나왔을 때 한마디 할 수 있는 사람입니다",
        "share": "생활 과학 퀴즈: Lv.3 탐구자 🧪 절반 이상 맞혔는데 비행운이 얼음 결정이라는 거 몰랐음... 이거 아는 사람? → 어? 이거 왜 그럼? 도전해봐",
    },
    {
        "type": "Level4",
        "emoji": "⚗️",
        "title": "과학 잡학 대화가 가능한 수준, 생활 과학 고수 ⚗️",
        "short": "어려운 구간까지 대부분 맞혔습니다. 상위 15%에 해당하는 생활 과학 지식입니다.",
        "desc": "레일리 산란으로 하늘이 파란 이유를 알고, 비행운이 얼음 결정임을 알고, 냉장고 문을 열면 방이 더 더워진다는 것까지 알고 있다면 평소 과학에 관심이 꽤 있는 사람일 가능성이 높습니다.",
        "scienceGrade": "생활 과학 등급: Lv.4 고수 ⚗️",
        "scoreRange": "정답 수: 9~10개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과를 가진 사람의 특징: 평소 유튜브 과학 채널을 즐겨 봄. 과학 콘텐츠에 자주 반응함",
        "regretPoint": "아쉬운 포인트: 12점 만점까지 2~3개 차이. 틀린 문항의 해설을 다시 읽어보기",
        "certification": "",
        "oneLiner": "이 정도 알면 대화에서 '오 그거 알아, 왜냐면...'이 자연스럽게 나옵니다",
        "share": "생활 과학 퀴즈: Lv.4 고수 ⚗️ 상위 15%... 냉장고 문 열면 방이 더 더워진다는 거 맞혔음 → 어? 이거 왜 그럼? 이거 다 맞히면 과학 고수 인정",
    },
    {
        "type": "Level5",
        "emoji": "🏆",
        "title": "일상이 과학으로 보이는 사람, 생활 과학 마스터 🏆",
        "short": "11개 또는 12개를 모두 맞혔습니다. 전자레인지 아크, 냉장고 열 펌프 원리까지 알고 있다면 생활 과학 마스터입니다.",
        "desc": "압전 효과·레일리 산란·기화열·열팽창 계수·열 펌프. 이 개념들이 친숙하게 느껴진다면 당신은 일상에서 과학적으로 생각하는 사람입니다. 이 지식들은 퀴즈 이상으로 대화에서 빛납니다.",
        "scienceGrade": "생활 과학 등급: Lv.5 마스터 🏆",
        "scoreRange": "정답 수: 11~12개",
        "strengthZone": "",
        "weakZone": "",
        "retakeTip": "",
        "characteristic": "이 결과가 가능한 경우: 이공계 전공·과학 유튜브 채널 애청자·이과 감성 소유자",
        "regretPoint": "",
        "certification": "생활 과학 마스터 달성 🏆 냉장고부터 하늘까지 다 압니다",
        "oneLiner": "당신은 일상 속에서 과학을 보는 사람입니다. 이 결과 자랑해도 됩니다",
        "share": "생활 과학 퀴즈: Lv.5 마스터 🏆 전자레인지에 금속 넣으면 아크 발생하는 거 알았음... 레일리 산란도 맞혔음 → 어? 이거 왜 그럼? 이거 다 맞힌 사람 있으면 나와봐",
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


HEADER = """/** 생활 속 과학 상식 퀴즈 — phase3-everyday-science-quiz · 12문항 4지선다 · 정답 +1 오답 0 · 한국어 우선 */

export type Phase3EverydayScienceQuizLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3EverydayScienceQuizLocaleKey, string>): Record<Phase3EverydayScienceQuizLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3EverydayScienceQuizLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3EverydayScienceQuizLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3EverydayScienceQuizOption {
  text: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3EverydayScienceQuizQuestion {
  id: number;
  question: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  options: Phase3EverydayScienceQuizOption[];
  correctExplanation: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  wrongTraps: Record<Phase3EverydayScienceQuizLocaleKey, string>;
}

export interface Phase3EverydayScienceQuizResult {
  type: string;
  emoji: string;
  title: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  shortDescription: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  description: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  scienceGrade: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  scoreRange: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  strengthZone: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  weakZone: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  retakeTip: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  characteristic: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  regretPoint: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  certificationPhrase: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  oneLiner: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  shareLine: Record<Phase3EverydayScienceQuizLocaleKey, string>;
}

export function calculatePhase3EverydayScienceQuizResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3EverydayScienceQuizQuestions: Phase3EverydayScienceQuizQuestion[] = [
"""

FOOTER_Q = "];\n\nexport const phase3EverydayScienceQuizResults: Phase3EverydayScienceQuizResult[] = [\n"
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
        "scienceGrade": r["scienceGrade"],
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

out_path = __import__("pathlib").Path(__file__).resolve().parents[1] / "lib" / "phase3EverydayScienceQuizData.ts"
out_path.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_path, out_path.stat().st_size, "bytes")
