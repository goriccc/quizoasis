# -*- coding: utf-8 -*-
"""Insert phase3RiskToleranceTest skeleton into non-ko message files."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"

KEY = "phase3RiskToleranceTest"
ANCHOR = "phase3GritIndexTest"

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "Start the Risk Tolerance Test 🎲 Be honest",
        "note": "",
    },
    "ui": {
        "adsenseTitle": "AdSense Ad Area (Risk Tolerance Test)",
        "goToTest": "Go to test",
        "startTest": "Start the Risk Tolerance Test 🎲 Be honest",
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
        "riskLevel": "Risk tolerance level",
        "riskType": "Risk type",
        "riskAcceptanceLevel": "Risk acceptance level",
        "domainAnalysisTitle": "Detailed risk tolerance analysis",
        "totalScore": "Total score",
        "scoreUnit": " pts",
        "financialDomain": "Financial risk tolerance",
        "socialDomain": "Social risk tolerance",
        "physicalDomain": "Physical risk tolerance",
        "careerDomain": "Career risk tolerance",
        "uncertaintyDomain": "Uncertainty acceptance",
        "strongestDomain": "Strongest risk domain",
        "conservativeDomain": "Most conservative domain",
        "domainDiagnosisTitle": "Domain diagnosis",
        "strengthsTitle": "Strengths of this type",
        "cautionTitle": "Caution",
        "investmentCareerDirection": "Investment & career direction for your type",
        "investmentStyleTitle": "Investment style",
        "entrepreneurshipStyleTitle": "Entrepreneurship style",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "My risk tolerance: {type}! 🎲\nWhat risk type are you?",
        "kakao": "My risk tolerance: {type}! 🎲\nWhat risk type are you?",
        "wechat": "My risk tolerance: {type}! 🎲\nTry this test too!",
        "whatsapp": "My risk tolerance: {type}! 🎲\nWhat type are you? Let's try together!",
        "telegram": "My risk tolerance: {type}! 🎲\nWhat risk type are you?",
        "line": "My risk tolerance: {type}! 🎲\nWhat risk type are you?",
        "startDefault": "Risk Tolerance Test 🎲 Start honestly!",
        "startKakao": "Risk Tolerance Test 🎲 Start honestly!",
        "startWechat": "Risk Tolerance Test 🎲 Start honestly!",
        "startWhatsapp": "Risk Tolerance Test 🎲 Start honestly!",
        "startTelegram": "Risk Tolerance Test 🎲 Start honestly!",
        "startLine": "Risk Tolerance Test 🎲 Start honestly!",
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
