// Face-api.js와 TensorFlow.js 로드 스크립트
// TensorFlow.js 1.7.4와 BlazeFace 0.0.7 조합 사용 (안정 버전)

// Face-api.js 초기화 함수 (재사용을 위해 분리)
function initializeFaceApi() {
  // 모델 로드 함수 - CDN에서 로드
  window.loadFaceApiModels = async function() {
        try {
          // GitHub raw URL에서 모델 로드 (가장 안정적)
          const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights';
          
          console.log('Loading Face-api.js models from CDN:', MODEL_URL);
          // 얼굴 감지만 필요하므로 tinyFaceDetector만 로드 (속도 최적화)
          await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
          console.log('Face-api.js models loaded successfully with BlazeFace support');
          return true;
        } catch (error) {
          console.error('Failed to load Face-api.js models from GitHub:', error);
          // jsDelivr CDN으로 재시도
          try {
            console.log('Retrying with jsDelivr CDN...');
            const JSDELIVR_URL = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights';
            // 얼굴 감지만 필요하므로 tinyFaceDetector만 로드 (속도 최적화)
            await faceapi.nets.tinyFaceDetector.loadFromUri(JSDELIVR_URL);
            console.log('Face-api.js models loaded from jsDelivr CDN');
            return true;
          } catch (retryError) {
            console.error('Failed to load models from jsDelivr CDN:', retryError);
            // 로컬 경로로 재시도
            try {
              console.log('Retrying with local model path...');
              // 얼굴 감지만 필요하므로 tinyFaceDetector만 로드 (속도 최적화)
              await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
              console.log('Face-api.js models loaded from local path');
              return true;
            } catch (localError) {
              console.error('Failed to load models from local path:', localError);
              return false;
            }
          }
        }
      };
      
      // BlazeFace 모델 캐싱
      let cachedBlazeFaceModel = null;
      
      // 얼굴 감지 함수 - BlazeFace 우선, 실패시 TinyFaceDetector 사용
      window.detectFaces = async function(imageElement) {
        try {
          // 먼저 Face-api.js가 로드되었는지 확인
          if (typeof faceapi === 'undefined') {
            console.error('Face-api.js is not loaded');
            throw new Error('Face-api.js가 로드되지 않았습니다');
          }
          
          // 이미지 크기 최적화 (최대 512px로 리사이즈)
          const maxSize = 512;
          let optimizedImage = imageElement;
          let scaleX = 1, scaleY = 1;
          
          if (imageElement.width > maxSize || imageElement.height > maxSize) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            if (imageElement.width > imageElement.height) {
              canvas.width = maxSize;
              canvas.height = (imageElement.height / imageElement.width) * maxSize;
            } else {
              canvas.height = maxSize;
              canvas.width = (imageElement.width / imageElement.height) * maxSize;
            }
            
            scaleX = imageElement.width / canvas.width;
            scaleY = imageElement.height / canvas.height;
            
            ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
            optimizedImage = canvas;
            console.log('Image resized from', imageElement.width + 'x' + imageElement.height, 'to', canvas.width + 'x' + canvas.height);
          }
          
          // BlazeFace로 먼저 시도 (가장 빠름)
          if (typeof blazeface !== 'undefined') {
            try {
              // 모델 캐싱 사용
              if (!cachedBlazeFaceModel) {
                console.log('Loading BlazeFace model...');
                cachedBlazeFaceModel = await blazeface.load();
              }
              
              const predictions = await cachedBlazeFaceModel.estimateFaces(optimizedImage, false);
              
              if (predictions && predictions.length > 0) {
                // BlazeFace 결과를 face-api.js 형식으로 변환 (원본 크기에 맞게 스케일 조정)
                const detections = predictions.map(pred => {
                  const topLeft = Array.isArray(pred.topLeft) ? pred.topLeft : [pred.topLeft.x, pred.topLeft.y];
                  const bottomRight = Array.isArray(pred.bottomRight) ? pred.bottomRight : [pred.bottomRight.x, pred.bottomRight.y];
                  const probability = pred.probability || pred.probabilities?.[1] || 0.9;
                  
                  return {
                    detection: {
                      box: {
                        x: topLeft[0] * scaleX,
                        y: topLeft[1] * scaleY,
                        width: (bottomRight[0] - topLeft[0]) * scaleX,
                        height: (bottomRight[1] - topLeft[1]) * scaleY
                      },
                      score: probability
                    }
                  };
                });
                console.log('BlazeFace detected', detections.length, 'faces');
                return detections;
              } else {
                console.log('BlazeFace found no faces, falling back to TinyFaceDetector');
              }
            } catch (blazeError) {
              console.log('BlazeFace detection failed, falling back to TinyFaceDetector:', blazeError);
            }
          } else {
            console.log('BlazeFace is not available, using TinyFaceDetector');
          }
          
          // 모델이 로드되었는지 확인
          if (!faceapi.nets || !faceapi.nets.tinyFaceDetector || !faceapi.nets.tinyFaceDetector.params) {
            console.error('Face-api.js models are not loaded yet');
            throw new Error('얼굴 감지 모델이 로드되지 않았습니다. 모델을 먼저 로드해주세요.');
          }
          
          // BlazeFace 실패 시 TinyFaceDetector 사용 (최적화된 설정)
          console.log('Using TinyFaceDetector...');
          const detections = await faceapi.detectAllFaces(optimizedImage, new faceapi.TinyFaceDetectorOptions({
            inputSize: 160, // 더 작은 inputSize로 속도 향상 (기본값 416 → 160)
            scoreThreshold: 0.5
          })); // withFaceLandmarks, withFaceExpressions 제거하여 속도 향상
          
          // 결과를 원본 크기에 맞게 스케일 조정
          const scaledDetections = detections.map(detection => ({
            detection: {
              box: {
                x: detection.detection.box.x * scaleX,
                y: detection.detection.box.y * scaleY,
                width: detection.detection.box.width * scaleX,
                height: detection.detection.box.height * scaleY
              },
              score: detection.detection.score
            }
          }));
          
          console.log('TinyFaceDetector detected', scaledDetections.length, 'faces');
          return scaledDetections || [];
        } catch (error) {
          console.error('Face detection failed:', error);
          throw error;
        }
      };
      
      // 얼굴 품질 계산 함수
      window.calculateFaceQuality = function(detection, imageWidth, imageHeight) {
        if (!detection || !detection.detection) return 0;
        
        const box = detection.detection.box;
        const faceArea = box.width * box.height;
        const imageArea = imageWidth * imageHeight;
        const faceRatio = faceArea / imageArea;
        
        // 얼굴이 이미지의 10-50%를 차지하는 것이 이상적
        let quality = 0;
        if (faceRatio >= 0.1 && faceRatio <= 0.5) {
          quality = 80 + Math.random() * 20; // 80-100
        } else if (faceRatio >= 0.05 && faceRatio <= 0.7) {
          quality = 60 + Math.random() * 20; // 60-80
        } else {
          quality = 40 + Math.random() * 20; // 40-60
        }
        
        return Math.min(100, Math.max(0, quality));
  };
}

