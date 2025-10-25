-- 반응 스타일 테스트 데이터 업데이트 (이미 존재하는 경우)
UPDATE tests
SET
  title = '{
    "ko": "당신은 어떻게 반응할까요?",
    "en": "How do you react?",
    "ja": "あなたはどう反応しますか？",
    "zh-CN": "你会如何反应？",
    "zh-TW": "你會如何反應？",
    "vi": "Bạn phản ứng như thế nào?",
    "id": "Bagaimana Anda bereaksi?"
  }',
  description = '{
    "ko": "당신의 진짜 반응은? 상황에 따른 반응 스타일을 분석해보세요!",
    "en": "What is your real reaction? Analyze your reaction style to different situations!",
    "ja": "あなたの本当の反応は？様々な状況での反応スタイルを分析してみてください！",
    "zh-CN": "你的真实反应是什么？分析你在不同情况下的反应风格！",
    "zh-TW": "你的真實反應是什麼？分析你在不同情況下的反應風格！",
    "vi": "Phản ứng thực sự của bạn là gì? Hãy phân tích phong cách phản ứng của bạn trong các tình huống khác nhau!",
    "id": "Apa reaksi asli Anda? Analisis gaya reaksi Anda dalam situasi yang berbeda!"
  }',
  thumbnail = 'test_225_reaction_style.jpg',
  type = 'personality',
  category = 'psychology',
  tags = '{
    "ko": ["성격", "심리"],
    "en": ["Personality", "Psychology"],
    "ja": ["性格", "心理"],
    "zh-CN": ["性格", "心理"],
    "zh-TW": ["性格", "心理"],
    "vi": ["Tính cách", "Tâm lý"],
    "id": ["Kepribadian", "Psikologi"]
  }'
WHERE slug = 'reaction-style-test';
