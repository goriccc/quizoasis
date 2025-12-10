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
  'empathy-f-test',
  '{
    "ko": "공감 능력 F 테스트 (간편)",
    "en": "Empathy F Test (Simple)",
    "ja": "共感能力Fテスト（簡易）",
    "zh-CN": "共情能力F测试（简易）",
    "zh-TW": "共情能力F測試（簡易）",
    "vi": "Bài kiểm tra F khả năng đồng cảm (Đơn giản)",
    "id": "Tes F Kemampuan Empati (Sederhana)"
  }',
  '{
    "ko": "친구가 우울하다고 할 때 당신의 반응은?",
    "en": "How do you react when a friend says they are depressed?",
    "ja": "友達が落ち込んでいるとき、あなたの反応は？",
    "zh-CN": "朋友说心情不好时你的反应是？",
    "zh-TW": "朋友說心情不好時你的反應是？",
    "vi": "Phản ứng của bạn khi bạn bè nói buồn là gì?",
    "id": "Bagaimana reaksi Anda saat teman mengatakan mereka sedih?"
  }',
  'phase2_test_064_empathy_level.jpg',
  'psychology',
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

