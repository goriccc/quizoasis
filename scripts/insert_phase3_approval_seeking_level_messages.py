# -*- coding: utf-8 -*-
"""Insert phase3ApprovalSeekingLevelTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3ApprovalSeekingLevelTest"
ANCHOR = "phase3ChangeAdaptabilityTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "타인의 평가가 나에게 얼마나 영향을 미치고 있나요?",
        "line2": "인정 욕구는 나쁜 게 아닙니다. 사람은 누구나 인정받고 싶어하고 그것은 지극히 자연스러운 감정입니다. 문제는 그 농도입니다.",
        "line3": "좋아요가 몇 개인지 확인하지 않아도 아무렇지 않다면 농도가 낮은 것이고, 누군가의 한마디 비판이 하루 종일 머릿속을 맴돈다면 농도가 높은 것입니다. 그리고 그 농도에 따라 관계·선택·감정의 방식이 달라집니다.",
        "line4": "12가지 질문으로 지금 내 인정 욕구가 어느 농도에 있는지 솔직하게 측정합니다. 높다고 나빠도 낮다고 좋은 것도 아닙니다. 지금 농도를 아는 것이 먼저입니다.",
        "line5": "내 인정 욕구 농도 측정하기 💜 솔직하게 시작",
        "note": "※ 이상적인 모습이 아닌 지금 실제 나의 패턴에 가장 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 인정 욕구 농도)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 인정 욕구 농도 측정하기 💜 솔직하게 시작",
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
        "desireSummary": "인정 욕구 농도",
        "desireType": "인정 욕구 유형",
        "evaluationImpact": "타인 평가 영향도",
        "domainAnalysisTitle": "영역별 인정 욕구 분석",
        "totalScore": "총점",
        "scoreUnit": "점",
        "snsOnlineDomain": "SNS·온라인 반응",
        "praiseCriticismDomain": "칭찬·비판 반응",
        "othersGazeDomain": "타인 시선 의식",
        "relationshipDomain": "관계 속 인정 욕구",
        "selfDecisionDomain": "자기 결정 독립성",
        "psychologicalDomain": "심리적 영향도",
        "strongestDomain": "인정 욕구가 가장 강하게 작동하는 영역",
        "mostIndependentDomain": "가장 독립적인 영역",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형의 주의점",
        "characteristicsTitle": "이 유형의 특징",
        "patternTitle": "이 수준이 만드는 패턴",
        "maintainTitle": "유지 방법",
        "neededTitle": "이 유형에게 필요한 것",
        "helpGuideTitle": "도움이 되는 것",
        "tryNowTitle": "지금 당장 할 수 있는 것",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 인정 욕구 농도: {type}! 💜\\n나 인정 욕구 이 정도야 너는 농도 얼마야?",
        "kakao": "내 인정 욕구 농도: {type}! 💜\\n나 인정 욕구 이 정도야 너는?",
        "wechat": "내 인정 욕구 농도: {type}! 💜\\n같이 해봐!",
        "whatsapp": "내 인정 욕구 농도: {type}! 💜\\n너는 농도 얼마야? 같이 해보자!",
        "telegram": "내 인정 욕구 농도: {type}! 💜\\n너는 농도 얼마야?",
        "line": "내 인정 욕구 농도: {type}! 💜\\n너는 농도 얼마야?",
        "startDefault": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
        "startKakao": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
        "startWechat": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
        "startWhatsapp": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
        "startTelegram": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
        "startLine": "나의 인정 욕구 농도 💜 솔직하게 시작해봐!",
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
        "line5": "Measure My Approval-Seeking Level 💜 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Approval-Seeking Level Test)",
        "goToTest": "Go to test",
        "startTest": "Measure My Approval-Seeking Level 💜 Start Honestly",
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
        "desireSummary": "Approval-seeking level",
        "desireType": "Approval-seeking type",
        "evaluationImpact": "Others' evaluation impact",
        "domainAnalysisTitle": "Domain analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "snsOnlineDomain": "SNS & online reactions",
        "praiseCriticismDomain": "Praise & criticism",
        "othersGazeDomain": "Awareness of others' gaze",
        "relationshipDomain": "Approval in relationships",
        "selfDecisionDomain": "Self-decision independence",
        "psychologicalDomain": "Psychological impact",
        "strongestDomain": "Strongest approval-seeking domain",
        "mostIndependentDomain": "Most independent domain",
        "strengthsTitle": "Strengths of this type",
        "cautionsTitle": "Cautions for this type",
        "characteristicsTitle": "Characteristics of this type",
        "patternTitle": "Patterns at this level",
        "maintainTitle": "How to maintain",
        "neededTitle": "What this type needs",
        "helpGuideTitle": "What helps at this level",
        "tryNowTitle": "Try this now",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My approval-seeking level: {type}! 💜\\nWhat's your level?",
        "kakao": "My approval-seeking level: {type}! 💜\\nWhat's yours?",
        "wechat": "My approval-seeking level: {type}! 💜\\nTry this test too!",
        "whatsapp": "My approval-seeking level: {type}! 💜\\nWhat's your level? Let's try together!",
        "telegram": "My approval-seeking level: {type}! 💜\\nWhat's your approval-seeking level?",
        "line": "My approval-seeking level: {type}! 💜\\nWhat's your level?",
        "startDefault": "My Approval-Seeking Level 💜 Start honestly!",
        "startKakao": "My Approval-Seeking Level 💜 Start honestly!",
        "startWechat": "My Approval-Seeking Level 💜 Start honestly!",
        "startWhatsapp": "My Approval-Seeking Level 💜 Start honestly!",
        "startTelegram": "My Approval-Seeking Level 💜 Start honestly!",
        "startLine": "My Approval-Seeking Level 💜 Start honestly!",
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
