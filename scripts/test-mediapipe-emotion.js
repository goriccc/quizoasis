// MediaPipe 감정 감지 테스트 스크립트
// 사용법: node scripts/test-mediapipe-emotion.js <이미지경로>

const { FaceLandmarker, FilesetResolver } = require('@mediapipe/tasks-vision');
const fs = require('fs');
const path = require('path');

async function testMediaPipeEmotion(imagePath) {
  try {
    console.log('MediaPipe FaceLandmarker 초기화 중...');
    
    // MediaPipe 모델 파일 경로 (public 폴더 기준)
    const wasmPath = path.join(__dirname, '../public/mediapipe');
    const modelAssetPath = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

    // Note: Node.js 환경에서는 FilesetResolver가 다르게 동작할 수 있습니다
    // 브라우저 환경에서만 정확히 테스트 가능합니다
    console.log('\n⚠️  주의: MediaPipe FaceLandmarker는 주로 브라우저 환경에서 동작합니다.');
    console.log('Node.js에서 직접 실행하려면 다른 접근이 필요할 수 있습니다.\n');
    
    console.log('대신 현재 코드의 감정 감지 로직을 확인해보겠습니다...\n');
    
    // 이미지 파일 존재 확인
    if (!fs.existsSync(imagePath)) {
      console.error(`❌ 이미지 파일을 찾을 수 없습니다: ${imagePath}`);
      return;
    }
    
    console.log(`✅ 이미지 파일 발견: ${imagePath}`);
    console.log(`   파일 크기: ${(fs.statSync(imagePath).size / 1024).toFixed(2)} KB\n`);
    
    console.log('현재 사용 중인 감정 감지 로직:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`
1. MediaPipe Blendshapes 매핑:
   - smile/mouthSmile → happy
   - frown/mouthFrown → sad
   - jawOpen → surprised (단, browDown과 함께면 angry)
   - mouthClose/jawClench → angry
   - browDownLeft/browDownRight → angry (1.5배 가중치)
   - browInnerUp → surprised + fearful
   - noseSneerLeft/Right → disgusted
   - mouthRoll/lipSuck → contempt

2. 조합 규칙:
   - jawOpen > 0.3 AND browDown > 0.2 → angry 강화, surprised 감소
   - mouthFrown > 0.3 AND browDown > 0.2 → angry 추가
   - mouthSmile < 0.1 AND browDown > 0.3 → happy 70% 감소

3. Dominant emotion 선택:
   - 모든 감정을 정렬하고 가장 높은 값을 dominant로 선택
   - 임계값 없이 그대로 사용
    `);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('💡 브라우저에서 실제 테스트를 하려면:');
    console.log('   1. 개발 서버 실행: npm run dev');
    console.log('   2. 테스트 페이지 접속: http://localhost:3000/ko/test/honest-facial-evaluation');
    console.log('   3. 화난 사진 업로드');
    console.log('   4. 브라우저 개발자 도구 콘솔에서 감정 값을 확인\n');
    
    console.log('현재 감정 감지 로직의 잠재적 문제점:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`
1. MediaPipe blendshape 이름 매칭 문제:
   - toLowerCase()로 변환하지만 실제 MediaPipe blendshape 이름이 다를 수 있음
   - 예: 'MouthSmileLeft' vs 'mouthSmileLeft' vs 'mouth_smile_left'

2. jawOpen과 browDown 조합 임계값:
   - jawOpen > 0.3 && browDown > 0.2 조건이 충족되지 않을 수 있음
   - 실제 값이 이 임계값보다 낮을 경우 surprised로 잘못 분류됨

3. mouthSmile 감지 문제:
   - 화난 표정에서도 미묘한 미소가 감지될 수 있음
   - mouthSmile이 0.1 이상이면 happy 감소가 적용되지 않음

4. Blendshape 점수 정규화:
   - MediaPipe blendshape 점수가 0-1 범위인지 확인 필요
   - 점수가 매우 작은 경우 누적되어도 dominant가 되지 않을 수 있음
    `);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('🔍 디버깅을 위한 제안:');
    console.log('1. HonestFacialEvaluationTestClient.tsx의 analyzeEmotionsFromBlendshapes 함수에');
    console.log('   console.log를 추가하여 실제 감지된 blendshapes와 점수를 확인');
    console.log('2. 각 감정 점수를 console.log로 출력하여 dominant emotion 확인');
    console.log('3. 조합 규칙이 적용되었는지 확인\n');
    
  } catch (error) {
    console.error('❌ 오류 발생:', error.message);
    console.error(error.stack);
  }
}

// 명령줄 인자에서 이미지 경로 가져오기
const imagePath = process.argv[2];

if (!imagePath) {
  console.log('사용법: node scripts/test-mediapipe-emotion.js <이미지경로>');
  console.log('예시: node scripts/test-mediapipe-emotion.js public/test-images/angry-face.jpg');
  process.exit(1);
}

testMediaPipeEmotion(imagePath);

