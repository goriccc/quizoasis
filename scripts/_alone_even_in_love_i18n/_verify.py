# -*- coding: utf-8 -*-
"""Verify alone-even-in-love i18n completeness and scoring balance."""
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

# scoring: each type 1-5 should appear exactly 8 times across RAW_QUESTIONS options
data = (root / "lib" / "phase3AloneEvenInLoveData.ts").read_text(encoding="utf-8")
raw_start = data.find("const RAW_QUESTIONS")
raw_end = data.find("export const phase3AloneEvenInLoveQuestions")
raw = data[raw_start:raw_end]
raw_scores = [int(x) for x in re.findall(r",\s*([1-5])\]", raw)]
assert len(raw_scores) == 40, f"expected 40 option scores, got {len(raw_scores)}"
from collections import Counter

c = Counter(raw_scores)
assert all(c[i] == 8 for i in range(1, 6)), f"score imbalance: {dict(c)}"
print("scoring ok:", dict(sorted(c.items())))

# client must not use counseling/disclaimer UI keys
client = (root / "components" / "Phase3AloneEvenInLoveTestClient.tsx").read_text(encoding="utf-8")
assert "ui.counseling" not in client
assert "ui.disclaimer" not in client
print("client counseling/disclaimer unused ok")

for loc in locales:
    b = json.loads((i18n_dir / f"{loc}.json").read_text(encoding="utf-8"))
    assert b["meta"]["title"] and b["meta"]["description"] and b["meta"]["tags"]
    assert len(b["questions"]) == 10
    assert len(b["results"]) == 5
    for qi, q in enumerate(b["questions"]):
        assert q["q"].strip(), f"{loc} Q{qi+1} empty"
        assert len(q["opts"]) == 4
        for oi, o in enumerate(q["opts"]):
            assert o.strip(), f"{loc} Q{qi+1} opt{oi} empty"
    for ri, r in enumerate(b["results"]):
        for k in result_keys:
            assert r.get(k, "").strip(), f"{loc} result{ri+1} {k} empty"
            assert k != "counselingNote"
        assert "counselingNote" not in r, f"{loc} result{ri+1} has counselingNote"
        assert re.search(r"[,、，]", r["keywords"]), f"{loc} result{ri+1} keywords missing comma"
        assert "\n" in r["changeTips"], f"{loc} result{ri+1} changeTips missing newlines"
        assert "\n\n" in r["description"], f"{loc} result{ri+1} description missing \\n\\n unfold break"
    msg_path = root / "messages" / loc / "tests" / "phase3-alone-even-in-love.json"
    msg = json.loads(msg_path.read_text(encoding="utf-8"))
    ns = msg["phase3AloneEvenInLoveTest"]
    assert "note" not in ns.get("startMessage", {})
    for line in ("line1", "line2", "line3"):
        assert ns["startMessage"][line].strip(), f"{loc} startMessage.{line} empty"
    for k in ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine"):
        assert ns["shareMessages"][k].strip() and ns["shareMessages"][k] != "{type}"
    assert "counseling" not in ns.get("ui", {}), f"{loc} unexpected ui.counseling"
    assert "disclaimer" not in ns.get("ui", {}), f"{loc} unexpected ui.disclaimer"
    # foreign messages should not still be Korean placeholders
    assert "혼자가 편한 이유 알아보기" not in ns["ui"]["startTest"], f"{loc} startTest still Korean"
    print("locale ok:", loc)

i18n_ts = (root / "lib" / "phase3AloneEvenInLoveI18n.ts").read_text(encoding="utf-8")
assert "PHASE3_ALONE_EVEN_IN_LOVE_I18N" in i18n_ts
assert "counselingNote" not in i18n_ts
assert "en: ''" not in i18n_ts

assert "withForeign" in data and "KO_RESULTS" in data
assert "KO-first" not in data
assert "counselingNote" not in data

sql = (root / "supabase" / "insert-phase3-alone-even-in-love.sql").read_text(encoding="utf-8")
assert "KO-first" not in sql
for loc in ["ko"] + locales:
    assert f'"{loc}"' in sql
assert (
    "Why Do I Feel More Comfortable Alone" in sql
    or "なぜ交際中でも一人" in sql
    or "为什么恋爱中我也更想一个人" in sql
    or "為什麼戀愛中我也更想一個人" in sql
)
print("all verify ok")
