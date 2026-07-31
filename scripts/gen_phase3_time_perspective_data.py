"""Generate lib/phase3TimePerspectiveData.ts (Korean complete, other locales skeleton).

Source: scripts/_time_perspective_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_time_perspective_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3TimePerspectiveData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🌑", "title_en": "Past-Negative Fixation Type"},
    2: {"type": "Type2", "emoji": "🌸", "title_en": "Past-Positive Dependent Type"},
    3: {"type": "Type3", "emoji": "☀️", "title_en": "Present Immersion Type"},
    4: {"type": "Type4", "emoji": "🌤️", "title_en": "Present-Future Transition Type"},
    5: {"type": "Type5", "emoji": "🚀", "title_en": "Future Goal-Oriented Type"},
    6: {"type": "Type6", "emoji": "⏳", "title_en": "Balanced Time Perspective Master Type"},
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
        title = re.sub(r"[\s🌑🌸☀️🌤️🚀⏳]+$", "", title).strip()

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        pattern_lines = [bln for bln in block if bln.startswith("시간관 유형:")]
        time_perspective_pattern = pattern_lines[0].split("시간관 유형:", 1)[1].strip() if pattern_lines else ""
        time_perspective_type = pattern_lines[1].split("시간관 유형:", 1)[1].strip() if len(pattern_lines) > 1 else ""

        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break

        time_keywords = find_line("시간 키워드:")

        desc_lines: list[str] = []
        if quote_i is not None:
            for bln in block[quote_i + 1 :]:
                if bln.startswith(("시간관 유형:", "시간 키워드:", "이 시간관")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        strengths = parse_list_block(block, "이 시간관의 이면:", ["이 시간관이 힘든 이유:", "이 시간관의 강점:"])
        if not strengths:
            strengths = parse_list_block(block, "이 시간관의 강점:", ["이 시간관의 주의점:", "이 시간관의 패턴:"])

        cautions = parse_list_block(block, "이 시간관이 힘든 이유:", ["이 시간관을 가진 사람에게 맞는 행복 전략:"])
        if not cautions:
            cautions = parse_list_block(
                block,
                "이 시간관의 주의점:",
                [
                    "이 시간관을 가진 사람에게 맞는 행복 전략:",
                    "이 시간관을 유지하려면:",
                    "인증 문구:",
                    "한 줄 평:",
                ],
            )
        if not cautions:
            cautions = parse_list_block(block, "이 시간관의 패턴:", ["이 시간관을 가진 사람에게 맞는 행복 전략:"])

        happiness_strategy = parse_list_block(
            block,
            "이 시간관을 가진 사람에게 맞는 행복 전략:",
            [
                "이 시간관에 도움이 되는 것:",
                "이 시간관을 풍부하게 하려면:",
                "이 시간관을 유지하려면:",
                "인증 문구:",
                "한 줄 평:",
            ],
        )

        enrich_guide = parse_list_block(block, "이 시간관에 도움이 되는 것:", ["한 줄 평:"])
        if not enrich_guide:
            enrich_guide = parse_list_block(block, "이 시간관을 풍부하게 하려면:", ["한 줄 평:"])
        if not enrich_guide:
            enrich_guide = parse_list_block(block, "이 시간관을 유지하려면:", ["인증 문구:", "한 줄 평:"])

        certification = find_line("인증 문구:").strip('"')
        one_liner = find_line("한 줄 평:").strip('"')

        results[type_num] = {
            "title_ko": title,
            "time_perspective_pattern": time_perspective_pattern,
            "quote": quote,
            "description": description,
            "time_perspective_type": time_perspective_type,
            "time_keywords": time_keywords,
            "strengths": strengths,
            "cautions": cautions,
            "happiness_strategy": happiness_strategy,
            "enrich_guide": enrich_guide,
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

HEADER = """/** 나의 과거-현재-미래 시간관 — phase3-time-perspective · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3TimePerspectiveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3TimePerspectiveLocaleKey, string>): Record<Phase3TimePerspectiveLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3TimePerspectiveLocaleKey, string>, score: number): { text: Record<Phase3TimePerspectiveLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3TimePerspectiveQuestion {
  id: number;
  question: Record<Phase3TimePerspectiveLocaleKey, string>;
  options: { text: Record<Phase3TimePerspectiveLocaleKey, string>; score: number }[];
}

export interface Phase3TimePerspectiveResult {
  type: string;
  emoji: string;
  title: Record<Phase3TimePerspectiveLocaleKey, string>;
  timePerspectivePattern: Record<Phase3TimePerspectiveLocaleKey, string>;
  quote: Record<Phase3TimePerspectiveLocaleKey, string>;
  description: Record<Phase3TimePerspectiveLocaleKey, string>;
  timePerspectiveType: Record<Phase3TimePerspectiveLocaleKey, string>;
  timeKeywords: Record<Phase3TimePerspectiveLocaleKey, string>;
  strengths: Record<Phase3TimePerspectiveLocaleKey, string>;
  cautions: Record<Phase3TimePerspectiveLocaleKey, string>;
  happinessStrategy: Record<Phase3TimePerspectiveLocaleKey, string>;
  enrichGuide: Record<Phase3TimePerspectiveLocaleKey, string>;
  certificationPhrase: Record<Phase3TimePerspectiveLocaleKey, string>;
  oneLiner: Record<Phase3TimePerspectiveLocaleKey, string>;
  shareLine: Record<Phase3TimePerspectiveLocaleKey, string>;
}

export function calculatePhase3TimePerspectiveResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function calculatePhase3TimePerspectiveDomainScores(answers: number[]) {
  const freeTime = (answers[0] ?? 0) + (answers[1] ?? 0);
  const emotion = (answers[2] ?? 0) + (answers[3] ?? 0);
  const decision = (answers[4] ?? 0) + (answers[5] ?? 0);
  const happiness = (answers[6] ?? 0) + (answers[7] ?? 0);
  const difficulty = (answers[8] ?? 0) + (answers[9] ?? 0);
  const timeAttitude = (answers[10] ?? 0) + (answers[11] ?? 0);
  return {
    freeTime,
    emotion,
    decision,
    happiness,
    difficulty,
    timeAttitude,
    total: answers.reduce((sum, s) => sum + (s ?? 0), 0),
  };
}
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3TimePerspectiveQuestions: Phase3TimePerspectiveQuestion[] = [")
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

out.append("export const phase3TimePerspectiveResults: Phase3TimePerspectiveResult[] = [")
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
    out.append(f"    timePerspectivePattern: {fmt_locale_map(ml(r['time_perspective_pattern']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    timePerspectiveType: {fmt_locale_map(ml(r['time_perspective_type']))},")
    out.append(f"    timeKeywords: {fmt_locale_map(ml(r['time_keywords']))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    cautions: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    happinessStrategy: {fmt_locale_map(ml(r['happiness_strategy']))},")
    out.append(f"    enrichGuide: {fmt_locale_map(ml(r['enrich_guide']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
