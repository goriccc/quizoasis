# -*- coding: utf-8 -*-
"""Insert phase3DecisionMakingStyleTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3DecisionMakingStyleTest"
ANCHOR = "phase3RiskToleranceTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Find My Decision-Making Style 🧭 Start Honestly",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Decision-Making Style Test)",
        "goToTest": "Go to test",
        "startTest": "Find My Decision-Making Style 🧭 Start Honestly",
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
        "decisionStyle": "Decision-making style",
        "decisionType": "Decision type",
        "decisionKeywords": "Decision keywords",
        "domainAnalysisTitle": "Detailed decision pattern analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "startDomain": "Decision start approach",
        "infoDomain": "Information gathering pattern",
        "othersDomain": "Using others' opinions",
        "uncertaintyDomain": "Handling uncertainty",
        "regretDomain": "Mistakes & regret pattern",
        "speedDomain": "Decision speed & criteria",
        "strongestDomain": "Most systematic decision domain",
        "intuitiveDomain": "Most intuition-dependent domain",
        "strengthsTitle": "Strengths of this type",
        "weaknessesTitle": "Weaknesses of this type",
        "situationGuideTitle": "Situation guide",
        "bestSituationsTitle": "Works best in",
        "riskySituationsTitle": "Risky situations",
        "improvementDirectionTitle": "Improvement direction",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My decision style: {type}! 🧭\nWhat type are you?",
        "kakao": "My decision style: {type}! 🧭\nWhy do I decide like this? What about you?",
        "wechat": "My decision style: {type}! 🧭\nTry this test too!",
        "whatsapp": "My decision style: {type}! 🧭\nWhat type are you? Let's try together!",
        "telegram": "My decision style: {type}! 🧭\nWhat decision type are you?",
        "line": "My decision style: {type}! 🧭\nWhy do I decide like this? What about you?",
        "startDefault": "Decision-Making Style Test 🧭 Start honestly!",
        "startKakao": "Decision-Making Style Test 🧭 Start honestly!",
        "startWechat": "Decision-Making Style Test 🧭 Start honestly!",
        "startWhatsapp": "Decision-Making Style Test 🧭 Start honestly!",
        "startTelegram": "Decision-Making Style Test 🧭 Start honestly!",
        "startLine": "Decision-Making Style Test 🧭 Start honestly!",
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
