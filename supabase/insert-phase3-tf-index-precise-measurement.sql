-- 나의 T/F 지수 정밀 측정
-- slug: phase3-tf-index-precise-measurement
-- thumbnail: p3_test_tf_index_precise_measurement.jpg

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

  'phase3-tf-index-precise-measurement',

  '{

    "ko": "나의 T/F 지수 정밀 측정",

    "en": "My T/F Index — Precision Test",

    "ja": "私のT/F指数 精密測定",

    "zh-CN": "我的 T/F 指数精密测量",

    "zh-TW": "我的 T/F 指數精密測量",

    "vi": "Chỉ số T/F của tôi — đo chính xác",

    "id": "Indeks T/F-ku — pengukuran presisi"

  }',

  '{

    "ko": "12문항 2지선다로 보는 T/F 지수(F%·T%) 6유형. #MBTI #심리",

    "en": "12 A/B questions — 6 T/F index types (F% · T%). #MBTI #psychology",

    "ja": "12問2択で見るT/F指数（F%・T%）6タイプ。#MBTI #心理",

    "zh-CN": "12 道二选一，六种 T/F 指数（F%·T%）。#MBTI #心理",

    "zh-TW": "12 題二選一，六種 T/F 指數（F%·T%）。#MBTI #心理",

    "vi": "12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số T/F (F% · T%). #MBTI #tâm lý",

    "id": "12 pertanyaan 2 pilihan — 6 tipe indeks T/F (F% · T%). #MBTI #psikologi"

  }',

  'p3_test_tf_index_precise_measurement.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["MBTI", "심리"],

    "en": ["MBTI", "Psychology"],

    "ja": ["MBTI", "心理"],

    "zh-CN": ["MBTI", "心理"],

    "zh-TW": ["MBTI", "心理"],

    "vi": ["MBTI", "Tâm lý"],

    "id": ["MBTI", "Psikologi"]

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
