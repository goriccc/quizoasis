-- 나의 소비 성향 유형 분석
-- slug: phase3-spending-personality-type
-- thumbnail: p3_test_spending_personality_type.jpg

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

  'phase3-spending-personality-type',

  '{

    "ko": "나의 소비 성향 유형 분석",

    "en": "My Spending Personality Type Analysis",

    "ja": "私の消費傾向タイプ分析",

    "zh-CN": "我的消费性格类型分析",

    "zh-TW": "我的消費性格類型分析",

    "vi": "Phân tích kiểu chi tiêu của tôi",

    "id": "Analisis Tipe Kepribadian Pengeluaranku"

  }',

  '{

    "ko": "12문항 4지선다로 보는 나의 소비 DNA 8가지 유형. #소비 #재테크 #심리 #공감",

    "en": "12 multiple-choice questions — 8 spending DNA types. #spending #money #psychology #relatable",

    "ja": "12問4択で見る消費DNA8タイプ。#消費 #お金 #心理 #共感",

    "zh-CN": "12 道四选一，八种消费 DNA。#消费 #理财 #心理 #共鸣",

    "zh-TW": "12 題四選一，八種消費 DNA。#消費 #理財 #心理 #共鳴",

    "vi": "12 câu — 8 kiểu DNA chi tiêu. #tiêu dùng #tài chính #tâm lý #đồng cảm",

    "id": "12 pertanyaan — 8 tipe DNA pengeluaran. #belanja #uang #psikologi #relate"

  }',

  'p3_test_spending_personality_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["소비", "재테크", "심리", "공감"],

    "en": ["Spending", "Money", "Psychology", "Relatable"],

    "ja": ["消費", "お金", "心理", "共感"],

    "zh-CN": ["消费", "理财", "心理", "共鸣"],

    "zh-TW": ["消費", "理財", "心理", "共鳴"],

    "vi": ["Tiêu dùng", "Tài chính", "Tâm lý", "Đồng cảm"],

    "id": ["Belanja", "Uang", "Psikologi", "Relate"]

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
