-- 세상 까다로운 '밸런스' 99
-- slug: phase3-balance-99-ultimate
-- thumbnail: p3_game_balance_99_ultimate.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  play_count
) VALUES (
  'phase3-balance-99-ultimate',
  '{"ko": "세상 까다로운 ''밸런스'' 99", "en": "The World''s Pickiest Balance 99", "ja": "世界一むずかしい『バランス』99", "zh-CN": "世上最挑剔的『平衡』99", "zh-TW": "世上最挑剔的『平衡』99", "vi": "Balance 99 khó nhằn nhất", "id": "Balance 99 paling cerewet di dunia"}',
  '{"ko": "99개 극한 밸런스 질문으로 선택 성향을 분석하고 친구와 1:1 대결할 수 있습니다.", "en": "Analyze your choice style with 99 extreme would-you-rather questions—and duel a friend 1:1.", "ja": "99個の極限バランス質問で選択傾向を分析し、友達と1:1対決できます。", "zh-CN": "用99道极限二选一分析你的选择倾向，还能和朋友1:1对决。", "zh-TW": "用99道極限二選一分析你的選擇傾向，還能和朋友1:1對決。", "vi": "Phân tích xu hướng lựa chọn với 99 câu hỏi cân bằng cực đoan—và đấu 1:1 với bạn.", "id": "Analisis gaya pilihanmu dengan 99 pertanyaan would-you-rather ekstrem—dan duel 1:1 dengan teman."}',
  'p3_game_balance_99_ultimate.webp',
  'psychology',
  'personality',
  '{"ko": ["밸런스게임", "99", "극한선택", "친구대결", "공감"], "en": ["would you rather", "99", "hard choices", "friend duel", "compatibility"], "ja": ["バランスゲーム", "99", "極限選択", "友達対決", "相性"], "zh-CN": ["二选一", "99", "极限选择", "朋友对决", "默契"], "zh-TW": ["二選一", "99", "極限選擇", "朋友對決", "默契"], "vi": ["would you rather", "99", "lựa chọn khó", "đấu bạn", "tương hợp"], "id": ["would you rather", "99", "pilihan sulit", "duel teman", "kecocokan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
