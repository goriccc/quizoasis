# 인기/HOT 뱃지 수동 업데이트 가이드

## 방법 1: Supabase SQL 직접 실행 (가장 빠름)

Supabase Dashboard → SQL Editor에서 다음 SQL 실행:

```sql
-- 뱃지 타입 업데이트 함수 호출
SELECT update_test_badges();
```

이렇게 하면 즉시 뱃지가 배치됩니다!

## 방법 2: API 엔드포인트 직접 호출

### 로컬 개발 환경
```bash
# 터미널에서 실행
curl -X GET http://localhost:3000/api/cron/update-badges
```

또는 브라우저에서 직접 접속:
```
http://localhost:3000/api/cron/update-badges
```

### 프로덕션 환경
```bash
# Authorization 헤더 필요 (환경 변수 CRON_SECRET 사용)
curl -X GET https://your-domain.com/api/cron/update-badges \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

## 방법 3: Supabase SQL Editor에서 직접 뱃지 할당 (테스트용)

특정 테스트에 직접 뱃지를 할당하려면:

```sql
-- 특정 테스트에 "인기" 뱃지 할당
UPDATE tests 
SET badge_type = 'popular' 
WHERE slug = 'your-test-slug';

-- 특정 테스트에 "HOT" 뱃지 할당
UPDATE tests 
SET badge_type = 'hot' 
WHERE slug = 'your-test-slug';

-- 모든 뱃지 제거
UPDATE tests SET badge_type = NULL;
```

## 확인 방법

1. **로컬 개발 서버 실행**
   ```bash
   npm run dev
   ```

2. **브라우저에서 확인**
   - 홈페이지: http://localhost:3000
   - 테스트 페이지: http://localhost:3000/ko/test/your-test-slug

3. **Supabase에서 확인**
   ```sql
   SELECT slug, badge_type 
   FROM tests 
   WHERE badge_type IS NOT NULL;
   ```

## 주의사항

- 로컬과 프로덕션은 같은 Supabase 데이터베이스를 사용한다면 동일한 뱃지가 표시됩니다
- 별도의 로컬 Supabase를 사용한다면 로컬 DB에만 적용됩니다
- 프로덕션 뱃지는 매일 0시에 자동으로 갱신됩니다

