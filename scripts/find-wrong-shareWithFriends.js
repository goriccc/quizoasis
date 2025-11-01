const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const koJson = JSON.parse(fs.readFileSync(path.join(messagesDir, 'ko.json'), 'utf8'));

console.log('=== Checking for shareWithFriends = "결과를 친구에게 공유하기" ===\n');

let foundIssues = [];

function checkObject(obj, prefix = '') {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      checkObject(value, fullKey);
    } else if (typeof value === 'string') {
      if (fullKey.endsWith('.shareWithFriends') && value === '결과를 친구에게 공유하기') {
        foundIssues.push(fullKey);
        console.log(`❌ ${fullKey}: "${value}"`);
      }
    }
  }
}

checkObject(koJson);

console.log(`\n=== Summary ===`);
console.log(`Total issues found: ${foundIssues.length}`);
console.log('\n✅ All other shareWithFriends keys should be "친구와 같이 해보기"\n');

