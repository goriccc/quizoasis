-- 내 연애 레드플래그 찾기
-- slug: phase3-love-red-flag-finder
-- thumbnail: p3_test_love_red_flag_finder.jpg

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

  'phase3-love-red-flag-finder',

  '{

    "ko": "내 연애 레드플래그 찾기",

    "en": "Find my dating red flags",

    "ja": "恋愛レッドフラッグ診断",

    "zh-CN": "恋爱危险信号测验",

    "zh-TW": "戀愛危險信號測驗",

    "vi": "Tìm cờ đỏ yêu đương của tôi",

    "id": "Temukan red flag asmara"

  }',

  '{

    "ko": "12문항 4지선다로 보는 연애 레드플래그 스펙트럼 6유형. #연애 #심리",

    "en": "12 questions, 6 dating reaction patterns — honest mirror, not comfort. #love #psychology",

    "ja": "全12問・恋愛の反応パターン6タイプ。甘い慰めはなし。#恋愛 #心理",

    "zh-CN": "12 题四选一，6 种恋爱反应模式；直白镜子，不灌鸡汤。#恋爱 #心理",

    "zh-TW": "12 題四選一，6 種戀愛反應模式；直白鏡子，不灌雞湯。#戀愛 #心理",

    "vi": "12 câu trắc nghiệm, 6 kiểu phản ứng trong yêu — gương thật lòng. #tìnhyêu #tâmlý",

    "id": "12 pertanyaan pilihan ganda, 6 pola reaksi asmara — cermin jujur. #asmara #psikologi"

  }',

  'p3_test_love_red_flag_finder.jpg',

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
