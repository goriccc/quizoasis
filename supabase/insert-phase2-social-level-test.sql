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
  'phase2_social_level_test',
  '{
    "ko": "인싸? 아싸? 내 사회성 레벨 테스트",
    "en": "Insa? Assa? My Social Level Test",
    "ja": "インサ？アッサ？私の社会性レベルテスト",
    "zh-CN": "社交达人？内向者？我的社交水平测试",
    "zh-TW": "社交達人？內向者？我的社交水平測試",
    "vi": "Người xã hội? Người hướng nội? Bài kiểm tra mức độ xã hội của tôi",
    "id": "Insa? Assa? Tes Level Sosial Saya"
  }',
  '{
    "ko": "당신의 소셜 배터리는 몇 퍼센트인가요?",
    "en": "What percentage is your social battery?",
    "ja": "あなたのソーシャルバッテリーは何パーセントですか？",
    "zh-CN": "你的社交电池有多少百分比？",
    "zh-TW": "你的社交電池有多少百分比？",
    "vi": "Pin xã hội của bạn là bao nhiêu phần trăm?",
    "id": "Berapa persen baterai sosial Anda?"
  }',
  'phase2_test_043_social_level.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "성격"],
    "en": ["psychology", "personality"],
    "ja": ["心理", "性格"],
    "zh-CN": ["心理", "性格"],
    "zh-TW": ["心理", "性格"],
    "vi": ["tâm lý học", "tính cách"],
    "id": ["psikologi", "kepribadian"]
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

