-- '확률' 게임 : 운빨 테스트
-- slug: phase3-luck-game-test
-- thumbnail: p3_game_luck_test.webp

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
  'phase3-luck-game-test',
  '{"ko": "''확률'' 게임 : 운빨 테스트", "en": "''Probability'' Game: Luck Test", "ja": "''確率''ゲーム：運ゲーテスト", "zh-CN": "''概率''游戏：运气测试", "zh-TW": "''機率''遊戲：運氣測試", "vi": "Game ''Xác Suất'': Test Vận May", "id": "Game ''Probabilitas'': Tes Keberuntungan"}',
  '{"ko": "10가지 확률 게임으로 오늘의 운빨을 0~100점으로 측정합니다. 내 점수 이겼어?", "en": "Measure today''s luck from 0–100 with 10 probability games. Can you beat my score?", "ja": "10種類の確率ゲームで今日の運を0〜100点で測定。私の点数超えられる？", "zh-CN": "用10种概率游戏测量今天运气0~100分。能赢我的分数吗？", "zh-TW": "用10種機率遊戲測量今天運氣0~100分。能贏我的分數嗎？", "vi": "Đo vận may hôm nay 0–100 qua 10 trò xác suất. Thắng điểm tôi được không?", "id": "Ukur keberuntungan hari ini 0–100 lewat 10 game probabilitas. Bisa kalahkan skorku?"}',
  'p3_game_luck_test.webp',
  'game',
  'capability',
  'game',
  '{"ko": ["운빨", "확률", "게임", "운", "챌린지"], "en": ["luck", "probability", "game", "fortune", "challenge"], "ja": ["運ゲー", "確率", "ゲーム", "運", "チャレンジ"], "zh-CN": ["运气", "概率", "游戏", "运势", "挑战"], "zh-TW": ["運氣", "機率", "遊戲", "運勢", "挑戰"], "vi": ["vận may", "xác suất", "game", "may mắn", "thử thách"], "id": ["keberuntungan", "probabilitas", "game", "hoki", "tantangan"]}',
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
