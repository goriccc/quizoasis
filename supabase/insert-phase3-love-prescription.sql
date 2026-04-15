-- 나를 위한 연애 처방전
-- slug: phase3-love-prescription
-- thumbnail: p3_test_love_prescription.jpg

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

  'phase3-love-prescription',

  '{

    "ko": "나를 위한 연애 처방전",

    "en": "My Love Prescription",

    "ja": "私のための恋愛処方箋",

    "zh-CN": "属于我的恋爱处方",

    "zh-TW": "屬於我的戀愛處方",

    "vi": "Đơn thuốc tình yêu dành cho tôi",

    "id": "Resep cinta untukku"

  }',

  '{

    "ko": "12문항 4지선다로 보는 연애 고민 유형별 맞춤 처방전 6가지. #연애 #심리 #자기계발",

    "en": "12 questions, 4 choices — 6 tailored love prescriptions by worry type. #love #psychology #growth",

    "ja": "12問4択で見る恋愛悩みタイプ別処方箋6種。#恋愛 #心理 #自己成長",

    "zh-CN": "12 道四选一，六种恋爱烦恼对症处方。#恋爱 #心理 #自我成长",

    "zh-TW": "12 題四選一，六種戀愛煩惱對症處方。#戀愛 #心理 #自我成長",

    "vi": "12 câu — 6 đơn thuốc theo kiểu lo lắng khi yêu. #tìnhyêu #tâmlý #pháttriển",

    "id": "12 pertanyaan — 6 resep cinta sesuai pola. #cinta #psikologi #perkembangan"

  }',

  'p3_test_love_prescription.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["연애", "심리", "자기계발"],

    "en": ["Love", "Psychology", "Growth"],

    "ja": ["恋愛", "心理", "自己成長"],

    "zh-CN": ["恋爱", "心理", "自我成长"],

    "zh-TW": ["戀愛", "心理", "自我成長"],

    "vi": ["Tình yêu", "Tâm lý", "Phát triển bản thân"],

    "id": ["Cinta", "Psikologi", "Pengembangan diri"]

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
