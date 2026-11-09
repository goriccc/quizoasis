# -*- coding: utf-8 -*-
"""Wire alone-even-in-love i18n into data.ts, messages, and SQL."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
i18n_dir = Path(__file__).resolve().parent
locales = ["en", "ja", "zh-CN", "zh-TW", "vi", "id"]
bundles = {loc: json.loads((i18n_dir / f"{loc}.json").read_text(encoding="utf-8")) for loc in locales}

ko_meta = {
    "title": "나는 왜 연애 중에도 혼자가 편할까?",
    "description": "연인이 좋은데 왜 혼자 있는 시간이 필요할까? 10가지 상황으로 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다.",
    "tags": ["내향", "연애심리"],
}
title_obj = {"ko": ko_meta["title"], **{loc: bundles[loc]["meta"]["title"] for loc in locales}}
desc_obj = {"ko": ko_meta["description"], **{loc: bundles[loc]["meta"]["description"] for loc in locales}}
tags_obj = {"ko": ko_meta["tags"], **{loc: bundles[loc]["meta"]["tags"] for loc in locales}}


def sql_str(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(", ", ": "))
    return "'" + s.replace("'", "''") + "'"


sql = f"""-- 나는 왜 연애 중에도 혼자가 편할까?
-- slug: phase3-alone-even-in-love
-- thumbnail: p3_test_alone_even_in_love.webp
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
  'phase3-alone-even-in-love',
  {sql_str(title_obj)},
  {sql_str(desc_obj)},
  'p3_test_alone_even_in_love.webp',
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
(root / "supabase" / "insert-phase3-alone-even-in-love.sql").write_text(
    sql, encoding="utf-8", newline="\n"
)
print("SQL ok")

ns = "phase3AloneEvenInLoveTest"
for loc in locales:
    msg = {ns: bundles[loc]["messages"]}
    dest = root / "messages" / loc / "tests" / "phase3-alone-even-in-love.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    print("messages", loc)

data_path = root / "lib" / "phase3AloneEvenInLoveData.ts"
src = data_path.read_text(encoding="utf-8")

if "PHASE3_ALONE_EVEN_IN_LOVE_I18N" not in src:
    src = src.replace(
        " * 10문항 4지선다 · 5유형 · KO-first\n */\n\n",
        " * 10문항 4지선다 · 5유형\n */\n\n"
        "import {\n"
        "  PHASE3_ALONE_EVEN_IN_LOVE_I18N,\n"
        "  type Phase3AloneEvenInLoveForeignLocale,\n"
        "  type Phase3AloneEvenInLoveResultText,\n"
        "} from './phase3AloneEvenInLoveI18n';\n\n",
    )
    src = src.replace(
        "function L(ko: string): LocaleText {\n"
        "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };\n"
        "}\n\n",
        "function L(ko: string): LocaleText {\n"
        "  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };\n"
        "}\n\n"
        "const FOREIGN_LOCALES = Object.keys(PHASE3_ALONE_EVEN_IN_LOVE_I18N) as Phase3AloneEvenInLoveForeignLocale[];\n\n"
        "function withForeign(\n"
        "  ko: string,\n"
        "  pickFn: (loc: Phase3AloneEvenInLoveForeignLocale) => string,\n"
        "): LocaleText {\n"
        "  const t = L(ko);\n"
        "  for (const loc of FOREIGN_LOCALES) t[loc] = pickFn(loc);\n"
        "  return t;\n"
        "}\n\n",
    )

    src = src.replace(
        "export const phase3AloneEvenInLoveQuestions: Phase3AloneEvenInLoveQuestion[] = RAW_QUESTIONS.map(\n"
        "  (item, idx) => ({\n"
        "    id: idx + 1,\n"
        "    question: L(item.q),\n"
        "    options: item.opts.map(([text, score]) => ({ text: L(text), score })),\n"
        "  }),\n"
        ");\n",
        "export const phase3AloneEvenInLoveQuestions: Phase3AloneEvenInLoveQuestion[] = RAW_QUESTIONS.map(\n"
        "  (item, idx) => ({\n"
        "    id: idx + 1,\n"
        "    question: withForeign(item.q, (loc) => PHASE3_ALONE_EVEN_IN_LOVE_I18N[loc].questions[idx].q),\n"
        "    options: item.opts.map(([text, score], oi) => ({\n"
        "      text: withForeign(text, (loc) => PHASE3_ALONE_EVEN_IN_LOVE_I18N[loc].questions[idx].opts[oi]),\n"
        "      score,\n"
        "    })),\n"
        "  }),\n"
        ");\n",
    )

    src = src.replace(
        "export const phase3AloneEvenInLoveResults: Phase3AloneEvenInLoveResult[] = [",
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
        "] as const satisfies readonly (keyof Phase3AloneEvenInLoveResultText)[];\n\n"
        "const KO_RESULTS: Phase3AloneEvenInLoveResult[] = [",
    )

    results_end = src.find("];\n\nexport const PHASE3_ALONE_EVEN_IN_LOVE_META")
    if results_end < 0:
        raise SystemExit("results end not found")
    results_map = (
        "];\n\n"
        "export const phase3AloneEvenInLoveResults: Phase3AloneEvenInLoveResult[] = KO_RESULTS.map((r, ri) => {\n"
        "  const merged: Phase3AloneEvenInLoveResult = { ...r };\n"
        "  for (const key of RESULT_TEXT_KEYS) {\n"
        "    merged[key] = withForeign(r[key].ko, (loc) => PHASE3_ALONE_EVEN_IN_LOVE_I18N[loc].results[ri][key]);\n"
        "  }\n"
        "  return merged;\n"
        "});\n\n"
        "export const PHASE3_ALONE_EVEN_IN_LOVE_META"
    )
    src = src[:results_end] + results_map + src[results_end + len("];\n\nexport const PHASE3_ALONE_EVEN_IN_LOVE_META") :]

    meta_old = """export const PHASE3_ALONE_EVEN_IN_LOVE_META = {
  title: {
    ko: "나는 왜 연애 중에도 혼자가 편할까?",
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  description: {
    ko: "연인이 좋은데 왜 혼자 있는 시간이 필요할까? 10가지 상황으로 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다.",
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  tags: {
    ko: ["내향", "연애심리"],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[],
  },
};"""
    meta_new = """export const PHASE3_ALONE_EVEN_IN_LOVE_META = {
  title: withForeign(
    "나는 왜 연애 중에도 혼자가 편할까?",
    (loc) => PHASE3_ALONE_EVEN_IN_LOVE_I18N[loc].meta.title,
  ),
  description: withForeign(
    "연인이 좋은데 왜 혼자 있는 시간이 필요할까? 10가지 상황으로 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다.",
    (loc) => PHASE3_ALONE_EVEN_IN_LOVE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ["내향", "연애심리"],
    en: PHASE3_ALONE_EVEN_IN_LOVE_I18N.en.meta.tags,
    ja: PHASE3_ALONE_EVEN_IN_LOVE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_ALONE_EVEN_IN_LOVE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_ALONE_EVEN_IN_LOVE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_ALONE_EVEN_IN_LOVE_I18N.vi.meta.tags,
    id: PHASE3_ALONE_EVEN_IN_LOVE_I18N.id.meta.tags,
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
assert "withForeign" in text and "PHASE3_ALONE_EVEN_IN_LOVE_I18N" in text
assert "KO_RESULTS" in text and "RAW_QUESTIONS" in text
assert "counselingNote" not in text
assert "KO-first" not in text
print("verify ok")
