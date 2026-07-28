"""Generate lib/phase3LateNightTypeData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 새벽 감성 유형 — 12문항 2지선다, A=0 B=1, 총점 0~12 → Type1~6 · 7개 로케일 */

export type Phase3LateNightTypeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3LateNightTypeLocaleKey, string>): Record<Phase3LateNightTypeLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3LateNightTypeLocaleKey, string>, score: number): { text: Record<Phase3LateNightTypeLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3LateNightTypeQuestion {
  id: number;
  question: Record<Phase3LateNightTypeLocaleKey, string>;
  options: { text: Record<Phase3LateNightTypeLocaleKey, string>; score: number }[];
}

export interface Phase3LateNightTypeResult {
  type: string;
  emoji: string;
  title: Record<Phase3LateNightTypeLocaleKey, string>;
  shortDescription: Record<Phase3LateNightTypeLocaleKey, string>;
  description: Record<Phase3LateNightTypeLocaleKey, string>;
  lateNightType: Record<Phase3LateNightTypeLocaleKey, string>;
  lateNightKeywords: Record<Phase3LateNightTypeLocaleKey, string>;
  actualBehavior: Record<Phase3LateNightTypeLocaleKey, string>;
  strength: Record<Phase3LateNightTypeLocaleKey, string>;
  characteristic: Record<Phase3LateNightTypeLocaleKey, string>;
  dawnBgm: Record<Phase3LateNightTypeLocaleKey, string>;
  whatTheyNeed: Record<Phase3LateNightTypeLocaleKey, string>;
  oneLiner: Record<Phase3LateNightTypeLocaleKey, string>;
  certificationPhrase: Record<Phase3LateNightTypeLocaleKey, string>;
  shareLine: Record<Phase3LateNightTypeLocaleKey, string>;
}

export function calculatePhase3LateNightTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3LateNightTypeQuestions: Phase3LateNightTypeQuestion[] = [
"""


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def fmt_ml(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f"{indent}ko: '{esc(d['ko'])}',"]
    for loc in LOCALES[1:]:
        lines.append(f"{indent}{loc_key(loc)}: '{esc(d[loc])}',")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def fmt_question(qid: int, q: dict[str, str], opts: list[tuple[dict[str, str], int]]) -> str:
    parts = [
        "  {",
        f"    id: {qid},",
        f"    question: {fmt_ml(q)},",
        "    options: [",
    ]
    for o, score in opts:
        parts.append(f"      opt({fmt_ml(o, '        ')}, {score}),")
    parts.append("    ],")
    parts.append("  },")
    return "\n".join(parts)


def fmt_result(r: dict) -> str:
    ml_fields = [
        "title",
        "shortDescription",
        "description",
        "lateNightType",
        "lateNightKeywords",
        "actualBehavior",
        "strength",
        "characteristic",
        "dawnBgm",
        "whatTheyNeed",
        "oneLiner",
        "certificationPhrase",
        "shareLine",
    ]
    parts = ["  {"]
    parts.append(f'    type: "{r["type"]}",')
    parts.append(f'    emoji: "{r["emoji"]}",')
    for field in ml_fields:
        parts.append(f"    {field}: {fmt_ml(r[field])},")
    parts.append("  },")
    return "\n".join(parts)


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_phase3_late_night_type_data.py"
_gen_ns: dict = {}
exec(_gen_path.read_text(encoding="utf-8").split("\ndef esc")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx]["opts"][opt_idx]


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "shortDescription": "short",
        "description": "desc",
        "lateNightKeywords": "keywords",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]


# Translations in companion module (avoids circular import via lazy import)
def _load_translations():
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "late_night_translations",
        Path(__file__).resolve().parent / "build_phase3_late_night_type_translations.py",
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.QUESTIONS, mod.RESULTS


def load_data() -> dict:
    questions, results = _load_translations()
    return {"questions": questions, "results": results}


def build_ts(data: dict) -> str:
    questions_ts = "\n".join(
        fmt_question(i + 1, q["question"], q["options"])
        for i, q in enumerate(data["questions"])
    )
    results_ts = "\n".join(fmt_result(r) for r in data["results"])
    return (
        HEADER
        + questions_ts
        + "\n];\n\nexport const phase3LateNightTypeResults: Phase3LateNightTypeResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    data = load_data()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3LateNightTypeData.ts"
    body = build_ts(data)
    out.write_text(body, encoding="utf-8")
    line_count = body.count("\n") + (0 if body.endswith("\n") else 1)
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {line_count}")


if __name__ == "__main__":
    main()
