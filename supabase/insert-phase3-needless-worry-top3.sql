-- 쓸데없는 걱정 TOP3
-- slug: phase3-needless-worry-top3
-- thumbnail: p3_test_needless_worry_top3.webp

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
  'phase3-needless-worry-top3',
  '{"ko": "쓸데없는 걱정 TOP3", "en": "Your top 3 needless worries", "ja": "いらない心配トップ3", "zh-CN": "多余的担心TOP3", "zh-TW": "多餘的擔心TOP3", "vi": "Top 3 nỗi lo không đáng", "id": "3 khawatir yang sebenarnya tidak perlu"}',
  '{"ko": "12가지 장면에서 자주 하는 걱정을 골라, 나를 지키려는 걱정 TOP3와 내려놓는 법을 알려드립니다.", "en": "Pick the worry that shows up in 12 moments, and see your top 3, what they are protecting, and how to set them down.", "ja": "12の場面でよくする心配を選ぶと、自分を守ろうとする心配トップ3と、手放し方がわかります。", "zh-CN": "在12个场景里选出常出现的担心，看到在保护你的担心TOP3，以及怎么放下。", "zh-TW": "在12個場景裡選出常出現的擔心，看到在保護你的擔心TOP3，以及怎麼放下。", "vi": "Chọn nỗi lo hay gặp trong 12 tình huống, xem top 3 đang bảo vệ bạn và cách buông.", "id": "Pilih khawatir yang sering muncul di 12 situasi, lihat 3 teratas yang sedang menjagamu, dan cara melepasnya."}',
  'p3_test_needless_worry_top3.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["걱정", "자기이해", "연애테스트"], "en": ["needless worries", "self-discovery", "dating quiz"], "ja": ["いらない心配", "自己理解", "恋愛診断"], "zh-CN": ["多余的担心", "自我了解", "恋爱测试"], "zh-TW": ["多餘的擔心", "自我了解", "戀愛測驗"], "vi": ["lo không đáng", "hiểu mình", "test tình yêu"], "id": ["khawatir tidak perlu", "mengenal diri", "tes pacaran"]}',
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
