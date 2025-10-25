-- 독립 vs 의존 테스트 데이터 삽입
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
  'independence-vs-dependence-test',
  '{
    "ko": "난 독립적 스타일? vs 의존적 스타일?",
    "en": "Am I Independent or Dependent?",
    "ja": "私は独立スタイル？VS依存スタイル？",
    "zh-CN": "我是独立风格还是依赖风格？",
    "zh-TW": "我是獨立風格還是依賴風格？",
    "vi": "Tôi là phong cách độc lập hay phụ thuộc?",
    "id": "Apakah saya gaya mandiri atau bergantung?"
  }',
  '{
    "ko": "혼자서도 괜찮아 vs 누군가 필요해",
    "en": "Okay alone vs Need someone",
    "ja": "一人でも大丈夫 vs 誰かが必要",
    "zh-CN": "独自也可以 vs 需要有人",
    "zh-TW": "獨自也可以 vs 需要有人",
    "vi": "Ổn một mình vs Cần ai đó",
    "id": "Baik-baik saja sendirian vs Perlu seseorang"
  }',
  'test_209_independence_vs_dependence.jpg',
  'dating',
  'love',
  '{
    "ko": ["성격", "자기이해"],
    "en": ["Personality", "Self-understanding"],
    "ja": ["性格", "自己理解"],
    "zh-CN": ["性格", "自我理解"],
    "zh-TW": ["性格", "自我理解"],
    "vi": ["Tính cách", "Tự hiểu"],
    "id": ["Kepribadian", "Pemahaman diri"]
  }',
  0
);

