-- 나의 '도파민 절제력' 지수
-- slug: phase3-dopamine-self-control-index
-- thumbnail: p3_test_dopamine_self_control_index.webp

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
  'phase3-dopamine-self-control-index',
  '{"ko": "나의 ''도파민 절제력'' 지수", "en": "My ''Dopamine Self-Control'' Index", "ja": "私の『ドーパミン自制力』指数", "zh-CN": "我的「多巴胺自控力」指数", "zh-TW": "我的「多巴胺自控力」指數", "vi": "Chỉ số ''kiềm chế dopamine'' của tôi", "id": "Indeks ''Pengendalian Dopamin''-ku"}',
  '{"ko": "12가지 질문으로 측정하는 내 도파민 절제력 지수. 알고리즘에 얼마나 장악돼 있는지 솔직하게 진단해 드립니다.", "en": "Measure your dopamine self-control index with 12 questions. An honest diagnosis of how much the algorithm has taken over you.", "ja": "12の質問で測る私のドーパミン自制力指数。アルゴリズムにどれだけ支配されているか正直に診断します。", "zh-CN": "通过12个问题测量你的多巴胺自控力指数。诚实诊断你被算法掌控的程度。", "zh-TW": "透過12個問題測量你的多巴胺自控力指數。誠實診斷你被演算法掌控的程度。", "vi": "Đo chỉ số kiềm chế dopamine của bạn qua 12 câu hỏi. Chẩn đoán thẳng thắn mức độ bạn bị thuật toán chi phối.", "id": "Ukur indeks pengendalian dopaminmu lewat 12 pertanyaan. Diagnosis jujur seberapa jauh kamu dikuasai algoritma."}',
  'p3_test_dopamine_self_control_index.webp',
  'psychology',
  'personality',
  '{"ko": ["도파민", "디지털중독", "절제력"], "en": ["Dopamine", "Digital Addiction", "Self-Control"], "ja": ["ドーパミン", "デジタル依存", "自制力"], "zh-CN": ["多巴胺", "数字成瘾", "自控力"], "zh-TW": ["多巴胺", "數位成癮", "自控力"], "vi": ["Dopamine", "Nghiện kỹ thuật số", "Kiềm chế"], "id": ["Dopamin", "Kecanduan Digital", "Pengendalian Diri"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
