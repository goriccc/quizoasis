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
  'phase2_dream_car_test',
  '{
    "ko": "내 드림카는? 성향별 자동차 추천",
    "en": "What''s My Dream Car? Car Recommendation by Personality",
    "ja": "私のドリームカーは？性格別自動車おすすめ",
    "zh-CN": "我的梦想车是什么？按性格推荐汽车",
    "zh-TW": "我的夢想車是什麼？按性格推薦汽車",
    "vi": "Xe mơ ước của tôi là gì? Đề xuất xe theo tính cách",
    "id": "Apa Mobil Impian Saya? Rekomendasi Mobil Berdasarkan Kepribadian"
  }',
  '{
    "ko": "차는 단순한 이동 수단이 아닙니다.",
    "en": "A car is not just a means of transportation.",
    "ja": "車は単なる移動手段ではありません。",
    "zh-CN": "汽车不仅仅是交通工具。",
    "zh-TW": "汽車不僅僅是交通工具。",
    "vi": "Xe hơi không chỉ là phương tiện di chuyển.",
    "id": "Mobil bukan hanya sarana transportasi."
  }',
  'phase2_test_037_dream_car.jpg',
  'fun',
  'lifestyle',
  '{
    "ko": ["재미"],
    "en": ["Fun"],
    "ja": ["楽しい"],
    "zh-CN": ["有趣"],
    "zh-TW": ["有趣"],
    "vi": ["Vui vẻ"],
    "id": ["Menyenangkan"]
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
