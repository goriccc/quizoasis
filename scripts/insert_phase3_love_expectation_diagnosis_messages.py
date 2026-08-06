# -*- coding: utf-8 -*-
"""Insert phase3LoveExpectationDiagnosisTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3LoveExpectationDiagnosisTest"
ANCHOR = "phase3ExamStudyTypeTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "연인에게 얼마나 기대하고 있나요?",
        "line2": "기대치가 낮으면 상처를 덜 받는 대신 관계가 얕아질 수 있고, 기대치가 높으면 사랑받는 느낌이 클 수 있지만 실망도 커집니다. 문제는 내 기대치가 어느 수준인지 스스로 잘 모른다는 것입니다.",
        "line3": "&quot;나는 많이 바라지 않는다&quot;고 생각하는데 실제로는 많이 바라고 있거나, 반대로 &quot;기대가 크다&quot;고 생각하는데 사실 적정 수준인 경우도 많습니다.",
        "line4": "12가지 질문으로 나의 연애 기대치가 실제로 어느 수준인지 솔직하게 측정합니다.",
        "line5": "내 연애 기대치 측정하기 💗 솔직하게 시작",
        "note": "※ 연애 중이거나 연애 경험을 기준으로 가장 솔직하게 답하세요. 이상적인 모습이 아닌 실제 나를 기준으로.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 연애 기대치 진단)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 연애 기대치 측정하기 💗 솔직하게 시작",
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
        "expectationSummary": "기대치 수준 요약",
        "expectationType": "기대치 유형",
        "expectationKeywordsTitle": "기대치 키워드",
        "domainAnalysisTitle": "6개 영역별 점수",
        "totalScore": "총점",
        "scoreUnit": "점",
        "contactCommunicationDomain": "연락·소통 기대",
        "timeMeetingDomain": "시간·만남 기대",
        "emotionalSupportDomain": "감정 지지 기대",
        "understandingEmpathyDomain": "이해·공감 기대",
        "futureDevotionDomain": "미래·헌신 기대",
        "overallExpectLevelDomain": "전체 기대 수준",
        "strongestDomain": "기대치가 가장 높은 연애 영역",
        "boostDomain": "가장 자립적으로 처리하는 영역",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형의 주의점",
        "guidanceAdviceTitle": "이 유형을 위한 가이드",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 연애 기대치: {type}! 💗 친구·연인이랑 같이 해보면 기대치 차이 바로 보임 → 나 이 유형이래 너는?",
        "kakao": "내 연애 기대치: {type}! 💗 친구·연인이랑 같이 해봐",
        "wechat": "내 연애 기대치: {type}! 💗 커플이면 둘이 같이 해봐",
        "whatsapp": "내 연애 기대치: {type}! 💗 너도 해봐",
        "telegram": "내 연애 기대치: {type}! 💗 너는 어떤 유형?",
        "line": "내 연애 기대치: {type}! 💗 친구랑 비교해봐",
        "startDefault": "나의 연애 기대치 진단 💗 12가지 질문",
        "startKakao": "나의 연애 기대치 진단 💗 12가지 질문",
        "startWechat": "나의 연애 기대치 진단 💗 12가지 질문",
        "startWhatsapp": "나의 연애 기대치 진단 💗 12가지 질문",
        "startTelegram": "나의 연애 기대치 진단 💗 12가지 질문",
        "startLine": "나의 연애 기대치 진단 💗 12가지 질문",
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
        "line5": "My Love Expectation Diagnosis 💗 Start Now",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (My Love Expectation Diagnosis)",
        "goToTest": "Go to test",
        "startTest": "Measure My Love Expectations 💗 Start Honestly",
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
        "expectationSummary": "Expectation level summary",
        "expectationType": "Expectation type",
        "expectationKeywordsTitle": "Expectation keywords",
        "domainAnalysisTitle": "Scores by 6 domains",
        "totalScore": "Total",
        "scoreUnit": " pts",
        "contactCommunicationDomain": "Contact & communication",
        "timeMeetingDomain": "Time & meetings",
        "emotionalSupportDomain": "Emotional support",
        "understandingEmpathyDomain": "Understanding & empathy",
        "futureDevotionDomain": "Future & devotion",
        "overallExpectLevelDomain": "Overall expectation level",
        "strongestDomain": "Highest-expectation love area",
        "boostDomain": "Most self-reliant area",
        "strengthsTitle": "Strengths of this type",
        "cautionsTitle": "Cautions for this type",
        "guidanceAdviceTitle": "Guide for this type",
        "certificationPhrase": "Certification phrase",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My love expectation: {type}! 💗 Try with your partner → what type are you?",
        "kakao": "My love expectation: {type}! 💗 Try with friends",
        "wechat": "My love expectation: {type}! 💗 Couples should try together",
        "whatsapp": "My love expectation: {type}! 💗 Try it too",
        "telegram": "My love expectation: {type}! 💗 What type are you?",
        "line": "My love expectation: {type}! 💗 Compare with friends",
        "startDefault": "My Love Expectation Diagnosis 💗 12 questions",
        "startKakao": "My Love Expectation Diagnosis 💗 12 questions",
        "startWechat": "My Love Expectation Diagnosis 💗 12 questions",
        "startWhatsapp": "My Love Expectation Diagnosis 💗 12 questions",
        "startTelegram": "My Love Expectation Diagnosis 💗 12 questions",
        "startLine": "My Love Expectation Diagnosis 💗 12 questions",
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
