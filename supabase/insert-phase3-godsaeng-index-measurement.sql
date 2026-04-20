-- 내 갓생 지수 측정
-- slug: phase3-godsaeng-index-measurement
-- thumbnail: p3_test_godsaeng_index_measurement.jpg

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

  'phase3-godsaeng-index-measurement',

  '{
    "ko": "내 갓생 지수 측정",
    "en": "My Godsaeng Index",
    "ja": "私の「갓생」指数測定",
    "zh-CN": "我的自律人生指数测量",
    "zh-TW": "我的自律人生指數測量",
    "vi": "Chỉ số Godsaeng của tôi",
    "id": "Indeks Godsaeng-ku"
  }',

  '{
    "ko": "12문항 텍스트 4지선다로 보는 갓생 지수·레벨·맞춤 처방 6유형. #자기계발 #루틴 #챌린지 #동기부여",
    "en": "12 text questions (4 choices) — 6 Godsaeng score bands with missions. #selfimprovement #routine #challenge #motivation",
    "ja": "テキスト12問4択で見る갓생指数・レベル・処方6タイプ。#自己啓発 #ルーティン #チャレンジ #モチベーション",
    "zh-CN": "12 道文字四选一，六种自律指数·等级·行动处方。#自我提升 #习惯 #挑战 #动力",
    "zh-TW": "12 題文字四選一，六種自律指數·等級·行動處方。#自我提升 #習慣 #挑戰 #動力",
    "vi": "12 câu chữ 4 đáp án — 6 mức chỉ số Godsaeng và nhiệm vụ. #tựpháttriển #routine #thửthách",
    "id": "12 soal teks 4 opsi — 6 level indeks Godsaeng & misi. #pengembangan #rutinitas #tantangan"
  }',

  'p3_test_godsaeng_index_measurement.jpg',

  'psychology',

  'personality',

  '{
    "ko": ["자기계발", "루틴", "챌린지", "동기부여"],
    "en": ["Self-improvement", "Routine", "Challenge", "Motivation"],
    "ja": ["自己啓発", "ルーティン", "チャレンジ", "モチベーション"],
    "zh-CN": ["自我提升", "习惯", "挑战", "动力"],
    "zh-TW": ["自我提升", "習慣", "挑戰", "動力"],
    "vi": ["Tự phát triển", "Thói quen", "Thử thách", "Động lực"],
    "id": ["Pengembangan diri", "Rutinitas", "Tantangan", "Motivasi"]
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
