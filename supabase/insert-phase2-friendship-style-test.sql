-- 나의 '우정' 스타일 테스트 삽입/업데이트
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
  'phase2_friendship-style-test',
  $${
    "ko": "나의 '우정' 스타일 테스트",
    "en": "My 'Friendship' Style Test",
    "ja": "私の「友情」スタイルテスト",
    "zh-CN": "我的'友谊'风格测试",
    "zh-TW": "我的「友誼」風格測試",
    "vi": "Bài test phong cách 'Tình bạn' của tôi",
    "id": "Test Gaya 'Persahabatan' Saya"
  }$$,
  $${
    "ko": "당신에게 '진정한 친구'는 어떤 의미인가요?",
    "en": "What does a 'true friend' mean to you?",
    "ja": "あなたにとって「真の友達」はどんな意味ですか？",
    "zh-CN": "对你来说'真正的朋友'意味着什么？",
    "zh-TW": "對你來說「真正的朋友」意味著什麼？",
    "vi": "Đối với bạn, 'người bạn thật sự' có nghĩa là gì?",
    "id": "Apa arti 'teman sejati' bagi Anda?"
  }$$,
  'phase2_test_154_friendship_style.jpg',
  'psychology',
  'personality',
  $${
    "ko": ["심리", "자아탐색"],
    "en": ["Psychology", "Self-Exploration"],
    "ja": ["心理", "自己探求"],
    "zh-CN": ["心理", "自我探索"],
    "zh-TW": ["心理", "自我探索"],
    "vi": ["Tâm lý", "Khám phá Bản thân"],
    "id": ["Psikologi", "Eksplorasi Diri"]
  }$$,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
