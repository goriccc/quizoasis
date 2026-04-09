-- 혹시 나도 번아웃? 피로도 정밀 진단
-- slug: phase3-burnout-fatigue-precision
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
  'phase3-burnout-fatigue-precision',
  '{
    "ko": "혹시 나도 번아웃? 피로도 정밀 진단",
    "en": "Burnout Check: Precision Fatigue Diagnosis",
    "ja": "私もバーンアウト？疲労度精密診断",
    "zh-CN": "我也会职业倦怠吗？疲劳度精密诊断",
    "zh-TW": "我也會職業倦怠嗎？疲勞度精密診斷",
    "vi": "Bạn có đang kiệt sức? Chẩn đoán mức mệt mỏi",
    "id": "Apakah aku burnout? Diagnosis kelelahan presisi"
  }',
  '{
    "ko": "신체·감정·인지 3축으로 보는 번아웃·피로도 레벨. 12문항.",
    "en": "Burnout and fatigue levels across body, emotion, and cognition — 12 questions.",
    "ja": "身体・感情・認知の3軸で見るバーンアウト／疲労度。12問。",
    "zh-CN": "从身体、情绪、认知三轴看你的倦怠与疲劳度，12 题。",
    "zh-TW": "從身體、情緒、認知三軸看你的倦怠與疲勞度，12 題。",
    "vi": "3 trục: thể chất, cảm xúc, nhận thức — 12 câu.",
    "id": "Tiga sumbu: fisik, emosi, kognisi — 12 pertanyaan."
  }',
  'p3_test_burnout_fatigue_level.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "직장", "멘탈"],
    "en": ["Psychology", "Work", "Mental health"],
    "ja": ["心理", "職場", "メンタル"],
    "zh-CN": ["心理", "职场", "心理"],
    "zh-TW": ["心理", "職場", "心理"],
    "vi": ["Tâm lý", "Công sở", "Sức khỏe tinh thần"],
    "id": ["Psikologi", "Kerja", "Kesehatan mental"]
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
