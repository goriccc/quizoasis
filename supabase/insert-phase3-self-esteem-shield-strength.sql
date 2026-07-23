-- 나의 '자존감 방패' 강도
-- slug: phase3-self-esteem-shield-strength
-- thumbnail: p3_test_self_esteem_shield_strength.webp

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
  'phase3-self-esteem-shield-strength',
  '{"ko": "나의 ''자존감 방패'' 강도", "en": "My Self-Esteem Shield Strength", "ja": "私の『自尊心シールド』強度", "zh-CN": "我的『自尊盾牌』强度", "zh-TW": "我的『自尊盾牌』強度", "vi": "Cường độ ''lá chắn tự trọng'' của tôi", "id": "Kekuatan ''Perisai Harga Diri'' Saya"}',
  '{"ko": "12가지 질문으로 외부 비난으로부터 나를 지키는 자존감 방패 강도를 측정합니다.", "en": "Measure your self-esteem shield strength against external criticism with 12 questions.", "ja": "12の質問で外部の非難から自分を守る自尊心シールドの強度を測ります。", "zh-CN": "通过12个问题测量你抵御外部批评的自尊盾牌强度。", "zh-TW": "透過12個問題測量你抵禦外部批評的自尊盾牌強度。", "vi": "Đo cường độ lá chắn tự trọng trước lời chỉ trích bên ngoài qua 12 câu hỏi.", "id": "Ukur kekuatan perisai harga diri terhadap kritik eksternal lewat 12 pertanyaan."}',
  'p3_test_self_esteem_shield_strength.webp',
  'psychology',
  'personality',
  '{"ko": ["자존감", "자기긍정", "방패", "멘탈", "심리"], "en": ["self-esteem", "self-affirmation", "shield", "mental", "psychology"], "ja": ["自尊心", "自己肯定", "シールド", "メンタル", "心理"], "zh-CN": ["自尊", "自我肯定", "盾牌", "心态", "心理"], "zh-TW": ["自尊", "自我肯定", "盾牌", "心態", "心理"], "vi": ["tự trọng", "tự khẳng định", "lá chắn", "tinh thần", "tâm lý"], "id": ["harga diri", "afirmasi diri", "perisai", "mental", "psikologi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
