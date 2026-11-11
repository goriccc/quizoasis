# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
data = (root / "lib" / "phase3ContactObsessionReasonData.ts").read_text(encoding="utf-8")
i18n = (root / "lib" / "phase3ContactObsessionReasonI18n.ts").read_text(encoding="utf-8")
sql = (root / "supabase" / "insert-phase3-contact-obsession-reason.sql").read_text(encoding="utf-8")

assert "PHASE3_CONTACT_OBSESSION_REASON_I18N" in data
assert "withForeign" in data
assert "Why Do I Get So Obsessed with Texts" in i18n
assert "なぜ恋愛すると連絡に執着" in i18n
assert "为什么一恋爱就对消息这么执着" in i18n or "為什麼一戀愛就對消息這麼執著" in i18n
assert "Tại sao yêu rồi lại ám ảnh tin nhắn" in i18n
assert "Kenapa Begitu Obsesi Chat" in i18n

locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
counsel_markers = (
    "counseling",
    "상담",
    "咨询",
    "諮詢",
    "カウンセリング",
    "tư vấn",
    "konseling",
    "精神科",
    "정신건강",
    "psikiater",
    "tâm thần",
)
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
    tip_blob = "\n".join(r["changeTips"] for r in j["results"])
    tip_lower = tip_blob.lower()
    assert any(x in tip_blob or x in tip_lower for x in counsel_markers), f"{loc} missing counseling tip"
    msg = json.loads(
        (root / "messages" / loc / "tests" / "phase3-contact-obsession-reason.json").read_text(encoding="utf-8")
    )
    ns = msg["phase3ContactObsessionReasonTest"]
    assert ns["startMessage"]["line1"].strip()
    assert ns["ui"]["startTest"].strip()
    assert ns["shareMessages"]["startDefault"].strip()
    assert ns["alerts"]["linkCopied"].strip()
    print("ok", loc, j["meta"]["title"][:48])

assert "Why Do I Get So Obsessed with Texts" in sql
assert "なぜ恋愛" in sql
assert "执着" in sql or "執著" in sql
print("SQL has multilingual titles")
print("ALL VERIFY PASS")
