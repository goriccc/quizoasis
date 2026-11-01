-- 밸런스 게임 — 연애 vs 우정 극한편
-- slug: phase3-love-vs-friend-balance-game
-- thumbnail: p3_test_balance_game_love_vs_friend.webp

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
  'phase3-love-vs-friend-balance-game',
  '{"ko":"밸런스 게임 — 연애 vs 우정 극한편","en":"Balance Game — Love vs Friendship (Extreme)","ja":"バランスゲーム — 恋愛 vs 友情 極限編","zh-CN":"平衡游戏 — 恋爱 vs 友情极限篇","zh-TW":"平衡遊戲 — 戀愛 vs 友情極限篇","vi":"Trò cân bằng — Tình yêu vs Tình bạn (cực hạn)","id":"Permainan Seimbang — Cinta vs Persahabatan (Ekstrem)"}',
  '{"ko":"친구 결혼식 vs 연인 기념일이 겹치면? 12라운드 극한 선택으로 나의 연애·우정 균형 스타일을 알려드립니다.","en":"Friend''s wedding vs anniversary with your partner? Twelve extreme rounds reveal how you balance love and friendship.","ja":"友だちの結婚式 vs 恋人の記念日が重なったら？12ラウンドの極限選択で、恋愛と友情のバランススタイルがわかります。","zh-CN":"朋友婚礼 vs 恋人纪念日撞车？12轮极限二选一，看看你如何平衡恋爱与友情。","zh-TW":"朋友婚禮 vs 戀人紀念日撞車？12輪極限二選一，看看你如何平衡戀愛與友情。","vi":"Đám cưới bạn vs kỷ niệm với người yêu trùng ngày? 12 vòng chọn cực hạn cho thấy bạn cân bằng tình yêu và tình bạn thế nào.","id":"Pernikahan teman vs anniversary bareng pasangan? 12 ronde pilihan ekstrem mengungkap cara kamu menyeimbangkan cinta dan persahabatan."}',
  'p3_test_balance_game_love_vs_friend.webp',
  'psychology',
  'personality',
  'game',
  '{"ko":["밸런스게임","양자택일","연애테스트"],"en":["balance game","would you rather","dating"],"ja":["バランスゲーム","二択","恋愛"],"zh-CN":["平衡游戏","二选一","恋爱"],"zh-TW":["平衡遊戲","二選一","戀愛"],"vi":["trò cân bằng","chọn một","hẹn hò"],"id":["permainan seimbang","pilih satu","pacaran"]}',
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
