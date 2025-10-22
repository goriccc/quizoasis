-- 스트레스 해소법 테스트 데이터 삽입
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
  'stress-relief-test',
  '{
    "ko": "당신의 직무 스트레스 해소법은?",
    "en": "What is your job stress relief method?",
    "ja": "あなたの職務ストレス解消法は？",
    "zh-CN": "你的工作压力缓解方法是什么？",
    "zh-TW": "你的工作壓力緩解方法是什麼？",
    "vi": "Phương pháp giảm stress công việc của bạn là gì?",
    "id": "Apa metode pereda stres kerja Anda?"
  }',
  '{
    "ko": "당신의 직무 스트레스 해소법을 알아보세요",
    "en": "Discover your job stress relief method",
    "ja": "あなたの職務ストレス解消法を発見",
    "zh-CN": "发现你的工作压力缓解方法",
    "zh-TW": "發現你的工作壓力緩解方法",
    "vi": "Khám phá phương pháp giảm stress công việc của bạn",
    "id": "Temukan metode pereda stres kerja Anda"
  }',
  'test_054_stress_relief.jpg',
  'career',
  'career',
  '{
    "ko": ["직업", "직무"],
    "en": ["Job", "Work"],
    "ja": ["職業", "業務"],
    "zh-CN": ["职业", "工作"],
    "zh-TW": ["職業", "工作"],
    "vi": ["Nghề nghiệp", "Công việc"],
    "id": ["Pekerjaan", "Kerja"]
  }',
  0
);
