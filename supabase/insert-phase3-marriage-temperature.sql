-- 내 결혼 생각 온도 측정
-- slug: phase3-marriage-temperature
-- thumbnail: p3_test_marriage_temperature.webp

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
  'phase3-marriage-temperature',
  '{"ko":"내 결혼 생각 온도 측정","en":"My Marriage Temperature Check","ja":"私の結婚温度診断","zh-CN":"我的结婚想法温度测试","zh-TW":"我的結婚溫度測驗","vi":"Nhiệt Độ Suy Nghĩ Kết Hôn Của Tui","id":"Cek Suhu Pikiran Menikahmu"}',
  '{"ko":"결혼에 대한 내 마음은 지금 몇 도일까? 10가지 상황에서 반응을 합산해 영하 비혼 확신부터 뜨거운 결혼 열망까지 나의 결혼 생각 온도를 알려드립니다.","en":"How warm—or chilly—are your thoughts about marriage right now? Add up your takes on 10 situations, from subzero single-and-sure to full-on marriage fever, and see your marriage-mind temperature.","ja":"結婚に対する私の気持ちは今何度？10個の状況への反応を合計して、氷点下の非婚確信から熱い結婚願望まで、あなたの結婚温度を診断します。","zh-CN":"我对结婚的想法现在是多少度？把10个情境里的反应加起来，从冰点以下的不婚确信到火热的结婚渴望，测出你的结婚想法温度。","zh-TW":"我對結婚的想法現在是幾度？把10個情境的反應加總起來，從冰點以下的不婚篤定到熱騰騰的結婚渴望，測出你的結婚溫度。","vi":"Suy nghĩ về kết hôn của bạn đang nóng hay lạnh? Cộng điểm phản ứng của bạn qua 10 tình huống, từ độc thân chủ đích dưới 0 độ đến cơn sốt kết hôn rực lửa, xem thử nhiệt độ suy nghĩ kết hôn của bạn là bao nhiêu.","id":"Pikiranmu soal menikah lagi anget atau dingin banget? Jumlahin reaksimu di 10 situasi, dari single by choice yang minus derajat sampai demam nikah yang membara, terus lihat suhu pikiran menikahmu sekarang."}',
  'p3_test_marriage_temperature.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["결혼생각","비혼","연애테스트"],"en":["marriage mindset","single by choice","dating test"],"ja":["結婚観","非婚","恋愛診断"],"zh-CN":["结婚想法","不婚","恋爱测试"],"zh-TW":["結婚觀","不婚","戀愛測驗"],"vi":["suy nghĩ kết hôn","độc thân chủ đích","test tình yêu"],"id":["pikiran menikah","single by choice","tes cinta"]}',
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
