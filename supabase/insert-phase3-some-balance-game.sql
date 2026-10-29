-- 밸런스 게임 — 썸 극한편
-- slug: phase3-some-balance-game
-- thumbnail: p3_test_balance_game_some.webp

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
  'phase3-some-balance-game',
  '{"ko": "밸런스 게임 — 썸 극한편", "en": "Balance Game — Situationship (Extreme)", "ja": "バランスゲーム — いい感じ 極限編", "zh-CN": "平衡游戏 — 暧昧极限篇", "zh-TW": "平衡遊戲 — 曖昧極限篇", "vi": "Trò cân bằng — Mập mờ (cực hạn)", "id": "Permainan seimbang — PDKT (ekstrem)"}',
  '{"ko": "읽씹하는 썸 vs 답장이 1시간 걸리는 썸. 12라운드 극한 선택으로 나의 썸 스타일을 알려드립니다.", "en": "Left on read vs replies after an hour. Twelve extreme rounds reveal your situationship style.", "ja": "既読スルーされる関係 vs 返信に1時間かかる関係。12ラウンドの極限選択で、いい感じのときのスタイルがわかります。", "zh-CN": "已读不回 vs 一小时才回。12 轮极限二选一，看看你的暧昧风格。", "zh-TW": "已讀不回 vs 一小時才回。12 輪極限二選一，看看你的曖昧風格。", "vi": "Xem tin không trả lời vs trả lời sau một tiếng. 12 vòng cực hạn cho thấy kiểu mập mờ của bạn.", "id": "Dibaca tapi tidak dibalas vs balas sejam. 12 ronde ekstrem mengungkap gaya PDKTmu."}',
  'p3_test_balance_game_some.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "썸", "연애테스트"], "en": ["balance game", "situationship", "dating test"], "ja": ["バランスゲーム", "いい感じ", "恋愛テスト"], "zh-CN": ["平衡游戏", "暧昧", "恋爱测试"], "zh-TW": ["平衡遊戲", "曖昧", "戀愛測試"], "vi": ["trò cân bằng", "mập mờ", "test tình cảm"], "id": ["permainan seimbang", "PDKT", "tes pacaran"]}',
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
