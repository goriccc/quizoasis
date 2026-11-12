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
    if (/진짜 이유를 풀어보면|The real reason, unpacked|本当の理由をほどく|真正原因拆开看|真正原因拆開看|Lý do thật sự:|Alasan sejati diurai/i.test(r.description)) {
      throw new Error(`${loc}: description still contains unpack-real-reason line`);
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

let out = `/** Auto-built from scripts/_hurt_by_small_words_i18n/*.json — do not hand-edit */
export type Phase3HurtBySmallWordsForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3HurtBySmallWordsResultText = {
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
  results: Phase3HurtBySmallWordsResultText[];
};

export const PHASE3_HURT_BY_SMALL_WORDS_I18N: Record<Phase3HurtBySmallWordsForeignLocale, LocaleBundle> = ${JSON.stringify(
  bundles,
  null,
  2,
)};
`;

fs.writeFileSync(path.join(dir, '..', '..', 'lib', 'phase3HurtBySmallWordsI18n.ts'), out, 'utf8');
console.log('wrote lib/phase3HurtBySmallWordsI18n.ts');
