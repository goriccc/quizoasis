-- 나의 연애 그린플래그는?
-- slug: phase3-love-green-flag-finder
-- thumbnail: p3_test_love_green_flag_finder.jpg

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

  'phase3-love-green-flag-finder',

  '{

    "ko": "나의 연애 그린플래그는?",

    "en": "What’s my dating green flag?",

    "ja": "私の恋愛グリーンフラッグは？",

    "zh-CN": "我的恋爱绿旗是什么？",

    "zh-TW": "我的戀愛綠旗是什麼？",

    "vi": "Cờ xanh yêu đương của tôi là gì?",

    "id": "Bendera hijau asmara saya?"

  }',

  '{

    "ko": "12문항 4지선다로 보는 연애 그린플래그 스펙트럼 6유형. #연애 #심리",

    "en": "12 questions, 6 dating green-flag spectrum types. #love #psychology",

    "ja": "全12問・恋愛グリーンフラッグ6タイプ。#恋愛 #心理",

    "zh-CN": "12 题四选一，6 种恋爱绿旗光谱。#恋爱 #心理",

    "zh-TW": "12 題四選一，6 種戀愛綠旗光譜。#戀愛 #心理",

    "vi": "12 câu trắc nghiệm, 6 kiểu quang phổ cờ xanh yêu đương. #tìnhyêu #tâmlý",

    "id": "12 pertanyaan pilihan ganda, 6 spektrum green flag asmara. #asmara #psikologi"

  }',

  'p3_test_love_green_flag_finder.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["연애", "심리"],

    "en": ["Love", "Psychology"],

    "ja": ["恋愛", "心理"],

    "zh-CN": ["恋爱", "心理"],

    "zh-TW": ["戀愛", "心理"],

    "vi": ["Tình yêu", "Tâm lý"],

    "id": ["Asmara", "Psikologi"]

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
