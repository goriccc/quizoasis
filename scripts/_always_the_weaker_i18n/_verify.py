# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3AlwaysTheWeakerInLoveData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3AlwaysTheWeakerInLoveI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-always-the-weaker-in-love.sql").read_text(encoding="utf-8")

assert "PHASE3_ALWAYS_THE_WEAKER_IN_LOVE_I18N" in data
assert "withForeign" in data
assert "Why Am I Always the Weaker One" in i18n
assert "なぜ恋愛でいつも下の立場" in i18n
assert "为什么恋爱里我总是弱势" in i18n or "為什麼戀愛裡我總是弱勢" in i18n
assert "Tại sao tôi luôn ở thế yếu" in i18n
assert "Kenapa Aku Selalu Jadi Pihak yang Kalah" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
for loc in locales:
    j = json.loads((Path(__file__).parent / f"{loc}.json").read_text(encoding="utf-8"))
    assert j["meta"]["title"].strip()
    assert j["meta"]["description"].strip()
    assert len(j["questions"]) == 10
    assert len(j["results"]) == 5
    for q in j["questions"]:
        assert q["q"].strip() and all(str(o).strip() for o in q["opts"]) and len(q["opts"]) == 4
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
        # counseling tips for Type2/Type3
    tip2 = j["results"][1]["changeTips"].lower()
    tip3 = j["results"][2]["changeTips"].lower()
    tip_blob = tip2 + "\n" + tip3 + "\n" + j["results"][1]["changeTips"] + "\n" + j["results"][2]["changeTips"]
    assert any(
        x in tip_blob
        for x in (
            "counseling",
            "상담",
            "咨询",
            "諮詢",
            "カウンセリング",
            "tư vấn",
            "konseling",
        )
    ), f"{loc} missing counseling tip"
    msg = json.loads((root / "messages" / loc / "tests" / "phase3-always-the-weaker-in-love.json").read_text(encoding="utf-8"))
    ns = msg["phase3AlwaysTheWeakerInLoveTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    assert ns["shareMessages"]["startDefault"].strip()
    assert ns["alerts"]["linkCopied"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Am I Always the Weaker One" in sql
assert "なぜ恋愛" in sql
assert "弱势" in sql or "弱勢" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
