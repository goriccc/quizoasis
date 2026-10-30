-- 나는 왜 먼저 고백을 못 할까?
-- slug: phase3-cant-confess-first
-- thumbnail: p3_test_cant_confess_first.webp

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
  'phase3-cant-confess-first',
  '{"ko":"나는 왜 먼저 고백을 못 할까?","en":"Why Can''t I Confess First?","ja":"なぜ先に告白できないの？","zh-CN":"我为什么总是无法先告白？","zh-TW":"我為什麼總是無法先告白？","vi":"Tại sao tôi không thể tỏ tình trước?","id":"Kenapa Aku Susah Ngaku Duluan?"}',
  '{"ko":"좋아하는 마음은 큰데 입이 안 떨어질 때. 12가지 상황으로 거절 공포·타이밍 대기·확신 필요·자존심 수호·관계 파괴 걱정·표현 서툰형 중 나의 진짜 장벽을 알려드립니다.","en":"Your feelings are huge—so why won''t the words come out? Twelve situations reveal whether rejection fear, waiting for timing, needing certainty, pride, fear of ruining the bond, or awkward expression is your real barrier.","ja":"気持ちはこんなに大きいのに、どうして言葉が出てこないの？12個の状況から、拒絶への恐れ・タイミング待ち・確信が欲しい気持ち・プライド・関係が壊れる不安・表現下手——あなたの本当の壁がどれなのかが分かります。","zh-CN":"明明很喜欢对方，话却怎么也说不出口。通过12种情境，为你揭晓你属于拒绝恐惧型、时机观望型、需要确认型、自尊守护型、关系守护型、不善表达型中的哪一种，找到阻碍你的真正原因。","zh-TW":"明明很喜歡對方，話卻怎麼也說不出口。透過12種情境，告訴你屬於拒絕恐懼型、時機觀望型、需要確認型、自尊守護型、關係守護型、不善表達型中的哪一種，找出真正卡住你的原因。","vi":"Tim đầy ắp vậy mà lời không ra. Qua 12 tình huống, tìm ra rào cản thật sự: sợ bị từ chối, chờ đúng lúc, cần chắc chắn, giữ sĩ diện, sợ mất quan hệ, hay khó diễn đạt.","id":"Perasaannya besar—tapi kenapa kata-katanya nggak keluar? Dua belas situasi mengungkap apakah takut ditolak, nunggu timing, butuh kepastian, menjaga harga diri, takut rusak hubungan, atau susah ngungkap adalah hambatanmu yang sebenarnya."}',
  'p3_test_cant_confess_first.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["고백","썸","연애심리"],"en":["confession","talking stage","love psychology"],"ja":["告白","両思い前","恋愛心理"],"zh-CN":["告白","暧昧","恋爱心理"],"zh-TW":["告白","曖昧","戀愛心理"],"vi":["tỏ tình","giai đoạn mập mờ","tâm lý tình yêu"],"id":["pengakuan","tahap deket","psikologi cinta"]}',
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
