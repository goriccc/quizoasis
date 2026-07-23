-- 1분 순발력 테스트 전용 랭킹·챌린지 테이블
-- slug: phase3-1min-reaction-speed

CREATE TABLE IF NOT EXISTS public.phase3_reaction_speed_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  test_slug VARCHAR(100) NOT NULL DEFAULT 'phase3-1min-reaction-speed',
  player_name VARCHAR(20) NOT NULL DEFAULT '익명',
  raw_score INT NOT NULL DEFAULT 0,
  normalized_score INT NOT NULL DEFAULT 0,
  avg_ms INT NOT NULL DEFAULT 0,
  max_combo INT NOT NULL DEFAULT 0,
  miss_count INT NOT NULL DEFAULT 0,
  week_key VARCHAR(10) NOT NULL,
  suspect BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_p3_reaction_speed_week_score
  ON public.phase3_reaction_speed_scores (test_slug, week_key, normalized_score DESC);

CREATE INDEX IF NOT EXISTS idx_p3_reaction_speed_created
  ON public.phase3_reaction_speed_scores (created_at DESC);

CREATE TABLE IF NOT EXISTS public.phase3_reaction_speed_challenges (
  code VARCHAR(12) PRIMARY KEY,
  host_name VARCHAR(20) NOT NULL DEFAULT '익명',
  host_score INT NOT NULL DEFAULT 0,
  host_normalized INT NOT NULL DEFAULT 0,
  host_avg_ms INT NOT NULL DEFAULT 0,
  week_key VARCHAR(10) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_p3_reaction_speed_challenges_week
  ON public.phase3_reaction_speed_challenges (week_key);

ALTER TABLE public.phase3_reaction_speed_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.phase3_reaction_speed_challenges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS p3_reaction_speed_scores_select ON public.phase3_reaction_speed_scores;
DROP POLICY IF EXISTS p3_reaction_speed_scores_insert ON public.phase3_reaction_speed_scores;
CREATE POLICY p3_reaction_speed_scores_select ON public.phase3_reaction_speed_scores
  FOR SELECT TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));
CREATE POLICY p3_reaction_speed_scores_insert ON public.phase3_reaction_speed_scores
  FOR INSERT TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));

DROP POLICY IF EXISTS p3_reaction_speed_challenges_select ON public.phase3_reaction_speed_challenges;
DROP POLICY IF EXISTS p3_reaction_speed_challenges_insert ON public.phase3_reaction_speed_challenges;
CREATE POLICY p3_reaction_speed_challenges_select ON public.phase3_reaction_speed_challenges
  FOR SELECT TO anon, authenticated
  USING (auth.role() IN ('anon', 'authenticated'));
CREATE POLICY p3_reaction_speed_challenges_insert ON public.phase3_reaction_speed_challenges
  FOR INSERT TO anon, authenticated
  WITH CHECK (auth.role() IN ('anon', 'authenticated'));
