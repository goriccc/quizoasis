/**
 * Scaffold a new balance-game test on the registry path ONLY.
 * Does NOT patch app/[locale]/test/[slug]/page.tsx.
 *
 * Usage:
 *   node scripts/scaffold-registry-test.mjs \
 *     --slug phase3-example-balance-game \
 *     --ns phase3ExampleBalanceGameTest \
 *     --thumb p3_test_balance_game_example.webp \
 *     --title-ko "예제 밸런스 게임"
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      out[a.slice(2)] = argv[++i];
    }
  }
  return out;
}

function toPascal(slug) {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function toCamelNs(slug) {
  const pascal = toPascal(slug);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1) + (slug.endsWith('Test') ? '' : '');
}

const args = parseArgs(process.argv.slice(2));
const slug = args.slug;
const ns = args.ns || `${toCamelNs(slug)}Test`;
const thumb = args.thumb || `p3_test_${slug.replace(/^phase3-/, '').replace(/-/g, '_')}.webp`;
const titleKo = args['title-ko'] || slug;

if (!slug) {
  console.error('Required: --slug phase3-my-new-balance-game');
  process.exit(1);
}
if (!slug.startsWith('phase3-')) {
  console.error('Slug must start with phase3_ prefix convention: phase3-...');
  process.exit(1);
}

const pascal = toPascal(slug); // Phase3ExampleBalanceGame
const dataFile = `phase3${pascal.replace(/^Phase3/, '')}Data`; // phase3ExampleBalanceGameData — messy
// Prefer explicit: phase3Xxx from slug without phase3-
const dataBase = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^phase3/, 'phase3');
// phase3ExampleBalanceGame
const componentName = `Phase3${pascal.replace(/^Phase3/, '')}TestClient`.replace(
  /Phase3Phase3/,
  'Phase3',
);
// Simpler naming from slug parts after phase3-
const core = slug.replace(/^phase3-/, '');
const corePascal = core
  .split('-')
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  .join('');
const dataModuleName = `phase3${corePascal}Data`;
const metaConst = `PHASE3_${core.replace(/-/g, '_').toUpperCase()}_META`;
const questionsConst = `phase3${corePascal}Questions`;
const resultsConst = `phase3${corePascal}Results`;
const clientName = `Phase3${corePascal}TestClient`;
const dataPath = path.join(root, 'lib', `${dataModuleName}.ts`);
const clientPath = path.join(root, 'components', `${clientName}.tsx`);
const registryPath = path.join(root, 'lib', 'testRuntimeRegistry.ts');

if (fs.existsSync(dataPath)) {
  console.error(`Already exists: ${dataPath}`);
  process.exit(1);
}

const dataStub = `/** Auto-scaffolded — fill questions/results, then run i18n + SQL. */
export const ${metaConst} = {
  title: {
    ko: ${JSON.stringify(titleKo)},
    en: ${JSON.stringify(titleKo)},
    ja: ${JSON.stringify(titleKo)},
    'zh-CN': ${JSON.stringify(titleKo)},
    'zh-TW': ${JSON.stringify(titleKo)},
    vi: ${JSON.stringify(titleKo)},
    id: ${JSON.stringify(titleKo)},
  },
  description: {
    ko: '',
    en: '',
    ja: '',
    'zh-CN': '',
    'zh-TW': '',
    vi: '',
    id: '',
  },
  tags: {
    ko: ['연애', '밸런스'],
    en: ['Love', 'Balance'],
    ja: ['恋愛', 'バランス'],
    'zh-CN': ['恋爱', '平衡'],
    'zh-TW': ['戀愛', '平衡'],
    vi: ['Tình yêu', 'Cân bằng'],
    id: ['Cinta', 'Keseimbangan'],
  },
};

export const ${questionsConst}: any[] = [];
export const ${resultsConst}: any[] = [];
`;

const clientStub = `'use client';
/**
 * Scaffold — copy from an existing balance client (e.g. Phase3FirstDateBalanceGameTestClient)
 * and wire useTranslations('${ns}').
 */
