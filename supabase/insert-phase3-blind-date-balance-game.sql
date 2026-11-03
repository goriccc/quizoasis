-- 밸런스 게임 — 소개팅 극한편
-- slug: phase3-blind-date-balance-game
-- thumbnail: p3_test_balance_game_blind_date.webp

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
  'phase3-blind-date-balance-game',
  '{"ko":"밸런스 게임 — 소개팅 극한편","en":"Balance Game — Blind Date (Extreme)","ja":"バランスゲーム ― 紹介デート極限編","zh-CN":"平衡游戏——相亲极限篇","zh-TW":"平衡遊戲——相親極限篇","vi":"Trò cân bằng — Hẹn mai mối (cực hạn)","id":"Permainan Seimbang — Blind Date (Ekstrem)"}',
  '{"ko":"소개팅 상대가 15분 늦게 왔는데 사과 없음 vs 사과는 하는데 계속 폰 봄. 12라운드 극한 선택으로 나의 소개팅 스타일을 알려드립니다.","en":"They show up 15 minutes late with no apology vs they apologize but keep checking their phone. Twelve extreme rounds reveal your blind-date style.","ja":"紹介デートの相手が15分遅刻しても謝らない vs 謝るけどずっとスマホを見ている。12ラウンドの極限選択であなたの恋愛スタイルがわかります。","zh-CN":"相亲对象迟到15分钟却不道歉 vs 道歉了但约会全程都在看手机。12轮极限选择,测出你的相亲风格。","zh-TW":"相親對象遲到15分鐘卻不道歉 vs 道歉了但約會全程一直滑手機。12輪極限選擇,測出你的相親風格。","vi":"Người hẹn mai mối đến trễ 15 phút mà không xin lỗi vs xin lỗi nhưng cứ nhìn điện thoại suốt. 12 vòng chọn cực hạn hé lộ phong cách hẹn hò của bạn.","id":"Pasangan blind date datang telat 15 menit tanpa minta maaf vs minta maaf tapi terus main HP. 12 ronde pilihan ekstrem mengungkap gaya blind date-mu."}',
  'p3_test_balance_game_blind_date.webp',
  'psychology',
  'personality',
  'game',
  '{"ko":["밸런스게임","소개팅","양자택일","연애테스트"],"en":["balance game","blind date","would you rather","dating quiz"],"ja":["バランスゲーム","紹介デート","二択","恋愛診断"],"zh-CN":["平衡游戏","相亲","二选一","恋爱测试"],"zh-TW":["平衡遊戲","相親","二選一","戀愛測驗"],"vi":["trò cân bằng","hẹn mai mối","chọn một","trắc nghiệm tình yêu"],"id":["permainan seimbang","blind date","pilih satu","kuis cinta"]}',
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
