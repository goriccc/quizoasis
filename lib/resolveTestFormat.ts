import { SLUG_FORMAT_REGISTRY } from './testFormatRegistry';
import { isTestFormat, TestFormat } from './testFormats';

const DEFAULT_FORMAT: TestFormat = 'personality_4';

/**
 * Resolve interaction format: DB value → slug registry → default.
 */
export function resolveTestFormat(
  dbFormat: string | null | undefined,
  slug: string
): TestFormat {
  if (isTestFormat(dbFormat)) {
    return dbFormat;
  }
  return SLUG_FORMAT_REGISTRY[slug] ?? DEFAULT_FORMAT;
}
