# 🎯 새 테스트 추가 워크플로우 (효율적인 배포 전략)

## 📌 문제 상황

런칭 후 Supabase에 SQL로 새 테스트를 추가하면:
- ✅ 썸네일은 Supabase에서 바로 보임
- ❌ 실제 테스트 페이지는 404 에러 (빌드/배포 안됨)

## 🚀 최적화된 워크플로우

### 시나리오별 전략

---

## 📅 **전략 1: 주간 배치 배포 (권장)**

**용도:** 일상적인 새 테스트 추가 (주 2-3개)

### 절차

#### 1️⃣ 개발 단계
```bash
# 로컬에서 새 테스트 개발
npm run dev

# 개발 순서:
# 1. lib/[testName]Data.ts 생성
# 2. components/[TestName]TestClient.tsx 생성
# 3. app/[locale]/test/[slug]/page.tsx 라우팅 추가
# 4. 메시지 번역 파일 추가 (모든 언어)
```

#### 2️⃣ Supabase 준비
```bash
# supabase/ 폴더에 SQL 파일 생성
# 예: supabase/insert-my-new-test.sql

# 내용:
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  play_count
) VALUES (
  'my-new-test',
  jsonb_build_object(
    'ko', '나의 새로운 테스트',
    'en', 'My New Test',
    'ja', '私の新しいテスト',
    'zh-CN', '我的新测试',
    'zh-TW', '我的新測試',
    'id', 'Tes Baru Saya',
    'vi', 'Bài Kiểm Tra Mới Của Tôi'
  ),
  jsonb_build_object(
    'ko', '테스트 설명...',
    'en', 'Test description...',
    'ja', 'テストの説明...',
    'zh-CN', '测试说明...',
    'zh-TW', '測試說明...',
    'id', 'Deskripsi tes...',
    'vi', 'Mô tả kiểm tra...'
  ),
  'test_thumbnail.jpg',
  'dating',
  'love',
  jsonb_build_object(
    'ko', ARRAY['관계'],
    'en', ARRAY['Relationships'],
    'ja', ARRAY['関係'],
    'zh-CN', ARRAY['关系'],
    'zh-TW', ARRAY['關係'],
    'id', ARRAY['Hubungan'],
    'vi', ARRAY['Mối quan hệ']
  ),
  0
);
```

#### 3️⃣ 로컬 테스트
```bash
# SQL은 아직 Supabase에 실행하지 않음
# 로컬에서만 테스트

# 1. 브라우저에서 http://localhost:3000/ko/test/my-new-test 접속
# 2. 모든 기능 테스트
# 3. 번역 확인 (모든 언어)
# 4. 빌드 테스트
npm run build
```

#### 4️⃣ Git 커밋 & 푸시
```bash
# 개발 완료 후 커밋
git add .
git commit -m "feat: Add new test - my-new-test"
git push origin main

# Vercel 자동 배포 트리거됨 ✅
```

#### 5️⃣ 배포 완료 후 Supabase SQL 실행
```bash
# Vercel 배포 완료 확인 (약 3-5분 소요)
# https://vercel.com 대시보드에서 확인

# 배포 성공 후 Supabase에서 SQL 실행
# Supabase → SQL Editor → insert-my-new-test.sql 실행
```

### 장점
- ✅ **빌드 오류 사전 발견**: 로컬에서 빌드 테스트
- ✅ **자동 배포**: Vercel이 Git 푸시 시 자동 배포
- ✅ **다운타임 없음**: 배포 후 즉시 SQL 실행
- ✅ **롤백 용이**: 문제 시 Git revert만으로 해결

---

## 🚨 **전략 2: 긴급 추가 배포**

**용도:** 긴급하게 테스트 추가 (지금 당장 필요)

### 절차

#### 1️⃣ 빠른 개발
```bash
# 최소 기능만 구현
# 필수:
# - lib/[testName]Data.ts
# - components/[TestName]TestClient.tsx
# - app/[locale]/test/[slug]/page.tsx 라우팅
# - 메시지 파일 (최소 ko, en)
```

#### 2️⃣ Supabase SQL 먼저 실행
```bash
# 왜냐하면 Vercel 배포는 3-5분 걸림
# 그 동안 썸네일이라도 보이게

# Supabase → SQL Editor → SQL 실행
```

#### 3️⃣ Git 커밋 & 푸시
```bash
# 즉시 커밋 & 푸시
git add .
git commit -m "feat: Add urgent test - [name]"
git push origin main
```

#### 4️⃣ 배포 대기 & 알림
```bash
# Vercel 대시보드 모니터링
# 배포 완료되면 테스트 가능 ✅
```

### 단점
- ⚠️ 잠깐 404 보일 수 있음 (3-5분)
- ⚠️ 빌드 오류 가능성

### 해결책
- 로컬 `npm run build` 미리 실행
- 빌드 에러 없으면 푸시

---

## 🔄 **전략 3: Staging 환경 활용 (프로덕션 보호)**

**용도:** 복잡한 테스트 또는 다수 테스트 동시 추가

### 설정

#### Vercel 환경 분리
```bash
# Vercel 대시보드에서:
# 1. 메인 프로젝트 (Production) 유지
# 2. 새 브랜치로 Staging 프로젝트 생성
#    예: quizoasis-staging

# Git 브랜치 전략:
# - main: Production
# - develop: Staging
# - feature/xxx: 개발
```

### 절차

#### 1️⃣ Staging에 먼저 배포
```bash
# develop 브랜치에서 개발
git checkout develop
git add .
git commit -m "feat: Add tests batch"
git push origin develop

# Vercel staging 프로젝트 자동 배포
# https://quizoasis-staging.vercel.app
```

