-- 밸런스 게임 — 질투·집착 극한편
-- slug: phase3-jealousy-balance-game
-- thumbnail: p3_test_balance_game_jealousy.webp

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
  'phase3-jealousy-balance-game',
  '{"ko": "밸런스 게임 — 질투·집착 극한편", "en": "Balance Game — Jealousy & Obsession (Extreme)", "ja": "バランスゲーム ― 嫉妬・執着極限編", "zh-CN": "平衡游戏——嫉妒·占有欲极限篇", "zh-TW": "平衡遊戲——嫉妒·佔有欲極限篇", "vi": "Trò cân bằng — Ghen tuông & ám ảnh (cực hạn)", "id": "Permainan Seimbang — Cemburu & Obsesi (Ekstrem)"}',
  '{"ko": "연인 이성 친구와 단둘이 여행 vs 매일 위치 공유 요구. 12라운드 극한 선택으로 나의 질투 스타일을 알려드립니다.", "en": "Your partner''s solo trip with a friend of the opposite sex vs daily location sharing. Twelve extreme rounds reveal your jealousy style.", "ja": "恋人の異性友達と二人きりの旅行 vs 毎日の位置共有要求。12ラウンドの極限選択であなたの嫉妬スタイルがわかります。", "zh-CN": "恋人跟异性朋友两人旅行 vs 每天要求定位共享。12轮极限选择，测出你的嫉妒风格。", "zh-TW": "戀人跟異性朋友兩人旅行 vs 每天要求定位共享。12輪極限選擇，測出你的嫉妒風格。", "vi": "Người yêu đi du lịch riêng với bạn khác giới vs yêu cầu chia sẻ vị trí mỗi ngày. 12 vòng chọn cực hạn hé lộ phong cách ghen của bạn.", "id": "Pacar jalan berdua dengan teman lawan jenis vs diminta share lokasi tiap hari. 12 ronde pilihan ekstrem mengungkap gaya cemburumu."}',
  'p3_test_balance_game_jealousy.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "질투", "연애테스트"], "en": ["balance game", "jealousy", "dating quiz"], "ja": ["バランスゲーム", "嫉妬", "恋愛診断"], "zh-CN": ["平衡游戏", "嫉妒", "恋爱测试"], "zh-TW": ["平衡遊戲", "嫉妒", "戀愛測驗"], "vi": ["trò cân bằng", "ghen tuông", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "cemburu", "kuis cinta"]}',
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
