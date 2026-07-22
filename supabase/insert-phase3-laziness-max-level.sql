-- 나의 '귀차니즘' 만렙 측정
-- slug: phase3-laziness-max-level
-- thumbnail: p3_test_laziness_max_level.webp

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
  'phase3-laziness-max-level',
  '{"ko": "나의 ''귀차니즘'' 만렙 측정", "en": "Measuring My ''Laziness'' Max Level", "ja": "私の「めんどくさがり」満レベル測定", "zh-CN": "测测我的「懒惰」满级值", "zh-TW": "測測我的「懶惰」滿級值", "vi": "Đo mức ''Lười biếng'' tối đa của tôi", "id": "Mengukur Level ''Kemalasan'' Maksimalku"}',
  '{"ko": "12가지 실제 상황극으로 나의 귀차니즘 만렙을 측정합니다.", "en": "12 real-life scenarios measure your laziness max level.", "ja": "12個のリアルなシチュエーション劇で、あなたの「めんどくさがり」満レベルを測定します。", "zh-CN": "通过12个真实场景测测你的懒惰满级值。", "zh-TW": "透過12個真實場景測測你的懶惰滿級值。", "vi": "Đo mức độ lười biếng tối đa của bạn qua 12 tình huống thực tế.", "id": "Ukur level kemalasan maksimalmu lewat 12 skenario nyata."}',
  'p3_test_laziness_max_level.webp',
  'psychology',
  'personality',
  '{"ko": ["귀차니즘", "게으름", "공감"], "en": ["laziness", "procrastination", "relatable"], "ja": ["めんどくさがり", "だらだら", "共感"], "zh-CN": ["懒惰", "拖延", "共鸣"], "zh-TW": ["懶惰", "拖延", "共鳴"], "vi": ["lười biếng", "trì hoãn", "đồng cảm"], "id": ["kemalasan", "menunda", "relatable"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
