-- 나를 수호하는 신비한 영물
-- slug: phase3-guardian-spirit-animal

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

  'phase3-guardian-spirit-animal',

  '{

    "ko": "나를 수호하는 신비한 영물",

    "en": "My Mystic Guardian Spirit",

    "ja": "私を守る神秘の霊獣",

    "zh-CN": "守护我的神秘灵兽",

    "zh-TW": "守護我的神秘靈獸",

    "vi": "Linh thú thần bí hộ mệnh của tôi",

    "id": "Roh penjaga mistis yang melindungiku"

  }',

  '{

    "ko": "12문항 이미지 2지선다로 보는 수호 영물 6유형. #영물 #운세 #신비 #수호",

    "en": "12 image A/B questions — 6 guardian spirit types. #spirit #fortune #mystic",

    "ja": "画像12問の2択で見る守護霊獣6タイプ。#霊獣 #運勢",

    "zh-CN": "12 道图片二选一，六种守护灵兽。#灵兽 #运势",

    "zh-TW": "12 題圖片二選一，六種守護靈獸。#靈獸 #運勢",

    "vi": "12 câu chọn ảnh A/B — 6 linh thú hộ mệnh.",

    "id": "12 pertanyaan gambar A/B — 6 tipe penjaga roh."

  }',

  'p3_test_guardian_spirit_animal.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["영물", "운세", "신비", "수호"],

    "en": ["Spirit", "Fortune", "Mystic", "Guardian"],

    "ja": ["霊獣", "運勢", "神秘", "守護"],

    "zh-CN": ["灵兽", "运势", "神秘", "守护"],

    "zh-TW": ["靈獸", "運勢", "神秘", "守護"],

    "vi": ["Linh thú", "Vận số", "Huyền bí", "Hộ mệnh"],

    "id": ["Roh", "Ramalan", "Mistik", "Penjaga"]

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
