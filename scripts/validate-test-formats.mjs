/**
 * Validate test format coverage for home filtering.
 * Usage: node scripts/validate-test-formats.mjs
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pagePath = path.join(root, 'app/[locale]/test/[slug]/page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');
const registryPath = path.join(root, 'lib/testFormatRegistry.ts');
const registryContent = fs.readFileSync(registryPath, 'utf8');

const slugsFromPage = new Set();
for (const m of pageContent.matchAll(/slug === ['"]([^'"]+)['"]/g)) {
  slugsFromPage.add(m[1]);
}

const slugsFromRegistry = new Set();
for (const m of registryContent.matchAll(/'([a-zA-Z0-9_-]+)': '(personality_4|scenario_4|personality_2|scenario_2|quiz|game|checklist|face)'/g)) {
  slugsFromRegistry.add(m[1]);
}

const missingInRegistry = [...slugsFromPage].filter((s) => !slugsFromRegistry.has(s));
const extraInRegistry = [...slugsFromRegistry].filter((s) => !slugsFromPage.has(s));

const insertDir = path.join(root, 'supabase');
const insertFiles = fs.readdirSync(insertDir).filter((f) => f.startsWith('insert-') && f.endsWith('.sql'));
const missingFormatInSql = [];
for (const file of insertFiles) {
  const content = fs.readFileSync(path.join(insertDir, file), 'utf8');
  if (!content.includes('format')) {
    missingFormatInSql.push(file);
  }
}

let exitCode = 0;

console.log(`Page slugs: ${slugsFromPage.size}`);
console.log(`Registry slugs: ${slugsFromRegistry.size}`);

if (missingInRegistry.length) {
  exitCode = 1;
  console.error('\n❌ Missing in SLUG_FORMAT_REGISTRY:');
  missingInRegistry.forEach((s) => console.error(`  - ${s}`));
}

if (extraInRegistry.length) {
  console.warn('\n⚠️  In registry but not in page.tsx (may be legacy):');
  extraInRegistry.slice(0, 10).forEach((s) => console.warn(`  - ${s}`));
  if (extraInRegistry.length > 10) console.warn(`  ... and ${extraInRegistry.length - 10} more`);
}

if (missingFormatInSql.length) {
  console.warn(`\n⚠️  ${missingFormatInSql.length} insert SQL files without format column (registry fallback still works)`);
}

if (exitCode === 0) {
  console.log('\n✅ Format registry covers all routed slugs.');
}

process.exit(exitCode);
