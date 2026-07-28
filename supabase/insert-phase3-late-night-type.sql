-- 나의 새벽 감성 유형
-- slug: phase3-late-night-type
-- thumbnail: p3_test_late_night_type.webp

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
  'phase3-late-night-type',
  '{"ko": "나의 새벽 감성 유형", "en": "My Late-Night Vibe Type", "ja": "私の夜明け前センシタイプ", "zh-CN": "我的凌晨感性类型", "zh-TW": "我的凌晨感性類型", "vi": "Kiểu cảm xúc đêm khuya của tôi", "id": "Tipe Vibe Tengah Malam-ku"}',
  '{"ko": "12가지 질문으로 나의 새벽 감성 유형과 그 안에 담긴 진짜 내면 에너지를 찾아드립니다.", "en": "Find your late-night vibe type and the true inner energy within it through 12 questions.", "ja": "12の質問で、あなたの夜明け前センシタイプとその中にある本当の内面エネルギーを見つけます。", "zh-CN": "通过12个问题，找出你的凌晨感性类型及其中的真实内在能量。", "zh-TW": "透過12個問題，找出你的凌晨感性類型及其中的真實內在能量。", "vi": "Tìm kiểu cảm xúc đêm khuya và năng lượng nội tâm thật sự qua 12 câu hỏi.", "id": "Temukan tipe vibe tengah malammu dan energi batin sejati di dalamnya lewat 12 pertanyaan."}',
  'p3_test_late_night_type.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["새벽감성", "야행성", "심야감성", "혼자시간", "새벽루틴"], "en": ["late night vibe", "night owl", "midnight mood", "solo time", "dawn routine"], "ja": ["夜明け前センシ", "夜型", "深夜の感性", "一人時間", "夜更かしルーティン"], "zh-CN": ["凌晨感性", "夜猫子", "深夜情绪", "独处时间", "凌晨routine"], "zh-TW": ["凌晨感性", "夜貓子", "深夜情緒", "獨處時間", "凌晨routine"], "vi": ["cảm xúc đêm khuya", "cú đêm", "tâm trạng đêm", "thời gian một mình", "routine đêm khuya"], "id": ["vibe tengah malam", "night owl", "mood midnight", "waktu sendiri", "rutinitas dini hari"]}',
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
