-- 연애할 때 내가 무너지는 순간
-- slug: phase3-love-weakness-moment
-- thumbnail: p3_test_love_weakness_moment.jpg

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

  'phase3-love-weakness-moment',

  '{

    "ko": "연애할 때 내가 무너지는 순간",

    "en": "The Moment I Break in Dating",

    "ja": "恋で私が崩れる瞬間",

    "zh-CN": "恋爱里我崩溃的瞬间",

    "zh-TW": "戀愛裡我崩潰的瞬間",

    "vi": "Khoảnh khắc tôi gục khi yêu",

    "id": "Saat aku runtuh dalam cinta"

  }',

  '{

    "ko": "12문항 4지선다로 보는 연애 약점 스펙트럼 6유형. #연애 #심리 #공감",

    "en": "12 multiple-choice questions — 6 dating weakness spectrum types. #love #psychology #empathy",

    "ja": "全12問4択で見る恋愛の弱点スペクトラム6タイプ。#恋愛 #心理 #共感",

    "zh-CN": "12 道四选一，六种恋爱弱点光谱。#恋爱 #心理 #共鸣",

    "zh-TW": "12 題四選一，六種戀愛弱點光譜。#戀愛 #心理 #共鳴",

    "vi": "12 câu trắc nghiệm — 6 kiểu quang phổ điểm yếu khi yêu. #tìnhyêu #tâmlý #đồngcảm",

    "id": "12 pertanyaan pilihan ganda — 6 spektrum titik lemah asmara. #cinta #psikologi #empati"

  }',

  'p3_test_love_weakness_moment.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["연애", "심리", "공감"],

    "en": ["Love", "Psychology", "Empathy"],

    "ja": ["恋愛", "心理", "共感"],

    "zh-CN": ["恋爱", "心理", "共鸣"],

    "zh-TW": ["戀愛", "心理", "共鳴"],

    "vi": ["Tình yêu", "Tâm lý", "Đồng cảm"],

    "id": ["Cinta", "Psikologi", "Empati"]

  }'::jsonb,

  0

)

ON CONFLICT (slug) DO UPDATE SET

  title = EXCLUDED.title,

  description = EXCLUDED.description,

  thumbnail = EXCLUDED.thumbnail,

  type = EXCLUDED.type,

  category = EXCLUDED.category,

  tags = EXCLUDED.tags;
