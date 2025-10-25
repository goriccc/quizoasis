-- 리더십 스타일 테스트 데이터 삽입
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
  'leadership-style-test',
  '{
    "ko": "당신은 어떤 리더인가요?",
    "en": "What kind of leader are you?",
    "ja": "あなたはどんなリーダーですか？",
    "zh-CN": "你是什么样的领导者？",
    "zh-TW": "你是什麼樣的領導者？",
    "vi": "Bạn là loại lãnh đạo nào?",
    "id": "Jenis pemimpin apa Anda?"
  }',
  '{
    "ko": "리더십 심화 진단! 당신만의 리더십 스타일은?",
    "en": "In-depth leadership diagnosis! What is your leadership style?",
    "ja": "リーダーシップ深層診断！あなただけのリーダーシップスタイルは？",
    "zh-CN": "深度领导力诊断！你的领导风格是什么？",
    "zh-TW": "深度領導力診斷！你的領導風格是什麼？",
    "vi": "Chẩn đoán lãnh đạo sâu sắc! Phong cách lãnh đạo của bạn là gì?",
    "id": "Diagnosis kepemimpinan mendalam! Apa gaya kepemimpinan Anda?"
  }',
  'test_202_leadership_style.jpg',
  'career',
  'career',
  '{
    "ko": ["성격", "직업"],
    "en": ["Personality", "Job"],
    "ja": ["性格", "職業"],
    "zh-CN": ["性格", "职业"],
    "zh-TW": ["性格", "職業"],
    "vi": ["Tính cách", "Nghề nghiệp"],
    "id": ["Kepribadian", "Pekerjaan"]
  }',
  0
);
