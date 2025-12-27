-- Insert Phase 2 Reflex Test
INSERT INTO tests (slug, title, description, thumbnail, type, category, tags, created_at, updated_at)
VALUES (
  'phase2_reflex_test',
  '{
    "ko": "0.1초의 승부! 반응속도 테스트",
    "en": "0.1 Second Showdown! Reaction Speed Test",
    "ja": "0.1秒の勝負！反応速度テスト",
    "zh-CN": "0.1秒的胜负！反应速度测试",
    "zh-TW": "0.1秒的勝負！反應速度測試",
    "vi": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng",
    "id": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi"
  }'::jsonb,
  '{
    "ko": "당신의 뇌와 손가락은 연결되어 있나요? 반응속도 측정 시작 ⚡",
    "en": "Is your brain connected to your fingers? Start Reaction Test ⚡",
    "ja": "あなたの脳と指はつながっていますか？反応速度測定開始 ⚡",
    "zh-CN": "你的大脑和手指连接好了吗？开始反应速度测量 ⚡",
    "zh-TW": "你的大腦和手指連接好了嗎？開始反應速度測量 ⚡",
    "vi": "Bộ não và ngón tay của bạn có được kết nối không? Bắt đầu đo tốc độ phản ứng ⚡",
    "id": "Apakah otak dan jari Anda terhubung? Mulai Tes Kecepatan Reaksi ⚡"
  }'::jsonb,
  'phase2_test_159_reflex_test.jpg',
  'game',
  'capability',
  '{
    "ko": ["챌린지", "게임", "반응속도", "순발력"],
    "en": ["Challenge", "Game", "Reaction Speed", "Reflexes"],
    "ja": ["チャレンジ", "ゲーム", "反応速度", "瞬発力"],
    "zh-CN": ["挑战", "游戏", "反应速度", "爆发力"],
    "zh-TW": ["挑戰", "遊戲", "反應速度", "爆發力"],
    "vi": ["Thử thách", "Trò chơi", "Tốc độ phản ứng", "Phản xạ"],
    "id": ["Tantangan", "Game", "Kecepatan Reaksi", "Refleks"]
  }'::jsonb,
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

