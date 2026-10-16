# -*- coding: utf-8 -*-
"""Insert phase3LoveConfidenceLevelTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3LoveConfidenceLevelTest"
ANCHOR = "phase3ConfessionSuccessTest"

START_KO = "나의 연애 자신감 레벨 테스트 🌱 좋아하는 사람 앞에서 나는 나를 얼마나 믿고 있을까? 12가지 상황으로 내 레벨 확인"
START_EN = "My Dating Confidence Level 🌱 How much do you trust yourself in love? Find your level in 12 situations"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")


def share_block(start: str) -> dict:
    block = {p: "{type}" for p in SHARE_PLATFORMS}
    block.update({p: start for p in START_PLATFORMS})
    return block


KO_BLOCK = {
    "startMessage": {
        "line1": "\"연애에서 나는 나를 얼마나 믿고 있을까?\"",
        "line2": "좋아하는 사람 앞에서는 작아지고, 서운해도 말을 삼키고, 사랑받을 자격이 있는지 흔들릴 때가 있습니다. 반대로 어떤 순간에는 당당하게 내 마음을 말하기도 합니다. 연애 속 자신감은 상황마다 달라지지만 나의 평균 레벨이 있습니다.",
        "line3": "12가지 연애 상황에서 나의 반응을 점수로 합산해 연애 자신감 레벨과 상위 몇 %인지 알려드립니다. 레벨이 낮다고 부족한 것이 아니라 키울 수 있는 부분을 보여주는 것입니다.",
        "line4": "",
        "line5": "내 연애 레벨 확인하기 🌱 솔직하게 시작",
        "note": "※ 지금까지의 연애와 썸을 떠올리며 실제 나의 반응에 가장 가까운 선택지를 고르세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나의 연애 자신감 레벨 테스트)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "scoreTitle": "나의 연애 자신감 점수",
        "scoreUnit": "점",
        "topPercent": "상위 {percent}%",
        "keywords": "핵심 키워드",
        "strengths": "이 레벨의 강점",
        "growthPoint": "내 연애 자신감 성장 포인트",
        "tips": "자신감을 키우는 처방",
        "counseling": "전문가 상담 안내",
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
    "adsenseTitle": "AdSense Ad Area (My Dating Confidence Level)",
    "goToTest": "Take the test",
    "linkCopy": "Copy link",
    "kakao": "KakaoTalk",
    "telegram": "Telegram",
    "wechat": "WeChat",
    "line": "LINE",
    "whatsapp": "WhatsApp",
    "similarTests": "Similar tests",
    "scoreTitle": "My dating confidence score",
    "scoreUnit": "",
    "topPercent": "Top {percent}%",
    "keywords": "Key words",
    "strengths": "Strengths of this level",
    "growthPoint": "Where my confidence can grow",
    "tips": "How to grow it",
    "counseling": "A note on talking to someone",
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
        "line5": "Check My Dating Level 🌱 Start Honestly",
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
