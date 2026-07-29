# -*- coding: utf-8 -*-
"""Insert phase3GritIndexTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3GritIndexTest"
ANCHOR = "phase3AloneTimeTypeTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Start the Grit Index Test 💪 Be honest",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Grit Index Test)",
        "goToTest": "Go to test",
        "startTest": "Start the Grit Index Test 💪 Be honest",
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
        "gritIndex": "Grit Index",
        "perseveranceScoreTitle": "Perseverance score",
        "passionScoreTitle": "Passion score",
        "bottleneckTitle": "Bottleneck notice",
        "bottleneckPerseverance": "Perseverance is your bottleneck right now.\nBuild a routine that helps you get through hard parts.",
        "bottleneckPassion": "Passion is your bottleneck right now.\nKeep your long-term direction by breaking goals into 3-month steps.",
        "perseveranceDiagnosis": "Perseverance diagnosis",
        "passionDiagnosis": "Passion diagnosis",
        "actionItemsTitle": "What you can do now",
        "duckworthQuoteTitle": "Angela Duckworth quote",
        "commonTraitsTitle": "Common traits",
        "cautionTitle": "Caution",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My Grit Index is {type}! 💪\nHow many points are you close to?",
        "kakao": "My Grit Index is {type}! 💪\nBe honest—how many points are you close to?",
        "wechat": "My Grit Index is {type}! 💪\nCheck your grit too!",
        "whatsapp": "My Grit Index is {type}! 💪\nHow many points are you close to? Share it with me!",
        "telegram": "My Grit Index is {type}! 💪\nShare your result with me!",
        "line": "My Grit Index is {type}! 💪\nHow many points are you close to?",
        "startDefault": "Grit Index Test 💪 Start honestly!",
        "startKakao": "Grit Index Test 💪 Start honestly!",
        "startWechat": "Grit Index Test 💪 Start honestly!",
        "startWhatsapp": "Grit Index Test 💪 Start honestly!",
        "startTelegram": "Grit Index Test 💪 Start honestly!",
        "startLine": "Grit Index Test 💪 Start honestly!",
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

for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))

    if KEY in data:
        print(f"skip {loc} (exists)")
        continue

    if ANCHOR not in data:
        raise SystemExit(f"anchor missing in {loc}: {ANCHOR}")

    new_data = {}
    for k, v in data.items():
        if k == ANCHOR:
            new_data[KEY] = SKELETON
        new_data[k] = v

    path.write_text(json.dumps(new_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")

