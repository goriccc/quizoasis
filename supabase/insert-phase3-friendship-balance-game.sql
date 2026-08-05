-- 밸런스 게임 — 우정 극한편
-- slug: phase3-friendship-balance-game
-- thumbnail: p3_game_friendship_balance.webp

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
  'phase3-friendship-balance-game',
  '{"ko": "밸런스 게임 — 우정 극한편", "en": "Balance Game — Friendship Extreme", "ja": "バランスゲーム 友情編（極限）", "zh-CN": "平衡游戏 · 友情篇（极限）", "zh-TW": "平衡遊戲 · 友情篇（極限）", "vi": "Trò cân bằng — tình bạn (cực hạn)", "id": "Permainan seimbang — persahabatan (ekstrem)"}',
  '{"ko": "12라운드 극한 2지선다로 나의 우정 스타일을 분석합니다. 친구에게 공유하면 선택이 달라 반응이 터집니다.", "en": "12 rounds of extreme A/B choices reveal your friendship style. Share with friends for guaranteed reactions.", "ja": "12ラウンドの極限2択で友情スタイルを分析。友達に共有すると反応が炸裂します。", "zh-CN": "12轮极限二选一分析你的友情风格。分享给朋友，选择不同反应保证炸裂。", "zh-TW": "12輪極限二選一分析你的友情風格。分享給朋友，選擇不同反應保證炸裂。", "vi": "12 vòng chọn cực hạn phân tích kiểu tình bạn. Chia sẻ với bạn bè để xem phản ứng.", "id": "12 ronde pilihan ekstrem menganalisis gaya persahabatanmu. Bagikan ke teman untuk reaksi garanti."}',
  'p3_game_friendship_balance.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "우정", "의리", "친구", "극한선택"], "en": ["balance game", "friendship", "loyalty", "friends", "extreme choice"], "ja": ["バランスゲーム", "友情", "義理", "友達", "極限選択"], "zh-CN": ["平衡游戏", "友情", "义气", "朋友", "极限选择"], "zh-TW": ["平衡遊戲", "友情", "義氣", "朋友", "極限選擇"], "vi": ["trò cân bằng", "tình bạn", "nghĩa khí", "bạn bè", "lựa chọn cực hạn"], "id": ["permainan seimbang", "persahabatan", "loyalitas", "teman", "pilihan ekstrem"]}',
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
