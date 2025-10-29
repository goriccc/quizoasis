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

-- 모든 사용자가 읽기/쓰기 가능하도록 설정 (개발용)
CREATE POLICY "Enable all operations for all users" ON public.feedback
    FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Enable all operations for all users" ON public.issue_reports
    FOR ALL USING (true) WITH CHECK (true);

-- 인덱스 생성 (성능 향상)
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_issue_reports_created_at ON public.issue_reports(created_at DESC);
