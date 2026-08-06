"""Build Phase3ExamStudyTypeTestClient from Phase3CuriosityTypeTestClient."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3CuriosityTypeTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3CuriosityTypeTestClient", "Phase3ExamStudyTypeTestClient"),
    ("Phase3CuriosityTypeTestClientProps", "Phase3ExamStudyTypeTestClientProps"),
    ("Phase3CuriosityTypeQuestion", "Phase3ExamStudyTypeQuestion"),
    ("Phase3CuriosityTypeResult", "Phase3ExamStudyTypeResult"),
    ("calculatePhase3CuriosityTypeResult", "calculatePhase3ExamStudyTypeResult"),
    ("calculatePhase3CuriosityTypeDomainScores", "calculatePhase3ExamStudyTypeDomainScores"),
    ("phase3CuriosityTypeQuestions", "phase3ExamStudyTypeQuestions"),
    ("phase3CuriosityTypeResults", "phase3ExamStudyTypeResults"),
    ("phase3CuriosityTypeTest", "phase3ExamStudyTypeTest"),
    ("phase3-curiosity-type", "phase3-exam-study-type"),
    ("@/lib/phase3CuriosityTypeData", "@/lib/phase3ExamStudyTypeData"),
    ("resultCuriositySummary", "resultStudySummary"),
    ("resultCuriosityType", "resultStudyType"),
    ("resultExploreKeywords", "resultStudyKeywords"),
    ("result.contentRecommend", "result.studyTip"),
    ("result.growCuriosity", "result.typicalPhrase"),
    ("curiositySummary", "studySummary"),
    ("curiosityType", "studyType"),
    ("exploreKeywords", "studyKeywords"),
    ("contentRecommend", "studyTip"),
    ("growCuriosity", "typicalPhrase"),
    ("interestScope: 0", "startStyle: 0"),
    ("exploreMethod: 0", "focusEnv: 0"),
    ("questionTendency: 0", "studyMethod: 0"),
    ("learningPattern: 0", "slumpCoping: 0"),
    ("interestTrigger: 0", "examEvePattern: 0"),
    ("curiosityPersistence: 0", "resultAcceptance: 0"),
    ("domainScores.interestScope", "domainScores.startStyle"),
    ("domainScores.exploreMethod", "domainScores.focusEnv"),
    ("domainScores.questionTendency", "domainScores.studyMethod"),
    ("domainScores.learningPattern", "domainScores.slumpCoping"),
    ("domainScores.interestTrigger", "domainScores.examEvePattern"),
    ("domainScores.curiosityPersistence", "domainScores.resultAcceptance"),
    ("{ key: 'interestScope'", "{ key: 'startStyle'"),
    ("{ key: 'exploreMethod'", "{ key: 'focusEnv'"),
    ("{ key: 'questionTendency'", "{ key: 'studyMethod'"),
    ("{ key: 'learningPattern'", "{ key: 'slumpCoping'"),
    ("{ key: 'interestTrigger'", "{ key: 'examEvePattern'"),
    ("{ key: 'curiosityPersistence'", "{ key: 'resultAcceptance'"),
    ("interestScopeDomain", "startStyleDomain"),
    ("exploreMethodDomain", "focusEnvDomain"),
    ("questionTendencyDomain", "studyMethodDomain"),
    ("learningPatternDomain", "slumpCopingDomain"),
    ("interestTriggerDomain", "examEvePatternDomain"),
    ("curiosityPersistenceDomain", "resultAcceptanceDomain"),
    ("t('ui.curiositySummary')", "t('ui.studySummary')"),
    ("t('ui.curiosityType')", "t('ui.studyType')"),
    ("t('ui.exploreKeywordsTitle')", "t('ui.studyKeywordsTitle')"),
    ("t('ui.contentRecommendTitle')", "t('ui.studyTipTitle')"),
    ("t('ui.growCuriosityTitle')", "t('ui.typicalPhraseTitle')"),
    ("t('ui.strongestDomain')", "t('ui.strongestDomain')"),
    ("t('ui.boostDomain')", "t('ui.boostDomain')"),
    ("from-indigo-50 via-purple-50 to-fuchsia-50", "from-slate-50 via-amber-50 to-orange-50"),
    ("from-indigo-500 to-purple-400", "from-slate-600 to-amber-500"),
    ("from-indigo-500 to-purple-500", "from-slate-600 to-amber-600"),
    ("hover:from-indigo-600 hover:to-purple-600", "hover:from-slate-700 hover:to-amber-700"),
    ("text-indigo-600", "text-amber-700"),
    ("from-indigo-100 to-purple-100", "from-amber-100 to-orange-100"),
    ("text-indigo-800", "text-amber-900"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

out = ROOT / "components/Phase3ExamStudyTypeTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
