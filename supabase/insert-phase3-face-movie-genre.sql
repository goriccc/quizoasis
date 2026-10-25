-- 얼굴로 보는 나의 분위기 영화 장르
-- slug: phase3-face-movie-genre
-- thumbnail: p3_test_face_movie_genre.webp

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
  'phase3-face-movie-genre',
  '{"ko": "얼굴로 보는 나의 분위기 영화 장르", "en": "What movie genre is my vibe?", "ja": "顔の雰囲気、似てる映画ジャンルは？", "zh-CN": "我的脸，像哪种电影氛围？", "zh-TW": "我的臉，像哪種電影氛圍？", "vi": "Gương mặt tôi hợp thể loại phim nào?", "id": "Vibe wajahku mirip genre film apa?"}',
  '{"ko": "사진 한 장에서 표정과 얼굴 비율을 읽고, 나의 분위기와 닮은 영화 장르 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "One photo reads your expression and face shape, then picks the movie genre that matches your vibe from 8. The photo stays on your device. It is never saved or sent.", "ja": "写真1枚から表情と顔のバランスを読んで、雰囲気が近い映画ジャンルを8つの中から選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "一张照片读出表情和脸型，从8种电影氛围里选出最像你的一种。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "一張照片讀出表情和臉型，從8種電影氛圍裡選出最像你的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn thể loại phim gần với không khí của bạn trong 8 lựa chọn. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih genre film yang paling mirip vibe-mu dari 8 pilihan. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_movie_genre.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"], "en": ["face", "face test", "movie vibe", "dating"], "ja": ["顔", "顔テスト", "映画", "恋愛"], "zh-CN": ["脸", "脸测试", "电影", "恋爱"], "zh-TW": ["臉", "臉測驗", "電影", "戀愛"], "vi": ["khuôn mặt", "test khuôn mặt", "phim", "hẹn hò"], "id": ["wajah", "tes wajah", "film", "kenalan"]}',
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
