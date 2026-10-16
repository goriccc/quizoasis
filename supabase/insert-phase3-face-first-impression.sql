-- 얼굴로 보는 내 첫인상 키워드 3가지
-- slug: phase3-face-first-impression
-- thumbnail: p3_test_face_first_impression.webp

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
  'phase3-face-first-impression',
  '{"ko": "얼굴로 보는 내 첫인상 키워드 3가지", "en": "3 First-Impression Keywords from My Face", "ja": "顔で見る、私の第一印象キーワード3つ", "zh-CN": "从脸看我的3个第一印象关键词", "zh-TW": "從臉看我的3個第一印象關鍵詞", "vi": "3 từ khóa ấn tượng đầu tiên từ khuôn mặt", "id": "3 kata kunci kesan pertama dari wajahku"}',
  '{"ko": "처음 만난 사람이 나를 보고 떠올리는 키워드는? 사진 한 장에서 표정과 얼굴 비율을 읽고 첫인상 키워드 3가지를 골라 드립니다. 사진은 기기에만 남고 서버로 보내지 않습니다.", "en": "What three words come to mind when someone meets you? One photo reads your expression and face shape, then picks three first-impression keywords. The photo stays on your device and is never sent to a server.", "ja": "初対面の人があなたを見て思い浮かべる言葉は？写真1枚から表情と顔のバランスを読み、第一印象キーワードを3つ選びます。写真は端末の中だけに残り、サーバーには送られません。", "zh-CN": "初次见面的人看到你会想到哪些词？一张照片读出表情和脸型比例，选出3个第一印象关键词。照片只留在你的设备上，不会上传到服务器。", "zh-TW": "初次見面的人看到你會想到哪些詞？一張照片讀出表情和臉型比例，選出3個第一印象關鍵詞。照片只留在你的裝置上，不會上傳到伺服器。", "vi": "Người mới gặp bạn sẽ nghĩ đến từ nào? Một tấm ảnh đọc nét mặt và tỷ lệ khuôn mặt, rồi chọn 3 từ khóa ấn tượng đầu tiên. Ảnh chỉ nằm trên thiết bị của bạn và không được gửi lên máy chủ.", "id": "Kata apa yang terlintas saat orang baru bertemu denganmu? Satu foto membaca ekspresi dan proporsi wajah, lalu memilih 3 kata kunci kesan pertama. Foto tetap di perangkatmu dan tidak dikirim ke server."}',
  'p3_test_face_first_impression.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴"], "en": ["face"], "ja": ["顔"], "zh-CN": ["面相"], "zh-TW": ["面相"], "vi": ["khuôn mặt"], "id": ["wajah"]}',
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
