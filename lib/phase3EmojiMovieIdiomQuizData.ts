/** 이모티콘 퀴즈 (영화 & 관용구) — phase3-emoji-movie-idiom-quiz · 정답 1점 / 오답 0점, 셔플 시 isCorrect로 채점 · 문항·결과 다국어: *.i18n.json */

import questionsJson from './phase3EmojiMovieIdiomQuizQuestions.i18n.json';
import resultsJson from './phase3EmojiMovieIdiomQuizResults.i18n.json';

export type Phase3EmojiMovieIdiomLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3EmojiMovieIdiomQuizOption {
  text: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3EmojiMovieIdiomQuizQuestion {
  id: number;
  badgeLine: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  emojiLine: string;
  prompt: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  options: Phase3EmojiMovieIdiomQuizOption[];
  correctExplanation: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  wrongTraps: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
}

export interface Phase3EmojiMovieIdiomQuizResult {
  type: string;
  emoji: string;
  title: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  shortDescription: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  description: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  scoreBand: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  levelLabel: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  honorTitle: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  oneLiner: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  nextStep: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
  /** SNS 한 줄 — {count} = 맞힌 개수 */
  shareLine: Record<Phase3EmojiMovieIdiomLocaleKey, string>;
}

type QuestionJson = (typeof questionsJson)[number];
type ResultJson = (typeof resultsJson)[number];

export const phase3EmojiMovieIdiomQuizQuestions: Phase3EmojiMovieIdiomQuizQuestion[] = (
  questionsJson as QuestionJson[]
).map((q) => ({
  id: q.id,
  badgeLine: q.badgeLine as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  emojiLine: q.emojiLine,
  prompt: q.prompt as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  options: q.options.map((o) => ({
    text: o.text as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
    isCorrect: o.isCorrect,
  })),
  correctExplanation: q.correctExplanation as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  wrongTraps: q.wrongTraps as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
}));

export const phase3EmojiMovieIdiomQuizResults: Phase3EmojiMovieIdiomQuizResult[] = (
  resultsJson as ResultJson[]
).map((r) => ({
  type: r.type,
  emoji: r.emoji,
  title: r.title as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  shortDescription: r.shortDescription as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  description: r.description as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  scoreBand: r.scoreBand as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  levelLabel: r.levelLabel as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  honorTitle: r.honorTitle as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  oneLiner: r.oneLiner as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  nextStep: r.nextStep as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
  shareLine: r.shareLine as Record<Phase3EmojiMovieIdiomLocaleKey, string>,
}));

export function calculatePhase3EmojiMovieIdiomQuizResult(answers: number[]): string {
  const total = answers.reduce((s, v) => s + v, 0);
  if (total <= 3) return 'Type1';
  if (total <= 6) return 'Type2';
  if (total <= 9) return 'Type3';
  return 'Type4';
}
