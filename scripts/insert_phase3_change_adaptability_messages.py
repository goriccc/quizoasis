# -*- coding: utf-8 -*-
"""Insert phase3ChangeAdaptabilityTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3ChangeAdaptabilityTest"
ANCHOR = "phase3OptimismIndexTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "변화는 피할 수 없습니다. 다만 어떻게 반응하는지는 선택할 수 있습니다.",
        "line2": "갑자기 계획이 틀어졌을 때 어떻게 반응하는가, 예상치 못한 상황이 닥쳤을 때 얼마나 빨리 새로운 방향을 찾는가, 불확실한 환경에서 얼마나 오래 버티는가. 이 반응 패턴이 변화 적응력입니다.",
        "line3": "변화 앞에서 굳어버리는 사람이 있고 흔들리다 결국 적응하는 사람이 있고 변화를 기회로 만드는 사람이 있습니다. 어느 쪽이 더 뛰어난 게 아닙니다. 각자의 방식이 있고 각자의 장단점이 있습니다.",
        "line4": "12가지 질문으로 예상치 못한 변화 앞에서 나는 어떻게 반응하는지 분석합니다.",
        "line5": "내 변화 적응력 지수 측정하기 🌊 솔직하게 시작",
        "note": "※ 이상적인 모습이 아닌 실제 나의 반응 패턴에 가장 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 변화 적응력 지수)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 변화 적응력 지수 측정하기 🌊 솔직하게 시작",
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
        "adaptabilitySummary": "변화 적응력 요약",
        "adaptabilityType": "변화 적응력 유형",
        "indexScore": "적응력 지수",
        "domainDiagnosisTitle": "영역별 진단",
        "domainAnalysisTitle": "영역별 적응력 분석",
        "totalScore": "총점",
        "scoreUnit": "점",
        "cognitiveDomain": "인지적 유연성",
        "emotionalDomain": "감정적 반응",
        "behavioralDomain": "행동적 대응",
        "uncertaintyDomain": "불확실성 내성",
        "resilienceDomain": "회복력",
        "learningDomain": "학습·성장 지향",
        "strongestDomain": "변화 적응력이 가장 강하게 작동하는 영역",
        "boostDomain": "지금 가장 개발하면 빠르게 올릴 수 있는 영역",
        "strengthsTitle": "이 유형이 가장 강한 상황",
        "cautionsTitle": "이 유형의 주의점",
        "tryNowTitle": "이 유형을 위한 변화 대응 팁",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 변화 적응력: {type}! 🌊\\n나 변화에 이렇게 반응함 너는 어떤 유형이야?",
        "kakao": "내 변화 적응력: {type}! 🌊\\n나 변화에 이렇게 반응함 너는?",
        "wechat": "내 변화 적응력: {type}! 🌊\\n같이 해봐!",
        "whatsapp": "내 변화 적응력: {type}! 🌊\\n너는 어떤 유형? 같이 해보자!",
        "telegram": "내 변화 적응력: {type}! 🌊\\n너는 어떤 유형이야?",
        "line": "내 변화 적응력: {type}! 🌊\\n너는 어떤 유형이야?",
        "startDefault": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
        "startKakao": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
        "startWechat": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
        "startWhatsapp": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
        "startTelegram": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
        "startLine": "나의 변화 적응력 지수 🌊 솔직하게 시작해봐!",
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
        "line5": "Measure My Change Adaptability Index 🌊 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Change Adaptability Index Test)",
        "goToTest": "Go to test",
        "startTest": "Measure My Change Adaptability Index 🌊 Start Honestly",
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
        "adaptabilitySummary": "Change adaptability summary",
        "adaptabilityType": "Change adaptability type",
        "indexScore": "Adaptability index",
        "domainDiagnosisTitle": "Domain diagnosis",
        "domainAnalysisTitle": "Domain adaptability analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "cognitiveDomain": "Cognitive flexibility",
        "emotionalDomain": "Emotional response",
        "behavioralDomain": "Behavioral response",
        "uncertaintyDomain": "Uncertainty tolerance",
        "resilienceDomain": "Resilience",
        "learningDomain": "Learning & growth orientation",
        "strongestDomain": "Strongest adaptability domain",
        "boostDomain": "Fastest area to improve adaptability",
        "strengthsTitle": "Situations where this type excels",
        "cautionsTitle": "Cautions for this type",
        "tryNowTitle": "Change response tips for this type",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My change adaptability: {type}! 🌊\\nHow do you react to change?",
        "kakao": "My change adaptability: {type}! 🌊\\nWhat's your type?",
        "wechat": "My change adaptability: {type}! 🌊\\nTry this test too!",
        "whatsapp": "My change adaptability: {type}! 🌊\\nWhat's your type? Let's try together!",
        "telegram": "My change adaptability: {type}! 🌊\\nWhat's your adaptability type?",
        "line": "My change adaptability: {type}! 🌊\\nWhat's your type?",
        "startDefault": "My Change Adaptability Index 🌊 Start honestly!",
        "startKakao": "My Change Adaptability Index 🌊 Start honestly!",
        "startWechat": "My Change Adaptability Index 🌊 Start honestly!",
        "startWhatsapp": "My Change Adaptability Index 🌊 Start honestly!",
        "startTelegram": "My Change Adaptability Index 🌊 Start honestly!",
        "startLine": "My Change Adaptability Index 🌊 Start honestly!",
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
        if k == ANCHOR:
            new_data[KEY] = block
        new_data[k] = v
    return new_data


# ko.json — full Korean block
ko_path = MESSAGES_DIR / "ko.json"
ko_data = json.loads(ko_path.read_text(encoding="utf-8"))
if KEY in ko_data:
    print("skip ko (exists)")
else:
    ko_data = insert_after_anchor(ko_data, KO_BLOCK)
    ko_path.write_text(json.dumps(ko_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("updated ko")

# other locales — skeleton
for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY in data:
        print(f"skip {loc} (exists)")
        continue
    data = insert_after_anchor(data, SKELETON)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
