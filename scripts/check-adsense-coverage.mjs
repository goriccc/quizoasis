import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'components');

const all = fs
  .readdirSync(componentsDir)
  .filter((f) => f.endsWith('TestClient.tsx'));

const withAds = [];
const without = [];
for (const f of all) {
  const c = fs.readFileSync(path.join(componentsDir, f), 'utf8');
  if (c.includes("from '@/lib/adsense'")) withAds.push(f);
  else without.push(f);
}

console.log('Total *TestClient.tsx:', all.length);
console.log("With import from '@/lib/adsense':", withAds.length);
console.log('Without that import:', without.length);
if (without.length) {
  console.log('\nFiles missing adsense import:');
  without.forEach((f) => console.log(' -', f));
}
