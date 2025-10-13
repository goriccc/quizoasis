-- Update thumbnail filenames for tests

-- Update MBTI test thumbnail
UPDATE tests 
SET thumbnail = 'test_000_simple_mbti.jpg',
    updated_at = NOW()
WHERE slug = 'mbti-light';

-- Update Stress test thumbnail
UPDATE tests 
SET thumbnail = 'test_011_stress_response.jpg',
    updated_at = NOW()
WHERE slug = 'stress-reaction-test';

-- Verify the updates
SELECT id, slug, title->>'ko' as title_ko, thumbnail, updated_at 
FROM tests 
WHERE slug IN ('mbti-light', 'stress-reaction-test')
ORDER BY slug;

