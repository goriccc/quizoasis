# -*- coding: utf-8 -*-
"""Insert phase3ExamStudyTypeTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3ExamStudyTypeTest"
ANCHOR = "phase3DesertIslandSurvivalKitTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "시험 기간, 당신은 어떤 사람인가요?",
        "line2": "공부를 시작하려고 앉았는데 책상 정리부터 하는 사람이 있고, 시험 이틀 전까지 아무것도 안 하다가 전날 밤을 통째로 태우는 사람이 있고, 한 페이지를 이해하지 못하면 절대 넘어가지 못하는 사람이 있습니다.",
        "line3": "어느 방식이 더 뛰어난 게 아닙니다. 다만 각자에게 맞는 방식이 있고 그것을 알면 더 효율적으로, 덜 지치면서 공부할 수 있습니다.",
        "line4": "12가지 공부 상황으로 나의 학습 스타일과 최적 공부법을 분석합니다.",
        "line5": "내 공부 유형 찾기 📚 솔직하게 시작",
        "note": "※ 각 상황에서 실제 나의 행동 패턴에 가장 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 시험 공부 유형)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 공부 유형 찾기 📚 솔직하게 시작",
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
        "studySummary": "공부 유형 요약",
        "studyType": "공부 유형",
        "studyKeywordsTitle": "공부 키워드",
        "domainAnalysisTitle": "6개 영역별 점수",
        "totalScore": "총점",
        "scoreUnit": "점",
        "startStyleDomain": "공부 시작 방식",
        "focusEnvDomain": "집중 환경",
        "studyMethodDomain": "공부 방법",
        "slumpCopingDomain": "슬럼프·위기 대처",
        "examEvePatternDomain": "시험 전날 패턴",
        "resultAcceptanceDomain": "결과 수용 방식",
        "strongestDomain": "공부 스타일이 가장 뚜렷한 영역",
        "boostDomain": "지금 보완하면 좋은 영역",
        "strengthsTitle": "이 유형의 강점",
        "cautionsTitle": "이 유형의 약점",
        "studyTipTitle": "이 유형에게 맞는 공부법",
        "typicalPhraseTitle": "이 유형의 한마디",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 공부 유형: {type}! 📚 친구한테 보내서 비교해봐 → 나 이 유형이라 맞음 ㅋㅋ",
        "kakao": "내 공부 유형: {type}! 📚 친구한테 보내서 비교해봐",
        "wechat": "내 공부 유형: {type}! 📚 친구랑 같이 해봐",
        "whatsapp": "내 공부 유형: {type}! 📚 너도 해봐",
        "telegram": "내 공부 유형: {type}! 📚 너는 어떤 유형?",
        "line": "내 공부 유형: {type}! 📚 친구랑 비교해봐",
        "startDefault": "나의 시험 공부 유형 📚 12가지 공부 상황",
        "startKakao": "나의 시험 공부 유형 📚 12가지 공부 상황",
        "startWechat": "나의 시험 공부 유형 📚 12가지 공부 상황",
        "startWhatsapp": "나의 시험 공부 유형 📚 12가지 공부 상황",
        "startTelegram": "나의 시험 공부 유형 📚 12가지 공부 상황",
        "startLine": "나의 시험 공부 유형 📚 12가지 공부 상황",
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
        "line5": "My Exam Study Type 📚 Start Now",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (My Exam Study Type)",
        "goToTest": "Go to test",
        "startTest": "Find My Study Type 📚 Start Now",
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
        "studySummary": "Study type summary",
        "studyType": "Study type",
        "studyKeywordsTitle": "Study keywords",
        "domainAnalysisTitle": "Scores by 6 domains",
        "totalScore": "Total",
        "scoreUnit": " pts",
        "startStyleDomain": "How you start studying",
        "focusEnvDomain": "Focus environment",
        "studyMethodDomain": "Study method",
        "slumpCopingDomain": "Slump & crisis coping",
        "examEvePatternDomain": "Night-before-exam pattern",
        "resultAcceptanceDomain": "How you accept results",
        "strongestDomain": "Strongest study-style domain",
        "boostDomain": "Domain to improve now",
        "strengthsTitle": "Strengths of this type",
        "cautionsTitle": "Weaknesses of this type",
        "studyTipTitle": "Study tips for this type",
        "typicalPhraseTitle": "What this type often says",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My study type: {type}! 📚 Share with friends!",
        "kakao": "My study type: {type}! 📚 Share with friends!",
        "wechat": "My study type: {type}! 📚 Try with friends!",
        "whatsapp": "My study type: {type}! 📚 Try it too!",
        "telegram": "My study type: {type}! 📚 What's your type?",
        "line": "My study type: {type}! 📚 Compare with friends!",
        "startDefault": "My Exam Study Type 📚 12 study situations",
        "startKakao": "My Exam Study Type 📚 12 study situations",
        "startWechat": "My Exam Study Type 📚 12 study situations",
        "startWhatsapp": "My Exam Study Type 📚 12 study situations",
        "startTelegram": "My Exam Study Type 📚 12 study situations",
        "startLine": "My Exam Study Type 📚 12 study situations",
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
