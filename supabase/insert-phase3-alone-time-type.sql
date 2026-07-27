-- 나의 '찐 혼자 시간' 유형
-- slug: phase3-alone-time-type
-- thumbnail: p3_test_alone_time_type.webp

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
  'phase3-alone-time-type',
  '{"ko": "나의 ''찐 혼자 시간'' 유형", "en": "My True Solo Time Type", "ja": "私の「本当の一人時間」タイプ", "zh-CN": "我的「真·独处时间」类型", "zh-TW": "我的「真·獨處時間」類型", "vi": "Kiểu thời gian một mình thật của tôi", "id": "Tipe Waktu Sendiri Asli-ku"}',
  '{"ko": "12가지 질문으로 아무도 없을 때의 진짜 나, 진짜 충전 방식을 분석합니다.", "en": "Analyze your true self and real recharge style when no one is around through 12 questions.", "ja": "12の質問で、誰もいないときの本当の自分と本当の充電方法を分析します。", "zh-CN": "通过12个问题分析无人时的真实自我与真正的充电方式。", "zh-TW": "透過12個問題分析無人時的真實自我與真正的充電方式。", "vi": "Phân tích con người thật và cách nạp năng lượng thật khi không ai ở bên qua 12 câu hỏi.", "id": "Analisis diri asli dan cara isi ulang energi saat sendiri lewat 12 pertanyaan."}',
  'p3_test_alone_time_type.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["혼자시간", "인싸아웃사", "내향", "MZ일상", "자기충전"], "en": ["solo time", "introvert extrovert", "introvert", "daily life", "self recharge"], "ja": ["一人時間", "インキャアウトキャ", "内向", "日常", "充電"], "zh-CN": ["独处时间", "内向外向", "内向", "日常", "自我充电"], "zh-TW": ["獨處時間", "內向外向", "內向", "日常", "自我充電"], "vi": ["thời gian một mình", "hướng nội ngoại", "hướng nội", "đời sống", "nạp năng lượng"], "id": ["waktu sendiri", "introvert ekstrovert", "introvert", "keseharian", "isi ulang energi"]}',
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
