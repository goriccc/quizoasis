-- 나는 왜 연애 초반에 과하게 잘해줄까?
-- slug: phase3-overgiving-early-love
-- thumbnail: p3_test_overgiving_early_love.webp
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
  'phase3-overgiving-early-love',
  '{"ko": "나는 왜 연애 초반에 과하게 잘해줄까?", "en": "Why Do I Go All-In Too Fast at the Start of Dating?", "ja": "付き合い始めに尽くしすぎてしまうのはなぜ?", "zh-CN": "为什么恋爱初期我总是过度付出?", "zh-TW": "為什麼戀愛初期我總是過度付出?", "vi": "Vì sao mình luôn chiều quá mức ngay từ đầu khi mới yêu?", "id": "Kenapa Aku Selalu Terlalu Baik di Awal Hubungan?"}',
  '{"ko": "처음부터 이렇게 잘해주면 나중에 지치는 거 알면서, 왜 그럴까? 10가지 상황으로 초반에 올인하는 진짜 이유와 속도를 조절하는 법을 알려드립니다.", "en": "Even knowing I''ll burn out later, I go all-in from the very beginning... why? Discover the real reason you overdo it early with these 10 scenarios, and learn how to pace yourself.", "ja": "最初からこんなに尽くしたら後で疲れるのはわかっているのに、どうしてこうなるんだろう? 10のシチュエーションで、付き合い始めに全力を出してしまう本当の理由と、ペースの整え方を教えます。", "zh-CN": "明明知道一开始就这么拼,后面会很累,却还是忍不住……这是为什么呢?通过10个场景,告诉你恋爱初期全力付出的真正原因,以及如何调整节奏。", "zh-TW": "明明知道一開始就這麼拼,後面會很累,卻還是忍不住……這是為什麼呢?通過10個場景,告訴你戀愛初期全力付出的真正原因,以及如何調整節奏。", "vi": "Biết rõ chiều kiểu này thì sau sẽ mệt, nhưng vẫn không kiềm được... vì sao vậy nhỉ? Qua 10 tình huống, tìm ra lý do thật sự khiến bạn \"dốc hết sức\" ngay từ đầu và cách điều chỉnh tốc độ của mình.", "id": "Padahal tahu kalau terlalu baik dari awal nanti bakal capek sendiri, tapi tetap saja begitu... kenapa ya? Lewat 10 situasi, cari tahu alasan sebenarnya kamu \"all-in\" di awal hubungan dan cara mengatur ritmemu sendiri."}',
  'p3_test_overgiving_early_love.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애심리", "연애패턴"], "en": ["Dating Psychology", "Relationship Patterns"], "ja": ["恋愛心理", "恋愛パターン"], "zh-CN": ["恋爱心理", "恋爱模式"], "zh-TW": ["戀愛心理", "戀愛模式"], "vi": ["Tâm lý yêu đương", "Kiểu yêu đương"], "id": ["Psikologi Cinta", "Pola Hubungan"]}',
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
