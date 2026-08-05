# -*- coding: utf-8 -*-
"""Insert phase3FriendshipBalanceGameTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3FriendshipBalanceGameTest"
ANCHOR = "phase3FamilyBalanceGameTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "둘 중 하나를 반드시 골라야 합니다.",
        "line2": "쉬운 문제는 없습니다. 그리고 정답도 없습니다. 다만 당신이 선택한 것들이 모여 당신이 어떤 친구인지를 보여줍니다.",
        "line3": "12가지 극한 우정 딜레마. 고민하면 할수록 더 어렵습니다. 결과를 친구에게 보내서 비교해보세요. \"어떻게 그걸 골랐어?!\"로 시작되는 대화가 보장됩니다.",
        "line4": "12라운드. 도망칠 수 없습니다.",
        "line5": "우정 극한 밸런스 게임 시작 🔥 각오하고 시작",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (밸런스 게임 - 우정 극한편)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "friendshipStyleType": "우정 스타일",
        "friendshipKeywords": "우정 키워드",
        "friendSays": "친구가 나에게 하는 말",
        "friendshipCautions": "이 유형의 주의점",
        "typeStrengths": "이 유형의 강점",
        "oneLiner": "한 줄 평",
        "certificationPhrase": "인증 문구",
        "shareResult": "결과 공유하기",
        "retakeTest": "다시 하기",
        "otherTests": "다른 테스트 보기",
    },
    "shareMessages": {
        "default": "우정 극한 밸런스 결과: {type}! 🔥 친구한테 보내서 비교해봐 → 선택 다르면 '어떻게 그걸 골랐어?!' 보장",
        "kakao": "우정 극한 밸런스 결과: {type}! 🔥 친구한테 보내서 비교해봐",
        "wechat": "우정 극한 밸런스 결과: {type}! 🔥 친구랑 같이 해봐",
        "whatsapp": "우정 극한 밸런스 결과: {type}! 🔥 너도 해봐",
        "telegram": "우정 극한 밸런스 결과: {type}! 🔥 너는 어떤 유형?",
        "line": "우정 극한 밸런스 결과: {type}! 🔥 친구랑 비교해봐",
        "startDefault": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
        "startKakao": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
        "startWechat": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
        "startWhatsapp": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
        "startTelegram": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
        "startLine": "밸런스 게임 — 우정 극한편 🔥 12라운드 극한 선택",
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
        "line5": "Friendship Extreme Balance Game 🔥 Start Now",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Friendship Balance Game)",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "friendshipStyleType": "Friendship style",
        "friendshipKeywords": "Friendship keywords",
        "friendSays": "What friends say about you",
        "friendshipCautions": "Cautions for this type",
        "typeStrengths": "Strengths of this type",
        "oneLiner": "One-liner",
        "certificationPhrase": "Certification",
        "shareResult": "Share your result",
        "retakeTest": "Retake",
        "otherTests": "Other tests",
    },
    "shareMessages": {
        "default": "Friendship balance result: {type}! 🔥 Share with friends!",
        "kakao": "Friendship balance result: {type}! 🔥 Share with friends!",
        "wechat": "Friendship balance result: {type}! 🔥 Try with friends!",
        "whatsapp": "Friendship balance result: {type}! 🔥 Try it too!",
        "telegram": "Friendship balance result: {type}! 🔥 What's your type?",
        "line": "Friendship balance result: {type}! 🔥 Compare with friends!",
        "startDefault": "Balance Game — Friendship Extreme 🔥 12 rounds",
        "startKakao": "Balance Game — Friendship Extreme 🔥 12 rounds",
        "startWechat": "Balance Game — Friendship Extreme 🔥 12 rounds",
        "startWhatsapp": "Balance Game — Friendship Extreme 🔥 12 rounds",
        "startTelegram": "Balance Game — Friendship Extreme 🔥 12 rounds",
        "startLine": "Balance Game — Friendship Extreme 🔥 12 rounds",
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
