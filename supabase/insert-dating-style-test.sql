-- 데이트 스타일 테스트 데이터 삽입
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
  'my-dating-style',
  '{
    "ko": "나에게 맞는 데이트 스타일은?",
    "en": "What is your dating style?",
    "ja": "あなたのデートスタイルは？",
    "zh-CN": "你的约会风格是什么？",
    "zh-TW": "你的約會風格是什麼？",
    "vi": "Phong cách hẹn hò của bạn là gì?",
    "id": "Apa gaya kencan Anda?"
  }',
  '{
    "ko": "연애 상세 분석! 당신만의 데이트 스타일은? 완벽하게 준비된 데이트를 선호하나요? 즉흥적이고 자유로운 시간을 좋아하나요?",
    "en": "Detailed dating analysis! What is your dating style? Do you prefer perfectly prepared dates? Do you like spontaneous and free time?",
    "ja": "デート詳細分析！あなただけのデートスタイルは？完璧に準備されたデートを好みますか？即興的で自由な時間が好きですか？",
    "zh-CN": "详细约会分析！你的约会风格是什么？你喜欢完全准备好的约会吗？你喜欢自发自由的时间吗？",
    "zh-TW": "詳細約會分析！你的約會風格是什麼？你喜歡完全準備好的約會嗎？你喜歡自發自由的時間嗎？",
    "vi": "Phân tích chi tiết hẹn hò! Phong cách hẹn hò của bạn là gì? Bạn có thích những cuộc hẹn được chuẩn bị hoàn hảo không? Bạn có thích thời gian tự phát và tự do không?",
    "id": "Analisis kencan detail! Apa gaya kencan Anda? Apakah Anda lebih suka kencan yang disiapkan dengan sempurna? Apakah Anda suka waktu spontan dan bebas?"
  }',
  'test_221_dating_style.jpg',
  'dating',
  'love',
  '{
    "ko": ["연애", "관계"],
    "en": ["Love", "Relationships"],
    "ja": ["恋愛", "関係"],
    "zh-CN": ["恋爱", "关系"],
    "zh-TW": ["戀愛", "關係"],
    "vi": ["Tình yêu", "Mối quan hệ"],
    "id": ["Cinta", "Hubungan"]
  }',
  0
);

