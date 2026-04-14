-- 나의 유튜브 알고리즘이 뭔가 알고 있다
-- slug: phase3-youtube-algorithm-knows
-- thumbnail: p3_test_youtube_algorithm_knows.jpg

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

  'phase3-youtube-algorithm-knows',

  '{

    "ko": "나의 유튜브 알고리즘이 뭔가 알고 있다",

    "en": "My YouTube Algorithm Seems to Know Me",

    "ja": "私のYouTubeアルゴリズムが何か知っている",

    "zh-CN": "我的 YouTube 算法好像知道些什么",

    "zh-TW": "我的 YouTube 演算法好像知道些什麼",

    "vi": "Thuật toán YouTube của tôi dường như biết điều gì đó",

    "id": "Algoritme YouTube-ku seolah tahu sesuatu"

  }',

  '{

    "ko": "12문항 4지선다로 보는 유튜브 알고리즘이 파악한 나의 숨은 유형 6가지. #유튜브 #알고리즘 #트렌드 #자기폭로",

    "en": "12 multiple-choice questions — 6 hidden types your YouTube algorithm has pegged you as. #YouTube #algorithm #trend",

    "ja": "12問4択で見るYouTubeアルゴリズムが見抜いた隠れた6タイプ。#YouTube #アルゴリズム #トレンド",

    "zh-CN": "12 道四选一，六种 YouTube 算法眼中的隐藏类型。#YouTube #算法 #趋势",

    "zh-TW": "12 題四選一，六種 YouTube 演算法眼中的隱藏類型。#YouTube #演算法 #趨勢",

    "vi": "12 câu — 6 kiểu ẩn mà thuật toán YouTube đoán về bạn. #YouTube #thuật toán #xu hướng",

    "id": "12 pertanyaan — 6 tipe tersembunyi yang algoritme YouTube tebak tentangmu. #YouTube #algoritme #tren"

  }',

  'p3_test_youtube_algorithm_knows.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["유튜브", "알고리즘", "트렌드", "자기폭로"],

    "en": ["YouTube", "Algorithm", "Trend", "Self-reveal"],

    "ja": ["YouTube", "アルゴリズム", "トレンド", "自己開示"],

    "zh-CN": ["YouTube", "算法", "趋势", "自我爆料"],

    "zh-TW": ["YouTube", "演算法", "趨勢", "自我爆料"],

    "vi": ["YouTube", "Thuật toán", "Xu hướng", "Tự vạch trần"],

    "id": ["YouTube", "Algoritme", "Tren", "Ungkap diri"]

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
