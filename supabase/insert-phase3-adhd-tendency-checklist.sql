-- 나 혹시 ADHD 성향 있어?
-- slug: phase3-adhd-tendency-checklist
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  play_count
) VALUES (
  'phase3-adhd-tendency-checklist',
  '{
    "ko": "나 혹시 ADHD 성향 있어?",
    "en": "나 혹시 ADHD 성향 있어?",
    "ja": "나 혹시 ADHD 성향 있어?",
    "zh-CN": "나 혹시 ADHD 성향 있어?",
    "zh-TW": "나 혹시 ADHD 성향 있어?",
    "vi": "나 혹시 ADHD 성향 있어?",
    "id": "나 혹시 ADHD 성향 있어?"
  }',
  '{
    "ko": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "en": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "ja": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "zh-CN": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "zh-TW": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "vi": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "id": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해"
  }',
  'p3_test_adhd_tendency_checklist.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["ADHD", "성향", "자기이해"],
    "en": ["ADHD", "성향", "자기이해"],
    "ja": ["ADHD", "성향", "자기이해"],
    "zh-CN": ["ADHD", "성향", "자기이해"],
    "zh-TW": ["ADHD", "성향", "자기이해"],
    "vi": ["ADHD", "성향", "자기이해"],
    "id": ["ADHD", "성향", "자기이해"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
