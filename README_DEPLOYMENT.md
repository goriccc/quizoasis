# 🚀 새 테스트 추가 및 배포 가이드

## 📋 빠른 요약

### 가장 효율적인 방법 (권장) ⭐⭐⭐⭐⭐

```bash
# 1️⃣ 개발 완료 후 (모든 파일 준비됨)
npm run deploy:new [test-name]

# 2️⃣ Vercel 배포 대기 (3-5분)
# https://vercel.com 대시보드 확인

# 3️⃣ 배포 완료 후 Supabase SQL 실행
# Supabase → SQL Editor → supabase/insert-[test].sql 실행

# ✅ 완료!
```

**Windows 사용자:**
```cmd
scripts\deploy-new-test.bat [test-name]
```

---

## 📖 전체 가이드

자세한 내용은 **[NEW_TEST_WORKFLOW.md](./NEW_TEST_WORKFLOW.md)** 참고

---

## 🎯 핵심 원칙

### ✅ DO (하세요)

1. **로컬 빌드 먼저** - `npm run build` 실행
2. **Git 푸시** - Vercel 자동 배포 트리거
3. **배포 완료 후 SQL** - Supabase에서 SQL 실행
4. **주간 배치 배포** - 주 2-3개 한 번에

### ❌ DON'T (하지 마세요)

1. **SQL 먼저 실행** - 404 에러 유발
2. **빌드 테스트 생략** - 배포 실패 위험
3. **개별 배포** - 시간 낭비
4. **Staging 없이 복잡한 기능** - 운영 리스크

---

## 📊 워크플로우 비교

| 방법 | 시간 | 위험도 | 추천도 | 용도 |
|------|------|--------|--------|------|
| **자동화 스크립트** | 5분 | 낮음 | ⭐⭐⭐⭐⭐ | 일상 업무 |
| **수동 프로세스** | 10분 | 중간 | ⭐⭐⭐⭐ | 학습/디버깅 |
| **긴급 추가** | 5분 | 높음 | ⭐⭐⭐ | 긴급 상황 |
| **Staging 활용** | 5분 | 낮음 | ⭐⭐⭐⭐⭐ | 복잡/다수 |

---

## 🛠 **자동화 스크립트 사용법**

### Node.js (모든 플랫폼)

```bash
npm run deploy:new [test-name]
```

### Windows 배치 파일

```cmd
scripts\deploy-new-test.bat [test-name]
```

### 스크립트가 하는 일

1. ✅ 필수 파일 확인
2. ✅ 빌드 테스트
3. ✅ Git 커밋 & 푸시
4. ✅ 다음 단계 안내

---

## 📝 체크리스트

### 새 테스트 추가 전

- [ ] `lib/[TestName]Data.ts` 생성
- [ ] `components/[TestName]TestClient.tsx` 생성
- [ ] `app/[locale]/test/[slug]/page.tsx` 라우팅 추가
- [ ] 메시지 파일 7개 언어 번역
- [ ] `supabase/insert-[test].sql` 생성
- [ ] 로컬에서 테스트 완료
- [ ] 빌드 성공 확인

### 배포 후

- [ ] Vercel 배포 완료 확인
- [ ] Supabase SQL 실행
- [ ] 실제 사이트 테스트
- [ ] 공유 기능 확인

---

## 🚨 문제 해결

### 404 에러 발생 시

**원인:** SQL 먼저 실행 + 코드 배포 안됨

**해결:**
1. Vercel 배포 확인
2. 배포 완료되면 SQL 실행

### 빌드 실패 시

**원인:** 코드 오류

**해결:**
1. 로컬 `npm run build` 확인
2. 오류 수정
3. 다시 배포

### Vercel 배포 안됨

**원인:** Git 푸시 안됨 또는 설정 오류

**해결:**
1. `git status` 확인
2. `git push origin main` 직접 실행
3. Vercel 대시보드 확인

---

## 📚 관련 문서

- **[NEW_TEST_WORKFLOW.md](./NEW_TEST_WORKFLOW.md)** - 상세 워크플로우
- **[DEPLOY.md](./DEPLOY.md)** - 최초 배포 가이드
- **[TEST_DEVELOPMENT_GUIDELINES.md](./TEST_DEVELOPMENT_GUIDELINES.md)** - 테스트 개발 가이드

---

## 💡 팁

### 시간 절약

- **주간 배치**: 매일 하나씩보다 주 2-3개 한 번에
- **템플릿 복사**: 기존 테스트 복사 후 수정
- **자동화 활용**: 스크립트 사용
- **SQL 미리 준비**: 개발 중 SQL 작성

### 안정성 확보

- **로컬 빌드**: 항상 먼저 테스트
- **점진적 배포**: 복잡한 건 Staging 먼저
- **백업**: 큰 변경 전 브랜치 생성
- **모니터링**: 배포 후 바로 확인

---

**🎉 Happy Deploying!**

