-- 밸런스 게임 — 결혼·동거 극한편
-- slug: phase3-marriage-cohabit-balance-game
-- thumbnail: p3_test_balance_game_marriage.webp

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
  'phase3-marriage-cohabit-balance-game',
  '{"ko": "밸런스 게임 — 결혼·동거 극한편", "en": "Balance Game — Marriage & Living Together (Extreme)", "ja": "バランスゲーム — 結婚・同棲 極限編", "zh-CN": "平衡游戏 — 结婚同居极限篇", "zh-TW": "平衡遊戲 — 結婚同居極限篇", "vi": "Trò cân bằng — kết hôn & sống chung (cực hạn)", "id": "Permainan seimbang — nikah & tinggal bersama (ekstrem)"}',
  '{"ko": "각방 vs 한방, 경제권은 누가? 12라운드 극한 선택으로 나의 결혼·동거 스타일을 알려드립니다.", "en": "Separate rooms vs one bed—who holds the money? 12 extreme rounds reveal your marriage & living style.", "ja": "別室 vs 同室、家計は誰が？12ラウンドの極限選択で結婚・同棲スタイルがわかります。", "zh-CN": "分房还是同床，经济权谁拿？12轮极限二选一，看看你的结婚同居风格。", "zh-TW": "分房還是同床，經濟權誰拿？12輪極限二選一，看看你的結婚同居風格。", "vi": "Phòng riêng vs chung giường, ai nắm tiền? 12 vòng cực hạn cho thấy kiểu sống chung của bạn.", "id": "Kamar terpisah vs satu kasur, siapa pegang uang? 12 ronde ekstrem mengungkap gaya nikah & tinggal bersamamu."}',
  'p3_test_balance_game_marriage.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "결혼생활", "양자택일", "연애테스트"], "en": ["balance game", "marriage", "would you rather", "dating"], "ja": ["バランスゲーム", "結婚生活", "二択", "恋愛"], "zh-CN": ["平衡游戏", "结婚生活", "二选一", "恋爱"], "zh-TW": ["平衡遊戲", "結婚生活", "二選一", "戀愛"], "vi": ["trò cân bằng", "hôn nhân", "chọn một", "hẹn hò"], "id": ["permainan seimbang", "pernikahan", "pilih satu", "pacaran"]}',
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
