# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3LoveEyeingReasonData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3LoveEyeingReasonI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-love-eyeing-reason.sql").read_text(encoding="utf-8")

assert "PHASE3_LOVE_EYEING_REASON_I18N" in data
assert "withForeign" in data
assert "진짜 이유를 풀어보면" not in data
assert "Why Do I Keep Reading the Room" in i18n
assert "なぜ恋愛するとつい空気を読みすぎる" in i18n
assert "为什么一恋爱就总爱察言观色" in i18n or "為什麼一戀愛就總愛察言觀色" in i18n
assert "Tại sao yêu rồi lại cứ dò xét" in i18n
assert "Kenapa Pacaran Selalu Baca Situasi" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
counsel_markers = (
    "counseling",
    "상담",
    "咨询",
    "諮詢",
    "カウンセリング",
    "tư vấn",
    "konseling",
)
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert len(j["questions"]) == 10 and len(j["results"]) == 5
    for r in j["results"]:
        assert "진짜 이유를 풀어보면" not in r["description"]
        assert "The real reason, unpacked" not in r["description"]
    tip1 = j["results"][0]["changeTips"]
    tip_blob = tip1 + "\n" + tip1.lower()
    assert any(x in tip_blob for x in counsel_markers), f"{loc} Type1 missing counseling tip"
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-love-eyeing-reason.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3LoveEyeingReasonTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do I Keep Reading the Room" in sql
assert "なぜ恋愛" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
