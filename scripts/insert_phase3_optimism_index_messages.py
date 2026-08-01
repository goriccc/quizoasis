# -*- coding: utf-8 -*-
"""Insert phase3OptimismIndexTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3OptimismIndexTest"
ANCHOR = "phase3TimePerspectiveTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Measure My Optimism Index ☀️ Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Optimism Index Test)",
        "goToTest": "Go to test",
        "startTest": "Measure My Optimism Index ☀️ Start Honestly",
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
        "optimismSummary": "Optimism summary",
        "optimismType": "Optimism type",
        "indexScore": "Optimism index",
        "domainAnalysisTitle": "Seligman 3P domain analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "permanenceDomain": "Permanence",
        "pervasivenessDomain": "Pervasiveness",
        "personalizationDomain": "Personalization",
        "strongestDomain": "Strongest optimistic interpretation domain",
        "boostDomain": "Fastest area to raise optimism",
        "strengthsTitle": "Strengths of this pattern",
        "paradoxStrengthTitle": "Paradoxical strength of this pattern",
        "cautionsTitle": "Cautions for this pattern",
        "hardReasonTitle": "Why this pattern feels hard",
        "enrichTitle": "How to strengthen this pattern",
        "seligman3PTitle": "Seligman 3P diagnosis",
        "tryNowTitle": "Try this now",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My optimism index: {type}! ☀️\\nWhat's your score?",
        "kakao": "My optimism index: {type}! ☀️\\nHow optimistic are you?",
        "wechat": "My optimism index: {type}! ☀️\\nTry this test too!",
        "whatsapp": "My optimism index: {type}! ☀️\\nWhat's your score? Let's try together!",
        "telegram": "My optimism index: {type}! ☀️\\nWhat's your optimism type?",
        "line": "My optimism index: {type}! ☀️\\nHow optimistic are you?",
        "startDefault": "My Optimism Index ☀️ Start honestly!",
        "startKakao": "My Optimism Index ☀️ Start honestly!",
        "startWechat": "My Optimism Index ☀️ Start honestly!",
        "startWhatsapp": "My Optimism Index ☀️ Start honestly!",
        "startTelegram": "My Optimism Index ☀️ Start honestly!",
        "startLine": "My Optimism Index ☀️ Start honestly!",
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
