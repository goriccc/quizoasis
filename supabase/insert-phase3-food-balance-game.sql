-- 밸런스 게임 — 음식 극한편
-- slug: phase3-food-balance-game
-- thumbnail: p3_game_food_balance.webp

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
  'phase3-food-balance-game',
  '{"ko": "밸런스 게임 — 음식 극한편", "en": "Balance Game — Food Extreme", "ja": "バランスゲーム 食べ物編（極限）", "zh-CN": "平衡游戏 · 美食篇（极限）", "zh-TW": "平衡遊戲 · 美食篇（極限）", "vi": "Trò cân bằng — ẩm thực (cực hạn)", "id": "Permainan seimbang — makanan (ekstrem)"}',
  '{"ko": "12라운드 극한 2지선다로 나의 식성 스펙트럼을 분석합니다. 친구에게 공유하면 선택이 달라 반응이 터집니다.", "en": "12 rounds of extreme food A/B choices reveal your taste spectrum. Share with friends for guaranteed reactions.", "ja": "12ラウンドの極限2択で食性スペクトラムを分析。友達に共有すると反応が炸裂します。", "zh-CN": "12轮极限二选一分析你的食性光谱。分享给朋友，选择不同反应保证炸裂。", "zh-TW": "12輪極限二選一分析你的食性光譜。分享給朋友，選擇不同反應保證炸裂。", "vi": "12 vòng chọn ẩm thực cực hạn phân tích phổ vị giác. Chia sẻ với bạn bè để xem phản ứng.", "id": "12 ronde pilihan makanan ekstrem menganalisis spektrum selera. Bagikan ke teman untuk reaksi garanti."}',
  'p3_game_food_balance.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "음식", "먹방", "극한선택", "취향"], "en": ["balance game", "food", "mukbang", "extreme choice", "taste"], "ja": ["バランスゲーム", "食べ物", "モッパン", "極限選択", "好み"], "zh-CN": ["平衡游戏", "美食", "吃播", "极限选择", "口味"], "zh-TW": ["平衡遊戲", "美食", "吃播", "極限選擇", "口味"], "vi": ["trò cân bằng", "ẩm thực", "mukbang", "lựa chọn cực hạn", "gu"], "id": ["permainan seimbang", "makanan", "mukbang", "pilihan ekstrem", "selera"]}',
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
