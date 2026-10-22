-- 크리스마스까지 솔로 탈출 확률
-- slug: phase3-christmas-solo-escape
-- thumbnail: p3_test_christmas_solo_escape.webp

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
  'phase3-christmas-solo-escape',
  '{"ko": "크리스마스까지 솔로 탈출 확률", "en": "What are the odds I meet someone by Christmas?", "ja": "クリスマスまでに恋人ができる確率は？", "zh-CN": "到圣诞节能脱单的概率是多少？", "zh-TW": "到聖誕節能脫單的機率是多少？", "vi": "Đến Giáng sinh, khả năng thoát ế là bao nhiêu?", "id": "Sampai Natal, peluang lepas jomblo berapa?"}',
  '{"ko": "10가지 상황에서 만남을 만들 준비와 행동을 점수로 합산해 크리스마스까지의 솔로 탈출 확률을 알려드립니다.", "en": "Ten situations add up how ready you are to meet someone, and give you the odds of finding someone by Christmas.", "ja": "10の場面から、出会いを作る準備と行動を点数にして、クリスマスまでに恋人ができる確率を出します。", "zh-CN": "用10个情境，把你制造见面的准备和行动加成分数，算出圣诞前脱单的概率。", "zh-TW": "用10個情境，把你製造見面的準備和行動加成分數，算出聖誕前脫單的機率。", "vi": "Mười tình huống cộng điểm sự chuẩn bị và hành động để gặp ai đó, rồi cho ra khả năng thoát ế trước Giáng sinh.", "id": "Sepuluh situasi menjumlahkan kesiapan dan tindakanmu untuk bertemu seseorang, lalu memberi peluang lepas jomblo sebelum Natal."}',
  'p3_test_christmas_solo_escape.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["솔로탈출", "연애테스트"], "en": ["single at Christmas", "dating quiz"], "ja": ["クリスマスまでに恋人", "恋愛診断"], "zh-CN": ["圣诞脱单", "恋爱测试"], "zh-TW": ["聖誕脫單", "戀愛測驗"], "vi": ["thoát ế Giáng sinh", "test tình yêu"], "id": ["lepas jomblo Natal", "tes pacaran"]}',
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
