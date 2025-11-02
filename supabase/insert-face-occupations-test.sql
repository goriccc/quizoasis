-- 얼굴로 보는 추천 직업 테스트 데이터 삽입
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
  'face-occupations',
  '{
    "ko": "얼굴로 보는 추천 직업",
    "en": "Recommended Occupations by Face Reading",
    "ja": "顔で見る推奨職業",
    "zh-CN": "从面相看推荐职业",
    "zh-TW": "從面相看推薦職業",
    "vi": "Nghề Nghiệp Đề Xuất Qua Khuôn Mặt",
    "id": "Pekerjaan yang Direkomendasikan Melalui Wajah"
  }',
  '{
    "ko": "당신의 얼굴이 말하는 천직을 찾아드립니다\n\n리더형? 크리에이터형? 분석가형?\n당신의 얼굴에서 타고난 재능을 읽어냅니다.\n\n어떤 일에 소질이 있을까요?\n성공 확률이 높은 직업은? 숨겨진 가능성은?\n당신에게 딱 맞는 직업을 추천해드립니다!",
    "en": "Find the career your face speaks of\n\nLeader Type? Creator Type? Analyst Type?\nWe read your innate talents from your face.\n\nWhat are you good at?\nWhat occupations have high success rates? What are your hidden potentials?\nWe recommend the perfect job for you!",
    "ja": "あなたの顔が語る天職を見つけます\n\nリーダー型？クリエイター型？アナリスト型？\nあなたの顔から生まれ持った才能を読み取ります。\n\nどんな仕事に才能があるでしょうか？\n成功率が高い職業は？隠れた可能性は？\nあなたにぴったりの職業を推薦します！",
    "zh-CN": "为你找到面相所展现的天职\n\n领导型？创造者型？分析型？\n我们从你的面相读取天赋才能。\n\n你适合什么工作？\n哪些职业成功率高？你有哪些隐藏潜能？\n我们为你推荐最合适的职业！",
    "zh-TW": "為你找到面相所展現的天職\n\n領導型？創造者型？分析型？\n我們從你的面相讀取天賦才能。\n\n你適合什麼工作？\n哪些職業成功率高？你有哪些隱藏潛能？\n我們為你推薦最合適的職業！",
    "vi": "Tìm công việc lý tưởng mà khuôn mặt bạn nói lên\n\nKiểu Lãnh Đạo? Kiểu Sáng Tạo? Kiểu Phân Tích?\nChúng tôi đọc tài năng bẩm sinh của bạn từ khuôn mặt.\n\nBạn giỏi những gì?\nNhững nghề nghiệp nào có tỷ lệ thành công cao? Tiềm năng ẩn giấu của bạn là gì?\nChúng tôi đề xuất công việc hoàn hảo cho bạn!",
    "id": "Temukan pekerjaan yang cocok yang wajah Anda katakan\n\nTipe Pemimpin? Tipe Kreator? Tipe Analis?\nKami membaca bakat bawaan Anda dari wajah Anda.\n\nApa yang Anda kuasai?\nPekerjaan apa yang memiliki tingkat kesuksesan tinggi? Apa potensi tersembunyi Anda?\nKami merekomendasikan pekerjaan yang sempurna untuk Anda!"
  }',
  'Recommended_Occupations.jpg',
  'face',
  'face',
  '{
    "ko": ["얼굴", "직업"],
    "en": ["face", "career"],
    "ja": ["顔", "職業"],
    "zh-CN": ["面相", "职业"],
    "zh-TW": ["面相", "職業"],
    "vi": ["khuôn mặt", "nghề nghiệp"],
    "id": ["wajah", "karier"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

