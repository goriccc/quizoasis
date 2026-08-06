"""Generate lib/phase3FoodBalanceGameData.ts with full 7-language content."""
from __future__ import annotations

import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
I18N_PATH = ROOT / "scripts" / "phase3_food_balance_game_i18n_data.py"
OUT_PATH = ROOT / "lib" / "phase3FoodBalanceGameData.ts"

spec = importlib.util.spec_from_file_location("phase3_food_balance_game_i18n_data", I18N_PATH)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(mod)

LOCALES = mod.LOCALES
ROUND_PREFIX = mod.ROUND_PREFIX
ROUNDS = mod.ROUNDS
RESULTS = mod.RESULTS

HEADER = """/** 밸런스 게임 — 음식 극한편 · phase3-food-balance-game · 12라운드 2지선다 · A=0(순) B=1(매) · 7개 로케일 */

export type Phase3FoodBalanceGameLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3FoodBalanceGameLocaleKey, string>): Record<Phase3FoodBalanceGameLocaleKey, string> {
  return t;
}

export interface Phase3FoodBalanceGameQuestion {
  id: number;
  question: Record<Phase3FoodBalanceGameLocaleKey, string>;
  options: { image: string; label: Record<Phase3FoodBalanceGameLocaleKey, string>; score: number }[];
}

export interface Phase3FoodBalanceGameResult {
  type: string;
  emoji: string;
  title: Record<Phase3FoodBalanceGameLocaleKey, string>;
  shortDescription: Record<Phase3FoodBalanceGameLocaleKey, string>;
  description: Record<Phase3FoodBalanceGameLocaleKey, string>;
  temperatureCelsius: number;
  accentColor: string;
  emotionTemperature: Record<Phase3FoodBalanceGameLocaleKey, string>;
  emotionColor: Record<Phase3FoodBalanceGameLocaleKey, string>;
  emotionKeywords: Record<Phase3FoodBalanceGameLocaleKey, string>;
  strengthAtTemp: Record<Phase3FoodBalanceGameLocaleKey, string>;
  charmAtTemp: Record<Phase3FoodBalanceGameLocaleKey, string>;
  comfortableSpace: Record<Phase3FoodBalanceGameLocaleKey, string>;
  colorCodes: Record<Phase3FoodBalanceGameLocaleKey, string>;
  certificationPhrase: Record<Phase3FoodBalanceGameLocaleKey, string>;
  oneLiner: Record<Phase3FoodBalanceGameLocaleKey, string>;
  shareLine: Record<Phase3FoodBalanceGameLocaleKey, string>;
}

export function calculatePhase3FoodBalanceGameResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

const IMG = (n: number, choice: 'a' | 'b') => 'p3_game_food_balance_q' + String(n) + choice + '.webp';

export const phase3FoodBalanceGameQuestions: Phase3FoodBalanceGameQuestion[] = [
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


def build_question(n: int, title: dict[str, str]) -> dict[str, str]:
    return {loc: ROUND_PREFIX(loc, n) + title[loc] for loc in LOCALES}


def main() -> None:
    parts: list[str] = [HEADER]

    for idx, r in enumerate(ROUNDS, 1):
        parts.append("  {")
        parts.append(f"    id: {idx},")
        parts.append(f"    question: {fmt_ml(build_question(idx, r['title']))},")
        parts.append("    options: [")
        parts.append(f"      {{ image: IMG({idx}, 'a'), label: {fmt_ml(r['aLabel'], '        ')}, score: 0 }},")
        parts.append(f"      {{ image: IMG({idx}, 'b'), label: {fmt_ml(r['bLabel'], '        ')}, score: 1 }},")
        parts.append("    ],")
        parts.append("  },")

    parts.append("];")
    parts.append("")
    parts.append("export const phase3FoodBalanceGameResults: Phase3FoodBalanceGameResult[] = [")

    for r in RESULTS:
        parts.append("  {")
        parts.append(f"    type: '{r['type']}',")
        parts.append(f"    emoji: '{r['emoji']}',")
        parts.append(f"    temperatureCelsius: {r['temperatureCelsius']},")
        parts.append(f"    accentColor: '{r['accentColor']}',")
        parts.append(f"    title: {fmt_ml(r['title'])},")
        parts.append(f"    shortDescription: {fmt_ml(r['shortDescription'])},")
        parts.append(f"    description: {fmt_ml(r['description'])},")
        parts.append(f"    emotionTemperature: {fmt_ml(r['emotionTemperature'])},")
        parts.append(f"    emotionColor: {fmt_ml(r['emotionColor'])},")
        parts.append(f"    emotionKeywords: {fmt_ml(r['emotionKeywords'])},")
        parts.append(f"    strengthAtTemp: {fmt_ml(r['strengthAtTemp'])},")
        parts.append(f"    charmAtTemp: {fmt_ml(r['charmAtTemp'])},")
        parts.append(f"    comfortableSpace: {fmt_ml(r['comfortableSpace'])},")
        parts.append(f"    colorCodes: {fmt_ml(r['colorCodes'])},")
        parts.append(f"    certificationPhrase: {fmt_ml(r['certificationPhrase'])},")
        parts.append(f"    oneLiner: {fmt_ml(r['oneLiner'])},")
        parts.append(f"    shareLine: {fmt_ml(r['share_line'])},")
        parts.append("  },")

    parts.append("];")
    parts.append("")

    OUT_PATH.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(ROUNDS)} questions, {len(RESULTS)} results)")


if __name__ == "__main__":
    main()
