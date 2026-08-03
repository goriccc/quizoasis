"""Build Phase3RelationshipEnergyTestClient from change adaptability template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3ChangeAdaptabilityTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3ChangeAdaptabilityTestClient", "Phase3RelationshipEnergyTestClient"),
    ("Phase3ChangeAdaptabilityTestClientProps", "Phase3RelationshipEnergyTestClientProps"),
    ("Phase3ChangeAdaptabilityQuestion", "Phase3RelationshipEnergyQuestion"),
    ("Phase3ChangeAdaptabilityResult", "Phase3RelationshipEnergyResult"),
    ("calculatePhase3ChangeAdaptabilityResult", "calculatePhase3RelationshipEnergyResult"),
    ("calculatePhase3ChangeAdaptabilityDomainScores", "calculatePhase3RelationshipEnergyDomainScores"),
    ("phase3ChangeAdaptabilityQuestions", "phase3RelationshipEnergyQuestions"),
    ("phase3ChangeAdaptabilityResults", "phase3RelationshipEnergyResults"),
    ("phase3ChangeAdaptabilityTest", "phase3RelationshipEnergyTest"),
    ("phase3-change-adaptability", "phase3-relationship-energy"),
    ("@/lib/phase3ChangeAdaptabilityData", "@/lib/phase3RelationshipEnergyData"),
    ("resultChangeAdaptabilityType", "resultRelationshipEnergyType"),
    ("resultChangeAdaptability", "resultRelationshipEnergySummary"),
    ("changeAdaptabilityIndex", "relationshipEnergySummary"),
    ("changeAdaptabilityType", "relationshipEnergyType"),
    ("resultIndexScore", "resultRelationshipKeywords"),
    ("result.indexScore", "result.relationshipKeywords"),
    ("resultDomainDiagnosis", "REMOVE_DOMAIN_DIAGNOSIS_VAR"),
    ("resultTryNow", "resultRelationshipStyle"),
    ("result.domainDiagnosis", "result.relationshipStyle"),
    ("result.tryNow", "result.relationshipStyle"),
    ("domainDiagnosis", "relationshipStyle"),
    ("tryNow", "relationshipStyle"),
    ("cognitive: 0", "energyDirection: 0"),
    ("emotional: 0", "relationshipMaintenance: 0"),
    ("behavioral: 0", "togetherTimeReaction: 0"),
    ("uncertainty: 0", "relationshipFatigue: 0"),
    ("resilience: 0", "contactPattern: 0"),
    ("learning: 0", "relationshipPriority: 0"),
    ("domainScores.cognitive", "domainScores.energyDirection"),
    ("domainScores.emotional", "domainScores.relationshipMaintenance"),
    ("domainScores.behavioral", "domainScores.togetherTimeReaction"),
    ("domainScores.uncertainty", "domainScores.relationshipFatigue"),
    ("domainScores.resilience", "domainScores.contactPattern"),
    ("domainScores.learning", "domainScores.relationshipPriority"),
    ("{ key: 'cognitive'", "{ key: 'energyDirection'"),
    ("{ key: 'emotional'", "{ key: 'relationshipMaintenance'"),
    ("{ key: 'behavioral'", "{ key: 'togetherTimeReaction'"),
    ("{ key: 'uncertainty'", "{ key: 'relationshipFatigue'"),
    ("{ key: 'resilience'", "{ key: 'contactPattern'"),
    ("{ key: 'learning'", "{ key: 'relationshipPriority'"),
    ("cognitiveDomain", "energyDirectionDomain"),
    ("emotionalDomain", "relationshipMaintenanceDomain"),
    ("behavioralDomain", "togetherTimeReactionDomain"),
    ("uncertaintyDomain", "relationshipFatigueDomain"),
    ("resilienceDomain", "contactPatternDomain"),
    ("learningDomain", "relationshipPriorityDomain"),
    ("from-teal-50 via-cyan-50 to-emerald-50", "from-rose-50 via-orange-50 to-amber-50"),
    ("from-teal-500 to-cyan-400", "from-rose-500 to-orange-400"),
    ("from-teal-500 to-emerald-500", "from-rose-500 to-orange-500"),
    ("hover:from-teal-600 hover:to-emerald-600", "hover:from-rose-600 hover:to-orange-600"),
    ("📊 {t('ui.adaptabilitySummary')}", "📊 {t('ui.relationshipEnergySummary')}"),
    ("🎯 {t('ui.adaptabilityType')}", "🎯 {t('ui.relationshipEnergyType')}"),
    ("🔑 {t('ui.indexScore')}", "🔑 {t('ui.relationshipKeywordsTitle')}"),
    ("🧠 {t('ui.domainDiagnosisTitle')}", "💡 {t('ui.relationshipStyleTitle')}"),
    ("✅ {t('ui.tryNowTitle')}", "💡 {t('ui.relationshipStyleTitle')}"),
    ("t('ui.strongestDomain')", "t('ui.mostNaturalFlowDomain')"),
    ("t('ui.boostDomain')", "t('ui.mostEnergyDrainDomain')"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

text = text.replace(", max: 6 ", ", max: 2 ")

text = re.sub(
    r"\{resultDomainDiagnosisUnused && \([\s\S]*?\)\}\s*\n\s*\n",
    "",
    text,
    count=1,
)

text = text.replace(
    "{cautionsList.length > 0 && (",
    "{cautionsList.length > 0 && (",
)

out = ROOT / "components/Phase3RelationshipEnergyTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
