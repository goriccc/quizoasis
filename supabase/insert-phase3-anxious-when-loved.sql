-- 나는 왜 연인이 잘해줄수록 불안해질까?
-- slug: phase3-anxious-when-loved
-- thumbnail: p3_test_anxious_when_loved.webp
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
  'phase3-anxious-when-loved',
  '{"ko": "나는 왜 연인이 잘해줄수록 불안해질까?", "en": "Why Do I Get Anxious the More My Partner Treats Me Well?", "ja": "なぜ恋人に優しくされるほど不安になるの？", "zh-CN": "为什么恋人越对我好，我反而越不安？", "zh-TW": "為什麼戀人越對我好，我反而越不安？", "vi": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an?", "id": "Kenapa Semakin Dicintai, Malah Semakin Cemas?"}',
  '{"ko": "잘해주는 사람 곁인데, 왜 마음 한쪽은 자꾸 불안할까? 10가지 상황으로 내가 행복할수록 불안한 진짜 이유와 마음을 안정시키는 법을 알려드립니다.", "en": "You''re with someone who treats you so well — so why does part of you keep feeling anxious? These 10 scenarios reveal the real reason happiness makes you uneasy, and how to steady your heart.", "ja": "大切にしてくれる人のそばなのに、なぜ心の片隅がざわつくの？10の場面で、幸せなほど不安になる本当の理由と、心を落ち着ける方法をお伝えします。", "zh-CN": "明明身边是对你好的人，为什么心里还是会发慌？用10个情境，告诉你越幸福越不安的真正原因，以及让心安定下来的方法。", "zh-TW": "明明身邊是對你好的人，為什麼心裡還是會發慌？用10個情境，告訴你越幸福越不安的真正原因，以及讓心安定下來的方法。", "vi": "Bên cạnh người đối tốt với mình, sao một góc lòng vẫn thấp thỏm? 10 tình huống giúp bạn thấy lý do thật sự vì sao càng hạnh phúc càng bất an, và cách để lòng dịu lại.", "id": "Di samping orang yang baik padamu, kenapa satu sudut hati tetap gelisah? Lewat 10 situasi, ketahui alasan asli kenapa semakin bahagia justru semakin cemas — dan cara menenangkan hati."}',
  'p3_test_anxious_when_loved.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애불안", "애착", "연애심리"], "en": ["Dating Anxiety", "Attachment", "Dating Psychology"], "ja": ["恋愛不安", "愛着", "恋愛心理"], "zh-CN": ["恋爱焦虑", "依恋", "恋爱心理"], "zh-TW": ["戀愛焦慮", "依戀", "戀愛心理"], "vi": ["Lo âu tình cảm", "Gắn bó", "Tâm lý yêu"], "id": ["Kecemasan Cinta", "Attachment", "Psikologi Pacaran"]}',
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
