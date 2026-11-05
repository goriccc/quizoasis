const fs = require('fs');
const path = require('path');

const locales = ['en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
const resultKeys = [
  'title',
  'shortDescription',
  'quote',
  'description',
  'typeLabel',
  'characteristics',
  'livingStyle',
  'strengths',
  'caution',
  'goodMatch',
  'tips',
  'oneLiner',
  'shareLine',
];

const bundles = {};
for (const loc of locales) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${loc}.json`), 'utf8'));
  if (data.questions.length !== 12) throw new Error(`${loc}: 12 questions required`);
  if (data.results.length !== 4) throw new Error(`${loc}: 4 results required`);
  for (const q of data.questions) {
    if (!Array.isArray(q.opts) || q.opts.length !== 2) throw new Error(`${loc}: each q needs 2 opts`);
  }
  for (const r of data.results) {
    for (const k of resultKeys) {
      if (!r[k]) throw new Error(`${loc}: missing result.${k}`);
    }
  }
  if (!data.meta?.title || !data.meta?.description || !Array.isArray(data.meta?.tags)) {
    throw new Error(`${loc}: meta incomplete`);
  }
  if (!data.messages) throw new Error(`${loc}: messages missing`);
  bundles[loc] = data;
}

function constName(loc) {
  if (loc === 'zh-CN') return 'ZH_CN';
  if (loc === 'zh-TW') return 'ZH_TW';
  return loc.toUpperCase();
}

let out = `/** Auto-built from scripts/_couple_trip_balance_i18n/*.json — do not hand-edit */
export type Phase3CoupleTripBalanceForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3CoupleTripBalanceResultText {
  title: string;
  shortDescription: string;
  quote: string;
  description: string;
  typeLabel: string;
  characteristics: string;
  livingStyle: string;
  strengths: string;
  caution: string;
  goodMatch: string;
  tips: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3CoupleTripBalanceLocaleBundle {
  meta: { title: string; description: string; tags: string[] };
  questions: { q: string; opts: [string, string] }[];
  results: Phase3CoupleTripBalanceResultText[];
}

`;

for (const loc of locales) {
  const b = bundles[loc];
  const name = constName(loc);
  out += `const ${name}: Phase3CoupleTripBalanceLocaleBundle = ${JSON.stringify(
    { meta: b.meta, questions: b.questions, results: b.results },
    null,
    2,
  )};\n\n`;
}

out += `export const PHASE3_COUPLE_TRIP_BALANCE_I18N: Record<Phase3CoupleTripBalanceForeignLocale, Phase3CoupleTripBalanceLocaleBundle> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
`;

const i18nPath = path.join(__dirname, '..', '..', 'lib', 'phase3CoupleTripBalanceGameI18n.ts');
fs.writeFileSync(i18nPath, out, 'utf8');
console.log('wrote', i18nPath);

const ns = 'phase3CoupleTripBalanceGameTest';
const slug = 'phase3-couple-trip-balance-game';
for (const loc of locales) {
  const payload = { [ns]: bundles[loc].messages };
  const outDir = path.join(__dirname, '..', '..', 'messages', loc, 'tests');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log('messages', loc);
}

console.log('OK');
