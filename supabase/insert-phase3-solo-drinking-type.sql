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
  'phase3-solo-drinking-type',
  '{
    "ko": "나의 혼술 유형과 술버릇",
    "en": "My Solo Drinking Type & Habits",
    "ja": "私のひとり飲みタイプと飲酒習慣",
    "zh-CN": "我的独自饮酒类型与饮酒习惯",
    "zh-TW": "我的獨自飲酒類型與飲酒習慣",
    "vi": "Kiểu uống một mình & thói quen uống của tôi",
    "id": "Tipe Minum Sendiri & Kebiasaan Minum Saya"
  }',
  '{
    "ko": "직관적으로 끌리는 이미지를 선택하면 나의 혼술 DNA와 술버릇을 정확하게 분석해 드립니다.",
    "en": "Choose images that intuitively draw you in — we accurately analyze your solo drinking DNA and drinking habits.",
    "ja": "直感で惹かれる画像を選ぶと、あなたのひとり飲みDNAと飲酒習慣を正確に分析します。",
    "zh-CN": "选择直觉吸引你的图片，我们将准确分析你的独自饮酒DNA和饮酒习惯。",
    "zh-TW": "選擇直覺吸引你的圖片，我們將準確分析你的獨自飲酒DNA和飲酒習慣。",
    "vi": "Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích chính xác DNA uống một mình và thói quen uống của bạn.",
    "id": "Pilih gambar yang menarik secara intuitif — kami analisis DNA minum sendiri dan kebiasaan minummu dengan akurat."
  }',
  'p3_test_solo_drinking_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["혼술", "술버릇", "음주", "안주", "공감"],
    "en": ["Solo drinking", "Drinking habits", "Alcohol", "Snacks", "Empathy"],
    "ja": ["ひとり飲み", "飲酒習慣", "お酒", "おつまみ", "共感"],
    "zh-CN": ["独自饮酒", "饮酒习惯", "喝酒", "下酒菜", "共鸣"],
    "zh-TW": ["獨自飲酒", "飲酒習慣", "喝酒", "下酒菜", "共鳴"],
    "vi": ["Uống một mình", "Thói quen uống", "Rượu bia", "Mồi nhậu", "Đồng cảm"],
    "id": ["Minum sendiri", "Kebiasaan minum", "Alkohol", "Camilan", "Empati"]
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
