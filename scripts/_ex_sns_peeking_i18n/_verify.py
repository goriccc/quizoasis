# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3ExSnsPeekingReasonData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3ExSnsPeekingReasonI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-ex-sns-peeking-reason.sql").read_text(encoding="utf-8")

assert "PHASE3_EX_SNS_PEEKING_REASON_I18N" in data
assert "withForeign" in data
assert "Type${a}" in data
assert "Type${{a}}" not in data
assert "options: { text: LocaleText; score: number }[];" in data
assert "Why Do I Still Peek" in i18n
assert "なぜ別れても元恋人のSNS" in i18n
assert "为什么分手后还总是偷看" in i18n or "為什麼分手後還總是偷看" in i18n
assert "Tại sao sau chia tay" in i18n
assert "Kenapa Setelah Putus" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert len(j["meta"]["tags"]) == 2
    assert len(j["questions"]) == 10 and len(j["results"]) == 5
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-ex-sns-peeking-reason.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3ExSnsPeekingReasonTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do I Still Peek" in sql
assert "なぜ別れても元恋人のSNS" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
