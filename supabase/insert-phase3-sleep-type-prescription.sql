-- 나의 수면 유형과 숙면 처방전
-- slug: phase3-sleep-type-prescription
-- thumbnail: p3_test_sleep_type_prescription.jpg

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

  'phase3-sleep-type-prescription',

  '{
    "ko": "나의 수면 유형과 숙면 처방전",
    "en": "My Sleep Type & Good-Sleep Prescription",
    "ja": "私の睡眠タイプと熟睡の処方箋",
    "zh-CN": "我的睡眠类型与好睡处方",
    "zh-TW": "我的睡眠類型與好睡處方",
    "vi": "Kiểu ngủ của tôi & đơn ngủ ngon",
    "id": "Tipe tidurku & resep tidur nyenyak"
  }',

  '{
    "ko": "12문항 텍스트 4지선다로 보는 수면 유형 6가지와 숙면 처방전. #수면 #숙면 #불면 #건강 #루틴",
    "en": "12 text questions (4 choices) — 6 sleep types and a good-sleep prescription. #sleep #deepsleep #insomnia #health #routine",
    "ja": "テキスト12問4択で見る睡眠タイプ6種と熟睡の処方箋。#睡眠 #熟睡 #不眠 #健康 #ルーティン",
    "zh-CN": "12 道文字四选一，六种睡眠类型与好睡处方。#睡眠 #熟睡 #失眠 #健康 #习惯",
    "zh-TW": "12 題文字四選一，六種睡眠類型與好睡處方。#睡眠 #熟睡 #失眠 #健康 #習慣",
    "vi": "12 câu chữ 4 đáp án — 6 kiểu ngủ và đơn ngủ ngon. #ngủ #ngủngon #mấtngủ #suckhoe #thoiquen",
    "id": "12 soal teks 4 opsi — 6 tipe tidur & resep tidur nyenyak. #tidur #tidurnyenyak #insomnia #kesehatan #rutinitas"
  }',

  'p3_test_sleep_type_prescription.jpg',

  'psychology',

  'personality',

  '{
    "ko": ["수면", "숙면", "불면", "건강", "루틴"],
    "en": ["Sleep", "Deep sleep", "Insomnia", "Health", "Routine"],
    "ja": ["睡眠", "熟睡", "不眠", "健康", "ルーティン"],
    "zh-CN": ["睡眠", "熟睡", "失眠", "健康", "习惯"],
    "zh-TW": ["睡眠", "熟睡", "失眠", "健康", "習慣"],
    "vi": ["Giấc ngủ", "Ngủ ngon", "Mất ngủ", "Sức khỏe", "Thói quen"],
    "id": ["Tidur", "Tidur nyenyak", "Insomnia", "Kesehatan", "Rutinitas"]
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
