-- 얼굴로 보는 나의 동물상
-- slug: phase3-face-animal-type
-- thumbnail: p3_test_face_animal_type.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-face-animal-type',
  '{"ko": "얼굴로 보는 나의 동물상", "en": "Which animal does my face look like?", "ja": "顔で見る、私の動物顔", "zh-CN": "从脸看我的动物系", "zh-TW": "從臉看我的動物系", "vi": "Nhìn mặt, tôi giống loài nào?", "id": "Dari wajah, aku mirip hewan apa?"}',
  '{"ko": "사진 한 장에서 표정과 얼굴 비율을 읽고, 분위기가 닮은 동물상 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "One photo reads your expression and face shape, then picks the animal whose vibe matches you. The photo stays on your device. It is never saved or sent.", "ja": "写真1枚から表情と顔のバランスを読んで、雰囲気の近い動物顔を8つの中から選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "一张照片读出表情和脸型，从8种动物系里选出气质相近的一种。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "一張照片讀出表情和臉型，從8種動物系裡選出氣質相近的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn loài có khí chất gần bạn trong 8 kiểu. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih hewan yang suasananya paling dekat dari 8 tipe. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_animal_type.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"], "en": ["face", "face test", "first impression", "dating"], "ja": ["顔", "顔テスト", "印象", "恋愛"], "zh-CN": ["脸", "脸测试", "印象", "恋爱"], "zh-TW": ["臉", "臉測驗", "印象", "戀愛"], "vi": ["khuôn mặt", "test khuôn mặt", "ấn tượng", "tình yêu"], "id": ["wajah", "tes wajah", "kesan", "cinta"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
