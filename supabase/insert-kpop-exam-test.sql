-- K-POP 팬덤 능력 고사 (덕력 측정기) 테스트 데이터 삽입
INSERT INTO tests (
  slug, title, description, thumbnail, type, category, tags, created_at, updated_at
) VALUES (
  'kpop-exam-test',
  '{
    "ko": "K-POP 팬덤 능력 고사 (덕력 측정기)",
    "en": "K-POP Fan Knowledge Exam (Fan Level Test)",
    "ja": "K-POPファン知識試験（ファンレベルテスト）",
    "zh-CN": "K-POP粉丝知识考试（粉丝等级测试）",
    "zh-TW": "K-POP粉絲知識考試（粉絲等級測試）",
    "vi": "Kỳ thi kiến thức fan K-POP (Bài kiểm tra cấp độ fan)",
    "id": "Ujian Pengetahuan Penggemar K-POP (Tes Level Penggemar)"
  }'::jsonb,
  '{
    "ko": "당신의 덕력은 몇 레벨입니까?",
    "en": "What level is your K-POP fan knowledge?",
    "ja": "あなたのK-POPファン知識レベルはいくつですか？",
    "zh-CN": "你的K-POP粉丝知识是几级？",
    "zh-TW": "你的K-POP粉絲知識是幾級？",
    "vi": "Kiến thức K-POP của bạn ở cấp độ nào?",
    "id": "Berapa level pengetahuan K-POP Anda?"
  }'::jsonb,
  'phase2_test_076_kpop_exam.jpg',
  'dating',
  'love',
  '{
    "ko": ["지식", "챌린지"],
    "en": ["Knowledge", "Challenge"],
    "ja": ["知識", "チャレンジ"],
    "zh-CN": ["知识", "挑战"],
    "zh-TW": ["知識", "挑戰"],
    "vi": ["Kiến thức", "Thử thách"],
    "id": ["Pengetahuan", "Tantangan"]
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW(),
  created_at = CASE WHEN tests.created_at IS NULL THEN NOW() ELSE tests.created_at END;




