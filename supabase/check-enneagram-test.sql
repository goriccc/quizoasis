-- 에니어그램 테스트 데이터 확인 및 updated_at 강제 업데이트
-- 이 쿼리를 실행하여 에니어그램 테스트가 최신인지 확인하고, 필요시 updated_at을 업데이트합니다

-- 1. 에니어그램 테스트 확인
SELECT 
  slug,
  title->>'ko' as title_ko,
  updated_at,
  created_at,
  play_count
FROM tests
WHERE slug = 'enneagram-test';

-- 2. updated_at을 현재 시간으로 강제 업데이트 (최신으로 만들기)
UPDATE tests
SET updated_at = NOW()
WHERE slug = 'enneagram-test';

-- 3. 업데이트 후 확인
SELECT 
  slug,
  title->>'ko' as title_ko,
  updated_at,
  created_at
FROM tests
WHERE slug = 'enneagram-test';

-- 4. 전체 테스트 목록 (updated_at 기준 정렬)
SELECT 
  slug,
  title->>'ko' as title_ko,
  updated_at,
  created_at
FROM tests
ORDER BY 
  COALESCE(updated_at, created_at) DESC
LIMIT 10;

