-- 연인이 서운해하는 나의 말투 TOP3
-- slug: phase3-hurtful-tone-top3
-- thumbnail: p3_test_hurtful_tone_top3.webp
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
  'phase3-hurtful-tone-top3',
  '{"ko": "연인이 서운해하는 나의 말투 TOP3", "en": "Words That Hurt My Partner TOP 3", "ja": "恋人が傷つく私の話し方 TOP3", "zh-CN": "让恋人委屈的说话方式 TOP3", "zh-TW": "讓戀人委屈的說話方式 TOP3", "vi": "Cách nói làm người yêu tổn thương TOP 3", "id": "Cara Bicara yang Menyakiti Pasangan TOP 3"}',
  '{"ko": "나는 몰랐는데, 상대는 서운했던 말투가 있다면? 12가지 장면에서 연인이 서운해할 가능성이 큰 말투 TOP3를 알려드립니다.", "en": "Habits you barely notice can still sting. Twelve scenes reveal the top 3 ways you speak that may leave your partner hurt.", "ja": "自分では気づかない癖が、相手を傷つけることも。12の場面で、傷つきやすい話し方TOP3を診断。", "zh-CN": "你没注意到的习惯，也可能让对方受伤。十二个场景测出最容易让恋人委屈的说话方式 TOP3。", "zh-TW": "你沒注意到的習慣，也可能讓對方受傷。十二個場景測出最容易讓戀人委屈的說話方式 TOP3。", "vi": "Thói quen bạn không để ý cũng có thể làm họ đau. Mười hai cảnh cho ra TOP 3 cách nói dễ khiến người yêu tổn thương.", "id": "Kebiasaan yang tak kamu sadari bisa menyakiti mereka. Dua belas adegan mengungkap TOP 3 cara bicara yang paling mungkin membuat pasangan tersinggung."}',
  'p3_test_hurtful_tone_top3.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["대화스타일", "연애테스트"], "en": ["communication style", "dating quiz"], "ja": ["話し方", "恋愛診断"], "zh-CN": ["说话方式", "恋爱测试"], "zh-TW": ["說話方式", "戀愛測試"], "vi": ["cách nói chuyện", "quiz hẹn hò"], "id": ["gaya bicara", "kuis dating"]}',
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
