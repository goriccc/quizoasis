"""Build Phase3ApprovalSeekingLevelTestClient from change adaptability template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3ChangeAdaptabilityTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3ChangeAdaptability", "Phase3ApprovalSeekingLevel"),
    ("phase3ChangeAdaptability", "phase3ApprovalSeekingLevel"),
    ("phase3ChangeAdaptabilityTest", "phase3ApprovalSeekingLevelTest"),
    ("changeAdaptabilityIndex", "desireLevel"),
    ("changeAdaptabilityType", "desireType"),
    ("indexScore", "evaluationImpact"),
    ("ChangeAdaptability", "ApprovalSeekingLevel"),
    ("phase3-change-adaptability", "phase3-approval-seeking-level"),
    ("cognitive: 0", "snsOnline: 0"),
    ("emotional: 0", "praiseCriticism: 0"),
    ("behavioral: 0", "othersGaze: 0"),
    ("uncertainty: 0", "relationship: 0"),
    ("resilience: 0", "selfDecision: 0"),
    ("learning: 0", "psychological: 0"),
    ("domainScores.cognitive", "domainScores.snsOnline"),
    ("domainScores.emotional", "domainScores.praiseCriticism"),
    ("domainScores.behavioral", "domainScores.othersGaze"),
    ("domainScores.uncertainty", "domainScores.relationship"),
    ("domainScores.resilience", "domainScores.selfDecision"),
    ("domainScores.learning", "domainScores.psychological"),
    ("{ key: 'cognitive'", "{ key: 'snsOnline'"),
    ("{ key: 'emotional'", "{ key: 'praiseCriticism'"),
    ("{ key: 'behavioral'", "{ key: 'othersGaze'"),
    ("{ key: 'uncertainty'", "{ key: 'relationship'"),
    ("{ key: 'resilience'", "{ key: 'selfDecision'"),
    ("{ key: 'learning'", "{ key: 'psychological'"),
    ("cognitiveDomain", "snsOnlineDomain"),
    ("emotionalDomain", "praiseCriticismDomain"),
    ("behavioralDomain", "othersGazeDomain"),
    ("uncertaintyDomain", "relationshipDomain"),
    ("resilienceDomain", "selfDecisionDomain"),
    ("learningDomain", "psychologicalDomain"),
    ("strongestDomain", "strongestDomain"),
    ("boostDomain", "mostIndependentDomain"),
    ("from-teal-50 via-cyan-50 to-emerald-50", "from-purple-50 via-pink-50 to-rose-50"),
    ("from-teal-500 to-cyan-400", "from-purple-500 to-pink-400"),
    ("from-teal-500 to-emerald-500", "from-purple-500 to-pink-500"),
    ("hover:from-teal-600 hover:to-emerald-600", "hover:from-purple-600 hover:to-pink-600"),
    ("resultChangeAdaptability", "resultDesireLevel"),
    ("resultChangeAdaptabilityType", "resultDesireType"),
    ("resultIndexScore", "resultEvaluationImpact"),
    ("📊 {t('ui.adaptabilitySummary')}", "📊 {t('ui.desireSummary')}"),
    ("🎯 {t('ui.adaptabilityType')}", "🎯 {t('ui.desireType')}"),
    ("🔑 {t('ui.indexScore')}", "💜 {t('ui.evaluationImpact')}"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Remove domainDiagnosis block and variable
text = re.sub(
    r"\s*const resultDomainDiagnosis =.*?result\.domainDiagnosis\.ko;\n",
    "",
    text,
    flags=re.S,
)
text = re.sub(
    r"\s*\{resultDomainDiagnosis && \(.*?</div>\s*\)\}\n",
    "",
    text,
    flags=re.S,
)

# Fix desireLevel t() — use desireSummary not desireLevel in UI keys
text = text.replace("t('ui.desireLevel')", "t('ui.desireSummary')")

# Dynamic cautions title from result.cautionsTitleKey
text = text.replace(
    "const cautionsList = resultCautions\n      ? resultCautions.split('\\n').map((s) => s.trim()).filter(Boolean)\n      : [];",
    "const cautionsList = resultCautions\n      ? resultCautions.split('\\n').map((s) => s.trim()).filter(Boolean)\n      : [];\n"
    "    const cautionsTitleKey = (result.cautionsTitleKey || 'cautionsTitle') as\n"
    "      'cautionsTitle' | 'characteristicsTitle' | 'patternTitle' | 'maintainTitle' | 'neededTitle' | 'helpGuideTitle';",
)

text = text.replace(
    "{(result.type === 'Type5' || result.type === 'Type6') && cautionsList.length > 0 && (",
    "{cautionsList.length > 0 && (",
)

text = text.replace(
    "⚠️ {t('ui.cautionsTitle')}",
    "⚠️ {t(`ui.${cautionsTitleKey}`)}",
)

# Type6 emoji handling for title display (🌊💧)
text = text.replace(
    "const bigEmoji = result.emoji;\n    const resultTitleDisplay =\n      bigEmoji && resultTitle.endsWith(bigEmoji) ? resultTitle.slice(0, -bigEmoji.length).trim() : resultTitle;",
    "const bigEmoji = result.emoji;\n    const resultTitleDisplay =\n      bigEmoji && resultTitle.endsWith(bigEmoji)\n        ? resultTitle.slice(0, -bigEmoji.length).trim()\n        : resultTitle;",
)

out = ROOT / "components/Phase3ApprovalSeekingLevelTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
