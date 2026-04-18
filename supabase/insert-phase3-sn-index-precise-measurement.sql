-- 나의 S/N 지수 정밀 측정
-- slug: phase3-sn-index-precise-measurement
-- thumbnail: p3_test_sn_index_precise_measurement.jpg

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

  'phase3-sn-index-precise-measurement',

  '{

    "ko": "나의 S/N 지수 정밀 측정",

    "en": "My S/N Index — Precision Test",

    "ja": "私のS/N指数 精密測定",

    "zh-CN": "我的 S/N 指数精密测量",

    "zh-TW": "我的 S/N 指數精密測量",

    "vi": "Chỉ số S/N của tôi — đo chính xác",

    "id": "Indeks S/N-ku — pengukuran presisi"

  }',

  '{

    "ko": "12문항 2지선다로 보는 S/N 지수(N%·S%) 6유형. #MBTI #심리",

    "en": "12 A/B questions — 6 S/N index types (N% · S%). #MBTI #psychology",

    "ja": "12問2択で見るS/N指数（N%・S%）6タイプ。#MBTI #心理",

    "zh-CN": "12 道二选一，六种 S/N 指数（N%·S%）。#MBTI #心理",

    "zh-TW": "12 題二選一，六種 S/N 指數（N%·S%）。#MBTI #心理",

    "vi": "12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số S/N (N% · S%). #MBTI #tâm lý",

    "id": "12 pertanyaan 2 pilihan — 6 tipe indeks S/N (N% · S%). #MBTI #psikologi"

  }',

  'p3_test_sn_index_precise_measurement.jpg',

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
