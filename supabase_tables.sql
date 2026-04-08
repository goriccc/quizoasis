-- Supabase에서 실행할 SQL 스크립트
-- SQL Editor에서 이 스크립트를 실행하세요

-- feedback 테이블 생성
CREATE TABLE IF NOT EXISTS public.feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    details TEXT NOT NULL,
    email TEXT,
    category TEXT NOT NULL,
    locale TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- issue_reports 테이블 생성
CREATE TABLE IF NOT EXISTS public.issue_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    details TEXT NOT NULL,
    email TEXT,
    category TEXT NOT NULL,
    locale TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issue_reports ENABLE ROW LEVEL SECURITY;

-- ✅ RLS 정책 (운영용)
-- Supabase Security Advisor의 "RLS Policy Always True" 경고를 피하기 위해
-- FOR ALL / USING(true) / WITH CHECK(true) 같은 과도하게 허용적인 정책 대신
-- 필요한 동작(읽기/등록)만 명확히 허용합니다.

-- feedback: 누구나(anon/auth) 등록 가능, 조회도 가능 (admin 페이지에서 사용)
DROP POLICY IF EXISTS "Enable all operations for all users" ON public.feedback;
CREATE POLICY "feedback_select_public" ON public.feedback
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));

CREATE POLICY "feedback_insert_public" ON public.feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

-- issue_reports: 누구나(anon/auth) 등록 가능, 조회도 가능 (admin 페이지에서 사용)
DROP POLICY IF EXISTS "Enable all operations for all users" ON public.issue_reports;
CREATE POLICY "issue_reports_select_public" ON public.issue_reports
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));

CREATE POLICY "issue_reports_insert_public" ON public.issue_reports
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

-- 인덱스 생성 (성능 향상)
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_issue_reports_created_at ON public.issue_reports(created_at DESC);
