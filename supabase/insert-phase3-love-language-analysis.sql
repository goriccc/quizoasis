-- 나의 연애 언어 심층 분석
-- slug: phase3-love-language-analysis
-- thumbnail: p3_test_love_language_analysis.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-love-language-analysis',
  '{"ko": "나의 연애 언어 심층 분석", "en": "My Love Language Deep Analysis", "ja": "私の恋愛言語深層分析", "zh-CN": "我的恋爱语言深度分析", "zh-TW": "我的戀愛語言深度分析", "vi": "Phân Tích Sâu Ngôn Ngữ Tình Yêu của Tôi", "id": "Analisis Mendalam Bahasa Cinta-ku"}',
  '{"ko": "12가지 질문으로 내가 사랑을 표현하고 받아들이는 언어를 분석합니다. 5가지 연애 언어별 점수와 이상적 연애 패턴까지 확인하세요.", "en": "Analyze how you express and receive love with 12 questions. See scores across 5 love languages plus your ideal dating pattern.", "ja": "12の質問で愛を表現し受け取る言語を分析。5つの恋愛言語スコアと理想の恋愛パターンまで確認。", "zh-CN": "通过12个问题分析你表达和接收爱的语言。含5种恋爱语言得分与理想恋爱模式。", "zh-TW": "透過12個問題分析你表達和接收愛的語言。含5種戀愛語言得分與理想戀愛模式。", "vi": "Phân tích cách bạn thể hiện và nhận tình yêu qua 12 câu hỏi. Xem điểm 5 ngôn ngữ tình yêu và mẫu hẹn hò lý tưởng.", "id": "Analisis cara kamu mengekspresikan dan menerima cinta lewat 12 pertanyaan. Lihat skor 5 bahasa cinta dan pola pacaran ideal."}',
  'p3_test_love_language_analysis.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애언어", "사랑의언어", "커플", "연애스타일", "게리채프먼"], "en": ["love language", "five love languages", "couple", "dating style", "Gary Chapman"], "ja": ["恋愛言語", "愛の言語", "カップル", "恋愛スタイル", "ゲーリー・チャップマン"], "zh-CN": ["恋爱语言", "爱的语言", "情侣", "恋爱风格", "盖瑞查普曼"], "zh-TW": ["戀愛語言", "愛的語言", "情侶", "戀愛風格", "蓋瑞查普曼"], "vi": ["ngôn ngữ tình yêu", "ngôn ngữ yêu thương", "cặp đôi", "phong cách hẹn hò", "Gary Chapman"], "id": ["bahasa cinta", "love language", "pasangan", "gaya pacaran", "Gary Chapman"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
