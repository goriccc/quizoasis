-- 내 성격의 장점과 단점 팩폭
-- slug: phase3-personality-strength-weakness
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
  'phase3-personality-strength-weakness',
  '{
    "ko": "내 성격의 장점과 단점 팩폭",
    "en": "Brutally Honest: Your Personality Strengths & Weaknesses",
    "ja": "性格の長所と短所をド正論で",
    "zh-CN": "性格优缺点直球测评",
    "zh-TW": "性格優缺點直球測評",
    "vi": "Thật thà: Điểm mạnh & yếu tính cách",
    "id": "Jujur: Kelebihan & Kekurangan Kepribadianmu"
  }',
  '{
    "ko": "장점·단점을 팩트로 말하는 성격 스펙트럼 6유형. 12문항 4지선다.",
    "en": "Six personality spectrum types with blunt pros and cons — 12 multiple-choice questions.",
    "ja": "長所・短所をファクトで言い切る性格スペクトラム6タイプ。12問4択。",
    "zh-CN": "六种性格光谱，优缺点直说。12 道四选一。",
    "zh-TW": "六種性格光譜，優缺點直說。12 題四選一。",
    "vi": "6 kiểu phổ tính cách nói thẳng ưu/nhược — 12 câu trắc nghiệm.",
    "id": "6 spektrum kepribadian dengan pro/kontra blak-blakan — 12 soal pilihan ganda."
  }',
  'p3_test_personality_strength_weakness.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "성격"],
    "en": ["Psychology", "Personality"],
    "ja": ["心理", "性格"],
    "zh-CN": ["心理", "性格"],
    "zh-TW": ["心理", "性格"],
    "vi": ["Tâm lý", "Tính cách"],
    "id": ["Psikologi", "Kepribadian"]
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
