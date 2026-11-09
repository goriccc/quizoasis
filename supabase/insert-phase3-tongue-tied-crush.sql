-- 나는 왜 썸 상대 앞에서만 말이 꼬일까?
-- slug: phase3-tongue-tied-crush
-- thumbnail: p3_test_tongue_tied_crush.webp
-- category: personality · format: scenario_4

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
  'phase3-tongue-tied-crush',
  '{"ko": "나는 왜 썸 상대 앞에서만 말이 꼬일까?", "en": "Why Do I Only Get Tongue-Tied Around My Crush?", "ja": "なぜいい感じの相手の前だけ言葉が絡まるの？", "zh-CN": "为什么我只在暧昧对象面前词不达意？", "zh-TW": "為什麼我只在曖昧對象面前詞不達意？", "vi": "Vì sao tôi chỉ lắp bắp trước người đang tìm hiểu?", "id": "Kenapa Aku Hanya Gugup Bicara di Depan Crush?"}',
  '{"ko": "평소엔 말 잘하는데 왜 그 사람 앞에서만 버벅일까? 10가지 상황으로 말이 꼬이는 진짜 이유와 편하게 말하는 법을 알려드립니다.", "en": "You talk fine with everyone else—so why do you stumble only with them? Ten situations reveal what''s really going on and how to speak more easily.", "ja": "普段は話せるのに、なぜその人の前だけどもる？10の場面で言葉が絡まる本当の理由と、楽に話すヒントを伝えます。", "zh-CN": "平时明明能说会道，为什么一到那人面前就结巴？用10个情境找出话卡壳的真正原因，以及说得更轻松的方法。", "zh-TW": "平時明明能說會道，為什麼一到那人面前就結巴？用10個情境找出話卡殼的真正原因，以及說得更輕鬆的方法。", "vi": "Bình thường nói chuyện ổn—sao chỉ trước người đó lại ấp úng? Mười tình huống sẽ chỉ ra lý do thật và cách nói chuyện thoải mái hơn.", "id": "Biasanya bicara lancar—kenapa cuma di depan dia tersendat? Sepuluh situasi mengungkap alasan sebenarnya dan cara bicara lebih santai."}',
  'p3_test_tongue_tied_crush.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["썸", "연애심리"], "en": ["situationship", "relationship psychology"], "ja": ["いい感じの相手", "恋愛心理"], "zh-CN": ["暧昧对象", "恋爱心理"], "zh-TW": ["曖昧對象", "戀愛心理"], "vi": ["người đang tìm hiểu", "tâm lý yêu"], "id": ["situationship", "psikologi cinta"]}',
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
