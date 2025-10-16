-- Love Flavor Test 데이터 업데이트 (기존 데이터가 있으면 업데이트, 없으면 삽입)
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
  'love-flavor-test',
  '{
    "ko": "당신의 연애는 어떤 맛일까요?",
    "en": "What Flavor Is Your Love?",
    "ja": "あなたの恋はどんな味？",
    "zh-CN": "你的恋爱是什么味道？",
    "zh-TW": "你的戀愛是什麼味道？",
    "vi": "Tình Yêu Của Bạn Có Vị Gì?",
    "id": "Cinta Anda Berasa Apa?"
  }',
  '{
    "ko": "달콤? 새콤? 매콤? 쌉싸름? 12문항으로 사랑의 맛을 알아보세요!",
    "en": "Sweet, sour, spicy, or bitter? Find your love flavor in 12 questions!",
    "ja": "甘い？酸っぱい？辛い？ビター？12問で恋の味を診断！",
    "zh-CN": "甜？酸？辣？苦？12道题测出你的恋爱味道！",
    "zh-TW": "甜？酸？辣？苦？12題測出你的戀愛味道！",
    "vi": "Ngọt? Chua? Cay? Đắng? 12 câu hỏi để biết vị tình yêu!",
    "id": "Manis, asam, pedas, atau pahit? 12 pertanyaan untuk rasa cinta Anda!"
  }',
  'test_031_love_flavor.jpg',
  'dating',
  'love',
  '{
    "ko": ["연애", "심리"],
    "en": ["Love", "Psychology"],
    "ja": ["恋愛", "心理"],
    "zh-CN": ["恋爱", "心理"],
    "zh-TW": ["戀愛", "心理"],
    "vi": ["Tình yêu", "Tâm lý"],
    "id": ["Cinta", "Psikologi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();