#### 2️⃣ Staging에서 테스트
```bash
# 모든 기능 검증
# 최소 1-2일 테스트
```

#### 3️⃣ Production 배포
```bash
# 문제없으면 main으로 머지
git checkout main
git merge develop
git push origin main

# Production 자동 배포 ✅
```

### 장점
- ✅ 프로덕션 안정성 확보
- ✅ 충분한 테스트 시간
- ✅ 롤백 용이
- ✅ 사용자 경험 보호

---

## 🎯 **가장 효율적인 방법 (종합 권장)**

### 일상 업무 플로우 (최적화 버전)

#### **방법 A: 자동화 스크립트 사용 (가장 빠름!) ⚡**

```bash
# 전제: 모든 파일이 준비되어야 함
# - lib/[TestName]Data.ts ✅
# - components/[TestName]TestClient.tsx ✅
# - app/[locale]/test/[slug]/page.tsx 라우팅 ✅
# - supabase/insert-[test].sql ✅

# 한 번의 명령으로 모든 작업 수행! 🎉
npm run deploy:new [test-name]

# 예시:
npm run deploy:new planner-vs-spontaneous-test
```

**Windows 사용자:**
```cmd
scripts\deploy-new-test.bat [test-name]

예시:
scripts\deploy-new-test.bat my-new-test
```

**스크립트가 자동으로:**
1. ✅ 필수 파일 존재 확인
2. ✅ 빌드 테스트 실행
3. ✅ 빌드 성공 시 Git 푸시
4. ✅ Vercel 배포 트리거
5. ✅ 다음 단계 안내

---

#### **방법 B: 수동 프로세스**

```bash
# 1️⃣ 로컬 개발 (2-4시간)
npm run dev

# 2️⃣ 로컬 빌드 테스트 (5분)
npm run build
npm start

# 3️⃣ 빌드 성공하면 Git 푸시 (1분)
git add .
git commit -m "feat: Add [test-name]"
git push origin main

# 4️⃣ Vercel 배포 대기 (3-5분)
# ← 이 사이에 점심 먹기 ☕

# 5️⃣ 배포 완료 확인 후 Supabase SQL 실행 (30초)
# Supabase → SQL Editor → Execute

# ✅ 완료! 즉시 테스트 가능
```

### 시간 절약 팁

#### ✅ DO (하세요)
- 로컬 빌드 미리 테스트
- 복수 테스트는 한 번에 배포
- SQL 파일 미리 준비
- 오타 빌드 에러 방지

#### ❌ DON'T (하지 마세요)
- 매 테스트마다 개별 배포
- 빌드 테스트 없이 푸시
- SQL 실행 먼저 (404 유발)

---

## 📊 **시나리오별 비교표**

| 시나리오 | 빌드 시간 | 다운타임 | 추천도 | 용도 |
|---------|----------|---------|--------|------|
| **주간 배치** | 5분 | 없음 | ⭐⭐⭐⭐⭐ | 일상 업무 |
| **긴급 추가** | 5분 | 3-5분 | ⭐⭐⭐⭐ | 긴급 필요 |
| **Staging 활용** | 5분 | 없음 | ⭐⭐⭐⭐⭐ | 복잡/다수 |

---

## 🛠 **실전 체크리스트**

### 새 테스트 추가 체크리스트

```
개발 단계:
☐ lib/[testName]Data.ts 생성
☐ components/[TestName]TestClient.tsx 생성
☐ app/[locale]/test/[slug]/page.tsx 라우팅 추가
☐ 메시지 파일 추가 (7개 언어: ko, en, ja, zh-CN, zh-TW, id, vi)
☐ supabase/insert-[test].sql 생성

로컬 테스트:
☐ npm run dev 로 기능 확인
☐ 모든 언어 테스트
☐ 빌드 성공 확인 (npm run build)
☐ 빌드 오류 없음

배포:
☐ Git 커밋 & 푸시
☐ Vercel 배포 대기 (3-5분)
☐ 배포 성공 확인
☐ Supabase SQL 실행
☐ 실제 사이트에서 테스트
☐ 공유 기능 확인
```

---

## 🛠 **자동화 스크립트 (이미 준비됨!)**

### 스크립트 사용법

**Node.js 스크립트 (모든 플랫폼):**
```bash
npm run deploy:new [test-name]

# 예시:
npm run deploy:new my-new-test
```

**Windows 배치 파일:**
```cmd
scripts\deploy-new-test.bat [test-name]

예시:
scripts\deploy-new-test.bat planner-vs-spontaneous-test
```

### 스크립트 특징

✅ **자동화된 프로세스:**
- 필수 파일 존재 확인
- 빌드 테스트 실행
- Git 커밋 & 푸시
- 배포 다음 단계 안내

✅ **안전장치:**
- 빌드 실패 시 자동 중단
- 수동 확인 후 배포 진행
- 오류 메시지 명확화

✅ **시간 절약:**
- 수동 작업 자동화
- 반복 작업 최소화
- 실수 방지

---

## 📝 **결론**

### 가장 효율적인 방법

**"로컬 빌드 → Git 푸시 → 배포 완료 후 SQL"**

이 순서를 따르면:
- ✅ 빌드 오류 사전 발견
- ✅ 자동 배포 활용
- ✅ 다운타임 없음
- ✅ 운영 안정성 확보

### 핵심 포인트

1. **항상 로컬 빌드 먼저** (`npm run build`)
2. **Git 푸시가 배포 트리거** (Vercel 자동 배포)
3. **배포 완료 후 SQL 실행** (404 방지)
4. **매일 하나씩**보다는 **주 2-3개 배치 배포**가 효율적

---

**🎉 이제 안심하고 새 테스트를 추가하세요!**

