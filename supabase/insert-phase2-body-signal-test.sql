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
  'phase2_body_signal_test',
  '{
    "ko": "내 몸이 보내는 SOS 신호! 나에게 필요한 영양제는?",
    "en": "My Body''s SOS Signal! What Supplements Do I Need?",
    "ja": "私の体が送るSOSシグナル！私に必要なサプリメントは？",
    "zh-CN": "我身体发出的SOS信号！我需要什么营养补充剂？",
    "zh-TW": "我身體發出的SOS信號！我需要什麼營養補充劑？",
    "vi": "Tín hiệu SOS từ cơ thể tôi! Tôi cần bổ sung gì?",
    "id": "Sinyal SOS dari Tubuh Saya! Suplemen Apa yang Saya Butuhkan?"
  }',
  '{
    "ko": "자도 자도 피곤하고, 눈은 침침?",
    "en": "Tired even after sleeping, and eyes feel blurry?",
    "ja": "寝ても寝ても疲れて、目はぼやけている？",
    "zh-CN": "睡再多也累，眼睛模糊？",
    "zh-TW": "睡再多也累，眼睛模糊？",
    "vi": "Ngủ bao nhiêu cũng mệt, và mắt mờ mờ?",
    "id": "Lelah meski sudah tidur, dan mata terasa kabur?"
  }',
  'phase2_test_032_body_signal.jpg',
  'knowledge',
  'health',
  '{
    "ko": ["지식", "상식"],
    "en": ["Knowledge", "General Knowledge"],
    "ja": ["知識", "常識"],
    "zh-CN": ["知识", "常识"],
    "zh-TW": ["知識", "常識"],
    "vi": ["Kiến thức", "Kiến thức chung"],
    "id": ["Pengetahuan", "Pengetahuan Umum"]
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
