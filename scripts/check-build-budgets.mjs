/**
 * Build size guardrails — fail CI if page.tsx / messages monoliths grow past budgets.
 * Budgets are intentionally above current size so we catch regressions, not punish today.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const BUDGETS = {
  pageLines: 23000, // current ~21.5k; forbid further mega-growth
  pageBytes: 1_200_000, // ~1.2 MB
  messagesBytesPerLocale: 1_100_000, // ~1.1 MB per locale monolith
};

const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
const errors = [];
const warnings = [];

const pagePath = path.join(root, 'app', '[locale]', 'test', '[slug]', 'page.tsx');
if (!fs.existsSync(pagePath)) {
  errors.push(`Missing ${pagePath}`);
} else {
  const content = fs.readFileSync(pagePath, 'utf8');
  const lines = content.split(/\r?\n/).length;
  const bytes = Buffer.byteLength(content, 'utf8');
  console.log(`page.tsx: ${lines} lines, ${(bytes / 1024).toFixed(1)} KB`);
  if (lines > BUDGETS.pageLines) {
    errors.push(
      `page.tsx lines ${lines} > budget ${BUDGETS.pageLines}. Add tests via lib/testRuntimeRegistry.ts only.`,
    );
  }
  if (bytes > BUDGETS.pageBytes) {
    errors.push(
      `page.tsx bytes ${bytes} > budget ${BUDGETS.pageBytes}. Do not add static META/dynamic branches.`,
    );
  }
  // Soft warn if new if (slug === ...) patterns appear for registry-owned pilots
  const registryPilots = ['phase3-jealousy-balance-game', 'phase3-first-date-balance-game'];
  for (const slug of registryPilots) {
    const re = new RegExp(`slug === ['"]${slug}['"]`);
    if (re.test(content)) {
      warnings.push(`Legacy slug branch still present for registry pilot: ${slug}`);
    }
  }
}

for (const locale of locales) {
  const p = path.join(root, 'messages', `${locale}.json`);
  if (!fs.existsSync(p)) {
    warnings.push(`Missing messages/${locale}.json`);
    continue;
  }
  const bytes = fs.statSync(p).size;
  console.log(`messages/${locale}.json: ${(bytes / 1024).toFixed(1)} KB`);
  if (bytes > BUDGETS.messagesBytesPerLocale) {
    errors.push(
      `messages/${locale}.json ${bytes} bytes > budget ${BUDGETS.messagesBytesPerLocale}. Split test namespaces to messages/${locale}/tests/{slug}.json`,
    );
  }
}

for (const w of warnings) console.warn(`WARN: ${w}`);
if (errors.length) {
  console.error('\nBuild budget FAILED:');
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log('\nBuild budget OK');
