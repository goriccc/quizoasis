#!/usr/bin/env node

/**
 * 라이브에서 404가 뜨는 테스트 확인 스크립트
 * SQL 파일의 slug와 라우팅을 비교
 */

const fs = require('fs');
const path = require('path');

// SQL 파일에서 slug 추출
function extractSlugsFromSQL() {
  const supabaseDir = path.join(__dirname, '..', 'supabase');
  const files = fs.readdirSync(supabaseDir).filter(f => f.startsWith('insert-') && f.endsWith('.sql'));
  
  const slugs = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(supabaseDir, file), 'utf8');
    
    // VALUES 다음 줄에 있는 slug 찾기
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // VALUES 라인 찾기
      if (line.includes('VALUES')) {
        // 다음 줄부터 slug 찾기
        for (let j = i + 1; j < lines.length; j++) {
          const match = lines[j].match(/^\s+'([a-z-]+)',?\s*$/);
          if (match && match[1]) {
            slugs.push(match[1]);
            break;
          }
        }
        break;
      }
    }
  });
  
  return slugs;
}

// 라우팅 파일에서 slug 추출
function extractSlugsFromRouting() {
  const routingFile = path.join(__dirname, '..', 'app', '[locale]', 'test', '[slug]', 'page.tsx');
  const content = fs.readFileSync(routingFile, 'utf8');
  
  const slugs = new Set();
  
  // if (slug === 'xxx') 패턴
  const ifPattern = /if\s*\(slug\s*===\s*'([a-z-]+)'\)/g;
  let match;
  while ((match = ifPattern.exec(content)) !== null) {
    slugs.add(match[1]);
  }
  
  // else if (slug === 'xxx') 패턴
  const elseIfPattern = /else\s+if\s*\(slug\s*===\s*'([a-z-]+)'\)/g;
  while ((match = elseIfPattern.exec(content)) !== null) {
    slugs.add(match[1]);
  }
  
  return Array.from(slugs);
}

// 메인 실행
try {
  const sqlSlugs = extractSlugsFromSQL();
  const routingSlugs = extractSlugsFromRouting();
  
  console.log('\n🔍 404 테스트 확인 중...\n');
  console.log(`📊 SQL 파일 테스트: ${sqlSlugs.length}개`);
  console.log(`📊 라우팅 테스트: ${routingSlugs.length}개\n`);
  
  // SQL에는 있지만 라우팅에 없는 테스트 (404 발생!)
  const missingInRouting = sqlSlugs.filter(slug => !routingSlugs.includes(slug));
  
  // 라우팅에는 있지만 SQL에 없는 테스트
  const missingInSQL = routingSlugs.filter(slug => !sqlSlugs.includes(slug));
  
  if (missingInRouting.length > 0) {
    console.log('❌ 404 에러 발생! (SQL에는 있지만 라우팅에 없음):');
    missingInRouting.forEach(slug => console.log(`   - ${slug}`));
    console.log();
  } else {
    console.log('✅ 모든 SQL 테스트가 라우팅에 존재함!\n');
  }
  
  if (missingInSQL.length > 0) {
    console.log('⚠️  라우팅에는 있지만 SQL에 없는 테스트:');
    missingInSQL.forEach(slug => console.log(`   - ${slug}`));
    console.log();
  }
  
  if (missingInRouting.length === 0 && missingInSQL.length === 0) {
    console.log('🎉 완벽합니다! 모든 테스트가 정상적으로 매칭됩니다!\n');
  }
  
} catch (error) {
  console.error('❌ 오류 발생:', error.message);
  process.exit(1);
}

