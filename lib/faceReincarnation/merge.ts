import { FaceReincarnationResult } from '../faceReincarnationData';

export type LocaleKey = keyof FaceReincarnationResult['title'];

export interface FaceReincarnationResultPartial {
  title?: Partial<Record<string, string>>;
  description?: Partial<Record<string, string[]>>;
  strengths?: Partial<Record<string, string[]>>;
  recommendations?: Partial<Record<string, string[]>>;
  personality?: Partial<Record<string, string[]>>;
  advice?: Partial<Record<string, string[]>>;
  reincarnation?: {
    era?: Partial<Record<string, string[]>>;
    occupation?: Partial<Record<string, string[]>>;
    reason?: Partial<Record<string, string[]>>;
    lifeCount?: Partial<Record<string, string[]>>;
  };
}

export type FaceReincarnationTranslations = Record<number, FaceReincarnationResultPartial>;

export function applyTranslations(
  baseResults: FaceReincarnationResult[],
  translations: FaceReincarnationTranslations
) {
  const byId = new Map<number, FaceReincarnationResult>();
  baseResults.forEach((r) => byId.set(r.id, r));

  Object.entries(translations).forEach(([idStr, patch]) => {
    const id = Number(idStr);
    const target = byId.get(id);
    if (!target) return;

    if (patch.title) {
      Object.assign(target.title, patch.title);
    }
    if (patch.description) {
      Object.entries(patch.description).forEach(([loc, arr]) => {
        if (Array.isArray(arr)) target.description[loc] = arr;
      });
    }
    if (patch.strengths) {
      Object.entries(patch.strengths).forEach(([loc, arr]) => {
        if (Array.isArray(arr)) target.strengths[loc] = arr;
      });
    }
    if (patch.recommendations) {
      Object.entries(patch.recommendations).forEach(([loc, arr]) => {
        if (Array.isArray(arr)) target.recommendations[loc] = arr;
      });
    }
    if (patch.personality) {
      Object.entries(patch.personality).forEach(([loc, arr]) => {
        if (Array.isArray(arr)) (target as any).personality[loc] = arr;
      });
    }
    if (patch.advice) {
      Object.entries(patch.advice).forEach(([loc, arr]) => {
        if (Array.isArray(arr)) target.advice[loc] = arr;
      });
    }
    if (patch.reincarnation) {
      if (patch.reincarnation.era) {
        Object.entries(patch.reincarnation.era).forEach(([loc, arr]) => {
          if (Array.isArray(arr)) target.reincarnation.era[loc] = arr;
        });
      }
      if (patch.reincarnation.occupation) {
        Object.entries(patch.reincarnation.occupation).forEach(([loc, arr]) => {
          if (Array.isArray(arr)) target.reincarnation.occupation[loc] = arr;
        });
      }
      if (patch.reincarnation.reason) {
        Object.entries(patch.reincarnation.reason).forEach(([loc, arr]) => {
          if (Array.isArray(arr)) target.reincarnation.reason[loc] = arr;
        });
      }
      if (patch.reincarnation.lifeCount) {
        Object.entries(patch.reincarnation.lifeCount).forEach(([loc, arr]) => {
          if (Array.isArray(arr)) target.reincarnation.lifeCount[loc] = arr;
        });
      }
    }
  });
}


