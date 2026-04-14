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
  'phase3-love-behavior-type',
  '{
    "ko": "나는 연애할 때 어떤 유형?",
    "en": "What’s my dating behavior type?",
    "ja": "恋愛中の私はどんなタイプ？",
    "zh-CN": "恋爱时我是哪种类型？",
    "zh-TW": "戀愛時我是哪種類型？",
    "vi": "Khi yêu mình thuộc kiểu nào?",
    "id": "Tipe perilaku asmara seperti apa?"
  }',
  '{
    "ko": "12문항 2지선다로 보는 연애 행동 패턴 스펙트럼 8유형. #연애 #성격 #심리 #커플",
    "en": "12 A/B questions — 8 dating behavior spectrum types. #love #personality #psychology #couple",
    "ja": "12問2択で見る恋愛行動パターン8タイプ。#恋愛 #性格 #心理 #カップル",
    "zh-CN": "12 道二选一，八种恋爱行为模式。#恋爱 #性格 #心理 #情侣",
    "zh-TW": "12 題二選一，八種戀愛行為模式。#戀愛 #性格 #心理 #情侶",
    "vi": "12 câu A/B — 8 kiểu quang phổ hành vi yêu. #tìnhyêu #tínhcách #tâmlý #cặpđôi",
    "id": "12 pertanyaan A/B — 8 spektrum pola asmara. #asmara #kepribadian #psikologi #pasangan"
  }',
  'p3_test_love_behavior_type.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["연애", "성격", "심리", "커플"],
    "en": ["Love", "Personality", "Psychology", "Couple"],
    "ja": ["恋愛", "性格", "心理", "カップル"],
    "zh-CN": ["恋爱", "性格", "心理", "情侣"],
    "zh-TW": ["戀愛", "性格", "心理", "情侶"],
    "vi": ["Tình yêu", "Tính cách", "Tâm lý", "Cặp đôi"],
    "id": ["Asmara", "Kepribadian", "Psikologi", "Pasangan"]
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
