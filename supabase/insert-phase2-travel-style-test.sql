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
  'phase2_travel-style-test',
  $${ 
    "ko": "나의 '여행' 스타일 (J vs P 진단)",
    "en": "My 'Travel' Style (J vs P Diagnosis)",
    "ja": "私の「旅行」スタイル（J vs P診断）",
    "zh-CN": "我的'旅行'风格（J vs P诊断）",
    "zh-TW": "我的「旅行」風格（J vs P診斷）",
    "vi": "Phong cách 'Du lịch' của tôi (Chẩn đoán J vs P)",
    "id": "Gaya 'Perjalanan' Saya (Diagnosis J vs P)"
  }$$,
  $${ 
    "ko": "여행은 준비하는 순간부터 시작일까요, 떠나는 순간부터 시작일까요?",
    "en": "Does travel start the moment you prepare, or the moment you leave?",
    "ja": "旅行は準備する瞬間から始まるのか、出発する瞬間から始まるのか？",
    "zh-CN": "旅行是从准备的那一刻开始，还是从出发的那一刻开始？",
    "zh-TW": "旅行是從準備的那一刻開始，還是從出發的那一刻開始？",
    "vi": "Du lịch bắt đầu từ lúc chuẩn bị hay từ lúc lên đường?",
    "id": "Apakah perjalanan dimulai saat Anda mempersiapkan, atau saat Anda berangkat?"
  }$$,
  'phase2_test_157_travel_style.jpg',
  'personality',
  'mbti',
  $${ 
    "ko": ["성격", "MBTI"],
    "en": ["Personality", "MBTI"],
    "ja": ["性格", "MBTI"],
    "zh-CN": ["性格", "MBTI"],
    "zh-TW": ["性格", "MBTI"],
    "vi": ["Tính cách", "MBTI"],
    "id": ["Kepribadian", "MBTI"]
  }$$,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
