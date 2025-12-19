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
  'phase2_are_you_T_test',
  '{
    "ko": "너 T야? 로봇 감성 vs 오열 감성 판독기",
    "en": "Are you a T? Robot Emotion vs Sobbing Emotion Reader",
    "ja": "あなたT？ロボット感情 vs 号泣感情読取機",
    "zh-CN": "你是T吗？机器人情感 vs 哭泣情感读取器",
    "zh-TW": "你是T嗎？機器人情感 vs 哭泣情感讀取器",
    "vi": "Bạn có phải T? Máy đọc Cảm xúc Robot vs Cảm xúc Khóc",
    "id": "Apakah Anda T? Pembaca Emosi Robot vs Emosi Menangis"
  }',
  '{
    "ko": "혹시... 너 T야?",
    "en": "Are you... a T?",
    "ja": "もしかして...あなたT？",
    "zh-CN": "你是...T吗？",
    "zh-TW": "你是...T嗎？",
    "vi": "Bạn có phải... T không?",
    "id": "Apakah kamu... T?"
  }',
  'phase2_test_042_are_you_T.jpg',
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
