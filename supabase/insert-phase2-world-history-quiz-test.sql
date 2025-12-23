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
  'phase2_world_history_quiz_test',
  '{
    "ko": "도전! 세계사 퀴즈 (고대/중세편)",
    "en": "Challenge! World History Quiz (Ancient/Medieval Edition)",
    "ja": "挑戦！世界史クイズ（古代/中世編）",
    "zh-CN": "挑战！世界史测验（古代/中世纪篇）",
    "zh-TW": "挑戰！世界史測驗（古代/中世紀篇）",
    "vi": "Thử thách! Câu đố Lịch sử Thế giới (Kỳ Cổ đại/Trung cổ)",
    "id": "Tantangan! Kuis Sejarah Dunia (Edisi Kuno/Abad Pertengahan)"
  }',
  '{
    "ko": "\"역사를 잊은 민족에게 미래는 없다.\" 이 명언, 가슴에 새기고 계신가요?",
    "en": "Have you engraved this saying in your heart: \"A people without history have no future\"?",
    "ja": "「歴史を忘れた民族に未来はない。」この名言、胸に刻んでいますか？",
    "zh-CN": "你是否将这句名言铭记在心：\"忘记历史的民族没有未来\"？",
    "zh-TW": "你是否將這句名言銘記在心：「忘記歷史的民族沒有未來」？",
    "vi": "Bạn có khắc ghi câu nói này trong tim: \"Dân tộc quên lịch sử không có tương lai\"?",
    "id": "Apakah Anda mengukir pepatah ini di hati: \"Bangsa yang melupakan sejarah tidak memiliki masa depan\"?"
  }',
  'phase2_test_090_world_history.jpg',
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


