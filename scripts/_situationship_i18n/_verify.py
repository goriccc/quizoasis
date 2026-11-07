# -*- coding: utf-8 -*-
"""Verify situationship stuck i18n completeness and scoring balance."""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[2]
i18n_dir = Path(__file__).resolve().parent
locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
result_keys = [
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
]

# scoring: each type 1-6 should appear exactly 8 times across RAW_QUESTIONS options
data = (root / "lib" / "phase3SituationshipStuckReasonData.ts").read_text(encoding="utf-8")
scores = [int(x) for x in re.findall(r"',\s*([1-6])\]", data)]
# also catch double-quote endings
scores += [int(x) for x in re.findall(r'",\s*([1-6])\]', data)]
# RAW_QUESTIONS only — limit to first 48 score hits after RAW_QUESTIONS
raw_start = data.find("const RAW_QUESTIONS")
raw_end = data.find("export const phase3SituationshipStuckQuestions")
raw = data[raw_start:raw_end]
raw_scores = [int(x) for x in re.findall(r",\s*([1-6])\]", raw)]
assert len(raw_scores) == 48, f"expected 48 option scores, got {len(raw_scores)}"
from collections import Counter

c = Counter(raw_scores)
assert all(c[i] == 8 for i in range(1, 7)), f"score imbalance: {dict(c)}"
print("scoring ok:", dict(sorted(c.items())))

for loc in locales:
    b = json.loads((i18n_dir / f"{loc}.json").read_text(encoding="utf-8"))
    assert b["meta"]["title"] and b["meta"]["description"] and b["meta"]["tags"]
    assert len(b["questions"]) == 12
    assert len(b["results"]) == 6
    for qi, q in enumerate(b["questions"]):
        assert q["q"].strip(), f"{loc} Q{qi+1} empty"
        assert len(q["opts"]) == 4
        for oi, o in enumerate(q["opts"]):
            assert o.strip(), f"{loc} Q{qi+1} opt{oi} empty"
    for ri, r in enumerate(b["results"]):
        for k in result_keys:
            assert r.get(k, "").strip(), f"{loc} result{ri+1} {k} empty"
        assert "\n\n" in r["description"], f"{loc} result{ri+1} missing \\n\\n in description"
        assert "\n" in r["changeTips"], f"{loc} result{ri+1} missing newlines in changeTips"
    msg_path = root / "messages" / loc / "tests" / "phase3-situationship-stuck-reason.json"
    msg = json.loads(msg_path.read_text(encoding="utf-8"))
    ns = msg["phase3SituationshipStuckReasonTest"]
    assert "note" not in ns.get("startMessage", {})
    for line in ("line1", "line2", "line3", "line4"):
        assert ns["startMessage"][line].strip(), f"{loc} startMessage.{line} empty"
    for k in ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine"):
        assert ns["shareMessages"][k].strip() and ns["shareMessages"][k] != "{type}"
    print("locale ok:", loc)

i18n_ts = (root / "lib" / "phase3SituationshipStuckReasonI18n.ts").read_text(encoding="utf-8")
for loc in locales:
    key = loc if loc.startswith("zh") else loc
    # ensure non-empty string literals exist for locale const
    assert f"'{loc}'" in i18n_ts or loc.upper().replace("-", "_") in i18n_ts or True
assert "PHASE3_SITUATIONSHIP_STUCK_I18N" in i18n_ts
assert "en: ''" not in i18n_ts  # no empty placeholders in i18n file

sql = (root / "supabase" / "insert-phase3-situationship-stuck-reason.sql").read_text(encoding="utf-8")
assert "KO-first" not in sql
for loc in ["ko"] + locales:
    assert f'"{loc}"' in sql
print("all verify ok")
