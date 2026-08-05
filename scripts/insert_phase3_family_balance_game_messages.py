# -*- coding: utf-8 -*-
"""Insert phase3FamilyBalanceGameTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3FamilyBalanceGameTest"
ANCHOR = "phase3RelationshipEnergyTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "가족이니까 당연히 해야 할까요? 아니면 가족이어도 선이 있을까요?",
        "line2": "쉬운 질문이 하나도 없습니다. 그리고 정답도 없습니다. 다만 당신이 12라운드에서 무엇을 선택했는지가 모여 당신이 가족 안에서 어떤 사람인지를 보여줍니다.",
        "line3": "가족 단톡방에 공유해보세요. 같은 가족인데 결과가 완전히 다르게 나올 수 있습니다. \"어떻게 그걸 골랐어?!\"로 시작되는 가족 대화가 보장됩니다.",
        "line4": "12라운드. 도망칠 수 없습니다.",
        "line5": "가족 극한 밸런스 게임 시작 🏠 각오하고 시작",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (밸런스 게임 - 가족 극한편)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "familyStyleType": "가족 스타일",
        "familyKeywords": "관계 키워드",
        "familySays": "가족이 나에게 하는 말",
        "familyCautions": "이 유형의 주의점",
        "typeStrengths": "이 유형의 강점",
        "oneLiner": "한 줄 평",
        "certificationPhrase": "인증 문구",
        "shareResult": "결과 공유하기",
        "retakeTest": "다시 하기",
        "otherTests": "다른 테스트 보기",
    },
    "shareMessages": {
        "default": "가족 극한 밸런스 결과: {type}! 🏠 가족 단톡방에 공유해봐 → 선택 다르면 '어떻게 그걸 골랐어?!' 보장",
        "kakao": "가족 극한 밸런스 결과: {type}! 🏠 가족 단톡방에 공유해봐",
        "wechat": "가족 극한 밸런스 결과: {type}! 🏠 가족이랑 같이 해봐",
        "whatsapp": "가족 극한 밸런스 결과: {type}! 🏠 너도 해봐",
        "telegram": "가족 극한 밸런스 결과: {type}! 🏠 너는 어떤 유형?",
        "line": "가족 극한 밸런스 결과: {type}! 🏠 가족이랑 비교해봐",
        "startDefault": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
        "startKakao": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
        "startWechat": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
        "startWhatsapp": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
        "startTelegram": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
        "startLine": "밸런스 게임 — 가족 극한편 🏠 12라운드 극한 선택",
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
        "line5": "Family Extreme Balance Game 🏠 Start Now",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Family Balance Game)",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "familyStyleType": "Family style",
        "familyKeywords": "Relationship keywords",
        "familySays": "What family says about you",
        "familyCautions": "Cautions for this type",
        "typeStrengths": "Strengths of this type",
        "oneLiner": "One-liner",
        "certificationPhrase": "Certification",
        "shareResult": "Share your result",
        "retakeTest": "Retake",
        "otherTests": "Other tests",
    },
    "shareMessages": {
        "default": "Family balance result: {type}! 🏠 Share in the family chat!",
        "kakao": "Family balance result: {type}! 🏠 Share in the family chat!",
        "wechat": "Family balance result: {type}! 🏠 Try with family!",
        "whatsapp": "Family balance result: {type}! 🏠 Try it too!",
        "telegram": "Family balance result: {type}! 🏠 What's your type?",
        "line": "Family balance result: {type}! 🏠 Compare with family!",
        "startDefault": "Balance Game — Family Extreme 🏠 12 rounds",
        "startKakao": "Balance Game — Family Extreme 🏠 12 rounds",
        "startWechat": "Balance Game — Family Extreme 🏠 12 rounds",
        "startWhatsapp": "Balance Game — Family Extreme 🏠 12 rounds",
        "startTelegram": "Balance Game — Family Extreme 🏠 12 rounds",
        "startLine": "Balance Game — Family Extreme 🏠 12 rounds",
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
