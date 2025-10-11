# 카카오톡 공유 기능 설정 가이드

## 🎯 개요
MBTI 테스트 결과를 카카오톡으로 공유할 수 있는 기능을 구현했습니다.

## 📋 설정 단계

### 1️⃣ **Kakao Developers 계정 생성 및 앱 등록**

#### A. 계정 생성
1. **Kakao Developers 접속**
   - URL: https://developers.kakao.com/
   - 카카오 계정으로 로그인

2. **내 애플리케이션 등록**
   - 상단 메뉴에서 `내 애플리케이션` 클릭
   - `애플리케이션 추가하기` 버튼 클릭
   - 앱 이름 입력: `QuizOasis` (또는 원하는 이름)
   - 회사명 입력 (선택)
   - 저장

#### B. 앱 키 확인
앱을 생성하면 다음 키들이 자동으로 생성됩니다:

```
앱 정보 → 앱 키
├── REST API 키: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
├── JavaScript 키: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ⭐ (이것 사용!)
├── Admin 키: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
└── Native 앱 키: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**JavaScript 키**를 복사해두세요!

### 2️⃣ **플랫폼 설정**

#### A. 웹 플랫폼 등록
1. **앱 설정 → 플랫폼 → Web 플랫폼 등록**
2. **사이트 도메인 등록**
   ```
   개발 환경: http://localhost:3000
   운영 환경: https://your-domain.com
   ```
   - 여러 도메인 등록 가능 (개발/스테이징/운영)
   - HTTP와 HTTPS 구분하여 등록

#### B. Redirect URI 설정 (선택)
카카오 로그인을 사용하지 않는다면 생략 가능

### 3️⃣ **동의 항목 설정 (선택)**

카카오톡 공유만 사용하는 경우 필수는 아니지만, 설정 권장:

1. **제품 설정 → 카카오 로그인 → 동의항목**
2. 필요한 경우 항목 추가

### 4️⃣ **환경변수 설정**

프로젝트 루트에 `.env.local` 파일 생성 또는 수정:

```env
# Kakao JavaScript Key
NEXT_PUBLIC_KAKAO_JS_KEY=your_javascript_key_here
```

**예시**:
```env
NEXT_PUBLIC_KAKAO_JS_KEY=abc123def456ghi789jkl012mno345pq
```

⚠️ **중요**: 
- `NEXT_PUBLIC_` 접두사 필수 (클라이언트에서 접근 가능)
- `.env.local` 파일은 `.gitignore`에 포함되어야 함

### 5️⃣ **코드 구현 완료 ✅**

다음 기능이 이미 구현되어 있습니다:

#### A. SDK 로드 (app/layout.tsx)
```typescript
<Script
  src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
  onLoad={() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }}
/>
```

#### B. 공유 함수 (components/MBTITestClient.tsx)
```typescript
const shareToKakao = () => {
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: title,
      description: description,
      imageUrl: thumbnailUrl,
      link: {
        mobileWebUrl: currentUrl,
        webUrl: currentUrl,
      },
    },
    buttons: [
      {
        title: '테스트 하러 가기',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    ],
  });
};
```

## 🚀 테스트 방법

### 1️⃣ **로컬 환경 테스트**

1. **`.env.local` 파일 생성**
   ```bash
   # 프로젝트 루트에 생성
   NEXT_PUBLIC_KAKAO_JS_KEY=your_javascript_key_here
   ```

2. **개발 서버 재시작**
   ```bash
   # 현재 서버 중지 (Ctrl + C)
   npm run dev
   ```

3. **브라우저에서 테스트**
   - MBTI 테스트 완료
   - 카카오톡 공유 버튼 클릭
   - 카카오톡 공유 팝업 확인

### 2️⃣ **모바일 테스트**

1. **ngrok 등 터널링 도구 사용**
   ```bash
   npx ngrok http 3000
   ```

2. **생성된 HTTPS URL을 Kakao Developers에 등록**
   ```
   https://abc123.ngrok.io
   ```

3. **모바일 브라우저에서 접속하여 테스트**

### 3️⃣ **운영 환경 테스트**

1. **Vercel 환경변수 설정**
   - Vercel Dashboard → Settings → Environment Variables
   - `NEXT_PUBLIC_KAKAO_JS_KEY` 추가

2. **도메인 등록**
   - Kakao Developers에 운영 도메인 추가
   - 예: `https://quizoasis.vercel.app`

