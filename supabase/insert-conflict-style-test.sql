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
  'conflict-style-test',
  '{
    "ko": "나의 \'갈등 해결\' 스타일 (싸움 유형 진단)",
    "en": "",
    "ja": "",
    "zh-CN": "",
    "zh-TW": "",
    "vi": "",
    "id": ""
  }',
  '{
    "ko": "싸움, 피할 수 없다면 어떻게 하시나요?",
    "en": "",
    "ja": "",
    "zh-CN": "",
    "zh-TW": "",
    "vi": "",
    "id": ""
  }',
  'phase2_test_156_conflict_style.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리"],
    "en": [],
    "ja": [],
    "zh-CN": [],
    "zh-TW": [],
    "vi": [],
    "id": []
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

