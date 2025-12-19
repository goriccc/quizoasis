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
  'phase2_reincarnation_animal_test',
  '{
    "ko": "내가 환생한다면 어떤 동물일까?",
    "en": "What animal would I be if I reincarnated?",
    "ja": "私が生まれ変わるならどんな動物？",
    "zh-CN": "如果我转世会是什么动物？",
    "zh-TW": "如果我轉世會是什麼動物？",
    "vi": "Tôi sẽ là con vật gì nếu tái sinh?",
    "id": "Hewan apa yang akan saya jadikan jika reinkarnasi?"
  }',
  '{
    "ko": "현생에 지친 당신, 다음 생은 어떤 모습일까요?",
    "en": "Tired of this life, what will your next life look like?",
    "ja": "現世に疲れたあなた、次の生はどんな姿でしょうか？",
    "zh-CN": "厌倦今生的你，下一世会是什么样子？",
    "zh-TW": "厭倦今生的你，下一世會是什麼樣子？",
    "vi": "Lelah dengan kehidupan ini, bagaimana kehidupan berikutnya?",
    "id": "Lelah dengan kehidupan ini, bagaimana kehidupan berikutnya?"
  }',
  'phase2_test_040_reincarnation_animal.jpg',
  'psychology',
  'healing',
  '{
    "ko": ["심리", "힐링"],
    "en": ["Psychology", "Healing"],
    "ja": ["心理", "ヒーリング"],
    "zh-CN": ["心理", "治愈"],
    "zh-TW": ["心理", "療癒"],
    "vi": ["Tâm lý", "Chữa lành"],
    "id": ["Psikologi", "Penyembuhan"]
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
