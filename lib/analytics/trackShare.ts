export type ShareMethod =
  | 'link copy'
  | 'kakao'
  | 'line'
  | 'telegram'
  | 'whatsapp'
  | 'wechat';

export type ShareContentType = 'quiz_intro' | 'quiz_ing' | 'quiz_result';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getShareContentType(
  started: boolean,
  showResult: boolean,
): ShareContentType {
  if (!started) return 'quiz_intro';
  if (showResult) return 'quiz_result';
  return 'quiz_ing';
}

export function trackShareEvent(
  method: ShareMethod,
  contentType: ShareContentType,
  itemId: string,
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'share', {
    method,
    content_type: contentType,
    item_id: itemId,
  });
}
