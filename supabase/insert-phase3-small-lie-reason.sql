-- 나는 왜 연인에게 사소한 거짓말을 하게 될까?
-- slug: phase3-small-lie-reason
-- thumbnail: p3_test_small_lie_reason.webp
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
  'phase3-small-lie-reason',
  '{"ko": "나는 왜 연인에게 사소한 거짓말을 하게 될까?", "en": "Why Do I Keep Telling Little Lies to My Partner?", "ja": "なぜ恋人に小さな嘘をついてしまうの？", "zh-CN": "为什么总对恋人说些无关紧要的小谎？", "zh-TW": "為什麼總對戀人說些無關緊要的小謊？", "vi": "Tại sao lại hay nói dối nhỏ với người yêu?", "id": "Kenapa Suka Bohong Kecil ke Pacar?"}',
  '{"ko": "굳이 안 해도 될 말인데, 왜 자꾸 둘러대게 될까? 10가지 상황으로 내가 작은 거짓말을 하게 되는 진짜 이유와 솔직해지는 법을 알려드립니다.", "en": "Why do you keep spinning stories you didn''t need to tell? These 10 scenarios reveal the real reason behind your little lies — and how to get more honest.", "ja": "言わなくてもいいのに、ついごまかしちゃうのはなぜ？ 10の場面で、小さな嘘の本当の理由と正直になれる方法を教えます。", "zh-CN": "明明不用说，为什么还是会随口圆过去？用10个情境找出你说小谎的真正原因，以及怎样变得更坦诚。", "zh-TW": "明明不用說，為什麼還是會隨口圓過去？用10個情境找出你說小謊的真正原因，以及怎樣變得更坦誠。", "vi": "Chẳng cần nói vậy mà sao vẫn hay viện cớ? 10 tình huống giúp bạn tìm ra lý do thật sự đằng sau lời nói dối nhỏ — và cách thành thật hơn.", "id": "Nggak perlu dibohongi, kenapa tetap suka mengelak? Lewat 10 situasi, temukan alasan sejati di balik bohong kecilmu — dan cara jadi lebih jujur."}',
  'p3_test_small_lie_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애거짓말", "연애심리", "연애유형"], "en": ["Dating Lies", "Dating Psychology", "Dating Types"], "ja": ["恋愛の嘘", "恋愛心理", "恋愛タイプ"], "zh-CN": ["恋爱小谎", "恋爱心理", "恋爱类型"], "zh-TW": ["戀愛小謊", "戀愛心理", "戀愛類型"], "vi": ["Nói dối khi yêu", "Tâm lý tình yêu", "Kiểu yêu"], "id": ["Bohong Pacaran", "Psikologi Pacaran", "Tipe Pacaran"]}',
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