## 🎨 커스터마이징

### 공유 메시지 커스터마이징

결과별로 다른 메시지를 보내려면:

```typescript
const shareToKakao = () => {
  // 결과가 있는 경우 결과 포함
  const shareTitle = result 
    ? `나의 MBTI는 ${result.type}! ${result.title[locale]}`
    : title;
    
  const shareDescription = result
    ? result.description[locale]
    : description;

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDescription,
      imageUrl: thumbnailUrl,
      link: {
        mobileWebUrl: currentUrl,
        webUrl: currentUrl,
      },
    },
    buttons: [
      {
        title: '나도 테스트 하기',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    ],
  });
};
```

### 공유 이미지 변경

MBTI 결과별로 다른 이미지를 공유하려면:

```typescript
const shareImageUrl = result
  ? getThumbnailUrl(result.image) // 결과 이미지
  : getThumbnailUrl(thumbnail);   // 테스트 썸네일
```

## 📊 체크리스트

설정 전 확인사항:

- [ ] Kakao Developers 계정 생성
- [ ] 애플리케이션 등록 완료
- [ ] JavaScript 키 발급 확인
- [ ] 웹 플랫폼에 도메인 등록 (localhost:3000 포함)
- [ ] `.env.local` 파일에 키 추가
- [ ] 개발 서버 재시작
- [ ] 브라우저에서 공유 버튼 클릭 테스트

## ⚠️ 주의사항

### 1. **도메인 등록 필수**
- 등록되지 않은 도메인에서는 공유 기능이 작동하지 않습니다
- 개발 환경과 운영 환경 모두 등록 필요

### 2. **HTTPS 권장**
- 운영 환경에서는 반드시 HTTPS 사용
- 카카오톡 앱에서 HTTP는 차단될 수 있음

### 3. **이미지 URL**
- 공유 이미지는 반드시 외부에서 접근 가능한 URL이어야 함
- Supabase Storage URL 또는 CDN URL 사용
- `localhost` URL은 카카오톡에서 표시되지 않음

### 4. **썸네일 크기**
- 권장 크기: 800x400px 이상
- 최소 크기: 200x200px
- 형식: JPG, PNG

## 🔍 문제 해결

### Q1: "카카오톡 공유 기능을 초기화하는 중입니다" 알림이 계속 뜹니다
**A**: 다음을 확인하세요:
1. JavaScript 키가 올바르게 설정되었는지
2. 개발 서버를 재시작했는지
3. 브라우저 콘솔에서 Kakao SDK 로드 확인
   ```javascript
   console.log(window.Kakao.isInitialized());
   ```

### Q2: 공유는 되는데 이미지가 안 보입니다
**A**: 
1. Supabase Storage의 이미지가 Public으로 설정되어 있는지 확인
2. 이미지 URL을 브라우저에서 직접 열어서 접근 가능한지 확인
3. 카카오 개발자 도구에서 이미지 캐시 확인
   - Tools → 공유 디버거: https://developers.kakao.com/tool/debugger/sharing

### Q3: 로컬에서는 되는데 배포 후 안 됩니다
**A**:
1. Vercel 환경변수에 `NEXT_PUBLIC_KAKAO_JS_KEY` 추가했는지 확인
2. Kakao Developers에 배포된 도메인 등록했는지 확인
3. HTTPS로 접속하고 있는지 확인

## 📚 참고 자료

- Kakao Developers 공식 문서: https://developers.kakao.com/docs/latest/ko/message/js
- 메시지 템플릿 가이드: https://developers.kakao.com/docs/latest/ko/message/message-template
- 공유 디버거: https://developers.kakao.com/tool/debugger/sharing

## 🎉 완료!

위 단계를 완료하면 카카오톡 공유 기능이 정상적으로 작동합니다!

**다음 단계**:
1. Kakao Developers에서 JavaScript 키 발급
2. `.env.local` 파일에 키 추가
3. 개발 서버 재시작
4. 테스트!

---

**마지막 업데이트**: 2025-10-11
**버전**: 1.0.0

