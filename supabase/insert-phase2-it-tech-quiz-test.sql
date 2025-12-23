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
  'phase2_it_tech_quiz_test',
  '{
    "ko": "도전! 세계 IT/테크 상식 퀴즈",
    "en": "Challenge! World IT/Tech Knowledge Quiz",
    "ja": "挑戦！世界IT/テック常識クイズ",
    "zh-CN": "挑战！世界IT/科技常识测验",
    "zh-TW": "挑戰！世界IT/科技常識測驗",
    "vi": "Thử thách! Câu đố Kiến thức IT/Công nghệ Thế giới",
    "id": "Tantangan! Kuis Pengetahuan IT/Teknologi Dunia"
  }',
  '{
    "ko": "당신은 ''디지털 네이티브''인가요?",
    "en": "Are you a ''digital native''?",
    "ja": "あなたは「デジタルネイティブ」ですか？",
    "zh-CN": "你是「数字原住民」吗？",
    "zh-TW": "你是「數位原住民」嗎？",
    "vi": "Bạn có phải là ''người bản địa số'' không?",
    "id": "Apakah Anda ''digital native''?"
  }',
  'phase2_test_106_it_tech_quiz.jpg',
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



