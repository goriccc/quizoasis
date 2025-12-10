-- K-POP 팬덤 능력 고사 테스트의 created_at을 최신으로 업데이트
UPDATE tests 
SET created_at = NOW(), updated_at = NOW()
WHERE slug = 'kpop-exam-test';

-- 확인
SELECT 
  slug, 
  title->>'ko' as title_ko, 
  created_at, 
  updated_at
FROM tests 
WHERE slug = 'kpop-exam-test';

