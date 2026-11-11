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
      if (!String(o || '').trim()) throw new Error(`${loc}: empty option`);
    }
  }
  for (const r of data.results) {
    for (const k of resultKeys) {
      if (!String(r[k] || '').trim()) throw new Error(`${loc}: result missing ${k}`);
    }
  }
  if (!data.meta?.title || !data.meta?.description || !data.meta?.tags?.length) {
    throw new Error(`${loc}: incomplete meta`);
  }
  bundles[loc] = {
    meta: data.meta,
    questions: data.questions.map((q) => ({
      q: q.q,
      opts: q.opts,
    })),
    results: data.results.map((r) => {
      const out = {};
      for (const k of resultKeys) out[k] = r[k];
      return out;
    }),
  };
}

let out = `/** Auto-built from scripts/_overgiving_early_love_i18n/*.json — do not hand-edit */
export type Phase3OvergivingEarlyLoveForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3OvergivingEarlyLoveResultText = {
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
  oneLiner: string;
  shareLine: string;
};

type LocaleBundle = {
  meta: { title: string; description: string; tags: string[] };
  questions: { q: string; opts: string[] }[];
  results: Phase3OvergivingEarlyLoveResultText[];
};

export const PHASE3_OVERGIVING_EARLY_LOVE_I18N: Record<Phase3OvergivingEarlyLoveForeignLocale, LocaleBundle> = ${JSON.stringify(
  bundles,
  null,
  2,
)};
`;

fs.writeFileSync(path.join(dir, '..', '..', 'lib', 'phase3OvergivingEarlyLoveI18n.ts'), out, 'utf8');
console.log('wrote lib/phase3OvergivingEarlyLoveI18n.ts');
