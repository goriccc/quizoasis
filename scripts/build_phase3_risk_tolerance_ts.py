"""Generate lib/phase3RiskToleranceData.ts with full 7-language localeMap() content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 위험 감수 성향 — phase3-risk-tolerance · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3RiskToleranceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3RiskToleranceLocaleKey, string>): Record<Phase3RiskToleranceLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3RiskToleranceLocaleKey, string>, score: number): { text: Record<Phase3RiskToleranceLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3RiskToleranceQuestion {
  id: number;
  question: Record<Phase3RiskToleranceLocaleKey, string>;
  options: { text: Record<Phase3RiskToleranceLocaleKey, string>; score: number }[];
}

export interface Phase3RiskToleranceResult {
  type: string;
  emoji: string;
  title: Record<Phase3RiskToleranceLocaleKey, string>;
  riskLevel: Record<Phase3RiskToleranceLocaleKey, string>;
  quote: Record<Phase3RiskToleranceLocaleKey, string>;
  description: Record<Phase3RiskToleranceLocaleKey, string>;
  riskType: Record<Phase3RiskToleranceLocaleKey, string>;
  riskAcceptanceLevel: Record<Phase3RiskToleranceLocaleKey, string>;
  financialDiagnosis: Record<Phase3RiskToleranceLocaleKey, string>;
  socialDiagnosis: Record<Phase3RiskToleranceLocaleKey, string>;
  physicalDiagnosis: Record<Phase3RiskToleranceLocaleKey, string>;
  careerDiagnosis: Record<Phase3RiskToleranceLocaleKey, string>;
  uncertaintyDiagnosis: Record<Phase3RiskToleranceLocaleKey, string>;
  strengths: Record<Phase3RiskToleranceLocaleKey, string>;
  caution: Record<Phase3RiskToleranceLocaleKey, string>;
  investmentStyle: Record<Phase3RiskToleranceLocaleKey, string>;
  entrepreneurshipStyle: Record<Phase3RiskToleranceLocaleKey, string>;
  certificationPhrase: Record<Phase3RiskToleranceLocaleKey, string>;
  oneLiner: Record<Phase3RiskToleranceLocaleKey, string>;
  shareLine: Record<Phase3RiskToleranceLocaleKey, string>;
}

export function calculatePhase3RiskToleranceResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3RiskToleranceDomainScores(answers: number[]) {
  const financial = (answers[0] ?? 0) + (answers[1] ?? 0) + (answers[2] ?? 0);
  const social = (answers[3] ?? 0) + (answers[4] ?? 0) + (answers[5] ?? 0);
  const physical = (answers[6] ?? 0) + (answers[7] ?? 0);
  const career = (answers[8] ?? 0) + (answers[9] ?? 0);
  const uncertainty = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    financial,
    social,
    physical,
    career,
    uncertainty,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}

export const phase3RiskToleranceQuestions: Phase3RiskToleranceQuestion[] = [
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


RESULT_FIELDS = [
    "title",
    "riskLevel",
    "quote",
    "description",
    "riskType",
    "riskAcceptanceLevel",
    "financialDiagnosis",
    "socialDiagnosis",
    "physicalDiagnosis",
    "careerDiagnosis",
    "uncertaintyDiagnosis",
    "strengths",
    "caution",
    "investmentStyle",
    "entrepreneurshipStyle",
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
        "risk_tolerance_translations",
        Path(__file__).resolve().parent / "build_phase3_risk_tolerance_translations.py",
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
        + "\n];\n\nexport const phase3RiskToleranceResults: Phase3RiskToleranceResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    questions, results = _load_translations()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3RiskToleranceData.ts"
    body = build_ts({"questions": questions, "results": results})
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out} ({len(body.encode('utf-8'))} bytes)")


if __name__ == "__main__":
    main()
