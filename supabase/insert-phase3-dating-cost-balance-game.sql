-- 밸런스 게임 — 데이트 비용 극한편
-- slug: phase3-dating-cost-balance-game
-- thumbnail: p3_test_balance_game_date_cost.webp

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
  'phase3-dating-cost-balance-game',
  '{"ko": "밸런스 게임 — 데이트 비용 극한편", "en": "Balance Game — Date Money (Extreme)", "ja": "バランスゲーム — デート代 極限編", "zh-CN": "平衡游戏 — 约会花钱极限篇", "zh-TW": "平衡遊戲 — 約會花錢極限篇", "vi": "Trò cân bằng — Chi phí hẹn hò (cực hạn)", "id": "Permainan seimbang — Biaya kencan (ekstrem)"}',
  '{"ko": "내가 다 내는 대신 연인이 매번 지각 vs 더치페이하지만 늘 정시 도착. 12라운드 극한 선택으로 나의 데이트 비용 스타일을 알려드립니다.", "en": "I always pay but they’re late every time vs we split and they’re always on time. Twelve extreme rounds reveal your date-money style.", "ja": "全部出す代わりに毎回遅刻 vs 割り勘だがいつも時間どおり。12ラウンドの極限選択でデート代スタイルがわかります。", "zh-CN": "我全付但对方每次迟到 vs AA 但总准时。12 轮极限二选一，看看你的约会花钱风格。", "zh-TW": "我全付但對方每次遲到 vs 各付但總準時。12 輪極限二選一，看看你的約會花錢風格。", "vi": "Tôi trả hết nhưng họ luôn muộn vs chia tiền nhưng luôn đúng giờ. 12 vòng cực hạn cho thấy kiểu chi tiêu hẹn hò của bạn.", "id": "Aku bayar semua tapi mereka selalu telat vs bagi tagihan tapi selalu tepat waktu. 12 ronde ekstrem mengungkap gaya biaya kencanmu."}',
  'p3_test_balance_game_date_cost.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "데이트비용", "연애테스트"], "en": ["balance game", "date money", "dating test"], "ja": ["バランスゲーム", "デート代", "恋愛テスト"], "zh-CN": ["平衡游戏", "约会花钱", "恋爱测试"], "zh-TW": ["平衡遊戲", "約會花錢", "戀愛測試"], "vi": ["trò cân bằng", "chi phí hẹn hò", "test tình cảm"], "id": ["permainan seimbang", "biaya kencan", "tes pacaran"]}',
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
