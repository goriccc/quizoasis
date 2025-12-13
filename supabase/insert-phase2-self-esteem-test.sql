-- 나의 '자존감' 레벨 테스트 삽입/업데이트
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
  'phase2_self-esteem-test',
  $${
    "ko": "나의 '자존감' 레벨 테스트",
    "en": "My 'Self-Esteem' Level Test",
    "ja": "私の「自尊心」レベルテスト",
    "zh-CN": "我的「自尊心」水平测试",
    "zh-TW": "我的「自尊心」水平測試",
    "vi": "Kiểm tra Mức độ 'Tự trọng' của tôi",
    "id": "Tes Tingkat 'Harga Diri' Saya"
  }$$,
  $${
    "ko": "당신은 자신의 가장 친한 친구인가요?",
    "en": "Are you your own best friend?",
    "ja": "あなたは自分の最も親しい友達ですか？",
    "zh-CN": "你是自己最好的朋友吗？",
    "zh-TW": "你是自己最好的朋友嗎？",
    "vi": "Bạn có phải là người bạn thân nhất của chính mình không?",
    "id": "Apakah Anda sahabat terbaik diri sendiri?"
  }$$,
  'phase2_test_135_self_esteem.jpg',
  'psychology',
  'personality',
  $${
    "ko": ["심리", "성격"],
    "en": ["Psychology", "Personality"],
    "ja": ["心理", "性格"],
    "zh-CN": ["心理", "性格"],
    "zh-TW": ["心理", "性格"],
    "vi": ["Tâm lý", "Tính cách"],
    "id": ["Psikologi", "Kepribadian"]
  }$$,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
