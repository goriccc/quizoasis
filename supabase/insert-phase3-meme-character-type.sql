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
  'phase3-meme-character-type',
  '{
    "ko": "나는 어떤 밈 캐릭터 재질?",
    "en": "What Meme Character Type Are You?",
    "ja": "あなたはどんなミームキャラタイプ？",
    "zh-CN": "你是什么表情包角色类型？",
    "zh-TW": "你是什麼迷因角色類型？",
    "vi": "Bạn là kiểu meme character nào?",
    "id": "Kamu tipe karakter meme apa?"
  }',
  '{
    "ko": "당신은 어떤 밈 재질인가요?",
    "en": "What meme character type are you?",
    "ja": "あなたはどんなミームの素質？",
    "zh-CN": "你是什么表情包体质？",
    "zh-TW": "你是什麼迷因體質？",
    "vi": "Bạn thuộc kiểu meme nào?",
    "id": "Kamu tipe meme yang mana?"
  }',
  'p3_test_meme_character_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["밈", "성격", "공감", "MZ", "바이럴"],
    "en": ["Meme", "Personality", "Empathy", "Gen Z", "Viral"],
    "ja": ["ミーム", "性格", "共感", "MZ", "バイラル"],
    "zh-CN": ["表情包", "性格", "共鸣", "Z世代", "病毒式传播"],
    "zh-TW": ["迷因", "性格", "共鳴", "Z世代", "病毒式傳播"],
    "vi": ["Meme", "Tính cách", "Đồng cảm", "Gen Z", "Viral"],
    "id": ["Meme", "Kepribadian", "Empati", "Gen Z", "Viral"]
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
