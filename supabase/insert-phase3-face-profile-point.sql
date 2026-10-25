-- AI가 골라주는 내 소개팅 프로필 포인트
-- slug: phase3-face-profile-point
-- thumbnail: p3_test_face_profile_point.webp

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
  'phase3-face-profile-point',
  '{"ko": "AI가 골라주는 내 소개팅 프로필 포인트", "en": "Which vibe fits my dating profile?", "ja": "マッチング写真、似合う雰囲気は？", "zh-CN": "交友照片，什么氛围最适合我？", "zh-TW": "交友照片，什麼氛圍最適合我？", "vi": "Ảnh hẹn hò của tôi hợp vibe nào?", "id": "Foto kenalan aku cocok dengan vibe apa?"}',
  '{"ko": "사진 한 장에서 표정과 얼굴 비율을 읽고, 소개팅 프로필에 어울리는 분위기 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "One photo reads your expression and face shape, then picks one of 8 vibes for your dating profile. The photo stays on your device. It is never saved or sent.", "ja": "写真1枚から表情と顔のバランスを読んで、マッチング写真に合う雰囲気を8つから選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "一张照片读出表情和脸型，从8种氛围里挑出最适合交友照片的一种。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "一張照片讀出表情和臉型，從8種氛圍裡挑出最適合交友照片的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn 1 trong 8 vibe hợp với ảnh hẹn hò của bạn. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih 1 dari 8 vibe yang cocok untuk foto kenalanmu. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_profile_point.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"], "en": ["face", "face test", "first impression", "dating"], "ja": ["顔", "顔テスト", "印象", "恋愛"], "zh-CN": ["脸", "脸测试", "印象", "恋爱"], "zh-TW": ["臉", "臉測驗", "印象", "戀愛"], "vi": ["khuôn mặt", "test khuôn mặt", "ấn tượng", "hẹn hò"], "id": ["wajah", "tes wajah", "kesan", "kenalan"]}',
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
