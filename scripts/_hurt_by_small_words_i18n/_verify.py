# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3HurtBySmallWordsData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3HurtBySmallWordsI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-hurt-by-small-words.sql").read_text(encoding="utf-8")

assert "PHASE3_HURT_BY_SMALL_WORDS_I18N" in data
assert "withForeign" in data
assert "Type${a}" in data
assert "Type${{a}}" not in data
assert "options: { text: LocaleText; score: number }[];" in data
assert "진짜 이유를 풀어보면" not in data
assert "Why Do Casual Words" in i18n
assert "なぜ恋人の何気ない一言" in i18n
assert "为什么总被恋人的一句闲话" in i18n or "為什麼總被戀人的一句閒話" in i18n
assert "Tại sao lại tổn thương" in i18n
assert "Kenapa Sakit Hati" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
counsel_markers = (
    "counseling",
    "상담",
    "咨询",
    "諮詢",
    "カウンセリング",
    "tư vấn",
    "konseling",
    "mental health",
    "精神健康",
    "精神保健",
    "メンタル",
    "sức khỏe tâm thần",
    "kesehatan jiwa",
)
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert len(j["meta"]["tags"]) == 2
    assert len(j["questions"]) == 10 and len(j["results"]) == 5
    for r in j["results"]:
        assert "진짜 이유를 풀어보면" not in r["description"]
        assert "The real reason, unpacked" not in r["description"]
    tip_blob = "\n".join(
        [
            j["results"][0]["changeTips"],
            j["results"][3]["changeTips"],
            j["results"][4]["changeTips"],
        ]
    ).lower()
    assert any(x.lower() in tip_blob for x in counsel_markers), f"{loc} missing counseling tip"
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-hurt-by-small-words.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3HurtBySmallWordsTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do Casual Words" in sql
assert "なぜ恋人の何気ない一言" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
