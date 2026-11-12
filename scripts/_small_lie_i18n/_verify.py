# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3SmallLieReasonData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3SmallLieReasonI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-small-lie-reason.sql").read_text(encoding="utf-8")

assert "PHASE3_SMALL_LIE_REASON_I18N" in data
assert "withForeign" in data
assert "진짜 이유를 풀어보면" not in data
assert "Why Do I Keep Telling" in i18n
assert "なぜ恋人に小さな嘘" in i18n
assert "为什么总对恋人说" in i18n or "為什麼總對戀人說" in i18n
assert "Tại sao lại hay nói dối" in i18n
assert "Kenapa Suka Bohong" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert len(j["questions"]) == 10 and len(j["results"]) == 5
    for r in j["results"]:
        assert "진짜 이유를 풀어보면" not in r["description"]
        assert "The real reason, unpacked" not in r["description"]
        for k in [
            "title",
            "typeName",
            "realReason",
            "shortDescription",
            "description",
            "keywords",
            "strengths",
            "reasonDetail",
            "frequentSaying",
            "changeTips",
            "oneLiner",
            "shareLine",
        ]:
            assert str(r[k]).strip(), f"{loc} missing {k}"
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-small-lie-reason.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3SmallLieReasonTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do I Keep Telling" in sql
assert "なぜ恋人に小さな嘘" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
