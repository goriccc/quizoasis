-- 승부욕 강도 테스트 데이터 삽입
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
  'competitiveness-test',
  '{
    "ko": "나의 승부욕 강도는 몇일까?",
    "en": "How strong is my competitiveness?",
    "ja": "私の勝負欲の強さは？",
    "zh-CN": "我的竞争心有多强？",
    "zh-TW": "我的競爭心有多強？",
    "vi": "Tính cạnh tranh của tôi mạnh đến mức nào?",
    "id": "Seberapa kuat kompetitif saya?"
  }',
  '{
    "ko": "이기고 싶다 vs 즐기면 돼! 당신의 승부욕은?",
    "en": "Want to win vs Just enjoy! What is your competitiveness?",
    "ja": "勝ちたい vs 楽しめばいい！あなたの勝負欲は？",
    "zh-CN": "想赢 vs 享受就好！你的竞争心是什么？",
    "zh-TW": "想贏 vs 享受就好！你的競爭心是什麼？",
    "vi": "Muốn thắng vs Chỉ cần tận hưởng! Tính cạnh tranh của bạn là gì?",
    "id": "Ingin menang vs Nikmati saja! Apa kompetitif Anda?"
  }',
  'test_215_competitiveness.jpg',
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

