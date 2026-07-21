-- 나의 '가스라이팅' 방어력
-- slug: phase3-gaslighting-defense-power
-- thumbnail: p3_test_gaslighting_defense_power.webp

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
  'phase3-gaslighting-defense-power',
  '{"ko": "나의 ''가스라이팅'' 방어력", "en": "My Gaslighting Defense Power", "ja": "私の『ガスライティング』防御力", "zh-CN": "我的「煤气灯」防御力", "zh-TW": "我的「煤氣燈」防禦力", "vi": "Sức phòng thủ ''Gaslighting'' của tôi", "id": "Daya Tahan ''Gaslighting''-ku"}',
  '{"ko": "12가지 상황으로 알아보는 나의 심리적 방어력 레벨. 당신은 흔들리지 않는 멘탈 금강불괴인가요?", "en": "Discover your psychological defense level through 12 situations. Are you an unshakeable, unbreakable mind?", "ja": "12の状況でわかる心理的防御力レベル。あなたは揺るがないメンタル金剛不壊？", "zh-CN": "通过12个情境了解你的心理防御力等级。你是不动摇的金刚不坏心态吗？", "zh-TW": "透過12個情境了解你的心理防禦力等級。你是不動搖的金剛不壞心態嗎？", "vi": "Khám phá cấp độ phòng thủ tâm lý qua 12 tình huống. Bạn có phải tinh thần kim cương bất hoại không lay chuyển?", "id": "Ketahui level pertahanan psikologismu lewat 12 situasi. Apakah mentalmu baja tak terpatahkan?"}',
  'p3_test_gaslighting_defense_power.webp',
  'psychology',
  'personality',
  '{"ko": ["가스라이팅", "멘탈", "심리"], "en": ["Gaslighting", "Mental", "Psychology"], "ja": ["ガスライティング", "メンタル", "心理"], "zh-CN": ["煤气灯", "心态", "心理"], "zh-TW": ["煤氣燈", "心態", "心理"], "vi": ["Gaslighting", "Tinh thần", "Tâm lý"], "id": ["Gaslighting", "Mental", "Psikologi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
