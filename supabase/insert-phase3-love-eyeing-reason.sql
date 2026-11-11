-- 나는 왜 연애할 때 자꾸 눈치만 볼까?
-- slug: phase3-love-eyeing-reason
-- thumbnail: p3_test_love_eyeing_reason.webp
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
  'phase3-love-eyeing-reason',
  '{"ko": "나는 왜 연애할 때 자꾸 눈치만 볼까?", "en": "Why Do I Keep Reading the Room So Much When Dating?", "ja": "なぜ恋愛するとつい空気を読みすぎるの？", "zh-CN": "为什么一恋爱就总爱察言观色？", "zh-TW": "為什麼一戀愛就總愛察言觀色？", "vi": "Tại sao yêu rồi lại cứ dò xét sắc mặt đối phương?", "id": "Kenapa Pacaran Selalu Baca Situasi Berlebihan?"}',
  '{"ko": "연애만 하면, 왜 상대 기분부터 살피게 될까? 10가지 상황으로 내가 눈치를 보게 되는 진짜 이유와 편해지는 법을 알려드립니다.", "en": "Why do you check their mood first the moment you''re dating? These 10 scenarios reveal the real reason you keep reading the room — and how to feel freer.", "ja": "恋愛になると、なぜ相手の機嫌から気にしちゃうの？ 10の場面で、空気を読んでしまう本当の理由と楽になる方法を教えます。", "zh-CN": "一恋爱，为什么总先看对方脸色？用10个情境找出你总爱察言观色的真正原因，以及让自己轻松下来的方法。", "zh-TW": "一戀愛，為什麼總先看對方臉色？用10個情境找出你總愛察言觀色的真正原因，以及讓自己輕鬆下來的方法。", "vi": "Vừa yêu, sao lại nhìn sắc mặt đối phương trước? 10 tình huống giúp bạn tìm ra lý do thật sự và cách sống nhẹ nhàng hơn.", "id": "Begitu pacaran, kenapa selalu cek mood mereka dulu? Lewat 10 situasi, temukan alasan sejati kenapa kamu terus baca situasi — dan cara merasa lebih lega."}',
  'p3_test_love_eyeing_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애눈치", "연애심리", "연애유형"], "en": ["Dating Nunchi", "Dating Psychology", "Dating Types"], "ja": ["恋愛の空気読み", "恋愛心理", "恋愛タイプ"], "zh-CN": ["恋爱察言观色", "恋爱心理", "恋爱类型"], "zh-TW": ["戀愛察言觀色", "戀愛心理", "戀愛類型"], "vi": ["Đọc vị trong tình yêu", "Tâm lý tình yêu", "Kiểu yêu"], "id": ["Baca Situasi Pacaran", "Psikologi Pacaran", "Tipe Pacaran"]}',
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
