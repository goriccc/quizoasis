-- 나는 왜 연애에서 늘 을이 될까?
-- slug: phase3-always-the-weaker-in-love
-- thumbnail: p3_test_always_the_weaker_in_love.webp
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
  'phase3-always-the-weaker-in-love',
  '{"ko": "나는 왜 연애에서 늘 을이 될까?", "en": "Why Am I Always the Weaker One in Love?", "ja": "なぜ恋愛でいつも下の立場になってしまうの？", "zh-CN": "为什么恋爱里我总是弱势的一方？", "zh-TW": "為什麼戀愛裡我總是弱勢的一方？", "vi": "Tại sao tôi luôn ở thế yếu trong tình yêu?", "id": "Kenapa Aku Selalu Jadi Pihak yang Kalah di Hubungan?"}',
  '{"ko": "더 맞추고 더 기다리는 쪽은, 왜 늘 나일까? 10가지 상황으로 내가 약자가 되는 진짜 이유와 균형을 찾는 법을 알려드립니다.", "en": "Why am I always the one who adjusts more and waits longer? These 10 scenarios reveal the real reason you end up with less power — and how to find balance again.", "ja": "合わせるのも待つのも、なぜいつも自分側？ 10の場面で、あなたが弱く見える本当の理由とバランスの取り戻し方を教えます。", "zh-CN": "更会迁就、更会等待的，为什么总是我？用10个情境找出你总处弱势的真正原因，以及找回平衡的方法。", "zh-TW": "更會遷就、更會等待的，為什麼總是我？用10個情境找出你總處弱勢的真正原因，以及找回平衡的方法。", "vi": "Tại sao người chiều chuộng và chờ đợi nhiều hơn luôn là mình? 10 tình huống giúp bạn tìm ra lý do thật sự và cách lấy lại cân bằng.", "id": "Kenapa yang lebih sering menyesuaikan dan menunggu selalu aku? Lewat 10 situasi, temukan alasan sejati kenapa kamu sering di posisi lemah — dan cara menyeimbangkan lagi."}',
  'p3_test_always_the_weaker_in_love.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애심리", "관계불균형"], "en": ["Dating Psychology", "Relationship Imbalance"], "ja": ["恋愛心理", "関係のアンバランス"], "zh-CN": ["恋爱心理", "关系失衡"], "zh-TW": ["戀愛心理", "關係失衡"], "vi": ["Tâm lý tình yêu", "Mất cân bằng quan hệ"], "id": ["Psikologi Pacaran", "Ketidakseimbangan Relasi"]}',
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
