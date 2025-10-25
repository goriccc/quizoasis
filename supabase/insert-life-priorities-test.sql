-- 나의 인생 우선순위 찾기 테스트 데이터 삽입
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
  'life-priorities',
  '{
    "ko": "나의 인생 우선순위 찾기",
    "en": "Find My Life Priorities",
    "ja": "私の人生の優先順位を見つける",
    "zh-CN": "找到我的人生优先级",
    "zh-TW": "找到我的人生優先級",
    "vi": "Tìm Thứ tự Ưu tiên Cuộc sống của Tôi",
    "id": "Temukan Prioritas Hidup Saya"
  }',
  '{
    "ko": "당신 인생에서 정말 중요한 것은 무엇인가요?",
    "en": "What is truly important in your life?",
    "ja": "あなたの人生で本当に重要なことは何ですか？",
    "zh-CN": "生活中真正重要的是什么？",
    "zh-TW": "生活中真正重要的是什麼？",
    "vi": "Điều gì thực sự quan trọng trong cuộc sống của bạn?",
    "id": "Apa yang benar-benar penting dalam hidup Anda?"
  }',
  'test_205_life_priorities.jpg',
  'dating',
  'love',
  '{
    "ko": ["자기이해"],
    "en": ["Self-understanding"],
    "ja": ["自己理解"],
    "zh-CN": ["自我理解"],
    "zh-TW": ["自我理解"],
    "vi": ["Tự hiểu"],
    "id": ["Pemahaman diri"]
  }',
  0
);

