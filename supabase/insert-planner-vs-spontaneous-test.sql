-- 계획형 vs 즉흥형 테스트 데이터 삽입
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
  'planner-vs-spontaneous-test',
  '{
    "ko": "나는 계획형일까? vs 즉흥형일까?",
    "en": "Am I a Planner or Spontaneous?",
    "ja": "私は計画型か即興型か？",
    "zh-CN": "我是计划型还是即兴型？",
    "zh-TW": "我是計劃型還是即興型？",
    "vi": "Tôi là người lập kế hoạch hay tùy hứng?",
    "id": "Apakah saya Perencana atau Spontan?"
  }',
  '{
    "ko": "미리 계획? 그때그때 결정? 당신의 스타일은?",
    "en": "Plan ahead? Decide on the spot? What is your style?",
    "ja": "事前に計画？その時その時で決める？あなたのスタイルは？",
    "zh-CN": "提前计划？当场决定？你的风格是什么？",
    "zh-TW": "提前計劃？當場決定？你的風格是什麼？",
    "vi": "Lên kế hoạch trước? Quyết định tại chỗ? Phong cách của bạn là gì?",
    "id": "Rencanakan sebelumnya? Putuskan di tempat? Apa gaya Anda?"
  }',
  'test_219_planner_vs_spontaneous.jpg',
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

