-- 지금 연애를 시작하면 잘될 확률은?
-- slug: phase3-start-love-success
-- thumbnail: p3_test_start_love_success.webp

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
  'phase3-start-love-success',
  '{"ko": "지금 연애를 시작하면 잘될 확률은?", "en": "If I start dating now, what are the odds?", "ja": "今、恋愛を始めたらうまくいく確率は？", "zh-CN": "现在开始恋爱，能顺利的概率是多少？", "zh-TW": "現在開始談戀愛，會順利的機率是多少？", "vi": "Nếu bắt đầu yêu ngay bây giờ, khả năng ổn là bao nhiêu?", "id": "Kalau mulai pacaran sekarang, peluangnya lancar berapa?"}',
  '{"ko": "10가지 상황에서 마음 여유, 이전 연애의 정리, 일상의 균형을 점수로 합산해 지금 연애를 시작했을 때의 성공 확률을 알려드립니다.", "en": "Ten situations add up your room to feel, how finished the last relationship is, and how steady your days are. You get the odds that dating would go well if you started now.", "ja": "10の場面から、心の余裕、前の恋の整理、日常のバランスを点数にして、今恋愛を始めたらうまくいく確率を出します。", "zh-CN": "用10个情境，把心里的余力、上一段感情有没有放下、生活是否平衡加成分数，告诉你现在开始恋爱能顺利的概率。", "zh-TW": "用10個情境，把心裡的餘力、上一段感情有沒有放下、生活是否平衡加成分數，告訴你現在開始談戀愛會順利的機率。", "vi": "Mười tình huống cộng điểm sự thư thái, việc khép lại mối cũ và cân bằng ngày thường, rồi cho bạn khả năng một mối quan hệ sẽ ổn nếu bắt đầu ngay.", "id": "Sepuluh situasi menjumlahkan kelonggaran hati, seberapa selesai hubungan yang lalu, dan keseimbangan harimu, lalu memberi peluang pacaran berjalan baik jika kamu mulai sekarang."}',
  'p3_test_start_love_success.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["솔로탈출", "연애타이밍", "연애테스트"], "en": ["ready to date", "when to date", "dating quiz"], "ja": ["恋愛を始める", "恋愛のタイミング", "恋愛診断"], "zh-CN": ["脱单", "恋爱时机", "恋爱测试"], "zh-TW": ["脫單", "戀愛時機", "戀愛測驗"], "vi": ["thoát ế", "thời điểm yêu", "test tình yêu"], "id": ["lepas jomblo", "waktu mulai pacaran", "tes pacaran"]}',
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
