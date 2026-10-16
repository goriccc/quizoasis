# -*- coding: utf-8 -*-
"""Insert phase3PushPullLevelTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3PushPullLevelTest"
ANCHOR = "phase3SameTypeAttractionTest"

START_KO = "나의 밀당 레벨 테스트 🎣 너무 다가가면 부담, 너무 물러서면 식음. 10가지 상황으로 내 밀당 레벨 재기"
START_EN = "My Push-Pull Level Test 🎣 How well do you balance closeness and distance? Find your level in 10 situations"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")


def share_block(start: str) -> dict:
    block = {p: "{type}" for p in SHARE_PLATFORMS}
    block.update({p: start for p in START_PLATFORMS})
    return block


KO_BLOCK = {
    "startMessage": {
        "line1": "\"밀당, 나는 몇 레벨일까?\"",
        "line2": "너무 다가가면 부담스럽고, 너무 물러서면 식은 줄 압니다. 어떤 사람은 자연스럽게 거리를 조절하고, 어떤 사람은 직진만 하거나 계산하다 지칩니다. 좋은 밀당은 상대를 흔드는 기술이 아니라 서로 편한 거리를 찾는 감각입니다.",
        "line3": "10가지 썸·연애 상황에서 나의 반응을 점수로 합산해 밀당 레벨을 알려드립니다. 연인이나 친구와 결과를 비교해 보세요.",
        "line4": "",
        "line5": "내 밀당 레벨 재기 🎣 솔직하게 시작",
        "note": "※ 지금까지의 썸과 연애를 떠올리며 실제 나의 반응에 가장 가까운 선택지를 고르세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 밀당 레벨 테스트)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "scoreTitle": "나의 밀당 점수",
        "scoreUnit": "점",
        "keywords": "핵심 키워드",
        "strengths": "이 레벨의 강점",
        "growthPoint": "내 밀당 성장 포인트",
        "chemistryTitle": "우리 둘 밀당 궁합",
        "chemistryHint": "상대의 점수(10~40)를 입력하면 점수 차이에 따른 한 줄을 보여 드립니다.",
        "chemistryPlaceholder": "상대 점수",
        "chemistryInvalid": "10점에서 40점 사이의 정수만 입력해 주세요.",
        "tips": "레벨을 올리는 처방",
        "oneLiner": "한 줄 평",
        "shareResult": "결과 공유하기",
        "popularBadge": "인기",
    },
    "shareMessages": share_block(START_KO),
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
        "line5": "Check My Push-Pull Level 🎣 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (My Push-Pull Level Test)",
        "goToTest": "Take the test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "LINE",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "scoreTitle": "My push-pull score",
        "scoreUnit": "",
        "keywords": "Key words",
        "strengths": "Strengths of this level",
        "growthPoint": "My growth point",
        "chemistryTitle": "Our push-pull match",
        "chemistryHint": "Enter their score (10–40) to see a one-line comment on the gap.",
        "chemistryPlaceholder": "Their score",
        "chemistryInvalid": "Enter a whole number from 10 to 40.",
        "tips": "How to level up",
        "oneLiner": "In one line",
        "shareResult": "Share your result",
        "popularBadge": "Popular",
    },
    "shareMessages": share_block(START_EN),
    "alerts": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied to clipboard!",
        "shareFailed": "Sharing isn't available.",
        "wechatCopy": "Link copied! Paste it in WeChat to share.",
        "kakaoInit": "Setting up KakaoTalk sharing. Please try again in a moment.",
        "kakaoError": "Something went wrong while sharing to KakaoTalk.",
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


def write_locale(loc: str, block: dict) -> None:
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY in data:
        print(f"skip {loc} (exists)")
        return
    data = insert_after_anchor(data, block)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")


write_locale("ko", KO_BLOCK)
for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
    write_locale(loc, SKELETON)
