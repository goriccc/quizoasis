-- 나는 왜 소개팅만 하면 호감이 안 생길까?
-- slug: phase3-no-spark-blind-date
-- thumbnail: p3_test_no_spark_blind_date.webp

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
  'phase3-no-spark-blind-date',
  '{"ko":"나는 왜 소개팅만 하면 호감이 안 생길까?","en":"Why Don''t I Ever Feel a Spark on Blind Dates?","ja":"どうして紹介デートだと、ときめきが生まれないんだろう?","zh-CN":"为什么我一相亲就找不到心动的感觉?","zh-TW":"為什麼我一相親,心動的感覺就不見了?","vi":"Sao Cứ Hẹn Mai Mối Là Mình Lại Chẳng Rung Động?","id":"Kenapa Aku Nggak Pernah Deg-degan Pas Blind Date?"}',
  '{"ko":"분명 좋은 사람인데 왜 소개팅만 하면 마음이 안 움직일까? 12가지 상황으로 기준 고정형·첫인상 집착형·비교 습관형 등 6가지 중 내가 소개팅에서 막히는 진짜 이유를 알려드립니다.","en":"They''re a good person—so why doesn''t your heart move on setups? Through 12 situations, find which of 6 blockers (Rigid Checklist, First-Impression Lock, Comparison Habit, and more) is the real reason you stall.","ja":"きっといい人なのに、紹介デートだと心が動かないのはなぜ?12のシチュエーションで、条件チェック型・第一印象固定型・比較癖型など6タイプの中から、あなたが紹介デートでつまずく本当の理由がわかります。","zh-CN":"明明对方人挺好,为什么一相亲心就是不动?通过12个场景,从条件清单型、第一印象固执型、比较习惯型等6种类型中,找到你在相亲中卡住的真正原因。","zh-TW":"明明對方人很不錯,為什麼一相親心就是不會動?透過12個情境,從條件清單型、第一印象固執型、比較習慣型等6種類型中,找出你在相親中卡關的真正原因。","vi":"Rõ là người tốt mà sao mỗi lần hẹn mai mối tim lại chẳng rung động? Qua 12 tình huống, tìm ra bạn thuộc kiểu nào trong 6 kiểu ''chặn rung động'' như Khư Khư Tiêu Chí, Chốt Ấn Tượng Đầu, Thói So Sánh và hơn thế nữa, để biết lý do thật sự khiến bạn mãi không có cảm giác.","id":"Padahal orangnya baik, tapi kok nggak ada chemistry pas blind date? Lewat 12 situasi, cari tahu kamu termasuk tipe apa dari 6 ''penghalang rasa'' kayak Checklist Kaku, Terpaku Kesan Pertama, Suka Membandingkan, dan lainnya — alasan asli kenapa kamu susah baper pas PDKT setup."}',
  'p3_test_no_spark_blind_date.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["소개팅","솔로탈출","연애심리"],"en":["blind date","single life","dating psychology"],"ja":["紹介デート","脱ソロ","恋愛心理"],"zh-CN":["相亲","脱单","恋爱心理"],"zh-TW":["相親","脫單","戀愛心理"],"vi":["hẹn mai mối","thoát ế","tâm lý tình yêu"],"id":["blind date","jomblo","psikologi cinta"]}',
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
