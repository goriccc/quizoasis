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
  'phase3-hidden-sub-character',
  '{
    "ko": "본캐 말고! 나의 부캐 찾기",
    "en": "Not Your Main Self — Find My Hidden Persona",
    "ja": "本キャラじゃない！私の裏キャラ診断",
    "zh-CN": "不是本我！找出我的隐藏人设",
    "zh-TW": "不是本我！找出我的隱藏人設",
    "vi": "Không phải bản chính — Tìm persona ẩn của tôi",
    "id": "Bukan diri utama — Temukan persona tersembunyi"
  }',
  '{
    "ko": "12문항 2지선다로 보는 부캐 유형 6가지. #부캐 #성격 #재미 #자기폭로 #MZ",
    "en": "12 A/B questions — six hidden persona types. #persona #fun #MZ",
    "ja": "12問2択で見る裏キャラ6タイプ。#裏キャラ #性格 #エンタメ",
    "zh-CN": "12 道二选一，六种隐藏人设类型。#人设 #性格 #趣味",
    "zh-TW": "12 題二選一，六種隱藏人設類型。#人設 #性格 #趣味",
    "vi": "12 câu — 6 kiểu persona ẩn. #persona #tính cách #vui",
    "id": "12 pertanyaan — 6 tipe persona tersembunyi. #persona #kepribadian"
  }',
  'p3_test_hidden_sub_character.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["부캐", "성격", "재미", "자기폭로", "MZ"],
    "en": ["Persona", "Personality", "Fun", "Relatable", "MZ"],
    "ja": ["裏キャラ", "性格", "エンタメ", "共感", "MZ"],
    "zh-CN": ["人设", "性格", "趣味", "共鸣", "MZ"],
    "zh-TW": ["人設", "性格", "趣味", "共鳴", "MZ"],
    "vi": ["Persona", "Tính cách", "Vui", "Đồng cảm", "MZ"],
    "id": ["Persona", "Kepribadian", "Seru", "Relate", "MZ"]
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
