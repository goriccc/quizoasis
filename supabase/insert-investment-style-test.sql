-- 재테크 성향 테스트 데이터 삽입
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
  'investment-style-test',
  '{
    "ko": "당신의 재테크 성향은?",
    "en": "What is your investment style?",
    "ja": "あなたの資産運用スタイルは？",
    "zh-CN": "你的理财倾向是什么？",
    "zh-TW": "你的理財傾向是什麼？",
    "vi": "Xu hướng đầu tư của bạn là gì?",
    "id": "Apa gaya investasi Anda?"
  }',
  '{
    "ko": "당신의 재테크 성향을 알아보세요",
    "en": "Discover your investment style",
    "ja": "あなたの資産運用スタイルを発見",
    "zh-CN": "发现你的理财倾向",
    "zh-TW": "發現你的理財傾向",
    "vi": "Khám phá xu hướng đầu tư của bạn",
    "id": "Temukan gaya investasi Anda"
  }',
  'test_056_investment_style.jpg',
  'career',
  'career',
  '{
    "ko": ["재테크", "직업"],
    "en": ["Investment", "Job"],
    "ja": ["資産運用", "職業"],
    "zh-CN": ["理财", "职业"],
    "zh-TW": ["理財", "職業"],
    "vi": ["Đầu tư", "Nghề nghiệp"],
    "id": ["Investasi", "Pekerjaan"]
  }',
  0
);
