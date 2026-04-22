export interface Phase3SpendingDarkHistoryQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3SpendingDarkHistoryResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  dangerLevel: Record<string, string>;
  representativeHistory: Record<string, string>;
  futureRisk: Record<string, string>;
  preventionBlock: Record<string, string>;
  todayTodo: Record<string, string>;
}
