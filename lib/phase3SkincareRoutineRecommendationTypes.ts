export interface Phase3SkincareRoutineRecommendationQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3SkincareRoutineRecommendationResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  skinTypeDiagnosis: Record<string, string>;
  leadQuote: Record<string, string>;
  description: Record<string, string>;
  morningRoutine: Record<string, string>;
  eveningRoutine: Record<string, string>;
  keyIngredients: Record<string, string>;
  avoidIngredients: Record<string, string>;
  weeklySpecial: Record<string, string>;
  routineEssence: Record<string, string>;
  addTodayIngredient: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3SkincareRoutineRecommendationResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
