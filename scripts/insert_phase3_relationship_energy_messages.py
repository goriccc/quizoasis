# -*- coding: utf-8 -*-
"""Insert phase3RelationshipEnergyTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3RelationshipEnergyTest"
ANCHOR = "phase3CuriosityTypeTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "사람과의 관계에서 에너지가 충전되나요, 소모되나요?",
        "line2": "어떤 사람은 오랜 모임 후 집에 오면 배터리가 완전히 방전된 것 같고, 어떤 사람은 오히려 사람들과 오래 있을수록 에너지가 올라갑니다. 어떤 사람은 연락 하나에 부담을 느끼고, 어떤 사람은 연락이 없으면 허전합니다.",
        "line3": "관계에서 에너지를 어떻게 쓰고 어떻게 충전하는지의 패턴은 내향·외향의 단순한 구분이 아닙니다. 얼마나 많은 관계를 원하는지, 어느 깊이의 관계에서 편안함을 느끼는지, 관계를 유지하는 게 자연스러운지 힘든지가 모두 영향을 줍니다.",
        "line4": "12가지 질문으로 내가 사람관계에 에너지를 어떻게 쓰고 있는지 분석합니다.",
        "line5": "관계 에너지 패턴 찾기 🔋 솔직하게 시작",
        "note": "※ 두 가지 중 실제 나의 패턴에 더 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (내가 사람관계에 쏟는 에너지)",
        "goToTest": "테스트 하러 가기",
        "startTest": "관계 에너지 패턴 찾기 🔋 솔직하게 시작",
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
        "relationshipEnergySummary": "관계 에너지 유형 요약",
        "relationshipEnergyType": "관계 에너지 유형",
        "relationshipKeywordsTitle": "관계 키워드",
        "domainAnalysisTitle": "6개 영역별 점수",
        "totalScore": "총점",
        "scoreUnit": "점",
        "energyDirectionDomain": "에너지 방향",
        "relationshipMaintenanceDomain": "관계 유지 의지",
        "togetherTimeReactionDomain": "함께하는 시간 반응",
        "relationshipFatigueDomain": "관계 피로도",
        "contactPatternDomain": "연락·소통 패턴",
        "relationshipPriorityDomain": "관계 우선순위",
        "mostNaturalFlowDomain": "관계 에너지가 가장 자연스럽게 흐르는 영역",
        "mostEnergyDrainDomain": "가장 에너지 소모가 큰 관계 상황",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형이 관계에서 힘든 이유",
        "relationshipStyleTitle": "이 유형에게 맞는 관계 방식",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 관계 에너지 유형: {type}! 🔋\\n너는 어떤 유형이야? 같이 해보자!",
        "kakao": "내 관계 에너지 유형: {type}! 🔋\\n너는 어떤 유형이야?",
        "wechat": "내 관계 에너지 유형: {type}! 🔋\\n같이 해봐!",
        "whatsapp": "내 관계 에너지 유형: {type}! 🔋\\n너도 측정해봐!",
        "telegram": "내 관계 에너지 유형: {type}! 🔋\\n너는 어떤 유형이야?",
        "line": "내 관계 에너지 유형: {type}! 🔋\\n너는 어떤 유형이야?",
        "startDefault": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
        "startKakao": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
        "startWechat": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
        "startWhatsapp": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
        "startTelegram": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
        "startLine": "내가 사람관계에 쏟는 에너지 🔋 지금 바로 확인해봐!",
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
        "line5": "Find My Relationship Energy Pattern 🔋 Start Now",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Relationship Energy Test)",
        "goToTest": "Go to test",
        "startTest": "Find My Relationship Energy Pattern 🔋 Start Now",
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
        "relationshipEnergySummary": "Relationship energy summary",
        "relationshipEnergyType": "Relationship energy type",
        "relationshipKeywordsTitle": "Relationship keywords",
        "domainAnalysisTitle": "Domain scores",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "energyDirectionDomain": "Energy direction",
        "relationshipMaintenanceDomain": "Relationship maintenance",
        "togetherTimeReactionDomain": "Together-time reaction",
        "relationshipFatigueDomain": "Relationship fatigue",
        "contactPatternDomain": "Contact pattern",
        "relationshipPriorityDomain": "Relationship priority",
        "mostNaturalFlowDomain": "Most natural energy flow area",
        "mostEnergyDrainDomain": "Most energy-draining situation",
        "strengthsTitle": "Strengths",
        "cautionsTitle": "Relationship challenges",
        "relationshipStyleTitle": "Relationship style that fits you",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My relationship energy type: {type}! 🔋\\nWhat's yours?",
        "kakao": "My relationship energy type: {type}! 🔋\\nWhat's yours?",
        "wechat": "My relationship energy type: {type}! 🔋\\nTry this test too!",
        "whatsapp": "My relationship energy type: {type}! 🔋\\nTake the test too!",
        "telegram": "My relationship energy type: {type}! 🔋\\nWhat's your type?",
        "line": "My relationship energy type: {type}! 🔋\\nWhat's your type?",
        "startDefault": "Relationship Energy Test 🔋 Check now!",
        "startKakao": "Relationship Energy Test 🔋 Check now!",
        "startWechat": "Relationship Energy Test 🔋 Check now!",
        "startWhatsapp": "Relationship Energy Test 🔋 Check now!",
        "startTelegram": "Relationship Energy Test 🔋 Check now!",
        "startLine": "Relationship Energy Test 🔋 Check now!",
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
