-- 나의 첫 데이트 성공 확률
-- slug: phase3-first-date-success
-- thumbnail: p3_test_first_date_success.webp

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
  'phase3-first-date-success',
  '{"ko":"나의 첫 데이트 성공 확률","en":"My First-Date Success Odds","ja":"私の初デート成功確率","zh-CN":"我的第一次约会成功概率","zh-TW":"我的初次約會成功機率","vi":"Tỉ Lệ Thành Công Buổi Hẹn Hò Đầu Tiên Của Tôi","id":"Peluang Sukses Kencan Pertamaku"}',
  '{"ko":"첫 데이트의 분위기, 나의 습관이 얼마나 좌우할까? 10가지 첫 데이트 상황에서 나의 반응을 점수로 합산해 성공 확률을 %로 알려드립니다.","en":"How much do your little habits shape a first date? Add up your reactions across 10 first-date moments and get your success odds as a percent.","ja":"初デートの空気感は、自分のクセでどれくらい変わる?10個の初デートシーンでの反応を点数にして、成功確率を%で診断します。","zh-CN":"第一次约会的气氛,会被你的小习惯影响多少?把10个约会场景里的反应换算成分数,用百分比告诉你成功概率。","zh-TW":"初次約會的氣氛,會被你的小習慣影響多少?把10個約會情境中的反應換算成分數,用百分比告訴你成功機率。","vi":"Không khí và thói quen của bạn ảnh hưởng đến buổi hẹn hò đầu tiên thế nào? Cộng điểm phản ứng của bạn trong 10 tình huống hẹn hò đầu tiên để biết tỉ lệ thành công theo %.","id":"Seberapa besar kebiasaan kecilmu memengaruhi kencan pertama? Jumlahkan reaksimu di 10 momen kencan pertama dan lihat peluang suksesmu dalam persen."}',
  'p3_test_first_date_success.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["첫데이트","소개팅","썸","연애테스트"],"en":["first date","blind date","talking stage","dating quiz"],"ja":["初デート","お見合い","気になる相手","恋愛診断"],"zh-CN":["第一次约会","相亲","暧昧期","恋爱测试"],"zh-TW":["初次約會","相親","曖昧期","戀愛測驗"],"vi":["hẹn hò lần đầu","gặp mặt mai mối","tình bạn mập mờ","test tình yêu"],"id":["kencan pertama","blind date","lagi PDKT","quiz cinta"]}',
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
