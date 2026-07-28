-- 내 성격의 감성 온도
-- slug: phase3-personality-color-temperature
-- thumbnail: p3_test_personality_color_temperature.webp

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
  'phase3-personality-color-temperature',
  '{"ko": "내 성격의 감성 온도", "en": "My Personality Color Temperature", "ja": "私の性格の感性温度", "zh-CN": "我性格的情感温度", "zh-TW": "我性格的情感溫度", "vi": "Nhiệt độ cảm xúc tính cách của tôi", "id": "Suhu Emosi Kepribadianku"}',
  '{"ko": "12가지 이미지 중 더 끌리는 것을 직관적으로 선택하면 나의 감성 온도와 컬러를 분석해 드립니다. 쿨톤부터 웜톤까지 6가지 감성 온도 유형.", "en": "Pick the images you are drawn to among 12 choices — we analyze your emotional temperature and color from cool to warm across 6 types.", "ja": "12枚の画像から直感で選ぶと、あなたの感性温度とカラーを分析します。クールからウォームまで6タイプ。", "zh-CN": "从12张图片中凭直觉选择更吸引你的，分析你的情感温度与色彩，从冷调到暖调共6种类型。", "zh-TW": "從12張圖片中憑直覺選擇更吸引你的，分析你的情感溫度與色彩，從冷調到暖調共6種類型。", "vi": "Chọn trực giác hình ảnh bạn bị thu hút trong 12 lựa chọn — phân tích nhiệt độ cảm xúc và màu sắc từ cool đến warm, 6 kiểu.", "id": "Pilih gambar yang menarik dari 12 pilihan secara intuitif — analisis suhu emosi dan warnamu dari cool ke warm, 6 tipe."}',
  'p3_test_personality_color_temperature.webp',
  'psychology',
  'personality',
  '{"ko": ["감성온도", "퍼스널컬러", "쿨톤", "웜톤", "성격색깔"], "en": ["emotion temperature", "personal color", "cool tone", "warm tone", "personality color"], "ja": ["感性温度", "パーソナルカラー", "クールトーン", "ウォームトーン", "性格カラー"], "zh-CN": ["情感温度", "个人色彩", "冷调", "暖调", "性格色彩"], "zh-TW": ["情感溫度", "個人色彩", "冷調", "暖調", "性格色彩"], "vi": ["nhiệt độ cảm xúc", "personal color", "cool tone", "warm tone", "màu tính cách"], "id": ["suhu emosi", "personal color", "cool tone", "warm tone", "warna kepribadian"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
