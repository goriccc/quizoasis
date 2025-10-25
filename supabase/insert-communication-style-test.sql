-- 소통 스타일 테스트 데이터 삽입
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
  'communication-style-test',
  '{
    "ko": "당신의 소통 스타일은?",
    "en": "What is your communication style?",
    "ja": "あなたのコミュニケーションスタイルは？",
    "zh-CN": "你的沟通风格是什么？",
    "zh-TW": "你的溝通風格是什麼？",
    "vi": "Phong cách giao tiếp của bạn là gì?",
    "id": "Apa gaya komunikasi Anda?"
  }',
  '{
    "ko": "직설적 vs 간접적 vs 감성적 vs 논리적",
    "en": "Direct vs Indirect vs Emotional vs Logical",
    "ja": "直接的 vs 間接的 vs 感情的 vs 論理的",
    "zh-CN": "直接 vs 间接 vs 感性 vs 逻辑",
    "zh-TW": "直接 vs 間接 vs 感性 vs 邏輯",
    "vi": "Trực tiếp vs Gián tiếp vs Cảm xúc vs Logic",
    "id": "Langsung vs Tidak langsung vs Emosional vs Logis"
  }',
  'test_207_communication_style.jpg',
  'dating',
  'love',
  '{
    "ko": ["소통", "관계", "성격"],
    "en": ["Communication", "Relationships", "Personality"],
    "ja": ["コミュニケーション", "関係", "性格"],
    "zh-CN": ["沟通", "关系", "性格"],
    "zh-TW": ["溝通", "關係", "性格"],
    "vi": ["Giao tiếp", "Mối quan hệ", "Tính cách"],
    "id": ["Komunikasi", "Hubungan", "Kepribadian"]
  }',
  0
);

