-- 나는 어떤 SNS 알고리즘 타입?

-- slug: phase3-sns-algorithm-type

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

  'phase3-sns-algorithm-type',

  '{

    "ko": "나는 어떤 SNS 알고리즘 타입?",

    "en": "What Is My SNS Algorithm Type?",

    "ja": "私のSNSアルゴリズムタイプは？",

    "zh-CN": "我是什么 SNS 算法类型？",

    "zh-TW": "我是哪種 SNS 演算法類型？",

    "vi": "Tôi thuộc kiểu thuật toán SNS nào?",

    "id": "Tipe algoritme SNS-ku?"

  }',

  '{

    "ko": "12문항 이미지 2지선다로 보는 SNS 알고리즘 소비 패턴 6유형. #SNS #트렌드 #디지털 #성격",

    "en": "12 image A/B questions — 6 feed algorithm personality types. #SNS #trend #digital #personality",

    "ja": "画像12問の2択で見るSNS消費タイプ6種。#SNS #トレンド #デジタル #性格",

    "zh-CN": "12 道图片二选一，六种信息流算法人格。#社交媒体 #趋势 #数字生活 #性格",

    "zh-TW": "12 題圖片二選一，六種資訊流演算法人格。#社群 #趨勢 #數位 #性格",

    "vi": "12 câu chọn ảnh A/B — 6 tính cách thuật toán feed. #SNS #xu hướng #số #tính cách",

    "id": "12 pertanyaan gambar A/B — 6 tipe algoritme feed. #SNS #tren #digital #kepribadian"

  }',

  'p3_test_sns_algorithm_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["SNS", "트렌드", "디지털", "성격"],

    "en": ["SNS", "Trend", "Digital", "Personality"],

    "ja": ["SNS", "トレンド", "デジタル", "性格"],

    "zh-CN": ["社交媒体", "趋势", "数字", "性格"],

    "zh-TW": ["社群", "趨勢", "數位", "性格"],

    "vi": ["SNS", "Xu hướng", "Số", "Tính cách"],

    "id": ["SNS", "Tren", "Digital", "Kepribadian"]

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
