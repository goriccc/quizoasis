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
  'phase3-solo-dining-type',
  '{
    "ko": "나의 혼밥 유형",
    "en": "My Solo Dining Type",
    "ja": "私のひとりご飯タイプ",
    "zh-CN": "我的独自用餐类型",
    "zh-TW": "我的獨自用餐類型",
    "vi": "Kiểu ăn một mình của tôi",
    "id": "Tipe Makan Sendiri Saya"
  }',
  '{
    "ko": "직관적으로 끌리는 이미지를 선택하면 나의 혼밥 유형과 숨겨진 성향을 분석해 드립니다.",
    "en": "Choose images that intuitively draw you in — we analyze your solo dining type and hidden personality traits.",
    "ja": "直感で惹かれる画像を選ぶと、あなたのひとりご飯タイプと隠れた性格傾向を分析します。",
    "zh-CN": "选择直觉吸引你的图片，分析你的独自用餐类型和隐藏性格倾向。",
    "zh-TW": "選擇直覺吸引你的圖片，分析你的獨自用餐類型和隱藏性格傾向。",
    "vi": "Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích kiểu ăn một mình và tính cách ẩn của bạn.",
    "id": "Pilih gambar yang menarik secara intuitif — kami analisis tipe makan sendiri dan sifat tersembunyi Anda."
  }',
  'p3_test_solo_dining_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["혼밥", "혼자", "식사", "성격", "공감"],
    "en": ["Solo dining", "Alone", "Eating", "Personality", "Empathy"],
    "ja": ["ひとりご飯", "一人", "食事", "性格", "共感"],
    "zh-CN": ["独自用餐", "一个人", "吃饭", "性格", "共鸣"],
    "zh-TW": ["獨自用餐", "一個人", "吃飯", "性格", "共鳴"],
    "vi": ["Ăn một mình", "Một mình", "Ăn uống", "Tính cách", "Đồng cảm"],
    "id": ["Makan sendiri", "Sendirian", "Makan", "Kepribadian", "Empati"]
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
