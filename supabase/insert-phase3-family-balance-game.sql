-- 밸런스 게임 — 가족 극한편

-- slug: phase3-family-balance-game

-- thumbnail: p3_game_family_balance.webp



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

  'phase3-family-balance-game',

  '{"ko": "밸런스 게임 — 가족 극한편", "en": "Balance Game — Family Extreme", "ja": "バランスゲーム 家族編（極限）", "zh-CN": "平衡游戏 · 家庭篇（极限）", "zh-TW": "平衡遊戲 · 家庭篇（極限）", "vi": "Trò cân bằng — gia đình (cực hạn)", "id": "Permainan seimbang — keluarga (ekstrem)"}',

  '{"ko": "12라운드 극한 2지선다로 나의 가족 관계 스타일을 분석합니다. 가족 단톡방에 공유하면 선택이 달라 반응이 터집니다.", "en": "12 rounds of extreme A/B choices reveal your family relationship style. Share in the family chat for guaranteed reactions.", "ja": "12ラウンドの極限2択で家族関係スタイルを分析。家族グループチャットで共有すると反応が炸裂します。", "zh-CN": "12轮极限二选一分析你的家庭关系风格。分享到家庭群聊，选择不同反应保证炸裂。", "zh-TW": "12輪極限二選一分析你的家庭關係風格。分享到家庭群聊，選擇不同反應保證炸裂。", "vi": "12 vòng chọn cực hạn phân tích kiểu quan hệ gia đình. Chia sẻ vào nhóm chat gia đình để xem phản ứng.", "id": "12 ronde pilihan ekstrem menganalisis gaya hubungan keluargamu. Bagikan di grup keluarga untuk reaksi garanti."}',

  'p3_game_family_balance.webp',

  'psychology',

  'personality',

  'game',

  '{"ko": ["밸런스게임", "가족", "명절", "극한선택", "가족단톡"], "en": ["balance game", "family", "holiday", "extreme choice", "family chat"], "ja": ["バランスゲーム", "家族", "帰省", "極限選択", "家族グループ"], "zh-CN": ["平衡游戏", "家庭", "节日", "极限选择", "家庭群"], "zh-TW": ["平衡遊戲", "家庭", "節日", "極限選擇", "家庭群"], "vi": ["trò cân bằng", "gia đình", "lễ tết", "lựa chọn cực hạn", "nhóm chat"], "id": ["permainan seimbang", "keluarga", "liburan", "pilihan ekstrem", "grup keluarga"]}',

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
