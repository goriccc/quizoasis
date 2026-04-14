/** 내 연애 레드플래그 찾기 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 문항·결과 텍스트는 JSON에서 7개 로케일 제공. */

import phase3LoveRedFlagFinderQuestionsJson from './phase3LoveRedFlagFinderQuestions.json';
import phase3LoveRedFlagFinderResultsJson from './phase3LoveRedFlagFinderResults.json';

export interface Phase3LoveRedFlagFinderQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export type Phase3LoveRedFlagSpotlightKind = 'hidden' | 'core';

export interface Phase3LoveRedFlagFinderResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  redFlagLevel: Record<string, string>;
  mainTraits: Record<string, string>;
  spotlightKind: Phase3LoveRedFlagSpotlightKind;
  spotlightDetail: Record<string, string>;
  prescription: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3LoveRedFlagFinderResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3LoveRedFlagFinderQuestions =
  phase3LoveRedFlagFinderQuestionsJson as Phase3LoveRedFlagFinderQuestion[];

export const phase3LoveRedFlagFinderResults =
  phase3LoveRedFlagFinderResultsJson as Phase3LoveRedFlagFinderResult[];
