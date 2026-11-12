-- 나는 왜 연인의 사소한 말에 상처받을까?
-- slug: phase3-hurt-by-small-words
-- thumbnail: p3_test_hurt_by_small_words.webp
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
  'phase3-hurt-by-small-words',
  '{"ko": "나는 왜 연인의 사소한 말에 상처받을까?", "en": "Why Do Casual Words from My Partner Hurt So Much?", "ja": "なぜ恋人の何気ない一言に傷つくの？", "zh-CN": "为什么总被恋人的一句闲话伤到？", "zh-TW": "為什麼總被戀人的一句閒話傷到？", "vi": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu?", "id": "Kenapa Sakit Hati karena Omongan Sepele Pacar?"}',
  '{"ko": "별 뜻 없는 한마디인데, 왜 마음이 쿵 내려앉을까? 10가지 상황으로 내가 상처받는 진짜 이유와 마음을 지키는 법을 알려드립니다.", "en": "It was just a throwaway line — so why does your heart drop? These 10 scenarios reveal the real reason you get hurt, and how to protect your heart.", "ja": "大した意味のない一言なのに、なぜ心がドスンと落ちるの？ 10の場面で、傷つく本当の理由と心を守る方法を教えます。", "zh-CN": "明明没什么意思的一句话，为什么心会突然一沉？用10个情境找出你受伤的真正原因，以及怎样守住内心。", "zh-TW": "明明沒什麼意思的一句話，為什麼心會突然一沉？用10個情境找出你受傷的真正原因，以及怎樣守住內心。", "vi": "Chỉ là một câu chẳng có ý gì — sao tim lại thắt lại? 10 tình huống giúp bạn tìm ra lý do thật sự và cách giữ lấy trái tim mình.", "id": "Cuma satu kalimat tanpa makna besar — kenapa hati langsung turun? Lewat 10 situasi, temukan alasan sejati kenapa kamu terluka, dan cara menjaga hatimu."}',
  'p3_test_hurt_by_small_words.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애상처", "연애심리"], "en": ["Dating Wounds", "Dating Psychology"], "ja": ["恋愛の傷", "恋愛心理"], "zh-CN": ["恋爱伤口", "恋爱心理"], "zh-TW": ["戀愛傷口", "戀愛心理"], "vi": ["Vết thương tình yêu", "Tâm lý tình yêu"], "id": ["Luka Pacaran", "Psikologi Pacaran"]}',
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
