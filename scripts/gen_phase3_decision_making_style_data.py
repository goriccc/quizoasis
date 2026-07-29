"""Generate lib/phase3DecisionMakingStyleData.ts (Korean complete, other locales skeleton).

Source: scripts/_decision_style_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_decision_style_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3DecisionMakingStyleData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "⚡", "title_en": "Intuitive Spontaneous Type"},
    2: {"type": "Type2", "emoji": "💙", "title_en": "Emotional Empathy Type"},
    3: {"type": "Type3", "emoji": "🔍", "title_en": "Careful Analyst Type"},
    4: {"type": "Type4", "emoji": "📊", "title_en": "Data-Driven Type"},
    5: {"type": "Type5", "emoji": "🧭", "title_en": "Principle-Based Type"},
    6: {"type": "Type6", "emoji": "🎯", "title_en": "Strategic Optimizer Type"},
}

SECTION_MARKERS = [
    "이 유형의 강점:",
    "이 유형의 약점:",
    "이 스타일이 가장 잘 작동하는 상황:",
    "이 스타일이 위험한 상황:",
    "개선 방향:",
    "인증 문구:",
    "한 줄 평:",
]


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
    start_i = None
    for i, ln in enumerate(block):
        if ln.startswith(start_prefix):
            start_i = i
            inline = ln.split(start_prefix, 1)[1].strip()
            items: list[str] = [inline] if inline else []
            for bln in block[i + 1 :]:
                if any(bln.startswith(p) for p in stop_prefixes):
                    break
                if bln.strip():
                    items.append(bln.strip())
            return "\n".join(items)
    return ""


def parse_doc() -> tuple[list[dict], dict[int, dict]]:
    text = DOC_PATH.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]

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

    sns_idx = next((i for i, ln in enumerate(lines) if ln.startswith("7. SNS 공유 문구")), len(lines))
    before_sns = lines[:sns_idx]
    sns_lines = lines[sns_idx:]

    type_idx = [i for i, ln in enumerate(before_sns) if re.match(r"^Type\s+\d+:", ln)]
    if len(type_idx) < 6:
        raise SystemExit("Could not find 6 Type blocks")

    results: dict[int, dict] = {}
    share_lines: dict[int, str] = {}

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\([^)]*\)\s*$", "", raw_title).strip()
        title = re.sub(r"[\s⚡💙🔍📊🧭🎯]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        decision_style = find_line("의사결정 스타일:")
        if not decision_style:
            raise SystemExit(f"Type{type_num} missing decision style")

        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break

        decision_type = find_line("의사결정 유형:")
        decision_keywords = find_line("결정 키워드:")

        desc_lines: list[str] = []
        if quote_i is not None:
            for bln in block[quote_i + 1 :]:
                if bln.startswith(("의사결정 유형:", "결정 키워드:", "이 유형의")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        stop_after_strengths = ["이 유형의 약점:"]
        stop_after_weaknesses = ["이 스타일이 가장 잘 작동하는 상황:"]
        stop_after_best = ["이 스타일이 위험한 상황:"]
        stop_after_risky = ["개선 방향:"]
        stop_after_improve = ["인증 문구:", "한 줄 평:"]

        strengths = parse_list_block(block, "이 유형의 강점:", stop_after_strengths)
        weaknesses = parse_list_block(block, "이 유형의 약점:", stop_after_weaknesses)
        best_situations = find_line("이 스타일이 가장 잘 작동하는 상황:")
        risky_situations = find_line("이 스타일이 위험한 상황:")
        improvement = find_line("개선 방향:")
        certification = find_line("인증 문구:")
        one_liner = find_line("한 줄 평:")

        results[type_num] = {
            "title_ko": title,
            "decision_style": decision_style,
            "quote": quote,
            "description": description,
            "decision_type": decision_type,
            "decision_keywords": decision_keywords,
            "strengths": strengths,
            "weaknesses": weaknesses,
            "best_situations": best_situations,
            "risky_situations": risky_situations,
            "improvement": improvement,
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

HEADER = """/** 나의 의사결정 스타일 — phase3-decision-making-style · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3DecisionMakingStyleLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3DecisionMakingStyleLocaleKey, string>): Record<Phase3DecisionMakingStyleLocaleKey, string> {
  return t;
}

export interface Phase3DecisionMakingStyleQuestion {
  id: number;
  question: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  options: { text: Record<Phase3DecisionMakingStyleLocaleKey, string>; score: number }[];
}

export interface Phase3DecisionMakingStyleResult {
  type: string;
  emoji: string;
  title: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  decisionStyle: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  quote: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  description: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  decisionType: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  decisionKeywords: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  strengths: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  weaknesses: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  bestSituations: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  riskySituations: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  improvementDirection: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  certificationPhrase: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  oneLiner: Record<Phase3DecisionMakingStyleLocaleKey, string>;
  shareLine: Record<Phase3DecisionMakingStyleLocaleKey, string>;
}

export function calculatePhase3DecisionMakingStyleResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3DecisionMakingStyleDomainScores(answers: number[]) {
  const start = (answers[0] ?? 0) + (answers[1] ?? 0);
  const info = (answers[2] ?? 0) + (answers[3] ?? 0);
  const others = (answers[4] ?? 0) + (answers[5] ?? 0);
  const uncertainty = (answers[6] ?? 0) + (answers[7] ?? 0);
  const regret = (answers[8] ?? 0) + (answers[9] ?? 0);
  const speed = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    start,
    info,
    others,
    uncertainty,
    regret,
    speed,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3DecisionMakingStyleQuestions: Phase3DecisionMakingStyleQuestion[] = [")
for i, q in enumerate(QUESTIONS, 1):
    out.append("  {")
    out.append(f"    id: {i},")
    out.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    out.append("    options: [")
    for opt_key in ("A", "B", "C", "D"):
        out.append("      {")
        out.append(f"        text: {fmt_locale_map(ko_only(q[opt_key]), '        ')},")
        out.append(f"        score: {OPTION_SCORES[opt_key]},")
        out.append("      },")
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")

out.append("export const phase3DecisionMakingStyleResults: Phase3DecisionMakingStyleResult[] = [")
for tn in range(1, 7):
    r = RESULTS[tn]
    meta = TYPE_META[tn]

    def ml(val: str) -> dict[str, str]:
        return {"ko": val, **{loc: "" for loc in LOCALES if loc != "ko"}}

    title_obj = {"ko": r["title_ko"], **{loc: f"{meta['title_en']} {meta['emoji']}" for loc in LOCALES if loc != "ko"}}

    out.append("  {")
    out.append(f"    type: '{meta['type']}',")
    out.append(f"    emoji: '{meta['emoji']}',")
    out.append(f"    title: {fmt_locale_map(title_obj)},")
    out.append(f"    decisionStyle: {fmt_locale_map(ml(r['decision_style']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    decisionType: {fmt_locale_map(ml(r['decision_type']))},")
    out.append(f"    decisionKeywords: {fmt_locale_map(ml(r['decision_keywords']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    weaknesses: {fmt_locale_map(ml(r['weaknesses']))},")
    out.append(f"    bestSituations: {fmt_locale_map(ml(r['best_situations']))},")
    out.append(f"    riskySituations: {fmt_locale_map(ml(r['risky_situations']))},")
    out.append(f"    improvementDirection: {fmt_locale_map(ml(r['improvement']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
