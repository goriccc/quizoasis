-- 내 피부타입 맞춤 스킨케어 루틴
-- slug: phase3-skincare-routine-recommendation
-- thumbnail: p3_test_skincare_routine_recommendation.jpg

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

  'phase3-skincare-routine-recommendation',

  '{

    "ko": "내 피부타입 맞춤 스킨케어 루틴",

    "en": "Custom Skincare Routine for Your Skin Type",

    "ja": "肌タイプ別スキンケアルーティン",

    "zh-CN": "根据肤质的定制护肤流程",

    "zh-TW": "依膚質訂製的保養流程",

    "vi": "Lịch skincare theo loại da của bạn",

    "id": "Rutinitas skincare sesuai tipe kulit"

  }',

  '{

    "ko": "12문항 4지선다로 보는 피부타입별 맞춤 스킨케어 루틴과 핵심 성분 6유형. #피부 #뷰티",

    "en": "12 multiple-choice questions — 6 skin-type routines with key ingredients. #skin #beauty",

    "ja": "全12問4択で見る肌タイプ別スキンケアとキー成分6タイプ。#スキンケア #美容",

    "zh-CN": "12 道四选一，六种肤质护肤流程与核心成分。#护肤 #美妆",

    "zh-TW": "12 題四選一，六種膚質保養流程與核心成分。#保養 #美妝",

    "vi": "12 câu — 6 lịch skincare và thành phần chính theo loại da. #da #làm đẹp",

    "id": "12 pertanyaan — 6 rutinitas dan bahan kunci sesuai tipe kulit. #kulit #kecantikan"

  }',

  'p3_test_skincare_routine_recommendation.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["피부", "뷰티"],

    "en": ["Skin", "Beauty"],

    "ja": ["肌", "ビューティ"],

    "zh-CN": ["护肤", "美妆"],

    "zh-TW": ["保養", "美妝"],

    "vi": ["Da", "Làm đẹp"],

    "id": ["Kulit", "Kecantikan"]

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
