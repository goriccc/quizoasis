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
  'love-language-test',
  '{
    "ko": "나의 1순위 사랑의 언어는? (연애 성향 진단)",
    "en": "What''s My #1 Love Language? (Relationship Tendency Diagnosis)",
    "ja": "私の1位の愛の言語は？(恋愛傾向診断)",
    "zh-CN": "我的第一爱的语言是什么？(恋爱倾向诊断)",
    "zh-TW": "我的第一愛的語言是什麼？(戀愛傾向診斷)",
    "vi": "Ngôn ngữ Tình yêu #1 của Tôi là gì? (Chẩn đoán Xu hướng Tình yêu)",
    "id": "Apa Bahasa Cinta #1 Saya? (Diagnosis Kecenderungan Hubungan)"
  }',
  '{
    "ko": "당신의 사랑은 어떤 언어로 말하고 있나요?",
    "en": "What language does your love speak?",
    "ja": "あなたの愛はどんな言葉で語っていますか？",
    "zh-CN": "你的爱是用什么语言表达的？",
    "zh-TW": "你的愛是用什麼語言表達的？",
    "vi": "Tình yêu của bạn nói bằng ngôn ngữ gì?",
    "id": "Bahasa apa yang digunakan cintamu?"
  }',
  'phase2_test_131_love_language.jpg',
  'dating',
  'psychology',
  '{
    "ko": ["연애", "심리"],
    "en": ["Dating", "Psychology"],
    "ja": ["恋愛", "心理"],
    "zh-CN": ["恋爱", "心理"],
    "zh-TW": ["戀愛", "心理"],
    "vi": ["Tình yêu", "Tâm lý"],
    "id": ["Kencan", "Psikologi"]
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

