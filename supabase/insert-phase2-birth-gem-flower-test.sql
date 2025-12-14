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
  'phase2_birth_gem_flower_test',
  '{
    "ko": "나의 탄생석/탄생화 찾기",
    "en": "Find My Birth Gem & Flower",
    "ja": "私の誕生石/誕生花を見つける",
    "zh-CN": "寻找我的诞生石/诞生花",
    "zh-TW": "尋找我的誕生石/誕生花",
    "vi": "Tìm Đá Quý & Hoa Sinh Nhật Của Tôi",
    "id": "Temukan Permata & Bunga Kelahiran Saya"
  }',
  '{
    "ko": "단순히 생일로만 정해진 탄생석은 재미없죠?",
    "en": "Birthstones determined only by birthday are boring, right?",
    "ja": "単に誕生日だけで決まる誕生石はつまらないですよね？",
    "zh-CN": "仅仅由生日决定的诞生石很无聊，对吧？",
    "zh-TW": "僅僅由生日決定的誕生石很無聊，對吧？",
    "vi": "Đá quý sinh nhật chỉ được xác định bởi ngày sinh thật nhàm chán, phải không?",
    "id": "Permata kelahiran yang hanya ditentukan oleh hari ulang tahun membosankan, kan?"
  }',
  'phase2_test_034_birth_gem_flower.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리"],
    "en": ["Psychology"],
    "ja": ["心理"],
    "zh-CN": ["心理"],
    "zh-TW": ["心理"],
    "vi": ["Tâm lý"],
    "id": ["Psikologi"]
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
