-- 나의 '인간관계' 정리 유형 (손절 스타일 테스트) 삽입/업데이트
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
  'phase2_relationship-cut-test',
  $${
    "ko": "나의 '인간관계' 정리 유형 (손절 스타일 테스트)",
    "en": "My 'Relationship' Cleanup Type (Cut-off Style Test)",
    "ja": "私の「人間関係」整理タイプ（手切れスタイルテスト）",
    "zh-CN": "我的'人际关系'整理类型（断交风格测试）",
    "zh-TW": "我的「人際關係」整理類型（斷交風格測試）",
    "vi": "Loại dọn dẹp 'Mối quan hệ' của tôi (Bài test phong cách cắt đứt)",
    "id": "Tipe Pembersihan 'Hubungan' Saya (Test Gaya Pemutusan)"
  }$$,
  $${
    "ko": "당신의 인맥 리스트, 안녕하신가요?",
    "en": "How are your social connections doing?",
    "ja": "あなたの人脈リスト、元気ですか？",
    "zh-CN": "你的人脉列表，还好吗？",
    "zh-TW": "你的人脈列表，還好嗎？",
    "vi": "Danh sách mối quan hệ của bạn, ổn chứ?",
    "id": "Bagaimana jaringan sosial Anda?"
  }$$,
  'phase2_test_153_relationship_cut.jpg',
  'psychology',
  'personality',
  $${
    "ko": ["심리", "자아탐색"],
    "en": ["Psychology", "Self-Exploration"],
    "ja": ["心理", "自己探求"],
    "zh-CN": ["心理", "自我探索"],
    "zh-TW": ["心理", "自我探索"],
    "vi": ["Tâm lý", "Khám phá Bản thân"],
    "id": ["Psikologi", "Eksplorasi Diri"]
  }$$,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
