-- 나의 '잠수/환승' 잠재력
-- slug: phase3-ghosting-rebound-potential
-- thumbnail: p3_test_ghosting_rebound_potential.webp

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
  'phase3-ghosting-rebound-potential',
  '{"ko": "나의 ''잠수/환승'' 잠재력", "en": "My ''Ghosting/Rebound'' Potential", "ja": "私の『音信不通／乗り換え』ポテンシャル", "zh-CN": "我的「失联/闪现」潜力", "zh-TW": "我的「失聯／閃現」潛力", "vi": "Tiềm năng ''Ghosting/Rebound'' của tôi", "id": "Potensi ''Ghosting/Rebound''-ku"}',
  '{"ko": "12가지 실제 상황극으로 측정하는 이별 앞 나의 비겁함 수치. 당신은 잠수형인가요, 환승형인가요?", "en": "Measure your breakup cowardice score with 12 real-life scenarios. Are you a ghoster or a rebounder?", "ja": "12のリアルなシチュエーションで測る、別れの前の臆病さ。あなたは音信不通タイプ？乗り換えタイプ？", "zh-CN": "用12个真实情境测量分手时的懦弱指数。你是失联型还是闪现型？", "zh-TW": "用12個真實情境測量分手時的懦弱指數。你是失聯型還是閃現型？", "vi": "Đo mức độ hèn nhát trước chia tay qua 12 kịch bản thực tế. Bạn thuộc kiểu ghosting hay rebound?", "id": "Ukur skor keberanianmu saat putus lewat 12 skenario nyata. Kamu tipe ghosting atau rebound?"}',
  'p3_test_ghosting_rebound_potential.webp',
  'psychology',
  'love',
  '{"ko": ["잠수", "환승", "이별"], "en": ["ghosting", "rebound", "breakup"], "ja": ["音信不通", "乗り換え", "別れ"], "zh-CN": ["失联", "闪现", "分手"], "zh-TW": ["失聯", "閃現", "分手"], "vi": ["ghosting", "rebound", "chia tay"], "id": ["ghosting", "rebound", "putus"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
