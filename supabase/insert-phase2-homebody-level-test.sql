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
  'phase2_homebody_level_test',
  '{
    "ko": "집순이/집돌이 만렙 테스트",
    "en": "Homebody Level Test",
    "ja": "家好きレベルテスト",
    "zh-CN": "宅家等级测试",
    "zh-TW": "宅家等級測試",
    "vi": "Bài Test Mức Độ Ở Nhà",
    "id": "Tes Level Homebody"
  }',
  '{
    "ko": "\"이불 밖은 위험해!\" 이 말을 얼마나 공감하시나요?",
    "en": "How much do you relate to \"Outside the blanket is dangerous!\"?",
    "ja": "「布団の外は危険だ！」この言葉にどれだけ共感しますか？",
    "zh-CN": "你有多认同\"被子外面很危险！\"这句话？",
    "zh-TW": "你有多認同「被子外面很危險！」這句話？",
    "vi": "Bạn đồng cảm đến mức nào với câu nói \"Bên ngoài chăn là nguy hiểm!\"?",
    "id": "Seberapa besar Anda setuju dengan \"Di luar selimut itu berbahaya!\"?"
  }',
  'phase2_test_064_homebody_level.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["성격"],
    "en": ["Personality"],
    "ja": ["性格"],
    "zh-CN": ["性格"],
    "zh-TW": ["性格"],
    "vi": ["Tính cách"],
    "id": ["Kepribadian"]
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

