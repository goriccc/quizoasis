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
  'phase2_perfectionism-test',
  $${
    "ko": "나의 '완벽주의' 성향 테스트 (번아웃 진단)",
    "en": "My 'Perfectionism' Tendency Test (Burnout Diagnosis)",
    "ja": "私の「完璧主義」傾向テスト（燃え尽き症候群診断）",
    "zh-CN": "我的'完美主义'倾向测试（倦怠诊断）",
    "zh-TW": "我的「完美主義」傾向測試（倦怠診斷）",
    "vi": "Test Xu hướng 'Chủ nghĩa Hoàn hảo' của tôi (Chẩn đoán Kiệt sức)",
    "id": "Test Kecenderungan 'Perfeksionisme' Saya (Diagnosis Kelelahan)"
  }$$,
  $${
    "ko": "당신의 기준점은 어디인가요?",
    "en": "Where is your standard point?",
    "ja": "あなたの基準点はどこですか？",
    "zh-CN": "你的标准点在哪里？",
    "zh-TW": "你的標準點在哪裡？",
    "vi": "Điểm chuẩn của bạn ở đâu?",
    "id": "Di mana titik standar Anda?"
  }$$,
  'phase2_test_150_perfectionism.jpg',
  'psychology',
  'personality',
  $${
    "ko": ["자아탐색"],
    "en": ["Self-Exploration"],
    "ja": ["自己探求"],
    "zh-CN": ["自我探索"],
    "zh-TW": ["自我探索"],
    "vi": ["Khám phá Bản thân"],
    "id": ["Eksplorasi Diri"]
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
