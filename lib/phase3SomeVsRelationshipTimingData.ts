/** 썸 vs 연애 결정 타이밍 진단 — A=0, B=1, C=2, D=3. 총점으로 유형 산출. 문항·결과 다국어: *.i18n.json */

import questionsJson from './phase3SomeVsRelationshipTimingQuestions.i18n.json';
import resultsJson from './phase3SomeVsRelationshipTimingResults.i18n.json';

export type Phase3SomeVsLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3SomeVsRelationshipTimingQuestion {
  id: number;
  question: Record<Phase3SomeVsLocaleKey, string>;
  options: { text: Record<Phase3SomeVsLocaleKey, string>; score: number }[];
}

export interface Phase3SomeVsRelationshipTimingResult {
  type: string;
  emoji: string;
  title: Record<Phase3SomeVsLocaleKey, string>;
  shortDescription: Record<Phase3SomeVsLocaleKey, string>;
  quote: Record<Phase3SomeVsLocaleKey, string>;
  description: Record<Phase3SomeVsLocaleKey, string>;
  signalStrength: Record<Phase3SomeVsLocaleKey, string>;
  relationshipTemperature: Record<Phase3SomeVsLocaleKey, string>;
  primaryLabel: Record<Phase3SomeVsLocaleKey, string>;
  primaryValue: Record<Phase3SomeVsLocaleKey, string>;
  secondaryLabel: Record<Phase3SomeVsLocaleKey, string>;
  secondaryValue: Record<Phase3SomeVsLocaleKey, string>;
  listLabel: Record<Phase3SomeVsLocaleKey, string>;
  listLines: Record<Phase3SomeVsLocaleKey, string>;
  cautionLabel: Record<Phase3SomeVsLocaleKey, string>;
  cautionValue: Record<Phase3SomeVsLocaleKey, string>;
  oneLineDiagnosis: Record<Phase3SomeVsLocaleKey, string>;
}

type QuestionJson = (typeof questionsJson)[number];
type ResultJson = (typeof resultsJson)[number];

export const phase3SomeVsRelationshipTimingQuestions: Phase3SomeVsRelationshipTimingQuestion[] = (
  questionsJson as QuestionJson[]
).map((q, index) => ({
  id: index + 1,
  question: q.question as Record<Phase3SomeVsLocaleKey, string>,
  options: q.options.map((o) => ({
    text: o.text as Record<Phase3SomeVsLocaleKey, string>,
    score: o.score,
  })),
}));

export const phase3SomeVsRelationshipTimingResults: Phase3SomeVsRelationshipTimingResult[] = (
  resultsJson as ResultJson[]
).map((r) => ({
  type: r.type,
  emoji: r.emoji,
  title: r.title as Record<Phase3SomeVsLocaleKey, string>,
  shortDescription: r.shortDescription as Record<Phase3SomeVsLocaleKey, string>,
  quote: r.quote as Record<Phase3SomeVsLocaleKey, string>,
  description: r.description as Record<Phase3SomeVsLocaleKey, string>,
  signalStrength: r.signalStrength as Record<Phase3SomeVsLocaleKey, string>,
  relationshipTemperature: r.relationshipTemperature as Record<Phase3SomeVsLocaleKey, string>,
  primaryLabel: r.primaryLabel as Record<Phase3SomeVsLocaleKey, string>,
  primaryValue: r.primaryValue as Record<Phase3SomeVsLocaleKey, string>,
  secondaryLabel: r.secondaryLabel as Record<Phase3SomeVsLocaleKey, string>,
  secondaryValue: r.secondaryValue as Record<Phase3SomeVsLocaleKey, string>,
  listLabel: r.listLabel as Record<Phase3SomeVsLocaleKey, string>,
  listLines: r.listLines as Record<Phase3SomeVsLocaleKey, string>,
  cautionLabel: r.cautionLabel as Record<Phase3SomeVsLocaleKey, string>,
  cautionValue: r.cautionValue as Record<Phase3SomeVsLocaleKey, string>,
  oneLineDiagnosis: r.oneLineDiagnosis as Record<Phase3SomeVsLocaleKey, string>,
}));

export function calculatePhase3SomeVsRelationshipTimingResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
