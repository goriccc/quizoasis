/**
 * Split test-scoped next-intl namespaces out of the giant messages/{locale}.json.
 * Files live at: messages/{locale}/tests/{messagesFileSlug}.json
 * Shape: { "phase3XxxTest": { ... } }
 */

import fs from 'fs';
import path from 'path';
import { locales, type Locale } from '@/i18n';

export async function loadSplitTestMessages(
  locale: string,
  messagesFileSlug: string,
): Promise<Record<string, unknown>> {
  const loc = (locales.includes(locale as Locale) ? locale : 'ko') as string;
  const read = (l: string) => {
    const filePath = path.join(
      process.cwd(),
      'messages',
      l,
      'tests',
      `${messagesFileSlug}.json`,
    );
    if (!fs.existsSync(filePath)) return null;
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>;
    } catch {
      return null;
    }
  };

  return read(loc) || (loc !== 'ko' ? read('ko') : null) || {};
}

export function mergeMessages(
  base: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  return { ...base, ...patch };
}
