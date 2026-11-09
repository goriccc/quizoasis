-- 나는 왜 사랑받아도 허전할까?
-- slug: phase3-empty-even-loved
-- thumbnail: p3_test_empty_even_loved.webp
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
  'phase3-empty-even-loved',
  '{"ko": "나는 왜 사랑받아도 허전할까?", "en": "Why Do I Still Feel Empty Even When I''m Loved?", "ja": "愛されてるのに、なぜ心が空っぽなの？", "zh-CN": "明明被爱着，为什么心里还是空空的？", "zh-TW": "明明被愛著，為什麼心裡還是空空的？", "vi": "Vì sao được yêu rồi mà lòng vẫn trống?", "id": "Kenapa Sudah Dicintai Masih Terasa Kosong?"}',
  '{"ko": "연인은 잘해주는데 왜 마음은 비어 있을까? 10가지 상황에서 채워지지 않는 마음의 정체와 채우는 법을 알려드립니다.", "en": "Your partner treats you well—so why does your heart still feel empty? Ten situations reveal what''s really going on and how to fill it.", "ja": "恋人は大事にしてくれるのに、なぜ心は空いてる？10の場面で埋まらない心の正体と埋め方を教えます。", "zh-CN": "另一半对你很好，为什么心里还是空？十个情境告诉你填不满的心究竟是什么，以及怎么填。", "zh-TW": "另一半對你很好，為什麼心裡還是空？十個情境告訴你填不滿的心究竟是什麼，以及怎麼填。", "vi": "Người yêu đối xử tốt—vậy sao lòng vẫn trống? Mười tình huống giúp bạn thấy rõ khoảng trống và cách lấp đầy.", "id": "Pasangan baik padamu—kenapa hati tetap kosong? Sepuluh situasi mengungkap apa yang sebenarnya terjadi dan cara mengisinya."}',
  'p3_test_empty_even_loved.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애심리"], "en": ["relationship psychology"], "ja": ["恋愛心理"], "zh-CN": ["恋爱心理"], "zh-TW": ["戀愛心理"], "vi": ["tâm lý tình yêu"], "id": ["psikologi hubungan"]}',
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
