-- 내 연애가 힘든 이유 (애착유형 분석)
-- slug: phase3-attachment-style-love
-- Supabase SQL Editor 또는 psql에서 tests 테이블에 upsert 실행
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
  'phase3-attachment-style-love',
  '{
    "ko": "내 연애가 힘든 이유 (애착유형 분석)",
    "en": "Why Love Feels Hard (Attachment Style Analysis)",
    "ja": "恋愛がしんどい理由（愛着タイプ分析）",
    "zh-CN": "恋爱好累的原因（依恋类型分析）",
    "zh-TW": "戀愛好累的原因（依戀類型分析）",
    "vi": "Tại sao yêu đương mệt mỏi (Phân tích kiểu gắn bó)",
    "id": "Kenapa cinta terasa berat (Analisis tipe melekat)"
  }',
  '{
    "ko": "애착 유형으로 보는 나의 연애 패턴. 심리학 기반 12문항 분석.",
    "en": "Discover your dating patterns through attachment theory in 12 questions.",
    "ja": "愛着理論で見る恋愛パターン。心理学に基づく12問分析。",
    "zh-CN": "从依恋类型看你的恋爱模式，12 道心理学题目。",
    "zh-TW": "從依戀類型看你的戀愛模式，12 道心理學題目。",
    "vi": "Mô hình yêu đương qua lý thuyết gắn bó — bài quiz 12 câu tâm lý.",
    "id": "Pola asmaramu lewat teori melekat — kuis psikologi 12 pertanyaan."
  }',
  'p3_test_attachment_style_love.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "연애", "성격"],
    "en": ["Psychology", "Love", "Personality"],
    "ja": ["心理", "恋愛", "性格"],
    "zh-CN": ["心理", "恋爱", "性格"],
    "zh-TW": ["心理", "戀愛", "性格"],
    "vi": ["Tâm lý", "Tình yêu", "Tính cách"],
    "id": ["Psikologi", "Cinta", "Kepribadian"]
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
