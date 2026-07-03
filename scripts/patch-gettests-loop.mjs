/**
 * Patches TestClient components: replaces getTests() recommendation loops with useTestRecommendations hook.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'components');

const STANDARD_MARKER = 'if (similarTests.length === 0) {\n      const loadTests = async () => {\n        try {\n          const allTests = await getTests();';

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('getTests()')) return false;
  if (!content.includes(STANDARD_MARKER) && !content.includes('const allTests = await getTests()')) {
    return false;
  }

  const original = content;

  // Add hook import
  if (!content.includes('useTestRecommendations')) {
    content = content.replace(
      /from '@\/lib\/supabase';/,
      (match) => `${match}\nimport { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';`
    );
  }

  // Remove getTests from supabase import
  content = content.replace(
    /import \{([^}]*)\} from '@\/lib\/supabase';/g,
    (match, imports) => {
      const parts = imports
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s && s !== 'getTests');
      if (parts.length === 0) return '';
      return `import { ${parts.join(', ')} } from '@/lib/supabase';`;
    }
  );

  // Remove duplicate hook import if supabase import was removed entirely
  content = content.replace(
    /\nimport \{ useTestRecommendations \} from '@\/lib\/hooks\/useTestRecommendations';\n\nimport \{ useTestRecommendations \}/,
    '\nimport { useTestRecommendations }'
  );

  // Replace state declarations
  content = content.replace(
    /const \[similarTestsState, setSimilarTestsState\] = useState\(similarTests\);\s*\n\s*const \[popularTestsState, setPopularTestsState\] = useState<any\[\]>\(\[\]\);/g,
    `const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });`
  );

  content = content.replace(
    /const \[similarTestsState, setSimilarTestsState\] = useState<any\[\]>\(similarTests\);\s*\n\s*const \[popularTestsState, setPopularTestsState\] = useState<any\[\]>\(\[\]\);/g,
    `const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });`
  );

  // Remove standalone latestTestSlugs state
  content = content.replace(
    /\s*const \[latestTestSlugs, setLatestTestSlugs\] = useState<string\[\]>\(\[\]\);\s*\n/g,
    '\n'
  );
  content = content.replace(
    /\s*\/\/ 답변 순서 섞기 \(질문이 바뀔 때마다\)\s*\n\s*const \[latestTestSlugs, setLatestTestSlugs\] = useState<string\[\]>\(\[\]\);\s*\n/g,
    '\n  // 답변 순서 섞기 (질문이 바뀔 때마다)\n'
  );

  // Remove standard similar/popular useEffect block
  content = content.replace(
    /\s*\/\/ 유사한 테스트와 인기 테스트 로드[^\n]*\n\s*useEffect\(\(\) => \{\s*if \(similarTests\.length === 0\) \{[\s\S]*?\n\s*\}, \[slug, locale, similarTests\]\);\s*/g,
    '\n'
  );

  // Remove latest slugs useEffect block
  content = content.replace(
    /\s*\/\/ 최신 테스트 slug 목록 로드\s*\n\s*useEffect\(\(\) => \{\s*const loadLatestSlugs = async \(\) => \{[\s\S]*?\n\s*\}, \[\]\);\s*/g,
    '\n'
  );

  // Clean empty supabase import lines
  content = content.replace(/\nimport \{ \} from '@\/lib\/supabase';\n/g, '\n');

  if (content === original) return false;
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('TestClient.tsx'));
let patched = 0;
let skipped = [];

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  try {
    if (patchFile(filePath)) {
      patched++;
      console.log('patched:', file);
    }
  } catch (e) {
    skipped.push(file);
    console.error('error:', file, e);
  }
}

console.log(`\nDone: ${patched} patched, ${skipped.length} errors`);
