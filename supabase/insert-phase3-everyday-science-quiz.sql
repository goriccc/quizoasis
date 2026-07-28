-- 생활 속 과학 상식 퀴즈
-- slug: phase3-everyday-science-quiz
-- thumbnail: p3_quiz_everyday_science.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-everyday-science-quiz',
  '{"ko": "생활 속 과학 상식 퀴즈", "en": "Everyday Science Quiz", "ja": "生活の科学常識クイズ", "zh-CN": "生活中的科学常识测验", "zh-TW": "生活中的科學常識測驗", "vi": "Quiz Khoa Học Thường Ngày", "id": "Kuis Sains Sehari-hari"}',
  '{"ko": "12가지 생활 속 과학 문제로 나의 생활 과학 상식 수준을 측정합니다. 냉장고부터 하늘까지, 어? 진짜?? 소리 나오는 과학 퀴즈!", "en": "Measure your everyday science knowledge with 12 questions. From refrigerators to the sky—a quiz that makes you say wow!", "ja": "12問の生活科学問題であなたの生活科学常識レベルを測定します。冷蔵庫から空まで、え？本当？と驚く科学クイズ！", "zh-CN": "通过12道生活科学题测量你的科学常识水平。从冰箱到天空，让你惊呼真的吗？的科学测验！", "zh-TW": "透過12道生活科學題測量你的科學常識水平。從冰箱到天空，讓你驚呼真的嗎？的科學測驗！", "vi": "Đo mức kiến thức khoa học thường ngày qua 12 câu hỏi. Từ tủ lạnh đến bầu trời—quiz khiến bạn nói wow!", "id": "Ukur pengetahuan sains sehari-hari lewat 12 pertanyaan. Dari kulkas sampai langit—kuis yang bikin kamu bilang wow!"}',
  'p3_quiz_everyday_science.webp',
  'knowledge',
  'challenge',
  'quiz',
  '{"ko": ["생활과학", "과학상식", "퀴즈", "신기함", "이거왜그럼"], "en": ["everyday science", "science quiz", "quiz", "fun facts", "why"], "ja": ["生活科学", "科学常識", "クイズ", "不思議", "なぜ"], "zh-CN": ["生活科学", "科学常识", "测验", "有趣", "为什么"], "zh-TW": ["生活科學", "科學常識", "測驗", "有趣", "為什麼"], "vi": ["khoa học", "quiz", "đố vui", "thú vị", "tại sao"], "id": ["sains", "kuis", "quiz", "menarik", "mengapa"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
