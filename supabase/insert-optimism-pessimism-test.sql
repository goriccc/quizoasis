-- 낙관 vs 비관 테스트 데이터 삽입
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
  'optimism-pessimism-test',
  '{
    "ko": "나는 낙관주의일까? vs 비관주의일까?",
    "en": "Am I an Optimist or Pessimist?",
    "ja": "私は楽観主義者か悲観主義者か？",
    "zh-CN": "我是乐观主义者还是悲观主义者？",
    "zh-TW": "我是樂觀主義者還是悲觀主義者？",
    "vi": "Tôi là người lạc quan hay bi quan?",
    "id": "Apakah saya optimis atau pesimis?"
  }',
  '{
    "ko": "컵에 물이 반? 반이나 있다 vs 반밖에 없다",
    "en": "Cup half full or half empty?",
    "ja": "コップに水が半分？半分もある vs 半分しかない",
    "zh-CN": "杯子半满还是半空？",
    "zh-TW": "杯子半滿還是半空？",
    "vi": "Cốc nước đầy một nửa hay còn một nửa?",
    "id": "Cangkir setengah penuh atau setengah kosong?"
  }',
  'test_204_optimism_vs_pessimism.jpg',
  'dating',
  'love',
  '{
    "ko": ["성격"],
    "en": ["Personality"],
    "ja": ["性格"],
    "zh-CN": ["性格"],
    "zh-TW": ["性格"],
    "vi": ["Tính cách"],
    "id": ["Kepribadian"]
  }',
  0
);

