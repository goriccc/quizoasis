-- 나의 탕진잼 유형은?
-- slug: phase3-tanjinjam-spending-type
-- thumbnail: p3_test_tanjinjam_spending_type.jpg

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

  'phase3-tanjinjam-spending-type',

  '{

    "ko": "나의 탕진잼 유형은?",

    "en": "What''s My Splurge-Joy Type?",

    "ja": "私の散財ジョイタイプは？",

    "zh-CN": "我的剁手快乐型是？",

    "zh-TW": "我的剁手快樂型是？",

    "vi": "Kiểu vui khi shopping của tôi?",

    "id": "Tipe bahagia belanjaku?"

  }',

  '{

    "ko": "12문항 이미지 4지선다로 보는 탕진잼 소비 행복 포인트 5유형. #소비 #쇼핑 #공감",

    "en": "12 image multiple-choice questions — 5 spending happiness types. #shopping #lifestyle #relatable",

    "ja": "画像12問4択で見る散財ジョイ・幸福ポイント5タイプ。#買い物 #ライフスタイル #共感",

    "zh-CN": "12 道图片四选一，五种消费快乐型。#购物 #生活方式 #共鸣",

    "zh-TW": "12 題圖片四選一，五種消費快樂型。#購物 #生活方式 #共鳴",

    "vi": "12 câu chọn ảnh 4 đáp án — 5 kiểu điểm hạnh phúc khi chi tiêu. #mua sắm #lối sống #đồng cảm",

    "id": "12 soal pilih gambar 4 opsi — 5 tipe titik bahagia saat belanja. #belanja #gaya hidup #relate"

  }',

  'p3_test_tanjinjam_spending_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["소비", "쇼핑", "공감"],

    "en": ["Shopping", "Lifestyle", "Relatable"],

    "ja": ["買い物", "ライフスタイル", "共感"],

    "zh-CN": ["购物", "生活方式", "共鸣"],

    "zh-TW": ["購物", "生活方式", "共鳴"],

    "vi": ["Mua sắm", "Lối sống", "Đồng cảm"],

    "id": ["Belanja", "Gaya hidup", "Relate"]

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
