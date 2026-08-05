"""Generate lib/phase3FriendshipBalanceGameData.ts with full 7-language content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
I18N_PATH = ROOT / "scripts" / "phase3_friendship_balance_game_i18n_data.py"
OUT_PATH = ROOT / "lib" / "phase3FriendshipBalanceGameData.ts"

spec = importlib.util.spec_from_file_location("phase3_friendship_balance_game_i18n_data", I18N_PATH)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(mod)

LOCALES = mod.LOCALES
STRENGTH_HDR = mod.STRENGTH_HDR
ONELINER_HDR = mod.ONELINER_HDR
BEST_FRIEND_MATCH_HDR = mod.BEST_FRIEND_MATCH_HDR
QUESTIONS = mod.QUESTIONS
RESULTS = mod.RESULTS

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


def esc(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\r\n", "\n")
        .replace("\r", "\n")
        .replace("\n", "\\n")
    )


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def fmt_ml(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f'{indent}ko: "{esc(d["ko"])}",']
    for loc in LOCALES[1:]:
        lines.append(f'{indent}{loc_key(loc)}: "{esc(d[loc])}",')
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def build_description(r: dict) -> dict[str, str]:
    out: dict[str, str] = {}
    for loc in LOCALES:
        parts = [r["body"][loc]]
        if r.get("best_friend_match", {}).get(loc):
            parts.append(f"{BEST_FRIEND_MATCH_HDR[loc]}: {r['best_friend_match'][loc]}")
        if r["strengths"][loc]:
            parts.append(f"{STRENGTH_HDR[loc]}: {r['strengths'][loc]}")
        if r["one_liner"][loc]:
            parts.append(f"{ONELINER_HDR[loc]}: {r['one_liner'][loc]}")
        out[loc] = "\n\n".join(parts)
    return out


def main() -> None:
    parts: list[str] = [HEADER]

    for i, q in enumerate(QUESTIONS, 1):
        parts.append("  {")
        parts.append(f"    id: {i},")
        parts.append(f"    question: {fmt_ml(q['q'])},")
        parts.append("    options: [")
        parts.append(f"      opt({fmt_ml(q['A'], '        ')}, 0),")
        parts.append(f"      opt({fmt_ml(q['B'], '        ')}, 1),")
        parts.append("    ],")
        parts.append("  },")

    parts.append("];")
    parts.append("")
    parts.append("export const phase3FriendshipBalanceGameResults: Phase3FriendshipBalanceGameResult[] = [")

    for r in RESULTS:
        desc = build_description(r)
        parts.append("  {")
        parts.append(f"    type: '{r['type']}',")
        parts.append(f"    emoji: '{r['emoji']}',")
        parts.append(f"    title: {fmt_ml(r['title'])},")
        parts.append(f"    shortDescription: {fmt_ml(r['quote'])},")
        parts.append(f"    description: {fmt_ml(desc)},")
        parts.append(f"    empathyLevel: {fmt_ml(r['friendship_style_type'])},")
        parts.append(f"    characteristics: {fmt_ml(r['keywords'])},")
        parts.append(f"    goodMatch: {fmt_ml(r['friend_says'])},")
        parts.append(f"    badMatch: {fmt_ml(r['cautions'])},")
        parts.append(f"    certificationPhrase: {fmt_ml(r['certification'])},")
        parts.append(f"    shareLine: {fmt_ml(r['share_line'])},")
        parts.append("  },")

    parts.append("];")
    parts.append("")

    OUT_PATH.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")


if __name__ == "__main__":
    main()
