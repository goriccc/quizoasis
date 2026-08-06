"""Generate lib/phase3DesertIslandSurvivalKitData.ts (Korean complete, other locales skeleton).

Source: scripts/_desert_island_survival_kit_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_desert_island_survival_kit_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3DesertIslandSurvivalKitData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🪖", "title_en": "Survival Expert Type", "score": 0},
    2: {"type": "Type2", "emoji": "🎒", "title_en": "Almost-Ready Type", "score": 1},
    3: {"type": "Type3", "emoji": "🌴", "title_en": "Positive Challenger Type", "score": 2},
    4: {"type": "Type4", "emoji": "🐚", "title_en": "Optimistic Drifter Type", "score": 3},
    5: {"type": "Type5", "emoji": "📱", "title_en": "Reality-Denial Type", "score": 4},
    6: {"type": "Type6", "emoji": "🌋", "title_en": "Absurd Legend Type", "score": 5},
}

TYPE_EMOJIS = "🪖🎒🌴🐚📱🌋"

ISLAND_SAY_PREFIXES = (
    "이 유형이 무인도에서 하는 첫마디:",
    "이 유형이 구조대에게 하는 말:",
    "이 유형이 무인도에서 하는 말:",
    "이 유형이 구조됐을 때 하는 말:",
)

EXTRA_PREFIXES = (
    "이 유형의 하루:",
    "이 유형이 선택한 것들의 공통점:",
)


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


def find_line(block: list[str], prefix: str) -> str:
    for bln in block:
        if bln.startswith(prefix):
            return bln.split(prefix, 1)[1].strip().strip('"')
    return ""


def collect_prefixed_lines(block: list[str], prefixes: tuple[str, ...]) -> str:
    parts: list[str] = []
    for prefix in prefixes:
        val = find_line(block, prefix)
        if val:
            parts.append(val.strip('"'))
    return "\n".join(parts)


def parse_doc() -> tuple[list[dict], dict[int, dict]]:
    text = DOC_PATH.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip() and not ln.startswith("SOURCE:")]

    questions: list[dict] = []
    i = 0
    while i < len(lines):
        m = re.match(r"^Q(\d+)\.\s*(.+)$", lines[i], re.I)
        if not m:
            i += 1
            continue
        scenario = m.group(2).strip()
        opts: dict[str, str] = {}
        i += 1
        while i < len(lines):
            if re.match(r"^Q\d+\.", lines[i], re.I):
                break
            if lines[i].startswith("4. 결과") or re.match(r"^Type\s+\d+:", lines[i], re.I):
                break
            mopt = re.match(r"^([AB])\.\s*(.+)$", lines[i])
            if mopt:
                opts[mopt.group(1)] = mopt.group(2).strip()
            i += 1
        missing = [k for k in ("A", "B") if k not in opts]
        if missing:
            raise SystemExit(f"Missing options {missing} for: {scenario[:60]}")
        questions.append({"q": scenario, "A": opts["A"], "B": opts["B"]})

    if len(questions) != 5:
        raise SystemExit(f"Expected 5 questions, got {len(questions)}")

    sns_idx = next((i for i, ln in enumerate(lines) if ln.startswith("6. SNS 공유 문구")), len(lines))
    before_sns = lines[:sns_idx]
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
        title = re.sub(rf"[\s{re.escape(TYPE_EMOJIS)}]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        survival_summary = find_line(block, "생존 본능:")

        quote = ""
        for bln in block:
            if bln.startswith('"'):
                quote = bln.strip('"')
                break

        desc_lines: list[str] = []
        after_quote = False
        for bln in block:
            if bln.startswith('"'):
                after_quote = True
                continue
            if after_quote:
                if bln.startswith(("생존 유형:", "생존 전략:")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        survival_style_type = find_line(block, "생존 유형:")
        survival_strategy = find_line(block, "생존 전략:")
        island_says = collect_prefixed_lines(block, ISLAND_SAY_PREFIXES)
        extra_info = collect_prefixed_lines(block, EXTRA_PREFIXES)
        one_liner = find_line(block, "한 줄 평:").strip('"')
        certification = find_line(block, "인증 문구:").strip('"')

        desc_sections = [description]
        if one_liner:
            desc_sections.append(f"한 줄 평: {one_liner}")

        results[type_num] = {
            "title_ko": title,
            "quote": quote,
            "survival_summary": survival_summary,
            "description": "\n\n".join(desc_sections),
            "survival_style_type": survival_style_type,
            "survival_strategy": survival_strategy,
            "island_says": island_says,
            "extra_info": extra_info,
            "certification": certification,
            "one_liner": one_liner,
        }

    for ln in lines[sns_idx:]:
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

HEADER = """/** 나의 무인도 생존 키트 선택 · phase3-desert-island-survival-kit · 5문항 2지선다 · A=0/B=1 · 7개 로케일 */

export type Phase3DesertIslandSurvivalKitLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>): Record<Phase3DesertIslandSurvivalKitLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>, score: number): { text: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3DesertIslandSurvivalKitQuestion {
  id: number;
  question: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  options: { text: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>; score: number }[];
}

export interface Phase3DesertIslandSurvivalKitResult {
  type: string;
  emoji: string;
  title: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  shortDescription: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  description: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  empathyLevel: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  characteristics: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  goodMatch: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  badMatch: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  certificationPhrase: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
  shareLine: Record<Phase3DesertIslandSurvivalKitLocaleKey, string>;
}

export function calculatePhase3DesertIslandSurvivalKitResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  const clamped = Math.min(Math.max(total, 0), 5);
  return `Type${clamped + 1}`;
}

export const phase3DesertIslandSurvivalKitQuestions: Phase3DesertIslandSurvivalKitQuestion[] = [
"""

out: list[str] = [HEADER]
for i, q in enumerate(QUESTIONS, 1):
    out.append("  {")
    out.append(f"    id: {i},")
    out.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    out.append("    options: [")
    for opt_key in ("A", "B"):
        out.append(f"      opt({fmt_locale_map(ko_only(q[opt_key]), '        ')}, {OPTION_SCORES[opt_key]}),")
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")

out.append("export const phase3DesertIslandSurvivalKitResults: Phase3DesertIslandSurvivalKitResult[] = [")
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
    out.append(f"    shortDescription: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    empathyLevel: {fmt_locale_map(ml(r['survival_style_type']))},")
    out.append(f"    characteristics: {fmt_locale_map(ml(r['survival_strategy']))},")
    out.append(f"    goodMatch: {fmt_locale_map(ml(r['island_says']))},")
    out.append(f"    badMatch: {fmt_locale_map(ml(r['extra_info']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
