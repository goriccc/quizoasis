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
  'phase3-ditto-consumption-type',
  '{
    "ko": "나의 디토소비 유형",
    "en": "My Ditto Consumption Type",
    "ja": "私のディトゥー消費タイプ",
    "zh-CN": "我的跟风消费类型",
    "zh-TW": "我的跟風消費類型",
    "vi": "Kiểu tiêu dùng Ditto của tôi",
    "id": "Tipe Konsumsi Ditto Saya"
  }',
  '{
    "ko": "12가지 질문으로 나의 디토소비 패턴을 분석합니다.",
    "en": "Analyze your ditto consumption pattern in 12 questions.",
    "ja": "12問であなたのディトゥー消費パターンを分析します。",
    "zh-CN": "用12道题分析你的跟风消费模式。",
    "zh-TW": "用12道題分析你的跟風消費模式。",
    "vi": "Phân tích kiểu tiêu dùng Ditto của bạn qua 12 câu hỏi.",
    "id": "Analisis pola konsumsi Ditto-mu lewat 12 pertanyaan."
  }',
  'p3_test_ditto_consumption_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["디토소비", "소비패턴", "트렌드", "인플루언서", "브랜드"],
    "en": ["Ditto consumption", "Spending pattern", "Trend", "Influencer", "Brand"],
    "ja": ["ディトゥー消費", "消費パターン", "トレンド", "インフルエンサー", "ブランド"],
    "zh-CN": ["跟风消费", "消费模式", "趋势", "网红", "品牌"],
    "zh-TW": ["跟風消費", "消費模式", "趨勢", "網紅", "品牌"],
    "vi": ["Tiêu dùng Ditto", "Mẫu chi tiêu", "Xu hướng", "Influencer", "Thương hiệu"],
    "id": ["Konsumsi Ditto", "Pola belanja", "Tren", "Influencer", "Brand"]
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
