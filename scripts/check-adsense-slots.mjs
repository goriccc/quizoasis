import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'components');

const all = fs
  .readdirSync(componentsDir)
  .filter((f) => f.endsWith('TestClient.tsx'));

const rows = [];
for (const f of all) {
  const c = fs.readFileSync(path.join(componentsDir, f), 'utf8');
  const n = (c.match(/AdSensePlaceholder/g) || []).length;
  rows.push({ f, n });
}

rows.sort((a, b) => a.n - b.n);
const min = rows[0]?.n ?? 0;
const low = rows.filter((r) => r.n < 4);

console.log('AdSensePlaceholder count per TestClient (min=' + min + ', max=' + rows[rows.length - 1].n + ')');
if (low.length) {
  console.log('\nFiles with fewer than 4 placeholders (may be intentional for mini-games):');
  low.forEach((r) => console.log(`  ${r.n}\t${r.f}`));
} else {
  console.log('All files have at least 4 AdSensePlaceholder usages.');
}
