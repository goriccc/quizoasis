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
  'phase2_capital_quiz_test',
  '{
    "ko": "뇌섹남녀 도전! 세계 수도 퀴즈",
    "en": "Brain Challenge! World Capital Quiz",
    "ja": "脳セク男女挑戦！世界首都クイズ",
    "zh-CN": "聪明人挑战！世界首都测验",
    "zh-TW": "聰明人挑戰！世界首都測驗",
    "vi": "Thử thách thông minh! Đố vui thủ đô thế giới",
    "id": "Tantangan Cerdas! Kuis Ibu Kota Dunia"
  }',
  '{
    "ko": "미국의 수도는 뉴욕? 호주는 시드니?",
    "en": "Is the capital of the US New York? Is Australia Sydney?",
    "ja": "アメリカの首都はニューヨーク？オーストラリアはシドニー？",
    "zh-CN": "美国的首都是纽约？澳大利亚是悉尼？",
    "zh-TW": "美國的首都是紐約？澳洲是雪梨？",
    "vi": "Thủ đô của Mỹ là New York? Australia là Sydney?",
    "id": "Apakah ibu kota AS adalah New York? Apakah Australia adalah Sydney?"
  }',
  'phase2_test_082_capital_quiz.jpg',
  'quiz',
  'knowledge',
  '{
    "ko": ["재미"],
    "en": ["Fun"],
    "ja": ["面白い"],
    "zh-CN": ["有趣"],
    "zh-TW": ["有趣"],
    "vi": ["Vui"],
    "id": ["Menyenangkan"]
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
