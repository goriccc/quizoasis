-- Fix: Supabase Security Advisor - SECURITY DEFINER functions callable by public/anon
-- 대상: public.increment_play_count(text), public.update_test_badges()
--
-- ⚠️ 실행 순서
-- 1) quizoasis 앱 배포 (POST /api/tests/play-count 라우트 포함)
-- 2) 이 SQL을 Supabase Dashboard → SQL Editor에서 실행
--
-- increment_play_count: 클라이언트 anon RPC 제거 → Next.js API(service_role)만 호출
-- update_test_badges: 관리/cron 전용 → service_role만 EXECUTE

-- ── increment_play_count ──────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.increment_play_count(test_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF test_slug IS NULL OR test_slug !~ '^[a-z0-9-]+$' OR length(test_slug) > 100 THEN
    RETURN;
  END IF;

  UPDATE tests
  SET play_count = play_count + 1,
      updated_at = NOW()
  WHERE slug = test_slug;
END;
$$;

REVOKE ALL ON FUNCTION public.increment_play_count(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.increment_play_count(text) FROM anon;
REVOKE ALL ON FUNCTION public.increment_play_count(text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.increment_play_count(text) TO service_role;

-- ── update_test_badges ────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.update_test_badges()
RETURNS void
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
  SELECT ARRAY_AGG(slug) INTO latest_slugs
  FROM (
    SELECT slug
    FROM tests
    ORDER BY created_at DESC
    LIMIT 15
  ) latest;

  SELECT COUNT(*) INTO total_tests
  FROM tests
  WHERE slug != ALL(COALESCE(latest_slugs, ARRAY[]::TEXT[]));

  badge_count := GREATEST(1, FLOOR(total_tests * 0.3));

  UPDATE tests SET badge_type = NULL;

  WITH random_tests AS (
    SELECT slug
    FROM tests
    WHERE slug != ALL(COALESCE(latest_slugs, ARRAY[]::TEXT[]))
    ORDER BY RANDOM()
    LIMIT badge_count
  )
  SELECT ARRAY_AGG(slug) INTO selected_slugs
  FROM random_tests;

  IF selected_slugs IS NOT NULL THEN
    FOR i IN 1..array_length(selected_slugs, 1) LOOP
      badge_type_value := CASE WHEN RANDOM() < 0.5 THEN 'popular' ELSE 'hot' END;

      UPDATE tests
      SET badge_type = badge_type_value
      WHERE slug = selected_slugs[i];
    END LOOP;
  END IF;

  RAISE NOTICE 'Updated % tests with badges (popular/hot)', badge_count;
END;
$$;

REVOKE ALL ON FUNCTION public.update_test_badges() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.update_test_badges() FROM anon;
REVOKE ALL ON FUNCTION public.update_test_badges() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.update_test_badges() TO service_role;
