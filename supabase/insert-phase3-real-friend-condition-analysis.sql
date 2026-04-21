-- 나의 찐친 조건 분석
-- slug: phase3-real-friend-condition-analysis
-- thumbnail: p3_test_real_friend_condition_analysis.jpg

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

  'phase3-real-friend-condition-analysis',

  '{

    "ko": "나의 찐친 조건 분석",

    "en": "My Real Best Friend Criteria — Analysis",

    "ja": "本当の親友条件 分析",

    "zh-CN": "我的真朋友条件分析",

    "zh-TW": "我的真朋友條件分析",

    "vi": "Phân tích tiêu chí bạn thân của tôi",

    "id": "Analisis kriteria sahabat sejatiku"

  }',

  '{

    "ko": "12문항 4지선다로 보는 나의 찐친 조건·유형 6가지. #우정 #친구 #관계 #공감",

    "en": "12 multiple-choice questions — 6 types for your real best friend criteria. #friendship #friends #relationships #empathy",

    "ja": "12問4択で見る本当の親友条件・6タイプ。#友情 #友だち #関係 #共感",

    "zh-CN": "12 道四选一，六种真朋友条件类型。#友情 #朋友 #关系 #共情",

    "zh-TW": "12 題四選一，六種真朋友條件類型。#友情 #朋友 #關係 #共情",

    "vi": "12 câu trắc nghiệm — 6 kiểu tiêu chí bạn thân đích thực. #tình bạn #bạn #quan hệ #đồng cảm",

    "id": "12 pertanyaan pilihan ganda — 6 tipe kriteria sahabat sejati. #persahabatan #teman #hubungan #empati"

  }',

  'p3_test_real_friend_condition_analysis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["우정", "친구", "관계", "공감"],

    "en": ["Friendship", "Friends", "Relationships", "Empathy"],

    "ja": ["友情", "友だち", "人間関係", "共感"],

    "zh-CN": ["友情", "朋友", "关系", "共情"],

    "zh-TW": ["友情", "朋友", "關係", "共感"],

    "vi": ["Tình bạn", "Bạn bè", "Quan hệ", "Đồng cảm"],

    "id": ["Persahabatan", "Teman", "Hubungan", "Empati"]

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
