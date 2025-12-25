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
  'phase2_lie_detector_test',
  '{
    "ko": "재미로 보는 거짓말 탐지기 (당신의 사기꾼 레벨은?)",
    "en": "Fun Lie Detector (What''s Your Liar Level?)",
    "ja": "楽しい嘘発見機（あなたの嘘つきレベルは？）",
    "zh-CN": "趣味测谎仪（你的骗子等级是？）",
    "zh-TW": "趣味測謊儀（你的騙子等級是？）",
    "vi": "Máy phát hiện nói dối vui vẻ (Cấp độ lừa dối của bạn là gì?)",
    "id": "Detektor Kebohongan yang Menyenangkan (Berapa Level Pembohong Anda?)"
  }',
  '{
    "ko": "지금 당신의 말, 진실입니까?",
    "en": "Is what you''re saying right now the truth?",
    "ja": "今あなたの言葉、本当ですか？",
    "zh-CN": "你现在说的话，是真实的吗？",
    "zh-TW": "你現在說的話，是真實的嗎？",
    "vi": "Lời bạn đang nói bây giờ có phải sự thật không?",
    "id": "Apakah yang Anda katakan sekarang adalah kebenaran?"
  }',
  'phase2_test_108_lie_detector.jpg',
  'psychology',
  'fun',
  '{
    "ko": ["심리", "재미"],
    "en": ["Psychology", "Fun"],
    "ja": ["心理", "楽しい"],
    "zh-CN": ["心理", "趣味"],
    "zh-TW": ["心理", "趣味"],
    "vi": ["Tâm lý", "Vui vẻ"],
    "id": ["Psikologi", "Menyenangkan"]
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

