-- 뱃지 타입 업데이트 함수 테스트 실행
-- Supabase SQL Editor에서 직접 실행하면 즉시 뱃지가 배치됩니다!

SELECT update_test_badges();

-- 결과 확인
SELECT slug, badge_type, title->>'ko' as title_ko
FROM tests 
WHERE badge_type IS NOT NULL
ORDER BY badge_type, slug;

