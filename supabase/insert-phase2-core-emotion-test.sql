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
  'phase2_core_emotion_test',
  '{
    "ko": "나의 ''핵심 감정''은 무엇일까?",
    "en": "What is My ''Core Emotion''?",
    "ja": "私の「核心感情」は何だろう？",
    "zh-CN": "我的「核心情绪」是什么？",
    "zh-TW": "我的「核心情緒」是什麼？",
    "vi": "Cảm Xúc Cốt Lõi Của Tôi Là Gì?",
    "id": "Apa ''Emosi Inti'' Saya?"
  }',
  '{
    "ko": "지금 당신의 마음을 조종하는 건 누구일까요?",
    "en": "Who is controlling your mind right now?",
    "ja": "今あなたの心を操っているのは誰ですか？",
    "zh-CN": "现在是谁在控制你的心？",
    "zh-TW": "現在是誰在控制你的心？",
    "vi": "Ai đang điều khiển tâm trí bạn ngay bây giờ?",
    "id": "Siapa yang mengendalikan pikiran Anda saat ini?"
  }',
  'phase2_test_146_core_emotion.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "자아탐색"],
    "en": ["Psychology", "Self-Exploration"],
    "ja": ["心理", "自己探求"],
    "zh-CN": ["心理", "自我探索"],
    "zh-TW": ["心理", "自我探索"],
    "vi": ["Tâm lý", "Khám phá bản thân"],
    "id": ["Psikologi", "Eksplorasi Diri"]
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