// TensorFlow.js 1.7.4 로드
const tfScript = document.createElement('script');
tfScript.src = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js';
tfScript.onload = function() {
  console.log('TensorFlow.js 1.7.4 loaded');
  
  // BlazeFace 0.0.7 로드
  const blazeFaceScript = document.createElement('script');
  blazeFaceScript.src = 'https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface@0.0.7/dist/blazeface.js';
  blazeFaceScript.onload = function() {
    console.log('BlazeFace 0.0.7 loaded');
    
    // Face-api.js 로드
    const faceApiScript = document.createElement('script');
    faceApiScript.src = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js';
    faceApiScript.onload = function() {
      console.log('Face-api.js loaded');
      initializeFaceApi();
    };
    faceApiScript.onerror = function() {
      console.error('Failed to load Face-api.js');
    };
    document.head.appendChild(faceApiScript);
  };
  
  blazeFaceScript.onerror = function() {
    console.error('Failed to load BlazeFace, proceeding without it');
    // BlazeFace 실패 시 Face-api.js만 로드
    const faceApiScript = document.createElement('script');
    faceApiScript.src = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js';
    faceApiScript.onload = function() {
      console.log('Face-api.js loaded (without BlazeFace)');
      initializeFaceApi();
    };
    faceApiScript.onerror = function() {
      console.error('Failed to load Face-api.js');
    };
    document.head.appendChild(faceApiScript);
  };
  document.head.appendChild(blazeFaceScript);
};

tfScript.onerror = function() {
  console.error('Failed to load TensorFlow.js');
};
document.head.appendChild(tfScript);
