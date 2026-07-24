-- Add interaction format column for home page filtering
-- Values: personality_4 | scenario_4 | personality_2 | scenario_2 | quiz | game | checklist | face

ALTER TABLE tests
  ADD COLUMN IF NOT EXISTS format VARCHAR(30);

CREATE INDEX IF NOT EXISTS idx_tests_format ON tests (format);

COMMENT ON COLUMN tests.format IS 'Home filter interaction format (personality_4, scenario_4, personality_2, scenario_2, quiz, game, checklist, face)';
