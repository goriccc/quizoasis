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
  'phase2_stress_care_test',
  '{
    "ko": "내 스트레스 원인 & 맞춤 처방",
    "en": "My Stress Cause & Custom Prescription",
    "ja": "私のストレス原因＆カスタム処方箋",
    "zh-CN": "我的压力原因和定制处方",
    "zh-TW": "我的壓力原因和定制處方",
    "vi": "Nguyên Nhân Căng Thẳng & Đơn Thuốc Tùy Chỉnh Của Tôi",
    "id": "Penyebab Stres & Resep Kustom Saya"
  }',
  '{
    "ko": "지금 당신을 가장 힘들게 하는 건 무엇인가요?",
    "en": "What is making you struggle the most right now?",
    "ja": "今あなたを最も苦しめているのは何ですか？",
    "zh-CN": "现在最让你困扰的是什么？",
    "zh-TW": "現在最讓你困擾的是什麼？",
    "vi": "Điều gì đang khiến bạn khó khăn nhất ngay bây giờ?",
    "id": "Apa yang paling membuat Anda kesulitan sekarang?"
  }',
  'phase2_test_133_stress_care.jpg',
  'psychology',
  'healing',
  '{
    "ko": ["심리", "힐링"],
    "en": ["Psychology", "Healing"],
    "ja": ["心理", "癒し"],
    "zh-CN": ["心理", "治愈"],
    "zh-TW": ["心理", "治愈"],
    "vi": ["Tâm lý", "Chữa lành"],
    "id": ["Psikologi", "Penyembuhan"]
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
