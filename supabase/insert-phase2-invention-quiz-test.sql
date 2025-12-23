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
  'phase2_invention_quiz_test',
  '{
    "ko": "도전! 세계 발명품 퀴즈 (누가 만들었을까?)",
    "en": "Challenge! World Invention Quiz (Who Created It?)",
    "ja": "挑戦！世界発明品クイズ（誰が作った？）",
    "zh-CN": "挑战！世界发明品测验（谁创造的？）",
    "zh-TW": "挑戰！世界發明品測驗（誰創造的？）",
    "vi": "Thử thách! Câu đố Phát minh Thế giới (Ai đã tạo ra?)",
    "id": "Tantangan! Kuis Penemuan Dunia (Siapa yang Menciptakannya?)"
  }',
  '{
    "ko": "전구를 발명한 사람은 에디슨?",
    "en": "Was Edison the one who invented the light bulb?",
    "ja": "電球を発明したのはエジソン？",
    "zh-CN": "发明电灯的是爱迪生？",
    "zh-TW": "發明電燈的是愛迪生？",
    "vi": "Edison là người phát minh ra bóng đèn?",
    "id": "Apakah Edison yang menemukan bola lampu?"
  }',
  'phase2_test_103_invention_quiz.jpg',
  'quiz',
  'knowledge',
  '{
    "ko": ["지식"],
    "en": ["Knowledge"],
    "ja": ["知識"],
    "zh-CN": ["知识"],
    "zh-TW": ["知識"],
    "vi": ["Kiến thức"],
    "id": ["Pengetahuan"]
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


