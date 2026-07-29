-- 나의 의사결정 스타일
-- slug: phase3-decision-making-style
-- thumbnail: p3_test_decision_making_style.webp

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
  'phase3-decision-making-style',
  '{"ko": "나의 의사결정 스타일", "en": "My Decision-Making Style", "ja": "私の意思決定スタイル", "zh-CN": "我的决策风格", "zh-TW": "我的決策風格", "vi": "Phong cách ra quyết định của tôi", "id": "Gaya Pengambilan Keputusan-ku"}',
  '{"ko": "12가지 질문으로 나의 의사결정 스타일과 패턴을 분석합니다. 6개 영역별 점수와 강점·약점·개선 방향까지 확인하세요.", "en": "Analyze your decision-making style and patterns with 12 questions. See scores across 6 domains plus strengths, weaknesses, and improvement tips.", "ja": "12の質問で意思決定スタイルとパターンを分析。6領域スコアと強み・弱み・改善方向まで確認。", "zh-CN": "通过12个问题分析你的决策风格与模式。含6个领域得分及优势、弱点与改进方向。", "zh-TW": "透過12個問題分析你的決策風格與模式。含6個領域得分及優勢、弱點與改進方向。", "vi": "Phân tích phong cách và mẫu ra quyết định qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, điểm yếu và hướng cải thiện.", "id": "Analisis gaya dan pola pengambilan keputusan lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, kelemahan, dan tips perbaikan."}',
  'p3_test_decision_making_style.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["의사결정", "결정패턴", "사고유형", "MBTI", "자기이해"], "en": ["decision-making", "decision pattern", "thinking type", "MBTI", "self-understanding"], "ja": ["意思決定", "決定パターン", "思考タイプ", "MBTI", "自己理解"], "zh-CN": ["决策", "决策模式", "思维类型", "MBTI", "自我理解"], "zh-TW": ["決策", "決策模式", "思維類型", "MBTI", "自我理解"], "vi": ["ra quyết định", "mẫu quyết định", "kiểu tư duy", "MBTI", "hiểu bản thân"], "id": ["pengambilan keputusan", "pola keputusan", "tipe berpikir", "MBTI", "memahami diri"]}',
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
