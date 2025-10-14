-- 애착 스타일 테스트 메타데이터 업데이트
UPDATE tests 
SET 
  title = '{"ko": "어떤 애착 스타일을 가지고 있나요?", "en": "What attachment style do you have?", "ja": "どの愛着スタイルを持っていますか？", "zh-CN": "你有什么依恋风格？", "zh-TW": "你有什麼依戀風格？", "vi": "Bạn có phong cách gắn bó nào?", "id": "Gaya kelekatan apa yang Anda miliki?"}',
  description = '{"ko": "당신의 사랑 방식, 어린 시절부터 결정됐다? 심리학의 애착 이론으로 나의 애착 스타일을 알아보세요.", "en": "Your way of loving, determined from childhood? Discover your attachment style through psychological attachment theory.", "ja": "あなたの愛し方、幼い頃から決まっている？心理学の愛着理論で私の愛着スタイルを調べてみましょう。", "zh-CN": "你的爱情方式，从童年就决定了？通过心理学的依恋理论了解你的依恋风格。", "zh-TW": "你的愛情方式，從童年就決定了？通過心理學的依戀理論了解你的依戀風格。", "vi": "Cách yêu của bạn, được quyết định từ thời thơ ấu? Khám phá phong cách gắn bó của bạn thông qua lý thuyết gắn bó tâm lý học.", "id": "Cara mencintai Anda, ditentukan sejak masa kanak-kanak? Temukan gaya kelekatan Anda melalui teori kelekatan psikologi."}',
  thumbnail = 'test_028_attachment_style.jpg',
  tags = '["심리", "관계"]',
  type = 'dating',
  updated_at = NOW()
WHERE slug = 'attachment-style-test';

