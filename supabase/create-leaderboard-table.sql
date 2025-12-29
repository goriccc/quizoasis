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

-- 모든 사용자가 읽기/쓰기 가능하도록 설정
CREATE POLICY "Enable all operations for all users" ON public.leaderboard
    FOR ALL USING (true) WITH CHECK (true);




