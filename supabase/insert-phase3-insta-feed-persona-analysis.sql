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
  'phase3-insta-feed-persona-analysis',
  '{
    "ko": "나의 인스타 피드 성향 분석",
    "en": "My Instagram Feed Persona Analysis",
    "ja": "私のインスタフィード傾向分析",
    "zh-CN": "我的Instagram feed倾向分析",
    "zh-TW": "我的Instagram feed傾向分析",
    "vi": "Phân tích xu hướng feed Instagram của tôi",
    "id": "Analisis Persona Feed Instagram Saya"
  }',
  '{
    "ko": "직관적으로 끌리는 이미지를 선택하면 나의 인스타그램 큐레이션 방식과 업로드 습관, 소비 패턴을 분석해 나의 인스타 페르소나를 찾아드립니다.",
    "en": "Choose images that intuitively draw you in — we analyze your Instagram curation style, upload habits, and consumption patterns to find your feed persona.",
    "ja": "直感で惹かれる画像を選ぶと、Instagramのキュレーション方式・投稿習慣・消費パターンを分析し、あなたのインスタペルソナを見つけます。",
    "zh-CN": "选择直觉吸引你的图片，分析你的Instagram策展方式、发布习惯和消费模式，找出你的Instagram persona。",
    "zh-TW": "選擇直覺吸引你的圖片，分析你的Instagram策展方式、發布習慣和消費模式，找出你的Instagram persona。",
    "vi": "Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích cách curate, thói quen đăng bài và mô hình tiêu thụ Instagram để tìm persona feed của bạn.",
    "id": "Pilih gambar yang menarik secara intuitif — kami analisis gaya kurasi, kebiasaan upload, dan pola konsumsi Instagram untuk menemukan persona feed Anda."
  }',
  'p3_test_insta_feed_persona_analysis.webp',
  'psychology',
  'personality',
  '{
    "ko": ["인스타그램", "소셜미디어", "인플루언서"],
    "en": ["Instagram", "Social media", "Influencer"],
    "ja": ["Instagram", "ソーシャルメディア", "インフルエンサー"],
    "zh-CN": ["Instagram", "社交媒体", "网红"],
    "zh-TW": ["Instagram", "社交媒體", "網紅"],
    "vi": ["Instagram", "Mạng xã hội", "Influencer"],
    "id": ["Instagram", "Media sosial", "Influencer"]
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
