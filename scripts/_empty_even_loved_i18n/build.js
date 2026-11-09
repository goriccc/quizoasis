const fs = require('fs');
const path = require('path');

const locales = ['en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
const dir = __dirname;
const resultKeys = [
  'title',
  'typeName',
  'realReason',
  'shortDescription',
  'description',
  'keywords',
  'strengths',
  'reasonDetail',
  'frequentSaying',
  'changeTips',
  'counselingNote',
  'oneLiner',
  'shareLine',
];

const bundles = {};
for (const loc of locales) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, `${loc}.json`), 'utf8'));
  if (data.questions.length !== 10) throw new Error(`${loc}: expected 10 questions`);
  if (data.results.length !== 5) throw new Error(`${loc}: expected 5 results`);
  for (const q of data.questions) {
    if (!q.q || !Array.isArray(q.opts) || q.opts.length !== 4) {
      throw new Error(`${loc}: each question needs q + 4 opts`);
    }
    for (const o of q.opts) {
      if (!o) throw new Error(`${loc}: empty option`);
    }
  }
  for (const r of data.results) {
    for (const k of resultKeys) {
      if (!r[k]) throw new Error(`${loc}: result missing ${k}`);
    }
  }
  if (!data.meta?.title || !data.meta?.description || !data.meta?.tags?.length) {
    throw new Error(`${loc}: incomplete meta`);
  }
  bundles[loc] = data;
}

function esc(s) {
  return JSON.stringify(s ?? '');
}

function safeName(loc) {
  if (loc === 'zh-CN') return 'ZH_CN';
  if (loc === 'zh-TW') return 'ZH_TW';
  return loc.toUpperCase();
}

let out = `/** Auto-built from scripts/_empty_even_loved_i18n/*.json — do not hand-edit */
export type Phase3EmptyEvenLovedForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3EmptyEvenLovedResultText {
  title: string;
  typeName: string;
  realReason: string;
  shortDescription: string;
  description: string;
  keywords: string;
  strengths: string;
  reasonDetail: string;
  frequentSaying: string;
  changeTips: string;
  counselingNote: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3EmptyEvenLovedLocaleBundle {
  meta: { title: string; description: string; tags: string[] };
  questions: { q: string; opts: [string, string, string, string] }[];
  results: Phase3EmptyEvenLovedResultText[];
}

`;

for (const loc of locales) {
  const b = bundles[loc];
  const name = safeName(loc);
  out += `const ${name}: Phase3EmptyEvenLovedLocaleBundle = {\n`;
  out += `  meta: {\n    title: ${esc(b.meta.title)},\n    description: ${esc(b.meta.description)},\n    tags: ${JSON.stringify(b.meta.tags)},\n  },\n`;
  out += `  questions: [\n`;
  for (const q of b.questions) {
    out += `    { q: ${esc(q.q)}, opts: [${q.opts.map(esc).join(', ')}] },\n`;
  }
  out += `  ],\n  results: [\n`;
  for (const r of b.results) {
    out += `    {\n`;
    for (const k of resultKeys) {
      out += `      ${k}: ${esc(r[k])},\n`;
    }
    out += `    },\n`;
  }
  out += `  ],\n};\n\n`;
}

out += `export const PHASE3_EMPTY_EVEN_LOVED_I18N: Record<Phase3EmptyEvenLovedForeignLocale, Phase3EmptyEvenLovedLocaleBundle> = {\n`;
out += `  en: EN,\n  ja: JA,\n  'zh-CN': ZH_CN,\n  'zh-TW': ZH_TW,\n  vi: VI,\n  id: ID,\n};\n`;

const dest = path.join(__dirname, '..', '..', 'lib', 'phase3EmptyEvenLovedI18n.ts');
fs.writeFileSync(dest, out, 'utf8');
console.log('wrote', dest, 'bytes', out.length);
