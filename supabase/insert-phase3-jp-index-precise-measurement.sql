-- 나의 J/P 지수 정밀 측정
-- slug: phase3-jp-index-precise-measurement
-- thumbnail: p3_test_jp_index_precise_measurement.jpg

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

  'phase3-jp-index-precise-measurement',

  '{

    "ko": "나의 J/P 지수 정밀 측정",

    "en": "My J/P Index — Precision Test",

    "ja": "私のJ/P指数 精密測定",

    "zh-CN": "我的 J/P 指数精密测量",

    "zh-TW": "我的 J/P 指數精密測量",

    "vi": "Chỉ số J/P của tôi — đo chính xác",

    "id": "Indeks J/P-ku — pengukuran presisi"

  }',

  '{

    "ko": "12문항 2지선다로 보는 J/P 지수(P%·J%) 6유형. #MBTI #심리",

    "en": "12 A/B questions — 6 J/P index types (P% · J%). #MBTI #psychology",

    "ja": "12問2択で見るJ/P指数（P%・J%）6タイプ。#MBTI #心理",

    "zh-CN": "12 道二选一，六种 J/P 指数（P%·J%）。#MBTI #心理",

    "zh-TW": "12 題二選一，六種 J/P 指數（P%·J%）。#MBTI #心理",

    "vi": "12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số J/P (P% · J%). #MBTI #tâm lý",

    "id": "12 pertanyaan 2 pilihan — 6 tipe indeks J/P (P% · J%). #MBTI #psikologi"

  }',

  'p3_test_jp_index_precise_measurement.jpg',

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
