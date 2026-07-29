"""Generate lib/phase3GritIndexData.ts (Korean complete, other locales skeleton).

Source: scripts/_grit_index_doc_extract.txt
Parses:
 - 12 questions (A/B/C/D options)
 - 6 result blocks (Type1~Type6)
 - SNS share lines
"""

from __future__ import annotations

import re
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_grit_index_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3GritIndexData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🌱", "title_en": "Grit Seedling"},
    2: {"type": "Type2", "emoji": "🔥", "title_en": "Grit Ignition"},
    3: {"type": "Type3", "emoji": "📈", "title_en": "Grit Growth"},
    4: {"type": "Type4", "emoji": "💪", "title_en": "Grit Strengthening"},
    5: {"type": "Type5", "emoji": "🏔️", "title_en": "Grit Pro"},
    6: {"type": "Type6", "emoji": "👑", "title_en": "Grit Master"},
}


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def ts_str(s: str) -> str:
    # Use JSON escaping to ensure multiline strings are safe in TS source.
    # The output includes surrounding quotes.
    return json.dumps(s, ensure_ascii=False)


def fmt_locale_map(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f"{indent}ko: {ts_str(d.get('ko', ''))},"]
    for loc in LOCALES[1:]:
        lines.append(f"{indent}{loc_key(loc)}: {ts_str(d.get(loc, d.get('ko', '')))},")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def ko_only(text: str) -> dict[str, str]:
    return {"ko": text, **{loc: "" for loc in LOCALES[1:]}}


