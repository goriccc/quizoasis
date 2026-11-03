-- 나의 연애 눈치 레벨 테스트
-- slug: phase3-love-nunchi-level
-- thumbnail: p3_test_love_nunchi_level.webp

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
  'phase3-love-nunchi-level',
  '{"ko":"나의 연애 눈치 레벨 테스트","en":"My Dating Nunchi Level","ja":"あなたの恋愛空気読みレベル診断","zh-CN":"我的恋爱眼力等级测试","zh-TW":"我的戀愛敏感度測驗","vi":"Test Cấp Độ Đọc Vị Tín Hiệu Tình Yêu Của Tôi","id":"Tes Level Kepekaan Membaca Sinyal Cinta"}',
  '{"ko":"상대의 호감 신호, 나는 얼마나 잘 읽고 있을까? 10가지 썸·연애 상황에서 해석을 합산해 눈치 신생아부터 눈치 도사까지 나의 연애 눈치 레벨을 알려드립니다.","en":"How well do you read someone''s interest signals? Add up your takes on 10 talking-stage and dating moments—from Cue Newbie to Cue Master—and see your dating nunchi level.","ja":"気になる相手の好意のサイン、あなたはどれくらい正しく読み取れている?恋愛・片思いにまつわる10のシチュエーションでの解釈を集計して、空気読み赤ちゃんから空気読みマスターまで、あなたの恋愛空気読みレベルを診断します。","zh-CN":"对方的好感信号,你到底能读懂多少?通过10个恋爱、暧昧情境的解读加总,从眼力萌新到眼力大师,为你测出专属的恋爱眼力等级。","zh-TW":"對方的好感訊號,你到底讀得懂多少?透過10個戀愛、曖昧情境的解讀加總,從敏感度小白到敏感度大師,測出你專屬的戀愛敏感度等級。","vi":"Mình đọc vị tín hiệu thích của đối phương giỏi đến đâu? Tổng hợp cách bạn phản ứng trong 10 tình huống thả thính - hẹn hò để biết bạn đang ở cấp độ nào: từ ''gà mờ'' tín hiệu đến Thánh đọc vị tình yêu.","id":"Seberapa jago kamu membaca sinyal suka dari gebetan? Dari 10 situasi PDKT dan hubungan, jumlah skormu akan menentukan levelmu — dari yang masih ''Bayi'' soal sinyal sampai ''Dewa Baca Sinyal''."}',
  'p3_test_love_nunchi_level.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["연애눈치","썸","연애테스트"],"en":["dating cues","talking stage","dating test"],"ja":["恋愛の空気読み","友達以上恋人未満","恋愛診断"],"zh-CN":["恋爱眼力","暧昧测试","恋爱测试"],"zh-TW":["戀愛敏感度","曖昧測驗","戀愛測驗"],"vi":["đọc vị tình yêu","thả thính","test tình yêu"],"id":["baca sinyal cinta","PDKT","tes cinta"]}',
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
