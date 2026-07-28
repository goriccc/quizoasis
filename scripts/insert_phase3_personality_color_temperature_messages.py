# -*- coding: utf-8 -*-
"""Insert phase3PersonalityColorTemperatureTest skeleton into non-ko message files."""
import json
from pathlib import Path

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "",
    },
    "ui": {
        "adsenseTitle": "AdSense",
        "goToTest": "Go to test",
        "linkCopy": "Copy link",
        "kakao": "KakaoTalk",
        "telegram": "Telegram",
        "wechat": "WeChat",
        "line": "Line",
        "whatsapp": "WhatsApp",
        "similarTests": "Similar tests",
        "questionHint": "Pick the image that draws you more. Trust your intuition.",
        "resultTitle": "My personality color temperature",
        "coolToneLabel": "Cool tone",
        "warmToneLabel": "Warm tone",
        "myEmotionTemperature": "My emotion temperature",
        "emotionColor": "Color",
        "emotionKeywords": "Emotion keywords",
        "strengthAtTemp": "Strength at this temperature",
        "charmAtTemp": "Charm at this temperature",
        "comfortableSpace": "Comfortable space",
        "colorCodes": "Matching color codes",
        "certificationPhrase": "Certification phrase",
        "oneLiner": "One-liner",
        "captureResult": "Capture my emotion temperature",
        "shareResult": "Share result",
    },
    "shareMessages": {
        "default": "{type}",
        "kakao": "{type}",
        "wechat": "{type}",
        "whatsapp": "{type}",
        "telegram": "{type}",
        "line": "{type}",
        "type1": "",
        "type2": "",
        "type3": "",
        "type4": "",
        "type5": "",
        "type6": "",
        "startDefault": "My Personality Color Temperature",
        "startKakao": "My Personality Color Temperature",
        "startWechat": "My Personality Color Temperature",
        "startWhatsapp": "My Personality Color Temperature",
        "startTelegram": "My Personality Color Temperature",
        "startLine": "My Personality Color Temperature",
    },
    "alerts": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied!",
        "shareFailed": "Sharing unavailable.",
        "wechatCopy": "Link copied! Paste in WeChat to share.",
        "kakaoInit": "Initializing KakaoTalk share. Please try again.",
        "kakaoError": "KakaoTalk share error.",
    },
    "recommendations": {
        "similarTestsTop5": "Similar tests Top 5",
        "popularTestsTop5": "Popular tests Top 5",
    },
}

KEY = "phase3PersonalityColorTemperatureTest"
ANCHOR = "phase3FirstImpressionColorScannerTest"

for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
    path = Path("messages") / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY in data:
        print(f"skip {loc} (exists)")
        continue
    if ANCHOR not in data:
        raise SystemExit(f"anchor missing in {loc}")
    new_data = {}
    for k, v in data.items():
        if k == ANCHOR:
            new_data[KEY] = SKELETON
        new_data[k] = v
    path.write_text(json.dumps(new_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
