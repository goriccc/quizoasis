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
  'phase2_tea_therapy_test',
  '{
    "ko": "내 성격에 맞는 ''힐링 티(Tea)'' 찾기",
    "en": "Find the ''Healing Tea(Tea)'' That Suits My Personality",
    "ja": "私の性格に合う「癒しのティー（Tea）」を見つける",
    "zh-CN": "找到适合我性格的''治愈茶''",
    "zh-TW": "找到適合我性格的''治癒茶''",
    "vi": "Tìm ''Trà Chữa Lành'' Phù Hợp Với Tính Cách Của Tôi",
    "id": "Temukan ''Teh Penyembuhan'' yang Cocok dengan Kepribadian Saya"
  }',
  '{
    "ko": "복잡한 하루, 당신에게 필요한 쉼표는?",
    "en": "A complex day, what pause do you need?",
    "ja": "複雑な一日、あなたに必要な休止符は？",
    "zh-CN": "复杂的一天，你需要什么停顿？",
    "zh-TW": "複雜的一天，你需要什麼停頓？",
    "vi": "Một ngày phức tạp, bạn cần khoảng dừng nào?",
    "id": "Hari yang kompleks, jeda apa yang Anda butuhkan?"
  }',
  'phase2_test_036_tea_therapy.jpg',
  'healing',
  'lifestyle',
  '{
    "ko": ["힐링"],
    "en": ["Healing"],
    "ja": ["癒し"],
    "zh-CN": ["治愈"],
    "zh-TW": ["治愈"],
    "vi": ["Chữa lành"],
    "id": ["Penyembuhan"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