export { default } from './Phase3FirstDateBalanceGameTestClient';
`;

fs.writeFileSync(dataPath, dataStub, 'utf8');
fs.writeFileSync(clientPath, clientStub, 'utf8');
console.log(`[write] ${path.relative(root, dataPath)}`);
console.log(`[write] ${path.relative(root, clientPath)}`);

// Append registry entry
let registry = fs.readFileSync(registryPath, 'utf8');
const marker = 'export const TEST_RUNTIME_REGISTRY';
if (!registry.includes(marker)) {
  console.error('Could not find TEST_RUNTIME_REGISTRY in registry file');
  process.exit(1);
}
if (registry.includes(`'${slug}'`)) {
  console.warn(`Registry already has ${slug}`);
} else {
  const entry = `
  '${slug}': {
    slug: '${slug}',
    format: 'game',
    ssr: true,
    loadMeta: async () => {
      const { ${metaConst} } = await import('./${dataModuleName}');
      return {
        title: ${metaConst}.title,
        description: ${metaConst}.description,
        tags: ${metaConst}.tags,
        thumbnail: '${thumb}',
        type: 'psychology',
        category: 'personality',
        format: 'game',
      };
    },
    loadBalancePayload: async () => {
      const mod = await import('./${dataModuleName}');
      return {
        questions: mod.${questionsConst},
        results: mod.${resultsConst},
        meta: {
          title: mod.${metaConst}.title,
          description: mod.${metaConst}.description,
          tags: mod.${metaConst}.tags,
          thumbnail: '${thumb}',
          type: 'psychology',
          category: 'personality',
          format: 'game',
        },
        messagesNamespace: '${ns}',
        messagesFileSlug: '${slug}',
      };
    },
    loadClient: () => import('@/components/${clientName}'),
  },
`;
  registry = registry.replace(
    'export const TEST_RUNTIME_REGISTRY: Record<string, RuntimeTestEntry> = {',
    `export const TEST_RUNTIME_REGISTRY: Record<string, RuntimeTestEntry> = {${entry}`,
  );
  fs.writeFileSync(registryPath, registry, 'utf8');
  console.log(`[registry] added ${slug}`);
}

// Seed empty split message files
const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
const seed = {
  [ns]: {
    startMessage: {
      line1: titleKo,
      line2: '',
      line3: '',
      line4: '',
    },
    ui: {
      startTest: '시작하기',
      similarTests: '비슷한 테스트',
      linkCopy: '링크 복사',
      kakao: '카카오톡',
      adsenseTitle: 'Advertisement',
    },
    shareMessages: {
      default: '나는 {type}!',
      kakao: '나는 {type}!',
      wechat: '나는 {type}!',
      whatsapp: '나는 {type}!',
      telegram: '나는 {type}!',
      line: '나는 {type}!',
      startDefault: titleKo,
      startKakao: titleKo,
      startWechat: titleKo,
      startWhatsapp: titleKo,
      startTelegram: titleKo,
      startLine: titleKo,
    },
    alerts: {
      linkCopied: '링크가 복사되었습니다!',
      resultCopied: '결과가 클립보드에 복사되었습니다!',
      shareFailed: '공유 기능을 사용할 수 없습니다.',
      wechatCopy: '링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.',
      kakaoInit: '카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.',
      kakaoError: '카카오톡 공유 중 오류가 발생했습니다.',
    },
  },
};

for (const locale of locales) {
  const dir = path.join(root, 'messages', locale, 'tests');
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, `${slug}.json`);
  if (!fs.existsSync(out)) {
    fs.writeFileSync(out, JSON.stringify(seed, null, 2) + '\n', 'utf8');
    console.log(`[messages] ${path.relative(root, out)}`);
  }
}

console.log(`
Next steps:
  1. Fill lib/${dataModuleName}.ts (questions/results)
  2. Replace components/${clientName}.tsx with a real client (do not use page.tsx)
  3. Localize messages/*/tests/${slug}.json
  4. Add supabase/insert-${slug}.sql (do not run SQL here)
  5. NEVER add if (slug === '${slug}') to page.tsx
`);
