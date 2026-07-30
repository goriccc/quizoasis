"""Generate lib/phase3CompetitiveDnaData.ts (Korean complete, other locales skeleton).

Source: scripts/_competitiveness_dna_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_competitiveness_dna_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3CompetitiveDnaData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🕊️", "title_en": "Pacifist Type"},
    2: {"type": "Type2", "emoji": "🌱", "title_en": "Self-Growth Type"},
    3: {"type": "Type3", "emoji": "⚡", "title_en": "Healthy Competitor Type"},
    4: {"type": "Type4", "emoji": "🔥", "title_en": "Passionate Competitor Type"},
    5: {"type": "Type5", "emoji": "⚔️", "title_en": "Extreme Competitor Type"},
    6: {"type": "Type6", "emoji": "🏆", "title_en": "Competitive DNA Master Type"},
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

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\([^)]*\)\s*$", "", raw_title).strip()
        title = re.sub(r"[\s🕊️🌱⚡🔥⚔️🏆]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        competitive_dna = find_line("경쟁심 DNA:")
        if not competitive_dna:
            raise SystemExit(f"Type{type_num} missing competitive DNA")

        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break

        competitive_type = find_line("경쟁심 유형:")
        competitive_keywords = find_line("경쟁 키워드:")

        desc_lines: list[str] = []
        if quote_i is not None:
            for bln in block[quote_i + 1 :]:
                if bln.startswith(("경쟁심 유형:", "경쟁 키워드:", "이 유형의")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        strengths = parse_list_block(block, "이 유형의 강점:", ["이 유형의 주의점:", "이 유형의 특징:"])
        cautions = parse_list_block(block, "이 유형의 주의점:", ["이 유형에게 잘 맞는 환경:"])
        if not cautions:
            cautions = parse_list_block(block, "이 유형의 특징:", ["이 유형에게 잘 맞는 환경:"])
        best_environments = find_line("이 유형에게 잘 맞는 환경:")
        sports_game_types = find_line("가장 잘 맞는 스포츠·게임 유형:")
        certification = find_line("인증 문구:")
        one_liner = find_line("한 줄 평:")

        results[type_num] = {
            "title_ko": title,
            "competitive_dna": competitive_dna,
            "quote": quote,
            "description": description,
            "competitive_type": competitive_type,
            "competitive_keywords": competitive_keywords,
            "strengths": strengths,
            "cautions": cautions,
            "best_environments": best_environments,
            "sports_game_types": sports_game_types,
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

HEADER = """/** 나의 '경쟁심' DNA 분석 — phase3-competitive-dna · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3CompetitiveDnaLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3CompetitiveDnaLocaleKey, string>): Record<Phase3CompetitiveDnaLocaleKey, string> {
  return t;
}

export interface Phase3CompetitiveDnaQuestion {
  id: number;
  question: Record<Phase3CompetitiveDnaLocaleKey, string>;
  options: { text: Record<Phase3CompetitiveDnaLocaleKey, string>; score: number }[];
}

export interface Phase3CompetitiveDnaResult {
  type: string;
  emoji: string;
  title: Record<Phase3CompetitiveDnaLocaleKey, string>;
  competitiveDna: Record<Phase3CompetitiveDnaLocaleKey, string>;
  quote: Record<Phase3CompetitiveDnaLocaleKey, string>;
  description: Record<Phase3CompetitiveDnaLocaleKey, string>;
  competitiveType: Record<Phase3CompetitiveDnaLocaleKey, string>;
  competitiveKeywords: Record<Phase3CompetitiveDnaLocaleKey, string>;
  strengths: Record<Phase3CompetitiveDnaLocaleKey, string>;
  cautions: Record<Phase3CompetitiveDnaLocaleKey, string>;
  bestEnvironments: Record<Phase3CompetitiveDnaLocaleKey, string>;
  sportsGameTypes: Record<Phase3CompetitiveDnaLocaleKey, string>;
  certificationPhrase: Record<Phase3CompetitiveDnaLocaleKey, string>;
  oneLiner: Record<Phase3CompetitiveDnaLocaleKey, string>;
  shareLine: Record<Phase3CompetitiveDnaLocaleKey, string>;
}

export function calculatePhase3CompetitiveDnaResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3CompetitiveDnaDomainScores(answers: number[]) {
  const reaction = (answers[0] ?? 0) + (answers[1] ?? 0);
  const winLoss = (answers[2] ?? 0) + (answers[3] ?? 0);
  const motivation = (answers[4] ?? 0) + (answers[5] ?? 0);
  const comparison = (answers[6] ?? 0) + (answers[7] ?? 0);
  const strategy = (answers[8] ?? 0) + (answers[9] ?? 0);
  const lifeImpact = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    reaction,
    winLoss,
    motivation,
    comparison,
    strategy,
    lifeImpact,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3CompetitiveDnaQuestions: Phase3CompetitiveDnaQuestion[] = [")
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

out.append("export const phase3CompetitiveDnaResults: Phase3CompetitiveDnaResult[] = [")
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
    out.append(f"    competitiveDna: {fmt_locale_map(ml(r['competitive_dna']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    competitiveType: {fmt_locale_map(ml(r['competitive_type']))},")
    out.append(f"    competitiveKeywords: {fmt_locale_map(ml(r['competitive_keywords']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    cautions: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    bestEnvironments: {fmt_locale_map(ml(r['best_environments']))},")
    out.append(f"    sportsGameTypes: {fmt_locale_map(ml(r['sports_game_types']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
