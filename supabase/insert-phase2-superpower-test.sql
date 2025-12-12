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
  'phase2_superpower-test',
  '{
    "ko": "나의 숨겨진 \'초능력\' 찾기",
    "en": "Find My Hidden \'Superpower\'",
    "ja": "私の隠された「超能力」を見つける",
    "zh-CN": "找到我隐藏的\'超能力\'",
    "zh-TW": "找到我隱藏的「超能力」",
    "vi": "Tìm \'Siêu năng lực\' ẩn giấu của tôi",
    "id": "Temukan \'Kekuatan Super\' Tersembunyi Saya"
  }',
  '{
    "ko": "남들에게는 없는 특별한 힘이 나에게 있다면?",
    "en": "What special power would I have that others don\'t?",
    "ja": "他の人にはない特別な力が私にあるとしたら？",
    "zh-CN": "如果我有别人没有的特殊力量？",
    "zh-TW": "如果我有別人沒有的特殊力量？",
    "vi": "Nếu tôi có sức mạnh đặc biệt mà người khác không có?",
    "id": "Bagaimana jika saya memiliki kekuatan khusus yang tidak dimiliki orang lain?"
  }',
  'phase2_test_041_superpower.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리"],
    "en": ["Psychology"],
    "ja": ["心理"],
    "zh-CN": ["心理"],
    "zh-TW": ["心理"],
    "vi": ["Tâm lý"],
    "id": ["Psikologi"]
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
