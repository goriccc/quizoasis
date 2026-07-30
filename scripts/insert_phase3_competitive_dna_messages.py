# -*- coding: utf-8 -*-
"""Insert phase3CompetitiveDnaTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3CompetitiveDnaTest"
ANCHOR = "phase3DecisionMakingStyleTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Analyze My Competitive DNA 🔥 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Competitive DNA Test)",
        "goToTest": "Go to test",
        "startTest": "Analyze My Competitive DNA 🔥 Start Honestly",
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
        "competitiveDna": "Competitive DNA",
        "competitiveType": "Competitiveness type",
        "competitiveKeywords": "Competition keywords",
        "domainAnalysisTitle": "Detailed competitiveness pattern analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "reactionDomain": "Immediate reaction in competition",
        "winLossDomain": "Attitude toward winning and losing",
        "motivationDomain": "Competition motivation",
        "comparisonDomain": "Comparing with others",
        "strategyDomain": "Competition style and strategy",
        "lifeImpactDomain": "Impact on daily life",
        "strongestDomain": "Domain where competitiveness peaks",
        "lowestDomain": "Domain where other motives dominate",
        "strengthsTitle": "Strengths of this type",
        "cautionsTitle": "Cautions for this type",
        "characteristicsTitle": "Characteristics of this type",
        "environmentGuideTitle": "Environment and activity fit",
        "bestEnvironmentsTitle": "Best-fit environments",
        "sportsGameTypesTitle": "Best-fit sports and games",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My competitive DNA: {type}! 🔥\\nWhat type are you?",
        "kakao": "My competitive DNA: {type}! 🔥\\nWhy am I like this? What about you?",
        "wechat": "My competitive DNA: {type}! 🔥\\nTry this test too!",
        "whatsapp": "My competitive DNA: {type}! 🔥\\nWhat type are you? Let's try together!",
        "telegram": "My competitive DNA: {type}! 🔥\\nWhat competitiveness type are you?",
        "line": "My competitive DNA: {type}! 🔥\\nWhy am I like this? What about you?",
        "startDefault": "Competitive DNA Test 🔥 Start honestly!",
        "startKakao": "Competitive DNA Test 🔥 Start honestly!",
        "startWechat": "Competitive DNA Test 🔥 Start honestly!",
        "startWhatsapp": "Competitive DNA Test 🔥 Start honestly!",
        "startTelegram": "Competitive DNA Test 🔥 Start honestly!",
        "startLine": "Competitive DNA Test 🔥 Start honestly!",
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
