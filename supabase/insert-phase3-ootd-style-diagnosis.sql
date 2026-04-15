-- 오늘 뭐 입지? OOTD 스타일 진단

-- slug: phase3-ootd-style-diagnosis

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

  'phase3-ootd-style-diagnosis',

  '{

    "ko": "오늘 뭐 입지? OOTD 스타일 진단",

    "en": "What Should I Wear Today? OOTD Style Quiz",

    "ja": "今日なに着る？OOTDスタイル診断",

    "zh-CN": "今天穿什么？OOTD 风格诊断",

    "zh-TW": "今天穿什麼？OOTD 風格診斷",

    "vi": "Hôm nay mặc gì? Trắc nghiệm phong cách OOTD",

    "id": "Mau pakai apa hari ini? Tes gaya OOTD"

  }',

  '{

    "ko": "12문항 이미지 2지선다로 보는 패션 정체성 스펙트럼 6유형. #패션 #OOTD #스타일",

    "en": "12 image A/B questions — 6 fashion identity types. #Fashion #OOTD #Style",

    "ja": "画像12問の2択で見るファッションアイデンティティ6タイプ。#ファッション #OOTD #スタイル",

    "zh-CN": "12 道图片二选一，六种时尚身份光谱。#时尚 #OOTD #穿搭",

    "zh-TW": "12 題圖片二選一，六種時尚身份光譜。#時尚 #OOTD #穿搭",

    "vi": "12 câu chọn ảnh A/B — 6 kiểu bản sắc thời trang. #Thời trang #OOTD #Phong cách",

    "id": "12 pertanyaan gambar A/B — 6 spektrum identitas fashion. #Fashion #OOTD #Gaya"

  }',

  'p3_test_ootd_style_diagnosis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["패션", "OOTD", "스타일"],

    "en": ["Fashion", "OOTD", "Style"],

    "ja": ["ファッション", "OOTD", "スタイル"],

    "zh-CN": ["时尚", "OOTD", "风格"],

    "zh-TW": ["時尚", "OOTD", "風格"],

    "vi": ["Thời trang", "OOTD", "Phong cách"],

    "id": ["Fashion", "OOTD", "Gaya"]

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
