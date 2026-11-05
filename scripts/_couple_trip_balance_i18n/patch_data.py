# -*- coding: utf-8 -*-
"""Patch phase3CoupleTripBalanceGameData.ts to wire withForeign + i18n."""
from pathlib import Path

root = Path(__file__).resolve().parents[2]
path = root / "lib" / "phase3CoupleTripBalanceGameData.ts"
text = path.read_text(encoding="utf-8")

header = '''/**
 * 밸런스 게임 — 커플 여행 극한편
 * slug: phase3-couple-trip-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 * 축A: plan(계획) / improv(즉흥) · 축B: rest(휴식) / active(활동)
 */

import {
  PHASE3_COUPLE_TRIP_BALANCE_I18N,
  type Phase3CoupleTripBalanceForeignLocale,
  type Phase3CoupleTripBalanceResultText,
} from './phase3CoupleTripBalanceGameI18n';

export type Phase3CoupleTripBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3CoupleTripBalanceText = Record<Phase3CoupleTripBalanceLocaleKey, string>;
export type Phase3CoupleTripPolar = 'plan' | 'improv' | 'rest' | 'active' | 'stat';

function L(ko: string): Phase3CoupleTripBalanceText {
  return { ko, en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' };
}

const FOREIGN_LOCALES = Object.keys(PHASE3_COUPLE_TRIP_BALANCE_I18N) as Phase3CoupleTripBalanceForeignLocale[];

function withForeign(
  ko: string,
  pick: (loc: Phase3CoupleTripBalanceForeignLocale) => string,
): Phase3CoupleTripBalanceText {
  const t = L(ko);
  for (const loc of FOREIGN_LOCALES) t[loc] = pick(loc);
  return t;
}

function opt(
  texts: Phase3CoupleTripBalanceText,
  polar: Phase3CoupleTripPolar,
): { text: Phase3CoupleTripBalanceText; polar: Phase3CoupleTripPolar } {
  return { text: texts, polar };
}
'''

# Replace from file start through opt() function
import re
text2 = re.sub(
    r"(?s)^/\*\*.*?^function opt\([\s\S]*?\n\}\n",
    header,
    text,
    count=1,
)

# Replace META
meta = '''export const PHASE3_COUPLE_TRIP_BALANCE_META = {
  title: withForeign(
    '밸런스 게임 — 커플 여행 극한편',
    (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].meta.title,
  ),
  description: withForeign(
    '여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인. 12라운드 극한 선택으로 나의 커플 여행 스타일을 알려드립니다.',
    (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].meta.description,
  ),
  tags: {
    ko: ['밸런스게임', '커플여행', '양자택일', '연애테스트'],
    en: PHASE3_COUPLE_TRIP_BALANCE_I18N.en.meta.tags,
    ja: PHASE3_COUPLE_TRIP_BALANCE_I18N.ja.meta.tags,
    'zh-CN': PHASE3_COUPLE_TRIP_BALANCE_I18N['zh-CN'].meta.tags,
    'zh-TW': PHASE3_COUPLE_TRIP_BALANCE_I18N['zh-TW'].meta.tags,
    vi: PHASE3_COUPLE_TRIP_BALANCE_I18N.vi.meta.tags,
    id: PHASE3_COUPLE_TRIP_BALANCE_I18N.id.meta.tags,
  },
};
'''
text2 = re.sub(
    r"export const PHASE3_COUPLE_TRIP_BALANCE_META = \{[\s\S]*?\n\};\n",
    meta,
    text2,
    count=1,
)

# Replace questions export
questions = '''export const phase3CoupleTripBalanceGameQuestions: Phase3CoupleTripBalanceGameQuestion[] =
  RAW_QUESTIONS.map((item, idx) => ({
    id: idx + 1,
    scored: item.scored,
    question: withForeign(item.q, (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].questions[idx].q),
    options: item.opts.map(([text, polar], oi) =>
      opt(
        withForeign(text, (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].questions[idx].opts[oi]),
        polar,
      ),
    ),
  }));
'''
text2 = re.sub(
    r"export const phase3CoupleTripBalanceGameQuestions: Phase3CoupleTripBalanceGameQuestion\[] =[\s\S]*?\}\)\);\n",
    questions,
    text2,
    count=1,
)

# Replace results: keep KO_RESULTS as const then map
# Find results array and wrap
old_results_start = "export const phase3CoupleTripBalanceGameResults: Phase3CoupleTripBalanceGameResult[] = ["
if old_results_start not in text2:
    raise SystemExit("results export not found")

text2 = text2.replace(
    old_results_start,
    "const KO_RESULTS: Phase3CoupleTripBalanceGameResult[] = [",
    1,
)

footer = '''
const RESULT_TEXT_KEYS = [
  'title',
  'shortDescription',
  'quote',
  'description',
  'typeLabel',
  'characteristics',
  'livingStyle',
  'strengths',
  'caution',
  'goodMatch',
  'tips',
  'oneLiner',
  'shareLine',
] as const satisfies readonly (keyof Phase3CoupleTripBalanceResultText)[];

export const phase3CoupleTripBalanceGameResults: Phase3CoupleTripBalanceGameResult[] = KO_RESULTS.map(
  (r, ri) => {
    const merged: Phase3CoupleTripBalanceGameResult = { ...r };
    for (const key of RESULT_TEXT_KEYS) {
      merged[key] = withForeign(
        r[key].ko,
        (loc) => PHASE3_COUPLE_TRIP_BALANCE_I18N[loc].results[ri][key],
      );
    }
    return merged;
  },
);
'''

if not text2.rstrip().endswith("];"):
    # ensure ends with ];
    pass

# Append footer after last ]; of KO_RESULTS — file currently ends with results ];
# Remove trailing nothing and append
text2 = text2.rstrip() + "\n" + footer
path.write_text(text2 + "\n", encoding="utf-8")
print("patched", path)
