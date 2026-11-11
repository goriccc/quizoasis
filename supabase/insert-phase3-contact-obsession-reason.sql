-- 나는 왜 연애하면 연락에 집착하게 될까?
-- slug: phase3-contact-obsession-reason
-- thumbnail: p3_test_contact_obsession_reason.webp
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
  'phase3-contact-obsession-reason',
  '{"ko": "나는 왜 연애하면 연락에 집착하게 될까?", "en": "Why Do I Get So Obsessed with Texts When I''m Dating?", "ja": "なぜ恋愛すると連絡に執着してしまうの？", "zh-CN": "为什么一恋爱就对消息这么执着？", "zh-TW": "為什麼一戀愛就對消息這麼執著？", "vi": "Tại sao yêu rồi lại ám ảnh tin nhắn đến vậy?", "id": "Kenapa Begitu Obsesi Chat Begitu Pacaran?"}',
  '{"ko": "연락이 늦어지면, 왜 이렇게 마음이 조급해질까? 10가지 상황으로 연락에 매달리게 되는 나의 진짜 이유와 숨은 욕구를 알려드립니다.", "en": "When a reply is late, why does your chest tighten so fast? These 10 scenarios reveal the real reason you cling to contact — and the hidden need behind it.", "ja": "返信が遅れると、なぜこんなに焦るの？ 10の場面で、連絡にすがってしまう本当の理由と隠れた欲求を教えます。", "zh-CN": "回复晚一点，心为什么这么急？用10个情境找出你离不开联系的真正原因，以及背后的隐藏需求。", "zh-TW": "回覆晚一點，心為什麼這麼急？用10個情境找出你離不開聯繫的真正原因，以及背後的隱藏需求。", "vi": "Tin trả lời chậm một chút, sao tim lại sốt ruột? 10 tình huống giúp bạn tìm ra lý do thật sự khiến mình bám lấy liên lạc — và nhu cầu ẩn phía sau.", "id": "Balasan agak lambat, kenapa dada langsung sesak? Lewat 10 situasi, temukan alasan sejati kenapa kamu bergantung pada kontak — dan kebutuhan tersembunyi di baliknya."}',
  'p3_test_contact_obsession_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연락집착", "연애심리"], "en": ["Text Obsession", "Dating Psychology"], "ja": ["連絡執着", "恋愛心理"], "zh-CN": ["消息执着", "恋爱心理"], "zh-TW": ["消息執著", "戀愛心理"], "vi": ["Ám ảnh tin nhắn", "Tâm lý tình yêu"], "id": ["Obsesi Chat", "Psikologi Pacaran"]}',
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
