# -*- coding: utf-8 -*-
"""Wire overgiving-early-love i18n into messages + SQL."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
i18n_dir = Path(__file__).resolve().parent
locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
bundles = {loc: json.loads((i18n_dir / f"{loc}.json").read_text(encoding="utf-8")) for loc in locales}

NS = "phase3OvergivingEarlyLoveTest"
SLUG = "phase3-overgiving-early-love"
THUMB = "p3_test_overgiving_early_love.webp"

ko_meta = {
    "title": "나는 왜 연애 초반에 과하게 잘해줄까?",
    "description": (
        "처음부터 이렇게 잘해주면 나중에 지치는 거 알면서, 왜 그럴까? "
        "10가지 상황으로 초반에 올인하는 진짜 이유와 속도를 조절하는 법을 알려드립니다."
    ),
    "tags": ["연애심리", "연애패턴"],
}
title_obj = {"ko": ko_meta["title"], **{loc: bundles[loc]["meta"]["title"] for loc in locales}}
desc_obj = {"ko": ko_meta["description"], **{loc: bundles[loc]["meta"]["description"] for loc in locales}}
tags_obj = {"ko": ko_meta["tags"], **{loc: bundles[loc]["meta"]["tags"] for loc in locales}}


def sql_str(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))
    return "'" + s.replace("'", "''") + "'"


sql = f"""-- {ko_meta['title']}
-- slug: {SLUG}
-- thumbnail: {THUMB}
-- category: personality · format: scenario_4

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  '{SLUG}',
  {sql_str(title_obj)},
  {sql_str(desc_obj)},
  '{THUMB}',
  'psychology',
  'personality',
  'scenario_4',
  {sql_str(tags_obj)},
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
"""
(root / "supabase" / f"insert-{SLUG}.sql").write_text(sql, encoding="utf-8", newline="\n")
print("SQL ok")

for loc in locales:
    b = bundles[loc]
    msg = {
        NS: {
            "startMessage": b["startMessage"],
            "ui": b["ui"],
            "shareMessages": b["shareMessages"],
            "alerts": b["alerts"],
            "recommendations": b["recommendations"],
        }
    }
    dest = root / "messages" / loc / "tests" / f"{SLUG}.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    print("messages", loc)

print("done")
