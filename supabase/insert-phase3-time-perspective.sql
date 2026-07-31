-- 나의 과거-현재-미래 시간관
-- slug: phase3-time-perspective
-- thumbnail: p3_test_time_perspective.webp

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
  'phase3-time-perspective',
  '{"ko": "나의 과거-현재-미래 시간관", "en": "My Past-Present-Future Time Perspective", "ja": "私の過去・現在・未来の時間観", "zh-CN": "我的过去-现在-未来时间观", "zh-TW": "我的過去-現在-未來時間觀", "vi": "Quan niệm thời gian Quá khứ-Hiện tại-Tương lai của tôi", "id": "Perspektif Waktu Masa Lalu-Kini-Masa Depanku"}',
  '{"ko": "12가지 질문으로 나는 과거·현재·미래 중 어느 시간대에 주로 머무는지 분석합니다. 6개 영역별 점수와 행복 전략까지 확인하세요.", "en": "Analyze which time zone you mainly live in—past, present, or future—with 12 questions. See scores across 6 domains plus happiness strategies.", "ja": "12の質問で過去・現在・未来のどの時間帯に主にいるか分析。6領域スコアと幸福戦略まで確認。", "zh-CN": "通过12个问题分析你主要活在过去、现在还是未来。含6个领域得分与幸福策略。", "zh-TW": "透過12個問題分析你主要活在過去、現在還是未來。含6個領域得分與幸福策略。", "vi": "Phân tích bạn chủ yếu sống ở quá khứ, hiện tại hay tương lai qua 12 câu hỏi. Xem điểm 6 lĩnh vực và chiến lược hạnh phúc.", "id": "Analisis zona waktu utama—masa lalu, kini, atau depan—lewat 12 pertanyaan. Lihat skor 6 domain dan strategi kebahagiaan."}',
  'p3_test_time_perspective.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["시간관", "심리학", "과거현재미래", "짐바르도", "자기이해"], "en": ["time perspective", "psychology", "past present future", "Zimbardo", "self-understanding"], "ja": ["時間観", "心理学", "過去現在未来", "ジンバルド", "自己理解"], "zh-CN": ["时间观", "心理学", "过去现在未来", "津巴多", "自我理解"], "zh-TW": ["時間觀", "心理學", "過去現在未來", "津巴多", "自我理解"], "vi": ["quan niệm thời gian", "tâm lý", "quá khứ hiện tại tương lai", "Zimbardo", "hiểu bản thân"], "id": ["perspektif waktu", "psikologi", "masa lalu kini depan", "Zimbardo", "memahami diri"]}',
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
