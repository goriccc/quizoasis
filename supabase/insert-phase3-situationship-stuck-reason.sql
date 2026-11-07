-- 썸에서 연애로 못 넘어가는 진짜 이유
-- slug: phase3-situationship-stuck-reason
-- thumbnail: p3_test_situationship_stuck_reason.webp
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
  'phase3-situationship-stuck-reason',
  '{"ko": "썸에서 연애로 못 넘어가는 진짜 이유", "en": "The Real Reason You''re Stuck in a Situationship", "ja": "曖昧な関係から恋愛に進めない本当の理由", "zh-CN": "暧昧升不了正式恋爱的真正原因", "zh-TW": "曖昧升不了正式戀愛的真正原因", "vi": "Lý do thật sự khiến giai đoạn mập mờ không thành yêu", "id": "Alasan Sebenarnya Situationship Tak Jadi Pacaran"}',
  '{"ko": "썸은 잘 타는데 왜 연애로는 못 넘어갈까? 12가지 상황에서 관계가 멈추는 진짜 이유와 연애로 넘어가는 법을 알려드립니다.", "en": "The talking stage feels great—so why won''t it turn into a real relationship? Twelve scenes reveal why things stall and how to actually move forward.", "ja": "いい感じの関係はうまくいってるのに、なぜ恋愛に進めない？12の場面から関係が止まる本当の理由と、恋愛へ進む方法を教えます。", "zh-CN": "暧昧进展顺利，为什么就是升不成正式恋爱？12个情境告诉你关系卡住的真正原因，以及怎么跨进恋爱。", "zh-TW": "曖昧進展順利，為什麼就是升不成正式戀愛？12個情境告訴你關係卡住的真正原因，以及怎麼跨進戀愛。", "vi": "Đang tìm hiểu khá ổn—sao vẫn không thành chính thức? 12 tình huống chỉ ra lý do mối quan hệ dừng lại và cách bước sang yêu thật.", "id": "Hubungan abu-abu jalan mulus—kenapa tak naik ke pacaran? Dua belas situasi mengungkap kenapa hubungan macet dan cara benar-benar maju."}',
  'p3_test_situationship_stuck_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["썸", "연애유형"], "en": ["situationship", "dating type"], "ja": ["曖昧な関係", "恋愛タイプ"], "zh-CN": ["暧昧", "恋爱类型"], "zh-TW": ["曖昧", "戀愛類型"], "vi": ["đang tìm hiểu", "kiểu yêu"], "id": ["situationship", "tipe pacaran"]}',
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
