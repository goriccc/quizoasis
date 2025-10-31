# ⚡ 빠른 시작: 새 테스트 배포

## 🎯 핵심만 정리

### 문제 상황
- Supabase SQL만 실행하면 → 썸네일은 보임, 하지만 **404 에러**
- 이유: 코드가 Vercel에 배포 안됨

### 해결책
**"코드 먼저 배포 → 그 후 SQL 실행"**

---

## 🚀 3단계로 끝내기

### 1️⃣ 개발 완료
```bash
# 필수 파일 준비:
# ✅ lib/[TestName]Data.ts
# ✅ components/[TestName]TestClient.tsx
# ✅ app/[locale]/test/[slug]/page.tsx 라우팅
# ✅ supabase/insert-[test].sql
```

### 2️⃣ 배포 (자동화 ⚡)

**Node.js:**
```bash
npm run deploy:new [test-name]
```

**Windows:**
```cmd
scripts\deploy-new-test.bat [test-name]
```

### 3️⃣ SQL 실행 (배포 완료 후)
```
Vercel 배포 완료 확인 (3-5분)
  ↓
Supabase → SQL Editor → insert-[test].sql 실행
  ↓
완료! 🎉
```

---

## 📊 시간 비교

| 방법 | 시간 | 실수 위험 |
|------|------|----------|
| **자동화 스크립트** | 5분 | 낮음 ⭐⭐⭐⭐⭐ |
| **수동 프로세스** | 10분 | 중간 ⭐⭐⭐ |
| **SQL 먼저 실행** | 5분 | 매우 높음 ⭐ |

---

## ❌ 실수 방지

### 절대 하지 마세요!
```
Supabase SQL 먼저 실행 → 404 에러 ❌
```

### 올바른 순서
```
코드 배포 → SQL 실행 ✅
```

---

## 📚 더 자세히 알고 싶다면

- **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - 빠른 가이드
- **[NEW_TEST_WORKFLOW.md](./NEW_TEST_WORKFLOW.md)** - 상세 워크플로우
- **[TEST_DEVELOPMENT_GUIDELINES.md](./TEST_DEVELOPMENT_GUIDELINES.md)** - 개발 가이드

---

**🎉 이제 안심하고 새 테스트를 추가하세요!**

