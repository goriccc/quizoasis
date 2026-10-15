# -*- coding: utf-8 -*-
"""Insert phase3RealReasonSingleTest into ko.json (full) and skeleton into other locales."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3RealReasonSingleTest"
ANCHOR = "phase3FoodBalanceGameTest"

START_KO = "내가 연애를 못 하는 진짜 이유 🔍 외모도 성격도 괜찮은데 왜 아직 솔로일까? 12가지 상황으로 나만의 진짜 이유 찾기"
START_EN = "The Real Reason I'm Still Single 🔍 Find your own real reason in 12 situations"

KO_BLOCK = {
    "startMessage": {
        "line1": "\"외모도 성격도 괜찮은데, 왜 아직 솔로일까?\"",
        "line2": "주변에서는 \"너 정도면 금방 생기지\"라고 하는데 정작 연애는 시작되지 않습니다. 눈이 높아서일 수도, 마음을 열기 어려워서일 수도, 좋은 사람을 만날 자리가 없어서일 수도 있습니다. 대부분은 이유를 하나로 뭉뚱그려 \"인연이 없나 봐\"라고 넘깁니다.",
        "line3": "하지만 연애가 시작되지 않는 데에는 사람마다 서로 다른 진짜 이유가 있습니다. 그 이유를 알면 무엇을 바꿔야 하는지도 보입니다.",
        "line4": "12가지 상황에서 나도 몰랐던 나만의 이유를 찾아드립니다.",
        "line5": "내 진짜 이유 찾기 🔍 솔직하게 시작",
        "note": "※ 가장 솔직하게 나와 가까운 선택지를 고르세요. 연애 경험이 없어도 상상해서 답하면 됩니다.",
    },
    "ui": {
        "adsenseTitle": "AdSense 광고 영역 (내가 연애를 못 하는 진짜 이유)",
        "goToTest": "테스트 하러 가기",
        "linkCopy": "링크 복사",
        "kakao": "카카오톡",
        "telegram": "텔레그램",
        "wechat": "위챗",
        "line": "라인",
        "whatsapp": "왓츠앱",
        "similarTests": "유사한 다른 테스트",
        "realReason": "연애 못 하는 진짜 이유",
        "keywords": "핵심 키워드",
        "scoreTitle": "유형별 점수",
        "scoreUnit": "점",
        "hiddenReason": "숨은 이유",
        "strengths": "이 유형의 강점",
        "reasonDetail": "진짜 이유를 풀어보면",
        "frequentSaying": "이 유형이 자주 하는 말",
        "changeTips": "지금 바꿔볼 것",
        "oneLiner": "한 줄 평",
        "shareResult": "결과 공유하기",
        "popularBadge": "인기",
    },
    "shareMessages": {
        "default": "{type}",
        "kakao": "{type}",
        "wechat": "{type}",
        "whatsapp": "{type}",
        "telegram": "{type}",
        "line": "{type}",
        "startDefault": START_KO,
        "startKakao": START_KO,
        "startWechat": START_KO,
        "startWhatsapp": START_KO,
        "startTelegram": START_KO,
        "startLine": START_KO,
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
        "line5": "Find My Real Reason 🔍 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (The Real Reason I'm Still Single)",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "realReason": "The real reason",
        "keywords": "Key keywords",
        "scoreTitle": "Score by type",
        "scoreUnit": "",
        "hiddenReason": "Hidden reason",
        "strengths": "Strengths of this type",
        "reasonDetail": "Breaking down the reason",
        "frequentSaying": "What this type often says",
        "changeTips": "What to try now",
        "oneLiner": "One-liner",
        "shareResult": "Share your result",
    },
    "shareMessages": {
        "default": "{type}",
        "kakao": "{type}",
        "wechat": "{type}",
        "whatsapp": "{type}",
        "telegram": "{type}",
        "line": "{type}",
        "startDefault": START_EN,
        "startKakao": START_EN,
        "startWechat": START_EN,
        "startWhatsapp": START_EN,
        "startTelegram": START_EN,
        "startLine": START_EN,
    },
    "alerts": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied to clipboard!",
        "shareFailed": "Sharing is not available.",
        "wechatCopy": "Link copied! Paste it in WeChat to share.",
        "kakaoInit": "Initializing KakaoTalk sharing. Please try again shortly.",
        "kakaoError": "An error occurred while sharing to KakaoTalk.",
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
