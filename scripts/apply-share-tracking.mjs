import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

const SKIP = new Set([
  'OptimismTestClient.tsx',
  'Phase3PersonalityWeatherTypeTestClient.tsx',
  'MBTITestClient.tsx',
  'FriendTestClient.tsx',
  'Phase3TeamWorkChemistryTestClient.tsx',
]);

const IMPORT_LINE =
  "import { getShareContentType, trackShareEvent } from '@/lib/analytics/trackShare';";

const STANDARD_HANDLERS = [
  { decls: ['const shareToLine = () => {'], method: 'line' },
  {
    decls: ['const shareToWeChat = async () => {', 'const shareToWeChat = () => {'],
    method: 'wechat',
  },
  { decls: ['const shareToWhatsApp = () => {'], method: 'whatsapp' },
  { decls: ['const shareToKakao = () => {'], method: 'kakao' },
  { decls: ['const shareToTelegram = () => {'], method: 'telegram' },
  { decls: ['const copyLink = () => {', 'const copyLink = async () => {'], method: 'link copy' },
];

function injectTracking(content, fnDecl, trackLine) {
  if (!content.includes(fnDecl)) return content;

  const idx = content.indexOf(fnDecl);
  const bodyStart = idx + fnDecl.length;
  const snippet = content.slice(bodyStart, bodyStart + 120);

  if (snippet.includes('trackShareEvent(')) return content;

  return (
    content.slice(0, bodyStart) +
    `\n    ${trackLine}` +
    content.slice(bodyStart)
  );
}

function addImport(content) {
  if (content.includes(IMPORT_LINE)) return content;

  const adsenseImport = content.match(/^import AdSensePlaceholder[^\n]+\n/m);
  if (!adsenseImport) {
    throw new Error('AdSense import not found');
  }

  return content.replace(adsenseImport[0], adsenseImport[0] + IMPORT_LINE + '\n');
}

function processStandardFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('trackShareEvent')) return { status: 'skipped', reason: 'already has tracking' };
  if (!content.includes('const shareToKakao = () => {')) {
    return { status: 'skipped', reason: 'non-standard shareToKakao' };
  }

  content = addImport(content);

  for (const handler of STANDARD_HANDLERS) {
    const trackLine = `trackShareEvent('${handler.method}', getShareContentType(started, showResult), slug);`;
    for (const decl of handler.decls) {
      content = injectTracking(content, decl, trackLine);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return { status: 'updated' };
}

function processBestFriendStyle(filePath, contentTypeMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(IMPORT_LINE) && content.includes("trackShareEvent('kakao', 'quiz_result'")) {
    return { status: 'skipped', reason: 'already has tracking' };
  }

  content = addImport(content);

  for (const [fnDecl, method, contentType] of contentTypeMap) {
    const trackLine = `trackShareEvent('${method}', '${contentType}', slug);`;
    content = injectTracking(content, fnDecl, trackLine);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return { status: 'updated' };
}

const bestFriendHandlers = [
  ['const copyLink = () => {', 'link copy', 'quiz_result'],
  ['const shareToKakaoResult = () => {', 'kakao', 'quiz_result'],
  ['const shareToTelegramResult = () => {', 'telegram', 'quiz_result'],
  ['const shareToWeChatResult = async () => {', 'wechat', 'quiz_result'],
  ['const shareToWhatsAppResult = () => {', 'whatsapp', 'quiz_result'],
  ['const shareToLineResult = () => {', 'line', 'quiz_result'],
  ['const copyProgressLink = () => {', 'link copy', 'quiz_ing'],
  ['const shareProgressToKakao = () => {', 'kakao', 'quiz_ing'],
  ['const shareProgressToTelegram = () => {', 'telegram', 'quiz_ing'],
  ['const shareProgressToWeChat = async () => {', 'wechat', 'quiz_ing'],
  ['const shareProgressToWhatsApp = () => {', 'whatsapp', 'quiz_ing'],
  ['const shareProgressToLine = () => {', 'line', 'quiz_ing'],
];

const files = fs
  .readdirSync(COMPONENTS_DIR)
  .filter((f) => f.endsWith('TestClient.tsx'))
  .sort();

const results = { updated: [], skipped: [], errors: [] };

for (const file of files) {
  const filePath = path.join(COMPONENTS_DIR, file);

  try {
    if (SKIP.has(file)) {
      results.skipped.push({ file, reason: 'pilot file' });
      continue;
    }

    if (file === 'Phase3BestFriendQuizTestClient.tsx' || file === 'Phase3CoupleBreakupRiskTestClient.tsx') {
      const result = processBestFriendStyle(filePath, bestFriendHandlers);
      if (result.status === 'updated') results.updated.push(file);
      else results.skipped.push({ file, reason: result.reason });
      continue;
    }

    const result = processStandardFile(filePath);
    if (result.status === 'updated') results.updated.push(file);
    else results.skipped.push({ file, reason: result.reason });
  } catch (error) {
    results.errors.push({ file, error: error.message });
  }
}

console.log(`Updated: ${results.updated.length}`);
console.log(`Skipped: ${results.skipped.length}`);
console.log(`Errors: ${results.errors.length}`);

if (results.errors.length) {
  console.log('\nErrors:');
  for (const e of results.errors) console.log(`  ${e.file}: ${e.error}`);
}

const nonStandardSkipped = results.skipped.filter(
  (s) => s.reason === 'non-standard shareToKakao' && s.reason !== 'pilot file',
);
if (nonStandardSkipped.length) {
  console.log('\nNon-standard skipped:');
  for (const s of nonStandardSkipped) console.log(`  ${s.file}`);
}
