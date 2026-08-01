"""Generate lib/phase3ApprovalSeekingLevelData.ts (Korean complete, other locales skeleton).

Source: scripts/_recognition_desire_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_recognition_desire_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3ApprovalSeekingLevelData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🌊", "title_en": "Diluted Approval-Seeking Type"},
    2: {"type": "Type2", "emoji": "🌱", "title_en": "Healthy Approval-Seeking Type"},
    3: {"type": "Type3", "emoji": "🌤️", "title_en": "Average Approval-Seeking Type"},
    4: {"type": "Type4", "emoji": "💧", "title_en": "High Approval-Seeking Type"},
    5: {"type": "Type5", "emoji": "🌧️", "title_en": "Strong Approval-Seeking Type"},
    6: {"type": "Type6", "emoji": "🌊💧", "title_en": "Extreme Approval-Seeking Type"},
}

STRENGTH_PREFIXES = [
    "이 유형의 강점:",
    "이 유형의 특징:",
    "이 유형의 패턴:",
    "이 수준이 만드는 패턴:",
]

CAUTION_PREFIXES = [
    ("이 유형의 주의점:", "cautionsTitle"),
    ("유지 방법:", "maintainTitle"),
    ("이 유형에게 필요한 것:", "neededTitle"),
    ("이 수준에서 도움이 되는 것:", "helpGuideTitle"),
    ("전문가 연결 권유:", "helpGuideTitle"),
]

STOP_PREFIXES = [
    "이 유형의 강점:",
    "이 유형의 특징:",
    "이 유형의 패턴:",
    "이 유형의 주의점:",
    "이 수준이 만드는 패턴:",
    "유지 방법:",
    "이 유형에게 필요한 것:",
    "지금 당장 할 수 있는 것",
    "이 수준에서 도움이 되는 것:",
    "전문가 연결 권유:",
    "인증 문구",
    "인증 문구 대신:",
    "한 줄 평:",
]

TRY_NOW_PREFIXES = [
    "지금 당장 할 수 있는 것:",
    "지금 당장 할 수 있는 것 (딱 하나):",
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


def parse_first_matching(block: list[str], prefixes: list[str], stop_prefixes: list[str]) -> str:
    for prefix in prefixes:
        val = parse_list_block(block, prefix, stop_prefixes)
        if val:
            return val
    return ""


def parse_caution_sections(block: list[str]) -> tuple[str, str]:
    parts: list[str] = []
    title_key = "cautionsTitle"
    for prefix, key in CAUTION_PREFIXES:
        val = parse_list_block(block, prefix, STOP_PREFIXES)
        if val:
            if not parts:
                title_key = key
            parts.append(val)
    return "\n".join(parts), title_key


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

    sns_idx = next((i for i, ln in enumerate(lines) if ln.startswith("7. SNS 공유 문구")), len(lines))
    before_sns = lines[:sns_idx]
    sns_lines = lines[sns_idx:]

    type_idx = [i for i, ln in enumerate(before_sns) if re.match(r"^Type\s+\d+:", ln)]
    if len(type_idx) < 6:
        raise SystemExit("Could not find 6 Type blocks")

    results: dict[int, dict] = {}
    share_lines: dict[int, str] = {}

    emoji_pattern = re.compile(r"[\s🌊🌱🌤️💧🌧️]+$")

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\([^)]*\)\s*$", "", raw_title).strip()
        title = emoji_pattern.sub("", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        desire_level = find_line("인정 욕구 농도:")

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
                if bln.startswith(("인정 욕구 농도:", "타인 평가 영향도:")):
                    break
                if bln.strip() and not bln.startswith("인정 욕구 농도:"):
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        desire_type = ""
        for bln in block:
            if bln.startswith("인정 욕구 농도:") and any(e in bln for e in ("🌊", "🌱", "🌤️", "💧", "🌧️")):
                desire_type = bln.split("인정 욕구 농도:", 1)[1].strip()
                break

        evaluation_impact = find_line("타인 평가 영향도:")

        strengths = parse_first_matching(block, STRENGTH_PREFIXES, STOP_PREFIXES)
        cautions, cautions_title_key = parse_caution_sections(block)

        if not strengths:
            pattern_as_caution = parse_list_block(block, "이 수준이 만드는 패턴:", STOP_PREFIXES)
            if pattern_as_caution:
                cautions = pattern_as_caution if not cautions else f"{cautions}\n{pattern_as_caution}"
                if cautions_title_key == "cautionsTitle":
                    cautions_title_key = "patternTitle"

        try_now = parse_first_matching(block, TRY_NOW_PREFIXES, STOP_PREFIXES)

        certification = find_line("인증 문구:").strip('"') or find_line("인증 문구 대신:").strip('"')
        one_liner = find_line("한 줄 평:").strip('"')

        results[type_num] = {
            "title_ko": title,
            "desire_level": desire_level,
            "quote": quote,
            "description": description,
            "desire_type": desire_type,
            "evaluation_impact": evaluation_impact,
            "strengths": strengths,
            "cautions": cautions,
            "cautions_title_key": cautions_title_key,
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

HEADER = """/** 나의 인정 욕구 농도 — phase3-approval-seeking-level · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3ApprovalSeekingLevelLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3ApprovalSeekingLevelLocaleKey, string>): Record<Phase3ApprovalSeekingLevelLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3ApprovalSeekingLevelLocaleKey, string>, score: number): { text: Record<Phase3ApprovalSeekingLevelLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3ApprovalSeekingLevelQuestion {
  id: number;
  question: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  options: { text: Record<Phase3ApprovalSeekingLevelLocaleKey, string>; score: number }[];
}

export interface Phase3ApprovalSeekingLevelResult {
  type: string;
  emoji: string;
  title: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  desireLevel: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  quote: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  description: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  desireType: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  evaluationImpact: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  strengths: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  cautions: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  cautionsTitleKey: string;
  tryNow: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  certificationPhrase: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  oneLiner: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
  shareLine: Record<Phase3ApprovalSeekingLevelLocaleKey, string>;
}

export function calculatePhase3ApprovalSeekingLevelResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3ApprovalSeekingLevelDomainScores(answers: number[]) {
  const snsOnline = (answers[0] ?? 0) + (answers[1] ?? 0);
  const praiseCriticism = (answers[2] ?? 0) + (answers[3] ?? 0);
  const othersGaze = (answers[4] ?? 0) + (answers[5] ?? 0);
  const relationship = (answers[6] ?? 0) + (answers[7] ?? 0);
  const selfDecision = (answers[8] ?? 0) + (answers[9] ?? 0);
  const psychological = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    snsOnline,
    praiseCriticism,
    othersGaze,
    relationship,
    selfDecision,
    psychological,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3ApprovalSeekingLevelQuestions: Phase3ApprovalSeekingLevelQuestion[] = [")
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

out.append("export const phase3ApprovalSeekingLevelResults: Phase3ApprovalSeekingLevelResult[] = [")
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
    out.append(f"    desireLevel: {fmt_locale_map(ml(r['desire_level']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    desireType: {fmt_locale_map(ml(r['desire_type']))},")
    out.append(f"    evaluationImpact: {fmt_locale_map(ml(r['evaluation_impact']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    cautions: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    cautionsTitleKey: '{r['cautions_title_key']}',")
    out.append(f"    tryNow: {fmt_locale_map(ml(r['try_now']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
