"""Build Phase3TimePerspectiveTestClient from competitive DNA template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3CompetitiveDnaTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3CompetitiveDna", "Phase3TimePerspective"),
    ("phase3CompetitiveDna", "phase3TimePerspective"),
    ("phase3CompetitiveDnaTest", "phase3TimePerspectiveTest"),
    ("competitiveDna", "timePerspectivePattern"),
    ("competitiveType", "timePerspectiveType"),
    ("competitiveKeywords", "timeKeywords"),
    ("CompetitiveDna", "TimePerspective"),
    ("phase3-competitive-dna", "phase3-time-perspective"),
    ("reaction: 0", "freeTime: 0"),
    ("winLoss: 0", "emotion: 0"),
    ("motivation: 0", "decision: 0"),
    ("comparison: 0", "happiness: 0"),
    ("strategy: 0", "difficulty: 0"),
    ("lifeImpact: 0", "timeAttitude: 0"),
    ("domainScores.reaction", "domainScores.freeTime"),
    ("domainScores.winLoss", "domainScores.emotion"),
    ("domainScores.motivation", "domainScores.decision"),
    ("domainScores.comparison", "domainScores.happiness"),
    ("domainScores.strategy", "domainScores.difficulty"),
    ("domainScores.lifeImpact", "domainScores.timeAttitude"),
    ("{ key: 'reaction'", "{ key: 'freeTime'"),
    ("{ key: 'winLoss'", "{ key: 'emotion'"),
    ("{ key: 'motivation'", "{ key: 'decision'"),
    ("{ key: 'comparison'", "{ key: 'happiness'"),
    ("{ key: 'strategy'", "{ key: 'difficulty'"),
    ("{ key: 'lifeImpact'", "{ key: 'timeAttitude'"),
    ("reactionDomain", "freeTimeDomain"),
    ("winLossDomain", "emotionDomain"),
    ("motivationDomain", "decisionDomain"),
    ("comparisonDomain", "happinessDomain"),
    ("strategyDomain", "difficultyDomain"),
    ("lifeImpactDomain", "timeAttitudeDomain"),
    ("from-red-50 via-orange-50 to-yellow-50", "from-blue-50 via-indigo-50 to-purple-50"),
    ("from-red-500 to-orange-400", "from-blue-500 to-indigo-400"),
    ("resultBestEnvironments", "resultHappinessStrategy"),
    ("resultSportsGameTypes", "resultEnrichGuide"),
    ("bestEnvironments", "happinessStrategy"),
    ("sportsGameTypes", "enrichGuide"),
    ("environmentGuideTitle", "happinessStrategyTitle"),
    ("bestEnvironmentsTitle", "happinessStrategySubtitle"),
    ("sportsGameTypesTitle", "enrichGuideTitle"),
    ("경쟁심 DNA", "시간관 패턴"),
    ("strongestDomain", "futureOrientedDomain"),
    ("lowestDomain", "pastNegativeDomain"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

text = re.sub(
    r"\s*\{\(resultBestEnvironments \|\| resultSportsGameTypes\) && \(\s*<div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">.*?</div>\s*\)\}",
    "",
    text,
    flags=re.S,
)

happiness_block = """
            {(resultHappinessStrategy || resultEnrichGuide) && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🌈 {t('ui.happinessStrategyTitle')}
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  {resultHappinessStrategy && (
                    <div>
                      <p className="font-semibold mb-1">{t('ui.happinessStrategySubtitle')}</p>
                      <ul className="list-disc list-inside pl-[2ch] leading-relaxed">
                        {resultHappinessStrategy.split('\\n').map((item, idx) => (
                          item.trim() ? (
                            <li key={idx} className="mb-1">{item.trim()}</li>
                          ) : null
                        ))}
                      </ul>
                    </div>
                  )}
                  {resultEnrichGuide && (
                    <div>
                      <p className="font-semibold mb-1">{t('ui.enrichGuideTitle')}</p>
                      <p className="leading-relaxed whitespace-pre-line">{resultEnrichGuide}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
"""

insert_marker = "{cautionsList.length > 0 && ("
idx = text.find(insert_marker)
if idx == -1:
    raise SystemExit("insert marker not found")
end_idx = text.find("{isType6 && resultCertification", idx)
if end_idx == -1:
    raise SystemExit("certification marker not found")
text = text[:end_idx] + happiness_block + "\n            " + text[end_idx:]

text = text.replace(
    "const resultBestEnvironments =\n      result.bestEnvironments[locale as keyof typeof result.bestEnvironments] || result.bestEnvironments.ko;\n    const resultSportsGameTypes =\n      result.sportsGameTypes[locale as keyof typeof result.sportsGameTypes] || result.sportsGameTypes.ko;",
    "const resultHappinessStrategy =\n      result.happinessStrategy[locale as keyof typeof result.happinessStrategy] || result.happinessStrategy.ko;\n    const resultEnrichGuide =\n      result.enrichGuide[locale as keyof typeof result.enrichGuide] || result.enrichGuide.ko;",
)

text = text.replace(
    "{result.type === 'Type3' ? '✨' : '⚠️'} {result.type === 'Type3' ? t('ui.characteristicsTitle') : t('ui.cautionsTitle')}",
    "{result.type === 'Type1' ? '💭' : result.type === 'Type4' ? '✨' : '⚠️'} {result.type === 'Type1' ? t('ui.innerSideTitle') : result.type === 'Type4' ? t('ui.patternTitle') : t('ui.cautionsTitle')}",
)

text = text.replace(
    "⭐ {t('ui.strengthsTitle')}",
    "{result.type === 'Type1' ? '💭' : '⭐'} {result.type === 'Type1' ? t('ui.hardReasonTitle') : t('ui.strengthsTitle')}",
)

out = ROOT / "components/Phase3TimePerspectiveTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
