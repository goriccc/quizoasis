"""Build Phase3LoveExpectationDiagnosisTestClient from Phase3ExamStudyTypeTestClient."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3ExamStudyTypeTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3ExamStudyTypeTestClient", "Phase3LoveExpectationDiagnosisTestClient"),
    ("Phase3ExamStudyTypeTestClientProps", "Phase3LoveExpectationDiagnosisTestClientProps"),
    ("Phase3ExamStudyTypeQuestion", "Phase3LoveExpectationDiagnosisQuestion"),
    ("Phase3ExamStudyTypeResult", "Phase3LoveExpectationDiagnosisResult"),
    ("calculatePhase3ExamStudyTypeResult", "calculatePhase3LoveExpectationDiagnosisResult"),
    ("calculatePhase3ExamStudyTypeDomainScores", "calculatePhase3LoveExpectationDiagnosisDomainScores"),
    ("phase3ExamStudyTypeQuestions", "phase3LoveExpectationDiagnosisQuestions"),
    ("phase3ExamStudyTypeResults", "phase3LoveExpectationDiagnosisResults"),
    ("phase3ExamStudyTypeTest", "phase3LoveExpectationDiagnosisTest"),
    ("phase3-exam-study-type", "phase3-love-expectation-diagnosis"),
    ("@/lib/phase3ExamStudyTypeData", "@/lib/phase3LoveExpectationDiagnosisData"),
    ("resultStudySummary", "resultExpectationSummary"),
    ("resultStudyType", "resultExpectationType"),
    ("resultStudyKeywords", "resultExpectationKeywords"),
    ("resultStudyTip", "resultGuidanceAdvice"),
    ("resultTypicalPhrase", "resultTypicalPhraseUnused"),
    ("result.studyTip", "result.guidanceAdvice"),
    ("result.typicalPhrase", "result.typicalPhraseUnused"),
    ("studySummary", "expectationSummary"),
    ("studyType", "expectationType"),
    ("studyKeywords", "expectationKeywords"),
    ("studyTip", "guidanceAdvice"),
    ("typicalPhrase", "typicalPhraseUnused"),
    ("startStyle: 0", "contactCommunication: 0"),
    ("focusEnv: 0", "timeMeeting: 0"),
    ("studyMethod: 0", "emotionalSupport: 0"),
    ("slumpCoping: 0", "understandingEmpathy: 0"),
    ("examEvePattern: 0", "futureDevotion: 0"),
    ("resultAcceptance: 0", "overallExpectLevel: 0"),
    ("domainScores.startStyle", "domainScores.contactCommunication"),
    ("domainScores.focusEnv", "domainScores.timeMeeting"),
    ("domainScores.studyMethod", "domainScores.emotionalSupport"),
    ("domainScores.slumpCoping", "domainScores.understandingEmpathy"),
    ("domainScores.examEvePattern", "domainScores.futureDevotion"),
    ("domainScores.resultAcceptance", "domainScores.overallExpectLevel"),
    ("{ key: 'startStyle'", "{ key: 'contactCommunication'"),
    ("{ key: 'focusEnv'", "{ key: 'timeMeeting'"),
    ("{ key: 'studyMethod'", "{ key: 'emotionalSupport'"),
    ("{ key: 'slumpCoping'", "{ key: 'understandingEmpathy'"),
    ("{ key: 'examEvePattern'", "{ key: 'futureDevotion'"),
    ("{ key: 'resultAcceptance'", "{ key: 'overallExpectLevel'"),
    ("startStyleDomain", "contactCommunicationDomain"),
    ("focusEnvDomain", "timeMeetingDomain"),
    ("studyMethodDomain", "emotionalSupportDomain"),
    ("slumpCopingDomain", "understandingEmpathyDomain"),
    ("examEvePatternDomain", "futureDevotionDomain"),
    ("resultAcceptanceDomain", "overallExpectLevelDomain"),
    ("t('ui.studySummary')", "t('ui.expectationSummary')"),
    ("t('ui.studyType')", "t('ui.expectationType')"),
    ("t('ui.studyKeywordsTitle')", "t('ui.expectationKeywordsTitle')"),
    ("t('ui.studyTipTitle')", "t('ui.guidanceAdviceTitle')"),
    ("t('ui.typicalPhraseTitle')", "t('ui.guidanceAdviceTitle')"),
    ("📚 {t('ui.studyTipTitle')}", "💗 {t('ui.guidanceAdviceTitle')}"),
    ("from-slate-50 via-amber-50 to-orange-50", "from-rose-50 via-pink-50 to-fuchsia-50"),
    ("from-slate-600 to-amber-500", "from-rose-500 to-pink-500"),
    ("from-slate-600 to-amber-600", "from-rose-500 to-pink-600"),
    ("hover:from-slate-700 hover:to-amber-700", "hover:from-rose-600 hover:to-pink-700"),
    ("text-amber-700", "text-rose-600"),
    ("from-amber-100 to-orange-100", "from-rose-100 to-pink-100"),
    ("text-amber-900", "text-rose-900"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Remove unused typicalPhrase section block
text = text.replace(
    """            {resultTypicalPhraseUnused && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  💭 {t('ui.guidanceAdviceTitle')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-center">
                  {resultTypicalPhraseUnused}
                </p>
              </div>
            )}

""",
    "",
)

out = ROOT / "components/Phase3LoveExpectationDiagnosisTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
