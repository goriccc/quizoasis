-- K-POP 팬덤 능력 고사 테스트 데이터 확인
SELECT 
  slug, 
  title->>'ko' as title_ko, 
  created_at, 
  updated_at, 
  play_count,
  type,
  category
FROM tests 
WHERE slug = 'kpop-exam-test';

-- 최신 테스트 상위 10개 확인 (created_at 기준)
SELECT 
  slug, 
  title->>'ko' as title_ko, 
  created_at, 
  updated_at,
  play_count
FROM tests 
ORDER BY created_at DESC 
LIMIT 10;

-- kpop-exam-test가 있는지 확인
SELECT COUNT(*) as count FROM tests WHERE slug = 'kpop-exam-test';

