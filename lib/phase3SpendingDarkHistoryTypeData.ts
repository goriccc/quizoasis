/** 내 지갑을 위협하는 소비 흑역사 유형 — A=0, B=1, C=2, D=3 합산 → 6유형 (질문·선택지 셔플 시 option.score로 채점 유지) */

export type {
  Phase3SpendingDarkHistoryQuestion,
  Phase3SpendingDarkHistoryResult,
} from './phase3SpendingDarkHistoryTypes';

export { phase3SpendingDarkHistoryTypeQuestions } from './phase3SpendingDarkHistoryQuestionsData';
export { phase3SpendingDarkHistoryTypeResults } from './phase3SpendingDarkHistoryResultsData';

export function calculatePhase3SpendingDarkHistoryTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
