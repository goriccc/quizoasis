-- 연애 불안 버튼 TOP3
-- slug: phase3-anxiety-button-top3
-- thumbnail: p3_test_anxiety_button_top3.webp
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
  'phase3-anxiety-button-top3',
  '{"ko": "연애 불안 버튼 TOP3", "en": "Love Anxiety Buttons TOP 3", "ja": "恋愛不安ボタン TOP3", "zh-CN": "恋爱焦虑按钮 TOP3", "zh-TW": "戀愛焦慮按鈕 TOP3", "vi": "Nút lo âu yêu đương TOP 3", "id": "Tombol Cemas Cinta TOP 3"}',
  '{"ko": "연인의 어떤 행동에 가장 흔들릴까요? 12가지 장면에서 내 불안 버튼 상위 3개를 알려드립니다.", "en": "Which of your partner''s moves shakes you most? Twelve scenes reveal your top 3 anxiety buttons.", "ja": "相手のどの行動がいちばん揺さぶる？12の場面で、あなたの不安ボタンTOP3を診断。", "zh-CN": "对方哪一个举动最容易让你心慌？十二个场景测出你的焦虑按钮 TOP3。", "zh-TW": "對方哪一個舉動最容易讓你心慌？十二個場景測出你的焦慮按鈕 TOP3。", "vi": "Hành động nào của người ấy làm bạn lung lay nhất? Mười hai cảnh cho ra TOP 3 nút lo âu của bạn.", "id": "Gerakan pasangan mana yang paling mengguncangmu? Dua belas adegan mengungkap TOP 3 tombol cemasmu."}',
  'p3_test_anxiety_button_top3.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애불안", "연애테스트", "자기이해"], "en": ["love anxiety", "dating quiz", "self-insight"], "ja": ["恋愛不安", "診断", "自己理解"], "zh-CN": ["恋爱焦虑", "恋爱测试", "自我了解"], "zh-TW": ["戀愛焦慮", "戀愛測驗", "自我了解"], "vi": ["lo âu yêu đương", "quiz hẹn hò", "tự hiểu mình"], "id": ["cemas cinta", "kuis dating", "wawasan diri"]}',
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
