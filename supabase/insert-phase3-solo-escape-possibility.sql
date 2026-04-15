-- 나의 솔로 탈출 가능성 분석기
-- slug: phase3-solo-escape-possibility
-- thumbnail: p3_test_solo_escape_possibility.jpg

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

  'phase3-solo-escape-possibility',

  '{

    "ko": "나의 솔로 탈출 가능성 분석기",

    "en": "My Solo Escape Possibility Analyzer",

    "ja": "私のソロ脱出可能性分析",

    "zh-CN": "我的脱单可能性分析",

    "zh-TW": "我的脫單可能性分析",

    "vi": "Phân tích khả năng thoát ế của tôi",

    "id": "Analisis peluang lolos dari jomblo"

  }',

  '{

    "ko": "12문항 4지선다로 보는 솔로 탈출 가능성 퍼센트 6유형. #솔로 #연애 #공감",

    "en": "12 multiple-choice questions — 6 solo escape possibility types. #single #dating #relatable",

    "ja": "全12問4択で見るソロ脱出可能性6タイプ。#ソロ #恋愛 #共感",

    "zh-CN": "12 道四选一，六种脱单可能性。#单身 #恋爱 #共鸣",

    "zh-TW": "12 題四選一，六種脫單可能性。#單身 #戀愛 #共鳴",

    "vi": "12 câu — 6 mức khả năng thoát ế. #độc thân #tình yêu #đồng cảm",

    "id": "12 pertanyaan — 6 tipe peluang lolos jomblo. #jomblo #asmara #relate"

  }',

  'p3_test_solo_escape_possibility.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["솔로", "연애", "공감"],

    "en": ["Single", "Dating", "Relatable"],

    "ja": ["ソロ", "恋愛", "共感"],

    "zh-CN": ["单身", "恋爱", "共鸣"],

    "zh-TW": ["單身", "戀愛", "共鳴"],

    "vi": ["Độc thân", "Tình yêu", "Đồng cảm"],

    "id": ["Jomblo", "Asmara", "Relate"]

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
