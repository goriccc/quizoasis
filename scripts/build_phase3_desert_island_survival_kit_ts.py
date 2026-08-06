"""Generate lib/phase3DesertIslandSurvivalKitData.ts with full 7-language content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
I18N_PATH = ROOT / "scripts" / "phase3_desert_island_survival_kit_i18n_data.py"
OUT_PATH = ROOT / "lib" / "phase3DesertIslandSurvivalKitData.ts"

spec = importlib.util.spec_from_file_location("phase3_desert_island_survival_kit_i18n_data", I18N_PATH)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(mod)

LOCALES = mod.LOCALES
ONELINER_HDR = mod.ONELINER_HDR
QUESTIONS = mod.QUESTIONS
RESULTS = mod.RESULTS

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
    parts.append("export const phase3DesertIslandSurvivalKitResults: Phase3DesertIslandSurvivalKitResult[] = [")

    for r in RESULTS:
        desc = build_description(r)
        parts.append("  {")
        parts.append(f"    type: '{r['type']}',")
        parts.append(f"    emoji: '{r['emoji']}',")
        parts.append(f"    title: {fmt_ml(r['title'])},")
        parts.append(f"    shortDescription: {fmt_ml(r['quote'])},")
        parts.append(f"    description: {fmt_ml(desc)},")
        parts.append(f"    empathyLevel: {fmt_ml(r['survival_style_type'])},")
        parts.append(f"    characteristics: {fmt_ml(r['survival_strategy'])},")
        parts.append(f"    goodMatch: {fmt_ml(r['island_says'])},")
        parts.append(f"    badMatch: {fmt_ml(r['survival_extra'])},")
        parts.append(f"    certificationPhrase: {fmt_ml(r['certification'])},")
        parts.append(f"    shareLine: {fmt_ml(r['share_line'])},")
        parts.append("  },")

    parts.append("];")
    parts.append("")

    OUT_PATH.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(QUESTIONS)} questions, {len(RESULTS)} results)")


if __name__ == "__main__":
    main()
