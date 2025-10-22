-- 당신에게 숨겨진 창업가 기질은? 테스트 데이터 삽입
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
  'entrepreneur-spirit-test',
  '{
    "ko": "당신에게 숨겨진 창업가 기질은?",
    "en": "What is your hidden entrepreneurial spirit?",
    "ja": "あなたに隠された起業家気質は？",
    "zh-CN": "你隐藏的企业家精神是什么？",
    "zh-TW": "你隱藏的企業家精神是什麼？",
    "vi": "Tinh thần khởi nghiệp ẩn giấu của bạn là gì?",
    "id": "Apa semangat kewirausahaan tersembunyi Anda?"
  }',
  '{
    "ko": "당신 안에 숨어있는 CEO의 DNA를 발견하세요!",
    "en": "Discover the CEO DNA hidden within you!",
    "ja": "あなたの中に隠れているCEOのDNAを発見してください！",
    "zh-CN": "发现隐藏在你体内的CEO DNA！",
    "zh-TW": "發現隱藏在你體內的CEO DNA！",
    "vi": "Khám phá DNA CEO ẩn giấu trong bạn!",
    "id": "Temukan DNA CEO yang tersembunyi dalam diri Anda!"
  }',
  'test_050_entrepreneur_spirit.jpg',
  'dating',
  'love',
  '{
    "ko": ["직업"],
    "en": ["Career"],
    "ja": ["職業"],
    "zh-CN": ["职业"],
    "zh-TW": ["職業"],
    "vi": ["Nghề nghiệp"],
    "id": ["Karier"]
  }',
  0
);
