-- 올여름 찰떡! 내 휴가지 유형
-- slug: phase3-summer-vacation-type
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
  'phase3-summer-vacation-type',
  '{
    "ko": "올여름 찰떡! 내 휴가지 유형",
    "en": "Your Summer Vacation Match Type",
    "ja": "今年の夏ピッタリ！私の休暇タイプ",
    "zh-CN": "今夏合拍！我的度假类型",
    "zh-TW": "今夏合拍！我的度假類型",
    "vi": "Hè này hợp gu! Kiểu kỳ nghỉ của tôi",
    "id": "Cocok musim panas! Tipe liburanku"
  }',
  '{
    "ko": "여행 성향·예산·동행으로 보는 휴가지 추천. 12문항 2지선다.",
    "en": "Summer trip style in 12 A/B questions — destination vibe match.",
    "ja": "旅スタイル・予算・同行者から見る夏の休暇タイプ。12問の2択。",
    "zh-CN": "从旅行风格、预算、同行看今夏度假类型，12 道二选一。",
    "zh-TW": "從旅行風格、預算、同行看今夏度假類型，12 題二選一。",
    "vi": "Phong cách du lịch, ngân sách, đồng hành — 12 câu trắc nghiệm.",
    "id": "Gaya traveling, budget, teman seperjalanan — 12 pertanyaan pilihan ganda."
  }',
  'p3_test_summer_vacation_type.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["여행", "휴가", "심리"],
    "en": ["Travel", "Vacation", "Psychology"],
    "ja": ["旅行", "休暇", "心理"],
    "zh-CN": ["旅行", "度假", "心理"],
    "zh-TW": ["旅行", "度假", "心理"],
    "vi": ["Du lịch", "Kỳ nghỉ", "Tâm lý"],
    "id": ["Travel", "Liburan", "Psikologi"]
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
