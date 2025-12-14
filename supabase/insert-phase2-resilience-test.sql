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
  'phase2_resilience_test',
  '{
    "ko": "나의 ''회복탄력성'' 지수 (멘탈 강도 진단)",
    "en": "My ''Resilience'' Index (Mental Strength Diagnosis)",
    "ja": "私の「回復力」指数（メンタル強度診断）",
    "zh-CN": "我的「恢复力」指数（心理强度诊断）",
    "zh-TW": "我的「恢復力」指數（心理強度診斷）",
    "vi": "Chỉ Số ''Khả Năng Phục Hồi'' Của Tôi (Chẩn Đoán Sức Mạnh Tinh Thần)",
    "id": "Indeks ''Ketahanan'' Saya (Diagnosis Kekuatan Mental)"
  }',
  '{
    "ko": "당신의 마음은 시련 앞에서 얼마나 단단한가요?",
    "en": "How strong is your heart in the face of trials?",
    "ja": "あなたの心は試練の前でどれほど強固ですか？",
    "zh-CN": "在考验面前，你的心有多坚强？",
    "zh-TW": "在考驗面前，你的心有多堅強？",
    "vi": "Trái tim của bạn mạnh mẽ đến mức nào trước những thử thách?",
    "id": "Seberapa kuat hati Anda di hadapan cobaan?"
  }',
  'phase2_test_152_resilience.jpg',
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
