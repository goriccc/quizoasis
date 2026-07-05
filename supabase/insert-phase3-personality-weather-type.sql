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
  'phase3-personality-weather-type',
  '{
    "ko": "내 성격은 어떤 날씨일까?",
    "en": "What Weather Is My Personality?",
    "ja": "あなたの性格はどんな天気？",
    "zh-CN": "我的性格是什么天气？",
    "zh-TW": "我的性格是什麼天氣？",
    "vi": "Tính cách của bạn giống thời tiết nào?",
    "id": "Kepribadianku Seperti Cuaca Apa?"
  }',
  '{
    "ko": "직관적으로 끌리는 이미지를 선택하면 당신의 성격과 가장 닮은 날씨를 찾아드립니다.",
    "en": "Choose images that intuitively draw you in — we find the weather that best matches your personality.",
    "ja": "直感で惹かれる画像を選ぶと、あなたの性格に最も似た天気を見つけます。",
    "zh-CN": "选择直觉吸引你的图片，我们将为你找出与性格最相似的天气。",
    "zh-TW": "選擇直覺吸引你的圖片，我們將為你找出與性格最相似的天氣。",
    "vi": "Chọn hình ảnh thu hút bạn theo trực giác — chúng tôi tìm thời tiết giống tính cách bạn nhất.",
    "id": "Pilih gambar yang menarik secara intuitif — kami temukan cuaca yang paling mirip kepribadianmu."
  }',
  'p3_test_personality_weather_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["성격", "날씨", "감성", "심리", "공유"],
    "en": ["Personality", "Weather", "Emotion", "Psychology", "Share"],
    "ja": ["性格", "天気", "感性", "心理", "シェア"],
    "zh-CN": ["性格", "天气", "感性", "心理", "分享"],
    "zh-TW": ["性格", "天氣", "感性", "心理", "分享"],
    "vi": ["Tính cách", "Thời tiết", "Cảm xúc", "Tâm lý", "Chia sẻ"],
    "id": ["Kepribadian", "Cuaca", "Emosional", "Psikologi", "Share"]
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
