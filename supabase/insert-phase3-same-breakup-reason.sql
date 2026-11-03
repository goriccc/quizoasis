-- 나는 왜 매번 같은 이유로 헤어질까?
-- slug: phase3-same-breakup-reason
-- thumbnail: p3_test_same_breakup_reason.webp

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
  'phase3-same-breakup-reason',
  '{"ko":"나는 왜 매번 같은 이유로 헤어질까?","en":"Why Do I Keep Breaking Up for the Same Reason?","ja":"私はなぜ毎回同じ理由で別れてしまうの?","zh-CN":"为什么我每次都因为同样的原因分手?","zh-TW":"為什麼我每次都因為同樣的原因分手?","vi":"Vì sao mình luôn chia tay vì cùng một lý do?","id":"Kenapa aku selalu putus karena alasan yang sama?"}',
  '{"ko":"사람은 바뀌었는데, 왜 이별 이유는 늘 비슷할까? 12가지 상황으로 소통 단절형·신뢰 균열형·기대 불일치형 등 6가지 중 내가 반복해서 헤어지는 진짜 이유를 알려드립니다.","en":"The people change—so why do the breakups feel so familiar? Through 12 situations, find which of 6 patterns (Communication Shutdown, Trust Crack, Expectation Gap, and more) is your real repeating reason.","ja":"相手が変わっても、なぜ別れの理由はいつも似ているんだろう?12の質問から「沈黙先行型」「疑心暗鬼型」「理想ギャップ型」など6タイプの中で、あなたが同じ理由で別れを繰り返す本当の原因を診断します。","zh-CN":"人换了,为什么分手的理由总是差不多?通过12个情景,从沟通断联型、信任裂痕型、期待落差型等6种类型中,找出你反复分手的真正原因。","zh-TW":"人換了,為什麼分手的理由總是差不多?透過12個情境,從溝通斷聯型、信任裂痕型、期待落差型等6種類型中,找出你一直重複分手的真正原因。","vi":"Người yêu đã khác, nhưng vì sao lý do chia tay vẫn luôn giống nhau? Qua 12 tình huống, bài test sẽ cho biết bạn thuộc 1 trong 6 tuýp - Đứt Kết Nối, Rạn Niềm Tin, Lệch Kỳ Vọng... - để tìm ra lý do thật sự khiến bạn cứ chia tay theo một vòng lặp.","id":"Orangnya udah ganti, tapi kenapa alasan putusnya selalu mirip? Lewat 12 situasi, kuis ini bakal kasih tahu kamu termasuk 1 dari 6 tipe - Putus Komunikasi, Retak Kepercayaan, Ekspektasi Gak Sinkron, dan lainnya - buat nemuin alasan asli kenapa kamu terus putus dengan pola yang sama."}',
  'p3_test_same_breakup_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["이별패턴","연애패턴","연애심리"],"en":["breakup pattern","dating pattern","love psychology"],"ja":["別れパターン","恋愛パターン","恋愛心理"],"zh-CN":["分手模式","恋爱模式","恋爱心理"],"zh-TW":["分手模式","戀愛模式","戀愛心理"],"vi":["mẫu hình chia tay","mẫu hình tình yêu","tâm lý tình yêu"],"id":["pola putus cinta","pola percintaan","psikologi cinta"]}',
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
