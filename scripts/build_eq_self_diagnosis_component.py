"""Build Phase3EqSelfDiagnosisTestClient from change adaptability template."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3ChangeAdaptabilityTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3ChangeAdaptability", "Phase3EqSelfDiagnosis"),
    ("phase3ChangeAdaptability", "phase3EqSelfDiagnosis"),
    ("phase3ChangeAdaptabilityTest", "phase3EqSelfDiagnosisTest"),
    ("changeAdaptabilityIndex", "eqLevel"),
    ("changeAdaptabilityType", "eqType"),
    ("domainDiagnosis", "fiveElementsAnalysis"),
    ("ChangeAdaptability", "EqSelfDiagnosis"),
    ("phase3-change-adaptability", "phase3-eq-self-diagnosis"),
    ("cognitive: 0", "selfAwareness: 0"),
    ("emotional: 0", "selfRegulation: 0"),
    ("behavioral: 0", "motivation: 0"),
    ("uncertainty: 0", "empathy: 0"),
    ("resilience: 0", "socialSkills: 0"),
    ("learning: 0,\n    total: 0", "total: 0"),
    ("domainScores.cognitive", "domainScores.selfAwareness"),
    ("domainScores.emotional", "domainScores.selfRegulation"),
    ("domainScores.behavioral", "domainScores.motivation"),
    ("domainScores.uncertainty", "domainScores.empathy"),
    ("domainScores.resilience", "domainScores.socialSkills"),
    ("{ key: 'cognitive'", "{ key: 'selfAwareness'"),
    ("{ key: 'emotional'", "{ key: 'selfRegulation'"),
    ("{ key: 'behavioral'", "{ key: 'motivation'"),
    ("{ key: 'uncertainty'", "{ key: 'empathy'"),
    ("{ key: 'resilience'", "{ key: 'socialSkills'"),
    ("cognitiveDomain", "selfAwarenessDomain"),
    ("emotionalDomain", "selfRegulationDomain"),
    ("behavioralDomain", "motivationDomain"),
    ("uncertaintyDomain", "empathyDomain"),
    ("resilienceDomain", "socialSkillsDomain"),
    ("learningDomain", "socialSkillsDomain"),
    ("from-teal-50 via-cyan-50 to-emerald-50", "from-purple-50 via-violet-50 to-indigo-50"),
    ("from-teal-500 to-cyan-400", "from-purple-500 to-violet-400"),
    ("from-teal-500 to-emerald-500", "from-purple-500 to-violet-500"),
    ("hover:from-teal-600 hover:to-emerald-600", "hover:from-purple-600 hover:to-violet-600"),
    ("resultChangeAdaptability", "resultEqLevel"),
    ("resultChangeAdaptabilityType", "resultEqType"),
    ("📊 {t('ui.adaptabilitySummary')}", "📊 {t('ui.eqSummary')}"),
    ("🎯 {t('ui.adaptabilityType')}", "🎯 {t('ui.eqType')}"),
    ("🧠 {t('ui.domainDiagnosisTitle')}", "🧠 {t('ui.fiveElementsAnalysisTitle')}"),
    ("resultDomainDiagnosis", "resultFiveElementsAnalysis"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Fix domain state — remove duplicate total/learning from broken replace
text = re.sub(
    r"const \[domainScores, setDomainScores\] = useState\(\{\s*"
    r"selfAwareness: 0,\s*"
    r"selfRegulation: 0,\s*"
    r"motivation: 0,\s*"
    r"empathy: 0,\s*"
    r"socialSkills: 0,\s*"
    r"total: 0,\s*"
    r"total: 0,\s*"
    r"\}\);",
    """const [domainScores, setDomainScores] = useState({
    selfAwareness: 0,
    selfRegulation: 0,
    motivation: 0,
    empathy: 0,
    socialSkills: 0,
    total: 0,
  });""",
    text,
)

# Remove indexScore block
text = re.sub(
    r"\s*const resultIndexScore =\s*"
    r"result\.indexScore\[locale as keyof typeof result\.indexScore\] \|\| result\.indexScore\.ko;\n",
    "",
    text,
)

text = re.sub(
    r"\s*<div className=\"bg-white rounded-xl shadow-lg p-4\">\s*"
    r"<h3 className=\"text-base font-bold text-gray-800 mb-2 text-left\">\s*"
    r"🔑 \{t\('ui\.indexScore'\)\}\s*"
    r"</h3>\s*"
    r"<p className=\"text-sm font-bold text-gray-700 leading-relaxed text-center\">\s*"
    r"\{resultIndexScore\}\s*"
    r"</p>\s*"
    r"</div>\s*",
    "",
    text,
    flags=re.S,
)

# Add masterTraits variable after resultFiveElementsAnalysis
text = text.replace(
    "const resultFiveElementsAnalysis =\n"
    "      result.fiveElementsAnalysis[locale as keyof typeof result.fiveElementsAnalysis] || result.fiveElementsAnalysis.ko;",
    "const resultFiveElementsAnalysis =\n"
    "      result.fiveElementsAnalysis[locale as keyof typeof result.fiveElementsAnalysis] || result.fiveElementsAnalysis.ko;\n"
    "    const resultMasterTraits =\n"
    "      result.masterTraits[locale as keyof typeof result.masterTraits] || result.masterTraits.ko;",
)

# Remove eqType grid (result screen shows eqSummary only)
text = re.sub(
    r"\s*const resultEqType =\s*"
    r"result\.eqType\[locale as keyof typeof result\.eqType\] \|\| result\.eqType\.ko;\n",
    "",
    text,
)
text = re.sub(
    r"\s*<div className=\"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3\">[\s\S]*?"
    r"🎯 \{t\('ui\.eqType'\)\}[\s\S]*?"
    r"</div>\s*",
    "\n",
    text,
    count=1,
)

# Fix domain max scores (5 domains: 6/6/6/9/9)
text = re.sub(
    r"const domainConfig = \[[\s\S]*?\];",
    """const domainConfig = [
      { key: 'selfAwareness', label: t('ui.selfAwarenessDomain'), score: domainScores.selfAwareness, max: 6 },
      { key: 'selfRegulation', label: t('ui.selfRegulationDomain'), score: domainScores.selfRegulation, max: 6 },
      { key: 'motivation', label: t('ui.motivationDomain'), score: domainScores.motivation, max: 6 },
      { key: 'empathy', label: t('ui.empathyDomain'), score: domainScores.empathy, max: 9 },
      { key: 'socialSkills', label: t('ui.socialSkillsDomain'), score: domainScores.socialSkills, max: 9 },
    ];""",
    text,
    count=1,
)

# Show cautions for all types when non-empty
text = text.replace(
    "{(result.type === 'Type5' || result.type === 'Type6') && cautionsList.length > 0 && (",
    "{cautionsList.length > 0 && (",
)

# Insert masterTraits section after cautions, before tryNow
text = text.replace(
    "{resultTryNow && (",
    "{resultMasterTraits && (\n"
    "              <div className=\"bg-white rounded-xl shadow-lg p-4 mb-3\">\n"
    "                <h3 className=\"text-base font-bold text-gray-800 mb-2 text-left\">\n"
    "                  👥 {t('ui.masterTraitsTitle')}\n"
    "                </h3>\n"
    "                <ul className=\"text-sm text-gray-700 leading-relaxed list-disc list-inside pl-[2ch]\">\n"
    "                  {resultMasterTraits.split('\\n').map((item, idx) => (\n"
    "                    item.trim() ? (\n"
    "                      <li key={idx} className=\"mb-1\">{item.trim()}</li>\n"
    "                    ) : null\n"
    "                  ))}\n"
    "                </ul>\n"
    "              </div>\n"
    "            )}\n\n"
    "            {resultTryNow && (",
)

out = ROOT / "components/Phase3EqSelfDiagnosisTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
