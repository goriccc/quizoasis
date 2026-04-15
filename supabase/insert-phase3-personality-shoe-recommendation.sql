-- 내 성격과 어울리는 신발 추천

-- slug: phase3-personality-shoe-recommendation

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

  'phase3-personality-shoe-recommendation',

  '{

    "ko": "내 성격과 어울리는 신발 추천",

    "en": "Shoes That Match Your Personality",

    "ja": "性格に合う靴おすすめ",

    "zh-CN": "与你性格相配的鞋款推荐",

    "zh-TW": "與你性格相配的鞋款推薦",

    "vi": "Gợi ý giày hợp tính cách của bạn",

    "id": "Rekomendasi sepatu yang cocok dengan kepribadianmu"

  }',

  '{

    "ko": "12문항 이미지 4지선다로 보는 성격별 신발 추천 6유형. #패션 #신발 #성격 #OOTD #쇼핑",

    "en": "12 image questions — 6 shoe types for your personality. #fashion #shoes #personality #OOTD #shopping",

    "ja": "画像12問4択で見る性格別おすすめ靴6タイプ。#ファッション #靴 #性格 #OOTD #ショッピング",

    "zh-CN": "12 道图片四选一，六种性格鞋款推荐。#时尚 #鞋 #性格 #OOTD #购物",

    "zh-TW": "12 題圖片四選一，六種性格鞋款推薦。#時尚 #鞋 #性格 #OOTD #購物",

    "vi": "12 câu chọn ảnh — 6 kiểu giày theo tính cách. #thời trang #giày #OOTD",

    "id": "12 pertanyaan gambar — 6 tipe sepatu sesuai kepribadian. #fashion #sepatu #OOTD"

  }',

  'p3_test_personality_shoe_recommendation.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["패션", "신발", "성격", "OOTD", "쇼핑"],

    "en": ["Fashion", "Shoes", "Personality", "OOTD", "Shopping"],

    "ja": ["ファッション", "靴", "性格", "OOTD", "ショッピング"],

    "zh-CN": ["时尚", "鞋", "性格", "OOTD", "购物"],

    "zh-TW": ["時尚", "鞋", "性格", "OOTD", "購物"],

    "vi": ["Thời trang", "Giày", "Tính cách", "OOTD", "Mua sắm"],

    "id": ["Fashion", "Sepatu", "Kepribadian", "OOTD", "Belanja"]

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
