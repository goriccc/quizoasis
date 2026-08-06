# -*- coding: utf-8 -*-
"""Insert phase3DesertIslandSurvivalKitTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3DesertIslandSurvivalKitTest"
ANCHOR = "phase3FriendshipBalanceGameTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "당신은 갑자기 무인도에 떨어졌습니다.",
        "line2": "구조대가 올 수도 있고 안 올 수도 있습니다. 일단 지금 챙길 수 있는 것들이 있습니다. 총 5가지를 골라야 합니다.",
        "line3": "생각보다 어렵습니다. 그리고 결과를 보면 \"나 이걸 왜 골랐지\"가 될 수도 있습니다. 선택이 끝나면 당신의 생존 본능 유형이 나옵니다. 결과를 친구에게 보내보세요. \"무인도에서 그걸 챙긴다고?!\"가 시작됩니다.",
        "line4": "5가지 선택. 도망칠 수 없습니다.",
        "line5": "무인도 생존 키트 선택 시작 🏝️ 살아남아봐",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 무인도 생존 키트 선택)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "survivalStyleType": "생존 유형",
        "survivalStrategy": "생존 전략",
        "islandSays": "무인도에서 하는 말",
        "survivalExtra": "이 유형의 추가 정보",
        "typeStrengths": "이 유형의 강점",
        "oneLiner": "한 줄 평",
        "certificationPhrase": "인증 문구",
        "shareResult": "결과 공유하기",
        "retakeTest": "다시 하기",
        "otherTests": "다른 테스트 보기",
    },
    "shareMessages": {
        "default": "무인도 생존 키트 결과: {type}! 🏝️ 친구한테 보내서 비교해봐 → \"무인도에서 그걸 챙긴다고?!\" 보장",
        "kakao": "무인도 생존 키트 결과: {type}! 🏝️ 친구한테 보내서 비교해봐",
        "wechat": "무인도 생존 키트 결과: {type}! 🏝️ 친구랑 같이 해봐",
        "whatsapp": "무인도 생존 키트 결과: {type}! 🏝️ 너도 해봐",
        "telegram": "무인도 생존 키트 결과: {type}! 🏝️ 너는 어떤 유형?",
        "line": "무인도 생존 키트 결과: {type}! 🏝️ 친구랑 비교해봐",
        "startDefault": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
        "startKakao": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
        "startWechat": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
        "startWhatsapp": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
        "startTelegram": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
        "startLine": "나의 무인도 생존 키트 선택 🏝️ 5가지 극한 선택",
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
        "line5": "Desert Island Survival Kit 🏝️ Start Now",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Desert Island Survival Kit)",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "survivalStyleType": "Survival type",
        "survivalStrategy": "Survival strategy",
        "islandSays": "What you'd say on the island",
        "survivalExtra": "Extra info for this type",
        "typeStrengths": "Strengths of this type",
        "oneLiner": "One-liner",
        "certificationPhrase": "Certification",
        "shareResult": "Share your result",
        "retakeTest": "Retake",
        "otherTests": "Other tests",
    },
    "shareMessages": {
        "default": "Desert island kit result: {type}! 🏝️ Share with friends!",
        "kakao": "Desert island kit result: {type}! 🏝️ Share with friends!",
        "wechat": "Desert island kit result: {type}! 🏝️ Try with friends!",
        "whatsapp": "Desert island kit result: {type}! 🏝️ Try it too!",
        "telegram": "Desert island kit result: {type}! 🏝️ What's your type?",
        "line": "Desert island kit result: {type}! 🏝️ Compare with friends!",
        "startDefault": "Desert Island Survival Kit 🏝️ 5 extreme choices",
        "startKakao": "Desert Island Survival Kit 🏝️ 5 extreme choices",
        "startWechat": "Desert Island Survival Kit 🏝️ 5 extreme choices",
        "startWhatsapp": "Desert Island Survival Kit 🏝️ 5 extreme choices",
        "startTelegram": "Desert Island Survival Kit 🏝️ 5 extreme choices",
        "startLine": "Desert Island Survival Kit 🏝️ 5 extreme choices",
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
