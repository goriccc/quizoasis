-- 나의 '금사빠' 속도 측정
-- slug: phase3-fall-in-love-speed
-- thumbnail: p3_test_fall_in_love_speed.webp

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
  'phase3-fall-in-love-speed',
  '{"ko": "나의 ''금사빠'' 속도 측정", "en": "Measure My Fall-in-Love Speed", "ja": "私の『一目惚れ』スピード測定", "zh-CN": "测测我的『秒速心动』", "zh-TW": "測測我的『秒速心動』", "vi": "Đo tốc độ ''yêu nhanh'' của tôi", "id": "Ukur Kecepatan ''Jatuh Cinta''-ku"}',
  '{"ko": "12가지 상황극으로 사랑에 빠지는 속도를 측정합니다.", "en": "Measure how fast you fall in love with 12 real-life scenarios.", "ja": "12のシチュエーションで恋に落ちるスピードを測定します。", "zh-CN": "通过12个情景测量你坠入爱河的速度。", "zh-TW": "透過12個情景測量你墜入愛河的速度。", "vi": "Đo tốc độ yêu qua 12 tình huống thực tế.", "id": "Ukur seberapa cepat kamu jatuh cinta lewat 12 skenario nyata."}',
  'p3_test_fall_in_love_speed.webp',
  'psychology',
  'personality',
  '{"ko": ["금사빠", "설렘", "연애", "첫눈에반함", "폴인러브"], "en": ["fall in love", "crush", "dating", "love at first sight", "romance"], "ja": ["一目惚れ", "ときめき", "恋愛", "一目ぼれ", "フォーリンラブ"], "zh-CN": ["秒速心动", "心动", "恋爱", "一见钟情", "坠入爱河"], "zh-TW": ["秒速心動", "心動", "戀愛", "一見鍾情", "墜入愛河"], "vi": ["yêu nhanh", "rung động", "hẹn hò", "yêu từ cái nhìn đầu", "tình yêu"], "id": ["jatuh cinta", "deg-degan", "pacaran", "cinta pandang pertama", "romance"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
