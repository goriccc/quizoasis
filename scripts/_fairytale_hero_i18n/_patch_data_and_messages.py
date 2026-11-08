# -*- coding: utf-8 -*-
"""Wire fairytale-hero i18n into data.ts, messages, and SQL."""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[2]
i18n_dir = Path(__file__).resolve().parent
locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
bundles = {loc: json.loads((i18n_dir / f"{loc}.json").read_text(encoding="utf-8")) for loc in locales}

ko_meta = {
    "title": "동화 속 나는 어떤 주인공일까?",
    "description": "동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다.",
    "tags": ["동화주인공"],
}
title_obj = {"ko": ko_meta["title"], **{loc: bundles[loc]["meta"]["title"] for loc in locales}}
desc_obj = {"ko": ko_meta["description"], **{loc: bundles[loc]["meta"]["description"] for loc in locales}}
tags_obj = {"ko": ko_meta["tags"], **{loc: bundles[loc]["meta"]["tags"] for loc in locales}}


def sql_str(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))
    return "'" + s.replace("'", "''") + "'"


sql = f"""-- 동화 속 나는 어떤 주인공일까?
-- slug: phase3-fairytale-hero
-- thumbnail: p3_test_fairytale_hero.webp
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
  'phase3-fairytale-hero',
  {sql_str(title_obj)},
  {sql_str(desc_obj)},
  'p3_test_fairytale_hero.webp',
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
(root / "supabase" / "insert-phase3-fairytale-hero.sql").write_text(
    sql, encoding="utf-8", newline="\n"
)
print("SQL ok")

ns = "phase3FairytaleHeroTest"
for loc in locales:
    msg = {ns: bundles[loc]["messages"]}
    dest = root / "messages" / loc / "tests" / "phase3-fairytale-hero.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    print("messages", loc)

data_path = root / "lib" / "phase3FairytaleHeroData.ts"
src = data_path.read_text(encoding="utf-8")

if "PHASE3_FAIRYTALE_HERO_I18N" not in src:
    src = src.replace(
        " * 12문항 4지선다 · 6유형 · KO-first\n */\n\n",
        " * 12문항 4지선다 · 6유형\n */\n\n"
        "import {\n"
        "  PHASE3_FAIRYTALE_HERO_I18N,\n"
        "  type Phase3FairytaleHeroForeignLocale,\n"
        "  type Phase3FairytaleHeroResultText,\n"
        "} from './phase3FairytaleHeroI18n';\n\n",
    )
    src = src.replace(
        "function L(ko: string): LocaleText {\n"
        "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };\n"
        "}\n\n",
        "function L(ko: string): LocaleText {\n"
        "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };\n"
        "}\n\n"
        "const FOREIGN_LOCALES = Object.keys(PHASE3_FAIRYTALE_HERO_I18N) as Phase3FairytaleHeroForeignLocale[];\n\n"
        "function withForeign(\n"
        "  ko: string,\n"
        "  pickFn: (loc: Phase3FairytaleHeroForeignLocale) => string,\n"
        "): LocaleText {\n"
        "  const t = L(ko);\n"
        "  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);\n"
        "  return t;\n"
        "}\n\n",
    )

    src = src.replace(
        "export const phase3FairytaleHeroQuestions: Phase3FairytaleHeroQuestion[] = RAW_QUESTIONS.map(\n"
        "  (item, idx) => ({\n"
        "    id: idx + 1,\n"
        "    question: L(item.q),\n"
        "    options: item.opts.map(([text, score]) => ({ text: L(text), score })),\n"
        "  }),\n"
        ");\n",
        "export const phase3FairytaleHeroQuestions: Phase3FairytaleHeroQuestion[] = RAW_QUESTIONS.map(\n"
        "  (item, idx) => ({\n"
        "    id: idx + 1,\n"
        "    question: withForeign(item.q, (loc) => PHASE3_FAIRYTALE_HERO_I18N[loc].questions[idx].q),\n"
        "    options: item.opts.map(([text, score], oi) => ({\n"
        "      text: withForeign(text, (loc) => PHASE3_FAIRYTALE_HERO_I18N[loc].questions[idx].opts[oi]),\n"
        "      score,\n"
        "    })),\n"
        "  }),\n"
        ");\n",
    )

    src = src.replace(
        "export const phase3FairytaleHeroResults: Phase3FairytaleHeroResult[] = [",
        "const RESULT_TEXT_KEYS = [\n"
        "  'title',\n"
        "  'typeName',\n"
        "  'realReason',\n"
        "  'shortDescription',\n"
        "  'description',\n"
        "  'keywords',\n"
        "  'strengths',\n"
        "  'reasonDetail',\n"
        "  'frequentSaying',\n"
        "  'changeTips',\n"
        "  'oneLiner',\n"
        "  'shareLine',\n"
        "] as const satisfies readonly (keyof Phase3FairytaleHeroResultText)[];\n\n"
        "const KO_RESULTS: Phase3FairytaleHeroResult[] = [",
    )

    results_end = src.find("];\n\nexport const PHASE3_FAIRYTALE_HERO_META")
    if results_end < 0:
        raise SystemExit("results end not found")
    results_map = (
        "];\n\n"
        "export const phase3FairytaleHeroResults: Phase3FairytaleHeroResult[] = KO_RESULTS.map((r, ri) => {\n"
        "  const merged: Phase3FairytaleHeroResult = { ...r };\n"
        "  for (const key of RESULT_TEXT_KEYS) {\n"
        "    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_FAIRYTALE_HERO_I18N[loc].results[ri][key]);\n"
        "  }\n"
        "  return merged;\n"
        "});\n\n"
        "export const PHASE3_FAIRYTALE_HERO_META"
    )
    src = src[:results_end] + results_map + src[results_end + len("];\n\nexport const PHASE3_FAIRYTALE_HERO_META") :]

    meta_old = """export const PHASE3_FAIRYTALE_HERO_META = {
  title: {
    ko: '동화 속 나는 어떤 주인공일까?',
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  description: {
    ko: '동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다.',
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  tags: {
    ko: ['동화주인공'],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[],
  },
};"""
    meta_new = """export const PHASE3_FAIRYTALE_HERO_META = {
  title: withForeign(
    '동화 속 나는 어떤 주인공일까?',
    (loc) => PHASE3_FAIRYTALE_HERO_I18N[loc].meta.title,
  ),
  description: withForeign(
    '동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다.',
    (loc) => PHASE3_FAIRYTALE_HERO_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['동화주인공'],
    en: PHASE3_FAIRYTALE_HERO_I18N.en.meta.tags,
    ja: PHASE3_FAIRYTALE_HERO_I18N.ja.meta.tags,
    'zh-CN': PHASE3_FAIRYTALE_HERO_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_FAIRYTALE_HERO_I18N['zh-TW'].meta.tags,
    vi: PHASE3_FAIRYTALE_HERO_I18N.vi.meta.tags,
    id: PHASE3_FAIRYTALE_HERO_I18N.id.meta.tags,
  },
};"""
    if meta_old not in src:
        raise SystemExit("META block not found for replace")
    src = src.replace(meta_old, meta_new)

    data_path.write_text(src, encoding="utf-8", newline="\n")
    print("data.ts wired")
else:
    print("data already wired")

text = data_path.read_text(encoding="utf-8")
assert "withForeign" in text and "PHASE3_FAIRYTALE_HERO_I18N" in text
assert "KO_RESULTS" in text and "RAW_QUESTIONS" in text
assert "KO-first" not in text
print("verify ok")
