"""Build Phase3ChangeAdaptabilityTestClient from time perspective template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3TimePerspectiveTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3TimePerspective", "Phase3ChangeAdaptability"),
    ("phase3TimePerspective", "phase3ChangeAdaptability"),
    ("phase3TimePerspectiveTest", "phase3ChangeAdaptabilityTest"),
    ("timePerspectivePattern", "changeAdaptabilityIndex"),
    ("timePerspectiveType", "changeAdaptabilityType"),
    ("timeKeywords", "indexScore"),
    ("TimePerspective", "ChangeAdaptability"),
    ("phase3-time-perspective", "phase3-change-adaptability"),
    ("freeTime: 0", "cognitive: 0"),
    ("emotion: 0", "emotional: 0"),
    ("decision: 0", "behavioral: 0"),
    ("happiness: 0", "uncertainty: 0"),
    ("difficulty: 0", "resilience: 0"),
    ("timeAttitude: 0", "learning: 0"),
    ("domainScores.freeTime", "domainScores.cognitive"),
    ("domainScores.emotion", "domainScores.emotional"),
    ("domainScores.decision", "domainScores.behavioral"),
    ("domainScores.happiness", "domainScores.uncertainty"),
    ("domainScores.difficulty", "domainScores.resilience"),
    ("domainScores.timeAttitude", "domainScores.learning"),
    ("{ key: 'freeTime'", "{ key: 'cognitive'"),
    ("{ key: 'emotion'", "{ key: 'emotional'"),
    ("{ key: 'decision'", "{ key: 'behavioral'"),
    ("{ key: 'happiness'", "{ key: 'uncertainty'"),
    ("{ key: 'difficulty'", "{ key: 'resilience'"),
    ("{ key: 'timeAttitude'", "{ key: 'learning'"),
    ("freeTimeDomain", "cognitiveDomain"),
    ("emotionDomain", "emotionalDomain"),
    ("decisionDomain", "behavioralDomain"),
    ("happinessDomain", "uncertaintyDomain"),
    ("difficultyDomain", "resilienceDomain"),
    ("timeAttitudeDomain", "learningDomain"),
    ("futureOrientedDomain", "strongestDomain"),
    ("pastNegativeDomain", "boostDomain"),
    ("from-blue-50 via-indigo-50 to-purple-50", "from-teal-50 via-cyan-50 to-emerald-50"),
    ("from-blue-500 to-indigo-400", "from-teal-500 to-cyan-400"),
    ("from-blue-500 to-cyan-500", "from-teal-500 to-emerald-500"),
    ("hover:from-blue-600 hover:to-cyan-600", "hover:from-teal-600 hover:to-emerald-600"),
    ("resultTimePerspective", "resultChangeAdaptabilityIndex"),
    ("resultCompetitiveType", "resultChangeAdaptabilityType"),
    ("resultCompetitiveKeywords", "resultIndexScore"),
    ("📊 {t('ui.timePerspectivePattern')}", "📊 {t('ui.adaptabilitySummary')}"),
    ("🎯 {t('ui.timePerspectiveType')}", "🎯 {t('ui.adaptabilityType')}"),
    ("🔑 {t('ui.timeKeywords')}", "📈 {t('ui.indexScore')}"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Remove happinessStrategy / enrichGuide block from time perspective template
text = re.sub(
    r"\s*\{\(resultHappinessStrategy \|\| resultEnrichGuide\) && \(\s*<div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">.*?</div>\s*\)\}",
    "",
    text,
    flags=re.S,
)

text = text.replace(
    "const resultCautions = result.cautions[locale as keyof typeof result.cautions] || result.cautions.ko;\n    const resultCertification =",
    "const resultCautions = result.cautions[locale as keyof typeof result.cautions] || result.cautions.ko;\n"
    "    const resultDomainDiagnosis =\n"
    "      result.domainDiagnosis[locale as keyof typeof result.domainDiagnosis] || result.domainDiagnosis.ko;\n"
    "    const resultTryNow = result.tryNow[locale as keyof typeof result.tryNow] || result.tryNow.ko;\n"
    "    const resultCertification =",
)

domain_diagnosis_block = """
            {resultDomainDiagnosis && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🧠 {t('ui.domainDiagnosisTitle')}
                </h3>
                <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside pl-[2ch]">
                  {resultDomainDiagnosis.split('\\n').map((item, idx) => (
                    item.trim() ? (
                      <li key={idx} className="mb-1">{item.trim()}</li>
                    ) : null
                  ))}
                </ul>
              </div>
            )}

"""
text = text.replace(
    "            <div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">\n              <h3 className=\"text-base font-bold text-gray-800 mb-3 text-left\">\n                📊 {t('ui.domainAnalysisTitle')}",
    domain_diagnosis_block + "            <div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">\n              <h3 className=\"text-base font-bold text-gray-800 mb-3 text-left\">\n                📊 {t('ui.domainAnalysisTitle')}",
)

try_now_block = """
            {resultTryNow && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  ✅ {t('ui.tryNowTitle')}
                </h3>
                <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside pl-[2ch]">
                  {resultTryNow.split('\\n').map((item, idx) => (
                    item.trim() ? (
                      <li key={idx} className="mb-1">{item.trim()}</li>
                    ) : null
                  ))}
                </ul>
              </div>
            )}

"""
text = text.replace("{isType6 && resultCertification && (", try_now_block + "{isType6 && resultCertification && (")

# strengths always "이 유형이 가장 강한 상황"
text = text.replace(
    "{result.type === 'Type1' ? '💭' : '⭐'} {result.type === 'Type1' ? t('ui.innerSideTitle') : t('ui.strengthsTitle')}",
    "⭐ {t('ui.strengthsTitle')}",
)

# cautions for types 5-6 only
text = text.replace(
    "{cautionsList.length > 0 && (",
    "{(result.type === 'Type5' || result.type === 'Type6') && cautionsList.length > 0 && (",
)

text = text.replace(
    "{result.type === 'Type1' ? '⚠️' : result.type === 'Type4' ? '✨' : '⚠️'} {result.type === 'Type1' ? t('ui.hardReasonTitle') : result.type === 'Type4' ? t('ui.patternTitle') : t('ui.cautionsTitle')}",
    "⚠️ {t('ui.cautionsTitle')}",
)

# UI keys in messages use adaptabilitySummary/adaptabilityType (not changeAdaptability*)
text = text.replace("t('ui.changeAdaptabilityIndex')", "t('ui.adaptabilitySummary')")
text = text.replace("t('ui.changeAdaptabilityType')", "t('ui.adaptabilityType')")

out = ROOT / "components/Phase3ChangeAdaptabilityTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
