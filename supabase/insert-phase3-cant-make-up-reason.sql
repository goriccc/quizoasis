-- 싸우고 화해를 못 하는 진짜 이유
-- slug: phase3-cant-make-up-reason
-- thumbnail: p3_test_cant_make_up_reason.webp

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
  'phase3-cant-make-up-reason',
  '{"ko": "싸우고 화해를 못 하는 진짜 이유", "en": "The Real Reason You Can''t Make Up After a Fight", "ja": "ケンカして仲直りできない本当の理由", "zh-CN": "吵完架却无法和好的真正原因", "zh-TW": "吵完架卻無法和好的真正原因", "vi": "Lý do thật sự khiến bạn không thể làm lành sau cãi nhau", "id": "Alasan Sebenarnya Kenapa Kamu Susah Berdamai Setelah Bertengkar"}',
  '{"ko": "먼저 연락하고 싶은데 손이 안 갈 때. 12가지 상황으로 자존심·거절 두려움·타이밍·서운함 중 내 손을 붙잡는 진짜 이유를 알려드립니다.", "en": "You want to text first—but your hands freeze. Twelve situations reveal whether pride, fear of rejection, timing, or leftover hurt is what''s holding you back.", "ja": "先に連絡したいのに手が動かないとき。12のシチュエーションで、プライド・拒否への恐れ・タイミング・積み残した気持ちのどれが手を止めているのかわかります。", "zh-CN": "想先发消息却发不出去的时候。通过12个情境，找出是自尊、害怕被拒、时机，还是委屈积压在按住你的手。", "zh-TW": "想先傳訊息卻傳不出去的時候。透過12個情境，找出是自尊、害怕被拒、時機，還是委屈積壓在按住你的手。", "vi": "Muốn nhắn trước nhưng tay không chịu gửi. 12 tình huống chỉ ra liệu tự ái, sợ bị từ chối, timing hay nỗi buồn còn đọng mới là điều níu tay bạn.", "id": "Pengin chat duluan tapi tangan bekuku. 12 situasi mengungkap apakah harga diri, takut ditolak, timing, atau sakit hati yang menumpuk yang menahan tanganmu."}',
  'p3_test_cant_make_up_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애싸움", "연애테스트"], "en": ["couple fight", "relationship test"], "ja": ["カップル喧嘩", "恋愛テスト"], "zh-CN": ["情侣吵架", "恋爱测试"], "zh-TW": ["情侶吵架", "戀愛測驗"], "vi": ["cãi nhau tình cảm", "trắc nghiệm tình yêu"], "id": ["pertengkaran pasangan", "tes hubungan"]}',
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
