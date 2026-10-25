-- 얼굴로 보는 나의 매력 포인트 TOP
-- slug: phase3-face-charm-point
-- thumbnail: p3_test_face_charm_point.webp

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
  'phase3-face-charm-point',
  '{"ko": "얼굴로 보는 나의 매력 포인트 TOP", "en": "The charm that stands out on my face", "ja": "顔から見える、私の魅力", "zh-CN": "脸上最亮的魅力点", "zh-TW": "臉上最亮的魅力點", "vi": "Điểm cuốn hút trên khuôn mặt tôi", "id": "Daya tarik yang paling terasa di wajahku"}',
  '{"ko": "사진 한 장에서 표정과 얼굴 비율을 읽고, 나를 가장 잘 설명하는 매력 키워드 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "One photo reads your expression and face shape, then picks the charm keyword that fits you best out of 8. The photo stays on your device. It is never saved or sent.", "ja": "写真1枚から表情と顔のバランスを読んで、あなたをいちばんよく表す魅力を8つから選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "一张照片读出表情和脸型，从8个魅力关键词里选出最像你的一个。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "一張照片讀出表情和臉型，從8個魅力關鍵詞裡選出最像你的一個。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn từ khóa điểm hút hợp bạn nhất trong 8 từ. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih kata daya tarik yang paling menggambarkanmu dari 8 pilihan. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_charm_point.webp',
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
