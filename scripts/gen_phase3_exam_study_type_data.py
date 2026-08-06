"""Generate lib/phase3ExamStudyTypeData.ts (Korean complete, other locales skeleton).

Source: scripts/_exam_study_type_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_exam_study_type_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3ExamStudyTypeData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "⚡", "title_en": "Cram Legend Type"},
    2: {"type": "Type2", "emoji": "☕", "title_en": "Aesthetic Study Type"},
    3: {"type": "Type3", "emoji": "📖", "title_en": "Repetition Memorization Type"},
    4: {"type": "Type4", "emoji": "🔍", "title_en": "Deep Understanding Type"},
    5: {"type": "Type5", "emoji": "📅", "title_en": "Plan Executor Type"},
    6: {"type": "Type6", "emoji": "🎯", "title_en": "Self-Directed Master Type"},
}

TYPE_EMOJIS = "⚡☕📖🔍📅🎯"


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def fmt_locale_map(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f"{indent}ko: {ts_str(d.get('ko', ''))},"]
    for loc in LOCALES[1:]:
        lines.append(f"{indent}{loc_key(loc)}: {ts_str(d.get(loc, d.get('ko', '')))},")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def ko_only(text: str) -> dict[str, str]:
    return {"ko": text, **{loc: "" for loc in LOCALES[1:]}}


def parse_list_block(block: list[str], start_prefix: str, stop_prefixes: list[str]) -> str:
    for i, ln in enumerate(block):
        if ln.startswith(start_prefix):
            inline = ln.split(start_prefix, 1)[1].strip()
            items: list[str] = [inline] if inline else []
            for bln in block[i + 1 :]:
                if any(bln.startswith(p) for p in stop_prefixes):
                    break
                if bln.strip():
                    items.append(bln.strip())
            return "\n".join(items)
    return ""


def find_line(block: list[str], prefix: str) -> str:
    for bln in block:
        if bln.startswith(prefix):
            return bln.split(prefix, 1)[1].strip()
    return ""


def find_first_line(block: list[str], prefixes: list[str]) -> str:
    for p in prefixes:
        val = find_line(block, p)
        if val:
            return val
    return ""


def parse_doc() -> tuple[list[dict], dict[int, dict]]:
    text = DOC_PATH.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip() and not ln.startswith("SOURCE:")]

    q_by_num: dict[int, dict] = {}
    for i, ln in enumerate(lines):
        m = re.match(r"^Q(\d+)\.\s*(.+)$", ln)
        if not m:
            continue
        qn = int(m.group(1))
        question_text = m.group(2).strip()
        opts: dict[str, str] = {}
        j = i + 1
        while j < len(lines):
            mopt = re.match(r"^([ABCD])\.\s*(.+)$", lines[j])
            if mopt:
                opts[mopt.group(1)] = mopt.group(2).strip()
                j += 1
                continue
            if re.match(r"^Q\d+\.", lines[j]) or re.match(r"^Type\s+\d+:", lines[j]) or lines[j].startswith("4. 결과"):
                break
            if opts and not lines[j].startswith(("A.", "B.", "C.", "D.", "Q", "Type", "[")):
                last_key = sorted(opts.keys())[-1]
                opts[last_key] = (opts[last_key] + " " + lines[j]).strip()
            j += 1
        if qn not in q_by_num:
            q_by_num[qn] = {"q": question_text, "opts": opts}

    questions: list[dict] = []
    for qn in range(1, 13):
        if qn not in q_by_num:
            raise SystemExit(f"Missing Q{qn}")
        q = q_by_num[qn]
        missing = [k for k in ("A", "B", "C", "D") if k not in q["opts"]]
        if missing:
            raise SystemExit(f"Missing options {missing} for Q{qn}")
        questions.append({"q": q["q"], "A": q["opts"]["A"], "B": q["opts"]["B"], "C": q["opts"]["C"], "D": q["opts"]["D"]})

    sns_idx = next((i for i, ln in enumerate(lines) if ln.startswith("6. SNS 공유 문구")), len(lines))
    before_sns = lines[:sns_idx]
    sns_lines = lines[sns_idx:]

    type_idx = [i for i, ln in enumerate(before_sns) if re.match(r"^Type\s+\d+:", ln)]
    if len(type_idx) < 6:
        raise SystemExit("Could not find 6 Type blocks")

    results: dict[int, dict] = {}
    share_lines: dict[int, str] = {}

    stop_for_strengths = [
        "이 유형의 약점:",
        "이 유형의 주의점:",
        "이 유형이 가장 많이 하는 것:",
        "이 유형이 매번 하는 말:",
        "이 유형이 하는 말:",
        "이 유형에게 맞는 공부법:",
        "인증 문구:",
        "한 줄 평:",
    ]

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\([^)]*\)\s*$", "", raw_title).strip()
        title = re.sub(rf"[\s{TYPE_EMOJIS}]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        study_lines = [bln for bln in block if bln.startswith("공부 유형:")]
        study_summary = study_lines[0].split("공부 유형:", 1)[1].strip() if study_lines else ""
        study_type = study_lines[1].split("공부 유형:", 1)[1].strip() if len(study_lines) > 1 else ""

        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break

        desc_lines: list[str] = []
        if quote_i is not None:
            for bln in block[quote_i + 1 :]:
                if bln.startswith("공부 유형:"):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        study_keywords = find_line(block, "공부 키워드:")

        strengths = parse_list_block(
            block,
            "이 유형의 의외의 강점:",
            stop_for_strengths,
        )
        if not strengths:
            strengths = parse_list_block(block, "이 유형의 강점:", stop_for_strengths)

        cautions = parse_list_block(
            block,
            "이 유형의 약점:",
            ["이 유형에게 맞는 공부법:", "이 유형의 주의점:", "인증 문구:", "한 줄 평:"],
        )
        if not cautions:
            cautions = parse_list_block(
                block,
                "이 유형의 주의점:",
                ["이 유형에게 맞는 공부법:", "인증 문구:", "한 줄 평:"],
            )

        study_tip = find_line(block, "이 유형에게 맞는 공부법:")

        typical_phrase = find_first_line(
            block,
            [
                "이 유형이 매번 하는 말:",
                "이 유형이 하는 말:",
                "이 유형이 가장 많이 하는 것:",
            ],
        )

        certification = find_line(block, "인증 문구:").strip('"')
        one_liner = find_line(block, "한 줄 평:").strip('"')

        results[type_num] = {
            "title_ko": title,
            "study_summary": study_summary,
            "quote": quote,
            "description": description,
            "study_type": study_type,
            "study_keywords": study_keywords,
            "strengths": strengths,
            "cautions": cautions,
            "study_tip": study_tip,
            "typical_phrase": typical_phrase,
            "certification": certification,
            "one_liner": one_liner,
        }

    for ln in sns_lines:
        m = re.match(r"^Type\s+(\d+):\s*\"(.*)\"$", ln)
        if m:
            share_lines[int(m.group(1))] = m.group(2).strip()
        else:
            m2 = re.match(r"^Type\s+(\d+):\s*\"(.*)$", ln)
            if m2:
                share_lines[int(m2.group(1))] = m2.group(2).strip().rstrip('"')

    if len(share_lines) < 6:
        raise SystemExit(f"Missing share lines: {share_lines.keys()}")

    for tn in range(1, 7):
        results[tn]["share_line"] = share_lines[tn]

    return questions, results


QUESTIONS, RESULTS = parse_doc()

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
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3ExamStudyTypeQuestions: Phase3ExamStudyTypeQuestion[] = [")
for i, q in enumerate(QUESTIONS, 1):
    out.append("  {")
    out.append(f"    id: {i},")
    out.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    out.append("    options: [")
    for opt_key in ("A", "B", "C", "D"):
        out.append(f"      opt({fmt_locale_map(ko_only(q[opt_key]), '        ')}, {OPTION_SCORES[opt_key]}),")
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")

out.append("export const phase3ExamStudyTypeResults: Phase3ExamStudyTypeResult[] = [")
for tn in range(1, 7):
    r = RESULTS[tn]
    meta = TYPE_META[tn]
    title_obj = {"ko": r["title_ko"], **{loc: f"{meta['title_en']} {meta['emoji']}" for loc in LOCALES if loc != "ko"}}

    def ml(val: str) -> dict[str, str]:
        return {"ko": val, **{loc: "" for loc in LOCALES if loc != "ko"}}

    out.append("  {")
    out.append(f"    type: '{meta['type']}',")
    out.append(f"    emoji: '{meta['emoji']}',")
    out.append(f"    title: {fmt_locale_map(title_obj)},")
    out.append(f"    studySummary: {fmt_locale_map(ml(r['study_summary']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    studyType: {fmt_locale_map(ml(r['study_type']))},")
    out.append(f"    studyKeywords: {fmt_locale_map(ml(r['study_keywords']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    cautions: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    studyTip: {fmt_locale_map(ml(r['study_tip']))},")
    out.append(f"    typicalPhrase: {fmt_locale_map(ml(r['typical_phrase']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
