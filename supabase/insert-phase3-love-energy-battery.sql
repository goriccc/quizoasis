-- 나의 연애 에너지 배터리 잔량
-- slug: phase3-love-energy-battery
-- thumbnail: p3_test_love_energy_battery.webp

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
  'phase3-love-energy-battery',
  '{"ko":"나의 연애 에너지 배터리 잔량","en":"My Dating Energy Battery Level","ja":"私の恋愛エネルギーバッテリー残量","zh-CN":"我的恋爱能量电量","zh-TW":"我的戀愛能量電量","vi":"Mức pin năng lượng yêu của tôi","id":"Sisa Baterai Energi Pacaran Saya"}',
  '{"ko":"지금 내 연애 에너지는 몇 %일까? 10가지 상황에서 반응을 합산해 연애 배터리 잔량을 %로 알려드립니다.","en":"How much dating energy do you have left? Ten situations add up your reactions and show your battery as a percentage.","ja":"いま恋愛エネルギーは何％？10の場面での反応を合算して、恋愛バッテリー残量を％でお伝えします。","zh-CN":"现在恋爱能量还剩几％？把十个情境里的反应加总，告诉你恋爱电池还剩多少。","zh-TW":"現在戀愛能量還剩幾％？把十個情境裡的反應加總，告訴你戀愛電池還剩多少。","vi":"Năng lượng yêu của bạn còn bao nhiêu phần trăm? Mười tình huống cộng dồn phản ứng của bạn và cho biết mức pin dưới dạng %.","id":"Energi pacaran kamu tinggal berapa persen? Sepuluh situasi menjumlahkan reaksi kamu dan menunjukkan sisa baterai dalam persen."}',
  'p3_test_love_energy_battery.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["연애에너지","연애번아웃","연애테스트"],"en":["dating energy","relationship burnout","relationship test"],"ja":["恋愛エネルギー","恋愛燃え尽き","恋愛テスト"],"zh-CN":["恋爱能量","恋爱倦怠","恋爱测试"],"zh-TW":["戀愛能量","戀愛倦怠","戀愛測驗"],"vi":["năng lượng yêu","burnout tình cảm","test tình yêu"],"id":["energi pacaran","burnout hubungan","tes pacaran"]}',
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
