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
  'defense-mechanism-test',
  '{
    "ko": "나를 지키는 ''방어기제'' 테스트",
    "en": "Defense Mechanism Test",
    "ja": "防衛機制テスト",
    "zh-CN": "防御机制测试",
    "zh-TW": "防禦機制測試",
    "vi": "Bài kiểm tra Cơ chế Phòng vệ",
    "id": "Tes Mekanisme Pertahanan"
  }',
  '{
    "ko": "힘들 때, 당신의 마음은 어떻게 반응하나요?",
    "en": "How does your mind react when things are difficult?",
    "ja": "困難な時、あなたの心はどう反応しますか？",
    "zh-CN": "困难时，你的心如何反应？",
    "zh-TW": "困難時，你的心如何反應？",
    "vi": "Khi khó khăn, tâm trí bạn phản ứng như thế nào?",
    "id": "Bagaimana pikiran Anda bereaksi saat sulit?"
  }',
  'phase2_test_134_defense_mechanism.jpg',
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

