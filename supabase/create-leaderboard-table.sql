-- Leaderboard 테이블 생성
CREATE TABLE IF NOT EXISTS public.leaderboard (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    test_slug VARCHAR(100) NOT NULL,
    player_name VARCHAR(20) NOT NULL,
    level INT NOT NULL,
    score INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_leaderboard_test_slug ON public.leaderboard(test_slug);
CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON public.leaderboard(score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_level ON public.leaderboard(level DESC);

-- 복합 인덱스 (Top 10 조회 최적화)
CREATE INDEX IF NOT EXISTS idx_leaderboard_test_score_level ON public.leaderboard(test_slug, score DESC, level DESC);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

-- ✅ RLS 정책 (운영용)
-- "RLS Policy Always True" 경고를 피하기 위해 FOR ALL / true 정책을 사용하지 않음
DROP POLICY IF EXISTS "Enable all operations for all users" ON public.leaderboard;

-- 누구나(anon/auth) 리더보드 조회 가능
CREATE POLICY "leaderboard_select_public" ON public.leaderboard
  FOR SELECT
  TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));

-- 누구나(anon/auth) 점수 등록 가능 (앱에서 사용)
CREATE POLICY "leaderboard_insert_public" ON public.leaderboard
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));




