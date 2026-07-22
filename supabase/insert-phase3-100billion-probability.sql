-- 내가 100억 부자가 될 확률
-- slug: phase3-100billion-probability
-- thumbnail: p3_test_100billion_probability.webp

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
  'phase3-100billion-probability',
  '{"ko": "내가 100억 부자가 될 확률", "en": "My Odds of Becoming a ₩10 Billion Rich Person", "ja": "私が100億ウォンの金持ちになる確率", "zh-CN": "我成为100亿韩元富翁的概率", "zh-TW": "我成為100億韓元富翁的機率", "vi": "Xác suất tôi trở thành người giàu 100 tỷ won", "id": "Peluangku Jadi Kaya 100 Miliar Won"}',
  '{"ko": "12문항으로 나의 부의 마인드셋과 재테크 성향을 분석해 100억 부자가 될 확률을 알려드립니다.", "en": "12 questions analyze your wealth mindset and investing habits to estimate your odds of reaching ₩10 billion.", "ja": "12問であなたの富のマインドセットと投資傾向を分析し、100億ウォンの金持ちになる確率をお伝えします。", "zh-CN": "通过12道题分析你的财富心态与理财倾向，告诉你成为100亿韩元富翁的概率。", "zh-TW": "透過12題分析你的財富心態與理財傾向，告訴你成為100億韓元富翁的機率。", "vi": "12 câu hỏi phân tích tư duy giàu có và xu hướng đầu tư để ước tính xác suất bạn đạt 100 tỷ won.", "id": "12 pertanyaan menganalisis mindset kekayaan dan kecenderungan investasi untuk memperkirakan peluangmu mencapai 100 miliar won."}',
  'p3_test_100billion_probability.webp',
  'psychology',
  'personality',
  '{"ko": ["100억", "부자", "재테크", "마인드셋", "돈"], "en": ["10 billion", "rich", "investing", "mindset", "money"], "ja": ["100億", "金持ち", "投資", "マインドセット", "お金"], "zh-CN": ["100亿", "富翁", "理财", "心态", "金钱"], "zh-TW": ["100億", "富翁", "理財", "心態", "金錢"], "vi": ["100 tỷ", "giàu", "đầu tư", "mindset", "tiền"], "id": ["100 miliar", "kaya", "investasi", "mindset", "uang"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
