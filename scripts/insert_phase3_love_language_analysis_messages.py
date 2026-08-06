# -*- coding: utf-8 -*-
"""Insert phase3LoveLanguageAnalysisTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3LoveLanguageAnalysisTest"
ANCHOR = "phase3LoveExpectationDiagnosisTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "사랑하는 방식은 사람마다 다릅니다.",
        "line2": "심리학자 게리 채프먼은 사람마다 사랑을 표현하고 받아들이는 언어가 다르다고 말했습니다. 말로 사랑을 전하는 사람, 함께하는 시간으로 사랑을 보여주는 사람, 작은 행동과 배려로 마음을 전하는 사람, 스킨십으로 연결감을 느끼는 사람, 선물로 감정을 표현하는 사람.",
        "line3": "문제는 서로의 언어가 다를 때 생깁니다. 나는 분명히 사랑하고 있는데 상대방은 느끼지 못하는 것이 여기서 옵니다.",
        "line4": "12가지 질문으로 내가 사랑을 표현하고 받아들이는 언어를 분석합니다. 커플이라면 둘이 같이 해보세요. 결과가 다르게 나오면 그게 오히려 중요한 대화의 시작점이 됩니다.",
        "line5": "내 연애 언어 찾기 💗 솔직하게 시작",
        "note": "※ 연애 중이거나 연애 경험을 떠올리며 가장 솔직하게 답하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 연애 언어 심층 분석)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 연애 언어 찾기 💗 솔직하게 시작",
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
        "languageSummary": "연애 언어 요약",
        "languageType": "연애 언어 유형",
        "loveKeywordsTitle": "연애 키워드",
        "domainAnalysisTitle": "5가지 언어별 점수",
        "totalScore": "총점",
        "scoreUnit": "점",
        "wordsAffirmationDomain": "인정하는 말",
        "qualityTimeDomain": "함께하는 시간",
        "receivingGiftsDomain": "선물·서프라이즈",
        "actsOfServiceDomain": "봉사·행동",
        "physicalTouchDomain": "스킨십",
        "conflictDevotionDomain": "갈등·헌신 방식",
        "strongestDomain": "나의 주 연애 언어",
        "boostDomain": "상대방에게 기대가 적은 언어",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형의 주의점",
        "lovePatternTitle": "이 유형의 연애 패턴",
        "compatiblePartnerTitle": "이 유형에게 맞는 연인",
        "hardMomentTitle": "이 유형이 관계에서 힘든 순간",
        "expressLoveMethodTitle": "이 유형이 사랑을 표현하는 방법",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 연애 언어: {type}! 💗 커플이면 둘이 같이 해보면 대화 시작점 됨 → 나 이렇게 사랑함 너는?",
        "kakao": "내 연애 언어: {type}! 💗 커플이면 같이 해봐",
        "wechat": "내 연애 언어: {type}! 💗 친구·연인이랑 같이 해봐",
        "whatsapp": "내 연애 언어: {type}! 💗 너도 해봐",
        "telegram": "내 연애 언어: {type}! 💗 너는 어떤 유형?",
        "line": "내 연애 언어: {type}! 💗 친구랑 비교해봐",
        "startDefault": "나의 연애 언어 심층 분석 💗 12가지 질문",
        "startKakao": "나의 연애 언어 심층 분석 💗 12가지 질문",
        "startWechat": "나의 연애 언어 심층 분석 💗 12가지 질문",
        "startWhatsapp": "나의 연애 언어 심층 분석 💗 12가지 질문",
        "startTelegram": "나의 연애 언어 심층 분석 💗 12가지 질문",
        "startLine": "나의 연애 언어 심층 분석 💗 12가지 질문",
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
        "line5": "Find My Love Language 💗 Start Now",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (My Love Language Deep Analysis)",
        "goToTest": "Go to test",
        "startTest": "Find My Love Language 💗 Start Honestly",
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
        "languageSummary": "Love language summary",
        "languageType": "Love language type",
        "loveKeywordsTitle": "Love keywords",
        "domainAnalysisTitle": "Scores by 5 love languages",
        "totalScore": "Total",
        "scoreUnit": " pts",
        "wordsAffirmationDomain": "Words of affirmation",
        "qualityTimeDomain": "Quality time",
        "receivingGiftsDomain": "Gifts & surprises",
        "actsOfServiceDomain": "Acts of service",
        "physicalTouchDomain": "Physical touch",
        "conflictDevotionDomain": "Conflict & devotion style",
        "strongestDomain": "Primary love language",
        "boostDomain": "Language with lower expectation",
        "strengthsTitle": "Strengths of this type",
        "cautionsTitle": "Cautions for this type",
        "lovePatternTitle": "Love pattern of this type",
        "compatiblePartnerTitle": "Compatible partner type",
        "hardMomentTitle": "Hard moments in relationships",
        "expressLoveMethodTitle": "How this type expresses love",
        "certificationPhrase": "Certification phrase",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My love language: {type}! 💗 Couples should try together → how do you love?",
        "kakao": "My love language: {type}! 💗 Try with your partner",
        "wechat": "My love language: {type}! 💗 Try with friends or partner",
        "whatsapp": "My love language: {type}! 💗 Try it too",
        "telegram": "My love language: {type}! 💗 What type are you?",
        "line": "My love language: {type}! 💗 Compare with friends",
        "startDefault": "My Love Language Deep Analysis 💗 12 questions",
        "startKakao": "My Love Language Deep Analysis 💗 12 questions",
        "startWechat": "My Love Language Deep Analysis 💗 12 questions",
        "startWhatsapp": "My Love Language Deep Analysis 💗 12 questions",
        "startTelegram": "My Love Language Deep Analysis 💗 12 questions",
        "startLine": "My Love Language Deep Analysis 💗 12 questions",
    },
    "alerts": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied to clipboard!",
        "shareFailed": "Sharing is unavailable.",
        "wechatCopy": "Link copied! Paste in WeChat to share.",
        "kakaoInit": "Initializing KakaoTalk share. Please try again shortly.",
        "kakaoError": "An error occurred while sharing to KakaoTalk.",
    },
    "recommendations": {
        "similarTestsTop5": "🎯 Top 5 similar tests",
        "popularTestsTop5": "🔥 Top 5 popular tests",
    },
}


def insert_after_anchor(data: dict, anchor: str, key: str, block: dict) -> None:
    if key in data:
        data[key] = block
        return
    keys = list(data.keys())
    if anchor not in keys:
        data[key] = block
        return
    idx = keys.index(anchor) + 1
    new_data: dict = {}
    for i, k in enumerate(keys):
        new_data[k] = data[k]
        if i == idx - 1:
            new_data[key] = block
    data.clear()
    data.update(new_data)


def main() -> None:
    ko_path = MESSAGES_DIR / "ko.json"
    ko_data = json.loads(ko_path.read_text(encoding="utf-8"))
    insert_after_anchor(ko_data, ANCHOR, KEY, KO_BLOCK)
    ko_path.write_text(json.dumps(ko_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {ko_path.name}")

    for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
        path = MESSAGES_DIR / f"{loc}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        insert_after_anchor(data, ANCHOR, KEY, SKELETON)
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Updated {path.name}")


if __name__ == "__main__":
    main()
