-- 얼굴로 보는 나의 연애 약점
-- slug: phase3-face-love-weakness
-- thumbnail: p3_test_face_love_weakness.webp

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
  'phase3-face-love-weakness',
  '{"ko": "얼굴로 보는 나의 연애 약점", "en": "What dating habit shows on my face?", "ja": "顔に出る恋愛のクセ、何？", "zh-CN": "我的脸，暴露了哪种恋爱习惯？", "zh-TW": "我的臉，暴露了哪種戀愛習慣？", "vi": "Mặt tôi để lộ thói quen yêu nào?", "id": "Wajahku kebaca kebiasaan dekat yang mana?"}',
  '{"ko": "사진 한 장에서 표정과 얼굴 비율을 읽고, 나와 어울려 보이는 연애 습관 키워드 8가지 중 하나와 보완법을 알려 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "One photo reads your expression and face shape, then names the dating habit that fits you from 8, plus a way to soften it. The photo stays on your device. It is never saved or sent.", "ja": "写真1枚から表情と顔のバランスを読んで、あなたに見えやすい恋愛のクセを8つから一つ選び、整え方も添えます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "一张照片读出表情和脸型，从8个恋爱习惯里选出最像你的一个，并附上调整方法。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "一張照片讀出表情和臉型，從8個戀愛習慣裡選出最像你的一個，並附上調整方法。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn thói quen yêu gần bạn nhất trong 8 kiểu, kèm cách chỉnh nhẹ. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih kebiasaan dekat yang paling mirip kamu dari 8 pilihan, plus cara merapikannya. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_love_weakness.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"], "en": ["face", "face test", "dating habit", "dating"], "ja": ["顔", "顔テスト", "恋愛", "クセ"], "zh-CN": ["脸", "脸测试", "恋爱", "习惯"], "zh-TW": ["臉", "臉測驗", "戀愛", "習慣"], "vi": ["khuôn mặt", "test khuôn mặt", "thói quen yêu", "hẹn hò"], "id": ["wajah", "tes wajah", "kebiasaan dekat", "kenalan"]}',
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