def parse_doc() -> tuple[list[dict], dict[int, dict], dict[int, str]]:
    text = DOC_PATH.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]

    # Questions: find Qn blocks with A/B/C/D options
    questions: list[dict] = []
    q_by_num: dict[int, dict] = {}

    # Build a map of line indexes for fast scanning.
    for i, ln in enumerate(lines):
        m = re.match(r"^Q(\d+)\.\s*(.+)$", ln)
        if not m:
            continue
        qn = int(m.group(1))
        question_text = m.group(2).strip()
        # Scan forward for A-D lines.
        opts: dict[str, str] = {}
        j = i + 1
        while j < len(lines):
            mopt = re.match(r"^([ABCD])\.\s*(.+)$", lines[j])
            if mopt:
                k = mopt.group(1)
                opts[k] = mopt.group(2).strip()
                j += 1
                continue
            # next question or result section begins
            if re.match(r"^\[.*Q\d+\]|\^?Q\d+\.|^Type\s+\d+:", lines[j]) or re.match(r"^Q\d+\.", lines[j]) or re.match(r"^[457]\.", lines[j]):
                break
            # In case options have wrapped lines, append to last option.
            if opts and not lines[j].startswith(("A.", "B.", "C.", "D.")) and not lines[j].startswith("Q"):
                last_key = sorted(opts.keys())[-1]
                opts[last_key] = (opts[last_key] + " " + lines[j]).strip()
            j += 1

        if qn not in q_by_num:
            q_by_num[qn] = {
                "q": question_text,
                "opts": opts,
            }

    for qn in range(1, 13):
        if qn not in q_by_num:
            raise SystemExit(f"Missing Q{qn} in doc extract")
        q_by = q_by_num[qn]
        opts = q_by["opts"]
        missing = [k for k in ("A", "B", "C", "D") if k not in opts]
        if missing:
            raise SystemExit(f"Missing options {missing} for Q{qn}")
        questions.append(
            {
                "q": q_by["q"],
                "A": opts["A"],
                "B": opts["B"],
                "C": opts["C"],
                "D": opts["D"],
            }
        )

    # Results: parse Type blocks
    results: dict[int, dict] = {}
    share_lines: dict[int, str] = {}

    # First split around SNS section.
    sns_idx = None
    for idx, ln in enumerate(lines):
        if ln.startswith("7. SNS 공유 문구"):
            sns_idx = idx
            break

    before_sns = lines if sns_idx is None else lines[:sns_idx]
    sns_lines = [] if sns_idx is None else lines[sns_idx:]

    type_idx = [i for i, ln in enumerate(before_sns) if re.match(r"^Type\s+\d+:", ln)]
    if len(type_idx) < 6:
        raise SystemExit("Could not find 6 Type blocks in doc extract")

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\(.*?\)\s*$", "", raw_title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else len(before_sns)
        block = before_sns[start + 1 : end]

        def find_line(prefixes: list[str]) -> tuple[str, int] | None:
            for bi, bln in enumerate(block):
                for p in prefixes:
                    if bln.startswith(p):
                        return bln, bi
            return None

        # gritIndex lines (there are typically 2: percent band + type label)
        grit_index_lines: list[str] = []
        for bln in block:
            if bln.startswith("그릿 지수:"):
                grit_index_lines.append(bln.split("그릿 지수:", 1)[1].strip())
        if not grit_index_lines:
            raise SystemExit(f"Type{type_num} missing '그릿 지수:'")
        grit_index = "\n".join(grit_index_lines).strip()

        # quote: first line starting with "
        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"') and bln.endswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break
        if not quote:
            # Sometimes quotes include inner quotes; just take first quoted line.
            for bi, bln in enumerate(block):
                if bln.startswith('"'):
                    quote = bln.strip('"')
                    quote_i = bi
                    break

        # description: lines between quote and '끈기 진단:' (exclude any extra '그릿 지수:' lines)
        perse_ln = find_line(["끈기 진단:"])
        if not perse_ln:
            raise SystemExit(f"Type{type_num} missing '끈기 진단:'")
        perse_i = perse_ln[1]

        desc_lines: list[str] = []
        if quote_i is not None:
            desc_lines = [
                bl
                for bl in block[quote_i + 1 : perse_i]
                if bl.strip() and not bl.startswith("그릿 지수:")
            ]
        description = " ".join(desc_lines).strip()

        perseverance = perse_ln[0].split("끈기 진단:", 1)[1].strip()

        passion_ln = find_line(["열정 진단:"])
        if not passion_ln:
            raise SystemExit(f"Type{type_num} missing '열정 진단:'")
        passion = passion_ln[0].split("열정 진단:", 1)[1].strip()

        # action items
        action_items: list[str] = []
        action_start = None
        for bi, bln in enumerate(block):
            if bln.startswith("지금 당장 할 수 있는 것:"):
                action_start = bi
                break

        def stop_marker_line(line: str) -> bool:
            return line.startswith("앤젤라 더크워스 한 마디:") or line.startswith("주의점:") or line.startswith(
                "공통점:"
            ) or line.startswith("인증 문구:") or line.startswith("한 줄 평:") or line.startswith(
                "한 줄 평"
            ) or line.startswith("한 줄 평:")

        if action_start is not None:
            for bln in block[action_start + 1 :]:
                if stop_marker_line(bln) or bln.startswith("한 줄 평:"):
                    break
                # keep list items as lines
                action_items.append(bln.strip())

        duckworth = ""
        for bi, bln in enumerate(block):
            if bln.startswith("앤젤라 더크워스 한 마디:"):
                duckworth = bln.split("앤젤라 더크워스 한 마디:", 1)[1].strip()
                break

        common_traits = ""
        caution = ""
        certification = ""
        one_liner = ""

        for bi, bln in enumerate(block):
            if bln.startswith("이 수준의 그릿을 가진 사람들의 공통점:"):
                common_traits = bln.split("이 수준의 그릿을 가진 사람들의 공통점:", 1)[1].strip()
            elif bln.startswith("주의점:"):
                caution = bln.split("주의점:", 1)[1].strip()
            elif bln.startswith("인증 문구:"):
                certification = bln.split("인증 문구:", 1)[1].strip()
            elif bln.startswith("한 줄 평:"):
                one_liner = bln.split("한 줄 평:", 1)[1].strip()

        if not one_liner:
            # some blocks have '한 줄 평' without colon, try fallback
            for bln in block[::-1]:
                if bln.startswith("한 줄 평"):
                    one_liner = bln.split("한 줄 평", 1)[1].lstrip(":").strip()
                    break

        results[type_num] = {
            "title_ko": title,
            "grit_index": grit_index,
            "quote": quote,
            "description": description,
            "perseverance": perseverance,
            "passion": passion,
            "action_items": action_items,
            "duckworth": duckworth,
            "common_traits": common_traits,
            "caution": caution,
            "certification": certification,
            "one_liner": one_liner,
        }

    # SNS share lines
    for ln in sns_lines:
        m = re.match(r"^Type\s+(\d+):\s*\"(.*)\"$", ln)
        if not m:
            continue
        tn = int(m.group(1))
        share_lines[tn] = m.group(2).strip()

    if len(share_lines) < 6:
        # fallback: match without greedy end quote
        for ln in sns_lines:
            m = re.match(r"^Type\s+(\d+):\s*\"(.*)$", ln)
            if not m:
                continue
            tn = int(m.group(1))
            share_lines[tn] = m.group(2).strip().rstrip('"')

    if len(share_lines) < 6:
        raise SystemExit(f"Could not parse all share lines. Parsed: {share_lines.keys()}")

    for tn in range(1, 7):
        if tn not in results:
            raise SystemExit(f"Missing result Type{tn}")
        results[tn]["share_line"] = share_lines[tn]

    return questions, results, share_lines


