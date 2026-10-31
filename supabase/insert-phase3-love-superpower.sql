-- 나의 숨겨진 연애 초능력
-- slug: phase3-love-superpower
-- thumbnail: p3_test_love_superpower.webp

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
  'phase3-love-superpower',
  '{"ko":"나의 숨겨진 연애 초능력","en":"My Hidden Love Superpower","ja":"私の隠れた恋愛超能力","zh-CN":"我隐藏的恋爱超能力","zh-TW":"我隱藏的戀愛超能力","vi":"Siêu năng lực tình yêu ẩn giấu của tôi","id":"Superpower Cinta Tersembunyi Saya"}',
  '{"ko":"연애에서 나만 가진 초능력이 있습니다. 12가지 연애 장면에서 가장 나다운 반응을 고르면 6가지 초능력 중 나의 능력을 알려드립니다.","en":"You have a love superpower all your own. Pick your most natural reactions in 12 dating moments and discover which of 6 powers is yours.","ja":"恋愛には、自分だけの超能力があります。12の恋愛シーンでいちばん自分らしい反応を選ぶと、6つの超能力のうちあなたの力がわかります。","zh-CN":"恋爱里你有属于自己的超能力。在12个恋爱场景里选出最像自己的反应，看看你属于6种超能力中的哪一种。","zh-TW":"戀愛裡你有屬於自己的超能力。在12個戀愛場景裡選出最像自己的反應，看看你屬於6種超能力中的哪一種。","vi":"Trong tình yêu bạn có siêu năng lực riêng. Chọn phản ứng đúng nhất với mình trong 12 khoảnh khắc hẹn hò để biết bạn thuộc loại nào trong 6 siêu năng lực.","id":"Di cinta kamu punya superpower sendiri. Pilih reaksi paling natural di 12 momen kencan dan temukan mana dari 6 kekuatan yang jadi milikmu."}',
  'p3_test_love_superpower.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["연애","초능력"],"en":["dating","superpower"],"ja":["恋愛","超能力"],"zh-CN":["恋爱","超能力"],"zh-TW":["戀愛","超能力"],"vi":["tình yêu","siêu năng lực"],"id":["cinta","superpower"]}',
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
