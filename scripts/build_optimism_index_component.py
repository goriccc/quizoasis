"""Build Phase3OptimismIndexTestClient from time perspective template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3TimePerspectiveTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3TimePerspective", "Phase3OptimismIndex"),
    ("phase3TimePerspective", "phase3OptimismIndex"),
    ("phase3TimePerspectiveTest", "phase3OptimismIndexTest"),
    ("timePerspectivePattern", "optimismIndex"),
    ("timePerspectiveType", "optimismType"),
    ("timeKeywords", "indexScore"),
    ("TimePerspective", "OptimismIndex"),
    ("phase3-time-perspective", "phase3-optimism-index"),
    ("freeTime: 0", "permanence: 0"),
    ("emotion: 0", "pervasiveness: 0"),
    ("decision: 0", "personalization: 0"),
    ("happiness: 0", "permanence: 0"),
    ("difficulty: 0", "pervasiveness: 0"),
    ("timeAttitude: 0", "personalization: 0"),
    ("domainScores.freeTime", "domainScores.permanence"),
    ("domainScores.emotion", "domainScores.pervasiveness"),
    ("domainScores.decision", "domainScores.personalization"),
    ("domainScores.happiness", "domainScores.permanence"),
    ("domainScores.difficulty", "domainScores.pervasiveness"),
    ("domainScores.timeAttitude", "domainScores.personalization"),
    ("{ key: 'freeTime'", "{ key: 'permanence'"),
    ("{ key: 'emotion'", "{ key: 'pervasiveness'"),
    ("{ key: 'decision'", "{ key: 'personalization'"),
    ("{ key: 'happiness'", "{ key: 'permanence'"),
    ("{ key: 'difficulty'", "{ key: 'pervasiveness'"),
    ("{ key: 'timeAttitude'", "{ key: 'personalization'"),
    ("freeTimeDomain", "permanenceDomain"),
    ("emotionDomain", "pervasivenessDomain"),
    ("decisionDomain", "personalizationDomain"),
    ("happinessDomain", "permanenceDomain"),
    ("difficultyDomain", "pervasivenessDomain"),
    ("timeAttitudeDomain", "personalizationDomain"),
    ("futureOrientedDomain", "strongestDomain"),
    ("pastNegativeDomain", "boostDomain"),
    ("from-blue-50 via-indigo-50 to-purple-50", "from-yellow-50 via-orange-50 to-amber-50"),
    ("from-blue-500 to-indigo-400", "from-amber-400 to-orange-400"),
    ("resultTimePerspective", "resultOptimismIndex"),
    ("resultCompetitiveType", "resultOptimismType"),
    ("resultCompetitiveKeywords", "resultIndexScore"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Keep only 3 domain rows
text = re.sub(
    r"\{ key: 'permanence', label: t\('ui\.permanenceDomain'\), score: domainScores\.permanence, max: 6 \},\s*"
    r"\{ key: 'pervasiveness', label: t\('ui\.pervasivenessDomain'\), score: domainScores\.pervasiveness, max: 6 \},\s*"
    r"\{ key: 'personalization', label: t\('ui\.personalizationDomain'\), score: domainScores\.personalization, max: 6 \},\s*"
    r"\{ key: 'permanence', label: t\('ui\.permanenceDomain'\), score: domainScores\.permanence, max: 6 \},\s*"
    r"\{ key: 'pervasiveness', label: t\('ui\.pervasivenessDomain'\), score: domainScores\.pervasiveness, max: 6 \},\s*"
    r"\{ key: 'personalization', label: t\('ui\.personalizationDomain'\), score: domainScores\.personalization, max: 6 \},",
    "{ key: 'permanence', label: t('ui.permanenceDomain'), score: domainScores.permanence, max: 4 },\n"
    "      { key: 'pervasiveness', label: t('ui.pervasivenessDomain'), score: domainScores.pervasiveness, max: 4 },\n"
    "      { key: 'personalization', label: t('ui.personalizationDomain'), score: domainScores.personalization, max: 4 },",
    text,
)

text = text.replace(
    "calculatePhase3OptimismIndexDomainScores(answersArray);\n      setDomainScores(scores);",
    "calculatePhase3OptimismIndexDomainScores(answersArray);\n      setDomainScores(scores);",
)

# Add seligman3P and tryNow variables after resultCautions
text = text.replace(
    "const resultCautions = result.cautions[locale as keyof typeof result.cautions] || result.cautions.ko;\n    const resultCertification =",
    "const resultCautions = result.cautions[locale as keyof typeof result.cautions] || result.cautions.ko;\n"
    "    const resultSeligman3P = result.seligman3P[locale as keyof typeof result.seligman3P] || result.seligman3P.ko;\n"
    "    const resultTryNow = result.tryNow[locale as keyof typeof result.tryNow] || result.tryNow.ko;\n"
    "    const resultCertification =",
)

# Replace second grid column - indexScore instead of keywords emoji
text = text.replace("🔑 {t('ui.indexScore')}", "📈 {t('ui.indexScore')}")

# Add seligman3P block after index type grid
seligman_block = """
            {resultSeligman3P && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🧠 {t('ui.seligman3PTitle')}
                </h3>
                <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside pl-[2ch]">
                  {resultSeligman3P.split('\\n').map((item, idx) => (
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
    seligman_block + "\n            <div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">\n              <h3 className=\"text-base font-bold text-gray-800 mb-3 text-left\">\n                📊 {t('ui.domainAnalysisTitle')}",
)

# Add tryNow block before certification
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

text = text.replace(
    "{result.type === 'Type1' ? '💭' : '⭐'} {result.type === 'Type1' ? t('ui.innerSideTitle') : t('ui.strengthsTitle')}",
    "{result.type === 'Type1' || result.type === 'Type2' ? '💭' : '⭐'} {result.type === 'Type1' || result.type === 'Type2' ? t('ui.paradoxStrengthTitle') : t('ui.strengthsTitle')}",
)

text = text.replace(
    "{result.type === 'Type1' ? '⚠️' : result.type === 'Type4' ? '✨' : '⚠️'} {result.type === 'Type1' ? t('ui.hardReasonTitle') : result.type === 'Type4' ? t('ui.patternTitle') : t('ui.cautionsTitle')}",
    "{result.type === 'Type1' ? '⚠️' : result.type === 'Type4' ? '✨' : '⚠️'} {result.type === 'Type1' ? t('ui.hardReasonTitle') : result.type === 'Type4' ? t('ui.enrichTitle') : t('ui.cautionsTitle')}",
)

text = text.replace("📊 {t('ui.optimismIndex')}", "📊 {t('ui.optimismSummary')}")

out = ROOT / "components/Phase3OptimismIndexTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
