-- 나의 낙관주의 지수
-- slug: phase3-optimism-index
-- thumbnail: p3_test_optimism_index.webp

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
  'phase3-optimism-index',
  '{"ko": "나의 낙관주의 지수", "en": "My Optimism Index", "ja": "私の楽観主義指数", "zh-CN": "我的乐观主义指数", "zh-TW": "我的樂觀主義指數", "vi": "Chỉ số Lạc quan của tôi", "id": "Indeks Optimisme-ku"}',
  '{"ko": "12가지 질문으로 셀리그만 3P(영구성·보편성·개인화) 기반 낙관주의 지수와 회복 패턴을 측정합니다.", "en": "Measure your optimism index and recovery pattern with 12 questions based on Seligman''s 3P (Permanence, Pervasiveness, Personalization).", "ja": "12の質問でセリグマン3P（永続性・普遍性・個人化）に基づく楽観主義指数と回復パターンを測定。", "zh-CN": "通过12个问题，基于塞利格曼3P（永久性、普遍性、个人化）测量乐观指数与恢复模式。", "zh-TW": "透過12個問題，基於塞利格曼3P（永久性、普遍性、個人化）測量樂觀指數與恢復模式。", "vi": "Đo chỉ số lạc quan và mẫu phục hồi qua 12 câu hỏi dựa trên 3P của Seligman (Vĩnh viễn, Lan rộng, Cá nhân hóa).", "id": "Ukur indeks optimisme dan pola pemulihan lewat 12 pertanyaan berbasis 3P Seligman (Permanen, Meresap, Personalisasi)."}',
  'p3_test_optimism_index.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["낙관주의", "긍정", "회복탄력성", "심리", "셀리그만"], "en": ["optimism", "positivity", "resilience", "psychology", "Seligman"], "ja": ["楽観主義", "ポジティブ", "回復力", "心理学", "セリグマン"], "zh-CN": ["乐观主义", "积极", "复原力", "心理学", "塞利格曼"], "zh-TW": ["樂觀主義", "積極", "復原力", "心理學", "塞利格曼"], "vi": ["lạc quan", "tích cực", "phục hồi", "tâm lý", "Seligman"], "id": ["optimisme", "positif", "resiliensi", "psikologi", "Seligman"]}',
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
