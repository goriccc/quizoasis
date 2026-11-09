-- 나는 왜 연애 중에도 혼자가 편할까?
-- slug: phase3-alone-even-in-love
-- thumbnail: p3_test_alone_even_in_love.webp
-- category: personality · format: scenario_4

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
  'phase3-alone-even-in-love',
  '{"ko": "나는 왜 연애 중에도 혼자가 편할까?", "en": "Why Do I Feel More Comfortable Alone—Even in a Relationship?", "ja": "なぜ交際中でも一人の方が楽なの？", "zh-CN": "为什么恋爱中我也更想一个人？", "zh-TW": "為什麼戀愛中我也更想一個人？", "vi": "Tại sao đang yêu mà mình vẫn thích ở một mình hơn?", "id": "Kenapa Saat Pacaran Pun Aku Lebih Nyaman Sendiri?"}',
  '{"ko": "연인이 좋은데 왜 혼자 있는 시간이 필요할까? 10가지 상황으로 혼자가 편한 진짜 이유와 독립 욕구를 이해하는 법을 알려드립니다.", "en": "You like your partner—so why do you still need alone time? Ten situations reveal the real reason and how to understand that independence need.", "ja": "恋人は好きなのに、なぜ一人の時間が必要なの？10の場面で一人が楽な本当の理由と、自立欲求の理解のしかたを伝えます。", "zh-CN": "明明喜欢对方，为什么还需要独处时间？用10个情境找出独处更舒服的真正原因，以及如何理解独立需求。", "zh-TW": "明明喜歡對方，為什麼還需要獨處時間？用10個情境找出獨處更舒服的真正原因，以及如何理解獨立需求。", "vi": "Thích người yêu—vậy sao vẫn cần thời gian một mình? 10 tình huống giúp tìm lý do thật và cách hiểu nhu cầu độc lập.", "id": "Pacarnya disukai—jadi kenapa masih butuh waktu sendiri? Sepuluh situasi mengungkap alasan asli dan cara memahami kebutuhan mandiri."}',
  'p3_test_alone_even_in_love.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["내향", "연애심리"], "en": ["introvert", "relationship psychology"], "ja": ["内向", "恋愛心理"], "zh-CN": ["内向", "恋爱心理"], "zh-TW": ["內向", "戀愛心理"], "vi": ["hướng nội", "tâm lý tình yêu"], "id": ["introvert", "psikologi cinta"]}',
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
