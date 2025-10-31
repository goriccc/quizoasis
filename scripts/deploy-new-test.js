#!/usr/bin/env node

/**
 * 새 테스트 배포 자동화 스크립트
 * 
 * 사용법: node scripts/deploy-new-test.js [test-name]
 * 예시: node scripts/deploy-new-test.js planner-vs-spontaneous-test
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const testName = process.argv[2];

if (!testName) {
  console.error('❌ 테스트 이름을 입력하세요.');
  console.log('');
  console.log('사용법: node scripts/deploy-new-test.js [test-name]');
  console.log('예시: node scripts/deploy-new-test.js my-new-test');
  process.exit(1);
}

console.log('🎯 새 테스트 배포 프로세스 시작...\n');
console.log(`📋 테스트 이름: ${testName}\n`);

// 1. 필수 파일 존재 확인
const requiredFiles = [
  `lib/${testName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Data.ts`,
  `components/${testName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}TestClient.tsx`,
  `supabase/insert-${testName}.sql`
];

console.log('📁 필수 파일 확인 중...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} (없음)`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ 일부 필수 파일이 없습니다. 먼저 파일을 생성하세요.');
  process.exit(1);
}

// 2. 빌드 테스트
console.log('\n📦 빌드 테스트 중...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ 빌드 성공!\n');
} catch (error) {
  console.log('\n❌ 빌드 실패! 코드 오류를 먼저 수정하세요.');
  process.exit(1);
}

// 3. Git 상태 확인
console.log('📊 Git 상태 확인 중...');
try {
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (!status.trim()) {
    console.log('  ⚠️  커밋할 변경사항이 없습니다.');
    process.exit(0);
  }
  console.log('  📝 변경사항 확인됨\n');
} catch (error) {
  console.log('  ❌ Git 저장소 오류');
  process.exit(1);
}

// 4. 배포 여부 확인
console.log('🚀 배포를 진행할까요?');
console.log('');
console.log('⚠️  주의: 이 작업은 Vercel에 자동 배포를 트리거합니다.');
console.log('');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('배포 진행? (y/N): ', (answer) => {
  if (answer.toLowerCase() !== 'y') {
    console.log('\n❌ 배포 취소됨.');
    rl.close();
    process.exit(0);
  }

  // 5. Git 커밋 & 푸시
  console.log('\n📤 Git 푸시 중...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "feat: Add ${testName} test"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('\n✅ Git 푸시 완료!');
  } catch (error) {
    console.log('\n❌ Git 푸시 실패!');
    rl.close();
    process.exit(1);
  }

  console.log('\n⏳ Vercel 배포 대기 중...');
  console.log('');
  console.log('📍 다음 단계:');
  console.log('  1. Vercel 배포 완료 확인 (3-5분 소요)');
  console.log('     → https://vercel.com 대시보드 확인');
  console.log('');
  console.log('  2. 배포 완료 후 Supabase에서 SQL 실행');
  console.log(`     → supabase/insert-${testName}.sql`);
  console.log('');
  console.log('  3. 실제 사이트에서 테스트 확인');
  console.log('     → https://myquizoasis.com/ko/test/' + testName);
  console.log('');
  console.log('✅ 스크립트 완료!\n');

  rl.close();
});

