/**
 * One-off: replace duplicated AliExpress banner markup with CoupangAffiliateIframe.
 * Run: node scripts/replace-aliexpress-with-coupang.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'components');

function addCoupangImport(content) {
  if (content.includes("@/components/CoupangAffiliateIframe")) return content;
  const lines = content.split('\n');
  const imageIdx = lines.findIndex((l) => l.includes("import Image from 'next/image'"));
  if (imageIdx >= 0) {
    lines.splice(
      imageIdx + 1,
      0,
      "import CoupangAffiliateIframe from '@/components/CoupangAffiliateIframe';"
    );
    return lines.join('\n');
  }
  const firstImport = lines.findIndex((l) => l.startsWith('import '));
  if (firstImport >= 0) {
    lines.splice(
      firstImport,
      0,
      "import CoupangAffiliateIframe from '@/components/CoupangAffiliateIframe';"
    );
    return lines.join('\n');
  }
  return content;
}

function indentOf(line) {
  const m = line.match(/^(\s*)/);
  return m ? m[1] : '';
}

function replacePopupCompact(content) {
  const re =
    /^(\s*)<div className="mb-6 flex justify-center">\s*<a href="https:\/\/s\.click\.aliexpress\.com\/e\/_c3G3nkEv\?bz=300\*250" target="_blank" rel="noopener noreferrer">\s*<Image width={300} height={250} src="https:\/\/ae01\.alicdn\.com\/[^"]+" alt="AliExpress" className="rounded-lg" style={{ maxWidth: '300px', height: 'auto' }} \/>\s*<\/a>\s*<\/div>/gm;
  return content.replace(re, (_m, indent) => {
    return `${indent}<div className="mb-6 flex justify-center">\n${indent}  <CoupangAffiliateIframe variant="popup" />\n${indent}</div>`;
  });
}

function replacePopupMultiline(content) {
  const re =
    /^(\s*)<div className="mb-6">\s*<div className="flex justify-center">\s*<a\s+href="https:\/\/s\.click\.aliexpress\.com\/e\/_c3G3nkEv\?bz=300\*250"\s+target="_blank"\s+rel="noopener noreferrer"\s*>\s*<Image[\s\S]*?\/>\s*<\/a>\s*<\/div>\s*<\/div>/gm;
  return content.replace(re, (_m, indent) => {
    return `${indent}<div className="mb-6">\n${indent}  <div className="flex justify-center">\n${indent}    <CoupangAffiliateIframe variant="popup" />\n${indent}  </div>\n${indent}</div>`;
  });
}

function replaceStartBlock(content) {
  const re =
    /^(\s*)<div className="max-w-\[680px\] mx-auto (mb-(?:4|6))">\s*<div className="flex justify-center">\s*<a[\s\S]*?href="https:\/\/s\.click\.aliexpress\.com\/e\/_c3G3nkEv\?bz=300\*250"[\s\S]*?<\/a>\s*<\/div>\s*<\/div>/gm;
  return content.replace(re, (_m, indent, mb) => {
    return `${indent}<div className="max-w-[680px] mx-auto ${mb}">\n${indent}  <div className="flex justify-center">\n${indent}    <CoupangAffiliateIframe variant="start" />\n${indent}  </div>\n${indent}</div>`;
  });
}

function processFile(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes('s.click.aliexpress.com/e/_c3G3nkEv')) return false;

  const before = c;
  c = replacePopupCompact(c);
  c = replacePopupMultiline(c);
  c = replaceStartBlock(c);

  if (c === before) {
    console.warn('No replacement applied (pattern mismatch):', filePath);
    return false;
  }

  if (c.includes('s.click.aliexpress.com/e/_c3G3nkEv')) {
    console.warn('Still contains AliExpress URL:', filePath);
  }

  c = addCoupangImport(c);
  fs.writeFileSync(filePath, c, 'utf8');
  return true;
}

const files = fs
  .readdirSync(componentsDir)
  .filter((f) => f.endsWith('TestClient.tsx'))
  .map((f) => path.join(componentsDir, f));

let n = 0;
for (const f of files) {
  if (processFile(f)) {
    n++;
    console.log('OK', path.basename(f));
  }
}
console.log('Updated', n, 'files');
