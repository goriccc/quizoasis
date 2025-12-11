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
  'time-perspective-test',
  '{
    "ko": "나는 ''과거'' 지향 vs ''미래'' 지향? (시간 관점 테스트)",
    "en": "Am I ''Past'' Oriented vs ''Future'' Oriented? (Time Perspective Test)",
    "ja": "私は「過去」志向 vs 「未来」志向？(時間観点テスト)",
    "zh-CN": "我是「过去」导向 vs 「未来」导向？(时间观点测试)",
    "zh-TW": "我是「過去」導向 vs 「未來」導向？(時間觀點測試)",
    "vi": "Tôi là ''Quá khứ'' hay ''Tương lai''? (Bài kiểm tra Quan điểm Thời gian)",
    "id": "Apakah Saya Berorientasi ''Masa Lalu'' vs ''Masa Depan''? (Tes Perspektif Waktu)"
  }',
  '{
    "ko": "당신의 시선은 어디를 향해 있나요?",
    "en": "Where is your gaze directed?",
    "ja": "あなたの視線はどこに向かっていますか？",
    "zh-CN": "你的目光朝向哪里？",
    "zh-TW": "你的目光朝向哪裡？",
    "vi": "Ánh mắt của bạn đang hướng về đâu?",
    "id": "Ke mana pandangan Anda diarahkan?"
  }',
  'phase2_test_152_time_perspective.jpg',
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

