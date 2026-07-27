-- 나는 어떤 웹툰 주인공?
-- slug: phase3-webtoon-protagonist
-- thumbnail: p3_test_webtoon_protagonist.webp

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
  'phase3-webtoon-protagonist',
  '{"ko": "나는 어떤 웹툰 주인공?", "en": "What Webtoon Protagonist Am I?", "ja": "私はどんなウェブトゥーン主人公?", "zh-CN": "我是哪种网漫主角?", "zh-TW": "我是哪種網漫主角?", "vi": "Tôi là nhân vật chính webtoon kiểu nào?", "id": "Aku Protagonis Webtoon Tipe Apa?"}',
  '{"ko": "12가지 질문으로 내가 웹툰 속 주인공이 된다면 어떤 유형인지 분석하고 추천 웹툰 장르를 알려드립니다.", "en": "Analyze what type of webtoon protagonist you would be through 12 questions and get recommended genres.", "ja": "12の質問でウェブトゥーンの主人公タイプを分析し、おすすめジャンルをお伝えします。", "zh-CN": "通过12个问题分析你成为网漫主角的类型，并推荐适合你的网漫类型。", "zh-TW": "透過12個問題分析你成為網漫主角的類型，並推薦適合你的網漫類型。", "vi": "Phân tích bạn sẽ là kiểu nhân vật chính webtoon nào qua 12 câu hỏi và gợi ý thể loại phù hợp.", "id": "Analisis tipe protagonis webtoon-mu lewat 12 pertanyaan dan dapatkan rekomendasi genre."}',
  'p3_test_webtoon_protagonist.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["웹툰", "주인공", "먼치킨", "로맨스", "웹툰추천"], "en": ["webtoon", "protagonist", "op mc", "romance", "webtoon rec"], "ja": ["ウェブトゥーン", "主人公", "最強", "ロマンス", "おすすめ"], "zh-CN": ["网漫", "主角", "龙傲天", "浪漫", "网漫推荐"], "zh-TW": ["網漫", "主角", "龍傲天", "浪漫", "網漫推薦"], "vi": ["webtoon", "nhân vật chính", "overpowered", "lãng mạn", "gợi ý webtoon"], "id": ["webtoon", "protagonis", "overpowered", "romance", "rekomendasi webtoon"]}',
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
