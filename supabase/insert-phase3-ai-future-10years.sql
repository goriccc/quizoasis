-- AI가 그린 나의 '10년 후'
-- slug: phase3-ai-future-10years
-- thumbnail: p3_test_ai_future_10years.webp

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
  'phase3-ai-future-10years',
  '{"ko": "AI가 그린 나의 ''10년 후''", "en": "AI Paints My Life in 10 Years", "ja": "AIが描く私の『10年後』", "zh-CN": "AI描绘我的『十年后』", "zh-TW": "AI描繪我的『十年後』", "vi": "AI vẽ cuộc sống 10 năm sau của tôi", "id": "AI Menggambar Hidupku 10 Tahun Lagi"}',
  '{"ko": "12가지 질문으로 AI가 그려주는 10년 후 나의 하루와 라이프스타일을 확인합니다.", "en": "Answer 12 questions and see the day and lifestyle AI paints for you in 10 years.", "ja": "12の質問で、AIが描く10年後の一日とライフスタイルを確認します。", "zh-CN": "通过12个问题，看看AI为你描绘的十年后的一天与生活方式。", "zh-TW": "透過12個問題，看看AI為你描繪的十年後的一天與生活方式。", "vi": "Trả lời 12 câu hỏi để xem một ngày và lối sống sau 10 năm mà AI vẽ cho bạn.", "id": "Jawab 12 pertanyaan dan lihat hari serta gaya hidup 10 tahun lagi yang digambar AI untukmu."}',
  'p3_test_ai_future_10years.webp',
  'psychology',
  'personality',
  '{"ko": ["10년후", "미래", "라이프스타일", "AI분석", "개인화"], "en": ["10 years later", "future", "lifestyle", "AI analysis", "personalized"], "ja": ["10年後", "未来", "ライフスタイル", "AI分析", "パーソナライズ"], "zh-CN": ["十年后", "未来", "生活方式", "AI分析", "个性化"], "zh-TW": ["十年後", "未來", "生活方式", "AI分析", "個人化"], "vi": ["10 năm sau", "tương lai", "lối sống", "phân tích AI", "cá nhân hóa"], "id": ["10 tahun lagi", "masa depan", "gaya hidup", "analisis AI", "personal"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
