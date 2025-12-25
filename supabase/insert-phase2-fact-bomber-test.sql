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
  'phase2_fact_bomber_test',
  '{
    "ko": "팩폭 능력 T 테스트 (간편)",
    "en": "Fact Bomber T Test (Simple)",
    "ja": "ファクト爆撃Tテスト（簡単）",
    "zh-CN": "事实轰炸T测试（简单）",
    "zh-TW": "事實轟炸T測試（簡單）",
    "vi": "Test Fact Bomber T (Đơn giản)",
    "id": "Tes Fact Bomber T (Sederhana)"
  }',
  '{
    "ko": "\"너 T야?\" 이 말을 칭찬으로 듣나요, 아니면 욕으로 듣나요?",
    "en": "\"Are you T?\" Do you hear this as a compliment or an insult?",
    "ja": "「あなたはT？」この言葉を褒め言葉として聞きますか、それとも悪口として聞きますか？",
    "zh-CN": "\"你是T吗？\"你把这句话当作赞美还是辱骂？",
    "zh-TW": "「你是T嗎？」你把這句話當作讚美還是辱罵？",
    "vi": "\"Bạn có phải T không?\" Bạn nghe câu này như một lời khen hay một lời chửi?",
    "id": "\"Apakah kamu T?\" Apakah kamu mendengar ini sebagai pujian atau hinaan?"
  }',
  'phase2_test_065_fact_bomber.jpg',
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

