-- 내 연애의 온도, 지금 몇 도일까?
-- slug: phase3-love-temperature-now
-- thumbnail: p3_test_love_temperature_now.webp

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
  'phase3-love-temperature-now',
  '{"ko":"내 연애의 온도, 지금 몇 도일까?","en":"What''s My Relationship Temperature Right Now?","ja":"今の恋愛温度、何度くらい？","zh-CN":"我的恋爱温度，现在几度？","zh-TW":"我的戀愛溫度，現在幾度？","vi":"Nhiệt độ tình yêu của mình, giờ đang bao nhiêu độ?","id":"Suhu Pacaranku Sekarang Berapa Derajat?"}',
  '{"ko":"지금 내 연애는 뜨겁게 끓는 중일까, 식어 가는 중일까? 10가지 상황에서 반응을 합산해 지금 연애의 온도를 알려드립니다.","en":"Is your relationship boiling hot or cooling down? Ten situations add up your reactions and show your relationship temperature right now.","ja":"いまの恋は煮えたぎっている？それとも冷めかけている？10の場面での反応を合算して、いまの恋愛温度をお伝えします。","zh-CN":"现在的恋爱是在沸腾，还是在降温？十个情境的反应加总，告诉你此刻的恋爱温度。","zh-TW":"現在的戀愛是在沸騰，還是在降溫？十個情境的反應加總，告訴你此刻的戀愛溫度。","vi":"Tình yêu của bạn đang sôi sùng sục hay đang nguội dần? Mười tình huống cộng điểm phản ứng để cho biết nhiệt độ tình yêu lúc này.","id":"Pacaranmu lagi mendidih atau lagi dingin? Sepuluh situasi menjumlahkan reaksi kamu dan menunjukkan suhu hubungan sekarang."}',
  'p3_test_love_temperature_now.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["연애온도","열애","연애테스트"],"en":["relationship temperature","passionate love","relationship test"],"ja":["恋愛温度","熱愛","恋愛テスト"],"zh-CN":["恋爱温度","热恋","恋爱测试"],"zh-TW":["戀愛溫度","熱戀","戀愛測驗"],"vi":["nhiệt độ tình yêu","yêu nóng bỏng","test tình yêu"],"id":["suhu pacaran","cinta panas","tes hubungan"]}',
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
