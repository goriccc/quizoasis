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
  'phase2_greek_god_test',
  '{
    "ko": "내 성격과 닮은 ''신화 속 신'' 찾기",
    "en": "Find the ''Mythological God'' Who Resembles My Personality",
    "ja": "私の性格に似た「神話の神」を見つける",
    "zh-CN": "找到与我性格相似的''神话中的神''",
    "zh-TW": "找到與我性格相似的''神話中的神''",
    "vi": "Tìm ''Vị Thần Trong Thần Thoại'' Giống Tính Cách Của Tôi",
    "id": "Temukan ''Dewa Mitologi'' yang Mirip dengan Kepribadian Saya"
  }',
  '{
    "ko": "나는 올림푸스의 지배자일까요?",
    "en": "Am I the ruler of Olympus?",
    "ja": "私はオリンポスの支配者でしょうか？",
    "zh-CN": "我是奥林匹斯的统治者吗？",
    "zh-TW": "我是奧林匹斯的統治者嗎？",
    "vi": "Tôi có phải là người cai trị Olympus không?",
    "id": "Apakah saya penguasa Olympus?"
  }',
  'phase2_test_039_greek_god.jpg',
  'personality',
  'personality',
  '{
    "ko": ["심리", "성격"],
    "en": ["Psychology", "Personality"],
    "ja": ["心理", "性格"],
    "zh-CN": ["心理", "性格"],
    "zh-TW": ["心理", "性格"],
    "vi": ["Tâm lý", "Tính cách"],
    "id": ["Psikologi", "Kepribadian"]
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
