-- Supabase에서 실행할 SQL 스크립트
-- 테스트 데이터 삭제용

-- feedback 테이블의 모든 데이터 삭제
DELETE FROM public.feedback;

-- issue_reports 테이블의 모든 데이터 삭제  
DELETE FROM public.issue_reports;

-- 삭제 확인용 쿼리 (실행 후 확인)
-- SELECT COUNT(*) as feedback_count FROM public.feedback;
-- SELECT COUNT(*) as reports_count FROM public.issue_reports;
