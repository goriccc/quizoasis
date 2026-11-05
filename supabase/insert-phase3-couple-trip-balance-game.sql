-- 밸런스 게임 — 커플 여행 극한편
-- slug: phase3-couple-trip-balance-game
-- thumbnail: p3_test_balance_game_couple_trip.webp
-- category: personality · format: game

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
  'phase3-couple-trip-balance-game',
  '{"ko": "밸런스 게임 — 커플 여행 극한편", "en": "Balance Game — Couple Trip (Extreme)", "ja": "バランスゲーム ― カップル旅行 極限編", "zh-CN": "平衡游戏——情侣旅行极限篇", "zh-TW": "平衡遊戲——情侶旅行極限篇", "vi": "Trò cân bằng — Du lịch cặp đôi (cực hạn)", "id": "Permainan Seimbang — Liburan Couple (Ekstrem)"}',
  '{"ko": "여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인. 12라운드 극한 선택으로 나의 커플 여행 스타일을 알려드립니다.", "en": "A partner who gets lost on the trip vs one who books the wrong hotel. Twelve extreme rounds reveal your couple-travel style.", "ja": "旅行中に道に迷う恋人 vs 宿の予約を間違える恋人。12ラウンドの極限選択で、あなたのカップル旅行スタイルがわかります。", "zh-CN": "旅途中迷路的另一半 vs 订错住宿的另一半。12轮极限选择，测出你的情侣旅行风格。", "zh-TW": "旅途中迷路的另一半 vs 訂錯住宿的另一半。12 輪極限選擇，測出你的情侶旅行風格。", "vi": "Người yêu lạc đường giữa chuyến đi vs người đặt nhầm chỗ ở. 12 vòng chọn cực hạn hé lộ phong cách du lịch cặp đôi của bạn.", "id": "Pacar yang nyasar di tengah trip vs yang salah booking hotel. 12 ronde pilihan ekstrem mengungkap gaya traveling couple-mu."}',
  'p3_test_balance_game_couple_trip.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "커플여행", "양자택일", "연애테스트"], "en": ["balance game", "couple travel", "would you rather", "dating quiz"], "ja": ["バランスゲーム", "カップル旅行", "二択", "恋愛診断"], "zh-CN": ["平衡游戏", "情侣旅行", "二选一", "恋爱测试"], "zh-TW": ["平衡遊戲", "情侶旅行", "二選一", "戀愛測驗"], "vi": ["trò cân bằng", "du lịch cặp đôi", "chọn một", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "liburan couple", "pilih satu", "kuis cinta"]}',
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
