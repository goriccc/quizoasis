"""Generate lib/phase3EqSelfDiagnosisData.ts with full 7-language localeMap() content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 정서 지능(EQ) 자가진단 — phase3-eq-self-diagnosis · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3EqSelfDiagnosisLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3EqSelfDiagnosisLocaleKey, string>): Record<Phase3EqSelfDiagnosisLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3EqSelfDiagnosisLocaleKey, string>, score: number): { text: Record<Phase3EqSelfDiagnosisLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3EqSelfDiagnosisQuestion {
  id: number;
  question: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  options: { text: Record<Phase3EqSelfDiagnosisLocaleKey, string>; score: number }[];
}

export interface Phase3EqSelfDiagnosisResult {
  type: string;
  emoji: string;
  title: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  eqLevel: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  quote: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  description: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  eqType: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  developFocus: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  fiveElementsAnalysis: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  strengths: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  cautions: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  masterTraits: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  tryNow: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  certificationPhrase: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  oneLiner: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
  shareLine: Record<Phase3EqSelfDiagnosisLocaleKey, string>;
}

export function calculatePhase3EqSelfDiagnosisResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3EqSelfDiagnosisDomainScores(answers: number[]) {
  const selfAwareness = (answers[0] ?? 0) + (answers[1] ?? 0);
  const selfRegulation = (answers[2] ?? 0) + (answers[3] ?? 0);
  const motivation = (answers[4] ?? 0) + (answers[5] ?? 0);
  const empathy = (answers[6] ?? 0) + (answers[7] ?? 0) + (answers[8] ?? 0);
  const socialSkills = (answers[9] ?? 0) + (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    selfAwareness,
    selfRegulation,
    motivation,
    empathy,
    socialSkills,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}

export const phase3EqSelfDiagnosisQuestions: Phase3EqSelfDiagnosisQuestion[] = [
"""


def esc(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace("\r\n", "\n")
        .replace("\r", "\n")
        .replace("\n", "\\n")
    )


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


RESULT_FIELDS = [
    "title",
    "eqLevel",
    "quote",
    "description",
    "eqType",
    "developFocus",
    "fiveElementsAnalysis",
    "strengths",
    "cautions",
    "masterTraits",
    "tryNow",
    "certificationPhrase",
    "oneLiner",
    "shareLine",
]


def fmt_result(r: dict) -> str:
    parts = ["  {"]
    parts.append(f'    type: "{r["type"]}",')
    parts.append(f'    emoji: "{r["emoji"]}",')
    for field in RESULT_FIELDS:
        parts.append(f"    {field}: {fmt_ml(r[field])},")
    parts.append("  },")
    return "\n".join(parts)


def _load_translations():
    spec = importlib.util.spec_from_file_location(
        "eq_self_diagnosis_translations",
        Path(__file__).resolve().parent / "build_phase3_eq_self_diagnosis_translations.py",
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.QUESTIONS, mod.RESULTS


def build_ts(data: dict) -> str:
    questions_ts = "\n".join(
        fmt_question(i + 1, q["question"], q["options"])
        for i, q in enumerate(data["questions"])
    )
    results_ts = "\n".join(fmt_result(r) for r in data["results"])
    return (
        HEADER
        + questions_ts
        + "\n];\n\nexport const phase3EqSelfDiagnosisResults: Phase3EqSelfDiagnosisResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    questions, results = _load_translations()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3EqSelfDiagnosisData.ts"
    body = build_ts({"questions": questions, "results": results})
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out} ({len(body.encode('utf-8'))} bytes)")


if __name__ == "__main__":
    main()
