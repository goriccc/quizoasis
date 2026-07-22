-- 나의 '먹방' 스타일 진단
-- slug: phase3-mukbang-style-diagnosis
-- thumbnail: p3_test_mukbang_style_diagnosis.webp
-- answer images: p3_test_mukbang_style_diagnosis_q{n}a~b.webp (24장)

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
  'phase3-mukbang-style-diagnosis',
  '{"ko": "나의 ''먹방'' 스타일 진단", "en": "Diagnosing My ''Mukbang'' Style", "ja": "私の『食べっぷり』スタイル診断", "zh-CN": "诊断我的「干饭」风格", "zh-TW": "診斷我的「吃播」風格", "vi": "Chẩn đoán phong cách ăn uống của tôi", "id": "Diagnosis Gaya ''Makan'' Milikku"}',
  '{"ko": "12가지 이미지 선택으로 나의 진짜 먹방 스타일을 진단합니다.", "en": "12 image choices diagnose your true mukbang style.", "ja": "12枚の画像選択で、あなたの本当の『食べっぷり』スタイルを診断します。", "zh-CN": "通过12张图片选择，诊断出你真正的干饭风格。", "zh-TW": "透過12張圖片選擇，診斷出你真正的吃播風格。", "vi": "Chọn 12 hình ảnh để chẩn đoán phong cách ăn uống thật của bạn.", "id": "Pilih 12 gambar untuk mendiagnosis gaya makanmu yang sesungguhnya."}',
  'p3_test_mukbang_style_diagnosis.webp',
  'psychology',
  'personality',
  '{"ko": ["먹방", "찍먹부먹", "음식취향"], "en": ["mukbang", "food", "taste"], "ja": ["食べっぷり", "つけダレかけダレ", "食の好み"], "zh-CN": ["干饭", "蘸浇之争", "饮食口味"], "zh-TW": ["吃播", "沾淋之爭", "飲食口味"], "vi": ["ăn uống", "chấm hay rưới", "gu ẩm thực"], "id": ["makan", "cocol vs siram", "selera makanan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
