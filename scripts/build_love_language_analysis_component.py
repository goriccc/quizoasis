"""Build Phase3LoveLanguageAnalysisTestClient from Phase3LoveExpectationDiagnosisTestClient."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3LoveExpectationDiagnosisTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3LoveExpectationDiagnosisTestClient", "Phase3LoveLanguageAnalysisTestClient"),
    ("Phase3LoveExpectationDiagnosisTestClientProps", "Phase3LoveLanguageAnalysisTestClientProps"),
    ("Phase3LoveExpectationDiagnosisQuestion", "Phase3LoveLanguageAnalysisQuestion"),
    ("Phase3LoveExpectationDiagnosisResult", "Phase3LoveLanguageAnalysisResult"),
    ("calculatePhase3LoveExpectationDiagnosisResult", "calculatePhase3LoveLanguageAnalysisResult"),
    ("calculatePhase3LoveExpectationDiagnosisDomainScores", "calculatePhase3LoveLanguageAnalysisDomainScores"),
    ("phase3LoveExpectationDiagnosisQuestions", "phase3LoveLanguageAnalysisQuestions"),
    ("phase3LoveExpectationDiagnosisResults", "phase3LoveLanguageAnalysisResults"),
    ("phase3LoveExpectationDiagnosisTest", "phase3LoveLanguageAnalysisTest"),
    ("phase3-love-expectation-diagnosis", "phase3-love-language-analysis"),
    ("@/lib/phase3LoveExpectationDiagnosisData", "@/lib/phase3LoveLanguageAnalysisData"),
    ("resultExpectationSummary", "resultLanguageSummary"),
    ("resultExpectationType", "resultLanguageType"),
    ("resultExpectationKeywords", "resultLoveKeywords"),
    ("expectationSummary", "languageSummary"),
    ("expectationType", "languageType"),
    ("expectationKeywords", "loveKeywords"),
    ("t('ui.expectationSummary')", "t('ui.languageSummary')"),
    ("t('ui.expectationType')", "t('ui.languageType')"),
    ("t('ui.expectationKeywordsTitle')", "t('ui.loveKeywordsTitle')"),
    ("contactCommunication: 0", "wordsAffirmation: 0"),
    ("timeMeeting: 0", "qualityTime: 0"),
    ("emotionalSupport: 0", "receivingGifts: 0"),
    ("understandingEmpathy: 0", "actsOfService: 0"),
    ("futureDevotion: 0", "physicalTouch: 0"),
    ("overallExpectLevel: 0", "conflictDevotion: 0"),
    ("domainScores.contactCommunication", "domainScores.wordsAffirmation"),
    ("domainScores.timeMeeting", "domainScores.qualityTime"),
    ("domainScores.emotionalSupport", "domainScores.receivingGifts"),
    ("domainScores.understandingEmpathy", "domainScores.actsOfService"),
    ("domainScores.futureDevotion", "domainScores.physicalTouch"),
    ("domainScores.overallExpectLevel", "domainScores.conflictDevotion"),
    ("{ key: 'contactCommunication'", "{ key: 'wordsAffirmation'"),
    ("{ key: 'timeMeeting'", "{ key: 'qualityTime'"),
    ("{ key: 'emotionalSupport'", "{ key: 'receivingGifts'"),
    ("{ key: 'understandingEmpathy'", "{ key: 'actsOfService'"),
    ("{ key: 'futureDevotion'", "{ key: 'physicalTouch'"),
    ("{ key: 'overallExpectLevel'", "{ key: 'conflictDevotion'"),
    ("contactCommunicationDomain", "wordsAffirmationDomain"),
    ("timeMeetingDomain", "qualityTimeDomain"),
    ("emotionalSupportDomain", "receivingGiftsDomain"),
    ("understandingEmpathyDomain", "actsOfServiceDomain"),
    ("futureDevotionDomain", "physicalTouchDomain"),
    ("overallExpectLevelDomain", "conflictDevotionDomain"),
    ("from-rose-50 via-pink-50 to-fuchsia-50", "from-amber-50 via-rose-50 to-pink-50"),
    ("from-rose-500 to-pink-500", "from-amber-500 to-rose-500"),
    ("from-rose-500 to-pink-600", "from-amber-500 to-rose-600"),
    ("hover:from-rose-600 hover:to-pink-700", "hover:from-amber-600 hover:to-rose-700"),
    ("text-rose-600", "text-rose-700"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Replace guidanceAdvice block with love-language specific sections
old_guidance = """    const resultGuidanceAdvice = result.guidanceAdvice[locale as keyof typeof result.guidanceAdvice] || result.guidanceAdvice.ko;
    const resultCertification ="""

new_vars = """    const resultLovePattern = result.lovePattern[locale as keyof typeof result.lovePattern] || result.lovePattern.ko;
    const resultCompatiblePartner = result.compatiblePartner[locale as keyof typeof result.compatiblePartner] || result.compatiblePartner.ko;
    const resultHardMoment = result.hardMoment[locale as keyof typeof result.hardMoment] || result.hardMoment.ko;
    const resultExpressLoveMethod = result.expressLoveMethod[locale as keyof typeof result.expressLoveMethod] || result.expressLoveMethod.ko;
    const resultCertification ="""

text = text.replace(old_guidance, new_vars)

old_guidance_ui = """            {resultGuidanceAdvice && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  💗 {t('ui.guidanceAdviceTitle')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left whitespace-pre-line">
                  {resultGuidanceAdvice}
                </p>
              </div>
            )}

{isType6 && resultCertification && ("""

new_guidance_ui = """            {resultLovePattern && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  💕 {t('ui.lovePatternTitle')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left whitespace-pre-line">
                  {resultLovePattern}
                </p>
              </div>
            )}

            {resultCompatiblePartner && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  👫 {t('ui.compatiblePartnerTitle')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left whitespace-pre-line">
                  {resultCompatiblePartner}
                </p>
              </div>
            )}

            {resultHardMoment && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  😔 {t('ui.hardMomentTitle')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left whitespace-pre-line">
                  {resultHardMoment}
                </p>
              </div>
            )}

            {resultExpressLoveMethod && (
              <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  💗 {t('ui.expressLoveMethodTitle')}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left whitespace-pre-line">
                  {resultExpressLoveMethod}
                </p>
              </div>
            )}

{isType6 && resultCertification && ("""

text = text.replace(old_guidance_ui, new_guidance_ui)

out = ROOT / "components/Phase3LoveLanguageAnalysisTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
