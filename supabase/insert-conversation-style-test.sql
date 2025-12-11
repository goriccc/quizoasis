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
  'conversation-style-test',
  '{
    "ko": "나의 ''대화'' 스타일 테스트 (소통 방식 진단)",
    "en": "My ''Conversation'' Style Test (Communication Method Diagnosis)",
    "ja": "私の「会話」スタイルテスト（コミュニケーション方法診断）",
    "zh-CN": "我的「对话」风格测试（沟通方式诊断）",
    "zh-TW": "我的「對話」風格測試（溝通方式診斷）",
    "vi": "Bài kiểm tra Phong cách ''Trò chuyện'' của tôi (Chẩn đoán Phương thức Giao tiếp)",
    "id": "Tes Gaya ''Percakapan'' Saya (Diagnosis Metode Komunikasi)"
  }',
  '{
    "ko": "당신과 대화하면 시간이 어떻게 가나요?",
    "en": "How does time pass when talking with you?",
    "ja": "あなたと話すと時間はどう過ぎますか？",
    "zh-CN": "和你聊天时，时间过得怎么样？",
    "zh-TW": "和你聊天時，時間過得怎麼樣？",
    "vi": "Thời gian trôi như thế nào khi nói chuyện với bạn?",
    "id": "Bagaimana waktu berlalu saat berbicara dengan Anda?"
  }',
  'phase2_test_155_conversation_style.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리", "인간관계", "자아탐색"],
    "en": ["Psychology", "Relationships", "Self-discovery"],
    "ja": ["心理", "人間関係", "自己探求"],
    "zh-CN": ["心理", "人际关系", "自我探索"],
    "zh-TW": ["心理", "人際關係", "自我探索"],
    "vi": ["Tâm lý", "Quan hệ", "Khám phá bản thân"],
    "id": ["Psikologi", "Hubungan", "Penemuan diri"]
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

