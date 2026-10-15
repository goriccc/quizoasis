-- 나는 왜 늘 비슷한 사람에게 끌릴까?
-- slug: phase3-same-type-attraction
-- thumbnail: p3_test_same_type_attraction.webp

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
  'phase3-same-type-attraction',
  '{"ko": "나는 왜 늘 비슷한 사람에게 끌릴까?", "en": "Why Am I Always Drawn to the Same Type?", "ja": "なぜ私はいつも似たような人に惹かれるの？", "zh-CN": "为什么我总是被同一类人吸引？", "zh-TW": "為什麼我總是被同一型的人吸引？", "vi": "Vì sao mình luôn bị thu hút bởi cùng một kiểu người?", "id": "Kenapa Aku Selalu Tertarik pada Tipe yang Sama?"}',
  '{"ko": "헤어지고 나면 꼭 비슷한 사람이 또 나타난다면? 12가지 상황으로 구원자형·나쁜 남녀 끌림형·안정 추구형 등 6가지 중 나만의 끌림 공식을 찾아드립니다.", "en": "Why does the same kind of person keep showing up after every breakup? Through 12 situations, find your attraction formula among 6 types, from The Rescuer and The Hard-to-Get Chaser to The Stability Seeker.", "ja": "別れても、なぜかまた似たような人が現れる？12の状況から、救世主型・つかめない人に惹かれ型・安定志向型など6タイプの中で、あなただけの「惹かれる法則」を見つけます。", "zh-CN": "每次分手后，总会遇到差不多的人？通过12个情境，从拯救者型、若即若离吸引型、安稳追求型等6种类型中，找出你专属的心动公式。", "zh-TW": "每次分手後，總會遇到差不多的人？透過12個情境，從拯救者型、若即若離吸引型、安穩追求型等6種類型中，找出你專屬的心動公式。", "vi": "Chia tay xong lại gặp đúng kiểu người cũ? Qua 12 tình huống, hãy tìm ra công thức rung động của riêng bạn trong 6 kiểu như Vị Cứu Tinh, Mê Người Khó Nắm Bắt, Tìm Kiếm Bình Yên.", "id": "Habis putus, kok ketemu tipe yang mirip lagi? Lewat 12 situasi, temukan rumus ketertarikanmu di antara 6 tipe seperti Sang Penyelamat, Suka yang Sulit Digapai, dan Pencari Kestabilan."}',
  'p3_test_same_type_attraction.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애패턴", "이상형", "연애심리"], "en": ["dating pattern", "ideal type", "love psychology"], "ja": ["恋愛パターン", "理想のタイプ", "恋愛心理"], "zh-CN": ["恋爱模式", "理想型", "恋爱心理"], "zh-TW": ["戀愛模式", "理想型", "戀愛心理"], "vi": ["kiểu yêu đương", "hình mẫu lý tưởng", "tâm lý tình yêu"], "id": ["pola pacaran", "tipe ideal", "psikologi cinta"]}',
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
