INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  play_count
) VALUES (
  'phase2_conflict_reason_test',
  '{
    "ko": "내가 연인과 자꾸 싸우는 이유",
    "en": "Why Do I Keep Fighting with My Partner?",
    "ja": "恋人とよく喧嘩してしまう理由",
    "zh-CN": "为什么我总是和恋人吵架？",
    "zh-TW": "為什麼我總是和戀人吵架？",
    "vi": "Tại sao tôi cứ cãi nhau với người yêu?",
    "id": "Mengapa Saya Sering Bertengkar dengan Pasangan?"
  }',
  '{
    "ko": "사랑하는데 왜 자꾸 싸우는 걸까요?",
    "en": "Why do we keep fighting even though we love each other?",
    "ja": "愛し合っているのに、なぜ喧嘩ばかりしてしまうのでしょうか？",
    "zh-CN": "明明相爱，为什么总是吵架？",
    "zh-TW": "明明相愛，為什麼總是吵架？",
    "vi": "Tại sao chúng ta cứ cãi nhau dù yêu nhau?",
    "id": "Mengapa kita terus bertengkar meskipun saling mencintai?"
  }',
  'phase2_test_142_conflict_reason.jpg',
  'dating',
  'psychology',
  '{
    "ko": ["연애", "심리"],
    "en": ["Dating", "Psychology"],
    "ja": ["恋愛", "心理"],
    "zh-CN": ["恋爱", "心理"],
    "zh-TW": ["戀愛", "心理"],
    "vi": ["Hẹn hò", "Tâm lý"],
    "id": ["Kencan", "Psikologi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
