-- 리더십 스타일 테스트 데이터 삽입
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
  'leadership-style-test',
  '{
    "ko": "나의 ''리더십'' 스타일 테스트",
    "en": "",
    "ja": "",
    "zh-CN": "",
    "zh-TW": "",
    "vi": "",
    "id": ""
  }',
  '{
    "ko": "당신은 어떤 리더인가요? 혹은 어떤 리더가 될까요?",
    "en": "",
    "ja": "",
    "zh-CN": "",
    "zh-TW": "",
    "vi": "",
    "id": ""
  }',
  'phase2_test_149_leadership_style.jpg',
  'psychology',
  'career',
  '{
    "ko": ["자아탐색", "진로"],
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
