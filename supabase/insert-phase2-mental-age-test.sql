
-- Phase 2 Mental Age Test Data
INSERT INTO tests (
  slug, title, description, thumbnail, type, category, tags, play_count
) VALUES (
  'phase2_mental-age-test',
  $$ {
    "ko": "나의 '정신 연령' 테스트",
    "en": "My 'Mental Age' Test",
    "ja": "私の「精神年齢」テスト",
    "zh-CN": "我的「精神年龄」测试",
    "zh-TW": "我的「精神年齡」測試",
    "vi": "Bài kiểm tra 'Tuổi tinh thần' của tôi",
    "id": "Tes 'Usia Mental' Saya"
  }$$,
  $$ {
    "ko": "당신의 속마음은 몇 살인가요? 주민등록증 나이는 숫자에 불과합니다. 나의 정신 연령 측정하기 🧠",
    "en": "How old is your inner self? Your ID age is just a number. Measure my mental age 🧠",
    "ja": "あなたの心は何歳ですか？住民登録証の年齢は単なる数字です。私の精神年齢を測定する 🧠",
    "zh-CN": "你的内心几岁了？身份证上的年龄只是数字。测量我的精神年龄 🧠",
    "zh-TW": "你的內心幾歲了？身分證上的年齡只是數字。測量我的精神年齡 🧠",
    "vi": "Tâm hồn bạn bao nhiêu tuổi? Tuổi trên CMND chỉ là con số. Đo tuổi tinh thần của tôi 🧠",
    "id": "Berapa usia batin Anda? Usia di KTP hanyalah angka. Ukur usia mental saya 🧠"
  }$$,
  'phase2_test_143_mental_age.jpg',
  'psychology',
  'personality',
  $$ {
    "ko": ["심리", "재미"],
    "en": ["Psychology", "Fun"],
    "ja": ["心理学", "楽しい"],
    "zh-CN": ["心理", "有趣"],
    "zh-TW": ["心理", "有趣"],
    "vi": ["Tâm lý", "Vui vẻ"],
    "id": ["Psikologi", "Menyenangkan"]
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
