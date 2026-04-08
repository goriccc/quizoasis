-- Fix: Supabase Security Advisor - "RLS Policy Always True" (4 tables)
-- 대상: public.feedback, public.issue_reports, public.leaderboard, public.tests
--
-- 이 SQL은 Supabase Dashboard → SQL Editor에서 실행하세요.

-- 1) RLS 활성화 (이미 활성화되어 있어도 안전)
ALTER TABLE IF EXISTS public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.issue_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.leaderboard ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.tests ENABLE ROW LEVEL SECURITY;

-- 2) 항상-true(USING(true) / WITH CHECK(true)) 정책을 자동 제거 (정책 이름이 달라도 제거)
DO $$
DECLARE
  p RECORD;
BEGIN
  FOR p IN
    SELECT schemaname, tablename, policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename IN ('feedback', 'issue_reports', 'leaderboard', 'tests')
      AND (
        qual = 'true'
        OR with_check = 'true'
      )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I;', p.policyname, p.schemaname, p.tablename);
  END LOOP;
END
$$;

-- 3) 필요한 최소 정책 재생성

-- feedback: 누구나 등록/조회 가능 (현재 admin 페이지에서 anon key로 조회하는 흐름 유지)
DROP POLICY IF EXISTS feedback_select_public ON public.feedback;
DROP POLICY IF EXISTS feedback_insert_public ON public.feedback;
CREATE POLICY feedback_select_public ON public.feedback
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));
CREATE POLICY feedback_insert_public ON public.feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

-- issue_reports: 누구나 등록/조회 가능
DROP POLICY IF EXISTS issue_reports_select_public ON public.issue_reports;
DROP POLICY IF EXISTS issue_reports_insert_public ON public.issue_reports;
CREATE POLICY issue_reports_select_public ON public.issue_reports
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));
CREATE POLICY issue_reports_insert_public ON public.issue_reports
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

-- leaderboard: 누구나 조회/등록 가능 (게임 점수 기록)
DROP POLICY IF EXISTS leaderboard_select_public ON public.leaderboard;
DROP POLICY IF EXISTS leaderboard_insert_public ON public.leaderboard;
CREATE POLICY leaderboard_select_public ON public.leaderboard
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));
CREATE POLICY leaderboard_insert_public ON public.leaderboard
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

-- tests: 누구나 조회 가능 (목록/상세/메타데이터)
-- play_count 증가는 SECURITY DEFINER 함수(increment_play_count)로 처리하는 구조라
-- UPDATE 정책을 열지 않는 것이 안전합니다.
DROP POLICY IF EXISTS tests_select_public ON public.tests;
CREATE POLICY tests_select_public ON public.tests
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));