QUESTIONS, RESULTS, _SHARE = parse_doc()


HEADER = """/** 나의 그릿(Grit) 지수 측정 — phase3-grit-index · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3GritIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3GritIndexLocaleKey, string>): Record<Phase3GritIndexLocaleKey, string> {
  return t;
}

export interface Phase3GritIndexQuestion {
  id: number;
  question: Record<Phase3GritIndexLocaleKey, string>;
  options: { text: Record<Phase3GritIndexLocaleKey, string>; score: number }[];
}

export interface Phase3GritIndexResult {
  type: string;
  emoji: string;
  title: Record<Phase3GritIndexLocaleKey, string>;
  gritIndex: Record<Phase3GritIndexLocaleKey, string>;
  quote: Record<Phase3GritIndexLocaleKey, string>;
  description: Record<Phase3GritIndexLocaleKey, string>;
  perseveranceDiagnosis: Record<Phase3GritIndexLocaleKey, string>;
  passionDiagnosis: Record<Phase3GritIndexLocaleKey, string>;
  actionItems: Record<Phase3GritIndexLocaleKey, string>; // multi-line
  duckworthQuote: Record<Phase3GritIndexLocaleKey, string>;
  commonTraits: Record<Phase3GritIndexLocaleKey, string>;
  caution: Record<Phase3GritIndexLocaleKey, string>;
  certificationPhrase: Record<Phase3GritIndexLocaleKey, string>;
  oneLiner: Record<Phase3GritIndexLocaleKey, string>;
  shareLine: Record<Phase3GritIndexLocaleKey, string>;
}

export function calculatePhase3GritIndexResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
"""


lines: list[str] = [HEADER, ""]

# questions
lines.append("export const phase3GritIndexQuestions: Phase3GritIndexQuestion[] = [")
for i, q in enumerate(QUESTIONS, 1):
    lines.append("  {")
    lines.append(f"    id: {i},")
    lines.append(f"    question: {fmt_locale_map(ko_only(q['q']))},")
    lines.append("    options: [")
    # A/B/C/D order
    for opt_key in ("A", "B", "C", "D"):
        opt_text = q[opt_key]
        score = OPTION_SCORES[opt_key]
        lines.append("      {")
        lines.append(f"        text: {fmt_locale_map(ko_only(opt_text), '        ')},")
        lines.append(f"        score: {score},")
        lines.append("      },")
    lines.append("    ],")
    lines.append("  },")
lines.append("];")
lines.append("")

# results
lines.append("export const phase3GritIndexResults: Phase3GritIndexResult[] = [")
for tn in range(1, 7):
    r = RESULTS[tn]
    meta = TYPE_META[tn]
    type_key = meta["type"]
    emoji = meta["emoji"]

    # titles: non-ko skeleton filled with English generic to prevent Korean in sharing
    title_obj = {"ko": r["title_ko"], **{loc: f"{meta['title_en']} {emoji}" for loc in LOCALES if loc != "ko"}}
    title_obj = {loc: (title_obj.get(loc) or "") for loc in LOCALES}

    def ml(val: str) -> dict[str, str]:
        return {"ko": val, **{loc: "" for loc in LOCALES if loc != "ko"}}

    lines.append("  {")
    lines.append(f"    type: '{type_key}',")
    lines.append(f"    emoji: '{emoji}',")
    lines.append(f"    title: {fmt_locale_map(title_obj)},")
    lines.append(f"    gritIndex: {fmt_locale_map(ml(r['grit_index']))},")
    lines.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    lines.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    lines.append(f"    perseveranceDiagnosis: {fmt_locale_map(ml(r['perseverance']))},")
    lines.append(f"    passionDiagnosis: {fmt_locale_map(ml(r['passion']))},")
    action_items_text = "\n".join(r["action_items"]).strip() if r["action_items"] else ""
    lines.append(f"    actionItems: {fmt_locale_map(ml(action_items_text))},")
    lines.append(f"    duckworthQuote: {fmt_locale_map(ml(r['duckworth']))},")
    lines.append(f"    commonTraits: {fmt_locale_map(ml(r['common_traits']))},")
    lines.append(f"    caution: {fmt_locale_map(ml(r['caution']))},")
    lines.append(f"    certificationPhrase: {fmt_locale_map(ml(r['certification']))},")
    lines.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    lines.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    lines.append("  },")
lines.append("];")

OUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
print("Wrote", OUT_PATH, OUT_PATH.stat().st_size, "bytes")

