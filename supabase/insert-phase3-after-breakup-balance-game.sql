-- 밸런스 게임 — 이별 후 극한편
-- slug: phase3-after-breakup-balance-game
-- thumbnail: p3_test_balance_game_after_breakup.webp

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
  'phase3-after-breakup-balance-game',
  '{"ko": "밸런스 게임 — 이별 후 극한편", "en": "Balance Game — After the Breakup (Extreme)", "ja": "バランスゲーム ― 別れのあと極限編", "zh-CN": "平衡游戏——分手之后极限篇", "zh-TW": "平衡遊戲——分手之後極限篇", "vi": "Trò cân bằng — Sau chia tay (cực hạn)", "id": "Permainan Seimbang — Setelah Putus (Ekstrem)"}',
  '{"ko": "헤어진 뒤 연락 오는 전 애인 vs 연락 한 번 없는 전 애인. 12라운드 극한 선택으로 나의 이별 후 스타일을 알려드립니다.", "en": "An ex who still texts vs an ex who vanishes completely. Twelve extreme rounds reveal your after-breakup style.", "ja": "別れたあとも連絡してくる元恋人 vs 一度も連絡がない元恋人。12ラウンドの極限選択であなたの別れ後スタイルがわかります。", "zh-CN": "分手后还会联系的前任 vs 一次都不联系的前任。12轮极限选择，测出你的分手后风格。", "zh-TW": "分手後還會聯繫的前任 vs 一次都不聯繫的前任。12輪極限選擇，測出你的分手後風格。", "vi": "Người yêu cũ vẫn còn nhắn vs người yêu cũ biến mất hoàn toàn. 12 vòng chọn cực hạn hé lộ phong cách sau chia tay của bạn.", "id": "Mantan yang masih chat vs mantan yang hilang total. 12 ronde pilihan ekstrem mengungkap gaya setelah putusmu."}',
  'p3_test_balance_game_after_breakup.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "양자택일", "연애테스트"], "en": ["balance game", "would you rather", "dating quiz"], "ja": ["バランスゲーム", "二択", "恋愛診断"], "zh-CN": ["平衡游戏", "二选一", "恋爱测试"], "zh-TW": ["平衡遊戲", "二選一", "戀愛測驗"], "vi": ["trò cân bằng", "chọn một", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "pilih satu", "kuis cinta"]}',
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
