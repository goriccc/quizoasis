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
  'phase2_youtube_channel_test',
  '{
    "ko": "떡상각? 내 유튜브 채널 컨셉",
    "en": "Rising Star? My YouTube Channel Concept",
    "ja": "急上昇？私のYouTubeチャンネルコンセプト",
    "zh-CN": "走红？我的YouTube频道概念",
    "zh-TW": "走紅？我的YouTube頻道概念",
    "vi": "Đang Lên? Khái Niệm Kênh YouTube Của Tôi",
    "id": "Naik? Konsep Saluran YouTube Saya"
  }',
  '{
    "ko": "내가 만약 유튜브를 시작한다면?",
    "en": "What if I started YouTube?",
    "ja": "もし私がYouTubeを始めたら？",
    "zh-CN": "如果我要开始YouTube呢？",
    "zh-TW": "如果我要開始YouTube呢？",
    "vi": "Nếu tôi bắt đầu YouTube thì sao?",
    "id": "Bagaimana jika saya memulai YouTube?"
  }',
  'phase2_test_053_youtube_channel.jpg',
  'fun',
  'self-understanding',
  '{
    "ko": ["재미", "자기이해"],
    "en": ["Fun", "Self-understanding"],
    "ja": ["面白い", "自己理解"],
    "zh-CN": ["有趣", "自我理解"],
    "zh-TW": ["有趣", "自我理解"],
    "vi": ["Vui vẻ", "Hiểu bản thân"],
    "id": ["Menyenangkan", "Memahami diri sendiri"]
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

