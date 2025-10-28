# Face-api.js 모델 파일

이 폴더에는 Face-api.js에서 사용하는 모델 파일들이 저장됩니다.

## 필요한 모델 파일들:

1. **tiny_face_detector_model-weights_manifest.json**
2. **tiny_face_detector_model-shard1**
3. **face_landmark_68_model-weights_manifest.json**
4. **face_landmark_68_model-shard1**
5. **face_recognition_model-weights_manifest.json**
6. **face_recognition_model-shard1**
7. **face_recognition_model-shard2**
8. **face_expression_model-weights_manifest.json**
9. **face_expression_model-shard1**

## 모델 다운로드:

이 모델들은 다음 명령어로 다운로드할 수 있습니다:

```bash
# Face-api.js 모델 다운로드
npx face-api-download-models public/models
```

또는 수동으로 다음 URL에서 다운로드할 수 있습니다:
- https://github.com/justadudewhohacks/face-api.js/tree/master/weights

## 모델 용도:

- **tiny_face_detector**: 얼굴 감지
- **face_landmark_68**: 얼굴 랜드마크 68개 포인트 감지
- **face_recognition**: 얼굴 인식
- **face_expression**: 얼굴 표정 감지

## 주의사항:

- 모델 파일들은 상당히 크므로 CDN이나 별도 서버에서 로드하는 것을 권장합니다.
- 프로덕션 환경에서는 모델 파일들을 압축하여 전송하는 것을 고려하세요.
