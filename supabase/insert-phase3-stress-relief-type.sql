-- 나의 스트레스 해소 유형
-- slug: phase3-stress-relief-type
-- thumbnail: p3_test_stress_relief_type.jpg

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

  'phase3-stress-relief-type',

  '{

    "ko": "나의 스트레스 해소 유형",

    "en": "My Stress Relief Type",

    "ja": "私のストレス解消タイプ",

    "zh-CN": "我的压力舒缓类型",

    "zh-TW": "我的壓力舒緩類型",

    "vi": "Kiểu xả stress của tôi",

    "id": "Tipe pelegaan stresku"

  }',

  '{

    "ko": "12문항 텍스트 4지선다로 보는 스트레스 해소 유형 6가지와 최적 회복 루틴. #스트레스 #힐링 #회복 #루틴 #자기돌봄",

    "en": "12 text MCQs — 6 stress-relief types and an optimal recovery routine. #stress #healing #selfcare",

    "ja": "テキスト12問4択で見るストレス解消タイプ6種と最適リカバリー。#ストレス #ヒーリング",

    "zh-CN": "12 道文字四选一，六种压力舒缓类型与最佳恢复流程。#压力 #疗愈 #自我照顾",

    "zh-TW": "12 題文字四選一，六種壓力舒緩類型與最佳恢復流程。#壓力 #療癒 #自我照顧",

    "vi": "12 câu chữ 4 đáp án — 6 kiểu xả stress và routine phục hồi tối ưu. #stress #chămsócbảnthân",

    "id": "12 soal teks 4 opsi — 6 tipe pelegaan stres & rutinitas pemulihan. #stres #perawatandiri"

  }',

  'p3_test_stress_relief_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["스트레스", "힐링", "회복", "루틴", "자기돌봄"],

    "en": ["Stress", "Healing", "Recovery", "Routine", "Self-care"],

    "ja": ["ストレス", "ヒーリング", "回復", "ルーティン", "セルフケア"],

    "zh-CN": ["压力", "疗愈", "恢复", "习惯", "自我照顾"],

    "zh-TW": ["壓力", "療癒", "恢復", "習慣", "自我照顧"],

    "vi": ["Stress", "Chữa lành", "Phục hồi", "Thói quen", "Chăm sóc bản thân"],

    "id": ["Stres", "Penyembuhan", "Pemulihan", "Rutinitas", "Perawatan diri"]

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
