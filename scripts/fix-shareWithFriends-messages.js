const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const languages = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];

// Define translations for shareWithFriends
const translations = {
  ko: "친구와 같이 해보기",
  en: "Try with Friends",
  ja: "友達と一緒にやってみる",
  'zh-CN': "和朋友一起试试",
  'zh-TW': "和朋友一起試試",
  vi: "Thử với bạn bè",
  id: "Coba dengan Teman"
};

// Define translations for shareResultWithFriends
const resultTranslations = {
  ko: "결과를 친구에게 공유하기",
  en: "Share Result with Friends",
  ja: "結果を友人と共有する",
  'zh-CN': "与朋友分享结果",
  'zh-TW': "與朋友分享結果",
  vi: "Chia sẻ kết quả với bạn bè",
  id: "Bagikan Hasil ke Teman"
};

console.log('=== Fixing shareWithFriends in all message files ===\n');

languages.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let modified = false;

  function checkObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkObject(value);
      } else if (typeof value === 'string') {
        if (value === resultTranslations[locale] && key === 'shareWithFriends') {
          // Found wrong shareWithFriends value
          const objPath = key;
          console.log(`Found wrong ${objPath} in ${locale}.json`);
          modified = true;
        }
      }
    }
  }

  // More efficient: directly search and replace
  let contentStr = JSON.stringify(content);
  
  // If content contains the wrong value
  if (contentStr.includes(`"shareWithFriends":"${resultTranslations[locale]}"`)) {
    console.log(`Fixing ${locale}.json...`);
    
    // Use regex to fix all instances
    contentStr = contentStr.replace(
      new RegExp(`"shareWithFriends":"${resultTranslations[locale].replace(/"/g, '\\"')}"`, 'g'),
      `"shareWithFriends":"${translations[locale].replace(/"/g, '\\"')}","shareResultWithFriends":"${resultTranslations[locale].replace(/"/g, '\\"')}"`
    );
    
    content = JSON.parse(contentStr);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Fixed ${locale}.json\n`);
  } else {
    console.log(`✓ ${locale}.json is already correct\n`);
  }
});

console.log('Done!');

