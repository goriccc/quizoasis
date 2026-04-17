-- 내 방이 말해주는 나의 성격
-- slug: phase3-room-personality-analysis

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

  'phase3-room-personality-analysis',

  '{

    "ko": "내 방이 말해주는 나의 성격",

    "en": "What Your Room Says About Your Personality",

    "ja": "あなたの部屋が語る性格",

    "zh-CN": "房间透露的你是什么性格",

    "zh-TW": "房間透露的你是什麼性格",

    "vi": "Căn phòng của bạn nói gì về tính cách?",

    "id": "Apa Kata Kamarmu tentang Kepribadianmu?"

  }',

  '{

    "ko": "12문항 이미지 4지선다로 보는 성격·이상적인 방 스타일 6유형. #성격 #라이프스타일",

    "en": "12 image questions — 6 personality & dream room types. #personality #lifestyle",

    "ja": "画像12問4択で見る性格＆理想の部屋タイプ6種。#性格 #ライフスタイル",

    "zh-CN": "12 道图片四选一，六种性格与理想房间风格。#性格 #生活方式",

    "zh-TW": "12 題圖片四選一，六種性格與理想房間風格。#性格 #生活方式",

    "vi": "12 câu chọn ảnh 4 đáp án — 6 kiểu tính cách & phòng mơ ước. #tính cách #lifestyle",

    "id": "12 pertanyaan gambar 4 pilihan — 6 tipe kepribadian & gaya kamar impian. #kepribadian #gaya hidup"

  }',

  'p3_test_room_personality_analysis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["성격", "라이프스타일"],

    "en": ["Personality", "Lifestyle"],

    "ja": ["性格", "ライフスタイル"],

    "zh-CN": ["性格", "生活方式"],

    "zh-TW": ["性格", "生活方式"],

    "vi": ["Tính cách", "Lifestyle"],

    "id": ["Kepribadian", "Gaya hidup"]

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
