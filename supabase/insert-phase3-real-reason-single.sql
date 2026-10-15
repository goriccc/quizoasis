-- 내가 연애를 못 하는 진짜 이유
-- slug: phase3-real-reason-single
-- thumbnail: p3_test_real_reason_single.webp

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
  'phase3-real-reason-single',
  '{"ko": "내가 연애를 못 하는 진짜 이유", "en": "The Real Reason I''m Still Single", "ja": "私が恋愛できない本当の理由", "zh-CN": "我谈不了恋爱的真正原因", "zh-TW": "我談不了戀愛的真正原因", "vi": "Lý do thật sự tôi chưa có người yêu", "id": "Alasan Sebenarnya Aku Belum Pacaran"}',
  '{"ko": "외모도 성격도 괜찮은데 왜 아직 솔로일까? 12가지 상황으로 높은 기준형·철벽 방어형·타이밍 놓침형 등 6가지 중 나만의 진짜 이유를 찾아드립니다.", "en": "Good looks, great personality—so why are you still single? Through 12 situations, find your real reason among 6 types, from The High Standards Type and The Fortress Type to The Missed Timing Type.", "ja": "見た目も性格も悪くないのに、なぜまだ独りなの？12の状況から、ハイスタンダード型・鉄壁ガード型・タイミング逃し型など6タイプの中で、あなただけの本当の理由を見つけます。", "zh-CN": "长得不差、性格也不错，为什么还是单身？通过12个情境，从高标准型、铁壁防御型、错过时机型等6种类型中，找出属于你的真正原因。", "zh-TW": "長得不差、個性也不錯，為什麼還是單身？透過12個情境，從高標準型、鐵壁防禦型、錯過時機型等6種類型中，找出屬於你的真正原因。", "vi": "Ngoại hình ổn, tính cách tốt, vậy sao vẫn độc thân? Qua 12 tình huống, hãy tìm ra lý do thật sự của riêng bạn trong 6 kiểu như Tiêu Chuẩn Cao, Phòng Thủ Kiên Cố, Lỡ Thời Điểm.", "id": "Penampilan oke, kepribadian baik, tapi kok masih jomblo? Lewat 12 situasi, temukan alasan sebenarnya di antara 6 tipe seperti Standar Tinggi, Benteng Kokoh, dan Telat Momen."}',
  'p3_test_real_reason_single.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애유형", "모태솔로", "연애심리"], "en": ["dating type", "forever single", "love psychology"], "ja": ["恋愛タイプ", "恋人いない歴", "恋愛心理"], "zh-CN": ["恋爱类型", "母胎单身", "恋爱心理"], "zh-TW": ["戀愛類型", "母胎單身", "戀愛心理"], "vi": ["kiểu yêu đương", "ế lâu năm", "tâm lý tình yêu"], "id": ["tipe pacaran", "jomblo", "psikologi cinta"]}',
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
