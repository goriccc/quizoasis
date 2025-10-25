-- 솔직 vs 절제 테스트 데이터 삽입
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
  'honesty-vs-restraint-test',
  '{
    "ko": "난 솔직 스타일? vs 절제 스타일?",
    "en": "Am I Honest or Restrained?",
    "ja": "私は正直スタイル？VS自制スタイル？",
    "zh-CN": "我是诚实风格还是节制风格？",
    "zh-TW": "我是誠實風格還是節制風格？",
    "vi": "Tôi là phong cách thành thật hay tự chế?",
    "id": "Apakah saya gaya jujur atau menahan diri?"
  }',
  '{
    "ko": "감정 그대로 표현? 아니면 한 번 걸러서?",
    "en": "Express emotions as they are? Or filter first?",
    "ja": "感情そのまま表現？それとも一度フィルターして？",
    "zh-CN": "如实表达情感？还是先过滤？",
    "zh-TW": "如實表達情感？還是先過濾？",
    "vi": "Thể hiện cảm xúc như vốn có? Hay lọc trước?",
    "id": "Ekspresikan emosi apa adanya? Atau filter dulu?"
  }',
  'test_208_honesty_vs_restraint.jpg',
  'dating',
  'love',
  '{
    "ko": ["감정", "성격"],
    "en": ["Emotion", "Personality"],
    "ja": ["感情", "性格"],
    "zh-CN": ["情感", "性格"],
    "zh-TW": ["情感", "性格"],
    "vi": ["Cảm xúc", "Tính cách"],
    "id": ["Emosi", "Kepribadian"]
  }',
  0
);

