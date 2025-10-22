-- 도전 잠재력 테스트 데이터 삽입
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
  'challenge-potential-test',
  '{
    "ko": "당신의 도전의식 잠재력은?",
    "en": "What is your challenge potential?",
    "ja": "あなたの挑戦意識の潜在力は？",
    "zh-CN": "你的挑战意识潜力是什么？",
    "zh-TW": "你的挑戰意識潛力是什麼？",
    "vi": "Tiềm năng thử thách của bạn là gì?",
    "id": "Apa potensi tantangan Anda?"
  }',
  '{
    "ko": "당신 안에 잠들어 있는 도전 정신을 깨워보세요!",
    "en": "Awaken the spirit of challenge sleeping within you!",
    "ja": "あなたの中に眠っている挑戦精神を目覚めさせてください！",
    "zh-CN": "唤醒沉睡在你内心的挑战精神！",
    "zh-TW": "喚醒沉睡在你內心的挑戰精神！",
    "vi": "Đánh thức tinh thần thử thách đang ngủ trong bạn!",
    "id": "Bangunkan semangat tantangan yang tertidur dalam diri Anda!"
  }',
  'test_053_challenge_potential.jpg',
  'dating',
  'love',
  '{
    "ko": ["도전", "자기계발"],
    "en": ["Challenge", "Self-development"],
    "ja": ["挑戦", "自己啓発"],
    "zh-CN": ["挑战", "自我发展"],
    "zh-TW": ["挑戰", "自我發展"],
    "vi": ["Thử thách", "Tự phát triển"],
    "id": ["Tantangan", "Pengembangan diri"]
  }',
  0
);
