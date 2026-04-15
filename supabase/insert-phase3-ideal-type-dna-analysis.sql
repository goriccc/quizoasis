-- 내가 좋아하는 사람의 유형 분석
-- slug: phase3-ideal-type-dna-analysis
-- thumbnail: p3_test_ideal_type_dna_analysis.jpg

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

  'phase3-ideal-type-dna-analysis',

  '{

    "ko": "내가 좋아하는 사람의 유형 분석",

    "en": "Who Is My Ideal Type? Crush Pattern Analysis",

    "ja": "好きになる人のタイプ分析",

    "zh-CN": "我喜欢的人类型分析",

    "zh-TW": "我喜歡的人類型分析",

    "vi": "Phân tích gu người mình thích",

    "id": "Analisis tipe orang yang kusuka"

  }',

  '{

    "ko": "12문항 4지선다로 보는 이상형 DNA 스펙트럼 6유형. #연애 #이상형 #심리",

    "en": "12 multiple-choice questions — 6 ideal-type DNA spectrum types. #love #crush #psychology",

    "ja": "全12問4択で見る理想型DNAスペクトラム6タイプ。#恋愛 #理想型 #心理",

    "zh-CN": "12 道四选一，六种理想型 DNA 光谱。#恋爱 #理想型 #心理",

    "zh-TW": "12 題四選一，六種理想型 DNA 光譜。#戀愛 #理想型 #心理",

    "vi": "12 câu trắc nghiệm — 6 kiểu quang phổ DNA người trong mơ. #tìnhyêu #gu #tâmlý",

    "id": "12 pertanyaan pilihan ganda — 6 spektrum DNA tipe ideal. #asmara #ideal #psikologi"

  }',

  'p3_test_ideal_type_dna_analysis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["연애", "이상형", "심리"],

    "en": ["Love", "Crush", "Psychology"],

    "ja": ["恋愛", "理想型", "心理"],

    "zh-CN": ["恋爱", "理想型", "心理"],

    "zh-TW": ["戀愛", "理想型", "心理"],

    "vi": ["Tình yêu", "Gu", "Tâm lý"],

    "id": ["Asmara", "Ideal", "Psikologi"]

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
