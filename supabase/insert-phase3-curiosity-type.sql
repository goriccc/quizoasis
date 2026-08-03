-- 나의 호기심 유형 진단

-- slug: phase3-curiosity-type

-- thumbnail: p3_test_curiosity_type.webp



INSERT INTO tests (

  slug,

  title,

  description,

  thumbnail,

  type,

  category,

  format,

  tags,

  play_count

) VALUES (

  'phase3-curiosity-type',

  '{"ko": "나의 호기심 유형 진단", "en": "My Curiosity Type Test", "ja": "私の好奇心タイプ診断", "zh-CN": "我的好奇心类型诊断", "zh-TW": "我的好奇心類型診斷", "vi": "Chẩn đoán Kiểu Tò mò của tôi", "id": "Diagnosis Tipe Rasa Ingin Tahu-ku"}',

  '{"ko": "12가지 질문으로 나는 무엇에 끌리고 어떻게 탐구하는지 분석합니다. 6가지 호기심 유형과 탐구 방식·학습 패턴·최적 콘텐츠를 알려드립니다.", "en": "Analyze what draws you in and how you explore with 12 questions. Discover your curiosity type, learning pattern, and best content.", "ja": "12の質問で何に惹かれどう探究するか分析します。", "zh-CN": "通过12个问题分析你被什么吸引以及如何探索。", "zh-TW": "透過12個問題分析你被什麼吸引以及如何探索。", "vi": "Phân tích điều gì thu hút bạn và cách bạn khám phá qua 12 câu hỏi.", "id": "Analisis apa yang menarikmu dan cara mengeksplorasi lewat 12 pertanyaan."}',

  'p3_test_curiosity_type.webp',

  'psychology',

  'personality',

  'scenario_4',

  '{"ko": ["호기심", "지적성향", "학습유형", "탐구", "자기이해"], "en": ["curiosity", "learning style", "exploration", "self-understanding", "psychology"], "ja": ["好奇心", "学習タイプ", "探究", "自己理解", "心理"], "zh-CN": ["好奇心", "学习类型", "探索", "自我理解", "心理"], "zh-TW": ["好奇心", "學習類型", "探索", "自我理解", "心理"], "vi": ["tò mò", "kiểu học", "khám phá", "hiểu bản thân", "tâm lý"], "id": ["rasa ingin tahu", "gaya belajar", "eksplorasi", "pengenalan diri", "psikologi"]}',

  0

)

ON CONFLICT (slug) DO UPDATE SET

  title = EXCLUDED.title,

  description = EXCLUDED.description,

  thumbnail = EXCLUDED.thumbnail,

  type = EXCLUDED.type,

  category = EXCLUDED.category,

  format = EXCLUDED.format,

  tags = EXCLUDED.tags;
