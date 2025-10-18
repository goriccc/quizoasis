-- increment_play_count 함수의 search_path 보안 설정 수정
-- 이 SQL은 Supabase 대시보드의 SQL Editor에서 실행해야 합니다

-- 기존 함수 삭제
DROP FUNCTION IF EXISTS public.increment_play_count(text);

-- 보안이 강화된 함수 재생성
CREATE OR REPLACE FUNCTION public.increment_play_count(test_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE tests 
  SET play_count = play_count + 1 
  WHERE slug = test_slug;
END;
$$;

-- 함수 권한 설정
GRANT EXECUTE ON FUNCTION public.increment_play_count(text) TO anon;
GRANT EXECUTE ON FUNCTION public.increment_play_count(text) TO authenticated;
