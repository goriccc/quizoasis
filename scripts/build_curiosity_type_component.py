"""Build Phase3CuriosityTypeTestClient from change adaptability template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3ChangeAdaptabilityTestClient.tsx").read_text(encoding="utf-8")

# Order matters: longer / more specific replacements first.
replacements = [
    ("Phase3ChangeAdaptabilityTestClient", "Phase3CuriosityTypeTestClient"),
    ("Phase3ChangeAdaptabilityTestClientProps", "Phase3CuriosityTypeTestClientProps"),
    ("Phase3ChangeAdaptabilityQuestion", "Phase3CuriosityTypeQuestion"),
    ("Phase3ChangeAdaptabilityResult", "Phase3CuriosityTypeResult"),
    ("calculatePhase3ChangeAdaptabilityResult", "calculatePhase3CuriosityTypeResult"),
    ("calculatePhase3ChangeAdaptabilityDomainScores", "calculatePhase3CuriosityTypeDomainScores"),
    ("phase3ChangeAdaptabilityQuestions", "phase3CuriosityTypeQuestions"),
    ("phase3ChangeAdaptabilityResults", "phase3CuriosityTypeResults"),
    ("phase3ChangeAdaptabilityTest", "phase3CuriosityTypeTest"),
    ("phase3-change-adaptability", "phase3-curiosity-type"),
    ("@/lib/phase3ChangeAdaptabilityData", "@/lib/phase3CuriosityTypeData"),
    ("resultChangeAdaptabilityType", "resultCuriosityType"),
    ("resultChangeAdaptability", "resultCuriositySummary"),
    ("changeAdaptabilityIndex", "curiositySummary"),
    ("changeAdaptabilityType", "curiosityType"),
    ("resultIndexScore", "resultExploreKeywords"),
    ("result.indexScore", "result.exploreKeywords"),
    ("resultDomainDiagnosis", "resultExploreKeywordsUnused"),
    ("resultTryNow", "resultGrowCuriosityUnused"),
    ("domainDiagnosis", "contentRecommend"),
    ("tryNow", "growCuriosity"),
    ("cognitive: 0", "interestScope: 0"),
    ("emotional: 0", "exploreMethod: 0"),
    ("behavioral: 0", "questionTendency: 0"),
    ("uncertainty: 0", "learningPattern: 0"),
    ("resilience: 0", "interestTrigger: 0"),
    ("learning: 0", "curiosityPersistence: 0"),
    ("domainScores.cognitive", "domainScores.interestScope"),
    ("domainScores.emotional", "domainScores.exploreMethod"),
    ("domainScores.behavioral", "domainScores.questionTendency"),
    ("domainScores.uncertainty", "domainScores.learningPattern"),
    ("domainScores.resilience", "domainScores.interestTrigger"),
    ("domainScores.learningPattern", "domainScores.__learningPattern__"),
    ("domainScores.learning", "domainScores.curiosityPersistence"),
    ("domainScores.__learningPattern__", "domainScores.learningPattern"),
    ("{ key: 'cognitive'", "{ key: 'interestScope'"),
    ("{ key: 'emotional'", "{ key: 'exploreMethod'"),
    ("{ key: 'behavioral'", "{ key: 'questionTendency'"),
    ("{ key: 'uncertainty'", "{ key: 'learningPattern'"),
    ("{ key: 'resilience'", "{ key: 'interestTrigger'"),
    ("{ key: 'learning'", "{ key: 'curiosityPersistence'"),
    ("cognitiveDomain", "interestScopeDomain"),
    ("emotionalDomain", "exploreMethodDomain"),
    ("behavioralDomain", "questionTendencyDomain"),
    ("uncertaintyDomain", "learningPatternDomain"),
    ("resilienceDomain", "interestTriggerDomain"),
    ("learningDomain", "curiosityPersistenceDomain"),
    ("from-teal-50 via-cyan-50 to-emerald-50", "from-indigo-50 via-purple-50 to-fuchsia-50"),
    ("from-teal-500 to-cyan-400", "from-indigo-500 to-purple-400"),
    ("from-teal-500 to-emerald-500", "from-indigo-500 to-purple-500"),
    ("hover:from-teal-600 hover:to-emerald-600", "hover:from-indigo-600 hover:to-purple-600"),
    ("📊 {t('ui.adaptabilitySummary')}", "📊 {t('ui.curiositySummary')}"),
    ("🎯 {t('ui.adaptabilityType')}", "🎯 {t('ui.curiosityType')}"),
    ("🔑 {t('ui.indexScore')}", "🔑 {t('ui.exploreKeywordsTitle')}"),
    ("🧠 {t('ui.domainDiagnosisTitle')}", "📚 {t('ui.contentRecommendTitle')}"),
    ("✅ {t('ui.tryNowTitle')}", "🌱 {t('ui.growCuriosityTitle')}"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Show cautions for all types when non-empty
text = text.replace(
    "{(result.type === 'Type5' || result.type === 'Type6') && cautionsList.length > 0 && (",
    "{cautionsList.length > 0 && (",
)

# Remove domainDiagnosis and tryNow blocks from template
text = re.sub(
    r"\s*\{resultExploreKeywordsUnused && \(\s*"
    r"<div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">[\s\S]*?"
    r"</div>\s*"
    r"\)\}\s*",
    "\n",
    text,
    count=1,
)

text = re.sub(
    r"\s*\{resultGrowCuriosityUnused && \(\s*"
    r"<div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">[\s\S]*?"
    r"</div>\s*"
    r"\)\}\s*",
    "\n",
    text,
    count=1,
)

# Drop unused variable declarations from template
text = re.sub(
    r"\s*const resultExploreKeywordsUnused =[\s\S]*?;\n",
    "",
    text,
    count=1,
)
text = re.sub(
    r"\s*const resultGrowCuriosityUnused =[\s\S]*?;\n",
    "",
    text,
    count=1,
)

out = ROOT / "components/Phase3CuriosityTypeTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
