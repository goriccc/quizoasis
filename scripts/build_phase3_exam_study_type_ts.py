"""Generate lib/phase3ExamStudyTypeData.ts with full 7-language localeMap() content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 시험 공부 유형 — phase3-exam-study-type · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3ExamStudyTypeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3ExamStudyTypeLocaleKey, string>): Record<Phase3ExamStudyTypeLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3ExamStudyTypeLocaleKey, string>, score: number): { text: Record<Phase3ExamStudyTypeLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3ExamStudyTypeQuestion {
  id: number;
  question: Record<Phase3ExamStudyTypeLocaleKey, string>;
  options: { text: Record<Phase3ExamStudyTypeLocaleKey, string>; score: number }[];
}

export interface Phase3ExamStudyTypeResult {
  type: string;
  emoji: string;
  title: Record<Phase3ExamStudyTypeLocaleKey, string>;
  studySummary: Record<Phase3ExamStudyTypeLocaleKey, string>;
  quote: Record<Phase3ExamStudyTypeLocaleKey, string>;
  description: Record<Phase3ExamStudyTypeLocaleKey, string>;
  studyType: Record<Phase3ExamStudyTypeLocaleKey, string>;
  studyKeywords: Record<Phase3ExamStudyTypeLocaleKey, string>;
  strengths: Record<Phase3ExamStudyTypeLocaleKey, string>;
  cautions: Record<Phase3ExamStudyTypeLocaleKey, string>;
  studyTip: Record<Phase3ExamStudyTypeLocaleKey, string>;
  typicalPhrase: Record<Phase3ExamStudyTypeLocaleKey, string>;
  certificationPhrase: Record<Phase3ExamStudyTypeLocaleKey, string>;
  oneLiner: Record<Phase3ExamStudyTypeLocaleKey, string>;
  shareLine: Record<Phase3ExamStudyTypeLocaleKey, string>;
}

export function calculatePhase3ExamStudyTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3ExamStudyTypeDomainScores(answers: number[]) {
  const startStyle = (answers[0] ?? 0) + (answers[1] ?? 0);
  const focusEnv = (answers[2] ?? 0) + (answers[3] ?? 0);
  const studyMethod = (answers[4] ?? 0) + (answers[5] ?? 0);
  const slumpCoping = (answers[6] ?? 0) + (answers[7] ?? 0);
  const examEvePattern = (answers[8] ?? 0) + (answers[9] ?? 0);
  const resultAcceptance = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    startStyle,
    focusEnv,
    studyMethod,
    slumpCoping,
    examEvePattern,
    resultAcceptance,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}

export const phase3ExamStudyTypeQuestions: Phase3ExamStudyTypeQuestion[] = [
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
    "studySummary",
    "quote",
    "description",
    "studyType",
    "studyKeywords",
    "strengths",
    "cautions",
    "studyTip",
    "typicalPhrase",
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
        "exam_study_type_translations",
        Path(__file__).resolve().parent / "build_phase3_exam_study_type_translations.py",
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
        + "\n];\n\nexport const phase3ExamStudyTypeResults: Phase3ExamStudyTypeResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    questions, results = _load_translations()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3ExamStudyTypeData.ts"
    body = build_ts({"questions": questions, "results": results})
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out} ({len(body.encode('utf-8'))} bytes)")


if __name__ == "__main__":
    main()
