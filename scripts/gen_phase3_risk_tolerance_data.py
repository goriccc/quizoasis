"""Generate lib/phase3RiskToleranceData.ts (Korean complete, other locales skeleton).

Source: scripts/_risk_taking_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_risk_taking_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3RiskToleranceData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1, "C": 2, "D": 3}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🛡️", "title_en": "Safe First Type"},
    2: {"type": "Type2", "emoji": "🔍", "title_en": "Careful Analyst Type"},
    3: {"type": "Type3", "emoji": "♟️", "title_en": "Strategic Risk Taker Type"},
    4: {"type": "Type4", "emoji": "🚀", "title_en": "Active Adventurer Type"},
    5: {"type": "Type5", "emoji": "⚡", "title_en": "High Risk Seeker Type"},
    6: {"type": "Type6", "emoji": "🌋", "title_en": "Extreme Adventurer Type"},
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
        questions.append(
            {
                "q": q["q"],
                "A": q["opts"]["A"],
                "B": q["opts"]["B"],
                "C": q["opts"]["C"],
                "D": q["opts"]["D"],
            }
        )

    sns_idx = next((i for i, ln in enumerate(lines) if ln.startswith("7. SNS 공유 문구")), len(lines))
    before_sns = lines[:sns_idx]
    sns_lines = lines[sns_idx:]

    type_idx = [i for i, ln in enumerate(before_sns) if re.match(r"^Type\s+\d+:", ln)]
    if len(type_idx) < 6:
        raise SystemExit("Could not find 6 Type blocks")

    results: dict[int, dict] = {}
    share_lines: dict[int, str] = {}

    domain_prefixes = {
        "financial": "재정:",
        "social": "사회:",
        "physical": "신체:",
        "career": "커리어:",
        "uncertainty": "불확실성:",
    }

    for k, start in enumerate(type_idx[:6]):
        m = re.match(r"^Type\s+(\d+):\s*(.+)$", before_sns[start])
        type_num = int(m.group(1))
        raw_title = m.group(2).strip()
        title = re.sub(r"\s*\([^)]*\)\s*$", "", raw_title).strip()
        title = re.sub(
            r"[\s🛡️🔍♟️🚀⚡🌋🛡]+$",
            "",
            title,
        ).strip().rstrip(",")

        end = type_idx[k + 1] if k + 1 < len(type_idx) else sns_idx
        block = before_sns[start + 1 : end]

        def find_line(prefix: str) -> str:
            for bln in block:
                if bln.startswith(prefix):
                    return bln.split(prefix, 1)[1].strip()
            return ""

        risk_level = find_line("위험 감수 수준:")
        if not risk_level:
            raise SystemExit(f"Type{type_num} missing risk level")

        quote = ""
        quote_i = None
        for bi, bln in enumerate(block):
            if bln.startswith('"'):
                quote = bln.strip('"')
                quote_i = bi
                break

        risk_type = find_line("위험 감수 유형:")
        risk_acceptance = find_line("리스크 수용 수준:")

        domain_start = next((bi for bi, bln in enumerate(block) if bln.startswith("영역별 진단:")), None)
        domains: dict[str, str] = {}
        if domain_start is not None:
            for bln in block[domain_start + 1 :]:
                if bln.startswith("이 유형의"):
                    break
                for key, prefix in domain_prefixes.items():
                    if bln.startswith(prefix):
                        domains[key] = bln.split(prefix, 1)[1].strip()

        desc_lines: list[str] = []
        if quote_i is not None:
            stop_at = domain_start if domain_start is not None else len(block)
            for bln in block[quote_i + 1 : stop_at]:
                if bln.startswith(("위험 감수 유형:", "리스크 수용 수준:", "영역별 진단:")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        strengths = find_line("이 유형의 강점:")
        caution = find_line("이 유형의 주의점:")
        investment = find_line("투자 성향 연결:")
        entrepreneurship = find_line("창업 성향 연결:")
        certification = find_line("인증 문구:")
        one_liner = find_line("한 줄 평:")

        results[type_num] = {
            "title_ko": title,
            "risk_level": risk_level,
            "quote": quote,
            "description": description,
            "risk_type": risk_type,
            "risk_acceptance": risk_acceptance,
            "domains": domains,
            "strengths": strengths,
            "caution": caution,
            "investment": investment,
            "entrepreneurship": entrepreneurship,
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

HEADER = """/** 나의 위험 감수 성향 — phase3-risk-tolerance · 12문항 4지선다 · A=0/B=1/C=2/D=3 · 7개 로케일 */

export type Phase3RiskToleranceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3RiskToleranceLocaleKey, string>): Record<Phase3RiskToleranceLocaleKey, string> {
  return t;
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
"""

out: list[str] = [HEADER, ""]

out.append("export const phase3RiskToleranceQuestions: Phase3RiskToleranceQuestion[] = [")
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

out.append("export const phase3RiskToleranceResults: Phase3RiskToleranceResult[] = [")
for tn in range(1, 7):
    r = RESULTS[tn]
    meta = TYPE_META[tn]

    def ml(val: str) -> dict[str, str]:
        return {"ko": val, **{loc: "" for loc in LOCALES if loc != "ko"}}

    title_obj = {"ko": r["title_ko"], **{loc: f"{meta['title_en']} {meta['emoji']}" for loc in LOCALES if loc != "ko"}}
    domains = r["domains"]

    out.append("  {")
    out.append(f"    type: '{meta['type']}',")
    out.append(f"    emoji: '{meta['emoji']}',")
    out.append(f"    title: {fmt_locale_map(title_obj)},")
    out.append(f"    riskLevel: {fmt_locale_map(ml(r['risk_level']))},")
    out.append(f"    quote: {fmt_locale_map(ml(r['quote']))},")
    out.append(f"    description: {fmt_locale_map(ml(r['description']))},")
    out.append(f"    riskType: {fmt_locale_map(ml(r['risk_type']))},")
    out.append(f"    riskAcceptanceLevel: {fmt_locale_map(ml(r['risk_acceptance']))},")
    out.append(f"    financialDiagnosis: {fmt_locale_map(ml(domains.get('financial', '')))},")
    out.append(f"    socialDiagnosis: {fmt_locale_map(ml(domains.get('social', '')))},")
    out.append(f"    physicalDiagnosis: {fmt_locale_map(ml(domains.get('physical', '')))},")
    out.append(f"    careerDiagnosis: {fmt_locale_map(ml(domains.get('career', '')))},")
    out.append(f"    uncertaintyDiagnosis: {fmt_locale_map(ml(domains.get('uncertainty', '')))},")
    out.append(f"    strengths: {fmt_locale_map(ml(r['strengths']))},")
    out.append(f"    caution: {fmt_locale_map(ml(r['caution']))},")
    out.append(f"    investmentStyle: {fmt_locale_map(ml(r['investment']))},")
    out.append(f"    entrepreneurshipStyle: {fmt_locale_map(ml(r['entrepreneurship']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    oneLiner: {fmt_locale_map(ml(r['one_liner']))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
