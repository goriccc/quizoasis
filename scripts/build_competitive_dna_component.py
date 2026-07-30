"""Build Phase3CompetitiveDnaTestClient from decision-making template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3DecisionMakingStyleTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3DecisionMakingStyle", "Phase3CompetitiveDna"),
    ("phase3DecisionMakingStyle", "phase3CompetitiveDna"),
    ("phase3DecisionMakingStyleTest", "phase3CompetitiveDnaTest"),
    ("decisionStyle", "competitiveDna"),
    ("decisionType", "competitiveType"),
    ("decisionKeywords", "competitiveKeywords"),
    ("DecisionMakingStyle", "CompetitiveDna"),
    ("phase3-decision-making-style", "phase3-competitive-dna"),
    ("start: 0", "reaction: 0"),
    ("info: 0", "winLoss: 0"),
    ("others: 0", "motivation: 0"),
    ("uncertainty: 0", "comparison: 0"),
    ("regret: 0", "strategy: 0"),
    ("speed: 0", "lifeImpact: 0"),
    ("domainScores.start", "domainScores.reaction"),
    ("domainScores.info", "domainScores.winLoss"),
    ("domainScores.others", "domainScores.motivation"),
    ("domainScores.uncertainty", "domainScores.comparison"),
    ("domainScores.regret", "domainScores.strategy"),
    ("domainScores.speed", "domainScores.lifeImpact"),
    ("{ key: 'start'", "{ key: 'reaction'"),
    ("{ key: 'info'", "{ key: 'winLoss'"),
    ("{ key: 'others'", "{ key: 'motivation'"),
    ("{ key: 'uncertainty'", "{ key: 'comparison'"),
    ("{ key: 'regret'", "{ key: 'strategy'"),
    ("{ key: 'speed'", "{ key: 'lifeImpact'"),
    ("startDomain", "reactionDomain"),
    ("infoDomain", "winLossDomain"),
    ("othersDomain", "motivationDomain"),
    ("uncertaintyDomain", "comparisonDomain"),
    ("regretDomain", "strategyDomain"),
    ("speedDomain", "lifeImpactDomain"),
    ("resultWeaknesses", "resultCautions"),
    ("weaknessesList", "cautionsList"),
    ("weaknessesTitle", "cautionsTitle"),
    ("result.weaknesses", "result.cautions"),
    ("bestSituations", "bestEnvironments"),
    ("riskySituations", "sportsGameTypes"),
    ("resultBestSituations", "resultBestEnvironments"),
    ("resultRiskySituations", "resultSportsGameTypes"),
    ("situationGuideTitle", "environmentGuideTitle"),
    ("bestSituationsTitle", "bestEnvironmentsTitle"),
    ("riskySituationsTitle", "sportsGameTypesTitle"),
    ("intuitiveDomain", "lowestDomain"),
    ("from-purple-50 via-pink-50 to-blue-50", "from-red-50 via-orange-50 to-yellow-50"),
    ("from-indigo-500 to-cyan-400", "from-red-500 to-orange-400"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

text = re.sub(
    r"\s*\{resultImprovement && \(\s*<div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">.*?</div>\s*\)\}",
    "",
    text,
    flags=re.S,
)
text = text.replace("const resultImprovement =\n      result.improvementDirection", "// removed improvement")
text = text.replace(
    "⚠️ {t('ui.cautionsTitle')}",
    "{result.type === 'Type3' ? '✨' : '⚠️'} {result.type === 'Type3' ? t('ui.characteristicsTitle') : t('ui.cautionsTitle')}",
)

out = ROOT / "components/Phase3CompetitiveDnaTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
