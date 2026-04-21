-- 나의 직장 생활 생존 유형
-- slug: phase3-office-survival-type
-- thumbnail: p3_test_office_survival_type.jpg

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

  'phase3-office-survival-type',

  '{

    "ko": "나의 직장 생활 생존 유형",

    "en": "My Office Survival Type",

    "ja": "私の職場サバイバルタイプ",

    "zh-CN": "我的职场生存类型",

    "zh-TW": "我的職場生存類型",

    "vi": "Kiểu sống sót nơi công sở của tôi",

    "id": "Tipe bertahan hidup di kantorku"

  }',

  '{

    "ko": "12문항 4지선다로 보는 직장 내 포지션·생존 전략 6유형. #직장 #회사 #공감 #생존",

    "en": "12 questions, 4 choices — 6 workplace survival types. #office #work #empathy",

    "ja": "12問4択で見る職場ポジション・生存戦略6タイプ。#職場 #会社",

    "zh-CN": "12 道四选一，六种职场站位与生存策略。#职场 #公司",

    "zh-TW": "12 題四選一，六種職場站位與生存策略。#職場 #公司",

    "vi": "12 câu 4 lựa chọn — 6 kiểu vị trí & chiến lược sống sót.#côngsở",

    "id": "12 soal 4 pilihan — 6 tipe posisi & strategi bertahan di kantor.#kantor"

  }',

  'p3_test_office_survival_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["직장", "회사", "공감", "생존"],

    "en": ["Office", "Work", "Empathy", "Survival"],

    "ja": ["職場", "会社", "共感", "生存"],

    "zh-CN": ["职场", "公司", "共情", "生存"],

    "zh-TW": ["職場", "公司", "共感", "生存"],

    "vi": ["Công sở", "Công ty", "Đồng cảm", "Sinh tồn"],

    "id": ["Kantor", "Kerja", "Empati", "Bertahan"]

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
