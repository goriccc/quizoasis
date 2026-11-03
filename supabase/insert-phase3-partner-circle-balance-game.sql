-- 밸런스 게임 — 연인의 가족·친구 극한편
-- slug: phase3-partner-circle-balance-game
-- thumbnail: p3_test_balance_game_partner_circle.webp

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
  'phase3-partner-circle-balance-game',
  '{"ko": "밸런스 게임 — 연인의 가족·친구 극한편", "en": "Balance Game — Partner''s Family & Friends (Extreme)", "ja": "バランスゲーム ― 恋人の家族・友人極限編", "zh-CN": "平衡游戏——恋人的家人与朋友极限篇", "zh-TW": "平衡遊戲——戀人的家人與朋友極限篇", "vi": "Trò cân bằng — Gia đình & bạn bè người yêu (cực hạn)", "id": "Permainan Seimbang — Keluarga & Teman Pasangan (Ekstrem)"}',
  '{"ko": "연인 부모님과 첫 식사 vs 연인 친구 열 명과 술자리. 12라운드 극한 선택으로 나의 인간관계 스타일을 알려드립니다.", "en": "First meal with their parents vs drinks with ten of their friends. Twelve extreme rounds reveal how you move in your partner''s world.", "ja": "恋人の両親との初食事 vs 恋人の友人10人との飲み会。12ラウンドの極限選択であなたの人間関係スタイルがわかります。", "zh-CN": "和对方父母第一次吃饭 vs 和对方十个朋友喝酒。12轮极限选择，测出你在恋人圈子里的相处风格。", "zh-TW": "和對方父母第一次吃飯 vs 和對方十個朋友喝酒。12輪極限選擇，測出你在戀人圈子裡的相處風格。", "vi": "Bữa ăn đầu với bố mẹ người yêu vs nhậu với mười bạn của họ. 12 vòng chọn cực hạn hé lộ cách bạn bước vào thế giới của người yêu.", "id": "Makan pertama bareng orang tua pasangan vs minum bareng sepuluh temannya. 12 ronde pilihan ekstrem mengungkap gaya hubunganmu di dunia pasangan."}',
  'p3_test_balance_game_partner_circle.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "연인친구", "연애테스트"], "en": ["balance game", "partner''s circle", "dating quiz"], "ja": ["バランスゲーム", "恋人の友人", "恋愛診断"], "zh-CN": ["平衡游戏", "恋人朋友", "恋爱测试"], "zh-TW": ["平衡遊戲", "戀人朋友", "戀愛測驗"], "vi": ["trò cân bằng", "bạn người yêu", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "teman pasangan", "kuis cinta"]}',
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
