-- Insert Phase 2 Color Survival Test
INSERT INTO tests (slug, title, description, thumbnail, type, category, tags, created_at, updated_at)
VALUES (
  'phase2_color_survival_test',
  '{"ko": "\u0027신의 눈\u0027 절대색감 챌린지 (타임 어택)", "en": "\u0027God\u0027s Eye\u0027 Absolute Color Challenge (Time Attack)", "ja": "「神の目」絶対色感チャレンジ（タイムアタック）", "zh": "“神之眼”绝对色感挑战（限时挑战）", "zh-TW": "“神之眼”絕對色感挑戰（限時挑戰）", "vi": "Thử thách Màu sắc Tuyệt đối \u0027Mắt Thần\u0027 (Time Attack)", "id": "Tantangan Warna Mutlak \u0027Mata Dewa\u0027 (Time Attack)"}'::jsonb,
  '{"ko": "당신의 눈은 얼마나 오랫동안 버틸 수 있나요? 단 10초! 타임 어택 생존 게임.", "en": "How long can your eyes survive? Only 10 seconds! Time Attack Survival Game.", "ja": "あなたの目はどれくらい持ちこたえられますか？たった10秒！タイムアタックサバイバルゲーム。", "zh": "你的眼睛能坚持多久？只有10秒！限时生存游戏。", "zh-TW": "你的眼睛能堅持多久？只有10秒！限時生存遊戲。", "vi": "Mắt bạn có thể chịu đựng được bao lâu? Chỉ 10 giây! Trò chơi sinh tồn Time Attack.", "id": "Seberapa lama mata Anda bisa bertahan? Hanya 10 detik! Game Survival Time Attack."}'::jsonb,
  'phase2_test_158_color_survival.jpg',
  'game',
  'capability',
  '{"ko": ["챌린지", "게임", "색감", "순발력"], "en": ["Challenge", "Game", "Color", "Reflexes"], "ja": ["チャレンジ", "ゲーム", "色感", "瞬発力"], "zh": ["挑战", "游戏", "色感", "反应力"], "zh-TW": ["挑戰", "遊戲", "色感", "反應力"], "vi": ["Thử thách", "Trò chơi", "Màu sắc", "Phản xạ"], "id": ["Tantangan", "Game", "Warna", "Refleks"]}'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

