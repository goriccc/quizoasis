/**
 * Test interaction format definitions for home filtering.
 * DB column `tests.format` should match TestFormat values.
 */

export const TEST_FORMATS = {
  personality_4: { group: 'personality' },
  scenario_4: { group: 'personality' },
  personality_2: { group: 'personality' },
  scenario_2: { group: 'personality' },
  quiz: { group: 'quiz' },
  game: { group: 'game' },
  checklist: { group: 'checklist' },
  face: { group: 'face' },
} as const;

export type TestFormat = keyof typeof TEST_FORMATS;

export const TEST_FORMAT_VALUES: TestFormat[] = Object.keys(TEST_FORMATS) as TestFormat[];

export const TEST_FORMAT_GROUPS = [
  'all',
  'personality',
  'game',
  'quiz',
  'face',
  'checklist',
] as const;

export type TestFormatGroup = (typeof TEST_FORMAT_GROUPS)[number];

export function isTestFormat(value: string | null | undefined): value is TestFormat {
  return !!value && value in TEST_FORMATS;
}

export function getFormatGroup(format: TestFormat): TestFormatGroup {
  return TEST_FORMATS[format].group;
}

export function isTestFormatGroup(value: string | null | undefined): value is TestFormatGroup {
  return !!value && (TEST_FORMAT_GROUPS as readonly string[]).includes(value);
}

export function formatMatchesGroup(format: TestFormat, group: TestFormatGroup): boolean {
  if (group === 'all') return true;
  return getFormatGroup(format) === group;
}
