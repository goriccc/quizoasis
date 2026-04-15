/** 내가 좋아하는 사람의 유형 분석 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 문항·결과는 JSON에서 7개 로케일 제공. */

import phase3IdealTypeDnaAnalysisQuestionsJson from './phase3IdealTypeDnaAnalysisQuestions.json';
import phase3IdealTypeDnaAnalysisResultsJson from './phase3IdealTypeDnaAnalysisResults.json';

export interface Phase3IdealTypeDnaAnalysisQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3IdealTypeDnaAnalysisResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  dnaTypeLabel: Record<string, string>;
  excitingPoint: Record<string, string>;
  commonGround: Record<string, string>;
  idealKeywords: Record<string, string>;
  flirtLine: Record<string, string>;
  detectionTip: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3IdealTypeDnaAnalysisResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3IdealTypeDnaAnalysisQuestions =
  phase3IdealTypeDnaAnalysisQuestionsJson as Phase3IdealTypeDnaAnalysisQuestion[];

export const phase3IdealTypeDnaAnalysisResults =
  phase3IdealTypeDnaAnalysisResultsJson as Phase3IdealTypeDnaAnalysisResult[];
