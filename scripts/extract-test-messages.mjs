/**
 * Extract test namespaces from messages/{locale}.json into
 * messages/{locale}/tests/{slug}.json and remove them from the monolith.
 *
 * Usage:
 *   node scripts/extract-test-messages.mjs \
 *     --slug phase3-jealousy-balance-game \
 *     --ns phase3JealousyBalanceGameTest \
 *     [--keep]   # copy only, do not delete from monolith
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];

function parseArgs(argv) {
  const out = { keep: false, slug: '', ns: '' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--keep') out.keep = true;
    else if (a === '--slug') out.slug = argv[++i];
    else if (a === '--ns') out.ns = argv[++i];
  }
  return out;
}

const { slug, ns, keep } = parseArgs(process.argv.slice(2));
if (!slug || !ns) {
  console.error('Required: --slug <file-slug> --ns <messagesNamespace>');
  process.exit(1);
}

for (const locale of locales) {
  const mainPath = path.join(root, 'messages', `${locale}.json`);
  if (!fs.existsSync(mainPath)) {
    console.warn(`[skip] missing ${mainPath}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
  if (!data[ns]) {
    console.warn(`[skip] ${locale}: namespace ${ns} not found`);
    continue;
  }

  const outDir = path.join(root, 'messages', locale, 'tests');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${slug}.json`);
  const payload = { [ns]: data[ns] };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`[write] ${path.relative(root, outPath)}`);

  if (!keep) {
    delete data[ns];
    fs.writeFileSync(mainPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`[strip] ${locale}.json removed key ${ns}`);
  }
}

console.log('Done.');
