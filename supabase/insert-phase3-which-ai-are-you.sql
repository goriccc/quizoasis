-- 나는 어떤 AI를 닮았을까?

-- slug: phase3-which-ai-are-you

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

  'phase3-which-ai-are-you',

  '{

    "ko": "나는 어떤 AI를 닮았을까?",

    "en": "Which AI Are You Most Like?",

    "ja": "私はどのAIに似ている？",

    "zh-CN": "我最像哪种 AI？",

    "zh-TW": "我最像哪種 AI？",

    "vi": "Tôi giống AI nào nhất?",

    "id": "Aku paling mirip AI yang mana?"

  }',

  '{

    "ko": "12문항 4지선다로 보는 AI 성향 매칭 6유형. ChatGPT·Claude·Gemini… 나는 어떤 AI일까? #AI #성격 #트렌드 #재미",

    "en": "12 multiple-choice questions — 6 AI personality matches. Which AI are you? #AI #personality #trend #fun",

    "ja": "12問4択で見るAIタイプ6種。あなたはどのAIタイプ？#AI #性格 #トレンド",

    "zh-CN": "12 道四选一，六种 AI 人格匹配。你像哪种 AI？#AI #性格 #趋势",

    "zh-TW": "12 題四選一，六種 AI 人格配對。你像哪種 AI？#AI #性格 #趨勢",

    "vi": "12 câu trắc nghiệm — 6 kiểu khớp tính cách AI. Bạn giống AI nào? #AI #tính cách #xu hướng",

    "id": "12 pertanyaan pilihan ganda — 6 tipe cocok AI. Kamu mirip AI mana? #AI #kepribadian #tren"

  }',

  'p3_test_which_ai_are_you.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["AI", "성격", "트렌드", "재미"],

    "en": ["AI", "Personality", "Trend", "Fun"],

    "ja": ["AI", "性格", "トレンド", "エンタメ"],

    "zh-CN": ["AI", "性格", "趋势", "趣味"],

    "zh-TW": ["AI", "性格", "趨勢", "趣味"],

    "vi": ["AI", "Tính cách", "Xu hướng", "Giải trí"],

    "id": ["AI", "Kepribadian", "Tren", "Seru"]

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
