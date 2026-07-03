import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '..', 'components');

function removeGetTestsImport(content) {
  return content.replace(/import \{([^}]*)\} from '@\/lib\/supabase';/g, (match, imports) => {
    const parts = imports
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s && s !== 'getTests');
    if (parts.length === 0) return '';
    return `import { ${parts.join(', ')} } from '@/lib/supabase';`;
  });
}

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('getTests()')) return false;
  const original = content;

  if (!content.includes('useTestRecommendations')) {
    content = content.replace(
      /from '@\/lib\/supabase';/,
      (m) => `${m}\nimport { useTestRecommendations } from '@/lib/hooks/useTestRecommendations';`
    );
    content = content.replace(
      /const \[similarTestsState, setSimilarTestsState\] = useState[^\n]*\n\s*const \[popularTestsState, setPopularTestsState\] = useState[^\n]*\n/g,
      'const { similarTestsState, popularTestsState, latestTestSlugs } = useTestRecommendations({ slug, locale });\n'
    );
    content = content.replace(
      /\s*const \[latestTestSlugs, setLatestTestSlugs\] = useState<string\[\]>\(\[\]\);\s*\n/g,
      '\n'
    );
  }

  const patterns = [
    /\s*\/\/ 유사한 테스트와 인기 테스트 로드[^\n]*\n\s*useEffect\(\(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[[^\]]+\]\);\s*/g,
    /\s*\/\/ 유사한 테스트 로드[^\n]*\n\s*useEffect\(\(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[[^\]]*\]\);\s*/g,
    /\s*\/\/ 인기 테스트 로드[^\n]*\n\s*useEffect\(\(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[[^\]]*\]\);\s*/g,
    /\s*\/\/ 최신 테스트 slug 목록 로드\s*\n\s*useEffect\(\(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[\]\);\s*/g,
    /\s*useEffect\(\(\) => \{\s*const loadLatestSlugs = async \(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[\]\);\s*/g,
    /\s*\/\/ Load Latest\/Popular Tests\s*\n\s*useEffect\(\(\) => \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[[^\]]*\]\);\s*/g,
    /\s*useEffect\(\(\) => \{\s*if \(similarTests\.length === 0\) \{[\s\S]*?await getTests\(\);[\s\S]*?\n\s*\}, \[[^\]]+\]\);\s*/g,
  ];

  for (const pattern of patterns) {
    content = content.replace(pattern, '\n');
  }

  content = removeGetTestsImport(content);
  content = content.replace(/\nimport \{ \} from '@\/lib\/supabase';\n/g, '\n');

  if (content === original) return false;
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('TestClient.tsx'));
let patched = 0;
for (const file of files) {
  if (patchFile(path.join(componentsDir, file))) {
    patched++;
    console.log('patched:', file);
  }
}
console.log(`Done: ${patched}`);
