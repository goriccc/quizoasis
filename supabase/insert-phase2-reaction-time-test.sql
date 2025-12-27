-- Insert Phase 2 Reaction Time Test
INSERT INTO tests (slug, title, description, thumbnail, type, category, tags, created_at, updated_at)
VALUES (
  'phase2_reaction_time_test',
  '{"ko": "0.1초의 승부! 반응속도 테스트", "en": "0.1s Battle! Reaction Time Test", "ja": "0.1秒の勝負！反応速度テスト", "zh-CN": "0.1秒的胜负！反应速度测试", "zh-TW": "0.1秒的勝負！反應速度測試", "vi": "Trận chiến 0,1 giây! Kiểm tra tốc độ phản ứng", "id": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi"}'::jsonb,
  '{"ko": "당신의 뇌와 손가락은 연결되어 있나요? 지금 당신의 진짜 속도를 측정해 드립니다.", "en": "Are your brain and fingers connected? Measure your real speed now.", "ja": "あなたの脳と指は繋がっていますか？今、あなたの本当の速度を測定します。", "zh-CN": "你的大脑和手指连接了吗？现在为你测量真正的速度。", "zh-TW": "你的大腦和手指連接了嗎？現在為你測量真正的速度。", "vi": "Bộ não và ngón tay của bạn có kết nối không? Đo tốc độ thực của bạn ngay bây giờ.", "id": "Apakah otak dan jari Anda terhubung? Ukur kecepatan Anda yang sebenarnya sekarang."}'::jsonb,
  'phase2_test_159_reflex_test.jpg',
  'game',
  'capability',
  '{"ko": ["챌린지", "게임", "반응속도", "순발력"], "en": ["Challenge", "Game", "Reflex", "Speed"], "ja": ["チャレンジ", "ゲーム", "反応速度", "瞬発力"], "zh-CN": ["挑战", "游戏", "反应速度", "爆发力"], "zh-TW": ["挑戰", "遊戲", "反應速度", "爆發力"], "vi": ["Thử thách", "Trò chơi", "Phản xạ", "Tốc độ"], "id": ["Tantangan", "Game", "Refleks", "Kecepatan"]}'::jsonb,
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

