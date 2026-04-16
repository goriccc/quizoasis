-- 날 미치게 하는! 도파민 유형
-- slug: phase3-dopamine-type-analysis
-- thumbnail: p3_test_dopamine_type_analysis.jpg

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

  'phase3-dopamine-type-analysis',

  '{

    "ko": "날 미치게 하는! 도파민 유형",

    "en": "What Drives Your Dopamine?",

    "ja": "私を夢中にさせる！ドーパミンタイプ",

    "zh-CN": "让我上瘾的！多巴胺类型",

    "zh-TW": "讓我上癮的！多巴胺類型",

    "vi": "Thứ khiến tôi phấn khích! Kiểu dopamine",

    "id": "Yang bikin aku ketagihan! Tipe dopamin"

  }',

  '{

    "ko": "12문항 4지선다로 보는 도파민 충전 유형 6가지. #도파민 #성격 #공감",

    "en": "12 multiple-choice questions — six dopamine recharge types. #dopamine #personality #relatable",

    "ja": "12問4択で見るドーパミン充電タイプ6種。#ドーパミン #性格 #共感",

    "zh-CN": "12 道四选一，六种多巴胺充电类型。#多巴胺 #性格 #共鸣",

    "zh-TW": "12 題四選一，六種多巴胺充電類型。#多巴胺 #性格 #共鳴",

    "vi": "12 câu trắc nghiệm — 6 kiểu nạp dopamine. #dopamine #tính cách #đồng cảm",

    "id": "12 pertanyaan pilihan ganda — 6 tipe dopamin. #dopamin #kepribadian #relate"

  }',

  'p3_test_dopamine_type_analysis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["도파민", "성격", "공감"],

    "en": ["Dopamine", "Personality", "Relatable"],

    "ja": ["ドーパミン", "性格", "共感"],

    "zh-CN": ["多巴胺", "性格", "共鸣"],

    "zh-TW": ["多巴胺", "性格", "共鳴"],

    "vi": ["Dopamine", "Tính cách", "Đồng cảm"],

    "id": ["Dopamin", "Kepribadian", "Relate"]

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
