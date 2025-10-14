# 신규 테스트 개발 가이드라인

애착 스타일 테스트 개발 과정에서 겪은 문제점들을 바탕으로 작성된 체크리스트입니다.

## 🚨 주요 문제점 및 해결 방법

### 1. 다국어 데이터 구조 문제
**문제**: `AttachmentQuestion`의 `question`, `options`가 `string`이 아닌 `Record<string, string>`이어야 함
```typescript
// ❌ 잘못된 구조
question: string;
options: { a: string; b: string; c: string; d: string; };

// ✅ 올바른 구조
question: Record<string, string>;
options: {
  a: Record<string, string>;
  b: Record<string, string>;
  c: Record<string, string>;
  d: Record<string, string>;
};
```
**체크**: 모든 텍스트 필드가 `{ko, en, ja, zh, zhTW, vi, id}` 구조인지 확인

### 2. 따옴표 스타일 규칙
**규칙**: 
- 한국어, 영어: 큰따옴표 `""`
- 나머지 언어: 일본식 괄호 `「」`

```typescript
// ✅ 올바른 예시
ko: '"바쁘겠지" 여유롭게 기다림',
en: '"They must be busy" and wait calmly',
ja: '「忙しいんだろう」と余裕を持って待つ',
zh: '「他们一定很忙」 平静地等待',
```

### 3. localeKey 정의 및 타입 캐스팅
**문제**: `localeKey`가 정의되지 않거나 타입 에러 발생

```typescript
// ✅ 컴포넌트 상단에 정의
const getLocaleKey = (locale: string): string => {
  if (locale === 'zh-CN') return 'zh';
  if (locale === 'zh-TW') return 'zhTW';
  return locale;
};
const localeKey = getLocaleKey(locale);

// ✅ 모든 사용처에서 타입 캐스팅
result.title[localeKey as keyof typeof result.title]
```

### 4. messages 파일 번역 누락
**문제**: 일부 언어의 messages 파일에 번역 추가 안됨
**해결**: 7개 언어 모두 동시에 번역 추가

**필수 번역 구조**:
```json
{
  "attachmentTest": {
    "startMessage": {
      "line1": "...",
      "line2": "...",
      "line3": "...",
      "line4": "...",
      "line5": "...",
      "line6": "..."
    },
    "ui": {
      "startTest": "...",
      "participants": "...",
      "progress": "...",
      "shareResult": "...",
      "retake": "...",
      "otherTests": "...",
      "shareWithFriends": "...",
      "similarTests": "...",
      "popularTests": "..."
    },
    "result": {
      "analyzing": "...",
      "completed": "...",
      "showResult": "...",
      "characteristics": "...",
      "relationshipPattern": "...",
      "advice": "...",
      "bestMatch": "...",
      "goodMatch": "...",
      "carefulMatch": "...",
      "difficultMatch": "..."
    }
  }
}
```

### 5. 하드코딩 텍스트 i18n 변환
**문제**: UI 텍스트가 하드코딩되어 번역 안됨
```typescript
// ❌ 하드코딩
<h2>테스트 시작하기</h2>

// ✅ i18n 사용
<h2>{t('ui.startTest')}</h2>
```

### 6. 옵션 셔플링 로직
**문제**: `options` 객체를 배열로 잘못 처리
```typescript
// ✅ 올바른 처리
const optionsArray = [
  { key: 'a', text: optionsObj.a[localeKey] || optionsObj.a.ko },
  { key: 'b', text: optionsObj.b[localeKey] || optionsObj.b.ko },
  // ...
];

// useEffect 의존성에 localeKey 추가
}, [currentQuestion, started, localeKey]);
```

### 7. Supabase 연결 및 play_count 처리
**문제**: `playCount` vs `play_count` 필드명 불일치
```typescript
// ✅ 둘 다 처리
formatPlayCount(test.playCount || test.play_count || 0, locale)
```

### 8. tags 필드 파싱 에러
**문제**: `test.tags.includes is not a function`
```typescript
// ✅ 안전한 처리
let tagsArray = test.tags;
if (typeof tagsArray === 'string') {
  try {
    tagsArray = JSON.parse(tagsArray);
  } catch (e) {
    return false;
  }
}
if (!Array.isArray(tagsArray)) {
  return false;
}
```

## 📋 개발 순서 권장사항

1. **인터페이스 다국어 구조로 설계**
   - `AttachmentQuestion`, `AttachmentResult` 인터페이스 정의

2. **데이터 작성**
   - 12개 질문 + 4개 결과 다국어 데이터 작성
   - 따옴표 스타일 규칙 적용

3. **번역 파일 추가**
   - messages 파일 7개 언어 모두 번역 추가 (ko, en, ja, zh-CN, zh-TW, vi, id)

4. **컴포넌트 구현**
   - 하드코딩 텍스트를 i18n으로 변환
   - `localeKey` 정의 및 타입 캐스팅
   - 옵션 셔플링 로직 구현

5. **Supabase 연결**
   - 테스트 메타데이터 추가
   - play_count 처리

6. **에러 처리**
   - tags 필드 파싱 에러 처리
   - formatPlayCount 에러 처리

7. **테스트 및 검증**
   - 모든 언어별 테스트
   - UI/UX 일관성 확인

## 🔍 체크리스트

### 개발 전
- [ ] 인터페이스가 다국어 구조로 설계되었는가?
- [ ] 따옴표 스타일 규칙을 적용했는가?

### 개발 중
- [ ] 모든 하드코딩 텍스트를 i18n으로 변환했는가?
- [ ] localeKey를 올바르게 정의하고 타입 캐스팅했는가?
- [ ] 옵션 셔플링 로직이 올바르게 구현되었는가?

### 개발 후
- [ ] 7개 언어 모두 번역이 추가되었는가?
- [ ] 모든 언어에서 테스트가 정상 작동하는가?
- [ ] UI/UX가 기존 테스트와 일관성이 있는가?
- [ ] Supabase 연결이 정상인가?

이 가이드라인을 따라하면 애착 스타일 테스트에서 겪은 문제들을 피할 수 있습니다.
