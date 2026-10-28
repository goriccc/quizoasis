-- 별자리로 보는 연애 본능
-- slug: phase3-zodiac-love-instinct
-- thumbnail: p3_test_zodiac_love_instinct.webp

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
  'phase3-zodiac-love-instinct',
  '{"ko": "별자리로 보는 연애 본능", "en": "What love instinct is in my sign?", "ja": "星座で見る、恋愛の本能は？", "zh-CN": "从星座看，我的恋爱本能是？", "zh-TW": "從星座看，我的戀愛本能是？", "vi": "Cung hoàng đạo nói gì về bản năng yêu của tôi?", "id": "Insting cinta di zodiakku apa?"}',
  '{"ko": "내 별자리가 들려주는 연애 본능과 대화 팁을 가볍게 만나 보세요. 별자리만 고르면 되고, 선택한 값은 저장하지 않습니다.", "en": "Pick your sign for a light read of your love instinct and a talk tip. Only the sign is used, and nothing is saved.", "ja": "星座を選ぶだけで、恋愛の本能と会話のヒントがわかります。選んだ内容は保存しません。", "zh-CN": "选一个星座，轻松看看恋爱本能和对话小提示。只选星座，不会保存。", "zh-TW": "選一個星座，輕鬆看看戀愛本能和對話小提示。只選星座，不會保存。", "vi": "Chọn cung của bạn để xem bản năng yêu và mẹo trò chuyện. Chỉ dùng cung, không lưu gì.", "id": "Pilih zodiakmu untuk melihat insting cinta dan tip ngobrol. Hanya zodiak yang dipakai, tidak disimpan."}',
  'p3_test_zodiac_love_instinct.webp',
  'psychology',
  'personality',
  'personality_2',
  '{"ko": ["별자리", "별자리궁합", "연애테스트"], "en": ["zodiac", "love instinct", "dating"], "ja": ["星座", "恋愛", "恋愛本能"], "zh-CN": ["星座", "恋爱本能", "恋爱"], "zh-TW": ["星座", "戀愛本能", "戀愛"], "vi": ["cung hoàng đạo", "bản năng yêu", "hẹn hò"], "id": ["zodiak", "insting cinta", "pacaran"]}',
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
