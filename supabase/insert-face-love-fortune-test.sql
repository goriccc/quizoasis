-- 얼굴로 보는 올해 나의 연애운 테스트 데이터 삽입
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
  'face-love-fortune',
  '{
    "ko": "얼굴로 보는 올해 나의 연애운",
    "en": "My Love Fortune This Year by Face Reading",
    "ja": "顔で見る今年の私の恋愛運",
    "zh-CN": "从面相看今年的恋爱运",
    "zh-TW": "從面相看今年的戀愛運",
    "vi": "Vận Tình Duyên Năm Nay Qua Khuôn Mặt",
    "id": "Nasib Cinta Tahun Ini Melalui Wajah"
  }',
  '{
    "ko": "올해 당신에게 사랑은 찾아올까요?\n\n짝사랑? 썸? 연애? 결혼?\n당신의 얼굴에서 올해 연애운을 읽어드립니다.\n\n언제 어디서 인연을 만날까요?\n그 사람은 어떤 스타일일까요?\n주의해야 할 시기는?\n당신의 올해 연애운을 정확하게 예측합니다!",
    "en": "Will love find you this year?\n\nCrush? Flirting? Dating? Marriage?\nWe read your love fortune this year from your face.\n\nWhen and where will you meet your destiny?\nWhat style will that person be?\nWhat period should you be careful?\nWe accurately predict your love fortune this year!",
    "ja": "今年あなたに愛は訪れるでしょうか？\n\n片思い？未完成？恋愛？結婚？\nあなたの顔から今年の恋愛運を読み取ります。\n\nいつどこで縁に出会うでしょうか？\nその人はどんなスタイルでしょうか？\n注意すべき時期は？\nあなたの今年の恋愛運を正確に予測します！",
    "zh-CN": "今年爱情会找到你吗？\n\n暗恋？暧昧？恋爱？结婚？\n从你的面相读取今年的恋爱运。\n\n何时何地会相遇？\n那个人会是什么风格？\n需要注意的时期是？\n准确预测你今年的恋爱运！",
    "zh-TW": "今年愛情會找到你嗎？\n\n暗戀？曖昧？戀愛？結婚？\n從你的面相讀取今年的戀愛運。\n\n何時何地會相遇？\n那個人會是什麼風格？\n需要注意的時期是？\n準確預測你今年的戀愛運！",
    "vi": "Tình yêu có tìm đến bạn trong năm nay không?\n\nTình đơn phương? Quan hệ mơ hồ? Hẹn hò? Kết hôn?\nChúng tôi đọc vận tình duyên năm nay từ khuôn mặt bạn.\n\nKhi nào và ở đâu bạn sẽ gặp định mệnh?\nNgười đó sẽ là kiểu người như thế nào?\nThời kỳ nào cần cẩn thận?\nChúng tôi dự đoán chính xác vận tình duyên năm nay của bạn!",
    "id": "Akankah cinta menemukan Anda tahun ini?\n\nCinta sepihak? Hubungan samar? Berkencan? Menikah?\nKami membaca nasib cinta tahun ini dari wajah Anda.\n\nKapan dan di mana Anda akan bertemu takdir?\nSeperti apa gaya orang itu?\nPeriode apa yang harus Anda waspadai?\nKami memprediksi dengan akurat nasib cinta Anda tahun ini!"
  }',
  'Face_Love_Fortune.jpg',
  'face',
  'face',
  '{
    "ko": ["얼굴", "연애"],
    "en": ["face", "love"],
    "ja": ["顔", "恋愛"],
    "zh-CN": ["面相", "恋爱"],
    "zh-TW": ["面相", "戀愛"],
    "vi": ["khuôn mặt", "tình yêu"],
    "id": ["wajah", "cinta"]
  }',
  0
);

