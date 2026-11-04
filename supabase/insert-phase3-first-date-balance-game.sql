-- 밸런스 게임 — 첫 데이트 극한편
-- slug: phase3-first-date-balance-game
-- thumbnail: p3_test_balance_game_first_date.webp

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
  'phase3-first-date-balance-game',
  '{"ko": "밸런스 게임 — 첫 데이트 극한편", "en": "Balance Game — First Date (Extreme)", "ja": "バランスゲーム ― 初デート極限編", "zh-CN": "平衡游戏——第一次约会极限篇", "zh-TW": "平衡遊戲——第一次約會極限篇", "vi": "Trò cân bằng — Buổi hẹn đầu (cực hạn)", "id": "Permainan Seimbang — Kencan Pertama (Ekstrem)"}',
  '{"ko": "첫 데이트에서 5분 늦은 상대 vs 휴대폰만 보는 상대. 12라운드 극한 선택으로 나의 첫 데이트 스타일을 알려드립니다.", "en": "A date who''s five minutes late vs one who only stares at their phone. Twelve extreme rounds reveal your first-date style.", "ja": "初デートで5分遅れる相手 vs スマホばかり見る相手。12ラウンドの極限選択であなたの初デートスタイルがわかります。", "zh-CN": "第一次约会迟到五分钟的人 vs 只看手机的人。12轮极限选择，测出你的第一次约会风格。", "zh-TW": "第一次約會遲到五分鐘的人 vs 只看手機的人。12輪極限選擇，測出你的第一次約會風格。", "vi": "Người hẹn trễ năm phút vs người chỉ nhìn điện thoại. 12 vòng chọn cực hạn hé lộ phong cách buổi hẹn đầu của bạn.", "id": "Pacar kencan yang terlambat lima menit vs yang cuma main HP. 12 ronde pilihan ekstrem mengungkap gaya kencan pertamamu."}',
  'p3_test_balance_game_first_date.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "첫데이트", "양자택일", "연애테스트"], "en": ["balance game", "first date", "would you rather", "dating quiz"], "ja": ["バランスゲーム", "初デート", "二択", "恋愛診断"], "zh-CN": ["平衡游戏", "第一次约会", "二选一", "恋爱测试"], "zh-TW": ["平衡遊戲", "第一次約會", "二選一", "戀愛測驗"], "vi": ["trò cân bằng", "buổi hẹn đầu", "chọn một", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "kencan pertama", "pilih satu", "kuis cinta"]}',
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
