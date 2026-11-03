-- 밸런스 게임 — 전 애인 극한편
-- slug: phase3-ex-balance-game
-- thumbnail: p3_test_balance_game_ex.webp

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
  'phase3-ex-balance-game',
  '{"ko": "밸런스 게임 — 전 애인 극한편", "en": "Balance Game — Ex Edition (Extreme)", "ja": "バランスゲーム ― 元恋人極限編", "zh-CN": "平衡游戏——前任极限篇", "zh-TW": "平衡遊戲——前任極限篇", "vi": "Trò cân bằng — Người yêu cũ (cực hạn)", "id": "Permainan Seimbang — Mantan (Ekstrem)"}',
  '{"ko": "전 애인과 같은 회사 다니기 vs 전 애인이 내 친구와 연애. 12라운드 극한 선택으로 나의 전 애인 대처 스타일을 알려드립니다.", "en": "Work at the same company as your ex vs your ex dating your friend. Twelve extreme rounds reveal how you handle an ex.", "ja": "元恋人と同じ会社で働く vs 元恋人が友達と付き合う。12ラウンドの極限選択であなたの元恋人との向き合い方がわかります。", "zh-CN": "和前任进同一家公司 vs 前任和你的朋友在一起。12轮极限选择，测出你面对前任的风格。", "zh-TW": "和前任進同一家公司 vs 前任和你的朋友在一起。12輪極限選擇，測出你面對前任的風格。", "vi": "Làm cùng công ty với người yêu cũ vs người yêu cũ hẹn hò bạn của bạn. 12 vòng chọn cực hạn hé lộ cách bạn đối mặt với người yêu cũ.", "id": "Kerja di kantor yang sama dengan mantan vs mantan pacaran dengan temanmu. 12 ronde pilihan ekstrem mengungkap cara kamu menghadapi mantan."}',
  'p3_test_balance_game_ex.webp',
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
