-- 나의 '첫인상' 컬러 스캐너
-- slug: phase3-first-impression-color-scanner
-- thumbnail: p3_test_first_impression_color_scanner.webp

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
  'phase3-first-impression-color-scanner',
  '{"ko": "나의 ''첫인상'' 컬러 스캐너", "en": "My ''First Impression'' Color Scanner", "ja": "私の『第一印象』カラースキャナー", "zh-CN": "我的「第一印象」色彩扫描仪", "zh-TW": "我的「第一印象」色彩掃描儀", "vi": "Máy quét màu ''ấn tượng đầu'' của tôi", "id": "Pemindai Warna ''Kesan Pertama''-ku"}',
  '{"ko": "직관적으로 끌리는 이미지를 선택하면 남들이 나에게서 느끼는 색깔을 분석해 드립니다. 퍼스널 컬러와 연결한 나만의 컬러 정체성까지.", "en": "Pick images you are drawn to — we analyze the color others sense from you and connect it to your personal color identity.", "ja": "直感で惹かれる画像を選ぶと、周りがあなたから感じる色を分析します。パーソナルカラーとつながるカラーアイデンティティまで。", "zh-CN": "凭直觉选择吸引你的图片，分析别人从你身上感受到的颜色，并连接到你的个人色彩身份。", "zh-TW": "憑直覺選擇吸引你的圖片，分析別人從你身上感受到的顏色，並連接到你的個人色彩身分。", "vi": "Chọn hình ảnh bạn bị thu hút theo trực giác — phân tích màu người khác cảm nhận từ bạn và kết nối personal color.", "id": "Pilih gambar yang menarik secara intuitif — kami analisis warna yang orang rasakan darimu dan hubungkan dengan personal color."}',
  'p3_test_first_impression_color_scanner.webp',
  'psychology',
  'personality',
  '{"ko": ["첫인상", "컬러", "퍼스널컬러"], "en": ["first impression", "color", "personal color"], "ja": ["第一印象", "カラー", "パーソナルカラー"], "zh-CN": ["第一印象", "色彩", "个人色彩"], "zh-TW": ["第一印象", "色彩", "個人色彩"], "vi": ["ấn tượng đầu", "màu sắc", "personal color"], "id": ["kesan pertama", "warna", "personal color"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
