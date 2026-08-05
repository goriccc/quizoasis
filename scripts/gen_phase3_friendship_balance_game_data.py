"""Generate lib/phase3FriendshipBalanceGameData.ts (Korean complete, other locales skeleton).

Source: scripts/_friendship_balance_game_doc_extract.txt
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_PATH = ROOT / "scripts" / "_friendship_balance_game_doc_extract.txt"
OUT_PATH = ROOT / "lib" / "phase3FriendshipBalanceGameData.ts"

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
OPTION_SCORES = {"A": 0, "B": 1}

TYPE_META = {
    1: {"type": "Type1", "emoji": "🧊", "title_en": "Cool Realist Friend Type", "score_band": "0~1"},
    2: {"type": "Type2", "emoji": "🔍", "title_en": "Reason-First Friend Type", "score_band": "2~3"},
    3: {"type": "Type3", "emoji": "⚖️", "title_en": "Balanced Friendship Type", "score_band": "4~6"},
    4: {"type": "Type4", "emoji": "🔥", "title_en": "Loyal Friend Type", "score_band": "7~9"},
    5: {"type": "Type5", "emoji": "💜", "title_en": "Ultra Loyal Friend Type", "score_band": "10~11"},
    6: {"type": "Type6", "emoji": "🌟", "title_en": "Friendship Legend Type", "score_band": "12"},
}

TYPE_EMOJIS = "🧊🔍⚖️🔥💜🌟"


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


def parse_doc() -> tuple[list[dict], dict[int, dict]]:
    text = DOC_PATH.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip() and not ln.startswith("SOURCE:")]

    questions: list[dict] = []
    i = 0
    while i < len(lines):
        m = re.match(r"^Round\s+(\d+)\.\s*$", lines[i], re.I)
        if not m:
            i += 1
            continue
        scenario_parts: list[str] = []
        i += 1
        opts: dict[str, str] = {}
        while i < len(lines):
            if re.match(r"^Round\s+\d+\.", lines[i], re.I):
                break
            if lines[i].startswith("4. 결과") or lines[i].startswith("Type "):
                break
            mopt = re.match(r"^([AB])\.\s*(.+)$", lines[i])
            if mopt:
                opts[mopt.group(1)] = mopt.group(2).strip()
                i += 1
                continue
            if not opts and not lines[i].startswith(("A.", "B.", "Round", "Type", "4.", "5.", "6.")):
                scenario_parts.append(lines[i])
            i += 1
        scenario = " ".join(scenario_parts).strip()
        missing = [k for k in ("A", "B") if k not in opts]
        if missing:
            raise SystemExit(f"Missing options {missing} for scenario: {scenario[:60]}")
        questions.append({"q": scenario, "A": opts["A"], "B": opts["B"]})

    if len(questions) != 12:
        raise SystemExit(f"Expected 12 questions, got {len(questions)}")

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

        summary_lines = [bln for bln in block if bln.startswith("우정 스타일:")]
        friendship_summary = summary_lines[0].split("우정 스타일:", 1)[1].strip() if summary_lines else ""
        friendship_style_type = summary_lines[1].split("우정 스타일:", 1)[1].strip() if len(summary_lines) > 1 else ""

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
                if bln.startswith(("우정 스타일:", "우정 키워드:")):
                    break
                if bln.strip():
                    desc_lines.append(bln.strip())
        description = " ".join(desc_lines).strip()

        keywords = find_line(block, "우정 키워드:")
        strengths = parse_list_block(
            block,
            "이 유형의 강점:",
            [
                "이 유형의 친구에게서 듣는 말:",
                "잘 맞는 친구 유형:",
                "이 유형의 주의점:",
                "한 줄 평:",
                "인증 문구:",
            ],
        )
        friend_says = parse_list_block(
            block,
            "이 유형의 친구에게서 듣는 말:",
            ["잘 맞는 친구 유형:", "이 유형의 주의점:", "한 줄 평:", "인증 문구:"],
        )
        best_friend_match = parse_list_block(
            block,
            "잘 맞는 친구 유형:",
            ["이 유형의 주의점:", "한 줄 평:", "인증 문구:"],
        )
        cautions = parse_list_block(
            block,
            "이 유형의 주의점:",
            ["이 유형의 친구에게서 듣는 말:", "한 줄 평:", "인증 문구:"],
        )
        one_liner = find_line(block, "한 줄 평:").strip('"')
        certification = find_line(block, "인증 문구:").strip('"')

        desc_sections = [description]
        if best_friend_match:
            desc_sections.append(f"잘 맞는 친구 유형: {best_friend_match}")
        if strengths:
            desc_sections.append(f"이 유형의 강점: {strengths}")
        if one_liner:
            desc_sections.append(f"한 줄 평: {one_liner}")

        results[type_num] = {
            "title_ko": title,
            "quote": quote,
            "friendship_summary": friendship_summary,
            "description": "\n\n".join(desc_sections),
            "friendship_style_type": friendship_style_type,
            "keywords": keywords,
            "friend_says": friend_says,
            "cautions": cautions,
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

HEADER = """/** 밸런스 게임 — 우정 극한편 · phase3-friendship-balance-game · 12라운드 2지선다 · A=0/B=1 · 7개 로케일 */

export type Phase3FriendshipBalanceGameLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3FriendshipBalanceGameLocaleKey, string>): Record<Phase3FriendshipBalanceGameLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3FriendshipBalanceGameLocaleKey, string>, score: number): { text: Record<Phase3FriendshipBalanceGameLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3FriendshipBalanceGameQuestion {
  id: number;
  question: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  options: { text: Record<Phase3FriendshipBalanceGameLocaleKey, string>; score: number }[];
}

export interface Phase3FriendshipBalanceGameResult {
  type: string;
  emoji: string;
  title: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  shortDescription: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  description: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  empathyLevel: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  characteristics: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  goodMatch: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  badMatch: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  certificationPhrase: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
  shareLine: Record<Phase3FriendshipBalanceGameLocaleKey, string>;
}

export function calculatePhase3FriendshipBalanceGameResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3FriendshipBalanceGameQuestions: Phase3FriendshipBalanceGameQuestion[] = [
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

out.append("export const phase3FriendshipBalanceGameResults: Phase3FriendshipBalanceGameResult[] = [")
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
    out.append(f"    empathyLevel: {fmt_locale_map(ml(r['friendship_style_type']))},")
    out.append(f"    characteristics: {fmt_locale_map(ml(r['keywords']))},")
    out.append(f"    goodMatch: {fmt_locale_map(ml(r['friend_says']))},")
    out.append(f"    badMatch: {fmt_locale_map(ml(r['cautions']))},")
    out.append(f"    certificationPhrase: {fmt_locale_map(ml(r.get('certification', '')))},")
    out.append(f"    shareLine: {fmt_locale_map(ml(r['share_line']))},")
    out.append("  },")
out.append("];")
out.append("")

OUT_PATH.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")
