# -*- coding: utf-8 -*-
"""Insert phase3TimePerspectiveTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3TimePerspectiveTest"
ANCHOR = "phase3CompetitiveDnaTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Find My Time Perspective ⏳ Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Time Perspective Test)",
        "goToTest": "Go to test",
        "startTest": "Find My Time Perspective ⏳ Start Honestly",
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
        "timePerspectivePattern": "Time perspective pattern",
        "timePerspectiveType": "Time perspective type",
        "timeKeywords": "Time keywords",
        "domainAnalysisTitle": "Detailed time perspective analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "freeTimeDomain": "Free time pattern",
        "emotionDomain": "Emotional pattern",
        "decisionDomain": "Decision style",
        "happinessDomain": "Source of happiness",
        "difficultyDomain": "Coping with difficulty",
        "timeAttitudeDomain": "Attitude toward time",
        "futureOrientedDomain": "Most future-oriented domain",
        "pastNegativeDomain": "Domain closest to past-negative focus",
        "strengthsTitle": "Strengths of this time perspective",
        "cautionsTitle": "Cautions for this time perspective",
        "innerSideTitle": "Inner side of this time perspective",
        "hardReasonTitle": "Why this time perspective feels hard",
        "patternTitle": "Pattern of this time perspective",
        "happinessStrategyTitle": "Happiness strategy",
        "happinessStrategySubtitle": "Strategies that fit this time perspective",
        "enrichGuideTitle": "How to enrich this time perspective",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My time perspective: {type}! ⏳\\nWhich time zone do you live in?",
        "kakao": "My time perspective: {type}! ⏳\\nPast, present, or future — which are you?",
        "wechat": "My time perspective: {type}! ⏳\\nTry this test too!",
        "whatsapp": "My time perspective: {type}! ⏳\\nWhich time zone do you live in? Let's try together!",
        "telegram": "My time perspective: {type}! ⏳\\nWhich time zone do you live in?",
        "line": "My time perspective: {type}! ⏳\\nPast, present, or future — which are you?",
        "startDefault": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
        "startKakao": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
        "startWechat": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
        "startWhatsapp": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
        "startTelegram": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
        "startLine": "My Past-Present-Future Time Perspective ⏳ Start honestly!",
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
