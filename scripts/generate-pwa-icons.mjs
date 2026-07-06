/**
 * PWA 아이콘 — public/icon.png 기준 PNG 생성
 * 실행: node scripts/generate-pwa-icons.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'icons');
const sourcePath = path.join(__dirname, '..', 'public', 'icon.png');

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('sharp 패키지가 필요합니다: npm install -D sharp');
    process.exit(1);
  }

  if (!fs.existsSync(sourcePath)) {
    console.error('icon.png not found:', sourcePath);
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  const sourceBuffer = fs.readFileSync(sourcePath);

  const sizes = [
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    await sharp(sourceBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(outDir, name));
    console.log('wrote', name);
  }

  // manifest / metadata 호환용 루트 복사
  await sharp(sourceBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon-192x192.png'));
  await sharp(sourceBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon-512x512.png'));
  console.log('wrote favicon-192x192.png, favicon-512x512.png');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
