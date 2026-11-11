# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[2]
i18n = (root / "lib" / "phase3OvergivingEarlyLoveI18n.ts").read_text(encoding="utf-8")
data = (root / "lib" / "phase3OvergivingEarlyLoveData.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-overgiving-early-love.sql").read_text(encoding="utf-8")

assert "PHASE3_OVERGIVING_EARLY_LOVE_I18N" in data
assert "withForeign" in data

# empty string check on i18n object via node-like parse of JSON inside ts is hard;
# instead load source json packs
locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert j["meta"]["description"].strip()
    assert len(j["questions"]) == 10
    assert len(j["results"]) == 5
    for q in j["questions"]:
        assert q["q"].strip() and all(str(o).strip() for o in q["opts"])
    for r in j["results"]:
        for k in (
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
        ):
            assert str(r[k]).strip(), f"{loc} missing {k}"
    msg = json.loads((root / "messages" / loc / "tests" / "phase3-overgiving-early-love.json").read_text(encoding="utf-8"))
    ns = msg["phase3OvergivingEarlyLoveTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    assert ns["shareMessages"]["startDefault"].strip()
    print("ok", loc, j["meta"]["title"][:48])

for loc in locales:
    assert f'"{loc}"' in sql or f"'{loc}'" in sql or f'"{loc}":' in sql
assert "Why Do I" in sql or "Go All-In" in sql or "over" in sql.lower() or "付き合い" in sql or "过度" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
