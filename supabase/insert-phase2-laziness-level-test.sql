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
  'phase2_laziness_level_test',
  '{
    "ko": "침대와 한 몸? 당신의 ''게으름'' 지수 테스트",
    "en": "Bed and One Body? Your ''Laziness'' Level Test",
    "ja": "ベッドと一体？あなたの「怠け」指数テスト",
    "zh-CN": "床和一体？你的''懒惰''指数测试",
    "zh-TW": "床和一體？你的「懶惰」指數測試",
    "vi": "Giường và một thể? Bài kiểm tra mức độ ''Lười biếng'' của bạn",
    "id": "Tempat Tidur dan Satu Tubuh? Tes Level ''Kemalasan'' Anda"
  }',
  '{
    "ko": "주말에 침대 밖으로 나오는 데 걸리는 시간은?",
    "en": "How long does it take you to get out of bed on weekends?",
    "ja": "週末にベッドから出るのにどれくらい時間がかかりますか？",
    "zh-CN": "周末你从床上起来需要多长时间？",
    "zh-TW": "週末你從床上起來需要多長時間？",
    "vi": "Bạn mất bao lâu để ra khỏi giường vào cuối tuần?",
    "id": "Berapa lama waktu yang Anda butuhkan untuk keluar dari tempat tidur di akhir pekan?"
  }',
  'phase2_test_062_laziness_level.jpg',
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

