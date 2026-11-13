# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3AnxiousWhenLovedData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3AnxiousWhenLovedI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-anxious-when-loved.sql").read_text(encoding="utf-8")

assert "PHASE3_ANXIOUS_WHEN_LOVED_I18N" in data
assert "withForeign" in data
assert "Type${a}" in data
assert "Type${{a}}" not in data
assert "options: { text: LocaleText; score: number }[];" in data
assert "Why Do I Get Anxious" in i18n
assert "なぜ恋人に優しくされるほど不安" in i18n
assert "为什么恋人越对我好" in i18n or "為什麼戀人越對我好" in i18n
assert "Tại sao càng được người yêu" in i18n
assert "Kenapa Semakin Dicintai" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
counsel_markers = (
    "counsel",
    "therapist",
    "mental health",
    "상담",
    "咨询",
    "諮詢",
    "カウンセリング",
    "tư vấn",
    "konseling",
    "konselor",
)
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert len(j["meta"]["tags"]) == 3
    assert len(j["questions"]) == 10 and len(j["results"]) == 5
    for r in j["results"]:
        tip = r["changeTips"]
        assert any(x.lower() in tip.lower() for x in counsel_markers), f"{loc} {r['typeName']} missing counseling"
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-anxious-when-loved.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3AnxiousWhenLovedTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    assert "disclaimer" not in ns["ui"]
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do I Get Anxious" in sql
assert "なぜ恋人に優しくされるほど不安" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
