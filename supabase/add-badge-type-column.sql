
-- tests 테이블에 badge_type 컬럼 추가
-- NULL: 뱃지 없음, 'popular': 인기 뱃지, 'hot': HOT 뱃지
ALTER TABLE tests 
ADD COLUMN IF NOT EXISTS badge_type VARCHAR(10) DEFAULT NULL;

-- 인덱스 생성 (뱃지가 있는 테스트 조회 최적화)
CREATE INDEX IF NOT EXISTS idx_tests_badge_type ON tests(badge_type) WHERE badge_type IS NOT NULL;

-- 뱃지 타입 업데이트 함수
CREATE OR REPLACE FUNCTION update_test_badges()
RETURNS VOID 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  total_tests INT;
  badge_count INT;
  latest_slugs TEXT[];
  selected_slugs TEXT[];
  badge_type_value TEXT;
BEGIN
  -- 최신 15개 테스트 slug 가져오기 (created_at 기준)
  SELECT ARRAY_AGG(slug) INTO latest_slugs
  FROM (
    SELECT slug 
    FROM tests 
    ORDER BY created_at DESC 
    LIMIT 15
  ) latest;
  
  -- 전체 테스트 개수 (최신 15개 제외)
  SELECT COUNT(*) INTO total_tests
  FROM tests
  WHERE slug != ALL(COALESCE(latest_slugs, ARRAY[]::TEXT[]));
  
  -- 30% 계산 (최소 1개)
  badge_count := GREATEST(1, FLOOR(total_tests * 0.3));
  
  -- 먼저 모든 뱃지 제거
  UPDATE tests SET badge_type = NULL;
  
  -- 랜덤으로 테스트 선택 (최신 15개 제외)
  WITH random_tests AS (
    SELECT slug
    FROM tests
    WHERE slug != ALL(COALESCE(latest_slugs, ARRAY[]::TEXT[]))
    ORDER BY RANDOM()
    LIMIT badge_count
  )
  SELECT ARRAY_AGG(slug) INTO selected_slugs
  FROM random_tests;
  
  -- 선택된 테스트에 랜덤으로 "popular" 또는 "hot" 할당
  IF selected_slugs IS NOT NULL THEN
    FOR i IN 1..array_length(selected_slugs, 1) LOOP
      -- 50% 확률로 "popular" 또는 "hot"
      badge_type_value := CASE WHEN RANDOM() < 0.5 THEN 'popular' ELSE 'hot' END;
      
      UPDATE tests
      SET badge_type = badge_type_value
      WHERE slug = selected_slugs[i];
    END LOOP;
  END IF;
  
  RAISE NOTICE 'Updated % tests with badges (popular/hot)', badge_count;
END;
$$;

