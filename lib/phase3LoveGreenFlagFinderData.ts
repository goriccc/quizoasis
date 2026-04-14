/** 나의 연애 그린플래그는? — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 문항·결과 텍스트는 JSON에서 7개 로케일 제공. */

import phase3LoveGreenFlagFinderQuestionsJson from './phase3LoveGreenFlagFinderQuestions.json';
import phase3LoveGreenFlagFinderResultsJson from './phase3LoveGreenFlagFinderResults.json';

export interface Phase3LoveGreenFlagFinderQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3LoveGreenFlagFinderResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  greenFlagTypeLabel: Record<string, string>;
  mainTraits: Record<string, string>;
  partnerReceives: Record<string, string>;
  brilliantTip: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3LoveGreenFlagFinderResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3LoveGreenFlagFinderQuestions =
  phase3LoveGreenFlagFinderQuestionsJson as Phase3LoveGreenFlagFinderQuestion[];

export const phase3LoveGreenFlagFinderResults =
  phase3LoveGreenFlagFinderResultsJson as Phase3LoveGreenFlagFinderResult[];
