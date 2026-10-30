-- 나의 사랑 용량 — 마음의 크기 측정
-- slug: phase3-love-capacity-bowl
-- thumbnail: p3_test_love_capacity_bowl.webp

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
  'phase3-love-capacity-bowl',
  '{"ko":"나의 사랑 용량 — 마음의 크기 측정","en":"My Love Capacity — How Big Is Your Heart?","ja":"私の愛情容量 — 心の大きさ測定","zh-CN":"我的爱情容量 — 心的大小测量","zh-TW":"我的愛情容量 — 心的大小測量","vi":"Dung lượng yêu của tôi — Đo kích thước trái tim","id":"Kapasitas Cintaku — Mengukur Besarnya Hati"}',
  '{"ko":"내 마음은 종지 그릇일까, 바다일까? 12가지 연애 상황으로 사랑 그릇의 크기와 상위 몇 %인지 알려드립니다.","en":"Is your heart a tiny dish or an ocean? Twelve dating situations reveal the size of your love bowl—and roughly where you rank.","ja":"私の心は小皿なのか、海なのか？12の恋愛シチュエーションで、愛情の器の大きさと上位何%かがわかります。","zh-CN":"我的心是小碟子，还是大海？12个恋爱情境，带你了解爱情容器的大小，以及大概排在前百分之几。","zh-TW":"我的心是小碟子，還是大海？12個戀愛情境，帶你了解愛情容器的大小，以及大概排在前百分之幾。","vi":"Trái tim bạn là chén nhỏ xíu hay cả đại dương? 12 tình huống yêu đương sẽ hé lộ kích thước ''bát tình yêu'' của bạn và bạn đang thuộc top bao nhiêu phần trăm.","id":"Hatimu itu mangkuk kecil atau lautan luas? 12 situasi pacaran ini bakal mengungkap seberapa besar ''wadah cinta''-mu dan kamu ada di top berapa persen."}',
  'p3_test_love_capacity_bowl.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["연애성향","연애테스트"],"en":["dating style","relationship test"],"ja":["恋愛傾向","恋愛テスト"],"zh-CN":["恋爱倾向","恋爱测试"],"zh-TW":["戀愛情向","戀愛測驗"],"vi":["xu hướng yêu","trắc nghiệm tình yêu"],"id":["gaya pacaran","tes hubungan"]}',
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
