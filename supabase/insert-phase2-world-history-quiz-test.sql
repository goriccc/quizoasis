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
  'phase2_world_history_modern_quiz_test',
  '{
    "ko": "도전! 세계사 퀴즈 (근대/현대편)",
    "en": "Challenge! World History Quiz (Modern/Contemporary Edition)",
    "ja": "挑戦！世界史クイズ（近代/現代編）",
    "zh-CN": "挑战！世界史测验（近代/现代篇）",
    "zh-TW": "挑戰！世界史測驗（近代/現代篇）",
    "vi": "Thử thách! Câu đố Lịch sử Thế giới (Kỳ Cận đại/Hiện đại)",
    "id": "Tantangan! Kuis Sejarah Dunia (Edisi Modern/Kontemporer)"
  }',
  '{
    "ko": "지금의 세상을 만든 사건들을 기억하시나요?",
    "en": "Do you remember the events that created the world we live in today?",
    "ja": "今の世界を作った出来事を覚えていますか？",
    "zh-CN": "你还记得创造了当今世界的事件吗？",
    "zh-TW": "你還記得創造了當今世界的事件嗎？",
    "vi": "Bạn có nhớ những sự kiện đã tạo nên thế giới chúng ta đang sống hôm nay?",
    "id": "Apakah Anda ingat peristiwa yang menciptakan dunia yang kita tinggali saat ini?"
  }',
  'phase2_test_091_modern_history.jpg',
  'quiz',
  'knowledge',
  '{
    "ko": ["지식", "상식"],
    "en": ["Knowledge", "Common Sense"],
    "ja": ["知識", "常識"],
    "zh-CN": ["知识", "常识"],
    "zh-TW": ["知識", "常識"],
    "vi": ["Kiến thức", "Thường thức"],
    "id": ["Pengetahuan", "Akal sehat"]
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

