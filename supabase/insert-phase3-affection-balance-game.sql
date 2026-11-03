-- 밸런스 게임 — 스킨십·애정표현 극한편
-- slug: phase3-affection-balance-game
-- thumbnail: p3_test_balance_game_affection.webp

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
  'phase3-affection-balance-game',
  '{"ko": "밸런스 게임 — 스킨십·애정표현 극한편", "en": "Balance Game — Affection & Touch (Extreme)", "ja": "バランスゲーム ― スキンシップ・愛情表現極限編", "zh-CN": "平衡游戏——亲密与爱意表达极限篇", "zh-TW": "平衡遊戲——親密與愛意表達極限篇", "vi": "Trò cân bằng — Biểu lộ tình cảm & da thịt (cực hạn)", "id": "Permainan Seimbang — Ekspresi Kasih & Sentuhan (Ekstrem)"}',
  '{"ko": "하루 100번 사랑해 vs 1년에 한 번 진심 편지. 12라운드 극한 선택으로 나의 애정표현 스타일을 알려드립니다.", "en": "\"I love you\" a hundred times a day vs one heartfelt letter a year. Twelve extreme rounds reveal how you show affection.", "ja": "1日100回「好き」と言う vs 年に1回だけ本気の手紙。12ラウンドの極限選択であなたの愛情表現スタイルがわかります。", "zh-CN": "一天说一百次我爱你 vs 一年写一封真心信。12轮极限选择，测出你的爱意表达风格。", "zh-TW": "一天說一百次我愛你 vs 一年寫一封真心信。12輪極限選擇，測出你的愛意表達風格。", "vi": "Nói yêu một trăm lần mỗi ngày vs một lá thư chân thành mỗi năm. 12 vòng chọn cực hạn hé lộ cách bạn thể hiện tình cảm.", "id": "Bilang sayang seratus kali sehari vs satu surat tulus setahun. 12 ronde pilihan ekstrem mengungkap gaya ekspresi kasihmu."}',
  'p3_test_balance_game_affection.webp',
  'psychology',
  'personality',
  'game',
  '{"ko": ["밸런스게임", "스킨십", "사랑표현", "연애테스트"], "en": ["balance game", "affection", "love language", "dating quiz"], "ja": ["バランスゲーム", "スキンシップ", "愛情表現", "恋愛診断"], "zh-CN": ["平衡游戏", "亲密接触", "爱意表达", "恋爱测试"], "zh-TW": ["平衡遊戲", "親密接觸", "愛意表達", "戀愛測驗"], "vi": ["trò cân bằng", "biểu lộ tình cảm", "da thịt", "trắc nghiệm tình yêu"], "id": ["permainan seimbang", "ekspresi kasih", "sentuhan", "kuis cinta"]}',
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
