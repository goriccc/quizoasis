-- 나의 시험 공부 유형
-- slug: phase3-exam-study-type
-- thumbnail: p3_test_study_type.webp

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
  'phase3-exam-study-type',
  '{"ko": "나의 시험 공부 유형", "en": "My Exam Study Type", "ja": "私の試験勉強タイプ", "zh-CN": "我的考试学习类型", "zh-TW": "我的考試學習類型", "vi": "Kiểu học thi của tôi", "id": "Tipe Belajar Ujian-ku"}',
  '{"ko": "12가지 공부 상황으로 나의 학습 스타일과 최적 공부법을 분석합니다. 친구에게 공유하면 공감 폭발 보장.", "en": "Analyze your learning style and best study methods with 12 situations. Share with friends for guaranteed relatable reactions.", "ja": "12の勉強シチュエーションで学習スタイルと最適な勉強法を分析。友達に共有すると共感が炸裂。", "zh-CN": "通过12种学习情境分析你的学习风格和最佳方法。分享给朋友保证共鸣炸裂。", "zh-TW": "透過12種學習情境分析你的學習風格和最佳方法。分享給朋友保證共鳴炸裂。", "vi": "Phân tích phong cách học và cách học tối ưu qua 12 tình huống. Chia sẻ với bạn bè để xem phản ứng.", "id": "Analisis gaya belajar dan metode terbaik lewat 12 situasi. Bagikan ke teman untuk reaksi relatable."}',
  'p3_test_study_type.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["공부유형", "시험공부", "학생공감", "벼락치기", "학습스타일"], "en": ["study type", "exam prep", "student life", "cramming", "learning style"], "ja": ["勉強タイプ", "試験勉強", "学生共感", "一夜漬け", "学習スタイル"], "zh-CN": ["学习类型", "考试复习", "学生共鸣", "临时抱佛脚", "学习风格"], "zh-TW": ["學習類型", "考試複習", "學生共鳴", "臨時抱佛腳", "學習風格"], "vi": ["kiểu học", "ôn thi", "sinh viên", "cày đêm", "phong cách học"], "id": ["tipe belajar", "persiapan ujian", "mahasiswa", "mengasah", "gaya belajar"]}',
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
