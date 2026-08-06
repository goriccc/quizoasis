# -*- coding: utf-8 -*-
"""Insert phase3FoodBalanceGameTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3FoodBalanceGameTest"
ANCHOR = "phase3FriendshipBalanceGameTest"

KO_BLOCK = {
    "startMessage": {
        "line1": "둘 중 하나를 평생 먹어야 합니다.",
        "line2": "쉬운 라운드가 하나도 없습니다. 생각할수록 더 어렵습니다. 그리고 정답도 없습니다.",
        "line3": "12라운드를 선택하다 보면 나도 몰랐던 내 식성이 드러납니다. 결과를 친구에게 보내보세요. 같은 라운드에서 정반대 선택을 했다는 것을 알게 되는 순간 \"어떻게 그걸 골라?!\"가 시작됩니다.",
        "line4": "두 음식 이미지 중 딱 하나를 선택하세요. 평생 이것만 먹어야 한다는 각오로.",
        "line5": "음식 극한 밸런스 게임 시작 🍽️ 각오하고 시작",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (밸런스 게임 — 음식 극한편)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "questionHint": "두 음식 중 평생 하나만 먹어야 한다면? 직관적으로 선택하세요.",
        "resultTitle": "🍽️ 내 식성 스펙트럼",
        "mildLabel": "🌸 순한맛",
        "spicyLabel": "매운맛 🔥",
        "mySpiceScore": "내 매운맛 점수",
        "tasteType": "식성 유형",
        "tasteKeywords": "🔑 식성 키워드",
        "foodSays": "💬 음식 앞에서 하는 말",
        "foodTrait": "✨ 이 유형의 특징",
        "goodRestaurants": "🍴 함께 가면 좋은 식당",
        "extraTrait": "🔥 추가 특성",
        "certificationPhrase": "🏅 인증 문구",
        "oneLiner": "💬 한 줄 평",
        "captureResult": "내 식성 결과 캡처하기",
        "shareResult": "결과 공유하기",
    },
    "shareMessages": {
        "default": "{type}",
        "kakao": "{type}",
        "wechat": "{type}",
        "whatsapp": "{type}",
        "telegram": "{type}",
        "line": "{type}",
        "type1": "음식 극한 밸런스 결과: 소화기 천사형 🌸 마라탕 대신 순두부 다 골랐음... 배 걱정이 먼저인 거 맞음 ㅋㅋ → 어떻게 그걸 골라?! 친구랑 비교해봐",
        "type2": "음식 극한 밸런스 결과: 담백 미식가형 🍚 대부분 순한 거 골랐는데 마라탕 하나는 못 참음 ㅋㅋ → 어떻게 그걸 골라?! 음식 취향 비교해봐",
        "type3": "음식 극한 밸런스 결과: 균형 미각형 ⚖️ 딱 반반 나옴... 뭐든 잘 먹는 거 맞음 → 어떻게 그걸 골라?! 음식 취향 충돌 보장",
        "type4": "음식 극한 밸런스 결과: 자극 추구형 🌶️ 불냉면·마라탕·짬뽕 다 골랐음... 매운 것 없으면 밥 먹은 것 같지 않은 거 맞음 → 어떻게 그걸 골랐어?!",
        "type5": "음식 극한 밸런스 결과: 극강 매운맛파 🔥 거의 다 자극적인 거 골랐음... 이게 안 맵다고?가 일상인 거 맞음 ㅋㅋ → 어떻게 그걸 골라?!",
        "type6": "음식 극한 밸런스 결과: 먹방 레전드 마스터 🌋 12개 전부 자극 선택... 마라맛 아이스크림도 골랐음 → 어떻게 그걸 골라?! 충격 보장",
        "startDefault": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
        "startKakao": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
        "startWechat": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
        "startWhatsapp": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
        "startTelegram": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
        "startLine": "밸런스 게임 — 음식 극한편 🍽️ 12라운드 극한 선택",
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
        "line5": "Food Extreme Balance Game 🍽️ Start Now",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Food Balance Game)",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "questionHint": "Pick one food — as if you must eat it forever.",
        "resultTitle": "🍽️ My taste spectrum",
        "mildLabel": "🌸 Mild",
        "spicyLabel": "Spicy 🔥",
        "mySpiceScore": "My spice score",
        "tasteType": "Taste type",
        "tasteKeywords": "🔑 Taste keywords",
        "foodSays": "💬 What I say about food",
        "foodTrait": "✨ Food trait",
        "goodRestaurants": "🍴 Good restaurants together",
        "extraTrait": "🔥 Extra trait",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
        "captureResult": "Capture my result",
        "shareResult": "Share your result",
    },
    "shareMessages": {
        "default": "Food balance result: {type}! 🍽️ Share with friends!",
        "kakao": "Food balance result: {type}! 🍽️ Share with friends!",
        "wechat": "Food balance result: {type}! 🍽️ Try with friends!",
        "whatsapp": "Food balance result: {type}! 🍽️ Try it too!",
        "telegram": "Food balance result: {type}! 🍽️ What's your type?",
        "line": "Food balance result: {type}! 🍽️ Compare with friends!",
        "type1": "",
        "type2": "",
        "type3": "",
        "type4": "",
        "type5": "",
        "type6": "",
        "startDefault": "Balance Game — Food Extreme 🍽️ 12 rounds",
        "startKakao": "Balance Game — Food Extreme 🍽️ 12 rounds",
        "startWechat": "Balance Game — Food Extreme 🍽️ 12 rounds",
        "startWhatsapp": "Balance Game — Food Extreme 🍽️ 12 rounds",
        "startTelegram": "Balance Game — Food Extreme 🍽️ 12 rounds",
        "startLine": "Balance Game — Food Extreme 🍽️ 12 rounds",
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
