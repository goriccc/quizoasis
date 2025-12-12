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
  'soul-drink-test',
  '{
    "ko": "나의 소울 드링크 찾기 (커피 & 와인)",
    "en": "Find My Soul Drink (Coffee & Wine)",
    "ja": "私のソウルドリンクを見つける (コーヒー & ワイン)",
    "zh-CN": "找到我的灵魂饮品 (咖啡 & 葡萄酒)",
    "zh-TW": "找到我的靈魂飲品 (咖啡 & 葡萄酒)",
    "vi": "Tìm Đồ Uống Tâm Hồn Của Tôi (Cà Phê & Rượu Vang)",
    "id": "Temukan Minuman Jiwa Saya (Kopi & Anggur)"
  }',
  '{
    "ko": "당신의 영혼을 채워줄 한 잔은 무엇인가요?",
    "en": "What drink fills your soul?",
    "ja": "あなたの魂を満たす一杯は何ですか？",
    "zh-CN": "什么饮品能填满你的灵魂？",
    "zh-TW": "什麼飲品能填滿你的靈魂？",
    "vi": "Đồ uống nào sẽ làm đầy tâm hồn bạn?",
    "id": "Minuman apa yang mengisi jiwa Anda?"
  }',
  'phase2_test_035_soul_drink.jpg',
  'fun',
  'lifestyle',
  '{
    "ko": ["재미"],
    "en": ["Fun"],
    "ja": ["楽しい"],
    "zh-CN": ["有趣"],
    "zh-TW": ["有趣"],
    "vi": ["Vui vẻ"],
    "id": ["Menyenangkan"]
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
