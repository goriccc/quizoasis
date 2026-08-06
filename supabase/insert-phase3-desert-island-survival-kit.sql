-- 나의 무인도 생존 키트 선택
-- slug: phase3-desert-island-survival-kit
-- thumbnail: p3_game_deserted_island_kit.webp

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
  'phase3-desert-island-survival-kit',
  '{"ko": "나의 무인도 생존 키트 선택", "en": "My Desert Island Survival Kit", "ja": "私の無人島サバイバルキット選択", "zh-CN": "我的无人岛生存 kit 选择", "zh-TW": "我的無人島生存 kit 選擇", "vi": "Bộ sinh tồn đảo hoang của tôi", "id": "Kit Bertahan Hidup Pulau Terpencil-ku"}',
  '{"ko": "5가지 극한 2지선다로 나의 생존 본능 유형을 분석합니다. 친구에게 공유하면 \"무인도에서 그걸 챙긴다고?!\" 반응이 터집니다.", "en": "5 extreme A/B choices reveal your survival instinct type. Share with friends for guaranteed \"You\'d pack THAT on a desert island?!\" reactions.", "ja": "5つの極限2択でサバイバル本能タイプを分析。友達に共有すると「無人島でそれ持っていくの？！」の反応が炸裂。", "zh-CN": "5个极限二选一分析你的生存本能类型。分享给朋友，保证出现「无人岛带这个？！」的反应。", "zh-TW": "5個極限二選一分析你的生存本能類型。分享給朋友，保證出現「無人島帶這個？！」的反應。", "vi": "5 lựa chọn cực hạn phân tích kiểu bản năng sinh tồn. Chia sẻ với bạn bè để xem phản ứng \"Mang cái đó lên đảo hoang?!\".", "id": "5 pilihan ekstrem menganalisis tipe insting bertahan hidup. Bagikan ke teman untuk reaksi \"Bawa itu ke pulau terpencil?!\"."}',
  'p3_game_deserted_island_kit.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["무인도", "생존", "밸런스게임", "황당", "유머"], "en": ["desert island", "survival", "balance game", "absurd", "humor"], "ja": ["無人島", "サバイバル", "バランスゲーム", "荒唐", "ユーモア"], "zh-CN": ["无人岛", "生存", "平衡游戏", "荒诞", "幽默"], "zh-TW": ["無人島", "生存", "平衡遊戲", "荒謬", "幽默"], "vi": ["đảo hoang", "sinh tồn", "trò cân bằng", "vô lý", "hài hước"], "id": ["pulau terpencil", "bertahan hidup", "permainan seimbang", "absurd", "humor"]}',
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
