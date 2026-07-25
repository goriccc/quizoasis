-- 나의 '창의성' 잠재력
-- slug: phase3-creativity-potential
-- thumbnail: p3_test_creativity_potential.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-creativity-potential',
  '{"ko": "나의 ''창의성'' 잠재력", "en": "My Creativity Potential", "ja": "私の「創造性」潜在力", "zh-CN": "我的「创造力」潜能", "zh-TW": "我的「創造力」潛能", "vi": "Tiềm năng sáng tạo của tôi", "id": "Potensi Kreativitasku"}',
  '{"ko": "12가지 질문으로 나의 창의적 사고 패턴을 분석하고 어떤 유형의 창의성이 가장 강하게 발현되는지 찾아드립니다.", "en": "Analyze your creative thinking patterns through 12 questions and discover which type of creativity shines strongest in you.", "ja": "12の質問で創造的思考パターンを分析し、どのタイプの創造性が最も強く発現するか見つけます。", "zh-CN": "通过12个问题分析你的创意思维模式，找出哪种创造力在你身上最强。", "zh-TW": "透過12個問題分析你的創意思維模式，找出哪種創造力在你身上最強。", "vi": "Phân tích mô hình tư duy sáng tạo qua 12 câu hỏi và tìm loại sáng tạo nào phát huy mạnh nhất ở bạn.", "id": "Analisis pola berpikir kreatifmu lewat 12 pertanyaan dan temukan jenis kreativitas mana yang paling kuat pada dirimu."}',
  'p3_test_creativity_potential.webp',
  'psychology',
  'career',
  'scenario_4',
  '{"ko": ["창의성", "아이디어", "기획", "디자인", "문제해결"], "en": ["creativity", "ideas", "planning", "design", "problem solving"], "ja": ["創造性", "アイデア", "企画", "デザイン", "問題解決"], "zh-CN": ["创造力", "创意", "策划", "设计", "问题解决"], "zh-TW": ["創造力", "創意", "企劃", "設計", "問題解決"], "vi": ["sáng tạo", "ý tưởng", "lập kế hoạch", "thiết kế", "giải quyết vấn đề"], "id": ["kreativitas", "ide", "perencanaan", "desain", "pemecahan masalah"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
