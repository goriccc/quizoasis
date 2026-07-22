-- 나의 '자아 성벽' 두께
-- slug: phase3-ego-wall-thickness
-- thumbnail: p3_test_ego_wall_thickness.webp
-- answer images: p3_test_ego_wall_thickness_q{n}a~b.webp (24장)

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
  'phase3-ego-wall-thickness',
  '{"ko": "나의 ''자아 성벽'' 두께", "en": "My ''Ego Wall'' Thickness", "ja": "私の『自我の壁』の厚さ", "zh-CN": "我的「自我城墙」厚度", "zh-TW": "我的「自我城牆」厚度", "vi": "Độ dày ''Bức tường bản ngã'' của tôi", "id": "Ketebalan ''Tembok Ego''-ku"}',
  '{"ko": "직관적으로 이미지를 선택하면 나의 자아 성벽 두께와 방어 기제 패턴을 분석해 드립니다.", "en": "Choose images intuitively, and we''ll analyze the thickness of your ego wall and your defense mechanism pattern.", "ja": "直感的に画像を選ぶと、あなたの自我の壁の厚さと防衛機制のパターンを分析します。", "zh-CN": "凭直觉选择图片，我们将为你分析自我城墙的厚度和防御机制模式。", "zh-TW": "憑直覺選擇圖片，我們將為你分析自我城牆的厚度和防禦機制模式。", "vi": "Chọn hình ảnh theo trực giác, chúng tôi sẽ phân tích độ dày bức tường bản ngã và kiểu cơ chế phòng vệ của bạn.", "id": "Pilih gambar secara intuitif, dan kami akan menganalisis ketebalan tembok egomu serta pola mekanisme pertahananmu."}',
  'p3_test_ego_wall_thickness.webp',
  'psychology',
  'personality',
  '{"ko": ["자아성벽", "방어기제", "자존감"], "en": ["ego wall", "defense mechanism", "self-esteem"], "ja": ["自我の壁", "防衛機制", "自己肯定感"], "zh-CN": ["自我城墙", "防御机制", "自尊"], "zh-TW": ["自我城牆", "防禦機制", "自尊"], "vi": ["bức tường bản ngã", "cơ chế phòng vệ", "tự tôn"], "id": ["tembok ego", "mekanisme pertahanan", "harga diri"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
