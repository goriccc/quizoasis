-- 나의 연애 IQ — 상위 몇 %?
-- slug: phase3-love-iq-percent
-- thumbnail: p3_test_love_iq_percent.webp

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
  'phase3-love-iq-percent',
  '{"ko": "나의 연애 IQ — 상위 몇 %?", "en": "What percent is your dating IQ?", "ja": "あなたの恋愛IQ、上位何%？", "zh-CN": "我的恋爱IQ，超过百分之几？", "zh-TW": "我的戀愛IQ，贏過百分之幾？", "vi": "IQ tình yêu của tôi thuộc top bao nhiêu %?", "id": "IQ pacaran kamu masuk berapa % teratas?"}',
  '{"ko": "15가지 연애 상황에서 관계에 도움이 되는 선택을 가려, 나의 연애 IQ와 상위 몇 %인지 알려드립니다.", "en": "Fifteen dating situations. Pick the move that helps, then see your dating IQ and what percent you land in.", "ja": "15の恋愛場面で関係の役に立つ選び方を選ぶと、恋愛IQと上位何%かが分かります。", "zh-CN": "在15个恋爱场景里选出对关系真正有帮助的做法，看看你的恋爱IQ超过百分之几的人。", "zh-TW": "在15個戀愛情境裡選出對關係真正有幫助的做法，看看你的戀愛IQ贏過百分之幾。", "vi": "15 tình huống yêu đương. Chọn cách thật sự có ích, rồi xem IQ tình yêu của bạn thuộc top bao nhiêu %.", "id": "15 situasi pacaran. Pilih langkah yang benar-benar membantu, lalu lihat IQ pacaran kamu masuk berapa % teratas."}',
  'p3_test_love_iq_percent.webp',
  'psychology',
  'personality',
  'quiz',
  '{"ko": ["연애IQ", "연애퀴즈", "연애상식"], "en": ["dating IQ", "dating quiz", "relationship basics"], "ja": ["恋愛IQ", "恋愛クイズ", "恋愛の常識"], "zh-CN": ["恋爱IQ", "恋爱测验", "恋爱常识"], "zh-TW": ["戀愛IQ", "戀愛測驗", "戀愛常識"], "vi": ["IQ tình yêu", "quiz tình yêu", "kiến thức yêu đương"], "id": ["IQ pacaran", "kuis pacaran", "dasar hubungan"]}',
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
