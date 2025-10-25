-- 강박 스타일 테스트 데이터 삽입
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
  'obsession-test',
  '{
    "ko": "나는 강박 스타일까? vs 건강한 스타일까?",
    "en": "Am I obsessed? vs healthy style?",
    "ja": "私は強迫スタイルか？VS健康的なスタイルか？",
    "zh-CN": "我是强迫型还是健康型？",
    "zh-TW": "我是強迫型還是健康型？",
    "vi": "Tôi là phong cách ám ảnh hay phong cách khỏe mạnh?",
    "id": "Apakah saya gaya obsesif? VS gaya sehat?"
  }',
  '{
    "ko": "완벽함을 추구하는 것? 아니면 강박일까?",
    "en": "Pursuing perfection? Or obsession?",
    "ja": "完璧を追求すること？それとも強迫的？",
    "zh-CN": "追求完美？还是强迫症？",
    "zh-TW": "追求完美？還是強迫症？",
    "vi": "Theo đuổi sự hoàn hảo? Hay ám ảnh?",
    "id": "Mengejar kesempurnaan? Atau obsesi?"
  }',
  'test_203_obsession_vs_healthy.jpg',
  'dating',
  'love',
  '{
    "ko": ["성격", "심리"],
    "en": ["Personality", "Psychology"],
    "ja": ["性格", "心理"],
    "zh-CN": ["性格", "心理"],
    "zh-TW": ["性格", "心理"],
    "vi": ["Tính cách", "Tâm lý"],
    "id": ["Kepribadian", "Psikologi"]
  }',
  0
);

