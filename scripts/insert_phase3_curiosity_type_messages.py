# -*- coding: utf-8 -*-
"""Insert phase3CuriosityTypeTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3CuriosityTypeTest"
ANCHOR = "phase3EqSelfDiagnosisTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "호기심에도 유형이 있습니다.",
        "line2": "어떤 사람은 하나의 주제가 생기면 그 끝까지 파고들고, 어떤 사람은 이것저것 넓게 탐험하다 뜻밖의 연결을 발견하고, 어떤 사람은 \"왜 그럴까?\"라는 질문 자체가 삶의 동력이고, 어떤 사람은 일상의 모든 것이 신기해서 멈출 수가 없습니다.",
        "line3": "심리학자 토드 카시단은 호기심을 단일한 특성이 아닌 여러 유형의 복합체로 봤습니다. 탐구의 기쁨, 결핍 민감성, 공감적 호기심, 스릴 추구, 개방성. 이 다섯 가지 축이 조합되어 각자만의 호기심 패턴이 만들어집니다.",
        "line4": "12가지 질문으로 나는 무엇에 끌리고 어떻게 탐구하는지 분석합니다.",
        "line5": "내 호기심 유형 찾기 🔍 지금 바로 확인",
        "note": "※ 실제 나의 탐구 방식에 가장 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 호기심 유형 진단)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 호기심 유형 찾기 🔍 지금 바로 확인",
        "shareResult": "결과 공유하기",
        "retakeTest": "다시 하기",
        "otherTests": "다른 테스트 보기",
        "similarTests": "유사한 다른 테스트",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "curiositySummary": "호기심 유형 요약",
        "curiosityType": "호기심 유형",
        "exploreKeywordsTitle": "탐구 키워드",
        "domainAnalysisTitle": "6개 영역별 점수",
        "totalScore": "총점",
        "scoreUnit": "점",
        "interestScopeDomain": "관심 범위",
        "exploreMethodDomain": "탐구 방식",
        "questionTendencyDomain": "질문 성향",
        "learningPatternDomain": "학습 패턴",
        "interestTriggerDomain": "흥미 촉발 요인",
        "curiosityPersistenceDomain": "호기심 지속성",
        "strongestDomain": "호기심이 가장 강하게 작동하는 탐구 방식",
        "boostDomain": "지금 가장 실용적으로 작동하는 영역",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형의 주의점",
        "contentRecommendTitle": "이 유형에게 맞는 학습 콘텐츠",
        "growCuriosityTitle": "호기심을 더 키우고 싶다면",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 호기심 유형: {type}! 🔍\\n너는 어떤 호기심 유형이야? 같이 해보자!",
        "kakao": "내 호기심 유형: {type}! 🔍\\n너는 어떤 호기심 유형이야?",
        "wechat": "내 호기심 유형: {type}! 🔍\\n같이 해봐!",
        "whatsapp": "내 호기심 유형: {type}! 🔍\\n너도 측정해봐!",
        "telegram": "내 호기심 유형: {type}! 🔍\\n너는 어떤 유형이야?",
        "line": "내 호기심 유형: {type}! 🔍\\n너는 어떤 유형이야?",
        "startDefault": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
        "startKakao": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
        "startWechat": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
        "startWhatsapp": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
        "startTelegram": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
        "startLine": "나의 호기심 유형 진단 🔍 지금 바로 확인해봐!",
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

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Find My Curiosity Type 🔍 Check Now",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Curiosity Type Test)",
        "goToTest": "Go to test",
        "startTest": "Find My Curiosity Type 🔍 Check Now",
        "shareResult": "Share your result",
        "retakeTest": "Retake",
        "otherTests": "Other tests",
        "similarTests": "Similar tests",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "curiositySummary": "Curiosity summary",
        "curiosityType": "Curiosity type",
        "exploreKeywordsTitle": "Explore keywords",
        "domainAnalysisTitle": "Domain scores",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "interestScopeDomain": "Interest scope",
        "exploreMethodDomain": "Explore method",
        "questionTendencyDomain": "Question tendency",
        "learningPatternDomain": "Learning pattern",
        "interestTriggerDomain": "Interest trigger",
        "curiosityPersistenceDomain": "Curiosity persistence",
        "strongestDomain": "Strongest curiosity domain",
        "boostDomain": "Most practical domain now",
        "strengthsTitle": "Strengths",
        "cautionsTitle": "Cautions",
        "contentRecommendTitle": "Recommended learning content",
        "growCuriosityTitle": "Grow your curiosity",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My curiosity type: {type}! 🔍\\nWhat's yours?",
        "kakao": "My curiosity type: {type}! 🔍\\nWhat's yours?",
        "wechat": "My curiosity type: {type}! 🔍\\nTry this test too!",
        "whatsapp": "My curiosity type: {type}! 🔍\\nTake the test too!",
        "telegram": "My curiosity type: {type}! 🔍\\nWhat's your type?",
        "line": "My curiosity type: {type}! 🔍\\nWhat's your type?",
        "startDefault": "My Curiosity Type Test 🔍 Check now!",
        "startKakao": "My Curiosity Type Test 🔍 Check now!",
        "startWechat": "My Curiosity Type Test 🔍 Check now!",
        "startWhatsapp": "My Curiosity Type Test 🔍 Check now!",
        "startTelegram": "My Curiosity Type Test 🔍 Check now!",
        "startLine": "My Curiosity Type Test 🔍 Check now!",
    },
    "alerts": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied!",
        "shareFailed": "Sharing is not available.",
        "wechatCopy": "Link copied! Paste it in WeChat to share.",
        "kakaoInit": "Initializing KakaoTalk sharing. Please try again.",
        "kakaoError": "KakaoTalk share error.",
    },
    "recommendations": {
        "similarTestsTop5": "🎯 Top 5 Similar Tests",
        "popularTestsTop5": "🔥 Top 5 Trending Tests",
    },
}


def insert_after_anchor(data: dict, block: dict) -> dict:
    if ANCHOR not in data:
        raise SystemExit(f"anchor missing: {ANCHOR}")
    new_data = {}
    for k, v in data.items():
        new_data[k] = v
        if k == ANCHOR:
            new_data[KEY] = block
    return new_data


ko_path = MESSAGES_DIR / "ko.json"
ko_data = json.loads(ko_path.read_text(encoding="utf-8"))
if KEY in ko_data:
    print("skip ko (exists)")
else:
    ko_data = insert_after_anchor(ko_data, KO_BLOCK)
    ko_path.write_text(json.dumps(ko_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("updated ko")

for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY in data:
        print(f"skip {loc} (exists)")
        continue
    data = insert_after_anchor(data, SKELETON)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
