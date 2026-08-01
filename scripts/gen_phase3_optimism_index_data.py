"""Generate lib/phase3OptimismIndexData.ts (Korean complete, other locales skeleton).

Source: scripts/_optimism_index_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_optimism_index_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3OptimismIndexData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🌑", "title_en": "Reality-Facing Type"},
    2: {"type": "Type2", "emoji": "🌘", "title_en": "Cautious Realist Type"},
    3: {"type": "Type3", "emoji": "🌗", "title_en": "Balanced Neutral Type"},
    4: {"type": "Type4", "emoji": "🌤️", "title_en": "Healthy Optimist Type"},
    5: {"type": "Type5", "emoji": "☀️", "title_en": "Resilient Recovery Type"},
    6: {"type": "Type6", "emoji": "🌟", "title_en": "Optimism Master Type"},
}


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
            mopt = re.match(r"^([AB])\.\s*(.+)$", lines[j])
            if mopt:
                opts[mopt.group(1)] = mopt.group(2).strip()
                j += 1
                continue
            if re.match(r"^Q\d+\.", lines[j]) or re.match(r"^Type\s+\d+:", lines[j]) or lines[j].startswith("4. 결과"):
                break
            if opts and not lines[j].startswith(("A.", "B.", "Q", "Type", "[")):
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
        missing = [k for k in ("A", "B") if k not in q["opts"]]
        if missing:
            raise SystemExit(f"Missing options {missing} for Q{qn}")
        questions.append({"q": q["q"], "A": q["opts"]["A"], "B": q["opts"]["B"]})

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
        title = re.sub(r"[\s🌑🌘🌗🌤️☀️🌟]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        optimism_summary = find_line("낙관주의 지수:")
        if optimism_summary and "/" in optimism_summary:
            optimism_index = optimism_summary.split("/", 1)[0].strip()
        else:
            optimism_index = optimism_summary

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
                if bln.startswith(("낙관주의 지수:", "지수:", "셀리그만")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        optimism_type = ""
        for bln in block:
            if bln.startswith("낙관주의 지수:") and any(e in bln for e in ("🌑", "🌘", "🌗", "🌤", "☀", "🌟")):
                optimism_type = bln.split("낙관주의 지수:", 1)[1].strip()
                break

        index_score = find_line("지수:")

        seligman = parse_list_block(
            block,
            "셀리그만 3P 진단:",
            [
                "이 패턴의 역설적 강점:",
                "이 패턴의 강점:",
                "이 패턴이 힘든 이유:",
                "지금 당장 시도해볼 것:",
                "이 패턴이 더 강해지려면:",
                "이 패턴의 주의점:",
                "인증 문구:",
                "한 줄 평:",
            ],
        )

        strengths = parse_list_block(block, "이 패턴의 역설적 강점:", ["이 패턴이 힘든 이유:", "지금 당장 시도해볼 것:"])
        if not strengths:
            strengths = parse_list_block(
                block,
                "이 패턴의 강점:",
                [
                    "지금 당장 시도해볼 것:",
                    "이 패턴이 더 강해지려면:",
                    "이 패턴의 주의점:",
                    "인증 문구:",
                    "한 줄 평:",
                ],
            )

        cautions = parse_list_block(block, "이 패턴이 힘든 이유:", ["지금 당장 시도해볼 것:"])
        if not cautions:
            cautions = parse_list_block(
                block,
                "이 패턴의 주의점:",
                ["인증 문구:", "한 줄 평:"],
            )
        if not cautions:
            cautions = parse_list_block(
                block,
                "이 패턴이 더 강해지려면:",
                ["한 줄 평:", "인증 문구:"],
            )

        try_now = parse_list_block(
            block,
            "지금 당장 시도해볼 것:",
            ["한 줄 평:", "인증 문구:", "이 패턴이 더 강해지려면:"],
        )

        certification = find_line("인증 문구:").strip('"')
        one_liner = find_line("한 줄 평:").strip('"')

        results[type_num] = {
            "title_ko": title,
            "optimism_index": optimism_index,
            "quote": quote,
            "description": description,
            "optimism_type": optimism_type,
            "index_score": index_score,
            "seligman3p": seligman,
            "strengths": strengths,
            "cautions": cautions,
            "try_now": try_now,
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

HEADER = """/** 나의 낙관주의 지수 — phase3-optimism-index · 12문항 2지선다 · A=0/B=1 · 7개 로케일 */

export type Phase3OptimismIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3OptimismIndexLocaleKey, string>): Record<Phase3OptimismIndexLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3OptimismIndexLocaleKey, string>, score: number): { text: Record<Phase3OptimismIndexLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3OptimismIndexQuestion {
  id: number;
  question: Record<Phase3OptimismIndexLocaleKey, string>;
  options: { text: Record<Phase3OptimismIndexLocaleKey, string>; score: number }[];
}

export interface Phase3OptimismIndexResult {
  type: string;
  emoji: string;
  title: Record<Phase3OptimismIndexLocaleKey, string>;
  optimismIndex: Record<Phase3OptimismIndexLocaleKey, string>;
  quote: Record<Phase3OptimismIndexLocaleKey, string>;
  description: Record<Phase3OptimismIndexLocaleKey, string>;
  optimismType: Record<Phase3OptimismIndexLocaleKey, string>;
  indexScore: Record<Phase3OptimismIndexLocaleKey, string>;
  seligman3P: Record<Phase3OptimismIndexLocaleKey, string>;
  strengths: Record<Phase3OptimismIndexLocaleKey, string>;
  cautions: Record<Phase3OptimismIndexLocaleKey, string>;
  tryNow: Record<Phase3OptimismIndexLocaleKey, string>;
  certificationPhrase: Record<Phase3OptimismIndexLocaleKey, string>;
  oneLiner: Record<Phase3OptimismIndexLocaleKey, string>;
  shareLine: Record<Phase3OptimismIndexLocaleKey, string>;
}

export function calculatePhase3OptimismIndexResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export function calculatePhase3OptimismIndexDomainScores(answers: number[]) {
  const permanence = (answers[0] ?? 0) + (answers[1] ?? 0) + (answers[2] ?? 0) + (answers[3] ?? 0);
  const pervasiveness = (answers[4] ?? 0) + (answers[5] ?? 0) + (answers[6] ?? 0) + (answers[7] ?? 0);
  const personalization = (answers[8] ?? 0) + (answers[9] ?? 0) + (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    permanence,
    pervasiveness,
    personalization,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3OptimismIndexQuestions: Phase3OptimismIndexQuestion[] = [")
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

out.append("export const phase3OptimismIndexResults: Phase3OptimismIndexResult[] = [")
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
    out.append(f"    optimismIndex: {fmt_locale_map(ml(r['optimism_index']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    optimismType: {fmt_locale_map(ml(r['optimism_type']))},")
    out.append(f"    indexScore: {fmt_locale_map(ml(r['index_score']))},")
    out.append(f"    seligman3P: {fmt_locale_map(ml(r['seligman3p']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    cautions: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    tryNow: {fmt_locale_map(ml(r['try_now']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
