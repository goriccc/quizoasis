# -*- coding: utf-8 -*-
"""Insert phase3SameTypeAttractionTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3SameTypeAttractionTest"
ANCHOR = "phase3RealReasonSingleTest"

START_KO = "나는 왜 늘 비슷한 사람에게 끌릴까? 🧲 헤어지고 나면 꼭 비슷한 사람이 또 나타난다면? 12가지 상황으로 나만의 끌림 공식 찾기"
START_EN = "Why Am I Always Drawn to the Same Type? 🧲 Find your attraction formula in 12 situations"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")


def share_block(start: str) -> dict:
    block = {p: "{type}" for p in SHARE_PLATFORMS}
    block.update({p: start for p in START_PLATFORMS})
    return block


KO_BLOCK = {
    "startMessage": {
        "line1": "\"헤어지고 나면 꼭 비슷한 사람이 또 나타납니다.\"",
        "line2": "외모는 달라도 말투, 분위기, 연애가 흘러가는 방식은 어딘가 닮았습니다. 친구들은 \"너 또 그런 스타일이네\"라고 하고, 나는 \"이번엔 진짜 다른 사람이야\"라고 말하지만, 시간이 지나면 같은 장면이 반복됩니다.",
        "line3": "이건 우연도 운도 아닙니다. 사람마다 마음이 먼저 반응하는 포인트가 있고, 그 포인트가 나만의 끌림 공식이 됩니다. 공식을 알면 왜 자꾸 그 사람에게 끌리는지 이유가 정리됩니다.",
        "line4": "12가지 상황으로 내가 반복해서 끌리는 사람의 공통점과 끌림 공식을 찾아드립니다.",
        "line5": "내 끌림 공식 찾기 🧲 솔직하게 시작",
        "note": "※ 지금까지의 연애와 썸, 짝사랑을 떠올리며 가장 가까운 선택지를 고르세요.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (나는 왜 늘 비슷한 사람에게 끌릴까?)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "attractionFormula": "나의 끌림 공식",
        "keywords": "핵심 키워드",
        "scoreTitle": "유형별 점수",
        "scoreUnit": "점",
        "hiddenAttraction": "숨은 끌림",
        "attractedTo": "반복해서 끌리는 사람",
        "strengths": "이 유형의 강점",
        "repeatPattern": "반복 패턴",
        "frequentSaying": "이 유형이 자주 하는 말",
        "changeTips": "지금 바꿔볼 것",
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
        "line5": "Find My Attraction Formula 🧲 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Why Am I Always Drawn to the Same Type?)",
        "goToTest": "Take the test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "LINE",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "attractionFormula": "My attraction formula",
        "keywords": "Key words",
        "scoreTitle": "Score by type",
        "scoreUnit": "",
        "hiddenAttraction": "Hidden attraction",
        "attractedTo": "Who you keep falling for",
        "strengths": "Strengths of this type",
        "repeatPattern": "Repeating pattern",
        "frequentSaying": "What this type always says",
        "changeTips": "What to try now",
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
