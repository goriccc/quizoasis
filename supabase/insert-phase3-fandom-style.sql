-- 나의 덕질 성향 진단
-- slug: phase3-fandom-style
-- thumbnail: p3_test_fandom_style.webp

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
  'phase3-fandom-style',
  '{"ko": "나의 덕질 성향 진단", "en": "My Fandom Style Diagnosis", "ja": "私の推し活タイプ診断", "zh-CN": "我的追星倾向诊断", "zh-TW": "我的追星傾向診斷", "vi": "Chẩn đoán phong cách fan của tôi", "id": "Diagnosis Gaya Fandom-ku"}',
  '{"ko": "12가지 질문으로 나의 진짜 덕질 성향과 가장 잘 맞는 최애 유형을 찾아드립니다.", "en": "Find your true fandom style and the bias type that fits you best through 12 questions.", "ja": "12の質問で本当の推し活タイプと最も合う推しタイプを見つけます。", "zh-CN": "通过12个问题找到你真正的追星倾向和最匹配的本命类型。", "zh-TW": "透過12個問題找到你真正的追星傾向和最匹配的本命類型。", "vi": "Tìm phong cách fan thật và kiểu bias phù hợp nhất qua 12 câu hỏi.", "id": "Temukan gaya fandom sebenarnya dan tipe bias yang paling cocok lewat 12 pertanyaan."}',
  'p3_test_fandom_style.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["덕질", "팬덤", "최애", "덕후", "K팝"], "en": ["fandom", "fan", "bias", "stan", "K-pop"], "ja": ["推し活", "ファンダム", "推し", "オタク", "K-POP"], "zh-CN": ["追星", "粉丝", "本命", "铁粉", "K-pop"], "zh-TW": ["追星", "粉絲", "本命", "鐵粉", "K-pop"], "vi": ["fan", "fandom", "bias", "stan", "K-pop"], "id": ["fandom", "fan", "bias", "stan", "K-pop"]}',
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
