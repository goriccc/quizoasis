-- 의사결정 속도 테스트 데이터 삽입
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
  'decision-speed-test',
  '{
    "ko": "당신의 의사결정 속도는?",
    "en": "What is your decision-making speed?",
    "ja": "あなたの意思決定の速度は？",
    "zh-CN": "你的决策速度是什么？",
    "zh-TW": "你的決策速度是什麼？",
    "vi": "Tốc độ ra quyết định của bạn là gì?",
    "id": "Berapa kecepatan pengambilan keputusan Anda?"
  }',
  '{
    "ko": "즉시 결정? 천천히 고민? 당신의 결정 속도는?",
    "en": "Decide immediately? Think slowly? What is your decision speed?",
    "ja": "すぐに決める？ゆっくり悩む？あなたの決定速度は？",
    "zh-CN": "立即决定？慢慢思考？你的决策速度是什么？",
    "zh-TW": "立即決定？慢慢思考？你的決策速度是什麼？",
    "vi": "Quyết định ngay lập tức? Suy nghĩ chậm? Tốc độ quyết định của bạn là gì?",
    "id": "Putuskan segera? Berpikir perlahan? Berapa kecepatan keputusan Anda?"
  }',
  'test_213_decision_speed.jpg',
  'dating',
  'love',
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
);

