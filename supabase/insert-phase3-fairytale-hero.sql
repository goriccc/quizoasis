-- 동화 속 나는 어떤 주인공일까?
-- slug: phase3-fairytale-hero
-- thumbnail: p3_test_fairytale_hero.webp
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
  'phase3-fairytale-hero',
  '{"ko": "동화 속 나는 어떤 주인공일까?", "en": "Which Fairy-Tale Hero Are You?", "ja": "童話の中の私はどの主人公？", "zh-CN": "童话里的我是哪个主角？", "zh-TW": "童話裡的我是哪個主角？", "vi": "Trong truyện cổ tích, bạn là nhân vật nào?", "id": "Di Dongeng, Kamu Tokoh Mana?"}',
  '{"ko": "동화 속 주인공으로 살아간다면 나는 누구일까? 12가지 장면에서 나의 동화 주인공과 연애 스타일을 알려드립니다.", "en": "If you lived as a fairy-tale hero, who would you be? Twelve scenes reveal your fairy-tale character and dating style.", "ja": "童話の主人公として生きるなら、私は誰？12の場面から、あなたの童話の主人公と恋愛スタイルがわかります。", "zh-CN": "如果活成童话主角，我会是谁？通过12个场景，告诉你专属的童话主角和恋爱风格。", "zh-TW": "如果活成童話主角，我會是誰？通過12個場景，告訴你專屬的童話主角和戀愛風格。", "vi": "Nếu sống như nhân vật cổ tích, bạn sẽ là ai? 12 phân cảnh sẽ cho biết nhân vật cổ tích và phong cách yêu của bạn.", "id": "Kalau hidup sebagai tokoh dongeng, kamu siapa? Dua belas adegan akan ungkap tokoh dongeng dan gaya pacaranmu."}',
  'p3_test_fairytale_hero.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["동화주인공"], "en": ["fairy-tale hero"], "ja": ["童話の主人公"], "zh-CN": ["童话主角"], "zh-TW": ["童話主角"], "vi": ["nhân vật cổ tích"], "id": ["tokoh dongeng"]}',
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
