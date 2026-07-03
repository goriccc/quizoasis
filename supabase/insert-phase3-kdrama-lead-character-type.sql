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
  'phase3-kdrama-lead-character-type',
  '{
    "ko": "K-드라마 주인공 재질 테스트",
    "en": "K-Drama Lead Character Type Test",
    "ja": "K-ドラマ主人公タイプ診断",
    "zh-CN": "K剧主角类型测试",
    "zh-TW": "K劇主角類型測試",
    "vi": "Bài test kiểu nhân vật chính K-Drama",
    "id": "Tes Tipe Karakter Utama K-Drama"
  }',
  '{
    "ko": "당신의 일상은 어떤 K-드라마와 닮아 있나요?",
    "en": "Which K-drama does your daily life resemble?",
    "ja": "あなたの日常はどんなK-ドラマに似ている？",
    "zh-CN": "你的日常像哪部K剧？",
    "zh-TW": "你的日常像哪部K劇？",
    "vi": "Cuộc sống hàng ngày của bạn giống K-Drama nào?",
    "id": "Kehidupan sehari-harimu mirip K-Drama yang mana?"
  }',
  'p3_test_kdrama_lead_character_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["K드라마", "주인공", "성격", "드라마", "한류"],
    "en": ["K-Drama", "Protagonist", "Personality", "Drama", "Hallyu"],
    "ja": ["K-ドラマ", "主人公", "性格", "ドラマ", "韓流"],
    "zh-CN": ["K剧", "主角", "性格", "电视剧", "韩流"],
    "zh-TW": ["K劇", "主角", "性格", "戲劇", "韓流"],
    "vi": ["K-Drama", "Nhân vật chính", "Tính cách", "Phim", "Hallyu"],
    "id": ["K-Drama", "Protagonis", "Kepribadian", "Drama", "Hallyu"]
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
