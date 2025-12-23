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
  'phase2_literature_quiz_test',
  '{
    "ko": "도전! 세계 문학 퀴즈 (당신의 교양 점수는?)",
    "en": "Challenge! World Literature Quiz (What is Your Cultural Score?)",
    "ja": "挑戦！世界文学クイズ（あなたの教養スコアは？）",
    "zh-CN": "挑战！世界文学测验（你的文化素养分数是？）",
    "zh-TW": "挑戰！世界文學測驗（你的文化素養分數是？）",
    "vi": "Thử thách! Câu đố Văn học Thế giới (Điểm Văn hóa của Bạn là bao nhiêu?)",
    "id": "Tantangan! Kuis Sastra Dunia (Berapa Skor Budaya Anda?)"
  }',
  '{
    "ko": "책장에 꽂혀있는 그 책, 읽어보셨나요?",
    "en": "Have you read that book on your bookshelf?",
    "ja": "本棚に並んでいるその本、読んだことがありますか？",
    "zh-CN": "书架上的那本书，你读过了吗？",
    "zh-TW": "書架上的那本書，你讀過了嗎？",
    "vi": "Bạn đã đọc cuốn sách đó trên giá sách chưa?",
    "id": "Apakah Anda sudah membaca buku itu di rak buku Anda?"
  }',
  'phase2_test_102_literature_quiz.jpg',
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
