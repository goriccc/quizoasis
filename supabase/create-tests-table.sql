-- tests 테이블 생성 (실제 사용 구조)
CREATE TABLE IF NOT EXISTS tests (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  
  -- 다국어 제목 (JSONB)
  title JSONB NOT NULL,
  
  -- 다국어 설명 (JSONB)
  description JSONB NOT NULL,
  
  thumbnail VARCHAR(255) NOT NULL,
  
  -- 테스트 타입 및 카테고리
  type VARCHAR(50),
  category VARCHAR(50),
  
  -- 다국어 태그 (JSONB)
  tags JSONB DEFAULT '{}'::jsonb,
  
  -- 플레이 횟수
  play_count INT DEFAULT 0,
  
  -- 타임스탬프
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_tests_slug ON tests(slug);
CREATE INDEX IF NOT EXISTS idx_tests_play_count ON tests(play_count DESC);
CREATE INDEX IF NOT EXISTS idx_tests_created_at ON tests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tests_type ON tests(type);
CREATE INDEX IF NOT EXISTS idx_tests_category ON tests(category);
CREATE INDEX IF NOT EXISTS idx_tests_tags ON tests USING GIN(tags);

-- 플레이 횟수 증가 함수
CREATE OR REPLACE FUNCTION increment_play_count(test_slug VARCHAR)
RETURNS VOID AS $$
BEGIN
  UPDATE tests 
  SET play_count = play_count + 1, updated_at = NOW()
  WHERE slug = test_slug;
END;
$$ LANGUAGE plpgsql;

