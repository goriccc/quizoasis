/**
 * Generate lib/testFormatRegistry.ts and supabase/update-all-test-formats.sql
 * from scripts/registry-preview.json (built via classify-tests + overrides).
 *
 * Usage: node scripts/generate-test-format-registry.mjs
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const registryPath = path.join(root, 'scripts/registry-preview.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const entries = Object.entries(registry).sort(([a], [b]) => a.localeCompare(b));

const tsLines = entries.map(([slug, format]) => `  '${slug}': '${format}',`).join('\n');

const registryTs = `/**
 * Slug → interaction format registry (${entries.length} tests).
 * DB \`format\` column takes precedence; this is fallback for NULL values.
 * Regenerate: node scripts/generate-test-format-registry.mjs
 */
import { TestFormat } from './testFormats';

export const SLUG_FORMAT_REGISTRY: Record<string, TestFormat> = {
${tsLines}
};

export const REGISTRY_SLUG_COUNT = ${entries.length};
`;

fs.writeFileSync(path.join(root, 'lib/testFormatRegistry.ts'), registryTs);

const sqlCases = entries
  .map(([slug, format]) => `  WHEN '${slug.replace(/'/g, "''")}' THEN '${format}'`)
  .join('\n');

const sql = `-- Bulk update tests.format for all ${entries.length} slugs
-- Run after: supabase/add-format-column.sql

UPDATE tests
SET format = CASE slug
${sqlCases}
  ELSE format
END
WHERE slug IN (
${entries.map(([slug]) => `  '${slug.replace(/'/g, "''")}'`).join(',\n')}
);
`;

fs.writeFileSync(path.join(root, 'supabase/update-all-test-formats.sql'), sql);

console.log(`Generated registry (${entries.length} slugs) + update-all-test-formats.sql`);
