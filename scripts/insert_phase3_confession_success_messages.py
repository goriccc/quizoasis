# -*- coding: utf-8 -*-
"""Insert phase3ConfessionSuccessTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3ConfessionSuccessTest"
ANCHOR = "phase3PushPullLevelTest"

START_KO = "나의 고백 성공 확률 💌 같은 마음이라도 타이밍과 방식이 결과를 바꿉니다. 10가지 상황으로 내 고백 확률 계산"
START_EN = "My Confession Success Rate 💌 Timing and style change the outcome. Estimate yours in 10 situations"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")


def share_block(start: str) -> dict:
    block = {p: "{type}" for p in SHARE_PLATFORMS}
    block.update({p: start for p in START_PLATFORMS})
    return block


KO_BLOCK = {
    "startMessage": {
        "line1": "\"내가 고백하면, 통할까?\"",
        "line2": "같은 마음이라도 어떤 타이밍에, 어떤 방식으로 전하느냐에 따라 결과가 달라지곤 합니다. 고백의 성공은 상대의 마음만이 아니라 내가 쌓아 온 과정과 전하는 스타일에도 달려 있습니다.",
        "line3": "10가지 상황에서 나의 선택을 점수로 합산해 고백 성공 확률과 상위 몇 %인지 알려드립니다. 결과를 친구와 비교해 보세요.",
        "line4": "",
        "line5": "내 고백 확률 계산하기 💌 솔직하게 시작",
        "note": "※ 지금까지의 썸과 짝사랑을 떠올리며 실제 나의 선택에 더 가까운 쪽을 고르세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 고백 성공 확률)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "scoreTitle": "나의 고백 점수",
        "scoreUnit": "점",
        "topPercent": "상위 {percent}%",
        "keywords": "핵심 키워드",
        "strengths": "이 확률대의 강점",
        "growthPoint": "내 고백 보완 포인트",
        "tips": "확률을 올리는 처방",
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

SKELETON_UI = {
    "adsenseTitle": "AdSense Ad Area (My Confession Success Rate)",
    "goToTest": "Take the test",
    "linkCopy": "Copy link",
    "kakao": "KakaoTalk",
    "telegram": "Telegram",
    "wechat": "WeChat",
    "line": "LINE",
    "whatsapp": "WhatsApp",
    "similarTests": "Similar tests",
    "scoreTitle": "My confession score",
    "scoreUnit": "",
    "topPercent": "Top {percent}%",
    "keywords": "Key words",
    "strengths": "Strengths at this rate",
    "growthPoint": "What to work on",
    "tips": "How to raise the odds",
    "oneLiner": "In one line",
    "shareResult": "Share your result",
    "popularBadge": "Popular",
}

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Calculate My Confession Odds 💌 Start Honestly",
        "note": "",
    },
    "ui": SKELETON_UI,
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
