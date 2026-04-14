-- 숏폼 중독 유형 진단
-- slug: phase3-shortform-addiction-type
-- thumbnail: p3_test_shortform_addiction_type.jpg

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

  'phase3-shortform-addiction-type',

  '{

    "ko": "숏폼 중독 유형 진단",

    "en": "Short-Form Addiction Type Quiz",

    "ja": "ショート動画中毒タイプ診断",

    "zh-CN": "短视频成瘾类型诊断",

    "zh-TW": "短影音成癮類型診斷",

    "vi": "Trắc nghiệm kiểu nghiện video ngắn",

    "id": "Tes Tipe Kecanduan Konten Pendek"

  }',

  '{

    "ko": "12문항 2지선다로 보는 숏폼 중독 스펙트럼 6유형과 처방전. #숏폼 #릴스 #쇼츠 #중독",

    "en": "12 A/B questions — 6 short-form addiction types and a prescription. #shorts #reels #tiktok #habits",

    "ja": "12問の2択で見るショート動画中毒スペクトラム6タイプと処方箋。#ショート #リール #中毒",

    "zh-CN": "12 道二选一，六种短视频成瘾光谱与处方。#短视频 #Reels #成瘾",

    "zh-TW": "12 題二選一，六種短影音成癮光譜與處方。#短影音 #Reels #成癮",

    "vi": "12 câu A/B — 6 mức nghiện short-form và “đơn thuốc”. #shorts #reels #thói quen",

    "id": "12 pertanyaan A/B — 6 spektrum kecanduan konten pendek & resep. #shorts #reels #kebiasaan"

  }',

  'p3_test_shortform_addiction_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["숏폼", "릴스", "쇼츠", "중독"],

    "en": ["Short-form", "Reels", "Shorts", "Habits"],

    "ja": ["ショート", "リール", "ショート動画", "習慣"],

    "zh-CN": ["短视频", "Reels", "Shorts", "习惯"],

    "zh-TW": ["短影音", "Reels", "Shorts", "習慣"],

    "vi": ["Short-form", "Reels", "Shorts", "Thói quen"],

    "id": ["Short-form", "Reels", "Shorts", "Kebiasaan"]

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
