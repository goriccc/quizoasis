-- 나라별 인사말 맞추기 챌린지
-- slug: phase3-world-greeting-challenge
-- thumbnail: p3_quiz_world_greeting_challenge.webp

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
  'phase3-world-greeting-challenge',
  '{"ko": "나라별 인사말 맞추기 챌린지", "en": "World Greeting Challenge", "ja": "世界の挨拶当てチャレンジ", "zh-CN": "世界各国问候语挑战", "zh-TW": "世界各國問候語挑戰", "vi": "Thử thách đoán lời chào thế giới", "id": "Tantangan Tebak Salam Dunia"}',
  '{"ko": "12가지 세계 인사말 이미지로 나라를 맞춰보세요. Bonjour부터 Talofa까지, 세계 언어 고수 등급을 확인하세요!", "en": "Match 12 greeting images to their countries. From Bonjour to Talofa—find your world language rank!", "ja": "12の世界の挨拶画像で国を当てましょう。BonjourからTalofaまで、世界言語マスター等級を確認！", "zh-CN": "通过12道世界问候语图片猜国家。从Bonjour到Talofa，测测你的世界语言等级！", "zh-TW": "透過12道世界問候語圖片猜國家。從Bonjour到Talofa，測測你的世界語言等級！", "vi": "Đoán quốc gia qua 12 ảnh lời chào thế giới. Từ Bonjour đến Talofa—xem cấp độ ngôn ngữ của bạn!", "id": "Tebak negara dari 12 gambar salam dunia. Dari Bonjour ke Talofa—cek level bahasa duniamu!"}',
  'p3_quiz_world_greeting_challenge.webp',
  'knowledge',
  'challenge',
  'quiz',
  '{"ko": ["세계인사말", "언어상식", "퀴즈", "다국어", "이거어느나라말"], "en": ["world greeting", "language quiz", "quiz", "multilingual", "guess country"], "ja": ["世界の挨拶", "言語クイズ", "クイズ", "多言語", "どこの国"], "zh-CN": ["世界问候", "语言常识", "测验", "多语言", "哪国语言"], "zh-TW": ["世界問候", "語言常識", "測驗", "多語言", "哪國語言"], "vi": ["lời chào", "ngôn ngữ", "quiz", "đa ngôn ngữ", "đoán quốc gia"], "id": ["salam dunia", "bahasa", "kuis", "multibahasa", "tebak negara"]}',
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
