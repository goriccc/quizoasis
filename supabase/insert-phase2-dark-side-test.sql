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
  'phase2_dark_side_test',
  '{
    "ko": "내가 흑화하면? 숨겨진 본성 테스트",
    "en": "What if I turn dark? Hidden Nature Test",
    "ja": "私が黒化したら？隠された本性テスト",
    "zh-CN": "如果我黑化会怎样？隐藏本性测试",
    "zh-TW": "如果我黑化會怎樣？隱藏本性測試",
    "vi": "Nếu tôi trở nên tối tăm? Kiểm tra Bản chất Ẩn giấu",
    "id": "Bagaimana jika saya berubah menjadi gelap? Tes Sifat Tersembunyi"
  }',
  '{
    "ko": "누구나 마음속에 악마 하나쯤은 키우고 있다.",
    "en": "Everyone keeps a devil in their heart.",
    "ja": "誰もが心の中に悪魔を一匹飼っている。",
    "zh-CN": "每个人心中都养着一个恶魔。",
    "zh-TW": "每個人心中都養著一個惡魔。",
    "vi": "Mỗi người đều nuôi một con quỷ trong lòng.",
    "id": "Setiap orang memelihara satu setan di hatinya."
  }',
  'phase2_test_144_dark_side.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "성격", "재미"],
    "en": ["Psychology", "Personality", "Fun"],
    "ja": ["心理", "性格", "面白い"],
    "zh-CN": ["心理", "性格", "有趣"],
    "zh-TW": ["心理", "性格", "有趣"],
    "vi": ["Tâm lý", "Tính cách", "Vui vẻ"],
    "id": ["Psikologi", "Kepribadian", "Menyenangkan"]
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
