const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'components');

// 결과 화면 패턴: otherTests 또는 retakeTest 다음에 나오는 shareWithFriends를 shareResultWithFriends로 변경
function fixResultScreenShareWithFriends(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // 정확한 패턴: </Link> 다음에 나오는 shareWithFriends (결과 화면)
  // 패턴: otherTests </Link> </div> <div ...> <h2 ...> shareWithFriends
  content = content.replace(
    /(\{\s*t\(['"]mbti\.otherTests['"]\)\s*\}\s*<\/Link>\s*<\/div>\s*<div[^>]*className[^>]*>\s*<h2[^>]*>\s*)\{t\(['"]mbti\.shareWithFriends['"]\)\}/g,
    '$1{t(\'mbti.shareResultWithFriends\')}'
  );
  
  // 패턴: retakeTest </button> ... otherTests </Link> </div> <div ...> <h2 ...> shareWithFriends
  content = content.replace(
    /(\{\s*t\(['"]mbti\.retakeTest['"]\)\s*\}\s*<\/button>[^<]*\{\s*t\(['"]mbti\.otherTests['"]\)\s*\}\s*<\/Link>\s*<\/div>\s*<div[^>]*className[^>]*>\s*<h2[^>]*>\s*)\{t\(['"]mbti\.shareWithFriends['"]\)\}/g,
    '$1{t(\'mbti.shareResultWithFriends\')}'
  );
  
  // 간단한 패턴: otherTests 다음 줄에 shareWithFriends
  const lines = content.split('\n');
  let modified = false;
  for (let i = 0; i < lines.length - 5; i++) {
    if (lines[i].includes('mbti.otherTests') && lines[i].includes('</Link>')) {
      // 다음 몇 줄에서 shareWithFriends 찾기
      for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
        if (lines[j].includes('mbti.shareWithFriends') && !lines[j].includes('shareResultWithFriends')) {
          lines[j] = lines[j].replace('mbti.shareWithFriends', 'mbti.shareResultWithFriends');
          modified = true;
          break;
        }
      }
    }
    if (lines[i].includes('mbti.retakeTest') && lines[i].includes('</button>')) {
      // 다음 몇 줄에서 shareWithFriends 찾기 (단, otherTests를 지나간 후)
      let foundOtherTests = false;
      for (let j = i + 1; j < Math.min(i + 15, lines.length); j++) {
        if (lines[j].includes('mbti.otherTests') && lines[j].includes('</Link>')) {
          foundOtherTests = true;
        }
        if (foundOtherTests && lines[j].includes('mbti.shareWithFriends') && !lines[j].includes('shareResultWithFriends')) {
          lines[j] = lines[j].replace('mbti.shareWithFriends', 'mbti.shareResultWithFriends');
          modified = true;
          break;
        }
      }
    }
  }
  
  if (modified) {
    content = lines.join('\n');
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// components 디렉토리의 모든 TestClient 파일 찾기
const files = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('TestClient.tsx'))
  .map(file => path.join(componentsDir, file));

let fixedCount = 0;
files.forEach(file => {
  try {
    if (fixResultScreenShareWithFriends(file)) {
      console.log(`Fixed: ${path.basename(file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);

