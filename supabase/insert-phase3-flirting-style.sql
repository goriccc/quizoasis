-- 나의 '플러팅' 스타일
-- slug: phase3-flirting-style
-- thumbnail: p3_test_flirting_style.webp

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
  'phase3-flirting-style',
  '{"ko": "나의 ''플러팅'' 스타일", "en": "My Flirting Style", "ja": "私の『フリート』スタイル", "zh-CN": "我的『撩人』风格", "zh-TW": "我的『撩人』風格", "vi": "Phong cách ''flirting'' của tôi", "id": "Gaya ''Flirting''-ku"}',
  '{"ko": "12가지 상황극으로 나의 진짜 플러팅 스타일과 유혹 필살기를 찾아드립니다.", "en": "Discover your true flirting style and seduction move with 12 situational questions.", "ja": "12のシチュエーションで本当のフリートスタイルと必殺技を見つけます。", "zh-CN": "通过12个情境题找到你真正的撩人风格与必杀技。", "zh-TW": "透過12個情境題找到你真正的撩人風格與必殺技。", "vi": "Tìm phong cách flirting và chiêu thức quyến rũ thật sự qua 12 tình huống.", "id": "Temukan gaya flirting dan jurus memikatmu lewat 12 situasi."}',
  'p3_test_flirting_style.webp',
  'psychology',
  'love',
  '{"ko": ["플러팅", "유혹", "연애", "썸", "필살기"], "en": ["flirting", "seduction", "dating", "crush", "move"], "ja": ["フリート", "誘惑", "恋愛", "曖昧", "必殺技"], "zh-CN": ["撩人", "诱惑", "恋爱", "暧昧", "必杀技"], "zh-TW": ["撩人", "誘惑", "戀愛", "曖昧", "必殺技"], "vi": ["flirting", "quyến rũ", "hẹn hò", "crush", "chiêu thức"], "id": ["flirting", "godaan", "pacaran", "crush", "jurus"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
