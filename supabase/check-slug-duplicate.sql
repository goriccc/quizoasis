-- 슬러그 중복 체크 쿼리
-- 새 테스트를 만들기 전에 실행하여 슬러그가 이미 사용 중인지 확인하세요

-- 예시: 'my-dating-style' 슬러그 체크
SELECT slug, title->>'ko' as title_ko, thumbnail 
FROM tests 
WHERE slug = 'my-dating-style';

-- 모든 슬러그 목록 확인
SELECT slug, title->>'ko' as title_ko, updated_at 
FROM tests 
ORDER BY updated_at DESC;

