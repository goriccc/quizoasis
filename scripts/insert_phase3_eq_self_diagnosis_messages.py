# -*- coding: utf-8 -*-
"""Insert phase3EqSelfDiagnosisTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3EqSelfDiagnosisTest"
ANCHOR = "phase3ApprovalSeekingLevelTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "IQ가 높은 사람이 항상 잘 되는 건 아닙니다.",
        "line2": "다니엘 골먼의 연구에 따르면 직업적 성공의 최대 67%는 정서 지능(EQ)에 의해 결정된다고 합니다. 재능이 뛰어나도 감정을 조절하지 못하거나 타인을 이해하지 못하면 장기적으로 한계가 오고, 반대로 EQ가 높은 사람은 어떤 환경에서든 관계를 만들고 위기를 넘깁니다.",
        "line3": "EQ는 다섯 가지로 이루어집니다. 자신의 감정을 아는 것(자기인식), 그것을 다루는 것(자기조절), 스스로 움직이게 만드는 것(내적 동기), 타인의 감정을 느끼는 것(공감), 그것을 관계로 연결하는 것(사회성).",
        "line4": "12가지 질문으로 나의 EQ 수준과 5가지 요소별 강점과 약점을 분석합니다.",
        "line5": "내 EQ 자가진단 시작하기 💜 솔직하게 시작",
        "note": "※ 이상적인 모습이 아닌 실제 나의 행동 패턴에 가장 가까운 것을 선택하세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 정서 지능 EQ 자가진단)",
        "goToTest": "테스트 하러 가기",
        "startTest": "내 EQ 자가진단 시작하기 💜 솔직하게 시작",
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
        "eqSummary": "EQ 수준",
        "eqType": "EQ 유형",
        "developFocusTitle": "개발 포커스",
        "fiveElementsAnalysisTitle": "5요소 분석",
        "domainAnalysisTitle": "EQ 5요소별 점수",
        "totalScore": "총 EQ 지수",
        "scoreUnit": "점",
        "selfAwarenessDomain": "자기인식",
        "selfRegulationDomain": "자기조절",
        "motivationDomain": "내적 동기",
        "empathyDomain": "공감",
        "socialSkillsDomain": "사회성",
        "strongestDomain": "EQ 강점 영역",
        "boostDomain": "지금 가장 개발이 필요한 영역",
        "strengthsTitle": "강점 요소",
        "cautionsTitle": "주의점",
        "masterTraitsTitle": "이 수준 EQ의 공통점",
        "tryNowTitle": "지금 당장 해볼 것",
        "certificationPhrase": "인증 문구",
        "oneLiner": "한 줄 평",
    },
    "shareMessages": {
        "default": "내 EQ 자가진단: {type}! 💜\\n나 IQ보다 EQ가 중요함 너는 몇 점이야?",
        "kakao": "내 EQ 자가진단: {type}! 💜\\n나 IQ보다 EQ가 중요함 너는?",
        "wechat": "내 EQ 자가진단: {type}! 💜\\n같이 해봐!",
        "whatsapp": "내 EQ 자가진단: {type}! 💜\\n너도 측정해봐!",
        "telegram": "내 EQ 자가진단: {type}! 💜\\n너는 EQ 몇 점이야?",
        "line": "내 EQ 자가진단: {type}! 💜\\n너는 EQ 몇 점이야?",
        "startDefault": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
        "startKakao": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
        "startWechat": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
        "startWhatsapp": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
        "startTelegram": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
        "startLine": "나의 정서 지능(EQ) 자가진단 💜 솔직하게 시작해봐!",
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
        "line5": "Start My EQ Self-Diagnosis 💜 Begin Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (EQ Self-Diagnosis Test)",
        "goToTest": "Go to test",
        "startTest": "Start My EQ Self-Diagnosis 💜 Begin Honestly",
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
        "eqSummary": "EQ level",
        "eqType": "EQ type",
        "developFocusTitle": "Development focus",
        "fiveElementsAnalysisTitle": "Five-element analysis",
        "domainAnalysisTitle": "EQ domain scores",
        "totalScore": "Total EQ score",
        "scoreUnit": " pts",
        "selfAwarenessDomain": "Self-awareness",
        "selfRegulationDomain": "Self-regulation",
        "motivationDomain": "Motivation",
        "empathyDomain": "Empathy",
        "socialSkillsDomain": "Social skills",
        "strongestDomain": "Strongest EQ domain",
        "boostDomain": "Domain to develop most",
        "strengthsTitle": "Strengths",
        "cautionsTitle": "Cautions",
        "masterTraitsTitle": "Common traits at this EQ level",
        "tryNowTitle": "Try this now",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My EQ self-diagnosis: {type}! 💜\\nWhat's your EQ score?",
        "kakao": "My EQ self-diagnosis: {type}! 💜\\nWhat's yours?",
        "wechat": "My EQ self-diagnosis: {type}! 💜\\nTry this test too!",
        "whatsapp": "My EQ self-diagnosis: {type}! 💜\\nMeasure your EQ too!",
        "telegram": "My EQ self-diagnosis: {type}! 💜\\nWhat's your EQ score?",
        "line": "My EQ self-diagnosis: {type}! 💜\\nWhat's your EQ score?",
        "startDefault": "My EQ Self-Diagnosis 💜 Start honestly!",
        "startKakao": "My EQ Self-Diagnosis 💜 Start honestly!",
        "startWechat": "My EQ Self-Diagnosis 💜 Start honestly!",
        "startWhatsapp": "My EQ Self-Diagnosis 💜 Start honestly!",
        "startTelegram": "My EQ Self-Diagnosis 💜 Start honestly!",
        "startLine": "My EQ Self-Diagnosis 💜 Start honestly!",
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
