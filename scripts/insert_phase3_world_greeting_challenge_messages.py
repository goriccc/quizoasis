# -*- coding: utf-8 -*-
"""Insert phase3WorldGreetingChallengeTest skeleton into non-ko message files."""
import json
from pathlib import Path

SKELETON = {
    "startMessage": {
        "line1": "",
        "line2": "",
        "line3": "",
        "line4": "",
        "line5": "",
        "note": "",
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
        "shareResult": "Share result",
        "scoreSummary": "{count} correct · 12 questions",
        "languageGrade": "Language grade",
        "scoreRange": "Score",
        "strengthZone": "Strength",
        "weakZone": "Weak zone",
        "retakeTip": "Retake tip",
        "characteristic": "Characteristic",
        "regretPoint": "Regret point",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
        "correctExplanationTitle": "Correct explanation",
        "feedbackCorrect": "Correct!",
        "feedbackWrong": "Incorrect.",
        "nextQuestion": "Next question",
        "viewResult": "View result",
    },
    "result": {
        "languageGrade": "Language grade",
        "scoreRange": "Score",
        "strengthZone": "Strength",
        "weakZone": "Weak zone",
        "retakeTip": "Retake tip",
        "characteristic": "Characteristic",
        "regretPoint": "Regret point",
        "certificationPhrase": "Certification",
        "oneLiner": "One-liner",
    },
    "shareMessages": {
        "default": "{type}",
        "kakao": "{type}",
        "wechat": "{type}",
        "whatsapp": "{type}",
        "telegram": "{type}",
        "line": "{type}",
        "startDefault": "World Greeting Challenge",
        "startKakao": "World Greeting Challenge",
        "startWechat": "World Greeting Challenge",
        "startWhatsapp": "World Greeting Challenge",
        "startTelegram": "World Greeting Challenge",
        "startLine": "World Greeting Challenge",
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

KEY = "phase3WorldGreetingChallengeTest"
ANCHOR = "phase3EverydayScienceQuizTest"

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
