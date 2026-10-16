-- 나의 연애 자신감 레벨 테스트
-- slug: phase3-love-confidence-level
-- thumbnail: p3_test_love_confidence_level.webp

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
  'phase3-love-confidence-level',
  '{"ko": "나의 연애 자신감 레벨 테스트", "en": "My Dating Confidence Level", "ja": "私の恋愛自信レベルテスト", "zh-CN": "我的恋爱自信等级测试", "zh-TW": "我的戀愛自信等級測驗", "vi": "Cấp độ tự tin trong tình yêu của tôi", "id": "Level Kepercayaan Diriku saat Pacaran"}',
  '{"ko": "좋아하는 사람 앞에서 나는 나를 얼마나 믿고 있을까요? 12가지 연애 상황으로 연애 자신감 레벨과 상위 몇 %인지 알려드립니다.", "en": "How much do you trust yourself in front of someone you like? 12 dating situations estimate your confidence level and where you rank.", "ja": "好きな人の前で、自分をどれくらい信じている？12の恋愛場面で自信レベルと上位何%かを出します。", "zh-CN": "在喜欢的人面前，你有多相信自己？通过12个恋爱情境，算出自信等级和你排在前百分之几。", "zh-TW": "在喜歡的人面前，你有多相信自己？透過12個戀愛情境，算出自信等級和你排在前百分之幾。", "vi": "Trước mặt người mình thích, bạn tin mình đến mức nào? 12 tình huống tính cấp độ tự tin và bạn thuộc top bao nhiêu phần trăm.", "id": "Di depan orang yang kamu suka, seberapa kamu percaya pada dirimu? 12 situasi menghitung level kepercayaan diri dan kamu ada di berapa persen teratas."}',
  'p3_test_love_confidence_level.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애자신감", "연애자존감", "연애심리", "연애테스트"], "en": ["dating confidence", "dating self-esteem", "dating psychology", "dating test"], "ja": ["恋愛自信", "恋愛自尊感", "恋愛心理", "恋愛テスト"], "zh-CN": ["恋爱自信", "恋爱自尊", "恋爱心理", "恋爱测试"], "zh-TW": ["戀愛自信", "戀愛自尊", "戀愛心理", "戀愛測驗"], "vi": ["tự tin tình yêu", "tự trọng khi yêu", "tâm lý tình yêu", "test tình yêu"], "id": ["percaya diri pacaran", "harga diri saat pacaran", "psikologi cinta", "tes cinta"]}',
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
