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
  'conflict-style-test',
  '{
    "ko": "나의 ''갈등 해결'' 스타일 (싸움 유형 진단)",
    "en": "My ''Conflict Resolution'' Style (Fight Type Diagnosis)",
    "ja": "私の「葛藤解決」スタイル（喧嘩タイプ診断）",
    "zh-CN": "我的「冲突解决」风格（吵架类型诊断）",
    "zh-TW": "我的「衝突解決」風格（吵架類型診斷）",
    "vi": "Phong cách ''Giải quyết xung đột'' của tôi (Chẩn đoán kiểu cãi vã)",
    "id": "Gaya ''Penyelesaian Konflik'' Saya (Diagnosis Tipe Pertengkaran)"
  }',
  '{
    "ko": "싸움, 피할 수 없다면 어떻게 하시나요?",
    "en": "If you can''t avoid a fight, what do you do?",
    "ja": "喧嘩、避けられないならどうしますか？",
    "zh-CN": "如果无法避免争吵，你会怎么做？",
    "zh-TW": "如果無法避免爭吵，你會怎麼做？",
    "vi": "Nếu không thể tránh khỏi cãi vã, bạn sẽ làm gì?",
    "id": "Jika Anda tidak bisa menghindari pertengkaran, apa yang akan Anda lakukan?"
  }',
  'phase2_test_156_conflict_style.jpg',
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

